(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed030480"],{"09b6":function(e,t,a){},b9c3:function(e,t,a){"use strict";var s=a("09b6"),n=a.n(s);n.a},e2e7:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"news"},[a("h2",[e._v(e._s(e.title))]),a("h3",[e._v(e._s(e.releaseUser)+" "),a("span",[e._v(e._s(e._f("formatDateTime")(e.releaseDate)))])]),e.text?a("div",{domProps:{innerHTML:e._s(e.text)}}):e._e(),e.textImg?a("img",{attrs:{src:e.attachmentUrl+e.textImg,alt:""}}):e._e()])},n=[],i=a("3a78"),r={name:"Paper",data:function(){return{attachmentUrl:this.GLOBAL.attachmentUrl,title:"",text:"",textImg:"",releaseDate:"",logo:"",releaseUser:""}},created:function(){this.initData()},methods:{initData:function(){var e=this,t={pageNo:1,pageSize:10,model:{type:"honor"}};i["a"].systextByType(t,function(t){var a=t.list[0];e.title=a.title,e.text=a.text,e.textImg=a.textImg,e.releaseDate=a.releaseDate,e.logo=a.logo,e.releaseUser=a.releaseUser},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}}},o=r,l=a("2877"),c=Object(l["a"])(o,s,n,!1,null,null,null);c.options.__file="Paper.vue";t["a"]=c.exports},e5fa:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"topbar"},[a("span",{staticClass:"icon icon-fanhui",on:{click:function(t){e.$router.go(-1)}}}),a("div",[e._v("葡悦荣誉")]),a("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),a("Paper")],1)},n=[],i=a("e2e7"),r={name:"News",components:{Paper:i["a"]}},o=r,l=(a("b9c3"),a("2877")),c=Object(l["a"])(o,s,n,!1,null,"07e86681",null);c.options.__file="News.vue";t["default"]=c.exports}}]);