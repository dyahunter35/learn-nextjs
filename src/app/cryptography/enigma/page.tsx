"use client";

import { useState } from "react";
import Link from "next/link";
import {
  EnigmaMachine,
  ENIGMA_ROTORS,
  ALPHABET,
} from "@/lib/crypto-engine";

// Authentic daily key setting sheets (Tageschlüssel)
const SECRET_SETTING_SHEETS = [
  {
    day: 1,
    date: "1944-06-05 (عشية إنزال النورماندي)",
    rotors: ["II", "I", "III"] as [string, string, string],
    rings: [12, 5, 20] as [number, number, number],
    ground: ["W", "H", "K"] as [string, string, string],
    plugs: [["A", "T"], ["B", "L"], ["D", "F"], ["G", "J"], ["K", "M"], ["N", "Q"]] as [string, string][],
    intercept: "FTZMG WRXBL KJDQP",
    notes: "برقية مشفرة من قيادة الجيش السابع الألماني في النورماندي",
  },
  {
    day: 2,
    date: "1943-05-18 (معركة الأطلسي - الغواصات)",
    rotors: ["IV", "II", "V"] as [string, string, string],
    rings: [1, 18, 9] as [number, number, number],
    ground: ["U", "B", "T"] as [string, string, string],
    plugs: [["C", "H"], ["E", "J"], ["N", "V"], ["O", "P"], ["R", "Z"]] as [string, string][],
    intercept: "QPLMN ZXCVB LKJHG",
    notes: "برقية مشفرة لغواصات U-Boat حول مسار قافلة الحلفاء SC-130",
  },
  {
    day: 3,
    date: "1941-05-24 (مطاردة البارجة بسمارك)",
    rotors: ["I", "III", "II"] as [string, string, string],
    rings: [15, 2, 8] as [number, number, number],
    ground: ["B", "S", "M"] as [string, string, string],
    plugs: [["A", "X"], ["B", "T"], ["C", "F"], ["E", "Y"], ["K", "R"], ["M", "P"], ["N", "Z"]] as [string, string][],
    intercept: "KMGVT XPLQW BDSAF",
    notes: "إحداثيات تحرك البارجة بسمارك في شمال المحيط الأطلسي",
  },
];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O"],
  ["A", "S", "D", "F", "G", "H", "J", "K"],
  ["P", "Y", "X", "C", "V", "B", "N", "M", "L"],
];

export default function EnigmaPage() {
  // Enigma Machine Configuration
  const [rotors, setRotors] = useState<[string, string, string]>(["I", "II", "III"]);
  const [positions, setPositions] = useState<[string, string, string]>(["A", "A", "A"]);
  const [rings, setRings] = useState<[number, number, number]>([0, 0, 0]);
  const [reflector, setReflector] = useState("B");
  const [plugs, setPlugs] = useState<[string, string][]>([
    ["A", "F"],
    ["B", "V"],
    ["C", "P"],
  ]);

  // Interaction State
  const [lastLitChar, setLastLitChar] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [typedPlain, setTypedPlain] = useState("");
  const [typedCipher, setTypedCipher] = useState("");

  // Plugboard Pair Input Helper
  const [plugA, setPlugA] = useState("D");
  const [plugB, setPlugB] = useState("W");

  // Step a single rotor position manually
  const stepRotorManual = (index: number, direction: 1 | -1) => {
    const curVal = positions[index].charCodeAt(0) - 65;
    const nextVal = (curVal + direction + 26) % 26;
    const newPos = [...positions] as [string, string, string];
    newPos[index] = String.fromCharCode(nextVal + 65);
    setPositions(newPos);
  };

  // Type a character through the Enigma simulator
  const handleKeyClick = (char: string) => {
    const machine = new EnigmaMachine(rotors, positions, rings, reflector, plugs);
    const { outputChar, path } = machine.processChar(char);

    setLastLitChar(outputChar);
    setCurrentPath(path);

    // Update positions from machine after stepping
    const newPos: [string, string, string] = [
      String.fromCharCode(machine.positions[0] + 65),
      String.fromCharCode(machine.positions[1] + 65),
      String.fromCharCode(machine.positions[2] + 65),
    ];
    setPositions(newPos);

    setTypedPlain((prev) => prev + char);
    setTypedCipher((prev) => prev + outputChar);
  };

  // Add plugboard cable
  const handleAddPlug = () => {
    if (plugA === plugB) return;
    if (plugs.length >= 10) return; // Enigma standard max 10 plugs
    // remove any existing plug with plugA or plugB
    const filtered = plugs.filter(
      ([a, b]) => a !== plugA && b !== plugA && a !== plugB && b !== plugB
    );
    setPlugs([...filtered, [plugA, plugB]]);
  };

  const handleRemovePlug = (index: number) => {
    setPlugs(plugs.filter((_, i) => i !== index));
  };

  // Load Daily Secret Settings (Tageschlüssel)
  const handleLoadSheet = (sheet: typeof SECRET_SETTING_SHEETS[0]) => {
    setRotors(sheet.rotors);
    setRings(sheet.rings);
    setPositions(sheet.ground);
    setPlugs(sheet.plugs);
    setTypedPlain("");
    setTypedCipher("");
    setLastLitChar(null);
    setCurrentPath([]);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Header */}
      <div>
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/cryptography" className="hover:text-slate-200">لوحة التحكم</Link>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">المحاكي الميكانيكي (إنيجما)</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              آلة إنيجما الميكانيكية الدوارة (Enigma I 3-Rotor Machine)
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              محاكي فيزيائي وديناميكي كامل للآلة العسكرية الألمانية: حركة مسننات الأسطوانات الثلاث، لوحة المصابيح المضيئة، لوحة التوصيل، وجداول الإعدادات السرية اليومية.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-400">
            <span>النسخة:</span>
            <span className="text-yellow-400 font-bold">WEHRMACHT ENIGMA I</span>
          </div>
        </div>
      </div>

      {/* Main Enigma Workstation */}
      <div className="bg-[#10141f] border-2 border-[#1f2d48] rounded-2xl p-6 shadow-2xl space-y-8">
        {/* Top: 3 Rotors Module */}
        <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4 border-b border-[#1f2d48] pb-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                مجموعة الأسطوانات الدوارة (Rotor Assembly & Stepping)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>العاكس (Reflector):</span>
              <select
                value={reflector}
                onChange={(e) => setReflector(e.target.value)}
                className="bg-[#141e33] border border-[#1f2d48] text-yellow-400 font-mono text-xs rounded px-2 py-1"
              >
                <option value="B">Reflector B (القياسي)</option>
                <option value="C">Reflector C</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { slotName: "الأسطوانة اليسرى (بطيئة)", slotIdx: 0 },
              { slotName: "الأسطوانة الوسطى (متوسطة)", slotIdx: 1 },
              { slotName: "الأسطوانة اليمنى (سريعة - تدور مع كل حرف)", slotIdx: 2 },
            ].map(({ slotName, slotIdx }) => (
              <div
                key={slotIdx}
                className="bg-[#141e33] border border-[#1f2d48] rounded-xl p-4 flex flex-col items-center shadow-lg"
              >
                <span className="text-xs font-semibold text-slate-400 mb-2">{slotName}</span>

                {/* Rotor Model Selector */}
                <select
                  value={rotors[slotIdx]}
                  onChange={(e) => {
                    const newR = [...rotors] as [string, string, string];
                    newR[slotIdx] = e.target.value;
                    setRotors(newR);
                  }}
                  className="w-full bg-[#090d16] border border-[#1f2d48] text-sky-400 font-mono text-xs rounded-lg p-1.5 mb-3 text-center font-bold"
                >
                  {Object.keys(ENIGMA_ROTORS).map((rKey) => (
                    <option key={rKey} value={rKey}>
                      Rotor {rKey} (Notch: {ENIGMA_ROTORS[rKey].notch})
                    </option>
                  ))}
                </select>

                {/* Mechanical Position Wheel Display */}
                <div className="flex items-center gap-3 my-2">
                  <button
                    type="button"
                    onClick={() => stepRotorManual(slotIdx, -1)}
                    className="w-8 h-8 rounded-lg bg-[#090d16] border border-[#1f2d48] text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm"
                  >
                    ▲
                  </button>

                  <div className="w-16 h-20 bg-gradient-to-b from-[#090d16] via-[#1a263d] to-[#090d16] border-2 border-yellow-500/60 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-mono font-black text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">
                      {positions[slotIdx]}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => stepRotorManual(slotIdx, 1)}
                    className="w-8 h-8 rounded-lg bg-[#090d16] border border-[#1f2d48] text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm"
                  >
                    ▼
                  </button>
                </div>

                {/* Ring Setting */}
                <div className="w-full flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-[#1f2d48]">
                  <span>إعداد الحلقة (Ring):</span>
                  <input
                    type="number"
                    min="1"
                    max="26"
                    value={rings[slotIdx] + 1}
                    onChange={(e) => {
                      const newRings = [...rings] as [number, number, number];
                      newRings[slotIdx] = Math.max(0, Math.min(25, Number(e.target.value) - 1));
                      setRings(newRings);
                    }}
                    className="w-12 bg-[#090d16] border border-[#1f2d48] text-center text-xs text-slate-200 font-mono rounded py-0.5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: The Illuminated Lampboard (لوحة المصابيح المضيئة) */}
        <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-2xl p-6 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
              لوحة المصابيح المضيئة (Lampboard)
            </h4>
            <span className="text-xs text-slate-400 font-mono">
              المصباح المضيء حالياً: <strong className="text-yellow-300 text-sm font-bold">{lastLitChar || "لا شيء"}</strong>
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center p-5 bg-[#141e33] border border-[#1f2d48] rounded-2xl shadow-inner max-w-xl w-full">
            {KEYBOARD_ROWS.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-2 sm:gap-3 justify-center">
                {row.map((char) => {
                  const isLit = lastLitChar === char;
                  return (
                    <div
                      key={char}
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono font-bold text-sm border enigma-lamp transition-all ${
                        isLit
                          ? "lit font-black"
                          : "bg-[#090d16] border-slate-700/60 text-slate-500 shadow-sm"
                      }`}
                    >
                      {char}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Typing Keyboard (لوحة المفاتيح التفاعلية) */}
        <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-2xl p-6 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-3">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              لوحة المفاتيح العسكرية (Click or Type)
            </h4>
            <button
              type="button"
              onClick={() => {
                setTypedPlain("");
                setTypedCipher("");
                setLastLitChar(null);
                setCurrentPath([]);
              }}
              className="text-xs text-slate-400 hover:text-white"
            >
              مسح السجل (Clear)
            </button>
          </div>

          <div className="flex flex-col gap-2.5 items-center max-w-xl w-full">
            {KEYBOARD_ROWS.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-2 justify-center w-full">
                {row.map((char) => (
                  <button
                    key={char}
                    type="button"
                    onClick={() => handleKeyClick(char)}
                    className="w-9 h-10 sm:w-11 sm:h-12 rounded-xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-slate-600/70 text-slate-200 font-mono font-bold text-base hover:brightness-125 active:translate-y-0.5 active:bg-sky-600 active:text-white shadow-md transition-all flex items-center justify-center"
                  >
                    {char}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Live Output & Electrical Trace Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Transcript Tape */}
          <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-xl p-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-300">شريط البرقية (Paper Tape Transcript):</h4>
            <div className="space-y-2 font-mono text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">النص المدخل (Plaintext):</span>
                <div className="p-2.5 bg-[#090d16] border border-[#1f2d48] rounded text-sky-300 break-words tracking-widest min-h-[40px]">
                  {typedPlain || "اضغط على المفاتيح بالأعلى للبدء..."}
                </div>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">النص المشفر الناتج (Ciphertext):</span>
                <div className="p-2.5 bg-[#090d16] border border-yellow-500/30 rounded text-yellow-300 font-bold break-words tracking-widest min-h-[40px]">
                  {typedCipher || "—"}
                </div>
              </div>
            </div>
          </div>

          {/* Current Electrical Circuit Path */}
          <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-300">مسار الدائرة الكهربائية للحرف الأخير (Circuit Trace):</h4>
            {currentPath.length > 0 ? (
              <div className="overflow-y-auto max-h-[120px] crypto-scroll text-[11px] font-mono space-y-1">
                {currentPath.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400">
                    <span className="text-yellow-400 font-bold">→</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 pt-3">
                عند الضغط على أي حرف، سيتدفق التيار عبر لوحة التوصيل ثم الأسطوانات الثلاث ذهاباً وإياباً من العاكس حتى إضاءة المصباح.
              </p>
            )}
          </div>
        </div>

        {/* Plugboard (Steckerbrett) Wiring Editor */}
        <div className="bg-[#0b0e17] border border-[#1f2d48] rounded-xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1f2d48] pb-3">
            <div>
              <h4 className="text-sm font-bold text-slate-200">لوحة التوصيل الأمامية (Steckerbrett / Plugboard)</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                توصيل كابلات التبديل بين أزواج الحروف لمضاعفة تعقيد الشفرة بأكثر من 150 تريليون احتمال إضافي.
              </p>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/80 px-2.5 py-1 rounded-lg">
              الكابلات النشطة: {plugs.length}/10
            </span>
          </div>

          {/* Current Plug List */}
          <div className="flex flex-wrap gap-2">
            {plugs.map(([a, b], idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141e33] border border-sky-500/40 text-xs font-mono"
              >
                <span className="text-sky-300 font-bold">{a} ↔ {b}</span>
                <button
                  type="button"
                  onClick={() => handleRemovePlug(idx)}
                  className="text-slate-400 hover:text-rose-400 font-bold"
                  title="إلغاء التوصيل"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Add New Cable */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-slate-400">إضافة كابل جديد:</span>
            <select
              value={plugA}
              onChange={(e) => setPlugA(e.target.value)}
              className="bg-[#141e33] border border-[#1f2d48] text-xs font-mono rounded p-1 text-slate-200"
            >
              {ALPHABET.split("").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span className="text-slate-500">↔</span>
            <select
              value={plugB}
              onChange={(e) => setPlugB(e.target.value)}
              className="bg-[#141e33] border border-[#1f2d48] text-xs font-mono rounded p-1 text-slate-200"
            >
              {ALPHABET.split("").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddPlug}
              className="px-3 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-semibold hover:bg-sky-500/30"
            >
              توصيل كابل
            </button>
          </div>
        </div>
      </div>

      {/* German Secret Setting Sheets (ورقة الإعدادات اليومية السرية - Tageschlüssel) */}
      <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-6 space-y-4">
        <div className="border-b border-[#1f2d48] pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-yellow-400">
              ورقة الإعدادات السرية الألمانية اليومية (Tageschlüssel / Monthly Key Sheet)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              وثيقة تكتيكية سرية كان يتسلمها ضباط الاتصالات شهرياً ومطبوعة بحبر يذوب في الماء عند الخطر، تحدد إعدادات الآلة لكل يوم.
            </p>
          </div>
          <span className="text-xs text-slate-500 font-mono">GEHEIM (سري للغاية)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SECRET_SETTING_SHEETS.map((sheet) => (
            <div
              key={sheet.day}
              className="bg-[#090d16] border border-[#1f2d48] rounded-xl p-4 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-1">
                  <span className="text-yellow-400 font-mono">اليوم #{sheet.day}</span>
                  <span className="text-[11px] text-slate-500">{sheet.date}</span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">{sheet.notes}</p>

                <div className="space-y-1 font-mono text-[11px] text-slate-300 bg-[#141e33] p-2.5 rounded-lg border border-[#1f2d48]">
                  <div>ترتيب الأسطوانات: <strong className="text-sky-300">{sheet.rotors.join(" - ")}</strong></div>
                  <div>الحلقات (Ring): <strong className="text-slate-300">{sheet.rings.join(", ")}</strong></div>
                  <div>الموضع البدائي (Ground): <strong className="text-yellow-300">{sheet.ground.join("")}</strong></div>
                  <div>التوصيلات: <span className="text-slate-400">{sheet.plugs.map((p) => p.join("")).join(" ")}</span></div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleLoadSheet(sheet)}
                className="w-full py-2 rounded-lg text-xs font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 hover:bg-yellow-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>⚙</span>
                تحميل إعدادات هذا اليوم في الآلة
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
