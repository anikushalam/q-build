"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[82202],{63687:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(59393),i=l(80184);const s=e=>{let{customStyle:t,children:l}=e;return(0,i.jsx)("div",{className:n.Z.user_member_container_wrapper,style:t,children:l})}},82202:(e,t,l)=>{l.r(t),l.d(t,{default:()=>L});var n=l(43504),i=l(63687),s=l(16871),a=l(90904),d=l(98967),o=l(63162),c=l(21348),r=l(56959),u=l(39230),v=l(98684),m=l(93638),_=l(72791),h=l(43317),x=l(55336),f=l(11468),p=l(48293),g=l(31022),j=l(95240),N=l(4007),b=l(38986),Z=l(84959),y=l(99183),I=l(80184);const A=e=>{let{onClose:t,aid:l,fid:n,instituteId:i}=e;const{t:d}=(0,u.$G)(),o=(0,s.TH)(),r=(0,s.UO)(),A=(0,s.s0)(),[S,C]=(0,_.useState)(1),[F,k]=(0,_.useState)(!1),[O,T]=(0,_.useState)(""),[P,M]=(0,_.useState)({alarm_mode:"APP_NOTIFICATION",content:"",m_title:"",m_doc:""}),[G,E]=(0,_.useState)(""),[z,D]=(0,_.useState)([]),[w,L]=(0,_.useState)([]),[q,B]=(0,_.useState)({depart:"",batch:"",master:"",batch_status:"",all_depart:""}),[K]=(0,Z.FL)(),[U]=(0,h.zi)(),[J]=(0,h.v2)();return(0,I.jsxs)(I.Fragment,{children:[1===S?(0,I.jsx)(g.Z,{applyFilter:q,setApplyFilter:B,onClose:t,fid:n,onActionEventFire:()=>{var e,t,n,i,s,a,d,o;l&&(k((e=>!e)),U({aid:l,pendingData:{depart:null!==(e=null===q||void 0===q||null===(t=q.depart)||void 0===t?void 0:t._id)&&void 0!==e?e:"",batch:null!==(n=null===q||void 0===q||null===(i=q.batch)||void 0===i?void 0:i._id)&&void 0!==n?n:"",master:null!==q&&void 0!==q&&null!==(s=q.master)&&void 0!==s&&s._id?[null===q||void 0===q||null===(a=q.master)||void 0===a?void 0:a._id]:[],batch_status:null!==(d=null===q||void 0===q?void 0:q.batch_status)&&void 0!==d?d:"",all_depart:null!==(o=null===q||void 0===q?void 0:q.all_depart)&&void 0!==o?o:""}}).then((e=>{var t;D(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.all_student),k((e=>!e)),C(2)})).catch({}))},instituteId:i}):2===S?(0,I.jsx)(j.Z,{alreadySelected:w,studentList:z,onAction:e=>{L(e),C("")},onClose:()=>C(1)}):(0,I.jsx)(p.Z,{children:(0,I.jsxs)("div",{className:N.Z.modal_container,children:[(0,I.jsx)(c.Z,{children:(0,I.jsxs)("div",{className:N.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:N.Z.modal_container_header,children:(0,I.jsx)("h6",{children:d("Notify_about_Outstanding_Dues")})}),(0,I.jsx)("img",{src:"".concat(v.J7,"/close.svg"),alt:"close icon",onClick:()=>C(2)})]})}),(0,I.jsx)(a.Z,{}),(0,I.jsxs)(c.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsxs)("section",{className:N.Z.notify_container,onClick:()=>M((e=>({...e,alarm_mode:"APP_NOTIFICATION"}))),children:[(0,I.jsx)("img",{src:"APP_NOTIFICATION"===P.alarm_mode?"".concat(v.Fk,"/radio-blue.svg"):"".concat(v.Fk,"/radio-grey.svg"),alt:"icon"}),(0,I.jsxs)("div",{className:N.Z.notify_text,children:[(0,I.jsx)("h6",{children:d("Notify_with_In_app_Notification")}),(0,I.jsx)("p",{children:d("Notify_with_In_app_Notification_note")})]})]}),(0,I.jsxs)("section",{className:N.Z.notify_container,onClick:()=>M((e=>({...e,alarm_mode:"EMAIL_NOTIFICATION"}))),children:[(0,I.jsx)("img",{src:"EMAIL_NOTIFICATION"===P.alarm_mode?"".concat(v.Fk,"/radio-blue.svg"):"".concat(v.Fk,"/radio-grey.svg"),alt:"icon"}),(0,I.jsxs)("div",{className:N.Z.notify_text,children:[(0,I.jsx)("h6",{children:d("Notify_On_Email_and_SMS")}),(0,I.jsx)("p",{children:d("Notify_On_Email_and_SMS_note")})]})]}),"EMAIL_NOTIFICATION"===P.alarm_mode&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.Z,{label:d("title_label"),placeholder:d("title_label_placeholder"),name:"m_title",value:P.m_title,type:"text",onChange:e=>M((t=>({...t,m_title:e.target.value}))),errorShow:O.m_title}),(0,I.jsx)(f.Z,{label:d("email_content"),placeholder:d("email_content_placeholder"),name:"content",value:P.content,type:"text",onChange:e=>M((t=>({...t,content:e.target.value})))}),(0,I.jsx)(b.Z,{label:d("document"),name:"document",value:G,onChange:e=>{if(e.target.files[0]){k((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),K({fileUpload:t}).then((t=>{var l,n,i;E({name:null===(l=e.target.files[0])||void 0===l?void 0:l.name,key:null===(n=t.data)||void 0===n?void 0:n.imageKey,type:null===(i=e.target.files[0])||void 0===i?void 0:i.type}),M((e=>{var l;return{...e,m_doc:null===(l=t.data)||void 0===l?void 0:l.imageKey}})),k((e=>!e))})).catch({})}}})]}),(0,I.jsx)(m.Z,{label:"confirm",onAction:()=>{let e=(0,y.l)(P,["content","m_doc"]);var n,i,s,a,d,c,u,v,m,_;(0,y.x)(e)?l&&P.alarm_mode&&(null===w||void 0===w?void 0:w.length)>0&&(k((e=>!e)),J({aid:l,alarm_mode:P.alarm_mode,reminderData:{all_arr:w,depart:null!==(n=null===q||void 0===q||null===(i=q.depart)||void 0===i?void 0:i._id)&&void 0!==n?n:"",batch:null!==(s=null===q||void 0===q||null===(a=q.batch)||void 0===a?void 0:a._id)&&void 0!==s?s:"",master:null!==q&&void 0!==q&&null!==(d=q.master)&&void 0!==d&&d._id?[null===q||void 0===q||null===(c=q.master)||void 0===c?void 0:c._id]:[],batch_status:null!==(u=null===q||void 0===q?void 0:q.batch_status)&&void 0!==u?u:"",all_depart:null!==(v=null===q||void 0===q?void 0:q.all_depart)&&void 0!==v?v:"",title:null!==(m=P.m_title)&&void 0!==m?m:"",doc:null!==(_=P.m_doc)&&void 0!==_?_:null,content:P.content}}).then((()=>{var e;k((e=>!e)),t();let l="Institute"===(null===(e=o.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(r.username,"/institute/member/finance?type=reminder-message"):"/q/".concat(r.username,"/member/staff/finance?type=reminder-message");A(l,{state:o.state})})).catch({})):T(e)}})]})]})}),F&&(0,I.jsx)(x.Z,{})]})},S=e=>{let{aid:t,fid:l,instituteId:i}=e;const{t:h}=(0,u.$G)(),[x]=(0,n.lr)(),f=(0,s.TH)(),p=(0,s.UO)(),g=(0,s.s0)(),[j,N]=(0,_.useState)(!1),b=(0,_.useCallback)((()=>{var e;let t="Institute"===(null===(e=f.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(p.username,"/institute/member/finance?type=admission-statistics"):"/q/".concat(p.username,"/member/staff/finance?type=admission-statistics");g(t,{state:f.state})}),[g,p,f.state]),Z=()=>{N((e=>!e))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.Z,{children:(0,I.jsxs)("div",{className:r.Z.fm_header_container,children:[(0,I.jsx)("h6",{children:h("pending_fees")}),(0,I.jsxs)("div",{className:r.Z.fm_search,children:[(0,I.jsx)("img",{src:"".concat(v.J7,"/history.svg"),alt:"history icon",onClick:()=>{var e;let t="Institute"===(null===(e=f.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(p.username,"/institute/member/finance?type=reminder-message"):"/q/".concat(p.username,"/member/staff/finance?type=reminder-message");g(t,{state:f.state})}}),(0,I.jsx)(m.Z,{label:"outstanding_reminder",customStyle:{margin:"0",padding:"0.4rem 1rem",width:"fit-content"},onAction:Z}),(0,I.jsx)(m.Z,{label:"fees_statitics",onAction:b,customStyle:{width:"fit-content",margin:"0",padding:"0.4rem 1rem"}})]})]})}),(0,I.jsx)(a.Z,{}),(0,I.jsx)(d.Z,{children:C.map((e=>{var t,l;return(0,I.jsx)(o.Z,{tab:e,isLink:!0,isActive:null===(t=e.groupIs)||void 0===t?void 0:t.includes(x.get("n")),parentState:f.state,url:"Institute"===(null===(l=f.state)||void 0===l?void 0:l.urlOffSet)?"/q/".concat(p.username,"/institute/member/finance?type=admission-fee").concat(e.urlKey):"/q/".concat(p.username,"/member/staff/finance?type=admission-fee").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,I.jsx)(a.Z,{customStyleBorder:{marginTop:"0"}}),j&&(0,I.jsx)(A,{onClose:Z,aid:t,fid:l,instituteId:i})]})},C=[{label:"all_students",id:"student",urlKey:"",groupIs:["",null]},{label:"os_fees",id:"outstanding",urlKey:"&n=outstanding",groupIs:["outstanding"]},{label:"applicable_os",id:"applicable",urlKey:"&n=applicable",groupIs:["applicable"]}];var F=l(85303),k=l(23441),O=l(91427),T=l(57588),P=l(2651),M=l(1669),G=l(16483),E=l(1095);const z=e=>{var t,l,n,i,a;let{student:d,is_applicable:o}=e;const{t:c}=(0,u.$G)(),r=(0,s.UO)(),m=(0,s.s0)();return(0,I.jsxs)("div",{className:G.Z.apf_container,onClick:()=>{m("/q/".concat(r.username,"/member/student/admission/profile"),{state:{sid:null===d||void 0===d?void 0:d._id,viewAs:"ADMISSION_ADMIN",collectAccess:"ADMISSION_ADMIN",govtAccess:"Other",cancelAccess:!1,editStructureControl:"authorized",editGovtNumberContorl:"authorized",editInstallmentControl:"authorized",editGovtInstallmentControl:"authorized"}})},title:"View Profile",children:[(0,I.jsxs)("div",{className:G.Z.apf_container_inner,children:[(0,I.jsx)("img",{alt:"Student Avatar",src:null!==d&&void 0!==d&&d.studentProfilePhoto?"".concat(E.yI,"/").concat(null===d||void 0===d?void 0:d.studentProfilePhoto):"".concat(v.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,I.jsxs)("div",{className:G.Z.apfci_text,children:[(0,I.jsx)("h6",{children:"".concat(null!==(t=d.studentFirstName)&&void 0!==t?t:""," ").concat(d.studentMiddleName?d.studentMiddleName:""," ").concat(null!==(l=d.studentLastName)&&void 0!==l?l:"")}),(0,I.jsxs)("p",{children:[c("gr_no"),null!==(n=null===d||void 0===d?void 0:d.studentGRNO)&&void 0!==n?n:"",null!==d&&void 0!==d&&null!==(i=d.department)&&void 0!==i&&i.dName?", ".concat(null===d||void 0===d||null===(a=d.department)||void 0===a?void 0:a.dName):""]})]})]}),(0,I.jsxs)("div",{className:G.Z.apfci_text,children:[o?(0,I.jsxs)("h6",{children:[c("rs_only")," ",null===d||void 0===d?void 0:d.applicable_fees_pending]}):(0,I.jsxs)("h6",{children:[c("rs_only")," ",null===d||void 0===d?void 0:d.admissionRemainFeeCount]}),(0,I.jsx)("p",{children:c("pending_fees")})]})]})},D=e=>{var t,l,n;let{aid:i}=e;const{t:s}=(0,u.$G)(),[a,d]=(0,_.useState)(""),[o,c]=(0,_.useState)(1),[m,f]=(0,_.useState)(!0),[p,g]=(0,k.YD)({skip:a}),{admissionPendingFees:j,admissionPendingFeesLoading:N}=(0,h.VZ)({data:{aid:i,page:o,limit:10,search:a,flow:"All_Pending_Fees_Query"},skip:!i});(0,_.useEffect)((()=>{g&&m&&c((e=>e+1))}),[g,m]),(0,_.useEffect)((()=>{var e;if(null!==j&&void 0!==j&&null!==(e=j.list)&&void 0!==e&&e.length){var t;let e=(0,O.f)(null===j||void 0===j||null===(t=j.list)||void 0===t?void 0:t.length);f((()=>e))}}),[null===j||void 0===j?void 0:j.list]);const b=(0,_.useCallback)((0,T.J)((e=>{c((()=>1)),d(e)}),1500),[]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:r.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,I.jsx)("section",{className:r.Z.fm_search_full_container,children:(0,I.jsxs)("div",{className:r.Z.fm_search_full_container_inner,children:[(0,I.jsx)("img",{className:r.Z.fm_search_full_icon,alt:"search icon",src:"".concat(v.dB,"/navbar-search.svg")}),(0,I.jsx)("input",{type:"text",placeholder:s("search"),onChange:e=>{e.target.value?b(e.target.value):(c((()=>1)),d(""))},name:"search"})]})})}),null===j||void 0===j||null===(t=j.list)||void 0===t?void 0:t.map(((e,t)=>{var l;return(null===j||void 0===j||null===(l=j.list)||void 0===l?void 0:l.length)===t+1?(0,I.jsx)("div",{ref:p,children:(0,I.jsx)(z,{student:e})},null===e||void 0===e?void 0:e._id):(0,I.jsx)(z,{student:e},null===e||void 0===e?void 0:e._id)})),N?a?(0,I.jsx)(x.Z,{}):(0,I.jsx)(M.Z,{}):a?0===(null===j||void 0===j||null===(l=j.list)||void 0===l?void 0:l.length)&&(0,I.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found related this search."}):0===(null===j||void 0===j||null===(n=j.list)||void 0===n?void 0:n.length)&&(0,I.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found."})]})},w=e=>{var t,l,n;let{aid:i}=e;const{t:s}=(0,u.$G)(),[a,d]=(0,_.useState)(""),[o,c]=(0,_.useState)(1),[m,f]=(0,_.useState)(!0),[p,g]=(0,k.YD)({skip:a}),{admissionPendingFees:j,admissionPendingFeesLoading:N}=(0,h.VZ)({data:{aid:i,page:o,limit:10,search:a,flow:"Applicable_Fees_Query"},skip:!i});(0,_.useEffect)((()=>{g&&m&&c((e=>e+1))}),[g,m]),(0,_.useEffect)((()=>{var e;if(null!==j&&void 0!==j&&null!==(e=j.list)&&void 0!==e&&e.length){var t;let e=(0,O.f)(null===j||void 0===j||null===(t=j.list)||void 0===t?void 0:t.length);f((()=>e))}}),[null===j||void 0===j?void 0:j.list]);const b=(0,_.useCallback)((0,T.J)((e=>{c((()=>1)),d(e)}),1500),[]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:r.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,I.jsx)("section",{className:r.Z.fm_search_full_container,children:(0,I.jsxs)("div",{className:r.Z.fm_search_full_container_inner,children:[(0,I.jsx)("img",{className:r.Z.fm_search_full_icon,alt:"search icon",src:"".concat(v.dB,"/navbar-search.svg")}),(0,I.jsx)("input",{type:"text",placeholder:s("search"),onChange:e=>{e.target.value?b(e.target.value):(c((()=>1)),d(""))}})]})})}),null===j||void 0===j||null===(t=j.list)||void 0===t?void 0:t.map(((e,t)=>{var l;return(null===j||void 0===j||null===(l=j.list)||void 0===l?void 0:l.length)===t+1?(0,I.jsx)("div",{ref:p,children:(0,I.jsx)(z,{student:e,is_applicable:!0})},null===e||void 0===e?void 0:e._id):(0,I.jsx)(z,{student:e,is_applicable:!0},null===e||void 0===e?void 0:e._id)})),N?a?(0,I.jsx)(x.Z,{}):(0,I.jsx)(M.Z,{}):a?0===(null===j||void 0===j||null===(l=j.list)||void 0===l?void 0:l.length)&&(0,I.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found related this search."}):0===(null===j||void 0===j||null===(n=j.list)||void 0===n?void 0:n.length)&&(0,I.jsx)(P.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found."})]})},L=e=>{let{instituteId:t,studentAlias:l,aid:s,fid:a}=e;const[d]=(0,n.lr)();return(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(S,{aid:s,fid:a,instituteId:t}),d.get("n")?"outstanding"===d.get("n")?(0,I.jsx)(c.Z,{children:(0,I.jsx)(D,{aid:s})}):"applicable"===d.get("n")?(0,I.jsx)(c.Z,{children:(0,I.jsx)(w,{aid:s})}):null:(0,I.jsx)(F.default,{instituteId:t,studentAlias:l,invalidateAccess:"unAuthorized",allStudentControl:q})]})},q={collectAccess:"ADMISSION_ADMIN",govtAccess:"Other",cancelAccess:!1,editStructureControl:"authorized",editGovtNumberContorl:"authorized",editInstallmentControl:"authorized",editGovtInstallmentControl:"authorized"}},85303:(e,t,l)=>{l.r(t),l.d(t,{default:()=>P});var n=l(63687),i=l(21348),s=l(72791),a=l(39230),d=l(23441),o=l(56959),c=l(90904),r=l(98684),u=l(57588),v=l(91427),m=l(6758);const _="FinanceAllStudent_student_table__Y3uXE",h="FinanceAllStudent_student_table_header__4fuiU",x="FinanceAllStudent_student_table_header_label__4x6eY",f="FinanceAllStudent_student_table_content_card__3KWaE",p="FinanceAllStudent_student_table_profile__QUIFN",g="FinanceAllStudent_student_table_header_name__x4ZNJ",j="FinanceAllStudent_student_table_header_label_text__lny-H",N="FinanceAllStudent_student_table_contact__f4eB5",b="FinanceAllStudent_student_table_contact_email__dV19L",Z="FinanceAllStudent_student_table_contact_number__r7HNK";var y=l(80184);const I=e=>{let{studentAlias:t}=e;const{t:l}=(0,a.$G)();return(0,y.jsx)("div",{className:_,children:(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)("p",{className:x,style:{flex:"1"},children:null!==t&&void 0!==t?t:l("gr_no")}),(0,y.jsx)("p",{className:x,style:{flex:"3"},children:l("name")}),(0,y.jsx)("p",{className:x,style:{flex:"2"},children:l("contact_number")}),(0,y.jsx)("p",{className:x,style:{flex:"1"},children:l("applicable_outs")}),(0,y.jsx)("p",{className:x,style:{flex:"0.7"},children:l("govt_oustanding")})]})})};var A=l(1095),S=l(16871),C=l(43504);const F=e=>{var t,l,n,i,s,a,d,o,u;let{student:v,messageId:m,headId:_,instituteId:h,allStudentControl:I}=e;const F=(0,S.UO)(),k=(0,S.TH)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(C.rU,{to:"/q/".concat(F.username,"/member/student/admission/profile"),state:{...k.state,sid:null===v||void 0===v?void 0:v._id,messageId:m,headId:_,instituteId:h,collectAccess:null===I||void 0===I?void 0:I.collectAccess,govtAccess:null===I||void 0===I?void 0:I.govtAccess,cancelAccess:null===I||void 0===I?void 0:I.cancelAccess,editStructureControl:null===I||void 0===I?void 0:I.editStructureControl,editGovtNumberContorl:null===I||void 0===I?void 0:I.editGovtNumberContorl,editInstallmentControl:null===I||void 0===I?void 0:I.editInstallmentControl,editGovtInstallmentControl:null===I||void 0===I?void 0:I.editGovtInstallmentControl},allStudentControl:!0,children:[(0,y.jsxs)("div",{className:f,style:{cursor:"pointer"},children:[(0,y.jsx)("p",{className:x,style:{flex:"1"},children:null!==(t=null===v||void 0===v?void 0:v.studentGRNO)&&void 0!==t?t:""}),(0,y.jsxs)("div",{className:p,style:{flex:"3"},children:[(0,y.jsx)("img",{src:null!==v&&void 0!==v&&v.studentProfilePhoto?"".concat(A.yI,"/").concat(null===v||void 0===v?void 0:v.studentProfilePhoto):"".concat(r.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:g,children:["".concat(null!==(l=null===v||void 0===v?void 0:v.studentFirstName)&&void 0!==l?l:""," ").concat(null!==(n=null===v||void 0===v?void 0:v.studentMiddleName)&&void 0!==n?n:""," ").concat(null!==(i=null===v||void 0===v?void 0:v.studentLastName)&&void 0!==i?i:""),"100"===(null===v||void 0===v?void 0:v.profile_percentage)||100===(null===v||void 0===v?void 0:v.profile_percentage)?(0,y.jsx)("img",{src:"".concat(r.Fk,"/complete.svg"),loading:"lazy",alt:"avatar",style:{marginLeft:"0.6rem",height:"1rem"}}):null]}),(0,y.jsx)("p",{className:j,children:null!==(s=null===v||void 0===v||null===(a=v.studentClass)||void 0===a?void 0:a.classTitle)&&void 0!==s?s:""})]})]}),(0,y.jsxs)("div",{className:x,style:{flex:"2"},children:[(0,y.jsxs)("div",{className:N,children:[(0,y.jsx)("img",{src:"".concat(r.Fk,"/gender.svg"),alt:"gender icon"}),(0,y.jsx)("p",{className:b,children:null===v||void 0===v?void 0:v.studentGender})]}),(0,y.jsxs)("div",{className:N,style:{marginTop:"0.4rem"},children:[(0,y.jsx)("img",{src:"".concat(r.Fk,"/phone.svg"),alt:"phone icon"}),(0,y.jsx)("p",{className:Z,children:null!==v&&void 0!==v&&v.user.userPhoneNumber?null===v||void 0===v?void 0:v.user.userPhoneNumber:null!==(d=null===v||void 0===v?void 0:v.user.userEmail)&&void 0!==d?d:""})]})]}),(0,y.jsx)("p",{className:x,style:{flex:"1",textAlign:"right"},children:null!==(o=null===v||void 0===v?void 0:v.applicable_fees_pending)&&void 0!==o?o:0}),(0,y.jsx)("p",{className:x,style:{flex:"0.7",textAlign:"right"},children:null!==(u=null===v||void 0===v?void 0:v.government_fees_pending)&&void 0!==u?u:0})]}),(0,y.jsx)(c.Z,{customStyleBorder:{margin:"0"}})]})})};var k=l(55336),O=l(1669),T=l(2651);const P=e=>{var t,l,_,h,x;let{instituteId:f,studentAlias:p,headId:g,messageId:j,invalidateAccess:N,allStudentControl:b}=e;const{t:Z}=(0,a.$G)(),[A,S]=(0,s.useState)(""),[C,P]=(0,s.useState)(1),[G,E]=(0,s.useState)(!0),[z,D]=(0,d.YD)({skip:A}),{instituteAllStudent:w,instituteAllStudentLoading:L}=(0,m.Cp)({data:{id:f,page:C,limit:10,search:A},skip:!f});(0,s.useEffect)((()=>{D&&G&&P((e=>e+1))}),[D,G]),(0,s.useEffect)((()=>{if(null!==w&&void 0!==w&&w.list){var e;let t=(0,v.f)(null===w||void 0===w||null===(e=w.list)||void 0===e?void 0:e.length);E((()=>t))}}),[null===w||void 0===w?void 0:w.list]);const q=(0,s.useCallback)((0,u.J)((e=>{P((()=>1)),S(e)}),1500),[]),B=e=>{e.target.value?L||q(e.target.value):(P((()=>1)),S(""))};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(n.Z,{customStyle:{border:M[N]?"none":"0.5px solid #cacaca"},children:[M[N]?(0,y.jsx)(i.Z,{children:(0,y.jsx)("div",{className:o.Z.fm_search_full,children:(0,y.jsx)("section",{className:o.Z.fm_search_full_container,children:(0,y.jsxs)("div",{className:o.Z.fm_search_full_container_inner,children:[(0,y.jsx)("img",{className:o.Z.fm_search_full_icon,alt:"search icon",src:"".concat(r.dB,"/navbar-search.svg")}),(0,y.jsx)("input",{type:"text",placeholder:Z("search"),onChange:B,disabled:!(A||(null===w||void 0===w||null===(t=w.list)||void 0===t?void 0:t.length)>0)})]})})})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsxs)("div",{className:o.Z.fm_header_container,children:[(0,y.jsx)("h6",{children:Z("all_students")}),(0,y.jsx)("div",{className:o.Z.fm_both_filter,children:(0,y.jsx)("div",{className:o.Z.fm_search,children:(0,y.jsx)("section",{className:o.Z.fm_search_container,children:(0,y.jsxs)("div",{className:o.Z.fm_search_container_inner,children:[(0,y.jsx)("img",{className:o.Z.fm_search_icon,alt:"search icon",src:"".concat(r.dB,"/navbar-search.svg")}),(0,y.jsx)("input",{type:"text",placeholder:Z("search"),onChange:B,style:{minWidth:"300px"},disabled:!(A||(null===w||void 0===w||null===(l=w.list)||void 0===l?void 0:l.length)>0)})]})})})})]})}),(0,y.jsx)(c.Z,{})]}),(0,y.jsx)(i.Z,{children:(0,y.jsx)(I,{studentAlias:p})}),(0,y.jsx)(c.Z,{}),(0,y.jsxs)(i.Z,{children:[null===w||void 0===w||null===(_=w.list)||void 0===_?void 0:_.map(((e,t)=>{var l;return(null===w||void 0===w||null===(l=w.list)||void 0===l?void 0:l.length)===t+1?(0,y.jsx)("div",{ref:z,children:(0,y.jsx)(F,{student:e,instituteId:f,messageId:j,headId:g,allStudentControl:b})},null===e||void 0===e?void 0:e._id):(0,y.jsx)(F,{student:e,instituteId:f,messageId:j,headId:g,allStudentControl:b},null===e||void 0===e?void 0:e._id)})),L?A?(0,y.jsx)(k.Z,{}):(0,y.jsx)(O.Z,{}):A?0===(null===w||void 0===w||null===(h=w.list)||void 0===h?void 0:h.length)&&(0,y.jsx)(T.Z,{title:"No student found related this search."}):0===(null===w||void 0===w||null===(x=w.list)||void 0===x?void 0:x.length)&&(0,y.jsx)(T.Z,{title:"No students added in institute."})]})]})})},M={unAuthorized:!0,govt:!0}},16483:(e,t,l)=>{l.d(t,{Z:()=>n});const n={document_card:"AdmissionManager_document_card__OWvp9",document_card_text:"AdmissionManager_document_card_text__aokEI",menu_icon:"AdmissionManager_menu_icon__n7SJY",apf_container:"AdmissionManager_apf_container__NmQ63",apf_container_inner:"AdmissionManager_apf_container_inner__tUadZ",apfci_text:"AdmissionManager_apfci_text__pDEev"}}}]);
//# sourceMappingURL=82202.77b51432.chunk.js.map