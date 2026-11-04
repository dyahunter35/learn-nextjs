import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { SiteHeader } from "@/components/SiteHeader";
import { algorithms } from "@/data/algorithms";

const bars = [
  { value: 18, height: 17, state: "" },
  { value: 42, height: 39, state: "current" },
  { value: 31, height: 29, state: "" },
  { value: 54, height: 51, state: "" },
  { value: 24, height: 23, state: "" },
  { value: 67, height: 63, state: "done" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-kicker">مقرر الحاسوب · الصف الثالث الثانوي</span>
              <h1>افهم الفكرة،<br /><span>وشاهدها تعمل.</span></h1>
              <p>تعلّم الخوارزميات وهياكل البيانات من خلال شرح واضح، محاكاة تفاعلية، وأمثلة كود تقدر ترجع لها في أي وقت.</p>
              <div className="hero-actions">
                <Link className="button-primary" href="#library">ابدأ التعلّم <span aria-hidden="true">←</span></Link>
                <Link className="button-secondary" href="/algorithms">استعرض كل الموضوعات</Link>
              </div>
              <div className="hero-note">{algorithms.length} موضوعًا تعليميًا · شرح وكود ومحاكاة لكل موضوع</div>
            </div>
            <div className="preview-board" aria-label="مثال بصري لمقارنة عناصر المصفوفة أثناء الترتيب">
              <div className="preview-top"><strong>ترتيب العناصر</strong><span>مقارنة رقمين في كل خطوة</span></div>
              <div className="preview-array" aria-hidden="true">
                {bars.map((bar, index) => <div className="preview-item" key={index}><div className={`preview-bar${bar.state ? ` is-${bar.state}` : ""}`} style={{ height: `${bar.height}%` }} /><small>{bar.value}</small></div>)}
              </div>
              <div className="preview-legend"><span><i className="legend-dot current" />قيد المقارنة</span><span><i className="legend-dot done" />اكتمل ترتيبه</span><span><i className="legend-dot" />بانتظار دوره</span></div>
            </div>
          </div>
        </section>
        <div className="catalog-section"><Catalogue /></div>
      </main>
      <footer className="site-footer">مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></footer>
    </>
  );
}
