export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"HUFFMAN CODING"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {"بناء شجرة هوفمان: طريقة الخطوات التفاعلية"}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {"أدخل نصاً بالأحرف الإنجليزية الصغيرة وشاهد خطوات بناء شجرة هوفمان خطوة بخطوة"}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"النص المدخل"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <textarea id={"textInput"} rows={3} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left text-lg char-display focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-300"} placeholder={"Enter English text here, only lowercase letters will be counted. Example: huffman coding is efficient..."}>
              {"\naabbbccdeeeeff"}
            </textarea>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"px-6 md:px-8 py-5 bg-gradient-to-l from-indigo-50 to-purple-50 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex flex-col sm:flex-row gap-4 items-center justify-between"}>
              {"\n              "}
              <p className={"text-sm text-gray-500"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4 inline ml-1 text-indigo-400"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {"\n                سيتم استخدام الأحرف الإنجليزية الصغيرة فقط\n              "}
              </p>
              {"\n              "}
              <button data-legacy-click={"initializeHuffman()"} className={"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"}>
                {"\n                "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                  "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                "}
                </svg>
                {"\n                بدء البناء خطوة بخطوة\n              "}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div id={"stepControls"} className={"hidden p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-amber-500 rounded-full"}></div>
              {"\n              "}
              <h2 id={"stepTitle"} className={"text-lg font-bold text-gray-800"}></h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100"}>
              {"\n              "}
              <div className={"flex justify-between items-center"}>
                {"\n                "}
                <button id={"prevBtn"} data-legacy-click={"prevStep()"} className={"flex items-center bg-white text-gray-700 py-2.5 px-5 rounded-lg font-semibold hover:bg-gray-50 transition duration-150 shadow-sm border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"} disabled={true}>
                  {"\n                  "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 ml-2"} viewBox={"0 0 20 20"} fill={"currentColor"}>
                    {"\n                    "}
                    <path fillRule={"evenodd"} d={"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"} clipRule={"evenodd"}></path>
                    {"\n                  "}
                  </svg>
                  {"\n                  السابق\n                "}
                </button>
                {"\n                "}
                <div id={"stepIndicator"} className={"text-lg font-bold text-indigo-600 bg-white px-5 py-2 rounded-lg shadow-sm border border-gray-100"}>
                  {"0 / 0"}
                </div>
                {"\n                "}
                <button id={"nextBtn"} data-legacy-click={"nextStep()"} className={"flex items-center bg-indigo-600 text-white py-2.5 px-5 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"}>
                  {"\n                  التالي\n                  "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 mr-2"} viewBox={"0 0 20 20"} fill={"currentColor"}>
                    {"\n                    "}
                    <path fillRule={"evenodd"} d={"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"} clipRule={"evenodd"}></path>
                    {"\n                  "}
                  </svg>
                  {"\n                "}
                </button>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-blue-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"جدول التكرارات المجمع"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
              {"\n              "}
              <table className={"w-full text-sm text-right text-gray-500"}>
                <thead className={"text-xs text-gray-700 uppercase bg-gray-50"}>
                  <tr>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {"المحتوى المدمج"}
                    </th>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {"التكرار"}
                    </th>
                    <th scope={"col"} className={"px-4 py-3 text-center font-bold"}>
                      {"النوع"}
                    </th>
                  </tr>
                </thead>
                <tbody id={"combinedTableBody"}>
                  <tr className={"bg-white border-b border-gray-100"}>
                    <td colSpan={3} className={"text-center py-8 text-gray-400"}>
                      {"ابدأ الخوارزمية لرؤية الجدول"}
                    </td>
                  </tr>
                </tbody>
              </table>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"التمثيل المرئي لشجرة هوفمان"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"treeVisualization"} className={"relative min-h-[300px] overflow-hidden border border-gray-200 rounded-xl bg-gray-50 p-4"}>
              {"\n              "}
              <p className={"text-center text-gray-400 mt-20"} id={"treePlaceholder"}>
                {"\n                سيظهر بناء الشجرة هنا خطوة بخطوة.\n              "}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div id={"finalCodesArea"} className={"hidden p-6 md:p-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-green-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"النتائج النهائية وكفاءة التشفير"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
              {"\n              "}
              {"\n              "}
              <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
                {"\n                "}
                <table className={"w-full text-sm text-right text-gray-600"}>
                  <thead className={"text-xs text-white uppercase bg-green-600"}>
                    <tr>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {"الحرف"}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {"التكرار (f)"}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {"رمز هوفمان"}
                      </th>
                      <th scope={"col"} className={"px-4 py-3 text-center"}>
                        {"طول الرمز (L)"}
                      </th>
                    </tr>
                  </thead>
                  <tbody id={"finalCodesTableBody"}>

                  </tbody>
                </table>
                {"\n              "}
              </div>
              {"\n\n              "}
              {"\n              "}
              <div className={"bg-gray-50 p-5 rounded-xl border border-gray-200"}>
                {"\n                "}
                <h3 className={"font-bold text-gray-800 mb-3"}>
                  {"حساب متوسط طول الرمز (Average Code Length)"}
                </h3>
                {"\n                "}
                <div className={"text-gray-700 space-y-3"}>
                  {"\n                  "}
                  <p className={"font-semibold text-sm"}>
                    {"القانون المستخدم:"}
                  </p>
                  {"\n                  "}
                  <div className={"bg-white p-3 rounded-lg border border-gray-200 char-display text-lg overflow-x-auto"}>
                    {"\n                    $$ L_{avg} = \\sum_{i=1}^{n} (f_i \\times L_i) / N $$\n                  "}
                  </div>
                  {"\n                  "}
                  <ul className={"text-xs list-disc list-inside space-y-1 text-gray-500"}>
                    {"\n                    "}
                    <li>
                      {"$$ L_{avg} $$: متوسط طول الرمز (بالبت/حرف)"}
                    </li>
                    {"\n                    "}
                    <li>
                      {"$$ f_i $$ : تكرار الحرف (i)"}
                    </li>
                    {"\n                    "}
                    <li>
                      {"$$ L_i $$ : طول رمز هوفمان للحرف (i)"}
                    </li>
                    {"\n                    "}
                    <li>
                      {"$$ N $$: العدد الكلي للأحرف في النص ($N = \\sum f_i$)"}
                    </li>
                    {"\n                  "}
                  </ul>
                  {"\n\n                  "}
                  <p className={"font-semibold text-sm mt-3"}>
                    {"خطوات الحساب:"}
                  </p>
                  {"\n                  "}
                  <p id={"calculationSteps"} className={"bg-white p-3 rounded-lg border border-gray-200 text-sm char-display overflow-x-auto"}></p>
                  {"\n                  "}
                  <p className={"text-sm bg-white p-3 rounded-lg border border-gray-200 char-display overflow-x-auto"}>
                    {"\n                    $$ \\frac{1}{١٤} \\times \\left[ (٤ \\times 2) + (٣ \\times 2) + (٢ \\times 3) + (٢ \\times 3) + (٢ \\times 3) + (١ \\times 3) \\right] = \\frac{٣٥}{١٤} = 2.500 \\text{ بت/حرف} $$\n                  "}
                  </p>
                  {"\n                  "}
                  <div className={"bg-gradient-to-l from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200"}>
                    {"\n                    "}
                    <p className={"font-bold text-green-800 mb-1"}>
                      {"الناتج النهائي (كفاءة التشفير):"}
                    </p>
                    {"\n                    "}
                    <p className={"text-2xl font-mono text-green-700"}>
                      {"\n                      "}
                      <span id={"avgCodeLength"}>
                        {"0"}
                      </span>
                      {" بت/حرف\n                    "}
                    </p>
                    {"\n                  "}
                  </div>
                  {"\n                "}
                </div>
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n        "}
        </div>
        {"\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n    \n"}
    </div>
  );
}
