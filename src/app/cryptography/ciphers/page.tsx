"use client";

import { useState } from "react";
import Link from "next/link";
import { CaesarLab } from "@/components/cryptography/ciphers/CaesarLab";
import { MonoalphabeticLab } from "@/components/cryptography/ciphers/MonoalphabeticLab";
import { AffineLab } from "@/components/cryptography/ciphers/AffineLab";
import { PlayfairLab } from "@/components/cryptography/ciphers/PlayfairLab";
import { HillLab } from "@/components/cryptography/ciphers/HillLab";
import { VigenereLab } from "@/components/cryptography/ciphers/VigenereLab";
import { TranspositionLab } from "@/components/cryptography/ciphers/TranspositionLab";
import { ProductCipherLab } from "@/components/cryptography/ciphers/ProductCipherLab";
import { OtpLab } from "@/components/cryptography/ciphers/OtpLab";

type CipherKey =
  | "caesar"
  | "monoalphabetic"
  | "affine"
  | "playfair"
  | "hill"
  | "vigenere"
  | "transposition"
  | "product"
  | "otp";

interface CipherMeta {
  key: CipherKey;
  title: string;
  enTitle: string;
  type: string;
  era: string;
}

const CIPHERS: CipherMeta[] = [
  { key: "caesar", title: "شفرة قيصر", enTitle: "Caesar Cipher", type: "تعويض أحادي (Shift)", era: "روما القديمة (100 ق.م)" },
  { key: "monoalphabetic", title: "التعويض أحادي الأبجدية", enTitle: "Monoalphabetic Substitution", type: "تبديل عشوائي (26!)", era: "العصور الوسطى" },
  { key: "affine", title: "شفرة أفين", enTitle: "Affine Cipher", type: "تعويض خطي موديلو (ax+b)", era: "رياضيات القرن الـ19" },
  { key: "playfair", title: "شفرة بلايفير", enTitle: "Playfair Cipher", type: "تعويض ثنائي (5×5 Digram)", era: "حرب البوير والحرب العالمية الأولى" },
  { key: "hill", title: "شفرة هيل", enTitle: "Hill Cipher", type: "مصفوفات جبرية كتلية", era: "1929 (ليستر هيل)" },
  { key: "vigenere", title: "شفرة فيجينير", enTitle: "Vigenère Cipher", type: "متعدد الأبجديات (Polyalphabetic)", era: "عصر النهضة (1553)" },
  { key: "transposition", title: "التبديل الصفّي", enTitle: "Row Transposition", type: "تبديل مواضع (Permutation)", era: "الحرب العالمية الأولى" },
  { key: "product", title: "الشفرات المركبة", enTitle: "Product Ciphers", type: "تعويض + تبديل (SPN)", era: "شانون وفايستل (1949-1970)" },
  { key: "otp", title: "لوحة المرة الواحدة", enTitle: "One-Time Pad / Vernam", type: "أمان مطلق غير قابل للكسر (XOR)", era: "1917 (جيلبرت فيرنام)" },
];

export default function CiphersPage() {
  const [activeCipher, setActiveCipher] = useState<CipherKey>("caesar");

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Title */}
      <div>
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/cryptography" className="hover:text-slate-200">لوحة التحكم</Link>
          <span>/</span>
          <span className="text-sky-400 font-semibold">معامل الشفرات الكلاسيكية</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              معامل الشفرات الكلاسيكية والتاريخية
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              تجرِبة تفاعلية حية لكافة الشفرات التاريخية من روما القديمة إلى نظرية المعلومات الحديثة مع الحساب الرياضي الفوري.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-400">
            <span>مجموع الشفرات:</span>
            <span className="text-sky-400 font-bold">9 خوارزميات نشطة</span>
          </div>
        </div>
      </div>

      {/* Horizontal Cipher Selector Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 crypto-scroll border-b border-[#1f2d48]">
        {CIPHERS.map((item) => {
          const isActive = activeCipher === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveCipher(item.key)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-start gap-0.5 border ${
                isActive
                  ? "bg-sky-500/15 border-sky-400/80 text-sky-300 shadow-md shadow-sky-950/50"
                  : "bg-[#111827] border-[#1f2d48] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <span className="font-bold">{item.title}</span>
              <span className="text-[10px] text-slate-500 font-mono">{item.enTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Active Lab Component */}
      <div className="min-h-[500px]">
        {activeCipher === "caesar" && <CaesarLab />}
        {activeCipher === "monoalphabetic" && <MonoalphabeticLab />}
        {activeCipher === "affine" && <AffineLab />}
        {activeCipher === "playfair" && <PlayfairLab />}
        {activeCipher === "hill" && <HillLab />}
        {activeCipher === "vigenere" && <VigenereLab />}
        {activeCipher === "transposition" && <TranspositionLab />}
        {activeCipher === "product" && <ProductCipherLab />}
        {activeCipher === "otp" && <OtpLab />}
      </div>
    </div>
  );
}

