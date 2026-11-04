export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DIJKSTRA'S ALGORITHM"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزمية أقصر مسار "}
          <span className={"text-indigo-600"}>
            {"(Dijkstra)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                إيجاد أقصر الطرق في الرسوم البيانية الموزونة\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {"\n                المفهوم\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزمية "}
          <strong>
            {"ديكسترا (Dijkstra)"}
          </strong>
          {" هي خوارزمية شهيرة لحل مشكلة "}
          <strong>
            {"إيجاد أقصر مسار"}
          </strong>
          {" في الرسوم البيانية الموزونة ذات الأوزان الموجبة. طورها عالم الحاسوب الهولندي "}
          <strong>
            {"إدسخر ديكسترا"}
          </strong>
          {" عام 1956.\n            "}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تهدف الخوارزمية إلى إيجاد أقل تكلفة (أقصر مسافة) من عقدة بداية محددة إلى جميع العقد الأخرى في الرسم البياني. تعمل الخوارزمية عن طريق اختيار العقدة ذات أقل مسافة معروفة بشكل متكرر، ثم تحديث المسافات إلى جيرانها.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"المبادئ الأساسية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    "}
            <strong>
              {"الرسم البياني الموزون:"}
            </strong>
            {" كل حافة لها وزن (تكلفة) يمثل المسافة أو الزمن أو المال."}
            <br />
            {"\n                    "}
            <strong>
              {"أقصر مسار:"}
            </strong>
            {" المسار الذي له أقل مجموع أوزان للحواف من المصدر إلى الهدف."}
            <br />
            {"\n                    "}
            <strong>
              {"تسامح الاسترخاء (Relaxation):"}
            </strong>
            {" عملية تحديث مسافة العقدة إذا تم إيجاد مسار أقصر إليها.\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                كيف تعمل؟\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تستخدم خوارزمية ديكسترا أسلوب "}
          <strong>
            {"الجشع (Greedy)"}
          </strong>
          {" لاختيار العقدة ذات أقل مسافة في كل خطوة. تحتفظ الخوارزمية بمصفوفة للمسافات، وطابور أولوية (Priority Queue) لتتبع العقد التي تنتظر المعالجة.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"آلية العمل خطوة بخطوة"}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {"حدد عقدة البداية واجعل مسافتها "}
              <strong>
                {"صفراً"}
              </strong>
              {" وجميع العقد الأخرى "}
              <strong>
                {"مالانهاية"}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              {"ضع عقدة البداية في طابور الأولوية."}
            </li>
            {"\n                    "}
            <li>
              {"اسحب العقدة ذات "}
              <strong>
                {"أقل مسافة"}
              </strong>
              {" من طابور الأولوية — هذه هي العقدة الحالية."}
            </li>
            {"\n                    "}
            <li>
              {"إذا كانت العقدة قد زرت سابقاً، تجاهلها وانتقل للخطوة ٣."}
            </li>
            {"\n                    "}
            <li>
              {"قم بتحديث مسافات الجيران غير المُزارة: إذا كانت المسافة الجديدة (مسافة العقدة الحالية + وزن الحافة) "}
              <strong>
                {"أقل"}
              </strong>
              {" من المسافة المسجلة، قم بتحديثها."}
            </li>
            {"\n                    "}
            <li>
              {"أضف الجيران المحدثين إلى طابور الأولوية."}
            </li>
            {"\n                    "}
            <li>
              {"كرر الخطوات ٣–٦ حتى يصبح الطابور فارغاً."}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    باستخدام طابور أولوية (كومة ثنائية): "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O((V + E) log V)"}
            </span>
            <br />
            {"\n                    حيث V عدد العقد و E عدد الحواف.\n                "}
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
          {"\n                مثال توضيحي\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لنفترض أن لدينا الرسم البياني التالي المكون من ٦ عقد (A إلى F) مع الأوزان المبينة على الحواف. نريد إيجاد أقصر المسارات من العقدة "}
          <strong>
            {"A"}
          </strong>
          {" إلى جميع العقد الأخرى.\n            "}
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
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"نتائج التطبيق (بداية من A):"}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse text-sm"}>
              <thead>
                <tr className={"bg-amber-200 text-amber-900"}>
                  <th className={"p-2 border"}>
                    {"الوجهة"}
                  </th>
                  <th className={"p-2 border"}>
                    {"المسافة"}
                  </th>
                  <th className={"p-2 border"}>
                    {"المسار"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"A"}
                  </td>
                  <td className={"p-2 border"}>
                    {"٠"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"B"}
                  </td>
                  <td className={"p-2 border"}>
                    {"٣"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"C"}
                  </td>
                  <td className={"p-2 border"}>
                    {"٢"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"D"}
                  </td>
                  <td className={"p-2 border"}>
                    {"٨"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"E"}
                  </td>
                  <td className={"p-2 border"}>
                    {"١٠"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D ← E"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 border font-bold"}>
                    {"F"}
                  </td>
                  <td className={"p-2 border"}>
                    {"١٣"}
                  </td>
                  <td className={"p-2 border font-mono"}>
                    {"A ← C ← B ← D ← E ← F"}
                  </td>
                </tr>
              </tbody>
            </table>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {"\n                خطوات الخوارزمية\n            "}
        </h2>
        {"\n            "}
        <div className={"space-y-4"}>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-indigo-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-indigo-700 mb-1"}>
              {"١. التهيئة (Initialization)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"ضع مسافة عقدة البداية = ٠، وجميع العقد الأخرى = ∞. أضف عقدة البداية إلى طابور الأولوية."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-amber-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-amber-700 mb-1"}>
              {"٢. الاستخراج (Extract Min)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"اسحب العقدة ذات أقل مسافة من طابور الأولوية. هذه هي العقدة التي سنزورها حالياً."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-emerald-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-emerald-700 mb-1"}>
              {"٣. الاسترخاء (Relaxation)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"لكل جار غير مزار للعقدة الحالية: احسب المسافة الجديدة = مسافة العقدة الحالية + وزن الحافة. إذا كانت أقل من المسافة الحالية للجار، قم بتحديثها وأضف الجار إلى طابور الأولوية."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border-r-4 border-rose-500"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-rose-700 mb-1"}>
              {"٤. التكرار (Iteration)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"كرر الخطوتين ٢ و ٣ حتى يصبح طابور الأولوية فارغاً. عندها نكون قد وجدنا أقصر المسارات إلى جميع العقد التي يمكن الوصول إليها."}
            </p>
            {"\n                "}
          </div>
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
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
              {"خرائط وتوجيه"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"خرائط Google — إيجاد أقصر طريق بين موقعين"}
              </li>
              {"\n                        "}
              <li>
                {"أنظمة GPS والملاحة"}
              </li>
              {"\n                        "}
              <li>
                {"توجيه شبكات الحاسوب (OSPF, IS-IS)"}
              </li>
              {"\n                        "}
              <li>
                {"تخطيط طرق النقل والشحن"}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {"شبكات وذكاء اصطناعي"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"تحليل الشبكات الاجتماعية (درجات البعد)"}
              </li>
              {"\n                        "}
              <li>
                {"التخطيط الحضري وتوزيع الخدمات"}
              </li>
              {"\n                        "}
              <li>
                {"الذكاء الاصطناعي — إيجاد المسارات في الألعاب"}
              </li>
              {"\n                        "}
              <li>
                {"إدارة سلاسل الإمداد والخدمات اللوجستية"}
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
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/shortest-path/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
