"use client";

import { useState } from "react";
import { productCipherPipeline } from "@/lib/crypto-engine";

export function ProductCipherLab() {
  const [text, setText] = useState("CONFIDENTIAL MESSAGE");
  const [subShift, setSubShift] = useState(7);
  const [transKey, setTransKey] = useState("3142");

  const { input, substituted, transposed } = productCipherPipeline(text, subShift, transKey);

  return (
    <div className="space-y-3.5">
      {/* Intro & Shannon concept */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 className="text-base font-bold text-sky-400">الشفرات المركبة (Product Ciphers - SPN)</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              دمج مراحل متتابعة من التعويض (Substitution) والتبديل (Permutation) لتحقيق مبدأي شانون: الإرباك والانتشار (Confusion & Diffusion).
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
            <span>S-Box (تعويض) + P-Box (تبديل) = شبكة SPN</span>
          </div>
        </div>

        {/* Pipeline Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-300">مرحلة التعويض (S-Stage: مقدار الإزاحة):</label>
              <span className="text-xs font-mono font-bold text-sky-400">+{subShift}</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={subShift}
              onChange={(e) => setSubShift(Number(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              مرحلة التبديل (P-Stage: مفتاح ترتيب الأعمدة):
            </label>
            <input
              type="text"
              value={transKey}
              onChange={(e) => setTransKey(e.target.value)}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-xs font-mono font-bold text-amber-400 focus:border-amber-400 focus:outline-none"
              placeholder="مثال: 3142"
            />
          </div>
        </div>
      </div>

      {/* Input Text */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
        <label className="text-xs font-bold text-slate-300 block mb-1.5">النص المدخل (Input Plaintext):</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
        />
      </div>

      {/* Multi-stage Pipeline Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Stage 0 */}
        <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">مرحلة 0</span>
              <span className="text-xs font-bold text-slate-300">النص المنقى</span>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-slate-200 break-words min-h-[50px]">
              {input || "—"}
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">تنقية الحروف وتجهيزها للكتل</p>
        </div>

        {/* Stage 1: Substitution */}
        <div className="bg-[#111827] border border-sky-500/40 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
                مرحلة 1: S-Box
              </span>
              <span className="text-xs font-bold text-sky-400">الإرباك (Confusion)</span>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-sky-900/50 rounded-lg font-mono text-xs font-bold text-sky-300 break-words min-h-[50px]">
              {substituted || "—"}
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">إزاحة الحروف قيصرياً بمقدار +{subShift}</p>
        </div>

        {/* Stage 2: Permutation */}
        <div className="bg-[#111827] border border-emerald-500/40 rounded-xl p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                مرحلة 2: P-Box
              </span>
              <span className="text-xs font-bold text-emerald-400">الانتشار (Diffusion)</span>
            </div>
            <div className="p-2.5 bg-[#090d16] border border-emerald-900/50 rounded-lg font-mono text-xs font-bold text-emerald-300 break-words min-h-[50px]">
              {transposed || "—"}
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">تبديل مواضع كتل الأعمدة بالمفتاح {transKey}</p>
        </div>
      </div>
    </div>
  );
}
