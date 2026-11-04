import Link from "next/link";
import type { Algorithm } from "@/data/algorithms";
import { useLanguage } from "@/components/LanguageProvider";

export function AlgorithmCard({ algorithm }: { algorithm: Algorithm }) {
  const { language } = useLanguage();
  const en = language === "en";
  const summary = en ? `Explore ${algorithm.english.toLowerCase()} with a clear explanation, an interactive demonstration, and example code.` : algorithm.summary;
  return (
    <article className="algorithm-card" data-color={algorithm.color}>
      <div className="algorithm-card-top">
        <div>
          <h4>{en ? algorithm.english : algorithm.title}</h4>
          <span className="english">{algorithm.english}</span>
        </div>
        <span className="sidebar-dot" aria-hidden="true" />
      </div>
      <p>{summary}</p>
      <div className="card-links" aria-label={en ? `${algorithm.english} pages` : `صفحات ${algorithm.title}`}>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}/`}>{en ? "Overview" : "الشرح"}</Link>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}/simulation/`}>{en ? "Try simulation" : "جرّب المحاكاة"}</Link>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}/code/`}>{en ? "Code" : "الكود"}</Link>
      </div>
    </article>
  );
}
