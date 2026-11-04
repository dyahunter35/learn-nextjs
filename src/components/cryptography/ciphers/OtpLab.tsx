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
    <div className="space-y-6">
      {/* Intro & Unconditional Security banner */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">لوحة المرة الواحدة / شفرة فيرنام (One-Time Pad / Vernam)</h3>
            <p className="text-xs text-slate-400 mt-1">
              النظام التشفيري الوحيد المثبت رياضياً أنه <strong>غير قابل للكسر مطلقاً (Unconditionally Secure)</strong> طبقاً لنظرية شانون، بشرط أن يكون المفتاح عشوائياً تماماً، بطول الرسالة، ولا يُعاد استخدامه أبداً.
            </p>
          </div>
          <div className="bg-[#090d16] border border-emerald-500/30 px-3 py-2 rounded-xl text-left font-mono">
            <span className="text-[10px] text-emerald-400 block font-semibold">حماية كاملة (Shannon Perfect Secrecy):</span>
            <span className="text-xs text-emerald-300">Cᵢ = Pᵢ ⊕ Kᵢ (Bitwise XOR)</span>
          </div>
        </div>

        {/* Action: Generate truly random key */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المفتاح العشوائي (One-Time Pad Key):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm font-mono font-bold text-amber-400 tracking-widest focus:border-amber-400 focus:outline-none uppercase"
            />
          </div>

          <div className="flex items-center gap-3 justify-end">
            <button
              type="button"
              onClick={handleGenerateKey}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
            >
              <span>🎲</span>
              توليد مفتاح عشوائي حقيقي بطول النص
            </button>
          </div>
        </div>

        {!isMatchingLength && (
          <div className="mt-3 text-xs text-rose-400 font-semibold bg-rose-950/40 border border-rose-800/80 p-2 rounded-lg">
            تنبيه أمني: طول المفتاح ({key.length}) أقل من طول النص ({text.length}). من شروط لوحة المرة الواحدة أن يكون طول المفتاح مساوياً لطول الرسالة على الأقل لمنع التكرار!
          </div>
        )}
      </div>

      {/* Text & Bitwise Inspector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
          <label className="text-xs font-semibold text-slate-300 block mb-2">النص الأصلي (Plaintext):</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-emerald-400">النص الناتج بعد عملية XOR:</label>
            <span className="text-[11px] text-slate-500 font-mono">{steps.length} بايت</span>
          </div>
          <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-widest min-h-[50px]">
            {output || "—"}
          </div>
        </div>
      </div>

      {/* Bitwise XOR Simulator Table */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <h4 className="text-xs font-semibold text-slate-300 mb-2">
          محاكي عمليات XOR على مستوى البتات (Bitwise XOR Engine):
        </h4>
        <p className="text-[11px] text-slate-400 mb-4">
          قاعدة XOR المنطقية: 0 ⊕ 0 = 0 · 0 ⊕ 1 = 1 · 1 ⊕ 0 = 1 · 1 ⊕ 1 = 0 (النتيجة تكون 1 إذا اختلف البتان فقط).
        </p>

        <div className="overflow-x-auto crypto-scroll pb-2">
          <table className="w-full text-right text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1f2d48] text-slate-400 text-[11px]">
                <th className="py-2 px-3">الحرف الأصلي</th>
                <th className="py-2 px-3">بايت الرسالة (8-bit)</th>
                <th className="py-2 px-3">حرف المفتاح</th>
                <th className="py-2 px-3">بايت المفتاح (8-bit)</th>
                <th className="py-2 px-3 text-amber-400">عملية XOR (البتات)</th>
                <th className="py-2 px-3 text-emerald-400">الناتج المشفر</th>
              </tr>
            </thead>
            <tbody>
              {steps.slice(0, 10).map((st, i) => (
                <tr key={i} className="border-b border-[#1f2d48]/40 hover:bg-[#141e33]">
                  <td className="py-2 px-3 font-bold text-sky-400">{st.char}</td>
                  <td className="py-2 px-3 text-slate-300">{st.charBin}</td>
                  <td className="py-2 px-3 font-bold text-amber-400">{st.keyChar}</td>
                  <td className="py-2 px-3 text-amber-200">{st.keyBin}</td>
                  <td className="py-2 px-3 font-bold text-amber-400 tracking-wider">{st.xorBin}</td>
                  <td className="py-2 px-3 font-bold text-emerald-400 bg-emerald-950/30">{st.resultChar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

