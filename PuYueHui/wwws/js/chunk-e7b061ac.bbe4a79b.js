(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7b061ac"],{2222:function(t,s,e){"use strict";var a=e("c572"),o=e.n(a);o.a},"73b2":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{}},[e("div",{staticClass:"topbar"},[e("span",{staticClass:"icon icon-fanhui",on:{click:function(s){t.$router.go(-1)}}}),"store"===t.storeType?e("div",[t._v("葡悦汇门店")]):e("div",[t._v("葡悦汇商家")]),e("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),e("div",{staticClass:"store"},[e("div",{staticClass:"info"},[e("div",{staticClass:"pho_link"},[t.logo?e("img",{attrs:{src:t.attachmentUrl+t.logo,alt:""}}):t._e()]),e("div",{staticClass:"add icon-weizhi"},[e("p",[t._v(t._s(t.name))]),e("p",[t._v(t._s(t.fullAddress))])])]),e("div",{staticClass:"contain"},[e("span",{staticClass:"graytext"},[t._v("营业时间：")]),t._v("\n      "+t._s(t.businessHours)+"\n    ")]),e("div",{staticClass:"contain"},[e("span",{staticClass:"graytext"},[t._v("联系电话：")]),t.isWX?e("a",{staticClass:"tel",attrs:{href:"tel:"+t.tel}},[t._v(t._s(t.tel))]):e("a",{staticClass:"tel",on:{click:function(s){t.callPhone()}}},[t._v(t._s(t.tel))]),t._v("\n      "+t._s(t.contact)+"\n    ")]),"store"===t.storeType?e("h2",{staticClass:"tiptitle"},[e("strong",[t._v("门店介绍")])]):e("h2",{staticClass:"tiptitle"},[e("strong",[t._v("商家介绍")])]),e("div",{staticClass:"contain",domProps:{innerHTML:t._s(t.detail)}})])])},o=[],i=e("3a78"),n=e("b893"),l=e("9690"),c={name:"Store",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,id:this.$route.query.id,storeType:this.$route.query.storeType,logo:"",storeNo:"",name:"",tel:"",address:"",fullAddress:"",detail:"",businessHours:"",contact:"",isWX:Object(n["g"])()}},created:function(){this.initData()},methods:{initData:function(){var t=this,s={id:t.id};i["a"].store(s,function(s){t.logo=s.logo,t.storeNo=s.storeNo,t.name=s.storeName,t.tel=s.tel,t.address=s.address,t.fullAddress=s.fullAddress,t.detail=s.detail,t.businessHours=s.businessHours,t.contact=s.contact},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})},callPhone:function(){var t=this;Object(n["d"])()?(console.log("tel."+t.tel),window.webkit.messageHandlers.callPhoneNum.postMessage({tel:t.tel})):n["e"]&&(console.log("tel."+t.tel),l["a"].androidCallPhone(t.tel))},insertContract:function(){var t=this;n["e"]&&(console.log("tel."+t.tel),l["a"].androidInsertContract(t.tel))}}},r=c,d=(e("2222"),e("2877")),u=Object(d["a"])(r,a,o,!1,null,null,null);u.options.__file="Store.vue";s["default"]=u.exports},c572:function(t,s,e){}}]);