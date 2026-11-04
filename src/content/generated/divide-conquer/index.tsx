export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DIVIDE & CONQUER"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزميات فرق تسد "}
          <span className={"text-indigo-600"}>
            {"(Divide & Conquer)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                استراتيجية حل المشكلات: تقسيم — حل — دمج\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
            {"\n                "}
          </svg>
          {"\n                مفهوم خوارزميات فرق تسد\n            "}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                "}
          <strong className={"text-indigo-700"}>
            {"فرق تسد (Divide & Conquer)"}
          </strong>
          {" هي استراتيجية خوارزمية قوية تعتمد على فكرة بسيطة لكنها فعالة: تقسيم المشكلة الكبيرة إلى مشكلات فرعية أصغر، حل كل مشكلة فرعية بشكل مستقل، ثم دمج الحلول الفرعية للحصول على الحل النهائي. هذه الاستراتيجية هي أساس العديد من الخوارزميات الفعالة في علم الحاسوب.\n            "}
        </p>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"لماذا تعتبر قوية؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تكمن قوة هذه الاستراتيجية في قدرتها على تحويل المشكلات المعقدة إلى مشكلات بسيطة يمكن حلها بسهولة. باستخدام هذه الطريقة، يمكننا تصميم خوارزميات ذات تعقيد زمني منخفض مثل "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n log n)"}
            </span>
            {" بدلاً من "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {"، مما يجعلها مثالية للتعامل مع كميات كبيرة من البيانات.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                الخطوات الأساسية لخوارزميات فرق تسد\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-indigo-50 p-5 rounded-xl shadow-md border-t-4 border-indigo-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-indigo-600 mb-2"}>
              {"١"}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-indigo-800 mb-2"}>
              {"التقسيم (Divide)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {"\n                        تقسم المشكلة الأصلية إلى مشكلات فرعية أصغر حجماً. تكون هذه المشكلات الفرعية مستقلة ومتشابهة في هيكلها للمشكلة الأصلية. يستمر التقسيم حتى تصبح المشكلات الفرعية بسيطة بما يكفي لحلها مباشرة.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-xl shadow-md border-t-4 border-amber-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-amber-600 mb-2"}>
              {"٢"}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-amber-800 mb-2"}>
              {"الحل (Conquer)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {"\n                        يتم حل كل مشكلة فرعية بشكل منفصل. إذا كانت المشكلة الفرعية صغيرة بما يكفي، يتم حلها مباشرة باستخدام طريقة بسيطة (هذه تسمى الحالة الأساسية). أما إذا كانت أكبر، فيتم تطبيق نفس الاستراتيجية عليها بشكل تكراري.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-xl shadow-md border-t-4 border-emerald-500"}>
            {"\n                    "}
            <div className={"text-3xl font-bold text-emerald-600 mb-2"}>
              {"٣"}
            </div>
            {"\n                    "}
            <h3 className={"text-xl font-bold text-emerald-800 mb-2"}>
              {"الدمج (Combine)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm leading-relaxed"}>
              {"\n                        تُدمج حلول المشكلات الفرعية معاً للحصول على حل المشكلة الأصلية. تختلف طريقة الدمج حسب نوع الخوارزمية — في ترتيب الدمج نقوم بدمج مصفوفتين مرتبتين، بينما في البحث الثنائي لا توجد حاجة لخطوة دمج.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-gray-50 p-6 rounded-xl border border-gray-200"}>
          {"\n                "}
          <h3 className={"text-xl font-bold text-gray-800 mb-3"}>
            {"مخطط توضيحي لعملية فرق تسد"}
          </h3>
          {"\n                "}
          <div className={"flex items-center justify-center gap-2 md:gap-4 text-sm flex-wrap"}>
            {"\n                    "}
            <div className={"bg-indigo-100 text-indigo-800 font-bold px-4 py-3 rounded-lg"}>
              {"مشكلة كبيرة"}
            </div>
            {"\n                    "}
            <span className={"text-2xl text-gray-400"}>
              {"←"}
            </span>
            {"\n                    "}
            <div className={"flex gap-2"}>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {"مشكلة فرعية ١"}
              </div>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {"مشكلة فرعية ٢"}
              </div>
              {"\n                        "}
              <div className={"bg-amber-100 text-amber-800 font-bold px-3 py-3 rounded-lg"}>
                {"مشكلة فرعية ٣"}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <span className={"text-2xl text-gray-400"}>
              {"←"}
            </span>
            {"\n                    "}
            <div className={"bg-green-100 text-green-800 font-bold px-4 py-3 rounded-lg"}>
              {"حل كامل"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                أمثلة على خوارزميات فرق تسد\n            "}
        </h2>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-indigo-50 to-blue-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-indigo-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {"١. ترتيب الدمج (Merge Sort)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {"\n                    من أشهر الأمثلة على استراتيجية فرق تسد. تقوم الخوارزمية بتقسيم المصفوفة إلى نصفين متساويين تقريباً، ثم ترتب كل نصف بشكل تكراري، وأخيراً تدمج النصفين المرتبين للحصول على مصفوفة مرتبة بالكامل.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-indigo-700 mb-2"}>
              {"خطوات الخوارزمية:"}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm"}>
              {"\n                        "}
              <li>
                {"إذا كان طول المصفوفة ≤ 1، فهي مرتبة — نعود بها."}
              </li>
              {"\n                        "}
              <li>
                {"نقسم المصفوفة إلى نصفين متساويين."}
              </li>
              {"\n                        "}
              <li>
                {"نطبق الخوارزمية تكراريًا على كل نصف."}
              </li>
              {"\n                        "}
              <li>
                {"ندمج النصفين المرتبين في مصفوفة واحدة مرتبة."}
              </li>
              {"\n                    "}
            </ol>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm rtl-code"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"mergeSort"}
            </span>
            {"(arr) {"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr.length ≤ 1) "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" arr;"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" mid = Math.floor(arr.length / 2);"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" left = arr.slice(0, mid);"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" right = arr.slice(mid);"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" merge(mergeSort(left), mergeSort(right));"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-amber-50 to-orange-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-amber-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {"٢. الترتيب السريع (Quick Sort)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {"\n                    خوارزمية ترتيب سريعة وفعالة تستخدم أيضاً استراتيجية فرق تسد. تختار الخوارزمية عنصراً محورياً (pivot) ثم تقسم المصفوفة إلى عناصر أصغر من المحور وعناصر أكبر منه، ثم ترتب كل قسم تكراريًا.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-amber-700 mb-2"}>
              {"خطوات الخوارزمية:"}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm"}>
              {"\n                        "}
              <li>
                {"نختار عنصراً محورياً (عادةً آخر عنصر أو أول عنصر)."}
              </li>
              {"\n                        "}
              <li>
                {"نقسم المصفوفة حول المحور: الأصغر على اليسار، الأكبر على اليمين."}
              </li>
              {"\n                        "}
              <li>
                {"نطبق الخوارزمية تكراريًا على القسمين الأيمن والأيسر."}
              </li>
              {"\n                        "}
              <li>
                {"ليست هناك حاجة لخطوة دمج — المصفوفة تُرتّب في المكان (in-place)."}
              </li>
              {"\n                    "}
            </ol>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"quickSort"}
            </span>
            {"(arr, low, high) {"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (low < high) {"}
            <br />
            {"\n                        "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" pi = partition(arr, low, high);"}
            <br />
            {"\n                        quickSort(arr, low, pi - 1);"}
            <br />
            {"\n                        quickSort(arr, pi + 1, high);"}
            <br />
            {"\n                      }"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"bg-gradient-to-l from-green-50 to-emerald-50 p-6 rounded-xl shadow-md mb-6 border-r-4 border-emerald-500"}>
          {"\n                "}
          <h3 className={"text-2xl font-bold text-gray-800 mb-3"}>
            {"٣. البحث الثنائي (Binary Search)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-3"}>
            {"\n                    خوارزمية فعالة للبحث في مصفوفة مرتبة. تقوم بتقسيم المصفوفة إلى نصفين في كل خطوة، ثم تبحث في النصف الذي يحتمل وجود العنصر المطلوب فيه. هذا يقلل مساحة البحث إلى النصف في كل خطوة.\n                "}
          </p>
          {"\n                "}
          <div className={"bg-white p-4 rounded-lg shadow-sm mb-3"}>
            {"\n                    "}
            <p className={"font-bold text-green-700 mb-2"}>
              {"خطوات الخوارزمية:"}
            </p>
            {"\n                    "}
            <ol className={"list-decimal list-inside space-y-1 text-gray-700 text-sm"}>
              {"\n                        "}
              <li>
                {"نحدد العنصر الأوسط في المصفوفة المرتبة."}
              </li>
              {"\n                        "}
              <li>
                {"إذا كان العنصر الأوسط هو المطلوب — نعيد موقعه."}
              </li>
              {"\n                        "}
              <li>
                {"إذا كان المطلوب أصغر — نبحث في النصف الأيسر."}
              </li>
              {"\n                        "}
              <li>
                {"إذا كان المطلوب أكبر — نبحث في النصف الأيمن."}
              </li>
              {"\n                        "}
              <li>
                {"نكرر حتى نجد العنصر أو يصبح نطاق البحث فارغاً."}
              </li>
              {"\n                    "}
            </ol>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm"} dir={"ltr"}>
            {"\n                    "}
            <span className={"text-purple-400"}>
              {"function"}
            </span>
            {" "}
            <span className={"text-yellow-300"}>
              {"binarySearch"}
            </span>
            {"(arr, target) {"}
            <br />
            {"\n                      "}
            <span className={"text-purple-400"}>
              {"let"}
            </span>
            {" left = 0, right = arr.length - 1;"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"while"}
            </span>
            {" (left ≤ right) {"}
            <br />
            {"\n                        "}
            <span className={"text-purple-400"}>
              {"const"}
            </span>
            {" mid = Math.floor((left + right) / 2);"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr[mid] === target) "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" mid;"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"if"}
            </span>
            {" (arr[mid] < target) left = mid + 1;"}
            <br />
            {"\n                        "}
            <span className={"text-gray-400"}>
              {"else"}
            </span>
            {" right = mid - 1;"}
            <br />
            {"\n                      }"}
            <br />
            {"\n                      "}
            <span className={"text-gray-400"}>
              {"return"}
            </span>
            {" -1;"}
            <br />
            {"\n                    }\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {"\n                تحليل التعقيد الحسابي\n            "}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {"الخوارزمية"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"أسوأ حالة"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"متوسط الحالة"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"أفضل حالة"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"المساحة"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Merge Sort"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Quick Sort"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(log n)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Binary Search"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(log n)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(1)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(1)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"Strassen (الضرب)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n^2.81)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n^2.81)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n^2.81)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(n²)"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-r-4 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-2"}>
            {"ملاحظة مهمة"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 text-sm"}>
            {"\n                    النجاح الأساسي لاستراتيجية فرق تسد هو في تقليل التعقيد الزمني من "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n²)"}
            </span>
            {" إلى "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(n log n)"}
            </span>
            {" في العديد من الحالات. هذا التحسن الهائل يجعل الخوارزميات مثل Merge Sort قادرة على ترتيب ملايين العناصر بكفاءة عالية. مفتاح النجاح هو اختيار طريقة التقسيم المناسبة وطريقة الدمج الفعالة.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-8"}>
        {"\n            "}
        <a href={"/algorithms/divide-conquer/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                انتقل إلى المحاكاة التفاعلية لـ Merge Sort\n            "}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n\n  \n"}
    </div>
  );
}
