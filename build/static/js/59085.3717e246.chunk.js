"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[59085,54035,20420,31743,15230,50234,35067,88518,97778],{60981:(e,t,_)=>{_.d(t,{jK:()=>x,Gc:()=>I,fv:()=>S,Es:()=>j,iN:()=>w,xZ:()=>Z,hx:()=>M,wM:()=>U});var o=_(41557),i=_(94811);const n=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/section/staff/query"),method:i.a4,body:e.bodyParameter})}),a=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/checklist/staff/query"),method:i.a4,body:e.bodyParameter})}),l=e=>e.mutation({query:e=>({url:"/v1/ins/shuffle/form/".concat(e.formId,"/section/staff/query"),method:i.Q0,body:e.bodyParameter})}),r=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/staff/query"),method:i.Q0,body:e.bodyParameter})}),c=e=>e.query({query:e=>"/v1/ins/one/form/".concat(e.formId,"/section/staff/query"),transformResponse:e=>null===e||void 0===e?void 0:e.section,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:_}=e;return t!==_}}),s=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/checklist/staff/query"),method:i.Q0,body:e.bodyParameter})}),d=e=>e.query({query:e=>"/v1/ins/dynamic/form/details/query?flow=".concat(null===e||void 0===e?void 0:e.flow,"&did=").concat(null===e||void 0===e?void 0:e.flowId),transformResponse:e=>null!==e&&void 0!==e&&e.ins_form?null===e||void 0===e?void 0:e.ins_form:null===e||void 0===e?void 0:e.depart_form,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:_}=e;return t!==_}}),m=e=>e.query({query:e=>"/v1/ins/".concat(e.sid,"/dynamic/form/query"),transformResponse:e=>null===e||void 0===e?void 0:e.result,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:_}=e;return t!==_}}),f=o.s.injectEndpoints({endpoints:e=>({instituteStaffAddSection:n(e),instituteStaffSectionAddChecklist:a(e),instituteStaffRearrangeSection:l(e),instituteStaffUpdateSectionChecklist:r(e),instituteStaffFormDetail:c(e),instituteStaffToggleChecklist:s(e),staffProfileAboutDetail:m(e),staffApplyFormFieldDetail:d(e)})}),{useInstituteStaffAddSectionMutation:u,useInstituteStaffSectionAddChecklistMutation:h,useInstituteStaffRearrangeSectionMutation:p,useInstituteStaffUpdateSectionChecklistMutation:v,useInstituteStaffFormDetailQuery:b,useInstituteStaffToggleChecklistMutation:y,useStaffProfileAboutDetailQuery:g,useStaffApplyFormFieldDetailQuery:k}=f,x=()=>{const[e]=u();return[e]},j=()=>{const[e]=h();return[e]},S=()=>{const[e]=p();return[e]},Z=()=>{const[e]=v();return[e]},I=e=>{const{data:t,refetch:_,isFetching:o}=b(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{instituteStaffFormDetail:t,instituteStaffFormDetailRefetch:_,instituteStaffFormDetailLoading:o}},w=()=>{const[e]=y();return[e]},U=e=>{const{data:t,refetch:_,isFetching:o}=g(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffProfileAboutDetail:t,staffProfileAboutDetailRefetch:_,staffProfileAboutDetailLoading:o}},M=e=>{const{data:t,refetch:_,isFetching:o}=k(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffApplyFormFieldDetail:t,staffApplyFormFieldDetailRefetch:_,staffApplyFormFieldDetailLoading:o}}},18725:(e,t,_)=>{_.d(t,{Z:()=>n});var o=_(72156),i=_(80184);const n=e=>{let{customStyle:t,children:_}=e;return(0,i.jsx)("div",{className:o.Z.imc_main,style:t,children:_})}},20712:(e,t,_)=>{_.d(t,{Z:()=>a});var o=_(20772),i=_(72156),n=_(80184);const a=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:i.Z.navbar,children:(0,n.jsx)(o.default,{status:"home"})}),(0,n.jsx)("div",{className:i.Z.main_container,children:t})]})}},11914:(e,t,_)=>{_.r(t),_.d(t,{default:()=>W});var o=_(95048),i=_(43504),n=_(20712),a=_(18725),l=_(2205),r=_(72791),c=_(55336),s=_(39480),d=_(39230),m=_(56959),f=_(63687),u=_(21348),h=_(90904),p=_(89891),v=_(13034),b=_(25801),y=_(3399),g=_(93638),k=_(99183),x=_(38857),j=_(16925),S=_(98684),Z=_(61055),I=_(60981),w=_(80184);const U=e=>{let{onClose:t,formId:_,onRefetch:o,sectionId:i,data:n}=e;const{t:a}=(0,d.$G)(),[l,s]=(0,r.useState)(""),[m,f]=(0,r.useState)(!1),[p,v]=(0,r.useState)({section_name:"",section_key:"",section_visibilty:!0});(0,r.useEffect)((()=>{var e,t,_;n&&v({section_name:null!==(e=null===n||void 0===n?void 0:n.section_name)&&void 0!==e?e:"",section_key:null!==(t=null===n||void 0===n?void 0:n.section_key)&&void 0!==t?t:"",section_visibilty:null===(_=null===n||void 0===n?void 0:n.section_visibilty)||void 0===_||_})}),[n]);const[b]=(0,I.xZ)();return(0,w.jsx)(x.Z,{onClose:t,children:(0,w.jsxs)("div",{className:j.Z.modal_container,children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:a("update_add_section")})}),(0,w.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,w.jsx)(h.Z,{}),(0,w.jsxs)(u.Z,{customStyle:{paddingTop:"0"},children:[(0,w.jsx)(Z.Z,{label:a("section_name"),placeholder:a("section_name_placeholder"),name:"section_name",value:p.section_name,type:"text",onChange:e=>{v((t=>({...t,[e.target.name]:e.target.value})))},errorShow:l.section_name}),(0,w.jsx)(g.Z,{label:"update",onAction:()=>{let e=(0,k.l)(p,[]);(0,k.x)(e)&&_&&i?(f((e=>!e)),b({formId:_,bodyParameter:{section_name:p.section_name,section_key:M(p.section_name),section_visibilty:!0,fsid:i,checklist:[],cid:""}}).then((()=>{o(),f((e=>!e)),t()})).catch({})):s(e)}})]}),m&&(0,w.jsx)(c.Z,{})]})})},M=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var C=_(20659),F=_(26071),T=_(9108);const N=e=>{var t;let{onClose:_,formId:o,onRefetch:i,sectionId:n}=e;const{t:a}=(0,d.$G)(),[l,s]=(0,r.useState)(""),[m,f]=(0,r.useState)(!1),[p,v]=(0,r.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[b]=(0,I.Es)(),y=e=>{v((t=>({...t,[e.target.name]:e.target.value})))},U=e=>{null!==T.Ew&&void 0!==T.Ew&&T.Ew.includes(e)?v((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]}))):v((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,w.jsx)(x.Z,{onClose:_,children:(0,w.jsxs)("div",{className:j.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:a("add_field")})}),(0,w.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:_})]})}),(0,w.jsx)(h.Z,{}),(0,w.jsxs)(u.Z,{customStyle:{paddingTop:"0"},children:[(0,w.jsx)(C.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===T.SL||void 0===T.SL?void 0:T.SL.map((e=>(0,w.jsx)(F.Z,{tile:e,onTile:U,activeTile:null===p||void 0===p?void 0:p.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,w.jsx)(Z.Z,{label:a("field_label"),placeholder:a("field_label_placeholder"),name:"form_checklist_lable",value:p.form_checklist_lable,type:"text",onChange:y,errorShow:l.form_checklist_lable}),(0,w.jsx)(Z.Z,{label:a("field_placeholder"),placeholder:a("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:p.form_checklist_placeholder,type:"text",onChange:y,errorShow:l.form_checklist_placeholder}),null!==T.Ew&&void 0!==T.Ew&&T.Ew.includes(p.form_checklist_typo)?(0,w.jsxs)("div",{style:{padding:"1rem"},children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:a("choices")})}),null===p||void 0===p||null===(t=p.form_checklist_typo_option_pl)||void 0===t?void 0:t.map(((e,t)=>(0,w.jsx)(Z.Z,{label:a("field_label"),placeholder:a("field_label_placeholder"),name:"".concat(e).concat(t),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,t)=>{const _=[...p.form_checklist_typo_option_pl];_[t].value=e.target.value,v((e=>({...e,form_checklist_typo_option_pl:_})))})(e,t),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,w.jsx)(g.Z,{label:a("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let t=[...p.form_checklist_typo_option_pl],_=[];for(let i=0;i<(null===(o=t)||void 0===o?void 0:o.length);t++){var o;i===e||_.push(t[i])}v((e=>({...e,form_checklist_typo_option_pl:_})))})(t)})},"".concat(e).concat(t)))),(0,w.jsx)(g.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{v((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,w.jsx)(g.Z,{label:"add",onAction:()=>{let e=(0,k.l)(p,["form_checklist_typo_option_pl"]);if((0,k.x)(e)&&o&&n){var t,a,l,r;f((e=>!e));let e=[];for(let t of p.form_checklist_typo_option_pl)null!==t&&void 0!==t&&t.value&&e.push(null===t||void 0===t?void 0:t.value);b({formId:o,bodyParameter:{fsid:n,checklist:[{form_checklist_name:null!==(t=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==t?t:"",form_checklist_key:P(p.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(a=null===p||void 0===p?void 0:p.form_checklist_placeholder)&&void 0!==a?a:"",form_checklist_lable:null!==(l=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==l?l:"",form_checklist_typo:null!==(r=null===p||void 0===p?void 0:p.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),f((e=>!e)),_()})).catch({})}else s(e)}})]}),m&&(0,w.jsx)(c.Z,{})]})})},P=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var A=_(89064),q=_(98853);const B=e=>{var t;let{onClose:_,formId:o,onRefetch:i,sectionId:n,data:a}=e;const{t:l}=(0,d.$G)(),[s,m]=(0,r.useState)(""),[f,p]=(0,r.useState)(!1),[v,b]=(0,r.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[y]=(0,q.DJ)();(0,r.useEffect)((()=>{if(a){var e,t,_,o,i,n;let l=[];for(let e of null===a||void 0===a?void 0:a.form_checklist_typo_option_pl)l.push({value:e});b({form_checklist_name:null!==(e=null===a||void 0===a?void 0:a.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(t=null===a||void 0===a?void 0:a.form_checklist_key)&&void 0!==t?t:"",form_checklist_visibility:null!==(_=null===a||void 0===a?void 0:a.form_checklist_visibility)&&void 0!==_&&_,form_checklist_placeholder:null!==(o=null===a||void 0===a?void 0:a.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(i=null===a||void 0===a?void 0:a.form_checklist_lable)&&void 0!==i?i:"",form_checklist_typo:null!==(n=null===a||void 0===a?void 0:a.form_checklist_typo)&&void 0!==n?n:"",form_checklist_typo_option_pl:l})}}),[a]);const I=e=>{b((t=>({...t,[e.target.name]:e.target.value})))},U=e=>{null!==T.Ew&&void 0!==T.Ew&&T.Ew.includes(e)?b((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[...null===t||void 0===t?void 0:t.form_checklist_typo_option_pl,{value:""}]}))):b((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,w.jsx)(x.Z,{onClose:_,children:(0,w.jsxs)("div",{className:j.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:l("update_add_field")})}),(0,w.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:_})]})}),(0,w.jsx)(h.Z,{}),(0,w.jsxs)(u.Z,{customStyle:{paddingTop:"0"},children:[(0,w.jsx)(C.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===T.SL||void 0===T.SL?void 0:T.SL.map((e=>(0,w.jsx)(F.Z,{tile:e,onTile:U,activeTile:null===v||void 0===v?void 0:v.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,w.jsx)(Z.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"form_checklist_lable",value:v.form_checklist_lable,type:"text",onChange:I,errorShow:s.form_checklist_lable}),(0,w.jsx)(Z.Z,{label:l("field_placeholder"),placeholder:l("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:v.form_checklist_placeholder,type:"text",onChange:I,errorShow:s.form_checklist_placeholder}),null!==T.Ew&&void 0!==T.Ew&&T.Ew.includes(v.form_checklist_typo)?(0,w.jsxs)("div",{style:{padding:"1rem"},children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:l("choices")})}),null===v||void 0===v||null===(t=v.form_checklist_typo_option_pl)||void 0===t?void 0:t.map(((e,t)=>(0,w.jsx)(Z.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"".concat(e).concat(t),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,t)=>{const _=[...v.form_checklist_typo_option_pl];_[t].value=e.target.value,b((e=>({...e,form_checklist_typo_option_pl:_})))})(e,t),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,w.jsx)(g.Z,{label:l("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let t=[...v.form_checklist_typo_option_pl],_=[];for(let i=0;i<(null===(o=t)||void 0===o?void 0:o.length);t++){var o;i===e||_.push(t[i])}b((e=>({...e,form_checklist_typo_option_pl:_})))})(t)})},"".concat(e).concat(t)))),(0,w.jsx)(g.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{b((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,w.jsx)(g.Z,{label:"update",onAction:()=>{let e=(0,k.l)(v,["form_checklist_typo_option_pl"]);if((0,k.x)(e)&&o&&n){var t,a,l,r;p((e=>!e));let e=[];for(let t of v.form_checklist_typo_option_pl)null!==t&&void 0!==t&&t.value&&e.push(null===t||void 0===t?void 0:t.value);y({formId:o,bodyParameter:{fsid:n,checklist:[{form_checklist_name:null!==(t=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==t?t:"",form_checklist_key:R(v.form_checklist_lable),form_checklist_visibility:v.form_checklist_visibility,form_checklist_placeholder:null!==(a=null===v||void 0===v?void 0:v.form_checklist_placeholder)&&void 0!==a?a:"",form_checklist_lable:null!==(l=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==l?l:"",form_checklist_typo:null!==(r=null===v||void 0===v?void 0:v.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{i(),p((e=>!e)),_()})).catch({})}else m(e)}})]}),f&&(0,w.jsx)(c.Z,{})]})})},R=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()},D=e=>{let{onClose:t,onRefetch:_,data:o}=e;const{t:i}=(0,d.$G)(),[n,a]=(0,r.useState)(!1),[l,c]=(0,r.useState)("");return(0,w.jsx)(w.Fragment,{children:1===l?(0,w.jsx)(B,{onClose:()=>c(""),data:o,onParentClose:t,onRefetch:_}):(0,w.jsxs)(A.Z,{onClose:t,disabled:n,children:[(0,w.jsx)("h6",{onClick:()=>{c(1)},children:i("edit")}),(0,w.jsx)("h6",{children:i("delete")})]})})},E={inputProps:{"aria-label":"Switch demo"}},L=e=>{var t,_;let{st:o,onRefetch:i,formId:n}=e;const[a,l]=(0,r.useState)(!1),[s,d]=(0,r.useState)(!1),[m,f]=(0,r.useState)(!1),[u,k]=(0,r.useState)(!1),[x,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{k(null===o||void 0===o?void 0:o.section_visibilty)}),[null===o||void 0===o?void 0:o.section_visibilty]);const[S]=(0,I.xZ)(),[Z]=(0,I.iN)(),M=()=>{l((e=>!e))},C=()=>{d((e=>!e))},F=(e,t)=>{null!==o&&void 0!==o&&o._id&&n&&e&&(j((e=>!e)),Z({formId:n,bodyParameter:{checkID:e,fsid:null===o||void 0===o?void 0:o._id,form_checklist_required:"Yes"===t}}).then((()=>{i(),j((e=>!e))})).catch({}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("section",{className:y.Z.sfsc_card,children:[(0,w.jsxs)("div",{className:y.Z.sfscc_outer,children:[(0,w.jsxs)("div",{className:y.Z.sfscc_container,children:[(0,w.jsx)(p.Z,{...E,checked:u,onChange:e=>{null!==o&&void 0!==o&&o._id&&n&&(j((e=>!e)),S({formId:n,bodyParameter:{section_name:null===o||void 0===o?void 0:o.section_name,section_key:null===o||void 0===o?void 0:o.section_key,section_visibilty:e.target.checked,fsid:null===o||void 0===o?void 0:o._id,checklist:[],cid:""}}).then((()=>{i(),j((e=>!e))})).catch({}))}}),(0,w.jsx)("span",{children:null!==(t=null===o||void 0===o?void 0:o.section_name)&&void 0!==t?t:""})]}),u?(0,w.jsx)(g.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:M}):null]}),(0,w.jsxs)("div",{className:y.Z.sfsccc_inner,children:[null===o||void 0===o||null===(_=o.form_checklist)||void 0===_?void 0:_.map((e=>"BUTTON"===(null===e||void 0===e?void 0:e.form_checklist_typo)?null:(0,w.jsxs)("div",{className:y.Z.sfscc_outer,style:{width:"100%",opacity:u?"1":"0.7",justifyContent:"flex-start",gap:"1rem"},children:[(0,w.jsx)(b.Z,{control:(0,w.jsx)(v.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:t=>u?((e,t)=>{null!==o&&void 0!==o&&o._id&&n&&t&&(j((e=>!e)),Z({formId:n,bodyParameter:{checkID:t,fsid:null===o||void 0===o?void 0:o._id,form_checklist_visibility:e.target.checked}}).then((()=>{i(),j((e=>!e))})).catch({}))})(t,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id),(0,w.jsxs)("div",{children:["(",(0,w.jsx)("span",{style:{cursor:"pointer",color:null!==e&&void 0!==e&&e.form_checklist_required?"#0942a6":"rgba(18, 18, 18, 0.7)",fontWeight:null!==e&&void 0!==e&&e.form_checklist_required?600:400},onClick:()=>F(null===e||void 0===e?void 0:e._id,"Yes"),children:"Required"})," ","/"," ",(0,w.jsx)("span",{style:{cursor:"pointer",color:null!==e&&void 0!==e&&e.form_checklist_required?"rgba(18, 18, 18, 0.7)":"#0942a6",fontWeight:null!==e&&void 0!==e&&e.form_checklist_required?400:600},onClick:()=>F(null===e||void 0===e?void 0:e._id,"No"),children:"Optional"}),")"]})]}))),u?(0,w.jsx)(g.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:C}):null]})]}),(0,w.jsx)(h.Z,{}),s&&(0,w.jsx)(N,{onClose:C,formId:n,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i}),a&&(0,w.jsx)(U,{onClose:M,formId:n,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i,data:o}),x&&(0,w.jsx)(c.Z,{}),m&&(0,w.jsx)(D,{onClose:()=>{f((e=>!e))}})]})},z=e=>{let{onClose:t,formId:_,onRefetch:o}=e;const{t:i}=(0,d.$G)(),[n,a]=(0,r.useState)(""),[l,s]=(0,r.useState)(!1),[m,f]=(0,r.useState)({section_name:""}),[p]=(0,I.jK)();return(0,w.jsx)(x.Z,{onClose:t,children:(0,w.jsxs)("div",{className:j.Z.modal_container,children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,w.jsx)("div",{className:j.Z.modal_container_header,children:(0,w.jsx)("h6",{children:i("add_section")})}),(0,w.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,w.jsx)(h.Z,{}),(0,w.jsxs)(u.Z,{customStyle:{paddingTop:"0"},children:[(0,w.jsx)(Z.Z,{label:i("section_name"),placeholder:i("section_name_placeholder"),name:"section_name",value:m.section_name,type:"text",onChange:e=>{f((t=>({...t,[e.target.name]:e.target.value})))},errorShow:n.section_name}),(0,w.jsx)(g.Z,{label:"add",onAction:()=>{let e=(0,k.l)(m,[]);(0,k.x)(e)&&_?(s((e=>!e)),p({formId:_,bodyParameter:{form:[{section_name:m.section_name,section_key:G(m.section_name),section_visibilty:!0}]}}).then((()=>{o(),s((e=>!e)),t()})).catch({})):a(e)}})]}),l&&(0,w.jsx)(c.Z,{})]})})},G=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var Y=_(1669);const O=e=>{let{instituteId:t,formId:_}=e;const{t:o}=(0,d.$G)(),[i,n]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!1),[s,p]=(0,r.useState)([]),[v,b]=(0,r.useState)(!1),y=(0,r.useRef)(),k=(0,r.useRef)(),x=e=>{const t=[...s],_=t[y.current];t.splice(y.current,1),t.splice(k.current,0,_),y.current=null,k.current=null,p(t)},[j]=(0,I.fv)(),{instituteStaffFormDetail:S,instituteStaffFormDetailRefetch:Z,instituteStaffFormDetailLoading:U}=(0,I.Gc)({data:{formId:_},skip:!_});(0,r.useEffect)((()=>{S&&p(S)}),[S]);const M=()=>{n((e=>!e))},C=()=>{l((e=>!e))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f.default,{children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)("div",{className:m.Z.fm_header_container,children:[(0,w.jsx)("h6",{children:o("staff_form")}),(0,w.jsxs)("div",{className:m.Z.fm_flex,children:[(0,w.jsx)(g.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:M}),(0,w.jsx)(g.Z,{label:a?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:a?()=>{_&&(b((e=>!e)),j({formId:_,bodyParameter:{shuffle_arr:s}}).then((()=>{Z(),b((e=>!e)),l(!1)})).catch({}))}:C}),a&&(0,w.jsx)(g.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:C})]})]})}),(0,w.jsx)(h.Z,{}),(0,w.jsxs)(u.Z,{children:[null===s||void 0===s?void 0:s.map(((e,o)=>(0,w.jsx)("div",{draggable:a,onDragStart:e=>{return t=o,void(y.current=t);var t},onDragEnter:e=>{return t=o,void(k.current=t);var t},onDragEnd:x,children:(0,w.jsx)(L,{st:e,onRefetch:Z,formId:_,instituteId:t})},null===e||void 0===e?void 0:e._id))),U&&(0,w.jsx)(Y.Z,{})]})]}),v&&(0,w.jsx)(c.Z,{}),i&&(0,w.jsx)(z,{onClose:M,formId:_,onRefetch:Z})]})},W=()=>{var e;const[t]=(0,i.lr)(),_=(0,o.v9)((e=>e.idChange.id)),{oneInstituteDashboard:d,oneInstituteDashboardRefetch:m}=(0,s.gq)({id:_,skip:!_});return(0,r.useEffect)((()=>{_&&m()}),[m]),(0,w.jsx)(n.Z,{children:(0,w.jsx)(a.Z,{children:(0,w.jsxs)("section",{style:{width:"100%"},children:[(0,w.jsx)(l.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,w.jsx)(r.Suspense,{fallback:(0,w.jsx)(c.Z,{}),children:"form"===t.get("type")?(0,w.jsx)(O,{instituteId:_,formId:null===d||void 0===d||null===(e=d.institute)||void 0===e?void 0:e.staff_form_setting}):null})]})})})}},55336:(e,t,_)=>{_.d(t,{Z:()=>n});var o=_(63244),i=_(80184);const n=()=>(0,i.jsx)("div",{className:o.Z.qviple_loader_backdrop,children:(0,i.jsx)("div",{className:o.Z.qviple_loader_container,children:(0,i.jsx)("div",{className:o.Z.qviple_loader_rotation})})})},2205:(e,t,_)=>{_.d(t,{Z:()=>c});var o=_(72791),i=_(37371),n=_(16871),a=_(98684),l=_(39230),r=_(80184);const c=e=>{let{customStyle:t}=e;const _=(0,n.s0)(),{t:c}=(0,l.$G)();(0,o.useEffect)((()=>{var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);return(0,r.jsx)("div",{className:i.Z.goback_container,id:"scrollView",style:t,children:(0,r.jsxs)("div",{className:i.Z.goback_container_text,onClick:()=>{_(-1)},children:[(0,r.jsx)("img",{src:"".concat(a.Fk,"/go-back.svg"),alt:"go back icon"}),(0,r.jsx)("h6",{className:i.Z.goback_container_text_go,children:c("go_back")})]})})}},90904:(e,t,_)=>{_.d(t,{Z:()=>n});const o="BorderBottom_split_content__RVPoh";var i=_(80184);const n=e=>{let{customStyleBorder:t}=e;return(0,i.jsx)("hr",{className:o,style:t})}},93638:(e,t,_)=>{_.d(t,{Z:()=>a});var o=_(39230),i=_(80476),n=_(80184);const a=e=>{let{label:t,count:_,onAction:a,customStyle:l,isTranslate:r}=e;const{t:c}=(0,o.$G)();return r?(0,n.jsxs)("div",{className:i.Z.create_btn_container,onClick:a,style:l,children:[_>0?(0,n.jsxs)("span",{children:[_," "]}):null,t]}):(0,n.jsxs)("div",{className:i.Z.create_btn_container,onClick:a,style:l,children:[_>0?(0,n.jsxs)("span",{children:[_," "]}):null,c(t)]})}},61055:(e,t,_)=>{_.d(t,{Z:()=>l});var o=_(39230),i=_(52245),n=_(80184);const a=["tel","number"],l=e=>{let{label:t,name:_,msg:l,type:r,value:c,onChange:s,placeholder:d,maxLength:m,customFormInputContainer:f,customFormInputLabel:u,customFormInput:h,errorShow:p,disabled:v,children:b}=e;const{t:y}=(0,o.$G)();return(0,n.jsxs)("div",{className:i.Z.form_input_container,style:f,children:[t&&(0,n.jsxs)("label",{className:i.Z.form_input_label,style:u,htmlFor:_,children:[t,l?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("span",{className:i.Z.form_input_label_error,children:[" "," "," ",l]})}):p?(0,n.jsxs)("span",{className:i.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,b]}),a.includes(r)?(0,n.jsx)("input",{className:i.Z.form_input,type:r,value:c,onChange:s,name:_,placeholder:d,maxLength:null!==m&&void 0!==m?m:100,disabled:v,style:h}):(0,n.jsx)("input",{className:i.Z.form_input,type:r,value:c,onChange:s,name:_,placeholder:d,disabled:v,style:h})]})}},38857:(e,t,_)=>{_.d(t,{Z:()=>r});var o=_(79864),i=_(54164),n=_(15783),a=_(80184);const l=e=>{let{modalState:t,isHide:_,customOverlayStyle:o,children:l}=e;return i.createPortal((0,a.jsx)("div",{className:n.Z.modal_overlay,style:{...o},children:l}),document.getElementById("overlay"))},r=e=>{let{onClose:t,modalState:_,customBackdropStyle:i,customOverlayStyle:n,children:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{onBackdropClose:t,customBackdropStyle:i}),(0,a.jsx)(l,{customOverlayStyle:n,children:r})]})}},89064:(e,t,_)=>{_.d(t,{Z:()=>r});var o=_(55336),i=_(38857);const n="Modal_modal_menu_card__d0zzt";var a=_(90904),l=_(80184);const r=e=>{let{onClose:t,disabled:_,heading:r,customStyle:c,customBackdropStyle:s,customOverlayStyle:d,children:m}=e;return(0,l.jsx)(i.Z,{onClose:()=>{if(_)return null;t()},customBackdropStyle:s,customOverlayStyle:d,children:(0,l.jsxs)("div",{className:n,style:c,children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h5",{children:r}),(0,l.jsx)(a.Z,{})]}):null,m,_&&(0,l.jsx)(o.Z,{})]})})}},63687:(e,t,_)=>{_.r(t),_.d(t,{default:()=>n});var o=_(59393),i=_(80184);const n=e=>{let{customStyle:t,children:_}=e;return(0,i.jsx)("div",{className:o.Z.user_member_container_wrapper,style:t,children:_})}},21348:(e,t,_)=>{_.d(t,{Z:()=>n});var o=_(59393),i=_(80184);const n=e=>{let{customStyle:t,children:_}=e;return(0,i.jsx)("div",{className:o.Z.user_member_content_wrapper,style:t,children:_})}},79864:(e,t,_)=>{_.d(t,{Z:()=>l});var o=_(72791),i=_(54164),n=_(15783),a=_(80184);const l=e=>{let{onBackdropClose:t,customBackdropStyle:_}=e;const l=(0,o.useCallback)((()=>{if(!t)return null;t()}),[t]);return i.createPortal((0,a.jsx)("div",{className:n.Z.modal_backdrop,onClick:l,style:_}),document.getElementById("backdrop"))}},72156:(e,t,_)=>{_.d(t,{Z:()=>o});const o={navbar:"InstituteMember_navbar__5JyaV",main_container:"InstituteMember_main_container__tbpZq",imc_main:"InstituteMember_imc_main__Ull73",isb_container:"InstituteMember_isb_container__iT5zY",isb_img:"InstituteMember_isb_img__mwRdx",isb_sub_container:"InstituteMember_isb_sub_container__mK-24",isc_container:"InstituteMember_isc_container__cteOp",isc_sub_container:"InstituteMember_isc_sub_container__Zw-ap",iadc_side:"InstituteMember_iadc_side__LTPT8",iadc_main:"InstituteMember_iadc_main__ijKI4",iadt_container:"InstituteMember_iadt_container__0pvyz",iadtc_card:"InstituteMember_iadtc_card__9K69-",iadtc_card_active:"InstituteMember_iadtc_card_active__jEB5j",iads_cover:"InstituteMember_iads_cover__T2YJO",iads_card:"InstituteMember_iads_card__v4Bgx",iads_card_active:"InstituteMember_iads_card_active__Q+S0x",iadsc_inner:"InstituteMember_iadsc_inner__2-eB5",iadds_continer:"InstituteMember_iadds_continer__WJP3J",iaddsc_globe:"InstituteMember_iaddsc_globe__zY1vi",iaddsc_edit:"InstituteMember_iaddsc_edit__otiJr"}},37371:(e,t,_)=>{_.d(t,{Z:()=>o});const o={goback_container:"StaffStudentProfile_goback_container__ujSak",goback_container_text:"StaffStudentProfile_goback_container_text__YumHh",goback_container_text_go:"StaffStudentProfile_goback_container_text_go__KImuv",student_from_container:"StaffStudentProfile_student_from_container__XirC9",staff_header_container:"StaffStudentProfile_staff_header_container__T0tjm",staff_header_text:"StaffStudentProfile_staff_header_text__rqHvT",staff_profile_photo_container:"StaffStudentProfile_staff_profile_photo_container__jkVeQ",staff_profile_photo_container_inner:"StaffStudentProfile_staff_profile_photo_container_inner__RlghK",staff_profile_photo_image:"StaffStudentProfile_staff_profile_photo_image__wGRLi",staff_profile_photo_info:"StaffStudentProfile_staff_profile_photo_info__leE4S",staff_profile_photo_name:"StaffStudentProfile_staff_profile_photo_name__zSMjq",staff_profile_photo_index:"StaffStudentProfile_staff_profile_photo_index__nKKs7",card_hold_container:"StaffStudentProfile_card_hold_container__DqWAD",sataf_container:"StaffStudentProfile_sataf_container__dx01S",sataf_container_count:"StaffStudentProfile_sataf_container_count__EB7hD",sataf_container_count_inner:"StaffStudentProfile_sataf_container_count_inner__Sykk5",satafcci_text:"StaffStudentProfile_satafcci_text__z9fpa",satafcci_amount:"StaffStudentProfile_satafcci_amount__smGsB"}},80476:(e,t,_)=>{_.d(t,{Z:()=>o});const o={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:(e,t,_)=>{_.d(t,{Z:()=>o});const o={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},51416:(e,t,_)=>{_.d(t,{Z:()=>o});const o={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",square_tab_card_icon:"UiTab_square_tab_card_icon__tPYT1",square_tab_card_menu:"UiTab_square_tab_card_menu__wHBYi",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},59393:(e,t,_)=>{_.d(t,{Z:()=>o});const o={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},56959:(e,t,_)=>{_.d(t,{Z:()=>o});const o={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},16925:(e,t,_)=>{_.d(t,{Z:()=>o});const o={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}},15783:(e,t,_)=>{_.d(t,{Z:()=>o});const o={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=59085.3717e246.chunk.js.map