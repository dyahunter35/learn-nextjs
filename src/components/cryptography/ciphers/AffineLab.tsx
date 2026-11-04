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
    <div className="space-y-3.5">
      {/* Intro & Math formula */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 className="text-base font-bold text-sky-400">شفرة أفين (Affine Cipher)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              شفرة تعويض خطي تجمع بين الضرب الموديلو والإزاحة الخطية مع اشتراط \(gcd(a, 26) = 1\).
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-left font-mono text-xs">
            <span className="text-emerald-400 block">التشفير: y = (a·x + b) mod 26</span>
            <span className="text-sky-300 block">فك التشفير: x = a⁻¹·(y - b) mod 26</span>
          </div>
        </div>

        {/* Multiplier (a) & Shift (b) controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          {/* Multiplier a */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              المعامل المضروب (a):
            </label>
            <select
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs text-sky-300 font-mono font-bold focus:border-sky-500 focus:outline-none"
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
              <span className="text-xs font-mono font-bold text-amber-400">b = {b}</span>
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
          <div className="bg-[#090d16] border border-[#1f2d48] rounded-xl p-2.5 flex flex-col justify-center text-xs font-mono">
            <div className="flex items-center justify-between mb-1">
              <span className="text-slate-400">شرط الأولية:</span>
              <span className={`font-bold ${isCoprime ? "text-emerald-400" : "text-rose-400"}`}>
                gcd({a}, 26) = {currentGcd} {isCoprime ? "✓" : "✗"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">المعكوس (a⁻¹):</span>
              <span className="text-sky-300 font-bold">{invA !== null ? `${invA} (${a}×${invA} ≡ 1)` : "غير موجود"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Text Processing */}
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
            className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none uppercase"
            placeholder="أدخل النص الإنجليزي..."
          />
        </div>

        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-emerald-400">
                {mode === "encrypt" ? "النتيجة المشفرة (Ciphertext):" : "النتيجة المفكوكة (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ
              </button>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-wider min-h-[75px]">
              {result || "—"}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Math Conversion Table */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
        <h4 className="text-xs font-bold text-slate-300 mb-2">خطوات الحساب الجبري لكل حرف:</h4>
        <div className="overflow-x-auto crypto-scroll pb-1">
          <div className="flex gap-1.5 min-w-max">
            {text.slice(0, 16).split("").map((ch, idx) => {
              const upper = ch.toUpperCase();
              const code = upper.charCodeAt(0);
              const isChar = code >= 65 && code <= 90;
              const xVal = isChar ? code - 65 : null;

              let calcStr = "-";
              let resChar = ch;
              if (xVal !== null) {
                if (mode === "encrypt") {
                  const yVal = mod(a * xVal + b, 26);
                  calcStr = `(${a}×${xVal}+${b})%26=${yVal}`;
                  resChar = String.fromCharCode(yVal + 65);
                } else if (invA !== null) {
                  const yVal = mod(invA * (xVal - b), 26);
                  calcStr = `${invA}×(${xVal}-${b})%26=${yVal}`;
                  resChar = String.fromCharCode(yVal + 65);
                }
              }

              return (
                <div key={idx} className="bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 min-w-[90px] text-center font-mono">
                  <div className="text-sm font-bold text-sky-300">{ch}</div>
                  <div className="text-[10px] text-slate-500">x = {xVal !== null ? xVal : "-"}</div>
                  <div className="text-[9px] text-slate-400 bg-slate-900 px-1 py-0.5 rounded my-1 truncate">{calcStr}</div>
                  <div className="text-sm font-bold text-emerald-400">{resChar}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
