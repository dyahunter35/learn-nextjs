"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "graphs", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"GRAPH ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.819e2e130bcfaf05")}
          <span className={"text-indigo-600"}>
            {"(Graph Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.d5a249b7ed0f6ab0")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.6780461922667be7")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.4f8c60ee55d47b0b")}
          <strong>
            {t("legacy.1e0df4b7c0f44b2e")}
          </strong>
          {t("legacy.089442c442004af2")}
          <strong>
            {t("legacy.450fbd3cd09a3e82")}
          </strong>
          {t("legacy.a780b0f1f4dfc658")}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.01e6c3643522158f")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    "}
            <strong>
              {t("legacy.8c79f34611950dae")}
            </strong>
            {t("legacy.0c27015365bf705f")}
            <br />
            {"\n                    "}
            <strong>
              {t("legacy.f5d3713fe06cec64")}
            </strong>
            {t("legacy.e9c2bb38b29bb5b7")}
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
          {t("legacy.ef21977075f063ba")}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {t("legacy.f2c724c9548d5e2a")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.9b0c629045efd747")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {t("legacy.0746f55bb3d9a3dd")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.8513e6c4aab42d38")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2"}>
              {t("legacy.ff25add17a16a476")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.01e141ce4d33d8e8")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-rose-50 p-5 rounded-lg shadow-md border-rose-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-rose-800 mb-2"}>
              {t("legacy.2935b32560d884f6")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.5bbb631a46f16887")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.d94504726d0a36ef")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.970a4d6427ee8ebd")}
          <strong>
            {"BFS"}
          </strong>
          {t("legacy.ec4b8b98978d4aca")}
          <strong>
            {t("legacy.6c2c78f9299b727f")}
          </strong>
          {t("legacy.52240dc08b617e75")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.4d17efb96c2672ba")}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {t("legacy.127b469f6527919f")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.debd9ed7acecf0a0")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.57371e16bb26c5c4")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.dcd0533b7e43ad18")}
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
            {t("legacy.0304020417ab0367")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V + E)"}
            </span>
            {t("legacy.e1654fc8a42e54a7")}
            <br />
            {t("legacy.5c7a73cf6222fd0f")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V)"}
            </span>
            {t("legacy.5f26ce0457ac0ed8")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.0229130d3652ce3f")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.970a4d6427ee8ebd")}
          <strong>
            {"DFS"}
          </strong>
          {t("legacy.28cce31d971e312a")}
          <strong>
            {t("legacy.b3524c9f21c19258")}
          </strong>
          {t("legacy.58d276fb89c96e21")}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.d068e34189301798")}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {t("legacy.bfc91d8700809105")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.ac33a985dc03340b")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.efef11623b967eb9")}
            </li>
            {"\n                    "}
            <li>
              {t("legacy.a90a89001506a70c")}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.1b29b192688f3da3")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.0304020417ab0367")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V + E)"}
            </span>
            {t("legacy.3dff78571ea057ff")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V)"}
            </span>
            {t("legacy.f771350bb32c5752")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {t("legacy.204e8bb601290655")}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.695ebc35ab262fcd")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"BFS"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"DFS"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.b6bd1590cbde98ef")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.6c2c78f9299b727f")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.b3524c9f21c19258")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.81a8360521699c22")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.4b05c05da824676b")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.e3711b0a30bbc639")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.a54771a06d3b9549")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.95e7bfc8e132c98e")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.fde68312a69b3e0f")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.54d25b1868975a11")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.9e1c220c7dd01569")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.44f8be00928af4a9")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.8f70b7de66af8d3a")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.88f309e4c7c7564e")}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {t("legacy.3f0d7b4808f239c0")}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.1ef1cbb46472e7cd")}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(V + E)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(V + E)"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.4389e7cfd027b4a9")}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {t("legacy.4e57bd3d9fa2c1d9")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.ab0534501576bce4")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.a37e68861646dacd")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.f782c668f7e958d5")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.dc40179f490f09c7")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.9defdb0cfdb3f670")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {t("legacy.6dc39ee4cc052e18")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.1587a03f61c5f581")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.78918d5bd5b6ce20")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.520e60de33d65a61")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.c105f6843709de88")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.2a43bef29f7c3e3a")}
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
        <a href={"/algorithms/graphs/simulation/"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
