"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[89184],{66659:(e,i,l)=>{l.d(i,{Z:()=>s});var o=l(39230),n=l(80476),t=l(98684),a=l(80184);const s=e=>{let{label:i,count:l,onAction:s,customStyle:d}=e;const{t:c}=(0,o.$G)();return(0,a.jsxs)("div",{className:n.Z.set_btn_container,onClick:s,style:d,children:[(0,a.jsxs)("h6",{children:[l>0?(0,a.jsxs)("span",{children:[l," "," "]}):null,c(i)]}),(0,a.jsx)("img",{src:"".concat(t.J7,"/forward.svg"),alt:"forward icon"})]})}},19056:(e,i,l)=>{l.d(i,{Z:()=>d});var o=l(72791),n=l(39230),t=l(52245),a=l(98684),s=l(80184);const d=e=>{let{selectLabel:i,onClick:l,selectedValue:d,options:c,customStyleContainer:r,customLabelStyle:v,customListStyle:_,errorShow:u,defalutValue:m,isDenied:p,customFormInput:h}=e;const{t:f}=(0,n.$G)(),[x,j]=(0,o.useState)(!1),[g,A]=(0,o.useState)(""),S=()=>{p||j((e=>!e))};(0,o.useEffect)((()=>{m&&A(m)}),[m]);return(0,s.jsxs)("div",{className:t.Z.form_input_container,style:{...r},children:[(0,s.jsxs)("p",{className:t.Z.join_form_select_paragraph,style:{...v},children:[i,u&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,s.jsxs)("section",{className:t.Z.join_form_select_custom,onClick:S,children:[g?(0,s.jsx)("p",{className:t.Z.join_form_select_custom_paragraph,style:h,children:null!==g&&void 0!==g?g:""}):(0,s.jsx)("p",{className:t.Z.join_form_select_custom_paragraph,style:h,children:d}),x?(0,s.jsx)("img",{className:t.Z.join_form_select_custom_rotate_icon,src:"".concat(a.J7,"/down.svg"),alt:"categor icon"}):(0,s.jsx)("img",{className:t.Z.join_form_select_custom_icon,src:"".concat(a.J7,"/down.svg"),alt:"categor icon"})]}),(0,s.jsx)("section",{children:x&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:t.Z.join_form_select_custom_list,style:_,children:null===c||void 0===c?void 0:c.map(((e,i)=>(0,s.jsx)("p",{onClick:()=>{return l(i=e),S(),void A(i);var i},className:t.Z.join_form_select_custom_paragraph_option,children:e},i)))})})})]})}},89184:(e,i,l)=>{l.r(i),l.d(i,{default:()=>y});var o=l(98684),n=l(90904),t=l(63687),a=l(21348),s=l(91427),d=l(72791),c=l(39230),r=l(23441),v=l(23449),_=l(1095),u=l(89064),m=l(38857),p=l(19056),h=l(93638),f=l(66659),x=l(97892),j=l.n(x),g=l(80184);const A=e=>{var i,l,t,s;let{onCloseEdit:d,setActivePopup:r,selectedStaff:u,moderatorState:x,onSelectRole:A,onUpdateModerator:S,selectedApplication:C}=e;const{t:E}=(0,c.$G)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m.Z,{onClose:d,children:(0,g.jsxs)("div",{className:v.Z.modal_container,children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:v.Z.modal_container_header,children:(0,g.jsx)("h6",{children:E("update_role_to_moderator")})})}),(0,g.jsx)(n.Z,{}),(0,g.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,g.jsxs)("section",{className:v.Z.selected_staff_container,onClick:()=>r("OPEN_STAFF_LIST"),style:{cursor:"pointer"},children:[(0,g.jsx)("img",{src:null!==u&&void 0!==u&&u.staffProfilePhoto?"".concat(_.yI,"/").concat(null===u||void 0===u?void 0:u.staffProfilePhoto):"".concat(o.p3,"/feed-user-avatar.svg"),alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:v.Z.selected_staff_text,children:[(0,g.jsx)("h6",{children:"".concat(null!==(i=null===u||void 0===u?void 0:u.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(l=null===u||void 0===u?void 0:u.staffMiddleName)&&void 0!==l?l:""," ").concat(null!==(t=null===u||void 0===u?void 0:u.staffLastName)&&void 0!==t?t:"")}),(0,g.jsxs)("p",{children:[E("index_number")," "," : ",null!==(s=null===u||void 0===u?void 0:u.staffROLLNO)&&void 0!==s?s:""]})]})]}),(0,g.jsx)(p.Z,{selectLabel:E("select_role_of_moderator"),selectedValue:E("please_select_role"),options:["Application Manager","All Application Manager","All Application Manager (Only View)","Combined Application","Enquiries Section","Tab Authority","Data Export Authority"],defalutValue:"MULTI_APP_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"Application Manager":"ONGOING_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"All Application Manager":"ONGOING_VIEW_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"All Application Manager (Only View)":"INQUIRY_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"Enquiries Section":"COMBINED_APP_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"Combined Application":"ONE_TAB_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"Tab Authority":"DATA_EXPORT_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)?"Data Export Authority":"",onClick:A}),null===C||void 0===C?void 0:C.map((e=>{var i,l,n;return(0,g.jsxs)("div",{className:v.Z.application_card,style:{width:"100%",margin:"1rem 0 0"},children:[(0,g.jsx)("img",{src:"".concat(o.U_,"/application.svg"),alt:"application icon"}),(0,g.jsxs)("section",{className:v.Z.application_card_text,children:[(0,g.jsx)("h6",{children:null!==(i=null===e||void 0===e?void 0:e.applicationName)&&void 0!==i?i:""}),(0,g.jsxs)("div",{className:v.Z.application_card_text_bottom,children:[(0,g.jsx)("p",{children:null!==(l=null===e||void 0===e||null===(n=e.applicationDepartment)||void 0===n?void 0:n.dName)&&void 0!==l?l:""}),null!==e&&void 0!==e&&e.applicationEndDate?(0,g.jsx)("p",{children:j()(null===e||void 0===e?void 0:e.applicationEndDate).format("DD/MM/YYYY")}):""]})]})]},null===e||void 0===e?void 0:e._id)})),"MULTI_APP_ACCESS"===(null===x||void 0===x?void 0:x.mod_role)&&(0,g.jsx)(f.Z,{label:"moderator_select_application",onAction:()=>r("SELECT_APPLICATION")}),(0,g.jsx)(h.Z,{label:"update",onAction:S})]})]})})})};var S=l(55336),C=l(90702),E=l(43317),N=l(46194);const Z=e=>{var i,l,t,s,r;let{instituteId:u,aid:x,onClose:Z,openModeratorMenu:M,openAs:T,onEdit:O,onRefetch:b}=e;const{t:P}=(0,c.$G)(),[y,L]=(0,d.useState)("EDIT"===T?"PREVIEW_FORM":"OPEN_STAFF_LIST"),[R,D]=(0,d.useState)("EDIT"===T?null===M||void 0===M?void 0:M.access_staff:""),[F,k]=(0,d.useState)({mod_role:"EDIT"===T?null===M||void 0===M?void 0:M.access_role:"",sid:"EDIT"===T?null===M||void 0===M||null===(i=M.access_staff)||void 0===i?void 0:i._id:"",app_array:[],one_tab:""}),[G,V]=(0,d.useState)("EDIT"===T?null===M||void 0===M?void 0:M.access_application:[]),[w,B]=(0,d.useState)([]),[U]=(0,E.Kz)();(0,d.useEffect)((()=>{if("EDIT"===T){var e;D(null===M||void 0===M?void 0:M.access_staff),V(null===M||void 0===M?void 0:M.access_application);let i=[];for(let e of null===M||void 0===M?void 0:M.access_application)i.push(null===e||void 0===e?void 0:e._id);B(i),k({mod_role:null===M||void 0===M?void 0:M.access_role,sid:null===M||void 0===M||null===(e=M.access_staff)||void 0===e?void 0:e._id,app_array:i}),L("PREVIEW_FORM")}}),[T]);const W=e=>{k((i=>({...i,mod_role:"Application Manager"===e?"MULTI_APP_ACCESS":"All Application Manager"===e?"ONGOING_ACCESS":"All Application Manager (Only View)"===e?"ONGOING_VIEW_ACCESS":"Enquiries Section"===e?"INQUIRY_ACCESS":"Combined Application"===e?"COMBINED_APP_ACCESS":"Tab Authority"===e?"ONE_TAB_ACCESS":"Data Export Authority"===e?"DATA_EXPORT_ACCESS":""})))},Y=()=>{"EDIT"===T?O(F,w):(L("LOADING"),U({aid:x,active_tab:"ONE_TAB_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?I[F.one_tab]:F.one_tab,addModerator:"MULTI_APP_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)||"ONE_TAB_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?{mod_role:F.mod_role,sid:F.sid,app_array:w}:F}).then((()=>{b&&b(),L(""),Z()})).catch({}))},$=e=>{e?L("EDIT"===T?"PREVIEW_FORM":"MODERATOR_PREWVIEW"):Z()};return(0,g.jsxs)(g.Fragment,{children:["OPEN_STAFF_LIST"===y&&(0,g.jsx)(C.Z,{onSelectStaff:e=>{D(e),k((i=>({...i,sid:null===e||void 0===e?void 0:e._id}))),L("EDIT"===T?"PREVIEW_FORM":"ASSIGN_ROLE")},onClose:Z,instituteId:u}),("ASSIGN_ROLE"===y||"MODERATOR_PREWVIEW"===y)&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m.Z,{onClose:Z,children:(0,g.jsxs)("div",{className:v.Z.modal_container,children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)("div",{className:v.Z.modal_container_header,children:(0,g.jsx)("h6",{children:P("assign_role_to_moderator")})})}),(0,g.jsx)(n.Z,{}),(0,g.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,g.jsxs)("section",{className:v.Z.selected_staff_container,children:[(0,g.jsx)("img",{src:null!==R&&void 0!==R&&R.staffProfilePhoto?"".concat(_.yI,"/").concat(null===R||void 0===R?void 0:R.staffProfilePhoto):"".concat(o.p3,"/feed-user-avatar.svg"),alt:"staff profile avatar"}),(0,g.jsxs)("div",{className:v.Z.selected_staff_text,children:[(0,g.jsx)("h6",{children:"".concat(null!==(l=null===R||void 0===R?void 0:R.staffFirstName)&&void 0!==l?l:""," ").concat(null!==(t=null===R||void 0===R?void 0:R.staffMiddleName)&&void 0!==t?t:""," ").concat(null!==(s=null===R||void 0===R?void 0:R.staffLastName)&&void 0!==s?s:"")}),(0,g.jsxs)("p",{children:[P("index_no"),null!==(r=null===R||void 0===R?void 0:R.staffROLLNO)&&void 0!==r?r:""]})]})]}),(0,g.jsx)(p.Z,{selectLabel:P("select_role_of_moderator"),selectedValue:P("please_select_role"),options:["Application Manager","All Application Manager","All Application Manager (Only View)","Combined Application","Enquiries Section","Tab Authority","Data Export Authority"],defalutValue:"MULTI_APP_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"Application Manager":"ONGOING_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"All Application Manager":"ONGOING_VIEW_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"All Application Manager (Only View)":"INQUIRY_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"Enquiries Section":"COMBINED_APP_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"Combined Application":"ONE_TAB_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"Tab Authority":"DATA_EXPORT_ACCESS"===(null===F||void 0===F?void 0:F.mod_role)?"Data Export Authority":"",onClick:W}),"ONE_TAB_ACCESS"===F.mod_role&&(0,g.jsx)(p.Z,{selectLabel:P("select_tab_role"),selectedValue:P("please_select_role"),options:["Application","Document","Fees","Confirmed","Review","Allotted","Cancelled"],defalutValue:null===F||void 0===F?void 0:F.one_tab,onClick:e=>{k((i=>({...i,one_tab:e})))}}),"MODERATOR_PREWVIEW"===y&&(null===G||void 0===G?void 0:G.map((e=>{var i,l,n;return(0,g.jsxs)("div",{className:v.Z.application_card,children:[(0,g.jsx)("img",{src:"".concat(o.U_,"/application.svg"),alt:"application icon"}),(0,g.jsxs)("section",{className:v.Z.application_card_text,children:[(0,g.jsx)("h6",{children:null!==(i=null===e||void 0===e?void 0:e.applicationName)&&void 0!==i?i:""}),(0,g.jsxs)("div",{className:v.Z.application_card_text_bottom,children:[(0,g.jsx)("p",{children:null!==(l=null===e||void 0===e||null===(n=e.applicationDepartment)||void 0===n?void 0:n.dName)&&void 0!==l?l:""}),null!==e&&void 0!==e&&e.applicationEndDate?(0,g.jsx)("p",{children:j()(null===e||void 0===e?void 0:e.applicationEndDate).format("DD/MM/YYYY")}):""]})]})]},null===e||void 0===e?void 0:e._id)}))),"MULTI_APP_ACCESS"===F.mod_role?(0,g.jsx)(g.Fragment,{children:"MODERATOR_PREWVIEW"===y?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.Z,{label:"add_more",onAction:()=>L("SELECT_APPLICATION")}),(0,g.jsx)(h.Z,{label:"assign",onAction:Y})]}):(0,g.jsx)(f.Z,{label:"moderator_select_application",onAction:()=>L("SELECT_APPLICATION")})}):(0,g.jsx)(h.Z,{label:"assign",onAction:Y})]}),"LOADING"===y&&(0,g.jsx)(S.Z,{})]})})}),"PREVIEW_FORM"===y&&(0,g.jsx)(A,{onCloseEdit:$,setActivePopup:L,selectedStaff:R,moderatorState:F,onSelectRole:W,onUpdateModerator:()=>{O(F,w)},selectedApplication:G}),"SELECT_APPLICATION"===y&&(0,g.jsx)(N.Z,{aid:x,onClose:$,onSelect:e=>{null!==w&&void 0!==w&&w.includes(null===e||void 0===e?void 0:e._id)?(B((i=>null===i||void 0===i?void 0:i.filter((i=>i!==(null===e||void 0===e?void 0:e._id))))),V((i=>null===i||void 0===i?void 0:i.filter((i=>(null===i||void 0===i?void 0:i._id)!==(null===e||void 0===e?void 0:e._id)))))):(B((i=>[...i,null===e||void 0===e?void 0:e._id])),V((i=>[...i,e])))},isList:!0,selectedId:w,onDone:()=>$("dfg"),isMultiSelect:!0}),"LOADING"===y&&(0,g.jsx)(S.Z,{})]})},I={Application:"Application",Document:"Selected",Fees:"FEE COLLECTION TAB",Confirmed:"Confirmed",Review:"REVIEW TAB",Allotted:"Allotted",Cancelled:"Cancelled"},M=e=>{let{onClose:i,aid:l,openModeratorMenu:o,instituteId:n,onRefetch:t}=e;const{t:a}=(0,c.$G)(),[s,r]=(0,d.useState)(!1),[v,_]=(0,d.useState)(!1),[m]=(0,E.Bp)(),[p]=(0,E.KK)(),h=()=>{_((e=>!e))};return(0,g.jsx)(g.Fragment,{children:v?(0,g.jsx)(Z,{onClose:h,onEdit:(e,l)=>{null!==o&&void 0!==o&&o._id&&(_(!1),r((e=>!e)),p({modId:null===o||void 0===o?void 0:o._id,active_tab:null===e||void 0===e?void 0:e.one_tab,updateModerator:{role:null===e||void 0===e?void 0:e.mod_role,staffId:null===e||void 0===e?void 0:e.sid,app_array:"MULTI_APP_ACCESS"===(null===e||void 0===e?void 0:e.mod_role)||"MULTI_APP_ACCESS"===(null===e||void 0===e?void 0:e.mod_role)?l:[]}}).then((()=>{t(),r((e=>!e)),i()})).catch({}))},openModeratorMenu:o,openAs:"EDIT",aid:l,instituteId:n}):(0,g.jsxs)(u.Z,{onClose:i,disabled:s,children:[(0,g.jsx)("h6",{onClick:h,children:a("edit")}),(0,g.jsx)("h6",{onClick:()=>{l&&null!==o&&void 0!==o&&o._id&&(r((e=>!e)),m({aid:l,modId:null===o||void 0===o?void 0:o._id}).then((()=>{t(),r((e=>!e)),i()})).catch({}))},children:a("delete")})]})})},T=e=>{var i,l,n,t,a,s,r,u,m,p,h,f,x;let{moderator:j,instituteId:A,aid:S,onRefetch:C}=e;const{t:E}=(0,c.$G)(),[N,Z]=(0,d.useState)("");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:v.Z.moderator_card,children:[(0,g.jsx)("img",{src:null!==j&&void 0!==j&&null!==(i=j.access_staff)&&void 0!==i&&i.staffProfilePhoto?"".concat(_.yI,"/").concat(null===j||void 0===j||null===(l=j.access_staff)||void 0===l?void 0:l.staffProfilePhoto):"".concat(o.p3,"/feed-user-avatar.svg"),alt:"moderator avatar"}),(0,g.jsxs)("section",{className:v.Z.moderator_card_text_container,children:[(0,g.jsx)("h6",{children:"".concat(null===j||void 0===j||null===(n=j.access_staff)||void 0===n?void 0:n.staffFirstName," ").concat(null!==(t=null===j||void 0===j||null===(a=j.access_staff)||void 0===a?void 0:a.staffMiddleName)&&void 0!==t?t:""," ").concat(null===j||void 0===j||null===(s=j.access_staff)||void 0===s?void 0:s.staffLastName)}),(0,g.jsxs)("p",{children:[E("index_number")," "," : ",null===j||void 0===j||null===(r=j.access_staff)||void 0===r?void 0:r.staffROLLNO]}),(0,g.jsx)("p",{children:"MULTI_APP_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"Application Manager":"ONGOING_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"All Application Manager":"ONGOING_VIEW_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"All Application Manager (Only View)":"INQUIRY_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"Enquiries Section":"COMBINED_APP_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"Combined Application":"ONE_TAB_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"Application"===(null===j||void 0===j||null===(u=j.active_tab)||void 0===u?void 0:u.role)?"Admission Application Tab":"Selected"===(null===j||void 0===j||null===(m=j.active_tab)||void 0===m?void 0:m.role)?"Admission Document Tab":"Confirmed"===(null===j||void 0===j||null===(p=j.active_tab)||void 0===p?void 0:p.role)?"Admission Confirmed Tab":"Allotted"===(null===j||void 0===j||null===(h=j.active_tab)||void 0===h?void 0:h.role)?"Admission Allotted Tab":"FEE COLLECTION TAB"===(null===j||void 0===j||null===(f=j.active_tab)||void 0===f?void 0:f.role)?"Admission Fee Collection Tab":"REVIEW TAB"===(null===j||void 0===j||null===(x=j.active_tab)||void 0===x?void 0:x.role)?"Admission Review Tab":"Admission Cancelled Tab":"DATA_EXPORT_ACCESS"===(null===j||void 0===j?void 0:j.access_role)?"Data Export Authority":""})]}),(0,g.jsx)("img",{src:"".concat(o.J7,"/menu.svg"),alt:"menu icon",onClick:()=>{Z(j)},className:v.Z.menu_icon,title:"Menu"})]}),N&&(0,g.jsx)(M,{onClose:()=>{Z("")},aid:S,openModeratorMenu:N,instituteId:A,onRefetch:C})]})};var O=l(56959),b=l(1669),P=l(2651);const y=e=>{var i,l,v,_;let{aid:u,instituteId:m}=e;const{t:p}=(0,c.$G)(),[f,x]=(0,d.useState)(""),[j,A]=(0,d.useState)(""),[C,N]=(0,d.useState)(1),[I,M]=(0,d.useState)(!0),[y,L]=(0,r.YD)({skip:f}),[R,D]=(0,d.useState)(!1),{admissionModeratorList:F,admissionModeratorListLoading:k,admissionModeratorListRefetch:G}=(0,E.FC)({data:{aid:u,page:C,limit:10,search:f},skip:!u});(0,d.useEffect)((()=>{L&&I&&N((e=>e+1))}),[L,I]),(0,d.useEffect)((()=>{var e;if(null!==F&&void 0!==F&&null!==(e=F.list)&&void 0!==e&&e.length){var i;let e=(0,s.f)(null===F||void 0===F||null===(i=F.list)||void 0===i?void 0:i.length);M((()=>e))}}),[null===F||void 0===F||null===(i=F.list)||void 0===i?void 0:i.length]);const V=()=>{D((e=>!e))},w=(0,d.useCallback)((()=>{N((()=>1)),x(""),G()}),[G]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(t.Z,{children:[(0,g.jsx)(a.Z,{children:(0,g.jsxs)("div",{className:O.Z.fm_header_container,children:[(0,g.jsx)("h6",{children:p("admission_moderators")}),(0,g.jsxs)("div",{className:O.Z.fm_search,children:[(0,g.jsx)("section",{className:O.Z.fm_search_container,children:(0,g.jsxs)("div",{className:O.Z.fm_search_container_inner,children:[(0,g.jsx)("img",{className:O.Z.fm_search_icon,alt:"search icon",src:"".concat(o.dB,"/navbar-search.svg")}),(0,g.jsx)("input",{type:"text",placeholder:p("search"),onChange:e=>{var i;!k&&(null===F||void 0===F||null===(i=F.list)||void 0===i?void 0:i.length)>=0&&A(e.target.value)},style:{minWidth:"280px"},onKeyUp:e=>{"Enter"===e.key&&(N((()=>1)),x(j))},value:j})]})}),(0,g.jsx)(h.Z,{label:"add_new_moderator",onAction:V,customStyle:{padding:"0.4rem",margin:"0"}})]})]})}),(0,g.jsx)(n.Z,{}),(0,g.jsxs)(a.Z,{customStyle:{paddingTop:"0.2rem"},children:[null===F||void 0===F||null===(l=F.list)||void 0===l?void 0:l.map(((e,i)=>{var l;return(null===F||void 0===F||null===(l=F.list)||void 0===l?void 0:l.length)===i+1?(0,g.jsx)("div",{ref:y,children:(0,g.jsx)(T,{moderator:e,aid:u,instituteId:m,onRefetch:w})},null===e||void 0===e?void 0:e._id):(0,g.jsx)(T,{moderator:e,aid:u,instituteId:m,onRefetch:w},null===e||void 0===e?void 0:e._id)})),k?f?(0,g.jsx)(S.Z,{}):(0,g.jsx)(g.Fragment,{children:1===C?(0,g.jsx)(S.Z,{}):(0,g.jsx)(b.Z,{})}):f?0===(null===F||void 0===F||null===(v=F.list)||void 0===v?void 0:v.length)&&(0,g.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No moderator found related this search."}):0===(null===F||void 0===F||null===(_=F.list)||void 0===_?void 0:_.length)&&(0,g.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No moderator added."})]})]}),R&&(0,g.jsx)(Z,{instituteId:m,aid:u,onClose:V,onRefetch:w})]})}},46194:(e,i,l)=>{l.d(i,{Z:()=>g});var o=l(39230),n=l(90904),t=l(38857),a=l(21348),s=l(49806),d=l(98684),c=l(72791),r=l(23441),v=l(91427),_=l(57588),u=l(2651),m=l(1669),p=l(55336),h=l(43317),f=l(25056),x=l(93638),j=l(80184);const g=e=>{var i,l,g,A;let{onClose:S,onSelect:C,aid:E,selectedId:N,isList:Z,onDone:I,isMultiSelect:M}=e;const{t:T}=(0,o.$G)(),[O,b]=(0,c.useState)(""),[P,y]=(0,c.useState)(1),[L,R]=(0,c.useState)(!0),[D,F]=(0,r.YD)({skip:O}),{admissionOngoingApplication:k,admissionOngoingApplicationLoading:G}=(0,h.s5)({data:{aid:E,page:P,limit:M?1e3:10,search:O},skip:!E});(0,c.useEffect)((()=>{F&&L&&y((e=>e+1))}),[F,L]),(0,c.useEffect)((()=>{var e;if(null!==k&&void 0!==k&&null!==(e=k.list)&&void 0!==e&&e.length){var i;let e=(0,v.f)(null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.length);R((()=>e))}}),[null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.length]);const V=(0,c.useCallback)((0,_.J)((e=>{y((()=>1)),b(e)}),1500),[]);return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(t.Z,{children:(0,j.jsxs)("div",{className:s.Z.modal_container,children:[(0,j.jsx)(a.Z,{children:(0,j.jsxs)("div",{className:s.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:s.Z.modal_container_header,children:(0,j.jsx)("h6",{children:T("ongoing_applications")})}),(0,j.jsxs)("div",{className:s.Z.modal_container_btn_container,children:[M&&(0,j.jsx)(x.Z,{label:T("select"),count:null===N||void 0===N?void 0:N.length,onAction:I,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,j.jsx)("img",{src:"".concat(d.J7,"/close.svg"),alt:"close icon",onClick:S,className:s.Z.close_icon})]})]})}),(0,j.jsx)(n.Z,{}),(0,j.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsxs)("div",{className:s.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,j.jsx)("input",{type:"text",placeholder:T("search"),className:s.Z.assign_search_input,onChange:e=>{e.target.value?V(e.target.value):(y((()=>1)),b(""))},style:{width:"100%"}}),(0,j.jsx)("img",{src:"".concat(d.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===k||void 0===k||null===(l=k.list)||void 0===l?void 0:l.map(((e,i)=>{var l;return(null===k||void 0===k||null===(l=k.list)||void 0===l?void 0:l.length)===i+1?(0,j.jsx)("div",{ref:D,children:(0,j.jsx)(f.Z,{application:e,onSelect:C,isList:Z,selectedId:N})},null===e||void 0===e?void 0:e._id):(0,j.jsx)(f.Z,{application:e,onSelect:C,isList:Z,selectedId:N},null===e||void 0===e?void 0:e._id)})),G?O?(0,j.jsx)(p.Z,{}):(0,j.jsx)(m.Z,{}):O?0===(null===k||void 0===k||null===(g=k.list)||void 0===g?void 0:g.length)&&(0,j.jsx)(u.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No ongoing applications found related this search."}):0===(null===k||void 0===k||null===(A=k.list)||void 0===A?void 0:A.length)&&(0,j.jsx)(u.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No ongoing applications list."})]})]})})})}},25056:(e,i,l)=>{l.d(i,{Z:()=>a});var o=l(98684),n=l(26192),t=l(80184);const a=e=>{var i,l,a,s,d,c;let{application:r,onSelect:v,selectedId:_,isList:u}=e;const m=()=>{v(r)};return(0,t.jsx)(t.Fragment,{children:u?(0,t.jsx)("div",{className:null!==_&&void 0!==_&&_.includes(null===r||void 0===r?void 0:r._id)?"".concat(n.Z.ongoing_card," ").concat(n.Z.ongoing_card_active):n.Z.ongoing_card,onClick:m,children:(0,t.jsxs)("div",{className:n.Z.ongoing_card_inner,children:[(0,t.jsx)("img",{alt:"Ongoing App",src:"".concat(o.U_,"/application.svg")}),(0,t.jsxs)("div",{className:n.Z.ongoing_card_text,children:[(0,t.jsx)("h6",{children:null!==(i=null===r||void 0===r?void 0:r.applicationName)&&void 0!==i?i:""}),(0,t.jsx)("p",{children:null!==(l=null===r||void 0===r||null===(a=r.applicationDepartment)||void 0===a?void 0:a.dName)&&void 0!==l?l:""})]})]})}):(0,t.jsx)("div",{className:_===(null===r||void 0===r?void 0:r._id)?"".concat(n.Z.ongoing_card," ").concat(n.Z.ongoing_card_active):n.Z.ongoing_card,onClick:m,children:(0,t.jsxs)("div",{className:n.Z.ongoing_card_inner,children:[(0,t.jsx)("img",{alt:"Ongoing App",src:"".concat(o.U_,"/application.svg")}),(0,t.jsxs)("div",{className:n.Z.ongoing_card_text,children:[(0,t.jsx)("h6",{children:null!==(s=null===r||void 0===r?void 0:r.applicationName)&&void 0!==s?s:""}),(0,t.jsx)("p",{children:null!==(d=null===r||void 0===r||null===(c=r.applicationDepartment)||void 0===c?void 0:c.dName)&&void 0!==d?d:""})]})]})})})}},90702:(e,i,l)=>{l.d(i,{Z:()=>A});var o=l(49806),n=l(38857),t=l(21348),a=l(90904),s=l(98684),d=l(39230),c=l(72791),r=l(23441),v=l(91427),_=l(57588),u=l(6758),m=l(1095),p=l(80184);const h=e=>{var i,l,n,t,c,r;let{staff:v,selectedId:_,onSelect:u,selectList:h,isMultiSelect:f,onMultiSelect:x}=e;const{t:j}=(0,d.$G)();return(0,p.jsxs)(p.Fragment,{children:[f?(0,p.jsxs)("div",{className:o.Z.assign_show_list_each,onClick:()=>{x(v)},children:[null!==h&&void 0!==h&&h.includes(null===v||void 0===v?void 0:v._id)?(0,p.jsx)("img",{src:"".concat(s.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,p.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(s.U_,"/uncheck.svg"),alt:"icon"}),(0,p.jsx)("img",{src:null!==v&&void 0!==v&&v.staffProfilePhoto?"".concat(m.yI,"/").concat(v.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,p.jsxs)("div",{className:o.Z.assign_each_paragraph,children:[(0,p.jsx)("h6",{children:"".concat(null!==(i=null===v||void 0===v?void 0:v.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(l=null===v||void 0===v?void 0:v.staffMiddleName)&&void 0!==l?l:""," ").concat(null!==(n=null===v||void 0===v?void 0:v.staffLastName)&&void 0!==n?n:"")}),(0,p.jsxs)("p",{children:[j("index_number")," "," : ",null===v||void 0===v?void 0:v.staffROLLNO]})]})]}):(0,p.jsxs)("div",{className:o.Z.assign_show_list_each,style:_===(null===v||void 0===v?void 0:v._id)?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:null,onClick:()=>{u(v)},children:[(0,p.jsx)("img",{src:null!==v&&void 0!==v&&v.staffProfilePhoto?"".concat(m.yI,"/").concat(v.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,p.jsxs)("div",{className:o.Z.assign_each_paragraph,children:[(0,p.jsx)("h6",{children:"".concat(null!==(t=null===v||void 0===v?void 0:v.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(c=null===v||void 0===v?void 0:v.staffMiddleName)&&void 0!==c?c:""," ").concat(null!==(r=null===v||void 0===v?void 0:v.staffLastName)&&void 0!==r?r:"")}),(0,p.jsxs)("p",{children:[j("index_number")," "," : ",null===v||void 0===v?void 0:v.staffROLLNO]})]})]}),(0,p.jsx)(a.Z,{customStyleBorder:{margin:"0"}})]})};var f=l(55336),x=l(1669),j=l(2651),g=l(93638);const A=e=>{var i,l,m,A;let{title:S,onClose:C,selectedId:E,onSelectStaff:N,instituteId:Z,isMultiSelect:I,onMultiSelect:M,selectList:T,onDone:O}=e;const{t:b}=(0,d.$G)(),[P,y]=(0,c.useState)(""),[L,R]=(0,c.useState)(1),[D,F]=(0,c.useState)(!0),[k,G]=(0,r.YD)({skip:P}),{instituteAllStaff:V,instituteAllStaffLoading:w}=(0,u.nb)({data:{id:Z,page:L,limit:10,search:P},skip:!Z});(0,c.useEffect)((()=>{G&&D&&R((e=>e+1))}),[G,D]),(0,c.useEffect)((()=>{var e;if(null!==V&&void 0!==V&&null!==(e=V.list)&&void 0!==e&&e.length){var i;let e=(0,v.f)(null===V||void 0===V||null===(i=V.list)||void 0===i?void 0:i.length);F((()=>e))}}),[null===V||void 0===V||null===(i=V.list)||void 0===i?void 0:i.length]);const B=(0,c.useCallback)((0,_.J)((e=>{R((()=>1)),y(e)}),1500),[]),U=e=>{E===(null===e||void 0===e?void 0:e._id)||N(e)};return(0,p.jsx)(n.Z,{onClose:C,children:(0,p.jsxs)("div",{className:o.Z.modal_container,children:[(0,p.jsx)(t.Z,{children:(0,p.jsxs)("div",{className:o.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:o.Z.modal_container_header,children:(0,p.jsx)("h6",{children:b(null!==S&&void 0!==S?S:"staff_list")})}),(0,p.jsxs)("div",{className:o.Z.modal_container_btn_container,children:[I&&(0,p.jsx)(g.Z,{label:b("select"),count:null===T||void 0===T?void 0:T.length,onAction:O,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,p.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:C})]})]})}),(0,p.jsx)(a.Z,{}),(0,p.jsxs)(t.Z,{customStyle:{paddingBottom:"1rem"},children:[(0,p.jsxs)("div",{className:o.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,p.jsx)("input",{type:"text",placeholder:b("search"),className:o.Z.assign_search_input,onChange:e=>{e.target.value?B(e.target.value):(R((()=>1)),y(""))},style:{width:"100%"}}),(0,p.jsx)("img",{src:"".concat(s.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===V||void 0===V||null===(l=V.list)||void 0===l?void 0:l.map(((e,i)=>{var l;return(null===V||void 0===V||null===(l=V.list)||void 0===l?void 0:l.length)===i+1?(0,p.jsx)("div",{ref:k,children:(0,p.jsx)(h,{staff:e,selectedId:E,onSelect:U,selectList:T,isMultiSelect:I,onMultiSelect:M})},null===e||void 0===e?void 0:e._id):(0,p.jsx)(h,{staff:e,selectedId:E,onSelect:U,selectList:T,isMultiSelect:I,onMultiSelect:M},null===e||void 0===e?void 0:e._id)})),w?P?(0,p.jsx)(f.Z,{}):(0,p.jsx)(x.Z,{}):P?0===(null===V||void 0===V||null===(m=V.list)||void 0===m?void 0:m.length)&&(0,p.jsx)(j.Z,{title:"No staff found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===V||void 0===V||null===(A=V.list)||void 0===A?void 0:A.length)&&(0,p.jsx)(j.Z,{title:"No staff.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},23449:(e,i,l)=>{l.d(i,{Z:()=>o});const o={moderator_card:"FinanceModerator_moderator_card__T--+-",moderator_card_text_container:"FinanceModerator_moderator_card_text_container__6jmpJ",menu_icon:"FinanceModerator_menu_icon__QsTsH",selected_staff_container:"FinanceModerator_selected_staff_container__xtfxL",selected_staff_text:"FinanceModerator_selected_staff_text__8sr0m",application_card:"FinanceModerator_application_card__05c8b",application_card_active:"FinanceModerator_application_card_active__yPVys",application_card_text:"FinanceModerator_application_card_text__wx+1V",application_card_text_bottom:"FinanceModerator_application_card_text_bottom__eLmpt",modal_container:"FinanceModerator_modal_container__P1hQi",modal_container_outer_header:"FinanceModerator_modal_container_outer_header__F746g",modal_container_header:"FinanceModerator_modal_container_header__FPMSZ"}}}]);
//# sourceMappingURL=89184.34ac009f.chunk.js.map