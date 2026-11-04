"use client";

import { useEffect, useRef, useState } from "react";

export function LegacyExperience({ srcDoc, title }: { srcDoc: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(720);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== frameRef.current?.contentWindow || event.data?.type !== "legacy-height") return;
      const nextHeight = Number(event.data.height);
      if (Number.isFinite(nextHeight)) setHeight(Math.max(560, Math.min(nextHeight, 16000)));
    }
    window.addEventListener("message", onMessage);
    const theme = window.localStorage.getItem("opencode-theme") === "dark" ? "dark" : "light";
    frameRef.current?.contentWindow?.postMessage({ type: "legacy-theme", theme }, window.location.origin);
    return () => window.removeEventListener("message", onMessage);
  }, [srcDoc]);

  return (
    <iframe
      ref={frameRef}
      className="legacy-frame"
      title={title}
      srcDoc={srcDoc}
      style={{ height }}
      allow="clipboard-read; clipboard-write"
      loading="eager"
    />
  );
}
