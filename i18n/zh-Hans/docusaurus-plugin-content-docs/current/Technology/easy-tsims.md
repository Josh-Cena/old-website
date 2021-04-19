---
id: easy-tsims
title: Introducing "Easy-TSIMS"
---

export const Pic = ({children, src}) => (
<div style={{textAlign: 'center'}}>
<img src={src} />
<p style={{color: 'gray', fontSize: 'small'}}>{children}</p>
</div>);

> 首次发布于 2021 年 1 月 22 日
>
> 原文链接：https://mp.weixin.qq.com/s/y--UoBa6jJjQJwMl0jpn4g

我从去年就开始研究我们学校的信息平台 (TSIMS) 了。比如这篇文章中所写的。

[脚本爬取数据の初体验](../Technology/scripting)

很不幸，TSIMS 虽然还算可靠，但实在是太<span style={{color: 'orange'}}>反人类</span>了……更不幸的是，尽管我们社团常常向学校表达帮忙维护 TSIMS 的意愿，但学校从未有反馈。

每到学期末，同学们就会有各种各样对 TSIMS 的奇怪需求。这些需求都可以通过一些简单的脚本或者审查元素修改实现，但如果缺乏相关知识，还是难以操作。因此，我决定用 chrome 插件的方式集成这些功能，让 TSIMS 的使用更加人性化。Easy TSIMS 应运而生，Chrome, Edge, QQ 等 chromium 内核浏览器的用户都可以使用。

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiaqkcjqa8v3oTdqJXYbdqVZFJa3cn2NcEe9UD8UW7QK7ibBalMUReM7uQ.png"></Pic>

:::note TL; DR
此插件的功能包括：

✔️ 显示隐藏的页面入口；  
✔️ 根据页面内容修改标签名字；  
✔️ 更人性化的 CAS 活动记录填写界面；  
✔️ （奇怪的）站名修改

目前，你可以在 https://github.com/Josh-Cena/Easy-TSIMS 下载这个插件和它的源代码，点击 "↓ Code" > "Download ZIP" 即可。下载后，你既可以添加封装好的 `.crx` 文件，也可以添加整个 `extension` 文件夹。至于在 chrome webstore 上线，则可能要等到项目做足准备之后。
:::

接下来，大概讲讲插件的开发过程和功能内容。

激发我做这个插件的事情，是系统会在结业式前，隐藏“成长报告”页面的入口，就像这样：

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiafuUicksft9C2AiaUOFKhibT4cu7ux4aiczq8kmRn8h3jjFqk5e0ib1oRnBg.png"></Pic>

但是，此时实际上在后端已经上传了数据，比如学期总评、班主任评语等，因此只要能访问页面，就能看到这些信息。而且，就像 TSIMS 的许多狗血操作一样，这个入口隐藏是通过设置 `style="display: none;"` 实现的……

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMia4ZShagKeZr6XFA3K1ehZ27Z6jBFRAmpTbMcx0ibrP5g0tNNtwTxn1Cg.png"></Pic>

只要能够打开浏览器开发者模式，找到这个元素，把 `style` 元素删掉，就结束了。但就这么一个操作，也有不少人需要别人帮忙。因此，这成为了我的插件第一个实现的功能。

实现的方法是一个 content script。它会在加载页面时，搜索导航栏中所有包含 `style` 的元素，然后把 `style` 修改为“浅灰色”。启用插件后，效果如下：

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiamBqmkQMs0xw9DDK4Naz9LQIf4TXZHcnRRrAdibh46U5ALdibCqANTM8A.png">注意到 TSIMS 站名也发生了亿点点变化。那是我奇怪的恶趣味。</Pic>

当然，这里 90%的被隐藏入口都是本就没用的页面，它们对应的后端接口并未开启，所以即使进去，也不能做什么有意义的操作。

这个功能有点简单了。所以我又决定给一些页面增加功能。首先引起我注意的是“活动记录”页面。每个期末，同学们都会在上面填写本学期的社团活动记录。它长这个样子：

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiax9H4XwT2TzaUSUbuA7moSDkJbQk5UT9P4KV8ZaFbmBBknbrR6b2oicQ.png"></Pic>

它反人类的地方主要有三：

1. “活动描述”栏只显示前 15 个字符，而且这是在前端渲染页面的脚本中写死的，因此不能通过审查 HTML 元素获得完整内容；
2. 每次提交后输入框被清空，需要重新填写不少重复的信息（虽然理论上也没理由批量填写，毕竟复制粘贴记录是非常不好的行为。但是你懂的，这样的需求总是存在的）
3. 填写一条记录后，无论成功还是失败，保存按钮都会被禁用，只能通过在“活动组”菜单中修改选项再选回来来重新启用，否则不能继续填写下一条记录。

为了改正这三个问题，只需要在加载到这一页面时覆写业务逻辑就好了。这时，遇到了一个问题：这个网站通过 AJAX 动态加载页面内容，而不是静态的页面跳转。因此，我不能通过 url 判断页面内容，也不能用常用的事件触发机制。

此时，如果想要知道是否发生了页面跳转，有三种解决方案：第一种，拦截 HTTP 请求，判断发来的是不是完整的页面；第二种，每次当页面发生变化时，判断页面标题是否发生了变化；第三种，直接在每个页面入口链接处注册一个点击事件监听器。

前两种方案我都有认真考虑过。Chrome 的网络请求 API 有点复杂，而且一般只用它操作请求头信息而不是内容，因此第一种方案没有实施。像爬虫一样监测页面变化的话，经常会出奇怪的 bug，导致判断失败，而且写出的代码非常琐碎，因此最终版本也没有采用它。最终版本中，在处理导航栏菜单时，同时为每个链接注册了一个监听器，点击之后便认为发生了页面跳转。（其实会有重复点击同一元素，被认为是多次跳转的问题，但目前不会产生严重后果，所以暂时不会修复）

既然已经能知道当前页面的名字，我决定同时解决一下标签页标题的问题。因为页面是 ajaxify 的，实际上一直停在 `home.html` 页面，所以标签页的标题也始终叫 TSIMS | homepage，现在，可以在页面跳转时修改标题。

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiaN4sYk8qTu6tkO1s1CX1GykQbj1J8vkJuk2uxibibfJdCzjUicqhum0meg.png"></Pic>

这样，就要符合直觉多了。

如果发现页面跳转到活动记录页，那么就需要重写业务逻辑。问题是，由于插件和网页运行在不同的沙盒中，所以无法访问对方的变量和函数，不能直接覆写。此时，又有两种思路：第一种，重新注册每个按钮的事件处理函数；第二种，重载页面函数，然后把代码注入到页面中。

第一种方案遇到的问题是，由于从点击链接，插件开始处理页面跳转事件到页面加载完毕之间有一段时间差，当插件开始重写逻辑时，按钮元素不一定已经被加载。是否能正确运行，完全取决于网速。因此，它最终被放弃了。

要重写的脚本文件是 http://101.230.1.163/ajax/cas_add_record_info.js，更具体地说，我们把目光放在了负责“记录列表”渲染的 `addInfo` 函数上。（顺便吐槽，这个代码写的是真的差——各种字符串拼接和 `var` 的作用域外调用，看得我几乎脑溢血……我把整个文件重写了一遍，从 280 行缩减到 150 行）

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiavRLqfbCyAAsG799N3X8x4JgnpEGicic1s4WAgRgZQI2ZWuNBQotty7bg.png">原本的 野 兽 代 码</Pic>

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiayDMdicmSXLZen0eKGU1pekibzibBvtjAn7GBzLOPcjLByibOIrUJd4qFLQ.png">重定义的函数，仍然非常野兽</Pic>

完成之后，把这个文件声明成网页可以访问的 web accessible resource，然后注入到页面中原脚本的后面即可。

现在，每条记录都可以完整显示，也可以点击收起。点击“Reuse”后，可以直接将除日期外的所有信息填到对应的输入框中。将描述稍作修改后，就可以再次提交了。

<Pic src="/zh-Hans/img/./docs/Technology/easy-tsims/JGibibkelET68tpqgst86FWqsQzlXcwGMiaPXia8446Kd1rtrqdSGVsVrmDNzHTusgBHqSibD7Twv1eZoAEsJyibQdFw.png"></Pic>

另外，现在添加活动记录后，提交按钮不会被禁用。可以直接填写下一篇记录。

这就是该插件目前的功能。下一步将会继续完善 CAS 记录的相关功能，也会采纳其他改进建议。如果你有任何想法，欢迎在 GitHub repo: https://github.com/Josh-Cena/Easy-TSIMS 下提 issue 或开 pull request，也可以给作者发邮件，或通过其他方式联系我。

最后，感谢<span style={{color: 'orange'}}>全能的 Lynn</span>给插件画了个 logo，也感谢某个<span style={{color: 'orange'}}>无氧呼吸产物</span>（各种意义上）给我提供了 To Suffer In My School 的创意。

## 声明

该插件是离线工作的，不会收集任何个人信息，也不会修改任何数据的上传或收取。作者虽最大程度保证插件的稳定性和安全性，但仍不承担任何使用中带来的后果。
