(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[4808],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9526:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return c}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={title:"\u8fd0\u884c Laravel \u5e94\u7528",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["\u540e\u7aef"]},p={permalink:"/zh-Hans/blog/2021/03/25/laravel",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-3-25-laravel.md",title:"\u8fd0\u884c Laravel \u5e94\u7528",description:"\u6700\u8fd1\u6211\u9047\u5230\u4e86\u4e00\u4e2a Laravel \u9879\u76ee\uff1aSAM\uff0c\u5b83\u662f\u6211\u4eec\u793e\u56e2\u7684\u5386\u53f2\u9879\u76ee\u3002\u4f5c\u4e3a\u540e\u7aef\u7684\u7eaf\u65b0\u624b\uff0c\u6211\u5bf9\u5982\u4f55\u542f\u52a8\u5e94\u7528\u5b8c\u5168\u6ca1\u6709\u60f3\u6cd5\u3002",date:"2021-03-25T00:00:00.000Z",formattedDate:"2021\u5e743\u670825\u65e5",tags:[{label:"\u540e\u7aef",permalink:"/zh-Hans/blog/tags/\u540e\u7aef"}],readingTime:1.105,truncated:!0,prevItem:{title:"\u5343\u5f58\u6587",permalink:"/zh-Hans/blog/2021/04/01/zhi"},nextItem:{title:"\u9009\u62e9\u914d\u8272\u65b9\u6848",permalink:"/zh-Hans/blog/2021/03/15/color"}},i=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"\u914d\u7f6e\u73af\u5883",id:"\u914d\u7f6e\u73af\u5883",children:[]},{value:"\u914d\u7f6e\u6570\u636e\u5e93",id:"\u914d\u7f6e\u6570\u636e\u5e93",children:[]},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[]}],s={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u6211\u9047\u5230\u4e86\u4e00\u4e2a Laravel \u9879\u76ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Computerization/sam"},"SAM"),"\uff0c\u5b83\u662f\u6211\u4eec\u793e\u56e2\u7684\u5386\u53f2\u9879\u76ee\u3002\u4f5c\u4e3a\u540e\u7aef\u7684\u7eaf\u65b0\u624b\uff0c\u6211\u5bf9\u5982\u4f55\u542f\u52a8\u5e94\u7528\u5b8c\u5168\u6ca1\u6709\u60f3\u6cd5\u3002"),(0,l.kt)("p",null,"\u6211\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u662f\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"index.php")," \u6587\u4ef6\uff0c\u4f46\u8fd9\u53ea\u628a HTML \u6587\u4ef6\u8f93\u51fa\u5230\u4e86\u63a7\u5236\u53f0\u3002\u80af\u5b9a\u4e0d\u662f\u8fd9\u4e48\u5de5\u4f5c\u7684\u2014\u2014\u8fd9\u5c31\u50cf\u5728 Vue \u5e94\u7528\u91cc\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \u6587\u4ef6\u4e00\u6837\u3002\u4f60\u5f97\u5728 localhost \u4e0a\u771f\u7684\u5f00\u542f\u4e00\u4e2a HTTPS \u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("p",null,"\u56de\u5fc6 Vue \u662f\u5982\u4f55\u7528 yarn \u8fd0\u884c\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install\n$ yarn serve\n")),(0,l.kt)("p",null,"\u5728 Laravel \u91cc\uff0c\u4e8b\u60c5\u4e5f\u5dee\u4e0d\u591a\u3002\u4f7f\u7528\u7684\u5305\u7ba1\u7406\u5668\u662f ",(0,l.kt)("strong",{parentName:"p"},"composer"),"\uff0c\u6211\u6839\u636e",(0,l.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md#globally"},"\u8fd9\u91cc"),"\u7684\u6307\u793a\uff0c\u5168\u5c40\u5b89\u88c5\u4e86\u5b83\u3002\u63a5\u4e0b\u6765\uff0c\u53ef\u4ee5\u5b89\u88c5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"composer.json")," \u4e2d\u6307\u5b9a\u7684\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer --version\nComposer version 1.10.13 2020-09-09 11:46:34\n$ composer install\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u73af\u5883"},"\u914d\u7f6e\u73af\u5883"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u58f0\u660e\u73af\u5883\u3002\u8fd9\u662f\u524d\u7aef\u548c\u540e\u7aef\u9879\u76ee\u7684\u7b2c\u4e00\u4e2a\u5dee\u522b\u3002\u56e0\u4e3a\u524d\u7aef\u9879\u76ee\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u91cc\u7684\uff0c\u4f60\u4e0d\u7528\u62c5\u5fc3\u548c\u5916\u754c\u7684\u901a\u4fe1\u3002\uff08\u4f60\u6bd5\u7adf\u5904\u4e8e\u6c99\u76d2\u4e2d\uff0c\u6240\u6709\u4e1c\u897f\u90fd\u901a\u8fc7 URL \u83b7\u53d6\u3002\uff09\u4f46\u662f\u5728\u540e\u7aef\uff0c\u5e94\u7528\u9700\u8981\u548c\u670d\u52a1\u5668\u3001\u548c\u6570\u636e\u5e93\u3001\u548c\u5404\u79cd\u8d44\u6e90\u8fde\u63a5\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u9879\u76ee\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u5e94\u7528\u73af\u5883\u548c\u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"Laravel \u5305\u542b\u4e86\u4e00\u4e2a\u793a\u4f8b\u73af\u5883\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".env.example"),"\u3002\u628a\u5b83\u590d\u5236\u4e00\u4efd\uff0c\u91cd\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u3002\u7136\u540e\u4fee\u6539\u5f00\u5934\u7684\u4e24\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env" {1}',title:'".env"',"{1}":!0},"APP_NAME=sam\nAPP_ENV=local\nAPP_KEY=\nAPP_DEBUG=true\nAPP_LOG_LEVEL=debug\nAPP_URL=http://localhost\n")),(0,l.kt)("p",null,"\u7a7a\u7740\u7684\u4e00\u4e2a\u5b57\u6bb5\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"APP_KEY"),"\uff0c\u8fd9\u662f\u7528\u4e8e\u5404\u79cd\u52a0\u5bc6\u670d\u52a1\u7684\u3002\u7528 artisan \u751f\u6210\u4e00\u4e2a\u79d8\u94a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan key:generate\nApplication key [base64:yPl2zp1+ZCZ1/7TK8QEM1uQTzOetXp8pl+/bTnbLAuw=] set successfully.\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u5e93"},"\u914d\u7f6e\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u6211\u4eec\u628a\u76ee\u5149\u653e\u5230\u6570\u636e\u5e93\u90e8\u5206\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".env" {4-6}',title:'".env"',"{4-6}":!0},"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=sam\nDB_USERNAME=root\nDB_PASSWORD=[the root password]\n")),(0,l.kt)("p",null,"\u6211\u77e5\u9053\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6211\u6700\u597d\u4e0d\u8981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," \u6765\u7ba1\u7406\u6570\u636e\u5e93\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u6709\u5b89\u5168\u9690\u60a3\uff0c\u4f46\u6211\u4eec\u53cd\u6b63\u662f\u5728\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u6240\u4ee5\u6211\u51b3\u5b9a\u4e00\u5207\u4ece\u7b80\u3002\u767b\u5f55 MySQL\uff0c\u521b\u5efa\u6570\u636e\u5e93\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mysql -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 38\nServer version: 8.0.23 Homebrew\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> CREATE DATABASE sam;\nQuery OK, 1 row affected (0.01 sec)\n\nmysql> quit;\nBye\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u81ea\u52a8\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"migrate")," \u521b\u5efa\u6570\u636e\u8868\u683c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan migrate\nMigration table created successfully.\nMigrating: 2014_10_12_000000_create_users_table\nMigrated:  2014_10_12_000000_create_users_table\n...\n")),(0,l.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u542f\u52a8 PHP \u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ php artisan serve\n")))}c.isMDXComponent=!0}}]);