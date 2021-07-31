"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const lib_1 = __importStar(require("@docusaurus/plugin-content-blog/lib"));
Object.defineProperty(exports, "validateOptions", { enumerable: true, get: function () { return lib_1.validateOptions; } });
const utils_1 = require("@docusaurus/utils");
function getTime(route) {
    if (route.split('/').length === 1) {
        return `in year ${route}`;
    }
    if (route.split('/').length === 2) {
        return `in ${new Date(route).toLocaleDateString("en", { month: "long", year: "numeric" })}`;
    }
    if (route.split('/').length === 3) {
        return `on ${new Date(route).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}`;
    }
}
const pluginBlogIndex = (context, options) => {
    const blogPluginInstance = lib_1.default(context, options);
    const { blogTitle, blogDescription, routeBasePath, } = options;
    return {
        ...blogPluginInstance,
        async contentLoaded({ content, allContent, actions }) {
            const { blogPosts } = content;
            const { addRoute, createData } = actions;
            await blogPluginInstance.contentLoaded({ content, allContent, actions });
            const postsByDate = {};
            const postById = {};
            blogPosts.forEach((post) => {
                const { metadata: { date }, id, } = post;
                postById[id] = post;
                const year = `${date.getFullYear()}`;
                const month = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}`;
                const day = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
                postsByDate[year] = [...(postsByDate[year] || []), id];
                postsByDate[month] = [...(postsByDate[month] || []), id];
                postsByDate[day] = [...(postsByDate[day] || []), id];
            });
            const routes = Object.keys(postsByDate);
            await Promise.all(routes.map(async (route) => {
                const items = postsByDate[route];
                const permalink = `/${routeBasePath}/${route}`;
                const metadata = {
                    totalCount: items.length,
                    blogTitle,
                    blogDescription,
                    time: getTime(route),
                };
                const pageMetadataPath = await createData(`${utils_1.docuHash(permalink)}.json`, JSON.stringify(metadata, null, 2));
                addRoute({
                    path: permalink,
                    component: '../src/plugins/plugin-blog-index/BlogArchive',
                    exact: true,
                    modules: {
                        sidebar: "./docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json",
                        items: items.map((postID) => {
                            return {
                                content: {
                                    __import: true,
                                    path: postById[postID].metadata.source,
                                },
                            };
                        }),
                        metadata: pageMetadataPath,
                    },
                });
            }));
        },
    };
};
exports.default = pluginBlogIndex;
