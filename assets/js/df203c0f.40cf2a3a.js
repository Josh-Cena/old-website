"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[9924],{1226:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var l=t(8646),s=t(5969),c=t(2398),r=t(2559),n=t(6413);function g(e){let{doc:a}=e;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(c.default,{to:a.permalink},l.createElement("h2",null,a.title)),a.description&&l.createElement("p",null,a.description))}function o(e){let{tag:a}=e;const t=function(){const{selectMessage:e}=(0,r.c2)();return a=>e(a,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:a}))}(),o=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(a.docs.length),tagName:a.name});return l.createElement(s.Z,{title:o,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadata:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(c.default,{href:a.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.docs.map((e=>l.createElement(g,{key:e.id,doc:e}))))))))}}}]);