"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "greedy", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"GREEDY ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.285f276ab2847511")}
          <span className={"text-indigo-600"}>
            {"(Greedy Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.a8154187c033a7b9")}
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
          {t("legacy.70e7b07611052271")}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {t("legacy.7370773479f02ddf")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.4a57d38b15ed302a")}
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
          {t("legacy.14b21bb326bcbf3c")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.569d72bb773aa0d7")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {t("legacy.1e077af6a741dc71")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.63f27b5189cb2904")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {t("legacy.0e03dfb26c3931df")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {t("legacy.3f889a5eefaccd40")}
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
          {t("legacy.eb4090d64727ecb8")}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.686deb15cb77a601")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.3bae795c32692a5c")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-teal-800 mb-3"}>
            {t("legacy.fa60644437b192af")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.7adca29a14d2b38a")}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {t("legacy.4fc0cc192a72c665")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {t("legacy.851025f0b2fa27ce")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.23fc2a684979fe4a")}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full text-right border-collapse"}>
            <thead>
              <tr className={"bg-indigo-100"}>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {t("legacy.7c2062c8db2da09d")}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {t("legacy.9a47af78416692da")}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {t("legacy.5ac322ef1be47cfb")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.7c662dba70568e52")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.3e275415e0801b77")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.9b7dda7ae570cfec")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.1ef1cbb46472e7cd")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.5c753134b2ba7d59")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.34c53bc47331d44d")}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.dbd1d3ebdf9e3aca")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.f80803d2880b4b1c")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.8e7dc8357c97ddce")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.1096e96b037767af")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.9011f7906370d443")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.d905b94da4a301c3")}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.905db3269be84eb4")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.98f188bb113ef240")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.8360b38e23cc1baa")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {t("legacy.dfd8ff69b66915df")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.77dc2de566228f83")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.278399f1ac7679a5")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-8"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.08cfc7c2a9b69969")}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
              {t("legacy.5a91b9f67b8adef2")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-2 text-gray-700"}>
              {"\n                        "}
              <li>
                {t("legacy.336b78aa4b619c9f")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.37c41bbae35afc9b")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.76adccba8169d2d7")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.2b266cd0c321e3d8")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.5f147c9034bab345")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
              {t("legacy.44e758315f889500")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-2 text-gray-700"}>
              {"\n                        "}
              <li>
                {t("legacy.affb88a415a86bdb")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.17af5238b5ee61f6")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.a9abc5da81cb5ffd")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.6e31241ad33d2b71")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.ef649fdb86f3209d")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n    "}
    </div>
    {"\n\n    \n\n  \n"}
    </div>
  );
}
