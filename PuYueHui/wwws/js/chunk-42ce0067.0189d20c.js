(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42ce0067"],{7524:function(e,o,n){"use strict";var t=n("bd31"),s=n.n(t);s.a},bd31:function(e,o,n){},f5d7:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"flexlayout"},[n("div",{staticClass:"topbar"},[n("span",{staticClass:"icon icon-fanhui",on:{click:function(o){e.$router.go(-1)}}}),n("div",[e._v("个人信息")]),n("router-link",{staticClass:"icon icon-home",attrs:{to:"/"}})],1),n("div",{staticClass:"flexauto"},[n("ul",{staticClass:"list_common flex"},[n("li",[n("em",[e._v("手机号")]),n("span",{staticClass:"graytext"},[e._v(e._s(e.memberPersonInfo.mobile))])]),n("li",[n("em",[e._v("登录名")]),e.oldmobile==e.oldloginname?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.login_name,expression:"memberPersonInfo.login_name"}],attrs:{type:"text",placeholder:"请输入登录名",maxlength:"20"},domProps:{value:e.memberPersonInfo.login_name},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"login_name",o.target.value)}}})]):n("span",{staticClass:"graytext"},[e._v(e._s(e.memberPersonInfo.login_name))])]),n("li",[n("em",[e._v("会员昵称")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.user_name,expression:"memberPersonInfo.user_name"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:e.memberPersonInfo.user_name},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"user_name",o.target.value)}}})])]),n("li",[n("em",[e._v("邮箱号")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.email,expression:"memberPersonInfo.email"}],attrs:{type:"email",placeholder:"请输入邮箱号"},domProps:{value:e.memberPersonInfo.email},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"email",o.target.value)}}})])]),n("li",[n("em",[e._v("微信号")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.wechat,expression:"memberPersonInfo.wechat"}],attrs:{type:"text",placeholder:"请输入微信号"},domProps:{value:e.memberPersonInfo.wechat},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"wechat",o.target.value)}}})])]),n("li",[n("em",[e._v("QQ")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.qq,expression:"memberPersonInfo.qq"}],attrs:{type:"text",placeholder:"请输入微信号"},domProps:{value:e.memberPersonInfo.qq},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"qq",o.target.value)}}})])]),n("li",[n("em",[e._v("性别")]),n("span",{staticClass:"radioGroup"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.sex,expression:"memberPersonInfo.sex"}],attrs:{type:"radio",id:"m",name:"sex",value:"1"},domProps:{checked:e._q(e.memberPersonInfo.sex,"1")},on:{blur:this.$util.restore,change:function(o){e.$set(e.memberPersonInfo,"sex","1")}}}),n("label",{attrs:{for:"m"}},[e._v("先生")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.sex,expression:"memberPersonInfo.sex"}],attrs:{type:"radio",id:"w",name:"sex",value:"2"},domProps:{checked:e._q(e.memberPersonInfo.sex,"2")},on:{blur:this.$util.restore,change:function(o){e.$set(e.memberPersonInfo,"sex","2")}}}),n("label",{attrs:{for:"w"}},[e._v("女士")])])])]),n("ul",{staticClass:"list_common flex"},[n("li",[n("em",{staticStyle:{width:"84%","line-height":".64rem"}},[e._v("修改密码")]),n("mt-switch",{staticStyle:{right:"-.2rem"},model:{value:e.showEditPw,callback:function(o){e.showEditPw=o},expression:"showEditPw"}})],1)]),n("transition",[e.showEditPw?n("ul",{staticClass:"list_common flex"},[n("li",[n("em",[e._v("旧密码")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.oldpw,expression:"memberPersonInfo.oldpw"}],attrs:{type:"password",placeholder:"请输入旧密码"},domProps:{value:e.memberPersonInfo.oldpw},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"oldpw",o.target.value)}}})])]),n("li",[n("em",[e._v("新密码")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.newpw,expression:"memberPersonInfo.newpw"}],attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:e.memberPersonInfo.newpw},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"newpw",o.target.value)}}})])]),n("li",[n("em",[e._v("新密码确认")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPersonInfo.newpw2,expression:"memberPersonInfo.newpw2"}],attrs:{type:"password",placeholder:"请再次输入新密码"},domProps:{value:e.memberPersonInfo.newpw2},on:{blur:this.$util.restore,input:function(o){o.target.composing||e.$set(e.memberPersonInfo,"newpw2",o.target.value)}}})])])]):e._e()])],1),n("div",{staticClass:"bigBtn",on:{click:e.commitmember}},[e._v("保存提交")])])},s=[],r=(n("cadf"),n("551c"),n("097d"),n("3a78")),m=n("76a0"),i={name:"UserinfoEdit",data:function(){return{showEditPw:!1,sheetVisible:!1,memberPersonInfo:{},oldloginname:"",oldmobile:""}},created:function(){this.memberPersonData()},methods:{commitmember:function(){var e=this;if(this.showEditPw){if(!this.memberPersonInfo.oldpw)return void Object(m["Toast"])({message:"请输入旧密码",duration:2e3});if(!this.memberPersonInfo.newpw)return void Object(m["Toast"])({message:"请输入新密码",duration:2e3});if(!this.memberPersonInfo.newpw2)return void Object(m["Toast"])({message:"请输入新密码确认",duration:2e3});if(this.memberPersonInfo.newpw!=this.memberPersonInfo.newpw2)return void Object(m["Toast"])({message:"请确认新密码二次输入相同",duration:2e3})}this.memberPersonInfo.userName=this.memberPersonInfo.user_name,this.memberPersonInfo.loginName=this.memberPersonInfo.login_name,this.memberPersonInfo.login_name&&this.oldloginname!=this.memberPersonInfo.login_name&&this.oldmobile!=this.memberPersonInfo.login_name?m["MessageBox"].confirm("登录名只能修改一次,确定修改?").then(function(o){e.commitmember2()}).catch(function(){}):this.commitmember2()},commitmember2:function(){var e=this;r["a"].saveMemberPersonInfo(this.memberPersonInfo,function(o){-1==o?Object(m["Toast"])({message:"密码验证错误，修改失败",duration:2e3}):-2==o?Object(m["Toast"])({message:"登录名已存在，请修改后重试",duration:2e3}):1==o?(Object(m["Toast"])({message:"修改用户详情信息成功",duration:2e3}),e.memberPersonData()):Object(m["Toast"])({message:"修改用户详情信息失败，请重试！",duration:2e3})},function(e){Object(m["Toast"])({message:"修改用户详情信息异常",duration:2e3}),console.error("修改用户详情信息异常:",JSON.stringify(e))})},memberPersonData:function(){var e=this;r["a"].memberPersonInfo(function(o){e.memberPersonInfo=o,e.oldloginname=o.login_name,e.oldmobile=o.mobile},function(e){console.log("my---errorDatassss==="+JSON.stringify(e))})}}},a=i,l=(n("7524"),n("2877")),u=Object(l["a"])(a,t,s,!1,null,"c500963c",null);u.options.__file="UserinfoEdit.vue";o["default"]=u.exports}}]);