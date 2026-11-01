import React, { useState, useEffect, useCallback } from "react";
import { RefreshCw } from "lucide-react";

const SwUpdateButton: React.FC = () => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [updating, setUpdating] = useState<boolean>(false);

  const bindRegistration = useCallback((reg: ServiceWorkerRegistration) => {
    if (reg.waiting) {
      setWaitingWorker(reg.waiting);
      setUpdateAvailable(true);
      window.dispatchEvent(new CustomEvent("sw-update-available"));
    }

    reg.addEventListener("updatefound", () => {
      const installing = reg.installing;
      if (!installing) return;

      installing.addEventListener("statechange", () => {
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          setWaitingWorker(reg.waiting || installing);
          setUpdateAvailable(true);
          window.dispatchEvent(new CustomEvent("sw-update-available"));
        }
      });
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    let refreshing = false;
    const onControllerChange = () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    // Check current registration and register if needed
    navigator.serviceWorker
      .getRegistration("/sw.js")
      .then((reg) => {
        if (reg) {
          bindRegistration(reg);
          reg.update().catch(() => {});
        } else {
          navigator.serviceWorker
            .register("/sw.js")
            .then((newReg) => bindRegistration(newReg))
            .catch(() => {});
        }
      })
      .catch(() => {});

    // Check for SW updates when user returns to the app/tab or periodically
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        navigator.serviceWorker
          .getRegistration()
          .then((reg) => reg?.update())
          .catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const interval = window.setInterval(() => {
      navigator.serviceWorker
        .getRegistration()
        .then((reg) => reg?.update())
        .catch(() => {});
    }, 5 * 60 * 1000);

    // Support manual trigger / testing via custom event
    const onManualTrigger = () => {
      setUpdateAvailable(true);
    };
    window.addEventListener("sw-update-available", onManualTrigger);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("sw-update-available", onManualTrigger);
      window.clearInterval(interval);
    };
  }, [bindRegistration]);

  const handleRestartToUpdate = async () => {
    if (updating) return;
    setUpdating(true);

    try {
      if (waitingWorker) {
        waitingWorker.postMessage({ type: "SKIP_WAITING" });
      } else if ("serviceWorker" in navigator) {
        const reg = await navigator.serviceWorker.getRegistration();
        if (reg?.waiting) {
          reg.waiting.postMessage({ type: "SKIP_WAITING" });
        } else {
          window.location.reload();
          return;
        }
      } else {
        window.location.reload();
        return;
      }

      // Fallback reload if controllerchange doesn't fire within 1200ms
      window.setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch {
      window.location.reload();
    }
  };

  if (!updateAvailable) return null;

  return (
    <button
      type="button"
      onClick={handleRestartToUpdate}
      disabled={updating}
      aria-label="Restart to Update application"
      title="New version available — Restart to Update"
      className="relative flex items-center justify-center gap-1.5 bg-amber-400/20 hover:bg-amber-400/30 text-white px-1.5 sm:px-2 h-[20px] sm:h-[18px] min-w-[24px] rounded cursor-pointer transition-colors border border-amber-300/40 font-medium text-[11px] focus-visible:outline-1 focus-visible:outline-white disabled:opacity-60"
    >
      <span className="relative flex items-center justify-center">
        <RefreshCw size={12} className={updating ? "animate-spin" : ""} />
        {!updating && (
          <span
            aria-hidden="true"
            className="sm:hidden absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-300"
          />
        )}
      </span>
      <span className="hidden sm:inline whitespace-nowrap">
        {updating ? "Updating..." : "Restart to Update"}
      </span>
    </button>
  );
};

export default SwUpdateButton;
