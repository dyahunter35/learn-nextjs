"use client";

import { useState } from "react";
import {
  Matrix2x2,
  det2x2,
  invertMatrix2x2,
  hillProcess2x2,
  gcd,
} from "@/lib/crypto-engine";

const PRESET_MATRICES: { name: string; m: Matrix2x2 }[] = [
  { name: "أساسي (det=9)", m: [[3, 3], [2, 5]] },
  { name: "متوازن (det=1)", m: [[5, 8], [17, 3]] },
  { name: "كلاسيكي (det=11)", m: [[9, 4], [5, 7]] },
];

export function HillLab() {
  const [matrix, setMatrix] = useState<Matrix2x2>([[3, 3], [2, 5]]);
  const [text, setText] = useState("HELP");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const det = det2x2(matrix);
  const detGcd = gcd(det, 26);
  const isInvertible = detGcd === 1;
  const invMatrix = isInvertible ? invertMatrix2x2(matrix) : null;

  const { output, steps, valid, error } = hillProcess2x2(text, matrix, mode === "decrypt");

  const handleCellChange = (r: number, c: number, val: string) => {
    const num = parseInt(val, 10);
    const newM: Matrix2x2 = [
      [matrix[0][0], matrix[0][1]],
      [matrix[1][0], matrix[1][1]],
    ];
    newM[r][c] = isNaN(num) ? 0 : num;
    setMatrix(newM);
  };

  return (
    <div className="space-y-3.5">
      {/* Intro & Math formula */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة هيل (Hill Cipher 2×2)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              شفرة كتل متعددة الحروف تعتمد على ضرب متجهات الحروف بمصفوفة مفتاحية حسابية موديلو 26.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
            <span>C = K · P mod 26 · P = K⁻¹ · C mod 26</span>
          </div>
        </div>

        {/* Preset selector */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-400">مصفوفات صالحة جاهزة:</span>
          {PRESET_MATRICES.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => setMatrix(preset.m)}
              className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 font-mono"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Matrix Controls & Processing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Left: 2x2 Matrix Input & Inversion */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 space-y-3">
          <h4 className="text-xs font-bold text-slate-300">مصفوفة المفتاح (Key Matrix 2×2):</h4>

          <div className="grid grid-cols-2 gap-2 max-w-[180px] mx-auto p-2 bg-[#090d16] border border-[#1f2d48] rounded-xl shadow-inner">
            {[0, 1].map((r) =>
              [0, 1].map((c) => (
                <input
                  key={`${r}-${c}`}
                  type="number"
                  value={matrix[r][c]}
                  onChange={(e) => handleCellChange(r, c, e.target.value)}
                  className="w-full h-10 text-center text-base font-mono font-bold text-sky-300 bg-[#141e33] border border-[#1f2d48] rounded-lg focus:border-sky-400 focus:outline-none"
                />
              ))
            )}
          </div>

          {/* Determinant & Mod Inverse Card */}
          <div className="bg-[#090d16] border border-[#1f2d48] rounded-xl p-2.5 space-y-1.5 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">محدد المصفوفة det(K):</span>
              <span className="text-amber-400 font-bold">{det} mod 26</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">شرط الانعكاس gcd(det, 26):</span>
              <span className={`font-bold ${isInvertible ? "text-emerald-400" : "text-rose-400"}`}>
                {detGcd} {isInvertible ? "✓ (قابلة للعكس)" : "✗ (غير قابلة للعكس)"}
              </span>
            </div>
            {invMatrix && (
              <div className="pt-1.5 border-t border-[#1f2d48] flex justify-between items-center">
                <span className="text-slate-400">المعكوس K⁻¹:</span>
                <span className="text-sky-300 font-bold">
                  [[{invMatrix[0][0]}, {invMatrix[0][1]}], [{invMatrix[1][0]}, {invMatrix[1][1]}]]
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Text Input & Output */}
        <div className="lg:col-span-7 space-y-3">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-300">
                {mode === "encrypt" ? "النص الأصلي (كتل ثنائية):" : "النص المشفر:"}
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
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm font-mono font-bold text-slate-200 tracking-widest focus:border-sky-500 focus:outline-none uppercase"
            />
            {error && <p className="text-xs text-rose-400 mt-1 font-semibold">{error}</p>}
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-emerald-400">النتيجة:</label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 tracking-widest min-h-[46px]">
              {output || "—"}
            </div>
          </div>

          {/* Matrix vector multiplication preview */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <h4 className="text-xs font-bold text-slate-300 mb-1.5">ضرب المتجهات بالكتل (Vectors):</h4>
            <div className="flex gap-2 overflow-x-auto crypto-scroll pb-1">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 min-w-[120px] text-center font-mono text-xs">
                  <div className="text-sky-300 font-bold">{st.letters} [{st.vector.join(", ")}]</div>
                  <div className="text-[10px] text-slate-500 my-0.5">↓ ضرب المصفوفة</div>
                  <div className="text-emerald-400 font-bold">{st.resultLetters} [{st.resultVector.join(", ")}]</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
