(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34a36197"],{"2f4f":function(t,e,s){},"461f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flexlayout"},[s("div",{staticClass:"topbar"},[s("span",{staticClass:"icon icon-fanhui",on:{click:function(e){t.$router.go(-1)}}}),s("div",[t._v("葡悦汇分销")]),s("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),s("div",{staticClass:"news"},t._l(t.fenxiaos,function(e){return s("div",{key:e.id},[s("h2",[t._v("葡悦汇分销邀请")]),e.text?s("div",{domProps:{innerHTML:t._s(e.text)}}):t._e()])})),s("div",{staticClass:"btnGroup"},[t.submitFlag?s("button",{on:{click:function(e){t.apply()}}},[t._v("分销申请")]):t._e(),t.feedbackFlag?s("button",{on:{click:function(e){t.popupVisible=!0}}},[t._v("查看申请记录")]):t._e()]),s("mt-popup",{staticClass:"history",attrs:{position:"right","popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[s("dl",[s("dt",[t._v("申请记录")]),t._l(t.feedbackList,function(e){return s("dd",{key:e.id},[s("span",{staticClass:"icon-time"},[t._v(t._s(t._f("formatDateTime")(e.feedbackDate)))]),s("p",{staticClass:"result"},[t._v(t._s(e.feedbackText))])])})],2)])],1)},a=[],n=s("e2e7"),o=s("76a0"),l=s("3a78"),r=(s("b893"),s("5f87")),c={name:"Fenxiao",components:{Paper:n["a"]},data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,popupVisible:!1,fenxiaos:[],applyType:"distribution",applyUserName:"",email:"",mobile:"",address:"",sex:"",submitFlag:!0,feedbackFlag:!1,auditDesc:"",feedbackList:[],thresholdPoints:""}},created:function(){this.getData(),this.initDetail(),this.getDistributionThreshold()},methods:{getData:function(){var t=this,e={model:{type:t.applyType}};l["a"].systextByType(e,function(e){e&&e.list&&(t.fenxiaos=e.list)},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})},initDetail:function(){var t=this,e={applyType:t.applyType};l["a"].applyDetail(e,function(e){e&&(t.feedbackList=e.feedbackList,10===e.applyStatus&&(t.submitFlag=!1),t.feedbackFlag=!0)},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})},getDistributionThreshold:function(){var t=this,e={};l["a"].getDistributionThreshold(e,function(e){e&&(t.thresholdPoints=e.points)},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})},apply:function(){var t=this,e=Object(r["b"])();if(!e)return Object(r["e"])("/Fenxiao"),void t.$router.push({path:"/Login"});o["MessageBox"].confirm("申请分销需要个人累计消费超过"+t.thresholdPoints+"元，您是否达到此额度?").then(function(e){t.submit()})},submit:function(){var t=this,e={applyType:t.applyType,applyUserName:t.applyUserName,email:t.email,mobile:t.mobile,address:t.address,sex:t.sex};l["a"].apply(e,function(e){console.log(e),Object(o["MessageBox"])("葡悦感谢您提交的分销申请，我们会尽快评估您的请求并给出具体答复"),t.initDetail()},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})}}},p=c,u=(s("744d"),s("2877")),f=Object(u["a"])(p,i,a,!1,null,null,null);f.options.__file="Fenxiao.vue";e["default"]=f.exports},"744d":function(t,e,s){"use strict";var i=s("2f4f"),a=s.n(i);a.a},e2e7:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("h2",[t._v(t._s(t.title))]),s("h3",[t._v(t._s(t.releaseUser)+" "),s("span",[t._v(t._s(t._f("formatDateTime")(t.releaseDate)))])]),t.text?s("div",{domProps:{innerHTML:t._s(t.text)}}):t._e(),t.textImg?s("img",{attrs:{src:t.attachmentUrl+t.textImg,alt:""}}):t._e()])},a=[],n=s("3a78"),o={name:"Paper",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,title:"",text:"",textImg:"",releaseDate:"",logo:"",releaseUser:""}},created:function(){this.initData()},methods:{initData:function(){var t=this,e={pageNo:1,pageSize:10,model:{type:"honor"}};n["a"].systextByType(e,function(e){var s=e.list[0];t.title=s.title,t.text=s.text,t.textImg=s.textImg,t.releaseDate=s.releaseDate,t.logo=s.logo,t.releaseUser=s.releaseUser},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})}}},l=o,r=s("2877"),c=Object(r["a"])(l,i,a,!1,null,null,null);c.options.__file="Paper.vue";e["a"]=c.exports}}]);