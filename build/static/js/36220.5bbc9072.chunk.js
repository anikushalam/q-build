"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[36220,63687,21348,81221,58936,26215,30053],{90904:(e,a,n)=>{n.d(a,{Z:()=>r});const _="BorderBottom_split_content__RVPoh";var t=n(80184);const r=e=>{let{customStyleBorder:a}=e;return(0,t.jsx)("hr",{className:_,style:a})}},93638:(e,a,n)=>{n.d(a,{Z:()=>l});var _=n(39230),t=n(80476),r=n(80184);const l=e=>{let{label:a,count:n,onAction:l,customStyle:o,isTranslate:i}=e;const{t:s}=(0,_.$G)();return i?(0,r.jsxs)("div",{className:t.Z.create_btn_container,onClick:l,style:o,children:[n>0?(0,r.jsxs)("span",{children:[n," "]}):null,a]}):(0,r.jsxs)("div",{className:t.Z.create_btn_container,onClick:l,style:o,children:[n>0?(0,r.jsxs)("span",{children:[n," "]}):null,s(a)]})}},38857:(e,a,n)=>{n.d(a,{Z:()=>i});var _=n(79864),t=n(54164),r=n(15783),l=n(80184);const o=e=>{let{modalState:a,isHide:n,customOverlayStyle:_,children:o}=e;return t.createPortal((0,l.jsx)("div",{className:r.Z.modal_overlay,style:{..._},children:o}),document.getElementById("overlay"))},i=e=>{let{onClose:a,modalState:n,customBackdropStyle:t,customOverlayStyle:r,children:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.Z,{onBackdropClose:a,customBackdropStyle:t}),(0,l.jsx)(o,{customOverlayStyle:r,children:i})]})}},63687:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});var _=n(59393),t=n(80184);const r=e=>{let{customStyle:a,children:n}=e;return(0,t.jsx)("div",{className:_.Z.user_member_container_wrapper,style:a,children:n})}},21348:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});var _=n(59393),t=n(80184);const r=e=>{let{customStyle:a,children:n}=e;return(0,t.jsx)("div",{className:_.Z.user_member_content_wrapper,style:a,children:n})}},45445:(e,a,n)=>{n.d(a,{Z:()=>c});var _=n(39230),t=n(38857),r=n(21348),l=n(49806),o=n(98684),i=n(90904),s=n(80184);const c=e=>{let{onClose:a,allDate:n}=e;const{t:c}=(0,_.$G)();return(0,s.jsx)(t.Z,{onClose:a,children:(0,s.jsxs)("div",{className:l.Z.modal_container,children:[(0,s.jsx)(r.default,{children:(0,s.jsxs)("div",{className:l.Z.modal_container_outer_header,children:[(0,s.jsx)("div",{className:l.Z.modal_container_header,children:(0,s.jsx)("h6",{children:c("leave_dates")})}),(0,s.jsx)("img",{src:"".concat(o.J7,"/close.svg"),alt:"close icon",onClick:a})]})}),(0,s.jsx)(i.Z,{}),(0,s.jsx)(r.default,{customStyle:{paddingTop:"0.3rem"},children:(0,s.jsx)("div",{className:l.Z.assign_each_paragraph,children:n.map((e=>(0,s.jsxs)("p",{children:[m(e),", "]},e)))})})]})})},d=["January","February","March","April","May","June","July","August","September","October","November","December"],m=e=>{const a=e.split("/")[0],n=d[e.split("/")[1]-1],_=e.split("/")[2];return"".concat(a," ").concat(n," ").concat(_)}},7254:(e,a,n)=>{n.d(a,{Z:()=>h});var _=n(72791),t=n(55336),r=n(98684),l=n(97892),o=n.n(l),i=n(82824),s=n(1095),c=n(55050),d=n(93638),m=n(36132),f=n(39230),v=n(45445),u=n(80184);const h=e=>{var a,n,l,h,p,b,x,j,M,F,Z,w,N,S,k,U,P,Y,B,L,C,A,D,T,R,J,q,O;let{leave:W,onRefetch:I,modId:K,flow:G,whichAccess:H}=e;const{t:V}=(0,f.$G)(),[X]=(0,m.Sr)(),[E,Q]=(0,_.useState)(!1),[z,$]=(0,_.useState)(!1),ee=e=>{null!==W&&void 0!==W&&W._id&&G&&K&&(Q((e=>!e)),X({lid:null===W||void 0===W?void 0:W._id,requestLeave:{leave_from:G,staff_mod:K,status:e}}).then((()=>{I(),Q((e=>!e))})).catch({}))},ae=()=>{$((e=>!e))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c.Z.lmsr_card,children:[(0,u.jsxs)("div",{className:c.Z.lmsrc_card,children:[(0,u.jsxs)("div",{className:c.Z.lmsrc_card_inner,children:[(0,u.jsx)("img",{src:null!==W&&void 0!==W&&null!==(a=W.staff)&&void 0!==a&&a.staffProfilePhoto?"".concat(s.yI,"/").concat(null===W||void 0===W||null===(n=W.staff)||void 0===n?void 0:n.staffProfilePhoto):"".concat(r.p3,"/feed-user-avatar.svg"),alt:"staff icon"}),(0,u.jsxs)("div",{className:c.Z.lmsrci_text,children:[(0,u.jsx)("h6",{children:"".concat(null===W||void 0===W||null===(l=W.staff)||void 0===l?void 0:l.staffFirstName," ").concat(null!==W&&void 0!==W&&null!==(h=W.staff)&&void 0!==h&&h.staffMiddleName?null===W||void 0===W||null===(p=W.staff)||void 0===p?void 0:p.staffMiddleName:""," ").concat(null===W||void 0===W||null===(b=W.staff)||void 0===b?void 0:b.staffLastName)}),(0,u.jsxs)("p",{children:["Sactioning"===H?(0,u.jsxs)(u.Fragment,{children:[V("reviewed_on")," ",(0,i.J)(null===W||void 0===W||null===(x=W.review)||void 0===x?void 0:x.review_on,"LT"),","," ",o()(null===W||void 0===W||null===(j=W.review)||void 0===j?void 0:j.review_on).format("DD MMM YYYY")]}):"Reviewing"===H?(0,u.jsxs)(u.Fragment,{children:[V("recomend_on"),(0,i.J)(null===W||void 0===W||null===(M=W.recommend)||void 0===M?void 0:M.recommend_on,"LT"),","," ",o()(null===W||void 0===W||null===(F=W.recommend)||void 0===F?void 0:F.recommend_on).format("DD MMM YYYY")]}):(0,u.jsxs)(u.Fragment,{children:[V("raised_on"),(0,i.J)(null===W||void 0===W?void 0:W.createdAt,"LT"),", ",o()(null===W||void 0===W?void 0:W.createdAt).format("DD MMM YYYY"),", "]}),(0,u.jsx)("span",{className:c.Z.lmsrc_date,onClick:ae,children:V("for_dates")})]}),(0,u.jsx)("p",{children:"Sactioning"===H?(0,u.jsxs)(u.Fragment,{children:[V("reviewing_by"),"".concat(null!==(Z=null===W||void 0===W||null===(w=W.review)||void 0===w||null===(N=w.review_by)||void 0===N?void 0:N.staffFirstName)&&void 0!==Z?Z:""," ").concat(null!==(S=null===W||void 0===W||null===(k=W.review)||void 0===k||null===(U=k.review_by)||void 0===U?void 0:U.staffMiddleName)&&void 0!==S?S:""," ").concat(null!==(P=null===W||void 0===W||null===(Y=W.review)||void 0===Y||null===(B=Y.review_by)||void 0===B?void 0:B.staffLastName)&&void 0!==P?P:"")]}):"Reviewing"===H?(0,u.jsxs)(u.Fragment,{children:[V("recomending_by"),"".concat(null!==(L=null===W||void 0===W||null===(C=W.recommend)||void 0===C||null===(A=C.recommend_by)||void 0===A?void 0:A.staffFirstName)&&void 0!==L?L:""," ").concat(null!==(D=null===W||void 0===W||null===(T=W.recommend)||void 0===T||null===(R=T.recommend_by)||void 0===R?void 0:R.staffMiddleName)&&void 0!==D?D:""," ").concat(null!==(J=null===W||void 0===W||null===(q=W.recommend)||void 0===q||null===(O=q.recommend_by)||void 0===O?void 0:O.staffLastName)&&void 0!==J?J:"")]}):null})]})]}),(0,u.jsx)("div",{className:c.Z.lmsrc_btn,children:"Request"===(null===W||void 0===W?void 0:W.status)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{label:V("reject"),onAction:()=>ee("Rejected"),customStyle:y}),(0,u.jsx)(d.Z,{label:V("approve"),onAction:()=>ee("Accepted"),customStyle:g})]}):null})]}),(0,u.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,u.jsxs)("h6",{style:{fontWeight:"400"},children:[V("leave_type")," "," : ",null===W||void 0===W?void 0:W.leave_type]})}),(0,u.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,u.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[V("reason")," "," : ",null===W||void 0===W?void 0:W.reason]})}),(null===W||void 0===W?void 0:W.attach)&&(0,u.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,u.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[V("attachment")," "," : ",(0,u.jsx)("a",{href:"".concat(s.q2,"/").concat(null===W||void 0===W?void 0:W.attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,u.jsx)("span",{className:c.Z.lmsrc_date,children:V("view_attachment")})})]})})]}),z&&(0,u.jsx)(v.Z,{onClose:ae,allDate:null===W||void 0===W?void 0:W.date}),E&&(0,u.jsx)(t.default,{})]})},y={"--bg-button":"#e7e7e7","--color-button":"#6f727c","--color-white":"#ffffff",margin:"0",padding:"0.2rem 0.8rem"},g={margin:"0",padding:"0.2rem 0.8rem"}},2651:(e,a,n)=>{n.d(a,{Z:()=>r});var _=n(15783),t=n(80184);const r=e=>{let{title:a,subtitle:n,customStyleContainer:r,costomTextTitleStyle:l,costomTextSubtitleStyle:o}=e;return(0,t.jsxs)("div",{className:_.Z.empty_container,style:r,children:[a&&(0,t.jsx)("h6",{style:l,children:a}),n&&(0,t.jsx)("p",{style:o,children:n})]})}},57588:(e,a,n)=>{n.d(a,{J:()=>_});const _=(e,a)=>{let n;return function(){let _=this,t=arguments;clearTimeout(n),n=setTimeout((()=>{e.apply(_,t)}),a)}}},82824:(e,a,n)=>{n.d(a,{J:()=>o,Z:()=>i});var _=n(99893),t=n.n(_),r=n(97892),l=n.n(r);const o=(e,a)=>(l().extend(t()),l()(e).format(a)),i=(e,a,n)=>{var _;return l()()[e]("".concat(null===(_=l()(n))||void 0===_?void 0:_.format("YYYY-MM-DD")),a)}},91427:(e,a,n)=>{n.d(a,{f:()=>_});const _=e=>e%10===0},79864:(e,a,n)=>{n.d(a,{Z:()=>o});var _=n(72791),t=n(54164),r=n(15783),l=n(80184);const o=e=>{let{onBackdropClose:a,customBackdropStyle:n}=e;const o=(0,_.useCallback)((()=>{if(!a)return null;a()}),[a]);return t.createPortal((0,l.jsx)("div",{className:r.Z.modal_backdrop,onClick:o,style:n}),document.getElementById("backdrop"))}},80476:(e,a,n)=>{n.d(a,{Z:()=>_});const _={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},56959:(e,a,n)=>{n.d(a,{Z:()=>_});const _={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},55050:(e,a,n)=>{n.d(a,{Z:()=>_});const _={lms_staff_card:"LmsManager_lms_staff_card__wXoPi",lms_staff_card_contatiner:"LmsManager_lms_staff_card_contatiner__Jph1Y",lms_staff_card_contatiner_inner:"LmsManager_lms_staff_card_contatiner_inner__CpoLe",lms_rule_container:"LmsManager_lms_rule_container__tjc6R",lmsr_card:"LmsManager_lmsr_card__bZPYq",lmsrc_card:"LmsManager_lmsrc_card__zLtbc",lmsrc_card_inner:"LmsManager_lmsrc_card_inner__nXlhc",lmsrci_text:"LmsManager_lmsrci_text__CRexL",lmsrc_date:"LmsManager_lmsrc_date__A0R-K",lmsrc_btn:"LmsManager_lmsrc_btn__RpZIN",lmsat_container:"LmsManager_lmsat_container__BBDa3",lmsstlc_card:"LmsManager_lmsstlc_card__PSq7-"}},49806:(e,a,n)=>{n.d(a,{Z:()=>_});const _={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}},15783:(e,a,n)=>{n.d(a,{Z:()=>_});const _={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=36220.5bbc9072.chunk.js.map