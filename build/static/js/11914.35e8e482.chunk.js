"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[11914],{60981:(e,l,t)=>{t.d(l,{jK:()=>b,Gc:()=>C,fv:()=>Z,Es:()=>g,iN:()=>I,xZ:()=>S,hx:()=>w,wM:()=>A});var o=t(41557),i=t(94811);const n=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/section/staff/query"),method:i.a4,body:e.bodyParameter})}),c=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/checklist/staff/query"),method:i.a4,body:e.bodyParameter})}),s=e=>e.mutation({query:e=>({url:"/v1/ins/shuffle/form/".concat(e.formId,"/section/staff/query"),method:i.Q0,body:e.bodyParameter})}),r=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/staff/query"),method:i.Q0,body:e.bodyParameter})}),a=e=>e.query({query:e=>"/v1/ins/one/form/".concat(e.formId,"/section/staff/query"),transformResponse:e=>null===e||void 0===e?void 0:e.section,serializeQueryArgs:e=>{let{endpointName:l}=e;return l},forceRefetch(e){let{currentArg:l,previousArg:t}=e;return l!==t}}),d=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/checklist/staff/query"),method:i.Q0,body:e.bodyParameter})}),_=e=>e.query({query:e=>"/v1/ins/dynamic/form/details/query?flow=".concat(null===e||void 0===e?void 0:e.flow,"&did=").concat(null===e||void 0===e?void 0:e.flowId),transformResponse:e=>null!==e&&void 0!==e&&e.ins_form?null===e||void 0===e?void 0:e.ins_form:null===e||void 0===e?void 0:e.depart_form,serializeQueryArgs:e=>{let{endpointName:l}=e;return l},forceRefetch(e){let{currentArg:l,previousArg:t}=e;return l!==t}}),u=e=>e.query({query:e=>"/v1/ins/".concat(e.sid,"/dynamic/form/query"),transformResponse:e=>null===e||void 0===e?void 0:e.result,serializeQueryArgs:e=>{let{endpointName:l}=e;return l},forceRefetch(e){let{currentArg:l,previousArg:t}=e;return l!==t}}),m=o.s.injectEndpoints({endpoints:e=>({instituteStaffAddSection:n(e),instituteStaffSectionAddChecklist:c(e),instituteStaffRearrangeSection:s(e),instituteStaffUpdateSectionChecklist:r(e),instituteStaffFormDetail:a(e),instituteStaffToggleChecklist:d(e),staffProfileAboutDetail:u(e),staffApplyFormFieldDetail:_(e)})}),{useInstituteStaffAddSectionMutation:f,useInstituteStaffSectionAddChecklistMutation:h,useInstituteStaffRearrangeSectionMutation:v,useInstituteStaffUpdateSectionChecklistMutation:p,useInstituteStaffFormDetailQuery:y,useInstituteStaffToggleChecklistMutation:k,useStaffProfileAboutDetailQuery:x,useStaffApplyFormFieldDetailQuery:j}=m,b=()=>{const[e]=f();return[e]},g=()=>{const[e]=h();return[e]},Z=()=>{const[e]=v();return[e]},S=()=>{const[e]=p();return[e]},C=e=>{const{data:l,refetch:t,isFetching:o}=y(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{instituteStaffFormDetail:l,instituteStaffFormDetailRefetch:t,instituteStaffFormDetailLoading:o}},I=()=>{const[e]=k();return[e]},A=e=>{const{data:l,refetch:t,isFetching:o}=x(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffProfileAboutDetail:l,staffProfileAboutDetailRefetch:t,staffProfileAboutDetailLoading:o}},w=e=>{const{data:l,refetch:t,isFetching:o}=j(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffApplyFormFieldDetail:l,staffApplyFormFieldDetailRefetch:t,staffApplyFormFieldDetailLoading:o}}},11914:(e,l,t)=>{t.r(l),t.d(l,{default:()=>J});var o=t(95048),i=t(43504),n=t(20712),c=t(18725),s=t(2205),r=t(72791),a=t(55336),d=t(39480),_=t(39230),u=t(56959),m=t(63687),f=t(21348),h=t(90904),v=t(89891),p=t(13034),y=t(25801),k=t(3399),x=t(93638),j=t(99183),b=t(48293),g=t(16925),Z=t(98684),S=t(61055),C=t(60981),I=t(80184);const A=e=>{let{onClose:l,formId:t,onRefetch:o,sectionId:i,data:n}=e;const{t:c}=(0,_.$G)(),[s,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(!1),[v,p]=(0,r.useState)({section_name:"",section_key:"",section_visibilty:!0});(0,r.useEffect)((()=>{var e,l,t;n&&p({section_name:null!==(e=null===n||void 0===n?void 0:n.section_name)&&void 0!==e?e:"",section_key:null!==(l=null===n||void 0===n?void 0:n.section_key)&&void 0!==l?l:"",section_visibilty:null===(t=null===n||void 0===n?void 0:n.section_visibilty)||void 0===t||t})}),[n]);const[y]=(0,C.xZ)();return(0,I.jsx)(b.Z,{onClose:l,children:(0,I.jsxs)("div",{className:g.Z.modal_container,children:[(0,I.jsx)(f.Z,{children:(0,I.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:c("update_add_section")})}),(0,I.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(f.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(S.Z,{label:c("section_name"),placeholder:c("section_name_placeholder"),name:"section_name",value:v.section_name,type:"text",onChange:e=>{p((l=>({...l,[e.target.name]:e.target.value})))},errorShow:s.section_name}),(0,I.jsx)(x.Z,{label:"update",onAction:()=>{let e=(0,j.l)(v,[]);(0,j.x)(e)&&t&&i?(m((e=>!e)),y({formId:t,bodyParameter:{section_name:v.section_name,section_key:w(v.section_name),section_visibilty:!0,fsid:i,checklist:[],cid:""}}).then((()=>{o(),m((e=>!e)),l()})).catch({})):d(e)}})]}),u&&(0,I.jsx)(a.Z,{})]})})},w=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var N=t(20659),F=t(26071),R=t(9108);const D=e=>{var l;let{onClose:t,formId:o,onRefetch:i,sectionId:n}=e;const{t:c}=(0,_.$G)(),[s,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(!1),[v,p]=(0,r.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[y]=(0,C.Es)(),k=e=>{p((l=>({...l,[e.target.name]:e.target.value})))},A=e=>{null!==R.E&&void 0!==R.E&&R.E.includes(e)?p((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]}))):p((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,I.jsx)(b.Z,{onClose:t,children:(0,I.jsxs)("div",{className:g.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,I.jsx)(f.Z,{children:(0,I.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:c("add_field")})}),(0,I.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(f.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(N.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===R.S||void 0===R.S?void 0:R.S.map((e=>(0,I.jsx)(F.Z,{tile:e,onTile:A,activeTile:null===v||void 0===v?void 0:v.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,I.jsx)(S.Z,{label:c("field_label"),placeholder:c("field_label_placeholder"),name:"form_checklist_lable",value:v.form_checklist_lable,type:"text",onChange:k,errorShow:s.form_checklist_lable}),(0,I.jsx)(S.Z,{label:c("field_placeholder"),placeholder:c("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:v.form_checklist_placeholder,type:"text",onChange:k,errorShow:s.form_checklist_placeholder}),null!==R.E&&void 0!==R.E&&R.E.includes(v.form_checklist_typo)?(0,I.jsxs)("div",{style:{padding:"1rem"},children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:c("choices")})}),null===v||void 0===v||null===(l=v.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,I.jsx)(S.Z,{label:c("field_label"),placeholder:c("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const t=[...v.form_checklist_typo_option_pl];t[l].value=e.target.value,p((e=>({...e,form_checklist_typo_option_pl:t})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,I.jsx)(x.Z,{label:c("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...v.form_checklist_typo_option_pl],t=[];for(let i=0;i<(null===(o=l)||void 0===o?void 0:o.length);l++){var o;i===e||t.push(l[i])}p((e=>({...e,form_checklist_typo_option_pl:t})))})(l)})},"".concat(e).concat(l)))),(0,I.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{p((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,I.jsx)(x.Z,{label:"add",onAction:()=>{let e=(0,j.l)(v,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&o&&n){var l,c,s,r;m((e=>!e));let e=[];for(let l of v.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);y({formId:o,bodyParameter:{fsid:n,checklist:[{form_checklist_name:null!==(l=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:q(v.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(c=null===v||void 0===v?void 0:v.form_checklist_placeholder)&&void 0!==c?c:"",form_checklist_lable:null!==(s=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==s?s:"",form_checklist_typo:null!==(r=null===v||void 0===v?void 0:v.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),m((e=>!e)),t()})).catch({})}else d(e)}})]}),u&&(0,I.jsx)(a.Z,{})]})})},q=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var E=t(89064),P=t(98853);const T=e=>{var l;let{onClose:t,formId:o,onRefetch:i,sectionId:n,data:c}=e;const{t:s}=(0,_.$G)(),[d,u]=(0,r.useState)(""),[m,v]=(0,r.useState)(!1),[p,y]=(0,r.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[k]=(0,P.DJ)();(0,r.useEffect)((()=>{if(c){var e,l,t,o,i,n;let s=[];for(let e of null===c||void 0===c?void 0:c.form_checklist_typo_option_pl)s.push({value:e});y({form_checklist_name:null!==(e=null===c||void 0===c?void 0:c.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(l=null===c||void 0===c?void 0:c.form_checklist_key)&&void 0!==l?l:"",form_checklist_visibility:null!==(t=null===c||void 0===c?void 0:c.form_checklist_visibility)&&void 0!==t&&t,form_checklist_placeholder:null!==(o=null===c||void 0===c?void 0:c.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(i=null===c||void 0===c?void 0:c.form_checklist_lable)&&void 0!==i?i:"",form_checklist_typo:null!==(n=null===c||void 0===c?void 0:c.form_checklist_typo)&&void 0!==n?n:"",form_checklist_typo_option_pl:s})}}),[c]);const C=e=>{y((l=>({...l,[e.target.name]:e.target.value})))},A=e=>{null!==R.E&&void 0!==R.E&&R.E.includes(e)?y((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[...null===l||void 0===l?void 0:l.form_checklist_typo_option_pl,{value:""}]}))):y((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,I.jsx)(b.Z,{onClose:t,children:(0,I.jsxs)("div",{className:g.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,I.jsx)(f.Z,{children:(0,I.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:s("update_add_field")})}),(0,I.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(f.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(N.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===R.S||void 0===R.S?void 0:R.S.map((e=>(0,I.jsx)(F.Z,{tile:e,onTile:A,activeTile:null===p||void 0===p?void 0:p.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,I.jsx)(S.Z,{label:s("field_label"),placeholder:s("field_label_placeholder"),name:"form_checklist_lable",value:p.form_checklist_lable,type:"text",onChange:C,errorShow:d.form_checklist_lable}),(0,I.jsx)(S.Z,{label:s("field_placeholder"),placeholder:s("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:p.form_checklist_placeholder,type:"text",onChange:C,errorShow:d.form_checklist_placeholder}),null!==R.E&&void 0!==R.E&&R.E.includes(p.form_checklist_typo)?(0,I.jsxs)("div",{style:{padding:"1rem"},children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:s("choices")})}),null===p||void 0===p||null===(l=p.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,I.jsx)(S.Z,{label:s("field_label"),placeholder:s("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const t=[...p.form_checklist_typo_option_pl];t[l].value=e.target.value,y((e=>({...e,form_checklist_typo_option_pl:t})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,I.jsx)(x.Z,{label:s("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...p.form_checklist_typo_option_pl],t=[];for(let i=0;i<(null===(o=l)||void 0===o?void 0:o.length);l++){var o;i===e||t.push(l[i])}y((e=>({...e,form_checklist_typo_option_pl:t})))})(l)})},"".concat(e).concat(l)))),(0,I.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{y((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,I.jsx)(x.Z,{label:"update",onAction:()=>{let e=(0,j.l)(p,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&o&&n){var l,c,s,r;v((e=>!e));let e=[];for(let l of p.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);k({formId:o,bodyParameter:{fsid:n,checklist:[{form_checklist_name:null!==(l=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:L(p.form_checklist_lable),form_checklist_visibility:p.form_checklist_visibility,form_checklist_placeholder:null!==(c=null===p||void 0===p?void 0:p.form_checklist_placeholder)&&void 0!==c?c:"",form_checklist_lable:null!==(s=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==s?s:"",form_checklist_typo:null!==(r=null===p||void 0===p?void 0:p.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),v((e=>!e)),t()})).catch({})}else u(e)}})]}),m&&(0,I.jsx)(a.Z,{})]})})},L=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()},B=e=>{let{onClose:l,onRefetch:t,data:o}=e;const{t:i}=(0,_.$G)(),[n,c]=(0,r.useState)(!1),[s,a]=(0,r.useState)("");return(0,I.jsx)(I.Fragment,{children:1===s?(0,I.jsx)(T,{onClose:()=>a(""),data:o,onParentClose:l,onRefetch:t}):(0,I.jsxs)(E.Z,{onClose:l,disabled:n,children:[(0,I.jsx)("h6",{onClick:()=>{a(1)},children:i("edit")}),(0,I.jsx)("h6",{children:i("delete")})]})})},Q={inputProps:{"aria-label":"Switch demo"}},G=e=>{var l,t;let{st:o,onRefetch:i,formId:n}=e;const[c,s]=(0,r.useState)(!1),[d,_]=(0,r.useState)(!1),[u,m]=(0,r.useState)(!1),[f,j]=(0,r.useState)(!1),[b,g]=(0,r.useState)(!1);(0,r.useEffect)((()=>{j(null===o||void 0===o?void 0:o.section_visibilty)}),[null===o||void 0===o?void 0:o.section_visibilty]);const[Z]=(0,C.xZ)(),[S]=(0,C.iN)(),w=()=>{s((e=>!e))},N=()=>{_((e=>!e))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("section",{className:k.Z.sfsc_card,children:[(0,I.jsxs)("div",{className:k.Z.sfscc_outer,children:[(0,I.jsxs)("div",{className:k.Z.sfscc_container,children:[(0,I.jsx)(v.Z,{...Q,checked:f,onChange:e=>{null!==o&&void 0!==o&&o._id&&n&&(g((e=>!e)),Z({formId:n,bodyParameter:{section_name:null===o||void 0===o?void 0:o.section_name,section_key:null===o||void 0===o?void 0:o.section_key,section_visibilty:e.target.checked,fsid:null===o||void 0===o?void 0:o._id,checklist:[],cid:""}}).then((()=>{i(),g((e=>!e))})).catch({}))}}),(0,I.jsx)("span",{children:null!==(l=null===o||void 0===o?void 0:o.section_name)&&void 0!==l?l:""})]}),f?(0,I.jsx)(x.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:w}):null]}),(0,I.jsxs)("div",{className:k.Z.sfsccc_inner,children:[null===o||void 0===o||null===(t=o.form_checklist)||void 0===t?void 0:t.map((e=>"BUTTON"===(null===e||void 0===e?void 0:e.form_checklist_typo)?null:(0,I.jsx)("div",{className:k.Z.sfscc_outer,style:{width:"100%",opacity:f?"1":"0.7"},children:(0,I.jsx)(y.Z,{control:(0,I.jsx)(p.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:l=>f?((e,l)=>{null!==o&&void 0!==o&&o._id&&n&&l&&(g((e=>!e)),S({formId:n,bodyParameter:{checkID:l,fsid:null===o||void 0===o?void 0:o._id,form_checklist_visibility:e.target.checked}}).then((()=>{i(),g((e=>!e))})).catch({}))})(l,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id)}))),f?(0,I.jsx)(x.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:N}):null]})]}),(0,I.jsx)(h.Z,{}),d&&(0,I.jsx)(D,{onClose:N,formId:n,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i}),c&&(0,I.jsx)(A,{onClose:w,formId:n,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i,data:o}),b&&(0,I.jsx)(a.Z,{}),u&&(0,I.jsx)(B,{onClose:()=>{m((e=>!e))}})]})},M=e=>{let{onClose:l,formId:t,onRefetch:o}=e;const{t:i}=(0,_.$G)(),[n,c]=(0,r.useState)(""),[s,d]=(0,r.useState)(!1),[u,m]=(0,r.useState)({section_name:""}),[v]=(0,C.jK)();return(0,I.jsx)(b.Z,{onClose:l,children:(0,I.jsxs)("div",{className:g.Z.modal_container,children:[(0,I.jsx)(f.Z,{children:(0,I.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:g.Z.modal_container_header,children:(0,I.jsx)("h6",{children:i("add_section")})}),(0,I.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(f.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(S.Z,{label:i("section_name"),placeholder:i("section_name_placeholder"),name:"section_name",value:u.section_name,type:"text",onChange:e=>{m((l=>({...l,[e.target.name]:e.target.value})))},errorShow:n.section_name}),(0,I.jsx)(x.Z,{label:"add",onAction:()=>{let e=(0,j.l)(u,[]);(0,j.x)(e)&&t?(d((e=>!e)),v({formId:t,bodyParameter:{form:[{section_name:u.section_name,section_key:W(u.section_name),section_visibilty:!0}]}}).then((()=>{o(),d((e=>!e)),l()})).catch({})):c(e)}})]}),s&&(0,I.jsx)(a.Z,{})]})})},W=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var $=t(1669);const z=e=>{let{instituteId:l,formId:t}=e;const{t:o}=(0,_.$G)(),[i,n]=(0,r.useState)(!1),[c,s]=(0,r.useState)(!1),[d,v]=(0,r.useState)([]),[p,y]=(0,r.useState)(!1),k=(0,r.useRef)(),j=(0,r.useRef)(),b=e=>{const l=[...d],t=l[k.current];l.splice(k.current,1),l.splice(j.current,0,t),k.current=null,j.current=null,v(l)},[g]=(0,C.fv)(),{instituteStaffFormDetail:Z,instituteStaffFormDetailRefetch:S,instituteStaffFormDetailLoading:A}=(0,C.Gc)({data:{formId:t},skip:!t});(0,r.useEffect)((()=>{Z&&v(Z)}),[Z]);const w=()=>{n((e=>!e))},N=()=>{s((e=>!e))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Z,{children:[(0,I.jsx)(f.Z,{children:(0,I.jsxs)("div",{className:u.Z.fm_header_container,children:[(0,I.jsx)("h6",{children:o("staff_form")}),(0,I.jsxs)("div",{className:u.Z.fm_flex,children:[(0,I.jsx)(x.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:w}),(0,I.jsx)(x.Z,{label:c?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:c?()=>{t&&(y((e=>!e)),g({formId:t,bodyParameter:{shuffle_arr:d}}).then((()=>{S(),y((e=>!e)),s(!1)})).catch({}))}:N}),c&&(0,I.jsx)(x.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:N})]})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(f.Z,{children:[null===d||void 0===d?void 0:d.map(((e,o)=>(0,I.jsx)("div",{draggable:c,onDragStart:e=>{return l=o,void(k.current=l);var l},onDragEnter:e=>{return l=o,void(j.current=l);var l},onDragEnd:b,children:(0,I.jsx)(G,{st:e,onRefetch:S,formId:t,instituteId:l})},null===e||void 0===e?void 0:e._id))),A&&(0,I.jsx)($.Z,{})]})]}),p&&(0,I.jsx)(a.Z,{}),i&&(0,I.jsx)(M,{onClose:w,formId:t,onRefetch:S})]})},J=()=>{var e;const[l]=(0,i.lr)(),t=(0,o.v9)((e=>e.idChange.id)),{oneInstituteDashboard:_,oneInstituteDashboardRefetch:u}=(0,d.gq)({id:t,skip:!t});return(0,r.useEffect)((()=>{t&&u()}),[u]),(0,I.jsx)(n.Z,{children:(0,I.jsx)(c.Z,{children:(0,I.jsxs)("section",{style:{width:"100%"},children:[(0,I.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,I.jsx)(r.Suspense,{fallback:(0,I.jsx)(a.Z,{}),children:"form"===l.get("type")?(0,I.jsx)(z,{instituteId:t,formId:null===_||void 0===_||null===(e=_.institute)||void 0===e?void 0:e.staff_form_setting}):null})]})})})}}}]);
//# sourceMappingURL=11914.35e8e482.chunk.js.map