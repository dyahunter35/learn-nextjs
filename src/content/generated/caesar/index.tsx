export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50">
    {"\n\n    \n    \n    \n\n    \n\n    "}
    <div className={"max-w-4xl mx-auto bg-white shadow-2xl rounded-xl mt-8 mb-12 p-8 md:p-10"}>
      {"\n        "}
      <header className={"text-center mb-10 border-b border-gray-100 pb-6"}>
        {"\n            "}
        <span className={"inline-block text-green-500 font-bold text-sm tracking-widest uppercase mb-2"}>
          {"CAESAR CIPHER"}
        </span>
        {"\n            "}
        <h1 className={"text-4xl font-extrabold text-gray-900"}>
          {"\n                خوارزمية يوليوس قيصر "}
          <span className={"text-green-600"}>
            {"(Caesar Cipher)"}
          </span>
          {"\n            "}
        </h1>
        {"\n            "}
        <p className={"mt-2 text-lg text-gray-500"}>
          {"\n                فهم آلية التشفير والتحليل: تشفير قيصر\n            "}
        </p>
        {"\n        "}
      </header>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-red-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}></path>
            {"\n                "}
          </svg>
          {"\n                ما هو تشفير قيصر؟\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تشفير قيصر (Caesar Cipher) هو أحد أقدم وأبسط أساليب التشفير المعروفة في التاريخ. سُمي بهذا الاسم نسبةً إلى القائد الروماني يوليوس قيصر (Julius Caesar) الذي استخدمه للتواصل مع جنرالاته بشكل آمن.\n            "}
        </p>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تعتمد الفكرة على إزاحة (Shift) كل حرف في النص الأصلي بعدد ثابت من المواضع في الأبجدية، مما ينتج نصاً مشفراً لا يمكن قراءته إلا من قبل الشخص الذي يعرف قيمة الإزاحة (المفتاح).\n            "}
        </p>
        {"\n            "}
        <div className={"bg-yellow-50 p-5 rounded-lg shadow-md border-r-4 border-yellow-400"}>
          {"\n                "}
          <p className={"text-yellow-800 font-semibold"}>
            {"\n                    "}
            <span className={"text-lg"}>
              {"🏛️"}
            </span>
            {" يُقال إن يوليوس قيصر كان يستخدم إزاحة بمقدار 3 أحرف (Key = 3) في مراسلاته العسكرية.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-amber-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                كيفية عمله: شرح عملية الإزاحة\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                تعتمد الفكرة على ترقيم الأحرف الأبجدية العربية (28 حرفاً) بأرقام من 1 إلى 28، ثم إزاحة رقم كل حرف بمقدار ثابت يسمى المفتاح (Key).\n            "}
        </p>
        {"\n            "}
        <div className={"bg-blue-50 p-5 rounded-lg shadow-md mb-6"}>
          {"\n                "}
          <h3 className={"text-xl font-semibold text-blue-800 mb-3"}>
            {"الأبجدية العربية (28 حرفاً)"}
          </h3>
          {"\n                "}
          <div className={"overflow-x-auto"}>
            {"\n                    "}
            <table className={"alphabet-table w-full text-center"}>
              <thead>
                <tr>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الفهرس"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الحرف"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الفهرس"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الحرف"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الفهرس"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الحرف"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الفهرس"}
                  </th>
                  <th className={"bg-indigo-600 text-white"}>
                    {"الحرف"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {"1"}
                  </td>
                  <td>
                    {"ا"}
                  </td>
                  <td>
                    {"8"}
                  </td>
                  <td>
                    {"د"}
                  </td>
                  <td>
                    {"15"}
                  </td>
                  <td>
                    {"ض"}
                  </td>
                  <td>
                    {"22"}
                  </td>
                  <td>
                    {"ك"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"2"}
                  </td>
                  <td>
                    {"ب"}
                  </td>
                  <td>
                    {"9"}
                  </td>
                  <td>
                    {"ذ"}
                  </td>
                  <td>
                    {"16"}
                  </td>
                  <td>
                    {"ط"}
                  </td>
                  <td>
                    {"23"}
                  </td>
                  <td>
                    {"ل"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"3"}
                  </td>
                  <td>
                    {"ت"}
                  </td>
                  <td>
                    {"10"}
                  </td>
                  <td>
                    {"ر"}
                  </td>
                  <td>
                    {"17"}
                  </td>
                  <td>
                    {"ظ"}
                  </td>
                  <td>
                    {"24"}
                  </td>
                  <td>
                    {"م"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"4"}
                  </td>
                  <td>
                    {"ث"}
                  </td>
                  <td>
                    {"11"}
                  </td>
                  <td>
                    {"ز"}
                  </td>
                  <td>
                    {"18"}
                  </td>
                  <td>
                    {"ع"}
                  </td>
                  <td>
                    {"25"}
                  </td>
                  <td>
                    {"ن"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"5"}
                  </td>
                  <td>
                    {"ج"}
                  </td>
                  <td>
                    {"12"}
                  </td>
                  <td>
                    {"س"}
                  </td>
                  <td>
                    {"19"}
                  </td>
                  <td>
                    {"غ"}
                  </td>
                  <td>
                    {"26"}
                  </td>
                  <td>
                    {"ه"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"6"}
                  </td>
                  <td>
                    {"ح"}
                  </td>
                  <td>
                    {"13"}
                  </td>
                  <td>
                    {"ش"}
                  </td>
                  <td>
                    {"20"}
                  </td>
                  <td>
                    {"ف"}
                  </td>
                  <td>
                    {"27"}
                  </td>
                  <td>
                    {"و"}
                  </td>
                </tr>
                <tr>
                  <td>
                    {"7"}
                  </td>
                  <td>
                    {"خ"}
                  </td>
                  <td>
                    {"14"}
                  </td>
                  <td>
                    {"ص"}
                  </td>
                  <td>
                    {"21"}
                  </td>
                  <td>
                    {"ق"}
                  </td>
                  <td>
                    {"28"}
                  </td>
                  <td>
                    {"ي"}
                  </td>
                </tr>
              </tbody>
            </table>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-700 leading-loose"}>
          {"\n                عند تشفير رسالة، يتم استبدال كل حرف بالحرف الذي يليه بمقدار المفتاح في الأبجدية. مثلاً، إذا كان المفتاح = 3، فإن الحرف \"أ\" يُستبدل بالحرف \"د\"، والحرف \"ب\" يُستبدل بالحرف \"هـ\"، وهكذا.\n            "}
        </p>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-green-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}></path>
            {"\n                "}
          </svg>
          {"\n                قانون التشفير (Encryption)\n            "}
        </h2>
        {"\n            "}
        <div className={"bg-green-50 p-5 rounded-lg shadow-md border-green-400"}>
          {"\n                "}
          <p className={"text-gray-700 mb-3 text-lg"}>
            {"\n                    يتم تشفير الحرف عن طريق إضافة قيمة المفتاح إلى رقم الحرف الأصلي، ثم أخذ باقي القسمة على 28:\n                "}
          </p>
          {"\n                "}
          <div className={"formula text-2xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto text-center font-bold text-green-700"}>
            {"\n                    Encrypt(x) = (x + Key) mod 28\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-green-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"x"}
            </span>
            {": رقم الحرف الأصلي في الأبجدية (1-28).\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"Key"}
            </span>
            {": مفتاح الإزاحة (عدد صحيح بين 1 و 27).\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"mod 28"}
            </span>
            {": عملية modulo للحفاظ على النتيجة ضمن نطاق 1-28.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-purple-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}></path>
            {"\n                "}
          </svg>
          {"\n                قانون فك التشفير (Decryption)\n            "}
        </h2>
        {"\n            "}
        <div className={"bg-purple-50 p-5 rounded-lg shadow-md border-purple-400"}>
          {"\n                "}
          <p className={"text-gray-700 mb-3 text-lg"}>
            {"\n                    يتم فك التشفير بعكس العملية، وذلك بطرح قيمة المفتاح من رقم الحرف المشفر، ثم أخذ باقي القسمة على 28:\n                "}
          </p>
          {"\n                "}
          <div className={"formula text-2xl bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto text-center font-bold text-purple-700"}>
            {"\n                    Decrypt(x) = (x - Key) mod 28\n                "}
          </div>
          {"\n                "}
          <p className={"text-sm mt-3 text-purple-600"}>
            {"\n                    "}
            <span className={"font-mono"}>
              {"x"}
            </span>
            {": رقم الحرف المشفر في الأبجدية (1-28).\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"Key"}
            </span>
            {": نفس المفتاح الذي استُخدم في التشفير.\n                    "}
            <br />
            {"\n                    "}
            <span className={"font-mono"}>
              {"ملاحظة"}
            </span>
            {": في حال كانت نتيجة الطرح سالبة، نضيف 28 للحصول على رقم موجب.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-12"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-teal-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}></path>
            {"\n                "}
          </svg>
          {"\n                مثال توضيحي\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                لنفترض أن المفتاح (Key) = 3، ونريد تشفير الكلمة "}
          <span className={"font-bold text-indigo-700 cipher-text"}>
            {"مرحبا"}
          </span>
          {":\n            "}
        </p>
        {"\n            "}
        <div className={"overflow-x-auto mb-6"}>
          {"\n                "}
          <table className={"steps-table w-full"}>
            <thead>
              <tr>
                <th>
                  {"الحرف الأصلي"}
                </th>
                <th>
                  {"رقمه (x)"}
                </th>
                <th>
                  {"عملية التشفير"}
                </th>
                <th>
                  {"الرقم الجديد"}
                </th>
                <th>
                  {"الحرف المشفر"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {"م"}
                </td>
                <td>
                  {"24"}
                </td>
                <td>
                  {"(24 + 3) mod 28 = 27"}
                </td>
                <td>
                  {"27"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {"و"}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {"ر"}
                </td>
                <td>
                  {"10"}
                </td>
                <td>
                  {"(10 + 3) mod 28 = 13"}
                </td>
                <td>
                  {"13"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {"ش"}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {"ح"}
                </td>
                <td>
                  {"6"}
                </td>
                <td>
                  {"(6 + 3) mod 28 = 9"}
                </td>
                <td>
                  {"9"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {"ذ"}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {"ب"}
                </td>
                <td>
                  {"2"}
                </td>
                <td>
                  {"(2 + 3) mod 28 = 5"}
                </td>
                <td>
                  {"5"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {"ج"}
                </td>
              </tr>
              <tr>
                <td className={"cipher-text text-xl"}>
                  {"ا"}
                </td>
                <td>
                  {"1"}
                </td>
                <td>
                  {"(1 + 3) mod 28 = 4"}
                </td>
                <td>
                  {"4"}
                </td>
                <td className={"cipher-text text-xl text-green-700 font-bold"}>
                  {"ث"}
                </td>
              </tr>
            </tbody>
          </table>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-teal-50 p-5 rounded-lg shadow-md border-r-4 border-teal-400"}>
          {"\n                "}
          <p className={"text-teal-800 text-lg font-semibold"}>
            {"\n                    "}
            <span className={"text-xl"}>
              {"🔐"}
            </span>
            {" النتيجة: كلمة "}
            <span className={"cipher-text text-xl font-bold"}>
              {"مرحبا"}
            </span>
            {" تُصبح "}
            <span className={"cipher-text text-xl font-bold text-teal-700"}>
              {"وشذجث"}
            </span>
            {" بعد التشفير بمفتاح 3.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mt-4"}>
          {"\n                وللتحقق من صحة العملية، يمكن تطبيق قانون فك التشفير على النص المشفر "}
          <span className={"cipher-text font-bold"}>
            {"وشذجث"}
          </span>
          {" بنفس المفتاح (3) لاسترجاع النص الأصلي "}
          <span className={"cipher-text font-bold"}>
            {"مرحبا"}
          </span>
          {".\n            "}
        </p>
        {"\n        "}
      </section>
      {"\n\n        "}
      <section className={"mb-10"}>
        {"\n            "}
        <h2 className={"text-3xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2 flex items-center"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-8 w-8 ml-3 text-rose-600"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}></path>
            {"\n                "}
          </svg>
          {"\n                مفهوم المفتاح (Key) وأهميته\n            "}
        </h2>
        {"\n            "}
        <p className={"text-gray-700 leading-loose mb-4"}>
          {"\n                المفتاح (Key) هو الرقم السري الذي يحدد مقدار الإزاحة. يجب أن يتفق عليه كل من المُرسِل والمُستقبِل مسبقاً ليتمكن المُستقبِل من فك تشفير الرسالة بنجاح.\n            "}
        </p>
        {"\n            "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          {"\n                "}
          <div className={"bg-blue-50 p-5 rounded-lg shadow-md"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-blue-800 mb-2"}>
              {"أهمية المفتاح"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {"بدون المفتاح الصحيح، لا يمكن فك تشفير الرسالة."}
              </li>
              {"\n                        "}
              <li>
                {"كلما كان المفتاح معقداً، زادت صعوبة اختراق التشفير."}
              </li>
              {"\n                        "}
              <li>
                {"يجب حفظ المفتاح بشكل آمن وعدم مشاركته مع أطراف غير موثوقة."}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n                "}
          <div className={"bg-amber-50 p-5 rounded-lg shadow-md"}>
            {"\n                    "}
            <h3 className={"text-lg font-bold text-amber-800 mb-2"}>
              {"نقاط الضعف"}
            </h3>
            {"\n                    "}
            <ul className={"list-disc list-inside space-y-1 text-gray-700"}>
              {"\n                        "}
              <li>
                {"عدد المفاتيح المحتملة محدود (27 مفتاحاً فقط للأبجدية العربية)."}
              </li>
              {"\n                        "}
              <li>
                {"يمكن اختراق التشفير بسهولة باستخدام هجوم القوة العمياء (Brute Force Attack)."}
              </li>
              {"\n                        "}
              <li>
                {"تحليل التكرار (Frequency Analysis) يمكنه كسر التشفير بسهولة."}
              </li>
              {"\n                    "}
            </ul>
            {"\n                "}
          </div>
          {"\n            "}
        </div>
        {"\n            "}
        <div className={"bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg shadow-md border border-indigo-200"}>
          {"\n                "}
          <p className={"text-indigo-800 font-semibold text-center"}>
            {"\n                    على الرغم من بساطته وضعفه أمام الهجمات الحديثة، يُعد تشفير قيصر نقطة انطلاق ممتازة لفهم مبادئ التشفير الأساسية.\n                "}
          </p>
          {"\n            "}
        </div>
        {"\n        "}
      </section>
      {"\n\n        "}
      <div className={"text-center mt-10"}>
        {"\n            "}
        <a href={"/algorithms/caesar/simulation"} className={"inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 text-xl"}>
          {"\n                "}
          <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 inline ml-2"} fill={"none"} viewBox={"0 0 24 24"} stroke={"currentColor"}>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}></path>
            {"\n                    "}
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}></path>
            {"\n                "}
          </svg>
          {"\n                انتقل إلى التطبيق التفاعلي\n            "}
        </a>
        {"\n        "}
      </div>
      {"\n    "}
    </div>
    {"\n\n    \n  \n"}
    </div>
  );
}
