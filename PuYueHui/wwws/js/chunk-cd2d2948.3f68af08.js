(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd2d2948"],{1686:function(e,t,i){"use strict";var s=i("812f"),o=i.n(s);o.a},"2f4f":function(e,t,i){},"461f":function(e,t,i){"use strict";i.r(t);var s,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flexlayout"},[i("div",{staticClass:"topbar"},[i("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),i("div",[e._v("葡悦汇分销")]),i("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),i("div",{staticClass:"news"},e._l(e.fenxiaos,function(t){return i("div",{key:t.id},[i("h2",[e._v("葡悦汇分销邀请")]),t.text?i("div",{domProps:{innerHTML:e._s(t.text)}}):e._e()])})),i("div",{staticClass:"btnGroup"},[e.submitFlag?i("button",{attrs:{disabled:e.isDisabled},on:{click:function(t){e.apply()}}},[e._v("分销申请")]):e._e(),e.feedbackFlag?i("button",{on:{click:function(t){e.popupVisible=!0}}},[e._v("查看申请记录")]):e._e()]),i("mt-popup",{staticClass:"shenqing",attrs:{"popup-transition":"popup-fade"},model:{value:e.popupVisible2,callback:function(t){e.popupVisible2=t},expression:"popupVisible2"}},[i("div",{staticClass:"logo icon-puyuehui",staticStyle:{margin:".2rem auto"}}),i("ul",{staticClass:"list_common flex",staticStyle:{margin:"0.2rem 0.6rem"}},[i("li",{staticClass:"border-bottom"},[i("em",[e._v("姓名")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.applyUserName,expression:"applyUserName"}],attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:e.applyUserName},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.applyUserName=t.target.value)}}})])]),i("li",{staticClass:"border-bottom"},[i("em",[e._v("手机")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"email",placeholder:"请输入您的联系手机"},domProps:{value:e.mobile},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.mobile=t.target.value)}}})])]),i("li",{staticClass:"border-bottom"},[i("em",[e._v("分销区域")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"请输入您的所在地区"},domProps:{value:e.address},on:{click:e.showAddressPicker,blur:this.$util.restore,input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),i("li",{staticClass:"border-bottom"},[i("em",[e._v("地址详情")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.detailAddr,expression:"detailAddr"}],attrs:{type:"text",placeholder:"请输入所在的街道"},domProps:{value:e.detailAddr},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.detailAddr=t.target.value)}}})])])]),i("div",{staticClass:"btnGroup2"},[i("button",{staticClass:"btn_login",attrs:{id:"submit_text"},on:{click:function(t){e.submit()}}},[e._v("提交申请")]),i("button",{staticClass:"btn_login",on:{click:function(t){e.popupVisible2=!1}}},[e._v("取消")])])]),i("mt-popup",{staticClass:"history",attrs:{position:"right"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[i("dl",[i("dt",[e._v("申请记录")]),e._l(e.feedbackList,function(t){return i("dd",{key:t.id},[i("span",{staticClass:"icon-time"},[e._v(e._s(e._f("formatDateTime")(t.feedbackDate)))]),i("p",{staticClass:"result"},[e._v(e._s(t.feedbackText))])])})],2)]),i("div",{staticClass:"region-popup"},[i("mt-popup",{staticClass:"region-popup",staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:e.regionVisible,callback:function(t){e.regionVisible=t},expression:"regionVisible"}},[i("address-popup-tool",{on:{getRegion:e.getRegion}})],1)],1)],1)},a=[],n=i("ade3"),l=i("e2e7"),r=i("76a0"),c=i("3a78"),p=(i("b893"),i("5f87")),u=(s={name:"Fenxiao",components:{Paper:l["a"]},data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,popupVisible:!1,popupVisible2:!1,fenxiaos:[],applyType:"distribution",applyUserName:"",email:"",mobile:"",address:"",detailAddr:"",sex:"",submitFlag:!0,feedbackFlag:!1,auditDesc:"",feedbackList:[],thresholdPoints:"",regionVisible:!1,regionValue:null,regionProvinceCode:null,regionCityCode:null,regionCountyCode:null,isDisabled:!1}},created:function(){this.getData(),this.initDetail(),this.getDistributionThreshold()}},Object(n["a"])(s,"components",{addressPopupTool:function(e){i.e("chunk-63bdd492").then(function(){var t=[i("d04f")];e.apply(null,t)}.bind(this)).catch(i.oe)}}),Object(n["a"])(s,"methods",{getData:function(){var e=this,t={model:{type:e.applyType}};c["a"].systextByType(t,function(t){t&&t.list&&(e.fenxiaos=t.list)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},initDetail:function(){var e=this,t={applyType:e.applyType};c["a"].applyDetail(t,function(t){t&&(e.feedbackList=t.feedbackList,10===t.applyStatus&&(e.submitFlag=!1),e.feedbackFlag=!0)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},getDistributionThreshold:function(){var e=this,t={};c["a"].getDistributionThreshold(t,function(t){t&&(e.thresholdPoints=t.points,e.memberPointsSelect())},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},memberPointsSelect:function(){var e=this;c["a"].memberPointsSelect(function(t){t.points<e.thresholdPoints&&(e.isDisabled=!0)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},apply:function(){var e=this,t=Object(p["d"])();if(!t)return Object(p["i"])("/Fenxiao"),void e.$router.push({path:"/Login"});e.popupVisible2=!0},submit:function(){var e=this,t={applyType:e.applyType,applyUserName:e.applyUserName,email:e.email,mobile:e.mobile,address:e.address,sex:e.sex,detailAddr:e.detailAddr};c["a"].apply(t,function(t){console.log(t),Object(r["MessageBox"])("葡悦感谢您提交的分销申请，我们会尽快评估您的请求并给出具体答复"),e.initDetail()},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},showAddressPicker:function(){this.regionVisible=!0},getRegion:function(e,t,i,s){this.address=e,this.regionProvinceCode=t,this.regionCityCode=i,this.regionCountyCode=s},clearAddress:function(){this.address=null,this.regionProvinceCode=null,this.regionCityCode=null,this.regionCountyCode=null}}),s),d=u,m=(i("744d"),i("1686"),i("2877")),f=Object(m["a"])(d,o,a,!1,null,"848994c8",null);f.options.__file="Fenxiao.vue";t["default"]=f.exports},"744d":function(e,t,i){"use strict";var s=i("2f4f"),o=i.n(s);o.a},"812f":function(e,t,i){},ade3:function(e,t,i){"use strict";function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",function(){return s})},e2e7:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"news"},[i("h2",[e._v(e._s(e.title))]),i("h3",[e._v(e._s(e.releaseUser)+" "),i("span",[e._v(e._s(e._f("formatDateTime")(e.releaseDate)))])]),e.text?i("div",{domProps:{innerHTML:e._s(e.text)}}):e._e(),e.textImg?i("img",{attrs:{src:e.attachmentUrl+e.textImg,alt:""}}):e._e()])},o=[],a=i("3a78"),n={name:"Paper",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,title:"",text:"",textImg:"",releaseDate:"",logo:"",releaseUser:""}},created:function(){this.initData()},methods:{initData:function(){var e=this,t={pageNo:1,pageSize:10,model:{type:"honor"}};a["a"].systextByType(t,function(t){var i=t.list[0];e.title=i.title,e.text=i.text,e.textImg=i.textImg,e.releaseDate=i.releaseDate,e.logo=i.logo,e.releaseUser=i.releaseUser},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}}},l=n,r=i("2877"),c=Object(r["a"])(l,s,o,!1,null,null,null);c.options.__file="Paper.vue";t["a"]=c.exports}}]);