(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[9875],{9552:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),l={title:"Automating bulk file processing",author:"Joshua Chen",author_url:"https://github.com/Josh-Cena",author_image_url:"https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4",tags:["bash","personal page"],image:"/img/blog/2021-3-11/Script.png"},r=void 0,s={permalink:"/blog/2021/03/12/bash",source:"@site/blog/2021-3-12-bash.mdx",title:"Automating bulk file processing",description:"Thou shalt not modify 30 files by hand.",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[{label:"bash",permalink:"/blog/tags/bash"},{label:"personal page",permalink:"/blog/tags/personal-page"}],readingTime:4.585,truncated:!0,prevItem:{title:"Choosing a color palette",permalink:"/blog/2021/03/15/color"},nextItem:{title:"Building a docusaurus app",permalink:"/blog/2021/03/09/docusaurus"}},c=[{value:"Downloading images",id:"downloading-images",children:[]},{value:"Changing URLs",id:"changing-urls",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Thou shalt not modify 30 files by hand.",(0,o.kt)("br",{parentName:"p"}),"\n","\u2014Joshua Chen")),(0,o.kt)("p",null,"The problem all began with an attempt to migrate all articles from Weixin official account to this site. Copying & pasting all text and re-typesetting was pretty standard task, but it became tricky when it came to the pictures. Look at ",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/15D5f4zl5FG7Azl7gcZrxg"},"this article"),", for example. (The localized version is ",(0,o.kt)("a",{href:"/docs/Science/cavalieri"},"here"),".)"),(0,o.kt)("p",null,"So I was trying to embed the first picture. Initially, to save bandwidth and some GH pages storage space (I try to be as nice to the server as possible, although later I realized that the 200 pictures took up less than half a gigabyte), I planned to link the URL directly, something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},"export const Figure = ({children, src}) => (\n    <div style={{textAlign: 'center'}}>\n        <img src={src} />\n        <p style={{color: 'gray', fontSize: 'small'}}>{children}</p>\n    </div>);\n\n...\n\n<Figure src=\"https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\"></Figure>\n")),(0,o.kt)("p",null,"But it turned up as:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET6ic8fRiawIMic3jFWfS9o4SpMyc12XdWAmKlWL8hXbgTZcwwksxJaibMcUuXI8z0cKibBVyrTH2Y8DFFfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"Oops"})),(0,o.kt)("p",null,"(The tricky part is it doesn't fail on all occasions. For example, it shows up on my localhost. I hope it fails on the GH pages so I don't look like a nut.)"),(0,o.kt)("p",null,"It turns out that Weixin's image host doesn't like outside users sneaking into it. After some struggling, I made up my mind to host all images locally."),(0,o.kt)("p",null,"At this time, I already have all images inserted in the documents as ",(0,o.kt)("inlineCode",{parentName:"p"},"<Figure>")," tags. The next steps are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download all images by the URLs and put them in the correct folders (I want to keep some sort of structure although everything is looked after by the script);"),(0,o.kt)("li",{parentName:"ol"},"Change the references of each image to a local URL.")),(0,o.kt)("p",null,"The first thing coming to my mind was a bash script. Sadly, my knowledge of Bash was limited to invoking command-line tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"python"),"\u2014no conditionals, no loops, no variables. So writing each line was a 5-minute StackOverflow search. (A huge thank-you to StackOverflow and all of the amazing contributors!)"),(0,o.kt)("h2",{id:"downloading-images"},"Downloading images"),(0,o.kt)("p",null,"The core module is probably one line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget --output-document=\"correct/path/file.png\" 'https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'\n")),(0,o.kt)("p",null,"So two problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How do I generate the ",(0,o.kt)("inlineCode",{parentName:"li"},"correct/path/file.png"),"?"),(0,o.kt)("li",{parentName:"ol"},"How do I locate all URLs?")),(0,o.kt)("p",null,"To write the logic with pseudocode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'FILE[] files = enumerateFilesUnderPath("./docs/")\nfor file in files:\n    imagePath = "./static/img/" + removeExtension(file.path)\n    makeDirectory(imagePath)\n    string[] links = file.findInFile(/"(?<=<Figure src=\\").*?(?=\\">)"/g)\n    for link in links:\n        imageName = makeSomeMeaningfulName(link)\n        downloadImage(link, imageName, imagePath)\n')),(0,o.kt)("p",null,"To begin with, I will need to enumerate all files within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," folder. This is done via the ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," command. The result is stored in a list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"doc_list=( $(find ./docs -mindepth 2) )\n")),(0,o.kt)("p",null,"Next, we traverse ",(0,o.kt)("inlineCode",{parentName:"p"},"doc_list")," which contains path to each document. We have the weird syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"${doc_list[@]}")," instead of the more intuitive ",(0,o.kt)("inlineCode",{parentName:"p"},"${doc_list}")," (referencing the ",(0,o.kt)("inlineCode",{parentName:"p"},"doc_list")," variable itself) as one would expect with knowledge of JS or Python's for-each loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2-5}","{2-5}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    # TODO\ndone\n')),(0,o.kt)("p",null,"Now given the path to a ",(0,o.kt)("inlineCode",{parentName:"p"},"doc"),", we need to generate its respective assets folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," directory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," path looks like: ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/Science/cavalieri.md"),". We trim out the file name without the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," by the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},'"${doc%.*}'),", and append the path ",(0,o.kt)("inlineCode",{parentName:"p"},"./static/img/"),", getting the right directory path ",(0,o.kt)("inlineCode",{parentName:"p"},"./static/img/docs/Science/cavalieri")," to put the images in. The folder creation is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    # TODO\ndone\n')),(0,o.kt)("p",null,"Running the script now will give a correct folder hierarchy without any contents."),(0,o.kt)("p",null,"Next, we extract all URLs from the file. Searching in a file with a regex is done using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),". All URLs are enclosed in the format: ",(0,o.kt)("inlineCode",{parentName:"p"},'<Figure src="...">'),", so the most natural way is to use regex lookahead and lookbehind. Unluckily, ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," on MacOS doesn't support Perl, so to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," flag, I had to install ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," that provides the GNU-style ",(0,o.kt)("inlineCode",{parentName:"p"},"ggrep"),". Now we can grep out all the links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    # TODO\ndone\n')),(0,o.kt)("p",null,"To further extract the identifier for each image (the base-64 string) and the extension, we have to run ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," on each string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6-11}","{6-11}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    for link in "${links[@]}"\n    do\n        name=$(echo "$link" | ggrep -o -P "(?<=(jpg|png)/).*(?=/640)")\n        ext=$(echo "$link" | ggrep -o -P "(?<=wx_fmt=).*")\n        # Almost there!\n    done\ndone\n')),(0,o.kt)("p",null,"Lastly, it's just the ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," that downloads the image from the link and saves it to the path given by the directory, image name (base-64 identifier), and image extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{10}","{10}":!0},'doc_list=( $(find ./docs -mindepth 2) )\nfor doc in "${doc_list[@]}"\ndo\n    mkdir -p "./static/img/""${doc%.*}"\n    links=( $(ggrep -o -P "(?<=<Figure src=\\").*?(?=\\">)" "$doc") )\n    for link in "${links[@]}"\n    do\n        name=$(echo "$link" | ggrep -o -P "(?<=(jpg|png)/).*(?=/640)")\n        ext=$(echo "$link" | ggrep -o -P "(?<=wx_fmt=).*")\n        wget --output-document="./static/img/""${doc%.*}""/"$name"."$ext "$link"\n    done\ndone\n')),(0,o.kt)("p",null,"And that's it! Run it, and see the cascade of outputs."),(0,o.kt)("img",{src:"/img/blog/2021-3-11/Script.png"}),(0,o.kt)("h2",{id:"changing-urls"},"Changing URLs"),(0,o.kt)("p",null,"After we've downloaded the images, we will change the references to local URLs. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},'<Figure src="https://mmbiz.qpic.cn/mmbiz_png/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"></Figure>\n')),(0,o.kt)("p",null,"becomes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/docs/science/cavalieri.md"',title:'"/docs/science/cavalieri.md"'},'<Figure src="/img/docs/Science/cavalieri/JGibibkelET68EfhySWuOboVia7FJX8ehwIAicTz2be2JDN7HIibwibjrpYPP1bTCr1TrjDicauU0P6BLCgFIibZK42GCQ.png"></Figure>\n')),(0,o.kt)("p",null,"Well, given the commands introduced above, this task is pretty trivial. Modifying the content of a text file (like a search-and-replace) is done by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sed"),". Because I'm getting tired, this part is left as exercise. You can cheat and look at the code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Josh-Cena/Personal-page/blob/master/scripts/changeUrl.sh"},"here"),"."))}d.isMDXComponent=!0}}]);