(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7b04f5"],{"50dc":function(a,t,s){"use strict";var e=s("c41e"),i=s.n(e);i.a},c41e:function(a,t,s){},f5f6:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"flexlayout"},[s("div",{staticClass:"topbar"},[s("router-link",{staticClass:"icon icon-sousuo",attrs:{to:"/search"}}),s("div",[a._v("葡悦汇商城")]),s("span",{staticClass:"icon"})],1),s("div",{staticClass:"filterBar"},[s("span",{class:{cur:1==a.searchParam.field},on:{click:function(t){a.doSearch("1")}}},[a._v("综合")]),s("span",{staticClass:"i-rev",class:[{cur:2==a.searchParam.field},a.orderClass.soldNumBy?"i-rev":"i-sor"],on:{click:function(t){a.doSearch("2")}}},[a._v("销量")]),s("span",{class:[{cur:3==a.searchParam.field},a.orderClass.capacityBy?"i-rev":"i-sor"],on:{click:function(t){a.doSearch("3")}}},[a._v("容量")]),s("span",{class:[{cur:4==a.searchParam.field},a.orderClass.priceBy?"i-rev":"i-sor"],on:{click:function(t){a.doSearch("4")}}},[a._v("价格")]),s("span",{staticClass:"icon-shaixuan",on:{click:function(t){a.onShow()}}},[a._v("筛选")])]),s("div",{staticClass:"productBox"},[s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":a.pageList,"auto-fill":!1,"bottom-all-loaded":a.allLoaded}},[a.products?s("div",{staticClass:"list_pho2",attrs:{id:"product_list"}},a._l(a.products,function(t,e){return s("router-link",{key:e,attrs:{to:{name:"ProductDetail",query:{id:t.id}}}},[s("div",{staticClass:"wrap_img"},[s("img",{attrs:{src:a.attachmentUrl+t.logo+".jpg",alt:t.name}})]),s("p",{staticClass:"cp_title"},[a._v(a._s(t.name))]),s("p",{staticClass:"price"},[a._v("会员价：￥"+a._s(t.price))]),s("p",{staticClass:"price2"},[a._v("\n              零售价：\n              "),s("span",[a._v(a._s(a._f("formatMoney")(t.originalPrice)))])])])})):a._e()])],1),s("MainMenu",{staticClass:"menuBox"})],1),s("mt-popup",{staticClass:"filterBox",attrs:{position:"right",modal:!0},model:{value:a.popupVisible,callback:function(t){a.popupVisible=t},expression:"popupVisible"}},[s("div",{staticStyle:{height:"100%",overflow:"auto"}},[s("h2",{staticClass:"filterTitle"},[s("strong",[a._v("类型")])]),s("div",{staticClass:"filerItem"},a._l(a.typeList,function(t,e){return s("span",{key:t.key,class:{"cur icon-cur":t.checked},on:{click:function(s){a.typeClick(t)}}},[a._v(a._s(t.value))])})),s("h2",{staticClass:"filterTitle"},[s("strong",[a._v("国家")])]),s("div",{staticClass:"filerItem"},a._l(a.areaList,function(t,e){return s("span",{key:t.key,class:{"cur icon-cur":t.checked},on:{click:function(s){a.typeClick(t)}}},[a._v(a._s(t.value))])})),s("h2",{staticClass:"filterTitle"},[s("strong",[a._v("价格")])]),s("div",{staticClass:"filerItem"},a._l(a.priceList,function(t,e){return s("span",{key:t.key,class:{"cur icon-cur":t.checked},on:{click:function(s){a.typeClick(t,1)}}},[a._v(a._s(t.value))])}))]),s("div",{staticClass:"btngroup"},[s("div",{staticClass:"btn2",on:{click:function(t){a.onHide()}}},[a._v("取消")]),s("div",{staticClass:"btn3",on:{click:function(t){a.search()}}},[a._v("确认")])])])],1)},i=[],r=(s("386d"),s("ac6a"),s("add6")),c=s("38cc"),o=s("3a78"),n=(s("76a0"),{name:"Shop",components:{MainMenu:r["a"],Listpho2:c["a"]},data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,products:[],code:"",msg:"",baseUrl:o["a"].baseUrl,popupVisible:!1,priceList:[],areaList:[],chateauList:[],typeList:[],searchParam:{priceRange:"",area:"",chateauId:"",classify:"",pageNo:1,pageSize:10,orderBy:"1",field:"1"},allLoaded:!1,orderClass:{soldNumBy:!1,capacityBy:!1,priceBy:!1}}},computed:{},created:function(){var a=this,t={pageNo:1,pageSize:10,orderBy:a.searchParam.orderBy,field:a.searchParam.field};this.searchProduct(t),this.doConfig()},methods:{doSearch:function(a){this.resetPage(),this.searchParam.field=a,this.switchOrderStyle(a),this.searchProduct(this.searchParam)},searchProduct:function(a,t){var s=this;return new Promise(function(e,i){o["a"].products(a,function(a){s.products=t?s.products.concat(a.list):a.list,e(a.pages)},function(a){console.log("my---errorDatassss==="+JSON.stringify(a)),i()})})},doConfig:function(){var a=this;o["a"].searchConfig({},function(t){null!=t&&(t.price_range_type&&(a.priceList=a.wrap(t.price_range_type)),t.country_type&&(a.areaList=a.wrap(t.country_type)),t.chateau_type&&(a.chateauList=a.wrap(t.chateau_type)),t.classify_type&&(a.typeList=a.wrap(t.classify_type)))},function(a){})},typeClick:function(a,t){1==t&&this.priceList.forEach(function(a,t){a.checked=!1}),a.checked=!a.checked},addToShoppingCart:function(a){var t={productId:a.id,productQuantity:1,currentPrice:a.price};o["a"].addToShoppingCart(t,function(a){console.log("添加购物车成功:",t)},function(a){console.error("添加购物车异常:",JSON.stringify(a))})},onShow:function(){this.popupVisible=!0},onHide:function(){this.popupVisible=!1,this.wrap(this.priceList),this.wrap(this.areaList),this.wrap(this.chateauList),this.wrap(this.typeList),this.search()},search:function(){this.popupVisible=!1,this.resetPage(),this.searchParam.classify=this.selectList(this.typeList),this.searchParam.priceRange=this.selectList(this.priceList),this.searchParam.chateauId=this.selectList(this.chateauList),this.searchParam.area=this.selectList(this.areaList),this.searchProduct(this.searchParam)},wrap:function(a){var t=this;return a?(a.forEach(function(a){t.$set(a,"checked",!1)}),a):a},selectList:function(a){var t="";return a.forEach(function(a){a.checked&&(t.length>0&&(t+=","),t+=a.key)}),t},pageList:function(){event.stopImmediatePropagation(),this.searchParam.pageNo++;var a=this,t={pageNo:a.searchParam.pageNo,pageSize:10,orderBy:a.searchParam.orderBy,field:a.searchParam.field,classify:a.searchParam.classify,priceRange:a.searchParam.priceRange,chateauId:a.searchParam.chateauId,area:a.searchParam.area};this.searchProduct(t,!0).then(function(t){t==a.searchParam.pageNo&&(a.allLoaded=!0),a.$refs.loadmore.onBottomLoaded()}).catch(function(t){a.$refs.loadmore.onBottomLoaded()})},switchOrderStyle:function(a){switch(a){case"2":this.orderClass.soldNumBy=!this.orderClass.soldNumBy,this.searchParam.orderBy=this.getOrderBy(this.orderClass.soldNumBy);break;case"3":this.orderClass.capacityBy=!this.orderClass.capacityBy,this.searchParam.orderBy=this.getOrderBy(this.orderClass.capacityBy);break;case"4":this.orderClass.priceBy=!this.orderClass.priceBy,this.searchParam.orderBy=this.getOrderBy(this.orderClass.priceBy);break}},getOrderBy:function(a){return a?"1":"2"},resetPage:function(){this.searchParam.pageNo=1,this.searchParam.pageSize=10,this.searchParam.orderBy="1",this.searchParam.field="1",this.allLoaded=!1}}}),l=n,h=(s("50dc"),s("2877")),d=Object(h["a"])(l,e,i,!1,null,"45b6e612",null);d.options.__file="Shop.vue";t["default"]=d.exports}}]);