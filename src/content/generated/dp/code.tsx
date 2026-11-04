export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"البرمجة الديناميكية — الكود البرمجي"}
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
        {" البرمجة الديناميكية (DP) تحل المسائل بتقسيمها إلى مسائل فرعية وتخزين نتائجها لتجنب إعادة الحساب. "}
        <strong>
          {"fibDP(n)"}
        </strong>
        {" تحسب فيبوناتشي تصاعدياً (bottom-up). "}
        <strong>
          {"minCoins(coins[], amount)"}
        </strong>
        {" تحسب أقل عدد من العملات لتكوين مبلغ معين باستخدام جدول DP.\n    "}
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
            {"#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint fibDP(int n) {\n    if (n <= 1) return n;\n    vector<int> dp(n + 1);\n    dp[0] = 0;\n    dp[1] = 1;\n    for (int i = 2; i <= n; i++)\n        dp[i] = dp[i - 1] + dp[i - 2];\n    return dp[n];\n}\n\nint minCoins(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, INT_MAX);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++)\n        for (int coin : coins)\n            if (coin <= i && dp[i - coin] != INT_MAX)\n                dp[i] = min(dp[i], 1 + dp[i - coin]);\n    return dp[amount] == INT_MAX ? -1 : dp[amount];\n}\n\nint main() {\n    int n = 10;\n    cout << \"fibDP(\" << n << \") = \" << fibDP(n) << endl;\n\n    vector<int> coins = {1, 3, 4};\n    int amount = 6;\n    int result = minCoins(coins, amount);\n    cout << \"minCoins for amount \" << amount << \" = \" << result << endl;\n    return 0;\n}"}
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
            {"import java.util.Arrays;\n\npublic class DP {\n\n    public static int fibDP(int n) {\n        if (n <= 1) return n;\n        int[] dp = new int[n + 1];\n        dp[0] = 0;\n        dp[1] = 1;\n        for (int i = 2; i <= n; i++)\n            dp[i] = dp[i - 1] + dp[i - 2];\n        return dp[n];\n    }\n\n    public static int minCoins(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, Integer.MAX_VALUE);\n        dp[0] = 0;\n        for (int i = 1; i <= amount; i++)\n            for (int coin : coins)\n                if (coin <= i && dp[i - coin] != Integer.MAX_VALUE)\n                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);\n        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];\n    }\n\n    public static void main(String[] args) {\n        int n = 10;\n        System.out.println(\"fibDP(\" + n + \") = \" + fibDP(n));\n\n        int[] coins = {1, 3, 4};\n        int amount = 6;\n        int result = minCoins(coins, amount);\n        System.out.println(\"minCoins for amount \" + amount + \" = \" + result);\n    }\n}"}
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
            {"function fibDP(n) {\n    if (n <= 1) return n;\n    const dp = new Array(n + 1);\n    dp[0] = 0;\n    dp[1] = 1;\n    for (let i = 2; i <= n; i++)\n        dp[i] = dp[i - 1] + dp[i - 2];\n    return dp[n];\n}\n\nfunction minCoins(coins, amount) {\n    const dp = new Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let i = 1; i <= amount; i++)\n        for (const coin of coins)\n            if (coin <= i && dp[i - coin] !== Infinity)\n                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}\n\nconst n = 10;\nconsole.log(\"fibDP(\" + n + \") = \" + fibDP(n));\n\nconst coins = [1, 3, 4];\nconst amount = 6;\nconst result = minCoins(coins, amount);\nconsole.log(\"minCoins for amount \" + amount + \" = \" + result);"}
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
            {"<?php\n\nfunction fibDP($n) {\n    if ($n <= 1) return $n;\n    $dp = [0, 1];\n    for ($i = 2; $i <= $n; $i++)\n        $dp[$i] = $dp[$i - 1] + $dp[$i - 2];\n    return $dp[$n];\n}\n\nfunction minCoins($coins, $amount) {\n    $dp = array_fill(0, $amount + 1, PHP_INT_MAX);\n    $dp[0] = 0;\n    for ($i = 1; $i <= $amount; $i++)\n        foreach ($coins as $coin)\n            if ($coin <= $i && $dp[$i - $coin] != PHP_INT_MAX)\n                $dp[$i] = min($dp[$i], 1 + $dp[$i - $coin]);\n    return $dp[$amount] == PHP_INT_MAX ? -1 : $dp[$amount];\n}\n\n$n = 10;\necho \"fibDP($n) = \" . fibDP($n) . \"\\n\";\n\n$coins = [1, 3, 4];\n$amount = 6;\n$result = minCoins($coins, $amount);\necho \"minCoins for amount $amount = $result\\n\";\n\n?>"}
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
