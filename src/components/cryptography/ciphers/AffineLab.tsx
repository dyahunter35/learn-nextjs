"use client";

import { useState } from "react";
import {
  affineEncrypt,
  affineDecrypt,
  VALID_AFFINE_A,
  gcd,
  modInverse,
  mod,
} from "@/lib/crypto-engine";

export function AffineLab() {
  const [text, setText] = useState("AFFINE CIPHER");
  const [a, setA] = useState(5);
  const [b, setB] = useState(8);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const currentGcd = gcd(a, 26);
  const isCoprime = currentGcd === 1;
  const invA = isCoprime ? modInverse(a, 26) : null;

  const encRes = affineEncrypt(text, a, b);
  const decRes = affineDecrypt(text, a, b);
  const result = mode === "encrypt" ? encRes.result : decRes.result;

  return (
    <div className="space-y-6">
      {/* Intro & Math formula */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">شفرة أفين (Affine Cipher)</h3>
            <p className="text-xs text-slate-400 mt-1">
              شفرة تعويض تجمع بين الضرب الموديلو والإزاحة الخطية، وتتطلب أن يكون المعامل المضروب أولياً نسبياً مع 26.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-left font-mono text-xs">
            <span className="text-emerald-400 block">التشفير: y = (a·x + b) mod 26</span>
            <span className="text-sky-300 block">فك التشفير: x = a⁻¹·(y - b) mod 26</span>
          </div>
        </div>

        {/* Multiplier (a) & Shift (b) controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Multiplier a */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المعامل المضروب (a):
            </label>
            <select
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-sm text-sky-300 font-mono font-bold focus:border-sky-500 focus:outline-none"
            >
              {VALID_AFFINE_A.map((val) => (
                <option key={val} value={val}>
                  a = {val} (gcd({val}, 26) = 1)
                </option>
              ))}
            </select>
          </div>

          {/* Shift b */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-300">
                المعامل المضاف (b = Shift):
              </label>
              <span className="text-xs font-mono font-bold text-amber-400">{b}</span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          {/* GCD and Modular Inverse verification card */}
          <div className="bg-[#090d16] border border-[#1f2d48] rounded-xl p-3 flex flex-col justify-center">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-400">شرط القاسم المشترك:</span>
              <span className={`font-mono font-bold ${isCoprime ? "text-emerald-400" : "text-rose-400"}`}>
                gcd({a}, 26) = {currentGcd} {isCoprime ? "✓" : "✗"}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">المعكوس الضربي (a⁻¹):</span>
              <span className="text-sky-300 font-bold">{invA !== null ? `${invA} (لأن ${a}×${invA} = ${a * invA} ≡ 1 mod 26)` : "غير موجود"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Text Processing */}
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
                {mode === "encrypt" ? "النتيجة المشفرة (Ciphertext):" : "النتيجة المفكوكة (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline"
              >
                نسخ
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-wider min-h-[96px]">
              {result || "—"}
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-400">
            عدد المفاتيح الممكنة في شفرة أفين = 12 (قيم a) × 26 (قيم b) = <strong>312 مفتاحاً فقط</strong>.
          </div>
        </div>
      </div>

      {/* Step by step math breakdown */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
        <h4 className="text-xs font-semibold text-slate-300 mb-3">تفاصيل العمليات الحسابية لكل حرف (Step-by-step Math):</h4>
        <div className="overflow-x-auto crypto-scroll pb-2">
          <table className="w-full text-right text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1f2d48] text-slate-400 text-[11px]">
                <th className="py-2 px-3">الحرف</th>
                <th className="py-2 px-3">القيمة (x/y)</th>
                <th className="py-2 px-3">المعادلة المطبقة</th>
                <th className="py-2 px-3">الحساب الدقيق</th>
                <th className="py-2 px-3 text-emerald-400">الحرف الناتج</th>
              </tr>
            </thead>
            <tbody>
              {text.slice(0, 10).split("").map((ch, idx) => {
                const upper = ch.toUpperCase();
                const code = upper.charCodeAt(0);
                if (code < 65 || code > 90) return null;
                const inVal = code - 65;
                if (mode === "encrypt") {
                  const raw = a * inVal + b;
                  const modVal = mod(raw, 26);
                  const outChar = String.fromCharCode(modVal + 65);
                  return (
                    <tr key={idx} className="border-b border-[#1f2d48]/50 hover:bg-[#141e33]">
                      <td className="py-2 px-3 font-bold text-sky-400">{upper}</td>
                      <td className="py-2 px-3 text-slate-300">{inVal}</td>
                      <td className="py-2 px-3 text-slate-400">({a} × {inVal} + {b}) mod 26</td>
                      <td className="py-2 px-3 text-slate-300">{raw} mod 26 = {modVal}</td>
                      <td className="py-2 px-3 font-bold text-emerald-400">{outChar}</td>
                    </tr>
                  );
                } else {
                  if (invA === null) return null;
                  const raw = invA * (inVal - b);
                  const modVal = mod(raw, 26);
                  const outChar = String.fromCharCode(modVal + 65);
                  return (
                    <tr key={idx} className="border-b border-[#1f2d48]/50 hover:bg-[#141e33]">
                      <td className="py-2 px-3 font-bold text-sky-400">{upper}</td>
                      <td className="py-2 px-3 text-slate-300">{inVal}</td>
                      <td className="py-2 px-3 text-slate-400">{invA} × ({inVal} - {b}) mod 26</td>
                      <td className="py-2 px-3 text-slate-300">{raw} mod 26 = {modVal}</td>
                      <td className="py-2 px-3 font-bold text-emerald-400">{outChar}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

