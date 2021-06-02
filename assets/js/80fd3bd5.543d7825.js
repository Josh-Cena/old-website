(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[6383],{3472:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var a=n(7294),r=n(6010),i=n(4656),o=n(5350),l=n(4688),c=n(3700),s=n(6479),d=n(9277),m=n(3457),u=n(4973),h="todolist_24k1",f="cardContainer_3K0H",y="sortBySelect_3AKC",p="downloadLink_2OX2",E=n(1120),g=n(6653),Z=n(4845),b=n(8463),v=n(1907),w=n(9912),k=n(282),C=n(2318),N={card:"card_uoqi",todo:"todo_G7Rw",done:"done_3c5u"},S=(0,E.Z)({root:{width:300,margin:15,backgroundColor:"#fff",borderRadius:".25rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"},title:{fontSize:14},pos:{marginBottom:12}});function T(e){var t=e.item,n=e.handler,i=S();return a.createElement(b.Z,{className:(0,r.Z)(i.root,N.card,t.done?N.done:N.todo)},a.createElement(w.Z,null,a.createElement(C.Z,{variant:"h5",component:"h2"},t.name),a.createElement(C.Z,{className:i.pos,color:"textSecondary"},a.createElement(u.Z,{id:"todo.due"},"Due by: "),t.deadline.year+"/"+t.deadline.month+"/"+t.deadline.day),a.createElement(C.Z,{variant:"body2",component:"p"},a.createElement("span",{className:N.priority},a.createElement(u.Z,{id:"todo.priority"},"Priority: "),t.priority),a.createElement(Z.Z,{value:t.priority,min:0,max:10,marks:!0,onChangeCommitted:function(e,a){return n.setPriority(t,a)}}))),a.createElement(v.Z,null,a.createElement(g.Z,{defaultChecked:t.done,color:"primary",onChange:function(){return n.toggle(t)}}),a.createElement(k.Z,{size:"small",onClick:function(){return n.remove(t)}},a.createElement(u.Z,{id:"todo.delete"},"Delete"))))}var D=n(3243),_=n(5365),j=n(7827),I=n(6180),x="cover_1p2F",O="additem_2_jF",L="field_2MJr",B="priority_3zZE",J=n(8358),z=n.n(J),M=function(){function e(e){var t=null!=e?e:new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.day=t.getDate()}return e.prototype.toDate=function(){return new Date(this.year,this.month-1,this.day)},e}();function P(e){switch(e){case"name":return function(e,t){return e.name>=t.name?1:-1};case"deadline":return function(e,t){var n=e.deadline,a=t.deadline;return n.year===a.year?n.month===a.month?n.day-a.day:n.month-a.month:n.year-a.year};case"priority":return function(e,t){return t.priority-e.priority}}}var R=function(){function e(e,t){this.list=e,this.setList=t,this.sortBy="priority"}var t=e.prototype;return t.toggle=function(e){this.setList(this.list.map((function(t){return t.id===e.id?Object.assign({},t,{done:!e.done}):t})))},t.remove=function(e){this.setList(this.list.filter((function(t){return t.id!==e.id})))},t.setPriority=function(e,t){var n=this.list.map((function(n){return n.id===e.id?Object.assign({},n,{priority:t}):n}));n.sort(P(this.sortBy)),this.setList(n)},t.rename=function(e){},t.addItem=function(e,t,n){var a=this.list.concat([{id:z()(),name:e,priority:n,deadline:t,done:!1}]);a.sort(P(this.sortBy)),this.setList(a)},t.update=function(){var e=[].concat(this.list);e.sort(P(this.sortBy)),this.setList(e)},e}(),A=(0,E.Z)({root:{width:300,margin:15,backgroundColor:"#fff",borderRadius:".25rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"},pos:{marginBottom:12}});function F(e){var t=e.handler,n=A(),i=(0,o.Z)(),l=i.isDarkTheme,c=(i.setLightTheme,i.setDarkTheme,(0,d.Z)({palette:{type:l?"dark":"light",primary:{light:"#4dcfca",main:"#39cac4",dark:"#31b8b2"}}})),s={name:"",deadline:new M,priority:0,editing:!1},h=(0,a.useState)(s),f=h[0],y=h[1];return a.createElement(m.Z,{theme:c},a.createElement(b.Z,{className:(0,r.Z)(n.root,O)},!f.editing&&a.createElement("div",{className:x,onClick:function(){return y(Object.assign({},f,{editing:!0}))}},"+"),a.createElement(w.Z,null,a.createElement(D.Z,{label:a.createElement(u.Z,{id:"todo.new"},"New item"),className:L,multiline:!0,variant:"outlined",margin:"dense",value:f.name,onChange:function(e){return y(Object.assign({},f,{name:e.currentTarget.value}))}}),a.createElement(j.M,{utils:_.Z},a.createElement(I.e,{label:a.createElement(u.Z,{id:"todo.due"},"Deadline"),className:L,disableToolbar:!0,variant:"inline",inputVariant:"outlined",margin:"dense",format:"yyyy/M/d",value:f.deadline.toDate(),onChange:function(e){return y(Object.assign({},f,{deadline:new M(e)}))}})),a.createElement(C.Z,{variant:"body2",component:"p"},a.createElement("span",{className:B},a.createElement(u.Z,{id:"todo.priority"},"Priority: "),f.priority),a.createElement(Z.Z,{value:f.priority,min:0,max:10,marks:!0,onChange:function(e,t){return y(Object.assign({},f,{priority:t}))}}))),a.createElement(v.Z,null,a.createElement(k.Z,{size:"small",onClick:function(){t.addItem(f.name,f.deadline,f.priority),y(s)}},a.createElement(u.Z,{id:"todo.add"},"Add")),a.createElement(k.Z,{size:"small",onClick:function(){y(s)}},a.createElement(u.Z,{id:"todo.cancel"},"Cancel")))))}function V(e){var t=e.handler,n=e.list,i=(0,o.Z)().isDarkTheme,h=(0,d.Z)({palette:{type:i?"dark":"light",primary:{light:"#4dcfca",main:"#39cac4",dark:"#31b8b2"}}}),E=n.filter((function(e){return!e.done})),g=n.filter((function(e){return e.done})),Z=(0,a.useState)("priority"),b=Z[0],v=Z[1];return(0,a.useEffect)((function(){t.sortBy=b,t.update()}),[b]),a.createElement(m.Z,{theme:h},a.createElement("div",{className:y},a.createElement(c.Z,{id:"sort-by"},"Sort by"),a.createElement(l.Z,{labelId:"sort-by",value:b,onChange:function(e){return v(e.target.value)}},a.createElement(s.Z,{value:"priority"},"Priority"),a.createElement(s.Z,{value:"deadline"},"Due date"),a.createElement(s.Z,{value:"name"},"Name"),a.createElement(s.Z,{value:"label"},"Label"))),a.createElement("a",{className:(0,r.Z)("button button--outline button--secondary",p),href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"todolist.json"},"Download as JSON"),a.createElement("h2",null,a.createElement(u.Z,{id:"todo.todoTitle"},"Todo")),a.createElement("div",{className:f},E.map((function(e){return a.createElement(T,{key:e.id,item:e,handler:t})})),a.createElement(F,{handler:t})),a.createElement("h2",null,a.createElement(u.Z,{id:"todo.doneTitle"},"Done")),a.createElement("div",{className:f},g.map((function(e){return a.createElement(T,{key:e.id,item:e,handler:t})}))))}function H(){var e=(0,a.useState)([]),t=e[0],n=e[1];(0,a.useEffect)((function(){var e=localStorage.getItem("jc_todolistData");null!==e&&n(JSON.parse(e))}),[]),(0,a.useEffect)((function(){localStorage.setItem("jc_todolistData",JSON.stringify(t))}),[t]);var o=new R(t,n);return a.createElement(i.Z,{title:"Todo list",description:"A convenient todo list"},a.createElement("main",null,a.createElement("div",{className:(0,r.Z)("container margin-vert--lg",h)},a.createElement("h1",null,a.createElement(u.Z,{id:"todo.title"},"Todo list")),a.createElement("p",{style:{textAlign:"left"}},a.createElement(u.Z,{id:"todo.desc",values:{note:a.createElement("b",null,a.createElement(u.Z,{id:"todo.desc.note"},"Note:")),link:a.createElement("a",{href:"https://github.com/Computerization/New-member-practice-commit/tree/master/2019/Josh-Cena/Joshua-Todolist%20with%20vue"},a.createElement(u.Z,{id:"todo.desc.link"},"our club's repo"))}},"{note} This is not intended to be functional, but merely a showcase of what I had once created. That was probably my first independent project, originally with plain HTML/CSS/JavaScript, later refactored with Vue. It was committed to {link}. Every time I look back at those days when I was green and ignorant, I find a lot of experiences worth reminiscing, and this has always been one of them. The only unfortunate thing was that the original version used Vue and here I had to use React; plus, to match the page style, I drastically modified everything. So it's like the ship of Theseus\u2014every single line of code has been changed, but believe it or not, it's still the same Todo list project.")),a.createElement(V,{handler:o,list:t}))))}}}]);