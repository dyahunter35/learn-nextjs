import arabic from "@/locales/ar.json";
import english from "@/locales/en.json";

type Catalog = Record<string, string>;
const ar = arabic as Catalog;
const en = english as Catalog;

export function translateLegacyText(text: string, pageSlug?: string, language: "ar" | "en" = "en") {
  const leading = text.match(/^\s*/)?.[0] ?? "";
  const trailing = text.match(/\s*$/)?.[0] ?? "";
  const core = text.trim();
  if (!core) return text;
  if (core.startsWith("legacy.")) {
    const catalog = language === "en" ? en : ar;
    if (language === "en" && ar[core] === "و" && pageSlug !== "caesar") return `${leading}and${trailing}`;
    return `${leading}${catalog[core] ?? ar[core] ?? core}${trailing}`;
  }
  if (language === "ar") return text;
  if (core === "و" && pageSlug !== "caesar") return `${leading}and${trailing}`;
  if (core === "مقدمة") return `${leading}${pageSlug === "stackqueue" ? "Front" : "Introduction"}${trailing}`;
  if (pageSlug === "huffman" && core === "التكرار") return `${leading}Frequency${trailing}`;
  if (pageSlug === "huffman" && core === "الحرف") return `${leading}Character${trailing}`;
  return text;
}

export function translateLegacyRuntime(text: string, key?: string, pattern?: string) {
  if (!key && text.startsWith("legacy.")) {
    const isEnglish = typeof document !== "undefined" && document.documentElement.lang === "en";
    const catalog = isEnglish ? en : ar;
    return catalog[text] ?? text;
  }
  if (key?.startsWith("legacy.")) {
    const isEnglish = typeof document !== "undefined" && document.documentElement.lang === "en";
    const translated = isEnglish ? en[key] ?? ar[key] ?? text : ar[key] ?? text;
    if (!pattern) return translated;
    const parts = pattern.split(/(\$\{[^}]+\})/g);
    const expression = new RegExp(`^${parts.map((part) => part.startsWith("${") ? "([\\s\\S]+?)" : part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("")}$`);
    const match = text.match(expression);
    let capture = 1;
    if (match) {
      return translated.replace(/\$\{[^}]+\}/g, () => match[capture++] ?? "");
    }
    return isEnglish ? translated : text;
  }
  return text;
}
