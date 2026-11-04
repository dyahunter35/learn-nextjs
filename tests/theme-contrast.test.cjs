/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test runs directly in Node. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const sources = [path.join(root, "src/content/generated"), path.join(root, "src/content/controllers")];
const stylesheet = fs.readFileSync(path.join(root, "public/legacy/assets/css/dark-content.css"), "utf8");

function filesUnder(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(target) : /\.(tsx|ts)$/.test(entry.name) ? [target] : [];
  });
}

function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((channel) => parseInt(channel, 16) / 255).map((value) =>
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
  );
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

function ruleFor(className, theme) {
  const selector = theme === "dark"
    ? `[data-theme="dark"] .native-legacy-body .${className}`
    : `:root:not([data-theme="dark"]) .native-legacy-body .${className}`;
  const rules = [...stylesheet.matchAll(/([^{}]+)\{([^{}]+)\}/g)].filter((match) => match[1].includes(selector));
  const declaration = rules.at(-1)?.[2].match(/color:\s*(#[\da-f]{6})\s*!important/i);
  return declaration?.[1];
}

const usedTextUtilities = [...new Set(filesUnder(sources[0]).concat(filesUnder(sources[1])).flatMap((file) =>
  fs.readFileSync(file, "utf8").match(/(?<![\w-])text-(?:gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)(?![\w-])/g) ?? [],
))];

test("all lesson and controller text colors have readable dark-theme overrides", () => {
  assert.ok(usedTextUtilities.length > 0);
  const unreadable = usedTextUtilities.flatMap((className) => {
    const color = ruleFor(className, "dark");
    return !color || contrast(color, "#252b38") < 4.5 || contrast(color, "#121212") < 4.5
      ? [`${className}: ${color ?? "missing dark override"}`]
      : [];
  });
  assert.deepEqual(unreadable, []);
});

test("light theme strengthens the low-contrast text colors used by legacy pages", () => {
  const lowContrastColors = [
    "text-gray-300", "text-gray-400", "text-amber-500", "text-amber-600", "text-blue-500", "text-cyan-600",
    "text-emerald-500", "text-emerald-600", "text-green-300", "text-green-500", "text-green-600", "text-indigo-200",
    "text-indigo-400", "text-indigo-500", "text-purple-400", "text-purple-500", "text-purple-600", "text-red-300",
    "text-red-500", "text-orange-500", "text-orange-600", "text-rose-500", "text-rose-600", "text-teal-600",
    "text-sky-600", "text-violet-600", "text-yellow-300", "text-yellow-600",
  ];
  const unreadable = lowContrastColors.flatMap((className) => {
    const color = ruleFor(className, "light");
    return !color || contrast(color, "#ffffff") < 4.5 ? [`${className}: ${color ?? "missing light override"}`] : [];
  });
  assert.deepEqual(unreadable, []);
});
