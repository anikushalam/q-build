"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[54142],{62512:(e,a,i)=>{i.r(a),i.d(a,{default:()=>h});var n=i(72791),t=i(39230),o=i(27331),l=i(85794),_=i(98684),r=i(21625),s=i(16871),d=i(79992),c=i(61578),m=i(19335),v=i(96873),y=i(80184);const h=()=>{const{t:e}=(0,t.$G)(),a=(0,s.s0)(),[i,h]=(0,n.useState)({insPhoneNumber:""}),[u,p]=(0,n.useState)(!1),[b,f]=(0,n.useState)(""),[g,j]=(0,n.useState)({open:!1,msg:"",variant:"error"}),[x]=(0,r.bB)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.Z,{children:(0,y.jsxs)("div",{className:o.Z.auth_card_wrapper,children:[(0,y.jsx)("div",{className:o.Z.auth_create_container,children:(0,y.jsx)("div",{children:(0,y.jsx)("h6",{className:o.Z.auth_card_title,style:{fontSize:"1rem"},children:e("signup")})})}),(0,y.jsx)("div",{className:o.Z.auth_login_form,style:{marginTop:"0"},children:(0,y.jsxs)("form",{onSubmit:e=>{e.preventDefault(),i.insPhoneNumber?(p((e=>!e)),x({phone:{insPhoneNumber:"".concat(i.insPhoneNumber),status:"Not Verified"}}).then((e=>{var i;let n=(0,d.ZH)(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.encrypt);null!==n&&void 0!==n&&n.insPhoneNumber&&(a("/institute/verify",{state:{phoneNumber:null===n||void 0===n?void 0:n.insPhoneNumber}}),p((e=>!e)))})).catch((()=>{j({open:!0,msg:"Time out of request...",variant:"error"})}))):f({insPhoneNumber:"* required"})},children:[(0,y.jsx)(c.Z,{label:e("mobile_number"),placeholder:e("institute_mobile_number_placeholder"),fieldIconUrl:"".concat(_.nj,"/auth-flag.svg"),validate:b.insPhoneNumber,name:"insPhoneNumber",value:i.insPhoneNumber,onChange:e=>{h((a=>({...a,[e.target.name]:e.target.value})))}}),(0,y.jsxs)("p",{className:o.Z.auth_privacy_and_policy,children:[e("mobile_login_note")," ",(0,y.jsx)("span",{className:o.Z.auth_privacy_and_policy_link,children:(0,y.jsx)("a",{href:"/q/terms/condition",children:e("terms_condition")})})," ",e("and"),(0,y.jsx)("span",{className:o.Z.auth_privacy_and_policy_link,children:(0,y.jsx)("a",{href:"/q/privacy/policy",children:e("privacy_policy")})})]}),(0,y.jsx)(m.Z,{type:"submit",buttonText:e("send_otp"),disabled:u,customStyleButton:{marginTop:"1.5rem"}}),(0,y.jsx)("div",{className:o.Z.auth_footer_container,children:(0,y.jsxs)("p",{className:o.Z.auth_forget_text,children:[(0,y.jsx)("span",{style:{color:"rgba(0,0,0,.8)"},children:e("already_registered")}),(0,y.jsxs)("span",{onClick:()=>{a("/")},children:[" ",e("login")]})]})})]})})]})}),(0,y.jsx)(l.Z,{eventState:g,eventStateHandler:j})]})}},85794:(e,a,i)=>{i.d(a,{Z:()=>d});var n=i(72791),t=i(54164),o=i(15783),l=i(98684),_=i(80184);const r=e=>{let{onClose:a,isVariant:i,isHide:n,children:r}=e;return t.createPortal((0,_.jsx)("div",{children:(0,_.jsx)("div",{className:n?o.Z.notify_hide_overlay:o.Z.notify_overlay,children:(0,_.jsxs)("div",{className:o.Z.notify_container,style:{"--notify-bg-color":i},children:[r,(0,_.jsx)("img",{src:"".concat(l.Fk,"/close-white.svg"),alt:"close icon",onClick:a,className:o.Z.notify_close})]})})}),document.getElementById("notify-alert"))},s={success:"green",error:"#ed4a4a",warning:"orange"},d=e=>{var a;let{eventState:i,eventStateHandler:t}=e;const[l,d]=(0,n.useState)(!1);return null!==i&&void 0!==i&&i.open?(0,_.jsx)(r,{onClose:()=>{d(!0);let e=setTimeout((()=>{t((e=>({...e,open:!1,msg:"",variant:"success"}))),d(!1)}),500);return()=>clearTimeout(e)},isVariant:s[null===i||void 0===i?void 0:i.variant],isHide:l,children:(0,_.jsx)("h6",{className:o.Z.notify_message,children:null!==(a=null===i||void 0===i?void 0:i.msg)&&void 0!==a?a:""})}):null}},15783:(e,a,i)=>{i.d(a,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=54142.c61d5bae.chunk.js.map