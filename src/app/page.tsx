"use client";
import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { SiteHeader } from "@/components/SiteHeader";
import { DeveloperCard } from "@/components/DeveloperCard";
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

  const labs = [
    {
      id: "trees",
      title: en ? "Advanced Tree Data Structures" : "أشجار وهياكل البيانات المتقدمة",
      desc: en
        ? "Interactive self-balancing AVL trees with live rotations (LL, RR, LR, RL), Binary Max-Heap priority queues, and Prefix Trie autocomplete."
        : "محاكاة بصرية تفاعلية لأشجار AVL المتوازنة ذاتياً وحساب عوامل التوازن مع الدوران الحي، وكومة Max-Heap، وشجرة البادئات Trie للإكمال التلقائي.",
      icon: "🌳",
      href: "/trees/",
      badge: en ? "Trees & Heaps" : "أشجار وكومة",
      color: "emerald",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-500/30",
    },
    {
      id: "compression",
      title: en ? "Data Compression & Coding" : "ضغط البيانات والترميز",
      desc: en
        ? "Step-by-step adaptive dictionary compression (LZW) used in GIF/ZIP, Run-Length Encoding (RLE), and real-time compression ratio analytics."
        : "اكتشف بناء القاموس التكيفي في خوارزمية LZW مع فك الضغط الموثوق، وترميز طول التشغيل RLE مع حساب نسب تقليص الحجم والوفرة البتية.",
      icon: "🗜️",
      href: "/compression/",
      badge: en ? "LZW & RLE" : "بناء القاموس والترميز",
      color: "cyan",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      border: "border-cyan-500/30",
    },
    {
      id: "geometry",
      title: en ? "Computational Geometry Lab" : "الهندسة الحسابية (Graham Scan)",
      desc: en
        ? "Interactive 2D Canvas for Convex Hull Graham Scan O(n log n), cross-product orientation tests, closest pair of points, and Shoelace polygon area."
        : "لوحة تفاعلية ثنائية الأبعاد لبناء الغلاف المحدب بخوارزمية غراهام سكان، واختبارات الاتجاه عبر الضرب الاتجاهي، مع حساب أقرب زوج نقاط ومساحة المضلع.",
      icon: "📐",
      href: "/geometry/",
      badge: en ? "Convex Hull" : "الغلاف المحدب",
      color: "amber",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      border: "border-amber-500/30",
    },
    {
      id: "hashing",
      title: en ? "Cryptographic Hashing & Avalanche" : "دوال التجزئة والانهيار الجليدي",
      desc: en
        ? "Bit-by-bit SHA-256 analysis, 16×16 bit flip matrix for measuring the Strict Avalanche Criterion (SAC ~50%), and HMAC-SHA256 signatures."
        : "تحليل دقيق لخوارزمية التجزئة SHA-256، وقياس ظاهرة تأثير الانهيار الجليدي (SAC) عبر مصفوفة بتات 16×16 مع مولد توقيعات HMAC المشفرة.",
      icon: "🔐",
      href: "/cryptography/hashing/",
      badge: en ? "SHA-256 & HMAC" : "تجزئة وتوقيع أمني",
      color: "rose",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      border: "border-rose-500/30",
    },
    {
      id: "ai",
      title: en ? "Artificial Intelligence & ML Lab" : "معمل الذكاء الاصطناعي وتعلم الآلة",
      desc: en
        ? "Real-time A* pathfinding with custom mazes, Minimax with Alpha-Beta pruning, Perceptron neural boundary classifier, and K-Means clustering."
        : "تطبيقات الذكاء الاصطناعي الحية: استكشاف مسار A* وتوليد المتاهات، ومحرك Minimax بأشجار القرار وتقليم ألفا-بيتا، والعصبون الاصطناعي، وتجميع K-Means.",
      icon: "🤖",
      href: "/ai/",
      badge: en ? "AI & Neural" : "ذكاء اصطناعي وتعلم آلة",
      color: "violet",
      bgGlow: "from-violet-500/10 to-indigo-500/5",
      border: "border-violet-500/30",
    },
  ];

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
                <Link className="button-secondary" href="/algorithms/">{en ? "Browse all topics" : "استعرض كل الموضوعات"}</Link>
                <Link className="button-secondary border-violet-500/50 text-violet-400 bg-violet-950/40 hover:bg-violet-900/50" href="/ai/">
                  {en ? "🤖 AI & ML Lab" : "🤖 معمل الذكاء الاصطناعي"}
                </Link>
                <Link className="button-secondary border-sky-500/50 text-sky-400 bg-slate-900/40 hover:bg-slate-800" href="/cryptography/">
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

        {/* Featured Advanced Interactive Labs Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {en ? "Next-Gen Computer Science Labs" : "المعامل التفاعلية المتقدمة لعلوم الحاسوب"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {en ? "Interactive Algorithmic Playgrounds" : "معامل برمجية تفاعلية تحاكي الواقع"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
                {en
                  ? "Explore self-balancing trees, dictionary compression, geometric algorithms, SHA-256 bit avalanche effects, and artificial intelligence models."
                  : "مختبرات تطبيقية تفاعلية تمكّنك من التلاعب بالبيانات ورؤية النتائج لحظياً مع القوانين الرياضية الدقيقة."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className={`group block p-6 rounded-2xl bg-gradient-to-br ${lab.bgGlow} bg-slate-900/90 border ${lab.border} hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:scale-110 transition-transform shadow-inner">
                    {lab.icon}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 font-mono">
                    {lab.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {lab.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {lab.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                  <span>{en ? "Launch Interactive Lab" : "افتح المعمل التفاعلي"}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="catalog-section" id="library"><Catalogue /></div>
        <DeveloperCard />
      </main>
      <footer className="site-footer">
        <div>
          {en ? (
            <>Computer Science · Learn by exploring each idea <strong>step by step</strong></>
          ) : (
            <>مقرر الحاسوب · صُمّم ليساعدك على فهم الفكرة بتجربتها <strong>خطوةً خطوة</strong></>
          )}
        </div>
        <div className="mt-2 text-xs text-slate-500">
          {en ? (
            <>Designed & Developed by <a href="#developer" className="text-amber-500 font-semibold hover:underline">Deyaa Albushra Mohamed</a> &copy; 2026</>
          ) : (
            <>تم تصميم وتطوير هذه المنصة بواسطة <a href="#developer" className="text-amber-500 font-semibold hover:underline">ضياء البشرى محمد</a> &copy; 2026</>
          )}
        </div>
      </footer>
    </>
  );
}
