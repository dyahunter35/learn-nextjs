import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const logoPath = path.join(root, "public/icons/icon-512.png");
const outDir = path.join(root, "public/cards");
fs.mkdirSync(outDir, { recursive: true });

const logoB64 = fs.readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoB64}`;

const colors = {
  indigo: "#4f46e5",
  blue: "#2563eb",
  amber: "#d97706",
  emerald: "#059669",
  violet: "#7c3aed",
  rose: "#e11d48",
};

const algorithms = [
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

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function wrap(text, max = 34) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length <= max) {
      current = (current + " " + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

for (const a of algorithms) {
  const accent = colors[a.color];
  const lines = wrap(a.summary, 34);
  const summarySvg = lines.map((l, i) => `<text x="540" y="${600 + i * 48}" font-family="Noto Sans Arabic" font-size="32" text-anchor="middle" fill="#374151">${escapeXml(l)}</text>`).join("\n");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="${accent}18"/>
    </linearGradient>
    <clipPath id="logoClip"><circle cx="110" cy="110" r="54"/></clipPath>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg)"/>
  <rect x="48" y="48" width="984" height="984" rx="44" fill="#ffffff" opacity="0.96" stroke="${accent}" stroke-width="2"/>
  <image href="${logoDataUri}" x="56" y="56" width="108" height="108" clip-path="url(#logoClip)"/>
  <text x="1024" y="118" font-family="Noto Sans Arabic" font-size="42" font-weight="700" text-anchor="end" fill="#111827">مقرر الحاسوب</text>
  <text x="1024" y="166" font-family="Noto Sans Arabic" font-size="24" text-anchor="end" fill="#6b7280">الخوارزميات والمحاكاة</text>
  <text x="540" y="330" font-family="Noto Sans Arabic" font-size="84" font-weight="800" text-anchor="middle" fill="${accent}">${escapeXml(a.title)}</text>
  <text x="540" y="400" font-family="Arial" font-size="38" text-anchor="middle" fill="#4b5563">${escapeXml(a.english)}</text>
  <rect x="420" y="445" width="240" height="50" rx="25" fill="${accent}" opacity="0.14"/>
  <text x="540" y="480" font-family="Noto Sans Arabic" font-size="26" font-weight="600" text-anchor="middle" fill="${accent}">${escapeXml(a.group)}</text>
  ${summarySvg}
  <text x="540" y="960" font-family="Noto Sans Arabic" font-size="24" text-anchor="middle" fill="#9ca3af">بطاقة معرفة • مقرر الحاسوب</text>
</svg>`;
  const outPath = path.join(outDir, `${a.slug}.png`);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log("generated", a.slug);
}
console.log("done");