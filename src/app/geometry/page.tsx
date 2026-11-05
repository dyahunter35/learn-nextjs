"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Point2D,
  convexHullGrahamScan,
  findClosestPair,
  orientation,
} from "@/lib/geometry-engine";
import { useLanguage } from "@/components/LanguageProvider";

const PRESET_POINTS: Point2D[] = [
  { id: 1, x: 120, y: 280 },
  { id: 2, x: 220, y: 110 },
  { id: 3, x: 380, y: 80 },
  { id: 4, x: 520, y: 160 },
  { id: 5, x: 590, y: 290 },
  { id: 6, x: 440, y: 350 },
  { id: 7, x: 260, y: 360 },
  { id: 8, x: 300, y: 220 },
  { id: 9, x: 410, y: 200 },
  { id: 10, x: 340, y: 290 },
];

export default function GeometryLabPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [points, setPoints] = useState<Point2D[]>(PRESET_POINTS);
  const [showClosestPair, setShowClosestPair] = useState<boolean>(true);
  const [nextId, setNextId] = useState<number>(11);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Compute Convex Hull and Closest Pair
  const hullResult = useMemo(() => convexHullGrahamScan(points), [points]);
  const closestPair = useMemo(() => findClosestPair(points), [points]);

  // Handle adding point on SVG click
  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // Keep within bounds
    if (x < 20 || x > 680 || y < 20 || y > 380) return;

    const newPt: Point2D = { id: nextId, x, y };
    setNextId((prev) => prev + 1);
    setPoints((prev) => [...prev, newPt]);
    setCurrentStepIndex(-1);
  };

  const generateRandomPoints = (count: number = 12) => {
    const pts: Point2D[] = [];
    for (let i = 1; i <= count; i++) {
      pts.push({
        id: i,
        x: Math.round(80 + Math.random() * 540),
        y: Math.round(60 + Math.random() * 280),
      });
    }
    setNextId(count + 1);
    setPoints(pts);
    setCurrentStepIndex(-1);
  };

  const generateCirclePoints = () => {
    const pts: Point2D[] = [];
    const cx = 350;
    const cy = 200;
    const r = 130;
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = (i * 2 * Math.PI) / count;
      const jitter = (Math.random() - 0.5) * 40;
      pts.push({
        id: i + 1,
        x: Math.round(cx + (r + jitter) * Math.cos(angle)),
        y: Math.round(cy + (r + jitter) * Math.sin(angle)),
      });
    }
    setNextId(count + 1);
    setPoints(pts);
    setCurrentStepIndex(-1);
  };

  const handleClear = () => {
    setPoints([]);
    setNextId(1);
    setCurrentStepIndex(-1);
    if (playTimerRef.current) clearInterval(playTimerRef.current);
    setIsPlaying(false);
  };

  // Step-by-step simulation controls
  const totalSteps = hullResult.steps.length;
  const activeStep = currentStepIndex >= 0 && currentStepIndex < totalSteps
    ? hullResult.steps[currentStepIndex]
    : null;

  const activeHull = activeStep ? activeStep.stackSnapshot : hullResult.hull;

  const togglePlay = () => {
    if (isPlaying) {
      if (playTimerRef.current) clearInterval(playTimerRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      let step = currentStepIndex < 0 || currentStepIndex >= totalSteps - 1 ? 0 : currentStepIndex;
      setCurrentStepIndex(step);

      playTimerRef.current = setInterval(() => {
        step++;
        if (step >= totalSteps) {
          if (playTimerRef.current) clearInterval(playTimerRef.current);
          setIsPlaying(false);
          setCurrentStepIndex(-1); // Show final hull
        } else {
          setCurrentStepIndex(step);
        }
      }, 700);
    }
  };

  // SVG Hull Polygon Path
  const hullPolygonPoints = useMemo(() => {
    if (activeHull.length < 2) return "";
    return activeHull.map((p) => `${p.x},${p.y}`).join(" ");
  }, [activeHull]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen text-slate-100 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/algorithms/" className="hover:text-white transition-colors">{en ? "Algorithms" : "المكتبة"}</Link>
        <span>/</span>
        <span className="text-amber-400 font-bold">{en ? "Computational Geometry" : "الهندسة الحسابية (Graham Scan)"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">📐</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Computational Geometry Lab" : "معمل الهندسة الحسابية والتحدب (Convex Hull)"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "Interactive simulation of Graham's Scan algorithm (O(n log n)) for computing the 2D Convex Hull, Closest Pair of Points, and Shoelace Area Theorem."
              : "محاكاة تفاعلية لخوارزمية غراهام سكان (Graham Scan) لبناء الغلاف المحدب ثنائي الأبعاد، واختبارات الاتجاه عبر الضرب الاتجاهي، مع حساب أقرب زوج من النقاط ومساحة المضلع عبر صيغة رباط الحذاء."}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => generateRandomPoints(14)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors shadow-sm"
          >
            🎲 {en ? "Random 14 Points" : "نقاط عشوائية"}
          </button>
          <button
            type="button"
            onClick={generateCirclePoints}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors shadow-sm"
          >
            ⭕ {en ? "Radial Cloud" : "سحابة دائرية"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-500/40 text-xs font-bold text-rose-300 transition-colors shadow-sm"
          >
            🗑️ {en ? "Clear" : "مسح اللوحة"}
          </button>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Step-by-Step Playback */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            disabled={points.length < 3}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-black text-xs transition-colors flex items-center gap-1.5 shadow-md"
          >
            {isPlaying ? "⏸️ إيقاف مؤقت" : "▶️ تشغيل الخطوات (Simulate)"}
          </button>

          <button
            type="button"
            onClick={() => {
              setCurrentStepIndex((prev) => Math.max(-1, prev - 1));
            }}
            disabled={currentStepIndex <= 0}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold text-slate-300 transition-colors"
          >
            ⏮️ السابقة
          </button>

          <button
            type="button"
            onClick={() => {
              setCurrentStepIndex((prev) => Math.min(totalSteps - 1, prev + 1));
            }}
            disabled={currentStepIndex >= totalSteps - 1}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold text-slate-300 transition-colors"
          >
            التالية ⏭️
          </button>

          <button
            type="button"
            onClick={() => setCurrentStepIndex(-1)}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-400 transition-colors"
          >
            {en ? "Final Hull" : "النتيجة النهائية"}
          </button>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-4 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-300">
            <input
              type="checkbox"
              checked={showClosestPair}
              onChange={(e) => setShowClosestPair(e.target.checked)}
              className="rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
            />
            <span>{en ? "Highlight Closest Pair" : "إبراز أقرب نقطتين (Closest Pair)"}</span>
          </label>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400 font-mono">
            {en ? "Click canvas to place point" : "انقر على اللوحة لإضافة نقطة جديدة"}
          </span>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* SVG Canvas (Cols 1-3) */}
        <div className="lg:col-span-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Instructions banner overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-pulse" />
              {activeStep ? `خطوة #${activeStep.step} / ${totalSteps}` : "الغلاف المكتمل (Final Hull)"}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              إجمالي النقاط: <strong className="text-white">{points.length}</strong>
            </span>
          </div>

          <svg
            width="700"
            height="400"
            onClick={handleSvgClick}
            className="w-full max-w-[700px] h-[400px] bg-slate-950/90 rounded-xl border border-slate-800/80 cursor-crosshair select-none"
          >
            {/* Background Grid Pattern */}
            <defs>
              <pattern id="geom-grid" width="35" height="35" patternUnits="userSpaceOnUse">
                <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#1e293b" strokeWidth="0.8" opacity="0.6" />
              </pattern>
              <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geom-grid)" />

            {/* Closest Pair Connection Line */}
            {showClosestPair && closestPair && (
              <g>
                <line
                  x1={closestPair.p1.x}
                  y1={closestPair.p1.y}
                  x2={closestPair.p2.x}
                  y2={closestPair.p2.y}
                  stroke="#ec4899"
                  strokeWidth="2.5"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <circle cx={closestPair.p1.x} cy={closestPair.p1.y} r="10" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                <circle cx={closestPair.p2.x} cy={closestPair.p2.y} r="10" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                <text
                  x={(closestPair.p1.x + closestPair.p2.x) / 2}
                  y={(closestPair.p1.y + closestPair.p2.y) / 2 - 8}
                  fill="#f472b6"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="bg-slate-950 px-1 font-mono"
                >
                  d = {closestPair.distance}px
                </text>
              </g>
            )}

            {/* Hull Polygon Fill & Border */}
            {activeHull.length >= 3 && (
              <polygon
                points={hullPolygonPoints}
                fill="url(#hullGradient)"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            )}

            {/* Step animation ray */}
            {activeStep && activeStep.action === "inspect" && (
              <line
                x1={activeHull[activeHull.length - 1]?.x || 0}
                y1={activeHull[activeHull.length - 1]?.y || 0}
                x2={activeStep.currentPoint.x}
                y2={activeStep.currentPoint.y}
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            )}

            {/* Render all points */}
            {points.map((pt, idx) => {
              const isInHull = activeHull.some((hp) => hp.id === pt.id);
              const isPivot = activeHull.length > 0 && activeHull[0].id === pt.id;
              const isCurrent = activeStep?.currentPoint.id === pt.id;

              return (
                <g key={pt.id} className="cursor-pointer transition-transform hover:scale-110">
                  {/* Outer aura for hull vertices */}
                  {isInHull && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isPivot ? "11" : "8"}
                      fill="none"
                      stroke={isPivot ? "#fbbf24" : "#f59e0b"}
                      strokeWidth="2"
                      opacity="0.8"
                    />
                  )}

                  {/* Core Point Circle */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isPivot ? "6" : isCurrent ? "7" : "5"}
                    fill={
                      isCurrent
                        ? "#38bdf8"
                        : isPivot
                        ? "#f59e0b"
                        : isInHull
                        ? "#fbbf24"
                        : "#64748b"
                    }
                  />

                  {/* Label */}
                  <text
                    x={pt.x + 8}
                    y={pt.y - 6}
                    fill={isInHull ? "#fef08a" : "#94a3b8"}
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    P{pt.id}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Current Step Description Card */}
          {activeStep && (
            <div className="w-full mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-300">
                إجراء الخطوة:{" "}
                <strong
                  className={
                    activeStep.action === "push"
                      ? "text-emerald-400"
                      : activeStep.action === "pop"
                      ? "text-rose-400"
                      : "text-amber-400"
                  }
                >
                  {activeStep.action.toUpperCase()}
                </strong>{" "}
                — {activeStep.reason}
              </span>
              <span className="text-slate-500 font-mono">
                عقد المكدس الحالية: {activeStep.stackSnapshot.length}
              </span>
            </div>
          )}
        </div>

        {/* Analytics & Metrics Sidebar (Col 4) */}
        <div className="space-y-4">
          {/* Card: Geometric Properties */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>📊</span>
              <span>{en ? "Convex Hull Metrics" : "خصائص الغلاف المحدب"}</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">{en ? "Total Points" : "إجمالي النقاط (n)"}:</span>
                <span className="font-bold text-white">{points.length}</span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">{en ? "Hull Vertices" : "رؤوس الغلاف (h)"}:</span>
                <span className="font-bold text-amber-400">{hullResult.hull.length}</span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">{en ? "Perimeter" : "محيط المضلع (P)"}:</span>
                <span className="font-bold text-emerald-400">{hullResult.perimeter} px</span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">{en ? "Shoelace Area" : "المساحة (A)"}:</span>
                <span className="font-bold text-cyan-400">{hullResult.area} px²</span>
              </div>

              {closestPair && (
                <div className="p-2.5 rounded bg-rose-950/30 border border-rose-500/30 space-y-1">
                  <div className="flex justify-between items-center text-rose-300">
                    <span>{en ? "Closest Pair" : "أقرب نقطتين"}:</span>
                    <span className="font-bold">
                      P{closestPair.p1.id} ↔ P{closestPair.p2.id}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300 text-[11px]">
                    <span>{en ? "Distance" : "المسافة الإقليدية"}:</span>
                    <span className="font-bold text-rose-400">{closestPair.distance} px</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card: Hull Vertices Stack */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>🥞</span>
              <span>{en ? "Stack Vertices" : "مكدس رؤوس الغلاف (Stack)"}</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
              {activeHull.map((pt, i) => (
                <span
                  key={pt.id}
                  className="px-2 py-1 rounded bg-slate-950 border border-amber-500/30 text-amber-300 text-xs font-mono"
                >
                  #{i + 1}: P{pt.id} ({pt.x}, {pt.y})
                </span>
              ))}
              {activeHull.length === 0 && (
                <span className="text-xs text-slate-500 italic">لا توجد نقاط كافية</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Theory & Mathematical Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <span>📚</span>
          <span>
            {en
              ? "Mathematical Foundations of Graham Scan & Polygon Geometry"
              : "الأسس الرياضية لخوارزمية غراهام سكان وحساب المضلعات"}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Orientation Test */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">1. اختبار الاتجاه (Orientation Test)</h4>
            <p className="text-slate-400">
              يُحدد اتجاه المنعطف بين ثلاث نقاط متتالية {"(p, q, r)"} عبر حاصل الضرب الاتجاهي ثنائي الأبعاد:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400">
              {"val = (qy - py) * (rx - qx) - (qx - px) * (ry - qy)"}
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li><strong className="text-emerald-400">val &lt; 0:</strong> دوران عكس عقارب الساعة (CCW) - رأس محدب صحيح.</li>
              <li><strong className="text-rose-400">val &gt; 0:</strong> دوران مع عقارب الساعة (CW) - تقعر يُحذف من المكدس.</li>
              <li><strong className="text-slate-300">val = 0:</strong> نقاط على استقامة واحدة (Collinear).</li>
            </ul>
          </div>

          {/* Card 2: Shoelace Theorem */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-cyan-400 text-sm">2. صيغة رباط الحذاء (Shoelace Formula)</h4>
            <p className="text-slate-400">
              حساب المساحة الدقيقة لأي مضلع ثنائي الأبعاد مغلق مرتب الرؤوس عبر جمع المصفوفات المتقاطعة:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300">
              {"Area = 0.5 * | Σ (x_i * y_{i+1} - x_{i+1} * y_i) |"}
            </div>
            <p className="text-slate-400">
              حيث ترتبط النقطة الأخيرة برأس البداية لإغلاق الحلقة المضلعية.
            </p>
          </div>

          {/* Card 3: Closest Pair & Complexity */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="font-bold text-rose-400 text-sm">3. التعقيد الحسابي (Complexity)</h4>
            <p className="text-slate-400">
              تعتمد خوارزمية غراهام على ترتيب الزوايا القطبية أولاً، مما يعطي كفاءة مثلى:
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-purple-300">
              {"Time Complexity = O(n log n)"}
              <br />
              {"Space Complexity = O(n)"}
            </div>
            <p className="text-slate-400">
              مرحلة الفحص بالمكدس تستغرق وقتاً خطياً {"O(n)"} فقط لأن كل نقطة تضاف وتحذف مرة واحدة كحد أقصى.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

