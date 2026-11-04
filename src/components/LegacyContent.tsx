"use client";

import { useEffect, useRef } from "react";

type LegacyScript = { src: string; code: string };

export function LegacyContent({ html, stylesheets, scripts, title }: { html: string; stylesheets: string[]; scripts: LegacyScript[]; title: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const addedStyles = stylesheets.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.legacyStyle = "true";
      document.head.appendChild(link);
      return link;
    });
    if (rootRef.current) rootRef.current.innerHTML = html;

    let cancelled = false;
    const runScripts = async () => {
      for (const item of scripts) {
        if (cancelled) return;
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
      if (!cancelled) {
        const highlighter = (window as Window & { hljs?: { highlightElement: (element: Element) => void } }).hljs;
        rootRef.current?.querySelectorAll(".code-block.active pre code").forEach((element) => highlighter?.highlightElement(element));
        window.onload?.(new Event("load"));
      }
    };
    void runScripts();
    return () => {
      cancelled = true;
      addedStyles.forEach((link) => link.remove());
      document.querySelectorAll('script[src^="/legacy/assets/"]').forEach((script) => script.remove());
      if (rootRef.current) rootRef.current.replaceChildren();
    };
  }, [html, scripts, stylesheets]);

  return <section className="legacy-content" aria-label={title} ref={rootRef} />;
}
