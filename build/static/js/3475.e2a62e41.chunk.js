"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3475],{93097:function(e,l,a){a(72791);var t=a(12072),i=a(84489),n=a(69721),o=a(80184);l.Z=function(e){var l=e.onClose,a=e.keyValue;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{onClose:l}),(0,o.jsx)(t.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,o.jsx)("img",{src:"".concat(n.yI,"/").concat(a),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},32589:function(e,l,a){var t=a(1413),i=a(29439),n=a(72791),o=a(93097),s=a(55136),d=a(80184);l.Z=function(e){var l=e.labelText1,a=e.labelValue1,r=e.labelText2,c=e.labelValue2,u=e.labelFile1,f=e.labelFile2,v=e.howManyField,_=e.customStyleContainer,x=e.customStyleEachField,h=(0,n.useState)(""),b=(0,i.Z)(h,2),m=b[0],j=b[1],Z=function(e){j(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:s.Z.each_field_container,style:(0,t.Z)({},_),children:[(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,t.Z)({},x),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[l," : "]}),u?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return Z(a)},children:a?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:a})]}),1!==v&&(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,t.Z)({},x),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[r," : "]}),f?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return Z(c)},children:c?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:c})]})]}),m&&(0,d.jsx)(o.Z,{onClose:function(){j("")},keyValue:m})]})}},88872:function(e,l,a){var t=a(1413),i=a(29439),n=a(72791),o=a(55136),s=a(39230),d=a(89891),r=a(16871),c=a(34314),u=a(80184),f={inputProps:{"aria-label":"Switch demo"}};l.Z=function(e){var l,a,v,_,x,h,b,m,j,Z,y,T=e.textLevel,C=e.onPrevious,N=e.onNext,g=e.onClose,p=e.viewAs,S=e.is_admission,w=e.admissionTitle,V=e.onAdmissionTitle,k=e.is_install,F=e.installTitle,I=e.onInstallTitle,A=e.installmentEdit,E=e.sid,M=e.instituteId,P=e.textLevelInner,D=e.onConfig,B=e.configTitle,L=e.onConfig1,R=e.configTitle1,q=e.isStaff,H=(0,s.$G)().t,O=(0,n.useState)(!1),U=(0,i.Z)(O,2),G=U[0],$=U[1],z=(0,r.TH)();(0,r.UO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.Z.staff_header_container,children:[(0,u.jsxs)("h6",{className:o.Z.staff_header_text,children:[T,P?(0,u.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:P}):""]}),"DEPARTMENT_HEAD"===p?(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:D,style:{color:"#0000ff"},children:B}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:L,style:{color:"#0000ff"},children:R})]}):null,!p&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsxs)("div",{className:o.Z.staff_header_prev,onClick:C,children:[(0,u.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,u.jsx)("span",{children:H("prev")})]}),(0,u.jsxs)("div",{className:o.Z.staff_header_next,onClick:N,children:[(0,u.jsx)("span",{children:H("next")}),(0,u.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:g,children:H("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===p&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w}),q?"":(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return $(!0)},style:{color:"#0000ff"},children:H("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:g,children:H("close_")})]}),"STUDENT_MESSAGE"===(null===(l=z.state)||void 0===l?void 0:l.studentMessaageView)&&"STUDENT_SECTION"!==(null===(a=z.state)||void 0===a?void 0:a.viewAs)&&(0,u.jsx)("div",{className:o.Z.staff_header_function,children:(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return $(!0)},style:{color:"#0000ff"},children:H("student_message")})}),S?(0,u.jsxs)("div",{className:o.Z.admission_actions,children:[k&&(0,u.jsxs)("p",{className:o.Z.staff_header_text,style:{color:"#0000ff"},children:[F,(0,u.jsx)(d.Z,(0,t.Z)((0,t.Z)({},f),{},{checked:A,onChange:I}))]}),"STUDENT_SECTION"===(null===(v=z.state)||void 0===v?void 0:v.viewAs)&&(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return $(!0)},style:{color:"#0000ff"},children:H("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w})]}):""]}),G&&(0,u.jsx)(c.Z,{onClose:function(){return $(!1)},sendStudentList:null!==(_=null===(x=z.state)||void 0===x?void 0:x.sid)&&void 0!==_?_:E,instituteId:null!==(h=null===(b=z.state)||void 0===b?void 0:b.instituteId)&&void 0!==h?h:M,accessAs:null!==(m=null===(j=z.state)||void 0===j?void 0:j.viewAs)&&void 0!==m?m:"INSTITUTE_ADMIN",headId:null!==(Z=null===(y=z.state)||void 0===y?void 0:y.headId)&&void 0!==Z?Z:M})]})}},60600:function(e,l,a){var t=a(37762),i=a(29439),n=a(72791),o=a(98094),s=a(32589),d=a(52864),r=a(39230),c=a(80184);l.Z=function(e){var l,a=e.staff,u=e.viewAs,f=(0,r.$G)().t,v=(0,n.useState)(""),_=(0,i.Z)(v,2),x=_[0],h=_[1];return(0,n.useEffect)((function(){var e;if(null!==a&&void 0!==a&&null!==(e=a.staffDocuments)&&void 0!==e&&e.length){var l,i={},n=(0,t.Z)(null===a||void 0===a?void 0:a.staffDocuments);try{for(n.s();!(l=n.n()).done;){var o=l.value;i[null===o||void 0===o?void 0:o.documentName]=null===o||void 0===o?void 0:o.documentKey}}catch(s){n.e(s)}finally{n.f()}h(i)}}),[null===a||void 0===a?void 0:a.staffDocuments]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.Z,{labelTag:f("personal_info"),children:[(0,c.jsx)(s.Z,{labelText1:f("name"),labelValue1:"".concat((null===a||void 0===a?void 0:a.staffFirstName)||""," ").concat(null!==a&&void 0!==a&&a.staffMiddleName?null===a||void 0===a?void 0:a.staffMiddleName:""," ").concat((null===a||void 0===a?void 0:a.staffLastName)||""),labelText2:f("dob"),labelValue2:(null===a||void 0===a?void 0:a.staffDOB)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("gender"),labelValue1:(null===a||void 0===a?void 0:a.staffGender)||"",labelText2:f("mother_name"),labelValue2:(null===a||void 0===a?void 0:a.staffMotherName)||"",customStyleContainer:u?{width:"auto"}:""})]}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsxs)(d.Z,{labelTag:f("other_personal"),children:[(0,c.jsx)(s.Z,{labelText1:f("dob"),labelValue1:(null===a||void 0===a?void 0:a.staffBirthPlace)||"",labelText2:f("mobile_bumber"),labelValue2:(null===a||void 0===a?void 0:a.staffPhoneNumber)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("adhar_number"),labelValue1:(null===a||void 0===a?void 0:a.staffAadharNumber)||"",labelText2:f("qualification"),labelValue2:(null===a||void 0===a?void 0:a.staffQualification)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_teaching_type_label"),labelValue1:(null===a||void 0===a?void 0:a.teaching_type)||"",labelText2:f("form_join_date_designation_label"),labelValue2:(null===a||void 0===a?void 0:a.staffJoinDate)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_pan_number_designation_label"),labelValue1:(null===a||void 0===a?void 0:a.staffPanNumber)||"",labelText2:f("form_pf_number_designation_label"),labelValue2:(null===a||void 0===a?void 0:a.staff_pf_number)||"",customStyleContainer:u?{width:"auto"}:""})]}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsxs)(d.Z,{labelTag:f("i_details"),children:[(0,c.jsx)(s.Z,{labelText1:f("nationality"),labelValue1:(null===a||void 0===a?void 0:a.staffNationality)||"",labelText2:f("cast_category"),labelValue2:(null===a||void 0===a?void 0:a.staffCastCategory)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("religion"),labelValue1:(null===a||void 0===a?void 0:a.staffReligion)||"",labelText2:f("mother_tongue"),labelValue2:(null===a||void 0===a?void 0:a.staffMTongue)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("cast"),labelValue1:(null===a||void 0===a?void 0:a.staffCast)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsx)(d.Z,{labelTag:f("address_"),children:(0,c.jsx)(s.Z,{labelText1:f("c_add"),labelValue1:(null===a||void 0===a?void 0:a.staffCurrentAddress)||"",labelText2:f("p_add"),labelValue2:(null===a||void 0===a?void 0:a.staffAddress)||"",customStyleContainer:u?{width:"auto"}:""})}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsxs)(d.Z,{labelTag:f("prev_school_document"),children:[(0,c.jsx)(s.Z,{labelText1:f("prev_school"),labelValue1:(null===a||void 0===a?void 0:a.staffPreviousSchool)||"",labelText2:f("aadhar_back"),labelValue2:null===a||void 0===a?void 0:a.staffAadharBackCard,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("aadhar_front"),labelValue1:null===a||void 0===a?void 0:a.staffAadharFrontCard,labelFile1:!0,labelText2:f("caste_"),labelValue2:null===a||void 0===a?void 0:a.staffCasteCertificatePhoto,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_identity_view_label"),labelValue1:null===x||void 0===x?void 0:x.identityDocument,labelFile1:!0,labelText2:f("form_joining_transfer_letter_view_label"),labelValue2:null===x||void 0===x?void 0:x.joiningTransferLetter,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_leaving_transfer_letter_view_label"),labelValue1:null===x||void 0===x?void 0:x.leavingTransferCertificate,labelFile1:!0,labelText2:f("form_income_certificate_view_label"),labelValue2:null===x||void 0===x?void 0:x.incomeCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_last_year_marksheet_view_label"),labelValue1:null===x||void 0===x?void 0:x.lastYearMarksheet,labelFile1:!0,labelText2:f("form_nationality_certificate_view_label"),labelValue2:null===x||void 0===x?void 0:x.nationalityCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("form_domicile_certificate_view_label"),labelValue1:null===x||void 0===x?void 0:x.domicileCertificate,labelFile1:!0,labelText2:f("form_non_creamy_layer_view_label"),labelValue2:null===x||void 0===x?void 0:x.nonCreamyLayerCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""})]}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsxs)(d.Z,{labelTag:f("bank_details"),children:[(0,c.jsx)(s.Z,{labelText1:f("form_bank_name_label"),labelValue1:(null===a||void 0===a?void 0:a.staffBankName)||"",labelText2:f("form_ifsc_code_label"),labelValue2:(null===a||void 0===a?void 0:a.staffBankIfsc)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("acnt_holder"),labelValue1:(null===a||void 0===a?void 0:a.staffBankAccountHolderName)||"",labelText2:f("bank_passbook"),labelValue2:null===a||void 0===a?void 0:a.staffBankPassbook,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("account_holder"),labelValue1:(null===a||void 0===a?void 0:a.staffBankAccount)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,c.jsx)(d.Z,{labelTag:f("form_staff_experience_details_label"),children:null===a||void 0===a||null===(l=a.experience)||void 0===l?void 0:l.map((function(e,l){return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(s.Z,{labelText1:f("college_name_label"),labelValue1:(null===e||void 0===e?void 0:e.college_name)||"",labelText2:f("college_year_label"),labelValue2:(null===e||void 0===e?void 0:e.college_year)||"",customStyleContainer:u?{width:"auto"}:""}),(0,c.jsx)(s.Z,{labelText1:f("course_field_label"),labelValue1:(null===e||void 0===e?void 0:e.course_field)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]},l)}))}),(0,c.jsx)(o.Z,{customStyle:u?{width:"100%"}:""})]})}},52864:function(e,l,a){a(72791);var t=a(55136),i=a(80184);l.Z=function(e){var l=e.labelTag,a=e.children;return(0,i.jsxs)("div",{className:t.Z.each_info_container,children:[(0,i.jsx)("h5",{children:l}),a]})}},53475:function(e,l,a){a.r(l),a.d(l,{default:function(){return j}});var t=a(29439),i=a(72791),n=a(95048),o=a(6245),s=a(69721),d=a(98094),r=a(88872),c=a(55136),u=a(60600),f=a(51962),v="StaffRequestProfile_StaffRequestContainer__lRbZh",_="StaffRequestProfile_requestBtn__MrwVO",x=a(98734),h=a(39230),b=a(80184),m=function(e){var l=e.staff,a=e.AcceptHandler,t=e.RejectHandler,i=e.disabled,n=(0,h.$G)().t;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:v,children:[(0,b.jsx)("div",{className:_,onClick:function(){a(null===l||void 0===l?void 0:l._id,null===l||void 0===l?void 0:l.user._id)},children:n("accept")}),(0,b.jsx)("div",{className:_,onClick:function(){t(null===l||void 0===l?void 0:l._id,null===l||void 0===l?void 0:l.user._id)},style:{backgroundColor:"rgba(75, 26, 133, 0.1)",color:"rgba(18, 18, 18, 0.8)"},children:n("reject")})]}),i&&(0,b.jsx)(x.Z,{})]})},j=function(e){var l,a,v,_,x,h,j,Z,y=e.requestId,T=e.requestFetch,C=e.queryFetch,N=e.onClose,g=(0,i.useState)(!1),p=(0,t.Z)(g,2),S=p[0],w=p[1],V=(0,n.v9)((function(e){return e.idChange.id})),k=(0,o.CF)({sid:y,skip:!y}),F=k.oneStaffProfile,I=k.oneStaffProfileRefetch,A=(0,o.YU)(),E=(0,t.Z)(A,1)[0],M=(0,o.lu)(),P=(0,t.Z)(M,1)[0];return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:c.Z.staff_profile_container,children:[(0,b.jsx)(r.Z,{textLevel:"Staff Profile In Institute",onClose:N}),(0,b.jsx)(d.Z,{}),(0,b.jsx)(f.Z,{name:"".concat((null===F||void 0===F||null===(l=F.staff)||void 0===l?void 0:l.staffFirstName)||""," ").concat(null!==F&&void 0!==F&&null!==(a=F.staff)&&void 0!==a&&a.staffMiddleName?null===F||void 0===F||null===(v=F.staff)||void 0===v?void 0:v.staffMiddleName:""," ").concat((null===F||void 0===F||null===(_=F.staff)||void 0===_?void 0:_.staffLastName)||""),designation:(null===F||void 0===F||null===(x=F.staff)||void 0===x?void 0:x.staffDesignationCount)||0,indexNumber:(null===F||void 0===F||null===(h=F.staff)||void 0===h?void 0:h.staffROLLNO)||"-",dynamicImage:"1"!==(null===F||void 0===F||null===(j=F.staff)||void 0===j?void 0:j.photoId)?"".concat(s.yI,"/").concat(null===F||void 0===F||null===(Z=F.staff)||void 0===Z?void 0:Z.staffProfilePhoto):"/images/ins_default_profile.svg",onEditable:!0}),(0,b.jsx)(d.Z,{}),(0,b.jsx)(u.Z,{staff:null===F||void 0===F?void 0:F.staff}),(0,b.jsx)(m,{staff:null===F||void 0===F?void 0:F.staff,AcceptHandler:function(e,l){w((function(e){return!e})),e&&l&&V&&E({id:V,sid:e,uid:l,status:"Approved"}).then((function(){I(),T(),C(),N(),w((function(e){return!e}))}))},RejectHandler:function(e,l){w((function(e){return!e})),e&&l&&V&&P({id:V,sid:e,uid:l,status:"Rejected"}).then((function(){I(),T(),C(),N(),w((function(e){return!e}))}))},disabled:S})]})})}}}]);
//# sourceMappingURL=3475.e2a62e41.chunk.js.map