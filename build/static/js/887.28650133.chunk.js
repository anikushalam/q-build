"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[887],{51317:function(n,e,t){var i=t(72791),a=t(27331),o=t(39230),l=t(93638),r=t(80184),s=function(n){var e=n.title,t=n.subTitle,i=n.titleStyle,s=n.subTitleStyle,u=n.isCreate,c=n.onCreate,_=n.children,d=(0,o.$G)().t;return(0,r.jsxs)("div",{className:a.Z.auth_card_wrapper,children:[u?(0,r.jsxs)("div",{className:a.Z.auth_create_container,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{className:a.Z.auth_card_title,style:i,children:d(e||"hello")}),(0,r.jsx)("h6",{className:a.Z.auth_card_subtitle,style:s,children:t||d("welcome_to_qviple")})]}),(0,r.jsx)(l.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:c})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h6",{className:a.Z.auth_card_title,style:i,children:d(e||"hello")}),(0,r.jsx)("h6",{className:a.Z.auth_card_subtitle,style:s,children:t||d("welcome_to_qviple")})]}),_]})};e.Z=(0,i.memo)(s)},70887:function(n,e,t){t.r(e);var i=t(1413),a=t(29439),o=t(72791),l=t(96873),r=t(51317),s=t(39230),u=t(85794),c=t(61578),_=t(27331),d=t(99183),v=t(53982),m=t(98684),h=t(19335),f=t(61932),p=t(16871),y=t(53141),x=t(79992),b=t(80184);e.default=function(){var n,e,t,g,Z,j,N=(0,s.$G)().t,C=(0,p.s0)(),w=(0,p.TH)(),S=(0,o.useState)({userOtpCode:""}),U=(0,a.Z)(S,2),k=U[0],F=U[1],A=(0,o.useState)(!1),T=(0,a.Z)(A,2),q=(T[0],T[1]),O=(0,o.useState)(""),G=(0,a.Z)(O,2),H=G[0],L=G[1],B=(0,o.useState)({open:!1,msg:"",variant:"error"}),I=(0,a.Z)(B,2),D=I[0],P=I[1],V=(0,v.Dr)(),R=(0,a.Z)(V,1)[0],Y=(0,v.Pv)(),$=(0,a.Z)(Y,1)[0];return(0,b.jsx)(l.Z,{children:(0,b.jsx)(r.Z,{title:"forget_password_verification_code",subTitle:"".concat(N("verification_code_note")).concat(null!==(n=null===(e=w.state)||void 0===e?void 0:e.type)&&void 0!==n?n:"").concat(N("ending")," ").concat(null===(t="".concat(null===w||void 0===w||null===(g=w.state)||void 0===g?void 0:g.phoneNumber))||void 0===t?void 0:t.substring((null===(Z="".concat(null===w||void 0===w||null===(j=w.state)||void 0===j?void 0:j.phoneNumber))||void 0===Z?void 0:Z.length)-4)),subTitleStyle:{fontSize:"0.7rem"},titleStyle:{fontSize:"1rem"},children:(0,b.jsxs)("form",{onSubmit:function(n){var e;n.preventDefault();var t,i=(0,d.l)(k);(0,d.x)(i)&&null!==(e=w.state)&&void 0!==e&&e.uid?(q((function(n){return!n})),R({uid:null===(t=w.state)||void 0===t?void 0:t.uid,otp:k}).then((function(n){var e,t,i,a=(0,x.ZH)(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.encrypt);null!==a&&void 0!==a&&null!==(t=a.user)&&void 0!==t&&t._id?C("/user/forget/password",{state:{uid:null===a||void 0===a||null===(i=a.user)||void 0===i?void 0:i._id}}):P({msg:"Invalid Otp",open:!0,variant:"error"});q((function(n){return!n}))})).catch((function(n){P({msg:"Time out of request with reason ".concat(n),open:!0,variant:"error"}),q((function(n){return!n}))}))):L(i)},className:_.Z.auth_login_form,children:[(0,b.jsx)(c.Z,{placeholder:N("verification_code"),fieldIconUrl:"".concat(m.nj,"/auth-otp.svg"),maxLength:"4",validate:H.userOtpCode,name:"userOtpCode",value:k.userOtpCode,onChange:function(n){F((function(e){return(0,i.Z)((0,i.Z)({},e),{},{userOtpCode:n.target.value})}))}}),(0,b.jsx)("div",{className:_.Z.auth_footer_container,children:(0,b.jsxs)("p",{className:_.Z.auth_otp_text,children:[N("if_you_did_not_recieve_otp"),(0,b.jsx)(f.Z,{onOtpResend:function(){var n,e,t;null!==w&&void 0!==w&&null!==(n=w.state)&&void 0!==n&&n.phoneNumber&&$({userPhoneNumber:"".concat(null===w||void 0===w||null===(e=w.state)||void 0===e?void 0:e.phoneNumber),status:"Not Verified",is_qid:(0,y.CG)("".concat(null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.phoneNumber))}).then((function(n){var e,t,i,a,o,l=(0,x.ZH)(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.encrypt);null!==l&&void 0!==l&&l.userPhoneNumber&&P({open:!0,msg:"Code will be resent to xxxx- ".concat(null===(t="".concat(null===w||void 0===w||null===(i=w.state)||void 0===i?void 0:i.phoneNumber))||void 0===t?void 0:t.substring((null===(a="".concat(null===w||void 0===w||null===(o=w.state)||void 0===o?void 0:o.phoneNumber))||void 0===a?void 0:a.length)-4)),variant:"success"})})).catch((function(){P({open:!0,msg:"Time out of request...",variant:"error"})}))}})]})}),(0,b.jsx)(h.Z,{type:"submit",buttonText:N("verify")}),(0,b.jsx)(u.Z,{eventState:D,eventStateHandler:P})]})})})}},61932:function(n,e,t){var i=t(29439),a=t(72791),o=t(39230),l=t(27331),r=t(80184),s=function(n){var e=n.onOtpResend,t=(0,o.$G)().t,s=(0,a.useState)(""),u=(0,i.Z)(s,2),c=u[0],_=u[1],d=(0,a.useRef)(null),v=function(n){var e=function(n){var e=Date.parse(n)-Date.parse(new Date);return{total:e,seconds:Math.floor(e/1e3%60)}}(n),t=e.total,i=e.seconds;t>=0&&_(i)},m=function(n){_("40"),d.current&&clearInterval(d.current);var e=setInterval((function(){v(n)}),1e3);d.current=e},h=function(){var n=new Date;return n.setSeconds(n.getSeconds()+40),n};(0,a.useEffect)((function(){m(h())}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:l.Z.auth_otp_resend,onClick:function(){c||(e(),m(h()))},children:[" ",t("resend")," "]}),(0,r.jsx)("span",{className:l.Z.auth_otp_resend,children:c})]})};e.Z=(0,a.memo)(s)},61578:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(29439),a=t(72791),o="AuthFormField_auth_input_container__4XCiB",l="AuthFormField_auth_input_container_error__ho7RI",r="AuthFormField_auth_input_container_inner__3YVnH",s="AuthFormField_auth_input_image_container__vkGgA",u="AuthFormField_auth_input_label__YhCLh",c="AuthFormField_auth_input_field__6VdCa",_="AuthFormField_auth_label_error__Wcuw8",d="AuthFormField_auth_passward_icon__VDFPG",v=t(98684),m=t(80184),h=function(n){var e=n.label,t=n.type,h=n.name,f=n.placeholder,p=n.value,y=n.onChange,x=n.minLength,b=n.maxLength,g=n.validate,Z=n.fieldIconUrl,j=n.isPassword,N=(0,a.useState)(!1),C=(0,i.Z)(N,2),w=C[0],S=C[1];return(0,m.jsxs)(m.Fragment,{children:[e?(0,m.jsxs)("label",{htmlFor:h,className:u,children:[e,g?(0,m.jsx)("span",{className:_,children:" *"}):null]}):null,(0,m.jsx)("div",{className:g?l:o,children:(0,m.jsxs)("div",{className:r,children:[(0,m.jsx)("div",{className:s,children:(0,m.jsx)("img",{src:Z,alt:"input icon"})}),"password"===t?(0,m.jsx)("input",{className:c,type:w?"text":"password",name:h,maxLength:b,minLength:x,placeholder:f,value:p,onChange:y}):(0,m.jsx)("input",{className:c,type:null!==t&&void 0!==t?t:"text",name:h,maxLength:b,minLength:x,placeholder:f,value:p,onChange:y}),j?(0,m.jsx)("img",{alt:"password icon",className:d,src:"".concat(v.nj,w?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:function(){S((function(n){return!n}))}}):null]})})]})}},93638:function(n,e,t){var i=t(39230),a=t(80476),o=t(80184);e.Z=function(n){var e=n.label,t=n.count,l=n.onAction,r=n.customStyle,s=n.isTranslate,u=(0,i.$G)().t;return s?(0,o.jsxs)("div",{className:a.Z.create_btn_container,onClick:l,style:r,children:[t>0?(0,o.jsxs)("span",{children:[t," "]}):null,e]}):(0,o.jsxs)("div",{className:a.Z.create_btn_container,onClick:l,style:r,children:[t>0?(0,o.jsxs)("span",{children:[t," "]}):null,u(e)]})}},85794:function(n,e,t){t.d(e,{Z:function(){return d}});var i=t(1413),a=t(29439),o=t(72791),l=t(54164),r=t(15783),s=t(98684),u=t(80184),c=function(n){var e=n.onClose,t=n.isVariant,i=n.isHide,a=n.children;return l.createPortal((0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:r.Z.notify_backdrop}),(0,u.jsx)("div",{className:i?r.Z.notify_hide_overlay:r.Z.notify_overlay,children:(0,u.jsxs)("div",{className:r.Z.notify_container,style:{"--notify-bg-color":t},children:[a,(0,u.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:e,className:r.Z.notify_close})]})})]}),document.getElementById("notify-alert"))},_={success:"green",error:"#ed4a4a",warning:"orange"},d=function(n){var e,t=n.eventState,l=n.eventStateHandler,s=(0,o.useState)(!1),d=(0,a.Z)(s,2),v=d[0],m=d[1];return null!==t&&void 0!==t&&t.open?(0,u.jsx)(c,{onClose:function(){m(!0);var n=setTimeout((function(){l((function(n){return(0,i.Z)((0,i.Z)({},n),{},{open:!1,msg:"",variant:"success"})})),m(!1)}),500);return function(){return clearTimeout(n)}},isVariant:_[null===t||void 0===t?void 0:t.variant],isHide:v,children:(0,u.jsx)("h6",{className:r.Z.notify_message,children:null!==(e=null===t||void 0===t?void 0:t.msg)&&void 0!==e?e:""})}):null}},53141:function(n,e,t){t.d(e,{CG:function(){return o},ZM:function(){return l},jU:function(){return a}});var i=["!","@","#","$","%","^","&","*","(",")","+","~",".",",","/",":",";"],a=function(n){return!!i.includes(n)},o=function(n){return(null===n||void 0===n||!n.includes("@"))&&8===(null===n||void 0===n?void 0:n.length)},l=function(n){return null!==n&&void 0!==n&&n.includes("@")?"e-mail":8===(null===n||void 0===n?void 0:n.length)?"qviple id":"mobile number"}},99183:function(n,e,t){t.d(e,{l:function(){return i},x:function(){return a}});var i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(var i in n)null!==e&&void 0!==e&&e.includes(i)||n[i]||(t[i]="* required");return t},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in n)return!1;return!0}},80476:function(n,e){e.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG"}},15783:function(n,e){e.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=887.28650133.chunk.js.map