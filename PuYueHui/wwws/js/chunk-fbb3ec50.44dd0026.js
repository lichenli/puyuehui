(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbb3ec50"],{a55b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flexout"},[a("div",{staticClass:"topbar transparent"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),a("div",[e._v("登录")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"loginbg"},[a("div",{staticClass:"logo icon-puyuehui"}),a("div",{staticClass:"tabs"},[a("span",{class:{cur:1==e.loginStyle},on:{click:function(t){e.loginStyle=1}}},[e._v("密码登录")]),a("span",{class:{cur:2==e.loginStyle},on:{click:function(t){e.loginStyle=2}}},[e._v("验证码登录")])]),a("ul",{staticClass:"login"},[a("li",{directives:[{name:"show",rawName:"v-show",value:1==e.loginStyle,expression:"loginStyle==1"}]},[a("em",[e._v("用户名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.loginName,expression:"paramsData.loginName"}],attrs:{type:"text",placeholder:"手机号或用户名",id:"phone1",autocomplete:"off",maxlength:"20"},domProps:{value:e.paramsData.loginName},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.paramsData,"loginName",t.target.value)}}})]),a("li",{directives:[{name:"show",rawName:"v-show",value:1==e.loginStyle,expression:"loginStyle==1"}]},[a("em",[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.password,expression:"paramsData.password"}],attrs:{type:"password",placeholder:"登录密码",maxlength:"20"},domProps:{value:e.paramsData.password},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.paramsData,"password",t.target.value)}}})]),a("li",{directives:[{name:"show",rawName:"v-show",value:2==e.loginStyle,expression:"loginStyle==2"}]},[a("em",[e._v("手机号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.mobile,expression:"paramsData.mobile"}],attrs:{type:"text",placeholder:"输入注册手机号",maxlength:"11"},domProps:{value:e.paramsData.mobile},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.paramsData,"mobile",t.target.value)}}})]),a("li",{directives:[{name:"show",rawName:"v-show",value:2==e.loginStyle,expression:"loginStyle==2"}],staticClass:"yzm"},[a("em",[e._v("验证码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.verificationCode,expression:"paramsData.verificationCode"}],attrs:{type:"text",placeholder:"验证码",maxlength:"6"},domProps:{value:e.paramsData.verificationCode},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.paramsData,"verificationCode",t.target.value)}}}),a("button",{attrs:{disabled:e.isDisabled},on:{click:function(t){e.getVerificationCode()}}},[e._v(e._s(e.buttonName))])])]),a("p",{staticClass:"forget"},[a("router-link",{attrs:{to:"/ForgetPw"}},[e._v("忘记密码?")])],1),a("div",{staticClass:"btn_login",on:{click:function(t){e.onLogIn()}}},[e._v("登录")]),a("p",{staticClass:"reg"},[a("a",{on:{click:function(t){e.onRegister()}}},[e._v("新用户注册")])])])])},i=[],s=(a("add6"),a("3a78")),n=(a("8c4f"),a("76a0")),r=a("5f87"),l=a("b893"),c={name:"Login",data:function(){return{paramsData:{loginName:"",password:"",mobile:"",verificationCode:""},code:"",msg:"",loginStyle:1,buttonName:"获取验证码",isDisabled:!1,time:60}},mounted:function(){document.querySelector("body").setAttribute("style","background:#652647"),this.checkLogin()},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")},methods:{checkLogin:function(){var e=Object(r["c"])(),t=this;if(e&&window.history&&window.history.pushState){var a={};s["a"].checkToken(a,function(e){e&&t.$router.push({path:"/"})},function(e){})}},onLogIn:function(){var e=this;if(1===e.loginStyle){if(""===e.paramsData.loginName)return void Object(n["Toast"])({message:"请填写您的手机或用户名",duration:2e3});if(""===e.paramsData.password)return void Object(n["Toast"])({message:"请填写您的登陆密码",duration:2e3})}else if(2===e.loginStyle){if(""===e.paramsData.mobile)return void Object(n["Toast"])({message:"请填写您的手机号",duration:2e3});if(""===e.paramsData.verificationCode)return void Object(n["Toast"])({message:"请填写您的收到的验证码",duration:2e3});if(!Object(l["b"])(e.paramsData.verificationCode))return void Object(n["Toast"])({message:"请填写6位数字短信验证码",duration:2e3})}Object(l["g"])()&&(e.paramsData.openid=Object(r["d"])()),s["a"].login(e.paramsData,function(t){if(Object(r["e"])(),t&&t.indexOf("Bearer")>=0){Object(r["h"])(t);var a=Object(r["a"])();console.log("pustRouter..."+a),a&&"/Login"!==a&&"/login"!==a||(a="/"),e.$router.push({path:a})}else Object(n["Toast"])({message:t,duration:2e3})},function(e){Object(n["Toast"])({message:"登陆失败",duration:2e3}),console.log("my---errorDatassss==="+JSON.stringify(e))})},getVerificationCode:function(){var e=this;if(""!==this.paramsData.mobile)if(Object(l["f"])(this.paramsData.mobile)){var t={mobile:this.paramsData.mobile},a=this;s["a"].getVerificationCode(t,function(t){if(console.log("getVerificationCode result......"+JSON.stringify(t)),e.code=t.code,e.msg=t.msg,Object(n["Toast"])({message:e.msg,duration:2e3}),"0000"===t.code){e.isDisabled=!0,t.verificationCode&&(e.paramsData.verificationCode=t.verificationCode);var o=window.setInterval(function(){a.buttonName=a.time,--a.time,a.time<0&&(a.buttonName="重新发送",a.time=60,a.isDisabled=!1,window.clearInterval(o))},1e3)}else Object(n["Toast"])({message:"验证码发送失败，请重试",duration:2e3})},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}else Object(n["Toast"])({message:"请填写正确的手机号",duration:2e3});else Object(n["Toast"])({message:"请填写您的手机号",duration:2e3})},onRegister:function(){var e=this;e.$router.push({name:"Reg"})}}},m=c,u=(a("c63b"),a("2877")),d=Object(u["a"])(m,o,i,!1,null,"2e66b8a6",null);d.options.__file="Login.vue";t["default"]=d.exports},aeb0:function(e,t,a){},c63b:function(e,t,a){"use strict";var o=a("aeb0"),i=a.n(o);i.a}}]);