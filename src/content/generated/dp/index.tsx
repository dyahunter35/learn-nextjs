export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DYNAMIC PROGRAMMING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                البرمجة الديناميكية "}
          <span className={"text-indigo-600"}>
            {"(Dynamic Programming)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                تقنية حل المشكلات بتجزئتها إلى مشكلات فرعية وتخزين نتائجها لتجنب إعادة الحساب\n            "}
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
          {"\n                البرمجة الديناميكية (Dynamic Programming) هي تقنية رياضية وخوارزمية تُستخدم لحل المشكلات المعقدة عن طريق تقسيمها إلى مشكلات فرعية أصغر، ثم تخزين نتائج هذه المشكلات الفرعية في جدول (Memoization) لتجنب إعادة حسابها عند الحاجة إليها مرة أخرى. هذا الأسلوب يحول التعقيد الزمني من أسي إلى خطي أو متعدد الحدود.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"مثال من الحياة اليومية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تخيل أنك تريد حساب المسافة بين عدة مدن. بدلاً من إعادة حساب نفس المسافة في كل مرة تحتاجها، يمكنك إنشاء جدول يخزن المسافات بين كل زوج من المدن. عندما تحتاج إلى مسافة معينة، تنظر في الجدول بدلاً من إعادة الحساب. هذا بالضبط ما تفعله البرمجة الديناميكية — تخزين نتائج المشكلات الفرعية لحساب النتائج الأكبر بكفاءة.\n                "}
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
          {"\n                متى نستخدم البرمجة الديناميكية؟\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                هناك شرطان أساسيان يجب توفرهما في المشكلة لاستخدام البرمجة الديناميكية:\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {"١. البنية الفرعية المثلى (Optimal Substructure)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"يمكن حل المشكلة الكبيرة من خلال الجمع بين الحلول المثلى للمشكلات الفرعية. بمعنى أن الحل الأمثل للمشكلة يحتوي على الحلول المثلى للمشكلات الفرعية داخله."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {"٢. المشكلات الفرعية المتداخلة (Overlapping Subproblems)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"المشكلة يمكن تقسيمها إلى مشكلات فرعية يتم تكرارها عدة مرات. عندها نقوم بتخزين نتائجها بدلاً من إعادة حسابها — وهذا هو جوهر البرمجة الديناميكية."}
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
          {"\n                الطريقتان: Top-down vs Bottom-up\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {"من الأعلى للأسفل (Top-down / Memoization)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-3"}>
              {"نبدأ بالمشكلة الأصلية ونقسمها بشكل عودي إلى مشكلات فرعية. نخزن نتائج المشكلات الفرعية في مصفوفة (Memo) ونسترجعها عند الحاجة."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-cyan-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        "}
              <span className={"text-cyan-600"}>
                {"function"}
              </span>
              {" fib(n, memo = {}) {"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {"// حالة أساسية"}
              </span>
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"if"}
              </span>
              {" (n <= 1) "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" n;"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {"// إذا كان المحسوب موجودًا، استرجعه"}
              </span>
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"if"}
              </span>
              {" (memo[n] !== "}
              <span className={"text-cyan-600"}>
                {"undefined"}
              </span>
              {") "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" memo[n];"}
              <br />
              {"\n                          "}
              <span className={"text-gray-500"}>
                {"// حساب القيمة وتخزينها"}
              </span>
              <br />
              {"\n                          memo[n] = fib(n-1, memo) + fib(n-2, memo);"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" memo[n];"}
              <br />
              {"\n                        }\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-teal-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-teal-800 mb-2"}>
              {"من الأسفل للأعلى (Bottom-up / Tabulation)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-3"}>
              {"نبدأ من أصغر المشكلات الفرعية (الحالات الأساسية) ونبني الحلول الأكبر تصاعديًا باستخدام جدول (Table)."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-teal-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        "}
              <span className={"text-teal-600"}>
                {"function"}
              </span>
              {" fib(n) {"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"let"}
              </span>
              {" dp = [0, 1];"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"for"}
              </span>
              {" ("}
              <span className={"text-cyan-600"}>
                {"let"}
              </span>
              {" i = 2; i <= n; i++) {"}
              <br />
              {"\n                            dp[i] = dp[i-1] + dp[i-2];"}
              <br />
              {"\n                          }"}
              <br />
              {"\n                          "}
              <span className={"text-cyan-600"}>
                {"return"}
              </span>
              {" dp[n];"}
              <br />
              {"\n                        }\n                    "}
            </div>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
            {"\n                "}
          </svg>
          {"\n                مثال فيبوناتشي — مقارنة التعقيد\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-2"}>
              {"بدون DP — عودية ساذجة (O(2ⁿ))"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-2"}>
              {"استدعاءات متكررة تعيد حساب نفس القيم مئات المرات."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-red-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        fib(5) = fib(4) + fib(3)"}
              <br />
              {"\n                        fib(4) = fib(3) + fib(2)"}
              <br />
              {"\n                        fib(3) = fib(2) + fib(1)"}
              <br />
              {"\n                        "}
              <span className={"text-red-500"}>
                {"→ يتم حساب fib(2) ثلاث مرات!"}
              </span>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-emerald-50 p-5 rounded-lg shadow-md border-emerald-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-emerald-800 mb-2"}>
              {"مع DP — خطي (O(n))"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm mb-2"}>
              {"كل قيمة تحسب مرة واحدة فقط وتخزن."}
            </p>
            {"\n                    "}
            <div className={"bg-white p-3 rounded-lg border border-emerald-200 font-mono text-sm ltr-text"} dir={"ltr"}>
              {"\n                        dp[0] = 0"}
              <br />
              {"\n                        dp[1] = 1"}
              <br />
              {"\n                        dp[2] = dp[1] + dp[0] = 1"}
              <br />
              {"\n                        dp[3] = dp[2] + dp[1] = 2"}
              <br />
              {"\n                        dp[4] = dp[3] + dp[2] = 3"}
              <br />
              {"\n                        dp[5] = dp[4] + dp[3] = 5\n                    "}
            </div>
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                مثال العملات المعدنية (Coin Change)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                مشكلة العملات المعدنية: لدينا عملات بقيم معينة (مثل ١، ٥، ١٠، ٢٥) ونريد معرفة أقل عدد من العملات لتكوين مبلغ معين. الحل باستخدام DP:\n            "}
        </p>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md mb-6 concept-card border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"معادلة DP"}
          </h3>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg border border-amber-200 font-mono text-sm ltr-text mb-2"} dir={"ltr"}>
            {"\n                    dp[0] = 0"}
            <br />
            {"\n                    dp[amount] = min(dp[amount - coin] + 1) لكل coin ≤ amount\n                "}
          </div>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {"\n                    مثال: عملات [١، ٣، ٤]، المبلغ ٦ ← الحل الأمثل = عملتان (٣ + ٣)\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                مميزات وعيوب البرمجة الديناميكية\n            "}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {"المعيار"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"الشرح"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {"مميز"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"يقلل التعقيد الزمني بشكل كبير — من أسي O(2ⁿ) إلى خطي O(n) أو متعدد الحدود."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {"مميز"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"يحل مشكلات معقدة يصعب حلها بالطرق التقليدية (مثل المسارات الأقصر، الحقيبة، التقطيع)."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {"مميز"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"يقدم حلاً منظمًا وواضحًا بخطوات متسلسلة يمكن تتبعها بسهولة."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"يستهلك ذاكرة إضافية لتخزين جدول DP (عادة O(n) أو O(n × m))."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"ليس كل المشكلات يمكن حلها باستخدام DP — تحتاج إلى توفر الشرطين الأساسيين."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قد يكون تصميم معادلة DP صعبًا ويتطلب فهماً عميقاً للمشكلة."}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/dp/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
