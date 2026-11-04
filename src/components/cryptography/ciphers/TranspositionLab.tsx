"use client";

import { useState } from "react";
import {
  rowTranspositionEncrypt,
  rowTranspositionDecrypt,
} from "@/lib/crypto-engine";

export function TranspositionLab() {
  const [text, setText] = useState("ATTACK AT DAWN ON TUESDAY");
  const [key, setKey] = useState("43125");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [activeColIndex, setActiveColIndex] = useState<number | null>(null);

  const encRes = rowTranspositionEncrypt(text, key);
  const decRes = rowTranspositionDecrypt(text, key);

  const currentGrid = mode === "encrypt" ? encRes.grid : decRes.grid;
  const colOrder = encRes.colOrder;
  const result = mode === "encrypt" ? encRes.output : decRes.output;

  return (
    <div className="space-y-6">
      {/* Intro & Key setup */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة التبديل الصفّي (Row Transposition Cipher)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة تبديل مواضع (Permutation) تعيد ترتيب مواقع الحروف داخل مصفوفة مستطيلة دون تغيير هويتها، وقراءتها عمودياً وفق ترتيب المفتاح.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-xs font-mono text-emerald-400">
            <span>كتابة صفوف ← قراءة أعمدة بتبديل المفتاح</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المفتاح الترتيبي (أرقام أو كلمة):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: 43125 أو ZEBRA"
            />
          </div>

          <div className="flex items-center gap-2 justify-end">
            <span className="text-xs text-slate-400">مفاتيح جاهزة:</span>
            {["43125", "3142", "ZEBRA", "GERMAN"].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKey(k)}
                className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 font-mono"
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Transposition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Matrix Display */}
        <div className="lg:col-span-6 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3">
            <h4 className="text-xs font-semibold text-slate-300">
              المصفوفة المستطيلة ({encRes.numRows} صفوف × {encRes.numCols} أعمدة):
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">
              ترتيب القراءة: {colOrder.map((idx) => `#${idx + 1}`).join(" ← ")}
            </span>
          </div>

          <div className="overflow-x-auto crypto-scroll w-full pb-2">
            <table className="mx-auto border border-[#1f2d48] rounded-xl overflow-hidden bg-[#090d16] text-center font-mono text-sm">
              <thead>
                {/* Key Row */}
                <tr className="bg-[#141e33] border-b border-[#1f2d48]">
                  <th className="p-2 text-[10px] text-slate-500">مفتاح</th>
                  {key.split("").map((kChar, idx) => (
                    <th
                      key={idx}
                      onMouseEnter={() => setActiveColIndex(idx)}
                      onMouseLeave={() => setActiveColIndex(null)}
                      className={`p-2 font-bold cursor-pointer transition-colors ${
                        activeColIndex === idx ? "bg-amber-500 text-slate-950 font-extrabold" : "text-sky-300"
                      }`}
                    >
                      {kChar}
                    </th>
                  ))}
                </tr>
                {/* Reading order index */}
                <tr className="bg-[#0b101d] border-b border-[#1f2d48] text-[10px]">
                  <th className="p-1 text-slate-500">أولوية</th>
                  {colOrder.map((colIdx, order) => (
                    <th
                      key={order}
                      className="p-1 text-emerald-400 font-semibold"
                    >
                      دورة {colOrder.indexOf(order) + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentGrid.map((row, r) => (
                  <tr key={r} className="border-b border-[#1f2d48]/40">
                    <td className="p-2 text-[10px] text-slate-500 bg-[#141e33]">صف {r + 1}</td>
                    {row.map((cell, c) => {
                      const isColActive = activeColIndex === c;
                      return (
                        <td
                          key={c}
                          onMouseEnter={() => setActiveColIndex(c)}
                          onMouseLeave={() => setActiveColIndex(null)}
                          className={`p-2.5 font-bold cursor-pointer transition-colors ${
                            isColActive
                              ? "bg-amber-500/30 text-amber-300"
                              : "text-slate-200 hover:bg-[#1f2d48]/50"
                          }`}
                        >
                          {cell || "·"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-[11px] text-slate-400 text-center">
            تُكتب الأحرف أفقياً صفاً فصفاً، ثم تُقرأ عمودياً حسب الترتيب الأبجدي أو العددي للمفتاح.
          </div>
        </div>

        {/* Right: Inputs & Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">
                {mode === "encrypt" ? "النص الأصلي (Plaintext):" : "النص المشفر (Ciphertext):"}
              </label>
              <div className="flex gap-1 bg-[#090d16] p-1 rounded-lg border border-[#1f2d48]">
                <button
                  type="button"
                  onClick={() => setMode("encrypt")}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    mode === "encrypt" ? "bg-sky-500 text-slate-900 font-bold" : "text-slate-400"
                  }`}
                >
                  تشفير
                </button>
                <button
                  type="button"
                  onClick={() => setMode("decrypt")}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    mode === "decrypt" ? "bg-emerald-500 text-slate-900 font-bold" : "text-slate-400"
                  }`}
                >
                  فك تشفير
                </button>
              </div>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-emerald-400">
                {mode === "encrypt" ? "النص المشفر الناتج (Ciphertext):" : "النص الأصلي المفكوك:"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-widest min-h-[60px]">
              {result || "—"}
            </div>
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">خاصية عدم تغيير التردد (Permutation vs Substitution):</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              لاحظ أن توزيع تردد الحروف في النص الناتج يتطابق 100% مع النص الأصلي لأن الحروف لم تتغير وإنما تغيرت أماكنها فقط، مما يسهل على المحلل كشف أنها شفرة تبديل ومحاولة ترتيب الأعمدة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
