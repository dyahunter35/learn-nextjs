export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"أقصر مسار (Dijkstra) — الكود البرمجي"}
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
        {" خوارزمية Dijkstra لإيجاد أقصر مسار من عقدة بداية إلى جميع العقد الأخرى في رسم بياني موزون بحواف غير سالبة. تستخدم طابور أولوية لاختيار العقدة ذات أقل مسافة. مثال: 6 عقد (A-F) بحواف موزونة.\n    "}
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
            {"#include <iostream>\n#include <vector>\n#include <queue>\n#include <climits>\nusing namespace std;\n\nclass Graph {\n    int V;\n    vector<vector<pair<int,int>>> adj;\npublic:\n    Graph(int v) : V(v), adj(v) {}\n    void addEdge(int u, int v, int w) {\n        adj[u].push_back({v, w});\n        adj[v].push_back({u, w});\n    }\n    void dijkstra(int start) {\n        vector<int> dist(V, INT_MAX);\n        vector<int> parent(V, -1);\n        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;\n        dist[start] = 0;\n        pq.push({0, start});\n        while (!pq.empty()) {\n            int u = pq.top().second;\n            pq.pop();\n            for (auto& [v, w] : adj[u]) {\n                if (dist[u] + w < dist[v]) {\n                    dist[v] = dist[u] + w;\n                    parent[v] = u;\n                    pq.push({dist[v], v});\n                }\n            }\n        }\n        cout << \"Distances from \" << (char)('A' + start) << \":\\n\";\n        for (int i = 0; i < V; i++) {\n            cout << (char)('A' + i) << \": \" << dist[i] << \"  Path: \";\n            vector<int> path;\n            for (int v = i; v != -1; v = parent[v])\n                path.push_back(v);\n            for (int j = path.size()-1; j >= 0; j--)\n                cout << (char)('A' + path[j]) << (j ? \" -> \" : \"\");\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    Graph g(6);\n    g.addEdge(0, 1, 7);  // A-B\n    g.addEdge(0, 2, 9);  // A-C\n    g.addEdge(0, 5, 14); // A-F\n    g.addEdge(1, 2, 10); // B-C\n    g.addEdge(1, 3, 15); // B-D\n    g.addEdge(2, 3, 11); // C-D\n    g.addEdge(2, 5, 2);  // C-F\n    g.addEdge(3, 4, 6);  // D-E\n    g.addEdge(4, 5, 9);  // E-F\n    g.dijkstra(0);\n    return 0;\n}"}
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
            {"import java.util.*;\n\npublic class Dijkstra {\n    static class Edge {\n        int dest, weight;\n        Edge(int d, int w) { dest = d; weight = w; }\n    }\n\n    static class Graph {\n        int V;\n        List<List<Edge>> adj;\n        Graph(int v) {\n            V = v;\n            adj = new ArrayList<>();\n            for (int i = 0; i < v; i++) adj.add(new ArrayList<>());\n        }\n        void addEdge(int u, int v, int w) {\n            adj.get(u).add(new Edge(v, w));\n            adj.get(v).add(new Edge(u, w));\n        }\n        void dijkstra(int start) {\n            int[] dist = new int[V];\n            int[] parent = new int[V];\n            Arrays.fill(dist, Integer.MAX_VALUE);\n            Arrays.fill(parent, -1);\n            PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[1] - b[1]);\n            dist[start] = 0;\n            pq.offer(new int[]{start, 0});\n            while (!pq.isEmpty()) {\n                int u = pq.poll()[0];\n                for (Edge e : adj.get(u)) {\n                    if (dist[u] + e.weight < dist[e.dest]) {\n                        dist[e.dest] = dist[u] + e.weight;\n                        parent[e.dest] = u;\n                        pq.offer(new int[]{e.dest, dist[e.dest]});\n                    }\n                }\n            }\n            System.out.println(\"Distances from \" + (char)('A' + start) + \":\");\n            for (int i = 0; i < V; i++) {\n                System.out.print((char)('A' + i) + \": \" + dist[i] + \"  Path: \");\n                List<Integer> path = new ArrayList<>();\n                for (int v = i; v != -1; v = parent[v]) path.add(v);\n                Collections.reverse(path);\n                for (int j = 0; j < path.size(); j++) {\n                    System.out.print((char)('A' + path.get(j)));\n                    if (j < path.size()-1) System.out.print(\" -> \");\n                }\n                System.out.println();\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Graph g = new Graph(6);\n        g.addEdge(0, 1, 7);  // A-B\n        g.addEdge(0, 2, 9);  // A-C\n        g.addEdge(0, 5, 14); // A-F\n        g.addEdge(1, 2, 10); // B-C\n        g.addEdge(1, 3, 15); // B-D\n        g.addEdge(2, 3, 11); // C-D\n        g.addEdge(2, 5, 2);  // C-F\n        g.addEdge(3, 4, 6);  // D-E\n        g.addEdge(4, 5, 9);  // E-F\n        g.dijkstra(0);\n    }\n}"}
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
            {"class PriorityQueue {\n    constructor() { this.heap = []; }\n    enqueue(v, p) {\n        this.heap.push({v, p});\n        this.heap.sort((a,b) => a.p - b.p);\n    }\n    dequeue() { return this.heap.shift(); }\n    isEmpty() { return this.heap.length === 0; }\n}\n\nclass Graph {\n    constructor(v) {\n        this.V = v;\n        this.adj = Array.from({length: v}, () => []);\n    }\n    addEdge(u, v, w) {\n        this.adj[u].push({to: v, w});\n        this.adj[v].push({to: u, w});\n    }\n    dijkstra(start) {\n        const dist = new Array(this.V).fill(Infinity);\n        const parent = new Array(this.V).fill(-1);\n        const pq = new PriorityQueue();\n        dist[start] = 0;\n        pq.enqueue(start, 0);\n        while (!pq.isEmpty()) {\n            const {v: u} = pq.dequeue();\n            for (const {to: v, w} of this.adj[u]) {\n                if (dist[u] + w < dist[v]) {\n                    dist[v] = dist[u] + w;\n                    parent[v] = u;\n                    pq.enqueue(v, dist[v]);\n                }\n            }\n        }\n        console.log(\"Distances from \" + String.fromCharCode(65 + start) + \":\");\n        for (let i = 0; i < this.V; i++) {\n            let path = [];\n            for (let v = i; v !== -1; v = parent[v]) path.push(v);\n            path.reverse();\n            console.log(String.fromCharCode(65 + i) + \": \" + dist[i] +\n                \"  Path: \" + path.map(x => String.fromCharCode(65 + x)).join(\" -> \"));\n        }\n    }\n}\n\nconst g = new Graph(6);\ng.addEdge(0, 1, 7);\ng.addEdge(0, 2, 9);\ng.addEdge(0, 5, 14);\ng.addEdge(1, 2, 10);\ng.addEdge(1, 3, 15);\ng.addEdge(2, 3, 11);\ng.addEdge(2, 5, 2);\ng.addEdge(3, 4, 6);\ng.addEdge(4, 5, 9);\ng.dijkstra(0);"}
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
            {"<?php\nclass Graph {\n    private $V;\n    private $adj;\n\n    public function __construct($v) {\n        $this->V = $v;\n        $this->adj = array_fill(0, $v, []);\n    }\n\n    public function addEdge($u, $v, $w) {\n        $this->adj[$u][] = ['to' => $v, 'w' => $w];\n        $this->adj[$v][] = ['to' => $u, 'w' => $w];\n    }\n\n    public function dijkstra($start) {\n        $dist = array_fill(0, $this->V, PHP_INT_MAX);\n        $parent = array_fill(0, $this->V, -1);\n        $pq = new SplPriorityQueue();\n        $pq->setExtractFlags(SplPriorityQueue::EXTR_DATA);\n        $dist[$start] = 0;\n        $pq->insert($start, 0);\n        while (!$pq->isEmpty()) {\n            $u = $pq->extract();\n            foreach ($this->adj[$u] as $edge) {\n                $v = $edge['to'];\n                $w = $edge['w'];\n                if ($dist[$u] + $w < $dist[$v]) {\n                    $dist[$v] = $dist[$u] + $w;\n                    $parent[$v] = $u;\n                    $pq->insert($v, -$dist[$v]);\n                }\n            }\n        }\n        echo \"Distances from \" . chr(65 + $start) . \":\\n\";\n        for ($i = 0; $i < $this->V; $i++) {\n            $path = [];\n            for ($v = $i; $v != -1; $v = $parent[$v]) $path[] = $v;\n            $path = array_reverse($path);\n            $pathStr = implode(\" -> \", array_map(function($x) { return chr(65 + $x); }, $path));\n            echo chr(65 + $i) . \": \" . $dist[$i] . \"  Path: \" . $pathStr . \"\\n\";\n        }\n    }\n}\n\n$g = new Graph(6);\n$g->addEdge(0, 1, 7);\n$g->addEdge(0, 2, 9);\n$g->addEdge(0, 5, 14);\n$g->addEdge(1, 2, 10);\n$g->addEdge(1, 3, 15);\n$g->addEdge(2, 3, 11);\n$g->addEdge(2, 5, 2);\n$g->addEdge(3, 4, 6);\n$g->addEdge(4, 5, 9);\n$g->dijkstra(0);\n?>"}
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
