(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{165:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(r),b=o,f=h["".concat(i,".").concat(b)]||h[b]||p[b]||a;return r?n.a.createElement(f,l(l({ref:t},s),{},{components:r})):n.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Pic",(function(){return s})),r.d(t,"default",(function(){return h}));var o=r(3),n=r(7),a=(r(0),r(165)),i={title:"Choosing a color palette",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["design","personal page"]},l={permalink:"/blog/2021/03/15/color",source:"@site/blog/2021-3-15-color.md",title:"Choosing a color palette",description:"{children}",date:"2021-03-15T00:00:00.000Z",formattedDate:"March 15, 2021",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"personal page",permalink:"/blog/tags/personal-page"}],readingTime:1.85,truncated:!0,prevItem:{title:"Running a Laravel app",permalink:"/blog/2021/03/25/laravel"},nextItem:{title:"Automating bulk file processing",permalink:"/blog/2021/03/12/bash"}},c=[],s=function(e){var t=e.children,r=e.src;return Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:r}),Object(a.b)("p",{style:{color:"gray",fontSize:"small"}},t))},u={toc:c,Pic:s};function h(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Choosing a color palette is no easy task\u2014especially if you have already chosen your favorite color as the theme color."),Object(a.b)("p",null,"Take a look at this picture:"),Object(a.b)(s,{src:"/img/frontpage/feature1-original.svg",mdxType:"Pic"},"(If you are in dark mode, you'd better turn it off briefly.)"),Object(a.b)("p",null,"This is the feature picture on the ",Object(a.b)("a",{href:"/"},"front page"),". Each logo looks good by itself; the problem, though, is that they don't fit together. Consider the fact that there are four shades of red, three shades of yellow, and a whole range of blue. Plus, some logos are shaded (PHP and the three shields), while others are flat. The result is a hotchpotch of different designs and styles with no unified theme."),Object(a.b)("p",null,"Putting it into a bigger context, one realize that the entire website is built with the theme color ",Object(a.b)("span",{style:{backgroundColor:"#39cac4",padding:"2pt",borderRadius:"4pt",color:"black"}},"turquoise"),", which is also used in the other feature pictures. However, we observe zero use of this color in the collage. That makes it inconsistent with the page as a whole."),Object(a.b)("p",null,"The solution, therefore, is to re-design the picture and fine-tune each color. I hypothesize that the most harmonic color palette should be one that has colors of uniform saturation and value on the HSV scale (a.k.a. equidistant to the center on the color wheel); hence I picked 12 colors evenly distributed on the circle."),Object(a.b)(s,{src:"/img/blog/2021-3-15/Color.svg",mdxType:"Pic"}),Object(a.b)("p",null,"There is only one painful thing: the purple color that PHP uses has a saturation too low to be approximated with any of the colors on that circle. Plus, the dark green in Vue also has a value too small."),Object(a.b)("p",null,"For the purple color, we substituted it with blue (sorry to PHP if they want it original!); for the dark green, we used the same hue as the light green, but adjusted the value according to the original color."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:"/img/frontpage/feature1-original.svg",style:{margin:"-30px",maxWidth:"400px"}}),Object(a.b)("img",{src:"/img/frontpage/feature1.svg",style:{margin:"-30px",maxWidth:"400px"}})),Object(a.b)("p",null,"If you ever switched to dark mode, you will also notice how I've hollowed out the white parts of every logo to achieve some level of consistency."))}h.isMDXComponent=!0}}]);