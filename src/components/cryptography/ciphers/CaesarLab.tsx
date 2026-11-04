"use client";

import { useState } from "react";
import { caesarEncrypt, caesarDecrypt, ALPHABET, mod } from "@/lib/crypto-engine";

export function CaesarLab() {
  const [text, setText] = useState("ATTACK AT DAWN");
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const effectiveShift = mode === "encrypt" ? shift : mod(-shift, 26);
  const result = mode === "encrypt" ? caesarEncrypt(text, shift) : caesarDecrypt(text, shift);

  // Calculate coordinates for the Mod 26 circle
  const radius = 105;
  const center = 140;

  return (
    <div className="space-y-6">
      {/* Intro & Math formula */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة قيصر (Caesar Cipher)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة تعويض أحادية بسيطة تعتمد على إزاحة الحروف بمقدار ثابت في دائرة الأبجدية ذات 26 حرفاً.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#090d16] px-3 py-1.5 rounded-lg border border-[#1f2d48] text-xs font-mono text-emerald-400">
            <span>{mode === "encrypt" ? "c = (p + k) mod 26" : "p = (c - k) mod 26"}</span>
          </div>
        </div>

        {/* Controls: Mode & Shift Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">مقدار الإزاحة (k = Shift):</label>
              <span className="text-base font-bold font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800">
                {shift}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={shift}
              onChange={(e) => setShift(Number(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>0 (بدون إزاحة)</span>
              <span>13 (ROT13)</span>
              <span>25 (أقصى إزاحة)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-end">
            <div className="bg-[#090d16] p-1 rounded-xl border border-[#1f2d48] flex">
              <button
                type="button"
                onClick={() => setMode("encrypt")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  mode === "encrypt"
                    ? "bg-sky-500 text-slate-900 shadow font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                تشفير (Encrypt)
              </button>
              <button
                type="button"
                onClick={() => setMode("decrypt")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  mode === "decrypt"
                    ? "bg-emerald-500 text-slate-900 shadow font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                فك تشفير (Decrypt)
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShift(3)}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700"
            >
              إزاحة قيصر التاريخية (k=3)
            </button>
          </div>
        </div>
      </div>

      {/* Main interactive area: Inputs & Circle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Text input & result */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">
                {mode === "encrypt" ? "النص الأصلي (Plaintext):" : "النص المشفر (Ciphertext):"}
              </label>
              <span className="text-[11px] text-slate-500">{text.length} حرف</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none"
              placeholder="اكتب النص هنا..."
            />
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-emerald-400">
                {mode === "encrypt" ? "النص المشفر الناتج (Ciphertext):" : "النص المفكوك (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ النتيجة
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-wider min-h-[50px]">
              {result || "—"}
            </div>
          </div>

          {/* Letter by letter table transformation preview */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
            <h4 className="text-xs font-semibold text-slate-300 mb-3">جدول الحساب الموديلو لحظياً (Mod 26 Steps):</h4>
            <div className="overflow-x-auto crypto-scroll">
              <div className="flex gap-1.5 min-w-max pb-2">
                {text.slice(0, 16).split("").map((ch, idx) => {
                  const upper = ch.toUpperCase();
                  const code = upper.charCodeAt(0);
                  const isChar = code >= 65 && code <= 90;
                  const pVal = isChar ? code - 65 : null;
                  const cVal = pVal !== null ? mod(pVal + effectiveShift, 26) : null;
                  const cChar = cVal !== null ? String.fromCharCode(cVal + 65) : ch;

                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 min-w-[46px] text-center"
                    >
                      <span className="text-sm font-bold text-sky-300 font-mono">{ch}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{pVal !== null ? pVal : "-"}</span>
                      <span className="text-[10px] text-slate-600 my-0.5">↓</span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">{cChar}</span>
                      <span className="text-[10px] text-emerald-600 font-mono">{cVal !== null ? cVal : "-"}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {text.length > 16 && (
              <p className="text-[10px] text-slate-500 mt-1">يُعرض أول 16 حرفاً لتوضيح الخطوات الحسابية.</p>
            )}
          </div>
        </div>

        {/* Right: Circular Modulo Dial */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-4 flex flex-col items-center justify-center">
          <h4 className="text-xs font-semibold text-slate-300 mb-2">الدائرة الحسابية (Mod 26 Circular Dial)</h4>
          <p className="text-[11px] text-slate-400 mb-3 text-center">
            الحلقة الخارجية: الحرف الأصلي · الحلقة الداخلية: الحرف الناتج بعد إزاحة k={shift}
          </p>

          <div className="relative w-[280px] h-[280px] flex items-center justify-center">
            <svg viewBox="0 0 280 280" className="w-full h-full">
              {/* Outer circle */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#1f2d48" strokeWidth="2" />
              {/* Inner circle */}
              <circle cx={center} cy={center} r={radius - 28} fill="#090d16" stroke="#334b77" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Letters around the circle */}
              {ALPHABET.split("").map((letter, i) => {
                const angle = ((i * 360) / 26 - 90) * (Math.PI / 180);
                const outerX = center + radius * Math.cos(angle);
                const outerY = center + radius * Math.sin(angle);

                const innerAngle = (((i + effectiveShift) * 360) / 26 - 90) * (Math.PI / 180);
                const innerX = center + (radius - 28) * Math.cos(innerAngle);
                const innerY = center + (radius - 28) * Math.sin(innerAngle);

                return (
                  <g key={letter}>
                    {/* Outer letter */}
                    <text
                      x={outerX}
                      y={outerY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="text-[10px] font-mono fill-sky-300 font-bold select-none"
                    >
                      {letter}
                    </text>
                    {/* Inner shifted letter */}
                    <text
                      x={innerX}
                      y={innerY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="text-[9px] font-mono fill-emerald-400 select-none"
                    >
                      {letter}
                    </text>
                  </g>
                );
              })}

              {/* Center pointer info */}
              <circle cx={center} cy={center} r="24" fill="#141e33" stroke="#38bdf8" strokeWidth="1.5" />
              <text x={center} y={center - 4} textAnchor="middle" dominantBaseline="central" className="text-[10px] font-mono fill-slate-300">
                k
              </text>
              <text x={center} y={center + 8} textAnchor="middle" dominantBaseline="central" className="text-[12px] font-mono fill-sky-400 font-bold">
                +{shift}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

