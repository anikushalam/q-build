"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[26097],{26097:(i,t,e)=>{e.r(t),e.d(t,{default:()=>x});var o=e(72791);const l={complaints:"SwitchAccount_complaints__FOCV9",swichModal:"SwitchAccount_swichModal__nF+az",swichModalTop:"SwitchAccount_swichModalTop__04Wup",swichModalBody:"SwitchAccount_swichModalBody__UXEej",swichModalItem:"SwitchAccount_swichModalItem__2hXtK",swichModalText:"SwitchAccount_swichModalText__kn6r2",search_container:"SwitchAccount_search_container__U4FLB",search_container_text:"SwitchAccount_search_container_text__ifPi5",search_container_input:"SwitchAccount_search_container_input__Jrtnb",searchIcon:"SwitchAccount_searchIcon__wfOTB"};var n=e(5574),s=e(87232),d=e(69721),c=e(39230),a=e(95048),u=e(16871),r=e(98734),v=e(11105),h=e(98990),_=e(10777),m=e(80184);function f(i){var t,e,n,s,c,v,f,w,x,p,N,M;let{data:j}=i;const g=(0,u.s0)(),y=(0,u.UO)(),I=(0,a.v9)((i=>i.idChange.id)),[P,b]=(0,o.useState)(""),[S,A]=(0,o.useState)(!1),C=(0,a.I0)(),{userV1ActivatedMemberLoading:k,userV1ActivatedMemberRefetch:F}=(0,_.bn)({data:{uid:I,role:P},skip:!P}),L=i=>{b(i)};return(0,o.useEffect)((()=>{P&&(A((i=>!i)),F())}),[P,F]),(0,o.useEffect)((()=>{P&&!k&&(C(h.S.onUserMember({memberType:"",memberId:P,isCallable:!1})),g("/q/".concat(y.username,"/memberstab"),{state:{selectedAccount:P}}),A((i=>!i)))}),[k]),(0,m.jsxs)(m.Fragment,{children:[null!==j&&void 0!==j&&j.studentFirstName?(0,m.jsxs)("div",{className:l.swichModalItem,onClick:()=>L(null===j||void 0===j?void 0:j._id),children:[(0,m.jsx)("img",{id:"profileImg",alt:"",src:null!==j&&void 0!==j&&null!==(t=j.institute)&&void 0!==t&&t.insProfilePhoto?"".concat(d.yI,"/").concat(null===j||void 0===j||null===(e=j.institute)||void 0===e?void 0:e.insProfilePhoto):null!==j&&void 0!==j&&null!==(n=j.student_unit)&&void 0!==n&&n.hostel_unit_photo?"".concat(d.yI,"/").concat(null===j||void 0===j||null===(s=j.student_unit)||void 0===s?void 0:s.hostel_unit_photo):null!==j&&void 0!==j&&j.studentProfilePhoto?"".concat(d.yI,"/").concat(null===j||void 0===j?void 0:j.studentProfilePhoto):"/images/ins_default_profile.svg"}),(0,m.jsxs)("div",{className:l.swichModalText,children:[(0,m.jsx)("h6",{children:null!==(c=null!==(v=null===j||void 0===j||null===(f=j.institute)||void 0===f?void 0:f.insName)&&void 0!==v?v:"".concat(null!==j&&void 0!==j&&null!==(w=j.student_unit)&&void 0!==w&&w.hostel_unit_name?"".concat(null===j||void 0===j||null===(x=j.student_unit)||void 0===x?void 0:x.hostel_unit_name," (Hostel)"):""))&&void 0!==c?c:""}),(0,m.jsxs)("p",{children:[null===j||void 0===j?void 0:j.studentFirstName," ",null===j||void 0===j?void 0:j.studentMiddleName," ",null===j||void 0===j?void 0:j.studentLastName," ","(student)"]})]})]}):null!==j&&void 0!==j&&j.staffFirstName?(0,m.jsxs)("div",{className:l.swichModalItem,onClick:()=>L(null===j||void 0===j?void 0:j._id),children:[(0,m.jsx)("img",{id:"profileImg",alt:"",src:null!==j&&void 0!==j&&null!==(p=j.institute)&&void 0!==p&&p.insProfilePhoto?"".concat(d.yI,"/").concat(null===j||void 0===j||null===(N=j.institute)||void 0===N?void 0:N.insProfilePhoto):null!==j&&void 0!==j&&j.staffProfilePhoto?"".concat(d.yI,"/").concat(null===j||void 0===j?void 0:j.staffProfilePhoto):"/images/ins_default_profile.svg"}),(0,m.jsxs)("div",{className:l.swichModalText,children:[(0,m.jsx)("h6",{children:null===j||void 0===j||null===(M=j.institute)||void 0===M?void 0:M.insName}),(0,m.jsxs)("p",{children:[null===j||void 0===j?void 0:j.staffFirstName," ",null===j||void 0===j?void 0:j.staffMiddleName," ",null===j||void 0===j?void 0:j.staffLastName," ","(staff)"]})]})]}):"",S&&(0,m.jsx)(r.Z,{})]})}const w=function(){const{t:i}=(0,c.$G)(),t=(0,u.s0)(),e=(0,a.v9)((i=>i.idChange.id)),[d,r]=(0,o.useState)(!0),[h,_]=(0,o.useState)([]),{data:w,refetch:x}=(0,s.I)(e,{skip:!e});return(0,o.useEffect)((()=>{e&&(r(!0),x())}),[x,e]),(0,o.useEffect)((()=>{var i;null!==w&&void 0!==w&&w.role_query?(_(null===w||void 0===w?void 0:w.role_query),r(!1)):0===(null===w||void 0===w||null===(i=w.role_query)||void 0===i?void 0:i.length)&&r(!1)}),[null===w||void 0===w?void 0:w.role_query]),(0,m.jsx)(n.Z,{open:!0,onClose:()=>t(-1),children:(0,m.jsxs)("div",{className:l.swichModal,children:[(0,m.jsx)("div",{className:l.swichModalTop,onClick:()=>t(-1),children:i("switch_account")}),(0,m.jsxs)("div",{className:l.swichModalBody,children:[(0,m.jsx)("div",{className:l.search_container,style:{marginBottom:"0.6rem"},children:(0,m.jsxs)("div",{className:l.search_container_text,children:[(0,m.jsx)("img",{className:l.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,m.jsx)("input",{type:"text",placeholder:i("search-label"),onChange:i=>{if(i.target.value){var t;const e=null===w||void 0===w||null===(t=w.role_query)||void 0===t?void 0:t.filter((t=>((i,t)=>{var e;let o=null!==i&&void 0!==i&&i.studentFirstName?"".concat(null===i||void 0===i?void 0:i.studentFirstName," ").concat(null!==i&&void 0!==i&&i.studentMiddleName?"".concat(null===i||void 0===i?void 0:i.studentMiddleName," "):"").concat(null===i||void 0===i?void 0:i.studentLastName):"".concat(null===i||void 0===i?void 0:i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?"".concat(null===i||void 0===i?void 0:i.staffMiddleName," "):"").concat(null===i||void 0===i?void 0:i.staffLastName);return null!==o&&void 0!==o&&null!==(e=o.toLocaleLowerCase())&&void 0!==e&&e.includes(null===t||void 0===t?void 0:t.toLocaleLowerCase())?i:null})(t,i.target.value)));_(e)}else _(null===w||void 0===w?void 0:w.role_query)},autoFocus:!0,style:{border:"0.029vw solid rgba(0, 0, 0, 0.15)",width:"370px",marginInline:"0.5rem"}})]})}),null===h||void 0===h?void 0:h.map(((i,t)=>(0,m.jsx)(f,{data:i},t))),d&&(0,m.jsx)(v.Z,{})]})]})})};const x=function(){return(0,m.jsx)("div",{className:l.complaints,children:(0,m.jsx)(w,{})})}}}]);
//# sourceMappingURL=26097.0e7fc46b.chunk.js.map