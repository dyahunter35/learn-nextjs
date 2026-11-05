"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ClusterPoint,
  Centroid,
  initializeCentroids,
  kMeansStep,
  CLUSTER_COLORS,
} from "@/lib/ai-engine";
import { useLanguage } from "@/components/LanguageProvider";

function generateSampleClusters(k = 3): ClusterPoint[] {
  const points: ClusterPoint[] = [];
  let id = 1;

  const centers = [
    { x: 120, y: 120 },
    { x: 380, y: 130 },
    { x: 250, y: 320 },
    { x: 130, y: 310 },
    { x: 370, y: 320 },
  ];

  for (let c = 0; c < Math.min(k, centers.length); c++) {
    const center = centers[c];
    for (let i = 0; i < 20; i++) {
      // Gaussian jitter
      const r = Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      points.push({
        id: id++,
        x: Math.round(center.x + r * Math.cos(theta)),
        y: Math.round(center.y + r * Math.sin(theta)),
        cluster: -1,
      });
    }
  }

  return points;
}

export default function MachineLearningPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [k, setK] = useState(3);
  const [points, setPoints] = useState<ClusterPoint[]>(() => generateSampleClusters(3));
  const [centroids, setCentroids] = useState<Centroid[]>(() => initializeCentroids(3, generateSampleClusters(3)));
  const [stepCount, setStepCount] = useState(0);
  const [converged, setConverged] = useState(false);
  const [inertia, setInertia] = useState(0);
  const [autoRunning, setAutoRunning] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize centroids whenever K changes or on demand
  const handleResetCentroids = useCallback(
    (newK = k, currentPoints = points) => {
      const newCentroids = initializeCentroids(newK, currentPoints);
      setCentroids(newCentroids);
      setPoints(currentPoints.map((p) => ({ ...p, cluster: -1 })));
      setStepCount(0);
      setConverged(false);
      setInertia(0);
      setAutoRunning(false);
    },
    [k, points]
  );

  // Execute single iteration step
  const handleNextStep = useCallback(() => {
    if (converged || centroids.length === 0 || points.length === 0) return;

    const res = kMeansStep(points, centroids);
    setPoints(res.points);
    setCentroids(res.centroids);
    setConverged(res.hasConverged);
    setInertia(Math.round(res.inertia));
    setStepCount((prev) => prev + 1);

    if (res.hasConverged) {
      setAutoRunning(false);
    }
  }, [converged, centroids, points]);

  // Auto Run loop
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (autoRunning && !converged) {
      timer = setTimeout(() => {
        handleNextStep();
      }, 350);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoRunning, converged, handleNextStep]);

  // Draw points, centroids, and cluster connections on canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = "#0b1120";
    ctx.fillRect(0, 0, width, height);

    // Subtle background grid
    ctx.strokeStyle = "#162033";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 1. Draw connection lines between points and their assigned centroid
    for (const pt of points) {
      if (pt.cluster >= 0 && pt.cluster < centroids.length) {
        const c = centroids[pt.cluster];
        ctx.strokeStyle = `${c.color}25`; // very subtle transparent line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(c.x, c.y);
        ctx.stroke();
      }
    }

    // 2. Draw Points
    for (const pt of points) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
      ctx.fillStyle =
        pt.cluster >= 0 && pt.cluster < centroids.length
          ? centroids[pt.cluster].color
          : "#64748b";
      ctx.fill();

      ctx.strokeStyle = "#0b1120";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 3. Draw Centroids as glowing diamond badges
    centroids.forEach((c, idx) => {
      ctx.save();
      ctx.translate(c.x, c.y);

      // Outer glow circle
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.fillStyle = `${c.color}35`;
      ctx.fill();

      // Diamond center
      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(12, 0);
      ctx.lineTo(0, 12);
      ctx.lineTo(-12, 0);
      ctx.closePath();
      ctx.fillStyle = c.color;
      ctx.fill();

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Centroid Index number
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`K${idx + 1}`, 0, 0);

      ctx.restore();
    });
  }, [points, centroids]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * canvas.height);

    const newPt: ClusterPoint = {
      id: points.length + 1,
      x,
      y,
      cluster: -1,
    };
    setPoints([...points, newPt]);
    setConverged(false);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/ai/" className="hover:text-white transition-colors">{en ? "AI Lab" : "معمل الذكاء الاصطناعي"}</Link>
        <span>/</span>
        <span className="text-violet-400 font-bold">{en ? "K-Means Clustering" : "عناقيد K-Means والتعلم الآلي"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📊</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "K-Means Clustering Lab" : "محاكي عناقيد البيانات K-Means"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "K-Means is the premier unsupervised machine learning algorithm for discovering hidden groupings in unlabeled data. It iteratively relocates cluster centroids until within-cluster variance is minimized."
              : "خوارزمية K-Means هي الأسلوب الأشهر في التعلم غير الموجّه لاكتشاف المجموعات والأنماط الكامنة بدون تصنيف مسبق. تعيد حساب مراكز الثقل بشكل متكرر حتى تصل لأقل تباين ممكن."}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0f172a] p-3 rounded-2xl border border-slate-800 text-xs font-mono">
          <div className="text-center px-2">
            <span className="text-slate-400 block text-[10px]">دالة الهدف</span>
            <span className="text-amber-400 font-bold text-sm">min ∑ ||x - μ||²</span>
          </div>
        </div>
      </div>

      {/* Control Station */}
      <div className="ai-card p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Next Step Button */}
            <button
              type="button"
              onClick={handleNextStep}
              disabled={converged || autoRunning}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
            >
              <span>⚡</span>
              <span>{en ? "Next Step (Assignment / Update)" : "الخطوة التالية (تخصيص / تحديث المراكز)"}</span>
            </button>

            {/* Auto Run Button */}
            <button
              type="button"
              onClick={() => setAutoRunning(!autoRunning)}
              disabled={converged}
              className={`px-4 py-2 rounded-xl font-bold text-xs border transition-colors ${
                autoRunning
                  ? "bg-rose-950/60 border-rose-500/50 text-rose-300"
                  : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200"
              }`}
            >
              {autoRunning ? (en ? "⏸ Pause" : "⏸ إيقاف مؤقت") : (en ? "▶ Auto-Run to Convergence" : "▶ تشغيل متواصل حتى التقارب")}
            </button>

            {/* Re-seed Centroids */}
            <button
              type="button"
              onClick={() => handleResetCentroids(k, points)}
              className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
            >
              🔄 إعادة رمي المراكز
            </button>

            {/* Sample Dataset */}
            <button
              type="button"
              onClick={() => {
                const newPts = generateSampleClusters(k);
                setPoints(newPts);
                handleResetCentroids(k, newPts);
              }}
              className="px-3 py-2 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/80 text-xs font-semibold transition-colors"
            >
              🎲 توليد عينة نقاط عشوائية
            </button>
          </div>

          {/* K clusters selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-bold">{en ? "Clusters (K):" : "عدد العناقيد (K):"}</span>
            <div className="inline-flex rounded-lg border border-slate-800 bg-[#0f172a] p-1 gap-1">
              {[2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    setK(val);
                    handleResetCentroids(val, points);
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    k === val ? "bg-amber-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  K={val}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Canvas (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="ai-card p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
              <span>انقر في أي مكان داخل المستطيل لإضافة نقاط جديدة</span>
              <span className="font-mono text-slate-500">{points.length} نقطة بيانات</span>
            </div>

            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                width={500}
                height={400}
                onClick={handleCanvasClick}
                className="neural-canvas cursor-crosshair w-full max-w-[500px]"
                title="مساحة البيانات ثنائية الأبعاد"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-3">
                {centroids.map((c, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="font-mono text-[11px]">K{idx + 1}</span>
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPoints([])}
                className="text-slate-500 hover:text-rose-400 transition-colors"
              >
                مسح النقاط
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Analytics, Clusters Counts & Math (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Convergence & Metrics Card */}
          <div className="ai-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400">CLUSTERING METRICS</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${
                converged
                  ? "bg-emerald-950/60 text-emerald-300 border-emerald-800 font-bold"
                  : "bg-amber-950/60 text-amber-300 border-amber-800"
              }`}>
                {converged ? "تم التقارب النهائي (Converged) ✓" : "جاري إعادة التمركز..."}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">عدد التكرارات (Iterations)</span>
                <span className="text-xl font-black text-amber-400">
                  {stepCount}
                </span>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">القصور الذاتي (Inertia)</span>
                <span className="text-xl font-black text-cyan-400">
                  {inertia.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Clusters Breakdown */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-300 block">توزيع العناصر لكل عنقود:</span>
              <div className="space-y-1.5 font-mono text-xs">
                {centroids.map((c, idx) => {
                  const count = points.filter((p) => p.cluster === idx).length;
                  const pct = points.length ? Math.round((count / points.length) * 100) : 0;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#0f172a] border border-slate-800"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                        <span className="text-slate-200">العنقود #{idx + 1}:</span>
                      </div>
                      <span className="text-slate-400 font-bold">
                        {count} نقطة ({pct}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Theory Card */}
      <section className="ai-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📐</span>
          <h2 className="text-lg font-bold text-white">خطوتا خوارزمية لويد (Lloyd's K-Means Algorithm)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-sm">1. خطوة التخصيص (Assignment Step):</h3>
            <p>
              يتم قياس المسافة الإقليدية بين كل نقطة $x$ وجميع المراكز $k$، وتُسند النقطة إلى المركز الأقرب:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 font-mono text-center text-amber-300">
              c⁽ⁱ⁾ = argminⱼ ||x⁽ⁱ⁾ - μⱼ||²
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-cyan-400 text-sm">2. خطوة التحديث (Update Step):</h3>
            <p>
              يُعاد حساب إحداثيات كل مركز $\mu_j$ كمتوسط حسابي (Center of Mass) لجميع النقاط المنتمية إليه:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 font-mono text-center text-cyan-300">
              μⱼ = (1 / |Sⱼ|) ∑_{'{'}x ∈ Sⱼ{'}'} x
            </div>
            <p className="text-[11px] text-slate-400">
              تتوقف الخوارزمية عندما لا تنتقل أي نقطة من عنقود لآخر، فتثبت المراكز في مكانها نهائياً.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

