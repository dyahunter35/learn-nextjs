"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "sorting", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SORTING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.939dfdf18baf9f73")}
          <span className={"text-indigo-600"}>
            {"(Sorting Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.b7a0cb96e845dd4f")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.e28f267f4d1d414b")}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.2114e768aa12afcb")}
        </p>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.56c4cc0c6fb26494")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.b9d35cc5aa6dbefa")}
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
          {t("legacy.1537fa50aa01841e")}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.a29d4d233722edee")}
        </p>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {t("legacy.0f2c9d12f82b0f22")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {t("legacy.e88e6d36ad334ae7")}
          </p>
          {"\n                "}
          <div className={"bg-white p-3 rounded-lg border border-green-200 text-center font-bold text-green-800 text-base mb-2 overflow-x-auto"} dir={"ltr"}>
            {"\n                    $$ \\sum_{i=1}^{n-1} i = \\frac{(n-1) \\cdot n}{2} = \\frac{n^2 - n}{2} \\in O(n^2) $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {t("legacy.78e2d954bbac656c")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-bold text-gray-800 mb-4"}>
          {t("legacy.78df25a7285668e7")}
        </h3>
        {"\n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.eec3723932eb62dd")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.0c9970ad38d62534")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.fb863a8a867385b0")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.52788069bfec395b")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.6037d50881f18613")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.91be21fa587916db")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.25ae3ee007b55757")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.6b6799305eb4a9ec")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.48470324baa88a4b")}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.50a9446623dfd750")}
        </p>
        {"\n\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.1b29b192688f3da3")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.d72006251b7e1d4c")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {t("legacy.8fbc8c50ef4c1cca")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-bold text-gray-800 mb-4"}>
          {t("legacy.78df25a7285668e7")}
        </h3>
        {"\n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.019459f61a92239e")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.d4cc65dcdbc832cd")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.a12b46bac4b93300")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.27874e6c267abda4")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.dfa99c45dcfc0df3")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.fc7b5939b3507bf5")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.99836db7ed56a3d9")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.77f08c7fa99767b5")}
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
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {t("legacy.32ddfca4000e81f8")}
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
                  {"Bubble Sort"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"Selection Sort"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.fbde134950d11b2d")}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.aaa2930ed156e108")}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.ca8fe283f8bd6e3c")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.c972b60c09ad0889")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.e6f6fec9574055e3")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.dedd3f772d994b10")}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.7568ca6f3555c685")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.a518dd220cea3609")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.189800055b84ebd1")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.d86e93e1ed53276d")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.c638ebb7a818575a")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.6e819dec0128322d")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.bdb3985139d61801")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.2525e0e23413feb6")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.2525e0e23413feb6")}
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
        <a href={"/algorithms/sorting/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
