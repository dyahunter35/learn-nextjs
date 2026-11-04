"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "caesar", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.969d8249d389ea36")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.5220bd2679400601")}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.cd1801b02784e63f")}
        </strong>
        <br />
        {t("legacy.0ac155d9f9a31503")}
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
            {"#include <iostream>\n#include <string>\nusing namespace std;\n\nstring encrypt(string text, int shift) {\n    string result = \"\";\n    for (char ch : text) {\n        if (isupper(ch)) {\n            result += char((ch - 'A' + shift) % 26 + 'A');\n        } else if (islower(ch)) {\n            result += char((ch - 'a' + shift) % 26 + 'a');\n        } else {\n            result += ch;\n        }\n    }\n    return result;\n}\n\nstring decrypt(string text, int shift) {\n    return encrypt(text, 26 - shift);\n}\n\nint main() {\n    string text = \"Hello Caesar Cipher!\";\n    int shift = 3;\n\n    string encrypted = encrypt(text, shift);\n    string decrypted = decrypt(encrypted, shift);\n\n    cout << \"Original: \" << text << endl;\n    cout << \"Encrypted (shift=\" << shift << \"): \" << encrypted << endl;\n    cout << \"Decrypted: \" << decrypted << endl;\n\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"public class CaesarCipher {\n\n    public static String encrypt(String text, int shift) {\n        StringBuilder result = new StringBuilder();\n        for (char ch : text.toCharArray()) {\n            if (Character.isUpperCase(ch)) {\n                result.append((char) ((ch - 'A' + shift) % 26 + 'A'));\n            } else if (Character.isLowerCase(ch)) {\n                result.append((char) ((ch - 'a' + shift) % 26 + 'a'));\n            } else {\n                result.append(ch);\n            }\n        }\n        return result.toString();\n    }\n\n    public static String decrypt(String text, int shift) {\n        return encrypt(text, 26 - shift);\n    }\n\n    public static void main(String[] args) {\n        String text = \"Hello Caesar Cipher!\";\n        int shift = 3;\n\n        String encrypted = encrypt(text, shift);\n        String decrypted = decrypt(encrypted, shift);\n\n        System.out.println(\"Original: \" + text);\n        System.out.println(\"Encrypted (shift=\" + shift + \"): \" + encrypted);\n        System.out.println(\"Decrypted: \" + decrypted);\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"function encrypt(text, shift) {\n    let result = \"\";\n    for (const ch of text) {\n        if (ch >= 'A' && ch "}
            {"<"}
            {"= 'Z') {\n            result += String.fromCharCode((ch.charCodeAt(0) - 65 + shift) % 26 + 65);\n        } else if (ch >= 'a' && ch "}
            {"<"}
            {"= 'z') {\n            result += String.fromCharCode((ch.charCodeAt(0) - 97 + shift) % 26 + 97);\n        } else {\n            result += ch;\n        }\n    }\n    return result;\n}\n\nfunction decrypt(text, shift) {\n    return encrypt(text, 26 - shift);\n}\n\nconst text = \"Hello Caesar Cipher!\";\nconst shift = 3;\n\nconst encrypted = encrypt(text, shift);\nconst decrypted = decrypt(encrypted, shift);\n\nconsole.log(\"Original:\", text);\nconsole.log(\"Encrypted (shift=\" + shift + \"):\", encrypted);\nconsole.log(\"Decrypted:\", decrypted);"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}>
            {"<?php\n\nfunction encrypt($text, $shift) {\n    $result = \"\";\n    for ($i = 0; $i < strlen($text); $i++) {\n        $ch = $text[$i];\n        if (ctype_upper($ch)) {\n            $result .= chr((ord($ch) - ord('A') + $shift) % 26 + ord('A'));\n        } else if (ctype_lower($ch)) {\n            $result .= chr((ord($ch) - ord('a') + $shift) % 26 + ord('a'));\n        } else {\n            $result .= $ch;\n        }\n    }\n    return $result;\n}\n\nfunction decrypt($text, $shift) {\n    return encrypt($text, 26 - $shift);\n}\n\n$text = \"Hello Caesar Cipher!\";\n$shift = 3;\n\n$encrypted = encrypt($text, $shift);\n$decrypted = decrypt($encrypted, $shift);\n\necho \"Original: $text\\n\";\necho \"Encrypted (shift=$shift): $encrypted\\n\";\necho \"Decrypted: $decrypted\\n\";\n\n?>"}
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
