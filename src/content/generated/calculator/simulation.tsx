export default function NativePage() {
  return (
    <div className="native-legacy-body min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {"\n    \n    \n    \n\n    \n\n    "}
    <div className={"py-8 md:py-12 px-4"}>
      {"\n      "}
      <div className={"max-w-lg mx-auto"}>
        {"\n\n        "}
        {"\n        "}
        <div className={"text-center mb-8"}>
          {"\n          "}
          <span className={"inline-block text-purple-500 font-bold text-sm tracking-widest uppercase mb-2"}>
            {"SCIENTIFIC CALCULATOR"}
          </span>
          {"\n          "}
          <h1 className={"text-3xl md:text-4xl font-extrabold text-gray-900"}>
            {"آلة حاسبة علمية متكاملة"}
          </h1>
          {"\n          "}
          <p className={"text-gray-500 mt-2"}>
            {"حسابات علمية متقدمة مع واجهة سهلة ومباشرة"}
          </p>
          {"\n        "}
        </div>
        {"\n\n        "}
        {"\n        "}
        <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-4"}>
          {"\n          "}
          <div className={"rounded-xl overflow-hidden bg-gray-200 border border-gray-300"}>
            {"\n            "}
            {"\n            "}
            <div className={"bg-slate-800 text-white p-6 pt-8"}>
              {"\n              "}
              <div id={"previous-operand"} className={"text-left text-lg text-gray-400 h-6 overflow-hidden"}></div>
              {"\n              "}
              <div id={"current-operand"} className={"text-left text-5xl font-bold break-all leading-tight h-16 transition-all duration-100"}>
                {"0"}
              </div>
              {"\n            "}
            </div>
            {"\n\n            "}
            {"\n            "}
            <div className={"grid grid-cols-5 gap-1.5 p-3"}>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"sin"}>
                {"sin"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"cos"}>
                {"cos"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"tan"}>
                {"tan"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"log"}>
                {"log"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"ln"}>
                {"ln"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"sinh"}>
                {"sinh"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"cosh"}>
                {"cosh"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"tanh"}>
                {"tanh"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"log2"}>
                {"log₂"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"exp10"}>
                {"10ˣ"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"asin"}>
                {"sin⁻¹"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"acos"}>
                {"cos⁻¹"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"atan"}>
                {"tan⁻¹"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"exp"}>
                {"eˣ"}
              </button>
              {"\n              "}
              <button className={"text-xs font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"twopow"}>
                {"2ˣ"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"sqrt"}>
                {"√"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-red-600 hover:bg-red-700 text-white calc-button"} data-operation={"clear"}>
                {"AC"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white calc-button"} data-operation={"delete"}>
                {"DEL"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white calc-button"} data-function={"%"}>
                {"%"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white calc-button"} data-operation={"÷"}>
                {"÷"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"cube"}>
                {"x³"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"7"}>
                {"7"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"8"}>
                {"8"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"9"}>
                {"9"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white calc-button"} data-operation={"×"}>
                {"×"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"cuberoot"}>
                {"∛"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"4"}>
                {"4"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"5"}>
                {"5"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"6"}>
                {"6"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white calc-button"} data-operation={"-"}>
                {"-"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"factorial"}>
                {"x!"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"1"}>
                {"1"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"2"}>
                {"2"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"3"}>
                {"3"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white calc-button"} data-operation={"+"}>
                {"+"}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"euler"}>
                {"e"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"abs"}>
                {"|x|"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"square"}>
                {"x²"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"power"}>
                {"xʸ"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"."}>
                {"."}
              </button>
              {"\n\n              "}
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"reciprocal"}>
                {"1/x"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"pi"}>
                {"π"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-scientific hover:bg-scientific-hover text-white calc-button"} data-function={"sign"}>
                {"+/−"}
              </button>
              {"\n              "}
              <button className={"text-xl font-bold p-3 rounded-xl bg-white hover:bg-gray-200 text-gray-900 calc-button"} data-number={"0"}>
                {"0"}
              </button>
              {"\n              "}
              <button className={"text-sm font-semibold p-3 rounded-xl bg-gradient-to-l from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white calc-button shadow-lg shadow-red-200"} data-operation={"="}>
                {"="}
              </button>
              {"\n\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n        "}
        </div>
        {"\n\n      "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n    \n"}
    </div>
  );
}
