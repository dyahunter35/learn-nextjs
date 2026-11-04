export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 font-sans">
    {"\n\n  "}
    {"\n  \n    \n    \n\n  "}
    {"\n  \n\n  "}
    {"\n  "}
    <main className={"max-w-4xl mx-auto px-4 py-8"}>
      {"\n\n    "}
      <h1 className={"text-3xl font-bold text-indigo-900 mb-6"}>
        {"التجزئة (Hashing)"}
      </h1>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {"\n        المفهوم\n      "}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {"\n        التجزئة (بالإنجليزية: Hashing) هي عملية تحويل بيانات ذات حجم عشوائي إلى قيمة ذات حجم ثابت باستخدام دالة رياضية تُسمى دالة التجزئة (Hash Function). تُستخدم هذه التقنية على نطاق واسع في علوم الحاسوب لتسريع عمليات البحث والإدراج والحذف.\n      "}
        </p>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {"\n        الفكرة الأساسية هي تعيين كل مفتاح (Key) إلى موقع في مصفوفة (Bucket Array) باستخدام دالة التجزئة، مما يسمح بالوصول المباشر إلى البيانات دون الحاجة إلى البحث الخطي.\n      "}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {"\n        دوال التجزئة (Hash Functions)\n      "}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {"\n        دالة التجزئة هي دالة رياضية تأخذ مفتاحاً وتُرجع له فهرساً في جدول التجزئة. من أبسط دوال التجزئة وأكثرها شيوعاً:\n      "}
        </p>
        {"\n      "}
        <ul className={"list-disc list-inside text-gray-700 leading-8 mr-4 mb-3 space-y-1"}>
          {"\n        "}
          <li>
            <strong>
              {"Modulo (mod):"}
            </strong>
            {" "}
            <code className={"bg-gray-100 px-2 py-0.5 rounded text-indigo-700"}>
              {"hash(key) = key % table_size"}
            </code>
            {" — الأكثر استخداماً للقيم الصحيحة."}
          </li>
          {"\n        "}
          <li>
            <strong>
              {"الضرب (Multiplication):"}
            </strong>
            {" "}
            <code className={"bg-gray-100 px-2 py-0.5 rounded text-indigo-700"}>
              {"hash(key) = floor(table_size * (key * A % 1))"}
            </code>
          </li>
          {"\n        "}
          <li>
            <strong>
              {"المتعددة (Polynomial):"}
            </strong>
            {" للسلاسل النصية، تُحسب كمجموع مرجح لقيم الأحرف."}
          </li>
          {"\n      "}
        </ul>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {"\n        اختيار دالة تجزئة جيدة يُقلل من التصادمات ويُوزع المفاتيح بالتساوي عبر الجدول.\n      "}
        </p>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {"\n        معالجة التصادمات (Collision Resolution)\n      "}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {"\n        يحدث التصادم (Collision) عندما يُعطي مفتاحان مختلفان نفس قيمة التجزئة (أي نفس فهرس الجدول). هناك عدة استراتيجيات لمعالجة ذلك:\n      "}
        </p>
        {"\n      "}
        <div className={"grid md:grid-cols-2 gap-4 mb-3"}>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {"التسلسل (Chaining)"}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7"}>
              {"كل خلية في الجدول تحتوي على قائمة مرتبطة (Linked List). عند حدوث تصادم، يُضاف المفتاح الجديد إلى نهاية القائمة في نفس الخلية. هذه هي الطريقة المستخدمة في المحاكاة التفاعلية."}
            </p>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-lg p-4 border border-indigo-100"}>
            {"\n          "}
            <h3 className={"font-bold text-indigo-800 mb-2"}>
              {"العنونة المفتوحة (Open Addressing)"}
            </h3>
            {"\n          "}
            <p className={"text-gray-700 text-sm leading-7"}>
              {"عند حدوث تصادم، يتم البحث عن خلية فارغة أخرى في الجدول باستخدام تقنيات مثل التحقيق الخطي (Linear Probing) أو التحقيق التربيعي (Quadratic Probing)."}
            </p>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <section className={"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"}>
        {"\n      "}
        <h2 className={"text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"w-2 h-8 bg-indigo-600 rounded inline-block"}></span>
          {"\n        التطبيقات (Applications)\n      "}
        </h2>
        {"\n      "}
        <ul className={"list-disc list-inside text-gray-700 leading-8 mr-4 space-y-2"}>
          {"\n        "}
          <li>
            <strong>
              {"قواعد البيانات:"}
            </strong>
            {" الفهرسة (Indexing) لتسريع استعلامات البحث."}
          </li>
          {"\n        "}
          <li>
            <strong>
              {"الذاكرة المخبأة (Caching):"}
            </strong>
            {" تخزين البيانات المؤقتة للوصول السريع إليها."}
          </li>
          {"\n        "}
          <li>
            <strong>
              {"جداول الرموز (Symbol Tables):"}
            </strong>
            {" في المترجمات (Compilers) لتخزين أسماء المتغيرات والدوال."}
          </li>
          {"\n        "}
          <li>
            <strong>
              {"التواقيع الرقمية:"}
            </strong>
            {" خوارزميات مثل SHA وMD5 للتحقق من سلامة البيانات."}
          </li>
          {"\n        "}
          <li>
            <strong>
              {"تطبيقات الواقع:"}
            </strong>
            {" عناوين URLs المختصرة، والبحث عن الملفات المكررة."}
          </li>
          {"\n      "}
        </ul>
        {"\n    "}
      </section>
      {"\n\n    "}
      {"\n    "}
      <div className={"text-center py-8"}>
        {"\n      "}
        <a href={"/algorithms/hashing/simulation"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
          {"\n        "}
          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
          </svg>
          {"\n        جرب المحاكاة التفاعلية\n      "}
        </a>
        {"\n      "}
        <a href={"/algorithms/hashing/code"} className={"inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"}>
          {"\n        "}
          <svg className={"w-5 h-5"} fill={"none"} stroke={"currentColor"} viewBox={"0 0 24 24"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
          </svg>
          {"\n        الكود البرمجي\n      "}
        </a>
        {"\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  "}
    {"\n  \n\n  \n"}
    </div>
  );
}
