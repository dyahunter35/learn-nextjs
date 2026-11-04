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
        <p className={"text-gray-700 leading-8 mb-3"}>
          {t("legacy.84fa2c07d19cff6a")}
        </p>
        {"\n      "}
        <ul className={"list-disc list-inside text-gray-700 leading-8 mr-4 mb-3 space-y-1"}>
          {"\n        "}
          <li>
            <strong>
              {"Modulo (mod):"}
            </strong>
            {" "}
            <code className={"bg-gray-100 px-2 py-0.5 rounded text-indigo-700"}>
              {"hash(key) = key % table_size"}
            </code>
            {t("legacy.3fee3aceb56d6ecc")}
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.a7b9765545668ca7")}
            </strong>
            {" "}
            <code className={"bg-gray-100 px-2 py-0.5 rounded text-indigo-700"}>
              {"hash(key) = floor(table_size * (key * A % 1))"}
            </code>
          </li>
          {"\n        "}
          <li>
            <strong>
              {t("legacy.d29c12296c8fc618")}
            </strong>
            {t("legacy.ef4d57fc5726caef")}
          </li>
          {"\n      "}
        </ul>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {t("legacy.2c4c5591a30226dc")}
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
        <p className={"text-gray-700 leading-8 mb-3"}>
          {t("legacy.6eb078a1f376fdc3")}
        </p>
        {"\n      "}
        <div className={"grid md:grid-cols-2 gap-4 mb-3"}>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {t("legacy.1aa64667ddc107d8")}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7"}>
              {t("legacy.4bfd93818ccecb00")}
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {t("legacy.b0d99929165cd452")}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7"}>
              {t("legacy.7f89d0640480a01e")}
            </p>
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
        <a href={"/algorithms/hashing/simulation"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
          {"\n        "}
          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
          </svg>
          {t("legacy.7d91d62bef824acb")}
        </a>
        {"\n      "}
        <a href={"/algorithms/hashing/code"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
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
