/* eslint-disable @typescript-eslint/no-var-requires */

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  title: 'Joshua Chen',
  tagline: '"Zesty scholar"',
  url: 'https://josh-cena.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'Josh-Cena', // Usually your GitHub org/user name.
  projectName: 'Josh-Cena.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Josh-Cena',
      logo: {
        alt: 'JC',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {to: 'CV', label: 'Profile', position: 'left'},
        {to: 'Todo', label: 'Todo list', position: 'left'},
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Josh-Cena',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Science',
              to: 'docs/Science/amino-acid',
            },
            {
              label: 'Technology',
              to: 'docs/Technology/easy-tsims',
            },
            {
              label: 'Humanities',
              to: 'docs/Humanities/law',
            },
            {
              label: 'Short stories',
              to: 'docs/Stories/red-pills',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Zhihu',
              href: 'https://www.zhihu.com/people/joshcena',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/AU7X2HtnDK',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/sida-chen-9592361b9/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Josh-Cena',
            },
            {
              label: 'WeChat official account',
              href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMzI0ODk0NA==&scene=124#wechat_redirect',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sida Chen. Built with Docusaurus.`,
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js',
      integrity:
        'sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4',
      crossorigin: 'anonymous',
      defer: true,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/mhchem.min.js',
      integrity:
        'sha384-5gCAXJ0ZgozlShOzzT0OWArn7yCPGWVIvgo+BAd8NUKbCmulrJiQuCVR9cHlPHeG',
      crossorigin: 'anonymous',
      defer: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
