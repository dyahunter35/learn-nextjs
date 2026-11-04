export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"GRAPH ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزميات الرسوم البيانية "}
          <span className={"text-indigo-600"}>
            {"(Graph Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية البحث في الرسوم البيانية: BFS و DFS\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {"\n                مفهوم الرسوم البيانية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الرسم البياني (Graph) هو هيكل بيانات غير خطي يتكون من مجموعة من "}
          <strong>
            {"العقد (Vertices/Nodes)"}
          </strong>
          {" المتصلة عن طريق "}
          <strong>
            {"الحواف (Edges)"}
          </strong>
          {". يُستخدم لتمثيل العلاقات بين العناصر المختلفة، مثل شبكات التواصل الاجتماعي، خرائط الطرق، وشبكات الحاسوب.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"المكونات الأساسية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    "}
            <strong>
              {"العقدة (Vertex/Node):"}
            </strong>
            {" نقطة في الرسم البياني تمثل كياناً معيناً (مثل شخص، مدينة، أو صفحة ويب)."}
            <br />
            {"\n                    "}
            <strong>
              {"الحافة (Edge):"}
            </strong>
            {" خط يربط بين عقدتين ويعبر عن علاقة بينهما. يمكن أن تكون الحافة موجهة (بقيمة) أو غير موجهة (بدون قيمة).\n                "}
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
          {"\n                أنواع الرسوم البيانية\n            "}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {"رسم غير موجه (Undirected)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"الحواف ليس لها اتجاه — العلاقة متبادلة. مثال: علاقة الصداقة على فيسبوك. إذا كانت A متصلة بـ B، فإن B متصلة بـ A."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {"رسم موجه (Directed)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"الحواف لها اتجاه — العلاقة أحادية الاتجاه. مثال: علاقة المتابعة على تويتر. A تتابع B لا تعني بالضرورة أن B تتابع A."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2"}>
              {"رسم موزون (Weighted)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"كل حافة لها وزن (قيمة رقمية) تمثل التكلفة أو المسافة. مثال: خرائط الطرق حيث تمثل الأوزان المسافات بين المدن."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-rose-50 p-5 rounded-lg shadow-md border-rose-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-rose-800 mb-2"}>
              {"رسم غير موزون (Unweighted)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 text-sm"}>
              {"جميع الحواف متساوية في الأهمية — لا توجد أوزان. مثال: شبكة الأصدقاء حيث جميع العلاقات متساوية."}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {"\n                البحث بالعرض — BFS (Breadth-First Search)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزمية "}
          <strong>
            {"BFS"}
          </strong>
          {" تعبر الرسم البياني مستوىً بمستوى. تبدأ من عقدة محددة، ثم تزور جميع العقد المجاورة لها، ثم تنتقل إلى جيران هؤلاء الجيران، وهكذا. تستخدم "}
          <strong>
            {"طابور (Queue)"}
          </strong>
          {" لتتبع العقد التي تنتظر الزيارة.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-6 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"كيف تعمل BFS؟"}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {"ضع عقدة البداية في الطابور."}
            </li>
            {"\n                    "}
            <li>
              {"اسحب عقدة من مقدمة الطابور — هذه هي العقدة الحالية."}
            </li>
            {"\n                    "}
            <li>
              {"زر العقدة الحالية، ثم ضع جميع جيرانها غير المكتشفين في الطابور."}
            </li>
            {"\n                    "}
            <li>
              {"كرر الخطوتين ٢ و ٣ حتى يصبح الطابور فارغاً."}
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
            {"\n                    الزمن: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V + E)"}
            </span>
            {" حيث V عدد العقد و E عدد الحواف."}
            <br />
            {"\n                    المساحة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V)"}
            </span>
            {" في أسوأ الحالات (عندما تكون جميع العقد في الطابور).\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {"\n                البحث بالعمق — DFS (Depth-First Search)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزمية "}
          <strong>
            {"DFS"}
          </strong>
          {" تعبر الرسم البياني بالتعمق في المسار أولاً قبل الرجوع للخلف. تبدأ من عقدة محددة، ثم تتابع إلى أول جار غير مكتشف، وتستمر في التعمق حتى تصل إلى نهاية المسار، ثم تعود للخلف. تستخدم "}
          <strong>
            {"كومة (Stack)"}
          </strong>
          {" لتتبع العقد.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md mb-6 concept-card border-purple-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-purple-800 mb-3"}>
            {"كيف تعمل DFS؟"}
          </h3>
          {"\n                "}
          <ol className={"list-decimal list-inside text-gray-700 space-y-2"}>
            {"\n                    "}
            <li>
              {"ضع عقدة البداية في الكومة."}
            </li>
            {"\n                    "}
            <li>
              {"اسحب عقدة من أعلى الكومة — هذه هي العقدة الحالية."}
            </li>
            {"\n                    "}
            <li>
              {"زر العقدة الحالية، ثم ضع جميع جيرانها غير المكتشفين في الكومة."}
            </li>
            {"\n                    "}
            <li>
              {"كرر الخطوتين ٢ و ٣ حتى تصبح الكومة فارغة."}
            </li>
            {"\n                "}
          </ol>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-amber-800 mb-3"}>
            {"التعقيد الحسابي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    الزمن: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V + E)"}
            </span>
            {" — المساحة: "}
            <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
              {"O(V)"}
            </span>
            {" في أسوأ الحالات (عندما يكون الرسم البياني طويلاً وضيقاً).\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة بين BFS و DFS\n            "}
        </h2>
        {"\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-600 text-white"}>
                <th className={"p-3 border border-indigo-500"}>
                  {"المعيار"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"BFS"}
                </th>
                <th className={"p-3 border border-indigo-500"}>
                  {"DFS"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"هيكل البيانات"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"طابور (Queue)"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"كومة (Stack)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"استراتيجية البحث"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"بالعرض (مستوىً بمستوى)"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"بالعمق (مسار كامل ثم العودة)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"المساحة المستخدمة"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قد تكون كبيرة (عرض الرسم)"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"قد تكون صغيرة (عمق الرسم)"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"إيجاد أقصر مسار"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"نعم (في الرسوم غير الموزونة)"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"لا — يجد أي مسار"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"الاستخدام الأمثل"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"عندما يكون الهدف قريباً من البداية"}
                </td>
                <td className={"p-3 border border-gray-300"}>
                  {"عندما يكون الرسم البياني عميقاً"}
                </td>
              </tr>
              <tr className={"even:bg-gray-100"}>
                <td className={"p-3 border border-gray-300 font-bold"}>
                  {"التعقيد الزمني"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(V + E)"}
                </td>
                <td className={"p-3 border border-gray-300 ltr-text"}>
                  {"O(V + E)"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
            {"\n                "}
          </svg>
          {"\n                تطبيقات عملية\n            "}
        </h2>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {"تطبيقات BFS"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"إيجاد أقصر مسار في الخرائط (GPS)"}
              </li>
              {"\n                        "}
              <li>
                {"تحليل الشبكات الاجتماعية (درجات الصداقة)"}
              </li>
              {"\n                        "}
              <li>
                {"الزحف على الويب (Web Crawling)"}
              </li>
              {"\n                        "}
              <li>
                {"إيجاد المكونات المتصلة"}
              </li>
              {"\n                        "}
              <li>
                {"نظام توصية الأصدقاء"}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2"}>
              {"تطبيقات DFS"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm"}>
              {"\n                        "}
              <li>
                {"حل المتاهات والألغاز"}
              </li>
              {"\n                        "}
              <li>
                {"الكشف عن الدورات (Cycle Detection)"}
              </li>
              {"\n                        "}
              <li>
                {"الترتيب الطوبولوجي (Topological Sort)"}
              </li>
              {"\n                        "}
              <li>
                {"تحليل الروابط في صفحات الويب"}
              </li>
              {"\n                        "}
              <li>
                {"إيجاد الممرات في ألعاب الفيديو"}
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
        <a href={"/algorithms/graphs/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-150 transform hover:scale-105"}>
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
