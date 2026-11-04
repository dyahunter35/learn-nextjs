"use client";

import { useState } from "react";
import { ALPHABET, substitutionEncrypt, substitutionDecrypt, generateRandomSubstitutionKey } from "@/lib/crypto-engine";

const ATBASH_KEY = ALPHABET.split("").reverse().join("");
const QWERTY_KEY = "QWERTYUIOPASDFGHJKLZXCVBNM";
const CAESAR_3_KEY = "DEFGHIJKLMNOPQRSTUVWXYZABC";

export function MonoalphabeticLab() {
  const [text, setText] = useState("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
  const [key, setKey] = useState("QWERTYUIOPASDFGHJKLZXCVBNM");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const result = mode === "encrypt" ? substitutionEncrypt(text, key) : substitutionDecrypt(text, key);

  // Validate key
  const uniqueCount = new Set(key.toUpperCase().split("")).size;
  const isValidKey = key.length === 26 && uniqueCount === 26;

  const handleCharChange = (index: number, newChar: string) => {
    const upper = newChar.toUpperCase();
    if (!/^[A-Z]$/.test(upper)) return;
    const arr = key.split("");
    // If the letter already exists elsewhere, swap them
    const existingIndex = arr.findIndex((c) => c === upper);
    if (existingIndex !== -1) {
      arr[existingIndex] = arr[index];
    }
    arr[index] = upper;
    setKey(arr.join(""));
  };

  return (
    <div className="space-y-6">
      {/* Intro & Keyspace Banner */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة التعويض أحادي الأبجدية (Monoalphabetic Substitution)</h3>
            <p className="text-xs text-slate-400 mt-1">
              استبدال كل حرف في الأبجدية بحرف آخر فريد وفق تبديل كامل (Permutation)، مما ينتج فضاء مفاتيح فلكياً.
            </p>
          </div>
          <div className="bg-[#090d16] border border-amber-500/30 px-3 py-2 rounded-xl text-left font-mono">
            <span className="text-[10px] text-amber-400/80 block">فضاء المفاتيح الممكنة (Key Space = 26!):</span>
            <span className="text-sm font-bold text-amber-300">4.0329 × 10²⁶ احتمالية</span>
          </div>
        </div>

        {/* Preset Key Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 ml-2">نماذج المفاتيح:</span>
          <button
            type="button"
            onClick={() => setKey(generateRandomSubstitutionKey())}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30 transition-colors"
          >
            🎲 توليد خريطة عشوائية (Random)
          </button>
          <button
            type="button"
            onClick={() => setKey(ATBASH_KEY)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            شفرة أتباش (Atbash A↔Z)
          </button>
          <button
            type="button"
            onClick={() => setKey(QWERTY_KEY)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            لوحة مفاتيح QWERTY
          </button>
          <button
            type="button"
            onClick={() => setKey(CAESAR_3_KEY)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            إزاحة قيصر 3
          </button>
          <button
            type="button"
            onClick={() => setKey(ALPHABET)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            الأبجدية الأصلية (إعادة تعيين)
          </button>
        </div>
      </div>

      {/* Interactive Substitution Mapping Grid */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-semibold text-slate-300">خريطة استبدال الحروف التفاعلية (Cipher Mapping):</h4>
          {!isValidKey && (
            <span className="text-xs text-rose-400 font-semibold">تنبيه: المفتاح يجب أن يحتوي على 26 حرفاً غير مكرر</span>
          )}
        </div>

        <div className="overflow-x-auto crypto-scroll pb-2">
          <div className="grid grid-flow-col auto-cols-[38px] gap-1 text-center min-w-[1020px]">
            {/* Plain row */}
            {ALPHABET.split("").map((plainChar) => (
              <div key={plainChar} className="bg-[#090d16] border border-[#1f2d48] rounded-t py-1">
                <span className="text-[10px] text-slate-500 font-mono block">Plain</span>
                <span className="text-sm font-bold text-sky-400 font-mono">{plainChar}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-flow-col auto-cols-[38px] gap-1 text-center min-w-[1020px] mt-0.5">
            {/* Cipher row (editable) */}
            {ALPHABET.split("").map((_, idx) => (
              <div key={idx} className="bg-[#141e33] border border-sky-500/30 rounded-b py-1">
                <span className="text-[10px] text-emerald-400 font-mono block">Sub</span>
                <input
                  type="text"
                  maxLength={1}
                  value={key[idx] || ""}
                  onChange={(e) => handleCharChange(idx, e.target.value)}
                  className="w-7 h-7 text-center font-bold text-emerald-300 font-mono bg-[#090d16] border border-[#1f2d48] rounded focus:border-emerald-400 focus:outline-none uppercase text-xs"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Area & Live Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-300">
              {mode === "encrypt" ? "النص الأصلي (Plaintext):" : "النص المشفر (Ciphertext):"}
            </label>
            <div className="flex gap-1">
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
            rows={4}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none"
            placeholder="أدخل النص..."
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-emerald-400">
                {mode === "encrypt" ? "النتيجة المشفرة (Ciphertext):" : "النتيجة الأصلية (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-sm text-emerald-300 break-words tracking-wider min-h-[96px]">
              {result || "—"}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#1f2d48] text-[11px] text-slate-400 flex items-center justify-between">
            <span>ملاحظة أمنية: رغم ضخامة فضاء المفاتيح (26!)، تُكسر هذه الشفرة بسهولة باستخدام <strong>تحليل الترددات (Frequency Analysis)</strong>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
