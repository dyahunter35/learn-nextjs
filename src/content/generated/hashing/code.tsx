"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "hashing", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.ea155d2d45492625")}
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
        {t("legacy.003e6da10f5072ac")}
        <strong>
          {t("legacy.1aa64667ddc107d8")}
        </strong>
        {t("legacy.5c94cfcedee698c3")}
        <strong>
          {"key % size"}
        </strong>
        {".\n    "}
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
            {"#include <iostream>\n#include <list>\n#include <vector>\nusing namespace std;\n\nclass HashTable {\n    int size;\n    vector<list<int>> table;\n\n    int hash(int key) {\n        return key % size;\n    }\n\npublic:\n    HashTable(int s) : size(s) {\n        table.resize(size);\n    }\n\n    void insert(int key) {\n        int idx = hash(key);\n        table[idx].push_back(key);\n    }\n\n    bool search(int key) {\n        int idx = hash(key);\n        for (int x : table[idx])\n            if (x == key) return true;\n        return false;\n    }\n\n    void remove(int key) {\n        int idx = hash(key);\n        table[idx].remove(key);\n    }\n\n    void print() {\n        for (int i = 0; i < size; i++) {\n            cout << \"[\" << i << \"]: \";\n            for (int x : table[i])\n                cout << x << \" -> \";\n            cout << \"null\" << endl;\n        }\n    }\n};\n\nint main() {\n    HashTable ht(7);\n    ht.insert(10);\n    ht.insert(20);\n    ht.insert(15);\n    ht.insert(7);\n\n    cout << \"Hash table (size=7):\" << endl;\n    ht.print();\n\n    int key = 15;\n    cout << \"Search \" << key << \": \"\n         << (ht.search(key) ? \"Found\" : \"Not found\") << endl;\n\n    ht.remove(15);\n    cout << \"After removing 15, search: \"\n         << (ht.search(15) ? \"Found\" : \"Not found\") << endl;\n    return 0;\n}"}
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
            {"import java.util.LinkedList;\n\nclass HashTable {\n    private int size;\n    private LinkedList<Integer>[] table;\n\n    @SuppressWarnings(\"unchecked\")\n    public HashTable(int s) {\n        size = s;\n        table = new LinkedList[size];\n        for (int i = 0; i < size; i++)\n            table[i] = new LinkedList<>();\n    }\n\n    private int hash(int key) {\n        return key % size;\n    }\n\n    public void insert(int key) {\n        int idx = hash(key);\n        table[idx].add(key);\n    }\n\n    public boolean search(int key) {\n        int idx = hash(key);\n        return table[idx].contains(key);\n    }\n\n    public void remove(int key) {\n        int idx = hash(key);\n        table[idx].remove(Integer.valueOf(key));\n    }\n\n    public void print() {\n        for (int i = 0; i < size; i++) {\n            System.out.print(\"[\" + i + \"]: \");\n            for (int x : table[i])\n                System.out.print(x + \" -> \");\n            System.out.println(\"null\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        HashTable ht = new HashTable(7);\n        ht.insert(10);\n        ht.insert(20);\n        ht.insert(15);\n        ht.insert(7);\n\n        System.out.println(\"Hash table (size=7):\");\n        ht.print();\n\n        int key = 15;\n        System.out.println(\"Search \" + key + \": \" +\n            (ht.search(key) ? \"Found\" : \"Not found\"));\n\n        ht.remove(15);\n        System.out.println(\"After removing 15, search: \" +\n            (ht.search(15) ? \"Found\" : \"Not found\"));\n    }\n}"}
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
            {"class HashTable {\n    constructor(size) {\n        this.size = size;\n        this.table = new Array(size).fill(null).map(() => []);\n    }\n\n    hash(key) {\n        return key % this.size;\n    }\n\n    insert(key) {\n        const idx = this.hash(key);\n        this.table[idx].push(key);\n    }\n\n    search(key) {\n        const idx = this.hash(key);\n        return this.table[idx].includes(key);\n    }\n\n    remove(key) {\n        const idx = this.hash(key);\n        this.table[idx] = this.table[idx].filter(x => x !== key);\n    }\n\n    print() {\n        for (let i = 0; i < this.size; i++)\n            console.log(`[${i}]: ${this.table[i].join(\" -> \") || \"null\"}`);\n    }\n}\n\nconst ht = new HashTable(7);\nht.insert(10);\nht.insert(20);\nht.insert(15);\nht.insert(7);\n\nconsole.log(\"Hash table (size=7):\");\nht.print();\n\nconst key = 15;\nconsole.log(\"Search \" + key + \": \" + (ht.search(key) ? \"Found\" : \"Not found\"));\n\nht.remove(15);\nconsole.log(\"After removing 15, search: \" + (ht.search(15) ? \"Found\" : \"Not found\"));"}
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
            {"<?php\n\nclass HashTable {\n    private int $size;\n    private array $table;\n\n    public function __construct(int $size) {\n        $this->size = $size;\n        $this->table = array_fill(0, $size, []);\n    }\n\n    private function hash(int $key): int {\n        return $key % $this->size;\n    }\n\n    public function insert(int $key): void {\n        $idx = $this->hash($key);\n        $this->table[$idx][] = $key;\n    }\n\n    public function search(int $key): bool {\n        $idx = $this->hash($key);\n        return in_array($key, $this->table[$idx]);\n    }\n\n    public function remove(int $key): void {\n        $idx = $this->hash($key);\n        $this->table[$idx] = array_values(\n            array_filter($this->table[$idx], fn($x) => $x !== $key)\n        );\n    }\n\n    public function print(): void {\n        for ($i = 0; $i < $this->size; $i++) {\n            $chain = empty($this->table[$i]) ? \"null\"\n                : implode(\" -> \", $this->table[$i]);\n            echo \"[$i]: $chain\\n\";\n        }\n    }\n}\n\n$ht = new HashTable(7);\n$ht->insert(10);\n$ht->insert(20);\n$ht->insert(15);\n$ht->insert(7);\n\necho \"Hash table (size=7):\\n\";\n$ht->print();\n\n$key = 15;\necho \"Search $key: \" . ($ht->search($key) ? \"Found\" : \"Not found\") . \"\\n\";\n\n$ht->remove(15);\necho \"After removing 15, search: \" . ($ht->search(15) ? \"Found\" : \"Not found\") . \"\\n\";\n\n?>"}
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
