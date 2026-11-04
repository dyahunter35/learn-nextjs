export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"RECURSION"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                الخوارزميات العودية "}
          <span className={"text-indigo-600"}>
            {"(Recursion)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية الاستدعاء الذاتي للدوال: عندما تستدعي الدالة نفسها\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
            {"\n                "}
          </svg>
          {"\n                مفهوم العودية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                العودية (Recursion) هي تقنية برمجية تعتمد على قيام الدالة باستدعاء نفسها بشكل مباشر أو غير مباشر لحل مشكلة ما. الفكرة الأساسية هي تجزئة المشكلة الكبيرة إلى مشكلات فرعية أصغر مشابهة لها، ثم حل كل مشكلة فرعية بنفس الطريقة حتى نصل إلى حالة بسيطة يمكن حلها مباشرة (تسمى الحالة الأساسية).\n            "}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"مثال من الحياة اليومية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تخيل أنك تريد معرفة موقعك في ممر طويل. تسأل أول شخص: \"أين أنا؟\" فيجيب: \"اسأل الشخص الذي أمامي\". تسأل الثاني: \"أين أنا؟\" فيجيب: \"اسأل الشخص الذي أمامي\". يستمر هذا حتى تصل إلى آخر شخص يعرف الإجابة، فيقول: \"أنت على بعد 5 أمتار من الباب\". ثم يعود الجواب لكل شخص بالترتيب حتى يصل إليك. هذا هو مبدأ العودية: تقدم الاستعلام ثم تعود بالنتائج.\n                "}
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
          {"\n                كيف تعمل العودية؟\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تعتمد العودية على عنصرين أساسيين: "}
          <strong>
            {"الحالة الأساسية (Base Case)"}
          </strong>
          {" و"}
          <strong>
            {"الاستدعاء العودي (Recursive Call)"}
          </strong>
          {". الحالة الأساسية هي الشرط الذي يوقف العودية وتمنع الدالة من استدعاء نفسها إلى ما لا نهاية. الاستدعاء العودي هو استدعاء الدالة لنفسها بقيمة مختلفة (عادة أصغر) لحل المشكلة الفرعية.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"مكونات الدالة العودية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    ١. "}
            <strong>
              {"الحالة الأساسية:"}
            </strong>
            {" شرط بسيط ينهي العودية (مثل n = 0 أو n = 1)."}
            <br />
            {"\n                    ٢. "}
            <strong>
              {"الاستدعاء العودي:"}
            </strong>
            {" استدعاء الدالة نفسها بقيمة مختلفة تقترب من الحالة الأساسية."}
            <br />
            {"\n                    ٣. "}
            <strong>
              {"الدمج (Optional):"}
            </strong>
            {" دمج نتائج الاستدعاءات العودية للحصول على النتيجة النهائية.\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5l7 7-7 7"}></path>
            {"\n                "}
          </svg>
          {"\n                أنواع العودية\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {"العودية المباشرة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"عندما تستدعي الدالة نفسها مباشرة داخل جسمها. مثل دالة حساب المضروب (Factorial)."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-orange-50 p-5 rounded-lg shadow-md border-orange-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-orange-800 mb-2"}>
              {"العودية غير المباشرة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"عندما تستدعي الدالة A الدالة B التي تستدعي بدورها الدالة A، وهكذا."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {"العودية الخطية"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"عندما تقوم الدالة باستدعاء واحد فقط لنفسها في كل مرة (مثل Factorial)."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-rose-50 p-5 rounded-lg shadow-md border-rose-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-rose-800 mb-2"}>
              {"العودية المتفرعة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"عندما تقوم الدالة باستدعاء نفسها أكثر من مرة (مثل Fibonacci). تنتج شجرة عودية متفرعة."}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-cyan-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
            {"\n                "}
          </svg>
          {"\n                أمثلة على العودية\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"١. مضروب العدد (Factorial)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {"\n                    مضروب العدد n (يرمز له n!) هو حاصل ضرب جميع الأعداد الصحيحة الموجبة من 1 إلى n.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg border border-indigo-200 font-mono text-sm mb-2 ltr-text"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-indigo-600 font-bold"}>
              {"fact(n)"}
            </span>
            {" = n × fact(n-1)"}
            <br />
            {"\n                    "}
            <span className={"text-indigo-600 font-bold"}>
              {"fact(0)"}
            </span>
            {" = 1  "}
            <span className={"text-gray-400"}>
              {"// Base case"}
            </span>
            <br />
            {"\n                    "}
            <span className={"text-indigo-600 font-bold"}>
              {"fact(1)"}
            </span>
            {" = 1  "}
            <span className={"text-gray-400"}>
              {"// Base case"}
            </span>
            <br />
            <br />
            {"\n                    "}
            <span className={"text-green-600 font-bold"}>
              {"مثال: fact(5)"}
            </span>
            {" = 5 × 4 × 3 × 2 × 1 = "}
            <span className={"text-amber-600 font-bold"}>
              {"120"}
            </span>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md concept-card border-teal-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-teal-800 mb-3"}>
            {"٢. متتالية فيبوناتشي (Fibonacci)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-2"}>
            {"\n                    متتالية فيبوناتشي هي سلسلة من الأعداد حيث كل عدد هو مجموع العددين السابقين له.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg border border-teal-200 font-mono text-sm mb-2 ltr-text"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-teal-600 font-bold"}>
              {"fib(n)"}
            </span>
            {" = fib(n-1) + fib(n-2)"}
            <br />
            {"\n                    "}
            <span className={"text-teal-600 font-bold"}>
              {"fib(0)"}
            </span>
            {" = 0  "}
            <span className={"text-gray-400"}>
              {"// Base case"}
            </span>
            <br />
            {"\n                    "}
            <span className={"text-teal-600 font-bold"}>
              {"fib(1)"}
            </span>
            {" = 1  "}
            <span className={"text-gray-400"}>
              {"// Base case"}
            </span>
            <br />
            <br />
            {"\n                    "}
            <span className={"text-green-600 font-bold"}>
              {"مثال: fib(6)"}
            </span>
            {" = 0, 1, 1, 2, 3, 5, 8 → fib(6) = "}
            <span className={"text-amber-600 font-bold"}>
              {"8"}
            </span>
            {"\n                "}
          </div>
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
          {"\n                مميزات وعيوب العودية\n            "}
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
                  {"الكود أبسط وأسهل للقراءة والفهم — خاصة في المسائل الرياضية مثل فيبوناتشي والمضروب."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {"مميز"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"تقسيم المشكلة إلى أجزاء أصغر يسهل حلها بشكل منفصل (Divide & Conquer)."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-green-700"}>
                  {"مميز"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"مناسبة جداً للمسائل التي لها بنية طبيعية عودية (مثل الأشجار والمتتاليات)."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"استهلاك كبير للذاكرة (Stack Overflow) مع القيم الكبيرة بسبب تكديس الاستدعاءات."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قد يكون أبطأ من الحلول التكرارية بسبب تكلفة استدعاء الدوال المتكرر."}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold text-red-700"}>
                  {"عيب"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قد تؤدي إلى تكرار حسابات كثيرة (كما في فيبوناتشي بدون تحسين)."}
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
        <a href={"/algorithms/recursion/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
