"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[98409],{38668:function(e,a,l){l.d(a,{O_:function(){return _},Uo:function(){return n},bA:function(){return i}});var n=[{key:"Yes",name:"yes"},{key:"No",name:"no"}],_=[{key:!0,name:"yes"},{key:!1,name:"no"}],i=[{name:"all",key:"All Leave",isAvaiable:!0},{name:"casual_leave",key:"Casual Leave",isAvaiable:!0,count:0,isActive:"casual_leave"},{name:"medical_leave",key:"Medical Leave",isAvaiable:!0,count:0,isActive:"medical_leave"},{name:"sick_leave",key:"Sick Leave",isAvaiable:!0,count:0,isActive:"sick_leave"},{name:"compensation_off_leave",key:"Compensation Off Leave",isAvaiable:!0,count:0,isActive:"c_off_leave"},{name:"on_duty_leave",key:"On Duty Leave",isAvaiable:!0,count:0,isActive:"off_duty_leave"},{name:"leave_without_pay",key:"Leave Without Pay",isAvaiable:!0,count:0,isActive:"lwp_leave"},{name:"commuted_leave",key:"Commuted Leave",isAvaiable:!0,count:0,isActive:"commuted_leave"},{name:"maternity_leave",key:"Maternity Leave",isAvaiable:!0,count:0,isActive:"maternity_leave"},{name:"paternity_leave",key:"Paternity Leave",isAvaiable:!0,count:0,isActive:"paternity_leave"},{name:"quarantine_leave",key:"Quarantine Leave",isAvaiable:!0,count:0,isActive:"quarantine_leave"},{name:"half_pay_leave",key:"Half Pay Leave",isAvaiable:!0,count:0,isActive:"half_pay_leave"},{name:"study_leave",key:"Study Leave",isAvaiable:!0,count:0,isActive:"study_leave"},{name:"sabbatical_leave",key:"Sabbatical Leave",isAvaiable:!0,count:0,isActive:"sabbatical_leave"},{name:"special_disability_leave",key:"Special Disability Leave",isAvaiable:!0,count:0,isActive:"special_disability_leave"},{name:"winter_vacation_leave",key:"Winter Vacation Leave",isAvaiable:!0,count:0,isActive:"winter_vacation_leave"},{name:"summer_vacation_leave",key:"Summer Vacation Leave",isAvaiable:!0,count:0,isActive:"summer_vacation_leave"},{name:"child_adoption_leave",key:"Child Adoption Leave",isAvaiable:!0,count:0,isActive:"child_adoption_leave"},{name:"bereavement_leave",key:"Bereavement Leave",isAvaiable:!0,count:0,isActive:"bereavement_leave"}]},61055:function(e,a,l){var n=l(39230),_=l(52245),i=l(80184),t=["tel","number"];a.Z=function(e){var a=e.label,l=e.name,r=e.msg,o=e.type,c=e.value,v=e.onChange,d=e.placeholder,s=e.maxLength,m=e.customFormInputContainer,u=e.customFormInputLabel,p=e.customFormInput,h=e.errorShow,f=e.disabled,b=e.children,y=(0,n.$G)().t;return(0,i.jsxs)("div",{className:_.Z.form_input_container,style:m,children:[a&&(0,i.jsxs)("label",{className:_.Z.form_input_label,style:u,htmlFor:l,children:[a,r?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:_.Z.form_input_label_error,children:[" "," "," ",r]})}):h?(0,i.jsxs)("span",{className:_.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,b]}),t.includes(o)?(0,i.jsx)("input",{className:_.Z.form_input,type:o,value:c,onChange:v,name:l,placeholder:d,maxLength:null!==s&&void 0!==s?s:100,disabled:f,style:p}):(0,i.jsx)("input",{className:_.Z.form_input,type:o,value:c,onChange:v,name:l,placeholder:d,disabled:f,style:p})]})}},26071:function(e,a,l){var n=l(51416),_=l(39230),i=l(80184);a.Z=function(e){var a=e.tile,l=e.onTile,t=e.activeTile,r=e.customTileChild,o=(0,_.$G)().t;return(0,i.jsx)("div",{className:(null===a||void 0===a?void 0:a.key)===t?n.Z.tile_tile_active:n.Z.tile_tile,onClick:function(){return l(null===a||void 0===a?void 0:a.key)},style:r,children:o(null===a||void 0===a?void 0:a.name)})}},20659:function(e,a,l){var n=l(51416),_=l(39230),i=l(80184);a.Z=function(e){var a=e.label,l=e.customTileLabel,t=e.customTileContainer,r=e.customTileStyle,o=e.children,c=(0,_.$G)().t;return(0,i.jsxs)("div",{className:n.Z.tile_container,style:r,children:[a&&(0,i.jsx)("h6",{className:n.Z.tile_label,style:l,children:c(a)}),(0,i.jsx)("section",{className:n.Z.tile_tile_container,style:t,children:o})]})}},98409:function(e,a,l){l.r(a);var n=l(4942),_=l(1413),i=l(29439),t=l(56959),r=l(93638),o=l(61055),c=l(39230),v=l(55336),d=l(72791),s=l(36132),m=(l(38668),l(20659),l(26071),l(21348)),u=l(90904),p=l(48293),h=l(98684),f=l(23449),b=l(80184);a.default=function(e){var a=e.leaveTypeToggle,l=e.sid,y=e.onClose,g=e.onRefetch,w=e.leaveConfig,F=(0,c.$G)().t,x=(0,d.useState)({casual:{leave:0,approval:!1,forward:!1},medical:{leave:0,approval:!1,forward:!1},sick:{leave:0,approval:!1,forward:!1},commuted:{leave:0,approval:!1,forward:!1},maternity:{leave:0,approval:!1,forward:!1},paternity:{leave:0,approval:!1,forward:!1},quarantine:{leave:0,approval:!1,forward:!1},half:{leave:0,approval:!1,forward:!1},study:{leave:0,approval:!1,forward:!1},sabbatical:{leave:0,approval:!1,forward:!1},special:{leave:0,approval:!1,forward:!1},winter:{leave:0,approval:!1,forward:!1},summer:{leave:0,approval:!1,forward:!1},child:{leave:0,approval:!1,forward:!1},bereavement:{leave:0,approval:!1,forward:!1},earned:{leave:0,approval:!1,forward:!1}}),j=(0,i.Z)(x,2),Z=j[0],k=j[1],C=(0,d.useState)(!1),M=(0,i.Z)(C,2),A=M[0],T=M[1],L=(0,s.s$)(),I=(0,i.Z)(L,1)[0];(0,d.useEffect)((function(){w&&k({casual:{leave:null===w||void 0===w?void 0:w.casual_leave,approval:null===w||void 0===w?void 0:w.casual_leave_approval,forward:null===w||void 0===w?void 0:w.casual_leave_forward},medical:{leave:null===w||void 0===w?void 0:w.medical_leave,approval:null===w||void 0===w?void 0:w.medical_leave_approval,forward:null===w||void 0===w?void 0:w.medical_leave_forward},sick:{leave:null===w||void 0===w?void 0:w.sick_leave,approval:null===w||void 0===w?void 0:w.sick_leave_approval,forward:null===w||void 0===w?void 0:w.sick_leave_forward},commuted:{leave:null===w||void 0===w?void 0:w.commuted_leave,approval:null===w||void 0===w?void 0:w.commuted_leave_approval,forward:null===w||void 0===w?void 0:w.commuted_leave_forward},maternity:{leave:null===w||void 0===w?void 0:w.maternity_leave,approval:null===w||void 0===w?void 0:w.maternity_leave_approval,forward:null===w||void 0===w?void 0:w.maternity_leave_forward},paternity:{leave:null===w||void 0===w?void 0:w.paternity_leave,approval:null===w||void 0===w?void 0:w.paternity_leave_approval,forward:null===w||void 0===w?void 0:w.paternity_leave_forward},quarantine:{leave:null===w||void 0===w?void 0:w.quarantine_leave,approval:null===w||void 0===w?void 0:w.quarantine_leave_approval,forward:null===w||void 0===w?void 0:w.quarantine_leave_forward},half:{leave:null===w||void 0===w?void 0:w.half_pay_leave,approval:null===w||void 0===w?void 0:w.half_pay_leave_approval,forward:null===w||void 0===w?void 0:w.half_pay_leave_forward},study:{leave:null===w||void 0===w?void 0:w.study_leave,approval:null===w||void 0===w?void 0:w.study_leave_approval,forward:null===w||void 0===w?void 0:w.study_leave_forward},sabbatical:{leave:null===w||void 0===w?void 0:w.sabbatical_leave,approval:null===w||void 0===w?void 0:w.sabbatical_leave_approval,forward:null===w||void 0===w?void 0:w.sabbatical_leave_forward},special:{leave:null===w||void 0===w?void 0:w.special_disability_leave,approval:null===w||void 0===w?void 0:w.special_disability_leave_approval,forward:null===w||void 0===w?void 0:w.special_disability_leave_forward},winter:{leave:null===w||void 0===w?void 0:w.winter_vacation_leave,approval:null===w||void 0===w?void 0:w.winter_vacation_leave_approval,forward:null===w||void 0===w?void 0:w.winter_vacation_leave_forward},summer:{leave:null===w||void 0===w?void 0:w.summer_vacation_leave,approval:null===w||void 0===w?void 0:w.summer_vacation_leave_approval,forward:null===w||void 0===w?void 0:w.summer_vacation_leave_forward},child:{leave:null===w||void 0===w?void 0:w.child_adoption_leave,approval:null===w||void 0===w?void 0:w.child_adoption_leave_approval,forward:null===w||void 0===w?void 0:w.child_adoption_leave_forward},bereavement:{leave:null===w||void 0===w?void 0:w.bereavement_leave,approval:null===w||void 0===w?void 0:w.bereavement_leave_approval,forward:null===w||void 0===w?void 0:w.bereavement_leave_forward},earned:{leave:null===w||void 0===w?void 0:w.earned_leave,approval:null===w||void 0===w?void 0:w.earned_leave_approval,forward:null===w||void 0===w?void 0:w.earned_leave_forward}})}),[w]);var U=function(e){+e.target.value&&k((function(a){return(0,_.Z)((0,_.Z)({},a),{},(0,n.Z)({},e.target.name,(0,_.Z)((0,_.Z)({},a[e.target.name]),{},{leave:+e.target.value})))}))};return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p.Z,{onClose:y,children:(0,b.jsxs)("div",{className:f.Z.modal_container,children:[(0,b.jsx)(m.Z,{children:(0,b.jsxs)("div",{className:f.Z.modal_container_outer_header,children:[(0,b.jsx)("div",{className:f.Z.modal_container_header,children:(0,b.jsx)("h6",{children:F("leave_configuration")})}),(0,b.jsx)("img",{src:"".concat(h.J7,"/close.svg"),alt:"close icon",onClick:y})]})}),(0,b.jsx)(u.Z,{}),(0,b.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,b.jsx)("div",{className:t.Z.lms_rule_container,children:a?(0,b.jsxs)(b.Fragment,{children:[a.casual_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("casual_leave"),placeholder:F("casual_leave_placeholder"),name:"casual",value:Z.casual.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.medical_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("medical_leave"),placeholder:F("medical_leave_placeholder"),name:"medical",value:Z.medical.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.sick_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("sick_leave"),placeholder:F("sick_leave_placeholder"),name:"sick",value:Z.sick.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.commuted_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("commuted_leave"),placeholder:F("commuted_leave_placeholder"),name:"commuted",value:Z.commuted.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.maternity_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("maternity_leave"),placeholder:F("maternity_leave_placeholder"),name:"maternity",value:Z.maternity.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.paternity_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("paternity_leave"),placeholder:F("paternity_leave_placeholder"),name:"paternity",value:Z.paternity.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.quarantine_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("quarantine_leave"),placeholder:F("quarantine_leave_placeholder"),name:"quarantine",value:Z.quarantine.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.half_pay_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("half_pay_leave"),placeholder:F("half_pay_leave_placeholder"),name:"half",value:Z.half.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.study_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("study_leave"),placeholder:F("study_leave_placeholder"),name:"study",value:Z.study.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.sabbatical_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("sabbatical_leave"),placeholder:F("sabbatical_leave_placeholder"),name:"sabbatical",value:Z.sabbatical.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.special_disability_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("special_disability_leave"),placeholder:F("special_disability_leave_placeholder"),name:"special",value:Z.special.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.winter_vacation_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("winter_vacation_leave"),placeholder:F("winter_vacation_leave_placeholder"),name:"winter",value:Z.winter.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.summer_vacation_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("summer_vacation_leave"),placeholder:F("summer_vacation_leave_placeholder"),name:"summer",value:Z.summer.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.child_adoption_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("child_adoption_leave"),placeholder:F("child_adoption_leave_placeholder"),name:"child",value:Z.child.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.bereavement_leave&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("bereavement_leave"),placeholder:F("bereavement_leave_placeholder"),name:"bereavement",value:Z.bereavement.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})}),a.leave_taken&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.Z,{label:F("earned_leave"),placeholder:F("earned_leave_placeholder"),name:"earned",value:Z.earned.leave,type:"tel",onChange:U,customFormInputContainer:{width:"49%"}})})]}):null}),(0,b.jsx)(r.Z,{label:F("update"),onAction:function(){l&&(T((function(e){return!e})),I({sid:l,leaveCount:Z}).then((function(){g(),T((function(e){return!e})),y()})).catch({}))}})]}),A&&(0,b.jsx)(v.Z,{})]})})})}},51416:function(e,a){a.Z={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},56959:function(e,a){a.Z={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942"}},23449:function(e,a){a.Z={moderator_card:"FinanceModerator_moderator_card__T--+-",moderator_card_text_container:"FinanceModerator_moderator_card_text_container__6jmpJ",menu_icon:"FinanceModerator_menu_icon__QsTsH",selected_staff_container:"FinanceModerator_selected_staff_container__xtfxL",selected_staff_text:"FinanceModerator_selected_staff_text__8sr0m",application_card:"FinanceModerator_application_card__05c8b",application_card_active:"FinanceModerator_application_card_active__yPVys",application_card_text:"FinanceModerator_application_card_text__wx+1V",application_card_text_bottom:"FinanceModerator_application_card_text_bottom__eLmpt",modal_container:"FinanceModerator_modal_container__P1hQi",modal_container_outer_header:"FinanceModerator_modal_container_outer_header__F746g",modal_container_header:"FinanceModerator_modal_container_header__FPMSZ"}}}]);
//# sourceMappingURL=98409.bcec950f.chunk.js.map