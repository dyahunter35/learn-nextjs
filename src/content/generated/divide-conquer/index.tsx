"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "divide-conquer", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DIVIDE & CONQUER"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.89a2f32d8f857326")}
          <span className={"text-indigo-600"}>
            {"(Divide & Conquer)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.b31fc8c1dabdeeba")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.cf890aadc8a56969")}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong className={"text-indigo-700"}>
            {t("legacy.c35b46ba441c148a")}
          </strong>
          {t("legacy.c7c65af187acd0c3")}
        </p>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.a169b5af74f30ecc")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.6fc0f7874767a741")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n log n)"}
            </span>
            {t("legacy.b8f7cc6cf59e959f")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {t("legacy.a0a2232752f550b7")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.b48d4d685cd82d0a")}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-indigo-50 p-5 rounded-xl shadow-md border-t-4 border-indigo-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-indigo-600 mb-2"}>
              {t("legacy.628f6d71f724c951")}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-indigo-800 mb-2"}>
              {t("legacy.3718eddcc290e672")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {t("legacy.7d35411e4897d8e3")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-xl shadow-md border-t-4 border-amber-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-amber-600 mb-2"}>
              {t("legacy.537dcdbcaa60087c")}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-amber-800 mb-2"}>
              {t("legacy.4a433d5042ee219c")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {t("legacy.7335483797c91a7f")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-xl shadow-md border-t-4 border-emerald-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-emerald-600 mb-2"}>
              {t("legacy.1a4fd527b171239a")}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-emerald-800 mb-2"}>
              {t("legacy.35f3e91614b6c346")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {t("legacy.4d0d84c8a8ce5e28")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-gray-50 p-6 rounded-xl border border-gray-200"}>
          {"\n                "}
          <h3 className={"text-xl font-bold text-gray-800 mb-3"}>
            {t("legacy.d008b7b4c7ce33ee")}
          </h3>
          {"\n                "}
          <div className={"flex items-center justify-center gap-2 md:gap-4 text-sm flex-wrap"}>
            {"\n                    "}
            <div className={"bg-indigo-100 text-indigo-800 font-bold px-4 py-3 rounded-lg"}>
              {t("legacy.19dbd573a805e58d")}
            </div>
            {"\n                    "}
            <span className={"text-2xl text-gray-400"}>
              {"←"}
            </span>
            {"\n                    "}
            <div className={"flex gap-2"}>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {t("legacy.e413c024b25e08e6")}
              </div>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {t("legacy.b67370fdb0d52cf0")}
              </div>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {t("legacy.7d50e0b4ae9f09ce")}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <span className={"text-2xl text-gray-400"}>
              {"←"}
            </span>
            {"\n                    "}
            <div className={"bg-green-100 text-green-800 font-bold px-4 py-3 rounded-lg"}>
              {t("legacy.e7f324baddab0cac")}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.cf6888a01f4397a2")}
        </h2>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-indigo-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {t("legacy.5926fcfeefeb10f6")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {t("legacy.bdae857fdb228316")}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-indigo-700 mb-2"}>
              {t("legacy.9dc64465d1b08715")}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm mb-3"}>
              {"\n                        "}
              <li>
                {t("legacy.73d7dd7d092443e4")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.f2ee5e65f3ef2074")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.dcc6ac9f09735b54")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.ee076c4ed734689b")}
              </li>
              {"\n                    "}
            </ol>
            {"\n                    "}
            <div className={"p-2 bg-indigo-50 rounded border border-indigo-200 text-center font-bold text-indigo-800 text-sm overflow-x-auto"} dir={"ltr"}>
              {"\n                        $$ T(n) = 2T\\left(\\frac{n}{2}\\right) + O(n) \\implies O(n \\log_2 n) $$\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm rtl-code"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"mergeSort"}
            </span>
            {"(arr) {"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr.length ≤ 1) "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" arr;"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" mid = Math.floor(arr.length / 2);"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" left = arr.slice(0, mid);"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" right = arr.slice(mid);"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" merge(mergeSort(left), mergeSort(right));"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-amber-50 to-orange-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-amber-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {t("legacy.f163774badc07395")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {t("legacy.743e2b0718f7fa5b")}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-amber-700 mb-2"}>
              {t("legacy.78df25a7285668e7")}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.aa4233dd202fbc61")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.cdb669d8dc842bd6")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.44effa05ab6adcdd")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.3ec91ef6eeed9540")}
              </li>
              {"\n                    "}
            </ol>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"quickSort"}
            </span>
            {"(arr, low, high) {"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (low < high) {"}
            <br />
            {"\n                        "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" pi = partition(arr, low, high);"}
            <br />
            {"\n                        quickSort(arr, low, pi - 1);"}
            <br />
            {"\n                        quickSort(arr, pi + 1, high);"}
            <br />
            {"\n                      }"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-green-50 to-emerald-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-emerald-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {t("legacy.769d0c42499d70e4")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {t("legacy.b1e65596dc9d04f9")}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-green-700 mb-2"}>
              {t("legacy.78df25a7285668e7")}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm"}>
              {"\n                        "}
              <li>
                {t("legacy.ef64a8ad0d34fa61")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.e331a65c5b48bbb0")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.5345bcff419da88a")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.a66850b5aa850d30")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.ebb9c4c0735449bb")}
              </li>
              {"\n                    "}
            </ol>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"binarySearch"}
            </span>
            {"(arr, target) {"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"let"}
            </span>
            {" left = 0, right = arr.length - 1;"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"while"}
            </span>
            {" (left ≤ right) {"}
            <br />
            {"\n                        "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" mid = Math.floor((left + right) / 2);"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr[mid] === target) "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" mid;"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr[mid] < target) left = mid + 1;"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"else"}
            </span>
            {" right = mid - 1;"}
            <br />
            {"\n                      }"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" -1;"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {t("legacy.6c9a11d295ce808c")}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.9cf332976321a330")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.7f18f4ba9fcaa90b")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.9baf6edccce705b8")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.f9dfab1c1e5a30d9")}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {t("legacy.e76b193fd367bf0f")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Merge Sort"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n \\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n \\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n \\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Quick Sort"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n \\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n \\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(\\log_2 n) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Binary Search"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(\\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(\\log_2 n) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(1) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(1) $$"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {t("legacy.d28c24138532a1b9")}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^{2.81}) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^{2.81}) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^{2.81}) $$"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"$$ O(n^2) $$"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-r-4 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-2"}>
            {t("legacy.0094c90dff163c39")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {t("legacy.aae71fbce740ae76")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {t("legacy.97fe3fe5b0630302")}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n log n)"}
            </span>
            {t("legacy.d57679c129d36095")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/divide-conquer/simulation/"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.bb7c107993cef330")}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n\n  \n"}
    </div>
  );
}
