"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "stackqueue", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.b903f2c2f2c10f74")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.d939c59799b4fc3d")}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.dde289e1bd9ca46f")}
        </strong>
        <br />
        {"\n      "}
        <strong>
          {t("legacy.a6228edda4b4b853")}
        </strong>
        {t("legacy.e47a7f1be91865d9")}
        <br />
        <br />
        {"\n      "}
        <strong>
          {t("legacy.d83b2121aebaac50")}
        </strong>
        {t("legacy.ab926397f70bb8ca")}
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
            {"#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Stack {\n    vector<int> data;\npublic:\n    void push(int val) { data.push_back(val); }\n\n    int pop() {\n        if (isEmpty()) throw runtime_error(\"Stack empty\");\n        int val = data.back();\n        data.pop_back();\n        return val;\n    }\n\n    int peek() {\n        if (isEmpty()) throw runtime_error(\"Stack empty\");\n        return data.back();\n    }\n\n    bool isEmpty() { return data.empty(); }\n\n    void display() {\n        cout << \"Stack (top to bottom): \";\n        for (int i = data.size() - 1; i >= 0; i--) cout << data[i] << \" \";\n        cout << endl;\n    }\n};\n\nclass Queue {\n    vector<int> data;\npublic:\n    void enqueue(int val) { data.push_back(val); }\n\n    int dequeue() {\n        if (isEmpty()) throw runtime_error(\"Queue empty\");\n        int val = data.front();\n        data.erase(data.begin());\n        return val;\n    }\n\n    int peek() {\n        if (isEmpty()) throw runtime_error(\"Queue empty\");\n        return data.front();\n    }\n\n    bool isEmpty() { return data.empty(); }\n\n    void display() {\n        cout << \"Queue (front to back): \";\n        for (int x : data) cout << x << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    cout << \"=== Stack Demo ===\" << endl;\n    Stack s;\n    s.push(10); s.push(20); s.push(30);\n    s.display();\n    cout << \"Popped: \" << s.pop() << endl;\n    cout << \"Top: \" << s.peek() << endl;\n    s.display();\n\n    cout << \"\\n=== Queue Demo ===\" << endl;\n    Queue q;\n    q.enqueue(10); q.enqueue(20); q.enqueue(30);\n    q.display();\n    cout << \"Dequeued: \" << q.dequeue() << endl;\n    cout << \"Front: \" << q.peek() << endl;\n    q.display();\n\n    return 0;\n}"}
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
            {"import java.util.LinkedList;\n\nclass Stack {\n    private LinkedList<Integer> list = new LinkedList<>();\n\n    public void push(int val) { list.addLast(val); }\n\n    public int pop() {\n        if (isEmpty()) throw new RuntimeException(\"Stack empty\");\n        return list.removeLast();\n    }\n\n    public int peek() {\n        if (isEmpty()) throw new RuntimeException(\"Stack empty\");\n        return list.getLast();\n    }\n\n    public boolean isEmpty() { return list.isEmpty(); }\n\n    public void display() {\n        System.out.print(\"Stack (top to bottom): \");\n        for (int i = list.size() - 1; i >= 0; i--) System.out.print(list.get(i) + \" \");\n        System.out.println();\n    }\n}\n\nclass Queue {\n    private LinkedList<Integer> list = new LinkedList<>();\n\n    public void enqueue(int val) { list.addLast(val); }\n\n    public int dequeue() {\n        if (isEmpty()) throw new RuntimeException(\"Queue empty\");\n        return list.removeFirst();\n    }\n\n    public int peek() {\n        if (isEmpty()) throw new RuntimeException(\"Queue empty\");\n        return list.getFirst();\n    }\n\n    public boolean isEmpty() { return list.isEmpty(); }\n\n    public void display() {\n        System.out.print(\"Queue (front to back): \");\n        for (int x : list) System.out.print(x + \" \");\n        System.out.println();\n    }\n}\n\npublic class StackQueueDemo {\n    public static void main(String[] args) {\n        System.out.println(\"=== Stack Demo ===\");\n        Stack s = new Stack();\n        s.push(10); s.push(20); s.push(30);\n        s.display();\n        System.out.println(\"Popped: \" + s.pop());\n        System.out.println(\"Top: \" + s.peek());\n        s.display();\n\n        System.out.println(\"\\n=== Queue Demo ===\");\n        Queue q = new Queue();\n        q.enqueue(10); q.enqueue(20); q.enqueue(30);\n        q.display();\n        System.out.println(\"Dequeued: \" + q.dequeue());\n        System.out.println(\"Front: \" + q.peek());\n        q.display();\n    }\n}"}
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
            {"class Stack {\n    constructor() { this.data = []; }\n    push(val) { this.data.push(val); }\n    pop() {\n        if (this.isEmpty()) throw new Error(\"Stack empty\");\n        return this.data.pop();\n    }\n    peek() {\n        if (this.isEmpty()) throw new Error(\"Stack empty\");\n        return this.data[this.data.length - 1];\n    }\n    isEmpty() { return this.data.length === 0; }\n    display() {\n        console.log(\"Stack (top to bottom):\", [...this.data].reverse().join(\" \"));\n    }\n}\n\nclass Queue {\n    constructor() { this.data = []; }\n    enqueue(val) { this.data.push(val); }\n    dequeue() {\n        if (this.isEmpty()) throw new Error(\"Queue empty\");\n        return this.data.shift();\n    }\n    peek() {\n        if (this.isEmpty()) throw new Error(\"Queue empty\");\n        return this.data[0];\n    }\n    isEmpty() { return this.data.length === 0; }\n    display() {\n        console.log(\"Queue (front to back):\", this.data.join(\" \"));\n    }\n}\n\nconsole.log(\"=== Stack Demo ===\");\nconst s = new Stack();\ns.push(10); s.push(20); s.push(30);\ns.display();\nconsole.log(\"Popped:\", s.pop());\nconsole.log(\"Top:\", s.peek());\ns.display();\n\nconsole.log(\"\\n=== Queue Demo ===\");\nconst q = new Queue();\nq.enqueue(10); q.enqueue(20); q.enqueue(30);\nq.display();\nconsole.log(\"Dequeued:\", q.dequeue());\nconsole.log(\"Front:\", q.peek());\nq.display();"}
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
            {"<?php\n\nclass Stack {\n    private $data = [];\n\n    public function push($val) { array_push($this->data, $val); }\n\n    public function pop() {\n        if ($this->isEmpty()) throw new Exception(\"Stack empty\");\n        return array_pop($this->data);\n    }\n\n    public function peek() {\n        if ($this->isEmpty()) throw new Exception(\"Stack empty\");\n        return end($this->data);\n    }\n\n    public function isEmpty() { return empty($this->data); }\n\n    public function display() {\n        $reversed = array_reverse($this->data);\n        echo \"Stack (top to bottom): \" . implode(\" \", $reversed) . \"\\n\";\n    }\n}\n\nclass Queue {\n    private $data = [];\n\n    public function enqueue($val) { array_push($this->data, $val); }\n\n    public function dequeue() {\n        if ($this->isEmpty()) throw new Exception(\"Queue empty\");\n        return array_shift($this->data);\n    }\n\n    public function peek() {\n        if ($this->isEmpty()) throw new Exception(\"Queue empty\");\n        return $this->data[0];\n    }\n\n    public function isEmpty() { return empty($this->data); }\n\n    public function display() {\n        echo \"Queue (front to back): \" . implode(\" \", $this->data) . \"\\n\";\n    }\n}\n\necho \"=== Stack Demo ===\\n\";\n$s = new Stack();\n$s->push(10); $s->push(20); $s->push(30);\n$s->display();\necho \"Popped: \" . $s->pop() . \"\\n\";\necho \"Top: \" . $s->peek() . \"\\n\";\n$s->display();\n\necho \"\\n=== Queue Demo ===\\n\";\n$q = new Queue();\n$q->enqueue(10); $q->enqueue(20); $q->enqueue(30);\n$q->display();\necho \"Dequeued: \" . $q->dequeue() . \"\\n\";\necho \"Front: \" . $q->peek() . \"\\n\";\n$q->display();\n\n?>"}
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
