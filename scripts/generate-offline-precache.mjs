import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const prerenderPath = path.join(root, ".next/prerender-manifest.json");
const buildIdPath = path.join(root, ".next/BUILD_ID");
const routesManifestPath = path.join(root, ".next/routes-manifest.json");
const publicDirectory = path.join(root, "public");
const staticDirectory = path.join(root, ".next/static");
const outputDirectory = path.join(root, "out");
const routesManifest = JSON.parse(await readFile(routesManifestPath, "utf8"));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || routesManifest.basePath || "";
const withBasePath = (route) => `${basePath}${route}`;

async function filesIn(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return filesIn(absolute, relative);
    return [relative];
  }));
  return nested.flat();
}

const prerender = JSON.parse(await readFile(prerenderPath, "utf8"));
const buildId = (await readFile(buildIdPath, "utf8")).trim();
const staticRoutes = Object.keys(prerender.routes)
  .filter((route) => !route.startsWith("/_") && !/\.[a-z0-9]{1,20}$/i.test(route))
  .map((route) => route === "/" ? "/" : `${route.replace(/\/+$/, "")}/`)
  .map(withBasePath)
  .sort();
const routes = [...new Set(staticRoutes.flatMap((route) => {
  const scopeRoot = basePath ? `${basePath}/` : "/";
  return route === scopeRoot ? [route] : [route, route.replace(/\/+$/, "")];
}))];
const staticAssets = (await filesIn(staticDirectory)).map((file) => withBasePath(`/_next/static/${file}`));
const publicAssets = (await filesIn(publicDirectory))
  .filter((file) => file !== "offline-precache.json")
  .map((file) => withBasePath(`/${file}`));

const payload = {
  buildId,
  routes: [...new Set([...routes, withBasePath("/offline")])],
  assets: [...new Set([
    ...staticAssets,
    ...publicAssets,
    withBasePath("/manifest.webmanifest"),
    withBasePath("/icon.svg"),
  ])].sort(),
};

await writeFile(path.join(publicDirectory, "offline-precache.json"), `${JSON.stringify(payload)}\n`);
await writeFile(path.join(outputDirectory, "offline-precache.json"), `${JSON.stringify(payload)}\n`);
console.log(`Generated offline precache: ${payload.routes.length} routes, ${payload.assets.length} assets.`);
