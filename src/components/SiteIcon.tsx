import type { SVGProps } from "react";

type IconName = "brand" | "overview" | "simulation" | "code" | "search";

export function SiteIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "brand") return <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
    <path d="M11 11 20 20m9-9-9 9m0 0v10m0-10H9m11 0h11" {...common} />
    <circle cx="11" cy="10" r="4" fill="#fff" />
    <circle cx="29" cy="10" r="4" fill="#fbbf24" />
    <circle cx="8" cy="30" r="4" fill="#a5b4fc" />
    <circle cx="20" cy="30" r="4" fill="#fff" />
    <circle cx="32" cy="30" r="4" fill="#34d399" />
  </svg>;
  if (name === "overview") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 5.5V22m4-14h8m-8 4h8"/></svg>;
  if (name === "simulation") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M4 19V5m0 14h17"/><path d="M7 16v-4m4 4V7m4 9v-7m4 7v-3"/></svg>;
  if (name === "code") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
}
