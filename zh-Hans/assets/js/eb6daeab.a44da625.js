"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[127],{8186:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},frontMatterAssets:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=e(7462),o=e(3366),r=(e(7294),e(3905)),u=["components"],i={title:"\u53ef\u4ea4\u4e92\u4ee3\u7801\u6846\uff01",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["\u4e2a\u4eba\u7f51\u9875","\u524d\u7aef"]},c={},l=void 0,s={permalink:"/zh-Hans/blog/2021/5/6/codeblock",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-5-6-codeblock.mdx",title:"\u53ef\u4ea4\u4e92\u4ee3\u7801\u6846\uff01",description:"Hey!",date:"2021-05-06T00:00:00.000Z",formattedDate:"2021\u5e745\u67086\u65e5",tags:[{label:"\u4e2a\u4eba\u7f51\u9875",permalink:"/zh-Hans/blog/tags/\u4e2a\u4eba\u7f51\u9875"},{label:"\u524d\u7aef",permalink:"/zh-Hans/blog/tags/\u524d\u7aef"}],readingTime:.34,truncated:!0,prevItem:{title:"Caroline: \u4e00\u79cd\u4e66\u6cd5\u5b57\u4f53",permalink:"/zh-Hans/blog/2021/6/9/font"},nextItem:{title:"\u5230\u8fbe\u51a0\u519b\u8054\u8d5b\u4e86\uff01",permalink:"/zh-Hans/blog/2021/4/26/champion"}},p=[],d={toc:p};function m(t){var n=t.components,e=(0,o.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hey!")),(0,r.kt)("p",null,"I just found it fun to include an interactive code block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"Try it out with your own code in React!"))}m.isMDXComponent=!0}}]);