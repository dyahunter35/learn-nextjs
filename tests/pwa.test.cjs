/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test runs directly in Node. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("installable manifest declares standalone mode and standard icon sizes", () => {
  const manifest = read("src/app/manifest.ts");
  assert.match(manifest, /display:\s*"standalone"/);
  assert.match(manifest, /start_url:\s*`\$\{basePath\}\/`/);
  assert.match(read("src/app/layout.tsx"), /manifest:\s*`\$\{basePath\}\/manifest\.webmanifest`/);
  for (const size of ["192", "512"]) {
    const icon = path.join(root, `public/icons/icon-${size}.png`);
    assert.ok(fs.existsSync(icon), `Missing ${size}px PWA icon`);
    const png = fs.readFileSync(icon);
    assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(png.readUInt32BE(16), Number(size));
    assert.equal(png.readUInt32BE(20), Number(size));
  }
  assert.ok(fs.existsSync(path.join(root, "public/icons/apple-touch-icon.png")));
});

test("offline runtime caches route documents and their static assets", () => {
  const worker = read("public/sw.js");
  assert.match(worker, /self\.addEventListener\("install"/);
  assert.match(worker, /self\.addEventListener\("fetch"/);
  assert.match(worker, /request\.mode === "navigate"/);
  assert.match(worker, /OFFLINE_PAGE/);
  assert.match(worker, /request\.destination/);
  assert.match(worker, /REFRESH_OFFLINE_CACHE/);
  const runtime = read("src/components/PwaRuntime.tsx");
  assert.match(runtime, /serviceWorker\.register\(`\$\{basePath\}\/sw\.js`/);
  assert.match(runtime, /handleOfflineNavigation/);
  assert.match(runtime, /location\.assign\(destination\.href\)/);
  assert.match(read("src/app/layout.tsx"), /PwaRuntime/);
});

test("production build generates offline routes and includes all compiled chunks", () => {
  const generator = read("scripts/generate-offline-precache.mjs");
  assert.match(generator, /prerender-manifest\.json/);
  assert.match(generator, /\.next\/static/);
  assert.match(generator, /offline-precache\.json/);
  assert.match(generator, /routes-manifest\.json/);
  assert.match(generator, /outputDirectory/);
  assert.match(read("package.json"), /generate-offline-precache\.mjs/);

  const exportedManifest = path.join(root, "out/offline-precache.json");
  if (fs.existsSync(exportedManifest)) {
    const precache = JSON.parse(fs.readFileSync(exportedManifest, "utf8"));
    assert.ok(precache.routes.some((route) => route === "/" || route.endsWith("/")));
    assert.ok(precache.routes.some((route) => route.replace(/\/+$/, "").endsWith("offline")));
    assert.ok(precache.routes.some((route) => route.includes("/algorithms/huffman/simulation")));
    assert.ok(precache.assets.some((asset) => asset.includes("/_next/static/") && asset.endsWith(".js")));
    assert.ok(precache.assets.some((asset) => asset.endsWith("/sw.js")));
    assert.ok(precache.assets.some((asset) => asset.endsWith("/manifest.webmanifest")));
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, "public/offline-precache.json"), "utf8")), precache);
  }
});
