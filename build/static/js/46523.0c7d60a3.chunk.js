"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[46523],{53488:(t,e,i)=>{i.d(e,{Z:()=>u});var n=i(98684),o=i(90904),l=i(8959),d=(i(11468),i(38857)),a=i(21348),s=i(16925),r=i(80184);const u=t=>{var e;let{onClose:i,value:u}=t;return(0,r.jsx)(d.Z,{onClose:i,children:(0,r.jsxs)("div",{className:s.Z.modal_container,children:[(0,r.jsx)(a.default,{children:(0,r.jsxs)("div",{className:s.Z.modal_container_outer_header,children:[(0,r.jsx)("div",{className:s.Z.modal_container_header,children:(0,r.jsx)("h6",{children:null!==(e=null===u||void 0===u?void 0:u.label)&&void 0!==e?e:""})}),(0,r.jsx)("img",{src:"".concat(n.J7,"/close.svg"),alt:"close icon",onClick:i})]})}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(a.default,{customStyle:{paddingTop:"0"},children:(0,r.jsx)(l.Z,{value:null===u||void 0===u?void 0:u.conent})})]})})}},98853:(t,e,i)=>{i.d(e,{t9:()=>J,qX:()=>Y,SX:()=>H,G0:()=>X,Lg:()=>$,L4:()=>K,s9:()=>W,T8:()=>V,rZ:()=>L,nK:()=>G,lv:()=>T,ny:()=>z,pM:()=>O,DJ:()=>U,Mu:()=>et,Eb:()=>it,xB:()=>tt});var n=i(81708),o=i(94811);const l=t=>t.mutation({query:t=>({url:"/v1/ins/new/form/".concat(t.formId,"/section/student/query"),method:o.a4,body:t.bodyParameter})}),d=t=>t.mutation({query:t=>({url:"/v1/ins/new/form/".concat(t.formId,"/checklist/query"),method:o.a4,body:t.bodyParameter})}),a=t=>t.mutation({query:t=>({url:"/v1/ins/shuffle/form/".concat(t.formId,"/section/student/query"),method:o.Q0,body:t.bodyParameter})}),s=t=>t.mutation({query:t=>({url:"/v1/ins/edit/form/".concat(t.formId,"/section/query"),method:o.Q0,body:t.bodyParameter})}),r=t=>t.query({query:t=>"/v1/ins/one/form/".concat(t.formId,"/section/query"),transformResponse:t=>null===t||void 0===t?void 0:t.section,serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),u=t=>t.mutation({query:t=>({url:"/v1/ins/edit/form/".concat(t.formId,"/section/checklist/query"),method:o.Q0,body:t.bodyParameter})}),c=t=>t.mutation({query:t=>({url:"/v1/department/add/textarea/query?section_stats=".concat(null===t||void 0===t?void 0:t.section_stats),method:o.Q0,body:t.bodyParameter})}),v=t=>t.mutation({query:t=>({url:"/v1/department/add/form/image/query",method:o.Q0,body:t.bodyParameter})}),m=t=>t.mutation({query:t=>({url:"/v1/department/new/form/".concat(t.formId,"/section/student/query"),method:o.a4,body:t.bodyParameter})}),p=t=>t.mutation({query:t=>({url:"/v1/department/new/form/".concat(t.formId,"/checklist/query"),method:o.a4,body:t.bodyParameter})}),f=t=>t.mutation({query:t=>({url:"/v1/department/shuffle/form/".concat(t.formId,"/section/student/query"),method:o.Q0,body:t.bodyParameter})}),h=t=>t.mutation({query:t=>({url:"/v1/department/edit/form/".concat(t.formId,"/section/query"),method:o.Q0,body:t.bodyParameter})}),_=t=>t.query({query:t=>"/v1/department/one/form/".concat(t.formId,"/section/query"),transformResponse:t=>null===t||void 0===t?void 0:t.section,serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),y=t=>t.mutation({query:t=>({url:"/v1/department/edit/form/".concat(t.formId,"/section/checklist/query"),method:o.Q0,body:t.bodyParameter})}),g=t=>t.query({query:t=>"/v1/department/dynamic/form/details/query?flow=".concat(null===t||void 0===t?void 0:t.flow,"&did=").concat(null===t||void 0===t?void 0:t.flowId,"&apk=").concat(null===t||void 0===t?void 0:t.apk,"&aid=").concat(null===t||void 0===t?void 0:t.aid),transformResponse:t=>null!==t&&void 0!==t&&t.ins_form?null===t||void 0===t?void 0:t.ins_form:null!==t&&void 0!==t&&t.app_form?null===t||void 0===t?void 0:t.app_form:null===t||void 0===t?void 0:t.depart_form,serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),k=t=>t.query({query:t=>"/v1/department/".concat(t.sid,"/dynamic/form/query"),transformResponse:t=>null===t||void 0===t?void 0:t.result,serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),x=t=>t.query({query:t=>"/v1/department/".concat(t.sid,"/dynamic/form/query/photo"),transformResponse:t=>null===t||void 0===t?void 0:t.result,serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),b=n.P.injectEndpoints({endpoints:t=>({instituteStudentAddSection:l(t),instituteStudentSectionAddChecklist:d(t),instituteStudentRearrangeSection:a(t),instituteStudentUpdateSectionChecklist:s(t),instituteStudentFormDetail:r(t),instituteStudentToggleChecklist:u(t),formAddRaggingUndertaking:c(t),formAddFormImage:v(t),departmentStudentAddSection:m(t),departmentStudentSectionAddChecklist:p(t),departmentStudentRearrangeSection:f(t),departmentStudentUpdateSectionChecklist:h(t),departmentStudentFormDetail:_(t),departmentStudentToggleChecklist:y(t),studentProfileAboutDetail:k(t),studentApplyFormFieldDetail:g(t),studentEditProfileAboutDetail:x(t)})}),{useInstituteStudentAddSectionMutation:S,useInstituteStudentSectionAddChecklistMutation:D,useInstituteStudentRearrangeSectionMutation:j,useInstituteStudentUpdateSectionChecklistMutation:I,useInstituteStudentFormDetailQuery:A,useInstituteStudentToggleChecklistMutation:q,useFormAddRaggingUndertakingMutation:Z,useFormAddFormImageMutation:E,useDepartmentStudentAddSectionMutation:F,useDepartmentStudentSectionAddChecklistMutation:P,useDepartmentStudentRearrangeSectionMutation:N,useDepartmentStudentUpdateSectionChecklistMutation:C,useDepartmentStudentFormDetailQuery:R,useDepartmentStudentToggleChecklistMutation:w,useStudentProfileAboutDetailQuery:Q,useStudentApplyFormFieldDetailQuery:M,useStudentEditProfileAboutDetailQuery:B}=b,L=()=>{const[t]=S();return[t]},z=()=>{const[t]=D();return[t]},T=()=>{const[t]=j();return[t]},U=()=>{const[t]=I();return[t]},G=t=>{const{data:e,refetch:i,isFetching:n}=A(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{instituteStudentFormDetail:e,instituteStudentFormDetailRefetch:i,instituteStudentFormDetailLoading:n}},O=()=>{const[t]=q();return[t]},V=()=>{const[t]=Z();return[t]},W=()=>{const[t]=E();return[t]},J=()=>{const[t]=F();return[t]},X=()=>{const[t]=P();return[t]},H=()=>{const[t]=N();return[t]},K=()=>{const[t]=C();return[t]},Y=t=>{const{data:e,refetch:i,isFetching:n}=R(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{departmentStudentFormDetail:e,departmentStudentFormDetailRefetch:i,departmentStudentFormDetailLoading:n}},$=()=>{const[t]=w();return[t]},tt=t=>{const{data:e,refetch:i,isFetching:n}=Q(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{studentProfileAboutDetail:e,studentProfileAboutDetailRefetch:i,studentProfileAboutDetailLoading:n}},et=t=>{const{data:e,refetch:i,isFetching:n}=M(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{studentApplyFormFieldDetail:e,studentApplyFormFieldDetailRefetch:i,studentApplyFormFieldDetailLoading:n}},it=t=>{const{data:e,refetch:i,isFetching:n}=B(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{studentEditProfileAboutDetail:e,studentEditProfileAboutDetailRefetch:i,studentEditProfileAboutDetailLoading:n}}},46523:(t,e,i)=>{i.d(e,{Z:()=>b});var n=i(72791),o=i(98853),l=i(90904),d=i(36547),a=i(1095),s=i(39230),r=i(1669),u=i(53488),c=i(16871),v=i(93638),m=i(75235),p=i(66752),f=i(43317),h=i(55336),_=i(99004),y=i(45100),g=i(70638),k=i(93339),x=i(80184);const b=t=>{var e,i,b,S,D,j,I,A,q,Z,E,F,P,N,C,R,w,Q,M,B,L,z,T,U,G,O;let{studentId:V}=t;const{t:W}=(0,s.$G)(),J=(0,c.TH)(),[X,H]=(0,n.useState)(""),[K,Y]=(0,n.useState)(""),[$,tt]=(0,n.useState)(!1),[et,it]=(0,n.useState)(!0),[nt]=(0,f.mW)(),[ot]=(0,k.I)(),{studentProfileAboutDetail:lt,studentProfileAboutDetailLoading:dt}=(0,o.xB)({data:{sid:V},skip:!V}),at=(0,n.useCallback)((t=>{if(t){const e=window.open("".concat(a.q2,"/").concat(t),"_blank","noopener noreferrer");e&&(e.opener=null)}}),[]),st=()=>{Y("")};return(0,x.jsxs)(x.Fragment,{children:[X&&(0,x.jsx)(u.Z,{onClose:()=>H(""),value:X}),(0,x.jsxs)("section",{className:d.Z.sdpa,children:[null===lt||void 0===lt?void 0:lt.map(((t,e)=>{var i,n,o,a,s,r;return(0,x.jsxs)("div",{className:d.Z.sdpa_section,children:[(0,x.jsxs)("h5",{children:[null!==(i=null===t||void 0===t?void 0:t.key)&&void 0!==i?i:"",null!==(n=["student_undertakings","student_anti_ragging","student_anti_ragging_parents"])&&void 0!==n&&n.includes(null===t||void 0===t||null===(o=t.fields)||void 0===o||null===(a=o[0])||void 0===a?void 0:a.form_checklist_key)?(0,x.jsx)("span",{style:{cursor:"pointer",color:"#00f",marginLeft:"0.3rem"},onClick:()=>{var e,i,n,o;return H({label:null===t||void 0===t||null===(e=t.fields)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.form_checklist_name,conent:null===t||void 0===t||null===(n=t.fields)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.value})},children:"View Sample"}):null]}),"academic_details"===(null===t||void 0===t?void 0:t.static_key)?(0,x.jsx)(x.Fragment,{children:null===t||void 0===t||null===(s=t.fields)||void 0===s?void 0:s.map(((t,e)=>{var i,n,o,l;return(0,x.jsxs)("div",{className:d.Z.sdpa_section,style:{marginBottom:"0.5rem"},children:[(0,x.jsx)("h5",{style:{fontSize:"13px",marginBottom:"0.1rem"},children:null!==(i=null===t||void 0===t?void 0:t.form_checklist_name)&&void 0!==i?i:""}),null!==(n=["std_tenth_details","hsc_diploma","fyjc","fy_sem_I","fy_sem_II","sy_sem_III","sy_sem_IV","ty_sem_V","ty_sem_VI","msc_mcom"])&&void 0!==n&&n.includes(null===t||void 0===t?void 0:t.form_checklist_key)?(0,x.jsx)("div",{className:d.Z.sdpac_wrap,children:null===t||void 0===t||null===(o=t.nested_form_checklist)||void 0===o?void 0:o.map(((t,e)=>{var i,n;return(0,x.jsxs)("div",{className:d.Z.sdpas_container,children:[(0,x.jsxs)("h6",{className:d.Z.sdpasc_label,children:[null!==(i=null===t||void 0===t?void 0:t.form_checklist_name)&&void 0!==i?i:""," :"]}),(0,x.jsx)("h6",{className:d.Z.sdpasc_value,children:null!==(n=null===t||void 0===t?void 0:t.value)&&void 0!==n?n:""})]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(e))}))}):null===t||void 0===t||null===(l=t.nested_form_checklist)||void 0===l?void 0:l.map(((t,e)=>{var i,n;return(0,x.jsxs)("div",{className:d.Z.sdpa_section,style:{marginBottom:"0.5rem"},children:[(0,x.jsx)("h5",{style:{fontSize:"13px",marginBottom:"0.1rem"},children:null!==(i=null===t||void 0===t?void 0:t.form_checklist_name)&&void 0!==i?i:""}),(0,x.jsx)("div",{className:d.Z.sdpac_wrap,children:null===t||void 0===t||null===(n=t.nested_form_checklist_nested)||void 0===n?void 0:n.map(((t,e)=>{var i,n;return(0,x.jsxs)("div",{className:d.Z.sdpas_container,children:[(0,x.jsxs)("h6",{className:d.Z.sdpasc_label,children:[null!==(i=null===t||void 0===t?void 0:t.form_checklist_name)&&void 0!==i?i:""," :"]}),(0,x.jsx)("h6",{className:d.Z.sdpasc_value,children:null!==(n=null===t||void 0===t?void 0:t.value)&&void 0!==n?n:""})]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(e))}))})]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(e))}))]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(e))}))}):(0,x.jsx)("div",{className:d.Z.sdpac_wrap,children:null===t||void 0===t||null===(r=t.fields)||void 0===r?void 0:r.map(((e,i)=>{var n,o,l,a;return"FILE"===(null===e||void 0===e?void 0:e.form_checklist_typo)||"CROPIMAGE"===(null===e||void 0===e?void 0:e.form_checklist_typo)?(0,x.jsxs)("div",{className:d.Z.sdpas_container,children:[(0,x.jsxs)("p",{className:d.Z.sdpasc_label,children:[null!==(n=null===e||void 0===e?void 0:e.form_checklist_lable)&&void 0!==n?n:""," :"]}),null!==e&&void 0!==e&&e.value?(0,x.jsx)("h6",{className:d.Z.sdpasc_value,onClick:()=>at(null===e||void 0===e?void 0:e.value),style:{cursor:"pointer",color:"#002BBE"},children:W("view_file")}):null]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(i)):null!==(o=["student_undertakings","student_anti_ragging","studentProfilePhoto","student_anti_ragging_parents"])&&void 0!==o&&o.includes(null===e||void 0===e?void 0:e.form_checklist_key)?null:(0,x.jsxs)("div",{className:d.Z.sdpas_container,children:[(0,x.jsxs)("p",{className:d.Z.sdpasc_label,children:[null!==(l=null===e||void 0===e?void 0:e.form_checklist_lable)&&void 0!==l?l:""," :"]}),(0,x.jsx)("h6",{className:d.Z.sdpasc_value,children:null!==(a=null===e||void 0===e?void 0:e.value)&&void 0!==a?a:""})]},"".concat(null===t||void 0===t?void 0:t.form_checklist_key).concat(i))}))}),(0,x.jsx)(l.Z,{})]},"".concat(null===t||void 0===t?void 0:t.key).concat(e))})),dt&&(0,x.jsx)(r.Z,{}),"ONGOING_APPLICATION"===(null===(e=J.state)||void 0===e?void 0:e.isExtraInfo)&&et?(0,x.jsx)("div",{className:d.Z.sdpac_wrap,children:null!==(i=J.state)&&void 0!==i&&null!==(b=i.isExtraData)&&void 0!==b&&b.reject_status?(0,x.jsx)(y.Z,{label:"rejection_reason",onAction:()=>{Y(4)},customStyle:{padding:"0.4rem 0.7rem",fontSize:"13px","--ccb-bg":"#e6686830","--ccb-b":"#ed4a4a","--ccb-text":"#f00b0b","--ccb-bg-h":"#eb3232","--ccb-text-h":"#ffffff",width:"100%",justifyContent:"center"}}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v.Z,{label:"select",customStyle:{paddingBlock:"0.7rem",margin:"0",width:"32%"},onAction:()=>{Y(1)}}),(0,x.jsx)(v.Z,{label:"reject",customStyle:{paddingBlock:"0.7rem",margin:"0",width:"32%"},onAction:()=>{Y(2)}}),(0,x.jsx)(v.Z,{label:"reject_insufficient",customStyle:{paddingBlock:"0.7rem",margin:"0",width:"32%"},onAction:()=>{Y(3)}})]})}):null]}),1===K?(0,x.jsx)(m.Z,{title:"select_fee_structre_of_student",onClose:st,onSelectedStrucutre:(t,e)=>{var i,n,o,l;if(null!==(i=J.state)&&void 0!==i&&null!==(n=i.isExtraData)&&void 0!==n&&n.sid&&null!==(o=J.state)&&void 0!==o&&null!==(l=o.isExtraData)&&void 0!==l&&l.appId&&null!==t&&void 0!==t&&t._id){var d,a,s,r,u;tt((t=>!t));let i=null;var c,v,m,p,f,h,_,y,g,k,x,b;if(null!==(d=J.state)&&void 0!==d&&null!==(a=d.isExtraData)&&void 0!==a&&null!==(s=a.admissionIntake)&&void 0!==s&&s.intake_visibility)i={fee_struct:null===t||void 0===t?void 0:t._id,intake_type:e,staffId:null===(c=J.state)||void 0===c||null===(v=c.isExtraData)||void 0===v?void 0:v.staffID};else i={fee_struct:null===t||void 0===t?void 0:t._id,staffId:null===(m=J.state)||void 0===m||null===(p=m.isExtraData)||void 0===p?void 0:p.staffID};if("YES"===(null===(r=J.state)||void 0===r||null===(u=r.isExtraData)||void 0===u?void 0:u.isDepartment))ot({sid:null===(f=J.state)||void 0===f||null===(h=f.isExtraData)||void 0===h?void 0:h.sid,appId:null===(_=J.state)||void 0===_||null===(y=_.isExtraData)||void 0===y?void 0:y.appId,applicant:i}).then((()=>{st(),it(!1),tt((t=>!t))})).catch((()=>{tt((t=>!t))}));else nt({sid:null===(g=J.state)||void 0===g||null===(k=g.isExtraData)||void 0===k?void 0:k.sid,appId:null===(x=J.state)||void 0===x||null===(b=x.isExtraData)||void 0===b?void 0:b.appId,applicant:i}).then((()=>{st(),it(!1),tt((t=>!t))})).catch((()=>{tt((t=>!t))}))}},did:null===(S=J.state)||void 0===S||null===(D=S.isExtraData)||void 0===D?void 0:D.did,bid:null===(j=J.state)||void 0===j||null===(I=j.isExtraData)||void 0===I?void 0:I.bid,cmid:null===(A=J.state)||void 0===A||null===(q=A.isExtraData)||void 0===q?void 0:q.cmid,isAdmissionIntake:null===(Z=J.state)||void 0===Z||null===(E=Z.isExtraData)||void 0===E||null===(F=E.admissionIntake)||void 0===F?void 0:F.intake_visibility,isOngoing:!0}):2===K?(0,x.jsx)(p.Z,{onClose:st,appId:null===(P=J.state)||void 0===P||null===(N=P.isExtraData)||void 0===N?void 0:N.appId,sid:null===(C=J.state)||void 0===C||null===(R=C.isExtraData)||void 0===R?void 0:R.sid,isProfile:!0,setWhichSelect:it,staffID:null===(w=J.state)||void 0===w||null===(Q=w.isExtraData)||void 0===Q?void 0:Q.staffID,isDepartment:!0}):3===K?(0,x.jsx)(_.Z,{onClose:st,appId:null===(M=J.state)||void 0===M||null===(B=M.isExtraData)||void 0===B?void 0:B.appId,sid:null===(L=J.state)||void 0===L||null===(z=L.isExtraData)||void 0===z?void 0:z.sid,isProfile:!0,setWhichSelect:it,staffID:null===(T=J.state)||void 0===T||null===(U=T.isExtraData)||void 0===U?void 0:U.staffID}):4===K?(0,x.jsx)(g.Z,{onClose:st,reason:null===(G=J.state)||void 0===G||null===(O=G.isExtraData)||void 0===O?void 0:O.reject_status}):null,$&&(0,x.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=46523.0c7d60a3.chunk.js.map