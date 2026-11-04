"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "dp", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DYNAMIC PROGRAMMING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.5acc5c63c096dcde")}
          <span className={"text-indigo-600"}>
            {"(Dynamic Programming)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.bd54215b9b991d0d")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.9d0e671ad254b897")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.79c07e92b13a5259")}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.7370773479f02ddf")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.6fa791cbcd9a211d")}
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
          {t("legacy.3c6cc41da37e74ac")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.831257a24bb204ac")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {t("legacy.e0a714aaac20c5cc")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.7f02bda5b0e61885")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {t("legacy.0545f0d485da06c3")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.10b7154593cb58c8")}
            </p>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5l7 7-7 7"}></path>
            {"\n                "}
          </svg>
          {t("legacy.b068a2f3d7055b3e")}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {t("legacy.9a462c30e9ee3fd2")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-3"}>
              {t("legacy.6f41ab36d0a01d36")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-cyan-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        "}
              <span className={"text-cyan-600"}>
                {"function"}
              </span>
              {" fib(n, memo = {}) {"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {t("legacy.6d79d087a3365525")}
              </span>
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"if"}
              </span>
              {" (n <= 1) "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" n;"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {t("legacy.dc32d78c781426fc")}
              </span>
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"if"}
              </span>
              {" (memo[n] !== "}
              <span className={"text-cyan-600"}>
                {"undefined"}
              </span>
              {") "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" memo[n];"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {t("legacy.a0a2ec1c902778dd")}
              </span>
              <br />
              {"\n                          memo[n] = fib(n-1, memo) + fib(n-2, memo);"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" memo[n];"}
              <br />
              {"\n                        }\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-teal-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-teal-800 mb-2"}>
              {t("legacy.365952d761abf093")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-3"}>
              {t("legacy.af7308fbff2cde96")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-teal-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        "}
              <span className={"text-teal-600"}>
                {"function"}
              </span>
              {" fib(n) {"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"let"}
              </span>
              {" dp = [0, 1];"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"for"}
              </span>
              {" ("}
              <span className={"text-cyan-600"}>
                {"let"}
              </span>
              {" i = 2; i <= n; i++) {"}
              <br />
              {"\n                            dp[i] = dp[i-1] + dp[i-2];"}
              <br />
              {"\n                          }"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" dp[n];"}
              <br />
              {"\n                        }\n                    "}
            </div>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
            {"\n                "}
          </svg>
          {t("legacy.e7c35bc6b070c310")}
        </h2>
        {"\n\n            "}
        <div className={"bg-indigo-50 p-5 rounded-xl border border-indigo-200 mb-6"}>
          {"\n                "}
          <h3 className={"font-bold text-indigo-900 mb-2"}>
            {t("legacy.2dec12402906cf45")}
          </h3>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-indigo-200 text-center font-bold text-indigo-800 text-lg overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ F(n) = \\begin{cases} 0 & \\text{if } n = 0 \\\\ 1 & \\text{if } n = 1 \\\\ F(n-1) + F(n-2) & \\text{if } n \\ge 2 \\end{cases} $$\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-2"}>
              {t("legacy.76ad7ebaf0bb406b")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-2"}>
              {t("legacy.85b78fa912d01138")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-red-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        fib(5) = fib(4) + fib(3)"}
              <br />
              {"\n                        fib(4) = fib(3) + fib(2)"}
              <br />
              {"\n                        fib(3) = fib(2) + fib(1)"}
              <br />
              {"\n                        "}
              <span className={"text-red-500"}>
                {t("legacy.5691885d9514d59c")}
              </span>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-emerald-50 p-5 rounded-lg shadow-md border-emerald-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-emerald-800 mb-2"}>
              {t("legacy.6f1069e888baa283")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-2"}>
              {t("legacy.2921e5147fbac954")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-emerald-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        dp[0] = 0"}
              <br />
              {"\n                        dp[1] = 1"}
              <br />
              {"\n                        dp[2] = dp[1] + dp[0] = 1"}
              <br />
              {"\n                        dp[3] = dp[2] + dp[1] = 2"}
              <br />
              {"\n                        dp[4] = dp[3] + dp[2] = 3"}
              <br />
              {"\n                        dp[5] = dp[4] + dp[3] = 5\n                    "}
            </div>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.7bd6b550461e46b8")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.adf9287ad139095a")}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-6 concept-card border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.1708cad131620668")}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg border border-amber-200 text-center font-bold text-amber-900 text-lg mb-2 overflow-x-auto"} dir={"ltr"}>
            {t("legacy.c876b584bea050bd")}
          </div>
          {"\n                "}
          <p className={"text-gray-700 text-sm mt-3"}>
            {t("legacy.d740f51bb1937053")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.34a4b8c52782dd3e")}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.695ebc35ab262fcd")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.e78e51fdadaf4568")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {t("legacy.73b9091bdadfbadb")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.d95a3916c198ea05")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {t("legacy.73b9091bdadfbadb")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.ed8372414f4b9c1b")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {t("legacy.73b9091bdadfbadb")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.2a874c5b8baf9300")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.63d6f9e3210ab393")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.e8c2337972f48b55")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.4b92f82c1ec754fa")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/dp/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
