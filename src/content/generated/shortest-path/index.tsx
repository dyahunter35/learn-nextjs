"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "shortest-path", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DIJKSTRA'S ALGORITHM"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.f7147658087a1cb6")}
          <span className={"text-indigo-600"}>
            {"(Dijkstra)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.f4fd3dde45ca9afd")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.9d0e671ad254b897")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.970a4d6427ee8ebd")}
          <strong>
            {t("legacy.f5b6ac73da56a1f3")}
          </strong>
          {t("legacy.8e3d6707f9f23d37")}
          <strong>
            {t("legacy.54d25b1868975a11")}
          </strong>
          {t("legacy.28e4d78418e23ae0")}
          <strong>
            {t("legacy.78f06e6486320272")}
          </strong>
          {t("legacy.0699dd4b89b9f0b7")}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.3f48e1463352bf05")}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.8636316490eaa433")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    "}
            <strong>
              {t("legacy.07d14dfd74f5dbb5")}
            </strong>
            {t("legacy.dcdbe211a4b4f03a")}
            <br />
            {"\n                    "}
            <strong>
              {t("legacy.7e42ffcd6d174942")}
            </strong>
            {t("legacy.218bd049dc2686ec")}
            <br />
            {"\n                    "}
            <strong>
              {t("legacy.bbfaa7a39d09c23b")}
            </strong>
            {t("legacy.8f75e1d003e25c8e")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.b0c6e7806ac16125")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.297cb5dc5e2e0dea")}
          <strong>
            {t("legacy.2faccdac372c9b15")}
          </strong>
          {t("legacy.dba72e1918b1d2da")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.f06ee310f4d98120")}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {t("legacy.3e20c11b7459c12b")}
              <strong>
                {t("legacy.376fd01c0f2aacc6")}
              </strong>
              {t("legacy.010837c91f6b7bf5")}
              <strong>
                {t("legacy.97e705f0a77800ab")}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.a60e953f8a95221f")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.6f031a2adf29f449")}
              <strong>
                {t("legacy.3c30b913c5c4b58a")}
              </strong>
              {t("legacy.28d23d6dbd986460")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.b2a5e74e041a56bc")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.aef0405e69686c5b")}
              <strong>
                {t("legacy.9bab402084d6f661")}
              </strong>
              {t("legacy.74d2f8dbf059ec88")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.ce632b93f7eba740")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.ceb9d073f64fe40b")}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {t("legacy.1b29b192688f3da3")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.4886c729fd8190d7")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O((V + E) log V)"}
            </span>
            <br />
            {t("legacy.e1654fc8a42e54a7")}
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
          {t("legacy.24a0c1a8b29299a0")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.e33b7bd678d81a2b")}
          <strong>
            {"A"}
          </strong>
          {t("legacy.7b67ca9db4ab7588")}
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
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.a223778f8524d347")}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse text-sm"}>
              <thead>
                <tr className={"bg-amber-200 text-amber-900"}>
                  <th className={"p-2 border"}>
                    {t("legacy.8b068efc0421860c")}
                  </th>
                  <th className={"p-2 border"}>
                    {t("legacy.dd00b654ef3ca369")}
                  </th>
                  <th className={"p-2 border"}>
                    {t("legacy.d31165f301357253")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"A"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.f01f2e7542ce05d6")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"B"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.1a4fd527b171239a")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"C"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.537dcdbcaa60087c")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"D"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.ca8c93db97a53554")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"E"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.3b72441409fbba79")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D ← E"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"F"}
                  </td>
                  <td className={"p-2 border"}>
                    {t("legacy.f2fe57bb1708022d")}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D ← E ← F"}
                  </td>
                </tr>
              </tbody>
            </table>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.065b4a33559a439b")}
        </h2>
        {"\n            "}
        <div className={"space-y-4"}>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-indigo-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-indigo-700 mb-1"}>
              {t("legacy.abe9888be9a3ae74")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.daf13f2b71041b4a")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-amber-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-amber-700 mb-1"}>
              {t("legacy.3cbc4dd5d2fa6392")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.f286731b608eed87")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-emerald-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-emerald-700 mb-1"}>
              {t("legacy.3482ee87d1fbf997")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.a7e0888157feb3ca")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-rose-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-rose-700 mb-1"}>
              {t("legacy.1d10f22ac06958cb")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.8c20bc421964292e")}
            </p>
            {"\n                "}
          </div>
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
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
              {t("legacy.2a7071e9e7774f63")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.52c3c02b8e15616d")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.e3b0e18a8781651b")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.f65f77b394eca518")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.54763db23cf34459")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {t("legacy.adefd89aec97c8da")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.27762671b0226b58")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.95f549e0c897228d")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.0ecce2e53dbfa316")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.9b07698e870bc1c8")}
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
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/shortest-path/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
