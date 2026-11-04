import { readFile } from "node:fs/promises";
import path from "node:path";

export type LegacyPageKind = "index" | "simulation" | "code";

export async function getPageAssets(slug: string, kind: LegacyPageKind) {
  const fileName = kind === "index" ? "index.html" : `${kind}.html`;
  const filePath = path.join(process.cwd(), "src", "legacy", "algorithms", slug, fileName);
  const source = await readFile(filePath, "utf8");
  const head = source.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const stylesheetLinks = [...head.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)]
    .map((match) => match[0].match(/href=["']([^"']+)["']/i)?.[1])
    .filter((href): href is string => typeof href === "string" && !href.includes("cdn.tailwindcss.com"))
    .map((href) => href.startsWith("http") ? href : href.replace(/^\.\.\/\.\.\/assets\//, "/legacy/assets/"));
  stylesheetLinks.unshift("/legacy/tailwind.css");
  const parseScripts = (html: string) => [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map((match) => {
      const tag = match[0];
      const src = tag.match(/src=["']([^"']+)["']/i)?.[1];
      if (src) {
        const path = src.replace(/^\.\.\/\.\.\/assets\//, "/legacy/assets/");
        return { src: path.startsWith("http") ? path : path.startsWith("/") ? path : `/legacy/algorithms/${slug}/${path}`, code: "" };
      }
      const code = tag.replace(/^<script\b[^>]*>/i, "").replace(/<\/script>$/i, "").trim();
      return code.includes("toggleMenu") ? null : { code, src: "" };
    }).filter((script): script is { src: string; code: string } => Boolean(script));
  const headScripts = parseScripts(head).filter((script) => script.src && !script.src.includes("cdn.tailwindcss.com"));
  const body = source.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const bodyScripts = parseScripts(body);
  return { stylesheets: stylesheetLinks, scripts: [...headScripts, ...bodyScripts] };
}

