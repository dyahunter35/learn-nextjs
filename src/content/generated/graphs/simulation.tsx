export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n        "}
      <div className={"text-center mb-8"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"BFS / DFS"}
        </span>
        {"\n            "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية تفاعلية لخوارزميات البحث"}
        </h1>
        {"\n            "}
        <p className={"text-gray-500 mt-2"}>
          {"BFS — البحث بالعرض  |  DFS — البحث بالعمق  |  خطوة بخطوة مع رسوم متحركة"}
        </p>
        {"\n        "}
      </div>
      {"\n\n        "}
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
        {"\n\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"إعدادات المحاكاة والتحكم"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"}>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"algorithmSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"اختر الخوارزمية:"}
              </label>
              {"\n                        "}
              <select id={"algorithmSelect"} className={"w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-indigo-400 transition-all appearance-none cursor-pointer"} data-legacy-change={"resetSimulation()"}>
                {"\n                            "}
                <option value={"bfs"}>
                  {"BFS - البحث بالعرض"}
                </option>
                {"\n                            "}
                <option value={"dfs"}>
                  {"DFS - البحث بالعمق"}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"startNodeSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"عقدة البداية:"}
              </label>
              {"\n                        "}
              <select id={"startNodeSelect"} className={"w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-indigo-400 transition-all appearance-none cursor-pointer"} data-legacy-change={"resetSimulation()"}>
                {"\n                            "}
                <option value={"A"}>
                  {"A"}
                </option>
                {"\n                            "}
                <option value={"B"}>
                  {"B"}
                </option>
                {"\n                            "}
                <option value={"C"}>
                  {"C"}
                </option>
                {"\n                            "}
                <option value={"D"}>
                  {"D"}
                </option>
                {"\n                            "}
                <option value={"E"}>
                  {"E"}
                </option>
                {"\n                            "}
                <option value={"F"}>
                  {"F"}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"سرعة التشغيل: "}
                <span id={"speedValue"} className={"text-indigo-600"}>
                  {"800ms"}
                </span>
              </label>
              {"\n                        "}
              <input type={"range"} min={"200"} max={"2000"} defaultValue={"800"} step={"100"} data-legacy-input={"updateSpeed(this.value)"} className={"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"flex items-center gap-2"}>
              {"\n                        "}
              <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  {"\n                                "}
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3 4h13M3 8h9m-9 4h16m-9 4h5m-6 4l-4-4m0 0l4-4m-4 4h18"}></path>
                  {"\n                            "}
                </svg>
                {"\n                            "}
                <span id={"nodeCountBadge"}>
                  {"6 عقد"}
                </span>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mt-4"}>
            {"\n                    "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"flex-1 min-w-[100px] px-5 py-3.5 bg-gradient-to-l from-indigo-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"}>
              {"\n                        ▶ ابدأ / الخطوة الأولى\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"flex-1 min-w-[100px] px-5 py-3.5 bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {"\n                        ← الخطوة التالية\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"flex-1 min-w-[100px] px-5 py-3.5 bg-gradient-to-l from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-0.5 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"} disabled={true}>
              {"\n                        → الخطوة السابقة\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"resetSimulation()"} id={"resetButton"} className={"flex-1 min-w-[100px] px-5 py-3.5 bg-gradient-to-l from-rose-500 to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
              {"\n                        ↺ إعادة الضبط\n                    "}
            </button>
            {"\n                    "}
            <button data-legacy-click={"toggleAutoPlay()"} id={"autoPlayBtn"} className={"flex-1 min-w-[100px] px-5 py-3.5 bg-gradient-to-l from-violet-500 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"}>
              {"\n                        ▶ تشغيل تلقائي\n                    "}
            </button>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"تمثيل الرسم البياني"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mb-4 text-xs text-gray-500 justify-center"}>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-gray-200 border border-gray-400"}></span>
              {" غير مزارة"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-[#fbbf24] border border-[#d97706]"}></span>
              {" مكتشفة"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-[#34d399] border border-[#059669]"}></span>
              {" الحالية"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-[#6366f1] border border-[#4f46e5]"}></span>
              {" تمت زيارتها"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-transparent border-2 border-dashed border-[#f59e0b]"}></span>
              {" حافة نشطة"}
            </span>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"graph-container"}>
            {"\n                    "}
            <div id={"graphSvg"} className={"graph-svg"}></div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        <div className={"p-6 md:p-8"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"معلومات الخطوات والنتائج"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"statusMessage"} className={"status-message mb-4"}>
            {"\n                    اختر الخوارزمية وعقدة البداية، ثم اضغط \"ابدأ\".\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
            {"\n                    "}
            <div className={"info-panel"}>
              {"\n                        "}
              <h3 className={"text-sm font-bold text-gray-700 mb-2"}>
                {"الطابور / الكومة (Frontier)"}
              </h3>
              {"\n                        "}
              <div id={"frontierContainer"} className={"queue-visual"}></div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"info-panel"}>
              {"\n                        "}
              <h3 className={"text-sm font-bold text-gray-700 mb-2"}>
                {"ترتيب الزيارة (Visited Order)"}
              </h3>
              {"\n                        "}
              <div id={"visitedOrderContainer"} className={"queue-visual"}></div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"mt-4"}>
            {"\n                    "}
            <h3 className={"text-sm font-bold text-gray-700 mb-2"}>
              {"سجل الخطوات (Step Log)"}
            </h3>
            {"\n                    "}
            <div id={"stepsLog"} className={"steps-log-container"}></div>
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
