"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[68858,94394,37076],{63687:(e,l,n)=>{n.d(l,{Z:()=>d});var s=n(59393),i=n(80184);const d=e=>{let{customStyle:l,children:n}=e;return(0,i.jsx)("div",{className:s.Z.user_member_container_wrapper,style:l,children:n})}},68858:(e,l,n)=>{n.r(l),n.d(l,{default:()=>m});var s=n(98684),i=n(90904),d=n(93638),t=n(63687),o=n(21348),a=n(72791),r=n(39230),c=n(16871),v=n(56959),u=n(1095),_=n(3773),h=n(80184);const p=e=>{var l,n,i,d,t,o,a,v;let{student:p}=e;const{t:x}=(0,r.$G)(),f=(0,c.UO)(),m=(0,c.s0)(),j=(0,c.TH)();return(0,h.jsxs)("div",{className:_.Z.pending_fees_card,onClick:()=>{m("/q/".concat(f.username,"/student/profile"),{state:{sid:null===p||void 0===p?void 0:p._id}})},children:[(0,h.jsxs)("div",{className:_.Z.pending_fees_card_container,children:[(0,h.jsx)("img",{alt:"Student Avatar",src:null!==p&&void 0!==p&&p.studentProfilePhoto?"".concat(u.yI,"/").concat(null===p||void 0===p?void 0:p.studentProfilePhoto):"".concat(s.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,h.jsxs)("div",{className:_.Z.pending_fees_card_inner,children:[(0,h.jsx)("h6",{style:{fontSize:"13px",margin:"0"},children:null!==(l=null===p||void 0===p?void 0:p.valid_full_name)&&void 0!==l?l:""}),(0,h.jsxs)("p",{style:{fontSize:"11px"},children:[x("roll_no")," "," : ",null!==(n=null===p||void 0===p?void 0:p.studentROLLNO)&&void 0!==n?n:""]}),(0,h.jsxs)("p",{style:{fontSize:"11px"},children:[x("gr_number")," : ",null!==(i=null===p||void 0===p?void 0:p.studentGRNO)&&void 0!==i?i:""]})]})]}),"ADMISSION_OVERVIEW"===(null===(d=j.state)||void 0===d?void 0:d.openAs)?(0,h.jsxs)("div",{className:_.Z.statistics_balance,children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("h5",{style:{color:"#008000"},children:[x("rs_only")," ",null!==(t=null===p||void 0===p?void 0:p.total_paid_fees)&&void 0!==t?t:0]}),(0,h.jsx)("h6",{children:x("total_fees_paid")}),(0,h.jsxs)("h5",{style:{color:"#121212"},children:[x("rs_only")," ",null!==(o=null===p||void 0===p?void 0:p.total_os_fees)&&void 0!==o?o:0]}),(0,h.jsx)("h6",{children:x("total_outs")})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h5",{style:{color:"#121212"},children:[x("rs_only")," ",null!==(a=null===p||void 0===p?void 0:p.applicable_os_fees)&&void 0!==a?a:0]}),(0,h.jsx)("h6",{children:x("applicable_outs")}),(0,h.jsxs)("h5",{style:{color:"#121212"},children:[x("rs_only")," ",null!==(v=null===p||void 0===p?void 0:p.government_os_fees)&&void 0!==v?v:0]}),(0,h.jsx)("h6",{children:x("government_outs")})]})]}):null]})};var x=n(6758),f=n(55336);const m=()=>{var e,l,n;const{t:_}=(0,r.$G)(),m=(0,c.TH)(),[g,y]=(0,a.useState)([]),[Z,b]=(0,a.useState)(!1),[N]=(0,x.wo)();(0,a.useEffect)((()=>{var e,l,n;null!==m&&void 0!==m&&null!==(e=m.state)&&void 0!==e&&null!==(l=e.studentList)&&void 0!==l&&l.length&&y(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.studentList)}),[null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.studentList]);const S=(0,a.useCallback)((()=>{var e,l;b((e=>!e));let n=[];for(let s of g)n.push(null===s||void 0===s?void 0:s._id);N({exportBody:{all_arr:n,batch:null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.batchId,depart:null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.departmentId}}).then((e=>{var l,n;null!==e&&void 0!==e&&null!==(l=e.data)&&void 0!==l&&l.data&&(b((e=>!e)),window.open("".concat(u.LS,"/").concat(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data),"_blank","noreferrer"))})).catch({})}),[g]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t.Z,{children:[(0,h.jsx)(o.Z,{children:(0,h.jsxs)("div",{className:v.Z.fm_header_container,children:[(0,h.jsx)("h6",{children:_("OVERVIEW"===(null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.openAs)?"overview_statistics_detail":"ADMISSION_OVERVIEW"===(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.openAs)?"admission_statistics_detail":"student_statistics_detail")}),(0,h.jsxs)("div",{className:v.Z.fm_search,children:[(0,h.jsx)("section",{className:v.Z.fm_search_container,children:(0,h.jsxs)("div",{className:v.Z.fm_search_container_inner,children:[(0,h.jsx)("img",{className:v.Z.fm_search_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:_("search"),onChange:e=>{if(e.target.value){var l;let n=j(null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.studentList,e.target.value);y((()=>n))}else{var n;y(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.studentList)}}})]})}),(0,h.jsx)(d.Z,{label:"export",customStyle:{margin:"0",paddingBlock:"0.61rem"},onAction:S})]})]})}),(0,h.jsx)(i.Z,{}),(0,h.jsx)(o.Z,{customStyle:{paddingTop:"0"},children:null===g||void 0===g?void 0:g.map((e=>(0,h.jsx)(p,{student:e},null===e||void 0===e?void 0:e._id)))})]}),Z&&(0,h.jsx)(f.Z,{})]})},j=(e,l)=>null===e||void 0===e?void 0:e.filter((e=>{var n,s,i,d;return null!==e&&void 0!==e&&null!==(n=e.valid_full_name)&&void 0!==n&&null!==(s=n.toLowerCase())&&void 0!==s&&s.includes(null===l||void 0===l?void 0:l.toLowerCase())||null!==e&&void 0!==e&&null!==(i=e.studentGRNO)&&void 0!==i&&null!==(d=i.toLowerCase())&&void 0!==d&&d.includes(null===l||void 0===l?void 0:l.toLowerCase())?e:null}))},3773:(e,l,n)=>{n.d(l,{Z:()=>s});const s={pending_fees_card:"PendingFees_pending_fees_card__-fyKu",pending_fees_card_container:"PendingFees_pending_fees_card_container__HBWkK",pending_fees_card_inner:"PendingFees_pending_fees_card_inner__Zi+6O",statistics_balance:"PendingFees_statistics_balance__px4LZ"}}}]);
//# sourceMappingURL=68858.aa128892.chunk.js.map