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
    const existingIndex = arr.findIndex((c) => c === upper);
    if (existingIndex !== -1) {
      arr[existingIndex] = arr[index];
    }
    arr[index] = upper;
    setKey(arr.join(""));
  };

  return (
    <div className="space-y-3.5">
      {/* Intro & Keyspace Banner */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة التعويض أحادي الأبجدية (Monoalphabetic Substitution)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              استبدال كل حرف في الأبجدية بحرف مقابل فريد وفق تبديل كامل (Permutation).
            </p>
          </div>
          <div className="bg-[#090d16] border border-amber-500/30 px-3 py-1.5 rounded-lg text-left font-mono">
            <span className="text-[10px] text-amber-400/80 block">فضاء المفاتيح (26!):</span>
            <span className="text-xs font-bold text-amber-300">4.03 × 10²⁶ احتمالية</span>
          </div>
        </div>

        {/* Preset Key Action Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-400 ml-1">نماذج جاهزة:</span>
          <button
            type="button"
            onClick={() => setKey(generateRandomSubstitutionKey())}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30 transition-colors"
          >
            🎲 عشوائي (Random)
          </button>
          <button
            type="button"
            onClick={() => setKey(ATBASH_KEY)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            أتباش (Atbash A↔Z)
          </button>
          <button
            type="button"
            onClick={() => setKey(QWERTY_KEY)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            لوحة QWERTY
          </button>
          <button
            type="button"
            onClick={() => setKey(CAESAR_3_KEY)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            إزاحة قيصر 3
          </button>
          <button
            type="button"
            onClick={() => setKey(ALPHABET)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700"
          >
            إعادة تعيين للأصل
          </button>
        </div>
      </div>

      {/* Interactive Substitution Mapping Grid */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-slate-300">خريطة استبدال الحروف التفاعلية (قابلة للتعديل):</h4>
          {!isValidKey && (
            <span className="text-xs text-rose-400 font-bold">تنبيه: المفتاح يجب أن يحتوي على 26 حرفاً غير مكرر</span>
          )}
        </div>

        <div className="overflow-x-auto crypto-scroll pb-1">
          <div className="grid grid-flow-col auto-cols-[36px] gap-1 text-center min-w-[960px]">
            {ALPHABET.split("").map((plainChar) => (
              <div key={plainChar} className="bg-[#090d16] border border-[#1f2d48] rounded-t py-1">
                <span className="text-[9px] text-slate-500 font-mono block">الأصل</span>
                <span className="text-xs font-bold text-sky-400 font-mono">{plainChar}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-flow-col auto-cols-[36px] gap-1 text-center min-w-[960px] mt-0.5">
            {ALPHABET.split("").map((_, idx) => (
              <div key={idx} className="bg-[#141e33] border border-sky-500/30 rounded-b py-1">
                <span className="text-[9px] text-emerald-400 font-mono block">البديل</span>
                <input
                  type="text"
                  maxLength={1}
                  value={key[idx] || ""}
                  onChange={(e) => handleCharChange(idx, e.target.value)}
                  className="w-6 h-6 text-center font-bold text-emerald-300 font-mono bg-[#090d16] border border-[#1f2d48] rounded focus:border-emerald-400 focus:outline-none uppercase text-xs"
                />
              </div>
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
                className={`px-2.5 py-1 rounded text-xs font-bold ${mode === "encrypt" ? "bg-sky-500 text-slate-900 shadow" : "text-slate-400"}`}
              >
                تشفير
              </button>
              <button
                type="button"
                onClick={() => setMode("decrypt")}
                className={`px-2.5 py-1 rounded text-xs font-bold ${mode === "decrypt" ? "bg-emerald-500 text-slate-900 shadow" : "text-slate-400"}`}
              >
                فك تشفير
              </button>
            </div>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none"
            placeholder="أدخل النص..."
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-emerald-400">
                {mode === "encrypt" ? "النتيجة المشفرة (Ciphertext):" : "النتيجة الأصلية (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-sm font-bold text-emerald-300 break-words tracking-wider min-h-[75px]">
              {result || "—"}
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-[#1f2d48] text-[11px] text-slate-400">
            ملاحظة: تُكسر هذه الشفرة عبر <strong>تحليل الترددات (Frequency Analysis)</strong> لأن نسب تردد الحروف تظل ثابتة.
          </div>
        </div>
      </div>
    </div>
  );
}
