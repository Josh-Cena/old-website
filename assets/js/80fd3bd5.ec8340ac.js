(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{148:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(0),r=a.n(i),o=a(165),l=a(287),c=a.n(l),d=a(106),m=a.n(d),s=a(197),u=a.n(s),h=a(173),p=a(369),f=a(344),g=a(374),E=a(387),y=a(390),b=a(375),v=a(380),w=a(378),k=a(383),C=a(379),T=a(107),j=a.n(T),N=a(159),O=Object(p.a)({root:{width:300,margin:15,backgroundColor:"#fff",borderRadius:".25rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"},title:{fontSize:14},pos:{marginBottom:12}}),S=function(e){var t=e.item,a=e.handler,n=O(),i=Object(h.a)(),o=i.isDarkTheme,l=(i.setLightTheme,i.setDarkTheme,Object(f.a)({palette:{type:o?"dark":"light",primary:{light:"#4dcfca",main:"#39cac4",dark:"#31b8b2"}}}));return r.a.createElement(g.a,{theme:l},r.a.createElement(b.a,{className:u()(n.root,j.a.card,t.done?j.a.done:j.a.todo)},r.a.createElement(w.a,null,r.a.createElement(C.a,{variant:"h5",component:"h2"},t.name),r.a.createElement(C.a,{className:n.pos,color:"textSecondary"},r.a.createElement(N.a,{id:"todo.due"},"Due by: "),t.deadline.getFullYear()+"/"+(t.deadline.getMonth()+1)+"/"+t.deadline.getDate()),r.a.createElement(C.a,{variant:"body2",component:"p"},r.a.createElement("span",{className:j.a.priority},r.a.createElement(N.a,{id:"todo.priority"},"Priority: "),t.priority),r.a.createElement(y.a,{value:t.priority,min:0,max:10,marks:!0,onChange:function(e,n){return a.setPriority(t,n)},onChangeCommitted:function(){return a.update()}}))),r.a.createElement(v.a,null,r.a.createElement(E.a,{defaultChecked:t.done,color:"primary",onChange:function(){return a.toggle(t)}}),r.a.createElement(k.a,{size:"small",onClick:function(){return a.remove(t)}},r.a.createElement(N.a,{id:"todo.delete"},"Delete")))))},D=a(385),x=a(290),I=a(184),z=a(384),J=a(108),L=a.n(J),P=Object(p.a)({root:{width:300,margin:15,backgroundColor:"#fff",borderRadius:".25rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"},pos:{marginBottom:12}}),A=function(e){var t=e.handler,a=P(),n=Object(h.a)(),o=n.isDarkTheme,l=(n.setLightTheme,n.setDarkTheme,Object(f.a)({palette:{type:o?"dark":"light",primary:{light:"#4dcfca",main:"#39cac4",dark:"#31b8b2"}}})),c=Object(i.useState)({name:"",deadline:new Date,priority:0,editing:!1}),d=c[0],m=c[1];return r.a.createElement(g.a,{theme:l},r.a.createElement(b.a,{className:u()(a.root,L.a.additem)},!d.editing&&r.a.createElement("div",{className:L.a.cover,onClick:function(){return m(Object.assign({},d,{editing:!0}))}},"+"),r.a.createElement(w.a,null,r.a.createElement(D.a,{label:r.a.createElement(N.a,{id:"todo.new"},"New item"),className:L.a.field,multiline:!0,variant:"outlined",margin:"dense",value:d.name,onChange:function(e){return m(Object.assign({},d,{name:e.currentTarget.value}))}}),r.a.createElement(I.a,{utils:x.a},r.a.createElement(z.a,{label:r.a.createElement(N.a,{id:"todo.due"},"Deadline"),className:L.a.field,disableToolbar:!0,variant:"inline",inputVariant:"outlined",margin:"dense",format:"yyyy/M/d",value:d.deadline,onChange:function(e){return m(Object.assign({},d,{deadline:e}))}})),r.a.createElement(C.a,{variant:"body2",component:"p"},r.a.createElement("span",{className:L.a.priority},r.a.createElement(N.a,{id:"todo.priority"},"Priority: "),d.priority),r.a.createElement(y.a,{value:d.priority,min:0,max:10,marks:!0,onChange:function(e,t){return m(Object.assign({},d,{priority:t}))}}))),r.a.createElement(v.a,null,r.a.createElement(k.a,{size:"small",onClick:function(){t.addItem(d.name,d.deadline,d.priority),m({name:"",deadline:new Date,priority:0,editing:!1})}},r.a.createElement(N.a,{id:"todo.add"},"Add")),r.a.createElement(k.a,{size:"small",onClick:function(){m({name:"",deadline:new Date,priority:0,editing:!1})}},r.a.createElement(N.a,{id:"todo.cancel"},"Cancel")))))},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={list:[]},a.handler={toggle:function(e){a.setState((function(t){return{list:t.list.map((function(t){return t.id===e.id?Object.assign({},t,{done:!e.done}):t}))}}))},remove:function(e){a.setState((function(t){return{list:t.list.filter((function(t){return t.id!==e.id}))}}))},setPriority:function(e,t){a.setState((function(a){return{list:a.list.map((function(a){return a.id===e.id?Object.assign({},a,{priority:t}):a}))}}))},rename:function(e){},addItem:function(e,t,n){a.setState((function(a){var i=a.list.concat([{id:c()(),name:e,priority:n,deadline:t,done:!1}]);return i.sort((function(e,t){return t.priority-e.priority})),{list:i}}))},update:function(){a.setState((function(e){var t=[].concat(e.list);return t.sort((function(e,t){return t.priority-e.priority})),{list:t}}))}},a}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.list.filter((function(e){return!e.done})),a=this.state.list.filter((function(e){return e.done}));return r.a.createElement(o.a,{title:"Todo list",description:"A convenient todo list"},r.a.createElement("main",null,r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:m.a.todolist},r.a.createElement("h1",null,r.a.createElement(N.a,{id:"todo.title"},"Todo list")),r.a.createElement("p",{style:{textAlign:"left"}},r.a.createElement(N.a,{id:"todo.desc",values:{note:r.a.createElement("b",null,r.a.createElement(N.a,{id:"todo.desc.note"},"Note:")),link:r.a.createElement("a",{href:"https://github.com/Computerization/New-member-practice-commit/tree/master/2019/Josh-Cena/Joshua-Todolist%20with%20vue"},r.a.createElement(N.a,{id:"todo.desc.link"},"our club's repo"))}},"{note} This is not intended to be functional, but merely a showcase of what I had once created. That was probably my first independent project, originally with plain HTML/CSS/JavaScript, later refactored with Vue. It was committed to {link}. Looking back at those days when I was green and ignorant, there were a lot worth reminiscing. The only unfortunate thing was that the original version used Vue and here I had to use React; plus, to match the page style, I drastically modified everything. So it's like the ship of Theseus\u2014every single line of code has been changed, but believe it or not, it's still the same Todo list project.")),r.a.createElement("h2",null,r.a.createElement(N.a,{id:"todo.todoTitle"},"Todo")),r.a.createElement("div",{className:m.a.cardContainer},t.map((function(t){return r.a.createElement(S,{key:t.id,item:t,handler:e.handler})})),r.a.createElement(A,{handler:this.handler})),r.a.createElement("h2",null,r.a.createElement(N.a,{id:"todo.doneTitle"},"Done")),r.a.createElement("div",{className:m.a.cardContainer},a.map((function(t){return r.a.createElement(S,{key:t.id,item:t,handler:e.handler})})))))))},t}(i.Component);t.default=M}}]);