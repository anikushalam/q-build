"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[30659],{30659:(t,s,e)=>{e.r(s),e.d(s,{default:()=>R});var i=e(72791);const l="Complaints_complaints__zd0mi",a="Complaints_complaintList__Pq+6z",n="Complaints_complaintDetail__0vmvY",d="ComplaintList_complaintList__s9Lgh",o="ComplaintList_listHead__t2Q9h";var c=e(39230);const u="UnsolvedList_list__lirzT",v="UnsolvedList_item__zWK-2",m="UnsolvedList_datetime__gJbcW",p="UnsolvedList_item_active__Rwnuz";var h=e(6245),r=e(95048),f=e(72426),S=e.n(f),_=e(80184);const x=t=>{var s,e,i,l;let{complaint:a,setComplaintId:n,setShowDetails:d,complaintId:o}=t;return(0,_.jsxs)("div",{className:o===(null===a||void 0===a?void 0:a._id)?"".concat(v," ").concat(p):v,onClick:()=>{return t=null===a||void 0===a?void 0:a._id,n(t),void d(!0);var t},children:[(0,_.jsx)("img",{src:"/images/complainIcon.svg",alt:"compalint avatar"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h6",{children:"".concat(null===a||void 0===a||null===(s=a.student)||void 0===s?void 0:s.studentFirstName," ").concat(null!==a&&void 0!==a&&null!==(e=a.student)&&void 0!==e&&e.studentMiddleName?null===a||void 0===a||null===(i=a.student)||void 0===i?void 0:i.studentMiddleName:""," ").concat(null===a||void 0===a||null===(l=a.student)||void 0===l?void 0:l.studentLastName)}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsxs)("p",{children:[S()(null===a||void 0===a?void 0:a.createdAt).format("LL"),","]}),(0,_.jsx)("p",{children:S()(null===a||void 0===a?void 0:a.createdAt).format("LT")})]})]})]})};var j=e(11105);const C=function(t){var s;let{setComplaintId:e,setShowDetails:l,complaintId:a,refetchStatus:n,setRefetchStatus:d}=t;const o=(0,r.v9)((t=>t.idChange.id)),[c,v]=(0,i.useState)(!0),{studentComplaintList:m,studentComplaintListRefetch:p}=(0,h.bb)({data:{id:o,status:"Unsolved"},skip:!o});return(0,i.useEffect)((()=>{(o||n.unsolved)&&(v(!0),p(),d((t=>({...t,unsolved:!1}))))}),[o,n.unsolved,p]),(0,i.useEffect)((()=>{null!==m&&void 0!==m&&m.complaints&&v(!1)}),[null===m||void 0===m?void 0:m.complaints]),(0,i.useEffect)((()=>{setTimeout((()=>v(!1)),2e3)}),[]),(0,_.jsxs)("div",{className:u,children:[null===m||void 0===m||null===(s=m.complaints)||void 0===s?void 0:s.map(((t,s)=>(0,_.jsx)(x,{setComplaintId:e,setShowDetails:l,complaint:t,complaintId:a},s))),c&&(0,_.jsx)(j.Z,{})]})};const I=function(t){var s;let{setComplaintId:e,setShowDetails:l,complaintId:a,refetchStatus:n,setRefetchStatus:d}=t;const o=(0,r.v9)((t=>t.idChange.id)),[c,v]=(0,i.useState)(!0),{studentComplaintList:m,studentComplaintListRefetch:p}=(0,h.bb)({data:{id:o,status:"Solved"},skip:!o});return(0,i.useEffect)((()=>{(o||n.solved)&&(v(!0),p(),d((t=>({...t,solved:!1}))))}),[o,n.solved,p]),(0,i.useEffect)((()=>{null!==m&&void 0!==m&&m.complaints&&v(!1)}),[null===m||void 0===m?void 0:m.complaints]),(0,i.useEffect)((()=>{setTimeout((()=>v(!1)),2e3)}),[]),(0,_.jsxs)("div",{className:u,children:[null===m||void 0===m||null===(s=m.complaints)||void 0===s?void 0:s.map(((t,s)=>(0,_.jsx)(x,{setComplaintId:e,setShowDetails:l,complaint:t,complaintId:a},s))),c&&(0,_.jsx)(j.Z,{})]})};var L=e(47167),w=e(98094);const N=function(t){let{setComplaintId:s,setShowDetails:e,complaintId:l,refetchStatus:a,setRefetchStatus:n}=t;const{t:u}=(0,c.$G)(),[v,m]=(0,i.useState)(0),p=[{name:u("unsolved"),id:0},{name:u("solved"),id:1}];return(0,_.jsx)("div",{className:d,children:(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)(L.Z,{tabList:p,activeIndexTab:v,setActiveIndexTab:m,customStyleTab:{width:"100%"}}),(0,_.jsx)(w.Z,{customStyle:{width:"100%"}}),0===v&&(0,_.jsx)(C,{setShowDetails:e,setComplaintId:s,complaintId:l,setRefetchStatus:n,refetchStatus:a}),1===v&&(0,_.jsx)(I,{setShowDetails:e,setComplaintId:s,complaintId:l,setRefetchStatus:n,refetchStatus:a})]})})};var b=e(35395);const D=i.lazy((()=>e.e(81380).then(e.bind(e,81380))));const R=function(){const[t,s]=(0,i.useState)(""),[e,d]=(0,i.useState)(!1),[o,c]=(0,i.useState)(!1);return(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("div",{className:a,children:(0,_.jsx)(N,{setShowDetails:d,setComplaintId:s,complaintId:t,setRefetchStatus:c,refetchStatus:o})}),(0,_.jsx)("div",{className:n,children:e&&(0,_.jsx)(b.Z,{children:(0,_.jsx)(D,{setShowDetails:d,complaintId:t,setRefetchStatus:c})})})]})}}}]);
//# sourceMappingURL=30659.e0d5be8e.chunk.js.map