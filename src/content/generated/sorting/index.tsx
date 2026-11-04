export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SORTING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزميات الترتيب "}
          <span className={"text-indigo-600"}>
            {"(Sorting Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية ترتيب البيانات: الفقاعة والاختيار\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                ما هي خوارزميات الترتيب؟\n            "}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزميات الترتيب (Sorting Algorithms) هي إحدى الركائز الأساسية في علم الحاسوب. تُستخدم لإعادة ترتيب مجموعة من البيانات (سواء كانت أرقاماً أو نصوصاً) بترتيب معين، إما تصاعدياً (من الأصغر إلى الأكبر) أو تنازلياً (من الأكبر إلى الأصغر).\n            "}
        </p>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"لماذا تعتبر مهمة؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تُستخدم خوارزميات الترتيب في جميع مجالات الحاسوب تقريباً: تنظيم قوائم البيانات، تسريع عمليات البحث (مثل البحث الثنائي)، تحليل البيانات، وعرض المعلومات بشكل منظم. اختيار الخوارزمية المناسبة يؤثر بشكل كبير على أداء البرنامج.\n                "}
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
          {"\n                خوارزمية ترتيب الفقاعة (Bubble Sort)\n            "}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزمية بسيطة تعتمد على مقارنة كل عنصرين متجاورين في المصفوفة وتبديل مواضعهما إذا كانا بترتيب خاطئ. تستمر الخوارزمية بالمرور على المصفوفة حتى لا يحدث أي تبديل في مرور كامل، مما يعني أن البيانات أصبحت مرتبة. سُميت بهذا الاسم لأن العناصر الأكبر \"تطفو\" إلى نهاية المصفوفة مثل الفقاعات.\n            "}
        </p>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    أسوأ حالة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {" — أفضل حالة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n)"}
            </span>
            {" (عندما تكون المصفوفة مرتبة أصلاً). متوسط الحالة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {". الخوارزمية بسيطة ولكنها غير فعالة للمصفوفات الكبيرة.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-bold text-gray-800 mb-4"}>
          {"خطوات الخوارزمية:"}
        </h3>
        {"\n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"المقارنة الزوجية"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        ابدأ من أول عنصر في المصفوفة وقارن بين كل زوج من العناصر المتجاورة. إذا كان العنصر الأيسر أكبر من الأيمن (في الترتيب التصاعدي)، قم بتبديلهما.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"الانتقال إلى الزوج التالي"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        انتقل إلى الزوج التالي من العناصر المتجاورة وكرر عملية المقارنة والتبديل. تستمر هذه العملية حتى نهاية المصفوفة.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"تكرار المرور"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        بعد الوصول إلى نهاية المصفوفة، يضمن ذلك أن أكبر عنصر قد انتقل إلى موقعه الصحيح في النهاية. كرر المرور على المصفوفة بأكملها مجدداً، متجاهلاً العناصر التي تم ترتيبها بالفعل.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"التوقف عند الاستقرار"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        استمر في تكرار المرور على المصفوفة حتى تقوم بمرور كامل دون إجراء أي عملية تبديل. في هذه المرحلة، تكون المصفوفة مرتبة بالكامل وتتوقف الخوارزمية.\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                خوارزمية ترتيب الاختيار (Selection Sort)\n            "}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزمية بسيطة تعتمد على تقسيم المصفوفة إلى جزئين: جزء مرتب وجزء غير مرتب. في كل خطوة، تبحث الخوارزمية عن أصغر عنصر في الجزء غير المرتب وتنقله إلى نهاية الجزء المرتب. سُميت بهذا الاسم لأنها \"تختار\" أصغر عنصر في كل دورة وتضعه في موضعه الصحيح.\n            "}
        </p>
        {"\n\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    جميع الحالات (أسوأ، متوسط، أفضل): "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {". على عكس Bubble Sort، لا تستفيد الخوارزمية من المصفوفات المرتبة جزئياً — فهي تقوم بنفس عدد المقارنات بغض النظر عن ترتيب البيانات.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-bold text-gray-800 mb-4"}>
          {"خطوات الخوارزمية:"}
        </h3>
        {"\n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"البحث عن الحد الأدنى"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        ابدأ من أول عنصر في الجزء غير المرتب من المصفوفة. ابحث عبر جميع العناصر المتبقية للعثور على أصغر عنصر (الحد الأدنى).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"التبديل مع الموضع الحالي"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        بعد العثور على أصغر عنصر، قم بتبديله مع العنصر الموجود في الموضع الحالي (أول عنصر في الجزء غير المرتب). هذا يضع العنصر الأصغر في مكانه الصحيح.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"توسيع الجزء المرتب"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        يعتبر العنصر الذي تم وضعه في موضعه الصحيح الآن جزءاً من الجزء المرتب. قم بتحريك الحد الفاصل بين الجزء المرتب والجزء غير المرتب بمقدار موضع واحد إلى الأمام.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"التكرار حتى الاكتمال"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        كرر عملية البحث عن الحد الأدنى والتبديل مع الموضع الحالي حتى يصبح الجزء غير المرتب فارغاً. عندها تكون جميع العناصر في أماكنها الصحيحة وتكون المصفوفة مرتبة بالكامل.\n                    "}
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
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة بين الخوارزميتين\n            "}
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
                  {"Bubble Sort"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"Selection Sort"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"التعقيد (أسوأ حالة)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"التعقيد (أفضل حالة)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"عدد التبديلات"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"كبير (O(n²))"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قليل (O(n))"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"عدد المقارنات"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"الاستقرار (Stability)"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"مستقر ✓"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"غير مستقر ✗"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"سهولة الفهم"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"سهلة جداً"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"سهلة"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"الأداء على بيانات كبيرة"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"ضعيف"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"ضعيف"}
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
        <a href={"/algorithms/sorting/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
