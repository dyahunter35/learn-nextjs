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
  return algorithm ? { title: `${algorithm.title} — المحاكاة` } : {};
}

export default async function SimulationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const algorithm = getAlgorithm(slug);
  if (!algorithm) notFound();
  const document = await getLegacyDocument(slug, "simulation");
  return <SiteShell algorithm={algorithm} pageKind="محاكاة"><LegacyExperience title={`محاكاة ${algorithm.title}`} srcDoc={document.html} /></SiteShell>;
}
