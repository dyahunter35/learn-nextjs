import Link from "next/link";
import type { Algorithm } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { SiteHeader } from "@/components/SiteHeader";

type PageKind = "شرح" | "محاكاة" | "الكود البرمجي";

export function SiteShell({ algorithm, pageKind, children }: { algorithm: Algorithm; pageKind: PageKind; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="mobile-topic-nav" aria-label="مواضيع المقرر">
        {algorithms.map((item) => (
          <Link key={item.slug} href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>{item.title}</Link>
        ))}
      </div>
      <div className="workspace">
        <aside className="course-sidebar" aria-label="مواضيع المقرر">
          <p className="sidebar-title">مكتبة المقرر · {algorithms.length} موضوعًا</p>
          {groups.map((group) => (
            <section className="sidebar-group" key={group}>
              <h3>{group}</h3>
              {algorithms.filter((item) => item.group === group).map((item) => (
                <Link key={item.slug} className="sidebar-link" href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>
                  <span className="sidebar-dot" aria-hidden="true" />{item.title}
                </Link>
              ))}
            </section>
          ))}
        </aside>
        <main className="page-content">
          <nav className="breadcrumbs" aria-label="مسار الصفحة">
            <Link href="/">الرئيسية</Link><span aria-hidden="true">/</span>
            <Link href="/algorithms">المكتبة</Link><span aria-hidden="true">/</span>
            <Link href={`/algorithms/${algorithm.slug}`}>{algorithm.title}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{pageKind}</span>
          </nav>
          {children}
        </main>
      </div>
      <footer className="site-footer">مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></footer>
    </>
  );
}
