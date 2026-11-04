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
  icon: string;
}

const CIPHERS: CipherMeta[] = [
  { key: "caesar", title: "شفرة قيصر", enTitle: "Caesar Cipher", type: "إزاحة أحادية (Mod 26/28)", era: "100 ق.م", icon: "🏛️" },
  { key: "monoalphabetic", title: "التعويض الأحادي", enTitle: "Monoalphabetic", type: "تبديل عشوائي (26!)", era: "العصور الوسطى", icon: "🔀" },
  { key: "affine", title: "شفرة أفين", enTitle: "Affine Cipher", type: "تعويض خطي (ax+b)", era: "القرن الـ19", icon: "📐" },
  { key: "playfair", title: "شفرة بلايفير", enTitle: "Playfair", type: "تعويض ثنائي (5×5)", era: "1854", icon: "▦" },
  { key: "hill", title: "شفرة هيل", enTitle: "Hill Cipher", type: "مصفوفات جبرية", era: "1929", icon: "⊞" },
  { key: "vigenere", title: "شفرة فيجينير", enTitle: "Vigenère", type: "متعدد الأبجديات", era: "1553", icon: "🔠" },
  { key: "transposition", title: "التبديل الصفّي", enTitle: "Transposition", type: "تبديل مواضع", era: "1914", icon: "⇄" },
  { key: "product", title: "الشفرات المركبة", enTitle: "Product SPN", type: "تعويض + تبديل", era: "1949", icon: "⚙️" },
  { key: "otp", title: "لوحة المرة الواحدة", enTitle: "Vernam OTP", type: "أمان مطلق (XOR)", era: "1917", icon: "🔒" },
];

export default function CiphersPage() {
  const [activeCipher, setActiveCipher] = useState<CipherKey>("caesar");

  return (
    <div className="space-y-4">
      {/* Header bar: Compact title and quick stats */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Link href="/cryptography" className="hover:text-slate-200">مختبر التشفير</Link>
              <span>/</span>
              <span className="text-sky-400 font-semibold">معامل الشفرات</span>
            </nav>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              معامل الشفرات الكلاسيكية والتاريخية
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              تجربة تفاعلية مباشرة مع الحساب الرياضي الفوري والتحكم الكامل في الخطوات بدون قفز بالصفحة.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono bg-[#090d16] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-300">
              <span className="text-sky-400 font-bold">9</span> خوارزميات نشطة
            </span>
          </div>
        </div>
      </div>

      {/* Cipher Selector Tabs (Compact Grid / Pills) */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5 bg-[#0e1424] p-1.5 rounded-xl border border-[#1f2d48]">
        {CIPHERS.map((item) => {
          const isActive = activeCipher === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveCipher(item.key)}
              className={`p-2 rounded-lg text-xs transition-all flex flex-col items-center justify-center text-center border ${
                isActive
                  ? "bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md scale-[1.02]"
                  : "bg-[#111827] border-[#1f2d48] text-slate-300 hover:text-white hover:border-slate-600"
              }`}
            >
              <span className="text-sm mb-0.5">{item.icon}</span>
              <span className="font-bold truncate w-full">{item.title}</span>
              <span className={`text-[10px] font-mono truncate w-full ${isActive ? "text-slate-900 font-semibold" : "text-slate-500"}`}>
                {item.era}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Lab Component */}
      <div className="transition-all">
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
