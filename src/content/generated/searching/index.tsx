"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "searching", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SEARCHING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.ce7d797521a2270b")}
          <span className={"text-blue-600"}>
            {"(Searching Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.9948de65852861c1")}
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
          {t("legacy.fd1ff22d91fc769f")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.080b4172e376b2f4")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {t("legacy.ecbefb369d61c545")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.47e84d828d92343f")}
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
          {t("legacy.647170f293d5d180")}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.3063ba1543bfe084")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.0eb0670c73772d03")}
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
              {t("legacy.2bd69fae58e8a6f2")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.d524fb99b885c024")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"0"}
              </span>
              {t("legacy.d16120e92b98f6f5")}
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
              {t("legacy.a3681b2d84340e0a")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.ff7e7cd76c3c7fdc")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.1ff42a125f5a2349")}
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
              {t("legacy.ba6c98cfd4791cbe")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {t("legacy.2c263eeb73ddfc02")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.5d9846fc80b06db3")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"-1"}
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
                {t("legacy.7387e694ef865d7b")}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-yellow-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.ab44d7d7779926c4")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.2b43d4669f8029aa")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.4b2967e64777f79d")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.0c4395cfe7737401")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.156faa65ca0ac238")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.df5455f81d7483f1")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.2156f0dd10d381ab")}
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
          {t("legacy.eac7f4ab09f061e9")}
        </h2>
        {"\n\n            "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
            {t("legacy.8da57d4d933d2cca")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    "}
            <span className={"font-bold"}>
              {t("legacy.e7efbbff4e700b8e")}
            </span>
            {t("legacy.b8ffaefe9420e9b0")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {t("legacy.3063ba1543bfe084")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {t("legacy.dde552bfb9460308")}
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
              {t("legacy.730e9bcfde2b3a95")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.7c89c61e8c7e69cf")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low"}
              </span>
              {t("legacy.cc0a276d569bb867")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"high"}
              </span>
              {t("legacy.8dd163c4bb505ae5")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"n-1"}
              </span>
              {").\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.4bb0286569c864f7")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.d9c988063ce9f061")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"mid = (low + high) / 2"}
              </span>
              {t("legacy.b32f9947d6710752")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.941e8670e5d497a9")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.59cb9dbf8cdd0b43")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"arr[mid]"}
              </span>
              {t("legacy.9bcc7ff034372cf5")}
            </p>
            {"\n                    "}
            <ul className={"list-disc list-inside mr-14 mt-2 space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {t("legacy.c20a3917c823220d")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] == target"}
                </span>
                {t("legacy.83dc1d88dc6eb2b2")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"mid"}
                </span>
                {"."}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.cba5c977ba58cf14")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] < target"}
                </span>
                {t("legacy.0201c0278e18e72e")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"low = mid + 1"}
                </span>
                {")."}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.240b566cba3220de")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] > target"}
                </span>
                {t("legacy.4a9c2d6ca9f4b089")}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"high = mid - 1"}
                </span>
                {")."}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.b308d640bc250471")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.e5d4f3d3b1399d0b")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low <= high"}
              </span>
              {t("legacy.ff2e6f786fb92824")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {t("legacy.2c263eeb73ddfc02")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.e8ba16a1d3f5f5c3")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low > high"}
              </span>
              {t("legacy.7a827eb32b6e8f73")}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"-1"}
              </span>
              {t("legacy.e7503aa75def599a")}
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
                {t("legacy.7387e694ef865d7b")}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-green-600"}>
                {"O(log n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"log"}
                <sub>
                  {"2"}
                </sub>
                {t("legacy.2e7537fc5bf960af")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.2b43d4669f8029aa")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.dc7c8341c721c75d")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.0c4395cfe7737401")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(log n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.f85a98e20f3cb627")}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {t("legacy.4c8b739ef959b2d9")}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {t("legacy.5ad756432d610782")}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {t("legacy.8226d6023a29a630")}
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
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.55e9bd9b69f7a4be")}
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
                  {t("legacy.99658ff580ca5965")}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {t("legacy.8235e65e7b402b7f")}
                </th>
              </tr>
            </thead>
            <tbody className={"divide-y divide-gray-200"}>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.1ef1cbb46472e7cd")}
                </td>
                <td className={"p-4"}>
                  {"\n                                "}
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n)"}
                  </span>
                  {"\n                            "}
                </td>
                <td className={"p-4"}>
                  {"\n                                "}
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(log n)"}
                  </span>
                  {"\n                            "}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.ce5d906fe1884ecd")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.1c9a08ef103b2426")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.d48bff72e9f79e41")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.ccb47991509996de")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.06ea759f2664d64a")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.b703b7f908631d86")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.1e1f06d8a2749e6f")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.b2f794688cfbe663")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.1814e92ae96a78cb")}
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
                  {t("legacy.09c6b545d43afc02")}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {t("legacy.8f70b7de66af8d3a")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.7446e11a349e55b2")}
                </td>
                <td className={"p-4"}>
                  {t("legacy.4ef58a61dc1c69c7")}
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
        <a href={"/algorithms/searching/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-xl"}>
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
    {"\n\n    \n\n\n\n  \n"}
    </div>
  );
}
