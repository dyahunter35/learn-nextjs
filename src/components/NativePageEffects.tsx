"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import katex from "katex";
import renderMathInElement from "katex/contrib/auto-render";
import { controllerLoaders } from "@/content/controllers";

type LegacyScript = { src: string; code: string };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function prefixUrl(url: string) {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) return url;
  if (basePath && url.startsWith("/") && !url.startsWith(basePath)) {
    return `${basePath}${url}`;
  }
  return url;
}

function autoRenderMath(root?: HTMLElement | null) {
  const target = root || document.querySelector<HTMLElement>(".native-page-content") || document.body;
  if (!target) return;
  try {
    renderMathInElement(target, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
      throwOnError: false,
    });
  } catch {
    // Graceful fallback if formula has special characters
  }
}

export function NativePageEffects({ children, scripts, stylesheets }: { children: React.ReactNode; scripts: LegacyScript[]; stylesheets: string[] }) {
  const router = useRouter();

  useEffect(() => {
    (window as unknown as Window & { katex: typeof katex; renderMath: typeof autoRenderMath }).katex = katex;
    (window as unknown as Window & { katex: typeof katex; renderMath: typeof autoRenderMath }).renderMath = autoRenderMath;

    const addedStyles = stylesheets.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = prefixUrl(href);
      link.dataset.legacyStyle = "true";
      document.head.appendChild(link);
      return link;
    });

    let cancelled = false;
    let observer: MutationObserver | null = null;

    const runScripts = async () => {
      for (const item of scripts) {
        if (cancelled) return;
        const rawSrc = item.src;
        const normalizedSrc = (basePath && rawSrc.startsWith(basePath))
          ? rawSrc.slice(basePath.length)
          : rawSrc;

        if (normalizedSrc.startsWith("/legacy/assets/js/")) {
          const name = normalizedSrc.split("/").pop() ?? "";
          await controllerLoaders[name]?.();
          continue;
        }
        const script = document.createElement("script");
        if (item.src) {
          script.src = prefixUrl(item.src);
          script.async = false;
          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
            script.onerror = () => resolve();
            document.body.appendChild(script);
          });
        } else {
          script.text = item.code;
          document.body.appendChild(script);
          script.remove();
        }
      }
      if (cancelled) return;
      document.querySelectorAll<HTMLElement>(".native-page-content [data-legacy-click], .native-page-content [data-legacy-change], .native-page-content [data-legacy-input], .native-page-content [data-legacy-submit]").forEach((element) => {
        for (const eventName of ["click", "change", "input", "submit"] as const) {
          const source = element.getAttribute(`data-legacy-${eventName}`);
          if (!source) continue;
          element.addEventListener(eventName, (event) => {
            if (eventName === "submit") event.preventDefault();
            new Function("event", source).call(element, event);
          });
        }
      });
      const highlighter = (window as Window & { hljs?: { highlightElement: (element: Element) => void } }).hljs;
      document.querySelectorAll(".code-block.active pre code").forEach((element) => highlighter?.highlightElement(element));
      document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
      window.dispatchEvent(new Event("load"));

      // Initial Math Rendering
      autoRenderMath();

      // Ensure all anchor tags inside native-page-content respect basePath
      document.querySelectorAll<HTMLAnchorElement>(".native-page-content a[href]").forEach((anchor) => {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("/") && !href.startsWith("//")) {
          if (basePath && !href.startsWith(basePath)) {
            anchor.setAttribute("href", `${basePath}${href}`);
          }
        }
      });

      // Observe dynamic changes for LaTeX formulas
      const contentEl = document.querySelector<HTMLElement>(".native-page-content");
      if (contentEl) {
        let timer: ReturnType<typeof setTimeout> | null = null;
        observer = new MutationObserver((mutations) => {
          let hasMath = false;
          for (const m of mutations) {
            if (m.type === "childList" || m.type === "characterData") {
              const text = (m.target as HTMLElement).textContent || "";
              if (text.includes("$") || text.includes("\\frac") || text.includes("\\sum")) {
                hasMath = true;
                break;
              }
            }
          }
          if (hasMath) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => autoRenderMath(), 30);
          }
        });
        observer.observe(contentEl, { childList: true, subtree: true, characterData: true });
      }
    };
    void runScripts();

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        href.startsWith("#") ||
        target.target === "_blank" ||
        e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
      ) {
        return;
      }
      if (href.startsWith("/")) {
        e.preventDefault();
        const route = basePath && href.startsWith(basePath)
          ? href.slice(basePath.length) || "/"
          : href;
        router.push(route);
      }
    };

    const container = document.querySelector<HTMLElement>(".native-page-content");
    container?.addEventListener("click", handleAnchorClick);

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      container?.removeEventListener("click", handleAnchorClick);
      addedStyles.forEach((link) => link.remove());
      document.querySelectorAll('script[src*="/legacy/assets/"]').forEach((script) => script.remove());
    };
  }, [scripts, stylesheets, router]);

  return <div className="native-page-content">{children}</div>;
}
