export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-7xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n        "}
      <div className={"text-center mb-8"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"KRUSKAL & PRIM"}
        </span>
        {"\n            "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة الشجرة الممتدة الدنيا"}
        </h1>
        {"\n            "}
        <p className={"text-gray-500 mt-2"}>
          {"خوارزميتا كروسكال وبريم — خطوة بخطوة على رسم بياني موزون"}
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
                {"الخوارزمية:"}
              </label>
              {"\n                        "}
              <select id={"algorithmSelect"} className={"w-full px-4 py-3.5 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl focus:border-indigo-400 transition-all appearance-none cursor-pointer"}>
                {"\n                            "}
                <option value={"kruskal"}>
                  {"كروسكال (Kruskal)"}
                </option>
                {"\n                            "}
                <option value={"prim"}>
                  {"بريم (Prim)"}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"الرسم البياني:"}
              </label>
              {"\n                        "}
              <div className={"flex items-center gap-2 h-[50px]"}>
                {"\n                            "}
                <div className={"inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1.5 rounded-full border border-indigo-100"}>
                  {"\n                                "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-3.5 w-3.5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                    {"\n                                    "}
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M3 4h13M3 8h9m-9 4h16m-9 4h5m-6 4l-4-4m0 0l4-4m-4 4h18"}></path>
                    {"\n                                "}
                  </svg>
                  {"\n                                "}
                  <span>
                    {"٦ عقد — ٩ حواف موزونة"}
                  </span>
                  {"\n                            "}
                </div>
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
              {"\n                        ▶ ابدأ\n                    "}
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
              {"تمثيل الرسم البياني الموزون"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mb-4 text-xs text-gray-500 justify-center"}>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-line border-gray-300"}></span>
              {" غير مفحوصة"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-line border-amber-400"} style={{"borderTopStyle":"dashed"}}></span>
              {" قيد الفحص"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-line border-emerald-400"}></span>
              {" في MST"}
            </span>
            {"\n                    "}
            <span className={"legend-item legend-item-kruskal"}>
              <span className={"legend-line border-red-300"} style={{"borderTopStyle":"dashed"}}></span>
              {" مرفوضة"}
            </span>
            {"\n                    "}
            <span className={"legend-item legend-item-prim hidden"}>
              <span className={"legend-line border-blue-300"} style={{"borderTopStyle":"dashed"}}></span>
              {" في الحدود"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-gray-200 border border-gray-400"}></span>
              {" خارج MST"}
            </span>
            {"\n                    "}
            <span className={"legend-item"}>
              <span className={"legend-dot bg-indigo-500"}></span>
              {" في MST"}
            </span>
            {"\n                    "}
            <span className={"legend-item legend-item-prim hidden"}>
              <span className={"legend-dot bg-amber-400"}></span>
              {" الحالية"}
            </span>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 lg:grid-cols-3 gap-6"}>
            {"\n                    "}
            <div className={"lg:col-span-2"}>
              {"\n                        "}
              <div className={"mst-container"}>
                {"\n                            "}
                <div id={"graphSvg"} className={"mst-svg"}></div>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"lg:col-span-1"}>
              {"\n                        "}
              <div className={"info-panel h-full"}>
                {"\n                            "}
                <div className={"flex items-center gap-2 mb-3"}>
                  {"\n                                "}
                  <div className={"w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse"}></div>
                  {"\n                                "}
                  <h3 className={"text-sm font-bold text-gray-700"}>
                    {"معلومات الخوارزمية"}
                  </h3>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div id={"algorithmInfoPanel"}>
                  {"\n                                "}
                  <div className={"text-gray-400 text-xs text-center py-8"}>
                    {"اضغط \"ابدأ\" لبدء المحاكاة"}
                  </div>
                  {"\n                            "}
                </div>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
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
            {"\n                    اختر الخوارزمية، ثم اضغط \"ابدأ\".\n                "}
          </div>
          {"\n\n                "}
          <div className={"info-panel mb-4"}>
            {"\n                    "}
            <h3 className={"text-sm font-bold text-gray-700 mb-2"}>
              {"سجل الخطوات"}
            </h3>
            {"\n                    "}
            <div id={"stepsLog"} className={"steps-log-container"}></div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"celebrationSection"} className={"hidden mt-4"}>
            {"\n                    "}
            <div className={"bg-gradient-to-l from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-300 p-6 shadow-lg"}>
              {"\n                        "}
              <div className={"flex items-center gap-3 mb-4"}>
                {"\n                            "}
                <div className={"w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center"}>
                  {"\n                                "}
                  <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-white"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                    {"\n                                    "}
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M5 13l4 4L19 7"}></path>
                    {"\n                                "}
                  </svg>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div>
                  {"\n                                "}
                  <h3 className={"text-xl font-bold text-emerald-800"}>
                    {"اكتملت الخوارزمية!"}
                  </h3>
                  {"\n                                "}
                  <p className={"text-emerald-600 text-sm"}>
                    {"تم إيجاد الشجرة الممتدة الدنيا بنجاح"}
                  </p>
                  {"\n                            "}
                </div>
                {"\n                        "}
              </div>
              {"\n                        "}
              <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
                {"\n                            "}
                <div className={"bg-white rounded-xl p-4 border border-emerald-200"}>
                  {"\n                                "}
                  <div className={"text-xs text-gray-500 mb-1"}>
                    {"عدد الحواف في MST"}
                  </div>
                  {"\n                                "}
                  <div className={"text-2xl font-bold text-emerald-700"} id={"resultCount"}>
                    {"0"}
                  </div>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"bg-white rounded-xl p-4 border border-emerald-200"}>
                  {"\n                                "}
                  <div className={"text-xs text-gray-500 mb-1"}>
                    {"الوزن الإجمالي"}
                  </div>
                  {"\n                                "}
                  <div className={"text-2xl font-bold text-emerald-700"} id={"resultWeight"}>
                    {"0"}
                  </div>
                  {"\n                            "}
                </div>
                {"\n                            "}
                <div className={"bg-white rounded-xl p-4 border border-emerald-200 sm:col-span-1"}>
                  {"\n                                "}
                  <div className={"text-xs text-gray-500 mb-1"}>
                    {"حواف MST"}
                  </div>
                  {"\n                                "}
                  <div className={"font-mono font-bold text-emerald-700 text-sm break-all"} id={"resultEdges"}>
                    {"—"}
                  </div>
                  {"\n                            "}
                </div>
                {"\n                        "}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n\n    \n    \n  \n"}
    </div>
  );
}
