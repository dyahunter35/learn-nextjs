"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "calculator", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-2 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-purple-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"CALCULATOR"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.f27a5b6f5339e7d5")}
          <span className={"text-purple-600"}>
            {"(Scientific Calculator)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.75e28399fd36b0a9")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.c97d4db44e31c51a")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.de5c3cb30a646146")}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md border-r-4 border-indigo-400"}>
          {"\n                "}
          <p className={"text-indigo-800 font-semibold"}>
            {t("legacy.9a2d72c1a6cbd47a")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.14143b4ad0d1c7a8")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.f99dc4def4ff110e")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-blue-600"}>
                {"+"}
              </span>
              {t("legacy.ba75f2847dd3fe5a")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.348472a732b46cd5")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-red-600"}>
                {"-"}
              </span>
              {t("legacy.68095c0c87e73d1a")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.8829f84b89e65992")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-amber-600"}>
                {"×"}
              </span>
              {t("legacy.fd7784534096d894")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.147f8c3dbce88241")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-purple-600"}>
                {"÷"}
              </span>
              {t("legacy.7ec9615f7d457cd3")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.2a8df348c52bd35e")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.9a58ad5303def06c")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.b5e4b312a3a3424b")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {t("legacy.02067168583c68d6")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.29f67b663858a570")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-teal-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-teal-800 mb-2"}>
              {t("legacy.993e35b28f88578a")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.bb8d3f3d3fb886e2")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2"}>
              {t("legacy.f49961f2105138f7")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.a6ac339e56867fa7")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.0e8a85a9d6f04652")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.edaee713ad274f8a")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-lime-50 p-5 rounded-lg shadow-md border-lime-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-lime-800 mb-2"}>
              {t("legacy.0cef83d22aaeb7cf")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.92cedcacf0325d4d")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {t("legacy.87e3ab3c73334ffa")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.2d75268e4f8bfe2d")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.beac31f8bd36c74e")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.2bc33ac6a70c70ee")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-orange-50 p-5 rounded-lg shadow-md border-orange-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-orange-800 mb-2"}>
              {t("legacy.d6a65c4b83508044")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.e98447ee6d89662d")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-yellow-50 p-5 rounded-lg shadow-md border-yellow-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-yellow-800 mb-2"}>
              {t("legacy.a8f5914870144b94")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.0b46c1762747a850")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-violet-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.871fa015ee509881")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.c56b9762155b2845")}
        </p>
        {"\n            "}
        <div className={"bg-violet-50 p-5 rounded-lg shadow-md border-violet-400"}>
          {"\n                "}
          <ul className={"space-y-2 mr-4"}>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {t("legacy.6224c3b053c22635")}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {t("legacy.13d6dad0a7eefbaa")}
                </span>
                {t("legacy.5ecc21ed153b91d3")}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {t("legacy.94d535e89b87761d")}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {t("legacy.b1a86c95f392c38d")}
                </span>
                {t("legacy.3f3f10f340b0d70e")}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {t("legacy.5c729ec0b0798ec6")}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {t("legacy.1669a852b1e3b410")}
                </span>
                {t("legacy.18f4d40ba5735a99")}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {t("legacy.d5a574a7250b2092")}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {t("legacy.ab40d7ef8713175f")}
                </span>
                {t("legacy.33c25c327fc5a9ba")}
              </span>
              {"\n                    "}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"mt-4 bg-gray-100 p-4 rounded-lg shadow-inner"}>
          {"\n                "}
          <p className={"text-gray-700 font-mono text-center text-lg"}>
            {t("legacy.a6ef3ffdf3403bb0")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-sky-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 9l4-4 4 4m0 6l-4 4-4-4"}></path>
            {"\n                "}
          </svg>
          {t("legacy.e25551a9776df236")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.2f2ed6ea7a174a80")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-sky-50 p-5 rounded-lg shadow-md border-sky-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-sky-800 mb-2"}>
              {t("legacy.23b6bd5dc46ae293")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.f9906fb613b6b427")}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {t("legacy.ad3466e04063276a")}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {t("legacy.aeb657ca34a9c6eb")}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 pt-8 border-t"}>
        {"\n            "}
        <a href={"/algorithms/calculator/code"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-xl"}>
          {t("legacy.52503378a34cbc4e")}
        </a>
        {"\n            "}
        <p className={"text-gray-500 mt-3 text-sm"}>
          {t("legacy.1e2782f882dc1e55")}
        </p>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n\n  \n"}
    </div>
  );
}
