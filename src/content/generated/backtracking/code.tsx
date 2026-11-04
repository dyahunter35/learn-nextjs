export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"N-Queens — الكود البرمجي"}
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
        {" خوارزمية التراجع (Backtracking) لحل مسألة N-Queens. تضع ملكة في كل عمود، وتتحقق من الأمان (عدم وجود تعارض مع الملكات الأخرى)، وتتراجع عند عدم وجود مكان آمن. تعرض جميع الحلول الممكنة.\n    "}
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
            {"#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool isSafe(vector<int>& board, int row, int col) {\n    for (int i = 0; i < col; i++) {\n        if (board[i] == row ||\n            abs(board[i] - row) == abs(i - col))\n            return false;\n    }\n    return true;\n}\n\nvoid solve(vector<int>& board, int col, int n, vector<vector<int>>& solutions) {\n    if (col == n) {\n        solutions.push_back(board);\n        return;\n    }\n    for (int row = 0; row < n; row++) {\n        if (isSafe(board, row, col)) {\n            board[col] = row;\n            solve(board, col + 1, n, solutions);\n        }\n    }\n}\n\nvoid printBoard(vector<int>& board) {\n    int n = board.size();\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++)\n            cout << (board[j] == i ? \"Q \" : \". \");\n        cout << endl;\n    }\n    cout << endl;\n}\n\nint main() {\n    int n = 4;\n    vector<vector<int>> solutions;\n    vector<int> board(n, -1);\n    solve(board, 0, n, solutions);\n    cout << \"Found \" << solutions.size() << \" solutions for \" << n << \"-Queens:\" << endl;\n    for (auto& sol : solutions) {\n        printBoard(sol);\n    }\n    return 0;\n}"}
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
            {"import java.util.*;\n\npublic class NQueens {\n    static boolean isSafe(List<Integer> board, int row, int col) {\n        for (int i = 0; i < col; i++) {\n            if (board.get(i) == row ||\n                Math.abs(board.get(i) - row) == Math.abs(i - col))\n                return false;\n        }\n        return true;\n    }\n\n    static void solve(List<Integer> board, int col, int n, List<List<Integer>> solutions) {\n        if (col == n) {\n            solutions.add(new ArrayList<>(board));\n            return;\n        }\n        for (int row = 0; row < n; row++) {\n            if (isSafe(board, row, col)) {\n                board.set(col, row);\n                solve(board, col + 1, n, solutions);\n            }\n        }\n    }\n\n    static void printBoard(List<Integer> board) {\n        int n = board.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++)\n                System.out.print(board.get(j) == i ? \"Q \" : \". \");\n            System.out.println();\n        }\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        int n = 4;\n        List<List<Integer>> solutions = new ArrayList<>();\n        List<Integer> board = new ArrayList<>(Collections.nCopies(n, -1));\n        solve(board, 0, n, solutions);\n        System.out.println(\"Found \" + solutions.size() + \" solutions for \" + n + \"-Queens:\");\n        for (List<Integer> sol : solutions) printBoard(sol);\n    }\n}"}
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
            {"function isSafe(board, row, col) {\n    for (let i = 0; i < col; i++) {\n        if (board[i] === row ||\n            Math.abs(board[i] - row) === Math.abs(i - col))\n            return false;\n    }\n    return true;\n}\n\nfunction solve(board, col, n, solutions) {\n    if (col === n) {\n        solutions.push([...board]);\n        return;\n    }\n    for (let row = 0; row < n; row++) {\n        if (isSafe(board, row, col)) {\n            board[col] = row;\n            solve(board, col + 1, n, solutions);\n        }\n    }\n}\n\nfunction printBoard(board) {\n    const n = board.length;\n    for (let i = 0; i < n; i++) {\n        let line = \"\";\n        for (let j = 0; j < n; j++)\n            line += board[j] === i ? \"Q \" : \". \";\n        console.log(line);\n    }\n    console.log();\n}\n\nconst n = 4;\nconst solutions = [];\nconst board = new Array(n).fill(-1);\nsolve(board, 0, n, solutions);\nconsole.log(\"Found \" + solutions.length + \" solutions for \" + n + \"-Queens:\");\nsolutions.forEach(printBoard);"}
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
            {"<?php\nfunction isSafe($board, $row, $col) {\n    for ($i = 0; $i < $col; $i++) {\n        if ($board[$i] == $row ||\n            abs($board[$i] - $row) == abs($i - $col))\n            return false;\n    }\n    return true;\n}\n\nfunction solve(&$board, $col, $n, &$solutions) {\n    if ($col == $n) {\n        $solutions[] = $board;\n        return;\n    }\n    for ($row = 0; $row < $n; $row++) {\n        if (isSafe($board, $row, $col)) {\n            $board[$col] = $row;\n            solve($board, $col + 1, $n, $solutions);\n        }\n    }\n}\n\nfunction printBoard($board) {\n    $n = count($board);\n    for ($i = 0; $i < $n; $i++) {\n        $line = \"\";\n        for ($j = 0; $j < $n; $j++)\n            $line .= $board[$j] == $i ? \"Q \" : \". \";\n        echo $line . \"\\n\";\n    }\n    echo \"\\n\";\n}\n\n$n = 4;\n$solutions = [];\n$board = array_fill(0, $n, -1);\nsolve($board, 0, $n, $solutions);\necho \"Found \" . count($solutions) . \" solutions for \" . $n . \"-Queens:\\n\";\nforeach ($solutions as $sol) printBoard($sol);\n?>"}
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
