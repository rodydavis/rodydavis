// Service Worker for Rody Davis PWA
// Handles offline caching, RSS feed background checks, and native Push Notifications

const CACHE_NAME = "rodydavis-pwa-v1";
const PRECACHE_URLS = [
  "/",
  "/manifest.webmanifest",
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {})
      .then(() => {
        // Only skipWaiting automatically on the very first install.
        // When updating an already-controlled app, stay in "waiting" state
        // so the VS Code Status Bar "Restart to Update" button can trigger activation.
        if (!self.registration.active) {
          return self.skipWaiting();
        }
      })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((oldKey) => caches.delete(oldKey))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Network-first for navigation & RSS/API, Stale-While-Revalidate for static assets
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation requests: network first with cache fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || (await caches.match("/")) || Response.error();
        })
    );
    return;
  }

  // Static assets (icons, thumbnails, fonts, css, js): stale-while-revalidate
  if (
    url.pathname.startsWith("/_astro/") ||
    url.pathname.startsWith("/thumbs/") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
  }
});

// Minimal RSS XML parser for Service Worker background checks
function decodeXmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function extractTag(xmlBlock, tagName) {
  const regex = new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = xmlBlock.match(regex);
  return match ? decodeXmlEntities(match[1]) : "";
}

function parseRssItems(xmlText) {
  const items = [];
  const itemRegex = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const rawLink = extractTag(block, "link") || extractTag(block, "guid");
    const pubDate = extractTag(block, "pubDate");
    const description = extractTag(block, "description");
    if (title && rawLink) {
      let link = rawLink;
      try {
        link = new URL(rawLink, self.location.origin).pathname.replace(/\/+$/, "") || "/";
      } catch {}
      items.push({
        title,
        link,
        pubDate,
        timestamp: pubDate ? new Date(pubDate).getTime() : 0,
        description,
      });
    }
  }
  items.sort((a, b) => b.timestamp - a.timestamp);
  return items;
}

async function showPostNotification(post, tagPrefix = "rss-post") {
  if (!self.registration || !self.registration.showNotification) return;
  const title = post.title || "New Post on Rody Davis";
  const body = post.description || "Tap to read the latest post on rodydavis.com";
  const url = post.link || "/";

  await self.registration.showNotification(title, {
    body,
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: `${tagPrefix}-${url}`,
    renotify: false,
    data: { url, title },
  });
}

// Handle incoming Web Push events
self.addEventListener("push", (event) => {
  let payload = {
    title: "New Post on Rody Davis",
    description: "Check out the latest post on rodydavis.com",
    link: "/",
  };
  if (event.data) {
    try {
      const json = event.data.json();
      payload = {
        title: json.title || payload.title,
        description: json.body || json.description || payload.description,
        link: json.url || json.link || payload.link,
      };
    } catch {
      payload.description = event.data.text() || payload.description;
    }
  }
  event.waitUntil(showPostNotification(payload, "web-push"));
});

// Handle Periodic Background Sync (supported in Chromium / Android PWAs)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "rss-feed-sync") {
    event.waitUntil(
      fetch("/rss.xml", { cache: "no-cache" })
        .then((res) => (res.ok ? res.text() : ""))
        .then(async (xml) => {
          if (!xml) return;
          const items = parseRssItems(xml);
          if (items.length === 0) return;
          const cache = await caches.open(CACHE_NAME);
          const seenReq = new Request("/__sw_seen_rss_links__");
          const seenRes = await cache.match(seenReq);
          let seenLinks = [];
          if (seenRes) {
            try {
              seenLinks = await seenRes.json();
            } catch {}
          }
          const seenSet = new Set(seenLinks);
          if (seenSet.size > 0) {
            const newPosts = items.filter((item) => !seenSet.has(item.link));
            for (const post of newPosts.slice(0, 3)) {
              await showPostNotification(post, "rss-bg");
            }
          }
          const updatedLinks = Array.from(new Set([...seenSet, ...items.map((i) => i.link)]));
          await cache.put(
            seenReq,
            new Response(JSON.stringify(updatedLinks), {
              headers: { "Content-Type": "application/json" },
            })
          );
        })
        .catch(() => {})
    );
  }
});

// Handle messages from the client / RSS Worker
self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  } else if (data.type === "SHOW_NOTIFICATION" && data.post) {
    event.waitUntil(showPostNotification(data.post, data.tagPrefix || "rss-worker"));
  } else if (data.type === "SYNC_SEEN_LINKS" && Array.isArray(data.links)) {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) =>
        cache.put(
          new Request("/__sw_seen_rss_links__"),
          new Response(JSON.stringify(data.links), {
            headers: { "Content-Type": "application/json" },
          })
        )
      )
    );
  }
});

// Focus or open the post URL when user taps a notification on iOS, Android, or Desktop
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if ("focus" in client) {
            client.focus();
            if ("navigate" in client) {
              return client.navigate(targetUrl);
            }
            return client;
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(targetUrl);
        }
      })
  );
});
