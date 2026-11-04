import { readFile } from "node:fs/promises";
import path from "node:path";

export type LegacyPageKind = "index" | "simulation" | "code";

function removeSiteChrome(body: string) {
  return body
    .replace(/<nav\b[^>]*class=["'][^"']*\bsite-nav\b[^"']*["'][^>]*>[\s\S]*?<\/nav>/i, "")
    .replace(/<script\b[^>]*>\s*function\s+toggleMenu\s*\([\s\S]*?<\/script>/i, "")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<script\b[^>]*src=["'][^"']*theme-toggle\.js["'][^>]*><\/script>/gi, "")
    .replace(/<script\b[^>]*src=["'][^"']*huffman-index\.js["'][^>]*><\/script>/gi, "");
}

export async function getLegacyDocument(slug: string, kind: LegacyPageKind) {
  const fileName = kind === "index" ? "index.html" : `${kind}.html`;
  const filePath = path.join(process.cwd(), "src", "legacy", "algorithms", slug, fileName);
  const source = await readFile(filePath, "utf8");
  const head = source.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const originalBody = source.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const title = head.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "مقرر الحاسوب";
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
  const bodyScripts = parseScripts(originalBody);
  const cleanBody = removeSiteChrome(originalBody.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""))
    // Legacy pages use file-relative links. Route those links through the new
    // Next app and make them navigate the top-level window instead of the iframe.
    .replace(/<a\b([^>]*?)\bhref=(['"])simulation\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}/simulation" target="_top"$3>`)
    .replace(/<a\b([^>]*?)\bhref=(['"])code\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}/code" target="_top"$3>`)
    .replace(/<a\b([^>]*?)\bhref=(['"])index\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}" target="_top"$3>`);
  return { html: cleanBody, title, stylesheets: stylesheetLinks, scripts: [...headScripts, ...bodyScripts] };
}

