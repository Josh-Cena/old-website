(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[8719],{3451:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),c={title:"Interactive code block!",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["personal page","front end"]},i=void 0,l={permalink:"/blog/2021/05/06/codeblock",source:"@site/blog/2021-5-6-codeblock.mdx",title:"Interactive code block!",description:"Hey!",date:"2021-05-06T00:00:00.000Z",formattedDate:"May 6, 2021",tags:[{label:"personal page",permalink:"/blog/tags/personal-page"},{label:"front end",permalink:"/blog/tags/front-end"}],readingTime:.34,truncated:!0,prevItem:{title:"Caroline: a script font",permalink:"/blog/2021/06/09/font"},nextItem:{title:"Champions league reached!",permalink:"/blog/2021/04/26/champion"}},u=[],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hey!")),(0,r.kt)("p",null,"I just found it fun to include an interactive code block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"Try it out with your own code in React!"))}p.isMDXComponent=!0}}]);