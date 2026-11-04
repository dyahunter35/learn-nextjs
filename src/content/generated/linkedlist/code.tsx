export default function NativePage() {
  return (
    <div className="native-legacy-body bg-gray-50 min-h-screen">
    {"\n  \n    \n    \n\n  "}
    <div className={"code-page"}>
      {"\n    "}
      <h1>
        {"القائمة المترابطة — الكود البرمجي"}
      </h1>
      {"\n    "}
      <p className={"subtitle"}>
        {"شرح مبسط لهيكل بيانات القائمة المترابطة مع أمثلة برمجية بلغات متعددة. يمكنك نسخ الكود واستخدامه مباشرة."}
      </p>
      {"\n    \n    "}
      <div className={"algorithm-code-description"}>
        {"\n      "}
        <strong>
          {"كيف تعمل القائمة المترابطة (Linked List):"}
        </strong>
        <br />
        {"\n      القائمة المترابطة هي هيكل بيانات خطي حيث يتم ترتيب العناصر (المسماة \"عقد\") بشكل متسلسل، وكل عقدة تحتوي على قيمة ومؤشر (رابط) إلى العقدة التالية. على عكس المصفوفات، يمكن إدراج وحذف العناصر بسهولة دون الحاجة إلى إعادة ترتيب العناصر الأخرى. العمليات الأساسية: إدراج عقدة، حذف عقدة، البحث عن قيمة، وعرض القائمة.\n    "}
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
            {"#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\nclass LinkedList {\n    Node* head;\n\npublic:\n    LinkedList() : head(nullptr) {}\n\n    void insertAtHead(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n\n    void insertAtTail(int val) {\n        Node* newNode = new Node(val);\n        if (!head) { head = newNode; return; }\n        Node* temp = head;\n        while (temp->next) temp = temp->next;\n        temp->next = newNode;\n    }\n\n    void deleteValue(int val) {\n        if (!head) return;\n        if (head->data == val) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n            return;\n        }\n        Node* curr = head;\n        while (curr->next && curr->next->data != val)\n            curr = curr->next;\n        if (curr->next) {\n            Node* temp = curr->next;\n            curr->next = temp->next;\n            delete temp;\n        }\n    }\n\n    bool search(int val) {\n        Node* temp = head;\n        while (temp) {\n            if (temp->data == val) return true;\n            temp = temp->next;\n        }\n        return false;\n    }\n\n    void display() {\n        Node* temp = head;\n        while (temp) {\n            cout << temp->data << \" -> \";\n            temp = temp->next;\n        }\n        cout << \"NULL\" << endl;\n    }\n};\n\nint main() {\n    LinkedList list;\n\n    list.insertAtHead(30);\n    list.insertAtHead(20);\n    list.insertAtHead(10);\n    list.insertAtTail(40);\n\n    cout << \"Linked List: \";\n    list.display();\n\n    cout << \"Search 20: \" << (list.search(20) ? \"Found\" : \"Not Found\") << endl;\n    cout << \"Search 99: \" << (list.search(99) ? \"Found\" : \"Not Found\") << endl;\n\n    list.deleteValue(20);\n    cout << \"After deleting 20: \";\n    list.display();\n\n    return 0;\n}"}
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
            {"class Node {\n    int data;\n    Node next;\n    Node(int data) { this.data = data; this.next = null; }\n}\n\nclass LinkedList {\n    Node head;\n\n    public void insertAtHead(int val) {\n        Node newNode = new Node(val);\n        newNode.next = head;\n        head = newNode;\n    }\n\n    public void insertAtTail(int val) {\n        Node newNode = new Node(val);\n        if (head == null) { head = newNode; return; }\n        Node temp = head;\n        while (temp.next != null) temp = temp.next;\n        temp.next = newNode;\n    }\n\n    public void deleteValue(int val) {\n        if (head == null) return;\n        if (head.data == val) { head = head.next; return; }\n        Node curr = head;\n        while (curr.next != null && curr.next.data != val)\n            curr = curr.next;\n        if (curr.next != null) curr.next = curr.next.next;\n    }\n\n    public boolean search(int val) {\n        Node temp = head;\n        while (temp != null) {\n            if (temp.data == val) return true;\n            temp = temp.next;\n        }\n        return false;\n    }\n\n    public void display() {\n        Node temp = head;\n        while (temp != null) {\n            System.out.print(temp.data + \" -> \");\n            temp = temp.next;\n        }\n        System.out.println(\"NULL\");\n    }\n}\n\npublic class LinkedListDemo {\n    public static void main(String[] args) {\n        LinkedList list = new LinkedList();\n\n        list.insertAtHead(30);\n        list.insertAtHead(20);\n        list.insertAtHead(10);\n        list.insertAtTail(40);\n\n        System.out.print(\"Linked List: \");\n        list.display();\n\n        System.out.println(\"Search 20: \" + (list.search(20) ? \"Found\" : \"Not Found\"));\n        System.out.println(\"Search 99: \" + (list.search(99) ? \"Found\" : \"Not Found\"));\n\n        list.deleteValue(20);\n        System.out.print(\"After deleting 20: \");\n        list.display();\n    }\n}"}
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
            {"class Node {\n    constructor(data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\nclass LinkedList {\n    constructor() { this.head = null; }\n\n    insertAtHead(val) {\n        const newNode = new Node(val);\n        newNode.next = this.head;\n        this.head = newNode;\n    }\n\n    insertAtTail(val) {\n        const newNode = new Node(val);\n        if (!this.head) { this.head = newNode; return; }\n        let temp = this.head;\n        while (temp.next) temp = temp.next;\n        temp.next = newNode;\n    }\n\n    deleteValue(val) {\n        if (!this.head) return;\n        if (this.head.data === val) { this.head = this.head.next; return; }\n        let curr = this.head;\n        while (curr.next && curr.next.data !== val) curr = curr.next;\n        if (curr.next) curr.next = curr.next.next;\n    }\n\n    search(val) {\n        let temp = this.head;\n        while (temp) {\n            if (temp.data === val) return true;\n            temp = temp.next;\n        }\n        return false;\n    }\n\n    display() {\n        let temp = this.head;\n        let result = \"\";\n        while (temp) {\n            result += temp.data + \" -> \";\n            temp = temp.next;\n        }\n        console.log(result + \"NULL\");\n    }\n}\n\nconst list = new LinkedList();\nlist.insertAtHead(30);\nlist.insertAtHead(20);\nlist.insertAtHead(10);\nlist.insertAtTail(40);\n\nconsole.log(\"Linked List:\");\nlist.display();\n\nconsole.log(\"Search 20:\", list.search(20) ? \"Found\" : \"Not Found\");\nconsole.log(\"Search 99:\", list.search(99) ? \"Found\" : \"Not Found\");\n\nlist.deleteValue(20);\nconsole.log(\"After deleting 20:\");\nlist.display();"}
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
            {"<?php\n\nclass Node {\n    public $data;\n    public $next;\n    public function __construct($data) {\n        $this->data = $data;\n        $this->next = null;\n    }\n}\n\nclass LinkedList {\n    private $head;\n\n    public function __construct() { $this->head = null; }\n\n    public function insertAtHead($val) {\n        $newNode = new Node($val);\n        $newNode->next = $this->head;\n        $this->head = $newNode;\n    }\n\n    public function insertAtTail($val) {\n        $newNode = new Node($val);\n        if ($this->head === null) {\n            $this->head = $newNode;\n            return;\n        }\n        $temp = $this->head;\n        while ($temp->next !== null) $temp = $temp->next;\n        $temp->next = $newNode;\n    }\n\n    public function deleteValue($val) {\n        if ($this->head === null) return;\n        if ($this->head->data == $val) {\n            $this->head = $this->head->next;\n            return;\n        }\n        $curr = $this->head;\n        while ($curr->next !== null && $curr->next->data != $val)\n            $curr = $curr->next;\n        if ($curr->next !== null) $curr->next = $curr->next->next;\n    }\n\n    public function search($val) {\n        $temp = $this->head;\n        while ($temp !== null) {\n            if ($temp->data == $val) return true;\n            $temp = $temp->next;\n        }\n        return false;\n    }\n\n    public function display() {\n        $temp = $this->head;\n        while ($temp !== null) {\n            echo $temp->data . \" -> \";\n            $temp = $temp->next;\n        }\n        echo \"NULL\\n\";\n    }\n}\n\n$list = new LinkedList();\n$list->insertAtHead(30);\n$list->insertAtHead(20);\n$list->insertAtHead(10);\n$list->insertAtTail(40);\n\necho \"Linked List: \";\n$list->display();\n\necho \"Search 20: \" . ($list->search(20) ? \"Found\" : \"Not Found\") . \"\\n\";\necho \"Search 99: \" . ($list->search(99) ? \"Found\" : \"Not Found\") . \"\\n\";\n\n$list->deleteValue(20);\necho \"After deleting 20: \";\n$list->display();\n\n?>"}
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
