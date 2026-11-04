export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"دمج الترتيب (Merge Sort) — الكود البرمجي"}
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
        {" خوارزمية \"فرق تسد\" تقسم المصفوفة إلى نصفين متساويين، ترتب كل نصف بشكل منفصل، ثم تدمج النصفين في مصفوفة مرتبة واحدة. التعقيد الزمني: O(n log n).\n    "}
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
            {"#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid merge(vector<int>& arr, int left, int mid, int right) {\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n    vector<int> L(n1), R(n2);\n    for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n    int i = 0, j = 0, k = left;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n}\n\nvoid mergeSort(vector<int>& arr, int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nint main() {\n    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};\n    cout << \"Original: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    mergeSort(arr, 0, arr.size() - 1);\n    cout << \"Sorted: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}"}
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
            {"public class MergeSort {\n    public static void merge(int[] arr, int left, int mid, int right) {\n        int n1 = mid - left + 1;\n        int n2 = right - mid;\n        int[] L = new int[n1];\n        int[] R = new int[n2];\n        for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n        int i = 0, j = 0, k = left;\n        while (i < n1 && j < n2) {\n            if (L[i] <= R[j]) arr[k++] = L[i++];\n            else arr[k++] = R[j++];\n        }\n        while (i < n1) arr[k++] = L[i++];\n        while (j < n2) arr[k++] = R[j++];\n    }\n\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = left + (right - left) / 2;\n            mergeSort(arr, left, mid);\n            mergeSort(arr, mid + 1, right);\n            merge(arr, left, mid, right);\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {38, 27, 43, 3, 9, 82, 10};\n        System.out.print(\"Original: \");\n        for (int x : arr) System.out.print(x + \" \");\n        System.out.println();\n        mergeSort(arr, 0, arr.length - 1);\n        System.out.print(\"Sorted: \");\n        for (int x : arr) System.out.print(x + \" \");\n        System.out.println();\n    }\n}"}
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
            {"function merge(arr, left, mid, right) {\n    const n1 = mid - left + 1;\n    const n2 = right - mid;\n    const L = arr.slice(left, mid + 1);\n    const R = arr.slice(mid + 1, right + 1);\n    let i = 0, j = 0, k = left;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n}\n\nfunction mergeSort(arr, left, right) {\n    if (left < right) {\n        const mid = Math.floor(left + (right - left) / 2);\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nconst arr = [38, 27, 43, 3, 9, 82, 10];\nconsole.log(\"Original:\", arr.join(\" \"));\nmergeSort(arr, 0, arr.length - 1);\nconsole.log(\"Sorted:\", arr.join(\" \"));"}
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
            {"<?php\nfunction merge(&$arr, $left, $mid, $right) {\n    $n1 = $mid - $left + 1;\n    $n2 = $right - $mid;\n    $L = array_slice($arr, $left, $n1);\n    $R = array_slice($arr, $mid + 1, $n2);\n    $i = 0; $j = 0; $k = $left;\n    while ($i < $n1 && $j < $n2) {\n        if ($L[$i] <= $R[$j]) $arr[$k++] = $L[$i++];\n        else $arr[$k++] = $R[$j++];\n    }\n    while ($i < $n1) $arr[$k++] = $L[$i++];\n    while ($j < $n2) $arr[$k++] = $R[$j++];\n}\n\nfunction mergeSort(&$arr, $left, $right) {\n    if ($left < $right) {\n        $mid = intdiv($left + $right, 2);\n        mergeSort($arr, $left, $mid);\n        mergeSort($arr, $mid + 1, $right);\n        merge($arr, $left, $mid, $right);\n    }\n}\n\nfunction intdiv($a, $b) {\n    return intdiv_alt($a, $b);\n}\n\nfunction intdiv_alt($a, $b) {\n    return intdiv_php($a, $b);\n}\n\nfunction intdiv_php($a, $b) {\n    return intdiv_7($a, $b);\n}\n\nfunction intdiv_7($a, $b) {\n    return intdiv_53($a, $b);\n}\n\nfunction intdiv_53($a, $b) {\n    return intdiv_56($a, $b);\n}\n\nfunction intdiv_56($a, $b) {\n    $result = $a / $b;\n    if ($result < 0 && $result != (int)$result) {\n        return (int)($result - 1);\n    }\n    return (int)$result;\n}\n\n$arr = [38, 27, 43, 3, 9, 82, 10];\necho \"Original: \" . implode(\" \", $arr) . \"\\n\";\nmergeSort($arr, 0, count($arr) - 1);\necho \"Sorted: \" . implode(\" \", $arr) . \"\\n\";\n?>"}
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
