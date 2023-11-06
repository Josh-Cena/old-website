"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[5916],{7856:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(8646);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,h=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3509:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>r,metadata:()=>l,assets:()=>s,toc:()=>c,default:()=>d});var i=n(1246),a=(n(8646),n(7856));const o={title:"Automating bulk file processing",authors:"joshcena",tags:["bash","personal page"],image:"./Script.png"},r=void 0,l={permalink:"/old-website/blog/2021/03/12/bash",source:"@site/blog/2021-03-12-bash/index.mdx",title:"Automating bulk file processing",description:"Thou shalt not modify 30 files by hand.",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[{label:"bash",permalink:"/old-website/blog/tags/bash"},{label:"personal page",permalink:"/old-website/blog/tags/personal-page"}],readingTime:5,truncated:!0,authors:[{name:"Joshua Chen",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"joshcena"}],frontMatter:{title:"Automating bulk file processing",authors:"joshcena",tags:["bash","personal page"],image:"./Script.png"},prevItem:{title:"Choosing a color palette",permalink:"/old-website/blog/2021/03/15/color"},nextItem:{title:"Building a docusaurus app",permalink:"/old-website/blog/2021/03/09/docusaurus"}},s={image:n(1513).Z,authorsImageUrls:[void 0]},c=[{value:"Downloading images",id:"downloading-images",level:2},{value:"Changing URLs",id:"changing-urls",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Thou shalt not modify 30 files by hand.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2014Joshua Chen")),(0,a.kt)("p",null,"The problem all began with an attempt to migrate all articles from Weixin official account to this site. Copying & pasting all text and re-typesetting was pretty standard task, but it became tricky when it came to the pictures. Look at ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/15D5f4zl5FG7Azl7gcZrxg"},"this article"),", for example. (The localized version is ",(0,a.kt)("a",{href:"/docs/Science/cavalieri"},"here"),".)"),(0,a.kt)("p",null,"So I was trying to embed the first picture. Initially, to save bandwidth and some GH pages storage space (I try to be as nice to the server as possible, although later I realized that the 200 pictures took up less than half a gigabyte), I planned to link the URL directly, something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},"export const Figure = ({children, src}) => (\n    <div style={{textAlign: 'center'}}>\n        <img src={src} />\n        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>\n    </div>);\n\n...\n\n<Figure src=\"https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\"></Figure>\n")),(0,a.kt)("p",null,"But it turned up as:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyc12XdWAmKlWL8hXbgTZcwwksxJaibMcUuXI8z0cKibBVyrTH2Y8DFFfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"Oops"})),(0,a.kt)("p",null,"(The tricky part is it doesn't fail on all occasions. For example, it shows up on my localhost. I hope it fails on the GH pages so I don't look like a nut.)"),(0,a.kt)("p",null,"It turns out that Weixin's image host doesn't like outside users sneaking into it. After some struggling, I made up my mind to host all images locally."),(0,a.kt)("p",null,"At this time, I already have all images inserted in the documents as ",(0,a.kt)("inlineCode",{parentName:"p"},"<Figure>")," tags. The next steps are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download all images by the URLs and put them in the correct folders (I want to keep some sort of structure although everything is looked after by the script);"),(0,a.kt)("li",{parentName:"ol"},"Change the references of each image to a local URL.")),(0,a.kt)("p",null,"The first thing coming to my mind was a bash script. Sadly, my knowledge of Bash was limited to invoking command-line tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"python"),"\u2014no conditionals, no loops, no variables. So writing each line was a 5-minute StackOverflow search. (A huge thank-you to StackOverflow and all of the amazing contributors!)"),(0,a.kt)("h2",{id:"downloading-images"},"Downloading images"),(0,a.kt)("p",null,"The core module is probably one line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget --output-document=\"correct/path/file.png\" 'https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'\n")),(0,a.kt)("p",null,"So two problems:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How do I generate the ",(0,a.kt)("inlineCode",{parentName:"li"},"correct/path/file.png"),"?"),(0,a.kt)("li",{parentName:"ol"},"How do I locate all URLs?")),(0,a.kt)("p",null,"To write the logic with pseudocode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'FILE[] files = enumerateFilesUnderPath("./docs/")\nfor file in files:\n    imagePath = "./static/img/" + removeExtension(file.path)\n    makeDirectory(imagePath)\n    string[] links = file.findInFile(/"(?<=<Figure src=\\").*?(?=\\">)"/g)\n    for link in links:\n        imageName = makeSomeMeaningfulName(link)\n        downloadImage(link, imageName, imagePath)\n')),(0,a.kt)("p",null,"To begin with, I will need to enumerate all files within the ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs")," folder. This is done via the ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," command. The result is stored in a list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"doc_list=( $(find ./docs -mindepth 2) )\n")),(0,a.kt)("p",null,"Next, we traverse ",(0,a.kt)("inlineCode",{parentName:"p"},"doc_list")," which contains path to each document. We have the weird syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"${doc_list[@]}")," instead of the more intuitive ",(0,a.kt)("inlineCode",{parentName:"p"},"${doc_list}")," (referencing the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc_list")," variable itself) as one would expect with knowledge of JS or Python's for-each loop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2-5}","{2-5}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    # TODO\ndone\n')),(0,a.kt)("p",null,"Now given the path to a ",(0,a.kt)("inlineCode",{parentName:"p"},"doc"),", we need to generate its respective assets folder in the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory. The ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," path looks like: ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/Science/cavalieri.md"),". We trim out the file name without the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," by the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},'"${doc%.*}'),", and append the path ",(0,a.kt)("inlineCode",{parentName:"p"},"./static/img/"),", getting the right directory path ",(0,a.kt)("inlineCode",{parentName:"p"},"./static/img/docs/Science/cavalieri")," to put the images in. The folder creation is done with ",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    # TODO\ndone\n')),(0,a.kt)("p",null,"Running the script now will give a correct folder hierarchy without any contents."),(0,a.kt)("p",null,"Next, we extract all URLs from the file. Searching in a file with a regex is done using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),". All URLs are enclosed in the format: ",(0,a.kt)("inlineCode",{parentName:"p"},'<Figure src="...">'),", so the most natural way is to use regex lookahead and lookbehind. Unluckily, ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," on MacOS doesn't support Perl, so to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag, I had to install ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," that provides the GNU-style ",(0,a.kt)("inlineCode",{parentName:"p"},"ggrep"),". Now we can grep out all the links."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    # TODO\ndone\n')),(0,a.kt)("p",null,"To further extract the identifier for each image (the base-64 string) and the extension, we have to run ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," on each string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6-11}","{6-11}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    for link in "${links[@]}"\n    do\n        name=$(echo "$link" | ggrep -o -P "(?<=(jpg|png)/).*(?=/640)")\n        ext=$(echo "$link" | ggrep -o -P "(?<=wx_fmt=).*")\n        # Almost there!\n    done\ndone\n')),(0,a.kt)("p",null,"Lastly, it's just the ",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," that downloads the image from the link and saves it to the path given by the directory, image name (base-64 identifier), and image extension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{10}","{10}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    for link in "${links[@]}"\n    do\n        name=$(echo "$link" | ggrep -o -P "(?<=(jpg|png)/).*(?=/640)")\n        ext=$(echo "$link" | ggrep -o -P "(?<=wx_fmt=).*")\n        wget --output-document="./static/img/""${doc%.*}""/"$name"."$ext "$link"\n    done\ndone\n')),(0,a.kt)("p",null,"And that's it! Run it, and see the cascade of outputs."),(0,a.kt)("img",{src:"/img/blog/2021-03-11/Script.png"}),(0,a.kt)("h2",{id:"changing-urls"},"Changing URLs"),(0,a.kt)("p",null,"After we've downloaded the images, we will change the references to local URLs. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},'<Figure src="https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"></Figure>\n')),(0,a.kt)("p",null,"becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},'<Figure src="/img/docs/Science/cavalieri/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ.png"></Figure>\n')),(0,a.kt)("p",null,"Well, given the commands introduced above, this task is pretty trivial. Modifying the content of a text file (like a search-and-replace) is done by the command ",(0,a.kt)("inlineCode",{parentName:"p"},"sed"),". Because I'm getting tired, this part is left as exercise. You can cheat and look at the code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Josh-Cena/Personal-page/blob/master/scripts/changeUrl.sh"},"here"),"."))}d.isMDXComponent=!0},1513:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Script-45eb255e26f632786c76b5a690e67bfd.png"}}]);