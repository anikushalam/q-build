"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2532],{32954:function(e,n,t){var o=t(74165),r=t(15861),s=t(29439),a=t(72791),i=t(39230),c=t(1686),_=t(80184);n.Z=function(e){var n=e.setNotificationState,t=e.onMobileNumberAdd,d=e.phoneNumber,u=(0,i.$G)().t,l=(0,a.useState)(""),m=(0,s.Z)(l,2),p=m[0],g=m[1],h=(0,a.useRef)(null),f=function(e){var n=function(e){var n=Date.parse(e)-Date.parse(new Date);return{total:n,seconds:Math.floor(n/1e3%60)}}(e),t=n.total,o=n.seconds;t>=0&&g(o)},b=function(e){g("40"),h.current&&clearInterval(h.current);var n=setInterval((function(){f(e)}),1e3);h.current=n},x=function(){var e=new Date;return e.setSeconds(e.getSeconds()+40),e};(0,a.useEffect)((function(){b(x())}),[]);var v=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=6;break}return e.next=3,t({insPhoneNumber:d,status:"Not Verified"});case 3:e.sent.phoneNumber&&n({msg:"".concat(u("code_will_re_sent_to")," xxx-xxx-").concat(d.substr(6,11)),run:!0}),b(x());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("span",{className:c.Z.resend,onClick:v,children:[" ",u("resend")," "]}),(0,_.jsx)("span",{className:c.Z.resend,children:p})]})}},19760:function(e,n,t){t.d(n,{Z:function(){return c}});t(72791);var o="SigninHeader_signinHeader__4bifG",r="SigninHeader_inner__CPezk",s="SigninHeader_signinHeaderr__NrjW-",a=t(68825),i=t(80184);var c=function(e){var n=e.status,t=[{code:"en",name:"English"},{code:"hn",name:"\u0939\u093f\u0902\u0926\u0940"},{code:"mt",name:"\u092e\u0930\u093e\u0920\u0940"}];return(0,i.jsx)(i.Fragment,{children:"login"===n?(0,i.jsx)("div",{className:s,children:(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[0].code)},children:t[0].name}),(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[1].code)},children:t[1].name}),(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[2].code)},children:t[2].name})]})}):(0,i.jsxs)("div",{className:o,children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[0].code)},children:t[0].name}),(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[1].code)},children:t[1].name}),(0,i.jsx)("p",{onClick:function(){a.ZP.changeLanguage(t[2].code)},children:t[2].name})]})]})})}},20754:function(e,n,t){var o=t(1413),r=t(74165),s=t(15861),a=t(29439),i=t(72791),c=t(93570),_=t(39230),d=t(36721),u=(t(19760),t(57387)),l=t(80184);n.Z=function(e){var n=e.id,t=e.createPassword,m=(0,_.$G)().t,p=(0,i.useState)(!1),g=(0,a.Z)(p,2),h=(g[0],g[1]),f=(0,i.useState)(!1),b=(0,a.Z)(f,2),x=b[0],v=b[1],Z=(0,i.useState)(!1),I=(0,a.Z)(Z,2),j=I[0],C=I[1],H=(0,i.useState)(!1),y=(0,a.Z)(H,2),N=y[0],k=y[1],w=(0,i.useState)({insPassword:"",insRePassword:""}),P=(0,a.Z)(w,2),S=P[0],L=P[1],D=(0,i.useState)({msg:"",run:!1}),R=(0,a.Z)(D,2),B=R[0],T=R[1],F=(0,i.useState)(!1),A=(0,a.Z)(F,2),q=A[0],O=A[1],z=(0,i.useState)({capsLetterCheck:!1,numberCheck:!1,pwdLengthCheck:!1,specialCharCheck:!1}),E=(0,a.Z)(z,2),G=(E[0],E[1]),K=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O((function(e){return!e})),!(S.insPassword&&S.insRePassword&&n)){e.next=13;break}if(S.insPassword!==S.insRePassword){e.next=9;break}return e.next=5,t({id:n,insPassword:S.insPassword,insRePassword:S.insRePassword});case 5:null!==(o=e.sent)&&void 0!==o&&o.msg&&(T({msg:null===o||void 0===o?void 0:o.msg,run:!0}),O((function(e){return!e}))),e.next=11;break;case 9:T({msg:m("please_match"),run:!0}),O((function(e){return!e}));case 11:e.next=15;break;case 13:T({msg:m("please_enter"),run:!0}),O((function(e){return!e}));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[B.run&&(0,l.jsx)(d.Ch,{msg:B.msg,run:B.run,setRun:function(){return T({msg:"",run:!1})},postiton:"bottom",type:"error"}),(0,l.jsx)("div",{className:c.Z.modalContainerr,children:(0,l.jsxs)("div",{className:"".concat(c.Z.form," ").concat(c.Z.forggotPassForm),children:[(0,l.jsx)("h3",{children:m("set-new-password-label")}),(0,l.jsx)("p",{children:m("set_pass_detail")}),(0,l.jsxs)("div",{className:c.Z.otpcontainer,style:{flexDirection:"column",marginBottom:"7vw"},children:[(0,l.jsxs)("div",{style:{marginTop:"12px"},className:c.Z.userNamecontainer,children:[(0,l.jsx)("input",{type:j?"text":"password",name:"insPassword",maxLength:"16",minLength:"8",placeholder:m("set_new_pass_filed1"),className:"form-control",value:S.insPassword,onChange:function(e){return L((0,o.Z)((0,o.Z)({},S),{},{insPassword:e.target.value}))},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},onKeyUp:function(e){var n=e.target.value,t=/[A-Z]/.test(n),o=/[0-9]/.test(n),r=n.length>=8,s=/[!@#$%^&*]/.test(n);G({capsLetterCheck:t,numberCheck:o,pwdLengthCheck:r,specialCharCheck:s})}}),(0,l.jsx)("img",{alt:"not found",className:c.Z.username,src:"/images/password-icon.svg"}),!j&&(0,l.jsx)("img",{alt:"not found",className:c.Z.eye,src:"/images/eye-icon.svg",onClick:function(){return C(!j)}}),j&&(0,l.jsx)("img",{alt:"not found",className:c.Z.eyeOpen,src:"/images/eye-open.svg",onClick:function(){return C(!j)}})]}),(0,l.jsxs)("div",{style:{marginTop:"12px"},className:c.Z.userNamecontainer,children:[(0,l.jsx)("input",{type:N?"text":"password",name:"insRePassword",maxLength:"16",minLength:"8",className:"form-control",placeholder:m("confirm_pass"),value:S.insRePassword,onChange:function(e){L((0,o.Z)((0,o.Z)({},S),{},{insRePassword:e.target.value}))},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)}}),(0,l.jsx)("img",{alt:"not found",className:c.Z.username,src:"/images/password-icon.svg"}),!N&&(0,l.jsx)("img",{alt:"not found",className:c.Z.eye,src:"/images/eye-icon.svg",onClick:function(){return k(!N)}}),N&&(0,l.jsx)("img",{alt:"not found",className:c.Z.eyeOpen,src:"/images/eye-open.svg",onClick:function(){return k(!N)}}),x&&S.insRePassword!==S.insPassword&&(0,l.jsx)("div",{className:c.Z.ConfirmPass,children:(0,l.jsx)("p",{children:m("invalid_pass")})})]})]}),""!==S.insPassword&&""!==S.insRePassword?(0,l.jsx)(u.Z,{buttonText:m("submit"),disabled:q,shwoLoader:!0,onAction:K,customStyleButton:{minHeight:"2.3rem",backgroundColor:"#575caa"}}):(0,l.jsx)(u.Z,{buttonText:m("submit"),disabled:!0,shwoLoader:!1,onAction:K,customStyleButton:{minHeight:"2.3rem",backgroundColor:"#575caa"}})]})})]})}},34275:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(74165),r=t(15861),s=t(29439),a=t(72791),i=t(46550),c=t(39230),_=t(43504),d=(t(19760),t(83669)),u=t(36721),l=t(80184);var m=function(e){var n=e.onMobileNumberAdd,t=e.setActiveTab,m=e.setPhoneNumber,p=e.switchUser,g=(0,c.$G)().t,h=(0,a.useState)({msg:"",run:!1}),f=(0,s.Z)(h,2),b=f[0],x=f[1],v=(0,a.useRef)(""),Z=(0,a.useState)(!1),I=(0,s.Z)(Z,2),j=I[0],C=I[1],H=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(r){var s,a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),C((function(e){return!e})),null===(s=v.current)||void 0===s||!s.value){e.next=9;break}return e.next=5,n({insPhoneNumber:"".concat(null===(a=v.current)||void 0===a?void 0:a.value),status:"Not Verified"});case 5:null!==(i=e.sent)&&void 0!==i&&i.phoneNumber?(m({type:"phoneNumber",value:null===i||void 0===i?void 0:i.phoneNumber}),t("VERIFIED_MOBILE"),C((function(e){return!e}))):(x({msg:"Some thing went wrong",run:!0}),C((function(e){return!e}))),e.next=11;break;case 9:x({msg:"Please enter 10 digit mobile number",run:!0}),C((function(e){return!e}));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:i.Z.modalContainerr,children:[(0,l.jsx)("form",{onSubmit:H,children:(0,l.jsx)("div",{className:"".concat(i.Z.form," ").concat(i.Z.forggotPassForm),children:(0,l.jsxs)("div",{className:"".concat(i.Z.inputlabelcontainer),children:[(0,l.jsx)("h3",{children:g("signup")}),(0,l.jsxs)("div",{className:"".concat(i.Z.inputlabelcontainer),children:[(0,l.jsx)("p",{children:g("signup_details")}),(0,l.jsxs)("div",{className:i.Z.otpcontainer,children:[(0,l.jsxs)("div",{style:{marginTop:"12px"},className:i.Z.userNamecontainer,children:[(0,l.jsx)("input",{type:"tel",name:"insPhoneNumber",ref:v,placeholder:g("mobile_bumber"),required:!0}),(0,l.jsx)("img",{alt:"not found",className:i.Z.username,src:"/images/phone-input-icon.svg"})]}),(0,l.jsx)("div",{className:i.Z.forgotPass,children:(0,l.jsx)(_.rU,{to:"/login?external",style:{textDecoration:"none"},children:(0,l.jsx)("p",{onClick:function(){return p(!0)},children:g("back_to_login")})})})]}),(0,l.jsx)("div",{className:i.Z.toc,children:(0,l.jsxs)("p",{children:[g("by_continue"),(0,l.jsxs)("span",{className:i.Z.tocspan,children:[" ",(0,l.jsxs)("a",{href:"/q/terms/condition",children:[" ",g("Tirms_conditions")]})," ",g("and")," ",(0,l.jsx)("a",{href:"/q/privacy/policy",children:g("privacy_policy")})]})]})})]}),(0,l.jsx)(d.Z,{buttonText:g("send_otp"),customStyleButton:{minHeight:"2.3rem",backgroundColor:"#575caa"},type:"submit",disabled:j})]})})}),(0,l.jsx)("div",{className:i.Z.footer,children:(0,l.jsxs)("p",{children:[g("already_register")," ",(0,l.jsx)(_.rU,{to:"/login?external",style:{textDecoration:"none"},children:(0,l.jsx)("span",{className:i.Z.signupbtn,onClick:function(){return p(!0)},children:g("login")})})]})}),(0,l.jsx)(u.Ch,{msg:b.msg,run:b.run,setRun:function(){return x({msg:"",run:!1})},postiton:"bottom",type:"error"})]})}},42908:function(e,n,t){var o=t(74165),r=t(15861),s=t(29439),a=t(46550),i=t(43504),c=t(39230),_=t(72791),d=(t(19760),t(36721)),u=t(83669),l=t(32954),m=t(80184);n.Z=function(e){var n=e.clickBackToLogin,t=e.phoneNumber,p=e.setActiveTab,g=e.onMobileVerified,h=e.onMobileNumberAdd,f=e.onMobileStatus,b=e.activeType,x=(0,c.$G)().t,v=(0,_.useState)({msg:"",run:!1}),Z=(0,s.Z)(v,2),I=Z[0],j=Z[1],C=(0,_.useState)(!1),H=(0,s.Z)(C,2),y=H[0],N=H[1],k=(0,_.useRef)(""),w=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n){var r,s,a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),N((function(e){return!e})),4!==(null===(r=k.current)||void 0===r||null===(s=r.value)||void 0===s?void 0:s.length)){e.next=9;break}return e.next=5,g({otpCode:null===(a=k.current)||void 0===a?void 0:a.value,phoneNumber:t});case 5:null!==(i=e.sent)&&void 0!==i&&i.msg?(j({msg:null===i||void 0===i?void 0:i.msg,run:i.run}),N((function(e){return!e}))):null!==i&&void 0!==i&&i.mobileStatus?(f({type:"mobileStatus",value:i.mobileStatus}),p(b)):(j({msg:"Something went wrong request...",run:!0}),N((function(e){return!e}))),e.next=11;break;case 9:j({msg:"Please enter 4 digit otp number",run:!0}),N((function(e){return!e}));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:a.Z.modalContainerr,children:[(0,m.jsx)("form",{onSubmit:w,children:(0,m.jsxs)("div",{className:"".concat(a.Z.form," ").concat(a.Z.forggotPassForm),children:[(0,m.jsx)("h3",{children:x("verification_code")}),(0,m.jsx)("p",{children:x("Please-enter-your-verification-code-label")}),(0,m.jsx)("div",{className:a.Z.otpcontainer,children:(0,m.jsx)("input",{type:"tel",maxLength:"4",minLength:"4",ref:k,placeholder:x("enter_otp")})}),(0,m.jsx)("div",{className:a.Z.didnot,style:{display:"flex",justifyContent:"center",width:"100%",marginTop:"15px"},children:(0,m.jsxs)("p",{children:[x("if_not_rec")," ",(0,m.jsx)(l.Z,{setNotificationState:j,onMobileNumberAdd:h,phoneNumber:t})]})}),(0,m.jsx)("div",{className:a.Z.toc}),(0,m.jsx)(u.Z,{buttonText:x("verify"),customStyleButton:{minHeight:"2.3rem",backgroundColor:"#575caa"},type:"submit",disabled:y})]})}),(0,m.jsx)("div",{className:a.Z.footer,children:(0,m.jsxs)("p",{children:[x("already_register")," ",(0,m.jsx)(i.rU,{to:"/login",style:{textDecoration:"none"},children:(0,m.jsx)("span",{onClick:n,className:"".concat(a.Z.signupbtn," ").concat(a.Z.backtologin),children:x("log_in")})})]})})]}),(0,m.jsx)(d.Ch,{msg:I.msg,run:I.run,setRun:function(){return j({msg:"",run:!1})},postiton:"bottom",type:"Invalid OTP"===I.msg?"error":"success"})]})}},82680:function(e,n){n.Z=function(e){return!!(e.includes("!")||e.includes("@")||e.includes("#")||e.includes("$")||e.includes("%")||e.includes("^")||e.includes("&")||e.includes("*")||e.includes("(")||e.includes(")")||e.includes("+")||e.includes("~")||e.includes(".")||e.includes(",")||e.includes("/")||e.includes(";"))}},57387:function(e,n,t){var o=t(1413),r=(t(72791),t(49384)),s=t(78499),a=t(80184);n.Z=function(e){var n=e.buttonText,t=e.disabled,i=e.customStyleButton,c=e.customStyleButtonText,_=e.onAction,d=e.shwoLoader;return(0,a.jsxs)("button",{disabled:t,style:(0,o.Z)({},i),className:s.Z.button_main,onClick:_,children:[(0,a.jsx)("span",{style:(0,o.Z)({},c),children:n}),t&&d&&(0,a.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,a.jsx)(r.Z,{})})]})}},83669:function(e,n,t){var o=t(1413),r=(t(72791),t(49384)),s=t(78499),a=t(80184);n.Z=function(e){var n=e.type,t=e.buttonText,i=e.disabled,c=e.customStyleButton,_=e.customStyleButtonText;return(0,a.jsxs)("button",{type:n,disabled:i,style:(0,o.Z)({},c),className:s.Z.button_main,children:[(0,a.jsx)("span",{style:(0,o.Z)({},_),children:t}),i&&(0,a.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,a.jsx)(r.Z,{})})]})}},49384:function(e,n,t){t.d(n,{Z:function(){return s}});t(72791);var o=t(6307),r=t(80184),s=function(){return(0,r.jsx)(o.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},93570:function(e,n){n.Z={container:"Container_container__AbHOF",modalContainerr:"Container_modalContainerr__-2-cN",loginLogo:"Container_loginLogo__CQebl",footer:"Container_footer__VxeIy",signupbtn:"Container_signupbtn__6uzFR",form:"Container_form__SHuwp",forggotPassForm:"Container_forggotPassForm__zUmcR",forgotPass:"Container_forgotPass__-anI6",inputlabelcontainer:"Container_inputlabelcontainer__GZTTy",userNamecontainer:"Container_userNamecontainer__Jo10d",otpcontainer:"Container_otpcontainer__Bg36H",btn:"Container_btn__o8xZZ",username:"Container_username__Oeikz",eye:"Container_eye__S1AZy",eyeOpen:"Container_eyeOpen__u9hiR",btnn:"Container_btnn__M8Slt",createbtn:"Container_createbtn__YEIiZ",toc:"Container_toc__QRdJh",tocspan:"Container_tocspan__qAS6k",didnot:"Container_didnot__3FVCB",resend:"Container_resend__0WZ9g",login:"Container_login__ARVtz",pwdReq:"Container_pwdReq__i5xlF",ConfirmPass:"Container_ConfirmPass__L8phK",btnndisable:"Container_btnndisable__IAEgr"}},46550:function(e,n){n.Z={container:"component_container__m2Xc5",modalContainerr:"component_modalContainerr__JQbNf",loginLogo:"component_loginLogo__LKBrN",footerr:"component_footerr__3HWFZ",right:"component_right__Yw80H",mid:"component_mid__hNJOK",one:"component_one__9l1Dk",two:"component_two__k2W1L",three:"component_three__KUE-H",step1:"component_step1__Q-36P",step2:"component_step2__BSztr",step3:"component_step3__Kbt9h",footer:"component_footer__LKC3S",signupbtn:"component_signupbtn__UhP4A",steps:"component_steps__4uv8K",form:"component_form__uoHPf",forggotPassForm:"component_forggotPassForm__13896",forgotPass:"component_forgotPass__i+2Pa",choosetypeh:"component_choosetypeh__4gXs1",choosetypep:"component_choosetypep__g96-9",inputlabelcontainer:"component_inputlabelcontainer__Vf-r8",userNamecontainer:"component_userNamecontainer__yFWAM",errorspan:"component_errorspan__TqV4P",submitbtn:"component_submitbtn__qkptF",otpcontainer:"component_otpcontainer__dGm99",submitDisable:"component_submitDisable__thaGJ",otpcontainerr:"component_otpcontainerr__i-KiW",btn:"component_btn__mt+di",username:"component_username__X5k7p",eye:"component_eye__e0VRB",eyeOpen:"component_eyeOpen__iUhjN",userNameRuleBottom:"component_userNameRuleBottom__mEBxr",usernamerule:"component_usernamerule__jWAEl",usernamespan:"component_usernamespan__jgZhb",toc:"component_toc__PwsEr",tocspan:"component_tocspan__ZXA8y",didnot:"component_didnot__-JcML",resend:"component_resend__IQLc4",userNamecontainer2:"component_userNamecontainer2__Nw9Bz",regIcon:"component_regIcon__O9boR",selector:"component_selector__8GsfO",selectIcon:"component_selectIcon__BFe1k",list:"component_list__mtWkb",divider:"component_divider__ZZTWp",options:"component_options__JHK7U",backText:"component_backText__3YynF",contentt:"component_contentt__1u1Db",instypecontent:"component_instypecontent__CTK9d",contentthead:"component_contentthead__2YoXr",contenttmid:"component_contenttmid__sBnNx",insmodemid:"component_insmodemid__RWwOh",contenttmidItem:"component_contenttmidItem__GzzWB",contenttmidItemDark:"component_contenttmidItemDark__nlaDs",contenttfooter:"component_contenttfooter__JghOG",contenttfooterDark:"component_contenttfooterDark__Y79Qo",listDisplay:"component_listDisplay__M5tjM",triangle:"component_triangle__nmIUs",triangleDisplay:"component_triangleDisplay__XERSF",insmodecontent:"component_insmodecontent__UfyDd"}},1686:function(e,n){n.Z={headerinscontainer:"HeaderIns_headerinscontainer__6zR22",headerins:"HeaderIns_headerins__KNhBs",headerinsleft:"HeaderIns_headerinsleft__Dq5l8",hlarge:"HeaderIns_hlarge__VZj1H",hmedium:"HeaderIns_hmedium__Wuwih",h_responsive_medium:"HeaderIns_h_responsive_medium__2GiZh",hmiddle:"HeaderIns_hmiddle__EhO35",hsmall:"HeaderIns_hsmall__8NXG4",h_responsive_small:"HeaderIns_h_responsive_small__5jjDj",signupbtn:"HeaderIns_signupbtn__VBqzj",headerinsright:"HeaderIns_headerinsright__2rUuE",cardContainer:"HeaderIns_cardContainer__779dW",cardposition:"HeaderIns_cardposition__7DmYa",cardInner:"HeaderIns_cardInner__zuKwo",card:"HeaderIns_card__zAsBQ",cardhdark:"HeaderIns_cardhdark__k6Y1I",cardhlight:"HeaderIns_cardhlight__+bQht",tabsss:"HeaderIns_tabsss__vjRZZ",singletab:"HeaderIns_singletab__-FStP",singletabActive:"HeaderIns_singletabActive__e7RaK",index_contrainer:"HeaderIns_index_contrainer__iTAI5",card__content:"HeaderIns_card__content__Lx+gf","is-flipped":"HeaderIns_is-flipped__EIpTb",flipFront:"HeaderIns_flipFront__CArH5",flipBack:"HeaderIns_flipBack__FgqT1",input_label:"HeaderIns_input_label__eOC9a",forgot_pass_container:"HeaderIns_forgot_pass_container__cXoUZ",forgot_pass_container_margin_top:"HeaderIns_forgot_pass_container_margin_top__kvgpu",forgot_pass:"HeaderIns_forgot_pass__t+Z2Q",btn_container:"HeaderIns_btn_container__dLDRE",btn_containerstaff:"HeaderIns_btn_containerstaff__6J47C",btn_containerotp:"HeaderIns_btn_containerotp__BrMrr",register_link_container:"HeaderIns_register_link_container__+lkyq",ptoc:"HeaderIns_ptoc__PUfmM",pusername:"HeaderIns_pusername__f8z-m",forgotpusername:"HeaderIns_forgotpusername__6+DEN",number_input:"HeaderIns_number_input__Bnlgw",spantoc:"HeaderIns_spantoc__9P8IL",resend:"HeaderIns_resend__+xCJZ",ed_tech_text:"HeaderIns_ed_tech_text__HaP5x",input_margin_top:"HeaderIns_input_margin_top__5ex3R",presend:"HeaderIns_presend__bXx1x",change_pass_input:"HeaderIns_change_pass_input__bDpuQ",re_pass_input:"HeaderIns_re_pass_input__4qAz8",re_enter_btn_container:"HeaderIns_re_enter_btn_container__X+GdB",formselect:"HeaderIns_formselect__uFA2K",input_border_active:"HeaderIns_input_border_active__J5kdS",formselectactive:"HeaderIns_formselectactive__x1OIa",genderh:"HeaderIns_genderh__yDLr7",genderplaceholder:"HeaderIns_genderplaceholder__i9AIJ",upIcon:"HeaderIns_upIcon__hZNq6",downIcon:"HeaderIns_downIcon__tQDNM",accounts_container:"HeaderIns_accounts_container__7YUlN",item:"HeaderIns_item__IriKI",profile_img:"HeaderIns_profile_img__17qMa",profile_imgpadding:"HeaderIns_profile_imgpadding__msGGK",text_container:"HeaderIns_text_container__G12Yk",hname:"HeaderIns_hname__3hX4d",staffsp:"HeaderIns_staffsp__6RXJz",joiningh:"HeaderIns_joiningh__pqY9T",step:"HeaderIns_step__Lw+mD",inputs_container:"HeaderIns_inputs_container__QvC0i",specialChar:"HeaderIns_specialChar__Bkgix",upload:"HeaderIns_upload__fNe9g",userLogo:"HeaderIns_userLogo__LWwDu",userLogoContainer:"HeaderIns_userLogoContainer__n1sPn",logo_Container:"HeaderIns_logo_Container__e4H6D",cloose:"HeaderIns_cloose__bVvFS",errorspan:"HeaderIns_errorspan__-XoS5",small_icon:"HeaderIns_small_icon__YWzY9",back_icon:"HeaderIns_back_icon__7e8pa"}}}]);
//# sourceMappingURL=2532.8ed90bc2.chunk.js.map