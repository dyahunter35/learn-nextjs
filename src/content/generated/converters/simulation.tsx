"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "converters", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-6xl mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-amber-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"NUMBER SYSTEMS"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.b2645a197453a20c")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.143c0b9d4936f955")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 md:p-10"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"mb-8 border-b border-gray-100 pb-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.872fd8ea49d93d86")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p className={"text-gray-600 mb-4 text-sm"}>
              {t("legacy.e5a82e6579713e3b")}
            </p>
            {"\n            "}
            <div className={"flex flex-col md:flex-row gap-4"}>
              {"\n              "}
              <input type={"text"} id={"decimalInput"} placeholder={"أدخل عدداً عشرياً (مثل 45.625)"} className={"flex-grow px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-emerald-400 transition-colors text-lg text-right"} dir={"ltr"} inputMode={"decimal"} />
              {"\n              "}
              <button id={"convertDecToBinButton"} data-legacy-click={"startConversion('decToBin')"} className={"step-button bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200"}>
                {t("legacy.0de6a495b6ac72e3")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"mb-8 border-b border-gray-100 pb-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-blue-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.aa47a850f8480e33")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p className={"text-gray-600 mb-4 text-sm"}>
              {t("legacy.345bbe1cca49b746")}
            </p>
            {"\n            "}
            <div className={"flex flex-col md:flex-row gap-4"}>
              {"\n              "}
              <input type={"text"} id={"binaryInput"} placeholder={"أدخل عدداً ثنائياً (مثل 101101.101)"} className={"flex-grow px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-blue-400 transition-colors text-lg text-right mono-font"} dir={"ltr"} />
              {"\n              "}
              <button id={"convertBinToDecButton"} data-legacy-click={"startConversion('binToDec')"} className={"step-button bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"}>
                {t("legacy.606788b65e3f29e9")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div id={"message"} className={"hidden bg-rose-50 border-r-4 border-rose-500 text-rose-700 p-4 mb-6 rounded-xl font-medium"}></div>
          {"\n\n          "}
          {"\n          "}
          <div id={"resultsSection"} className={"hidden"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.f37f4bd36c7bc3c1")}
              </h2>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div id={"resultBox"} className={"p-6 bg-gradient-to-l from-indigo-50 to-purple-50 rounded-xl mb-6 border border-indigo-100"}>
              {"\n              "}
              <h3 className={"text-sm font-bold text-indigo-600 mb-2"}>
                {"\n                "}
                <span id={"resultTypeTitle"}>
                  {t("legacy.3c64ba0afab6c4a8")}
                </span>
                {"\n              "}
              </h3>
              {"\n              "}
              <p className={"text-3xl md:text-4xl font-extrabold text-indigo-700 mono-font"}>
                {"\n                "}
                <span id={"inputDisplay"}></span>
                {"\n                "}
                <span className={"text-gray-400 mx-2"}>
                  {t("legacy.ad27e8be5ec3da78")}
                </span>
                {"\n                "}
                <span id={"outputDisplay"}></span>
                {"\n              "}
              </p>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <h3 className={"text-lg font-bold text-gray-800 mb-4"}>
              {t("legacy.b104590e7f7a2289")}
              <span id={"currentStepTitle"}></span>
              {"\n            "}
            </h3>
            {"\n            "}
            <div className={"overflow-x-auto mb-6 rounded-xl border border-gray-200"}>
              {"\n              "}
              <table className={"min-w-full divide-y divide-gray-200"}>
                <thead>
                  <tr id={"tableHeaderRow"} className={"bg-gray-50 text-sm font-bold text-gray-700"}>

                  </tr>
                </thead>
                <tbody id={"stepsTableBody"} className={"bg-white divide-y divide-gray-200"}>

                </tbody>
              </table>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div className={"flex justify-between items-center mt-6 bg-gray-50 p-4 rounded-xl"}>
              {"\n              "}
              <button id={"prevButton"} data-legacy-click={"previousStep()"} className={"step-button bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2.5 rounded-xl font-bold transition-all"} disabled={true}>
                {t("legacy.f7d6c65b5ca66d7f")}
              </button>
              {"\n              "}
              <span className={"text-gray-500 font-medium text-sm md:text-base"}>
                {t("legacy.acbd01b29c5aece0")}
                <span id={"currentStepDisplay"}>
                  {"0"}
                </span>
                {t("legacy.4d7d679f7b4cca4e")}
                <span id={"totalStepsDisplay"}>
                  {"0"}
                </span>
                {")\n              "}
              </span>
              {"\n              "}
              <button id={"nextButton"} data-legacy-click={"nextStep()"} className={"step-button bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"} disabled={true}>
                {t("legacy.acf9b5ccd598c98b")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n"}
    </div>
  );
}
