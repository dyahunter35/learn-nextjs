"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "searching", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.a780d30b97ff14be")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.dc756dbc5fd8cd87")}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.0597795060297297")}
        </strong>
        <br />
        {"\n      "}
        <strong>
          {t("legacy.e7533b69fccc2114")}
        </strong>
        {t("legacy.4f3e1bcb1d4cebac")}
        <br />
        <br />
        {"\n      "}
        <strong>
          {t("legacy.c8edc77009cf117a")}
        </strong>
        {t("legacy.22fd6eb783f4072a")}
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
            {"#include <iostream>\n#include <vector>\nusing namespace std;\n\nint linearSearch(const vector<int>& arr, int target) {\n    for (int i = 0; i < arr.size(); i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint binarySearch(const vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> arr = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};\n    int target = 30;\n\n    int li = linearSearch(arr, target);\n    cout << \"Linear Search: \" << target << \" at index \" << li << endl;\n\n    int bi = binarySearch(arr, target);\n    cout << \"Binary Search: \" << target << \" at index \" << bi << endl;\n\n    return 0;\n}"}
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
            {"import java.util.Arrays;\n\npublic class SearchingAlgorithms {\n\n    public static int linearSearch(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) return i;\n        }\n        return -1;\n    }\n\n    public static int binarySearch(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};\n        int target = 30;\n\n        System.out.println(\"Array: \" + Arrays.toString(arr));\n        System.out.println(\"Linear Search: \" + target + \" at index \" + linearSearch(arr, target));\n        System.out.println(\"Binary Search: \" + target + \" at index \" + binarySearch(arr, target));\n    }\n}"}
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
            {"function linearSearch(arr, target) {\n    for (let i = 0; i < arr.length; i++) {\n        if (arr[i] === target) return i;\n    }\n    return -1;\n}\n\nfunction binarySearch(arr, target) {\n    let left = 0, right = arr.length - 1;\n    while (left <= right) {\n        const mid = Math.floor(left + (right - left) / 2);\n        if (arr[mid] === target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nconst arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\nconst target = 30;\n\nconsole.log(\"Array:\", arr);\nconsole.log(\"Linear Search:\", target, \"at index\", linearSearch(arr, target));\nconsole.log(\"Binary Search:\", target, \"at index\", binarySearch(arr, target));"}
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
            {"<?php\n\nfunction linearSearch($arr, $target) {\n    foreach ($arr as $i => $val) {\n        if ($val == $target) return $i;\n    }\n    return -1;\n}\n\nfunction binarySearch($arr, $target) {\n    $left = 0;\n    $right = count($arr) - 1;\n    while ($left <= $right) {\n        $mid = $left + intdiv($right - $left, 2);\n        if ($arr[$mid] == $target) return $mid;\n        else if ($arr[$mid] < $target) $left = $mid + 1;\n        else $right = $mid - 1;\n    }\n    return -1;\n}\n\n$arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];\n$target = 30;\n\necho \"Array: \" . implode(\", \", $arr) . \"\\n\";\necho \"Linear Search: $target at index \" . linearSearch($arr, $target) . \"\\n\";\necho \"Binary Search: $target at index \" . binarySearch($arr, $target) . \"\\n\";\n\n?>"}
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
