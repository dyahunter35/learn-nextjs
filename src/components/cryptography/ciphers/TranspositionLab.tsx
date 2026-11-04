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
    <div className="space-y-3.5">
      {/* Intro & Key setup */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة التبديل الصفّي (Row Transposition Cipher)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              شفرة تبديل مواضع (Permutation) تعيد ترتيب مواقع الحروف داخل مصفوفة مستطيلة وقراءتها عمودياً وفق ترتيب المفتاح.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
            <span>كتابة صفوف ← قراءة أعمدة بتبديل المفتاح</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-6">
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المفتاح الترتيبي (أرقام أو كلمة):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: 43125 أو ZEBRA"
            />
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-1.5">
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

      {/* Visual Transposition Grid & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Left: Matrix Display */}
        <div className="lg:col-span-6 bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-2">
            <h4 className="text-xs font-bold text-slate-300">
              المصفوفة المستطيلة ({encRes.numRows} صفوف × {encRes.numCols} أعمدة):
            </h4>
            <span className="text-[10px] text-slate-400 font-mono">
              ترتيب القراءة: {colOrder.map((idx) => `#${idx + 1}`).join(" ← ")}
            </span>
          </div>

          <div className="overflow-x-auto crypto-scroll w-full pb-1">
            <table className="mx-auto border border-[#1f2d48] rounded-xl overflow-hidden bg-[#090d16] text-center font-mono text-xs">
              <thead>
                <tr className="bg-[#141e33] border-b border-[#1f2d48]">
                  <th className="p-2 text-[10px] text-slate-500">المفتاح</th>
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
                <tr className="bg-[#0b1220] border-b border-[#1f2d48] text-[10px] text-slate-500">
                  <th className="p-1">الرتبة</th>
                  {colOrder.map((orderIdx, col) => (
                    <th key={col} className="p-1">
                      #{colOrder.indexOf(col) + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentGrid.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-[#1f2d48]/40 hover:bg-slate-800/40">
                    <td className="p-1.5 text-[10px] text-slate-500 border-l border-[#1f2d48]">{rIdx + 1}</td>
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-2 font-bold transition-colors ${
                          activeColIndex === cIdx
                            ? "bg-amber-500/20 text-amber-300"
                            : "text-slate-200"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Inputs & Outputs */}
        <div className="lg:col-span-6 space-y-3">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-300">
                {mode === "encrypt" ? "النص الأصلي (Plaintext):" : "النص المشفر (Ciphertext):"}
              </label>
              <div className="flex gap-1 bg-[#090d16] p-0.5 rounded-lg border border-[#1f2d48]">
                <button
                  type="button"
                  onClick={() => setMode("encrypt")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    mode === "encrypt" ? "bg-sky-500 text-slate-900 shadow" : "text-slate-400"
                  }`}
                >
                  تشفير
                </button>
                <button
                  type="button"
                  onClick={() => setMode("decrypt")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    mode === "decrypt" ? "bg-emerald-500 text-slate-900 shadow" : "text-slate-400"
                  }`}
                >
                  فك تشفير
                </button>
              </div>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              rows={2}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
            />
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-emerald-400">النتيجة:</label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ النتيجة
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 tracking-widest break-words min-h-[46px]">
              {result || "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
