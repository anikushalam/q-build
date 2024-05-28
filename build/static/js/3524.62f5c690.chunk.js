"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3524,54035,20420,31743],{11468:(e,l,o)=>{o.d(l,{Z:()=>s});var i=o(39230),t=o(52245),n=o(80184);const c=e=>{var l;return e?null===e||void 0===e||null===(l=e.split("\n"))||void 0===l?void 0:l.length:2},s=e=>{let{label:l,name:o,type:s,value:a,onChange:d,placeholder:r,errorShow:_,disabled:m,customFormInputContainer:h,customFormInputLabel:v}=e;const{t:u}=(0,i.$G)();return(0,n.jsxs)("div",{className:t.Z.form_input_container,style:h,children:[l&&(0,n.jsxs)("label",{className:t.Z.form_input_label,htmlFor:o,style:v,children:[l,_&&(0,n.jsxs)("span",{className:t.Z.form_input_label_error,children:["* ",u("form_require_label")]})]}),(0,n.jsx)("textarea",{className:t.Z.form_textarea_input,type:s,value:a,onChange:d,name:o,placeholder:r,rows:c(a),disabled:m,style:{"--textarea-height":"".concat(20*c(a),"px")}})]})}},46227:(e,l,o)=>{o.r(l),o.d(l,{default:()=>W});var i=o(39230),t=o(56959),n=o(72791),c=o(63687),s=o(21348),a=o(90904),d=o(89891),r=o(13034),_=o(25801),m=o(3399),h=o(93638),v=o(99183),u=o(48293),p=o(16925),f=o(98684),k=o(55336),x=o(61055),y=o(43317),j=o(80184);const b=e=>{let{onClose:l,formId:o,onRefetch:t,sectionId:c,data:d}=e;const{t:r}=(0,i.$G)(),[_,m]=(0,n.useState)(""),[b,Z]=(0,n.useState)(!1),[S,C]=(0,n.useState)({section_name:"",section_key:"",section_visibilty:!0});(0,n.useEffect)((()=>{var e,l,o;d&&C({section_name:null!==(e=null===d||void 0===d?void 0:d.section_name)&&void 0!==e?e:"",section_key:null!==(l=null===d||void 0===d?void 0:d.section_key)&&void 0!==l?l:"",section_visibilty:null===(o=null===d||void 0===d?void 0:d.section_visibilty)||void 0===o||o})}),[d]);const[I]=(0,y.nm)();return(0,j.jsx)(u.Z,{onClose:l,children:(0,j.jsxs)("div",{className:p.Z.modal_container,children:[(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:r("update_add_section")})}),(0,j.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,j.jsx)(a.Z,{}),(0,j.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(x.Z,{label:r("section_name"),placeholder:r("section_name_placeholder"),name:"section_name",value:S.section_name,type:"text",onChange:e=>{C((l=>({...l,[e.target.name]:e.target.value})))},errorShow:_.section_name}),(0,j.jsx)(h.Z,{label:"update",onAction:()=>{let e=(0,v.l)(S,[]);(0,v.x)(e)&&o&&c?(Z((e=>!e)),I({formId:o,bodyParameter:{section_name:S.section_name,section_key:g(S.section_name),section_visibilty:!0,fsid:c}}).then((()=>{t(),Z((e=>!e)),l()})).catch({})):m(e)}})]}),b&&(0,j.jsx)(k.Z,{})]})})},g=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var Z=o(20659),S=o(26071),C=o(9108);const I=e=>{var l;let{onClose:o,formId:t,onRefetch:c,sectionId:d}=e;const{t:r}=(0,i.$G)(),[_,m]=(0,n.useState)(""),[b,g]=(0,n.useState)(!1),[I,N]=(0,n.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[A]=(0,y.YI)(),E=e=>{N((l=>({...l,[e.target.name]:e.target.value})))},F=e=>{null!==C.E&&void 0!==C.E&&C.E.includes(e)?N((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]}))):N((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,j.jsx)(u.Z,{onClose:o,children:(0,j.jsxs)("div",{className:p.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:r("add_field")})}),(0,j.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:o})]})}),(0,j.jsx)(a.Z,{}),(0,j.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(Z.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===C.S||void 0===C.S?void 0:C.S.map((e=>(0,j.jsx)(S.Z,{tile:e,onTile:F,activeTile:null===I||void 0===I?void 0:I.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,j.jsx)(x.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"form_checklist_lable",value:I.form_checklist_lable,type:"text",onChange:E,errorShow:_.form_checklist_lable}),(0,j.jsx)(x.Z,{label:r("field_placeholder"),placeholder:r("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:I.form_checklist_placeholder,type:"text",onChange:E,errorShow:_.form_checklist_placeholder}),null!==C.E&&void 0!==C.E&&C.E.includes(I.form_checklist_typo)?(0,j.jsxs)("div",{style:{padding:"1rem"},children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:r("choices")})}),null===I||void 0===I||null===(l=I.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,j.jsx)(x.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const o=[...I.form_checklist_typo_option_pl];o[l].value=e.target.value,N((e=>({...e,form_checklist_typo_option_pl:o})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,j.jsx)(h.Z,{label:r("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...I.form_checklist_typo_option_pl],o=[];for(let t=0;t<(null===(i=l)||void 0===i?void 0:i.length);l++){var i;t===e||o.push(l[t])}N((e=>({...e,form_checklist_typo_option_pl:o})))})(l)})},"".concat(e).concat(l)))),(0,j.jsx)(h.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{N((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,j.jsx)(h.Z,{label:"add",onAction:()=>{let e=(0,v.l)(I,["form_checklist_typo_option_pl"]);if((0,v.x)(e)&&t&&d){var l,i,n,s;g((e=>!e));let e=[];for(let l of I.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);A({formId:t,bodyParameter:{fsid:d,checklist:[{form_checklist_name:null!==(l=null===I||void 0===I?void 0:I.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:w(I.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(i=null===I||void 0===I?void 0:I.form_checklist_placeholder)&&void 0!==i?i:"",form_checklist_lable:null!==(n=null===I||void 0===I?void 0:I.form_checklist_lable)&&void 0!==n?n:"",form_checklist_typo:null!==(s=null===I||void 0===I?void 0:I.form_checklist_typo)&&void 0!==s?s:"",form_checklist_typo_option_pl:e}]}}).then((()=>{c(),g((e=>!e)),o()})).catch({})}else m(e)}})]}),b&&(0,j.jsx)(k.Z,{})]})})},w=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var N=o(89064),A=o(98853);const E=e=>{var l;let{onClose:o,formId:t,onRefetch:c,sectionId:d,data:r}=e;const{t:_}=(0,i.$G)(),[m,y]=(0,n.useState)(""),[b,g]=(0,n.useState)(!1),[I,w]=(0,n.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[N]=(0,A.DJ)();(0,n.useEffect)((()=>{if(r){var e,l,o,i,t,n;let c=[];for(let e of null===r||void 0===r?void 0:r.form_checklist_typo_option_pl)c.push({value:e});w({form_checklist_name:null!==(e=null===r||void 0===r?void 0:r.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(l=null===r||void 0===r?void 0:r.form_checklist_key)&&void 0!==l?l:"",form_checklist_visibility:null!==(o=null===r||void 0===r?void 0:r.form_checklist_visibility)&&void 0!==o&&o,form_checklist_placeholder:null!==(i=null===r||void 0===r?void 0:r.form_checklist_placeholder)&&void 0!==i?i:"",form_checklist_lable:null!==(t=null===r||void 0===r?void 0:r.form_checklist_lable)&&void 0!==t?t:"",form_checklist_typo:null!==(n=null===r||void 0===r?void 0:r.form_checklist_typo)&&void 0!==n?n:"",form_checklist_typo_option_pl:c})}}),[r]);const E=e=>{w((l=>({...l,[e.target.name]:e.target.value})))},T=e=>{null!==C.E&&void 0!==C.E&&C.E.includes(e)?w((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[...null===l||void 0===l?void 0:l.form_checklist_typo_option_pl,{value:""}]}))):w((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,j.jsx)(u.Z,{onClose:o,children:(0,j.jsxs)("div",{className:p.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:_("update_add_field")})}),(0,j.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:o})]})}),(0,j.jsx)(a.Z,{}),(0,j.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(Z.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===C.S||void 0===C.S?void 0:C.S.map((e=>(0,j.jsx)(S.Z,{tile:e,onTile:T,activeTile:null===I||void 0===I?void 0:I.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,j.jsx)(x.Z,{label:_("field_label"),placeholder:_("field_label_placeholder"),name:"form_checklist_lable",value:I.form_checklist_lable,type:"text",onChange:E,errorShow:m.form_checklist_lable}),(0,j.jsx)(x.Z,{label:_("field_placeholder"),placeholder:_("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:I.form_checklist_placeholder,type:"text",onChange:E,errorShow:m.form_checklist_placeholder}),null!==C.E&&void 0!==C.E&&C.E.includes(I.form_checklist_typo)?(0,j.jsxs)("div",{style:{padding:"1rem"},children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:_("choices")})}),null===I||void 0===I||null===(l=I.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,j.jsx)(x.Z,{label:_("field_label"),placeholder:_("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const o=[...I.form_checklist_typo_option_pl];o[l].value=e.target.value,w((e=>({...e,form_checklist_typo_option_pl:o})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,j.jsx)(h.Z,{label:_("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...I.form_checklist_typo_option_pl],o=[];for(let t=0;t<(null===(i=l)||void 0===i?void 0:i.length);l++){var i;t===e||o.push(l[t])}w((e=>({...e,form_checklist_typo_option_pl:o})))})(l)})},"".concat(e).concat(l)))),(0,j.jsx)(h.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{w((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,j.jsx)(h.Z,{label:"update",onAction:()=>{let e=(0,v.l)(I,["form_checklist_typo_option_pl"]);if((0,v.x)(e)&&t&&d){var l,i,n,s;g((e=>!e));let e=[];for(let l of I.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);N({formId:t,bodyParameter:{fsid:d,checklist:[{form_checklist_name:null!==(l=null===I||void 0===I?void 0:I.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:F(I.form_checklist_lable),form_checklist_visibility:I.form_checklist_visibility,form_checklist_placeholder:null!==(i=null===I||void 0===I?void 0:I.form_checklist_placeholder)&&void 0!==i?i:"",form_checklist_lable:null!==(n=null===I||void 0===I?void 0:I.form_checklist_lable)&&void 0!==n?n:"",form_checklist_typo:null!==(s=null===I||void 0===I?void 0:I.form_checklist_typo)&&void 0!==s?s:"",form_checklist_typo_option_pl:e}]}}).then((()=>{c(),g((e=>!e)),o()})).catch({})}else y(e)}})]}),b&&(0,j.jsx)(k.Z,{})]})})},F=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()},T=e=>{let{onClose:l,onRefetch:o,data:t}=e;const{t:c}=(0,i.$G)(),[s,a]=(0,n.useState)(!1),[d,r]=(0,n.useState)("");return(0,j.jsx)(j.Fragment,{children:1===d?(0,j.jsx)(E,{onClose:()=>r(""),data:t,onParentClose:l,onRefetch:o}):(0,j.jsxs)(N.Z,{onClose:l,disabled:s,children:[(0,j.jsx)("h6",{onClick:()=>{r(1)},children:c("edit")}),(0,j.jsx)("h6",{children:c("delete")})]})})};var R=o(11468);const P={inputProps:{"aria-label":"Switch demo"}},L=e=>{var l,o,i,t;let{st:c,onRefetch:s,formId:v,applicationId:u}=e;const[p,f]=(0,n.useState)(!1),[x,g]=(0,n.useState)(!1),[Z,S]=(0,n.useState)(!1),[C,w]=(0,n.useState)(!1),[N,E]=(0,n.useState)(!1),[F,L]=(0,n.useState)("");(0,n.useEffect)((()=>{w(null===c||void 0===c?void 0:c.section_visibilty)}),[null===c||void 0===c?void 0:c.section_visibilty]),(0,n.useEffect)((()=>{var e;null!==(e=["undertakings","antiragging_affidavit"])&&void 0!==e&&e.includes(null===c||void 0===c?void 0:c.section_key)&&L(null===c||void 0===c?void 0:c.section_value)}),[null===c||void 0===c?void 0:c.section_key]);const[B]=(0,y.nm)(),[D]=(0,y.E$)(),[$]=(0,A.T8)(),G=()=>{f((e=>!e))},W=()=>{g((e=>!e))},J=(e,l)=>{null!==c&&void 0!==c&&c._id&&v&&l&&(E((e=>!e)),D({formId:v,bodyParameter:{checkID:l,fsid:null===c||void 0===c?void 0:c._id,form_checklist_visibility:e.target.checked}}).then((()=>{s(),E((e=>!e))})).catch({}))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("section",{className:m.Z.sfsc_card,children:[(0,j.jsxs)("div",{className:m.Z.sfscc_outer,children:[(0,j.jsxs)("div",{className:m.Z.sfscc_container,children:[(0,j.jsx)(d.Z,{...P,checked:C,onChange:e=>{null!==c&&void 0!==c&&c._id&&v&&(E((e=>!e)),B({formId:v,bodyParameter:{section_name:null===c||void 0===c?void 0:c.section_name,section_key:null===c||void 0===c?void 0:c.section_key,section_visibilty:e.target.checked,fsid:null===c||void 0===c?void 0:c._id}}).then((()=>{s(),E((e=>!e))})).catch({}))}}),(0,j.jsx)("span",{children:null!==(l=null===c||void 0===c?void 0:c.section_name)&&void 0!==l?l:""})]}),C?(0,j.jsx)(h.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:G}):null]}),(0,j.jsx)("div",{className:m.Z.sfsccc_inner,children:null!==(o=["undertakings","antiragging_affidavit"])&&void 0!==o&&o.includes(null===c||void 0===c?void 0:c.section_key)?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(R.Z,{placeholder:"Please type here",name:null===c||void 0===c?void 0:c.section_key,type:"text",value:F,onChange:e=>{L(e.target.value)},customFormInputContainer:{width:"100%",marginBlock:"0.8rem"}}),(0,j.jsx)(h.Z,{label:"update",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:()=>{u&&null!==c&&void 0!==c&&c._id&&(E((e=>!e)),$({bodyParameter:{fsid:null===c||void 0===c?void 0:c._id,flow:"APPLICATION",did:u,content:F}}).then((()=>{s(),E((e=>!e))})).catch({}))}})]}):"academic_details"===(null===c||void 0===c?void 0:c.section_key)?(0,j.jsx)(j.Fragment,{children:null===c||void 0===c||null===(i=c.form_checklist)||void 0===i?void 0:i.map((e=>(0,j.jsx)("div",{className:m.Z.sfscc_outer,style:{width:"100%",opacity:C?"1":"0.7"},children:(0,j.jsx)(_.Z,{control:(0,j.jsx)(r.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:l=>C?J(l,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_name},null===e||void 0===e?void 0:e._id)})))}):(0,j.jsxs)(j.Fragment,{children:[null===c||void 0===c||null===(t=c.form_checklist)||void 0===t?void 0:t.map((e=>(0,j.jsx)("div",{className:m.Z.sfscc_outer,style:{width:"100%",opacity:C?"1":"0.7"},children:(0,j.jsx)(_.Z,{control:(0,j.jsx)(r.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:l=>C?J(l,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id)}))),C?(0,j.jsx)(h.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:W}):null]})})]}),(0,j.jsx)(a.Z,{}),x&&(0,j.jsx)(I,{onClose:W,formId:v,sectionId:null===c||void 0===c?void 0:c._id,onRefetch:s}),p&&(0,j.jsx)(b,{onClose:G,formId:v,sectionId:null===c||void 0===c?void 0:c._id,onRefetch:s,data:c}),N&&(0,j.jsx)(k.Z,{}),Z&&(0,j.jsx)(T,{onClose:()=>{S((e=>!e))}})]})},B=e=>{let{onClose:l,formId:o,onRefetch:t}=e;const{t:c}=(0,i.$G)(),[d,r]=(0,n.useState)(""),[_,m]=(0,n.useState)(!1),[b,g]=(0,n.useState)({section_name:""}),[Z]=(0,y.Ds)();return(0,j.jsx)(u.Z,{onClose:l,children:(0,j.jsxs)("div",{className:p.Z.modal_container,children:[(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:p.Z.modal_container_header,children:(0,j.jsx)("h6",{children:c("add_section")})}),(0,j.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,j.jsx)(a.Z,{}),(0,j.jsxs)(s.Z,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(x.Z,{label:c("section_name"),placeholder:c("section_name_placeholder"),name:"section_name",value:b.section_name,type:"text",onChange:e=>{g((l=>({...l,[e.target.name]:e.target.value})))},errorShow:d.section_name}),(0,j.jsx)(h.Z,{label:"add",onAction:()=>{let e=(0,v.l)(b,[]);(0,v.x)(e)&&o?(m((e=>!e)),Z({formId:o,bodyParameter:{form:[{section_name:b.section_name,section_key:D(b.section_name),section_visibilty:!0}]}}).then((()=>{t(),m((e=>!e)),l()})).catch({})):r(e)}})]}),_&&(0,j.jsx)(k.Z,{})]})})},D=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var $=o(1669),G=o(16871);const W=()=>{var e,l,o;const{t:d}=(0,i.$G)(),r=(0,G.TH)(),[_,m]=(0,n.useState)(!1),[v,u]=(0,n.useState)(!1),[p,f]=(0,n.useState)([]),[x,b]=(0,n.useState)(!1),g=(0,n.useRef)(),Z=(0,n.useRef)(),S=e=>{const l=[...p],o=l[g.current];l.splice(g.current,1),l.splice(Z.current,0,o),g.current=null,Z.current=null,f(l)},[C]=(0,y.K5)(),{admissionStudentFormDetail:I,admissionStudentFormDetailRefetch:w,admissionStudentFormDetailLoading:N}=(0,y.tL)({data:{formId:null===(e=r.state)||void 0===e?void 0:e.formId},skip:!(null!==(l=r.state)&&void 0!==l&&l.formId)});(0,n.useEffect)((()=>{I&&f(I)}),[I]);const A=()=>{m((e=>!e))},E=()=>{u((e=>!e))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:t.Z.fm_header_container,children:[(0,j.jsx)("h6",{children:d("student_form")}),(0,j.jsxs)("div",{className:t.Z.fm_flex,children:[(0,j.jsx)(h.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:A}),(0,j.jsx)(h.Z,{label:v?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:v?()=>{var e,l;null!==(e=r.state)&&void 0!==e&&e.formId&&(b((e=>!e)),C({formId:null===(l=r.state)||void 0===l?void 0:l.formId,bodyParameter:{shuffle_arr:p}}).then((()=>{w(),b((e=>!e)),u(!1)})).catch({}))}:E}),v&&(0,j.jsx)(h.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:E})]})]})}),(0,j.jsx)(a.Z,{}),(0,j.jsxs)(s.Z,{children:[null===p||void 0===p?void 0:p.map(((e,l)=>{var o,i;return(0,j.jsx)("div",{draggable:v,onDragStart:e=>{return o=l,void(g.current=o);var o},onDragEnter:e=>{return o=l,void(Z.current=o);var o},onDragEnd:S,children:(0,j.jsx)(L,{st:e,onRefetch:w,formId:null===(o=r.state)||void 0===o?void 0:o.formId,applicationId:null===(i=r.state)||void 0===i?void 0:i.applicationId})},null===e||void 0===e?void 0:e._id)})),N&&(0,j.jsx)($.Z,{})]})]}),x&&(0,j.jsx)(k.Z,{}),_&&(0,j.jsx)(B,{onClose:A,formId:null===(o=r.state)||void 0===o?void 0:o.formId,onRefetch:w})]})}}}]);
//# sourceMappingURL=3524.62f5c690.chunk.js.map