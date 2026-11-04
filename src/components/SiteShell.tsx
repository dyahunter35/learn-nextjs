"use client";

import { useState } from "react";
import Link from "next/link";
import type { Algorithm } from "@/data/algorithms";
import { algorithms } from "@/data/algorithms";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";
import { CourseSidebar } from "@/components/CourseSidebar";

type PageKind = "شرح" | "محاكاة" | "الكود البرمجي";

export function SiteShell({
  algorithm,
  pageKind,
  children,
}: {
  algorithm: Algorithm;
  pageKind: PageKind;
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const en = language === "en";
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <SiteHeader />

      {/* Mobile Top Navigation Strip & Drawer Toggle */}
      <div className="mobile-topic-nav-container">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--line)] bg-[var(--surface)]">
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-xs font-bold text-[var(--ink)] hover:border-indigo-400 transition-colors shrink-0"
            aria-label={en ? "Open algorithm drawer" : "فتح قائمة الخوارزميات"}
          >
            <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span>{en ? "Menu" : "القائمة"}</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-mono">
              {algorithms.length}
            </span>
          </button>

          {/* Quick horizontal topic strip for mobile swiping */}
          <div className="mobile-topic-nav flex-1" aria-label={en ? "Course topics" : "مواضيع المقرر"}>
            {algorithms.map((item) => (
              <Link
                key={item.slug}
                href={`/algorithms/${item.slug}/`}
                aria-current={item.slug === algorithm.slug ? "page" : undefined}
              >
                {en ? item.english : item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Modal Sheet */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`relative w-full max-w-xs sm:max-w-sm h-full bg-[var(--paper)] shadow-2xl z-10 flex flex-col ${
              en ? "mr-auto" : "ml-auto"
            }`}
          >
            <CourseSidebar
              currentAlgorithm={algorithm}
              currentPageKind={pageKind}
              isMobileDrawer
              onCloseMobileDrawer={() => setMobileDrawerOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Workspace Layout: Desktop Sidebar + Content */}
      <div className="workspace" dir={en ? "ltr" : "rtl"}>
        <CourseSidebar
          currentAlgorithm={algorithm}
          currentPageKind={pageKind}
        />

        <main className="page-content" dir={en ? "ltr" : "rtl"}>
          <nav className="breadcrumbs" aria-label={en ? "Breadcrumb" : "مسار الصفحة"}>
            <Link href="/">{en ? "Home" : "الرئيسية"}</Link>
            <span aria-hidden="true">/</span>
            <Link href="/algorithms/">{en ? "Library" : "المكتبة"}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/algorithms/${algorithm.slug}/`}>
              {en ? algorithm.english : algorithm.title}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">
              {en
                ? ({
                    شرح: "Overview",
                    محاكاة: "Simulation",
                    "الكود البرمجي": "Code",
                  } as Record<string, string>)[pageKind]
                : pageKind}
            </span>
          </nav>

          <nav className="lesson-tabs" aria-label={en ? "Topic pages" : "صفحات الموضوع"}>
            {(
              [
                ["شرح", ""],
                ["محاكاة", "/simulation"],
                ["الكود البرمجي", "/code"],
              ] as const
            ).map(([label, suffix]) => (
              <Link
                key={label}
                href={`/algorithms/${algorithm.slug}${suffix ? `${suffix}/` : "/"}`}
                aria-current={pageKind === label ? "page" : undefined}
              >
                <SiteIcon
                  className="topic-tab-icon"
                  name={
                    label === "شرح"
                      ? "overview"
                      : label === "محاكاة"
                      ? "simulation"
                      : "code"
                  }
                />
                {en
                  ? ({
                      شرح: "Overview",
                      محاكاة: "Simulation",
                      "الكود البرمجي": "Code",
                    } as Record<string, string>)[label]
                  : label}
              </Link>
            ))}
          </nav>

          {children}
        </main>
      </div>

      <footer className="site-footer">
        {en ? (
          <>
            Computer Science · Learn by exploring each idea <strong>step by step</strong>
          </>
        ) : (
          <>
            مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong>
          </>
        )}
      </footer>
    </>
  );
}
