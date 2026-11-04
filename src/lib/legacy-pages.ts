import { readFile } from "node:fs/promises";
import path from "node:path";
import { algorithms } from "@/data/algorithms";

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
  const bodyClass = source.match(/<body\b[^>]*class=["']([^"']*)["']/i)?.[1] ?? "";
  const stylesheetLinks = [...head.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)]
    .map((match) => match[0])
    .filter((link) => !link.includes("cdn.tailwindcss.com"));
  const headScripts = [...head.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map((match) => match[0])
    .filter((script) => !script.includes("cdn.tailwindcss.com") && !script.includes("tailwind.config"));
  const bodyScripts = [...originalBody.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map((match) => match[0])
    .filter((script) => !script.includes("theme-toggle.js") && !script.includes("huffman-index.js"));
  const cleanBody = removeSiteChrome(originalBody.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""))
    // Legacy pages use file-relative links. Route those links through the new
    // Next app and make them navigate the top-level window instead of the iframe.
    .replace(/<a\b([^>]*?)\bhref=(['"])simulation\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}/simulation" target="_top"$3>`)
    .replace(/<a\b([^>]*?)\bhref=(['"])code\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}/code" target="_top"$3>`)
    .replace(/<a\b([^>]*?)\bhref=(['"])index\.html(?:\?[^'"]*)?\2([^>]*)>/gi, `<a$1href="/algorithms/${slug}" target="_top"$3>`);
  const base = `/legacy/algorithms/${slug}/`;
  const html = `<!doctype html>
<html lang="ar" dir="rtl" data-theme="light">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<base href="${base}"><title>${title}</title>
<script>try { if (localStorage.getItem('opencode-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch {}</script>
<link rel="stylesheet" href="/legacy/tailwind.css">
${stylesheetLinks.join("\n")}
${headScripts.join("\n")}
<link rel="stylesheet" href="/legacy/bridge.css">
</head>
<body class="legacy-body ${bodyClass}">
${cleanBody}
${bodyScripts.join("\n")}
<script>
(() => {
  const sendHeight = () => parent.postMessage({ type: 'legacy-height', height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, '*');
  new ResizeObserver(sendHeight).observe(document.documentElement);
  window.addEventListener('load', () => requestAnimationFrame(sendHeight));
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'legacy-theme') document.documentElement.setAttribute('data-theme', event.data.theme);
  });
  window.addEventListener('resize', sendHeight);
})();
</script>
</body></html>`;

  return { html, title };
}

export function legacyStaticParams() {
  return algorithms.map(({ slug }) => ({ slug }));
}
