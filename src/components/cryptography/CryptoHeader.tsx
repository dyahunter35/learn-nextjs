"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function CryptoHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: "لوحة التحكم", href: "/cryptography", icon: "dashboard" },
    { label: "معامل الشفرات", href: "/cryptography/ciphers", icon: "key" },
    { label: "محاكي الهجمات والتحليل", href: "/cryptography/cryptanalysis", icon: "shield-alert" },
    { label: "المحاكي الميكانيكي (إنيجما)", href: "/cryptography/enigma", icon: "cpu" },
    { label: "مسرح المعارك والقصص", href: "/cryptography/history", icon: "scroll" },
    { label: "مختبر الإخفاء", href: "/cryptography/steganography", icon: "eye-off" },
    { label: "دوال التجزئة (SHA-256)", href: "/cryptography/hashing", icon: "hash" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/95 backdrop-blur border-b border-[#1f2d48] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/cryptography"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[1.5px] shadow-lg shadow-sky-950/50">
                <div className="w-full h-full bg-[#0b101d] rounded-[10px] flex items-center justify-center text-sky-400 group-hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wide bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent">
                  منصة التشفير والتحليل التاريخي
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                  CRYPTOGRAPHY LAB & HISTORY DASHBOARD
                </span>
              </div>
            </Link>
          </div>

          {/* Quick exit to school curriculum */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              12 خوارزمية · 6 سيناريوهات تاريخية
            </span>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-slate-200 hover:text-white transition-all shadow-sm"
              title="العودة إلى مقرر الحاسوب الرئيسي"
            >
              <svg className="w-4 h-4 text-slate-400 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span>مقرر الحاسوب</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Navigation Bar */}
        <nav className="flex space-x-1 space-x-reverse overflow-x-auto pb-2 pt-1 crypto-scroll" aria-label="أقسام منصة التشفير">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${isActive
                    ? "bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-inner"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
