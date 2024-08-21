"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[44201],{90865:(e,a,_)=>{_.d(a,{Z:()=>t});_(72791);var l=_(89891),n=_(39320),i=_(80184);const o={inputProps:{"aria-label":"Switch demo"}},t=e=>{let{customContainer:a,customLabel:_,labelDescription:t,labelHeading:r,defaultLabel:c,checkedToggle:d,onToggleHandler:s,children:v}=e;return(0,i.jsxs)("div",{className:n.Z.form_toggle_container,style:{...a},children:[(0,i.jsxs)("div",{className:n.Z.form_toggle_label,children:[c?(0,i.jsx)(l.Z,{...o,defaultChecked:!0,disabled:!0}):(0,i.jsx)(l.Z,{...o,checked:d,onChange:s}),(0,i.jsx)("span",{style:{..._},children:r})]}),t&&(0,i.jsx)("div",{className:n.Z.form_toggle_description,children:t}),v]})}},44201:(e,a,_)=>{_.r(a),_.d(a,{default:()=>m});var l=_(72791),n=_(39230),i=_(63687),o=_(21348),t=_(90904),r=_(90865),c=_(56959),d=_(85794),s=_(36132),v=_(80184);const m=e=>{let{lmid:a}=e;const{t:_}=(0,n.$G)(),[m,f]=(0,l.useState)({bereavement_leave:!0,c_off_leave:!0,casual_leave:!0,child_adoption_leave:!0,commuted_leave:!0,half_pay_leave:!0,leave_taken:!0,lwp_leave:!0,maternity_leave:!0,medical_leave:!0,off_duty_leave:!0,paternity_leave:!0,quarantine_leave:!0,sabbatical_leave:!0,sick_leave:!0,special_disability_leave:!0,study_leave:!0,summer_vacation_leave:!0,winter_vacation_leave:!0}),[g,h]=(0,l.useState)({open:!1,msg:"",variant:"error"}),[u]=(0,s.D3)(),{lmsDashboardMaster:y}=(0,s.KX)({data:{lmid:a,mod_id:""},skip:!a});(0,l.useEffect)((()=>{var e,a,_,l,n,i,o,t,r,c,d,s,v,m,g,h,u,b,x;null!==y&&void 0!==y&&y.leave_manage&&f({bereavement_leave:null===y||void 0===y||null===(e=y.leave_manage)||void 0===e?void 0:e.bereavement_leave,c_off_leave:null===y||void 0===y||null===(a=y.leave_manage)||void 0===a?void 0:a.c_off_leave,casual_leave:null===y||void 0===y||null===(_=y.leave_manage)||void 0===_?void 0:_.casual_leave,child_adoption_leave:null===y||void 0===y||null===(l=y.leave_manage)||void 0===l?void 0:l.child_adoption_leave,commuted_leave:null===y||void 0===y||null===(n=y.leave_manage)||void 0===n?void 0:n.commuted_leave,half_pay_leave:null===y||void 0===y||null===(i=y.leave_manage)||void 0===i?void 0:i.half_pay_leave,leave_taken:null===y||void 0===y||null===(o=y.leave_manage)||void 0===o?void 0:o.leave_taken,lwp_leave:null===y||void 0===y||null===(t=y.leave_manage)||void 0===t?void 0:t.lwp_leave,maternity_leave:null===y||void 0===y||null===(r=y.leave_manage)||void 0===r?void 0:r.maternity_leave,medical_leave:null===y||void 0===y||null===(c=y.leave_manage)||void 0===c?void 0:c.medical_leave,off_duty_leave:null===y||void 0===y||null===(d=y.leave_manage)||void 0===d?void 0:d.off_duty_leave,paternity_leave:null===y||void 0===y||null===(s=y.leave_manage)||void 0===s?void 0:s.paternity_leave,quarantine_leave:null===y||void 0===y||null===(v=y.leave_manage)||void 0===v?void 0:v.quarantine_leave,sabbatical_leave:null===y||void 0===y||null===(m=y.leave_manage)||void 0===m?void 0:m.sabbatical_leave,sick_leave:null===y||void 0===y||null===(g=y.leave_manage)||void 0===g?void 0:g.sick_leave,special_disability_leave:null===y||void 0===y||null===(h=y.leave_manage)||void 0===h?void 0:h.special_disability_leave,study_leave:null===y||void 0===y||null===(u=y.leave_manage)||void 0===u?void 0:u.study_leave,summer_vacation_leave:null===y||void 0===y||null===(b=y.leave_manage)||void 0===b?void 0:b.summer_vacation_leave,winter_vacation_leave:null===y||void 0===y||null===(x=y.leave_manage)||void 0===x?void 0:x.winter_vacation_leave})}),[null===y||void 0===y?void 0:y.leave_manage]);const b=(e,_)=>{if(a){const l={...m};for(let a in l)a===e&&(l[a]=_);u({lmid:a,leaveManager:{leave_manage:l}}).then((()=>{h({msg:"Updated",open:!0,variant:"success"})})).catch({}),f((a=>({...a,[e]:_})))}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(i.default,{children:[(0,v.jsx)(o.default,{children:(0,v.jsx)("div",{className:c.Z.fm_header_container,children:(0,v.jsx)("h6",{children:_("leave_tab_controller")})})}),(0,v.jsx)(t.Z,{}),(0,v.jsxs)(o.default,{customStyle:{paddingTop:"0"},children:[(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("casual_leave"),checkedToggle:m.casual_leave,onToggleHandler:e=>b("casual_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("medical_leave"),checkedToggle:m.medical_leave,onToggleHandler:e=>b("medical_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("sick_leave"),checkedToggle:m.sick_leave,onToggleHandler:e=>b("sick_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsx)(t.Z,{}),(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("c_off_leave"),checkedToggle:m.c_off_leave,onToggleHandler:e=>b("c_off_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("on_duty_leave"),checkedToggle:m.off_duty_leave,onToggleHandler:e=>b("off_duty_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("leave_without_pay"),checkedToggle:m.lwp_leave,onToggleHandler:e=>b("lwp_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsx)(t.Z,{}),(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("commuted_leave"),checkedToggle:m.commuted_leave,onToggleHandler:e=>b("commuted_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("maternity_leave"),checkedToggle:m.maternity_leave,onToggleHandler:e=>b("maternity_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("paternity_leave"),checkedToggle:m.paternity_leave,onToggleHandler:e=>b("paternity_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsx)(t.Z,{}),(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("quarantine_leave"),checkedToggle:m.quarantine_leave,onToggleHandler:e=>b("quarantine_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("half_pay_leave"),checkedToggle:m.half_pay_leave,onToggleHandler:e=>b("half_pay_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("study_leave"),checkedToggle:m.study_leave,onToggleHandler:e=>b("study_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsx)(t.Z,{}),(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("sabbatical_leave"),checkedToggle:m.sabbatical_leave,onToggleHandler:e=>b("sabbatical_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("special_disability_leave"),checkedToggle:m.special_disability_leave,onToggleHandler:e=>b("special_disability_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("winter_vacation_leave"),checkedToggle:m.winter_vacation_leave,onToggleHandler:e=>b("winter_vacation_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsxs)("div",{className:c.Z.fm_search,children:[(0,v.jsx)(r.Z,{labelHeading:_("summer_vacation_leave"),checkedToggle:m.summer_vacation_leave,onToggleHandler:e=>b("summer_vacation_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("child_adoption_leave"),checkedToggle:m.child_adoption_leave,onToggleHandler:e=>b("child_adoption_leave",e.target.checked),customContainer:{flex:"1 1 33%"}}),(0,v.jsx)(r.Z,{labelHeading:_("bereavement_leave"),checkedToggle:m.bereavement_leave,onToggleHandler:e=>b("bereavement_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})]}),(0,v.jsx)("div",{className:c.Z.fm_search,children:(0,v.jsx)(r.Z,{labelHeading:_("earned_leave"),checkedToggle:m.earned_leave,onToggleHandler:e=>b("earned_leave",e.target.checked),customContainer:{flex:"1 1 33%"}})})]})]}),(0,v.jsx)(d.Z,{eventState:g,eventStateHandler:h})]})}},90904:(e,a,_)=>{_.d(a,{Z:()=>i});const l="BorderBottom_split_content__RVPoh";var n=_(80184);const i=e=>{let{customStyleBorder:a}=e;return(0,n.jsx)("hr",{className:l,style:a})}},63687:(e,a,_)=>{_.r(a),_.d(a,{default:()=>i});var l=_(59393),n=_(80184);const i=e=>{let{customStyle:a,children:_}=e;return(0,n.jsx)("div",{className:l.Z.user_member_container_wrapper,style:a,children:_})}},21348:(e,a,_)=>{_.r(a),_.d(a,{default:()=>i});var l=_(59393),n=_(80184);const i=e=>{let{customStyle:a,children:_}=e;return(0,n.jsx)("div",{className:l.Z.user_member_content_wrapper,style:a,children:_})}},85794:(e,a,_)=>{_.d(a,{Z:()=>d});var l=_(72791),n=_(54164),i=_(15783),o=_(98684),t=_(80184);const r=e=>{let{onClose:a,isVariant:_,isHide:l,children:r}=e;return n.createPortal((0,t.jsx)("div",{children:(0,t.jsx)("div",{className:l?i.Z.notify_hide_overlay:i.Z.notify_overlay,children:(0,t.jsxs)("div",{className:i.Z.notify_container,style:{"--notify-bg-color":_},children:[r,(0,t.jsx)("img",{src:"".concat(o.Fk,"/close-white.svg"),alt:"close icon",onClick:a,className:i.Z.notify_close})]})})}),document.getElementById("notify-alert"))},c={success:"green",error:"#ed4a4a",warning:"orange"},d=e=>{var a;let{eventState:_,eventStateHandler:n}=e;const[o,d]=(0,l.useState)(!1);return null!==_&&void 0!==_&&_.open?(0,t.jsx)(r,{onClose:()=>{d(!0);let e=setTimeout((()=>{n((e=>({...e,open:!1,msg:"",variant:"success"}))),d(!1)}),500);return()=>clearTimeout(e)},isVariant:c[null===_||void 0===_?void 0:_.variant],isHide:o,children:(0,t.jsx)("h6",{className:i.Z.notify_message,children:null!==(a=null===_||void 0===_?void 0:_.msg)&&void 0!==a?a:""})}):null}},39320:(e,a,_)=>{_.d(a,{Z:()=>l});const l={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}},56959:(e,a,_)=>{_.d(a,{Z:()=>l});const l={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},15783:(e,a,_)=>{_.d(a,{Z:()=>l});const l={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=44201.9d07b924.chunk.js.map