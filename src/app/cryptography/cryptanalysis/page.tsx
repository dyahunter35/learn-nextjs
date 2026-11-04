"use client";

import { useState } from "react";
import Link from "next/link";
import {
  analyzeFrequency,
  kasiskiExamination,
  bruteForceCaesar,
  ALPHABET,
} from "@/lib/crypto-engine";

const SAMPLE_CIPHERTEXTS = {
  caesar: "KHOOR ZRUOG WKLV LV D VHFUHW PHVVDJH HQFUBSWHG ZLWK FDHVDU FLSKHU",
  vigenere: "CSASTSTVUEWKBQEWYKBNLZVXTQTFCSASTSTVUEWKBQEWYZVXTQTFCSASTSTVUEWKBQEWY",
  freq: "YMJ WZSIJW KZKKNS KTWKJNYX JLAJ WZKKNWX FSI KTWKJNYX JLAJ WZKKNWX",
};

export default function CryptanalysisPage() {
  const [activeTab, setActiveTab] = useState<"frequency" | "kasiski" | "bruteforce" | "classifier">("frequency");

  // State for Frequency Analysis
  const [freqText, setFreqText] = useState(SAMPLE_CIPHERTEXTS.freq);
  const freqAnalysis = analyzeFrequency(freqText);

  // State for Kasiski
  const [kasiskiText, setKasiskiText] = useState(SAMPLE_CIPHERTEXTS.vigenere);
  const [gramLen, setGramLen] = useState(3);
  const kasiskiRes = kasiskiExamination(kasiskiText, gramLen);

  // State for Brute Force
  const [bfText, setBfText] = useState(SAMPLE_CIPHERTEXTS.caesar);
  const bfResults = bruteForceCaesar(bfText);

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Title */}
      <div>
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/cryptography" className="hover:text-slate-200">لوحة التحكم</Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">محاكي الهجمات وتحليل الشفرات</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              محاكي الهجمات وأساليب تحليل الشفرات (Cryptanalysis)
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              أدوات رياضية وتحليلية لاختراق الشفرات: تحليل الترددات، طريقة كاسيسكي لاكتشاف طول المفتاح، محاكي القوة الغاشمة، وتصنيف الهجمات.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-400">
            <span>مستوى التهديد:</span>
            <span className="text-amber-400 font-bold">ANALYSIS MODE ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 crypto-scroll border-b border-[#1f2d48]">
        {[
          { key: "frequency", label: "تحليل الترددات (Frequency Analysis)", icon: "📊" },
          { key: "kasiski", label: "طريقة كاسيسكي (Kasiski Method)", icon: "🔍" },
          { key: "bruteforce", label: "محاكي القوة الغاشمة (Brute-Force)", icon: "⚡" },
          { key: "classifier", label: "تصنيفات الهجمات (Attacks Classifier)", icon: "🎯" },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border whitespace-nowrap ${
                isActive
                  ? "bg-amber-500/15 border-amber-400 text-amber-300 shadow-md shadow-amber-950/40"
                  : "bg-[#111827] border-[#1f2d48] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. FREQUENCY ANALYSIS TAB */}
      {activeTab === "frequency" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-amber-400">تحليل الترددات (Frequency Analysis Plotter)</h3>
                <p className="text-xs text-slate-400 mt-1">
                  اكتشفها العالم العربي <strong>أبو يوسف يعقوب بن إسحاق الكندي</strong> في القرن التاسع الميلادي (رسالة في استخراج المعمى). تقارن تكرار الحروف في النص المشفر بالتردد الطبيعي لحروف اللغة لكشف خريطة التعويض.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFreqText(SAMPLE_CIPHERTEXTS.freq)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
                >
                  تحميل نص تجريبي
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">النص المراد تحليله إحصائياً:</label>
              <textarea
                value={freqText}
                onChange={(e) => setFreqText(e.target.value)}
                rows={3}
                className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-sm text-slate-200 font-mono focus:border-amber-400 focus:outline-none uppercase"
                placeholder="أدخل النص المشفر هنا..."
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>إجمالي الحروف المحللة: <strong className="text-white font-mono">{freqAnalysis.totalLetters}</strong></span>
                <span>الحرف الأكثر تكراراً في النص المشفر: <strong className="text-amber-400 font-mono">{freqAnalysis.sortedByFreq[0]?.letter} ({freqAnalysis.sortedByFreq[0]?.freq.toFixed(1)}%)</strong></span>
              </div>
            </div>
          </div>

          {/* Comparative Bar Chart: Ciphertext vs English Standard */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h4 className="text-xs font-semibold text-slate-300">
                مقارنة بيانية: تردد الحروف في النص المشفر (أصفر) مقابل ترددات اللغة الإنجليزية القياسية (أزرق سماوي):
              </h4>
              <div className="flex items-center gap-4 text-[11px] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400" /> النص المشفر الحالي
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-sky-500/50" /> تردد اللغة الإنجليزية القياسي
                </span>
              </div>
            </div>

            <div className="overflow-x-auto crypto-scroll pb-2">
              <div className="grid grid-flow-col auto-cols-[36px] gap-2 items-end h-64 p-3 bg-[#090d16] border border-[#1f2d48] rounded-xl min-w-[950px]">
                {ALPHABET.split("").map((letter) => {
                  const data = freqAnalysis.sortedByFreq.find((x) => x.letter === letter) || {
                    freq: 0,
                    count: 0,
                    englishFreq: 0,
                  };
                  const maxPercent = 15; // scale ceiling
                  const cipherHeight = Math.min(100, (data.freq / maxPercent) * 100);
                  const standardHeight = Math.min(100, (data.englishFreq / maxPercent) * 100);

                  return (
                    <div key={letter} className="flex flex-col items-center h-full justify-end group relative">
                      {/* Bars container */}
                      <div className="w-full flex items-end justify-center gap-1 h-48">
                        {/* Ciphertext bar */}
                        <div
                          style={{ height: `${cipherHeight}%` }}
                          className="w-3.5 bg-amber-400 rounded-t transition-all group-hover:brightness-125"
                          title={`${letter} في النص: ${data.freq.toFixed(1)}% (${data.count})`}
                        />
                        {/* Standard bar */}
                        <div
                          style={{ height: `${standardHeight}%` }}
                          className="w-3.5 bg-sky-500/40 border-t border-sky-400/60 rounded-t"
                          title={`${letter} في الإنجليزية: ${data.englishFreq.toFixed(1)}%`}
                        />
                      </div>
                      {/* Letter Label */}
                      <span className="text-xs font-mono font-bold text-slate-300 mt-2">{letter}</span>
                      <span className="text-[9px] font-mono text-slate-500">{data.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. KASISKI METHOD TAB */}
      {activeTab === "kasiski" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-amber-400">طريقة كاسيسكي (Kasiski Examination)</h3>
                <p className="text-xs text-slate-400 mt-1">
                  طريقة ابتكرها فريدريش كاسيسكي عام 1863 لكسر شفرة فيجينير. تبحث عن السلاسل المتكررة في النص المشفر، وتحسب المسافات بينها، ثم تجد القاسم المشترك الأكبر (GCD) لاستنتاج <strong>طول الكلمة المفتاحية</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setKasiskiText(SAMPLE_CIPHERTEXTS.vigenere)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
              >
                تحميل نص مشفر متكرر
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-3">
                <label className="text-xs font-semibold text-slate-300 block mb-1">النص المشفر:</label>
                <textarea
                  value={kasiskiText}
                  onChange={(e) => setKasiskiText(e.target.value)}
                  rows={3}
                  className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-xs text-slate-200 font-mono tracking-wider focus:border-amber-400 focus:outline-none uppercase"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">طول المقطع (N-gram length):</label>
                <select
                  value={gramLen}
                  onChange={(e) => setGramLen(Number(e.target.value))}
                  className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-xs text-amber-400 font-mono font-bold focus:border-amber-400 focus:outline-none"
                >
                  <option value={3}>3 حروف (Trigrams)</option>
                  <option value={4}>4 حروف (Tetragrams)</option>
                  <option value={5}>5 حروف (Pentagrams)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results: Suggested key lengths & Repeated sequences */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left: Probable Key lengths */}
            <div className="md:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-4">
              <h4 className="text-xs font-semibold text-slate-300">أطوال المفاتيح الأكثر احتمالاً (Suggested Key Lengths):</h4>
              {kasiskiRes.suggestedKeyLengths.length > 0 ? (
                <div className="space-y-3">
                  {kasiskiRes.suggestedKeyLengths.map((len, idx) => (
                    <div
                      key={len}
                      className="p-3 bg-[#090d16] border border-amber-500/30 rounded-xl flex items-center justify-between font-mono"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 text-xs flex items-center justify-center font-bold">
                          #{idx + 1}
                        </span>
                        <span className="text-sm font-bold text-white">طول المفتاح: {len} أحرف</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-semibold">تكرار العوامل: {kasiskiRes.factorFrequencies.find(f => f.factor === len)?.count || 0}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-[#090d16] border border-[#1f2d48] rounded-xl text-xs text-slate-500 text-center">
                  لم يتم العثور على مقاطع متكررة بطول {gramLen}. جرب إدخال نص مشفر أطول أو تقليل طول المقطع.
                </div>
              )}
            </div>

            {/* Right: Detected Repeated grams table */}
            <div className="md:col-span-7 bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
              <h4 className="text-xs font-semibold text-slate-300 mb-3">السلاسل المتكررة والمسافات الفاصلة:</h4>
              <div className="overflow-x-auto crypto-scroll max-h-[280px]">
                <table className="w-full text-right text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#1f2d48] text-slate-400 text-[11px]">
                      <th className="py-2 px-3">المقطع المتكرر</th>
                      <th className="py-2 px-3">مواقع الظهور</th>
                      <th className="py-2 px-3 text-amber-400">المسافات الفاصلة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kasiskiRes.repeatedGrams.map((item, idx) => (
                      <tr key={idx} className="border-b border-[#1f2d48]/40 hover:bg-[#141e33]">
                        <td className="py-2 px-3 font-bold text-amber-400">{item.gram}</td>
                        <td className="py-2 px-3 text-slate-300">{item.positions.join(", ")}</td>
                        <td className="py-2 px-3 font-bold text-emerald-400">{item.distances.join(", ")}</td>
                      </tr>
                    ))}
                    {kasiskiRes.repeatedGrams.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-4 text-center text-slate-500">
                          لا توجد مقاطع متكررة بعد.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BRUTE-FORCE CLOCK TAB */}
      {activeTab === "bruteforce" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-400 mb-1">محاكي هجوم القوة الغاشمة (Brute-Force Attack Engine)</h3>
            <p className="text-xs text-slate-400">
              يقوم بتجربة كافة المفاتيح الممكنة في فضاء البحث دفعة واحدة، ويقيّم جودة كل مفتاح باستخدام نموذج لغوي إحصائي.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input & Instant Cracker */}
            <div className="lg:col-span-7 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">النص المشفر المراد كسره:</label>
                <button
                  type="button"
                  onClick={() => setBfText(SAMPLE_CIPHERTEXTS.caesar)}
                  className="text-xs text-sky-400 hover:underline"
                >
                  نص قيصر تجريبي
                </button>
              </div>
              <textarea
                value={bfText}
                onChange={(e) => setBfText(e.target.value)}
                rows={2}
                className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-xs text-slate-200 font-mono focus:border-amber-400 focus:outline-none uppercase"
              />

              <h4 className="text-xs font-semibold text-slate-300 pt-2 border-t border-[#1f2d48]">
                نتائج التجربة لكافة الإزاحات الـ26 مرتبة حسب أعلى احتمال:
              </h4>
              <div className="overflow-y-auto max-h-[320px] crypto-scroll space-y-2">
                {bfResults.map((cand, idx) => (
                  <div
                    key={cand.shift}
                    className={`p-3 rounded-lg border font-mono text-xs flex items-center justify-between ${
                      idx === 0
                        ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-200 shadow-md"
                        : "bg-[#090d16] border-[#1f2d48] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-amber-400 min-w-[50px]">k = {cand.shift}</span>
                      <span className="break-all">{cand.decrypted}</span>
                    </div>
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-900">
                        الأعلى مطابقة ★
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Keyspace Comparison Clock */}
            <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-4">
              <h4 className="text-xs font-semibold text-slate-300">مقياس زمن كسر الشفرات بالقوة الغاشمة:</h4>
              <p className="text-[11px] text-slate-400">
                بافتراض جهاز فائق السرعة يختبر مليار مفتاح في الثانية (10⁹ attempts/sec):
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#090d16] border border-emerald-500/30 rounded-xl">
                  <div className="flex justify-between items-center text-emerald-400 font-bold">
                    <span>شفرة قيصر (Caesar)</span>
                    <span>26 مفتاحاً</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">الزمن المستغرق: 0.000000026 ثانية (فوري!)</p>
                </div>

                <div className="p-3 bg-[#090d16] border border-emerald-500/30 rounded-xl">
                  <div className="flex justify-between items-center text-emerald-400 font-bold">
                    <span>شفرة أفين (Affine)</span>
                    <span>312 مفتاحاً</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">الزمن المستغرق: أقل من 1 ميكروثانية</p>
                </div>

                <div className="p-3 bg-[#090d16] border border-amber-500/30 rounded-xl">
                  <div className="flex justify-between items-center text-amber-400 font-bold">
                    <span>معيار DES القديم (56-bit)</span>
                    <span>7.2 × 10¹⁶ مفتاحاً</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">الزمن المستغرق: حوالي 2.2 سنة بجهاز واحد (ساعات بحاسوب عملاق)</p>
                </div>

                <div className="p-3 bg-[#090d16] border border-sky-500/30 rounded-xl">
                  <div className="flex justify-between items-center text-sky-400 font-bold">
                    <span>التعويض أحادي الأبجدية</span>
                    <span>26! ≈ 4.03 × 10²⁶</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">الزمن المستغرق: 12.7 تريليون سنة! (لكنه يُكسر بالترددات)</p>
                </div>

                <div className="p-3 bg-[#090d16] border border-indigo-500/30 rounded-xl">
                  <div className="flex justify-between items-center text-indigo-400 font-bold">
                    <span>معيار AES-128 الحديث</span>
                    <span>3.4 × 10³⁸ مفتاحاً</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">الزمن المستغرق: مليارات أضعاف عمر الكون الحالي!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. ATTACKS CLASSIFIER TAB */}
      {activeTab === "classifier" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-400 mb-1">تصنيفات الهجمات التشفيرية (Cryptanalytic Attack Models)</h3>
            <p className="text-xs text-slate-400">
              تُصنف الهجمات الأكاديمية والعسكرية حسب كمية ونوعية المعلومات المتوفرة للمحلل عند بدء الهجوم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Ciphertext-Only */}
            <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-bold">النموذج 1</span>
                <span className="text-xs text-slate-500 font-mono">الأصعب للمهاجم</span>
              </div>
              <h4 className="text-base font-bold text-white">هجوم النص المشفر فقط (Ciphertext-Only Attack)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                المهاجم لا يمتلك سوى برقية واحدة أو عدة برقيات مشفرة دون معرفة أي حرف من النص الأصلي.
              </p>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg text-xs space-y-1">
                <div className="text-slate-400"><strong>الأسلحة المستخدمة:</strong> تحليل الترددات، القوة الغاشمة، إحصائيات اللغة.</div>
                <div className="text-slate-400"><strong>مثال تاريخي:</strong> كسر برقيات قيصر والشفرات الأحادية البسيطة.</div>
              </div>
            </div>

            {/* 2. Known-Plaintext */}
            <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-sky-950/80 text-sky-400 border border-sky-800 font-mono text-xs font-bold">النموذج 2</span>
                <span className="text-xs text-sky-400 font-mono">متوسط الصعوبة</span>
              </div>
              <h4 className="text-base font-bold text-white">هجوم النص الأصلي المعروف (Known-Plaintext Attack)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                يمتلك المهاجم عينات متطابقة من نصوص أصلية ونصوصها المشفرة المقابلة (مثل ترويسات البرقيات العسكرية الثابتة: "إلى القيادة العامة").
              </p>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg text-xs space-y-1">
                <div className="text-slate-400"><strong>الأسلحة المستخدمة:</strong> إيجاد المعكوس المصفوفي (كما في كسر شفرة هيل) أو تقاطعات Cribs.</div>
                <div className="text-slate-400"><strong>مثال تاريخي:</strong> استغلال عبارات تقارير الطقس اليومية لكسر إنيجما في بليتشلي بارك.</div>
              </div>
            </div>

            {/* 3. Chosen-Plaintext */}
            <div className="bg-[#111827] border border-amber-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-amber-950/80 text-amber-400 border border-amber-800 font-mono text-xs font-bold">النموذج 3</span>
                <span className="text-xs text-amber-400 font-mono">هجوم استخباري تكتيكي</span>
              </div>
              <h4 className="text-base font-bold text-amber-300">هجوم النص الأصلي المختار (Chosen-Plaintext Attack)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                يستطيع المهاجم إجبار أو استدراج الطرف الآخر لتشفير نص معين يختاره المهاجم بنفسه ومراقبة النتيجة المشفرة الصادرة عنه.
              </p>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg text-xs space-y-1">
                <div className="text-slate-400"><strong>الأسلحة المستخدمة:</strong> حقن طُعم استخباري (Bait Injection) لتأكيد المعاني الرمزية.</div>
                <div className="text-slate-400"><strong>مثال تاريخي:</strong> <Link href="/cryptography/history" className="text-amber-400 underline font-bold">خدعة معركة ميدواي 1942</Link> (إرسال رسالة نقص مياه بميدواي لإجبار اليابانيين على تشفيرها).</div>
              </div>
            </div>

            {/* 4. Chosen-Ciphertext */}
            <div className="bg-[#111827] border border-rose-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-rose-950/80 text-rose-400 border border-rose-800 font-mono text-xs font-bold">النموذج 4</span>
                <span className="text-xs text-rose-400 font-mono">الأقوى تأثيراً</span>
              </div>
              <h4 className="text-base font-bold text-rose-300">هجوم النص المشفر المختار (Chosen-Ciphertext Attack)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                يمتلك المهاجم إمكانية الوصول إلى جهاز فك التشفير (Decryption Oracle)، حيث يرسل نصوصاً مشفرة معدلة ويحصل على النصوص المفكوكة المقابلة لاستنتاج المفتاح السري.
              </p>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg text-xs space-y-1">
                <div className="text-slate-400"><strong>الأسلحة المستخدمة:</strong> هجمات Bleichenbacher على RSA، وهجمات Padding Oracle.</div>
                <div className="text-slate-400"><strong>الحماية الحديثة:</strong> خوارزميات التشفير ذات التوثيق مثل AES-GCM.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
