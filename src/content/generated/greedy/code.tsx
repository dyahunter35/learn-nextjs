export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"العملات المعدنية (Greedy Coin Change) — الكود البرمجي"}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {"شرح مبسط مع أمثلة بلغات متعددة. يمكنك نسخ الكود واستخدامه."}
      </p>
      {"\n\n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {"كيف تعمل:"}
        </strong>
        {" خوارزمية جشعة لمشكلة صرف العملات. تختار دائمًا العملة الأكبر التي لا تتجاوز المبلغ المتبقي، وتكرر حتى يصفر المبلغ. تعمل بكفاءة مع أنظمة العملات القياسية. مثال: عملات سودانية [50, 20, 10, 5, 1] والمبلغ 87.\n    "}
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
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-cpp"}>
            {"#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<int> minCoinsGreedy(vector<int> coins, int amount) {\n    sort(coins.rbegin(), coins.rend());\n    vector<int> result;\n    for (int coin : coins) {\n        while (amount >= coin) {\n            amount -= coin;\n            result.push_back(coin);\n        }\n    }\n    return result;\n}\n\nint main() {\n    vector<int> coins = {50, 20, 10, 5, 1};\n    int amount = 87;\n    vector<int> result = minCoinsGreedy(coins, amount);\n    cout << \"Amount: \" << amount << endl;\n    cout << \"Coins used: \";\n    for (int c : result) cout << c << \" \";\n    cout << endl;\n    cout << \"Total coins: \" << result.size() << endl;\n    return 0;\n}"}
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
            {"import java.util.*;\n\npublic class CoinChange {\n    public static List<Integer> minCoinsGreedy(Integer[] coinsArr, int amount) {\n        Arrays.sort(coinsArr, Collections.reverseOrder());\n        List<Integer> result = new ArrayList<>();\n        for (int coin : coinsArr) {\n            while (amount >= coin) {\n                amount -= coin;\n                result.add(coin);\n            }\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Integer[] coins = {50, 20, 10, 5, 1};\n        int amount = 87;\n        List<Integer> result = minCoinsGreedy(coins, amount);\n        System.out.println(\"Amount: \" + amount);\n        System.out.print(\"Coins used: \");\n        for (int c : result) System.out.print(c + \" \");\n        System.out.println();\n        System.out.println(\"Total coins: \" + result.size());\n    }\n}"}
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
            {"function minCoinsGreedy(coins, amount) {\n    coins.sort((a, b) => b - a);\n    const result = [];\n    for (const coin of coins) {\n        while (amount >= coin) {\n            amount -= coin;\n            result.push(coin);\n        }\n    }\n    return result;\n}\n\nconst coins = [50, 20, 10, 5, 1];\nconst amount = 87;\nconst result = minCoinsGreedy(coins, amount);\nconsole.log(\"Amount:\", amount);\nconsole.log(\"Coins used:\", result.join(\" \"));\nconsole.log(\"Total coins:\", result.length);"}
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
            {"<?php\nfunction minCoinsGreedy($coins, $amount) {\n    rsort($coins);\n    $result = [];\n    foreach ($coins as $coin) {\n        while ($amount >= $coin) {\n            $amount -= $coin;\n            $result[] = $coin;\n        }\n    }\n    return $result;\n}\n\n$coins = [50, 20, 10, 5, 1];\n$amount = 87;\n$result = minCoinsGreedy($coins, $amount);\necho \"Amount: $amount\\n\";\necho \"Coins used: \" . implode(\" \", $result) . \"\\n\";\necho \"Total coins: \" . count($result) . \"\\n\";\n?>"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n  "}
    </div>
    {"\n\n  \n\n  \n  \n"}
    </div>
  );
}
