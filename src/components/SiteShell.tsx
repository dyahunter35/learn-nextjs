"use client";
import type { Algorithm } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/components/LanguageProvider";

type PageKind = "شرح" | "محاكاة" | "الكود البرمجي";

export function SiteShell({ algorithm, pageKind, children }: { algorithm: Algorithm; pageKind: PageKind; children: React.ReactNode }) {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <>
      <SiteHeader />
      <div className="mobile-topic-nav" aria-label={en ? "Course topics" : "مواضيع المقرر"}>
        {algorithms.map((item) => (
          <a key={item.slug} href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>{item.title}</a>
        ))}
      </div>
      <div className="workspace">
        <aside className="course-sidebar" aria-label="مواضيع المقرر">
          <p className="sidebar-title">{en ? `Course library · ${algorithms.length} topics` : `مكتبة المقرر · ${algorithms.length} موضوعًا`}</p>
          {groups.map((group, index) => (
            <section className="sidebar-group" key={group}>
              <h3>{en ? ["Course basics", "Learning tools", "More topics"][index] : group}</h3>
              {algorithms.filter((item) => item.group === group).map((item) => (
                <a key={item.slug} className="sidebar-link" href={`/algorithms/${item.slug}`} aria-current={item.slug === algorithm.slug ? "page" : undefined}>
                  <span className="sidebar-dot" aria-hidden="true" />{item.title}
                </a>
              ))}
            </section>
          ))}
        </aside>
        <main className="page-content" dir={en ? "ltr" : "rtl"}>
          <nav className="breadcrumbs" aria-label={en ? "Breadcrumb" : "مسار الصفحة"}>
            <a href="/">{en ? "Home" : "الرئيسية"}</a><span aria-hidden="true">/</span>
            <a href="/algorithms">{en ? "Library" : "المكتبة"}</a><span aria-hidden="true">/</span>
            <a href={`/algorithms/${algorithm.slug}`}>{en ? algorithm.english : algorithm.title}</a><span aria-hidden="true">/</span>
            <span aria-current="page">{en ? ({ شرح: "Overview", محاكاة: "Simulation", "الكود البرمجي": "Code" } as Record<string,string>)[pageKind] : pageKind}</span>
          </nav>
          <nav className="lesson-tabs" aria-label={en ? "Topic pages" : "صفحات الموضوع"}>
            {([ ["شرح", ""], ["محاكاة", "/simulation"], ["الكود البرمجي", "/code"] ] as const).map(([label, suffix]) => (
              <a key={label} href={`/algorithms/${algorithm.slug}${suffix}`} aria-current={pageKind === label ? "page" : undefined}>
                {en ? ({ شرح: "Overview", محاكاة: "Simulation", "الكود البرمجي": "Code" } as Record<string, string>)[label] : label}
              </a>
            ))}
          </nav>
          {children}
        </main>
      </div>
      <footer className="site-footer">{en ? <>Computer Science · Learn by exploring each idea <strong>step by step</strong></> : <>مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></>}</footer>
    </>
  );
}
