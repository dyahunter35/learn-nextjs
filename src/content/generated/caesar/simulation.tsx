export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-4xl mx-auto"}>
        {"\n\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-green-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"CAESAR CIPHER"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {"محاكي تشفير قيصر (28 حرف عربي - الفهرس يبدأ من 1)"}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {"شاهد خطوات التشفير وفك التشفير حرفاً بحرف مع جدول الأبجدية العربية"}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"جدول الأبجدية العربية والفهارس (1-28)"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"alphabetTableContainer"} className={"overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-3"}>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-indigo-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"الإعدادات والعمليات"}
              </h2>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"flex flex-col md:flex-row gap-4 mb-4"}>
              {"\n              "}
              <div className={"flex-1"}>
                {"\n                "}
                <label htmlFor={"textInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {"النص الأصلي / النص المشفر:"}
                </label>
                {"\n                "}
                <textarea id={"textInput"} rows={3} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-colors placeholder-gray-300 text-right"} placeholder={"أدخل النص هنا للتشفير أو فك التشفير..."} data-legacy-input={"resetCipher(true)"}>
                  {"أهلاً بك ضياء"}
                </textarea>
                {"\n              "}
              </div>
              {"\n              "}
              <div className={"w-full md:w-32"}>
                {"\n                "}
                <label htmlFor={"keyInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {"مفتاح الإزاحة (1-27):"}
                </label>
                {"\n                "}
                <input type={"number"} id={"keyInput"} defaultValue={"3"} min={"1"} max={"27"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-center focus:ring-0 focus:border-indigo-400 transition-colors"} data-legacy-input={"resetCipher(true)"} />
                {"\n              "}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
              {"\n              "}
              <button data-legacy-click={"startCipher('encrypt')"} id={"encryptButton"} className={"flex-1 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-indigo-800 transition duration-150 shadow-lg shadow-indigo-200 disabled:opacity-50"}>
                {"\n                ابدأ التشفير (خطوة 1)\n              "}
              </button>
              {"\n              "}
              <button data-legacy-click={"startCipher('decrypt')"} id={"decryptButton"} className={"flex-1 bg-gradient-to-l from-purple-600 to-purple-700 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-purple-800 transition duration-150 shadow-lg shadow-purple-200 disabled:opacity-50"}>
                {"\n                ابدأ فك التشفير (خطوة 1)\n              "}
              </button>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"flex gap-3 mt-3"}>
              {"\n              "}
              <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"flex-1 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white py-2 rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition duration-150 shadow-lg shadow-emerald-200 disabled:opacity-50"} disabled={true}>
                {"\n                الخطوة التالية »\n              "}
              </button>
              {"\n              "}
              <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"flex-1 bg-gradient-to-l from-gray-500 to-gray-600 text-white py-2 rounded-xl font-bold hover:from-gray-600 hover:to-gray-700 transition duration-150 shadow-lg shadow-gray-200 disabled:opacity-50"} disabled={true}>
                {"\n                « الخطوة السابقة\n              "}
              </button>
              {"\n              "}
              <button data-legacy-click={"resetCipher(true)"} className={"bg-gradient-to-l from-red-500 to-red-600 text-white py-2 px-4 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition duration-150 shadow-lg shadow-red-200"}>
                {"\n                إعادة الضبط\n              "}
              </button>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8 border-b border-gray-100"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-emerald-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"النتيجة النهائية"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"resultText"} className={"cipher-text text-gray-400 min-h-[40px] text-lg text-center py-4 bg-gray-50 rounded-xl border border-gray-200"}>
              {"\n              ...\n            "}
            </p>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"p-6 md:p-8"}>
            {"\n            "}
            <div className={"flex items-center gap-2 mb-4"}>
              {"\n              "}
              <div className={"w-2 h-2 bg-amber-500 rounded-full"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"سجل الخطوات لكل حرف"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <p id={"statusMessage"} className={"text-center py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium"}>
              {"\n              اضغط على زر \"ابدأ التشفير\" أو \"ابدأ فك التشفير\".\n            "}
            </p>
            {"\n            "}
            <div id={"stepsLog"} className={"steps-log-container bg-gray-50 p-4 rounded-xl border border-gray-200"}>
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
    {"\n\n    \n    \n"}
    </div>
  );
}
