import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Science",
          to: "docs/Science/amino-acid",
        },
        {
          label: "Technology",
          to: "docs/Technology/easy-tsims",
        },
        {
          label: "Humanities",
          to: "docs/Humanities/law",
        },
        {
          label: "Short stories",
          to: "docs/Stories/red-pills",
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          label: "Zhihu",
          href: "https://www.zhihu.com/people/joshcena",
        },
        {
          label: "Discord",
          href: "https://discord.gg/AU7X2HtnDK",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/sida-joshua-chen/",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "Blog",
          to: "blog",
        },
        {
          label: "GitHub",
          href: "https://github.com/Josh-Cena",
        },
        {
          label: "WeChat official account",
          href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMzI0ODk0NA==&scene=124#wechat_redirect",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Sida Chen. Built with Docusaurus.`,
};

export = footer;
