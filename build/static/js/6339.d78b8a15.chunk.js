"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6339],{47167:(e,a,t)=>{t.d(a,{Z:()=>c});t(72791);var s=t(16871),i=t(43504),l=t(23769),n=t(45639),d=t(80184);const c=e=>{let{tabList:a,activeIndexTab:t,setActiveIndexTab:c,customStyleTab:r,carryParentState:o,showAs:v,customStyleLink:f}=e;const u=(0,s.UO)();return(0,d.jsx)("div",{className:n.Z.universal_container,children:v?null===a||void 0===a?void 0:a.map(((e,a)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,d.jsx)("div",{className:t===(null===e||void 0===e?void 0:e.id)?"".concat(n.Z.universal_container_item," ").concat(n.Z.universal_container_item_active):n.Z.universal_container_item,style:{...f,opacity:"0.5"},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},a):(0,d.jsx)(i.rU,{to:"/q/".concat(u.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...o},style:{...f},children:(0,d.jsx)("div",{className:t===(null===e||void 0===e?void 0:e.id)?"".concat(n.Z.universal_container_item," ").concat(n.Z.universal_container_item_active):n.Z.universal_container_item,style:{...r},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})})},a))):null===a||void 0===a?void 0:a.map(((e,a)=>(0,d.jsx)("div",{className:t===(null===e||void 0===e?void 0:e.id)?"".concat(n.Z.universal_container_item," ").concat(n.Z.universal_container_item_active):n.Z.universal_container_item,onClick:()=>c(null===e||void 0===e?void 0:e.id),style:{...r},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},a)))})}},23769:(e,a,t)=>{t.d(a,{Z:()=>l});var s=t(72791),i=t(80184);const l=function(e){let{children:a,onclick:t}=e;const[l,n]=(0,s.useState)(!1),[d,c]=(0,s.useState)({x:-1,y:-1});return(0,s.useEffect)((()=>{-1!==d.x&&-1!==d.y?(n(!0),setTimeout((()=>n(!1)),1e3)):n(!1)}),[d]),(0,s.useEffect)((()=>{l||c({x:-1,y:-1})}),[l]),(0,i.jsxs)("div",{className:"ripple_btn",onClick:e=>{c({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),t&&t(e)},children:[l?(0,i.jsx)("span",{className:"ripple"}):"",(0,i.jsx)("span",{className:"content",children:a})]})}},6339:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D});var s=t(72791);const i="LeavesTransfer_complaints__d-Y+H",l="LeavesTransfer_complaintList__LIquD",n="LeavesTransfer_complaintDetail__Budn8",d="LeavesTab_complaintList__sDWs8",c="LeavesTab_listHead__UwvVn";var r=t(39230);const o="Leaves_item__NgSvu",v="Leaves_leaves__tHjre",f="Leaves_itemHead__wF5RS",u="Leaves_left__zckTY",_="Leaves_text__WivxN",m="Leaves_right__uAQzd",h="Leaves_btn__paNmR",p="Leaves_activeBtn__lDdeV",x="Leaves_reason__29vz2",j="Leaves_divider__6JQy3",L="Leaves_viewAll__ZHrmb";var N=t(95048),S=t(6245),b=t(11105),y=t(35395),T=t(69721),g=t(98734),k=t(91727),Z=t(98684),I=t(80184);const R=s.lazy((()=>t.e(92520).then(t.bind(t,92520)))),w=e=>{var a,t,i,l,n,d;let{leave:c,onStaffLeaveListRefetch:v,viewBy:N}=e;const[b]=(0,S.Gh)(),[w]=(0,k.Pv)(),[C,V]=(0,s.useState)(!1),[B,A]=(0,s.useState)(!1),{t:F}=(0,r.$G)(),M=e=>{var a,t;(V((e=>!e)),"COFF"===N&&null!==c&&void 0!==c&&null!==(a=c.staff)&&void 0!==a&&a._id)?w({lid:null===c||void 0===c?void 0:c._id,cConfig:{sid:null===c||void 0===c||null===(t=c.staff)||void 0===t?void 0:t._id}}).then((()=>{v(),V((e=>!e))})):b({id:null===c||void 0===c?void 0:c._id,leaveAction:{status:e}}).then((()=>{v(),V((e=>!e))}))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{className:o,children:[(0,I.jsxs)("div",{className:f,children:[(0,I.jsxs)("div",{className:u,children:[(0,I.jsx)("img",{src:"1"!==(null===c||void 0===c||null===(a=c.staff)||void 0===a?void 0:a.photoId)?"".concat(T.yI,"/").concat(null===c||void 0===c||null===(t=c.staff)||void 0===t?void 0:t.staffProfilePhoto):"".concat(Z.p3,"/feed-user-avatar.svg"),alt:""}),(0,I.jsxs)("div",{className:_,children:[(0,I.jsx)("h6",{children:"".concat(null===c||void 0===c||null===(i=c.staff)||void 0===i?void 0:i.staffFirstName," ").concat(null!==c&&void 0!==c&&null!==(l=c.staff)&&void 0!==l&&l.staffMiddleName?null===c||void 0===c||null===(n=c.staff)||void 0===n?void 0:n.staffMiddleName:""," ").concat(null===c||void 0===c||null===(d=c.staff)||void 0===d?void 0:d.staffLastName)}),1===(null===c||void 0===c?void 0:c.date.length)?(0,I.jsx)("p",{children:null===c||void 0===c?void 0:c.date[0]}):(0,I.jsxs)("p",{children:[null===c||void 0===c?void 0:c.date[0]," ",!B&&(0,I.jsxs)("span",{className:L,onClick:()=>A(!0),children:["..",F("view_all_")]})]}),B&&(0,I.jsx)(y.Z,{children:(0,I.jsx)(R,{open:B,hideModal:e=>A(e),dates:null===c||void 0===c?void 0:c.date})})]})]}),(0,I.jsxs)("div",{className:m,children:[(null===c||void 0===c?void 0:c.attach)&&(0,I.jsx)("a",{href:"".concat(T.r3,"/").concat(null===c||void 0===c?void 0:c.attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,I.jsx)("img",{src:"/images/members/receipt-icon.svg",alt:"receipt icon",style:{height:"1.5rem"}})}),"Request"===(null===c||void 0===c?void 0:c.status)?(0,I.jsxs)(I.Fragment,{children:["COFF"===N?null:(0,I.jsx)("div",{className:p,onClick:()=>{M("Rejected")},children:F("reject")}),(0,I.jsx)("div",{className:"".concat(p),onClick:()=>{M("Accepted")},children:F("approve")})]}):(0,I.jsx)("div",{className:h,style:"Rejected"===(null===c||void 0===c?void 0:c.status)?{color:"red"}:{color:"#14ab50"},children:null===c||void 0===c?void 0:c.status})]})]}),(0,I.jsxs)("div",{className:x,style:{marginBottom:"0.3rem"},children:[" ",F("leave_type")," "," : ",null===c||void 0===c?void 0:c.leave_type]}),(0,I.jsxs)("div",{className:x,children:[" ",F("reason")," "," : ",null===c||void 0===c?void 0:c.reason]})]}),(0,I.jsx)("div",{className:j}),C&&(0,I.jsx)(g.Z,{})]})};const C=function(){var e;const a=(0,N.v9)((e=>e.idChange.id)),[t,i]=(0,s.useState)(!0),{staffLeaveList:l,staffLeaveListRefetch:n}=(0,S.eJ)({data:{id:a,page:1,limit:10},skip:!a});return(0,s.useEffect)((()=>{a&&(i(!0),n())}),[a,n]),(0,s.useEffect)((()=>{null!==l&&void 0!==l&&l.allLeave&&i(!1)}),[null===l||void 0===l?void 0:l.allLeave]),(0,I.jsxs)("div",{className:v,children:[null===l||void 0===l||null===(e=l.allLeave)||void 0===e?void 0:e.map(((e,a)=>(0,I.jsx)(w,{leave:e,onStaffLeaveListRefetch:n},a))),t&&(0,I.jsx)(b.Z,{})]})},V={item:"Transfer_item__7r6ls",leaves:"Transfer_leaves__S0GpB",itemHead:"Transfer_itemHead__-fdF9",left:"Transfer_left__KgdOP",text:"Transfer_text__7ylZm",right:"Transfer_right__PyVy+",btn:"Transfer_btn__cs49i",activeBtn:"Transfer_activeBtn__V4uUp",reason:"Transfer_reason__W1Xj3",divider:"Transfer_divider__SOUhC",replacebtn:"Transfer_replacebtn__BGVcp",replacedbtn:"Transfer_replacedbtn__mZxCb"};var B=t(72426),A=t.n(B);function F(e){let{img:a,photoId:t,name:s,from:i,replacedBy:l,reason:n,index:d,replaced:c,setStaffListView:o,replacedStaff:v,setReplaceStaffId:f,setClickedIndex:u,clickedIndex:_,status:m,pid:h,aid:p,transId:x,MarkApprove:j,MarkReject:L}=e;const{t:N}=(0,r.$G)();return(0,I.jsxs)("div",{className:V.item,children:[(0,I.jsxs)("div",{className:V.itemHead,children:[(0,I.jsxs)("div",{className:V.left,children:[(0,I.jsx)("img",{src:"1"!==t?"".concat(T.yI,"/").concat(a):"".concat(Z.p3,"/feed-user-avatar.svg"),alt:""}),(0,I.jsxs)("div",{className:V.text,children:[(0,I.jsx)("h6",{children:s}),(0,I.jsx)("p",{children:i})]})]}),"Requested"===m?(0,I.jsxs)("div",{className:V.right,children:[(!v||_!==d)&&(0,I.jsx)("div",{className:"".concat(V.btn),children:N("reject")}),(!v||_!==d)&&(0,I.jsx)("div",{className:"".concat(V.btn),children:N("approve")}),v&&_===d&&(0,I.jsx)("div",{onClick:()=>{L("Rejected",x)},className:"".concat(V.activeBtn),children:N("reject")}),v&&_===d&&(0,I.jsx)("div",{onClick:()=>{j("Approved",h,p,x)},className:"".concat(V.activeBtn),children:N("approve")})]}):""]}),(0,I.jsx)("div",{className:V.reason,children:n}),"Requested"===m&&(0,I.jsx)("div",{onClick:()=>{o(!0),f(h),u(d)},className:V.replacebtn,children:N("replacement")}),"Requested"!==m&&(0,I.jsxs)("div",{className:V.replacedbtn,children:[N("replacement")," ",m]})]})}const M=function(e){let{staffListView:a,setStaffListView:t,replacedStaff:i,setReplaceStaffId:l,transferData:n,fetch:d}=e;const[c,r]=(0,s.useState)(),[o]=(0,S.rp)(),[v]=(0,S.qz)(),[f,u]=(0,s.useState)(!1),_=(e,a,s,i)=>{""!==e&&""!==a&&""!==s&&""!==i&&(u((e=>!e)),o({tid:i&&i,status:e&&e,previousStaff:a&&a,assignedStaff:s&&s}).then((()=>{d(),t(!1),u((e=>!e))})).catch((e=>{u((e=>!e))})))},m=(e,a)=>{""!==e&&""!==a&&(u((e=>!e)),v({tid:a&&a,status:e&&e}).then((e=>{d(),t(!1),u((e=>!e))})).catch((e=>{u((e=>!e))})))};return(0,I.jsxs)("div",{className:V.leaves,children:[null===n||void 0===n?void 0:n.map(((e,a)=>{var s,n,d,o,v,f,u;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(F,{index:a,img:null===e||void 0===e||null===(s=e.staff)||void 0===s?void 0:s.staffProfilePhoto,photoId:null===e||void 0===e||null===(n=e.staff)||void 0===n?void 0:n.photoId,from:A()(null===e||void 0===e?void 0:e.createdAt).format("LL"),replaced:e.replaced,replacedBy:e.replacedBy,name:"".concat(null===e||void 0===e||null===(d=e.staff)||void 0===d?void 0:d.staffFirstName," ").concat(null!==e&&void 0!==e&&null!==(o=e.staff)&&void 0!==o&&o.staffMiddleName?null===e||void 0===e||null===(v=e.staff)||void 0===v?void 0:v.staffMiddleName:""," ").concat(null===e||void 0===e||null===(f=e.staff)||void 0===f?void 0:f.staffLastName),reason:null===e||void 0===e?void 0:e.transferReason,setStaffListView:t,replacedStaff:i,setReplaceStaffId:l,clickedIndex:c,setClickedIndex:r,status:null===e||void 0===e?void 0:e.transferStatus,pid:null===e||void 0===e||null===(u=e.staff)||void 0===u?void 0:u._id,aid:null===i||void 0===i?void 0:i._id,transId:null===e||void 0===e?void 0:e._id,MarkApprove:_,MarkReject:m},a),(0,I.jsx)("div",{className:V.divider})]})})),f&&(0,I.jsx)(g.Z,{})]})};var q=t(98094),H=t(47167);const P=function(e){let{staffListView:a,setStaffListView:t,replacedStaff:i,setReplaceStaffId:l}=e;const n=(0,N.v9)((e=>e.idChange.id)),{t:o}=(0,r.$G)(),{transferList:v,transferListRefetch:f}=(0,S.X_)({id:n,skip:!n});(0,s.useEffect)((()=>{n&&f()}),[n]);const[u,_]=(0,s.useState)(0),m=[{name:o("leaves"),id:0},{name:o("transfer"),id:1}];return(0,I.jsx)("div",{className:d,children:(0,I.jsxs)("div",{className:c,children:[(0,I.jsx)(H.Z,{tabList:m,activeIndexTab:u,setActiveIndexTab:_,customStyleTab:{width:"100%"}}),(0,I.jsx)(q.Z,{customStyle:{width:"100%"}}),0===u&&(0,I.jsx)(C,{}),1===u&&(0,I.jsx)(M,{staffListView:a,setStaffListView:t,replacedStaff:i,setReplaceStaffId:l,transferData:v&&(null===v||void 0===v?void 0:v.transfers),fetch:f})]})})},U=s.lazy((()=>t.e(75493).then(t.bind(t,75493))));const D=function(){const[e,a]=(0,s.useState)(!1),[t,d]=(0,s.useState)(),[c,r]=(0,s.useState)("");return(0,I.jsxs)("div",{className:i,children:[(0,I.jsx)("div",{className:l,children:(0,I.jsx)(P,{staffListView:e,setStaffListView:a,replacedStaff:t,setReplaceStaffId:r})}),(0,I.jsx)("div",{className:n,children:e&&(0,I.jsx)(y.Z,{children:(0,I.jsx)(U,{staffListView:e,setStaffListView:a,setReplacedStaff:d,replaceStaffId:c,replacedStaff:t})})})]})}},45639:(e,a,t)=>{t.d(a,{Z:()=>s});const s={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=6339.d78b8a15.chunk.js.map