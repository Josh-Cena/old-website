(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[8610],{9788:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),m=a(6742),i=a(3018),o=a(4356),c=a(1217),u="blogPostTitle_nmLu",d="smallTitle_sT5g",g="blogPostData_3WzT",h="blogPostDetailsFull_3bEF",p="blogCard_fFNZ",E="cardContent_3Zzw",f="tag_3uC6";var v=function(e){var t,a=(t=(0,i.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),v=e.children,b=e.frontMatter,_=e.metadata,w=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,T=_.formattedDate,M=_.permalink,L=_.tags,P=_.readingTime,C=_.title,y=b.author,z=b.image,x=b.keywords,F=b.author_url||b.authorURL,U=b.author_title||b.authorTitle,V=b.author_image_url||b.authorImageURL,H=function(){var e,t=Z?"h1":"h2";return l.createElement("header",null,l.createElement(t,{className:(0,r.Z)(u,(e={},e[d]=!Z,e))},Z?C:l.createElement(m.default,{to:M},C)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k},T),P&&l.createElement(l.Fragment,null," \xb7 ",a(P))),Z&&l.createElement("div",{className:"avatar margin-vert--md"},V&&l.createElement(m.default,{className:"avatar__photo-link avatar__photo",href:F},l.createElement("img",{src:V,alt:y})),l.createElement("div",{className:"avatar__intro"},y&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(m.default,{href:F},y)),l.createElement("small",{className:"avatar__subtitle"},U)))))};return Z?l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:x,image:z}),l.createElement("article",null,H(),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},v)),(L.length>0||w)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",h)},L.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return l.createElement(m.default,{key:a,className:"margin-horiz--sm",to:a},t)})))))):l.createElement("div",{className:(0,r.Z)("col col--4",p)},l.createElement(c.Z,{keywords:x,image:z}),l.createElement("div",{className:E},H(),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},v),w&&l.createElement(m.default,{to:_.permalink,"aria-label":"Read more about "+C},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),L.length>0&&l.createElement("div",{className:"margin-top--md"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return l.createElement(m.default,{key:a,className:(0,r.Z)("pills__item",f),to:a},t)})))))}},9745:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var l=a(7294),r=a(6742),n=a(261),s=a(9788),m=a(4973),i=a(3018),o="CardContainer_1Z5U",c="wrapper_z9Vn";var u=function(e){var t,a=e.metadata,u=e.items,d=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return l.createElement(n.Z,{title:E,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(r.default,{href:d},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("main",{className:c},l.createElement("div",{className:o},u.map((function(e){var t=e.content;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))))}},2086:function(e,t,a){"use strict";var l=a(2122),r=a(9756),n=a(7294);t.Z=function(e){var t=e.width,a=void 0===t?20:t,s=e.height,m=void 0===s?20:s,i=(0,r.Z)(e,["width","height"]);return n.createElement("svg",(0,l.Z)({xmlns:"http://www.w3.org/2000/svg",width:a,height:m,viewBox:"0 0 24 24",fill:"#000000","aria-hidden":!0},i),n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}}}]);