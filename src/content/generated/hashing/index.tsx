"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "hashing", language);
  return (
    <div className="native-legacy-body bg-gray-50 font-sans">
    {"\n\n  "}
    {"\n  \n    \n    \n\n  "}
    {"\n  \n\n  "}
    {"\n  "}
    <main className={"max-w-4xl mx-auto px-4 py-8"}>
      {"\n\n    "}
      <h1 className={"text-3xl font-bold text-indigo-900 mb-6"}>
        {t("legacy.1a8eb085d6e7cdbd")}
      </h1>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {t("legacy.9d0e671ad254b897")}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {t("legacy.894084b34093de25")}
        </p>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {t("legacy.9d86d2f520b32610")}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {t("legacy.d5c14aa9ad9f8a4e")}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-4"}>
          {t("legacy.32ba3f54a86c84b6")}
        </p>
        {"\n\n      "}
        <div className={"space-y-4 mb-4"}>
          {"\n        "}
          <div className={"p-4 bg-gray-50 rounded-xl border border-gray-200"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-900 mb-1"}>
              {t("legacy.c093436cf4e918b2")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm mb-2"}>
              {t("legacy.5368caa36f65edf7")}
            </p>
            {"\n          "}
            <div className={"text-lg bg-white p-3 rounded-lg border border-gray-200 text-center font-bold text-indigo-700 overflow-x-auto"} dir={"ltr"}>
              {"\n            $$ h(k) = k \\bmod m $$\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"p-4 bg-gray-50 rounded-xl border border-gray-200"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-900 mb-1"}>
              {t("legacy.71f5692c3966f3b3")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm mb-2"}>
              {t("legacy.e0869f8b3340357a")}
              {"<"}
              {" A "}
              {"<"}
              {t("legacy.48150028afd3b189")}
            </p>
            {"\n          "}
            <div className={"text-lg bg-white p-3 rounded-lg border border-gray-200 text-center font-bold text-indigo-700 overflow-x-auto"} dir={"ltr"}>
              {"\n            $$ h(k) = \\lfloor m \\cdot (k \\cdot A \\bmod 1) \\rfloor $$\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"p-4 bg-gray-50 rounded-xl border border-gray-200"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-900 mb-1"}>
              {t("legacy.1c8d906c2c7c31ab")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm mb-2"}>
              {t("legacy.bbe92824637e437c")}
            </p>
            {"\n          "}
            <div className={"text-lg bg-white p-3 rounded-lg border border-gray-200 text-center font-bold text-indigo-700 overflow-x-auto"} dir={"ltr"}>
              {"\n            $$ \\alpha = \\frac{n}{m} $$\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n\n      "}
        <p className={"text-gray-700 leading-8"}>
          {t("legacy.1659cc69e445c503")}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {t("legacy.07157886f1e9f166")}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-4"}>
          {t("legacy.ed87471fab71be4f")}
        </p>
        {"\n      "}
        <div className={"grid md:grid-cols-2 gap-4 mb-3"}>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {t("legacy.664c587777c10304")}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7 mb-2"}>
              {t("legacy.a3bf689364d20341")}
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {t("legacy.57617985a29f2f24")}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7 mb-2"}>
              {t("legacy.f7912f9bfd9a48ff")}
            </p>
            {"\n          "}
            <ul className={"text-xs space-y-1.5 text-gray-700"}>
              {"\n            "}
              <li>
                <strong>
                  {t("legacy.72adc4233a3af122")}
                </strong>
                {" $$ h(k, i) = (h'(k) + i) \\bmod m $$"}
              </li>
              {"\n            "}
              <li>
                <strong>
                  {t("legacy.5bf85ca4f2065487")}
                </strong>
                {" $$ h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m $$"}
              </li>
              {"\n            "}
              <li>
                <strong>
                  {t("legacy.46c30200e8e7e0db")}
                </strong>
                {" $$ h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m $$"}
              </li>
              {"\n          "}
            </ul>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {t("legacy.fce1894bf54c20af")}
        </h2>
        {"\n      "}
        <ul className={"list-disc list-inside text-gray-700 leading-8 mr-4 space-y-2"}>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.43721ec6f3949049")}
            </strong>
            {t("legacy.0dcdff68f813ada9")}
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.6813f3ff1c273ead")}
            </strong>
            {t("legacy.0f25ad5daa8c44d4")}
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.59de13cb2cd21486")}
            </strong>
            {t("legacy.f1a8390fd7eabc9a")}
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.6b55f5fe4335d55a")}
            </strong>
            {t("legacy.7a1ee4698993392d")}
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.a4591661247ff1ca")}
            </strong>
            {t("legacy.b7bc9f0aecddd25f")}
          </li>
          {"\n      "}
        </ul>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <div className={"text-center py-8"}>
        {"\n      "}
        <a href={"/algorithms/hashing/simulation/"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
          {"\n        "}
          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
          </svg>
          {t("legacy.7d91d62bef824acb")}
        </a>
        {"\n      "}
        <a href={"/algorithms/hashing/code/"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
          {"\n        "}
          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
          </svg>
          {t("legacy.fa7bf4299597d9fa")}
        </a>
        {"\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  "}
    {"\n  \n\n  \n"}
    </div>
  );
}
