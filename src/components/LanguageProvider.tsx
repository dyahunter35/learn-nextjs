"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en";
const LanguageContext = createContext<{ language: Language; toggle: () => void }>({ language: "ar", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");
  useEffect(() => {
    const saved = localStorage.getItem("course-language");
    if (saved === "en" || saved === "ar") setLanguage(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("course-language", language);
  }, [language]);
  return <LanguageContext.Provider value={{ language, toggle: () => setLanguage((current) => current === "ar" ? "en" : "ar") }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
