"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[69966],{61055:(e,i,t)=>{t.d(i,{Z:()=>a});var l=t(39230),n=t(52245),s=t(80184);const o=["tel","number"],a=e=>{let{label:i,name:t,msg:a,type:r,value:_,onChange:c,placeholder:d,maxLength:u,customFormInputContainer:m,customFormInputLabel:h,customFormInput:p,errorShow:v,disabled:g,children:f}=e;const{t:j}=(0,l.$G)();return(0,s.jsxs)("div",{className:n.Z.form_input_container,style:m,children:[i&&(0,s.jsxs)("label",{className:n.Z.form_input_label,style:h,htmlFor:t,children:[i,a?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("span",{className:n.Z.form_input_label_error,children:[" "," "," ",a]})}):v?(0,s.jsxs)("span",{className:n.Z.form_input_label_error,children:["* ",j("form_require_label")]}):null,f]}),o.includes(r)?(0,s.jsx)("input",{className:n.Z.form_input,type:r,value:_,onChange:c,name:t,placeholder:d,maxLength:null!==u&&void 0!==u?u:100,disabled:g,style:p}):(0,s.jsx)("input",{className:n.Z.form_input,type:r,value:_,onChange:c,name:t,placeholder:d,disabled:g,style:p})]})}},63687:(e,i,t)=>{t.d(i,{Z:()=>s});var l=t(59393),n=t(80184);const s=e=>{let{customStyle:i,children:t}=e;return(0,n.jsx)("div",{className:l.Z.user_member_container_wrapper,style:i,children:t})}},48801:(e,i,t)=>{t.d(i,{Z:()=>x});var l=t(49806),n=t(48293),s=t(21348),o=t(90904),a=t(98684),r=t(39230),_=t(72791),c=t(23441),d=t(91427),u=t(57588),m=t(80184);const h=e=>{var i,t;let{cls:n,selectedId:s,onSelect:o,selectList:r,isMultiSelect:_,onMultiSelect:c}=e;return(0,m.jsx)(m.Fragment,{children:_?(0,m.jsxs)("div",{className:l.Z.assign_show_list_each,onClick:()=>{c(n)},style:{border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"},children:[null!==r&&void 0!==r&&r.includes(null===n||void 0===n?void 0:n._id)?(0,m.jsx)("img",{src:"".concat(a.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,m.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(a.U_,"/uncheck.svg"),alt:"icon"}),(0,m.jsx)("div",{className:l.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(i=null===n||void 0===n?void 0:n.dName)&&void 0!==i?i:""})})]}):(0,m.jsx)("div",{className:l.Z.assign_show_list_each,style:s===(null===n||void 0===n?void 0:n._id)?{backgroundColor:"rgba(75, 26, 133, 0.1)",border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"}:{border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"},onClick:()=>{o(n)},children:(0,m.jsx)("div",{className:l.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(t=null===n||void 0===n?void 0:n.dName)&&void 0!==t?t:""})})})})};var p=t(55336),v=t(1669),g=t(2651),f=t(93638),j=t(32361);const x=e=>{var i,t,x,b;let{title:S,onClose:Z,selectedId:U,onSelectStaff:y,instituteId:I,isMultiSelect:N,onMultiSelect:k,selectList:C,onDone:M}=e;const{t:B}=(0,r.$G)(),[L,w]=(0,_.useState)(""),[P,F]=(0,_.useState)(1),[R,A]=(0,_.useState)(!0),[D,q]=(0,c.YD)({skip:L}),{instituteAllDepartment:J,instituteAllDepartmentLoading:T}=(0,j.Jv)({data:{id:I,page:P,limit:10,search:L},skip:!I});(0,_.useEffect)((()=>{q&&R&&F((e=>e+1))}),[q,R]),(0,_.useEffect)((()=>{var e;if(null!==J&&void 0!==J&&null!==(e=J.list)&&void 0!==e&&e.length){var i;let e=(0,d.f)(null===J||void 0===J||null===(i=J.list)||void 0===i?void 0:i.length);A((()=>e))}}),[null===J||void 0===J||null===(i=J.list)||void 0===i?void 0:i.length]);const E=(0,_.useCallback)((0,u.J)((e=>{F((()=>1)),w(e)}),1500),[]),W=e=>{U===(null===e||void 0===e?void 0:e._id)||y(e)};return(0,m.jsx)(n.Z,{onClose:Z,children:(0,m.jsxs)("div",{className:l.Z.modal_container,children:[(0,m.jsx)(s.Z,{children:(0,m.jsxs)("div",{className:l.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:l.Z.modal_container_header,children:(0,m.jsx)("h6",{children:B(null!==S&&void 0!==S?S:"department_list")})}),(0,m.jsxs)("div",{className:l.Z.modal_container_btn_container,children:[N&&(0,m.jsx)(f.Z,{label:B("select"),count:null===C||void 0===C?void 0:C.length,onAction:M,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,m.jsx)("img",{src:"".concat(a.J7,"/close.svg"),alt:"close icon",onClick:Z})]})]})}),(0,m.jsx)(o.Z,{}),(0,m.jsxs)(s.Z,{customStyle:{paddingBottom:"1rem"},children:[(0,m.jsxs)("div",{className:l.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,m.jsx)("input",{type:"text",placeholder:B("search"),className:l.Z.assign_search_input,onChange:e=>{e.target.value?E(e.target.value):(F((()=>1)),w(""))},style:{width:"100%"}}),(0,m.jsx)("img",{src:"".concat(a.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.map(((e,i)=>{var t;return(null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.length)===i+1?(0,m.jsx)("div",{ref:D,children:(0,m.jsx)(h,{cls:e,selectedId:U,onSelect:W,selectList:C,isMultiSelect:N,onMultiSelect:k})},null===e||void 0===e?void 0:e._id):(0,m.jsx)(h,{cls:e,selectedId:U,onSelect:W,selectList:C,isMultiSelect:N,onMultiSelect:k},null===e||void 0===e?void 0:e._id)})),T?L?(0,m.jsx)(p.Z,{}):(0,m.jsx)(v.Z,{}):L?0===(null===J||void 0===J||null===(x=J.list)||void 0===x?void 0:x.length)&&(0,m.jsx)(g.Z,{title:"No department found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===J||void 0===J||null===(b=J.list)||void 0===b?void 0:b.length)&&(0,m.jsx)(g.Z,{title:"No department.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},74125:(e,i,t)=>{t.d(i,{Z:()=>x});var l=t(49806),n=t(48293),s=t(21348),o=t(90904),a=t(98684),r=t(39230),_=t(72791),c=t(23441),d=t(91427),u=t(57588),m=t(80184);const h=e=>{var i,t;let{cls:n,selectedId:s,onSelect:o,selectList:r,isMultiSelect:_,onMultiSelect:c}=e;return(0,m.jsx)(m.Fragment,{children:_?(0,m.jsxs)("div",{className:l.Z.assign_show_list_each,onClick:()=>{c(n)},style:{border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"},children:[null!==r&&void 0!==r&&r.includes(null===n||void 0===n?void 0:n._id)?(0,m.jsx)("img",{src:"".concat(a.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,m.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(a.U_,"/uncheck.svg"),alt:"icon"}),(0,m.jsx)("div",{className:l.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(i=null===n||void 0===n?void 0:n.subjectName)&&void 0!==i?i:""})})]}):(0,m.jsx)("div",{className:l.Z.assign_show_list_each,style:s===(null===n||void 0===n?void 0:n._id)?{backgroundColor:"rgba(75, 26, 133, 0.1)",border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"}:{border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"},onClick:()=>{o(n)},children:(0,m.jsx)("div",{className:l.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(t=null===n||void 0===n?void 0:n.subjectName)&&void 0!==t?t:""})})})})};var p=t(55336),v=t(1669),g=t(2651),f=t(93638),j=t(43317);const x=e=>{var i,t,x,b;let{title:S,onClose:Z,selectedId:U,onSelectStaff:y,instituteId:I,isMultiSelect:N,onMultiSelect:k,selectList:C,onDone:M}=e;const{t:B}=(0,r.$G)(),[L,w]=(0,_.useState)(""),[P,F]=(0,_.useState)(1),[R,A]=(0,_.useState)(!0),[D,q]=(0,c.YD)({skip:L}),{admissionInstituteAllSubjectList:J,admissionInstituteAllSubjectListLoading:T}=(0,j.ry)({data:{id:I,page:P,limit:10,search:L},skip:!I});(0,_.useEffect)((()=>{q&&R&&F((e=>e+1))}),[q,R]),(0,_.useEffect)((()=>{var e;if(null!==J&&void 0!==J&&null!==(e=J.list)&&void 0!==e&&e.length){var i;let e=(0,d.f)(null===J||void 0===J||null===(i=J.list)||void 0===i?void 0:i.length);A((()=>e))}}),[null===J||void 0===J||null===(i=J.list)||void 0===i?void 0:i.length]);const E=(0,_.useCallback)((0,u.J)((e=>{F((()=>1)),w(e)}),1500),[]),W=e=>{U===(null===e||void 0===e?void 0:e._id)||y(e)};return(0,m.jsx)(n.Z,{onClose:Z,children:(0,m.jsxs)("div",{className:l.Z.modal_container,children:[(0,m.jsx)(s.Z,{children:(0,m.jsxs)("div",{className:l.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:l.Z.modal_container_header,children:(0,m.jsx)("h6",{children:B(null!==S&&void 0!==S?S:"subject_list")})}),(0,m.jsxs)("div",{className:l.Z.modal_container_btn_container,children:[N&&(0,m.jsx)(f.Z,{label:B("select"),count:null===C||void 0===C?void 0:C.length,onAction:M,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,m.jsx)("img",{src:"".concat(a.J7,"/close.svg"),alt:"close icon",onClick:Z})]})]})}),(0,m.jsx)(o.Z,{}),(0,m.jsxs)(s.Z,{customStyle:{paddingBottom:"1rem"},children:[(0,m.jsxs)("div",{className:l.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,m.jsx)("input",{type:"text",placeholder:B("search"),className:l.Z.assign_search_input,onChange:e=>{e.target.value?E(e.target.value):(F((()=>1)),w(""))},style:{width:"100%"}}),(0,m.jsx)("img",{src:"".concat(a.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.map(((e,i)=>{var t;return(null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.length)===i+1?(0,m.jsx)("div",{ref:D,children:(0,m.jsx)(h,{cls:e,selectedId:U,onSelect:W,selectList:C,isMultiSelect:N,onMultiSelect:k})},null===e||void 0===e?void 0:e._id):(0,m.jsx)(h,{cls:e,selectedId:U,onSelect:W,selectList:C,isMultiSelect:N,onMultiSelect:k},null===e||void 0===e?void 0:e._id)})),T?L?(0,m.jsx)(p.Z,{}):(0,m.jsx)(v.Z,{}):L?0===(null===J||void 0===J||null===(x=J.list)||void 0===x?void 0:x.length)&&(0,m.jsx)(g.Z,{title:"No subject found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===J||void 0===J||null===(b=J.list)||void 0===b?void 0:b.length)&&(0,m.jsx)(g.Z,{title:"No subject.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},2651:(e,i,t)=>{t.d(i,{Z:()=>s});var l=t(15783),n=t(80184);const s=e=>{let{title:i,subtitle:t,customStyleContainer:s,costomTextTitleStyle:o,costomTextSubtitleStyle:a}=e;return(0,n.jsxs)("div",{className:l.Z.empty_container,style:s,children:[i&&(0,n.jsx)("h6",{style:o,children:i}),t&&(0,n.jsx)("p",{style:a,children:t})]})}},99183:(e,i,t)=>{t.d(i,{l:()=>l,x:()=>n});const l=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(let l in e)null!==i&&void 0!==i&&i.includes(l)||e[l]||(t[l]="* required");return t},n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let i in e)return!1;return!0}},52245:(e,i,t)=>{t.d(i,{Z:()=>l});const l={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},49806:(e,i,t)=>{t.d(i,{Z:()=>l});const l={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}}}]);
//# sourceMappingURL=69966.28fd2b9a.chunk.js.map