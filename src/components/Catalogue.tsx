"use client";

import { useMemo, useState } from "react";
import type { AlgorithmGroup } from "@/data/algorithms";
import { algorithms, groups } from "@/data/algorithms";
import { AlgorithmCard } from "@/components/AlgorithmCard";

export function Catalogue() {
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
          <h2 id="library-title">مكتبة المقرر</h2>
          <p>اختر موضوعًا، اقرأ فكرته، ثم شاهد الخوارزمية وهي تعمل.</p>
        </div>
        <p>{filtered.length} من {algorithms.length} موضوعًا</p>
      </div>
      <div className="catalog-toolbar">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن خوارزمية أو مفهوم" aria-label="ابحث في مكتبة الخوارزميات" />
        </label>
        <div className="filter-list" role="group" aria-label="تصفية حسب القسم">
          {(["الكل", ...groups] as const).map((group) => (
            <button key={group} className="filter-button" type="button" aria-pressed={activeGroup === group} onClick={() => setActiveGroup(group)}>{group}</button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? <p className="empty-results">ما لقينا موضوعًا يطابق بحثك. جرّب كلمة ثانية.</p> : groups.map((group) => {
        const items = filtered.filter((item) => item.group === group);
        if (!items.length) return null;
        return (
          <section className="catalog-group" key={group} aria-label={group}>
            <h3>{group}<span>{items.length} موضوع</span></h3>
            <div className="algorithm-grid">{items.map((algorithm) => <AlgorithmCard key={algorithm.slug} algorithm={algorithm} />)}</div>
          </section>
        );
      })}
    </section>
  );
}
