"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";
import { InstallAppButton } from "@/components/InstallAppButton";

export function SiteHeader() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="مقرر الحاسوب، الصفحة الرئيسية">
          <span className="brand-mark"><SiteIcon name="brand" /></span>
          <span className="brand-name">{en ? "Computer Science" : "مقرر الحاسوب"}</span>
        </Link>
        <nav className="primary-nav" aria-label="التنقل الرئيسي">
          <Link href="/">{en ? "Home" : "الرئيسية"}</Link>
          <Link href="/algorithms/">{en ? "Algorithm library" : "مكتبة الخوارزميات"}</Link>
          <Link href="/#developer">{en ? "Developer" : "المطور"}</Link>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
          <InstallAppButton />
        </div>
      </div>
    </header>
  );
}
