"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[91872],{38986:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(72791),i=n(52245),a=n(39230),s=n(1095),o=n(80184);const d=e=>{let{label:t,name:n,value:d,onChange:r,errorShow:c,disabled:_,customFormFileContainer:u,customFormFileLabel:m,customFormFile:v,type:h,multiple:f}=e;const{t:p}=(0,a.$G)(),x=(0,l.useCallback)((()=>{const e=window.open("".concat(s.yI,"/").concat(null===d||void 0===d?void 0:d.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}),[null===d||void 0===d?void 0:d.key]);return(0,o.jsxs)("div",{className:i.Z.form_input_container,style:{...u},children:[t&&(0,o.jsxs)("label",{className:i.Z.form_input_label,style:m,children:[t,c?(0,o.jsxs)("span",{className:i.Z.form_input_label_error,children:["* ",p("form_require_label")]}):null]}),(0,o.jsxs)("div",{className:i.Z.form_file_container,style:v,children:[(0,o.jsx)("label",{className:d?"".concat(i.Z.form_file_choose," ").concat(i.Z.form_file_choose_active):i.Z.form_file_choose,htmlFor:n,children:p(""!==d?"file_choosen":"choose_file")}),(0,o.jsx)("label",{className:i.Z.form_file_choosen,onClick:x,children:""!==d?null!==d&&void 0!==d&&d.name?null===d||void 0===d?void 0:d.name:p("view"):p("no_file_chosen")})]}),(0,o.jsx)("input",{type:"file",multiple:!!f,accept:h||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:r,disabled:_})]})}},11468:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(39230),i=n(52245),a=n(80184);const s=e=>{var t;return e?null===e||void 0===e||null===(t=e.split("\n"))||void 0===t?void 0:t.length:2},o=e=>{let{label:t,name:n,type:o,value:d,onChange:r,placeholder:c,errorShow:_,disabled:u,customFormInputContainer:m,customFormInputLabel:v,customFormInput:h}=e;const{t:f}=(0,l.$G)();return(0,a.jsxs)("div",{className:i.Z.form_input_container,style:m,children:[t&&(0,a.jsxs)("label",{className:i.Z.form_input_label,htmlFor:n,style:v,children:[t,_&&(0,a.jsxs)("span",{className:i.Z.form_input_label_error,children:["* ",f("form_require_label")]})]}),(0,a.jsx)("textarea",{className:i.Z.form_textarea_input,type:o,value:d,onChange:r,name:n,placeholder:c,rows:s(d),disabled:u,style:h?{...h,"--textarea-height":"".concat(20*s(d),"px")}:{"--textarea-height":"".concat(20*s(d),"px")}})]})}},63687:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var l=n(59393),i=n(80184);const a=e=>{let{customStyle:t,children:n}=e;return(0,i.jsx)("div",{className:l.Z.user_member_container_wrapper,style:t,children:n})}},82202:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(43504),i=n(63687),a=n(16871),s=n(90904),o=n(98967),d=n(63162),r=n(21348),c=n(56959),_=n(39230),u=n(98684),m=n(93638),v=n(72791),h=n(43317),f=n(55336),p=n(11468),x=n(38857),g=n(31022),j=n(95240),I=n(4007),y=n(38986),N=n(84959),b=n(99183),Z=n(80184);const S=e=>{let{onClose:t,aid:n,fid:l,instituteId:i}=e;const{t:o}=(0,_.$G)(),d=(0,a.TH)(),c=(0,a.UO)(),S=(0,a.s0)(),[A,F]=(0,v.useState)(1),[C,P]=(0,v.useState)(!1),[k,O]=(0,v.useState)(""),[w,U]=(0,v.useState)({alarm_mode:"APP_NOTIFICATION",content:"",m_title:"",m_doc:""}),[T,E]=(0,v.useState)(""),[M,G]=(0,v.useState)([]),[z,D]=(0,v.useState)([]),[q,K]=(0,v.useState)({depart:"",batch:"",master:"",batch_status:"",all_depart:""}),[L]=(0,N.FL)(),[B]=(0,h.zi)(),[Y]=(0,h.v2)();return(0,Z.jsxs)(Z.Fragment,{children:[1===A?(0,Z.jsx)(g.Z,{applyFilter:q,setApplyFilter:K,onClose:t,fid:l,onActionEventFire:()=>{var e,t,l,i,a,s,o,d;n&&(P((e=>!e)),B({aid:n,pendingData:{depart:null!==(e=null===q||void 0===q||null===(t=q.depart)||void 0===t?void 0:t._id)&&void 0!==e?e:"",batch:null!==(l=null===q||void 0===q||null===(i=q.batch)||void 0===i?void 0:i._id)&&void 0!==l?l:"",master:null!==q&&void 0!==q&&null!==(a=q.master)&&void 0!==a&&a._id?[null===q||void 0===q||null===(s=q.master)||void 0===s?void 0:s._id]:[],batch_status:null!==(o=null===q||void 0===q?void 0:q.batch_status)&&void 0!==o?o:"",all_depart:null!==(d=null===q||void 0===q?void 0:q.all_depart)&&void 0!==d?d:""}}).then((e=>{var t;G(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.all_student),P((e=>!e)),F(2)})).catch({}))},instituteId:i}):2===A?(0,Z.jsx)(j.Z,{alreadySelected:z,studentList:M,onAction:e=>{D(e),F("")},onClose:()=>F(1)}):(0,Z.jsx)(x.Z,{children:(0,Z.jsxs)("div",{className:I.Z.modal_container,children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)("div",{className:I.Z.modal_container_outer_header,children:[(0,Z.jsx)("div",{className:I.Z.modal_container_header,children:(0,Z.jsx)("h6",{children:o("Notify_about_Outstanding_Dues")})}),(0,Z.jsx)("img",{src:"".concat(u.J7,"/close.svg"),alt:"close icon",onClick:()=>F(2)})]})}),(0,Z.jsx)(s.Z,{}),(0,Z.jsxs)(r.Z,{customStyle:{paddingTop:"0"},children:[(0,Z.jsxs)("section",{className:I.Z.notify_container,onClick:()=>U((e=>({...e,alarm_mode:"APP_NOTIFICATION"}))),children:[(0,Z.jsx)("img",{src:"APP_NOTIFICATION"===w.alarm_mode?"".concat(u.Fk,"/radio-blue.svg"):"".concat(u.Fk,"/radio-grey.svg"),alt:"icon"}),(0,Z.jsxs)("div",{className:I.Z.notify_text,children:[(0,Z.jsx)("h6",{children:o("Notify_with_In_app_Notification")}),(0,Z.jsx)("p",{children:o("Notify_with_In_app_Notification_note")})]})]}),(0,Z.jsxs)("section",{className:I.Z.notify_container,onClick:()=>U((e=>({...e,alarm_mode:"EMAIL_NOTIFICATION"}))),children:[(0,Z.jsx)("img",{src:"EMAIL_NOTIFICATION"===w.alarm_mode?"".concat(u.Fk,"/radio-blue.svg"):"".concat(u.Fk,"/radio-grey.svg"),alt:"icon"}),(0,Z.jsxs)("div",{className:I.Z.notify_text,children:[(0,Z.jsx)("h6",{children:o("Notify_On_Email_and_SMS")}),(0,Z.jsx)("p",{children:o("Notify_On_Email_and_SMS_note")})]})]}),"EMAIL_NOTIFICATION"===w.alarm_mode&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.Z,{label:o("title_label"),placeholder:o("title_label_placeholder"),name:"m_title",value:w.m_title,type:"text",onChange:e=>U((t=>({...t,m_title:e.target.value}))),errorShow:k.m_title}),(0,Z.jsx)(p.Z,{label:o("email_content"),placeholder:o("email_content_placeholder"),name:"content",value:w.content,type:"text",onChange:e=>U((t=>({...t,content:e.target.value})))}),(0,Z.jsx)(y.Z,{label:o("document"),name:"document",value:T,onChange:e=>{if(e.target.files[0]){P((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),L({fileUpload:t}).then((t=>{var n,l,i;E({name:null===(n=e.target.files[0])||void 0===n?void 0:n.name,key:null===(l=t.data)||void 0===l?void 0:l.imageKey,type:null===(i=e.target.files[0])||void 0===i?void 0:i.type}),U((e=>{var n;return{...e,m_doc:null===(n=t.data)||void 0===n?void 0:n.imageKey}})),P((e=>!e))})).catch({})}}})]}),(0,Z.jsx)(m.Z,{label:"confirm",onAction:()=>{let e=(0,b.l)(w,["content","m_doc"]);var l,i,a,s,o,r,_,u,m,v;(0,b.x)(e)?n&&w.alarm_mode&&(null===z||void 0===z?void 0:z.length)>0&&(P((e=>!e)),Y({aid:n,alarm_mode:w.alarm_mode,reminderData:{all_arr:z,depart:null!==(l=null===q||void 0===q||null===(i=q.depart)||void 0===i?void 0:i._id)&&void 0!==l?l:"",batch:null!==(a=null===q||void 0===q||null===(s=q.batch)||void 0===s?void 0:s._id)&&void 0!==a?a:"",master:null!==q&&void 0!==q&&null!==(o=q.master)&&void 0!==o&&o._id?[null===q||void 0===q||null===(r=q.master)||void 0===r?void 0:r._id]:[],batch_status:null!==(_=null===q||void 0===q?void 0:q.batch_status)&&void 0!==_?_:"",all_depart:null!==(u=null===q||void 0===q?void 0:q.all_depart)&&void 0!==u?u:"",title:null!==(m=w.m_title)&&void 0!==m?m:"",doc:null!==(v=w.m_doc)&&void 0!==v?v:null,content:w.content}}).then((()=>{var e;P((e=>!e)),t();let n="Institute"===(null===(e=d.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(c.username,"/institute/member/finance?type=reminder-message"):"/q/".concat(c.username,"/member/staff/finance?type=reminder-message");S(n,{state:d.state})})).catch({})):O(e)}})]})]})}),C&&(0,Z.jsx)(f.Z,{})]})};var A=n(21625),F=n(44226),C=n(6758);const P=e=>{let{aid:t,fid:n,instituteId:i}=e;const{t:h}=(0,_.$G)(),[p]=(0,l.lr)(),x=(0,a.TH)(),g=(0,a.UO)(),j=(0,a.s0)(),[I,y]=(0,v.useState)(!1),[N,b]=(0,v.useState)(!1),[P]=(0,A.FL)(),[O]=(0,C.mP)(),w=(0,v.useCallback)((()=>{var e;let t="Institute"===(null===(e=x.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(g.username,"/institute/member/finance?type=admission-statistics"):"/q/".concat(g.username,"/member/staff/finance?type=admission-statistics");j(t,{state:x.state})}),[j,g,x.state]),U=()=>{y((e=>!e))};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)("div",{className:c.Z.fm_header_container,children:[(0,Z.jsx)("h6",{children:h("pending_fees")}),(0,Z.jsxs)("div",{className:c.Z.fm_search,children:[(0,Z.jsx)("img",{src:"".concat(u.J7,"/history.svg"),alt:"history icon",onClick:()=>{var e;let t="Institute"===(null===(e=x.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(g.username,"/institute/member/finance?type=reminder-message"):"/q/".concat(g.username,"/member/staff/finance?type=reminder-message");j(t,{state:x.state})}}),(0,Z.jsx)(F.Z,{onExcelFileUpload:e=>{if(e.target.files[0]){b((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),P({fileUpload:t}).then((e=>{var t,l;null!==(t=e.data)&&void 0!==t&&t.imageKey?O({fid:n,excelFile:{excel_file:null===(l=e.data)||void 0===l?void 0:l.imageKey}}).then((()=>{b((e=>!e))})).catch({}):b((e=>!e))})).catch({})}},label:"fees_mapping"}),(0,Z.jsx)(m.Z,{label:"outstanding_reminder",customStyle:{margin:"0",padding:"0.4rem 1rem",width:"fit-content"},onAction:U}),(0,Z.jsx)(m.Z,{label:"fees_statitics",onAction:w,customStyle:{width:"fit-content",margin:"0",padding:"0.4rem 1rem"}})]})]})}),(0,Z.jsx)(s.Z,{}),(0,Z.jsx)(o.Z,{children:k.map((e=>{var t,n;return(0,Z.jsx)(d.Z,{tab:e,isLink:!0,isActive:null===(t=e.groupIs)||void 0===t?void 0:t.includes(p.get("n")),parentState:x.state,url:"Institute"===(null===(n=x.state)||void 0===n?void 0:n.urlOffSet)?"/q/".concat(g.username,"/institute/member/finance?type=admission-fee").concat(e.urlKey):"/q/".concat(g.username,"/member/staff/finance?type=admission-fee").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,Z.jsx)(s.Z,{customStyleBorder:{marginTop:"0"}}),I&&(0,Z.jsx)(S,{onClose:U,aid:t,fid:n,instituteId:i}),N&&(0,Z.jsx)(f.Z,{})]})},k=[{label:"all_students",id:"student",urlKey:"",groupIs:["",null]},{label:"os_fees",id:"outstanding",urlKey:"&n=outstanding",groupIs:["outstanding"]},{label:"applicable_os",id:"applicable",urlKey:"&n=applicable",groupIs:["applicable"]}];var O=n(85303),w=n(23441),U=n(91427),T=n(2651),E=n(1669),M=n(16483),G=n(1095);const z=e=>{var t,n,l,i,s;let{student:o,is_applicable:d,instituteId:r}=e;const{t:c}=(0,_.$G)(),m=(0,a.UO)(),v=(0,a.s0)();return(0,Z.jsxs)("div",{className:M.Z.apf_container,onClick:()=>{v("/q/".concat(m.username,"/member/student/admission/profile"),{state:{sid:null===o||void 0===o?void 0:o._id,viewAs:"ADMISSION_ADMIN",collectAccess:"ADMISSION_ADMIN",govtAccess:"Other",cancelAccess:!1,editStructureControl:"authorized",editGovtNumberContorl:"authorized",editInstallmentControl:"authorized",editGovtInstallmentControl:"authorized",isSearchEnable:"authorized",instituteId:r}})},title:"View Profile",children:[(0,Z.jsxs)("div",{className:M.Z.apf_container_inner,children:[(0,Z.jsx)("img",{alt:"Student Avatar",src:null!==o&&void 0!==o&&o.studentProfilePhoto?"".concat(G.yI,"/").concat(null===o||void 0===o?void 0:o.studentProfilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,Z.jsxs)("div",{className:M.Z.apfci_text,children:[(0,Z.jsx)("h6",{children:"".concat(null!==(t=o.studentFirstName)&&void 0!==t?t:""," ").concat(o.studentMiddleName?o.studentMiddleName:""," ").concat(null!==(n=o.studentLastName)&&void 0!==n?n:"")}),(0,Z.jsxs)("p",{children:[c("gr_no"),null!==(l=null===o||void 0===o?void 0:o.studentGRNO)&&void 0!==l?l:"",null!==o&&void 0!==o&&null!==(i=o.department)&&void 0!==i&&i.dName?", ".concat(null===o||void 0===o||null===(s=o.department)||void 0===s?void 0:s.dName):""]})]})]}),(0,Z.jsxs)("div",{className:M.Z.apfci_text,children:[d?(0,Z.jsxs)("h6",{children:[c("rs_only")," ",null===o||void 0===o?void 0:o.applicable_fees_pending]}):(0,Z.jsxs)("h6",{children:[c("rs_only")," ",null===o||void 0===o?void 0:o.admissionRemainFeeCount]}),(0,Z.jsx)("p",{children:c("pending_fees")})]})]})},D=e=>{var t,n,l;let{aid:i,instituteId:a}=e;const{t:s}=(0,_.$G)(),[o,d]=(0,v.useState)(""),[r,m]=(0,v.useState)(""),[p,x]=(0,v.useState)(1),[g,j]=(0,v.useState)(!0),[I,y]=(0,w.YD)({skip:o}),{admissionPendingFees:N,admissionPendingFeesLoading:b}=(0,h.VZ)({data:{aid:i,page:p,limit:10,search:o,flow:"All_Pending_Fees_Query"},skip:!i});(0,v.useEffect)((()=>{y&&g&&x((e=>e+1))}),[y,g]),(0,v.useEffect)((()=>{var e;if(null!==N&&void 0!==N&&null!==(e=N.list)&&void 0!==e&&e.length){var t;let e=(0,U.f)(null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.length);j((()=>e))}}),[null===N||void 0===N?void 0:N.list]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:c.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,Z.jsx)("section",{className:c.Z.fm_search_full_container,children:(0,Z.jsxs)("div",{className:c.Z.fm_search_full_container_inner,children:[(0,Z.jsx)("img",{className:c.Z.fm_search_full_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,Z.jsx)("input",{type:"text",placeholder:s("search"),onChange:e=>{var t;!b&&(null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.length)>=0&&m(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(x((()=>1)),d(r))},value:r,name:"search"})]})})}),null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.map(((e,t)=>{var n;return(null===N||void 0===N||null===(n=N.list)||void 0===n?void 0:n.length)===t+1?(0,Z.jsx)("div",{ref:I,children:(0,Z.jsx)(z,{student:e,instituteId:a})},null===e||void 0===e?void 0:e._id):(0,Z.jsx)(z,{student:e,instituteId:a},null===e||void 0===e?void 0:e._id)})),b?o?(0,Z.jsx)(f.Z,{}):(0,Z.jsx)(E.Z,{}):o?0===(null===N||void 0===N||null===(n=N.list)||void 0===n?void 0:n.length)&&(0,Z.jsx)(T.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found related this search."}):0===(null===N||void 0===N||null===(l=N.list)||void 0===l?void 0:l.length)&&(0,Z.jsx)(T.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found."})]})},q=e=>{var t,n,l;let{aid:i,instituteId:a}=e;const{t:s}=(0,_.$G)(),[o,d]=(0,v.useState)(""),[r,m]=(0,v.useState)(""),[p,x]=(0,v.useState)(1),[g,j]=(0,v.useState)(!0),[I,y]=(0,w.YD)({skip:o}),{admissionPendingFees:N,admissionPendingFeesLoading:b}=(0,h.VZ)({data:{aid:i,page:p,limit:10,search:o,flow:"Applicable_Fees_Query"},skip:!i});(0,v.useEffect)((()=>{y&&g&&x((e=>e+1))}),[y,g]),(0,v.useEffect)((()=>{var e;if(null!==N&&void 0!==N&&null!==(e=N.list)&&void 0!==e&&e.length){var t;let e=(0,U.f)(null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.length);j((()=>e))}}),[null===N||void 0===N?void 0:N.list]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:c.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:(0,Z.jsx)("section",{className:c.Z.fm_search_full_container,children:(0,Z.jsxs)("div",{className:c.Z.fm_search_full_container_inner,children:[(0,Z.jsx)("img",{className:c.Z.fm_search_full_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,Z.jsx)("input",{type:"text",placeholder:s("search"),onChange:e=>{var t;!b&&(null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.length)>=0&&m(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(x((()=>1)),d(r))},value:r})]})})}),null===N||void 0===N||null===(t=N.list)||void 0===t?void 0:t.map(((e,t)=>{var n;return(null===N||void 0===N||null===(n=N.list)||void 0===n?void 0:n.length)===t+1?(0,Z.jsx)("div",{ref:I,children:(0,Z.jsx)(z,{student:e,is_applicable:!0,instituteId:a})},null===e||void 0===e?void 0:e._id):(0,Z.jsx)(z,{student:e,is_applicable:!0,instituteId:a},null===e||void 0===e?void 0:e._id)})),b?o?(0,Z.jsx)(f.Z,{}):(0,Z.jsx)(E.Z,{}):o?0===(null===N||void 0===N||null===(n=N.list)||void 0===n?void 0:n.length)&&(0,Z.jsx)(T.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found related this search."}):0===(null===N||void 0===N||null===(l=N.list)||void 0===l?void 0:l.length)&&(0,Z.jsx)(T.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No student found."})]})},K=e=>{let{instituteId:t,studentAlias:n,aid:a,fid:s}=e;const[o]=(0,l.lr)();return(0,Z.jsxs)(i.default,{children:[(0,Z.jsx)(P,{aid:a,fid:s,instituteId:t}),o.get("n")?"outstanding"===o.get("n")?(0,Z.jsx)(r.Z,{children:(0,Z.jsx)(D,{aid:a,instituteId:t})}):"applicable"===o.get("n")?(0,Z.jsx)(r.Z,{children:(0,Z.jsx)(q,{aid:a,instituteId:t})}):null:(0,Z.jsx)(O.default,{instituteId:t,studentAlias:n,invalidateAccess:"unAuthorized",allStudentControl:L})]})},L={collectAccess:"ADMISSION_ADMIN",govtAccess:"Other",cancelAccess:!1,editStructureControl:"authorized",editGovtNumberContorl:"authorized",editInstallmentControl:"authorized",editGovtInstallmentControl:"authorized",isSearchEnable:"authorized"}},85303:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var l=n(63687),i=n(21348),a=n(72791),s=n(39230),o=n(23441),d=n(56959),r=n(90904),c=n(98684),_=n(91427),u=n(6758);const m="FinanceAllStudent_student_table__Y3uXE",v="FinanceAllStudent_student_table_header__4fuiU",h="FinanceAllStudent_student_table_header_label__4x6eY",f="FinanceAllStudent_student_table_content_card__3KWaE",p="FinanceAllStudent_student_table_profile__QUIFN",x="FinanceAllStudent_student_table_header_name__x4ZNJ",g="FinanceAllStudent_student_table_header_label_text__lny-H",j="FinanceAllStudent_student_table_contact__f4eB5",I="FinanceAllStudent_student_table_contact_email__dV19L",y="FinanceAllStudent_student_table_contact_number__r7HNK";var N=n(80184);const b=e=>{let{studentAlias:t}=e;const{t:n}=(0,s.$G)();return(0,N.jsx)("div",{className:m,children:(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)("p",{className:h,style:{flex:"1"},children:null!==t&&void 0!==t?t:n("gr_no")}),(0,N.jsx)("p",{className:h,style:{flex:"3"},children:n("name")}),(0,N.jsx)("p",{className:h,style:{flex:"2"},children:n("contact_number")}),(0,N.jsx)("p",{className:h,style:{flex:"1"},children:n("applicable_outs")}),(0,N.jsx)("p",{className:h,style:{flex:"0.7"},children:n("govt_oustanding")})]})})};var Z=n(1095),S=n(16871),A=n(43504);const F=e=>{var t,n,l,i,a,s,o,d,_,u;let{student:m,messageId:v,headId:b,instituteId:F,allStudentControl:C}=e;const P=(0,S.UO)(),k=(0,S.TH)();return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(A.rU,{to:"/q/".concat(P.username,"/member/student/admission/profile"),state:{...k.state,sid:null===m||void 0===m?void 0:m._id,messageId:v,headId:b,instituteId:F,collectAccess:null===C||void 0===C?void 0:C.collectAccess,govtAccess:null===C||void 0===C?void 0:C.govtAccess,cancelAccess:null===C||void 0===C?void 0:C.cancelAccess,editStructureControl:null===C||void 0===C?void 0:C.editStructureControl,editGovtNumberContorl:null===C||void 0===C?void 0:C.editGovtNumberContorl,editInstallmentControl:null===C||void 0===C?void 0:C.editInstallmentControl,editGovtInstallmentControl:null===C||void 0===C?void 0:C.editGovtInstallmentControl,viewAs:"Institute"===(null===(t=k.state)||void 0===t?void 0:t.urlOffSet)?"INSTITUTE":null},children:[(0,N.jsxs)("div",{className:f,style:{cursor:"pointer"},children:[(0,N.jsx)("p",{className:h,style:{flex:"1"},children:null!==(n=null===m||void 0===m?void 0:m.studentGRNO)&&void 0!==n?n:""}),(0,N.jsxs)("div",{className:p,style:{flex:"3"},children:[(0,N.jsx)("img",{src:null!==m&&void 0!==m&&m.studentProfilePhoto?"".concat(Z.yI,"/").concat(null===m||void 0===m?void 0:m.studentProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("p",{className:x,children:["".concat(null!==(l=null===m||void 0===m?void 0:m.studentFirstName)&&void 0!==l?l:""," ").concat(null!==(i=null===m||void 0===m?void 0:m.studentMiddleName)&&void 0!==i?i:""," ").concat(null!==(a=null===m||void 0===m?void 0:m.studentLastName)&&void 0!==a?a:""),"100"===(null===m||void 0===m?void 0:m.profile_percentage)||100===(null===m||void 0===m?void 0:m.profile_percentage)?(0,N.jsx)("img",{src:"".concat(c.Fk,"/complete.svg"),loading:"lazy",alt:"avatar",style:{marginLeft:"0.6rem",height:"1rem"}}):null]}),(0,N.jsx)("p",{className:g,children:null!==(s=null===m||void 0===m||null===(o=m.studentClass)||void 0===o?void 0:o.classTitle)&&void 0!==s?s:""})]})]}),(0,N.jsxs)("div",{className:h,style:{flex:"2"},children:[(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("img",{src:"".concat(c.Fk,"/gender.svg"),alt:"gender icon"}),(0,N.jsx)("p",{className:I,children:null===m||void 0===m?void 0:m.studentGender})]}),(0,N.jsxs)("div",{className:j,style:{marginTop:"0.4rem"},children:[(0,N.jsx)("img",{src:"".concat(c.Fk,"/phone.svg"),alt:"phone icon"}),(0,N.jsx)("p",{className:y,children:null!==m&&void 0!==m&&m.user.userPhoneNumber?null===m||void 0===m?void 0:m.user.userPhoneNumber:null!==(d=null===m||void 0===m?void 0:m.user.userEmail)&&void 0!==d?d:""})]})]}),(0,N.jsx)("p",{className:h,style:{flex:"1",textAlign:"right"},children:null!==(_=null===m||void 0===m?void 0:m.applicable_fees_pending)&&void 0!==_?_:0}),(0,N.jsx)("p",{className:h,style:{flex:"0.7",textAlign:"right"},children:null!==(u=null===m||void 0===m?void 0:m.government_fees_pending)&&void 0!==u?u:0})]}),(0,N.jsx)(r.Z,{customStyleBorder:{margin:"0"}})]})})};var C=n(55336),P=n(1669),k=n(2651);const O=e=>{var t,n,m;let{instituteId:v,studentAlias:h,headId:f,messageId:p,invalidateAccess:x,allStudentControl:g}=e;const{t:j}=(0,s.$G)(),[I,y]=(0,a.useState)(""),[Z,S]=(0,a.useState)(""),[A,O]=(0,a.useState)(1),[U,T]=(0,a.useState)(!0),[E,M]=(0,o.YD)({skip:I}),{instituteAllStudent:G,instituteAllStudentLoading:z}=(0,u.Cp)({data:{id:v,page:A,limit:10,search:I},skip:!v});(0,a.useEffect)((()=>{M&&U&&O((e=>e+1))}),[M,U]),(0,a.useEffect)((()=>{if(null!==G&&void 0!==G&&G.list){var e;let t=(0,_.f)(null===G||void 0===G||null===(e=G.list)||void 0===e?void 0:e.length);T((()=>t))}}),[null===G||void 0===G?void 0:G.list]);const D=e=>{var t;!z&&(null===G||void 0===G||null===(t=G.list)||void 0===t?void 0:t.length)>=0&&S(e.target.value)},q=e=>{"Enter"===e.key&&(O((()=>1)),y(Z))};return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(l.default,{customStyle:{border:w[x]?"none":"0.5px solid #cacaca"},children:[w[x]?(0,N.jsx)(i.Z,{children:(0,N.jsx)("div",{className:d.Z.fm_search_full,children:(0,N.jsx)("section",{className:d.Z.fm_search_full_container,children:(0,N.jsxs)("div",{className:d.Z.fm_search_full_container_inner,children:[(0,N.jsx)("img",{className:d.Z.fm_search_full_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:j("search"),onChange:D,onKeyUp:q,value:Z})]})})})}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.Z,{children:(0,N.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,N.jsx)("h6",{children:j("all_students")}),(0,N.jsx)("div",{className:d.Z.fm_both_filter,children:(0,N.jsx)("div",{className:d.Z.fm_search,children:(0,N.jsx)("section",{className:d.Z.fm_search_container,children:(0,N.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,N.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:j("search"),onChange:D,style:{minWidth:"300px"},onKeyUp:q,value:Z})]})})})})]})}),(0,N.jsx)(r.Z,{})]}),(0,N.jsx)(i.Z,{children:(0,N.jsx)(b,{studentAlias:h})}),(0,N.jsx)(r.Z,{}),(0,N.jsxs)(i.Z,{children:[null===G||void 0===G||null===(t=G.list)||void 0===t?void 0:t.map(((e,t)=>{var n;return(null===G||void 0===G||null===(n=G.list)||void 0===n?void 0:n.length)===t+1?(0,N.jsx)("div",{ref:E,children:(0,N.jsx)(F,{student:e,instituteId:v,messageId:p,headId:f,allStudentControl:g})},null===e||void 0===e?void 0:e._id):(0,N.jsx)(F,{student:e,instituteId:v,messageId:p,headId:f,allStudentControl:g},null===e||void 0===e?void 0:e._id)})),z?I?(0,N.jsx)(C.Z,{}):(0,N.jsx)(N.Fragment,{children:1===A?(0,N.jsx)(C.Z,{}):(0,N.jsx)(P.Z,{})}):I?0===(null===G||void 0===G||null===(n=G.list)||void 0===n?void 0:n.length)&&(0,N.jsx)(k.Z,{title:"No student found related this search."}):0===(null===G||void 0===G||null===(m=G.list)||void 0===m?void 0:m.length)&&(0,N.jsx)(k.Z,{title:"No students added in institute."})]})]})})},w={unAuthorized:!0,govt:!0}},16483:(e,t,n)=>{n.d(t,{Z:()=>l});const l={document_card:"AdmissionManager_document_card__OWvp9",document_card_text:"AdmissionManager_document_card_text__aokEI",menu_icon:"AdmissionManager_menu_icon__n7SJY",apf_container:"AdmissionManager_apf_container__NmQ63",apf_container_inner:"AdmissionManager_apf_container_inner__tUadZ",apfci_text:"AdmissionManager_apfci_text__pDEev"}},16925:(e,t,n)=>{n.d(t,{Z:()=>l});const l={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}},49806:(e,t,n)=>{n.d(t,{Z:()=>l});const l={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}}}]);
//# sourceMappingURL=91872.10d70b1f.chunk.js.map