"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[15572,54035,20420,31743,35067,50599],{98853:function(e,n,t){t.d(n,{rZ:function(){return v},nK:function(){return g},lv:function(){return y},ny:function(){return b},DJ:function(){return Z}});var _=t(29439),o=t(81708),i=t(94811),a=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/new/form/".concat(e.formId,"/section/student/query"),method:i.a4,body:e.bodyParameter}}})},r=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/new/form/".concat(e.formId,"/checklist/query"),method:i.a4,body:e.bodyParameter}}})},l=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/shuffle/form/".concat(e.formId,"/section/student/query"),method:i.Q0,body:e.bodyParameter}}})},c=function(e){return e.mutation({query:function(e){return{url:"/v1/ins/edit/form/".concat(e.formId,"/section/query"),method:i.Q0,body:e.bodyParameter}}})},s=function(e){return e.query({query:function(e){return"/v1/ins/one/form/".concat(e.formId,"/section/query")},transformResponse:function(e){return null===e||void 0===e?void 0:e.section},serializeQueryArgs:function(e){return e.endpointName},forceRefetch:function(e){return e.currentArg!==e.previousArg}})},d=o.P.injectEndpoints({endpoints:function(e){return{instituteStudentAddSection:a(e),instituteStudentSectionAddChecklist:r(e),instituteStudentRearrangeSection:l(e),instituteStudentUpdateSectionChecklist:c(e),instituteStudentFormDetail:s(e)}}}),u=d.useInstituteStudentAddSectionMutation,f=d.useInstituteStudentSectionAddChecklistMutation,m=d.useInstituteStudentRearrangeSectionMutation,h=d.useInstituteStudentUpdateSectionChecklistMutation,p=d.useInstituteStudentFormDetailQuery,v=function(){var e=u();return[(0,_.Z)(e,1)[0]]},b=function(){var e=f();return[(0,_.Z)(e,1)[0]]},y=function(){var e=m();return[(0,_.Z)(e,1)[0]]},Z=function(){var e=h();return[(0,_.Z)(e,1)[0]]},g=function(e){var n=p(null===e||void 0===e?void 0:e.data,{skip:null===e||void 0===e?void 0:e.skip});return{instituteStudentFormDetail:n.data,instituteStudentFormDetailRefetch:n.refetch,instituteStudentFormDetailLoading:n.isFetching}}},18725:function(e,n,t){var _=t(72156),o=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,o.jsx)("div",{className:_.Z.imc_main,style:n,children:t})}},20712:function(e,n,t){var _=t(20772),o=t(72156),i=t(80184);n.Z=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:o.Z.navbar,children:(0,i.jsx)(_.default,{status:"home"})}),(0,i.jsx)("div",{className:o.Z.main_container,children:n})]})}},15572:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var _=t(29439),o=t(95048),i=t(43504),a=t(20712),r=t(18725),l=t(2205),c=t(72791),s=t(55336),d=t(93433),u=t(39230),f=t(56959),m=t(63687),h=t(21348),p=t(90904),v=t(1413),b=t(89891),y=t(13034),Z=t(25801),g={sfscc_outer:"InstituteStudent_sfscc_outer__bsWum",sfsccc_inner:"InstituteStudent_sfsccc_inner__X-baB",menu_con:"InstituteStudent_menu_con__pTapH"},x=t(93638),k=t(4942),j=t(99183),S=t(48293),I=t(16925),U=t(98684),C=t(98853),w=t(61055),M=t(80184),T=function(e){var n=e.onClose,t=e.formId,o=e.onRefetch,i=e.sectionId,a=e.data,r=(0,u.$G)().t,l=(0,c.useState)(""),d=(0,_.Z)(l,2),f=d[0],m=d[1],b=(0,c.useState)(!1),y=(0,_.Z)(b,2),Z=y[0],g=y[1],T=(0,c.useState)({section_name:"",section_key:"",section_visibilty:!0}),N=(0,_.Z)(T,2),B=N[0],P=N[1];(0,c.useEffect)((function(){var e,n,t;a&&P({section_name:null!==(e=null===a||void 0===a?void 0:a.section_name)&&void 0!==e?e:"",section_key:null!==(n=null===a||void 0===a?void 0:a.section_key)&&void 0!==n?n:"",section_visibilty:null===(t=null===a||void 0===a?void 0:a.section_visibilty)||void 0===t||t})}),[a]);var q=(0,C.DJ)(),A=(0,_.Z)(q,1)[0];return(0,M.jsx)(S.Z,{onClose:n,children:(0,M.jsxs)("div",{className:I.Z.modal_container,children:[(0,M.jsx)(h.Z,{children:(0,M.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:r("update_add_section")})}),(0,M.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,M.jsx)(p.Z,{}),(0,M.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,M.jsx)(w.Z,{label:r("section_name"),placeholder:r("section_name_placeholder"),name:"section_name",value:B.section_name,type:"text",onChange:function(e){P((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,k.Z)({},e.target.name,e.target.value))}))},errorShow:f.section_name}),(0,M.jsx)(x.Z,{label:"update",onAction:function(){var e=(0,j.l)(B,[]);(0,j.x)(e)&&t&&i?(g((function(e){return!e})),A({formId:t,bodyParameter:{section_name:B.section_name,section_key:F(B.section_name),section_visibilty:!0,fsid:i,checklist:[],cid:""}}).then((function(){o(),g((function(e){return!e})),n()})).catch({})):m(e)}})]}),Z&&(0,M.jsx)(s.Z,{})]})})},F=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},N=t(37762),B=t(20659),P=t(26071),q=[{key:"TEXT",name:"Text Field"},{key:"TEXTAREA",name:"Text Area"},{key:"NUMBER",name:"Number"},{key:"SELECT",name:"Dropdown"},{key:"MULITSELECT",name:"Multiselect"},{key:"CHECKBOX",name:"Checkbox"},{key:"RADIO",name:"Radio Button"},{key:"CALENDAR",name:"Date Picker"},{key:"FILE",name:"Document"},{key:"CROPIMAGE",name:"Crop Photo"}],A=["SELECT","CHECKBOX","RADIO","MULITSELECT"],R=function(e){var n,t=e.onClose,o=e.formId,i=e.onRefetch,a=e.sectionId,r=(0,u.$G)().t,l=(0,c.useState)(""),f=(0,_.Z)(l,2),m=f[0],b=f[1],y=(0,c.useState)(!1),Z=(0,_.Z)(y,2),g=Z[0],T=Z[1],F=(0,c.useState)({form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),R=(0,_.Z)(F,2),L=R[0],D=R[1],G=(0,C.ny)(),z=(0,_.Z)(G,1)[0],O=function(e){D((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,k.Z)({},e.target.name,e.target.value))}))},K=function(e){null!==A&&void 0!==A&&A.includes(e)?D((function(n){return(0,v.Z)((0,v.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[{value:""},{value:""}]})})):D((function(n){return(0,v.Z)((0,v.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[]})}))};return(0,M.jsx)(S.Z,{onClose:t,children:(0,M.jsxs)("div",{className:I.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,M.jsx)(h.Z,{children:(0,M.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:r("add_field")})}),(0,M.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,M.jsx)(p.Z,{}),(0,M.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,M.jsx)(B.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===q||void 0===q?void 0:q.map((function(e){return(0,M.jsx)(P.Z,{tile:e,onTile:K,activeTile:null===L||void 0===L?void 0:L.form_checklist_typo},null===e||void 0===e?void 0:e.key)}))}),(0,M.jsx)(w.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"form_checklist_lable",value:L.form_checklist_lable,type:"text",onChange:O,errorShow:m.form_checklist_lable}),(0,M.jsx)(w.Z,{label:r("field_placeholder"),placeholder:r("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:L.form_checklist_placeholder,type:"text",onChange:O,errorShow:m.form_checklist_placeholder}),null!==A&&void 0!==A&&A.includes(L.form_checklist_typo)?(0,M.jsxs)("div",{style:{padding:"1rem"},children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:r("choices")})}),null===L||void 0===L||null===(n=L.form_checklist_typo_option_pl)||void 0===n?void 0:n.map((function(e,n){return(0,M.jsx)(w.Z,{label:r("field_label"),placeholder:r("field_label_placeholder"),name:"".concat(e).concat(n),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:function(e){return function(e,n){var t=(0,d.Z)(L.form_checklist_typo_option_pl);t[n].value=e.target.value,D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(e,n)},customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,M.jsx)(x.Z,{label:r("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:function(){return function(e){for(var n=(0,d.Z)(L.form_checklist_typo_option_pl),t=[];0<(null===(_=n)||void 0===_?void 0:_.length);n++){var _;0===e||t.push(n[0])}D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(n)}})},"".concat(e).concat(n))})),(0,M.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:function(){D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:[].concat((0,d.Z)(e.form_checklist_typo_option_pl),[{value:""}])})}))}})]}):null,(0,M.jsx)(x.Z,{label:"add",onAction:function(){var e=(0,j.l)(L,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&o&&a){var n,_,r,l;T((function(e){return!e}));var c,s=[],d=(0,N.Z)(L.form_checklist_typo_option_pl);try{for(d.s();!(c=d.n()).done;){var u=c.value;null!==u&&void 0!==u&&u.value&&s.push(null===u||void 0===u?void 0:u.value)}}catch(f){d.e(f)}finally{d.f()}z({formId:o,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(n=null===L||void 0===L?void 0:L.form_checklist_lable)&&void 0!==n?n:"",form_checklist_key:E(L.form_checklist_lable),form_checklist_visibility:!0,form_checklist_placeholder:null!==(_=null===L||void 0===L?void 0:L.form_checklist_placeholder)&&void 0!==_?_:"",form_checklist_lable:null!==(r=null===L||void 0===L?void 0:L.form_checklist_lable)&&void 0!==r?r:"",form_checklist_typo:null!==(l=null===L||void 0===L?void 0:L.form_checklist_typo)&&void 0!==l?l:"",form_checklist_typo_option_pl:s}]}}).then((function(){i(),T((function(e){return!e})),t()})).catch({})}else b(e)}})]}),g&&(0,M.jsx)(s.Z,{})]})})},E=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},L=t(89064),D=function(e){var n,t=e.onClose,o=e.formId,i=e.onRefetch,a=e.sectionId,r=e.data,l=(0,u.$G)().t,f=(0,c.useState)(""),m=(0,_.Z)(f,2),b=m[0],y=m[1],Z=(0,c.useState)(!1),g=(0,_.Z)(Z,2),T=g[0],F=g[1],R=(0,c.useState)({form_checklist_name:"",form_checklist_key:"",form_checklist_visibility:!0,form_checklist_placeholder:"",form_checklist_lable:"",form_checklist_typo:"",form_checklist_typo_option_pl:[]}),E=(0,_.Z)(R,2),L=E[0],D=E[1],z=(0,C.DJ)(),O=(0,_.Z)(z,1)[0];(0,c.useEffect)((function(){if(r){var e,n,t,_,o,i,a,l=[],c=(0,N.Z)(null===r||void 0===r?void 0:r.form_checklist_typo_option_pl);try{for(c.s();!(a=c.n()).done;){var s=a.value;l.push({value:s})}}catch(d){c.e(d)}finally{c.f()}D({form_checklist_name:null!==(e=null===r||void 0===r?void 0:r.form_checklist_name)&&void 0!==e?e:"",form_checklist_key:null!==(n=null===r||void 0===r?void 0:r.form_checklist_key)&&void 0!==n?n:"",form_checklist_visibility:null!==(t=null===r||void 0===r?void 0:r.form_checklist_visibility)&&void 0!==t&&t,form_checklist_placeholder:null!==(_=null===r||void 0===r?void 0:r.form_checklist_placeholder)&&void 0!==_?_:"",form_checklist_lable:null!==(o=null===r||void 0===r?void 0:r.form_checklist_lable)&&void 0!==o?o:"",form_checklist_typo:null!==(i=null===r||void 0===r?void 0:r.form_checklist_typo)&&void 0!==i?i:"",form_checklist_typo_option_pl:l})}}),[r]);var K=function(e){D((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,k.Z)({},e.target.name,e.target.value))}))},Y=function(e){null!==A&&void 0!==A&&A.includes(e)?D((function(n){return(0,v.Z)((0,v.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[].concat((0,d.Z)(null===n||void 0===n?void 0:n.form_checklist_typo_option_pl),[{value:""}])})})):D((function(n){return(0,v.Z)((0,v.Z)({},n),{},{form_checklist_typo:e,form_checklist_typo_option_pl:[]})}))};return(0,M.jsx)(S.Z,{onClose:t,children:(0,M.jsxs)("div",{className:I.Z.modal_container,style:{maxWidth:"45rem"},children:[(0,M.jsx)(h.Z,{children:(0,M.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:l("update_add_field")})}),(0,M.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,M.jsx)(p.Z,{}),(0,M.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,M.jsx)(B.Z,{label:"field_type",customTileContainer:{flexWrap:"wrap"},children:null===q||void 0===q?void 0:q.map((function(e){return(0,M.jsx)(P.Z,{tile:e,onTile:Y,activeTile:null===L||void 0===L?void 0:L.form_checklist_typo},null===e||void 0===e?void 0:e.key)}))}),(0,M.jsx)(w.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"form_checklist_lable",value:L.form_checklist_lable,type:"text",onChange:K,errorShow:b.form_checklist_lable}),(0,M.jsx)(w.Z,{label:l("field_placeholder"),placeholder:l("field_placeholder_placeholder"),name:"form_checklist_placeholder",value:L.form_checklist_placeholder,type:"text",onChange:K,errorShow:b.form_checklist_placeholder}),null!==A&&void 0!==A&&A.includes(L.form_checklist_typo)?(0,M.jsxs)("div",{style:{padding:"1rem"},children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:l("choices")})}),null===L||void 0===L||null===(n=L.form_checklist_typo_option_pl)||void 0===n?void 0:n.map((function(e,n){return(0,M.jsx)(w.Z,{label:l("field_label"),placeholder:l("field_label_placeholder"),name:"".concat(e).concat(n),value:null===e||void 0===e?void 0:e.value,type:"text",onChange:function(e){return function(e,n){var t=(0,d.Z)(L.form_checklist_typo_option_pl);t[n].value=e.target.value,D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(e,n)},customFormInputLabel:{display:"flex",alignItmes:"center",justifyContent:"space-between"},children:(0,M.jsx)(x.Z,{label:l("remove"),customStyle:{margin:"0 0 0 0",padding:"0.1rem 0.5rem",width:"fit-content",fontSize:"12px",fontWeight:"400"},onAction:function(){return function(e){for(var n=(0,d.Z)(L.form_checklist_typo_option_pl),t=[];0<(null===(_=n)||void 0===_?void 0:_.length);n++){var _;0===e||t.push(n[0])}D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:t})}))}(n)}})},"".concat(e).concat(n))})),(0,M.jsx)(x.Z,{label:"add_option",customStyle:{paddingBlock:"0.2rem",margin:"0",marginTop:"0.7rem",width:"fit-content"},onAction:function(){D((function(e){return(0,v.Z)((0,v.Z)({},e),{},{form_checklist_typo_option_pl:[].concat((0,d.Z)(e.form_checklist_typo_option_pl),[{value:""}])})}))}})]}):null,(0,M.jsx)(x.Z,{label:"update",onAction:function(){var e=(0,j.l)(L,["form_checklist_typo_option_pl"]);if((0,j.x)(e)&&o&&a){var n,_,r,l;F((function(e){return!e}));var c,s=[],d=(0,N.Z)(L.form_checklist_typo_option_pl);try{for(d.s();!(c=d.n()).done;){var u=c.value;null!==u&&void 0!==u&&u.value&&s.push(null===u||void 0===u?void 0:u.value)}}catch(f){d.e(f)}finally{d.f()}O({formId:o,bodyParameter:{fsid:a,checklist:[{form_checklist_name:null!==(n=null===L||void 0===L?void 0:L.form_checklist_lable)&&void 0!==n?n:"",form_checklist_key:G(L.form_checklist_lable),form_checklist_visibility:L.form_checklist_visibility,form_checklist_placeholder:null!==(_=null===L||void 0===L?void 0:L.form_checklist_placeholder)&&void 0!==_?_:"",form_checklist_lable:null!==(r=null===L||void 0===L?void 0:L.form_checklist_lable)&&void 0!==r?r:"",form_checklist_typo:null!==(l=null===L||void 0===L?void 0:L.form_checklist_typo)&&void 0!==l?l:"",form_checklist_typo_option_pl:s}]}}).then((function(){i(),F((function(e){return!e})),t()})).catch({})}else y(e)}})]}),T&&(0,M.jsx)(s.Z,{})]})})},G=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},z=function(e){var n=e.onClose,t=e.onRefetch,o=e.data,i=(0,u.$G)().t,a=(0,c.useState)(!1),r=(0,_.Z)(a,2),l=r[0],s=(r[1],(0,c.useState)("")),d=(0,_.Z)(s,2),f=d[0],m=d[1];return(0,M.jsx)(M.Fragment,{children:1===f?(0,M.jsx)(D,{onClose:function(){return m("")},data:o,onParentClose:n,onRefetch:t}):(0,M.jsxs)(L.Z,{onClose:n,disabled:l,children:[(0,M.jsx)("h6",{onClick:function(){m(1)},children:i("edit")}),(0,M.jsx)("h6",{children:i("delete")})]})})},O={inputProps:{"aria-label":"Switch demo"}},K=function(e){var n,t,o=e.st,i=e.onRefetch,a=e.formId,r=(0,c.useState)(!1),l=(0,_.Z)(r,2),s=l[0],d=l[1],u=(0,c.useState)(!1),f=(0,_.Z)(u,2),m=f[0],h=f[1],k=(0,c.useState)(!1),j=(0,_.Z)(k,2),S=j[0],I=j[1],C=function(){d((function(e){return!e}))},w=function(){h((function(e){return!e}))},F=function(){I((function(e){return!e}))};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("section",{className:g.sfsc_card,children:[(0,M.jsxs)("div",{className:g.sfscc_outer,children:[(0,M.jsxs)("div",{className:g.sfscc_container,children:[(0,M.jsx)(b.Z,(0,v.Z)((0,v.Z)({},O),{},{checked:null===o||void 0===o?void 0:o.section_visibilty})),(0,M.jsx)("span",{children:null!==(n=null===o||void 0===o?void 0:o.section_name)&&void 0!==n?n:""})]}),(0,M.jsx)(x.Z,{label:"edit",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:C})]}),(0,M.jsxs)("div",{className:g.sfsccc_inner,children:[null===o||void 0===o||null===(t=o.form_checklist)||void 0===t?void 0:t.map((function(e){return(0,M.jsxs)("div",{className:g.sfscc_outer,style:{width:"100%"},children:[(0,M.jsx)(Z.Z,{control:(0,M.jsx)(y.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},checked:null===e||void 0===e?void 0:e.form_checklist_visibility}),label:null===e||void 0===e?void 0:e.form_checklist_lable},null===e||void 0===e?void 0:e._id),(0,M.jsx)("img",{src:"".concat(U.J7,"/menu.svg"),alt:"menu icon",className:g.menu_con,onClick:F})]})})),(0,M.jsx)(x.Z,{label:"add_field",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:w})]})]}),(0,M.jsx)(p.Z,{}),m&&(0,M.jsx)(R,{onClose:w,formId:a,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i}),s&&(0,M.jsx)(T,{onClose:C,formId:a,sectionId:null===o||void 0===o?void 0:o._id,onRefetch:i,data:o}),S&&(0,M.jsx)(z,{onClose:F})]})},Y=function(e){var n=e.onClose,t=e.formId,o=e.onRefetch,i=(0,u.$G)().t,a=(0,c.useState)(""),r=(0,_.Z)(a,2),l=r[0],d=r[1],f=(0,c.useState)(!1),m=(0,_.Z)(f,2),b=m[0],y=m[1],Z=(0,c.useState)({section_name:""}),g=(0,_.Z)(Z,2),T=g[0],F=g[1],N=(0,C.rZ)(),B=(0,_.Z)(N,1)[0];return(0,M.jsx)(S.Z,{onClose:n,children:(0,M.jsxs)("div",{className:I.Z.modal_container,children:[(0,M.jsx)(h.Z,{children:(0,M.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,M.jsx)("div",{className:I.Z.modal_container_header,children:(0,M.jsx)("h6",{children:i("add_section")})}),(0,M.jsx)("img",{src:"".concat(U.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,M.jsx)(p.Z,{}),(0,M.jsxs)(h.Z,{customStyle:{paddingTop:"0"},children:[(0,M.jsx)(w.Z,{label:i("section_name"),placeholder:i("section_name_placeholder"),name:"section_name",value:T.section_name,type:"text",onChange:function(e){F((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,k.Z)({},e.target.name,e.target.value))}))},errorShow:l.section_name}),(0,M.jsx)(x.Z,{label:"add",onAction:function(){var e=(0,j.l)(T,[]);(0,j.x)(e)&&t?(y((function(e){return!e})),B({formId:t,bodyParameter:{form:[{section_name:T.section_name,section_key:J(T.section_name),section_visibilty:!0}]}}).then((function(){o(),y((function(e){return!e})),n()})).catch({})):d(e)}})]}),b&&(0,M.jsx)(s.Z,{})]})})},J=function(e){var n=null===e||void 0===e?void 0:e.replaceAll(" ","_");return null===n||void 0===n?void 0:n.toLowerCase()},H=t(1669),W=function(e){e.instituteId;var n=e.formId,t=(0,u.$G)().t,o=(0,c.useState)(!1),i=(0,_.Z)(o,2),a=i[0],r=i[1],l=(0,c.useState)(!1),v=(0,_.Z)(l,2),b=v[0],y=v[1],Z=(0,c.useState)([]),g=(0,_.Z)(Z,2),k=g[0],j=g[1],S=(0,c.useState)(!1),I=(0,_.Z)(S,2),U=I[0],w=I[1],T=(0,c.useRef)(),F=(0,c.useRef)(),N=function(e){var n=(0,d.Z)(k),t=n[T.current];n.splice(T.current,1),n.splice(F.current,0,t),T.current=null,F.current=null,j(n)},B=(0,C.lv)(),P=(0,_.Z)(B,1)[0],q=(0,C.nK)({data:{formId:n},skip:!n}),A=q.instituteStudentFormDetail,R=q.instituteStudentFormDetailRefetch,E=q.instituteStudentFormDetailLoading;(0,c.useEffect)((function(){A&&j(A)}),[A]);var L=function(){r((function(e){return!e}))},D=function(){y((function(e){return!e}))};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(m.Z,{children:[(0,M.jsx)(h.Z,{children:(0,M.jsxs)("div",{className:f.Z.fm_header_container,children:[(0,M.jsx)("h6",{children:t("student_form")}),(0,M.jsxs)("div",{className:f.Z.fm_flex,children:[(0,M.jsx)(x.Z,{label:"add_section",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:L}),(0,M.jsx)(x.Z,{label:b?"save_resuffle":"resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:b?function(){n&&(w((function(e){return!e})),P({formId:n,bodyParameter:{shuffle_arr:k}}).then((function(){R(),w((function(e){return!e})),y(!1)})).catch({}))}:D}),b&&(0,M.jsx)(x.Z,{label:"cancel_resuffle",customStyle:{paddingBlock:"0.2rem",margin:"0"},onAction:D})]})]})}),(0,M.jsx)(p.Z,{}),(0,M.jsxs)(h.Z,{children:[null===k||void 0===k?void 0:k.map((function(e,t){return(0,M.jsx)("div",{draggable:b,onDragStart:function(e){return n=t,void(T.current=n);var n},onDragEnter:function(e){return n=t,void(F.current=n);var n},onDragEnd:N,children:(0,M.jsx)(K,{st:e,onRefetch:R,formId:n})},null===e||void 0===e?void 0:e._id)})),E&&(0,M.jsx)(H.Z,{})]})]}),U&&(0,M.jsx)(s.Z,{}),a&&(0,M.jsx)(Y,{onClose:L,formId:n,onRefetch:R})]})},V=t(39480),X=function(){var e,n=(0,i.lr)(),t=(0,_.Z)(n,1)[0],d=(0,o.v9)((function(e){return e.idChange.id})),u=(0,V.gq)({id:d,skip:!d}),f=u.oneInstituteDashboard,m=u.oneInstituteDashboardRefetch;return(0,c.useEffect)((function(){d&&m()}),[m]),(0,M.jsx)(a.Z,{children:(0,M.jsx)(r.Z,{children:(0,M.jsxs)("section",{style:{width:"100%"},children:[(0,M.jsx)(l.Z,{customStyle:{width:"100%",marginTop:"0",marginBottom:"1rem"}}),(0,M.jsx)(c.Suspense,{fallback:(0,M.jsx)(s.Z,{}),children:"form"===t.get("type")?(0,M.jsx)(W,{instituteId:d,formId:null===f||void 0===f||null===(e=f.institute)||void 0===e?void 0:e.student_form_setting}):null})]})})})}},1669:function(e,n,t){var _=t(98684),o=t(63244),i=t(80184);n.Z=function(e){var n=e.isGrey;return(0,i.jsx)("div",{className:o.Z.q_loading,children:(0,i.jsx)("img",{src:"".concat(_.Uw,n?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},55336:function(e,n,t){var _=t(63244),o=t(80184);n.Z=function(){return(0,o.jsx)("div",{className:_.Z.qviple_loader_backdrop,children:(0,o.jsx)("div",{className:_.Z.qviple_loader_container,children:(0,o.jsx)("div",{className:_.Z.qviple_loader_rotation})})})}},2205:function(e,n,t){var _=t(72791),o=t(37371),i=t(16871),a=t(98684),r=t(39230),l=t(80184);n.Z=function(e){var n=e.customStyle,t=(0,i.s0)(),c=(0,r.$G)().t;(0,_.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[]);return(0,l.jsx)("div",{className:o.Z.goback_container,id:"scrollView",style:n,children:(0,l.jsxs)("div",{className:o.Z.goback_container_text,onClick:function(){t(-1)},children:[(0,l.jsx)("img",{src:"".concat(a.Fk,"/go-back.svg"),alt:"go back icon"}),(0,l.jsx)("h6",{className:o.Z.goback_container_text_go,children:c("go_back")})]})})}},90904:function(e,n,t){t.d(n,{Z:function(){return i}});var _="BorderBottom_split_content__RVPoh",o=t(80184),i=function(e){var n=e.customStyleBorder;return(0,o.jsx)("hr",{className:_,style:n})}},93638:function(e,n,t){var _=t(39230),o=t(80476),i=t(80184);n.Z=function(e){var n=e.label,t=e.count,a=e.onAction,r=e.customStyle,l=e.isTranslate,c=(0,_.$G)().t;return l?(0,i.jsxs)("div",{className:o.Z.create_btn_container,onClick:a,style:r,children:[t>0?(0,i.jsxs)("span",{children:[t," "]}):null,n]}):(0,i.jsxs)("div",{className:o.Z.create_btn_container,onClick:a,style:r,children:[t>0?(0,i.jsxs)("span",{children:[t," "]}):null,c(n)]})}},61055:function(e,n,t){var _=t(39230),o=t(52245),i=t(80184),a=["tel","number"];n.Z=function(e){var n=e.label,t=e.name,r=e.msg,l=e.type,c=e.value,s=e.onChange,d=e.placeholder,u=e.maxLength,f=e.customFormInputContainer,m=e.customFormInputLabel,h=e.customFormInput,p=e.errorShow,v=e.disabled,b=e.children,y=(0,_.$G)().t;return(0,i.jsxs)("div",{className:o.Z.form_input_container,style:f,children:[n&&(0,i.jsxs)("label",{className:o.Z.form_input_label,style:m,htmlFor:t,children:[n,r?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:o.Z.form_input_label_error,children:[" "," "," ",r]})}):p?(0,i.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,b]}),a.includes(l)?(0,i.jsx)("input",{className:o.Z.form_input,type:l,value:c,onChange:s,name:t,placeholder:d,maxLength:null!==u&&void 0!==u?u:100,disabled:v,style:h}):(0,i.jsx)("input",{className:o.Z.form_input,type:l,value:c,onChange:s,name:t,placeholder:d,disabled:v,style:h})]})}},48293:function(e,n,t){t.d(n,{Z:function(){return s}});var _=t(72791),o=t(54164),i=t(15783),a=t(80184),r=function(e){var n=e.onBackdropClose,t=e.customBackdropStyle,r=(0,_.useCallback)((function(){if(!n)return null;n()}),[n]);return o.createPortal((0,a.jsx)("div",{className:i.Z.modal_backdrop,onClick:r,style:t}),document.getElementById("backdrop"))},l=t(1413),c=function(e){e.modalState,e.isHide;var n=e.customOverlayStyle,t=e.children;return o.createPortal((0,a.jsx)("div",{className:i.Z.modal_overlay,style:(0,l.Z)({},n),children:t}),document.getElementById("overlay"))},s=function(e){var n=e.onClose,t=(e.modalState,e.customBackdropStyle),_=e.customOverlayStyle,o=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{onBackdropClose:n,customBackdropStyle:t}),(0,a.jsx)(c,{customOverlayStyle:_,children:o})]})}},89064:function(e,n,t){t.d(n,{Z:function(){return l}});var _=t(55336),o=t(48293),i="Modal_modal_menu_card__d0zzt",a=t(90904),r=t(80184),l=function(e){var n=e.onClose,t=e.disabled,l=e.heading,c=e.customStyle,s=e.children;return(0,r.jsx)(o.Z,{onClose:function(){if(t)return null;n()},children:(0,r.jsxs)("div",{className:i,style:c,children:[l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h5",{children:l}),(0,r.jsx)(a.Z,{})]}):null,s,t&&(0,r.jsx)(_.Z,{})]})})}},26071:function(e,n,t){var _=t(51416),o=t(39230),i=t(80184);n.Z=function(e){var n=e.tile,t=e.onTile,a=e.activeTile,r=e.customTileChild,l=(0,o.$G)().t;return(0,i.jsx)("div",{className:(null===n||void 0===n?void 0:n.key)===a?_.Z.tile_tile_active:_.Z.tile_tile,onClick:function(){return t(null===n||void 0===n?void 0:n.key)},style:r,children:l(null===n||void 0===n?void 0:n.name)})}},20659:function(e,n,t){var _=t(51416),o=t(39230),i=t(80184);n.Z=function(e){var n=e.label,t=e.customTileLabel,a=e.customTileContainer,r=e.customTileStyle,l=e.children,c=(0,o.$G)().t;return(0,i.jsxs)("div",{className:_.Z.tile_container,style:r,children:[n&&(0,i.jsx)("h6",{className:_.Z.tile_label,style:t,children:c(n)}),(0,i.jsx)("section",{className:_.Z.tile_tile_container,style:a,children:l})]})}},63687:function(e,n,t){var _=t(59393),o=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,o.jsx)("div",{className:_.Z.user_member_container_wrapper,style:n,children:t})}},21348:function(e,n,t){var _=t(59393),o=t(80184);n.Z=function(e){var n=e.customStyle,t=e.children;return(0,o.jsx)("div",{className:_.Z.user_member_content_wrapper,style:n,children:t})}},99183:function(e,n,t){t.d(n,{l:function(){return _},x:function(){return o}});var _=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(var _ in e)null!==n&&void 0!==n&&n.includes(_)||e[_]||(t[_]="* required");return t},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in e)return!1;return!0}},72156:function(e,n){n.Z={navbar:"InstituteMember_navbar__5JyaV",main_container:"InstituteMember_main_container__tbpZq",imc_main:"InstituteMember_imc_main__Ull73",isb_container:"InstituteMember_isb_container__iT5zY",isb_img:"InstituteMember_isb_img__mwRdx",isb_sub_container:"InstituteMember_isb_sub_container__mK-24",isc_container:"InstituteMember_isc_container__cteOp",isc_sub_container:"InstituteMember_isc_sub_container__Zw-ap"}},63244:function(e,n){n.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},37371:function(e,n){n.Z={goback_container:"StaffStudentProfile_goback_container__ujSak",goback_container_text:"StaffStudentProfile_goback_container_text__YumHh",goback_container_text_go:"StaffStudentProfile_goback_container_text_go__KImuv",student_from_container:"StaffStudentProfile_student_from_container__XirC9",staff_header_container:"StaffStudentProfile_staff_header_container__T0tjm",staff_header_text:"StaffStudentProfile_staff_header_text__rqHvT",staff_profile_photo_container:"StaffStudentProfile_staff_profile_photo_container__jkVeQ",staff_profile_photo_container_inner:"StaffStudentProfile_staff_profile_photo_container_inner__RlghK",staff_profile_photo_image:"StaffStudentProfile_staff_profile_photo_image__wGRLi",staff_profile_photo_info:"StaffStudentProfile_staff_profile_photo_info__leE4S",staff_profile_photo_name:"StaffStudentProfile_staff_profile_photo_name__zSMjq",staff_profile_photo_index:"StaffStudentProfile_staff_profile_photo_index__nKKs7",card_hold_container:"StaffStudentProfile_card_hold_container__DqWAD",sataf_container:"StaffStudentProfile_sataf_container__dx01S",sataf_container_count:"StaffStudentProfile_sataf_container_count__EB7hD",sataf_container_count_inner:"StaffStudentProfile_sataf_container_count_inner__Sykk5",satafcci_text:"StaffStudentProfile_satafcci_text__z9fpa",satafcci_amount:"StaffStudentProfile_satafcci_amount__smGsB"}},80476:function(e,n){n.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:function(e,n){n.Z={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},51416:function(e,n){n.Z={square_tab_wrapper:"UiTab_square_tab_wrapper__Jxkmy",square_tab_card:"UiTab_square_tab_card__EYI-n",designation_tab_wrapper:"UiTab_designation_tab_wrapper__1YZQi",designation_tab_card:"UiTab_designation_tab_card__waJTM",rectangle_tab_wrapper:"UiTab_rectangle_tab_wrapper__a4CP7",rectangle_tab_card:"UiTab_rectangle_tab_card__xYxge",rectangle_tab_card_active:"UiTab_rectangle_tab_card_active__hSDaQ",horizontal_tab_wrapper:"UiTab_horizontal_tab_wrapper__BRXBX",horizontal_tab_card:"UiTab_horizontal_tab_card__pF03H",horizontal_tab_card_active:"UiTab_horizontal_tab_card_active__o32eJ",tile_container:"UiTab_tile_container__YqmHk",tile_tile_container:"UiTab_tile_tile_container__DlIa1",tile_tile:"UiTab_tile_tile__NcTNN",tile_tile_active:"UiTab_tile_tile_active__bo3c7",tile_label:"UiTab_tile_label__IV8Xu",attendance_card:"UiTab_attendance_card__kZvon",ac_heading:"UiTab_ac_heading__ayM90",attendance_contianer:"UiTab_attendance_contianer__m84gB",ac_image:"UiTab_ac_image__dgjML",ac_date:"UiTab_ac_date__7s3uk",ac_date_vale:"UiTab_ac_date_vale__oug6A",ac_date_active:"UiTab_ac_date_active__ifWqt",atb_btn:"UiTab_atb_btn__tav+0"}},59393:function(e,n){n.Z={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},56959:function(e,n){n.Z={fm_header_container:"FinanceManager_fm_header_container__4809h",fm_header_start_container:"FinanceManager_fm_header_start_container__MIMYE",fm_title_heading:"FinanceManager_fm_title_heading__K-4lB",fm_search:"FinanceManager_fm_search__42NnY",fm_search_container:"FinanceManager_fm_search_container__23+f8",fm_search_container_inner:"FinanceManager_fm_search_container_inner__YySAp",fm_search_icon:"FinanceManager_fm_search_icon__WftS9",fm_all_time_data_container:"FinanceManager_fm_all_time_data_container__jIgPj",fm_all_time_data:"FinanceManager_fm_all_time_data__Re+uG",fm_total_amount:"FinanceManager_fm_total_amount__wAS13",fm_both_filter:"FinanceManager_fm_both_filter__25sOi",fm_both_filter_with_name:"FinanceManager_fm_both_filter_with_name__-29YH",fm_add_button:"FinanceManager_fm_add_button__9h09Q",fm_search_full:"FinanceManager_fm_search_full__vDPwG",fm_search_full_container:"FinanceManager_fm_search_full_container__PVgHt",fm_search_full_container_inner:"FinanceManager_fm_search_full_container_inner__tmOa6",fm_search_full_icon:"FinanceManager_fm_search_full_icon__BaRMK",fm_fs_container:"FinanceManager_fm_fs_container__cQS8l",fm_fs_container_inner:"FinanceManager_fm_fs_container_inner__eLCO6",fm_fs_refetch_container:"FinanceManager_fm_fs_refetch_container__W3BMl",fm_fs_refetch_container_inner:"FinanceManager_fm_fs_refetch_container_inner__y6kWF",fm_fund_card:"FinanceManager_fm_fund_card__Xo-wt",fm_fund_total:"FinanceManager_fm_fund_total__Z-m5Y",fm_fund_total_inner:"FinanceManager_fm_fund_total_inner__WjTx9",fm_flex:"FinanceManager_fm_flex__KK95u",fm_other_admission:"FinanceManager_fm_other_admission__m7mDo",lms_rule_container:"FinanceManager_lms_rule_container__8hkCA",fm_header_paragraph:"FinanceManager_fm_header_paragraph__x9942",ossa_form:"FinanceManager_ossa_form__trk++"}},16925:function(e,n){n.Z={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}},15783:function(e,n){n.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=15572.c4be2c6b.chunk.js.map