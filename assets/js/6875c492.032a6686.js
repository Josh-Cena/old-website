"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[8610],{7211:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(6742),s="tag_1Okp",m="tagRegular_3MiF",o="tagWithCount_1HU1";var i=function(e){var t,a=e.permalink,i=e.name,c=e.count;return r.createElement(n.default,{href:a,className:(0,l.Z)(s,(t={},t[m]=!c,t[o]=c,t))},i,c&&r.createElement("span",null,c))}},7682:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(4973),s=a(7211),m="tags_2ga9",o="tag_11ep";function i(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(s.Z,{name:t,permalink:a}))}))))}},9594:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),m=a(6742),o=a(4996),i=a(941),c=a(8058),g=a(1217),u="image_1yU8";var d=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(m.default,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:u,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.default,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},p="authorCol_1R69";function h(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",p),key:t},r.createElement(d,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var E=a(7682),f="blogPostTitle_nmLu",v="smallTitle_sT5g",b="blogPostData_3WzT",_="blogPostDetailsFull_3bEF",w="blogCard_fFNZ",Z="cardImg_31Ee",N="cardContent_3Zzw";var P=function(e){var t,a=(t=(0,i.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),u=e.children,d=e.frontMatter,p=e.metadata,P=e.truncated,k=e.assets,T=e.isBlogPostPage,M=void 0!==T&&T,y=p.date,C=p.formattedDate,L=p.permalink,U=p.tags,z=p.readingTime,F=p.title,x=p.authors,R=d.image,B=d.keywords,H=(0,o.C)().withBaseUrl;function I(){var e,t=M?"h1":"h2";return r.createElement("header",null,r.createElement(t,{className:(0,l.Z)(f,(e={},e[v]=!M,e)),itemProp:"headline"},M?F:r.createElement(m.default,{to:L},F)),r.createElement("div",{className:(0,l.Z)(b,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},C),z&&r.createElement(r.Fragment,null," \xb7 ",a(z))),M&&r.createElement(h,{authors:x,assets:k}))}return M?r.createElement(r.Fragment,null,r.createElement(g.Z,{keywords:B,image:R}),r.createElement("article",{itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},I(),R&&r.createElement("meta",{itemProp:"image",content:H(R,{absolute:!0})}),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},u)),(U.length>0||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",_)},U.length>0&&r.createElement("div",{className:"col"},r.createElement(E.Z,{tags:U}))))):r.createElement("div",{className:(0,l.Z)("col col--4",w),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement(g.Z,{keywords:B,image:R}),R&&r.createElement("img",{itemProp:"image",className:Z,src:R}),r.createElement("div",{className:N},I(),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},u),P&&r.createElement(m.default,{to:p.permalink,"aria-label":"Read more about "+F},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),U.length>0&&r.createElement("div",{className:"col col--9 margin-top--md"},r.createElement(E.Z,{tags:U}))))}},9745:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),l=a(6742),n=a(6698),s=a(9594),m=a(4973),o=a(941),i="CardContainer_1Z5U",c="wrapper_z9Vn";var g=function(e){var t,a=e.metadata,g=e.items,u=a.allTagsPath,d=a.name,p=a.count,h=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:d});return r.createElement(n.Z,{title:E,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("header",{className:"text--center margin-top--lg margin-bottom--xs"},r.createElement("h1",null,E),r.createElement(l.default,{href:u},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement("main",{className:c},r.createElement("div",{className:i},g.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))}},2086:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),l=a(3366),n=a(7294),s=["width","height"];function m(e){var t=e.width,a=void 0===t?20:t,m=e.height,o=void 0===m?20:m,i=(0,l.Z)(e,s);return n.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:a,height:o,viewBox:"0 0 24 24",fill:"#000000","aria-hidden":!0},i),n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}}}]);