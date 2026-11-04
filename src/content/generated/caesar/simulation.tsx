"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "caesar", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-4 md:py-6 px-3 sm:px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto space-y-4"}>
        {"\n\n        "}
        <div className={"text-center mb-3"}>
          {"\n          "}
          <span className={"inline-block text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full font-bold text-xs tracking-wider uppercase mb-1.5"}>
            {t("legacy.08dff3b0da0058fc")}
          </span>
          {"\n          "}
          <h1 className={"text-2xl md:text-3xl font-extrabold text-gray-900"}>
            {t("legacy.4e50e9ae2a645460")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 text-xs md:text-sm mt-1"}>
            {t("legacy.8a781afb8e86085a")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-3.5 md:p-4 border-b border-gray-100 bg-slate-50/50"}>
            {"\n            "}
            <div className={"flex items-center justify-between gap-2 mb-2"}>
              {"\n              "}
              <div className={"flex items-center gap-2"}>
                {"\n                "}
                <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
                {"\n                "}
                <h2 className={"text-sm font-bold text-gray-800"}>
                  {t("legacy.32d62ba886749ea0")}
                </h2>
                {"\n              "}
              </div>
              {"\n              "}
              <span className={"text-[11px] text-gray-400"}>
                {t("legacy.e8417a04325e4956")}
              </span>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"alphabetTableContainer"} className={"overflow-x-auto rounded-xl border border-gray-200 bg-white p-2"}>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-4 md:p-5 border-b border-gray-100 space-y-3"}>
            {"\n            "}
            <div className={"flex items-center gap-2"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-sm font-bold text-gray-800"}>
                {t("legacy.d9a89a93276165c8")}
              </h2>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"grid grid-cols-1 md:grid-cols-12 gap-3 items-start"}>
              {"\n              "}
              <div className={"md:col-span-9"}>
                {"\n                "}
                <label htmlFor={"textInput"} className={"block text-xs font-bold text-gray-700 mb-1"}>
                  {t("legacy.9fe8f15516a5e830")}
                </label>
                {"\n                "}
                <textarea id={"textInput"} rows={2} className={"w-full px-3.5 py-2.5 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-400 text-right text-sm"} placeholder={"أدخل النص هنا للتشفير أو فك التشفير..."} data-legacy-input={"resetCipher(true)"}>
                  {t("legacy.edf5d932616f1481")}
                </textarea>
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"md:col-span-3"}>
                {"\n                "}
                <label htmlFor={"keyInput"} className={"block text-xs font-bold text-gray-700 mb-1"}>
                  {t("legacy.5013624f9a6b2caf")}
                </label>
                {"\n                "}
                <input type={"number"} id={"keyInput"} defaultValue={"3"} min={"1"} max={"27"} className={"w-full px-3 py-2 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-center font-bold text-base focus:ring-0 focus:border-indigo-400 transition-colors"} data-legacy-input={"resetCipher(true)"} />
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div className={"flex flex-col sm:flex-row gap-2 pt-1"}>
              {"\n              "}
              <button data-legacy-click={"startCipher('encrypt')"} id={"encryptButton"} className={"flex-1 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white py-2.5 px-4 rounded-xl text-sm font-bold hover:from-indigo-700 hover:to-indigo-800 transition duration-150 shadow-md shadow-indigo-100 disabled:opacity-50"}>
                {t("legacy.06eaab093501b264")}
              </button>
              {"\n              "}
              <button data-legacy-click={"startCipher('decrypt')"} id={"decryptButton"} className={"flex-1 bg-gradient-to-l from-purple-600 to-purple-700 text-white py-2.5 px-4 rounded-xl text-sm font-bold hover:from-purple-700 hover:to-purple-800 transition duration-150 shadow-md shadow-purple-100 disabled:opacity-50"}>
                {t("legacy.6ce29cb0340fb55a")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"sticky top-2 z-20 bg-white/95 backdrop-blur-md p-3 md:p-3.5 border-b border-gray-200 shadow-sm"}>
            {"\n            "}
            <div className={"flex flex-wrap items-center justify-between gap-2 mb-2"}>
              {"\n              "}
              <div className={"flex items-center gap-2"}>
                {"\n                "}
                <span className={"inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold"}>
                  {"▶"}
                </span>
                {"\n                "}
                <span className={"text-xs font-bold text-gray-700"}>
                  {t("legacy.b3e9a05efe79940d")}
                </span>
                {"\n              "}
              </div>
              {"\n              "}
              <span id={"stepCounter"} className={"text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700"}>
                {t("legacy.78436e9ac7e3fd24")}
              </span>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"grid grid-cols-2 sm:grid-cols-5 gap-2"}>
              {"\n              "}
              <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"col-span-1 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white py-2 px-3 rounded-xl text-xs sm:text-sm font-bold hover:from-emerald-600 hover:to-emerald-700 transition duration-150 shadow shadow-emerald-200 disabled:opacity-40"} disabled={true}>
                {t("legacy.7d351cf35d45eb58")}
              </button>
              {"\n              "}
              <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"col-span-1 bg-gradient-to-l from-gray-500 to-gray-600 text-white py-2 px-3 rounded-xl text-xs sm:text-sm font-bold hover:from-gray-600 hover:to-gray-700 transition duration-150 shadow shadow-gray-200 disabled:opacity-40"} disabled={true}>
                {t("legacy.79571484ed2f4adc")}
              </button>
              {"\n              "}
              <button data-legacy-click={"toggleAutoPlay()"} id={"autoPlayButton"} className={"col-span-1 bg-gradient-to-l from-sky-500 to-sky-600 text-white py-2 px-3 rounded-xl text-xs sm:text-sm font-bold hover:from-sky-600 hover:to-sky-700 transition duration-150 shadow shadow-sky-200 disabled:opacity-40"} disabled={true}>
                {t("legacy.721af803b7b7ea70")}
              </button>
              {"\n              "}
              <button data-legacy-click={"jumpToEnd()"} id={"jumpEndButton"} className={"col-span-1 bg-gradient-to-l from-violet-500 to-violet-600 text-white py-2 px-3 rounded-xl text-xs sm:text-sm font-bold hover:from-violet-600 hover:to-violet-700 transition duration-150 shadow shadow-violet-200 disabled:opacity-40"} disabled={true}>
                {t("legacy.eca5e1a14826c512")}
              </button>
              {"\n              "}
              <button data-legacy-click={"resetCipher(true)"} className={"col-span-2 sm:col-span-1 bg-gradient-to-l from-rose-500 to-rose-600 text-white py-2 px-3 rounded-xl text-xs sm:text-sm font-bold hover:from-rose-600 hover:to-rose-700 transition duration-150 shadow shadow-rose-200"}>
                {t("legacy.1c8c288095efe0ab")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-3.5 md:p-4 border-b border-gray-100 bg-slate-50/30"}>
            {"\n            "}
            <div className={"flex items-center justify-between mb-2"}>
              {"\n              "}
              <div className={"flex items-center gap-2"}>
                {"\n                "}
                <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
                {"\n                "}
                <h2 className={"text-sm font-bold text-gray-800"}>
                  {t("legacy.1d74041a5058c167")}
                </h2>
                {"\n              "}
              </div>
              {"\n              "}
              <button type={"button"} data-legacy-click={"navigator.clipboard.writeText(document.getElementById('resultText').textContent)"} className={"text-xs text-indigo-600 hover:text-indigo-800 font-semibold"}>
                {t("legacy.dd9196f50f3c09b9")}
              </button>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"resultText"} className={"cipher-text text-gray-400 min-h-[38px] text-lg text-center py-2 px-3 bg-white rounded-xl border border-gray-200 shadow-inner"}>
              {"\n              ...\n            "}
            </p>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-4 md:p-5 space-y-2"}>
            {"\n            "}
            <div className={"flex items-center gap-2"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-amber-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-sm font-bold text-gray-800"}>
                {t("legacy.a0f0cc81ed47f570")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"statusMessage"} className={"text-center py-2 px-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium"}>
              {t("legacy.89091e5900e284ed")}
            </p>
            {"\n            "}
            <div id={"stepsLog"} className={"steps-log-container bg-white p-2 rounded-xl border border-gray-200 max-h-72 sm:max-h-80 overflow-y-auto"}>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n"}
    </div>
  );
}
