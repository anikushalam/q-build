"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[13802],{51317:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(72791),o=n(27331),l=n(39230),i=n(93638),r=n(80184);const s=e=>{let{title:t,subTitle:n,titleStyle:a,subTitleStyle:s,isCreate:_,onCreate:c,children:d}=e;const{t:u}=(0,l.$G)();return(0,r.jsxs)("div",{className:o.Z.auth_card_wrapper,children:[_?(0,r.jsxs)("div",{className:o.Z.auth_create_container,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{className:o.Z.auth_card_title,style:a,children:u(t||"hello")}),(0,r.jsx)("h6",{className:o.Z.auth_card_subtitle,style:s,children:n||u("welcome_to_qviple")})]}),(0,r.jsx)(i.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:c})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h6",{className:o.Z.auth_card_title,style:a,children:u(t||"hello")}),(0,r.jsx)("h6",{className:o.Z.auth_card_subtitle,style:s,children:n||u("welcome_to_qviple")})]}),d]})},_=(0,a.memo)(s)},13802:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(72791),o=n(96873),l=n(51317),i=n(39230),r=n(85794),s=n(61578),_=n(27331),c=n(99183),d=n(21625),u=n(98684),v=n(19335),m=n(61932),h=n(16871),y=n(79992),p=n(80184);const f=()=>{const{t:e}=(0,i.$G)(),t=(0,h.s0)(),n=(0,h.TH)(),[f,b]=(0,a.useState)({userOtpCode:""}),[x,j]=(0,a.useState)(!1),[Z,g]=(0,a.useState)(""),[S,w]=(0,a.useState)({open:!1,msg:"",variant:"error"}),[N]=(0,d.Dr)(),[U]=(0,d.OF)();return(0,p.jsx)(o.Z,{children:(0,p.jsx)(l.Z,{title:"forget_password_verification_code",subTitle:"".concat(e("verification_code_note")," mobile number"),subTitleStyle:{fontSize:"0.7rem"},titleStyle:{fontSize:"1rem"},children:(0,p.jsxs)("form",{onSubmit:e=>{var a;e.preventDefault();let o=(0,c.l)(f);var l;(0,c.x)(o)&&null!==(a=n.state)&&void 0!==a&&a.uid?(j((e=>!e)),N({uid:null===(l=n.state)||void 0===l?void 0:l.uid,otp:f}).then((e=>{var n;let a=(0,y.ZH)(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.encrypt);null!==a&&void 0!==a&&a.institute?t("/institute/forget/password",{state:{uid:null===a||void 0===a?void 0:a.institute}}):w({msg:"Invalid Otp",open:!0,variant:"error"}),j((e=>!e))})).catch((e=>{w({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),j((e=>!e))}))):g(o)},className:_.Z.auth_login_form,children:[(0,p.jsx)(s.Z,{placeholder:e("verification_code"),fieldIconUrl:"".concat(u.nj,"/auth-otp.svg"),maxLength:"4",validate:Z.userOtpCode,name:"userOtpCode",value:f.userOtpCode,onChange:e=>{b((t=>({...t,userOtpCode:e.target.value})))}}),(0,p.jsx)("div",{className:_.Z.auth_footer_container,children:(0,p.jsxs)("p",{className:_.Z.auth_otp_text,children:[e("if_you_did_not_recieve_otp"),(0,p.jsx)(m.Z,{onOtpResend:()=>{var e,t;null!==n&&void 0!==n&&null!==(e=n.state)&&void 0!==e&&e.phoneNumber&&U({forgot:{username:null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.phoneNumber}}).then((e=>{var t,n;let a=(0,y.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);null!==a&&void 0!==a&&null!==(n=a.institute)&&void 0!==n&&n._id?w({open:!0,msg:"Code will be resent on mobile number",variant:"success"}):w({msg:"Invalid username",open:!0,variant:"error"}),j((e=>!e))})).catch((e=>{w({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),j((e=>!e))}))}})]})}),(0,p.jsx)(v.Z,{type:"submit",buttonText:e("verify"),disabled:x}),(0,p.jsx)(r.Z,{eventState:S,eventStateHandler:w})]})})})}},61932:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(72791),o=n(39230),l=n(27331),i=n(80184);const r=e=>{let{onOtpResend:t}=e;const{t:n}=(0,o.$G)(),[r,s]=(0,a.useState)(""),_=(0,a.useRef)(null),c=e=>{let{total:t,seconds:n}=(e=>{const t=Date.parse(e)-Date.parse(new Date);return{total:t,seconds:Math.floor(t/1e3%60)}})(e);t>=0&&s(n)},d=e=>{s("40"),_.current&&clearInterval(_.current);const t=setInterval((()=>{c(e)}),1e3);_.current=t},u=()=>{let e=new Date;return e.setSeconds(e.getSeconds()+40),e};(0,a.useEffect)((()=>{d(u())}),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:l.Z.auth_otp_resend,onClick:()=>{r||(t(),d(u()))},children:[" ",n("resend")," "]}),(0,i.jsx)("span",{className:l.Z.auth_otp_resend,children:r})]})},s=(0,a.memo)(r)},93638:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(39230),o=n(80476),l=n(80184);const i=e=>{let{label:t,count:n,onAction:i,customStyle:r,isTranslate:s}=e;const{t:_}=(0,a.$G)();return s?(0,l.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:r,children:[n>0?(0,l.jsxs)("span",{children:[n," "]}):null,t]}):(0,l.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:r,children:[n>0?(0,l.jsxs)("span",{children:[n," "]}):null,_(t)]})}},85794:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(72791),o=n(54164),l=n(15783),i=n(98684),r=n(80184);const s=e=>{let{onClose:t,isVariant:n,isHide:a,children:s}=e;return o.createPortal((0,r.jsx)("div",{children:(0,r.jsx)("div",{className:a?l.Z.notify_hide_overlay:l.Z.notify_overlay,children:(0,r.jsxs)("div",{className:l.Z.notify_container,style:{"--notify-bg-color":n},children:[s,(0,r.jsx)("img",{src:"".concat(i.Fk,"/close-white.svg"),alt:"close icon",onClick:t,className:l.Z.notify_close})]})})}),document.getElementById("notify-alert"))},_={success:"green",error:"#ed4a4a",warning:"orange"},c=e=>{var t;let{eventState:n,eventStateHandler:o}=e;const[i,c]=(0,a.useState)(!1);return null!==n&&void 0!==n&&n.open?(0,r.jsx)(s,{onClose:()=>{c(!0);let e=setTimeout((()=>{o((e=>({...e,open:!1,msg:"",variant:"success"}))),c(!1)}),500);return()=>clearTimeout(e)},isVariant:_[null===n||void 0===n?void 0:n.variant],isHide:i,children:(0,r.jsx)("h6",{className:l.Z.notify_message,children:null!==(t=null===n||void 0===n?void 0:n.msg)&&void 0!==t?t:""})}):null}},99183:(e,t,n)=>{n.d(t,{l:()=>a,x:()=>o});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let a in e)null!==t&&void 0!==t&&t.includes(a)||e[a]||(n[a]="* required");return n},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},80476:(e,t,n)=>{n.d(t,{Z:()=>a});const a={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},15783:(e,t,n)=>{n.d(t,{Z:()=>a});const a={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=13802.24c312d1.chunk.js.map