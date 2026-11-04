"use client";

import { useState } from "react";
import {
  ALPHABET,
  vigenereEncrypt,
  vigenereDecrypt,
} from "@/lib/crypto-engine";

export function VigenereLab() {
  const [text, setText] = useState("MICHIGAN TECHNOLOGICAL UNIVERSITY");
  const [key, setKey] = useState("HOUGHTON");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(0);

  const { output: encOutput, steps: encSteps } = vigenereEncrypt(text, key);
  const { output: decOutput, steps: decSteps } = vigenereDecrypt(text, key);

  const output = mode === "encrypt" ? encOutput : decOutput;
  const currentStep = mode === "encrypt" ? encSteps[hoveredStepIndex ?? 0] : decSteps[hoveredStepIndex ?? 0];

  const highlightedRow = currentStep ? currentStep.keyChar.charCodeAt(0) - 65 : null;
  const highlightedCol = currentStep
    ? (mode === "encrypt" ? (currentStep as any).pVal : (currentStep as any).cVal)
    : null;

  return (
    <div className="space-y-6">
      {/* Intro and Key config */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة فيجينير (Vigenère Cipher)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة تعويض متعددة الأبجديات (Polyalphabetic) تُفشل التحليل الإحصائي البسيط عبر تكرار كلمة مفتاحية تُحدث إزاحات متغيرة.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-xs font-mono text-emerald-400">
            <span>cᵢ = (pᵢ + kᵢ) mod 26 · شبكة تابولا ريكتا (26×26)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              الكلمة المفتاحية (Keyword):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: CIPHER"
            />
          </div>

          <div className="flex items-center gap-2 justify-end">
            <span className="text-xs text-slate-400">مفاتيح شائعة:</span>
            {["LEMON", "CRYPTO", "HOUGHTON", "SECRET"].map((k) => (
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

      {/* Text Area & Steps Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            onChange={(e) => setText(e.target.value.toUpperCase())}
            rows={3}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none uppercase"
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-emerald-400">
                {mode === "encrypt" ? "النتيجة المشفرة:" : "النتيجة المفكوكة:"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-widest min-h-[75px]">
              {output || "—"}
            </div>
          </div>

          {currentStep && (
            <div className="text-[11px] text-slate-400 pt-2 border-t border-[#1f2d48] flex items-center justify-between font-mono">
              <span>تقاطع الصف [مفتاح {currentStep.keyChar}] مع العمود [نص {mode === "encrypt" ? (currentStep as any).plain : (currentStep as any).cipher}]</span>
              <span className="text-amber-400 font-bold">الحرف الناتج: {mode === "encrypt" ? (currentStep as any).cipher : (currentStep as any).plain}</span>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Step-by-Step Character Navigator */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
        <h4 className="text-xs font-semibold text-slate-300 mb-2">
          تتبع الحروف (مرر الفأرة فوق أي حرف لإضاءة تقاطعه في جدول فيجينير بالأسفل):
        </h4>
        <div className="overflow-x-auto crypto-scroll pb-2">
          <div className="flex gap-1.5 min-w-max">
            {(mode === "encrypt" ? encSteps : decSteps).slice(0, 30).map((st, idx) => {
              const isSelected = idx === hoveredStepIndex;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStepIndex(idx)}
                  className={`flex flex-col items-center p-2 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-500 shadow-lg scale-105"
                      : "bg-[#090d16] border-[#1f2d48] hover:border-slate-600"
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-mono">
                    {mode === "encrypt" ? (st as any).plain : (st as any).cipher}
                  </span>
                  <span className="text-[10px] text-sky-400 font-mono font-bold">
                    + {st.keyChar}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold mt-1">
                    {mode === "encrypt" ? (st as any).cipher : (st as any).plain}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive 26x26 Vigenère Tableau Grid */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold text-slate-300">
            شبكة فيجينير الكاملة (Vigenère Square Grid 26×26):
          </h4>
          <span className="text-[11px] text-slate-500 font-mono">
            {highlightedRow !== null && highlightedCol !== null
              ? `صف: ${ALPHABET[highlightedRow]} · عمود: ${ALPHABET[highlightedCol]}`
              : "حدد حرفاً لإضاءة مساره"}
          </span>
        </div>

        <div className="overflow-x-auto crypto-scroll pb-2">
          <div className="inline-block border border-[#1f2d48] rounded-xl overflow-hidden bg-[#090d16]">
            {/* Header row for columns */}
            <div className="flex border-b border-[#1f2d48] bg-[#141e33]">
              <div className="w-7 h-7 flex items-center justify-center text-[10px] font-bold text-amber-400 font-mono border-r border-[#1f2d48]">
                \
              </div>
              {ALPHABET.split("").map((c, colIdx) => (
                <div
                  key={c}
                  className={`w-7 h-7 flex items-center justify-center text-[10px] font-mono font-bold ${
                    highlightedCol === colIdx ? "bg-emerald-500/30 text-emerald-300 border-b-2 border-emerald-400" : "text-slate-400"
                  }`}
                >
                  {c}
                </div>
              ))}
            </div>

            {/* 26 Rows */}
            {ALPHABET.split("").map((rChar, rowIdx) => {
              const isRowActive = highlightedRow === rowIdx;
              return (
                <div key={rChar} className="flex border-b border-[#1f2d48]/40">
                  {/* Row Header */}
                  <div
                    className={`w-7 h-7 flex items-center justify-center text-[10px] font-mono font-bold border-r border-[#1f2d48] ${
                      isRowActive ? "bg-sky-500/30 text-sky-300 font-extrabold" : "bg-[#141e33] text-slate-400"
                    }`}
                  >
                    {rChar}
                  </div>

                  {/* 26 Cells */}
                  {ALPHABET.split("").map((_, colIdx) => {
                    const charCode = ((rowIdx + colIdx) % 26) + 65;
                    const cellChar = String.fromCharCode(charCode);
                    const isColActive = highlightedCol === colIdx;
                    const isIntersection = isRowActive && isColActive;

                    let cellStyle = "text-slate-400";
                    if (isIntersection) {
                      cellStyle = "bg-amber-400 text-slate-950 font-extrabold scale-125 z-10 rounded shadow-lg shadow-amber-400/80";
                    } else if (isRowActive) {
                      cellStyle = "bg-sky-950/60 text-sky-200";
                    } else if (isColActive) {
                      cellStyle = "bg-emerald-950/60 text-emerald-200";
                    }

                    return (
                      <div
                        key={colIdx}
                        className={`w-7 h-7 flex items-center justify-center text-[10px] font-mono transition-all ${cellStyle}`}
                      >
                        {cellChar}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
