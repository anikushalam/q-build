"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[81729],{57387:(e,t,i)=>{i.d(t,{Z:()=>d});i(72791);var s=i(49384),l=i(78499),n=i(80184);const d=e=>{let{buttonText:t,disabled:i,customStyleButton:d,customStyleButtonText:o,onAction:a,shwoLoader:u}=e;return(0,n.jsxs)("button",{disabled:i,style:{...d},className:l.Z.button_main,onClick:a,children:[(0,n.jsx)("span",{style:{...o},children:t}),i&&u&&(0,n.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,n.jsx)(s.Z,{})})]})}},8793:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(72791),l=i(11105),n=i(80184);const d=e=>{let{children:t}=e;return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:t})}},45474:(e,t,i)=>{i.d(t,{Z:()=>v});var s=i(72791),l=i(38733),n=i(36665),d=i(98094),o=i(97655),a=i(39230),u=i(98734),c=i(84959),r=i(80184);const v=e=>{let{onLoginDetailToggle:t,loginData:i,sid:v,onRefetch:_,is_staff:m}=e;const{t:h}=(0,a.$G)(),[x,f]=(0,s.useState)({phone:(null===i||void 0===i?void 0:i.userPhoneNumber)||"",email:(null===i||void 0===i?void 0:i.userEmail)||""}),[p,j]=(0,s.useState)(!1),[T]=(0,c.gY)(),[N]=(0,c.ZS)();(0,s.useEffect)((()=>{i&&f((e=>({...e,phone:(null===i||void 0===i?void 0:i.userPhoneNumber)||"",email:(null===i||void 0===i?void 0:i.userEmail)||""})))}),[i]);const g=e=>{f((t=>({...t,[e.target.name]:e.target.value})))};return(0,r.jsx)(n.Z,{onClose:t,children:(0,r.jsxs)("div",{className:l.Z.login_details_modal,children:[(0,r.jsx)("h6",{children:h("login_details")}),(0,r.jsx)(d.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,r.jsx)(o.Z,{labelText:h("mobile_number"),placeholder:h("mobile_number_placeholder"),name:"phone",value:x.phone,type:"text",onChange:g}),(0,r.jsx)(o.Z,{labelText:h("email"),placeholder:h("email_placeholder"),name:"email",value:x.email,type:"text",onChange:g}),(0,r.jsx)("button",{className:l.Z.login_details_btn,onClick:()=>{j((e=>!e)),m?N({login_details:{phone:x.phone,email:x.email,sid:v}}).then((()=>{_(),j((e=>!e)),t()})).catch({}):T({login_details:{phone:x.phone,email:x.email,sid:v}}).then((()=>{_(),j((e=>!e)),t()})).catch({})},children:h("update")}),p&&(0,r.jsx)(u.Z,{})]})})}},34219:(e,t,i)=>{i.d(t,{Z:()=>n});i(72791);var s=i(11575),l=i(80184);const n=e=>{let{customStyleContainer:t,title:i,subtitle:n,costomTextTitleStyle:d,costomTextSubtitleStyle:o}=e;return(0,l.jsxs)("div",{className:s.Z.empty_container,style:t,children:[i&&(0,l.jsx)("h6",{style:d,children:i}),n&&(0,l.jsx)("p",{style:o,children:n})]})}},51174:(e,t,i)=>{i.d(t,{Z:()=>x});var s=i(72791),l=i(12072),n=i(84489),d=i(16871),o=i(43504),a=i(87049),u=i(24582),c=i(98734),r=i(97655),v=i(57387),_=i(39230),m=i(80184);const h=["STUDENT_SECTION","ADMISSION_ADMIN"],x=e=>{let{onClose:t,sid:i,openAs:x}=e;const{t:f}=(0,_.$G)(),p=(0,d.UO)(),j=(0,d.s0)(),[T]=(0,u.YK)(),[N,g]=(0,s.useState)(!1),[S,Z]=(0,s.useState)(!0),[C,A]=(0,s.useState)(""),[E,I]=(0,s.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.Z,{onClose:t}),(0,m.jsxs)(l.Z,{customStyle:{zIndex:"1200"},children:[(0,m.jsx)("div",{className:a.Z.edit_modal_container,style:E?{width:"auto",height:"auto"}:{width:"200px"},children:E?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.Z,{labelText:f("type_confirm_to_continue"),placeholder:"type here 'Confirm'",name:"removeStudent",value:C,type:"text",onChange:e=>{"Confirm"===e.target.value&&Z(!1),A(e.target.value)}}),(0,m.jsx)(v.Z,{disabled:S,buttonText:f("confirm"),onAction:()=>{"Confirm"===C&&(g((e=>!e)),T({sid:i}).then((()=>{g((e=>!e)),j(-1)})).catch({}))},customStyleButton:{marginTop:"1rem",marginBottom:"1rem"}})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.rU,{to:"/q/".concat(p.username,"/edit/student"),state:{openAs:"CLASS_TEACHER_SIDE",sid:i,subTypeOpen:x},children:(0,m.jsx)("h6",{className:a.Z.edit,children:"Edit"})}),null!==h&&void 0!==h&&h.includes(x)?"":(0,m.jsx)("h6",{className:a.Z.remove,onClick:()=>I(!0),children:"Remove"})]})}),N&&(0,m.jsx)(c.Z,{})]})]})}},5898:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var s=i(72791),l=i(39230),n=i(8793),d=i(79872),o=i(6245),a=i(69721),u=i(98094),c=i(88872),r=i(56521),v=(i(47174),i(71114)),_=i(47167),m=i(16871),h=i(38733),x=i(91007),f=i(95048),p=i(51174),j=i(20772),T=i(45474),N=i(66769),g=i(94790),S=i(46523),Z=i(80184);const C=["INSTITUTE","INSTITUTE_ADMIN","STUDENT_SECTION","CLASS_CATALOG"],A=()=>{var e,t,i,A,E,I,b,y,k,w,D,L,O,U,R,P,G,M,F,H,B,q,V,Y,$,z,J,K,W,X,Q,ee,te,ie,se,le,ne,de,oe,ae,ue,ce,re,ve,_e,me,he,xe,fe,pe;const{t:je}=(0,l.$G)(),Te=[{name:je("about"),id:0},{name:je("fees_data"),id:1},{name:je("extra_skills"),id:2}],Ne=(0,m.TH)(),ge=(0,m.s0)(),[Se,Ze]=(0,s.useState)(!1),[Ce,Ae]=(0,s.useState)(!1),Ee=(0,f.v9)((e=>e.idChange.id)),{data:Ie}=(0,x.pu)(Ee,{skip:!Ee}),[be,ye]=(0,s.useState)(0),{oneStudentProfile:ke,oneStudentProfileRefetch:we}=(0,o._P)({sid:null===(e=Ne.state)||void 0===e?void 0:e.sid,skip:!(null!==(t=Ne.state)&&void 0!==t&&t.sid)});(0,s.useEffect)((()=>{var e;null!==(e=Ne.state)&&void 0!==e&&e.sid&&we()}),[null===(i=Ne.state)||void 0===i?void 0:i.sid,we]),(0,s.useEffect)((()=>{var e,t;"ADMISSION_ADMIN_SCHOLARSHIP"!==(null===(e=Ne.state)||void 0===e?void 0:e.viewAs)&&"FEES_DATA"!==(null===(t=Ne.state)||void 0===t?void 0:t.openTab)||ye(1)}),[null===(A=Ne.state)||void 0===A?void 0:A.viewAs,null===(E=Ne.state)||void 0===E?void 0:E.openTab]),(0,s.useEffect)((()=>{var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[null===(I=Ne.state)||void 0===I?void 0:I.sid]);const De=()=>{Ae((e=>!e))};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("div",{className:h.Z.navbar,children:"INSTITUTE"===(null===(b=Ne.state)||void 0===b?void 0:b.viewAs)?(0,Z.jsx)(j.default,{status:"home"}):(0,Z.jsx)(d.default,{status:"members",profileId:Ie?null===Ie||void 0===Ie||null===(y=Ie.user)||void 0===y?void 0:y._id:"",username:null===Ie||void 0===Ie||null===(k=Ie.user)||void 0===k?void 0:k.username,name:null===Ie||void 0===Ie||null===(w=Ie.user)||void 0===w?void 0:w.userLegalName,photoId:null===Ie||void 0===Ie||null===(D=Ie.user)||void 0===D?void 0:D.photoId,profilePhoto:null===Ie||void 0===Ie||null===(L=Ie.user)||void 0===L?void 0:L.profilePhoto,profileData:null===Ie||void 0===Ie?void 0:Ie.user})}),"certificate"===(null===(O=Ne.search)||void 0===O?void 0:O.substring(3))?(0,Z.jsx)(N.default,{}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:h.Z.goback_container,id:"scrollView",children:(0,Z.jsxs)("div",{className:h.Z.goback_container_text,onClick:()=>{ge(-1)},children:[(0,Z.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,Z.jsx)("h6",{className:h.Z.goback_container_text_go,children:je("go_back")})]})}),(0,Z.jsxs)("div",{className:h.Z.student_from_container,style:{marginBottom:"1rem"},children:[(0,Z.jsx)(c.Z,{textLevel:"Student Profile",textLevelInner:" (".concat(null!==(U=null===ke||void 0===ke||null===(R=ke.student)||void 0===R?void 0:R.profile_percentage)&&void 0!==U?U:0,"% profile completed)"),viewAs:!0,is_admission:!!C.includes(null===(P=Ne.state)||void 0===P?void 0:P.viewAs),admissionTitle:je("login_details"),onAdmissionTitle:De}),(0,Z.jsx)(u.Z,{customStyle:{width:"100%"}}),(0,Z.jsx)(r.Z,{name:"".concat((null===ke||void 0===ke||null===(G=ke.student)||void 0===G?void 0:G.studentFirstName)||""," ").concat(null!==ke&&void 0!==ke&&null!==(M=ke.student)&&void 0!==M&&M.studentMiddleName?null===ke||void 0===ke||null===(F=ke.student)||void 0===F?void 0:F.studentMiddleName:""," ").concat((null===ke||void 0===ke||null===(H=ke.student)||void 0===H?void 0:H.studentLastName)||""),designation:"Active class: ".concat((null===ke||void 0===ke||null===(B=ke.student)||void 0===B||null===(q=B.studentClass)||void 0===q?void 0:q.classTitle)||"-"),indexNumber:"Roll No. ".concat((null===ke||void 0===ke||null===(V=ke.student)||void 0===V?void 0:V.studentROLLNO)||"-"),grNumber:"".concat(je("gr_number")," ").concat(null!==(Y=null===ke||void 0===ke||null===($=ke.student)||void 0===$?void 0:$.studentGRNO)&&void 0!==Y?Y:""),dynamicImage:"1"!==(null===ke||void 0===ke||null===(z=ke.student)||void 0===z?void 0:z.photoId)?"".concat(a.yI,"/").concat(null===ke||void 0===ke||null===(J=ke.student)||void 0===J?void 0:J.studentProfilePhoto):"/images/ins_default_profile.svg",sid:null===ke||void 0===ke||null===(K=ke.student)||void 0===K?void 0:K._id,activeUrl:"student",viewAs:"SUBJECT_TEACHER"!==(null===(W=Ne.state)||void 0===W?void 0:W.viewAs)&&"STUDENT"!==(null===(X=Ne.state)||void 0===X?void 0:X.viewAs)&&"INSTITUTE"!==(null===(Q=Ne.state)||void 0===Q?void 0:Q.viewAs)&&"CERTIFICATE_AUTHORITY"!==(null===(ee=Ne.state)||void 0===ee?void 0:ee.viewAs)&&"FINANCE_MANAGER"!==(null===(te=Ne.state)||void 0===te?void 0:te.viewAs)&&"ID_CARD_SECTION"!==(null===(ie=Ne.state)||void 0===ie?void 0:ie.viewAs),openAs:null===(se=Ne.state)||void 0===se?void 0:se.viewAs,onEdit:()=>{Ze(!0)},is_hostel_link:null!==(le=null===ke||void 0===ke||null===(ne=ke.student)||void 0===ne||null===(de=ne.exist_linked_hostel)||void 0===de||null===(oe=de.exist_student)||void 0===oe?void 0:oe._id)&&void 0!==le?le:"",uniqueGr:null===ke||void 0===ke||null===(ae=ke.student)||void 0===ae?void 0:ae.studentGRNO,instituteId:null===ke||void 0===ke||null===(ue=ke.student)||void 0===ue||null===(ce=ue.institute)||void 0===ce?void 0:ce._id,onRefetchStudentApi:we,isGrButtonLock:null===ke||void 0===ke||null===(re=ke.student)||void 0===re?void 0:re.query_lock_status}),(0,Z.jsx)("div",{style:{marginTop:"1.7rem"}}),(0,Z.jsx)(_.Z,{tabList:Te,activeIndexTab:be,setActiveIndexTab:ye,customStyleTab:{width:"33.3%"}}),(0,Z.jsx)(u.Z,{customStyle:{width:"100%"}}),0===be&&(0,Z.jsx)(S.Z,{studentId:null===(ve=Ne.state)||void 0===ve?void 0:ve.sid}),2===be&&(0,Z.jsx)(n.Z,{children:(0,Z.jsx)(v.default,{sid:null===ke||void 0===ke||null===(_e=ke.student)||void 0===_e?void 0:_e._id})}),1===be&&(0,Z.jsx)(n.Z,{children:(0,Z.jsx)("div",{style:{padding:"1rem"},children:(0,Z.jsx)(g.Z,{isEditable:"Granted"===(null===ke||void 0===ke||null===(me=ke.student)||void 0===me?void 0:me.online_amount_edit_access)})})})]})]}),Se&&(0,Z.jsx)(p.Z,{onClose:()=>{Ze((e=>!e))},sid:null===ke||void 0===ke||null===(he=ke.student)||void 0===he?void 0:he._id,openAs:null===(xe=Ne.state)||void 0===xe?void 0:xe.viewAs}),Ce&&(0,Z.jsx)(T.Z,{onLoginDetailToggle:De,loginData:null===ke||void 0===ke||null===(fe=ke.student)||void 0===fe?void 0:fe.user,sid:null===ke||void 0===ke||null===(pe=ke.student)||void 0===pe?void 0:pe._id,onRefetch:we})]})}},88872:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(72791),l=i(55136),n=i(39230),d=i(89891),o=i(16871),a=i(34314),u=i(80184);const c={inputProps:{"aria-label":"Switch demo"}},r=e=>{var t,i,r,v,_,m,h,x,f,p,j,T;let{textLevel:N,onPrevious:g,onNext:S,onClose:Z,viewAs:C,is_admission:A,admissionTitle:E,onAdmissionTitle:I,is_install:b,installTitle:y,onInstallTitle:k,installmentEdit:w,sid:D,instituteId:L,textLevelInner:O,onConfig:U,configTitle:R,onConfig1:P,configTitle1:G,isStaff:M}=e;const{t:F}=(0,n.$G)(),[H,B]=(0,s.useState)(!1),q=(0,o.TH)();(0,o.UO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:l.Z.staff_header_container,children:[(0,u.jsxs)("h6",{className:l.Z.staff_header_text,children:[N,O?(0,u.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:O}):""]}),"DEPARTMENT_HEAD"===C?"YES"===(null===(t=q.state)||void 0===t?void 0:t.editAuthority)?null:(0,u.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:U,style:{color:"#0000ff"},children:R}),(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:P,style:{color:"#0000ff"},children:G})]}):null,!C&&(0,u.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,u.jsxs)("div",{className:l.Z.staff_header_prev,onClick:g,children:[(0,u.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,u.jsx)("span",{children:F("prev")})]}),(0,u.jsxs)("div",{className:l.Z.staff_header_next,onClick:S,children:[(0,u.jsx)("span",{children:F("next")}),(0,u.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,u.jsx)("p",{className:l.Z.staff_header_close,onClick:Z,children:F("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===C&&(0,u.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:E}),M?"":(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>B(!0),style:{color:"#0000ff"},children:F("student_message")}),(0,u.jsx)("p",{className:l.Z.staff_header_close,onClick:Z,children:F("close_")})]}),"STUDENT_MESSAGE"===(null===(i=q.state)||void 0===i?void 0:i.studentMessaageView)&&"STUDENT_SECTION"!==(null===(r=q.state)||void 0===r?void 0:r.viewAs)&&(0,u.jsx)("div",{className:l.Z.staff_header_function,children:(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>B(!0),style:{color:"#0000ff"},children:F("student_message")})}),A?(0,u.jsxs)("div",{className:l.Z.admission_actions,children:[b&&(0,u.jsxs)("p",{className:l.Z.staff_header_text,style:{color:"#0000ff"},children:[y,(0,u.jsx)(d.Z,{...c,checked:w,onChange:k})]}),"STUDENT_SECTION"===(null===(v=q.state)||void 0===v?void 0:v.viewAs)&&(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>B(!0),style:{color:"#0000ff"},children:F("student_message")}),(0,u.jsx)("p",{className:l.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:E})]}):""]}),H&&(0,u.jsx)(a.Z,{onClose:()=>B(!1),sendStudentList:null!==(_=null===(m=q.state)||void 0===m?void 0:m.sid)&&void 0!==_?_:D,instituteId:null!==(h=null===(x=q.state)||void 0===x?void 0:x.instituteId)&&void 0!==h?h:L,accessAs:null!==(f=null===(p=q.state)||void 0===p?void 0:p.viewAs)&&void 0!==f?f:"INSTITUTE_ADMIN",headId:null!==(j=null===(T=q.state)||void 0===T?void 0:T.headId)&&void 0!==j?j:L})]})}},23984:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(80476),l=i(80184);const n=e=>{let{customStyle:t,children:i}=e;return(0,l.jsx)("div",{className:s.Z.btn_wrapper,style:t,children:i})}},87049:(e,t,i)=>{i.d(t,{Z:()=>s});const s={edit_modal_container:"EditConfirm_edit_modal_container__WfbTq",modal_header:"EditConfirm_modal_header__4sq5J",edit:"EditConfirm_edit__ziVGP",remove:"EditConfirm_remove__PCXLs",xlsx_update_btn:"EditConfirm_xlsx_update_btn__H3yM8",save_stop_btn:"EditConfirm_save_stop_btn__9NiZ5",update_to_btn:"EditConfirm_update_to_btn__ExCJv"}}}]);
//# sourceMappingURL=81729.10a588e2.chunk.js.map