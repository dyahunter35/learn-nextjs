/* eslint-disable @next/next/no-page-custom-font -- shared App Router document head */
import type { Metadata } from "next";
import { PwaRuntime } from "@/components/PwaRuntime";
import "katex/dist/katex.min.css";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  manifest: `${basePath}/manifest.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${basePath}/icons/apple-touch-icon.png`,
  },
  appleWebApp: {
    capable: true,
    title: "Computer Science",
    statusBarStyle: "default",
  },
  title: {
    default: "مقرر الحاسوب | الخوارزميات والمحاكاة",
    template: "%s | مقرر الحاسوب",
  },
  description: "تعلّم الخوارزميات وهياكل البيانات من خلال الشرح والكود والمحاكاة التفاعلية.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body><LanguageProvider><PwaRuntime />{children}</LanguageProvider></body>
    </html>
  );
}
