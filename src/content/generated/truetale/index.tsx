export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n\n    \n    \n\n    \n\n"}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n    "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n        "}
        <span className={"inline-block text-rose-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"TRUTH TABLES"}
        </span>
        {"\n        "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n            جداول الصواب والخطأ المنطقية "}
          <span className={"text-rose-600"}>
            {"(Truth Tables)"}
          </span>
          {"\n        "}
        </h1>
        {"\n        "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n            أساس المنطق الرقمي وفهم العمليات المنطقية خطوة بخطوة\n        "}
        </p>
        {"\n    "}
      </header>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n            "}
          </svg>
          {"\n            ما هي جداول الصواب؟\n        "}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n            جدول الصواب (Truth Table) هو أداة رياضية ومنطقية تُستخدم لتحديد القيمة المنطقية (صواب ✓ أو خطأ ✗) لناتج عبارة منطقية بناءً على جميع التركيبات الممكنة لقيم المدخلات. يُعتبر جدول الصواب الأساس الذي تقوم عليه الدوائر الرقمية والإلكترونيات الحديثة، حيث يمثل طريقة منهجية لتحليل وتصميم البوابات المنطقية (Logic Gates) في الحاسوب.\n        "}
        </p>
        {"\n        "}
        <p className={"text-gray-700 leading-loose"}>
          {"\n            كل عبارة منطقية تتكون من متغيرات منطقية تأخذ القيم إما "}
          <span className={"text-green-600 font-bold"}>
            {"صحيح (1 / True)"}
          </span>
          {" أو "}
          <span className={"text-red-600 font-bold"}>
            {"خطأ (0 / False)"}
          </span>
          {". يقوم جدول الصواب بحصر جميع الاحتمالات وحساب النتيجة لكل حالة.\n        "}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n            "}
          </svg>
          {"\n            العمليات المنطقية الأساسية\n        "}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-6"}>
          {"\n            هناك خمس عمليات منطقية أساسية تشكل اللبنات الأولى للمنطق الرقمي:\n        "}
        </p>
        {"\n\n        "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}></path>
              {"\n                "}
            </svg>
            {"\n                1. النفي (NOT - ¬)\n            "}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                عملية النفي تعكس القيمة المنطقية للمدخل. إذا كان المدخل صواباً، يكون الناتج خطأ، والعكس صحيح.\n            "}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-red-200"}>
                  <th className={"p-3 border border-red-300 font-bold text-red-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-red-300 font-bold text-red-900"}>
                    {"¬A"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                    {"0"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-red-600"}>
            {"يُستخدم في البوابة المنطقية NOT Gate ويعرف أيضاً بالمُكمّل (Complement)."}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 4v16m8-8H4"}></path>
              {"\n                "}
            </svg>
            {"\n                2. العطف (AND - ∧)\n            "}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                عملية العطف تعطي ناتجاً صحيحاً (1) فقط عندما تكون جميع المدخلات صحيحة. إذا كان أي مدخل خطأ، يكون الناتج خطأ.\n            "}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-blue-200"}>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-blue-300 font-bold text-blue-900"}>
                    {"A ∧ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-blue-600"}>
            {"يُستخدم في البوابة المنطقية AND Gate ويحقق الخاصية: كل من A و B يجب أن يكونا صحيحين."}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}></path>
              {"\n                "}
            </svg>
            {"\n                3. الفصل (OR - ∨)\n            "}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                عملية الفصل تعطي ناتجاً صحيحاً (1) عندما يكون على الأقل أحد المدخلات صحيحاً. الناتج يكون خطأ فقط عندما تكون جميع المدخلات خطأ.\n            "}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-green-200"}>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-green-300 font-bold text-green-900"}>
                    {"A ∨ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-green-600"}>
            {"يُستخدم في البوابة المنطقية OR Gate ويحقق: يكفي أن يكون A أو B صحيحاً."}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 7l5 5m0 0l-5 5m5-5H6"}></path>
              {"\n                "}
            </svg>
            {"\n                4. الشرط (Implication - →)\n            "}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                عملية الشرط (الاستلزام) تعطي ناتجاً خطأ (0) فقط عندما يكون المقدّم (A) صحيحاً والتالي (B) خطأ. في جميع الحالات الأخرى، الناتج صحيح.\n            "}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-purple-200"}>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-purple-300 font-bold text-purple-900"}>
                    {"A → B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-purple-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-purple-600"}>
            {"تُقرأ \"إذا A فإن B\" وهي أساس الاستدلال المنطقي في البرمجة والرياضيات."}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-6 concept-card border-amber-400"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3 flex items-center"}>
            {"\n                "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                    "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                "}
            </svg>
            {"\n                5. التكافؤ (Equivalence - ↔)\n            "}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                عملية التكافؤ تعطي ناتجاً صحيحاً (1) عندما تكون قيمتا المدخلين متطابقتين (كلاهما صواب أو كلاهما خطأ). إذا اختلفتا، يكون الناتج خطأ.\n            "}
          </p>
          {"\n            "}
          <div className={"overflow-x-auto"}>
            {"\n                "}
            <table className={"w-full text-center border-collapse"}>
              <thead>
                <tr className={"bg-amber-200"}>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"A"}
                  </th>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"B"}
                  </th>
                  <th className={"p-3 border border-amber-300 font-bold text-amber-900"}>
                    {"A ↔ B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"1"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"0"}
                  </td>
                </tr>
                <tr>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 border border-gray-300 font-bold text-amber-600"}>
                    {"1"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n            "}
          </div>
          {"\n            "}
          <p className={"text-sm mt-3 text-amber-600"}>
            {"تُقرأ \"A إذا وفقط إذا B\" وتستخدم لتحديد تساوي قيمتين منطقيتين."}
          </p>
          {"\n        "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-12"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}></path>
            {"\n            "}
          </svg>
          {"\n            كيفية بناء جدول الصواب لأي عبارة منطقية\n        "}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-6"}>
          {"\n            لبناء جدول الصواب لأي عبارة منطقية معقدة، اتبع هذه الخطوات المنهجية:\n        "}
        </p>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {"تحديد عدد المتغيرات"}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {"\n                حدد عدد المتغيرات المنطقية المختلفة في العبارة (مثل A, B, C). عدد الصفوف في جدول الصواب يساوي \\(2^n\\) حيث n هو عدد المتغيرات.\n            "}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {"توليد جميع التركيبات الممكنة"}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {"\n                اكتب جميع الاحتمالات الممكنة لقيم المتغيرات. أفضل طريقة هي العد الثنائي: ابدأ بجعل كل القيم 0 وتدرج حتى تصل إلى جميع القيم 1.\n            "}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {"تقسيم العبارة إلى أجزاء"}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {"\n                قسّم العبارة المنطقية المعقدة إلى عمليات فرعية صغرى. أضف عموداً لكل عملية فرعية في جدول الصواب.\n            "}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"step-item"}>
          {"\n            "}
          <h3 className={"text-xl font-semibold text-indigo-800"}>
            {"تعبئة النتائج من الأعمدة الداخلية إلى الخارجية"}
          </h3>
          {"\n            "}
          <p className={"text-gray-700 mr-10"}>
            {"\n                احسب ناتج كل عملية فرعية بالتدريج مستخدماً قيم المدخلات. انتقل من العمليات الأكثر أولوية (مثل NOT) إلى الأقل أولوية (مثل Implication) حتى تصل إلى العمود النهائي الذي يمثل العبارة الكاملة.\n            "}
          </p>
          {"\n        "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      <section className={"mb-10"}>
        {"\n        "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}></path>
            {"\n            "}
          </svg>
          {"\n            مثال عملي: (A ∧ B) → (¬A ∨ C)\n        "}
        </h2>
        {"\n        "}
        <p className={"text-gray-700 mb-4"}>
          {"\n            لنطبق الخطوات السابقة على العبارة المنطقية: "}
          <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
            {"(A ∧ B) → (¬A ∨ C)"}
          </span>
          {"\n        "}
        </p>
        {"\n        "}
        <div className={"overflow-x-auto mb-4"}>
          {"\n            "}
          <table className={"w-full text-center border-collapse"}>
            <thead>
              <tr className={"bg-indigo-200"}>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"A"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"B"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"C"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"A ∧ B"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"¬A"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"¬A ∨ C"}
                </th>
                <th className={"p-3 border border-indigo-300 font-bold text-indigo-900"}>
                  {"(A ∧ B) → (¬A ∨ C)"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"0"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-blue-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-red-600"}>
                  {"0"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-green-600"}>
                  {"1"}
                </td>
                <td className={"p-3 border border-gray-300 font-bold text-indigo-700 bg-indigo-100"}>
                  {"1"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n        "}
        </div>
        {"\n        "}
        <p className={"text-gray-700 leading-loose"}>
          {"\n            في هذا المثال، نلاحظ أن العبارة "}
          <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
            {"(A ∧ B) → (¬A ∨ C)"}
          </span>
          {" تكون خطأ فقط في حالة واحدة: عندما يكون A = 1, B = 1, و C = 0. أي عندما يكون A ∧ B = 1 و ¬A ∨ C = 0.\n        "}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      <div className={"text-center mt-10 mb-4"}>
        {"\n        "}
        <a href={"/algorithms/truetale/simulation"} className={"inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition duration-200"}>
          {"\n            "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2 mb-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
            {"\n            "}
          </svg>
          {"\n            انتقل إلى المولد التفاعلي\n        "}
        </a>
        {"\n    "}
      </div>
      {"\n"}
    </div>
    {"\n\n\n\n  \n"}
    </div>
  );
}
