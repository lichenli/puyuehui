(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ae6ffe"],{6890:function(t,i,a){},"7f7f":function(t,i,a){var n=a("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,e="name";e in s||a("9e1e")&&n(s,e,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"95d1":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"flexlayout"},[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(i){t.$router.go(-1)}}}),a("div",[t._v("商品详情")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"flexauto"},[a("div",{staticClass:"wrap_img noradius"},[a("img",{attrs:{src:t.attachmentUrl+t.bigImage+".jpg",alt:""}})]),a("div",{staticClass:"productInfo"},[a("span",{staticClass:"price"},[a("p",[t._v("\n            "+t._s(t._f("formatMoney")(t.price))+"\n            "),a("span",{staticClass:"tag"},[t._v("会员价")])]),a("em",[t._v("零售价："+t._s(t._f("formatMoney")(t.originalPrice)))])]),a("div",{staticClass:"sold"},[a("p",[t._v("已售 "+t._s(t.soldNum))]),a("p",[t._v("库存 "+t._s(t.num))])])]),a("div",{staticClass:"productPanel"},[a("h2",{staticClass:"productTitle"},[a("span",{staticClass:"tag"},[t._v("团购")]),t._v("\n          "+t._s(t.name)+"\n        ")]),a("p",[t._v(t._s(t.comment))])]),a("ul",{staticClass:"guige"},[a("li",[a("em",[t._v("规格：")]),a("span",[t._v(t._s(t.capacity))])]),a("li",[a("em",[t._v("年份：")]),a("span",[t._v(t._s(t.year))])]),a("li",[a("em",[t._v("产地：")]),a("span",[t._v(t._s(t.area))])])]),a("div",{staticClass:"editor",staticStyle:{"margin-bottom":".88rem"},domProps:{innerHTML:t._s(t.detail)}})]),a("div",{staticClass:"goumai border-top"},[a("router-link",{staticClass:"icon-gouwuche border-right",attrs:{to:{path:"/Shoppingcart",query:{tab:3}}}},[t._v("\n        购物车\n        "),a("em",{staticClass:"badge"},[t._v(t._s(t.shoppingCartCountInfo))])]),a("span",{staticClass:"icon-star",class:{selected:t.collectSelectedStyle,"":!t.collectSelectedStyle},on:{click:function(i){t.onStore(t.id)}}},[t._v("收藏")]),a("span",{staticClass:"btn2 border-left",on:{click:function(i){t.onShow()}}},[t._v("加入购物车")])],1)]),a("mt-popup",{staticClass:"querenkuang",staticStyle:{width:"100%"},attrs:{position:"bottom","popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(i){t.popupVisible=i},expression:"popupVisible"}},[a("div",{staticClass:"querenInfo"},[a("img",{attrs:{src:t.attachmentUrl+t.smallImage+".jpg",alt:""}}),a("div",[a("p",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(t.price)))]),a("p",[t._v("库存: "+t._s(t.num))])])]),a("ul",{staticClass:"guige border-top"},[a("li",[a("em",[t._v("规格：")]),a("span",{staticClass:"border cur"},[t._v(t._s(t.capacity))])]),a("li",[a("em",[t._v("年份：")]),a("span",{staticClass:"border disable"},[t._v(t._s(t.year)+"年")])])]),a("div",{staticClass:"border-top",staticStyle:{overflow:"hidden",padding:".2rem"}},[a("span",{staticClass:"input_num"},[a("i",{on:{click:t.onAdd}},[t._v("+")]),a("span",[t._v(t._s(t.payNum))]),a("i",{on:{click:t.onReduce}},[t._v("-")])])]),a("div",{staticClass:"jiesuan border-top"},[a("div",{staticClass:"total"},[a("p",[t._v("\n          合计：\n          "),a("span",{staticClass:"price"},[t._v(t._s(t._f("formatMoney")(t.sum)))])]),a("p",[t._v("\n          共\n          "),a("span",{staticClass:"price"},[t._v(t._s(t.payNum))]),t._v(" 件商品\n        ")])]),a("span",{staticClass:"btn2",on:{click:function(i){t.onJoinCar(t.id)}}},[t._v("确定")])])])],1)},s=[],o=(a("7f7f"),a("76a0")),e=a("3a78"),c={name:"ProductDetail",data:function(){return{popupVisible:!1,attachmentUrl:this.GLOBAL.attachmentUrl,bigImage:"",smallImage:"",price:0,originalPrice:"",soldNum:0,sum:0,payNum:1,num:0,name:"",capacity:"",year:"",detail:"",id:this.$route.query.id,action:"",shoppingCartCountInfo:0,area:"",comment:"",collectSelectedStyle:!1}},created:function(){this.findProudct(this.$route.query.id),this.shoppingCartCountMethod(),this.checkCollectMethod(this.$route.query.id)},methods:{findProudct:function(t){var i=this,a={id:t};e["a"].findProduct(a,function(t){null!=t&&(i.price=t.price,i.bigImage=t.bigImage,i.price=t.price,i.originalPrice=t.originalPrice,i.soldNum=t.soldNum,i.num=t.num,i.name=t.name,i.capacity=t.capacity,i.year=t.year,i.id=t.id,i.smallImage=t.logo,i.area=t.area,i.comment=t.comment,i.sum=t.price,i.loadContent(t.detail))},function(t){})},loadContent:function(t){if(t){var i=this,a={id:t};e["a"].getProductContent(a,function(t){i.detail=t},function(t){})}},onPay:function(t){},onJoinCar:function(t){var i=this;if(this.payNum>this.num)Object(o["Toast"])("库存数据量不够");else{var a=this,n={productId:t,status:1,currentPrice:a.price,productQuantity:a.payNum};e["a"].addToShoppingCart(n,function(t){Object(o["Toast"])("添加购物车"+(t?"成功":"失败")),a.onHide(),i.shoppingCartCountMethod()},function(t){})}},checkCollectMethod:function(t){var i=this,a={prodId:t,prodType:1};e["a"].checkCollect(a,function(t){i.collectSelectedStyle=t})},onStore:function(t){var i=this,a={prodId:t,prodType:1};e["a"].addCollect(a,function(t){1==t?(i.collectSelectedStyle=!0,Object(o["Toast"])("收藏成功")):-1==t?(i.collectSelectedStyle=!1,Object(o["Toast"])("取消收藏成功")):Object(o["Toast"])("收藏失败")})},onAdd:function(){this.payNum++},onReduce:function(){this.payNum<=0||this.payNum--},onShow:function(t){this.popupVisible=!0},onHide:function(){this.popupVisible=!1},shoppingCartCountMethod:function(){var t=this,i={productId:"",type:""};e["a"].shoppingCartCount(i,function(i){t.shoppingCartCountInfo=i},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})}}},r=c,l=(a("ca20"),a("2877")),u=Object(l["a"])(r,n,s,!1,null,"40af7475",null);u.options.__file="ProductDetail.vue";i["default"]=u.exports},ca20:function(t,i,a){"use strict";var n=a("6890"),s=a.n(n);s.a}}]);