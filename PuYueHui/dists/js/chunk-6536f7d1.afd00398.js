(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6536f7d1"],{"6c3f":function(e,a,t){},"8c5a":function(e,a,t){"use strict";var o=t("6c3f"),i=t.n(o);i.a},a55b:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"topbar transparent"},[t("span",{staticClass:"icon icon-fanhui",on:{click:function(a){e.$router.go(-1)}}}),t("div",[e._v("登录")]),t("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),t("div",{staticClass:"loginbg"},[t("div",{staticClass:"logo icon-puyuehui"}),t("div",{staticClass:"tabs"},[t("span",{class:{cur:1==e.loginStyle},on:{click:function(a){e.loginStyle=1}}},[e._v("密码登录")]),t("span",{class:{cur:2==e.loginStyle},on:{click:function(a){e.loginStyle=2}}},[e._v("验证码登录")])]),t("ul",{staticClass:"login"},[t("li",{directives:[{name:"show",rawName:"v-show",value:1==e.loginStyle,expression:"loginStyle==1"}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.loginName,expression:"paramsData.loginName"}],attrs:{type:"text",placeholder:"手机号",id:"phone1",autocomplete:"off",maxlength:"20"},domProps:{value:e.paramsData.loginName},on:{input:function(a){a.target.composing||e.$set(e.paramsData,"loginName",a.target.value)}}})]),t("li",{directives:[{name:"show",rawName:"v-show",value:1==e.loginStyle,expression:"loginStyle==1"}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.password,expression:"paramsData.password"}],attrs:{type:"password",placeholder:"密码",maxlength:"20"},domProps:{value:e.paramsData.password},on:{input:function(a){a.target.composing||e.$set(e.paramsData,"password",a.target.value)}}})]),t("li",{directives:[{name:"show",rawName:"v-show",value:2==e.loginStyle,expression:"loginStyle==2"}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.mobile,expression:"paramsData.mobile"}],attrs:{type:"text",placeholder:"手机号",maxlength:"11"},domProps:{value:e.paramsData.mobile},on:{input:function(a){a.target.composing||e.$set(e.paramsData,"mobile",a.target.value)}}})]),t("li",{directives:[{name:"show",rawName:"v-show",value:2==e.loginStyle,expression:"loginStyle==2"}],staticClass:"yzm"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.verificationCode,expression:"paramsData.verificationCode"}],attrs:{type:"text",placeholder:"验证码",maxlength:"6"},domProps:{value:e.paramsData.verificationCode},on:{input:function(a){a.target.composing||e.$set(e.paramsData,"verificationCode",a.target.value)}}}),t("button",{attrs:{disabled:e.isDisabled},on:{click:function(a){e.getVerificationCode()}}},[e._v(e._s(e.buttonName))])])]),t("p",{staticClass:"forget"},[t("router-link",{attrs:{to:"/ForgetPw"}},[e._v("忘记密码?")])],1),t("div",{staticClass:"btn_login",on:{click:function(a){e.onLogIn()}}},[e._v("登录")]),t("p",{staticClass:"reg"},[t("a",{on:{click:function(a){e.onRegister()}}},[e._v("新用户注册")])])])])},i=[],s=(t("add6"),t("3a78")),n=t("660a"),r=t("5f87"),l=t("b893"),c={name:"Login",data:function(){return{paramsData:{loginName:"",password:"",mobile:"",verificationCode:""},code:"",msg:"",loginStyle:1,buttonName:"获取验证码",isDisabled:!1,time:60}},mounted:function(){document.querySelector("body").setAttribute("style","background:#652647")},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")},methods:{onLogIn:function(){var e=this;if(1===e.loginStyle){if(""===e.paramsData.loginName)return void Object(n["Toast"])({message:"请填写您的手机或用户名",duration:2e3});if(""===e.paramsData.password)return void Object(n["Toast"])({message:"请填写您的登陆密码",duration:2e3})}else if(2===e.loginStyle){if(""===e.paramsData.mobile)return void Object(n["Toast"])({message:"请填写您的手机号",duration:2e3});if(""===e.paramsData.verificationCode)return void Object(n["Toast"])({message:"请填写您的收到的验证码",duration:2e3});if(!Object(l["b"])(e.paramsData.verificationCode))return void Object(n["Toast"])({message:"请填写6位数字短信验证码",duration:2e3})}s["a"].login(e.paramsData,function(a){if(Object(r["c"])(),a&&a.indexOf("Bearer")>=0){Object(r["e"])(a);var t=Object(r["a"])();console.log("pustRouter..."+t),t&&"/Login"!==t&&"/login"!==t||(t="/"),e.$router.push({path:t})}else Object(n["Toast"])({message:a,duration:2e3})},function(e){Object(n["Toast"])({message:"登陆失败",duration:2e3}),console.log("my---errorDatassss==="+JSON.stringify(e))})},getVerificationCode:function(){var e=this;if(""!==this.paramsData.mobile)if(Object(l["e"])(this.paramsData.mobile)){var a={mobile:this.paramsData.mobile},t=this;s["a"].getVerificationCode(a,function(a){if(console.log("getVerificationCode result......"+JSON.stringify(a)),e.code=a.code,e.msg=a.msg,Object(n["Toast"])({message:e.msg,duration:2e3}),"0000"===a.code){e.isDisabled=!0,a.verificationCode&&(e.paramsData.verificationCode=a.verificationCode);var o=window.setInterval(function(){t.buttonName=t.time,--t.time,t.time<0&&(t.buttonName="重新发送",t.time=60,t.isDisabled=!1,window.clearInterval(o))},1e3)}else Object(n["Toast"])({message:"验证码发送失败，请重试",duration:2e3})},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}else Object(n["Toast"])({message:"请填写正确的手机号",duration:2e3});else Object(n["Toast"])({message:"请填写您的手机号",duration:2e3})},onRegister:function(){var e=this;e.$router.push({name:"Reg"})}}},m=c,u=(t("8c5a"),t("048f")),d=Object(u["a"])(m,o,i,!1,null,"d2ff26f2",null);d.options.__file="Login.vue";a["default"]=d.exports}}]);