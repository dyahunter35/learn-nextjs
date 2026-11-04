export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n  \n    \n    \n\n  \n\n  "}
    <main className={"container mx-auto px-4 py-6"}>
      {"\n\n    "}
      <h1 className={"text-2xl md:text-3xl font-bold text-indigo-900 text-center mb-6"}>
        {"\n      👑 محاكاة التراجع - مسألة "}
        <span dir={"ltr"} className={"inline-block"}>
          {"N-Queens"}
        </span>
        {"\n    "}
      </h1>
      {"\n\n    "}
      <div className={"controls-bar"}>
        {"\n      "}
        <div className={"flex flex-wrap gap-3 items-center justify-center"}>
          {"\n\n        "}
          <div className={"flex items-center gap-2"}>
            {"\n          "}
            <label htmlFor={"board-size"} className={"font-medium text-gray-700 text-sm"}>
              {"حجم اللوحة:"}
            </label>
            {"\n          "}
            <select id={"board-size"} className={"border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"}>
              {"\n            "}
              <option value={"4"}>
                {"4 × 4"}
              </option>
              {"\n            "}
              <option value={"5"}>
                {"5 × 5"}
              </option>
              {"\n            "}
              <option value={"6"}>
                {"6 × 6"}
              </option>
              {"\n            "}
              <option value={"7"}>
                {"7 × 7"}
              </option>
              {"\n            "}
              <option value={"8"}>
                {"8 × 8"}
              </option>
              {"\n          "}
            </select>
            {"\n        "}
          </div>
          {"\n\n        "}
          <button id={"btn-start"} className={"bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow"}>
            {"\n          ▶ ابدأ\n        "}
          </button>
          {"\n\n        "}
          <button id={"btn-prev"} className={"bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"} disabled={true}>
            {"\n          ◀ السابقة\n        "}
          </button>
          {"\n\n        "}
          <button id={"btn-next"} className={"bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"} disabled={true}>
            {"\n          التالية ▶\n        "}
          </button>
          {"\n\n        "}
          <button id={"btn-reset"} className={"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"}>
            {"\n          ↺ إعادة الضبط\n        "}
          </button>
          {"\n\n        "}
          <div className={"flex items-center gap-3"}>
            {"\n          "}
            <label className={"flex items-center gap-1.5 cursor-pointer text-sm text-gray-700"}>
              {"\n            "}
              <input type={"checkbox"} id={"auto-solve"} className={"w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"} />
              {"\n            تشغيل تلقائي\n          "}
            </label>
            {"\n          "}
            <select id={"speed-control"} className={"speed-control border border-gray-300 rounded-lg px-2 py-1.5 text-xs bg-white"}>
              {"\n            "}
              <option value={"1000"}>
                {"بطيء"}
              </option>
              {"\n            "}
              <option value={"500"} selected={true}>
                {"متوسط"}
              </option>
              {"\n            "}
              <option value={"200"}>
                {"سريع"}
              </option>
              {"\n            "}
              <option value={"50"}>
                {"سريع جداً"}
              </option>
              {"\n          "}
            </select>
            {"\n        "}
          </div>
          {"\n\n      "}
        </div>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"grid grid-cols-1 lg:grid-cols-3 gap-6"}>
        {"\n\n      "}
        <div className={"lg:col-span-1 order-2 lg:order-1"}>
          {"\n        "}
          <div className={"info-panel"}>
            {"\n\n          "}
            <div className={"mb-4"}>
              {"\n            "}
              <h3 className={"font-bold text-indigo-800 mb-2 text-lg"}>
                {"📊 حالة المحاكاة"}
              </h3>
              {"\n            "}
              <div id={"status"}>
                {"\n              "}
                <p>
                  {"اضغط \"ابدأ\" لبدء المحاكاة"}
                </p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div className={"mb-4 flex items-center justify-between bg-indigo-50 rounded-xl p-3"}>
              {"\n            "}
              <span className={"font-bold text-indigo-800"}>
                {"عدد الحلول:"}
              </span>
              {"\n            "}
              <span id={"solution-count"} className={"solution-badge"}>
                {"0"}
              </span>
              {"\n          "}
            </div>
            {"\n\n          "}
            <div>
              {"\n            "}
              <h4 className={"font-bold text-indigo-800 mb-2"}>
                {"📝 سجل الخطوات"}
              </h4>
              {"\n            "}
              <div id={"step-log"} className={"log-container"}>
                {"\n              "}
                <p className={"text-gray-500 text-sm"}>
                  {"سجل الخطوات سيظهر هنا..."}
                </p>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n\n      "}
        <div className={"lg:col-span-2 order-1 lg:order-2"}>
          {"\n        "}
          <div className={"bg-white rounded-xl shadow-lg p-4 md:p-6"}>
            {"\n          "}
            <div id={"board-container"} className={"bt-board"}></div>
            {"\n          "}
            <div className={"mt-4 text-center"}>
              {"\n            "}
              <span id={"step-info"} className={"inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium"}>
                {"الخطوة: - / -"}
              </span>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n\n        "}
          <div className={"mt-4 bg-white rounded-xl shadow-lg p-4"}>
            {"\n          "}
            <h4 className={"font-bold text-indigo-800 mb-3 text-sm"}>
              {"🔑 دليل الألوان"}
            </h4>
            {"\n          "}
            <div className={"flex flex-wrap gap-4 text-sm"}>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <span className={"inline-block w-5 h-5 rounded bg-amber-400 border border-amber-500"}></span>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {"محاولة"}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <span className={"inline-block w-5 h-5 rounded bg-emerald-400 border border-emerald-500"}></span>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {"نجاح (ملكة)"}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <span className={"inline-block w-5 h-5 rounded bg-red-400 border border-red-500"}></span>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {"تعارض / تحت الهجوم"}
                </span>
                {"\n            "}
              </div>
              {"\n            "}
              <div className={"flex items-center gap-1.5"}>
                {"\n              "}
                <span className={"inline-block w-5 h-5 rounded bg-gray-300 border border-gray-400"}></span>
                {"\n              "}
                <span className={"text-gray-600"}>
                  {"تراجع"}
                </span>
                {"\n            "}
              </div>
              {"\n          "}
            </div>
            {"\n        "}
          </div>
          {"\n      "}
        </div>
        {"\n\n    "}
      </div>
      {"\n\n  "}
    </main>
    {"\n\n  \n\n  \n  \n"}
    </div>
  );
}
