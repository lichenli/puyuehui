(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3193f65e"],{"92db":function(e,t,i){"use strict";var s=i("ecbd"),a=i.n(s);a.a},a55b:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flexlayout"},[i("div",{staticClass:"topbar transparent"},[i("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),i("div"),i("span")]),1==e.page?i("div",{staticClass:"loginAndReg"},[i("h2",[e._v("手机号注册/登录")]),i("h3",[e._v("首次登录会自动创建账号")]),i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.mobile,expression:"paramsData.mobile"}],staticClass:"telNum",attrs:{type:"text",placeholder:"请输入手机号",id:"phone1",autocomplete:"off",maxlength:"11"},domProps:{value:e.paramsData.mobile},on:{blur:this.$util.restore,input:[function(t){t.target.composing||e.$set(e.paramsData,"mobile",t.target.value)},e.onInput1]}})]),i("p",{staticClass:"tac"},[i("button",{staticClass:"btnNext",on:{click:function(t){e.getVerificationCode(1)}}},[e._v("下一步")])]),i("p",{staticClass:"tac"},[i("button",{staticClass:"icon-weixin2",on:{click:function(t){e.wechatLogin()}}},[e._v("微信登录")])]),i("p",{staticClass:"tac"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.popupVisibleChecked,expression:"popupVisibleChecked"}],attrs:{type:"checkbox",id:"xieyi"},domProps:{checked:Array.isArray(e.popupVisibleChecked)?e._i(e.popupVisibleChecked,null)>-1:e.popupVisibleChecked},on:{change:function(t){var i=e.popupVisibleChecked,s=t.target,a=!!s.checked;if(Array.isArray(i)){var o=null,n=e._i(i,o);s.checked?n<0&&(e.popupVisibleChecked=i.concat([o])):n>-1&&(e.popupVisibleChecked=i.slice(0,n).concat(i.slice(n+1)))}else e.popupVisibleChecked=a}}}),i("label",{attrs:{for:"xieyi"}},[e._v("我已阅读并同意")]),i("span",{staticClass:"links",on:{click:function(t){e.popupVisible=!0}}},[e._v("《"+e._s(e.regAgreementsTitle)+"》")])])]):e._e(),2==e.page?i("div",{staticClass:"loginAndReg"},[i("h2",[e._v("输入验证码")]),i("h3",[e._v("\n      验证码已发送至\n      "),i("span",{staticClass:"links"},[e._v(e._s(e.paramsData.mobile))])]),i("div",{staticClass:"div_inputStyle yzmflex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.paramsData.verificationCode,expression:"paramsData.verificationCode"}],staticClass:"telNum",attrs:{type:"text",placeholder:"验证码",maxlength:"6"},domProps:{value:e.paramsData.verificationCode},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.paramsData,"verificationCode",t.target.value)}}}),i("button",{staticClass:"btnyzm",attrs:{disabled:e.isDisabled},on:{click:function(t){e.getVerificationCode(2)}}},[e._v(e._s(e.buttonName))])]),i("p",{staticClass:"tac"},[i("button",{staticClass:"btnNext",on:{click:function(t){e.onLogIn()}}},[e._v("确定")])])]):e._e(),3==e.page?i("div",{staticClass:"loginAndReg"},[i("h2",[e._v("输入推荐码")]),i("h3",[e._v("若没有推荐人请点击跳过(有且只有一次填写推荐人机会)")]),i("div",{staticClass:"div_inputStyle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.refereeMobile,expression:"refereeMobile"}],staticClass:"telNum",attrs:{type:"text",placeholder:"请输入推荐人手机号",autocomplete:"off",maxlength:"11"},domProps:{value:e.refereeMobile},on:{blur:this.$util.restore,input:[function(t){t.target.composing||(e.refereeMobile=t.target.value)},e.onInput2]}}),i("span",{staticClass:"icon-saoyisao",on:{click:function(t){e.scanQrcode()}}})]),i("p",{staticClass:"tac"},[i("button",{staticClass:"btnNext",on:{click:function(t){e.checkRefer()}}},[e._v("确认")])]),i("p",{staticClass:"tac"},[i("button",{staticClass:"btnNext secondary",on:{click:function(t){e.skipRefer()}}},[e._v("跳过")])])]):e._e(),i("mt-popup",{staticClass:"xieyipage",attrs:{position:"right","popup-transition":"popup-fade"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[i("h2",[e._v(e._s(e.regAgreementsTitle))]),i("div",{staticClass:"content",domProps:{innerHTML:e._s(e.regAgreementsText)}}),i("div",{staticClass:"btnGroup"},[i("span",{staticClass:"btn2",on:{click:function(t){e.xieyipageCheck(0)}}},[e._v("不同意")]),i("span",{staticClass:"btn",on:{click:function(t){e.xieyipageCheck(1)}}},[e._v("同意")])])])],1)},a=[],o=(i("a481"),i("28a5"),i("add6"),i("3a78")),n=(i("8c4f"),i("76a0")),c=i("5f87"),r=i("b893"),l=i("9690"),u=i("18a0"),p={name:"Login",data:function(){return{page:1,pas:"",paramsData:{mobile:"",verificationCode:""},code:"",msg:"",loginStyle:1,buttonName:"",isDisabled:!1,time:60,refereeMobile:"",popupVisible:!1,popupVisibleChecked:!1,regAgreements:[],regAgreementsTitle:"葡悦注册协议",regAgreementsText:"",refereeMobileReadonly:!1}},created:function(){var e=Object(c["e"])();e&&this.wechatLoginOpenid(e,!1),this.initWxConfig(),window.setQRCode=this.setQRCode,window.WXauthorize=this.WXauthorize},mounted:function(){this.checkLogin(),this.getData()},methods:{checkRefer:function(){var e=this;""!==this.refereeMobile?Object(r["f"])(this.refereeMobile)?o["a"].checkReferMobile(this.refereeMobile,function(t){t&&"yes"==t?(console.log(t),e.updateReferMobileMethod()):Object(n["Toast"])({message:"推荐人手机不存在",duration:2e3})},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))}):Object(n["Toast"])({message:"请填写正确的推荐人手机号",duration:2e3}):Object(n["Toast"])({message:"请填写推荐人的手机号",duration:2e3})},updateReferMobileMethod:function(){var e=this;o["a"].updateReferMobile(this.refereeMobile,function(t){if(t&&1==t){console.log(t);var i=Object(c["b"])();console.log("pustRouter..."+i),i&&"/Login"!==i&&"/login"!==i||(i="/"),e.$router.push({path:i}),Object(n["Toast"])({message:"推荐人手机更新成功",duration:2e3})}else Object(n["Toast"])({message:"推荐人手机不存在或不可多次更新推荐人",duration:2e3})},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},getData:function(){var e=this,t={model:{type:"regAgreement"}};o["a"].systextByType(t,function(t){t&&t.list&&(e.regAgreements=t.list,e.regAgreementsTitle=t.list[0].title,e.regAgreementsText=t.list[0].text)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},xieyipageCheck:function(e){this.popupVisible=!1,this.popupVisibleChecked=1==e},checkLogin:function(){var e=Object(c["d"])(),t=this;if(e&&window.history&&window.history.pushState){var i={};o["a"].checkToken(i,function(e){e&&t.$router.push({path:"/"})},function(e){})}},onLogIn:function(){var e=this;""!==e.paramsData.mobile?Object(r["f"])(this.paramsData.mobile)?""!==e.paramsData.verificationCode?Object(r["b"])(e.paramsData.verificationCode)?(Object(r["g"])()&&(e.paramsData.openid=Object(c["e"])()),o["a"].loginNew(e.paramsData,function(t){if(Object(c["g"])(),t&&"2000"==t.code&&t.token.indexOf("Bearer")>=0){Object(c["l"])(t.token);var i=Object(c["b"])();console.log("pustRouter..."+i),i&&"/Login"!==i&&"/login"!==i||(i="/"),e.$router.push({path:i}),Object(n["Toast"])({message:t.msg,duration:2e3})}else t&&"1000"==t.code&&t.token.indexOf("Bearer")>=0?(Object(c["l"])(t.token),e.page=3,Object(n["Toast"])({message:t.msg,duration:2e3})):Object(n["Toast"])({message:t.msg,duration:2e3})},function(e){Object(n["Toast"])({message:"登陆失败",duration:2e3}),console.log("my---errorDatassss==="+JSON.stringify(e))})):Object(n["Toast"])({message:"请填写6位数字短信验证码",duration:2e3}):Object(n["Toast"])({message:"请填写您的收到的验证码",duration:2e3}):Object(n["Toast"])({message:"请填写正确的手机号",duration:2e3}):Object(n["Toast"])({message:"请填写您的手机号",duration:2e3})},getVerificationCode:function(e){var t=this;if(this.popupVisibleChecked)if(""!==this.paramsData.mobile)if(Object(r["f"])(this.paramsData.mobile)){var i={mobile:this.paramsData.mobile,dispatch:""},s=this;o["a"].getVerificationCode(i,function(i){if(console.log("getVerificationCode result......"+JSON.stringify(i)),1==e&&(s.page=2),t.code=i.code,t.msg=i.msg,Object(n["Toast"])({message:t.msg,duration:2e3}),"0000"===i.code){t.isDisabled=!0,i.verificationCode&&(t.paramsData.verificationCode=i.verificationCode);var a=window.setInterval(function(){s.buttonName=s.time,--s.time,s.time<0&&(s.buttonName="重新发送",s.time=60,s.isDisabled=!1,window.clearInterval(a))},1e3)}else Object(n["Toast"])({message:"验证码发送失败，请重试",duration:2e3})},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}else Object(n["Toast"])({message:"请填写正确的手机号",duration:2e3});else Object(n["Toast"])({message:"请填写您的手机号",duration:2e3});else Object(n["Toast"])({message:"请勾选葡悦注册协议",duration:2e3})},onRegister:function(){var e=this;e.$router.push({name:"Reg"})},skipRefer:function(){var e=Object(c["b"])();console.log("pustRouter..."+e),e&&"/Login"!==e&&"/login"!==e||(e="/"),this.$router.push({path:e})},initWxConfig:function(e,t){if(Object(r["g"])()){var i=window.location.href.split("#")[0];if(!(i.indexOf("favicon.ico")>-1)){var s={url:i};o["a"].wxjsConfig(s,function(e){e&&u.config({debug:!1,appId:e.appId+"",timestamp:e.timestamp,nonceStr:e.nonceStr+"",signature:e.signature+"",jsApiList:["scanQRCode"]})})}}},scanQrcode:function(){Object(r["g"])()?this.scanQrcodeWX():Object(r["e"])()?l["a"].androidScanQRCode():Object(r["d"])()&&window.webkit.messageHandlers.QRScan.postMessage({})},scanQrcodeWX:function(){var e=this;Object(r["g"])()?u.checkJsApi({jsApiList:["scanQRCode"],success:function(t){t&&"checkJsApi:ok"==t.errMsg&&t.checkResult.scanQRCode?e.scanQRCodeStart():(console.log("不支持非手机微信中打开"),Object(n["Toast"])("请在手机微信中在打开"))}}):Object(n["Toast"])("请在手机微信中在打开")},scanQRCodeStart:function(){var e=this;u.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){e.setQRCode(t.resultStr)}})},setQRCode:function(e){if(e&&e.indexOf("refereeMobile=")>0){var t=e.split("refereeMobile=")[1];if(/^(1\d{10})$/g.test(t))return void(this.refereeMobile=t)}Object(n["Toast"])("二维码中未检测到推荐人手机号，请重试")},toAndriow:function(){this.$router.push({name:"TestAndriow"})},wechatLogin:function(){Object(r["g"])()?(console.log(this.GLOBAL.publicUrl+"api/wx/menu/auth?service="+encodeURIComponent(window.location.href)),window.location=this.GLOBAL.publicUrl+"api/wx/menu/auth?service="+encodeURIComponent(window.location.href)):Object(r["e"])()?l["a"].androidWXauthorize():Object(r["d"])()?window.webkit.messageHandlers.WXauthorize.postMessage({}):Object(n["Toast"])("不支持的浏览器模式")},WXauthorize:function(e){e&&this.wechatLoginOpenid(e,!1)},wechatLoginOpenid:function(e,t){var i=this;e?(Object(c["m"])(e),o["a"].wxToken("?wxopenid="+e,function(e){if(e&&e.indexOf("Bearer")>=0){Object(c["l"])(e);var t=Object(c["b"])();console.log("pustRouter..."+t),t&&"/Login"!==t&&"/login"!==t||(t="/"),i.$router.push({path:t}),Object(n["Toast"])({message:"登陆成功",duration:2e3})}else Object(n["Toast"])("请输入手机进行绑定！")},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})):Object(n["Toast"])({message:"微信信息不存在，请重试",duration:2e3})},onInput1:function(){this.paramsData.mobile=this.paramsData.mobile.replace(/[^\d]/g,"")},onInput2:function(){this.refereeMobile=this.refereeMobile.replace(/[^\d]/g,"")}}},d=p,g=(i("92db"),i("2877")),b=Object(g["a"])(d,s,a,!1,null,"84653206",null);b.options.__file="Login.vue";t["default"]=b.exports},ecbd:function(e,t,i){}}]);