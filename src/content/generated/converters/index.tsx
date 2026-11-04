"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "converters", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-amber-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"NUMBER SYSTEMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.f297bd903eff5132")}
          <span className={"text-amber-600"}>
            {"(Number Converters)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.6db1ca61c71a146c")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.77318f031ff906bf")}
        </h2>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {t("legacy.baf479ce391846a3")}
            <span className={"font-bold text-green-700"}>
              {"10"}
            </span>
            {t("legacy.639c0cb12a91aa88")}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {t("legacy.03bf106531a9fdaf")}
              </span>
              {t("legacy.92085a8f598eefdf")}
              <span className={"mono-font text-lg text-green-700"}>
                {"456"}
              </span>
              {t("legacy.933b53e12e4788c9")}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-green-700 mt-2 text-center ltr-text"}>
              {"4 × 10² + 5 × 10¹ + 6 × 10⁰"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-green-700 text-center ltr-text"}>
              {"= 400 + 50 + 6 = 456"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.a79c243c43a27235")}
        </h2>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {t("legacy.0a43faac0b5c742e")}
            <span className={"font-bold text-blue-700"}>
              {"2"}
            </span>
            {t("legacy.e38df8a480d18459")}
            <span className={"mono-font bg-gray-200 p-1 rounded"}>
              {"0"}
            </span>
            {t("legacy.6245b4d08f3f2a99")}
            <span className={"mono-font bg-gray-200 p-1 rounded"}>
              {"1"}
            </span>
            {".\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {t("legacy.03bf106531a9fdaf")}
              </span>
              {t("legacy.a034785c62512a71")}
              <span className={"mono-font text-lg text-blue-700"}>
                {"1101"}
              </span>
              {t("legacy.b80f19efc429d2cb")}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-blue-700 mt-2 text-center ltr-text"}>
              {"1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-blue-700 text-center ltr-text"}>
              {t("legacy.4830ae2c751b390d")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.c0ffaf350ec68783")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.d4aab32340880649")}
          <span className={"font-bold"}>
            {t("legacy.917a73a450df44ae")}
          </span>
          {t("legacy.ffc5bfba0e3d99f7")}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md concept-card border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.7a214d2b2acc6bf1")}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full text-center"}>
              <tbody>
                <tr className={"border-b"}>
                  <td className={"p-2 font-bold"}>
                    {t("legacy.eb31a9f861fd5109")}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2 font-bold"}>
                    {t("legacy.f4acf266f48064fe")}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁵"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁴"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2³"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2²"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2¹"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁰"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 font-bold"}>
                    {t("legacy.4c49efecd6cbd7c2")}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"32"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"8"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"4"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"mt-4 text-amber-800 font-bold text-lg text-center"}>
            {"\n                    32 + 0 + 8 + 4 + 0 + 1 = 45₁₀\n                "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.9b884fe720440dc5")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.d6f7ecd65a02b4ed")}
          <span className={"font-bold"}>
            {t("legacy.3cfcf54391a0fc5e")}
          </span>
          {t("legacy.53bbe7108976e726")}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.a1ce151fa302c857")}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full text-center"}>
              <tbody>
                <tr className={"border-b bg-gray-100"}>
                  <th className={"p-2 font-bold"}>
                    {t("legacy.3278cda232e6ef35")}
                  </th>
                  <th className={"p-2 font-bold"}>
                    {t("legacy.bcbbba52e80ac255")}
                  </th>
                  <th className={"p-2 font-bold"}>
                    {t("legacy.37bd31bf3892daee")}
                  </th>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"45 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"22"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"22 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"11"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"0"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"11 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"5"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"5 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"2 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2"}>
                    {"1 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"mt-4 text-purple-800 font-bold text-lg text-center"}>
            {t("legacy.535670daab62090a")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"}></path>
            {"\n                "}
          </svg>
          {t("legacy.7cc5c2110d5afffe")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.999617836e7a5dc4")}
          <span className={"font-bold"}>
            {t("legacy.4a0def423378d210")}
          </span>
          {t("legacy.6245b4d08f3f2a99")}
          <span className={"font-bold"}>
            {t("legacy.af9b7801c3e49c41")}
          </span>
          {t("legacy.5bfbcef355826b61")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md concept-card border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
              {t("legacy.c677dd509a7d9f80")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mb-3"}>
              {t("legacy.491ef360eab8cf69")}
              <span className={"font-bold"}>
                {t("legacy.323a09462e6ae374")}
              </span>
              {t("legacy.c27465e24be6cd0b")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg shadow-inner text-sm"}>
              {"\n                        "}
              <p className={"text-gray-600"}>
                {t("legacy.cf7058064338e967")}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md concept-card border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
              {t("legacy.c136b7bc9345c057")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mb-3"}>
              {t("legacy.491ef360eab8cf69")}
              <span className={"font-bold"}>
                {t("legacy.0b797af25bf095aa")}
              </span>
              {t("legacy.95556e372836f0c7")}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg shadow-inner text-sm"}>
              {"\n                        "}
              <p className={"text-gray-600"}>
                {t("legacy.d74df16137479db8")}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-rose-50 p-5 rounded-lg shadow-md mt-4 concept-card border-rose-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-rose-800 mb-3"}>
            {t("legacy.d39cfc2def2cb79e")}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {t("legacy.4033688f0e9c13ea")}
              </span>
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.49d38cf73c442b90")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.fdf72f1802a0ed36")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.b237b23bcfd94c02")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.12ff935b19f48863")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4 mb-3"}>
              {"← 13₁₀ = 1101₂"}
            </p>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {t("legacy.acdbc068157c8335")}
              </span>
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.6cf09c4926f57c25")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {t("legacy.4799e538a19d1b3a")}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4 mb-3"}>
              {"← 0.75₁₀ = 11₂"}
            </p>
            {"\n                    "}
            <p className={"text-rose-800 font-bold text-lg text-center mt-2"}>
              {"13.75₁₀ = 1101.11₂"}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.47436505044cb70e")}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white rounded-lg shadow-md"}>
            <thead>
              <tr className={"bg-indigo-700 text-white"}>
                <th className={"p-3 border border-indigo-600"}>
                  {t("legacy.34f42338684ff536")}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {"2ⁿ"}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {t("legacy.b9802234ca14e5c2")}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {t("legacy.95023fc76e1b1460")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁷"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"128"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"128"}
                </td>
                <td className={"p-3"}>
                  {"128"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁶"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"64"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"64"}
                </td>
                <td className={"p-3"}>
                  {"64"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁵"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"32"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"32"}
                </td>
                <td className={"p-3"}>
                  {"32"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁴"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"16"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"16"}
                </td>
                <td className={"p-3"}>
                  {"16"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2³"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"8"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"8"}
                </td>
                <td className={"p-3"}>
                  {"8"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2²"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"4"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"4"}
                </td>
                <td className={"p-3"}>
                  {"4"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2¹"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2"}
                </td>
                <td className={"p-3"}>
                  {"2"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁰"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"1"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"1"}
                </td>
                <td className={"p-3"}>
                  {"1"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-600 text-sm mt-4 text-center"}>
          {t("legacy.7db394af5be29833")}
        </p>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 mb-6"}>
        {"\n            "}
        <a href={"/algorithms/converters/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition duration-200 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 9l4-4 4 4m0 6l-4 4-4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.2fc730b07e17dc1b")}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n  \n"}
    </div>
  );
}
