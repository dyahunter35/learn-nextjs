"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Language = "ar" | "en";
const LanguageContext = createContext<{ language: Language; toggle: () => void }>({ language: "ar", toggle: () => {} });

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("course-language-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("course-language-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguageSnapshot(): Language {
  return localStorage.getItem("course-language") === "en" ? "en" : "ar";
}

function getServerLanguageSnapshot(): Language {
  return "ar";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  const toggle = () => {
    const next = language === "ar" ? "en" : "ar";
    localStorage.setItem("course-language", next);
    window.dispatchEvent(new Event("course-language-change"));
  };
  return <LanguageContext.Provider value={{ language, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
