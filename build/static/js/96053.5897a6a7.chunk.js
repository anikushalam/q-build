"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[96053,3253],{33030:(e,o,i)=>{i.d(o,{Z:()=>n});var t=i(39230),l=i(80476),a=i(80184);const n=e=>{let{label:o,onAction:i,customStyle:n}=e;const{t:s}=(0,t.$G)();return(0,a.jsx)("div",{className:l.Z.btn_container,onClick:()=>{i()},style:n,children:s(o)})}},66659:(e,o,i)=>{i.d(o,{Z:()=>s});var t=i(39230),l=i(80476),a=i(98684),n=i(80184);const s=e=>{let{label:o,onAction:i,customStyle:s}=e;const{t:d}=(0,t.$G)();return(0,n.jsxs)("div",{className:l.Z.set_btn_container,onClick:i,style:s,children:[(0,n.jsx)("h6",{children:d(o)}),(0,n.jsx)("img",{src:"".concat(a.J7,"/forward.svg"),alt:"forward icon"})]})}},48293:(e,o,i)=>{i.d(o,{Z:()=>r});var t=i(72791),l=i(54164),a=i(15783),n=i(80184);const s=e=>{let{onBackdropClose:o,customBackdropStyle:i}=e;const s=(0,t.useCallback)((()=>{if(!o)return null;o()}),[o]);return l.createPortal((0,n.jsx)("div",{className:a.Z.modal_backdrop,onClick:s,style:i}),document.getElementById("backdrop"))},d=e=>{let{modalState:o,isHide:i,customOverlayStyle:t,children:s}=e;return l.createPortal((0,n.jsx)("div",{className:a.Z.modal_overlay,style:{...t},children:s}),document.getElementById("overlay"))},r=e=>{let{onClose:o,modalState:i,customBackdropStyle:t,customOverlayStyle:l,children:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{onBackdropClose:o,customBackdropStyle:t}),(0,n.jsx)(d,{customOverlayStyle:l,children:a})]})}},89064:(e,o,i)=>{i.d(o,{Z:()=>d});var t=i(55336),l=i(48293);const a="Modal_modal_menu_card__d0zzt";var n=i(90904),s=i(80184);const d=e=>{let{onClose:o,disabled:i,heading:d,customStyle:r,children:c}=e;return(0,s.jsx)(l.Z,{onClose:()=>{if(i)return null;o()},children:(0,s.jsxs)("div",{className:a,style:r,children:[d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{children:d}),(0,s.jsx)(n.Z,{})]}):null,c,i&&(0,s.jsx)(t.Z,{})]})})}},89184:(e,o,i)=>{i.r(o),i.d(o,{default:()=>U});var t=i(98684),l=i(90904),a=i(33030),n=i(63687),s=i(21348),d=i(57588),r=i(91427),c=i(72791),_=i(39230),u=i(23441),v=i(23449),m=i(1095),f=i(89064),p=i(48293),h=i(19056),x=i(93638),j=i(66659),S=i(97892),E=i.n(S),A=i(80184);const C=e=>{var o,i,a,n;let{onCloseEdit:d,setActivePopup:r,selectedStaff:c,moderatorState:u,onSelectRole:f,onUpdateModerator:S,selectedApplication:C}=e;const{t:g}=(0,_.$G)();return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(p.Z,{onClose:d,children:(0,A.jsxs)("div",{className:v.Z.modal_container,children:[(0,A.jsx)(s.Z,{children:(0,A.jsx)("div",{className:v.Z.modal_container_header,children:(0,A.jsx)("h6",{children:g("update_role_to_moderator")})})}),(0,A.jsx)(l.Z,{}),(0,A.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,A.jsxs)("section",{className:v.Z.selected_staff_container,onClick:()=>r("OPEN_STAFF_LIST"),style:{cursor:"pointer"},children:[(0,A.jsx)("img",{src:null!==c&&void 0!==c&&c.staffProfilePhoto?"".concat(m.yI,"/").concat(null===c||void 0===c?void 0:c.staffProfilePhoto):"".concat(t.p3,"/feed-user-avatar.svg"),alt:"staff profile avatar"}),(0,A.jsxs)("div",{className:v.Z.selected_staff_text,children:[(0,A.jsx)("h6",{children:"".concat(null!==(o=null===c||void 0===c?void 0:c.staffFirstName)&&void 0!==o?o:""," ").concat(null!==(i=null===c||void 0===c?void 0:c.staffMiddleName)&&void 0!==i?i:""," ").concat(null!==(a=null===c||void 0===c?void 0:c.staffLastName)&&void 0!==a?a:"")}),(0,A.jsxs)("p",{children:[g("index_number")," "," : ",null!==(n=null===c||void 0===c?void 0:c.staffROLLNO)&&void 0!==n?n:""]})]})]}),(0,A.jsx)(h.Z,{selectLabel:g("select_role_of_moderator"),selectedValue:g("please_select_role"),options:["Fee receipt authority","Application Manager","Enquiries Section","Excess Fee Refund","Pending Fee Manager","Tab Authority","Data Export Authority"],defalutValue:"ALL_FEE_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Fee receipt authority":"MULTI_APP_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Application Manager":"INQUIRY_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Enquiries Section":"REFUND_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Access Fee Moderator":"PENDING_FEE_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Pending Fee Manager":"ONE_TAB_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Tab Authority":"DATA_EXPORT_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)?"Data Export Authority":"",onClick:f}),null===C||void 0===C?void 0:C.map((e=>{var o,i,l;return(0,A.jsxs)("div",{className:v.Z.application_card,style:{width:"100%",margin:"1rem 0 0"},children:[(0,A.jsx)("img",{src:"".concat(t.U_,"/application.svg"),alt:"application icon"}),(0,A.jsxs)("section",{className:v.Z.application_card_text,children:[(0,A.jsx)("h6",{children:null!==(o=null===e||void 0===e?void 0:e.applicationName)&&void 0!==o?o:""}),(0,A.jsxs)("div",{className:v.Z.application_card_text_bottom,children:[(0,A.jsx)("p",{children:null!==(i=null===e||void 0===e||null===(l=e.applicationDepartment)||void 0===l?void 0:l.dName)&&void 0!==i?i:""}),null!==e&&void 0!==e&&e.applicationEndDate?(0,A.jsx)("p",{children:E()(null===e||void 0===e?void 0:e.applicationEndDate).format("DD/MM/YYYY")}):""]})]})]},null===e||void 0===e?void 0:e._id)})),"MULTI_APP_ACCESS"===(null===u||void 0===u?void 0:u.mod_role)&&(0,A.jsx)(j.Z,{label:"moderator_select_application",onAction:()=>r("SELECT_APPLICATION")}),(0,A.jsx)(x.Z,{label:"update",onAction:S})]})]})})})};var g=i(55336),I=i(90702),N=i(43317),Z=i(46194);const M=e=>{var o,i,a,n,d;let{instituteId:r,aid:u,onClose:f,openModeratorMenu:S,openAs:M,onEdit:P,onRefetch:y}=e;const{t:b}=(0,_.$G)(),[F,T]=(0,c.useState)("EDIT"===M?"PREVIEW_FORM":"OPEN_STAFF_LIST"),[L,U]=(0,c.useState)("EDIT"===M?null===S||void 0===S?void 0:S.access_staff:""),[R,O]=(0,c.useState)({mod_role:"EDIT"===M?null===S||void 0===S?void 0:S.access_role:"",sid:"EDIT"===M?null===S||void 0===S||null===(o=S.access_staff)||void 0===o?void 0:o._id:"",app_array:[],one_tab:""}),[D,k]=(0,c.useState)("EDIT"===M?null===S||void 0===S?void 0:S.access_application:[]),[B,G]=(0,c.useState)([]),[V]=(0,N.Kz)();(0,c.useEffect)((()=>{if("EDIT"===M){var e;U(null===S||void 0===S?void 0:S.access_staff),k(null===S||void 0===S?void 0:S.access_application);let o=[];for(let e of null===S||void 0===S?void 0:S.access_application)o.push(null===e||void 0===e?void 0:e._id);G(o),O({mod_role:null===S||void 0===S?void 0:S.access_role,sid:null===S||void 0===S||null===(e=S.access_staff)||void 0===e?void 0:e._id,app_array:o}),T("PREVIEW_FORM")}}),[M]);const W=e=>{O((o=>({...o,mod_role:"Fee receipt authority"===e?"ALL_FEE_ACCESS":"Application Manager"===e?"MULTI_APP_ACCESS":"Enquiries Section"===e?"INQUIRY_ACCESS":"Excess Fee Refund"===e?"REFUND_ACCESS":"Pending Fee Manager"===e?"PENDING_FEE_ACCESS":"Tab Authority"===e?"ONE_TAB_ACCESS":"Data Export Authority"===e?"DATA_EXPORT_ACCESS":""})))},Y=()=>{T("LOADING"),V({aid:u,active_tab:R.one_tab,addModerator:"MULTI_APP_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)||"ONE_TAB_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?{mod_role:R.mod_role,sid:R.sid,app_array:B}:R}).then((()=>{y(),T(""),f()})).catch({})},q=()=>{f()};return(0,A.jsxs)(A.Fragment,{children:["OPEN_STAFF_LIST"===F&&(0,A.jsx)(I.Z,{onSelectStaff:e=>{U(e),O((o=>({...o,sid:null===e||void 0===e?void 0:e._id}))),T("EDIT"===M?"PREVIEW_FORM":"ASSIGN_ROLE")},onClose:f,instituteId:r}),("ASSIGN_ROLE"===F||"MODERATOR_PREWVIEW"===F)&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(p.Z,{onClose:f,children:(0,A.jsxs)("div",{className:v.Z.modal_container,children:[(0,A.jsx)(s.Z,{children:(0,A.jsx)("div",{className:v.Z.modal_container_header,children:(0,A.jsx)("h6",{children:b("assign_role_to_moderator")})})}),(0,A.jsx)(l.Z,{}),(0,A.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,A.jsxs)("section",{className:v.Z.selected_staff_container,children:[(0,A.jsx)("img",{src:null!==L&&void 0!==L&&L.staffProfilePhoto?"".concat(m.yI,"/").concat(null===L||void 0===L?void 0:L.staffProfilePhoto):"".concat(t.p3,"/feed-user-avatar.svg"),alt:"staff profile avatar"}),(0,A.jsxs)("div",{className:v.Z.selected_staff_text,children:[(0,A.jsx)("h6",{children:"".concat(null!==(i=null===L||void 0===L?void 0:L.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(a=null===L||void 0===L?void 0:L.staffMiddleName)&&void 0!==a?a:""," ").concat(null!==(n=null===L||void 0===L?void 0:L.staffLastName)&&void 0!==n?n:"")}),(0,A.jsxs)("p",{children:[b("index_no"),null!==(d=null===L||void 0===L?void 0:L.staffROLLNO)&&void 0!==d?d:""]})]})]}),(0,A.jsx)(h.Z,{selectLabel:b("select_role_of_moderator"),selectedValue:b("please_select_role"),options:["Fee receipt authority","Application Manager","Enquiries Section","Tab Authority","Data Export Authority"],defalutValue:"ALL_FEE_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Fee receipt authority":"MULTI_APP_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Application Manager":"INQUIRY_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Enquiries Section":"REFUND_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Excess Fee Refund":"PENDING_FEE_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Pending Fee Manager":"ONE_TAB_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Tab Authority":"DATA_EXPORT_ACCESS"===(null===R||void 0===R?void 0:R.mod_role)?"Data Export Authority":"",onClick:W}),"ONE_TAB_ACCESS"===R.mod_role&&(0,A.jsx)(h.Z,{selectLabel:b("select_tab_role"),selectedValue:b("please_select_role"),options:["Application","Selected","Confirmed","Allotted","Cancelled"],defalutValue:null===R||void 0===R?void 0:R.one_tab,onClick:e=>{O((o=>({...o,one_tab:e})))}}),"MODERATOR_PREWVIEW"===F&&(null===D||void 0===D?void 0:D.map((e=>{var o,i,l;return(0,A.jsxs)("div",{className:v.Z.application_card,children:[(0,A.jsx)("img",{src:"".concat(t.U_,"/application.svg"),alt:"application icon"}),(0,A.jsxs)("section",{className:v.Z.application_card_text,children:[(0,A.jsx)("h6",{children:null!==(o=null===e||void 0===e?void 0:e.applicationName)&&void 0!==o?o:""}),(0,A.jsxs)("div",{className:v.Z.application_card_text_bottom,children:[(0,A.jsx)("p",{children:null!==(i=null===e||void 0===e||null===(l=e.applicationDepartment)||void 0===l?void 0:l.dName)&&void 0!==i?i:""}),null!==e&&void 0!==e&&e.applicationEndDate?(0,A.jsx)("p",{children:E()(null===e||void 0===e?void 0:e.applicationEndDate).format("DD/MM/YYYY")}):""]})]})]},null===e||void 0===e?void 0:e._id)}))),"MULTI_APP_ACCESS"===R.mod_role?(0,A.jsx)(A.Fragment,{children:"MODERATOR_PREWVIEW"===F?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j.Z,{label:"add_more",onAction:()=>T("SELECT_APPLICATION")}),(0,A.jsx)(x.Z,{label:"assign",onAction:Y})]}):(0,A.jsx)(j.Z,{label:"moderator_select_application",onAction:()=>T("SELECT_APPLICATION")})}):(0,A.jsx)(x.Z,{label:"assign",onAction:Y})]}),"LOADING"===F&&(0,A.jsx)(g.Z,{})]})})}),"PREVIEW_FORM"===F&&(0,A.jsx)(C,{onCloseEdit:q,setActivePopup:T,selectedStaff:L,moderatorState:R,onSelectRole:W,onUpdateModerator:()=>{P(R,B),f()},selectedApplication:D}),"SELECT_APPLICATION"===F&&(0,A.jsx)(Z.Z,{aid:u,onClose:q,onSelect:e=>{null!==B&&void 0!==B&&B.includes(null===e||void 0===e?void 0:e._id)?(G((o=>null===o||void 0===o?void 0:o.filter((o=>o!==(null===e||void 0===e?void 0:e._id))))),k((o=>null===o||void 0===o?void 0:o.filter((o=>(null===o||void 0===o?void 0:o._id)!==(null===e||void 0===e?void 0:e._id)))))):(G((o=>[...o,null===e||void 0===e?void 0:e._id])),k((o=>[...o,e]))),T("MODERATOR_PREWVIEW")},isList:!0,selectedId:B}),"LOADING"===F&&(0,A.jsx)(g.Z,{})]})},P=e=>{let{onClose:o,aid:i,openModeratorMenu:t,instituteId:l,onRefetch:a}=e;const{t:n}=(0,_.$G)(),[s,d]=(0,c.useState)(!1),[r,u]=(0,c.useState)(!1),[v]=(0,N.Bp)(),[m]=(0,N.KK)(),p=()=>{u((e=>!e))};return(0,A.jsx)(A.Fragment,{children:r?(0,A.jsx)(M,{onClose:p,onEdit:(e,i)=>{null!==t&&void 0!==t&&t._id&&(d((e=>!e)),p(),m({modId:null===t||void 0===t?void 0:t._id,active_tab:null===e||void 0===e?void 0:e.one_tab,updateModerator:{role:null===e||void 0===e?void 0:e.mod_role,staffId:null===e||void 0===e?void 0:e.sid,app_array:"MULTI_APP_ACCESS"===(null===e||void 0===e?void 0:e.mod_role)||"MULTI_APP_ACCESS"===(null===e||void 0===e?void 0:e.mod_role)?i:[]}}).then((()=>{a(),d((e=>!e)),o()})).catch({}))},openModeratorMenu:t,openAs:"EDIT",aid:i,instituteId:l}):(0,A.jsxs)(f.Z,{onClose:o,disabled:s,children:[(0,A.jsx)("h6",{onClick:p,children:n("edit")}),(0,A.jsx)("h6",{onClick:()=>{i&&null!==t&&void 0!==t&&t._id&&(d((e=>!e)),v({aid:i,modId:null===t||void 0===t?void 0:t._id}).then((()=>{a(),d((e=>!e)),o()})).catch({}))},children:n("delete")})]})})},y=e=>{var o,i,l,a,n,s,d,r,u,f,p;let{moderator:h,instituteId:x,aid:j}=e;const{t:S}=(0,_.$G)(),[E,C]=(0,c.useState)("");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{className:v.Z.moderator_card,children:[(0,A.jsx)("img",{src:null!==h&&void 0!==h&&null!==(o=h.access_staff)&&void 0!==o&&o.staffProfilePhoto?"".concat(m.yI,"/").concat(null===h||void 0===h||null===(i=h.access_staff)||void 0===i?void 0:i.staffProfilePhoto):"".concat(t.p3,"/feed-user-avatar.svg"),alt:"moderator avatar"}),(0,A.jsxs)("section",{className:v.Z.moderator_card_text_container,children:[(0,A.jsx)("h6",{children:"".concat(null===h||void 0===h||null===(l=h.access_staff)||void 0===l?void 0:l.staffFirstName," ").concat(null!==(a=null===h||void 0===h||null===(n=h.access_staff)||void 0===n?void 0:n.staffMiddleName)&&void 0!==a?a:""," ").concat(null===h||void 0===h||null===(s=h.access_staff)||void 0===s?void 0:s.staffLastName)}),(0,A.jsxs)("p",{children:[S("index_number")," "," : ",null===h||void 0===h||null===(d=h.access_staff)||void 0===d?void 0:d.staffROLLNO]}),(0,A.jsx)("p",{children:"ALL_FEE_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Fee receipt authority":"MULTI_APP_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Application Manager":"INQUIRY_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Enquiries Section":"REFUND_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Access Fee Moderator":"PENDING_FEE_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Pending Fee Manager":"ONE_TAB_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Application"===(null===h||void 0===h||null===(r=h.active_tab)||void 0===r?void 0:r.role)?"Admission Application Tab":"Selected"===(null===h||void 0===h||null===(u=h.active_tab)||void 0===u?void 0:u.role)?"Admission Selected Tab":"Confirmed"===(null===h||void 0===h||null===(f=h.active_tab)||void 0===f?void 0:f.role)?"Admission Confirmed Tab":"Allotted"===(null===h||void 0===h||null===(p=h.active_tab)||void 0===p?void 0:p.role)?"Admission Allotted Tab":"Admission Cancelled Tab":"DATA_EXPORT_ACCESS"===(null===h||void 0===h?void 0:h.access_role)?"Data Export Authority":""})]}),(0,A.jsx)("img",{src:"".concat(t.J7,"/menu.svg"),alt:"menu icon",onClick:()=>{C(h)},className:v.Z.menu_icon,title:"Menu"})]}),E&&(0,A.jsx)(P,{onClose:()=>{C("")},aid:j,openModeratorMenu:E,instituteId:x})]})};var b=i(56959),F=i(23984),T=i(1669),L=i(2651);const U=e=>{var o,i,v,m;let{aid:f,instituteId:p}=e;const{t:h}=(0,_.$G)(),[x,j]=(0,c.useState)(""),[S,E]=(0,c.useState)(1),[C,I]=(0,c.useState)(!0),[Z,P]=(0,u.YD)({skip:x}),[U,R]=(0,c.useState)(!1),{admissionModeratorList:O,admissionModeratorListLoading:D,admissionModeratorListRefetch:k}=(0,N.FC)({data:{aid:f,page:S,limit:10,search:x},skip:!f});(0,c.useEffect)((()=>{P&&C&&E((e=>e+1))}),[P,C]),(0,c.useEffect)((()=>{var e;if(null!==O&&void 0!==O&&null!==(e=O.list)&&void 0!==e&&e.length){var o;let e=(0,r.f)(null===O||void 0===O||null===(o=O.list)||void 0===o?void 0:o.length);I((()=>e))}}),[null===O||void 0===O||null===(o=O.list)||void 0===o?void 0:o.length]);const B=(0,c.useCallback)((0,d.J)((e=>{E((()=>1)),j(e)}),1500),[]),G=()=>{R((e=>!e))},V=(0,c.useCallback)((()=>{E((()=>1)),j(""),k()}),[k]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(n.Z,{children:[(0,A.jsx)(s.Z,{children:(0,A.jsxs)("div",{className:b.Z.fm_header_container,children:[(0,A.jsx)("h6",{children:h("admission_moderators")}),(0,A.jsx)("div",{className:b.Z.fm_search,children:(0,A.jsx)("section",{className:b.Z.fm_search_container,children:(0,A.jsxs)("div",{className:b.Z.fm_search_container_inner,children:[(0,A.jsx)("img",{className:b.Z.fm_search_icon,alt:"search icon",src:"".concat(t.dB,"/navbar-search.svg")}),(0,A.jsx)("input",{type:"text",placeholder:h("search"),onChange:e=>{e.target.value?B(e.target.value):(E((()=>1)),j(""))}})]})})})]})}),(0,A.jsx)(l.Z,{}),(0,A.jsxs)(s.Z,{customStyle:{paddingTop:"0.2rem"},children:[(0,A.jsx)(F.Z,{children:(0,A.jsx)(a.Z,{label:"add_new_moderator",onAction:G})}),null===O||void 0===O||null===(i=O.list)||void 0===i?void 0:i.map(((e,o)=>{var i;return(null===O||void 0===O||null===(i=O.list)||void 0===i?void 0:i.length)===o+1?(0,A.jsx)("div",{ref:Z,children:(0,A.jsx)(y,{moderator:e,aid:f,instituteId:p})},null===e||void 0===e?void 0:e._id):(0,A.jsx)(y,{moderator:e,aid:f,instituteId:p},null===e||void 0===e?void 0:e._id)})),D?x?(0,A.jsx)(g.Z,{}):(0,A.jsx)(T.Z,{}):x?0===(null===O||void 0===O||null===(v=O.list)||void 0===v?void 0:v.length)&&(0,A.jsx)(L.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No moderator found related this search."}):0===(null===O||void 0===O||null===(m=O.list)||void 0===m?void 0:m.length)&&(0,A.jsx)(L.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No moderator added."})]})]}),U&&(0,A.jsx)(M,{instituteId:p,aid:f,onClose:G,onRefetch:V})]})}},90702:(e,o,i)=>{i.d(o,{Z:()=>E});var t=i(49806),l=i(48293),a=i(21348),n=i(90904),s=i(98684),d=i(39230),r=i(72791),c=i(23441),_=i(91427),u=i(57588),v=i(6758),m=i(1095),f=i(80184);const p=e=>{var o,i,l,a,r,c;let{staff:_,selectedId:u,onSelect:v,selectList:p,isMultiSelect:h,onMultiSelect:x}=e;const{t:j}=(0,d.$G)();return(0,f.jsxs)(f.Fragment,{children:[h?(0,f.jsxs)("div",{className:t.Z.assign_show_list_each,onClick:()=>{x(_)},children:[null!==p&&void 0!==p&&p.includes(null===_||void 0===_?void 0:_._id)?(0,f.jsx)("img",{src:"".concat(s.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(s.U_,"/uncheck.svg"),alt:"icon"}),(0,f.jsx)("img",{src:null!==_&&void 0!==_&&_.staffProfilePhoto?"".concat(m.yI,"/").concat(_.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,f.jsxs)("div",{className:t.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(null!==(o=null===_||void 0===_?void 0:_.staffFirstName)&&void 0!==o?o:""," ").concat(null!==(i=null===_||void 0===_?void 0:_.staffMiddleName)&&void 0!==i?i:""," ").concat(null!==(l=null===_||void 0===_?void 0:_.staffLastName)&&void 0!==l?l:"")}),(0,f.jsxs)("p",{children:[j("index_number")," "," : ",null===_||void 0===_?void 0:_.staffROLLNO]})]})]}):(0,f.jsxs)("div",{className:t.Z.assign_show_list_each,style:u===(null===_||void 0===_?void 0:_._id)?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:null,onClick:()=>{v(_)},children:[(0,f.jsx)("img",{src:null!==_&&void 0!==_&&_.staffProfilePhoto?"".concat(m.yI,"/").concat(_.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,f.jsxs)("div",{className:t.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(null!==(a=null===_||void 0===_?void 0:_.staffFirstName)&&void 0!==a?a:""," ").concat(null!==(r=null===_||void 0===_?void 0:_.staffMiddleName)&&void 0!==r?r:""," ").concat(null!==(c=null===_||void 0===_?void 0:_.staffLastName)&&void 0!==c?c:"")}),(0,f.jsxs)("p",{children:[j("index_number")," "," : ",null===_||void 0===_?void 0:_.staffROLLNO]})]})]}),(0,f.jsx)(n.Z,{customStyleBorder:{margin:"0"}})]})};var h=i(55336),x=i(1669),j=i(2651),S=i(93638);const E=e=>{var o,i,m,E;let{title:A,onClose:C,selectedId:g,onSelectStaff:I,instituteId:N,isMultiSelect:Z,onMultiSelect:M,selectList:P,onDone:y}=e;const{t:b}=(0,d.$G)(),[F,T]=(0,r.useState)(""),[L,U]=(0,r.useState)(1),[R,O]=(0,r.useState)(!0),[D,k]=(0,c.YD)({skip:F}),{instituteAllStaff:B,instituteAllStaffLoading:G}=(0,v.nb)({data:{id:N,page:L,limit:10,search:F},skip:!N});(0,r.useEffect)((()=>{k&&R&&U((e=>e+1))}),[k,R]),(0,r.useEffect)((()=>{var e;if(null!==B&&void 0!==B&&null!==(e=B.list)&&void 0!==e&&e.length){var o;let e=(0,_.f)(null===B||void 0===B||null===(o=B.list)||void 0===o?void 0:o.length);O((()=>e))}}),[null===B||void 0===B||null===(o=B.list)||void 0===o?void 0:o.length]);const V=(0,r.useCallback)((0,u.J)((e=>{U((()=>1)),T(e)}),1500),[]),W=e=>{g===(null===e||void 0===e?void 0:e._id)||I(e)};return(0,f.jsx)(l.Z,{onClose:C,children:(0,f.jsxs)("div",{className:t.Z.modal_container,children:[(0,f.jsx)(a.Z,{children:(0,f.jsxs)("div",{className:t.Z.modal_container_outer_header,children:[(0,f.jsx)("div",{className:t.Z.modal_container_header,children:(0,f.jsx)("h6",{children:b(null!==A&&void 0!==A?A:"staff_list")})}),(0,f.jsxs)("div",{className:t.Z.modal_container_btn_container,children:[Z&&(0,f.jsx)(S.Z,{label:b("select"),count:null===P||void 0===P?void 0:P.length,onAction:y,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,f.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:C})]})]})}),(0,f.jsx)(n.Z,{}),(0,f.jsxs)(a.Z,{customStyle:{paddingBottom:"1rem"},children:[(0,f.jsxs)("div",{className:t.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,f.jsx)("input",{type:"text",placeholder:b("search"),className:t.Z.assign_search_input,onChange:e=>{e.target.value?V(e.target.value):(U((()=>1)),T(""))},style:{width:"100%"}}),(0,f.jsx)("img",{src:"".concat(s.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===B||void 0===B||null===(i=B.list)||void 0===i?void 0:i.map(((e,o)=>{var i;return(null===B||void 0===B||null===(i=B.list)||void 0===i?void 0:i.length)===o+1?(0,f.jsx)("div",{ref:D,children:(0,f.jsx)(p,{staff:e,selectedId:g,onSelect:W,selectList:P,isMultiSelect:Z,onMultiSelect:M})},null===e||void 0===e?void 0:e._id):(0,f.jsx)(p,{staff:e,selectedId:g,onSelect:W,selectList:P,isMultiSelect:Z,onMultiSelect:M},null===e||void 0===e?void 0:e._id)})),G?F?(0,f.jsx)(h.Z,{}):(0,f.jsx)(x.Z,{}):F?0===(null===B||void 0===B||null===(m=B.list)||void 0===m?void 0:m.length)&&(0,f.jsx)(j.Z,{title:"No staff found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===B||void 0===B||null===(E=B.list)||void 0===E?void 0:E.length)&&(0,f.jsx)(j.Z,{title:"No staff.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},52245:(e,o,i)=>{i.d(o,{Z:()=>t});const t={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},23449:(e,o,i)=>{i.d(o,{Z:()=>t});const t={moderator_card:"FinanceModerator_moderator_card__T--+-",moderator_card_text_container:"FinanceModerator_moderator_card_text_container__6jmpJ",menu_icon:"FinanceModerator_menu_icon__QsTsH",selected_staff_container:"FinanceModerator_selected_staff_container__xtfxL",selected_staff_text:"FinanceModerator_selected_staff_text__8sr0m",application_card:"FinanceModerator_application_card__05c8b",application_card_active:"FinanceModerator_application_card_active__yPVys",application_card_text:"FinanceModerator_application_card_text__wx+1V",application_card_text_bottom:"FinanceModerator_application_card_text_bottom__eLmpt",modal_container:"FinanceModerator_modal_container__P1hQi",modal_container_outer_header:"FinanceModerator_modal_container_outer_header__F746g",modal_container_header:"FinanceModerator_modal_container_header__FPMSZ"}}}]);
//# sourceMappingURL=96053.5897a6a7.chunk.js.map