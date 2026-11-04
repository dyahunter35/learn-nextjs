"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "truetale", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.4bb1deaf6e3562d1")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.f6641497577af02a")}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.ef1c667af06fc25c")}
        </strong>
        {t("legacy.6899950019b5074e")}
        <strong>
          {"AND"}
        </strong>
        {", "}
        <strong>
          {"OR"}
        </strong>
        {", "}
        <strong>
          {"NOT"}
        </strong>
        {", "}
        <strong>
          {"NAND"}
        </strong>
        {", "}
        <strong>
          {"NOR"}
        </strong>
        {", "}
        <strong>
          {"XOR"}
        </strong>
        {", "}
        <strong>
          {"XNOR"}
        </strong>
        {t("legacy.c3bc6757fc8f898c")}
        <strong>
          {"generateTruthTable(variables, expression)"}
        </strong>
        {t("legacy.094a862ec125510d")}
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
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-cpp"}>
            {"#include <iostream>\n#include <vector>\n#include <string>\n#include <cmath>\n#include <map>\nusing namespace std;\n\nbool AND(bool a, bool b) { return a && b; }\nbool OR(bool a, bool b) { return a || b; }\nbool NOT(bool a) { return !a; }\nbool NAND(bool a, bool b) { return !(a && b); }\nbool NOR(bool a, bool b) { return !(a || b); }\nbool XOR(bool a, bool b) { return a != b; }\nbool XNOR(bool a, bool b) { return a == b; }\n\nvoid generateTruthTable(vector<string> vars, string expr) {\n    int n = vars.size();\n    int rows = pow(2, n);\n    for (string v : vars) cout << v << \"\\t\";\n    cout << expr << endl;\n    for (int i = 0; i < rows; i++) {\n        map<string, bool> values;\n        for (int j = 0; j < n; j++)\n            values[vars[j]] = (i >> (n - 1 - j)) & 1;\n        for (int j = 0; j < n; j++)\n            cout << values[vars[j]] << \"\\t\";\n        // Evaluate expression manually for this example\n        // Here we show a simple hardcoded evaluation for \"A AND B\" or \"A OR B\"\n        bool a = values[\"A\"], b = values[\"B\"];\n        bool result = false;\n        if (expr == \"A AND B\") result = AND(a, b);\n        else if (expr == \"A OR B\") result = OR(a, b);\n        else if (expr == \"NOT A\") result = NOT(a);\n        else if (expr == \"A NAND B\") result = NAND(a, b);\n        else if (expr == \"A NOR B\") result = NOR(a, b);\n        else if (expr == \"A XOR B\") result = XOR(a, b);\n        else if (expr == \"A XNOR B\") result = XNOR(a, b);\n        cout << result << endl;\n    }\n}\n\nint main() {\n    cout << \"Truth table for A AND B:\" << endl;\n    generateTruthTable({\"A\", \"B\"}, \"A AND B\");\n\n    cout << \"\\nTruth table for A OR B:\" << endl;\n    generateTruthTable({\"A\", \"B\"}, \"A OR B\");\n\n    cout << \"\\nTruth table for NOT A:\" << endl;\n    generateTruthTable({\"A\"}, \"NOT A\");\n\n    cout << \"\\nBasic gates:\" << endl;\n    cout << \"AND(1,0) = \" << AND(1,0) << endl;\n    cout << \"OR(1,0) = \" << OR(1,0) << endl;\n    cout << \"NOT(1) = \" << NOT(1) << endl;\n    cout << \"NAND(1,0) = \" << NAND(1,0) << endl;\n    cout << \"NOR(1,0) = \" << NOR(1,0) << endl;\n    cout << \"XOR(1,0) = \" << XOR(1,0) << endl;\n    cout << \"XNOR(1,0) = \" << XNOR(1,0) << endl;\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"import java.util.*;\n\npublic class TruthTables {\n\n    public static boolean AND(boolean a, boolean b) { return a && b; }\n    public static boolean OR(boolean a, boolean b) { return a || b; }\n    public static boolean NOT(boolean a) { return !a; }\n    public static boolean NAND(boolean a, boolean b) { return !(a && b); }\n    public static boolean NOR(boolean a, boolean b) { return !(a || b); }\n    public static boolean XOR(boolean a, boolean b) { return a != b; }\n    public static boolean XNOR(boolean a, boolean b) { return a == b; }\n\n    public static void generateTruthTable(List<String> vars, String expr) {\n        int n = vars.size();\n        int rows = (int) Math.pow(2, n);\n        for (String v : vars) System.out.print(v + \"\\t\");\n        System.out.println(expr);\n        for (int i = 0; i < rows; i++) {\n            Map<String, Boolean> values = new HashMap<>();\n            for (int j = 0; j < n; j++)\n                values.put(vars.get(j), ((i >> (n - 1 - j)) & 1) == 1);\n            for (int j = 0; j < n; j++)\n                System.out.print((values.get(vars.get(j)) ? 1 : 0) + \"\\t\");\n            boolean a = values.get(\"A\"), b = values.get(\"B\");\n            boolean result = false;\n            switch (expr) {\n                case \"A AND B\": result = AND(a, b); break;\n                case \"A OR B\": result = OR(a, b); break;\n                case \"NOT A\": result = NOT(a); break;\n                case \"A NAND B\": result = NAND(a, b); break;\n                case \"A NOR B\": result = NOR(a, b); break;\n                case \"A XOR B\": result = XOR(a, b); break;\n                case \"A XNOR B\": result = XNOR(a, b); break;\n            }\n            System.out.println(result ? 1 : 0);\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Truth table for A AND B:\");\n        generateTruthTable(Arrays.asList(\"A\", \"B\"), \"A AND B\");\n\n        System.out.println(\"\\nTruth table for A OR B:\");\n        generateTruthTable(Arrays.asList(\"A\", \"B\"), \"A OR B\");\n\n        System.out.println(\"\\nTruth table for NOT A:\");\n        generateTruthTable(Arrays.asList(\"A\"), \"NOT A\");\n\n        System.out.println(\"\\nBasic gates:\");\n        System.out.println(\"AND(1,0) = \" + (AND(true, false) ? 1 : 0));\n        System.out.println(\"OR(1,0) = \" + (OR(true, false) ? 1 : 0));\n        System.out.println(\"NOT(1) = \" + (NOT(true) ? 1 : 0));\n        System.out.println(\"NAND(1,0) = \" + (NAND(true, false) ? 1 : 0));\n        System.out.println(\"NOR(1,0) = \" + (NOR(true, false) ? 1 : 0));\n        System.out.println(\"XOR(1,0) = \" + (XOR(true, false) ? 1 : 0));\n        System.out.println(\"XNOR(1,0) = \" + (XNOR(true, false) ? 1 : 0));\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"function AND(a, b) { return a && b; }\nfunction OR(a, b) { return a || b; }\nfunction NOT(a) { return !a; }\nfunction NAND(a, b) { return !(a && b); }\nfunction NOR(a, b) { return !(a || b); }\nfunction XOR(a, b) { return a !== b; }\nfunction XNOR(a, b) { return a === b; }\n\nfunction generateTruthTable(vars, expr) {\n    const n = vars.length;\n    const rows = Math.pow(2, n);\n    console.log(vars.join(\"\\t\") + \"\\t\" + expr);\n    for (let i = 0; i < rows; i++) {\n        const values = {};\n        for (let j = 0; j < n; j++)\n            values[vars[j]] = !!((i >> (n - 1 - j)) & 1);\n        const row = vars.map(v => (values[v] ? 1 : 0)).join(\"\\t\");\n        const a = values[\"A\"], b = values[\"B\"];\n        let result;\n        switch (expr) {\n            case \"A AND B\": result = AND(a, b); break;\n            case \"A OR B\": result = OR(a, b); break;\n            case \"NOT A\": result = NOT(a); break;\n            case \"A NAND B\": result = NAND(a, b); break;\n            case \"A NOR B\": result = NOR(a, b); break;\n            case \"A XOR B\": result = XOR(a, b); break;\n            case \"A XNOR B\": result = XNOR(a, b); break;\n            default: result = false;\n        }\n        console.log(row + \"\\t\" + (result ? 1 : 0));\n    }\n}\n\nconsole.log(\"Truth table for A AND B:\");\ngenerateTruthTable([\"A\", \"B\"], \"A AND B\");\n\nconsole.log(\"\\nTruth table for A OR B:\");\ngenerateTruthTable([\"A\", \"B\"], \"A OR B\");\n\nconsole.log(\"\\nTruth table for NOT A:\");\ngenerateTruthTable([\"A\"], \"NOT A\");\n\nconsole.log(\"\\nBasic gates:\");\nconsole.log(\"AND(1,0) = \" + (AND(true, false) ? 1 : 0));\nconsole.log(\"OR(1,0) = \" + (OR(true, false) ? 1 : 0));\nconsole.log(\"NOT(1) = \" + (NOT(true) ? 1 : 0));\nconsole.log(\"NAND(1,0) = \" + (NAND(true, false) ? 1 : 0));\nconsole.log(\"NOR(1,0) = \" + (NOR(true, false) ? 1 : 0));\nconsole.log(\"XOR(1,0) = \" + (XOR(true, false) ? 1 : 0));\nconsole.log(\"XNOR(1,0) = \" + (XNOR(true, false) ? 1 : 0));"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}>
            {"<?php\n\nfunction AND($a, $b) { return $a && $b; }\nfunction OR($a, $b) { return $a || $b; }\nfunction NOT($a) { return !$a; }\nfunction NAND($a, $b) { return !($a && $b); }\nfunction NOR($a, $b) { return !($a || $b); }\nfunction XOR($a, $b) { return $a != $b; }\nfunction XNOR($a, $b) { return $a == $b; }\n\nfunction generateTruthTable($vars, $expr) {\n    $n = count($vars);\n    $rows = pow(2, $n);\n    echo implode(\"\\t\", $vars) . \"\\t$expr\\n\";\n    for ($i = 0; $i < $rows; $i++) {\n        $values = [];\n        foreach ($vars as $j => $v)\n            $values[$v] = (bool)(($i >> ($n - 1 - $j)) & 1);\n        $row = [];\n        foreach ($vars as $v)\n            $row[] = $values[$v] ? 1 : 0;\n        $a = $values[\"A\"];\n        $b = $values[\"B\"];\n        $result = false;\n        switch ($expr) {\n            case \"A AND B\": $result = AND($a, $b); break;\n            case \"A OR B\": $result = OR($a, $b); break;\n            case \"NOT A\": $result = NOT($a); break;\n            case \"A NAND B\": $result = NAND($a, $b); break;\n            case \"A NOR B\": $result = NOR($a, $b); break;\n            case \"A XOR B\": $result = XOR($a, $b); break;\n            case \"A XNOR B\": $result = XNOR($a, $b); break;\n        }\n        echo implode(\"\\t\", $row) . \"\\t\" . ($result ? 1 : 0) . \"\\n\";\n    }\n}\n\necho \"Truth table for A AND B:\\n\";\ngenerateTruthTable([\"A\", \"B\"], \"A AND B\");\n\necho \"\\nTruth table for A OR B:\\n\";\ngenerateTruthTable([\"A\", \"B\"], \"A OR B\");\n\necho \"\\nTruth table for NOT A:\\n\";\ngenerateTruthTable([\"A\"], \"NOT A\");\n\necho \"\\nBasic gates:\\n\";\necho \"AND(1,0) = \" . (AND(true, false) ? 1 : 0) . \"\\n\";\necho \"OR(1,0) = \" . (OR(true, false) ? 1 : 0) . \"\\n\";\necho \"NOT(1) = \" . (NOT(true) ? 1 : 0) . \"\\n\";\necho \"NAND(1,0) = \" . (NAND(true, false) ? 1 : 0) . \"\\n\";\necho \"NOR(1,0) = \" . (NOR(true, false) ? 1 : 0) . \"\\n\";\necho \"XOR(1,0) = \" . (XOR(true, false) ? 1 : 0) . \"\\n\";\necho \"XNOR(1,0) = \" . (XNOR(true, false) ? 1 : 0) . \"\\n\";\n\n?>"}
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
