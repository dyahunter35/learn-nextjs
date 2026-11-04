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

  return (
    <div className="space-y-3.5">
      {/* Intro and Key config */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة فيجينير (Vigenère Cipher)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              شفرة تعويض متعددة الأبجديات (Polyalphabetic) تُفشل التحليل الإحصائي البسيط عبر تكرار كلمة مفتاحية بإزاحات متغيرة.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
            <span>cᵢ = (pᵢ + kᵢ) mod 26 · تابولا ريكتا (26×26)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-6">
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              الكلمة المفتاحية (Keyword):
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest focus:border-sky-500 focus:outline-none"
              placeholder="مثال: CIPHER"
            />
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-1.5">
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

      {/* Text Area & Live Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
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
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-emerald-400">
                {mode === "encrypt" ? "النتيجة المشفرة:" : "النتيجة المفكوكة:"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(output)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-wider min-h-[75px]">
              {output || "—"}
            </div>
          </div>
        </div>
      </div>

      {/* Polyalphabetic Step-by-Step letter correspondence */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
        <h4 className="text-xs font-bold text-slate-300 mb-2">تطابق الحروف مع الكلمة المفتاحية المكررة:</h4>
        <div className="overflow-x-auto crypto-scroll pb-1">
          <div className="flex gap-1.5 min-w-max">
            {(mode === "encrypt" ? encSteps : decSteps).slice(0, 24).map((st: any, idx: number) => {
              const isSelected = idx === hoveredStepIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHoveredStepIndex(idx)}
                  className={`p-2 rounded-lg border text-center font-mono text-xs transition min-w-[50px] ${
                    isSelected
                      ? "bg-sky-500/20 border-sky-400 ring-1 ring-sky-400"
                      : "bg-[#090d16] border-[#1f2d48] text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="text-[10px] text-slate-500">{mode === "encrypt" ? "P" : "C"}</div>
                  <div className="text-sm font-bold text-sky-300">{mode === "encrypt" ? st.plain : st.cipher}</div>
                  <div className="text-[10px] text-amber-400 mt-1 font-semibold">{st.keyChar}</div>
                  <div className="text-[9px] text-slate-600">↓</div>
                  <div className="text-sm font-bold text-emerald-400">{mode === "encrypt" ? st.cipher : st.plain}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
