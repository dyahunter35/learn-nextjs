export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-7xl mx-auto py-8 md:py-12 px-4"}>
      {"\n\n        "}
      <div className={"text-center mb-8"}>
        {"\n            "}
        <span className={"inline-block text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"GREEDY ALGORITHM SIMULATION"}
        </span>
        {"\n            "}
        <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
          {"محاكاة بصرية تفاعلية — مشكلة العملات المعدنية"}
        </h1>
        {"\n            "}
        <p className={"text-gray-500 mt-2"}>
          {"شاهد كيف تعمل الخوارزمية الجشعة خطوة بخطوة"}
        </p>
        {"\n        "}
      </div>
      {"\n\n        "}
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"}>
        {"\n\n            "}
        {"\n            "}
        <div className={"p-6 md:p-8 border-b border-gray-100"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-5"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-indigo-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"إعدادات المحاكاة"}
            </h2>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"}>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"coinSystem"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"نظام العملات:"}
              </label>
              {"\n                        "}
              <select id={"coinSystem"} className={"gradient-select"} data-legacy-change={"selectCoinSystem()"}>
                {"\n                            "}
                <option value={"sudanese"}>
                  {"🇸🇩 عملات سودانية (1,5,10,20,50)"}
                </option>
                {"\n                            "}
                <option value={"us"}>
                  {"🇺🇸 عملات أمريكية (1,5,10,25)"}
                </option>
                {"\n                            "}
                <option value={"custom"}>
                  {"⚙️ عملات مخصصة"}
                </option>
                {"\n                        "}
              </select>
              {"\n                    "}
            </div>
            {"\n                    "}
            <div>
              {"\n                        "}
              <label htmlFor={"amountInput"} className={"block text-sm font-bold text-gray-700 mb-2"}>
                {"المبلغ المستهدف (1 - 200):"}
              </label>
              {"\n                        "}
              <input type={"number"} id={"amountInput"} className={"num-input"} defaultValue={"77"} min={"1"} max={"200"} step={"1"} />
              {"\n                    "}
            </div>
            {"\n                    "}
            <div className={"flex items-end"}>
              {"\n                        "}
              <button id={"startBtn"} className={"greedy-btn btn-success w-full justify-center"} data-legacy-click={"startSimulation()"}>
                {"\n                            "}
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
                  <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
                </svg>
                {"\n                            ابدأ\n                        "}
              </button>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div id={"customCoinsGroup"} style={{"display":"none"}} className={"mb-3"}>
            {"\n                    "}
            <label htmlFor={"customCoins"} className={"block text-sm font-bold text-gray-700 mb-2"}>
              {"أدخل العملات المخصصة (مفصولة بفواصل):"}
            </label>
            {"\n                    "}
            <input type={"text"} id={"customCoins"} className={"num-input text-left"} dir={"ltr"} defaultValue={"1,3,4"} placeholder={"مثال: 1,3,4"} />
            {"\n                    "}
            <p className={"text-xs text-gray-400 mt-1"}>
              {"💡 جرّب 1,3,4 مع المبلغ 6 — سترى فشل الخوارزمية الجشعة!"}
            </p>
            {"\n                "}
          </div>
          {"\n\n                "}
          <div className={"flex flex-wrap gap-3 mt-4"}>
            {"\n                    "}
            <button id={"nextBtn"} className={"greedy-btn btn-primary"} disabled={true} data-legacy-click={"nextStep()"}>
              {"\n                        "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M13 7l5 5m0 0l-5 5m5-5H6"}></path>
              </svg>
              {"\n                        الخطوة التالية\n                    "}
            </button>
            {"\n                    "}
            <button id={"prevBtn"} className={"greedy-btn btn-secondary"} disabled={true} data-legacy-click={"previousStep()"}>
              {"\n                        "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M11 17l-5-5m0 0l5-5m-5 5h12"}></path>
              </svg>
              {"\n                        الخطوة السابقة\n                    "}
            </button>
            {"\n                    "}
            <button id={"resetBtn"} className={"greedy-btn btn-warning"} disabled={true} data-legacy-click={"resetSimulation()"}>
              {"\n                        "}
              <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-5 w-5"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}></path>
              </svg>
              {"\n                        إعادة الضبط\n                    "}
            </button>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div id={"visualization"} className={"px-6 md:px-8 py-6"}>
          {"\n\n                "}
          {"\n                "}
          <div className={"mb-6"}>
            {"\n                    "}
            <h3 className={"text-sm font-bold text-gray-600 mb-3"}>
              {"العملات المتاحة:"}
            </h3>
            {"\n                    "}
            <div id={"coinDisplay"} className={"flex flex-wrap gap-4 justify-center"}>
              {"\n                        "}
              <div className={"coin-box coin-available"}>
                {"50"}
              </div>
              {"\n                        "}
              <div className={"coin-box coin-available"}>
                {"20"}
              </div>
              {"\n                        "}
              <div className={"coin-box coin-available"}>
                {"10"}
              </div>
              {"\n                        "}
              <div className={"coin-box coin-available"}>
                {"5"}
              </div>
              {"\n                        "}
              <div className={"coin-box coin-available"}>
                {"1"}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div className={"mb-6"}>
            {"\n                    "}
            <div className={"target-display mx-auto"} style={{"maxWidth":"280px"}}>
              {"\n                        "}
              <div className={"target-label"}>
                {"المبلغ المستهدف"}
              </div>
              {"\n                        "}
              <div id={"targetDisplay"} className={"target-amount"}>
                {"77"}
              </div>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div className={"mb-6"}>
            {"\n                    "}
            <h3 className={"text-sm font-bold text-gray-600 mb-3"}>
              {"العملات المختارة:"}
            </h3>
            {"\n                    "}
            <div id={"selectedArea"} className={"selected-area"}>
              {"\n                        "}
              <span className={"text-gray-400 font-medium"}>
                {"لم يتم اختيار أي عملات بعد"}
              </span>
              {"\n                    "}
            </div>
            {"\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div id={"statusMessage"} className={"status-message mb-6"}>
            {"\n                    اضغط \"ابدأ\" لبدء محاكاة جديدة\n                "}
          </div>
          {"\n\n                "}
          {"\n                "}
          <div id={"finalResult"} className={"mb-6"}></div>
          {"\n\n            "}
        </div>
        {"\n\n            "}
        {"\n            "}
        <div className={"border-t border-gray-100 bg-gray-50 p-6 md:p-8"}>
          {"\n                "}
          <div className={"flex items-center gap-2 mb-4"}>
            {"\n                    "}
            <div className={"w-3 h-3 bg-amber-500 rounded-full animate-pulse"}></div>
            {"\n                    "}
            <h2 className={"text-lg font-bold text-gray-800"}>
              {"سجل الخطوات"}
            </h2>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"step-log"}>
            {"\n                    "}
            <table>
              <thead>
                <tr>
                  <th>
                    {"الخطوة"}
                  </th>
                  <th>
                    {"العملة"}
                  </th>
                  <th>
                    {"الإجراء"}
                  </th>
                  <th>
                    {"المبلغ المتبقي"}
                  </th>
                  <th>
                    {"العملات المختارة"}
                  </th>
                </tr>
              </thead>
              <tbody id={"stepLogBody"}>
                <tr>
                  <td colSpan={5} className={"text-gray-400 py-4 text-center"}>
                    {"لم تبدأ المحاكاة بعد"}
                  </td>
                </tr>
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
