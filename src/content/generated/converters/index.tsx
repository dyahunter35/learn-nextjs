export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-amber-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"NUMBER SYSTEMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                التحويلات العددية "}
          <span className={"text-amber-600"}>
            {"(Number Converters)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                تحويل الأعداد بين الأنظمة المختلفة: ثنائي، ثماني، عشري، سداسي عشر\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                ما هو النظام العشري (Decimal)؟\n            "}
        </h2>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {"\n                    النظام العشري هو نظام العد الذي نستخدمه في حياتنا اليومية. يعتمد على الرقم "}
            <span className={"font-bold text-green-700"}>
              {"10"}
            </span>
            {" كأساس له، ويستخدم الأرقام من 0 إلى 9 لتمثيل أي قيمة.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {"مثال:"}
              </span>
              {" العدد "}
              <span className={"mono-font text-lg text-green-700"}>
                {"456"}
              </span>
              {" يعني:"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-green-700 mt-2 text-center ltr-text"}>
              {"4 × 10² + 5 × 10¹ + 6 × 10⁰"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-green-700 text-center ltr-text"}>
              {"= 400 + 50 + 6 = 456"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                ما هو النظام الثنائي (Binary)؟\n            "}
        </h2>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {"\n                    النظام الثنائي هو نظام العد المستخدم في الحواسيب والإلكترونيات الرقمية. يعتمد على الرقم "}
            <span className={"font-bold text-blue-700"}>
              {"2"}
            </span>
            {" كأساس له، ويستخدم رقمين فقط: "}
            <span className={"mono-font bg-gray-200 p-1 rounded"}>
              {"0"}
            </span>
            {" و "}
            <span className={"mono-font bg-gray-200 p-1 rounded"}>
              {"1"}
            </span>
            {".\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {"مثال:"}
              </span>
              {" العدد الثنائي "}
              <span className={"mono-font text-lg text-blue-700"}>
                {"1101"}
              </span>
              {" يمثل:"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-blue-700 mt-2 text-center ltr-text"}>
              {"1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰"}
            </p>
            {"\n                    "}
            <p className={"mono-font text-lg text-blue-700 text-center ltr-text"}>
              {"= 8 + 4 + 0 + 1 = 13 (في النظام العشري)"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                التحويل من ثنائي إلى عشري\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لتحويل عدد ثنائي إلى عشري، نستخدم "}
          <span className={"font-bold"}>
            {"طريقة التوسيع (Expansion Method)"}
          </span>
          {" حيث نضرب كل رقم في 2 مرفوعاً لأس يساوي موقعه (بدءاً من الصفر من اليمين إلى اليسار)، ثم نجمع النتائج.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md concept-card border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"مثال: تحويل 101101₂ إلى عشري"}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full text-center"}>
              <tbody>
                <tr className={"border-b"}>
                  <td className={"p-2 font-bold"}>
                    {"الرقم الثنائي"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2 font-bold"}>
                    {"الأس (الموقع)"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁵"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁴"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2³"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2²"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2¹"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2⁰"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2 font-bold"}>
                    {"القيمة"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"32"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"8"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"4"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"mt-4 text-amber-800 font-bold text-lg text-center"}>
            {"\n                    32 + 0 + 8 + 4 + 0 + 1 = 45₁₀\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"}></path>
            {"\n                "}
          </svg>
          {"\n                التحويل من عشري إلى ثنائي\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لتحويل عدد عشري إلى ثنائي، نستخدم "}
          <span className={"font-bold"}>
            {"طريقة القسمة المتكررة على 2"}
          </span>
          {". نقسم العدد على 2 بشكل متكرر ونسجل الباقي (0 أو 1) في كل مرة، ثم نقرأ البواقي من الأسفل إلى الأعلى.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"مثال: تحويل 45₁₀ إلى ثنائي"}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full text-center"}>
              <tbody>
                <tr className={"border-b bg-gray-100"}>
                  <th className={"p-2 font-bold"}>
                    {"القسمة"}
                  </th>
                  <th className={"p-2 font-bold"}>
                    {"الناتج"}
                  </th>
                  <th className={"p-2 font-bold"}>
                    {"الباقي"}
                  </th>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"45 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"22"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"22 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"11"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"0"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"11 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"5"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"5 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
                <tr className={"border-b"}>
                  <td className={"p-2"}>
                    {"2 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"1"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-2"}>
                    {"1 ÷ 2"}
                  </td>
                  <td className={"p-2 mono-font ltr-text"}>
                    {"0"}
                  </td>
                  <td className={"p-2 mono-font ltr-text font-bold text-purple-700"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"mt-4 text-purple-800 font-bold text-lg text-center"}>
            {"\n                    نقرأ البواقي من الأسفل إلى الأعلى: 101101₂\n                "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"}></path>
            {"\n                "}
          </svg>
          {"\n                تحويل الأعداد الحقيقية (ذات الفاصلة)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لتحويل عدد حقيقي (عدد عشري بفاصلة) إلى ثنائي، نقسم العدد إلى "}
          <span className={"font-bold"}>
            {"جزء صحيح"}
          </span>
          {" و "}
          <span className={"font-bold"}>
            {"جزء كسري"}
          </span>
          {"، ونعالج كل جزء بطريقته.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md concept-card border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
              {"الجزء الصحيح"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mb-3"}>
              {"يحول باستخدام "}
              <span className={"font-bold"}>
                {"القسمة المتكررة على 2"}
              </span>
              {" (الطريقة نفسها السابقة)."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg shadow-inner text-sm"}>
              {"\n                        "}
              <p className={"text-gray-600"}>
                {"مثال: الجزء الصحيح من 13.75 هو 13 → 1101₂"}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md concept-card border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
              {"الجزء الكسري"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mb-3"}>
              {"يحول باستخدام "}
              <span className={"font-bold"}>
                {"الضرب المتكرر في 2"}
              </span>
              {". نضرب الجزء الكسري في 2 ونأخذ الجزء الصحيح الناتج."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg shadow-inner text-sm"}>
              {"\n                        "}
              <p className={"text-gray-600"}>
                {"مثال: الجزء الكسري من 13.75 هو 0.75 → 11₂"}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-rose-50 p-5 rounded-lg shadow-md mt-4 concept-card border-rose-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-rose-800 mb-3"}>
            {"مثال كامل: تحويل 13.75₁₀ إلى ثنائي"}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-inner"}>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {"الجزء الصحيح 13:"}
              </span>
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"13 ÷ 2 = 6 الباقي 1"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"6 ÷ 2 = 3 الباقي 0"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"3 ÷ 2 = 1 الباقي 1"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"1 ÷ 2 = 0 الباقي 1"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4 mb-3"}>
              {"← 13₁₀ = 1101₂"}
            </p>
            {"\n                    "}
            <p className={"text-gray-700"}>
              <span className={"font-bold"}>
                {"الجزء الكسري 0.75:"}
              </span>
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"0.75 × 2 = 1.50 ← نأخذ 1"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4"}>
              {"0.50 × 2 = 1.00 ← نأخذ 1"}
            </p>
            {"\n                    "}
            <p className={"mono-font ltr-text text-gray-700 mr-4 mb-3"}>
              {"← 0.75₁₀ = 11₂"}
            </p>
            {"\n                    "}
            <p className={"text-rose-800 font-bold text-lg text-center mt-2"}>
              {"13.75₁₀ = 1101.11₂"}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {"\n                جدول مقارن للأوزان والمكان\n            "}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white rounded-lg shadow-md"}>
            <thead>
              <tr className={"bg-indigo-700 text-white"}>
                <th className={"p-3 border border-indigo-600"}>
                  {"الأس"}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {"2ⁿ"}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {"القيمة العشرية"}
                </th>
                <th className={"p-3 border border-indigo-600"}>
                  {"الوصف"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁷"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"128"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"128"}
                </td>
                <td className={"p-3"}>
                  {"128"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁶"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"64"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"64"}
                </td>
                <td className={"p-3"}>
                  {"64"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁵"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"32"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"32"}
                </td>
                <td className={"p-3"}>
                  {"32"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁴"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"16"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"16"}
                </td>
                <td className={"p-3"}>
                  {"16"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2³"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"8"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"8"}
                </td>
                <td className={"p-3"}>
                  {"8"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2²"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"4"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"4"}
                </td>
                <td className={"p-3"}>
                  {"4"}
                </td>
              </tr>
              <tr className={"border-b hover:bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2¹"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2"}
                </td>
                <td className={"p-3"}>
                  {"2"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50 bg-gray-50"}>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"2⁰"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"1"}
                </td>
                <td className={"p-3 text-center mono-font ltr-text"}>
                  {"1"}
                </td>
                <td className={"p-3"}>
                  {"1"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-600 text-sm mt-4 text-center"}>
          {"\n                كلما اتجهنا لليسار (زيادة الأس)، تضاعفت القيمة. هذا هو أساس النظام الثنائي: كل خانة تساوي ضعف الخانة التي تسبقها.\n            "}
        </p>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 mb-6"}>
        {"\n            "}
        <a href={"/algorithms/converters/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition duration-200 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 9l4-4 4 4m0 6l-4 4-4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                انتقل إلى المحول التفاعلي\n            "}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n  \n"}
    </div>
  );
}
