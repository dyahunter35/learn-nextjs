"use client";
import Link from "next/link";
import type { Algorithm } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";

type PageKind = "شرح" | "محاكاة" | "الكود البرمجي";

export function SiteShell({ algorithm, pageKind, children }: { algorithm: Algorithm; pageKind: PageKind; children: React.ReactNode }) {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <>
      <SiteHeader />
      <div className="mobile-topic-nav" aria-label={en ? "Course topics" : "مواضيع المقرر"}>
        {algorithms.map((item) => (
          <Link key={item.slug} href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>{en ? item.english : item.title}</Link>
        ))}
      </div>
      <div className="workspace">
        <aside className="course-sidebar" aria-label="مواضيع المقرر">
          <p className="sidebar-title">{en ? `Course library · ${algorithms.length} topics` : `مكتبة المقرر · ${algorithms.length} موضوعًا`}</p>
          {groups.map((group, index) => (
            <section className="sidebar-group" key={group}>
              <h3>{en ? ["Course basics", "Learning tools", "More topics"][index] : group}</h3>
              {algorithms.filter((item) => item.group === group).map((item) => (
                <Link key={item.slug} className="sidebar-link" href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>
                  <span className="sidebar-dot" aria-hidden="true" />{en ? item.english : item.title}
                </Link>
              ))}
            </section>
          ))}
        </aside>
        <main className="page-content" dir={en ? "ltr" : "rtl"}>
          <nav className="breadcrumbs" aria-label={en ? "Breadcrumb" : "مسار الصفحة"}>
            <Link href="/">{en ? "Home" : "الرئيسية"}</Link><span aria-hidden="true">/</span>
            <Link href="/algorithms">{en ? "Library" : "المكتبة"}</Link><span aria-hidden="true">/</span>
            <Link href={`/algorithms/${algorithm.slug}`}>{en ? algorithm.english : algorithm.title}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{en ? ({ شرح: "Overview", محاكاة: "Simulation", "الكود البرمجي": "Code" } as Record<string,string>)[pageKind] : pageKind}</span>
          </nav>
          <nav className="lesson-tabs" aria-label={en ? "Topic pages" : "صفحات الموضوع"}>
            {([ ["شرح", ""], ["محاكاة", "/simulation"], ["الكود البرمجي", "/code"] ] as const).map(([label, suffix]) => (
              <Link key={label} href={`/algorithms/${algorithm.slug}${suffix}`} aria-current={pageKind === label ? "page" : undefined}>
                <SiteIcon className="topic-tab-icon" name={label === "شرح" ? "overview" : label === "محاكاة" ? "simulation" : "code"} />
                {en ? ({ شرح: "Overview", محاكاة: "Simulation", "الكود البرمجي": "Code" } as Record<string, string>)[label] : label}
              </Link>
            ))}
          </nav>
          {children}
        </main>
      </div>
      <footer className="site-footer">{en ? <>Computer Science · Learn by exploring each idea <strong>step by step</strong></> : <>مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></>}</footer>
    </>
  );
}
