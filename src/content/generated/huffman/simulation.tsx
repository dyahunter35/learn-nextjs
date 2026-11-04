"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "huffman", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"HUFFMAN CODING"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.6caa62292b813a75")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.f2d23fc1453bdcdd")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.4a915275b49d9a17")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <textarea id={"textInput"} rows={3} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left text-lg char-display focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-300"} placeholder={"Enter English text here, only lowercase letters will be counted. Example: huffman coding is efficient..."} defaultValue={"aabbbccdeeeeff"}></textarea>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"px-6 md:px-8 py-5 bg-gradient-to-l from-indigo-50 to-purple-50 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex flex-col sm:flex-row gap-4 items-center justify-between"}>
              {"\n              "}
              <p className={"text-sm text-gray-500"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4 inline ml-1 text-indigo-400"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.d70e03bfae74299a")}
              </p>
              {"\n              "}
              <button data-legacy-click={"initializeHuffman()"} className={"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.7c574037b6493500")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div id={"stepControls"} className={"hidden p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-amber-500 rounded-full"}></div>
              {"\n              "}
              <h2 id={"stepTitle"} className={"text-lg font-bold text-gray-800"}></h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100"}>
              {"\n              "}
              <div className={"flex justify-between items-center"}>
                {"\n                "}
                <button id={"prevBtn"} data-legacy-click={"prevStep()"} className={"flex items-center bg-white text-gray-700 py-2.5 px-5 rounded-lg font-semibold hover:bg-gray-50 transition duration-150 shadow-sm border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"} disabled={true}>
                  {"\n                  "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 ml-2"} viewBox={"0 0 20 20"} fill={"currentColor"}>
                    {"\n                    "}
                    <path fillRule={"evenodd"} d={"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"} clipRule={"evenodd"}></path>
                    {"\n                  "}
                  </svg>
                  {t("legacy.a9e9d067101af97d")}
                </button>
                {"\n                "}
                <div id={"stepIndicator"} className={"text-lg font-bold text-indigo-600 bg-white px-5 py-2 rounded-lg shadow-sm border border-gray-100"}>
                  {"0 / 0"}
                </div>
                {"\n                "}
                <button id={"nextBtn"} data-legacy-click={"nextStep()"} className={"flex items-center bg-indigo-600 text-white py-2.5 px-5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"}>
                  {t("legacy.5cf7af74fd3aad4b")}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 mr-2"} viewBox={"0 0 20 20"} fill={"currentColor"}>
                    {"\n                    "}
                    <path fillRule={"evenodd"} d={"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"} clipRule={"evenodd"}></path>
                    {"\n                  "}
                  </svg>
                  {"\n                "}
                </button>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-blue-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.d032a1be41dd3a53")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
              {"\n              "}
              <table className={"w-full text-sm text-right text-gray-500"}>
                <thead className={"text-xs text-gray-700 uppercase bg-gray-50"}>
                  <tr>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {t("legacy.00130a27f01252cb")}
                    </th>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {t("legacy.b308d640bc250471")}
                    </th>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {t("legacy.caa3f2bb4a36fda8")}
                    </th>
                  </tr>
                </thead>
                <tbody id={"combinedTableBody"}>
                  <tr className={"bg-white border-b border-gray-100"}>
                    <td colSpan={3} className={"text-center py-8 text-gray-400"}>
                      {t("legacy.f1b2a457e2a60054")}
                    </td>
                  </tr>
                </tbody>
              </table>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.7e7784f2854244ed")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"treeVisualization"} className={"relative min-h-[300px] overflow-hidden border border-gray-200 rounded-xl bg-gray-50 p-4"}>
              {"\n              "}
              <p className={"text-center text-gray-400 mt-20"} id={"treePlaceholder"}>
                {t("legacy.87ba08b0f4ba84a4")}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div id={"finalCodesArea"} className={"hidden p-6 md:p-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-green-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.a0c1176e24dfd04d")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
              {"\n              "}
              {"\n              "}
              <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
                {"\n                "}
                <table className={"w-full text-sm text-right text-gray-600"}>
                  <thead className={"text-xs text-white uppercase bg-green-600"}>
                    <tr>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {t("legacy.fdfdf3a018085c1f")}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {t("legacy.71716db1b395a3de")}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {t("legacy.53fc6959691a3c45")}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {t("legacy.52906b5afa1256c7")}
                      </th>
                    </tr>
                  </thead>
                  <tbody id={"finalCodesTableBody"}>

                  </tbody>
                </table>
                {"\n              "}
              </div>
              {"\n\n              "}
              {"\n              "}
              <div className={"bg-gray-50 p-5 rounded-xl border border-gray-200"}>
                {"\n                "}
                <h3 className={"font-bold text-gray-800 mb-3"}>
                  {t("legacy.a8d4751ab5df5d74")}
                </h3>
                {"\n                "}
                <div className={"text-gray-700 space-y-3"}>
                  {"\n                  "}
                  <p className={"font-semibold text-sm"}>
                    {t("legacy.4ce04f4a15a08995")}
                  </p>
                  {"\n                  "}
                  <div className={"bg-white p-3 rounded-lg border border-gray-200 char-display text-lg overflow-x-auto text-center"} dir={"ltr"}>
                    {"\n                    $$ L_{avg} = \\frac{\\sum_{i=1}^{n} (f_i \\times L_i)}{N} $$\n                  "}
                  </div>
                  {"\n                  "}
                  <ul className={"text-xs list-disc list-inside space-y-1 text-gray-500"}>
                    {"\n                    "}
                    <li>
                      {t("legacy.bfd7bca38fde8cf2")}
                    </li>
                    {"\n                    "}
                    <li>
                      {t("legacy.4365414a7f69a742")}
                    </li>
                    {"\n                    "}
                    <li>
                      {t("legacy.799a95f8891edd5c")}
                    </li>
                    {"\n                    "}
                    <li>
                      {t("legacy.a3fe366ada4c75e1")}
                    </li>
                    {"\n                  "}
                  </ul>
                  {"\n\n                  "}
                  <p className={"font-semibold text-sm mt-3"}>
                    {t("legacy.aa617511225e9963")}
                  </p>
                  {"\n                  "}
                  <div id={"calculationSteps"} className={"bg-white p-3 rounded-lg border border-gray-200 text-sm char-display overflow-x-auto text-center"} dir={"ltr"}>
                    {"\n                    $$ \\frac{1}{14} \\times \\left[ (4 \\times 2) + (3 \\times 2) + (2 \\times 3) + (2 \\times 3) + (2 \\times 3) + (1 \\times 3) \\right] = \\frac{35}{14} = 2.500 $$\n                  "}
                  </div>
                  {"\n                  "}
                  <div className={"bg-gradient-to-l from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200"}>
                    {"\n                    "}
                    <p className={"font-bold text-green-800 mb-1"}>
                      {t("legacy.d75ac7d3d0e1d235")}
                    </p>
                    {"\n                    "}
                    <p className={"text-2xl font-mono text-green-700"}>
                      {"\n                      "}
                      <span id={"avgCodeLength"}>
                        {"0"}
                      </span>
                      {t("legacy.db82c8eb1cd593a7")}
                    </p>
                    {"\n                  "}
                  </div>
                  {"\n                "}
                </div>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n    \n"}
    </div>
  );
}
