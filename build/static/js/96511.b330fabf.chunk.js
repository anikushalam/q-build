"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[96511],{56705:(e,a,_)=>{_.d(a,{Z:()=>r});_(72791);const n="SelectSiteDepartment_select_department_card_container__EKdVX",t="SelectSiteDepartment_select_department_card_image__1Dz7B",i="SelectSiteDepartment_select_department_card_name__O1xkr";var o=_(16871),l=_(43504),d=_(80184);const r=e=>{let{depart:a,isExcel:_}=e;const r=(0,o.UO)();return(0,d.jsx)(d.Fragment,{children:_?(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:t}),(0,d.jsx)("h6",{className:i,children:(null===a||void 0===a?void 0:a.dName)||"Mechanical Engineering"})]}):(0,d.jsx)(l.rU,{to:"/q/".concat(r.username,"/viewdept?a=site"),state:{did:null===a||void 0===a?void 0:a._id},children:(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("img",{src:"/images/profileAndCover/department-profile-img.svg",alt:"department avatar",className:t}),(0,d.jsx)("h6",{className:i,children:(null===a||void 0===a?void 0:a.dName)||"Mechanical Engineering"})]})})})}},96511:(e,a,_)=>{_.r(a),_.d(a,{default:()=>g});var n=_(39230),t=_(1669),i=_(55336),o=_(98684),l=_(90904),d=_(21348),r=_(95048),c=_(72791),s=_(33992),m=_(86500),v=_(16925),y=_(1095),u=_(38857),h=_(56705),p=_(80184);const g=e=>{var a,_,g;let{onClose:f,ifid:x}=e;const{t:j}=(0,n.$G)(),k=(0,r.v9)((e=>e.idChange.id)),[I,U]=(0,c.useState)(!0),[b,S]=(0,c.useState)(!1),{allDepartment:C,allDepartmentRefetch:Z}=(0,s.SM)({data:{id:k,which_type:"Normal"},skip:!k}),[N]=(0,m.qm)();(0,c.useEffect)((()=>{var e;null!==C&&void 0!==C&&null!==(e=C.institute)&&void 0!==e&&e.depart&&U(!1)}),[null===C||void 0===C||null===(a=C.institute)||void 0===a?void 0:a.depart]),(0,c.useEffect)((()=>{k&&(U(!0),Z())}),[k,Z]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(u.Z,{onClose:f,children:(0,p.jsxs)("div",{className:v.Z.modal_container,children:[(0,p.jsx)(d.default,{children:(0,p.jsxs)("div",{className:v.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:v.Z.modal_container_header,children:(0,p.jsx)("h6",{children:j("select_department")})}),(0,p.jsx)("img",{src:"".concat(o.J7,"/close.svg"),alt:"close icon",onClick:f})]})}),(0,p.jsx)(l.Z,{}),(0,p.jsxs)(d.default,{customStyle:{paddingTop:"0"},children:[null===C||void 0===C||null===(_=C.institute)||void 0===_||null===(g=_.depart)||void 0===g?void 0:g.map((e=>(0,p.jsx)("div",{style:{width:"100%"},onClick:()=>{var a;(a=null===e||void 0===e?void 0:e._id)&&x&&(S((e=>!e)),N({did:a,ifid:x}).then((e=>{var a;if(null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.excel_key){var _;S((e=>!e));const a=window.open("".concat(y.q2,"/").concat(null===e||void 0===e||null===(_=e.data)||void 0===_?void 0:_.excel_key),"_blank","noopener,noreferrer");a&&(a.opener=null),f()}else S((e=>!e))})).catch({}))},children:(0,p.jsx)(h.Z,{depart:e,isExcel:!0},e._id)}))),I&&(0,p.jsx)(t.Z,{})]}),b&&(0,p.jsx)(i.default,{})]})})})}},1669:(e,a,_)=>{_.d(a,{Z:()=>o});var n=_(98684),t=_(63244),i=_(80184);const o=e=>{let{isGrey:a}=e;return(0,i.jsx)("div",{className:t.Z.q_loading,children:(0,i.jsx)("img",{src:"".concat(n.Uw,a?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},38857:(e,a,_)=>{_.d(a,{Z:()=>d});var n=_(79864),t=_(54164),i=_(15783),o=_(80184);const l=e=>{let{modalState:a,isHide:_,customOverlayStyle:n,children:l}=e;return t.createPortal((0,o.jsx)("div",{className:i.Z.modal_overlay,style:{...n},children:l}),document.getElementById("overlay"))},d=e=>{let{onClose:a,modalState:_,customBackdropStyle:t,customOverlayStyle:i,children:d}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{onBackdropClose:a,customBackdropStyle:t}),(0,o.jsx)(l,{customOverlayStyle:i,children:d})]})}},79864:(e,a,_)=>{_.d(a,{Z:()=>l});var n=_(72791),t=_(54164),i=_(15783),o=_(80184);const l=e=>{let{onBackdropClose:a,customBackdropStyle:_}=e;const l=(0,n.useCallback)((()=>{if(!a)return null;a()}),[a]);return t.createPortal((0,o.jsx)("div",{className:i.Z.modal_backdrop,onClick:l,style:_}),document.getElementById("backdrop"))}},16925:(e,a,_)=>{_.d(a,{Z:()=>n});const n={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ",spsc_student:"Income_spsc_student__2-qo4",pdf_modal_container:"Income_pdf_modal_container__6511u"}},15783:(e,a,_)=>{_.d(a,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=96511.b330fabf.chunk.js.map