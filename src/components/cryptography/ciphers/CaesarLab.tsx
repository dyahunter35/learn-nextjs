"use client";

import { useState, useEffect, useRef } from "react";
import {
  caesarEncrypt,
  caesarDecrypt,
  caesarArabicEncrypt,
  caesarArabicDecrypt,
  ALPHABET,
  ARABIC_ALPHABET,
  mod,
} from "@/lib/crypto-engine";

export function CaesarLab() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const [text, setText] = useState("أهلاً بك في مختبر التشفير");
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const alphabetSize = lang === "en" ? 26 : 28;
  const effectiveShift = mode === "encrypt" ? mod(shift, alphabetSize) : mod(-shift, alphabetSize);

  // Auto switch sample text when language toggles
  const handleLanguageChange = (newLang: "en" | "ar") => {
    setLang(newLang);
    setIsPlaying(false);
    setCurrentStep(0);
    if (newLang === "en") {
      setText("ATTACK AT DAWN");
      if (shift > 25) setShift(3);
    } else {
      setText("أهلاً بك في مختبر التشفير");
    }
  };

  const result = lang === "en"
    ? (mode === "encrypt" ? caesarEncrypt(text, shift) : caesarDecrypt(text, shift))
    : (mode === "encrypt" ? caesarArabicEncrypt(text, shift) : caesarArabicDecrypt(text, shift));

  // Compute letter transformation steps
  const letters = text.split("");
  const totalSteps = Math.max(1, letters.length);

  // Auto-play timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < totalSteps - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 550);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSteps]);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleJumpToEnd = () => {
    setIsPlaying(false);
    setCurrentStep(totalSteps - 1);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  // Active character step info
  const activeChar = letters[currentStep] || "";
  let activeCharIdx: number | null = null;
  let shiftedIdx: number | null = null;
  let resultChar = activeChar;

  if (lang === "en") {
    const code = activeChar.toUpperCase().charCodeAt(0);
    if (code >= 65 && code <= 90) {
      activeCharIdx = code - 65;
      shiftedIdx = mod(activeCharIdx + effectiveShift, 26);
      resultChar = String.fromCharCode(shiftedIdx + 65);
      if (activeChar.toLowerCase() === activeChar) resultChar = resultChar.toLowerCase();
    }
  } else {
    let norm = activeChar;
    if (norm === "ى") norm = "ي";
    else if (norm === "ة") norm = "هـ";
    else if ("أآإئؤ".includes(norm)) norm = "أ";
    const idx = ARABIC_ALPHABET.indexOf(norm);
    if (idx !== -1) {
      activeCharIdx = idx;
      shiftedIdx = mod(activeCharIdx + effectiveShift, 28);
      resultChar = ARABIC_ALPHABET[shiftedIdx];
    }
  }

  // Dial geometry
  const radius = 100;
  const center = 130;
  const alphabetArray = lang === "en" ? ALPHABET.split("") : ARABIC_ALPHABET;

  return (
    <div className="space-y-4">
      {/* Header bar: Compact info & Math rule */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1f2d48] pb-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 className="text-base font-bold text-sky-400">
                {lang === "ar" ? "شفرة يوليوس قيصر العربية (Mod 28)" : "شفرة قيصر الكلاسيكية (Mod 26)"}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              إزاحة دائرية دورية لكل حرف بمقدار المفتاح الثابت \(k\) دون قفز بالصفحة مع تتبع تفاعلي سلس.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Language toggle */}
            <div className="bg-[#090d16] p-0.5 rounded-lg border border-[#1f2d48] flex text-xs">
              <button
                type="button"
                onClick={() => handleLanguageChange("ar")}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  lang === "ar" ? "bg-sky-500 text-slate-900 shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                عربي (28 حرف)
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  lang === "en" ? "bg-sky-500 text-slate-900 shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                English (26 Letters)
              </button>
            </div>

            {/* Math formula badge */}
            <div className="bg-[#090d16] px-2.5 py-1 rounded-lg border border-[#1f2d48] text-xs font-mono text-emerald-400">
              <span>{mode === "encrypt" ? `c = (p + ${shift}) mod ${alphabetSize}` : `p = (c - ${shift}) mod ${alphabetSize}`}</span>
            </div>
          </div>
        </div>

        {/* Controls: Shift slider, mode toggle, and quick presets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Shift Slider */}
          <div className="md:col-span-6">
            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="font-semibold text-slate-300">مفتاح الإزاحة (k = Shift):</span>
              <span className="font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950/70 border border-sky-800">
                k = {shift}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={alphabetSize - 1}
              value={shift}
              onChange={(e) => {
                setShift(Number(e.target.value));
                setCurrentStep(0);
              }}
              className="w-full accent-sky-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-0.5">
              <span>0 (بدون إزاحة)</span>
              <span>k=3 (تاريخي)</span>
              <span>{alphabetSize - 1} (أقصى إزاحة)</span>
            </div>
          </div>

          {/* Mode toggle & Presets */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-end gap-2">
            <div className="bg-[#090d16] p-0.5 rounded-lg border border-[#1f2d48] flex text-xs">
              <button
                type="button"
                onClick={() => {
                  setMode("encrypt");
                  setCurrentStep(0);
                }}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  mode === "encrypt" ? "bg-sky-500 text-slate-900 shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                تشفير (Encrypt)
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("decrypt");
                  setCurrentStep(0);
                }}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  mode === "decrypt" ? "bg-emerald-500 text-slate-900 shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                فك تشفير (Decrypt)
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setShift(3);
                setCurrentStep(0);
              }}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            >
              قيصر k=3
            </button>
            <button
              type="button"
              onClick={() => {
                setShift(13);
                setCurrentStep(0);
              }}
              className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            >
              ROT13
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Step-by-Step Toolbar (Sticky / Pinned, never scrolls or jumps) */}
      <div className="bg-[#0d1526] border border-sky-900/60 rounded-xl p-3 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Stepper info */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-300">التحكم في الخطوات التفاعلية:</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-400">
              الحرف {currentStep + 1} من {totalSteps}
            </span>
            {activeChar && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">
                {activeChar} ({activeCharIdx !== null ? activeCharIdx : "-"}) → {resultChar} ({shiftedIdx !== null ? shiftedIdx : "-"})
              </span>
            )}
          </div>

          {/* Stepper action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 transition"
            >
              ◀ السابق
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep >= totalSteps - 1}
              className="px-4 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-900 hover:bg-emerald-400 disabled:opacity-40 shadow transition"
            >
              التالي ▶
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                isPlaying
                  ? "bg-amber-500 text-slate-950"
                  : "bg-sky-600 text-white hover:bg-sky-500"
              }`}
            >
              {isPlaying ? "إيقاف ⏸" : "تشغيل تلقائي ⏯"}
            </button>

            <button
              type="button"
              onClick={handleJumpToEnd}
              disabled={currentStep >= totalSteps - 1}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 transition"
              title="إلى النهاية"
            >
              ⏭
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-rose-950/80 text-rose-300 border border-rose-800 hover:bg-rose-900 transition"
              title="إعادة تعيين الخطوات"
            >
              ↺
            </button>
          </div>
        </div>
      </div>

      {/* Main interactive area: Input, Result & Circular Dial */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Text input & result */}
        <div className="lg:col-span-7 space-y-3">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-300">
                {mode === "encrypt" ? "النص الأصلي (Plaintext):" : "النص المشفر (Ciphertext):"}
              </label>
              <span className="text-[11px] text-slate-500">{text.length} حرفاً</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setCurrentStep(0);
              }}
              rows={2}
              className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-sm text-slate-200 font-mono focus:border-sky-500 focus:outline-none"
              placeholder="اكتب النص للتشفير أو فك التشفير..."
            />
          </div>

          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-emerald-400">
                {mode === "encrypt" ? "النص المشفر الناتج (Ciphertext):" : "النص المفكوك (Plaintext):"}
              </label>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-[11px] text-sky-400 hover:underline font-semibold"
              >
                نسخ النتيجة
              </button>
            </div>
            <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-base font-bold text-emerald-300 break-words tracking-wider min-h-[46px]">
              {result || "—"}
            </div>
          </div>

          {/* Letter by letter transformation cards (Compact horizontal row) */}
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-bold text-slate-300">جدول الحساب الحظي لكل حرف:</h4>
              <span className="text-[11px] text-slate-400">انقر على أي حرف للانتقال إليه مباشرة</span>
            </div>

            <div className="overflow-x-auto crypto-scroll pb-1">
              <div className="flex gap-1.5 min-w-max">
                {letters.slice(0, 24).map((ch, idx) => {
                  const isCurrent = idx === currentStep;
                  let pVal: number | null = null;
                  let cVal: number | null = null;
                  let cChar = ch;

                  if (lang === "en") {
                    const code = ch.toUpperCase().charCodeAt(0);
                    if (code >= 65 && code <= 90) {
                      pVal = code - 65;
                      cVal = mod(pVal + effectiveShift, 26);
                      cChar = String.fromCharCode(cVal + 65);
                      if (ch.toLowerCase() === ch) cChar = cChar.toLowerCase();
                    }
                  } else {
                    let norm = ch;
                    if (norm === "ى") norm = "ي";
                    else if (norm === "ة") norm = "هـ";
                    else if ("أآإئؤ".includes(norm)) norm = "أ";
                    const pIdx = ARABIC_ALPHABET.indexOf(norm);
                    if (pIdx !== -1) {
                      pVal = pIdx;
                      cVal = mod(pVal + effectiveShift, 28);
                      cChar = ARABIC_ALPHABET[cVal];
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentStep(idx)}
                      className={`flex flex-col items-center rounded-lg p-1.5 min-w-[42px] text-center transition border ${
                        isCurrent
                          ? "bg-sky-500/20 border-sky-400 ring-2 ring-sky-400/40 scale-105"
                          : "bg-[#090d16] border-[#1f2d48] hover:border-slate-500"
                      }`}
                    >
                      <span className={`text-xs font-bold font-mono ${isCurrent ? "text-sky-300" : "text-slate-300"}`}>
                        {ch}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{pVal !== null ? pVal : "-"}</span>
                      <span className="text-[9px] text-slate-600">↓</span>
                      <span className={`text-xs font-bold font-mono ${isCurrent ? "text-emerald-300" : "text-emerald-400"}`}>
                        {cChar}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-mono">{cVal !== null ? cVal : "-"}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {letters.length > 24 && (
              <p className="text-[10px] text-slate-500 mt-1">يُعرض أول 24 حرفاً لسهولة المتابعة السريعة.</p>
            )}
          </div>
        </div>

        {/* Right: Circular Modulo Dial */}
        <div className="lg:col-span-5 bg-[#111827] border border-[#1f2d48] rounded-xl p-3.5 flex flex-col items-center justify-center">
          <h4 className="text-xs font-bold text-slate-300 mb-1">
            {lang === "ar" ? "الدائرة الحسابية (Mod 28 Dial)" : "الدائرة الحسابية (Mod 26 Dial)"}
          </h4>
          <p className="text-[11px] text-slate-400 mb-2 text-center">
            الحلقة الخارجية: الأصلية · الحلقة الداخلية: الحرف الناتج بالإزاحة k={shift}
          </p>

          <div className="relative w-[260px] h-[260px] flex items-center justify-center">
            <svg viewBox="0 0 260 260" className="w-full h-full">
              {/* Outer circle */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#1f2d48" strokeWidth="2" />
              {/* Inner circle */}
              <circle cx={center} cy={center} r={radius - 26} fill="#090d16" stroke="#334b77" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Alphabet characters positioned on outer and inner rings */}
              {alphabetArray.map((letter, i) => {
                const angle = ((i * 360) / alphabetSize - 90) * (Math.PI / 180);
                const outerX = center + radius * Math.cos(angle);
                const outerY = center + radius * Math.sin(angle);

                const innerAngle = (((i + effectiveShift) * 360) / alphabetSize - 90) * (Math.PI / 180);
                const innerX = center + (radius - 26) * Math.cos(innerAngle);
                const innerY = center + (radius - 26) * Math.sin(innerAngle);

                const isHighlight = i === activeCharIdx;

                return (
                  <g key={`${letter}-${i}`}>
                    {/* Outer letter */}
                    <text
                      x={outerX}
                      y={outerY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className={`text-[9px] font-mono select-none ${
                        isHighlight ? "fill-amber-300 font-extrabold text-[12px]" : "fill-sky-300 font-bold"
                      }`}
                    >
                      {letter}
                    </text>
                    {/* Inner shifted letter */}
                    <text
                      x={innerX}
                      y={innerY}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className={`text-[8px] font-mono select-none ${
                        isHighlight ? "fill-emerald-300 font-extrabold text-[11px]" : "fill-emerald-400"
                      }`}
                    >
                      {letter}
                    </text>
                  </g>
                );
              })}

              {/* Center badge */}
              <circle cx={center} cy={center} r="22" fill="#141e33" stroke="#38bdf8" strokeWidth="1.5" />
              <text x={center} y={center - 4} textAnchor="middle" dominantBaseline="central" className="text-[9px] font-mono fill-slate-300">
                k
              </text>
              <text x={center} y={center + 7} textAnchor="middle" dominantBaseline="central" className="text-[11px] font-mono fill-sky-400 font-bold">
                +{shift}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
