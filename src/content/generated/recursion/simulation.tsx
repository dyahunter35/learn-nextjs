export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-6xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"RECURSION SIMULATION"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية تفاعلية للخوارزميات العودية"}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {"شاهد كيف تستدعي الدوال نفسها بنفسها — خطوة بخطوة — مع شجرة العودية"}
        </p>
        {"\n      "}
      </div>
      {"\n\n      "}
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
              <label htmlFor={"exampleSelect"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"اختر مثال العودية:"}
              </label>
              {"\n              "}
              <select id={"exampleSelect"} className={"gradient-select"} data-legacy-change={"updateExample(this.value)"}>
                {"\n                "}
                <option value={"factorial"}>
                  {"🔢 مضروب العدد (Factorial)"}
                </option>
                {"\n                "}
                <option value={"fibonacci"}>
                  {"🌀 متتالية فيبوناتشي (Fibonacci)"}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div>
              {"\n              "}
              <label htmlFor={"nInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"أدخل القيمة n:"}
              </label>
              {"\n              "}
              <input type={"number"} id={"nInput"} className={"num-input"} defaultValue={"5"} min={"0"} max={"10"} step={"1"} />
              {"\n              "}
              <p className={"text-xs text-gray-400 mt-1.5"}>
                {"factorial: 0-10, fibonacci: 0-15"}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n\n          "}
          <div className={"flex flex-col sm:flex-row gap-3 mt-4"}>
            {"\n            "}
            <button data-legacy-click={"startSimulation()"} id={"startButton"} className={"gradient-btn btn-start flex-1"}>
              {"\n              ▶ ابدأ المحاكاة\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"nextStep()"} id={"nextButton"} className={"gradient-btn btn-next flex-1"} disabled={true}>
              {"\n              ← الخطوة التالية\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"previousStep()"} id={"prevButton"} className={"gradient-btn btn-prev flex-1"} disabled={true}>
              {"\n              → الخطوة السابقة\n            "}
            </button>
            {"\n            "}
            <button data-legacy-click={"resetSimulation()"} className={"gradient-btn btn-reset"}>
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
              <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
              {"\n              "}
              <h2 className={"text-lg font-bold text-gray-800"}>
                {"شجرة العودية (Recursion Tree)"}
              </h2>
              {"\n            "}
            </div>
            {"\n            "}
            <div className={"node-count-badge"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-4 w-4"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 6h16M4 12h16m-7 6h7"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <span id={"nodeCountBadge"}>
                {"0 عقدة"}
              </span>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"treeContainer"} className={"rec-tree-container"}>
            {"\n            "}
            <div className={"empty-state"}>
              {"\n              "}
              <svg xmlns={"http://www.w3.org/2000/svg"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                {"\n                "}
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.5"} d={"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}></path>
                {"\n              "}
              </svg>
              {"\n              "}
              <p className={"text-lg font-medium text-gray-500"}>
                {"لم تبدأ المحاكاة بعد"}
              </p>
              {"\n              "}
              <p className={"text-sm text-gray-400 mt-1"}>
                {"اختر مثالاً وأدخل القيمة ثم اضغط \"ابدأ المحاكاة\""}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div className={"flex flex-wrap gap-3 mt-4 text-xs text-gray-500 justify-center"}>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#6366f1] inline-block"}></span>
              {" استدعاء"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#fbbf24] inline-block"}></span>
              {" جاري التنفيذ"}
            </span>
            {"\n            "}
            <span className={"flex items-center gap-1"}>
              <span className={"w-3 h-3 rounded bg-[#34d399] inline-block"}></span>
              {" تمت العودة"}
            </span>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"مكدس الاستدعاء (Call Stack)"}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"callStackContainer"} className={"callstack-container"}>
            {"\n            "}
            <div className={"empty-state"} style={{"padding":"0.5rem"}}>
              {"\n              "}
              <p className={"text-sm text-gray-400"}>
                {"مكدس الاستدعاء فارغ — ابدأ المحاكاة أولاً"}
              </p>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
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
          <div id={"statusMessage"} className={"status-message info mb-4"}>
            {"\n            المحاكاة جاهزة. اختر مثالاً وأدخل القيمة.\n          "}
          </div>
          {"\n          "}
          <div id={"stepsLog"} className={"steps-log-container"}></div>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"p-6 md:p-8"}>
          {"\n          "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-emerald-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"النتيجة النهائية"}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"resultDisplay"}></div>
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
