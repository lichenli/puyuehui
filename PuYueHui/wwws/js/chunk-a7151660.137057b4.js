(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7151660"],{3971:function(t,i,o){"use strict";o.r(i);var A=function(){var t=this,i=t.$createElement,A=t._self._c||i;return A("div",{staticClass:"flexlayout"},[A("div",{staticClass:"download"},[A("a",{staticClass:"icon-ios",attrs:{href:t.isoUrl}},[t._v("苹果手机点击下载")]),A("a",{staticClass:"icon-android",attrs:{href:t.androidUrl}},[t._v("安卓手机点击下载")])]),A("div",{staticClass:"btnGroup"},[A("a",{staticClass:"icon-login",on:{click:function(i){t.toLogin()}}},[t._v("立即登录")]),A("a",{staticClass:"icon-reg",on:{click:function(i){t.toReg()}}},[t._v("立即注册")]),A("a",{staticClass:"icon-weixin2",on:{click:function(i){t.popupVisible=!0}}},[t._v("关注公众号")])]),A("mt-popup",{staticClass:"erweimaDiv gongzonghao",attrs:{"popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(i){t.popupVisible=i},expression:"popupVisible"}},["production"==t.titleEnv?A("img",{attrs:{src:o("82cc"),alt:"葡悦汇正式公众号"}}):A("img",{attrs:{src:o("7bc9"),alt:"葡悦汇测试公众号"}}),A("p",[t._v("微信扫一扫关注我们的微信号")])]),A("mt-popup",{staticClass:"tip",attrs:{position:"top","popup-transition":"popup-fade"},model:{value:t.popupVisible2,callback:function(i){t.popupVisible2=i},expression:"popupVisible2"}},[A("img",{attrs:{src:o("90eb")},on:{click:function(i){t.popupVisible2=!1}}})])],1)},n=[],e=o("76a0"),a=o("3a78"),s=o("b893"),p={name:"Download",data:function(){return{popupVisible:!1,popupVisible2:!1,isoUrl:"",androidUrl:"",titleEnv:"sit"}},created:function(){this.loadAndroid(),this.loadIOS(),Object(s["g"])()&&(this.popupVisible2=!0)},methods:{openPrompt:function(){Object(e["MessageBox"])({title:"",message:"请输入登录密码",showInput:!0,inputType:"password",inputPlaceholder:"请输入登录密码",showCancelButton:!0})},toLogin:function(){this.$router.push({path:"/Login"})},toReg:function(){this.$router.push({path:"/Reg",query:{refereeMobile:this.$router.history.current.query.refereeMobile}})},loadAndroid:function(){var t=this;a["a"].sysPropByKey("ANROID.DOWNLOAD",function(i){i&&(t.androidUrl=i)},function(t){console.log("ANROID.DOWNLOAD异常:",JSON.stringify(t))})},loadIOS:function(){var t=this;a["a"].sysPropByKey("IOS.DOWNLOAD",function(i){i&&(t.isoUrl=i)},function(t){console.log("IOS.DOWNLOAD异常:",JSON.stringify(t))})}}},c=p,r=(o("7745"),o("2877")),g=Object(r["a"])(c,A,n,!1,null,"f864043c",null);g.options.__file="Download.vue";i["default"]=g.exports},"39d0":function(t,i,o){},7745:function(t,i,o){"use strict";var A=o("39d0"),n=o.n(A);n.a},"7bc9":function(t,i){t.exports="data:image/png;base64,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"},"82cc":function(t,i,o){t.exports=o.p+"img/qrcode_prod.1138f905.jpg"},"90eb":function(t,i,o){t.exports=o.p+"img/tips.c74b0770.png"}}]);