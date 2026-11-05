"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteIcon } from "@/components/SiteIcon";
import { InstallAppButton } from "@/components/InstallAppButton";

export function SiteHeader() {
  const { language } = useLanguage();
  const en = language === "en";
  const [labsOpen, setLabsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLabsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Interactive Labs Dropdown */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLabsOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-cyan-300 font-bold hover:bg-white/10 transition-colors"
              aria-expanded={labsOpen}
            >
              <span>🧪</span>
              <span>{en ? "Interactive Labs" : "المعامل التفاعلية"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${labsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {labsOpen && (
              <div
                className="absolute top-full mt-2 w-72 rounded-2xl bg-[#0b101d] border border-slate-700/80 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 text-xs"
                style={{ insetInlineStart: 0 }}
              >
                <Link
                  href="/trees/"
                  onClick={() => setLabsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <span className="text-xl p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    🌳
                  </span>
                  <div>
                    <strong className="block text-white font-bold text-xs">
                      {en ? "Advanced Trees & Structures" : "الأشجار وهياكل البيانات"}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {en ? "AVL Rotations, Max-Heap, Trie" : "دوران AVL، كومة Max-Heap، شجرة Trie"}
                    </span>
                  </div>
                </Link>

                <Link
                  href="/compression/"
                  onClick={() => setLabsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <span className="text-xl p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    🗜️
                  </span>
                  <div>
                    <strong className="block text-white font-bold text-xs">
                      {en ? "Data Compression & Coding" : "ضغط البيانات والترميز"}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {en ? "LZW Dictionary, RLE Run-Length" : "بناء قاموس LZW، ترميز RLE"}
                    </span>
                  </div>
                </Link>

                <Link
                  href="/geometry/"
                  onClick={() => setLabsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <span className="text-xl p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    📐
                  </span>
                  <div>
                    <strong className="block text-white font-bold text-xs">
                      {en ? "Computational Geometry" : "الهندسة الحسابية والتحدب"}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {en ? "Graham Scan Hull, Closest Pair" : "غلاف غراهام المحدب، أقرب زوج نقاط"}
                    </span>
                  </div>
                </Link>

                <Link
                  href="/cryptography/hashing/"
                  onClick={() => setLabsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                >
                  <span className="text-xl p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 group-hover:scale-110 transition-transform">
                    🔐
                  </span>
                  <div>
                    <strong className="block text-white font-bold text-xs">
                      {en ? "Hashing & Avalanche Effect" : "دوال التجزئة والانهيار الجليدي"}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {en ? "SHA-256 16×16 Matrix, HMAC" : "مصفوفة 16×16 لـ SHA-256، توقيع HMAC"}
                    </span>
                  </div>
                </Link>

                <Link
                  href="/ai/"
                  onClick={() => setLabsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group border-t border-slate-800 mt-1 pt-2"
                >
                  <span className="text-xl p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover:scale-110 transition-transform">
                    🤖
                  </span>
                  <div>
                    <strong className="block text-white font-bold text-xs">
                      {en ? "Artificial Intelligence Lab" : "معمل الذكاء الاصطناعي"}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {en ? "A* Pathfinding, Minimax, Perceptron" : "مسار A*، خوارزمية Minimax، العصبون"}
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/cryptography/">{en ? "Cryptography" : "مختبر التشفير"}</Link>
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
