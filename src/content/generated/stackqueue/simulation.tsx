"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "stackqueue", language);
  return (
    <div className="native-legacy-body ">
    {"\n    "}
    {"\n    \n    \n    \n\n    \n\n    "}
    {"\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"STACK & QUEUE"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {t("legacy.a2bbd40c7096c682")}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {t("legacy.3da1be93fdd6077a")}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex flex-wrap gap-3 justify-center"}>
              {"\n              "}
              <button className={"tab-btn"} data-mode={"stack"} data-legacy-click={"setMode('stack')"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-1.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.08e5fa6f4fae816f")}
              </button>
              {"\n              "}
              <button className={"tab-btn"} data-mode={"queue"} data-legacy-click={"setMode('queue')"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-1.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}></path>
                  {"\n                "}
                </svg>
                {t("legacy.c39d743f5208ab83")}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center justify-between mb-4"}>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {t("legacy.539aa7a0eca5e517")}
              </h2>
              {"\n              "}
              <div className={"flex items-center gap-2 text-sm text-gray-500"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
                  {"\n                "}
                </svg>
                {"\n                "}
                <span>
                  {t("legacy.2826516d67362b25")}
                  <strong id={"size-info"}>
                    {"0 / 7"}
                  </strong>
                </span>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div id={"visual-container"} className={"structure-container"}>
              {"\n              "}
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div id={"empty-state"} className={"empty-state py-10"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-12 w-12 mx-auto mb-3 text-gray-300"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} d={"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <p className={"text-lg font-medium text-gray-500"}>
                {t("legacy.3f3abdf6054a913d")}
              </p>
              {"\n              "}
              <p className={"text-sm text-gray-400 mt-1"}>
                {t("legacy.c75d2211a9c0336d")}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800 mb-4"}>
              {t("legacy.336496c4f6853de9")}
            </h2>
            {"\n\n            "}
            <div className={"flex flex-col sm:flex-row gap-4 mb-4"}>
              {"\n              "}
              <div className={"flex-1"}>
                {"\n                "}
                <label htmlFor={"value-input"} className={"block text-sm font-medium text-gray-600 mb-1.5"}>
                  {t("legacy.1add2f0bf17816cd")}
                </label>
                {"\n                "}
                <input type={"text"} id={"value-input"} className={"value-input"} placeholder={"أدخل قيمة..."} autoFocus={true} />
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"flex-1 flex flex-wrap items-end gap-2"}>
                {"\n                "}
                <button className={"action-btn btn-push"} id={"action-primary"} data-legacy-click={"push()"}>
                  {"\n                  "}
                  <span id={"action-primary-icon"}>
                    {"\n                    "}
                    <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                      {"\n                      "}
                      <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
                      {"\n                    "}
                    </svg>
                    {"\n                  "}
                  </span>
                  {"\n                  "}
                  <span id={"action-primary-text"}>
                    {t("legacy.915f6a701946fc32")}
                  </span>
                  {"\n                "}
                </button>
                {"\n                "}
                <button className={"action-btn btn-pop"} id={"action-secondary"} data-legacy-click={"pop()"}>
                  {"\n                  "}
                  <span id={"action-secondary-text"}>
                    {t("legacy.45d5a24411c7a6ea")}
                  </span>
                  {"\n                "}
                </button>
                {"\n                "}
                <button className={"action-btn btn-clear"} data-legacy-click={"clearAll()"}>
                  {"\n                  "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                    {"\n                    "}
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}></path>
                    {"\n                  "}
                  </svg>
                  {t("legacy.308cf07fa826d118")}
                </button>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"text-xs text-gray-400"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5 inline ml-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                {"\n              "}
              </svg>
              {t("legacy.4ca0f71b0a4ac4ea")}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
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
                {t("legacy.0e2d952206846d38")}
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
