"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AVLNode,
  insertAVL,
  searchAVL,
  layoutTree,
  BinaryMaxHeap,
  Trie,
} from "@/lib/tree-engine";
import { useLanguage } from "@/components/LanguageProvider";

export default function TreesLabPage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [activeTab, setActiveTab] = useState<"avl" | "heap" | "trie">("avl");

  // AVL Tree State
  const [avlRoot, setAvlRoot] = useState<AVLNode | null>(() => {
    let root: AVLNode | null = null;
    const initial = [20, 10, 30, 5, 15, 25, 40];
    for (const k of initial) root = insertAVL(root, k);
    return root;
  });
  const [avlInput, setAvlInput] = useState<string>("35");
  const [lastRotation, setLastRotation] = useState<string>("none");
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchFound, setSearchFound] = useState<boolean | null>(null);

  // Binary Heap State
  const [heapInstance, setHeapInstance] = useState<BinaryMaxHeap>(
    () => new BinaryMaxHeap([50, 40, 30, 20, 10, 5])
  );
  const [heapInput, setHeapInput] = useState<string>("45");

  // Trie State
  const [trieInstance] = useState<Trie>(() => {
    const t = new Trie();
    ["كتاب", "كاتب", "مكتبة", "مكتوب", "قلم", "علم", "algorithm", "algebra", "apple"].forEach(
      (w) => t.insert(w)
    );
    return t;
  });
  const [trieNewWord, setTrieNewWord] = useState<string>("");
  const [triePrefix, setTriePrefix] = useState<string>("كت");
  const [trieMatches, setTrieMatches] = useState<string[]>(() =>
    trieInstance.startsWith("كت")
  );

  // AVL Actions
  const handleInsertAVL = () => {
    const val = parseInt(avlInput, 10);
    if (isNaN(val)) return;
    const tracker = { rotation: "none" as "LL" | "RR" | "LR" | "RL" | "none" };
    const updated = insertAVL(avlRoot, val, tracker);
    setAvlRoot(updated);
    setLastRotation(tracker.rotation);
    setAvlInput("");
  };

  const handleResetAVL = (preset: number[]) => {
    let root: AVLNode | null = null;
    const tracker = { rotation: "none" as "LL" | "RR" | "LR" | "RL" | "none" };
    for (const k of preset) {
      root = insertAVL(root, k, tracker);
    }
    setAvlRoot(root);
    setLastRotation(tracker.rotation);
  };

  const handleSearchAVL = () => {
    const val = parseInt(searchKey, 10);
    if (isNaN(val)) return;
    setSearchFound(searchAVL(avlRoot, val));
  };

  // Heap Actions
  const handleHeapInsert = () => {
    const val = parseInt(heapInput, 10);
    if (isNaN(val)) return;
    heapInstance.insert(val);
    setHeapInstance(new BinaryMaxHeap([...heapInstance.heap]));
    setHeapInput("");
  };

  const handleHeapExtract = () => {
    heapInstance.extractMax();
    setHeapInstance(new BinaryMaxHeap([...heapInstance.heap]));
  };

  // Trie Actions
  const handleTrieInsert = () => {
    if (!trieNewWord.trim()) return;
    trieInstance.insert(trieNewWord.trim());
    setTrieNewWord("");
    setTrieMatches(trieInstance.startsWith(triePrefix));
  };

  const handleTriePrefixChange = (val: string) => {
    setTriePrefix(val);
    setTrieMatches(trieInstance.startsWith(val));
  };

  const laidOutTree = layoutTree(avlRoot);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen text-slate-100 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/algorithms/" className="hover:text-white transition-colors">{en ? "Algorithms" : "المكتبة"}</Link>
        <span>/</span>
        <span className="text-emerald-400 font-bold">{en ? "Advanced Trees" : "الأشجار وهياكل البيانات المتقدمة"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🌳</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Advanced Trees & Data Structures Lab" : "معمل الأشجار وهياكل البيانات المتقدمة"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "Explore self-balancing AVL Trees with live rotations, Binary Max-Heaps with priority queue scheduling, and Prefix Tries for ultra-fast text indexing."
              : "استكشف أشجار AVL ذاتية التوازن مع حركات الدوران التلقائية، كومة البيانات القصوى (Max-Heap) لتنظيم طوابير الأولويات، وشجرة البادئات (Trie) للإكمال التلقائي والمعاجم."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex rounded-xl bg-slate-900 border border-slate-800 p-1 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("avl")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "avl"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ⚖️ شجرة AVL
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("heap")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "heap"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ⛰️ كومة Max-Heap
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("trie")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "trie"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📖 شجرة البادئات Trie
          </button>
        </div>
      </div>

      {/* TAB 1: AVL TREE */}
      {activeTab === "avl" && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="رقم جديد (مثال: 25)"
                  value={avlInput}
                  onChange={(e) => setAvlInput(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 w-36 focus:outline-none focus:border-emerald-500 font-mono"
                />
                <button
                  type="button"
                  onClick={handleInsertAVL}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  ➕ إدراج في الشجرة
                </button>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400">حالات الدوران النموذجية:</span>
                <button
                  type="button"
                  onClick={() => handleResetAVL([10, 20, 30])}
                  className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
                >
                  دوران RR (10,20,30)
                </button>
                <button
                  type="button"
                  onClick={() => handleResetAVL([30, 20, 10])}
                  className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
                >
                  دوران LL (30,20,10)
                </button>
                <button
                  type="button"
                  onClick={() => handleResetAVL([30, 10, 20])}
                  className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono"
                >
                  دوران مزدوج LR
                </button>
              </div>

              {/* Search in AVL */}
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="بحث عن رقم..."
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 w-28 focus:outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={handleSearchAVL}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
                >
                  🔍 بحث
                </button>
                {searchFound !== null && (
                  <span className={`text-xs font-bold ${searchFound ? "text-emerald-400" : "text-rose-400"}`}>
                    {searchFound ? "موجود ✓" : "غير موجود ✕"}
                  </span>
                )}
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
              <span className="text-slate-400">
                حالة الدوران الأخيرة:{" "}
                <strong className="text-emerald-400 font-mono uppercase">
                  {lastRotation === "none" ? "توازن طبيعي (No Rotation)" : `دوران ${lastRotation} تم بنجاح`}
                </strong>
              </span>
              <span className="text-slate-500 font-mono">
                عامل التوازن لكل عقدة: BF = h(Left) - h(Right) ∈ {"{-1, 0, 1}"}
              </span>
            </div>
          </div>

          {/* SVG Tree Visualizer */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-x-auto text-center">
            <svg width="700" height="320" className="mx-auto select-none">
              {/* Recursive Tree Links & Nodes */}
              {renderSvgTree(laidOutTree)}
            </svg>
          </div>
        </div>
      )}

      {/* TAB 2: BINARY MAX-HEAP */}
      {activeTab === "heap" && (
        <div className="space-y-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="رقم جديد..."
                value={heapInput}
                onChange={(e) => setHeapInput(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 w-32 focus:outline-none font-mono"
              />
              <button
                type="button"
                onClick={handleHeapInsert}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                ➕ إدراج في الكومة
              </button>
              <button
                type="button"
                onClick={handleHeapExtract}
                disabled={heapInstance.heap.length === 0}
                className="px-4 py-2 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-500/40 text-rose-300 font-bold text-xs disabled:opacity-40"
              >
                🔺 سحب القيمة العظمى (Extract Max)
              </button>
            </div>

            <span className="text-xs font-mono text-slate-400">
              الجذر دائماً هو العنصر الأكبر: <strong className="text-emerald-400">{heapInstance.peek() ?? "فارغ"}</strong>
            </span>
          </div>

          {/* Array Representation & Node Indexes */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="text-xs font-bold text-slate-300">
              التمثيل المصفوفي الخطي للكومة (Array Representation):
            </div>
            <div className="flex flex-wrap gap-2 font-mono">
              {heapInstance.heap.map((val, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-700 rounded-lg p-2 text-center min-w-[50px]">
                  <span className="text-[10px] text-slate-500 block">i = {idx}</span>
                  <span className="text-base font-black text-emerald-400">{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              قواعد الفهرسة: الأب عند ⌊(i-1)/2⌋ | الابن الأيسر عند 2i+1 | الابن الأيمن عند 2i+2
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: TRIE / PREFIX TREE */}
      {activeTab === "trie" && (
        <div className="space-y-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="أضف كلمة جديدة..."
                value={trieNewWord}
                onChange={(e) => setTrieNewWord(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 w-44 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleTrieInsert}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
              >
                ➕ إضافة للمعاجم
              </button>
            </div>

            {/* Prefix Autocomplete */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300">اختبر الإكمال التلقائي بالبادئة:</span>
              <input
                type="text"
                value={triePrefix}
                onChange={(e) => handleTriePrefixChange(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs text-cyan-300 rounded-lg px-3 py-1.5 w-32 font-bold focus:outline-none"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white">الكلمات المطابقة للبادئة &quot;{triePrefix}&quot;:</h3>
            <div className="flex flex-wrap gap-2">
              {trieMatches.length === 0 ? (
                <span className="text-xs text-slate-500">لا توجد كلمات تبدأ بهذه الحروف</span>
              ) : (
                trieMatches.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-800/80 text-cyan-300 font-bold text-sm shadow-sm"
                  >
                    {word}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Theory & Math KaTeX Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 text-xs text-slate-300">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <span>📐</span>
          <span>التعقيد الزمني والمعادلات الرياضية</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <h3 className="font-bold text-emerald-400">شجرة AVL المتوازنة:</h3>
            <p>تضمن عمق أقصى لا يتجاوز $1.44 \log_2(n)$، مما يجعل عمليات الإدراج والبحث والحذف تستغرق زمناً مضموناً:</p>
            <div className="font-mono text-emerald-300 bg-slate-950 p-2 rounded">O(log n) Time</div>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-cyan-400">كومة Max-Heap:</h3>
            <p>استخراج العنصر الأكبر في $O(1)$ مع إعادة الترتيب في $O(\log n)$، وبناء الكومة الكاملة من مصفوفة في:</p>
            <div className="font-mono text-cyan-300 bg-slate-950 p-2 rounded">O(n) Build Time</div>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-amber-400">شجرة البادئات Trie:</h3>
            <p>البحث والإدراج يعتمد فقط على طول الكلمة $L$ دون أي تأثر بعدد الكلمات الإجمالي المخزن في المعجم:</p>
            <div className="font-mono text-amber-300 bg-slate-950 p-2 rounded">O(L) Search Time</div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper to render SVG nodes and connection lines
function renderSvgTree(node: AVLNode | null): React.ReactNode {
  if (!node || node.x === undefined || node.y === undefined) return null;

  return (
    <g key={node.key}>
      {/* Line to Left Child */}
      {node.left && node.left.x !== undefined && node.left.y !== undefined && (
        <line
          x1={node.x}
          y1={node.y}
          x2={node.left.x}
          y2={node.left.y}
          stroke="#334155"
          strokeWidth="2"
        />
      )}
      {/* Line to Right Child */}
      {node.right && node.right.x !== undefined && node.right.y !== undefined && (
        <line
          x1={node.x}
          y1={node.y}
          x2={node.right.x}
          y2={node.right.y}
          stroke="#334155"
          strokeWidth="2"
        />
      )}

      {/* Current Node Circle */}
      <circle
        cx={node.x}
        cy={node.y}
        r="18"
        fill="#0f172a"
        stroke="#10b981"
        strokeWidth="2.5"
      />
      <text
        x={node.x}
        y={node.y + 4}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="12"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        {node.key}
      </text>

      {/* Balance Factor badge */}
      <text
        x={node.x}
        y={node.y - 22}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="9"
        fontFamily="monospace"
      >
        h={node.height}
      </text>

      {/* Recurse */}
      {renderSvgTree(node.left)}
      {renderSvgTree(node.right)}
    </g>
  );
}

