"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function AiHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const en = language === "en";

  const navLinks = [
    { href: "/ai/", label: "لوحة التحكم", enLabel: "Overview", icon: "⚡" },
    { href: "/ai/pathfinding/", label: "البحث الذكي A*", enLabel: "A* Pathfinding", icon: "🗺️" },
    { href: "/ai/minimax/", label: "الألعاب التنافسية Minimax", enLabel: "Minimax Games", icon: "🎮" },
    { href: "/ai/neural/", label: "الشبكات العصبية", enLabel: "Neural Networks", icon: "🧠" },
    { href: "/ai/machine-learning/", label: "التعلم الآلي الكلاسيكي", enLabel: "ML Clustering", icon: "📊" },
  ];

  const isActive = (href: string) => {
    if (href === "/ai/") return pathname === "/ai" || pathname === "/ai/";
    return pathname?.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#1e293b] bg-[#090d16]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/ai/"
              className="flex items-center gap-2.5 text-decoration-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-violet-950/40 group-hover:scale-105 transition-transform">
                🤖
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white flex items-center gap-2">
                  {en ? "AI & Machine Learning Lab" : "معمل الذكاء الاصطناعي التفاعلي"}
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-400 border border-violet-500/30">
                    LAB
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {en ? "Search · Game Theory · Neural Nets" : "خوارزميات البحث · شجر القرارات · الشبكات العصبية"}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ai-nav-link flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold ${
                    active
                      ? "active text-violet-400 bg-violet-500/10 border-b-2 border-violet-500"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{en ? link.enLabel : link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Exit Links */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/cryptography/"
              className="px-2.5 py-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <span>🔐</span>
              <span>{en ? "Crypto Lab" : "مختبر التشفير"}</span>
            </Link>
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <span>{en ? "Home" : "الرئيسية"}</span>
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
              aria-label="القائمة"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090d16] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold ${
                  active
                    ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                <span>{en ? link.enLabel : link.label}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <Link
              href="/cryptography/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold"
            >
              🔐 {en ? "Crypto Lab" : "مختبر التشفير"}
            </Link>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold"
            >
              🏠 {en ? "Home" : "الرئيسية"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

