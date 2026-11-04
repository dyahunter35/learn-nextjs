export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"STRING MATCHING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزميات مطابقة السلاسل النصية "}
          <span className={"text-blue-600"}>
            {"(String Matching)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية البحث عن نمط داخل نص: الخوارزمية البسيطة وخوارزمية KMP\n            "}
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
          {"\n                مفهوم مطابقة السلاسل النصية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                مطابقة السلاسل النصية (String Matching) هي إحدى المشكلات الأساسية في علم الحاسوب، حيث تهدف إلى إيجاد جميع مواضع ظهور نمط (Pattern) معين داخل نص (Text) معين. تُستخدم هذه الخوارزميات في محركات البحث، معالجة النصوص، تحليل الجينات، وأنظمة الأمن السيبراني.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"مثال توضيحي"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    إذا كان لدينا النص "}
            <code className={"bg-gray-200 px-2 py-0.5 rounded font-mono ltr-text"}>
              {"\"ABABDABACDABABCABAB\""}
            </code>
            {" ونريد إيجاد النمط "}
            <code className={"bg-gray-200 px-2 py-0.5 rounded font-mono ltr-text"}>
              {"\"ABABCABAB\""}
            </code>
            {"، فإن الخوارزمية تقوم بمقارنة النمط مع كل موقع محتمل في النص لتحديد أماكن التطابق.\n                "}
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
          {"\n                أولاً: خوارزمية البحث البسيط (Naive String Matching)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"كيف تعمل؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    خوارزمية البحث البسيط هي أبسط طرق مطابقة السلاسل. تقوم بتحريك النمط بمقدار موضع واحد في كل خطوة، ومقارنة جميع أحرف النمط مع الحروف المقابلة في النص. إذا تطابقت جميع الأحرف، يتم تسجيل الموقع. وإذا حدث عدم تطابق، ينتقل النمط إلى الموضع التالي.\n                "}
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
              {"محاذاة النمط"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        ضع النمط في بداية النص بحيث يكون الحرف الأول من النمط محاذياً للحرف الأول من النص (الموضع "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"0"}
              </span>
              {").\n                    "}
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
              {"\n                        قارن أحرف النمط مع الحروف المقابلة في النص واحداً تلو الآخر من اليسار إلى اليمين.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"تسجيل المطابقة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        إذا تطابقت جميع الأحرف، قم بتسجيل الموضع الحالي كموقع للعثور على النمط.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800"}>
              {"الإزاحة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        إذا حدث عدم تطابق أو تم العثور على النمط، قم بإزاحة النمط بمقدار موضع واحد إلى اليمين وكرر المقارنة.\n                    "}
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
              {"\n                        كرر الخطوات السابقة حتى يصل النمط إلى نهاية النص (الموضع "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"n - m"}
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
                {"التعقيد الزمني"}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-yellow-600"}>
                {"O((n-m+1) × m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"في أسوأ الحالات، نحتاج لمقارنة كل حرف."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أفضل حالة"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"عندما لا يتطابق الحرف الأول من النمط مع معظم المواضع."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أسوأ حالة"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-red-600"}>
                {"O(n × m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"مثلاً: النص = \"AAAAAA...\" والنمط = \"AAA...B\"."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"التعقيد المكاني"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(1)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"لا يحتاج لذاكرة إضافية."}
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
          {"\n                ثانياً: خوارزمية KMP (Knuth-Morris-Pratt)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-red-50 p-5 rounded-lg shadow-md mb-6 concept-card border-red-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-red-800 mb-3"}>
            {"لماذا KMP؟"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    خوارزمية البحث البسيط تعاني من مشكلة كبيرة: عند حدوث عدم تطابق، تعيد فحص أحكام سبق مقارنتها. خوارزمية KMP تحل هذه المشكلة باستخدام معلومات عن النمط نفسه لتجنب إعادة المقارنات غير الضرورية، مما يجعلها أكثر كفاءة خاصة مع النصوص الكبيرة.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md mb-6 concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {"الفكرة الأساسية"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 leading-loose"}>
            {"\n                    تستخدم KMP "}
            <strong>
              {"جدول البادئات (Prefix Table / π array)"}
            </strong>
            {" لتحديد عدد الأحرف التي يمكن تخطيها عند حدوث عدم تطابق. بدلاً من إزاحة النمط بمقدار موضع واحد فقط (كما في الخوارزمية البسيطة)، يمكن لـ KMP إزاحة النمط بأكثر من موضع بناءً على البادئات واللواحق المتطابقة داخل النمط نفسه.\n                "}
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
              {"بناء جدول البادئات"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        قم بإنشاء جدول البادئات (π) للنمط. كل خلية "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"π[i]"}
              </span>
              {" تخزن طول أطول بادئة حقيقية في النمط[0..i] تساوي لاحقة حقيقية في نفس المقطع.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"المقارنة مع التخطي"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        ابدأ بمقارنة النمط مع النص. عند حدوث تطابق، استمر. عند حدوث عدم تطابق عند النمط[j]، استخدم "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j = π[j-1]"}
              </span>
              {" بدلاً من إعادة تعيين j إلى الصفر.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"تجنب إعادة المقارنة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        مؤشر النص (i) لا يتراجع أبداً. فقط مؤشر النمط (j) هو الذي يتغير بناءً على جدول البادئات، مما يضمن أن كل حرف من النص يُقرأ مرة واحدة فقط.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800"}>
              {"تسجيل المطابقة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        عندما يصبح "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j == m"}
              </span>
              {" (طول النمط)، تم العثور على النمط عند الموضع "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"i - j"}
              </span>
              {". ثم قم بتعيين "}
              <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                {"j = π[j-1]"}
              </span>
              {" للبحث عن المطابقات التالية.\n                    "}
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
                {"التعقيد الزمني"}
              </p>
              {"\n                        "}
              <p className={"text-2xl font-mono text-center mt-2 text-green-600"}>
                {"O(n + m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"خطي: n + m (نص + نمط)."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"التعقيد المكاني"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-amber-600"}>
                {"O(m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"لتخزين جدول البادئات (بحجم النمط)."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أفضل حالة"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"حتى مع أفضل الحالات، لا يقل عن O(n)."}
              </p>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"bg-white p-4 rounded-lg shadow border border-yellow-300"}>
              {"\n                        "}
              <p className={"font-bold text-yellow-700"}>
                {"أسوأ حالة"}
              </p>
              {"\n                        "}
              <p className={"text-lg text-center mt-2 text-green-600"}>
                {"O(n + m)"}
              </p>
              {"\n                        "}
              <p className={"text-sm text-gray-600 mt-1"}>
                {"يظل خطياً حتى في أسوأ الحالات."}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n                "}
          </svg>
          {"\n                جدول البادئات (Prefix Table / π array)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                جدول البادئات هو جوهر خوارزمية KMP. لكل موقع i في النمط، يخزن π[i] طول أطول بادئة حقيقية للمقطع pattern[0..i] والتي تساوي لاحقة حقيقية لهذا المقطع.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md mb-4 concept-card border-indigo-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-indigo-800 mb-3"}>
            {"مثال: حساب π للنمط \"ABABCABAB\""}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden"}>
              <thead>
                <tr className={"bg-indigo-700 text-white"}>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"i"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"0"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"1"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"2"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"3"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"4"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"5"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"6"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"7"}
                  </th>
                  <th className={"p-3 text-center border-b-2 border-indigo-800"}>
                    {"8"}
                  </th>
                </tr>
              </thead>
              <tbody className={"divide-y divide-gray-200"}>
                <tr className={"hover:bg-gray-50"}>
                  <td className={"p-3 font-bold"}>
                    {"Pattern[i]"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"C"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"A"}
                  </td>
                  <td className={"p-3 text-center font-mono"}>
                    {"B"}
                  </td>
                </tr>
                <tr className={"hover:bg-gray-50 bg-indigo-50"}>
                  <td className={"p-3 font-bold"}>
                    {"π[i]"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"2"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"0"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"1"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"2"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"3"}
                  </td>
                  <td className={"p-3 text-center font-mono text-indigo-600 font-bold"}>
                    {"4"}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path>
            {"\n                "}
          </svg>
          {"\n                التطبيقات (Applications)\n            "}
        </h2>
        {"\n            "}
        <div className={"grid md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {"محركات البحث"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {"البحث عن كلمة أو عبارة داخل صفحات الويب والمستندات الضخمة."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {"تحليل الجينات"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {"البحث عن تسلسلات معينة من الحمض النووي (DNA) داخل سلاسل جينية طويلة."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {"معالجة النصوص"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {"أمر find في أنظمة التشغيل، ميزة البحث والاستبدال في محررات النصوص."}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-white p-5 rounded-lg shadow-md border border-gray-200"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-gray-800 mb-2"}>
              {"الأمن السيبراني"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-600 text-sm leading-relaxed"}>
              {"كشف التواقيع في أنظمة كشف الاختراق (IDS) وتحليل حركة الشبكة."}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                مقارنة الأداء\n            "}
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
                  {"البحث البسيط (Naive)"}
                </th>
                <th className={"p-4 text-right border-b-2 border-indigo-800"}>
                  {"خوارزمية KMP"}
                </th>
              </tr>
            </thead>
            <tbody className={"divide-y divide-gray-200"}>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"التعقيد الزمني"}
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n × m)"}
                  </span>
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(n + m)"}
                  </span>
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"التعقيد المكاني"}
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(1)"}
                  </span>
                </td>
                <td className={"p-4"}>
                  <span className={"inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-mono"}>
                    {"O(m)"}
                  </span>
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"إعادة مقارنة الأحرف"}
                </td>
                <td className={"p-4"}>
                  {"نعم — تعيد مقارنة أحرف سبق فحصها"}
                </td>
                <td className={"p-4"}>
                  {"لا — تقرأ كل حرف مرة واحدة فقط"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"استخدام ذاكرة إضافية"}
                </td>
                <td className={"p-4"}>
                  {"لا يحتاج"}
                </td>
                <td className={"p-4"}>
                  {"يحتاج لجدول البادئات"}
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
                  {"متوسط (يتطلب فهم جدول البادئات)"}
                </td>
              </tr>
              <tr className={"hover:bg-gray-50"}>
                <td className={"p-4 font-semibold text-gray-800"}>
                  {"الأداء مع النصوص الكبيرة"}
                </td>
                <td className={"p-4"}>
                  {"ضعيف (يزداد الوقت بشكل مضاعف)"}
                </td>
                <td className={"p-4"}>
                  {"ممتاز (يزداد الوقت خطياً)"}
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
        <a href={"/algorithms/string-matching/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-xl"}>
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
    {"\n\n    \n\n  \n"}
    </div>
  );
}
