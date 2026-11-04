"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "divide-conquer", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n      "}
      {"\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"MERGE SORT — DIVIDE & CONQUER"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {t("legacy.70abd99c7a34f2ab")}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {t("legacy.d825bc9ec76afb50")}
        </p>
        {"\n      "}
      </div>
      {"\n\n      "}
      {"\n      "}
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.4ba81b973cc839b0")}
            </h2>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"algorithmLabel"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.e9bec262a08d08ef")}
              </label>
              {"\n              "}
              <div className={"w-full px-5 py-4 bg-indigo-50 text-indigo-700 border-2 border-indigo-200 rounded-xl font-bold"} id={"algorithmLabel"}>
                {t("legacy.c3fdc307bbadd44a")}
              </div>
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"arrayInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.1aa4d2d8f3b3d5c1")}
              </label>
              {"\n              "}
              <input type={"text"} id={"arrayInput"} defaultValue={"38,27,43,3,9,82,10"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono focus:ring-0 focus:border-indigo-400 transition-all duration-200"} dir={"ltr"} data-legacy-change={"resetSimulation(true)"} />
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
            {"\n            "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"}>
              {t("legacy.a8094f238fe603c2")}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {t("legacy.0103ac838415af8b")}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {t("legacy.c0fa11616338a947")}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSimulation(true)"} className={"px-6 py-3.5 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
              {t("legacy.d1c2eaaa776c5219")}
            </button>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"grid grid-cols-1 xl:grid-cols-4 gap-6"}>
            {"\n            "}
            {"\n            "}
            <div className={"xl:col-span-3"}>
              {"\n              "}
              <div className={"flex items-center justify-between mb-4"}>
                {"\n                "}
                <div className={"flex items-center gap-2"}>
                  {"\n                  "}
                  <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
                  {"\n                  "}
                  <h2 className={"text-lg font-bold text-gray-800"}>
                    {t("legacy.2b2bc283c8d64031")}
                  </h2>
                  {"\n                "}
                </div>
                {"\n                "}
                <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
                  {"\n                  "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                    {"\n                    "}
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3 4h13M3 8h9m-9 4h16m-9 4h5m-6 4l-4-4m0 0l4-4m-4 4h18"}></path>
                    {"\n                  "}
                  </svg>
                  {"\n                  "}
                  <span id={"nodeCountBadge"}>
                    {t("legacy.9d8df5743d8dd2a8")}
                  </span>
                  {"\n                "}
                </div>
                {"\n              "}
              </div>
              {"\n              "}
              <div id={"arrayContainer"} className={"dc-container"}>
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"dc-legend"}>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-default"}></span>
                  {t("legacy.b2981dfb94c9f4de")}
                </span>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-dividing"}></span>
                  {t("legacy.b74f43309952c95a")}
                </span>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-comparing"}></span>
                  {t("legacy.f58610369442c2da")}
                </span>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-merged"}></span>
                  {t("legacy.0b20f5cf8f786a8a")}
                </span>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-placed"}></span>
                  {t("legacy.228dfc3100c5118a")}
                </span>
                {"\n                "}
                <span className={"dc-legend-item"}>
                  <span className={"dc-legend-swatch legend-inactive"}></span>
                  {t("legacy.d9293e12301bf88d")}
                </span>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div className={"xl:col-span-1 border-t xl:border-t-0 xl:border-r border-gray-200 pt-4 xl:pt-0 xl:pr-6"}>
              {"\n              "}
              <div className={"flex items-center gap-2 mb-4"}>
                {"\n                "}
                <div className={"w-3 h-3 bg-purple-500 rounded-full animate-pulse"}></div>
                {"\n                "}
                <h2 className={"text-lg font-bold text-gray-800"}>
                  {t("legacy.2ff8dcd77e478be6")}
                </h2>
                {"\n              "}
              </div>
              {"\n              "}
              <div id={"treeContainer"} className={"dc-tree-wrapper"} style={{"minHeight":"300px"}}>
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"mt-2 text-xs text-gray-400 text-center"}>
                {"\n                "}
                <span className={"inline-block w-3 h-3 rounded bg-[#6366f1] align-middle"}></span>
                {t("legacy.b2981dfb94c9f4de")}
                <span className={"inline-block w-3 h-3 rounded bg-[#f59e0b] align-middle mr-2"}></span>
                {t("legacy.629e90b3af3d7de5")}
                <span className={"inline-block w-3 h-3 rounded bg-[#10b981] align-middle mr-2"}></span>
                {t("legacy.8bf9a953a1bcd0cf")}
                <span className={"inline-block w-3 h-3 rounded bg-[#8b5cf6] align-middle mr-2"}></span>
                {t("legacy.5766e806c15dac2f")}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.a07b7854cf797c7f")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"statusMessage"} className={"status-message mb-4"}>
            {t("legacy.adf1ac1c8ca04175")}
          </div>
          {"\n          "}
          <div id={"stepsLog"} className={"steps-log-container"}>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n    \n"}
    </div>
  );
}
