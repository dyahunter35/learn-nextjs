"use client";

import { useState } from "react";
import { generateOtpKey, otpProcess } from "@/lib/crypto-engine";

export function OtpLab() {
  const [text, setText] = useState("TOP SECRET");
  const [key, setKey] = useState("XMCKLNWQAZ");

  const { output, steps } = otpProcess(text, key);

  const handleGenerateKey = () => {
    setKey(generateOtpKey(text.length || 10));
  };

  const isMatchingLength = key.length >= text.length;

  return (
    <div className="space-y-3.5">
      {/* Intro & Unconditional Security banner */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 className="text-base font-bold text-sky-400">لوحة المرة الواحدة / شفرة فيرنام (One-Time Pad / Vernam)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              النظام التشفيري الوحيد المثبت رياضياً أنه <strong>غير قابل للكسر مطلقاً (Unconditionally Secure)</strong> طبقاً لنظرية شانون.
            </p>
          </div>
          <div className="bg-[#090d16] border border-emerald-500/30 px-3 py-1.5 rounded-lg text-left font-mono">
            <span className="text-[10px] text-emerald-400 block font-semibold">أمان شانون التام (Perfect Secrecy):</span>
            <span className="text-xs text-emerald-300">Cᵢ = Pᵢ ⊕ Kᵢ (Bitwise XOR)</span>
          </div>
        </div>

        {/* Action: Generate truly random key */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-7">
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المفتاح العشوائي (One-Time Pad Key):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs font-mono font-bold text-amber-400 tracking-widest focus:border-amber-400 focus:outline-none uppercase"
            />
          </div>

          <div className="md:col-span-5 flex items-center justify-end">
            <button
              type="button"
              onClick={handleGenerateKey}
              className="px-3 py-2 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-1.5"
            >
              <span>🎲</span>
              توليد مفتاح عشوائي بطول النص
            </button>
          </div>
        </div>

        {!isMatchingLength && (
          <div className="mt-2 text-xs text-rose-400 font-semibold bg-rose-950/40 border border-rose-800/80 p-2 rounded-lg">
            تنبيه أمني: طول المفتاح ({key.length}) أقل من طول النص ({text.length}). يجب أن يكون المفتاح مساوياً لطول الرسالة لمنع التكرار!
          </div>
        )}
      </div>

      {/* Text & Bitwise Inspector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
          <label className="text-xs font-bold text-slate-300 block mb-1.5">النص الأصلي (Plaintext):</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-emerald-400">الناتج بعد عملية XOR:</label>
            <span className="text-[11px] text-slate-500 font-mono">{steps.length} بايت</span>
          </div>
          <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-widest min-h-[46px]">
            {output || "—"}
          </div>
        </div>
      </div>

      {/* Bitwise XOR Simulator Table */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
        <h4 className="text-xs font-bold text-slate-300 mb-2">
          محاكي عمليات XOR على مستوى البتات (Bitwise XOR Engine):
        </h4>
        <div className="overflow-x-auto crypto-scroll pb-1">
          <table className="w-full text-center font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1f2d48] text-slate-400 bg-[#090d16]">
                <th className="p-2">#</th>
                <th className="p-2">حرف النص</th>
                <th className="p-2">ثنائي النص (P)</th>
                <th className="p-2 text-slate-600">⊕</th>
                <th className="p-2">حرف المفتاح</th>
                <th className="p-2">ثنائي المفتاح (K)</th>
                <th className="p-2 text-slate-600">=</th>
                <th className="p-2 text-emerald-400">ثنائي الناتج (C)</th>
                <th className="p-2 text-emerald-400">الرمز</th>
              </tr>
            </thead>
            <tbody>
              {steps.slice(0, 10).map((st, idx) => (
                <tr key={idx} className="border-b border-[#1f2d48]/40 hover:bg-[#141e33]/50">
                  <td className="p-1.5 text-slate-500">{idx + 1}</td>
                  <td className="p-1.5 font-bold text-sky-300">{st.char}</td>
                  <td className="p-1.5 text-slate-400">{st.charBin}</td>
                  <td className="p-1.5 text-amber-500 font-bold">⊕</td>
                  <td className="p-1.5 font-bold text-amber-300">{st.keyChar}</td>
                  <td className="p-1.5 text-slate-400">{st.keyBin}</td>
                  <td className="p-1.5 text-emerald-500 font-bold">=</td>
                  <td className="p-1.5 font-bold text-emerald-300 bg-emerald-950/20">{st.xorBin}</td>
                  <td className="p-1.5 font-bold text-emerald-400">{st.resultChar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
