"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3676],{52281:function(n,e,t){var i=t(1413),a=t(29439),o=t(72791),r=t(18248),l=t(39230),s=t(16871),u=t(51561),c=t(29899),d=t(98734),_=t(80184);e.Z=function(n){var e,t=n.dashboardData,v=n.userId,m=(n.isApk,(0,s.s0)(),(0,l.$G)().t),h=(0,o.useState)({password:""}),f=(0,a.Z)(h,2),p=f[0],y=f[1],g=(0,c.E8)(),x=(0,a.Z)(g,1)[0],Z=(0,o.useState)(!1),j=(0,a.Z)(Z,2),b=j[0],N=j[1],U=(0,o.useState)({msg:"",run:!1}),w=(0,a.Z)(U,2),C=w[0],k=w[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:r.Z.settingBody,children:[(0,_.jsx)("h6",{children:m("deleting_your_qviple_account")}),(0,_.jsx)("p",{children:m("deleting_your_qviple_account_note_1")}),(0,_.jsx)("p",{children:m("deleting_your_qviple_account_note_2")}),(0,_.jsxs)("div",{className:r.Z.inputContainer,children:[(0,_.jsx)("label",{children:m("password")}),(0,_.jsx)("input",{type:"password",value:p.password,minLength:8,onChange:function(n){return y((0,i.Z)((0,i.Z)({},p),{},{password:n.target.value}))}})]}),(null===(e=p.password)||void 0===e?void 0:e.length)>=8?(0,_.jsx)("button",{className:"".concat(r.Z.btn),type:"button",onClick:function(){var n,e;(v||null!==t&&void 0!==t&&null!==(n=t.user)&&void 0!==n&&n._id)&&(N((function(n){return!n})),x({id:v||(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e._id),valid_pass:p.password}).then((function(n){var e;console.info("sdlfngjkfbkjgs",n.data),null!==n&&void 0!==n&&null!==(e=n.data)&&void 0!==e&&e.dynamic?(k({msg:n.data.dynamic,run:!0}),N((function(n){return!n}))):(N((function(n){return!n})),localStorage.clear(),window.location.replace("/"))})).catch({}))},children:m("delete")}):(0,_.jsx)("button",{type:"button",className:"".concat(r.Z.btn1),disabled:!0,children:m("delete")})]}),C.run&&(0,_.jsx)(u.Ch,{msg:C.msg,run:C.run,setRun:function(){return k({msg:"",run:!1})},postiton:"bottom",type:"error"}),b&&(0,_.jsx)(d.Z,{})]})}},48579:function(n,e,t){t.r(e);var i=t(29439),a=t(96873),o=t(27331),r=t(72791),l=t(53579),s=t(802),u=t(43504),c=t(16871),d=t(52281),_=t(80184),v="USER_MOBILE",m="USER_NAME";e.default=function(){var n,e=(0,u.lr)(),t=(0,i.Z)(e,1)[0],h=(0,c.TH)(),f=(0,r.useState)("USER_MOBILE"),p=(0,i.Z)(f,2),y=p[0],g=p[1];return(0,_.jsx)(_.Fragment,{children:"confirm"===t.get("type")?(0,_.jsx)("div",{className:o.Z.auth_delete_container,children:(0,_.jsx)(d.Z,{userId:null===(n=h.state)||void 0===n?void 0:n.id,isApk:!0})}):(0,_.jsx)(a.Z,{children:(0,_.jsx)("div",{className:o.Z.auth_card_wrapper,children:(0,_.jsx)(_.Fragment,{children:y===v?(0,_.jsx)(l.Z,{onUserName:function(){g(m)},accessFrom:"DELETED_ACCOUNT"}):y===m?(0,_.jsx)(s.Z,{isUser:!0,onUserMobile:function(){g(v)},accessFrom:"DELETED_ACCOUNT"}):null})})})})}},53579:function(n,e,t){var i=t(29439),a=t(72791),o=t(39230),r=t(61578),l=t(19335),s=t(27331),u=t(98684),c=t(53982),d=t(85794),_=t(53141),v=t(16871),m=t(79992),h=t(80184);e.Z=function(n){var e=n.onUserName,t=n.accessFrom,f=(0,o.$G)().t,p=(0,v.s0)(),y=(0,c.Pv)(),g=(0,i.Z)(y,1)[0],x=(0,a.useState)(""),Z=(0,i.Z)(x,2),j=Z[0],b=Z[1],N=(0,a.useState)(!1),U=(0,i.Z)(N,2),w=U[0],C=U[1],k=(0,a.useState)(""),F=(0,i.Z)(k,2),S=F[0],A=F[1],q=(0,a.useState)({open:!1,msg:"",variant:"error"}),E=(0,i.Z)(q,2),D=E[0],L=E[1];return(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),j?(C((function(n){return!n})),g({userPhoneNumber:j,status:"Not Verified",is_qid:(0,_.CG)(j)}).then((function(n){var e,i=(0,m.ZH)(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.encrypt);null!==i&&void 0!==i&&i.userPhoneNumber&&(p("/verify",{state:{phoneNumber:null===i||void 0===i?void 0:i.ePhone,type:"qviple id"===(0,_.ZM)(j)?"mobile number":(0,_.ZM)(j),accessFrom:t}}),C((function(n){return!n})))})).catch((function(){L({open:!0,msg:"Time out of request...",variant:"error"})}))):A({state:"* required"})},className:s.Z.auth_login_form,children:[(0,h.jsx)(r.Z,{label:f("user_email_number_qviple_id"),placeholder:f("user_email_number_qviple_id_placeholder"),fieldIconUrl:"".concat(u.nj,"/auth-flag.svg"),validate:S.state,name:"mobile_number",value:j,onChange:function(n){b(n.target.value)}}),(0,h.jsxs)("p",{className:s.Z.auth_privacy_and_policy,children:[f("mobile_login_note")," ",(0,h.jsx)("span",{className:s.Z.auth_privacy_and_policy_link,children:(0,h.jsx)("a",{href:"/q/terms/condition",children:f("terms_condition")})})," ",f("and"),(0,h.jsx)("span",{className:s.Z.auth_privacy_and_policy_link,children:(0,h.jsx)("a",{href:"/q/privacy/policy",children:f("privacy_policy")})})]}),(0,h.jsx)(l.Z,{type:"submit",buttonText:f("send_otp"),disabled:w}),(0,h.jsx)("div",{className:s.Z.auth_footer_container,children:(0,h.jsx)("p",{className:s.Z.auth_forget_text,onClick:e,children:f("login_with_user_name")})}),(0,h.jsx)(d.Z,{eventState:D,eventStateHandler:L})]})}},802:function(n,e,t){var i=t(4942),a=t(1413),o=t(29439),r=t(72791),l=t(39230),s=t(61578),u=t(19335),c=t(27331),d=t(98684),_=t(53982),v=t(85794),m=t(99183),h=t(59574),f=t(53141),p=t(79992),y=t(16871),g=t(80184);e.Z=function(n){var e=n.isUser,t=n.onUserMobile,x=n.accessFrom,Z=(0,l.$G)().t,j=(0,y.s0)(),b=(0,r.useState)({insUserName:"",insPassword:""}),N=(0,o.Z)(b,2),U=N[0],w=N[1],C=(0,r.useState)(!1),k=(0,o.Z)(C,2),F=k[0],S=k[1],A=(0,r.useState)(""),q=(0,o.Z)(A,2),E=q[0],D=q[1],L=(0,r.useState)({open:!1,msg:"",variant:"error"}),P=(0,o.Z)(L,2),T=P[0],I=P[1],H=(0,_.xk)(),M=(0,o.Z)(H,1)[0],B=(0,h.f)(),G=B.userDispatchAction,V=B.instituteDispatchAction,O=function(n){w((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,i.Z)({},n.target.name,n.target.value))}))};return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=(0,m.l)(U);(0,m.x)(e)?(S((function(n){return!n})),(0,f.jU)(null===U||void 0===U?void 0:U.insUserName)?I({msg:"Special Character not allowed in username.",open:!0,variant:"error"}):M({login:U}).then((function(n){var e,t,i,a,o,r,l=(0,p.ZH)(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.encrypt);null!==l&&void 0!==l&&l.login?null!==l&&void 0!==l&&l.user?G({token:null===l||void 0===l?void 0:l.token,user:null===l||void 0===l?void 0:l.user,isUniversal:null===l||void 0===l||null===(t=l.user)||void 0===t?void 0:t.is_universal,phoneNumber:null===l||void 0===l||null===(i=l.user)||void 0===i?void 0:i.code_arr,u_name:(null===l||void 0===l||null===(a=l.user)||void 0===a?void 0:a.userPhoneNumber)||(null===l||void 0===l||null===(o=l.user)||void 0===o?void 0:o.userEmail),accessFrom:x}):V({token:null===l||void 0===l?void 0:l.token,institute:null===l||void 0===l?void 0:l.institute,isUniversal:null===l||void 0===l||null===(r=l.institute)||void 0===r?void 0:r.is_universal,main_role:null===l||void 0===l?void 0:l.main_role}):I({msg:"Invalid Credentials",open:!0,variant:"error"});S((function(n){return!n}))})).catch((function(n){I({msg:"Time out of request with reason ".concat(n),open:!0,variant:"error"}),S((function(n){return!n}))}))):D(e)},children:[(0,g.jsx)(s.Z,{label:Z("username"),placeholder:Z("username_placeholder"),fieldIconUrl:"".concat(d.nj,"/auth-user.svg"),validate:E.insUserName,name:"insUserName",value:U.insUserName,onChange:O}),(0,g.jsx)(s.Z,{label:Z("password"),placeholder:Z("password_placeholder"),fieldIconUrl:"".concat(d.nj,"/auth-password.svg"),validate:E.insPassword,name:"insPassword",value:U.insPassword,onChange:O,type:"password",isPassword:!0}),(0,g.jsx)("div",{className:c.Z.auth_forget_container,children:(0,g.jsx)("p",{className:c.Z.auth_forget_text,onClick:function(){j(e?"/user/forget":"/institute/forget")},children:Z("forgot_password")})}),(0,g.jsx)(u.Z,{type:"submit",buttonText:Z("login"),disabled:F}),e?(0,g.jsx)("div",{className:c.Z.auth_footer_container,children:(0,g.jsx)("p",{className:c.Z.auth_forget_text,onClick:t,children:Z("continue_with_mobile_no")})}):(0,g.jsx)("div",{className:c.Z.auth_footer_container,children:(0,g.jsxs)("p",{className:c.Z.auth_forget_text,onClick:function(){j("/institute")},children:[Z("new_to_qviple")," ",Z("signup")]})}),(0,g.jsx)(v.Z,{eventState:T,eventStateHandler:I})]})}},61578:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(29439),a=t(72791),o="AuthFormField_auth_input_container__4XCiB",r="AuthFormField_auth_input_container_error__ho7RI",l="AuthFormField_auth_input_container_inner__3YVnH",s="AuthFormField_auth_input_image_container__vkGgA",u="AuthFormField_auth_input_label__YhCLh",c="AuthFormField_auth_input_field__6VdCa",d="AuthFormField_auth_label_error__Wcuw8",_="AuthFormField_auth_passward_icon__VDFPG",v=t(98684),m=t(80184),h=function(n){var e=n.label,t=n.type,h=n.name,f=n.placeholder,p=n.value,y=n.onChange,g=n.minLength,x=n.maxLength,Z=n.validate,j=n.fieldIconUrl,b=n.isPassword,N=(0,a.useState)(!1),U=(0,i.Z)(N,2),w=U[0],C=U[1];return(0,m.jsxs)(m.Fragment,{children:[e?(0,m.jsxs)("label",{htmlFor:h,className:u,children:[e,Z?(0,m.jsx)("span",{className:d,children:" *"}):null]}):null,(0,m.jsx)("div",{className:Z?r:o,children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("div",{className:s,children:(0,m.jsx)("img",{src:j,alt:"input icon"})}),"password"===t?(0,m.jsx)("input",{className:c,type:w?"text":"password",name:h,maxLength:x,minLength:g,placeholder:f,value:p,onChange:y}):(0,m.jsx)("input",{className:c,type:null!==t&&void 0!==t?t:"text",name:h,maxLength:x,minLength:g,placeholder:f,value:p,onChange:y}),b?(0,m.jsx)("img",{alt:"password icon",className:_,src:"".concat(v.nj,w?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:function(){C((function(n){return!n}))}}):null]})})]})}},85794:function(n,e,t){t.d(e,{Z:function(){return _}});var i=t(1413),a=t(29439),o=t(72791),r=t(54164),l=t(15783),s=t(98684),u=t(80184),c=function(n){var e=n.onClose,t=n.isVariant,i=n.isHide,a=n.children;return r.createPortal((0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:l.Z.notify_backdrop}),(0,u.jsx)("div",{className:i?l.Z.notify_hide_overlay:l.Z.notify_overlay,children:(0,u.jsxs)("div",{className:l.Z.notify_container,style:{"--notify-bg-color":t},children:[a,(0,u.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:e,className:l.Z.notify_close})]})})]}),document.getElementById("notify-alert"))},d={success:"green",error:"#ed4a4a",warning:"orange"},_=function(n){var e,t=n.eventState,r=n.eventStateHandler,s=(0,o.useState)(!1),_=(0,a.Z)(s,2),v=_[0],m=_[1],h=function(){m(!0);var n=setTimeout((function(){r((function(n){return(0,i.Z)((0,i.Z)({},n),{},{open:!1,msg:"",variant:"success"})}))}),500);return function(){return clearTimeout(n)}};return(0,o.useEffect)((function(){var n=setTimeout((function(){h()}),3e3);return function(){clearTimeout(n)}}),[h]),null!==t&&void 0!==t&&t.open?(0,u.jsx)(c,{onClose:h,isVariant:d[null===t||void 0===t?void 0:t.variant],isHide:v,children:(0,u.jsx)("h6",{className:l.Z.notify_message,children:null!==(e=null===t||void 0===t?void 0:t.msg)&&void 0!==e?e:""})}):null}},53141:function(n,e,t){t.d(e,{CG:function(){return o},ZM:function(){return r},jU:function(){return a}});var i=["!","@","#","$","%","^","&","*","(",")","+","~",".",",","/",":",";"],a=function(n){return!!i.includes(n)},o=function(n){return(null===n||void 0===n||!n.includes("@"))&&8===(null===n||void 0===n?void 0:n.length)},r=function(n){return null!==n&&void 0!==n&&n.includes("@")?"e-mail":8===(null===n||void 0===n?void 0:n.length)?"qviple id":"mobile number"}},99183:function(n,e,t){t.d(e,{l:function(){return i},x:function(){return a}});var i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(var i in n)null!==e&&void 0!==e&&e.includes(i)||n[i]||(t[i]="* required");return t},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in n)return!1;return!0}},18248:function(n,e){e.Z={settingBody:"DeleteAcnt_settingBody__5Jnjq",inputContainer:"DeleteAcnt_inputContainer__LhkiC",btn:"DeleteAcnt_btn__acudM",btn1:"DeleteAcnt_btn1__bbdC0"}},15783:function(n,e){e.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=3676.9588974a.chunk.js.map