(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[7194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),a=/{\w+}/g,l="{}";function i(e,t){var n=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==t?void 0:t[a];if(void 0!==i){var o=r.isValidElement(i)?i:String(i);return n.push(o),l}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(l).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):i.split(l).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function o(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var u=n(4644);function c(e){var t,n=e.id,r=e.message;return null!==(t=u[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return i(null!==(n=c({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,a=e.id,l=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=c({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(o,{values:l},i)}},8322:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4973);function l(e){var t=e.frontMatter,n=t.date,l=t.link;return n||l?r.createElement("div",{className:"alert alert--info margin-bottom--md",role:"contentinfo"},n&&r.createElement(a.Z,{id:"docMetadataBanner.firstPublished",values:{date:r.createElement("b",null,n.toLocaleDateString("zh-Hans"))}},"First published on {date}. "),l&&r.createElement("a",{href:l},r.createElement(a.Z,{id:"docMetadataBanner.sourceLink"},"Source link"))):null}},796:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.src;return r.createElement("div",{style:{textAlign:"center"}},r.createElement("img",{src:n}),r.createElement("p",{style:{color:"gray",fontSize:"small"}},t))}},4171:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=n(796),o=n(8322),u={id:"law",title:"\u5b89\u63d0\u6208\u6d85\uff1a\u6076\u6cd5\u975e\u6cd5\uff01",sidebar_label:"Antigone: unjust laws are not laws",date:new Date("2020-12-29T00:00:00.000Z"),link:"https://mp.weixin.qq.com/s/AkIjFaAvtsKZ03Lam_x0Sg"},c=void 0,s={unversionedId:"Humanities/law",id:"Humanities/law",isDocsHomePage:!1,title:"\u5b89\u63d0\u6208\u6d85\uff1a\u6076\u6cd5\u975e\u6cd5\uff01",description:"\u5728\u77e5\u8bc6\u8bba\u8bfe\u4e0a\uff0c\u4f5c\u4e3a\u201c\u77e5\u8bc6\u4e0e\u4ef7\u503c\u89c2\u201d\u8fd9\u4e00\u90e8\u5206\u7684\u5b9e\u4f8b\uff0c\u6211\u4eec\u770b\u4e86\u4e24\u96c6\u7f8e\u5267\u300a\u6ce2\u58eb\u987f\u6cd5\u5f8b\u300b(Boston Legal) \u7684\u7247\u6bb5\uff0c\u662f\u4e24\u4e2a\u975e\u5e38\u6709\u8da3\u7684\u5ead\u5ba1\u6848\u4f8b\u3002",source:"@site/docs/Humanities/4-law.md",sourceDirName:"Humanities",slug:"/Humanities/law",permalink:"/docs/Humanities/law",version:"current",sidebarPosition:4,frontMatter:{id:"law",title:"\u5b89\u63d0\u6208\u6d85\uff1a\u6076\u6cd5\u975e\u6cd5\uff01",sidebar_label:"Antigone: unjust laws are not laws",date:"2020-12-29T00:00:00.000Z",link:"https://mp.weixin.qq.com/s/AkIjFaAvtsKZ03Lam_x0Sg"},sidebar:"docs",previous:{title:"Seymour Glass: he comes, he goes",permalink:"/docs/Humanities/bananafish"},next:{title:"Latin West and Greek East",permalink:"/docs/Humanities/greek"}},p=[],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{frontMatter:u,mdxType:"DocMetadataBanner"}),(0,l.kt)("p",null,"\u5728\u77e5\u8bc6\u8bba\u8bfe\u4e0a\uff0c\u4f5c\u4e3a\u201c\u77e5\u8bc6\u4e0e\u4ef7\u503c\u89c2\u201d\u8fd9\u4e00\u90e8\u5206\u7684\u5b9e\u4f8b\uff0c\u6211\u4eec\u770b\u4e86\u4e24\u96c6\u7f8e\u5267\u300a\u6ce2\u58eb\u987f\u6cd5\u5f8b\u300b(Boston Legal) \u7684\u7247\u6bb5\uff0c\u662f\u4e24\u4e2a\u975e\u5e38\u6709\u8da3\u7684\u5ead\u5ba1\u6848\u4f8b\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b\u4e00")),(0,l.kt)("p",null,"\u4e00\u4e2a\u7537\u4eba\u548c\u4e24\u4e2a\u5973\u4eba\u540c\u65f6\u7ed3\u5a5a\uff0c\u4e24\u4e2a\u59bb\u5b50\u4e4b\u95f4\u548c\u7766\u76f8\u5904\uff0c\u4e09\u4eba\u6709\u660e\u786e\u7684\u5206\u5de5\uff0c\u975e\u5e38\u5e78\u798f\u5730\u751f\u6d3b\u5728\u4e00\u8d77\u3002\u68c0\u5bdf\u9662\u53d1\u73b0\u540e\uff0c\u4ee5\u91cd\u5a5a\u7f6a\u8d77\u8bc9\u4e08\u592b\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b\u4e8c")),(0,l.kt)("p",null,"\u4e00\u4e2a\u60a3\u963f\u5c14\u5179\u6d77\u9ed8\u75c7\u7684\u59bb\u5b50\u548c\u4e08\u592b\u7ea6\u5b9a\uff0c\u5728\u5979\u5931\u53bb\u81ea\u5236\u7684\u4e00\u5929\uff0c\u7ed9\u81ea\u5df1\u5b89\u4e50\u6b7b\uff0c\u8ba9\u81ea\u5df1\u6709\u5c0a\u4e25\u5730\u79bb\u5f00\u3002\u5f53\u8fd9\u4e00\u5929\u5230\u6765\u65f6\uff0c\u4e08\u592b\u5c65\u884c\u4e86\u7ea6\u5b9a\uff0c\u7ed9\u59bb\u5b50\u6ce8\u5c04\u4e86\u8fc7\u91cf\u5417\u5561\u3002\u4ed6\u4ee5\u8c0b\u6740\u7f6a\u88ab\u8d77\u8bc9\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET69KSYobCgBALSL5DmFHicXQ01ldBRhADKZMntTic78ViaAJRMic38klJl4taXqTnkgYFsibVz5V5iaVanDg.png",mdxType:"Pic"}),(0,l.kt)("p",null,"\u4f5c\u4e3a\u966a\u5ba1\u56e2\uff0c\u6211\u4eec\u5168\u73ed\uff0826 \u4eba\uff09\u88ab\u8981\u6c42\u51b3\u5b9a\u4e24\u540d\u88ab\u544a\u662f\u5426\u6709\u7f6a\u3002\u7ed3\u679c\u662f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b\u4e00"),"\uff1a20-6\uff0c\u6709\u7f6a\uff1b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6848\u4f8b\u4e8c"),"\uff1a11-15\uff0c\u65e0\u7f6a\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u6570\u5b57\u53ef\u80fd\u6709\u51fa\u5165\uff0c\u4f46\u5927\u81f4\u5982\u6b64\u3002\u8fd9\u4e2a\u7ed3\u679c\u5728\u6211\u770b\u6765\uff0c\u975e\u5e38\u503c\u5f97\u601d\u8003\uff0c\u56e0\u4e3a\u4e24\u4e2a\u6848\u4f8b\u5b9e\u9645\u4e0a\u4ee3\u8868\u4e86\u540c\u4e00\u7c7b\u6848\u4ef6\uff0c\u4e5f\u5c31\u662f\u6cd5\u5f8b\u7cbe\u795e\u548c\u6cd5\u5f8b\u6761\u6587\u95f4\u7684\u51b2\u7a81\u2014\u2014\u5224\u51b3\u5374\u622a\u7136\u76f8\u53cd\u3002\uff08\u6211\u5bf9\u4e24\u4e2a\u6848\u4f8b\u90fd\u6295\u4e86\u65e0\u7f6a\u7968\u3002\uff09\u629b\u5f00\u8fd9\u4e00\u70b9\uff0c\u5728\u6bcf\u4e00\u4e2a\u6848\u4ef6\u7684\u8ba8\u8bba\u8fc7\u7a0b\u4e2d\uff0c\u6301\u6709\u7f6a\u4e0e\u65e0\u7f6a\u89c2\u70b9\u7684\u540c\u5b66\u4eec\u90fd\u53d1\u8868\u4e86\u81ea\u5df1\u7684\u89c1\u89e3\u3002\u5176\u4e2d\u975e\u5e38\u6709\u4ee3\u8868\u6027\u7684\u51e0\u4e2a\u610f\u89c1\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6709\u7f6a\u65b9")),(0,l.kt)("p",null,"\u2014\u2014\u6cd5\u5f8b\u89c4\u5b9a\uff0c\u4e00\u4e2a\u4e08\u592b\u6700\u591a\u5a36\u4e00\u4e2a\u59bb\u5b50\u3002\u8fd9\u4e2a\u4e08\u592b\u5a36\u4e86\u4e24\u4e2a\u59bb\u5b50\uff0c\u56e0\u6b64\u4ed6\u89e6\u72af\u4e86\u6cd5\u5f8b\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u6cd5\u5f8b\u89c4\u5b9a\uff0c\u516c\u6c11\u65e0\u6743\u5265\u593a\u5176\u4ed6\u516c\u6c11\u7684\u751f\u547d\u3002\u8fd9\u4e2a\u4e08\u592b\u4e3b\u89c2\u4e0a\u548c\u5ba2\u89c2\u4e0a\u90fd\u9020\u6210\u4e86\u59bb\u5b50\u7684\u6b7b\u4ea1\uff0c\u56e0\u6b64\u4ed6\u89e6\u72af\u4e86\u6cd5\u5f8b\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u6cd5\u5f8b\u662f\u7528\u6765\u7ef4\u6301\u793e\u4f1a\u7a33\u5b9a\u7684\u3002\u5982\u679c\u5141\u8bb8\u8fd9\u4e2a\u4e08\u592b\u5a36\u4e24\u4e2a\u59bb\u5b50\uff0c\u5982\u679c\u5141\u8bb8\u8fd9\u4e2a\u4e08\u592b\u5b89\u4e50\u6b7b\u4ed6\u7684\u59bb\u5b50\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u4fdd\u8bc1\u4eba\u4eec\u5bf9\u6cd5\u5f8b\u7684\u656c\u754f\u4e0e\u4fe1\u4efb\uff1f\u5982\u4f55\u4fdd\u8bc1\u6cd5\u5f8b\u6c38\u8fdc\u80fd\u6b63\u786e\u8fd0\u884c\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65e0\u7f6a\u65b9")),(0,l.kt)("p",null,"\u2014\u2014\u6cd5\u5f8b\u53ea\u662f\u4e00\u79cd\u624b\u6bb5\uff0c\u800c\u65ad\u6848\u65f6\u771f\u6b63\u5e94\u5f53\u8003\u8651\u7684\u662f\u5b83\u6240\u5bfc\u5411\u7684\u76ee\u7684\u3002\u5f53\u6cd5\u5f8b\u7981\u6b62\u91cd\u5a5a\u65f6\uff0c\u7acb\u6cd5\u8005\u7684\u610f\u56fe\u8981\u4e48\u51fa\u4e8e\u5b97\u6559\u4fe1\u4ef0\uff0c\u8981\u4e48\u51fa\u4e8e\u5bb6\u5ead\u5e78\u798f\u7684\u8003\u8651\u3002\u5728\u8fd9\u4e2a\u5224\u4f8b\u4e2d\uff0c\u6211\u4eec\u770b\u5230\u7684\u662f\u4e00\u4e2a\u548c\u8c10\u7f8e\u6ee1\u7684\u5bb6\u5ead\uff0c\u6ca1\u6709\u4e89\u6267\uff0c\u6ca1\u6709\u4e0d\u516c\uff0c\u8fd9\u5b8c\u5168\u7b26\u5408\u7acb\u6cd5\u8005\u7684\u521d\u8877\uff0c\u56e0\u6b64\u5728\u7cbe\u795e\u4e0a\u4e0e\u6cd5\u5f8b\u4e0d\u8fdd\u80cc\u3002"),(0,l.kt)("p",null,"\u2014\u2014\u6cd5\u5f8b\u662f\u5bf9\u793e\u4f1a\u9053\u5fb7\u4f53\u7cfb\u7684\u4e00\u79cd\u5236\u5ea6\u5316\u89c4\u8303\uff0c\u4f46\u8fd9\u79cd\u89c4\u8303\u5e38\u5e38\u662f\u62d9\u52a3\u7684\u3002\u5f53\u6cd5\u5f8b\u65e0\u6cd5\u51c6\u786e\u53cd\u6620\u9053\u5fb7\u65f6\uff0c\u6211\u4eec\u5e94\u5f53\u9075\u4ece\u516c\u8ba4\u7684\u9053\u5fb7\u51c6\u5219\u800c\u975e\u523b\u677f\u7684\u6cd5\u5f8b\u6761\u6587\u3002"),(0,l.kt)("p",null,"\u6700\u8fd1\uff0c\u6211\u8bfb\u4e86\u4e00\u90e8\u53e4\u5e0c\u814a\u60b2\u5267\u300a\u5b89\u63d0\u6208\u6d85\u300b(Antigone)\uff0c\u5b83\u6070\u597d\u5728\u8fd9\u573a\u6cd5\u5f8b\u7cbe\u795e\u4e0e\u6cd5\u5f8b\u6761\u6587\u7684\u4e89\u8fa9\u4e2d\u88ab\u6cd5\u5b66\u5bb6\u4eec\u53cd\u590d\u63f4\u5f15\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u900f\u8fc7\u300a\u5b89\u63d0\u6208\u6d85\u300b\u7684\u4ef7\u503c\u4f53\u7cfb\u6765\u5ba1\u89c6\u8fd9\u4e9b\u6848\u4f8b\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u300a\u5b89\u63d0\u6208\u6d85\u300b\u662f\u53e4\u5e0c\u814a\u4e09\u5927\u60b2\u5267\u5bb6\u4e4b\u4e00\u7d22\u798f\u514b\u52d2\u65af (Sophocles) \u7684\u4f5c\u54c1\uff0c\u4ed6\u6700\u8457\u540d\u7684\u620f\u5267\u5e94\u5f53\u662f\u300a\u4fc4\u72c4\u6d66\u65af\u738b\u300b(Oedipus Rex)\uff0c\u8bb2\u8ff0\u4fc4\u72c4\u6d66\u65af\u738b\u4e3a\u5e73\u606f\u761f\u75ab\u5bfb\u627e\u6740\u6b7b\u5148\u738b\u62c9\u4f0a\u4fc4\u65af\u7684\u51f6\u624b\uff0c\u6700\u540e\u53d1\u73b0\u51f6\u624b\u6b63\u662f\u81ea\u5df1\uff0c\u56e0\u6b64\u81ea\u6211\u653e\u9010\u51fa\u57ce\u7684\u6545\u4e8b\u2014\u2014\u5173\u4e8e\u4ed6\u6740\u7236\u5a36\u6bcd\u7684\u9884\u8a00\u4e5f\u662f\u51fa\u81ea\u8fd9\u90e8\u620f\u3002\u800c\u300a\u5b89\u63d0\u6208\u6d85\u300b\u5219\u662f\u300a\u4fc4\u72c4\u6d66\u65af\u738b\u300b\u7684\u540e\u7ee7\u3002\u300a\u4fc4\u72c4\u6d66\u65af\u738b\u300b\u3001\u300a\u4fc4\u72c4\u6d66\u65af\u5728\u514b\u7f57\u8bfa\u65af\u300b(Oedipus at Colonus)\u3001\u300a\u5b89\u63d0\u6208\u6d85\u300b\u4e09\u90e8\u620f\u88ab\u79f0\u4f5c\u7d22\u798f\u514b\u52d2\u65af\u7684\u5fd2\u62dc\u620f\u5267 (Theban plays)\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET69KSYobCgBALSL5DmFHicXQ0JgPUq698oq9440zgUPzRcHSCo3LhE0XgxnPsiaMSwfpZYcDAUicNjECw.jpeg",mdxType:"Pic"},"\u7d22\u798f\u514b\u52d2\u65af"),(0,l.kt)("p",null,"\u620f\u5267\u7684\u80cc\u666f\u662f\uff0c\u4fc4\u72c4\u6d66\u65af\u738b\u81ea\u6211\u653e\u9010\u540e\uff0c\u5fd2\u62dc\u7684\u9886\u4e3b\u4e4b\u4f4d\u4f20\u7ed9\u4e24\u4e2a\u513f\u5b50\u5384\u5fd2\u4fc4\u514b\u52d2\u65af (Eteocles) \u548c\u6ce2\u5415\u6d85\u79d1\u65af (Polynices) \u3002\u4ed6\u4eec\u4e4b\u95f4\u4ea7\u751f\u4e86\u4e89\u6267\uff0c\u6ce2\u5415\u6d85\u79d1\u65af\u51fa\u8d70\u5e76\u5e26\u56de\u4e86\u4e03\u5c06\u653b\u6253\u5fd2\u62dc\u57ce\uff0c\u6700\u7ec8\u5144\u5f1f\u5728\u51b3\u6597\u4e2d\u4e00\u8d77\u6b7b\u53bb\uff0c\u738b\u4f4d\u843d\u5230\u4fc4\u72c4\u6d66\u65af\u7684\u6bcd\u4eb2\u7ea6\u5361\u65af\u5854 (Jocasta) \u7684\u5144\u5f1f\u514b\u745e\u7fc1 (Creon) \u5934\u4e0a\u3002\u8fd9\u6bb5\u5267\u60c5\u89c1\u8bf8\u8bb8\u591a\u5e0c\u814a\u6587\u827a\u4f5c\u54c1\uff0c\u5c24\u5176\u662f\u57c3\u65af\u5e93\u7f57\u65af (Aeschylus) \u7684\u300a\u4e03\u5c06\u653b\u5fd2\u62dc\u300b(Seven against Thebes)\u3002"),(0,l.kt)("p",null,"\u620f\u5267\u4e2d\uff0c\u514b\u745e\u7fc1\u9881\u5e03\u6cd5\u4ee4\uff0c\u4e0d\u8bb8\u4efb\u4f55\u4eba\u57cb\u846c\u53db\u56fd\u8005\u6ce2\u5415\u6d85\u79d1\u65af\uff0c\u8fdd\u8005\u5904\u6b7b\u3002\u4fc4\u72c4\u6d66\u65af\u7684\u5927\u5973\u513f\u5b89\u63d0\u6208\u6d85\u5411\u59b9\u59b9\u4f0a\u65af\u58a8\u6d85 (Ismene) \u900f\u9732\uff0c\u8fd9\u6761\u6cd5\u5f8b\u662f\u6e0e\u795e\u7684\uff0c\u56e0\u4e3a\u6309\u5e0c\u814a\u7684\u9053\u5fb7\u4e0e\u4fe1\u4ef0\uff0c\u57ce\u90a6\u7684\u516c\u6c11\u5e94\u5f53\u88ab\u57ce\u90a6\u57cb\u846c\u3002\u56e0\u6b64\u4f5c\u4e3a\u5bb6\u4eba\uff0c\u5979\u8981\u5192\u6b7b\u57cb\u846c\u6ce2\u5415\u6d85\u79d1\u65af\u3002\u5b89\u63d0\u6208\u6d85\u88ab\u53d1\u73b0\u5e76\u88ab\u902e\u6355\uff0c\u4f46\u5979\u4e0e\u514b\u745e\u7fc1\u5c55\u5f00\u4e86\u5173\u4e8e\u8fd9\u6761\u6cd5\u4ee4\u7684\u6b63\u7edf\u6027\u7684\u4e89\u8bba\u3002\u6700\u7ec8\u5979\u88ab\u5904\u6b7b\uff0c\u5e76\u7ee7\u800c\u5bfc\u81f4\u4e86\u514b\u745e\u7fc1\u7684\u513f\u5b50\u4e0e\u59bb\u5b50\u7684\u6b7b\u4ea1\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET69KSYobCgBALSL5DmFHicXQ0wh4DyVPVia87ESlE4VWIL8qPN6l6upfB9hrOp9gwvT34d20c4hPlEgg.png",mdxType:"Pic"},"Antigone donnant la s\xe9pulture \xe0 Polynice, S\xe9bastien Norblin (1825)"),(0,l.kt)("p",null,"\u5728\u5b89\u63d0\u6208\u6d85\u7684\u9648\u8bcd\u4e2d\uff0c\u6709\u8fd9\u4e48\u4e00\u6bb5\u8bdd\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"It was not God\u2019s proclamation. That final Justice",(0,l.kt)("br",{parentName:"p"}),"\n","That rules the world below makes no such laws.",(0,l.kt)("br",{parentName:"p"}),"\n","Your edict, King, was strong,",(0,l.kt)("br",{parentName:"p"}),"\n","But all your strength is weakness itself against",(0,l.kt)("br",{parentName:"p"}),"\n","The immortal unrecorded laws of God.",(0,l.kt)("br",{parentName:"p"}),"\n","They are not merely now: they were, and shall be,",(0,l.kt)("br",{parentName:"p"}),"\n","Operative forever, beyond man utterly."),(0,l.kt)("p",{parentName:"blockquote"},"Antigone, Scene II")),(0,l.kt)("p",null,"\u5927\u610f\u4e3a\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e0d\u662f\u795e\u7684\u65e8\u610f\u3002\u90a3\u6700\u9ad8\u7684\u7edf\u6cbb\u51e1\u5c18\u4fd7\u4e16\u7684\u6b63\u4e49\u4e0d\u4f1a\u5236\u5b9a\u8fd9\u6837\u7684\u6cd5\u5f8b\u3002\u56fd\u738b\uff0c\u4f60\u7684\u6cd5\u4ee4\u5f3a\u5927\uff0c\u4f46\u4f60\u7684\u5f3a\u5927\u5728\u795e\u90a3\u4e0d\u6210\u6587\u800c\u6c38\u6052\u7684\u6cd5\u6761\u9762\u524d\u662f\u65e0\u529b\u7684\u3002\u5b83\u4eec\u4e0d\u4ec5\u5b58\u5728\u4e8e\u4eca\u65e5\uff1a\u5b83\u4eec\u66fe\u7ecf\u4e5f\u5c06\u4f1a\u6c38\u8fdc\u6709\u6548\uff0c\u5168\u7136\u5730\u8d85\u8d8a\u4eba\u7c7b\u7684\u6cd5\u5f8b\u3002")),(0,l.kt)("p",null,"\u5979\u53cd\u590d\u5730\u8bf4\uff0c\u795e\u8981\u6c42\u6bcf\u4e2a\u4eba\u90fd\u80fd\u5728\u6b7b\u540e\u5f97\u5230\u57cb\u846c\uff0c\u65e0\u8bba\u662f\u654c\u4eba\u8fd8\u662f\u82f1\u96c4\u2014\u2014\u56e0\u4e3a\u6211\u4eec\u4e0d\u80fd\u63e3\u6469\u795e\u7684\u597d\u6076\uff0c\u4f46\u53ef\u4ee5\u9075\u5b88\u795e\u7684\u65e8\u610f\u3002\u795e\u7684\u610f\u5fd7\u662f\u8d85\u8d8a\u51e1\u4eba\u7684\u6cd5\u5f8b\u7684\uff0c\u5f53\u4e24\u8005\u51b2\u7a81\u65f6\uff0c\u6211\u4eec\u8981\u4e49\u65e0\u53cd\u987e\u5730\u987a\u4ece\u795e\u800c\u53cd\u5bf9\u6cd5\u5f8b\u3002"),(0,l.kt)("p",null,"\u514b\u745e\u7fc1\u7684\u8bc1\u8bcd\u5219\u662f\uff0c\u6ce2\u5415\u6d85\u79d1\u65af\u4f5c\u4e3a\u53db\u5f92\uff0c\u4e0d\u5e94\u548c\u5384\u5fd2\u4fc4\u514b\u52d2\u65af\u83b7\u5f97\u540c\u6837\u7684\u7ed3\u5c40\uff1b\u5426\u5219\uff0c\u5fe0\u8bda\u7684\u610f\u4e49\u5c31\u65e0\u6cd5\u5f97\u5230\u5f70\u663e\u3002\u9000\u4e00\u6b65\u8bf4\uff0c\u6cd5\u6761\u65e2\u5b9a\uff0c\u8fdd\u80cc\u4e86\u4fbf\u662f\u4e0d\u53ef\u9976\u6055\u7684\u3002"),(0,l.kt)("p",null,"\u5b89\u63d0\u6208\u6d85\u7684\u4e3b\u5f20\uff0c\u88ab\u603b\u7ed3\u6210\u6240\u8c13\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u201c\u6076\u6cd5\u975e\u6cd5\u201d"),"\u3002\u4e5f\u5c31\u662f\uff0c\u7531\u4e8e\u514b\u745e\u7fc1\u7684\u6cd5\u5f8b\u8fdd\u53cd\u4e86\u201c\u795e\u7684\u6cd5\u5f8b\u201d\uff0c\u8fd9\u6761\u6cd5\u5f8b\u4fbf\u662f\u6076\u7684\uff0c\u4e0d\u5177\u5907\u516c\u4fe1\u529b\uff0c\u4e0d\u5e94\u9075\u5b88\u5b83\u3002\u800c\u514b\u745e\u7fc1\u7684\u4e3b\u5f20\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4ee3\u8868\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"\u201c\u6076\u6cd5\u4ea6\u6cd5\u201d"),"\uff08\u867d\u7136\u4ed6\u663e\u7136\u4e0d\u89c9\u5f97\u8fd9\u6cd5\u5f8b\u662f\u6076\u6cd5\uff09\uff0c\u4e5f\u5c31\u662f\u6cd5\u5f8b\u7684\u516c\u4fe1\u529b\u662f\u5185\u5728\u7684\u800c\u65e0\u9700\u8bc1\u660e\u7684\uff0c\u54ea\u6015\u5b83\u8fdd\u80cc\u4e86\u4eba\u4eec\u5fc3\u76ee\u4e2d\u7684\u201c\u6b63\u4e49\u201d\uff0c\u4e5f\u5e94\u5f53\u88ab\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5230\u4e86\u540e\u4e16\uff0c\u5c24\u5176\u662f\u542f\u8499\u65f6\u671f\uff0c\u8fd9\u4e24\u6d3e\u89c2\u70b9\u53d1\u5c55\u6210\u4e86\u4e24\u4e2a\u6cd5\u5b66\u5b66\u6d3e\uff1a\u81ea\u7136\u6cd5\u6d3e\u4e0e\u5b9e\u8bc1\u6cd5\u6d3e\u3002\u5f53\u7136\uff0c\u970d\u5e03\u65af\u6216\u8005\u6d1b\u514b\u8fd9\u6837\u7684\u54f2\u5b66\u5bb6\u4e0d\u4f1a\u76f4\u63a5\u7528\u201c\u795e\u7684\u6cd5\u5f8b\u201d\u8fd9\u6837\u7684\u8bcd\uff0c\u4f46\u4ed6\u4eec\u4ecd\u7136\u76f8\u4fe1\uff0c\u5b58\u5728\u4e00\u5957\u6c38\u6052\u7684\u201c\u81ea\u7136\u6cd5\u201d\uff0c\u80fd\u591f\u88ab\u6bcf\u4e2a\u4eba\u7528\u7406\u6027\u611f\u77e5\u5e76\u8ba4\u53ef\uff0c\u800c\u6211\u4eec\u7684\u5b9e\u5728\u6cd5\u4f53\u7cfb\u4e0d\u8fc7\u662f\u5bf9\u81ea\u7136\u6cd5\u7684\u53cd\u6620\u4e0e\u843d\u5b9e\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8bc1\u660e\u81ea\u7136\u6cd5\u7684\u6b63\u786e\u6027\uff0c\u5c31\u8981\u8bc1\u660e\u51e0\u4ef6\u4e8b\uff1a"),(0,l.kt)("p",null,"(1) \u5b58\u5728\u7edd\u5bf9\u7684\uff0c\u5148\u9a8c\u7684\uff0c\u666e\u9002\u7684\u9053\u5fb7\u51c6\u5219\uff1b"),(0,l.kt)("p",null,"(2) \u4eba\u7c7b\u53ef\u4ee5\u901a\u8fc7\u7406\u6027\u800c\u975e\u611f\u5b98\u611f\u77e5\u8fd9\u79cd\u9053\u5fb7\u51c6\u5219\uff1b"),(0,l.kt)("p",null,"(3) \u6cd5\u5f8b\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5b9e\u73b0\u771f\u6b63\u7684\u9053\u5fb7\u4e0e\u6b63\u4e49\u3002"),(0,l.kt)("p",null,"(1)\u5173\u4e8e\u9053\u5fb7\u7684\u672c\u8d28\uff0c(2)\u5173\u4e8e\u8ba4\u77e5\u7684\u672c\u8d28\uff0c(3)\u5173\u4e8e\u6cd5\u5f8b\u7684\u672c\u8d28\uff0c\u6bcf\u4e00\u4e2a\u90fd\u5173\u4e4e\u54f2\u5b66\u7684\u4e00\u4e2a\u4e2d\u5fc3\u8bdd\u9898\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d\u6700\u53cd\u76f4\u89c9\u7684\u4e00\u4e2a\u4e3b\u5f20\u5e94\u8be5\u662f(1)\uff0c\u5c24\u5176\u662f\u5bf9\u4e8e\u6211\u4eec\u8fd9\u4e9b\u65e0\u795e\u8bba\u8005\u6765\u8bf4\uff0c\u56e0\u4e3a\u5b83\u544a\u8bc9\u6211\u4eec\u4e16\u754c\u4e0a\u5b58\u5728\u4e0d\u968f\u793e\u4f1a\u4e0e\u4eba\u7c7b\u800c\u53d8\u5316\u7684\u9053\u5fb7\u89c4\u8303\uff08\u6240\u8c13\u201c\u5148\u9a8c\u7684\u201d\uff09\u3002\u57fa\u7763\u5f92\u3001\u4f5b\u6559\u5f92\u6216\u5176\u4ed6\u5b97\u6559\u4fe1\u4ef0\u8005\u80fd\u591f\u63a5\u53d7\u7edd\u5bf9\u9053\u5fb7\u51c6\u5219\u7684\u5b58\u5728\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4fe1\u4ef0\u7684\u795e\u5df2\u7ecf\u7528\u7ecf\u4e66\u900f\u9732\u4e86\u8fd9\u6837\u7684\u5185\u5bb9\uff1b\u4f46\u6211\u4eec\u4e2d\u7684\u8bb8\u591a\u4eba\u76f8\u4fe1\uff0c\u9053\u5fb7\u662f\u4e00\u79cd\u793e\u4f1a\u73b0\u8c61\uff0c\u662f\u4e0e\u7ecf\u6d4e\u57fa\u7840\u3001\u751f\u4ea7\u5173\u7cfb\u3001\u9636\u7ea7\u80cc\u666f\u7b49\u8131\u4e0d\u5f00\u5173\u7cfb\u7684\u2014\u2014\u4e5f\u5c31\u662f\u8bf4\uff0c\u9053\u5fb7\u662f\u76f8\u5bf9\u7684\uff0c\u4eba\u7c7b\u662f\u9053\u5fb7\u7684\u53d1\u660e\u8005\u800c\u975e\u53d1\u73b0\u8005\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET6ick0ibcAEyeNxl82IfesMicbv3BR3E96XEky4osJugeFRFemuZqLGl1sicsC8aVYibhphBlVGC2fqOiaGg.jpeg",mdxType:"Pic"},'Karl Marx: "Morality ... have no history, no development; but men, developing their material production and their material intercourse, alter, along with this their real existence, their thinking and the products of their thinking."'),(0,l.kt)("p",null,"\u8fd9\u79cd\u8bba\u65ad\u6709\u5176\u6df1\u539a\u7684\u7406\u8bba\u57fa\u7840\uff0c\u4ece\u65af\u5bbe\u8bfa\u838e\u5230\u4f11\u8c1f\uff0c\u90fd\u8ba4\u4e3a\u4e8b\u7269\u6ca1\u6709\u672c\u8d28\u4e0a\u7684\u6076\u548c\u5584\u3002\u4f46\u6211\u4eec\u4e5f\u80fd\u591f\u63a5\u53d7\u8bb8\u591a\u54f2\u5b66\u5bb6\u5728\u63a8\u5bfc\u81ea\u5df1\u7684\u54f2\u5b66\u4f53\u7cfb\u65f6\uff0c\u5728\u8bba\u8bc1\u7684\u5f00\u5934\u5047\u8bbe\u4e00\u7cfb\u5217\u201c\u4e0d\u8bc1\u81ea\u660e\u7684\u51c6\u5219\u201d\uff0c\u5e76\u7531\u6b64\u5f15\u51fa\u540e\u7eed\u7684\u7ed3\u8bba\uff1b\u8fd9\u4e9b\u516c\u7406\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u88ab\u79f0\u4f5c\u4ed6\u4eec\u7684\u7edd\u5bf9\u9053\u5fb7\u3002"),(0,l.kt)("p",null,"\u54f2\u5b66\u5bb6\u4eec\u901a\u8fc7\u6570\u79cd\u9014\u5f84\u5f97\u5230\u201c\u9053\u5fb7\u516c\u7406\u201d\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u54f2\u5b66\u5bb6\u8bc9\u8bf8\u5927\u81ea\u7136\uff08\u5b57\u9762\u610f\u4e49\uff09\uff0c\u4ece\u4e00\u4e9b\u81ea\u7136\u73b0\u8c61\u4e2d\u5f97\u5230\u666e\u4e16\u516c\u7406\u3002\u5176\u4e2d\u6211\u6700\u6709\u611f\u89e6\u7684\u5e94\u8be5\u662f\u300a\u81ea\u79c1\u7684\u57fa\u56e0\u300b\uff0c\u63d0\u51fa\u4e86\u4eba\u7c7b\u7684\u4e00\u5207\u9053\u5fb7\u4e0e\u6cd5\u5f8b\u90fd\u662f\u4e3a\u4e86\u57fa\u56e0\u7684\u4fdd\u5b58\u4e0e\u5ef6\u7eed\u3002\u6211\u66fe\u7ecf\u548c\u4e00\u4e2a\u4eba\u6709\u8fc7\u4e00\u6bb5\u4e89\u8fa9\uff0c\u4ed6\u628a\u300a\u81ea\u79c1\u7684\u57fa\u56e0\u300b\u5949\u4e3a\u572d\u81ec\uff0c\u5374\u4e0d\u627f\u8ba4\u5b58\u5728\u7edd\u5bf9\u7684\u5bf9\u9519\u5584\u6076\u2014\u2014\u8fd9\u5e94\u8be5\u662f\u4ed6\u8fd8\u672a\u7406\u6e05\u300a\u81ea\u79c1\u7684\u57fa\u56e0\u300b\u6240\u6697\u793a\u7684\u54f2\u5b66\u3002\u4f46\u6211\u4e2a\u4eba\u4e0d\u540c\u610f\u7528\u81ea\u7136\u7684\u6cd5\u5219\u6765\u5916\u63a8\u4eba\u7c7b\u7684\u6cd5\u5219\uff0c\u56e0\u4e3a\u4eba\u7c7b\u9053\u5fb7\u5e76\u975e\u4e3a\u4e86\u6a21\u4eff\u81ea\u7136\uff0c\u800c\u5e38\u5e38\u662f\u4e3a\u4e86\u9650\u5236\u81ea\u7136\uff08\u7528\u5f17\u6d1b\u4f0a\u5fb7\u7684\u8bdd\uff0c\u5373\u201c\u672c\u6211\u201d\uff09\u3002\u540c\u65f6\uff0c\u201c\u4e8b\u60c5\u662f\u600e\u6837\u201d\u8fd9\u79cd\u63cf\u8ff0\u6027 (descriptive) \u7684\u65ad\u8a00\u4e5f\u5bf9\u4e8e\u201c\u4e8b\u7269\u5e94\u662f\u600e\u6837\u201d\u7684\u89c4\u8303\u6027 (normative) \u8ba8\u8bba\u6beb\u65e0\u4f5c\u7528\u3002"),(0,l.kt)("p",null,"\u8bb8\u591a\u653f\u6cbb\u54f2\u5b66\u5bb6\u8bc9\u8bf8\u7406\u6027\uff0c\u4ece\u201c\u81ea\u7136\u72b6\u6001\u201d\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b58\u5728\u653f\u5e9c\u4e0e\u6cd5\u5f8b\u7684\u4eba\u7c7b\u793e\u4f1a\u51fa\u53d1\uff0c\u63a2\u8ba8\u4eba\u7c7b\u7684\u9053\u5fb7\u7cfb\u7edf\u3002\u6bd4\u5982\u7ea6\u7ff0\xb7\u6d1b\u514b\u5c31\u8ba4\u4e3a\u81ea\u7136\u72b6\u6001\u4e0b\u7684\u4eba\u7c7b\u4f1a\u672c\u80fd\u5730\u4fdd\u62a4\u4e2a\u4eba\u7684\u751f\u547d\u3001\u8d22\u4ea7\u4e0e\u5e78\u798f\uff0c\u5e76\u5efa\u7acb\u793e\u4f1a\u5171\u540c\u4f53\u6765\u66f4\u597d\u5730\u670d\u52a1\u8fd9\u4e00\u76ee\u6807\u3002\u5f53\u653f\u5e9c\u7684\u653f\u4ee4\u4e0d\u80fd\u591f\u6ee1\u8db3\u4e2a\u4eba\u7684\u671f\u671b\u65f6\uff0c\u516c\u6c11\u5c31\u6709\u6743\u5229\u901a\u8fc7\u8fdd\u6297\u6cd5\u5f8b\u3001\u53d1\u52a8\u9769\u547d\u7b49\u65b9\u6cd5\u6765\u91cd\u5851\u5171\u540c\u4f53\u3002\u56e0\u6b64\u4ed6\u663e\u7136\u662f\u81ea\u7136\u6cd5\u7684\u652f\u6301\u8005\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET6ick0ibcAEyeNxl82IfesMicbvq3rbiazia3m7x5aJ9vRuH92CBIlvCbicObWZMmm8jrgic1Pv1SBNPXibaicg.jpeg",mdxType:"Pic"},'John Locke: "No one ought to harm another in his life, liberty, and or property."'),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u6709\u5b97\u6559\u80cc\u666f\u7684\u54f2\u5b66\u5bb6\u5219\u4ece\u6559\u4e49\u4e2d\u603b\u7ed3\u201c\u795e\u6cd5\u201d\uff0c\u300a\u5b89\u63d0\u6208\u6d85\u300b\u5c31\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("p",null,"\u4f46\u5728\u53e6\u5916\u4e00\u65b9\uff0c\u5b9e\u8bc1\u6cd5\u6d3e\u5219\u53cd\u5bf9\u5148\u9a8c\u7684\u7406\u5ff5\u7684\u5b58\u5728\u3002\u4ed6\u4eec\u8ba4\u4e3a\u4ef7\u503c\u662f\u4e2d\u7acb\u7684\uff0c\u4e0d\u5b58\u5728\u7edd\u5bf9\u7684\u5584\u548c\u6076\uff0c\u56e0\u6b64\u81ea\u7136\u6cd5\u7814\u7a76\u7684\u201c\u5e94\u7136\u6cd5\u201d\u662f\u865a\u65e0\u7f25\u7f08\u7684\uff0c\u65e0\u610f\u4e49\u7684\uff0c\u800c\u53ea\u6709\u73b0\u5b58\u7684\u201c\u5b9e\u7136\u6cd5\u201d\u624d\u662f\u6709\u7814\u7a76\u4ef7\u503c\u7684\u3002\u4ed6\u4eec\u53ea\u5173\u5fc3\u6cd5\u5f8b\u7cfb\u7edf\u662f\u5426\u81ea\u6d3d\uff0c\u662f\u5426\u80fd\u589e\u8fdb\u793e\u4f1a\u7684\u798f\u7949\u4e0e\u5feb\u4e50\u3002\u201c\u589e\u8fdb\u5927\u591a\u6570\u4eba\u7684\u5feb\u4e50\u201d\u2014\u2014\u8fd9\u79cd\u8bf4\u6cd5\u4fbf\u662f\u529f\u5229\u4e3b\u4e49\uff0c\u529f\u5229\u4e3b\u4e49\u7684\u63d0\u51fa\u8005\u8fb9\u6c81\uff0c\u5f53\u7136\u4e5f\u662f\u5b9e\u8bc1\u6cd5\u6d3e\u7684\u7f14\u9020\u8005\u4e4b\u4e00\u3002\u5728\u5b9e\u8bc1\u6cd5\u5b66\u5bb6\u5fc3\u4e2d\uff0c\u6cd5\u5f8b\u662f\u4e0d\u8bc1\u81ea\u660e\u7684\uff0c\u6216\u8005\u8bf4\u662f\u81ea\u6211\u8bc1\u660e\u7684\uff0c\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55\u5176\u4ed6\u7684\u7406\u8bba\uff0c\u800c\u662f\u81ea\u6210\u4e00\u5957\u7406\u8bba\uff0c\u7531\u653f\u5e9c\u7684\u5f3a\u5236\u529b\u5f97\u5230\u4fdd\u969c\u3002"),(0,l.kt)("p",null,"\u5728\u300a\u5b89\u63d0\u6208\u6d85\u300b\u4e2d\uff0c\u7d22\u798f\u514b\u52d2\u65af\u663e\u7136\u8868\u8fbe\u4e86\u5bf9\u5b89\u63d0\u6208\u6d85\u7684\u540c\u60c5\u4e0e\u5bf9\u514b\u745e\u7fc1\u4e3b\u5f20\u7684\u53cd\u5bf9\u3002\u4ed6\u501f\u76f2\u773c\u5148\u77e5\u5fd2\u745e\u897f\u963f\u65af\uff08Tiresias\uff0c\u897f\u65b9\u6587\u5316\u4e2d\u4e00\u4e2a\u4f20\u5947\u7684\u5f62\u8c61\uff0c\u300a\u4fc4\u72c4\u6d66\u65af\u738b\u300b\u4e2d\uff0c\u6b63\u662f\u4ed6\u544a\u8bc9\u4fc4\u72c4\u6d66\u65af\u738b\u662f\u56fd\u738b\u81ea\u5df1\u6740\u6b7b\u4e86\u5148\u738b\uff09\u4e4b\u53e3\uff0c\u4f20\u8fbe\u4e86\u795e\u660e\u5bf9\u514b\u745e\u7fc1\u7684\u4e0d\u6ee1\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"I tell you, Creon, you yourself have brought",(0,l.kt)("br",{parentName:"p"}),"\n","This new calamity upon us.",(0,l.kt)("br",{parentName:"p"}),"\n","Our hearths and altars",(0,l.kt)("br",{parentName:"p"}),"\n","Are stained with the corruption of dogs and carrion birds",(0,l.kt)("br",{parentName:"p"}),"\n","That glut themselves on the corpse of Oedipus\u2019 son."),(0,l.kt)("p",{parentName:"blockquote"},"Antigone, Scene V")),(0,l.kt)("p",null,"\u6700\u7ec8\uff0c\u514b\u745e\u7fc1\u4e3a\u81ea\u5df1\u85d0\u89c6\u795e\u660e\uff0c\u521b\u7acb\u6076\u6cd5\u7684\u9a84\u77dc\u4ed8\u51fa\u4e86\u59bb\u513f\u53cc\u4ea1\u7684\u4ee3\u4ef7\u3002\u53ef\u89c1\u7d22\u798f\u514b\u52d2\u65af\u5bf9\u4e8e\u201c\u6076\u6cd5\u201d\u7684\u6392\u65a5\uff0c\u8ba4\u4e3a\u521b\u7acb\u6076\u6cd5\u7684\u9886\u4e3b\u662f\u50b2\u6162 (arrogant) \u800c\u6e0e\u795e\u7684\uff0c\u53cd\u886c\u51fa\u5b89\u63d0\u6208\u6d85\u8ffd\u6c42\u201c\u795e\u6cd5\u201d\u7684\u4f1f\u5927\u3002"),(0,l.kt)("p",null,"\u7136\u800c\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\u4e0d\u5b58\u5728\u8fd9\u6837\u4e00\u4e2a\u4e3e\u5934\u4e09\u5c3a\u7684\u795e\u660e\uff0c\u65f6\u523b\u80fd\u77eb\u6b63\u6076\u6cd5\uff0c\u5f18\u626c\u5584\u6cd5\uff0c\u8fd9\u4e5f\u4f7f\u5f97\u5b9e\u8bc1\u6cd5\u7cfb\u867d\u7136\u66f4\u52a0\u6613\u4e8e\u5b9e\u65bd\u800c\u7a33\u5b9a\u53ef\u9760\uff0c\u5374\u7f3a\u5c11\u4e86\u53cd\u601d\u7684\u6210\u5206\u3002\u5b9e\u8bc1\u6cd5\u4e3b\u5f20\u201c\u6076\u6cd5\u4ea6\u6cd5\u201d\uff0c\u53ea\u8981\u6cd5\u5f8b\u662f\u7531\u653f\u5e9c\u9881\u5e03\u7684\uff0c\u4fbf\u5e94\u5f53\u88ab\u516c\u6c11\u9075\u5b88\uff0c\u5374\u4e0d\u53bb\u7ec6\u8fa8\u6cd5\u6761\u672c\u8eab\u4ee3\u8868\u7684\u5584\u6076\u3002\u4e00\u4e2a\u6781\u7aef\u7684\u4f8b\u5b50\uff1a\u4e8c\u6218\u4e2d\uff0c\u7eb3\u7cb9\u5fb7\u56fd\u7acb\u6cd5\u8feb\u5bb3\u72b9\u592a\u4eba\uff0c\u8bb8\u591a\u5b9e\u8bc1\u6cd5\u6d3e\u7684\u6cd5\u5b98\u5bf9\u6b64\u5374\u4e0d\u4ee5\u4e3a\u7136\uff0c\u7167\u4f8b\u6267\u884c\uff0c\u6218\u540e\u5ba1\u5224\u65f6\u4e5f\u96be\u4ee5\u4f5c\u51fa\u53cd\u601d\uff0c\u56e0\u4e3a\u4ed6\u4eec\u8ba4\u4e3a\u9053\u5fb7\u548c\u6cd5\u5f8b\u662f\u5b8c\u5168\u65e0\u5173\u7684\uff0c\u201c\u5e94\u7136\u201d\u7684\u6cd5\u5f8b\u4e0d\u80fd\u5f71\u54cd\u201c\u5b9e\u7136\u201d\u7684\u6cd5\u5f8b\u3002"),(0,l.kt)("p",null,"\u62c9\u5fb7\u5e03\u9c81\u8d6b (Radbruch) \u66fe\u7ecf\u4e5f\u662f\u8fd9\u4e00\u6d3e\u7684\u4e00\u5458\uff0c\u4f46\u5728\u6218\u540e\u610f\u8bc6\u5230\u4e86\u8fd9\u79cd\u505a\u6cd5\u7684\u8352\u8c2c\u540e\u679c\uff0c\u56e0\u6b64\u63d0\u51fa\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u62c9\u5fb7\u5e03\u9c81\u8d6b\u516c\u5f0f"),"\uff0c\u5c1d\u8bd5\u8c03\u548c\u81ea\u7136\u6cd5\u548c\u5b9e\u8bc1\u6cd5\u3002\u4ed6\u8bf4\uff0c\u7ef4\u6301\u5b9e\u5728\u6cd5\u7684\u53ef\u9760\u6027\u5728\u5927\u591a\u6570\u65f6\u5019\u5e94\u5f53\u8d85\u8d8a\u5bf9\u6b63\u4e49\u7684\u8ffd\u6c42\uff0c\u9664\u975e\u6cd5\u5f8b\u4e0e\u6b63\u4e49\u7684\u8fdd\u80cc\u8fbe\u5230\u4e86\u4e0d\u53ef\u63a5\u53d7\u7684\u7a0b\u5ea6\u3002\u6b64\u65f6\uff0c\u8fd9\u6761\u6cd5\u5f8b\u5c31\u662f\u201c\u9519\u8bef\u7684\u6cd5\u5f8b\u201d\uff0c\u800c\u4e0d\u6210\u4e3a\u6cd5\u5f8b\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET6ick0ibcAEyeNxl82IfesMicbvUR0iaNULvwnLSgyP5CCTToIkunicMFAn62giaTq0jauBgPTnpEq1tkHtA.jpeg",mdxType:"Pic"},'Gustav Radbruch: "Law, even positive law, cannot be defined otherwise than as a rule, that is precisely intended to serve justice."'),(0,l.kt)("p",null,"\u4f46\u5728\u6211\u770b\u6765\uff0c\u8fd9\u4e0d\u8fc7\u662f\u5b9e\u8bc1\u6cd5\u5411\u81ea\u7136\u6cd5\u7684\u4e00\u6b21\u59a5\u534f\uff0c\u56e0\u4e3a\u5b83\u5b9e\u9645\u4e0a\u63a5\u53d7\u4e86\u201c\u6b63\u4e49\u201d\u5728\u6cd5\u5f8b\u4e2d\u7684\u5b58\u5728\uff0c\u5e76\u4ee5\u6b64\u4e3a\u51c6\u7ef3\u8861\u91cf\u6cd5\u5f8b\uff0c\u66f4\u52a0\u575a\u5b9e\u4e86\u81ea\u7136\u6cd5\u7684\u5730\u4f4d\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u4e3a\u6570\u5b66\u7684\u516c\u7406\u5316\u7cfb\u7edf\u6240\u7740\u8ff7\u7684\u4eba\uff0c\u6211\u7684\u76f4\u89c9\u8ba9\u6211\u503e\u5411\u4e8e\u5148\u9a8c\u9053\u5fb7\u7684\u5b58\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u63a8\u5bfc\u6570\u5b66\u5b9a\u7406\u4e00\u6837\u63a8\u5bfc\u9053\u5fb7\u7684\u5b9a\u7406\u3002\u8fd9\u79cd\u7406\u8bba\u867d\u7136\u6ca1\u6709\u4ec0\u4e48\u4e8b\u5b9e\u7684\u8bc1\u636e\uff08\u4e8b\u5b9e\u4e0a\uff0c\u4ece\u6f14\u5316\u8bba\u7684\u89d2\u5ea6\uff0c\u66f4\u503e\u5411\u4e8e\u8ba4\u4e3a\u9053\u5fb7\u7406\u5ff5\u662f\u540e\u9a8c\u7684\uff09\uff0c\u5374\u4ee4\u4eba\u7740\u8ff7\u3002\u60f3\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u51e0\u4e2a\u57fa\u7840\u7684\u7406\u5ff5\uff0c\u6bd4\u5982\u201c\u4e0d\u5f97\u4f24\u5bb3\u4ed6\u4eba\u201d\uff0c\u201c\u79c1\u4eba\u8d22\u4ea7\u4e0d\u5f97\u4fb5\u72af\u201d\u51fa\u53d1\uff0c\u5c31\u63a8\u5bfc\u51fa\u6574\u4e2a\u9053\u5fb7\u4f53\u7cfb\u3001\u6cd5\u5f8b\u4f53\u7cfb\uff0c\u5e76\u4e14\u4fdd\u8bc1\u8fd9\u6837\u5f97\u5230\u7684\u6cd5\u5f8b\u662f\u5b8c\u5168\u53ef\u9760\u7684\uff01\u867d\u7136\u73b0\u6709\u7684\u54f2\u5b66\u7406\u8bba\u53ef\u80fd\u8fd8\u65e0\u6cd5\u8fbe\u5230\u8fd9\u4e00\u76ee\u6807\uff0c\u4f46\u6211\u613f\u610f\u76f8\u4fe1\u201c\u666e\u4e16\u771f\u7406\u201d\u7684\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u56de\u5230\u5f00\u5934\u7684\u6848\u4f8b\u3002\u6211\u5bf9\u4e8e\u4e00\u4e9b\u540c\u5b66\u8ba4\u4e3a\u201c\u9053\u5fb7\u662f\u4efb\u610f\u7684\uff0c\u53ef\u88ab\u6539\u53d8\u7684\u201d\u89c2\u70b9\u4e0d\u6562\u82df\u540c\uff0c\u56e0\u4e3a\u9053\u5fb7\u662f\u7edd\u5bf9\u7684\uff0c\u800c\u6cd5\u5f8b\u624d\u662f\u53ef\u80fd\u51fa\u9519\u7684\u4e00\u65b9\u3002\u5c24\u5176\u662f\u5728\u8fd9\u4e24\u4e2a\u6848\u4ef6\u4e2d\uff0c\u4e0d\u5b58\u5728\u6a21\u7cca\u7684\u8fb9\u754c\uff1a\u4fdd\u8bc1\u5bb6\u5ead\u7684\u5e78\u798f\u3001\u4e2a\u4eba\u7684\u5c0a\u4e25\u663e\u7136\u662f\u6211\u4eec\u5e0c\u671b\u8fbe\u5230\u7684\u76ee\u7684\u3002\u5f53\u6cd5\u5f8b\u7684\u624b\u6bb5\u65e0\u6cd5\u8fbe\u6210\u9053\u5fb7\u7684\u76ee\u7684\u65f6\uff0c\u56fa\u6301\u73b0\u6709\u7684\u624b\u6bb5\uff0c\u53bb\u62a8\u51fb\u76ee\u7684\u7684\u53ef\u8fbe\u6027\uff0c\u5374\u4e0d\u53bb\u601d\u8003\u5982\u4f55\u6539\u53d8\u624b\u6bb5\u4ee5\u66f4\u6709\u6548\u5730\u8fbe\u6210\u76ee\u7684\uff0c\u65e0\u7591\u662f\u8352\u8c2c\u7684\u3002"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u628a\u4e00\u4e2a\u5e78\u798f\u5bb6\u5ead\u7684\u4e08\u592b\u9001\u8fdb\u76d1\u72f1\uff0c\u7ed9\u4e00\u4e2a\u6df1\u7231\u7740\u59bb\u5b50\uff0c\u4e3a\u4e86\u5979\u8d74\u6c64\u8e48\u706b\u7684\u4e08\u592b\u5b89\u4e0a\u201c\u6740\u4eba\u72af\u201d\u7684\u540d\u53f7\uff0c\u6211\u4eec\u7a76\u7adf\u5728\u4f20\u9012\u600e\u6837\u7684\u4ef7\u503c\u89c2\uff1f\u8fd9\u662f\u5426\u662f\u7acb\u6cd5\u8005\u6240\u5e0c\u671b\u770b\u5230\u7684\uff1f\u7528\u6cd5\u5f8b\u6765\u8bc1\u660e\u6cd5\u5f8b\u662f\u8352\u8c2c\u7684\u2014\u2014\u6211\u4eec\u5bf9\u4e8e\u6cd5\u5f8b\u7684\u4fe1\u670d\u4e0d\u4ec5\u6765\u81ea\u4e8e\u653f\u5e9c\u7684\u5f3a\u5236\u529b\uff0c\u66f4\u6765\u81ea\u4e8e\u6211\u4eec\u5bf9\u6cd5\u5f8b\u6240\u4ee3\u8868\u7684\u4ef7\u503c\u89c2\u4e0e\u9053\u5fb7\u7684\u8ba4\u540c\u3002\u6cd5\u5f8b\u5fc5\u987b\u8981\u7531\u9053\u5fb7\u6765\u8bc1\u660e\uff0c\u56e0\u6b64\u6076\u6cd5\u975e\u6cd5\u3002\u5982\u679c\u6cd5\u5f8b\u6c38\u8fdc\u88ab\u4e00\u4e1d\u4e0d\u82df\u5730\u6267\u884c\uff0c\u6ca1\u6709\u8d28\u7591\u4e0e\u89e3\u91ca\u7684\u4f59\u5730\uff0c\u90a3\u4e48\u9053\u5fb7\u5c06\u65e0\u6cd5\u843d\u5b9e\uff0c\u793e\u4f1a\u5c06\u65e0\u6cd5\u8fdb\u6b65\uff0c\u6cd5\u5f8b\u81ea\u5df1\u7684\u610f\u4e49\u4e5f\u5c06\u53d8\u5f97\u6a21\u7cca\u3002"),(0,l.kt)(i.Z,{src:"/img/./docs/Humanities/law/JGibibkelET6ick0ibcAEyeNxl82IfesMicbvc2GwKkE0cGkr4xKVDm4sdQuQEiatxuC8h7ajiblrFHPcg4UWwj6KkZyw.jpeg",mdxType:"Pic"},'\u7f8e\u56fd\u8054\u90a6\u6700\u9ad8\u6cd5\u9662\u7684\u5927\u95e8\uff0c\u5927\u5927\u5730\u523b\u7740"Equal Justice Under Law."'))}k.isMDXComponent=!0}}]);