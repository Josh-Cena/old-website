(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[1727],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4973:function(e,t,r){"use strict";r.d(t,{Z:function(){return p},I:function(){return s}});var n=r(7294),a=/{\w+}/g,o="{}";function l(e,t){var r=[],l=e.replace(a,(function(e){var a=e.substr(1,e.length-2),l=null==t?void 0:t[a];if(void 0!==l){var i=n.isValidElement(l)?l:String(l);return r.push(i),o}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?l.split(o).reduce((function(e,t,n){var a;return e.concat(t).concat(null!==(a=r[n])&&void 0!==a?a:"")}),""):l.split(o).reduce((function(e,t,a){return[].concat(e,[n.createElement(n.Fragment,{key:a},t,r[a])])}),[])}function i(e){var t=e.children,r=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return l(t,r)}var u=r(4644);function c(e){var t,r=e.id,n=e.message;return null!==(t=u[null!=r?r:n])&&void 0!==t?t:n}function s(e,t){var r,n=e.message;return l(null!==(r=c({message:n,id:e.id}))&&void 0!==r?r:n,t)}function p(e){var t,r=e.children,a=e.id,o=e.values;if("string"!=typeof r)throw console.warn("Illegal <Translate> children",r),new Error("The Docusaurus <Translate> component only accept simple string values");var l=null!==(t=c({message:r,id:a}))&&void 0!==t?t:r;return n.createElement(i,{values:o},l)}},8322:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=r(4973);function o(e){var t=e.frontMatter,r=t.date,o=t.link;return r||o?n.createElement("div",{className:"alert alert--info margin-bottom--md",role:"contentinfo"},r&&n.createElement(a.Z,{id:"docMetadataBanner.firstPublished",values:{date:n.createElement("b",null,r.toLocaleDateString("zh-Hans"))}},"First published on {date}."),o&&n.createElement("a",{href:o},n.createElement(a.Z,{id:"docMetadataBanner.sourceLink"},"Source link"))):null}},796:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.src;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("img",{src:r}),n.createElement("p",{style:{color:"gray",fontSize:"small"}},t))}},3599:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=r(796),i=r(8322),u={id:"dream",title:"\u5173\u4e8e\u68a6\u5883\u3001\u5760\u843d\u4e0e\u73b0\u5b9e",sidebar_label:"About dreams, fall, and reality",date:new Date("2021-01-02T00:00:00.000Z"),link:"https://mp.weixin.qq.com/s/gLPwsms14ZAF6iGfbsgiCw"},c=void 0,s={unversionedId:"Stories/dream",id:"Stories/dream",isDocsHomePage:!1,title:"\u5173\u4e8e\u68a6\u5883\u3001\u5760\u843d\u4e0e\u73b0\u5b9e",description:"\u5f53\u5927\u5bb6\u90fd\u4ee5\u4e3a\u6211\u4e4b\u524d\u7684\u4e09\u7bc7\u6587\u7ae0\u53ea\u662f\u7eaf\u6c34\u6587\u65f6\uff0c\u6211\u6253\u7b97\u7ee7\u7eed\u628a\u8fd9\u4e2a\u8bdd\u9898\u300a\u9648\u610f\u975e\u7684\u968f\u8c08\u300b\u5199\u4e0b\u53bb\u3002\uff08\u6bd5\u7adf\u9694\u58c1 Josh Cena \u4e5f\u6709\u4e00\u4e2a\u968f\u8c08\uff0c\u4e0d\u80fd\u843d\u540e\u554a\uff09",source:"@site/docs/Stories/8-dream.md",sourceDirName:"Stories",slug:"/Stories/dream",permalink:"/docs/Stories/dream",version:"current",sidebarPosition:8,frontMatter:{id:"dream",title:"\u5173\u4e8e\u68a6\u5883\u3001\u5760\u843d\u4e0e\u73b0\u5b9e",sidebar_label:"About dreams, fall, and reality",date:"2021-01-02T00:00:00.000Z",link:"https://mp.weixin.qq.com/s/gLPwsms14ZAF6iGfbsgiCw"},sidebar:"docs",previous:{title:"Red pills for Christmas",permalink:"/docs/Stories/red-pills"},next:{title:"About blood, flames, and life",permalink:"/docs/Stories/blood"}},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{frontMatter:u,mdxType:"DocMetadataBanner"}),(0,o.kt)("p",null,"\u5f53\u5927\u5bb6\u90fd\u4ee5\u4e3a\u6211\u4e4b\u524d\u7684\u4e09\u7bc7\u6587\u7ae0\u53ea\u662f\u7eaf\u6c34\u6587\u65f6\uff0c\u6211\u6253\u7b97\u7ee7\u7eed\u628a\u8fd9\u4e2a\u8bdd\u9898\u300a\u9648\u610f\u975e\u7684\u968f\u8c08\u300b\u5199\u4e0b\u53bb\u3002\uff08\u6bd5\u7adf\u9694\u58c1 Josh Cena \u4e5f\u6709\u4e00\u4e2a\u968f\u8c08\uff0c\u4e0d\u80fd\u843d\u540e\u554a\uff09"),(0,o.kt)("p",null,"\u6211\u4f1a\u5206\u4eab\u4e00\u4e9b\u6211\u5199\u4f5c\u4e2d\u7684\u60f3\u6cd5\u4ee5\u53ca\u5e38\u7528\u7684\u610f\u8c61\uff0c\u5c1d\u8bd5\u89e3\u6784\u5b83\u4eec\u7684\u542b\u4e49\u2014\u2014\u800c\u5176\u4ed6\u65f6\u5019\uff0c\u6211\u53ea\u662f\u8111\u6d1e\u7a81\u53d1\uff0c\u60f3\u8bb2\u4e00\u70b9\u9b54\u5e7b\u7684\u5c0f\u6545\u4e8b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Had I the heavens\u2019 embroidered cloths,",(0,o.kt)("br",{parentName:"p"}),"\n","Enwrought with golden and silver light,",(0,o.kt)("br",{parentName:"p"}),"\n","The blue and the dim and the dark cloths",(0,o.kt)("br",{parentName:"p"}),"\n","Of night and light and the half light,",(0,o.kt)("br",{parentName:"p"}),"\n","I would spread the cloths under your feet:",(0,o.kt)("br",{parentName:"p"}),"\n","But I, being poor, have only my dreams;",(0,o.kt)("br",{parentName:"p"}),"\n","I have spread my dreams under your feet;",(0,o.kt)("br",{parentName:"p"}),"\n","Tread softly because you tread on my dreams."),(0,o.kt)("p",{parentName:"blockquote"},"William Butler Yeats\u2014He Wishes for the Cloths of Heaven")),(0,o.kt)("p",null,"\u6211\u53d1\u73b0\u6211\u5341\u5206\u559c\u6b22\u5199\u68a6\u5883\u3002\u4ece\u521d\u4e2d\u7684\u5341\u4f59\u7bc7\u79d1\u5e7b\u5c0f\u8bf4\u5f00\u59cb\uff0c\u5230\u516c\u4f17\u53f7\u4e0a\u66fe\u53d1\u8fc7\u7684\u6587\u7ae0\uff0c\u51e0\u4e4e\u6ca1\u6709\u4e00\u7bc7\u4e0d\u51fa\u73b0\u4e3b\u89d2\u7684\u201c\u68a6\u5883\u201d\u3002"),(0,o.kt)("p",null,"\u6211\u7684\u4eba\u7269\u4eec\u5927\u90fd\u7f04\u9ed8\u800c\u5b64\u72ec\uff0c\u4ed6\u4eec\u7684\u6cea\u6c34\u3001\u6b22\u7b11\u3001\u6012\u706b\u3001\u6e29\u67d4\uff0c\u90fd\u6df1\u6df1\u5730\u538b\u6291\u5728\u5fc3\u5e95\uff0c\u4ece\u672a\u5411\u4eba\u503e\u8bc9\u3002\u800c\u68a6\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u8da3\u7684\u5de5\u5177\uff0c\u7528\u9690\u55bb\u7684\u65b9\u5f0f\uff0c\u8ba9\u6211\u4eec\u7aa5\u63a2\u90a3\u4e9b\u5f62\u8c61\u6df1\u57cb\u5185\u5fc3\u7684\uff0c\u4ece\u672a\u793a\u4eba\u7684\u60c5\u611f\u4e0e\u6e34\u671b\u3002"),(0,o.kt)("p",null,"\u4eba\u7684\u5927\u8111\u662f\u5982\u6b64\u7cbe\u5de7\u800c\u4f1f\u5927\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u68a6\u4e2d\u6784\u5efa\u8d77\u4e00\u4e2a\u5b8c\u6574\u7684\u4e16\u754c\u3002\u6bcf\u4e00\u4e2a\u706b\u82b1\u88ab\u70b9\u71c3\uff0c\u6bcf\u4e00\u5e62\u9ad8\u697c\u62d4\u5730\u800c\u8d77\uff0c\u6bcf\u4e00\u4e2a\u4eba\u51fa\u73b0\u53c8\u6d88\u5931\uff0c\u90fd\u4ec5\u4ec5\u662f\u795e\u7ecf\u9012\u8d28\u7684\u4e00\u70b9\u53d8\u5316\uff0c\u51e0\u4e2a\u8109\u51b2\u7684\u6ce2\u52a8\u3002\u5728\u68a6\u4e2d\uff0c\u201c\u4eba\u201d\u4f5c\u4e3a\u4e2a\u4f53\u88ab\u65e0\u9650\u653e\u5927\uff0c\u201c\u6211\u201d\u5373\u662f\u8fd9\u4e2a\u4e16\u754c\uff0c\u201c\u6211\u201d\u8574\u542b\u4e8e\u4e00\u82b1\u4e00\u8349\u4e2d\u3002\u6bcf\u4e2a\u68a6\u89c1\u7684\u4eba\uff0c\u90fd\u662f\u201c\u6211\u201d\u3002"),(0,o.kt)("p",null,"\u4f60\u662f\u5426\u8bd5\u8fc7\u505a\u81ea\u5df1\u68a6\u5883\u7684\u6784\u5efa\u8005\uff0c\u800c\u4e0d\u662f\u4f53\u9a8c\u8005\uff1f\u4f60\u80fd\u5426\u521b\u9020\u51fa\u6570\u5341\u4e2a\u6d3b\u751f\u751f\u7684\u4eba\uff0c\u548c\u4ed6\u4eec\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5bf9\u8bdd\uff0c\u629a\u6478\u4ed6\u4eec\u7684\u8138\u988a\uff0c\u8046\u542c\u4ed6\u4eec\u7684\u6545\u4e8b\uff0c\u548c\u4ed6\u4eec\u4e00\u8d77\u5750\u4e0a\u4e00\u8f86\u51b2\u5411\u5915\u9633\u7684\u5409\u666e\u8f66\uff1f\u4f60\u80fd\u5426\u6784\u5efa\u51fa\u4e00\u4e2a\u969c\u788d\u91cd\u91cd\u7684\u5ba4\u5185\u7a7a\u95f4\uff0c\u5728\u5e73\u53f0\u95f4\u5954\u8dd1\u3001\u8df3\u8dc3\uff0c\u7ffb\u8d8a\u5404\u79cd\u680f\u6746\u4e0e\u56f4\u5899\uff1f\u4f60\u80fd\u5426\u5728\u51e0\u5e74\u4e2d\u53cd\u590d\u56de\u5230\u68a6\u4e2d\u7684\u540c\u4e00\u4e2a\u57ce\u5e02\uff0c\u63a2\u7d22\u5b83\u7684\u5404\u4e2a\u89d2\u843d\uff0c\u6bcf\u4e00\u5e62\u697c\u3001\u6bcf\u4e00\u5835\u5899\u3001\u6bcf\u4e00\u6761\u8def\uff1f\u53ea\u6709\u6b64\u65f6\uff0c\u4f60\u624d\u80fd\u611f\u53d7\u5230\u4eba\u7684\u5fc3\u7075\u65e0\u9650\u7684\u6f5c\u529b\u3002"),(0,o.kt)("p",null,"\u7136\u800c\u68a6\u7684\u5c3d\u5934\u603b\u662f\u9192\u6765\uff0c\u5c31\u50cf\u5408\u805a\u7684\u5c3d\u5934\u603b\u662f\u5206\u79bb\uff0c\u751f\u547d\u7684\u5c3d\u5934\u603b\u662f\u6b7b\u4ea1\u3002\u6709\u4e9b\u68a6\u88ab\u6211\u4eec\u79f0\u4f5c\u5669\u68a6\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u68a6\u4e2d\u98a4\u6817\u800c\u54ed\u6ce3\uff1b\u53e6\u4e00\u4e9b\u68a6\u6210\u4e3a\u5669\u68a6\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u68a6\u4e2d\u7b11\u5f97\u592a\u707f\u70c2\uff0c\u4ee5\u81f3\u4e8e\u5728\u9192\u6765\u65f6\u98a4\u6817\u800c\u54ed\u6ce3\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u9192\u6765\u603b\u662f\u8ba9\u4eba\u75db\u82e6\u7684\u3002"),(0,o.kt)("p",null,"\u53ef\u80fd\u6b63\u56e0\u5982\u6b64\uff0c\u68a6\u7684\u6700\u540e\u603b\u662f\u4e0b\u5760\u800c\u975e\u98de\u5347\uff0c\u597d\u50cf\u6211\u4eec\u6b63\u5728\u5815\u5165\u5730\u72f1\u800c\u975e\u5347\u4e0a\u5929\u5802\u3002"),(0,o.kt)(l.Z,{src:"/img/./docs/Stories/dream/JGibibkelET69KSYobCgBALSL5DmFHicXQ0QWuZyuHm9tkfIvR1O78FibXGqI7HZB8bAm7VSHbD1uHtT2yhZO7On2A.jpeg",mdxType:"Pic"}),(0,o.kt)("p",null,"\u5f53\u4f60\u4ece\u4e94\u5341\u5c42\u7684\u9ad8\u697c\u7834\u7a97\u800c\u51fa\uff0c\u98ce\u58f0\u5728\u8033\u8fb9\u547c\u5578\uff0c\u51b0\u51b7\u7684\u7a7a\u6c14\u5835\u4f4f\u4e86\u4f60\u7684\u9f3b\u5b50\u548c\u5634\uff0c\u538b\u8feb\u7740\u4f60\u7684\u80ba\uff0c\u6b7b\u4ea1\u4ece\u4e00\u7f15\u98d8\u6563\u5728\u7a7a\u4e2d\u7684\u98ce\uff0c\u53d8\u6210\u4e86\u4e00\u5757\u575a\u5b9e\u7684\u5730\u9762\uff0c\u773c\u524d\u7684\u4e8b\u7269\u6025\u5267\u653e\u5927\u2014\u2014\u4f60\u6b63\u5168\u901f\u649e\u4e0a\u53bb\uff0c\u53bb\u5f80\u53e6\u4e00\u4e2a\u4e16\u754c\u2014\u2014\u90a3\u4e2a\u4e16\u754c\u88ab\u79f0\u4f5c\u73b0\u5b9e\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u7a81\u7136\u6709\u4e00\u70b9\u8fdf\u7591\uff0c\u6709\u4e00\u70b9\u72b9\u8c6b\uff0c\u4f60\u53ef\u80fd\u5fd8\u4e86\u4f60\u79bb\u5f00\u7684\u7406\u7531\uff0c\u4e3a\u8fd1\u5728\u773c\u524d\u7684\u65b0\u751f\u611f\u5230\u5fd0\u5fd1\uff0c\u4f46\u4f60\u4ecd\u5728\u4e0b\u843d\uff0c\u6ca1\u6709\u56de\u53bb\u7684\u8def\u4e86\uff0c\u8fd9\u662f\u4e00\u8d9f\u5355\u7a0b\u8f66\uff0c\u4f60\u5df2\u7ecf\u4e0a\u4e86\u8f66\u3002"),(0,o.kt)("p",null,"\u4e8e\u662f\u4f60\u7741\u5f00\u4e86\u773c\u775b\uff0c\u6253\u91cf\u7740\u5468\u56f4\u90a3\u4e9b\u4f60\u89c9\u5f97\u65e0\u6bd4\u719f\u6089\u7684\u666f\u7269\u3002\u4e8e\u662f\u68a6\u89c1\u65e0\u9650\u5149\u660e\u7684\u9648\u610f\u975e\u9192\u6765\u4e86\uff0c\u8e0f\u4e0a\u82cd\u767d\u7684\u5730\u94c1\u7ad9\u53f0\u3002\u4e8e\u662f\u68a6\u89c1\u7130\u706b\u3001\u5929\u4f7f\u4e0e\u6240\u7231\u4e4b\u4eba\u7684\u7ea6\u7ff0\u9192\u6765\u4e86\uff0c\u5728\u96ea\u591c\u4e2d\u8e3d\u8e3d\u72ec\u884c\u3002\u7a76\u7adf\u662f\u6e29\u6696\u7684\u73b0\u5b9e\uff0c\u8fd8\u662f\u51b0\u51b7\u7684\u73b0\u5b9e\uff1f"),(0,o.kt)("p",null,"\u53c8\u6216\u8005\uff0c\u53ea\u662f\u53e6\u4e00\u4e2a\u65e0\u6bd4\u771f\u5b9e\u7684\u68a6\u5883\uff1f"))}m.isMDXComponent=!0}}]);