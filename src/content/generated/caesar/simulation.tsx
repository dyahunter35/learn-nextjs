"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "caesar", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-green-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"CAESAR CIPHER"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.bc8ef8e3768ddbb5")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.d2e095e5868fb505")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.32d62ba886749ea0")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"alphabetTableContainer"} className={"overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3"}>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.0dcc11e58623c718")}
              </h2>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"flex flex-col md:flex-row gap-4 mb-4"}>
              {"\n              "}
              <div className={"flex-1"}>
                {"\n                "}
                <label htmlFor={"textInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {t("legacy.58e65fffd0d4110b")}
                </label>
                {"\n                "}
                <textarea id={"textInput"} rows={3} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-300 text-right"} placeholder={"أدخل النص هنا للتشفير أو فك التشفير..."} data-legacy-input={"resetCipher(true)"}>
                  {t("legacy.edf5d932616f1481")}
                </textarea>
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"w-full md:w-32"}>
                {"\n                "}
                <label htmlFor={"keyInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {t("legacy.5013624f9a6b2caf")}
                </label>
                {"\n                "}
                <input type={"number"} id={"keyInput"} defaultValue={"3"} min={"1"} max={"27"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-center focus:ring-0 focus:border-indigo-400 transition-colors"} data-legacy-input={"resetCipher(true)"} />
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
              {"\n              "}
              <button data-legacy-click={"startCipher('encrypt')"} id={"encryptButton"} className={"flex-1 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-indigo-800 transition duration-150 shadow-lg shadow-indigo-200 disabled:opacity-50"}>
                {t("legacy.06eaab093501b264")}
              </button>
              {"\n              "}
              <button data-legacy-click={"startCipher('decrypt')"} id={"decryptButton"} className={"flex-1 bg-gradient-to-l from-purple-600 to-purple-700 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-purple-800 transition duration-150 shadow-lg shadow-purple-200 disabled:opacity-50"}>
                {t("legacy.6ce29cb0340fb55a")}
              </button>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"flex gap-3 mt-3"}>
              {"\n              "}
              <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"flex-1 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white py-2 rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition duration-150 shadow-lg shadow-emerald-200 disabled:opacity-50"} disabled={true}>
                {t("legacy.7d351cf35d45eb58")}
              </button>
              {"\n              "}
              <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"flex-1 bg-gradient-to-l from-gray-500 to-gray-600 text-white py-2 rounded-xl font-bold hover:from-gray-600 hover:to-gray-700 transition duration-150 shadow-lg shadow-gray-200 disabled:opacity-50"} disabled={true}>
                {t("legacy.fab5e7dbde13ab7d")}
              </button>
              {"\n              "}
              <button data-legacy-click={"resetCipher(true)"} className={"bg-gradient-to-l from-red-500 to-red-600 text-white py-2 px-4 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition duration-150 shadow-lg shadow-red-200"}>
                {t("legacy.a4df1d03d6508f09")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.b57298672357447b")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"resultText"} className={"cipher-text text-gray-400 min-h-[40px] text-lg text-center py-4 bg-gray-50 rounded-xl border border-gray-200"}>
              {"\n              ...\n            "}
            </p>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-amber-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.a0f0cc81ed47f570")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"statusMessage"} className={"text-center py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium"}>
              {t("legacy.89091e5900e284ed")}
            </p>
            {"\n            "}
            <div id={"stepsLog"} className={"steps-log-container bg-gray-50 p-4 rounded-xl border border-gray-200"}>
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
