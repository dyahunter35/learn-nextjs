"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "recursion", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"RECURSION SIMULATION"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {t("legacy.d74408c664b9a1f3")}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {t("legacy.ad2a9600717032b6")}
        </p>
        {"\n      "}
      </div>
      {"\n\n      "}
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.4ba81b973cc839b0")}
            </h2>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"exampleSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.ecb99c91c01f10c5")}
              </label>
              {"\n              "}
              <select id={"exampleSelect"} className={"gradient-select"} data-legacy-change={"updateExample(this.value)"}>
                {"\n                "}
                <option value={"factorial"}>
                  {t("legacy.82c0bfb5ddc787e9")}
                </option>
                {"\n                "}
                <option value={"fibonacci"}>
                  {t("legacy.5fb7c61b4ef801c0")}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"nInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.0051bb167cbdac85")}
              </label>
              {"\n              "}
              <input type={"number"} id={"nInput"} className={"num-input"} defaultValue={"5"} min={"0"} max={"10"} step={"1"} />
              {"\n              "}
              <p className={"text-xs text-gray-400 mt-1.5"}>
                {"factorial: 0-10, fibonacci: 0-15"}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
            {"\n            "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"gradient-btn btn-start flex-1"}>
              {t("legacy.576f6d941cc9c53c")}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"gradient-btn btn-next flex-1"} disabled={true}>
              {t("legacy.0103ac838415af8b")}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"gradient-btn btn-prev flex-1"} disabled={true}>
              {t("legacy.c0fa11616338a947")}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSimulation()"} className={"gradient-btn btn-reset"}>
              {t("legacy.d1c2eaaa776c5219")}
            </button>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center justify-between mb-4"}>
            {"\n            "}
            <div className={"flex items-center gap-2"}>
              {"\n              "}
              <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.b9049ead01c98550")}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"node-count-badge"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6h16M4 12h16m-7 6h7"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <span id={"nodeCountBadge"}>
                {t("legacy.638cc7f80d2ba328")}
              </span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"treeContainer"} className={"rec-tree-container"}>
            {"\n            "}
            <div className={"empty-state"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <p className={"text-lg font-medium text-gray-500"}>
                {t("legacy.52ed02f4996c233e")}
              </p>
              {"\n              "}
              <p className={"text-sm text-gray-400 mt-1"}>
                {t("legacy.c4bffdc73d499040")}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#6366f1] inline-block"}></span>
              {t("legacy.bd9f423cf30cf0e8")}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#fbbf24] inline-block"}></span>
              {t("legacy.9baef82e1566f6fa")}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#34d399] inline-block"}></span>
              {t("legacy.145201c2fc98e19c")}
            </span>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.78aade59dff79144")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"callStackContainer"} className={"callstack-container"}>
            {"\n            "}
            <div className={"empty-state"} style={{"padding":"0.5rem"}}>
              {"\n              "}
              <p className={"text-sm text-gray-400"}>
                {t("legacy.2f1f8ec13d796d8f")}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.a07b7854cf797c7f")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"statusMessage"} className={"status-message info mb-4"}>
            {t("legacy.ce84e65a4bffcb0a")}
          </div>
          {"\n          "}
          <div id={"stepsLog"} className={"steps-log-container"}></div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.b57298672357447b")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"resultDisplay"}></div>
          {"\n        "}
        </div>
        {"\n\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n    \n"}
    </div>
  );
}
