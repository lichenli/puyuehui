(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-203ecc29"],{"865d":function(t,e,n){t.exports=n.p+"img/member_header_img.f44d2f7e.jpg"},9009:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topbar"},[n("span",{staticClass:"icon icon-fanhui",on:{click:function(e){t.$router.go(-1)}}}),n("div",[t._v("设置")])]),n("div"),n("div",{staticClass:"userHeader"},[n("span",{staticClass:"icon-edit",staticStyle:{"font-size":".5rem",color:"#fff","margin-top":".3rem"},attrs:{size:"large"},on:{click:function(e){t.openCamera()}}},[t._v("拍照")])]),n("div",{staticClass:"userHeader"},[n("span",{staticClass:"icon-edit",staticStyle:{"font-size":".5rem",color:"#fff","margin-top":".3rem"},attrs:{size:"large"},on:{click:function(e){t.openImgPackage()}}},[t._v(t._s(t.imgText)+" ")])])])},i=[],o=(n("3a78"),n("b893")),c=n("9690"),s=n("5f87"),r=n("76a0"),u={name:"Setting",data:function(){return{sheetVisible:!1,uploadImg:null,imgText:"相册",defaultImg:'this.src="'+n("865d")+'"'}},created:function(){window.setImage=this.setImage},methods:{openCamera:function(){if(Object(o["d"])()){Object(r["Toast"])("安卓设备拍照");var t=Object(s["b"])();c["a"].openAndroidCamera(t)}},openImgPackage:function(){if(this.imgText="aaaaaa",Object(o["d"])()){Object(r["Toast"])("安卓设备相册");var t=Object(s["b"])();c["a"].openAndroidAlbum(t)}},setComponent:function(t){t},setImage:function(t){this.imgText="imggggg",Object(r["Toast"])("attid:"+t)},receiveMsgFromParent:function(t){console.log("receiveMsgFromParent"+t),Object(r["Toast"])("获取安卓返回结果"+t)}}},d=u,f=(n("bc25"),n("2877")),m=Object(f["a"])(d,a,i,!1,null,"685bdf5a",null);m.options.__file="TestAndriow.vue";e["default"]=m.exports},"94ac":function(t,e,n){},9690:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=window.android},bc25:function(t,e,n){"use strict";var a=n("94ac"),i=n.n(a);i.a}}]);