(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[72360],{96873:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(72791);var r=a(27331),n=a(98684),o=a(80184);const i=t=>{let{children:e}=t;return(0,o.jsxs)("div",{className:r.Z.getstarted,children:[(0,o.jsx)("div",{className:r.Z.left_strip}),(0,o.jsxs)("div",{className:r.Z.getstarted_container,children:[(0,o.jsx)("div",{className:r.Z.right_strip}),(0,o.jsxs)("div",{className:r.Z.getstarted_container_inner,children:[(0,o.jsxs)("div",{className:r.Z.getstarted_container_info,children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("h4",{children:"Qviple"})}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,o.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,o.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,o.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,o.jsx)("div",{className:r.Z.get_started_btn,children:(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("button",{children:"Get Started"})})})]}),(0,o.jsx)("div",{className:r.Z.getstarted_container_child,children:e})]})]})]})}},53982:(t,e,a)=>{"use strict";a.d(e,{KB:()=>R,Dv:()=>K,rY:()=>X,bB:()=>G,J9:()=>z,xk:()=>B,Ne:()=>J,b5:()=>H,OF:()=>Q,Dr:()=>O,Pv:()=>E,d4:()=>Y,gS:()=>D,FL:()=>V});var r=a(28328),n=a(94811);const o=t=>t.mutation({query:t=>({url:"/all-images/onefile/web",method:n.Q0,body:t.fileUpload})}),i=t=>t.query({query:t=>"/auth/username/search?u_name=".concat(t)}),_=t=>t.query({query:t=>"/auth/email/check/redundant?email=".concat(t)}),s=t=>t.mutation({query:t=>({url:"/auth/login",method:n.a4,body:t.login})}),u=t=>t.mutation({query:t=>({url:"/auth/user-detail",method:n.a4,body:t})}),l=t=>t.mutation({query:t=>{var e;return{url:"/auth/user-detail-verify/".concat(t.userPhoneNumber,"?u_name=").concat(null!==(e=null===t||void 0===t?void 0:t.u_name)&&void 0!==e?e:""),method:n.a4,body:t}}}),d=t=>t.mutation({query:t=>({url:"/auth/user/forgot",method:n.a4,body:t.forgot})}),c=t=>t.mutation({query:t=>({url:"/auth/user/forgot/".concat(t.uid),method:n.a4,body:t.otp})}),h=t=>t.mutation({query:t=>({url:"/auth/user/reset/password/".concat(t.uid),method:n.a4,body:t.password})}),m=(t,e)=>t.mutation({query:t=>({url:"/auth/profile-creation/".concat(t.userPhoneNumber),method:n.a4,body:t.profileCreation})}),y=(t,e)=>t.mutation({query:t=>({url:"/auth/create-user-password/".concat(t.uid),method:n.a4,body:t.password})}),v=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail",method:n.a4,body:t.phone})}),p=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail-verify/".concat(t.insPhoneNumber),method:n.a4,body:t.verify})}),g=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/register",method:n.a4,body:t.profileCreation})}),b=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/create-password/".concat(t.id),method:n.a4,body:t.password})}),f=t=>t.mutation({query:t=>({url:"/auth/direct/confirm/join/".concat(t.phoneNumber,"/apply/").concat(t.aid,"?existingUser=").concat(t.uid),method:n.a4,body:t.addStudent})}),A=r.i.injectEndpoints({endpoints:t=>({fileUpload:o(t),authUniqueUsername:i(t),authUniqueEmail:_(t),authLogin:s(t),authUserNumber:u(t),authUserNumberVerify:l(t),authUserForget:d(t),authUserForgetOtp:c(t),authUserSetPassword:h(t),authUserCreateAccount:m(t),authUserCreatePassword:y(t),authInstituteNumber:v(t),authInstituteNumberVerify:p(t),authInstituteCreateAccount:g(t),authInstituteCreatePassword:b(t),authDirectJoinFormAdmissionApplication:f(t)})}),{useFileUploadMutation:x,useAuthUniqueUsernameQuery:j,useAuthUniqueEmailQuery:U,useAuthLoginMutation:q,useAuthUserNumberMutation:w,useAuthUserNumberVerifyMutation:k,useAuthUserForgetMutation:N,useAuthUserForgetOtpMutation:Z,useAuthUserSetPasswordMutation:S,useAuthUserCreateAccountMutation:C,useAuthUserCreatePasswordMutation:P,useAuthInstituteNumberMutation:M,useAuthInstituteNumberVerifyMutation:I,useAuthInstituteCreateAccountMutation:L,useAuthInstituteCreatePasswordMutation:F,useAuthDirectJoinFormAdmissionApplicationMutation:T}=A,V=()=>{const[t]=x();return[t]},B=()=>{const[t]=q();return[t]},E=()=>{const[t]=w();return[t]},Y=()=>{const[t]=k();return[t]},Q=()=>{const[t]=N();return[t]},O=()=>{const[t]=Z();return[t]},D=()=>{const[t]=S();return[t]},J=()=>{const[t]=C();return[t]},H=()=>{const[t]=P();return[t]},G=()=>{const[t]=M();return[t]},z=()=>{const[t]=I();return[t]},K=()=>{const[t]=L();return[t]},X=()=>{const[t]=F();return[t]},R=()=>{const[t]=T();return[t]}},79992:(t,e,a)=>{"use strict";a.d(e,{ZH:()=>n});var r=a(44816);const n=t=>{var e=r.AES.decrypt(t,"QVIPLESAASPLATFORM");return JSON.parse(e.toString(r.enc.Utf8))}},19335:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var r=a(27331),n=a(63244),o=a(80184);const i=t=>{let{customStyle:e}=t;return(0,o.jsx)("div",{className:n.Z.circle_loading,style:e})},_=t=>{let{type:e,buttonText:a,disabled:n,customStyleButton:_,customStyleButtonText:s}=t;return(0,o.jsxs)("button",{type:e,disabled:n,style:_,className:r.Z.auth_submit_btn,children:[(0,o.jsx)("span",{style:{...s},children:a}),n&&(0,o.jsx)(i,{})]})}},85794:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var r=a(72791),n=a(54164),o=a(15783),i=a(98684),_=a(80184);const s=t=>{let{onClose:e,isVariant:a,isHide:r,children:s}=t;return n.createPortal((0,_.jsx)("div",{children:(0,_.jsx)("div",{className:r?o.Z.notify_hide_overlay:o.Z.notify_overlay,children:(0,_.jsxs)("div",{className:o.Z.notify_container,style:{"--notify-bg-color":a},children:[s,(0,_.jsx)("img",{src:"".concat(i.Fk,"/close-white.svg"),alt:"close icon",onClick:e,className:o.Z.notify_close})]})})}),document.getElementById("notify-alert"))},u={success:"green",error:"#ed4a4a",warning:"orange"},l=t=>{var e;let{eventState:a,eventStateHandler:n}=t;const[i,l]=(0,r.useState)(!1);return null!==a&&void 0!==a&&a.open?(0,_.jsx)(s,{onClose:()=>{l(!0);let t=setTimeout((()=>{n((t=>({...t,open:!1,msg:"",variant:"success"}))),l(!1)}),500);return()=>clearTimeout(t)},isVariant:u[null===a||void 0===a?void 0:a.variant],isHide:i,children:(0,_.jsx)("h6",{className:o.Z.notify_message,children:null!==(e=null===a||void 0===a?void 0:a.msg)&&void 0!==e?e:""})}):null}},53141:(t,e,a)=>{"use strict";a.d(e,{CG:()=>o,ZM:()=>i,jU:()=>n});const r=["!","@","#","$","%","^","&","*","(",")","+","~",".",",","/",":",";"],n=t=>!!r.includes(t),o=t=>(null===t||void 0===t||!t.includes("@"))&&8===(null===t||void 0===t?void 0:t.length),i=t=>null!==t&&void 0!==t&&t.includes("@")?"e-mail":8===(null===t||void 0===t?void 0:t.length)?"qviple id":"mobile number"},27331:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},63244:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},15783:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},42480:()=>{}}]);
//# sourceMappingURL=72360.8c60b1f1.chunk.js.map