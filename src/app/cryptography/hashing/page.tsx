"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  sha256,
  compareAvalanche,
  hmacSha256,
  AvalancheComparison,
} from "@/lib/hash-engine";
import { useLanguage } from "@/components/LanguageProvider";

export default function HashingLabPage() {
  const { language } = useLanguage();
  const en = language === "en";

  // Tab: "avalanche" | "hasher" | "hmac"
  const [activeTab, setActiveTab] = useState<"avalanche" | "hasher" | "hmac">("avalanche");

  // State for Hasher
  const [hashInput, setHashInput] = useState<string>("Hello, World! 2026");
  const singleHash = useMemo(() => sha256(hashInput), [hashInput]);

  // State for Avalanche
  const [textA, setTextA] = useState<string>("Cryptography2026");
  const [textB, setTextB] = useState<string>("Cryptography2027");
  const avalancheRes: AvalancheComparison = useMemo(
    () => compareAvalanche(textA, textB),
    [textA, textB]
  );

  // State for HMAC
  const [hmacKey, setHmacKey] = useState<string>("super-secret-key-42");
  const [hmacMsg, setHmacMsg] = useState<string>("Transfer $5,000 to Account #8891");
  const hmacOutput = useMemo(() => hmacSha256(hmacKey, hmacMsg), [hmacKey, hmacMsg]);

  // Hovered bit in matrix
  const [hoveredBit, setHoveredBit] = useState<number | null>(null);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen text-slate-100 font-sans">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/cryptography/" className="hover:text-white transition-colors">{en ? "Cryptography" : "التشفير"}</Link>
        <span>/</span>
        <span className="text-rose-400 font-bold">{en ? "SHA-256 & Avalanche Effect" : "دوال التجزئة وتأثير الانهيار الجليدي"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🔐</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Advanced Cryptographic Hashing Lab" : "معمل دوال التجزئة المشفرة وتأثير الانهيار الجليدي"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "Deep dive into SHA-256 bit-level avalanche effect (SAC), 256-bit matrix analysis, Davies-Meyer compression functions, and HMAC authentication."
              : "استكشف خوارزمية التجزئة الآمنة SHA-256، وقس ظاهرة تأثير الانهيار الجليدي (Avalanche Effect) عبر مصفوفة بتات 16×16، مع محاكي التوقيع المشفر HMAC-SHA256."}
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex rounded-xl bg-slate-900 border border-slate-800 p-1 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("avalanche")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "avalanche"
                ? "bg-rose-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ⚡ تأثير الانهيار الجليدي
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hasher")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "hasher"
                ? "bg-rose-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            #️⃣ حاسبة SHA-256
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hmac")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "hmac"
                ? "bg-rose-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🔏 رمز HMAC
          </button>
        </div>
      </div>

      {/* TAB 1: AVALANCHE EFFECT SIMULATOR */}
      {activeTab === "avalanche" && (
        <div className="space-y-6">
          {/* Dual Input Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input A */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{en ? "Message A" : "الرسالة الأولى (Input A)"}:</span>
                <span className="font-mono text-emerald-400 text-[11px]">{textA.length} chars</span>
              </label>
              <input
                type="text"
                value={textA}
                onChange={(e) => setTextA(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-rose-500 font-mono"
              />
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-500 font-mono uppercase">SHA-256 Digest A:</span>
                <p className="font-mono text-[11px] text-emerald-400 break-all select-all">
                  {avalancheRes.hashA}
                </p>
              </div>
            </div>

            {/* Input B */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{en ? "Message B (Change 1 character)" : "الرسالة الثانية (غيّر حرفاً أو بتاً واحداً)"}:</span>
                <span className="font-mono text-rose-400 text-[11px]">{textB.length} chars</span>
              </label>
              <input
                type="text"
                value={textB}
                onChange={(e) => setTextB(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-rose-500 font-mono"
              />
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-500 font-mono uppercase">SHA-256 Digest B:</span>
                <p className="font-mono text-[11px] text-rose-400 break-all select-all">
                  {avalancheRes.hashB}
                </p>
              </div>
            </div>
          </div>

          {/* Avalanche Metric Scoreboard */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-right">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                {en ? "Strict Avalanche Criterion (SAC)" : "مؤشر الانهيار الجليدي الحاسم"}
              </span>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-4xl sm:text-5xl font-black text-rose-400 font-mono">
                  {avalancheRes.avalanchePercent}%
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ({avalancheRes.diffBitsCount} / 256 بت تغير بالكامل)
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-lg">
                النسبة المثالية المقبولة أمنياً في دوال التجزئة المشفرة هي حوالي{" "}
                <strong className="text-white font-mono">50% ± 5%</strong>، مما يعني استحالة التنبؤ بأي تغيير.
              </p>
            </div>

            {/* Gauge Bar */}
            <div className="w-full md:w-64 space-y-2">
              <div className="h-4 w-full bg-slate-950 rounded-full border border-slate-800 p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-500 transition-all duration-300"
                  style={{ width: `${Math.min(100, avalancheRes.avalanchePercent)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>0% (ضعيف)</span>
                <span className="text-emerald-400 font-bold">50% (مثالي)</span>
                <span>100% (معكوس)</span>
              </div>
            </div>
          </div>

          {/* 16x16 Bit Matrix Visualizer */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🎯</span>
                <span>{en ? "256-Bit Difference Grid (16 × 16 Matrix)" : "مصفوفة مقارنة البتات (256 بت - 16×16)"}</span>
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                  <span className="w-3 h-3 rounded bg-rose-500 inline-block shadow-sm shadow-rose-500/50" />
                  بت انقلب ({avalancheRes.diffBitsCount})
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-3 h-3 rounded bg-slate-800 inline-block" />
                  بت متطابق ({256 - avalancheRes.diffBitsCount})
                </span>
              </div>
            </div>

            {/* Matrix grid */}
            <div className="flex justify-center p-4 bg-slate-950 rounded-xl border border-slate-800/80 overflow-x-auto">
              <div className="grid grid-cols-16 gap-1.5 select-none" style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))" }}>
                {avalancheRes.bitDifferences.map((isFlipped, idx) => {
                  const bitValA = avalancheRes.bitsA[idx];
                  const bitValB = avalancheRes.bitsB[idx];
                  const isHovered = hoveredBit === idx;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredBit(idx)}
                      onMouseLeave={() => setHoveredBit(null)}
                      title={`Bit #${idx} | Input A: ${bitValA} ➔ Input B: ${bitValB} (${isFlipped ? "Flipped" : "Same"})`}
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center font-mono text-[10px] font-bold cursor-pointer transition-transform ${
                        isHovered ? "scale-125 z-10 shadow-lg ring-2 ring-white" : ""
                      } ${
                        isFlipped
                          ? "bg-rose-500 text-white shadow-sm shadow-rose-500/30"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {bitValB}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hovered Bit Information */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-400">
              {hoveredBit !== null ? (
                <>
                  <span>
                    البت المفحوص: <strong className="text-white">#{hoveredBit}</strong> (البايت رقم #{Math.floor(hoveredBit / 8)})
                  </span>
                  <span>
                    قيمة A: <strong className="text-emerald-400">{avalancheRes.bitsA[hoveredBit]}</strong> | قيمة B:{" "}
                    <strong className={avalancheRes.bitDifferences[hoveredBit] ? "text-rose-400" : "text-emerald-400"}>
                      {avalancheRes.bitsB[hoveredBit]}
                    </strong>
                  </span>
                  <span className={avalancheRes.bitDifferences[hoveredBit] ? "text-rose-400 font-bold" : "text-slate-400"}>
                    {avalancheRes.bitDifferences[hoveredBit] ? "انقلب (FLIPPED)" : "لم يتغير (IDENTICAL)"}
                  </span>
                </>
              ) : (
                <span className="text-slate-500 italic">
                  مرر الفأرة فوق أي بت في المصفوفة لفحص قيمته بين النصين...
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GENERAL SHA-256 HASHER */}
      {activeTab === "hasher" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
              <span>{en ? "Plaintext Message" : "النص المدخل للتجزئة (Message Input)"}:</span>
              <span className="font-mono text-cyan-400 text-xs">{hashInput.length} حروف</span>
            </label>
            <textarea
              rows={3}
              value={hashInput}
              onChange={(e) => setHashInput(e.target.value)}
              placeholder="اكتب أي نص هنا باللغة العربية أو الإنجليزية..."
              className="w-full bg-slate-950 border border-slate-700 text-sm text-white rounded-xl px-4 py-3 focus:outline-none focus:border-rose-500 font-mono"
            />

            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => setHashInput("The quick brown fox jumps over the lazy dog")}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
              >
                Fox Preset
              </button>
              <button
                type="button"
                onClick={() => setHashInput("The quick brown fox jumps over the lazy cog")}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
              >
                Cog Preset (1 letter diff)
              </button>
              <button
                type="button"
                onClick={() => setHashInput("")}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
              >
                Empty String (e3b0c442...)
              </button>
            </div>
          </div>

          {/* Hex Digest & Bit Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-300">{en ? "64-Hexadecimal Characters" : "البصمة الست عشرية (Hex Digest)"}:</span>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-rose-400 break-all select-all">
                {singleHash.hex}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-300">{en ? "256-Bit Binary Stream" : "السلسلة الثنائية (256 Bits)"}:</span>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400 break-all select-all max-h-24 overflow-y-auto">
                {singleHash.bits}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HMAC-SHA256 */}
      {activeTab === "hmac" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>🔏</span>
              <span>{en ? "HMAC-SHA256 Signature Generator" : "رمز المصادقة المشفر للرسائل (HMAC-SHA256)"}</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              تضمن خوارزمية HMAC سلامة وموثوقية الرسائل عبر دمج مفتاح سري مشترك مع نص الرسالة باستخدام تقنية الحشو الثنائي (ipad / opad).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">{en ? "Shared Secret Key (K)" : "المفتاح السري المشترك (Key)"}:</label>
                <input
                  type="text"
                  value={hmacKey}
                  onChange={(e) => setHmacKey(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">{en ? "Message Data (m)" : "بيانات الرسالة (Message)"}:</label>
                <input
                  type="text"
                  value={hmacMsg}
                  onChange={(e) => setHmacMsg(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-sm text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>
            </div>

            {/* Generated Signature */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[11px] text-slate-400 font-mono uppercase">HMAC Signature Output:</span>
              <div className="font-mono text-sm text-rose-400 break-all select-all font-bold">
                {hmacOutput}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Educational & Mathematical Theory Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <span>📚</span>
          <span>{en ? "Mathematical Core of SHA-256 and Compression Rounds" : "البنية الرياضية وخوارزميات ضغط SHA-256"}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 64 Rounds Functions */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-rose-400 text-sm">1. دوال الجولات الـ 64 المنطقية</h4>
            <p className="text-slate-400">
              تعتمد كل جولة من جولات الخوارزمية الـ 64 على دوال جبر بول غير خطية لخلط البتات:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-emerald-400 space-y-1">
              <div>{"Ch(e,f,g) = (e ∧ f) ⊕ (¬e ∧ g)"}</div>
              <div>{"Maj(a,b,c) = (a ∧ b) ⊕ (a ∧ c) ⊕ (b ∧ c)"}</div>
              <div>{"Σ0(a) = ROTR² ⊕ ROTR¹³ ⊕ ROTR²²"}</div>
              <div>{"Σ1(e) = ROTR⁶ ⊕ ROTR¹¹ ⊕ ROTR²⁵"}</div>
            </div>
          </div>

          {/* Card 2: Avalanche Criterion */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">2. معيار الانهيار الحاسم (SAC)</h4>
            <p className="text-slate-400">
              ينص معيار الانهيار الصارم على أنه عند تغيير بت واحد فقط في المدخل، يجب أن ينقلب كل بت من بتات المخرج باحتمال دقيق مقداره:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-amber-300 text-center">
              {"P(Flip) = 0.5 (50%)"}
            </div>
            <p className="text-slate-400">
              هذا يمنع هجمات الاستدلال الرياضي (Differential Cryptanalysis) ويجعل دالة التجزئة أحادية الاتجاه تماماً.
            </p>
          </div>

          {/* Card 3: HMAC Construction */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-cyan-400 text-sm">3. تركيبة HMAC الآمنة (RFC 2104)</h4>
            <p className="text-slate-400">
              تمنع هجمات تمديد الطول (Length Extension Attacks) عبر التجزئة المزدوجة المتداخلة:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-cyan-300">
              {"HMAC(K, m) = H((K ⊕ opad) ∥ H((K ⊕ ipad) ∥ m))"}
            </div>
            <p className="text-slate-400">
              حيث {"opad = 0x5c"} و {"ipad = 0x36"} مكررين عبر حجم الكتلة (64 بايت).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

