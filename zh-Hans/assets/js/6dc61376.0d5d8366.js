(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{110:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return m})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return c}));var n=t(3),s=t(7),r=(t(0),t(164)),m={title:"Random thoughts on a new programming language",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["compiler"]},p={permalink:"/zh-Hans/blog/2021/04/25/lang",source:"@site/blog/2021-4-25-lang.md",title:"Random thoughts on a new programming language",description:"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python.",date:"2021-04-25T00:00:00.000Z",formattedDate:"2021\u5e744\u670825\u65e5",tags:[{label:"compiler",permalink:"/zh-Hans/blog/tags/compiler"}],readingTime:3.255,truncated:!0,prevItem:{title:"Interactive code block!",permalink:"/zh-Hans/blog/2021/05/06/codeblock"},nextItem:{title:"\u5343\u5f58\u6587",permalink:"/zh-Hans/blog/2021/04/01/zhi"}},i=[{value:"Data types",id:"data-types",children:[]},{value:"Arithmetic",id:"arithmetic",children:[]},{value:"Declaring sequences",id:"declaring-sequences",children:[]},{value:"Iterating sequences",id:"iterating-sequences",children:[]},{value:"Matrix operations",id:"matrix-operations",children:[]},{value:"Expressions",id:"expressions",children:[]},{value:"Mathematical functions",id:"mathematical-functions",children:[]},{value:"Immutability",id:"immutability",children:[]}],b={toc:i};function c(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python."),Object(r.b)("h2",{id:"data-types"},"Data types"),Object(r.b)("p",null,"This is a language mainly used for algorithms and maths. The data types are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Number")," ",Object(r.b)("inlineCode",{parentName:"li"},"-1.6"),", ",Object(r.b)("inlineCode",{parentName:"li"},"1/3"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Boolean")," ",Object(r.b)("inlineCode",{parentName:"li"},"true"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"String")," ",Object(r.b)("inlineCode",{parentName:"li"},'"Hello"'),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Set")," ",Object(r.b)("inlineCode",{parentName:"li"},"{1, 2, 3}")," (no duplicate value; no order);"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Matrix")," ",Object(r.b)("inlineCode",{parentName:"li"},"((1, 2, 3), (4, 5, 6))")," (supports matrix operations; vectors are special names for n\xd71 or 1\xd7n matrices);"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Function"),".")),Object(r.b)("h2",{id:"arithmetic"},"Arithmetic"),Object(r.b)("p",null,"Apart from the typical integer and decimal types, number types also include ",Object(r.b)("strong",{parentName:"p"},"fractions"),", ",Object(r.b)("strong",{parentName:"p"},"irrational numbers"),", and ",Object(r.b)("strong",{parentName:"p"},"complex numbers"),". The special number ",Object(r.b)("inlineCode",{parentName:"p"},"infty")," is used for sequence and function limits, as well as the result of division by zero."),Object(r.b)("p",null,"Since fractions preserve more precision than decimals, whenever a fraction is involved in an expression, the result will be a fraction. Integers are special fractions with denominator of 1."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"num a := 1.6;\nnum b := 1/3;\nnum c := a * b; // c = 8/15\nnum d := 1.6 / 3; // d = 8/15\n")),Object(r.b)("p",null,"Some operations are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Addition: ",Object(r.b)("inlineCode",{parentName:"li"},"+"),";"),Object(r.b)("li",{parentName:"ul"},"Subtraction: ",Object(r.b)("inlineCode",{parentName:"li"},"-"),";"),Object(r.b)("li",{parentName:"ul"},"Multiplication: ",Object(r.b)("inlineCode",{parentName:"li"},"*"),";"),Object(r.b)("li",{parentName:"ul"},"Division: ",Object(r.b)("inlineCode",{parentName:"li"},"/"),";"),Object(r.b)("li",{parentName:"ul"},"Exponentiation: ",Object(r.b)("inlineCode",{parentName:"li"},"^"),";"),Object(r.b)("li",{parentName:"ul"},"Assignment: ",Object(r.b)("inlineCode",{parentName:"li"},":="),";"),Object(r.b)("li",{parentName:"ul"},"Equality: ",Object(r.b)("inlineCode",{parentName:"li"},"="),", ",Object(r.b)("inlineCode",{parentName:"li"},"=="),";"),Object(r.b)("li",{parentName:"ul"},"Inequality: ",Object(r.b)("inlineCode",{parentName:"li"},">"),", ",Object(r.b)("inlineCode",{parentName:"li"},"<"),", ",Object(r.b)("inlineCode",{parentName:"li"},">="),", ",Object(r.b)("inlineCode",{parentName:"li"},"<="),", ",Object(r.b)("inlineCode",{parentName:"li"},"!="),".")),Object(r.b)("p",null,"Any function with two parameters can be used as a binary operator."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"squaresum := (num a, num b) => a^2 + b^2;\n\nnum c := 1 squaresum 2; // c = 5\n")),Object(r.b)("p",null,"A number literal followed by a variable is infered to be a multiplication."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"num x := 2;\nnum a := 3x^2 + 2x + 1; // a = 17\n")),Object(r.b)("h2",{id:"declaring-sequences"},"Declaring sequences"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"seq a := i => i^2; // a = 0, 1, 4, 9, 16, ...\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Sequences are functions.")," More specifically, a sequence is defined as"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"type seq := (num) => T;\n")),Object(r.b)("p",null,"where the only parameter is the subscript. Unlike vectors, sequences contain an infinite number of items. ",Object(r.b)("inlineCode",{parentName:"p"},"a_i")," is just a syntax sugar to ",Object(r.b)("inlineCode",{parentName:"p"},"a(i)")," as in a function. For collections of finite number of objects, use vectors."),Object(r.b)("h2",{id:"iterating-sequences"},"Iterating sequences"),Object(r.b)("p",null,"The syntax ",Object(r.b)("inlineCode",{parentName:"p"},"i...j")," returns an iterator from ",Object(r.b)("inlineCode",{parentName:"p"},"i")," to ",Object(r.b)("inlineCode",{parentName:"p"},"j"),", inclusive. This is akin to ",Object(r.b)("inlineCode",{parentName:"p"},"range(i, j)")," in Python."),Object(r.b)("p",null,"When an iterator is used in the index, it also returns an iterator."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"seq a := i => i;\nfor (k in a_(1...3)) {\n    print(k); // Out: 1 2 3\n}\n")),Object(r.b)("h2",{id:"matrix-operations"},"Matrix operations"),Object(r.b)("p",null,"Any typical matrix operation is supported. Moreover mathematical functions treat square matrices the same as numbers."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"mat a := ((1, 2, 3), (4, 5, 6), (7, 8, 9));\nmat b := cos(a);\n/**\nb = (( 0.38017732968947, \u22120.3738301457419 , \u22120.12783762117329),\n     (\u22120.53120649276402,  0.39010533372492, \u22120.68858283978612),\n     (\u22120.44259031521749, \u22120.84595918680825, \u22120.24932805839901))\n*/\n")),Object(r.b)("h2",{id:"expressions"},"Expressions"),Object(r.b)("p",null,"Expressions are syntax sugars for functions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"type expr := (...T) => T;\n")),Object(r.b)("p",null,"This is to reduce the cumbersome typing. A type like ",Object(r.b)("inlineCode",{parentName:"p"},"(num, vec) => num")," can now be simply ",Object(r.b)("inlineCode",{parentName:"p"},"expr"),". However, I'm not sure how robustness / type safety can be achieved in this case."),Object(r.b)("h2",{id:"mathematical-functions"},"Mathematical functions"),Object(r.b)("p",null,"In mathematics, parameters used in functions often appear like currying to me. For example, ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msubsup",{parentName:"mrow"},Object(r.b)("mo",{parentName:"msubsup"},"\u2211"),Object(r.b)("mrow",{parentName:"msubsup"},Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mo",{parentName:"mrow"},"="),Object(r.b)("mn",{parentName:"mrow"},"0")),Object(r.b)("mn",{parentName:"msubsup"},"10")),Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"k"),Object(r.b)("mn",{parentName:"msup"},"2"))),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}k^2")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1.253718em",verticalAlign:"-0.29971000000000003em"}}),Object(r.b)("span",{parentName:"span",className:"mop"},Object(r.b)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),Object(r.b)("span",{parentName:"span",className:"msupsub"},Object(r.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.954008em"}},Object(r.b)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},Object(r.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),Object(r.b)("span",{parentName:"span",className:"mrel mtight"},"="),Object(r.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(r.b)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},"1"),Object(r.b)("span",{parentName:"span",className:"mord mtight"},"0"))))),Object(r.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.29971000000000003em"}},Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(r.b)("span",{parentName:"span",className:"mord"},Object(r.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),Object(r.b)("span",{parentName:"span",className:"msupsub"},Object(r.b)("span",{parentName:"span",className:"vlist-t"},Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},Object(r.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," is just a function ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msubsup",{parentName:"mrow"},Object(r.b)("mo",{parentName:"msubsup"},"\u2211"),Object(r.b)("mrow",{parentName:"msubsup"},Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mo",{parentName:"mrow"},"="),Object(r.b)("mn",{parentName:"mrow"},"0")),Object(r.b)("mn",{parentName:"msubsup"},"10"))),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"1.253718em",verticalAlign:"-0.29971000000000003em"}}),Object(r.b)("span",{parentName:"span",className:"mop"},Object(r.b)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),Object(r.b)("span",{parentName:"span",className:"msupsub"},Object(r.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.954008em"}},Object(r.b)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},Object(r.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),Object(r.b)("span",{parentName:"span",className:"mrel mtight"},"="),Object(r.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(r.b)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},"1"),Object(r.b)("span",{parentName:"span",className:"mord mtight"},"0"))))),Object(r.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.29971000000000003em"}},Object(r.b)("span",{parentName:"span"}))))))))))," applied to an expression ",Object(r.b)("span",{parentName:"p",className:"math math-inline"},Object(r.b)("span",{parentName:"span",className:"katex"},Object(r.b)("span",{parentName:"span",className:"katex-mathml"},Object(r.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"k"),Object(r.b)("mn",{parentName:"msup"},"2"))),Object(r.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k^2")))),Object(r.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(r.b)("span",{parentName:"span",className:"base"},Object(r.b)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),Object(r.b)("span",{parentName:"span",className:"mord"},Object(r.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),Object(r.b)("span",{parentName:"span",className:"msupsub"},Object(r.b)("span",{parentName:"span",className:"vlist-t"},Object(r.b)("span",{parentName:"span",className:"vlist-r"},Object(r.b)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},Object(r.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(r.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(r.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(r.b)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),"."),Object(r.b)("p",null,"I propose the angle brackets be used to pass parameters to functions that return a function, while round brackets are for functions that return a value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"sum := <num i, num j> => {\n    return (expr f) => {\n        num s := 0;\n        for (x in i...j) {\n            s += f(x);\n        }\n        return s;\n    }\n}\n\nnum a = sum<1, 10>(x => x^2); // a = 385\n")),Object(r.b)("h2",{id:"immutability"},"Immutability"),Object(r.b)("p",null,"Although appearing to be a functional programming language, everything is by default mutable. Immutable objects have ",Object(r.b)("inlineCode",{parentName:"p"},"const")," modifiers."))}c.isMDXComponent=!0},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return N}));var n=t(0),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var b=s.a.createContext({}),c=function(e){var a=s.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=c(e.components);return s.a.createElement(b.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},u=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=c(t),u=n,N=l["".concat(m,".").concat(u)]||l[u]||o[u]||r;return t?s.a.createElement(N,p(p({ref:a},b),{},{components:t})):s.a.createElement(N,p({ref:a},b))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,m[1]=p;for(var b=2;b<r;b++)m[b]=t[b];return s.a.createElement.apply(null,m)}return s.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);