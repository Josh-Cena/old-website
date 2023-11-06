import remarkMath = require("remark-math");
import rehypeKatex = require("./src/remark/rehypeKatex");
import i18nConfig = require("./config/i18n.config");
import navbarConfig = require("./config/navbar.config");
import footerConfig = require("./config/footer.config");
import type { Config } from "@docusaurus/types";
// import cardlink from './src/remark/cardlink';
// import figure from './src/remark/figure';

const config: Config = {
  title: "Joshua Chen",
  tagline: '"Zesty scholar"',
  url: "https://josh-cena.github.io",
  baseUrl: "/old-website/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  favicon: "/img/favicon/favicon.ico",
  i18n: i18nConfig,
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      "blog-index",
      {
        blogSidebarCount: "ALL",
        blogSidebarTitle: "All my posts",
        postsPerPage: "ALL",
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
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./config/sidebars.config.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          announcementBar: {
            id: '1',
            content:
              'You are looking at the <strong>archived</strong> version of my website. <a href="https://joshcena.com">Click here</a> to go to the new homepage.',
            backgroundColor: '#39cac4',
            textColor: 'black',
            isCloseable: false,
          },
        },
      },
    ],
  ],
};

export = config;
