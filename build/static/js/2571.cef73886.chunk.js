(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2571],{62571:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var i=n(29439),o=n(72791),r=n(55136),a=n(16871),s=n(43504),l=n(78687),u=n(39230),d=n(64540),c=n(30510),f=n(27346),v=n(36665),p=n(80184),h=function(e){var t,n,a,s,l,h=e.studentId,m=e.openAs,_=e.editAs,y=(0,u.$G)().t,g=o.useState("Month"),b=(0,i.Z)(g,2),N=b[0],j=b[1],x=(0,o.useState)(""),A=(0,i.Z)(x,2),C=A[0],I=A[1],S=(0,o.useState)(!1),k=(0,i.Z)(S,2),T=k[0],O=k[1],Z=(new Date).toISOString().split("-"),w=+Z[1]>9?+Z[1]:"0".concat(+Z[1]),E=(0,d.MJ)({sid:h,month:"Month"===N?w:"",year:+Z[0]},{skip:!h}),P=E.data,R=E.refetch,F=(0,c.gP)({data:{sid:h,month:"Month"===N?w:"",year:+Z[0],subjectId:null===C||void 0===C?void 0:C._id},skip:!(null!==C&&void 0!==C&&C._id)||!h}),D=F.studentSubjectAttendance,B=F.studentSubjectAttendanceRefetch;o.useEffect((function(){h&&R()}),[h,N,R]),o.useEffect((function(){null!==C&&void 0!==C&&C._id&&B()}),[null===C||void 0===C?void 0:C._id,N,B]);var U=function(e){j(e)},M=function(){O((function(e){return!e}))};return(0,p.jsxs)("div",{className:r.Z.student_attendane_container,style:{right:"STUDENT_SECTION"===m||"ADMISSION_ADMIN"===m?"11%":"INSTITUTE"===_?"10%":"INSTITUTE"===m||"CLASS_CATALOG"===m?"8%":m?"1.6%":"11%"},children:[(0,p.jsxs)("div",{className:r.Z.student_attendance_heading,children:[(0,p.jsx)("h6",{children:C?null!==(t=null===C||void 0===C?void 0:C.subjectName)&&void 0!==t?t:"":y("class_attendance")}),(0,p.jsx)("img",{src:"/images/filter-blue-icon.svg",alt:"filter icon",onClick:M,title:"Filter by subject",style:{cursor:"pointer"}})]}),(0,p.jsxs)("div",{className:r.Z.colours,children:[(0,p.jsxs)("div",{className:r.Z.monthColours,onClick:function(){return U("Month")},children:[(0,p.jsx)("p",{children:"Monthly"}),"Month"===N?(0,p.jsx)("img",{src:"/images/radio-active.svg",alt:""}):(0,p.jsx)("img",{src:"/images/radio-disabled.svg",alt:""})]}),(0,p.jsxs)("div",{className:r.Z.monthColours,onClick:function(){return U("Year")},children:[(0,p.jsx)("p",{children:"Yearly"}),"Year"===N?(0,p.jsx)("img",{src:"/images/radio-active.svg",alt:""}):(0,p.jsx)("img",{src:"/images/radio-disabled.svg",alt:""})]})]}),(0,p.jsxs)("div",{className:r.Z.percentage,children:[(0,p.jsxs)("div",{className:r.Z.presentcount,children:[(0,p.jsx)("p",{children:"Present Count"}),(0,p.jsxs)("p",{children:[C?null===D||void 0===D||null===(n=D.presentArray)||void 0===n?void 0:n.length:null===P||void 0===P||null===(a=P.presentArray)||void 0===a?void 0:a.length," ","days"]}),(0,p.jsxs)("p",{children:[C?"NaN"===(null===D||void 0===D?void 0:D.present)?0:null===D||void 0===D?void 0:D.present:"NaN"===(null===P||void 0===P?void 0:P.present)?0:null===P||void 0===P?void 0:P.present," ","%"]})]}),(0,p.jsxs)("div",{className:r.Z.absentcount,children:[(0,p.jsx)("p",{children:"Absent Count"}),(0,p.jsxs)("p",{children:[C?null===D||void 0===D||null===(s=D.absentArray)||void 0===s?void 0:s.length:null===P||void 0===P||null===(l=P.absentArray)||void 0===l?void 0:l.length," ","days"]}),(0,p.jsxs)("p",{children:[C?"NaN"===(null===D||void 0===D?void 0:D.absent)?0:null===D||void 0===D?void 0:D.absent:"NaN"===(null===P||void 0===P?void 0:P.absent)?0:null===P||void 0===P?void 0:P.absent,"%"]})]})]}),T&&(0,p.jsx)(v.Z,{onClose:M,children:(0,p.jsx)("div",{style:{width:"30rem",minHeight:"10rem",maxHeight:"35rem",overflowY:"auto",overflowX:"hidden",scrollBehavior:"smooth",padding:"1rem"},children:(0,p.jsx)(f.Z,{sid:h,onFilterAttendance:function(e){(null===C||void 0===C?void 0:C._id)===(null===e||void 0===e?void 0:e._id)?I(""):I(e),M()},filterAttendance:C})})})]})},m=n(91007),_=function(e){var t,n,i,l,d,c,f,v,h=e.carryParrentState,_=e.studentId,y=(0,u.$G)().t,g=(0,a.UO)(),b=(0,m.$J)("".concat(_),{skip:!_}),N=b.data,j=b.refetch;(0,o.useEffect)((function(){_&&j()}),[_,j]);var x=function(e,t,n){return e+t+n};return(0,p.jsxs)("div",{className:r.Z.admission_fees,children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("h5",{style:{color:"#008000"},children:[y("rs"),"."," ",x((null===N||void 0===N||null===(t=N.student)||void 0===t?void 0:t.studentPaidFeeCount)||0,(null===N||void 0===N||null===(n=N.student)||void 0===n?void 0:n.admissionPaidFeeCount)||0,(null===N||void 0===N||null===(i=N.student)||void 0===i?void 0:i.hostelPaidFeeCount)||0)]}),(0,p.jsx)("h6",{style:{marginBottom:"1.5rem"},children:y("total_fees_paid")}),(0,p.jsxs)("h5",{style:{color:"#121212"},children:[y("rs"),"."," ",x((null===N||void 0===N||null===(l=N.student)||void 0===l?void 0:l.studentRemainingFeeCount)||0,(null===N||void 0===N||null===(d=N.student)||void 0===d?void 0:d.admissionRemainFeeCount)||0,(null===N||void 0===N||null===(c=N.student)||void 0===c?void 0:c.hostelRemainFeeCount)||0)]}),(0,p.jsx)("h6",{children:y("total_outs")})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(s.rU,{to:"/q/".concat(g.username,"/student/profile"),state:h,children:(0,p.jsxs)("div",{className:r.Z.card_hold_container,children:[(0,p.jsx)("img",{src:"/images/link-forword-icon.svg",alt:"forword link"}),(0,p.jsx)("h6",{children:y("view_profile")})]})}),(0,p.jsxs)("h5",{style:{color:"#121212",marginTop:"1.5rem"},children:[y("rs"),". ",null!==(f=null===N||void 0===N||null===(v=N.student)||void 0===v?void 0:v.applicable_fees_pending)&&void 0!==f?f:0]}),(0,p.jsx)("h6",{children:y("applicable_outs")})]})]})},y=n(98094),g=n(72952),b=n(98734),N=n(6245),j=n(33399),x=n(39480),A=n(97655),C=n(37782),I=function(e){var t=e.onClose,r=e.uniqueGr,a=e.instituteId,s=(0,u.$G)().t,l=(0,o.useState)(!1),d=(0,i.Z)(l,2),c=d[0],f=d[1],h=(0,o.useState)(!1),m=(0,i.Z)(h,2),_=m[0],I=m[1],S=(0,o.useState)(""),k=(0,i.Z)(S,2),T=k[0],O=k[1],Z=(0,o.useState)(""),w=(0,i.Z)(Z,2),E=w[0],P=w[1],R=(0,o.useState)(""),F=(0,i.Z)(R,2),D=F[0],B=F[1],U=(0,N._)(),M=(0,i.Z)(U,1)[0],q=(0,x.p0)({data:{id:a,type:"ID"},skip:!a}),G=q.oneInstituteProfile,L=q.oneInstituteProfileRefetch;(0,o.useEffect)((function(){a&&L()}),[a,L]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(v.Z,{onClose:function(){c||t()},children:[(0,p.jsx)("div",{className:j.Z.add_category_modal,style:{width:"30rem",minHeight:"10rem",height:"fit-content"},children:(0,p.jsxs)("section",{className:j.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,p.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:s("bonafide")}),(0,p.jsx)(y.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),(0,p.jsx)(g.Z,{labelText:s("enter_reason"),placeholder:s("enter_reason"),name:"reason",value:T,type:"text",onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&O(e.target.value)},errorShow:_}),(0,p.jsx)(g.Z,{labelText:s("bonafide_message_optional"),placeholder:s("bonafide_message_optional_placeholder"),name:"message",value:E,type:"text",onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&P(e.target.value)}}),(0,p.jsx)(A.Z,{labelText:s("competent_authority"),placeholder:s("competent_authority_lable"),name:"authority",value:D,type:"text",onChange:function(e){var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&B(e.target.value)}}),(0,p.jsx)("button",{onClick:function(){r&&T&&a?(f((function(e){return!e})),M({gr:r,id:a,bonafideReason:{reason:T,student_bona_message:E}}).then((function(e){var i,o;null!==e&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&i.student&&function(e){var i=(0,C.hR)(null===G||void 0===G?void 0:G.institute,e,{reason:T,message:E,authority:D,uniqueGr:r}),o=i.institute,a=i.studentInfo,s=new Worker(new URL(n.p+n.u(4268),n.b));s.postMessage({printCertificateType:"BONAFIDE",studentInfo:a,institute:o}),s.onmessage=function(e){e&&(window.open(e.data,"_blank"),f((function(e){return!e})),t())}}(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.student)})).catch({})):T||I(!0)},className:j.Z.fee_middle_confirm_button,style:{marginTop:"4rem"},children:s("confirm")})]})}),c&&(0,p.jsx)(b.Z,{})]})})},S=function(e){var t=e.instituteId,n=e.uniqueGr,s=(0,u.$G)().t,l=(0,o.useState)(""),d=(0,i.Z)(l,2),c=d[0],f=d[1],v=(0,o.useState)(!1),h=(0,i.Z)(v,2),m=h[0],_=h[1],y=(0,a.s0)(),g=(0,a.UO)(),j=function(e){f(e)},x=(0,N.vB)(),A=(0,i.Z)(x,1)[0],C=function(e){t&&n&&(_((function(e){return!e})),A({id:t,gr:n,leavingFeedback:{number:n,reason:"",study:"",behaviour:"",remarks:"",udise:""}}).then((function(n){_((function(e){return!e})),y("/q/".concat(g.username,"/student/certificate/form"),"LEAVING"===e?{state:{student:n.data.student,download:n.data.download,instituteId:t,is_leaving:"leaving"}}:{state:{student:n.data.student,download:n.data.download,instituteId:t,is_leaving:"transfer"}})})).catch({}))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:r.Z.certificate_btn_container,children:[(0,p.jsx)("button",{className:r.Z.certificate_btn,onClick:function(){return j("BONAFIDE")},children:s("bonafide")}),(0,p.jsx)("button",{className:r.Z.certificate_btn,onClick:function(){return C("LEAVING")},children:s("leaving")}),(0,p.jsx)("button",{className:r.Z.certificate_btn,onClick:function(){return C("TRANSFER")},children:s("transfer_certificate")})]}),"BONAFIDE"===c&&(0,p.jsx)(I,{onClose:function(){return j("")},uniqueGr:n,instituteId:t}),m&&(0,p.jsx)(b.Z,{})]})},k=n(73343),T=n(98472),O=function(e){var t,n=e.sid,a=(0,u.$G)().t,s=(0,o.useState)(!1),l=(0,i.Z)(s,2),d=l[0],c=l[1],f=(0,o.useState)([]),v=(0,i.Z)(f,2),h=v[0],m=v[1],_=(0,o.useState)(!1),y=(0,i.Z)(_,2),g=y[0],N=y[1],j=(0,k.cl)(),x=(0,i.Z)(j,1)[0];return(0,o.useEffect)((function(){g&&(document.getElementById("csv_download_file").click(),N(!1),c((function(e){return!e})))}),[g]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:r.Z.certificate_btn_container,children:(0,p.jsx)("button",{className:r.Z.certificate_btn,onClick:function(){n&&(c(!0),x({studentId:{sid:n}}).then((function(e){m((function(){var t;return function(e){var t,n;return[{GRNo:null===e||void 0===e?void 0:e.studentGRNO,Name:(null===e||void 0===e?void 0:e.studentFirstName)+" "+(null===e||void 0===e?void 0:e.studentMiddleName)+" "+(null===e||void 0===e?void 0:e.studentLastName),Gender:null===e||void 0===e?void 0:e.studentGender,MotherName:null!==e&&void 0!==e&&e.studentMotherName?null===e||void 0===e?void 0:e.studentMotherName:"NA",DOB:null!==e&&void 0!==e&&e.studentDOB?null===e||void 0===e?void 0:e.studentDOB:"NA","Blood Group":null!==e&&void 0!==e&&e.student_blood_group?null===e||void 0===e?void 0:e.student_blood_group:"NA","Caste Category":null!==e&&void 0!==e&&e.studentCastCategory?null===e||void 0===e?void 0:e.studentCastCategory:"NA",Religion:null!==e&&void 0!==e&&e.studentReligion?null===e||void 0===e?void 0:e.studentReligion:"NA",BirthPlace:null!==e&&void 0!==e&&e.studentBirthPlace?null===e||void 0===e?void 0:e.studentBirthPlace:"NA",Address:null!==e&&void 0!==e&&e.studentAddress?null===e||void 0===e?void 0:e.studentAddress:"NA",ParentsName:null!==e&&void 0!==e&&e.studentParentsName?null===e||void 0===e?void 0:e.studentParentsName:"NA","Parent's Contact":null!==e&&void 0!==e&&e.studentParentsPhoneNumber?null===e||void 0===e?void 0:e.studentParentsPhoneNumber:"NA",State:null!==e&&void 0!==e&&e.studentState?null===e||void 0===e?void 0:e.studentState:"NA",District:null!==e&&void 0!==e&&e.studentDistrict?null===e||void 0===e?void 0:e.studentDistrict:"NA",Nationality:null!==e&&void 0!==e&&e.studentNationality?null===e||void 0===e?void 0:e.studentNationality:"NA",Class:null===e||void 0===e||null===(t=e.studentClass)||void 0===t?void 0:t.classTitle,Contact:null===e||void 0===e?void 0:e.studentPhoneNumber,Email:null===e||void 0===e?void 0:e.studentEmail,AdmissionDate:null===e||void 0===e||null===(n=e.studentAdmissionDate)||void 0===n?void 0:n.split("T")[0],AadharNumber:null!==e&&void 0!==e&&e.studentAadharNumber?null===e||void 0===e?void 0:e.studentAadharNumber:"NA","Mother Tongue":null!==e&&void 0!==e&&e.studentMTongue?null===e||void 0===e?void 0:e.studentMTongue:"NA",Caste:null!==e&&void 0!==e&&e.studentCast?null===e||void 0===e?void 0:e.studentCast:"NA","Current Address":null!==e&&void 0!==e&&e.studentCurrentAddress?null===e||void 0===e?void 0:e.studentCurrentAddress:"NA","Father Ration Color":null!==e&&void 0!==e&&e.studentFatherRationCardColor?null===e||void 0===e?void 0:e.studentFatherRationCardColor:"NA","Parent's Occupation":null!==e&&void 0!==e&&e.studentParentsOccupation?null===e||void 0===e?void 0:e.studentParentsOccupation:"NA","Parent's Annual Income":null!==e&&void 0!==e&&e.studentParentsAnnualIncom?null===e||void 0===e?void 0:e.studentParentsAnnualIncom:"NA","Previous School":null!==e&&void 0!==e&&e.studentPreviousSchool?null===e||void 0===e?void 0:e.studentPreviousSchool:"NA","Bank Name":null!==e&&void 0!==e&&e.studentBankName?null===e||void 0===e?void 0:e.studentBankName:"NA","Bank Account":null!==e&&void 0!==e&&e.studentBankAccount?null===e||void 0===e?void 0:e.studentBankAccount:"NA","Bank Holder Name":null!==e&&void 0!==e&&e.studentBankAccountHolderName?null===e||void 0===e?void 0:e.studentBankAccountHolderName:"NA","Bank Ifsc":null!==e&&void 0!==e&&e.studentBankIfsc?null===e||void 0===e?void 0:e.studentBankIfsc:"NA"}]}(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.student_card)})),N(!0)})).catch({}))},children:a("id_card")})}),(0,p.jsx)(T.CSVLink,{data:h,filename:"".concat(null===h||void 0===h||null===(t=h[0])||void 0===t?void 0:t.Name,"-id-card"),id:"csv_download_file"}),d&&(0,p.jsx)(b.Z,{})]})},Z=n(1413),w=n(29017),E=function(e){var t=e.uniqueGr,n=e.onClose,r=e.studentId,a=e.onRefetch,s=(0,u.$G)().t,l=(0,o.useState)(!1),d=(0,i.Z)(l,2),c=d[0],f=d[1],h=(0,o.useState)(!1),m=(0,i.Z)(h,2),_=m[0],N=m[1],x=(0,w.Nt)(),C=(0,i.Z)(x,1)[0],I=(0,o.useState)({query_content:"",query_gr:null!==t&&void 0!==t?t:""}),S=(0,i.Z)(I,2),k=S[0],T=S[1];(0,o.useEffect)((function(){t&&T((function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{query_gr:null!==t&&void 0!==t?t:""})}))}),[t]);return(0,p.jsxs)(v.Z,{onClose:n,children:[(0,p.jsx)("div",{className:j.Z.add_category_modal,style:{width:"30rem",minHeight:"10rem",height:"fit-content"},children:(0,p.jsxs)("section",{className:j.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,p.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:s("update_student_gr")}),(0,p.jsx)(y.Z,{customStyle:{width:"100%",marginTop:"0.7rem",marginBottom:"1rem"}}),(0,p.jsx)(A.Z,{labelText:s("student_gr"),placeholder:s("student_gr_placeholder"),name:"query_gr",value:null===k||void 0===k?void 0:k.query_gr,type:"text",onChange:function(e){return T((function(t){return(0,Z.Z)((0,Z.Z)({},t),{},{query_gr:e.target.value})}))},errorShow:_.query_gr}),(0,p.jsx)(g.Z,{labelText:s("gr_student_message_label"),placeholder:s("gr_student_message_label_placeholder"),name:"query_content",value:k.query_content,type:"text",onChange:function(e){return T((function(t){return(0,Z.Z)((0,Z.Z)({},t),{},{query_content:e.target.value})}))},errorShow:_.query_content}),(0,p.jsx)("button",{onClick:function(){var e=function(e){var t={};for(var n in e)e[n]||(t[n]="".concat(n," is required!"));return t}(k),t=!1;for(var i in e)if(i){t=!0;break}t?N(e):(f((function(e){return!e})),C({sid:r,grNumberContent:k}).then((function(){a(),f((function(e){return!e})),n()})).catch({}))},className:j.Z.fee_middle_confirm_button,style:{marginTop:"4rem"},children:s("update")})]})}),c&&(0,p.jsx)(b.Z,{})]})},P=n(86109),R=n(69721),F=["SUBJECT_TEACHER","LEAVING_FORM","FINANCE_MANAGER","ADMISSION_ADMIN_SCHOLARSHIP","VIEW_ADMISSION_PAGE_FEES","INSTITUTE_ADMIN","STUDENT","CERTIFICATE_AUTHORITY","ID_CARD_SECTION"],D=["ADMISSION_ADMIN","FINANCE_MANAGER","CERTIFICATE_AUTHORITY","STUDENT_SECTION","ID_CARD_SECTION","INSTITUTE_ADMIN"],B=function(e){var t,n,d,c=e.dynamicImage,f=e.indexNumber,v=e.designation,m=e.name,y=e.activeUrl,g=e.sid,N=e.viewAs,j=e.openAs,x=e.onEdit,A=e.grNumber,C=e.carryParrentState,I=e.admissionButton,k=e.is_hostel_link,T=e.is_view_profile,Z=e.editAs,w=e.uniqueGr,B=e.instituteId,U=e.onRefetchStudentApi,M=e.isGrButtonLock,q=(0,u.$G)().t,G=(0,a.UO)(),L=(0,a.TH)(),H=(0,l.useSelector)((function(e){return e.idChange.loginProfile})),V=(0,o.useState)(!1),W=(0,i.Z)(V,2),Y=W[0],$=W[1],z=(0,o.useState)(!1),J=(0,i.Z)(z,2),K=J[0],Q=J[1],X=(0,P.OB)(),ee=(0,i.Z)(X,1)[0],te=function(){if("Locked"===M)return null;$((function(e){return!e}))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:r.Z.staff_profile_photo_container,children:["ID_CARD_SECTION"===j?(0,p.jsx)("img",{src:c,alt:"staff avatar",className:r.Z.staff_profile_photo_image,style:{cursor:"pointer"},title:"Download profile photo",onClick:function(){Q(!0),ee({instituteId:g}).then((function(e){var t;window.open("".concat(R.zQ,"/").concat(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Key),"_blank"),Q(!1)})).catch({})}}):(0,p.jsx)("img",{src:c,alt:"staff avatar",className:r.Z.staff_profile_photo_image}),(0,p.jsxs)("div",{className:r.Z.staff_profile_photo_info,children:[(0,p.jsxs)("h5",{className:r.Z.staff_profile_photo_name,children:[m,"HOSTEL"===T?(0,p.jsx)(s.rU,{to:"/q/".concat(G.username,"/student/profile/"),state:{sid:g,viewAs:j,instituteId:null===(t=L.state)||void 0===t?void 0:t.instituteId},children:(0,p.jsx)("span",{style:{fontSize:"10px",fontWeight:"400",color:"#0000ff"},children:" (".concat(q("view_profile"),")")})}):k&&(0,p.jsx)(s.rU,{to:"/q/".concat(G.username,"/student/profile/hostel"),state:{sid:g,viewAs:j,instituteId:null===(n=L.state)||void 0===n?void 0:n.instituteId},children:(0,p.jsx)("span",{style:{fontSize:"10px",fontWeight:"400",color:"#0000ff"},children:" (".concat(q("hostel_profile"),")")})})]}),(0,p.jsx)("p",{className:r.Z.staff_profile_photo_index,children:f}),"student"===y&&(0,p.jsxs)("p",{className:r.Z.staff_profile_photo_index,children:[A,(null===D||void 0===D?void 0:D.includes(j))&&(0,p.jsx)("span",{style:{fontSize:"12px",fontWeight:"400",color:"Locked"===M?"rgb(177 177 176)":"#0000ff",cursor:"pointer"},onClick:te,children:" (".concat(q("Locked"===M?"requested":"edit_"),")")})]}),(0,p.jsx)("p",{className:r.Z.staff_profile_photo_index,children:v})]}),"student"===y&&"VIEW_ADMISSION_PAGE_FEES"===j?(0,p.jsx)(_,{carryParrentState:C,studentId:g}):"student"===y&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(s.rU,{to:"/q/".concat(G.username,"/student/profile/admission"),state:{sid:g,viewAs:j,instituteId:null===(d=L.state)||void 0===d?void 0:d.instituteId},children:(0,p.jsxs)("div",{className:r.Z.link_hold_container,style:{right:I?"40%":"35%"},children:[(0,p.jsx)("img",{src:"/images/link-forword-icon.svg",alt:"forword link"}),(0,p.jsx)("h6",{children:q("admission_fees")})]})})}),"CERTIFICATE_AUTHORITY"===j?(0,p.jsx)(S,{uniqueGr:w,instituteId:B}):"ID_CARD_SECTION"===j?(0,p.jsx)(O,{sid:g}):"student"===y&&(0,p.jsx)(h,{studentId:g,openAs:j,editAs:Z}),"STAFF"===Z?null:"INSTITUTE"===Z?(0,p.jsx)(s.rU,{to:"/q/".concat(H.username,"/edit/").concat(y),state:{openAs:"INSTITUTE_SIDE",sid:g},children:(0,p.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:r.Z.staff_profile_photo_edit})}):null!==F&&void 0!==F&&F.includes(j)?"":N?(0,p.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:r.Z.staff_profile_photo_edit,onClick:x,style:{cursor:"pointer"}}):(0,p.jsx)(s.rU,{to:"/q/".concat(H.username,"/edit/").concat(y),state:{openAs:"INSTITUTE_SIDE",sid:g},children:(0,p.jsx)("img",{src:"/images/user-pencil-edit.svg",alt:"edit icon",className:r.Z.staff_profile_photo_edit})})]}),Y&&(0,p.jsx)(E,{onClose:te,uniqueGr:w,studentId:g,onRefetch:U}),K&&(0,p.jsx)(b.Z,{})]})}},86109:function(e,t,n){"use strict";n.d(t,{GI:function(){return r},OB:function(){return s},PY:function(){return a}});var i=n(29439),o=n(73343),r=function(e){var t=(0,o.ce)();return{staffExportData:t.data,staffExportDataRefetch:t.refetch}},a=function(){var e=(0,o.tO)();return[(0,i.Z)(e,1)[0]]},s=function(){var e=(0,o.f7)();return[(0,i.Z)(e,1)[0]]}},80888:function(e,t,n){"use strict";var i=n(79047);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98472:function(e,t,n){e.exports=n(23561)},98015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(72791),a=(i=r)&&i.__esModule?i:{default:i},s=n(51509),l=n(58333);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,i=e.separator,o=e.enclosingCharacter,r=e.uFEFF,a=e.target,s=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(t,r,n,i,o),a,s,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(a.default.Component);u.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),u.propTypes=l.propTypes,t.default=u},39088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(72791),s=(i=a)&&i.__esModule?i:{default:i},l=n(51509),u=n(58333);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,i=n.data,o=n.headers,r=n.separator,a=n.filename,s=n.enclosingCharacter,u=n.uFEFF,d=t&&"function"===typeof i?i():i,c=new Blob([u?"\ufeff":"",(0,l.toCSV)(d,o,r,s)]);return window.navigator.msSaveBlob(c,a),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,i=t.headers,r=t.separator,a=t.filename,l=t.uFEFF,u=t.children,d=(t.onClick,t.asyncOnClick,t.enclosingCharacter),c=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),f="undefined"===typeof window?"":this.buildURI(n,l,i,r,d);return s.default.createElement("a",o({download:a},c,{ref:function(t){return e.link=t},target:"_self",href:f,onClick:this.handleClick()}),u)}}]),t}(s.default.Component);d.defaultProps=u.defaultProps,d.propTypes=u.propTypes,t.default=d},51509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},r=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},a=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(i(e),i(t)))}),[]))},l=t.jsons2arrays=function(e,t){var n=t=t||s(e),o=t;r(t)&&(n=t.map((function(e){return e.label})),o=t.map((function(e){return e.key})));var a=e.map((function(e){return o.map((function(t){return u(t,e)}))}));return[n].concat(i(a))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,i){var o=e[t];if(void 0!==o&&null!==o)return o;i.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},d=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},c=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return d(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},f=t.arrays2csv=function(e,t,n,o){return c(t?[t].concat(i(e)):e,n,o)},v=t.jsons2csv=function(e,t,n,i){return c(l(e,t),n,i)},p=t.string2csv=function(e,t,n,i){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},h=t.toCSV=function(e,t,n,i){if(r(e))return v(e,t,n,i);if(a(e))return f(e,t,n,i);if("string"===typeof e)return p(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,i,r){var a=h(e,n,i,r),s=o()?"application/csv":"text/csv",l=new Blob([t?"\ufeff":"",a],{type:s}),u="data:"+s+";charset=utf-8,"+(t?"\ufeff":"")+a,d=window.URL||window.webkitURL;return"undefined"===typeof d.createObjectURL?u:d.createObjectURL(l)}},23561:function(e,t,n){"use strict";t.CSVLink=void 0;var i=r(n(98015)),o=r(n(39088));function r(e){return e&&e.__esModule?e:{default:e}}i.default,t.CSVLink=o.default},58333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var i,o=n(72791),r=((i=o)&&i.__esModule,n(52007));t.propTypes={data:(0,r.oneOfType)([r.string,r.array,r.func]).isRequired,headers:r.array,target:r.string,separator:r.string,filename:r.string,uFEFF:r.bool,onClick:r.func,asyncOnClick:r.bool,enclosingCharacter:r.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);
//# sourceMappingURL=2571.cef73886.chunk.js.map