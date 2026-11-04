export type AlgorithmGroup = "أساسيات المقرر" | "أدوات تعليمية" | "معرفة إضافية";

export type Algorithm = {
  slug: string;
  title: string;
  english: string;
  group: AlgorithmGroup;
  summary: string;
  color: "indigo" | "blue" | "amber" | "emerald" | "violet" | "rose";
};

export const algorithms: Algorithm[] = [
  { slug: "sorting", title: "الترتيب", english: "Sorting", group: "أساسيات المقرر", summary: "قارن بين طرق ترتيب العناصر، وتابع كل مقارنة وتبديل حتى تصل المصفوفة إلى ترتيبها النهائي.", color: "indigo" },
  { slug: "searching", title: "البحث", english: "Searching", group: "أساسيات المقرر", summary: "اكتشف الفرق بين البحث الخطي والثنائي، ولماذا يحتاج البحث الثنائي إلى بيانات مرتبة.", color: "blue" },
  { slug: "caesar", title: "تشفير قيصر", english: "Caesar Cipher", group: "أساسيات المقرر", summary: "شفّر النص العربي أو فكّه، ثم راقب انتقال كل حرف عبر جدول الأبجدية.", color: "emerald" },
  { slug: "huffman", title: "ترميز هوفمان", english: "Huffman Coding", group: "أساسيات المقرر", summary: "ابنِ شجرة الترميز خطوة خطوة، وشاهد كيف تقلل الرموز المتكررة طول البيانات.", color: "amber" },
  { slug: "stackqueue", title: "المكدس والطابور", english: "Stack & Queue", group: "أساسيات المقرر", summary: "جرّب الإضافة والحذف عمليًا، وقارن بين مبدأ آخر ما يدخل أول ما يخرج وأول ما يدخل أول ما يخرج.", color: "violet" },
  { slug: "linkedlist", title: "القوائم المترابطة", english: "Linked Lists", group: "أساسيات المقرر", summary: "أضف العقد وابحث عنها واحذفها، وتابع الروابط التي تصل عناصر القائمة.", color: "rose" },
  { slug: "converters", title: "التحويلات العددية", english: "Number Converters", group: "أدوات تعليمية", summary: "حوّل بين الأنظمة العشرية والثنائية والثمانية والسداسية، مع إظهار خطوات الحساب.", color: "blue" },
  { slug: "calculator", title: "الآلة الحاسبة العلمية", english: "Scientific Calculator", group: "أدوات تعليمية", summary: "نفّذ العمليات الحسابية والدوال العلمية من واجهة تفاعلية واحدة.", color: "violet" },
  { slug: "truetale", title: "جداول الصواب", english: "Truth Tables", group: "أدوات تعليمية", summary: "كوّن التعبير المنطقي وشاهد جدول الصواب ونتيجة كل حالة.", color: "indigo" },
  { slug: "recursion", title: "الاستدعاء الذاتي", english: "Recursion", group: "معرفة إضافية", summary: "تابع تتابع الاستدعاءات ومكدس التنفيذ عبر أمثلة العامل والمتتالية.", color: "blue" },
  { slug: "graphs", title: "اجتياز الرسوم البيانية", english: "BFS & DFS", group: "معرفة إضافية", summary: "قارن بين البحث بالاتساع والبحث بالعمق على رسم بياني تفاعلي.", color: "emerald" },
  { slug: "dp", title: "البرمجة الديناميكية", english: "Dynamic Programming", group: "معرفة إضافية", summary: "شاهد كيف تخزن الحلول الجزئية لتقليل الحساب المتكرر.", color: "violet" },
  { slug: "hashing", title: "التجزئة", english: "Hashing", group: "معرفة إضافية", summary: "أضف مفتاحًا وابحث عنه واحذفه، وراقب أثر دالة التجزئة والتصادمات.", color: "amber" },
  { slug: "divide-conquer", title: "فرق تسد", english: "Divide and Conquer", group: "معرفة إضافية", summary: "قسّم المشكلة إلى أجزاء أصغر، ثم شاهد دمج الحلول في ترتيب الدمج.", color: "indigo" },
  { slug: "greedy", title: "الخوارزميات الجشعة", english: "Greedy Algorithms", group: "معرفة إضافية", summary: "اتخذ أفضل اختيار متاح في كل خطوة، وتابع أثره على الحل النهائي.", color: "amber" },
  { slug: "backtracking", title: "التراجع", english: "Backtracking", group: "معرفة إضافية", summary: "استكشف حلول مسألة الملكات، وارجع عند كل مسار لا يحقق الشروط.", color: "rose" },
  { slug: "shortest-path", title: "أقصر مسار", english: "Dijkstra", group: "معرفة إضافية", summary: "ابدأ من عقدة، ثم راقب تحديث المسافات واختيار المسار الأقل كلفة.", color: "blue" },
  { slug: "mst", title: "الشجرة الممتدة الدنيا", english: "Minimum Spanning Tree", group: "معرفة إضافية", summary: "قارن بين خوارزميتي كروسكال وبريم لاختيار أقل مجموعة أوزان تصل العقد.", color: "emerald" },
  { slug: "string-matching", title: "مطابقة السلاسل", english: "String Matching", group: "معرفة إضافية", summary: "قارن البحث الساذج بخوارزمية KMP أثناء مطابقة النمط مع النص.", color: "violet" },
];

export const groups: AlgorithmGroup[] = ["أساسيات المقرر", "أدوات تعليمية", "معرفة إضافية"];

export function getAlgorithm(slug: string) {
  return algorithms.find((algorithm) => algorithm.slug === slug);
}

export function algorithmStaticParams() {
  return algorithms.map(({ slug }) => ({ slug }));
}
