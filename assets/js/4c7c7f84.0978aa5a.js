"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[3383],{6165:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(3366),a=n(7294),l=n(6010),i=n(261),c=n(6742),o="sidebar_2ahu",s="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",h=n(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(c.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var b=n(571),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,n=e.toc,c=e.children,o=(0,r.Z)(e,p),s=t&&t.items.length>0;return a.createElement(i.Z,o,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(v,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},a.createElement(b.Z,{toc:n})))))}},571:function(e,t,n){n.d(t,{r:function(){return f},Z:function(){return h}});var r=n(7294),a=n(6010),l=n(1773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return i(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function o(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,r.useRef)(void 0),n=o();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=c({anchorTopOffset:n.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},u="tableOfContents_35-E",m="table-of-contents__link",d={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return s(d),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement(f,{toc:t}))}},7114:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(7294)),l=r(n(6165)),i=r(n(6742));t.default=function(e){var t=e.metadata,n=e.items,r=e.sidebar,c=t.blogTitle,o=t.blogDescription,s=t.totalCount,u=t.time;return a.default.createElement(l.default,{title:c,description:o,searchMetadatas:{tag:"blog_posts_list"},sidebar:r},a.default.createElement("h1",null,s," post",s>1?"s":""," written ",u),a.default.createElement("ul",null,n.reverse().map((function(e){var t=e.content.metadata,n=t.formattedDate,r=t.permalink,l=t.title;return a.default.createElement("li",null,n," \u2014 ",a.default.createElement(i.default,{to:r},l))}))))}},2086:function(e,t,n){var r=n(7462),a=n(3366),l=n(7294),i=["width","height"];t.Z=function(e){var t=e.width,n=void 0===t?20:t,c=e.height,o=void 0===c?20:c,s=(0,a.Z)(e,i);return l.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:o,viewBox:"0 0 24 24",fill:"#000000","aria-hidden":!0},s),l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}}}]);