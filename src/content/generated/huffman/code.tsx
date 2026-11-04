"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "huffman", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.0902a6bced85060f")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.8b07735effd2ed9c")}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.1642aa7a8279bf05")}
        </strong>
        <br />
        {t("legacy.3d0395ae2c96cd54")}
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
            {"#include <iostream>\n#include <string>\n#include <queue>\n#include <unordered_map>\n#include <vector>\nusing namespace std;\n\nstruct Node {\n    char ch;\n    int freq;\n    Node *left, *right;\n    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}\n};\n\nstruct Compare {\n    bool operator()(Node* a, Node* b) {\n        return a->freq > b->freq;\n    }\n};\n\nvoid generateCodes(Node* root, string code, unordered_map<char, string>& codes) {\n    if (!root) return;\n    if (!root->left && !root->right) {\n        codes[root->ch] = code;\n    }\n    generateCodes(root->left, code + \"0\", codes);\n    generateCodes(root->right, code + \"1\", codes);\n}\n\nstring encode(const string& text, unordered_map<char, string>& codes) {\n    string result = \"\";\n    for (char ch : text) result += codes[ch];\n    return result;\n}\n\nstring decode(Node* root, const string& bits) {\n    string result = \"\";\n    Node* curr = root;\n    for (char b : bits) {\n        curr = (b == '0') ? curr->left : curr->right;\n        if (!curr->left && !curr->right) {\n            result += curr->ch;\n            curr = root;\n        }\n    }\n    return result;\n}\n\nint main() {\n    string text = \"aabbbccdeeeeff\";\n\n    unordered_map<char, int> freq;\n    for (char ch : text) freq[ch]++;\n\n    priority_queue<Node*, vector<Node*>, Compare> pq;\n    for (auto& p : freq) pq.push(new Node(p.first, p.second));\n\n    while (pq.size() > 1) {\n        Node* left = pq.top(); pq.pop();\n        Node* right = pq.top(); pq.pop();\n        Node* merged = new Node('\\0', left->freq + right->freq);\n        merged->left = left;\n        merged->right = right;\n        pq.push(merged);\n    }\n\n    Node* root = pq.top();\n    unordered_map<char, string> codes;\n    generateCodes(root, \"\", codes);\n\n    cout << \"Huffman Codes:\" << endl;\n    for (auto& p : codes) {\n        cout << p.first << \": \" << p.second << endl;\n    }\n\n    string encoded = encode(text, codes);\n    string decoded = decode(root, encoded);\n\n    cout << \"\\nOriginal: \" << text << endl;\n    cout << \"Encoded: \" << encoded << endl;\n    cout << \"Decoded: \" << decoded << endl;\n\n    return 0;\n}"}
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
            {"import java.util.*;\n\nclass HuffmanNode implements Comparable<HuffmanNode> {\n    char ch;\n    int freq;\n    HuffmanNode left, right;\n\n    HuffmanNode(char ch, int freq) {\n        this.ch = ch;\n        this.freq = freq;\n    }\n\n    public int compareTo(HuffmanNode other) {\n        return this.freq - other.freq;\n    }\n}\n\npublic class HuffmanCoding {\n\n    public static void generateCodes(HuffmanNode root, String code, Map<Character, String> codes) {\n        if (root == null) return;\n        if (root.left == null && root.right == null) {\n            codes.put(root.ch, code);\n        }\n        generateCodes(root.left, code + \"0\", codes);\n        generateCodes(root.right, code + \"1\", codes);\n    }\n\n    public static String encode(String text, Map<Character, String> codes) {\n        StringBuilder sb = new StringBuilder();\n        for (char ch : text.toCharArray()) sb.append(codes.get(ch));\n        return sb.toString();\n    }\n\n    public static String decode(HuffmanNode root, String bits) {\n        StringBuilder sb = new StringBuilder();\n        HuffmanNode curr = root;\n        for (char b : bits.toCharArray()) {\n            curr = (b == '0') ? curr.left : curr.right;\n            if (curr.left == null && curr.right == null) {\n                sb.append(curr.ch);\n                curr = root;\n            }\n        }\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n        String text = \"aabbbccdeeeeff\";\n\n        Map<Character, Integer> freq = new HashMap<>();\n        for (char ch : text.toCharArray()) freq.put(ch, freq.getOrDefault(ch, 0) + 1);\n\n        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();\n        for (Map.Entry<Character, Integer> e : freq.entrySet()) {\n            pq.offer(new HuffmanNode(e.getKey(), e.getValue()));\n        }\n\n        while (pq.size() > 1) {\n            HuffmanNode left = pq.poll();\n            HuffmanNode right = pq.poll();\n            HuffmanNode merged = new HuffmanNode('\\0', left.freq + right.freq);\n            merged.left = left;\n            merged.right = right;\n            pq.offer(merged);\n        }\n\n        HuffmanNode root = pq.poll();\n        Map<Character, String> codes = new HashMap<>();\n        generateCodes(root, \"\", codes);\n\n        System.out.println(\"Huffman Codes:\");\n        for (Map.Entry<Character, String> e : codes.entrySet()) {\n            System.out.println(e.getKey() + \": \" + e.getValue());\n        }\n\n        String encoded = encode(text, codes);\n        String decoded = decode(root, encoded);\n\n        System.out.println(\"\\nOriginal: \" + text);\n        System.out.println(\"Encoded: \" + encoded);\n        System.out.println(\"Decoded: \" + decoded);\n    }\n}"}
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
            {"class Node {\n    constructor(ch, freq) {\n        this.ch = ch;\n        this.freq = freq;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nfunction generateCodes(root, code, codes) {\n    if (!root) return;\n    if (!root.left && !root.right) {\n        codes[root.ch] = code;\n    }\n    generateCodes(root.left, code + \"0\", codes);\n    generateCodes(root.right, code + \"1\", codes);\n}\n\nfunction encode(text, codes) {\n    return text.split(\"\").map(ch => codes[ch]).join(\"\");\n}\n\nfunction decode(root, bits) {\n    let result = \"\";\n    let curr = root;\n    for (const b of bits) {\n        curr = b === \"0\" ? curr.left : curr.right;\n        if (!curr.left && !curr.right) {\n            result += curr.ch;\n            curr = root;\n        }\n    }\n    return result;\n}\n\nfunction buildHuffmanTree(text) {\n    const freq = {};\n    for (const ch of text) freq[ch] = (freq[ch] || 0) + 1;\n\n    const pq = Object.entries(freq).map(([ch, f]) => new Node(ch, f));\n    pq.sort((a, b) => a.freq - b.freq);\n\n    while (pq.length > 1) {\n        const left = pq.shift();\n        const right = pq.shift();\n        const merged = new Node(\"\", left.freq + right.freq);\n        merged.left = left;\n        merged.right = right;\n        pq.push(merged);\n        pq.sort((a, b) => a.freq - b.freq);\n    }\n\n    return pq[0];\n}\n\nconst text = \"aabbbccdeeeeff\";\nconst root = buildHuffmanTree(text);\nconst codes = {};\ngenerateCodes(root, \"\", codes);\n\nconsole.log(\"Huffman Codes:\");\nfor (const [ch, code] of Object.entries(codes)) {\n    console.log(ch + \": \" + code);\n}\n\nconst encoded = encode(text, codes);\nconst decoded = decode(root, encoded);\n\nconsole.log(\"\\nOriginal:\", text);\nconsole.log(\"Encoded:\", encoded);\nconsole.log(\"Decoded:\", decoded);"}
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
            {"<?php\n\nclass Node {\n    public $ch;\n    public $freq;\n    public $left;\n    public $right;\n\n    public function __construct($ch, $freq) {\n        $this->ch = $ch;\n        $this->freq = $freq;\n        $this->left = null;\n        $this->right = null;\n    }\n}\n\nfunction generateCodes($root, $code, &$codes) {\n    if ($root === null) return;\n    if ($root->left === null && $root->right === null) {\n        $codes[$root->ch] = $code;\n    }\n    generateCodes($root->left, $code . \"0\", $codes);\n    generateCodes($root->right, $code . \"1\", $codes);\n}\n\nfunction encodeText($text, $codes) {\n    $result = \"\";\n    for ($i = 0; $i < strlen($text); $i++) {\n        $result .= $codes[$text[$i]];\n    }\n    return $result;\n}\n\nfunction decodeText($root, $bits) {\n    $result = \"\";\n    $curr = $root;\n    for ($i = 0; $i < strlen($bits); $i++) {\n        $curr = $bits[$i] === \"0\" ? $curr->left : $curr->right;\n        if ($curr->left === null && $curr->right === null) {\n            $result .= $curr->ch;\n            $curr = $root;\n        }\n    }\n    return $result;\n}\n\nfunction buildTree($text) {\n    $freq = [];\n    for ($i = 0; $i < strlen($text); $i++) {\n        $ch = $text[$i];\n        if (!isset($freq[$ch])) $freq[$ch] = 0;\n        $freq[$ch]++;\n    }\n\n    $pq = [];\n    foreach ($freq as $ch => $f) {\n        $pq[] = new Node($ch, $f);\n    }\n\n    while (count($pq) > 1) {\n        usort($pq, function($a, $b) { return $a->freq - $b->freq; });\n        $left = array_shift($pq);\n        $right = array_shift($pq);\n        $merged = new Node(\"\", $left->freq + $right->freq);\n        $merged->left = $left;\n        $merged->right = $right;\n        $pq[] = $merged;\n    }\n\n    return $pq[0];\n}\n\n$text = \"aabbbccdeeeeff\";\n$root = buildTree($text);\n$codes = [];\ngenerateCodes($root, \"\", $codes);\n\necho \"Huffman Codes:\\n\";\nforeach ($codes as $ch => $code) {\n    echo \"$ch: $code\\n\";\n}\n\n$encoded = encodeText($text, $codes);\n$decoded = decodeText($root, $encoded);\n\necho \"\\nOriginal: $text\\n\";\necho \"Encoded: $encoded\\n\";\necho \"Decoded: $decoded\\n\";\n\n?>"}
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
