"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4009],{12377:function(i,n,e){e.r(n),e.d(n,{default:function(){return O}});var a=e(72791),t="AdmisionAdmin_insChat__lOFwA",d="AdmisionAdmin_navbarr__JxsSe",s="AdmisionAdmin_admission_ins_container__MAcuH",o=e(54433),l=e(29439),r="Mainbody_institute_admission_body__HWANt",u="Mainbody_institute_ads_container__pGqua",c="Mainbody_institute_ads_container_other__kLAuL",v="Mainbody_institute_ads_container_border__4MsZ1",m=e(78687),_=e(35395),f=e(29017),p=e(69721),x=e(39230),h=e(85050),g=e(93738),b=e(21093),j=e(16871),y=e(80184),I=a.lazy((function(){return e.e(7107).then(e.bind(e,76035))})),S=function(i){i.username;var n,e,t,d,s,o,r,u,c,v,S,Z,A,N,D,T=i.admissionId,M=(0,x.$G)().t,C=(0,j.UO)(),F=(0,m.useSelector)((function(i){return i.admissionChange})),R=a.useState(!1),P=(0,l.Z)(R,2),U=P[0],k=P[1],E=(0,f.vV)({data:{aid:"".concat(null!==F&&void 0!==F&&F.aid?null===F||void 0===F?void 0:F.aid:T),sid:""},skip:null!==F&&void 0!==F&&F.aid?!(null!==F&&void 0!==F&&F.aid):!T}),L=E.getAdmissionDetail,H=E.getAdmissionDetailRefetch;(0,a.useEffect)((function(){(null!==F&&void 0!==F&&F.aid||T)&&H()}),[null===F||void 0===F?void 0:F.aid,T,H]);var w=function(){k((function(i){return!i}))};return(0,y.jsxs)("div",{style:{position:"sticky",top:"77px",height:"fit-content",width:"30%"},children:[(0,y.jsx)(b.Z,{whichType:"PREVIOUS_GO"}),(0,y.jsx)(h.Z,{dynamicImage:null!==L&&void 0!==L&&null!==(n=L.admission)&&void 0!==n&&n.cover?"".concat(p.yI,"/").concat(null===L||void 0===L||null===(e=L.admission)||void 0===e?void 0:e.cover):"/images/profileAndCover/admission-cover.svg",edit:!0,onEditAction:w,redirectUrl:"/q/".concat(C.username,"/admission?a=site"),isSiteInfo:"ADMISSION",carryParentState:{aid:null===L||void 0===L||null===(t=L.admission)||void 0===t?void 0:t._id}}),(0,y.jsx)(g.Z,{cardAsHead:!0,heading:" ".concat((null===L||void 0===L||null===(d=L.admission)||void 0===d||null===(s=d.admissionAdminHead)||void 0===s?void 0:s.staffFirstName)||""," ").concat(null!==L&&void 0!==L&&null!==(o=L.admission)&&void 0!==o&&null!==(r=o.admissionAdminHead)&&void 0!==r&&r.staffMiddleName?null===L||void 0===L||null===(u=L.admission)||void 0===u||null===(c=u.admissionAdminHead)||void 0===c?void 0:c.staffMiddleName:""," ").concat((null===L||void 0===L||null===(v=L.admission)||void 0===v||null===(S=v.admissionAdminHead)||void 0===S?void 0:S.staffLastName)||""),description:M("admission_admin"),customStyleCard:{borderRadius:"18px 18px 0px 0px",border:"none",marginTop:"-1.49vw"}}),(0,y.jsx)(g.Z,{cardAsHead:!1,heading:M("ongoing_add"),description:M("admissions"),count:(null===L||void 0===L||null===(Z=L.admission)||void 0===Z?void 0:Z.newAppCount)||0}),(0,y.jsx)(g.Z,{cardAsHead:!1,heading:M("application"),description:M("received_from_students"),count:(null===L||void 0===L||null===(A=L.admission)||void 0===A?void 0:A.newAppCount)+(null===L||void 0===L||null===(N=L.admission)||void 0===N?void 0:N.completedCount)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)"}}),(0,y.jsx)(_.Z,{children:(0,y.jsx)(I,{admissionModal:U,hideModal:w,edit:!0,admissionManagerName:null===L||void 0===L||null===(D=L.admission)||void 0===D?void 0:D.admissionAdminHead,onParentRefetch:H})})]})},Z=e(43504),A=e(39480),N=e(74737),D=e(55856),T={funds2:"Funds_funds2__4QC2s",fundscontent:"Funds_fundscontent__uE4Dh",sidebarbottomitem:"Funds_sidebarbottomitem__N9G-h",namee:"Funds_namee__udwpf",desig:"Funds_desig__id4Ah",balanceItem:"Funds_balanceItem__YpuFS",fundbtn:"Funds_fundbtn__DUCOL"};function M(i){var n=i.bal,e=i.value;return(0,y.jsxs)("div",{className:T.balanceItem,children:[(0,y.jsxs)("p",{children:[n,":"]}),(0,y.jsxs)("p",{children:["Rs. ",e]})]})}var C=function(i){var n,e,t,d,s,o,l,r,u,c,v=i.carryParentState,_=(0,x.$G)().t,p=(0,m.useSelector)((function(i){return i.admissionChange})),h=(0,m.useSelector)((function(i){return i.idChange.id})),g=(0,A.gq)({id:h,skip:!h}),b=g.oneInstituteDashboard,j=g.oneInstituteDashboardRefetch,I=(0,f.vV)({data:{aid:"".concat(null!==p&&void 0!==p&&p.aid?null===p||void 0===p?void 0:p.aid:null===b||void 0===b||null===(n=b.institute)||void 0===n?void 0:n.admissionDepart[0]),sid:""},skip:null!==p&&void 0!==p&&p.aid?!(null!==p&&void 0!==p&&p.aid):!(null!==b&&void 0!==b&&null!==(e=b.institute)&&void 0!==e&&e.admissionDepart[0])}),S=I.getAdmissionDetail,Z=I.getAdmissionDetailRefetch;return(0,a.useEffect)((function(){h&&j()}),[h,j]),(0,a.useEffect)((function(){var i;(null!==p&&void 0!==p&&p.aid||null!==b&&void 0!==b&&null!==(i=b.institute)&&void 0!==i&&i.admissionDepart[0])&&Z()}),[null===p||void 0===p?void 0:p.aid,null===b||void 0===b||null===(t=b.institute)||void 0===t?void 0:t.admissionDepart[0],Z]),(0,y.jsx)("div",{className:T.funds2,children:(0,y.jsxs)("div",{className:T.fundscontent,children:[(0,y.jsxs)("div",{className:T.sidebarbottomitem,children:[(0,y.jsx)("img",{alt:"not found",src:"/images/finance/doller-icon.svg"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:T.namee,children:["Rs."," ",((null===S||void 0===S||null===(d=S.admission)||void 0===d?void 0:d.onlineFee)+(null===S||void 0===S||null===(s=S.admission)||void 0===s?void 0:s.offlineFee)).toFixed(2)]}),(0,y.jsx)("p",{className:T.desig,children:_("total_admission_fees")})]})]}),(0,y.jsx)(M,{bal:_("online_fees"),value:null===S||void 0===S||null===(o=S.admission)||void 0===o||null===(l=o.onlineFee)||void 0===l?void 0:l.toFixed(2)}),(0,y.jsx)(M,{bal:_("offline_fees"),value:null===S||void 0===S||null===(r=S.admission)||void 0===r||null===(u=r.offlineFee)||void 0===u?void 0:u.toFixed(2)}),(0,y.jsx)(D.Z,{carryParentState:v,activeTab:"?a=pending",children:(0,y.jsxs)("div",{className:T.fundbtn,children:[_("remaining_fees")," : Rs."," ",null===S||void 0===S||null===(c=S.admission)||void 0===c?void 0:c.remainingFeeCount]})})]})})},F=e(64783),R=function(i){var n=i.carryParentState,e=(0,x.$G)().t,a=(0,Z.lr)(),t=(0,l.Z)(a,1)[0];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:N.Z.finance_tab_tabs,children:[(0,y.jsx)(F.Z,{tabLevel:e("menu"),customStyleContainer:{width:"50%",marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"menu",currentValue:null!==t&&void 0!==t&&t.get("a")?"other":"menu",carryParentState:n,activeUrl:"admission"}),(0,y.jsx)(F.Z,{tabLevel:e("fund"),customStyleContainer:{width:"50%",borderTopRightRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fund",currentValue:"fund"===(null===t||void 0===t?void 0:t.get("a"))?"fund":"other",carryParentState:n,activeUrl:"admission?a=fund"})]}),null!==t&&void 0!==t&&t.get("a")?"fund"===(null===t||void 0===t?void 0:t.get("a"))?(0,y.jsx)(C,{carryParentState:n}):null:(0,y.jsxs)("div",{className:N.Z.item,children:[(0,y.jsx)(D.Z,{carryParentState:n,activeTab:"?a=ongoing",children:(0,y.jsxs)("div",{className:N.Z.itemIcon,children:[(0,y.jsx)("img",{src:"/images/member_tab/admission/admission-ongoing-icon.svg",alt:"Class Catalog"}),(0,y.jsx)("p",{children:e("admission_ongoing")})]})}),(0,y.jsx)(D.Z,{carryParentState:n,activeTab:"?a=pending",children:(0,y.jsxs)("div",{className:N.Z.itemIcon,children:[(0,y.jsx)("img",{src:"/images/member_tab/finance/finance-pending-icon.svg",alt:"inquery"}),(0,y.jsx)("p",{children:e("pending_fees")})]})}),(0,y.jsx)(D.Z,{carryParentState:n,activeTab:"?a=completed",children:(0,y.jsxs)("div",{className:N.Z.itemIcon,children:[(0,y.jsx)("img",{src:"/images/member_tab/admission/admission-complete-icon.svg",alt:"completed"}),(0,y.jsx)("p",{children:e("admission_complete")})]})}),(0,y.jsx)(D.Z,{carryParentState:n,activeTab:"?a=export",children:(0,y.jsxs)("div",{className:N.Z.itemIcon,children:[(0,y.jsx)("img",{src:"/images/member_tab/finance/finance-export-icon.svg",alt:"refund"}),(0,y.jsx)("p",{children:e("data_exporting")})]})}),(0,y.jsx)(D.Z,{carryParentState:n,activeTab:"?a=moderator",children:(0,y.jsxs)("div",{className:N.Z.itemIcon,children:[(0,y.jsx)("img",{src:"/images/member_tab/admission/admission-moderator-icon.svg",alt:"moderator icon"}),(0,y.jsx)("p",{children:e("admission_moderators")})]})})]})]})},P=e(32256),U=e(60214),k=e(61046),E=e(99167),L=e(77308);var H=function(){var i,n,e,t,d,s,o,p,x,h,g,b,I,N,D,T,M=(0,j.UO)(),C=(0,Z.lr)(),F=(0,l.Z)(C,1)[0],H=(0,j.TH)(),w=(0,m.useSelector)((function(i){return i.idChange.id})),O=(0,A.gq)({id:w,skip:!w}),q=O.oneInstituteDashboard,V=O.oneInstituteDashboardRefetch,G=(0,f.vV)({data:{aid:null===q||void 0===q||null===(i=q.institute)||void 0===i?void 0:i.admissionDepart[0],mod_id:""},skip:!(null!==q&&void 0!==q&&null!==(n=q.institute)&&void 0!==n&&n.admissionDepart[0])}),$=G.getAdmissionDetail,J=G.getAdmissionDetailRefetch;return(0,a.useEffect)((function(){w&&V()}),[w,V]),(0,a.useEffect)((function(){var i;null!==q&&void 0!==q&&null!==(i=q.institute)&&void 0!==i&&i.admissionDepart[0]&&J()}),[null===q||void 0===q||null===(e=q.institute)||void 0===e?void 0:e.admissionDepart[0],J]),(0,y.jsxs)("div",{className:r,children:[(0,y.jsx)(S,{username:M.username,admissionId:null===q||void 0===q||null===(t=q.institute)||void 0===t?void 0:t.admissionDepart[0]}),(0,y.jsxs)("div",{className:null!==F&&void 0!==F&&F.get("a")&&"fund"!==(null===F||void 0===F?void 0:F.get("a"))&&"export"!==(null===F||void 0===F?void 0:F.get("a"))&&"moderator"!==(null===F||void 0===F?void 0:F.get("a"))?c:u,children:[(!(null!==F&&void 0!==F&&F.get("a"))||"fund"===(null===F||void 0===F?void 0:F.get("a")))&&(0,y.jsx)(R,{carryParentState:H.state}),(0,y.jsxs)(_.Z,{children:["pending"===(null===F||void 0===F?void 0:F.get("a"))&&(0,y.jsx)(L.Z,{carryParentState:H.state,admissionId:null===q||void 0===q||null===(d=q.institute)||void 0===d?void 0:d.admissionDepart[0],isEnable:"Enable"===(null===$||void 0===$||null===(s=$.admission)||void 0===s?void 0:s.alarm_enable_status),onRefetch:J,instituteId:null===$||void 0===$||null===(o=$.admission)||void 0===o||null===(p=o.institute)||void 0===p?void 0:p._id,pageOpenAs:"INSTITUTE"}),"ongoing"===(null===F||void 0===F?void 0:F.get("a"))&&(0,y.jsx)(k.Z,{admissionId:null===q||void 0===q||null===(x=q.institute)||void 0===x?void 0:x.admissionDepart[0],instituteId:null===q||void 0===q||null===(h=q.institute)||void 0===h?void 0:h._id,carryParentState:H.state,pageOpenAs:"INSTITUTE"}),"completed"===(null===F||void 0===F?void 0:F.get("a"))&&(0,y.jsx)(E.Z,{admissionId:null===q||void 0===q||null===(g=q.institute)||void 0===g?void 0:g.admissionDepart[0],instituteId:null===q||void 0===q||null===(b=q.institute)||void 0===b?void 0:b._id,carryParentState:H.state,pageOpenAs:"INSTITUTE"}),"export"===(null===F||void 0===F?void 0:F.get("a"))&&(0,y.jsx)("div",{className:v,children:(0,y.jsx)(U.Z,{admissionId:null===q||void 0===q||null===(I=q.institute)||void 0===I?void 0:I.admissionDepart[0],instituteId:null===q||void 0===q||null===(N=q.institute)||void 0===N?void 0:N._id,funds:q})}),"moderator"===(null===F||void 0===F?void 0:F.get("a"))&&(0,y.jsx)("div",{className:v,children:(0,y.jsx)(P.Z,{admissionId:null===q||void 0===q||null===(D=q.institute)||void 0===D?void 0:D.admissionDepart[0],instituteId:null===q||void 0===q||null===(T=q.institute)||void 0===T?void 0:T._id})})]})]})]})},w=e(2153);var O=function(){var i,n,e=(0,j.TH)();return(0,y.jsxs)("div",{className:t,children:[(0,y.jsx)("div",{className:d,children:(0,y.jsx)(o.default,{status:"home"})}),"site"===(null===(i=e.search)||void 0===i?void 0:i.substring(3))?(0,y.jsx)(w.Z,{aid:null===(n=e.state)||void 0===n?void 0:n.aid,viewAs:"INSTITUTE"}):(0,y.jsx)("div",{className:s,children:(0,y.jsx)(H,{})})]})}},64783:function(i,n,e){e(72791);var a=e(90788),t=e(16871),d=e(43504),s=e(80184);n.Z=function(i){var n=i.tabLevel,e=i.customStyleContainer,o=i.customStyleLevel,l=i.currentValue,r=i.tabValue,u=i.carryParentState,c=i.activeUrl,v=(0,t.UO)();return(0,s.jsx)(d.rU,{to:"/q/".concat(v.username,"/").concat(c),state:u,className:l===r?a.Z.common_tab_container_active:a.Z.common_tab_container,style:e,children:(0,s.jsx)("h6",{className:l===r?a.Z.common_tab_text_active:a.Z.common_tab_text,style:o,children:n})})}},74737:function(i,n){n.Z={main:"Main_main__4mpMH",stats:"Main_stats__05reL",stats1:"Main_stats1__WlbdF",finance_container:"Main_finance_container__2pMkG",finance_container_other:"Main_finance_container_other__+Fq3c",institute_finance_container_border:"Main_institute_finance_container_border__Jgqpr",finance_tab_tabs:"Main_finance_tab_tabs__ufRpi",item:"Main_item__RsX-U",itemIcon:"Main_itemIcon__MA5vy"}}}]);
//# sourceMappingURL=4009.149ca6f3.chunk.js.map