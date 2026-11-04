export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"خوارزميات الترتيب — الكود البرمجي"}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {"شرح مبسط لخوارزميتي ترتيب الفقاعة وترتيب الاختيار مع أمثلة برمجية بلغات متعددة. يمكنك نسخ الكود واستخدامه مباشرة."}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {"كيف تعمل خوارزميات الترتيب:"}
        </strong>
        <br />
        {"\n      "}
        <strong>
          {"ترتيب الفقاعة (Bubble Sort):"}
        </strong>
        {" تقارن الخوارزمية كل زوج من العناصر المتجاورة وتقوم بتبديلهما إذا كانا بترتيب خاطئ. تستمر العملية حتى يتم ترتيب المصفوفة بالكامل. في كل تمريرة، \"تطفو\" أكبر قيمة إلى نهاية المصفوفة."}
        <br />
        <br />
        {"\n      "}
        <strong>
          {"ترتيب الاختيار (Selection Sort):"}
        </strong>
        {" تقوم الخوارزمية بتقسيم المصفوفة إلى جزئين: مرتب وغير مرتب. في كل خطوة، تبحث عن أصغر قيمة في الجزء غير المرتب وتضعها في نهاية الجزء المرتب. تستمر حتى يتم ترتيب جميع العناصر.\n    "}
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
            {"#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n            }\n        }\n    }\n}\n\nvoid selectionSort(vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) {\n                minIdx = j;\n            }\n        }\n        swap(arr[i], arr[minIdx]);\n    }\n}\n\nvoid printArray(const vector<int>& arr) {\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n}\n\nint main() {\n    vector<int> arr1 = {64, 34, 25, 12, 22, 11, 90};\n    vector<int> arr2 = arr1;\n\n    cout << \"Original array: \";\n    printArray(arr1);\n\n    bubbleSort(arr1);\n    cout << \"After Bubble Sort: \";\n    printArray(arr1);\n\n    selectionSort(arr2);\n    cout << \"After Selection Sort: \";\n    printArray(arr2);\n\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"import java.util.Arrays;\n\npublic class SortingAlgorithms {\n\n    public static void bubbleSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    public static void selectionSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            int minIdx = i;\n            for (int j = i + 1; j < n; j++) {\n                if (arr[j] < arr[minIdx]) {\n                    minIdx = j;\n                }\n            }\n            int temp = arr[i];\n            arr[i] = arr[minIdx];\n            arr[minIdx] = temp;\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};\n        int[] arr2 = Arrays.copyOf(arr1, arr1.length);\n\n        System.out.println(\"Original array: \" + Arrays.toString(arr1));\n\n        bubbleSort(arr1);\n        System.out.println(\"After Bubble Sort: \" + Arrays.toString(arr1));\n\n        selectionSort(arr2);\n        System.out.println(\"After Selection Sort: \" + Arrays.toString(arr2));\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"function bubbleSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n            }\n        }\n    }\n    return arr;\n}\n\nfunction selectionSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        let minIdx = i;\n        for (let j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) {\n                minIdx = j;\n            }\n        }\n        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n    }\n    return arr;\n}\n\nconst arr1 = [64, 34, 25, 12, 22, 11, 90];\nconst arr2 = [...arr1];\n\nconsole.log(\"Original array:\", arr1);\nconsole.log(\"After Bubble Sort:\", bubbleSort([...arr1]));\nconsole.log(\"After Selection Sort:\", selectionSort([...arr2]));"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n    \n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {"نسخ"}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}>
            {"<?php\n\nfunction bubbleSort(&$arr) {\n    $n = count($arr);\n    for ($i = 0; $i < $n - 1; $i++) {\n        for ($j = 0; $j < $n - $i - 1; $j++) {\n            if ($arr[$j] > $arr[$j + 1]) {\n                $temp = $arr[$j];\n                $arr[$j] = $arr[$j + 1];\n                $arr[$j + 1] = $temp;\n            }\n        }\n    }\n}\n\nfunction selectionSort(&$arr) {\n    $n = count($arr);\n    for ($i = 0; $i < $n - 1; $i++) {\n        $minIdx = $i;\n        for ($j = $i + 1; $j < $n; $j++) {\n            if ($arr[$j] < $arr[$minIdx]) {\n                $minIdx = $j;\n            }\n        }\n        $temp = $arr[$i];\n        $arr[$i] = $arr[$minIdx];\n        $arr[$minIdx] = $temp;\n    }\n}\n\n$arr1 = [64, 34, 25, 12, 22, 11, 90];\n$arr2 = $arr1;\n\necho \"Original array: \" . implode(\", \", $arr1) . \"\\n\";\n\nbubbleSort($arr1);\necho \"After Bubble Sort: \" . implode(\", \", $arr1) . \"\\n\";\n\nselectionSort($arr2);\necho \"After Selection Sort: \" . implode(\", \", $arr2) . \"\\n\";\n\n?>"}
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
