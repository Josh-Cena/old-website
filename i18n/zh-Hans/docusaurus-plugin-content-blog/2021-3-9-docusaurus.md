---
title: 搭建 Docusaurus 应用
author: Joshua Chen
author_url: https://github.com/Josh-Cena
author_image_url: https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4
tags: [前端, 个人网页]
---

我在三月把这个网页迁移到了 Docusaurus。这篇博文总结了我的经历。

<!-- truncate -->

## 为什么要用 Docusaurus？

这个网站用 Vue 搭建的黑暗时期将被永远钉在[GH pages 仓库的提交记录](https://github.com/Josh-Cena/Personal-page/tree/202beb7770e17fbc6ab30bce4d928bf678ecc5e8)的耻辱柱上。

<img src="/zh-Hans/img/blog/2021-3-9/page.jpg"></img>

当然，我也不是在说 Vue 的不好——它很强大，强大到你基本可以用它搭任何东西。我正在开发的学校社团管理系统就用 Vue 做前端。问题大概出在我身上，因为我没多少时间从头造所有东西。

我一开始出于三个原因选择了 Vue。即使我一开始用 React，理由也大差不差：

1. 我计划展示我的几个早期作品，包括 [Todo list](https://github.com/Computerization/New-member-practice-commit/tree/master/2019/Josh-Cena/Joshua-Todolist%20with%20vue) 和 [Math editor](https://github.com/Josh-Cena/Web-math-editor)，而它们都是用 Vue 做的。如果整个网站都是基于 Vue 的，我就可以把它们轻松作为模块导入。
2. 那时候，我正好在学习 Vue-CLI，而建造个人网站就成为了我动手操作的最好机会。
3. 我享受对页面设计的高控制度，精细到每个组件放在哪里，大小多少。

但问题也很快出现了。列举几个：

1. Vue 对纯静态内容来说不够理想。它不开箱即用地支持 Markdown。就为了搭建个简单的博客单元，我就得把每篇文章编译成 HTML 组件，再把它们一个个导入——这其中又产生了不少垃圾代码。
2. 我没法搭建自动部署。CI 总是失败，而[官方文档](https://cli.vuejs.org/guide/deployment.html#platform-guides)也没帮多少忙，因为我用的 CI/CD 应用是 CircleCI。**这不是 Vue 的问题，是我的问题。**我只是希望有个模板，我可以直接抄来用，可惜对于 Vue 来说这不存在。
3. 我在用户界面设计上经验不足。硬编码的 CSS 在电脑屏幕上看起来很好，但到手机屏幕上就乱套了。而且，Vuetify 这个 UI 框架用起来实在是太深奥了。

总地来说，我希望有个工具，可以用 30 分钟做点*什么*出来，而不是用 30 天把*什么*都做出来。Docusaurus 在这方面表现不错，可以实现敏捷开发。

我已经搭过两个 Docusaurus 应用了：我们的[信息化社](https://computerization.io)的主页，以及[Baterock 服务器](https://baterock-minecraft.github.io)的主页。它们的技术栈一模一样，所以的确有我可以即刻搬来用的模式。

也许我不该把 Vue 和 Docusaurus 相比较，就像你不会把刀和叉相比，但我只是想给我迁移到 Docusaurus 找几个理由。它可以直接上传 Markdown 文件，也有可以用来插入其他 React 组件的 React API。然而，我的确得从头学 React，因为我一直用的是 Vue，而 Vue 和 React 之间的巨大差异也值得让我再写篇文章。（而那可能是个更值得引战的题目。在这场圣战中，我还是站在 Vue 的一边。）

我还是不知道 Docusaurus 是不是搭建个人网页最好的工具（比如我认识的几个人都用 WordPress），但我还是决定用我熟悉的工具。Docusaurus 最初的目的其实是为了给开源项目存储文档，所以才叫 _"Doc"_-usaurus。但它用来存储文章和博客看起来也不错。

## 搭建应用

我花了 800 字讲些有的没的。开始进入正题。要初始化一个 Docusaurus 项目，只需要：

```bash
$ npx @docusaurus/init@latest init personal-page classic
$ yarn install
$ yarn start
```

然后接下来就有很多个性化配置要做。Docusaurus 的占位内容散落在各处，要把它们都抓出来会花点时间。[这个提交记录](https://github.com/Josh-Cena/Personal-page/commit/a5f2566068a5f915b75b39f8aabfe139f58125ef)包括了要做的大部分工作。亦可以用这个检查表：

1. 把所有的`/docs`和`/blogs`下的文件移除，再添加一些真的东西。按照需求修改`/sidebars.js`。
2. 给网站选择一个主题色。我用了`#39cac4`，在[简介](/CV)中给出了原因。你可以用[这个工具](https://v2.docusaurus.io/docs/styling-layout#styling-your-site-with-infima)生成各种明暗色调，再把它们贴进`/src/css/custom.css`。
3. 给网站画个 logo。大多数人可能会用 GitHub 头像，或者放张照片，但我真的画了个 logo，*然后*它变成了我的新 GitHub 头像。如果你想，你也可以重画一遍首页上的“特色”图片。
4. 逐行浏览`/docusaurus.config.js`，做必要的改动。
5. 逐行浏览`/src/pages/index.js`，做必要的改动。
6. 要启用 TypeScript 支持，在命令行运行`yarn add @docusaurus/module-type-aliases`，然后把下列文件添加到根目录：

```typescript title="types.d.ts"
/// <reference types="@docusaurus/module-type-aliases" />
```

7. $\text{\KaTeX}$对我来说**必不可少**。可以这么安装它：

```bash
$ yarn add rehype-katex
$ yarn add remark-math@3.0.1
```

然后添加配置内容：

```jsx title="/docusaurus.config.js" {1-2,9-33,38-46}
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  title: 'Joshua Chen',

  ...

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
}
```

我从这里获得的灵感：https://docs.theochu.com/docusaurus/latex/。这可能不是最优雅的实现方法，但它能行。遗憾的是，我到现在也不能正确导入 `mhchem`，所以 `\ce{}` 还是不能工作。

## 部署

下一步，我要设置 CI/CD。有现成的 CircleCI [配置文件](https://github.com/Josh-Cena/Personal-page/blob/master/.circleci/config.yml)可用。唯一的修改就是 git 密码以及 `deploy-gh-pages` 里的 `environment` 环境变量。在[这里](https://github.com/settings/tokens)生成一个 Personal access token，只给它仓库控制权限，再把它贴进 CircleCI project settings > Environment Variables。然后就做好了。

---

现在我们的网站就已经填了不少内容了。下一步就是把 `/docs/` 和 `/blog/` 文件夹塞满，再用 React 多写几个页面。在未来的博文中，我计划讨论：

- 用 Bash 脚本自动化大规模文件处理；
- TypeScript vs JavaScript；
- React 组件 vs Vue 组件。

每个话题听起来都野心勃勃，可以以此写一整篇史诗。我会尝试把它们变得简练干脆的。
