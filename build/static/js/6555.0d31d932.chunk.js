"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6555],{46555:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(4942),o=t(1413),s=t(29439),a=t(72791),i=t(74165),u=t(15861),c={container:"component_container__JN-dE",backText:"component_backText__KqHgU",loginLogo:"component_loginLogo__2lcUq",loginLogoProfileImg:"component_loginLogoProfileImg__kVD1M",userLogo:"component_userLogo__c0Jdp",userLogoContainer:"component_userLogoContainer__CTiPW",cloose:"component_cloose__as+dn",upload:"component_upload__QiOMb",logocomp:"component_logocomp__rUr4F",footerr:"component_footerr__j1IlJ",right:"component_right__tjVgE",mid:"component_mid__-LJSJ",one:"component_one__UGMcq",two:"component_two__+xDLJ",three:"component_three__ok6uK",step1:"component_step1__P+pR6",step2:"component_step2__CZdU7",step3:"component_step3__vF2pe",footer:"component_footer__Y8Kr4",signupbtn:"component_signupbtn__jLPh2",steps:"component_steps__a-Al0",form:"component_form__vLXJX",forgotPass:"component_forgotPass__N4p8A",choosetypeh:"component_choosetypeh__9hJ+H",choosetypep:"component_choosetypep__ePUi6",userNamecontainer:"component_userNamecontainer__e8Bjy",submitbtn:"component_submitbtn__MEpVK",otpcontainer:"component_otpcontainer__qu2qC",btn:"component_btn__6NdGK",username:"component_username__aOT+Y",eye:"component_eye__vaoS8",eyeOpen:"component_eyeOpen__4dS8G",toc:"component_toc__5eNqC",tocspan:"component_tocspan__sa268",didnot:"component_didnot__FcL0F",resend:"component_resend__+zJV7",userNamecontainer2:"component_userNamecontainer2__tMf0b",regIcon:"component_regIcon__4Fk2-",selector:"component_selector__x3-ZA",selectIcon:"component_selectIcon__PdtgS",list:"component_list__0+uf4",divider:"component_divider__pKBK+",options:"component_options__zjzlS",listDisplay:"component_listDisplay__B8jjm",triangle:"component_triangle__F4Xqv",triangleDisplay:"component_triangleDisplay__4EP-A",errorspan:"component_errorspan__VceLq",containerMargin:"component_containerMargin__nVA-U",submitDisable:"component_submitDisable__MPDOb",formselect:"component_formselect__tcoGy",up:"component_up__GVKdW",option:"component_option__AuuQd",backtologin:"component_backtologin__RuSSn"},l=t(51561),m=t(82680),p=t(66508),d=t(5574),_=t(24060),g=t(57387),f=t(12554),v=t(39230),h=t(83669),b=t(80184),x={position:"relative"},Z={position:"absolute",left:"0",top:"3.2vw",zIndex:10},j={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10};function N(e){var n=e.open,t=e.onClose,r=e.setFormData,s=e.formData,a=(0,v.$G)().t;return n?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{onClick:t,style:j}),(0,b.jsxs)("div",{style:Z,className:c.options,children:[(0,b.jsx)("div",{className:c.option,onClick:function(){r((0,o.Z)((0,o.Z)({},s),{},{gender:"male"})),t()},children:a("male")}),(0,b.jsx)("div",{className:c.option,onClick:function(){r((0,o.Z)((0,o.Z)({},s),{},{gender:"female"})),t()},children:a("female")}),(0,b.jsx)("div",{className:c.option,onClick:function(){r((0,o.Z)((0,o.Z)({},s),{},{gender:"other"})),t()},children:a("other")})]})]}):null}var y=function(e){var n=e.userData,t=e.setUserId,r=e.setActiveTab,Z=(0,v.$G)().t,j=(0,a.useState)({userName:"",name:"",dob:"",gender:"",phoneNumber:""}),y=(0,s.Z)(j,2),k=y[0],S=y[1],w=(0,a.useState)(""),C=(0,s.Z)(w,2),L=C[0],P=C[1],I=(0,a.useState)({}),R=(0,s.Z)(I,2),E=R[0],T=R[1],U=(0,a.useState)(!1),A=(0,s.Z)(U,2),q=A[0],D=A[1],O=(0,a.useState)(!1),M=(0,s.Z)(O,2),V=M[0],F=M[1],G=(0,a.useState)(!1),B=(0,s.Z)(G,2),J=B[0],K=B[1],z=(0,a.useState)(""),W=(0,s.Z)(z,2),Q=(W[0],W[1]),X=(0,a.useState)(""),Y=(0,s.Z)(X,2),H=Y[0],$=Y[1],ee=(0,a.useState)(!1),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],oe=(0,a.useState)({msg:"",run:!1}),se=(0,s.Z)(oe,2),ae=se[0],ie=se[1],ue=(0,f.j)().registerAccount,ce=function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re((function(e){return!e})),!(0,m.Z)(null===k||void 0===k?void 0:k.name)){e.next=6;break}ie({msg:"Special Character not allowed...",run:!0}),e.next=10;break;case 6:return e.next=8,ue({id:n.phoneNumber,file:L,userLegalName:k.name,username:k.userName,userGender:k.gender,userDateOfBirth:k.dob});case 8:null!==(o=e.sent)&&void 0!==o&&o.msg?(ie({msg:null===o||void 0===o?void 0:o.msg,run:!0}),re((function(e){return!e}))):(t(null===o||void 0===o?void 0:o._id),r("CREATE_PASSWORD"),re((function(e){return!e})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){0===Object.keys(E).length&&q&&ce()}),[E]),console.info(E),(0,b.jsxs)(b.Fragment,{children:[ae.run&&(0,b.jsx)(l.Ch,{msg:ae.msg,run:ae.run,setRun:function(){return ie({msg:"",run:!1})},postiton:"bottom",type:"error"}),(0,b.jsxs)("div",{className:" ".concat(c.container),children:[(0,b.jsxs)("div",{className:c.loginLogo,children:[(0,b.jsx)("a",{href:"/",children:(0,b.jsx)("img",{src:"/images/career/newLogo.svg",alt:"not found"})}),(0,b.jsx)(_.Z,{status:"login"})]}),(0,b.jsxs)("div",{className:c.loginLogoProfileImg,style:{marginTop:"15px"},children:[""!==L&&(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"img",style:{cursor:"pointer"},children:(0,b.jsx)("img",{className:c.userLogo,src:"/images/userLogo-image.svg",alt:""})}),(0,b.jsx)("input",{className:c.upload,id:"img",name:"file",multiple:!0,onChange:function(e){var n=URL.createObjectURL(e.target.files[0]);P(e.target.files[0]),Q(n),$(n),K(!0)},type:"file",accept:"image/gif, image/jpeg, image/png"})]}),""!==L&&(0,b.jsxs)("div",{className:c.userLogoContainer,children:[(0,b.jsx)("img",{className:c.userLogo,src:URL.createObjectURL(L),alt:"Avatar"}),(0,b.jsx)("img",{onClick:function(){P("")},className:c.cloose,src:"/images/user_signup/close.svg",alt:"Avatar"})]})]}),(0,b.jsx)("div",{className:c.form,children:(0,b.jsxs)("form",{encType:"multipart/form-data",noValidate:!0,onSubmit:function(e){e.preventDefault(),T(function(e){var n=(0,m.Z)(e&&(null===e||void 0===e?void 0:e.userName)),t={};return e.name||(t.name="Name is required!"),e.userName?n&&(t.username="Special Character not allowed"):t.username="User name is required!",L||ie({msg:"Please Select Image",run:!0}),t}(k)),D(!0)},children:[(0,b.jsx)("h3",{children:Z("Create_profile")}),(0,b.jsx)("p",{className:c.enterdetails,children:Z("enter_details")}),(0,b.jsxs)("div",{className:c.userNamecontainer,children:[(0,b.jsx)("img",{className:c.regIcon,src:"/images/user_signup/name.svg",alt:"not found"}),(0,b.jsx)("input",{type:"text",required:!0,name:"name",placeholder:Z("name"),value:k.name,onChange:function(e){return S((0,o.Z)((0,o.Z)({},k),{},{name:e.target.value}))}}),(0,b.jsx)("span",{className:c.errorspan,children:null===E||void 0===E?void 0:E.name})]}),(0,b.jsxs)("div",{className:c.userNamecontainer,children:[(0,b.jsx)("img",{className:c.regIcon,src:"/images/user_signup/username.svg",alt:"not found"}),(0,b.jsx)("input",{required:!0,type:"text",name:"userName",placeholder:Z("username"),value:k.userName,onChange:function(e){return S((0,o.Z)((0,o.Z)({},k),{},{userName:e.target.value}))}}),(0,b.jsx)("span",{className:c.errorspan,children:null===E||void 0===E?void 0:E.username})]}),(0,b.jsxs)("div",{className:c.userNamecontainer,children:[(0,b.jsx)("img",{className:c.regIcon,src:"/images/user_signup/dob.svg",alt:"not found"}),(0,b.jsx)("input",{required:!0,type:"date",name:"dob",placeholder:Z("dob"),value:k.dob,onChange:function(e){return S((0,o.Z)((0,o.Z)({},k),{},{dob:e.target.value}))}})]}),(0,b.jsxs)("div",{className:"".concat(c.userNamecontainer," ").concat(c.containerMargin),style:x,children:[(0,b.jsx)("img",{className:c.regIcon,src:"/images/user_signup/gender.svg",alt:"not found"}),(0,b.jsxs)("div",{className:c.formselect,onClick:function(){return F(!V)},children:["male"===k.gender?(0,b.jsx)("h6",{onClick:function(){return F(!0)},children:Z("male")}):"female"===k.gender?(0,b.jsx)("h6",{onClick:function(){return F(!0)},children:Z("female")}):"other"===k.gender?(0,b.jsx)("h6",{onClick:function(){return F(!0)},children:Z("other")}):(0,b.jsx)("h6",{onClick:function(){return F(!0)},children:Z("gender")}),V?(0,b.jsx)("img",{className:c.up,src:"/images/up-triangle-icon.svg",alt:""}):(0,b.jsx)("img",{className:c.down,src:"/images/downn-icon.svg",alt:""})]}),(0,b.jsx)(N,{open:V,onClose:function(){return F(!1)},setFormData:S,formData:k})]}),""!==k.userName&&""!==k.name&&""!==k.dob&&""!==k.gender&&""!==L?(0,b.jsx)(h.Z,{buttonText:Z("submit"),type:"submit",disabled:te,shwoLoader:!0,customStyleButton:{marginTop:"2vw"}}):(0,b.jsx)(g.Z,{buttonText:Z("submit"),disabled:!0,shwoLoader:!1,customStyleButton:{marginTop:"2vw",background:"#dfdbdb",color:"rgba(18, 18, 18, 0.6)"}})]})})]}),J&&(0,b.jsx)(d.Z,{open:J,children:(0,b.jsx)(p.Z,{setPhotoURL:$,photoURL:H,setFile:P,setOpenCrop:K,setProfilePhoto:Q,first:1,second:1})})]})},k=t(34275),S=t(20754),w=t(48746);var C=function(){var e=(0,a.useState)(""),n=(0,s.Z)(e,2),t=n[0],i=n[1],u=(0,a.useState)("MOBILE"),c=(0,s.Z)(u,2),l=c[0],m=c[1],p=(0,a.useState)({phoneNumber:"",mobileStatus:""}),d=(0,s.Z)(p,2),_=d[0],g=d[1],v=(0,f.j)(),h=v.mobileRegister,x=v.numberVerification,Z=v.createPassword,j=function(e){g((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,r.Z)({},e.type,e.value))}))};return(0,b.jsxs)(b.Fragment,{children:["MOBILE"===l&&(0,b.jsx)(k.Z,{onMobileNumberAdd:h,setActiveTab:m,setPhoneNumber:j}),"VERIFIED_MOBILE"===l&&(0,b.jsx)(w.Z,{phoneNumber:_.phoneNumber,onMobileVerified:x,setActiveTab:m,onMobileNumberAdd:h,onMobileStatus:j,activeType:"USER_REGISTER"}),"USER_REGISTER"===l&&(0,b.jsx)(y,{userData:_,setActiveTab:m,setUserId:i}),"CREATE_PASSWORD"===l&&(0,b.jsx)(S.Z,{id:t,createPassword:Z})]})}},12554:function(e,n,t){t.d(n,{j:function(){return d}});var r=t(74165),o=t(15861),s=t(1413),a=t(29439),i=t(84959),u=t(95048),c=t(16871),l=t(53013),m=t(48673),p=t(72791),d=function(){var e=(0,p.useState)({email:"",username:""}),n=(0,a.Z)(e,2),t=n[0],d=n[1],_=(0,p.useState)({username:"",email:""}),g=(0,a.Z)(_,2),f=g[0],v=g[1],h=(0,i.Wr)(),b=(0,a.Z)(h,1)[0],x=(0,i.ml)(),Z=(0,a.Z)(x,1)[0],j=(0,i.IM)(),N=(0,a.Z)(j,1)[0],y=(0,i.YS)(),k=(0,a.Z)(y,1)[0],S=(0,u.I0)(),w=(0,c.s0)(),C=(0,i.s_)({username:t.username,skip:!t.username}),L=C.exitsingUsernameVerify,P=C.exitsingUsernameVerifyRefetch,I=(0,i.qo)({email:t.email,skip:!t.email}),R=I.exitsingEmailVerify,E=I.exitsingEmailVerifyRefetch;(0,p.useEffect)((function(){t.email&&E(),t.username&&P()}),[t.email,t.username]),(0,p.useEffect)((function(){L&&v((function(e){var n;return(0,s.Z)((0,s.Z)({},e),{},{username:null!==L&&void 0!==L&&null!==(n=L.username)&&void 0!==n&&n._id?"invalid":"valid"})})),R&&v((function(e){var n;return(0,s.Z)((0,s.Z)({},e),{},{email:null!==R&&void 0!==R&&null!==(n=R.valid_flag)&&void 0!==n&&n.emailId?"invalid":"valid"})}))}),[L,R]);var T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({userPhoneNumber:n.insPhoneNumber,status:n.status});case 3:if(t=e.sent,!(o=t.data).message){e.next=7;break}return e.abrupt("return",{phoneNumber:null===o||void 0===o?void 0:o.userPhoneNumber});case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z({userOtpCode:n.otpCode,userPhoneNumber:n.phoneNumber});case 3:if(t=e.sent,"Invalid OTP"!==(o=t.data).message){e.next=9;break}return e.abrupt("return",{msg:"Invalid OTP",run:!0});case 9:if(null===o||void 0===o||!o.userStatus){e.next=13;break}return e.abrupt("return",{mobileStatus:null===o||void 0===o?void 0:o.userStatus,data:o});case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in e.prev=0,t=new FormData,n)t.append(o,n[o]);return e.next=5,N({userPhoneNumber:n.id,profileCreation:t});case 5:if(s=e.sent,"Username already exists"!==(a=s.data).message){e.next=9;break}return e.abrupt("return",{msg:"Username already exists",notify:!0});case 9:if(!a.user){e.next=11;break}return e.abrupt("return",{_id:null===(i=a.user)||void 0===i?void 0:i._id});case 11:e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out of request..."});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),q=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k({id:n.id,password:{userPassword:n.insPassword,userRePassword:n.insRePassword}});case 3:t=e.sent,(o=t.data).login&&(S(l.R.loginQuery({login:!0,token:o.token,id:null===(s=o.user)||void 0===s?void 0:s._id,status:!0,loggedinAs:"user",username:o.user.username})),S(m.S.addInstituteId({id:o.user?null===(a=o.user)||void 0===a?void 0:a._id:"",loggedinAs:"user"})),w("/q/".concat(o.user.username,"/feed"))),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{msg:"Time out or wrong request..."});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d((function(){return{email:"",username:n}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d((function(){return{email:n,username:""}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{mobileRegister:T,numberVerification:U,registerAccount:A,createPassword:q,verifyUsername:D,verifyEmail:O,validInput:f}}}}]);
//# sourceMappingURL=6555.0d31d932.chunk.js.map