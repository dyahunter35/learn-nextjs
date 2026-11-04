"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "converters", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.239a002f8ff045bc")}
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
        {t("legacy.a3151686b8287852")}
        <strong>
          {"decToBin"}
        </strong>
        {t("legacy.994b59471165a725")}
        <strong>
          {"binToDec"}
        </strong>
        {t("legacy.8af1814f61c66933")}
        <strong>
          {"decToHex"}
        </strong>
        {t("legacy.2b1e0f181e7a656c")}
        <strong>
          {"hexToDec"}
        </strong>
        {t("legacy.80db4e63d2ec69e0")}
        <strong>
          {"decToOct"}
        </strong>
        {t("legacy.4f36b093fb8e93d5")}
        <strong>
          {"octToDec"}
        </strong>
        {t("legacy.443af1dba53511af")}
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
            {"#include <iostream>\n#include <string>\n#include <algorithm>\n#include <sstream>\nusing namespace std;\n\nstring decToBin(int n) {\n    if (n == 0) return \"0\";\n    string res;\n    while (n > 0) {\n        res += (n % 2) + '0';\n        n /= 2;\n    }\n    reverse(res.begin(), res.end());\n    return res;\n}\n\nint binToDec(string s) {\n    int res = 0;\n    for (char c : s)\n        res = res * 2 + (c - '0');\n    return res;\n}\n\nstring decToHex(int n) {\n    if (n == 0) return \"0\";\n    string res;\n    while (n > 0) {\n        int rem = n % 16;\n        res += rem < 10 ? rem + '0' : rem - 10 + 'A';\n        n /= 16;\n    }\n    reverse(res.begin(), res.end());\n    return res;\n}\n\nint hexToDec(string s) {\n    int res = 0;\n    for (char c : s) {\n        int val;\n        if (c >= '0' && c <= '9') val = c - '0';\n        else val = toupper(c) - 'A' + 10;\n        res = res * 16 + val;\n    }\n    return res;\n}\n\nstring decToOct(int n) {\n    if (n == 0) return \"0\";\n    string res;\n    while (n > 0) {\n        res += (n % 8) + '0';\n        n /= 8;\n    }\n    reverse(res.begin(), res.end());\n    return res;\n}\n\nint octToDec(string s) {\n    int res = 0;\n    for (char c : s)\n        res = res * 8 + (c - '0');\n    return res;\n}\n\nint main() {\n    int n = 42;\n    cout << \"decToBin(\" << n << \") = \" << decToBin(n) << endl;\n    cout << \"binToDec(\\\"101010\\\") = \" << binToDec(\"101010\") << endl;\n    cout << \"decToHex(\" << n << \") = \" << decToHex(n) << endl;\n    cout << \"hexToDec(\\\"2A\\\") = \" << hexToDec(\"2A\") << endl;\n    cout << \"decToOct(\" << n << \") = \" << decToOct(n) << endl;\n    cout << \"octToDec(\\\"52\\\") = \" << octToDec(\"52\") << endl;\n    return 0;\n}"}
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
            {"public class Converters {\n\n    public static String decToBin(int n) {\n        if (n == 0) return \"0\";\n        StringBuilder sb = new StringBuilder();\n        while (n > 0) {\n            sb.append(n % 2);\n            n /= 2;\n        }\n        return sb.reverse().toString();\n    }\n\n    public static int binToDec(String s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++)\n            res = res * 2 + (s.charAt(i) - '0');\n        return res;\n    }\n\n    public static String decToHex(int n) {\n        if (n == 0) return \"0\";\n        StringBuilder sb = new StringBuilder();\n        while (n > 0) {\n            int rem = n % 16;\n            sb.append(rem < 10 ? (char)(rem + '0') : (char)(rem - 10 + 'A'));\n            n /= 16;\n        }\n        return sb.reverse().toString();\n    }\n\n    public static int hexToDec(String s) {\n        int res = 0;\n        s = s.toUpperCase();\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            int val;\n            if (c >= '0' && c <= '9') val = c - '0';\n            else val = c - 'A' + 10;\n            res = res * 16 + val;\n        }\n        return res;\n    }\n\n    public static String decToOct(int n) {\n        if (n == 0) return \"0\";\n        StringBuilder sb = new StringBuilder();\n        while (n > 0) {\n            sb.append(n % 8);\n            n /= 8;\n        }\n        return sb.reverse().toString();\n    }\n\n    public static int octToDec(String s) {\n        int res = 0;\n        for (int i = 0; i < s.length(); i++)\n            res = res * 8 + (s.charAt(i) - '0');\n        return res;\n    }\n\n    public static void main(String[] args) {\n        int n = 42;\n        System.out.println(\"decToBin(\" + n + \") = \" + decToBin(n));\n        System.out.println(\"binToDec(\\\"101010\\\") = \" + binToDec(\"101010\"));\n        System.out.println(\"decToHex(\" + n + \") = \" + decToHex(n));\n        System.out.println(\"hexToDec(\\\"2A\\\") = \" + hexToDec(\"2A\"));\n        System.out.println(\"decToOct(\" + n + \") = \" + decToOct(n));\n        System.out.println(\"octToDec(\\\"52\\\") = \" + octToDec(\"52\"));\n    }\n}"}
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
            {"function decToBin(n) {\n    if (n === 0) return \"0\";\n    let res = \"\";\n    while (n > 0) {\n        res = (n % 2) + res;\n        n = Math.floor(n / 2);\n    }\n    return res;\n}\n\nfunction binToDec(s) {\n    let res = 0;\n    for (const c of s)\n        res = res * 2 + (c - '0');\n    return res;\n}\n\nfunction decToHex(n) {\n    if (n === 0) return \"0\";\n    let res = \"\";\n    while (n > 0) {\n        const rem = n % 16;\n        res = (rem < 10 ? rem : String.fromCharCode(rem - 10 + 65)) + res;\n        n = Math.floor(n / 16);\n    }\n    return res;\n}\n\nfunction hexToDec(s) {\n    let res = 0;\n    for (const c of s.toUpperCase()) {\n        const val = c >= '0' && c <= '9' ? c - '0' : c.charCodeAt(0) - 65 + 10;\n        res = res * 16 + val;\n    }\n    return res;\n}\n\nfunction decToOct(n) {\n    if (n === 0) return \"0\";\n    let res = \"\";\n    while (n > 0) {\n        res = (n % 8) + res;\n        n = Math.floor(n / 8);\n    }\n    return res;\n}\n\nfunction octToDec(s) {\n    let res = 0;\n    for (const c of s)\n        res = res * 8 + (c - '0');\n    return res;\n}\n\nconst n = 42;\nconsole.log(\"decToBin(\" + n + \") = \" + decToBin(n));\nconsole.log('binToDec(\"101010\") = ' + binToDec(\"101010\"));\nconsole.log(\"decToHex(\" + n + \") = \" + decToHex(n));\nconsole.log('hexToDec(\"2A\") = ' + hexToDec(\"2A\"));\nconsole.log(\"decToOct(\" + n + \") = \" + decToOct(n));\nconsole.log('octToDec(\"52\") = ' + octToDec(\"52\"));"}
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
            {"<?php\n\nfunction decToBin($n) {\n    if ($n == 0) return \"0\";\n    $res = \"\";\n    while ($n > 0) {\n        $res = ($n % 2) . $res;\n        $n = intdiv($n, 2);\n    }\n    return $res;\n}\n\nfunction binToDec($s) {\n    $res = 0;\n    for ($i = 0; $i < strlen($s); $i++)\n        $res = $res * 2 + intval($s[$i]);\n    return $res;\n}\n\nfunction decToHex($n) {\n    if ($n == 0) return \"0\";\n    $res = \"\";\n    while ($n > 0) {\n        $rem = $n % 16;\n        $res = ($rem < 10 ? chr($rem + 48) : chr($rem - 10 + 65)) . $res;\n        $n = intdiv($n, 16);\n    }\n    return $res;\n}\n\nfunction hexToDec($s) {\n    $res = 0;\n    $s = strtoupper($s);\n    for ($i = 0; $i < strlen($s); $i++) {\n        $c = $s[$i];\n        $val = ($c >= '0' && $c <= '9') ? intval($c) : ord($c) - 65 + 10;\n        $res = $res * 16 + $val;\n    }\n    return $res;\n}\n\nfunction decToOct($n) {\n    if ($n == 0) return \"0\";\n    $res = \"\";\n    while ($n > 0) {\n        $res = ($n % 8) . $res;\n        $n = intdiv($n, 8);\n    }\n    return $res;\n}\n\nfunction octToDec($s) {\n    $res = 0;\n    for ($i = 0; $i < strlen($s); $i++)\n        $res = $res * 8 + intval($s[$i]);\n    return $res;\n}\n\n$n = 42;\necho \"decToBin($n) = \" . decToBin($n) . \"\\n\";\necho 'binToDec(\"101010\") = ' . binToDec(\"101010\") . \"\\n\";\necho \"decToHex($n) = \" . decToHex($n) . \"\\n\";\necho 'hexToDec(\"2A\") = ' . hexToDec(\"2A\") . \"\\n\";\necho \"decToOct($n) = \" . decToOct($n) . \"\\n\";\necho 'octToDec(\"52\") = ' . octToDec(\"52\") . \"\\n\";\n\n?>"}
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
