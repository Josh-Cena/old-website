import pluginContentBlog, {
  validateOptions,
} from "@docusaurus/plugin-content-blog/lib";
import { docuHash, normalizeUrl } from "@docusaurus/utils";
import type { BlogPost } from "@docusaurus/plugin-content-blog/src/types";

function getTime(route: string) {
  if (route.split("/").length === 1) {
    return `in year ${route}`;
  }
  if (route.split("/").length === 2) {
    return `in ${new Date(route).toLocaleDateString("en", {
      month: "long",
      year: "numeric",
    })}`;
  }
  if (route.split("/").length === 3) {
    return `on ${new Date(route).toLocaleDateString("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  }
}

const pluginBlogIndex: typeof pluginContentBlog = (context, options) => {
  const blogPluginInstance = pluginContentBlog(context, options);
  const { blogTitle, blogDescription, routeBasePath } = options;
  const { baseUrl } = context;

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, allContent, actions }) {
      const { blogPosts } = content;
      const { addRoute, createData } = actions;
      await blogPluginInstance.contentLoaded({ content, allContent, actions });
      const postsByDate: Record<string, string[]> = {};
      const postById: Record<string, BlogPost> = {};
      blogPosts.forEach((post) => {
        const {
          metadata: { date },
          id,
        } = post;
        postById[id] = post;
        const year = `${date.getFullYear()}`;
        const month = `${date.getFullYear()}/${String(
          date.getMonth() + 1
        ).padStart(2, "0")}`;
        const day = `${date.getFullYear()}/${String(
          date.getMonth() + 1
        ).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
        postsByDate[year] = [...(postsByDate[year] || []), id];
        postsByDate[month] = [...(postsByDate[month] || []), id];
        postsByDate[day] = [...(postsByDate[day] || []), id];
      });
      const routes = Object.keys(postsByDate);
      await Promise.all(
        routes.map(async (route) => {
          const items = postsByDate[route];
          const permalink = normalizeUrl([baseUrl, routeBasePath, route]);
          const metadata = {
            totalCount: items.length,
            blogTitle,
            blogDescription,
            time: getTime(route),
          };
          const pageMetadataPath = await createData(
            `${docuHash(permalink)}.json`,
            JSON.stringify(metadata, null, 2)
          );

          addRoute({
            path: permalink,
            component: "../src/plugins/plugin-blog-index/BlogArchive",
            exact: true,
            modules: {
              sidebar:
                "./docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json",
              items: items.map((postID) => {
                // To tell routes.js this is an import and not a nested object to recurse.
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
        })
      );
    },
  };
};

export { validateOptions };
export default pluginBlogIndex;
