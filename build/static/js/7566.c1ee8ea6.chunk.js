"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[7566],{47566:function(i,n,e){e.r(n),e.d(n,{default:function(){return q}});var t=e(93433),s=e(29439),o=e(72791),a=e(95048),_=e(14304),c=e(85161),l=e(39230),d=e(23441),r=e(65543),p=e(16871),u=e(98094),m=e(15961),A=e(80184),v=function(i){var n=i.children,e=(0,l.$G)().t,t=(0,p.s0)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("section",{className:m.Z.moderator_container_title,children:[(0,A.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:function(){t(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,A.jsxs)("div",{className:m.Z.with_search,children:[(0,A.jsx)("h6",{children:e("pending_fees")}),(0,A.jsx)("div",{className:m.Z.search_container_filter,children:(0,A.jsx)("section",{className:m.Z.search_container,children:(0,A.jsxs)("div",{className:m.Z.search_container_input,children:[(0,A.jsx)("img",{className:m.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),n]})})})]})]}),(0,A.jsx)(u.Z,{customStyle:{width:"100%",marginTop:"0.5rem",marginBottom:"0.5rem"}})]})},f=e(763),h=e(11105),g=e(69721),R=function(i){var n,e,t,s,o,a,_,d=i.remainData,r=(0,l.$G)().t,u=(0,p.UO)(),m=(0,p.s0)();return(0,A.jsxs)("div",{className:c.Z.item,onClick:function(){m("/q/".concat(u.username,"/student/profile"),{state:{sid:null===d||void 0===d?void 0:d._id,viewAs:"FINANCE_MANAGER"}})},title:"View Profile",children:[(0,A.jsxs)("div",{className:c.Z.subItem,children:[(0,A.jsx)("img",{alt:"Student Avatar",src:null!==d&&void 0!==d&&d.studentProfilePhoto?"".concat(g.yI,"/").concat(null===d||void 0===d?void 0:d.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",loading:"lazy",style:{height:"4vw",width:"4vw"}}),(0,A.jsxs)("div",{className:c.Z.text,children:[(0,A.jsx)("h6",{children:"".concat(null===d||void 0===d?void 0:d.studentFirstName," ").concat(null!==d&&void 0!==d&&d.studentMiddleName?null===d||void 0===d?void 0:d.studentMiddleName:""," ").concat(null===d||void 0===d?void 0:d.studentLastName)}),(0,A.jsxs)("p",{children:[r("gr_number"),null!==(n=null===d||void 0===d?void 0:d.studentGRNO)&&void 0!==n?n:""," ",", ",null!==(e=null===d||void 0===d||null===(t=d.department)||void 0===t?void 0:t.dName)&&void 0!==e?e:""]}),(0,A.jsxs)("p",{children:[r("finance_classes"),"".concat(null!==(s=null===d||void 0===d||null===(o=d.studentClass)||void 0===o?void 0:o.className)&&void 0!==s?s:""," -  ").concat(null!==(a=null===d||void 0===d||null===(_=d.studentClass)||void 0===_?void 0:_.classTitle)&&void 0!==a?a:"")]})]})]}),(0,A.jsxs)("div",{className:c.Z.text,children:[(0,A.jsxs)("h6",{children:["Rs. ",null===d||void 0===d?void 0:d.studentRemainingFeeCount]}),(0,A.jsx)("p",{children:r("pending_fees")})]})]})};var q=function(i){var n=i.fId,e=(0,l.$G)().t,p=(0,a.v9)((function(i){return i.financeChange})),u=o.useState([]),m=(0,s.Z)(u,2),g=m[0],q=m[1],x=(0,d.YD)(),b=(0,s.Z)(x,2),j=b[0],N=b[1],w=o.useState(!0),Z=(0,s.Z)(w,2),F=Z[0],k=Z[1],C=o.useState(1),S=(0,s.Z)(C,2),B=S[0],I=S[1],y=(0,o.useState)(!0),E=(0,s.Z)(y,2),G=E[0],P=E[1],D=(0,o.useState)(""),M=(0,s.Z)(D,2),T=M[0],U=M[1],J=(0,_.PU)({finance:"".concat(null!==p&&void 0!==p&&p.fid?null===p||void 0===p?void 0:p.fid:n),page:B,limit:10,search:T},{skip:null!==p&&void 0!==p&&p.fid?!(null!==p&&void 0!==p&&p.fid):!n}),O=J.data,W=J.refetch,z=(0,r.u)().scrollToTop;o.useEffect((function(){z()}),[]),o.useEffect((function(){(null!==p&&void 0!==p&&p.fid||n)&&(P(!0),W())}),[null===p||void 0===p?void 0:p.fid,n,B,T,W]),o.useEffect((function(){N&&F&&I((function(i){return i+1}))}),[N,F]),o.useEffect((function(){var i;T?(q(null===O||void 0===O?void 0:O.list),P(!1)):null!==O&&void 0!==O&&O.list?(q((function(i){return(0,t.Z)(new Set([].concat((0,t.Z)(i),(0,t.Z)(null===O||void 0===O?void 0:O.list)).map(JSON.stringify))).map(JSON.parse)})),P(!1)):0===(null===O||void 0===O||null===(i=O.list)||void 0===i?void 0:i.length)&&P(!1);10===(null===O||void 0===O?void 0:O.list.length)?k(!0):k(!1)}),[null===O||void 0===O?void 0:O.list]);var H=(0,o.useCallback)((0,f.debounce)((function(i){return U(i)}),500),[]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:c.Z.remainingFees,children:[(0,A.jsx)(v,{children:(0,A.jsx)("input",{type:"text",placeholder:e("search-label"),onChange:function(i){H(i.target.value)}})}),null===g||void 0===g?void 0:g.map((function(i,n){return(null===g||void 0===g?void 0:g.length)===n+1?(0,A.jsx)("div",{ref:j,children:(0,A.jsx)(R,{remainData:i})},n):(0,A.jsx)(R,{remainData:i},n)})),G&&(0,A.jsx)(h.Z,{status:"white"})]})})}},15961:function(i,n){n.Z={admission_application_container:"AdmissionApplicationRequest_admission_application_container__iMsyZ",moderator_container_title:"AdmissionApplicationRequest_moderator_container_title__5WiPB",with_search:"AdmissionApplicationRequest_with_search__mm0Q+",search_container:"AdmissionApplicationRequest_search_container__3swMB",search_container_input:"AdmissionApplicationRequest_search_container_input__InEPj",searchIcon:"AdmissionApplicationRequest_searchIcon__RdABM",search_container_filter:"AdmissionApplicationRequest_search_container_filter__fEHEF",remainingFees:"AdmissionApplicationRequest_remainingFees__X9g5z",ongoing_card:"AdmissionApplicationRequest_ongoing_card__1TVLc",ongoing_card_inner:"AdmissionApplicationRequest_ongoing_card_inner__1Gato",ongoing_card_text:"AdmissionApplicationRequest_ongoing_card_text__AKxnS",menu_icon:"AdmissionApplicationRequest_menu_icon__F3nQo",add_new_category:"AdmissionApplicationRequest_add_new_category__ZTInw",applicant_card_container:"AdmissionApplicationRequest_applicant_card_container__7UN2C",applicant_card_container_hover:"AdmissionApplicationRequest_applicant_card_container_hover__mP-Wa",applicant_card_container_active:"AdmissionApplicationRequest_applicant_card_container_active__5VW5x",applicant_card_inner:"AdmissionApplicationRequest_applicant_card_inner__kSbmI",applicant_card_inner_info:"AdmissionApplicationRequest_applicant_card_inner_info__8POe8",applicant_card_contact:"AdmissionApplicationRequest_applicant_card_contact__Ipapl",applicant_card_contact_inner:"AdmissionApplicationRequest_applicant_card_contact_inner__dDeFH",application_button:"AdmissionApplicationRequest_application_button__a2s6z",selectAppBtnContainer:"AdmissionApplicationRequest_selectAppBtnContainer__d0wD6",selectBtnContainer:"AdmissionApplicationRequest_selectBtnContainer__Si3QU",selectBtn:"AdmissionApplicationRequest_selectBtn__A0SVG",cancelledBtn:"AdmissionApplicationRequest_cancelledBtn__wEX7V",notConfirmedBtn:"AdmissionApplicationRequest_notConfirmedBtn__wZb02",onlineBtn:"AdmissionApplicationRequest_onlineBtn__v+gwq",cancelStatus:"AdmissionApplicationRequest_cancelStatus__qYDFg",checkbox:"AdmissionApplicationRequest_checkbox__tlbdN",back_icon:"AdmissionApplicationRequest_back_icon__gIdbd",receipt_requested_btn:"AdmissionApplicationRequest_receipt_requested_btn__stgcE",not_confirm_container:"AdmissionApplicationRequest_not_confirm_container__+r4pJ",applicant_profile:"AdmissionApplicationRequest_applicant_profile__kHoFd",applicant_profile_text:"AdmissionApplicationRequest_applicant_profile_text__wgySz",button_group:"AdmissionApplicationRequest_button_group__LKrUN",admission_collect_docs:"AdmissionApplicationRequest_admission_collect_docs__+-jUT",confirm_btn:"AdmissionApplicationRequest_confirm_btn__njvM8",admission_modal:"AdmissionApplicationRequest_admission_modal__a3Dx6",admission_modal_heading:"AdmissionApplicationRequest_admission_modal_heading__7i6gM",admission_fees_row:"AdmissionApplicationRequest_admission_fees_row__Ykj39",admission_confirm_class_card:"AdmissionApplicationRequest_admission_confirm_class_card__Ytr77",admission_confirm_batch_card:"AdmissionApplicationRequest_admission_confirm_batch_card__Cuven",admission_confirm_class_count:"AdmissionApplicationRequest_admission_confirm_class_count__P-bt1",admission_class_confirm:"AdmissionApplicationRequest_admission_class_confirm__SMLDh",mulitple_select_btn:"AdmissionApplicationRequest_mulitple_select_btn__WOWDd",end_btn:"AdmissionApplicationRequest_end_btn__vgxwG",admission_mulit_select:"AdmissionApplicationRequest_admission_mulit_select__ggFWa",admission_mulit_select_right:"AdmissionApplicationRequest_admission_mulit_select_right__K51Rw",os_reminder:"AdmissionApplicationRequest_os_reminder__AHp8F",os_filter_container:"AdmissionApplicationRequest_os_filter_container__Ck0gz",ongoing_card_count_date:"AdmissionApplicationRequest_ongoing_card_count_date__xi1+1",ongoing_card_count_container:"AdmissionApplicationRequest_ongoing_card_count_container__af9uG",applicant_card_reciept:"AdmissionApplicationRequest_applicant_card_reciept__QR+Ho",transfer_container:"AdmissionApplicationRequest_transfer_container__y5X5q",transfer_select_btn:"AdmissionApplicationRequest_transfer_select_btn__u8NkN"}},85161:function(i,n){n.Z={remainingFees:"RemainingFees_remainingFees__G74JQ",subItem:"RemainingFees_subItem__maJF6",item:"RemainingFees_item__2o1X9",text:"RemainingFees_text__JnUvj"}}}]);
//# sourceMappingURL=7566.c1ee8ea6.chunk.js.map