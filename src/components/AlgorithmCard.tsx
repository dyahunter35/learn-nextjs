import Link from "next/link";
import type { Algorithm } from "@/data/algorithms";

export function AlgorithmCard({ algorithm }: { algorithm: Algorithm }) {
  return (
    <article className="algorithm-card" data-color={algorithm.color}>
      <div className="algorithm-card-top">
        <div>
          <h4>{algorithm.title}</h4>
          <span className="english">{algorithm.english}</span>
        </div>
        <span className="sidebar-dot" aria-hidden="true" />
      </div>
      <p>{algorithm.summary}</p>
      <div className="card-links" aria-label={`صفحات ${algorithm.title}`}>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}`}>الشرح</Link>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}/simulation`}>جرّب المحاكاة</Link>
        <Link className="mini-link" href={`/algorithms/${algorithm.slug}/code`}>الكود</Link>
      </div>
    </article>
  );
}
