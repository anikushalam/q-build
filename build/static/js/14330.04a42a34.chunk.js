"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[14330,54035,20420,31743],{14330:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var _=a(72791),n=a(12072),r=a(1874),i=a(33992),o=a(81490),l=a(39230),c=a(16925),d=a(99183),s=a(48293),m=a(21348),p=a(90904),u=a(20659),h=a(26071),b=a(61055),v=a(93638),g=a(55336),x=a(98684),j=a(80184);const T=e=>{let{onClose:t,instituteId:a,departmentId:n,onParentClose:r}=e;const{t:o}=(0,l.$G)(),[T,y]=(0,_.useState)(""),[I,N]=(0,_.useState)(!1),[k,C]=(0,_.useState)({type:"",flow:""}),[D]=(0,i.Uu)(),U=e=>{C((t=>({...t,flow:e})))};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(s.Z,{onClose:t,children:(0,j.jsxs)("div",{className:c.Z.modal_container,children:[(0,j.jsx)(m.Z,{children:(0,j.jsxs)("div",{className:c.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:c.Z.modal_container_header,children:(0,j.jsx)("h6",{children:o("pin_department")})}),(0,j.jsx)("img",{src:"".concat(x.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,j.jsx)(p.Z,{}),(0,j.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(u.Z,{label:"dependency",children:null===Z||void 0===Z?void 0:Z.map((e=>(0,j.jsx)(h.Z,{tile:e,onTile:U,activeTile:null===k||void 0===k?void 0:k.flow},null===e||void 0===e?void 0:e.key)))}),"DEPENDENT"===k.flow?(0,j.jsx)(b.Z,{label:o("section_name"),placeholder:o("section_name_placeholder"),name:"type",value:k.type,type:"text",onChange:e=>{C((t=>({...t,[e.target.name]:e.target.value})))}}):null,(0,j.jsx)(v.Z,{label:"save",onAction:()=>{let e=(0,d.l)(k,["type"]);(0,d.x)(e)&&n&&a?(N((e=>!e)),D({id:a,bodyParameter:{...k,did:n}}).then((()=>{N((e=>!e)),r()})).catch({})):y(e)}})]}),I&&(0,j.jsx)(g.Z,{})]})})})},Z=[{key:"DEPENDENT",name:"dependent"},{key:"INDEPENDENT",name:"independent"}],y=e=>{let{onId:t,onOpenMenu:a,editOneDepartment:l,onReftech:c,instituteId:d}=e;const[s,m]=(0,_.useState)(""),[p]=(0,i.$1)();return(0,j.jsx)(j.Fragment,{children:1===s?(0,j.jsx)(T,{onClose:()=>m(""),onParentClose:a,instituteId:d,departmentId:t}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{onClose:a,customStyleBackdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}),(0,j.jsx)(n.Z,{children:(0,j.jsx)("div",{className:o.Z.edit_container,children:["Pin Department","Edit","Delete"].map(((e,_)=>(0,j.jsx)("h2",{value:e,onClick:()=>(e=>{"Edit"===e?(l(t),a()):"Delete"===e?p({did:t}).then((e=>{var t;"No"===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.deleted)||c(),a()})).catch({}):"Pin Department"===e&&m(1)})(e),children:e},_)))})})]})})}},1874:(e,t,a)=>{a.d(t,{Z:()=>i});a(72791);var _=a(54164),n=a(84489),r=a(80184);const i=e=>{let{onClose:t,customStyleBackdrop:a}=e;return(0,r.jsx)(r.Fragment,{children:_.createPortal((0,r.jsx)(n.Z,{onClose:t,customStyleBackdrop:a}),document.getElementById("backdrop"))})}},55336:(e,t,a)=>{a.d(t,{Z:()=>r});var _=a(63244),n=a(80184);const r=()=>(0,n.jsx)("div",{className:_.Z.qviple_loader_backdrop,children:(0,n.jsx)("div",{className:_.Z.qviple_loader_container,children:(0,n.jsx)("div",{className:_.Z.qviple_loader_rotation})})})},90904:(e,t,a)=>{a.d(t,{Z:()=>r});const _="BorderBottom_split_content__RVPoh";var n=a(80184);const r=e=>{let{customStyleBorder:t}=e;return(0,n.jsx)("hr",{className:_,style:t})}},61055:(e,t,a)=>{a.d(t,{Z:()=>o});var _=a(39230),n=a(52245),r=a(80184);const i=["tel","number"],o=e=>{let{label:t,name:a,msg:o,type:l,value:c,onChange:d,placeholder:s,maxLength:m,customFormInputContainer:p,customFormInputLabel:u,customFormInput:h,errorShow:b,disabled:v,children:g}=e;const{t:x}=(0,_.$G)();return(0,r.jsxs)("div",{className:n.Z.form_input_container,style:p,children:[t&&(0,r.jsxs)("label",{className:n.Z.form_input_label,style:u,htmlFor:a,children:[t,o?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("span",{className:n.Z.form_input_label_error,children:[" "," "," ",o]})}):b?(0,r.jsxs)("span",{className:n.Z.form_input_label_error,children:["* ",x("form_require_label")]}):null,g]}),i.includes(l)?(0,r.jsx)("input",{className:n.Z.form_input,type:l,value:c,onChange:d,name:a,placeholder:s,maxLength:null!==m&&void 0!==m?m:100,disabled:v,style:h}):(0,r.jsx)("input",{className:n.Z.form_input,type:l,value:c,onChange:d,name:a,placeholder:s,disabled:v,style:h})]})}},26071:(e,t,a)=>{a.d(t,{Z:()=>i});var _=a(51416),n=a(39230),r=a(80184);const i=e=>{let{tile:t,onTile:a,activeTile:i,customTileChild:o}=e;const{t:l}=(0,n.$G)();return(0,r.jsx)("div",{className:(null===t||void 0===t?void 0:t.key)===i?_.Z.tile_tile_active:_.Z.tile_tile,onClick:()=>a(null===t||void 0===t?void 0:t.key),style:o,children:l(null===t||void 0===t?void 0:t.name)})}},20659:(e,t,a)=>{a.d(t,{Z:()=>i});var _=a(51416),n=a(39230),r=a(80184);const i=e=>{let{label:t,customTileLabel:a,customTileContainer:i,customTileStyle:o,children:l}=e;const{t:c}=(0,n.$G)();return(0,r.jsxs)("div",{className:_.Z.tile_container,style:o,children:[t&&(0,r.jsx)("h6",{className:_.Z.tile_label,style:a,children:c(t)}),(0,r.jsx)("section",{className:_.Z.tile_tile_container,style:i,children:l})]})}},99183:(e,t,a)=>{a.d(t,{l:()=>_,x:()=>n});const _=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a={};for(let _ in e)null!==t&&void 0!==t&&t.includes(_)||e[_]||(a[_]="* required");return a},n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},81490:(e,t,a)=>{a.d(t,{Z:()=>_});const _={departments:"Departments_departments__MtyWV",deptcontainer:"Departments_deptcontainer__jvgAe",department_add_new:"Departments_department_add_new__e8m85",department_card_name:"Departments_department_card_name__YHN1k",department_card_head:"Departments_department_card_head__rMCPk",department_card_title:"Departments_department_card_title__pYCbV",department_conatiner:"Departments_department_conatiner__+CRQb",department_hr:"Departments_department_hr__Yx7B3",department_card_container:"Departments_department_card_container__eQrcm",department_card_image:"Departments_department_card_image__nswVA",edit_container:"Departments_edit_container__RcNp1"}},63244:(e,t,a)=>{a.d(t,{Z:()=>_});const _={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},51416:(e,t,a)=>{a.d(t,{Z:()=>_});const _={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},16925:(e,t,a)=>{a.d(t,{Z:()=>_});const _={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}}}]);
//# sourceMappingURL=14330.04a42a34.chunk.js.map