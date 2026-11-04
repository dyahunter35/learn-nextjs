export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"GREEDY ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                الخوارزميات الجشعة "}
          <span className={"text-indigo-600"}>
            {"(Greedy Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                استراتيجية حل أمثل محلي تأمل في الوصول إلى الحل الأمثل العام\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {"\n                المفهوم\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الخوارزمية الجشعة (Greedy Algorithm) هي أسلوب لحل المشكلات يعتمد على اتخاذ الخيار الأفضل\n                في كل خطوة محلياً، على أمل أن يؤدي ذلك إلى الحل الأمثل العام. تختار الخوارزمية في كل مرحلة\n                الخيار الذي يبدو الأفضل في تلك اللحظة دون النظر إلى العواقب المستقبلية، تماماً مثل الشخص\n                الجشع الذي يأخذ أكبر قطعة متاحة فوراً.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"مثال من الحياة اليومية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تخيل أنك تريد دفع مبلغ ٧٧ جنيهاً باستخدام أكبر عدد قليل من العملات المعدنية.\n                    العملات المتاحة: ٥٠، ٢٠، ١٠، ٥، ١. الخوارزمية الجشعة ستأخذ عملة ٥٠ أولاً\n                    (لأنها الأكبر)، ثم ٢٠، ثم ٥، ثم ١، ثم ١ — فتستخدم ٥ عملات فقط. هذا هو الحل\n                    الأمثل! لكن ليس دائماً — أحياناً يفشل الأسلوب الجشع في إيجاد الحل الأفضل.\n                "}
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
          {"\n                متى نستخدم الخوارزميات الجشعة؟\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الخوارزميات الجشعة ليست مناسبة لكل المشكلات. هناك شرطان أساسيان:\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {"١. الخاصية الاختيارية الجشعة (Greedy Choice Property)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"يمكن بناء الحل الأمثل العام من خلال سلسلة من الخيارات المثلى محلياً. بمعنى أن الاختيار الأفضل في الخطوة الحالية يؤدي إلى الحل الأمثل العام دون الحاجة إلى إعادة النظر فيه لاحقاً."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {"٢. البنية الفرعية المثلى (Optimal Substructure)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"الحل الأمثل للمشكلة يحتوي داخله على الحلول المثلى للمشكلات الفرعية. هذا الشرط مشترك بين الخوارزميات الجشعة والبرمجة الديناميكية."}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5l7 7-7 7"}></path>
            {"\n                "}
          </svg>
          {"\n                أمثلة على الخوارزميات الجشعة\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"💰 مشكلة العملات المعدنية (Coin Change)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    لديك عملات معدنية بقيم محددة (مثلاً ١، ٥، ١٠، ٢٥). تريد دفع مبلغ معين\n                    باستخدام أقل عدد من العملات. الخوارزمية الجشعة تختار دائماً أكبر عملة ≤ المبلغ المتبقي.\n                    تعمل هذه الطريقة بشكل مثالي مع أنظمة العملات القياسية (مثل ١، ٥، ١٠، ٢٥)\n                    ولكنها قد تفشل مع أنظمة أخرى (مثل ١، ٣، ٤ — حيث مبلغ ٦ يحتاج ٣ عملات\n                    جشعاً بينما الحل الأمثل هو عملتان فقط).\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md mb-4"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-teal-800 mb-3"}>
            {"📅 جدولة المواعيد (Activity Selection / Interval Scheduling)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    لديك مجموعة من الأنشطة، كل نشاط له وقت بدء ووقت انتهاء. تريد اختيار أكبر مجموعة\n                    من الأنشطة غير المتداخلة. الخوارزمية الجشعة تختار النشاط الذي ينتهي أولاً\n                    (أصغر وقت انتهاء)، ثم تحذف جميع الأنشطة المتداخلة معه، وتكرر العملية.\n                    هذه الخوارزمية تعطي الحل الأمثل دائماً لهذه المشكلة.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"🎒 مشكلة حقيبة الظهر الكسرية (Fractional Knapsack)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    لديك حقيبة تتسع لوزن محدد، وعناصر كل منها له قيمة ووزن. يمكنك أخذ أجزاء كسرية\n                    من العناصر. الحل الجشع: اختر العناصر ذات أعلى قيمة لكل وحدة وزن أولاً.\n                    هذه الخوارزمية تعطي الحل الأمثل للمسألة الكسرية (على عكس مشكلة حقيبة الظهر\n                    المنفصلة 0-1 التي تتطلب DP).\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة مع البرمجة الديناميكية (DP)\n            "}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full text-right border-collapse"}>
            <thead>
              <tr className={"bg-indigo-100"}>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {"الخاصية"}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {"الخوارزمية الجشعة (Greedy)"}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-indigo-800"}>
                  {"البرمجة الديناميكية (DP)"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"الفكرة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"اختيار الحل الأفضل محلياً في كل خطوة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"تقسيم المشكلة وتخزين نتائج المشكلات الفرعية"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"التعقيد الزمني"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"أقل (غالباً O(n log n) أو O(n))"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"أعلى (غالباً O(n²) أو أكثر)"}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"الذواكر"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"لا يحتاج ذاكرة إضافية (غالباً)"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"يحتاج جدول لتخزين النتائج"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"الحل الأمثل"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"ليس دائماً — يعتمد على المشكلة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"دائماً — يضمن الحل الأمثل"}
                </td>
              </tr>
              <tr className={"bg-white"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"الاستخدام"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"مشاكل بسيطة ذات بنية خاصة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"مشاكل معقدة ذات مشكلات فرعية متداخلة"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-bold"}>
                  {"أمثلة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"Coin Change (قياسي), جدولة المواعيد, Huffman Coding, Minimal Spanning Tree"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"Fibonacii, Coin Change (عام), 0/1 Knapsack, Edit Distance, Longest Common Subsequence"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-8"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                المميزات والعيوب\n            "}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
              {"المميزات ✅"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-2 text-gray-700"}>
              {"\n                        "}
              <li>
                {"سهلة الفهم والتنفيذ — منطق بديهي"}
              </li>
              {"\n                        "}
              <li>
                {"سريعة — تعقيد زمني منخفض غالباً"}
              </li>
              {"\n                        "}
              <li>
                {"تستهلك ذاكرة قليلة — لا تحتاج جداول تخزين كبيرة"}
              </li>
              {"\n                        "}
              <li>
                {"مثالية لبعض المشكلات (جدولة المواعيد, Huffman, MST)"}
              </li>
              {"\n                        "}
              <li>
                {"حل تقريبي جيد للمشكلات المعقدة"}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
              {"العيوب ❌"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-2 text-gray-700"}>
              {"\n                        "}
              <li>
                {"لا تضمن الحل الأمثل العام في كل المشكلات"}
              </li>
              {"\n                        "}
              <li>
                {"يصعب إثبات صحتها لبعض المشكلات"}
              </li>
              {"\n                        "}
              <li>
                {"تفشل في مشكلات مثل Knapsack 0-1"}
              </li>
              {"\n                        "}
              <li>
                {"تحتاج إثباتاً دقيقاً للخاصية الاختيارية الجشعة"}
              </li>
              {"\n                        "}
              <li>
                {"غير مناسبة للمشكلات التي تتطلب النظر إلى المستقبل"}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n    "}
    </div>
    {"\n\n    \n\n  \n"}
    </div>
  );
}
