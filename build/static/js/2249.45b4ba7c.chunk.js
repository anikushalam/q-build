"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2249],{90904:(e,l,t)=>{t.d(l,{Z:()=>d});const a="BorderBottom_split_content__RVPoh";var o=t(80184);const d=e=>{let{customStyleBorder:l}=e;return(0,o.jsx)("hr",{className:a,style:l})}},93638:(e,l,t)=>{t.d(l,{Z:()=>i});var a=t(39230),o=t(80476),d=t(80184);const i=e=>{let{label:l,count:t,onAction:i,customStyle:n,isTranslate:s}=e;const{t:r}=(0,a.$G)();return s?(0,d.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:n,children:[t>0?(0,d.jsxs)("span",{children:[t," "]}):null,l]}):(0,d.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:n,children:[t>0?(0,d.jsxs)("span",{children:[t," "]}):null,r(l)]})}},63162:(e,l,t)=>{t.d(l,{Z:()=>r});var a=t(39230),o=t(51416),d=t(43504),i=t(72791),n=t(80184);const s=e=>{let{tab:l,isActive:t,isLink:i,parentState:s,onAction:r,url:c}=e;const{t:_}=(0,a.$G)();return i?(0,n.jsx)(d.rU,{className:t?o.Z.horizontal_tab_card_active:o.Z.horizontal_tab_card,to:c,state:s,children:(0,n.jsx)("h6",{children:_(null===l||void 0===l?void 0:l.label)})}):(0,n.jsx)("div",{className:t?o.Z.horizontal_tab_card_active:o.Z.horizontal_tab_card,onClick:()=>{r(null===l||void 0===l?void 0:l.id)},children:(0,n.jsx)("h6",{children:_(null===l||void 0===l?void 0:l.label)})})},r=(0,i.memo)(s)},98967:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(51416),o=t(80184);const d=e=>{let{children:l}=e;return(0,o.jsx)("div",{className:a.Z.horizontal_tab_wrapper,children:l})}},63687:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(59393),o=t(80184);const d=e=>{let{customStyle:l,children:t}=e;return(0,o.jsx)("div",{className:a.Z.user_member_container_wrapper,style:l,children:t})}},21348:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(59393),o=t(80184);const d=e=>{let{customStyle:l,children:t}=e;return(0,o.jsx)("div",{className:a.Z.user_member_content_wrapper,style:l,children:t})}},32321:(e,l,t)=>{t.r(l),t.d(l,{default:()=>B});var a=t(16871),o=t(43504),d=t(90904),i=t(63162),n=t(98967),s=t(63687),r=t(21348),c=t(98684),_=t(39230),u=t(56959),v=t(72791),m=t(1669),h=t(55336),f=t(2651),p=t(1095),y=t(2034),x=t(4007),j=t(35517),b=t(38857),g=t(93638),Z=t(80184);const N=e=>{var l,t,o,i,n,s,u,m,f,p,y,N,S,F,C,T,k,Y;let{staff:O,onClose:P,computedData:w,onParentClose:E}=e;const{t:A}=(0,_.$G)(),L=(0,a.TH)(),[U,I]=(0,v.useState)({sal_com:[],employee_ded:[],employar_ded:[],com:[]}),[B,D]=(0,v.useState)(!1),[M]=(0,j.xB)();(0,v.useEffect)((()=>{var e,l,t,a,o,d,i,n;if(null!==w&&void 0!==w&&null!==(e=w.structure)&&void 0!==e&&null!==(l=e.salary_components)&&void 0!==l&&l.length){let e=[];for(let l of null===w||void 0===w||null===(s=w.structure)||void 0===s?void 0:s.salary_components){var s,r;e.push({head_name:null===l||void 0===l||null===(r=l.master)||void 0===r?void 0:r.heads_name,head_amount:null===l||void 0===l?void 0:l.head_amount,master:null===l||void 0===l?void 0:l.master,_id:null===l||void 0===l?void 0:l._id,created_at:null===l||void 0===l?void 0:l.created_at})}I((l=>({...l,sal_com:e})))}if(null!==w&&void 0!==w&&null!==(t=w.structure)&&void 0!==t&&null!==(a=t.employee_deduction)&&void 0!==a&&a.length){let e=[];for(let l of null===w||void 0===w||null===(c=w.structure)||void 0===c?void 0:c.employee_deduction){var c,_;e.push({head_name:null===l||void 0===l||null===(_=l.master)||void 0===_?void 0:_.heads_name,head_amount:null===l||void 0===l?void 0:l.head_amount,master:null===l||void 0===l?void 0:l.master,_id:null===l||void 0===l?void 0:l._id,created_at:null===l||void 0===l?void 0:l.created_at})}I((l=>({...l,employee_ded:e})))}if(null!==w&&void 0!==w&&null!==(o=w.structure)&&void 0!==o&&null!==(d=o.employar_deduction)&&void 0!==d&&d.length){let e=[];for(let l of null===w||void 0===w||null===(u=w.structure)||void 0===u?void 0:u.employar_deduction){var u,v;e.push({head_name:null===l||void 0===l||null===(v=l.master)||void 0===v?void 0:v.heads_name,head_amount:null===l||void 0===l?void 0:l.head_amount,master:null===l||void 0===l?void 0:l.master,_id:null===l||void 0===l?void 0:l._id,created_at:null===l||void 0===l?void 0:l.created_at})}I((l=>({...l,employar_ded:e})))}if(null!==w&&void 0!==w&&null!==(i=w.structure)&&void 0!==i&&null!==(n=i.compliances)&&void 0!==n&&n.length){let e=[];for(let l of null===w||void 0===w||null===(m=w.structure)||void 0===m?void 0:m.compliances){var m,h;e.push({head_name:null===l||void 0===l||null===(h=l.master)||void 0===h?void 0:h.heads_name,head_amount:null===l||void 0===l?void 0:l.head_amount,master:null===l||void 0===l?void 0:l.master,_id:null===l||void 0===l?void 0:l._id,created_at:null===l||void 0===l?void 0:l.created_at})}I((l=>({...l,com:e})))}}),[null===w||void 0===w||null===(l=w.structure)||void 0===l?void 0:l.salary_components,null===w||void 0===w||null===(t=w.structure)||void 0===t?void 0:t.employar_deduction,null===w||void 0===w||null===(o=w.structure)||void 0===o?void 0:o.employee_deduction,null===w||void 0===w||null===(i=w.structure)||void 0===i?void 0:i.compliances]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.Z,{onClose:P,children:(0,Z.jsxs)("div",{className:x.Z.modal_container,children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)("div",{className:x.Z.modal_container_outer_header,children:[(0,Z.jsx)("div",{className:x.Z.modal_container_header,children:(0,Z.jsxs)("h6",{children:["".concat(null!==(n=null===O||void 0===O?void 0:O.staffFirstName)&&void 0!==n?n:""," ").concat(null!==(s=null===O||void 0===O?void 0:O.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(u=null===O||void 0===O?void 0:O.staffLastName)&&void 0!==u?u:""," "),"- ",A("salary_computation")]})}),(0,Z.jsx)("img",{src:"".concat(c.J7,"/close.svg"),alt:"close icon",onClick:P})]})}),(0,Z.jsx)(d.Z,{}),(0,Z.jsxs)(r.Z,{customStyle:{paddingTop:"0"},children:[(0,Z.jsxs)("section",{className:x.Z.table_container,style:{margin:"0"},children:[(0,Z.jsxs)("div",{className:x.Z.table_heading,children:[(0,Z.jsx)("h6",{children:A("particulars")}),(0,Z.jsx)("h6",{children:A("amount")})]}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(m=U.sal_com)||void 0===m?void 0:m.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_amount})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:A("total_earning")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:null!==(f=null===w||void 0===w||null===(p=w.custom_obj)||void 0===p?void 0:p.total_earnings)&&void 0!==f?f:0})]})})]}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(y=U.employee_ded)||void 0===y?void 0:y.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_amount})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:A("total_pay")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:null!==(N=null===w||void 0===w||null===(S=w.custom_obj)||void 0===S?void 0:S.total_pay)&&void 0!==N?N:0})]})}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(F=U.com)||void 0===F?void 0:F.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_amount})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:A("net_pay")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:null!==(C=null===w||void 0===w||null===(T=w.custom_obj)||void 0===T?void 0:T.net_pay)&&void 0!==C?C:0})]})}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(k=U.employar_ded)||void 0===k?void 0:k.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_amount})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:A("ctc")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:null===w||void 0===w||null===(Y=w.custom_obj)||void 0===Y?void 0:Y.ctc})]})}),(0,Z.jsx)(g.Z,{label:"finalize_and_save",onAction:()=>{var e,l,t,a,o;null!==O&&void 0!==O&&O._id&&null!==(e=L.state)&&void 0!==e&&e.pid&&(D((e=>!e)),M({sid:null===O||void 0===O?void 0:O._id,bodyParameter:{pid:null===(l=L.state)||void 0===l?void 0:l.pid,month:null===(t=L.state)||void 0===t||null===(a=t.headCard)||void 0===a?void 0:a.value,year:null===(o=L.state)||void 0===o?void 0:o.financialYear,salary_struct:null===w||void 0===w?void 0:w.structure,custom_obj:null===w||void 0===w?void 0:w.custom_obj}}).then((()=>{E(),D((e=>!e))})).catch({}))}})]})]})}),B&&(0,Z.jsx)(h.Z,{})]})},S=e=>{var l,t,o,i,n,s,u;let{staff:m,onClose:f,ssid:p}=e;const{t:y}=(0,_.$G)(),S=(0,a.TH)(),[F,C]=(0,v.useState)({sal_com:[],employee_ded:[],employar_ded:[],com:[]}),[T,k]=(0,v.useState)({sal_com:0,employee_ded:0,employar_ded:0,com:0}),[Y,O]=(0,v.useState)(null),[P,w]=(0,v.useState)(!1),[E,A]=(0,v.useState)(""),[L]=(0,j.fx)(),[U]=(0,j.oI)(),{payrollOneSalaryStructure:I}=(0,j.HT)({data:{ssid:p},skip:!p});(0,v.useEffect)((()=>{var e,l,t,a;if(null!==I&&void 0!==I&&null!==(e=I.salary_components)&&void 0!==e&&e.length){let e=0,l=[];for(let t of null===I||void 0===I?void 0:I.salary_components){var o,d;e+=null===t||void 0===t?void 0:t.head_amount,l.push({head_name:null===t||void 0===t||null===(o=t.master)||void 0===o?void 0:o.heads_name,head_amount:null===t||void 0===t?void 0:t.head_amount,master:null===t||void 0===t||null===(d=t.master)||void 0===d?void 0:d._id})}k((l=>({...l,sal_com:e}))),C((e=>({...e,sal_com:l})))}if(null!==I&&void 0!==I&&null!==(l=I.employee_deduction)&&void 0!==l&&l.length){let e=0,l=[];for(let t of null===I||void 0===I?void 0:I.employee_deduction){var i,n;e+=null===t||void 0===t?void 0:t.head_amount,l.push({head_name:null===t||void 0===t||null===(i=t.master)||void 0===i?void 0:i.heads_name,head_amount:null===t||void 0===t?void 0:t.head_amount,master:null===t||void 0===t||null===(n=t.master)||void 0===n?void 0:n._id})}k((l=>({...l,employee_ded:e}))),C((e=>({...e,employee_ded:l})))}if(null!==I&&void 0!==I&&null!==(t=I.employar_deduction)&&void 0!==t&&t.length){let e=0,l=[];for(let t of null===I||void 0===I?void 0:I.employar_deduction){var s,r;e+=null===t||void 0===t?void 0:t.head_amount,l.push({head_name:null===t||void 0===t||null===(s=t.master)||void 0===s?void 0:s.heads_name,head_amount:null===t||void 0===t?void 0:t.head_amount,master:null===t||void 0===t||null===(r=t.master)||void 0===r?void 0:r._id})}k((l=>({...l,employar_ded:e}))),C((e=>({...e,employar_ded:l})))}if(null!==I&&void 0!==I&&null!==(a=I.compliances)&&void 0!==a&&a.length){let e=0,l=[];for(let t of null===I||void 0===I?void 0:I.compliances){var c,_;e+=null===t||void 0===t?void 0:t.head_amount,l.push({head_name:null===t||void 0===t||null===(c=t.master)||void 0===c?void 0:c.heads_name,head_amount:null===t||void 0===t?void 0:t.head_amount,master:null===t||void 0===t||null===(_=t.master)||void 0===_?void 0:_._id})}k((l=>({...l,com:e}))),C((e=>({...e,com:l})))}}),[null===I||void 0===I?void 0:I.salary_components,null===I||void 0===I?void 0:I.employar_deduction,null===I||void 0===I?void 0:I.employee_deduction,null===I||void 0===I?void 0:I.compliances]),(0,v.useEffect)((()=>{var e,l,t,a;if(null!==(e=F.sal_com)&&void 0!==e&&e.length){let e=0;for(let l of F.sal_com)e+=null===l||void 0===l?void 0:l.head_amount;k((l=>({...l,sal_com:e})))}if(null!==(l=F.employee_ded)&&void 0!==l&&l.length){let e=0;for(let l of F.employee_ded)e+=null===l||void 0===l?void 0:l.head_amount;k((l=>({...l,employee_ded:e})))}if(null!==(t=F.employar_ded)&&void 0!==t&&t.length){let e=0;for(let l of F.employar_ded)e+=null===l||void 0===l?void 0:l.head_amount;k((l=>({...l,employar_ded:e})))}if(null!==(a=F.com)&&void 0!==a&&a.length){let e=0;for(let l of F.com)e+=null===l||void 0===l?void 0:l.head_amount;k((l=>({...l,com:e})))}}),[F.sal_com,F.employar_ded,F.employee_ded,F.com]);const B=(e,l,t)=>{if("SALARY_COMPONENTS"===t){const t=[...F.sal_com];for(let a=0;a<(null===t||void 0===t?void 0:t.length);a++)a===l&&(t[a].head_amount=+e.target.value);C((e=>({...e,sal_com:t})))}else if("EMPLOYEE_DEDUCTION"===t){const t=[...F.employee_ded];for(let a=0;a<(null===t||void 0===t?void 0:t.length);a++)a===l&&(t[a].head_amount=+e.target.value);C((e=>({...e,employee_ded:t})))}else if("EMPLOYAR_DEDUCTION"===t){const t=[...F.employar_ded];for(let a=0;a<(null===t||void 0===t?void 0:t.length);a++)a===l&&(t[a].head_amount=+e.target.value);C((e=>({...e,employar_ded:t})))}else if("COMPLIANCES"===t){const t=[...F.com];for(let a=0;a<(null===t||void 0===t?void 0:t.length);a++)a===l&&(t[a].head_amount=+e.target.value);C((e=>({...e,com:t})))}};return(0,Z.jsxs)(Z.Fragment,{children:[2===E?(0,Z.jsx)(N,{computedData:Y,onClose:()=>A(1),staff:m,onParentClose:f}):(0,Z.jsx)(b.Z,{onClose:f,children:(0,Z.jsxs)("div",{className:x.Z.modal_container,children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)("div",{className:x.Z.modal_container_outer_header,children:[(0,Z.jsx)("div",{className:x.Z.modal_container_header,children:(0,Z.jsxs)("h6",{children:["".concat(null!==(l=null===m||void 0===m?void 0:m.staffFirstName)&&void 0!==l?l:""," ").concat(null!==(t=null===m||void 0===m?void 0:m.staffMiddleName)&&void 0!==t?t:""," ").concat(null!==(o=null===m||void 0===m?void 0:m.staffLastName)&&void 0!==o?o:""," "),"- ",y("salary_computation")]})}),(0,Z.jsx)("img",{src:"".concat(c.J7,"/close.svg"),alt:"close icon",onClick:f})]})}),(0,Z.jsx)(d.Z,{}),(0,Z.jsxs)(r.Z,{customStyle:{paddingTop:"0"},children:[(0,Z.jsxs)("section",{className:x.Z.table_container,style:{margin:"0"},children:[(0,Z.jsxs)("div",{className:x.Z.table_heading,children:[(0,Z.jsx)("h6",{children:y("particulars")}),(0,Z.jsx)("h6",{children:y("amount")})]}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(i=F.sal_com)||void 0===i?void 0:i.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("input",{type:"number",value:null===e||void 0===e?void 0:e.head_amount,onChange:e=>B(e,l,"SALARY_COMPONENTS"),className:x.Z.fee_head_amount_input})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:y("total_earning")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:T.sal_com})]})})]}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(n=F.employee_ded)||void 0===n?void 0:n.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("input",{type:"number",value:null===e||void 0===e?void 0:e.head_amount,onChange:e=>B(e,l,"EMPLOYEE_DEDUCTION"),className:x.Z.fee_head_amount_input})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:y("total_pay")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:T.sal_com-T.employee_ded})]})}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(s=F.com)||void 0===s?void 0:s.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("input",{type:"number",value:null===e||void 0===e?void 0:e.head_amount,onChange:e=>B(e,l,"COMPLIANCES"),className:x.Z.fee_head_amount_input})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:y("net_pay")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:T.sal_com-T.employee_ded-T.com})]})}),(0,Z.jsx)("div",{className:x.Z.table_body,children:null===(u=F.employar_ded)||void 0===u?void 0:u.map(((e,l)=>(0,Z.jsxs)("div",{className:x.Z.table_body_list,children:[(0,Z.jsx)("h6",{children:null===e||void 0===e?void 0:e.head_name}),(0,Z.jsx)("input",{type:"number",value:null===e||void 0===e?void 0:e.head_amount,onChange:e=>B(e,l,"EMPLOYAR_DEDUCTION"),className:x.Z.fee_head_amount_input})]},l)))}),(0,Z.jsx)("div",{className:x.Z.table_body,children:(0,Z.jsxs)("div",{className:x.Z.table_body_list,style:{borderTopColor:"rgba(18, 18, 18, 0.5)",borderTopWidth:"0.5px",borderTopStyle:"solid"},children:[(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:y("ctc")}),(0,Z.jsx)("h6",{className:x.Z.fees_total,style:{fontWeight:"700"},children:T.sal_com-T.employee_ded+T.employar_ded})]})}),1===E?(0,Z.jsx)(g.Z,{label:"compute",onAction:()=>{var e,l,t,a,o,d;null!==m&&void 0!==m&&m._id&&null!==(e=S.state)&&void 0!==e&&e.financialYear&&null!==(l=S.state)&&void 0!==l&&null!==(t=l.headCard)&&void 0!==t&&t.value&&(w((e=>!e)),U({sid:null===m||void 0===m?void 0:m._id,month:null===(a=S.state)||void 0===a||null===(o=a.headCard)||void 0===o?void 0:o.value,year:null===(d=S.state)||void 0===d?void 0:d.financialYear}).then((e=>{O(e.data),A(2),w((e=>!e))})).catch({}))}}):(0,Z.jsx)(g.Z,{label:"update",onAction:()=>{null!==m&&void 0!==m&&m._id&&p&&(w((e=>!e)),L({sid:null===m||void 0===m?void 0:m._id,bodyParameter:{compliances:F.com,employar_deduction:F.employar_ded,employee_deduction:F.employee_ded,salary_components:F.sal_com,srid:p}}).then((()=>{A(1),w((e=>!e))})).catch({}))}})]})]})}),P&&(0,Z.jsx)(h.Z,{})]})},F=e=>{var l,t,d,i,n,s,r,u,m,h,f;let{staff:x,initalUrl:j}=e;const{t:b}=(0,_.$G)(),g=(0,a.UO)(),N=(0,a.TH)(),[F,C]=(0,v.useState)(!1),T=()=>{C((e=>!e))};return(0,Z.jsxs)(Z.Fragment,{children:["COMPUTATION"===j?(0,Z.jsx)("div",{className:y.Z.smc_card,onClick:T,children:(0,Z.jsx)("div",{className:y.Z.smc_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,children:[(0,Z.jsx)("img",{src:null!==x&&void 0!==x&&x.staffProfilePhoto?"".concat(p.yI,"/").concat(null===x||void 0===x?void 0:x.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{height:"2.3rem",width:"2.3rem",borderRadius:"50%"}}),(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner_inner,children:[(0,Z.jsx)("h6",{children:"".concat(null!==(l=null===x||void 0===x?void 0:x.staffFirstName)&&void 0!==l?l:""," ").concat(null!==(t=null===x||void 0===x?void 0:x.staffMiddleName)&&void 0!==t?t:""," ").concat(null!==(d=null===x||void 0===x?void 0:x.staffLastName)&&void 0!==d?d:"")}),(0,Z.jsxs)("p",{children:[b("index_number_1")," ",null!==(i=null===x||void 0===x?void 0:x.staffROLLNO)&&void 0!==i?i:""]})]})]})})}):(0,Z.jsx)(o.rU,{to:"/q/".concat(g.username,"/member/staff/payroll?type=").concat(j),state:{...N.state,name:"".concat(null!==(n=null===x||void 0===x?void 0:x.staffFirstName)&&void 0!==n?n:""," ").concat(null!==(s=null===x||void 0===x?void 0:x.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(r=null===x||void 0===x?void 0:x.staffLastName)&&void 0!==r?r:""),staffId:null===x||void 0===x?void 0:x._id},children:(0,Z.jsx)("div",{className:y.Z.smc_card,children:(0,Z.jsx)("div",{className:y.Z.smc_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,children:[(0,Z.jsx)("img",{src:null!==x&&void 0!==x&&x.staffProfilePhoto?"".concat(p.yI,"/").concat(null===x||void 0===x?void 0:x.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{height:"2.3rem",width:"2.3rem",borderRadius:"50%"}}),(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner_inner,children:[(0,Z.jsx)("h6",{children:"".concat(null!==(u=null===x||void 0===x?void 0:x.staffFirstName)&&void 0!==u?u:""," ").concat(null!==(m=null===x||void 0===x?void 0:x.staffMiddleName)&&void 0!==m?m:""," ").concat(null!==(h=null===x||void 0===x?void 0:x.staffLastName)&&void 0!==h?h:"")}),(0,Z.jsxs)("p",{children:[b("index_number_1")," ",null!==(f=null===x||void 0===x?void 0:x.staffROLLNO)&&void 0!==f?f:""]})]})]})})})}),F&&(0,Z.jsx)(S,{onClose:T,ssid:null===x||void 0===x?void 0:x.salary_structure,staff:x})]})};var C=t(23441),T=t(6758),k=t(91427),Y=t(57588);const O=e=>{var l,t,a;let{instituteId:o,initalUrl:d}=e;const{t:i}=(0,_.$G)(),[n,s]=(0,v.useState)(""),[r,p]=(0,v.useState)(1),[y,x]=(0,v.useState)(!0),[j,b]=(0,C.YD)({skip:n}),{instituteAllStaff:g,instituteAllStaffLoading:N}=(0,T.nb)({data:{id:o,page:r,limit:10,search:n},skip:!o});(0,v.useEffect)((()=>{b&&y&&p((e=>e+1))}),[b,y]),(0,v.useEffect)((()=>{var e;if(null!==g&&void 0!==g&&null!==(e=g.list)&&void 0!==e&&e.length){var l;let e=(0,k.f)(null===g||void 0===g||null===(l=g.list)||void 0===l?void 0:l.length);x((()=>e))}}),[null===g||void 0===g?void 0:g.list]);const S=(0,v.useCallback)((0,Y.J)((e=>{p((()=>1)),s(e)}),1500),[]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:u.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,Z.jsx)("section",{className:u.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,Z.jsxs)("div",{className:u.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,Z.jsx)("img",{className:u.Z.fm_search_full_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,Z.jsx)("input",{type:"text",placeholder:i("search"),onChange:e=>{e.target.value?S(e.target.value):(p((()=>1)),s(""))}})]})})}),null===g||void 0===g||null===(l=g.list)||void 0===l?void 0:l.map(((e,l)=>{var t;return(null===g||void 0===g||null===(t=g.list)||void 0===t?void 0:t.length)===l+1?(0,Z.jsx)("div",{ref:j,children:(0,Z.jsx)(F,{staff:e,initalUrl:d})},null===e||void 0===e?void 0:e._id):(0,Z.jsx)(F,{staff:e,initalUrl:d},null===e||void 0===e?void 0:e._id)})),N?n?(0,Z.jsx)(h.Z,{}):(0,Z.jsx)(m.Z,{}):n?0===(null===g||void 0===g||null===(t=g.list)||void 0===t?void 0:t.length)&&(0,Z.jsx)(f.Z,{title:"No staffs found related this search."}):0===(null===g||void 0===g||null===(a=g.list)||void 0===a?void 0:a.length)&&(0,Z.jsx)(f.Z,{title:"No staffs."})]})};var P=t(11163),w=t(97892),E=t.n(w),A=t(57398);const L=e=>{var l;let{mt:t,financialYear:d}=e;const{t:i}=(0,_.$G)(),n=(0,a.UO)(),s=(0,a.TH)();return(0,Z.jsx)(o.rU,{to:"/q/".concat(n.username,"/member/staff/payroll?type=salary-computation"),state:{...s.state,headCard:t,financialYear:d},children:(0,Z.jsx)("div",{className:y.Z.smc_card,children:(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,children:[(0,Z.jsx)("img",{src:"".concat(c.J7,"/category.svg"),alt:"categor icon"}),(0,Z.jsx)("div",{className:y.Z.smc_card_contatiner_inner,children:(0,Z.jsx)("h6",{children:null!==(l=null===t||void 0===t?void 0:t.name)&&void 0!==l?l:""})})]})})})},U=e=>{var l,t,a,o,d,i,n,s,r,u,v,m;let{sSlip:h}=e;const{t:f}=(0,_.$G)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("div",{className:y.Z.smc_card,children:(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:[(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,children:[(0,Z.jsx)("img",{src:null!==h&&void 0!==h&&null!==(l=h.staff)&&void 0!==l&&l.staffProfilePhoto?"".concat(p.yI,"/").concat(null===h||void 0===h||null===(t=h.staff)||void 0===t?void 0:t.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{height:"2.3rem",width:"2.3rem",borderRadius:"50%"}}),(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner_inner,children:[(0,Z.jsx)("h6",{children:"".concat(null!==(a=null===h||void 0===h||null===(o=h.staff)||void 0===o?void 0:o.staffFirstName)&&void 0!==a?a:""," ").concat(null!==(d=null===h||void 0===h||null===(i=h.staff)||void 0===i?void 0:i.staffMiddleName)&&void 0!==d?d:""," ").concat(null!==(n=null===h||void 0===h||null===(s=h.staff)||void 0===s?void 0:s.staffLastName)&&void 0!==n?n:"")}),(0,Z.jsxs)("p",{children:[f("index_number_1")," ",null!==(r=null===h||void 0===h||null===(u=h.staff)||void 0===u?void 0:u.staffROLLNO)&&void 0!==r?r:""]})]})]}),(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner,children:[(0,Z.jsxs)("div",{className:y.Z.smc_card_contatiner_inner,children:[(0,Z.jsxs)("h6",{children:[" ",f("net_pay"),": ",f("rs_only")," ",null!==(v=null===h||void 0===h?void 0:h.net_payable)&&void 0!==v?v:""]}),(0,Z.jsxs)("p",{children:[f("date"),": ",null===(m=E()(null===h||void 0===h?void 0:h.created_at))||void 0===m?void 0:m.format("DD/MM/YYYY")]})]}),(0,Z.jsx)("img",{src:"".concat(c.J7,"/receipt.svg"),alt:"receipt icon",title:"Download Salary Slip",style:{width:"auto",height:"1.6rem"},onClick:()=>{if(null!==h&&void 0!==h&&h.key){const e=window.open("".concat(p.q2,"/").concat(null===h||void 0===h?void 0:h.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}}})]})]})})})},I=e=>{var l,t,o,d,i,n;let{pid:s}=e;const{t:r}=(0,_.$G)(),p=(0,a.TH)(),[y,x]=(0,v.useState)(""),[b,g]=(0,v.useState)(1),[N,S]=(0,v.useState)(!0),[F,T]=(0,C.YD)({skip:y}),{payrollAllSalarySlip:O,payrollAllSalarySlipLoading:P}=(0,j.m4)({data:{page:b,limit:10,search:y,pid:s,month:null===(l=p.state)||void 0===l||null===(t=l.headCard)||void 0===t?void 0:t.value,year:null===(o=p.state)||void 0===o?void 0:o.financialYear},skip:!s});(0,v.useEffect)((()=>{T&&N&&g((e=>e+1))}),[T,N]),(0,v.useEffect)((()=>{var e;if(null!==O&&void 0!==O&&null!==(e=O.list)&&void 0!==e&&e.length){var l;let e=(0,k.f)(null===O||void 0===O||null===(l=O.list)||void 0===l?void 0:l.length);S((()=>e))}}),[null===O||void 0===O?void 0:O.list]);const w=(0,v.useCallback)((0,Y.J)((e=>{g((()=>1)),x(e)}),1500),[]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:u.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,Z.jsx)("section",{className:u.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,Z.jsxs)("div",{className:u.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,Z.jsx)("img",{className:u.Z.fm_search_full_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,Z.jsx)("input",{type:"text",placeholder:r("search"),onChange:e=>{e.target.value?w(e.target.value):(g((()=>1)),x(""))}})]})})}),null===O||void 0===O||null===(d=O.list)||void 0===d?void 0:d.map(((e,l)=>{var t;return(null===O||void 0===O||null===(t=O.list)||void 0===t?void 0:t.length)===l+1?(0,Z.jsx)("div",{ref:F,children:(0,Z.jsx)(U,{sSlip:e})},null===e||void 0===e?void 0:e._id):(0,Z.jsx)(U,{sSlip:e},null===e||void 0===e?void 0:e._id)})),P?y?(0,Z.jsx)(h.Z,{}):(0,Z.jsx)(m.Z,{}):y?0===(null===O||void 0===O||null===(i=O.list)||void 0===i?void 0:i.length)&&(0,Z.jsx)(f.Z,{title:"No salary slips found related this search."}):0===(null===O||void 0===O||null===(n=O.list)||void 0===n?void 0:n.length)&&(0,Z.jsx)(f.Z,{title:"No salary slips."})]})},B=e=>{var l,t,m,h,f;let{instituteId:p,pid:y}=e;const{t:x}=(0,_.$G)(),j=(0,a.TH)(),b=(0,a.UO)(),[g]=(0,o.lr)(),N=(0,a.s0)(),{selectedDate:S,setSelectedDate:F}=(0,P.GX)(),[C,T]=(0,v.useState)(!1),k=()=>{T((e=>!e))},Y=()=>{N("/q/".concat(b.username,"/member/staff/payroll"),{state:{...j.state,name:"",staffId:""}})};return(0,Z.jsxs)(Z.Fragment,{children:["year"===g.get("n")?(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)("div",{className:u.Z.fm_header_container,children:[(0,Z.jsxs)("div",{className:u.Z.fm_header_start_container,children:[(0,Z.jsx)("img",{alt:"search icon",src:"".concat(c.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:Y}),(0,Z.jsx)("h6",{children:x("salary_computation")})]}),(0,Z.jsx)("div",{className:u.Z.fm_header_start_container,children:(0,Z.jsxs)("h6",{style:{cursor:"pointer"},onClick:k,children:[x("financial_year")," : ",E()(S).format("YYYY")]})})]})}),(0,Z.jsx)(d.Z,{}),(0,Z.jsx)(r.Z,{children:null===M||void 0===M?void 0:M.map((e=>(0,Z.jsx)(L,{mt:e,financialYear:E()(S).format("YYYY")},null===e||void 0===e?void 0:e.name)))})]}):(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsx)("div",{className:u.Z.fm_header_container,children:(0,Z.jsxs)("div",{className:u.Z.fm_header_start_container,children:[(0,Z.jsx)("img",{alt:"search icon",src:"".concat(c.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:Y}),(0,Z.jsxs)("h6",{children:[x("salary_computation")," of"," ",null!==(l=null===(t=j.state)||void 0===t||null===(m=t.headCard)||void 0===m?void 0:m.name)&&void 0!==l?l:"",","," ",null!==(h=null===(f=j.state)||void 0===f?void 0:f.financialYear)&&void 0!==h?h:""]})]})})}),(0,Z.jsx)(n.Z,{children:D.map((e=>{var l;return(0,Z.jsx)(i.Z,{tab:e,isLink:!0,isActive:null===(l=e.groupIs)||void 0===l?void 0:l.includes(g.get("n")),parentState:j.state,url:"/q/".concat(b.username,"/member/staff/payroll?type=salary-computation").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,Z.jsx)(d.Z,{customStyleBorder:{marginBlock:"0"}}),(0,Z.jsx)(r.Z,{children:"days"===g.get("n")?(0,Z.jsx)(O,{instituteId:p,initalUrl:"salary-days"}):"computation"===g.get("n")?(0,Z.jsx)(O,{instituteId:p,initalUrl:"COMPUTATION"}):"slip"===g.get("n")?(0,Z.jsx)(I,{pid:y}):(0,Z.jsx)(O,{instituteId:p,initalUrl:"attendance-sheet"})})]}),C&&(0,Z.jsx)(A.Z,{onClose:k,onYearChoose:e=>{F((l=>new Date("".concat(l.getMonth()+1," ").concat(l.getDate()," ").concat(e)))),k()}})]})},D=[{label:"attendance_sheet",id:"attendance_sheet",urlKey:"",groupIs:["",null]},{label:"salary_days",id:"salary_days",urlKey:"&n=days",groupIs:["days"]},{label:"salary_computation",id:"salary_computation",urlKey:"&n=computation",groupIs:["computation"]},{label:"salary_slip",id:"salary_slip",urlKey:"&n=slip",groupIs:["slip"]}],M=[{name:"April",value:"04"},{name:"May",value:"05"},{name:"June",value:"06"},{name:"July",value:"07"},{name:"August",value:"08"},{name:"September",value:"09"},{name:"October",value:"10"},{name:"November",value:"11"},{name:"December",value:"12"},{name:"January",value:"01"},{name:"February",value:"02"},{name:"March",value:"03"}]},2651:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(15783),o=t(80184);const d=e=>{let{title:l,subtitle:t,customStyleContainer:d,costomTextTitleStyle:i,costomTextSubtitleStyle:n}=e;return(0,o.jsxs)("div",{className:a.Z.empty_container,style:d,children:[l&&(0,o.jsx)("h6",{style:i,children:l}),t&&(0,o.jsx)("p",{style:n,children:t})]})}},57588:(e,l,t)=>{t.d(l,{J:()=>a});const a=(e,l)=>{let t;return function(){let a=this,o=arguments;clearTimeout(t),t=setTimeout((()=>{e.apply(a,o)}),l)}}},91427:(e,l,t)=>{t.d(l,{f:()=>a});const a=e=>e%10===0},80476:(e,l,t)=>{t.d(l,{Z:()=>a});const a={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},4007:(e,l,t)=>{t.d(l,{Z:()=>a});const a={fess_container:"FeesStructure_fess_container__yP1Kr",category_header:"FeesStructure_category_header__kl9eu",category_header_title:"FeesStructure_category_header_title__Lc+5l",fees_category:"FeesStructure_fees_category__8u-dp",fees_category_icon:"FeesStructure_fees_category_icon__KjMF9",fees_category_text:"FeesStructure_fees_category_text__HnRZU",assignment_description_head:"FeesStructure_assignment_description_head__jqNtp",assignment_description:"FeesStructure_assignment_description__soumP",department_container:"FeesStructure_department_container__kCdPX",department_card_name:"FeesStructure_department_card_name__sYSOY",department_card_head:"FeesStructure_department_card_head__rVcZv",department_card_title:"FeesStructure_department_card_title__PF9km",add_new_category:"FeesStructure_add_new_category__Q1OpU",category_card:"FeesStructure_category_card__qYz0J",fees_card_text:"FeesStructure_fees_card_text__KB8GJ",category_card_fee:"FeesStructure_category_card_fee__sRR12",fees_card_text_bottom:"FeesStructure_fees_card_text_bottom__T45b7",department_card_container:"FeesStructure_department_card_container__a40wp",department_card_image:"FeesStructure_department_card_image__2FUDD",fees_card:"FeesStructure_fees_card__z+RwE",category_card_order:"FeesStructure_category_card_order__jBLeB",add_category_modal:"FeesStructure_add_category_modal__XFTGC",add_category_modal_title:"FeesStructure_add_category_modal_title__y9he4",structure_container_title:"FeesStructure_structure_container_title__Oa39N",add_category_modal_title_left:"FeesStructure_add_category_modal_title_left__JDH-M",set_fees_structure_btn:"FeesStructure_set_fees_structure_btn__NUJNj",installment_list:"FeesStructure_installment_list__b4tEe",fees_head_title:"FeesStructure_fees_head_title__aHn2H",fees_head_installment:"FeesStructure_fees_head_installment__G80fz",table_heading:"FeesStructure_table_heading__C+3Ou",table_container:"FeesStructure_table_container__GY9PB",table_body:"FeesStructure_table_body__d27RF",table_body_list:"FeesStructure_table_body_list__AIq19",fee_head_name_input:"FeesStructure_fee_head_name_input__XqDmq",fee_head_amount_input:"FeesStructure_fee_head_amount_input__IljkA",add_fees_head_btn:"FeesStructure_add_fees_head_btn__Me1Y3",fees_total:"FeesStructure_fees_total__cKFTc",fees_card_hover:"FeesStructure_fees_card_hover__Zk7go",fees_card_hover_active:"FeesStructure_fees_card_hover_active__UBnHh",fee_middle_section:"FeesStructure_fee_middle_section__gjhYY",fee_middle_confirm_button:"FeesStructure_fee_middle_confirm_button__8gUBE",fee_middle_section_container:"FeesStructure_fee_middle_section_container__9vxAB",edit_icon:"FeesStructure_edit_icon__iHti3",category_card_hover:"FeesStructure_category_card_hover__O3rP9",category_card_hover_active:"FeesStructure_category_card_hover_active__N2YXu",menu_icon:"FeesStructure_menu_icon__-c1NS",upload_excel_container:"FeesStructure_upload_excel_container__48yxn",upload_excel_file:"FeesStructure_upload_excel_file__1hxAU",seating_modal:"FeesStructure_seating_modal__cEUXs",add_category_modal_title_active:"FeesStructure_add_category_modal_title_active__bnkEx",notify_container:"FeesStructure_notify_container__f1n9o",notify_text:"FeesStructure_notify_text__Yqwka",next_btn:"FeesStructure_next_btn__Kc+CA",btn_group:"FeesStructure_btn_group__xycY6",leave_dates:"FeesStructure_leave_dates__nByRK",letter_head_container:"FeesStructure_letter_head_container__sRo4F",modal_container:"FeesStructure_modal_container__orQgp",modal_container_outer_header:"FeesStructure_modal_container_outer_header__RSzLS",modal_container_header:"FeesStructure_modal_container_header__F-XEd",fm_search_full:"FeesStructure_fm_search_full__wKV++",fm_search_full_container:"FeesStructure_fm_search_full_container__lYJ8u",fm_search_full_container_inner:"FeesStructure_fm_search_full_container_inner__pZb5S",fm_search_full_icon:"FeesStructure_fm_search_full_icon__wFTld",afsi_container:"FeesStructure_afsi_container__DBw6W"}}}]);
//# sourceMappingURL=2249.45b4ba7c.chunk.js.map