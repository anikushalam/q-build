"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[49641,83038,56762,54035,20420,31743,92571,87754,42226,35067],{65841:(e,_,n)=>{n.d(_,{IC:()=>i,ST:()=>r,kV:()=>t,xo:()=>l,zH:()=>o,zr:()=>a});const o={ALL_FEE_ACCESS:["students","message","fund","verification"],MULTI_APP_ACCESS:["students","message","ongoing","ongoing-detail","complete"],INQUIRY_ACCESS:["students","message"],REFUND_ACCESS:["students","message","excess"],PENDING_FEE_ACCESS:["students","message","pending","reminder-message"],ONE_TAB_ACCESS:["students","message","ongoing","ongoing-detail"],DATA_EXPORT_ACCESS:["students","message","export"],ONGOING_ACCESS:["ongoing","ongoing-detail"]},t={Application:"Application",Selected:"Selected","FEE COLLECTION TAB":"FEE COLLECTION TAB",Confirmed:"Confirmed","REVIEW TAB":"REVIEW TAB",Allotted:"Allotted",Cancelled:"Cancelled"},i={Application:[{label:"application",id:"application",urlKey:"",groupIs:["",null]}],Selected:[{label:"docs_collection",id:"document",urlKey:"&n=document",groupIs:["document"]}],"FEE COLLECTION TAB":[{label:"fees_collection",id:"fees",urlKey:"&n=fees",groupIs:["fees"]}],Confirmed:[{label:"confirmed",id:"confirmed",urlKey:"&n=confirmed",groupIs:["confirmed","confirmed-multi"]}],"REVIEW TAB":[{label:"review",id:"review",urlKey:"&n=review",groupIs:["review","review-multi"]}],Allotted:[{label:"allottment",id:"allottment",urlKey:"&n=allottment",groupIs:["allottment"]}],Cancelled:[{label:"cancelled",id:"cancelled",urlKey:"&n=cancelled",groupIs:["cancelled"]}]},a=e=>{let _="";for(let n of e)_=_?"".concat(_," or ").concat(null===n||void 0===n?void 0:n.subjectName):"".concat(null===n||void 0===n?void 0:n.subjectName);return _},l={DATA_EXPORT_ACCESS:{subUrl:"export",authorizedKey:"data_export"},INQUIRY_ACCESS:{subUrl:"enq-application",authorizedKey:"admission_enquiry"},ONE_TAB_ACCESS:{subUrl:"ongoing",authorizedKey:"ongoing_admission"},MULTI_APP_ACCESS:{subUrl:"ongoing",nestedUrl:"ongoing-detail",authorizedKey:"ongoing_admission"},ONGOING_ACCESS:{subUrl:"ongoing",authorizedKey:"ongoing_admission"},ONGOING_VIEW_ACCESS:{subUrl:"ongoing",authorizedKey:"ongoing_admission"},COMBINED_APP_ACCESS:{subUrl:"combine-application",authorizedKey:"ongoing_admission"}},r=[{key:"CAP",name:"intake_type1"},{key:"AGAINST_CAP",name:"intake_type2"},{key:"IL",name:"intake_type3"},{key:"EWS",name:"intake_type4"},{key:"TFWS",name:"intake_type5"}]},61055:(e,_,n)=>{n.d(_,{Z:()=>l});var o=n(39230),t=n(52245),i=n(80184);const a=["tel","number"],l=e=>{let{label:_,name:n,msg:l,type:r,value:s,onChange:c,placeholder:m,maxLength:d,customFormInputContainer:u,customFormInputLabel:p,customFormInput:f,errorShow:y,disabled:h,children:I}=e;const{t:g}=(0,o.$G)();return(0,i.jsxs)("div",{className:t.Z.form_input_container,style:u,children:[_&&(0,i.jsxs)("label",{className:t.Z.form_input_label,style:p,htmlFor:n,children:[_,l?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:t.Z.form_input_label_error,children:[" "," "," ",l]})}):y?(0,i.jsxs)("span",{className:t.Z.form_input_label_error,children:["* ",g("form_require_label")]}):null,I]}),a.includes(r)?(0,i.jsx)("input",{className:t.Z.form_input,type:r,value:s,onChange:c,name:n,placeholder:m,maxLength:null!==d&&void 0!==d?d:100,disabled:h,style:f}):(0,i.jsx)("input",{className:t.Z.form_input,type:r,value:s,onChange:c,name:n,placeholder:m,disabled:h,style:f})]})}},38857:(e,_,n)=>{n.d(_,{Z:()=>r});var o=n(79864),t=n(54164),i=n(15783),a=n(80184);const l=e=>{let{modalState:_,isHide:n,customOverlayStyle:o,children:l}=e;return t.createPortal((0,a.jsx)("div",{className:i.Z.modal_overlay,style:{...o},children:l}),document.getElementById("overlay"))},r=e=>{let{onClose:_,modalState:n,customBackdropStyle:t,customOverlayStyle:i,children:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{onBackdropClose:_,customBackdropStyle:t}),(0,a.jsx)(l,{customOverlayStyle:i,children:r})]})}},63687:(e,_,n)=>{n.r(_),n.d(_,{default:()=>i});var o=n(59393),t=n(80184);const i=e=>{let{customStyle:_,children:n}=e;return(0,t.jsx)("div",{className:o.Z.user_member_container_wrapper,style:_,children:n})}},2651:(e,_,n)=>{n.d(_,{Z:()=>i});var o=n(15783),t=n(80184);const i=e=>{let{title:_,subtitle:n,customStyleContainer:i,costomTextTitleStyle:a,costomTextSubtitleStyle:l}=e;return(0,t.jsxs)("div",{className:o.Z.empty_container,style:i,children:[_&&(0,t.jsx)("h6",{style:a,children:_}),n&&(0,t.jsx)("p",{style:l,children:n})]})}},91427:(e,_,n)=>{n.d(_,{f:()=>o});const o=e=>e%10===0},79864:(e,_,n)=>{n.d(_,{Z:()=>l});var o=n(72791),t=n(54164),i=n(15783),a=n(80184);const l=e=>{let{onBackdropClose:_,customBackdropStyle:n}=e;const l=(0,o.useCallback)((()=>{if(!_)return null;_()}),[_]);return t.createPortal((0,a.jsx)("div",{className:i.Z.modal_backdrop,onClick:l,style:n}),document.getElementById("backdrop"))}},52245:(e,_,n)=>{n.d(_,{Z:()=>o});const o={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},16925:(e,_,n)=>{n.d(_,{Z:()=>o});const o={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}},15783:(e,_,n)=>{n.d(_,{Z:()=>o});const o={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=49641.46e78a1e.chunk.js.map