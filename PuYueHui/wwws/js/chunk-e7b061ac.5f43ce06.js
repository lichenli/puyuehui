(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7b061ac"],{2222:function(t,s,a){"use strict";var i=a("c572"),e=a.n(i);e.a},"73b2":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{}},[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(s){t.$router.go(-1)}}}),"store"===t.storeType?a("div",[t._v("葡悦汇门店")]):a("div",[t._v("葡悦汇商家")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"store"},[a("div",{staticClass:"info"},[a("div",{staticClass:"pho_link"},[t.logo?a("img",{attrs:{src:t.attachmentUrl+t.logo,alt:""}}):t._e()]),a("div",{staticClass:"add icon-weizhi"},[a("p",[t._v(t._s(t.name))]),a("p",[t._v(t._s(t.fullAddress))])])]),a("div",{staticClass:"contain"},[a("span",{staticClass:"graytext"},[t._v("营业时间：")]),t._v("\n      "+t._s(t.businessHours)+"\n    ")]),a("div",{staticClass:"contain"},[a("span",{staticClass:"graytext"},[t._v("联系电话：")]),a("a",{staticClass:"tel",attrs:{href:"tel:"+t.tel}},[t._v(t._s(t.tel))]),t._v("\n      "+t._s(t.contact)+"\n    ")]),"store"===t.storeType?a("h2",{staticClass:"tiptitle"},[a("strong",[t._v("门店介绍")])]):a("h2",{staticClass:"tiptitle"},[a("strong",[t._v("商家介绍")])]),a("div",{staticClass:"contain",domProps:{innerHTML:t._s(t.detail)}})])])},e=[],o=a("3a78"),n={name:"Store",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,id:this.$route.query.id,storeType:this.$route.query.storeType,logo:"",storeNo:"",name:"",tel:"",address:"",fullAddress:"",detail:"",businessHours:"",contact:""}},created:function(){this.initData()},methods:{initData:function(){var t=this,s={id:t.id};o["a"].store(s,function(s){t.logo=s.logo,t.storeNo=s.storeNo,t.name=s.storeName,t.tel=s.tel,t.address=s.address,t.fullAddress=s.fullAddress,t.detail=s.detail,t.businessHours=s.businessHours,t.contact=s.contact},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})}}},r=n,c=(a("2222"),a("2877")),l=Object(c["a"])(r,i,e,!1,null,null,null);l.options.__file="Store.vue";s["default"]=l.exports},c572:function(t,s,a){}}]);