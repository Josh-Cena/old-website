"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[8592],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return v}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),v=i,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||o;return r?t.createElement(d,a(a({ref:n},s),{},{components:r})):t.createElement(d,a({ref:n},s))}));function v(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6742:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(3366),i=r(7294),o=r(3727),a=r(2263),u=r(3919),c=r(412),l=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,r,v=e.isNavLink,d=e.to,g=e.href,m=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,O=void 0===b||b,w=(0,t.Z)(e,p),j=(0,a.Z)().siteConfig,E=j.trailingSlash,k=j.baseUrl,P=(0,s.C)().withBaseUrl,C=(0,i.useContext)(l),T=d||g,S=(0,u.Z)(T),_=null==T?void 0:T.replace("pathname://",""),U=void 0!==_?(r=_,O&&function(e){return e.startsWith("/")}(r)?P(r):r):void 0;U&&S&&(U=(0,f.applyTrailingSlash)(U,{trailingSlash:E,baseUrl:k}));var x,Z=(0,i.useRef)(!1),I=v?o.OL:o.rU,A=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!A&&S&&null!=U&&window.docusaurus.prefetch(U),function(){A&&x&&x.disconnect()}}),[U,A,S]);var B=null!==(n=null==U?void 0:U.startsWith("#"))&&void 0!==n&&n,D=!U||!S||B;return U&&S&&!B&&!h&&C.collectLink(U),D?i.createElement("a",Object.assign({href:U},T&&!S&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(I,Object.assign({},w,{onMouseEnter:function(){Z.current||null==U||(window.docusaurus.preload(U),Z.current=!0)},innerRef:function(e){var n,r;A&&e&&S&&(n=e,r=function(){null!=U&&window.docusaurus.prefetch(U)},(x=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(n),x.disconnect(),r())}))}))).observe(n))},to:U||""},v&&{isActive:y,activeClassName:m}))}},4973:function(e,n,r){r.d(n,{Z:function(){return f},I:function(){return s}});var t=r(7294),i=/{\w+}/g,o="{}";function a(e,n){var r=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==n?void 0:n[i];if(void 0!==a){var u=t.isValidElement(a)?a:String(a);return r.push(u),o}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,n,t){var i;return e.concat(n).concat(null!==(i=r[t])&&void 0!==i?i:"")}),""):a.split(o).reduce((function(e,n,i){return[].concat(e,[t.createElement(t.Fragment,{key:i},n,r[i])])}),[])}function u(e){var n=e.children,r=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(n,r)}var c=r(7529);function l(e){var n,r=e.id,t=e.message;return null!==(n=c[null!=r?r:t])&&void 0!==n?n:t}function s(e,n){var r,t=e.message;return a(null!==(r=l({message:t,id:e.id}))&&void 0!==r?r:t,n)}function f(e){var n,r=e.children,i=e.id,o=e.values;if("string"!=typeof r)throw console.warn("Illegal <Translate> children",r),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(n=l({message:r,id:i}))&&void 0!==n?n:r;return t.createElement(u,{values:o},a)}},3919:function(e,n,r){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return i}})},4996:function(e,n,r){r.d(n,{C:function(){return o},Z:function(){return a}});var t=r(2263),i=r(3919);function o(){var e=(0,t.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var o=void 0===t?{}:t,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return n+r;var s=r.startsWith(n)?r:n+r.replace(/^\//,"");return l?e+s:s}(o,r,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var r=n.trailingSlash,t=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===t?o:(i=o,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,n,r){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return t(i).default}});var o=r(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return t(o).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},1645:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(7294);function i(e){var n=e.children,r=e.src;return t.createElement("figure",{style:{textAlign:"center"}},t.createElement("img",{src:r}),t.createElement("figcaption",{style:{color:"gray",fontSize:"small"}},n))}}}]);