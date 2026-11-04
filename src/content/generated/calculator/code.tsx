export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"الآلة الحاسبة العلمية — الكود البرمجي"}
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
        {" توفر هذه الدوال عمليات حسابية أساسية وعلمية: "}
        <strong>
          {"add"}
        </strong>
        {", "}
        <strong>
          {"subtract"}
        </strong>
        {", "}
        <strong>
          {"multiply"}
        </strong>
        {", "}
        <strong>
          {"divide"}
        </strong>
        {", "}
        <strong>
          {"power"}
        </strong>
        {", "}
        <strong>
          {"sqrt"}
        </strong>
        {", "}
        <strong>
          {"factorial"}
        </strong>
        {". ودالة "}
        <strong>
          {"evaluate(expression)"}
        </strong>
        {" تقوم بتحليل وتقييم تعبير رياضي بسيط (مثل \"3 + 5 * 2\").\n    "}
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
            {"#include <iostream>\n#include <cmath>\n#include <sstream>\n#include <stack>\n#include <cctype>\nusing namespace std;\n\ndouble add(double a, double b) { return a + b; }\ndouble subtract(double a, double b) { return a - b; }\ndouble multiply(double a, double b) { return a * b; }\ndouble divide(double a, double b) { return b != 0 ? a / b : 0; }\ndouble power(double a, double b) { return pow(a, b); }\ndouble sqrt(double a) { return a >= 0 ? std::sqrt(a) : 0; }\n\nlong long factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint precedence(char op) {\n    if (op == '+' || op == '-') return 1;\n    if (op == '*' || op == '/') return 2;\n    return 0;\n}\n\ndouble applyOp(double a, double b, char op) {\n    switch (op) {\n        case '+': return add(a, b);\n        case '-': return subtract(a, b);\n        case '*': return multiply(a, b);\n        case '/': return divide(a, b);\n        default: return 0;\n    }\n}\n\ndouble evaluate(string expr) {\n    stack<double> values;\n    stack<char> ops;\n    for (int i = 0; i < expr.length(); i++) {\n        if (isspace(expr[i])) continue;\n        if (isdigit(expr[i])) {\n            double val = 0;\n            while (i < expr.length() && isdigit(expr[i])) {\n                val = val * 10 + (expr[i] - '0');\n                i++;\n            }\n            values.push(val);\n            i--;\n        } else if (expr[i] == '(') {\n            ops.push(expr[i]);\n        } else if (expr[i] == ')') {\n            while (!ops.empty() && ops.top() != '(') {\n                double b = values.top(); values.pop();\n                double a = values.top(); values.pop();\n                values.push(applyOp(a, b, ops.top()));\n                ops.pop();\n            }\n            ops.pop();\n        } else {\n            while (!ops.empty() && precedence(ops.top()) >= precedence(expr[i])) {\n                double b = values.top(); values.pop();\n                double a = values.top(); values.pop();\n                values.push(applyOp(a, b, ops.top()));\n                ops.pop();\n            }\n            ops.push(expr[i]);\n        }\n    }\n    while (!ops.empty()) {\n        double b = values.top(); values.pop();\n        double a = values.top(); values.pop();\n        values.push(applyOp(a, b, ops.top()));\n        ops.pop();\n    }\n    return values.top();\n}\n\nint main() {\n    cout << \"add(3, 4) = \" << add(3, 4) << endl;\n    cout << \"multiply(5, 6) = \" << multiply(5, 6) << endl;\n    cout << \"power(2, 10) = \" << power(2, 10) << endl;\n    cout << \"sqrt(144) = \" << sqrt(144) << endl;\n    cout << \"factorial(5) = \" << factorial(5) << endl;\n    cout << \"evaluate(\\\"3 + 5 * 2\\\") = \" << evaluate(\"3 + 5 * 2\") << endl;\n    cout << \"evaluate(\\\"(3 + 5) * 2\\\") = \" << evaluate(\"(3 + 5) * 2\") << endl;\n    return 0;\n}"}
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
            {"import java.util.Stack;\n\npublic class Calculator {\n\n    public static double add(double a, double b) { return a + b; }\n    public static double subtract(double a, double b) { return a - b; }\n    public static double multiply(double a, double b) { return a * b; }\n    public static double divide(double a, double b) { return b != 0 ? a / b : 0; }\n    public static double power(double a, double b) { return Math.pow(a, b); }\n    public static double sqrt(double a) { return a >= 0 ? Math.sqrt(a) : 0; }\n\n    public static long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    private static int precedence(char op) {\n        switch (op) {\n            case '+': case '-': return 1;\n            case '*': case '/': return 2;\n            default: return 0;\n        }\n    }\n\n    private static double applyOp(double a, double b, char op) {\n        switch (op) {\n            case '+': return add(a, b);\n            case '-': return subtract(a, b);\n            case '*': return multiply(a, b);\n            case '/': return divide(a, b);\n            default: return 0;\n        }\n    }\n\n    public static double evaluate(String expr) {\n        Stack<Double> values = new Stack<>();\n        Stack<Character> ops = new Stack<>();\n        for (int i = 0; i < expr.length(); i++) {\n            char c = expr.charAt(i);\n            if (Character.isWhitespace(c)) continue;\n            if (Character.isDigit(c)) {\n                double val = 0;\n                while (i < expr.length() && Character.isDigit(expr.charAt(i))) {\n                    val = val * 10 + (expr.charAt(i) - '0');\n                    i++;\n                }\n                values.push(val);\n                i--;\n            } else if (c == '(') {\n                ops.push(c);\n            } else if (c == ')') {\n                while (ops.peek() != '(') {\n                    double b = values.pop();\n                    double a = values.pop();\n                    values.push(applyOp(a, b, ops.pop()));\n                }\n                ops.pop();\n            } else {\n                while (!ops.isEmpty() && precedence(ops.peek()) >= precedence(c)) {\n                    double b = values.pop();\n                    double a = values.pop();\n                    values.push(applyOp(a, b, ops.pop()));\n                }\n                ops.push(c);\n            }\n        }\n        while (!ops.isEmpty()) {\n            double b = values.pop();\n            double a = values.pop();\n            values.push(applyOp(a, b, ops.pop()));\n        }\n        return values.pop();\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"add(3, 4) = \" + add(3, 4));\n        System.out.println(\"multiply(5, 6) = \" + multiply(5, 6));\n        System.out.println(\"power(2, 10) = \" + power(2, 10));\n        System.out.println(\"sqrt(144) = \" + sqrt(144));\n        System.out.println(\"factorial(5) = \" + factorial(5));\n        System.out.println(\"evaluate(\\\"3 + 5 * 2\\\") = \" + evaluate(\"3 + 5 * 2\"));\n        System.out.println(\"evaluate(\\\"(3 + 5) * 2\\\") = \" + evaluate(\"(3 + 5) * 2\"));\n    }\n}"}
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
            {"function add(a, b) { return a + b; }\nfunction subtract(a, b) { return a - b; }\nfunction multiply(a, b) { return a * b; }\nfunction divide(a, b) { return b !== 0 ? a / b : 0; }\nfunction power(a, b) { return Math.pow(a, b); }\nfunction sqrt(a) { return a >= 0 ? Math.sqrt(a) : 0; }\n\nfunction factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nfunction precedence(op) {\n    if (op === '+' || op === '-') return 1;\n    if (op === '*' || op === '/') return 2;\n    return 0;\n}\n\nfunction applyOp(a, b, op) {\n    switch (op) {\n        case '+': return add(a, b);\n        case '-': return subtract(a, b);\n        case '*': return multiply(a, b);\n        case '/': return divide(a, b);\n        default: return 0;\n    }\n}\n\nfunction evaluate(expr) {\n    const values = [];\n    const ops = [];\n    for (let i = 0; i < expr.length; i++) {\n        const c = expr[i];\n        if (c === ' ') continue;\n        if (c >= '0' && c <= '9') {\n            let val = 0;\n            while (i < expr.length && expr[i] >= '0' && expr[i] <= '9') {\n                val = val * 10 + parseInt(expr[i]);\n                i++;\n            }\n            values.push(val);\n            i--;\n        } else if (c === '(') {\n            ops.push(c);\n        } else if (c === ')') {\n            while (ops.length > 0 && ops[ops.length - 1] !== '(') {\n                const b = values.pop();\n                const a = values.pop();\n                values.push(applyOp(a, b, ops.pop()));\n            }\n            ops.pop();\n        } else {\n            while (ops.length > 0 && precedence(ops[ops.length - 1]) >= precedence(c)) {\n                const b = values.pop();\n                const a = values.pop();\n                values.push(applyOp(a, b, ops.pop()));\n            }\n            ops.push(c);\n        }\n    }\n    while (ops.length > 0) {\n        const b = values.pop();\n        const a = values.pop();\n        values.push(applyOp(a, b, ops.pop()));\n    }\n    return values[0];\n}\n\nconsole.log(\"add(3, 4) = \" + add(3, 4));\nconsole.log(\"multiply(5, 6) = \" + multiply(5, 6));\nconsole.log(\"power(2, 10) = \" + power(2, 10));\nconsole.log(\"sqrt(144) = \" + sqrt(144));\nconsole.log(\"factorial(5) = \" + factorial(5));\nconsole.log('evaluate(\"3 + 5 * 2\") = ' + evaluate(\"3 + 5 * 2\"));\nconsole.log('evaluate(\"(3 + 5) * 2\") = ' + evaluate(\"(3 + 5) * 2\"));"}
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
            {"<?php\n\nfunction add($a, $b) { return $a + $b; }\nfunction subtract($a, $b) { return $a - $b; }\nfunction multiply($a, $b) { return $a * $b; }\nfunction divide($a, $b) { return $b != 0 ? $a / $b : 0; }\nfunction power($a, $b) { return pow($a, $b); }\nfunction sqrt_($a) { return $a >= 0 ? sqrt($a) : 0; }\n\nfunction factorial($n) {\n    if ($n <= 1) return 1;\n    return $n * factorial($n - 1);\n}\n\nfunction precedence($op) {\n    if ($op == '+' || $op == '-') return 1;\n    if ($op == '*' || $op == '/') return 2;\n    return 0;\n}\n\nfunction applyOp($a, $b, $op) {\n    switch ($op) {\n        case '+': return add($a, $b);\n        case '-': return subtract($a, $b);\n        case '*': return multiply($a, $b);\n        case '/': return divide($a, $b);\n        default: return 0;\n    }\n}\n\nfunction evaluate($expr) {\n    $values = [];\n    $ops = [];\n    $len = strlen($expr);\n    for ($i = 0; $i < $len; $i++) {\n        $c = $expr[$i];\n        if ($c == ' ') continue;\n        if (ctype_digit($c)) {\n            $val = 0;\n            while ($i < $len && ctype_digit($expr[$i])) {\n                $val = $val * 10 + intval($expr[$i]);\n                $i++;\n            }\n            $values[] = $val;\n            $i--;\n        } elseif ($c == '(') {\n            $ops[] = $c;\n        } elseif ($c == ')') {\n            while (end($ops) != '(') {\n                $b = array_pop($values);\n                $a = array_pop($values);\n                $values[] = applyOp($a, $b, array_pop($ops));\n            }\n            array_pop($ops);\n        } else {\n            while (!empty($ops) && precedence(end($ops)) >= precedence($c)) {\n                $b = array_pop($values);\n                $a = array_pop($values);\n                $values[] = applyOp($a, $b, array_pop($ops));\n            }\n            $ops[] = $c;\n        }\n    }\n    while (!empty($ops)) {\n        $b = array_pop($values);\n        $a = array_pop($values);\n        $values[] = applyOp($a, $b, array_pop($ops));\n    }\n    return $values[0];\n}\n\necho \"add(3, 4) = \" . add(3, 4) . \"\\n\";\necho \"multiply(5, 6) = \" . multiply(5, 6) . \"\\n\";\necho \"power(2, 10) = \" . power(2, 10) . \"\\n\";\necho \"sqrt(144) = \" . sqrt_(144) . \"\\n\";\necho \"factorial(5) = \" . factorial(5) . \"\\n\";\necho 'evaluate(\"3 + 5 * 2\") = ' . evaluate(\"3 + 5 * 2\") . \"\\n\";\necho 'evaluate(\"(3 + 5) * 2\") = ' . evaluate(\"(3 + 5) * 2\") . \"\\n\";\n\n?>"}
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
