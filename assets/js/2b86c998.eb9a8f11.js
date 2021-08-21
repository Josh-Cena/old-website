"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[198],{8322:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(7294),r=a(6742),i=a(4973);function o(e){var n=e.frontMatter,a=n.date,o=n.link;return a||o?t.createElement("div",{className:"alert alert--info margin-bottom--md",role:"contentinfo"},a&&t.createElement(i.Z,{id:"docMetadataBanner.firstPublished",values:{date:t.createElement("b",null,a.toLocaleDateString("zh-Hans"))}},"First published on {date}. "),o&&t.createElement(r.default,{to:o},t.createElement(i.Z,{id:"docMetadataBanner.sourceLink"},"Source link"))):null}},3202:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},frontMatterAssets:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return g},default:function(){return f}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(1645),p=a(8322),s=["components"],l={id:"scripting",title:"\u811a\u672c\u722c\u53d6\u6570\u636e\u306e\u521d\u4f53\u9a8c",sidebar_label:"First experience with script crawling",date:new Date("2020-10-15T00:00:00.000Z"),link:"https://mp.weixin.qq.com/s/shQ9WRD0KyhIzSyrodff9A"},c=void 0,d=void 0,u={unversionedId:"Technology/scripting",id:"Technology/scripting",isDocsHomePage:!1,title:"\u811a\u672c\u722c\u53d6\u6570\u636e\u306e\u521d\u4f53\u9a8c",description:"\u55ef\uff0c\u4e3a\u4e86\u7ed9\u6211\u4eec\u6b63\u5728\u642d\u5efa\u7684\u793e\u56e2\u7ba1\u7406\u7f51\u7ad9\u6dfb\u52a0\u4e00\u4e9b\u521d\u59cb\u4fe1\u606f\uff0c\u6211\u51b3\u5b9a\u53bb\u5b66\u6821\u7684\u5e73\u53f0\u4e0a\u6293\u70b9\u5168\u6821\u793e\u56e2\u7684\u6e05\u5355\u4fe1\u606f\u4e0b\u6765\u3002",source:"@site/docs/Technology/3-scripting.mdx",sourceDirName:"Technology",slug:"/Technology/scripting",permalink:"/docs/Technology/scripting",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"scripting",title:"\u811a\u672c\u722c\u53d6\u6570\u636e\u306e\u521d\u4f53\u9a8c",sidebar_label:"First experience with script crawling",date:"2020-10-15T00:00:00.000Z",link:"https://mp.weixin.qq.com/s/shQ9WRD0KyhIzSyrodff9A"},sidebar:"docs",previous:{title:"Typesetting with grace",permalink:"/docs/Technology/typeset"},next:{title:'Introducing "Easy-TSIMS"',permalink:"/docs/Technology/easy-tsims"}},g=[],m={toc:g};function f(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(p.Z,{frontMatter:l,mdxType:"DocMetadataBanner"}),(0,i.kt)("p",null,"\u55ef\uff0c\u4e3a\u4e86\u7ed9\u6211\u4eec\u6b63\u5728\u642d\u5efa\u7684\u793e\u56e2\u7ba1\u7406\u7f51\u7ad9\u6dfb\u52a0\u4e00\u4e9b\u521d\u59cb\u4fe1\u606f\uff0c\u6211\u51b3\u5b9a\u53bb\u5b66\u6821\u7684\u5e73\u53f0\u4e0a\u6293\u70b9\u5168\u6821\u793e\u56e2\u7684\u6e05\u5355\u4fe1\u606f\u4e0b\u6765\u3002"),(0,i.kt)("p",null,"Requests \u4e00\u7c7b\u7684 Python \u722c\u866b\u6211\u4ece\u6765\u6ca1\u6709\u5b9e\u9645\u7528\u8fc7\uff0c\u901a\u8fc7\u6293\u5305\u4e5f\u6ca1\u6709\u66b4\u9732\u4efb\u4f55 Request \u53c2\u6570\uff0c\u6240\u4ee5\u6211\u4e5f\u4e0d\u6653\u5f97\u4ece\u4f55\u4e0b\u624b\uff1b\u56e0\u6b64\uff0c\u6211\u9009\u62e9\u4e86\u76f4\u63a5\u68c0\u67e5 AJAX \u8bf7\u6c42\u6e90\u7801\u5e76\u6279\u91cf\u6784\u9020 payload \u7684\u65b9\u6cd5\u3002\u6bd5\u7adf\uff0c\u5b66\u6821\u7684\u5e73\u53f0\u662f\u6211\u7684\u8001\u670b\u53cb\u4e86\uff0c\u5bf9\u4e8e\u5b83\u7684\u67b6\u6784\uff0c\u8fd8\u662f\u6bd4\u8f83\u4e86\u89e3\u7684\u3002\uff08\u5f53\u7136\uff0c\u6709\u51e0\u4f4d\u5927\u4f6c\u6bd4\u6211\u4e86\u89e3\uff1a\u6211\u8fd8\u4ece\u6765\u6ca1\u6709\u5c1d\u8bd5\u7ed5\u8fc7\u6743\u9650\u68c0\u67e5\u83b7\u53d6\u65e0\u6cd5\u67e5\u770b\u7684\u6570\u636e\u8fc7\uff0c\u4e0b\u6b21\u641e\u5b9a\u4e86\u518d\u5199\u4e2a write-up\uff09"),(0,i.kt)("p",null,"\u6211\u4eec\u8981\u201c\u722c\u53d6\u201d\u7684\u662f\u793e\u56e2\u4fe1\u606f\u9875\uff0c\u5b83\u5c55\u793a\u4e86\u6240\u6709\u793e\u56e2\u7684\u540d\u5b57\u4e0e\u4ecb\u7ecd\uff0c\u4f46\u53ea\u663e\u793a\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u7684\u793e\u56e2\uff0c\u800c\u624b\u52a8\u9010\u4e2a\u9009\u62e9\u518d\u590d\u5236\u663e\u7136\u4e0d\u73b0\u5b9e\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u8981\u5148\u77e5\u9053\u83b7\u53d6\u5e76\u5237\u65b0\u9875\u9762\u4e0a\u7684\u793e\u56e2\u4fe1\u606f\u7684\u8bf7\u6c42\u662f\u4ece\u4f55\u5904\u53d1\u51fa\u7684\u3002"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibSNIrDEiaLeaGew1FKn213nrlzVDLbibNBGXf7AUkwosNrHpMW4TTIFXvmlbcdf9OgNiaGE5UXcgSIg.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u5148\u5b9a\u4f4d\u5230\u9875\u9762\u7684 js \u4ee3\u7801\u3002\u770b\u8d77\u6765\u6709\u4e09\u4e2a\u5916\u90e8\u811a\u672c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"init category dropdown.js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"init group dropdown.js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"add group info.js"),"\uff0c\u4ee5\u53ca\u4e00\u4e2a\u9875\u9762\u5185\u5d4c\u7684\u811a\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"jQuery(document).ready(function() {\n  initCAScategoryDropDown.init();\n  $('#select_category').change(function(){\n    var selValue=$(this).children('option:selected').val();\n    initCASGroupsDropDown.init(selValue);\n  });\n  $('#select_group').change(function(){\n    var selValue=$(this).children('option:selected').val();\n    addGroupInfo.init(selValue);\n  });\n);\n")),(0,i.kt)("p",null,"\u5176\u4e2d\u63d0\u5230\u4e86\u4e24\u4e2a\u5143\u7d20\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"#select_category")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"#select_group"),"\u3002\u4e0d\u96be\u53d1\u73b0\uff0c\u8fd9\u662f\u53f3\u8fb9\u7684\u4e24\u4e2a\u4e0b\u62c9\u83dc\u5355\u3002\u903b\u8f91\u662f\uff0c\u5148\u5728\u7b2c\u4e00\u4e2a\u83dc\u5355\u4e2d\u9009\u62e9\u5206\u7ec4\uff08Service, Academic \u7b49\uff09\uff0c\u518d\u6839\u636e\u9009\u62e9\u7684\u9879\u76ee\u66f4\u65b0\u7b2c\u4e8c\u4e2a\u793e\u56e2\u83dc\u5355\u3002\u4e3a\u4e86\u786e\u5b9a\u8fd9\u4e00\u70b9\uff0c\u5b9e\u9645\u64cd\u4f5c\u4e86\u4e00\u6b21\uff1a"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibSNIrDEiaLeaGew1FKn213nSsZSeJP8K3YzylnS7tmHnKjmorq7XglaQuHCA0aeSVNd0GJQBH0phg.png",mdxType:"Figure"}),(0,i.kt)("p",null,'\u5148\u5728\u7b2c\u4e00\u4e2a\u83dc\u5355\u4e2d\u9009\u62e9 "Service"\uff0c',(0,i.kt)("inlineCode",{parentName:"p"},"init_groups_dropdown.php")," \u88ab\u8c03\u7528\uff1b\u518d\u9009\u62e9\u201c\u4fe1\u606f\u5316\u793e\u201d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"add_group_info.php")," \u88ab\u8c03\u7528\uff0c\u7b26\u5408\u4e0a\u9762\u7684\u731c\u60f3\u3002\u6b64\u65f6\uff0c\u5c31\u5bf9\u540e\u7aef\u7684\u8c03\u7528\u987a\u5e8f\u6709\u4e86\u5927\u6982\u7684\u4e86\u89e3\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u6700\u4e3a\u5173\u5fc3\u7684\u81ea\u7136\u662f\u5b9e\u9645\u5c06\u793e\u56e2\u4fe1\u606f\u6ce8\u5165\u8fdb\u9875\u9762\u7684\u90a3\u4e2a\u8bf7\u6c42\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"add_group_info"),"\u3002\u67e5\u770b\u5b83\u7684 js \u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'var addGroupInfo = (function () {\n  return {\n    init: function (valID) {\n      $.ajax({\n        url: "php/cas_add_group_info.php",\n        dataType: "json",\n        type: "post",\n        data: {\n          groupid: valID,\n        },\n        success: function (data) {\n          //$("#text_groupNo").val(data.groups[i].C_GroupNo);\n          //$("#text_foundtime").val(data.groups[i].C_FoundTime);\n          $("#span_group_name").empty();\n          var groupName = "";\n          groupName += "<h4>" + data.groups[0].C_NameC;\n          groupName += "(" + data.groups[0].C_NameE + ")</h4>";\n          $("#span_group_name").append(groupName);\n          $("#span_descriptionC").empty();\n          var DescC = "";\n          DescC += "<p>" + data.groups[0].C_DescriptionC + "</p>";\n          $("#span_descriptionC").append(DescC);\n          $("#span_descriptionE").empty();\n          var DescE = "";\n          DescE += "<p>" + data.groups[0].C_DescriptionE + "</p>";\n          $("#span_descriptionE").append(DescE);\n          $("#d_teamleader").empty();\n          var TeamLeader = \'<div class="row">\';\n          //alert(data.gmember.length);\n          for (var i = 0; i < data.gmember.length; i++) {\n            if (data.gmember[i].LeaderYes > 0) {\n              TeamLeader += \'<div class="col-md-4">\';\n              TeamLeader += \'<ul class="list-inline sidebar-tags">\';\n              TeamLeader += \'<li><a href="#"><i class="fa fa-user"></i>\';\n              TeamLeader += data.gmember[i].S_Name + "(";\n              TeamLeader += data.gmember[i].S_Nickname + ")</a></li></ul>";\n              TeamLeader +=\n                \'Email: <a href="#">\' + data.gmember[i].S_Email + "</a>";\n              TeamLeader += "<p>TEL\xef\xbc\u0161" + data.gmember[i].S_STel + "</p>";\n              TeamLeader += "</div>";\n            }\n          }\n          TeamLeader += "</div>";\n          $("#d_teamleader").append(TeamLeader);\n          /////////////////////////////////////////////////////////\n          $("#d_supervisor").empty();\n          var Supervisor = "";\n          if (data.supervisor.length != 0) {\n            Supervisor += \'<ul class="list-inline sidebar-tags" >\';\n            Supervisor +=\n              \'<li><a href="#"><i class="fa fa-user"></i>\' +\n              data.supervisor[0].T_Name;\n            Supervisor +=\n              "(" + data.supervisor[0].T_Nickname + ")</a></li></ul>";\n            Supervisor +=\n              \'Email: <a href="#">\' + data.supervisor[0].T_Email + "</a>";\n            Supervisor += "<p>TEL\xef\xbc\u0161" + data.supervisor[0].T_MTel + "</p>";\n          }\n          $("#d_supervisor").append(Supervisor);\n          //////////////////////////////////////////////////////\n          $("#d_group_leader").empty();\n          var Groupleader = "";\n          for (var i = 0; i < data.gmember.length; i++) {\n            if (data.gmember[i].LeaderYes == 2) {\n              Groupleader += \'<ul class="list-inline sidebar-tags" >\';\n              Groupleader +=\n                \'<li><a href="#"><i class="fa fa-user"></i>\' +\n                data.gmember[0].S_Name;\n              Groupleader +=\n                "(" + data.gmember[0].S_Nickname + ")</a></li></ul>";\n              Groupleader +=\n                \'Email: <a href="#">\' + data.gmember[0].S_Email + "</a>";\n              Groupleader += "<p>TEL\xef\xbc\u0161" + data.gmember[0].S_STel + "</p>";\n            }\n          }\n          $("#d_group_leader").append(Groupleader);\n          ///////////////////////////////////////////////////////\n          $("#s_tNumber").empty();\n          //alert(data.gmember.length);\n          var TNumber = "";\n          TNumber += data.gmember.length;\n          $("#s_tNumber").append(TNumber);\n          ///////////////////////////////////////////////////////\n          $("#u_teammate").empty();\n          var teammate = "";\n          //alert(data.gmember.length);\n          for (var i = 0; i < data.gmember.length; i++) {\n            teammate += \'<li><a href="#"><i class="fa fa-user"></i>\';\n            teammate += data.gmember[i].S_Name;\n            teammate += "(" + data.gmember[i].S_Nickname;\n            teammate += ")</a></li>";\n          }\n          $("#u_teammate").append(teammate);\n          if (data.projectyes == 0) {\n            $("#d_projectyes").show();\n          } else {\n            $("#d_projectyes").hide();\n          }\n          $("#d_activity_records").empty();\n          var actrecord = "";\n          //alert(data.gmember.length);\n          for (var i = 0; i < data.grecord.length; i++) {\n            actrecord +=\n              \'<ul class="blog-info"><li><i class="fa fa-calendar"></i>\';\n            actrecord += data.grecord[i].C_Date.substr(0, 10) + "</li>";\n            //actrecord += \'<li><i class="fa fa-comments"></i>\' + 17 +\'</li>\';\n            actrecord += \'<li><i class="fa fa-tags"></i>\';\n            actrecord += data.grecord[i].C_Theme + "</li></ul>";\n            actrecord += "<p>" + data.grecord[i].C_Reflection + "</p>";\n          }\n          $("#d_activity_records").append(actrecord);\n        },\n        error: function () {\n          alert("Request failed!");\n        },\n        beforeSend: function () {\n          //alert("Loading!...");\n        },\n      });\n    },\n    // ...\u5176\u4ed6\u51fd\u6570\n  };\n})();\n')),(0,i.kt)("p",null,"\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," \u51fd\u6570\u975e\u5e38\u58ee\u89c2\u3002\u6211\u4eec\u5148\u5b9a\u4f4d\u5230\u6211\u4eec\u9700\u8981\u7684\u51e0\u4e2a\u4fe1\u606f\uff1a\u4e2d\u82f1\u6587\u540d\u5b57\u548c\u4e2d\u82f1\u6587\u7b80\u4ecb\uff0c\u7136\u540e\u628a\u5176\u4ed6\u65e0\u5173\u4fe1\u606f\uff08\u6bd4\u5982\u793e\u5458\u540d\u5355\uff09\u90fd\u5254\u9664\u3002\u540c\u65f6\u53ef\u4ee5\u628a jQuery \u64cd\u4f5c DOM \u5143\u7d20\u7684\u6307\u4ee4\u4e5f\u5220\u9664\uff0c\u6539\u6210\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function init(valID) {\n  $.ajax({\n    url: "php/cas_add_group_info.php",\n    dataType: "json",\n    type: "post",\n    data: {\n      groupid: valID,\n    },\n    success: function (data) {\n      console.log(data.groups[0].C_NameC);\n      console.log(data.groups[0].C_NameE);\n      console.log(data.groups[0].C_DescriptionC);\n      console.log(data.groups[0].C_DescriptionE);\n    },\n  });\n}\n')),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"valID")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"#select_group")," \u7684 option value\uff0c\u6bd4\u5982\u4e0b\u9762\u5217\u51fa\u7684\u8fd9\u4e9b\uff1a"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibSNIrDEiaLeaGew1FKn213nOfHJfOtPpRvyqFK13znUwDIv8ic53Huc0Tt70nic2rVE9dravYG1QGog.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u5728\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u53ea\u8981\u63d0\u4f9b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"valID")," \u5c31\u53ef\u4ee5\u5f97\u5230\u76f8\u5e94\u7684\u793e\u56e2\u4fe1\u606f\uff1a"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibuMG0BxGHIXm8A91QTIXlYZVVXyriasNva7S03icO0YQSwWfYFlpsC1B3NfM789aEEpfTVkm2ssXMQ.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u4e9b option value \u5e76\u4e0d\u662f\u8fde\u7eed\u7f16\u7801\u7684\uff0c\u770b\u8d77\u6765\u975e\u5e38\u968f\u673a\u3002\u90a3\u4e48\uff0c\u4e3a\u4e86\u83b7\u53d6\u6bcf\u4e2a\u5206\u7ec4\u5bf9\u5e94\u7684 option value \u5217\u8868\uff0c\u5c31\u9700\u8981\u67e5\u770b\u83b7\u53d6\u8fd9\u4e00\u4fe1\u606f\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"init group dropdown.js"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'var initCASGroupsDropDown = (function () {\n  return {\n    init: function (initData) {\n      $.ajax({\n        url: "php/cas_init_groups_dropdown.php",\n        dataType: "json",\n        type: "post",\n        data: {\n          categoryid: initData,\n        },\n        success: function (data) {\n          //alert(data[0].title);\n          $("#select_group").empty();\n          $("#select_group").append(\n            "<option value=\'0\'>" + "\u9009\u62e9\u5206\u7ec4 ..." + "</option>"\n          );\n          for (var i = 0; i < data.length; i++) {\n            $("#select_group").append(\n              "<option value=\'" +\n                data[i].C_GroupsID +\n                "\'>" +\n                data[i].C_NameC +\n                "(" +\n                data[i].C_GroupNo +\n                ")</option>"\n            );\n          }\n        },\n        error: function () {\n          alert("Request Initdropdow failed2!");\n        },\n        beforeSend: function () {\n          //alert("Loading!...");\n        },\n      });\n    },\n  };\n})();\n')),(0,i.kt)("p",null,"\u770b\u6765\uff0c\u6bcf\u4e2a\u5206\u7ec4\u5bf9\u5e94\u7684\u6240\u6709\u7684 option value \u88ab\u4fdd\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"C_GroupsID")," \u4e0b\u3002\u6211\u4eec\u5171\u6709 6 \u4e2a\u5206\u7ec4\uff0c\u5206\u522b\u5bf9\u5e94\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryid")," 1~6\uff1b\u5148\u5199\u4e2a\u7b80\u5355\u7684\u811a\u672c\uff0c\u8bd5\u8bd5\u8f93\u51fa\u6bcf\u4e2a\u5206\u7ec4\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"valID")," \u5217\u8868\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'for (let group = 1; group < 7; group++) {\n  $.ajax({\n    url: "php/cas_init_groups_dropdown.php",\n    dataType: "json",\n    type: "post",\n    data: {\n      categoryid: group,\n    },\n    async: false,\n    success: function (data) {\n      let list = [];\n      for (let i = 0; i < data.length; i++) {\n        list.push(data[i].C_GroupsID);\n      }\n      console.log(group + ": " + list);\n    },\n  });\n}\n')),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8bf7\u6c42\u5fc5\u987b\u662f\u540c\u6b65\u7684\uff08AJAX \u9ed8\u8ba4\u662f\u5f02\u6b65\u8bf7\u6c42\uff09\uff0c\u4e0d\u7136 ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," \u65e0\u6cd5\u4e00\u4e00\u5bf9\u5e94\u3002\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibuMG0BxGHIXm8A91QTIXlY76Zhu4zoNJCibfsLF2aib0rZ2aibcqAQl36UciaXiaoWJW8XOBQO1TPOq6Q.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u6570\u636e\uff0c\u5c31\u53ef\u4ee5\u9010\u4e2a\u53d1\u9001\u8bf7\u6c42\u4e86\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u628a\u8fd4\u56de\u7684\u6570\u636e\u8f93\u51fa\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," \u683c\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function getInfo(valID) {\n  let obj = { chnName: "", engName: "", chnDesc: "", engDesc: "" };\n  $.ajax({\n    url: "php/cas_add_group_info.php",\n    dataType: "json",\n    type: "post",\n    data: {\n      groupid: valID,\n    },\n    async: false,\n    success: function (data) {\n      obj.chnName = data.groups[0].C_NameC;\n      obj.engName = data.groups[0].C_NameE;\n      obj.chnDesc = data.groups[0].C_DescriptionC;\n      obj.engDesc = data.groups[0].C_DescriptionE;\n    },\n  });\n  return obj;\n}\n\nlet categoryList = [];\n\nfor (let group = 1; group < 7; group++) {\n  $.ajax({\n    url: "php/cas_init_groups_dropdown.php",\n    dataType: "json",\n    type: "post",\n    data: {\n      categoryid: group,\n    },\n    async: false,\n    success: function (data) {\n      let clubList = [];\n      for (let i = 0; i < data.length; i++)\n        clubList.push(getInfo(data[i].C_GroupsID));\n      categoryList.push(clubList);\n    },\n  });\n}\n\nconsole.log(JSON.stringify(categoryList));\n')),(0,i.kt)("p",null,"\u770b\u770b\u8f93\u51fa\uff1a"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibuMG0BxGHIXm8A91QTIXlYZicVkicMWCRpXWhsibyCc15BIuhicIJibLnzuuUZGBBWhmDmFazXolNfM1g.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u6709 89.5kB \u7684\u4fe1\u606f\uff0c\u9009\u62e9\u62f7\u8d1d\u5230\u7f16\u8f91\u5668\u3002"),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibuMG0BxGHIXm8A91QTIXlYlOYMX1DvxjiaoOicAibn1rPLt95MMk52zrvXQJGSs6oKFbOI57GMr7Hwg.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u6211\u4eec\u9996\u5148\u8981\u628a\u5b83\u5206\u884c\u5e76\u6b63\u786e\u7f29\u8fdb\uff0c\u628a\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"\\r\\n")," \u7684\u6362\u884c\u90fd\u66ff\u6362\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002\u5199\u51e0\u4e2a\u6b63\u5219\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'/(?<=[\\[,])\\[/ ==> "\\n  ["   // \u5339\u914d\u6240\u6709\u4e8c\u7ea7\u5217\u8868\u7684\u524d\u62ec\u53f7\u5e76\u6362\u884c\n/(?<=\\})\\]/    ==> "\\n  ]"   // \u5339\u914d\u6240\u6709\u4e8c\u7ea7\u5217\u8868\u7684\u540e\u62ec\u53f7\u5e76\u6362\u884c\n/\\{/           ==> "\\n    {" // \u5339\u914d\u6240\u6709\u5bf9\u8c61\u7684\u524d\u62ec\u53f7\u5e76\u6362\u884c\n/\\}/           ==> "\\n    }" // \u5339\u914d\u6240\u6709\u5bf9\u8c61\u7684\u540e\u62ec\u53f7\u5e76\u6362\u884c\n/"chnName":/   ==> \'\\n      "chnName": \'\n/"engName":/   ==> \'\\n      "engName": \'\n/"chnDesc":/   ==> \'\\n      "chnDesc": \\n       \'\n/"engDesc":/   ==> \'\\n      "engDesc": \\n       \'\n/\\\\r\\\\n/       ==> "\\\\n"\n')),(0,i.kt)(o.Z,{src:"/img/./docs/Technology/scripting/JGibibkelET6ibuMG0BxGHIXm8A91QTIXlYUF93VtgYOCzzuloH3Ce5zEDXgP4foZ9hicNdN03Fj3Pd3oaVDOT8bhg.png",mdxType:"Figure"}),(0,i.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u4fe1\u606f\uff0c\u5c31\u53ef\u4ee5\u9001\u8fdb\u81ea\u5df1\u7684\u7f51\u7ad9\u91cc\uff0c\u751f\u6210\u793e\u56e2\u5217\u8868\u4e86\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u633a\u6709\u610f\u4e49\u7684\u4e1c\u897f\u53ef\u4ee5\u505a\uff1a\u6bd4\u5982\uff0c\u53ef\u4ee5\u722c\u53d6\u6240\u6709\u5df2\u7ecf\u6d88\u5931\u7684\u793e\u56e2\uff08\u4e5f\u5c31\u662f\u90a3\u4e9b\u88ab\u8df3\u8fc7\u7684\u7f16\u53f7\uff09\u7684\u4fe1\u606f\u3002\u5177\u4f53\u5982\u4f55\u5199\u811a\u672c\uff0c\u5e94\u8be5\u662f\u5341\u5206\u663e\u7136\u7684\uff0c\u5404\u4f4d\u4e5f\u53ef\u4ee5\u6a21\u4eff\u4e0a\u6587\u7684\u8fc7\u7a0b\u81ea\u884c\u5c1d\u8bd5\u3002\u51e0\u53e5\u5410\u69fd\uff1a",(0,i.kt)("em",{parentName:"p"},"\u770b\u6765\u516c\u76ca/\u5fd7\u613f\u8005\u7c7b\u793e\u56e2\u90fd\u6d3b\u4e0d\u957f\u554a\u2026\u2026\u8fd8\u6709\uff0c\u9b54\u65b9\u793e\u4e5f\u6d88\u5931\u4e86\u662f\u6211\u6ca1\u60f3\u5230\u7684\u3002")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u58f0\u660e"),"\uff1a\u672c\u6587\u672a\u5229\u7528\u4efb\u4f55\u4fe1\u606f\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u6c42\u89c4\u6a21\u4e5f\u8fdc\u5728\u670d\u52a1\u5668\u627f\u53d7\u80fd\u529b\u4e4b\u4e0b\u3002\u5f53\u7136\uff0c\u8be5\u7f51\u7ad9\u7684\u5b89\u5168\u6f0f\u6d1e\u4e00\u76f4\u90fd\u5728\uff0c\u60f3\u83b7\u53d6\u6b63\u5e38\u624b\u6bb5\u65e0\u6cd5\u67e5\u770b\u7684\u6570\u636e\u4e5f\u4e0d\u662f\u90a3\u4e48\u56f0\u96be\uff0c\u4f46\u8fd9\u8d85\u8fc7\u4e86\u672c\u6587\u7684\u8ba8\u8bba\u8303\u7574\u3002"))}f.isMDXComponent=!0}}]);