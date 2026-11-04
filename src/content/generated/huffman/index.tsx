export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n    \n\n    "}
    {"\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-emerald-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"HUFFMAN CODING"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزمية هوفمان "}
          <span className={"text-emerald-600"}>
            {"(Huffman Coding)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية ضغط البيانات باستخدام ترميز هوفمان\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n        \n        "}
      {"\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 14v1a3 3 0 003 3h4m-4-18H9a3 3 0 00-3 3v11a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3z"}></path>
            {"\n                "}
          </svg>
          {"\n                القوانين الرياضية لتقييم كفاءة الضغط\n            "}
        </h2>
        {"\n\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تعتمد كفاءة ترميز هوفمان على مقياسين رئيسيين لملف الإخراج النهائي:\n            "}
        </p>
        {"\n            \n            "}
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6 concept-card border-blue-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"1. إجمالي عدد البتات المضغوطة (Total Bits)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                    يمثل هذا القانون التكلفة الكلية للملف بعد ترميزه بالبتات. وهو مجموع حاصل ضرب تكرار كل حرف في طول رمزه الثنائي المخصص له:\n                "}
          </p>
          {"\n                "}
          <div className={"ltr-text text-xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    $$ \\text{Total Bits} = \\sum_{i=1}^{n} (\\text{Frequency}_i \\times \\text{Code Length}_i) $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-blue-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"Total Bits"}
            </span>
            {": إجمالي عدد البتات في الملف المضغوط.\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"n"}
            </span>
            {": عدد الأحرف الفريدة في النص.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n            \n            "}
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md concept-card border-green-400"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-green-800 mb-3"}>
            {"2. متوسط طول الرمز (Average Code Length)"}
          </h3>
          {"\n                "}
          <p className={"text-gray-700 mb-3"}>
            {"\n                    يشير هذا المقياس إلى متوسط عدد البتات اللازمة لتمثيل كل حرف في الملف المضغوط. كلما كانت هذه القيمة أصغر، كانت كفاءة الضغط أفضل:\n                "}
          </p>
          {"\n                "}
          <div className={"ltr-text text-xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto"}>
            {"\n                    $$ L_{avg} = \\frac{\\text{Total Bits}}{\\text{Total Characters}} = \\frac{\\sum (\\text{Frequency}_i \\times \\text{Code Length}_i)}{N} $$\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-green-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"L_{avg}"}
            </span>
            {": متوسط طول الرمز (بت/حرف).\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"N"}
            </span>
            {": العدد الكلي للأحرف في النص الأصلي.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M9 9l4-9"}></path>
            {"\n                "}
          </svg>
          {"\n                الخطوات التفصيلية لخوارزمية بناء شجرة هوفمان\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 mb-4"}>
          {"\n                تعتمد الخوارزمية على بناء الشجرة من الأسفل إلى الأعلى (Bottom-Up Approach)، حيث يتم دمج العقد ذات التكرار الأقل باستمرار.\n            "}
        </p>
        {"\n            \n            "}
        <div className={"list-none p-0 counter-reset:step-counter"}>
          {"\n                \n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"حساب التكرارات (Frequency Calculation)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        قم بحساب عدد مرات تكرار كل حرف فريد (ورقة) موجود في النص المدخل. هذا التكرار يمثل وزن (Weight) العقدة.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"بناء قائمة الانتظار (Priority Queue)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        أنشئ مجموعة من عقد هوفمان الأولية، حيث تمثل كل عقدة حرفاً ووزنه. يتم ترتيب هذه المجموعة بشكل تصاعدي بناءً على الوزن (التكرار).\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"التكوين التكراري للشجرة (Iterative Tree Construction)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        استمر في تكرار العملية التالية حتى تتبقى عقدة واحدة فقط (وهي جذر الشجرة النهائية):\n                        "}
              <ul className={"list-disc list-inside mr-6 mt-2 space-y-1"}>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {"الدمج:"}
                  </span>
                  {" اختر وازل العقدتين الأقل وزناً (أقل تكراراً) من القائمة."}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {"عقدة الأب:"}
                  </span>
                  {" ادمج هاتين العقدتين في عقدة أب جديدة (داخلية)."}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {"تحديد الوزن:"}
                  </span>
                  {" اجعل وزن عقدة الأب الجديدة مساوياً لمجموع أوزان العقدتين الفرعيتين."}
                </li>
                {"\n                            "}
                <li>
                  <span className={"font-bold"}>
                    {"إعادة الإدراج:"}
                  </span>
                  {" أعد عقدة الأب الجديدة إلى القائمة المرتبة مع الحفاظ على الترتيب التصاعدي."}
                </li>
                {"\n                        "}
              </ul>
              {"\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"step-item"}>
            {"\n                    "}
            <h3 className={"text-xl font-semibold text-amber-800"}>
              {"توليد رموز التشفير (Code Generation)"}
            </h3>
            {"\n                    "}
            <p className={"text-gray-700 mr-10"}>
              {"\n                        بعد اكتمال الشجرة (بقاء عقدة الجذر فقط)، يتم توليد رموز هوفمان بالانتقال من الجذر إلى كل عقدة ورقية:\n                        "}
              <ul className={"list-disc list-inside mr-6 mt-2 space-y-1"}>
                {"\n                            "}
                <li>
                  {"خصص البت "}
                  <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                    {"0"}
                  </span>
                  {" لكل فرع يتجه لليسار."}
                </li>
                {"\n                            "}
                <li>
                  {"خصص البت "}
                  <span className={"font-mono ltr-text bg-gray-200 p-1 rounded"}>
                    {"1"}
                  </span>
                  {" لكل فرع يتجه لليمين."}
                </li>
                {"\n                            "}
                <li>
                  {"سلسلة البتات المجمعة على طول المسار من الجذر إلى أي ورقة تمثل رمز هوفمان الفريد للحرف داخل تلك الورقة."}
                </li>
                {"\n                        "}
              </ul>
              {"\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-800 mb-4 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                المبدأ: علاقة التكرار بطول الرمز\n            "}
        </h2>
        {"\n             "}
        <blockquote className={"mt-4 p-4 bg-purple-100 border-r-4 border-purple-400 text-purple-800 font-semibold italic text-lg"}>
          {"\n                "}
          <p>
            {"\n                    يضمن المنهج التكراري لبناء الشجرة أن الرموز الأقل تكراراً هي التي يتم دفعها إلى أعمق مستويات الشجرة (الأوراق السفلية)، وبالتالي تحصل على **أطول رمز ثنائي (أكثر بتات)**. بينما تبقى الرموز الأعلى تكراراً قريبة من الجذر، فتحصل على **أقصر رمز ثنائي (أقل بتات)**.\n                "}
          </p>
          {"\n            "}
        </blockquote>
        {"\n        "}
      </section>
      {"\n    "}
    </div>
    {"\n    \n    \n\n    \n    \n    "}
    {"\n    \n  \n"}
    </div>
  );
}
