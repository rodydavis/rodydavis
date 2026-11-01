// Dedicated Web Worker for fetching and parsing /rss.xml off the main thread
// Detects new posts and notifies the UI & Service Worker

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
let pollTimer = null;
let knownLinks = new Set();
let initialized = false;

function decodeXmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function extractTag(xmlBlock, tagName) {
  const regex = new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = xmlBlock.match(regex);
  return match ? decodeXmlEntities(match[1]) : "";
}

function normalizePath(linkStr) {
  if (!linkStr) return "/";
  try {
    const url = new URL(linkStr, self.location.origin);
    return url.pathname.replace(/\/+$/, "") || "/";
  } catch {
    return linkStr.replace(/\/+$/, "") || "/";
  }
}

function parseRssXml(xmlText) {
  const items = [];
  const itemRegex = /<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const rawLink = extractTag(block, "link") || extractTag(block, "guid");
    const link = normalizePath(rawLink);
    const pubDate = extractTag(block, "pubDate");
    const description = extractTag(block, "description");
    if (title && link) {
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

async function checkRssFeed({ simulateNew = false, forceNotifyLatest = false } = {}) {
  try {
    const response = await fetch("/rss.xml", {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`RSS fetch failed with status ${response.status}`);
    }

    const xmlText = await response.text();
    const items = parseRssXml(xmlText);
    const latestItems = items.slice(0, 10);

    const newItems = [];
    if (!initialized && knownLinks.size === 0) {
      // Seed known links on initial sync so we don't flood historical posts
      for (const item of items) {
        knownLinks.add(item.link);
      }
      initialized = true;
      if (forceNotifyLatest && latestItems.length > 0) {
        newItems.push(latestItems[0]);
      }
    } else {
      for (const item of items) {
        if (!knownLinks.has(item.link)) {
          knownLinks.add(item.link);
          newItems.push(item);
        }
      }
      if (simulateNew && latestItems.length > 0 && newItems.length === 0) {
        newItems.push(latestItems[0]);
      }
      initialized = true;
    }

    self.postMessage({
      type: "RSS_RESULT",
      items: latestItems,
      newItems,
      knownLinks: Array.from(knownLinks),
      checkedAt: new Date().toISOString(),
      totalCount: items.length,
    });
  } catch (err) {
    self.postMessage({
      type: "RSS_ERROR",
      error: err instanceof Error ? err.message : String(err),
      checkedAt: new Date().toISOString(),
    });
  }
}

self.addEventListener("message", (event) => {
  const data = event.data || {};

  if (Array.isArray(data.knownLinks)) {
    for (const link of data.knownLinks) {
      knownLinks.add(normalizePath(link));
    }
    if (knownLinks.size > 0) {
      initialized = true;
    }
  }

  switch (data.type) {
    case "START": {
      const intervalMs = data.intervalMs || DEFAULT_INTERVAL_MS;
      if (pollTimer) clearInterval(pollTimer);
      checkRssFeed({
        simulateNew: Boolean(data.simulateNew),
        forceNotifyLatest: Boolean(data.forceNotifyLatest),
      });
      pollTimer = setInterval(() => {
        checkRssFeed();
      }, intervalMs);
      break;
    }
    case "CHECK_NOW": {
      checkRssFeed({
        simulateNew: Boolean(data.simulateNew),
        forceNotifyLatest: Boolean(data.forceNotifyLatest),
      });
      break;
    }
    case "STOP": {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
      break;
    }
  }
});
