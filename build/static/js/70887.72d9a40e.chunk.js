"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[70887],{51317:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(72791),a=n(27331),o=n(39230),s=n(93638),r=n(80184);const i=e=>{let{title:t,subTitle:n,titleStyle:l,subTitleStyle:i,isCreate:c,onCreate:u,children:d}=e;const{t:_}=(0,o.$G)();return(0,r.jsxs)("div",{className:a.Z.auth_card_wrapper,children:[c?(0,r.jsxs)("div",{className:a.Z.auth_create_container,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{className:a.Z.auth_card_title,style:l,children:_(t||"hello")}),(0,r.jsx)("h6",{className:a.Z.auth_card_subtitle,style:i,children:n||_("welcome_to_qviple")})]}),(0,r.jsx)(s.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:u})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h6",{className:a.Z.auth_card_title,style:l,children:_(t||"hello")}),(0,r.jsx)("h6",{className:a.Z.auth_card_subtitle,style:i,children:n||_("welcome_to_qviple")})]}),d]})},c=(0,l.memo)(i)},70887:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var l=n(72791),a=n(96873),o=n(51317),s=n(39230),r=n(85794),i=n(61578),c=n(27331),u=n(99183),d=n(53982),_=n(98684),h=n(19335),v=n(61932),m=n(16871),p=n(53141),x=n(79992),b=n(80184);const g=()=>{var e,t,n,g,j,f;const{t:N}=(0,s.$G)(),Z=(0,m.s0)(),w=(0,m.TH)(),[C,y]=(0,l.useState)({userOtpCode:""}),[F,S]=(0,l.useState)(!1),[k,A]=(0,l.useState)(""),[T,O]=(0,l.useState)({open:!1,msg:"",variant:"error"}),[q]=(0,d.Dr)(),[G]=(0,d.Pv)();return(0,b.jsx)(a.Z,{children:(0,b.jsx)(o.Z,{title:"forget_password_verification_code",subTitle:"".concat(N("verification_code_note")).concat(null!==(e=null===(t=w.state)||void 0===t?void 0:t.type)&&void 0!==e?e:"").concat(N("ending")," ").concat(null===(n="".concat(null===w||void 0===w||null===(g=w.state)||void 0===g?void 0:g.phoneNumber))||void 0===n?void 0:n.substring((null===(j="".concat(null===w||void 0===w||null===(f=w.state)||void 0===f?void 0:f.phoneNumber))||void 0===j?void 0:j.length)-4)),subTitleStyle:{fontSize:"0.7rem"},titleStyle:{fontSize:"1rem"},children:(0,b.jsxs)("form",{onSubmit:e=>{var t;e.preventDefault();let n=(0,u.l)(C);var l;(0,u.x)(n)&&null!==(t=w.state)&&void 0!==t&&t.uid?(S((e=>!e)),q({uid:null===(l=w.state)||void 0===l?void 0:l.uid,otp:C}).then((e=>{var t,n;let l=(0,x.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);var a;null!==l&&void 0!==l&&null!==(n=l.user)&&void 0!==n&&n._id?Z("/user/forget/password",{state:{uid:null===l||void 0===l||null===(a=l.user)||void 0===a?void 0:a._id}}):O({msg:"Invalid Otp",open:!0,variant:"error"});S((e=>!e))})).catch((e=>{O({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),S((e=>!e))}))):A(n)},className:c.Z.auth_login_form,children:[(0,b.jsx)(i.Z,{placeholder:N("verification_code"),fieldIconUrl:"".concat(_.nj,"/auth-otp.svg"),maxLength:"4",validate:k.userOtpCode,name:"userOtpCode",value:C.userOtpCode,onChange:e=>{y((t=>({...t,userOtpCode:e.target.value})))}}),(0,b.jsx)("div",{className:c.Z.auth_footer_container,children:(0,b.jsxs)("p",{className:c.Z.auth_otp_text,children:[N("if_you_did_not_recieve_otp"),(0,b.jsx)(v.Z,{onOtpResend:()=>{var e,t,n;null!==w&&void 0!==w&&null!==(e=w.state)&&void 0!==e&&e.phoneNumber&&G({userPhoneNumber:"".concat(null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.phoneNumber),status:"Not Verified",is_qid:(0,p.CG)("".concat(null===w||void 0===w||null===(n=w.state)||void 0===n?void 0:n.phoneNumber))}).then((e=>{var t;let n=(0,x.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);var l,a,o,s;null!==n&&void 0!==n&&n.userPhoneNumber&&O({open:!0,msg:"Code will be resent to xxxx- ".concat(null===(l="".concat(null===w||void 0===w||null===(a=w.state)||void 0===a?void 0:a.phoneNumber))||void 0===l?void 0:l.substring((null===(o="".concat(null===w||void 0===w||null===(s=w.state)||void 0===s?void 0:s.phoneNumber))||void 0===o?void 0:o.length)-4)),variant:"success"})})).catch((()=>{O({open:!0,msg:"Time out of request...",variant:"error"})}))}})]})}),(0,b.jsx)(h.Z,{type:"submit",buttonText:N("verify"),disabled:F}),(0,b.jsx)(r.Z,{eventState:T,eventStateHandler:O})]})})})}},61932:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(72791),a=n(39230),o=n(27331),s=n(80184);const r=e=>{let{onOtpResend:t}=e;const{t:n}=(0,a.$G)(),[r,i]=(0,l.useState)(""),c=(0,l.useRef)(null),u=e=>{let{total:t,seconds:n}=(e=>{const t=Date.parse(e)-Date.parse(new Date);return{total:t,seconds:Math.floor(t/1e3%60)}})(e);t>=0&&i(n)},d=e=>{i("40"),c.current&&clearInterval(c.current);const t=setInterval((()=>{u(e)}),1e3);c.current=t},_=()=>{let e=new Date;return e.setSeconds(e.getSeconds()+40),e};(0,l.useEffect)((()=>{d(_())}),[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:o.Z.auth_otp_resend,onClick:()=>{r||(t(),d(_()))},children:[" ",n("resend")," "]}),(0,s.jsx)("span",{className:o.Z.auth_otp_resend,children:r})]})},i=(0,l.memo)(r)},61578:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(72791);const a="AuthFormField_auth_input_container__4XCiB",o="AuthFormField_auth_input_container_error__ho7RI",s="AuthFormField_auth_input_container_inner__3YVnH",r="AuthFormField_auth_input_image_container__vkGgA",i="AuthFormField_auth_input_label__YhCLh",c="AuthFormField_auth_input_field__6VdCa",u="AuthFormField_auth_label_error__Wcuw8",d="AuthFormField_auth_passward_icon__VDFPG";var _=n(98684),h=n(80184);const v=e=>{let{label:t,type:n,name:v,placeholder:m,value:p,onChange:x,minLength:b,maxLength:g,validate:j,fieldIconUrl:f,isPassword:N}=e;const[Z,w]=(0,l.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[t?(0,h.jsxs)("label",{htmlFor:v,className:i,children:[t,j?(0,h.jsx)("span",{className:u,children:" *"}):null]}):null,(0,h.jsx)("div",{className:j?o:a,children:(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{className:r,children:(0,h.jsx)("img",{src:f,alt:"input icon"})}),"password"===n?(0,h.jsx)("input",{className:c,type:Z?"text":"password",name:v,maxLength:g,minLength:b,placeholder:m,value:p,onChange:x}):(0,h.jsx)("input",{className:c,type:null!==n&&void 0!==n?n:"text",name:v,maxLength:g,minLength:b,placeholder:m,value:p,onChange:x}),N?(0,h.jsx)("img",{alt:"password icon",className:d,src:"".concat(_.nj,Z?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:()=>{w((e=>!e))}}):null]})})]})}},93638:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(39230),a=n(80476),o=n(80184);const s=e=>{let{label:t,count:n,onAction:s,customStyle:r,isTranslate:i}=e;const{t:c}=(0,l.$G)();return i?(0,o.jsxs)("div",{className:a.Z.create_btn_container,onClick:s,style:r,children:[n>0?(0,o.jsxs)("span",{children:[n," "]}):null,t]}):(0,o.jsxs)("div",{className:a.Z.create_btn_container,onClick:s,style:r,children:[n>0?(0,o.jsxs)("span",{children:[n," "]}):null,c(t)]})}},99183:(e,t,n)=>{n.d(t,{l:()=>l,x:()=>a});const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let l in e)null!==t&&void 0!==t&&t.includes(l)||e[l]||(n[l]="* required");return n},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},80476:(e,t,n)=>{n.d(t,{Z:()=>l});const l={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=70887.72d9a40e.chunk.js.map