"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[48337],{61055:(e,_,n)=>{n.d(_,{Z:()=>r});var t=n(39230),o=n(52245),a=n(80184);const i=["tel","number"],r=e=>{let{label:_,name:n,msg:r,type:s,value:l,onChange:c,placeholder:d,maxLength:m,customFormInputContainer:u,customFormInputLabel:p,customFormInput:h,errorShow:f,disabled:v,children:j}=e;const{t:g}=(0,t.$G)();return(0,a.jsxs)("div",{className:o.Z.form_input_container,style:u,children:[_&&(0,a.jsxs)("label",{className:o.Z.form_input_label,style:p,htmlFor:n,children:[_,r?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("span",{className:o.Z.form_input_label_error,children:[" "," "," ",r]})}):f?(0,a.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",g("form_require_label")]}):null,j]}),i.includes(s)?(0,a.jsx)("input",{className:o.Z.form_input,type:s,value:l,onChange:c,name:n,placeholder:d,maxLength:null!==m&&void 0!==m?m:100,disabled:v,style:h}):(0,a.jsx)("input",{className:o.Z.form_input,type:s,value:l,onChange:c,name:n,placeholder:d,disabled:v,style:h})]})}},38857:(e,_,n)=>{n.d(_,{Z:()=>s});var t=n(79864),o=n(54164),a=n(15783),i=n(80184);const r=e=>{let{modalState:_,isHide:n,customOverlayStyle:t,children:r}=e;return o.createPortal((0,i.jsx)("div",{className:a.Z.modal_overlay,style:{...t},children:r}),document.getElementById("overlay"))},s=e=>{let{onClose:_,modalState:n,customBackdropStyle:o,customOverlayStyle:a,children:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{onBackdropClose:_,customBackdropStyle:o}),(0,i.jsx)(r,{customOverlayStyle:a,children:s})]})}},89064:(e,_,n)=>{n.d(_,{Z:()=>s});var t=n(55336),o=n(38857);const a="Modal_modal_menu_card__d0zzt";var i=n(90904),r=n(80184);const s=e=>{let{onClose:_,disabled:n,heading:s,customStyle:l,children:c}=e;return(0,r.jsx)(o.Z,{onClose:()=>{if(n)return null;_()},children:(0,r.jsxs)("div",{className:a,style:l,children:[s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h5",{children:s}),(0,r.jsx)(i.Z,{})]}):null,c,n&&(0,r.jsx)(t.Z,{})]})})}},19056:(e,_,n)=>{n.d(_,{Z:()=>s});var t=n(72791),o=n(39230),a=n(52245),i=n(98684),r=n(80184);const s=e=>{let{selectLabel:_,onClick:n,selectedValue:s,options:l,customStyleContainer:c,customLabelStyle:d,customListStyle:m,errorShow:u,defalutValue:p,isDenied:h}=e;const{t:f}=(0,o.$G)(),[v,j]=(0,t.useState)(!1),[g,y]=(0,t.useState)(""),x=()=>{h||j((e=>!e))};(0,t.useEffect)((()=>{p&&y(p)}),[p]);return(0,r.jsxs)("div",{className:a.Z.form_input_container,style:{...c},children:[(0,r.jsxs)("p",{className:a.Z.join_form_select_paragraph,style:{...d},children:[_,u&&(0,r.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,r.jsxs)("section",{className:a.Z.join_form_select_custom,onClick:x,children:[g?(0,r.jsx)("p",{className:a.Z.join_form_select_custom_paragraph,children:null!==g&&void 0!==g?g:""}):(0,r.jsx)("p",{className:a.Z.join_form_select_custom_paragraph,children:s}),v?(0,r.jsx)("img",{className:a.Z.join_form_select_custom_rotate_icon,src:"".concat(i.J7,"/down.svg"),alt:"categor icon"}):(0,r.jsx)("img",{className:a.Z.join_form_select_custom_icon,src:"".concat(i.J7,"/down.svg"),alt:"categor icon"})]}),(0,r.jsx)("section",{children:v&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:a.Z.join_form_select_custom_list,style:m,children:null===l||void 0===l?void 0:l.map(((e,_)=>(0,r.jsx)("p",{onClick:()=>{return n(_=e),x(),void y(_);var _},className:a.Z.join_form_select_custom_paragraph_option,children:e},_)))})})})]})}},63687:(e,_,n)=>{n.d(_,{Z:()=>a});var t=n(59393),o=n(80184);const a=e=>{let{customStyle:_,children:n}=e;return(0,o.jsx)("div",{className:t.Z.user_member_container_wrapper,style:_,children:n})}},48337:(e,_,n)=>{n.r(_),n.d(_,{default:()=>L});var t=n(72791),o=n(39230),a=n(23441),i=n(43317),r=n(91427),s=n(98684),l=n(93638),c=n(90904),d=n(63687),m=n(21348),u=n(55336),p=n(1669),h=n(2651),f=n(16871),v=n(43504),j=n(2034),g=n(89064),y=n(80184);const x=e=>{let{aid:_,onClose:n,menuData:a,onRefetch:r}=e;const{t:s}=(0,o.$G)(),[l,c]=(0,t.useState)(!1),[d]=(0,i.zg)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(g.Z,{onClose:n,disabled:l,children:(0,y.jsx)("h6",{onClick:()=>{null!==a&&void 0!==a&&a._id&&_&&(c((e=>!e)),d({aid:_,bodyParameter:{sgid:null===a||void 0===a?void 0:a._id}}).then((()=>{r(),c((e=>!e)),n()})).catch({}))},children:s("delete")})})})},Z=e=>{var _;let{subCri:n,aid:o,onRefetch:a}=e;const i=(0,f.TH)(),r=(0,f.UO)(),[l,c]=(0,t.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.rU,{to:"Institute"===(null===(_=i.state)||void 0===_?void 0:_.urlOffSet)?"/q/".concat(r.username,"/institute/member/admission?type=criteria-detail"):"/q/".concat(r.username,"/member/staff/admission?type=criteria-detail"),state:{...i.state,subCri:n},children:(0,y.jsxs)("div",{className:j.Z.smc_card,children:[(0,y.jsx)("div",{className:j.Z.smc_card_contatiner,children:(0,y.jsx)("div",{className:j.Z.smc_card_contatiner,children:(0,y.jsx)("div",{className:j.Z.smc_card_contatiner_inner,children:(0,y.jsx)("h6",{children:null===n||void 0===n?void 0:n.subject_group_name})})})}),(0,y.jsx)("img",{src:"".concat(s.J7,"/menu.svg"),alt:"menu icon",onClick:e=>{e.preventDefault(),c((e=>!e))}})]})}),l&&(0,y.jsx)(x,{onClose:()=>c((e=>!e)),aid:o,menuData:n,onRefetch:a})]})};var b=n(99183),I=n(38857),U=n(61055),S=n(16925),C=n(19056);const N=e=>{let{onClose:_,onRefetch:n,aid:a}=e;const{t:r}=(0,o.$G)(),[d,p]=(0,t.useState)(""),[h,f]=(0,t.useState)(!1),[v,j]=(0,t.useState)({subject_group_name:"",no_of_group:""}),[g]=(0,i.EE)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(I.Z,{onClose:_,children:(0,y.jsxs)("div",{className:S.Z.modal_container,children:[(0,y.jsx)(m.Z,{children:(0,y.jsxs)("div",{className:S.Z.modal_container_outer_header,children:[(0,y.jsx)("div",{className:S.Z.modal_container_header,children:(0,y.jsx)("h6",{children:r("add_group")})}),(0,y.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:_})]})}),(0,y.jsx)(c.Z,{}),(0,y.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,y.jsx)(U.Z,{label:r("group_name"),placeholder:r("group_name_placeholder"),name:"subject_group_name",value:v.subject_group_name,type:"text",onChange:e=>{j((_=>({..._,[e.target.name]:e.target.value})))},errorShow:d.subject_group_name}),(0,y.jsx)(C.Z,{selectLabel:r("number_of_groups"),selectedValue:r("number_of_groups_placeholder"),defalutValue:v.no_of_group,onClick:e=>{j((_=>({..._,no_of_group:e})))},options:[1,2,3,4,5,6,7,8,9,10],errorShow:d.no_of_group}),(0,y.jsx)(l.Z,{label:"add",onAction:()=>{let e=(0,b.l)(v,[]);(0,b.x)(e)&&a?(f((e=>!e)),g({aid:a,bodyParameter:{...v,no_of_group:+v.no_of_group}}).then((()=>{n(),f((e=>!e)),_()})).catch({})):p(e)}})]}),h&&(0,y.jsx)(u.Z,{})]})})})};var k=n(56959);const L=e=>{var _,n,f,v;let{aid:j}=e;const{t:g}=(0,o.$G)(),[x,b]=(0,t.useState)(!1),[I,U]=(0,t.useState)(""),[S,C]=(0,t.useState)(""),[L,B]=(0,t.useState)(1),[G,w]=(0,t.useState)(!0),[F,q]=(0,a.YD)({skip:I}),{admissionOuterGroupList:E,admissionOuterGroupListLoading:M,admissionOuterGroupListRefetch:O}=(0,i.XN)({data:{aid:j,page:L,limit:10,search:I},skip:!j});(0,t.useEffect)((()=>{q&&G&&B((e=>e+1))}),[q,G]),(0,t.useEffect)((()=>{var e;if(null!==E&&void 0!==E&&null!==(e=E.list)&&void 0!==e&&e.length){var _;let e=(0,r.f)(null===E||void 0===E||null===(_=E.list)||void 0===_?void 0:_.length);w((()=>e))}}),[null===E||void 0===E||null===(_=E.list)||void 0===_?void 0:_.length]);const T=()=>{b((e=>!e))},P=()=>{B((()=>1)),U(""),O()};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(m.Z,{children:(0,y.jsxs)("div",{className:k.Z.fm_header_container,children:[(0,y.jsx)("h6",{children:g("subject_criteria")}),(0,y.jsxs)("div",{className:k.Z.fm_search,children:[(0,y.jsx)("section",{className:k.Z.fm_search_container,children:(0,y.jsxs)("div",{className:k.Z.fm_search_container_inner,children:[(0,y.jsx)("img",{className:k.Z.fm_search_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,y.jsx)("input",{type:"text",placeholder:g("search"),onChange:e=>{var _;!M&&(null===E||void 0===E||null===(_=E.list)||void 0===_?void 0:_.length)>=0&&(e.target.value?C(e.target.value):(C(""),U("")))},onKeyUp:e=>{"Enter"===e.key&&(B((()=>1)),U(S))},value:S})]})}),(0,y.jsx)(l.Z,{label:"add",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:T})]})]})}),(0,y.jsx)(c.Z,{}),(0,y.jsxs)(m.Z,{children:[null===E||void 0===E||null===(n=E.list)||void 0===n?void 0:n.map(((e,_)=>{var n;return(null===E||void 0===E||null===(n=E.list)||void 0===n?void 0:n.length)===_+1?(0,y.jsx)("div",{ref:F,children:(0,y.jsx)(Z,{subCri:e,onRefetch:P,aid:j})},null===e||void 0===e?void 0:e._id):(0,y.jsx)(Z,{subCri:e,onRefetch:P,aid:j},null===e||void 0===e?void 0:e._id)})),M?I?(0,y.jsx)(u.Z,{}):(0,y.jsx)(y.Fragment,{children:1===L?(0,y.jsx)(u.Z,{}):(0,y.jsx)(p.Z,{})}):I?0===(null===E||void 0===E||null===(f=E.list)||void 0===f?void 0:f.length)&&(0,y.jsx)(h.Z,{title:"No item found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===E||void 0===E||null===(v=E.list)||void 0===v?void 0:v.length)&&(0,y.jsx)(h.Z,{title:"No item.",customStyleContainer:{marginTop:"1.5rem"}})]})]}),x&&(0,y.jsx)(N,{onClose:T,aid:j,onRefetch:P})]})}},2651:(e,_,n)=>{n.d(_,{Z:()=>a});var t=n(15783),o=n(80184);const a=e=>{let{title:_,subtitle:n,customStyleContainer:a,costomTextTitleStyle:i,costomTextSubtitleStyle:r}=e;return(0,o.jsxs)("div",{className:t.Z.empty_container,style:a,children:[_&&(0,o.jsx)("h6",{style:i,children:_}),n&&(0,o.jsx)("p",{style:r,children:n})]})}},91427:(e,_,n)=>{n.d(_,{f:()=>t});const t=e=>e%10===0},79864:(e,_,n)=>{n.d(_,{Z:()=>r});var t=n(72791),o=n(54164),a=n(15783),i=n(80184);const r=e=>{let{onBackdropClose:_,customBackdropStyle:n}=e;const r=(0,t.useCallback)((()=>{if(!_)return null;_()}),[_]);return o.createPortal((0,i.jsx)("div",{className:a.Z.modal_backdrop,onClick:r,style:n}),document.getElementById("backdrop"))}},99183:(e,_,n)=>{n.d(_,{l:()=>t,x:()=>o});const t=function(e){let _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let t in e)null!==_&&void 0!==_&&_.includes(t)||e[t]||(n[t]="* required");return n},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let _ in e)return!1;return!0}},52245:(e,_,n)=>{n.d(_,{Z:()=>t});const t={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},16925:(e,_,n)=>{n.d(_,{Z:()=>t});const t={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w"}},2034:(e,_,n)=>{n.d(_,{Z:()=>t});const t={smc_card:"StoreManager_smc_card__eEs0G",smc_card_active:"StoreManager_smc_card_active__Im3Y7",smc_card_contatiner:"StoreManager_smc_card_contatiner__ese7w",smccc_inner:"StoreManager_smccc_inner__qlGyG",smc_card_contatiner_inner:"StoreManager_smc_card_contatiner_inner__fU6mu",menu_icon:"StoreManager_menu_icon__CGeq4"}},15783:(e,_,n)=>{n.d(_,{Z:()=>t});const t={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=48337.db86c110.chunk.js.map