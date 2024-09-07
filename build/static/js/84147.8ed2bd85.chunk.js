"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[84147],{84147:(e,s,t)=>{t.r(s),t.d(s,{default:()=>w});var l=t(72791),i=t(91727),c=t(90443),n=t(36665),a=t(97655),o=t(39230),d=t(60163),r=t(98094),h=t(91022),u=t(80184);const m=e=>{let{checklistInfo:s,onGrabInfo:t,is_edit:i}=e;const{t:c}=(0,o.$G)(),[n,m]=(0,l.useState)({checklistName:"",checklistAmount:"",checklistFees:""}),[v,k]=(0,l.useState)("");(0,l.useEffect)((()=>{s&&m((e=>({...e,...s})))}),[s]);const _=e=>{"checklistAmount"===e.target.name?m((s=>({...s,checklistAmount:+e.target.value}))):m((s=>({...s,[e.target.name]:e.target.value})))},x=()=>{const e=(e=>{const s={};for(let t in e)"checklistAmount"===t?"Yes"===e.checklistFees&&(e[t]||(s[t]="".concat(t," is required!"))):e[t]||(s[t]="".concat(t," is required!"));return s})(n);let s=!1;for(let t in e)if(t){s=!0;break}s?k(e):t(n)};return(0,u.jsxs)("div",{className:d.Z.seating_modal,style:{minHeight:"17rem"},children:[(0,u.jsxs)("section",{className:d.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,u.jsx)("h6",{children:c("create_checklist")}),i?(0,u.jsx)("button",{className:d.Z.next_btn,title:"Update Checklist",onClick:x,children:c("update")}):(0,u.jsx)("button",{className:d.Z.next_btn,title:"Next",onClick:x,children:c("next")})]}),(0,u.jsx)(r.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,u.jsx)(a.Z,{labelText:c("department_checklist_name"),placeholder:c("enter_checklist_name"),name:"checklistName",value:n.checklistName,type:"text",onChange:_,errorShow:v.checklistName}),(0,u.jsx)(h.Z,{selectLabel:c("select_fees"),selectedValue:c("select_fess_yes_no"),name:"checklistFees",value:n.checklistFees,onClick:e=>m((s=>({...s,checklistFees:e}))),errorShow:v.checklistFees,options:["Yes","No"]}),"Yes"===n.checklistFees?(0,u.jsx)(a.Z,{labelText:c("amount"),placeholder:c("enter_fees_amount"),name:"checklistAmount",value:n.checklistAmount,type:"number",onChange:_,errorShow:v.checklistAmount}):""]})};var v=t(11105),k=t(34219),_=t(98734),x=t(13355);const j=e=>{let{onBack:s,bid:t,did:c,createFees:n,onResetAfterCreate:a}=e;const{t:h}=(0,o.$G)(),[m,j]=(0,l.useState)(!0),[f,g]=(0,l.useState)(!1),[N,p]=(0,l.useState)([]),[C,S]=(0,l.useState)([]),[Z]=(0,i.xw)(),{departmentAllClassMaster:F,departmentAllClassMasterRefetch:b}=(0,i.lj)({data:{did:c,bid:t,page:1,limit:50},skip:!t||!c});(0,l.useEffect)((()=>{t&&c&&b()}),[t,c,b]),(0,l.useEffect)((()=>{var e,s;null!==F&&void 0!==F&&null!==(e=F.classMaster)&&void 0!==e&&e.length?(p(null===F||void 0===F?void 0:F.classMaster),j(!1)):0===(null===F||void 0===F||null===(s=F.classMaster)||void 0===s?void 0:s.length)&&j(!1)}),[null===F||void 0===F?void 0:F.classMaster]);const y=e=>{null!==C&&void 0!==C&&C.includes(e)?S((s=>null===s||void 0===s?void 0:s.filter((s=>s!==e)))):S((s=>[...s,e]))};return(0,u.jsxs)("div",{className:d.Z.seating_modal,children:[(0,u.jsxs)("section",{className:d.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,u.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:s,alt:"back"}),(0,u.jsx)("h6",{children:h("select_classes")}),(0,u.jsx)("button",{className:d.Z.next_btn,title:"Save checklist",onClick:()=>{null!==C&&void 0!==C&&C.length&&(g((e=>!e)),Z({did:c,createChecklist:{...n,ClassId:C}}).then((()=>{a(),g((e=>!e))})).catch((()=>{g((e=>!e))})))},children:h("save")})]}),(0,u.jsx)(r.Z,{customStyle:{width:"100%",marginTop:"0.5rem",marginBottom:"0.5rem"}}),null===N||void 0===N?void 0:N.map((e=>{var s;return null===e||void 0===e||null===(s=e.classDivision)||void 0===s?void 0:s.map((s=>(0,u.jsx)(x.Z,{cls:s,isMaster:!0,onSelect:y,classMaster:null===e||void 0===e?void 0:e.className,divisionId:C},s._id)))})),!m&&!(null!==N&&void 0!==N&&N.length)&&(0,u.jsx)(k.Z,{customStyleContainer:{marginTop:"4rem"},title:"No any class found",subtitle:"Please make sure you have created class."}),m&&(0,u.jsx)(v.Z,{}),f&&(0,u.jsx)(_.Z,{})]})};const f=function(e){let{did:s,bid:t,onRefetch:i,onClose:c,onEdit:a,is_edit:o,checklistData:d}=e;const[r,h]=(0,l.useState)("FEES_INFO"),[v,k]=(0,l.useState)({checklistName:o?null===d||void 0===d?void 0:d.checklistName:"",checklistAmount:o?null===d||void 0===d?void 0:d.checklistAmount:"",checklistFees:o?null===d||void 0===d?void 0:d.checklistFees:""});return(0,l.useEffect)((()=>{o&&d&&k((e=>({...e,checklistName:null===d||void 0===d?void 0:d.checklistName,checklistAmount:null===d||void 0===d?void 0:d.checklistAmount,checklistFees:null===d||void 0===d?void 0:d.checklistFees})))}),[o,d]),(0,u.jsxs)(n.Z,{onClose:c,children:["FEES_INFO"===r&&(0,u.jsx)(m,{onClose:c,onGrabInfo:e=>{o?a(e):(k((s=>({...s,...e}))),h("SELECT_DIVISION"))},checklistInfo:v,is_edit:o}),"SELECT_DIVISION"===r&&(0,u.jsx)(j,{onBack:()=>h("FEES_INFO"),did:s,bid:t,createFees:v,onResetAfterCreate:()=>{i(),c(),k({checklistName:"",checklistAmount:"",checklistFees:""}),h("FEES_INFO")}})]})},g="List_checklist_card_container__90+P6",N="List_checklist_card_left__2-N48",p="List_checklist_inner_text__QnPAv",C="List_menu_icon__YMaLT",S="List_fees_image__s0+xg";var Z=t(72426),F=t.n(Z),b=t(12072),y=t(84489),E=t(87049);const A=e=>{let{did:s,onRefetch:t,openChecklistMenu:c,onClose:n}=e;const[a,o]=(0,l.useState)(!1),[d,r]=(0,l.useState)(!1),[h]=(0,i.jD)(),[m]=(0,i.X5)();return(0,u.jsx)(u.Fragment,{children:d?(0,u.jsx)(f,{checklistData:c,onClose:()=>r(!1),onEdit:e=>{o((e=>!e)),r(!1),m({cid:null===c||void 0===c?void 0:c._id,checklist:e}).then((()=>{t(),o((e=>!e)),n()})).catch({})},is_edit:!0}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(y.Z,{onClose:n}),(0,u.jsxs)(b.Z,{customStyle:{zIndex:"1200"},children:[(0,u.jsxs)("div",{className:E.Z.edit_modal_container,style:{width:"200px"},children:[(0,u.jsx)("h6",{className:E.Z.edit,onClick:()=>r((e=>!e)),children:"Edit"}),(0,u.jsx)("h6",{className:E.Z.remove,onClick:()=>{o((e=>!e)),h({did:s,cid:null===c||void 0===c?void 0:c._id}).then((()=>{t(),o((e=>!e)),n()})).catch({})},children:"Delete"})]}),a&&(0,u.jsx)(_.Z,{})]})]})})},I=e=>{var s,t;let{checklist:i,onRefetch:c,did:n}=e;const{t:a}=(0,o.$G)(),[d,r]=(0,l.useState)("");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:g,children:[(0,u.jsxs)("div",{className:N,children:[(0,u.jsx)("img",{src:"/images/members/fees-icon.svg",alt:"fees icon",className:S}),(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("h6",{children:null!==(s=null===i||void 0===i?void 0:i.checklistName)&&void 0!==s?s:0}),(0,u.jsxs)("p",{children:[a("created_on")," ",F()(null===i||void 0===i?void 0:i.createdAt).format("DD MMMM YYYY")," "]})]})]}),(0,u.jsxs)("div",{className:p,style:{alignItems:"flex-end",marginRight:"2rem"},children:[(0,u.jsxs)("h6",{children:[a("rs"),". ",null!==(t=null===i||void 0===i?void 0:i.checklistAmount)&&void 0!==t?t:0,"/-"]}),(0,u.jsxs)("p",{children:[a("fees")," "]})]}),(0,u.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:()=>r(i),className:C,title:"Menu"})]}),d&&(0,u.jsx)(A,{did:n,onRefetch:c,openChecklistMenu:d,onClose:()=>r("")})]})};const w=function(e){var s;let{did:t,bid:n}=e;const{t:a}=(0,o.$G)(),[d,h]=(0,l.useState)(!1),[m,_]=(0,l.useState)(!0),[x,j]=(0,l.useState)([]),[g,N]=(0,l.useState)(!1),{departmentAllChecklist:p,departmentAllChecklistRefetch:C}=(0,i.r5)({data:{did:t,page:1,limit:20},skip:!t});(0,l.useEffect)((()=>{t&&C()}),[t,C]),(0,l.useEffect)((()=>{var e,s;null!==p&&void 0!==p&&null!==(e=p.checklist)&&void 0!==e&&e.length?(j(null===p||void 0===p?void 0:p.checklist),_(!1)):0===(null===p||void 0===p||null===(s=p.checklist)||void 0===s?void 0:s.length)&&_(!1)}),[null===p||void 0===p?void 0:p.checklist]);const S=()=>{h((e=>!e))};return(0,l.useEffect)((()=>{t&&C()}),[C,t]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c.Z.exam_container,children:[(0,u.jsxs)("div",{className:c.Z.with_search,children:[(0,u.jsx)("h6",{children:a("previous_checklist_list")}),(0,u.jsx)("section",{className:c.Z.search_container,children:(0,u.jsxs)("div",{className:c.Z.search_container_input,children:[(0,u.jsx)("img",{className:c.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,u.jsx)("input",{type:"text",placeholder:"Search checklist...",onChange:e=>{if(e.target.value){var s;const t=null===p||void 0===p||null===(s=p.checklist)||void 0===s?void 0:s.filter((s=>{var t,l,i;return null!==s&&void 0!==s&&null!==(t=s.checklistName)&&void 0!==t&&null!==(l=t.toLowerCase())&&void 0!==l&&l.includes(null===(i=e.target.value)||void 0===i?void 0:i.toLowerCase())?s:null}));0===(null===t||void 0===t?void 0:t.length)?N(!0):N(!1),j(t)}else N(!1),j(null===p||void 0===p?void 0:p.checklist)}})]})})]}),(0,u.jsx)(r.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),(0,u.jsx)("div",{className:c.Z.add_new_container,children:(0,u.jsx)("p",{className:c.Z.add_new_exam,onClick:S,children:a("create_new_checklist")})}),null===x||void 0===x?void 0:x.map((e=>(0,u.jsx)(I,{checklist:e,onRefetch:C,did:t},e._id))),!m&&!(null!==p&&void 0!==p&&null!==(s=p.checklist)&&void 0!==s&&s.length)&&(0,u.jsx)(k.Z,{customStyleContainer:{marginTop:"9rem"},title:"No any checklist found",subtitle:"Please make sure you have created checklist."}),g&&(0,u.jsx)(k.Z,{customStyleContainer:{marginTop:"9rem"},title:"No any search found"}),m&&(0,u.jsx)(v.Z,{})]}),d&&(0,u.jsx)(f,{did:t,bid:n,onRefetch:C,onClose:S})]})}},13355:(e,s,t)=>{t.d(s,{Z:()=>c});t(72791);var l=t(60163),i=t(80184);const c=e=>{var s;let{cls:t,classMaster:c,onSelect:n,divisionId:a}=e;return(0,i.jsxs)("div",{className:null!==a&&void 0!==a&&a.includes(null===t||void 0===t?void 0:t._id)?"".concat(l.Z.class_container," ").concat(l.Z.class_container_active):l.Z.class_container,title:"Select class",onClick:()=>n(null===t||void 0===t?void 0:t._id),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,i.jsx)("img",{src:"/images/master-24-grey-icon.svg",alt:"classes icon"}),(0,i.jsxs)("h6",{children:[null!==c&&void 0!==c?c:""," - ",null!==(s=null===t||void 0===t?void 0:t.classTitle)&&void 0!==s?s:""]})]})}}}]);
//# sourceMappingURL=84147.8ed2bd85.chunk.js.map