(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2810580"],{"611c":function(e,t,s){"use strict";var a=s("8c3a"),i=s.n(a);i.a},"8c3a":function(e,t,s){},e2e7:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"news"},[s("h2",[e._v(e._s(e.title))]),s("h3",[e._v(e._s(e.releaseUser)+" "),s("span",[e._v(e._s(e._f("formatDateTime")(e.releaseDate)))])]),e.text?s("div",{domProps:{innerHTML:e._s(e.text)}}):e._e(),e.textImg?s("img",{attrs:{src:e.attachmentUrl+e.textImg,alt:""}}):e._e()])},i=[],o=s("3a78"),n={name:"Paper",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,title:"",text:"",textImg:"",releaseDate:"",logo:"",releaseUser:""}},created:function(){this.initData()},methods:{initData:function(){var e=this,t={pageNo:1,pageSize:10,model:{type:"honor"}};o["a"].systextByType(t,function(t){var s=t.list[0];e.title=s.title,e.text=s.text,e.textImg=s.textImg,e.releaseDate=s.releaseDate,e.logo=s.logo,e.releaseUser=s.releaseUser},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}}},l=n,r=s("2877"),p=Object(r["a"])(l,a,i,!1,null,null,null);p.options.__file="Paper.vue";t["a"]=p.exports},ef55:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flexlayout"},[s("div",{staticClass:"topbar"},[s("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),s("div",[e._v("葡悦汇加盟")]),s("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),s("div",{staticClass:"news"},e._l(e.jiamengs,function(t){return s("div",{key:t.id},[s("h2",[e._v("葡悦汇诚邀加盟")]),t.text?s("div",{domProps:{innerHTML:e._s(t.text)}}):t.textImg?s("img",{attrs:{src:e.attachmentUrl+t.textImg,alt:""}}):e._e()])}),0),s("div",{staticClass:"btnGroup"},[s("button",{on:{click:function(t){e.apply()}}},[e._v(e._s(e.submitText))]),s("button",{on:{click:function(t){e.popupVisible2=!0}}},[e._v("查看申请进度")])]),s("mt-popup",{staticClass:"shenqing",attrs:{"popup-transition":"popup-fade"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[s("div",{staticClass:"logo icon-puyuehui",staticStyle:{margin:".2rem auto"}}),s("ul",{staticClass:"list_common flex",staticStyle:{margin:"0.2rem 0.6rem"}},[s("li",{staticClass:"border-bottom"},[s("em",[e._v("姓名")]),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.applyUserName,expression:"applyUserName"}],attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:e.applyUserName},on:{input:function(t){t.target.composing||(e.applyUserName=t.target.value)}}})])]),s("li",{staticClass:"border-bottom"},[s("em",[e._v("性别")]),s("span",{staticClass:"radioGroup"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",id:"m",value:"1"},domProps:{checked:e._q(e.sex,"1")},on:{change:function(t){e.sex="1"}}}),s("label",{attrs:{for:"m"}},[e._v("先生")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",id:"w",value:"2"},domProps:{checked:e._q(e.sex,"2")},on:{change:function(t){e.sex="2"}}}),s("label",{attrs:{for:"w"}},[e._v("女士")])])]),s("li",{staticClass:"border-bottom"},[s("em",[e._v("手机")]),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"请输入您的联系手机"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),s("li",{staticClass:"border-bottom"},[s("em",[e._v("地区")]),s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"请输入您城市"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])])]),s("div",{staticClass:"btnGroup2"},[s("button",{staticClass:"btn_login",attrs:{id:"submit_text"},on:{click:function(t){e.submit()}}},[e._v("提交申请")]),s("button",{staticClass:"btn_login cancel",on:{click:function(t){e.popupVisible=!1}}},[e._v("取消")])])]),s("mt-popup",{staticClass:"history",attrs:{position:"right","popup-transition":"popup-fade"},model:{value:e.popupVisible2,callback:function(t){e.popupVisible2=t},expression:"popupVisible2"}},[s("dl",[s("dt",[e._v("审核记录")]),s("dd",[s("span",{staticClass:"icon-time"},[e._v("2018.12.21 12:21:12")]),s("p",{staticClass:"result"},[e._v("发起加盟申请")])]),s("dd",[s("span",{staticClass:"icon-time"},[e._v("2018.12.21 12:21:12")]),s("p",[e._v("客服人员已与您线下沟通，约定拜访时间")])]),s("dd",[s("span",{staticClass:"icon-time"},[e._v("2018.12.21 12:21:12")]),s("p",[e._v("已与您签订合同2568866")]),s("p",{staticClass:"result"},[e._v("\n          恭喜您成为\n          "),s("span",{staticClass:"jibie icon-honor"},[e._v("葡悦汇加盟商")])])]),s("dd",[s("span",{staticClass:"icon-time"},[e._v("2018.12.21 12:21:12")]),s("p",[e._v("您的门店资料已上传")])])])])],1)},i=[],o=s("e2e7"),n=s("76a0"),l=s("3a78"),r=s("b893"),p=s("5f87"),c={name:"Jiameng",components:{Paper:o["a"],MessageBox:n["MessageBox"]},data:function(){return{popupVisible:!1,popupVisible2:!1,attachmentUrl:this.GLOBAL.attachmentUrl,jiamengs:[],applyType:"join",applyUserName:"",email:"",mobile:"",address:"",sex:"",submitText:"申请加盟",submitFlag:!0,auditDesc:""}},created:function(){this.getData(),this.initDetail()},methods:{getData:function(){var e=this,t={model:{type:"join"}};l["a"].systextByType(t,function(t){t&&t.list&&(e.jiamengs=t.list)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},initDetail:function(){var e=this,t={applyType:"join"};l["a"].applyDetail(t,function(t){t&&(10===t.applyStatus?(e.submitText="申请中...",e.submitFlag=!1):(e.auditDesc=t.auditDesc,Object(n["Toast"])({message:t.auditDesc,duration:5e3})))},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},apply:function(){var e=this,t=Object(p["b"])();t||(Object(p["e"])("/Jiameng"),e.$router.push({path:"/Login"}));var s=!0;e.submitFlag||(s=!1),e.popupVisible=s},submit:function(){var e=this;if(""!==e.applyUserName)if(""===e.email||Object(r["c"])(e.email))if(""!==e.mobile){var t={applyType:e.applyType,applyUserName:e.applyUserName,email:e.email,mobile:e.mobile,address:e.address,sex:e.sex};l["a"].apply(t,function(t){console.log(t),e.submitText="申请中...",e.submitFlag=!1,e.popupVisible=!1,Object(n["MessageBox"])(t.msg)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}else Object(n["MessageBox"])("请填写您的手机号码");else Object(n["MessageBox"])("请填写正确格式的邮箱");else Object(n["MessageBox"])("我们的客服人员将在3个工作日内与您取得联系，请您保持手机通畅。")}}},u=c,m=(s("611c"),s("2877")),d=Object(m["a"])(u,a,i,!1,null,null,null);d.options.__file="Jiameng.vue";t["default"]=d.exports}}]);