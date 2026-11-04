export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"MINIMUM SPANNING TREE"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                الشجرة الممتدة الدنيا "}
          <span className={"text-indigo-600"}>
            {"(MST)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                إيجاد أقل تكلفة لربط جميع العقد في الرسم البياني الموزون\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {"\n                المفهوم\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {"الشجرة الممتدة الدنيا (Minimum Spanning Tree)"}
          </strong>
          {" هي شجرة جزئية من رسم بياني موزون غير موجه تربط جميع العقد معاً باستخدام "}
          <strong>
            {"أقل وزن إجمالي ممكن"}
          </strong>
          {" للحواف. تحتوي الشجرة الممتدة لرسم بياني مكون من "}
          <strong>
            {"V"}
          </strong>
          {" عقدة على "}
          <strong>
            {"V-1"}
          </strong>
          {" حافة بالضبط.\n            "}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الهدف من MST هو إيجاد مجموعة من الحواف التي:\n            "}
        </p>
        {"\n            "}
        <ul className={"list-disc list-inside text-gray-700 space-y-1 mb-4 mr-4"}>
          {"\n                "}
          <li>
            {"تربط جميع العقد معاً (تكون الشجرة ممتدة)."}
          </li>
          {"\n                "}
          <li>
            {"لا تحتوي على دورات (تكون شجرة)."}
          </li>
          {"\n                "}
          <li>
            {"يكون مجموع أوزان الحواف أقل ما يمكن (تكون دنيا)."}
          </li>
          {"\n            "}
        </ul>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"خصائص الشجرة الممتدة الدنيا"}
          </h3>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1"}>
            {"\n                    "}
            <li>
              {"إذا كان الرسم البياني متصلاً، فإن MST موجودة دائماً."}
            </li>
            {"\n                    "}
            <li>
              {"قد يكون هناك أكثر من MST إذا تكررت الأوزان."}
            </li>
            {"\n                    "}
            <li>
              {"إزالة أي حافة من MST تفصل الشجرة إلى مكونين."}
            </li>
            {"\n                    "}
            <li>
              {"إضافة أي حافة خارج MST تكون دورة."}
            </li>
            {"\n                "}
          </ul>
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                التطبيقات\n            "}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {"تصميم الشبكات"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"تصميم شبكات الحاسوب بأقل تكلفة كابلات."}
              </li>
              {"\n                        "}
              <li>
                {"شبكات توزيع الكهرباء والمياه."}
              </li>
              {"\n                        "}
              <li>
                {"شبكات الاتصالات والألياف البصرية."}
              </li>
              {"\n                        "}
              <li>
                {"تخطيط طرق النقل والمواصلات."}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {"تحليل البيانات"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"التجميع الهرمي (Hierarchical Clustering)."}
              </li>
              {"\n                        "}
              <li>
                {"تحليل الشبكات الاجتماعية."}
              </li>
              {"\n                        "}
              <li>
                {"تقليل أبعاد البيانات."}
              </li>
              {"\n                        "}
              <li>
                {"التعرف على الأنماط في الصور."}
              </li>
              {"\n                    "}
            </ul>
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                خوارزمية كروسكال\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {"خوارزمية كروسكال (Kruskal's Algorithm)"}
          </strong>
          {" هي خوارزمية جشعة لحل مشكلة MST. طورها "}
          <strong>
            {"جوزيف كروسكال"}
          </strong>
          {" عام 1956. تعمل الخوارزمية على الحواف وترتبها تصاعدياً حسب الوزن، ثم تختار الحواف التي لا تشكل دورة.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-emerald-50 p-5 rounded-lg shadow-md mb-4 border-emerald-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-emerald-800 mb-3"}>
            {"آلية العمل"}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {"رتب جميع الحواف "}
              <strong>
                {"تصاعدياً"}
              </strong>
              {" حسب الوزن."}
            </li>
            {"\n                    "}
            <li>
              {"اختر الحافة ذات "}
              <strong>
                {"الوزن الأصغر"}
              </strong>
              {" من الحواف المتبقية."}
            </li>
            {"\n                    "}
            <li>
              {"إذا كانت إضافة هذه الحافة "}
              <strong>
                {"لا تكون دورة"}
              </strong>
              {"، أضفها إلى MST."}
            </li>
            {"\n                    "}
            <li>
              {"إذا كانت تكون دورة، "}
              <strong>
                {"تخطها"}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              {"كرر الخطوات ٢–٤ حتى يصبح لديك "}
              <strong>
                {"V-1"}
              </strong>
              {" حافة في MST."}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gray-50 p-5 rounded-lg shadow-md border-gray-300"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-gray-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(E log E + E α(V))"}
            </span>
            {" حيث E عدد الحواف و V عدد العقد. تستخدم الخوارزمية بنية "}
            <strong>
              {"Union-Find"}
            </strong>
            {" (الاتحاد والبحث) للكشف عن الدورات بكفاءة.\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                خوارزمية بريم\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong>
            {"خوارزمية بريم (Prim's Algorithm)"}
          </strong>
          {" هي خوارزمية جشعة لحل مشكلة MST. طورها عالم الحاسوب "}
          <strong>
            {"روبرت بريم"}
          </strong>
          {" عام 1957. تعمل الخوارزمية على العقد وتنمو الشجرة تدريجياً من عقدة بداية.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-4 border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"آلية العمل"}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {"اختر "}
              <strong>
                {"عقدة بداية"}
              </strong>
              {" عشوائية وأضفها إلى MST."}
            </li>
            {"\n                    "}
            <li>
              {"حدد جميع الحواف التي تربط عقداً داخل MST بعقد خارجة (الحدود)."}
            </li>
            {"\n                    "}
            <li>
              {"اختر الحافة ذات "}
              <strong>
                {"أقل وزن"}
              </strong>
              {" من هذه الحدود."}
            </li>
            {"\n                    "}
            <li>
              {"أضف هذه الحافة والعقدة الجديدة إلى MST."}
            </li>
            {"\n                    "}
            <li>
              {"كرر الخطوات ٢–٤ حتى تدخل جميع العقد إلى MST."}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gray-50 p-5 rounded-lg shadow-md border-gray-300"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-gray-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    باستخدام طابور أولوية (كومة ثنائية): "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(E log V)"}
            </span>
            <br />
            {"\n                    باستخدام مصفوفة تجاور للرسوم البيانية الكثيفة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V²)"}
            </span>
            {"\n                "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة بين كروسكال وبريم\n            "}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse text-sm mb-4"}>
            <thead>
              <tr className={"bg-indigo-100 text-indigo-900"}>
                <th className={"p-3 border border-indigo-200"}>
                  {"المعيار"}
                </th>
                <th className={"p-3 border border-indigo-200"}>
                  {"كروسكال (Kruskal)"}
                </th>
                <th className={"p-3 border border-indigo-200"}>
                  {"بريم (Prim)"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {"آلية العمل"}
                </td>
                <td className={"p-3 border"}>
                  {"تعمل على "}
                  <strong>
                    {"الحواف"}
                  </strong>
                  {" — ترتب الحواف وتختارها"}
                </td>
                <td className={"p-3 border"}>
                  {"تعمل على "}
                  <strong>
                    {"العقد"}
                  </strong>
                  {" — تنمو الشجرة من عقدة بداية"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {"بنية البيانات"}
                </td>
                <td className={"p-3 border"}>
                  {"Union-Find (الاتحاد والبحث)"}
                </td>
                <td className={"p-3 border"}>
                  {"طابور أولوية (Priority Queue)"}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {"الرسوم البيانية المناسبة"}
                </td>
                <td className={"p-3 border"}>
                  {"أفضل للرسوم البيانية "}
                  <strong>
                    {"قليلة الحواف"}
                  </strong>
                  {" (Sparse)"}
                </td>
                <td className={"p-3 border"}>
                  {"أفضل للرسوم البيانية "}
                  <strong>
                    {"كثيفة الحواف"}
                  </strong>
                  {" (Dense)"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {"بداية التنفيذ"}
                </td>
                <td className={"p-3 border"}>
                  {"يبدأ من أصغر حافة بغض النظر عن العقد"}
                </td>
                <td className={"p-3 border"}>
                  {"يبدأ من عقدة محددة وينمو منها"}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border font-bold text-gray-800"}>
                  {"التعقيد الحسابي"}
                </td>
                <td className={"p-3 border"}>
                  <span className={"font-mono ltr-text"}>
                    {"O(E log E)"}
                  </span>
                </td>
                <td className={"p-3 border"}>
                  <span className={"font-mono ltr-text"}>
                    {"O(E log V)"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                مثال توضيحي\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لنفترض أن لدينا الرسم البياني التالي المكون من ٦ عقد (A إلى F) مع الأوزان المبينة على الحواف. نريد إيجاد الشجرة الممتدة الدنيا.\n            "}
        </p>
        {"\n\n            "}
        <div className={"bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6"}>
          {"\n                "}
          <h4 className={"text-lg font-bold text-gray-800 mb-3 text-center"}>
            {"الرسم البياني الموزون"}
          </h4>
          {"\n                "}
          <div className={"flex justify-center"}>
            {"\n                    "}
            <svg viewBox={"0 0 320 240"} className={"w-full max-w-xs"} xmlns={"http://www.w3.org/2000/svg"}>
              {"\n                        "}
              <line x1={"160"} y1={"20"} x2={"260"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"160"} y1={"20"} x2={"60"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"60"} y1={"75"} x2={"140"} y2={"160"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"60"} y1={"75"} x2={"260"} y2={"75"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"260"} y1={"75"} x2={"240"} y2={"170"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"260"} y1={"75"} x2={"140"} y2={"160"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"140"} y1={"160"} x2={"240"} y2={"170"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"240"} y1={"170"} x2={"290"} y2={"220"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n                        "}
              <line x1={"140"} y1={"160"} x2={"290"} y2={"220"} stroke={"#d1d5db"} strokeWidth={"2"}></line>
              {"\n\n                        "}
              <text x={"210"} y={"38"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"4"}
              </text>
              {"\n                        "}
              <text x={"110"} y={"38"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"2"}
              </text>
              {"\n                        "}
              <text x={"160"} y={"68"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"1"}
              </text>
              {"\n                        "}
              <text x={"45"} y={"125"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"5"}
              </text>
              {"\n                        "}
              <text x={"260"} y={"68"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"8"}
              </text>
              {"\n                        "}
              <text x={"270"} y={"130"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"10"}
              </text>
              {"\n                        "}
              <text x={"175"} y={"170"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"2"}
              </text>
              {"\n                        "}
              <text x={"270"} y={"200"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"3"}
              </text>
              {"\n                        "}
              <text x={"215"} y={"205"} fill={"#374151"} fontSize={"11"} font-weight={"bold"} textAnchor={"middle"}>
                {"6"}
              </text>
              {"\n\n                        "}
              <circle cx={"160"} cy={"20"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"160"} y={"25"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"A"}
              </text>
              {"\n                        "}
              <circle cx={"60"} cy={"75"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"60"} y={"80"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"B"}
              </text>
              {"\n                        "}
              <circle cx={"260"} cy={"75"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"260"} y={"80"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"C"}
              </text>
              {"\n                        "}
              <circle cx={"140"} cy={"160"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"140"} y={"165"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"D"}
              </text>
              {"\n                        "}
              <circle cx={"240"} cy={"170"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"240"} y={"175"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"E"}
              </text>
              {"\n                        "}
              <circle cx={"290"} cy={"220"} r={"18"} fill={"#e5e7eb"} stroke={"#9ca3af"} strokeWidth={"2"}></circle>
              {"\n                        "}
              <text x={"290"} y={"225"} textAnchor={"middle"} fill={"#1f2937"} fontSize={"14"} font-weight={"bold"}>
                {"F"}
              </text>
              {"\n                    "}
            </svg>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-emerald-50 p-5 rounded-lg shadow-md border-emerald-400 mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-emerald-800 mb-3"}>
            {"بتطبيق خوارزمية كروسكال:"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {"ترتيب الحواف تصاعدياً حسب الوزن:"}
          </p>
          {"\n                "}
          <div className={"font-mono text-sm bg-white p-3 rounded-lg border border-emerald-200 mb-3"}>
            {"\n                    B-C(1), A-C(2), D-E(2), E-F(3), A-B(4), B-D(5), D-F(6), C-D(8), C-E(10)\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {"اختيار الحواف التي لا تشكل دورة:"}
          </p>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1"}>
            {"\n                    "}
            <li>
              {"B-C (1) ← لا دورة ← تضاف ✓"}
            </li>
            {"\n                    "}
            <li>
              {"A-C (2) ← لا دورة ← تضاف ✓"}
            </li>
            {"\n                    "}
            <li>
              {"D-E (2) ← لا دورة ← تضاف ✓"}
            </li>
            {"\n                    "}
            <li>
              {"E-F (3) ← لا دورة ← تضاف ✓"}
            </li>
            {"\n                    "}
            <li>
              {"A-B (4) ← تكون دورة ← تخطى ✗"}
            </li>
            {"\n                    "}
            <li>
              {"B-D (5) ← لا دورة ← تضاف ✓"}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"نتيجة MST:"}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse text-sm"}>
              <thead>
                <tr className={"bg-amber-200 text-amber-900"}>
                  <th className={"p-2 border"}>
                    {"الخوارزمية"}
                  </th>
                  <th className={"p-2 border"}>
                    {"الحواف في MST"}
                  </th>
                  <th className={"p-2 border"}>
                    {"الوزن الإجمالي"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"كروسكال"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"B-C, A-C, D-E, E-F, B-D"}
                  </td>
                  <td className={"p-2 border font-bold text-green-700"}>
                    {"١٣"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"بريم"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A-C, C-B, B-D, D-E, E-F"}
                  </td>
                  <td className={"p-2 border font-bold text-green-700"}>
                    {"١٣"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 mt-3 text-sm"}>
            {"\n                    لاحظ أن الخوارزميتين تعطيان نفس الوزن الإجمالي (١٣) مع اختلاف في ترتيب الحواف.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/mst/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                انتقل إلى المحاكاة التفاعلية\n            "}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n\n  \n"}
    </div>
  );
}
