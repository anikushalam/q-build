(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[46543,10311],{51317:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var r=a(72791),n=a(27331),o=a(39230),s=a(93638),i=a(80184);const _=t=>{let{title:e,subTitle:a,titleStyle:r,subTitleStyle:_,isCreate:l,onCreate:u,children:c}=t;const{t:d}=(0,o.$G)();return(0,i.jsxs)("div",{className:n.Z.auth_card_wrapper,children:[l?(0,i.jsxs)("div",{className:n.Z.auth_create_container,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{className:n.Z.auth_card_title,style:r,children:d(e||"hello")}),(0,i.jsx)("h6",{className:n.Z.auth_card_subtitle,style:_,children:a||d("welcome_to_qviple")})]}),(0,i.jsx)(s.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:u})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h6",{className:n.Z.auth_card_title,style:r,children:d(e||"hello")}),(0,i.jsx)("h6",{className:n.Z.auth_card_subtitle,style:_,children:a||d("welcome_to_qviple")})]}),c]})},l=(0,r.memo)(_)},92919:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>y});var r=a(72791),n=a(96873),o=a(51317),s=a(39230),i=a(85794),_=a(61578),l=a(27331),u=a(99183),c=a(53982),d=a(98684),h=a(19335),m=a(16871),p=a(79992),v=a(80184);const y=()=>{const{t:t}=(0,s.$G)(),e=(0,m.TH)(),a=(0,m.s0)(),[y,g]=(0,r.useState)({userPassword:"",userRePassword:""}),[b,f]=(0,r.useState)(!1),[x,j]=(0,r.useState)(""),[A,w]=(0,r.useState)({open:!1,msg:"",variant:"error"}),[U]=(0,c.gS)(),q=t=>{g((e=>({...e,[t.target.name]:t.target.value})))};return(0,v.jsx)(n.Z,{children:(0,v.jsx)(o.Z,{title:"change_password",subTitle:t("change_password_note"),subTitleStyle:{fontSize:"0.7rem"},children:(0,v.jsxs)("form",{onSubmit:t=>{var r;t.preventDefault();let n=(0,u.l)(y);var o;(0,u.x)(n)&&null!==(r=e.state)&&void 0!==r&&r.uid?y.userPassword===y.userRePassword?(f((t=>!t)),U({uid:null===(o=e.state)||void 0===o?void 0:o.uid,password:y}).then((t=>{var e;let r=(0,p.ZH)(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.encrypt);null!==r&&void 0!==r&&r.institute?a("/"):w({msg:"Invalid Change Password",open:!0,variant:"error"}),f((t=>!t))})).catch((t=>{w({msg:"Time out of request with reason ".concat(t),open:!0,variant:"error"}),f((t=>!t))}))):w({msg:"Please match your password and confirm password",open:!0,variant:"error"}):j(n)},className:l.Z.auth_login_form,children:[(0,v.jsx)(_.Z,{label:t("password"),placeholder:t("password_placeholder"),fieldIconUrl:"".concat(d.nj,"/auth-password.svg"),validate:x.userPassword,name:"userPassword",value:y.userPassword,onChange:q,type:"password",isPassword:!0}),(0,v.jsx)(_.Z,{label:t("confirm_password"),placeholder:t("password_confirm_placeholder"),fieldIconUrl:"".concat(d.nj,"/auth-password.svg"),validate:x.userRePassword,name:"userRePassword",value:y.userRePassword,onChange:q,type:"password",isPassword:!0}),(0,v.jsx)(h.Z,{type:"submit",buttonText:t("submit"),customStyleButton:{marginTop:"5rem"},disabled:b}),(0,v.jsx)(i.Z,{eventState:A,eventStateHandler:w})]})})})}},96873:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(72791);var r=a(27331),n=a(98684),o=a(80184);const s=t=>{let{children:e}=t;return(0,o.jsxs)("div",{className:r.Z.getstarted,children:[(0,o.jsx)("div",{className:r.Z.left_strip}),(0,o.jsxs)("div",{className:r.Z.getstarted_container,children:[(0,o.jsx)("div",{className:r.Z.right_strip}),(0,o.jsxs)("div",{className:r.Z.getstarted_container_inner,children:[(0,o.jsxs)("div",{className:r.Z.getstarted_container_info,children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("h4",{children:"Qviple"})}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,o.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,o.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"".concat(n.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,o.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,o.jsx)("div",{className:r.Z.get_started_btn,children:(0,o.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("button",{children:"Get Started"})})})]}),(0,o.jsx)("div",{className:r.Z.getstarted_container_child,children:e})]})]})]})}},53982:(t,e,a)=>{"use strict";a.d(e,{KB:()=>X,Dv:()=>z,rY:()=>K,bB:()=>Q,J9:()=>J,xk:()=>V,Ne:()=>D,b5:()=>G,OF:()=>H,Dr:()=>O,Pv:()=>Y,d4:()=>E,gS:()=>R,FL:()=>B});var r=a(28328),n=a(94811);const o=t=>t.mutation({query:t=>({url:"/all-images/onefile/web",method:n.Q0,body:t.fileUpload})}),s=t=>t.query({query:t=>"/auth/username/search?u_name=".concat(t)}),i=t=>t.query({query:t=>"/auth/email/check/redundant?email=".concat(t)}),_=t=>t.mutation({query:t=>({url:"/auth/login",method:n.a4,body:t.login})}),l=t=>t.mutation({query:t=>({url:"/auth/user-detail",method:n.a4,body:t})}),u=t=>t.mutation({query:t=>{var e;return{url:"/auth/user-detail-verify/".concat(t.userPhoneNumber,"?u_name=").concat(null!==(e=null===t||void 0===t?void 0:t.u_name)&&void 0!==e?e:""),method:n.a4,body:t}}}),c=t=>t.mutation({query:t=>({url:"/auth/user/forgot",method:n.a4,body:t.forgot})}),d=t=>t.mutation({query:t=>({url:"/auth/user/forgot/".concat(t.uid),method:n.a4,body:t.otp})}),h=t=>t.mutation({query:t=>({url:"/auth/user/reset/password/".concat(t.uid),method:n.a4,body:t.password})}),m=(t,e)=>t.mutation({query:t=>({url:"/auth/profile-creation/".concat(t.userPhoneNumber),method:n.a4,body:t.profileCreation})}),p=(t,e)=>t.mutation({query:t=>({url:"/auth/create-user-password/".concat(t.uid),method:n.a4,body:t.password})}),v=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail",method:n.a4,body:t.phone})}),y=(t,e)=>t.mutation({query:t=>({url:"/auth/ins-detail-verify/".concat(t.insPhoneNumber),method:n.a4,body:t.verify})}),g=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/register",method:n.a4,body:t.profileCreation})}),b=(t,e)=>t.mutation({query:t=>({url:"/auth/ins/create-password/".concat(t.id),method:n.a4,body:t.password})}),f=t=>t.mutation({query:t=>({url:"/auth/direct/confirm/join/".concat(t.phoneNumber,"/apply/").concat(t.aid,"?existingUser=").concat(t.uid),method:n.a4,body:t.addStudent})}),x=r.i.injectEndpoints({endpoints:t=>({fileUpload:o(t),authUniqueUsername:s(t),authUniqueEmail:i(t),authLogin:_(t),authUserNumber:l(t),authUserNumberVerify:u(t),authUserForget:c(t),authUserForgetOtp:d(t),authUserSetPassword:h(t),authUserCreateAccount:m(t),authUserCreatePassword:p(t),authInstituteNumber:v(t),authInstituteNumberVerify:y(t),authInstituteCreateAccount:g(t),authInstituteCreatePassword:b(t),authDirectJoinFormAdmissionApplication:f(t)})}),{useFileUploadMutation:j,useAuthUniqueUsernameQuery:A,useAuthUniqueEmailQuery:w,useAuthLoginMutation:U,useAuthUserNumberMutation:q,useAuthUserNumberVerifyMutation:N,useAuthUserForgetMutation:Z,useAuthUserForgetOtpMutation:S,useAuthUserSetPasswordMutation:P,useAuthUserCreateAccountMutation:k,useAuthUserCreatePasswordMutation:C,useAuthInstituteNumberMutation:F,useAuthInstituteNumberVerifyMutation:L,useAuthInstituteCreateAccountMutation:I,useAuthInstituteCreatePasswordMutation:T,useAuthDirectJoinFormAdmissionApplicationMutation:M}=x,B=()=>{const[t]=j();return[t]},V=()=>{const[t]=U();return[t]},Y=()=>{const[t]=q();return[t]},E=()=>{const[t]=N();return[t]},H=()=>{const[t]=Z();return[t]},O=()=>{const[t]=S();return[t]},R=()=>{const[t]=P();return[t]},D=()=>{const[t]=k();return[t]},G=()=>{const[t]=C();return[t]},Q=()=>{const[t]=F();return[t]},J=()=>{const[t]=L();return[t]},z=()=>{const[t]=I();return[t]},K=()=>{const[t]=T();return[t]},X=()=>{const[t]=M();return[t]}},79992:(t,e,a)=>{"use strict";a.d(e,{ZH:()=>n});var r=a(44816);const n=t=>{var e=r.AES.decrypt(t,"QVIPLESAASPLATFORM");return JSON.parse(e.toString(r.enc.Utf8))}},61578:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var r=a(72791);const n="AuthFormField_auth_input_container__4XCiB",o="AuthFormField_auth_input_container_error__ho7RI",s="AuthFormField_auth_input_container_inner__3YVnH",i="AuthFormField_auth_input_image_container__vkGgA",_="AuthFormField_auth_input_label__YhCLh",l="AuthFormField_auth_input_field__6VdCa",u="AuthFormField_auth_label_error__Wcuw8",c="AuthFormField_auth_passward_icon__VDFPG";var d=a(98684),h=a(80184);const m=t=>{let{label:e,type:a,name:m,placeholder:p,value:v,onChange:y,minLength:g,maxLength:b,validate:f,fieldIconUrl:x,isPassword:j}=t;const[A,w]=(0,r.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[e?(0,h.jsxs)("label",{htmlFor:m,className:_,children:[e,f?(0,h.jsx)("span",{className:u,children:" *"}):null]}):null,(0,h.jsx)("div",{className:f?o:n,children:(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{className:i,children:(0,h.jsx)("img",{src:x,alt:"input icon"})}),"password"===a?(0,h.jsx)("input",{className:l,type:A?"text":"password",name:m,maxLength:b,minLength:g,placeholder:p,value:v,onChange:y}):(0,h.jsx)("input",{className:l,type:null!==a&&void 0!==a?a:"text",name:m,maxLength:b,minLength:g,placeholder:p,value:v,onChange:y}),j?(0,h.jsx)("img",{alt:"password icon",className:c,src:"".concat(d.nj,A?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:()=>{w((t=>!t))}}):null]})})]})}},19335:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var r=a(27331),n=a(63244),o=a(80184);const s=t=>{let{customStyle:e}=t;return(0,o.jsx)("div",{className:n.Z.circle_loading,style:e})},i=t=>{let{type:e,buttonText:a,disabled:n,customStyleButton:i,customStyleButtonText:_}=t;return(0,o.jsxs)("button",{type:e,disabled:n,style:i,className:r.Z.auth_submit_btn,children:[(0,o.jsx)("span",{style:{..._},children:a}),n&&(0,o.jsx)(s,{})]})}},93638:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});var r=a(39230),n=a(80476),o=a(80184);const s=t=>{let{label:e,count:a,onAction:s,customStyle:i,isTranslate:_}=t;const{t:l}=(0,r.$G)();return _?(0,o.jsxs)("div",{className:n.Z.create_btn_container,onClick:s,style:i,children:[a>0?(0,o.jsxs)("span",{children:[a," "]}):null,e]}):(0,o.jsxs)("div",{className:n.Z.create_btn_container,onClick:s,style:i,children:[a>0?(0,o.jsxs)("span",{children:[a," "]}):null,l(e)]})}},85794:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var r=a(72791),n=a(54164),o=a(15783),s=a(98684),i=a(80184);const _=t=>{let{onClose:e,isVariant:a,isHide:r,children:_}=t;return n.createPortal((0,i.jsx)("div",{children:(0,i.jsx)("div",{className:r?o.Z.notify_hide_overlay:o.Z.notify_overlay,children:(0,i.jsxs)("div",{className:o.Z.notify_container,style:{"--notify-bg-color":a},children:[_,(0,i.jsx)("img",{src:"".concat(s.Fk,"/close-white.svg"),alt:"close icon",onClick:e,className:o.Z.notify_close})]})})}),document.getElementById("notify-alert"))},l={success:"green",error:"#ed4a4a",warning:"orange"},u=t=>{var e;let{eventState:a,eventStateHandler:n}=t;const[s,u]=(0,r.useState)(!1);return null!==a&&void 0!==a&&a.open?(0,i.jsx)(_,{onClose:()=>{u(!0);let t=setTimeout((()=>{n((t=>({...t,open:!1,msg:"",variant:"success"}))),u(!1)}),500);return()=>clearTimeout(t)},isVariant:l[null===a||void 0===a?void 0:a.variant],isHide:s,children:(0,i.jsx)("h6",{className:o.Z.notify_message,children:null!==(e=null===a||void 0===a?void 0:a.msg)&&void 0!==e?e:""})}):null}},99183:(t,e,a)=>{"use strict";a.d(e,{l:()=>r,x:()=>n});const r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a={};for(let r in t)null!==e&&void 0!==e&&e.includes(r)||t[r]||(a[r]="* required");return a},n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let e in t)return!1;return!0}},27331:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},63244:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},80476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},15783:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});const r={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},42480:()=>{}}]);
//# sourceMappingURL=46543.cf878afc.chunk.js.map