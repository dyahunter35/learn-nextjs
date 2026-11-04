#!/usr/bin/env python3
"""Move the browser controllers into importable TypeScript modules."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/legacy/assets/js"
OUTPUT = ROOT / "src/content/controllers"


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    modules = []
    for source in sorted(SOURCE.glob("*.js")):
        name = source.stem
        if name == "3d-scene":
            continue  # This optional scene is not referenced by any course page.
        output_name = "legacy-index" if name == "index" else name
        code = source.read_text(encoding="utf-8")
        functions = list(dict.fromkeys(re.findall(r"^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(", code, re.M)))
        prefix = "// @ts-nocheck\n"
        if functions:
            entries = ", ".join(f"{function}: {function}" for function in functions)
            suffix = f"\n\nObject.assign(window, {{{entries}}});\nexport {{{', '.join(functions)}}};\n"
        else:
            suffix = "\nexport {};\n"
        (OUTPUT / f"{output_name}.ts").write_text(prefix + code.rstrip() + suffix, encoding="utf-8")
        modules.append((name, output_name))

    lines = ["type ControllerLoader = () => Promise<unknown>;", "", "export const controllerLoaders: Record<string, ControllerLoader> = {"]
    lines.extend(f'  "{name}.js": () => import("@/content/controllers/{output_name}"),' for name, output_name in modules)
    lines.extend(["};", ""])
    (OUTPUT / "index.ts").write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
