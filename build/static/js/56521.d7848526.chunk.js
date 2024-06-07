"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[56521],{56521:(e,t,s)=>{s.d(t,{Z:()=>M});var n=s(72791),i=s(55136),a=s(16871),d=s(43504),l=s(95048),o=s(39230),r=s(98684),c=s(60021),u=s(36547),v=s(97892),_=s.n(v),m=s(80184);const h=e=>{let{sid:t}=e;const{t:s}=(0,o.$G)(),{studentProfileAttendanceStatsDayWise:n}=(0,c.qY)({data:{sid:t,date:_()().format("DD/MM/YYYY")},skip:!t});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:u.Z.spasd_card,children:[(0,m.jsxs)("div",{className:u.Z.spasdc_inner,style:{"--bg-attendance-stats":"rgba(37, 172, 74, 0.12)",marginBottom:"0.2rem"},children:[(0,m.jsx)("p",{children:s("present_today")}),(0,m.jsxs)("p",{children:["Present"===(null===n||void 0===n?void 0:n.attendance_status)?100:0," ","%"]})]}),(0,m.jsxs)("div",{className:u.Z.spasdc_inner,style:{"--bg-attendance-stats":"rgba(238, 56, 51, 0.12)"},children:[(0,m.jsx)("p",{children:s("absent_today")}),(0,m.jsxs)("p",{children:["Absent"===(null===n||void 0===n?void 0:n.attendance_status)?100:0," ","%"]})]})]})})},f=e=>{var t,s,n,i;let{sid:a}=e;const{t:d}=(0,o.$G)(),{studentProfileAttendanceStatsLectureWise:l}=(0,c.WR)({data:{sid:a},skip:!a});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:u.Z.spasd_card,children:[(0,m.jsxs)("div",{className:u.Z.spasdc_inner,style:{"--bg-attendance-stats":"rgba(37, 172, 74, 0.12)",marginBottom:"0.2rem"},children:[(0,m.jsx)("p",{children:d("present")}),(0,m.jsxs)("p",{children:[null!==(t=null===l||void 0===l?void 0:l.presentLecture)&&void 0!==t?t:0," ","lectures"]}),(0,m.jsxs)("p",{children:[null!==(s=null===l||void 0===l?void 0:l.presentPercentage)&&void 0!==s?s:0," %"]})]}),(0,m.jsxs)("div",{className:u.Z.spasdc_inner,style:{"--bg-attendance-stats":"rgba(238, 56, 51, 0.12)"},children:[(0,m.jsx)("p",{children:d("absent")}),(0,m.jsxs)("p",{children:[null!==(n=null===l||void 0===l?void 0:l.absentLecture)&&void 0!==n?n:0," ","lectures"]}),(0,m.jsxs)("p",{children:[null!==(i=null===l||void 0===l?void 0:l.absentPercentage)&&void 0!==i?i:0," %"]})]})]})})},p=e=>{let{sid:t}=e;const{t:s}=(0,o.$G)(),[i,a]=(0,n.useState)(1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:u.Z.spas_heading,children:(0,m.jsx)("h6",{children:s("attendance")})}),(0,m.jsxs)("div",{className:u.Z.spas_container,children:[(0,m.jsxs)("div",{className:u.Z.spasc_inner,onClick:()=>a(1),children:[(0,m.jsx)("p",{children:s("day_wise")}),(0,m.jsx)("img",{src:"".concat(r.Fk,1===i?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u.Z.spasc_inner,onClick:()=>a(2),children:[(0,m.jsx)("p",{children:s("Lecture_wise")}),(0,m.jsx)("img",{src:"".concat(r.Fk,2===i?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]})]}),1===i?(0,m.jsx)(h,{sid:t}):(0,m.jsx)(f,{sid:t})]})},g=e=>{let{studentId:t,openAs:s,editAs:n}=e;const{t:a}=(0,o.$G)();return(0,m.jsx)("div",{className:i.Z.student_attendane_container,style:{right:"STUDENT_SECTION"===s||"ADMISSION_ADMIN"===s?"11%":"INSTITUTE"===n?"10%":"INSTITUTE"===s||"CLASS_CATALOG"===s?"8%":s?"1.6%":"11%"},children:(0,m.jsx)(p,{sid:t})})};var N=s(91007);const S=e=>{var t,s,l,r,c,u,v,_;let{carryParrentState:h,studentId:f}=e;const{t:p}=(0,o.$G)(),g=(0,a.UO)(),{data:S,refetch:A}=(0,N.$J)("".concat(f),{skip:!f});(0,n.useEffect)((()=>{f&&A()}),[f,A]);const x=(e,t,s)=>e+t+s;return(0,m.jsxs)("div",{className:i.Z.admission_fees,children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("h5",{style:{color:"#008000"},children:[p("rs"),"."," ",x((null===S||void 0===S||null===(t=S.student)||void 0===t?void 0:t.studentPaidFeeCount)||0,(null===S||void 0===S||null===(s=S.student)||void 0===s?void 0:s.admissionPaidFeeCount)||0,(null===S||void 0===S||null===(l=S.student)||void 0===l?void 0:l.hostelPaidFeeCount)||0)]}),(0,m.jsx)("h6",{style:{marginBottom:"1.5rem"},children:p("total_fees_paid")}),(0,m.jsxs)("h5",{style:{color:"#121212"},children:[p("rs"),"."," ",x((null===S||void 0===S||null===(r=S.student)||void 0===r?void 0:r.studentRemainingFeeCount)||0,(null===S||void 0===S||null===(c=S.student)||void 0===c?void 0:c.admissionRemainFeeCount)||0,(null===S||void 0===S||null===(u=S.student)||void 0===u?void 0:u.hostelRemainFeeCount)||0)]}),(0,m.jsx)("h6",{children:p("total_outs")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(d.rU,{to:"/q/".concat(g.username,"/student/profile"),state:h,children:(0,m.jsxs)("div",{className:i.Z.card_hold_container,children:[(0,m.jsx)("img",{src:"/images/link-forword-icon.svg",alt:"forword link"}),(0,m.jsx)("h6",{children:p("view_profile")})]})}),(0,m.jsxs)("h5",{style:{color:"#121212",marginTop:"1.5rem"},children:[p("rs"),". ",null!==(v=null===S||void 0===S||null===(_=S.student)||void 0===_?void 0:_.applicable_fees_pending)&&void 0!==v?v:0]}),(0,m.jsx)("h6",{children:p("applicable_outs")})]})]})};var A=s(19206),x=s(6245),I=s(98734),j=s(34314);const C=e=>{var t,s;let{instituteId:d,uniqueGr:l}=e;const{t:r}=(0,o.$G)(),[c,u]=(0,n.useState)(""),[v,_]=(0,n.useState)(!1),h=(0,a.s0)(),f=(0,a.UO)(),p=(0,a.TH)(),g=e=>{u(e)},[N]=(0,x.vB)(),S=e=>{d&&l&&(_((e=>!e)),N({id:d,gr:l,leavingFeedback:{number:l,studentCertificateNo:"",leaving_date:"",bookNo:"",studentUidaiNumber:"",studentPreviousSchool:"",studentLeavingBehaviour:"",studentLeavingStudy:"",studentLeavingReason:"",studentRemark:"",instituteJoinDate:"",instituteLeavingDate:"",leaving_degree:"",leaving_since_date:"",leaving_course_duration:"",elective_subject_one:"",elective_subject_second:"",leaving_project_work:"",leaving_guide_name:""}}).then((t=>{var s;if(_((e=>!e)),"LEAVING"===e)h("/q/".concat(f.username,"/student/certificate/form"),{state:{student:t.data.student,download:t.data.download,instituteId:d,is_leaving:"leaving",staffId:null===(s=p.state)||void 0===s?void 0:s.staffId}});else if("MTC"===e){var n;h("/q/".concat(f.username,"/student/certificate/form"),{state:{student:t.data.student,download:t.data.download,instituteId:d,is_leaving:"MTC",staffId:null===(n=p.state)||void 0===n?void 0:n.staffId}})}else if("MLC"===e){var i;h("/q/".concat(f.username,"/student/certificate/form"),{state:{student:t.data.student,download:t.data.download,instituteId:d,is_leaving:"MLC",staffId:null===(i=p.state)||void 0===i?void 0:i.staffId}})}else{var a;h("/q/".concat(f.username,"/student/certificate/form"),{state:{student:t.data.student,download:t.data.download,instituteId:d,is_leaving:"transfer",staffId:null===(a=p.state)||void 0===a?void 0:a.staffId}})}})).catch({}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:i.Z.certificate_btn_container,children:[(0,m.jsxs)("div",{className:i.Z.cbc_row,children:[(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>g("STUDENT_MESSAGE"),children:r("student_message")}),(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>g("BONAFIDE"),children:r("bonafide")})]}),(0,m.jsxs)("div",{className:i.Z.cbc_row,children:[(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>S("LEAVING"),children:r("leaving")}),(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>S("TRANSFER"),children:r("transfer_certificate")})]}),(0,m.jsxs)("div",{className:i.Z.cbc_row,children:[(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>S("MTC"),children:r("migration_tc")}),(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>S("MLC"),children:r("migration_lc")})]})]}),"BONAFIDE"===c&&(0,m.jsx)(A.Z,{onClose:()=>g(""),uniqueGr:l,instituteId:d}),"STUDENT_MESSAGE"===c&&(0,m.jsx)(j.Z,{onClose:()=>g(""),sendStudentList:null===(t=p.state)||void 0===t?void 0:t.sid,instituteId:d,accessAs:"CERTIFICATE_AUTHORITY",headId:null===(s=p.state)||void 0===s?void 0:s.headId}),v&&(0,m.jsx)(I.Z,{})]})};var y=s(73343),T=s(98472);const b=e=>{var t;let{sid:s}=e;const{t:a}=(0,o.$G)(),[d,l]=(0,n.useState)(!1),[r,c]=(0,n.useState)([]),[u,v]=(0,n.useState)(!1),[_]=(0,y.cl)();return(0,n.useEffect)((()=>{if(u){document.getElementById("csv_download_file").click(),v(!1),l((e=>!e))}}),[u]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:i.Z.certificate_btn_container,children:(0,m.jsx)("button",{className:i.Z.certificate_btn,onClick:()=>{s&&(l(!0),_({studentId:{sid:s}}).then((e=>{c((()=>{var t;return(e=>{var t,s;return[{GRNo:null===e||void 0===e?void 0:e.studentGRNO,Name:(null===e||void 0===e?void 0:e.studentFirstName)+" "+(null===e||void 0===e?void 0:e.studentMiddleName)+" "+(null===e||void 0===e?void 0:e.studentLastName),Gender:null===e||void 0===e?void 0:e.studentGender,MotherName:null!==e&&void 0!==e&&e.studentMotherName?null===e||void 0===e?void 0:e.studentMotherName:"NA",DOB:null!==e&&void 0!==e&&e.studentDOB?null===e||void 0===e?void 0:e.studentDOB:"NA","Blood Group":null!==e&&void 0!==e&&e.student_blood_group?null===e||void 0===e?void 0:e.student_blood_group:"NA","Caste Category":null!==e&&void 0!==e&&e.studentCastCategory?null===e||void 0===e?void 0:e.studentCastCategory:"NA",Religion:null!==e&&void 0!==e&&e.studentReligion?null===e||void 0===e?void 0:e.studentReligion:"NA",BirthPlace:null!==e&&void 0!==e&&e.studentBirthPlace?null===e||void 0===e?void 0:e.studentBirthPlace:"NA",Address:null!==e&&void 0!==e&&e.studentAddress?null===e||void 0===e?void 0:e.studentAddress:"NA",ParentsName:null!==e&&void 0!==e&&e.studentParentsName?null===e||void 0===e?void 0:e.studentParentsName:"NA","Parent's Contact":null!==e&&void 0!==e&&e.studentParentsPhoneNumber?null===e||void 0===e?void 0:e.studentParentsPhoneNumber:"NA",State:null!==e&&void 0!==e&&e.studentState?null===e||void 0===e?void 0:e.studentState:"NA",District:null!==e&&void 0!==e&&e.studentDistrict?null===e||void 0===e?void 0:e.studentDistrict:"NA",Nationality:null!==e&&void 0!==e&&e.studentNationality?null===e||void 0===e?void 0:e.studentNationality:"NA",Class:null===e||void 0===e||null===(t=e.studentClass)||void 0===t?void 0:t.classTitle,Contact:null===e||void 0===e?void 0:e.studentPhoneNumber,Email:null===e||void 0===e?void 0:e.studentEmail,AdmissionDate:null===e||void 0===e||null===(s=e.studentAdmissionDate)||void 0===s?void 0:s.split("T")[0],AadharNumber:null!==e&&void 0!==e&&e.studentAadharNumber?null===e||void 0===e?void 0:e.studentAadharNumber:"NA","Mother Tongue":null!==e&&void 0!==e&&e.studentMTongue?null===e||void 0===e?void 0:e.studentMTongue:"NA",Caste:null!==e&&void 0!==e&&e.studentCast?null===e||void 0===e?void 0:e.studentCast:"NA","Current Address":null!==e&&void 0!==e&&e.studentCurrentAddress?null===e||void 0===e?void 0:e.studentCurrentAddress:"NA","Father Ration Color":null!==e&&void 0!==e&&e.studentFatherRationCardColor?null===e||void 0===e?void 0:e.studentFatherRationCardColor:"NA","Parent's Occupation":null!==e&&void 0!==e&&e.studentParentsOccupation?null===e||void 0===e?void 0:e.studentParentsOccupation:"NA","Parent's Annual Income":null!==e&&void 0!==e&&e.studentParentsAnnualIncom?null===e||void 0===e?void 0:e.studentParentsAnnualIncom:"NA","Previous School":null!==e&&void 0!==e&&e.studentPreviousSchool?null===e||void 0===e?void 0:e.studentPreviousSchool:"NA","Bank Name":null!==e&&void 0!==e&&e.studentBankName?null===e||void 0===e?void 0:e.studentBankName:"NA","Bank Account":null!==e&&void 0!==e&&e.studentBankAccount?null===e||void 0===e?void 0:e.studentBankAccount:"NA","Bank Holder Name":null!==e&&void 0!==e&&e.studentBankAccountHolderName?null===e||void 0===e?void 0:e.studentBankAccountHolderName:"NA","Bank Ifsc":null!==e&&void 0!==e&&e.studentBankIfsc?null===e||void 0===e?void 0:e.studentBankIfsc:"NA"}]})(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.student_card)})),v(!0)})).catch({}))},children:a("id_card")})}),(0,m.jsx)(T.CSVLink,{data:r,filename:"".concat(null===r||void 0===r||null===(t=r[0])||void 0===t?void 0:t.Name,"-id-card"),id:"csv_download_file"}),d&&(0,m.jsx)(I.Z,{})]})};var E=s(36665),k=s(72952),Z=s(33399),L=s(98094),P=s(97655),F=s(73032);const O=e=>{let{uniqueGr:t,onClose:s,studentId:i,onRefetch:a}=e;const{t:d}=(0,o.$G)(),[l,r]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!1),[v]=(0,F.Nt)(),[_,h]=(0,n.useState)({query_content:"",query_gr:null!==t&&void 0!==t?t:""});(0,n.useEffect)((()=>{t&&h((e=>({...e,query_gr:null!==t&&void 0!==t?t:""})))}),[t]);return(0,m.jsxs)(E.Z,{onClose:s,children:[(0,m.jsx)("div",{className:Z.Z.add_category_modal,style:{width:"30rem",minHeight:"10rem",height:"fit-content"},children:(0,m.jsxs)("section",{className:Z.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,m.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:d("update_student_gr")}),(0,m.jsx)(L.Z,{customStyle:{width:"100%",marginTop:"0.7rem",marginBottom:"1rem"}}),(0,m.jsx)(P.Z,{labelText:d("student_gr"),placeholder:d("student_gr_placeholder"),name:"query_gr",value:null===_||void 0===_?void 0:_.query_gr,type:"text",onChange:e=>h((t=>({...t,query_gr:e.target.value}))),errorShow:c.query_gr}),(0,m.jsx)(k.Z,{labelText:d("gr_student_message_label"),placeholder:d("gr_student_message_label_placeholder"),name:"query_content",value:_.query_content,type:"text",onChange:e=>h((t=>({...t,query_content:e.target.value}))),errorShow:c.query_content}),(0,m.jsx)("button",{onClick:()=>{const e=(e=>{const t={};for(let s in e)e[s]||(t[s]="".concat(s," is required!"));return t})(_);let t=!1;for(let s in e)if(s){t=!0;break}t?u(e):(r((e=>!e)),v({sid:i,grNumberContent:_}).then((()=>{a(),r((e=>!e)),s()})).catch({}))},className:Z.Z.fee_middle_confirm_button,style:{marginTop:"4rem"},children:d("update")})]})}),l&&(0,m.jsx)(I.Z,{})]})};var R=s(86109),D=s(69721);const q=["SUBJECT_TEACHER","LEAVING_FORM","FINANCE_MANAGER","ADMISSION_ADMIN_SCHOLARSHIP","VIEW_ADMISSION_PAGE_FEES","INSTITUTE_ADMIN","STUDENT","CERTIFICATE_AUTHORITY","ID_CARD_SECTION"],w=["ADMISSION_ADMIN","FINANCE_MANAGER","CERTIFICATE_AUTHORITY","STUDENT_SECTION","ID_CARD_SECTION","INSTITUTE_ADMIN"],M=e=>{var t,s,r,c,u,v,_,h,f,p,N,A,x,j,y,T,E,k,Z,L;let{dynamicImage:P,indexNumber:F,designation:M,name:B,activeUrl:G,sid:U,viewAs:W,openAs:H,onEdit:Y,grNumber:Q,carryParrentState:z,admissionButton:$,is_hostel_link:V,is_view_profile:J,editAs:K,uniqueGr:X,instituteId:ee,onRefetchStudentApi:te,isGrButtonLock:se,currentDesignation:ne,onStaffInstituteSide:ie}=e;const{t:ae}=(0,o.$G)(),de=(0,a.UO)(),le=(0,a.TH)(),oe=(0,l.v9)((e=>e.idChange.loginProfile)),[re,ce]=(0,n.useState)(!1),[ue,ve]=(0,n.useState)(!1),[_e]=(0,R.OB)(),me=()=>{if("Locked"===se)return null;ce((e=>!e))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:i.Z.staff_profile_photo_container,style:{minHeight:"CERTIFICATE_AUTHORITY"===H?"12rem":"5rem"},children:["ID_CARD_SECTION"===H?(0,m.jsx)("img",{src:P,alt:"staff avatar",className:i.Z.staff_profile_photo_image,style:{cursor:"pointer"},title:"Download profile photo",onClick:()=>{ve(!0),_e({instituteId:U}).then((e=>{var t;window.open("".concat(D.zQ,"/").concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Key),"_blank"),ve(!1)})).catch({})}}):(0,m.jsx)("img",{src:P,alt:"staff avatar",className:i.Z.staff_profile_photo_image}),(0,m.jsxs)("div",{className:i.Z.staff_profile_photo_info,children:[(0,m.jsxs)("h5",{className:i.Z.staff_profile_photo_name,children:[B,"HOSTEL"===J?(0,m.jsx)(d.rU,{to:"/q/".concat(de.username,"/student/profile/"),state:{sid:null!==(t=le.state)&&void 0!==t&&t.sid?null===(s=le.state)||void 0===s?void 0:s.sid:U,viewAs:H,instituteId:null===(r=le.state)||void 0===r?void 0:r.instituteId,collectAccess:null===(c=le.state)||void 0===c?void 0:c.collectAccess},children:(0,m.jsx)("span",{style:{fontSize:"10px",fontWeight:"400",color:"#0000ff"},children:" (".concat(ae("view_profile"),")")})}):V&&(0,m.jsx)(d.rU,{to:"/q/".concat(de.username,"/student/profile/hostel"),state:{sid:null!==(u=le.state)&&void 0!==u&&u.sid?null===(v=le.state)||void 0===v?void 0:v.sid:U,viewAs:H,instituteId:null===(_=le.state)||void 0===_?void 0:_.instituteId,collectAccess:null===(h=le.state)||void 0===h?void 0:h.collectAccess},children:(0,m.jsx)("span",{style:{fontSize:"10px",fontWeight:"400",color:"#0000ff"},children:" (".concat(ae("hostel_profile"),")")})})]}),(0,m.jsx)("p",{className:i.Z.staff_profile_photo_index,children:F}),"student"===G&&(0,m.jsxs)("p",{className:i.Z.staff_profile_photo_index,children:[Q,(null===w||void 0===w?void 0:w.includes(H))&&(0,m.jsx)("span",{style:{fontSize:"12px",fontWeight:"400",color:"Locked"===se?"rgb(177 177 176)":"#0000ff",cursor:"pointer"},onClick:me,children:" (".concat(ae("Locked"===se?"requested":"edit_"),")")})]}),(0,m.jsx)("p",{className:i.Z.staff_profile_photo_index,children:M}),ne&&(0,m.jsx)("p",{className:i.Z.staff_profile_photo_index,children:ne})]}),"student"===G&&"VIEW_ADMISSION_PAGE_FEES"===H?(0,m.jsx)(S,{carryParrentState:z,studentId:null===(f=le.state)||void 0===f?void 0:f.sid}):"student"===G&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.rU,{to:"/q/".concat(de.username,"HOSTEL"===J?"/student/profile/hostel/fees":"/student/profile/admission"),state:{sid:null!==(p=le.state)&&void 0!==p&&p.sid?null===(N=le.state)||void 0===N?void 0:N.sid:U,viewAs:H,isHostel:"HOSTEL"===J?"Hostel":"",instituteId:null===(A=le.state)||void 0===A?void 0:A.instituteId,collectAccess:null===(x=le.state)||void 0===x?void 0:x.collectAccess},children:(0,m.jsxs)("div",{className:i.Z.link_hold_container,style:{right:$?"40%":"35%"},children:[(0,m.jsx)("img",{src:"/images/link-forword-icon.svg",alt:"forword link"}),(0,m.jsx)("h6",{children:ae("admission_fees")})]})})}),"CERTIFICATE_AUTHORITY"===H?(0,m.jsx)(C,{uniqueGr:X,instituteId:ee}):"ID_CARD_SECTION"===H?(0,m.jsx)(b,{sid:null===(j=le.state)||void 0===j?void 0:j.sid}):"student"===G&&(0,m.jsx)(g,{studentId:null===(y=le.state)||void 0===y?void 0:y.sid,openAs:H,editAs:K}),"STAFF"===K?null:"INSTITUTE"===K?(0,m.jsx)(d.rU,{to:"/q/".concat(oe.username,"/edit/").concat(G),state:{openAs:"INSTITUTE_SIDE",sid:null!==(T=le.state)&&void 0!==T&&T.sid?null===(E=le.state)||void 0===E?void 0:E.sid:U},children:(0,m.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:i.Z.staff_profile_photo_edit})}):null!==q&&void 0!==q&&q.includes(H)?"":W?(0,m.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:i.Z.staff_profile_photo_edit,onClick:Y,style:{cursor:"pointer"}}):(0,m.jsx)(m.Fragment,{children:"staff"===G?(0,m.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:i.Z.staff_profile_photo_edit,onClick:ie,style:{cursor:"pointer"}}):(0,m.jsx)(d.rU,{to:"/q/".concat(oe.username,"/edit/").concat(G),state:{openAs:"INSTITUTE_SIDE",sid:null!==(k=le.state)&&void 0!==k&&k.sid?null===(Z=le.state)||void 0===Z?void 0:Z.sid:U},children:(0,m.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:i.Z.staff_profile_photo_edit})})})]}),re&&(0,m.jsx)(O,{onClose:me,uniqueGr:X,studentId:null===(L=le.state)||void 0===L?void 0:L.sid,onRefetch:te}),ue&&(0,m.jsx)(I.Z,{})]})}},86109:(e,t,s)=>{s.d(t,{AR:()=>o,GI:()=>i,OB:()=>l,PY:()=>d,YR:()=>a});var n=s(73343);const i=e=>{const{data:t,refetch:s}=(0,n.ce)();return{staffExportData:t,staffExportDataRefetch:s}},a=e=>{const{data:t,refetch:s}=(0,n.Y7)(e.id,{skip:e.skip});return{insIdCardData:t,insIdCardDataRefetch:s}},d=()=>{const[e]=(0,n.tO)();return[e]},l=()=>{const[e]=(0,n.f7)();return[e]},o=()=>{const[e]=(0,n.Nm)();return[e]}},60021:(e,t,s)=>{s.d(t,{qY:()=>A,WR:()=>x,ST:()=>p,fq:()=>S,J8:()=>N,Eq:()=>g});var n=s(43249);const i=e=>e.query({query:e=>"/attendance/student/stats/".concat(e.id,"/classes/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},transformResponse:(e,t,s)=>null!==s&&void 0!==s&&s.search?{search:!0,list:null===e||void 0===e?void 0:e.cls_list}:{page:null===s||void 0===s?void 0:s.page,list:null===e||void 0===e?void 0:e.cls_list},merge:(e,t)=>{var s;return null!==t&&void 0!==t&&t.search||1===(null===t||void 0===t?void 0:t.page)?t:void(null===e||void 0===e||null===(s=e.list)||void 0===s||s.push(...null===t||void 0===t?void 0:t.list))},forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),a=e=>e.query({query:e=>"/attendance/student/stats/class/".concat(e.cid,"/student/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},transformResponse:(e,t,s)=>null!==s&&void 0!==s&&s.search?{search:!0,list:null===e||void 0===e?void 0:e.students}:{page:null===s||void 0===s?void 0:s.page,list:null===e||void 0===e?void 0:e.students},merge:(e,t)=>{var s;return null!==t&&void 0!==t&&t.search||1===(null===t||void 0===t?void 0:t.page)?t:void(null===e||void 0===e||null===(s=e.list)||void 0===s||s.push(...null===t||void 0===t?void 0:t.list))},forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),d=e=>e.query({query:e=>"/attendance/student/stats/lecture/".concat(e.cid,"/student/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},transformResponse:(e,t,s)=>null!==s&&void 0!==s&&s.search?{search:!0,list:null===e||void 0===e?void 0:e.student_list}:{page:null===s||void 0===s?void 0:s.page,list:null===e||void 0===e?void 0:e.student_list},merge:(e,t)=>{var s;return null!==t&&void 0!==t&&t.search||1===(null===t||void 0===t?void 0:t.page)?t:void(null===e||void 0===e||null===(s=e.list)||void 0===s||s.push(...null===t||void 0===t?void 0:t.list))},forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),l=e=>e.query({query:e=>"/attendance/student/stats/student/".concat(e.sid,"/lecture/").concat(e.cid,"/query"),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},transformResponse:e=>null===e||void 0===e?void 0:e.all_subject,forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),o=e=>e.query({query:e=>"/attendance/student/profile/stats/".concat(e.sid,"/day/query?date=").concat(null===e||void 0===e?void 0:e.date),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),r=e=>e.query({query:e=>"/attendance/student/profile/stats/".concat(e.sid,"/lecture/query"),serializeQueryArgs:e=>{let{endpointName:t}=e;return t},transformResponse:e=>null===e||void 0===e?void 0:e.profile_attendance_stats,forceRefetch(e){let{currentArg:t,previousArg:s}=e;return t!==s}}),c=n.l.injectEndpoints({endpoints:e=>({studentStatsClassList:i(e),studentStatsOneClassStudentList:a(e),studentStatsLectureWiseStudentList:d(e),studentStatsLectureWiseOneStudentSubjectList:l(e),studentProfileAttendanceStatsDayWise:o(e),studentProfileAttendanceStatsLectureWise:r(e)})}),{useStudentStatsClassListQuery:u,useStudentStatsOneClassStudentListQuery:v,useStudentStatsLectureWiseStudentListQuery:_,useStudentStatsLectureWiseOneStudentSubjectListQuery:m,useStudentProfileAttendanceStatsDayWiseQuery:h,useStudentProfileAttendanceStatsLectureWiseQuery:f}=c,p=e=>{const{data:t,refetch:s,isFetching:n}=u(e.data,{skip:e.skip});return{studentStatsClassList:t,studentStatsClassListRefetch:s,studentStatsClassListLoading:n}},g=e=>{const{data:t,refetch:s,isFetching:n}=v(e.data,{skip:e.skip});return{studentStatsOneClassStudentList:t,studentStatsOneClassStudentListRefetch:s,studentStatsOneClassStudentListLoading:n}},N=e=>{const{data:t,refetch:s,isFetching:n}=_(e.data,{skip:e.skip});return{studentStatsLectureWiseStudentList:t,studentStatsLectureWiseStudentListRefetch:s,studentStatsLectureWiseStudentListLoading:n}},S=e=>{const{data:t,refetch:s,isFetching:n}=m(e.data,{skip:e.skip});return{studentStatsLectureWiseOneStudentSubjectList:t,studentStatsLectureWiseOneStudentSubjectListRefetch:s,studentStatsLectureWiseOneStudentSubjectListLoading:n}},A=e=>{const{data:t,refetch:s,isFetching:n}=h(e.data,{skip:e.skip});return{studentProfileAttendanceStatsDayWise:t,studentProfileAttendanceStatsDayWiseRefetch:s,studentProfileAttendanceStatsDayWiseLoading:n}},x=e=>{const{data:t,refetch:s,isFetching:n}=f(e.data,{skip:e.skip});return{studentProfileAttendanceStatsLectureWise:t,studentProfileAttendanceStatsLectureWiseRefetch:s,studentProfileAttendanceStatsLectureWiseLoading:n}}},38986:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(72791),i=s(52245),a=s(39230),d=s(1095),l=s(80184);const o=e=>{let{label:t,name:s,value:o,onChange:r,errorShow:c,disabled:u,customFormFileContainer:v,customFormFileLabel:_,customFormFile:m,type:h,multiple:f}=e;const{t:p}=(0,a.$G)(),g=(0,n.useCallback)((()=>{const e=window.open("".concat(d.yI,"/").concat(null===o||void 0===o?void 0:o.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}),[null===o||void 0===o?void 0:o.key]);return(0,l.jsxs)("div",{className:i.Z.form_input_container,style:{...v},children:[t&&(0,l.jsxs)("label",{className:i.Z.form_input_label,style:_,children:[t,c?(0,l.jsxs)("span",{className:i.Z.form_input_label_error,children:["* ",p("form_require_label")]}):null]}),(0,l.jsxs)("div",{className:i.Z.form_file_container,style:m,children:[(0,l.jsx)("label",{className:o?"".concat(i.Z.form_file_choose," ").concat(i.Z.form_file_choose_active):i.Z.form_file_choose,htmlFor:s,children:p(""!==o?"file_choosen":"choose_file")}),(0,l.jsx)("label",{className:i.Z.form_file_choosen,onClick:g,children:""!==o?null!==o&&void 0!==o&&o.name?null===o||void 0===o?void 0:o.name:p("view"):p("no_file_chosen")})]}),(0,l.jsx)("input",{type:"file",multiple:!!f,accept:h||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:s,id:s,style:{display:"none"},onChange:r,disabled:u})]})}},34314:(e,t,s)=>{s.d(t,{Z:()=>g});var n=s(6758),i=s(55336),a=s(90904),d=s(11468),l=s(48293),o=s(21348),r=s(72791),c=s(39230),u=s(4007),v=s(98684),_=s(93638),m=s(84959),h=s(99183),f=s(38986),p=s(80184);const g=e=>{let{onClose:t,sendStudentList:s,instituteId:g,headId:N,accessAs:S}=e;const{t:A}=(0,c.$G)(),[x,I]=(0,r.useState)(!1),[j,C]=(0,r.useState)(""),[y,T]=(0,r.useState)({alarm_mode:"APP_NOTIFICATION",content:"",m_title:"",m_doc:""}),[b,E]=(0,r.useState)(""),[k]=(0,m.FL)(),[Z]=(0,n.cd)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{children:(0,p.jsxs)("div",{className:u.Z.modal_container,children:[(0,p.jsx)(o.Z,{children:(0,p.jsxs)("div",{className:u.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:u.Z.modal_container_header,children:(0,p.jsx)("h6",{children:A("student_message")})}),(0,p.jsx)("img",{src:"".concat(v.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,p.jsx)(a.Z,{}),(0,p.jsxs)(o.Z,{customStyle:{paddingTop:"0"},children:[(0,p.jsxs)("section",{className:u.Z.notify_container,onClick:()=>T((e=>({...e,alarm_mode:"APP_NOTIFICATION"}))),children:[(0,p.jsx)("img",{src:"APP_NOTIFICATION"===y.alarm_mode?"".concat(v.Fk,"/radio-blue.svg"):"".concat(v.Fk,"/radio-grey.svg"),alt:"icon"}),(0,p.jsxs)("div",{className:u.Z.notify_text,children:[(0,p.jsx)("h6",{children:A("Notify_with_In_app_Notification")}),(0,p.jsx)("p",{children:A("Notify_with_In_app_Notification_note")})]})]}),(0,p.jsxs)("section",{className:u.Z.notify_container,children:[(0,p.jsx)("img",{src:"EMAIL_NOTIFICATION"===y.alarm_mode?"".concat(v.Fk,"/radio-blue.svg"):"".concat(v.Fk,"/radio-grey.svg"),alt:"icon"}),(0,p.jsxs)("div",{className:u.Z.notify_text,children:[(0,p.jsx)("h6",{children:A("Notify_On_Email_and_SMS")}),(0,p.jsx)("p",{children:A("Notify_On_Email_and_SMS_note")})]})]}),"APP_NOTIFICATION"===y.alarm_mode&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{label:A("student_title_label"),placeholder:A("student_title_label_placeholder"),name:"m_title",value:y.m_title,type:"text",onChange:e=>T((t=>({...t,m_title:e.target.value}))),errorShow:j.m_title}),(0,p.jsx)(d.Z,{label:A("student_message_label"),placeholder:A("student_message_label_placeholder"),name:"content",value:y.content,type:"text",onChange:e=>T((t=>({...t,content:e.target.value})))}),(0,p.jsx)(f.Z,{label:A("document"),name:"document",value:b,onChange:e=>{if(e.target.files[0]){I((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),k({fileUpload:t}).then((t=>{var s,n,i;E({name:null===(s=e.target.files[0])||void 0===s?void 0:s.name,key:null===(n=t.data)||void 0===n?void 0:n.imageKey,type:null===(i=e.target.files[0])||void 0===i?void 0:i.type}),T((e=>{var s;return{...e,m_doc:null===(s=t.data)||void 0===s?void 0:s.imageKey}})),I((e=>!e))})).catch({})}}})]}),(0,p.jsx)(_.Z,{label:"confirm",onAction:()=>{let e=(0,h.l)(y,["content","m_doc"]);var n,i;(0,h.x)(e)?y.alarm_mode&&(null===s||void 0===s?void 0:s.length)>0&&g&&(I((e=>!e)),Z({sendMessage:{message:y.content,from:null!==N&&void 0!==N?N:"",type:"ADMISSION_ADMIN"===S?"Admission Head":"FINANCE_MANAGER"===S?"Finance Head":"CERTIFICATE_AUTHORITY"===S?"Certificate Authority":"STUDENT_SECTION"===S?"Student Section":"ID_CARD_SECTION"===S?"Id Card Authority":"Institute Admin",alarm_mode:y.alarm_mode,sid:s,flow:"INSTITUTE_ADMIN"===S?"INSTITUTE_ADMIN":"Other",m_title:null!==(n=y.m_title)&&void 0!==n?n:"",m_doc:null!==(i=y.m_doc)&&void 0!==i?i:null},id:g}).then((()=>{t(),I((e=>!e))})).catch({})):C(e)}})]})]})}),x&&(0,p.jsx)(i.Z,{})]})}},36547:(e,t,s)=>{s.d(t,{Z:()=>n});const n={spas_heading:"StudentProfile_spas_heading__6E1mI",spas_container:"StudentProfile_spas_container__IE7gv",spasc_inner:"StudentProfile_spasc_inner__Bzl1a",spasd_card:"StudentProfile_spasd_card__j917F",spasdc_inner:"StudentProfile_spasdc_inner__FbsCv",sdpa:"StudentProfile_sdpa__jIBCR",sdpa_section:"StudentProfile_sdpa_section__k9YPf",sdpac_wrap:"StudentProfile_sdpac_wrap__+cgX7",sdpas_container:"StudentProfile_sdpas_container__vvdMy",sdpasc_label:"StudentProfile_sdpasc_label__MugOk",sdpasc_value:"StudentProfile_sdpasc_value__9cEo+"}}}]);
//# sourceMappingURL=56521.d7848526.chunk.js.map