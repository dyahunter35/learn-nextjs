"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import type { Algorithm, AlgorithmGroup } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";

type PageKind = "شرح" | "محاكاة" | "الكود البرمجي";

interface CourseSidebarProps {
  currentAlgorithm?: Algorithm;
  currentPageKind?: PageKind;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

const GROUP_CONFIG: Record<
  AlgorithmGroup,
  {
    en: string;
    ar: string;
    enShort: string;
    arShort: string;
    icon: string;
  }
> = {
  "أساسيات المقرر": {
    en: "Core Curriculum",
    ar: "أساسيات المقرر",
    enShort: "Core",
    arShort: "الأساسيات",
    icon: "📚",
  },
  "أدوات تعليمية": {
    en: "Learning Tools",
    ar: "أدوات تعليمية",
    enShort: "Tools",
    arShort: "الأدوات",
    icon: "🛠️",
  },
  "معرفة إضافية": {
    en: "Advanced Topics",
    ar: "معرفة إضافية",
    enShort: "Advanced",
    arShort: "متقدم",
    icon: "⚡",
  },
};

const COLOR_CLASSES: Record<
  string,
  {
    dot: string;
    badge: string;
  }
> = {
  indigo: {
    dot: "bg-indigo-500 shadow-indigo-500/50",
    badge: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
  },
  blue: {
    dot: "bg-sky-500 shadow-sky-500/50",
    badge: "bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
  },
  amber: {
    dot: "bg-amber-500 shadow-amber-500/50",
    badge: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  },
  emerald: {
    dot: "bg-emerald-500 shadow-emerald-500/50",
    badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  },
  violet: {
    dot: "bg-purple-500 shadow-purple-500/50",
    badge: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
  },
  rose: {
    dot: "bg-rose-500 shadow-rose-500/50",
    badge: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
  },
};

export function CourseSidebar({
  currentAlgorithm,
  currentPageKind = "شرح",
  isMobileDrawer = false,
  onCloseMobileDrawer,
}: CourseSidebarProps) {
  const { language } = useLanguage();
  const en = language === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | AlgorithmGroup>("all");
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  // Ensure the active algorithm's group is never collapsed on initial load
  useEffect(() => {
    if (currentAlgorithm) {
      setCollapsedGroups((prev) => ({
        ...prev,
        [currentAlgorithm.group]: false,
      }));
    }
  }, [currentAlgorithm]);

  const toggleGroup = (group: AlgorithmGroup) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  // Filter algorithms by search query and category filter
  const filteredAlgorithms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return algorithms.filter((item) => {
      // Group filter
      if (selectedFilter !== "all" && item.group !== selectedFilter) {
        return false;
      }
      // Query filter
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.english.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedFilter]);

  const subPages = [
    { kind: "شرح" as PageKind, enLabel: "Overview", arLabel: "شرح", suffix: "", icon: "overview" as const },
    { kind: "محاكاة" as PageKind, enLabel: "Simulation", arLabel: "محاكاة", suffix: "/simulation", icon: "simulation" as const },
    { kind: "الكود البرمجي" as PageKind, enLabel: "Code", arLabel: "الكود", suffix: "/code", icon: "code" as const },
  ];

  return (
    <aside
      className={`sidebar-panel ${isMobileDrawer ? "sidebar-mobile-view" : "course-sidebar"} select-none`}
      aria-label={en ? "Course Navigation Sidebar" : "شريط التنقل الجانبي للمقرر"}
      dir={en ? "ltr" : "rtl"}
    >
      {/* Sidebar Header & Brand Pill */}
      <div className="sidebar-top-card">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="sidebar-header-badge">
              {en ? "Library" : "المكتبة"}
            </span>
            <span className="text-xs text-[var(--muted)] font-medium">
              {en ? `${algorithms.length} topics` : `${algorithms.length} خوارزمية`}
            </span>
          </div>

          {isMobileDrawer && onCloseMobileDrawer && (
            <button
              onClick={onCloseMobileDrawer}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              aria-label={en ? "Close menu" : "إغلاق القائمة"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-2.5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={en ? "Search algorithms (e.g. sorting, caesar)..." : "ابحث في الخوارزميات (مثل: ترتيب، قيصر)..."}
            className="sidebar-search-input"
            aria-label={en ? "Search algorithms" : "ابحث في الخوارزميات"}
          />
          <div className={`absolute top-2.5 ${en ? "right-2.5" : "left-2.5"} flex items-center gap-1 text-[var(--muted)]`}>
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-xs hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                title={en ? "Clear" : "مسح"}
              >
                ×
              </button>
            ) : (
              <SiteIcon name="search" className="w-4 h-4 opacity-50 pointer-events-none" />
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`filter-pill ${selectedFilter === "all" ? "filter-pill-active" : ""}`}
          >
            {en ? "All" : "الكل"}
          </button>
          {groups.map((group) => {
            const conf = GROUP_CONFIG[group];
            const isActive = selectedFilter === group;
            return (
              <button
                key={group}
                onClick={() => setSelectedFilter(isActive ? "all" : group)}
                className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
              >
                <span>{conf.icon}</span>
                <span>{en ? conf.enShort : conf.arShort}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cryptography Special Lab Banner Card */}
      <div className="my-3 px-1">
        <Link
          href="/cryptography/"
          onClick={onCloseMobileDrawer}
          className="group block p-2.5 rounded-xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent hover:border-sky-500/40 hover:from-sky-500/15 hover:via-indigo-500/15 transition-all text-decoration-none"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-base">🔐</span>
              <div>
                <p className="m-0 text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-500 leading-tight">
                  {en ? "Cryptography Universe" : "منصة التشفير التفاعلية"}
                </p>
                <p className="m-0 text-[11px] text-[var(--muted)] leading-tight mt-0.5">
                  {en ? "9 Ciphers & Historic Analysis" : "٩ معامل شفرات وتحليل متقدم"}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-sky-500/20 text-sky-700 dark:text-sky-300 shrink-0">
              {en ? "Lab" : "معمل"}
            </span>
          </div>
        </Link>
      </div>

      {/* Main Algorithm Navigation Groups */}
      <div className="sidebar-groups-container">
        {filteredAlgorithms.length === 0 ? (
          <div className="empty-search-state">
            <p className="text-sm text-[var(--muted)] font-medium mb-1">
              {en ? "No matching algorithms" : "لم يتم العثور على خوارزميات"}
            </p>
            <p className="text-xs text-[var(--muted)] opacity-80 mb-3">
              {en ? `No results for "${searchQuery}"` : `لا توجد نتائج للبحث عن "${searchQuery}"`}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("all");
              }}
              className="text-xs px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 hover:bg-indigo-100 font-semibold transition-colors"
            >
              {en ? "Reset filter" : "إعادة التعيين"}
            </button>
          </div>
        ) : (
          groups.map((group) => {
            const conf = GROUP_CONFIG[group];
            const groupItems = filteredAlgorithms.filter((item) => item.group === group);
            if (groupItems.length === 0) return null;

            const isCollapsed = !!collapsedGroups[group] && !searchQuery;

            return (
              <section key={group} className="sidebar-group-section">
                {/* Collapsible Group Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group)}
                  className="sidebar-group-header w-full flex items-center justify-between text-left group"
                  aria-expanded={!isCollapsed}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs opacity-75">{conf.icon}</span>
                    <h3 className="sidebar-group-title">
                      {en ? conf.en : conf.ar}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="sidebar-group-count">
                      {groupItems.length}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-[var(--muted)] transition-transform duration-200 ${
                        isCollapsed ? "-rotate-90" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Group Items */}
                {!isCollapsed && (
                  <div className="sidebar-items-list space-y-1">
                    {groupItems.map((item) => {
                      const isActive = currentAlgorithm?.slug === item.slug;
                      const colorInfo = COLOR_CLASSES[item.color] || COLOR_CLASSES.indigo;

                      return (
                        <div key={item.slug} className="sidebar-item-wrapper">
                          <Link
                            href={`/algorithms/${item.slug}/`}
                            onClick={onCloseMobileDrawer}
                            className={`sidebar-item-link ${isActive ? "sidebar-item-active" : ""}`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 shadow-xs ${colorInfo.dot} ${
                                isActive ? "scale-125 ring-2 ring-indigo-400/40" : ""
                              } transition-transform`}
                              aria-hidden="true"
                            />
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <span className="sidebar-item-title truncate">
                                {en ? item.english : item.title}
                              </span>
                              <span className="sidebar-item-subtitle truncate">
                                {en ? item.title : item.english}
                              </span>
                            </div>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                            )}
                          </Link>

                          {/* Accordion Sub-Tabs for Active Topic */}
                          {isActive && (
                            <div className="sidebar-subtabs-box">
                              {subPages.map((sub) => {
                                const isSubActive = currentPageKind === sub.kind;
                                return (
                                  <Link
                                    key={sub.kind}
                                    href={`/algorithms/${item.slug}${sub.suffix ? `${sub.suffix}/` : "/"}`}
                                    onClick={onCloseMobileDrawer}
                                    className={`sidebar-subtab-link ${
                                      isSubActive ? "sidebar-subtab-active" : ""
                                    }`}
                                    aria-current={isSubActive ? "page" : undefined}
                                  >
                                    <SiteIcon name={sub.icon} className="w-3.5 h-3.5 opacity-70" />
                                    <span>{en ? sub.enLabel : sub.arLabel}</span>
                                    {isSubActive && (
                                      <span className="ml-auto text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                                        •
                                      </span>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })
        )}
      </div>

      {/* Sidebar Footer Stats & Developer Link */}
      <div className="sidebar-bottom-bar">
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <Link
            href="/algorithms/"
            onClick={onCloseMobileDrawer}
            className="hover:text-[var(--indigo)] transition-colors font-medium"
          >
            {en ? "← All Topics" : "← كل الموضوعات"}
          </Link>
          <Link
            href="/#developer"
            onClick={onCloseMobileDrawer}
            className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
          >
            <span>👨‍💻</span>
            <span>{en ? "Developer" : "المطور"}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

