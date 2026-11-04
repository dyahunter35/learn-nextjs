"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "stackqueue", language);
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
          {t("legacy.6e88761fc815dc1e")}
          <span className={"text-indigo-600"}>
            {"(Stack & Queue)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.5c02ebc8eff70946")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.08e5fa6f4fae816f")}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 mb-6 border border-indigo-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-indigo-700"}>
              {t("legacy.08e5fa6f4fae816f")}
            </strong>
            {t("legacy.39c6ef7cf02c7fe9")}
            <strong className={"text-indigo-600"}>
              {t("legacy.1d7222cce817cc4c")}
            </strong>
            {t("legacy.a0aa3a819d18acef")}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-indigo-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🥞"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-indigo-700"}>
                {t("legacy.0648b4d24dbb63f6")}
              </strong>
              {t("legacy.4493ab2f390f7366")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {t("legacy.0a46cadc4781a088")}
        </h3>
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
                {t("legacy.915f6a701946fc32")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.ab8ab656071c5dcb")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.df641bed8e1477a8")}
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
                {t("legacy.45d5a24411c7a6ea")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.4d60c251720f06ef")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.ef19f29ce4a43cea")}
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
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.63318ea3efcfb249")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.422fcafc9c7f5f03")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.ccc458e6393e1eb3")}
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
                {t("legacy.df6edbf68adf4536")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.a118a4fabe2bd7ad")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"stack.isEmpty() ← false"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {t("legacy.f7a2b44526df2381")}
        </h3>
        {"\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6"}>
          {"\n                "}
          <div className={"flex flex-col sm:flex-row items-center justify-center gap-6"}>
            {"\n                    "}
            <div className={"flex flex-col-reverse items-center"}>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-100 border-2 border-indigo-300 rounded-lg flex items-center justify-center text-indigo-700 font-bold"}>
                {t("legacy.185dcfe995989055")}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"10"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"20"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"30"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-500 border-2 border-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"}>
                {"40 ← Push"}
              </div>
              {"\n                        "}
              <div className={"w-36 h-8 bg-indigo-600 rounded-t-lg flex items-center justify-center text-white text-xs font-bold"}>
                {t("legacy.d6e15c47ae0477ad")}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"text-right"}>
              {"\n                        "}
              <p className={"text-gray-700 font-bold"}>
                {"Push(10) → Push(20) → Push(30) → Push(40)"}
              </p>
              {"\n                        "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {t("legacy.c91cc43c942189ad")}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
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
            {t("legacy.630d3a00ae92a20f")}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              {t("legacy.df03ffceddd37159")}
              <strong className={"text-amber-700"}>
                {t("legacy.964fbe2e700a887a")}
              </strong>
              {t("legacy.9f9ba8114f665934")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.fc00b68114539204")}
              <strong className={"text-amber-700"}>
                {t("legacy.ef0425fc33c89fb9")}
              </strong>
              {t("legacy.13ccea25067001b0")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.91783f7e213ec581")}
              <strong className={"text-amber-700"}>
                {t("legacy.d87673690daa0373")}
              </strong>
              {t("legacy.64afb07aef7207b8")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.0fef9404367c9436")}
              <strong className={"text-amber-700"}>
                {t("legacy.543f8e981a611698")}
              </strong>
              {t("legacy.7d2e602f551a9d4a")}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.c39d743f5208ab83")}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-emerald-50 to-green-50 rounded-2xl p-6 md:p-8 mb-6 border border-emerald-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-emerald-700"}>
              {t("legacy.c39d743f5208ab83")}
            </strong>
            {t("legacy.39c6ef7cf02c7fe9")}
            <strong className={"text-emerald-600"}>
              {t("legacy.a1beb23f68ed2ff3")}
            </strong>
            {t("legacy.e2b026d3bb03c4c0")}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-emerald-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🚌"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-emerald-700"}>
                {t("legacy.0648b4d24dbb63f6")}
              </strong>
              {t("legacy.04aeeb89c5d1b385")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {t("legacy.ecb466ea62a2ae04")}
        </h3>
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
                {t("legacy.300944552cf7e564")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.522829b9fd5b2bfb")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.9b0cf2d03b007076")}
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
                {t("legacy.796546a926200a1e")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.902ecc45d63d8b6c")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.1cd8446c96ad89fa")}
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
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.f828aa1f564df961")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.1980db7823c5d424")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {t("legacy.f26eeb84c41991c6")}
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
                {t("legacy.df6edbf68adf4536")}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {t("legacy.64ce1300b0521273")}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"queue.isEmpty() ← false"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {t("legacy.7afec2bce6516923")}
        </h3>
        {"\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6"}>
          {"\n                "}
          <div className={"flex flex-col sm:flex-row items-center justify-center gap-6"}>
            {"\n                    "}
            <div className={"flex items-center"}>
              {"\n                        "}
              <div className={"flex items-center"}>
                {"\n                            "}
                <div className={"px-3 py-4 bg-emerald-100 border-2 border-emerald-300 rounded-r-lg flex items-center justify-center text-emerald-700 text-sm font-bold"}>
                  {t("legacy.82b13cbf804c9a6b")}
                  <br />
                  {"(Front)"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-16 bg-emerald-500 border-2 border-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl -ml-1 shadow-lg"}>
                  {"10"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-14 bg-emerald-200 border-2 border-emerald-300 rounded-lg flex items-center justify-center text-emerald-700 font-bold -ml-1"}>
                  {"20"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-14 bg-emerald-200 border-2 border-emerald-300 rounded-lg flex items-center justify-center text-emerald-700 font-bold -ml-1"}>
                  {"30"}
                </div>
                {"\n                            "}
                <div className={"px-3 py-4 bg-emerald-50 border-2 border-emerald-200 rounded-l-lg flex items-center justify-center text-emerald-600 text-sm font-bold"}>
                  {t("legacy.3ccdce00aad224fb")}
                  <br />
                  {"(Rear)"}
                </div>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"text-right"}>
              {"\n                        "}
              <p className={"text-gray-700 font-bold"}>
                {"Enqueue(10) → Enqueue(20) → Enqueue(30)"}
              </p>
              {"\n                        "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {t("legacy.f4503bb65105ea14")}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-emerald-50 border border-emerald-200 rounded-xl p-5"}>
          {"\n                "}
          <h4 className={"font-bold text-emerald-800 mb-2 flex items-center gap-2"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
              {"\n                    "}
            </svg>
            {t("legacy.d64ad41c255a7f27")}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              <strong className={"text-emerald-700"}>
                {t("legacy.5b576e72f08b458a")}
              </strong>
              {t("legacy.3eba917307bed1a9")}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-emerald-700"}>
                {t("legacy.78b83dcc4c95ca44")}
              </strong>
              {t("legacy.174a4525481c2bf8")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.526d1e74634dc31f")}
              <strong className={"text-emerald-700"}>
                {t("legacy.75146b137a252aa2")}
              </strong>
              {t("legacy.c93ac29f0d370f56")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.43028ae5e08ffecc")}
              <strong className={"text-emerald-700"}>
                {t("legacy.953d3e72d344f8b7")}
              </strong>
              {t("legacy.3d928573fc12cad8")}
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
          <span className={"w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {t("legacy.dd8246e0615644e1")}
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
                  {t("legacy.08e5fa6f4fae816f")}
                </th>
                <th className={"p-4 border border-gray-700 font-bold"}>
                  {t("legacy.c39d743f5208ab83")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.77bd50c452708b1c")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-indigo-700 font-bold"}>
                  {"LIFO"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-emerald-700 font-bold"}>
                  {"FIFO"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.32c94b3717f8721d")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.bfc9c47b057776cb")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.724d2cf18a2f025d")}
                </td>
              </tr>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.27cc6effbd2d3d7e")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.30df391fba252547")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.f3ec47b3e6e8e92c")}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.fd502df69611cbe0")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.758d89a5bb362e2a")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.aecef4e615f99fd2")}
                </td>
              </tr>
              <tr>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {t("legacy.4bb700a106cbc4e2")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.c89e232e5d46957e")}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {t("legacy.52c2798f5117d52a")}
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
        <a href={"/algorithms/stackqueue/simulation"} className={"inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"}>
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
