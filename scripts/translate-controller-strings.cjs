/* eslint @typescript-eslint/no-require-imports: off */
const fs = require("node:fs");
const path = require("node:path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const crypto = require("node:crypto");

const directory = path.join(process.cwd(), "src/content/controllers");
const localeDirectory = path.join(process.cwd(), "src/locales");
const arabicCatalog = JSON.parse(fs.readFileSync(path.join(localeDirectory, "ar.json"), "utf8"));
const englishCatalog = JSON.parse(fs.readFileSync(path.join(localeDirectory, "en.json"), "utf8"));
const arabic = /[\u0600-\u06ff]/;
const idFor = (value) => `legacy.${crypto.createHash("sha256").update(value.trim(), "utf8").digest("hex").slice(0, 16)}`;
const register = (source) => {
  const text = source.trim();
  const key = idFor(text);
  arabicCatalog[key] = text;
  englishCatalog[key] ??= text;
  return key;
};

for (const name of fs.readdirSync(directory)) {
  if (!name.endsWith(".ts") || name === "index.ts") continue;
  const filename = path.join(directory, name);
  const ast = parser.parse(fs.readFileSync(filename, "utf8"), { sourceType: "module", plugins: ["typescript"] });
  let changed = false;
  traverse(ast, {
    StringLiteral(p) {
      if (!arabic.test(p.node.value) || !p.node.value.trim()) return;
      const key = register(p.node.value);
      p.replaceWith(t.callExpression(t.identifier("translateLegacyRuntime"), [t.stringLiteral(key)]));
      p.skip();
      changed = true;
    },
    TemplateLiteral(p) {
      const value = p.node.quasis.map((part) => part.value.raw).join("$");
      if (!arabic.test(value)) return;
      const pattern = p.node.quasis.map((part, index) => `${part.value.raw}${p.node.expressions[index] ? `\${${generate(p.node.expressions[index]).code}}` : ""}`).join("");
      const key = register(pattern);
      p.replaceWith(t.callExpression(t.identifier("translateLegacyRuntime"), [p.node, t.stringLiteral(key), t.stringLiteral(pattern)]));
      p.skip();
      changed = true;
    },
  });
  if (!changed) continue;
  ast.program.body.unshift(t.importDeclaration(
    [t.importSpecifier(t.identifier("translateLegacyRuntime"), t.identifier("translateLegacyRuntime"))],
    t.stringLiteral("@/data/legacy-english"),
  ));
  const output = generate(ast, { comments: true }).code.replace(/\/\/ @ts-nocheck\n/g, "");
  fs.writeFileSync(filename, `// @ts-nocheck\n${output}\n`);
}
fs.writeFileSync(path.join(localeDirectory, "ar.json"), `${JSON.stringify(arabicCatalog, null, 2)}\n`);
fs.writeFileSync(path.join(localeDirectory, "en.json"), `${JSON.stringify(englishCatalog, null, 2)}\n`);
