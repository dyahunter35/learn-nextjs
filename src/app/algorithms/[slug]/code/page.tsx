import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyExperience } from "@/components/LegacyExperience";
import { SiteShell } from "@/components/SiteShell";
import { getAlgorithm } from "@/data/algorithms";
import { getLegacyDocument, legacyStaticParams } from "@/lib/legacy-pages";

export const dynamicParams = false;
export function generateStaticParams() { return legacyStaticParams(); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const algorithm = getAlgorithm(slug);
  return algorithm ? { title: `${algorithm.title} — الكود البرمجي` } : {};
}

export default async function CodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const algorithm = getAlgorithm(slug);
  if (!algorithm) notFound();
  const document = await getLegacyDocument(slug, "code");
  return <SiteShell algorithm={algorithm} pageKind="الكود البرمجي"><LegacyExperience title={`كود ${algorithm.title}`} srcDoc={document.html} /></SiteShell>;
}
