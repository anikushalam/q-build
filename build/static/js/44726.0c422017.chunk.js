"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[44726],{44726:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(72791),i=n(12072),o=n(1874),_=n(33992),r=n(81490),d=n(16184),s=n(55336),l=n(16871),c=n(85794),m=n(80184);const u=e=>{let{onId:t,onOpenMenu:n,editOneDepartment:u,onReftech:p,instituteId:h,department:v}=e;const[y,g]=(0,a.useState)(""),[x,j]=(0,a.useState)(!1),I=(0,l.s0)(),[f]=(0,_.$1)(),[Z]=(0,_.MQ)(),[k,C]=(0,a.useState)({open:!1,msg:"",variant:"error"});return(0,m.jsxs)(m.Fragment,{children:[1===y?(0,m.jsx)(d.Z,{onClose:()=>g(""),onParentClose:n,instituteId:h,departmentId:t,onReftech:p}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{onClose:n,customStyleBackdrop:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}),(0,m.jsxs)(i.Z,{children:[(0,m.jsxs)("div",{className:r.Z.edit_container,style:{width:"240px"},children:["Pinned"===(null===v||void 0===v?void 0:v.pin_status)?(0,m.jsx)("h2",{onClick:()=>{h&&(j((e=>!e)),Z({id:h,bodyParameter:{did:"DEPENDENT"===(null===v||void 0===v?void 0:v.pin_status_flow)?null===v||void 0===v?void 0:v.pin_status_id:null===v||void 0===v?void 0:v._id,flow:null===v||void 0===v?void 0:v.pin_status_flow}}).then((()=>{p(),j((e=>!e)),n()})).catch({}))},children:"UnPin Department"}):(0,m.jsx)("h2",{onClick:()=>g(1),children:"Pin Department"}),["Edit","Delete"].map(((e,a)=>(0,m.jsx)("h2",{value:e,onClick:()=>(e=>{"Edit"===e?(u(t),n()):"Delete"===e&&(j((e=>!e)),f({did:t}).then((e=>{var t,a;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.error?(C({msg:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,open:!0,variant:"error"}),j((e=>!e))):(j((e=>!e)),I(-1),n())})).catch({}))})(e),children:e},a)))]}),x&&(0,m.jsx)(s.default,{})]})]}),(0,m.jsx)(c.Z,{eventState:k,eventStateHandler:C})]})}},1874:(e,t,n)=>{n.d(t,{Z:()=>_});n(72791);var a=n(54164),i=n(84489),o=n(80184);const _=e=>{let{onClose:t,customStyleBackdrop:n}=e;return(0,o.jsx)(o.Fragment,{children:a.createPortal((0,o.jsx)(i.Z,{onClose:t,customStyleBackdrop:n}),document.getElementById("backdrop"))})}},16184:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(39230),i=n(16925),o=n(33992),_=n(72791),r=n(99183),d=n(38857),s=n(21348),l=n(90904),c=n(20659),m=n(26071),u=n(61055),p=n(93638),h=n(55336),v=n(98684),y=n(80184);const g=e=>{let{onClose:t,instituteId:n,departmentId:g,onParentClose:j,onReftech:I}=e;const{t:f}=(0,a.$G)(),[Z,k]=(0,_.useState)(""),[C,D]=(0,_.useState)(!1),[N,w]=(0,_.useState)({type:"",flow:""}),[b]=(0,o.Uu)(),T=e=>{w((t=>({...t,flow:e})))};return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(d.Z,{onClose:t,children:(0,y.jsxs)("div",{className:i.Z.modal_container,children:[(0,y.jsx)(s.default,{children:(0,y.jsxs)("div",{className:i.Z.modal_container_outer_header,children:[(0,y.jsx)("div",{className:i.Z.modal_container_header,children:(0,y.jsx)("h6",{children:f("pin_department")})}),(0,y.jsx)("img",{src:"".concat(v.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,y.jsx)(l.Z,{}),(0,y.jsxs)(s.default,{customStyle:{paddingTop:"0"},children:[(0,y.jsx)(c.Z,{label:"dependency",children:null===x||void 0===x?void 0:x.map((e=>(0,y.jsx)(m.Z,{tile:e,onTile:T,activeTile:null===N||void 0===N?void 0:N.flow},null===e||void 0===e?void 0:e.key)))}),"DEPENDENT"===N.flow?(0,y.jsx)(u.Z,{label:f("section_name"),placeholder:f("section_name_placeholder"),name:"type",value:N.type,type:"text",onChange:e=>{w((t=>({...t,[e.target.name]:e.target.value})))}}):null,(0,y.jsx)(p.Z,{label:"save",onAction:()=>{let e=(0,r.l)(N,["type"]);(0,r.x)(e)&&g&&n?(D((e=>!e)),b({id:n,bodyParameter:{...N,did:g}}).then((()=>{I(),D((e=>!e)),j()})).catch({})):k(e)}})]}),C&&(0,y.jsx)(h.default,{})]})})})},x=[{key:"DEPENDENT",name:"dependent"},{key:"INDEPENDENT",name:"independent"}]},26071:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(51416),i=n(39230),o=n(80184);const _=e=>{let{tile:t,onTile:n,activeTile:_,customTileChild:r}=e;const{t:d}=(0,i.$G)();return(0,o.jsx)("div",{className:(null===t||void 0===t?void 0:t.key)===_?a.Z.tile_tile_active:a.Z.tile_tile,onClick:()=>n(null===t||void 0===t?void 0:t.key),style:r,children:d(null===t||void 0===t?void 0:t.name)})}},20659:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(51416),i=n(39230),o=n(80184);const _=e=>{let{label:t,customTileLabel:n,customTileContainer:_,customTileStyle:r,errorShow:d,children:s}=e;const{t:l}=(0,i.$G)();return(0,o.jsxs)("div",{className:a.Z.tile_container,style:r,children:[t&&(0,o.jsxs)("h6",{className:a.Z.tile_label,style:n,children:[l(t),d?(0,o.jsxs)("span",{style:{color:"rgb(231, 75, 75)"},children:["* ",l("form_require_label")]}):null]}),(0,o.jsx)("section",{className:a.Z.tile_tile_container,style:_,children:s})]})}},85794:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(72791),i=n(54164),o=n(15783),_=n(98684),r=n(80184);const d=e=>{let{onClose:t,isVariant:n,isHide:a,children:d}=e;return i.createPortal((0,r.jsx)("div",{children:(0,r.jsx)("div",{className:a?o.Z.notify_hide_overlay:o.Z.notify_overlay,children:(0,r.jsxs)("div",{className:o.Z.notify_container,style:{"--notify-bg-color":n},children:[d,(0,r.jsx)("img",{src:"".concat(_.Fk,"/close-white.svg"),alt:"close icon",onClick:t,className:o.Z.notify_close})]})})}),document.getElementById("notify-alert"))},s={success:"green",error:"#ed4a4a",warning:"orange"},l=e=>{var t;let{eventState:n,eventStateHandler:i}=e;const[_,l]=(0,a.useState)(!1);return null!==n&&void 0!==n&&n.open?(0,r.jsx)(d,{onClose:()=>{l(!0);let e=setTimeout((()=>{i((e=>({...e,open:!1,msg:"",variant:"success"}))),l(!1)}),500);return()=>clearTimeout(e)},isVariant:s[null===n||void 0===n?void 0:n.variant],isHide:_,children:(0,r.jsx)("h6",{className:o.Z.notify_message,children:null!==(t=null===n||void 0===n?void 0:n.msg)&&void 0!==t?t:""})}):null}},81490:(e,t,n)=>{n.d(t,{Z:()=>a});const a={departments:"Departments_departments__MtyWV",deptcontainer:"Departments_deptcontainer__jvgAe",department_add_new:"Departments_department_add_new__e8m85",department_card_name:"Departments_department_card_name__YHN1k",department_card_head:"Departments_department_card_head__rMCPk",department_card_title:"Departments_department_card_title__pYCbV",department_conatiner:"Departments_department_conatiner__+CRQb",department_hr:"Departments_department_hr__Yx7B3",department_card_container:"Departments_department_card_container__eQrcm",department_card_image:"Departments_department_card_image__nswVA",edit_container:"Departments_edit_container__RcNp1"}},16925:(e,t,n)=>{n.d(t,{Z:()=>a});const a={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ",spsc_student:"Income_spsc_student__2-qo4",pdf_modal_container:"Income_pdf_modal_container__6511u"}}}]);
//# sourceMappingURL=44726.0c422017.chunk.js.map