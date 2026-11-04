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
    <div className="space-y-6">
      {/* Header and explanation */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة بلايفير (Playfair Cipher)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة تعويض ثنائية (Digram) تعتمد على مصفوفة 5×5 تُبنى من كلمة مفتاحية مع دمج حرفي I و J، وتطبق قواعد الصف والعمود والمستطيل.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-xs font-mono text-emerald-400">
            <span>حجم المصفوفة: 5×5 · دمج I/J · إضافة حشو X</span>
          </div>
        </div>

        {/* Keyword input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              الكلمة المفتاحية (Keyword لبناء المصفوفة):
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: MONARCHY"
            />
          </div>

          <div className="flex items-center gap-2 justify-end">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 5x5 Matrix visualizer */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 flex flex-col items-center">
          <h4 className="text-xs font-semibold text-slate-300 mb-2">مصفوفة بلايفير 5×5 التفاعلية:</h4>
          <p className="text-[11px] text-slate-400 mb-4 text-center">
            {currentStep
              ? `الزوج المحدد حالياً: [${currentStep.pair.join(", ")}] → النتيجة [${currentStep.cipherPair.join(", ")}]`
              : "المصفوفة الحالية"}
          </p>

          <div className="grid grid-cols-5 gap-2 p-3 bg-[#090d16] border border-[#1f2d48] rounded-2xl shadow-xl">
            {matrix.map((row, r) =>
              row.map((cell, c) => {
                const isPosA = currentStep && currentStep.posA[0] === r && currentStep.posA[1] === c;
                const isPosB = currentStep && currentStep.posB[0] === r && currentStep.posB[1] === c;
                const isCipherA = currentStep && currentStep.cipherPair[0] === cell;
                const isCipherB = currentStep && currentStep.cipherPair[1] === cell;

                let cellBg = "bg-[#141e33] border-[#1f2d48] text-slate-200";
                if (isPosA || isPosB) {
                  cellBg = "bg-sky-500 text-slate-900 border-sky-400 font-extrabold shadow-lg shadow-sky-500/50 scale-105";
                } else if (isCipherA || isCipherB) {
                  cellBg = "bg-emerald-500 text-slate-900 border-emerald-400 font-extrabold shadow-lg shadow-emerald-500/50 scale-105";
                } else if (currentStep && currentStep.rule === "rectangle") {
                  if (
                    (r === currentStep.posA[0] || r === currentStep.posB[0]) &&
                    (c === currentStep.posA[1] || c === currentStep.posB[1])
                  ) {
                    cellBg = "bg-sky-950/40 border-sky-800/80 text-sky-300";
                  }
                }

                return (
                  <div
                    key={`${r}-${c}`}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-mono text-base font-bold border transition-all duration-200 ${cellBg}`}
                  >
                    {cell}
                  </div>
                );
              })
            )}
          </div>

          {currentStep && (
            <div className="mt-4 p-3 bg-[#090d16] border border-[#1f2d48] rounded-xl text-center w-full">
              <span className="text-[11px] text-slate-400 block mb-1">القاعدة المطبقة على هذا الزوج:</span>
              <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-sky-950/80 border border-sky-800 text-sky-300">
                {currentStep.rule === "same_row" && "نفس الصف (Same Row) → إزاحة أفقية لليمين"}
                {currentStep.rule === "same_col" && "نفس العمود (Same Column) → إزاحة رأسية للأسفل"}
                {currentStep.rule === "rectangle" && "مستطيل (Rectangle) → تبديل الأعمدة مع ثبات الصفوف"}
              </span>
            </div>
          )}
        </div>

        {/* Right: Inputs & Digrams List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">النص المراد معالجته:</label>
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
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value.toUpperCase());
                setSelectedStepIndex(0);
              }}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
              placeholder="اكتب النص..."
            />
            <div className="mt-2 text-[11px] text-slate-400">
              تقطيع النص إلى ثنائيات مع إضافة حرف الحشو X: <span className="font-mono text-amber-400 font-bold">{paddedText}</span>
            </div>
          </div>

          {/* Result Output */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-emerald-400">
                {mode === "encrypt" ? "النص المشفر النهائي:" : "النص المفكوك:"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 tracking-widest">
              {output || "—"}
            </div>
          </div>

          {/* Interactive Steps List (Clickable Digrams) */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold text-slate-300">أزواج الحروف (انقر على أي زوج لرؤية مساره في المصفوفة):</h4>
              <span className="text-[10px] text-slate-500">{steps.length} أزواج</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {steps.map((st, i) => {
                const isSelected = i === selectedStepIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedStepIndex(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                      isSelected
                        ? "bg-sky-500 text-slate-900 border-sky-400 shadow"
                        : "bg-[#090d16] text-slate-300 border-[#1f2d48] hover:border-slate-600"
                    }`}
                  >
                    {st.pair.join("")} → {st.cipherPair.join("")}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
