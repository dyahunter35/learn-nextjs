"use client";
import { Catalogue } from "@/components/Catalogue";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function AlgorithmsPage() {
  const { language } = useLanguage();
  return <><SiteHeader /><main className="catalog-section"><Catalogue /></main><footer className="site-footer">{language === "en" ? "Computer Science" : "مقرر الحاسوب"}</footer></>;
}
