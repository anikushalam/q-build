"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[65034],{81622:(e,o,n)=>{n.d(o,{Z:()=>c});var t=n(72791),_=n(38733),i=n(39230),a=n(93097),r=n(69721),s=n(1095),l=n(80184);const c=e=>{let{labelText:o,name:n,multiple:c,value:d,onChange:f,onClick:m,errorShow:h,acceptType:u,customStyleContainer:p}=e;const{t:v}=(0,i.$G)(),[j,S]=(0,t.useState)("");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:_.Z.join_form_container,style:{...p},children:[(0,l.jsxs)("label",{className:_.Z.join_form_label,children:[o,h&&(0,l.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,l.jsxs)("div",{className:_.Z.join_form_file_container,children:[(0,l.jsx)("label",{className:d?"".concat(_.Z.join_form_file_choose," ").concat(_.Z.join_form_active_background):_.Z.join_form_file_choose,htmlFor:n,children:v(""!==d?"file_chosen":"chose_file")}),(0,l.jsx)("label",{className:_.Z.join_form_file_choosen,onClick:()=>{if(null!==d&&void 0!==d&&d.originalName)if(null!==d&&void 0!==d&&d.isPdf){let e=null;e=null!==d&&void 0!==d&&d.isCdn?window.open("".concat(s.q2,"/").concat(null===d||void 0===d?void 0:d.key),"_blank","noopener,noreferrer"):window.open("".concat(r.zQ,"/").concat(null===d||void 0===d?void 0:d.key),"_blank","noopener,noreferrer"),e&&(e.opener=null)}else S(null===d||void 0===d?void 0:d.key);else S(d)},style:{color:"#002BBE",cursor:"pointer"},children:""!==d?null!==d&&void 0!==d&&d.originalName?null===d||void 0===d?void 0:d.originalName:"View":v("no_file_chosen")})]}),(0,l.jsx)("input",{type:"file",multiple:!!c,accept:u||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:f})]}),j&&(0,l.jsx)(a.Z,{onClose:()=>{S("")},keyValue:j})]})}},97655:(e,o,n)=>{n.d(o,{Z:()=>a});n(72791);var t=n(39230),_=n(38733),i=n(80184);const a=e=>{let{labelText:o,name:n,type:a,value:r,onChange:s,placeholder:l,errorShow:c,customStyleContainer:d,customStyleLabel:f,customStyleInput:m,inputLength:h,reAccount:u,disabled:p}=e;const{t:v}=(0,t.$G)();return(0,i.jsxs)("div",{className:_.Z.join_form_container,style:{...d},children:[(0,i.jsxs)("label",{className:_.Z.join_form_label,htmlFor:n,style:{...f},children:[o," ",!u&&c&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",v("form_require_label")]}),u&&(0,i.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:u})]}),"tel"===a?(0,i.jsx)("input",{className:_.Z.join_form_input,type:a,value:r,onChange:s,name:n,placeholder:l,maxLength:null!==h&&void 0!==h?h:100,disabled:p,style:m}):(0,i.jsx)("input",{className:_.Z.join_form_input,type:a,value:r,onChange:s,name:n,placeholder:l,disabled:p,style:m})]})}},81693:(e,o,n)=>{n.d(o,{Z:()=>a});n(72791);var t=n(39230),_=n(38733),i=n(80184);const a=e=>{let{selectLabel:o,value:n,name:a,onChange:r,selectedValue:s,options:l,optionsValue:c,errorShow:d,customStyleContainer:f,customStyleLabel:m,customStyleInput:h,disabled:u,isNotTranslation:p,openAs:v}=e;const{t:j}=(0,t.$G)();return(0,i.jsxs)("div",{className:_.Z.join_form_container,style:{...f},children:[(0,i.jsxs)("p",{className:_.Z.join_form_select_paragraph,style:{...m},children:[o," ",d&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",j("form_require_label")]})]}),(0,i.jsxs)("select",{className:_.Z.join_form_select,value:n,onChange:r,name:a,disabled:u,style:{...h},children:[(0,i.jsx)("option",{selected:!0,children:s}),p?null===l||void 0===l?void 0:l.map(((e,o)=>(0,i.jsx)("option",{value:e,children:e},o))):"academicSiteInfo"===v?null===l||void 0===l?void 0:l.map(((e,o)=>(0,i.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:"".concat((null===e||void 0===e?void 0:e.staffFirstName)||""," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat((null===e||void 0===e?void 0:e.staffLastName)||"")},o))):null===l||void 0===l?void 0:l.map(((e,o)=>(0,i.jsx)("option",{value:c?c[null===e||void 0===e?void 0:e.keys]:e,children:j(null===e||void 0===e?void 0:e.keys)},o)))]})]})}},72952:(e,o,n)=>{n.d(o,{Z:()=>a});n(72791);var t=n(39230),_=n(38733),i=n(80184);const a=e=>{var o;let{labelText:n,name:a,type:r,value:s,onChange:l,placeholder:c,errorShow:d,customStyleContainer:f,disabled:m}=e;const{t:h}=(0,t.$G)();return(0,i.jsxs)("div",{className:_.Z.join_form_container,style:{...f},children:[(0,i.jsxs)("label",{className:_.Z.join_form_label,htmlFor:a,children:[n," ",d&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",h("form_require_label")]})]}),(0,i.jsx)("textarea",{className:_.Z.join_form_text_area,type:r,value:s,onChange:l,name:a,placeholder:c,rows:s?(null===s||void 0===s||null===(o=s.split("\n"))||void 0===o?void 0:o.length)+3:1,disabled:m})]})}},93097:(e,o,n)=>{n.d(o,{Z:()=>r});n(72791);var t=n(12072),_=n(84489),i=n(69721),a=n(80184);const r=e=>{let{onClose:o,keyValue:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_.Z,{onClose:o}),(0,a.jsx)(t.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,a.jsx)("img",{src:"".concat(i.yI,"/").concat(n),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},12923:(e,o,n)=>{n.d(o,{Ec:()=>S,Em:()=>x,JM:()=>m,NS:()=>i,Pg:()=>h,Q_:()=>j,RH:()=>f,Tv:()=>s,U_:()=>v,VN:()=>a,Wj:()=>c,ZS:()=>d,_8:()=>g,d5:()=>l,tB:()=>p,vI:()=>b,yx:()=>r,zO:()=>u});var t=n(91007),_=n(58208);const i=e=>{const{data:o,refetch:n}=(0,_.YD)(e.search,{skip:e.skip});return{instituteAllSearch:o,instituteAllSearchRefetch:n}},a=()=>{const[e]=(0,_.ak)();return[e]},r=()=>{const[e]=(0,_.WL)();return[e]},s=e=>{const{data:o,refetch:n}=(0,_.pH)(e.list,{skip:e.skip});return{instituteFollowList:o,instituteFollowListRefetch:n}},l=e=>{const{data:o,refetch:n}=(0,_.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:o,instituteOwnFollowingListRefetch:n}},c=()=>{const[e]=(0,_.Ky)();return[e]},d=e=>{const{data:o,refetch:n}=(0,_.p8)(e.list);return{userFollowList:o,userFollowListRefetch:n}},f=e=>{const{data:o,refetch:n}=(0,_.Wv)(e);return{userFollowingList:o,userFollowingListRefetch:n}},m=e=>{const{data:o,refetch:n}=(0,_.sz)(e.search,{skip:e.skip});return{userAllSearch:o,userAllSearchRefetch:n}},h=()=>{const[e]=(0,_.Mk)();return[e]},u=()=>{const[e]=(0,_.$i)();return[e]},p=()=>{const[e]=(0,_.Do)();return[e]},v=()=>{const[e]=(0,_.He)();return[e]},j=()=>{const[e]=(0,_.vg)();return[e]},S=()=>{const[e]=(0,_.OO)();return[e]},g=e=>{const{data:o,refetch:n}=(0,_.N2)(e);return{userCircleList:o,userCircleListRefetch:n}},b=e=>{const{data:o,refetch:n}=(0,t.x6)(e.search,{skip:e.skip});return{assignSearchStaff:o,assignSearchStaffRefetch:n}},x=e=>{const{data:o,refetch:n}=(0,_.SJ)(e);return{universalUser:o,universalUserRefetch:n}}},65034:(e,o,n)=>{n.r(o),n.d(o,{default:()=>y});var t=n(72791),_=n(42190),i=n(20772),a=n(16871),r=n(89792),s=n(39230),l=n(72952),c=n(98734),d=n(98094),f=(n(91007),n(29899)),m=n(97655),h=n(84959),u=n(81622),p=n(81693),v=n(95048),j=n(12923),S=n(70966),g=n(5574),b=n(80184);const x=function(e){var o;let{instituteId:n,nid:_,viewAs:i}=e;const{t:x}=(0,s.$G)(),y=(0,a.s0)(),F=(0,v.v9)((e=>{var o;return null===(o=e.idChange)||void 0===o?void 0:o.id})),[I,J]=(0,t.useState)(!1),[Z]=(0,h.FL)(),[A,C]=(0,t.useState)([]),[w,N]=(0,t.useState)(""),[k,P]=(0,t.useState)(""),[L,R]=(0,t.useState)(""),[M,H]=(0,t.useState)(!1),[T,K]=(0,t.useState)(!1),[O,q]=(0,t.useState)(""),[G]=(0,f.mG)(),[U]=(0,f.XA)(),[z,D]=(0,t.useState)({nss_about:"",nss_photo:"",nss_objective:"",nss_head:"",nss_roles:"",nss_commitee:[]}),[W,E]=(0,t.useState)([]);(0,t.useEffect)((()=>{D((e=>({...e,[w]:W})))}),[W,w]);const{assignSearchStaff:Q,assignSearchStaffRefetch:V}=(0,j.vI)({skip:"ADMISSION_ADMIN"===i?!n:!F,search:{search:"",page:1,id:"ADMISSION_ADMIN"===i?n:F,limit:500}}),{getNssSiteInfo:B,getNssSiteInfoRefetch:X}=(0,f.Sj)({nid:_,skip:!_});(0,t.useEffect)((()=>{T&&(e=>{if(e){J((e=>!e));const o=new FormData;o.append("file",e),Z({fileUpload:o}).then((e=>{var o;null!==(o=e.data)&&void 0!==o&&o.imageKey&&D((o=>{var n;return{...o,nss_photo:null===(n=e.data)||void 0===n?void 0:n.imageKey}})),J((e=>!e))})).catch({})}})(L)}),[T,L]);const $=(e,o)=>{if("name"===e.target.name||"designation"===e.target.name){const n=[...W];for(let t=0;t<(null===n||void 0===n?void 0:n.length);t++)t===o&&(n[t][e.target.name]=e.target.value);E(n)}else D((o=>({...o,[e.target.name]:e.target.value})))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:r.Z.bgContainer,children:(0,b.jsxs)("div",{className:r.Z.container,children:[(0,b.jsxs)("div",{className:r.Z.containerhead,children:[(0,b.jsx)("h6",{children:x("nss")}),(0,b.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:()=>{y(-1)}})]}),(0,b.jsx)(d.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,b.jsx)("div",{className:r.Z.containercontent,children:(0,b.jsxs)("div",{className:r.Z.container_inner_content,children:[(0,b.jsx)(l.Z,{labelText:x("nss_about"),placeholder:x("nss_about_placeholder"),name:"nss_about",value:z.nss_about,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,b.jsxs)("div",{className:r.Z.show_field,style:{alignItems:"flex-start"},children:[(0,b.jsx)(p.Z,{selectLabel:x("select_dean_academic"),selectedValue:x("select_dean_placeholder"),value:z.academic_head,name:"nss_head",onChange:$,options:null===Q||void 0===Q?void 0:Q.staff,openAs:"academicSiteInfo",customStyleContainer:{width:"49.5%"}}),(0,b.jsx)(u.Z,{labelText:x("academic_photo"),name:"dean_academic_photo",value:z.nss_photo,onChange:e=>{if(e.target.files[0]){const o=URL.createObjectURL(e.target.files[0]);R(e.target.files[0]),q(o),P(o),H(!0)}},customStyleContainer:{width:"49.5%"}})]}),(0,b.jsx)(l.Z,{labelText:x("nss_objective"),placeholder:x("nss_objective_placeholder"),name:"nss_objective",value:z.nss_objective,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,b.jsx)(l.Z,{labelText:x("nss_roles"),placeholder:x("nss_roles_placeholder"),name:"nss_roles",value:z.nss_roles,type:"text",onChange:$,customStyleContainer:{width:"100%"}}),(0,b.jsxs)("div",{className:r.Z.add_contact_person,children:[(0,b.jsx)("h6",{style:{marginTop:"1.5rem"},children:x("nss_commitee")}),null===z||void 0===z||null===(o=z.nss_commitee)||void 0===o?void 0:o.map(((e,o)=>(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:r.Z.show_field,children:[(0,b.jsx)(m.Z,{labelText:x("name"),placeholder:x("enter_name"),name:"name",value:null===e||void 0===e?void 0:e.name,type:"text",onChange:e=>$(e,o),customStyleContainer:{width:"49.5%"}}),(0,b.jsx)(m.Z,{labelText:x("designation"),placeholder:x("designation_details"),name:"designation",value:null===W||void 0===W?void 0:W.designation,type:"text",onChange:e=>$(e,o),customStyleContainer:{width:"49.5%"}})]})},o)))]}),(0,b.jsx)("button",{className:r.Z.add_contact_person_btn,title:"Add Member",onClick:()=>(e=>{N(e),E([...z[e],{name:"",designation:""}])})("nss_commitee"),children:x("add_member")}),(0,b.jsx)("button",{className:r.Z.update_btn,onClick:()=>{J((e=>!e)),_?U({aid:_,updateSiteInfo:{otherField:z}}).then((()=>{J((e=>!e))})).catch({}):G({id:F,updateSiteInfo:{otherField:z}}).then((()=>{J((e=>!e))})).catch({})},children:x(_?"update":"add")})]})})]})}),I&&(0,b.jsx)(c.Z,{}),(0,b.jsx)(g.Z,{open:M,children:(0,b.jsx)(S.Z,{setPhotoURL:P,photoURL:k,setFile:R,setOpenCrop:H,setUpload:K,setProfilePhoto:q,first:1,second:1})})]})};const y=function(){var e,o;const n=(0,a.TH)();return(0,b.jsxs)("div",{className:_.Z.insChat,children:[(0,b.jsx)("div",{className:_.Z.navbarr,children:(0,b.jsx)(i.default,{status:"home"})}),"site"===(null===(e=n.search)||void 0===e?void 0:e.substring(3))&&(0,b.jsx)(x,{nid:null===n||void 0===n||null===(o=n.state)||void 0===o?void 0:o.nid,viewAs:"INSTITUTE"})]})}},12072:(e,o,n)=>{n.d(o,{Z:()=>a});n(72791);var t=n(54164);const _="Overlay_overlay_card__PAr1h";var i=n(80184);const a=e=>{let{children:o,customStyle:n}=e;return(0,i.jsx)(i.Fragment,{children:t.createPortal((0,i.jsx)("div",{className:_,style:{...n},children:o}),document.getElementById("overlay"))})}},84489:(e,o,n)=>{n.d(o,{Z:()=>i});n(72791);var t=n(51857),_=n(80184);const i=e=>{let{onClose:o,customStyleBackdrop:n}=e;return(0,_.jsx)("div",{className:t.Z.search_backdrop,style:{...n},onClick:o})}},98094:(e,o,n)=>{n.d(o,{Z:()=>i});n(72791);var t=n(55136),_=n(80184);const i=e=>{let{customStyle:o}=e;return(0,_.jsx)("hr",{className:t.Z.universal_hr,style:{...o}})}},42190:(e,o,n)=>{n.d(o,{Z:()=>t});const t={insChat:"AdmisionAdmin_insChat__lOFwA",navbarr:"AdmisionAdmin_navbarr__JxsSe",admission_ins_container:"AdmisionAdmin_admission_ins_container__MAcuH"}},38733:(e,o,n)=>{n.d(o,{Z:()=>t});const t={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}},89792:(e,o,n)=>{n.d(o,{Z:()=>t});const t={navbar:"AdmissionSiteInfo_navbar__3qPXl",bgContainer:"AdmissionSiteInfo_bgContainer__HnhyZ",container:"AdmissionSiteInfo_container__HIvsR",containercontent:"AdmissionSiteInfo_containercontent__waYaP",containerhead:"AdmissionSiteInfo_containerhead__iNq+5",site_tab_container:"AdmissionSiteInfo_site_tab_container__wjSD6",site_tab_container_h6:"AdmissionSiteInfo_site_tab_container_h6__qNLeR",site_tab_container_h6_active:"AdmissionSiteInfo_site_tab_container_h6_active__wXF-l",container_inner_content:"AdmissionSiteInfo_container_inner_content__+psu6",show_field:"AdmissionSiteInfo_show_field__KlpRB",leading_person_container:"AdmissionSiteInfo_leading_person_container__F193z",leading_person_text:"AdmissionSiteInfo_leading_person_text__ez8d8",update_btn:"AdmissionSiteInfo_update_btn__upn6L",add_contact_person:"AdmissionSiteInfo_add_contact_person__1g6EG",add_contact_person_btn:"AdmissionSiteInfo_add_contact_person_btn__Ltl0+",labelContainer:"AdmissionSiteInfo_labelContainer__5pjlx",label:"AdmissionSiteInfo_label__bXkjx",inputBox:"AdmissionSiteInfo_inputBox__TAj3q",add_supporting_member:"AdmissionSiteInfo_add_supporting_member__vHGpU",add_supporting_member_heading:"AdmissionSiteInfo_add_supporting_member_heading__Ssh+Y",flexItem50:"AdmissionSiteInfo_flexItem50__XAjqB",fileinputflexContainer:"AdmissionSiteInfo_fileinputflexContainer__eyo27",input_label:"AdmissionSiteInfo_input_label__qJwiD",labelspan:"AdmissionSiteInfo_labelspan__mHavW",formselect:"AdmissionSiteInfo_formselect__d7NSq",input_border_active:"AdmissionSiteInfo_input_border_active__zIRs+",genderh:"AdmissionSiteInfo_genderh__EG6HT",genderplaceholder:"AdmissionSiteInfo_genderplaceholder__a+Q8r",upIcon:"AdmissionSiteInfo_upIcon__w42RU",downIcon:"AdmissionSiteInfo_downIcon__9MVVe",site_theme:"AdmissionSiteInfo_site_theme__1-dJU",site_theme_header:"AdmissionSiteInfo_site_theme_header__x99NO",site_theme_container:"AdmissionSiteInfo_site_theme_container__2viTW",site_theme_icon:"AdmissionSiteInfo_site_theme_icon__eEXvZ"}},51857:(e,o,n)=>{n.d(o,{Z:()=>t});const t={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},55136:(e,o,n)=>{n.d(o,{Z:()=>t});const t={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu"}}}]);
//# sourceMappingURL=65034.73344d7f.chunk.js.map