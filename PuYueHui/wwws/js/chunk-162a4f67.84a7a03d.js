(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162a4f67"],{2909:function(t,s,e){"use strict";function o(t){if(Array.isArray(t)){for(var s=0,e=new Array(t.length);s<t.length;s++)e[s]=t[s];return e}}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){return o(t)||i(t)||n()}e.d(s,"a",function(){return a})},"9cb6":function(t,s,e){},de9f:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.shoppings?e("div",{staticClass:"flexlayout",attrs:{id:"shopping_list"}},[e("div",{staticClass:"topbar",staticStyle:{flex:"none"},attrs:{id:"page-cart"}},[e("span",{staticClass:"icon"}),e("div",[t._v("购物车")]),e("span",{staticClass:"header-edit",on:{click:t.toggleDelBtn}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.delFlag,expression:"!delFlag"}]},[t._v("编辑")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.delFlag,expression:"delFlag"}]},[t._v("完成")])])]),e("div",{staticStyle:{overflow:"scroll",flex:"auto","padding-top":"0"}},[e("v-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1}},[e("div",{staticClass:"page"},[0===t.shoppings.length?e("div",{staticClass:"empty-states"},[e("span",[t._v("这里是空的，快去逛逛吧")])]):e("ul",{staticClass:"goods-list cart-list"},t._l(t.shoppings,function(s){return s.product?e("li",{key:s.id,staticClass:"goods-item",on:{click:function(e){t.selectGoods(s)}}},[e("mt-cell-swipe",{attrs:{right:[{content:"删除",style:{background:"#f5551f",color:"#fff"},handler:function(){return t.deleteShoppingCart(s.id)}}]}},[e("div",{staticClass:"item-selector"},[e("div",{staticClass:"icon-selector",class:{"selector-active":s.checked}},[e("svg",{staticClass:"icon",attrs:{t:"1504061791962",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2922","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"12"}},[e("path",{attrs:{d:"M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z",fill:"#ffffff","p-id":"2923"}})])])]),e("div",{staticClass:"goods-img"},[e("router-link",{attrs:{to:"/ProductDetail?id="+s.product.id}},[2==s.type?e("span",{staticClass:"zhuanshu"},[t._v("专属商城")]):t._e(),e("img",{attrs:{src:t.attachmentUrl+s.product.logo+".jpg",alt:s.product.name}})])],1),e("div",{staticClass:"goods-info"},[e("p",{staticClass:"goods-title"},[t._v(t._s(s.product.name))]),e("div",{staticClass:"goods-price"},[e("span",[e("b",[t._v(t._s(t._f("formatMoney")(s.currentPrice)))])])])]),e("div",{staticClass:"goods-num"},[e("div",{staticClass:"num-btn",on:{click:function(e){e.stopPropagation(),t.changeQty(!0,s)}}},[t._v("+")]),e("div",{staticClass:"show-num"},[t._v(t._s(s.productQuantity))]),e("div",{staticClass:"num-btn",on:{click:function(e){e.stopPropagation(),t.changeQty(!1,s)}}},[t._v("-")])])])],1):t._e()}))])])],1),e("div",{staticClass:"action-bar",class:{"del-box":t.delFlag}},[e("div",{staticClass:"g-selector",on:{click:t.checkAll}},[e("div",{staticClass:"item-selector"},[e("div",{staticClass:"icon-selector",class:{"selector-active":t.checkAllFlag},staticStyle:{"margin-top":".24rem"}},[e("svg",{staticClass:"icon",attrs:{t:"1504061791962",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2922","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"12"}},[e("path",{attrs:{d:"M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z",fill:"#ffffff","p-id":"2923"}})])])]),e("span",[t._v("全选")])]),e("div",{staticClass:"total"},[t._v("\n      合计：\n      "),e("span",[e("b",[t._v(t._s(t._f("formatMoney")(t.totalPrice)))])])]),e("button",{staticClass:"action-btn buy-btn",on:{click:t.goToSettlement}},[t._v("结算("+t._s(t.selectedNum)+")")]),e("div",{staticClass:"action-btn del-btn",on:{click:t.delGoods}},[t._v("删除("+t._s(t.selectedNum)+")")])]),e("MainMenu")],1):t._e()},i=[],n=(e("ac6a"),e("2909")),a=e("3a78"),c=e("76a0"),l=e("add6"),r={name:"Shoppingcart",components:{MainMenu:l["a"],"v-loadmore":c["Loadmore"]},data:function(){return{page:{pageNo:1,pageSize:10},attachmentUrl:this.GLOBAL.attachmentUrl,checkItems:[],checkAllFlag:!1,selectedNum:0,delFlag:!1,shoppings:[],allLoaded:!1,scrollMode:"auto"}},mounted:function(){this.getShoppings(!0),window.scrollTo(0,0)},created:function(){},methods:{loadTop:function(){this.getShoppings(!0),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.more(),this.$refs.loadmore.onBottomLoaded()},more:function(){this.getShoppings(!1)},isHaveMore:function(t){this.allLoaded=!0,t&&(this.allLoaded=!1)},getShoppings:function(t){var s=this;t&&(this.page.pageNo=0,this.shoppings=[]),s.page.pageNo+=1;var e={pageNo:s.page.pageNo,pageSize:s.page.pageSize};a["a"].shoppings(e,function(t){s.isHaveMore(t.hasNextPage),s.shoppings=Object(n["a"])(s.shoppings).concat(Object(n["a"])(t.list))},function(t){console.error("获取个人的购物车产品列表发生异常:",JSON.stringify(t))})},changeQty:function(t,s){var e=s.productQuantity;t?this.$set(s,"productQuantity",++e):!t&&e>1&&this.$set(s,"productQuantity",--e),this.$set(s,"subtotal",(s.price*e).toFixed(1)),a["a"].updatePayOrderShoppingCartQuantity("/"+s.id+"/"+e,function(t){console.log("更新购物车产品数量成功")},function(t){console.error("更新购物车产品数量发生异常:"+JSON.stringify(t))})},selectGoods:function(t){t.checked=!t.checked,t.checked?++this.selectedNum:--this.selectedNum,this.selectedNum===this.shoppings.length?this.checkAllFlag=!0:this.checkAllFlag=!1},checkAll:function(){var t=this;this.checkAllFlag=!this.checkAllFlag,this.shoppings.forEach(function(s){t.checkAllFlag?(s.checked=!0,t.selectedNum=t.shoppings.length):(s.checked=!1,t.selectedNum=0)})},toggleDelBtn:function(){this.delFlag=!this.delFlag},deleteShoppingCart:function(t){if(t){for(var s=this,e=[],o=0;o<this.shoppings.length;o++)this.shoppings[o].id!=t&&e.push(this.shoppings[o]);a["a"].deleteShoppingCart(t,function(t){console.log("删除购物车产品成功"),s.shoppings=e},function(t){console.error("删除购物车产品发生异常:"+JSON.stringify(t))}),this.shoppings=e}else Object(c["Toast"])("请选择要删除的商品")},delGoods:function(){if(0!=this.shoppings.length){for(var t=this,s=[],e=[],o=0;o<this.shoppings.length;o++)this.shoppings[o].checked?e.push(this.shoppings[o].id):s.push(this.shoppings[o]);a["a"].deleteShoppingCarts({ids:e},function(e){console.log("删除购物车产品列表成功"),t.shoppings=s,t.selectedNum=0,t.checkAllFlag=!1,t.delFlag=!t.delFlag},function(t){console.error("删除购物车产品列表发生异常:"+JSON.stringify(t))})}else Object(c["Toast"])("请选择要删除的商品")},goToSettlement:function(){var t=this,s=[];t.checkItems=[],this.shoppings.forEach(function(e,o){1==e.checked&&(t.checkItems.push(e.id),s.push(e.type))}),0!=t.checkItems.length?t.$util.unique(s).length>1?Object(c["Toast"])("请您选择同一商城内商品的进行结算"):this.$router.push({name:"Querendingdan",query:{orderShoppingCartIds:t.checkItems}}):Object(c["Toast"])("请您选择好需要进行结算的商品")}},computed:{totalPrice:function(){var t=0;return this.shoppings&&this.shoppings.forEach(function(s){s.checked&&(t+=parseFloat(s.productQuantity*s.currentPrice))}),t}}},p=r,h=(e("e411"),e("2877")),d=Object(h["a"])(p,o,i,!1,null,null,null);d.options.__file="Shoppingcart.vue";s["default"]=d.exports},e411:function(t,s,e){"use strict";var o=e("9cb6"),i=e.n(o);i.a}}]);