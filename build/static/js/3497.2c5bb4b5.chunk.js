"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3497],{8793:function(e,l,a){var i=a(72791),t=a(11105),n=a(80184);l.Z=function(e){var l=e.children;return(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(t.Z,{}),children:l})}},45474:function(e,l,a){var i=a(4942),t=a(1413),n=a(29439),o=a(72791),s=a(38733),d=a(36665),c=a(98094),r=a(97655),u=a(39230),f=a(98734),v=a(84959),_=a(80184);l.Z=function(e){var l=e.onLoginDetailToggle,a=e.loginData,m=e.sid,x=e.onRefetch,h=e.is_staff,b=(0,u.$G)().t,Z=(0,o.useState)({phone:(null===a||void 0===a?void 0:a.userPhoneNumber)||"",email:(null===a||void 0===a?void 0:a.userEmail)||""}),j=(0,n.Z)(Z,2),T=j[0],y=j[1],g=(0,o.useState)(!1),p=(0,n.Z)(g,2),N=p[0],C=p[1],S=(0,v.gY)(),w=(0,n.Z)(S,1)[0],V=(0,v.ZS)(),k=(0,n.Z)(V,1)[0];(0,o.useEffect)((function(){a&&y((function(e){return(0,t.Z)((0,t.Z)({},e),{},{phone:(null===a||void 0===a?void 0:a.userPhoneNumber)||"",email:(null===a||void 0===a?void 0:a.userEmail)||""})}))}),[a]);var I=function(e){y((function(l){return(0,t.Z)((0,t.Z)({},l),{},(0,i.Z)({},e.target.name,e.target.value))}))};return(0,_.jsx)(d.Z,{onClose:l,children:(0,_.jsxs)("div",{className:s.Z.login_details_modal,children:[(0,_.jsx)("h6",{children:b("login_details")}),(0,_.jsx)(c.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,_.jsx)(r.Z,{labelText:b("mobile_number"),placeholder:b("mobile_number_placeholder"),name:"phone",value:T.phone,type:"text",onChange:I}),(0,_.jsx)(r.Z,{labelText:b("email"),placeholder:b("email_placeholder"),name:"email",value:T.email,type:"text",onChange:I}),(0,_.jsx)("button",{className:s.Z.login_details_btn,onClick:function(){C((function(e){return!e})),h?k({login_details:{phone:T.phone,email:T.email,sid:m}}).then((function(){x(),C((function(e){return!e})),l()})).catch({}):w({login_details:{phone:T.phone,email:T.email,sid:m}}).then((function(){x(),C((function(e){return!e})),l()})).catch({})},children:b("update")}),N&&(0,_.jsx)(f.Z,{})]})})}},93097:function(e,l,a){a(72791);var i=a(12072),t=a(84489),n=a(69721),o=a(80184);l.Z=function(e){var l=e.onClose,a=e.keyValue;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{onClose:l}),(0,o.jsx)(i.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,o.jsx)("img",{src:"".concat(n.yI,"/").concat(a),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},47167:function(e,l,a){var i=a(1413),t=(a(72791),a(16871)),n=a(43504),o=a(23769),s=a(45639),d=a(80184);l.Z=function(e){var l=e.tabList,a=e.activeIndexTab,c=e.setActiveIndexTab,r=e.customStyleTab,u=e.carryParentState,f=e.showAs,v=e.customStyleLink,_=(0,t.UO)();return(0,d.jsx)("div",{className:s.Z.universal_container,children:f?null===l||void 0===l?void 0:l.map((function(e,l){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:(0,i.Z)((0,i.Z)({},v),{},{opacity:"0.5"}),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},l):(0,d.jsx)(n.rU,{to:"/q/".concat(_.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,i.Z)({},u),style:(0,i.Z)({},v),children:(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:(0,i.Z)({},r),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})})},l)})):null===l||void 0===l?void 0:l.map((function(e,l){return(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,onClick:function(){return c(null===e||void 0===e?void 0:e.id)},style:(0,i.Z)({},r),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},l)}))})}},23769:function(e,l,a){a.d(l,{Z:function(){return o}});var i=a(29439),t=a(72791),n=a(80184);var o=function(e){var l=e.children,a=e.onclick,o=(0,t.useState)(!1),s=(0,i.Z)(o,2),d=s[0],c=s[1],r=(0,t.useState)({x:-1,y:-1}),u=(0,i.Z)(r,2),f=u[0],v=u[1];return(0,t.useEffect)((function(){-1!==f.x&&-1!==f.y?(c(!0),setTimeout((function(){return c(!1)}),1e3)):c(!1)}),[f]),(0,t.useEffect)((function(){d||v({x:-1,y:-1})}),[d]),(0,n.jsxs)("div",{className:"ripple_btn",onClick:function(e){v({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),a&&a(e)},children:[d?(0,n.jsx)("span",{className:"ripple"}):"",(0,n.jsx)("span",{className:"content",children:l})]})}},32589:function(e,l,a){var i=a(1413),t=a(29439),n=a(72791),o=a(93097),s=a(55136),d=a(80184);l.Z=function(e){var l=e.labelText1,a=e.labelValue1,c=e.labelText2,r=e.labelValue2,u=e.labelFile1,f=e.labelFile2,v=e.howManyField,_=e.customStyleContainer,m=e.customStyleEachField,x=(0,n.useState)(""),h=(0,t.Z)(x,2),b=h[0],Z=h[1],j=function(e){Z(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:s.Z.each_field_container,style:(0,i.Z)({},_),children:[(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,i.Z)({},m),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[l," : "]}),u?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return j(a)},children:a?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:a})]}),1!==v&&(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,i.Z)({},m),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[c," : "]}),f?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return j(r)},children:r?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:r})]})]}),b&&(0,d.jsx)(o.Z,{onClose:function(){Z("")},keyValue:b})]})}},88872:function(e,l,a){var i=a(1413),t=a(29439),n=a(72791),o=a(55136),s=a(39230),d=a(89891),c=a(16871),r=a(34314),u=a(80184),f={inputProps:{"aria-label":"Switch demo"}};l.Z=function(e){var l,a,v,_,m,x,h,b,Z,j,T,y=e.textLevel,g=e.onPrevious,p=e.onNext,N=e.onClose,C=e.viewAs,S=e.is_admission,w=e.admissionTitle,V=e.onAdmissionTitle,k=e.is_install,I=e.installTitle,F=e.onInstallTitle,A=e.installmentEdit,E=e.sid,D=e.instituteId,L=e.textLevelInner,P=e.onConfig,M=e.configTitle,U=e.onConfig1,B=e.configTitle1,O=e.isStaff,G=(0,s.$G)().t,R=(0,n.useState)(!1),q=(0,t.Z)(R,2),z=q[0],H=q[1],$=(0,c.TH)();(0,c.UO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.Z.staff_header_container,children:[(0,u.jsxs)("h6",{className:o.Z.staff_header_text,children:[y,L?(0,u.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:L}):""]}),"DEPARTMENT_HEAD"===C?(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:P,style:{color:"#0000ff"},children:M}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:U,style:{color:"#0000ff"},children:B})]}):null,!C&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsxs)("div",{className:o.Z.staff_header_prev,onClick:g,children:[(0,u.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,u.jsx)("span",{children:G("prev")})]}),(0,u.jsxs)("div",{className:o.Z.staff_header_next,onClick:p,children:[(0,u.jsx)("span",{children:G("next")}),(0,u.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:N,children:G("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===C&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w}),O?"":(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return H(!0)},style:{color:"#0000ff"},children:G("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:N,children:G("close_")})]}),"STUDENT_MESSAGE"===(null===(l=$.state)||void 0===l?void 0:l.studentMessaageView)&&"STUDENT_SECTION"!==(null===(a=$.state)||void 0===a?void 0:a.viewAs)&&(0,u.jsx)("div",{className:o.Z.staff_header_function,children:(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return H(!0)},style:{color:"#0000ff"},children:G("student_message")})}),S?(0,u.jsxs)("div",{className:o.Z.admission_actions,children:[k&&(0,u.jsxs)("p",{className:o.Z.staff_header_text,style:{color:"#0000ff"},children:[I,(0,u.jsx)(d.Z,(0,i.Z)((0,i.Z)({},f),{},{checked:A,onChange:F}))]}),"STUDENT_SECTION"===(null===(v=$.state)||void 0===v?void 0:v.viewAs)&&(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return H(!0)},style:{color:"#0000ff"},children:G("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w})]}):""]}),z&&(0,u.jsx)(r.Z,{onClose:function(){return H(!1)},sendStudentList:null!==(_=null===(m=$.state)||void 0===m?void 0:m.sid)&&void 0!==_?_:E,instituteId:null!==(x=null===(h=$.state)||void 0===h?void 0:h.instituteId)&&void 0!==x?x:D,accessAs:null!==(b=null===(Z=$.state)||void 0===Z?void 0:Z.viewAs)&&void 0!==b?b:"INSTITUTE_ADMIN",headId:null!==(j=null===(T=$.state)||void 0===T?void 0:T.headId)&&void 0!==j?j:D})]})}},33497:function(e,l,a){a.r(l);var i=a(29439),t=a(72791),n=a(8793),o=a(6245),s=a(47167),d=a(69721),c=a(98094),r=a(88872),u=a(39230),f=a(55136),v=a(60600),_=a(51962),m=a(45474),x=a(80184),h=t.lazy((function(){return Promise.all([a.e(1400),a.e(599)]).then(a.bind(a,81400))})),b=t.lazy((function(){return a.e(263).then(a.bind(a,80263))}));l.default=function(e){var l,a,Z,j,T,y,g,p,N,C,S,w,V,k,I,F=e.sid,A=e.onClose,E=(0,u.$G)().t,D=[{name:E("about"),id:0},{name:E("attendance"),id:1},{name:E("payroll_info"),id:2}],L=(0,t.useState)(0),P=(0,i.Z)(L,2),M=P[0],U=P[1],B=(0,t.useState)(!1),O=(0,i.Z)(B,2),G=O[0],R=O[1],q=(0,o.CF)({sid:F,skip:!F}),z=q.oneStaffProfile,H=q.oneStaffProfileRefetch;(0,t.useEffect)((function(){F&&H()}),[F,H]);var $=function(){R((function(e){return!e}))};return(0,x.jsxs)("div",{className:f.Z.staff_profile_container,children:[(0,x.jsx)(r.Z,{textLevel:E("staff_profile_ins"),onClose:A,viewAs:"INSTITUTE_LOGIN_DETAILS",admissionTitle:E("login_details"),onAdmissionTitle:$,isStaff:!0}),(0,x.jsx)(c.Z,{}),(0,x.jsx)(_.Z,{name:"".concat((null===z||void 0===z||null===(l=z.staff)||void 0===l?void 0:l.staffFirstName)||""," ").concat(null!==z&&void 0!==z&&null!==(a=z.staff)&&void 0!==a&&a.staffMiddleName?null===z||void 0===z||null===(Z=z.staff)||void 0===Z?void 0:Z.staffMiddleName:""," ").concat((null===z||void 0===z||null===(j=z.staff)||void 0===j?void 0:j.staffLastName)||""),designation:"Designations: ".concat((null===z||void 0===z||null===(T=z.staff)||void 0===T?void 0:T.staffDesignationCount)||0),indexNumber:"Index No. ".concat((null===z||void 0===z||null===(y=z.staff)||void 0===y?void 0:y.staffROLLNO)||"-"),dynamicImage:"1"!==(null===z||void 0===z||null===(g=z.staff)||void 0===g?void 0:g.photoId)?"".concat(d.yI,"/").concat(null===z||void 0===z||null===(p=z.staff)||void 0===p?void 0:p.staffProfilePhoto):"/images/ins_default_profile.svg",sid:null===z||void 0===z||null===(N=z.staff)||void 0===N?void 0:N._id,activeUrl:"staff",currentDesignation:"".concat(E("form_current_designation_label"),": ").concat(null!==(C=null===z||void 0===z||null===(S=z.staff)||void 0===S?void 0:S.current_designation)&&void 0!==C?C:"")}),(0,x.jsx)(s.Z,{tabList:D,activeIndexTab:M,setActiveIndexTab:U,customStyleTab:{width:"280px"}}),(0,x.jsx)(c.Z,{}),0===M&&(0,x.jsx)(v.Z,{staff:null===z||void 0===z?void 0:z.staff}),1===M&&(0,x.jsx)(n.Z,{children:(0,x.jsx)(b,{sid:null===z||void 0===z||null===(w=z.staff)||void 0===w?void 0:w._id})}),2===M&&(0,x.jsx)(n.Z,{children:(0,x.jsx)(h,{sid:null===z||void 0===z||null===(V=z.staff)||void 0===V?void 0:V._id})}),G&&(0,x.jsx)(m.Z,{onLoginDetailToggle:$,loginData:null===z||void 0===z||null===(k=z.staff)||void 0===k?void 0:k.user,sid:null===z||void 0===z||null===(I=z.staff)||void 0===I?void 0:I._id,onRefetch:H,is_staff:!0})]})}},60600:function(e,l,a){var i=a(37762),t=a(29439),n=a(72791),o=a(98094),s=a(32589),d=a(52864),c=a(39230),r=a(80184);l.Z=function(e){var l,a=e.staff,u=e.viewAs,f=(0,c.$G)().t,v=(0,n.useState)(""),_=(0,t.Z)(v,2),m=_[0],x=_[1];return(0,n.useEffect)((function(){var e;if(null!==a&&void 0!==a&&null!==(e=a.staffDocuments)&&void 0!==e&&e.length){var l,t={},n=(0,i.Z)(null===a||void 0===a?void 0:a.staffDocuments);try{for(n.s();!(l=n.n()).done;){var o=l.value;t[null===o||void 0===o?void 0:o.documentName]=null===o||void 0===o?void 0:o.documentKey}}catch(s){n.e(s)}finally{n.f()}x(t)}}),[null===a||void 0===a?void 0:a.staffDocuments]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{labelTag:f("personal_info"),children:[(0,r.jsx)(s.Z,{labelText1:f("name"),labelValue1:"".concat((null===a||void 0===a?void 0:a.staffFirstName)||""," ").concat(null!==a&&void 0!==a&&a.staffMiddleName?null===a||void 0===a?void 0:a.staffMiddleName:""," ").concat((null===a||void 0===a?void 0:a.staffLastName)||""),labelText2:f("dob"),labelValue2:(null===a||void 0===a?void 0:a.staffDOB)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("gender"),labelValue1:(null===a||void 0===a?void 0:a.staffGender)||"",labelText2:f("mother_name"),labelValue2:(null===a||void 0===a?void 0:a.staffMotherName)||"",customStyleContainer:u?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:f("other_personal"),children:[(0,r.jsx)(s.Z,{labelText1:f("dob"),labelValue1:(null===a||void 0===a?void 0:a.staffBirthPlace)||"",labelText2:f("mobile_bumber"),labelValue2:(null===a||void 0===a?void 0:a.staffPhoneNumber)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("adhar_number"),labelValue1:(null===a||void 0===a?void 0:a.staffAadharNumber)||"",labelText2:f("qualification"),labelValue2:(null===a||void 0===a?void 0:a.staffQualification)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_teaching_type_label"),labelValue1:(null===a||void 0===a?void 0:a.teaching_type)||"",labelText2:f("form_join_date_designation_label"),labelValue2:(null===a||void 0===a?void 0:a.staffJoinDate)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_pan_number_designation_label"),labelValue1:(null===a||void 0===a?void 0:a.staffPanNumber)||"",labelText2:f("form_pf_number_designation_label"),labelValue2:(null===a||void 0===a?void 0:a.staff_pf_number)||"",customStyleContainer:u?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:f("i_details"),children:[(0,r.jsx)(s.Z,{labelText1:f("nationality"),labelValue1:(null===a||void 0===a?void 0:a.staffNationality)||"",labelText2:f("cast_category"),labelValue2:(null===a||void 0===a?void 0:a.staffCastCategory)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("religion"),labelValue1:(null===a||void 0===a?void 0:a.staffReligion)||"",labelText2:f("mother_tongue"),labelValue2:(null===a||void 0===a?void 0:a.staffMTongue)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("cast"),labelValue1:(null===a||void 0===a?void 0:a.staffCast)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsx)(d.Z,{labelTag:f("address_"),children:(0,r.jsx)(s.Z,{labelText1:f("c_add"),labelValue1:(null===a||void 0===a?void 0:a.staffCurrentAddress)||"",labelText2:f("p_add"),labelValue2:(null===a||void 0===a?void 0:a.staffAddress)||"",customStyleContainer:u?{width:"auto"}:""})}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:f("prev_school_document"),children:[(0,r.jsx)(s.Z,{labelText1:f("prev_school"),labelValue1:(null===a||void 0===a?void 0:a.staffPreviousSchool)||"",labelText2:f("aadhar_back"),labelValue2:null===a||void 0===a?void 0:a.staffAadharBackCard,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("aadhar_front"),labelValue1:null===a||void 0===a?void 0:a.staffAadharFrontCard,labelFile1:!0,labelText2:f("caste_"),labelValue2:null===a||void 0===a?void 0:a.staffCasteCertificatePhoto,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_identity_view_label"),labelValue1:null===m||void 0===m?void 0:m.identityDocument,labelFile1:!0,labelText2:f("form_joining_transfer_letter_view_label"),labelValue2:null===m||void 0===m?void 0:m.joiningTransferLetter,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_leaving_transfer_letter_view_label"),labelValue1:null===m||void 0===m?void 0:m.leavingTransferCertificate,labelFile1:!0,labelText2:f("form_income_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.incomeCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_last_year_marksheet_view_label"),labelValue1:null===m||void 0===m?void 0:m.lastYearMarksheet,labelFile1:!0,labelText2:f("form_nationality_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.nationalityCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("form_domicile_certificate_view_label"),labelValue1:null===m||void 0===m?void 0:m.domicileCertificate,labelFile1:!0,labelText2:f("form_non_creamy_layer_view_label"),labelValue2:null===m||void 0===m?void 0:m.nonCreamyLayerCertificate,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:f("bank_details"),children:[(0,r.jsx)(s.Z,{labelText1:f("form_bank_name_label"),labelValue1:(null===a||void 0===a?void 0:a.staffBankName)||"",labelText2:f("form_ifsc_code_label"),labelValue2:(null===a||void 0===a?void 0:a.staffBankIfsc)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("acnt_holder"),labelValue1:(null===a||void 0===a?void 0:a.staffBankAccountHolderName)||"",labelText2:f("bank_passbook"),labelValue2:null===a||void 0===a?void 0:a.staffBankPassbook,labelFile2:!0,customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("account_holder"),labelValue1:(null===a||void 0===a?void 0:a.staffBankAccount)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""}),(0,r.jsx)(d.Z,{labelTag:f("form_staff_experience_details_label"),children:null===a||void 0===a||null===(l=a.experience)||void 0===l?void 0:l.map((function(e,l){return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(s.Z,{labelText1:f("college_name_label"),labelValue1:(null===e||void 0===e?void 0:e.college_name)||"",labelText2:f("college_year_label"),labelValue2:(null===e||void 0===e?void 0:e.college_year)||"",customStyleContainer:u?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:f("course_field_label"),labelValue1:(null===e||void 0===e?void 0:e.course_field)||"",howManyField:1,customStyleContainer:u?{width:"auto"}:""})]},l)}))}),(0,r.jsx)(o.Z,{customStyle:u?{width:"100%"}:""})]})}},52864:function(e,l,a){a(72791);var i=a(55136),t=a(80184);l.Z=function(e){var l=e.labelTag,a=e.children;return(0,t.jsxs)("div",{className:i.Z.each_info_container,children:[(0,t.jsx)("h5",{children:l}),a]})}},45639:function(e,l){l.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=3497.2c5bb4b5.chunk.js.map