"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[85743,63687],{19056:(_,e,t)=>{t.d(e,{Z:()=>a});var o=t(72791),i=t(39230),n=t(52245),s=t(98684),r=t(80184);const a=_=>{let{selectLabel:e,onClick:t,selectedValue:a,options:c,customStyleContainer:l,customLabelStyle:m,customListStyle:u,errorShow:p,defalutValue:f,isDenied:d,customFormInput:h}=_;const{t:j}=(0,i.$G)(),[I,U]=(0,o.useState)(!1),[x,v]=(0,o.useState)(""),g=()=>{d||U((_=>!_))};(0,o.useEffect)((()=>{f&&v(f)}),[f]);return(0,r.jsxs)("div",{className:n.Z.form_input_container,style:{...l},children:[(0,r.jsxs)("p",{className:n.Z.join_form_select_paragraph,style:{...m},children:[e,p&&(0,r.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",j("form_require_label")]})]}),(0,r.jsxs)("section",{className:n.Z.join_form_select_custom,onClick:g,children:[x?(0,r.jsx)("p",{className:n.Z.join_form_select_custom_paragraph,style:h,children:null!==x&&void 0!==x?x:""}):(0,r.jsx)("p",{className:n.Z.join_form_select_custom_paragraph,style:h,children:a}),I?(0,r.jsx)("img",{className:n.Z.join_form_select_custom_rotate_icon,src:"".concat(s.J7,"/down.svg"),alt:"categor icon"}):(0,r.jsx)("img",{className:n.Z.join_form_select_custom_icon,src:"".concat(s.J7,"/down.svg"),alt:"categor icon"})]}),(0,r.jsx)("section",{children:I&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:n.Z.join_form_select_custom_list,style:u,children:null===c||void 0===c?void 0:c.map(((_,e)=>(0,r.jsx)("p",{onClick:()=>{return t(e=_),g(),void v(e);var e},className:n.Z.join_form_select_custom_paragraph_option,children:_},e)))})})})]})}},63687:(_,e,t)=>{t.r(e),t.d(e,{default:()=>n});var o=t(59393),i=t(80184);const n=_=>{let{customStyle:e,children:t}=_;return(0,i.jsx)("div",{className:o.Z.user_member_container_wrapper,style:e,children:t})}},85743:(_,e,t)=>{t.r(e),t.d(e,{default:()=>f});var o=t(39230),i=t(56959),n=t(72791),s=t(63687),r=t(21348),a=t(90904),c=t(55336),l=t(19056),m=t(93638),u=t(43317),p=t(80184);const f=_=>{let{masterData:e,aid:t}=_;const{t:f}=(0,o.$G)(),[d,h]=(0,n.useState)(!1),[j,I]=(0,n.useState)({admission_form_print_case:"Standard"}),[U]=(0,u.jk)();(0,n.useEffect)((()=>{null!==e&&void 0!==e&&e.admission_form_print_case&&I((_=>({..._,admission_form_print_case:null===e||void 0===e?void 0:e.admission_form_print_case})))}),[null===e||void 0===e?void 0:e.admission_form_print_case]);return(0,p.jsxs)(s.default,{children:[(0,p.jsx)(r.default,{children:(0,p.jsx)("div",{className:i.Z.fm_header_container,children:(0,p.jsx)("h6",{children:f("setting")})})}),(0,p.jsx)(a.Z,{}),(0,p.jsxs)(r.default,{children:[(0,p.jsx)(l.Z,{selectLabel:f("admission_form_print_type"),selectedValue:f("admission_form_print_type_placeholder"),defalutValue:j.admission_form_print_case,onClick:_=>{return e=_,t="admission_form_print_case",void I((_=>({..._,[t]:e})));var e,t},options:["Standard","Title Case","Upper Case"],customStyleContainer:{width:"49%"},customListStyle:{position:"absolute",width:"100%",zIndex:"1"}}),(0,p.jsx)(m.Z,{label:"save",onAction:()=>{t&&(h((_=>!_)),U({aid:t,bodyParameter:j}).then((()=>{h((_=>!_))})).catch({}))}})]}),d&&(0,p.jsx)(c.default,{})]})}},52245:(_,e,t)=>{t.d(e,{Z:()=>o});const o={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}}}]);
//# sourceMappingURL=85743.4ac5ee7c.chunk.js.map