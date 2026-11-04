import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NativePageEffects } from "@/components/NativePageEffects";
import { SiteShell } from "@/components/SiteShell";
import { getAlgorithm } from "@/data/algorithms";
import { algorithmStaticParams } from "@/data/algorithms";
import { getPageAssets } from "@/lib/legacy-pages";
import { getNativePage } from "@/content/generated";

export const dynamicParams = false;
export function generateStaticParams() { return algorithmStaticParams(); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const algorithm = getAlgorithm(slug);
  return algorithm ? { title: `${algorithm.title} — الكود البرمجي` } : {};
}

export default async function CodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const algorithm = getAlgorithm(slug);
  if (!algorithm) notFound();
  const document = await getPageAssets(slug, "code");
  return <SiteShell algorithm={algorithm} pageKind="الكود البرمجي"><NativePageEffects scripts={document.scripts} stylesheets={document.stylesheets}>{getNativePage(slug, "code")}</NativePageEffects></SiteShell>;
}
