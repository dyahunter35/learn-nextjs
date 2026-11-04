"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translateLegacyText } from "@/data/legacy-english";

export default function NativePage() {
  const { language } = useLanguage();
  const t = (text: string) => translateLegacyText(text, "mst", language);
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {t("legacy.8e4726ac886e7e97")}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {t("legacy.3b8224377d94106c")}
      </p>
      {"\n\n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {t("legacy.be403bb56428a761")}
        </strong>
        {t("legacy.50c18821fc5f82ce")}
        <br />
        <strong>
          {t("legacy.82364329e59a21ec")}
        </strong>
        {t("legacy.a710532ae932fbf9")}
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
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-cpp"}>
            {"#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nstruct Edge {\n    int src, dest, weight;\n};\n\nstruct Graph {\n    int V, E;\n    vector<Edge> edges;\n};\n\nstruct Subset {\n    int parent, rank;\n};\n\nint find(Subset subsets[], int i) {\n    if (subsets[i].parent != i)\n        subsets[i].parent = find(subsets, subsets[i].parent);\n    return subsets[i].parent;\n}\n\nvoid unite(Subset subsets[], int x, int y) {\n    int rx = find(subsets, x), ry = find(subsets, y);\n    if (subsets[rx].rank "}
            {"<"}
            {" subsets[ry].rank)\n        subsets[rx].parent = ry;\n    else if (subsets[rx].rank > subsets[ry].rank)\n        subsets[ry].parent = rx;\n    else {\n        subsets[ry].parent = rx;\n        subsets[rx].rank++;\n    }\n}\n\nbool cmp(Edge a, Edge b) { return a.weight "}
            {"<"}
            {" b.weight; }\n\nvoid kruskalMST(Graph& graph) {\n    int V = graph.V;\n    sort(graph.edges.begin(), graph.edges.end(), cmp);\n    Subset* subsets = new Subset[V];\n    for (int v = 0; v "}
            {"<"}
            {" V; v++) {\n        subsets[v].parent = v;\n        subsets[v].rank = 0;\n    }\n    vector<Edge> result;\n    for (Edge e : graph.edges) {\n        int x = find(subsets, e.src);\n        int y = find(subsets, e.dest);\n        if (x != y) {\n            result.push_back(e);\n            unite(subsets, x, y);\n        }\n    }\n    cout "}
            {"<"}
            {"<"}
            {" \"MST edges:\\n\";\n    for (Edge e : result)\n        cout "}
            {"<"}
            {"<"}
            {" e.src "}
            {"<"}
            {"<"}
            {" \" - \" "}
            {"<"}
            {"<"}
            {" e.dest "}
            {"<"}
            {"<"}
            {" \" : \" "}
            {"<"}
            {"<"}
            {" e.weight "}
            {"<"}
            {"<"}
            {" \"\\n\";\n    delete[] subsets;\n}\n\nint main() {\n    Graph g = {4, 5, {{0,1,10},{0,2,6},{0,3,5},{1,3,15},{2,3,4}}};\n    kruskalMST(g);\n    return 0;\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-java"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"java"} data-legacy-click={"copyCode('java')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-java"}>
            {"import java.util.*;\n\nclass Edge implements Comparable<Edge> {\n    int src, dest, weight;\n    public int compareTo(Edge e) { return this.weight - e.weight; }\n}\n\nclass Subset {\n    int parent, rank;\n}\n\npublic class KruskalMST {\n    int V, E;\n    Edge[] edges;\n\n    int find(Subset[] subsets, int i) {\n        if (subsets[i].parent != i)\n            subsets[i].parent = find(subsets, subsets[i].parent);\n        return subsets[i].parent;\n    }\n\n    void unite(Subset[] subsets, int x, int y) {\n        int rx = find(subsets, x), ry = find(subsets, y);\n        if (subsets[rx].rank "}
            {"<"}
            {" subsets[ry].rank)\n            subsets[rx].parent = ry;\n        else if (subsets[rx].rank > subsets[ry].rank)\n            subsets[ry].parent = rx;\n        else {\n            subsets[ry].parent = rx;\n            subsets[rx].rank++;\n        }\n    }\n\n    void kruskalMST() {\n        Arrays.sort(edges);\n        Subset[] subsets = new Subset[V];\n        for (int v = 0; v "}
            {"<"}
            {" V; v++) {\n            subsets[v] = new Subset();\n            subsets[v].parent = v;\n            subsets[v].rank = 0;\n        }\n        ArrayList<Edge> result = new ArrayList<>();\n        for (Edge e : edges) {\n            int x = find(subsets, e.src);\n            int y = find(subsets, e.dest);\n            if (x != y) {\n                result.add(e);\n                unite(subsets, x, y);\n            }\n        }\n        System.out.println(\"MST edges:\");\n        for (Edge e : result)\n            System.out.println(e.src + \" - \" + e.dest + \" : \" + e.weight);\n    }\n\n    public static void main(String[] args) {\n        KruskalMST g = new KruskalMST();\n        g.V = 4; g.E = 5;\n        g.edges = new Edge[5];\n        int[][] data = {{0,1,10},{0,2,6},{0,3,5},{1,3,15},{2,3,4}};\n        for (int i = 0; i "}
            {"<"}
            {" 5; i++) {\n            g.edges[i] = new Edge();\n            g.edges[i].src = data[i][0];\n            g.edges[i].dest = data[i][1];\n            g.edges[i].weight = data[i][2];\n        }\n        g.kruskalMST();\n    }\n}"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-js"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"js"} data-legacy-click={"copyCode('js')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-javascript"}>
            {"class UnionFind {\n    constructor(n) {\n        this.parent = Array.from({length: n}, (_, i) => i);\n        this.rank = new Array(n).fill(0);\n    }\n    find(i) {\n        if (this.parent[i] !== i)\n            this.parent[i] = this.find(this.parent[i]);\n        return this.parent[i];\n    }\n    unite(x, y) {\n        const rx = this.find(x), ry = this.find(y);\n        if (rx === ry) return;\n        if (this.rank[rx] "}
            {"<"}
            {" this.rank[ry])\n            this.parent[rx] = ry;\n        else if (this.rank[rx] > this.rank[ry])\n            this.parent[ry] = rx;\n        else {\n            this.parent[ry] = rx;\n            this.rank[rx]++;\n        }\n    }\n}\n\nfunction kruskalMST(edges, V) {\n    edges.sort((a, b) => a.weight - b.weight);\n    const uf = new UnionFind(V);\n    const result = [];\n    for (const e of edges) {\n        if (uf.find(e.src) !== uf.find(e.dest)) {\n            result.push(e);\n            uf.unite(e.src, e.dest);\n        }\n    }\n    return result;\n}\n\nconst edges = [\n    {src:0, dest:1, weight:10}, {src:0, dest:2, weight:6},\n    {src:0, dest:3, weight:5}, {src:1, dest:3, weight:15},\n    {src:2, dest:3, weight:4}\n];\nconst mst = kruskalMST(edges, 4);\nconsole.log(\"MST edges:\");\nmst.forEach(e => console.log(`${e.src} - ${e.dest} : ${e.weight}`));"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n\n    "}
      <div className={"code-block"} id={"code-php"}>
        {"\n      "}
        <button className={"copy-btn"} data-lang={"php"} data-legacy-click={"copyCode('php')"}>
          {t("legacy.29a0e2739a92fa8e")}
        </button>
        {"\n      "}
        <pre>
          <code className={"language-php"}>
            {"parent = range(0, $n - 1);\n        $this->rank = array_fill(0, $n, 0);\n    }\n    public function find($i) {\n        if ($this->parent[$i] !== $i)\n            $this->parent[$i] = $this->find($this->parent[$i]);\n        return $this->parent[$i];\n    }\n    public function unite($x, $y) {\n        $rx = $this->find($x);\n        $ry = $this->find($y);\n        if ($rx === $ry) return;\n        if ($this->rank[$rx] "}
            {"<"}
            {" $this->rank[$ry])\n            $this->parent[$rx] = $ry;\n        elseif ($this->rank[$rx] > $this->rank[$ry])\n            $this->parent[$ry] = $rx;\n        else {\n            $this->parent[$ry] = $rx;\n            $this->rank[$rx]++;\n        }\n    }\n}\n\nfunction kruskalMST(&$edges, $V) {\n    usort($edges, fn($a, $b) => $a['weight'] - $b['weight']);\n    $uf = new UnionFind($V);\n    $result = [];\n    foreach ($edges as $e) {\n        if ($uf->find($e['src']) !== $uf->find($e['dest'])) {\n            $result[] = $e;\n            $uf->unite($e['src'], $e['dest']);\n        }\n    }\n    return $result;\n}\n\n$edges = [\n    ['src'=>0,'dest'=>1,'weight'=>10], ['src'=>0,'dest'=>2,'weight'=>6],\n    ['src'=>0,'dest'=>3,'weight'=>5], ['src'=>1,'dest'=>3,'weight'=>15],\n    ['src'=>2,'dest'=>3,'weight'=>4]\n];\n$mst = kruskalMST($edges, 4);\necho \"MST edges:\\n\";\nforeach ($mst as $e)\n    echo \"{$e['src']} - {$e['dest']} : {$e['weight']}\\n\";"}
          </code>
        </pre>
        {"\n    "}
      </div>
      {"\n  "}
    </div>
    {"\n\n  \n\n  \n  \n  \n"}
    </div>
  );
}
