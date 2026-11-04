"use client";

import { useEffect } from "react";
import katex from "katex";
import renderMathInElement from "katex/contrib/auto-render";
import { controllerLoaders } from "@/content/controllers";

type LegacyScript = { src: string; code: string };

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
  useEffect(() => {
    (window as unknown as Window & { katex: typeof katex; renderMath: typeof autoRenderMath }).katex = katex;
    (window as unknown as Window & { katex: typeof katex; renderMath: typeof autoRenderMath }).renderMath = autoRenderMath;

    const addedStyles = stylesheets.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.legacyStyle = "true";
      document.head.appendChild(link);
      return link;
    });

    let cancelled = false;
    let observer: MutationObserver | null = null;

    const runScripts = async () => {
      for (const item of scripts) {
        if (cancelled) return;
        if (item.src.startsWith("/legacy/assets/js/")) {
          const name = item.src.split("/").pop() ?? "";
          await controllerLoaders[name]?.();
          continue;
        }
        const script = document.createElement("script");
        if (item.src) {
          script.src = item.src;
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
    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      addedStyles.forEach((link) => link.remove());
      document.querySelectorAll('script[src^="/legacy/assets/"]').forEach((script) => script.remove());
    };
  }, [scripts, stylesheets]);

  return <div className="native-page-content">{children}</div>;
}
