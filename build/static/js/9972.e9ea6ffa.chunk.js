"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[9972],{12953:(e,t,s)=>{s.d(t,{A:()=>n,t:()=>l});const n=e=>{const t=new Date,s=null===e||void 0===e?void 0:e.split("/");return!(t<=new Date("".concat(s[2],"-").concat(s[1],"-").concat(s[0])))},l=e=>{const t=new Date,s=null===e||void 0===e?void 0:e.split("/");return t<=new Date("".concat(s[2],"-").concat(s[1],"-").concat(s[0]))?{status:!0,value:"".concat(s[2],"-").concat(s[1],"-").concat(s[0])}:{status:!1,value:""}}},9972:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var n=s(72791),l=s(91727),a=s(90443),i=s(36665),o=s(97655),c=s(39230),d=s(60163),r=s(98094),u=s(59965),m=s(12953),v=s(80184);const f=e=>{let{feesInfo:t,onGrabInfo:s}=e;const{t:l}=(0,c.$G)(),[a,i]=(0,n.useState)({feeName:"",feeAmount:"",feeDate:""}),[f,h]=(0,n.useState)("");(0,n.useEffect)((()=>{t&&i((e=>({...e,...t})))}),[t]);const x=e=>{"feeAmount"===e.target.name?i((t=>({...t,feeAmount:+e.target.value}))):i((t=>({...t,[e.target.name]:e.target.value})))};return(0,v.jsxs)("div",{className:d.Z.seating_modal,style:{minHeight:"23rem"},children:[(0,v.jsxs)("section",{className:d.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,v.jsx)("h6",{children:l("create_fees")}),(0,v.jsx)("button",{className:d.Z.next_btn,title:"Next",onClick:()=>{const e=(e=>{const t={};for(let s in e)e[s]||(t[s]="".concat(s," is required!"));return t})(a);let t=!1;for(let s in e)if(s){t=!0;break}t?h(e):s(a)},children:l("next")})]}),(0,v.jsx)(r.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,v.jsx)(o.Z,{labelText:l("department_fees_name"),placeholder:l("enter_fee_purpose"),name:"feeName",value:a.feeName,type:"text",onChange:x,errorShow:f.feeName}),(0,v.jsx)(o.Z,{labelText:l("amount"),placeholder:l("enter_fees_amount"),name:"feeAmount",value:a.feeAmount,type:"number",onChange:x,errorShow:f.feeAmount}),(0,v.jsx)(u.Z,{labelText:l("due_date"),placeholder:l("enter_fees_date"),name:"feeDate",value:a.feeDate,onDateFunction:e=>{if(!(0,m.A)(e)){let t=null===e||void 0===e?void 0:e.split("/"),s="".concat(t[2],"-").concat(t[1],"-").concat(t[0]);i((e=>({...e,feeDate:s})))}},customStyleContainer:{position:"relative",width:"100%"},datePickerPosition:{top:"-13rem",left:"2rem"},errorShow:f.feeDate})]})};var h=s(11105),x=s(34219),_=s(13355),p=s(98734);const j=e=>{let{onBack:t,bid:s,did:a,createFees:i,onResetAfterCreate:o}=e;const{t:u}=(0,c.$G)(),[m,f]=(0,n.useState)(!0),[j,g]=(0,n.useState)(!1),[N,S]=(0,n.useState)([]),[Z,C]=(0,n.useState)([]),[y]=(0,l.YQ)(),{departmentAllClassMaster:b,departmentAllClassMasterRefetch:k}=(0,l.lj)({data:{did:a,bid:s,page:1,limit:50},skip:!s||!a});(0,n.useEffect)((()=>{s&&a&&k()}),[s,a,k]),(0,n.useEffect)((()=>{var e,t;null!==b&&void 0!==b&&null!==(e=b.classMaster)&&void 0!==e&&e.length?(S(null===b||void 0===b?void 0:b.classMaster),f(!1)):0===(null===b||void 0===b||null===(t=b.classMaster)||void 0===t?void 0:t.length)&&f(!1)}),[null===b||void 0===b?void 0:b.classMaster]);const w=e=>{null!==Z&&void 0!==Z&&Z.includes(e)?C((t=>null===t||void 0===t?void 0:t.filter((t=>t!==e)))):C((t=>[...t,e]))};return(0,v.jsxs)("div",{className:d.Z.seating_modal,children:[(0,v.jsxs)("section",{className:d.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,v.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:t,alt:"back"}),(0,v.jsx)("h6",{children:u("select_classes")}),(0,v.jsx)("button",{className:d.Z.next_btn,title:"Save fees",onClick:()=>{null!==Z&&void 0!==Z&&Z.length&&(g((e=>!e)),y({did:a,fees:{...i,ClassId:Z}}).then((()=>{o(),g((e=>!e))})).catch((()=>{g((e=>!e))})))},children:u("save")})]}),(0,v.jsx)(r.Z,{customStyle:{width:"100%",marginTop:"0.5rem",marginBottom:"0.5rem"}}),null===N||void 0===N?void 0:N.map((e=>{var t;return null===e||void 0===e||null===(t=e.classDivision)||void 0===t?void 0:t.map((t=>(0,v.jsx)(_.Z,{cls:t,isMaster:!0,onSelect:w,classMaster:null===e||void 0===e?void 0:e.className,divisionId:Z},t._id)))})),!m&&!(null!==N&&void 0!==N&&N.length)&&(0,v.jsx)(x.Z,{customStyleContainer:{marginTop:"4rem"},title:"No any class found",subtitle:"Please make sure you have created class."}),m&&(0,v.jsx)(h.Z,{}),j&&(0,v.jsx)(p.Z,{})]})};const g=function(e){let{did:t,bid:s,onRefetch:l,onClose:a}=e;const[o,c]=(0,n.useState)("FEES_INFO"),[d,r]=(0,n.useState)({feeName:"",feeAmount:"",feeDate:""});return(0,v.jsxs)(i.Z,{onClose:a,children:["FEES_INFO"===o&&(0,v.jsx)(f,{onClose:a,onGrabInfo:e=>{r((t=>({...t,...e}))),c("SELECT_DIVISION")},feesInfo:{feeName:d.feeName,feeAmount:d.feeAmount,feeDate:d.feeDate}}),"SELECT_DIVISION"===o&&(0,v.jsx)(j,{onBack:()=>c("EXAM_INFO"),did:t,bid:s,createFees:d,onResetAfterCreate:()=>{l(),a(),r({feeName:"",feeAmount:"",feeDate:""}),c("FEES_INFO")}})]})};var N=s(24582),S=s(12072),Z=s(84489),C=s(87049);const y=e=>{var t,s;let{onClose:l,did:a,onRefetch:i,openFeesMenu:d}=e;const{t:m}=(0,c.$G)(),[f,h]=(0,n.useState)(!1),[x,_]=(0,n.useState)(!1),[j]=(0,N._6)(),[g]=(0,N.Em)(),[y,b]=(0,n.useState)({feeName:null!==(t=null===d||void 0===d?void 0:d.feeName)&&void 0!==t?t:"",feeDate:null!==(s=null===d||void 0===d?void 0:d.feeDate)&&void 0!==s?s:""}),[k,w]=(0,n.useState)("");return(0,v.jsx)(v.Fragment,{children:x?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.Z,{onClose:()=>_(!1)}),(0,v.jsx)(S.Z,{customStyle:{zIndex:"1200"},children:(0,v.jsxs)("div",{className:C.Z.edit_modal_container,style:{width:"30rem",minHeight:"10rem",height:"auto"},children:[(0,v.jsx)("h6",{className:C.Z.edit,onClick:()=>_((e=>!e)),children:m("update_fees")}),(0,v.jsx)(r.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,v.jsx)(o.Z,{labelText:m("fees_name_edit"),placeholder:m("fees_name_placeholder"),name:"feeName",value:y.feeName,type:"text",errorShow:k.feeName,onChange:e=>{b((t=>({...t,feeName:e.target.value})))},customStyleContainer:{width:"100%"}}),(0,v.jsx)(u.Z,{labelText:m("select_fees_date"),placeholder:m("select_fees_date_placeholder"),name:"feeDate",value:y.feeDate,onDateFunction:e=>{let t=null===e||void 0===e?void 0:e.split("/"),s="".concat(t[2],"-").concat(t[1],"-").concat(t[0]);b((e=>({...e,feeDate:s})))},errorShow:k.feeDate,customStyleContainer:{position:"relative",width:"100%"},datePickerPosition:{top:"-1rem"}}),(0,v.jsx)("button",{className:C.Z.xlsx_update_btn,title:"Update",onClick:()=>{const e=(e=>{const t={};for(let s in e)e[s]||(t[s]=" ".concat(s," is required!"));return t})(y);let t=!1;for(let s in e)if(s){t=!0;break}t?w(e):(h((e=>!e)),_(!1),g({fid:null===d||void 0===d?void 0:d._id,updateFees:y}).then((()=>{i(),h((e=>!e)),l()})).catch({}))},style:{justifyContent:"center",marginTop:"1rem"},children:m("update")})]})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.Z,{onClose:l}),(0,v.jsxs)(S.Z,{customStyle:{zIndex:"1200"},children:[(0,v.jsxs)("div",{className:C.Z.edit_modal_container,style:{width:"200px"},children:[(0,v.jsx)("h6",{className:C.Z.edit,onClick:()=>_((e=>!e)),children:"Edit"}),(0,v.jsx)("h6",{className:C.Z.remove,onClick:()=>{h((e=>!e)),j({did:a,fid:null===d||void 0===d?void 0:d._id}).then((()=>{i(),l(),h((e=>!e))})).catch({})},children:"Delete"})]}),f&&(0,v.jsx)(p.Z,{})]})]})})},b="List_exam_card_container__Uviom",k="List_exam_inner_text__ViVMz",w="List_menu_icon__boy56",D="List_fees_image__ypsom",F=e=>{var t,s;let{fees:l,onRefetch:a,did:i}=e;const[o,c]=(0,n.useState)("");return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)("img",{src:"/images/members/fees-icon.svg",alt:"fees icon",className:D}),(0,v.jsxs)("div",{className:k,children:[(0,v.jsxs)("h6",{children:["Rs. ",null!==(t=null===l||void 0===l?void 0:l.feeAmount)&&void 0!==t?t:0,"/-"]}),(0,v.jsxs)("p",{children:[null!==(s=null===l||void 0===l?void 0:l.feeName)&&void 0!==s?s:""," "]})]}),(0,v.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:()=>c(l),className:w,title:"Menu"})]}),o&&(0,v.jsx)(y,{did:i,onRefetch:a,openFeesMenu:o,onClose:()=>c("")})]})};const I=function(e){var t,s,i;let{did:o,bid:d}=e;const{t:u}=(0,c.$G)(),[m,f]=(0,n.useState)(!1),[_,p]=(0,n.useState)(!0),[j,N]=(0,n.useState)([]),[S,Z]=(0,n.useState)(!1),{departmentAllFees:C,departmentAllFeesRefetch:y}=(0,l.bP)({data:{did:o,page:1,limit:20},skip:!o});(0,n.useEffect)((()=>{o&&y()}),[o,y]),(0,n.useEffect)((()=>{var e,t,s,n,l;null!==C&&void 0!==C&&null!==(e=C.depart)&&void 0!==e&&null!==(t=e.fees)&&void 0!==t&&t.length?(N(null===C||void 0===C||null===(l=C.depart)||void 0===l?void 0:l.fees),p(!1)):0===(null===C||void 0===C||null===(s=C.depart)||void 0===s||null===(n=s.fees)||void 0===n?void 0:n.length)&&p(!1)}),[null===C||void 0===C||null===(t=C.depart)||void 0===t?void 0:t.fees]);const b=()=>{f((e=>!e))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:a.Z.exam_container,children:[(0,v.jsxs)("div",{className:a.Z.with_search,children:[(0,v.jsx)("h6",{children:u("previous_fees_list")}),(0,v.jsx)("section",{className:a.Z.search_container,children:(0,v.jsxs)("div",{className:a.Z.search_container_input,children:[(0,v.jsx)("img",{className:a.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,v.jsx)("input",{type:"text",placeholder:"Search fees...",onChange:e=>{if(e.target.value){var t,s;const n=null===C||void 0===C||null===(t=C.depart)||void 0===t||null===(s=t.fees)||void 0===s?void 0:s.filter((t=>{var s,n,l;return null!==t&&void 0!==t&&null!==(s=t.feeName)&&void 0!==s&&null!==(n=s.toLowerCase())&&void 0!==n&&n.includes(null===(l=e.target.value)||void 0===l?void 0:l.toLowerCase())?t:null}));0===(null===n||void 0===n?void 0:n.length)?Z(!0):Z(!1),N(n)}else{var n;Z(!1),N(null===C||void 0===C||null===(n=C.depart)||void 0===n?void 0:n.fees)}}})]})})]}),(0,v.jsx)(r.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),(0,v.jsx)("div",{className:a.Z.add_new_container,children:(0,v.jsx)("p",{className:a.Z.add_new_exam,onClick:b,children:u("create_new_fees")})}),null===j||void 0===j?void 0:j.map((e=>(0,v.jsx)(F,{fees:e,onRefetch:y,did:o},e._id))),!_&&!(null!==C&&void 0!==C&&null!==(s=C.depart)&&void 0!==s&&null!==(i=s.fees)&&void 0!==i&&i.length)&&(0,v.jsx)(x.Z,{customStyleContainer:{marginTop:"9rem"},title:"No any fees found",subtitle:"Please make sure you have created fees."}),S&&(0,v.jsx)(x.Z,{customStyleContainer:{marginTop:"9rem"},title:"No any search found"}),_&&(0,v.jsx)(h.Z,{})]}),m&&(0,v.jsx)(g,{did:o,bid:d,onRefetch:y,onClose:b})]})}},13355:(e,t,s)=>{s.d(t,{Z:()=>a});s(72791);var n=s(60163),l=s(80184);const a=e=>{var t;let{cls:s,classMaster:a,onSelect:i,divisionId:o}=e;return(0,l.jsxs)("div",{className:null!==o&&void 0!==o&&o.includes(null===s||void 0===s?void 0:s._id)?"".concat(n.Z.class_container," ").concat(n.Z.class_container_active):n.Z.class_container,title:"Select class",onClick:()=>i(null===s||void 0===s?void 0:s._id),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,l.jsx)("img",{src:"/images/master-24-grey-icon.svg",alt:"classes icon"}),(0,l.jsxs)("h6",{children:[null!==a&&void 0!==a?a:""," - ",null!==(t=null===s||void 0===s?void 0:s.classTitle)&&void 0!==t?t:""]})]})}}}]);
//# sourceMappingURL=9972.e9ea6ffa.chunk.js.map