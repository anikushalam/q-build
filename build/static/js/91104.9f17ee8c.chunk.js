"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[91104],{57387:(e,t,a)=>{a.d(t,{Z:()=>i});a(72791);var n=a(49384),l=a(78499),s=a(80184);const i=e=>{let{buttonText:t,disabled:a,customStyleButton:i,customStyleButtonText:o,onAction:c,shwoLoader:d}=e;return(0,s.jsxs)("button",{disabled:a,style:{...i},className:l.Z.button_main,onClick:c,children:[(0,s.jsx)("span",{style:{...o},children:t}),a&&d&&(0,s.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,s.jsx)(n.Z,{})})]})}},49384:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var n=a(6307),l=a(80184);const s=()=>(0,l.jsx)(n.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},47167:(e,t,a)=>{a.d(t,{Z:()=>c});a(72791);var n=a(16871),l=a(43504),s=a(23769),i=a(45639),o=a(80184);const c=e=>{let{tabList:t,activeIndexTab:a,setActiveIndexTab:c,customStyleTab:d,carryParentState:r,showAs:m,customStyleLink:u}=e;const v=(0,n.UO)();return(0,o.jsx)("div",{className:i.Z.universal_container,children:m?null===t||void 0===t?void 0:t.map(((e,t)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,o.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(i.Z.universal_container_item," ").concat(i.Z.universal_container_item_active):i.Z.universal_container_item,style:{...u,opacity:"0.5"},children:(0,o.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,o.jsx)(l.rU,{to:"/q/".concat(v.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...r},style:{...u},children:(0,o.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(i.Z.universal_container_item," ").concat(i.Z.universal_container_item_active):i.Z.universal_container_item,style:{...d},children:(0,o.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})})},t))):null===t||void 0===t?void 0:t.map(((e,t)=>(0,o.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(i.Z.universal_container_item," ").concat(i.Z.universal_container_item_active):i.Z.universal_container_item,onClick:()=>c(null===e||void 0===e?void 0:e.id),style:{...d},children:(0,o.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})},t)))})}},23769:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(72791),l=a(80184);const s=function(e){let{children:t,onclick:a}=e;const[s,i]=(0,n.useState)(!1),[o,c]=(0,n.useState)({x:-1,y:-1});return(0,n.useEffect)((()=>{-1!==o.x&&-1!==o.y?(i(!0),setTimeout((()=>i(!1)),1e3)):i(!1)}),[o]),(0,n.useEffect)((()=>{s||c({x:-1,y:-1})}),[s]),(0,l.jsxs)("div",{className:"ripple_btn",onClick:e=>{c({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),a&&a(e)},children:[s?(0,l.jsx)("span",{className:"ripple"}):"",(0,l.jsx)("span",{className:"content",children:t})]})}},91104:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(72791),l=a(39230),s=a(16871),i=a(84959),o=a(87932),c=a(98734),d=a(98094),r=a(47167),m=a(97655),u=a(33399),v=a(36665),_=a(57431),h=a(57387),x=a(80184);const g=e=>{let{onClose:t,financeId:a,onRefetch:s}=e;const{t:i}=(0,l.$G)(),[d,r]=(0,n.useState)(""),[g,y]=(0,n.useState)(!1),[j]=(0,o.FT)();return(0,x.jsxs)(v.Z,{children:[(0,x.jsxs)("div",{className:u.Z.add_category_modal,children:[(0,x.jsxs)("div",{className:u.Z.add_category_modal_title,children:[(0,x.jsx)("h6",{children:i("add_new_category")}),(0,x.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:""})]}),(0,x.jsx)(m.Z,{labelText:i("category_name"),placeholder:i("category_example"),name:"category",value:d,type:"text",onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=30&&r(e.target.value)},customStyleContainer:{width:"100%"}}),(0,x.jsx)(_.Z,{maxLength:30,valueLength:d}),(0,x.jsx)(h.Z,{type:"button",buttonText:i("create"),shwoLoader:!1,onAction:()=>{d&&(y((e=>!e)),j({fid:a,createCategory:{category_name:d}}).then((()=>{s(),t(),y((e=>!e))})).catch((()=>{y((e=>!e))})))},customStyleButton:d?{marginTop:"2rem"}:{backgroundColor:"rgb(228, 224, 224)",marginTop:"2rem"},customStyleButtonText:d?{}:{color:"rgba(18, 18, 18, 0.8)"}})]}),g&&(0,x.jsx)(c.Z,{})]})};var y=a(12072),j=a(84489),f=a(87049);const p=e=>{let{categoryList:t,selectedId:a,onSecondary:n,onClose:s}=e;const{t:i}=(0,l.$G)();return(0,x.jsx)(v.Z,{onClose:s,children:(0,x.jsxs)("div",{className:"".concat(u.Z.add_category_modal," ").concat(u.Z.seating_modal),children:[(0,x.jsxs)("div",{className:u.Z.add_category_modal_title,children:[(0,x.jsx)("h6",{children:i("select_secondary_category")}),(0,x.jsx)("img",{src:"/images/close-post-icon.svg",onClick:s,alt:""})]}),(0,x.jsx)(d.Z,{customStyle:{width:"100%",marginTop:"0.7rem",marginBottom:"0.7rem"}}),null===t||void 0===t?void 0:t.map((e=>{var t;return(null===e||void 0===e?void 0:e._id)===a?"":(0,x.jsxs)("div",{className:"".concat(u.Z.category_card," ").concat(u.Z.add_category_modal_title_active),onClick:()=>n(null===e||void 0===e?void 0:e._id),children:[(0,x.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,x.jsx)("h6",{children:null!==(t=null===e||void 0===e?void 0:e.category_name)&&void 0!==t?t:""})]},null===e||void 0===e?void 0:e._id)}))]})})},Z=e=>{let{onClose:t,fid:a,openCategoryMenu:l,onRefetch:s,categoryList:i}=e;const[d,r]=(0,n.useState)(!1),[m]=(0,o.f3)(),[u]=(0,o.fZ)(),[v,_]=(0,n.useState)(!1);return(0,x.jsx)(x.Fragment,{children:v?(0,x.jsx)(p,{selectedId:l,categoryList:i,onSecondary:e=>{_(!1),r((e=>!e)),u({fid:a,secondaryData:{old_category:l,fee_category:e}}).then((()=>{s(),t(),r((e=>!e))})).catch({})},onClose:()=>_(!1)}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j.Z,{onClose:t}),(0,x.jsxs)(y.Z,{customStyle:{zIndex:"1200"},children:[(0,x.jsxs)("div",{className:f.Z.edit_modal_container,style:{width:"250px"},children:[(0,x.jsx)("h6",{className:f.Z.edit,onClick:()=>_(!0),children:"Mark As Secondary"}),(0,x.jsx)("h6",{className:f.Z.edit,onClick:()=>{r((e=>!e)),m({cid:l}).then((()=>{s(),t(),r((e=>!e))})).catch({})},children:"Delete"})]}),d&&(0,x.jsx)(c.Z,{})]})]})})};var S=a(23441),N=a(11105);const T=e=>{let{onClose:t,financeId:a,onRefetch:s,openAs:i,openFeeHeadMenu:d,onEdit:r}=e;const{t:h}=(0,l.$G)(),[g,y]=(0,n.useState)({master_name:"EDIT"===i?null===d||void 0===d?void 0:d.master_name:"",master_amount:"EDIT"===i?null===d||void 0===d?void 0:d.master_amount:""}),[j,f]=(0,n.useState)(""),[p,Z]=(0,n.useState)(!1),[S]=(0,o.G1)();(0,n.useEffect)((()=>{"EDIT"===i&&y({master_name:null===d||void 0===d?void 0:d.master_name,master_amount:null===d||void 0===d?void 0:d.master_amount})}),[i]);const N=e=>{var t;"master_name"===e.target.name?(null===(t=e.target.value)||void 0===t?void 0:t.length)<=30&&y((t=>({...t,[e.target.name]:e.target.value}))):y((t=>({...t,[e.target.name]:+e.target.value})))};return(0,x.jsx)(v.Z,{onClose:t,children:(0,x.jsxs)("div",{className:u.Z.add_category_modal,children:[(0,x.jsxs)("div",{className:u.Z.add_category_modal_title,children:[(0,x.jsx)("h6",{children:h("EDIT"===i?"edit_fee_head":"add_new_fee_head")}),(0,x.jsx)("img",{src:"/images/close-post-icon.svg",onClick:t,alt:""})]}),(0,x.jsx)(m.Z,{labelText:h("head_name"),placeholder:h("head_name_placeholder"),name:"master_name",value:null===g||void 0===g?void 0:g.master_name,type:"text",onChange:N,errorShow:j.master_name}),(0,x.jsx)(_.Z,{maxLength:30,valueLength:null===g||void 0===g?void 0:g.master_name}),(0,x.jsx)(m.Z,{labelText:h("amount"),placeholder:h("enter_amount"),name:"master_amount",value:null===g||void 0===g?void 0:g.master_amount,type:"tel",onChange:N,errorShow:j.master_amount}),(0,x.jsx)("button",{className:u.Z.set_fees_structure_btn,title:"Add fees head",onClick:()=>{const e=(e=>{const t={};for(let a in e)e[a]||(t[a]="".concat(a," is required!"));return t})(g);let n=!1;for(let t in e)if(t){n=!0;break}n?f(e):"EDIT"===i?r(g):(Z((e=>!e)),S({fid:a,addFeeHead:g}).then((()=>{s(),t(),Z((e=>!e)),y({master_name:"",master_amount:""})})).catch({}))},style:{justifyContent:"center"},children:h("EDIT"===i?"update":"create")}),p&&(0,x.jsx)(c.Z,{})]})})},b=e=>{let{onClose:t,openFeeHeadMenu:a,onRefetch:l,financeId:s}=e;const[i,d]=(0,n.useState)(!1),[r,m]=(0,n.useState)(!1),[u]=(0,o.JL)(),[v]=(0,o.lV)();return(0,x.jsx)(x.Fragment,{children:r?(0,x.jsx)(T,{onClose:t,financeId:s,onRefetch:l,openAs:"EDIT",openFeeHeadMenu:a,onEdit:e=>{d((e=>!e)),m(!1),t(),v({fmid:null===a||void 0===a?void 0:a._id,updateFeeHead:e}).then((()=>{l(),d((e=>!e))})).catch({})}}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j.Z,{onClose:t}),(0,x.jsxs)(y.Z,{customStyle:{zIndex:"1200"},children:[(0,x.jsxs)("div",{className:f.Z.edit_modal_container,style:{width:"200px"},children:[(0,x.jsx)("h6",{className:f.Z.edit,onClick:()=>m((e=>!e)),children:"Edit"}),(0,x.jsx)("h6",{className:f.Z.remove,onClick:()=>{d((e=>!e)),u({fhid:null===a||void 0===a?void 0:a._id,fid:s}).then((()=>{l(),t(),d((e=>!e))})).catch({})},children:"Delete"})]}),i&&(0,x.jsx)(c.Z,{})]})]})})},C=e=>{let{financeId:t,openAs:a}=e;const{t:s}=(0,l.$G)(),[r,m]=(0,n.useState)(!1),[v,_]=(0,n.useState)(""),[h,g]=(0,S.YD)(),[y,j]=(0,n.useState)(1),[f,p]=(0,n.useState)(!0),[Z,C]=(0,n.useState)(!1),[A,k]=(0,n.useState)(!0),[E,R]=(0,n.useState)([]),[w,F]=(0,n.useState)(!1),[L]=(0,i.FL)(),[I]=(0,o.uD)(),{getAllFeeHeadMaster:M,getAllFeeHeadMasterRefetch:G}=(0,o.fF)({data:{fid:t,page:y,limit:10,search:""},skip:!t});(0,n.useEffect)((()=>{t&&(k(!0),G())}),[t,y,G]),(0,n.useEffect)((()=>{g&&f&&j((e=>e+1))}),[g,f]),(0,n.useEffect)((()=>{var e,t;Z?(R(null===M||void 0===M?void 0:M.all_master),k(!1),C(!1)):null!==M&&void 0!==M&&M.all_master?(R((e=>{var t,a;return null===(t=[...new Set(null===(a=[...e,...null===M||void 0===M?void 0:M.all_master])||void 0===a?void 0:a.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),k(!1)):0===(null===M||void 0===M||null===(t=M.all_master)||void 0===t?void 0:t.length)&&k(!1);10===(null===M||void 0===M||null===(e=M.all_master)||void 0===e?void 0:e.length)?p(!0):p(!1)}),[null===M||void 0===M?void 0:M.all_master]);const H=()=>{m((e=>!e))},D=()=>{j(1),C(!0),k(!0),G()};return(0,x.jsxs)(x.Fragment,{children:["HOSTEL_MANAGER"===a||"TRANSPORT_MANAGER"===a?"":(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:u.Z.upload_excel_container,children:[(0,x.jsx)("label",{className:u.Z.upload_excel_file,htmlFor:"uploadExcel",children:(0,x.jsx)("img",{src:"/images/upload-xslx-icon.svg",alt:"add student icon",title:"Upload excel file"})}),(0,x.jsx)("input",{type:"file",id:"uploadExcel",accept:".xlsx",onChange:e=>{F((e=>!e));const a=new FormData;a.append("file",e.target.files[0]),L({fileUpload:a}).then((e=>{var a,n;null!==(a=e.data)&&void 0!==a&&a.imageKey?I({fid:t,excelFile:{excel_file:null===(n=e.data)||void 0===n?void 0:n.imageKey}}).then((()=>{F((e=>!e))})).catch({}):F((e=>!e))})).catch({})},style:{display:"none"}}),(0,x.jsx)("p",{className:u.Z.add_new_category,onClick:H,children:s("add_new_fee_head")})]}),(0,x.jsx)(d.Z,{customStyle:{marginBottom:"1rem"}})]}),null===E||void 0===E?void 0:E.map(((e,t)=>{var n,l,i,o;return(null===E||void 0===E?void 0:E.length)===t+1?(0,x.jsxs)("div",{className:u.Z.category_card,ref:h,style:{height:"74px"},children:[(0,x.jsx)("img",{style:{height:"36px",width:"36px"},src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,x.jsxs)("div",{className:u.Z.category_card_fee,children:[(0,x.jsx)("h6",{style:{marginBottom:"0.3rem"},children:null!==(n=null===e||void 0===e?void 0:e.master_name)&&void 0!==n?n:""}),(0,x.jsxs)("h6",{style:{color:"rgba(18, 18, 18, 0.5)"},children:[s("rs"),".",null!==(l=null===e||void 0===e?void 0:e.master_amount)&&void 0!==l?l:0]})]}),"HOSTEL_MANAGER"===a||"TRANSPORT_MANAGER"===a||["Hostel Linked","Linked","Transport Linked"].includes(null===e||void 0===e?void 0:e.master_status)?"":(0,x.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:()=>_(e),className:u.Z.menu_icon,title:"Menu"})]},null===e||void 0===e?void 0:e._id):(0,x.jsxs)("div",{className:u.Z.category_card,style:{height:"74px"},children:[(0,x.jsx)("img",{style:{height:"36px",width:"36px"},src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,x.jsxs)("div",{className:u.Z.category_card_fee,children:[(0,x.jsx)("h6",{style:{marginBottom:"0.3rem"},children:null!==(i=null===e||void 0===e?void 0:e.master_name)&&void 0!==i?i:""}),(0,x.jsxs)("h6",{style:{color:"rgba(18, 18, 18, 0.5)"},children:[s("rs"),".",null!==(o=null===e||void 0===e?void 0:e.master_amount)&&void 0!==o?o:0]})]}),"HOSTEL_MANAGER"===a||"TRANSPORT_MANAGER"===a||["Hostel Linked","Linked","Transport Linked"].includes(null===e||void 0===e?void 0:e.master_status)?"":(0,x.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:()=>_(e),className:u.Z.menu_icon,title:"Menu"})]},null===e||void 0===e?void 0:e._id)})),A&&(0,x.jsx)(N.Z,{}),r&&(0,x.jsx)(T,{onClose:H,financeId:t,onRefetch:D}),v&&(0,x.jsx)(b,{openFeeHeadMenu:v,onRefetch:D,onClose:()=>_(""),financeId:t}),w&&(0,x.jsx)(c.Z,{})]})},A=e=>{var t,a;let{financeId:m,openAs:v}=e;const{t:_}=(0,l.$G)(),h=[{name:_("category"),id:0},{name:_("fees_heads"),id:1}],y=(0,s.s0)(),[j,f]=(0,n.useState)(0),[p,S]=(0,n.useState)(!1),[N,T]=(0,n.useState)(!1),[b,A]=(0,n.useState)(""),[k]=(0,i.FL)(),[E]=(0,o.wB)(),{getAllFeesCategory:R,getAllFeesCategoryRefetch:w}=(0,o.Z)({fid:m,skip:!m});(0,n.useEffect)((()=>{m&&w()}),[m,w]);const F=()=>{S((e=>!e))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:u.Z.category_header,children:[(0,x.jsx)("img",{src:"/images/left-back-icon.svg",alt:"back arrow",className:u.Z.back_icon,onClick:()=>y(-1),style:{cursor:"pointer"}}),(0,x.jsx)("h6",{className:u.Z.category_header_title,children:_("fees_master")})]}),(0,x.jsx)(r.Z,{tabList:h,activeIndexTab:j,setActiveIndexTab:f,showAs:!1,customStyleTab:{width:"50%"}}),(0,x.jsx)(d.Z,{customStyle:{marginBottom:"1rem"}}),0===j&&(0,x.jsxs)(x.Fragment,{children:["HOSTEL_MANAGER"===v||"TRANSPORT_MANAGER"===v?"":(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:u.Z.upload_excel_container,children:[(0,x.jsx)("label",{className:u.Z.upload_excel_file,htmlFor:"uploadExcel",children:(0,x.jsx)("img",{src:"/images/upload-xslx-icon.svg",alt:"add student icon",title:"Upload excel file"})}),(0,x.jsx)("input",{type:"file",id:"uploadExcel",accept:".xlsx",onChange:e=>{T((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),k({fileUpload:t}).then((e=>{var t,a;null!==(t=e.data)&&void 0!==t&&t.imageKey?E({fid:m,excelFile:{excel_file:null===(a=e.data)||void 0===a?void 0:a.imageKey}}).then((()=>{T((e=>!e))})).catch({}):T((e=>!e))})).catch({})},style:{display:"none"}}),(0,x.jsx)("p",{className:u.Z.add_new_category,onClick:F,children:_("add_new_category")})]}),(0,x.jsx)(d.Z,{customStyle:{marginBottom:"1rem"}})]}),null===R||void 0===R||null===(t=R.all_fees_format)||void 0===t?void 0:t.map((e=>{var t,a,n,l;return(0,x.jsxs)("div",{className:u.Z.category_card,children:[(0,x.jsx)("img",{src:"/images/fees-category-icon.svg",alt:"categor icon"}),(0,x.jsxs)("h6",{children:[null!==(t=null===e||void 0===e?void 0:e.category_name)&&void 0!==t?t:""," ",null!==e&&void 0!==e&&null!==(a=e.secondary_category)&&void 0!==a&&a.category_name?(0,x.jsxs)("span",{style:{fontSize:"11px",fontWeight:"400"},children:["(",null!==(n=null===e||void 0===e||null===(l=e.secondary_category)||void 0===l?void 0:l.category_name)&&void 0!==n?n:"",")"]}):""]}),"HOSTEL_MANAGER"===v||"TRANSPORT_MANAGER"===v?"":(0,x.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:()=>A(null===e||void 0===e?void 0:e._id),className:u.Z.menu_icon,title:"Menu"})]},null===e||void 0===e?void 0:e._id)})),p&&(0,x.jsx)(g,{onClose:F,financeId:m,onRefetch:w}),b&&(0,x.jsx)(Z,{onClose:()=>A(""),openCategoryMenu:b,onRefetch:w,fid:m,categoryList:null!==(a=null===R||void 0===R?void 0:R.all_fees_format)&&void 0!==a?a:[]}),N&&(0,x.jsx)(c.Z,{})]}),1===j&&(0,x.jsx)(C,{financeId:m,openAs:v})]})}},78499:(e,t,a)=>{a.d(t,{Z:()=>n});const n={button_main:"ButtonWithTypeSubmit_button_main__rb+-V",button_disabled:"ButtonWithTypeSubmit_button_disabled__K6xEK"}},45639:(e,t,a)=>{a.d(t,{Z:()=>n});const n={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=91104.9f17ee8c.chunk.js.map