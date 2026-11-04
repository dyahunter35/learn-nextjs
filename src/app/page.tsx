"use client";
import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { SiteHeader } from "@/components/SiteHeader";
import { algorithms } from "@/data/algorithms";
import { useLanguage } from "@/components/LanguageProvider";

const bars = [
  { value: 18, height: 17, state: "" },
  { value: 42, height: 39, state: "current" },
  { value: 31, height: 29, state: "" },
  { value: 54, height: 51, state: "" },
  { value: 24, height: 23, state: "" },
  { value: 67, height: 63, state: "done" },
];

export default function HomePage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-kicker">{en ? "Computer Science · High school" : "مقرر الحاسوب · الصف الثالث الثانوي"}</span>
              <h1>{en ? <>Understand the idea,<br /><span>then see it work.</span></> : <>افهم الفكرة،<br /><span>وشاهدها تعمل.</span></>}</h1>
              <p>{en ? "Learn algorithms and data structures through clear explanations, interactive simulations, and code examples." : "تعلّم الخوارزميات وهياكل البيانات من خلال شرح واضح، محاكاة تفاعلية، وأمثلة كود تقدر ترجع لها في أي وقت."}</p>
              <div className="hero-actions">
                <Link className="button-primary" href="#library">{en ? "Start learning" : "ابدأ التعلّم"} <span aria-hidden="true">←</span></Link>
                <Link className="button-secondary" href="/algorithms">{en ? "Browse all topics" : "استعرض كل الموضوعات"}</Link>
                <Link className="button-secondary border-sky-500/50 text-sky-400 bg-slate-900/40 hover:bg-slate-800" href="/cryptography">
                  {en ? "🔐 Cryptography Lab" : "🔐 مختبر التشفير ومسرح التاريخ"}
                </Link>
              </div>
              <div className="hero-note">{en ? `${algorithms.length} topics · explanations, code, and simulations` : `${algorithms.length} موضوعًا تعليميًا · شرح وكود ومحاكاة لكل موضوع`}</div>
            </div>
            <div className="preview-board" aria-label="مثال بصري لمقارنة عناصر المصفوفة أثناء الترتيب">
              <div className="preview-top"><strong>{en ? "Sorting values" : "ترتيب العناصر"}</strong><span>{en ? "Compare values one step at a time" : "مقارنة رقمين في كل خطوة"}</span></div>
              <div className="preview-array" aria-hidden="true">
                {bars.map((bar, index) => <div className="preview-item" key={index}><div className={`preview-bar${bar.state ? ` is-${bar.state}` : ""}`} style={{ height: `${bar.height}%` }} /><small>{bar.value}</small></div>)}
              </div>
              <div className="preview-legend"><span><i className="legend-dot current" />{en ? "Comparing" : "قيد المقارنة"}</span><span><i className="legend-dot done" />{en ? "Sorted" : "اكتمل ترتيبه"}</span><span><i className="legend-dot" />{en ? "Waiting" : "بانتظار دوره"}</span></div>
            </div>
          </div>
        </section>
        <div className="catalog-section"><Catalogue /></div>
      </main>
      <footer className="site-footer">{en ? <>Computer Science · Learn by exploring each idea <strong>step by step</strong></> : <>مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></>}</footer>
    </>
  );
}
