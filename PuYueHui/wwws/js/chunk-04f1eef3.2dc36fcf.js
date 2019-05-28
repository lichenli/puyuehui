(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f1eef3"],{"47f9":function(e,t,s){},b1db:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flexlayout"},[s("div",{staticClass:"topbar transparent"},[s("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),s("div"),s("span")]),1==e.page?s("div",{staticClass:"loginAndReg"},[s("h2",[e._v("设置六位支付密码")]),s("h3",[e._v("支付密码用于您使用葡悦汇余额支付验证，请牢记密码")]),s("div",{staticClass:"div_inputStyle yzmflex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPayPassword,expression:"newPayPassword"}],staticClass:"telNum",attrs:{type:"password",placeholder:"请输入六位数字的支付密码",maxlength:"6",minlength:"6"},domProps:{value:e.newPayPassword},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.newPayPassword=t.target.value)}}})]),s("p",{staticClass:"tac"},[s("button",{staticClass:"btnNext",on:{click:function(t){e.page=2}}},[e._v("下一步")])])]):e._e(),2==e.page?s("div",{staticClass:"loginAndReg"},[s("h2",[e._v("重复输入支付密码")]),s("h3",[e._v("支付密码用于您使用葡悦汇余额支付验证，请牢记密码")]),s("div",{staticClass:"div_inputStyle yzmflex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.retypeNewPassword,expression:"retypeNewPassword"}],staticClass:"telNum",attrs:{type:"password",placeholder:"请重复输入六位数字的支付密码",maxlength:"6",minlength:"6"},domProps:{value:e.retypeNewPassword},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.retypeNewPassword=t.target.value)}}})]),s("p",{staticClass:"tac"},[s("button",{staticClass:"btnNext",on:{click:function(t){e.setPayPassword()}}},[e._v("完成")])])]):e._e(),3==e.page?s("div",{staticClass:"loginAndReg"},[s("h2",[e._v("修改支付密码")]),s("h3",[e._v("请先输入您的旧支付密码")]),s("div",{staticClass:"div_inputStyle yzmflex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPayPassword,expression:"oldPayPassword"}],staticClass:"telNum",attrs:{type:"password",placeholder:"请输入六位数字的旧支付密码",maxlength:"6",minlength:"6",onpaste:"return false",onkeyup:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:e.oldPayPassword},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.oldPayPassword=t.target.value)}}})]),s("p",{staticClass:"tac"},[s("button",{staticClass:"btnNext",on:{click:function(t){e.checkOldPayPassword()}}},[e._v("下一步")])]),s("p",{staticClass:"tac",on:{click:function(t){e.page=4}}},[e._v("忘记密码？")])]):e._e(),4==e.page?s("div",{staticClass:"loginAndReg"},[s("h2",[e._v("支付密码找回")]),s("h3",[e._v("\n      验证码将发送至\n      "),s("span",{staticClass:"links"},[e._v(e._s(e.user.mobile))])]),s("div",{staticClass:"div_inputStyle yzmflex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationCode,expression:"verificationCode"}],staticClass:"telNum",attrs:{type:"text",placeholder:"请输入验证码",maxlength:"6"},domProps:{value:e.verificationCode},on:{blur:this.$util.restore,input:function(t){t.target.composing||(e.verificationCode=t.target.value)}}}),s("button",{staticClass:"btnyzm",attrs:{disabled:e.isDisabled},on:{click:function(t){e.getVerificationCode()}}},[e._v(e._s(e.buttonName))])]),s("p",{staticClass:"tac"},[s("button",{staticClass:"btnNext",on:{click:function(t){e.checkVerificationCode()}}},[e._v("下一步")])])]):e._e()])},i=[],o=s("3a78"),n=s("76a0"),r={name:"SetPayPW",data:function(){return{user:{},time:60,buttonName:"发送",verificationCode:"",isDisabled:!1,oldPayPassword:"",newPayPassword:"",retypeNewPassword:"",page:3}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;o["a"].getCurrentUser(function(t){t&&(e.user=t,t.payPassword?e.page=3:e.page=1)},function(e){console.error("获取用户信息发生异常",JSON.stringify(e))})},checkOldPayPassword:function(){var e=this;o["a"].checkPayPassword({oldPayPassword:e.oldPayPassword},function(t){t?e.page=1:(Object(n["Toast"])("原支付密码输入错误,请重新输入或通过忘记密码方式找回密码"),e.page=3)},function(e){console.error("支付密码检验接口调用异常",JSON.stringify(e))})},setPayPassword:function(){var e=this;this.newPayPassword&&this.retypeNewPassword&&6==this.newPayPassword.length?this.newPayPassword==this.retypeNewPassword?o["a"].setPayPassword({oldPayPassword:e.oldPayPassword,payPassword:e.newPayPassword},function(t){t?(Object(n["Toast"])("支付密码设置成功"),e.$router.push({name:"Money"})):Object(n["Toast"])("设置支付密码错误,请稍候重试")},function(e){console.error("设置支付密码接口调用异常",JSON.stringify(e))}):(Object(n["Toast"])("两次输入的支付密码不一致,请重新输入"),e.page=1):(Object(n["Toast"])("密码不能为空且需为6位数字,请重新输入"),e.page=1)},getVerificationCode:function(){var e=this,t={mobile:this.user.mobile,dispatch:""},s=this;o["a"].getVerificationCode(t,function(t){if(e.code=t.code,e.msg=t.msg,Object(n["Toast"])({message:e.msg,duration:2e3}),"0000"===t.code){e.isDisabled=!0,t.verificationCode&&(e.verificationCode=t.verificationCode);var a=window.setInterval(function(){s.buttonName=s.time,--s.time,s.time<0&&(s.buttonName="重新发送",s.time=60,s.isDisabled=!1,window.clearInterval(a))},1e3)}else Object(n["Toast"])({message:"验证码发送失败，请重试",duration:2e3})},function(e){console.error("验证码发送异常:"+JSON.stringify(e))})},checkVerificationCode:function(){var e={mobile:this.user.mobile,verificationCode:this.verificationCode},t=this;o["a"].checkVerificationCode(e,function(e){e&&"1000"==e.code?t.page=1:Object(n["Toast"])({message:e.msg,duration:2e3})},function(e){console.error("验证码验证接口异常:",JSON.stringify(e))})}}},c=r,l=(s("b55a"),s("2877")),d=Object(l["a"])(c,a,i,!1,null,"8b825526",null);d.options.__file="SetPayPW.vue";t["default"]=d.exports},b55a:function(e,t,s){"use strict";var a=s("47f9"),i=s.n(a);i.a}}]);