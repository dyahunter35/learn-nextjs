"use client";

import { useEffect } from "react";

export function PwaRuntime() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    let activeWorker: ServiceWorker | null = null;
    let stopped = false;

    const updateOfflineCache = () => {
      if (navigator.onLine) activeWorker?.postMessage({ type: "REFRESH_OFFLINE_CACHE" });
    };

    void navigator.serviceWorker.register(`${basePath}/sw.js`, { scope: `${basePath}/`, updateViaCache: "none" })
      .then((registration) => {
        if (stopped) return;
        activeWorker = registration.active;
        registration.addEventListener("updatefound", () => {
          const installing = registration.installing;
          installing?.addEventListener("statechange", () => {
            if (installing.state === "activated") {
              activeWorker = installing;
              updateOfflineCache();
            }
          });
        });
        updateOfflineCache();
      })
      .catch(() => {});

    window.addEventListener("online", updateOfflineCache);

    const handleOfflineNavigation = (event: MouseEvent) => {
      if (navigator.onLine || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, location.href);
      if (destination.origin !== location.origin) return;
      event.preventDefault();
      location.assign(destination.href);
    };

    document.addEventListener("click", handleOfflineNavigation, true);
    return () => {
      stopped = true;
      window.removeEventListener("online", updateOfflineCache);
      document.removeEventListener("click", handleOfflineNavigation, true);
    };
  }, []);

  return null;
}
