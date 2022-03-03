const visit = require("unist-util-visit");

function plugin() {
  let transformed = false;
  async function transformer(root) {
    visit(root, "paragraph", (node) => {
      if (node.children.length === 1 && node.children[0].type === "link") {
        transformed = true;
        const {
          url,
          children: [{ value: title }],
        } = node.children[0];
        for (const member in node) {
          delete node[member];
        }
        node.type = "jsx";
        node.value = `<CardLink href="${url}" title="${title}" />`;
      }
    });
    if (root.type === "root" && transformed) {
      root.children.unshift({
        type: "import",
        value: "import CardLink from '@site/src/components/CardLink';",
      });
    }
  }
  return transformer;
}

module.exports = plugin;
