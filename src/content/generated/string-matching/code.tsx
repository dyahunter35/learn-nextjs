"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "string-matching", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.ca720d188bfa6322")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.1a7c4e9bfbfac554")}
      </p>
      {"\n\n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.c33021ce0acc82d6")}
        </strong>
        {t("legacy.36efebaca5da432b")}
        <br />
        <strong>
          {t("legacy.cb150d3e91e5c6ad")}
        </strong>
        {t("legacy.8e90adefd069ba69")}
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
      {"\n\n    "}
      <div className={"code-block active"} id={"code-cpp"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"cpp"} data-legacy-click={"copyCode('cpp')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-cpp"}>
            {"#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> naiveSearch(string text, string pattern) {\n    vector<int> positions;\n    int n = text.length(), m = pattern.length();\n    for (int i = 0; i "}
            {"<"}
            {"= n - m; i++) {\n        int j;\n        for (j = 0; j "}
            {"<"}
            {" m; j++)\n            if (text[i + j] != pattern[j]) break;\n        if (j == m) positions.push_back(i);\n    }\n    return positions;\n}\n\nvector<int> computeLPS(string pattern) {\n    int m = pattern.length();\n    vector<int> lps(m, 0);\n    int len = 0, i = 1;\n    while (i "}
            {"<"}
            {" m) {\n        if (pattern[i] == pattern[len])\n            lps[i++] = ++len;\n        else if (len != 0)\n            len = lps[len - 1];\n        else\n            lps[i++] = 0;\n    }\n    return lps;\n}\n\nvector<int> KMPSearch(string text, string pattern) {\n    vector<int> positions;\n    int n = text.length(), m = pattern.length();\n    vector<int> lps = computeLPS(pattern);\n    int i = 0, j = 0;\n    while (i "}
            {"<"}
            {" n) {\n        if (pattern[j] == text[i]) { i++; j++; }\n        if (j == m) {\n            positions.push_back(i - j);\n            j = lps[j - 1];\n        } else if (i "}
            {"<"}
            {" n && pattern[j] != text[i]) {\n            if (j != 0) j = lps[j - 1];\n            else i++;\n        }\n    }\n    return positions;\n}\n\nint main() {\n    string text = \"ABABDABACDABABCABAB\";\n    string pattern = \"ABABCABAB\";\n    auto res1 = naiveSearch(text, pattern);\n    auto res2 = KMPSearch(text, pattern);\n    cout "}
            {"<"}
            {"<"}
            {" \"Naive: \";\n    for (int p : res1) cout "}
            {"<"}
            {"<"}
            {" p "}
            {"<"}
            {"<"}
            {" \" \";\n    cout "}
            {"<"}
            {"<"}
            {" \"\\nKMP: \";\n    for (int p : res2) cout "}
            {"<"}
            {"<"}
            {" p "}
            {"<"}
            {"<"}
            {" \" \";\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"import java.util.*;\n\npublic class StringMatching {\n    static List<Integer> naiveSearch(String text, String pattern) {\n        List<Integer> positions = new ArrayList<>();\n        int n = text.length(), m = pattern.length();\n        for (int i = 0; i "}
            {"<"}
            {"= n - m; i++) {\n            int j;\n            for (j = 0; j "}
            {"<"}
            {" m; j++)\n                if (text.charAt(i + j) != pattern.charAt(j)) break;\n            if (j == m) positions.add(i);\n        }\n        return positions;\n    }\n\n    static int[] computeLPS(String pattern) {\n        int m = pattern.length();\n        int[] lps = new int[m];\n        int len = 0, i = 1;\n        while (i "}
            {"<"}
            {" m) {\n            if (pattern.charAt(i) == pattern.charAt(len))\n                lps[i++] = ++len;\n            else if (len != 0)\n                len = lps[len - 1];\n            else\n                lps[i++] = 0;\n        }\n        return lps;\n    }\n\n    static List<Integer> KMPSearch(String text, String pattern) {\n        List<Integer> positions = new ArrayList<>();\n        int n = text.length(), m = pattern.length();\n        if (m == 0) return positions;\n        int[] lps = computeLPS(pattern);\n        int i = 0, j = 0;\n        while (i "}
            {"<"}
            {" n) {\n            if (pattern.charAt(j) == text.charAt(i)) { i++; j++; }\n            if (j == m) {\n                positions.add(i - j);\n                j = lps[j - 1];\n            } else if (i "}
            {"<"}
            {" n && pattern.charAt(j) != text.charAt(i)) {\n                if (j != 0) j = lps[j - 1];\n                else i++;\n            }\n        }\n        return positions;\n    }\n\n    public static void main(String[] args) {\n        String text = \"ABABDABACDABABCABAB\";\n        String pattern = \"ABABCABAB\";\n        System.out.println(\"Naive: \" + naiveSearch(text, pattern));\n        System.out.println(\"KMP: \" + KMPSearch(text, pattern));\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"function naiveSearch(text, pattern) {\n    const positions = [];\n    const n = text.length, m = pattern.length;\n    for (let i = 0; i "}
            {"<"}
            {"= n - m; i++) {\n        let j;\n        for (j = 0; j "}
            {"<"}
            {" m; j++)\n            if (text[i + j] !== pattern[j]) break;\n        if (j === m) positions.push(i);\n    }\n    return positions;\n}\n\nfunction computeLPS(pattern) {\n    const m = pattern.length;\n    const lps = new Array(m).fill(0);\n    let len = 0, i = 1;\n    while (i "}
            {"<"}
            {" m) {\n        if (pattern[i] === pattern[len])\n            lps[i++] = ++len;\n        else if (len !== 0)\n            len = lps[len - 1];\n        else\n            lps[i++] = 0;\n    }\n    return lps;\n}\n\nfunction KMPSearch(text, pattern) {\n    const positions = [];\n    const n = text.length, m = pattern.length;\n    if (m === 0) return positions;\n    const lps = computeLPS(pattern);\n    let i = 0, j = 0;\n    while (i "}
            {"<"}
            {" n) {\n        if (pattern[j] === text[i]) { i++; j++; }\n        if (j === m) {\n            positions.push(i - j);\n            j = lps[j - 1];\n        } else if (i "}
            {"<"}
            {" n && pattern[j] !== text[i]) {\n            if (j !== 0) j = lps[j - 1];\n            else i++;\n        }\n    }\n    return positions;\n}\n\nconst text = \"ABABDABACDABABCABAB\";\nconst pattern = \"ABABCABAB\";\nconsole.log(\"Naive:\", naiveSearch(text, pattern));\nconsole.log(\"KMP:\", KMPSearch(text, pattern));"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}></code>
        </pre>
        {"\n    "}
      </div>
      {"\n  "}
    </div>
    {"\n\n  \n\n  \n  \n  \n"}
    </div>
  );
}
