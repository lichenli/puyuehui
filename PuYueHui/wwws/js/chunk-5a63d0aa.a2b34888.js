(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a63d0aa"],{"52a8":function(e,t,a){},7936:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.order?a("div",{staticClass:"flexlayout"},[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),a("div",[e._v("重新支付")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"flexauto"},[a("ul",{staticClass:"coupons"},[e.order.coupon1?a("li",{staticClass:"icon-youhuiquan"},[a("div",[a("span",{staticClass:"num"},[e._v(e._s(e._f("formatMoney")(e.order.coupon1.minusMoney)))])]),a("div",[e._v(e._s(e.order.coupon1.name))])]):e._e(),e.order.coupon2?a("li",{staticClass:"icon-youhuiquan"},[a("div",[a("span",{staticClass:"num"},[e._v(e._s(e._f("formatMoney")(e.order.coupon2.minusMoney)))])]),a("div",[e._v(e._s(e.order.coupon2.name))])]):e._e()]),a("dl",{staticClass:"payment",staticStyle:{"margin-bottom":"0"}},[a("dt",[e._v("选择支付方式")]),e.balance>=e.totalAmount?a("dd",{staticClass:"icon-puyuepay",class:{cur:"balance"===e.channel},on:{click:function(t){e.channel="balance"}}},[e._v("\n        账户余额支付(当前余额:\n        "),a("span",{staticClass:"red"},[e._v(e._s(e._f("formatMoney")(e.balance)))]),e._v(")\n      ")]):a("dd",{staticClass:"icon-puyuepay"},[e._v("\n        您的余额不足(当前余额:\n        "),a("span",{staticClass:"red"},[e._v(e._s(e._f("formatMoney")(e.balance)))]),e._v(")\n      ")]),e.isMicroMessengerMobile?a("dd",{staticClass:"icon-weixin icon-weixin-jsapi",class:{cur:"jsApiWxpay"===e.channel},on:{click:function(t){e.channel="jsApiWxpay"}}},[e._v("微信支付")]):a("dd",{staticClass:"icon-weixin",class:{cur:"wxpay"===e.channel},on:{click:function(t){e.channel="wxpay"}}},[e._v("微信支付")]),e.isMicroMessengerMobile?e._e():a("dd",{staticClass:"icon-zhifubao",class:{cur:"alipay"===e.channel},on:{click:function(t){e.channel="alipay"}}},[e._v("支付宝支付")])]),a("ul",{staticClass:"list_common"},[1==e.order.receiveType?a("li",[a("em",[e._v("收货人：")]),a("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).receiver))])]):e._e(),1==e.order.receiveType?a("li",[a("em",[e._v("收货地址：")]),a("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).fullAddress))])]):e._e(),2==e.order.receiveType?a("li",[a("em",[e._v("自提门店：")]),a("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).address))])]):e._e()]),a("div",{staticClass:"infolist"},[a("em",[e._v("发票")]),a("span",[e._v(e._s("1"==JSON.parse(e.order.invoice).mode?"电子":"纸质")+"发票 - "+e._s("1"==JSON.parse(e.order.invoice).type?"个人":"企业")+" - "+e._s(JSON.parse(e.order.invoice).name))])]),a("div",{staticClass:"infolist"},[a("em",[e._v("备注")]),a("span",[e._v(e._s(e.order.remark))])]),a("ul",{staticClass:"dingdanlist"},e._l(e.order.payOrderDetails,function(t){return a("li",{key:t.id},[a("div",{staticClass:"wrap_img"},[a("img",{attrs:{src:e.attachmentUrl+t.object.logo+".jpg",alt:t.object.name}}),e.getType(t)?a("span",{staticClass:"zhuanshu"},[e._v("专属商城")]):e._e()]),a("div",[a("h2",{staticClass:"productTitle"},[e._v(e._s(t.object.name))]),a("p",{staticClass:"price"},[e._v(e._s(e._f("formatMoney")(t.price)))]),a("p",[e._v("\n            规格："+e._s(t.object.year)+"年 "+e._s(t.object.capacity)+"\n            "),a("span",{staticStyle:{float:"right"}},[e._v("数量: "+e._s(t.quantity))])])])])}))]),a("div",{staticClass:"jiesuan border-top"},[a("div",{staticClass:"total"},[a("p",[e._v("\n        共\n        "),a("span",{staticClass:"price"},[e._v(e._s(e.order.payOrderDetails.length))]),e._v(" 件商品\n      ")]),a("p",[e._v("\n        快递费：\n        "),a("span",{staticClass:"price"},[e._v(e._s(e._f("formatMoney")(e.totalExpressFee)))])])]),a("div",{staticStyle:{width:"35%"}},[e._v("\n      合计 ：\n      "),a("span",{staticClass:"price"},[e._v(e._s(e._f("formatMoney")(e.totalAmount)))])]),a("button",{staticClass:"btn",on:{click:e.repay}},[e._v("结算")])])]):e._e()},n=[],i=(a("ac6a"),a("3a78")),o=a("5f87"),r=a("76a0"),c={name:"PayAgain",data:function(){var e=this.$util._isMicroMessengerMobile(),t=this.$util._isIOSMobile();return{nothreshold:!0,threshold:"",attachmentUrl:this.GLOBAL.attachmentUrl,orderId:this.$route.query.orderId,isMicroMessengerMobile:e,isIOSMobile:t,channel:e?"wxpay":"balance",order:null,firstExpressFee:10,otherExpressFee:5,totalexpressFees:0,amount:0,balance:0}},created:function(){this.getExpressFees(),this.getUserBalance(),this.getPayOrderDetail(),window.gotoSuccessPayResults=this.gotoSuccessPayResults},methods:{getExpressFees:function(){var e=this;i["a"].getExpressFees(function(t){e.firstExpressFee=t?t.key:10,e.otherExpressFee=t?t.value:5},function(e){console.error("获取快递费配置时发生异常",JSON.stringify(e))})},getUserBalance:function(){var e=this;i["a"].memberMoneySelect(function(t){e.balance=t?t.money:0},function(e){console.error("获取用户剩余资金信息发生异常",JSON.stringify(e))})},getPayOrderDetail:function(){var e=this;i["a"].getPayOrderDetail(e.orderId,function(t){e.order=t},function(e){console.error("获取订单详细信息发生异常",JSON.stringify(e))})},repay:function(){var e=this;"balance"===e.channel?Object(r["MessageBox"])({title:"余额支付",message:"请输入登录密码",showInput:!0,inputType:"password",inputPlaceholder:"请输入登录密码",showCancelButton:!0,inputErrorMessage:"用户密码输入错误",closeOnClickModal:!1},function(t,a){e.$util.restore(),"confirm"==a&&i["a"].checkPassword({password:t},function(t){t?e.createAndRepay():Object(r["Toast"])("密码错误,请重新输入")},function(e){console.error("密码检验接口调用异常"+JSON.stringify(e))})}):e.createAndRepay()},createAndRepay:function(){var e=this,t=e.orderId;i["a"].repay({payOrderId:e.orderId,channel:"jsApiWxpay"==this.channel?"wxpay":this.channel},function(a){a&&("balance"===e.channel?e.balance>=e.amount?i["a"].balancePay(t,function(t){Object(r["Toast"])("余额支付"+(t?"成功":"失败")),e.gotoAllOrdes()},function(e){console.error("余额支付异常"+JSON.stringify(e))}):Object(r["Toast"])("您的余额不足!"):"alipay"===e.channel?(i["a"].alipay(t),e.isIOSMobile?e.gotoSuccessPayResults():e.gotoAllOrdes()):"jsApiWxpay"===e.channel?(e.wxjsapipay(t),e.gotoAllOrdes()):"wxpay"===e.channel&&(i["a"].wxpay(t,function(e){e&&(window.location.href=e)},function(e){console.error("发起微信支付发生异常"+JSON.stringify(e))}),e.isIOSMobile?e.gotoSuccessPayResults():e.gotoAllOrdes()))},function(e){console.error("重新支付接口异常",JSON.stringify(e))})},gotoShoppingcart:function(){var e=this;e.$router.push({name:"Shoppingcart",query:{tab:3}})},gotoAllOrdes:function(){var e=this;e.$router.push({name:"Dingdan",query:{payOrderState:100}})},gotoPayResults:function(e,t){var a=this;a.$router.push({name:"PayResults",query:{result:e,amount:t}})},gotoSuccessPayResults:function(){var e=this;e.gotoPayResults(!0,e.amount)},wxjsapipay:function(e){var t={},a=function(){WeixinJSBridge.invoke("getBrandWCPayRequest",{debug:!0,appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,jsApiList:["chooseWXPay"]},function(e){"get_brand_wcpay_request:ok"==e.err_msg&&(Object(r["Toast"])("支付成功"),this_.gotoAllOrdes()),"get_brand_wcpay_request:cancel"==e.err_msg&&(Object(r["Toast"])("取消支付"),this_.gotoAllOrdes())})},s=function(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",a,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a),document.attachEvent("onWeixinJSBridgeReady",a)):a()},n=Object(o["e"])();n?i["a"].jsApiWxpay(e,{openId:n},function(e){e?(t=e,s()):Object(r["Toast"])("微信支付下单失败")},function(e){console.error("获取微信公众号支付信息时发生异常",JSON.stringify(e))}):Object(r["Toast"])("请通过微信公众号[葡悦汇]的菜单[葡悦商城]进入商城后支付")}},computed:{totalExpressFee:function(){var e=0;return this.order&&this.order.payOrderDetails&&"1"==this.receiveType&&"1"==this.order.orderSubType&&(e=5,this.order.payOrderDetails.forEach(function(t){e+=parseFloat(5*t.quantity)})),e=this.order.serviceCharge,this.totalExpressFees=e,e},totalAmount:function(){var e=0;return this.order&&this.order.payOrderDetails&&this.order.payOrderDetails.forEach(function(t){e+=parseFloat(t.quantity*t.price)}),this.amount=parseFloat(e)+parseFloat(this.totalExpressFee),this.amount=this.order.amount,this.channel=this.balance>=this.amount?"balance":this.isMicroMessengerMobile?"jsApiWxpay":"alipay",this.amount},getType:function(){return function(e){return!!e.extend&&"2"==JSON.parse(e.extend).type}}}},l=c,u=(a("953d"),a("2877")),p=Object(u["a"])(l,s,n,!1,null,"7a042d3e",null);p.options.__file="PayAgain.vue";t["default"]=p.exports},"953d":function(e,t,a){"use strict";var s=a("52a8"),n=a.n(s);n.a}}]);