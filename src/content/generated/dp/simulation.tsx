"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "dp", language);
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-7xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DYNAMIC PROGRAMMING SIMULATION"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {t("legacy.dece5d6dcc691de5")}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {t("legacy.aaacd88827888f28")}
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
                {t("legacy.b9b5f0176426da7e")}
              </label>
              {"\n              "}
              <select id={"exampleSelect"} className={"gradient-select"} data-legacy-change={"updateExample(this.value)"}>
                {"\n                "}
                <option value={"fibonacci"}>
                  {t("legacy.5fb7c61b4ef801c0")}
                </option>
                {"\n                "}
                <option value={"coinchange"}>
                  {t("legacy.686deb15cb77a601")}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"fibonacciConfig"}>
              {"\n              "}
              <label htmlFor={"nInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {t("legacy.5439d4792475880b")}
              </label>
              {"\n              "}
              <input type={"number"} id={"nInput"} className={"num-input"} defaultValue={"6"} min={"0"} max={"20"} step={"1"} />
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"coinChangeConfig"} style={{"display":"none"}}>
              {"\n              "}
              <div className={"mb-3"}>
                {"\n                "}
                <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {t("legacy.6e1530d184810f77")}
                </label>
                {"\n                "}
                <input type={"number"} id={"amountInput"} className={"num-input coin-input"} defaultValue={"6"} min={"1"} max={"50"} step={"1"} />
                {"\n              "}
              </div>
              {"\n              "}
              <div>
                {"\n                "}
                <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {t("legacy.a162e32beea7020e")}
                </label>
                {"\n                "}
                <div className={"coin-input-group mb-2"}>
                  {"\n                  "}
                  <input type={"number"} id={"newCoinInput"} className={"num-input coin-input"} placeholder={"أدخل قيمة"} min={"1"} max={"100"} />
                  {"\n                  "}
                  <button data-legacy-click={"addCoin()"} className={"bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2.5 rounded-lg text-sm transition"}>
                    {t("legacy.b121e33084cc337d")}
                  </button>
                  {"\n                "}
                </div>
                {"\n                "}
                <div id={"coinsList"} className={"flex flex-wrap gap-2"}>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"1"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"3"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"4"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                "}
                </div>
                {"\n                "}
                <p className={"text-xs text-gray-400 mt-1.5"}>
                  {t("legacy.8e51d11c4d3fb806")}
                </p>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4"}>
            {"\n            "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"gradient-btn btn-start w-full justify-center"}>
              {t("legacy.576f6d941cc9c53c")}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"gradient-btn btn-next w-full justify-center"} disabled={true}>
              {t("legacy.0103ac838415af8b")}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"gradient-btn btn-prev w-full justify-center"} disabled={true}>
              {t("legacy.c0fa11616338a947")}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSimulation()"} className={"gradient-btn btn-reset w-full justify-center"}>
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
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.7787359ee4463345")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"dpVisualization"} className={"dp-table-wrapper"}>
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
          <div id={"legendContainer"} className={"legend-container"} style={{"display":"none"}}>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-empty"}></span>
              {t("legacy.f1aa9c3e2ebf1d8a")}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-computing"}></span>
              {t("legacy.28ff3131006f3ce2")}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-done"}></span>
              {t("legacy.6cf6694c7cafd188")}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-final"}></span>
              {t("legacy.915a4e731709d69f")}
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
            <div className={"w-3 h-3 bg-red-400 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {t("legacy.b0191e80a339e0cb")}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"naiveComparison"} className={"rec-tree-container"}>
            {"\n            "}
            <div className={"empty-state"} style={{"padding":"0.5rem"}}>
              {"\n              "}
              <p className={"text-sm text-gray-400"}>
                {t("legacy.76a8be8e401ba25e")}
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
