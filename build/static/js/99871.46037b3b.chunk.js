"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[99871],{47167:(t,i,e)=>{e.d(i,{Z:()=>d});e(72791);var n=e(16871),s=e(43504),l=e(23769),a=e(45639),o=e(80184);const d=t=>{let{tabList:i,activeIndexTab:e,setActiveIndexTab:d,customStyleTab:c,carryParentState:v,showAs:u,customStyleLink:m}=t;const r=(0,n.UO)();return(0,o.jsx)("div",{className:a.Z.universal_container,children:u?null===i||void 0===i?void 0:i.map(((t,i)=>"disabled"===(null===t||void 0===t?void 0:t.is_active)?(0,o.jsx)("div",{className:e===(null===t||void 0===t?void 0:t.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...m,opacity:"0.5"},children:(0,o.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})},i):(0,o.jsx)(s.rU,{to:"/q/".concat(r.username,"/").concat(null===t||void 0===t?void 0:t.url),state:{...v},style:{...m},children:(0,o.jsx)("div",{className:e===(null===t||void 0===t?void 0:t.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...c},children:(0,o.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})})},i))):null===i||void 0===i?void 0:i.map(((t,i)=>(0,o.jsx)("div",{className:e===(null===t||void 0===t?void 0:t.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,onClick:()=>d(null===t||void 0===t?void 0:t.id),style:{...c},children:(0,o.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})},i)))})}},23769:(t,i,e)=>{e.d(i,{Z:()=>l});var n=e(72791),s=e(80184);const l=function(t){let{children:i,onclick:e}=t;const[l,a]=(0,n.useState)(!1),[o,d]=(0,n.useState)({x:-1,y:-1});return(0,n.useEffect)((()=>{-1!==o.x&&-1!==o.y?(a(!0),setTimeout((()=>a(!1)),1e3)):a(!1)}),[o]),(0,n.useEffect)((()=>{l||d({x:-1,y:-1})}),[l]),(0,s.jsxs)("div",{className:"ripple_btn",onClick:t=>{d({x:t.clientX-t.target.offsetLeft,y:t.clientY-t.target.offsetTop}),e&&e(t)},children:[l?(0,s.jsx)("span",{className:"ripple"}):"",(0,s.jsx)("span",{className:"content",children:i})]})}},99871:(t,i,e)=>{e.r(i),e.d(i,{default:()=>b});var n=e(72791);const s="Complaints_complaints__jh4Ri",l="Complaints_complaintList__YUCOU",a="Complaints_complaintDetail__JnHPE",o="ComplaintList_complaintList__Gp9rZ",d="ComplaintList_listHead__6cnZh",c="UnsolvedList_list__OXUHv",v="UnsolvedList_item__PCOcY",u="UnsolvedList_datetime__omKDp",m="UnsolvedList_item_active__MN1jU";var r=e(95048),f=e(6245),_=e(72426),p=e.n(_),h=e(80184);const x=t=>{var i,e,n,s;let{setShowDetails:l,setOnComplaintId:a,complaint:o,onComplaintId:d}=t;return(0,h.jsxs)("div",{className:(null===d||void 0===d?void 0:d.cid)===(null===o||void 0===o?void 0:o._id)?"".concat(v," ").concat(m):v,onClick:()=>{var t,i,e,n;a({cid:null===o||void 0===o?void 0:o._id,name:"Anonymous"===(null===o||void 0===o?void 0:o.complaintType)?"Anonymous":"".concat(null===o||void 0===o||null===(t=o.staff)||void 0===t?void 0:t.staffFirstName," ").concat(null!==o&&void 0!==o&&null!==(i=o.staff)&&void 0!==i&&i.staffMiddleName?null===o||void 0===o||null===(e=o.staff)||void 0===e?void 0:e.staffMiddleName:""," ").concat(null===o||void 0===o||null===(n=o.staff)||void 0===n?void 0:n.staffLastName)}),l(!0)},children:[(0,h.jsx)("img",{src:"/images/complainIcon.svg",alt:"complant icon"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h6",{children:"Anonymous"===(null===o||void 0===o?void 0:o.complaintType)?"Anonymous":"".concat(null===o||void 0===o||null===(i=o.staff)||void 0===i?void 0:i.staffFirstName," ").concat(null!==o&&void 0!==o&&null!==(e=o.staff)&&void 0!==e&&e.staffMiddleName?null===o||void 0===o||null===(n=o.staff)||void 0===n?void 0:n.staffMiddleName:""," ").concat(null===o||void 0===o||null===(s=o.staff)||void 0===s?void 0:s.staffLastName)}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsxs)("p",{children:[p()(null===o||void 0===o?void 0:o.createdAt).format("LL"),","]}),(0,h.jsx)("p",{children:p()(null===o||void 0===o?void 0:o.createdAt).format("LT")})]})]})]})};var j=e(11105);const S=function(t){var i;let{setOnComplaintId:e,setShowDetails:s,onComplaintId:l,refetchStatus:a,setRefetchStatus:o}=t;const d=(0,r.v9)((t=>t.idChange)),[v,u]=(0,n.useState)(!0),{staffComplaintList:m,staffComplaintListRefetch:_}=(0,f.mj)({data:{id:null===d||void 0===d?void 0:d.id,status:"Unsolved"},skip:!(null!==d&&void 0!==d&&d.id)});return(0,n.useEffect)((()=>{(null!==d&&void 0!==d&&d.id||a.unsolved)&&(u(!0),_(),o((t=>({...t,unsolved:!1}))))}),[null===d||void 0===d?void 0:d.id,a.unsolved,_]),(0,n.useEffect)((()=>{null!==m&&void 0!==m&&m.complaints&&u(!1)}),[null===m||void 0===m?void 0:m.complaints]),(0,n.useEffect)((()=>{setTimeout((()=>u(!1)),2e3)}),[]),(0,h.jsxs)("div",{className:c,children:[null===m||void 0===m||null===(i=m.complaints)||void 0===i?void 0:i.map(((t,i)=>(0,h.jsx)(x,{setShowDetails:s,setOnComplaintId:e,complaint:t,onComplaintId:l},i))),v&&(0,h.jsx)(j.Z,{})]})};var C=e(39230);const N=function(t){var i;let{setOnComplaintId:e,setShowDetails:s,onComplaintId:l,refetchStatus:a,setRefetchStatus:o}=t;const d=(0,r.v9)((t=>t.idChange)),[v,u]=(0,n.useState)(!0),{staffComplaintList:m,staffComplaintListRefetch:_}=(0,f.mj)({data:{id:null===d||void 0===d?void 0:d.id,status:"Solved"},skip:!(null!==d&&void 0!==d&&d.id)});return(0,n.useEffect)((()=>{(null!==d&&void 0!==d&&d.id||a.solved)&&(u(!0),_(),o((t=>({...t,solved:!1}))))}),[null===d||void 0===d?void 0:d.id,a.solved,_]),(0,n.useEffect)((()=>{null!==m&&void 0!==m&&m.complaints&&u(!1)}),[null===m||void 0===m?void 0:m.complaints]),(0,n.useEffect)((()=>{setTimeout((()=>u(!1)),2e3)}),[]),(0,h.jsxs)("div",{className:c,children:[null===m||void 0===m||null===(i=m.complaints)||void 0===i?void 0:i.map(((t,i)=>(0,h.jsx)(x,{setShowDetails:s,setOnComplaintId:e,complaint:t,onComplaintId:l},i))),v&&(0,h.jsx)(j.Z,{})]})};var I=e(47167),Z=e(98094);const y=function(t){let{setOnComplaintId:i,setShowDetails:e,onComplaintId:s,refetchStatus:l,setRefetchStatus:a}=t;const{t:c}=(0,C.$G)(),[v,u]=(0,n.useState)(0),m=[{name:c("unsolved"),id:0},{name:c("solved"),id:1}];return(0,h.jsx)("div",{className:o,children:(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)(I.Z,{tabList:m,activeIndexTab:v,setActiveIndexTab:u,customStyleTab:{width:"100%"}}),(0,h.jsx)(Z.Z,{customStyle:{width:"100%"}}),0===v&&(0,h.jsx)(S,{setShowDetails:e,setOnComplaintId:i,onComplaintId:s,setRefetchStatus:a,refetchStatus:l}),1===v&&(0,h.jsx)(N,{setShowDetails:e,setOnComplaintId:i,onComplaintId:s,setRefetchStatus:a,refetchStatus:l})]})})};var L=e(35395);const T=n.lazy((()=>e.e(77997).then(e.bind(e,77997))));const b=function(){const[t,i]=(0,n.useState)(""),[e,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1);return(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{className:l,children:(0,h.jsx)(y,{setShowDetails:o,setOnComplaintId:i,onComplaintId:t,setRefetchStatus:c,refetchStatus:d})}),(0,h.jsx)("div",{className:a,children:e&&(0,h.jsx)(L.Z,{children:(0,h.jsx)(T,{setShowDetails:o,onComplaintId:t,setRefetchStatus:c})})})]})}},45639:(t,i,e)=>{e.d(i,{Z:()=>n});const n={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=99871.46037b3b.chunk.js.map