"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[42525],{12554:function(e,n,t){t.d(n,{j:function(){return f}});var a=t(74165),i=t(15861),r=t(1413),o=t(29439),s=t(84959),l=t(95048),c=t(16871),u=t(53013),d=t(48673),_=t(72791),f=function(){var e=(0,_.useState)({email:"",username:""}),n=(0,o.Z)(e,2),t=n[0],f=n[1],m=(0,_.useState)({username:"",email:""}),v=(0,o.Z)(m,2),h=v[0],p=v[1],g=(0,s.Wr)(),x=(0,o.Z)(g,1)[0],b=(0,s.ml)(),j=(0,o.Z)(b,1)[0],Z=(0,s.IM)(),y=(0,o.Z)(Z,1)[0],S=(0,s.YS)(),N=(0,o.Z)(S,1)[0],k=(0,l.I0)(),P=(0,c.s0)(),w=(0,s.s_)({username:t.username,skip:!t.username}),I=w.exitsingUsernameVerify,C=w.exitsingUsernameVerifyRefetch,F=(0,s.qo)({email:t.email,skip:!t.email}),R=F.exitsingEmailVerify,T=F.exitsingEmailVerifyRefetch;(0,_.useEffect)((function(){t.email&&T(),t.username&&C()}),[t.email,t.username]),(0,_.useEffect)((function(){I&&p((function(e){var n;return(0,r.Z)((0,r.Z)({},e),{},{username:null!==I&&void 0!==I&&null!==(n=I.username)&&void 0!==n&&n._id?"invalid":"valid"})})),R&&p((function(e){var n;return(0,r.Z)((0,r.Z)({},e),{},{email:null!==R&&void 0!==R&&null!==(n=R.valid_flag)&&void 0!==n&&n.emailId?"invalid":"valid"})}))}),[I,R]);var U=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({userPhoneNumber:n.insPhoneNumber,status:n.status});case 3:if(t=e.sent,!(i=t.data).message){e.next=7;break}return e.abrupt("return",{phoneNumber:null===i||void 0===i?void 0:i.userPhoneNumber});case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({userOtpCode:n.otpCode,userPhoneNumber:n.phoneNumber});case 3:if(t=e.sent,"Invalid OTP"!==(i=t.data).message){e.next=9;break}return e.abrupt("return",{msg:"Invalid OTP",run:!0});case 9:if(null===i||void 0===i||!i.userStatus){e.next=13;break}return e.abrupt("return",{mobileStatus:null===i||void 0===i?void 0:i.userStatus,data:i});case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,r,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in e.prev=0,t=new FormData,n)t.append(i,n[i]);return e.next=5,y({userPhoneNumber:n.id,profileCreation:t});case 5:if(r=e.sent,"Username already exists"!==(o=r.data).message){e.next=9;break}return e.abrupt("return",{msg:"Username already exists",notify:!0});case 9:if(!o.user){e.next=11;break}return e.abrupt("return",{_id:null===(s=o.user)||void 0===s?void 0:s._id});case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),q=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N({id:n.id,password:{userPassword:n.insPassword,userRePassword:n.insRePassword}});case 3:t=e.sent,(i=t.data).login&&(k(u.R.loginQuery({login:!0,token:i.token,id:null===(r=i.user)||void 0===r?void 0:r._id,status:!0,loggedinAs:"user",username:i.user.username})),k(d.S.addInstituteId({id:i.user?null===(o=i.user)||void 0===o?void 0:o._id:"",loggedinAs:"user"})),P("/q/".concat(i.user.username,"/feed"))),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out or wrong request..."});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f((function(){return{email:"",username:n}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),V=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f((function(){return{email:n,username:""}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{mobileRegister:U,numberVerification:M,registerAccount:H,createPassword:q,verifyUsername:D,verifyEmail:V,validInput:h}}},42525:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var a={navbar:"InsProfileSetting_navbar__20UJI"},i=t(72791),r=t(20772),o=t(29439),s="MainBody_mainbody__rRT9r",l="MainBody_sidebar__JxQXG",c="MainBody_stats__bHTN-",u="Sidebar_sidebar__bzAYS",d="Sidebar_heading__FKVbZ",_="Sidebar_list__siFEj",f="Sidebar_options__0Co8i",m="Sidebar_imgDark__kNbTf",v="Sidebar_img__qRg4M",h="Sidebar_borderLeft__LOQVA",p=t(39230),g=t(35395),x=t(80184),b=i.lazy((function(){return t.e(83098).then(t.bind(t,83098))}));var j=function(e){var n=e.clickItem,t=e.changeItem,a=(0,i.useState)(!1),r=(0,o.Z)(a,2),s=r[0],l=r[1],c=(0,p.$G)().t;return(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("div",{className:d,children:"Settings"}),(0,x.jsxs)("div",{className:_,children:[(0,x.jsxs)("div",{className:1===n?"".concat(f," ").concat(h):f,onClick:function(){return t(1)},children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/account.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/account-dark.svg"}),(0,x.jsx)("p",{children:c("acount")})]}),(0,x.jsxs)("div",{className:2===n?"".concat(f," ").concat(h):f,onClick:function(){return t(2)},children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/bell.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/bell-dark.svg"}),(0,x.jsx)("p",{children:c("notification")})]}),(0,x.jsxs)("div",{className:3===n?"".concat(f," ").concat(h):f,onClick:function(){return t(3)},children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/wallet.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/wallet-dark.svg"}),(0,x.jsx)("p",{children:c("payment_gateway")})]}),(0,x.jsxs)("div",{className:7===n?"".concat(f," ").concat(h):f,onClick:function(){return t(7)},children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/lock.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/lock-dark.svg"}),(0,x.jsx)("p",{children:c("privacy")})]}),(0,x.jsx)("a",{href:"https://dashboard.qviple.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsxs)("div",{className:8===n?"".concat(f," ").concat(h):f,children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/information.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/information-dark.svg"}),(0,x.jsx)("p",{children:c("about_quviple")})]})}),(0,x.jsxs)("div",{className:9===n?"".concat(f," ").concat(h):f,onClick:function(){l(!0),t(7)},children:[(0,x.jsx)("img",{className:v,alt:"not found",src:"/images/logout.svg"}),(0,x.jsx)("img",{className:m,alt:"not found",src:"/images/logout-dark.svg"}),(0,x.jsx)("p",{children:c("logout")})]})]}),(0,x.jsx)(g.Z,{children:s&&(0,x.jsx)(b,{changeLogout:function(){l(!1)},logout:s})})]})},Z=t(69721),y="Header_header__cbTIH",S="Header_imgContainer__rHdcX",N="Header_textContainer__QmV7v",k=t(43504),P=t(39480),w=t(95048);var I=function(){var e,n,t,a,r,o=(0,w.v9)((function(e){return e.idChange.id})),s=(0,P.gq)({id:o,skip:!o}),l=s.oneInstituteDashboard,c=s.oneInstituteDashboardRefetch;return(0,i.useEffect)((function(){o&&c()}),[o,c]),(0,x.jsx)(k.rU,{to:"/q/".concat(null===l||void 0===l||null===(e=l.institute)||void 0===e?void 0:e.name,"/profile"),children:(0,x.jsxs)("div",{className:y,children:[(0,x.jsx)("div",{className:S,children:(0,x.jsx)("img",{src:"1"!==(null===l||void 0===l||null===(n=l.institute)||void 0===n?void 0:n.photoId)?"".concat(Z.yI,"/").concat(null===l||void 0===l||null===(t=l.institute)||void 0===t?void 0:t.insProfilePhoto):"/images/ins_default_profile.svg",alt:""})}),(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("h5",{children:null===l||void 0===l||null===(a=l.institute)||void 0===a?void 0:a.name}),(0,x.jsx)("p",{children:null===l||void 0===l||null===(r=l.institute)||void 0===r?void 0:r.insName})]})]})})},C={stats:"Stats_stats__WzyTO",body:"Stats_body__BwVN5"},F=t(1413),R="Recovery_recovery__wE+F5",T="Recovery_btn__ASeP1",U="Recovery_errorspan__ORzvS",M=t(51561),H=t(29899),q=t(763),D=t(12554),V=t(84959),E=t(98734);var z=function(e){e.switchh;var n,t,a,r,s=(0,p.$G)().t,l=(0,w.v9)((function(e){return e.authChange})),c=(0,i.useState)({recoveryMail:""}),u=(0,o.Z)(c,2),d=u[0],_=u[1],f=(0,i.useState)({insPhoneNumber:""}),m=(0,o.Z)(f,2),v=m[0],h=m[1],g=(0,i.useState)(""),b=(0,o.Z)(g,2),j=b[0],Z=b[1],y=(0,i.useState)(!1),S=(0,o.Z)(y,2),N=S[0],k=S[1],I=(0,i.useState)({msg:"",run:!1}),C=(0,o.Z)(I,2),z=C[0],L=C[1],A=(0,i.useState)(),Q=(0,o.Z)(A,2),G=Q[0],O=Q[1],X=(0,i.useState)(!1),K=(0,o.Z)(X,2),B=K[0],W=K[1],J=(0,H.N)(),Y=(0,o.Z)(J,1)[0],$=(0,H.$w)(),ee=(0,o.Z)($,1)[0],ne=(0,D.j)(),te=ne.validInput,ae=ne.verifyUsername,ie=(0,V.tX)(),re=(0,o.Z)(ie,1)[0],oe=(0,P.gq)({id:null===l||void 0===l?void 0:l.id,skip:!(null!==l&&void 0!==l&&l.id)}),se=oe.oneInstituteDashboard,le=oe.oneInstituteDashboardRefetch;(0,i.useEffect)((function(){null!==l&&void 0!==l&&l.id&&le()}),[null===l||void 0===l?void 0:l.id,le]),(0,i.useEffect)((function(){var e,n;null!==se&&void 0!==se&&null!==(e=se.institute)&&void 0!==e&&e.name&&Z(null===se||void 0===se||null===(n=se.institute)||void 0===n?void 0:n.name)}),[null===se||void 0===se||null===(n=se.institute)||void 0===n?void 0:n.name]);var ce=(0,i.useCallback)((0,q.debounce)((function(e){return ae(e)}),500),[]);return(0,x.jsxs)(x.Fragment,{children:[""!==G?(0,x.jsx)(M.qu,{run:B,setRun:W,msg:G}):"",(0,x.jsxs)("div",{className:R,children:[(0,x.jsxs)("h6",{children:[s("add_recovery_email")," (",null===se||void 0===se||null===(t=se.institute)||void 0===t?void 0:t.recoveryMail,")"]}),(0,x.jsx)("input",{type:"email",name:"recoveryMail",value:d.recoveryMail,onChange:function(e){return _((0,F.Z)((0,F.Z)({},d),{},{recoveryMail:e.target.value}))},placeholder:s("add_recovery_details")}),""!==d.recoveryMail?(0,x.jsx)("button",{className:"".concat(T),type:"button",onClick:function(){Y({id:null===l||void 0===l?void 0:l.id,mail:d}).then((function(e){e.data.status&&(le(),O(e.data.message),W(!0),_({recoveryMail:""}))}))},children:s("update")}):(0,x.jsx)("button",{type:"button",className:"".concat(T),disabled:!0,children:s("update")}),(0,x.jsxs)("div",{style:{width:"100%",marginTop:"4vw"},children:[(0,x.jsxs)("h6",{children:[s("add_recovery_phone_no")," (",null===se||void 0===se||null===(a=se.institute)||void 0===a?void 0:a.insPhoneNumber,")"]}),(0,x.jsx)("input",{type:"tel",name:"insPhoneNumber",value:v.insPhoneNumber,maxLength:"10",minLength:"10",onChange:function(e){return h((0,F.Z)((0,F.Z)({},v),{},{insPhoneNumber:e.target.value}))},placeholder:s("add_recovery_phone_no")}),""!==v.insPhoneNumber?(0,x.jsx)("button",{className:"".concat(T),type:"button",onClick:function(){ee({id:null===l||void 0===l?void 0:l.id,phone:v}).then((function(e){e.data.status&&(le(),O(e.data.message),W(!0),h({insPhoneNumber:""}))}))},children:s("update")}):(0,x.jsx)("button",{type:"button",className:"".concat(T),disabled:!0,children:s("update")})]}),(0,x.jsxs)("div",{style:{width:"100%",marginTop:"4vw"},children:[(0,x.jsxs)("h6",{children:[s("edit_username"),!(null!==(r=["valid",""])&&void 0!==r&&r.includes(null===te||void 0===te?void 0:te.username))&&(0,x.jsxs)("span",{className:U,children:[" "," ",s("username_is_already_exits")]})]}),(0,x.jsx)("input",{type:"text",name:"username",value:j,maxLength:"10",minLength:"10",onChange:function(e){return n=e.target.value,ce(n),void Z(n);var n},placeholder:s("type_username")}),""!==j?(0,x.jsx)("button",{className:"".concat(T),type:"button",onClick:function(){var e,n,t;j===(null===se||void 0===se||null===(e=se.institute)||void 0===e?void 0:e.name)||null!==(n=["valid",""])&&void 0!==n&&n.includes(null===te||void 0===te?void 0:te.username)&&(k((function(e){return!e})),re({o_name:null===se||void 0===se||null===(t=se.institute)||void 0===t?void 0:t.name,n_name:j}).then((function(e){e.data.flag?le():L({msg:e.data.message,run:!0}),k((function(e){return!e}))})).catch({}))},children:s("update")}):(0,x.jsx)("button",{type:"button",className:"".concat(T),disabled:!0,children:s("update")})]})]}),z.run&&(0,x.jsx)(M.Ch,{msg:z.msg,run:z.run,setRun:function(){return L({msg:"",run:!1})},postiton:"bottom",type:"error"}),N&&(0,x.jsx)(E.Z,{})]})},L=i.lazy((function(){return t.e(2901).then(t.bind(t,2901))}));var A=function(){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),t=n[0],a=n[1];return(0,x.jsxs)(x.Fragment,{children:[!t&&(0,x.jsx)(z,{switchh:function(){a(!0)}}),(0,x.jsx)(g.Z,{children:t&&(0,x.jsx)(L,{})})]})},Q=t(36033),G=t(4942),O=t(88575),X=t(98094),K=t(90865),B=function(){var e,n=(0,p.$G)().t,t=(0,w.v9)((function(e){return e.authChange})),a=(0,i.useState)(""),r=(0,o.Z)(a,2),s=r[0],l=r[1],c=(0,i.useState)(!1),u=(0,o.Z)(c,2),d=u[0],_=u[1],f=(0,i.useState)({razor:!1,paytm:!1}),m=(0,o.Z)(f,2),v=m[0],h=m[1],g=(0,H.CO)(),b=(0,o.Z)(g,1)[0],j=(0,P.p0)({data:{id:null===t||void 0===t?void 0:t.id,type:"ID"},skip:!(null!==t&&void 0!==t&&t.id)}),Z=j.oneInstituteProfile,y=j.oneInstituteProfileRefetch;(0,i.useEffect)((function(){null!==t&&void 0!==t&&t.id&&y()}),[null===t||void 0===t?void 0:t.id,y]),(0,i.useEffect)((function(){var e,n,t,a,i;null!==Z&&void 0!==Z&&null!==(e=Z.institute)&&void 0!==e&&e.merchant_options&&h({razor:null===Z||void 0===Z||null===(n=Z.institute)||void 0===n||null===(t=n.merchant_options)||void 0===t?void 0:t.razor_pay,paytm:null===Z||void 0===Z||null===(a=Z.institute)||void 0===a||null===(i=a.merchant_options)||void 0===i?void 0:i.paytm})}),[null===Z||void 0===Z||null===(e=Z.institute)||void 0===e?void 0:e.merchant_options]);var S=function(e,n){if(null!==t&&void 0!==t&&t.id){var a=(0,F.Z)({},v);for(var i in a)i===e&&(a[i]=n);b({id:null===t||void 0===t?void 0:t.id,formSetting:a}).then((function(){l("Add joining details updated"),_(!0)})).catch({}),h((function(t){return(0,F.Z)((0,F.Z)({},t),{},(0,G.Z)({},e,n))}))}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:O.Z.notification,style:{minHeight:"fit-content",padding:"1rem",height:"30rem"},children:[(0,x.jsx)("h5",{children:n("payment_setting")}),(0,x.jsx)(K.Z,{labelHeading:n("turn_on_paytm"),labelDescription:"",defaultLabel:!1,checkedToggle:v.paytm,onToggleHandler:function(e){return S("paytm",e.target.checked)}}),(0,x.jsx)(X.Z,{customStyle:{width:"100%"}}),(0,x.jsx)(K.Z,{labelHeading:n("turn_on_razor"),labelDescription:"",defaultLabel:!1,checkedToggle:v.razor,onToggleHandler:function(e){return S("razor",e.target.checked)}})]}),(0,x.jsx)(M.Ch,{run:d,setRun:_,msg:s,postiton:"bottom",type:"success"})]})},W=i.lazy((function(){return t.e(20230).then(t.bind(t,20230))})),J=i.lazy((function(){return t.e(80002).then(t.bind(t,80002))}));var Y=function(e){var n=e.clickItem;return(0,x.jsxs)(x.Fragment,{children:[1===n&&(0,x.jsx)(A,{}),(0,x.jsx)(g.Z,{children:2===n&&(0,x.jsx)(W,{})}),(0,x.jsx)(g.Z,{children:3===n&&(0,x.jsx)(B,{})}),6===n&&(0,x.jsx)(Q.Z,{}),(0,x.jsx)(g.Z,{children:7===n&&(0,x.jsx)(J,{})})]})};var $=function(e){var n=e.changeItem,t=e.clickItem;return(0,x.jsxs)("div",{className:C.stats,children:[(0,x.jsx)("div",{className:C.header,children:(0,x.jsx)(I,{})}),(0,x.jsx)("div",{className:C.body,children:(0,x.jsx)(Y,{changeItem:n,clickItem:t})})]})};var ee=function(){var e=(0,i.useState)(1),n=(0,o.Z)(e,2),t=n[0],a=n[1],r=function(e){a(e)};return(0,x.jsxs)("div",{className:s,children:[(0,x.jsx)("div",{className:l,children:(0,x.jsx)(j,{changeItem:r,clickItem:t})}),(0,x.jsx)("div",{className:c,children:(0,x.jsx)($,{changeItem:r,clickItem:t})})]})};var ne=function(){return(0,x.jsxs)("div",{className:a.insprofilesetting,children:[(0,x.jsx)("div",{className:a.navbar,children:(0,x.jsx)(r.default,{status:"profile"})}),(0,x.jsx)(ee,{})]})}},98094:function(e,n,t){var a=t(1413),i=(t(72791),t(55136)),r=t(80184);n.Z=function(e){var n=e.customStyle;return(0,r.jsx)("hr",{className:i.Z.universal_hr,style:(0,a.Z)({},n)})}},36033:function(e,n,t){t.d(n,{Z:function(){return r}});t(72791);var a="ComingSoon_comingSoon__rNF-A",i=t(80184);var r=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("img",{src:"/images/comingsoon.gif",alt:""})})}},90865:function(e,n,t){var a=t(1413),i=(t(72791),t(89891)),r=t(39320),o=t(80184),s={inputProps:{"aria-label":"Switch demo"}};n.Z=function(e){var n=e.customContainer,t=e.customLabel,l=e.labelDescription,c=e.labelHeading,u=e.defaultLabel,d=e.checkedToggle,_=e.onToggleHandler,f=e.children;return(0,o.jsxs)("div",{className:r.Z.form_toggle_container,style:(0,a.Z)({},n),children:[(0,o.jsxs)("div",{className:r.Z.form_toggle_label,children:[u?(0,o.jsx)(i.Z,(0,a.Z)((0,a.Z)({},s),{},{defaultChecked:!0,disabled:!0})):(0,o.jsx)(i.Z,(0,a.Z)((0,a.Z)({},s),{},{checked:d,onChange:_})),(0,o.jsx)("span",{style:(0,a.Z)({},t),children:c})]}),l&&(0,o.jsx)("div",{className:r.Z.form_toggle_description,children:l}),f]})}},88575:function(e,n){n.Z={notification:"Notification_notification__Qpl1F",divider:"Notification_divider__DKVad",row:"Notification_row__RcmDA"}},55136:function(e,n){n.Z={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7"}},39320:function(e,n){n.Z={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=42525.c16bd905.chunk.js.map