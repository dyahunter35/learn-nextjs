export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n  \n    \n    \n\n  \n\n  "}
    <main className={"container mx-auto px-4 py-8 max-w-4xl"}>
      {"\n\n    "}
      <div className={"text-center mb-10"}>
        {"\n      "}
        <h1 className={"text-4xl font-bold text-indigo-900 mb-3"}>
          {"التراجع "}
          <span className={"text-indigo-500"}>
            {"(Backtracking)"}
          </span>
        </h1>
        {"\n      "}
        <p className={"text-gray-600 text-lg max-w-2xl mx-auto"}>
          {"خوارزمية ذكية لحل المشكلات من خلال تجربة الحلول بشكل تدريجي والتراجع عند الوصول إلى طريق مسدود"}
        </p>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"💡"}
          </span>
          {" المفهوم\n      "}
        </h2>
        {"\n      "}
        <p className={"text-gray-700 leading-8 mb-3"}>
          {"\n        "}
          <strong>
            {"التراجع (Backtracking)"}
          </strong>
          {" هو أسلوب لحل المشكلات يعتمد على البحث المنهجي في جميع الحلول الممكنة. \n        تقوم الخوارزمية ببناء الحل بشكل تدريجي (خطوة بخطوة)، وعندما تكتشف أن المسار الحالي لا يؤدي إلى حل صحيح، \n        "}
          <strong>
            {"تتراجع"}
          </strong>
          {" إلى الخطوة السابقة وتجرب مساراً آخر.\n      "}
        </p>
        {"\n      "}
        <p className={"text-gray-700 leading-8"}>
          {"\n        يمكن تشبيه ذلك بمحاولة الخروج من متاهة: تسلك ممراً، وعندما تصل إلى طريق مسدود، تعود أدراجك إلى آخر مفترق وتجرب ممراً آخر.\n      "}
        </p>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"⚙️"}
          </span>
          {" كيف يعمل؟\n      "}
        </h2>
        {"\n      "}
        <div className={"grid md:grid-cols-2 gap-6"}>
          {"\n        "}
          <div>
            {"\n          "}
            <ol className={"space-y-3 text-gray-700 leading-8"}>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {"١"}
                </span>
                <span>
                  <strong>
                    {"الاختيار:"}
                  </strong>
                  {" اختر خطوة مرشحة لبناء الحل (مثل وضع ملكة في مربع معين)."}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {"٢"}
                </span>
                <span>
                  <strong>
                    {"التحقق:"}
                  </strong>
                  {" تأكد أن الخطوة لا تنتهك قيود المشكلة."}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {"٣"}
                </span>
                <span>
                  <strong>
                    {"التقدم:"}
                  </strong>
                  {" إذا كانت الخطوة صحيحة، أضفها إلى الحل وانتقل للخطوة التالية."}
                </span>
              </li>
              {"\n            "}
              <li className={"flex gap-3"}>
                <span className={"bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-1"}>
                  {"٤"}
                </span>
                <span>
                  <strong>
                    {"التراجع:"}
                  </strong>
                  {" إذا كانت الخطوة خاطئة أو وصلت إلى طريق مسدود، تراجع إلى الخطوة السابقة وجرب بديلاً."}
                </span>
              </li>
              {"\n          "}
            </ol>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"bg-indigo-50 rounded-xl p-5 flex items-center justify-center"}>
            {"\n          "}
            <div className={"text-center"}>
              {"\n            "}
              <div className={"text-5xl mb-3"}>
                {"🔄"}
              </div>
              {"\n            "}
              <p className={"text-gray-700 font-medium"}>
                {"\"جرب، تحقق، تقدم، تراجع\""}
              </p>
              {"\n            "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {"هذا هو لب خوارزمية التراجع"}
              </p>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"📋"}
          </span>
          {" أمثلة تطبيقية\n      "}
        </h2>
        {"\n      "}
        <div className={"grid md:grid-cols-3 gap-5"}>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"👑"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {"مسألة N-Queens"}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {"وضع N من الملكات على رقعة N×N بحيث لا تعتدي أي ملكة على الأخرى. تستخدم الخوارزمية التراجع لتجربة وضع الملكات صفاً صفاً."}
            </p>
            {"\n          "}
            <a href={"/algorithms/backtracking/simulation"} className={"inline-block mt-3 text-indigo-600 font-medium text-sm hover:text-indigo-800"}>
              {"جرب المحاكاة →"}
            </a>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"🧩"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {"حل المتاهات"}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {"إيجاد مسار من البداية إلى النهاية في متاهة. تجرب الخوارزمية كل اتجاه وعند الوصول إلى طريق مسدود تتراجع."}
            </p>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"border border-indigo-100 rounded-xl p-5 text-center hover:shadow-md transition"}>
            {"\n          "}
            <div className={"example-icon mb-2"}>
              {"🔢"}
            </div>
            {"\n          "}
            <h3 className={"font-bold text-lg text-indigo-700 mb-2"}>
              {"حل Sudoku"}
            </h3>
            {"\n          "}
            <p className={"text-gray-600 text-sm leading-7"}>
              {"ملء شبكة Sudoku بالأرقام من 1-9 مع تجربة الأرقام الممكنة والتراجع عند اكتشاف خطأ."}
            </p>
            {"\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"⚡"}
          </span>
          {" الفرق بين التراجع والقوة العمياء\n      "}
        </h2>
        {"\n      "}
        <div className={"overflow-x-auto"}>
          {"\n        "}
          <table className={"w-full text-right border-collapse"}>
            <thead>
              <tr className={"bg-indigo-100"}>
                <th className={"p-3 border border-indigo-200 font-bold"}>
                  {"المقارنة"}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-green-700"}>
                  {"التراجع (Backtracking)"}
                </th>
                <th className={"p-3 border border-indigo-200 font-bold text-red-700"}>
                  {"القوة العمياء (Brute Force)"}
                </th>
              </tr>
            </thead>
            <tbody className={"text-gray-700"}>
              <tr>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {"الأسلوب"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"يبني الحل تدريجياً ويتراجع عند الفشل"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"يجرب جميع الاحتمالات دون تمييز"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {"الكفاءة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"أسرع بكثير - يستبعد المسارات المستحيلة مبكراً"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"بطيء - يجرب كل شيء حتى النهاية"}
                </td>
              </tr>
              <tr>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {"الذاكرة"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"أقل (يتتبع المسار الحالي فقط)"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"أكثر (يخزن جميع الاحتمالات)"}
                </td>
              </tr>
              <tr className={"bg-gray-50"}>
                <td className={"p-3 border border-gray-200 font-medium"}>
                  {"مثال (4-Queens)"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"يختبر ~٢٥ احتمالاً فقط"}
                </td>
                <td className={"p-3 border border-gray-200"}>
                  {"يختبر جميع الـ ٢٥٦ احتمالاً"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"section-card"}>
        {"\n      "}
        <h2 className={"text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2"}>
          {"\n        "}
          <span className={"text-3xl"}>
            {"🌐"}
          </span>
          {" التطبيقات\n      "}
        </h2>
        {"\n      "}
        <div className={"grid sm:grid-cols-2 gap-4 text-gray-700 leading-8"}>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"👑"}
            </span>
            {"\n          "}
            <span>
              {"مسألة N-Queens و N-Knights"}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🧩"}
            </span>
            {"\n          "}
            <span>
              {"حل الألغاز مثل Sudoku و Crossword"}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"📡"}
            </span>
            {"\n          "}
            <span>
              {"تلوين الخرائط (Graph Coloring)"}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🧳"}
            </span>
            {"\n          "}
            <span>
              {"مسألة حقيبة السفر (Knapsack)"}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"🔗"}
            </span>
            {"\n          "}
            <span>
              {"إيجاد دورات هاميلتون (Hamiltonian Cycles)"}
            </span>
            {"\n        "}
          </div>
          {"\n        "}
          <div className={"flex items-center gap-3 bg-gray-50 rounded-xl p-4"}>
            {"\n          "}
            <span className={"text-2xl"}>
              {"📊"}
            </span>
            {"\n          "}
            <span>
              {"تحليل التركيبات والتوافيق"}
            </span>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"text-center my-10"}>
        {"\n      "}
        <a href={"/algorithms/backtracking/simulation"} className={"inline-block gradient-head text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"}>
          {"\n        🚀 جرب محاكاة N-Queens التفاعلية\n      "}
        </a>
        {"\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  \n\n  \n"}
    </div>
  );
}
