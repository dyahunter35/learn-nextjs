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
  { name: "نموذج أساسي (det=9)", m: [[3, 3], [2, 5]] },
  { name: "مفتاح متوازن (det=1)", m: [[5, 8], [17, 3]] },
  { name: "مفتاح كلاسيكي (det=11)", m: [[9, 4], [5, 7]] },
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
    <div className="space-y-6">
      {/* Intro & Math formula */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة هيل (Hill Cipher 2×2 / 3×3)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة كتل متعددة الحروف تعتمد على ضرب متجهات الحروف بمصفوفة مفتاحية حسابية موديلو 26.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-xs font-mono text-emerald-400">
            <span>C = K · P mod 26 · P = K⁻¹ · C mod 26</span>
          </div>
        </div>

        {/* Preset selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400">مصفوفات جاهزة صالحة:</span>
          {PRESET_MATRICES.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => setMatrix(preset.m)}
              className="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 font-mono"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Matrix Controls & Determinant Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 2x2 Matrix Input & Inversion */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-4">
          <h4 className="text-xs font-semibold text-slate-300">مصفوفة المفتاح (Key Matrix 2×2):</h4>
          
          <div className="grid grid-cols-2 gap-3 max-w-[220px] mx-auto p-3 bg-[#090d16] border border-[#1f2d48] rounded-2xl shadow-inner">
            {[0, 1].map((r) =>
              [0, 1].map((c) => (
                <input
                  key={`${r}-${c}`}
                  type="number"
                  value={matrix[r][c]}
                  onChange={(e) => handleCellChange(r, c, e.target.value)}
                  className="w-full h-12 text-center text-lg font-mono font-bold text-sky-300 bg-[#141e33] border border-[#1f2d48] rounded-xl focus:border-sky-400 focus:outline-none"
                />
              ))
            )}
          </div>

          {/* Determinant & Mod Inverse Card */}
          <div className="bg-[#090d16] border border-[#1f2d48] rounded-xl p-3 space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">محدد المصفوفة det(K):</span>
              <span className="text-amber-400 font-bold">{det} mod 26</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">شرط الانعكاس gcd(det, 26):</span>
              <span className={`font-bold ${isInvertible ? "text-emerald-400" : "text-rose-400"}`}>
                {detGcd} {isInvertible ? "(قابلة للفك ✓)" : "(غير قابلة للفك ✗)"}
              </span>
            </div>
            {invMatrix && (
              <div className="pt-2 border-t border-[#1f2d48] flex justify-between items-center">
                <span className="text-slate-400">المصفوفة المعكوسة K⁻¹:</span>
                <span className="text-sky-300 font-bold">
                  [{invMatrix[0].join(", ")}] / [{invMatrix[1].join(", ")}]
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Text Input & Vector Math Preview */}
        <div className="lg:col-span-7 space-y-4">
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
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
              placeholder="اكتب النص..."
            />
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
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
            {valid ? (
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 tracking-widest">
                {output || "—"}
              </div>
            ) : (
              <div className="p-3 bg-rose-950/40 border border-rose-800/80 rounded-lg text-rose-300 text-xs">
                {error}
              </div>
            )}
          </div>

          {/* Vector Steps breakdown */}
          {valid && steps.length > 0 && (
            <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
              <h4 className="text-xs font-semibold text-slate-300 mb-3">حساب ضرب المتجهات خطوة بخطوة:</h4>
              <div className="space-y-2">
                {steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-2"
                  >
                    <span className="text-sky-300 font-bold">
                      كتلة [{st.letters}] = ({st.vector[0]}, {st.vector[1]})ᵀ
                    </span>
                    <span className="text-slate-400">
                      × مصفوفة K mod 26 = ({st.resultVector[0]}, {st.resultVector[1]})ᵀ
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      ← [{st.resultLetters}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
