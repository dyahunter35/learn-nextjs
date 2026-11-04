"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "linkedlist", language);
  return (
    <div className="native-legacy-body ">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"LINKED LIST"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.bf079e809a9d32fb")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.c0db120d68b339e6")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex flex-wrap gap-3 justify-center"}>
              {"\n              "}
              <button className={"tab-btn"} data-mode={"head"} data-legacy-click={"setMode('head')"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-1.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.a6ae3cf697d74bc8")}
              </button>
              {"\n              "}
              <button className={"tab-btn"} data-mode={"tail"} data-legacy-click={"setMode('tail')"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-1.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.af7c7dd85e542cf9")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center justify-between mb-4"}>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.539aa7a0eca5e517")}
              </h2>
              {"\n              "}
              <div className={"size-badge"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
                  {"\n                "}
                </svg>
                {"\n                "}
                <span>
                  {t("legacy.7de32683131babf6")}
                  <strong id={"size-info"}>
                    {"0"}
                  </strong>
                </span>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div id={"visual-container"} className={"structure-container"}>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div id={"empty-state"} className={"empty-state py-10"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-12 w-12 mx-auto mb-3 text-gray-300"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} d={"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <p className={"text-lg font-medium text-gray-500"}>
                {t("legacy.33505c9b222d2fae")}
              </p>
              {"\n              "}
              <p className={"text-sm text-gray-400 mt-1"}>
                {t("legacy.0a34774592f42e2e")}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800 mb-4"}>
              {t("legacy.336496c4f6853de9")}
            </h2>
            {"\n\n            "}
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4"}>
              {"\n              "}
              <div>
                {"\n                "}
                <label htmlFor={"value-input"} className={"block text-sm font-medium text-gray-600 mb-1.5"}>
                  {t("legacy.f84e74d3c4741f03")}
                </label>
                {"\n                "}
                <div className={"flex flex-wrap gap-2"}>
                  {"\n                  "}
                  <input type={"text"} id={"value-input"} className={"value-input flex-1"} placeholder={"قيمة العقدة..."} autoFocus={true} />
                  {"\n                  "}
                  <button className={"action-btn btn-insert-head"} id={"insert-btn"} data-legacy-click={"insertNode()"}>
                    {"\n                    "}
                    <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                      {"\n                      "}
                      <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
                      {"\n                    "}
                    </svg>
                    {"\n                    "}
                    <span id={"insert-btn-text"}>
                      {t("legacy.d0a2a4e7b18436df")}
                    </span>
                    {"\n                  "}
                  </button>
                  {"\n                "}
                </div>
                {"\n              "}
              </div>
              {"\n\n              "}
              <div>
                {"\n                "}
                <label htmlFor={"search-input"} className={"block text-sm font-medium text-gray-600 mb-1.5"}>
                  {t("legacy.32f6a94f9c9fe59d")}
                </label>
                {"\n                "}
                <div className={"flex flex-wrap gap-2"}>
                  {"\n                  "}
                  <input type={"text"} id={"search-input"} className={"value-input flex-1"} placeholder={"قيمة البحث..."} />
                  {"\n                  "}
                  <button className={"action-btn btn-search"} data-legacy-click={"searchNode()"}>
                    {"\n                    "}
                    <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                      {"\n                      "}
                      <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
                      {"\n                    "}
                    </svg>
                    {t("legacy.d0f6edcf6d6579c3")}
                  </button>
                  {"\n                  "}
                  <button className={"action-btn btn-remove-head"} data-legacy-click={"removeByValue()"}>
                    {"\n                    "}
                    <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                      {"\n                      "}
                      <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}></path>
                      {"\n                    "}
                    </svg>
                    {t("legacy.59ca629220a63ede")}
                  </button>
                  {"\n                "}
                </div>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"flex flex-wrap gap-2 mt-4"}>
              {"\n              "}
              <button className={"action-btn btn-remove-head"} id={"remove-btn"} data-legacy-click={"removeNode()"}>
                {"\n                "}
                <span id={"remove-btn-text"}>
                  {t("legacy.89d4e380d63434f7")}
                </span>
                {"\n              "}
              </button>
              {"\n              "}
              <button className={"action-btn btn-clear"} data-legacy-click={"clearAll()"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.a3f84e3f696297d9")}
              </button>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"text-xs text-gray-400 mt-4"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5 inline ml-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                {"\n              "}
              </svg>
              {t("legacy.b0afbb582d47216d")}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8"}>
            {"\n            "}
            <div className={"flex items-center justify-between mb-3"}>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.3b94a4bfaecd9970")}
              </h2>
              {"\n              "}
              <button data-legacy-click={"document.getElementById('log-list').innerHTML = ''"} className={"text-xs text-gray-400 hover:text-gray-600 transition"}>
                {t("legacy.0cff3068a85b832a")}
              </button>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"log-list"} className={"log-container"}>
              {"\n              "}
              <div className={"log-entry info"}>
                {t("legacy.845b1de0b228db22")}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n"}
    </div>
  );
}
