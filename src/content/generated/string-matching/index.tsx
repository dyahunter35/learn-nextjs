"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "string-matching", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"STRING MATCHING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.5926cab528a191a3")}
          <span className={"text-blue-600"}>
            {"(String Matching)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.d14bdd79800f2f62")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.d492cb3310199486")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.a647d466184a71bd")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.24a0c1a8b29299a0")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.664056f62daeaf44")}
            <code className={"bg-gray-200 px-2 py-0.5 rounded font-mono ltr-text"}>
              {"\"ABABDABACDABABCABAB\""}
            </code>
            {t("legacy.0bc198adcf0e8327")}
            <code className={"bg-gray-200 px-2 py-0.5 rounded font-mono ltr-text"}>
              {"\"ABABCABAB\""}
            </code>
            {t("legacy.ad5ef3ffa23dba41")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {t("legacy.fc744b1ad10c1a44")}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.b0c6e7806ac16125")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.ef5ece6ceaec8060")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-semibold text-blue-700 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.065b4a33559a439b")}
        </h3>
        {"\n\n            "}
        <div className={"list-none p-0"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.97be2b6bd00c05bf")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.d4e4245b5db7bd21")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"0"}
              </span>
              {").\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.941e8670e5d497a9")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.0c14e26f3bd3149e")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.3879d9c4cffb50e9")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.44251e5d4b64a3d4")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.41d8aa88878f1742")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.e5080c0b016aa264")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.b308d640bc250471")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.0d0af9a6a6be506e")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"n - m"}
              </span>
              {").\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-3"}>
            {t("legacy.acb6e5390ee0d6f0")}
          </h3>
          {"\n                "}
          <div className={"grid md:grid-cols-2 gap-4"}>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.1ef1cbb46472e7cd")}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-yellow-600"}>
                {"O((n-m+1) × m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.874b615eef15c0ba")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.f9dfab1c1e5a30d9")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.c69d0e2f15ffb6b0")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.7f18f4ba9fcaa90b")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(n × m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.408c3ed7bf7dcbf5")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.516e2861f1737d56")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.c40a9e064949379f")}
              </p>
              {"\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.fa3c35bf0b89aed5")}
        </h2>
        {"\n\n            "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
            {t("legacy.00f73b9f3c6cddb9")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.7083174d6c8a267a")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {t("legacy.5fae8947476ecb47")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.3a9de0bf9d52c67f")}
            <strong>
              {t("legacy.d26a98450630c654")}
            </strong>
            {t("legacy.86192b1d8033657c")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-semibold text-green-700 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.065b4a33559a439b")}
        </h3>
        {"\n\n            "}
        <div className={"list-none p-0"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.5bc261d2c86993ab")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.c85f418922b4e6e6")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"π[i]"}
              </span>
              {t("legacy.8cfd3a847e9d3fc3")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.5495fe8b748f61b3")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.ca31f086ca769ad0")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j = π[j-1]"}
              </span>
              {t("legacy.df2320d238c22a38")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.8c676d43460ea6bc")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.9ce6ffb5033845d3")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.3879d9c4cffb50e9")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.7453a670632883e9")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j == m"}
              </span>
              {t("legacy.05731077c96022fe")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"i - j"}
              </span>
              {t("legacy.69c0f17f91a051d3")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j = π[j-1]"}
              </span>
              {t("legacy.90ce8cce14dc95df")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-3"}>
            {t("legacy.acb6e5390ee0d6f0")}
          </h3>
          {"\n                "}
          <div className={"grid md:grid-cols-2 gap-4"}>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.1ef1cbb46472e7cd")}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-green-600"}>
                {"O(n + m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.17a855f5ec6ece5d")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.516e2861f1737d56")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.96e5c218ad716c82")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.f9dfab1c1e5a30d9")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.f0bfccdbf7af0469")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.7f18f4ba9fcaa90b")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n + m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.046377c41567c360")}
              </p>
              {"\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.d26a98450630c654")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.2c217f5899808278")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-4 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.ac3e6023eae7774c")}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden"}>
              <thead>
                <tr className={"bg-indigo-700 text-white"}>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"i"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"0"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"1"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"2"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"3"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"4"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"5"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"6"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"7"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"8"}
                  </th>
                </tr>
              </thead>
              <tbody className={"divide-y divide-gray-200"}>
                <tr className={"hover:bg-gray-50"}>
                  <td className={"p-3 font-bold"}>
                    {"Pattern[i]"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"C"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                </tr>
                <tr className={"hover:bg-gray-50 bg-indigo-50"}>
                  <td className={"p-3 font-bold"}>
                    {"π[i]"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"2"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"2"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"3"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"4"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.fce1894bf54c20af")}
        </h2>
        {"\n            "}
        <div className={"grid md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {t("legacy.7e03147f036c6290")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {t("legacy.d3486a698d838a23")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {t("legacy.81f28e270c954460")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {t("legacy.aa37d8c7d6609ba1")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {t("legacy.524f779475f46e30")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {t("legacy.e68920c9d47c5b82")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {t("legacy.a433fb4c62295358")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {t("legacy.8c31b6f2f4a6c451")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.f3dcd20d2dc42573")}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-700 text-white"}>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {t("legacy.695ebc35ab262fcd")}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {t("legacy.4010d4a44d1d3ed3")}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {t("legacy.6a47a7154d65f722")}
                </th>
              </tr>
            </thead>
            <tbody className={"divide-y divide-gray-200"}>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.1ef1cbb46472e7cd")}
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n × m)"}
                  </span>
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n + m)"}
                  </span>
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.516e2861f1737d56")}
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(1)"}
                  </span>
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(m)"}
                  </span>
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.767d5d27da629c22")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.3d319322f7d81c75")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.d00c316d82168504")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.0bc643dc2bc0ca8b")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.948dc886227fc88b")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.934002a75aa45195")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.061cffbd53dfc96f")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.b650ae64c8a54258")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.c6e2899a0794204d")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.73dda4d868a0242d")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.d8dbe4f8d15f5229")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.5e33f14954af4f51")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-12"}>
        {"\n            "}
        <a href={"/algorithms/string-matching/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2 mb-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
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
    {"\n\n    \n\n  \n"}
    </div>
  );
}
