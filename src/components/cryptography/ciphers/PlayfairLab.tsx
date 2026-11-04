"use client";

import { useState } from "react";
import {
  buildPlayfairMatrix,
  preparePlayfairText,
  playfairProcess,
} from "@/lib/crypto-engine";

export function PlayfairLab() {
  const [keyword, setKeyword] = useState("MONARCHY");
  const [text, setText] = useState("INSTRUMENTS");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const matrix = buildPlayfairMatrix(keyword);
  const { digrams, paddedText } = preparePlayfairText(text);
  const { steps, output } = playfairProcess(matrix, digrams, mode === "decrypt");

  const currentStep = steps[selectedStepIndex] || steps[0];

  return (
    <div className="space-y-3.5">
      {/* Header and explanation */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة بلايفير (Playfair Cipher 5×5)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              شفرة تعويض ثنائية (Digram) بمصفوفة 5×5 من كلمة مفتاحية مع دمج I و J، وتطبيق قواعد الصف والعمود والمستطيل.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
            <span>مصفوفة 5×5 · دمج I/J · إضافة حشو X</span>
          </div>
        </div>

        {/* Keyword input */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-6">
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              الكلمة المفتاحية (Keyword):
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: MONARCHY"
            />
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-1.5">
            <span className="text-xs text-slate-400">كلمات مقترحة:</span>
            {["MONARCHY", "SECRET", "ENIGMA", "CIPHER"].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKeyword(k)}
                className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 font-mono"
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid and Interactive Path Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Left: 5x5 Matrix visualizer */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col items-center">
          <h4 className="text-xs font-bold text-slate-300 mb-1">مصفوفة بلايفير 5×5 التفاعلية:</h4>
          <p className="text-[11px] text-slate-400 mb-2 text-center font-mono">
            {currentStep
              ? `الزوج المحدد: [${currentStep.pair.join(", ")}] ← الناتج [${currentStep.cipherPair.join(", ")}] (${currentStep.rule})`
              : "المصفوفة الحالية"}
          </p>

          <div className="grid grid-cols-5 gap-1.5 p-2 bg-[#090d16] border border-[#1f2d48] rounded-xl shadow-lg">
            {matrix.map((row, r) =>
              row.map((cell, c) => {
                const isPosA = currentStep && currentStep.posA[0] === r && currentStep.posA[1] === c;
                const isPosB = currentStep && currentStep.posB[0] === r && currentStep.posB[1] === c;
                const isCipherA = currentStep && currentStep.cipherPair[0] === cell;
                const isCipherB = currentStep && currentStep.cipherPair[1] === cell;

                let cellBg = "bg-[#141e33] border-[#1f2d48] text-slate-200";
                if (isPosA || isPosB) {
                  cellBg = "bg-sky-500 text-slate-900 border-sky-400 font-extrabold shadow scale-105";
                } else if (isCipherA || isCipherB) {
                  cellBg = "bg-emerald-500 text-slate-900 border-emerald-400 font-extrabold shadow scale-105";
                } else if (currentStep && currentStep.rule === "rectangle") {
                  if (
                    (r === currentStep.posA[0] || r === currentStep.posB[0]) &&
                    (c === currentStep.posA[1] || c === currentStep.posB[1])
                  ) {
                    cellBg = "bg-sky-950/40 border-sky-800 text-sky-300";
                  }
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`w-9 h-9 flex items-center justify-center font-mono text-sm font-bold rounded-lg border transition-all ${cellBg}`}
                  >
                    {cell}
                  </div>
                );
              })
            )}
          </div>

          {/* Stepper buttons for digraphs */}
          <div className="flex items-center gap-2 mt-3">
            <button
              type="button"
              onClick={() => setSelectedStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={selectedStepIndex <= 0}
              className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold disabled:opacity-40"
            >
              ◀ الزوج السابق
            </button>
            <span className="text-xs font-mono text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-950">
              {selectedStepIndex + 1} / {steps.length || 1}
            </span>
            <button
              type="button"
              onClick={() => setSelectedStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={selectedStepIndex >= steps.length - 1}
              className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold disabled:opacity-40"
            >
              الزوج التالي ▶
            </button>
          </div>
        </div>

        {/* Right: Inputs, mode and results */}
        <div className="lg:col-span-7 space-y-3">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-300">النص المدخل:</label>
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
              onChange={(e) => {
                setText(e.target.value.toUpperCase());
                setSelectedStepIndex(0);
              }}
              rows={2}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-widest focus:border-sky-500 focus:outline-none uppercase"
            />
            <div className="mt-1 text-[11px] text-slate-400 font-mono">
              النص بعد تقسيم الأزواج والحشو: <span className="text-sky-300 font-bold">{paddedText}</span>
            </div>
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-emerald-400">النتيجة النهائية:</label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ النتيجة
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 tracking-widest min-h-[46px]">
              {output || "—"}
            </div>
          </div>

          {/* Digram list strip */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <h4 className="text-xs font-bold text-slate-300 mb-1.5">الأزواج الثنائية وقواعدها:</h4>
            <div className="flex gap-1.5 overflow-x-auto crypto-scroll pb-1">
              {steps.map((st, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`px-2.5 py-1.5 rounded-lg border text-center font-mono text-xs transition ${
                    idx === selectedStepIndex
                      ? "bg-sky-500/20 border-sky-400 text-sky-200 ring-1 ring-sky-400"
                      : "bg-[#090d16] border-[#1f2d48] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold">{st.pair.join("")} → {st.cipherPair.join("")}</div>
                  <div className="text-[9px] text-slate-500">{st.rule}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
