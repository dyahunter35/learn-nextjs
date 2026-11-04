const CACHE_NAME = "computer-science-offline-v1";
const PRECACHE_URL = new URL("offline-precache.json", self.registration.scope).href;
const OFFLINE_PAGE = new URL("offline/", self.registration.scope).pathname;

async function loadManifest() {
  const response = await fetch(PRECACHE_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Offline asset list is unavailable");
  return response.json();
}

async function precache(manifest) {
  const cache = await caches.open(CACHE_NAME);
  const urls = [...new Set([...manifest.routes, ...manifest.assets])];
  for (let offset = 0; offset < urls.length; offset += 8) {
    await Promise.all(urls.slice(offset, offset + 8).map(async (url) => {
      try {
        const response = await fetch(url, { cache: "reload" });
        if (response.ok && response.type !== "opaque") await cache.put(url, response);
      } catch {
        // Continue installing so one unavailable optional asset cannot block the app shell.
      }
    }));
  }
  await cache.put("/__offline_build_id__", new Response(manifest.buildId));
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    try {
      const manifest = await loadManifest();
      await precache(manifest);
    } finally {
      await self.skipWaiting();
    }
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("computer-science-offline-") && key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "REFRESH_OFFLINE_CACHE") return;
  event.waitUntil((async () => {
    try {
      const manifest = await loadManifest();
      const cache = await caches.open(CACHE_NAME);
      const cachedBuildId = await cache.match("/__offline_build_id__");
      if ((await cachedBuildId?.text()) === manifest.buildId) return;
      await precache(manifest);
    } catch {
      // A failed update keeps the previously cached site available.
    }
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const scopeRoot = new URL(self.registration.scope).pathname;
      const route = url.pathname === scopeRoot ? scopeRoot : url.pathname.replace(/\/+$/, "");
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(route, response.clone());
        return response;
      } catch {
        return (await cache.match(route)) || (await cache.match(OFFLINE_PAGE)) || Response.error();
      }
    })());
    return;
  }

  if (request.destination && ["script", "style", "image", "font", "worker"].includes(request.destination)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request, { ignoreSearch: true });
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        return Response.error();
      }
    })());
  }
});
