"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[48337],{61055:(e,n,t)=>{t.d(n,{Z:()=>s});var _=t(39230),o=t(52245),r=t(80184);const a=["tel","number"],s=e=>{let{label:n,name:t,msg:s,type:i,value:c,onChange:l,placeholder:m,maxLength:d,customFormInputContainer:u,customFormInputLabel:p,customFormInput:h,errorShow:f,disabled:j,children:g}=e;const{t:v}=(0,_.$G)();return(0,r.jsxs)("div",{className:o.Z.form_input_container,style:u,children:[n&&(0,r.jsxs)("label",{className:o.Z.form_input_label,style:p,htmlFor:t,children:[n,s?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("span",{className:o.Z.form_input_label_error,children:[" "," "," ",s]})}):f?(0,r.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",v("form_require_label")]}):null,g]}),a.includes(i)?(0,r.jsx)("input",{className:o.Z.form_input,type:i,value:c,onChange:l,name:t,placeholder:m,maxLength:null!==d&&void 0!==d?d:100,disabled:j,style:h}):(0,r.jsx)("input",{className:o.Z.form_input,type:i,value:c,onChange:l,name:t,placeholder:m,disabled:j,style:h})]})}},48293:(e,n,t)=>{t.d(n,{Z:()=>c});var _=t(72791),o=t(54164),r=t(15783),a=t(80184);const s=e=>{let{onBackdropClose:n,customBackdropStyle:t}=e;const s=(0,_.useCallback)((()=>{if(!n)return null;n()}),[n]);return o.createPortal((0,a.jsx)("div",{className:r.Z.modal_backdrop,onClick:s,style:t}),document.getElementById("backdrop"))},i=e=>{let{modalState:n,isHide:t,customOverlayStyle:_,children:s}=e;return o.createPortal((0,a.jsx)("div",{className:r.Z.modal_overlay,style:{..._},children:s}),document.getElementById("overlay"))},c=e=>{let{onClose:n,modalState:t,customBackdropStyle:_,customOverlayStyle:o,children:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{onBackdropClose:n,customBackdropStyle:_}),(0,a.jsx)(i,{customOverlayStyle:o,children:r})]})}},89064:(e,n,t)=>{t.d(n,{Z:()=>i});var _=t(55336),o=t(48293);const r="Modal_modal_menu_card__d0zzt";var a=t(90904),s=t(80184);const i=e=>{let{onClose:n,disabled:t,heading:i,customStyle:c,children:l}=e;return(0,s.jsx)(o.Z,{onClose:()=>{if(t)return null;n()},children:(0,s.jsxs)("div",{className:r,style:c,children:[i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{children:i}),(0,s.jsx)(a.Z,{})]}):null,l,t&&(0,s.jsx)(_.Z,{})]})})}},19056:(e,n,t)=>{t.d(n,{Z:()=>i});var _=t(72791),o=t(39230),r=t(52245),a=t(98684),s=t(80184);const i=e=>{let{selectLabel:n,onClick:t,selectedValue:i,options:c,customStyleContainer:l,customLabelStyle:m,customListStyle:d,errorShow:u,defalutValue:p,isDenied:h}=e;const{t:f}=(0,o.$G)(),[j,g]=(0,_.useState)(!1),[v,x]=(0,_.useState)(""),Z=()=>{h||g((e=>!e))};(0,_.useEffect)((()=>{p&&x(p)}),[p]);return(0,s.jsxs)("div",{className:r.Z.form_input_container,style:{...l},children:[(0,s.jsxs)("p",{className:r.Z.join_form_select_paragraph,style:{...m},children:[n,u&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,s.jsxs)("section",{className:r.Z.join_form_select_custom,onClick:Z,children:[v?(0,s.jsx)("p",{className:r.Z.join_form_select_custom_paragraph,children:null!==v&&void 0!==v?v:""}):(0,s.jsx)("p",{className:r.Z.join_form_select_custom_paragraph,children:i}),j?(0,s.jsx)("img",{className:r.Z.join_form_select_custom_rotate_icon,src:"".concat(a.J7,"/down.svg"),alt:"categor icon"}):(0,s.jsx)("img",{className:r.Z.join_form_select_custom_icon,src:"".concat(a.J7,"/down.svg"),alt:"categor icon"})]}),(0,s.jsx)("section",{children:j&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:r.Z.join_form_select_custom_list,style:d,children:null===c||void 0===c?void 0:c.map(((e,n)=>(0,s.jsx)("p",{onClick:()=>{return t(n=e),Z(),void x(n);var n},className:r.Z.join_form_select_custom_paragraph_option,children:e},n)))})})})]})}},48337:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var _=t(72791),o=t(39230),r=t(23441),a=t(43317),s=t(91427),i=t(57588),c=t(98684),l=t(93638),m=t(90904),d=t(63687),u=t(21348),p=t(55336),h=t(1669),f=t(2651),j=t(16871),g=t(43504),v=t(2034),x=t(89064),Z=t(80184);const I=e=>{let{aid:n,onClose:t,menuData:r,onRefetch:s}=e;const{t:i}=(0,o.$G)(),[c,l]=(0,_.useState)(!1),[m]=(0,a.zg)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(x.Z,{onClose:t,disabled:c,children:(0,Z.jsx)("h6",{onClick:()=>{null!==r&&void 0!==r&&r._id&&n&&(l((e=>!e)),m({aid:n,bodyParameter:{sgid:null===r||void 0===r?void 0:r._id}}).then((()=>{s(),l((e=>!e)),t()})).catch({}))},children:i("delete")})})})},b=e=>{let{subCri:n,aid:t,onRefetch:o}=e;const r=(0,j.TH)(),a=(0,j.UO)(),[s,i]=(0,_.useState)(!1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g.rU,{to:"/q/".concat(a.username,"/member/staff/admission?type=criteria-detail"),state:{...r.state,subCri:n},children:(0,Z.jsxs)("div",{className:v.Z.smc_card,children:[(0,Z.jsx)("div",{className:v.Z.smc_card_contatiner,children:(0,Z.jsx)("div",{className:v.Z.smc_card_contatiner,children:(0,Z.jsx)("div",{className:v.Z.smc_card_contatiner_inner,children:(0,Z.jsx)("h6",{children:null===n||void 0===n?void 0:n.subject_group_name})})})}),(0,Z.jsx)("img",{src:"".concat(c.J7,"/menu.svg"),alt:"menu icon",onClick:e=>{e.preventDefault(),i((e=>!e))}})]})}),s&&(0,Z.jsx)(I,{onClose:()=>i((e=>!e)),aid:t,menuData:n,onRefetch:o})]})};var y=t(99183),S=t(48293),C=t(61055),N=t(16925),U=t(19056);const k=e=>{let{onClose:n,onRefetch:t,aid:r}=e;const{t:s}=(0,o.$G)(),[i,d]=(0,_.useState)(""),[h,f]=(0,_.useState)(!1),[j,g]=(0,_.useState)({subject_group_name:"",no_of_group:""}),[v]=(0,a.EE)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(S.Z,{onClose:n,children:(0,Z.jsxs)("div",{className:N.Z.modal_container,children:[(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)("div",{className:N.Z.modal_container_outer_header,children:[(0,Z.jsx)("div",{className:N.Z.modal_container_header,children:(0,Z.jsx)("h6",{children:s("add_group")})}),(0,Z.jsx)("img",{src:"".concat(c.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,Z.jsx)(m.Z,{}),(0,Z.jsxs)(u.Z,{customStyle:{paddingTop:"0"},children:[(0,Z.jsx)(C.Z,{label:s("group_name"),placeholder:s("group_name_placeholder"),name:"subject_group_name",value:j.subject_group_name,type:"text",onChange:e=>{g((n=>({...n,[e.target.name]:e.target.value})))},errorShow:i.subject_group_name}),(0,Z.jsx)(U.Z,{selectLabel:s("number_of_groups"),selectedValue:s("number_of_groups_placeholder"),defalutValue:j.no_of_group,onClick:e=>{g((n=>({...n,no_of_group:e})))},options:[1,2,3,4,5,6,7,8,9,10],errorShow:i.no_of_group}),(0,Z.jsx)(l.Z,{label:"add",onAction:()=>{let e=(0,y.l)(j,[]);(0,y.x)(e)&&r?(f((e=>!e)),v({aid:r,bodyParameter:{...j,no_of_group:+j.no_of_group}}).then((()=>{t(),f((e=>!e)),n()})).catch({})):d(e)}})]}),h&&(0,Z.jsx)(p.Z,{})]})})})};var L=t(56959);const B=e=>{var n,t,j,g;let{aid:v}=e;const{t:x}=(0,o.$G)(),[I,y]=(0,_.useState)(!1),[S,C]=(0,_.useState)(""),[N,U]=(0,_.useState)(1),[B,F]=(0,_.useState)(!0),[G,w]=(0,r.YD)({skip:S}),{admissionOuterGroupList:M,admissionOuterGroupListLoading:q,admissionOuterGroupListRefetch:E}=(0,a.XN)({data:{aid:v,page:N,limit:10,search:S},skip:!v});(0,_.useEffect)((()=>{w&&B&&U((e=>e+1))}),[w,B]),(0,_.useEffect)((()=>{var e;if(null!==M&&void 0!==M&&null!==(e=M.list)&&void 0!==e&&e.length){var n;let e=(0,s.f)(null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length);F((()=>e))}}),[null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length]);const J=(0,_.useCallback)((0,i.J)((e=>{U((()=>1)),C(e)}),1500),[]),O=()=>{y((e=>!e))},R=()=>{U((()=>1)),C(""),E()};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)("div",{className:L.Z.fm_header_container,children:[(0,Z.jsx)("h6",{children:x("subject_criteria")}),(0,Z.jsxs)("div",{className:L.Z.fm_search,children:[(0,Z.jsx)("section",{className:L.Z.fm_search_container,children:(0,Z.jsxs)("div",{className:L.Z.fm_search_container_inner,children:[(0,Z.jsx)("img",{className:L.Z.fm_search_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,Z.jsx)("input",{type:"text",placeholder:x("search"),onChange:e=>{e.target.value?J(e.target.value):(U((()=>1)),C(""))}})]})}),(0,Z.jsx)(l.Z,{label:"add",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:O})]})]})}),(0,Z.jsx)(m.Z,{}),(0,Z.jsxs)(u.Z,{children:[null===M||void 0===M||null===(t=M.list)||void 0===t?void 0:t.map(((e,n)=>{var t;return(null===M||void 0===M||null===(t=M.list)||void 0===t?void 0:t.length)===n+1?(0,Z.jsx)("div",{ref:G,children:(0,Z.jsx)(b,{subCri:e,onRefetch:R,aid:v})},null===e||void 0===e?void 0:e._id):(0,Z.jsx)(b,{subCri:e,onRefetch:R,aid:v},null===e||void 0===e?void 0:e._id)})),q?S?(0,Z.jsx)(p.Z,{}):(0,Z.jsx)(h.Z,{}):S?0===(null===M||void 0===M||null===(j=M.list)||void 0===j?void 0:j.length)&&(0,Z.jsx)(f.Z,{title:"No item found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===M||void 0===M||null===(g=M.list)||void 0===g?void 0:g.length)&&(0,Z.jsx)(f.Z,{title:"No item.",customStyleContainer:{marginTop:"1.5rem"}})]})]}),I&&(0,Z.jsx)(k,{onClose:O,aid:v,onRefetch:R})]})}},99183:(e,n,t)=>{t.d(n,{l:()=>_,x:()=>o});const _=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(let _ in e)null!==n&&void 0!==n&&n.includes(_)||e[_]||(t[_]="* required");return t},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let n in e)return!1;return!0}},52245:(e,n,t)=>{t.d(n,{Z:()=>_});const _={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},16925:(e,n,t)=>{t.d(n,{Z:()=>_});const _={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w"}},2034:(e,n,t)=>{t.d(n,{Z:()=>_});const _={smc_card:"StoreManager_smc_card__eEs0G",smc_card_active:"StoreManager_smc_card_active__Im3Y7",smc_card_contatiner:"StoreManager_smc_card_contatiner__ese7w",smccc_inner:"StoreManager_smccc_inner__qlGyG",smc_card_contatiner_inner:"StoreManager_smc_card_contatiner_inner__fU6mu",menu_icon:"StoreManager_menu_icon__CGeq4"}}}]);
//# sourceMappingURL=48337.855c7ffa.chunk.js.map