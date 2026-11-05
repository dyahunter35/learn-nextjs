"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AiOverviewPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [manhattanExample, setManhattanExample] = useState({ r1: 1, c1: 1, r2: 5, c2: 7 });

  const dr = Math.abs(manhattanExample.r1 - manhattanExample.r2);
  const dc = Math.abs(manhattanExample.c1 - manhattanExample.c2);
  const manhattanDist = (dr + dc) * 10;
  const euclideanDist = Math.round(Math.sqrt(dr * dr + dc * dc) * 10);

  const modules = [
    {
      num: "01",
      title: "خوارزمية البحث الذكي A* والمتاهات",
      enTitle: "A* Pathfinding & Maze Visualizer",
      href: "/ai/pathfinding/",
      color: "cyan",
      badge: "دوال إرشادية Heuristics",
      desc: "استكشف كيفية توجيه البحث باستخدام المعادلة f(n) = g(n) + h(n). جرّب الدوال الإرشادية، أنشئ متاهات عشوائية معقدة بضغطة زر، وقارن مسارات الوصول للهدف لحظياً.",
      features: [
        "Interactive Wall & Obstacle Grid",
        "Manhattan & Euclidean Heuristics",
        "Randomized Recursive Maze Generator",
        "Step-by-Step Path & Node Animation",
      ],
    },
    {
      num: "02",
      title: "الألعاب التنافسية وشجرة Minimax",
      enTitle: "Adversarial Search & Minimax",
      href: "/ai/minimax/",
      color: "violet",
      badge: "تقليم ألفا-بيتا Alpha-Beta",
      desc: "تحدَّ ذكاءً اصطناعياً لا يمكن هزيمته! شاهد كيف يقيم الحاسوب كل حركة مستقبلية، وكيف يستبعد فروعاً كاملة من شجرة البحث باستخدام تقليم ألفا-بيتا لتوفير زمن المعالجة.",
      features: [
        "Unbeatable AI Tic-Tac-Toe Engine",
        "Alpha-Beta Branch Pruning Counter",
        "Visual Game Tree & Scoring Matrix",
        "AI vs Human & AI vs AI Modes",
      ],
    },
    {
      num: "03",
      title: "محاكي الشبكات العصبية والبرسيبترون",
      enTitle: "Perceptron & Neural Classifier",
      href: "/ai/neural/",
      color: "emerald",
      badge: "الفصل الخطي Decision Boundary",
      desc: "تعرف على النواة الأولى للتعلم العميق: البرسيبترون (Perceptron). أضف نقاط بيانات ثنائية الأبعاد، درّب النموذج لحظياً، وراقب خط الفصل وهو يلتف ويتكيف ليفصل بين الأصناف.",
      features: [
        "Interactive 2D Cartesian Coordinate Plane",
        "Manual Weight (w1, w2) & Bias Sliders",
        "Step & Epoch Training with Learning Rate",
        "Live Sigmoid Probability & Loss Curve",
      ],
    },
    {
      num: "04",
      title: "التعلم الآلي وعناقيد K-Means",
      enTitle: "K-Means Clustering & Unsupervised ML",
      href: "/ai/machine-learning/",
      color: "amber",
      badge: "التعلم غير الموجّه Unsupervised",
      desc: "كيف يكتشف الذكاء الاصطناعي الأنماط بدون توجيه مسبق؟ راقب خوارزمية K-Means وهي تحرك المراكز (Centroids) وتوزع البيانات حتى تصل لحالة الاستقرار والتقارب التام.",
      features: [
        "Interactive Data Scatter Canvas",
        "Customizable K Clusters (2 to 5)",
        "Step-by-Step Centroid Re-centering",
        "Inertia & Convergence Tracking",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Mission Control Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1424] via-[#101b33] to-[#070b14] border border-[#1e293b] p-8 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 border border-violet-500/30 text-violet-400">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            منظومة الذكاء الاصطناعي والتعلم الآلي التفاعلية
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {en ? "Artificial Intelligence & ML Lab" : "المعمل التفاعلي الشامل للذكاء الاصطناعي"}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {en
              ? "Explore core AI paradigms through real-time interactive simulations: heuristic state-space search (A*), decision theory in competitive gaming (Minimax with Alpha-Beta), single-layer neural classification (Perceptron), and unsupervised data clustering (K-Means)."
              : "منصة تعليمية متقدمة تغطي أسس الذكاء الاصطناعي التأسيسي عبر المحاكاة البصرية الحية: خوارزميات البحث الذكي وتوجيه الروبوتات (A*)، اتخاذ القرارات في الألعاب التنافسية (Minimax)، تصنيف البيانات بالخلايا العصبية الاصطناعية (Perceptron)، واكتشاف الأنماط غير الموجه (K-Means)."}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/ai/pathfinding/"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-violet-950/50 transition-all flex items-center gap-2"
            >
              <span>🗺️</span>
              <span>{en ? "Launch A* Lab" : "تجربة محاكي A* للمسارات"}</span>
            </Link>

            <Link
              href="/ai/minimax/"
              className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center gap-2"
            >
              <span>🎮</span>
              <span>{en ? "Play Minimax AI" : "تحدّي خوارزمية Minimax"}</span>
            </Link>

            <Link
              href="/ai/neural/"
              className="px-5 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold text-sm transition-all flex items-center gap-2"
            >
              <span>🧠</span>
              <span>{en ? "Neural Classifier" : "الشبكات العصبية"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Interactive Benchmark & Math Visualizer */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Math Heuristic Live Card */}
        <div className="ai-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-cyan-400">HEURISTIC SEARCH</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800">f(n) = g + h</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">حساب المسافة الإرشادية</h3>
            <p className="text-xs text-slate-400 mb-4">
              احسب الفارق اللحظي بين مسافة مانهاتن (شبكية) ومسافة إقليدس (الخط المستقيم):
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
              <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">البداية A:</span>
                <span className="text-emerald-400 font-bold">({manhattanExample.r1}, {manhattanExample.c1})</span>
              </div>
              <div className="bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">الهدف B:</span>
                <span className="text-rose-400 font-bold">({manhattanExample.r2}, {manhattanExample.c2})</span>
              </div>
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between bg-slate-900/70 p-2 rounded">
                <span className="text-slate-300">مانهاتن (|Δr| + |Δc|):</span>
                <span className="text-cyan-400 font-bold">{manhattanDist}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/70 p-2 rounded">
                <span className="text-slate-300">إقليدس (√(Δr² + Δc²)):</span>
                <span className="text-violet-400 font-bold">{euclideanDist}</span>
              </div>
            </div>
          </div>
          <Link
            href="/ai/pathfinding/"
            className="mt-4 text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between group"
          >
            <span>انتقل لمحاكي المسارات الكامل</span>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>
        </div>

        {/* Minimax Decision Tree Card */}
        <div className="ai-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-violet-400">ADVERSARIAL GAME</span>
              <span className="text-xs px-2 py-0.5 rounded bg-violet-950/50 text-violet-300 border border-violet-800">α-β Cutoff</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">تقليم شجرة الاحتمالات</h3>
            <p className="text-xs text-slate-400 mb-4">
              في لعبة Tic-Tac-Toe، فضاء الحالات يبلغ 255,168 حالة محتملة. باستخدام تقليم ألفا-بيتا:
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="bg-[#0f172a] p-2 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">Minimax بدون تقليم:</span>
                <span className="text-rose-400 font-bold">~59,705 عقدة</span>
              </div>
              <div className="bg-[#0f172a] p-2 rounded-lg border border-slate-800 flex justify-between">
                <span className="text-slate-400">مع تقليم Alpha-Beta:</span>
                <span className="text-emerald-400 font-bold">~2,337 عقدة</span>
              </div>
              <div className="bg-emerald-950/30 border border-emerald-500/20 p-2 rounded text-emerald-300 text-center text-[11px]">
                توفير أكثر من 96% من الحسابات مع نفس النتيجة المثالية!
              </div>
            </div>
          </div>
          <Link
            href="/ai/minimax/"
            className="mt-4 text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center justify-between group"
          >
            <span>العب ضد Minimax وشاهد التقليم</span>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>
        </div>

        {/* Neural Decision Plane Card */}
        <div className="ai-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-emerald-400">NEURAL LEARNING</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-800">w·x + b = 0</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">معادلة خط القرار للبرسيبترون</h3>
            <p className="text-xs text-slate-400 mb-4">
              الخلية العصبية تحسب المجموع الموزون، والحد الفاصل بين الفئتين هو الخط المستقيم:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-lg border border-slate-800 text-center font-mono text-xs text-emerald-300 mb-3">
              x₂ = -(w₁ / w₂)·x₁ - (b / w₂)
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              تغيير الأوزان $w_1, w_2$ يدير ميل الخط، بينما الانحياز $b$ ينقل الخط للأعلى والأسفل.
            </p>
          </div>
          <Link
            href="/ai/neural/"
            className="mt-4 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between group"
          >
            <span>افتح محاكي تدريب الخلية العصبية</span>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>
        </div>
      </section>

      {/* Main 4 Interactive AI Modules */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-black text-white">
              {en ? "Core AI & ML Modules" : "وحدات ومعامل الذكاء الاصطناعي"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              اختر أحد المعامل التفاعلية الأربعة لبدء التجربة والتعلم العملي
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            4 INTERACTIVE LABS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m) => (
            <div
              key={m.num}
              className="ai-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-600/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-violet-400 transition-colors">
                      {m.num}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                      {m.badge}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 uppercase">
                    {m.enTitle.split(" ")[0]}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1 group-hover:text-violet-300 transition-colors">
                  {en ? m.enTitle : m.title}
                </h3>
                <span className="text-xs text-slate-400 block mb-3 font-mono">
                  {en ? m.title : m.enTitle}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {m.desc}
                </p>

                <div className="space-y-1.5 mb-6">
                  {m.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={m.href}
                className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-violet-600 text-white font-bold text-xs text-center border border-slate-700/80 hover:border-violet-500 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{en ? "Open Interactive Lab" : "دخول المعمل التفاعلي"}</span>
                <span className="text-sm">←</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

