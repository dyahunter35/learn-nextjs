"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "string-matching", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n        "}
      {"\n        "}
      <div className={"text-center mb-8"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"STRING MATCHING ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {t("legacy.46058973060f9bf6")}
        </h1>
        {"\n            "}
        <p className={"text-gray-500 mt-2"}>
          {t("legacy.41d2bb03f69e8d39")}
        </p>
        {"\n        "}
      </div>
      {"\n\n        "}
      <div className={"sm-container"}>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.a901f761a3660882")}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"}>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"textInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.00fc52b4164bcc71")}
              </label>
              {"\n                        "}
              <input type={"text"} id={"textInput"} defaultValue={"ABABDABACDABABCABAB"} dir={"ltr"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono text-sm focus:ring-0 focus:border-indigo-400 transition-all duration-200"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"patternInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.cd29b7f5f32ef181")}
              </label>
              {"\n                        "}
              <input type={"text"} id={"patternInput"} defaultValue={"ABABCABAB"} dir={"ltr"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono text-sm focus:ring-0 focus:border-indigo-400 transition-all duration-200"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"algorithmSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.f8a6912ee9c87f72")}
              </label>
              {"\n                        "}
              <select id={"algorithmSelect"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer"}>
                {"\n                            "}
                <option value={"naive"}>
                  {t("legacy.2da0e6d8d83a2ceb")}
                </option>
                {"\n                            "}
                <option value={"kmp"}>
                  {t("legacy.03894c52f35fcf24")}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                {" "}
              </label>
              {"\n                        "}
              <div className={"flex gap-2"}>
                {"\n                            "}
                <button data-legacy-click={"resetSimulation()"} className={"flex-1 px-4 py-3 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
                  {t("legacy.d1c2eaaa776c5219")}
                </button>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-6"}>
            {"\n                    "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"}>
              {t("legacy.cdcdb088305e072a")}
            </button>
            {"\n                    "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {t("legacy.0103ac838415af8b")}
            </button>
            {"\n                    "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {t("legacy.c0fa11616338a947")}
            </button>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center justify-between mb-4"}>
            {"\n                    "}
            <div className={"flex items-center gap-2"}>
              {"\n                        "}
              <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
              {"\n                        "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.539aa7a0eca5e517")}
              </h2>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
              {"\n                        "}
              <span id={"stepCounter"}></span>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"visualizationArea"} className={"sm-visualization"}>
            {"\n                    "}
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-default"} style={{"background":"#6366f1","display":"inline-block"}}></span>
              {t("legacy.b2981dfb94c9f4de")}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-comparing"} style={{"display":"inline-block"}}></span>
              {t("legacy.f58610369442c2da")}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-matched"} style={{"display":"inline-block"}}></span>
              {t("legacy.261530fdf2aeea90")}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-mismatched"} style={{"display":"inline-block"}}></span>
              {t("legacy.66b9892500ce7d93")}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-found"} style={{"display":"inline-block"}}></span>
              {t("legacy.97edd3dec902cdd0")}
            </span>
            {"\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div id={"prefixTableDisplay"} className={"mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200"}>
            {"\n                    "}
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.a07b7854cf797c7f")}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"statusMessage"} className={"sm-status mb-4"}>
            {t("legacy.3fee18c507645216")}
          </div>
          {"\n\n                "}
          <div id={"resultDisplay"} className={"mb-4"}>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex items-center justify-between mb-2"}>
            {"\n                    "}
            <span id={"stepInfo"} className={"text-sm text-gray-500 font-medium"}></span>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"sm-step-log"}>
            {"\n                    "}
            <table className={"sm-step-table"}>
              <thead>
                <tr>
                  <th>
                    {"#"}
                  </th>
                  <th>
                    {t("legacy.0ca5d92c6fdfed84")}
                  </th>
                  <th>
                    {t("legacy.941e8670e5d497a9")}
                  </th>
                  <th>
                    {t("legacy.3c64ba0afab6c4a8")}
                  </th>
                </tr>
              </thead>
              <tbody id={"stepLogBody"}>

              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n  \n"}
    </div>
  );
}
