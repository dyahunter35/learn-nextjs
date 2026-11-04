"use client";

import { useState } from "react";
import Link from "next/link";
import {
  caesarEncrypt,
  vigenereEncrypt,
  substitutionEncrypt,
  ALPHABET,
} from "@/lib/crypto-engine";

export default function CryptographyOverviewPage() {
  const [quickInput, setQuickInput] = useState("CYBER SECURITY 2026");

  const caesarRes = caesarEncrypt(quickInput, 3);
  const vigenereRes = vigenereEncrypt(quickInput, "KEY").output;
  const atbashRes = substitutionEncrypt(
    quickInput,
    ALPHABET.split("").reverse().join("")
  );

  const modules = [
    {
      num: "01",
      title: "معامل الشفرات الكلاسيكية",
      enTitle: "Cipher Labs",
      href: "/cryptography/ciphers",
      color: "sky",
      badge: "9 خوارزميات تفاعلية",
      desc: "شفرة قيصر مع الدائرة الموديلو، التعويض أحادي الأبجدية، أفين، بلايفير 5×5، مصفوفات هيل، فيجينير، التبديل الصفي، الشفرات المركبة، ولوحة المرة الواحدة (OTP).",
      items: ["Caesar Mod-26 Dial", "Playfair 5x5 Matrix", "Hill 2x2/3x3 Math", "Vigenère Square Grid", "OTP XOR Engine"],
    },
    {
      num: "02",
      title: "محاكي الهجمات والتحليل",
      enTitle: "Cryptanalysis Lab",
      href: "/cryptography/cryptanalysis",
      color: "amber",
      badge: "4 أسلحة تحليلية",
      desc: "محلل الترددات البياني مقارنة بالإنجليزية، طريقة كاسيسكي لاكتشاف طول المفتاح، ساعة القوة الغاشمة لقياس فضاء المفاتيح، وتصنيف نماذج الهجمات الأربعة.",
      items: ["Frequency Plotter (الكندي)", "Kasiski Examination", "Brute-Force Clock", "Attacks Classifier"],
    },
    {
      num: "03",
      title: "المحاكي الميكانيكي (إنيجما)",
      enTitle: "Enigma Simulator",
      href: "/cryptography/enigma",
      color: "yellow",
      badge: "محاكاة فيزيائية كاملة",
      desc: "محاكي كامل لآلة Enigma I الألمانية ثلاثية الأسطوانات، لوحة المصابيح المتوهجة لحظياً، لوحة التوصيل (Steckerbrett)، وجداول الإعدادات السرية اليومية.",
      items: ["3-Rotor Stepping & Notches", "Illuminated Lampboard", "Plugboard Wiring", "Daily Setting Sheets"],
    },
    {
      num: "04",
      title: "مسرح المعارك والقصص التاريخية",
      enTitle: "Historical Battle Theater",
      href: "/cryptography/history",
      color: "emerald",
      badge: "5 مهمات تاريخية",
      desc: "غرف محاكاة تفاعلية: خدعة معركة ميدواي 1942 (Chosen-Plaintext)، كارثة إعادة المفاتيح في مشروع فينونا السوفيتي، أحجية العميل المزدوج، وبرقية قيصر.",
      items: ["معركة ميدواي (خدعة الرمز AF)", "مشروع فينونا (Venona OTP)", "أحجية العميل المزدوج", "برقية قيصر في بلاد الغال"],
    },
    {
      num: "05",
      title: "مختبر تقنيات الإخفاء",
      enTitle: "Steganography Lab",
      href: "/cryptography/steganography",
      color: "cyan",
      badge: "إخفاء رقمي ونصوص",
      desc: "محرر كانفاس لتعديل بتات LSB الأقل أهمية لقنوات RGB للصور بدون أي أثر بصري، مستعرض المستويات البتية، وأحجية المفتش مورس لإخفاء الرسائل داخل الخطابات.",
      items: ["LSB Image Bit Shift", "Bit-Plane Visualizer", "Inspector Morse Text Puzzle"],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Mission Control Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#101828] to-[#070b14] border border-[#1f2d48] p-8 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            منظومة التشفير والتحليل التفاعلية المتقدمة
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            لوحة التحكم الرئيسية للمرجع التشفيري والتاريخي
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            قسم شامل مستقل يضم كافة الخوارزميات والشفرات الكلاسيكية، المحاكيات الميكانيكية، أدوات كسر وتحليل الشفرات، وسيناريوهات المعارك التاريخية التي صاغت مصير العالم، في بيئة عمل تفاعلية فورية.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/cryptography/ciphers"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-sky-950/50 transition-all flex items-center gap-2"
            >
              <span>دخول معامل الشفرات</span>
              <span className="font-mono">←</span>
            </Link>
            <Link
              href="/cryptography/enigma"
              className="px-5 py-2.5 rounded-xl bg-[#141e33] hover:bg-[#1a2742] border border-[#1f2d48] text-yellow-300 font-bold text-sm transition-all flex items-center gap-2"
            >
              <span>تشغيل آلة إنيجما</span>
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
            </Link>
            <Link
              href="/cryptography/history"
              className="px-5 py-2.5 rounded-xl bg-[#141e33] hover:bg-[#1a2742] border border-[#1f2d48] text-emerald-300 font-bold text-sm transition-all"
            >
              مسرح المعارك التاريخية
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Real-Time Multi-Cipher Workbench */}
      <section className="bg-[#10141f] border border-[#1f2d48] rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1f2d48] pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <h3 className="text-base font-bold text-white">منصة الاختبار السريع متعددة الخوارزميات (Live Multi-Cipher Sandbox)</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">اكتب أي جملة لرؤية ناتج تحويلها فورياً:</span>
        </div>

        <div>
          <input
            type="text"
            value={quickInput}
            onChange={(e) => setQuickInput(e.target.value.toUpperCase())}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-xl p-3 text-sm text-slate-100 font-mono font-bold tracking-wider focus:border-sky-500 focus:outline-none uppercase"
            placeholder="اكتب رسالة للتجربة..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 bg-[#090d16] border border-[#1f2d48] rounded-xl font-mono text-xs space-y-1">
            <div className="flex justify-between text-slate-400">
              <span className="font-bold text-sky-400">قيصر (Caesar k=3):</span>
              <Link href="/cryptography/ciphers" className="text-[10px] text-sky-500 hover:underline">المختبر ←</Link>
            </div>
            <div className="text-sky-300 font-bold break-all pt-1">{caesarRes || "—"}</div>
          </div>

          <div className="p-3.5 bg-[#090d16] border border-[#1f2d48] rounded-xl font-mono text-xs space-y-1">
            <div className="flex justify-between text-slate-400">
              <span className="font-bold text-amber-400">فيجينير (Key=&quot;KEY&quot;):</span>
              <Link href="/cryptography/ciphers" className="text-[10px] text-amber-500 hover:underline">المختبر ←</Link>
            </div>
            <div className="text-amber-300 font-bold break-all pt-1">{vigenereRes || "—"}</div>
          </div>

          <div className="p-3.5 bg-[#090d16] border border-[#1f2d48] rounded-xl font-mono text-xs space-y-1">
            <div className="flex justify-between text-slate-400">
              <span className="font-bold text-emerald-400">أتباش (Atbash A↔Z):</span>
              <Link href="/cryptography/ciphers" className="text-[10px] text-emerald-500 hover:underline">المختبر ←</Link>
            </div>
            <div className="text-emerald-300 font-bold break-all pt-1">{atbashRes || "—"}</div>
          </div>
        </div>
      </section>

      {/* System Architecture Blueprint (User's ASCII Diagram) */}
      <section className="bg-[#0b0e17] border border-[#1f2d48] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1f2d48] pb-3">
          <h3 className="text-sm font-bold text-slate-300 font-mono tracking-wider uppercase">
            مخطط المعمارية والتكامل للمنصة التفاعلية (System Architecture Map)
          </h3>
          <span className="text-xs text-sky-400 font-mono">5 ركائز أساسية</span>
        </div>

        <div className="overflow-x-auto crypto-scroll p-4 bg-[#090d16] rounded-xl border border-[#1f2d48] font-mono text-xs text-slate-300 leading-relaxed text-left" dir="ltr">
          <pre className="text-sky-400">{`       [ لوحة التحكم الرئيسية للنموذج التفاعلي ]
                           │
 ┌─────────────────────────┼─────────────────────────┐
 │                         │                         │
 ▼                         ▼                         ▼
[1. معامل الشفرات]   [2. محاكي الهجمات]    [3. المحاكي الميكانيكي]
- Caesar & Affine    - Frequency Plotter   - Enigma 3-Rotor Machine
- Playfair 5x5       - Kasiski Analyzer    - Plugboard Wiring
- Hill Matrix        - Brute-Force Clock   - Secret Setting Sheets
- Vigenère Grid      - Attacks Classifier  
- Transposition Map
- OTP XOR Engine
                           │
 ┌─────────────────────────┴─────────────────────────┐
 │                                                   │
 ▼                                                   ▼
[4. مسرح المعارك والقصص]                 [5. مختبر الإخفاء]
- معركة ميدواي (Chosen-Plaintext)        - LSB Image Pixel Bit Shift
- مشروع فينونا (Venona OTP Reuse)         - Inspector Morse Text Puzzle
- العميل المزدوج (Heil/Kill/Ike Scenarios)`}</pre>
        </div>
      </section>

      {/* Detailed Cards for the 5 Modules */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white">أقسام ومختبرات المنصة:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="bg-[#111827] border border-[#1f2d48] hover:border-sky-500/60 rounded-2xl p-6 transition-all group flex flex-col justify-between hover:shadow-xl hover:shadow-sky-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-500">#{mod.num}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#141e33] text-sky-400 border border-[#1f2d48]">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {mod.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-500 block mb-3">{mod.enTitle}</span>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {mod.desc}
                </p>

                <div className="space-y-1 pt-3 border-t border-[#1f2d48]">
                  {mod.items.map((it, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                      <span className="text-sky-400">›</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:translate-x-[-4px] transition-transform">
                <span>فتح المختبر والتجربة</span>
                <span>←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
