(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[2494],{6387:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7294),a=n(6010),o=n(261),l=n(4973),s=n(1002),i=n(9611),c=n(136);function u(){u=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,a){var o=new RegExp(e,r);return t.set(o,a||t.get(e)),(0,i.Z)(o,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return(0,c.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=r(n,this)),n},n.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var o=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof a){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==(0,s.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(r(e,l)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},u.apply(this,arguments)}var h=n(195),g=n(3243),f=n(4845),d=n(6767),b=n.n(d),m="colorBlock_OhKd",p="card_3bqf";function y(e){try{return b()(e),e}catch(o){if(e.startsWith("#")||e.includes(",")){if(/^\d+\,\s*\d+\,\s*\d+$/.test(e))return"rgb("+e+")";if(/^hsl\(\d+\,\s*\d+%?\,\s*\d+%?\)$/.test(e)){var t=e.match(u(/^hsl\(([0-9]+),[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]+%?),[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]+%?)\)$/,{h:1,s:2,l:3})).groups,n=t.h,r=t.s,a=t.l;return"hsl("+n+", "+(r.endsWith("%")?r:r+"%")+", "+(a.endsWith("%")?a:a+"%")+")"}return e}return"#"+e}}function v(){var e=(0,r.useState)("#39cac4"),t=e[0],n=e[1],a=(0,r.useState)({hex:"#39cac4",rgb:"rgb(57, 202, 196)",hsl:"hsl(177.5, 57.8%, 50.8%)"}),o=a[0],l=a[1],s=(0,r.useState)(!0),i=s[0],c=s[1],u=(0,r.useState)([57,202,196,1]),d=u[0],v=u[1],w=(0,r.useState)([177.5,57.8,50.8,1]),k=w[0],x=w[1];function M(e){l({hex:e.hex(),rgb:e.rgb().string(),hsl:e.hsl().string()}),c(!0)}return(0,r.useEffect)((function(){try{M(b()(y(t)))}catch(e){c(!1)}}),[t]),(0,r.useEffect)((function(){var e=b().rgb(d);n(e.rgb().string()),M(e)}),[d]),(0,r.useEffect)((function(){var e=b().hsl(k);n(e.hsl().string()),M(e)}),[k]),r.createElement("div",{className:p},r.createElement("div",null,r.createElement(g.Z,{error:!i,value:t,variant:"outlined",onChange:function(e){return n(e.target.value)}})),r.createElement("div",{className:"center",style:{display:"flex"}},r.createElement("div",{className:"margin-top--md",style:{flex:1}},r.createElement("div",{className:m,style:{backgroundColor:y(t)}})),r.createElement("div",{className:"margin-top--md",style:{flex:2,textAlign:"left"}},Object.keys(o).map((function(e,t){return r.createElement("div",{style:{cursor:"pointer"},role:"button",key:t,onClick:function(){return(0,h.Z)(o[e])}},e,": ",r.createElement("code",null,o[e]))})))),r.createElement("div",{style:{display:"flex"}},r.createElement("div",{className:"margin--md",style:{flex:1}},b()(o.rgb).rgb().array().map((function(e,t){var n=["R","G","B","A"][t],a=[255,255,255,1][t],l=b()(o.rgb).rgb().array(),s=l[0],i=l[1],c=l[2],u=0===t?"linear-gradient(90deg, rgb(0,"+i+","+c+"), rgb(255,"+i+","+c+"))":1===t?"linear-gradient(90deg, rgb("+s+",0,"+c+"), rgb("+s+",255,"+c+"))":"linear-gradient(90deg, rgb("+s+","+i+",0), rgb("+s+","+i+",255))";return r.createElement("div",null,r.createElement("div",{style:{display:"flex"}},r.createElement("div",{id:"slider-"+n,style:{marginRight:8}},n),r.createElement("div",{style:{flexGrow:100}},r.createElement(f.Z,{id:"slider-"+n,key:t,value:e,min:0,max:a,onChange:function(e,n){var r;return v(Object.assign([],d,((r={})[t]=n,r)))}}))),r.createElement("div",{style:{height:10,backgroundImage:u}}))}))),r.createElement("div",{className:"margin--md",style:{flex:1}},b()(o.hsl).hsl().array().map((function(e,t){var n=["H","S","L","A"][t],a=[359,100,100,1][t],l=b()(o.hsl).hsl().array();l[0],l[1],l[2];return r.createElement("div",{style:{display:"flex"}},r.createElement("div",{style:{flexGrow:100}},r.createElement(f.Z,{id:"slider-"+n,key:t,value:e,min:0,max:a,onChange:function(e,n){var r;return x(Object.assign([],k,((r={})[t]=n,r)))}})),r.createElement("div",{id:"slider-"+n,style:{marginLeft:8}},n))})))))}function w(){return r.createElement(o.Z,{title:"Color converter",description:"A color converter between different models; provides nice visuals"},r.createElement("main",null,r.createElement("div",{className:(0,a.Z)("container margin-vert--lg text--center")},r.createElement("h1",null,r.createElement(l.Z,{id:"colorConvert.title"},"Color converter [WIP]")),r.createElement(v,null))))}},2086:function(e,t,n){"use strict";var r=n(7462),a=n(3366),o=n(7294),l=["width","height"];t.Z=function(e){var t=e.width,n=void 0===t?20:t,s=e.height,i=void 0===s?20:s,c=(0,a.Z)(e,l);return o.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:n,height:i,viewBox:"0 0 24 24",fill:"#000000","aria-hidden":!0},c),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))}},8168:function(e,t,n){const r=n(8874),a={};for(const l of Object.keys(r))a[r[l]]=l;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const l of Object.keys(o)){if(!("channels"in o[l]))throw new Error("missing channels property: "+l);if(!("labels"in o[l]))throw new Error("missing channel labels property: "+l);if(o[l].labels.length!==o[l].channels)throw new Error("channel and label counts mismatch: "+l);const{channels:e,labels:t}=o[l];delete o[l].channels,delete o[l].labels,Object.defineProperty(o[l],"channels",{value:e}),Object.defineProperty(o[l],"labels",{value:t})}o.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.min(t,n,r),o=Math.max(t,n,r),l=o-a;let s,i;o===a?s=0:t===o?s=(n-r)/l:n===o?s=2+(r-t)/l:r===o&&(s=4+(t-n)/l),s=Math.min(60*s,360),s<0&&(s+=360);const c=(a+o)/2;return i=o===a?0:c<=.5?l/(o+a):l/(2-o-a),[s,100*i,100*c]},o.rgb.hsv=function(e){let t,n,r,a,o;const l=e[0]/255,s=e[1]/255,i=e[2]/255,c=Math.max(l,s,i),u=c-Math.min(l,s,i),h=function(e){return(c-e)/6/u+.5};return 0===u?(a=0,o=0):(o=u/c,t=h(l),n=h(s),r=h(i),l===c?a=r-n:s===c?a=1/3+t-r:i===c&&(a=2/3+n-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},o.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const a=o.rgb.hsl(e)[0],l=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[a,100*l,100*r]},o.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.min(1-t,1-n,1-r);return[100*((1-t-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const t=a[e];if(t)return t;let n,o=1/0;for(const a of Object.keys(r)){const t=r[a],i=(s=t,((l=e)[0]-s[0])**2+(l[1]-s[1])**2+(l[2]-s[2])**2);i<o&&(o=i,n=a)}var l,s;return n},o.keyword.rgb=function(e){return r[e]},o.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},o.rgb.lab=function(e){const t=o.rgb.xyz(e);let n=t[0],r=t[1],a=t[2];n/=95.047,r/=100,a/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*r-16,500*(n-r),200*(r-a)]},o.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let a,o,l;if(0===n)return l=255*r,[l,l,l];a=r<.5?r*(1+n):r+n-r*n;const s=2*r-a,i=[0,0,0];for(let c=0;c<3;c++)o=t+1/3*-(c-1),o<0&&o++,o>1&&o--,l=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,i[c]=255*l;return i},o.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,a=n;const o=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,a*=o<=1?o:2-o;return[t,100*(0===r?2*a/(o+a):2*n/(r+n)),100*((r+n)/2)]},o.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),l=255*r*(1-n),s=255*r*(1-n*o),i=255*r*(1-n*(1-o));switch(r*=255,a){case 0:return[r,i,l];case 1:return[s,r,l];case 2:return[l,r,i];case 3:return[l,s,r];case 4:return[i,l,r];case 5:return[r,l,s]}},o.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,a=Math.max(r,.01);let o,l;l=(2-n)*r;const s=(2-n)*a;return o=n*a,o/=s<=1?s:2-s,o=o||0,l/=2,[t,100*o,100*l]},o.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const a=n+r;let o;a>1&&(n/=a,r/=a);const l=Math.floor(6*t),s=1-r;o=6*t-l,0!=(1&l)&&(o=1-o);const i=n+o*(s-n);let c,u,h;switch(l){default:case 6:case 0:c=s,u=i,h=n;break;case 1:c=i,u=s,h=n;break;case 2:c=n,u=s,h=i;break;case 3:c=n,u=i,h=s;break;case 4:c=i,u=n,h=s;break;case 5:c=s,u=n,h=i}return[255*c,255*u,255*h]},o.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a))]},o.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let a,o,l;return a=3.2406*t+-1.5372*n+-.4986*r,o=-.9689*t+1.8758*n+.0415*r,l=.0557*t+-.204*n+1.057*r,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},o.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(t-n),200*(n-r)]},o.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const a=n**3,o=t**3,l=r**3;return n=a>.008856?a:(n-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},o.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let a;a=360*Math.atan2(r,n)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(n*n+r*r),a]},o.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},o.rgb.ansi16=function(e,t=null){const[n,r,a]=e;let l=null===t?o.rgb.hsv(e)[2]:t;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(a/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===l&&(s+=60),s},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];if(t===n&&n===r)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},o.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},o.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},o.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map((e=>e+e)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},o.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.max(Math.max(t,n),r),o=Math.min(Math.min(t,n),r),l=a-o;let s,i;return s=l<1?o/(1-l):0,i=l<=0?0:a===t?(n-r)/l%6:a===n?2+(r-t)/l:4+(t-n)/l,i/=6,i%=1,[360*i,100*l,100*s]},o.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let a=0;return r<1&&(a=(n-.5*r)/(1-r)),[e[0],100*r,100*a]},o.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],100*r,100*a]},o.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const a=[0,0,0],o=t%1*6,l=o%1,s=1-l;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return i=(1-n)*r,[255*(n*a[0]+i),255*(n*a[1]+i),255*(n*a[2]+i)]},o.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},o.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},o.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},o.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],100*r,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},2085:function(e,t,n){const r=n(8168),a=n(4111),o={};Object.keys(r).forEach((e=>{o[e]={},Object.defineProperty(o[e],"channels",{value:r[e].channels}),Object.defineProperty(o[e],"labels",{value:r[e].labels});const t=a(e);Object.keys(t).forEach((n=>{const r=t[n];o[e][n]=function(e){const t=function(...t){const n=t[0];if(null==n)return n;n.length>1&&(t=n);const r=e(t);if("object"==typeof r)for(let e=r.length,a=0;a<e;a++)r[a]=Math.round(r[a]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),o[e][n].raw=function(e){const t=function(...t){const n=t[0];return null==n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=o},4111:function(e,t,n){const r=n(8168);function a(e){const t=function(){const e={},t=Object.keys(r);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),a=Object.keys(r[e]);for(let r=a.length,o=0;o<r;o++){const r=a[o],l=t[r];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,n.unshift(r))}}return t}function o(e,t){return function(n){return t(e(n))}}function l(e,t){const n=[t[e].parent,e];let a=r[t[e].parent][e],l=t[e].parent;for(;t[l].parent;)n.unshift(t[l].parent),a=o(r[t[l].parent][l],a),l=t[l].parent;return a.conversion=n,a}e.exports=function(e){const t=a(e),n={},r=Object.keys(t);for(let a=r.length,o=0;o<a;o++){const e=r[o];null!==t[e].parent&&(n[e]=l(e,t))}return n}},8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(e,t,n){var r=n(8874),a=n(6851),o={};for(var l in r)r.hasOwnProperty(l)&&(o[r[l]]=l);var s=e.exports={to:{},get:{}};function i(e,t,n){return Math.min(Math.max(t,e),n)}function c(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}s.get=function(e){var t,n;switch(e.substring(0,3).toLowerCase()){case"hsl":t=s.get.hsl(e),n="hsl";break;case"hwb":t=s.get.hwb(e),n="hwb";break;default:t=s.get.rgb(e),n="rgb"}return t?{model:n,value:t}:null},s.get.rgb=function(e){if(!e)return null;var t,n,a,o=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=t[2],t=t[1],n=0;n<3;n++){var l=2*n;o[n]=parseInt(t.slice(l,l+2),16)}a&&(o[3]=parseInt(a,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(t=t[1])[3],n=0;n<3;n++)o[n]=parseInt(t[n]+t[n],16);a&&(o[3]=parseInt(a+a,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(n=0;n<3;n++)o[n]=parseInt(t[n+1],0);t[4]&&(o[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=e.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(o=r[t[1]])?(o[3]=1,o):null:null;for(n=0;n<3;n++)o[n]=Math.round(2.55*parseFloat(t[n+1]));t[4]&&(o[3]=parseFloat(t[4]))}for(n=0;n<3;n++)o[n]=i(o[n],0,255);return o[3]=i(o[3],0,1),o},s.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(n)?1:n,0,1)]}return null},s.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(n)?1:n,0,1)]}return null},s.to.hex=function(){var e=a(arguments);return"#"+c(e[0])+c(e[1])+c(e[2])+(e[3]<1?c(Math.round(255*e[3])):"")},s.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},s.to.rgb.percent=function(){var e=a(arguments),t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),r=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+n+"%, "+r+"%)":"rgba("+t+"%, "+n+"%, "+r+"%, "+e[3]+")"},s.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},s.to.hwb=function(){var e=a(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},s.to.keyword=function(e){return o[e.slice(0,3)]}},6767:function(e,t,n){const r=n(9818),a=n(2085),o=[].slice,l=["keyword","gray","hex"],s={};for(const d of Object.keys(a))s[o.call(a[d].labels).sort().join("")]=d;const i={};function c(e,t){if(!(this instanceof c))return new c(e,t);if(t&&t in l&&(t=null),t&&!(t in a))throw new Error("Unknown model: "+t);let n,u;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof c)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){const t=r.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,u=a[this.model].channels,this.color=t.value.slice(0,u),this.valpha="number"==typeof t.value[u]?t.value[u]:1}else if(e.length>0){this.model=t||"rgb",u=a[this.model].channels;const n=o.call(e,0,u);this.color=f(n,u),this.valpha="number"==typeof e[u]?e[u]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const r=t.sort().join("");if(!(r in s))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=s[r];const o=a[this.model].labels,l=[];for(n=0;n<o.length;n++)l.push(e[o[n]]);this.color=f(l)}if(i[this.model])for(u=a[this.model].channels,n=0;n<u;n++){const e=i[this.model][n];e&&(this.color[n]=e(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}c.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in r.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const n=1===t.valpha?t.color:t.color.concat(this.valpha);return r.to[t.model](n)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return r.to.rgb.percent(n)},array(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object(){const e={},t=a[this.model].channels,n=a[this.model].labels;for(let r=0;r<t;r++)e[n[r]]=this.color[r];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new c(this.color.map(function(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}(e)).concat(this.valpha),this.model)},alpha(e){return arguments.length>0?new c(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:u("rgb",0,h(255)),green:u("rgb",1,h(255)),blue:u("rgb",2,h(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:u("hsl",1,h(100)),lightness:u("hsl",2,h(100)),saturationv:u("hsv",1,h(100)),value:u("hsv",2,h(100)),chroma:u("hcg",1,h(100)),gray:u("hcg",2,h(100)),white:u("hwb",1,h(100)),wblack:u("hwb",2,h(100)),cyan:u("cmyk",0,h(100)),magenta:u("cmyk",1,h(100)),yellow:u("cmyk",2,h(100)),black:u("cmyk",3,h(100)),x:u("xyz",0,h(100)),y:u("xyz",1,h(100)),z:u("xyz",2,h(100)),l:u("lab",0,h(100)),a:u("lab",1),b:u("lab",2),keyword(e){return arguments.length>0?new c(e):a[this.model].keyword(this.color)},hex(e){return arguments.length>0?new c(e):r.to.hex(this.rgb().round().color)},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[n,r]of e.entries()){const e=r/255;t[n]=e<=.03928?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return c.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let n=t.color[0];return n=(n+e)%360,n=n<0?360+n:n,t.color[0]=n,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const n=e.rgb(),r=this.rgb(),a=void 0===t?.5:t,o=2*a-1,l=n.alpha()-r.alpha(),s=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,i=1-s;return c.rgb(s*n.red()+i*r.red(),s*n.green()+i*r.green(),s*n.blue()+i*r.blue(),n.alpha()*a+r.alpha()*(1-a))}};for(const d of Object.keys(a)){if(l.includes(d))continue;const e=a[d].channels;c.prototype[d]=function(){if(this.model===d)return new c(this);if(arguments.length>0)return new c(arguments,d);const t="number"==typeof arguments[e]?e:this.valpha;return new c(g(a[this.model][d].raw(this.color)).concat(t),d)},c[d]=function(t){return"number"==typeof t&&(t=f(o.call(arguments),e)),new c(t,d)}}function u(e,t,n){e=Array.isArray(e)?e:[e];for(const r of e)(i[r]||(i[r]=[]))[t]=n;return e=e[0],function(r){let a;return arguments.length>0?(n&&(r=n(r)),a=this[e](),a.color[t]=r,a):(a=this[e]().color[t],n&&(a=n(a)),a)}}function h(e){return function(t){return Math.max(0,Math.min(e,t))}}function g(e){return Array.isArray(e)?e:[e]}function f(e,t){for(let n=0;n<t;n++)"number"!=typeof e[n]&&(e[n]=0);return e}e.exports=c},5171:function(e){e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},6851:function(e,t,n){"use strict";var r=n(5171),a=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var t=[],n=0,l=e.length;n<l;n++){var s=e[n];r(s)?t=a.call(t,o.call(s)):t.push(s)}return t};l.wrap=function(e){return function(){return e(l(arguments))}}},195:function(e,t,n){"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(c){}return a.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus(),i}n.d(t,{Z:function(){return r}})}}]);