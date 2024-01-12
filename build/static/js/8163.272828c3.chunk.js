"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[8163,311],{51317:function(e,n,a){var t=a(72791),o=a(27331),r=a(39230),i=a(93638),l=a(80184),s=function(e){var n=e.title,a=e.subTitle,t=e.titleStyle,s=e.subTitleStyle,_=e.isCreate,c=e.onCreate,u=e.children,d=(0,r.$G)().t;return(0,l.jsxs)("div",{className:o.Z.auth_card_wrapper,children:[_?(0,l.jsxs)("div",{className:o.Z.auth_create_container,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h6",{className:o.Z.auth_card_title,style:t,children:d(n||"hello")}),(0,l.jsx)("h6",{className:o.Z.auth_card_subtitle,style:s,children:a||d("welcome_to_qviple")})]}),(0,l.jsx)(i.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:c})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:o.Z.auth_card_title,style:t,children:d(n||"hello")}),(0,l.jsx)("h6",{className:o.Z.auth_card_subtitle,style:s,children:a||d("welcome_to_qviple")})]}),u]})};n.Z=(0,t.memo)(s)},92919:function(e,n,a){a.r(n);var t=a(4942),o=a(1413),r=a(29439),i=a(72791),l=a(96873),s=a(51317),_=a(39230),c=a(85794),u=a(61578),d=a(27331),m=a(99183),v=a(53982),h=a(98684),p=a(19335),f=a(16871),y=a(79992),g=a(80184);n.default=function(){var e=(0,_.$G)().t,n=(0,f.TH)(),a=(0,f.s0)(),x=(0,i.useState)({userPassword:"",userRePassword:""}),w=(0,r.Z)(x,2),b=w[0],j=w[1],Z=(0,i.useState)(!1),N=(0,r.Z)(Z,2),U=(N[0],N[1]),C=(0,i.useState)(""),k=(0,r.Z)(C,2),F=k[0],S=k[1],P=(0,i.useState)({open:!1,msg:"",variant:"error"}),A=(0,r.Z)(P,2),T=A[0],B=A[1],q=(0,v.gS)(),H=(0,r.Z)(q,1)[0],L=function(e){j((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,t.Z)({},e.target.name,e.target.value))}))};return(0,g.jsx)(l.Z,{children:(0,g.jsx)(s.Z,{title:"change_password",subTitle:e("change_password_note"),subTitleStyle:{fontSize:"0.7rem"},children:(0,g.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault();var o,r=(0,m.l)(b);(0,m.x)(r)&&null!==(t=n.state)&&void 0!==t&&t.uid?b.userPassword===b.userRePassword?(U((function(e){return!e})),H({uid:null===(o=n.state)||void 0===o?void 0:o.uid,password:b}).then((function(e){var n,t=(0,y.ZH)(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.encrypt);null!==t&&void 0!==t&&t.institute?a("/"):B({msg:"Invalid Change Password",open:!0,variant:"error"}),U((function(e){return!e}))})).catch((function(e){B({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),U((function(e){return!e}))}))):B({msg:"Please match your password and confirm password",open:!0,variant:"error"}):S(r)},className:d.Z.auth_login_form,children:[(0,g.jsx)(u.Z,{label:e("password"),placeholder:e("password_placeholder"),fieldIconUrl:"".concat(h.nj,"/auth-password.svg"),validate:F.userPassword,name:"userPassword",value:b.userPassword,onChange:L,type:"password",isPassword:!0}),(0,g.jsx)(u.Z,{label:e("confirm_password"),placeholder:e("password_confirm_placeholder"),fieldIconUrl:"".concat(h.nj,"/auth-password.svg"),validate:F.userRePassword,name:"userRePassword",value:b.userRePassword,onChange:L,type:"password",isPassword:!0}),(0,g.jsx)(p.Z,{type:"submit",buttonText:e("submit"),customStyleButton:{marginTop:"5rem"}}),(0,g.jsx)(c.Z,{eventState:T,eventStateHandler:B})]})})})}},61578:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(29439),o=a(72791),r="AuthFormField_auth_input_container__4XCiB",i="AuthFormField_auth_input_container_error__ho7RI",l="AuthFormField_auth_input_container_inner__3YVnH",s="AuthFormField_auth_input_image_container__vkGgA",_="AuthFormField_auth_input_label__YhCLh",c="AuthFormField_auth_input_field__6VdCa",u="AuthFormField_auth_label_error__Wcuw8",d="AuthFormField_auth_passward_icon__VDFPG",m=a(98684),v=a(80184),h=function(e){var n=e.label,a=e.type,h=e.name,p=e.placeholder,f=e.value,y=e.onChange,g=e.minLength,x=e.maxLength,w=e.validate,b=e.fieldIconUrl,j=e.isPassword,Z=(0,o.useState)(!1),N=(0,t.Z)(Z,2),U=N[0],C=N[1];return(0,v.jsxs)(v.Fragment,{children:[n?(0,v.jsxs)("label",{htmlFor:h,className:_,children:[n,w?(0,v.jsx)("span",{className:u,children:" *"}):null]}):null,(0,v.jsx)("div",{className:w?i:r,children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("div",{className:s,children:(0,v.jsx)("img",{src:b,alt:"input icon"})}),"password"===a?(0,v.jsx)("input",{className:c,type:U?"text":"password",name:h,maxLength:x,minLength:g,placeholder:p,value:f,onChange:y}):(0,v.jsx)("input",{className:c,type:null!==a&&void 0!==a?a:"text",name:h,maxLength:x,minLength:g,placeholder:p,value:f,onChange:y}),j?(0,v.jsx)("img",{alt:"password icon",className:d,src:"".concat(m.nj,U?"/auth-close-password.svg":"/auth-open-password.svg"),onClick:function(){C((function(e){return!e}))}}):null]})})]})}},93638:function(e,n,a){var t=a(39230),o=a(80476),r=a(80184);n.Z=function(e){var n=e.label,a=e.count,i=e.onAction,l=e.customStyle,s=e.isTranslate,_=(0,t.$G)().t;return s?(0,r.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:l,children:[a>0?(0,r.jsxs)("span",{children:[a," "]}):null,n]}):(0,r.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:l,children:[a>0?(0,r.jsxs)("span",{children:[a," "]}):null,_(n)]})}},85794:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(1413),o=a(29439),r=a(72791),i=a(54164),l=a(15783),s=a(98684),_=a(80184),c=function(e){var n=e.onClose,a=e.isVariant,t=e.isHide,o=e.children;return i.createPortal((0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:l.Z.notify_backdrop}),(0,_.jsx)("div",{className:t?l.Z.notify_hide_overlay:l.Z.notify_overlay,children:(0,_.jsxs)("div",{className:l.Z.notify_container,style:{"--notify-bg-color":a},children:[o,(0,_.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:n,className:l.Z.notify_close})]})})]}),document.getElementById("notify-alert"))},u={success:"green",error:"#ed4a4a",warning:"orange"},d=function(e){var n,a=e.eventState,i=e.eventStateHandler,s=(0,r.useState)(!1),d=(0,o.Z)(s,2),m=d[0],v=d[1];return null!==a&&void 0!==a&&a.open?(0,_.jsx)(c,{onClose:function(){v(!0);var e=setTimeout((function(){i((function(e){return(0,t.Z)((0,t.Z)({},e),{},{open:!1,msg:"",variant:"success"})})),v(!1)}),500);return function(){return clearTimeout(e)}},isVariant:u[null===a||void 0===a?void 0:a.variant],isHide:m,children:(0,_.jsx)("h6",{className:l.Z.notify_message,children:null!==(n=null===a||void 0===a?void 0:a.msg)&&void 0!==n?n:""})}):null}},99183:function(e,n,a){a.d(n,{l:function(){return t},x:function(){return o}});var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a={};for(var t in e)null!==n&&void 0!==n&&n.includes(t)||e[t]||(a[t]="* required");return a},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in e)return!1;return!0}},80476:function(e,n){n.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG"}},15783:function(e,n){n.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=8163.272828c3.chunk.js.map