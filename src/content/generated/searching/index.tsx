export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SEARCHING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزميات البحث "}
          <span className={"text-blue-600"}>
            {"(Searching Algorithms)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية البحث في البيانات: الخطي والثنائي\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                مفهوم خوارزميات البحث\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                خوارزميات البحث هي مجموعة من العمليات المنطقية التي تهدف إلى إيجاد عنصر معين (قيمة مستهدفة) داخل مجموعة من البيانات (مصفوفة). تُستخدم هذه الخوارزميات في كل تطبيقات الحاسوب تقريباً، بدءاً من محركات البحث على الإنترنت وصولاً إلى قواعد البيانات.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"لماذا نحتاج إلى خوارزميات بحث مختلفة؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700"}>
            {"\n                    تختلف خوارزميات البحث في سرعتها وكفاءتها حسب حجم البيانات وطريقة تنظيمها. بعضها يعمل على أي مصفوفة بغض النظر عن ترتيبها، بينما يحتاج البعض الآخر إلى مصفوفة مرتبة مسبقاً ولكنه أسرع بكثير في النتائج.\n                "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {"\n                أولاً: البحث المتتالي (Sequential / Linear Search)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"كيف يعمل؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    البحث المتتالي هو أبسط أنواع البحث. يقوم بمقارنة القيمة المستهدفة مع كل عنصر من عناصر المصفوفة واحداً تلو الآخر، بدءاً من العنصر الأول وحتى النهاية. إذا تم العثور على تطابق، يعيد الخوارزمية موقع العنصر (الفهرس). إذا انتهت المصفوفة دون تطابق، فهذا يعني أن العنصر غير موجود.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-semibold text-blue-700 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                خطوات الخوارزمية\n            "}
        </h3>
        {"\n\n            "}
        <div className={"list-none p-0"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"البدء من العنصر الأول"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        ابدأ من الفهرس "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"0"}
              </span>
              {" (أول عنصر في المصفوفة).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"المقارنة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        قارن العنصر الحالي مع القيمة المستهدفة. إذا تطابقا، تم العثور على العنصر ونعيد الفهرس الحالي.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"الانتقال إلى العنصر التالي"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        إذا لم يتطابق العنصر، انتقل إلى العنصر التالي في المصفوفة (زيادة الفهرس بمقدار 1).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"التكرار"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        كرر الخطوتين 2 و 3 حتى تجد العنصر أو تصل إلى نهاية المصفوفة.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"عدم العثور على العنصر"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        إذا وصلت إلى نهاية المصفوفة دون إيجاد تطابق، قم بإرجاع قيمة تدل على عدم وجود العنصر (عادة "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"-1"}
              </span>
              {").\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-3"}>
            {"تحليل التعقيد (Complexity Analysis)"}
          </h3>
          {"\n                "}
          <div className={"grid md:grid-cols-2 gap-4"}>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"التعقيد الزمني (Time Complexity)"}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-yellow-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"حيث n هو عدد العناصر في المصفوفة."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أفضل حالة (Best Case)"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"عندما يكون العنصر المطلوب في أول موقع (الفهرس 0)."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أسوأ حالة (Worst Case)"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"عندما يكون العنصر في آخر موقع أو غير موجود."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"حالة متوسطة (Average Case)"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"في المتوسط، نحتاج للبحث في نصف المصفوفة."}
              </p>
              {"\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}></path>
            {"\n                "}
          </svg>
          {"\n                ثانياً: البحث الثنائي (Binary Search)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
            {"شرط أساسي: مصفوفة مرتبة"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    "}
            <span className={"font-bold"}>
              {"لا يعمل البحث الثنائي إلا على مصفوفة مرتبة ترتيباً تصاعدياً"}
            </span>
            {" (أو تنازلياً). إذا كانت المصفوفة غير مرتبة، يجب ترتيبها أولاً قبل تطبيق البحث الثنائي. هذا هو الفرق الجوهري بينه وبين البحث المتتالي.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {"كيف يعمل؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    يعتمد البحث الثنائي على مبدأ \"فرّق تسد\" (Divide and Conquer). يقوم بتقسيم المصفوفة المرتبة إلى نصفين في كل خطوة، ومقارنة القيمة المستهدفة مع العنصر الموجود في منتصف المصفوفة. بناءً على المقارنة، يقرر تجاهل نصف المصفوفة بالكامل والاستمرار في النصف الآخر، مما يقلل مساحة البحث بشكل كبير في كل خطوة.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-2xl font-semibold text-green-700 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 10V3L4 14h7v7l9-11h-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                خطوات الخوارزمية\n            "}
        </h3>
        {"\n\n            "}
        <div className={"list-none p-0"}>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"تحديد الحدود"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        حدد مؤشرين: "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low"}
              </span>
              {" في بداية المصفوفة (الفهرس 0) و "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"high"}
              </span>
              {" في نهايتها (الفهرس "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"n-1"}
              </span>
              {").\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"حساب المنتصف"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        احسب منتصف المصفوفة: "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"mid = (low + high) / 2"}
              </span>
              {" (عادةً باستخدام قسمة صحيحة).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"المقارنة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        قارن العنصر في المنتصف "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"arr[mid]"}
              </span>
              {" مع القيمة المستهدفة:\n                    "}
            </p>
            {"\n                    "}
            <ul className={"list-disc list-inside mr-14 mt-2 space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {"إذا تطابقا ("}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] == target"}
                </span>
                {") ← تم العثور على العنصر، أعد "}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"mid"}
                </span>
                {"."}
              </li>
              {"\n                        "}
              <li>
                {"إذا كان الهدف أكبر ("}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] < target"}
                </span>
                {") ← ابحث في النصف الأيمن ("}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"low = mid + 1"}
                </span>
                {")."}
              </li>
              {"\n                        "}
              <li>
                {"إذا كان الهدف أصغر ("}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"arr[mid] > target"}
                </span>
                {") ← ابحث في النصف الأيسر ("}
                <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                  {"high = mid - 1"}
                </span>
                {")."}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"التكرار"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        كرر الخطوتين 2 و 3 طالما أن "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low <= high"}
              </span>
              {". في كل مرة يتقلص نطاق البحث إلى النصف.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"عدم العثور على العنصر"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        إذا أصبح "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"low > high"}
              </span>
              {" دون إيجاد تطابق، قم بإرجاع "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"-1"}
              </span>
              {" (العنصر غير موجود).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md mt-6 border-yellow-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-yellow-800 mb-3"}>
            {"تحليل التعقيد (Complexity Analysis)"}
          </h3>
          {"\n                "}
          <div className={"grid md:grid-cols-2 gap-4"}>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"التعقيد الزمني (Time Complexity)"}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-green-600"}>
                {"O(log n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"log"}
                <sub>
                  {"2"}
                </sub>
                {"(n) لأننا نقسم المصفوفة إلى نصفين في كل مرة."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أفضل حالة (Best Case)"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"عندما يكون العنصر المطلوب في منتصف المصفوفة بالضبط."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أسوأ حالة (Worst Case)"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(log n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"عندما يكون العنصر في أقصى طرف أو غير موجود."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"المتطلب الأساسي"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"مصفوفة مرتبة"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"يجب أن تكون المصفوفة مرتبة ترتيباً تصاعدياً."}
              </p>
              {"\n                    "}
            </div>
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة بين خوارزميتي البحث\n            "}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden"}>
            <thead>
              <tr className={"bg-indigo-700 text-white"}>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {"المعيار"}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {"البحث المتتالي (Linear)"}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {"البحث الثنائي (Binary)"}
                </th>
              </tr>
            </thead>
            <tbody className={"divide-y divide-gray-200"}>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"التعقيد الزمني"}
                </td>
                <td className={"p-4"}>
                  {"\n                                "}
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n)"}
                  </span>
                  {"\n                            "}
                </td>
                <td className={"p-4"}>
                  {"\n                                "}
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(log n)"}
                  </span>
                  {"\n                            "}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"ترتيب المصفوفة"}
                </td>
                <td className={"p-4"}>
                  {"غير مطلوب (يعمل على أي مصفوفة)"}
                </td>
                <td className={"p-4"}>
                  {"مطلوب (مصفوفة مرتبة تصاعدياً)"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"طريقة العمل"}
                </td>
                <td className={"p-4"}>
                  {"مسح تسلسلي من البداية للنهاية"}
                </td>
                <td className={"p-4"}>
                  {"تقسيم المصفوفة إلى نصفين في كل خطوة"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"الأداء مع البيانات الكبيرة"}
                </td>
                <td className={"p-4"}>
                  {"ضعيف (يزداد الوقت خطياً)"}
                </td>
                <td className={"p-4"}>
                  {"ممتاز (يزداد الوقت لوغاريتمياً)"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"سهولة التطبيق"}
                </td>
                <td className={"p-4"}>
                  {"بسيط جداً"}
                </td>
                <td className={"p-4"}>
                  {"متوسط (أكثر تعقيداً)"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"الاستخدام الأمثل"}
                </td>
                <td className={"p-4"}>
                  {"المصفوفات الصغيرة أو غير المرتبة"}
                </td>
                <td className={"p-4"}>
                  {"المصفوفات الكبيرة والمرتبة"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-12"}>
        {"\n            "}
        <a href={"/algorithms/searching/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2 mb-1"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
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
    {"\n\n    \n\n\n\n  \n"}
    </div>
  );
}
