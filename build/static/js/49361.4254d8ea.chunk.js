"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[49361],{90904:(a,e,t)=>{t.d(e,{Z:()=>_});const n="BorderBottom_split_content__RVPoh";var l=t(80184);const _=a=>{let{customStyleBorder:e}=a;return(0,l.jsx)("hr",{className:n,style:e})}},63162:(a,e,t)=>{t.d(e,{Z:()=>o});var n=t(39230),l=t(51416),_=t(43504),i=t(72791),s=t(80184);const r=a=>{let{tab:e,isActive:t,isLink:i,parentState:r,onAction:o,url:c,extraData:d,customStyle:m}=a;const{t:f}=(0,n.$G)();return i?(0,s.jsx)(_.rU,{className:t?l.Z.horizontal_tab_card_active:l.Z.horizontal_tab_card,to:c,state:r,style:m,children:(0,s.jsxs)("h6",{children:[f(null===e||void 0===e?void 0:e.label),(null===d||void 0===d?void 0:d.count)>=0?"(".concat(null===d||void 0===d?void 0:d.count,")"):""]})}):(0,s.jsx)("div",{className:t?l.Z.horizontal_tab_card_active:l.Z.horizontal_tab_card,onClick:()=>{o(null===e||void 0===e?void 0:e.id)},children:(0,s.jsx)("h6",{children:f(null===e||void 0===e?void 0:e.label)})})},o=(0,i.memo)(r)},98967:(a,e,t)=>{t.d(e,{Z:()=>_});var n=t(51416),l=t(80184);const _=a=>{let{customWrapperStyle:e,children:t}=a;return(0,l.jsx)("div",{className:n.Z.horizontal_tab_wrapper,style:e,children:t})}},63687:(a,e,t)=>{t.r(e),t.d(e,{default:()=>_});var n=t(59393),l=t(80184);const _=a=>{let{customStyle:e,children:t}=a;return(0,l.jsx)("div",{className:n.Z.user_member_container_wrapper,style:e,children:t})}},21348:(a,e,t)=>{t.d(e,{Z:()=>_});var n=t(59393),l=t(80184);const _=a=>{let{customStyle:e,children:t}=a;return(0,l.jsx)("div",{className:n.Z.user_member_content_wrapper,style:e,children:t})}},49361:(a,e,t)=>{t.r(e),t.d(e,{default:()=>A});var n=t(39230),l=t(43504),_=t(16871),i=t(21348),s=t(90904),r=t(98967),o=t(63162),c=t(63687),d=t(72791),m=t(56959),f=t(23441),u=t(91427),h=t(57588),v=t(55336),g=t(1669),y=t(2651),x=t(55050),j=t(98684),p=t(1095),b=t(80184);const Z=a=>{var e,t,l,i;let{staff:s,staffAlias:r}=a;const{t:o}=(0,n.$G)(),c=(0,_.UO)(),d=(0,_.s0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:x.Z.lms_staff_card,onClick:()=>{d("/q/".concat(c.username,"/staff/profile"),{state:{sid:null===s||void 0===s?void 0:s._id,viewAs:"DEPARTMENT_HEAD"}})},title:"View Staff Profile",children:(0,b.jsxs)("div",{className:x.Z.lms_staff_card_contatiner,children:[(0,b.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(p.yI,"/").concat(null===s||void 0===s?void 0:s.staffProfilePhoto):"".concat(j.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,b.jsxs)("div",{className:x.Z.lms_staff_card_contatiner_inner,children:[(0,b.jsx)("h6",{children:"".concat(null!==(e=null===s||void 0===s?void 0:s.staffFirstName)&&void 0!==e?e:""," ").concat(null!==(t=null===s||void 0===s?void 0:s.staffMiddleName)&&void 0!==t?t:""," ").concat(null!==(l=null===s||void 0===s?void 0:s.staffLastName)&&void 0!==l?l:"")}),(0,b.jsxs)("p",{children:[r||o("index_number"),": ",null!==(i=null===s||void 0===s?void 0:s.staffROLLNO)&&void 0!==i?i:""]})]})]})})})};var M=t(36132);const F=a=>{var e,t,l;let{instituteId:_,staffAlias:i}=a;const{t:s}=(0,n.$G)(),[r,o]=(0,d.useState)(""),[c,x]=(0,d.useState)(1),[p,F]=(0,d.useState)(!0),[N,k]=(0,f.YD)({skip:r}),{lmsAllottmentStaffList:A,lmsAllottmentStaffListLoading:S}=(0,M.sX)({data:{id:_,page:c,limit:10,type:"Teaching Faculty",search:r},skip:!_});(0,d.useEffect)((()=>{k&&p&&x((a=>a+1))}),[k,p]),(0,d.useEffect)((()=>{var a;if(null!==A&&void 0!==A&&null!==(a=A.list)&&void 0!==a&&a.length){var e;let a=(0,u.f)(null===A||void 0===A||null===(e=A.list)||void 0===e?void 0:e.length);F((()=>a))}}),[null===A||void 0===A?void 0:A.list]);const L=(0,d.useCallback)((0,h.J)((a=>{x((()=>1)),o(a)}),1500),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(j.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:s("search"),onChange:a=>{a.target.value?L(a.target.value):(x((()=>1)),o(""))}})]})})}),null===A||void 0===A||null===(e=A.list)||void 0===e?void 0:e.map(((a,e)=>{var t;return(null===A||void 0===A||null===(t=A.list)||void 0===t?void 0:t.length)===e+1?(0,b.jsx)("div",{ref:N,children:(0,b.jsx)(Z,{staff:a,staffAlias:i})},null===a||void 0===a?void 0:a._id):(0,b.jsx)(Z,{staff:a,staffAlias:i},null===a||void 0===a?void 0:a._id)})),S?r?(0,b.jsx)(v.Z,{}):(0,b.jsx)(g.Z,{}):r?0===(null===A||void 0===A||null===(t=A.list)||void 0===t?void 0:t.length)&&(0,b.jsx)(y.Z,{title:"No teaching staff found related this search."}):0===(null===A||void 0===A||null===(l=A.list)||void 0===l?void 0:l.length)&&(0,b.jsx)(y.Z,{title:"No teaching staff."})]})},N=a=>{let{instituteId:e,staffAlias:t}=a;const{t:l}=(0,n.$G)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(j.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:l("search"),onChange:a=>{}})]})})})})})},k=a=>{var e,t,l;let{instituteId:_,staffAlias:i}=a;const{t:s}=(0,n.$G)(),[r,o]=(0,d.useState)(""),[c,x]=(0,d.useState)(1),[p,F]=(0,d.useState)(!0),[N,k]=(0,f.YD)({skip:r}),{lmsAllottmentStaffList:A,lmsAllottmentStaffListLoading:S}=(0,M.sX)({data:{id:_,page:c,limit:10,type:"Non-Teaching Faculty",search:r},skip:!_});(0,d.useEffect)((()=>{k&&p&&x((a=>a+1))}),[k,p]),(0,d.useEffect)((()=>{var a;if(null!==A&&void 0!==A&&null!==(a=A.list)&&void 0!==a&&a.length){var e;let a=(0,u.f)(null===A||void 0===A||null===(e=A.list)||void 0===e?void 0:e.length);F((()=>a))}}),[null===A||void 0===A?void 0:A.list]);const L=(0,d.useCallback)((0,h.J)((a=>{x((()=>1)),o(a)}),1500),[]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,b.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,b.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,b.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(j.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:s("search"),onChange:a=>{a.target.value?L(a.target.value):(x((()=>1)),o(""))}})]})})}),null===A||void 0===A||null===(e=A.list)||void 0===e?void 0:e.map(((a,e)=>{var t;return(null===A||void 0===A||null===(t=A.list)||void 0===t?void 0:t.length)===e+1?(0,b.jsx)("div",{ref:N,children:(0,b.jsx)(Z,{staff:a,staffAlias:i})},null===a||void 0===a?void 0:a._id):(0,b.jsx)(Z,{staff:a,staffAlias:i},null===a||void 0===a?void 0:a._id)})),S?r?(0,b.jsx)(v.Z,{}):(0,b.jsx)(g.Z,{}):r?0===(null===A||void 0===A||null===(t=A.list)||void 0===t?void 0:t.length)&&(0,b.jsx)(y.Z,{title:"No non-teaching staff found related this search."}):0===(null===A||void 0===A||null===(l=A.list)||void 0===l?void 0:l.length)&&(0,b.jsx)(y.Z,{title:"No non-teaching staff."})]})})},A=a=>{let{instituteId:e,staffAlias:t}=a;const{t:f}=(0,n.$G)(),[u]=(0,l.lr)(),h=(0,_.TH)(),v=(0,_.UO)(),g=(0,_.s0)(),y=(0,d.useCallback)((()=>{var a;let e="Institute"===(null===(a=h.state)||void 0===a?void 0:a.urlOffSet)?"/q/".concat(v.username,"/institute/member/lms"):"/q/".concat(v.username,"/member/staff/lms");g(e,{state:h.state})}),[g,h.state,v.username]);return(0,b.jsxs)(c.default,{children:[(0,b.jsx)(i.Z,{children:(0,b.jsx)("div",{className:m.Z.fm_header_container,children:(0,b.jsxs)("div",{className:m.Z.fm_header_start_container,children:[(0,b.jsx)("img",{alt:"search icon",src:"".concat(j.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:y}),(0,b.jsx)("h6",{children:f("leave_allottment")})]})})}),(0,b.jsx)(s.Z,{}),(0,b.jsx)(r.Z,{children:S.map((a=>{var e,t;return(0,b.jsx)(o.Z,{tab:a,isLink:!0,isActive:null===(e=a.groupIs)||void 0===e?void 0:e.includes(u.get("n")),parentState:h.state,url:"Institute"===(null===(t=h.state)||void 0===t?void 0:t.urlOffSet)?"/q/".concat(v.username,"/institute/member/lms?type=allottment").concat(a.urlKey):"/q/".concat(v.username,"/member/staff/lms?type=allottment").concat(a.urlKey)},null===a||void 0===a?void 0:a.id)}))}),(0,b.jsx)(s.Z,{customStyleBorder:{marginBlock:"0"}}),(0,b.jsx)(i.Z,{children:u.get("n")?"nonteaching"===u.get("n")?(0,b.jsx)(k,{instituteId:e,staffAlias:t}):"other"===u.get("n")?(0,b.jsx)(N,{staffAlias:t,instituteId:e}):null:(0,b.jsx)(F,{instituteId:e,staffAlias:t})})]})},S=[{label:"combined_teaching",id:"combined_teaching",urlKey:"",groupIs:["",null]},{label:"non_teaching",id:"non_teaching",urlKey:"&n=nonteaching",groupIs:["nonteaching"]},{label:"other",id:"other",urlKey:"&n=other",groupIs:["other"]}]},2651:(a,e,t)=>{t.d(e,{Z:()=>_});var n=t(15783),l=t(80184);const _=a=>{let{title:e,subtitle:t,customStyleContainer:_,costomTextTitleStyle:i,costomTextSubtitleStyle:s}=a;return(0,l.jsxs)("div",{className:n.Z.empty_container,style:_,children:[e&&(0,l.jsx)("h6",{style:i,children:e}),t&&(0,l.jsx)("p",{style:s,children:t})]})}},57588:(a,e,t)=>{t.d(e,{J:()=>n});const n=(a,e)=>{let t;return function(){let n=this,l=arguments;clearTimeout(t),t=setTimeout((()=>{a.apply(n,l)}),e)}}},91427:(a,e,t)=>{t.d(e,{f:()=>n});const n=a=>a%10===0},56959:(a,e,t)=>{t.d(e,{Z:()=>n});const n={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},55050:(a,e,t)=>{t.d(e,{Z:()=>n});const n={lms_staff_card:"LmsManager_lms_staff_card__wXoPi",lms_staff_card_contatiner:"LmsManager_lms_staff_card_contatiner__Jph1Y",lms_staff_card_contatiner_inner:"LmsManager_lms_staff_card_contatiner_inner__CpoLe",lms_rule_container:"LmsManager_lms_rule_container__tjc6R",lmsr_card:"LmsManager_lmsr_card__bZPYq",lmsrc_card:"LmsManager_lmsrc_card__zLtbc",lmsrc_card_inner:"LmsManager_lmsrc_card_inner__nXlhc",lmsrci_text:"LmsManager_lmsrci_text__CRexL",lmsrc_date:"LmsManager_lmsrc_date__A0R-K",lmsrc_btn:"LmsManager_lmsrc_btn__RpZIN",lmsat_container:"LmsManager_lmsat_container__BBDa3",lmsstlc_card:"LmsManager_lmsstlc_card__PSq7-"}},15783:(a,e,t)=>{t.d(e,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=49361.4254d8ea.chunk.js.map