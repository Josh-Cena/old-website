"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BlogLayout_1 = __importDefault(require("@theme/BlogLayout"));
const Link_1 = __importDefault(require("@docusaurus/Link"));
function BlogArchive({ metadata, items, sidebar }) {
    const { blogTitle, blogDescription, totalCount, time } = metadata;
    return (react_1.default.createElement(BlogLayout_1.default, { title: blogTitle, description: blogDescription, searchMetadatas: { tag: 'blog_posts_list' }, sidebar: sidebar },
        react_1.default.createElement("h1", null,
            "All posts written ",
            time),
        react_1.default.createElement("ul", null, items.reverse().map(({ content }) => (react_1.default.createElement("li", null,
            content.metadata.formattedDate,
            " \u2014 ",
            react_1.default.createElement(Link_1.default, { to: content.metadata.permalink }, content.metadata.title)))))));
}
exports.default = BlogArchive;
