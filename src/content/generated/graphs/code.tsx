export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"الرسوم البيانية (BFS/DFS) — الكود البرمجي"}
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
        {" تمثل Graph الرسم البياني باستخدام قائمة مجاورة (adjacency list). BFS (البحث بالعرض) يستخدم طابوراً (queue) لزيارة العقدة جاراً بعد جار. DFS (البحث بالعمق) يستخدم مكدساً (stack) أو استدعاء متكرراً للتعمق في المسار قبل العودة. المثال يستخدم 6 عقد A-F.\n    "}
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
            {"#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <map>\n#include <set>\nusing namespace std;\n\nclass Graph {\n    map<char, vector<char>> adj;\n\npublic:\n    void addEdge(char u, char v) {\n        adj[u].push_back(v);\n        adj[v].push_back(u);\n    }\n\n    void BFS(char start) {\n        set<char> visited;\n        queue<char> q;\n        visited.insert(start);\n        q.push(start);\n        while (!q.empty()) {\n            char cur = q.front(); q.pop();\n            cout << cur << \" \";\n            for (char neighbor : adj[cur])\n                if (visited.find(neighbor) == visited.end()) {\n                    visited.insert(neighbor);\n                    q.push(neighbor);\n                }\n        }\n        cout << endl;\n    }\n\n    void DFS(char start) {\n        set<char> visited;\n        stack<char> s;\n        s.push(start);\n        while (!s.empty()) {\n            char cur = s.top(); s.pop();\n            if (visited.find(cur) != visited.end()) continue;\n            visited.insert(cur);\n            cout << cur << \" \";\n            for (char neighbor : adj[cur])\n                if (visited.find(neighbor) == visited.end())\n                    s.push(neighbor);\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    Graph g;\n    g.addEdge('A', 'B');\n    g.addEdge('A', 'C');\n    g.addEdge('B', 'D');\n    g.addEdge('B', 'E');\n    g.addEdge('C', 'F');\n\n    cout << \"BFS from A: \";\n    g.BFS('A');\n    cout << \"DFS from A: \";\n    g.DFS('A');\n    return 0;\n}"}
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
            {"import java.util.*;\n\nclass Graph {\n    private Map<Character, List<Character>> adj = new HashMap<>();\n\n    void addEdge(char u, char v) {\n        adj.computeIfAbsent(u, k -> new ArrayList<>()).add(v);\n        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(u);\n    }\n\n    void BFS(char start) {\n        Set<Character> visited = new HashSet<>();\n        Queue<Character> q = new LinkedList<>();\n        visited.add(start);\n        q.offer(start);\n        while (!q.isEmpty()) {\n            char cur = q.poll();\n            System.out.print(cur + \" \");\n            for (char n : adj.getOrDefault(cur, new ArrayList<>()))\n                if (!visited.contains(n)) {\n                    visited.add(n);\n                    q.offer(n);\n                }\n        }\n        System.out.println();\n    }\n\n    void DFS(char start) {\n        Set<Character> visited = new HashSet<>();\n        Stack<Character> s = new Stack<>();\n        s.push(start);\n        while (!s.isEmpty()) {\n            char cur = s.pop();\n            if (visited.contains(cur)) continue;\n            visited.add(cur);\n            System.out.print(cur + \" \");\n            for (char n : adj.getOrDefault(cur, new ArrayList<>()))\n                if (!visited.contains(n))\n                    s.push(n);\n        }\n        System.out.println();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Graph g = new Graph();\n        g.addEdge('A', 'B');\n        g.addEdge('A', 'C');\n        g.addEdge('B', 'D');\n        g.addEdge('B', 'E');\n        g.addEdge('C', 'F');\n\n        System.out.print(\"BFS from A: \");\n        g.BFS('A');\n        System.out.print(\"DFS from A: \");\n        g.DFS('A');\n    }\n}"}
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
            {"class Graph {\n    constructor() {\n        this.adj = new Map();\n    }\n\n    addEdge(u, v) {\n        if (!this.adj.has(u)) this.adj.set(u, []);\n        if (!this.adj.has(v)) this.adj.set(v, []);\n        this.adj.get(u).push(v);\n        this.adj.get(v).push(u);\n    }\n\n    BFS(start) {\n        const visited = new Set();\n        const queue = [start];\n        visited.add(start);\n        while (queue.length > 0) {\n            const cur = queue.shift();\n            process.stdout.write(cur + \" \");\n            for (const neighbor of (this.adj.get(cur) || []))\n                if (!visited.has(neighbor)) {\n                    visited.add(neighbor);\n                    queue.push(neighbor);\n                }\n        }\n        console.log();\n    }\n\n    DFS(start) {\n        const visited = new Set();\n        const stack = [start];\n        while (stack.length > 0) {\n            const cur = stack.pop();\n            if (visited.has(cur)) continue;\n            visited.add(cur);\n            process.stdout.write(cur + \" \");\n            for (const neighbor of (this.adj.get(cur) || []))\n                if (!visited.has(neighbor))\n                    stack.push(neighbor);\n        }\n        console.log();\n    }\n}\n\nconst g = new Graph();\ng.addEdge('A', 'B');\ng.addEdge('A', 'C');\ng.addEdge('B', 'D');\ng.addEdge('B', 'E');\ng.addEdge('C', 'F');\n\nprocess.stdout.write(\"BFS from A: \");\ng.BFS('A');\nprocess.stdout.write(\"DFS from A: \");\ng.DFS('A');"}
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
            {"<?php\n\nclass Graph {\n    private array $adj = [];\n\n    public function addEdge($u, $v) {\n        $this->adj[$u][] = $v;\n        $this->adj[$v][] = $u;\n    }\n\n    public function BFS($start) {\n        $visited = [$start => true];\n        $queue = [$start];\n        while (!empty($queue)) {\n            $cur = array_shift($queue);\n            echo $cur . \" \";\n            foreach ($this->adj[$cur] ?? [] as $neighbor)\n                if (!isset($visited[$neighbor])) {\n                    $visited[$neighbor] = true;\n                    $queue[] = $neighbor;\n                }\n        }\n        echo \"\\n\";\n    }\n\n    public function DFS($start) {\n        $visited = [];\n        $stack = [$start];\n        while (!empty($stack)) {\n            $cur = array_pop($stack);\n            if (isset($visited[$cur])) continue;\n            $visited[$cur] = true;\n            echo $cur . \" \";\n            foreach ($this->adj[$cur] ?? [] as $neighbor)\n                if (!isset($visited[$neighbor]))\n                    $stack[] = $neighbor;\n        }\n        echo \"\\n\";\n    }\n}\n\n$g = new Graph();\n$g->addEdge('A', 'B');\n$g->addEdge('A', 'C');\n$g->addEdge('B', 'D');\n$g->addEdge('B', 'E');\n$g->addEdge('C', 'F');\n\necho \"BFS from A: \";\n$g->BFS('A');\necho \"DFS from A: \";\n$g->DFS('A');\n\n?>"}
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
