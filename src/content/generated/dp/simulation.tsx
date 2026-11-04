export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-7xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n      "}
      <div className={"text-center mb-8"}>
        {"\n        "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"DYNAMIC PROGRAMMING SIMULATION"}
        </span>
        {"\n        "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية تفاعلية للبرمجة الديناميكية"}
        </h1>
        {"\n        "}
        <p className={"text-gray-500 mt-2"}>
          {"شاهد كيف تملأ خوارزمية DP المصفوفة خطوة بخطوة — مع مقارنة العودية الساذجة"}
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
                {"اختر مثال DP:"}
              </label>
              {"\n              "}
              <select id={"exampleSelect"} className={"gradient-select"} data-legacy-change={"updateExample(this.value)"}>
                {"\n                "}
                <option value={"fibonacci"}>
                  {"🌀 متتالية فيبوناتشي (Fibonacci)"}
                </option>
                {"\n                "}
                <option value={"coinchange"}>
                  {"💰 مشكلة العملات المعدنية (Coin Change)"}
                </option>
                {"\n              "}
              </select>
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"fibonacciConfig"}>
              {"\n              "}
              <label htmlFor={"nInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"أدخل n (1 - 20):"}
              </label>
              {"\n              "}
              <input type={"number"} id={"nInput"} className={"num-input"} defaultValue={"6"} min={"0"} max={"20"} step={"1"} />
              {"\n            "}
            </div>
            {"\n            "}
            <div id={"coinChangeConfig"} style={{"display":"none"}}>
              {"\n              "}
              <div className={"mb-3"}>
                {"\n                "}
                <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {"المبلغ المستهدف (1 - 50):"}
                </label>
                {"\n                "}
                <input type={"number"} id={"amountInput"} className={"num-input coin-input"} defaultValue={"6"} min={"1"} max={"50"} step={"1"} />
                {"\n              "}
              </div>
              {"\n              "}
              <div>
                {"\n                "}
                <label className={"block text-sm font-bold text-gray-700 mb-2"}>
                  {"قيم العملات المتاحة:"}
                </label>
                {"\n                "}
                <div className={"coin-input-group mb-2"}>
                  {"\n                  "}
                  <input type={"number"} id={"newCoinInput"} className={"num-input coin-input"} placeholder={"أدخل قيمة"} min={"1"} max={"100"} />
                  {"\n                  "}
                  <button data-legacy-click={"addCoin()"} className={"bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2.5 rounded-lg text-sm transition"}>
                    {"\n                    ＋ إضافة\n                  "}
                  </button>
                  {"\n                "}
                </div>
                {"\n                "}
                <div id={"coinsList"} className={"flex flex-wrap gap-2"}>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"1"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"3"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                  "}
                  <span className={"coin-tag"}>
                    {"4"}
                    <span className={"remove-coin"} data-legacy-click={"this.parentElement.remove()"}>
                      {"×"}
                    </span>
                  </span>
                  {"\n                "}
                </div>
                {"\n                "}
                <p className={"text-xs text-gray-400 mt-1.5"}>
                  {"أضف عملات ثم اختر المبلغ المستهدف"}
                </p>
                {"\n              "}
              </div>
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
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n            "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"جدول DP — طريقة الملء التصاعدي (Bottom-up)"}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"dpVisualization"} className={"dp-table-wrapper"}>
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
          <div id={"legendContainer"} className={"legend-container"} style={{"display":"none"}}>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-empty"}></span>
              {" غير محسوب"}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-computing"}></span>
              {" جاري الحساب"}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-done"}></span>
              {" تم الحساب"}
            </span>
            {"\n            "}
            <span className={"legend-item"}>
              <span className={"legend-swatch legend-swatch-final"}></span>
              {" الإجابة النهائية"}
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
            <div className={"w-3 h-3 bg-red-400 rounded-full animate-pulse"}></div>
            {"\n            "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"مقارنة: العودية الساذجة (Naive) vs DP"}
            </h2>
            {"\n          "}
          </div>
          {"\n          "}
          <div id={"naiveComparison"} className={"rec-tree-container"}>
            {"\n            "}
            <div className={"empty-state"} style={{"padding":"0.5rem"}}>
              {"\n              "}
              <p className={"text-sm text-gray-400"}>
                {"ابدأ المحاكاة لمشاهدة شجرة العودية الساذجة مقابل DP الخطي"}
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
