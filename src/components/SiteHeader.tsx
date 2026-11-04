import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="مقرر الحاسوب، الصفحة الرئيسية">
          <span className="brand-mark" aria-hidden="true">م</span>
          <span className="brand-name">مقرر الحاسوب</span>
        </Link>
        <nav className="primary-nav" aria-label="التنقل الرئيسي">
          <Link href="/">الرئيسية</Link>
          <Link href="/algorithms">مكتبة الخوارزميات</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
