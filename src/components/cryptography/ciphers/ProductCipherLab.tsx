"use client";

import { useState } from "react";
import { productCipherPipeline } from "@/lib/crypto-engine";

export function ProductCipherLab() {
  const [text, setText] = useState("CONFIDENTIAL MESSAGE");
  const [subShift, setSubShift] = useState(7);
  const [transKey, setTransKey] = useState("3142");

  const { input, substituted, transposed } = productCipherPipeline(text, subShift, transKey);

  return (
    <div className="space-y-6">
      {/* Intro & Shannon concept */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1f2d48] pb-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-sky-400">الشفرات المركبة (Product Ciphers)</h3>
            <p className="text-xs text-slate-400 mt-1">
              دمج مراحل متتابعة من التعويض (Substitution) والتبديل (Permutation) لتحقيق مبدأي شانون: الإرباك والانتشار (Confusion & Diffusion)، وهو الأساس الذي بُني عليه تشفير DES و AES الحديث.
            </p>
          </div>
          <div className="bg-[#090d16] border border-[#1f2d48] px-3 py-2 rounded-xl text-xs font-mono text-emerald-400">
            <span>S-Box (تعويض) + P-Box (تبديل) = SPN Network</span>
          </div>
        </div>

        {/* Pipeline Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-300">مرحلة التعويض (S-Stage: مقدار إزاحة الحروف):</label>
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
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2 text-sm font-mono font-bold text-amber-400 focus:border-amber-400 focus:outline-none"
              placeholder="مثال: 3142"
            />
          </div>
        </div>
      </div>

      {/* Input Text */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
        <label className="text-xs font-semibold text-slate-300 block mb-2">النص المدخل (Input Plaintext):</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono tracking-wider focus:border-sky-500 focus:outline-none uppercase"
        />
      </div>

      {/* Multi-stage Pipeline Visualization */}
      <div className="space-y-4">
        <h4 className="text-xs font-semibold text-slate-300">خط المعالجة المتتابع (Multi-stage Pipeline):</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Stage 1: Input */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">المرحلة 0</span>
                <span className="text-xs font-bold text-slate-300">النص الأصلي المُهندم</span>
              </div>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-slate-200 break-words min-h-[60px]">
                {input || "—"}
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500">
              تنقية النص من الفواصل والمسافات لتجهيزه للكتل
            </div>
          </div>

          {/* Stage 2: Substitution (Confusion) */}
          <div className="bg-[#111827] border border-sky-500/30 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-950/80 text-sky-300 border border-sky-800">
                  المرحلة 1: S-Box
                </span>
                <span className="text-xs font-bold text-sky-400">الإرباك (Confusion)</span>
              </div>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-sky-300 break-words min-h-[60px]">
                {substituted || "—"}
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400">
              استبدال كل حرف بإزاحة k={subShift} لكسر العلاقة الخطية
            </div>
          </div>

          {/* Stage 3: Permutation (Diffusion) */}
          <div className="bg-[#111827] border border-emerald-500/30 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                  المرحلة 2: P-Box
                </span>
                <span className="text-xs font-bold text-emerald-400">الانتشار (Diffusion)</span>
              </div>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-emerald-300 font-bold break-words min-h-[60px]">
                {transposed || "—"}
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-400">
              إعادة توزيع مواقع الحروف بنمط {transKey} لنشر الأثر على كافة الكتل
            </div>
          </div>
        </div>
      </div>

      {/* Modern Cryptography Bridge note */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 text-xs text-slate-400 space-y-2">
        <h5 className="font-bold text-slate-200">لماذا الشفرات المركبة مهمة تاريخياً وعلمياً؟</h5>
        <p className="leading-relaxed">
          الشفرة التعويضية بمفردها تفشل أمام تحليل الترددات، وشفرة التبديل بمفردها تفشل لأن ترددات الحروف تبقى كما هي. ولكن عند تكرار التعويض متبوعاً بالتبديل لعدة جولات (Rounds)، تنتشر إحصائيات النص الأصلي بصورة معقدة جداً، وهو ما ألهم هورست فايستل (Horst Feistel) في معايير تشفير الكتل الحديثة مثل DES.
        </p>
      </div>
    </div>
  );
}

