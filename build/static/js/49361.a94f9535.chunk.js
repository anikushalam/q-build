"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[49361],{90904:function(n,a,e){e.d(a,{Z:function(){return _}});var t="BorderBottom_split_content__RVPoh",i=e(80184),_=function(n){var a=n.customStyleBorder;return(0,i.jsx)("hr",{className:t,style:a})}},63162:function(n,a,e){var t=e(39230),i=e(51416),_=e(43504),l=e(72791),r=e(80184),s=function(n){var a=n.tab,e=n.isActive,l=n.isLink,s=n.parentState,o=n.onAction,c=n.url,f=(0,t.$G)().t;return l?(0,r.jsx)(_.rU,{className:e?i.Z.horizontal_tab_card_active:i.Z.horizontal_tab_card,to:c,state:s,children:(0,r.jsx)("h6",{children:f(null===a||void 0===a?void 0:a.label)})}):(0,r.jsx)("div",{className:e?i.Z.horizontal_tab_card_active:i.Z.horizontal_tab_card,onClick:function(){o(null===a||void 0===a?void 0:a.id)},children:(0,r.jsx)("h6",{children:f(null===a||void 0===a?void 0:a.label)})})};a.Z=(0,l.memo)(s)},98967:function(n,a,e){var t=e(51416),i=e(80184);a.Z=function(n){var a=n.children;return(0,i.jsx)("div",{className:t.Z.horizontal_tab_wrapper,children:a})}},63687:function(n,a,e){var t=e(59393),i=e(80184);a.Z=function(n){var a=n.customStyle,e=n.children;return(0,i.jsx)("div",{className:t.Z.user_member_container_wrapper,style:a,children:e})}},21348:function(n,a,e){var t=e(59393),i=e(80184);a.Z=function(n){var a=n.customStyle,e=n.children;return(0,i.jsx)("div",{className:t.Z.user_member_content_wrapper,style:a,children:e})}},49361:function(n,a,e){e.r(a),e.d(a,{default:function(){return L}});var t=e(29439),i=e(39230),_=e(43504),l=e(16871),r=e(21348),s=e(90904),o=e(98967),c=e(63162),f=e(63687),d=e(72791),m=e(56959),u=e(23441),h=e(91427),v=e(57588),g=e(55336),y=e(1669),x=e(2651),j=e(55050),p=e(98684),Z=e(1095),b=e(80184),M=function(n){var a,e,t,_,r=n.staff,s=n.staffAlias,o=(0,i.$G)().t,c=(0,l.UO)(),f=(0,l.s0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:j.Z.lms_staff_card,onClick:function(){f("/q/".concat(c.username,"/staff/profile"),{state:{sid:null===r||void 0===r?void 0:r._id,viewAs:"DEPARTMENT_HEAD"}})},title:"View Staff Profile",children:(0,b.jsxs)("div",{className:j.Z.lms_staff_card_contatiner,children:[(0,b.jsx)("img",{src:null!==r&&void 0!==r&&r.staffProfilePhoto?"".concat(Z.yI,"/").concat(null===r||void 0===r?void 0:r.staffProfilePhoto):"".concat(p.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,b.jsxs)("div",{className:j.Z.lms_staff_card_contatiner_inner,children:[(0,b.jsx)("h6",{children:"".concat(null!==(a=null===r||void 0===r?void 0:r.staffFirstName)&&void 0!==a?a:""," ").concat(null!==(e=null===r||void 0===r?void 0:r.staffMiddleName)&&void 0!==e?e:""," ").concat(null!==(t=null===r||void 0===r?void 0:r.staffLastName)&&void 0!==t?t:"")}),(0,b.jsxs)("p",{children:[s||o("index_number"),": ",null!==(_=null===r||void 0===r?void 0:r.staffROLLNO)&&void 0!==_?_:""]})]})]})})})},F=e(36132),N=function(n){var a,e,_,l=n.instituteId,r=n.staffAlias,s=(0,i.$G)().t,o=(0,d.useState)(""),c=(0,t.Z)(o,2),f=c[0],j=c[1],Z=(0,d.useState)(1),N=(0,t.Z)(Z,2),k=N[0],A=N[1],L=(0,d.useState)(!0),S=(0,t.Z)(L,2),U=S[0],I=S[1],B=(0,u.YD)({skip:f}),C=(0,t.Z)(B,2),w=C[0],P=C[1],q=(0,F.sX)({data:{id:l,page:k,limit:10,type:"Teaching Faculty",search:f},skip:!l}),K=q.lmsAllottmentStaffList,T=q.lmsAllottmentStaffListLoading;(0,d.useEffect)((function(){P&&U&&A((function(n){return n+1}))}),[P,U]),(0,d.useEffect)((function(){var n;if(null!==K&&void 0!==K&&null!==(n=K.list)&&void 0!==n&&n.length){var a,e=(0,h.f)(null===K||void 0===K||null===(a=K.list)||void 0===a?void 0:a.length);I((function(){return e}))}}),[null===K||void 0===K?void 0:K.list]);var Y=(0,d.useCallback)((0,v.J)((function(n){A((function(){return 1})),j(n)}),1500),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(p.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:s("search"),onChange:function(n){n.target.value?Y(n.target.value):(A((function(){return 1})),j(""))}})]})})}),null===K||void 0===K||null===(a=K.list)||void 0===a?void 0:a.map((function(n,a){var e;return(null===K||void 0===K||null===(e=K.list)||void 0===e?void 0:e.length)===a+1?(0,b.jsx)("div",{ref:w,children:(0,b.jsx)(M,{staff:n,staffAlias:r})},null===n||void 0===n?void 0:n._id):(0,b.jsx)(M,{staff:n,staffAlias:r},null===n||void 0===n?void 0:n._id)})),T?f?(0,b.jsx)(g.Z,{}):(0,b.jsx)(y.Z,{}):f?0===(null===K||void 0===K||null===(e=K.list)||void 0===e?void 0:e.length)&&(0,b.jsx)(x.Z,{title:"No teaching staff found related this search."}):0===(null===K||void 0===K||null===(_=K.list)||void 0===_?void 0:_.length)&&(0,b.jsx)(x.Z,{title:"No teaching staff."})]})},k=function(n){n.instituteId,n.staffAlias;var a=(0,i.$G)().t;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.Z,{children:(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(p.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:a("search"),onChange:function(n){}})]})})})})})},A=function(n){var a,e,_,l=n.instituteId,r=n.staffAlias,s=(0,i.$G)().t,o=(0,d.useState)(""),c=(0,t.Z)(o,2),f=c[0],j=c[1],Z=(0,d.useState)(1),N=(0,t.Z)(Z,2),k=N[0],A=N[1],L=(0,d.useState)(!0),S=(0,t.Z)(L,2),U=S[0],I=S[1],B=(0,u.YD)({skip:f}),C=(0,t.Z)(B,2),w=C[0],P=C[1],q=(0,F.sX)({data:{id:l,page:k,limit:10,type:"Non-Teaching Faculty",search:f},skip:!l}),K=q.lmsAllottmentStaffList,T=q.lmsAllottmentStaffListLoading;(0,d.useEffect)((function(){P&&U&&A((function(n){return n+1}))}),[P,U]),(0,d.useEffect)((function(){var n;if(null!==K&&void 0!==K&&null!==(n=K.list)&&void 0!==n&&n.length){var a,e=(0,h.f)(null===K||void 0===K||null===(a=K.list)||void 0===a?void 0:a.length);I((function(){return e}))}}),[null===K||void 0===K?void 0:K.list]);var Y=(0,d.useCallback)((0,v.J)((function(n){A((function(){return 1})),j(n)}),1500),[]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(p.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:s("search"),onChange:function(n){n.target.value?Y(n.target.value):(A((function(){return 1})),j(""))}})]})})}),null===K||void 0===K||null===(a=K.list)||void 0===a?void 0:a.map((function(n,a){var e;return(null===K||void 0===K||null===(e=K.list)||void 0===e?void 0:e.length)===a+1?(0,b.jsx)("div",{ref:w,children:(0,b.jsx)(M,{staff:n,staffAlias:r})},null===n||void 0===n?void 0:n._id):(0,b.jsx)(M,{staff:n,staffAlias:r},null===n||void 0===n?void 0:n._id)})),T?f?(0,b.jsx)(g.Z,{}):(0,b.jsx)(y.Z,{}):f?0===(null===K||void 0===K||null===(e=K.list)||void 0===e?void 0:e.length)&&(0,b.jsx)(x.Z,{title:"No non-teaching staff found related this search."}):0===(null===K||void 0===K||null===(_=K.list)||void 0===_?void 0:_.length)&&(0,b.jsx)(x.Z,{title:"No non-teaching staff."})]})})},L=function(n){var a=n.instituteId,e=n.staffAlias,u=(0,i.$G)().t,h=(0,_.lr)(),v=(0,t.Z)(h,1)[0],g=(0,l.TH)(),y=(0,l.UO)(),x=(0,l.s0)(),j=(0,d.useCallback)((function(){var n,a="Institute"===(null===(n=g.state)||void 0===n?void 0:n.urlOffSet)?"/q/".concat(y.username,"/institute/member/lms"):"/q/".concat(y.username,"/member/staff/lms");x(a,{state:g.state})}),[x,g.state,y.username]);return(0,b.jsxs)(f.Z,{children:[(0,b.jsx)(r.Z,{children:(0,b.jsx)("div",{className:m.Z.fm_header_container,children:(0,b.jsxs)("div",{className:m.Z.fm_header_start_container,children:[(0,b.jsx)("img",{alt:"search icon",src:"".concat(p.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:j}),(0,b.jsx)("h6",{children:u("leave_allottment")})]})})}),(0,b.jsx)(s.Z,{}),(0,b.jsx)(o.Z,{children:S.map((function(n){var a,e;return(0,b.jsx)(c.Z,{tab:n,isLink:!0,isActive:null===(a=n.groupIs)||void 0===a?void 0:a.includes(v.get("n")),parentState:g.state,url:"Institute"===(null===(e=g.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(y.username,"/institute/member/lms?type=allottment").concat(n.urlKey):"/q/".concat(y.username,"/member/staff/lms?type=allottment").concat(n.urlKey)},null===n||void 0===n?void 0:n.id)}))}),(0,b.jsx)(s.Z,{customStyleBorder:{marginBlock:"0"}}),(0,b.jsx)(r.Z,{children:v.get("n")?"nonteaching"===v.get("n")?(0,b.jsx)(A,{instituteId:a,staffAlias:e}):"other"===v.get("n")?(0,b.jsx)(k,{staffAlias:e,instituteId:a}):null:(0,b.jsx)(N,{instituteId:a,staffAlias:e})})]})},S=[{label:"combined_teaching",id:"combined_teaching",urlKey:"",groupIs:["",null]},{label:"non_teaching",id:"non_teaching",urlKey:"&n=nonteaching",groupIs:["nonteaching"]},{label:"other",id:"other",urlKey:"&n=other",groupIs:["other"]}]},2651:function(n,a,e){var t=e(15783),i=e(80184);a.Z=function(n){var a=n.title,e=n.subtitle,_=n.customStyleContainer,l=n.costomTextTitleStyle,r=n.costomTextSubtitleStyle;return(0,i.jsxs)("div",{className:t.Z.empty_container,style:_,children:[a&&(0,i.jsx)("h6",{style:l,children:a}),e&&(0,i.jsx)("p",{style:r,children:e})]})}},57588:function(n,a,e){e.d(a,{J:function(){return t}});var t=function(n,a){var e;return function(){var t=this,i=arguments;clearTimeout(e),e=setTimeout((function(){n.apply(t,i)}),a)}}},91427:function(n,a,e){e.d(a,{f:function(){return t}});var t=function(n){return n%10===0}},56959:function(n,a){a.Z={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942"}},55050:function(n,a){a.Z={lms_staff_card:"LmsManager_lms_staff_card__wXoPi",lms_staff_card_contatiner:"LmsManager_lms_staff_card_contatiner__Jph1Y",lms_staff_card_contatiner_inner:"LmsManager_lms_staff_card_contatiner_inner__CpoLe",lms_rule_container:"LmsManager_lms_rule_container__tjc6R",lmsr_card:"LmsManager_lmsr_card__bZPYq",lmsrc_card:"LmsManager_lmsrc_card__zLtbc",lmsrc_card_inner:"LmsManager_lmsrc_card_inner__nXlhc",lmsrci_text:"LmsManager_lmsrci_text__CRexL",lmsrc_date:"LmsManager_lmsrc_date__A0R-K",lmsrc_btn:"LmsManager_lmsrc_btn__RpZIN",lmsat_container:"LmsManager_lmsat_container__BBDa3",lmsstlc_card:"LmsManager_lmsstlc_card__PSq7-"}},15783:function(n,a){a.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=49361.a94f9535.chunk.js.map