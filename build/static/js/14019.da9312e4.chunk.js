"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[14019],{8148:(e,n,_)=>{_.d(n,{Z:()=>o});_(72791);var t=_(16871),i=_(43504),a=_(80184);const o=e=>{let{carryParentState:n,activeTab:_,children:o}=e;const s=(0,t.UO)();return(0,a.jsx)(i.rU,{to:"/q/".concat(s.username,"/member/department/").concat(s.deptname,"?a=").concat(_),state:{...n},children:o})}},36665:(e,n,_)=>{_.d(n,{Z:()=>o});_(72791);var t=_(12072),i=_(1874),a=_(80184);const o=e=>{let{onClose:n,children:_}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{onClose:n}),(0,a.jsx)(t.Z,{children:_})]})}},20859:(e,n,_)=>{_.d(n,{Z:()=>s});_(72791);var t=_(15961),i=_(39230),a=_(69721),o=_(80184);const s=e=>{var n;let{mentee:_,viewAs:s,onPresent:r,onAbsent:c,isVisible:l,absent:d,present:m,isPresent:p,setOpenMenteeMenu:f,isAccess:u}=e;const{t:g}=(0,i.$G)();return(0,o.jsxs)("div",{className:t.Z.applicant_card_container,children:[(0,o.jsxs)("div",{className:t.Z.applicant_card_inner,style:{width:"90%"},children:[(0,o.jsx)("img",{alt:"Student Request Avatar",src:null!==_&&void 0!==_&&_.studentProfilePhoto?"".concat(a.yI,"/").concat(null===_||void 0===_?void 0:_.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",loading:"lazy"}),(0,o.jsxs)("div",{className:t.Z.applicant_card_inner_info,children:[(0,o.jsx)("h6",{children:"".concat(null===_||void 0===_?void 0:_.studentFirstName," ").concat(null!==_&&void 0!==_&&_.studentMiddleName?null===_||void 0===_?void 0:_.studentMiddleName:""," ").concat(null===_||void 0===_?void 0:_.studentLastName)}),"ATTENDANCE"===s||"MEETING_DETAIL"===s?null:(0,o.jsxs)("p",{children:["".concat(null!==(n=null===_||void 0===_?void 0:_.total_query)&&void 0!==n?n:0," ")," ",g("pending")]})]})]}),"ATTENDANCE"===s?"PRESENT"===l?null!==m&&void 0!==m&&m.includes(null===_||void 0===_?void 0:_._id)?(0,o.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio",onClick:()=>r(null===_||void 0===_?void 0:_._id)}):(0,o.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:()=>r(null===_||void 0===_?void 0:_._id)}):null!==d&&void 0!==d&&d.includes(null===_||void 0===_?void 0:_._id)?(0,o.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio",onClick:()=>c(null===_||void 0===_?void 0:_._id)}):(0,o.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:()=>c(null===_||void 0===_?void 0:_._id)}):"MEETING_DETAIL"===s?p?(0,o.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio"}):(0,o.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio"}):null,u&&(0,o.jsx)("button",{className:t.Z.remove_btn,onClick:()=>f(_),children:g("remove")})]})}},93405:(e,n,_)=>{_.r(n),_.d(n,{default:()=>u});var t=_(72791),i=_(23441),a=_(74289),o=_(72295),s=_(20859),r=_(11105),c=_(23984),l=_(93638),d=_(39230),m=_(88409),p=_(80962),f=_(80184);const u=e=>{let{mid:n,departmentId:_}=e;const{t:u}=(0,d.$G)(),[g,A]=(0,i.YD)(),[h,v]=(0,t.useState)(1),[b,S]=(0,t.useState)(!0),[x,q]=(0,t.useState)(!0),[R,j]=(0,t.useState)([]),[P,k]=(0,t.useState)(!1),[C,Z]=(0,t.useState)(""),{getOneMentorDetail:y,getOneMentorDetailRefetch:E}=(0,a.$f)({mid:n,skip:!n});(0,t.useEffect)((()=>{n&&E()}),[n,E]);const{getOneMentorMenteeList:N,getOneMentorMenteeListRefetch:w}=(0,a.Gu)({data:{mid:n,page:h,limit:10},skip:!n});(0,t.useEffect)((()=>{n&&(q(!0),w())}),[n,h,w]),(0,t.useEffect)((()=>{A&&b&&v((e=>e+1))}),[A,b]),(0,t.useEffect)((()=>{var e,n;null!==N&&void 0!==N&&N.all_mentees?(j(1===h?null===N||void 0===N?void 0:N.all_mentees:e=>{var n,_;return null===(n=[...new Set(null===(_=[...e,...null===N||void 0===N?void 0:N.all_mentees])||void 0===_?void 0:_.map(JSON.stringify))])||void 0===n?void 0:n.map(JSON.parse)}),q(!1)):0===(null===N||void 0===N||null===(e=N.all_mentees)||void 0===e?void 0:e.length)&&q(!1),10===(null===N||void 0===N||null===(n=N.all_mentees)||void 0===n?void 0:n.length)?S(!0):S(!1)}),[null===N||void 0===N?void 0:N.all_mentees]);const M=()=>{k((e=>!e))},B=()=>{v(1),q(!0),w()};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{children:(0,f.jsx)(l.Z,{label:u("add_new_mentee"),customStyle:{margin:"0",marginBottom:"0.5rem"},onAction:M})}),(0,f.jsx)(o.Z,{viewAs:"MENTOR_DETAIL",mentor:null===y||void 0===y?void 0:y.mentor}),null===R||void 0===R?void 0:R.map(((e,n)=>(null===R||void 0===R?void 0:R.length)===n+1?(0,f.jsx)("div",{ref:g,children:(0,f.jsx)(s.Z,{mentee:e,setOpenMenteeMenu:Z,isAccess:!0})},null===e||void 0===e?void 0:e._id):(0,f.jsx)(s.Z,{mentee:e,setOpenMenteeMenu:Z,isAccess:!0},null===e||void 0===e?void 0:e._id))),x&&(0,f.jsx)(r.Z,{}),P&&(0,f.jsx)(p.Z,{onClose:M,did:_,mid:n,onRefetch:B}),C&&(0,f.jsx)(m.Z,{onClose:()=>Z(""),did:_,mid:n,onRefetch:B,openMenteeMenu:C})]})}},12072:(e,n,_)=>{_.d(n,{Z:()=>o});_(72791);var t=_(54164);const i="Overlay_overlay_card__PAr1h";var a=_(80184);const o=e=>{let{children:n,customStyle:_}=e;return(0,a.jsx)(a.Fragment,{children:t.createPortal((0,a.jsx)("div",{className:i,style:{..._},children:n}),document.getElementById("overlay"))})}},84489:(e,n,_)=>{_.d(n,{Z:()=>a});_(72791);var t=_(51857),i=_(80184);const a=e=>{let{onClose:n,customStyleBackdrop:_}=e;return(0,i.jsx)("div",{className:t.Z.search_backdrop,style:{..._},onClick:n})}},1874:(e,n,_)=>{_.d(n,{Z:()=>o});_(72791);var t=_(54164),i=_(84489),a=_(80184);const o=e=>{let{onClose:n,customStyleBackdrop:_}=e;return(0,a.jsx)(a.Fragment,{children:t.createPortal((0,a.jsx)(i.Z,{onClose:n,customStyleBackdrop:_}),document.getElementById("backdrop"))})}},98094:(e,n,_)=>{_.d(n,{Z:()=>a});_(72791);var t=_(55136),i=_(80184);const a=e=>{let{customStyle:n}=e;return(0,i.jsx)("hr",{className:t.Z.universal_hr,style:{...n}})}},23984:(e,n,_)=>{_.d(n,{Z:()=>a});var t=_(80476),i=_(80184);const a=e=>{let{customStyle:n,children:_}=e;return(0,i.jsx)("div",{className:t.Z.btn_wrapper,style:n,children:_})}},93638:(e,n,_)=>{_.d(n,{Z:()=>o});var t=_(39230),i=_(80476),a=_(80184);const o=e=>{let{label:n,count:_,onAction:o,customStyle:s,isTranslate:r}=e;const{t:c}=(0,t.$G)();return r?(0,a.jsxs)("div",{className:i.Z.create_btn_container,onClick:o,style:s,children:[_>0?(0,a.jsxs)("span",{children:[_," "]}):null,n]}):(0,a.jsxs)("div",{className:i.Z.create_btn_container,onClick:o,style:s,children:[_>0?(0,a.jsxs)("span",{children:[_," "]}):null,c(n)]})}},87049:(e,n,_)=>{_.d(n,{Z:()=>t});const t={edit_modal_container:"EditConfirm_edit_modal_container__WfbTq",modal_header:"EditConfirm_modal_header__4sq5J",edit:"EditConfirm_edit__ziVGP",remove:"EditConfirm_remove__PCXLs",xlsx_update_btn:"EditConfirm_xlsx_update_btn__H3yM8",save_stop_btn:"EditConfirm_save_stop_btn__9NiZ5",update_to_btn:"EditConfirm_update_to_btn__ExCJv"}},60163:(e,n,_)=>{_.d(n,{Z:()=>t});const t={view_container:"SeatingArrangement_view_container__bUmfL",exam_info_container:"SeatingArrangement_exam_info_container__RjYB+",subject_container:"SeatingArrangement_subject_container__EBIQV",class_container:"SeatingArrangement_class_container__J6L8g",subject_container_active:"SeatingArrangement_subject_container_active__fUoy9",class_container_active:"SeatingArrangement_class_container_active__hbhBl",exam_detail_h6:"SeatingArrangement_exam_detail_h6__SQnZ6",subject_other:"SeatingArrangement_subject_other__dpqAI",subject_standard:"SeatingArrangement_subject_standard__FK2GD",schedule_subject_container:"SeatingArrangement_schedule_subject_container__RCY4e",exam_schedule:"SeatingArrangement_exam_schedule__Ltz8X",exam_schedule_btn:"SeatingArrangement_exam_schedule_btn__6WLWQ",exam_schedule_btn_active:"SeatingArrangement_exam_schedule_btn_active__0WoVw",with_search:"SeatingArrangement_with_search__SALlM",search_container:"SeatingArrangement_search_container__wBtKO",search_container_input:"SeatingArrangement_search_container_input__MdE8y",searchIcon:"SeatingArrangement_searchIcon__v17wZ",search_container_filter:"SeatingArrangement_search_container_filter__U4+L3",seating_block_container:"SeatingArrangement_seating_block_container__LanEx",seating_block_container_top:"SeatingArrangement_seating_block_container_top__Zx7Xx",seating_examination_container:"SeatingArrangement_seating_examination_container__Qmzlx",add_plus_icon:"SeatingArrangement_add_plus_icon__XMs9q",seating_modal:"SeatingArrangement_seating_modal__KXmmt",seating_modal_title:"SeatingArrangement_seating_modal_title__n5NPd",seating_modal_title_left:"SeatingArrangement_seating_modal_title_left__c3bLq",attendance_text:"SeatingArrangement_attendance_text__rYloc",person_container:"SeatingArrangement_person_container__mAQ99",person_container_text:"SeatingArrangement_person_container_text__jdXSr",select_schedule_exam_btn:"SeatingArrangement_select_schedule_exam_btn__S0NEH",select_exam_btn:"SeatingArrangement_select_exam_btn__+4Cfu",attendance_next_btn:"SeatingArrangement_attendance_next_btn__FsVj0",select_select_btn:"SeatingArrangement_select_select_btn__90L6F",menu_icon:"SeatingArrangement_menu_icon__fe2sq",next_btn:"SeatingArrangement_next_btn__bJLuc",select_mutliple:"SeatingArrangement_select_mutliple__ZlMYC",with_check_container:"SeatingArrangement_with_check_container__ubHra",classes_main_container:"SeatingArrangement_classes_main_container__hNfFF",classes_count_container:"SeatingArrangement_classes_count_container__zMhQZ",start_arrangement_btn:"SeatingArrangement_start_arrangement_btn__vCWwG",add_container:"SeatingArrangement_add_container__K2YZu",add_aubject:"SeatingArrangement_add_aubject__N8QHE",update_btn:"SeatingArrangement_update_btn__S6RfH",grade_system_header:"SeatingArrangement_grade_system_header__OPNNu",grade_system_body:"SeatingArrangement_grade_system_body__kT2XX",fee_head_amount_input:"SeatingArrangement_fee_head_amount_input__Cne0S",normal_confirm_btn:"SeatingArrangement_normal_confirm_btn__SCJLQ",application_card:"SeatingArrangement_application_card__J0Tla",application_card_active:"SeatingArrangement_application_card_active__B39Jf",application_card_title:"SeatingArrangement_application_card_title__ywJUk",application_card_info:"SeatingArrangement_application_card_info__tqOOU",assignment_btn:"SeatingArrangement_assignment_btn__2mbx0",assignment_btn_active:"SeatingArrangement_assignment_btn_active__KpRrq",exam_co_attainment_type:"SeatingArrangement_exam_co_attainment_type__BU4Oo"}},15961:(e,n,_)=>{_.d(n,{Z:()=>t});const t={admission_application_container:"AdmissionApplicationRequest_admission_application_container__iMsyZ",moderator_container_title:"AdmissionApplicationRequest_moderator_container_title__5WiPB",with_search:"AdmissionApplicationRequest_with_search__mm0Q+",search_container:"AdmissionApplicationRequest_search_container__3swMB",search_container_input:"AdmissionApplicationRequest_search_container_input__InEPj",searchIcon:"AdmissionApplicationRequest_searchIcon__RdABM",search_container_filter:"AdmissionApplicationRequest_search_container_filter__fEHEF",remainingFees:"AdmissionApplicationRequest_remainingFees__X9g5z",ongoing_card:"AdmissionApplicationRequest_ongoing_card__1TVLc",ongoing_card_inner:"AdmissionApplicationRequest_ongoing_card_inner__1Gato",ongoing_card_text:"AdmissionApplicationRequest_ongoing_card_text__AKxnS",menu_icon:"AdmissionApplicationRequest_menu_icon__F3nQo",add_new_category:"AdmissionApplicationRequest_add_new_category__ZTInw",applicant_card_container:"AdmissionApplicationRequest_applicant_card_container__7UN2C",applicant_card_container_hover:"AdmissionApplicationRequest_applicant_card_container_hover__mP-Wa",applicant_card_container_active:"AdmissionApplicationRequest_applicant_card_container_active__5VW5x",applicant_card_inner:"AdmissionApplicationRequest_applicant_card_inner__kSbmI",applicant_card_inner_info:"AdmissionApplicationRequest_applicant_card_inner_info__8POe8",applicant_card_contact:"AdmissionApplicationRequest_applicant_card_contact__Ipapl",applicant_card_contact_inner:"AdmissionApplicationRequest_applicant_card_contact_inner__dDeFH",application_button:"AdmissionApplicationRequest_application_button__a2s6z",selectAppBtnContainer:"AdmissionApplicationRequest_selectAppBtnContainer__d0wD6",selectBtnContainer:"AdmissionApplicationRequest_selectBtnContainer__Si3QU",selectBtn:"AdmissionApplicationRequest_selectBtn__A0SVG",cancelledBtn:"AdmissionApplicationRequest_cancelledBtn__wEX7V",notConfirmedBtn:"AdmissionApplicationRequest_notConfirmedBtn__wZb02",onlineBtn:"AdmissionApplicationRequest_onlineBtn__v+gwq",cancelStatus:"AdmissionApplicationRequest_cancelStatus__qYDFg",checkbox:"AdmissionApplicationRequest_checkbox__tlbdN",back_icon:"AdmissionApplicationRequest_back_icon__gIdbd",receipt_requested_btn:"AdmissionApplicationRequest_receipt_requested_btn__stgcE",not_confirm_container:"AdmissionApplicationRequest_not_confirm_container__+r4pJ",applicant_profile:"AdmissionApplicationRequest_applicant_profile__kHoFd",applicant_profile_text:"AdmissionApplicationRequest_applicant_profile_text__wgySz",button_group:"AdmissionApplicationRequest_button_group__LKrUN",admission_collect_docs:"AdmissionApplicationRequest_admission_collect_docs__+-jUT",confirm_btn:"AdmissionApplicationRequest_confirm_btn__njvM8",admission_modal:"AdmissionApplicationRequest_admission_modal__a3Dx6",admission_modal_heading:"AdmissionApplicationRequest_admission_modal_heading__7i6gM",admission_fees_row:"AdmissionApplicationRequest_admission_fees_row__Ykj39",admission_confirm_class_card:"AdmissionApplicationRequest_admission_confirm_class_card__Ytr77",admission_confirm_batch_card:"AdmissionApplicationRequest_admission_confirm_batch_card__Cuven",admission_confirm_class_count:"AdmissionApplicationRequest_admission_confirm_class_count__P-bt1",admission_class_confirm:"AdmissionApplicationRequest_admission_class_confirm__SMLDh",mulitple_select_btn:"AdmissionApplicationRequest_mulitple_select_btn__WOWDd",end_btn:"AdmissionApplicationRequest_end_btn__vgxwG",admission_mulit_select:"AdmissionApplicationRequest_admission_mulit_select__ggFWa",admission_mulit_select_right:"AdmissionApplicationRequest_admission_mulit_select_right__K51Rw",os_reminder:"AdmissionApplicationRequest_os_reminder__AHp8F",os_filter_container:"AdmissionApplicationRequest_os_filter_container__Ck0gz",ongoing_card_count_date:"AdmissionApplicationRequest_ongoing_card_count_date__xi1+1",ongoing_card_count_container:"AdmissionApplicationRequest_ongoing_card_count_container__af9uG",applicant_card_reciept:"AdmissionApplicationRequest_applicant_card_reciept__QR+Ho",transfer_container:"AdmissionApplicationRequest_transfer_container__y5X5q",transfer_select_btn:"AdmissionApplicationRequest_transfer_select_btn__u8NkN",remove_btn:"AdmissionApplicationRequest_remove_btn__Lmhuv"}},51857:(e,n,_)=>{_.d(n,{Z:()=>t});const t={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},55136:(e,n,_)=>{_.d(n,{Z:()=>t});const t={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu"}},80476:(e,n,_)=>{_.d(n,{Z:()=>t});const t={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=14019.da9312e4.chunk.js.map