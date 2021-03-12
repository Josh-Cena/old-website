---
title: Building a docusaurus app
author: Joshua Chen
author_url: https://github.com/Josh-Cena
author_image_url: https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4
tags: [front end, personal page]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> I switched to Docusaurus in March as framework for this website. This blog summarizes my experience.

<!-- truncate -->

## Why Docusaurus?

The dark period when this website was built with Vue is crucified for eternity in the [git history of the GH pages repo](https://github.com/Josh-Cena/Personal-page/tree/202beb7770e17fbc6ab30bce4d928bf678ecc5e8).

<img src={useBaseUrl("img/blog/2021-3-9/page.jpg")}></img>

Well, I'm not condemning Vue—it is powerful. Powerful, indeed, since you can virtually build anything off it. The school club administration system that I'm currently developing uses Vue for front-end, for example. The blame is probably on me, that I don't have much time to spare to build everything from scratch.

I initially chose Vue for three reasons, and had I begun with React, I probably would have the same arguments:

1. I planned to showcase several of my earlier works, including [Todo list](https://github.com/Computerization/New-member-practice-commit/tree/master/2019/Josh-Cena/Joshua-Todolist%20with%20vue) and [Math editor](https://github.com/Josh-Cena/Web-math-editor), which are both built with Vue. I can easily import them as modules if the entire website is Vue-based.
2. I was just learning Vue-CLI at the time, and building the personal website becomes the perfect opportunity for some hands-on experience.
3. I enjoyed have high degree of control over the page design, like where to put each component and sizing.

But problems soon emerged. To name a few:

1. Vue is simply not the best for purely static contents. It doesn't support Markdown out-of-the-box. To build the simple blog module, I had to build each blog post as HTML components and import them one-by-one—a lot of messy code created in this process.
2. I failed on auto deployment. CI constantly failed, and the [official documentation](https://cli.vuejs.org/guide/deployment.html#platform-guides) didn't help much with handling CircleCI, the CI/CD app I'm using. **This is not Vue's problem, but mine.** I just want some paradigm that I can directly copy from, which unfortunately was not available.
3. I don't have much experience with UI designs. The hard-coded CSS that looks good on a computer screen becomes messed up on a mobile screen. Vuetify was too profound to work with.

In short, I want a tool that I can spend 30 minutes building *something*, not spending 30 days building *everything*. Docusaurus is good in this respect for its rapid development.

Maybe I shouldn't have compared Vue with Docusaurus, just like one won't compare a knife to a fork, but I was simply illustrating the point of why I eventually migrated to Docusaurus. It supported hosting Markdown documents, and also exposed React APIs to build other components. I had to learn React as well since I've always worked with Vue, and I may write another post on Vue vs React later on. (And that might be a holy war worth fighting. In this war I still stand with Vue.)

I've already built two docusaurus apps. The homepage for [our Computerization club](https://computerization.io), and the homepage for the [Baterock server](https://baterock-minecraft.github.io). They had the exact same tech stack, so there indeed exists a paradigm handy.

I still don't know if Docusaurus is the best tool to use for a personal webpage (for example, several people I know use Wordpress), but I decided to stick to what I'm familiar with. The primary purpose for Docusaurus is to host documentation for open-source projects, hence the word *"Doc"*-usaurus. But it looks equally good for hosting articles and blog posts.

## Building the app

I spent 500 words talking about nonsense. Onto some tech stuff. Initiating a Docusaurus project is just:

```bash
$ npx @docusaurus/init@latest init personal-page classic
$ yarn install
$ yarn start
```

And then there's lots of customization to be made. Docusaurus has dummy contents scattered everywhere, and it will take some time hunting them all down. Take a look at [this commit](https://github.com/Josh-Cena/Personal-page/commit/a5f2566068a5f915b75b39f8aabfe139f58125ef) for most of the work that needs to be done. A short checklist:

- Remove all pre-existing docs and blogs and add some real contents. Modify `/sidebars.js` as needed.
- Select a theme color for the page. I used `#39cac4`, reason given in the <a href={useBaseUrl("CV/")}>profile</a>. Consult [this tool](https://v2.docusaurus.io/docs/styling-layout#styling-your-site-with-infima) for different shades, and paste them in `/src/css/custom.css`.
- Draw a logo for the webpage. Most might use the GitHub avatar or a photo, but I did draw a logo which then became my new GitHub avatar. If you wish, re-draw the feature images on the front page as well.
- Browse through `/docusaurus.config.js` line-by-line and make necessary modifications.
- Browse through `/src/pages/index.js` line-by-line and make necessary modifications.
- $\text{\KaTeX}$ is a **must** for me. Add it by running

```bash
$ yarn add rehype-katex
$ yarn add remark-math@3.0.1
```

and adding

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

I got the inspiration from https://docs.theochu.com/docusaurus/latex/. This may not be the most elegant way to do it, but it works. Sadly, until now I've been unable to incorporate `mhchem` correctly, so `\ce{}` still fails.

## Deployment

The next step I did was setting up CI/CD. The CircleCI [configuration file](https://github.com/Josh-Cena/Personal-page/blob/master/.circleci/config.yml) is readily available. The only changes needed to be made are the git credentials and `environment` variables in `deploy-gh-pages`. Generate a personal access token [here](https://github.com/settings/tokens). Give it repo controls only and paste it into the CircleCI project settings > Environment Variables. And that's it.

---

And that's it—now I get a webpage already loaded with contents. The next step is to write some components. In the following posts, I plan to discuss:

- Automating bulk file processing with bash scripts;
- TypeScript vs JavaScript;
- React components vs Vue components.

Every topic sounds very ambitious that I can write an epic on. I will try to make everything succint and to the point.
