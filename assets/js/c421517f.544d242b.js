(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[5468],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=a(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var a=2;a<l;a++)o[a]=n[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),i=/{\w+}/g,l="{}";function o(e,t){var n=[],o=e.replace(i,(function(e){var i=e.substr(1,e.length-2),o=null==t?void 0:t[i];if(void 0!==o){var c=r.isValidElement(o)?o:String(o);return n.push(c),l}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?o.split(l).reduce((function(e,t,r){var i;return e.concat(t).concat(null!==(i=n[r])&&void 0!==i?i:"")}),""):o.split(l).reduce((function(e,t,i){return[].concat(e,[r.createElement(r.Fragment,{key:i},t,n[i])])}),[])}function c(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return o(t,n)}var u=n(4644);function a(e){var t,n=e.id,r=e.message;return null!==(t=u[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return o(null!==(n=a({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,i=e.id,l=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var o=null!==(t=a({message:n,id:i}))&&void 0!==t?t:n;return r.createElement(c,{values:l},o)}},8322:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),i=n(4973);function l(e){var t=e.frontMatter,n=t.date,l=t.link;return n||l?r.createElement("div",{className:"alert alert--info margin-bottom--md",role:"contentinfo"},n&&r.createElement(i.Z,{id:"docMetadataBanner.firstPublished",values:{date:r.createElement("b",null,n.toLocaleDateString("zh-Hans"))}},"First published on {date}."),l&&r.createElement("a",{href:l},r.createElement(i.Z,{id:"docMetadataBanner.sourceLink"},"Source link"))):null}},796:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function i(e){var t=e.children,n=e.src;return r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",{src:n}),r.createElement("p",{style:{color:"gray",fontSize:"small"}},t))}},9633:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),o=n(796),c=n(8322),u={id:"sun",title:"\u592a\u9633\uff01\u592a\u9633\uff01",sidebar_label:"The Sun! The Sun!",date:new Date("2020-11-02T00:00:00.000Z"),link:"https://mp.weixin.qq.com/s/nQtihUgFgDHWKXjR3A01pg"},a=void 0,s={unversionedId:"Stories/sun",id:"Stories/sun",isDocsHomePage:!1,title:"\u592a\u9633\uff01\u592a\u9633\uff01",description:"\u6211\u8bf4\u8fd9\u662f\u4e00\u7bc7\u6e38\u8bb0\uff0c\u4f60\u4fe1\u5417\uff1f",source:"@site/docs/Stories/3-sun.md",sourceDirName:"Stories",slug:"/Stories/sun",permalink:"/docs/Stories/sun",version:"current",sidebarPosition:3,frontMatter:{id:"sun",title:"\u592a\u9633\uff01\u592a\u9633\uff01",sidebar_label:"The Sun! The Sun!",date:"2020-11-02T00:00:00.000Z",link:"https://mp.weixin.qq.com/s/nQtihUgFgDHWKXjR3A01pg"},sidebar:"docs",previous:{title:"A man decides to die",permalink:"/docs/Stories/suicide"},next:{title:"About wine, dark nights, and a pen",permalink:"/docs/Stories/wine"}},p=[{value:"\u540e\u8bb0",id:"\u540e\u8bb0",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c.Z,{frontMatter:u,mdxType:"DocMetadataBanner"}),(0,l.kt)("p",null,"\u6211\u8bf4\u8fd9\u662f\u4e00\u7bc7\u6e38\u8bb0\uff0c\u4f60\u4fe1\u5417\uff1f"),(0,l.kt)("p",null,"\u6240\u6709\u914d\u56fe\u6765\u81ea\u521a\u521a\u7ed3\u675f\u7684\u897f\u660c\u4e4b\u65c5\uff0c\u5149\u7ebf/\u6784\u56fe\u6709\u5f85\u63d0\u5347\uff0c\u8bf7\u539f\u8c05\u3002"),(0,l.kt)("p",null,"\u914d\u5408\u8fd9\u9996\u6b4c\u66f4\u597d \ud83d\udc47"),(0,l.kt)("p",null,"Big Bad World\nKodaline - In a Perfect World ","[","Deluxe","]"),(0,l.kt)("p",null,"\u9648\u610f\u975e\u4ece\u65c5\u9986\u7684\u5e8a\u4e0a\u9192\u6765\u3002\u4ed6\u7ffb\u8eab\u4e0b\u5e8a\uff0c\u62c9\u5f00\u7a97\u5e18\uff0c\u57ce\u5e02\u5c3d\u5934\u5c42\u5c42\u53e0\u53e0\u7684\u9752\u5c71\u649e\u8fdb\u4e86\u4ed6\u7684\u623f\u95f4\u3002\u5e73\u9759\u7684\u5c0f\u57ce\uff0c\u5404\u5f0f\u5404\u6837\u7684\u5e73\u623f\uff0c\u88f9\u631f\u7740\u6c99\u571f\u7684\u5c0f\u6cb3\u4ece\u7a97\u53e3\u6d41\u8fc7\uff0c\u4e24\u4e09\u8f86\u8f66\u7a7f\u68ad\u4e8e\u8857\u9053\u4e2d\uff0c\u7a7a\u6c14\u4e2d\u5f25\u6f2b\u7740\u751f\u6d3b\u7684\u6c14\u606f\u3002\u6ca1\u6709\u592a\u9633\u2014\u2014\u623f\u5b50\u3001\u8f66\u3001\u6811\u3001\u884c\u4eba\uff0c\u90fd\u53d1\u7740\u6de1\u6de1\u7684\u5149\uff0c\u5929\u7a7a\u4e2d\u4e00\u7247\u6f84\u51c0\uff0c\u51e0\u7247\u767d\u4e91\u6175\u61d2\u5730\u5728\u84dd\u5929\u4e2d\u7ffb\u52a8\u7740\uff0c\u6ca1\u6709\u592a\u9633\u3002"),(0,l.kt)("p",null,"\u592a\u9633\u53bb\u54ea\u91cc\u4e86\uff1f\u4ed6\u5947\u602a\u7740\u3002\u4ed6\u6536\u62fe\u597d\u4e1c\u897f\uff0c\u628a\u53cc\u80a9\u5305\u7529\u4e0a\u80a9\u5934\uff0c\u63a8\u5f00\u4e86\u623f\u95f4\u95e8\uff0c\u95e8\u5916\u7684\u4e16\u754c\u662f\u4e24\u5ea7\u5de8\u5c71\uff0c\u4e24\u5c71\u4e4b\u95f4\uff0c\u4e00\u6761\u516c\u8def\u5ef6\u5c55\u5411\u770b\u4e0d\u89c1\u7684\u8fdc\u65b9\u3002\u4ed6\u5728\u5c71\u95f4\u516c\u8def\u4e0a\u5954\u8dd1\uff0c\u4e24\u65c1\u662f\u5c71\u5cf0\u3001\u5c71\u9e93\u3001\u5c71\u8c37\u3001\u5c71\u810a\uff0c\u5728\u6df1\u7eff\u7684\u8986\u76d6\u8fb9\u7f18\uff0c\u90fd\u9732\u7740\u8910\u7ea2\u7684\u80f4\u4f53\uff0c\u88ab\u7ec6\u7ec6\u7684\u94c1\u7f51\u7981\u9522\u4f4f\u3002"),(0,l.kt)(o.Z,{src:"/img/./docs/Stories/sun/JGibibkelET693VWk8BG4ckZiacJLE60dAbMJcNxKnYyRdOiaJ5g44UTw4Mh5SBzIgzmaG6EooyQnOwdc8Ipv12Ijg.jpeg",mdxType:"Pic"}),(0,l.kt)("p",null,"\u4ed6\u5728\u4e00\u5ea7\u6865\u4e0a\u505c\u4f4f\u4e86\u811a\u6b65\u3002\u6865\u7684\u8fd9\u4e00\u5934\u662f\u5c71\u6797\uff0c\u90a3\u4e00\u5934\u662f\u783e\u77f3\u5730\uff1b\u6865\u4e0b\uff0c\u6e4d\u6025\u7684\u767d\u6c34\u6d8c\u8fc7\uff0c\u51b2\u51fb\u7740\u6cb3\u9053\u4e2d\u592e\u7684\u51e0\u5757\u5375\u77f3\uff0c\u6e85\u8d77\u98de\u6cab\u3002\u6d41\u8fc7\u6865\u540e\uff0c\u6c34\u6d41\u53d8\u7f13\u4e86\uff0c\u9732\u51fa\u4e86\u6cb3\u5e8a\u7c97\u7c9d\u7684\u8868\u9762\uff0c\u6cb3\u6d41\u50cf\u767d\u86c7\u822c\u7a7f\u68ad\u4e8e\u77f3\u7f1d\u4e2d\uff0c\u5954\u5411\u4e0b\u6e38\u3002\u5b83\u4eec\u8981\u53bb\u54ea\u91cc\uff1f\u5b83\u4eec\u4e5f\u50cf\u6211\u4e00\u6837\uff0c\u5728\u627e\u592a\u9633\u4e48\uff1f\u9648\u610f\u975e\u95ee\u81ea\u5df1\u3002"),(0,l.kt)(o.Z,{src:"/img/./docs/Stories/sun/JGibibkelET693VWk8BG4ckZiacJLE60dAbpbn5kpCA5f4ULkR361rUdrH3D31I0icVfjc55QRokmOdU89uicic9wqHw.jpeg",mdxType:"Pic"}),(0,l.kt)("p",null,"\u4ed6\u7ee7\u7eed\u8dcb\u6d89\u5411\u524d\u3002\u783e\u77f3\u5730\u5f88\u784c\u811a\uff0c\u6bcf\u4e00\u6b65\u90fd\u4f20\u6765\u54af\u5431\u54af\u5431\u7684\u58f0\u97f3\uff0c\u8033\u8fb9\u4e00\u76f4\u662f\u6d41\u6c34\u9686\u9686\u7684\u58f0\u97f3\uff0c\u50cf\u8c37\u4e2d\u5de8\u9f99\u7684\u4f4e\u543c\u3002\u524d\u65b9\uff0c\u53c8\u6709\u4e00\u5ea7\u901a\u5411\u65b0\u7684\u5c71\u6797\u7684\u6865\u3002\u4ed6\u5728\u6865\u5934\u7684\u5c0f\u6751\u5e84\u91cc\u627e\u5230\u4e86\u4e00\u5bb6\u5e97\uff0c\u4ece\u90a3\u4e2a\u70ed\u60c5\u7684\u5f5d\u65cf\u5976\u5976\u624b\u4e2d\u4e70\u4e0b\u4e86\u4e24\u74f6\u996e\u6599\uff0c\u585e\u8fdb\u4e86\u5305\u91cc\u3002"),(0,l.kt)("p",null,"\u6811\u6797\u91cc\u8fd8\u5e26\u7740\u6e05\u6668\u7684\u6c34\u6c7d\uff0c\u9752\u82d4\u6e7f\u6f09\u6f09\u7684\u3002\u4ed6\u4e00\u6b65\u6b65\u5730\u5411\u4e0a\u6500\u767b\u7740\u3002\u96fe\u6c14\u8d8a\u6765\u8d8a\u539a\uff0c\u900f\u7740\u4e73\u767d\u8272\u7684\u8367\u5149\u3002\u5468\u56f4\u7684\u6749\u6811\u62d4\u5730\u800c\u8d77\uff0c\u5408\u56f4\u5728\u4ed6\u5934\u9876\u3002\u6728\u677f\u94fa\u6210\u7684\u5c71\u8def\u548c\u6811\u51a0\u7ec4\u6210\u4e86\u8840\u7ba1\uff0c\u89c4\u5f8b\u5730\u8109\u52a8\u7740\uff0c\u6307\u5f15\u4ed6\u5411\u4e16\u754c\u7684\u5fc3\u810f\u524d\u8fdb\u3002"),(0,l.kt)("p",null,"\u5728\u5c71\u8170\uff0c\u4ed6\u627e\u5230\u4e86\u4e00\u6c60\u6e56\u6c34\uff0c\u6df1\u9083\u7684\u9ed1\u8272\uff0c\u5438\u6536\u7740\u6240\u6709\u7684\u5149\u7ebf\u3002\u4ed6\u4fef\u8eab\u770b\u5411\u6e56\u4e2d\u2014\u2014\u592a\u9633\u662f\u5426\u85cf\u5728\u8fd9\u9ed1\u73cd\u73e0\u7684\u5e18\u5e55\u540e\uff1f"),(0,l.kt)("p",null,"\u6e56\u6c34\u8361\u6f3e\u7740\uff0c\u85cf\u4f4f\u4e86\u7b54\u6848\u3002"),(0,l.kt)(o.Z,{src:"/img/./docs/Stories/sun/JGibibkelET693VWk8BG4ckZiacJLE60dAbVpGdmCu1QdfdDrYLYQiaIGBx9ibLaEVlZjNTJn2TlGqVPIGIibI19ibHAQ.jpeg",mdxType:"Pic"}),(0,l.kt)("p",null,"\u5149\u8292\u9010\u6e10\u9eef\u6de1\u4e86\uff0c\u4e07\u7269\u843d\u5165\u9ed1\u6697\u4e2d\u3002\u4ed6\u56db\u4e0b\u5f20\u671b\uff0c\u60f3\u8981\u627e\u5230\u4e00\u6761\u79bb\u5f00\u7684\u9053\u8def\uff0c\u4f46\u4e3e\u76ee\u7686\u662f\u5c71\u5ce6\u3002\u5bd2\u6c14\u6c81\u5165\u4ed6\u7684\u9aa8\u9ad3\uff0c\u4ed6\u88f9\u7d27\u4e86\u8eab\u4e0a\u7684\u8863\u670d\uff0c\u4f4e\u7740\u5934\uff0c\u9876\u7740\u5bd2\u98ce\u5411\u9ed1\u6697\u4e2d\u8fc8\u53bb\u3002"),(0,l.kt)("p",null,"\u6211\u7684\u592a\u9633\u5728\u54ea\u91cc\uff1f\u4ed6\u9ed8\u5ff5\u3002"),(0,l.kt)("p",null,"\u4ed6\u673a\u68b0\u5730\u8d70\u7740\uff0c\u76f4\u5230\u4e24\u811a\u5df2\u7ecf\u9ebb\u6728\u3002\u80ba\u547c\u5438\u7740\u51b0\u51b7\u7684\u7a7a\u6c14\uff0c\u706b\u8fa3\u8fa3\u5730\u75db\uff1b\u4ed6\u597d\u50cf\u770b\u89c1\u4e86\u591c\u7a7a\u4e2d\u7684\u661f\u661f\uff0c\u4f46\u7728\u7728\u773c\uff0c\u53c8\u6d88\u5931\u4e86\u3002\u4ed6\u5728\u65e0\u8fb9\u65e0\u9645\u7684\u7a7a\u95f4\u4e0e\u65f6\u95f4\u4e2d\u5b64\u72ec\u5730\u884c\u8d70\uff0c\u4e24\u817f\u4ea4\u66ff\u7740\u8fc8\u52a8\u7740\uff0c\u8fc8\u52a8\u7740\uff0c\u4ece\u4e00\u5757\u77f3\u5934\u8e0f\u4e0a\u53e6\u4e00\u5757\u77f3\u5934\uff0c\u5374\u59cb\u7ec8\u770b\u4e0d\u6e05\u9053\u8def\u3002"),(0,l.kt)("p",null,"\u4e0d\u77e5\u4e0d\u89c9\u5730\uff0c\u4ed6\u5230\u4e86\u5c71\u9876\u3002\u524d\u9762\u51fa\u73b0\u4e86\u4e00\u70b9\u706b\u5149\u2014\u2014\u9ed1\u591c\u4e2d\u4ec5\u6709\u7684\u5e0c\u671b\u3002\u4ed6\u52a0\u5feb\u4e86\u811a\u6b65\u3002\u5728\u706b\u7089\u8fb9\uff0c\u4ed6\u627e\u5230\u4e86\u4ed6\u8fc7\u53bb\u7684\u670b\u53cb\u4eec\u3002\u4ed6\u4eec\u559d\u9152\uff0c\u4ece\u5495\u549a\u5495\u549a\u7ffb\u817e\u7740\u70ed\u6c14\u7684\u9505\u91cc\u5939\u8d77\u4e00\u5757\u5757\u725b\u8089\uff0c\u5927\u53e3\u56bc\u7740\u3002\u4ed6\u4eec\u56de\u5fc6\u7740\u8fc7\u5f80\u7684\u7ecf\u5386\u2014\u2014\u90a3\u4e9b\u5973\u5b69\uff0c\u90a3\u4e9b\u72c2\u6b22\u7684\u591c\u665a\uff0c\u90a3\u4e9b\u594b\u6597\u7684\u65e5\u5b50\u3002\u9648\u610f\u975e\u548c\u90a3\u4e9b\u4eba\u4e00\u8d77\u54c8\u54c8\u5927\u7b11\uff0c\u4e3a\u4e86\u4ed6\u4eec\u66fe\u7ecf\u62e5\u6709\u7684\u9752\u6625\u3002\u5728\u706b\u7089\u8fb9\uff0c\u4ed6\u611f\u53d7\u5230\u4e86\u5bd2\u591c\u4e2d\u7684\u4e00\u70b9\u6e29\u6696\u3002\u534a\u676f\u767d\u9152\u4ece\u5185\u90e8\u707c\u70e7\u7740\u4ed6\u7684\u8eab\u4f53\u3002"),(0,l.kt)("p",null,"\u201c\u770b\uff0c\u4ec0\u4e48\u5347\u8d77\u6765\u4e86\uff1f\u201d\u6709\u4eba\u6307\u5411\u9648\u610f\u975e\u7684\u8eab\u540e\u3002\u4ed6\u4e00\u56de\u5934\uff0c\u770b\u5230\u8eab\u540e\u7684\u5929\u7a7a\u88ab\u7ea2\u5149\u7167\u4eae\u4e86\u3002\u90a3\u662f\u592a\u9633\uff0c\u662f\u592a\u9633\uff01\u4ed6\u8f6c\u5934\u98de\u5954\u5411\u524d\uff0c\u7ea2\u5149\u8d8a\u5347\u8d8a\u9ad8\uff0c\u6108\u53d1\u660e\u4eae\uff0c\u76f4\u5230\u5c71\u5d16\u5c3d\u5934\uff0c\u4e00\u4e2a\u4e73\u767d\u8272\u7684\u5c16\u5934\u4ece\u5d16\u8fb9\u5347\u8d77\uff0c\u7136\u540e\u662f\u706b\u7bad\u7bad\u8eab\uff0c\u5e26\u7740\u718a\u718a\u70c8\u7130\uff0c\u5e0c\u671b\u548c\u529b\u91cf\u3002\u4ed6\u671d\u7740\u60ac\u5d16\u8dd1\u53bb\uff0c\u811a\u4e0b\u662f\u7ea2\u571f\u5730\uff0c\u773c\u524d\u662f\u7ea2\u8272\u7684\u5149\u8292\uff0c\u9ec4\u8272\u3001\u767d\u8272\u3002\u8fd1\u4e86\uff0c\u8fd1\u4e86\uff0c\u706b\u7bad\u9ad8\u60ac\u5728\u4ed6\u7684\u5934\u9876\uff0c\u50cf\u70bd\u5929\u4f7f\u4e00\u6837\u53ec\u5524\u7740\u4ed6\u7684\u7075\u9b42\u3002"),(0,l.kt)(o.Z,{src:"/img/./docs/Stories/sun/JGibibkelET693VWk8BG4ckZiacJLE60dAbjyodpty4XcYHUDQ5dx9mcuicREVPNxOqhxgqnyicL43ulXhGobHqwM6Q.jpeg",mdxType:"Pic"}),(0,l.kt)("p",null,"\u4ed6\u7eb5\u8eab\u4e00\u8dc3\uff0c\u53f3\u624b\u4f38\u5411\u5929\u4f7f\u7ea2\u8272\u7684\u62ab\u98ce\u4e00\u89d2\u3002\u4ed6\u5728\u4e0b\u5760\u2014\u2014\u8033\u8fb9\u662f\u547c\u547c\u7684\u98ce\u58f0\uff0c\u811a\u4e0b\u662f\u4e00\u671b\u65e0\u9645\u7684\u9ed1\u6697\uff0c\u9ed1\u6697\u4e2d\u6f5c\u4f0f\u7740\u65e0\u6570\u7684\u751f\u7075\uff0c\u800c\u4ed6\u6c90\u6d74\u7740\u552f\u4e00\u7684\u5149\u3002\u4f46\u4ed6\u5728\u4e0b\u5760\u2014\u2014\u4e0d\uff0c\u4ed6\u5728\u4e0a\u5347\u3002\u4ed6\u7684\u8eab\u8eaf\u9010\u6e10\u53d8\u5f97\u8f7b\u76c8\uff0c\u60ac\u6d6e\u5728\u7a7a\u6c14\u4e2d\uff0c\u60ac\u6d6e\u5728\u5b87\u5b99\u4e2d\uff0c\u4e16\u754c\u53ea\u5269\u4e0b\u4e86\u4ed6\u548c\u4e73\u767d\u8272\u7684\u592a\u9633\uff0c\u7eaf\u767d\u7684\u706b\u7130\u5c06\u4e24\u8005\u4e00\u540c\u5305\u56f4\u3002\u4ed6\u547c\u5438\u7740\u8fd9\u70bd\u70ed\u800c\u7eaf\u51c0\u7684\u5149\u3002"),(0,l.kt)("p",null,"\u4ed6\u95ed\u4e0a\u4e86\u773c\u775b\u3002\u5f53\u4ed6\u518d\u7741\u5f00\u773c\u775b\u65f6\uff0c\u6b63\u662f\u707f\u70c2\u7684\u5348\u540e\uff0c\u4ed6\u88ab\u5149\u8292\u7b3c\u7f69\u7740\uff0c\u62e5\u62b1\u7740\u592a\u9633\uff0c\u4ed6\u62b1\u5f97\u90a3\u4e48\u7d27\uff0c\u70ed\u91cf\u51e0\u4e4e\u8981\u628a\u4ed6\u7194\u5316\u3002\u90a3\u4e00\u523b\uff0c\u4ed6\u627e\u5230\u4e86\u592a\u9633\uff0c\u627e\u5230\u4e86\u81ea\u5df1\u5b58\u5728\u7684\u610f\u4e49\u3002\u4ed6\u611f\u89c9\u5230\u4e86\u81ea\u5df1\u6d3b\u7740\uff0c\u90a3\u662f\u4ed6\u7684\u9752\u6625\uff0c\u4ed6\u8fd8\u662f\u4e2a\u5c11\u5e74\u3002"),(0,l.kt)("p",null,"\u4ed6\u5728\u5730\u94c1\u5230\u7ad9\u7684\u6643\u52a8\u4e2d\u9192\u6765\u3002\u4e0b\u8f66\u4e86\uff0c\u4ed6\u5bf9\u81ea\u5df1\u8bf4\uff0c\u62ce\u8d77\u53cc\u80a9\u5305\uff0c\u8e0f\u4e0a\u82cd\u767d\u7684\u7ad9\u53f0\uff0c\u8d70\u8fdb\u82cd\u767d\u7684\u73b0\u5b9e\u3002"),(0,l.kt)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,l.kt)("p",null,"\u9648\u610f\u975e\u662f\u6211\u5f88\u559c\u6b22\u7684\u4e00\u4e2a\u540d\u5b57\uff0c\u5b83\u540c\u65f6\u8fd8\u662f\u6211\u7684\u4e00\u4e2a\u6e38\u620f\u8d26\u53f7\u4ee5\u53ca\u4e00\u4e2a\u8bba\u575b\u540d\u3002\u8fd9\u6b21\u65c5\u884c\uff0c\u6211\u4e00\u76f4\u5faa\u73af\u7740\u67ef\u8fbe\u7ebf\u4e50\u961f\uff08Kodaline\uff09\u7684\u4e13\u8f91 In A Perfect World\uff0c\u548c\u5f53\u5730\u7684\u98ce\u5149\u975e\u5e38\u642d\u914d\uff0c\u597d\u50cf\u80fd\u542c\u89c1\u7231\u5c14\u5170\u7684\u9633\u5149\u3002"),(0,l.kt)("p",null,"\u56fe\u7247\u5927\u591a\u6444\u4e8e\u51b6\u52d2\u6e56\u6c34\u5e93\u548c\u87ba\u9afb\u5c71\u4fdd\u62a4\u533a\uff0c\u8fd9\u4e5f\u662f\u6b63\u6587\u4e2d\u4e3b\u8981\u5173\u6ce8\u7684\u7ecf\u5386\u2014\u2014\u7528\u4e00\u79cd\u534a\u865a\u6784\u7684\u89c6\u89d2\u3002\u5f53\u7136\uff0c\u6211\u4eec\u8fd8\u5728\u897f\u660c\u505a\u4e86\u5f88\u591a\u5176\u4ed6\u4e8b\uff0c\u6bd4\u5982\u89c2\u6469\u536b\u661f\u53d1\u5c04\u3002\u9644\u5173\u4e8e\u8fd9\u6b21\u6211\u89c2\u6469\u7684\u706b\u7bad\u53d1\u5c04\u7684\u76f8\u5173\u62a5\u9053\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e2d\u65b0\u7f51\u5317\u4eac 10 \u6708 26 \u65e5\u7535(\u90ed\u8d85\u51ef \u6731\u9704\u96c4) \u5317\u4eac\u65f6\u95f4 10 \u6708 26 \u65e5 23 \u65f6 19 \u5206\uff0c\u4e2d\u56fd\u5728\u897f\u660c\u536b\u661f\u53d1\u5c04\u4e2d\u5fc3\u7528\u957f\u5f81\u4e8c\u53f7\u4e19\u8fd0\u8f7d\u706b\u7bad\uff0c\u6210\u529f\u5c06\u9065\u611f\u4e09\u5341\u53f7 07 \u7ec4\u536b\u661f\u9001\u5165\u9884\u5b9a\u8f68\u9053\uff0c\u53d1\u5c04\u83b7\u5f97\u5706\u6ee1\u6210\u529f\u3002\u6b64\u6b21\u4efb\u52a1\u8fd8\u642d\u8f7d\u53d1\u5c04\u4e86\u5929\u542f\u661f\u5ea7 06 \u661f\u3002")),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u662f\u6211\u7684\u4e00\u4e9b\u611f\u6027\u4f53\u9a8c\uff0c\u81f3\u4e8e\u60f3\u8981\u7406\u6027\u601d\u8003\u7684\u8bdd\uff0c\u53ef\u4ee5\u770b\u6211\u548c\u540c\u884c\u540c\u5b66\u7684\u5206\u4eab\u6f14\u8bb2\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9996\u5148\uff0c\u5f53\u90a3\u523b\u7740\u4e94\u661f\u7ea2\u65d7\u7684\u706b\u7bad\u5347\u4e0a\u7a7a\u4e2d\u65f6\uff0c\u6211\u4eec\u611f\u5230\u4e86\u4f5c\u4e3a\u4e2d\u56fd\u4eba\u7684\u81ea\u8c6a\uff0c\u8fd9\u6b21\u53d1\u5c04\u662f\u957f\u5f81\u7cfb\u5217\u8fd0\u8f7d\u706b\u7bad\u7b2c 350 \u6b21\u98de\u884c\uff0c\u6bcf\u4e00\u6b21\u53d1\u5c04\u90fd\u662f\u65e0\u6570\u7814\u7a76\u4eba\u5458\u7684\u8f9b\u82e6\u7684\u7ed3\u6676\uff0c\u6211\u4eec\u7531\u8877\u5730\u5bf9\u6211\u4eec\u7684\u7956\u56fd\u7684\u822a\u5929\u6c34\u5e73\u8fbe\u5230\u4e86\u5982\u6b64\u9ad8\u548c\u524d\u6cbf\u7684\u5883\u754c\u611f\u5230\u81ea\u8c6a\u4e0e\u6b23\u559c\u3002\u5176\u6b21\uff0c\u6211\u4eec\u60f3\u5230\u4e86\u4eba\u7c7b\u7684\u8fdb\u6b65\u4e0e\u672a\u6765\uff0c\u5982\u4eca\u8fbe\u5230\u7684\u822a\u7a7a\u6210\u5c31\u662f\u8fc7\u53bb\u96be\u4ee5\u60f3\u8c61\u7684\uff0c\u800c\u672a\u6765\uff0c\u5728\u5f53\u4eca\u98de\u901f\u7684\u65f6\u4ee3\u4e0b\uff0c\u662f\u4e0d\u53ef\u9650\u91cf\u7684\uff0c\u4eff\u4f5b\u90a3\u4e2a\u5347\u7a7a\u7684\u706b\u7bad\u4e00\u6837\uff0c\u80fd\u5e26\u6765\u5149\u3001\u70ed\u548c\u9707\u64bc\u3002")),(0,l.kt)("p",null,"\u2014\u2014\u8fd9\u662f\u4ed6\u7684\uff0c\u8bb2\u7684\u662f\u706b\u7bad\u53d1\u5c04\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u6709\u4e24\u70b9\u611f\u60f3\u3002\u4e00\u662f\uff0c\u6559\u80b2\u624d\u662f\u80fd\u6539\u53d8\u4e00\u7fa4\u4eba\u672a\u6765\u7684\u65b9\u6cd5\u3002\u6211\u4eec\u5e38\u8c08\u201c\u79d1\u6559\u5174\u56fd\u201d\uff0c\u4f46\u5728\u5927\u57ce\u5e02\u662f\u4f53\u4f1a\u4e0d\u5230\u5b83\u7684\u524d\u77bb\u6027\u7684\uff1b\u53ea\u6709\u5728\u519c\u6751\uff0c\u542c\u5230\u90a3\u4e9b\u6765\u81ea\u6700\u8fb9\u8fdc\u7684\u4e61\u9547\u7684\u5b69\u5b50\u4eec\u8ba8\u8bba\u7740\u201c\u514b\u9686\u201d\u201c\u673a\u5668\u4eba\u201d\uff0c\u4f60\u624d\u80fd\u660e\u767d\uff0c\u8fd9\u4e9b\u5b69\u5b50\u4e2d\u4f1a\u6709\u4e00\u4e9b\u80fd\u5e26\u9886\u793e\u4f1a\u8d70\u5411\u5149\u660e\u7684\u672a\u6765\uff0c\u65e0\u8bba\u4ed6\u4eec\u73b0\u5728\u51fa\u8eab\u5982\u4f55\u3002\u56e0\u4e3a\u4ed6\u4eec\u5fc3\u4e2d\u5df2\u7ecf\u88ab\u79cd\u4e0b\u4e86\u79d1\u5b66\u7684\u79cd\u5b50\uff0c\u63a2\u7d22\u7684\u79cd\u5b50\uff0c\u4ed6\u4eec\u7684\u672a\u6765\u4f1a\u50cf\u90a3\u679a\u706b\u7bad\u4e00\u6837\u5189\u5189\u4e0a\u5347\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u7b2c\u4e8c\u70b9\u662f\uff0c\u6211\u4eec\u7684\u793e\u4f1a\u6b63\u5728\u884c\u52a8\u8d77\u6765\uff0c\u5e2e\u52a9\u8fd9\u4e9b\u843d\u540e\u5730\u533a\u7684\u4eba\u4eec\u3002\u6211\u4eec\u53bb\u7684\u5b66\u6821\u662f\u4e09\u5ce1\u96c6\u56e2\uff0c\u4e00\u4e2a\u4e1c\u90e8\u7684\u4f01\u4e1a\u6350\u52a9\u7684\uff1b\u4ed6\u4eec\u5728\u5b66\u6821\u91cc\u5efa\u5b9e\u9a8c\u5ba4\uff0c\u6d3e\u652f\u6559\u8001\u5e08\uff0c\u8bbe\u52b1\u5fd7\u73ed\u3002\u8bb8\u591a\u516c\u53f8\u3001\u5730\u65b9\u653f\u5e9c\u4e5f\u90fd\u6709\u5bf9\u53e3\u652f\u63f4\u7684\u5730\u533a\u3002\u5728\u8131\u8d2b\u9053\u8def\u4e0a\uff0c\u6211\u4eec\u505a\u5230\u4e86\u793e\u4f1a\u4e00\u6761\u5fc3\uff0c\u5168\u56fd\u4e00\u76d8\u68cb\u3002")),(0,l.kt)("p",null,"\u2014\u2014\u8fd9\u662f\u6211\u7684\uff0c\u8bb2\u7684\u662f\u53bb\u4e00\u6240\u5c71\u533a\u5b66\u6821\u4ea4\u6d41\u3002"),(0,l.kt)("p",null,"\u56db\u5ddd\u7684\u786e\u662f\u4e2a\u597d\u5730\u65b9\uff0c\u603b\u80fd\u5728\u60f3\u4e0d\u5230\u7684\u5730\u65b9\u53d1\u73b0\u79c0\u7f8e\u7684\u98ce\u666f\u3002"))}f.isMDXComponent=!0}}]);