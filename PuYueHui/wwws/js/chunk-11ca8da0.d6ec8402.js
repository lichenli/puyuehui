(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11ca8da0"],{9554:function(e,n,t){"use strict";var i=t("c57f"),o=t.n(i);o.a},c57f:function(e,n,t){},ce41:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flexlayout"},[t("div",{staticClass:"topbar"},[t("span",{staticClass:"icon icon-fanhui",on:{click:function(n){e.$router.go(-1)}}}),t("div",[e._v("充值")]),t("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),t("div",{staticClass:"flexauto"},[t("dl",{staticClass:"payment"},[t("dt",[e._v("选择充值方式")]),e.isMicroMessengerMobile?t("dd",{staticClass:"icon-weixin icon-weixin-jsapi",class:{cur:"jsApiWxpay"===e.channel},on:{click:function(n){e.channel="jsApiWxpay"}}},[e._v("微信充值")]):t("dd",{staticClass:"icon-weixin",class:{cur:"wxpay"===e.channel},on:{click:function(n){e.channel="wxpay"}}},[e._v("微信充值")]),e.isMicroMessengerMobile?e._e():t("dd",{staticClass:"icon-zhifubao",class:{cur:"alipay"===e.channel},on:{click:function(n){e.channel="alipay"}}},[e._v("支付宝充值")])]),t("dl",{staticClass:"payment"},[t("dt",[e._v("充值金额")]),t("dd",{staticClass:"input_money"},[t("span",[e._v("￥")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{placeholder:"请输入充值金额"},domProps:{value:e.amount},on:{blur:this.$util.restore,input:function(n){n.target.composing||(e.amount=n.target.value)}}})])]),t("div",{staticClass:"bigBtn",on:{click:e.recharge}},[e._v("充值")])]),t("mt-popup",{staticClass:"paytips",attrs:{closeOnClickModal:!1},model:{value:e.popupVisible,callback:function(n){e.popupVisible=n},expression:"popupVisible"}},[t("h2",{staticClass:"border-bottom"},[e._v("请确认支付是否已完成")]),t("div",{staticClass:"border-bottom",on:{click:e.gotoMoney}},[e._v("已支付完成")]),t("div",{on:{click:e.gotoMoney}},[e._v("支付遇到问题，重新支付")])])],1)},o=[],a=t("ab9e"),s=t("3a78"),c=t("5f87"),r=t("76a0"),l={name:"Chongzhi",data:function(){var e=this.$util._isMicroMessengerMobile(),n=this.$util._isIOSMobile();return{popupVisible:!1,isMicroMessengerMobile:e,isIOSMobile:n,channel:e?"jsApiWxpay":"wxpay",amount:100}},created:function(){window.gotoSuccessPayResults=this.gotoSuccessPayResults},methods:{createRechargeInfo:function(){var e=this,n={channel:"jsApiWxpay"==this.channel?"wxpay":this.channel,amount:this.amount};s["a"].createRecharge(n,function(n){n?"alipay"===e.channel?(s["a"].alipayRecharge(n),e.isIOSMobile?e.gotoSuccessPayResults():e.gotoMoney()):"jsApiWxpay"===e.channel?(e.wxjsapipay(n),e.gotoMoney()):"wxpay"===e.channel&&(s["a"].wxpayRecharge(n,function(e){e&&(window.location.href=e)},function(e){console.error("发起微信充值发生异常"+JSON.stringify(e))}),e.isIOSMobile?e.gotoSuccessPayResults():e.gotoMoney()):Object(r["Toast"])("充值记录创建失败")},function(e){console.error("添加充值记录异常"+JSON.stringify(e))})},recharge:function(){var e=this;e.createRechargeInfo()},wxjsapipay:function(e){var n={},t=function(){WeixinJSBridge.invoke("getBrandWCPayRequest",{debug:!0,appId:n.appId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,jsApiList:["chooseWXPay"]},function(e){"get_brand_wcpay_request:ok"==e.err_msg&&(Object(r["Toast"])("充值成功"),this_.gotoMoney()),"get_brand_wcpay_request:cancel"==e.err_msg&&(Object(r["Toast"])("取消充值"),this_.gotoMoney())})},i=function(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",t,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",t),document.attachEvent("onWeixinJSBridgeReady",t)):t()},o=Object(c["e"])();o?s["a"].jsApiWxpayRecharge(e,{openId:o},function(e){e?(n=e,i()):Object(r["Toast"])("微信充值下单失败")},function(e){console.error("获取微信充值信息时发生异常",JSON.stringify(e))}):(Object(r["Toast"])("您还未授权或登录葡悦汇微信公众号,即将跳转授权页面."),window.location=a["a"].publicUrl+"api/wx/menu/auth?service="+encodeURIComponent(window.location.href))},gotoMoney:function(){var e=this;e.$router.push({name:"Money"})},gotoSuccessPayResults:function(){var e=this;e.gotoMoney()},showConfirmWindow:function(){this.popupVisible=!0}}},u=l,p=(t("9554"),t("2877")),d=Object(p["a"])(u,i,o,!1,null,"bd690696",null);d.options.__file="Chongzhi.vue";n["default"]=d.exports}}]);