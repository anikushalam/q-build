"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3731,6876],{46876:function(e,n,i){i.r(n);var t=i(93433),o=i(29439),s=i(72791),a=i(23441),_=i(95048),c=i(12923),r=i(763),l=i(69721),d=i(52124),u=i(5574),p=i(39230),f=i(80184),m=window.innerHeight;n.default=function(e){var n=e.onClose,i=e.title,h=e.headSelect,g=e.assignHead,v=e.disabledId,A=e.instituteId,x=e.viewAs,S=e.isMultiSelect,b=e.selectList,R=e.onMultiSelect,I=e.onDone,q=(0,p.$G)().t,j=(0,s.useState)(1),C=(0,o.Z)(j,2),w=C[0],N=C[1],Z=(0,s.useState)(!0),k=(0,o.Z)(Z,2),H=k[0],y=k[1],F=(0,a.YD)(),M=(0,o.Z)(F,2),B=M[0],D=M[1],E=(0,s.useState)(""),L=(0,o.Z)(E,2),P=L[0],G=L[1],O=s.useState([]),U=(0,o.Z)(O,2),T=U[0],Q=U[1],W=(0,_.v9)((function(e){return e.idChange})),z=(0,c.vI)({skip:"ADMISSION_ADMIN"===x?!A:!(null!==W&&void 0!==W&&W.id),search:{search:P,page:w,id:"ADMISSION_ADMIN"===x?A:null===W||void 0===W?void 0:W.id,limit:10}}),V=z.assignSearchStaff,K=z.assignSearchStaffRefetch;s.useEffect((function(){null!==W&&void 0!==W&&W.id&&K()}),[null===W||void 0===W?void 0:W.id,K,w]),(0,s.useEffect)((function(){D&&H&&N((function(e){return e+1}))}),[D,H]),s.useEffect((function(){null!==V&&void 0!==V&&V.staff&&Q(P?null===V||void 0===V?void 0:V.staff:function(e){return function(e){for(var n=0;n<(null===e||void 0===e?void 0:e.length);n++)for(var i=n+1;i<(null===e||void 0===e?void 0:e.length);i++){var t,o;(null===(t=e[n])||void 0===t?void 0:t._id)===(null===(o=e[i])||void 0===o?void 0:o._id)&&(null===e||void 0===e||e.splice(i,1))}return e}([].concat((0,t.Z)(e),(0,t.Z)(null===V||void 0===V?void 0:V.staff)))}),10===(null===V||void 0===V?void 0:V.staff.length)?y(!0):y(!1)}),[null===V||void 0===V?void 0:V.staff]),(0,s.useEffect)((function(){P&&X()}),[P]);var X=function(){K()},Y=(0,s.useCallback)((0,r.debounce)((function(e){return G(e)}),500),[]),$=function(e){v===(null===e||void 0===e?void 0:e._id)||(S?R(e):(h(e),"ADMISSION_ADMIN"===x||n()))};return(0,f.jsx)(u.Z,{open:g,onClose:n,children:(0,f.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(m-20,"px"),overflowX:"hidden"},children:[(0,f.jsxs)("div",{className:d.Z.assign_title,style:{width:"100%"},children:[(0,f.jsx)("h5",{children:i}),S?(0,f.jsxs)("div",{className:d.Z.is_mulitselect_container,children:[(0,f.jsx)("h6",{style:{cursor:"pointer"},onClick:I,children:q("select")}),(0,f.jsx)("img",{src:"/images/close-post-icon.svg",onClick:n,alt:"staff assign pop close icon"})]}):(0,f.jsx)("img",{src:"/images/close-post-icon.svg",onClick:n,alt:"staff assign pop close icon"})]}),(0,f.jsxs)("div",{className:d.Z.assign_search_container,children:[(0,f.jsx)("input",{type:"text",placeholder:q("search"),className:d.Z.assign_search_input,onChange:function(e){return n=e.target.value,void Y(n);var n}}),(0,f.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,f.jsx)("div",{className:d.Z.assign_show_list,children:null===T||void 0===T?void 0:T.map((function(e,n){return(null===T||void 0===T?void 0:T.length)===n+1?(0,f.jsxs)("div",{ref:B,children:[(0,f.jsxs)("div",{className:d.Z.assign_show_list_each,style:v===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return $(e)},children:[S?null!==b&&void 0!==b&&b.includes(null===e||void 0===e?void 0:e._id)?(0,f.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,f.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(l.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,f.jsxs)("div",{className:d.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,f.jsxs)("p",{children:[" ",q("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,f.jsx)("hr",{})]},e._id):(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:d.Z.assign_show_list_each,style:v===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return $(e)},children:[S?null!==b&&void 0!==b&&b.includes(null===e||void 0===e?void 0:e._id)?(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/checkbox-icon.svg",alt:"icon"}):(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,f.jsx)("img",{src:null!==e&&void 0!==e&&e.staffProfilePhoto?"".concat(l.yI,"/").concat(e.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,f.jsxs)("div",{className:d.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(e.staffLastName)}),(0,f.jsxs)("p",{children:[" ",q("index")," ",null===e||void 0===e?void 0:e.staffROLLNO]})]})]}),(0,f.jsx)("hr",{})]},e._id)}))})]})})}},81622:function(e,n,i){var t=i(1413),o=i(29439),s=i(72791),a=i(38733),_=i(39230),c=i(93097),r=i(69721),l=i(80184);n.Z=function(e){var n=e.labelText,i=e.name,d=e.multiple,u=e.value,p=e.onChange,f=(e.onClick,e.errorShow),m=e.acceptType,h=e.customStyleContainer,g=(0,_.$G)().t,v=(0,s.useState)(""),A=(0,o.Z)(v,2),x=A[0],S=A[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:a.Z.join_form_container,style:(0,t.Z)({},h),children:[(0,l.jsxs)("label",{className:a.Z.join_form_label,children:[n,f&&(0,l.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,l.jsxs)("div",{className:a.Z.join_form_file_container,children:[(0,l.jsx)("label",{className:u?"".concat(a.Z.join_form_file_choose," ").concat(a.Z.join_form_active_background):a.Z.join_form_file_choose,htmlFor:i,children:g(""!==u?"file_chosen":"chose_file")}),(0,l.jsx)("label",{className:a.Z.join_form_file_choosen,onClick:function(){if(null!==u&&void 0!==u&&u.originalName)if(null!==u&&void 0!==u&&u.isPdf){var e=window.open("".concat(r.zQ,"/").concat(null===u||void 0===u?void 0:u.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}else S(null===u||void 0===u?void 0:u.key);else S(u)},style:{color:"#002BBE",cursor:"pointer"},children:""!==u?null!==u&&void 0!==u&&u.originalName?null===u||void 0===u?void 0:u.originalName:"View":g("no_file_chosen")})]}),(0,l.jsx)("input",{type:"file",multiple:!!d,accept:m||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:i,id:i,style:{display:"none"},onChange:p})]}),x&&(0,l.jsx)(c.Z,{onClose:function(){S("")},keyValue:x})]})}},72952:function(e,n,i){var t=i(1413),o=(i(72791),i(39230)),s=i(38733),a=i(80184);n.Z=function(e){var n,i=e.labelText,_=e.name,c=e.type,r=e.value,l=e.onChange,d=e.placeholder,u=e.errorShow,p=e.customStyleContainer,f=e.disabled,m=(0,o.$G)().t;return(0,a.jsxs)("div",{className:s.Z.join_form_container,style:(0,t.Z)({},p),children:[(0,a.jsxs)("label",{className:s.Z.join_form_label,htmlFor:_,children:[i," ",u&&(0,a.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",m("form_require_label")]})]}),(0,a.jsx)("textarea",{className:s.Z.join_form_text_area,type:c,value:r,onChange:l,name:_,placeholder:d,rows:r?(null===r||void 0===r||null===(n=r.split("\n"))||void 0===n?void 0:n.length)+3:1,disabled:f})]})}},93097:function(e,n,i){i(72791);var t=i(12072),o=i(84489),s=i(69721),a=i(80184);n.Z=function(e){var n=e.onClose,i=e.keyValue;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{onClose:n}),(0,a.jsx)(t.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,a.jsx)("img",{src:"".concat(s.yI,"/").concat(i),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},49886:function(e,n,i){i.d(n,{Z:function(){return u}});var t=i(29439),o=i(72791),s=i(39230),a=i(91022),_="PaymentModeType_payment_mode_heading__RpGh8",c=i(80184),r=["Cash","UPI Transfer","Net Banking","NEFT/RTGS/IMPS","Cheque","Demand Draft","Fee Receipt Not Generated"],l=["Cash","UPI Transfer","Net Banking","NEFT/RTGS/IMPS","Cheque","Demand Draft","Unrecovered/Exemption","Fee Receipt Not Generated"],d=["By Bank","By Cash"],u=function(e){var n=e.paymentHeading,i=e.paymentHeadingPlaceholder,u=e.onInputChange,p=e.errorShow,f=e.openAs,m=e.viewAs,h=(0,s.$G)().t,g=(0,o.useState)(""),v=(0,t.Z)(g,2),A=v[0],x=v[1];(0,o.useEffect)((function(){"REFUND"===f&&x("Refunded"),"FINANCE_MANAGER"===m&&x("Govt. Grant/Scholarship")}),[f]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h6",{className:_,children:[" ",n," "]}),(0,c.jsx)(a.Z,{selectLabel:i||h("mode_placeholder"),value:A,onClick:"DEPOSIT_REFUND_LIST"===f?function(e){x(e),u(e)}:function(e){x(e),u({target:{name:"fee_payment_mode",value:"Cash"===e?"By Cash":"Unrecovered/Exemption"===e?"Exempted/Unrecovered":"Govt. Grant/Scholarship"===e?"Government/Scholarship":e}})},selectedValue:h("please_select_payment_mode"),options:"DEPOSIT_REFUND_LIST"===f?d:i?l:r,customLabelStyle:{marginTop:"0",marginBottom:"7px",fontWeight:"400",fontSize:"12px",color:"rgba(18, 18, 18, 0.8)"},customListStyle:{maxHeight:"fit-content"},errorShow:p,openAs:f,viewAs:m})]})}},12923:function(e,n,i){i.d(n,{Ec:function(){return x},Em:function(){return R},JM:function(){return f},NS:function(){return a},Pg:function(){return m},Q_:function(){return A},RH:function(){return p},Tv:function(){return r},U_:function(){return v},VN:function(){return _},Wj:function(){return d},ZS:function(){return u},_8:function(){return S},d5:function(){return l},tB:function(){return g},vI:function(){return b},yx:function(){return c},zO:function(){return h}});var t=i(29439),o=i(91007),s=i(58208),a=function(e){var n=(0,s.YD)(e.search,{skip:e.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},_=function(){var e=(0,s.ak)();return[(0,t.Z)(e,1)[0]]},c=function(){var e=(0,s.WL)();return[(0,t.Z)(e,1)[0]]},r=function(e){var n=(0,s.pH)(e.list,{skip:e.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},l=function(e){var n=(0,s.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},d=function(){var e=(0,s.Ky)();return[(0,t.Z)(e,1)[0]]},u=function(e){var n=(0,s.p8)(e.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},p=function(e){var n=(0,s.Wv)(e);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},f=function(e){var n=(0,s.sz)(e.search,{skip:e.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},m=function(){var e=(0,s.Mk)();return[(0,t.Z)(e,1)[0]]},h=function(){var e=(0,s.$i)();return[(0,t.Z)(e,1)[0]]},g=function(){var e=(0,s.Do)();return[(0,t.Z)(e,1)[0]]},v=function(){var e=(0,s.He)();return[(0,t.Z)(e,1)[0]]},A=function(){var e=(0,s.vg)();return[(0,t.Z)(e,1)[0]]},x=function(){var e=(0,s.OO)();return[(0,t.Z)(e,1)[0]]},S=function(e){var n=(0,s.N2)(e);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},b=function(e){var n=(0,o.x6)(e.search,{skip:e.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},R=function(e){var n=(0,s.SJ)(e);return{universalUser:n.data,universalUserRefetch:n.refetch}}},52124:function(e,n){n.Z={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}},92994:function(e,n){n.Z={navbar:"HostelSiteInfo_navbar__IU+1C",bgContainer:"HostelSiteInfo_bgContainer__s1M1C",container:"HostelSiteInfo_container__0k5MX",containercontent:"HostelSiteInfo_containercontent__FHQE6",containerhead:"HostelSiteInfo_containerhead__UXeNf",site_tab_container:"HostelSiteInfo_site_tab_container__kUKhY",site_tab_container_h6:"HostelSiteInfo_site_tab_container_h6__PRjoW",site_tab_container_h6_active:"HostelSiteInfo_site_tab_container_h6_active__oK5jK",container_inner_content:"HostelSiteInfo_container_inner_content__BRYbi",show_field:"HostelSiteInfo_show_field__QipiG",leading_person_container:"HostelSiteInfo_leading_person_container__2KEgv",leading_person_text:"HostelSiteInfo_leading_person_text__gcKoj",update_btn:"HostelSiteInfo_update_btn__X3hce",add_contact_person:"HostelSiteInfo_add_contact_person__Bw9OD",add_contact_person_btn:"HostelSiteInfo_add_contact_person_btn__oFvVe",labelContainer:"HostelSiteInfo_labelContainer__CgZ5Z",label:"HostelSiteInfo_label__vOQMB",inputBox:"HostelSiteInfo_inputBox__qEQpd",add_supporting_member:"HostelSiteInfo_add_supporting_member__Cows5",add_supporting_member_heading:"HostelSiteInfo_add_supporting_member_heading__+1W3k",flexItem50:"HostelSiteInfo_flexItem50__4AQkO",fileinputflexContainer:"HostelSiteInfo_fileinputflexContainer__TjDJA",input_label:"HostelSiteInfo_input_label__iHuUx",labelspan:"HostelSiteInfo_labelspan__2dH-3",formselect:"HostelSiteInfo_formselect__6Na7n",input_border_active:"HostelSiteInfo_input_border_active__IORlh",genderh:"HostelSiteInfo_genderh__OaIvK",genderplaceholder:"HostelSiteInfo_genderplaceholder__uQ+GR",upIcon:"HostelSiteInfo_upIcon__yH95D",downIcon:"HostelSiteInfo_downIcon__wIQ0Z",site_theme:"HostelSiteInfo_site_theme__oIQ4w",site_theme_header:"HostelSiteInfo_site_theme_header__qrz8W",site_theme_container:"HostelSiteInfo_site_theme_container__q1qUU",site_theme_icon:"HostelSiteInfo_site_theme_icon__Rj4LC"}},15961:function(e,n){n.Z={admission_application_container:"AdmissionApplicationRequest_admission_application_container__iMsyZ",moderator_container_title:"AdmissionApplicationRequest_moderator_container_title__5WiPB",with_search:"AdmissionApplicationRequest_with_search__mm0Q+",search_container:"AdmissionApplicationRequest_search_container__3swMB",search_container_input:"AdmissionApplicationRequest_search_container_input__InEPj",searchIcon:"AdmissionApplicationRequest_searchIcon__RdABM",search_container_filter:"AdmissionApplicationRequest_search_container_filter__fEHEF",remainingFees:"AdmissionApplicationRequest_remainingFees__X9g5z",ongoing_card:"AdmissionApplicationRequest_ongoing_card__1TVLc",ongoing_card_inner:"AdmissionApplicationRequest_ongoing_card_inner__1Gato",ongoing_card_text:"AdmissionApplicationRequest_ongoing_card_text__AKxnS",menu_icon:"AdmissionApplicationRequest_menu_icon__F3nQo",add_new_category:"AdmissionApplicationRequest_add_new_category__ZTInw",applicant_card_container:"AdmissionApplicationRequest_applicant_card_container__7UN2C",applicant_card_container_hover:"AdmissionApplicationRequest_applicant_card_container_hover__mP-Wa",applicant_card_container_active:"AdmissionApplicationRequest_applicant_card_container_active__5VW5x",applicant_card_inner:"AdmissionApplicationRequest_applicant_card_inner__kSbmI",applicant_card_inner_info:"AdmissionApplicationRequest_applicant_card_inner_info__8POe8",applicant_card_contact:"AdmissionApplicationRequest_applicant_card_contact__Ipapl",applicant_card_contact_inner:"AdmissionApplicationRequest_applicant_card_contact_inner__dDeFH",application_button:"AdmissionApplicationRequest_application_button__a2s6z",selectAppBtnContainer:"AdmissionApplicationRequest_selectAppBtnContainer__d0wD6",selectBtnContainer:"AdmissionApplicationRequest_selectBtnContainer__Si3QU",selectBtn:"AdmissionApplicationRequest_selectBtn__A0SVG",cancelledBtn:"AdmissionApplicationRequest_cancelledBtn__wEX7V",notConfirmedBtn:"AdmissionApplicationRequest_notConfirmedBtn__wZb02",onlineBtn:"AdmissionApplicationRequest_onlineBtn__v+gwq",cancelStatus:"AdmissionApplicationRequest_cancelStatus__qYDFg",checkbox:"AdmissionApplicationRequest_checkbox__tlbdN",back_icon:"AdmissionApplicationRequest_back_icon__gIdbd",receipt_requested_btn:"AdmissionApplicationRequest_receipt_requested_btn__stgcE",not_confirm_container:"AdmissionApplicationRequest_not_confirm_container__+r4pJ",applicant_profile:"AdmissionApplicationRequest_applicant_profile__kHoFd",applicant_profile_text:"AdmissionApplicationRequest_applicant_profile_text__wgySz",button_group:"AdmissionApplicationRequest_button_group__LKrUN",admission_collect_docs:"AdmissionApplicationRequest_admission_collect_docs__+-jUT",confirm_btn:"AdmissionApplicationRequest_confirm_btn__njvM8",admission_modal:"AdmissionApplicationRequest_admission_modal__a3Dx6",admission_modal_heading:"AdmissionApplicationRequest_admission_modal_heading__7i6gM",admission_fees_row:"AdmissionApplicationRequest_admission_fees_row__Ykj39",admission_confirm_class_card:"AdmissionApplicationRequest_admission_confirm_class_card__Ytr77",admission_confirm_batch_card:"AdmissionApplicationRequest_admission_confirm_batch_card__Cuven",admission_confirm_class_count:"AdmissionApplicationRequest_admission_confirm_class_count__P-bt1",admission_class_confirm:"AdmissionApplicationRequest_admission_class_confirm__SMLDh",mulitple_select_btn:"AdmissionApplicationRequest_mulitple_select_btn__WOWDd",end_btn:"AdmissionApplicationRequest_end_btn__vgxwG",admission_mulit_select:"AdmissionApplicationRequest_admission_mulit_select__ggFWa",admission_mulit_select_right:"AdmissionApplicationRequest_admission_mulit_select_right__K51Rw",os_reminder:"AdmissionApplicationRequest_os_reminder__AHp8F",os_filter_container:"AdmissionApplicationRequest_os_filter_container__Ck0gz",ongoing_card_count_date:"AdmissionApplicationRequest_ongoing_card_count_date__xi1+1",ongoing_card_count_container:"AdmissionApplicationRequest_ongoing_card_count_container__af9uG",applicant_card_reciept:"AdmissionApplicationRequest_applicant_card_reciept__QR+Ho",transfer_container:"AdmissionApplicationRequest_transfer_container__y5X5q",transfer_select_btn:"AdmissionApplicationRequest_transfer_select_btn__u8NkN"}}}]);
//# sourceMappingURL=3731.f5c0b99b.chunk.js.map