import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Bell,
  BellRing,
  BellOff,
  RefreshCw,
  X,
  Check,
  Rss,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface RssPostItem {
  title: string;
  link: string;
  pubDate: string;
  timestamp: number;
  description: string;
  isNew?: boolean;
}

const STORAGE_KEYS = {
  ENABLED: "rd_rss_notifications_enabled",
  KNOWN_LINKS: "rd_rss_known_links",
  UNREAD_LINKS: "rd_rss_unread_links",
  CACHED_ITEMS: "rd_rss_cached_items",
  LAST_CHECKED: "rd_rss_last_checked",
};

function getStoredJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function setStoredJson(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

async function dispatchNativeNotification(post: {
  title: string;
  description: string;
  link: string;
}, tagPrefix = "rss-post"): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window)) return false;
  if (Notification.permission !== "granted") return false;

  // Prefer Service Worker showNotification (required on Android & iOS PWAs)
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg && "showNotification" in reg) {
        await reg.showNotification(post.title, {
          body: post.description || "New post published on rodydavis.com",
          icon: "/icon-192.png",
          badge: "/icon-192.png",
          tag: `${tagPrefix}-${post.link}`,
          data: { url: post.link, title: post.title },
        });
        return true;
      }
    } catch {}
  }

  // Fallback to window Notification API on desktop browsers
  try {
    const n = new Notification(post.title, {
      body: post.description || "New post published on rodydavis.com",
      icon: "/icon-192.png",
      tag: `${tagPrefix}-${post.link}`,
    });
    n.onclick = () => {
      window.focus();
      window.location.href = post.link;
    };
    return true;
  } catch {
    return false;
  }
}

const NotificationCenter: React.FC = () => {
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("default");
  const [enabled, setEnabled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(false);
  const [items, setItems] = useState<RssPostItem[]>([]);
  const [unreadLinks, setUnreadLinks] = useState<string[]>([]);
  const [lastChecked, setLastChecked] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isIosBrowser, setIsIosBrowser] = useState<boolean>(false);

  const workerRef = useRef<Worker | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // Sync popover state with native Popover API (popover="manual")
  useEffect(() => {
    const el = popoverRef.current;
    if (!el) return;
    if (typeof HTMLElement !== "undefined" && "popover" in HTMLElement.prototype) {
      try {
        if (isOpen && !el.matches(":popover-open")) {
          el.showPopover();
        } else if (!isOpen && el.matches(":popover-open")) {
          el.hidePopover();
        }
      } catch {}
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const startRssWorker = useCallback((opts?: { simulateNew?: boolean; forceNotifyLatest?: boolean }) => {
    if (typeof window === "undefined" || typeof Worker === "undefined") return;

    const knownLinks = getStoredJson<string[]>(STORAGE_KEYS.KNOWN_LINKS, []);

    if (!workerRef.current) {
      const worker = new Worker("/rss-worker.js");
      worker.onmessage = async (event) => {
        const data = event.data || {};
        setChecking(false);

        if (data.type === "RSS_RESULT") {
          const fetchedItems: RssPostItem[] = data.items || [];
          const newItems: RssPostItem[] = data.newItems || [];
          const updatedKnown: string[] = data.knownLinks || [];

          setItems(fetchedItems);
          setLastChecked(data.checkedAt);
          setStoredJson(STORAGE_KEYS.CACHED_ITEMS, fetchedItems);
          setStoredJson(STORAGE_KEYS.KNOWN_LINKS, updatedKnown);
          setStoredJson(STORAGE_KEYS.LAST_CHECKED, data.checkedAt);

          // Sync seen links to Service Worker cache for Periodic Background Sync
          if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              type: "SYNC_SEEN_LINKS",
              links: updatedKnown,
            });
          }

          if (newItems.length > 0) {
            setUnreadLinks((prev) => {
              const merged = Array.from(new Set([...newItems.map((i) => i.link), ...prev]));
              setStoredJson(STORAGE_KEYS.UNREAD_LINKS, merged);
              return merged;
            });

            setStatusMessage(
              `${newItems.length} new post${newItems.length > 1 ? "s" : ""} found in RSS feed`
            );

            // Dispatch native push notification for new posts
            for (const post of newItems.slice(0, 3)) {
              await dispatchNativeNotification(post, "rss-new");
            }
          } else {
            setStatusMessage("RSS feed is up to date");
          }
        } else if (data.type === "RSS_ERROR") {
          setStatusMessage("Could not reach RSS feed");
        }
      };
      workerRef.current = worker;
    }

    setChecking(true);
    workerRef.current.postMessage({
      type: "START",
      knownLinks,
      simulateNew: Boolean(opts?.simulateNew),
      forceNotifyLatest: Boolean(opts?.forceNotifyLatest),
    });
  }, []);

  // Initialize state from localStorage & browser capabilities
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check iOS non-standalone browser for helpful PWA install hint
    const ua = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsIosBrowser(isIOS && !isStandalone);

    const cachedItems = getStoredJson<RssPostItem[]>(STORAGE_KEYS.CACHED_ITEMS, []);
    const storedUnread = getStoredJson<string[]>(STORAGE_KEYS.UNREAD_LINKS, []);
    const storedEnabled = getStoredJson<boolean>(STORAGE_KEYS.ENABLED, false);
    const storedChecked = getStoredJson<string | null>(STORAGE_KEYS.LAST_CHECKED, null);

    setItems(cachedItems);
    setUnreadLinks(storedUnread);
    setLastChecked(storedChecked);

    if ("Notification" in window) {
      const currentPerm = Notification.permission;
      setPermission(currentPerm);
      if (currentPerm === "granted" && storedEnabled) {
        setEnabled(true);
        startRssWorker();
      }
    } else {
      setPermission("unsupported");
      if (storedEnabled) {
        setEnabled(true);
        startRssWorker();
      }
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      if (workerRef.current) {
        workerRef.current.postMessage({ type: "STOP" });
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, [startRssWorker]);

  // Register Periodic Background Sync on Service Worker when granted
  const registerPeriodicSync = async () => {
    if (!("serviceWorker" in navigator)) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      if ("periodicSync" in reg) {
        const status = await (navigator as any).permissions.query({
          name: "periodic-background-sync",
        });
        if (status.state === "granted") {
          await (reg as any).periodicSync.register("rss-feed-sync", {
            minInterval: 30 * 60 * 1000, // 30 minutes
          });
        }
      }
    } catch {}
  };

  const requestAndEnableNotifications = async () => {
    if (typeof window === "undefined") return;

    if ("Notification" in window) {
      try {
        const result = await Notification.requestPermission();
        setPermission(result);

        if (result === "granted") {
          setEnabled(true);
          setStoredJson(STORAGE_KEYS.ENABLED, true);
          await registerPeriodicSync();
          startRssWorker({ forceNotifyLatest: true });
          setStatusMessage("Push notifications enabled! Monitoring RSS feed in worker.");
        } else if (result === "denied") {
          setStatusMessage("Notification permission blocked in browser settings.");
          // Still start the RSS worker so in-app notifications work
          setEnabled(true);
          setStoredJson(STORAGE_KEYS.ENABLED, true);
          startRssWorker();
        }
      } catch {
        setEnabled(true);
        setStoredJson(STORAGE_KEYS.ENABLED, true);
        startRssWorker();
      }
    } else {
      // Browser doesn't expose Notification (e.g., iOS tab before Add to Home Screen)
      setEnabled(true);
      setStoredJson(STORAGE_KEYS.ENABLED, true);
      startRssWorker();
      setStatusMessage("RSS worker active. Add to Home Screen for native iOS push alerts.");
    }
  };

  // Status bar bell icon handler:
  // Just like VS Code, clicking toggles the notification center, and if permissions
  // haven't been requested yet, requests native push notification permissions right away.
  const handleStatusBarBellClick = async () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);

    if (nextOpen && unreadLinks.length > 0) {
      setUnreadLinks([]);
      setStoredJson(STORAGE_KEYS.UNREAD_LINKS, []);
    }

    if (permission === "default" || (!enabled && permission !== "denied")) {
      await requestAndEnableNotifications();
    } else if (nextOpen && items.length === 0) {
      startRssWorker();
    }
  };

  const handleCheckNow = (simulateNew = false) => {
    if (!workerRef.current) {
      startRssWorker({ simulateNew });
      return;
    }
    setChecking(true);
    setStatusMessage(simulateNew ? "Sending test RSS notification..." : "Checking RSS feed in worker...");
    workerRef.current.postMessage({
      type: "CHECK_NOW",
      knownLinks: getStoredJson<string[]>(STORAGE_KEYS.KNOWN_LINKS, []),
      simulateNew,
    });
  };

  const handleInstallPwa = async () => {
    if (!installPrompt) return;
    try {
      await installPrompt.prompt();
      setInstallPrompt(null);
    } catch {}
  };

  const unreadCount = unreadLinks.length;
  const formattedTime = lastChecked
    ? new Date(lastChecked).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <div className="relative flex items-center h-full">
      {/* Polite Live Region for Screen Readers */}
      <span className="visually-hidden" aria-live="polite" aria-atomic="true">
        {statusMessage}
      </span>

      {/* Bottom Status Bar Bell Trigger (VS Code style) */}
      <button
        type="button"
        onClick={handleStatusBarBellClick}
        aria-label={
          unreadCount > 0
            ? `${unreadCount} unread RSS notifications. Toggle Notification Center`
            : "Toggle RSS Push Notifications"
        }
        aria-expanded={isOpen}
        aria-controls="vscode-notification-toast"
        title={
          permission === "granted" && enabled
            ? `RSS Notifications Active${formattedTime ? ` (Checked ${formattedTime})` : ""}`
            : "Enable Push Notifications for New RSS Posts"
        }
        className="relative flex items-center justify-center gap-1 hover:bg-white/20 px-1.5 h-[18px] min-w-[24px] rounded cursor-pointer transition-colors text-white border-0 bg-transparent focus-visible:outline-1 focus-visible:outline-white"
      >
        {permission === "denied" ? (
          <BellOff size={12} className="opacity-85" />
        ) : unreadCount > 0 || (permission === "granted" && enabled) ? (
          <BellRing size={12} className={checking ? "animate-pulse" : ""} />
        ) : (
          <Bell size={12} />
        )}
        {unreadCount > 0 && (
          <span className="inline-flex items-center justify-center px-1 min-w-[13px] h-[13px] text-[9px] font-bold leading-none rounded-full bg-amber-400 text-slate-950">
            {unreadCount}
          </span>
        )}
      </button>

      {/* VS Code Notification Center Toast / Popover anchored at bottom-right above Status Bar */}
      <div
        ref={popoverRef}
        id="vscode-notification-toast"
        {...({ popover: "manual" } as any)}
        role="dialog"
        aria-label="Notifications"
        className={`vscode-notification-popover fixed right-2 bottom-[calc(26px+env(safe-area-inset-bottom,0px))] w-[min(360px,calc(100vw-16px))] rounded-md shadow-2xl border border-[var(--border-secondary)] bg-[var(--bg-sidebar)] text-[var(--fg-primary)] z-50 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* VS Code Notification Center Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-[var(--bg-activity)] border-b border-[var(--border-main)] text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-secondary)]">
          <div className="flex items-center gap-1.5">
            <Rss size={12} className="text-[#007acc]" />
            <span>Notifications {items.length > 0 ? `(${items.length})` : ""}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => handleCheckNow(false)}
              disabled={checking}
              title="Check RSS feed in worker now"
              aria-label="Check RSS feed now"
              className="p-1 rounded hover:bg-[var(--hover-bg)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors cursor-pointer bg-transparent border-0 disabled:opacity-50"
            >
              <RefreshCw size={12} className={checking ? "animate-spin text-[#007acc]" : ""} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              {...({ popovertarget: "vscode-notification-toast", popovertargetaction: "hide" } as any)}
              title="Hide Notifications"
              aria-label="Close notifications"
              className="p-1 rounded hover:bg-[var(--hover-bg)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors cursor-pointer bg-transparent border-0"
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Permission & Worker Status Banner */}
        <div className="p-3 border-b border-[var(--border-main)] bg-[var(--bg-main)]/60 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  permission === "granted" && enabled
                    ? "bg-emerald-400"
                    : permission === "denied"
                      ? "bg-rose-400"
                      : "bg-amber-400"
                }`}
              />
              <span className="text-xs font-medium text-[var(--fg-primary)] truncate">
                {permission === "granted" && enabled
                  ? "RSS Push Worker Active"
                  : permission === "denied"
                    ? "Push Permission Blocked (In-App Active)"
                    : "RSS Push Notifications"}
              </span>
            </div>
            {formattedTime && (
              <span className="text-[10px] font-mono text-[var(--fg-secondary)] shrink-0">
                {formattedTime}
              </span>
            )}
          </div>

          {statusMessage && (
            <p className="text-[11px] text-[var(--fg-secondary)] m-0 leading-snug">
              {statusMessage}
            </p>
          )}

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {permission !== "granted" && permission !== "unsupported" && (
              <button
                type="button"
                onClick={requestAndEnableNotifications}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#007acc] hover:bg-[#0062a3] text-white border-0 cursor-pointer transition-colors flex items-center gap-1"
              >
                <BellRing size={11} />
                <span>Enable Native Push</span>
              </button>
            )}

            {permission === "granted" && (
              <button
                type="button"
                onClick={() => handleCheckNow(true)}
                disabled={checking}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#007acc] hover:bg-[#0062a3] text-white border-0 cursor-pointer transition-colors flex items-center gap-1 disabled:opacity-50"
              >
                <Sparkles size={11} />
                <span>Test Push Alert</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleCheckNow(false)}
              disabled={checking}
              className="px-2.5 py-1 rounded text-[11px] font-medium bg-[var(--bg-sidebar)] hover:bg-[var(--hover-bg)] text-[var(--fg-primary)] border border-[var(--border-secondary)] cursor-pointer transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              <RefreshCw size={11} className={checking ? "animate-spin" : ""} />
              <span>Fetch RSS</span>
            </button>

            {installPrompt && (
              <button
                type="button"
                onClick={handleInstallPwa}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-emerald-600 hover:bg-emerald-500 text-white border-0 cursor-pointer transition-colors flex items-center gap-1"
              >
                <Download size={11} />
                <span>Install App</span>
              </button>
            )}
          </div>

          {isIosBrowser && (
            <div className="text-[10px] text-[var(--fg-secondary)] bg-[var(--bg-sidebar)] px-2 py-1.5 rounded border border-[var(--border-main)] leading-normal">
              <strong className="text-[var(--fg-primary)]">iOS PWA Tip:</strong> Tap{" "}
              <span className="font-mono">Share → Add to Home Screen</span> to enable native iOS Web Push notifications.
            </div>
          )}
        </div>

        {/* Recent RSS Posts Feed */}
        <div className="max-h-[260px] overflow-y-auto divide-y divide-[var(--border-main)] overscroll-contain">
          {items.length === 0 ? (
            <div className="p-4 text-center text-xs text-[var(--fg-secondary)]">
              {checking ? "Fetching /rss.xml in background worker..." : "No RSS posts loaded yet."}
            </div>
          ) : (
            items.slice(0, 6).map((item) => {
              const dateLabel = item.pubDate
                ? new Date(item.pubDate).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "";
              return (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 hover:bg-[var(--hover-bg)] transition-colors no-underline text-[var(--fg-primary)] group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium group-hover:text-[#3794ff] transition-colors line-clamp-1">
                      {item.title}
                    </span>
                    <ExternalLink
                      size={11}
                      className="text-[var(--fg-secondary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                    />
                  </div>
                  {item.description && (
                    <p className="text-[11px] text-[var(--fg-secondary)] line-clamp-2 mt-0.5 mb-1 leading-snug">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-[10px] text-[var(--fg-secondary)] font-mono">
                    <span>{item.link}</span>
                    {dateLabel && <span>{dateLabel}</span>}
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
