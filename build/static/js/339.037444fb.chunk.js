"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[339],{97655:(e,l,t)=>{t.d(l,{Z:()=>a});t(72791);var i=t(39230),n=t(38733),s=t(80184);const a=e=>{let{labelText:l,name:t,type:a,value:o,onChange:d,placeholder:r,errorShow:c,customStyleContainer:x,customStyleLabel:_,customStyleInput:u,inputLength:m,reAccount:h,disabled:v}=e;const{t:f}=(0,i.$G)();return(0,s.jsxs)("div",{className:n.Z.join_form_container,style:{...x},children:[(0,s.jsxs)("label",{className:n.Z.join_form_label,htmlFor:t,style:{..._},children:[l," ",!h&&c&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]}),h&&(0,s.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:h})]}),"tel"===a?(0,s.jsx)("input",{className:n.Z.join_form_input,type:a,value:o,onChange:d,name:t,placeholder:r,maxLength:null!==m&&void 0!==m?m:100,disabled:v,style:u}):(0,s.jsx)("input",{className:n.Z.join_form_input,type:a,value:o,onChange:d,name:t,placeholder:r,disabled:v,style:u})]})}},84565:(e,l,t)=>{t.r(l),t.d(l,{default:()=>S});var i=t(72791),n=t(39230),s=t(29407),a=t(16871),o=t(23441),d=t(11105),r=t(72426),c=t.n(r),x=t(87932),_=t(98734),u=t(12072),m=t(84489),h=t(87049),v=t(97655),f=t(98094),p=t(80184);const j=e=>{var l;let{onEdit:t,xlsxId:s}=e;const{t:a}=(0,n.$G)(),[o,d]=(0,i.useState)(null!==(l=null===s||void 0===s?void 0:s.excel_file_name)&&void 0!==l?l:""),[r,c]=(0,i.useState)("");(0,i.useEffect)((()=>{var e;d(null!==(e=null===s||void 0===s?void 0:s.excel_file_name)&&void 0!==e?e:"")}),[null===s||void 0===s?void 0:s.excel_file_name]);return(0,p.jsxs)("div",{style:{width:"20rem",minHeight:"10rem",padding:"1rem"},children:[(0,p.jsx)("h6",{children:a("update_excel_name")}),(0,p.jsx)(f.Z,{customStyle:{width:"100%"}}),(0,p.jsx)(v.Z,{labelText:a("excel_name"),placeholder:a("excel_name_plcaeholder"),value:o,name:"excelName",type:"text",onChange:e=>d(e.target.value),errorShow:r.excelName}),(0,p.jsx)("button",{className:h.Z.xlsx_update_btn,title:"Update",onClick:()=>{o?t(o):c({excelName:"excelName is required"})},style:{justifyContent:"center",marginTop:"1rem"},children:a("update")})]})},g=e=>{let{onClose:l,xlsxId:t,onRefetch:n,instituteId:s}=e;const[a,o]=(0,i.useState)(!1),[d,r]=(0,i.useState)(!1),[c]=(0,x.jd)(),[v]=(0,x.db)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.Z,{onClose:l}),(0,p.jsxs)(u.Z,{customStyle:{zIndex:"1200"},children:[d?(0,p.jsx)(j,{xlsxId:t,onEdit:e=>{o((e=>!e)),v({id:s,xlsxId:null===t||void 0===t?void 0:t._id,excelUpdate:{excel_file_name:e}}).then((()=>{n(),o((e=>!e)),l()})).catch({})}}):(0,p.jsxs)("div",{className:h.Z.edit_modal_container,style:{width:"200px"},children:[(0,p.jsx)("h6",{className:h.Z.edit,onClick:()=>r((e=>!e)),children:"Edit"}),(0,p.jsx)("h6",{className:h.Z.remove,onClick:()=>{o((e=>!e)),c({id:s,xlsxId:null===t||void 0===t?void 0:t._id}).then((()=>{n(),l(),o((e=>!e))})).catch({})},children:"Delete"})]}),a&&(0,p.jsx)(_.Z,{})]})]})};var Z=t(93245),C=t(95048),y=t(17978),N=t(65543),b=t(12096);const S=e=>{let{insId:l,financeId:t,hostelId:r}=e;const{t:_}=(0,n.$G)(),u=(0,C.v9)((e=>e.financeChange.insId)),m=(0,a.s0)(),[h,v]=(0,o.YD)(),[j,S]=(0,i.useState)(1),[k,E]=(0,i.useState)(!0),[I,w]=(0,i.useState)(!1),[D,M]=(0,i.useState)(!0),[T,q]=(0,i.useState)([]),[L,F]=(0,i.useState)(!1),[G,R]=(0,i.useState)(!1),[A,J]=(0,i.useState)(!1),[B,O]=(0,i.useState)(!1),{getAllExcelByFinance:P,getAllExcelByFinanceRefetch:$}=(0,x.WV)({data:{id:u||l,page:j,limit:10},skip:u?!u:!l}),{scrollToTop:z}=(0,N.u)();(0,i.useEffect)((()=>{z()}),[]),(0,i.useEffect)((()=>{(u||l)&&(M(!0),$())}),[u,l,j,$]),(0,i.useEffect)((()=>{v&&k&&S((e=>e+1))}),[v,k]),(0,i.useEffect)((()=>{var e,l;I?(q(null===P||void 0===P?void 0:P.all_excel),w(!1),M(!1)):null!==P&&void 0!==P&&P.all_excel?(q((e=>{var l,t;return null===(l=[...new Set(null===(t=[...e,...null===P||void 0===P?void 0:P.all_excel])||void 0===t?void 0:t.map(JSON.stringify))])||void 0===l?void 0:l.map(JSON.parse)})),M(!1)):0===(null===P||void 0===P||null===(l=P.all_excel)||void 0===l?void 0:l.length)&&M(!1);10===(null===P||void 0===P||null===(e=P.all_excel)||void 0===e?void 0:e.length)?E(!0):E(!1)}),[null===P||void 0===P?void 0:P.all_excel]);const H=()=>{F((e=>!e))},U=()=>{S(1),$(),w(!0)},V=()=>{R((e=>!e))},W=()=>{J((e=>!e))};return(0,p.jsxs)("div",{className:s.Z.refund_container,children:[(0,p.jsxs)("section",{className:s.Z.refund_container_title,children:[(0,p.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:()=>{m(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,p.jsxs)("div",{className:s.Z.refund_container_title,style:{justifyContent:"space-between",width:"95%"},children:[(0,p.jsx)("h6",{children:_("data_export")}),(0,p.jsxs)("div",{className:s.Z.both_filter,children:[(0,p.jsxs)("div",{onClick:W,className:s.Z.both_filter_with_name,children:[(0,p.jsx)("img",{src:"/images/export-filter-icon.svg",alt:"filter icon"}),(0,p.jsx)("h6",{children:_("hostel_fee_receipt_filter")})]}),(0,p.jsxs)("div",{onClick:V,className:s.Z.both_filter_with_name,children:[(0,p.jsx)("img",{src:"/images/export-filter-icon.svg",alt:"filter icon"}),(0,p.jsx)("h6",{children:_("fee_receipt_filter")})]}),(0,p.jsxs)("div",{onClick:H,className:s.Z.both_filter_with_name,children:[(0,p.jsx)("img",{src:"/images/export-filter-icon.svg",alt:"filter icon"}),(0,p.jsx)("h6",{children:_("transaction_filter")})]})]})]})]}),(0,p.jsx)(f.Z,{customStyle:{width:"100%"}}),(0,p.jsxs)("div",{className:s.Z.refund_list,children:[null===T||void 0===T?void 0:T.map(((e,l)=>{var t,i;return(null===T||void 0===T?void 0:T.length)===l+1?(0,p.jsxs)("a",{ref:h,className:s.Z.export_card,title:"Download File",href:"https://d3dqpu54js2vfl.cloudfront.net/".concat(null===e||void 0===e?void 0:e.excel_file),target:"_blank",rel:"noopener noreferrer",children:[(0,p.jsx)("img",{src:"/images/export-xsxl-icon.svg",alt:""}),(0,p.jsxs)("section",{className:s.Z.export_card_text,children:[(0,p.jsx)("h6",{children:null!==(t=null===e||void 0===e?void 0:e.excel_file_name)&&void 0!==t?t:""}),(0,p.jsxs)("div",{className:s.Z.export_card_date,children:[(0,p.jsx)("h6",{children:c()(null===e||void 0===e?void 0:e.created_at).format("DD MMM yyy")}),(0,p.jsx)("h6",{children:c()(null===e||void 0===e?void 0:e.created_at).format("LT")})]})]}),(0,p.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:l=>{l.preventDefault(),O(e)},className:s.Z.menu_icon,title:"Menu"})]},null===e||void 0===e?void 0:e._id):(0,p.jsxs)("a",{className:s.Z.export_card,title:"Download File",href:"https://d3dqpu54js2vfl.cloudfront.net/".concat(null===e||void 0===e?void 0:e.excel_file),target:"_blank",rel:"noopener noreferrer",children:[(0,p.jsx)("img",{src:"/images/export-xsxl-icon.svg",alt:""}),(0,p.jsxs)("section",{className:s.Z.export_card_text,children:[(0,p.jsx)("h6",{children:null!==(i=null===e||void 0===e?void 0:e.excel_file_name)&&void 0!==i?i:""}),(0,p.jsxs)("div",{className:s.Z.export_card_date,children:[(0,p.jsx)("h6",{children:c()(null===e||void 0===e?void 0:e.created_at).format("DD MMM yyy")}),(0,p.jsx)("h6",{children:c()(null===e||void 0===e?void 0:e.created_at).format("LT")})]})]}),(0,p.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon",onClick:l=>{l.preventDefault(),O(e)},className:s.Z.menu_icon,title:"Menu"})]},null===e||void 0===e?void 0:e._id)})),D&&(0,p.jsx)(d.Z,{}),L&&(0,p.jsx)(Z.Z,{instituteId:u||l,onClose:H,viewAs:"EXPORT",onRefetch:U}),B&&(0,p.jsx)(g,{xlsxId:B,onClose:()=>O(""),onRefetch:U,instituteId:u||l}),G&&(0,p.jsx)(y.Z,{onClose:V,financeId:t,instituteId:l}),A&&(0,p.jsx)(b.Z,{onClose:W,financeId:t,hostelId:r})]})]})}},87049:(e,l,t)=>{t.d(l,{Z:()=>i});const i={edit_modal_container:"EditConfirm_edit_modal_container__WfbTq",modal_header:"EditConfirm_modal_header__4sq5J",edit:"EditConfirm_edit__ziVGP",remove:"EditConfirm_remove__PCXLs",xlsx_update_btn:"EditConfirm_xlsx_update_btn__H3yM8",save_stop_btn:"EditConfirm_save_stop_btn__9NiZ5",update_to_btn:"EditConfirm_update_to_btn__ExCJv"}}}]);
//# sourceMappingURL=339.037444fb.chunk.js.map