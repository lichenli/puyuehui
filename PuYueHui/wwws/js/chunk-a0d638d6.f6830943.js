(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0d638d6"],{"288c":function(e,t,a){"use strict";var n=a("3aa3"),s=a.n(n);s.a},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3aa3":function(e,t,a){},"6b54":function(e,t,a){"use strict";a("3846");var n=a("cb7c"),s=a("0bfb"),o=a("9e1e"),i="toString",c=/./[i],r=function(e){a("2aba")(RegExp.prototype,i,e,!0)};a("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?r(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?s.call(e):void 0)}):c.name!=i&&r(function(){return c.call(this)})},7413:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flexlayout"},[a("div",{staticClass:"headDiv"},[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),a("div",{on:{click:function(t){e.sheetVisible=!0}}},[e._v("设置")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("div",{staticClass:"userHeader"},[e.memeberImg?a("img",{staticClass:"touxiang",attrs:{src:e.memeberImg,onerror:e.defaultImg}}):e._e(),a("div",{staticClass:"message",attrs:{to:"/Setting"}},[a("strong",{staticClass:"name"},[e._v(e._s(e.memberBaseInfo.user_name))]),a("span",{staticClass:"jibie icon-honor"},[e._v(e._s(e.memberBaseInfo.user_level_name))]),a("p",{staticClass:"icon-dianhua"},[e._v(e._s(e.memberBaseInfo.mobile))])]),a("span",{staticClass:"icon-edit",staticStyle:{"font-size":".5rem",color:"#fff","margin-top":".3rem"},attrs:{size:"large"},on:{click:e.openCamera}})])]),a("div",{staticStyle:{flex:"auto"}},[a("ul",{staticClass:"list_common rightIcon"},[a("li",[a("router-link",{attrs:{to:"/UserinfoEdit"}},[e._v("个人信息")])],1),a("li",[a("router-link",{attrs:{to:"/AddressList"}},[e._v("收货地址")])],1),a("li",[a("router-link",{attrs:{to:"/PhoneBinding"}},[e._v("手机绑定")])],1)])]),a("mt-actionsheet",{attrs:{actions:e.actions},model:{value:e.sheetVisible,callback:function(t){e.sheetVisible=t},expression:"sheetVisible"}})],1)},s=[],o=(a("a481"),a("6b54"),a("28a5"),a("3a78")),i=a("b893"),c=a("5f87"),r=a("9690"),m=a("76a0"),l=a("18a0"),f={name:"Setting",data:function(){return this.memberHomeInfo(),{sheetVisible:!1,memberBaseInfo:[],actions:[{name:"拍照"},{name:"从相册中选择"}],picData:{},attachmentUrl:this.GLOBAL.attachmentUrl,memeberImg:null,defaultImg:'this.src="'+a("865d")+'"'}},created:function(){this.initWxConfig(),window.setImage=this.setImage},methods:{memberHomeInfo:function(){var e=this;o["a"].memberHomeInfo(function(t){e.memberBaseInfo=t,e.memeberImg=e.attachmentUrl+t.img},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})},initWxConfig:function(e,t){if(Object(i["g"])()){var a=window.location.href.split("#")[0];if(!(a.indexOf("favicon.ico")>-1)){var n={url:a};o["a"].wxjsConfig(n,function(e){e&&l.config({debug:!1,appId:e.appId+"",timestamp:e.timestamp,nonceStr:e.nonceStr+"",signature:e.signature+"",jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})})}}},openCamera:function(){Object(i["g"])()?this.openCameraWX():Object(i["e"])()?this.openCameraAndroid():this.openCameraIOS()},openCameraWX:function(){var e=this;l.checkJsApi({jsApiList:["chooseImage","getLocalImgData"],success:function(t){t&&"checkJsApi:ok"==t.errMsg&&t.checkResult.chooseImage&&t.checkResult.getLocalImgData?e.openCameraStart():(console.log("不支持非手机微信中打开"),Object(m["Toast"])("请在手机微信中在打开"))}})},openCameraAndroid:function(){var e=Object(c["d"])();r["a"].openAndroidAlbum(e)},openCameraIOS:function(){var e=Object(c["d"])();window.webkit.messageHandlers.ImageUpload.postMessage({token:e})},openCameraStart:function(){var e=this;l.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var a=t.localIds;l.getLocalImgData({localId:a.toString(),isShowProgressTips:1,success:function(t){var a=t.localData,n="";n="ios"===Object(i["a"])()?a.replace("jgp","jpeg"):"data:image/jpeg;base64,"+a,e.fileUploadBase64(n)},fail:function(e){Object(m["Toast"])("图片上传异常，请重试")}})}})},fileUploadBase64:function(e){var t=this,a={file:e,attachmenType:"memberhead"};o["a"].fileUploadBase64(a,function(a){a&&a[0]&&t.saveMemberPersonInfo(a[0],e)},function(e){Object(m["Toast"])("头像上传异常，")})},saveMemberPersonInfo:function(e,t){var a=this,n={img:e};o["a"].saveMemberPersonInfo(n,function(n){n?(Object(i["g"])()?a.memeberImg=t:a.memeberImg=a.attachmentUrl+e,Object(m["Toast"])("头像修改成功")):Object(m["Toast"])("头像修改失败")},function(e){Object(m["Toast"])("头像修改异常，")})},setImage:function(e){this.saveMemberPersonInfo(e,e)}}},u=f,g=(a("288c"),a("2877")),b=Object(g["a"])(u,n,s,!1,null,"3af9b278",null);b.options.__file="Setting.vue";t["default"]=b.exports},"865d":function(e,t,a){e.exports=a.p+"img/member_header_img.f44d2f7e.jpg"}}]);