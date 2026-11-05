"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Board,
  Player,
  checkWinner,
  findBestMove,
  minimaxWithStats,
  MinimaxStats,
} from "@/lib/ai-engine";
import { useLanguage } from "@/components/LanguageProvider";

export default function MinimaxGamePage() {
  const { language } = useLanguage();
  const en = language === "en";

  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [humanPlayer] = useState<"X" | "O">("X");
  const aiPlayer: "X" | "O" = humanPlayer === "X" ? "O" : "X";
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [useAlphaBeta, setUseAlphaBeta] = useState(true);
  const [difficulty, setDifficulty] = useState<"unbeatable" | "medium" | "easy">("unbeatable");

  const [lastStats, setLastStats] = useState<MinimaxStats | null>(null);
  const [comparisonStats, setComparisonStats] = useState<{ withoutPruning: number; withPruning: number } | null>(null);
  const [scoresSnapshot, setScoresSnapshot] = useState<{ move: number; score: number }[]>([]);

  const { winner, line: winningLine } = checkWinner(board);
  const isDraw = !winner && board.every((c) => c !== null);
  const isGameOver = Boolean(winner) || isDraw;

  const handleCellClick = (index: number) => {
    if (board[index] !== null || isGameOver || isAiThinking) return;

    // Human move
    const newBoard = [...board];
    newBoard[index] = humanPlayer;
    setBoard(newBoard);

    const check = checkWinner(newBoard);
    if (check.winner || newBoard.every((c) => c !== null)) {
      return;
    }

    // AI move
    setIsAiThinking(true);
    setTimeout(() => {
      let chosenMove = -1;
      let statsToSave: MinimaxStats | null = null;

      if (difficulty === "easy") {
        // Random move
        const available = newBoard.map((c, i) => (c === null ? i : null)).filter((i): i is number => i !== null);
        chosenMove = available[Math.floor(Math.random() * available.length)];
      } else {
        const depthLimit = difficulty === "medium" ? 2 : 9;

        // Run with Alpha-Beta
        const bestWithPrune = findBestMove(newBoard, aiPlayer, true, depthLimit);
        // Also run without pruning to compare node count
        const bestWithoutPrune = findBestMove(newBoard, aiPlayer, false, depthLimit);

        chosenMove = bestWithPrune.bestMove;
        statsToSave = useAlphaBeta ? bestWithPrune.stats : bestWithoutPrune.stats;

        setComparisonStats({
          withPruning: bestWithPrune.stats.nodesEvaluated,
          withoutPruning: bestWithoutPrune.stats.nodesEvaluated,
        });
        setScoresSnapshot(bestWithPrune.stats.treeSnapshot);
      }

      if (chosenMove !== -1) {
        newBoard[chosenMove] = aiPlayer;
        setBoard(newBoard);
      }

      if (statsToSave) {
        setLastStats(statsToSave);
      }
      setIsAiThinking(false);
    }, 150);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setLastStats(null);
    setComparisonStats(null);
    setScoresSnapshot([]);
    setIsAiThinking(false);
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">{en ? "Home" : "الرئيسية"}</Link>
        <span>/</span>
        <Link href="/ai/" className="hover:text-white transition-colors">{en ? "AI Lab" : "معمل الذكاء الاصطناعي"}</Link>
        <span>/</span>
        <span className="text-violet-400 font-bold">{en ? "Minimax Games" : "الألعاب التنافسية Minimax"}</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎮</span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {en ? "Minimax & Alpha-Beta Game Engine" : "محاكي خوارزمية Minimax وتقليم ألفا-بيتا"}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {en
              ? "Minimax is the foundational game theory algorithm behind Deep Blue and chess engines. Alpha-Beta pruning cuts unpromising search branches to achieve optimal play in a fraction of the time."
              : "خوارزمية مينيماكس هي الأساس النظري لمحركات الشطرنج والألعاب التنافسية. يفترض الحاسوب أن الخصم سيلعب أفضل حركة ممكنة، ويستخدم تقليم ألفا-بيتا لاستبعاد الفروع غير المجدية وتوفير الحسابات."}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#0f172a] p-3 rounded-2xl border border-slate-800 text-xs font-mono">
          <div className="text-center px-2">
            <span className="text-slate-400 block text-[10px]">شرط التقليم</span>
            <span className="text-emerald-400 font-bold text-sm">β ≤ α ⇒ Cut-off</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Game Board & Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="ai-card p-6 sm:p-8 space-y-6">
            {/* Game Options & Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 font-bold">{en ? "Difficulty:" : "مستوى الذكاء:"}</span>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as "unbeatable" | "medium" | "easy")}
                  className="bg-[#0f172a] text-slate-200 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-violet-500 font-bold"
                >
                  <option value="unbeatable">🎯 غير قابل للهزيمة (Minimax كامل)</option>
                  <option value="medium">⚡ متوسط (عمق حركتين)</option>
                  <option value="easy">🎲 عشوائي (سهل)</option>
                </select>
              </div>

              {/* Alpha-Beta Toggle */}
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                <input
                  type="checkbox"
                  checked={useAlphaBeta}
                  onChange={(e) => setUseAlphaBeta(e.target.checked)}
                  className="w-4 h-4 accent-violet-500 rounded"
                />
                <span>تفعيل تقليم Alpha-Beta</span>
              </label>
            </div>

            {/* Turn Status Message */}
            <div className="text-center py-2">
              {winner ? (
                <div className="text-lg font-black text-rose-400 animate-bounce">
                  {winner === humanPlayer ? "🎉 فزت بالمباراة!" : "🤖 فاز الذكاء الاصطناعي (حسابات مثالية)!"}
                </div>
              ) : isDraw ? (
                <div className="text-lg font-black text-amber-400">
                  🤝 تعادل حتمي (نتيجة اللعب المثالي لكلا الطرفين)
                </div>
              ) : isAiThinking ? (
                <div className="text-sm font-bold text-violet-400 animate-pulse flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                  الذكاء الاصطناعي يقيم فضاء الاحتمالات وشجرة الحركات...
                </div>
              ) : (
                <div className="text-sm font-bold text-slate-300">
                  دورك باللعب بالرمز <strong className="text-cyan-400 text-base">X</strong> - انقر على أي خلية فارغة
                </div>
              )}
            </div>

            {/* 3x3 Tic-Tac-Toe Board */}
            <div className="ttt-grid">
              {board.map((cell, idx) => {
                const isWinningCell = winningLine?.includes(idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCellClick(idx)}
                    disabled={cell !== null || isGameOver || isAiThinking}
                    className={`ttt-cell ${isWinningCell ? "is-winning" : ""} ${
                      cell === "X" ? "text-cyan-400" : cell === "O" ? "text-violet-400" : ""
                    }`}
                  >
                    {cell}
                  </button>
                );
              })}
            </div>

            {/* Reset Button */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all shadow-md"
              >
                🔄 إعادة بدء جولة جديدة
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Analytics, Pruning Stats & Decision Tree (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Pruning Efficiency Card */}
          <div className="ai-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-violet-400">DECISION METRICS</span>
              <span className="text-xs px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-800">
                {useAlphaBeta ? "Alpha-Beta ON" : "Plain Minimax"}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">العقد المقيمة في آخر نقلة:</span>
                <span className="text-cyan-400 font-black text-sm">
                  {lastStats?.nodesEvaluated ?? 0}
                </span>
              </div>

              {comparisonStats && (
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-[11px] text-slate-400 font-sans font-bold">مقارنة كفاءة التقليم:</div>
                  <div className="flex justify-between text-rose-400">
                    <span>Minimax بدون تقليم:</span>
                    <span className="font-bold">{comparisonStats.withoutPruning} عقدة</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>مع تقليم Alpha-Beta:</span>
                    <span className="font-bold">{comparisonStats.withPruning} عقدة</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 pt-1 border-t border-slate-800 font-sans">
                    تم توفير{" "}
                    <strong>
                      {Math.max(
                        0,
                        Math.round(
                          ((comparisonStats.withoutPruning - comparisonStats.withPruning) /
                            (comparisonStats.withoutPruning || 1)) *
                            100
                        )
                      )}
                      %
                    </strong>{" "}
                    من طاقة المعالجة دون المساس بدقة النتيجة!
                  </div>
                </div>
              )}

              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">الفروع المقلمة المستبعدة:</span>
                <span className="text-emerald-400 font-black text-sm">
                  {lastStats?.prunedBranches ?? 0}
                </span>
              </div>

              <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">عمق شجرة اللعب:</span>
                <span className="text-violet-400 font-black text-sm">
                  {lastStats?.maxDepthReached ?? 0} مستويات
                </span>
              </div>
            </div>
          </div>

          {/* Move Evaluation Scores Snapshot */}
          <div className="ai-card p-6 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              تقييم الحركات المتاحة (Scoring Matrix)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              يقيم الذكاء الاصطناعي كل خانة فارغة بدرجة: +10 للفوز السريع، 0 للتعادل، و-10 للهزيمة.
            </p>

            <div className="space-y-1.5 text-xs font-mono">
              {scoresSnapshot.length === 0 ? (
                <div className="text-slate-500 text-center py-4">
                  قم بحركة على اللوحة لرؤية تقييم الخيارات المتاحة
                </div>
              ) : (
                scoresSnapshot.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded bg-[#0f172a] border border-slate-800"
                  >
                    <span className="text-slate-300">الخانة #{s.move + 1}:</span>
                    <span
                      className={`font-bold ${
                        s.score > 0
                          ? "text-emerald-400"
                          : s.score === 0
                          ? "text-amber-400"
                          : "text-rose-400"
                      }`}
                    >
                      {s.score > 0 ? `+${s.score}` : s.score} ({s.score > 0 ? "فوز" : s.score === 0 ? "تعادل" : "خسارة"})
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Theory & Mathematical Formula Card */}
      <section className="ai-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">📐</span>
          <h2 className="text-lg font-bold text-white">كيف يعمل تقليم ألفا-بيتا رياضياً؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold text-violet-400 text-sm">مفهوم المتغيرين α و β:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>$\alpha$ (ألفا)</strong>: أفضل قيمة (أعلى نتيجة) ضمنها اللاعب الذي يعظم النتيجة (MAX) حتى الآن في مسار البحث.
              </li>
              <li>
                <strong>$\beta$ (بيتا)</strong>: أفضل قيمة (أقل نتيجة) ضمنها اللاعب الخصم الذي يقلل النتيجة (MIN) حتى الآن.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-emerald-400 text-sm">قاعدة التقليم الفوري:</h3>
            <p>
              عندما تكتشف الخوارزمية في أي عقدة أن $\beta \le \alpha$، فإنها توقف فوراً فحص بقية فروع تلك العقدة، لأن اللاعب الخصم العقلاني لن يسمح بالوصول إلى هذا المسار أبداً:
            </p>
            <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-800 text-center font-mono text-emerald-300">
              if (beta &le; alpha) break; // Alpha-Beta Cutoff
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

