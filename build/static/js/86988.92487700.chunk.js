"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[86988,10311],{15786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(72791),i=n(96873),l=n(51317),o=n(39230),s=n(27331),r=n(802),_=n(53579),d=n(80184);const c="USER_MOBILE",u="USER_NAME",v="INSTITUTE_USER_NAME",m=[c,u],h=()=>{const{t:e}=(0,o.$G)(),[t,n]=(0,a.useState)("USER_MOBILE"),i=()=>{n(c)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:s.Z.auth_login_tab_container,children:[(0,d.jsx)("div",{className:null!==m&&void 0!==m&&m.includes(t)?s.Z.auth_login_tab_active:s.Z.auth_login_tab,onClick:i,children:e("user_staff_student")}),(0,d.jsx)("div",{className:t===v?s.Z.auth_login_tab_active:s.Z.auth_login_tab,onClick:()=>{n(v)},children:e("institute")})]}),t===c?(0,d.jsx)(_.Z,{onUserName:()=>{n(u)}}):t===u?(0,d.jsx)(r.Z,{isUser:!0,onUserMobile:i}):(0,d.jsx)(r.Z,{})]})};var p=n(51875);const y=()=>{const{autoLogin:e}=(0,p.H)();return(0,a.useEffect)((()=>{e()}),[]),(0,d.jsx)(i.Z,{children:(0,d.jsx)(l.Z,{children:(0,d.jsx)(h,{})})})}},51317:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(72791),i=n(27331),l=n(39230),o=n(93638),s=n(80184);const r=e=>{let{title:t,subTitle:n,titleStyle:a,subTitleStyle:r,isCreate:_,onCreate:d,children:c}=e;const{t:u}=(0,l.$G)();return(0,s.jsxs)("div",{className:i.Z.auth_card_wrapper,children:[_?(0,s.jsxs)("div",{className:i.Z.auth_create_container,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{className:i.Z.auth_card_title,style:a,children:u(t||"hello")}),(0,s.jsx)("h6",{className:i.Z.auth_card_subtitle,style:r,children:n||u("welcome_to_qviple")})]}),(0,s.jsx)(o.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:d})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h6",{className:i.Z.auth_card_title,style:a,children:u(t||"hello")}),(0,s.jsx)("h6",{className:i.Z.auth_card_subtitle,style:r,children:n||u("welcome_to_qviple")})]}),c]})},_=(0,a.memo)(r)},53579:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(72791),i=n(39230),l=n(61578),o=n(19335),s=n(27331),r=n(98684),_=n(21625),d=n(85794),c=n(53141),u=n(16871),v=n(43504),m=n(79992),h=n(80184);const p=e=>{let{onUserName:t,accessFrom:n}=e;const{t:p}=(0,i.$G)(),y=(0,u.s0)(),[g]=(0,v.lr)(),[b]=(0,_.Pv)(),[f,x]=(0,a.useState)(""),[j,Z]=(0,a.useState)(!1),[N,U]=(0,a.useState)(""),[k,S]=(0,a.useState)({open:!1,msg:"",variant:"error"});return(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault(),f?(Z((e=>!e)),b({userPhoneNumber:f,status:"Not Verified",is_qid:(0,c.CG)(f)}).then((e=>{var t;let a=(0,m.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);null!==a&&void 0!==a&&a.userPhoneNumber&&(y("/verify",{state:{phoneNumber:null===a||void 0===a?void 0:a.ePhone,type:"qviple id"===(0,c.ZM)(f)?"mobile number":(0,c.ZM)(f),accessFrom:n,landingPage:{appId:null===g||void 0===g?void 0:g.get("goaid"),instituteId:null===g||void 0===g?void 0:g.get("goid"),departmentId:null===g||void 0===g?void 0:g.get("godid"),applicationName:null===g||void 0===g?void 0:g.get("gon"),hostelId:null===g||void 0===g?void 0:g.get("gohid"),isHostel:null===g||void 0===g?void 0:g.get("gov")}}}),Z((e=>!e)))})).catch((()=>{S({open:!0,msg:"Time out of request...",variant:"error"})}))):U({state:"* required"})},className:s.Z.auth_login_form,children:[(0,h.jsx)(l.Z,{label:p("user_email_number_qviple_id"),placeholder:p("user_email_number_qviple_id_placeholder"),fieldIconUrl:"".concat(r.nj,"/auth-flag.svg"),validate:N.state,name:"mobile_number",value:f,onChange:e=>{x(e.target.value)}}),(0,h.jsxs)("p",{className:s.Z.auth_privacy_and_policy,children:[p("mobile_login_note")," ",(0,h.jsx)("span",{className:s.Z.auth_privacy_and_policy_link,children:(0,h.jsx)("a",{href:"/q/terms/condition",children:p("terms_condition")})})," ",p("and"),(0,h.jsx)("span",{className:s.Z.auth_privacy_and_policy_link,children:(0,h.jsx)("a",{href:"/q/privacy/policy",children:p("privacy_policy")})})]}),(0,h.jsx)(o.Z,{type:"submit",buttonText:p("send_otp"),disabled:j}),(0,h.jsx)("div",{className:s.Z.auth_footer_container,children:(0,h.jsx)("p",{className:s.Z.auth_forget_text,onClick:t,children:p("login_with_user_name")})}),(0,h.jsx)(d.Z,{eventState:k,eventStateHandler:S})]})}},802:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(72791),i=n(39230),l=n(61578),o=n(19335),s=n(27331),r=n(98684),_=n(21625),d=n(85794),c=n(99183),u=n(59574),v=n(53141),m=n(79992),h=n(16871),p=n(80184);const y=e=>{let{isUser:t,onUserMobile:n,accessFrom:y}=e;const{t:g}=(0,i.$G)(),b=(0,h.s0)(),[f,x]=(0,a.useState)({insUserName:"",insPassword:""}),[j,Z]=(0,a.useState)(!1),[N,U]=(0,a.useState)(""),[k,S]=(0,a.useState)({open:!1,msg:"",variant:"error"}),[w]=(0,_.xk)(),{userDispatchAction:C,instituteDispatchAction:q}=(0,u.f)(),I=e=>{x((t=>({...t,[e.target.name]:e.target.value})))};return(0,p.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=(0,c.l)(f);(0,c.x)(t)?(Z((e=>!e)),(0,v.jU)(null===f||void 0===f?void 0:f.insUserName)?S({msg:"Special Character not allowed in username.",open:!0,variant:"error"}):w({login:f}).then((e=>{var t;const n=(0,m.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);var a,i,l,o,s;null!==n&&void 0!==n&&n.login?null!==n&&void 0!==n&&n.user?C({token:null===n||void 0===n?void 0:n.token,user:null===n||void 0===n?void 0:n.user,isUniversal:null===n||void 0===n||null===(a=n.user)||void 0===a?void 0:a.is_universal,phoneNumber:null===n||void 0===n||null===(i=n.user)||void 0===i?void 0:i.code_arr,u_name:(null===n||void 0===n||null===(l=n.user)||void 0===l?void 0:l.userPhoneNumber)||(null===n||void 0===n||null===(o=n.user)||void 0===o?void 0:o.userEmail),accessFrom:y}):q({token:null===n||void 0===n?void 0:n.token,institute:null===n||void 0===n?void 0:n.institute,isUniversal:null===n||void 0===n||null===(s=n.institute)||void 0===s?void 0:s.is_universal,main_role:null===n||void 0===n?void 0:n.main_role}):S({msg:"Invalid Credentials",open:!0,variant:"error"});Z((e=>!e))})).catch((e=>{S({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),Z((e=>!e))}))):U(t)},children:[(0,p.jsx)(l.Z,{label:g("username"),placeholder:g("username_placeholder"),fieldIconUrl:"".concat(r.nj,"/auth-user.svg"),validate:N.insUserName,name:"insUserName",value:f.insUserName,onChange:I}),(0,p.jsx)(l.Z,{label:g("password"),placeholder:g("password_placeholder"),fieldIconUrl:"".concat(r.nj,"/auth-password.svg"),validate:N.insPassword,name:"insPassword",value:f.insPassword,onChange:I,type:"password",isPassword:!0}),(0,p.jsx)("div",{className:s.Z.auth_forget_container,children:(0,p.jsx)("p",{className:s.Z.auth_forget_text,onClick:()=>{let e="";e=t?"/user/forget":"/institute/forget",b(e)},children:g("forgot_password")})}),(0,p.jsx)(o.Z,{type:"submit",buttonText:g("login"),disabled:j}),t?(0,p.jsx)("div",{className:s.Z.auth_footer_container,children:(0,p.jsx)("p",{className:s.Z.auth_forget_text,onClick:n,children:g("continue_with_mobile_no")})}):(0,p.jsx)("div",{className:s.Z.auth_footer_container,children:(0,p.jsxs)("p",{className:s.Z.auth_forget_text,onClick:()=>{b("/institute")},children:[g("new_to_qviple")," ",g("signup")]})}),(0,p.jsx)(d.Z,{eventState:k,eventStateHandler:S})]})}},93638:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(39230),i=n(80476),l=n(80184);const o=e=>{let{label:t,count:n,onAction:o,customStyle:s,isTranslate:r}=e;const{t:_}=(0,a.$G)();return r?(0,l.jsxs)("div",{className:i.Z.create_btn_container,onClick:o,style:s,children:[n>0?(0,l.jsxs)("span",{children:[n," "]}):null,t]}):(0,l.jsxs)("div",{className:i.Z.create_btn_container,onClick:o,style:s,children:[n>0?(0,l.jsxs)("span",{children:[n," "]}):null,_(t)]})}},85794:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(72791),i=n(54164),l=n(15783),o=n(98684),s=n(80184);const r=e=>{let{onClose:t,isVariant:n,isHide:a,children:r}=e;return i.createPortal((0,s.jsx)("div",{children:(0,s.jsx)("div",{className:a?l.Z.notify_hide_overlay:l.Z.notify_overlay,children:(0,s.jsxs)("div",{className:l.Z.notify_container,style:{"--notify-bg-color":n},children:[r,(0,s.jsx)("img",{src:"".concat(o.Fk,"/close-white.svg"),alt:"close icon",onClick:t,className:l.Z.notify_close})]})})}),document.getElementById("notify-alert"))},_={success:"green",error:"#ed4a4a",warning:"orange"},d=e=>{var t;let{eventState:n,eventStateHandler:i}=e;const[o,d]=(0,a.useState)(!1);return null!==n&&void 0!==n&&n.open?(0,s.jsx)(r,{onClose:()=>{d(!0);let e=setTimeout((()=>{i((e=>({...e,open:!1,msg:"",variant:"success"}))),d(!1)}),500);return()=>clearTimeout(e)},isVariant:_[null===n||void 0===n?void 0:n.variant],isHide:o,children:(0,s.jsx)("h6",{className:l.Z.notify_message,children:null!==(t=null===n||void 0===n?void 0:n.msg)&&void 0!==t?t:""})}):null}},53141:(e,t,n)=>{n.d(t,{CG:()=>l,ZM:()=>o,jU:()=>i});const a=["!","@","#","$","%","^","&","*","(",")","+","~",".",",","/",":",";"],i=e=>!!a.includes(e),l=e=>(null===e||void 0===e||!e.includes("@"))&&8===(null===e||void 0===e?void 0:e.length),o=e=>null!==e&&void 0!==e&&e.includes("@")?"e-mail":8===(null===e||void 0===e?void 0:e.length)?"qviple id":"mobile number"},99183:(e,t,n)=>{n.d(t,{l:()=>a,x:()=>i});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let a in e)null!==t&&void 0!==t&&t.includes(a)||e[a]||(n[a]="* required");return n},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},80476:(e,t,n)=>{n.d(t,{Z:()=>a});const a={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},15783:(e,t,n)=>{n.d(t,{Z:()=>a});const a={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=86988.92487700.chunk.js.map