(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af131130"],{"2dc8":function(e,t,i){"use strict";var o=i("f29c"),r=i.n(o);r.a},a3db:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flexlayout"},[i("div",{staticClass:"topbar"},[i("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),i("div",[e._v("修改地址")]),i("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),i("div",{staticClass:"flexauto"},[i("ul",{staticClass:"list_common flex"},[i("li",[i("em",[e._v("收货人")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.memberAddrInfoData.receiver,expression:"memberAddrInfoData.receiver"}],attrs:{type:"text",placeholder:"请输入收货人姓名"},domProps:{value:e.memberAddrInfoData.receiver},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.memberAddrInfoData,"receiver",t.target.value)}}})])]),i("li",[i("em",[e._v("手机号码")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.memberAddrInfoData.mobile,expression:"memberAddrInfoData.mobile"}],attrs:{type:"tel",placeholder:"请输入收货人手机",maxlength:"11"},domProps:{value:e.memberAddrInfoData.mobile},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.memberAddrInfoData,"mobile",t.target.value)}}})])]),i("li",[i("em",[e._v("所在地区")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.regionValue,expression:"regionValue"}],attrs:{type:"text",placeholder:"请输入所在地区",readonly:"true"},domProps:{value:e.regionValue},on:{click:e.showAddressPicker,blur:this.$util.restore,input:function(t){t.target.composing||(e.regionValue=t.target.value)}}}),i("div",{staticClass:"region-popup"},[i("mt-popup",{staticClass:"region-popup",attrs:{position:"bottom"},model:{value:e.regionVisible,callback:function(t){e.regionVisible=t},expression:"regionVisible"}},[i("address-popup-tool",{on:{getRegion:e.getRegion}})],1)],1)])]),i("li",[i("em",[e._v("详细地址")]),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.memberAddrInfoData.address,expression:"memberAddrInfoData.address"}],attrs:{type:"text",placeholder:"如街道、小区、单元、室等"},domProps:{value:e.memberAddrInfoData.address},on:{blur:this.$util.restore,input:function(t){t.target.composing||e.$set(e.memberAddrInfoData,"address",t.target.value)}}})])])]),i("ul",{staticClass:"list_common flex"},[i("li",[i("em",{staticStyle:{width:"84%","line-height":".64rem"}},[e._v("设为默认")]),i("mt-switch",{staticStyle:{right:"-.2rem"},model:{value:e.showEditPw,callback:function(t){e.showEditPw=t},expression:"showEditPw"}})],1)]),e.isDelete?i("div",{staticClass:"bigBtn02",on:{click:function(t){e.memberAddrDeleteMethod()}}},[e._v("删除地址")]):e._e(),i("div",{staticClass:"bigBtn",on:{click:function(t){e.isDisable&&e.memberAddrUpdateMethod()}}},[e._v("保存")])])])},r=[],s=i("3a78"),a=i("76a0"),n=i("b893"),d=i("5f87"),l={name:"AddressList",data:function(){return{addrId:this.$route.query.addrid,memberAddrInfoData:{},showEditPw:!1,regionVisible:!1,regionValue:"",regionProvinceCode:"",regionCityCode:"",regionCountyCode:"",isDisable:!0,isDelete:!1}},components:{addressPopupTool:function(e){i.e("chunk-63bdd492").then(function(){var t=[i("d04f")];e.apply(null,t)}.bind(this)).catch(i.oe)}},created:function(){this.memberAddrOneMethod()},methods:{memberAddrOneMethod:function(){var e=this;if(this.addrId){var t={};t.id=this.addrId,s["a"].memberAddrSelectsOne(t,function(t){e.memberAddrInfoData=t,e.showEditPw=1==t.defaultAddr,e.regionProvinceCode=t.provice,e.regionCityCode=t.city,e.regionCountyCode=t.area,e.regionValue=t.proviceName+t.cityName+t.areaName,e.isDelete=!0},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}},memberAddrDeleteMethod:function(){var e=this;this.addrId&&a["MessageBox"].confirm("确定执行删除操作?").then(function(t){var i={};i.id=e.addrId,s["a"].memberAddrDelete(i,function(t){t?(Object(a["Toast"])({message:"删除地址操作成功",duration:2e3}),Object(d["f"])("order_address"),setTimeout(function(){e.$router.go(-1)},2e3)):(Object(a["Toast"])({message:"删除地址操作失败，请重试",duration:2e3}),e.isDisable=!0)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}).catch(function(){})},showAddressPicker:function(){this.regionVisible=!0},getRegion:function(e,t,i,o){this.regionValue=e,this.regionProvinceCode=t,this.regionCityCode=i,this.regionCountyCode=o},memberAddrUpdateMethod:function(){var e=this,t=this.showEditPw?"1":"0",i=this.regionValue+""||"";if(this.memberAddrInfoData.receiver)if(this.memberAddrInfoData.mobile)if(Object(n["f"])(this.memberAddrInfoData.mobile))if(i)if(this.memberAddrInfoData.address){this.isDisable=!1;var o=this.memberAddrInfoData;o.defaultAddr=t,o.provice=this.regionProvinceCode,o.city=this.regionCityCode,o.area=this.regionCountyCode,o.fullAddress=i+this.memberAddrInfoData.address,s["a"].memberAddrUpdate(o,function(t){t?(Object(a["Toast"])({message:"用户地址操作成功",duration:2e3}),Object(d["f"])("order_address"),e.$router.go(-1)):(Object(a["Toast"])({message:"用户地址操作失败，请重试",duration:2e3}),e.isDisable=!0)},function(e){console.log("my---errorDatassss==="+JSON.stringify(e)),this.isDisable=!0})}else Object(a["Toast"])({message:"请输入详细地址",duration:2e3});else Object(a["Toast"])({message:"请选择所在地区",duration:2e3});else Object(a["Toast"])({message:"收货人手机信息有误，请重试",duration:2e3});else Object(a["Toast"])({message:"请输入收货人手机",duration:2e3});else Object(a["Toast"])({message:"请输入收货人名称",duration:2e3})}}},c=l,m=(i("2dc8"),i("2877")),u=Object(m["a"])(c,o,r,!1,null,"82983f3e",null);u.options.__file="AddressEdit.vue";t["default"]=u.exports},f29c:function(e,t,i){}}]);