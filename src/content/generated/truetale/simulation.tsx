"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "truetale", language);
  return (
    <div className="native-legacy-body ">
    {"\n    "}
    {"\n    \n    \n    \n\n    \n\n    "}
    {"\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-rose-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"TRUTH TABLES"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.73d91237752bc7e6")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.a82f49f42694212b")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.c128bca32cae30d4")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"quick-buttons"} className={"flex flex-wrap items-center gap-1.5"}>
              {"\n\n              "}
              {"\n              "}
              <span className={"text-xs font-bold text-gray-400 uppercase tracking-wider ml-2"}>
                {"Operators"}
              </span>
              {"\n              "}
              <button className={"operator-btn bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200"} data-value={"∧"} title={"و - AND"}>
                {"∧"}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"} data-value={"∨"} title={"أو - OR"}>
                {"∨"}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200"} data-value={"¬"} title={"ليس - NOT"}>
                {"¬"}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"} data-value={"→"} title={"إذا...فإن"}>
                {"→"}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"} data-value={"↔"} title={"إذا وفقط إذا"}>
                {"↔"}
              </button>
              {"\n\n              "}
              <span className={"w-px h-6 bg-gray-200 mx-2"}></span>
              {"\n\n              "}
              {"\n              "}
              <span className={"text-xs font-bold text-gray-400 uppercase tracking-wider ml-2"}>
                {"Variables"}
              </span>
              {"\n              "}
              <button className={"operator-btn bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"} data-value={"م١"}>
                {t("legacy.7c917e5a5ae55a0c")}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"} data-value={"م٢"}>
                {t("legacy.0cff98624e0d7b32")}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"} data-value={"م٣"}>
                {t("legacy.ecc02b661d49624d")}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"} data-value={"م٤"}>
                {t("legacy.9fd49e39bd7bb726")}
              </button>
              {"\n\n              "}
              <span className={"w-px h-6 bg-gray-200 mx-2"}></span>
              {"\n\n              "}
              {"\n              "}
              <button className={"operator-btn bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200"} data-value={" ( "} title={"قوس فتح"}>
                {"("}
              </button>
              {"\n              "}
              <button className={"operator-btn bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200"} data-value={" ) "} title={"قوس إغلاق"}>
                {")"}
              </button>
              {"\n              "}
              <button id={"clear-btn"} className={"operator-btn bg-red-50 hover:bg-red-100 text-red-700 border-red-200"} title={"مسح الكل"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4 inline"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.308cf07fa826d118")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <label htmlFor={"expression-input"} className={"block text-sm font-bold text-gray-700 mb-2"}>
              {t("legacy.779444e2aa6f3bce")}
              <span className={"text-gray-400 font-normal text-xs mr-2"}>
                {t("legacy.98a6d4e7a2cb7b03")}
              </span>
              {"\n            "}
            </label>
            {"\n            "}
            <div className={"relative"}>
              {"\n              "}
              <input type={"text"} id={"expression-input"} placeholder={"(م١ ∧ م٢) → م٣"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left text-xl font-mono focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-300"} dir={"ltr"} />
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"px-6 md:px-8 py-5 bg-gradient-to-l from-indigo-50 to-purple-50 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex flex-col sm:flex-row gap-4 items-center justify-between"}>
              {"\n              "}
              <p className={"text-sm text-gray-500"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4 inline ml-1 text-indigo-400"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.52b0639b64a2f563")}
              </p>
              {"\n              "}
              <button id={"generate-btn"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.b1111d341bd968b0")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"px-6 md:px-8 pt-4"}>
            {"\n            "}
            <div id={"message-area"} className={"text-center p-4 hidden rounded-xl border text-sm font-medium"} role={"alert"}></div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8"}>
            {"\n            "}
            <div id={"table-container"} className={"overflow-x-auto rounded-xl border border-gray-200"}>
              {"\n              "}
              <table id={"result-table"} className={"w-full border-collapse bg-white"}>
                <thead>
                  <tr id={"table-header"}></tr>
                </thead>
                <tbody id={"table-body"}></tbody>
              </table>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"table-empty"} className={"text-center py-16 text-gray-400"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-12 w-12 mx-auto mb-4 text-gray-300"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} d={"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <p className={"text-lg font-medium"}>
                {t("legacy.68d04c1a98a1054b")}
              </p>
              {"\n              "}
              <p className={"text-sm mt-1"}>
                {t("legacy.31423ec6d4c65e89")}
              </p>
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
