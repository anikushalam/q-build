"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[23929],{90904:function(e,a,_){_.d(a,{Z:function(){return t}});var n="BorderBottom_split_content__RVPoh",l=_(80184),t=function(e){var a=e.customStyleBorder;return(0,l.jsx)("hr",{className:n,style:a})}},93638:function(e,a,_){var n=_(39230),l=_(80476),t=_(80184);a.Z=function(e){var a=e.label,_=e.count,i=e.onAction,o=e.customStyle,r=e.isTranslate,c=(0,n.$G)().t;return r?(0,t.jsxs)("div",{className:l.Z.create_btn_container,onClick:i,style:o,children:[_>0?(0,t.jsxs)("span",{children:[_," "]}):null,a]}):(0,t.jsxs)("div",{className:l.Z.create_btn_container,onClick:i,style:o,children:[_>0?(0,t.jsxs)("span",{children:[_," "]}):null,c(a)]})}},61055:function(e,a,_){var n=_(39230),l=_(52245),t=_(80184),i=["tel","number"];a.Z=function(e){var a=e.label,_=e.name,o=e.msg,r=e.type,c=e.value,u=e.onChange,s=e.placeholder,v=e.maxLength,d=e.customFormInputContainer,m=e.customFormInputLabel,f=e.customFormInput,p=e.errorShow,h=e.disabled,b=e.children,y=(0,n.$G)().t;return(0,t.jsxs)("div",{className:l.Z.form_input_container,style:d,children:[a&&(0,t.jsxs)("label",{className:l.Z.form_input_label,style:m,htmlFor:_,children:[a,o?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("span",{className:l.Z.form_input_label_error,children:[" "," "," ",o]})}):p?(0,t.jsxs)("span",{className:l.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,b]}),i.includes(r)?(0,t.jsx)("input",{className:l.Z.form_input,type:r,value:c,onChange:u,name:_,placeholder:s,maxLength:null!==v&&void 0!==v?v:100,disabled:h,style:f}):(0,t.jsx)("input",{className:l.Z.form_input,type:r,value:c,onChange:u,name:_,placeholder:s,disabled:h,style:f})]})}},63687:function(e,a,_){var n=_(59393),l=_(80184);a.Z=function(e){var a=e.customStyle,_=e.children;return(0,l.jsx)("div",{className:n.Z.user_member_container_wrapper,style:a,children:_})}},21348:function(e,a,_){var n=_(59393),l=_(80184);a.Z=function(e){var a=e.customStyle,_=e.children;return(0,l.jsx)("div",{className:n.Z.user_member_content_wrapper,style:a,children:_})}},23929:function(e,a,_){_.r(a);var n=_(4942),l=_(1413),t=_(29439),i=_(72791),o=_(36132),r=_(63687),c=_(21348),u=_(56959),s=_(93638),v=_(61055),d=_(90904),m=_(39230),f=_(55336),p=_(80184);a.default=function(e){var a=e.lcid,_=e.instituteId,h=e.leaveTypeToggle,b=(0,m.$G)().t,y=(0,i.useState)({casual_leave:"",medical_leave:"",sick_leave:"",commuted_leave:"",maternity_leave:"",paternity_leave:"",quarantine_leave:"",half_pay_leave:"",study_leave:"",sabbatical_leave:"",special_disability_leave:"",winter_vacation_leave:"",summer_vacation_leave:"",child_adoption_leave:"",bereavement_leave:"",earned_leave:""}),g=(0,t.Z)(y,2),j=g[0],x=g[1],Z=(0,i.useState)(!1),F=(0,t.Z)(Z,2),I=F[0],C=F[1],M=(0,o.nl)(),w=(0,t.Z)(M,1)[0],U=(0,o.P0)({data:{id:_},skip:!_}),k=U.lmsConfigMaster,N=U.lmsConfigMasterRefetch;(0,i.useEffect)((function(){var e,a,_,n,l,t,i,o,r,c,u,s,v,d,m,f,p,h,b,y,g,j,Z,F,I,C,M,w,U,N,B,S;null!==k&&void 0!==k&&k.set_off_rules&&x({casual_leave:null!==(e=null===k||void 0===k||null===(a=k.set_off_rules)||void 0===a?void 0:a.casual_leave)&&void 0!==e?e:"",medical_leave:null!==(_=null===k||void 0===k||null===(n=k.set_off_rules)||void 0===n?void 0:n.medical_leave)&&void 0!==_?_:"",sick_leave:null!==(l=null===k||void 0===k||null===(t=k.set_off_rules)||void 0===t?void 0:t.sick_leave)&&void 0!==l?l:"",commuted_leave:null!==(i=null===k||void 0===k||null===(o=k.set_off_rules)||void 0===o?void 0:o.commuted_leave)&&void 0!==i?i:"",maternity_leave:null!==(r=null===k||void 0===k||null===(c=k.set_off_rules)||void 0===c?void 0:c.maternity_leave)&&void 0!==r?r:"",paternity_leave:null!==(u=null===k||void 0===k||null===(s=k.set_off_rules)||void 0===s?void 0:s.paternity_leave)&&void 0!==u?u:"",quarantine_leave:null!==(v=null===k||void 0===k||null===(d=k.set_off_rules)||void 0===d?void 0:d.quarantine_leave)&&void 0!==v?v:"",half_pay_leave:null!==(m=null===k||void 0===k||null===(f=k.set_off_rules)||void 0===f?void 0:f.half_pay_leave)&&void 0!==m?m:"",study_leave:null!==(p=null===k||void 0===k||null===(h=k.set_off_rules)||void 0===h?void 0:h.study_leave)&&void 0!==p?p:"",sabbatical_leave:null!==(b=null===k||void 0===k||null===(y=k.set_off_rules)||void 0===y?void 0:y.sabbatical_leave)&&void 0!==b?b:"",special_disability_leave:null!==(g=null===k||void 0===k||null===(j=k.set_off_rules)||void 0===j?void 0:j.special_disability_leave)&&void 0!==g?g:"",winter_vacation_leave:null!==(Z=null===k||void 0===k||null===(F=k.set_off_rules)||void 0===F?void 0:F.winter_vacation_leave)&&void 0!==Z?Z:"",summer_vacation_leave:null!==(I=null===k||void 0===k||null===(C=k.set_off_rules)||void 0===C?void 0:C.summer_vacation_leave)&&void 0!==I?I:"",child_adoption_leave:null!==(M=null===k||void 0===k||null===(w=k.set_off_rules)||void 0===w?void 0:w.child_adoption_leave)&&void 0!==M?M:"",bereavement_leave:null!==(U=null===k||void 0===k||null===(N=k.set_off_rules)||void 0===N?void 0:N.bereavement_leave)&&void 0!==U?U:"",earned_leave:null!==(B=null===k||void 0===k||null===(S=k.set_off_rules)||void 0===S?void 0:S.earned_leave)&&void 0!==B?B:""})}),[null===k||void 0===k?void 0:k.set_off_rules]);var B=function(e){+e.target.value&&x((function(a){return(0,l.Z)((0,l.Z)({},a),{},(0,n.Z)({},e.target.name,+e.target.value))}))};return(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(c.Z,{children:(0,p.jsx)("div",{className:u.Z.fm_header_container,children:(0,p.jsx)("h6",{children:b("leave_setoff_rule")})})}),(0,p.jsx)(d.Z,{}),(0,p.jsxs)(c.Z,{children:[(0,p.jsxs)("div",{className:u.Z.lms_rule_container,children:[h.casual_leave&&(0,p.jsx)(v.Z,{label:b("casual_leave"),placeholder:b("casual_leave_placeholder"),name:"casual_leave",value:null===j||void 0===j?void 0:j.casual_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.medical_leave&&(0,p.jsx)(v.Z,{label:b("medical_leave"),placeholder:b("medical_leave_placeholder"),name:"medical_leave",value:null===j||void 0===j?void 0:j.medical_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.sick_leave&&(0,p.jsx)(v.Z,{label:b("sick_leave"),placeholder:b("sick_leave_placeholder"),name:"sick_leave",value:null===j||void 0===j?void 0:j.sick_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.commuted_leave&&(0,p.jsx)(v.Z,{label:b("commuted_leave"),placeholder:b("commuted_leave_placeholder"),name:"commuted_leave",value:null===j||void 0===j?void 0:j.commuted_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.maternity_leave&&(0,p.jsx)(v.Z,{label:b("maternity_leave"),placeholder:b("maternity_leave_placeholder"),name:"maternity_leave",value:null===j||void 0===j?void 0:j.maternity_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.paternity_leave&&(0,p.jsx)(v.Z,{label:b("paternity_leave"),placeholder:b("paternity_leave_placeholder"),name:"paternity_leave",value:null===j||void 0===j?void 0:j.paternity_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.quarantine_leave&&(0,p.jsx)(v.Z,{label:b("quarantine_leave"),placeholder:b("quarantine_leave_placeholder"),name:"quarantine_leave",value:null===j||void 0===j?void 0:j.quarantine_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.half_pay_leave&&(0,p.jsx)(v.Z,{label:b("half_pay_leave"),placeholder:b("half_pay_leave_placeholder"),name:"half_pay_leave",value:null===j||void 0===j?void 0:j.half_pay_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.study_leave&&(0,p.jsx)(v.Z,{label:b("study_leave"),placeholder:b("study_leave_placeholder"),name:"study_leave",value:null===j||void 0===j?void 0:j.study_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.sabbatical_leave&&(0,p.jsx)(v.Z,{label:b("sabbatical_leave"),placeholder:b("sabbatical_leave_placeholder"),name:"sabbatical_leave",value:null===j||void 0===j?void 0:j.sabbatical_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.special_disability_leave&&(0,p.jsx)(v.Z,{label:b("special_disability_leave"),placeholder:b("special_disability_leave_placeholder"),name:"special_disability_leave",value:null===j||void 0===j?void 0:j.special_disability_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.winter_vacation_leave&&(0,p.jsx)(v.Z,{label:b("winter_vacation_leave"),placeholder:b("winter_vacation_leave_placeholder"),name:"winter_vacation_leave",value:null===j||void 0===j?void 0:j.winter_vacation_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.summer_vacation_leave&&(0,p.jsx)(v.Z,{label:b("summer_vacation_leave"),placeholder:b("summer_vacation_leave_placeholder"),name:"summer_vacation_leave",value:null===j||void 0===j?void 0:j.summer_vacation_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.child_adoption_leave&&(0,p.jsx)(v.Z,{label:b("child_adoption_leave"),placeholder:b("child_adoption_leave_placeholder"),name:"child_adoption_leave",value:null===j||void 0===j?void 0:j.child_adoption_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.bereavement_leave&&(0,p.jsx)(v.Z,{label:b("bereavement_leave"),placeholder:b("bereavement_leave_placeholder"),name:"bereavement_leave",value:null===j||void 0===j?void 0:j.bereavement_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}}),h.leave_taken&&(0,p.jsx)(v.Z,{label:b("earned_leave"),placeholder:b("earned_leave_placeholder"),name:"earned_leave",value:null===j||void 0===j?void 0:j.earned_leave,type:"tel",onChange:B,customFormInputContainer:{width:"32%"}})]}),(0,p.jsx)(s.Z,{label:b("update"),onAction:function(){a&&(C((function(e){return!e})),w({lcid:a,setOffRule:{set_off_rules:j}}).then((function(){N(),C((function(e){return!e}))})).catch({}))}}),I&&(0,p.jsx)(f.Z,{})]})]})}},80476:function(e,a){a.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:function(e,a){a.Z={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},56959:function(e,a){a.Z={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942"}}}]);
//# sourceMappingURL=23929.baa64549.chunk.js.map