"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[99871],{47167:function(t,n,i){var e=i(1413),a=(i(72791),i(16871)),s=i(43504),l=i(23769),o=i(45639),d=i(80184);n.Z=function(t){var n=t.tabList,i=t.activeIndexTab,c=t.setActiveIndexTab,u=t.customStyleTab,v=t.carryParentState,r=t.showAs,f=t.customStyleLink,m=(0,a.UO)();return(0,d.jsx)("div",{className:o.Z.universal_container,children:r?null===n||void 0===n?void 0:n.map((function(t,n){return"disabled"===(null===t||void 0===t?void 0:t.is_active)?(0,d.jsx)("div",{className:i===(null===t||void 0===t?void 0:t.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,e.Z)((0,e.Z)({},f),{},{opacity:"0.5"}),children:(0,d.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})},n):(0,d.jsx)(s.rU,{to:"/q/".concat(m.username,"/").concat(null===t||void 0===t?void 0:t.url),state:(0,e.Z)({},v),style:(0,e.Z)({},f),children:(0,d.jsx)("div",{className:i===(null===t||void 0===t?void 0:t.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,e.Z)({},u),children:(0,d.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})})},n)})):null===n||void 0===n?void 0:n.map((function(t,n){return(0,d.jsx)("div",{className:i===(null===t||void 0===t?void 0:t.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,onClick:function(){return c(null===t||void 0===t?void 0:t.id)},style:(0,e.Z)({},u),children:(0,d.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.name})},n)}))})}},23769:function(t,n,i){i.d(n,{Z:function(){return l}});var e=i(29439),a=i(72791),s=i(80184);var l=function(t){var n=t.children,i=t.onclick,l=(0,a.useState)(!1),o=(0,e.Z)(l,2),d=o[0],c=o[1],u=(0,a.useState)({x:-1,y:-1}),v=(0,e.Z)(u,2),r=v[0],f=v[1];return(0,a.useEffect)((function(){-1!==r.x&&-1!==r.y?(c(!0),setTimeout((function(){return c(!1)}),1e3)):c(!1)}),[r]),(0,a.useEffect)((function(){d||f({x:-1,y:-1})}),[d]),(0,s.jsxs)("div",{className:"ripple_btn",onClick:function(t){f({x:t.clientX-t.target.offsetLeft,y:t.clientY-t.target.offsetTop}),i&&i(t)},children:[d?(0,s.jsx)("span",{className:"ripple"}):"",(0,s.jsx)("span",{className:"content",children:n})]})}},99871:function(t,n,i){i.r(n),i.d(n,{default:function(){return O}});var e=i(29439),a=i(72791),s="Complaints_complaints__jh4Ri",l="Complaints_complaintList__YUCOU",o="Complaints_complaintDetail__JnHPE",d="ComplaintList_complaintList__Gp9rZ",c="ComplaintList_listHead__6cnZh",u=i(1413),v="UnsolvedList_list__OXUHv",r="UnsolvedList_item__PCOcY",f="UnsolvedList_datetime__omKDp",m="UnsolvedList_item_active__MN1jU",_=i(95048),p=i(6245),h=i(72426),x=i.n(h),Z=i(80184),j=function(t){var n,i,e,a,s=t.setShowDetails,l=t.setOnComplaintId,o=t.complaint,d=t.onComplaintId;return(0,Z.jsxs)("div",{className:(null===d||void 0===d?void 0:d.cid)===(null===o||void 0===o?void 0:o._id)?"".concat(r," ").concat(m):r,onClick:function(){var t,n,i,e;l({cid:null===o||void 0===o?void 0:o._id,name:"Anonymous"===(null===o||void 0===o?void 0:o.complaintType)?"Anonymous":"".concat(null===o||void 0===o||null===(t=o.staff)||void 0===t?void 0:t.staffFirstName," ").concat(null!==o&&void 0!==o&&null!==(n=o.staff)&&void 0!==n&&n.staffMiddleName?null===o||void 0===o||null===(i=o.staff)||void 0===i?void 0:i.staffMiddleName:""," ").concat(null===o||void 0===o||null===(e=o.staff)||void 0===e?void 0:e.staffLastName)}),s(!0)},children:[(0,Z.jsx)("img",{src:"/images/complainIcon.svg",alt:"complant icon"}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h6",{children:"Anonymous"===(null===o||void 0===o?void 0:o.complaintType)?"Anonymous":"".concat(null===o||void 0===o||null===(n=o.staff)||void 0===n?void 0:n.staffFirstName," ").concat(null!==o&&void 0!==o&&null!==(i=o.staff)&&void 0!==i&&i.staffMiddleName?null===o||void 0===o||null===(e=o.staff)||void 0===e?void 0:e.staffMiddleName:""," ").concat(null===o||void 0===o||null===(a=o.staff)||void 0===a?void 0:a.staffLastName)}),(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsxs)("p",{children:[x()(null===o||void 0===o?void 0:o.createdAt).format("LL"),","]}),(0,Z.jsx)("p",{children:x()(null===o||void 0===o?void 0:o.createdAt).format("LT")})]})]})]})},S=i(11105);var C=function(t){var n,i=t.setOnComplaintId,s=t.setShowDetails,l=t.onComplaintId,o=t.refetchStatus,d=t.setRefetchStatus,c=(0,_.v9)((function(t){return t.idChange})),r=(0,a.useState)(!0),f=(0,e.Z)(r,2),m=f[0],h=f[1],x=(0,p.mj)({data:{id:null===c||void 0===c?void 0:c.id,status:"Unsolved"},skip:!(null!==c&&void 0!==c&&c.id)}),C=x.staffComplaintList,N=x.staffComplaintListRefetch;return(0,a.useEffect)((function(){(null!==c&&void 0!==c&&c.id||o.unsolved)&&(h(!0),N(),d((function(t){return(0,u.Z)((0,u.Z)({},t),{},{unsolved:!1})})))}),[null===c||void 0===c?void 0:c.id,o.unsolved,N]),(0,a.useEffect)((function(){null!==C&&void 0!==C&&C.complaints&&h(!1)}),[null===C||void 0===C?void 0:C.complaints]),(0,a.useEffect)((function(){setTimeout((function(){return h(!1)}),2e3)}),[]),(0,Z.jsxs)("div",{className:v,children:[null===C||void 0===C||null===(n=C.complaints)||void 0===n?void 0:n.map((function(t,n){return(0,Z.jsx)(j,{setShowDetails:s,setOnComplaintId:i,complaint:t,onComplaintId:l},n)})),m&&(0,Z.jsx)(S.Z,{})]})},N=i(39230);var I=function(t){var n,i=t.setOnComplaintId,s=t.setShowDetails,l=t.onComplaintId,o=t.refetchStatus,d=t.setRefetchStatus,c=(0,_.v9)((function(t){return t.idChange})),r=(0,a.useState)(!0),f=(0,e.Z)(r,2),m=f[0],h=f[1],x=(0,p.mj)({data:{id:null===c||void 0===c?void 0:c.id,status:"Solved"},skip:!(null!==c&&void 0!==c&&c.id)}),C=x.staffComplaintList,N=x.staffComplaintListRefetch;return(0,a.useEffect)((function(){(null!==c&&void 0!==c&&c.id||o.solved)&&(h(!0),N(),d((function(t){return(0,u.Z)((0,u.Z)({},t),{},{solved:!1})})))}),[null===c||void 0===c?void 0:c.id,o.solved,N]),(0,a.useEffect)((function(){null!==C&&void 0!==C&&C.complaints&&h(!1)}),[null===C||void 0===C?void 0:C.complaints]),(0,a.useEffect)((function(){setTimeout((function(){return h(!1)}),2e3)}),[]),(0,Z.jsxs)("div",{className:v,children:[null===C||void 0===C||null===(n=C.complaints)||void 0===n?void 0:n.map((function(t,n){return(0,Z.jsx)(j,{setShowDetails:s,setOnComplaintId:i,complaint:t,onComplaintId:l},n)})),m&&(0,Z.jsx)(S.Z,{})]})},y=i(47167),L=i(98094);var T=function(t){var n=t.setOnComplaintId,i=t.setShowDetails,s=t.onComplaintId,l=t.refetchStatus,o=t.setRefetchStatus,u=(0,N.$G)().t,v=(0,a.useState)(0),r=(0,e.Z)(v,2),f=r[0],m=r[1],_=[{name:u("unsolved"),id:0},{name:u("solved"),id:1}];return(0,Z.jsx)("div",{className:d,children:(0,Z.jsxs)("div",{className:c,children:[(0,Z.jsx)(y.Z,{tabList:_,activeIndexTab:f,setActiveIndexTab:m,customStyleTab:{width:"100%"}}),(0,Z.jsx)(L.Z,{customStyle:{width:"100%"}}),0===f&&(0,Z.jsx)(C,{setShowDetails:i,setOnComplaintId:n,onComplaintId:s,setRefetchStatus:o,refetchStatus:l}),1===f&&(0,Z.jsx)(I,{setShowDetails:i,setOnComplaintId:n,onComplaintId:s,setRefetchStatus:o,refetchStatus:l})]})})},b=i(35395),w=a.lazy((function(){return i.e(77997).then(i.bind(i,77997))}));var O=function(){var t=(0,a.useState)(""),n=(0,e.Z)(t,2),i=n[0],d=n[1],c=(0,a.useState)(!1),u=(0,e.Z)(c,2),v=u[0],r=u[1],f=(0,a.useState)(!1),m=(0,e.Z)(f,2),_=m[0],p=m[1];return(0,Z.jsxs)("div",{className:s,children:[(0,Z.jsx)("div",{className:l,children:(0,Z.jsx)(T,{setShowDetails:r,setOnComplaintId:d,onComplaintId:i,setRefetchStatus:p,refetchStatus:_})}),(0,Z.jsx)("div",{className:o,children:v&&(0,Z.jsx)(b.Z,{children:(0,Z.jsx)(w,{setShowDetails:r,onComplaintId:i,setRefetchStatus:p})})})]})}},45639:function(t,n){n.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=99871.0d546042.chunk.js.map