/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test runs directly in Node. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const arabic = JSON.parse(fs.readFileSync(path.join(root, "src/locales/ar.json"), "utf8"));
const english = JSON.parse(fs.readFileSync(path.join(root, "src/locales/en.json"), "utf8"));
const generatedRoot = path.join(root, "src/content/generated");
const keyPattern = /legacy\.[a-f0-9]{16}/g;

test("Arabic and English catalogs contain the same stable keys", () => {
  assert.deepEqual(Object.keys(arabic).sort(), Object.keys(english).sort());
  assert.ok(Object.keys(arabic).every((key) => /^legacy\.[a-f0-9]{16}$/.test(key)));
});

test("all 57 generated pages use translated catalog entries", () => {
  const pages = fs.readdirSync(generatedRoot).flatMap((slug) => {
    const directory = path.join(generatedRoot, slug);
    return fs.statSync(directory).isDirectory()
      ? fs.readdirSync(directory).filter((file) => file.endsWith(".tsx")).map((file) => ({ slug, file, source: fs.readFileSync(path.join(directory, file), "utf8") }))
      : [];
  });
  assert.equal(pages.length, 57);
  const untranslated = [];
  for (const page of pages) {
    for (const key of new Set(page.source.match(keyPattern) ?? [])) {
      assert.ok(arabic[key], `${page.slug}/${page.file} references missing Arabic key ${key}`);
      assert.ok(english[key], `${page.slug}/${page.file} references missing English key ${key}`);
      const preservedCipherData = page.slug === "caesar" && (Array.from(arabic[key]).length === 1 || arabic[key] === "وشذجث");
      const handledArabicConjunction = arabic[key] === "و" && page.slug !== "caesar";
      if (arabic[key] === english[key] && !preservedCipherData && !handledArabicConjunction) {
        untranslated.push(`${page.slug}/${page.file}: ${key} (${arabic[key]})`);
      }
    }
  }
  assert.deepEqual(untranslated, []);
});

test("controller HTML templates do not retain Arabic labels in the English catalog", () => {
  const untranslated = Object.entries(english)
    .filter(([key, value]) => /<[^>]+>[\s\S]*[\u0600-\u06ff]{2}/.test(value) && key !== "legacy.84530ccee35a62e5")
    .map(([key]) => key);
  assert.deepEqual(untranslated, []);
});

test("controller keys render localized values instead of raw key names", () => {
  const source = fs.readFileSync(path.join(root, "src/data/legacy-english.ts"), "utf8");
  const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, resolveJsonModule: true } }).outputText;
  const commonJsModule = { exports: {} };
  const context = {
    exports: commonJsModule.exports,
    module: commonJsModule,
    require(name) {
      if (name === "@/locales/ar.json") return arabic;
      if (name === "@/locales/en.json") return english;
      throw new Error(`Unexpected import: ${name}`);
    },
    document: { documentElement: { lang: "en" } },
  };
  vm.runInNewContext(javascript, context, { filename: "legacy-english.ts" });
  const { translateLegacyRuntime } = commonJsModule.exports;
  const { translateLegacyText } = commonJsModule.exports;
  const key = "legacy.328afcf9ebbdee16";
  assert.equal(translateLegacyRuntime(key), english[key]);
  assert.equal(translateLegacyText(key, "huffman", "ar"), arabic[key]);
  assert.equal(translateLegacyText(key, "huffman", "en"), english[key]);
  context.document.documentElement.lang = "ar";
  assert.equal(translateLegacyRuntime(key), arabic[key]);
  context.document.documentElement.lang = "en";
  assert.equal(translateLegacyRuntime("5 عقد", key, "${NODES.length} عقد"), "5 nodes");
  assert.equal(translateLegacyText("legacy.6245b4d08f3f2a99", "converters"), "and");
});
