"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "backtracking", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n  \n    \n    \n\n  \n\n  "}
    <main className={"container mx-auto px-4 py-8 max-w-4xl"}>
      {"\n\n    "}
      <div className={"text-center mb-10"}>
        {"\n      "}
        <h1 className={"text-4xl font-bold text-indigo-900 mb-3"}>
          {t("legacy.bf8cf079ed7c6fd9")}
          <span className={"text-indigo-500"}>
            {"(Backtracking)"}
          </span>
        </h1>
        {"\n      "}
        <p className={"text-gray-600 text-lg max-w-2xl mx-auto"}>
          {t("legacy.04e5e6783bc6e351")}
        </p>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"💡"}
          </span>
          {t("legacy.9d0e671ad254b897")}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {"\n        "}
          <strong>
            {t("legacy.fc481fd95efba255")}
          </strong>
          {t("legacy.f79a832a8a66a222")}
          <strong>
            {t("legacy.5be62a4430f7bde1")}
          </strong>
          {t("legacy.1daa386f9775a506")}
        </p>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {t("legacy.27992ab3713f83eb")}
        </p>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"⚙️"}
          </span>
          {t("legacy.3063ba1543bfe084")}
        </h2>
        {"\n      "}
        <div className={"grid md:grid-cols-2 gap-6"}>
          {"\n        "}
          <div>
            {"\n          "}
            <ol className={"space-y-3 text-gray-700 leading-8"}>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {t("legacy.628f6d71f724c951")}
                </span>
                <span>
                  <strong>
                    {t("legacy.2d2f6c45cc795431")}
                  </strong>
                  {t("legacy.2bd9b76bd4455414")}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {t("legacy.537dcdbcaa60087c")}
                </span>
                <span>
                  <strong>
                    {t("legacy.5ad9ba21c3db1c8d")}
                  </strong>
                  {t("legacy.a4dafce91b1aa1c5")}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {t("legacy.1a4fd527b171239a")}
                </span>
                <span>
                  <strong>
                    {t("legacy.d6384709d2fd962e")}
                  </strong>
                  {t("legacy.f86e7177b99ffd19")}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {t("legacy.17cd7f45b26f7804")}
                </span>
                <span>
                  <strong>
                    {t("legacy.03fafb22f4ce70cb")}
                  </strong>
                  {t("legacy.76b85f0a088c47cb")}
                </span>
              </li>
              {"\n          "}
            </ol>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-xl p-5 flex items-center justify-center"}>
            {"\n          "}
            <div className={"text-center"}>
              {"\n            "}
              <div className={"text-5xl mb-3"}>
                {"🔄"}
              </div>
              {"\n            "}
              <p className={"text-gray-700 font-medium"}>
                {t("legacy.ceaa0f715cfa94d7")}
              </p>
              {"\n            "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {t("legacy.b487b35efe252b9c")}
              </p>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"📋"}
          </span>
          {t("legacy.d38012a66e124951")}
        </h2>
        {"\n      "}
        <div className={"grid md:grid-cols-3 gap-5"}>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"👑"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {t("legacy.59f3b1a9b53b975a")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {t("legacy.5f003ecf022404f0")}
            </p>
            {"\n          "}
            <a href={"/algorithms/backtracking/simulation/"} className={"inline-block mt-3 text-indigo-600 font-medium text-sm hover:text-indigo-800"}>
              {t("legacy.53baa6083f650bd0")}
            </a>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"🧩"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {t("legacy.97fdc9e550671404")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {t("legacy.e1825e73b6807109")}
            </p>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"🔢"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {t("legacy.3fe860aa16aae700")}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {t("legacy.08eb81e3b564e09e")}
            </p>
            {"\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"⚡"}
          </span>
          {t("legacy.496e944bdbbfd842")}
        </h2>
        {"\n      "}
        <div className={"overflow-x-auto"}>
          {"\n        "}
          <table className={"w-full text-right border-collapse"}>
            <thead>
              <tr className={"bg-indigo-100"}>
                <th className={"p-3 border border-indigo-200 font-bold"}>
                  {t("legacy.941e8670e5d497a9")}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-green-700"}>
                  {t("legacy.fc481fd95efba255")}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-red-700"}>
                  {t("legacy.992d7b97acb59a46")}
                </th>
              </tr>
            </thead>
            <tbody className={"text-gray-700"}>
              <tr>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {t("legacy.ca486a266c0df0d9")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.2cdc923a8cb87a4f")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.e38e0d7273da7b20")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {t("legacy.1256b3c2e7fc2a14")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.2cbbfb9bc1b4ac54")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.637ee45e2ebff516")}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {t("legacy.0760bf594af64362")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.0ae741e7f8d11d58")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.f78715361877b510")}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {t("legacy.7561928086bd8ec2")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.4652180085453753")}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {t("legacy.24d385df4a1b7cb3")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"🌐"}
          </span>
          {t("legacy.6d30bb0c3d9bd942")}
        </h2>
        {"\n      "}
        <div className={"grid sm:grid-cols-2 gap-4 text-gray-700 leading-8"}>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"👑"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.a4c6d946b6d23b13")}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🧩"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.3adc778a7e6346b3")}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"📡"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.fdb82ad13bd1c825")}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🧳"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.c99cb08ae837e009")}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🔗"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.fd3d0a4f648f7d7c")}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"📊"}
            </span>
            {"\n          "}
            <span>
              {t("legacy.fcf28dee3ac24a7e")}
            </span>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"text-center my-10"}>
        {"\n      "}
        <a href={"/algorithms/backtracking/simulation/"} className={"inline-block gradient-head text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"}>
          {t("legacy.16ae75586b8a02f6")}
        </a>
        {"\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  \n\n  \n"}
    </div>
  );
}
