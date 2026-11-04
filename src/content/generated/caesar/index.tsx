"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "caesar", language);
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-green-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"CAESAR CIPHER"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {t("legacy.64fe805edfdaf7c7")}
          <span className={"text-green-600"}>
            {"(Caesar Cipher)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {t("legacy.ac7566d05267c43a")}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.f7e70215d75f50a5")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.9067c0ef6ceed642")}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.a9bbe5a9a6c4c34e")}
        </p>
        {"\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md border-r-4 border-yellow-400"}>
          {"\n                "}
          <p className={"text-yellow-800 font-semibold"}>
            {"\n                    "}
            <span className={"text-lg"}>
              {"🏛️"}
            </span>
            {t("legacy.b8db69ff22634b50")}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.b35d2db3fee43dd9")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.9c8d042476f41c5b")}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {t("legacy.1e3d04973b7e8855")}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"alphabet-table w-full text-center"}>
              <thead>
                <tr>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.9871307f09d9e9d0")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.fdfdf3a018085c1f")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.9871307f09d9e9d0")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.fdfdf3a018085c1f")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.9871307f09d9e9d0")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.fdfdf3a018085c1f")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.9871307f09d9e9d0")}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {t("legacy.fdfdf3a018085c1f")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {"1"}
                  </td>
                  <td>
                    {t("legacy.be0fa08bb8f12a37")}
                  </td>
                  <td>
                    {"8"}
                  </td>
                  <td>
                    {t("legacy.b15aa8e25eddf663")}
                  </td>
                  <td>
                    {"15"}
                  </td>
                  <td>
                    {t("legacy.892f5fc72c8aceba")}
                  </td>
                  <td>
                    {"22"}
                  </td>
                  <td>
                    {t("legacy.854a312a1a019aaa")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"2"}
                  </td>
                  <td>
                    {t("legacy.cb22e4a914210546")}
                  </td>
                  <td>
                    {"9"}
                  </td>
                  <td>
                    {t("legacy.29b50a05e8dc1b4a")}
                  </td>
                  <td>
                    {"16"}
                  </td>
                  <td>
                    {t("legacy.a55da129540086ad")}
                  </td>
                  <td>
                    {"23"}
                  </td>
                  <td>
                    {t("legacy.6ddaa72eed069591")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"3"}
                  </td>
                  <td>
                    {t("legacy.6a9b00bf691bdfd2")}
                  </td>
                  <td>
                    {"10"}
                  </td>
                  <td>
                    {t("legacy.36a9d753b0bdc5e7")}
                  </td>
                  <td>
                    {"17"}
                  </td>
                  <td>
                    {t("legacy.ac850b0dfe00607a")}
                  </td>
                  <td>
                    {"24"}
                  </td>
                  <td>
                    {t("legacy.988ada1c5b979ec6")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"4"}
                  </td>
                  <td>
                    {t("legacy.e57c96ba8aea7ea0")}
                  </td>
                  <td>
                    {"11"}
                  </td>
                  <td>
                    {t("legacy.a83185c0fe218172")}
                  </td>
                  <td>
                    {"18"}
                  </td>
                  <td>
                    {t("legacy.a0f49047a7ffbc61")}
                  </td>
                  <td>
                    {"25"}
                  </td>
                  <td>
                    {t("legacy.cb92a8b00c6956fd")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"5"}
                  </td>
                  <td>
                    {t("legacy.51c9a584ad13b9d2")}
                  </td>
                  <td>
                    {"12"}
                  </td>
                  <td>
                    {t("legacy.861183a44bf3c1f1")}
                  </td>
                  <td>
                    {"19"}
                  </td>
                  <td>
                    {t("legacy.d6f7c01d455fe141")}
                  </td>
                  <td>
                    {"26"}
                  </td>
                  <td>
                    {t("legacy.517d335897807109")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"6"}
                  </td>
                  <td>
                    {t("legacy.56750292f58ce336")}
                  </td>
                  <td>
                    {"13"}
                  </td>
                  <td>
                    {t("legacy.119c5451ad7c3fae")}
                  </td>
                  <td>
                    {"20"}
                  </td>
                  <td>
                    {t("legacy.6e6a73ade56e964f")}
                  </td>
                  <td>
                    {"27"}
                  </td>
                  <td>
                    {t("legacy.6245b4d08f3f2a99")}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"7"}
                  </td>
                  <td>
                    {t("legacy.84d816dcc5339ad7")}
                  </td>
                  <td>
                    {"14"}
                  </td>
                  <td>
                    {t("legacy.1f6940369a9cd852")}
                  </td>
                  <td>
                    {"21"}
                  </td>
                  <td>
                    {t("legacy.c67f042db9cc1f17")}
                  </td>
                  <td>
                    {"28"}
                  </td>
                  <td>
                    {t("legacy.68a74b81692467b8")}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-700 leading-loose"}>
          {t("legacy.5fc5f6039539cba6")}
        </p>
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
          {t("legacy.559f15234be0c4b1")}
        </h2>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
          {"\n                "}
          <p className={"text-gray-700 mb-3 text-lg"}>
            {t("legacy.156c7836fbee330f")}
          </p>
          {"\n                "}
          <div className={"formula text-2xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto text-center font-bold text-green-700"} dir={"ltr"}>
            {"\n                    $$ \\text{Encrypt}(x) = (x + \\text{Key} - 1) \\bmod 28 + 1 $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-green-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"x"}
            </span>
            {t("legacy.788f9ad0f3784b43")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"Key"}
            </span>
            {t("legacy.9ee1eb1950389f81")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"mod 28"}
            </span>
            {t("legacy.a707fc9bd7e67032")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.f2de41f8c444c34f")}
        </h2>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
          {"\n                "}
          <p className={"text-gray-700 mb-3 text-lg"}>
            {t("legacy.07b4178a7b809093")}
          </p>
          {"\n                "}
          <div className={"formula text-2xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto text-center font-bold text-purple-700"} dir={"ltr"}>
            {"\n                    $$ \\text{Decrypt}(x) = (x - \\text{Key} - 1) \\bmod 28 + 1 $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-purple-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"x"}
            </span>
            {t("legacy.3d141f90ae9e9bc4")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"Key"}
            </span>
            {t("legacy.f5df385bb6620b64")}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {t("legacy.0be7afd7e65f5b5e")}
            </span>
            {t("legacy.a5a2aa82c37627fa")}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {t("legacy.24a0c1a8b29299a0")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.728d38d2adcc498f")}
          <span className={"font-bold text-indigo-700 cipher-text"}>
            {t("legacy.80eff1a750bb5400")}
          </span>
          {":\n            "}
        </p>
        {"\n            "}
        <div className={"overflow-x-auto mb-6"}>
          {"\n                "}
          <table className={"steps-table w-full"}>
            <thead>
              <tr>
                <th>
                  {t("legacy.c7cd08b72f807595")}
                </th>
                <th>
                  {t("legacy.248b0811ebad9261")}
                </th>
                <th>
                  {t("legacy.2b0e950468250da8")}
                </th>
                <th>
                  {t("legacy.8323a1f92297c8ee")}
                </th>
                <th>
                  {t("legacy.428252867f830e89")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {t("legacy.988ada1c5b979ec6")}
                </td>
                <td>
                  {"24"}
                </td>
                <td>
                  {"(24 + 3) mod 28 = 27"}
                </td>
                <td>
                  {"27"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {t("legacy.6245b4d08f3f2a99")}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {t("legacy.36a9d753b0bdc5e7")}
                </td>
                <td>
                  {"10"}
                </td>
                <td>
                  {"(10 + 3) mod 28 = 13"}
                </td>
                <td>
                  {"13"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {t("legacy.119c5451ad7c3fae")}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {t("legacy.56750292f58ce336")}
                </td>
                <td>
                  {"6"}
                </td>
                <td>
                  {"(6 + 3) mod 28 = 9"}
                </td>
                <td>
                  {"9"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {t("legacy.29b50a05e8dc1b4a")}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {t("legacy.cb22e4a914210546")}
                </td>
                <td>
                  {"2"}
                </td>
                <td>
                  {"(2 + 3) mod 28 = 5"}
                </td>
                <td>
                  {"5"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {t("legacy.51c9a584ad13b9d2")}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {t("legacy.be0fa08bb8f12a37")}
                </td>
                <td>
                  {"1"}
                </td>
                <td>
                  {"(1 + 3) mod 28 = 4"}
                </td>
                <td>
                  {"4"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {t("legacy.e57c96ba8aea7ea0")}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-r-4 border-teal-400"}>
          {"\n                "}
          <p className={"text-teal-800 text-lg font-semibold"}>
            {"\n                    "}
            <span className={"text-xl"}>
              {"🔐"}
            </span>
            {t("legacy.69e4e631905aeb3f")}
            <span className={"cipher-text text-xl font-bold"}>
              {t("legacy.80eff1a750bb5400")}
            </span>
            {t("legacy.c204f3d4f4571b96")}
            <span className={"cipher-text text-xl font-bold text-teal-700"}>
              {t("legacy.84530ccee35a62e5")}
            </span>
            {t("legacy.9178fe02b94d70c4")}
          </p>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mt-4"}>
          {t("legacy.c89af59b93e3a25a")}
          <span className={"cipher-text font-bold"}>
            {t("legacy.84530ccee35a62e5")}
          </span>
          {t("legacy.70a03bd92d8c82ae")}
          <span className={"cipher-text font-bold"}>
            {t("legacy.80eff1a750bb5400")}
          </span>
          {".\n            "}
        </p>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.c9e1d919d95e0764")}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {t("legacy.4ca645c7d9ac3ce5")}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-blue-800 mb-2"}>
              {t("legacy.a4f8a1d1f1cc83aa")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {t("legacy.381e9fda09a66135")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.c145e93f6c185511")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.2706aab49d391a63")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-amber-800 mb-2"}>
              {t("legacy.f70b95fa29639ee9")}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {t("legacy.d588783e48889ae6")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.ad31e2cb78c48dbf")}
              </li>
              {"\n                        "}
              <li>
                {t("legacy.d48e3f566617fbaa")}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg shadow-md border border-indigo-200"}>
          {"\n                "}
          <p className={"text-indigo-800 font-semibold text-center"}>
            {t("legacy.1b5e4ba8d372b462")}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10"}>
        {"\n            "}
        <a href={"/algorithms/caesar/simulation/"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {t("legacy.751b85011f5ec3cf")}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n  \n"}
    </div>
  );
}
