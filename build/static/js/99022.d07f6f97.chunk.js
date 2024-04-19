"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[99022,10311],{51317:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(72791),l=n(27331),s=n(39230),r=n(93638),i=n(80184);const o=e=>{let{title:t,subTitle:n,titleStyle:a,subTitleStyle:o,isCreate:c,onCreate:u,children:_}=e;const{t:d}=(0,s.$G)();return(0,i.jsxs)("div",{className:l.Z.auth_card_wrapper,children:[c?(0,i.jsxs)("div",{className:l.Z.auth_create_container,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{className:l.Z.auth_card_title,style:a,children:d(t||"hello")}),(0,i.jsx)("h6",{className:l.Z.auth_card_subtitle,style:o,children:n||d("welcome_to_qviple")})]}),(0,i.jsx)(r.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:u})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h6",{className:l.Z.auth_card_title,style:a,children:d(t||"hello")}),(0,i.jsx)("h6",{className:l.Z.auth_card_subtitle,style:o,children:n||d("welcome_to_qviple")})]}),_]})},c=(0,a.memo)(o)},47789:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(72791),l=n(96873),s=n(51317),r=n(39230),i=n(85794),o=n(61578),c=n(27331),u=n(53141),_=n(99183),d=n(53982),h=n(98684),m=n(19335),v=n(16871),p=n(79992),x=n(80184);const b=()=>{const{t:e}=(0,r.$G)(),t=(0,v.s0)(),[n,b]=(0,a.useState)({username:""}),[g,j]=(0,a.useState)(!1),[f,F]=(0,a.useState)(""),[Z,w]=(0,a.useState)({open:!1,msg:"",variant:"error"}),[y]=(0,d.OF)();return(0,x.jsx)(l.Z,{children:(0,x.jsx)(s.Z,{title:"forgot_password_heading",subTitle:e("forgot_passowrd_note"),subTitleStyle:{fontSize:"0.7rem"},titleStyle:{fontSize:"1rem"},children:(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault();let a=(0,_.l)(n);(0,_.x)(a)?(j((e=>!e)),(0,u.jU)(null===n||void 0===n?void 0:n.username)?w({msg:"Special Character not allowed in username.",open:!0,variant:"error"}):y({forgot:n}).then((e=>{var a,l;let s=(0,p.ZH)(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.encrypt);var r;null!==s&&void 0!==s&&null!==(l=s.institute)&&void 0!==l&&l._id?t("/institute/forget/verify",{state:{uid:null===s||void 0===s||null===(r=s.institute)||void 0===r?void 0:r._id,phoneNumber:n.username}}):w({msg:"Invalid Username",open:!0,variant:"error"});j((e=>!e))})).catch((e=>{w({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),j((e=>!e))}))):F(a)},className:c.Z.auth_login_form,children:[(0,x.jsx)(o.Z,{label:e("username"),placeholder:e("username_placeholder"),fieldIconUrl:"".concat(h.nj,"/auth-user.svg"),validate:f.username,name:"username",value:n.username,onChange:e=>{b((t=>({...t,username:e.target.value})))}}),(0,x.jsx)(m.Z,{type:"submit",buttonText:e("find_account"),customStyleButton:{marginTop:"4rem"},disabled:g}),(0,x.jsx)(i.Z,{eventState:Z,eventStateHandler:w})]})})})}},61578:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(72791);const l="AuthFormField_auth_input_container__4XCiB",s="AuthFormField_auth_input_container_error__ho7RI",r="AuthFormField_auth_input_container_inner__3YVnH",i="AuthFormField_auth_input_image_container__vkGgA",o="AuthFormField_auth_input_label__YhCLh",c="AuthFormField_auth_input_field__6VdCa",u="AuthFormField_auth_label_error__Wcuw8",_="AuthFormField_auth_passward_icon__VDFPG";var d=n(98684),h=n(80184);const m=e=>{let{label:t,type:n,name:m,placeholder:v,value:p,onChange:x,minLength:b,maxLength:g,validate:j,fieldIconUrl:f,isPassword:F}=e;const[Z,w]=(0,a.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[t?(0,h.jsxs)("label",{htmlFor:m,className:o,children:[t,j?(0,h.jsx)("span",{className:u,children:" *"}):null]}):null,(0,h.jsx)("div",{className:j?s:l,children:(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("div",{className:i,children:(0,h.jsx)("img",{src:f,alt:"input icon"})}),"password"===n?(0,h.jsx)("input",{className:c,type:Z?"text":"password",name:m,maxLength:g,minLength:b,placeholder:v,value:p,onChange:x}):(0,h.jsx)("input",{className:c,type:null!==n&&void 0!==n?n:"text",name:m,maxLength:g,minLength:b,placeholder:v,value:p,onChange:x}),F?(0,h.jsx)("img",{alt:"password icon",className:_,src:"".concat(d.nj,Z?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:()=>{w((e=>!e))}}):null]})})]})}},93638:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(39230),l=n(80476),s=n(80184);const r=e=>{let{label:t,count:n,onAction:r,customStyle:i,isTranslate:o}=e;const{t:c}=(0,a.$G)();return o?(0,s.jsxs)("div",{className:l.Z.create_btn_container,onClick:r,style:i,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,t]}):(0,s.jsxs)("div",{className:l.Z.create_btn_container,onClick:r,style:i,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,c(t)]})}},99183:(e,t,n)=>{n.d(t,{l:()=>a,x:()=>l});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let a in e)null!==t&&void 0!==t&&t.includes(a)||e[a]||(n[a]="* required");return n},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},80476:(e,t,n)=>{n.d(t,{Z:()=>a});const a={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=99022.d07f6f97.chunk.js.map