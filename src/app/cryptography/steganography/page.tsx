"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

export default function SteganographyPage() {
  const [activeTab, setActiveTab] = useState<"image" | "text">("image");

  // Canvas References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [secretText, setSecretText] = useState("CONFIDENTIAL COORDINATES: 34.0522 N, 118.2437 W");
  const [extractedText, setExtractedText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [currentPlane, setCurrentPlane] = useState<"full" | "lsb" | "msb">("full");

  // Inspector Morse state
  const [morseSecret, setMorseSecret] = useState("ATTACK AT DAWN");
  const [morseLetter, setMorseLetter] = useState(
    "Always Trust The Team And Create Knowledge. All Troops Deliver Ammunition With New Zeal."
  );

  // Initialize Canvas with carrier image pattern
  const drawBaseImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create a rich textured tactical gradient map
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#1e3a8a");
    grad.addColorStop(0.3, "#065f46");
    grad.addColorStop(0.7, "#92400e");
    grad.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add tactical grid lines and topography details
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 25) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 25) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Circles / Radar
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2);
    ctx.stroke();
  }, []);

  useEffect(() => {
    drawBaseImage();
  }, [drawBaseImage]);

  // Embed secret text into LSB
  const handleEmbed = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Redraw base first to ensure clean state
    drawBaseImage();

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    // Format: 16-bit length prefix, followed by characters
    const fullMessage = secretText;
    const len = fullMessage.length;

    // Convert message to array of bits
    const bits: number[] = [];
    // 16 bits for length
    for (let i = 15; i >= 0; i--) {
      bits.push((len >> i) & 1);
    }
    // 8 bits per character
    for (let i = 0; i < len; i++) {
      const code = fullMessage.charCodeAt(i);
      for (let b = 7; b >= 0; b--) {
        bits.push((code >> b) & 1);
      }
    }

    if (bits.length > (data.length / 4) * 3) {
      setStatusMessage("خطأ: حجم الرسالة أكبر من سعة البكسلات المتوفرة في الصورة!");
      return;
    }

    // Embed bits into LSB of R, G, B channels (skipping Alpha channel)
    let bitIdx = 0;
    for (let i = 0; i < data.length && bitIdx < bits.length; i++) {
      // Skip Alpha (every 4th byte: index % 4 === 3)
      if (i % 4 === 3) continue;

      const currentByte = data[i];
      const targetBit = bits[bitIdx];
      // clear LSB and set to targetBit
      data[i] = (currentByte & ~1) | targetBit;
      bitIdx++;
    }

    ctx.putImageData(imgData, 0, 0);
    setStatusMessage(`تم تضمين ${len} حرف بنجاح في البتات الأقل أهمية (LSB)! الصورة الناتجة متطابقة بصرياً.`);
    setExtractedText("");
  };

  // Extract secret text from LSB
  const handleExtract = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    // Read bits from R, G, B channels
    const bits: number[] = [];
    for (let i = 0; i < data.length; i++) {
      if (i % 4 === 3) continue;
      bits.push(data[i] & 1);
      if (bits.length > 5000) break; // reasonable safety threshold
    }

    // Read 16-bit length
    let msgLen = 0;
    for (let i = 0; i < 16; i++) {
      msgLen = (msgLen << 1) | bits[i];
    }

    if (msgLen <= 0 || msgLen > 500) {
      setExtractedText("لم يتم العثور على رسالة مخفية صالحة في هذه الصورة.");
      return;
    }

    let extracted = "";
    let bitPtr = 16;
    for (let i = 0; i < msgLen; i++) {
      let charCode = 0;
      for (let b = 0; b < 8; b++) {
        charCode = (charCode << 1) | (bits[bitPtr++] || 0);
      }
      extracted += String.fromCharCode(charCode);
    }

    setExtractedText(extracted);
    setStatusMessage(`تم استخراج الرسالة السرية بنجاح (${msgLen} حرف)!`);
  };

  // Switch bit plane visualization
  const handlePlaneView = (plane: "full" | "lsb" | "msb") => {
    setCurrentPlane(plane);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (plane === "full") {
      drawBaseImage();
      return;
    }

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      if (plane === "lsb") {
        // Amplify bit 0 to full black/white
        const bitR = (data[i] & 1) * 255;
        const bitG = (data[i + 1] & 1) * 255;
        const bitB = (data[i + 2] & 1) * 255;
        data[i] = bitR;
        data[i + 1] = bitG;
        data[i + 2] = bitB;
      } else if (plane === "msb") {
        // Isolate bit 7 (Most Significant Bit)
        data[i] = (data[i] & 128);
        data[i + 1] = (data[i + 1] & 128);
        data[i + 2] = (data[i + 2] & 128);
      }
    }
    ctx.putImageData(imgData, 0, 0);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Header */}
      <div>
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/cryptography" className="hover:text-slate-200">لوحة التحكم</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">مختبر تقنيات الإخفاء</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              مختبر تقنيات الإخفاء (Steganography Lab)
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              إخفاء وجود الرسالة داخل وسائط أخرى: تعديل البتات الأقل أهمية للصور (LSB Bit Shift) والأحاجي النصية التمويهية.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-400">
            <span>التقنية:</span>
            <span className="text-cyan-400 font-bold">LSB RGB PIXEL EMBEDDING</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#1f2d48] pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("image")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === "image"
              ? "bg-cyan-500/15 border-cyan-400 text-cyan-300"
              : "bg-[#111827] border-[#1f2d48] text-slate-400 hover:text-slate-200"
          }`}
        >
          🖼️ إخفاء في بتات الصور (LSB Image Steganography)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("text")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === "text"
              ? "bg-cyan-500/15 border-cyan-400 text-cyan-300"
              : "bg-[#111827] border-[#1f2d48] text-slate-400 hover:text-slate-200"
          }`}
        >
          📜 الإخفاء النصي (Inspector Morse Text Puzzle)
        </button>
      </div>

      {/* 1. IMAGE LSB STEGANOGRAPHY */}
      {activeTab === "image" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-lg font-bold text-cyan-400 mb-1">
              محرر ومحلل إخفاء البيانات في قنوات ألوان البكسل (RGB LSB Editor)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              تعتمد هذه التقنية على استبدال البت الأقل وزناً (Bit 0) في كل قناة لونية (الأحمر، الأخضر، الأزرق) ببت من بتات الرسالة السرية. بما أن التغيير في قيمة اللون لا يتعدى ±1 من أصل 255، فإن العين البشرية تعجز تماماً عن ملاحظة أي فارق بصري!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Canvas Preview & Bit Plane Controls */}
            <div className="lg:col-span-6 bg-[#111827] border border-[#1f2d48] rounded-xl p-5 flex flex-col items-center space-y-4">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-slate-300">معاينة الصورة الحاملة (Carrier Image):</span>
                <span className="text-[11px] font-mono text-cyan-400">320 × 240 بكسل</span>
              </div>

              <div className="p-2 bg-[#090d16] border border-[#1f2d48] rounded-xl shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={320}
                  height={240}
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>

              {/* Bit Plane Selector Buttons */}
              <div className="w-full space-y-2">
                <span className="text-[11px] text-slate-400 block text-center">
                  مستعرض المستويات البتية (Bit-Plane Visualizer):
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePlaneView("full")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-bold border transition-colors ${
                      currentPlane === "full"
                        ? "bg-cyan-500 text-slate-900 border-cyan-400"
                        : "bg-[#141e33] border-[#1f2d48] text-slate-300 hover:text-white"
                    }`}
                  >
                    الصورة الطبيعية
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlaneView("msb")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-bold border transition-colors ${
                      currentPlane === "msb"
                        ? "bg-cyan-500 text-slate-900 border-cyan-400"
                        : "bg-[#141e33] border-[#1f2d48] text-slate-300 hover:text-white"
                    }`}
                  >
                    مستوى MSB (بت 7)
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlaneView("lsb")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-bold border transition-colors ${
                      currentPlane === "lsb"
                        ? "bg-cyan-500 text-slate-900 border-cyan-400"
                        : "bg-[#141e33] border-[#1f2d48] text-slate-300 hover:text-white"
                    }`}
                  >
                    مستوى LSB (بت 0)
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Embed & Extract Controls */}
            <div className="lg:col-span-6 space-y-4">
              {/* Embed Box */}
              <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  الرسالة السرية المراد زرعها داخل بكسلات الصورة:
                </label>
                <textarea
                  value={secretText}
                  onChange={(e) => setSecretText(e.target.value)}
                  rows={3}
                  className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-2.5 text-xs text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                />

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleEmbed}
                    className="flex-1 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>🔒</span>
                    تضمين الرسالة في البتات (Embed in LSB)
                  </button>
                  <button
                    type="button"
                    onClick={drawBaseImage}
                    className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs hover:text-white"
                  >
                    إعادة ضبط
                  </button>
                </div>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-xl text-xs text-cyan-300 font-mono">
                  {statusMessage}
                </div>
              )}

              {/* Extract Box */}
              <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-emerald-400">
                    الرسالة السرية المستخرجة من قنوات LSB:
                  </label>
                  <button
                    type="button"
                    onClick={handleExtract}
                    className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-bold"
                  >
                    🔍 استخراج الرسالة المخفية
                  </button>
                </div>

                <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-emerald-300 break-words min-h-[60px]">
                  {extractedText || "انقر على زر استخراج الرسالة المخفية أعلاه لقراءة البتات من الكانفاس..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. TEXT STEGANOGRAPHY */}
      {activeTab === "text" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-lg font-bold text-cyan-400 mb-1">
              أحجية المفتش مورس والنصوص التمويهية (Acrostic & Positional Text Steganography)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              إخفاء المعاني السرية في نصوص عادية غير مريبة بحيث يتم استخلاص الحروف بناءً على الحرف الأول أو الثاني أو الأخير من كل كلمة، أو وفق جدول عددي محدد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">النص التمويهي الظاهر للعلن:</label>
              <textarea
                value={morseLetter}
                onChange={(e) => setMorseLetter(e.target.value)}
                rows={4}
                className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-xs text-slate-200 font-mono leading-relaxed focus:border-cyan-400 focus:outline-none"
              />
              <p className="text-[11px] text-slate-500">
                القاعدة المطبقة هنا: أخذ أول حرف من كل كلمة من الكلمات.
              </p>
            </div>

            <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <label className="text-xs font-semibold text-emerald-400 block mb-2">
                  الرسالة السرية المستخلصة تلقائياً (Acrostic Result):
                </label>
                <div className="p-4 bg-[#090d16] border border-emerald-500/30 rounded-xl font-mono text-lg font-black text-emerald-300 tracking-widest min-h-[80px]">
                  {morseLetter
                    .split(/\s+/)
                    .map((word) => word.replace(/[^a-zA-Z]/g, "")[0] || "")
                    .join("")
                    .toUpperCase()}
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-3 border-t border-[#1f2d48]">
                ميزة الإخفاء النصي: حتى إذا فُحص الخطاب بنظام رقابة، يبدو كرسالة إدارية أو أدبية عادية تماماً، ولا يثير ريبة المراقب كالنصوص المشفرة العادية.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
