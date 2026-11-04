#!/usr/bin/env python3
"""Generate React element trees from the preserved legacy page source."""
from html.parser import HTMLParser
from hashlib import sha256
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/legacy/algorithms"
OUTPUT = ROOT / "src/content/generated"
ARABIC_CATALOG = ROOT / "src/locales/ar.json"
ENGLISH_CATALOG = ROOT / "src/locales/en.json"
ALL_ARABIC_TEXT = set()
INVALID_PARAGRAPH_CHILDREN = {"address", "article", "aside", "blockquote", "div", "dl", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
RENAMES = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "colspan": "colSpan", "rowspan": "rowSpan", "maxlength": "maxLength", "readonly": "readOnly", "crossorigin": "crossOrigin", "inputmode": "inputMode", "autofocus": "autoFocus", "viewbox": "viewBox", "fill-rule": "fillRule", "clip-rule": "clipRule", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray", "stroke-dashoffset": "strokeDashoffset", "font-family": "fontFamily", "font-size": "fontSize", "text-anchor": "textAnchor", "dominant-baseline": "dominantBaseline", "preserveaspectratio": "preserveAspectRatio", "xlink:href": "xlinkHref", "http-equiv": "httpEquiv"}

class TreeParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = {"tag": "root", "attrs": {}, "children": []}
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "tr" and self.stack[-1]["tag"] == "table":
            section = {"tag": "tbody", "attrs": {}, "children": []}
            self.stack[-1]["children"].append(section)
            self.stack.append(section)
        node = {"tag": tag, "attrs": attrs, "children": []}
        self.stack[-1]["children"].append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1]["children"].append({"tag": tag, "attrs": dict(attrs), "children": []})

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index]["tag"] == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        if data:
            self.stack[-1]["children"].append(data)

    def handle_entityref(self, name):
        self.handle_data(f"&{name};")

    def handle_charref(self, name):
        self.handle_data(f"&#{name};")


def style_object(value):
    pairs = []
    for declaration in value.split(";"):
        if ":" not in declaration:
            continue
        key, val = declaration.split(":", 1)
        key = key.strip()
        if not key:
            continue
        if key.startswith("--"):
            prop = key
        else:
            chunks = key.split("-")
            prop = chunks[0] + "".join(chunk[:1].upper() + chunk[1:] for chunk in chunks[1:])
        pairs.append((prop, val.strip()))
    return "{" + ",".join(f"{json.dumps(k)}:{json.dumps(v)}" for k, v in pairs) + "}"


def props_for(attrs, tag):
    props = []
    for name, value in attrs.items():
        if name.lower().startswith("on"):
            props.append(("data-legacy-" + name[2:].lower(), value or ""))
            continue
        prop = RENAMES.get(name.lower(), name)
        if tag in {"input", "textarea", "select"} and name.lower() == "value":
            prop = "defaultValue"
        if tag == "input" and name.lower() == "checked":
            prop = "defaultChecked"
        if tag == "option" and name.lower() == "selected":
            prop = "selected"
        if name.lower() == "style":
            props.append(("style", style_object(value or ""), True))
        elif value is None:
            props.append((prop, True, True))
        elif prop in {"rows", "cols", "colSpan", "rowSpan", "maxLength", "size", "span", "start"} and value.isdigit():
            props.append((prop, int(value), True))
        else:
            props.append((prop, value))
    return props


def jsx_expression(node, depth=0):
    pad = "  " * depth
    if isinstance(node, str):
        literal = json.dumps(node, ensure_ascii=False)
        if node.strip() and re.search(r"[\u0600-\u06ff]", node):
            key = "legacy." + sha256(node.strip().encode("utf-8")).hexdigest()[:16]
            ALL_ARABIC_TEXT.add(node.strip())
            return f"{pad}{{t({json.dumps(key)})}}"
        return f"{pad}{{{literal}}}"
    tag = node["tag"]
    if tag == "p" and contains_block_content(node):
        tag = "div"
    props = []
    for key, value, *raw_value in props_for(node["attrs"], tag):
        is_raw = raw_value[0] if raw_value else False
        if is_raw:
            rendered = "true" if value is True else value
            props.append(f"{key}={{{rendered}}}")
        else:
            props.append(f"{key}={{{json.dumps(value, ensure_ascii=False)}}}")
    opening = f"<{tag}{(' ' + ' '.join(props)) if props else ''}"
    if tag in VOID:
        return f"{pad}{opening} />"
    if not node["children"]:
        return f"{pad}{opening}></{tag}>"
    children_nodes = node["children"]
    if tag in {"table", "thead", "tbody", "tfoot", "tr", "colgroup"}:
        children_nodes = [child for child in children_nodes if not isinstance(child, str) or child.strip()]
    children = "\n".join(jsx_expression(child, depth + 1) for child in children_nodes)
    return f"{pad}{opening}>\n{children}\n{pad}</{tag}>"


def contains_block_content(node):
    return any(
        isinstance(child, dict)
        and (child["tag"] in INVALID_PARAGRAPH_CHILDREN or contains_block_content(child))
        for child in node["children"]
    )


def page_html(slug, kind):
    filename = "index.html" if kind == "index" else f"{kind}.html"
    source = (SOURCE / slug / filename).read_text(encoding="utf-8")
    body_attrs = re.search(r"<body\b([^>]*)>", source, re.I)
    body_class = ""
    if body_attrs:
        found_class = re.search(r"class=[\"']([^\"']*)[\"']", body_attrs.group(1), re.I)
        if found_class:
            body_class = found_class.group(1)
    body = re.search(r"<body\b[^>]*>([\s\S]*?)</body>", source, re.I)
    html = body.group(1) if body else ""
    html = re.sub(r"<nav\b[^>]*class=[\"'][^\"']*\bsite-nav\b[^\"']*[\"'][^>]*>[\s\S]*?</nav>", "", html, flags=re.I)
    html = re.sub(r"<footer\b[^>]*>[\s\S]*?</footer>", "", html, flags=re.I)
    html = re.sub(r"<script\b[^>]*>[\s\S]*?</script>", "", html, flags=re.I)
    html = re.sub(r"href=([\"'])(?:\.\./)+index\.html(?:\?[^\"']*)?\1", 'href="/"', html, flags=re.I)
    html = re.sub(r"href=([\"'])(?:\.\./)*simulation\.html(?:\?[^\"']*)?\1", f'href="/algorithms/{slug}/simulation"', html, flags=re.I)
    html = re.sub(r"href=([\"'])(?:\.\./)*code\.html(?:\?[^\"']*)?\1", f'href="/algorithms/{slug}/code"', html, flags=re.I)
    html = re.sub(r"href=([\"'])(?:\.\./)*index\.html(?:\?[^\"']*)?\1", f'href="/algorithms/{slug}"', html, flags=re.I)
    parser = TreeParser()
    parser.feed(html)
    return body_class, parser.root["children"]


def main():
    global ALL_ARABIC_TEXT
    ALL_ARABIC_TEXT = set()
    page_map = []
    for folder in sorted(path for path in SOURCE.iterdir() if path.is_dir()):
        for kind in ("index", "simulation", "code"):
            body_class, tree = page_html(folder.name, kind)
            file = OUTPUT / folder.name / f"{kind}.tsx"
            file.parent.mkdir(parents=True, exist_ok=True)
            body = "\n".join(jsx_expression(node, 2) for node in tree)
            file.write_text(
                '"use client";\n\nimport { useLanguage } from "@/components/LanguageProvider";\nimport { translateLegacyText } from "@/data/legacy-english";\n\n'
                f'export default function NativePage() {{\n  const {{ language }} = useLanguage();\n  const t = (text: string) => translateLegacyText(text, {json.dumps(folder.name)}, language);\n  return (\n'
                f'    <div className={json.dumps("native-legacy-body " + body_class, ensure_ascii=False)}>\n'
                f'{body}\n'
                '    </div>\n  );\n}\n',
                encoding="utf-8",
            )
            page_map.append((folder.name, kind, file))

    imports = []
    entries = []
    for i, (slug, kind, _) in enumerate(page_map):
        name = f"Page{i}"
        imports.append(f'import {name} from "@/content/generated/{slug}/{kind}";')
        entries.append(f'  "{slug}:{kind}": {name},')
    (OUTPUT / "index.tsx").write_text(
        "\n".join(imports) + "\n\nconst pages = {\n" + "\n".join(entries) + "\n};\n\n"
        "export function getNativePage(slug: string, kind: string) {\n"
        "  const Page = pages[`${slug}:${kind}` as keyof typeof pages];\n"
        "  return Page ? <Page /> : null;\n}\n",
        encoding="utf-8",
    )
    arabic = json.loads(ARABIC_CATALOG.read_text(encoding="utf-8")) if ARABIC_CATALOG.exists() else {}
    english = json.loads(ENGLISH_CATALOG.read_text(encoding="utf-8")) if ENGLISH_CATALOG.exists() else {}
    for source in ALL_ARABIC_TEXT:
        key = "legacy." + sha256(source.encode("utf-8")).hexdigest()[:16]
        arabic[key] = source
        english.setdefault(key, source)
    for filename, values in ((ARABIC_CATALOG, arabic), (ENGLISH_CATALOG, english)):
        filename.write_text(json.dumps(values, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
