"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4722],{3890:function(e,t,n){n(72791);var a=n(72420),_=n(39230),i=n(80184);t.Z=function(e){var t=e.labelText,n=e.customTileLabel,r=e.customTileContainer,o=e.customTileChild,l=e.tileList,c=e.activeTile,s=e.onTile,f=e.onParentTile,d=e.customTileAvailableChild,m=(0,_.$G)().t;return(0,i.jsxs)("div",{className:a.Z.tile_container,children:[t&&(0,i.jsx)("h6",{className:a.Z.tile_label,style:n,children:m(t)}),(0,i.jsx)("section",{className:a.Z.tile_tile_container,style:r,children:null===l||void 0===l?void 0:l.map((function(e){return null!==e&&void 0!==e&&e.isAvaiable?(0,i.jsxs)("div",{className:(null===e||void 0===e?void 0:e.key)===c?a.Z.tile_tile_active:a.Z.tile_tile,onClick:function(){return f(e)},style:d,children:[m(null===e||void 0===e?void 0:e.name),"FILTER"===(null===e||void 0===e?void 0:e.mode)?"":(0,i.jsxs)("div",{style:{whiteSpace:"break-spaces"},children:[m("available")," "," : "," ",null===e||void 0===e?void 0:e.count]})]}):(0,i.jsx)("div",{className:(null===e||void 0===e?void 0:e.key)===c?a.Z.tile_tile_active:a.Z.tile_tile,onClick:function(){return s(null===e||void 0===e?void 0:e.key)},style:o,children:m(null===e||void 0===e?void 0:e.name)})}))})]})}},67923:function(e,t,n){var a=n(1413),_=(n(72791),n(38733)),i=n(80184);t.Z=function(e){var t=e.labelText,n=e.value,r=e.customStyleContainer,o=e.customStyleLabel,l=e.customStyleValue;return(0,i.jsxs)("div",{className:_.Z.join_form_container_view,style:(0,a.Z)({},r),children:[(0,i.jsx)("label",{className:_.Z.join_form_label_view,style:(0,a.Z)({},o),children:t}),(0,i.jsx)("h6",{className:_.Z.join_form_input_view,style:(0,a.Z)({},l),children:n})]})}},47167:function(e,t,n){var a=n(1413),_=(n(72791),n(16871)),i=n(43504),r=n(23769),o=n(45639),l=n(80184);t.Z=function(e){var t=e.tabList,n=e.activeIndexTab,c=e.setActiveIndexTab,s=e.customStyleTab,f=e.carryParentState,d=e.showAs,m=e.customStyleLink,u=(0,_.UO)();return(0,l.jsx)("div",{className:o.Z.universal_container,children:d?null===t||void 0===t?void 0:t.map((function(e,t){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,l.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,a.Z)((0,a.Z)({},m),{},{opacity:"0.5"}),children:(0,l.jsx)(r.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,l.jsx)(i.rU,{to:"/q/".concat(u.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,a.Z)({},f),style:(0,a.Z)({},m),children:(0,l.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,a.Z)({},s),children:(0,l.jsx)(r.Z,{children:null===e||void 0===e?void 0:e.name})})},t)})):null===t||void 0===t?void 0:t.map((function(e,t){return(0,l.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,onClick:function(){return c(null===e||void 0===e?void 0:e.id)},style:(0,a.Z)({},s),children:(0,l.jsx)(r.Z,{children:null===e||void 0===e?void 0:e.name})},t)}))})}},8148:function(e,t,n){var a=n(1413),_=(n(72791),n(16871)),i=n(43504),r=n(80184);t.Z=function(e){var t=e.carryParentState,n=e.activeTab,o=e.children,l=(0,_.UO)();return(0,r.jsx)(i.rU,{to:"/q/".concat(l.username,"/member/department/").concat(l.deptname,"?a=").concat(n),state:(0,a.Z)({},t),children:o})}},68028:function(e,t,n){var a=n(1413),_=n(93433),i=n(37762),r=n(29439),o=n(72791),l=n(39230),c=n(60163),s=n(98094),f=n(67923),d=n(97655),m=n(40444),u=n(80184);t.Z=function(e){var t,n=e.onBack,v=e.stationaryPoint,g=e.smid,h=e.subjectName,S=e.onGrabAttainment,p=e.createdBy,b=(0,l.$G)().t,x=(0,o.useState)([]),A=(0,r.Z)(x,2),Z=A[0],j=A[1],k=(0,o.useState)(""),y=(0,r.Z)(k,2),T=y[0],C=y[1],N=(0,o.useState)({totalMarks:""}),P=(0,r.Z)(N,2),E=P[0],w=P[1],M=(0,m.LV)({data:{smid:g,flow:"MARKING_COPO"},skip:!g}),I=M.getAllCopoAttainment,U=M.getAllCopoAttainmentRefetch;(0,o.useEffect)((function(){g&&U()}),[g,U]),(0,o.useEffect)((function(){if(null!==I&&void 0!==I&&I.attainment){var e,t=[],n=(0,i.Z)(null===I||void 0===I?void 0:I.attainment);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push({attainmentId:null===a||void 0===a?void 0:a._id,attainment_name:null===a||void 0===a?void 0:a.attainment_name,marks:""})}}catch(_){n.e(_)}finally{n.f()}j(t)}}),[null===I||void 0===I?void 0:I.attainment]);var L=function(){var e,t=Z,n=[],a=(0,i.Z)(t);try{for(a.s();!(e=a.n()).done;){var _=e.value;null!==_&&void 0!==_&&_.marks&&n.push(_)}}catch(r){a.e(r)}finally{a.f()}"SUBJECT_ASSIGNMENT"===p?null!==E&&void 0!==E&&E.totalMarks?S({copo_list:n,assignment_total_mark:E.totalMarks}):C({totalMarks:"* required"}):S(n)};return(0,u.jsxs)("div",{className:c.Z.seating_modal,style:"SUBJECT_ASSIGNMENT"===p?{width:"100%",maxWidth:"100%",maxHeight:"100%"}:{color:"inherit"},children:["SUBJECT_ASSIGNMENT"===p?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("section",{className:c.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,u.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:n,alt:"back"}),(0,u.jsx)("h6",{children:b("copo_details")}),(0,u.jsx)("button",{className:c.Z.next_btn,title:"Next",onClick:L,children:b("next")})]}),(0,u.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0.5rem",marginBottom:"0.5rem"}})]}),"SUBJECT_TEACHER"===p||"SUBJECT_ASSIGNMENT"===p?null:(0,u.jsx)(f.Z,{labelText:b("subject_exam"),value:h}),"SUBJECT_ASSIGNMENT"===p?(0,u.jsx)(d.Z,{labelText:b("marks"),placeholder:b("enter_the_marks"),name:"totalMarks",value:null===E||void 0===E?void 0:E.totalMarks,type:"number",onChange:function(e){w((function(t){return(0,a.Z)((0,a.Z)({},t),{},{totalMarks:+e.target.value})}))},errorShow:T.totalMarks}):(0,u.jsx)(f.Z,{labelText:"".concat(b("marks")," : "),value:null===v||void 0===v||null===(t=v.showSubject)||void 0===t?void 0:t.totalMarks}),null===Z||void 0===Z?void 0:Z.map((function(e,t){return(0,u.jsx)(d.Z,{labelText:e.attainment_name,placeholder:b("enter_the_marks"),name:e.attainmentId,value:e.marks,type:"number",onChange:function(t){return function(e,t){for(var n=(0,_.Z)(Z),a=0;a<(null===n||void 0===n?void 0:n.length);a++){var i;(null===(i=n[a])||void 0===i?void 0:i.attainmentId)===t&&(n[a].marks=+e.target.value)}j(n)}(t,e.attainmentId)}},t)})),"SUBJECT_ASSIGNMENT"===p?(0,u.jsx)("div",{className:"".concat(c.Z.assignment_btn," ").concat(c.Z.assignment_btn_active),onClick:L,children:b("create_assignment")}):null]})}},23769:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(29439),_=n(72791),i=n(80184);var r=function(e){var t=e.children,n=e.onclick,r=(0,_.useState)(!1),o=(0,a.Z)(r,2),l=o[0],c=o[1],s=(0,_.useState)({x:-1,y:-1}),f=(0,a.Z)(s,2),d=f[0],m=f[1];return(0,_.useEffect)((function(){-1!==d.x&&-1!==d.y?(c(!0),setTimeout((function(){return c(!1)}),1e3)):c(!1)}),[d]),(0,_.useEffect)((function(){l||m({x:-1,y:-1})}),[l]),(0,i.jsxs)("div",{className:"ripple_btn",onClick:function(e){m({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),n&&n(e)},children:[l?(0,i.jsx)("span",{className:"ripple"}):"",(0,i.jsx)("span",{className:"content",children:t})]})}},98094:function(e,t,n){var a=n(1413),_=(n(72791),n(55136)),i=n(80184);t.Z=function(e){var t=e.customStyle;return(0,i.jsx)("hr",{className:_.Z.universal_hr,style:(0,a.Z)({},t)})}},72420:function(e,t){t.Z={tile_tile_container:"Tile_tile_tile_container__peBzA",tile_tile:"Tile_tile_tile__YJvgm",tile_tile_active:"Tile_tile_tile_active__kaja3",tile_label:"Tile_tile_label__+exU0",tile_container:"Tile_tile_container__wmFGD"}},87049:function(e,t){t.Z={edit_modal_container:"EditConfirm_edit_modal_container__WfbTq",modal_header:"EditConfirm_modal_header__4sq5J",edit:"EditConfirm_edit__ziVGP",remove:"EditConfirm_remove__PCXLs",xlsx_update_btn:"EditConfirm_xlsx_update_btn__H3yM8",save_stop_btn:"EditConfirm_save_stop_btn__9NiZ5",update_to_btn:"EditConfirm_update_to_btn__ExCJv"}},45639:function(e,t){t.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}},60163:function(e,t){t.Z={view_container:"SeatingArrangement_view_container__bUmfL",exam_info_container:"SeatingArrangement_exam_info_container__RjYB+",subject_container:"SeatingArrangement_subject_container__EBIQV",class_container:"SeatingArrangement_class_container__J6L8g",subject_container_active:"SeatingArrangement_subject_container_active__fUoy9",class_container_active:"SeatingArrangement_class_container_active__hbhBl",exam_detail_h6:"SeatingArrangement_exam_detail_h6__SQnZ6",subject_other:"SeatingArrangement_subject_other__dpqAI",subject_standard:"SeatingArrangement_subject_standard__FK2GD",schedule_subject_container:"SeatingArrangement_schedule_subject_container__RCY4e",exam_schedule:"SeatingArrangement_exam_schedule__Ltz8X",exam_schedule_btn:"SeatingArrangement_exam_schedule_btn__6WLWQ",exam_schedule_btn_active:"SeatingArrangement_exam_schedule_btn_active__0WoVw",with_search:"SeatingArrangement_with_search__SALlM",search_container:"SeatingArrangement_search_container__wBtKO",search_container_input:"SeatingArrangement_search_container_input__MdE8y",searchIcon:"SeatingArrangement_searchIcon__v17wZ",search_container_filter:"SeatingArrangement_search_container_filter__U4+L3",seating_block_container:"SeatingArrangement_seating_block_container__LanEx",seating_block_container_top:"SeatingArrangement_seating_block_container_top__Zx7Xx",seating_examination_container:"SeatingArrangement_seating_examination_container__Qmzlx",add_plus_icon:"SeatingArrangement_add_plus_icon__XMs9q",seating_modal:"SeatingArrangement_seating_modal__KXmmt",seating_modal_title:"SeatingArrangement_seating_modal_title__n5NPd",seating_modal_title_left:"SeatingArrangement_seating_modal_title_left__c3bLq",attendance_text:"SeatingArrangement_attendance_text__rYloc",person_container:"SeatingArrangement_person_container__mAQ99",person_container_text:"SeatingArrangement_person_container_text__jdXSr",select_schedule_exam_btn:"SeatingArrangement_select_schedule_exam_btn__S0NEH",select_exam_btn:"SeatingArrangement_select_exam_btn__+4Cfu",attendance_next_btn:"SeatingArrangement_attendance_next_btn__FsVj0",select_select_btn:"SeatingArrangement_select_select_btn__90L6F",menu_icon:"SeatingArrangement_menu_icon__fe2sq",next_btn:"SeatingArrangement_next_btn__bJLuc",select_mutliple:"SeatingArrangement_select_mutliple__ZlMYC",with_check_container:"SeatingArrangement_with_check_container__ubHra",classes_main_container:"SeatingArrangement_classes_main_container__hNfFF",classes_count_container:"SeatingArrangement_classes_count_container__zMhQZ",start_arrangement_btn:"SeatingArrangement_start_arrangement_btn__vCWwG",add_container:"SeatingArrangement_add_container__K2YZu",add_aubject:"SeatingArrangement_add_aubject__N8QHE",update_btn:"SeatingArrangement_update_btn__S6RfH",grade_system_header:"SeatingArrangement_grade_system_header__OPNNu",grade_system_body:"SeatingArrangement_grade_system_body__kT2XX",fee_head_amount_input:"SeatingArrangement_fee_head_amount_input__Cne0S",normal_confirm_btn:"SeatingArrangement_normal_confirm_btn__SCJLQ",application_card:"SeatingArrangement_application_card__J0Tla",application_card_active:"SeatingArrangement_application_card_active__B39Jf",application_card_title:"SeatingArrangement_application_card_title__ywJUk",application_card_info:"SeatingArrangement_application_card_info__tqOOU",assignment_btn:"SeatingArrangement_assignment_btn__2mbx0",assignment_btn_active:"SeatingArrangement_assignment_btn_active__KpRrq"}},55136:function(e,t){t.Z={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7"}}}]);
//# sourceMappingURL=4722.96fd7996.chunk.js.map