"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[70207],{70207:(e,l,o)=>{o.r(l),o.d(l,{default:()=>X});var t=o(43504),i=o(16871),c=o(20712),n=o(18725),s=o(2205),d=o(72791),a=o(55336),r=o(39230),_=o(56959),h=o(63687),m=o(21348),v=o(90904),u=o(89891),p=o(13034),f=o(25801),k=o(3399),x=o(93638),y=o(99183),j=o(48293),b=o(16925),Z=o(98684),g=o(98853),S=o(61055),C=o(80184);const I=e=>{let{onClose:l,formId:o,onRefetch:t,sectionId:i,data:c}=e;const{t:n}=(0,r.$G)(),[s,_]=(0,d.useState)(""),[h,u]=(0,d.useState)(!1),[p,f]=(0,d.useState)({section_name:"",section_key:"",section_visibilty:!0});(0,d.useEffect)((()=>{var e,l,o;c&&f({section_name:null!==(e=null===c||void 0===c?void 0:c.section_name)&&void 0!==e?e:"",section_key:null!==(l=null===c||void 0===c?void 0:c.section_key)&&void 0!==l?l:"",section_visibilty:null===(o=null===c||void 0===c?void 0:c.section_visibilty)||void 0===o||o})}),[c]);const[k]=(0,g.L4)();return(0,C.jsx)(j.Z,{onClose:l,children:(0,C.jsxs)("div",{className:b.Z.modal_container,children:[(0,C.jsx)(m.Z,{children:(0,C.jsxs)("div",{className:b.Z.modal_container_outer_header,children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:n("update_add_section")})}),(0,C.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,C.jsx)(v.Z,{}),(0,C.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,C.jsx)(S.Z,{label:n("section_name"),placeholder:n("section_name_placeholder"),name:"section_name",value:p.section_name,type:"text",onChange:e=>{f((l=>({...l,[e.target.name]:e.target.value})))},errorShow:s.section_name}),(0,C.jsx)(x.Z,{label:"update",onAction:()=>{let e=(0,y.l)(p,[]);(0,y.x)(e)&&o&&i?(u((e=>!e)),k({formId:o,bodyParameter:{section_name:p.section_name,section_key:w(p.section_name),section_visibilty:!0,fsid:i}}).then((()=>{t(),u((e=>!e)),l()})).catch({})):_(e)}})]}),h&&(0,C.jsx)(a.Z,{})]})})},w=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var N=o(20659),E=o(26071),A=o(9108);const R=e=>{var l;let{onClose:o,formId:t,onRefetch:i,sectionId:c}=e;const{t:n}=(0,r.$G)(),[s,_]=(0,d.useState)(""),[h,u]=(0,d.useState)(!1),[p,f]=(0,d.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[k]=(0,g.G0)(),I=e=>{f((l=>({...l,[e.target.name]:e.target.value})))},w=e=>{null!==A.E&&void 0!==A.E&&A.E.includes(e)?f((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]}))):f((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,C.jsx)(j.Z,{onClose:o,children:(0,C.jsxs)("div",{className:b.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,C.jsx)(m.Z,{children:(0,C.jsxs)("div",{className:b.Z.modal_container_outer_header,children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:n("add_field")})}),(0,C.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:o})]})}),(0,C.jsx)(v.Z,{}),(0,C.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,C.jsx)(N.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===A.S||void 0===A.S?void 0:A.S.map((e=>(0,C.jsx)(E.Z,{tile:e,onTile:w,activeTile:null===p||void 0===p?void 0:p.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,C.jsx)(S.Z,{label:n("field_label"),placeholder:n("field_label_placeholder"),name:"form_checklist_lable",value:p.form_checklist_lable,type:"text",onChange:I,errorShow:s.form_checklist_lable}),(0,C.jsx)(S.Z,{label:n("field_placeholder"),placeholder:n("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:p.form_checklist_placeholder,type:"text",onChange:I,errorShow:s.form_checklist_placeholder}),null!==A.E&&void 0!==A.E&&A.E.includes(p.form_checklist_typo)?(0,C.jsxs)("div",{style:{padding:"1rem"},children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:n("choices")})}),null===p||void 0===p||null===(l=p.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,C.jsx)(S.Z,{label:n("field_label"),placeholder:n("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const o=[...p.form_checklist_typo_option_pl];o[l].value=e.target.value,f((e=>({...e,form_checklist_typo_option_pl:o})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,C.jsx)(x.Z,{label:n("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...p.form_checklist_typo_option_pl],o=[];for(let i=0;i<(null===(t=l)||void 0===t?void 0:t.length);l++){var t;i===e||o.push(l[i])}f((e=>({...e,form_checklist_typo_option_pl:o})))})(l)})},"".concat(e).concat(l)))),(0,C.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{f((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,C.jsx)(x.Z,{label:"add",onAction:()=>{let e=(0,y.l)(p,["form_checklist_typo_option_pl"]);if((0,y.x)(e)&&t&&c){var l,n,s,d;u((e=>!e));let e=[];for(let l of p.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);k({formId:t,bodyParameter:{fsid:c,checklist:[{form_checklist_name:null!==(l=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:T(p.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(n=null===p||void 0===p?void 0:p.form_checklist_placeholder)&&void 0!==n?n:"",form_checklist_lable:null!==(s=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==s?s:"",form_checklist_typo:null!==(d=null===p||void 0===p?void 0:p.form_checklist_typo)&&void 0!==d?d:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),u((e=>!e)),o()})).catch({})}else _(e)}})]}),h&&(0,C.jsx)(a.Z,{})]})})},T=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var P=o(89064);const L=e=>{var l;let{onClose:o,formId:t,onRefetch:i,sectionId:c,data:n}=e;const{t:s}=(0,r.$G)(),[_,h]=(0,d.useState)(""),[u,p]=(0,d.useState)(!1),[f,k]=(0,d.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[I]=(0,g.DJ)();(0,d.useEffect)((()=>{if(n){var e,l,o,t,i,c;let s=[];for(let e of null===n||void 0===n?void 0:n.form_checklist_typo_option_pl)s.push({value:e});k({form_checklist_name:null!==(e=null===n||void 0===n?void 0:n.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(l=null===n||void 0===n?void 0:n.form_checklist_key)&&void 0!==l?l:"",form_checklist_visibility:null!==(o=null===n||void 0===n?void 0:n.form_checklist_visibility)&&void 0!==o&&o,form_checklist_placeholder:null!==(t=null===n||void 0===n?void 0:n.form_checklist_placeholder)&&void 0!==t?t:"",form_checklist_lable:null!==(i=null===n||void 0===n?void 0:n.form_checklist_lable)&&void 0!==i?i:"",form_checklist_typo:null!==(c=null===n||void 0===n?void 0:n.form_checklist_typo)&&void 0!==c?c:"",form_checklist_typo_option_pl:s})}}),[n]);const w=e=>{k((l=>({...l,[e.target.name]:e.target.value})))},R=e=>{null!==A.E&&void 0!==A.E&&A.E.includes(e)?k((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[...null===l||void 0===l?void 0:l.form_checklist_typo_option_pl,{value:""}]}))):k((l=>({...l,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,C.jsx)(j.Z,{onClose:o,children:(0,C.jsxs)("div",{className:b.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,C.jsx)(m.Z,{children:(0,C.jsxs)("div",{className:b.Z.modal_container_outer_header,children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:s("update_add_field")})}),(0,C.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:o})]})}),(0,C.jsx)(v.Z,{}),(0,C.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,C.jsx)(N.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===A.S||void 0===A.S?void 0:A.S.map((e=>(0,C.jsx)(E.Z,{tile:e,onTile:R,activeTile:null===f||void 0===f?void 0:f.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,C.jsx)(S.Z,{label:s("field_label"),placeholder:s("field_label_placeholder"),name:"form_checklist_lable",value:f.form_checklist_lable,type:"text",onChange:w,errorShow:_.form_checklist_lable}),(0,C.jsx)(S.Z,{label:s("field_placeholder"),placeholder:s("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:f.form_checklist_placeholder,type:"text",onChange:w,errorShow:_.form_checklist_placeholder}),null!==A.E&&void 0!==A.E&&A.E.includes(f.form_checklist_typo)?(0,C.jsxs)("div",{style:{padding:"1rem"},children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:s("choices")})}),null===f||void 0===f||null===(l=f.form_checklist_typo_option_pl)||void 0===l?void 0:l.map(((e,l)=>(0,C.jsx)(S.Z,{label:s("field_label"),placeholder:s("field_label_placeholder"),name:"".concat(e).concat(l),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,l)=>{const o=[...f.form_checklist_typo_option_pl];o[l].value=e.target.value,k((e=>({...e,form_checklist_typo_option_pl:o})))})(e,l),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,C.jsx)(x.Z,{label:s("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let l=[...f.form_checklist_typo_option_pl],o=[];for(let i=0;i<(null===(t=l)||void 0===t?void 0:t.length);l++){var t;i===e||o.push(l[i])}k((e=>({...e,form_checklist_typo_option_pl:o})))})(l)})},"".concat(e).concat(l)))),(0,C.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{k((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,C.jsx)(x.Z,{label:"update",onAction:()=>{let e=(0,y.l)(f,["form_checklist_typo_option_pl"]);if((0,y.x)(e)&&t&&c){var l,n,s,d;p((e=>!e));let e=[];for(let l of f.form_checklist_typo_option_pl)null!==l&&void 0!==l&&l.value&&e.push(null===l||void 0===l?void 0:l.value);I({formId:t,bodyParameter:{fsid:c,checklist:[{form_checklist_name:null!==(l=null===f||void 0===f?void 0:f.form_checklist_lable)&&void 0!==l?l:"",form_checklist_key:B(f.form_checklist_lable),form_checklist_visibility:f.form_checklist_visibility,form_checklist_placeholder:null!==(n=null===f||void 0===f?void 0:f.form_checklist_placeholder)&&void 0!==n?n:"",form_checklist_lable:null!==(s=null===f||void 0===f?void 0:f.form_checklist_lable)&&void 0!==s?s:"",form_checklist_typo:null!==(d=null===f||void 0===f?void 0:f.form_checklist_typo)&&void 0!==d?d:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),p((e=>!e)),o()})).catch({})}else h(e)}})]}),u&&(0,C.jsx)(a.Z,{})]})})},B=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()},D=e=>{let{onClose:l,onRefetch:o,data:t}=e;const{t:i}=(0,r.$G)(),[c,n]=(0,d.useState)(!1),[s,a]=(0,d.useState)("");return(0,C.jsx)(C.Fragment,{children:1===s?(0,C.jsx)(L,{onClose:()=>a(""),data:t,onParentClose:l,onRefetch:o}):(0,C.jsxs)(P.Z,{onClose:l,disabled:c,children:[(0,C.jsx)("h6",{onClick:()=>{a(1)},children:i("edit")}),(0,C.jsx)("h6",{children:i("delete")})]})})},F={inputProps:{"aria-label":"Switch demo"}},G=e=>{var l,o;let{st:t,onRefetch:i,formId:c}=e;const[n,s]=(0,d.useState)(!1),[r,_]=(0,d.useState)(!1),[h,m]=(0,d.useState)(!1),[y,j]=(0,d.useState)(!1),[b,Z]=(0,d.useState)(!1);(0,d.useEffect)((()=>{j(null===t||void 0===t?void 0:t.section_visibilty)}),[null===t||void 0===t?void 0:t.section_visibilty]);const[S]=(0,g.L4)(),[w]=(0,g.Lg)(),N=()=>{s((e=>!e))},E=()=>{_((e=>!e))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("section",{className:k.Z.sfsc_card,children:[(0,C.jsxs)("div",{className:k.Z.sfscc_outer,children:[(0,C.jsxs)("div",{className:k.Z.sfscc_container,children:[(0,C.jsx)(u.Z,{...F,checked:y,onChange:e=>{null!==t&&void 0!==t&&t._id&&c&&(Z((e=>!e)),S({formId:c,bodyParameter:{section_name:null===t||void 0===t?void 0:t.section_name,section_key:null===t||void 0===t?void 0:t.section_key,section_visibilty:e.target.checked,fsid:null===t||void 0===t?void 0:t._id}}).then((()=>{i(),Z((e=>!e))})).catch({}))}}),(0,C.jsx)("span",{children:null!==(l=null===t||void 0===t?void 0:t.section_name)&&void 0!==l?l:""})]}),y?(0,C.jsx)(x.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:N}):null]}),(0,C.jsxs)("div",{className:k.Z.sfsccc_inner,children:[null===t||void 0===t||null===(o=t.form_checklist)||void 0===o?void 0:o.map((e=>(0,C.jsx)("div",{className:k.Z.sfscc_outer,style:{width:"100%",opacity:y?"1":"0.7"},children:(0,C.jsx)(f.Z,{control:(0,C.jsx)(p.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:l=>y?((e,l)=>{null!==t&&void 0!==t&&t._id&&c&&l&&(Z((e=>!e)),w({formId:c,bodyParameter:{checkID:l,fsid:null===t||void 0===t?void 0:t._id,form_checklist_visibility:e.target.checked}}).then((()=>{i(),Z((e=>!e))})).catch({}))})(l,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id)}))),y?(0,C.jsx)(x.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:E}):null]})]}),(0,C.jsx)(v.Z,{}),r&&(0,C.jsx)(R,{onClose:E,formId:c,sectionId:null===t||void 0===t?void 0:t._id,onRefetch:i}),n&&(0,C.jsx)(I,{onClose:N,formId:c,sectionId:null===t||void 0===t?void 0:t._id,onRefetch:i,data:t}),b&&(0,C.jsx)(a.Z,{}),h&&(0,C.jsx)(D,{onClose:()=>{m((e=>!e))}})]})},W=e=>{let{onClose:l,formId:o,onRefetch:t}=e;const{t:i}=(0,r.$G)(),[c,n]=(0,d.useState)(""),[s,_]=(0,d.useState)(!1),[h,u]=(0,d.useState)({section_name:""}),[p]=(0,g.t9)();return(0,C.jsx)(j.Z,{onClose:l,children:(0,C.jsxs)("div",{className:b.Z.modal_container,children:[(0,C.jsx)(m.Z,{children:(0,C.jsxs)("div",{className:b.Z.modal_container_outer_header,children:[(0,C.jsx)("div",{className:b.Z.modal_container_header,children:(0,C.jsx)("h6",{children:i("add_section")})}),(0,C.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,C.jsx)(v.Z,{}),(0,C.jsxs)(m.Z,{customStyle:{paddingTop:"0"},children:[(0,C.jsx)(S.Z,{label:i("section_name"),placeholder:i("section_name_placeholder"),name:"section_name",value:h.section_name,type:"text",onChange:e=>{u((l=>({...l,[e.target.name]:e.target.value})))},errorShow:c.section_name}),(0,C.jsx)(x.Z,{label:"add",onAction:()=>{let e=(0,y.l)(h,[]);(0,y.x)(e)&&o?(_((e=>!e)),p({formId:o,bodyParameter:{form:[{section_name:h.section_name,section_key:$(h.section_name),section_visibilty:!0}]}}).then((()=>{t(),_((e=>!e)),l()})).catch({})):n(e)}})]}),s&&(0,C.jsx)(a.Z,{})]})})},$=e=>{let l=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===l||void 0===l?void 0:l.toLowerCase()};var J=o(1669);const q=e=>{let{formId:l}=e;const{t:o}=(0,r.$G)(),[t,i]=(0,d.useState)(!1),[c,n]=(0,d.useState)(!1),[s,u]=(0,d.useState)([]),[p,f]=(0,d.useState)(!1),k=(0,d.useRef)(),y=(0,d.useRef)(),j=e=>{const l=[...s],o=l[k.current];l.splice(k.current,1),l.splice(y.current,0,o),k.current=null,y.current=null,u(l)},[b]=(0,g.SX)(),{departmentStudentFormDetail:Z,departmentStudentFormDetailRefetch:S,departmentStudentFormDetailLoading:I}=(0,g.qX)({data:{formId:l},skip:!l});(0,d.useEffect)((()=>{Z&&u(Z)}),[Z]);const w=()=>{i((e=>!e))},N=()=>{n((e=>!e))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(h.Z,{children:[(0,C.jsx)(m.Z,{children:(0,C.jsxs)("div",{className:_.Z.fm_header_container,children:[(0,C.jsx)("h6",{children:o("student_form")}),(0,C.jsxs)("div",{className:_.Z.fm_flex,children:[(0,C.jsx)(x.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:w}),(0,C.jsx)(x.Z,{label:c?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:c?()=>{l&&(f((e=>!e)),b({formId:l,bodyParameter:{shuffle_arr:s}}).then((()=>{S(),f((e=>!e)),n(!1)})).catch({}))}:N}),c&&(0,C.jsx)(x.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:N})]})]})}),(0,C.jsx)(v.Z,{}),(0,C.jsxs)(m.Z,{children:[null===s||void 0===s?void 0:s.map(((e,o)=>(0,C.jsx)("div",{draggable:c,onDragStart:e=>{return l=o,void(k.current=l);var l},onDragEnter:e=>{return l=o,void(y.current=l);var l},onDragEnd:j,children:(0,C.jsx)(G,{st:e,onRefetch:S,formId:l})},null===e||void 0===e?void 0:e._id))),I&&(0,C.jsx)(J.Z,{})]})]}),p&&(0,C.jsx)(a.Z,{}),t&&(0,C.jsx)(W,{onClose:w,formId:l,onRefetch:S})]})};var z=o(74289);const X=()=>{var e,l,o,r;const[_]=(0,t.lr)(),h=(0,i.TH)(),{departmentProfile:m,departmentProfileRefetch:v}=(0,z.t2)({did:null===(e=h.state)||void 0===e?void 0:e.did,skip:!(null!==(l=h.state)&&void 0!==l&&l.did)});return(0,d.useEffect)((()=>{var e;null!==(e=h.state)&&void 0!==e&&e.did&&v()}),[null===(o=h.state)||void 0===o?void 0:o.did,v]),(0,C.jsx)(c.Z,{children:(0,C.jsx)(n.Z,{children:(0,C.jsxs)("section",{style:{width:"100%"},children:[(0,C.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,C.jsx)(d.Suspense,{fallback:(0,C.jsx)(a.Z,{}),children:"form"===_.get("type")?(0,C.jsx)(q,{formId:null===m||void 0===m||null===(r=m.department)||void 0===r?void 0:r.student_form_setting}):null})]})})})}}}]);
//# sourceMappingURL=70207.6d42d2c4.chunk.js.map