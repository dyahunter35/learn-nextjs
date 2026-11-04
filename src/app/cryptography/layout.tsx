import type { Metadata } from "next";
import "./crypto.css";
import { CryptoHeader } from "@/components/cryptography/CryptoHeader";

export const metadata: Metadata = {
  title: "منصة التشفير التفاعلية ومسرح التاريخ | Interactive Cryptography Dashboard",
  description: "معامل تفاعلية لكافة خوارزميات التشفير الكلاسيكي، التحليل والكسر، آلة إنيجما الميكانيكية، المحاكاة التاريخية، ومختبر الإخفاء.",
};

export default function CryptographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="crypto-universe min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-sky-500 selection:text-white">
      <CryptoHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      <footer className="mt-20 border-t border-[#1f2d48] bg-[#080c14] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            منصة التشفير والتحليل التاريخي · صُممت كنموذج تفاعلي متقدم يجمع بين النظرية الرياضية والتطبيق العملي.
          </p>
          <p className="font-mono text-slate-600">
            SECURE CIPHERS · CRYPTANALYSIS · HISTORICAL BATTLES · STEGANOGRAPHY
          </p>
        </div>
      </footer>
    </div>
  );
}
