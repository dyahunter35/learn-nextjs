"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "recursion", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"RECURSION"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.d6516efe6f60db34")}
          <span className={"text-indigo-600"}>
            {"(Recursion)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.0c1dad25dde5c66d")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
            {"\n                "}
          </svg>
          {t("legacy.23e6f1506fd16d51")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.e118429225e24bba")}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.7370773479f02ddf")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.8b62fbeb47a9368b")}
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
          {t("legacy.7d9e135aa2d1f3b4")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.ce3c467504ac7f0e")}
          <strong>
            {t("legacy.e272ed196625e6a9")}
          </strong>
          {t("legacy.6245b4d08f3f2a99")}
          <strong>
            {t("legacy.0e6bd5648b572b28")}
          </strong>
          {t("legacy.a577187423769ced")}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.49fde5d185ff27fc")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.6224c3b053c22635")}
            <strong>
              {t("legacy.158874071e9a3866")}
            </strong>
            {t("legacy.bba6a366f3f9033e")}
            <br />
            {t("legacy.94d535e89b87761d")}
            <strong>
              {t("legacy.b3ff4bf4675e4af9")}
            </strong>
            {t("legacy.17e1037103904776")}
            <br />
            {t("legacy.5c729ec0b0798ec6")}
            <strong>
              {t("legacy.720df16d909fcd13")}
            </strong>
            {t("legacy.e8ace5f2491ab835")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5l7 7-7 7"}></path>
            {"\n                "}
          </svg>
          {t("legacy.562d1660bd53461a")}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {t("legacy.5654ae84149b0f43")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.bbcebc5abf33e0c6")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-orange-50 p-5 rounded-lg shadow-md border-orange-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-orange-800 mb-2"}>
              {t("legacy.29e46641e538893b")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.9ef085bb5bc4555d")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {t("legacy.ec2dae103a3490bf")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.f031ba6a47077214")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-rose-50 p-5 rounded-lg shadow-md border-rose-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-rose-800 mb-2"}>
              {t("legacy.b1265450509e3417")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.c11769631b0eef38")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-cyan-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
            {"\n                "}
          </svg>
          {t("legacy.ab46c87bd8f655de")}
        </h2>
        {"\n\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.86b543a5741e9f06")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.1fa1c24cf965404f")}
          </p>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-indigo-200 text-center font-bold text-indigo-800 text-lg mb-3 overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ n! = \\begin{cases} 1 & \\text{if } n \\le 1 \\\\ n \\times (n-1)! & \\text{if } n > 1 \\end{cases} $$\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-indigo-100 text-center text-sm font-semibold text-gray-700 overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ 5! = 5 \\times 4! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120 $$\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md concept-card border-teal-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-teal-800 mb-3"}>
            {t("legacy.aa3daa2278518c17")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.81ae25643050ca70")}
          </p>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-teal-200 text-center font-bold text-teal-800 text-lg mb-3 overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ F(n) = \\begin{cases} 0 & \\text{if } n = 0 \\\\ 1 & \\text{if } n = 1 \\\\ F(n-1) + F(n-2) & \\text{if } n \\ge 2 \\end{cases} $$\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-teal-100 text-center text-sm font-semibold text-gray-700 overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ F(6) = F(5) + F(4) = 5 + 3 = 8 $$\n                "}
          </div>
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
          {t("legacy.bd55da92c831a523")}
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
                  {t("legacy.837bd23a4f619b66")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {t("legacy.73b9091bdadfbadb")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.8db8156b9f8d8314")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {t("legacy.73b9091bdadfbadb")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.d8cf7e0b0a286a98")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.c26538dad0f9aa9c")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.cff851049a4e4d0d")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {t("legacy.16d0a77d1ff4b7dc")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.31673896604d1062")}
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
        <a href={"/algorithms/recursion/simulation/"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
