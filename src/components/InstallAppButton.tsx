"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function subscribeToInstallState(callback: () => void) {
  const displayMode = window.matchMedia("(display-mode: standalone)");
  displayMode.addEventListener("change", callback);
  window.addEventListener("appinstalled", callback);
  return () => {
    displayMode.removeEventListener("change", callback);
    window.removeEventListener("appinstalled", callback);
  };
}

function getInstallState() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || ("standalone" in navigator && Boolean((navigator as Navigator & { standalone?: boolean }).standalone));
  if (standalone) return "installed";
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return ios ? "ios" : "other";
}

function getServerInstallState() {
  return "other";
}

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function InstallAppButton() {
  const { language } = useLanguage();
  const installState = useSyncExternalStore(subscribeToInstallState, getInstallState, getServerInstallState);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [showIosHelp, setShowIosHelp] = useState(false);
  const [installed, setInstalled] = useState(false);
  const en = language === "en";

  useEffect(() => {
    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || installState === "installed" || (!installPrompt && installState !== "ios")) return null;

  const install = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice.outcome === "accepted") setInstalled(true);
      setInstallPrompt(null);
      return;
    }
    setShowIosHelp((visible) => !visible);
  };

  return (
    <div className="install-app-wrap">
      <button className="install-app-button" type="button" onClick={install} aria-label={en ? "Install app" : "تثبيت التطبيق"}>
        <span aria-hidden="true">⇩</span>{en ? "Install" : "تثبيت"}
      </button>
      {showIosHelp && (
        <span className="install-app-help" role="status" aria-live="polite">
          {en ? "In Safari, tap Share, then Add to Home Screen." : "في سفاري، اضغط مشاركة ثم إضافة إلى الشاشة الرئيسية."}
        </span>
      )}
    </div>
  );
}
