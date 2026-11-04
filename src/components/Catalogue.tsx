"use client";

import { useMemo, useState } from "react";
import type { AlgorithmGroup } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { AlgorithmCard } from "@/components/AlgorithmCard";
import { useLanguage } from "@/components/LanguageProvider";

export function Catalogue() {
  const { language } = useLanguage();
  const en = language === "en";
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<AlgorithmGroup | "الكل">("الكل");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ar");
    return algorithms.filter((item) => {
      const matchesGroup = activeGroup === "الكل" || item.group === activeGroup;
      const matchesQuery = !normalized || `${item.title} ${item.english} ${item.summary}`.toLocaleLowerCase("ar").includes(normalized);
      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  return (
    <section id="library" aria-labelledby="library-title">
      <div className="section-heading">
        <div>
          <h2 id="library-title">{en ? "Course library" : "مكتبة المقرر"}</h2>
          <p>{en ? "Choose a topic, learn the idea, then watch the algorithm at work." : "اختر موضوعًا، اقرأ فكرته، ثم شاهد الخوارزمية وهي تعمل."}</p>
        </div>
        <p>{en ? `${filtered.length} of ${algorithms.length} topics` : `${filtered.length} من ${algorithms.length} موضوعًا`}</p>
      </div>
      <div className="catalog-toolbar">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={en ? "Search algorithms or concepts" : "ابحث عن خوارزمية أو مفهوم"} aria-label={en ? "Search the algorithm library" : "ابحث في مكتبة الخوارزميات"} />
        </label>
        <div className="filter-list" role="group" aria-label={en ? "Filter by group" : "تصفية حسب القسم"}>
          {(["الكل", ...groups] as const).map((group, index) => (
            <button key={group} className="filter-button" type="button" aria-pressed={activeGroup === group} onClick={() => setActiveGroup(group)}>{en ? ["All", "Course basics", "Learning tools", "More topics"][index] : group}</button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? <p className="empty-results">{en ? "No topics match your search. Try another term." : "ما لقينا موضوعًا يطابق بحثك. جرّب كلمة ثانية."}</p> : groups.map((group, groupIndex) => {
        const items = filtered.filter((item) => item.group === group);
        if (!items.length) return null;
        return (
          <section className="catalog-group" key={group} aria-label={group}>
            <h3>{en ? ["Course basics", "Learning tools", "More topics"][groupIndex] : group}<span>{en ? `${items.length} topics` : `${items.length} موضوع`}</span></h3>
            <div className="algorithm-grid">{items.map((algorithm) => <AlgorithmCard key={algorithm.slug} algorithm={algorithm} />)}</div>
          </section>
        );
      })}
    </section>
  );
}
