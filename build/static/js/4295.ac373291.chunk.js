"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4295],{1342:(i,n,e)=>{e.r(n),e.d(n,{default:()=>C});var t=e(72791),o=e(95048),l=e(39230),s=e(85243),a=e(49327),d=e(43317),r=e(1669),c=e(98684),_=e(80184);function p(i){var n,e;let{setIndex:d,applyData:r}=i;const{t:p}=(0,l.$G)(),f=(0,o.I0)(),[m,u]=(0,t.useState)(!1);return(0,_.jsx)(_.Fragment,{children:null!==r&&void 0!==r&&r.type?(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:a.Z.card,onClick:()=>u((i=>!i)),children:[(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,_.jsx)("img",{src:"".concat(c.Fk,"/Vector.svg"),alt:"admission icon"}),(0,_.jsx)("div",{style:{width:"100%"},children:(0,_.jsxs)("div",{className:a.Z.cardRow,style:{justifyContent:"flex-start",gap:"1rem",alignItems:"center"},children:[(0,_.jsx)("h6",{style:{marginBottom:"0"},children:null!==(n=null===r||void 0===r?void 0:r.type)&&void 0!==n?n:""}),(0,_.jsx)("img",{src:"".concat(c.Fk,"/next.svg"),alt:"admission icon",style:{rotate:"90deg",height:"1.3rem"}})]})})]}),m?(0,_.jsx)(_.Fragment,{children:null===r||void 0===r||null===(e=r.apps)||void 0===e?void 0:e.map((i=>(0,_.jsxs)("div",{onClick:()=>{var n;f(s.F.admissionQuery({studentAppId:null===i||void 0===i?void 0:i._id,studentAdminId:null===i||void 0===i||null===(n=i.admissionAdmin)||void 0===n?void 0:n._id})),d(5)},style:{marginTop:"0.7rem",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem",marginLeft:"2rem",borderTop:"0.5px solid #cacaca",paddingTop:"0.7rem"},children:[(0,_.jsx)("img",{src:"/images/members/admission-application-icon.svg",alt:"admission icon"}),(0,_.jsxs)("div",{style:{width:"100%"},children:[(0,_.jsxs)("div",{className:a.Z.cardRow,children:[(0,_.jsx)("h6",{children:null===i||void 0===i?void 0:i.applicationName}),"Direct Admisison"===(null===i||void 0===i?void 0:i.application_type)&&(0,_.jsx)("img",{src:"/images/members/application-hotspot-icon.svg",alt:"admission icon"})]}),(0,_.jsxs)("div",{className:a.Z.cardRow,children:[(null===i||void 0===i?void 0:i.applicationEndDate)&&(0,_.jsx)("p",{children:p("last_date_to_apply")}),null!==i&&void 0!==i&&i.applicationEndDate?(0,_.jsx)("h6",{style:{marginBottom:"0"},children:null===i||void 0===i?void 0:i.applicationEndDate}):""]})]})]})))}):null]})}):(0,_.jsxs)("div",{className:a.Z.card,onClick:()=>{var i;f(s.F.admissionQuery({studentAppId:null===r||void 0===r?void 0:r._id,studentAdminId:null===r||void 0===r||null===(i=r.admissionAdmin)||void 0===i?void 0:i._id})),d(5)},style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,_.jsx)("img",{src:"/images/members/admission-application-icon.svg",alt:"admission icon"}),(0,_.jsxs)("div",{style:{width:"100%"},children:[(0,_.jsxs)("div",{className:a.Z.cardRow,children:[(0,_.jsx)("h6",{children:null===r||void 0===r?void 0:r.applicationName}),"Direct Admisison"===(null===r||void 0===r?void 0:r.application_type)&&(0,_.jsx)("img",{src:"/images/members/application-hotspot-icon.svg",alt:"admission icon"})]}),(0,_.jsxs)("div",{className:a.Z.cardRow,children:[(null===r||void 0===r?void 0:r.applicationEndDate)&&(0,_.jsx)("p",{children:p("last_date_to_apply")}),null!==r&&void 0!==r&&r.applicationEndDate?(0,_.jsx)("h6",{style:{marginBottom:"0"},children:null===r||void 0===r?void 0:r.applicationEndDate}):""]})]})]})})}const f=function(i){var n;let{setIndex:e}=i;const{t:t}=(0,l.$G)(),s=(0,o.v9)((i=>i.idChange.searchProfile)),{instituteAllApplicationList:c,instituteAllApplicationListLoading:f}=(0,d.DR)({data:{id:null===s||void 0===s?void 0:s.id,page:1,limit:1e3},skip:!(null!==s&&void 0!==s&&s.id)});return console.info("jsbdfdn",null===c||void 0===c?void 0:c.list),(0,_.jsxs)("div",{className:a.Z.applications,children:[(0,_.jsx)("div",{className:a.Z.top,children:t("select_appropriate_application")}),(0,_.jsx)("div",{className:a.Z.content,children:(0,_.jsx)("div",{className:a.Z.contentBottom,children:(0,_.jsxs)("div",{className:a.Z.cardsContainer,children:[null===c||void 0===c||null===(n=c.list)||void 0===n?void 0:n.map((i=>(0,_.jsx)(p,{setIndex:e,applyData:i},null===i||void 0===i?void 0:i._id))),f&&(0,_.jsx)(r.Z,{})]})})})]})};var m=e(51561),u=e(16871),v=e(84959),h=e(98734);const x=function(i){var n;let{join:e,applicantUserName:o}=i;const{t:s}=(0,l.$G)(),[d,r]=(0,t.useState)(!1),[c,p]=(0,t.useState)(!0),[f,x]=(0,t.useState)(""),[j,g]=(0,t.useState)({msg:"",run:!1}),y=(0,u.s0)(),{searchCodeForJoin:S,searchCodeForJoinRefetch:N}=(0,v.yz)({data:{code:f,joinAs:e},skip:c});return(0,t.useEffect)((()=>{var i,n;null!==S&&void 0!==S&&S.seen?null!==S&&void 0!==S&&null!==(i=S.classes)&&void 0!==i&&i.classCode?(r(!1),y("/q/joining",{state:{joinCode:f,formAs:"STUDENT",urlUsername:o}})):null!==S&&void 0!==S&&null!==(n=S.one_ins)&&void 0!==n&&n.staffJoinCode?(r(!1),y("/q/joining",{state:{joinCode:f,formAs:"STAFF",urlUsername:o}})):(r(!1),g({msg:"Enter code is not valid!",run:!!f})):(r(!1),g({msg:"Enter code is not valid!",run:!!f}))}),[null===S||void 0===S||null===(n=S.classes)||void 0===n?void 0:n.classCode,null===S||void 0===S?void 0:S.one_ins,null===S||void 0===S?void 0:S.seen]),(0,_.jsxs)(_.Fragment,{children:["Student"===e&&(0,_.jsxs)("div",{className:a.Z.applications,children:[(0,_.jsx)("div",{className:a.Z.top,children:s("existing_student")}),(0,_.jsxs)("div",{className:a.Z.content2,children:[(0,_.jsx)("h6",{children:s("enter_code")}),(0,_.jsx)("input",{type:"text",pattern:"[a-zA-Z0-9]+",maxlength:"6",value:f,onChange:i=>x(i.target.value)}),6!==f.length?(0,_.jsx)("button",{type:"submit",className:a.Z.disabledBtn,children:s("fill_the_form")}):(0,_.jsx)("button",{type:"submit",className:a.Z.fillbtn,onClick:()=>{f&&(r(!0),p((i=>!i)),N())},children:s("fill_the_form")}),(0,_.jsx)("h6",{className:a.Z.tips,children:s("get_registration_code")}),(0,_.jsxs)("ol",{children:[(0,_.jsx)("li",{children:(0,_.jsx)("p",{className:a.Z.tip,children:s("registration_step_1")})}),(0,_.jsx)("li",{children:(0,_.jsx)("p",{className:a.Z.tip,children:s("registration_step_2")})}),(0,_.jsx)("li",{children:(0,_.jsx)("p",{className:a.Z.tip,children:s("registration_step_3")})})]})]})]}),"Staff"===e&&(0,_.jsxs)("div",{className:a.Z.applications,children:[(0,_.jsx)("div",{className:a.Z.top,children:s("existing_student")}),(0,_.jsxs)("div",{className:a.Z.content2,children:[(0,_.jsx)("h6",{children:s("enter_code")}),(0,_.jsx)("input",{type:"text",pattern:"[a-zA-Z0-9]+",maxlength:"6",value:f,onChange:i=>x(i.target.value)}),6!==f.length?(0,_.jsx)("button",{type:"submit",className:a.Z.disabledBtn,children:s("fill_the_form")}):(0,_.jsx)("button",{type:"submit",className:a.Z.fillbtn,onClick:()=>{f&&(r(!0),p((i=>!i)),N())},children:(0,_.jsxs)("span",{children:[" ",s("fill_the_form")]})})]})]}),d&&(0,_.jsx)(h.Z,{}),(0,_.jsx)(m.Ch,{msg:j.msg,run:j.run,setRun:()=>g({msg:"",run:!1}),postiton:"bottom",type:"error"})]})};function j(i){let{text:n,img:e,setJoin:t,option:o,setIndex:l}=i;return(0,_.jsxs)("div",{className:a.Z.singleOption,onClick:()=>{t(o),l(3)},children:[(0,_.jsx)("img",{src:e,alt:""}),(0,_.jsx)("h6",{children:n})]})}const g=function(i){let{setJoin:n,setIndex:e}=i;const{t:t}=(0,l.$G)();return(0,_.jsxs)("div",{className:a.Z.applications,children:[(0,_.jsx)("div",{className:a.Z.top,children:t("existing_student_and_join")}),(0,_.jsxs)("div",{className:a.Z.content,children:[(0,_.jsx)("div",{className:a.Z.contenttop,children:(0,_.jsx)("p",{children:t("to_join_or_appy")})}),(0,_.jsxs)("div",{className:a.Z.contentBottom,children:[(0,_.jsx)(j,{text:t("as_staff_"),option:"Staff",img:"/images/members/staff.svg",setJoin:n,setIndex:e}),(0,_.jsx)(j,{text:t("as_student_"),img:"/images/members/student.svg",setJoin:n,setIndex:e,option:"Student"})]})]})]})};var y=e(68825),S=e(73032),N=e(66328),A=e(56112),Z=e(69721);const b=function(i){var n,e,l,s,d,r,c,p,f,v,x,j,g,b,C,P,F,I,J,D,k,w,E;let{setIndex:R,applicantUserName:T}=i;const B=(0,o.v9)((i=>i.admissionChange)),U=(0,o.v9)((i=>i.idChange.id)),[M,Q]=(0,t.useState)(!1),[G,O]=(0,t.useState)(""),[q,L]=(0,t.useState)({msg:"",run:!1}),[V,z]=(0,t.useState)(!1),H=(0,u.s0)(),{oneApplicationDetail:K,oneApplicationDetailRefetch:W}=(0,S.mf)({apid:null===B||void 0===B?void 0:B.studentAppId,skip:!(null!==B&&void 0!==B&&B.studentAppId)}),[X]=(0,S.G_)();(0,t.useEffect)((()=>{null!==B&&void 0!==B&&B.studentAppId&&W()}),[null===B||void 0===B?void 0:B.studentAppId,W]);const Y=()=>{Q((i=>!i))};return(0,_.jsxs)("div",{className:a.Z.applications,children:[(0,_.jsxs)("div",{className:a.Z.top1,children:[(0,_.jsx)("img",{src:"/images/left-nav-icon.svg",alt:"",onClick:()=>R(1)}),(0,_.jsx)("h6",{children:null===K||void 0===K||null===(n=K.oneApply)||void 0===n?void 0:n.applicationName}),(0,_.jsx)("div",{})]}),(0,_.jsxs)("div",{className:a.Z.content,children:[(0,_.jsxs)("div",{className:a.Z.contentColumn,children:[(0,_.jsx)("p",{children:(0,y.t)("department")}),(0,_.jsx)("h6",{children:null===K||void 0===K||null===(e=K.oneApply)||void 0===e||null===(l=e.applicationDepartment)||void 0===l?void 0:l.dName})]}),(0,_.jsxs)("div",{className:a.Z.contentRow,children:[null!==K&&void 0!==K&&null!==(s=K.oneApply)&&void 0!==s&&s.applicationStartDate?(0,_.jsxs)("div",{className:a.Z.contentColumn,children:[(0,_.jsx)("p",{children:(0,y.t)("starting_date")}),(0,_.jsx)("h6",{children:null===K||void 0===K||null===(d=K.oneApply)||void 0===d?void 0:d.applicationStartDate})]}):"",null!==K&&void 0!==K&&null!==(r=K.oneApply)&&void 0!==r&&r.applicationEndDate?(0,_.jsxs)("div",{className:a.Z.contentColumn,children:[(0,_.jsx)("p",{children:(0,y.t)("last_date")}),(0,_.jsx)("h6",{children:null===K||void 0===K||null===(c=K.oneApply)||void 0===c?void 0:c.applicationEndDate})]}):""]}),(0,_.jsxs)("div",{className:a.Z.contentRow,children:[null!==K&&void 0!==K&&null!==(p=K.oneApply)&&void 0!==p&&p.applicationSeats?(0,_.jsxs)("div",{className:a.Z.contentColumn,children:[(0,_.jsx)("p",{children:(0,y.t)("available_sets")}),(0,_.jsx)("h6",{children:null===K||void 0===K||null===(f=K.oneApply)||void 0===f?void 0:f.applicationSeats})]}):"",null!==K&&void 0!==K&&null!==(v=K.oneApply)&&void 0!==v&&v.applicationPhoto?(0,_.jsx)("div",{className:a.Z.contentColumn,children:(0,_.jsx)("a",{title:"Download File",href:"".concat(Z.zQ,"/").concat(null===K||void 0===K||null===(x=K.oneApply)||void 0===x?void 0:x.applicationPhoto),target:"_blank",rel:"noopener noreferrer",children:(0,_.jsx)("button",{className:a.Z.admission_fees_btn,children:(0,_.jsx)("div",{children:(0,y.t)("application_brochure")})})})}):""]}),null!==K&&void 0!==K&&null!==(j=K.oneApply)&&void 0!==j&&j.applicationAbout?(0,_.jsxs)("div",{className:a.Z.contentColumn,children:[(0,_.jsx)("p",{children:(0,y.t)("application_info")}),null===K||void 0===K||null===(g=K.oneApply)||void 0===g||null===(b=g.applicationAbout)||void 0===b||null===(C=b.split("\n"))||void 0===C?void 0:C.map(((i,n)=>(0,_.jsx)("h6",{children:i},n)))]}):"",null!==K&&void 0!==K&&null!==(P=K.oneApply)&&void 0!==P&&P._id?(0,_.jsx)("div",{className:a.Z.applyBtn,onClick:()=>{var i,n;null!==K&&void 0!==K&&null!==(i=K.oneApply)&&void 0!==i&&i._id&&U&&(z((i=>!i)),X({uid:U,aid:null===K||void 0===K||null===(n=K.oneApply)||void 0===n?void 0:n._id}).then((i=>{var n,e,t,o,l,s,a,d,r,c,_,p,f;(z((i=>!i)),null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.denied)?L({msg:null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.message,run:!0}):H("/q/joining",{state:{formAs:"STUDENT",openAs:"Direct Admisison"===(null===K||void 0===K||null===(t=K.oneApply)||void 0===t?void 0:t.application_type)?"ADMISSION_DIRECT_APPLY":"ADMISSION_APPLY",appId:null===K||void 0===K||null===(o=K.oneApply)||void 0===o?void 0:o._id,urlUsername:T,first_install:"Direct Admisison"===(null===K||void 0===K||null===(l=K.oneApply)||void 0===l?void 0:l.application_type)?null===K||void 0===K||null===(s=K.oneApply)||void 0===s||null===(a=s.direct_linked_structure)||void 0===a||null===(d=a.one_installments)||void 0===d?void 0:d.fees:0,applicationName:null===K||void 0===K||null===(r=K.oneApply)||void 0===r?void 0:r.applicationName,departmentId:null===K||void 0===K||null===(c=K.oneApply)||void 0===c||null===(_=c.applicationDepartment)||void 0===_?void 0:_._id,admissionId:null===K||void 0===K||null===(p=K.oneApply)||void 0===p||null===(f=p.admissionAdmin)||void 0===f?void 0:f._id,whichFormShow:"DEPARTMENT"}})})).catch({}))},children:(0,y.t)("apply_to_fill_application_form")}):null,M&&(0,_.jsx)(A.Z,{onClose:Y,departmentId:null!==(F=null===K||void 0===K||null===(I=K.oneApply)||void 0===I||null===(J=I.applicationDepartment)||void 0===J?void 0:J._id)&&void 0!==F?F:"",classMasterId:null!==(D=null===K||void 0===K||null===(k=K.oneApply)||void 0===k?void 0:k.applicationMaster)&&void 0!==D?D:"",batchId:null===K||void 0===K||null===(w=K.oneApply)||void 0===w||null===(E=w.applicationBatch)||void 0===E?void 0:E._id,onSelectedStrucutre:i=>{O(i),Y()},asOpen:"STUDENT_VIEW_STRUCTURE"}),G&&(0,_.jsx)(N.Z,{structureId:G,setStructureId:()=>{O(""),Y()},viewAs:"STUDENT"}),(0,_.jsx)(m.Ch,{msg:q.msg,run:q.run,setRun:()=>L({msg:"",run:!1}),postiton:"bottom",type:"error"})]}),V&&(0,_.jsx)(h.Z,{})]})};const C=function(i){let{applicantUserName:n}=i;const[e,o]=(0,t.useState)(1),[l,s]=(0,t.useState)("");return(0,_.jsxs)("div",{className:a.Z.joiningForm,children:[1===e&&(0,_.jsx)(f,{setIndex:o}),2===e&&(0,_.jsx)(g,{setIndex:o,setJoin:s}),3===e&&(0,_.jsx)(x,{join:l,applicantUserName:n}),5===e&&(0,_.jsx)(b,{setIndex:o,applicantUserName:n})]})}},36665:(i,n,e)=>{e.d(n,{Z:()=>s});e(72791);var t=e(12072),o=e(1874),l=e(80184);const s=i=>{let{onClose:n,children:e}=i;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{onClose:n}),(0,l.jsx)(t.Z,{children:e})]})}},1874:(i,n,e)=>{e.d(n,{Z:()=>s});e(72791);var t=e(54164),o=e(84489),l=e(80184);const s=i=>{let{onClose:n,customStyleBackdrop:e}=i;return(0,l.jsx)(l.Fragment,{children:t.createPortal((0,l.jsx)(o.Z,{onClose:n,customStyleBackdrop:e}),document.getElementById("backdrop"))})}},98094:(i,n,e)=>{e.d(n,{Z:()=>l});e(72791);var t=e(55136),o=e(80184);const l=i=>{let{customStyle:n}=i;return(0,o.jsx)("hr",{className:t.Z.universal_hr,style:{...n}})}},49327:(i,n,e)=>{e.d(n,{Z:()=>t});const t={joiningForm:"JoiningForm_joiningForm__68mEY",applications:"JoiningForm_applications__bff+a",top:"JoiningForm_top__tQnYn",top1:"JoiningForm_top1__e8Vfb",content:"JoiningForm_content__+RWaa",contentRow:"JoiningForm_contentRow__TpvSK",contentColumn:"JoiningForm_contentColumn__p86fj",contentBottom:"JoiningForm_contentBottom__MoDyr",contenttop:"JoiningForm_contenttop__Chet2",btn:"JoiningForm_btn__aOjLy",cardsContainer:"JoiningForm_cardsContainer__IIQ02",card:"JoiningForm_card__jSpur",cardRow:"JoiningForm_cardRow__g-JmQ",singleOption:"JoiningForm_singleOption__Z5fqo",content2:"JoiningForm_content2__6CnCr",fillbtn:"JoiningForm_fillbtn__T+NaF",disabledBtn:"JoiningForm_disabledBtn__ayQpg",tips:"JoiningForm_tips__zkrQ2",tip:"JoiningForm_tip__ytwT7",applyBtn:"JoiningForm_applyBtn__1M3zh",inpput:"JoiningForm_inpput__D1PBE",admission_fees_btn:"JoiningForm_admission_fees_btn__lNpiY",admission_fees_btn_active:"JoiningForm_admission_fees_btn_active__IIoHH",card_row_container:"JoiningForm_card_row_container__RRJK1",hostel_direct:"JoiningForm_hostel_direct__O3rym"}},55136:(i,n,e)=>{e.d(n,{Z:()=>t});const t={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}}}]);
//# sourceMappingURL=4295.ac373291.chunk.js.map