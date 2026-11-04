import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return <><SiteHeader /><main className="catalog-section"><h1>الصفحة غير موجودة</h1><p>قد يكون الرابط قديمًا أو أن الصفحة نُقلت.</p><Link className="button-primary" href="/">العودة إلى المقرر</Link></main></>;
}
