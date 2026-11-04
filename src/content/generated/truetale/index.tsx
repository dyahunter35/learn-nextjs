"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "truetale", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n\n    \n    \n\n    \n\n"}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n    "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n        "}
        <span className={"inline-block text-rose-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"TRUTH TABLES"}
        </span>
        {"\n        "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.4bd65dfacabf9ead")}
          <span className={"text-rose-600"}>
            {"(Truth Tables)"}
          </span>
          {"\n        "}
        </h1>
        {"\n        "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.064204552fe8f197")}
        </p>
        {"\n    "}
      </header>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n            "}
          </svg>
          {t("legacy.007a803ffb9972d9")}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.ccec9da48e0cf2e3")}
        </p>
        {"\n        "}
        <p className={"text-gray-700 leading-loose"}>
          {t("legacy.19470e96f0e34fc1")}
          <span className={"text-green-600 font-bold"}>
            {t("legacy.01ac709d10e837eb")}
          </span>
          {t("legacy.2553faf2d7c4285c")}
          <span className={"text-red-600 font-bold"}>
            {t("legacy.32587fe9798ac308")}
          </span>
          {t("legacy.c9b8f52520d8aac4")}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n            "}
          </svg>
          {t("legacy.0ac9818f64f1981b")}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-6"}>
          {t("legacy.422a607d23b75625")}
        </p>
        {"\n\n        "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}></path>
              {"\n                "}
            </svg>
            {t("legacy.e9dcbd8b39020065")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.6e8b064e3780b8b2")}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-red-200"}>
                  <th className={"p-3 border border-red-300 font-bold text-red-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-red-300 font-bold text-red-900"}>
                    {"¬A"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                    {"0"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-red-600"}>
            {t("legacy.41fd4b619c6735f8")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path>
              {"\n                "}
            </svg>
            {t("legacy.4760615928a3c9ec")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.6a7e09e2d23a3b13")}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-blue-200"}>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"A ∧ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-blue-600"}>
            {t("legacy.61bc4c4d3adc17fd")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}></path>
              {"\n                "}
            </svg>
            {t("legacy.ed97556c29b487c5")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.5233ac2dbb0d69cb")}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-green-200"}>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"A ∨ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-green-600"}>
            {t("legacy.b2a566845e0f4569")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 7l5 5m0 0l-5 5m5-5H6"}></path>
              {"\n                "}
            </svg>
            {t("legacy.27364963056cc8ae")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.2f168cada1f55fd1")}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-purple-200"}>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"A → B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-purple-600"}>
            {t("legacy.5701a79698bf235d")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-6 concept-card border-amber-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                "}
            </svg>
            {t("legacy.de9706526544ab8b")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.d1b77891cbdb8ad0")}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-amber-200"}>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"A ↔ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-amber-600"}>
            {t("legacy.2bfd3c62d2200ed5")}
          </p>
          {"\n        "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}></path>
            {"\n            "}
          </svg>
          {t("legacy.70c676da4a59e079")}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-6"}>
          {t("legacy.d74903688dd7e2a8")}
        </p>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {t("legacy.890b39547ebb2a3d")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {t("legacy.f0e3717601e98640")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {t("legacy.891e1f7a02f2fe23")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {t("legacy.d61f34eebf69a06a")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {t("legacy.2153fb148e386250")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {t("legacy.8ad92cfda5f1c42c")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {t("legacy.9c72c700d6a9e981")}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {t("legacy.6eb15c82133881d0")}
          </p>
          {"\n        "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-10"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}></path>
            {"\n            "}
          </svg>
          {t("legacy.c1ffec2463eec139")}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-4"}>
          {t("legacy.323aef0bcff908cb")}
          <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
            {"(A ∧ B) → (¬A ∨ C)"}
          </span>
          {"\n        "}
        </p>
        {"\n        "}
        <div className={"overflow-x-auto mb-4"}>
          {"\n            "}
          <table className={"w-full text-center border-collapse"}>
            <thead>
              <tr className={"bg-indigo-200"}>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"A"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"B"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"C"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"A ∧ B"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"¬A"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"¬A ∨ C"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"(A ∧ B) → (¬A ∨ C)"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"0"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n        "}
        </div>
        {"\n        "}
        <p className={"text-gray-700 leading-loose"}>
          {t("legacy.c6e4c6c07b09b8de")}
          <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
            {"(A ∧ B) → (¬A ∨ C)"}
          </span>
          {t("legacy.b0d77d07aa64a06a")}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      <div className={"text-center mt-10 mb-4"}>
        {"\n        "}
        <a href={"/algorithms/truetale/simulation/"} className={"inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition duration-200"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2 mb-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n            "}
          </svg>
          {t("legacy.f75cffef460db615")}
        </a>
        {"\n    "}
      </div>
      {"\n"}
    </div>
    {"\n\n\n\n  \n"}
    </div>
  );
}
