export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-2 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-purple-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"CALCULATOR"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                الآلة الحاسبة العلمية "}
          <span className={"text-purple-600"}>
            {"(Scientific Calculator)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                آلة حاسبة علمية متكاملة مع واجهة تفاعلية\n            "}
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
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                مقدمة عن الآلات الحاسبة العلمية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الآلة الحاسبة العلمية هي أداة إلكترونية مصممة لإجراء العمليات الحسابية المتقدمة التي تتجاوز الجمع والطرح والضرب والقسمة. تدعم هذه الآلات الدوال المثلثية واللوغاريتمية والأسية، مما يجعلها أداة أساسية للطلاب والمهندسين والعلماء.\n            "}
        </p>
        {"\n            "}
        <div className={"bg-indigo-50 p-5 rounded-lg shadow-md border-r-4 border-indigo-400"}>
          {"\n                "}
          <p className={"text-indigo-800 font-semibold"}>
            {"\n                    تُستخدم الآلات الحاسبة العلمية في مجالات متعددة مثل الرياضيات، الفيزياء، الكيمياء، الهندسة، والعديد من التخصصات العلمية الأخرى.\n                "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {"\n                العمليات الأساسية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تشكل العمليات الحسابية الأساسية اللبنات الأولى لأي آلة حاسبة. إليك نظرة على كل عملية:\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-blue-600"}>
                {"+"}
              </span>
              {"\n                        الجمع (Addition)\n                    "}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        عملية الجمع هي أبسط العمليات الحسابية. تُستخدم لإضافة عددين أو أكثر للحصول على المجموع. مثال: 5 + 3 = 8\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-red-50 p-5 rounded-lg shadow-md border-red-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-red-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-red-600"}>
                {"-"}
              </span>
              {"\n                        الطرح (Subtraction)\n                    "}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        عملية الطرح تُستخدم لإيجاد الفرق بين عددين. مثال: 10 - 4 = 6\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-amber-600"}>
                {"×"}
              </span>
              {"\n                        الضرب (Multiplication)\n                    "}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        الضرب هو عملية حسابية تمثل الجمع المتكرر. مثال: 4 × 3 = 12\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-purple-800 mb-2 flex items-center"}>
              {"\n                        "}
              <span className={"ml-2 text-2xl font-bold text-purple-600"}>
                {"÷"}
              </span>
              {"\n                        القسمة (Division)\n                    "}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        القسمة هي عملية توزيع عدد على عدد آخر. مثال: 15 ÷ 3 = 5\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}></path>
            {"\n                "}
          </svg>
          {"\n                الدوال المثلثية (Trigonometric Functions)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                الدوال المثلثية هي دوال رياضية تربط زوايا المثلث بأطوال أضلاعه. تستخدم بشكل واسع في الهندسة والفيزياء.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
          {"\n                "}
          <div className={"bg-cyan-50 p-5 rounded-lg shadow-md border-cyan-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-cyan-800 mb-2"}>
              {"Sin (الجيب)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        دالة الجيب تُحسب نسبة طول الضلع المقابل للزاوية إلى طول الوتر في المثلث قائم الزاوية. مثال: sin(90°) = 1\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-teal-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-teal-800 mb-2"}>
              {"Cos (جيب التمام)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        دالة جيب التمام تُحسب نسبة طول الضلع المجاور للزاوية إلى طول الوتر. مثال: cos(0°) = 1\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md border-amber-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800 mb-2"}>
              {"Tan (الظل)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        دالة الظل تُحسب نسبة طول الضلع المقابل للزاوية إلى طول الضلع المجاور. tan(θ) = sin(θ) / cos(θ)\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                الدوال اللوغاريتمية (Logarithmic Functions)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                اللوغاريتمات هي العملية العكسية للأسس. تُستخدم في حل المعادلات الأسية وفي العديد من التطبيقات العلمية.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-lime-50 p-5 rounded-lg shadow-md border-lime-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-lime-800 mb-2"}>
              {"Log (اللوغاريتم العشري)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        اللوغاريتم العشري هو لوغاريتم للأساس 10. يُستخدم بكثرة في العلوم والهندسة. مثال: log(100) = 2 لأن 10² = 100\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-green-800 mb-2"}>
              {"Ln (اللوغاريتم الطبيعي)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        اللوغاريتم الطبيعي هو لوغاريتم للأساس e (حيث e ≈ 2.71828). يُستخدم في التفاضل والتكامل والنمذجة الرياضية. مثال: ln(e) = 1\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"}></path>
            {"\n                "}
          </svg>
          {"\n                الجذر التربيعي والقوى\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                عمليات الجذر التربيعي والقوى هي عمليات أساسية في الجبر والهندسة.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-orange-50 p-5 rounded-lg shadow-md border-orange-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-orange-800 mb-2"}>
              {"√ (الجذر التربيعي)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        الجذر التربيعي لعدد x هو العدد الذي إذا ضرب في نفسه يعطي x. مثال: √9 = 3 لأن 3 × 3 = 9\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-yellow-50 p-5 rounded-lg shadow-md border-yellow-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-yellow-800 mb-2"}>
              {"x² (التربيع)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        تربيع عدد يعني ضربه في نفسه. مثال: 5² = 5 × 5 = 25. وتوجد أيضاً عملية xʹ للأسس الأعلى.\n                    "}
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
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-violet-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}></path>
            {"\n                "}
          </svg>
          {"\n                ترتيب العمليات الحسابية (الأسبقية)\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                عند وجود عدة عمليات في تعبير رياضي واحد، يجب اتباع ترتيب معين يُعرف بقاعدة أسبقية العمليات الحسابية (PEMDAS/BODMAS):\n            "}
        </p>
        {"\n            "}
        <div className={"bg-violet-50 p-5 rounded-lg shadow-md border-violet-400"}>
          {"\n                "}
          <ul className={"space-y-2 mr-4"}>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {"١."}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {"الأقواس"}
                </span>
                {" (Parentheses) - يتم حساب ما داخل الأقواس أولاً."}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {"٢."}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {"الأسس"}
                </span>
                {" (Exponents) - مثل التربيع والتكعيب."}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {"٣."}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {"الضرب والقسمة"}
                </span>
                {" (Multiplication & Division) - من اليسار إلى اليمين."}
              </span>
              {"\n                    "}
            </li>
            {"\n                    "}
            <li className={"flex items-start"}>
              {"\n                        "}
              <span className={"font-bold text-violet-800 ml-2"}>
                {"٤."}
              </span>
              {"\n                        "}
              <span>
                <span className={"font-bold"}>
                  {"الجمع والطرح"}
                </span>
                {" (Addition & Subtraction) - من اليسار إلى اليمين."}
              </span>
              {"\n                    "}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"mt-4 bg-gray-100 p-4 rounded-lg shadow-inner"}>
          {"\n                "}
          <p className={"text-gray-700 font-mono text-center text-lg"}>
            {"\n                    3 + 5 × 2 = 3 + 10 = 13   (وليس 16، لأن الضرب له أسبقية أعلى)\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-sky-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 9l4-4 4 4m0 6l-4 4-4-4"}></path>
            {"\n                "}
          </svg>
          {"\n                كيفية استخدام الأقواس في التعبيرات الرياضية\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تُستخدم الأقواس لتحديد أولوية العمليات الحسابية وتجميع التعبيرات. يمكن استخدام الأقواس العادية () والأقواس المتداخلة للتعبيرات المعقدة.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          {"\n                "}
          <div className={"bg-sky-50 p-5 rounded-lg shadow-md border-sky-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-sky-800 mb-2"}>
              {"الأقواس العادية ()"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        تُستخدم لتحديد أي جزء من التعبير يجب حسابه أولاً. مثال: (2 + 3) × 4 = 5 × 4 = 20\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md border-blue-400"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-blue-800 mb-2"}>
              {"الأقواس المتداخلة"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700"}>
              {"\n                        يمكن وضع أقواس داخل أقواس للتعبيرات المعقدة. يحسب الأقواس الداخلية أولاً. مثال: ((2 + 3) × (4 - 1)) = 5 × 3 = 15\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 pt-8 border-t"}>
        {"\n            "}
        <a href={"/algorithms/calculator/code"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-xl"}>
          {"\n                انتقل إلى الآلة الحاسبة التفاعلية\n            "}
        </a>
        {"\n            "}
        <p className={"text-gray-500 mt-3 text-sm"}>
          {"\n                جرب بنفسك! استخدم الآلة الحاسبة التفاعلية لتطبيق ما تعلمته\n            "}
        </p>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n\n  \n"}
    </div>
  );
}
