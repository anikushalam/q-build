"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[75076,12245],{1342:(i,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var t=n(72791),o=n(23441),l=n(95048),a=n(39230),s=n(85243),d=n(49327),_=n(29017),r=n(80184);function c(i){let{setIndex:e,key:n,ref:t,applyData:o}=i;const{t:_}=(0,a.$G)(),c=(0,l.I0)();return(0,r.jsx)(r.Fragment,{children:"Normal Application"===(null===o||void 0===o?void 0:o.applicationTypeStatus)?(0,r.jsxs)("div",{className:d.Z.card,onClick:()=>{var i;c(s.F.admissionQuery({studentAppId:null===o||void 0===o?void 0:o._id,studentAdminId:null===o||void 0===o||null===(i=o.admissionAdmin)||void 0===i?void 0:i._id})),e(5)},ref:t,style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,r.jsx)("img",{src:"/images/members/admission-application-icon.svg",alt:"admission icon"}),(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsxs)("div",{className:d.Z.cardRow,children:[(0,r.jsx)("h6",{children:null===o||void 0===o?void 0:o.applicationName}),"Direct Admisison"===(null===o||void 0===o?void 0:o.application_type)&&(0,r.jsx)("img",{src:"/images/members/application-hotspot-icon.svg",alt:"admission icon"})]}),(0,r.jsxs)("div",{className:d.Z.cardRow,children:[(null===o||void 0===o?void 0:o.applicationEndDate)&&(0,r.jsx)("p",{children:_("last_date_to_apply")}),null!==o&&void 0!==o&&o.applicationEndDate?(0,r.jsx)("h6",{style:{marginBottom:"0"},children:null===o||void 0===o?void 0:o.applicationEndDate}):""]})]})]},n):(0,r.jsx)("div",{ref:t},n)})}const p=function(i){let{setIndex:e}=i;const[n,s]=(0,t.useState)(!0),[p,f]=(0,t.useState)(1),{t:u}=(0,a.$G)(),v=(0,l.v9)((i=>i.idChange.searchProfile)),[m,h]=(0,o.YD)(),[x,j]=(0,t.useState)([]),{allAppAtInstitute:g,allAppAtInstituteRefetch:S}=(0,_.Mn)({data:{id:null===v||void 0===v?void 0:v.id,page:p,limit:10},skip:!(null!==v&&void 0!==v&&v.id)});return(0,t.useEffect)((()=>{null!==v&&void 0!==v&&v.id&&S()}),[p,null===v||void 0===v?void 0:v.id,S]),(0,t.useEffect)((()=>{h&&n&&f((i=>i+1))}),[h,n]),(0,t.useEffect)((()=>{var i;null!==g&&void 0!==g&&g.allApp&&j([...new Set([...x,...null===g||void 0===g?void 0:g.allApp])]),10===(null===g||void 0===g||null===(i=g.allApp)||void 0===i?void 0:i.length)?s(!0):s(!1)}),[null===g||void 0===g?void 0:g.allApp]),(0,r.jsxs)("div",{className:d.Z.applications,children:[(0,r.jsx)("div",{className:d.Z.top,children:u("select_appropriate_application")}),(0,r.jsx)("div",{className:d.Z.content,children:(0,r.jsx)("div",{className:d.Z.contentBottom,children:(0,r.jsx)("div",{className:d.Z.cardsContainer,children:null===x||void 0===x?void 0:x.map(((i,n)=>(0,r.jsx)(c,{setIndex:e,ref:m,applyData:i},n)))})})})]})};var f=n(51561),u=n(16871),v=n(84959),m=n(98734);const h=function(i){var e;let{join:n,applicantUserName:o}=i;const{t:l}=(0,a.$G)(),[s,_]=(0,t.useState)(!1),[c,p]=(0,t.useState)(!0),[h,x]=(0,t.useState)(""),[j,g]=(0,t.useState)({msg:"",run:!1}),S=(0,u.s0)(),{searchCodeForJoin:N,searchCodeForJoinRefetch:A}=(0,v.yz)({data:{code:h,joinAs:n},skip:c});return(0,t.useEffect)((()=>{var i,e;null!==N&&void 0!==N&&N.seen?null!==N&&void 0!==N&&null!==(i=N.classes)&&void 0!==i&&i.classCode?(_(!1),S("/q/joining",{state:{joinCode:h,formAs:"STUDENT",urlUsername:o}})):null!==N&&void 0!==N&&null!==(e=N.one_ins)&&void 0!==e&&e.staffJoinCode?(_(!1),S("/q/joining",{state:{joinCode:h,formAs:"STAFF",urlUsername:o}})):(_(!1),g({msg:"Enter code is not valid!",run:!!h})):(_(!1),g({msg:"Enter code is not valid!",run:!!h}))}),[null===N||void 0===N||null===(e=N.classes)||void 0===e?void 0:e.classCode,null===N||void 0===N?void 0:N.one_ins,null===N||void 0===N?void 0:N.seen]),(0,r.jsxs)(r.Fragment,{children:["Student"===n&&(0,r.jsxs)("div",{className:d.Z.applications,children:[(0,r.jsx)("div",{className:d.Z.top,children:l("existing_student")}),(0,r.jsxs)("div",{className:d.Z.content2,children:[(0,r.jsx)("h6",{children:l("enter_code")}),(0,r.jsx)("input",{type:"text",pattern:"[a-zA-Z0-9]+",maxlength:"6",value:h,onChange:i=>x(i.target.value)}),6!==h.length?(0,r.jsx)("button",{type:"submit",className:d.Z.disabledBtn,children:l("fill_the_form")}):(0,r.jsx)("button",{type:"submit",className:d.Z.fillbtn,onClick:()=>{h&&(_(!0),p((i=>!i)),A())},children:l("fill_the_form")}),(0,r.jsx)("h6",{className:d.Z.tips,children:l("get_registration_code")}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:d.Z.tip,children:l("registration_step_1")})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:d.Z.tip,children:l("registration_step_2")})}),(0,r.jsx)("li",{children:(0,r.jsx)("p",{className:d.Z.tip,children:l("registration_step_3")})})]})]})]}),"Staff"===n&&(0,r.jsxs)("div",{className:d.Z.applications,children:[(0,r.jsx)("div",{className:d.Z.top,children:l("existing_student")}),(0,r.jsxs)("div",{className:d.Z.content2,children:[(0,r.jsx)("h6",{children:l("enter_code")}),(0,r.jsx)("input",{type:"text",pattern:"[a-zA-Z0-9]+",maxlength:"6",value:h,onChange:i=>x(i.target.value)}),6!==h.length?(0,r.jsx)("button",{type:"submit",className:d.Z.disabledBtn,children:l("fill_the_form")}):(0,r.jsx)("button",{type:"submit",className:d.Z.fillbtn,onClick:()=>{h&&(_(!0),p((i=>!i)),A())},children:(0,r.jsxs)("span",{children:[" ",l("fill_the_form")]})})]})]}),s&&(0,r.jsx)(m.Z,{}),(0,r.jsx)(f.Ch,{msg:j.msg,run:j.run,setRun:()=>g({msg:"",run:!1}),postiton:"bottom",type:"error"})]})};function x(i){let{text:e,img:n,setJoin:t,option:o,setIndex:l}=i;return(0,r.jsxs)("div",{className:d.Z.singleOption,onClick:()=>{t(o),l(3)},children:[(0,r.jsx)("img",{src:n,alt:""}),(0,r.jsx)("h6",{children:e})]})}const j=function(i){let{setJoin:e,setIndex:n}=i;const{t:t}=(0,a.$G)();return(0,r.jsxs)("div",{className:d.Z.applications,children:[(0,r.jsx)("div",{className:d.Z.top,children:t("existing_student_and_join")}),(0,r.jsxs)("div",{className:d.Z.content,children:[(0,r.jsx)("div",{className:d.Z.contenttop,children:(0,r.jsx)("p",{children:t("to_join_or_appy")})}),(0,r.jsxs)("div",{className:d.Z.contentBottom,children:[(0,r.jsx)(x,{text:t("as_staff_"),option:"Staff",img:"/images/members/staff.svg",setJoin:e,setIndex:n}),(0,r.jsx)(x,{text:t("as_student_"),img:"/images/members/student.svg",setJoin:e,setIndex:n,option:"Student"})]})]})]})};var g=n(68825),S=n(66328),N=n(56112),A=n(69721);const y=function(i){var e,n,o,a,s,c,p,v,h,x,j,y,Z,b,C,P,I,F,J,D,k,E,w,R;let{setIndex:T,applicantUserName:B}=i;const U=(0,l.v9)((i=>i.admissionChange)),[M,G]=((0,l.v9)((i=>i.idChange.id)),(0,t.useState)(!1)),[O,Q]=(0,t.useState)(""),[q,z]=(0,t.useState)({msg:"",run:!1}),[H,K]=(0,t.useState)(!1),V=(0,u.s0)(),{oneApplicationDetail:W,oneApplicationDetailRefetch:Y}=(0,_.mf)({apid:null===U||void 0===U?void 0:U.studentAppId,skip:!(null!==U&&void 0!==U&&U.studentAppId)}),[X]=(0,_.G_)();(0,t.useEffect)((()=>{null!==U&&void 0!==U&&U.studentAppId&&Y()}),[null===U||void 0===U?void 0:U.studentAppId,Y]);const L=()=>{G((i=>!i))};return(0,r.jsxs)("div",{className:d.Z.applications,children:[(0,r.jsxs)("div",{className:d.Z.top1,children:[(0,r.jsx)("img",{src:"/images/left-nav-icon.svg",alt:"",onClick:()=>T(1)}),(0,r.jsx)("h6",{children:null===W||void 0===W||null===(e=W.oneApply)||void 0===e?void 0:e.applicationName}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("div",{className:d.Z.content,children:[(0,r.jsxs)("div",{className:d.Z.contentColumn,children:[(0,r.jsx)("p",{children:(0,g.t)("department")}),(0,r.jsx)("h6",{children:null===W||void 0===W||null===(n=W.oneApply)||void 0===n||null===(o=n.applicationDepartment)||void 0===o?void 0:o.dName})]}),(0,r.jsx)("div",{className:d.Z.contentRow,children:(0,r.jsxs)("button",{className:d.Z.admission_fees_btn,title:"See All Fees",onClick:null!==W&&void 0!==W&&null!==(a=W.oneApply)&&void 0!==a&&null!==(s=a.direct_linked_structure)&&void 0!==s&&s._id?()=>{var i,e;return(i=>{Q(i)})(null===W||void 0===W||null===(i=W.oneApply)||void 0===i||null===(e=i.direct_linked_structure)||void 0===e?void 0:e._id)}:L,children:[(0,r.jsx)("div",{children:(0,g.t)("admission_fees")}),(0,r.jsx)("img",{src:"/images/forward-right-icon.svg",alt:"next step"})]})}),(0,r.jsxs)("div",{className:d.Z.contentRow,children:[null!==W&&void 0!==W&&null!==(c=W.oneApply)&&void 0!==c&&c.applicationStartDate?(0,r.jsxs)("div",{className:d.Z.contentColumn,children:[(0,r.jsx)("p",{children:(0,g.t)("starting_date")}),(0,r.jsx)("h6",{children:null===W||void 0===W||null===(p=W.oneApply)||void 0===p?void 0:p.applicationStartDate})]}):"",null!==W&&void 0!==W&&null!==(v=W.oneApply)&&void 0!==v&&v.applicationEndDate?(0,r.jsxs)("div",{className:d.Z.contentColumn,children:[(0,r.jsx)("p",{children:(0,g.t)("last_date")}),(0,r.jsx)("h6",{children:null===W||void 0===W||null===(h=W.oneApply)||void 0===h?void 0:h.applicationEndDate})]}):""]}),(0,r.jsxs)("div",{className:d.Z.contentRow,children:[null!==W&&void 0!==W&&null!==(x=W.oneApply)&&void 0!==x&&x.applicationSeats?(0,r.jsxs)("div",{className:d.Z.contentColumn,children:[(0,r.jsx)("p",{children:(0,g.t)("available_sets")}),(0,r.jsx)("h6",{children:null===W||void 0===W||null===(j=W.oneApply)||void 0===j?void 0:j.applicationSeats})]}):"",null!==W&&void 0!==W&&null!==(y=W.oneApply)&&void 0!==y&&y.applicationPhoto?(0,r.jsx)("div",{className:d.Z.contentColumn,children:(0,r.jsx)("a",{title:"Download File",href:"".concat(A.zQ,"/").concat(null===W||void 0===W||null===(Z=W.oneApply)||void 0===Z?void 0:Z.applicationPhoto),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("button",{className:d.Z.admission_fees_btn,children:(0,r.jsx)("div",{children:(0,g.t)("application_brochure")})})})}):""]}),null!==W&&void 0!==W&&null!==(b=W.oneApply)&&void 0!==b&&b.applicationAbout?(0,r.jsxs)("div",{className:d.Z.contentColumn,children:[(0,r.jsx)("p",{children:(0,g.t)("application_info")}),null===W||void 0===W||null===(C=W.oneApply)||void 0===C||null===(P=C.applicationAbout)||void 0===P||null===(I=P.split("\n"))||void 0===I?void 0:I.map(((i,e)=>(0,r.jsx)("h6",{children:i},e)))]}):"",(0,r.jsx)("div",{className:d.Z.applyBtn,onClick:()=>{var i,e,n,t,o,l,a,s,d;V("/q/joining",{state:{formAs:"STUDENT",openAs:"Direct Admisison"===(null===W||void 0===W||null===(i=W.oneApply)||void 0===i?void 0:i.application_type)?"ADMISSION_DIRECT_APPLY":"ADMISSION_APPLY",appId:null===W||void 0===W||null===(e=W.oneApply)||void 0===e?void 0:e._id,urlUsername:B,first_install:"Direct Admisison"===(null===W||void 0===W||null===(n=W.oneApply)||void 0===n?void 0:n.application_type)?null===W||void 0===W||null===(t=W.oneApply)||void 0===t||null===(o=t.direct_linked_structure)||void 0===o||null===(l=o.one_installments)||void 0===l?void 0:l.fees:0,applicationName:null===W||void 0===W||null===(a=W.oneApply)||void 0===a?void 0:a.applicationName,departmentId:null===W||void 0===W||null===(s=W.oneApply)||void 0===s||null===(d=s.applicationDepartment)||void 0===d?void 0:d._id,whichFormShow:"DEPARTMENT"}})},children:(0,g.t)("apply_to_fill_application_form")}),M&&(0,r.jsx)(N.Z,{onClose:L,departmentId:null!==(F=null===W||void 0===W||null===(J=W.oneApply)||void 0===J||null===(D=J.applicationDepartment)||void 0===D?void 0:D._id)&&void 0!==F?F:"",classMasterId:null!==(k=null===W||void 0===W||null===(E=W.oneApply)||void 0===E?void 0:E.applicationMaster)&&void 0!==k?k:"",batchId:null===W||void 0===W||null===(w=W.oneApply)||void 0===w||null===(R=w.applicationBatch)||void 0===R?void 0:R._id,onSelectedStrucutre:i=>{Q(i),L()},asOpen:"STUDENT_VIEW_STRUCTURE"}),O&&(0,r.jsx)(S.Z,{structureId:O,setStructureId:()=>{Q(""),L()},viewAs:"STUDENT"}),(0,r.jsx)(f.Ch,{msg:q.msg,run:q.run,setRun:()=>z({msg:"",run:!1}),postiton:"bottom",type:"error"})]}),H&&(0,r.jsx)(m.Z,{})]})};const Z=function(i){let{applicantUserName:e}=i;const[n,o]=(0,t.useState)(1),[l,a]=(0,t.useState)("");return(0,r.jsxs)("div",{className:d.Z.joiningForm,children:[1===n&&(0,r.jsx)(p,{setIndex:o}),2===n&&(0,r.jsx)(j,{setIndex:o,setJoin:a}),3===n&&(0,r.jsx)(h,{join:l,applicantUserName:e}),5===n&&(0,r.jsx)(y,{setIndex:o,applicantUserName:e})]})}},98094:(i,e,n)=>{n.d(e,{Z:()=>l});n(72791);var t=n(55136),o=n(80184);const l=i=>{let{customStyle:e}=i;return(0,o.jsx)("hr",{className:t.Z.universal_hr,style:{...e}})}},49327:(i,e,n)=>{n.d(e,{Z:()=>t});const t={joiningForm:"JoiningForm_joiningForm__68mEY",applications:"JoiningForm_applications__bff+a",top:"JoiningForm_top__tQnYn",top1:"JoiningForm_top1__e8Vfb",content:"JoiningForm_content__+RWaa",contentRow:"JoiningForm_contentRow__TpvSK",contentColumn:"JoiningForm_contentColumn__p86fj",contentBottom:"JoiningForm_contentBottom__MoDyr",contenttop:"JoiningForm_contenttop__Chet2",btn:"JoiningForm_btn__aOjLy",cardsContainer:"JoiningForm_cardsContainer__IIQ02",card:"JoiningForm_card__jSpur",cardRow:"JoiningForm_cardRow__g-JmQ",singleOption:"JoiningForm_singleOption__Z5fqo",content2:"JoiningForm_content2__6CnCr",fillbtn:"JoiningForm_fillbtn__T+NaF",disabledBtn:"JoiningForm_disabledBtn__ayQpg",tips:"JoiningForm_tips__zkrQ2",tip:"JoiningForm_tip__ytwT7",applyBtn:"JoiningForm_applyBtn__1M3zh",inpput:"JoiningForm_inpput__D1PBE",admission_fees_btn:"JoiningForm_admission_fees_btn__lNpiY",admission_fees_btn_active:"JoiningForm_admission_fees_btn_active__IIoHH",card_row_container:"JoiningForm_card_row_container__RRJK1",hostel_direct:"JoiningForm_hostel_direct__O3rym"}},55136:(i,e,n)=>{n.d(e,{Z:()=>t});const t={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu"}}}]);
//# sourceMappingURL=75076.4bd1d5e6.chunk.js.map