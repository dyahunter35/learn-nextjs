"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "linkedlist", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden mt-8 mb-12 p-8 md:p-10 border border-gray-100"}>
      {"\n\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DATA STRUCTURES"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.a909a64bdf29543c")}
          <span className={"text-orange-600"}>
            {"(Linked Lists)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.11d5f0114360b622")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.1fe1a86270c3391f")}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 mb-6 border border-orange-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-orange-700"}>
              {t("legacy.4d9e113afaf30a2b")}
            </strong>
            {t("legacy.aa4e95c7b63ce869")}
            <strong className={"text-orange-600"}>
              {t("legacy.56553722f83a84b9")}
            </strong>
            {t("legacy.5842163e15a93016")}
            <strong className={"text-orange-600"}>
              {t("legacy.ca34a970417f6941")}
            </strong>
            {t("legacy.6245b4d08f3f2a99")}
            <strong className={"text-orange-600"}>
              {t("legacy.3315bfed07e7c19d")}
            </strong>
            {t("legacy.3c33529b60ebc034")}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-orange-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🚂"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-orange-700"}>
                {t("legacy.0648b4d24dbb63f6")}
              </strong>
              {t("legacy.fa2e62ff60f1ebc8")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6h16M4 12h16m-7 6h7"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.b49d8e33565ca69e")}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.4c442b0cf6af5006")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.bad03a6fa4d1db0c")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.22722ccacd175ec9")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.1c9069df053e299e")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.3e00183760416661")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.5dc6c8f4f2eb816b")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.14143b4ad0d1c7a8")}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.d045825ad44f69ae")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.57dd30e28391a63a")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.98395a685c123e52")}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M20 12H4"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.598f91f0eea71071")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.2e2f4949a2882c7d")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.dec5f5140c346afe")}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.b03eabcf0f1957fa")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.075d6e42c7899413")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.60cdc6e3edebe074")}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.f103563a5a7eaad7")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.b3f00c94b2c715a8")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"for each node in list → print(node)"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.a67ecbf19c3c25d3")}
        </h2>
        {"\n\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6 overflow-x-auto"}>
          {"\n                "}
          <div className={"flex items-center justify-center gap-0 min-w-max py-4"}>
            {"\n                    "}
            <div className={"flex items-center"}>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"}>
                  {"10"}
                </div>
                {"\n                            "}
                <span className={"text-[0.6rem] font-bold text-orange-600 mt-1 bg-orange-50 px-2 rounded-full"}>
                  {"Head"}
                </span>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400 relative"}>
                  {"\n                                "}
                  <span className={"absolute -top-5 left-1/2 -translate-x-1/2 text-[0.55rem] font-bold text-gray-500 whitespace-nowrap"}>
                    {"next"}
                  </span>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"}>
                  {"20"}
                </div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400 relative"}>
                  {"\n                                "}
                  <span className={"absolute -top-5 left-1/2 -translate-x-1/2 text-[0.55rem] font-bold text-gray-500 whitespace-nowrap"}>
                    {"next"}
                  </span>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-300 rounded-xl flex items-center justify-center text-gray-800 font-bold text-xl shadow-md"}>
                  {"30"}
                </div>
                {"\n                            "}
                <span className={"text-[0.6rem] font-bold text-purple-600 mt-1 bg-purple-50 px-2 rounded-full"}>
                  {"Tail"}
                </span>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400"}></div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-[0.6rem] font-bold text-gray-400 mx-1"}>
                {"NULL"}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"text-center text-sm text-gray-500 mt-3"}>
            {"Head → [10] → [20] → [30] → NULL"}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 border border-amber-200 rounded-xl p-5"}>
          {"\n                "}
          <h4 className={"font-bold text-amber-800 mb-2 flex items-center gap-2"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
              {"\n                    "}
            </svg>
            {t("legacy.fd9176869e4c9ffd")}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              {t("legacy.5087e935ba1576b2")}
              <strong className={"text-amber-700"}>
                {t("legacy.08e5fa6f4fae816f")}
              </strong>
              {t("legacy.6245b4d08f3f2a99")}
              <strong className={"text-amber-700"}>
                {t("legacy.c39d743f5208ab83")}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-amber-700"}>
                {t("legacy.916cb7c4f413c528")}
              </strong>
              {t("legacy.a841217ba8d9cedd")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.5087e935ba1576b2")}
              <strong className={"text-amber-700"}>
                {t("legacy.8c01226905334f85")}
              </strong>
              {t("legacy.569081e5b36d38cf")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.ed6dd7d96dcb1b73")}
              <strong className={"text-amber-700"}>
                {t("legacy.1a6cc36f5eba33a3")}
              </strong>
              {t("legacy.7622964dcc8082ae")}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-amber-700"}>
                {t("legacy.d0dde659d9b0c40e")}
              </strong>
              {t("legacy.f3a0cf21bc2ff41b")}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-8"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.155144f2aaa9795a")}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white"}>
            <thead>
              <tr className={"bg-gray-900 text-white"}>
                <th className={"p-4 border border-gray-700 font-bold text-right"}>
                  {t("legacy.7c2062c8db2da09d")}
                </th>
                <th className={"p-4 border border-gray-700 font-bold"}>
                  {t("legacy.820d18e82fc3bd34")}
                </th>
                <th className={"p-4 border border-gray-700 font-bold text-orange-500"}>
                  {t("legacy.2fb8461db4731f11")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.3ef1959dc1117ff3")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.1b830feedd1f576f")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.dfc2ba7b89abff33")}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.51fca52cdf0b6278")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-green-600 font-bold"}>
                  {"O(1)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-red-600 font-bold"}>
                  {"O(n)"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.4397526771a69619")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-red-600 font-bold"}>
                  {"O(n)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-green-600 font-bold"}>
                  {"O(1)"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.6bb8d3d3203ba988")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.ba51e21d7f93e8e6")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.afaabd0b5bdd908a")}
                </td>
              </tr>
              <tr>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.ded7086f27382b9e")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.cc314ee9c010b422")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.2bd07ee86d37e1ec")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 mb-4"}>
        {"\n            "}
        <a href={"/algorithms/linkedlist/simulation"} className={"inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.7d91d62bef824acb")}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n  \n"}
    </div>
  );
}
