export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden mt-8 mb-12 p-8 md:p-10 border border-gray-100"}>
      {"\n\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DATA STRUCTURES"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                القوائم المترابطة "}
          <span className={"text-orange-600"}>
            {"(Linked Lists)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                بنية ديناميكية للبيانات تربط العناصر عبر مؤشرات متسلسلة\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                ما هي القائمة المترابطة؟\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 mb-6 border border-orange-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-orange-700"}>
              {"القائمة المترابطة (Linked List)"}
            </strong>
            {" هي بنية بيانات خطية تتكون من مجموعة من "}
            <strong className={"text-orange-600"}>
              {"العُقد (Nodes)"}
            </strong>
            {"،\n                    حيث تحتوي كل عقدة على "}
            <strong className={"text-orange-600"}>
              {"قيمة (Value)"}
            </strong>
            {" و "}
            <strong className={"text-orange-600"}>
              {"مؤشر (Pointer)"}
            </strong>
            {" يشير إلى العقدة التالية في القائمة.\n                    على عكس المصفوفات (Arrays)، لا تحتاج القوائم المترابطة إلى مساحة متصلة في الذاكرة.\n                "}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-orange-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🚂"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-orange-700"}>
                {"تشبيه:"}
              </strong>
              {" تخيل قطاراً — كل عربة (node) تحتوي على ركاب (value) ومربوطة بالعربة التي تليها (pointer). يمكنك إضافة أو إزالة أي عربة بسهولة.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6h16M4 12h16m-7 6h7"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                أنواع القوائم المترابطة\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"أحادية الارتباط"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"Singly Linked — كل عقدة تشير إلى العقدة التالية فقط. اجتياز باتجاه واحد."}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"ثنائية الارتباط"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"Doubly Linked — كل عقدة تشير إلى التالية والسابقة. اجتياز باتجاهين."}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-3"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"دائرية"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"Circular — آخر عقدة تشير إلى أول عقدة. اجتياز دوري مستمر."}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                العمليات الأساسية\n            "}
        </h2>
        {"\n\n            "}
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"}>
          {"\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M12 6v6m0 0v6m0-6h6m-6 0H6"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Insert (إدراج)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إضافة عقدة جديدة في المقدمة (Head) أو النهاية (Tail) أو بين عقدتين."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"list.insertHead(5) ← إضافة 5 في المقدمة"}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M20 12H4"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Delete (حذف)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إزالة عقدة من المقدمة أو النهاية أو حسب القيمة."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"list.delete(10) ← حذف العقدة التي قيمتها 10"}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-blue-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Search (بحث)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"البحث عن عقدة بقيمة معينة والوصول إليها."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"list.search(10) ← إرجاع العقدة التي قيمتها 10"}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"bg-white border border-gray-200 rounded-xl p-5 shadow-sm"}>
            {"\n                    "}
            <div className={"flex items-center gap-3 mb-2"}>
              {"\n                        "}
              <span className={"w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Traverse (اجتياز)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"المرور على جميع العقد من البداية إلى النهاية."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"for each node in list → print(node)"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-orange-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                تمثيل القائمة المترابطة\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6 overflow-x-auto"}>
          {"\n                "}
          <div className={"flex items-center justify-center gap-0 min-w-max py-4"}>
            {"\n                    "}
            <div className={"flex items-center"}>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"}>
                  {"10"}
                </div>
                {"\n                            "}
                <span className={"text-[0.6rem] font-bold text-orange-600 mt-1 bg-orange-50 px-2 rounded-full"}>
                  {"Head"}
                </span>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400 relative"}>
                  {"\n                                "}
                  <span className={"absolute -top-5 left-1/2 -translate-x-1/2 text-[0.55rem] font-bold text-gray-500 whitespace-nowrap"}>
                    {"next"}
                  </span>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"}>
                  {"20"}
                </div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400 relative"}>
                  {"\n                                "}
                  <span className={"absolute -top-5 left-1/2 -translate-x-1/2 text-[0.55rem] font-bold text-gray-500 whitespace-nowrap"}>
                    {"next"}
                  </span>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"relative flex flex-col items-center mx-1"}>
                {"\n                            "}
                <div className={"w-20 h-16 bg-orange-300 rounded-xl flex items-center justify-center text-gray-800 font-bold text-xl shadow-md"}>
                  {"30"}
                </div>
                {"\n                            "}
                <span className={"text-[0.6rem] font-bold text-purple-600 mt-1 bg-purple-50 px-2 rounded-full"}>
                  {"Tail"}
                </span>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"flex items-center mx-0"}>
                {"\n                            "}
                <div className={"w-10 h-1 bg-gray-400"}></div>
                {"\n                            "}
                <div className={"border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-400 -mr-[1px]"}></div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"w-12 h-12 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-[0.6rem] font-bold text-gray-400 mx-1"}>
                {"NULL"}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n                "}
          <p className={"text-center text-sm text-gray-500 mt-3"}>
            {"Head → [10] → [20] → [30] → NULL"}
          </p>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-amber-50 border border-amber-200 rounded-xl p-5"}>
          {"\n                "}
          <h4 className={"font-bold text-amber-800 mb-2 flex items-center gap-2"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
              {"\n                    "}
            </svg>
            {"\n                    استخدامات القوائم المترابطة\n                "}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              {"تنفيذ "}
              <strong className={"text-amber-700"}>
                {"المكدس (Stack)"}
              </strong>
              {" و "}
              <strong className={"text-amber-700"}>
                {"الطابور (Queue)"}
              </strong>
              {"."}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-amber-700"}>
                {"إدارة الذاكرة الديناميكية"}
              </strong>
              {" في أنظمة التشغيل."}
            </li>
            {"\n                    "}
            <li>
              {"تنفيذ "}
              <strong className={"text-amber-700"}>
                {"قوائم التشغيل"}
              </strong>
              {" (Playlists) في مشغلات الموسيقى — إضافة/إزالة الأغاني بسهولة."}
            </li>
            {"\n                    "}
            <li>
              {"تمثيل "}
              <strong className={"text-amber-700"}>
                {"الرسوم البيانية (Graphs)"}
              </strong>
              {" عبر قوائم الجوار (Adjacency List)."}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-amber-700"}>
                {"تصفح الصور"}
              </strong>
              {" (Image Viewer) — السابقة والتالية عبر doubly linked list."}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-8"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                المقارنة: المصفوفات (Arrays) vs القوائم المترابطة (Linked Lists)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"overflow-x-auto rounded-xl border border-gray-200"}>
          {"\n                "}
          <table className={"w-full border-collapse bg-white"}>
            <thead>
              <tr className={"bg-gray-900 text-white"}>
                <th className={"p-4 border border-gray-700 font-bold text-right"}>
                  {"الخاصية"}
                </th>
                <th className={"p-4 border border-gray-700 font-bold"}>
                  {"المصفوفة (Array)"}
                </th>
                <th className={"p-4 border border-gray-700 font-bold text-orange-500"}>
                  {"القائمة المترابطة"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الحجم"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"ثابت (ثابت الطول)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"ديناميكي (يتغير)"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الوصول العشوائي"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-green-600 font-bold"}>
                  {"O(1)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-red-600 font-bold"}>
                  {"O(n)"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الإدراج/الحذف في البداية"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-red-600 font-bold"}>
                  {"O(n)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-green-600 font-bold"}>
                  {"O(1)"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"استهلاك الذاكرة"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"أقل (قيم فقط)"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"أكثر (قيم + مؤشرات)"}
                </td>
              </tr>
              <tr>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الاجتياز"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"تتابعي أو عشوائي"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"تتابعي فقط"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10 mb-4"}>
        {"\n            "}
        <a href={"/algorithms/linkedlist/simulation"} className={"inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                جرب المحاكاة التفاعلية\n            "}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n  \n"}
    </div>
  );
}
