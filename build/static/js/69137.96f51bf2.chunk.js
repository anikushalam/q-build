"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[69137],{68858:(e,l,n)=>{n.r(l),n.d(l,{default:()=>m});var i=n(98684),s=n(90904),d=n(93638),t=n(63687),o=n(21348),a=n(72791),r=n(39230),v=n(16871),c=n(56959),u=n(1095),_=n(3773),h=n(80184);const f=e=>{var l,n,s,d,t,o,a,c;let{student:f}=e;const{t:p}=(0,r.$G)(),x=(0,v.UO)(),m=(0,v.s0)(),j=(0,v.TH)();return(0,h.jsxs)("div",{className:_.Z.pending_fees_card,onClick:()=>{var e;m("/q/".concat(x.username,"/student/profile"),{state:{viewAs:"Institute"===(null===(e=j.state)||void 0===e?void 0:e.urlOffSet)?"INSTITUTE":null,sid:null===f||void 0===f?void 0:f._id}})},children:[(0,h.jsxs)("div",{className:_.Z.pending_fees_card_container,children:[(0,h.jsx)("img",{alt:"Student Avatar",src:null!==f&&void 0!==f&&f.studentProfilePhoto?"".concat(u.yI,"/").concat(null===f||void 0===f?void 0:f.studentProfilePhoto):"".concat(i.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,h.jsxs)("div",{className:_.Z.pending_fees_card_inner,children:[(0,h.jsx)("h6",{style:{fontSize:"13px",margin:"0"},children:null!==(l=null===f||void 0===f?void 0:f.valid_full_name)&&void 0!==l?l:""}),(0,h.jsxs)("p",{style:{fontSize:"11px"},children:[p("roll_no")," "," : ",null!==(n=null===f||void 0===f?void 0:f.studentROLLNO)&&void 0!==n?n:""]}),(0,h.jsxs)("p",{style:{fontSize:"11px"},children:[p("gr_number")," : ",null!==(s=null===f||void 0===f?void 0:f.studentGRNO)&&void 0!==s?s:""]})]})]}),"ADMISSION_OVERVIEW"===(null===(d=j.state)||void 0===d?void 0:d.openAs)?(0,h.jsxs)("div",{className:_.Z.statistics_balance,children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("h5",{style:{color:"#008000"},children:[p("rs_only")," ",null!==(t=null===f||void 0===f?void 0:f.total_paid_fees)&&void 0!==t?t:0]}),(0,h.jsx)("h6",{children:p("total_fees_paid")}),(0,h.jsxs)("h5",{style:{color:"#121212"},children:[p("rs_only")," ",null!==(o=null===f||void 0===f?void 0:f.total_os_fees)&&void 0!==o?o:0]}),(0,h.jsx)("h6",{children:p("total_outs")})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h5",{style:{color:"#121212"},children:[p("rs_only")," ",null!==(a=null===f||void 0===f?void 0:f.applicable_os_fees)&&void 0!==a?a:0]}),(0,h.jsx)("h6",{children:p("applicable_outs")}),(0,h.jsxs)("h5",{style:{color:"#121212"},children:[p("rs_only")," ",null!==(c=null===f||void 0===f?void 0:f.government_os_fees)&&void 0!==c?c:0]}),(0,h.jsx)("h6",{children:p("government_outs")})]})]}):null]})};var p=n(6758),x=n(55336);const m=()=>{var e,l,n;const{t:_}=(0,r.$G)(),m=(0,v.TH)(),[g,y]=(0,a.useState)([]),[N,S]=(0,a.useState)(!1),[b]=(0,p.wo)();(0,a.useEffect)((()=>{var e,l,n;null!==m&&void 0!==m&&null!==(e=m.state)&&void 0!==e&&null!==(l=e.studentList)&&void 0!==l&&l.length&&y(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.studentList)}),[null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.studentList]);const Z=(0,a.useCallback)((()=>{var e,l;S((e=>!e));let n=[];for(let i of g)n.push(null===i||void 0===i?void 0:i._id);b({exportBody:{all_arr:n,batch:null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.batchId,depart:null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.departmentId}}).then((e=>{var l;null!==e&&void 0!==e&&null!==(l=e.data)&&void 0!==l&&l.data&&setTimeout((()=>{var l;S((e=>!e));const n=window.open("".concat(u.LS,"/").concat(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.data),"_blank","noreferrer");n&&(n.opener=null)}),2e3)})).catch({})}),[g]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t.default,{children:[(0,h.jsx)(o.default,{children:(0,h.jsxs)("div",{className:c.Z.fm_header_container,children:[(0,h.jsx)("h6",{children:_("OVERVIEW"===(null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.openAs)?"overview_statistics_detail":"ADMISSION_OVERVIEW"===(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.openAs)?"admission_statistics_detail":"student_statistics_detail")}),(0,h.jsxs)("div",{className:c.Z.fm_search,children:[(0,h.jsx)("section",{className:c.Z.fm_search_container,children:(0,h.jsxs)("div",{className:c.Z.fm_search_container_inner,children:[(0,h.jsx)("img",{className:c.Z.fm_search_icon,alt:"search icon",src:"".concat(i.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:_("search"),onChange:e=>{if(e.target.value){var l;let n=j(null===m||void 0===m||null===(l=m.state)||void 0===l?void 0:l.studentList,e.target.value);y((()=>n))}else{var n;y(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.studentList)}}})]})}),(0,h.jsx)(d.Z,{label:"export",customStyle:{margin:"0",paddingBlock:"0.61rem"},onAction:Z})]})]})}),(0,h.jsx)(s.Z,{}),(0,h.jsx)(o.default,{customStyle:{paddingTop:"0"},children:null===g||void 0===g?void 0:g.map((e=>(0,h.jsx)(f,{student:e},null===e||void 0===e?void 0:e._id)))})]}),N&&(0,h.jsx)(x.default,{})]})},j=(e,l)=>null===e||void 0===e?void 0:e.filter((e=>{var n,i,s,d;return null!==e&&void 0!==e&&null!==(n=e.valid_full_name)&&void 0!==n&&null!==(i=n.toLowerCase())&&void 0!==i&&i.includes(null===l||void 0===l?void 0:l.toLowerCase())||null!==e&&void 0!==e&&null!==(s=e.studentGRNO)&&void 0!==s&&null!==(d=s.toLowerCase())&&void 0!==d&&d.includes(null===l||void 0===l?void 0:l.toLowerCase())?e:null}))},3773:(e,l,n)=>{n.d(l,{Z:()=>i});const i={pending_fees_card:"PendingFees_pending_fees_card__-fyKu",pending_fees_card_container:"PendingFees_pending_fees_card_container__HBWkK",pending_fees_card_inner:"PendingFees_pending_fees_card_inner__Zi+6O",statistics_balance:"PendingFees_statistics_balance__px4LZ"}}}]);
//# sourceMappingURL=69137.96f51bf2.chunk.js.map