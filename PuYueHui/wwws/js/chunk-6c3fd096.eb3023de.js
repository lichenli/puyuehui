(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c3fd096"],{"45e8":function(e,s,t){"use strict";var a=t("bb3d"),i=t.n(a);i.a},"865d":function(e,s,t){e.exports=t.p+"img/member_header_img.f44d2f7e.jpg"},"9cd1":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"bg flex"},[t("div",{staticClass:"topbar"},[t("span",{staticClass:"icon icon-fanhui",on:{click:function(s){e.$router.go(-1)}}}),t("div",[e._v("我的推广二维码")]),t("span",{staticClass:"icon"})]),t("div",{staticClass:"qrcode"},[t("div",{staticClass:"wrap_img"},[e.memeberImg?t("img",{staticClass:"touxiang",attrs:{src:e.memeberImg,onerror:e.defaultImg}}):e._e()]),t("div",[t("strong",{staticClass:"name"},[e._v(e._s(e.memberBaseInfo.user_name))]),t("span",{staticClass:"jibie icon-honor"},[e._v(e._s(e.memberBaseInfo.user_level_name))])])]),t("div",{staticClass:"qrcode_img"},[t("div",{staticClass:"wrap_img"},[e.qrcodeImage?t("img",{attrs:{src:e.qrcodeImage,alt:"我的推广二维码"}}):e._e()]),t("p",{staticClass:"graytext"},[e._v("我的推广码")]),t("span",{staticClass:"qrcodeNum"},[e._v(e._s(e.memberBaseInfo.mobile))])]),t("mt-popup",{staticClass:"share",attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(s){e.popupVisible=s},expression:"popupVisible"}},[t("span",{staticClass:"icon-weixin2"},[e._v("微信")]),t("span",{staticClass:"icon-pengyouquan"},[e._v("朋友圈")]),t("span",{staticClass:"icon-weibo"},[e._v("微博")]),t("span",{staticClass:"icon-lianjie"},[e._v("分享链接")])])],1)},i=[],n=(t("cadf"),t("551c"),t("097d"),t("76a0"),t("3a78")),o={name:"QRcode",data:function(){return{popupVisible:!1,memberBaseInfo:{},qrcodeImage:null,attachmentUrl:this.GLOBAL.attachmentUrl,memeberImg:null,defaultImg:'this.src="'+t("865d")+'"'}},created:function(){this.memberHomeInfoMethod(),this.memberQrcodeMethod()},methods:{memberHomeInfoMethod:function(){var e=this;n["a"].memberHomeInfo(function(s){e.memberBaseInfo=s,e.memeberImg=e.attachmentUrl+s.img},function(e){console.log("获取会员信息发生异常:",JSON.stringify(e))})},memberQrcodeMethod:function(){var e=this;n["a"].memberQrcode(function(s){e.qrcodeImage=s},function(e){console.log("获取会员信息发生异常:",JSON.stringify(e))})}}},c=o,r=(t("45e8"),t("2877")),m=Object(r["a"])(c,a,i,!1,null,"2f6d02c9",null);m.options.__file="QRcode.vue";s["default"]=m.exports},bb3d:function(e,s,t){}}]);