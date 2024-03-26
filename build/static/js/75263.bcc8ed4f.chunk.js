"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[75263],{83669:function(e,n,o){var t=o(1413),r=(o(72791),o(49384)),a=o(78499),i=o(80184);n.Z=function(e){var n=e.type,o=e.buttonText,_=e.disabled,c=e.customStyleButton,l=e.customStyleButtonText;return(0,i.jsxs)("button",{type:n,disabled:_,style:(0,t.Z)({},c),className:a.Z.button_main,children:[(0,i.jsx)("span",{style:(0,t.Z)({},l),children:o}),_&&(0,i.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,i.jsx)(r.Z,{})})]})}},75263:function(e,n,o){o.r(n);var t=o(4942),r=o(1413),a=o(29439),i=o(72791),_=o(95048),c=o(51717),l=o(13034),s=o(39230),m=o(51561),u=o(83669),d=o(66576),h=o(60332),f=o(97655),p=o(98734),b=o(80184),j={inputProps:{"aria-label":"Checkbox demo"}};n.default=function(e){var n=e.onRefetch,o=e.setIndex,v=(0,s.$G)().t,x=(0,i.useState)({bankAccountHolderName:"",bankAccountNumber:"",bankReAccountNumber:"",bankIfscCode:"",bankAccountPhoneNumber:"",GSTInfo:"",businessName:"",businessAddress:"",bankAccountType:"",gstSlab:"",razor_account:!1}),Z=(0,a.Z)(x,2),g=Z[0],y=Z[1],k=(0,i.useState)({razor_key:"",razor_id:"",re_razor_key:"",re_razor_id:"",razor_key_match:!1,razor_id_match:!1}),F=(0,a.Z)(k,2),z=F[0],J=F[1],N=(0,i.useState)({msg:"",run:!1}),C=(0,a.Z)(N,2),S=C[0],A=C[1],I=(0,i.useState)(!1),w=(0,a.Z)(I,2),T=w[0],M=w[1],L=(0,i.useState)(!1),H=(0,a.Z)(L,2),q=H[0],R=H[1],P=(0,i.useState)(!0),K=(0,a.Z)(P,2),O=K[0],W=K[1],G=(0,_.v9)((function(e){return e.idChange.id})),B=(0,d.fM)(),Q=(0,a.Z)(B,1)[0],D=function(e){J((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e.target.name,e.target.value))}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:c.Z.linkform,children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),M((function(e){return!e})),O?z.razor_key!==z.re_razor_key||z.razor_id!==z.re_razor_id?(J((function(e){return(0,r.Z)((0,r.Z)({},e),{},{razor_key_match:z.razor_key!==z.re_razor_key,razor_id_match:z.razor_id!==z.re_razor_id})})),M((function(e){return!e}))):Q({passbook:{razor_key:z.razor_key,razor_id:z.razor_id,bankAccountPhoneNumber:g.bankAccountPhoneNumber,razor_account:!0},id:"".concat(G)}).then((function(e){e.data.status&&(n(),o(0),M((function(e){return!e})))})).catch({}):g.bankAccountNumber===g.bankReAccountNumber&&g.bankIfscCode&&g.bankAccountHolderName?Q({passbook:g,id:"".concat(G)}).then((function(e){e.data.status&&(n(),o(0),M((function(e){return!e})))})).catch({}):(M((function(e){return!e})),A({msg:g.bankAccountNumber!==g.bankReAccountNumber?v("form_account_dose_not_match_label"):"Check all the entered details carefully",run:!0}))},children:[(0,b.jsx)(h.Z,{labelText:v("do_you_have_razor_pay_gateway"),name:"razorpay",onChange:function(e){W(e.target.value)},value:O,customStyleLabel:{fontWeight:"600"}}),O&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Z,{labelText:v("merchant_secret_id"),name:"razor_id",type:"text",placeholder:v("please_enter_merchant_id_of_payment_gateway"),value:z.razor_id,onChange:D,customStyleLabel:{fontWeight:"600"}}),(0,b.jsx)(f.Z,{labelText:v("confirm_merchant_secret_id"),name:"re_razor_id",type:"text",placeholder:v("re-enter_merchant_id_of_payment_gateway"),value:z.re_razor_id,onChange:D,customStyleLabel:{fontWeight:"600"},reAccount:z.razor_id_match?v("form_razor_id_dose_not_match_label"):""}),(0,b.jsx)(f.Z,{labelText:v("razorpay_key"),name:"razor_key",type:"text",placeholder:v("please_enter_razorpay_key"),value:z.razor_key,onChange:D,customStyleLabel:{fontWeight:"600"}}),(0,b.jsx)(f.Z,{labelText:v("confirm_razorpay_key"),name:"re_razor_key",type:"text",placeholder:v("re-enter_razorpay_key"),value:z.re_razor_key,onChange:D,customStyleLabel:{fontWeight:"600"},reAccount:z.razor_key_match?v("form_razor_key_dose_not_match_label"):""})]}),!O&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("acnt_holder")}),(0,b.jsx)("input",{type:"text",required:!0,placeholder:v("enter_name"),name:"bankAccountHolderName",value:g.bankAccountHolderName,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankAccountHolderName:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("account_type")}),(0,b.jsxs)("select",{className:c.Z.selectAccount,name:"bankAccountType",value:g.bankAccountType,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankAccountType:e.target.value}))},required:!0,children:[(0,b.jsx)("option",{value:"Select Account Type",disabled:!0,children:v("select_account_type")}),(0,b.jsx)("option",{value:"Saving",children:v("saving")}),(0,b.jsx)("option",{value:"Current",children:v("current")})]})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("account_holder")}),(0,b.jsx)("input",{type:"number",required:!0,placeholder:v("enter_account_no"),name:"bankAccountNumber",value:g.bankAccountNumber,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankAccountNumber:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("confirm_account")}),(0,b.jsx)("input",{type:"number",required:!0,placeholder:v("please_confirm"),name:"bankReAccountNumber",value:g.bankReAccountNumber,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankReAccountNumber:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:"IFSC Code"}),(0,b.jsx)("input",{type:"text",required:!0,placeholder:v("enter_ifsc"),pattern:"[a-zA-Z0-9]+",name:"bankIfscCode",value:g.bankIfscCode,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankIfscCode:e.target.value}))}})]})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("mobil_optional")}),(0,b.jsx)("input",{type:"text",pattern:"[789][0-9]{9}",placeholder:v("enter_mobile"),name:"bankAccountPhoneNumber",title:"Please enter valid phone number",value:g.bankAccountPhoneNumber,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{bankAccountPhoneNumber:e.target.value}))}})]}),!O&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:c.Z.gstcheck,children:[(0,b.jsx)("h6",{children:v("add_gst")}),(0,b.jsx)("div",{className:c.Z.checkbox,children:(0,b.jsx)(l.Z,(0,r.Z)({onClick:function(){return R(!q)}},j))})]}),q&&(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("gst")}),(0,b.jsx)("input",{type:"text",name:"GSTInfo",required:!0,pattern:"[a-zA-Z0-9]+",placeholder:v("enter_gst"),value:g.GSTInfo,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{GSTInfo:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("gst_slab")}),(0,b.jsx)("input",{type:"number",name:"gstSlab",required:!0,min:"0",max:"18",placeholder:v("enter_gst_slab"),value:g.gstSlab,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{gstSlab:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("business_name")}),(0,b.jsx)("input",{type:"text",name:"businessName",required:!0,placeholder:v("enter_business_name"),value:g.businessName,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{businessName:e.target.value}))}})]}),(0,b.jsxs)("div",{className:c.Z.input,children:[(0,b.jsx)("h6",{children:v("business_add")}),(0,b.jsx)("input",{type:"text",name:"businessAddress",required:!0,placeholder:v("enter_business_add"),value:g.businessAddress,onChange:function(e){y((0,r.Z)((0,r.Z)({},g),{},{businessAddress:e.target.value}))}})]})]})]}),(0,b.jsx)(u.Z,{customStyleButton:{marginTop:"1vw"},type:"submit",disabled:T,buttonText:v("linked_account")})]})}),(0,b.jsx)(m.Ch,{msg:S.msg,run:S.run,setRun:function(){return A({msg:"",run:!1})},postiton:"bottom",type:"error"}),T&&(0,b.jsx)(p.Z,{})]})}},97655:function(e,n,o){var t=o(1413),r=(o(72791),o(39230)),a=o(38733),i=o(80184);n.Z=function(e){var n=e.labelText,o=e.name,_=e.type,c=e.value,l=e.onChange,s=e.placeholder,m=e.errorShow,u=e.customStyleContainer,d=e.customStyleLabel,h=e.customStyleInput,f=e.inputLength,p=e.reAccount,b=e.disabled,j=(0,r.$G)().t;return(0,i.jsxs)("div",{className:a.Z.join_form_container,style:(0,t.Z)({},u),children:[(0,i.jsxs)("label",{className:a.Z.join_form_label,htmlFor:o,style:(0,t.Z)({},d),children:[n," ",!p&&m&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",j("form_require_label")]}),p&&(0,i.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:p})]}),"tel"===_?(0,i.jsx)("input",{className:a.Z.join_form_input,type:_,value:c,onChange:l,name:o,placeholder:s,maxLength:null!==f&&void 0!==f?f:100,disabled:b,style:h}):(0,i.jsx)("input",{className:a.Z.join_form_input,type:_,value:c,onChange:l,name:o,placeholder:s,disabled:b,style:h})]})}},60332:function(e,n,o){var t=o(1413),r=(o(72791),o(39230)),a=o(38733),i=o(80184);n.Z=function(e){var n=e.labelText,o=e.name,_=e.value,c=e.onChange,l=e.customStyleContainer,s=e.customStyleLabel,m=e.disabled,u=(0,r.$G)().t;return(0,i.jsxs)("div",{className:a.Z.join_form_container,style:(0,t.Z)({},l),children:[(0,i.jsx)("label",{className:a.Z.join_form_label,htmlFor:o,style:(0,t.Z)({},s),children:n}),(0,i.jsxs)("div",{className:a.Z.join_form_file_container,children:[(0,i.jsx)("label",{className:"".concat(a.Z.join_form_yes," ").concat(_&&a.Z.join_form_active_background),onClick:function(){return m?{}:c({target:{name:"previousSchoolDocument",value:!0}})},children:u("yes")}),(0,i.jsx)("label",{className:"".concat(a.Z.join_form_no," ").concat(!_&&a.Z.join_form_active_background),onClick:function(){return m?{}:c({target:{name:"previousSchoolDocument",value:!1}})},children:u("no")})]})]})}},49384:function(e,n,o){o.d(n,{Z:function(){return a}});o(72791);var t=o(6307),r=o(80184),a=function(){return(0,r.jsx)(t.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},13034:function(e,n,o){o.d(n,{Z:function(){return F}});var t=o(4942),r=o(63366),a=o(87462),i=o(72791),_=o(59278),c=o(94419),l=o(12065),s=o(97278),m=o(74223),u=o(80184),d=(0,m.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,m.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,m.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=o(14036),b=o(31402),j=o(66934),v=o(64178),x=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Z=(0,j.ZP)(s.Z,{shouldForwardProp:function(e){return(0,j.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.indeterminate&&n.indeterminate,"default"!==o.color&&n["color".concat((0,p.Z)(o.color))]]}})((function(e){var n,o=e.theme,r=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===r.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===r.color?o.palette.action.active:o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,t.Z)(n,"&.".concat(v.Z.checked,", &.").concat(v.Z.indeterminate),{color:(o.vars||o).palette[r.color].main}),(0,t.Z)(n,"&.".concat(v.Z.disabled),{color:(o.vars||o).palette.action.disabled}),n))})),g=(0,u.jsx)(h,{}),y=(0,u.jsx)(d,{}),k=(0,u.jsx)(f,{}),F=i.forwardRef((function(e,n){var o,t,l=(0,b.Z)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,m=void 0===s?g:s,d=l.color,h=void 0===d?"primary":d,f=l.icon,j=void 0===f?y:f,F=l.indeterminate,z=void 0!==F&&F,J=l.indeterminateIcon,N=void 0===J?k:J,C=l.inputProps,S=l.size,A=void 0===S?"medium":S,I=l.className,w=(0,r.Z)(l,x),T=z?N:j,M=z?N:m,L=(0,a.Z)({},l,{color:h,indeterminate:z,size:A}),H=function(e){var n=e.classes,o=e.indeterminate,t=e.color,r=e.size,i={root:["root",o&&"indeterminate","color".concat((0,p.Z)(t)),"size".concat((0,p.Z)(r))]},_=(0,c.Z)(i,v.y,n);return(0,a.Z)({},n,_)}(L);return(0,u.jsx)(Z,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":z},C),icon:i.cloneElement(T,{fontSize:null!=(o=T.props.fontSize)?o:A}),checkedIcon:i.cloneElement(M,{fontSize:null!=(t=M.props.fontSize)?t:A}),ownerState:L,ref:n,className:(0,_.Z)(H.root,I)},w,{classes:H}))}))},64178:function(e,n,o){o.d(n,{y:function(){return a}});var t=o(75878),r=o(21217);function a(e){return(0,r.Z)("MuiCheckbox",e)}var i=(0,t.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]);n.Z=i},38733:function(e,n){n.Z={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}}}]);
//# sourceMappingURL=75263.bcc8ed4f.chunk.js.map