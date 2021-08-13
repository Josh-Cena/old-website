const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const path = require('path');
const i18nConfig = require('./config/i18n.config');
const navbarConfig = require('./config/navbar.config');
const footerConfig = require('./config/footer.config');

module.exports = {
  title: "Joshua Chen",
  tagline: '"Zesty scholar"',
  url: "https://josh-cena.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  favicon: "/img/favicon/favicon.ico",
  organizationName: "Josh-Cena",
  projectName: "Josh-Cena.github.io",
  i18n: i18nConfig,
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      path.resolve(__dirname, './src/plugins/plugin-blog-index'),
      {
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'All my posts',
        postsPerPage: 100,
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, { strict: false }]],
      },
    ],
  ],
  themeConfig: {
    navbar: navbarConfig,
    footer: footerConfig,
    prism: {
      additionalLanguages: ["java", "php", "sql", "latex"],
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  scripts: [
    {
      src: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",
      integrity:
        "sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",
      crossorigin: "anonymous",
      defer: true,
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/mhchem.min.js",
      integrity:
        "sha384-5gCAXJ0ZgozlShOzzT0OWArn7yCPGWVIvgo+BAd8NUKbCmulrJiQuCVR9cHlPHeG",
      crossorigin: "anonymous",
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
