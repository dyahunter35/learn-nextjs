"use client";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";

export function SiteHeader() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="/" aria-label="مقرر الحاسوب، الصفحة الرئيسية">
          <span className="brand-mark"><SiteIcon name="brand" /></span>
          <span className="brand-name">{en ? "Computer Science" : "مقرر الحاسوب"}</span>
        </a>
        <nav className="primary-nav" aria-label="التنقل الرئيسي">
          <a href="/">{en ? "Home" : "الرئيسية"}</a>
          <a href="/algorithms">{en ? "Algorithm library" : "مكتبة الخوارزميات"}</a>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
