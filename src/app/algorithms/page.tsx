import type { Metadata } from "next";
import { Catalogue } from "@/components/Catalogue";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "مكتبة الخوارزميات" };

export default function AlgorithmsPage() {
  return <><SiteHeader /><main className="catalog-section"><Catalogue /></main><footer className="site-footer">مقرر الحاسوب</footer></>;
}
