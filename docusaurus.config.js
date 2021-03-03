module.exports = {
  title: 'Joshua Chen',
  tagline: 'Welcome to my personal page!',
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
      },
      items: [
        {
          to: 'docs/',
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
              label: 'About me',
              to: 'docs/',
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
              label: 'Zhihu',
              href: 'https://www.zhihu.com/people/joshcena',
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
