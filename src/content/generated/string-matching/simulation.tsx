export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n        "}
      {"\n        "}
      <div className={"text-center mb-8"}>
        {"\n            "}
        <span className={"inline-block text-blue-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"STRING MATCHING ALGORITHMS"}
        </span>
        {"\n            "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية لمطابقة السلاسل النصية"}
        </h1>
        {"\n            "}
        <p className={"text-gray-500 mt-2"}>
          {"استكشف خوارزميات البحث البسيط و KMP — خطوة بخطوة — مع عرض بصري تفاعلي"}
        </p>
        {"\n        "}
      </div>
      {"\n\n        "}
      <div className={"sm-container"}>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"إعدادات البحث"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"}>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"textInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"النص (Text):"}
              </label>
              {"\n                        "}
              <input type={"text"} id={"textInput"} defaultValue={"ABABDABACDABABCABAB"} dir={"ltr"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono text-sm focus:ring-0 focus:border-indigo-400 transition-all duration-200"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"patternInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"النمط (Pattern):"}
              </label>
              {"\n                        "}
              <input type={"text"} id={"patternInput"} defaultValue={"ABABCABAB"} dir={"ltr"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-left font-mono text-sm focus:ring-0 focus:border-indigo-400 transition-all duration-200"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"algorithmSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"اختر الخوارزمية:"}
              </label>
              {"\n                        "}
              <select id={"algorithmSelect"} className={"w-full px-4 py-3 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-indigo-400 transition-all duration-200 appearance-none cursor-pointer"}>
                {"\n                            "}
                <option value={"naive"}>
                  {"🔍 البحث البسيط (Naive)"}
                </option>
                {"\n                            "}
                <option value={"kmp"}>
                  {"⚡ خوارزمية KMP"}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                {" "}
              </label>
              {"\n                        "}
              <div className={"flex gap-2"}>
                {"\n                            "}
                <button data-legacy-click={"resetSimulation()"} className={"flex-1 px-4 py-3 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
                  {"\n                                ↺ إعادة الضبط\n                            "}
                </button>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-6"}>
            {"\n                    "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"}>
              {"\n                        ▶ ابدأ\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {"\n                        ← الخطوة التالية\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} disabled={true} className={"flex-1 px-6 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {"\n                        → الخطوة السابقة\n                    "}
            </button>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center justify-between mb-4"}>
            {"\n                    "}
            <div className={"flex items-center gap-2"}>
              {"\n                        "}
              <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
              {"\n                        "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"العرض البصري"}
              </h2>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
              {"\n                        "}
              <span id={"stepCounter"}></span>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"visualizationArea"} className={"sm-visualization"}>
            {"\n                    "}
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-default"} style={{"background":"#6366f1","display":"inline-block"}}></span>
              {" افتراضي"}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-comparing"} style={{"display":"inline-block"}}></span>
              {" جاري المقارنة"}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-matched"} style={{"display":"inline-block"}}></span>
              {" تمت المطابقة"}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-mismatched"} style={{"display":"inline-block"}}></span>
              {" عدم تطابق"}
            </span>
            {"\n                    "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded sm-char-found"} style={{"display":"inline-block"}}></span>
              {" تم العثور"}
            </span>
            {"\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div id={"prefixTableDisplay"} className={"mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200"}>
            {"\n                    "}
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"سجل الخطوات والنتائج"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"statusMessage"} className={"sm-status mb-4"}>
            {"\n                    اضغط على \"ابدأ\" للبدء.\n                "}
          </div>
          {"\n\n                "}
          <div id={"resultDisplay"} className={"mb-4"}>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex items-center justify-between mb-2"}>
            {"\n                    "}
            <span id={"stepInfo"} className={"text-sm text-gray-500 font-medium"}></span>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"sm-step-log"}>
            {"\n                    "}
            <table className={"sm-step-table"}>
              <thead>
                <tr>
                  <th>
                    {"#"}
                  </th>
                  <th>
                    {"الموضع"}
                  </th>
                  <th>
                    {"المقارنة"}
                  </th>
                  <th>
                    {"النتيجة"}
                  </th>
                </tr>
              </thead>
              <tbody id={"stepLogBody"}>

              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n  \n"}
    </div>
  );
}
