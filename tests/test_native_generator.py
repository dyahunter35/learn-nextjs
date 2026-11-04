import importlib.util
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("native_page_generator", ROOT / "scripts/generate-native-pages.py")
GENERATOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(GENERATOR)


def output_tag(node):
    return "div" if node["tag"] == "p" and GENERATOR.contains_block_content(node) else node["tag"]


class NativeMarkupTests(unittest.TestCase):
    def test_all_paragraphs_are_normalized_before_block_children(self):
        for folder in (ROOT / "src/legacy/algorithms").iterdir():
            if not folder.is_dir():
                continue
            for kind in ("index", "simulation", "code"):
                with self.subTest(page=f"{folder.name}/{kind}"):
                    _, nodes = GENERATOR.page_html(folder.name, kind)
                    self.assert_valid_paragraphs(nodes)

    def test_all_table_rows_are_wrapped_in_tbody(self):
        for folder in (ROOT / "src/legacy/algorithms").iterdir():
            if not folder.is_dir():
                continue
            for kind in ("index", "simulation", "code"):
                with self.subTest(page=f"{folder.name}/{kind}"):
                    _, nodes = GENERATOR.page_html(folder.name, kind)
                    self.assert_valid_tables(nodes)

    def assert_valid_paragraphs(self, nodes):
        for node in nodes:
            if not isinstance(node, dict):
                continue
            tag = output_tag(node)
            if tag == "p":
                for child in node["children"]:
                    if isinstance(child, dict):
                        self.assertNotIn(child["tag"], GENERATOR.INVALID_PARAGRAPH_CHILDREN)
            self.assert_valid_paragraphs(node["children"])

    def assert_valid_tables(self, nodes):
        for node in nodes:
            if not isinstance(node, dict):
                continue
            if node["tag"] == "table":
                self.assertFalse(any(isinstance(child, dict) and child["tag"] == "tr" for child in node["children"]))
            self.assert_valid_tables(node["children"])


if __name__ == "__main__":
    unittest.main()
