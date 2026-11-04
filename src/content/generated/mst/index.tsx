"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "mst", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"MINIMUM SPANNING TREE"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.f77f37baea29fb98")}
          <span className={"text-indigo-600"}>
            {"(MST)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.8f6ea432fcf8559c")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.9d0e671ad254b897")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {t("legacy.56ba2feee02c5937")}
          </strong>
          {t("legacy.5dccce6b66e8b3b4")}
          <strong>
            {t("legacy.7a765fc6843f55de")}
          </strong>
          {t("legacy.44e2356cff2e3e48")}
          <strong>
            {"V"}
          </strong>
          {t("legacy.53b8f277725f1add")}
          <strong>
            {"V-1"}
          </strong>
          {t("legacy.5d041ad243273d8c")}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.6d9cdc18a7ab3f25")}
        </p>
        {"\n            "}
        <div className={"bg-white p-3 rounded-xl border border-indigo-200 text-center font-bold text-indigo-900 text-lg mb-4 overflow-x-auto"} dir={"ltr"}>
          {t("legacy.4e56ea41a326157a")}
        </div>
        {"\n            "}
        <ul className={"list-disc list-inside text-gray-700 space-y-1 mb-4 mr-4"}>
          {"\n                "}
          <li>
            {t("legacy.99d4a34b139b3199")}
          </li>
          {"\n                "}
          <li>
            {t("legacy.f4dbbb0337a09a67")}
          </li>
          {"\n                "}
          <li>
            {t("legacy.7dbc8984dc08c64b")}
          </li>
          {"\n            "}
        </ul>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.70386e20a66d5fa2")}
          </h3>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1"}>
            {"\n                    "}
            <li>
              {t("legacy.9c88917e5f661a9e")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.87346610fde4da73")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.ff5b4ecad438893f")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.1590dcbf61677c1f")}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.6d30bb0c3d9bd942")}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {t("legacy.cce682420f92faea")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.7fec1f7b262fc486")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.dc3a1174fbb0a6b1")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.c14cabcad82ae4a9")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.467e67025d44ea88")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {t("legacy.dddef758c2c6216f")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.2d25f6f4909a887c")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.ecc691775f9615f8")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.6831d147670c516b")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.abe3345d033d0e6d")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.c7dfa31f40e3f44a")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {t("legacy.1fb449e3ddcb1cb6")}
          </strong>
          {t("legacy.3232cefefa54db52")}
          <strong>
            {t("legacy.476137fd7c749dcf")}
          </strong>
          {t("legacy.f863ec7e38db977a")}
        </p>
        {"\n            "}
        <div className={"bg-emerald-50 p-5 rounded-lg shadow-md mb-4 border-emerald-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-emerald-800 mb-3"}>
            {t("legacy.0c89df52ce5d4b21")}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {t("legacy.8fce9dbbda6b67d9")}
              <strong>
                {t("legacy.eb8fd36e79f619eb")}
              </strong>
              {t("legacy.bd5539cf569e3885")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.f48558035ea27963")}
              <strong>
                {t("legacy.2ebe8b17f1e9de23")}
              </strong>
              {t("legacy.8e333ebacedeceb5")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.8e0fed892d5e15a0")}
              <strong>
                {t("legacy.d4f5abb722ae826d")}
              </strong>
              {t("legacy.6a6e00f19ea0a060")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.263784570dac335a")}
              <strong>
                {t("legacy.c8ce98768ee80ed9")}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.1195514ac577dbd9")}
              <strong>
                {"V-1"}
              </strong>
              {t("legacy.99f03afe15634157")}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gray-50 p-5 rounded-lg shadow-md border-gray-300"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-gray-800 mb-3"}>
            {t("legacy.1b29b192688f3da3")}
          </h3>
          {"\n                "}
          <div className={"text-lg text-center text-emerald-800 my-2"} dir={"ltr"}>
            {"\n                    $$ O(|E| \\log |E| + |E| \\cdot \\alpha(|V|)) $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {t("legacy.a17018012c268972")}
            <strong>
              {"Union-Find"}
            </strong>
            {".\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.6541cd9c4218e107")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {t("legacy.518cef4b445b58cf")}
          </strong>
          {t("legacy.7d5097f96de4601f")}
          <strong>
            {t("legacy.6ff58cea8df25322")}
          </strong>
          {t("legacy.51b4d3afe28ae280")}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-4 border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.0c89df52ce5d4b21")}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {t("legacy.d6b8d3e4d5089192")}
              <strong>
                {t("legacy.54b931e0c2885820")}
              </strong>
              {t("legacy.7c433539d80d3eda")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.9e6b06881b241ebd")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.f48558035ea27963")}
              <strong>
                {t("legacy.1bab8b7cf206f31d")}
              </strong>
              {t("legacy.02f56ec5cd2ace41")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.06b50c1b6cee2289")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.bdd2bd11b2378fd6")}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gray-50 p-5 rounded-lg shadow-md border-gray-300"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-gray-800 mb-3"}>
            {t("legacy.1b29b192688f3da3")}
          </h3>
          {"\n                "}
          <div className={"text-lg text-center text-amber-800 my-2"} dir={"ltr"}>
            {"\n                    $$ O(|E| \\log |V|) $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {t("legacy.dbff64f194e8027b")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.602e645fe404c16b")}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse text-sm mb-4"}>
            <thead>
              <tr className={"bg-indigo-100 text-indigo-900"}>
                <th className={"p-3 border border-indigo-200"}>
                  {t("legacy.695ebc35ab262fcd")}
                </th>
                <th className={"p-3 border border-indigo-200"}>
                  {t("legacy.39065ff37bcab9f2")}
                </th>
                <th className={"p-3 border border-indigo-200"}>
                  {t("legacy.1bb6103be62eeeeb")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {t("legacy.0c89df52ce5d4b21")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.fe97c1644d5c434d")}
                  <strong>
                    {t("legacy.21458f863f3ac0c2")}
                  </strong>
                  {t("legacy.ba62630e69c21c10")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.fe97c1644d5c434d")}
                  <strong>
                    {t("legacy.c28a5781919bd5db")}
                  </strong>
                  {t("legacy.340b606b4989f952")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {t("legacy.27618761fc9ebc3d")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.d0c0dbddbb04acbb")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.61a4ff0280616df9")}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {t("legacy.307ff4046740ee1a")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.f4b7c7058a8349fe")}
                  <strong>
                    {t("legacy.b392cde4796cc1a4")}
                  </strong>
                  {" (Sparse)"}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.f4b7c7058a8349fe")}
                  <strong>
                    {t("legacy.ba2f4f30334fe60f")}
                  </strong>
                  {" (Dense)"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {t("legacy.f6ebf5a506afede5")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.d4f20ab3abd3c791")}
                </td>
                <td className={"p-3 border"}>
                  {t("legacy.1b1d8da2266305cc")}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {t("legacy.1b29b192688f3da3")}
                </td>
                <td className={"p-3 border"}>
                  <span className={"font-mono ltr-text"}>
                    {"O(E log E)"}
                  </span>
                </td>
                <td className={"p-3 border"}>
                  <span className={"font-mono ltr-text"}>
                    {"O(E log V)"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.24a0c1a8b29299a0")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.6d60fe5199443117")}
        </p>
        {"\n\n            "}
        <div className={"bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6"}>
          {"\n                "}
          <h4 className={"text-lg font-bold text-gray-800 mb-3 text-center"}>
            {t("legacy.f853dc4fb981e4ab")}
          </h4>
          {"\n                "}
          <div className={"flex justify-center"}>
            {"\n                    "}
            <svg viewBox={"0 0 320 240"} className={"w-full max-w-xs"} xmlns={"http://www.w3.org/2000/svg"}>
              {"\n                        "}
              <line x1={"160"} y1={"20"} x2={"260"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"160"} y1={"20"} x2={"60"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"60"} y1={"75"} x2={"140"} y2={"160"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"60"} y1={"75"} x2={"260"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"260"} y1={"75"} x2={"240"} y2={"170"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"260"} y1={"75"} x2={"140"} y2={"160"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"140"} y1={"160"} x2={"240"} y2={"170"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"240"} y1={"170"} x2={"290"} y2={"220"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"140"} y1={"160"} x2={"290"} y2={"220"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n\n                        "}
              <text x={"210"} y={"38"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"4"}
              </text>
              {"\n                        "}
              <text x={"110"} y={"38"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"2"}
              </text>
              {"\n                        "}
              <text x={"160"} y={"68"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"1"}
              </text>
              {"\n                        "}
              <text x={"45"} y={"125"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"5"}
              </text>
              {"\n                        "}
              <text x={"260"} y={"68"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"8"}
              </text>
              {"\n                        "}
              <text x={"270"} y={"130"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"10"}
              </text>
              {"\n                        "}
              <text x={"175"} y={"170"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"2"}
              </text>
              {"\n                        "}
              <text x={"270"} y={"200"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"3"}
              </text>
              {"\n                        "}
              <text x={"215"} y={"205"} fill={"#374151"} fontSize={"11"} fontWeight={"bold"} textAnchor={"middle"}>
                {"6"}
              </text>
              {"\n\n                        "}
              <circle cx={"160"} cy={"20"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"160"} y={"25"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"A"}
              </text>
              {"\n                        "}
              <circle cx={"60"} cy={"75"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"60"} y={"80"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"B"}
              </text>
              {"\n                        "}
              <circle cx={"260"} cy={"75"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"260"} y={"80"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"C"}
              </text>
              {"\n                        "}
              <circle cx={"140"} cy={"160"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"140"} y={"165"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"D"}
              </text>
              {"\n                        "}
              <circle cx={"240"} cy={"170"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"240"} y={"175"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"E"}
              </text>
              {"\n                        "}
              <circle cx={"290"} cy={"220"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"290"} y={"225"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} fontWeight={"bold"}>
                {"F"}
              </text>
              {"\n                    "}
            </svg>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-emerald-50 p-5 rounded-lg shadow-md border-emerald-400 mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-emerald-800 mb-3"}>
            {t("legacy.b5a854cf185cd790")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {t("legacy.01274ee359fd6f11")}
          </p>
          {"\n                "}
          <div className={"font-mono text-sm bg-white p-3 rounded-lg border border-emerald-200 mb-3"}>
            {"\n                    B-C(1), A-C(2), D-E(2), E-F(3), A-B(4), B-D(5), D-F(6), C-D(8), C-E(10)\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {t("legacy.8b708fe03aacb07e")}
          </p>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1"}>
            {"\n                    "}
            <li>
              {t("legacy.7daa5739991203a8")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.4faeefee3e5c6efd")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.1199f6ace4856e00")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.029152421a7ac027")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.043ff9b740f4497c")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.6246e44424a35e5d")}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.2fab4f9799a6cc0f")}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse text-sm"}>
              <thead>
                <tr className={"bg-amber-200 text-amber-900"}>
                  <th className={"p-2 border"}>
                    {t("legacy.9cf332976321a330")}
                  </th>
                  <th className={"p-2 border"}>
                    {t("legacy.c254ee081f9a150d")}
                  </th>
                  <th className={"p-2 border"}>
                    {t("legacy.c1fa588d7566ef96")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {t("legacy.eb63e6c7e980e59c")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"B-C, A-C, D-E, E-F, B-D"}
                  </td>
                  <td className={"p-2 border font-bold text-green-700"}>
                    {t("legacy.f2fe57bb1708022d")}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {t("legacy.2b68028b19dcbb8f")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A-C, C-B, B-D, D-E, E-F"}
                  </td>
                  <td className={"p-2 border font-bold text-green-700"}>
                    {t("legacy.f2fe57bb1708022d")}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 mt-3 text-sm"}>
            {t("legacy.a863b9cf1d0b1023")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/mst/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.25a3659fbc955cd1")}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n\n  \n"}
    </div>
  );
}
