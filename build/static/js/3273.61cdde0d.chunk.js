(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3273],{62512:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var n=a(72791),r=a(39230),i=a(27331),o=a(85794),s=a(98684),_=a(53982),l=a(16871),u=a(79992),c=a(61578),d=a(19335),h=a(96873),m=a(80184);const p=()=>{const{t:t}=(0,r.$G)(),e=(0,l.s0)(),[a,p]=(0,n.useState)({insPhoneNumber:""}),[y,v]=(0,n.useState)(!1),[g,b]=(0,n.useState)(""),[f,x]=(0,n.useState)({open:!1,msg:"",variant:"error"}),[j]=(0,_.bB)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{children:(0,m.jsxs)("div",{className:i.Z.auth_card_wrapper,children:[(0,m.jsx)("div",{className:i.Z.auth_create_container,children:(0,m.jsx)("div",{children:(0,m.jsx)("h6",{className:i.Z.auth_card_title,style:{fontSize:"1rem"},children:t("signup")})})}),(0,m.jsx)("div",{className:i.Z.auth_login_form,style:{marginTop:"0"},children:(0,m.jsxs)("form",{onSubmit:t=>{t.preventDefault(),a.insPhoneNumber?(v((t=>!t)),j({phone:{insPhoneNumber:"".concat(a.insPhoneNumber),status:"Not Verified"}}).then((t=>{var a;let n=(0,u.ZH)(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.encrypt);null!==n&&void 0!==n&&n.insPhoneNumber&&(e("/institute/verify",{state:{phoneNumber:null===n||void 0===n?void 0:n.insPhoneNumber}}),v((t=>!t)))})).catch((()=>{x({open:!0,msg:"Time out of request...",variant:"error"})}))):b({insPhoneNumber:"* required"})},children:[(0,m.jsx)(c.Z,{label:t("mobile_number"),placeholder:t("institute_mobile_number_placeholder"),fieldIconUrl:"".concat(s.nj,"/auth-flag.svg"),validate:g.insPhoneNumber,name:"insPhoneNumber",value:a.insPhoneNumber,onChange:t=>{p((e=>({...e,[t.target.name]:t.target.value})))}}),(0,m.jsxs)("p",{className:i.Z.auth_privacy_and_policy,children:[t("mobile_login_note")," ",(0,m.jsx)("span",{className:i.Z.auth_privacy_and_policy_link,children:(0,m.jsx)("a",{href:"/q/terms/condition",children:t("terms_condition")})})," ",t("and"),(0,m.jsx)("span",{className:i.Z.auth_privacy_and_policy_link,children:(0,m.jsx)("a",{href:"/q/privacy/policy",children:t("privacy_policy")})})]}),(0,m.jsx)(d.Z,{type:"submit",buttonText:t("send_otp"),disabled:y,customStyleButton:{marginTop:"1.5rem"}}),(0,m.jsx)("div",{className:i.Z.auth_footer_container,children:(0,m.jsxs)("p",{className:i.Z.auth_forget_text,children:[(0,m.jsx)("span",{style:{color:"rgba(0,0,0,.8)"},children:t("already_registered")}),(0,m.jsxs)("span",{onClick:()=>{e("/")},children:[" ",t("login")]})]})})]})})]})}),(0,m.jsx)(o.Z,{eventState:f,eventStateHandler:x})]})}},96873:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(72791);var n=a(27331),r=a(98684),i=a(80184);const o=t=>{let{children:e}=t;return(0,i.jsxs)("div",{className:n.Z.getstarted,children:[(0,i.jsx)("div",{className:n.Z.left_strip}),(0,i.jsxs)("div",{className:n.Z.getstarted_container,children:[(0,i.jsx)("div",{className:n.Z.right_strip}),(0,i.jsxs)("div",{className:n.Z.getstarted_container_inner,children:[(0,i.jsxs)("div",{className:n.Z.getstarted_container_info,children:[(0,i.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("h4",{children:"Qviple"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsxs)("h6",{children:[(0,i.jsx)("img",{src:"".concat(r.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,i.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsxs)("h6",{children:[(0,i.jsx)("img",{src:"".concat(r.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,i.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsxs)("h6",{children:[(0,i.jsx)("img",{src:"".concat(r.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,i.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,i.jsx)("div",{className:n.Z.get_started_btn,children:(0,i.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("button",{children:"Get Started"})})})]}),(0,i.jsx)("div",{className:n.Z.getstarted_container_child,children:e})]})]})]})}},53982:(t,e,a)=>{"use strict";a.d(e,{KB:()=>R,Dv:()=>X,rY:()=>K,bB:()=>J,J9:()=>z,xk:()=>B,Ne:()=>O,b5:()=>G,OF:()=>D,Dr:()=>Q,Pv:()=>Y,d4:()=>E,gS:()=>H,FL:()=>V});var n=a(28328),r=a(94811);const i=t=>t.mutation({query:t=>({url:"/all-images/onefile/web",method:r.Q0,body:t.fileUpload})}),o=t=>t.query({query:t=>"/auth/username/search?u_name=".concat(t)}),s=t=>t.query({query:t=>"/auth/email/check/redundant?email=".concat(t)}),_=t=>t.mutation({query:t=>({url:"/auth/login",method:r.a4,body:t.login})}),l=t=>t.mutation({query:t=>({url:"/auth/user-detail",method:r.a4,body:t})}),u=t=>t.mutation({query:t=>{var e;return{url:"/auth/user-detail-verify/".concat(t.userPhoneNumber,"?u_name=").concat(null!==(e=null===t||void 0===t?void 0:t.u_name)&&void 0!==e?e:""),method:r.a4,body:t}}}),c=t=>t.mutation({query:t=>({url:"/auth/user/forgot",method:r.a4,body:t.forgot})}),d=t=>t.mutation({query:t=>({url:"/auth/user/forgot/".concat(t.uid),method:r.a4,body:t.otp})}),h=t=>t.mutation({query:t=>({url:"/auth/user/reset/password/".concat(t.uid),method:r.a4,body:t.password})}),m=(t,e)=>t.mutation({query:t=>({url:"/auth/profile-creation/".concat(t.userPhoneNumber),method:r.a4,body:t.profileCreation})}),p=(t,e)=>t.mutation({query:t=>({url:"/auth/create-user-password/".concat(t.uid),method:r.a4,body:t.password})}),y=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail",method:r.a4,body:t.phone})}),v=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail-verify/".concat(t.insPhoneNumber),method:r.a4,body:t.verify})}),g=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/register",method:r.a4,body:t.profileCreation})}),b=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/create-password/".concat(t.id),method:r.a4,body:t.password})}),f=t=>t.mutation({query:t=>({url:"/auth/direct/confirm/join/".concat(t.phoneNumber,"/apply/").concat(t.aid,"?existingUser=").concat(t.uid),method:r.a4,body:t.addStudent})}),x=n.i.injectEndpoints({endpoints:t=>({fileUpload:i(t),authUniqueUsername:o(t),authUniqueEmail:s(t),authLogin:_(t),authUserNumber:l(t),authUserNumberVerify:u(t),authUserForget:c(t),authUserForgetOtp:d(t),authUserSetPassword:h(t),authUserCreateAccount:m(t),authUserCreatePassword:p(t),authInstituteNumber:y(t),authInstituteNumberVerify:v(t),authInstituteCreateAccount:g(t),authInstituteCreatePassword:b(t),authDirectJoinFormAdmissionApplication:f(t)})}),{useFileUploadMutation:j,useAuthUniqueUsernameQuery:A,useAuthUniqueEmailQuery:N,useAuthLoginMutation:U,useAuthUserNumberMutation:q,useAuthUserNumberVerifyMutation:w,useAuthUserForgetMutation:Z,useAuthUserForgetOtpMutation:k,useAuthUserSetPasswordMutation:F,useAuthUserCreateAccountMutation:P,useAuthUserCreatePasswordMutation:S,useAuthInstituteNumberMutation:C,useAuthInstituteNumberVerifyMutation:L,useAuthInstituteCreateAccountMutation:I,useAuthInstituteCreatePasswordMutation:M,useAuthDirectJoinFormAdmissionApplicationMutation:T}=x,V=()=>{const[t]=j();return[t]},B=()=>{const[t]=U();return[t]},Y=()=>{const[t]=q();return[t]},E=()=>{const[t]=w();return[t]},D=()=>{const[t]=Z();return[t]},Q=()=>{const[t]=k();return[t]},H=()=>{const[t]=F();return[t]},O=()=>{const[t]=P();return[t]},G=()=>{const[t]=S();return[t]},J=()=>{const[t]=C();return[t]},z=()=>{const[t]=L();return[t]},X=()=>{const[t]=I();return[t]},K=()=>{const[t]=M();return[t]},R=()=>{const[t]=T();return[t]}},79992:(t,e,a)=>{"use strict";a.d(e,{ZH:()=>r});var n=a(44816);const r=t=>{var e=n.AES.decrypt(t,"QVIPLESAASPLATFORM");return JSON.parse(e.toString(n.enc.Utf8))}},61578:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var n=a(72791);const r="AuthFormField_auth_input_container__4XCiB",i="AuthFormField_auth_input_container_error__ho7RI",o="AuthFormField_auth_input_container_inner__3YVnH",s="AuthFormField_auth_input_image_container__vkGgA",_="AuthFormField_auth_input_label__YhCLh",l="AuthFormField_auth_input_field__6VdCa",u="AuthFormField_auth_label_error__Wcuw8",c="AuthFormField_auth_passward_icon__VDFPG";var d=a(98684),h=a(80184);const m=t=>{let{label:e,type:a,name:m,placeholder:p,value:y,onChange:v,minLength:g,maxLength:b,validate:f,fieldIconUrl:x,isPassword:j}=t;const[A,N]=(0,n.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[e?(0,h.jsxs)("label",{htmlFor:m,className:_,children:[e,f?(0,h.jsx)("span",{className:u,children:" *"}):null]}):null,(0,h.jsx)("div",{className:f?i:r,children:(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:s,children:(0,h.jsx)("img",{src:x,alt:"input icon"})}),"password"===a?(0,h.jsx)("input",{className:l,type:A?"text":"password",name:m,maxLength:b,minLength:g,placeholder:p,value:y,onChange:v}):(0,h.jsx)("input",{className:l,type:null!==a&&void 0!==a?a:"text",name:m,maxLength:b,minLength:g,placeholder:p,value:y,onChange:v}),j?(0,h.jsx)("img",{alt:"password icon",className:c,src:"".concat(d.nj,A?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:()=>{N((t=>!t))}}):null]})})]})}},19335:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});var n=a(27331),r=a(63244),i=a(80184);const o=t=>{let{customStyle:e}=t;return(0,i.jsx)("div",{className:r.Z.circle_loading,style:e})},s=t=>{let{type:e,buttonText:a,disabled:r,customStyleButton:s,customStyleButtonText:_}=t;return(0,i.jsxs)("button",{type:e,disabled:r,style:s,className:n.Z.auth_submit_btn,children:[(0,i.jsx)("span",{style:{..._},children:a}),r&&(0,i.jsx)(o,{})]})}},85794:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(72791),r=a(54164),i=a(15783),o=a(98684),s=a(80184);const _=t=>{let{onClose:e,isVariant:a,isHide:n,children:_}=t;return r.createPortal((0,s.jsx)("div",{children:(0,s.jsx)("div",{className:n?i.Z.notify_hide_overlay:i.Z.notify_overlay,children:(0,s.jsxs)("div",{className:i.Z.notify_container,style:{"--notify-bg-color":a},children:[_,(0,s.jsx)("img",{src:"".concat(o.Fk,"/close-white.svg"),alt:"close icon",onClick:e,className:i.Z.notify_close})]})})}),document.getElementById("notify-alert"))},l={success:"green",error:"#ed4a4a",warning:"orange"},u=t=>{var e;let{eventState:a,eventStateHandler:r}=t;const[o,u]=(0,n.useState)(!1);return null!==a&&void 0!==a&&a.open?(0,s.jsx)(_,{onClose:()=>{u(!0);let t=setTimeout((()=>{r((t=>({...t,open:!1,msg:"",variant:"success"}))),u(!1)}),500);return()=>clearTimeout(t)},isVariant:l[null===a||void 0===a?void 0:a.variant],isHide:o,children:(0,s.jsx)("h6",{className:i.Z.notify_message,children:null!==(e=null===a||void 0===a?void 0:a.msg)&&void 0!==e?e:""})}):null}},27331:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},63244:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},15783:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},42480:()=>{}}]);
//# sourceMappingURL=3273.61cdde0d.chunk.js.map