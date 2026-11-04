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
          {"\n                المكدس والطابور "}
          <span className={"text-indigo-600"}>
            {"(Stack & Queue)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                هياكل البيانات الأساسية لإدارة وتنظيم العناصر\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-14"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-indigo-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                المكدس (Stack)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 mb-6 border border-indigo-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-indigo-700"}>
              {"المكدس (Stack)"}
            </strong>
            {" هو هيكل بيانات خطي يتبع مبدأ \n                    "}
            <strong className={"text-indigo-600"}>
              {"\"آخر داخِل هو أول خارج\" (LIFO — Last In, First Out)"}
            </strong>
            {".\n                    يمكن تشبيه المكدس بكومة من الأطباق: آخر طبق تضعه فوق الكومة هو أول طبق يمكنك أخذه.\n                "}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-indigo-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🥞"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-indigo-700"}>
                {"تشبيه:"}
              </strong>
              {" تخيل كومة من الفطائر (pancakes). الفطيرة التي تُطبخ أخيراً توضع فوق الكومة، وهي أوّل ما يؤكل.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {"العمليات الأساسية في المكدس"}
        </h3>
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
                {"Push (دفع)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إضافة عنصر جديد إلى أعلى المكدس."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"stack.push(5) ← إضافة 5 إلى الأعلى"}
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
                {"Pop (حذف)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إزالة العنصر الموجود في أعلى المكدس وإرجاع قيمته."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"stack.pop() ← إزالة وإرجاع آخر عنصر"}
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
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Peek / Top (اطّلاع)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"مشاهدة العنصر الموجود في أعلى المكدس دون إزالته."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"stack.peek() ← 5 (أعلى عنصر)"}
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
                {"isEmpty (تحقق من الفراغ)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"التحقق مما إذا كان المكدس فارغاً أم لا."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"stack.isEmpty() ← false"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {"تمثيل المكدس"}
        </h3>
        {"\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6"}>
          {"\n                "}
          <div className={"flex flex-col sm:flex-row items-center justify-center gap-6"}>
            {"\n                    "}
            <div className={"flex flex-col-reverse items-center"}>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-100 border-2 border-indigo-300 rounded-lg flex items-center justify-center text-indigo-700 font-bold"}>
                {"أسفل المكدس"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"10"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"20"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center text-indigo-800 font-bold"}>
                {"30"}
              </div>
              {"\n                        "}
              <div className={"w-32 h-10 bg-indigo-500 border-2 border-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"}>
                {"40 ← Push"}
              </div>
              {"\n                        "}
              <div className={"w-36 h-8 bg-indigo-600 rounded-t-lg flex items-center justify-center text-white text-xs font-bold"}>
                {"أعلى المكدس (Top)"}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"text-right"}>
              {"\n                        "}
              <p className={"text-gray-700 font-bold"}>
                {"Push(10) → Push(20) → Push(30) → Push(40)"}
              </p>
              {"\n                        "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {"آخر عنصر دخل (40) هو أول خارج"}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
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
            {"\n                    استخدامات المكدس في الحياة الواقعية\n                "}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              {"زر "}
              <strong className={"text-amber-700"}>
                {"الرجوع (Back)"}
              </strong>
              {" في المتصفحات — الصفحات السابقة توضع في مكدس."}
            </li>
            {"\n                    "}
            <li>
              {"ميزة "}
              <strong className={"text-amber-700"}>
                {"تراجع (Undo)"}
              </strong>
              {" في برامج التحرير — آخر إجراء يُتراجع عنه أولاً."}
            </li>
            {"\n                    "}
            <li>
              {"تقييم "}
              <strong className={"text-amber-700"}>
                {"التعبيرات الرياضية"}
              </strong>
              {" وتحويلها من infix إلى postfix."}
            </li>
            {"\n                    "}
            <li>
              {"إدارة "}
              <strong className={"text-amber-700"}>
                {"استدعاءات الدوال"}
              </strong>
              {" (Call Stack) في لغات البرمجة."}
            </li>
            {"\n                "}
          </ul>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      {"\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"}>
          {"\n                "}
          <span className={"w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-emerald-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                الطابور (Queue)\n            "}
        </h2>
        {"\n\n            "}
        <div className={"bg-gradient-to-l from-emerald-50 to-green-50 rounded-2xl p-6 md:p-8 mb-6 border border-emerald-100"}>
          {"\n                "}
          <p className={"text-gray-700 leading-loose mb-4"}>
            {"\n                    "}
            <strong className={"text-emerald-700"}>
              {"الطابور (Queue)"}
            </strong>
            {" هو هيكل بيانات خطي يتبع مبدأ \n                    "}
            <strong className={"text-emerald-600"}>
              {"\"أوّل داخِل هو أول خارج\" (FIFO — First In, First Out)"}
            </strong>
            {".\n                    يشبه الطابور طابور الحافلة: أول شخص يقف في الطابور هو أول من يركب الحافلة.\n                "}
          </p>
          {"\n\n                "}
          <div className={"flex items-center gap-3 bg-white rounded-xl p-4 border border-emerald-100"}>
            {"\n                    "}
            <span className={"text-3xl"}>
              {"🚌"}
            </span>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"\n                        "}
              <strong className={"text-emerald-700"}>
                {"تشبيه:"}
              </strong>
              {" طابور الناس في محطة الحافلات — أول من يصل إلى الطابور هو أول من يغادر.\n                    "}
            </p>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {"العمليات الأساسية في الطابور"}
        </h3>
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
                {"Enqueue (إدخال)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إضافة عنصر جديد إلى نهاية الطابور (الخلف)."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"queue.enqueue(5) ← إضافة 5 إلى الخلف"}
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
                {"Dequeue (إخراج)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"إزالة العنصر الموجود في مقدمة الطابور وإرجاع قيمته."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"queue.dequeue() ← إزالة وإرجاع أول عنصر"}
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
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
                  {"\n                            "}
                </svg>
                {"\n                        "}
              </span>
              {"\n                        "}
              <h4 className={"text-lg font-bold text-gray-800"}>
                {"Front (مقدمة)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"مشاهدة العنصر الموجود في مقدمة الطابور دون إزالته."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"queue.front() ← 10 (أول عنصر)"}
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
                {"isEmpty (تحقق من الفراغ)"}
              </h4>
              {"\n                    "}
            </div>
            {"\n                    "}
            <p className={"text-gray-600 text-sm"}>
              {"التحقق مما إذا كان الطابور فارغاً أم لا."}
            </p>
            {"\n                    "}
            <div className={"mt-2 bg-gray-50 rounded-lg p-2 text-xs font-mono text-gray-700 border border-gray-100"}>
              {"queue.isEmpty() ← false"}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <h3 className={"text-xl font-bold text-gray-800 mb-4"}>
          {"تمثيل الطابور"}
        </h3>
        {"\n            "}
        <div className={"bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6"}>
          {"\n                "}
          <div className={"flex flex-col sm:flex-row items-center justify-center gap-6"}>
            {"\n                    "}
            <div className={"flex items-center"}>
              {"\n                        "}
              <div className={"flex items-center"}>
                {"\n                            "}
                <div className={"px-3 py-4 bg-emerald-100 border-2 border-emerald-300 rounded-r-lg flex items-center justify-center text-emerald-700 text-sm font-bold"}>
                  {"مقدمة"}
                  <br />
                  {"(Front)"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-16 bg-emerald-500 border-2 border-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl -ml-1 shadow-lg"}>
                  {"10"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-14 bg-emerald-200 border-2 border-emerald-300 rounded-lg flex items-center justify-center text-emerald-700 font-bold -ml-1"}>
                  {"20"}
                </div>
                {"\n                            "}
                <div className={"w-16 h-14 bg-emerald-200 border-2 border-emerald-300 rounded-lg flex items-center justify-center text-emerald-700 font-bold -ml-1"}>
                  {"30"}
                </div>
                {"\n                            "}
                <div className={"px-3 py-4 bg-emerald-50 border-2 border-emerald-200 rounded-l-lg flex items-center justify-center text-emerald-600 text-sm font-bold"}>
                  {"خلف"}
                  <br />
                  {"(Rear)"}
                </div>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"text-right"}>
              {"\n                        "}
              <p className={"text-gray-700 font-bold"}>
                {"Enqueue(10) → Enqueue(20) → Enqueue(30)"}
              </p>
              {"\n                        "}
              <p className={"text-gray-500 text-sm mt-1"}>
                {"أول عنصر دخل (10) هو أول خارج"}
              </p>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"bg-emerald-50 border border-emerald-200 rounded-xl p-5"}>
          {"\n                "}
          <h4 className={"font-bold text-emerald-800 mb-2 flex items-center gap-2"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
              {"\n                    "}
            </svg>
            {"\n                    استخدامات الطابور في الحياة الواقعية\n                "}
          </h4>
          {"\n                "}
          <ul className={"list-disc list-inside text-gray-700 space-y-1 text-sm mr-6"}>
            {"\n                    "}
            <li>
              <strong className={"text-emerald-700"}>
                {"مشاركة الوقت"}
              </strong>
              {" في أنظمة التشغيل (CPU Scheduling) — العمليات تُنفّذ حسب وصولها."}
            </li>
            {"\n                    "}
            <li>
              <strong className={"text-emerald-700"}>
                {"طابور الطباعة"}
              </strong>
              {" (Print Queue) — المستندات تُطبع بترتيب إرسالها."}
            </li>
            {"\n                    "}
            <li>
              {"معالجة "}
              <strong className={"text-emerald-700"}>
                {"البيانات في الوقت الحقيقي"}
              </strong>
              {" مثل بث الفيديو والموسيقى."}
            </li>
            {"\n                    "}
            <li>
              {"خوارزميات "}
              <strong className={"text-emerald-700"}>
                {"البحث بالعرض (BFS)"}
              </strong>
              {" في الرسوم البيانية."}
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
          <span className={"w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"}>
            {"\n                    "}
            <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
              {"\n                        "}
              <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}></path>
              {"\n                    "}
            </svg>
            {"\n                "}
          </span>
          {"\n                المقارنة بين المكدس والطابور\n            "}
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
                  {"المكدس (Stack)"}
                </th>
                <th className={"p-4 border border-gray-700 font-bold"}>
                  {"الطابور (Queue)"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"المبدأ"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-indigo-700 font-bold"}>
                  {"LIFO"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-emerald-700 font-bold"}>
                  {"FIFO"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الإضافة"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"Push — في الأعلى"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"Enqueue — في الخلف"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"الحذف"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"Pop — من الأعلى"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"Dequeue — من المقدمة"}
                </td>
              </tr>
              <tr className={"border-b border-gray-200 bg-gray-50"}>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"تشبيه"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"كومة أطباق 🥞"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"طابور بشر 🚌"}
                </td>
              </tr>
              <tr>
                <td className={"p-4 border border-gray-200 font-bold text-gray-800"}>
                  {"استخدام شائع"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"Undo / زر الرجوع"}
                </td>
                <td className={"p-4 border border-gray-200 text-center text-gray-600"}>
                  {"طابور الطباعة / CPU"}
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
        <a href={"/algorithms/stackqueue/simulation"} className={"inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"}>
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
