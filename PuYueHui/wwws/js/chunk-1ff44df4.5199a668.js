(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ff44df4"],{"0425":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flexlayout"},[r("div",{staticClass:"topbar"},[r("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),r("div",[e._v("订单详情")]),r("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),e.order?r("div",{staticClass:"dingdan"},[r("ul",{staticClass:"dingdanlist dingdanMessage"},[e._m(0),r("li",[r("em",[e._v("订单编号：")]),r("span",[e._v(e._s(e.order.orderNo))])]),r("li",[r("em",[e._v("创建时间：")]),r("span",[e._v(e._s(e._f("formatDateTime")(e.order.createDate)))])]),r("li",[r("em",[e._v("支付状态：")]),r("span",[e._v(e._s(e.renderState(e.order.payOrderState)))])]),e.order.payOrderState>1?r("li",[r("em",[e._v("支付渠道：")]),r("span",[e._v(e._s("alipay"==e.order.channel?"支付宝":"wxpay"==e.order.channel?"微信":"余额"))])]):e._e(),e.order.payOrderState>1&&e.order.payDate?r("li",[r("em",[e._v("支付时间：")]),r("span",[e._v(e._s(e._f("formatDateTime")(e.order.payDate)))])]):e._e(),1==e.order.receiveType&&e.waybill?r("li",[r("em",[e._v("物流公司：")]),r("span",[e._v(e._s(e.waybill.expressInfoName))])]):e._e(),1==e.order.receiveType&&e.waybill?r("li",[r("em",[e._v("快递单号：")]),r("span",[e._v(e._s(e.waybill.expressNo))])]):e._e(),1==e.order.receiveType?r("li",[r("em",[e._v("收货人：")]),r("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).receiver))])]):e._e(),1==e.order.receiveType?r("li",[r("em",[e._v("收货地址：")]),r("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).fullAddress))])]):e._e(),2==e.order.receiveType?r("li",[r("em",[e._v("自提门店：")]),r("span",[e._v(e._s(JSON.parse(e.order.receiveInfo).address))])]):e._e(),2==e.order.receiveType?r("li",[r("em",[e._v("提货码：")]),r("span",[e.order.payOrderState>1?r("strong",[e._v(e._s(JSON.parse(e.order.extra).pickCode))]):e._e()])]):e._e(),e._m(1),e._m(2)]),r("ul",{staticClass:"dingdanlist"},[e._m(3),e._l(e.order.payOrderDetails,function(t){return t&&t.object?r("li",{key:t.id,staticClass:"border-top"},[r("router-link",{staticClass:"link",attrs:{to:"/ProductDetail?id="+t.objectId}},[r("div",{staticClass:"wrap_img"},[r("img",{attrs:{src:e.attachmentUrl+t.object.logo+".jpg",alt:t.object.name}}),e.getType(t)?r("span",{staticClass:"zhuanshu"},[e._v("专属商城")]):e._e()]),r("div",[r("h2",{staticClass:"productTitle"},[e._v(e._s(t.object.name))]),r("p",{staticClass:"price"},[e._v(e._s(e._f("formatMoney")(t.price)))]),r("p",[e._v("\n              规格："+e._s(t.object.year)+"年 "+e._s(t.object.capacity)+"\n              "),r("span",{staticStyle:{float:"right"}},[e._v("数量: "+e._s(t.quantity))])])])])],1):e._e()}),r("li",{staticClass:"border-top tool"},[r("span",[e._v("\n          共\n          "),r("em",{staticClass:"price"},[e._v(e._s(e.order.payOrderDetails.length))]),e._v(" 件商品\n          "),r("em",{staticClass:"price"},[e._v(e._s(e._f("formatMoney")(e.totalAmount(e.order.payOrderDetails))))])]),r("div",[r("span",{staticClass:"del",on:{click:function(t){e.deleteOrderInfo(e.order.id)}}},[e._v("删除订单")])])])],2)]):e._e(),r("div",{staticClass:"bigBtn",on:{click:function(t){e.popupVisible=!0}}},[e._v("确认收货")]),r("mt-popup",{staticClass:"shouhuo",attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[r("h2",[e._v("您对收到的宝贝满意吗？请留言告诉我们您的想法。")]),r("textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"}}),r("div",{staticClass:"bigBtn",on:{click:function(t){e.popupVisible=!0}}},[e._v("确认收货")])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"border-bottom dingdanzhuangtai"},[r("strong",[e._v("订单信息")]),r("div",{staticStyle:{"text-align":"right"}},[r("span",{staticClass:"tipR"},[e._v("待收货")])]),r("div",{staticStyle:{"text-align":"right"}},[r("span",{staticClass:"tipG"},[e._v("已收货")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("em",[e._v("收货时间：")]),r("span",[e._v("2019.01.12 12:52:21")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("em",[e._v("意见建议：")]),r("p",[e._v("下次用顺丰吧下次用顺丰吧下次用顺丰吧下次用顺丰吧下次用顺丰吧下次用顺丰吧下次用顺丰吧下次用顺丰吧")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("商品信息")])])}],n=r("3a78"),s=r("76a0"),o={name:"DingdanShow",data:function(){return{popupVisible:!1,attachmentUrl:this.GLOBAL.attachmentUrl,orderId:this.$route.query.id,order:null,waybill:null}},created:function(){this.getPayOrderDetail()},methods:{getPayOrderDetail:function(){var e=this;n["a"].getPayOrderDetail(e.orderId,function(t){e.order=t,e.getWaybillInfo()},function(e){console.error("获取订单详细信息发生异常",JSON.stringify(e))})},getWaybillInfo:function(){var e=this;50!=e.order.payOrderState&&70!=e.order.payOrderState||n["a"].getWaybillInfo(e.order.extend,function(t){e.waybill=t},function(e){console.error("获取快递详细信息发生异常",JSON.stringify(e))})},deleteOrderInfo:function(e){var t=this;s["MessageBox"].confirm("您确定删除此订单吗?删除后将不可恢复.","提示").then(function(r,a){"confirm"===r&&n["a"].deleteOrderInfo(e,function(e){console.info("订单删除成功"),t.$router.go(-1)},function(e){console.error("删除订单发生异常:",JSON.stringify(e))})}).catch(function(e){})}},computed:{totalAmount:function(){return function(e){for(var t=0,r=0;r<e.length;r++)t+=parseFloat(e[r].amount);return t}},getType:function(){return function(e){return!!e.extend&&"2"==JSON.parse(e.extend).type}},renderState:function(){return function(e){var t="未知";return 1==e?t="待支付":2==e?t="已支付":50==e?t="已发货":60==e?t="已门店自提":70==e?t="已收货":80==e?t="取消支付":90==e&&(t="交易关闭"),t}}}},l=o,c=(r("094a"),r("2877")),d=Object(c["a"])(l,a,i,!1,null,"9046bfde",null);d.options.__file="DingdanShow.vue";t["default"]=d.exports},"094a":function(e,t,r){"use strict";var a=r("dc72"),i=r.n(a);i.a},dc72:function(e,t,r){}}]);