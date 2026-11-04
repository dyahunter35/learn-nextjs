export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"العودية — الكود البرمجي"}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {"شرح مبسط مع أمثلة بلغات متعددة. يمكنك نسخ الكود واستخدامه."}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {"كيف تعمل:"}
        </strong>
        {" العودية (Recursion) هي تقنية تستدعي فيها الدالة نفسها لحل مسألة بتقسيمها إلى مسائل فرعية أصغر. دالة factorial(n) تحسب مضروب العدد، ودالة fibonacci(n) تحسب حد متتالية فيبوناتشي. تم تضمين النسخة التكرارية للمقارنة.\n    "}
      </div>
      {"\n\n    "}
      <div className={"lang-tabs"}>
        {"\n      "}
        <button className={"lang-tab active"} data-lang={"cpp"} data-legacy-click={"switchLang('cpp')"}>
          {"C++"}
        </button>
        {"\n      "}
        <button className={"lang-tab"} data-lang={"java"} data-legacy-click={"switchLang('java')"}>
          {"Java"}
        </button>
        {"\n      "}
        <button className={"lang-tab"} data-lang={"js"} data-legacy-click={"switchLang('js')"}>
          {"JavaScript"}
        </button>
        {"\n      "}
        <button className={"lang-tab"} data-lang={"php"} data-legacy-click={"switchLang('php')"}>
          {"PHP"}
        </button>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block active"} id={"code-cpp"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"cpp"} data-legacy-click={"copyCode('cpp')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-cpp"}>
            {"#include <iostream>\nusing namespace std;\n\n// Recursive factorial\nint factorialRec(int n) {\n    if (n <= 1) return 1;\n    return n * factorialRec(n - 1);\n}\n\n// Iterative factorial\nint factorialIter(int n) {\n    int result = 1;\n    for (int i = 2; i <= n; i++)\n        result *= i;\n    return result;\n}\n\n// Recursive fibonacci\nint fibRec(int n) {\n    if (n <= 1) return n;\n    return fibRec(n - 1) + fibRec(n - 2);\n}\n\n// Iterative fibonacci\nint fibIter(int n) {\n    if (n <= 1) return n;\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        int c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\n\nint main() {\n    int n = 6;\n    cout << \"factorialRec(\" << n << \") = \" << factorialRec(n) << endl;\n    cout << \"factorialIter(\" << n << \") = \" << factorialIter(n) << endl;\n    cout << \"fibRec(\" << n << \") = \" << fibRec(n) << endl;\n    cout << \"fibIter(\" << n << \") = \" << fibIter(n) << endl;\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"public class Recursion {\n\n    public static int factorialRec(int n) {\n        if (n <= 1) return 1;\n        return n * factorialRec(n - 1);\n    }\n\n    public static int factorialIter(int n) {\n        int result = 1;\n        for (int i = 2; i <= n; i++)\n            result *= i;\n        return result;\n    }\n\n    public static int fibRec(int n) {\n        if (n <= 1) return n;\n        return fibRec(n - 1) + fibRec(n - 2);\n    }\n\n    public static int fibIter(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n\n    public static void main(String[] args) {\n        int n = 6;\n        System.out.println(\"factorialRec(\" + n + \") = \" + factorialRec(n));\n        System.out.println(\"factorialIter(\" + n + \") = \" + factorialIter(n));\n        System.out.println(\"fibRec(\" + n + \") = \" + fibRec(n));\n        System.out.println(\"fibIter(\" + n + \") = \" + fibIter(n));\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"function factorialRec(n) {\n    if (n <= 1) return 1;\n    return n * factorialRec(n - 1);\n}\n\nfunction factorialIter(n) {\n    let result = 1;\n    for (let i = 2; i <= n; i++)\n        result *= i;\n    return result;\n}\n\nfunction fibRec(n) {\n    if (n <= 1) return n;\n    return fibRec(n - 1) + fibRec(n - 2);\n}\n\nfunction fibIter(n) {\n    if (n <= 1) return n;\n    let a = 0, b = 1;\n    for (let i = 2; i <= n; i++) {\n        const c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\n\nconst n = 6;\nconsole.log(\"factorialRec(\" + n + \") = \" + factorialRec(n));\nconsole.log(\"factorialIter(\" + n + \") = \" + factorialIter(n));\nconsole.log(\"fibRec(\" + n + \") = \" + fibRec(n));\nconsole.log(\"fibIter(\" + n + \") = \" + fibIter(n));"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}>
            {"<?php\n\nfunction factorialRec($n) {\n    if ($n <= 1) return 1;\n    return $n * factorialRec($n - 1);\n}\n\nfunction factorialIter($n) {\n    $result = 1;\n    for ($i = 2; $i <= $n; $i++)\n        $result *= $i;\n    return $result;\n}\n\nfunction fibRec($n) {\n    if ($n <= 1) return $n;\n    return fibRec($n - 1) + fibRec($n - 2);\n}\n\nfunction fibIter($n) {\n    if ($n <= 1) return $n;\n    $a = 0; $b = 1;\n    for ($i = 2; $i <= $n; $i++) {\n        $c = $a + $b;\n        $a = $b;\n        $b = $c;\n    }\n    return $b;\n}\n\n$n = 6;\necho \"factorialRec($n) = \" . factorialRec($n) . \"\\n\";\necho \"factorialIter($n) = \" . factorialIter($n) . \"\\n\";\necho \"fibRec($n) = \" . fibRec($n) . \"\\n\";\necho \"fibIter($n) = \" . fibIter($n) . \"\\n\";\n\n?>"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n  "}
    </div>
    {"\n\n  \n  \n  \n  \n"}
    </div>
  );
}
