(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19fc4680"],{"281c":function(t,a,i){"use strict";var e=i("f7a6"),n=i.n(e);n.a},"71da":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"topbar"},[i("span",{staticClass:"icon icon-fanhui",on:{click:function(a){t.$router.go(-1)}}}),i("div",[t._v("葡悦汇选酒")]),i("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),t._l(t.list,function(a){return i("div",{key:a.id,staticClass:"contain jingpin"},[i("router-link",{attrs:{to:{name:"ProductDetail",query:{id:a.id}}}},[i("img",{attrs:{src:t.attachmentUrl+a.logo+".jpg",alt:a.name}}),i("p",{staticClass:"review"},[t._v(t._s(a.synopsis))]),i("div",{staticClass:"jingpintip"},[i("h2",{staticClass:"jingpintitle"},[t._v(t._s(a.name))]),i("div",{staticClass:"tip"},[t._v("\n          ￥"+t._s(a.price)+"\n          "),i("br"),t._v("\n          已售: "+t._s(a.soldNum)+"\n        ")])])])],1)})],2)},n=[],s=(i("76a0"),i("3a78")),o={name:"Extremely",data:function(){return{list:[],attachmentUrl:this.GLOBAL.attachmentUrl,allLoaded:!1,pageNo:1,pageSize:10}},created:function(){var t=this,a={pageNo:t.pageNo,pageSize:t.pageSize};this.loadPageList(a)},methods:{loadPageList:function(t){var a=this;return new Promise(function(i,e){s["a"].homeExtremelyList(t,function(t){a.list=a.list.concat(t.list),i(t.pages)},function(t){console.log("my---errorDatassss==="+JSON.stringify(t)),e()})})},slidePageList:function(){event.stopImmediatePropagation(),this.pageNo++;var t=this,a={pageNo:t.pageNo,pageSize:t.pageSize};this.loadPageList(a,!0).then(function(a){a==t.pageNo&&(t.allLoaded=!0),t.$refs.loadmore.onBottomLoaded()}).catch(function(a){t.$refs.loadmore.onBottomLoaded()})}}},c=o,r=(i("281c"),i("2877")),l=Object(r["a"])(c,e,n,!1,null,null,null);l.options.__file="Extremely.vue";a["default"]=l.exports},f7a6:function(t,a,i){}}]);