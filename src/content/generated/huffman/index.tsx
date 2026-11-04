"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "huffman", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n    \n\n    "}
    {"\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"HUFFMAN CODING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.1c64760b7fbbb004")}
          <span className={"text-emerald-600"}>
            {"(Huffman Coding)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.20260ec511ec583b")}
        </p>
        {"\n        "}
      </header>
      {"\n        \n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 14v1a3 3 0 003 3h4m-4-18H9a3 3 0 00-3 3v11a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.910a300e35e16ca2")}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.65411f3c61b29c94")}
        </p>
        {"\n            \n            "}
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.9d05cf7df8ea06d3")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.1556be7e10484c03")}
          </p>
          {"\n                "}
          <div className={"ltr-text text-xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    $$ \\text{Total Bits} = \\sum_{i=1}^{n} (\\text{Frequency}_i \\times \\text{Code Length}_i) $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-blue-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"Total Bits"}
            </span>
            {t("legacy.8057817d749dc49d")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"n"}
            </span>
            {t("legacy.05752ee53ac6601e")}
          </p>
          {"\n            "}
        </div>
        {"\n            \n            "}
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {t("legacy.602412a4ca72feaa")}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {t("legacy.3394e026a449c9d2")}
          </p>
          {"\n                "}
          <div className={"ltr-text text-xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    $$ L_{avg} = \\frac{\\text{Total Bits}}{\\text{Total Characters}} = \\frac{\\sum (\\text{Frequency}_i \\times \\text{Code Length}_i)}{N} $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-green-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"L_{avg}"}
            </span>
            {t("legacy.265485a233f65cf3")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"N"}
            </span>
            {t("legacy.9f1b12a5aa6cd46f")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M9 9l4-9"}></path>
            {"\n                "}
          </svg>
          {t("legacy.bee5d782e0c90fa2")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 mb-4"}>
          {t("legacy.b20d645b1dc0f65e")}
        </p>
        {"\n            \n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                \n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.4c46bc30a2461f42")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.0f6d1c9237614d0b")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.a6060f038611fd81")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {t("legacy.28ba05c73e251673")}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.693a2a0aedf365cc")}
            </h3>
            {"\n                    "}
            <div className={"text-gray-700 mr-10"}>
              {t("legacy.b084cbb0fd4938fd")}
              <ul className={"list-disc list-inside mr-6 mt-2 space-y-1"}>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {t("legacy.ed6060907b205efb")}
                  </span>
                  {t("legacy.4bd1a3da14792c69")}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {t("legacy.9cf3a2e400d44174")}
                  </span>
                  {t("legacy.61c1c7c2929e96b7")}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {t("legacy.7df91f706000aa6b")}
                  </span>
                  {t("legacy.eff9f411c8a4e760")}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {t("legacy.cbecddb3d2acbda2")}
                  </span>
                  {t("legacy.49bc5e44a3b6aefc")}
                </li>
                {"\n                        "}
              </ul>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {t("legacy.1b62b5104f588a68")}
            </h3>
            {"\n                    "}
            <div className={"text-gray-700 mr-10"}>
              {t("legacy.daa699092c4ec8ba")}
              <ul className={"list-disc list-inside mr-6 mt-2 space-y-1"}>
                {"\n                            "}
                <li>
                  {t("legacy.1b800abbf0106462")}
                  <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                    {"0"}
                  </span>
                  {t("legacy.a55675c499db5bc0")}
                </li>
                {"\n                            "}
                <li>
                  {t("legacy.1b800abbf0106462")}
                  <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                    {"1"}
                  </span>
                  {t("legacy.1017928db497ba94")}
                </li>
                {"\n                            "}
                <li>
                  {t("legacy.c05aebe018f7ca5a")}
                </li>
                {"\n                        "}
              </ul>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.87dd6a0a2afe669b")}
        </h2>
        {"\n             "}
        <blockquote className={"mt-4 p-4 bg-purple-100 border-r-4 border-purple-400 text-purple-800 font-semibold italic text-lg"}>
          {"\n                "}
          <p>
            {t("legacy.bbac0fbcbbca8d48")}
          </p>
          {"\n            "}
        </blockquote>
        {"\n        "}
      </section>
      {"\n    "}
    </div>
    {"\n    \n    \n\n    \n    \n    "}
    {"\n    \n  \n"}
    </div>
  );
}
