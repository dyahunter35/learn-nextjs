"use client";

import { useState } from "react";
import Link from "next/link";
import {
  lzwCompress,
  lzwDecompress,
  rleCompress,
  rleDecompress,
  calculateCompressionRatio,
  LZWCompressResult,
} from "@/lib/compression-engine";
import { useLanguage } from "@/components/LanguageProvider";

export default function CompressionLabPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [activeTab, setActiveTab] = useState<"lzw" | "rle">("lzw");

  // LZW State
  const [lzwInput, setLzwInput] = useState<string>("TOBEORNOTTOBEORTOBEORNOT");
  const [lzwResult, setLzwResult] = useState<LZWCompressResult>(() =>
    lzwCompress("TOBEORNOTTOBEORTOBEORNOT")
  );
  const [decompressedText, setDecompressedText] = useState<string>(() =>
    lzwDecompress(lzwCompress("TOBEORNOTTOBEORTOBEORNOT").codes)
  );

  // RLE State
  const [rleInput, setRleInput] = useState<string>("WWWWWWAAAAABBBCCDDDDD");
  const [rleResult, setRleResult] = useState(() => rleCompress("WWWWWWAAAAABBBCCDDDDD"));

  const handleLzwCompress = (text: string) => {
    setLzwInput(text);
    const res = lzwCompress(text);
    setLzwResult(res);
    try {
      setDecompressedText(lzwDecompress(res.codes));
    } catch {
      setDecompressedText("خطأ في فك الضغط");
    }
  };

  const handleRleCompress = (text: string) => {
    setRleInput(text);
    setRleResult(rleCompress(text));
  };

  const originalBits = lzwInput.length * 8;
  const lzwRatio = calculateCompressionRatio(originalBits, lzwResult.compressedBits);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen text-slate-100 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/algorithms/" className="hover:text-white transition-colors">{en ? "Algorithms" : "المكتبة"}</Link>
        <span>/</span>
        <span className="text-cyan-400 font-bold">{en ? "Data Compression" : "ضغط البيانات والترميز المتقدم"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🗜️</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Advanced Data Compression Lab" : "معمل ضغط البيانات وخوارزميات الترميز"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "Discover dictionary-based compression (LZW) used in GIF and ZIP formats, alongside Run-Length Encoding (RLE) and entropy calculations."
              : "اكتشف خوارزمية LZW المعتمدة على بناء القاموس التكيفي والمستخدمة في ملفات GIF وZIP، إلى جانب ترميز طول التشغيل RLE ومؤشرات كفاءة تقليص الحجم."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex rounded-xl bg-slate-900 border border-slate-800 p-1 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("lzw")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "lzw"
                ? "bg-cyan-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📚 خوارزمية LZW
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rle")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "rle"
                ? "bg-cyan-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📏 ترميز RLE
          </button>
        </div>
      </div>

      {/* TAB 1: LZW COMPRESSION */}
      {activeTab === "lzw" && (
        <div className="space-y-6">
          {/* Input & Control Card */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="text-xs font-bold text-slate-300">
                النص المراد ضغطه (جرب العبارات المتكررة لملاحظة قوة القاموس):
              </label>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-mono">أمثلة:</span>
                <button
                  type="button"
                  onClick={() => handleLzwCompress("TOBEORNOTTOBEORTOBEORNOT")}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px]"
                >
                  TOBEORNOT...
                </button>
                <button
                  type="button"
                  onClick={() => handleLzwCompress("BABAABAAA")}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px]"
                >
                  BABAABAAA
                </button>
                <button
                  type="button"
                  onClick={() => handleLzwCompress("COMPUTER_SCIENCE_ALGORITHMS_COMPUTER")}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px]"
                >
                  COMPUTER_SCIENCE...
                </button>
              </div>
            </div>

            <textarea
              rows={2}
              value={lzwInput}
              onChange={(e) => handleLzwCompress(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-cyan-300 font-mono focus:outline-none focus:border-cyan-500"
              placeholder="اكتب النص هنا..."
            />

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">الحجم الأصلي</span>
                <span className="text-base font-bold text-slate-200">{originalBits} بت</span>
                <span className="text-[10px] text-slate-500 block">({lzwInput.length} بايت)</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">الحجم بعد LZW</span>
                <span className="text-base font-bold text-cyan-400">{lzwResult.compressedBits} بت</span>
                <span className="text-[10px] text-slate-500 block">({lzwResult.codes.length} رمز)</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">نسبة توفير المساحة</span>
                <span className={`text-base font-black ${lzwRatio.spaceSavingsPercent > 0 ? "text-emerald-400" : "text-amber-400"}`}>
                  {lzwRatio.spaceSavingsPercent}%
                </span>
                <span className="text-[10px] text-slate-500 block">Savings</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">حجم القاموس التكيفي</span>
                <span className="text-base font-bold text-violet-400">{lzwResult.dictionarySize}</span>
                <span className="text-[10px] text-slate-500 block">مدخلاً</span>
              </div>
            </div>
          </div>

          {/* Compressed Codes & Verified Decompression */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                أكواد الضغط الناتجة (Emitted LZW Codes):
              </h3>
              <div className="flex flex-wrap gap-1.5 font-mono max-h-36 overflow-y-auto p-2 bg-slate-950 rounded-xl border border-slate-800">
                {lzwResult.codes.map((code, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded bg-cyan-950/70 border border-cyan-800 text-cyan-300 text-xs font-bold"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                التحقق من فك الضغط (Verified Decompression):
              </h3>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 max-h-36 overflow-y-auto break-all">
                {decompressedText}
              </div>
              <p className="text-[11px] text-slate-400">
                ✓ تمت استعادة النص الأصلي بدقة 100% دون إرسال القاموس مع الرسالة!
              </p>
            </div>
          </div>

          {/* Step-by-Step Dictionary Construction Table */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white">
              جدول بناء القاموس خطوة بخطوة (Dictionary Step Trace):
            </h3>
            <div className="overflow-x-auto max-h-80 overflow-y-auto">
              <table className="w-full text-right text-xs font-mono">
                <thead className="bg-slate-950 text-slate-400 sticky top-0 border-b border-slate-800">
                  <tr>
                    <th className="p-2.5">الخطوة</th>
                    <th className="p-2.5">الحرف الحالي (c)</th>
                    <th className="p-2.5">التتابع في القاموس (w)</th>
                    <th className="p-2.5">إخراج الكود</th>
                    <th className="p-2.5">إضافة للقاموس (w + c)</th>
                    <th className="p-2.5">الكود الجديد</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {lzwResult.history.map((row) => (
                    <tr key={row.step} className="hover:bg-slate-800/40">
                      <td className="p-2.5 text-slate-500">#{row.step}</td>
                      <td className="p-2.5 text-cyan-400 font-bold">{row.char}</td>
                      <td className="p-2.5">{row.w}</td>
                      <td className="p-2.5 text-emerald-400 font-bold">{row.emittedCode}</td>
                      <td className="p-2.5 text-amber-300">{row.newEntry ?? "—"}</td>
                      <td className="p-2.5 text-violet-400 font-bold">{row.newCode ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RLE COMPRESSION */}
      {activeTab === "rle" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <label className="text-xs font-bold text-slate-300 block">
              نص يحتوي على تكرارات متتالية لتجربة Run-Length Encoding:
            </label>
            <input
              type="text"
              value={rleInput}
              onChange={(e) => handleRleCompress(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-cyan-300 font-mono focus:outline-none"
            />

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 block font-mono">النص المشفر بـ RLE:</span>
              <div className="text-xl font-black text-emerald-400 font-mono tracking-wider break-all">
                {rleResult.encoded}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {rleResult.tokens.map((token, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-slate-800 text-xs font-mono text-center">
                  <span className="text-cyan-400 font-black text-sm block">{token.count}x</span>
                  <span className="text-slate-300 font-bold text-base">{token.char}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Theory Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 text-xs text-slate-300">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <span>📐</span>
          <span>النظرية الرياضية ومعادلة كفاءة الضغط</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-cyan-400 text-sm">ميزة LZW الاستثنائية:</h3>
            <p>
              على عكس خوارزميات الترميز الثابتة مثل هوفمان، لا تحتاج LZW لتخزين أو إرسال جدول الترددات أو شجرة الرموز؛ بل يستطيع المستقبل إعادة بناء القاموس ذاتياً أثناء القراءة المتسلسلة للأكواد.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-emerald-400 text-sm">معادلة نسبة توفير المساحة:</h3>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-center text-emerald-300">
              Savings % = (1 - Compressed / Original) × 100%
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

