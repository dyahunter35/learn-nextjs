"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Perceptron, DataPoint } from "@/lib/ai-engine";
import { useLanguage } from "@/components/LanguageProvider";

const PRESETS: Record<string, DataPoint[]> = {
  and: [
    { x1: -0.5, x2: -0.5, label: 0 },
    { x1: -0.5, x2: 0.5, label: 0 },
    { x1: 0.5, x2: -0.5, label: 0 },
    { x1: 0.5, x2: 0.5, label: 1 },
  ],
  or: [
    { x1: -0.5, x2: -0.5, label: 0 },
    { x1: -0.5, x2: 0.5, label: 1 },
    { x1: 0.5, x2: -0.5, label: 1 },
    { x1: 0.5, x2: 0.5, label: 1 },
  ],
  separable: [
    { x1: -0.6, x2: -0.4, label: 0 },
    { x1: -0.7, x2: -0.2, label: 0 },
    { x1: -0.4, x2: -0.7, label: 0 },
    { x1: -0.3, x2: -0.3, label: 0 },
    { x1: 0.5, x2: 0.6, label: 1 },
    { x1: 0.7, x2: 0.4, label: 1 },
    { x1: 0.4, x2: 0.7, label: 1 },
    { x1: 0.6, x2: 0.2, label: 1 },
  ],
  xor: [
    { x1: -0.5, x2: -0.5, label: 0 },
    { x1: 0.5, x2: 0.5, label: 0 },
    { x1: -0.5, x2: 0.5, label: 1 },
    { x1: 0.5, x2: -0.5, label: 1 },
  ],
};

export default function NeuralPerceptronPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [points, setPoints] = useState<DataPoint[]>(PRESETS.separable);
  const [selectedClass, setSelectedClass] = useState<0 | 1>(1);

  const [w1, setW1] = useState(0.4);
  const [w2, setW2] = useState(-0.6);
  const [bias, setBias] = useState(0.0);
  const [learningRate, setLearningRate] = useState(0.15);
  const [epochsTrained, setEpochsTrained] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Compute accuracy
  const correctCount = points.reduce((acc, pt) => {
    const raw = w1 * pt.x1 + w2 * pt.x2 + bias;
    const pred = raw >= 0 ? 1 : 0;
    return pred === pt.label ? acc + 1 : acc;
  }, 0);
  const accuracy = points.length ? Math.round((correctCount / points.length) * 100) : 0;

  // Single Step Train
  const handleTrainStep = () => {
    const p = new Perceptron(w1, w2, bias, learningRate);
    p.trainStep(points);
    setW1(Math.round(p.w1 * 1000) / 1000);
    setW2(Math.round(p.w2 * 1000) / 1000);
    setBias(Math.round(p.bias * 1000) / 1000);
    setEpochsTrained((prev) => prev + 1);
  };

  // Train Multiple Epochs
  const handleTrainEpochs = (count = 30) => {
    const p = new Perceptron(w1, w2, bias, learningRate);
    p.trainEpochs(points, count);
    setW1(Math.round(p.w1 * 1000) / 1000);
    setW2(Math.round(p.w2 * 1000) / 1000);
    setBias(Math.round(p.bias * 1000) / 1000);
    setEpochsTrained((prev) => prev + count);
  };

  const handleResetWeights = () => {
    setW1(0.4);
    setW2(-0.6);
    setBias(0.0);
    setEpochsTrained(0);
  };

  // Render 2D Cartesian Plane on Canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = "#0b1120";
    ctx.fillRect(0, 0, width, height);

    // Coordinate conversion helper: [-1, 1] to [0, width]
    const toCanvasX = (x: number) => ((x + 1) / 2) * width;
    const toCanvasY = (y: number) => ((1 - y) / 2) * height; // Invert Y
    const toMathX = (cx: number) => (cx / width) * 2 - 1;
    const toMathY = (cy: number) => 1 - (cy / height) * 2;

    // 1. Shading background decision regions
    const res = 15;
    for (let cx = 0; cx < width; cx += res) {
      for (let cy = 0; cy < height; cy += res) {
        const mx = toMathX(cx + res / 2);
        const my = toMathY(cy + res / 2);
        const score = w1 * mx + w2 * my + bias;
        if (score >= 0) {
          ctx.fillStyle = "rgba(56, 189, 248, 0.08)"; // Class 1 Cyan
        } else {
          ctx.fillStyle = "rgba(244, 63, 94, 0.08)"; // Class 0 Red
        }
        ctx.fillRect(cx, cy, res, res);
      }
    }

    // 2. Draw grid lines & axes
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;

    for (let i = -0.8; i <= 0.8; i += 0.2) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(i), 0);
      ctx.lineTo(toCanvasX(i), height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(i));
      ctx.lineTo(width, toCanvasY(i));
      ctx.stroke();
    }

    // Main X and Y axis
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(0), 0);
    ctx.lineTo(toCanvasX(0), height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(width, toCanvasY(0));
    ctx.stroke();

    // 3. Draw Decision Boundary Line: w1*x + w2*y + b = 0 => y = (-w1*x - b) / w2
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 3;
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 10;

    ctx.beginPath();
    if (Math.abs(w2) > 1e-5) {
      const xLeft = -1.2;
      const yLeft = (-w1 * xLeft - bias) / w2;
      const xRight = 1.2;
      const yRight = (-w1 * xRight - bias) / w2;

      ctx.moveTo(toCanvasX(xLeft), toCanvasY(yLeft));
      ctx.lineTo(toCanvasX(xRight), toCanvasY(yRight));
    } else {
      const xFixed = -bias / (w1 || 1e-5);
      ctx.moveTo(toCanvasX(xFixed), 0);
      ctx.lineTo(toCanvasX(xFixed), height);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset shadow

    // 4. Draw data points
    for (const pt of points) {
      const cx = toCanvasX(pt.x1);
      const cy = toCanvasY(pt.x2);

      // Verify if current model classifies it correctly
      const raw = w1 * pt.x1 + w2 * pt.x2 + bias;
      const pred = raw >= 0 ? 1 : 0;
      const isCorrect = pred === pt.label;

      ctx.beginPath();
      ctx.arc(cx, cy, 9, 0, Math.PI * 2);
      ctx.fillStyle = pt.label === 1 ? "#38bdf8" : "#f43f5e";
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = isCorrect ? "#10b981" : "#f59e0b";
      ctx.stroke();

      // Label symbol inside point
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(pt.label.toString(), cx, cy);
    }
  }, [w1, w2, bias, points]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cx = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const cy = ((e.clientY - rect.top) / rect.height) * canvas.height;

    // Map canvas to [-1, 1]
    const x1 = Math.round(((cx / canvas.width) * 2 - 1) * 100) / 100;
    const x2 = Math.round(((1 - cy / canvas.height) * 2 - 1) * 100) / 100;

    setPoints([...points, { x1, x2, label: selectedClass }]);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/ai/" className="hover:text-white transition-colors">{en ? "AI Lab" : "معمل الذكاء الاصطناعي"}</Link>
        <span>/</span>
        <span className="text-violet-400 font-bold">{en ? "Neural Classifier" : "الشبكات العصبية والبرسيبترون"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧠</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Perceptron & Neural Decision Boundary" : "محاكي الخلية العصبية وخط الفصل الخطي"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "The Perceptron is the biological-inspired building block of deep learning. Watch how weights and bias dynamically pivot the decision boundary to cleanly separate classes."
              : "البرسيبترون هو حجر الأساس للتعلم العميق والذكاء الاصطناعي الحديث. شاهد كيف تؤثر الأوزان والانحياز في تدوير وإزاحة خط القرار الرياضي في الفضاء ثنائي الأبعاد."}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0f172a] p-3 rounded-2xl border border-slate-800 text-xs font-mono">
          <div className="text-center px-2">
            <span className="text-slate-400 block text-[10px]">دالة التنشيط</span>
            <span className="text-emerald-400 font-bold text-sm">y = Step(w·x + b)</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive 2D Canvas (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="ai-card p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-300">إضافة نقطة عند النقر:</span>
                <div className="inline-flex rounded-lg border border-slate-800 bg-[#0f172a] p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setSelectedClass(1)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                      selectedClass === 1 ? "bg-sky-600 text-white" : "text-sky-400"
                    }`}
                  >
                    ● صنف 1 (أزرق)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedClass(0)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                      selectedClass === 0 ? "bg-rose-600 text-white" : "text-rose-400"
                    }`}
                  >
                    ● صنف 0 (أحمر)
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-mono">نماذج:</span>
                <button
                  type="button"
                  onClick={() => { setPoints(PRESETS.and); handleResetWeights(); }}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  AND
                </button>
                <button
                  type="button"
                  onClick={() => { setPoints(PRESETS.or); handleResetWeights(); }}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  OR
                </button>
                <button
                  type="button"
                  onClick={() => { setPoints(PRESETS.separable); handleResetWeights(); }}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  فصل سلس
                </button>
                <button
                  type="button"
                  onClick={() => { setPoints(PRESETS.xor); handleResetWeights(); }}
                  className="px-2 py-1 rounded bg-rose-950/40 text-rose-300 border border-rose-800/50"
                  title="غير قابلة للفصل الخطي بمستوى واحد"
                >
                  XOR ⚠️
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                width={500}
                height={420}
                onClick={handleCanvasClick}
                className="neural-canvas cursor-crosshair w-full max-w-[500px]"
                title="انقر لإضافة نقاط بيانات في المستوى الإحداثي"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>انقر بالماوس على المستوى أعلاه لإضافة نقطة جديدة</span>
              <button
                type="button"
                onClick={() => setPoints([])}
                className="text-slate-500 hover:text-rose-400 transition-colors"
              >
                مسح كافة النقاط
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Weights, Training Sliders & Metrics (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Performance Board */}
          <div className="ai-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-400">MODEL PERFORMANCE</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                {accuracy === 100 ? "100% تم الفصل التام" : `${accuracy}% دقة التصنيف`}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">النقاط المصنفة بدقة</span>
                <span className="text-lg font-black text-emerald-400">
                  {correctCount} / {points.length}
                </span>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-500 block mb-0.5">الحقب المدربة</span>
                <span className="text-lg font-black text-cyan-400">
                  {epochsTrained}
                </span>
              </div>
            </div>

            {/* Boundary Equation */}
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center font-mono text-xs">
              <span className="text-[10px] text-slate-500 block mb-1">معادلة خط الفصل الحالي</span>
              <span className="text-cyan-300 font-bold">
                {w1}·x₁ + {w2 >= 0 ? `+${w2}` : w2}·x₂ + {bias >= 0 ? `+${bias}` : bias} = 0
              </span>
            </div>

            {/* Training Action Buttons */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleTrainStep}
                  disabled={points.length === 0}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
                >
                  ⚡ تدريب خطوة واحدة
                </button>
                <button
                  type="button"
                  onClick={() => handleTrainEpochs(30)}
                  disabled={points.length === 0}
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  🚀 تدريب 30 حقبة
                </button>
              </div>

              <button
                type="button"
                onClick={handleResetWeights}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs font-semibold border border-slate-800 transition-colors"
              >
                🔄 إعادة تعيين الأوزان
              </button>
            </div>
          </div>

          {/* Interactive Weight & Bias Sliders */}
          <div className="ai-card p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              التحكم اليدوي بالأوزان (Manual Weights Tuning)
            </h3>
            <p className="text-xs text-slate-400">
              حرّك أشرطة التمرير لرؤية كيف يتحرك خط القرار هندسياً في المستوى:
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Weight 1 Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>الوزن الأول (w₁):</span>
                  <span className="text-cyan-400 font-bold">{w1}</span>
                </div>
                <input
                  type="range"
                  min="-2"
                  max="2"
                  step="0.05"
                  value={w1}
                  onChange={(e) => setW1(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              {/* Weight 2 Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>الوزن الثاني (w₂):</span>
                  <span className="text-cyan-400 font-bold">{w2}</span>
                </div>
                <input
                  type="range"
                  min="-2"
                  max="2"
                  step="0.05"
                  value={w2}
                  onChange={(e) => setW2(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              {/* Bias Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>الانحياز (Bias b):</span>
                  <span className="text-violet-400 font-bold">{bias}</span>
                </div>
                <input
                  type="range"
                  min="-2"
                  max="2"
                  step="0.05"
                  value={bias}
                  onChange={(e) => setBias(Number(e.target.value))}
                  className="w-full accent-violet-400"
                />
              </div>

              {/* Learning rate */}
              <div className="space-y-1 pt-2 border-t border-slate-800">
                <div className="flex justify-between text-slate-300">
                  <span>معدل التعلم (η):</span>
                  <span className="text-emerald-400 font-bold">{learningRate}</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.5"
                  step="0.02"
                  value={learningRate}
                  onChange={(e) => setLearningRate(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Theory Card */}
      <section className="ai-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📐</span>
          <h2 className="text-lg font-bold text-white">الرياضيات خلف الخلية العصبية ومأزق XOR</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-cyan-400 text-sm">قاعدة تحديث الأوزان في البرسيبترون:</h3>
            <p>
              عندما تخطئ الخلية في التنبؤ، يتم تعديل كل وزن وفقاً للخطأ والمدخلات ومعدل التعلم $\eta$:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 font-mono text-center text-cyan-300">
              wᵢ ← wᵢ + η · (y - ŷ) · xᵢ
            </div>
            <p className="text-[11px] text-slate-400">
              {"إذا كان التنبؤ صحيحاً (y = ŷ)، يكون التغيير صفراً ولا تتغير الأوزان."}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-rose-400 text-sm">معضلة XOR (Linear Separability):</h3>
            <p>
              أثبت العالمان مارفن مينسكي وسيمور بابيرت عام 1969 أن الخلية العصبية الواحدة مستحيل أن تفصل بوابة <strong>XOR</strong> بخط مستقيم، لأن فئاتها غير مفصولة خطياً. أدى هذا الاكتشاف لتطوير <strong>الشبكات العصبية متعددة الطبقات (MLP)</strong> بإضافة طبقات خفية لحل المسائل المعقدة.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
