"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[75024,54035,20420,31743,35067],{53982:(e,t,n)=>{n.d(t,{KB:()=>Q,Dv:()=>H,rY:()=>$,bB:()=>V,J9:()=>Y,xk:()=>D,Ne:()=>K,b5:()=>z,OF:()=>T,Dr:()=>O,Pv:()=>G,d4:()=>J,gS:()=>R,FL:()=>P});var o=n(28328),a=n(94811);const i=e=>e.mutation({query:e=>({url:"/all-images/onefile/web",method:a.Q0,body:e.fileUpload})}),l=e=>e.query({query:e=>"/auth/username/search?u_name=".concat(e)}),r=e=>e.query({query:e=>"/auth/email/check/redundant?email=".concat(e)}),_=e=>e.mutation({query:e=>({url:"/auth/login",method:a.a4,body:e.login})}),s=e=>e.mutation({query:e=>({url:"/auth/user-detail",method:a.a4,body:e})}),c=e=>e.mutation({query:e=>{var t;return{url:"/auth/user-detail-verify/".concat(e.userPhoneNumber,"?u_name=").concat(null!==(t=null===e||void 0===e?void 0:e.u_name)&&void 0!==t?t:""),method:a.a4,body:e}}}),d=e=>e.mutation({query:e=>({url:"/auth/user/forgot",method:a.a4,body:e.forgot})}),u=e=>e.mutation({query:e=>({url:"/auth/user/forgot/".concat(e.uid),method:a.a4,body:e.otp})}),m=e=>e.mutation({query:e=>({url:"/auth/user/reset/password/".concat(e.uid),method:a.a4,body:e.password})}),h=(e,t)=>e.mutation({query:e=>({url:"/auth/profile-creation/".concat(e.userPhoneNumber),method:a.a4,body:e.profileCreation})}),p=(e,t)=>e.mutation({query:e=>({url:"/auth/create-user-password/".concat(e.uid),method:a.a4,body:e.password})}),v=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail",method:a.a4,body:e.phone})}),f=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail-verify/".concat(e.insPhoneNumber),method:a.a4,body:e.verify})}),y=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/register",method:a.a4,body:e.profileCreation})}),b=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/create-password/".concat(e.id),method:a.a4,body:e.password})}),x=e=>e.mutation({query:e=>({url:"/auth/direct/confirm/join/".concat(e.phoneNumber,"/apply/").concat(e.aid,"?existingUser=").concat(e.uid),method:a.a4,body:e.addStudent})}),j=o.i.injectEndpoints({endpoints:e=>({fileUpload:i(e),authUniqueUsername:l(e),authUniqueEmail:r(e),authLogin:_(e),authUserNumber:s(e),authUserNumberVerify:c(e),authUserForget:d(e),authUserForgetOtp:u(e),authUserSetPassword:m(e),authUserCreateAccount:h(e),authUserCreatePassword:p(e),authInstituteNumber:v(e),authInstituteNumberVerify:f(e),authInstituteCreateAccount:y(e),authInstituteCreatePassword:b(e),authDirectJoinFormAdmissionApplication:x(e)})}),{useFileUploadMutation:g,useAuthUniqueUsernameQuery:Z,useAuthUniqueEmailQuery:U,useAuthLoginMutation:I,useAuthUserNumberMutation:k,useAuthUserNumberVerifyMutation:C,useAuthUserForgetMutation:N,useAuthUserForgetOtpMutation:S,useAuthUserSetPasswordMutation:w,useAuthUserCreateAccountMutation:A,useAuthUserCreatePasswordMutation:F,useAuthInstituteNumberMutation:q,useAuthInstituteNumberVerifyMutation:M,useAuthInstituteCreateAccountMutation:L,useAuthInstituteCreatePasswordMutation:B,useAuthDirectJoinFormAdmissionApplicationMutation:E}=j,P=()=>{const[e]=g();return[e]},D=()=>{const[e]=I();return[e]},G=()=>{const[e]=k();return[e]},J=()=>{const[e]=C();return[e]},T=()=>{const[e]=N();return[e]},O=()=>{const[e]=S();return[e]},R=()=>{const[e]=w();return[e]},K=()=>{const[e]=A();return[e]},z=()=>{const[e]=F();return[e]},V=()=>{const[e]=q();return[e]},Y=()=>{const[e]=M();return[e]},H=()=>{const[e]=L();return[e]},$=()=>{const[e]=B();return[e]},Q=()=>{const[e]=E();return[e]}},23984:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(80476),a=n(80184);const i=e=>{let{customStyle:t,children:n}=e;return(0,a.jsx)("div",{className:o.Z.btn_wrapper,style:t,children:n})}},38986:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(72791),a=n(52245),i=n(39230),l=n(1095),r=n(80184);const _=e=>{let{label:t,name:n,value:_,onChange:s,errorShow:c,disabled:d,customFormFileContainer:u,customFormFileLabel:m,customFormFile:h,type:p,multiple:v}=e;const{t:f}=(0,i.$G)(),y=(0,o.useCallback)((()=>{const e=window.open("".concat(l.yI,"/").concat(null===_||void 0===_?void 0:_.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}),[null===_||void 0===_?void 0:_.key]);return(0,r.jsxs)("div",{className:a.Z.form_input_container,style:{...u},children:[t&&(0,r.jsxs)("label",{className:a.Z.form_input_label,style:m,children:[t,c?(0,r.jsxs)("span",{className:a.Z.form_input_label_error,children:["* ",f("form_require_label")]}):null]}),(0,r.jsxs)("div",{className:a.Z.form_file_container,style:h,children:[(0,r.jsx)("label",{className:_?"".concat(a.Z.form_file_choose," ").concat(a.Z.form_file_choose_active):a.Z.form_file_choose,htmlFor:n,children:f(""!==_?"file_choosen":"choose_file")}),(0,r.jsx)("label",{className:a.Z.form_file_choosen,onClick:y,children:""!==_?null!==_&&void 0!==_&&_.name?null===_||void 0===_?void 0:_.name:f("view"):f("no_file_chosen")})]}),(0,r.jsx)("input",{type:"file",multiple:!!v,accept:p||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:s,disabled:d})]})}},16917:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(72791),a=n(52245),i=n(39230),l=n(1095),r=n(80184);const _=e=>{let{label:t,value:n,shownLabel:_,customFormInputContainer:s,customFormInputLabel:c,customFormInput:d}=e;const{t:u}=(0,i.$G)(),m=(0,o.useCallback)((()=>{if(n){const e=window.open("".concat(l.yI,"/").concat(null===n||void 0===n?void 0:n.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}}),[n]);return(0,r.jsxs)("div",{className:a.Z.form_read_input_container,style:s,children:[t&&(0,r.jsx)("label",{className:a.Z.form_read_input_label,style:c,children:t}),(0,r.jsx)("h6",{className:a.Z.form_read_input_file,style:d,onClick:m,children:u(null!==_&&void 0!==_?_:"view")})]})}},61055:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(39230),a=n(52245),i=n(80184);const l=["tel","number"],r=e=>{let{label:t,name:n,msg:r,type:_,value:s,onChange:c,placeholder:d,maxLength:u,customFormInputContainer:m,customFormInputLabel:h,customFormInput:p,errorShow:v,disabled:f,children:y}=e;const{t:b}=(0,o.$G)();return(0,i.jsxs)("div",{className:a.Z.form_input_container,style:m,children:[t&&(0,i.jsxs)("label",{className:a.Z.form_input_label,style:h,htmlFor:n,children:[t,r?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:a.Z.form_input_label_error,children:[" "," "," ",r]})}):v?(0,i.jsxs)("span",{className:a.Z.form_input_label_error,children:["* ",b("form_require_label")]}):null,y]}),l.includes(_)?(0,i.jsx)("input",{className:a.Z.form_input,type:_,value:s,onChange:c,name:n,placeholder:d,maxLength:null!==u&&void 0!==u?u:100,disabled:f,style:p}):(0,i.jsx)("input",{className:a.Z.form_input,type:_,value:s,onChange:c,name:n,placeholder:d,disabled:f,style:p})]})}},11468:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(39230),a=n(52245),i=n(80184);const l=e=>{var t;return e?null===e||void 0===e||null===(t=e.split("\n"))||void 0===t?void 0:t.length:2},r=e=>{let{label:t,name:n,type:r,value:_,onChange:s,placeholder:c,errorShow:d,disabled:u,customFormInputContainer:m,customFormInputLabel:h}=e;const{t:p}=(0,o.$G)();return(0,i.jsxs)("div",{className:a.Z.form_input_container,style:m,children:[t&&(0,i.jsxs)("label",{className:a.Z.form_input_label,htmlFor:n,style:h,children:[t,d&&(0,i.jsxs)("span",{className:a.Z.form_input_label_error,children:["* ",p("form_require_label")]})]}),(0,i.jsx)("textarea",{className:a.Z.form_textarea_input,type:r,value:_,onChange:s,name:n,placeholder:c,rows:l(_),disabled:u,style:{"--textarea-height":"".concat(20*l(_),"px")}})]})}},48293:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(72791),a=n(54164),i=n(15783),l=n(80184);const r=e=>{let{onBackdropClose:t,customBackdropStyle:n}=e;const r=(0,o.useCallback)((()=>{if(!t)return null;t()}),[t]);return a.createPortal((0,l.jsx)("div",{className:i.Z.modal_backdrop,onClick:r,style:n}),document.getElementById("backdrop"))},_=e=>{let{modalState:t,isHide:n,customOverlayStyle:o,children:r}=e;return a.createPortal((0,l.jsx)("div",{className:i.Z.modal_overlay,style:{...o},children:r}),document.getElementById("overlay"))},s=e=>{let{onClose:t,modalState:n,customBackdropStyle:o,customOverlayStyle:a,children:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{onBackdropClose:t,customBackdropStyle:o}),(0,l.jsx)(_,{customOverlayStyle:a,children:i})]})}},89064:(e,t,n)=>{n.d(t,{Z:()=>_});var o=n(55336),a=n(48293);const i="Modal_modal_menu_card__d0zzt";var l=n(90904),r=n(80184);const _=e=>{let{onClose:t,disabled:n,heading:_,customStyle:s,children:c}=e;return(0,r.jsx)(a.Z,{onClose:()=>{if(n)return null;t()},children:(0,r.jsxs)("div",{className:i,style:s,children:[_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h5",{children:_}),(0,r.jsx)(l.Z,{})]}):null,c,n&&(0,r.jsx)(o.Z,{})]})})}},63687:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59393),a=n(80184);const i=e=>{let{customStyle:t,children:n}=e;return(0,a.jsx)("div",{className:o.Z.user_member_container_wrapper,style:t,children:n})}},75024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var o=n(39230),a=n(56959),i=n(72791),l=n(23441),r=n(91427),_=n(57588),s=n(63687),c=n(21348),d=n(90904),u=n(1669),m=n(98684),h=n(55336),p=n(2651),v=n(93638),f=n(23984),y=n(43317),b=n(16483),x=n(16917),j=n(89064),g=n(61055),Z=n(16925),U=n(48293),I=n(38986),k=n(11468),C=n(53982),N=n(99183),S=n(80184);const w=e=>{let{onClose:t,aid:n,onRefetch:a,isEdit:l,documentMenu:r,onEdit:_}=e;const{t:s}=(0,o.$G)(),[u,p]=(0,i.useState)({doc_name:"",doc_key:"",applicable_to:""}),[f,b]=(0,i.useState)(""),[x,j]=(0,i.useState)(!1),[w,A]=(0,i.useState)(""),[F]=(0,C.FL)(),[q]=(0,y.od)();(0,i.useEffect)((()=>{var e,t,n;l&&(p({doc_name:null!==(e=null===r||void 0===r?void 0:r.document_name)&&void 0!==e?e:"",doc_key:null!==(t=null===r||void 0===r?void 0:r.document_key)&&void 0!==t?t:"",applicable_to:null!==(n=null===r||void 0===r?void 0:r.applicable_to)&&void 0!==n?n:""}),A({originalName:"document preview"}))}),[l,r]);const M=e=>{p((t=>({...t,[e.target.name]:e.target.value})))};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(U.Z,{onClose:t,children:(0,S.jsxs)("div",{className:Z.Z.modal_container,children:[(0,S.jsx)(c.Z,{children:(0,S.jsxs)("div",{className:Z.Z.modal_container_outer_header,children:[(0,S.jsx)("div",{className:Z.Z.modal_container_header,children:(0,S.jsxs)("h6",{children:[" ",s(l?"update_document":"add_new_document")]})}),(0,S.jsx)("img",{src:"".concat(m.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,S.jsx)(d.Z,{}),(0,S.jsxs)(c.Z,{customStyle:{paddingTop:"0"},children:[(0,S.jsx)(g.Z,{label:s("document_name"),placeholder:s("document_nape_placeholder"),name:"doc_name",value:u.doc_name,type:"text",onChange:M,errorShow:f.doc_name}),(0,S.jsx)(k.Z,{label:s("document_applicable_to"),placeholder:s("document_applicable_to_placeholder"),name:"applicable_to",value:u.applicable_to,type:"text",onChange:M}),(0,S.jsx)(I.Z,{label:s("sample_documnt"),name:"document",value:w,onChange:e=>{if(e.target.files[0]){j((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),F({fileUpload:t}).then((t=>{var n,o,a;A({name:null===(n=e.target.files[0])||void 0===n?void 0:n.name,key:null===(o=t.data)||void 0===o?void 0:o.imageKey,type:null===(a=e.target.files[0])||void 0===a?void 0:a.type}),p((e=>{var n;return{...e,doc_key:null===(n=t.data)||void 0===n?void 0:n.imageKey}})),j((e=>!e))})).catch({})}}}),(0,S.jsx)(v.Z,{label:l?"update":"create",onAction:()=>{let e=(0,N.l)(u,["doc_key","applicable_to"]);(0,N.x)(e)?l?_(u):(j((e=>!e)),q({aid:n,document:u}).then((()=>{a(),j((e=>!e)),t()})).catch({})):b(e)}})]})]})}),x&&(0,S.jsx)(h.Z,{})]})},A=e=>{let{aid:t,onClose:n,documentMenu:a,onRefetch:l}=e;const{t:r}=(0,o.$G)(),[_,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1),[u]=(0,y.yT)(),[m]=(0,y.Kw)(),h=()=>{d((e=>!e))};return c?(0,S.jsx)(w,{isEdit:!0,onClose:h,onEdit:e=>{var o;t&&null!==a&&void 0!==a&&a._id&&(s((e=>!e)),m({aid:t,editDocument:{doc:{id:null===a||void 0===a?void 0:a._id,name:null===e||void 0===e?void 0:e.doc_name,newKey:(null===e||void 0===e?void 0:e.doc_key)===(null===a||void 0===a?void 0:a.document_key)?null===a||void 0===a?void 0:a.document_key:null===e||void 0===e?void 0:e.doc_key,oldKey:(null===e||void 0===e?void 0:e.doc_key)===(null===a||void 0===a?void 0:a.document_key)?"":null===e||void 0===e?void 0:e.doc_key,applicable_to:null!==(o=null===e||void 0===e?void 0:e.applicable_to)&&void 0!==o?o:""}}}).then((()=>{l(),s((e=>!e)),n()})).catch({}))},documentMenu:a}):(0,S.jsxs)(j.Z,{onClose:n,disabled:_,children:[(0,S.jsx)("h6",{onClick:h,children:r("edit")}),(0,S.jsx)("h6",{onClick:()=>{t&&null!==a&&void 0!==a&&a._id&&(s((e=>!e)),u({aid:t,did:null===a||void 0===a?void 0:a._id}).then((()=>{l(),s((e=>!e)),n()})).catch({}))},children:r("delete")})]})},F=e=>{var t;let{document:n,onRefetch:a,aid:l}=e;const{t:r}=(0,o.$G)(),[_,s]=(0,i.useState)("");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:b.Z.document_card,children:[(0,S.jsx)("img",{src:"".concat(m.U_,"/required-document.svg"),alt:"document icon"}),(0,S.jsxs)("div",{className:b.Z.document_card_text,children:[(0,S.jsxs)("p",{children:[null!==(t=null===n||void 0===n?void 0:n.document_name)&&void 0!==t?t:"",null!==n&&void 0!==n&&n.applicable_to?(0,S.jsx)("span",{style:{fontSize:"11px"},children:" (".concat(r("applicable_to"),"- ").concat(null===n||void 0===n?void 0:n.applicable_to,")")}):""]}),(0,S.jsx)(x.Z,{value:null!==n&&void 0!==n&&n.document_key?{key:null===n||void 0===n?void 0:n.document_key}:"",shownLabel:"view_attachment",customFormInputContainer:{marginBlock:"0.3rem"}})]}),(0,S.jsx)("img",{src:"".concat(m.J7,"/menu.svg"),alt:"menu icon",onClick:()=>{s(n)},className:b.Z.menu_icon,title:"Menu"})]}),_&&(0,S.jsx)(A,{onClose:()=>{s("")},onRefetch:a,aid:l,documentMenu:_})]})},q=e=>{var t,n,b;let{aid:x}=e;const{t:j}=(0,o.$G)(),[g,Z]=(0,i.useState)(!1),[U,I]=(0,i.useState)(""),[k,C]=(0,i.useState)(1),[N,A]=(0,i.useState)(!0),[q,M]=(0,l.YD)({skip:U}),{admissionDocumentList:L,admissionDocumentListLoading:B,admissionDocumentListRefetch:E}=(0,y.cR)({data:{aid:x,page:k,limit:10,search:U},skip:!x});(0,i.useEffect)((()=>{M&&N&&C((e=>e+1))}),[M,N]),(0,i.useEffect)((()=>{var e;if(null!==L&&void 0!==L&&null!==(e=L.list)&&void 0!==e&&e.length){var t;let e=(0,r.f)(null===L||void 0===L||null===(t=L.list)||void 0===t?void 0:t.length);A((()=>e))}}),[null===L||void 0===L?void 0:L.list]);const P=(0,i.useCallback)((0,_.J)((e=>{C((()=>1)),I(e)}),1500),[]),D=()=>{Z((e=>!e))},G=(0,i.useCallback)((()=>{C((e=>1)),E()}),[E]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(s.Z,{children:[(0,S.jsx)(c.Z,{children:(0,S.jsxs)("div",{className:a.Z.fm_header_container,children:[(0,S.jsx)("h6",{children:j("required_documents")}),(0,S.jsx)("div",{className:a.Z.fm_search,children:(0,S.jsx)("section",{className:a.Z.fm_search_container,children:(0,S.jsxs)("div",{className:a.Z.fm_search_container_inner,children:[(0,S.jsx)("img",{className:a.Z.fm_search_icon,alt:"search icon",src:"".concat(m.dB,"/navbar-search.svg")}),(0,S.jsx)("input",{type:"text",placeholder:j("search"),onChange:e=>{e.target.value?P(e.target.value):(C((()=>1)),I(""))}})]})})})]})}),(0,S.jsx)(d.Z,{}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(f.Z,{children:(0,S.jsx)(v.Z,{label:"add_new_documents",onAction:D,customStyle:{marginTop:"0"}})}),null===L||void 0===L||null===(t=L.list)||void 0===t?void 0:t.map(((e,t)=>{var n;return(null===L||void 0===L||null===(n=L.list)||void 0===n?void 0:n.length)===t+1?(0,S.jsx)("div",{ref:q,children:(0,S.jsx)(F,{document:e,aid:x,onRefetch:G})},null===e||void 0===e?void 0:e._id):(0,S.jsx)(F,{document:e,aid:x,onRefetch:G},null===e||void 0===e?void 0:e._id)})),B?U?(0,S.jsx)(h.Z,{}):(0,S.jsx)(u.Z,{}):U?0===(null===L||void 0===L||null===(n=L.list)||void 0===n?void 0:n.length)&&(0,S.jsx)(p.Z,{title:"No document found related this search."}):0===(null===L||void 0===L||null===(b=L.list)||void 0===b?void 0:b.length)&&(0,S.jsx)(p.Z,{title:"No document."})]})]}),g&&(0,S.jsx)(w,{aid:x,onClose:D,onRefetch:G})]})}},2651:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(15783),a=n(80184);const i=e=>{let{title:t,subtitle:n,customStyleContainer:i,costomTextTitleStyle:l,costomTextSubtitleStyle:r}=e;return(0,a.jsxs)("div",{className:o.Z.empty_container,style:i,children:[t&&(0,a.jsx)("h6",{style:l,children:t}),n&&(0,a.jsx)("p",{style:r,children:n})]})}},57588:(e,t,n)=>{n.d(t,{J:()=>o});const o=(e,t)=>{let n;return function(){let o=this,a=arguments;clearTimeout(n),n=setTimeout((()=>{e.apply(o,a)}),t)}}},91427:(e,t,n)=>{n.d(t,{f:()=>o});const o=e=>e%10===0},99183:(e,t,n)=>{n.d(t,{l:()=>o,x:()=>a});const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let o in e)null!==t&&void 0!==t&&t.includes(o)||e[o]||(n[o]="* required");return n},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},52245:(e,t,n)=>{n.d(t,{Z:()=>o});const o={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},16483:(e,t,n)=>{n.d(t,{Z:()=>o});const o={document_card:"AdmissionManager_document_card__OWvp9",document_card_text:"AdmissionManager_document_card_text__aokEI",menu_icon:"AdmissionManager_menu_icon__n7SJY",apf_container:"AdmissionManager_apf_container__NmQ63",apf_container_inner:"AdmissionManager_apf_container_inner__tUadZ",apfci_text:"AdmissionManager_apfci_text__pDEev"}},16925:(e,t,n)=>{n.d(t,{Z:()=>o});const o={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}},15783:(e,t,n)=>{n.d(t,{Z:()=>o});const o={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=75024.c7fe8302.chunk.js.map