"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  aStarSearch,
  generateMaze,
  heuristic,
  HeuristicType,
  AStarResult,
} from "@/lib/ai-engine";
import { useLanguage } from "@/components/LanguageProvider";

const ROWS = 15;
const COLS = 27;

export default function AStarPathfindingPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [start, setStart] = useState<[number, number]>([7, 3]);
  const [end, setEnd] = useState<[number, number]>([7, 23]);
  const [walls, setWalls] = useState<Set<string>>(() => {
    const initialWalls = new Set<string>();
    // Pre-populate a subtle test barrier
    for (let r = 3; r <= 11; r++) {
      initialWalls.add(`${r},13`);
    }
    return initialWalls;
  });

  const [heuristicType, setHeuristicType] = useState<HeuristicType>("manhattan");
  const [paintMode, setPaintMode] = useState<"wall" | "start" | "end">("wall");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [speed, setSpeed] = useState<number>(25); // ms per step

  const [result, setResult] = useState<AStarResult | null>(null);
  const [visibleVisited, setVisibleVisited] = useState<Set<string>>(new Set());
  const [visiblePath, setVisiblePath] = useState<Set<string>>(new Set());
  const [execTime, setExecTime] = useState<number>(0);

  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const solveInstantly = useCallback(
    (currentWalls = walls, currentStart = start, currentEnd = end, currentH = heuristicType) => {
      const t0 = performance.now();
      const res = aStarSearch(ROWS, COLS, currentStart, currentEnd, currentWalls, currentH);
      const t1 = performance.now();
      setExecTime(Math.round((t1 - t0) * 100) / 100);
      setResult(res);
      setVisibleVisited(new Set(res.visitedOrder.map(([r, c]) => `${r},${c}`)));
      setVisiblePath(new Set(res.path.map(([r, c]) => `${r},${c}`)));
    },
    [walls, start, end, heuristicType]
  );

  const clearVisualization = () => {
    if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    setAnimating(false);
    setVisibleVisited(new Set());
    setVisiblePath(new Set());
    setResult(null);
  };

  const handleStartAnimation = () => {
    clearVisualization();
    setAnimating(true);

    const t0 = performance.now();
    const res = aStarSearch(ROWS, COLS, start, end, walls, heuristicType);
    const t1 = performance.now();
    setExecTime(Math.round((t1 - t0) * 100) / 100);
    setResult(res);

    let visitIndex = 0;
    const visitedSet = new Set<string>();

    animationTimerRef.current = setInterval(() => {
      if (visitIndex < res.visitedOrder.length) {
        const [r, c] = res.visitedOrder[visitIndex];
        visitedSet.add(`${r},${c}`);
        setVisibleVisited(new Set(visitedSet));
        visitIndex++;
      } else {
        // Visited done, now draw the path
        if (animationTimerRef.current) clearInterval(animationTimerRef.current);
        const pathSet = new Set<string>();
        let pathIdx = 0;
        animationTimerRef.current = setInterval(() => {
          if (pathIdx < res.path.length) {
            const [pr, pc] = res.path[pathIdx];
            pathSet.add(`${pr},${pc}`);
            setVisiblePath(new Set(pathSet));
            pathIdx++;
          } else {
            if (animationTimerRef.current) clearInterval(animationTimerRef.current);
            setAnimating(false);
          }
        }, speed * 2);
      }
    }, speed);
  };

  const handleCellClick = (r: number, c: number) => {
    if (animating) return;
    const cellKey = `${r},${c}`;

    if (paintMode === "start") {
      if (cellKey === `${end[0]},${end[1]}` || walls.has(cellKey)) return;
      setStart([r, c]);
      clearVisualization();
      return;
    }
    if (paintMode === "end") {
      if (cellKey === `${start[0]},${start[1]}` || walls.has(cellKey)) return;
      setEnd([r, c]);
      clearVisualization();
      return;
    }

    // Wall toggle
    if (cellKey === `${start[0]},${start[1]}` || cellKey === `${end[0]},${end[1]}`) return;
    const updated = new Set(walls);
    if (updated.has(cellKey)) {
      updated.delete(cellKey);
    } else {
      updated.add(cellKey);
    }
    setWalls(updated);
    clearVisualization();
  };

  const handleCellMouseEnter = (r: number, c: number) => {
    if (!isMouseDown || animating || paintMode !== "wall") return;
    const cellKey = `${r},${c}`;
    if (cellKey === `${start[0]},${start[1]}` || cellKey === `${end[0]},${end[1]}`) return;
    const updated = new Set(walls);
    updated.add(cellKey);
    setWalls(updated);
  };

  const handleGenerateMaze = () => {
    clearVisualization();
    const newWalls = generateMaze(ROWS, COLS, start, end);
    setWalls(newWalls);
  };

  const handleClearWalls = () => {
    clearVisualization();
    setWalls(new Set());
  };

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    };
  }, []);

  return (
    <div
      className="space-y-8"
      onMouseUp={() => setIsMouseDown(false)}
      onTouchEnd={() => setIsMouseDown(false)}
    >
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/ai/" className="hover:text-white transition-colors">{en ? "AI Lab" : "معمل الذكاء الاصطناعي"}</Link>
        <span>/</span>
        <span className="text-violet-400 font-bold">{en ? "A* Pathfinding" : "البحث الذكي A*"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🗺️</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "A* Search & Pathfinding Lab" : "محاكي البحث الذكي A* وتخطيط المسارات"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "A* is the benchmark state-space graph traversal algorithm powering robotics, GPS mapping, and game navigation. It guides the exploration frontier using f(n) = g(n) + h(n)."
              : "خوارزمية A* هي المعيار الذهبي لتوجيه الروبوتات وتطبيقات الخرائط والألعاب. تجمع بين خوارزمية ديكسترا لضمان أقل تكلفة، والدوال الإرشادية لتوجيه البحث نحو الهدف مباشرة."}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0f172a] p-3 rounded-2xl border border-slate-800 text-xs font-mono">
          <div className="text-center px-2">
            <span className="text-slate-400 block text-[10px]">المعادلة الأساسية</span>
            <span className="text-cyan-400 font-bold text-sm">f(n) = g(n) + h(n)</span>
          </div>
        </div>
      </div>

      {/* Control Station */}
      <div className="ai-card p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleStartAnimation}
              disabled={animating}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-violet-950/40 transition-all"
            >
              <span>▶</span>
              <span>{animating ? (en ? "Searching..." : "قيد الاستكشاف...") : (en ? "Step Simulation" : "محاكاة متحركة خطوة بخطوة")}</span>
            </button>

            <button
              onClick={() => solveInstantly()}
              disabled={animating}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              ⚡ {en ? "Solve Instantly" : "حل فوري لحظي"}
            </button>

            <button
              onClick={handleGenerateMaze}
              disabled={animating}
              className="px-3.5 py-2 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/80 font-bold text-xs transition-colors"
            >
              🌀 {en ? "Generate Maze" : "توليد متاهة عشوائية"}
            </button>

            <button
              onClick={handleClearWalls}
              disabled={animating}
              className="px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 font-medium text-xs border border-slate-700 transition-colors"
            >
              🧹 {en ? "Clear Walls" : "مسح الجدران"}
            </button>
          </div>

          {/* Heuristic Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-bold">{en ? "Heuristic:" : "الدالة الإرشادية:"}</span>
            <select
              value={heuristicType}
              onChange={(e) => {
                const val = e.target.value as HeuristicType;
                setHeuristicType(val);
                clearVisualization();
              }}
              disabled={animating}
              className="bg-[#0f172a] text-slate-200 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-violet-500 font-bold"
            >
              <option value="manhattan">مانهاتن Manhattan (|Δx| + |Δy|)</option>
              <option value="euclidean">إقليدس Euclidean (خط مستقيم)</option>
              <option value="chebyshev">تشيبيشيف Chebyshev (قطري)</option>
            </select>
          </div>
        </div>

        {/* Sub-bar: Draw Mode & Speed */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold">{en ? "Mode:" : "وضع المؤشر:"}</span>
            <div className="inline-flex rounded-lg border border-slate-800 bg-[#0f172a] p-1 gap-1">
              <button
                type="button"
                onClick={() => setPaintMode("wall")}
                className={`px-3 py-1 rounded-md font-bold transition-colors ${
                  paintMode === "wall" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                🧱 {en ? "Walls" : "جدران وعوائق"}
              </button>
              <button
                type="button"
                onClick={() => setPaintMode("start")}
                className={`px-3 py-1 rounded-md font-bold transition-colors ${
                  paintMode === "start" ? "bg-emerald-600 text-white" : "text-emerald-400 hover:text-white"
                }`}
              >
                🟢 {en ? "Move Start" : "نقل البداية"}
              </button>
              <button
                type="button"
                onClick={() => setPaintMode("end")}
                className={`px-3 py-1 rounded-md font-bold transition-colors ${
                  paintMode === "end" ? "bg-rose-600 text-white" : "text-rose-400 hover:text-white"
                }`}
              >
                🔴 {en ? "Move Target" : "نقل الهدف"}
              </button>
            </div>
          </div>

          {/* Speed slider */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">{en ? "Speed:" : "سرعة المحاكاة:"}</span>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-24 accent-violet-500"
            />
            <span className="font-mono text-slate-400 text-[11px]">{speed}ms</span>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> البداية</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500" /> الهدف</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#1e293b]" /> جدار</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#0284c7]" /> مستكشف</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#fbbf24]" /> المسار الأقصر</span>
          </div>
        </div>
      </div>

      {/* Real-time Interactive Grid */}
      <div className="ai-card p-4 sm:p-6 overflow-x-auto">
        <div
          className="astar-grid mx-auto"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(18px, 1fr))`,
            maxWidth: "960px",
          }}
          onMouseDown={() => setIsMouseDown(true)}
        >
          {Array.from({ length: ROWS }).map((_, r) =>
            Array.from({ length: COLS }).map((_, c) => {
              const key = `${r},${c}`;
              const isStart = r === start[0] && c === start[1];
              const isEnd = r === end[0] && c === end[1];
              const isWall = walls.has(key);
              const isPath = visiblePath.has(key);
              const isVisited = visibleVisited.has(key);

              let cellClass = "astar-cell";
              if (isStart) cellClass += " is-start";
              else if (isEnd) cellClass += " is-end";
              else if (isPath) cellClass += " is-path";
              else if (isVisited) cellClass += " is-open";
              else if (isWall) cellClass += " is-wall";

              return (
                <div
                  key={key}
                  className={cellClass}
                  onClick={() => handleCellClick(r, c)}
                  onMouseEnter={() => handleCellMouseEnter(r, c)}
                  title={`[${r}, ${c}]`}
                >
                  {isStart ? "S" : isEnd ? "E" : isPath ? "★" : ""}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Metrics & Analytics Board */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="ai-card p-4 text-center">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">حالة البحث</span>
          <span className={`text-base font-bold ${
            result?.success ? "text-emerald-400" : result ? "text-rose-400" : "text-slate-300"
          }`}>
            {result?.success ? "تم الوصول للهدف بنجاح ✓" : result ? "المسار مسدود تماماً ✕" : "جاهز للبدء"}
          </span>
        </div>

        <div className="ai-card p-4 text-center">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">العقد المستكشفة</span>
          <span className="text-xl font-black text-cyan-400 font-mono">
            {visibleVisited.size}
          </span>
          <span className="text-[10px] text-slate-500 block">عقدة في فضاء الحالة</span>
        </div>

        <div className="ai-card p-4 text-center">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">طول المسار الأمثل</span>
          <span className="text-xl font-black text-amber-400 font-mono">
            {result?.path.length || 0}
          </span>
          <span className="text-[10px] text-slate-500 block">خطوة (Cost: {result?.cost || 0})</span>
        </div>

        <div className="ai-card p-4 text-center">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">زمن الحساب</span>
          <span className="text-xl font-black text-violet-400 font-mono">
            {execTime}ms
          </span>
          <span className="text-[10px] text-slate-500 block">معادلة {heuristicType}</span>
        </div>
      </div>

      {/* Theory & Math Deep Dive Card */}
      <section className="ai-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📐</span>
          <h2 className="text-lg font-bold text-white">الأساس الرياضي لخوارزمية A*</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-bold text-cyan-400 text-sm">مكونات الدالة التكلفية:</h3>
            <ul className="space-y-2 list-disc list-inside text-slate-300">
              <li>
                <strong>$g(n)$</strong>: التكلفة الفعلية المؤكدة للانتقال من نقطة البداية إلى العقدة الحالية $n$.
              </li>
              <li>
                <strong>$h(n)$</strong>: التقدير الاستدلالي (Heuristic) للتكلفة المتبقية من العقدة $n$ للهدف.
              </li>
              <li>
                <strong>$f(n) = g(n) + h(n)$</strong>: التكلفة الكلية المتوقعة للمسار الكامل المار عبر $n$.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-emerald-400 text-sm">شرط المقبولية (Admissibility):</h3>
            <p>
              لكي تضمن خوارزمية $A^*$ الوصول إلى <strong>المسار الأقصر مطلقاً</strong>، يجب أن تكون الدالة الإرشادية $h(n)$ مقبولة، أي أنها لا تبالغ أبداً في تقدير المسافة الحقيقية:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center font-mono text-emerald-300">
              h(n) ≤ h*(n)
            </div>
            <p className="text-[11px] text-slate-400">
              حيث $h^*(n)$ هي التكلفة الحقيقية الفعلية. مسافة مانهاتن مقبولة في الشبكات ذات الحركات الأفقية والرأسية، ومسافة إقليدس مقبولة في الفضاءات الإقليدية المفتوحة.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

