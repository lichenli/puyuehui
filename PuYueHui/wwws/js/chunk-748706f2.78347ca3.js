(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748706f2"],{"691f":function(t,e,s){"use strict";var i=s("9bf8"),r=s.n(i);r.a},"9bf8":function(t,e,s){},c1a8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flexlayout"},[s("div",{staticClass:"topbar"},[s("span",{staticClass:"icon icon-fanhui",on:{click:function(e){t.$router.go(-1)}}}),s("div",[t._v("收货地址")]),s("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),s("div",{staticClass:"flexauto"},[s("ul",{staticClass:"list_common flex"},[t._l(t.memberAddrSelectsData,function(e){return s("li",{key:e.id},[s("div",{staticClass:"addinfo radioGroup",on:{click:function(s){t.addressClickSelectFinshed(e)}}},[s("input",{attrs:{type:"radio",id:e.id,name:"address"},domProps:{value:e.id,checked:1==e.defaultAddr}}),s("label",{attrs:{for:e.id}},[s("p",{staticClass:"addressee"},[1==e.defaultAddr?s("span",{staticClass:"tag"},[t._v("默认")]):t._e(),s("strong",{staticClass:"name"},[t._v(t._s(e.receiver))]),s("span",{staticClass:"tel"},[t._v(t._s(e.mobile))])]),s("p",{staticClass:"graytext"},[t._v(t._s(e.fullAddress))])])]),s("div",{staticClass:"edit icon-edit",on:{click:function(s){t.toDetail(e.id)}}},[t._v("修改")])])}),s("li",[s("div",{staticClass:"icon-add",staticStyle:{display:"block",width:"100%"},on:{click:function(e){t.toDetail()}}},[t._v("添加新地址")])])],2)])])},r=[],a=(s("28a5"),s("3a78")),d={name:"AddressSelect",data:function(){return{memberAddrSelectsData:{}}},created:function(){this.memberAddrSelectsMethod()},methods:{addressSelectFinshed:function(t){this.$router.push({name:"Querendingdan",query:{orderShoppingCartIds:this.$route.query.orderShoppingCartIds,address:t}})},addressClickSelectFinshed:function(t){var e=Array.isArray(this.$route.query.orderShoppingCartIds)?this.$route.query.orderShoppingCartIds:this.$route.query.orderShoppingCartIds.split(";");this.$router.push({name:"Querendingdan",query:{orderShoppingCartIds:e,address:t}})},memberAddrSelectsMethod:function(){var t=this;a["a"].memberAddrSelects(function(e){t.memberAddrSelectsData=e},function(t){console.log("获取收获地址发生异常:",JSON.stringify(t))})},toDetail:function(t){this.$router.push({path:"/AddressEdit",query:{addrid:t}})}}},n=d,o=(s("691f"),s("2877")),c=Object(o["a"])(n,i,r,!1,null,"348c8584",null);c.options.__file="AddressSelect.vue";e["default"]=c.exports}}]);