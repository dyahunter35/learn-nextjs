"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "searching", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-5xl mx-auto py-8 md:py-12 px-4"}>
      {"\n      "}
      {"\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SEARCHING ALGORITHMS"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {t("legacy.8bbd76b433dba98b")}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {t("legacy.ba8d47421b1dee97")}
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
              {t("legacy.a901f761a3660882")}
            </h2>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"}>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"algorithmSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.4df6b4c34bc66025")}
              </label>
              {"\n              "}
              <select id={"algorithmSelect"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer"} data-legacy-change={"resetSearch(true)"}>
                {"\n                "}
                <option value={"sequential"}>
                  {t("legacy.ee3f9eab2aae3584")}
                </option>
                {"\n                "}
                <option value={"binary"}>
                  {t("legacy.dffa87a79fb399c4")}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"targetInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.50f8486b97789301")}
              </label>
              {"\n              "}
              <input type={"number"} id={"targetInput"} defaultValue={"30"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left focus:ring-0 focus:border-indigo-400 transition-all duration-200"} dir={"ltr"} data-legacy-change={"resetSearch(true)"} />
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"arrayInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.e341289b4dba125a")}
              </label>
              {"\n              "}
              <div className={"flex gap-2"}>
                {"\n                "}
                <input type={"text"} id={"arrayInput"} defaultValue={"10,20,30,40,50,60,70,80,90,100"} className={"flex-1 px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono text-sm focus:ring-0 focus:border-indigo-400 transition-all duration-200"} dir={"ltr"} />
                {"\n                "}
                <button data-legacy-click={"updateArray()"} className={"px-4 py-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold rounded-xl transition-all duration-200 text-sm whitespace-nowrap border-2 border-indigo-200 hover:border-indigo-300"}>
                  {t("legacy.00eab31f95b7da86")}
                </button>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-6"}>
            {"\n            "}
            <button data-legacy-click={"startSearch()"} id={"startButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"}>
              {t("legacy.676d0a28058984a5")}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {t("legacy.0103ac838415af8b")}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {t("legacy.c0fa11616338a947")}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSearch(true)"} className={"px-6 py-3.5 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
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
          <div className={"flex items-center justify-between mb-4"}>
            {"\n            "}
            <div className={"flex items-center gap-2"}>
              {"\n              "}
              <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.abdc5dbc684d36ba")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <span id={"nodeCountBadge"}>
                {t("legacy.52bf43b9b410d55c")}
              </span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"arrayContainer"} className={"array-container"}>
            {"\n          "}
          </div>
          {"\n          "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#6366f1] inline-block"}></span>
              {t("legacy.b2981dfb94c9f4de")}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#fbbf24] inline-block"}></span>
              {t("legacy.f58610369442c2da")}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#34d399] inline-block"}></span>
              {t("legacy.97edd3dec902cdd0")}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#e5e7eb] opacity-50 inline-block"}></span>
              {t("legacy.eb0bd9ba362a61d0")}
            </span>
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
            {t("legacy.3fee18c507645216")}
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
