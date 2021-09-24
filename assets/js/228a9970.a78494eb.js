"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[3663],{3517:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return l},assets:function(){return o},toc:function(){return u},default:function(){return k}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),p=["components"],i={title:"Random thoughts on a new programming language",authors:"joshcena",tags:["compiler"]},r=void 0,l={permalink:"/blog/2021/04/25/lang",source:"@site/blog/2021-04-25-lang.mdx",title:"Random thoughts on a new programming language",description:"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python.",date:"2021-04-25T00:00:00.000Z",formattedDate:"April 25, 2021",tags:[{label:"compiler",permalink:"/blog/tags/compiler"}],readingTime:3.255,truncated:!0,authors:[{name:"Joshua Chen",url:"https://github.com/Josh-Cena",imageURL:"/img/avatar.svg",key:"joshcena"}],prevItem:{title:"Champions league reached!",permalink:"/blog/2021/04/26/champion"},nextItem:{title:"A thousand words with Zhi",permalink:"/blog/2021/04/01/zhi"}},o={authorsImageUrls:[void 0]},u=[{value:"Data types",id:"data-types",children:[]},{value:"Arithmetic",id:"arithmetic",children:[]},{value:"Declaring sequences",id:"declaring-sequences",children:[]},{value:"Iterating sequences",id:"iterating-sequences",children:[]},{value:"Matrix operations",id:"matrix-operations",children:[]},{value:"Expressions",id:"expressions",children:[]},{value:"Mathematical functions",id:"mathematical-functions",children:[]},{value:"Immutability",id:"immutability",children:[]}],N={toc:u};function k(a){var e=a.components,t=(0,s.Z)(a,p);return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python."),(0,m.kt)("h2",{id:"data-types"},"Data types"),(0,m.kt)("p",null,"This is a language mainly used for algorithms and maths. The data types are:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Number")," ",(0,m.kt)("inlineCode",{parentName:"li"},"-1.6"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"1/3"),";"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Boolean")," ",(0,m.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"String")," ",(0,m.kt)("inlineCode",{parentName:"li"},'"Hello"'),";"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Set")," ",(0,m.kt)("inlineCode",{parentName:"li"},"{1, 2, 3}")," (no duplicate value; no order);"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Matrix")," ",(0,m.kt)("inlineCode",{parentName:"li"},"((1, 2, 3), (4, 5, 6))")," (supports matrix operations; vectors are special names for n\xd71 or 1\xd7n matrices);"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Function"),".")),(0,m.kt)("h2",{id:"arithmetic"},"Arithmetic"),(0,m.kt)("p",null,"Apart from the typical integer and decimal types, number types also include ",(0,m.kt)("strong",{parentName:"p"},"fractions"),", ",(0,m.kt)("strong",{parentName:"p"},"irrational numbers"),", and ",(0,m.kt)("strong",{parentName:"p"},"complex numbers"),". The special number ",(0,m.kt)("inlineCode",{parentName:"p"},"infty")," is used for sequence and function limits, as well as the result of division by zero."),(0,m.kt)("p",null,"Since fractions preserve more precision than decimals, whenever a fraction is involved in an expression, the result will be a fraction. Integers are special fractions with denominator of 1."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"num a := 1.6;\nnum b := 1/3;\nnum c := a * b; // c = 8/15\nnum d := 1.6 / 3; // d = 8/15\n")),(0,m.kt)("p",null,"Some operations are:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Addition: ",(0,m.kt)("inlineCode",{parentName:"li"},"+"),";"),(0,m.kt)("li",{parentName:"ul"},"Subtraction: ",(0,m.kt)("inlineCode",{parentName:"li"},"-"),";"),(0,m.kt)("li",{parentName:"ul"},"Multiplication: ",(0,m.kt)("inlineCode",{parentName:"li"},"*"),";"),(0,m.kt)("li",{parentName:"ul"},"Division: ",(0,m.kt)("inlineCode",{parentName:"li"},"/"),";"),(0,m.kt)("li",{parentName:"ul"},"Exponentiation: ",(0,m.kt)("inlineCode",{parentName:"li"},"^"),";"),(0,m.kt)("li",{parentName:"ul"},"Assignment: ",(0,m.kt)("inlineCode",{parentName:"li"},":="),";"),(0,m.kt)("li",{parentName:"ul"},"Equality: ",(0,m.kt)("inlineCode",{parentName:"li"},"="),", ",(0,m.kt)("inlineCode",{parentName:"li"},"=="),";"),(0,m.kt)("li",{parentName:"ul"},"Inequality: ",(0,m.kt)("inlineCode",{parentName:"li"},">"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,m.kt)("inlineCode",{parentName:"li"},">="),", ",(0,m.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,m.kt)("inlineCode",{parentName:"li"},"!="),".")),(0,m.kt)("p",null,"Any function with two parameters can be used as a binary operator."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"squaresum := (num a, num b) => a^2 + b^2;\n\nnum c := 1 squaresum 2; // c = 5\n")),(0,m.kt)("p",null,"A number literal followed by a variable is infered to be a multiplication."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"num x := 2;\nnum a := 3x^2 + 2x + 1; // a = 17\n")),(0,m.kt)("h2",{id:"declaring-sequences"},"Declaring sequences"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"seq a := i => i^2; // a = 0, 1, 4, 9, 16, ...\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Sequences are functions.")," More specifically, a sequence is defined as"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"type seq := (num) => T;\n")),(0,m.kt)("p",null,"where the only parameter is the subscript. Unlike vectors, sequences contain an infinite number of items. ",(0,m.kt)("inlineCode",{parentName:"p"},"a_i")," is just a syntax sugar to ",(0,m.kt)("inlineCode",{parentName:"p"},"a(i)")," as in a function. For collections of finite number of objects, use vectors."),(0,m.kt)("h2",{id:"iterating-sequences"},"Iterating sequences"),(0,m.kt)("p",null,"The syntax ",(0,m.kt)("inlineCode",{parentName:"p"},"i...j")," returns an iterator from ",(0,m.kt)("inlineCode",{parentName:"p"},"i")," to ",(0,m.kt)("inlineCode",{parentName:"p"},"j"),", inclusive. This is akin to ",(0,m.kt)("inlineCode",{parentName:"p"},"range(i, j)")," in Python."),(0,m.kt)("p",null,"When an iterator is used in the index, it also returns an iterator."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"seq a := i => i;\nfor (k in a_(1...3)) {\n    print(k); // Out: 1 2 3\n}\n")),(0,m.kt)("h2",{id:"matrix-operations"},"Matrix operations"),(0,m.kt)("p",null,"Any typical matrix operation is supported. Moreover mathematical functions treat square matrices the same as numbers."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"mat a := ((1, 2, 3), (4, 5, 6), (7, 8, 9));\nmat b := cos(a);\n/**\nb = (( 0.38017732968947, \u22120.3738301457419 , \u22120.12783762117329),\n     (\u22120.53120649276402,  0.39010533372492, \u22120.68858283978612),\n     (\u22120.44259031521749, \u22120.84595918680825, \u22120.24932805839901))\n*/\n")),(0,m.kt)("h2",{id:"expressions"},"Expressions"),(0,m.kt)("p",null,"Expressions are syntax sugars for functions."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"type expr := (...T) => T;\n")),(0,m.kt)("p",null,"This is to reduce the cumbersome typing. A type like ",(0,m.kt)("inlineCode",{parentName:"p"},"(num, vec) => num")," can now be simply ",(0,m.kt)("inlineCode",{parentName:"p"},"expr"),". However, I'm not sure how robustness / type safety can be achieved in this case."),(0,m.kt)("h2",{id:"mathematical-functions"},"Mathematical functions"),(0,m.kt)("p",null,"In mathematics, parameters used in functions often appear like currying to me. For example, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"0")),(0,m.kt)("mn",{parentName:"msubsup"},"10")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"k"),(0,m.kt)("mn",{parentName:"msup"},"2"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}k^2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.253718em",verticalAlign:"-0.29971000000000003em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.954008em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29971000000000003em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," is just a function ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"0")),(0,m.kt)("mn",{parentName:"msubsup"},"10"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.253718em",verticalAlign:"-0.29971000000000003em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.954008em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.29971000000000003em"}},(0,m.kt)("span",{parentName:"span"}))))))))))," applied to an expression ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"k"),(0,m.kt)("mn",{parentName:"msup"},"2"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k^2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),"."),(0,m.kt)("p",null,"I propose the angle brackets be used to pass parameters to functions that return a function, while round brackets are for functions that return a value."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"sum := <num i, num j> => {\n    return (expr f) => {\n        num s := 0;\n        for (x in i...j) {\n            s += f(x);\n        }\n        return s;\n    }\n}\n\nnum a = sum<1, 10>(x => x^2); // a = 385\n")),(0,m.kt)("h2",{id:"immutability"},"Immutability"),(0,m.kt)("p",null,"Although appearing to be a functional programming language, everything is by default mutable. Immutable objects have ",(0,m.kt)("inlineCode",{parentName:"p"},"const")," modifiers."))}k.isMDXComponent=!0}}]);