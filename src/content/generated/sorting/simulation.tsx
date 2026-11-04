export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-5xl mx-auto py-8 md:py-12 px-4"}>
      {"\n      "}
      {"\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"SORTING ALGORITHMS"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية تفاعلية لخوارزميات الترتيب"}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {"اختر خوارزمية، أدخل الأرقام، وشاهد خطوات الترتيب — مع رسوم متحركة"}
        </p>
        {"\n      "}
      </div>
      {"\n\n      "}
      {"\n      "}
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"إعدادات المحاكاة"}
            </h2>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"algorithmSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"اختر خوارزمية الترتيب:"}
              </label>
              {"\n              "}
              <select id={"algorithmSelect"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer"} data-legacy-change={"resetSort(true)"}>
                {"\n                "}
                <option value={"bubble"}>
                  {"🫧 ترتيب الفقاعة (Bubble Sort)"}
                </option>
                {"\n                "}
                <option value={"selection"}>
                  {"🎯 ترتيب الاختيار (Selection Sort)"}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"arrayInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"المصفوفة (أرقام مفصولة بفاصلة):"}
              </label>
              {"\n              "}
              <input type={"text"} id={"arrayInput"} defaultValue={"50,20,80,10,60"} className={"w-full px-5 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono focus:ring-0 focus:border-indigo-400 transition-all duration-200"} dir={"ltr"} data-legacy-change={"resetSort(true)"} />
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          {"\n          "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
            {"\n            "}
            <button data-legacy-click={"startSort()"} id={"startButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"}>
              {"\n              ▶ ابدأ / الخطوة الأولى\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {"\n              ← الخطوة التالية\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {"\n              → الخطوة السابقة\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSort(true)"} className={"px-6 py-3.5 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
              {"\n              ↺ إعادة الضبط\n            "}
            </button>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center justify-between mb-4"}>
            {"\n            "}
            <div className={"flex items-center gap-2"}>
              {"\n              "}
              <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"تمثيل المصفوفة"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3 4h13M3 8h9m-9 4h16m-9 4h5m-6 4l-4-4m0 0l4-4m-4 4h18"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <span id={"nodeCountBadge"}>
                {"5 عناصر"}
              </span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"arrayContainer"} className={"array-container"}>
            {"\n          "}
          </div>
          {"\n          "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#6366f1] inline-block"}></span>
              {" افتراضي"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#fbbf24] inline-block"}></span>
              {" جاري المقارنة"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#34d399] inline-block"}></span>
              {" تم الترتيب"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#a78bfa] inline-block"}></span>
              {" أقل قيمة"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#f87171] inline-block"}></span>
              {" جاري التبديل"}
            </span>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"سجل الخطوات والنتائج"}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"statusMessage"} className={"status-message mb-4"}>
            {"\n            أدخل الأرقام واضغط على \"ابدأ\".\n          "}
          </div>
          {"\n          "}
          <div id={"stepsLog"} className={"steps-log-container"}>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n    \n"}
    </div>
  );
}
