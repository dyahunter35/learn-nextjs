"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { language, toggle } = useLanguage();
  return <button className="language-button" type="button" onClick={toggle} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}>{language === "ar" ? "EN" : "عربي"}</button>;
}
