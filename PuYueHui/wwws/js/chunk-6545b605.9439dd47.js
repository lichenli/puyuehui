(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6545b605"],{"0888":function(t,e,a){"use strict";var r=a("0c88"),n=a.n(r);n.a},"0c88":function(t,e,a){},2909:function(t,e,a){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return r(t)||n(t)||i()}a.d(e,"a",function(){return o})},ade3:function(t,e,a){"use strict";function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",function(){return r})},f895:function(t,e,a){"use strict";a.r(e);var r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flexlayout"},[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(e){t.$router.go(-1)}}}),a("div",[t._v("我的订单")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"tabs"},[a("span",{class:{cur:1==t.payOrderState},on:{click:function(e){t.findPayOrdersByState(1,1,!0)}}},[t._v("待支付")]),a("span",{class:{cur:2==t.payOrderState},on:{click:function(e){t.findPayOrdersByState(2,1,!0)}}},[t._v("待发货")]),a("span",{class:{cur:50==t.payOrderState},on:{click:function(e){t.findPayOrdersByState(50,1,!0)}}},[t._v("已发货")]),a("span",{class:{cur:60==t.payOrderState},on:{click:function(e){t.findPayOrdersByState(60,2,!0)}}},[t._v("门店自提")]),a("span",{class:{cur:100==t.payOrderState},on:{click:function(e){t.getAllPayOrders(100,!0)}}},[t._v("全部")])]),a("div",{staticClass:"flexauto"},[a("v-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},[a("div",{staticClass:"dingdan"},[0===t.orders.length?a("div",{staticClass:"nosouce"},[a("h2",{staticClass:"icon-kong"},[t._v("您还没有创建订单")]),a("p",[t._v("快选择自己心仪的商品加入购物车购买吧")]),a("p",[a("router-link",{staticClass:"icon-gouwuche border-right",attrs:{to:{path:"/Shoppingcart",query:{tab:3}}}},[t._v("查看购物车")])],1)]):t._l(t.orders,function(e){return a("ul",{key:e.id,staticClass:"dingdanlist"},[a("li",{staticClass:"dingdanlistTitle"},[a("span",[t._v(t._s(t._f("formatDateTime")(e.payDate?e.payDate:e.createDate)))]),a("div",{staticStyle:{"text-align":"right"}},[a("span",{staticClass:"del",on:{click:function(a){t.deleteOrderInfo(e.id)}}},[t._v("删除订单")]),1==e.payOrderState?a("span",[a("button",{staticClass:"pay",on:{click:function(a){t.repay(e.id)}}},[t._v("重新支付")])]):t._e()])]),t._l(e.payOrderDetails,function(r){return r.object?a("li",{key:r.id,staticClass:"border-top"},[a("div",{staticClass:"wrap_img"},[a("router-link",{staticClass:"link",attrs:{to:"/ProductDetail?id="+r.objectId}},[r.object.logo?a("img",{attrs:{src:t.attachmentUrl+r.object.logo+".jpg",alt:r.object.name}}):t._e()]),t.getType(r)?a("span",{staticClass:"zhuanshu"},[t._v("专属商城")]):t._e()],1),a("div",[a("router-link",{attrs:{to:{path:"/DingdanShow",query:{id:e.id}}}},[a("h2",{staticClass:"productTitle"},[t._v(t._s(r.object.name))]),a("p",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(r.price)))]),a("p",[t._v("\n                  规格："+t._s(r.object.year)+"年 "+t._s(r.object.capacity)+"\n                  "),a("span",{staticStyle:{float:"right"}},[t._v("数量: "+t._s(r.quantity))])])])],1)]):t._e()}),a("li",{staticClass:"border-top tool"},[a("span",{staticStyle:{width:"20%",flex:"none"}},[t._v("\n              共\n              "),a("em",{staticClass:"price"},[t._v(t._s(e.payOrderDetails.length))]),t._v(" 件商品\n            ")]),a("div",{staticStyle:{"text-align":"center",flex:"auto"}},[a("em",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(t.totalAmount(e.payOrderDetails))))]),t._v("\n              +\n              "),a("em",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(e.serviceCharge)))]),t._v("(快递费)\n            ")]),a("span",{staticStyle:{width:"25%","text-align":"right",flex:"none"}},[t._v("\n              合计\n              "),a("em",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(e.amount)))])])])],2)})],2)])],1)])},i=[],o=a("ade3"),s=a("2909"),c=a("3a78"),l=a("76a0"),d=(r={name:"Dingdan",components:{MessageBox:l["MessageBox"]},data:function(){return{page:{pageNo:1,pageSize:10},attachmentUrl:this.GLOBAL.attachmentUrl,payOrderState:this.$route.query.payOrderState?this.$route.query.payOrderState:"0"==this.$route.query.payOrderState?60:1,all:!1,orders:[],allLoaded:!1,scrollMode:"auto"}}},Object(o["a"])(r,"components",{"v-loadmore":l["Loadmore"]}),Object(o["a"])(r,"mounted",function(){100==this.payOrderState?this.getAllPayOrders(this.payOrderState,!0):this.findPayOrdersByState(this.payOrderState,1,!0)}),Object(o["a"])(r,"methods",{loadTop:function(){this.findPayOrdersByState(this.payOrderState,1,!1),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.more(),this.$refs.loadmore.onBottomLoaded()},more:function(){this.all?this.getAllPayOrders(100,!1):this.findPayOrdersByState(this.payOrderState,1,!1)},isHaveMore:function(t){this.allLoaded=!0,t&&(this.allLoaded=!1)},findPayOrdersByState:function(t,e,a){var r=this,n=this;this.all=!1,a&&(this.page.pageNo=0,this.orders=[]),this.payOrderState=t||1;var i="1",o=this.payOrderState;1==t?i="":60==t&&(o=0,i="2"),2==e&&(o=0),n.page.pageNo+=1;var l={"page.pageNo":n.page.pageNo,"page.pageSize":n.page.pageSize,payOrderState:o,receiveType:i};c["a"].findPayOrdersByState(l,function(e){r.payOrderState==t&&(n.isHaveMore(e.hasNextPage),n.orders=Object(s["a"])(n.orders).concat(Object(s["a"])(e.list)),n.$nextTick(function(){}))},function(t){console.error("查询订单列表发生异常:",JSON.stringify(t))})},getAllPayOrders:function(t,e){var a=this;this.all=!0,e&&(this.page.pageNo=0,this.orders=[]),this.payOrderState=t||1,a.page.pageNo+=1;var r={"page.pageNo":a.page.pageNo,"page.pageSize":a.page.pageSize};c["a"].findPayOrdersByState(r,function(t){a.isHaveMore(t.hasNextPage),a.orders=Object(s["a"])(a.orders).concat(Object(s["a"])(t.list))},function(t){console.error("查询全部订单列表发生异常:",JSON.stringify(t))})},deleteOrderInfo:function(t){var e=this;l["MessageBox"].confirm("您确定删除此订单吗?删除后将不可恢复.","提示").then(function(a,r){"confirm"===a&&c["a"].deleteOrderInfo(t,function(t){console.info("订单删除成功"),e.findPayOrdersByState(e.payOrderState,1,!0)},function(t){console.error("删除订单发生异常:",JSON.stringify(t))})}).catch(function(t){})},pay:function(t,e){"alipay"===e?c["a"].alipay(t):"wxpay"===e&&c["a"].wxpay(t,function(t){t&&(window.location.href=t)},function(t){console.error("发起微信支付发生异常"+JSON.stringify(t))})},repay:function(t){this.$router.push({name:"PayAgain",query:{orderId:t}})}}),Object(o["a"])(r,"computed",{totalAmount:function(){return function(t){for(var e=0,a=0;a<t.length;a++)e+=parseFloat(t[a].amount);return e}},getType:function(){return function(t){return!!t.extend&&"2"==JSON.parse(t.extend).type}},renderState:function(){return function(t){var e="未知";return 1==t?e="待支付":2==t?e="已支付":50==t?e="已发货":60==t?e="已门店自提":70==t?e="已收货":80==t?e="取消支付":90==t&&(e="交易关闭"),e}}}),r),u=d,p=(a("0888"),a("2877")),f=Object(p["a"])(u,n,i,!1,null,"f7361aca",null);f.options.__file="Dingdan.vue";e["default"]=f.exports}}]);