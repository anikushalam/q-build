"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[19623],{87156:(e,n,i)=>{i.r(n),i.d(n,{default:()=>u});var l=i(86500),c=i(1669),t=i(98684),a=i(90904),o=i(38857),d=i(21348),s=i(16925),_=i(39230),r=i(2651),m=i(9228),h=i(80184);const u=e=>{var n,i,u,v,y;let{onClose:f,ifid:x,sid:j,staff:p}=e;const{t:g}=(0,_.$G)(),{feedbackOneStaffAnalytic:k,feedbackOneStaffAnalyticLoading:I}=(0,l.yz)({data:{ifid:x,sid:j},skip:j?!x:!j});return(0,h.jsx)(o.Z,{onClose:f,children:(0,h.jsxs)("div",{className:s.Z.modal_container,style:{maxWidth:"60rem"},children:[(0,h.jsx)(d.Z,{children:(0,h.jsxs)("div",{className:s.Z.modal_container_outer_header,children:[(0,h.jsx)("div",{className:s.Z.modal_container_header,children:(0,h.jsxs)("h6",{children:[g("staff_analytic")," -"," ","".concat(null!==(n=null===p||void 0===p?void 0:p.staffFirstName)&&void 0!==n?n:""," ").concat(null!==(i=null===p||void 0===p?void 0:p.staffMiddleName)&&void 0!==i?i:""," ").concat(null!==(u=null===p||void 0===p?void 0:p.staffLastName)&&void 0!==u?u:"")," "]})}),(0,h.jsx)("img",{src:"".concat(t.J7,"/close.svg"),alt:"close icon",onClick:f})]})}),(0,h.jsx)(a.Z,{}),(0,h.jsxs)(d.Z,{customStyle:{paddingBottom:"2rem"},children:[(0,h.jsxs)("section",{className:m.Z.osa_card,style:{borderTop:"0.5px solid #cacaca"},children:[(0,h.jsx)("h6",{style:{"--sc-width":"4rem"},children:g("sr_no")}),(0,h.jsx)("h6",{style:{"--sc-width":"13rem"},children:g("subject_name")}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:g("excellent_in_pre")}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:g("good_in_pre")}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:g("satisfactory_in_pre")}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:g("average_in_pre")}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:g("poor_in_pre")}),(0,h.jsx)("h6",{style:{"--sc-width":"8rem"},children:g("average_feedback_in_pre")})]}),null===k||void 0===k||null===(v=k.analytic)||void 0===v?void 0:v.map(((e,n)=>{var i,l,c,t,a,o,d,s,_,r,u,v,y,f,x,j,p,g,k,I,w,b,Z,C,N;return(0,h.jsxs)("section",{className:m.Z.osa_card,children:[(0,h.jsx)("h6",{style:{"--sc-width":"4rem"},children:n>9?n+1:"0".concat(n+1)}),(0,h.jsx)("h6",{style:{"--sc-width":"13rem"},children:null!==(i=null===e||void 0===e||null===(l=e.subject_master)||void 0===l?void 0:l.subjectName)&&void 0!==i?i:""}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:null!==(c=null===e||void 0===e||null===(t=e.feedback_analytic)||void 0===t||null===(a=t[0])||void 0===a||null===(o=a.excellent)||void 0===o?void 0:o.percentage)&&void 0!==c?c:0}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:null!==(d=null===e||void 0===e||null===(s=e.feedback_analytic)||void 0===s||null===(_=s[0])||void 0===_||null===(r=_.good)||void 0===r?void 0:r.percentage)&&void 0!==d?d:0}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:null!==(u=null===e||void 0===e||null===(v=e.feedback_analytic)||void 0===v||null===(y=v[0])||void 0===y||null===(f=y.satisfaction)||void 0===f?void 0:f.percentage)&&void 0!==u?u:0}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:null!==(x=null===e||void 0===e||null===(j=e.feedback_analytic)||void 0===j||null===(p=j[0])||void 0===p||null===(g=p.average)||void 0===g?void 0:g.percentage)&&void 0!==x?x:0}),(0,h.jsx)("h6",{style:{"--sc-width":"6rem"},children:null!==(k=null===e||void 0===e||null===(I=e.feedback_analytic)||void 0===I||null===(w=I[0])||void 0===w||null===(b=w.poor)||void 0===b?void 0:b.percentage)&&void 0!==k?k:0}),(0,h.jsx)("h6",{style:{"--sc-width":"8rem"},children:null!==(Z=null===e||void 0===e||null===(C=e.feedback_analytic)||void 0===C||null===(N=C[0])||void 0===N?void 0:N.avg_percentage)&&void 0!==Z?Z:0})]},null===e||void 0===e?void 0:e._id)})),I?(0,h.jsx)(c.Z,{}):0===(null===k||void 0===k||null===(y=k.analytic)||void 0===y?void 0:y.length)&&(0,h.jsx)(r.Z,{title:"No staff analytic found."})]})]})})}},38857:(e,n,i)=>{i.d(n,{Z:()=>d});var l=i(79864),c=i(54164),t=i(15783),a=i(80184);const o=e=>{let{modalState:n,isHide:i,customOverlayStyle:l,children:o}=e;return c.createPortal((0,a.jsx)("div",{className:t.Z.modal_overlay,style:{...l},children:o}),document.getElementById("overlay"))},d=e=>{let{onClose:n,modalState:i,customBackdropStyle:c,customOverlayStyle:t,children:d}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{onBackdropClose:n,customBackdropStyle:c}),(0,a.jsx)(o,{customOverlayStyle:t,children:d})]})}},79864:(e,n,i)=>{i.d(n,{Z:()=>o});var l=i(72791),c=i(54164),t=i(15783),a=i(80184);const o=e=>{let{onBackdropClose:n,customBackdropStyle:i}=e;const o=(0,l.useCallback)((()=>{if(!n)return null;n()}),[n]);return c.createPortal((0,a.jsx)("div",{className:t.Z.modal_backdrop,onClick:o,style:i}),document.getElementById("backdrop"))}},16925:(e,n,i)=>{i.d(n,{Z:()=>l});const l={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}}}]);
//# sourceMappingURL=19623.88b24e2a.chunk.js.map