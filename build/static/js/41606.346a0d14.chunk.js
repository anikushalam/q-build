"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[41606,54035,20420,31743,35067,50599],{18725:function(e,n,t){var o=t(72156),i=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,i.jsx)("div",{className:o.Z.imc_main,style:n,children:t})}},20712:function(e,n,t){var o=t(20772),i=t(72156),_=t(80184);n.Z=function(e){var n=e.children;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:i.Z.navbar,children:(0,_.jsx)(o.default,{status:"home"})}),(0,_.jsx)("div",{className:i.Z.main_container,children:n})]})}},41606:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var o=t(29439),i=t(95048),_=t(43504),a=t(20712),r=t(18725),l=t(2205),c=t(72791),s=t(55336),d=t(93433),u=t(39230),f=t(56959),m=t(63687),h=t(21348),v=t(90904),p=t(1413),b=t(89891),y=t(13034),g=t(25801),Z={sfscc_outer:"InstituteStudent_sfscc_outer__bsWum",sfsccc_inner:"InstituteStudent_sfsccc_inner__X-baB",menu_con:"InstituteStudent_menu_con__pTapH"},k=t(93638),x=t(4942),j=t(99183),S=t(48293),I=t(16925),U=t(98684),C=t(81708),w=t(94811),M=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/new/form/".concat(e.formId,"/section/student/query"),method:w.a4,body:e.bodyParameter}}})},T=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/new/form/".concat(e.formId,"/checklist/query"),method:w.a4,body:e.bodyParameter}}})},F=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/shuffle/form/".concat(e.formId,"/section/student/query"),method:w.Q0,body:e.bodyParameter}}})},N=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/edit/form/".concat(e.formId,"/section/query"),method:w.Q0,body:e.bodyParameter}}})},P=function(e){return e.query({query:function(e){return"/v1/ins/one/form/".concat(e.formId,"/section/query")},transformResponse:function(e){return null===e||void 0===e?void 0:e.section},serializeQueryArgs:function(e){return e.endpointName},forceRefetch:function(e){return e.currentArg!==e.previousArg}})},q=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/edit/form/".concat(e.formId,"/section/checklist/query"),method:w.Q0,body:e.bodyParameter}}})},B=C.P.injectEndpoints({endpoints:function(e){return{instituteStudentAddSection:M(e),instituteStudentSectionAddChecklist:T(e),instituteStudentRearrangeSection:F(e),instituteStudentUpdateSectionChecklist:N(e),instituteStudentFormDetail:P(e),instituteStudentToggleChecklist:q(e)}}}),A=B.useInstituteStudentAddSectionMutation,R=B.useInstituteStudentSectionAddChecklistMutation,E=B.useInstituteStudentRearrangeSectionMutation,L=B.useInstituteStudentUpdateSectionChecklistMutation,D=B.useInstituteStudentFormDetailQuery,G=B.useInstituteStudentToggleChecklistMutation,z=function(){var e=L();return[(0,o.Z)(e,1)[0]]},O=t(61055),Y=t(80184),H=function(e){var n=e.onClose,t=e.formId,i=e.onRefetch,_=e.sectionId,a=e.data,r=(0,u.$G)().t,l=(0,c.useState)(""),d=(0,o.Z)(l,2),f=d[0],m=d[1],b=(0,c.useState)(!1),y=(0,o.Z)(b,2),g=y[0],Z=y[1],C=(0,c.useState)({section_name:"",section_key:"",section_visibilty:!0}),w=(0,o.Z)(C,2),M=w[0],T=w[1];(0,c.useEffect)((function(){var e,n,t;a&&T({section_name:null!==(e=null===a||void 0===a?void 0:a.section_name)&&void 0!==e?e:"",section_key:null!==(n=null===a||void 0===a?void 0:a.section_key)&&void 0!==n?n:"",section_visibilty:null===(t=null===a||void 0===a?void 0:a.section_visibilty)||void 0===t||t})}),[a]);var F=z(),N=(0,o.Z)(F,1)[0];return(0,Y.jsx)(S.Z,{onClose:n,children:(0,Y.jsxs)("div",{className:I.Z.modal_container,children:[(0,Y.jsx)(h.Z,{children:(0,Y.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:r("update_add_section")})}),(0,Y.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,Y.jsx)(v.Z,{}),(0,Y.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,Y.jsx)(O.Z,{label:r("section_name"),placeholder:r("section_name_placeholder"),name:"section_name",value:M.section_name,type:"text",onChange:function(e){T((function(n){return(0,p.Z)((0,p.Z)({},n),{},(0,x.Z)({},e.target.name,e.target.value))}))},errorShow:f.section_name}),(0,Y.jsx)(k.Z,{label:"update",onAction:function(){var e=(0,j.l)(M,[]);(0,j.x)(e)&&t&&_?(Z((function(e){return!e})),N({formId:t,bodyParameter:{section_name:M.section_name,section_key:K(M.section_name),section_visibilty:!0,fsid:_,checklist:[],cid:""}}).then((function(){i(),Z((function(e){return!e})),n()})).catch({})):m(e)}})]}),g&&(0,Y.jsx)(s.Z,{})]})})},K=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},W=t(37762),V=t(20659),X=t(26071),J=[{key:"TEXT",name:"Text Field"},{key:"TEXTAREA",name:"Text Area"},{key:"NUMBER",name:"Number"},{key:"SELECT",name:"Dropdown"},{key:"MULITSELECT",name:"Multiselect"},{key:"CHECKBOX",name:"Checkbox"},{key:"RADIO",name:"Radio Button"},{key:"CALENDAR",name:"Date Picker"},{key:"FILE",name:"Document"},{key:"CROPIMAGE",name:"Crop Photo"}],Q=["SELECT","CHECKBOX","RADIO","MULITSELECT"],$=function(e){var n,t=e.onClose,i=e.formId,_=e.onRefetch,a=e.sectionId,r=(0,u.$G)().t,l=(0,c.useState)(""),f=(0,o.Z)(l,2),m=f[0],b=f[1],y=(0,c.useState)(!1),g=(0,o.Z)(y,2),Z=g[0],C=g[1],w=(0,c.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),M=(0,o.Z)(w,2),T=M[0],F=M[1],N=function(){var e=R();return[(0,o.Z)(e,1)[0]]}(),P=(0,o.Z)(N,1)[0],q=function(e){F((function(n){return(0,p.Z)((0,p.Z)({},n),{},(0,x.Z)({},e.target.name,e.target.value))}))},B=function(e){null!==Q&&void 0!==Q&&Q.includes(e)?F((function(n){return(0,p.Z)((0,p.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]})})):F((function(n){return(0,p.Z)((0,p.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[]})}))};return(0,Y.jsx)(S.Z,{onClose:t,children:(0,Y.jsxs)("div",{className:I.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,Y.jsx)(h.Z,{children:(0,Y.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:r("add_field")})}),(0,Y.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,Y.jsx)(v.Z,{}),(0,Y.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,Y.jsx)(V.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===J||void 0===J?void 0:J.map((function(e){return(0,Y.jsx)(X.Z,{tile:e,onTile:B,activeTile:null===T||void 0===T?void 0:T.form_checklist_typo},null===e||void 0===e?void 0:e.key)}))}),(0,Y.jsx)(O.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"form_checklist_lable",value:T.form_checklist_lable,type:"text",onChange:q,errorShow:m.form_checklist_lable}),(0,Y.jsx)(O.Z,{label:r("field_placeholder"),placeholder:r("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:T.form_checklist_placeholder,type:"text",onChange:q,errorShow:m.form_checklist_placeholder}),null!==Q&&void 0!==Q&&Q.includes(T.form_checklist_typo)?(0,Y.jsxs)("div",{style:{padding:"1rem"},children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:r("choices")})}),null===T||void 0===T||null===(n=T.form_checklist_typo_option_pl)||void 0===n?void 0:n.map((function(e,n){return(0,Y.jsx)(O.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"".concat(e).concat(n),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:function(e){return function(e,n){var t=(0,d.Z)(T.form_checklist_typo_option_pl);t[n].value=e.target.value,F((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(e,n)},customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,Y.jsx)(k.Z,{label:r("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:function(){return function(e){for(var n=(0,d.Z)(T.form_checklist_typo_option_pl),t=[];0<(null===(o=n)||void 0===o?void 0:o.length);n++){var o;0===e||t.push(n[0])}F((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(n)}})},"".concat(e).concat(n))})),(0,Y.jsx)(k.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:function(){F((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:[].concat((0,d.Z)(e.form_checklist_typo_option_pl),[{value:""}])})}))}})]}):null,(0,Y.jsx)(k.Z,{label:"add",onAction:function(){var e=(0,j.l)(T,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&i&&a){var n,o,r,l;C((function(e){return!e}));var c,s=[],d=(0,W.Z)(T.form_checklist_typo_option_pl);try{for(d.s();!(c=d.n()).done;){var u=c.value;null!==u&&void 0!==u&&u.value&&s.push(null===u||void 0===u?void 0:u.value)}}catch(f){d.e(f)}finally{d.f()}P({formId:i,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(n=null===T||void 0===T?void 0:T.form_checklist_lable)&&void 0!==n?n:"",form_checklist_key:ee(T.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(o=null===T||void 0===T?void 0:T.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(r=null===T||void 0===T?void 0:T.form_checklist_lable)&&void 0!==r?r:"",form_checklist_typo:null!==(l=null===T||void 0===T?void 0:T.form_checklist_typo)&&void 0!==l?l:"",form_checklist_typo_option_pl:s}]}}).then((function(){_(),C((function(e){return!e})),t()})).catch({})}else b(e)}})]}),Z&&(0,Y.jsx)(s.Z,{})]})})},ee=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},ne=t(89064),te=function(e){var n,t=e.onClose,i=e.formId,_=e.onRefetch,a=e.sectionId,r=e.data,l=(0,u.$G)().t,f=(0,c.useState)(""),m=(0,o.Z)(f,2),b=m[0],y=m[1],g=(0,c.useState)(!1),Z=(0,o.Z)(g,2),C=Z[0],w=Z[1],M=(0,c.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),T=(0,o.Z)(M,2),F=T[0],N=T[1],P=z(),q=(0,o.Z)(P,1)[0];(0,c.useEffect)((function(){if(r){var e,n,t,o,i,_,a,l=[],c=(0,W.Z)(null===r||void 0===r?void 0:r.form_checklist_typo_option_pl);try{for(c.s();!(a=c.n()).done;){var s=a.value;l.push({value:s})}}catch(d){c.e(d)}finally{c.f()}N({form_checklist_name:null!==(e=null===r||void 0===r?void 0:r.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(n=null===r||void 0===r?void 0:r.form_checklist_key)&&void 0!==n?n:"",form_checklist_visibility:null!==(t=null===r||void 0===r?void 0:r.form_checklist_visibility)&&void 0!==t&&t,form_checklist_placeholder:null!==(o=null===r||void 0===r?void 0:r.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(i=null===r||void 0===r?void 0:r.form_checklist_lable)&&void 0!==i?i:"",form_checklist_typo:null!==(_=null===r||void 0===r?void 0:r.form_checklist_typo)&&void 0!==_?_:"",form_checklist_typo_option_pl:l})}}),[r]);var B=function(e){N((function(n){return(0,p.Z)((0,p.Z)({},n),{},(0,x.Z)({},e.target.name,e.target.value))}))},A=function(e){null!==Q&&void 0!==Q&&Q.includes(e)?N((function(n){return(0,p.Z)((0,p.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[].concat((0,d.Z)(null===n||void 0===n?void 0:n.form_checklist_typo_option_pl),[{value:""}])})})):N((function(n){return(0,p.Z)((0,p.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[]})}))};return(0,Y.jsx)(S.Z,{onClose:t,children:(0,Y.jsxs)("div",{className:I.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,Y.jsx)(h.Z,{children:(0,Y.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:l("update_add_field")})}),(0,Y.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,Y.jsx)(v.Z,{}),(0,Y.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,Y.jsx)(V.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===J||void 0===J?void 0:J.map((function(e){return(0,Y.jsx)(X.Z,{tile:e,onTile:A,activeTile:null===F||void 0===F?void 0:F.form_checklist_typo},null===e||void 0===e?void 0:e.key)}))}),(0,Y.jsx)(O.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"form_checklist_lable",value:F.form_checklist_lable,type:"text",onChange:B,errorShow:b.form_checklist_lable}),(0,Y.jsx)(O.Z,{label:l("field_placeholder"),placeholder:l("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:F.form_checklist_placeholder,type:"text",onChange:B,errorShow:b.form_checklist_placeholder}),null!==Q&&void 0!==Q&&Q.includes(F.form_checklist_typo)?(0,Y.jsxs)("div",{style:{padding:"1rem"},children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:l("choices")})}),null===F||void 0===F||null===(n=F.form_checklist_typo_option_pl)||void 0===n?void 0:n.map((function(e,n){return(0,Y.jsx)(O.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"".concat(e).concat(n),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:function(e){return function(e,n){var t=(0,d.Z)(F.form_checklist_typo_option_pl);t[n].value=e.target.value,N((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(e,n)},customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,Y.jsx)(k.Z,{label:l("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:function(){return function(e){for(var n=(0,d.Z)(F.form_checklist_typo_option_pl),t=[];0<(null===(o=n)||void 0===o?void 0:o.length);n++){var o;0===e||t.push(n[0])}N((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(n)}})},"".concat(e).concat(n))})),(0,Y.jsx)(k.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:function(){N((function(e){return(0,p.Z)((0,p.Z)({},e),{},{form_checklist_typo_option_pl:[].concat((0,d.Z)(e.form_checklist_typo_option_pl),[{value:""}])})}))}})]}):null,(0,Y.jsx)(k.Z,{label:"update",onAction:function(){var e=(0,j.l)(F,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&i&&a){var n,o,r,l;w((function(e){return!e}));var c,s=[],d=(0,W.Z)(F.form_checklist_typo_option_pl);try{for(d.s();!(c=d.n()).done;){var u=c.value;null!==u&&void 0!==u&&u.value&&s.push(null===u||void 0===u?void 0:u.value)}}catch(f){d.e(f)}finally{d.f()}q({formId:i,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(n=null===F||void 0===F?void 0:F.form_checklist_lable)&&void 0!==n?n:"",form_checklist_key:oe(F.form_checklist_lable),form_checklist_visibility:F.form_checklist_visibility,form_checklist_placeholder:null!==(o=null===F||void 0===F?void 0:F.form_checklist_placeholder)&&void 0!==o?o:"",form_checklist_lable:null!==(r=null===F||void 0===F?void 0:F.form_checklist_lable)&&void 0!==r?r:"",form_checklist_typo:null!==(l=null===F||void 0===F?void 0:F.form_checklist_typo)&&void 0!==l?l:"",form_checklist_typo_option_pl:s}]}}).then((function(){_(),w((function(e){return!e})),t()})).catch({})}else y(e)}})]}),C&&(0,Y.jsx)(s.Z,{})]})})},oe=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},ie=function(e){var n=e.onClose,t=e.onRefetch,i=e.data,_=(0,u.$G)().t,a=(0,c.useState)(!1),r=(0,o.Z)(a,2),l=r[0],s=(r[1],(0,c.useState)("")),d=(0,o.Z)(s,2),f=d[0],m=d[1];return(0,Y.jsx)(Y.Fragment,{children:1===f?(0,Y.jsx)(te,{onClose:function(){return m("")},data:i,onParentClose:n,onRefetch:t}):(0,Y.jsxs)(ne.Z,{onClose:n,disabled:l,children:[(0,Y.jsx)("h6",{onClick:function(){m(1)},children:_("edit")}),(0,Y.jsx)("h6",{children:_("delete")})]})})},_e={inputProps:{"aria-label":"Switch demo"}},ae=function(e){var n,t,i=e.st,_=e.onRefetch,a=e.formId,r=(0,c.useState)(!1),l=(0,o.Z)(r,2),d=l[0],u=l[1],f=(0,c.useState)(!1),m=(0,o.Z)(f,2),h=m[0],x=m[1],j=(0,c.useState)(!1),S=(0,o.Z)(j,2),I=S[0],U=S[1],C=(0,c.useState)(!1),w=(0,o.Z)(C,2),M=w[0],T=w[1],F=(0,c.useState)(!1),N=(0,o.Z)(F,2),P=N[0],q=N[1];(0,c.useEffect)((function(){T(null===i||void 0===i?void 0:i.section_visibilty)}),[null===i||void 0===i?void 0:i.section_visibilty]);var B=z(),A=(0,o.Z)(B,1)[0],R=function(){var e=G();return[(0,o.Z)(e,1)[0]]}(),E=(0,o.Z)(R,1)[0],L=function(){u((function(e){return!e}))},D=function(){x((function(e){return!e}))};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("section",{className:Z.sfsc_card,children:[(0,Y.jsxs)("div",{className:Z.sfscc_outer,children:[(0,Y.jsxs)("div",{className:Z.sfscc_container,children:[(0,Y.jsx)(b.Z,(0,p.Z)((0,p.Z)({},_e),{},{checked:M,onChange:function(e){null!==i&&void 0!==i&&i._id&&a&&(q((function(e){return!e})),A({formId:a,bodyParameter:{section_name:null===i||void 0===i?void 0:i.section_name,section_key:null===i||void 0===i?void 0:i.section_key,section_visibilty:e.target.checked,fsid:null===i||void 0===i?void 0:i._id,checklist:[],cid:""}}).then((function(){_(),q((function(e){return!e}))})).catch({}))}})),(0,Y.jsx)("span",{children:null!==(n=null===i||void 0===i?void 0:i.section_name)&&void 0!==n?n:""})]}),M?(0,Y.jsx)(k.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:L}):null]}),(0,Y.jsxs)("div",{className:Z.sfsccc_inner,children:[null===i||void 0===i||null===(t=i.form_checklist)||void 0===t?void 0:t.map((function(e){return(0,Y.jsx)("div",{className:Z.sfscc_outer,style:{width:"100%",opacity:M?"1":"0.7"},children:(0,Y.jsx)(g.Z,{control:(0,Y.jsx)(y.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility,onChange:function(n){return function(e,n){null!==i&&void 0!==i&&i._id&&a&&n&&(q((function(e){return!e})),E({formId:a,bodyParameter:{checkID:n,fsid:null===i||void 0===i?void 0:i._id,form_checklist_visibility:e.target.checked}}).then((function(){_(),q((function(e){return!e}))})).catch({}))}(n,null===e||void 0===e?void 0:e._id)}}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id)})})),M?(0,Y.jsx)(k.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:D}):null]})]}),(0,Y.jsx)(v.Z,{}),h&&(0,Y.jsx)($,{onClose:D,formId:a,sectionId:null===i||void 0===i?void 0:i._id,onRefetch:_}),d&&(0,Y.jsx)(H,{onClose:L,formId:a,sectionId:null===i||void 0===i?void 0:i._id,onRefetch:_,data:i}),P&&(0,Y.jsx)(s.Z,{}),I&&(0,Y.jsx)(ie,{onClose:function(){U((function(e){return!e}))}})]})},re=function(e){var n=e.onClose,t=e.formId,i=e.onRefetch,_=(0,u.$G)().t,a=(0,c.useState)(""),r=(0,o.Z)(a,2),l=r[0],d=r[1],f=(0,c.useState)(!1),m=(0,o.Z)(f,2),b=m[0],y=m[1],g=(0,c.useState)({section_name:""}),Z=(0,o.Z)(g,2),C=Z[0],w=Z[1],M=function(){var e=A();return[(0,o.Z)(e,1)[0]]}(),T=(0,o.Z)(M,1)[0];return(0,Y.jsx)(S.Z,{onClose:n,children:(0,Y.jsxs)("div",{className:I.Z.modal_container,children:[(0,Y.jsx)(h.Z,{children:(0,Y.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,Y.jsx)("div",{className:I.Z.modal_container_header,children:(0,Y.jsx)("h6",{children:_("add_section")})}),(0,Y.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,Y.jsx)(v.Z,{}),(0,Y.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,Y.jsx)(O.Z,{label:_("section_name"),placeholder:_("section_name_placeholder"),name:"section_name",value:C.section_name,type:"text",onChange:function(e){w((function(n){return(0,p.Z)((0,p.Z)({},n),{},(0,x.Z)({},e.target.name,e.target.value))}))},errorShow:l.section_name}),(0,Y.jsx)(k.Z,{label:"add",onAction:function(){var e=(0,j.l)(C,[]);(0,j.x)(e)&&t?(y((function(e){return!e})),T({formId:t,bodyParameter:{form:[{section_name:C.section_name,section_key:le(C.section_name),section_visibilty:!0}]}}).then((function(){i(),y((function(e){return!e})),n()})).catch({})):d(e)}})]}),b&&(0,Y.jsx)(s.Z,{})]})})},le=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},ce=t(1669),se=function(e){e.instituteId;var n=e.formId,t=(0,u.$G)().t,i=(0,c.useState)(!1),_=(0,o.Z)(i,2),a=_[0],r=_[1],l=(0,c.useState)(!1),p=(0,o.Z)(l,2),b=p[0],y=p[1],g=(0,c.useState)([]),Z=(0,o.Z)(g,2),x=Z[0],j=Z[1],S=(0,c.useState)(!1),I=(0,o.Z)(S,2),U=I[0],C=I[1],w=(0,c.useRef)(),M=(0,c.useRef)(),T=function(e){var n=(0,d.Z)(x),t=n[w.current];n.splice(w.current,1),n.splice(M.current,0,t),w.current=null,M.current=null,j(n)},F=function(){var e=E();return[(0,o.Z)(e,1)[0]]}(),N=(0,o.Z)(F,1)[0],P=function(e){var n=D(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{instituteStudentFormDetail:n.data,instituteStudentFormDetailRefetch:n.refetch,instituteStudentFormDetailLoading:n.isFetching}}({data:{formId:n},skip:!n}),q=P.instituteStudentFormDetail,B=P.instituteStudentFormDetailRefetch,A=P.instituteStudentFormDetailLoading;(0,c.useEffect)((function(){q&&j(q)}),[q]);var R=function(){r((function(e){return!e}))},L=function(){y((function(e){return!e}))};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(m.Z,{children:[(0,Y.jsx)(h.Z,{children:(0,Y.jsxs)("div",{className:f.Z.fm_header_container,children:[(0,Y.jsx)("h6",{children:t("student_form")}),(0,Y.jsxs)("div",{className:f.Z.fm_flex,children:[(0,Y.jsx)(k.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:R}),(0,Y.jsx)(k.Z,{label:b?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:b?function(){n&&(C((function(e){return!e})),N({formId:n,bodyParameter:{shuffle_arr:x}}).then((function(){B(),C((function(e){return!e})),y(!1)})).catch({}))}:L}),b&&(0,Y.jsx)(k.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:L})]})]})}),(0,Y.jsx)(v.Z,{}),(0,Y.jsxs)(h.Z,{children:[null===x||void 0===x?void 0:x.map((function(e,t){return(0,Y.jsx)("div",{draggable:b,onDragStart:function(e){return n=t,void(w.current=n);var n},onDragEnter:function(e){return n=t,void(M.current=n);var n},onDragEnd:T,children:(0,Y.jsx)(ae,{st:e,onRefetch:B,formId:n})},null===e||void 0===e?void 0:e._id)})),A&&(0,Y.jsx)(ce.Z,{})]})]}),U&&(0,Y.jsx)(s.Z,{}),a&&(0,Y.jsx)(re,{onClose:R,formId:n,onRefetch:B})]})},de=t(39480),ue=function(){var e,n=(0,_.lr)(),t=(0,o.Z)(n,1)[0],d=(0,i.v9)((function(e){return e.idChange.id})),u=(0,de.gq)({id:d,skip:!d}),f=u.oneInstituteDashboard,m=u.oneInstituteDashboardRefetch;return(0,c.useEffect)((function(){d&&m()}),[m]),(0,Y.jsx)(a.Z,{children:(0,Y.jsx)(r.Z,{children:(0,Y.jsxs)("section",{style:{width:"100%"},children:[(0,Y.jsx)(l.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,Y.jsx)(c.Suspense,{fallback:(0,Y.jsx)(s.Z,{}),children:"form"===t.get("type")?(0,Y.jsx)(se,{instituteId:d,formId:null===f||void 0===f||null===(e=f.institute)||void 0===e?void 0:e.student_form_setting}):null})]})})})}},1669:function(e,n,t){var o=t(98684),i=t(63244),_=t(80184);n.Z=function(e){var n=e.isGrey;return(0,_.jsx)("div",{className:i.Z.q_loading,children:(0,_.jsx)("img",{src:"".concat(o.Uw,n?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},55336:function(e,n,t){var o=t(63244),i=t(80184);n.Z=function(){return(0,i.jsx)("div",{className:o.Z.qviple_loader_backdrop,children:(0,i.jsx)("div",{className:o.Z.qviple_loader_container,children:(0,i.jsx)("div",{className:o.Z.qviple_loader_rotation})})})}},2205:function(e,n,t){var o=t(72791),i=t(37371),_=t(16871),a=t(98684),r=t(39230),l=t(80184);n.Z=function(e){var n=e.customStyle,t=(0,_.s0)(),c=(0,r.$G)().t;(0,o.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);return(0,l.jsx)("div",{className:i.Z.goback_container,id:"scrollView",style:n,children:(0,l.jsxs)("div",{className:i.Z.goback_container_text,onClick:function(){t(-1)},children:[(0,l.jsx)("img",{src:"".concat(a.Fk,"/go-back.svg"),alt:"go back icon"}),(0,l.jsx)("h6",{className:i.Z.goback_container_text_go,children:c("go_back")})]})})}},90904:function(e,n,t){t.d(n,{Z:function(){return _}});var o="BorderBottom_split_content__RVPoh",i=t(80184),_=function(e){var n=e.customStyleBorder;return(0,i.jsx)("hr",{className:o,style:n})}},93638:function(e,n,t){var o=t(39230),i=t(80476),_=t(80184);n.Z=function(e){var n=e.label,t=e.count,a=e.onAction,r=e.customStyle,l=e.isTranslate,c=(0,o.$G)().t;return l?(0,_.jsxs)("div",{className:i.Z.create_btn_container,onClick:a,style:r,children:[t>0?(0,_.jsxs)("span",{children:[t," "]}):null,n]}):(0,_.jsxs)("div",{className:i.Z.create_btn_container,onClick:a,style:r,children:[t>0?(0,_.jsxs)("span",{children:[t," "]}):null,c(n)]})}},61055:function(e,n,t){var o=t(39230),i=t(52245),_=t(80184),a=["tel","number"];n.Z=function(e){var n=e.label,t=e.name,r=e.msg,l=e.type,c=e.value,s=e.onChange,d=e.placeholder,u=e.maxLength,f=e.customFormInputContainer,m=e.customFormInputLabel,h=e.customFormInput,v=e.errorShow,p=e.disabled,b=e.children,y=(0,o.$G)().t;return(0,_.jsxs)("div",{className:i.Z.form_input_container,style:f,children:[n&&(0,_.jsxs)("label",{className:i.Z.form_input_label,style:m,htmlFor:t,children:[n,r?(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("span",{className:i.Z.form_input_label_error,children:[" "," "," ",r]})}):v?(0,_.jsxs)("span",{className:i.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,b]}),a.includes(l)?(0,_.jsx)("input",{className:i.Z.form_input,type:l,value:c,onChange:s,name:t,placeholder:d,maxLength:null!==u&&void 0!==u?u:100,disabled:p,style:h}):(0,_.jsx)("input",{className:i.Z.form_input,type:l,value:c,onChange:s,name:t,placeholder:d,disabled:p,style:h})]})}},48293:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(72791),i=t(54164),_=t(15783),a=t(80184),r=function(e){var n=e.onBackdropClose,t=e.customBackdropStyle,r=(0,o.useCallback)((function(){if(!n)return null;n()}),[n]);return i.createPortal((0,a.jsx)("div",{className:_.Z.modal_backdrop,onClick:r,style:t}),document.getElementById("backdrop"))},l=t(1413),c=function(e){e.modalState,e.isHide;var n=e.customOverlayStyle,t=e.children;return i.createPortal((0,a.jsx)("div",{className:_.Z.modal_overlay,style:(0,l.Z)({},n),children:t}),document.getElementById("overlay"))},s=function(e){var n=e.onClose,t=(e.modalState,e.customBackdropStyle),o=e.customOverlayStyle,i=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{onBackdropClose:n,customBackdropStyle:t}),(0,a.jsx)(c,{customOverlayStyle:o,children:i})]})}},89064:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(55336),i=t(48293),_="Modal_modal_menu_card__d0zzt",a=t(90904),r=t(80184),l=function(e){var n=e.onClose,t=e.disabled,l=e.heading,c=e.customStyle,s=e.children;return(0,r.jsx)(i.Z,{onClose:function(){if(t)return null;n()},children:(0,r.jsxs)("div",{className:_,style:c,children:[l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h5",{children:l}),(0,r.jsx)(a.Z,{})]}):null,s,t&&(0,r.jsx)(o.Z,{})]})})}},26071:function(e,n,t){var o=t(51416),i=t(39230),_=t(80184);n.Z=function(e){var n=e.tile,t=e.onTile,a=e.activeTile,r=e.customTileChild,l=(0,i.$G)().t;return(0,_.jsx)("div",{className:(null===n||void 0===n?void 0:n.key)===a?o.Z.tile_tile_active:o.Z.tile_tile,onClick:function(){return t(null===n||void 0===n?void 0:n.key)},style:r,children:l(null===n||void 0===n?void 0:n.name)})}},20659:function(e,n,t){var o=t(51416),i=t(39230),_=t(80184);n.Z=function(e){var n=e.label,t=e.customTileLabel,a=e.customTileContainer,r=e.customTileStyle,l=e.children,c=(0,i.$G)().t;return(0,_.jsxs)("div",{className:o.Z.tile_container,style:r,children:[n&&(0,_.jsx)("h6",{className:o.Z.tile_label,style:t,children:c(n)}),(0,_.jsx)("section",{className:o.Z.tile_tile_container,style:a,children:l})]})}},63687:function(e,n,t){var o=t(59393),i=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,i.jsx)("div",{className:o.Z.user_member_container_wrapper,style:n,children:t})}},21348:function(e,n,t){var o=t(59393),i=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,i.jsx)("div",{className:o.Z.user_member_content_wrapper,style:n,children:t})}},99183:function(e,n,t){t.d(n,{l:function(){return o},x:function(){return i}});var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(var o in e)null!==n&&void 0!==n&&n.includes(o)||e[o]||(t[o]="* required");return t},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in e)return!1;return!0}},72156:function(e,n){n.Z={navbar:"InstituteMember_navbar__5JyaV",main_container:"InstituteMember_main_container__tbpZq",imc_main:"InstituteMember_imc_main__Ull73",isb_container:"InstituteMember_isb_container__iT5zY",isb_img:"InstituteMember_isb_img__mwRdx",isb_sub_container:"InstituteMember_isb_sub_container__mK-24",isc_container:"InstituteMember_isc_container__cteOp",isc_sub_container:"InstituteMember_isc_sub_container__Zw-ap"}},63244:function(e,n){n.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},37371:function(e,n){n.Z={goback_container:"StaffStudentProfile_goback_container__ujSak",goback_container_text:"StaffStudentProfile_goback_container_text__YumHh",goback_container_text_go:"StaffStudentProfile_goback_container_text_go__KImuv",student_from_container:"StaffStudentProfile_student_from_container__XirC9",staff_header_container:"StaffStudentProfile_staff_header_container__T0tjm",staff_header_text:"StaffStudentProfile_staff_header_text__rqHvT",staff_profile_photo_container:"StaffStudentProfile_staff_profile_photo_container__jkVeQ",staff_profile_photo_container_inner:"StaffStudentProfile_staff_profile_photo_container_inner__RlghK",staff_profile_photo_image:"StaffStudentProfile_staff_profile_photo_image__wGRLi",staff_profile_photo_info:"StaffStudentProfile_staff_profile_photo_info__leE4S",staff_profile_photo_name:"StaffStudentProfile_staff_profile_photo_name__zSMjq",staff_profile_photo_index:"StaffStudentProfile_staff_profile_photo_index__nKKs7",card_hold_container:"StaffStudentProfile_card_hold_container__DqWAD",sataf_container:"StaffStudentProfile_sataf_container__dx01S",sataf_container_count:"StaffStudentProfile_sataf_container_count__EB7hD",sataf_container_count_inner:"StaffStudentProfile_sataf_container_count_inner__Sykk5",satafcci_text:"StaffStudentProfile_satafcci_text__z9fpa",satafcci_amount:"StaffStudentProfile_satafcci_amount__smGsB"}},80476:function(e,n){n.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:function(e,n){n.Z={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},51416:function(e,n){n.Z={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},59393:function(e,n){n.Z={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},56959:function(e,n){n.Z={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},16925:function(e,n){n.Z={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}},15783:function(e,n){n.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=41606.346a0d14.chunk.js.map