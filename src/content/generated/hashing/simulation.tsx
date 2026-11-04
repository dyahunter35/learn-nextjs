"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "hashing", language);
  return (
    <div className="native-legacy-body bg-gray-50 font-sans">
    {"\n\n  "}
    {"\n  \n    \n    \n\n  "}
    {"\n  \n\n  "}
    {"\n  "}
    <main className={"max-w-6xl mx-auto px-4 py-6"}>
      {"\n\n    "}
      <div className={"flex flex-col lg:flex-row gap-6"}>
        {"\n\n      "}
        {"\n      "}
        <div className={"lg:w-3/5 space-y-5"}>
          {"\n\n        "}
          {"\n        "}
          <div className={"flex items-center justify-between"}>
            {"\n          "}
            <h1 className={"text-2xl font-bold text-indigo-900"}>
              {t("legacy.41734fb7d83cfdb4")}
            </h1>
            {"\n          "}
            <button id={"resetBtn"} className={"btn btn-outline btn-sm btn-action"} data-legacy-click={"resetTable()"}>
              {"\n            "}
              <svg className={"w-4 h-4"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
              </svg>
              {t("legacy.542eebf1231225f4")}
            </button>
            {"\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div className={"bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4"}>
            {"\n\n          "}
            {"\n          "}
            <div className={"flex flex-wrap items-center gap-3"}>
              {"\n            "}
              <div className={"flex items-center gap-2"}>
                {"\n              "}
                <label htmlFor={"valueInput"} className={"text-sm font-semibold text-gray-700"}>
                  {t("legacy.af1ec6d9fe091bc4")}
                </label>
                {"\n              "}
                <input type={"number"} id={"valueInput"} className={"input-number"} placeholder={"0"} min={"0"} />
                {"\n            "}
              </div>
              {"\n            "}
              <button className={"btn btn-primary btn-action"} data-legacy-click={"addKey()"}>
                {"\n              "}
                <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path>
                </svg>
                {t("legacy.d52453ac627d03a6")}
              </button>
              {"\n            "}
              <button className={"btn btn-warning btn-action"} data-legacy-click={"searchKey()"}>
                {"\n              "}
                <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
                </svg>
                {t("legacy.bd744c2f84f4ee0c")}
              </button>
              {"\n            "}
              <button className={"btn btn-danger btn-action"} data-legacy-click={"deleteKey()"}>
                {"\n              "}
                <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}></path>
                </svg>
                {t("legacy.64f016c6f2fa19e6")}
              </button>
              {"\n          "}
            </div>
            {"\n\n          "}
            {"\n          "}
            <div className={"flex flex-wrap items-center gap-4"}>
              {"\n            "}
              <div className={"flex items-center gap-2"}>
                {"\n              "}
                <label htmlFor={"hashFuncSelect"} className={"text-sm font-semibold text-gray-700"}>
                  {t("legacy.c707fef2ca8d49c7")}
                </label>
                {"\n              "}
                <select id={"hashFuncSelect"} className={"hash-selector btn-action"} data-legacy-change={"changeHashFunc(this.value)"}>
                  {"\n                "}
                  <option value={"10"}>
                    {"mod 10"}
                  </option>
                  {"\n                "}
                  <option value={"7"}>
                    {"mod 7"}
                  </option>
                  {"\n              "}
                </select>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-2"}>
                {"\n              "}
                <span className={"text-sm font-semibold text-gray-700"}>
                  {t("legacy.b73ca87a8ed9d44a")}
                </span>
                {"\n              "}
                <div id={"currentKeyDisplay"} className={"key-display"}>
                  {"?"}
                </div>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div id={"statusDisplay"} className={"text-center py-2"}>
            {"\n          "}
            <span className={"status-badge status-badge-waiting"}>
              {t("legacy.4379000c98dccf11")}
            </span>
            {"\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div className={"text-center"}>
            {"\n          "}
            <span id={"hashFormulaDisplay"} className={"hash-formula"}>
              {"---"}
            </span>
            {"\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div className={"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"}>
            {"\n          "}
            <div className={"bg-indigo-900 text-white px-5 py-3 flex items-center gap-2"}>
              {"\n            "}
              <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
              {"\n            "}
              <span className={"font-bold"}>
                {t("legacy.900e69c7c8659653")}
              </span>
              {"\n            "}
              <span className={"text-indigo-200 text-sm mr-auto"}>
                {t("legacy.097b0359a62bb000")}
                <span id={"tableSizeDisplay"}>
                  {"10"}
                </span>
              </span>
              {"\n          "}
            </div>
            {"\n          "}
            <div id={"hashTableContainer"} className={"hash-table"}></div>
            {"\n        "}
          </div>
          {"\n\n        "}
          {"\n        "}
          <div className={"bg-white rounded-xl shadow-sm border border-gray-200 p-4"}>
            {"\n          "}
            <div className={"text-sm font-bold text-gray-700 mb-2"}>
              {t("legacy.e44717ea67db588a")}
            </div>
            {"\n          "}
            <div className={"flex flex-wrap gap-4 text-xs"}>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <div className={"w-5 h-5 rounded border-2 border-dashed border-gray-300 bg-gray-50"}></div>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {t("legacy.567617378c34d5bf")}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <div className={"w-5 h-5 rounded"} style={{"background":"linear-gradient(135deg,#6366f1,#4f46e5)"}}></div>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {t("legacy.b5e4ebc5794d3b86")}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <div className={"w-5 h-5 rounded"} style={{"background":"linear-gradient(135deg,#fbbf24,#f59e0b)"}}></div>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {t("legacy.51ba1d900a20c66f")}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <div className={"w-5 h-5 rounded"} style={{"background":"linear-gradient(135deg,#34d399,#10b981)"}}></div>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {t("legacy.97edd3dec902cdd0")}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <div className={"w-5 h-5 rounded"} style={{"background":"linear-gradient(135deg,#f87171,#ef4444)"}}></div>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {t("legacy.2c889b0bf51defa7")}
                </span>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n\n      "}
        {"\n      "}
        <div className={"lg:w-2/5 space-y-5"}>
          {"\n\n        "}
          {"\n        "}
          <div className={"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-4"}>
            {"\n          "}
            <div className={"bg-indigo-900 text-white px-5 py-3 flex items-center gap-2"}>
              {"\n            "}
              <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}></path>
              </svg>
              {"\n            "}
              <span className={"font-bold"}>
                {t("legacy.3b94a4bfaecd9970")}
              </span>
              {"\n            "}
              <span className={"text-indigo-200 text-sm mr-auto"}>
                {t("legacy.838bd8d8ad049e1f")}
                <span id={"stepCount"}>
                  {"0"}
                </span>
              </span>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className={"overflow-x-auto max-h-96 overflow-y-auto"}>
              {"\n            "}
              <table className={"step-log"}>
                <thead className={"sticky top-0"}>
                  <tr>
                    <th>
                      {t("legacy.1937a4fdfca8818c")}
                    </th>
                    <th>
                      {t("legacy.ac5d54e5562507c3")}
                    </th>
                    <th>
                      {t("legacy.308fc04e7e8b5d31")}
                    </th>
                    <th>
                      {t("legacy.951ffc19d59ae07d")}
                    </th>
                    <th>
                      {t("legacy.9200595fd0fe471a")}
                    </th>
                    <th>
                      {t("legacy.29f382c737796116")}
                    </th>
                  </tr>
                </thead>
                <tbody id={"stepLogBody"}></tbody>
              </table>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className={"bg-gray-50 px-5 py-3 text-center text-xs text-gray-500 border-t"}>
              {t("legacy.a1eeb647c6a5429f")}
            </div>
            {"\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  "}
    {"\n  \n\n  \n  \n"}
    </div>
  );
}
