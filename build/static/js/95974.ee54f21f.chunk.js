"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[95974,3971,21348,94626,67032,51416,74258],{65543:(e,t,i)=>{i.d(t,{u:()=>n});var o=i(72791);const n=()=>({hideScrollbar:o.useCallback((()=>{}),[]),showScrollbar:o.useCallback((()=>{document.body.style.overflow=""}),[]),scrollToTop:o.useCallback((()=>{window.scrollTo(0,0)}),[])})},60981:(e,t,i)=>{i.d(t,{jK:()=>y,Gc:()=>w,fv:()=>S,Es:()=>j,iN:()=>I,xZ:()=>Z,hx:()=>C,wM:()=>M});var o=i(41557),n=i(94811);const a=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/section/staff/query"),method:n.a4,body:e.bodyParameter})}),l=e=>e.mutation({query:e=>({url:"/v1/ins/new/form/".concat(e.formId,"/checklist/staff/query"),method:n.a4,body:e.bodyParameter})}),_=e=>e.mutation({query:e=>({url:"/v1/ins/shuffle/form/".concat(e.formId,"/section/staff/query"),method:n.Q0,body:e.bodyParameter})}),r=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/staff/query"),method:n.Q0,body:e.bodyParameter})}),c=e=>e.query({query:e=>"/v1/ins/one/form/".concat(e.formId,"/section/staff/query"),transformResponse:e=>null===e||void 0===e?void 0:e.section,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:i}=e;return t!==i}}),s=e=>e.mutation({query:e=>({url:"/v1/ins/edit/form/".concat(e.formId,"/section/checklist/staff/query"),method:n.Q0,body:e.bodyParameter})}),d=e=>e.query({query:e=>"/v1/ins/dynamic/form/details/query?flow=".concat(null===e||void 0===e?void 0:e.flow,"&did=").concat(null===e||void 0===e?void 0:e.flowId),transformResponse:e=>null!==e&&void 0!==e&&e.ins_form?null===e||void 0===e?void 0:e.ins_form:null===e||void 0===e?void 0:e.depart_form,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:i}=e;return t!==i}}),f=e=>e.query({query:e=>"/v1/ins/".concat(e.sid,"/dynamic/form/query"),transformResponse:e=>null===e||void 0===e?void 0:e.result,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:i}=e;return t!==i}}),m=o.s.injectEndpoints({endpoints:e=>({instituteStaffAddSection:a(e),instituteStaffSectionAddChecklist:l(e),instituteStaffRearrangeSection:_(e),instituteStaffUpdateSectionChecklist:r(e),instituteStaffFormDetail:c(e),instituteStaffToggleChecklist:s(e),staffProfileAboutDetail:f(e),staffApplyFormFieldDetail:d(e)})}),{useInstituteStaffAddSectionMutation:u,useInstituteStaffSectionAddChecklistMutation:h,useInstituteStaffRearrangeSectionMutation:v,useInstituteStaffUpdateSectionChecklistMutation:p,useInstituteStaffFormDetailQuery:b,useInstituteStaffToggleChecklistMutation:g,useStaffProfileAboutDetailQuery:k,useStaffApplyFormFieldDetailQuery:x}=m,y=()=>{const[e]=u();return[e]},j=()=>{const[e]=h();return[e]},S=()=>{const[e]=v();return[e]},Z=()=>{const[e]=p();return[e]},w=e=>{const{data:t,refetch:i,isFetching:o}=b(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{instituteStaffFormDetail:t,instituteStaffFormDetailRefetch:i,instituteStaffFormDetailLoading:o}},I=()=>{const[e]=g();return[e]},M=e=>{const{data:t,refetch:i,isFetching:o}=k(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffProfileAboutDetail:t,staffProfileAboutDetailRefetch:i,staffProfileAboutDetailLoading:o}},C=e=>{const{data:t,refetch:i,isFetching:o}=x(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{staffApplyFormFieldDetail:t,staffApplyFormFieldDetailRefetch:i,staffApplyFormFieldDetailLoading:o}}},18725:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(72156),n=i(80184);const a=e=>{let{customStyle:t,children:i}=e;return(0,n.jsx)("div",{className:o.Z.imc_main,style:t,children:i})}},20712:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(20772),n=i(72156),a=i(80184);const l=e=>{let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:n.Z.navbar,children:(0,a.jsx)(o.default,{status:"home"})}),(0,a.jsx)("div",{className:n.Z.main_container,children:t})]})}},11914:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var o=i(95048),n=i(43504),a=i(20712),l=i(18725),_=i(2205),r=i(72791),c=i(55336),s=i(39480),d=i(39230),f=i(56959),m=i(63687),u=i(21348),h=i(90904),v=i(89891),p=i(13034),b=i(25801),g=i(3399),k=i(93638),x=i(99183),y=i(38857),j=i(16925),S=i(98684),Z=i(61055),w=i(60981),I=i(80184);const M=e=>{let{onClose:t,formId:i,onRefetch:o,sectionId:n,data:a}=e;const{t:l}=(0,d.$G)(),[_,s]=(0,r.useState)(""),[f,m]=(0,r.useState)(!1),[v,p]=(0,r.useState)({section_name:"",section_key:"",section_visibilty:!0});(0,r.useEffect)((()=>{var e,t,i;a&&p({section_name:null!==(e=null===a||void 0===a?void 0:a.section_name)&&void 0!==e?e:"",section_key:null!==(t=null===a||void 0===a?void 0:a.section_key)&&void 0!==t?t:"",section_visibilty:null===(i=null===a||void 0===a?void 0:a.section_visibilty)||void 0===i||i})}),[a]);const[b]=(0,w.xZ)();return(0,I.jsx)(y.Z,{onClose:t,children:(0,I.jsxs)("div",{className:j.Z.modal_container,children:[(0,I.jsx)(u.default,{children:(0,I.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:l("update_add_section")})}),(0,I.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(u.default,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(Z.Z,{label:l("section_name"),placeholder:l("section_name_placeholder"),name:"section_name",value:v.section_name,type:"text",onChange:e=>{p((t=>({...t,[e.target.name]:e.target.value})))},errorShow:_.section_name}),(0,I.jsx)(k.Z,{label:"update",onAction:()=>{let e=(0,x.l)(v,[]);(0,x.x)(e)&&i&&n?(m((e=>!e)),b({formId:i,bodyParameter:{section_name:v.section_name,section_key:C(v.section_name),section_visibilty:!0,fsid:n,checklist:[],cid:""}}).then((()=>{o(),m((e=>!e)),t()})).catch({})):s(e)}})]}),f&&(0,I.jsx)(c.default,{})]})})},C=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var F=i(20659),T=i(26071),q=i(9108);const P=e=>{var t;let{onClose:i,formId:o,onRefetch:n,sectionId:a}=e;const{t:l}=(0,d.$G)(),[_,s]=(0,r.useState)(""),[f,m]=(0,r.useState)(!1),[v,p]=(0,r.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[b]=(0,w.Es)(),g=e=>{p((t=>({...t,[e.target.name]:e.target.value})))},M=e=>{null!==q.Ew&&void 0!==q.Ew&&q.Ew.includes(e)?p((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]}))):p((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,I.jsx)(y.Z,{onClose:i,children:(0,I.jsxs)("div",{className:j.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,I.jsx)(u.default,{children:(0,I.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:l("add_field")})}),(0,I.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:i})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(u.default,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(F.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===q.SL||void 0===q.SL?void 0:q.SL.map((e=>(0,I.jsx)(T.Z,{tile:e,onTile:M,activeTile:null===v||void 0===v?void 0:v.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,I.jsx)(Z.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"form_checklist_lable",value:v.form_checklist_lable,type:"text",onChange:g,errorShow:_.form_checklist_lable}),(0,I.jsx)(Z.Z,{label:l("field_placeholder"),placeholder:l("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:v.form_checklist_placeholder,type:"text",onChange:g,errorShow:_.form_checklist_placeholder}),null!==q.Ew&&void 0!==q.Ew&&q.Ew.includes(v.form_checklist_typo)?(0,I.jsxs)("div",{style:{padding:"1rem"},children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:l("choices")})}),null===v||void 0===v||null===(t=v.form_checklist_typo_option_pl)||void 0===t?void 0:t.map(((e,t)=>(0,I.jsx)(Z.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"".concat(e).concat(t),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,t)=>{const i=[...v.form_checklist_typo_option_pl];i[t].value=e.target.value,p((e=>({...e,form_checklist_typo_option_pl:i})))})(e,t),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,I.jsx)(k.Z,{label:l("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let t=[...v.form_checklist_typo_option_pl],i=[];for(let n=0;n<(null===(o=t)||void 0===o?void 0:o.length);t++){var o;n===e||i.push(t[n])}p((e=>({...e,form_checklist_typo_option_pl:i})))})(t)})},"".concat(e).concat(t)))),(0,I.jsx)(k.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{p((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,I.jsx)(k.Z,{label:"add",onAction:()=>{let e=(0,x.l)(v,["form_checklist_typo_option_pl"]);if((0,x.x)(e)&&o&&a){var t,l,_,r;m((e=>!e));let e=[];for(let t of v.form_checklist_typo_option_pl)null!==t&&void 0!==t&&t.value&&e.push(null===t||void 0===t?void 0:t.value);b({formId:o,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(t=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==t?t:"",form_checklist_key:A(v.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(l=null===v||void 0===v?void 0:v.form_checklist_placeholder)&&void 0!==l?l:"",form_checklist_lable:null!==(_=null===v||void 0===v?void 0:v.form_checklist_lable)&&void 0!==_?_:"",form_checklist_typo:null!==(r=null===v||void 0===v?void 0:v.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{n(),m((e=>!e)),i()})).catch({})}else s(e)}})]}),f&&(0,I.jsx)(c.default,{})]})})},A=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var N=i(89064),U=i(98853);const R=e=>{var t;let{onClose:i,formId:o,onRefetch:n,sectionId:a,data:l}=e;const{t:_}=(0,d.$G)(),[s,f]=(0,r.useState)(""),[m,v]=(0,r.useState)(!1),[p,b]=(0,r.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),[g]=(0,U.DJ)();(0,r.useEffect)((()=>{if(l){var e,t,i,o,n,a;let _=[];for(let e of null===l||void 0===l?void 0:l.form_checklist_typo_option_pl)_.push({value:e});b({form_checklist_name:null!==(e=null===l||void 0===l?void 0:l.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(t=null===l||void 0===l?void 0:l.form_checklist_key)&&void 0!==t?t:"",form_checklist_visibility:null!==(i=null===l||void 0===l?void 0:l.form_checklist_visibility)&&void 0!==i&&i,form_checklist_placeholder:null!==(o=null===l||void 0===l?void 0:l.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(n=null===l||void 0===l?void 0:l.form_checklist_lable)&&void 0!==n?n:"",form_checklist_typo:null!==(a=null===l||void 0===l?void 0:l.form_checklist_typo)&&void 0!==a?a:"",form_checklist_typo_option_pl:_})}}),[l]);const w=e=>{b((t=>({...t,[e.target.name]:e.target.value})))},M=e=>{null!==q.Ew&&void 0!==q.Ew&&q.Ew.includes(e)?b((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[...null===t||void 0===t?void 0:t.form_checklist_typo_option_pl,{value:""}]}))):b((t=>({...t,form_checklist_typo:e,form_checklist_typo_option_pl:[]})))};return(0,I.jsx)(y.Z,{onClose:i,children:(0,I.jsxs)("div",{className:j.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,I.jsx)(u.default,{children:(0,I.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:_("update_add_field")})}),(0,I.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:i})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(u.default,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(F.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===q.SL||void 0===q.SL?void 0:q.SL.map((e=>(0,I.jsx)(T.Z,{tile:e,onTile:M,activeTile:null===p||void 0===p?void 0:p.form_checklist_typo},null===e||void 0===e?void 0:e.key)))}),(0,I.jsx)(Z.Z,{label:_("field_label"),placeholder:_("field_label_placeholder"),name:"form_checklist_lable",value:p.form_checklist_lable,type:"text",onChange:w,errorShow:s.form_checklist_lable}),(0,I.jsx)(Z.Z,{label:_("field_placeholder"),placeholder:_("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:p.form_checklist_placeholder,type:"text",onChange:w,errorShow:s.form_checklist_placeholder}),null!==q.Ew&&void 0!==q.Ew&&q.Ew.includes(p.form_checklist_typo)?(0,I.jsxs)("div",{style:{padding:"1rem"},children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:_("choices")})}),null===p||void 0===p||null===(t=p.form_checklist_typo_option_pl)||void 0===t?void 0:t.map(((e,t)=>(0,I.jsx)(Z.Z,{label:_("field_label"),placeholder:_("field_label_placeholder"),name:"".concat(e).concat(t),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:e=>((e,t)=>{const i=[...p.form_checklist_typo_option_pl];i[t].value=e.target.value,b((e=>({...e,form_checklist_typo_option_pl:i})))})(e,t),customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,I.jsx)(k.Z,{label:_("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:()=>(e=>{let t=[...p.form_checklist_typo_option_pl],i=[];for(let n=0;n<(null===(o=t)||void 0===o?void 0:o.length);t++){var o;n===e||i.push(t[n])}b((e=>({...e,form_checklist_typo_option_pl:i})))})(t)})},"".concat(e).concat(t)))),(0,I.jsx)(k.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:()=>{b((e=>({...e,form_checklist_typo_option_pl:[...e.form_checklist_typo_option_pl,{value:""}]})))}})]}):null,(0,I.jsx)(k.Z,{label:"update",onAction:()=>{let e=(0,x.l)(p,["form_checklist_typo_option_pl"]);if((0,x.x)(e)&&o&&a){var t,l,_,r;v((e=>!e));let e=[];for(let t of p.form_checklist_typo_option_pl)null!==t&&void 0!==t&&t.value&&e.push(null===t||void 0===t?void 0:t.value);g({formId:o,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(t=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==t?t:"",form_checklist_key:D(p.form_checklist_lable),form_checklist_visibility:p.form_checklist_visibility,form_checklist_placeholder:null!==(l=null===p||void 0===p?void 0:p.form_checklist_placeholder)&&void 0!==l?l:"",form_checklist_lable:null!==(_=null===p||void 0===p?void 0:p.form_checklist_lable)&&void 0!==_?_:"",form_checklist_typo:null!==(r=null===p||void 0===p?void 0:p.form_checklist_typo)&&void 0!==r?r:"",form_checklist_typo_option_pl:e}]}}).then((()=>{n(),v((e=>!e)),i()})).catch({})}else f(e)}})]}),m&&(0,I.jsx)(c.default,{})]})})},D=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()},B=e=>{let{onClose:t,onRefetch:i,data:o}=e;const{t:n}=(0,d.$G)(),[a,l]=(0,r.useState)(!1),[_,c]=(0,r.useState)("");return(0,I.jsx)(I.Fragment,{children:1===_?(0,I.jsx)(R,{onClose:()=>c(""),data:o,onParentClose:t,onRefetch:i}):(0,I.jsxs)(N.Z,{onClose:t,disabled:a,children:[(0,I.jsx)("h6",{onClick:()=>{c(1)},children:n("edit")}),(0,I.jsx)("h6",{children:n("delete")})]})})},E={inputProps:{"aria-label":"Switch demo"}},L=e=>{var t,i;let{st:o,onRefetch:n,formId:a}=e;const[l,_]=(0,r.useState)(!1),[s,d]=(0,r.useState)(!1),[f,m]=(0,r.useState)(!1),[u,x]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{x(null===o||void 0===o?void 0:o.section_visibilty)}),[null===o||void 0===o?void 0:o.section_visibilty]);const[S]=(0,w.xZ)(),[Z]=(0,w.iN)(),C=()=>{_((e=>!e))},F=()=>{d((e=>!e))},T=(e,t)=>{null!==o&&void 0!==o&&o._id&&a&&e&&(j((e=>!e)),Z({formId:a,bodyParameter:{checkID:e,fsid:null===o||void 0===o?void 0:o._id,form_checklist_required:"Yes"===t}}).then((()=>{n(),j((e=>!e))})).catch({}))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("section",{className:g.Z.sfsc_card,children:[(0,I.jsxs)("div",{className:g.Z.sfscc_outer,children:[(0,I.jsxs)("div",{className:g.Z.sfscc_container,children:[(0,I.jsx)(v.Z,{...E,checked:u,onChange:e=>{null!==o&&void 0!==o&&o._id&&a&&(j((e=>!e)),S({formId:a,bodyParameter:{section_name:null===o||void 0===o?void 0:o.section_name,section_key:null===o||void 0===o?void 0:o.section_key,section_visibilty:e.target.checked,fsid:null===o||void 0===o?void 0:o._id,checklist:[],cid:""}}).then((()=>{n(),j((e=>!e))})).catch({}))}}),(0,I.jsx)("span",{children:null!==(t=null===o||void 0===o?void 0:o.section_name)&&void 0!==t?t:""})]}),u?(0,I.jsx)(k.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:C}):null]}),(0,I.jsxs)("div",{className:g.Z.sfsccc_inner,children:[null===o||void 0===o||null===(i=o.form_checklist)||void 0===i?void 0:i.map((e=>"BUTTON"===(null===e||void 0===e?void 0:e.form_checklist_typo)?null:(0,I.jsxs)("div",{className:g.Z.sfscc_outer,style:{width:"100%",opacity:u?"1":"0.7",justifyContent:"flex-start",gap:"1rem"},children:[(0,I.jsx)(b.Z,{control:(0,I.jsx)(p.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:t=>u?((e,t)=>{null!==o&&void 0!==o&&o._id&&a&&t&&(j((e=>!e)),Z({formId:a,bodyParameter:{checkID:t,fsid:null===o||void 0===o?void 0:o._id,form_checklist_visibility:e.target.checked}}).then((()=>{n(),j((e=>!e))})).catch({}))})(t,null===e||void 0===e?void 0:e._id):null}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id),(0,I.jsxs)("div",{children:["(",(0,I.jsx)("span",{style:{cursor:"pointer",color:null!==e&&void 0!==e&&e.form_checklist_required?"#0942a6":"rgba(18, 18, 18, 0.7)",fontWeight:null!==e&&void 0!==e&&e.form_checklist_required?600:400},onClick:()=>T(null===e||void 0===e?void 0:e._id,"Yes"),children:"Required"})," ","/"," ",(0,I.jsx)("span",{style:{cursor:"pointer",color:null!==e&&void 0!==e&&e.form_checklist_required?"rgba(18, 18, 18, 0.7)":"#0942a6",fontWeight:null!==e&&void 0!==e&&e.form_checklist_required?400:600},onClick:()=>T(null===e||void 0===e?void 0:e._id,"No"),children:"Optional"}),")"]})]}))),u?(0,I.jsx)(k.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:F}):null]})]}),(0,I.jsx)(h.Z,{}),s&&(0,I.jsx)(P,{onClose:F,formId:a,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:n}),l&&(0,I.jsx)(M,{onClose:C,formId:a,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:n,data:o}),y&&(0,I.jsx)(c.default,{}),f&&(0,I.jsx)(B,{onClose:()=>{m((e=>!e))}})]})},Y=e=>{let{onClose:t,formId:i,onRefetch:o}=e;const{t:n}=(0,d.$G)(),[a,l]=(0,r.useState)(""),[_,s]=(0,r.useState)(!1),[f,m]=(0,r.useState)({section_name:""}),[v]=(0,w.jK)();return(0,I.jsx)(y.Z,{onClose:t,children:(0,I.jsxs)("div",{className:j.Z.modal_container,children:[(0,I.jsx)(u.default,{children:(0,I.jsxs)("div",{className:j.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:j.Z.modal_container_header,children:(0,I.jsx)("h6",{children:n("add_section")})}),(0,I.jsx)("img",{src:"".concat(S.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(u.default,{customStyle:{paddingTop:"0"},children:[(0,I.jsx)(Z.Z,{label:n("section_name"),placeholder:n("section_name_placeholder"),name:"section_name",value:f.section_name,type:"text",onChange:e=>{m((t=>({...t,[e.target.name]:e.target.value})))},errorShow:a.section_name}),(0,I.jsx)(k.Z,{label:"add",onAction:()=>{let e=(0,x.l)(f,[]);(0,x.x)(e)&&i?(s((e=>!e)),v({formId:i,bodyParameter:{form:[{section_name:f.section_name,section_key:z(f.section_name),section_visibilty:!0}]}}).then((()=>{o(),s((e=>!e)),t()})).catch({})):l(e)}})]}),_&&(0,I.jsx)(c.default,{})]})})},z=e=>{let t=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===t||void 0===t?void 0:t.toLowerCase()};var G=i(1669);const Q=e=>{let{instituteId:t,formId:i}=e;const{t:o}=(0,d.$G)(),[n,a]=(0,r.useState)(!1),[l,_]=(0,r.useState)(!1),[s,v]=(0,r.useState)([]),[p,b]=(0,r.useState)(!1),g=(0,r.useRef)(),x=(0,r.useRef)(),y=e=>{const t=[...s],i=t[g.current];t.splice(g.current,1),t.splice(x.current,0,i),g.current=null,x.current=null,v(t)},[j]=(0,w.fv)(),{instituteStaffFormDetail:S,instituteStaffFormDetailRefetch:Z,instituteStaffFormDetailLoading:M}=(0,w.Gc)({data:{formId:i},skip:!i});(0,r.useEffect)((()=>{S&&v(S)}),[S]);const C=()=>{a((e=>!e))},F=()=>{_((e=>!e))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.default,{children:[(0,I.jsx)(u.default,{children:(0,I.jsxs)("div",{className:f.Z.fm_header_container,children:[(0,I.jsx)("h6",{children:o("staff_form")}),(0,I.jsxs)("div",{className:f.Z.fm_flex,children:[(0,I.jsx)(k.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:C}),(0,I.jsx)(k.Z,{label:l?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:l?()=>{i&&(b((e=>!e)),j({formId:i,bodyParameter:{shuffle_arr:s}}).then((()=>{Z(),b((e=>!e)),_(!1)})).catch({}))}:F}),l&&(0,I.jsx)(k.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:F})]})]})}),(0,I.jsx)(h.Z,{}),(0,I.jsxs)(u.default,{children:[null===s||void 0===s?void 0:s.map(((e,o)=>(0,I.jsx)("div",{draggable:l,onDragStart:e=>{return t=o,void(g.current=t);var t},onDragEnter:e=>{return t=o,void(x.current=t);var t},onDragEnd:y,children:(0,I.jsx)(L,{st:e,onRefetch:Z,formId:i,instituteId:t})},null===e||void 0===e?void 0:e._id))),M&&(0,I.jsx)(G.Z,{})]})]}),p&&(0,I.jsx)(c.default,{}),n&&(0,I.jsx)(Y,{onClose:C,formId:i,onRefetch:Z})]})},J=()=>{var e;const[t]=(0,n.lr)(),i=(0,o.v9)((e=>e.idChange.id)),{oneInstituteDashboard:d,oneInstituteDashboardRefetch:f}=(0,s.gq)({id:i,skip:!i});return(0,r.useEffect)((()=>{i&&f()}),[f]),(0,I.jsx)(a.Z,{children:(0,I.jsx)(l.Z,{children:(0,I.jsxs)("section",{style:{width:"100%"},children:[(0,I.jsx)(_.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,I.jsx)(r.Suspense,{fallback:(0,I.jsx)(c.default,{}),children:"form"===t.get("type")?(0,I.jsx)(Q,{instituteId:i,formId:null===d||void 0===d||null===(e=d.institute)||void 0===e?void 0:e.staff_form_setting}):null})]})})})}},1669:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(98684),n=i(63244),a=i(80184);const l=e=>{let{isGrey:t}=e;return(0,a.jsx)("div",{className:n.Z.q_loading,children:(0,a.jsx)("img",{src:"".concat(o.Uw,t?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},55336:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var o=i(63244),n=i(80184);const a=()=>(0,n.jsx)("div",{className:o.Z.qviple_loader_backdrop,children:(0,n.jsx)("div",{className:o.Z.qviple_loader_container,children:(0,n.jsx)("div",{className:o.Z.qviple_loader_rotation})})})},98684:(e,t,i)=>{i.d(t,{D3:()=>c,Fk:()=>d,HN:()=>o,IC:()=>u,Ii:()=>m,J7:()=>_,Jr:()=>f,U_:()=>r,Uw:()=>s,dB:()=>a,ix:()=>h,nj:()=>n,p3:()=>l,wP:()=>p,zr:()=>v});const o="/public/images/company_logo",n="/public/images/auth",a="/public/images/navbar",l="/public/images/feed",_="/public/images/finance",r="/public/images/admission",c="/public/images/lms",s="/public/images/loading",d="/public/images/utility",f="/public/images/feedback",m="/public/images/mentor",u="/public/images/staff",h="/public/images/automate",v="/public/images/store",p="/public/images/academic_department"},94811:(e,t,i)=>{i.d(t,{Q0:()=>n,a4:()=>o,yY:()=>a});const o="POST",n="PATCH",a="DELETE"},2205:(e,t,i)=>{i.d(t,{Z:()=>c});var o=i(72791),n=i(37371),a=i(16871),l=i(98684),_=i(39230),r=i(80184);const c=e=>{let{customStyle:t,isFunction:i,onFunction:c}=e;const s=(0,a.s0)(),{t:d}=(0,_.$G)();(0,o.useEffect)((()=>{var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);return(0,r.jsx)("div",{className:n.Z.goback_container,id:"scrollView",style:t,children:(0,r.jsxs)("div",{className:n.Z.goback_container_text,onClick:()=>{i?c():s(-1)},children:[(0,r.jsx)("img",{src:"".concat(l.Fk,"/go-back.svg"),alt:"go back icon"}),(0,r.jsx)("h6",{className:n.Z.goback_container_text_go,children:d("go_back")})]})})}},90904:(e,t,i)=>{i.d(t,{Z:()=>a});const o="BorderBottom_split_content__RVPoh";var n=i(80184);const a=e=>{let{customStyleBorder:t}=e;return(0,n.jsx)("hr",{className:o,style:t})}},93638:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(39230),n=i(80476),a=i(80184);const l=e=>{let{label:t,count:i,onAction:l,customStyle:_,isTranslate:r}=e;const{t:c}=(0,o.$G)();return r?(0,a.jsxs)("div",{className:n.Z.create_btn_container,onClick:l,style:_,children:[i>0?(0,a.jsxs)("span",{children:[i," "]}):null,t]}):(0,a.jsxs)("div",{className:n.Z.create_btn_container,onClick:l,style:_,children:[i>0?(0,a.jsxs)("span",{children:[i," "]}):null,c(t)]})}},21348:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var o=i(59393),n=i(80184);const a=e=>{let{customStyle:t,children:i}=e;return(0,n.jsx)("div",{className:o.Z.user_member_content_wrapper,style:t,children:i})}},72310:(e,t,i)=>{i.d(t,{Ch:()=>s,SY:()=>r,qu:()=>c});var o=i(72791),n=i(36314),a=i(34129),l=i(63515),_=i(80184);const r=e=>{let{msg:t,run:i,setRun:r}=e;const c=o.forwardRef((function(e,t){return(0,_.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),s=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,_.jsx)(n.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,_.jsx)(a.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:i,autoHideDuration:3e3,onClose:s,children:(0,_.jsx)(c,{onClose:s,severity:"error",sx:{width:"100%"},children:t})})})},c=e=>{let{msg:t,run:i,setRun:r}=e;const c=o.forwardRef((function(e,t){return(0,_.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),s=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,_.jsx)(n.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,_.jsx)(a.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:i,autoHideDuration:3e3,onClose:s,children:(0,_.jsx)(c,{onClose:s,severity:"success",sx:{width:"100%"},children:t})})})},s=e=>{let{msg:t,run:i,setRun:r,postiton:c,type:s}=e;const d=o.forwardRef((function(e,t){return(0,_.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),f=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,_.jsx)(n.Z,{spacing:2,sx:{width:"100%",position:'"stickey"'},children:(0,_.jsx)(a.Z,{anchorOrigin:{vertical:"".concat(c),horizontal:"right"},open:i,autoHideDuration:3e3,onClose:f,children:(0,_.jsx)(d,{onClose:f,severity:s,sx:{width:"100%"},children:t})})})}},72156:(e,t,i)=>{i.d(t,{Z:()=>o});const o={navbar:"InstituteMember_navbar__5JyaV",main_container:"InstituteMember_main_container__tbpZq",imc_main:"InstituteMember_imc_main__Ull73",isb_container:"InstituteMember_isb_container__iT5zY",isb_img:"InstituteMember_isb_img__mwRdx",isb_sub_container:"InstituteMember_isb_sub_container__mK-24",isc_container:"InstituteMember_isc_container__cteOp",isc_sub_container:"InstituteMember_isc_sub_container__Zw-ap",iadc_side:"InstituteMember_iadc_side__LTPT8",iadc_main:"InstituteMember_iadc_main__ijKI4",iadt_container:"InstituteMember_iadt_container__0pvyz",iadtc_card:"InstituteMember_iadtc_card__9K69-",iadtc_card_active:"InstituteMember_iadtc_card_active__jEB5j",iads_cover:"InstituteMember_iads_cover__T2YJO",iads_card:"InstituteMember_iads_card__v4Bgx",iads_card_active:"InstituteMember_iads_card_active__Q+S0x",iadsc_inner:"InstituteMember_iadsc_inner__2-eB5",iadds_continer:"InstituteMember_iadds_continer__WJP3J",iaddsc_globe:"InstituteMember_iaddsc_globe__zY1vi",iaddsc_edit:"InstituteMember_iaddsc_edit__otiJr"}},63244:(e,t,i)=>{i.d(t,{Z:()=>o});const o={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},37371:(e,t,i)=>{i.d(t,{Z:()=>o});const o={goback_container:"StaffStudentProfile_goback_container__ujSak",goback_container_text:"StaffStudentProfile_goback_container_text__YumHh",goback_container_text_go:"StaffStudentProfile_goback_container_text_go__KImuv",student_from_container:"StaffStudentProfile_student_from_container__XirC9",staff_header_container:"StaffStudentProfile_staff_header_container__T0tjm",staff_header_text:"StaffStudentProfile_staff_header_text__rqHvT",staff_profile_photo_container:"StaffStudentProfile_staff_profile_photo_container__jkVeQ",staff_profile_photo_container_inner:"StaffStudentProfile_staff_profile_photo_container_inner__RlghK",staff_profile_photo_image:"StaffStudentProfile_staff_profile_photo_image__wGRLi",staff_profile_photo_info:"StaffStudentProfile_staff_profile_photo_info__leE4S",staff_profile_photo_name:"StaffStudentProfile_staff_profile_photo_name__zSMjq",staff_profile_photo_index:"StaffStudentProfile_staff_profile_photo_index__nKKs7",card_hold_container:"StaffStudentProfile_card_hold_container__DqWAD",sataf_container:"StaffStudentProfile_sataf_container__dx01S",sataf_container_count:"StaffStudentProfile_sataf_container_count__EB7hD",sataf_container_count_inner:"StaffStudentProfile_sataf_container_count_inner__Sykk5",satafcci_text:"StaffStudentProfile_satafcci_text__z9fpa",satafcci_amount:"StaffStudentProfile_satafcci_amount__smGsB"}},80476:(e,t,i)=>{i.d(t,{Z:()=>o});const o={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},51416:(e,t,i)=>{i.d(t,{Z:()=>o});const o={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",square_tab_card_icon:"UiTab_square_tab_card_icon__tPYT1",square_tab_card_menu:"UiTab_square_tab_card_menu__wHBYi",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},59393:(e,t,i)=>{i.d(t,{Z:()=>o});const o={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},56959:(e,t,i)=>{i.d(t,{Z:()=>o});const o={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++",fomnr_student:"FinanceManager_fomnr_student__ZDIq1",fomnrs_info:"FinanceManager_fomnrs_info__LyBo0"}}}]);
//# sourceMappingURL=95974.ee54f21f.chunk.js.map