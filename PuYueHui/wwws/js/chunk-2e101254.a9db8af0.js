(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e101254"],{"2ec4":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"flexlayout"},[i("div",{staticClass:"topbar"},[i("span",{staticClass:"icon icon-fanhui",on:{click:function(s){t.$router.go(-1)}}}),i("div",[t._v("金牌VIP")]),i("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),i("div",{staticClass:"flexauto"},t._l(t.distributionChildLevelLayer,function(s){return i("div",{key:s.user_id,staticClass:"contain userbox"},[i("div",{staticClass:"userinfo"},[i("div",{staticClass:"touxiang"},[i("div",{staticClass:"wrap_img"},[s.img?i("img",{attrs:{src:t.attachmentUrl+s.img,alt:""}}):i("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544505054900&di=da4b3b963be154ca1f23044edb7124d3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F26%2F20141126213826_BCTnH.jpeg",alt:""}})])]),i("div",{staticClass:"name"},[i("p",{staticClass:"userName"},[t._v("\n            "+t._s(s.user_name)+"\n            "),i("span",{staticClass:"jibie icon-honor fr"},[t._v(t._s(s.property_val))])]),i("p",{staticClass:"userTel icon-dianhua"},[t._v(t._s(s.mobile))])])]),i("div",{staticClass:"userOrder border-top"},[i("div",[i("span",{staticClass:"num"},[t._v(t._s(s.curr_order_count))]),i("em",[t._v("本月订单")])]),i("div",[i("span",{staticClass:"num"},[t._v(t._s(t._f("formatMoney")(s.curr_order_money)))]),i("em",[t._v("本月返利")])]),i("div",[i("span",{staticClass:"num"},[t._v(t._s(s.all_order_count))]),i("em",[t._v("累计订单")])]),i("div",[i("span",{staticClass:"num"},[t._v(t._s(t._f("formatMoney")(s.all_order_money)))]),i("em",[t._v("累计返利")])])])])}))])},e=[],n=i("3a78"),r={name:"Userlist",data:function(){return{ulv:this.$route.query.ulv,distributionChildLevelLayer:[],attachmentUrl:this.GLOBAL.attachmentUrl}},created:function(){this.distributionChildLevelLayerTotalMethod()},methods:{distributionChildLevelLayerTotalMethod:function(){var t=this,s={};s.childLevel=this.ulv,n["a"].distributionChildLevelLayerTotal(s,function(s){t.distributionChildLevelLayer=s},function(t){console.log("my---errorDatassss==="+JSON.stringify(t))})}}},o=r,l=(i("f0cf"),i("2877")),c=Object(l["a"])(o,a,e,!1,null,"53a2e63b",null);c.options.__file="Userlist.vue";s["default"]=c.exports},"5d8e":function(t,s,i){},f0cf:function(t,s,i){"use strict";var a=i("5d8e"),e=i.n(a);e.a}}]);