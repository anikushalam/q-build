"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4160],{97655:function(e,_,o){var n=o(1413),t=(o(72791),o(39230)),i=o(38733),r=o(80184);_.Z=function(e){var _=e.labelText,o=e.name,a=e.type,l=e.value,f=e.onChange,c=e.placeholder,s=e.errorShow,m=e.customStyleContainer,d=e.customStyleLabel,u=e.customStyleInput,h=e.inputLength,p=e.reAccount,v=e.disabled,j=(0,t.$G)().t;return(0,r.jsxs)("div",{className:i.Z.join_form_container,style:(0,n.Z)({},m),children:[(0,r.jsxs)("label",{className:i.Z.join_form_label,htmlFor:o,style:(0,n.Z)({},d),children:[_," ",!p&&s&&(0,r.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",j("form_require_label")]}),p&&(0,r.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:p})]}),"tel"===a?(0,r.jsx)("input",{className:i.Z.join_form_input,type:a,value:l,onChange:f,name:o,placeholder:c,maxLength:null!==h&&void 0!==h?h:100,disabled:v,style:u}):(0,r.jsx)("input",{className:i.Z.join_form_input,type:a,value:l,onChange:f,name:o,placeholder:c,disabled:v,style:u})]})}},67923:function(e,_,o){var n=o(1413),t=(o(72791),o(38733)),i=o(80184);_.Z=function(e){var _=e.labelText,o=e.value,r=e.customStyleContainer,a=e.customStyleLabel,l=e.customStyleValue;return(0,i.jsxs)("div",{className:t.Z.join_form_container_view,style:(0,n.Z)({},r),children:[(0,i.jsx)("label",{className:t.Z.join_form_label_view,style:(0,n.Z)({},a),children:_}),(0,i.jsx)("h6",{className:t.Z.join_form_input_view,style:(0,n.Z)({},l),children:o})]})}},8148:function(e,_,o){var n=o(1413),t=(o(72791),o(16871)),i=o(43504),r=o(80184);_.Z=function(e){var _=e.carryParentState,o=e.activeTab,a=e.children,l=(0,t.UO)();return(0,r.jsx)(i.rU,{to:"/q/".concat(l.username,"/member/department/").concat(l.deptname,"?a=").concat(o),state:(0,n.Z)({},_),children:a})}},36665:function(e,_,o){o(72791);var n=o(12072),t=o(1874),i=o(80184);_.Z=function(e){var _=e.onClose,o=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{onClose:_}),(0,i.jsx)(n.Z,{children:o})]})}},70694:function(e,_,o){o.r(_),o.d(_,{default:function(){return k}});var n=o(72791),t=o(42817),i=o(16871),r=o(1413),a=o(29439),l=o(15961),f=o(43504),c=o(98094),s=o(39230),m=o(47167),d=o(80184),u=function(e){var _=e.carryParentState,o=(0,s.$G)().t,n=(0,f.lr)(),t=(0,a.Z)(n,1)[0],i=[{name:o("tab_mentees"),id:0,url:"member/mentor",is_active:"enabled"},{name:o("queries"),id:1,url:"member/mentor?a=queries",is_active:"enabled"},{name:o("meeting"),id:2,url:"member/mentor?a=meeting",is_active:"enabled"},{name:o("feedback"),id:3,url:"member/mentor?a=feedback",is_active:"disabled"}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Z,{tabList:i,activeIndexTab:t.get("a")?"queries"===t.get("a")?1:"meeting"===t.get("a")?2:3:0,showAs:!0,customStyleTab:{width:"100%"},customStyleLink:{width:"25%"},carryParentState:_}),(0,d.jsx)(c.Z,{customStyle:{width:"100%",marginBottom:"0.7rem"}})]})},h=o(93433),p=o(23441),v=o(74289),j=o(72295),g=o(20859),b=o(11105),S=function(e){var _=e.mid,o=(0,p.YD)(),t=(0,a.Z)(o,2),i=t[0],r=t[1],l=(0,n.useState)(1),f=(0,a.Z)(l,2),c=f[0],s=f[1],m=(0,n.useState)(!0),u=(0,a.Z)(m,2),S=u[0],x=u[1],y=(0,n.useState)(!0),F=(0,a.Z)(y,2),J=F[0],Z=F[1],k=(0,n.useState)([]),P=(0,a.Z)(k,2),w=P[0],C=P[1],I=(0,v.$f)({mid:_,skip:!_}),M=I.getOneMentorDetail,N=I.getOneMentorDetailRefetch;(0,n.useEffect)((function(){_&&N()}),[_,N]);var O=(0,v.Gu)({data:{mid:_,page:c,limit:10},skip:!_}),K=O.getOneMentorMenteeList,T=O.getOneMentorMenteeListRefetch;return(0,n.useEffect)((function(){_&&(Z(!0),T())}),[_,c,T]),(0,n.useEffect)((function(){r&&S&&s((function(e){return e+1}))}),[r,S]),(0,n.useEffect)((function(){var e,_;null!==K&&void 0!==K&&K.all_mentees?(C((function(e){var _,o;return null===(_=(0,h.Z)(new Set(null===(o=[].concat((0,h.Z)(e),(0,h.Z)(null===K||void 0===K?void 0:K.all_mentees)))||void 0===o?void 0:o.map(JSON.stringify))))||void 0===_?void 0:_.map(JSON.parse)})),Z(!1)):0===(null===K||void 0===K||null===(e=K.all_mentees)||void 0===e?void 0:e.length)&&Z(!1),10===(null===K||void 0===K||null===(_=K.all_mentees)||void 0===_?void 0:_.length)?x(!0):x(!1)}),[null===K||void 0===K?void 0:K.all_mentees]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.Z,{viewAs:"MENTOR_DETAIL",mentor:null===M||void 0===M?void 0:M.mentor}),null===w||void 0===w?void 0:w.map((function(e,_){return(null===w||void 0===w?void 0:w.length)===_+1?(0,d.jsx)("div",{ref:i,children:(0,d.jsx)(g.Z,{mentee:e})},null===e||void 0===e?void 0:e._id):(0,d.jsx)(g.Z,{mentee:e},null===e||void 0===e?void 0:e._id)})),J&&(0,d.jsx)(b.Z,{})]})},x=o(93822),y=o(37435),F=o(29829),J=o(48846),Z=function(e){var _=e.carryParentState,o=e.onClickValue,n=(0,s.$G)().t,t=(0,i.s0)(),m=(0,i.UO)(),h=((0,i.TH)(),(0,f.lr)()),p=(0,a.Z)(h,1)[0];return(0,d.jsx)("div",{className:l.Z.admission_application_container,style:{marginTop:"1vw"},children:"query-detail"===p.get("a")?(0,d.jsx)(y.Z,{queryFlow:"By_Mentor"}):"meeting-detail"===p.get("a")?(0,d.jsx)(J.Z,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:l.Z.with_search,style:{justifyContent:"flex-start",gap:"1rem"},children:[(0,d.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:function(){t("/q/".concat(m.username,"/member/mentor"),{state:(0,r.Z)({},_)})},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,d.jsx)("h6",{children:n("desi_mentor")})]}),(0,d.jsx)(c.Z,{customStyle:{width:"100%",marginTop:"0.5rem",marginBottom:"0.5rem"}}),(0,d.jsx)(u,{carryParentState:_}),"queries"===p.get("a")?(0,d.jsx)(x.Z,{did:o,carryParentState:_,queryFlow:"By_Mentor"}):"meeting"===p.get("a")?(0,d.jsx)(F.Z,{mid:o,carryParentState:_,queryFlow:"By_Mentor"}):(0,d.jsx)(S,{mid:o})]})})},k=function(){var e,_,o,n,r,a,l=(0,i.TH)();return(0,d.jsx)(t.Z,{index:"33",sid:null!==(e=null===l||void 0===l||null===(_=l.state)||void 0===_?void 0:_.sid)&&void 0!==e?e:"",onClickValue:null!==(o=null===l||void 0===l||null===(n=l.state)||void 0===n?void 0:n.onClickValue)&&void 0!==o?o:"",children:(0,d.jsx)(Z,{onClickValue:null!==(r=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.onClickValue)&&void 0!==r?r:"",carryParentState:null===l||void 0===l?void 0:l.state})})}},12072:function(e,_,o){o.d(_,{Z:function(){return a}});var n=o(1413),t=(o(72791),o(54164)),i="Overlay_overlay_card__PAr1h",r=o(80184),a=function(e){var _=e.children,o=e.customStyle;return(0,r.jsx)(r.Fragment,{children:t.createPortal((0,r.jsx)("div",{className:i,style:(0,n.Z)({},o),children:_}),document.getElementById("overlay"))})}},84489:function(e,_,o){var n=o(1413),t=(o(72791),o(51857)),i=o(80184);_.Z=function(e){var _=e.onClose,o=e.customStyleBackdrop;return(0,i.jsx)("div",{className:t.Z.search_backdrop,style:(0,n.Z)({},o),onClick:_})}},1874:function(e,_,o){o(72791);var n=o(54164),t=o(84489),i=o(80184);_.Z=function(e){var _=e.onClose,o=e.customStyleBackdrop;return(0,i.jsx)(i.Fragment,{children:n.createPortal((0,i.jsx)(t.Z,{onClose:_,customStyleBackdrop:o}),document.getElementById("backdrop"))})}},98094:function(e,_,o){var n=o(1413),t=(o(72791),o(55136)),i=o(80184);_.Z=function(e){var _=e.customStyle;return(0,i.jsx)("hr",{className:t.Z.universal_hr,style:(0,n.Z)({},_)})}},38733:function(e,_){_.Z={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi"}},51857:function(e,_){_.Z={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},55136:function(e,_){_.Z={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7"}}}]);
//# sourceMappingURL=4160.208e67a3.chunk.js.map