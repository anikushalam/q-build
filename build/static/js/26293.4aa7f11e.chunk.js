"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[26293],{8793:function(e,l,a){var i=a(72791),t=a(11105),n=a(80184);l.Z=function(e){var l=e.children;return(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(t.Z,{}),children:l})}},45474:function(e,l,a){var i=a(4942),t=a(1413),n=a(29439),o=a(72791),s=a(38733),d=a(36665),c=a(98094),r=a(97655),u=a(39230),f=a(98734),v=a(84959),_=a(80184);l.Z=function(e){var l=e.onLoginDetailToggle,a=e.loginData,m=e.sid,h=e.onRefetch,x=e.is_staff,b=(0,u.$G)().t,Z=(0,o.useState)({phone:(null===a||void 0===a?void 0:a.userPhoneNumber)||"",email:(null===a||void 0===a?void 0:a.userEmail)||""}),j=(0,n.Z)(Z,2),T=j[0],y=j[1],g=(0,o.useState)(!1),p=(0,n.Z)(g,2),N=p[0],C=p[1],S=(0,v.gY)(),w=(0,n.Z)(S,1)[0],V=(0,v.ZS)(),k=(0,n.Z)(V,1)[0];(0,o.useEffect)((function(){a&&y((function(e){return(0,t.Z)((0,t.Z)({},e),{},{phone:(null===a||void 0===a?void 0:a.userPhoneNumber)||"",email:(null===a||void 0===a?void 0:a.userEmail)||""})}))}),[a]);var I=function(e){y((function(l){return(0,t.Z)((0,t.Z)({},l),{},(0,i.Z)({},e.target.name,e.target.value))}))};return(0,_.jsx)(d.Z,{onClose:l,children:(0,_.jsxs)("div",{className:s.Z.login_details_modal,children:[(0,_.jsx)("h6",{children:b("login_details")}),(0,_.jsx)(c.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,_.jsx)(r.Z,{labelText:b("mobile_number"),placeholder:b("mobile_number_placeholder"),name:"phone",value:T.phone,type:"text",onChange:I}),(0,_.jsx)(r.Z,{labelText:b("email"),placeholder:b("email_placeholder"),name:"email",value:T.email,type:"text",onChange:I}),(0,_.jsx)("button",{className:s.Z.login_details_btn,onClick:function(){C((function(e){return!e})),x?k({login_details:{phone:T.phone,email:T.email,sid:m}}).then((function(){h(),C((function(e){return!e})),l()})).catch({}):w({login_details:{phone:T.phone,email:T.email,sid:m}}).then((function(){h(),C((function(e){return!e})),l()})).catch({})},children:b("update")}),N&&(0,_.jsx)(f.Z,{})]})})}},47167:function(e,l,a){var i=a(1413),t=(a(72791),a(16871)),n=a(43504),o=a(23769),s=a(45639),d=a(80184);l.Z=function(e){var l=e.tabList,a=e.activeIndexTab,c=e.setActiveIndexTab,r=e.customStyleTab,u=e.carryParentState,f=e.showAs,v=e.customStyleLink,_=(0,t.UO)();return(0,d.jsx)("div",{className:s.Z.universal_container,children:f?null===l||void 0===l?void 0:l.map((function(e,l){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:(0,i.Z)((0,i.Z)({},v),{},{opacity:"0.5"}),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},l):(0,d.jsx)(n.rU,{to:"/q/".concat(_.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,i.Z)({},u),style:(0,i.Z)({},v),children:(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:(0,i.Z)({},r),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})})},l)})):null===l||void 0===l?void 0:l.map((function(e,l){return(0,d.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,onClick:function(){return c(null===e||void 0===e?void 0:e.id)},style:(0,i.Z)({},r),children:(0,d.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},l)}))})}},23769:function(e,l,a){a.d(l,{Z:function(){return o}});var i=a(29439),t=a(72791),n=a(80184);var o=function(e){var l=e.children,a=e.onclick,o=(0,t.useState)(!1),s=(0,i.Z)(o,2),d=s[0],c=s[1],r=(0,t.useState)({x:-1,y:-1}),u=(0,i.Z)(r,2),f=u[0],v=u[1];return(0,t.useEffect)((function(){-1!==f.x&&-1!==f.y?(c(!0),setTimeout((function(){return c(!1)}),1e3)):c(!1)}),[f]),(0,t.useEffect)((function(){d||v({x:-1,y:-1})}),[d]),(0,n.jsxs)("div",{className:"ripple_btn",onClick:function(e){v({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),a&&a(e)},children:[d?(0,n.jsx)("span",{className:"ripple"}):"",(0,n.jsx)("span",{className:"content",children:l})]})}},32589:function(e,l,a){var i=a(1413),t=a(29439),n=a(72791),o=a(93097),s=a(55136),d=a(80184);l.Z=function(e){var l=e.labelText1,a=e.labelValue1,c=e.labelText2,r=e.labelValue2,u=e.labelFile1,f=e.labelFile2,v=e.howManyField,_=e.customStyleContainer,m=e.customStyleEachField,h=(0,n.useState)(""),x=(0,t.Z)(h,2),b=x[0],Z=x[1],j=function(e){Z(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:s.Z.each_field_container,style:(0,i.Z)({},_),children:[(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,i.Z)({},m),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[l," : "]}),u?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return j(a)},children:a?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:a})]}),1!==v&&(0,d.jsxs)("div",{className:s.Z.each_field,style:(0,i.Z)({},m),children:[(0,d.jsxs)("p",{className:s.Z.each_field_text,children:[c," : "]}),f?(0,d.jsx)("h6",{className:s.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return j(r)},children:r?"View":"N/A"}):(0,d.jsx)("h6",{className:s.Z.each_field_text_value,children:r})]})]}),b&&(0,d.jsx)(o.Z,{onClose:function(){Z("")},keyValue:b})]})}},88872:function(e,l,a){var i=a(1413),t=a(29439),n=a(72791),o=a(55136),s=a(39230),d=a(89891),c=a(16871),r=a(34314),u=a(80184),f={inputProps:{"aria-label":"Switch demo"}};l.Z=function(e){var l,a,v,_,m,h,x,b,Z,j,T,y=e.textLevel,g=e.onPrevious,p=e.onNext,N=e.onClose,C=e.viewAs,S=e.is_admission,w=e.admissionTitle,V=e.onAdmissionTitle,k=e.is_install,I=e.installTitle,F=e.onInstallTitle,A=e.installmentEdit,E=e.sid,D=e.instituteId,L=e.textLevelInner,M=e.onConfig,P=e.configTitle,U=e.onConfig1,B=e.configTitle1,O=e.isStaff,G=(0,s.$G)().t,R=(0,n.useState)(!1),q=(0,t.Z)(R,2),$=q[0],z=q[1],H=(0,c.TH)();(0,c.UO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.Z.staff_header_container,children:[(0,u.jsxs)("h6",{className:o.Z.staff_header_text,children:[y,L?(0,u.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:L}):""]}),"DEPARTMENT_HEAD"===C?(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:M,style:{color:"#0000ff"},children:P}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:U,style:{color:"#0000ff"},children:B})]}):null,!C&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsxs)("div",{className:o.Z.staff_header_prev,onClick:g,children:[(0,u.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,u.jsx)("span",{children:G("prev")})]}),(0,u.jsxs)("div",{className:o.Z.staff_header_next,onClick:p,children:[(0,u.jsx)("span",{children:G("next")}),(0,u.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:N,children:G("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===C&&(0,u.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w}),O?"":(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:G("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_close,onClick:N,children:G("close_")})]}),"STUDENT_MESSAGE"===(null===(l=H.state)||void 0===l?void 0:l.studentMessaageView)&&"STUDENT_SECTION"!==(null===(a=H.state)||void 0===a?void 0:a.viewAs)&&(0,u.jsx)("div",{className:o.Z.staff_header_function,children:(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:G("student_message")})}),S?(0,u.jsxs)("div",{className:o.Z.admission_actions,children:[k&&(0,u.jsxs)("p",{className:o.Z.staff_header_text,style:{color:"#0000ff"},children:[I,(0,u.jsx)(d.Z,(0,i.Z)((0,i.Z)({},f),{},{checked:A,onChange:F}))]}),"STUDENT_SECTION"===(null===(v=H.state)||void 0===v?void 0:v.viewAs)&&(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:G("student_message")}),(0,u.jsx)("p",{className:o.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:w})]}):""]}),$&&(0,u.jsx)(r.Z,{onClose:function(){return z(!1)},sendStudentList:null!==(_=null===(m=H.state)||void 0===m?void 0:m.sid)&&void 0!==_?_:E,instituteId:null!==(h=null===(x=H.state)||void 0===x?void 0:x.instituteId)&&void 0!==h?h:D,accessAs:null!==(b=null===(Z=H.state)||void 0===Z?void 0:Z.viewAs)&&void 0!==b?b:"INSTITUTE_ADMIN",headId:null!==(j=null===(T=H.state)||void 0===T?void 0:T.headId)&&void 0!==j?j:D})]})}},26293:function(e,l,a){a.r(l),a.d(l,{default:function(){return k}});var i=a(29439),t=a(72791),n=a(8793),o=a(6245),s=a(47167),d=a(69721),c=a(98094),r=a(88872),u=a(39230),f=a(55136),v=a(60600),_=a(8931),m=a(45474),h=a(89064),x=a(16871),b=a(43504),Z=a(98684),j=a(90904),T=a(93638),y=a(48293),g=a(21348),p=a(16925),N=a(80184),C=function(e){var l=e.onRemove,a=e.onClose,i=(0,u.$G)().t;return(0,N.jsx)(y.Z,{onClose:a,children:(0,N.jsxs)("div",{className:p.Z.modal_container,children:[(0,N.jsx)(g.Z,{children:(0,N.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,N.jsx)("div",{className:p.Z.modal_container_header,children:(0,N.jsx)("h6",{children:i("remove_staff")})}),(0,N.jsx)("img",{src:"".concat(Z.J7,"/close.svg"),alt:"close icon",onClick:a})]})}),(0,N.jsx)(j.Z,{}),(0,N.jsx)(g.Z,{customStyle:{paddingTop:"0"},children:(0,N.jsx)(T.Z,{label:"confirm",onAction:l,customStyle:{marginTop:"5rem"}})})]})})},S=function(e){var l=e.onClose,a=e.sid,n=(0,u.$G)().t,s=(0,t.useState)(!1),d=(0,i.Z)(s,2),c=d[0],r=d[1],f=(0,t.useState)(!1),v=(0,i.Z)(f,2),_=v[0],m=v[1],Z=(0,x.UO)(),j=(0,x.s0)(),T=(0,o.Oo)(),y=(0,i.Z)(T,1)[0];return(0,N.jsx)(N.Fragment,{children:_?(0,N.jsx)(C,{onClose:function(){return m(!1)},onRemove:function(){a&&(m(!1),r((function(e){return!e})),y({sid:a}).then((function(){r((function(e){return!e})),j("/q/".concat(Z.username,"/feed"))})).catch({}))}}):(0,N.jsxs)(h.Z,{onClose:l,disabled:c,children:[(0,N.jsx)(b.rU,{to:"/q/".concat(Z.username,"/edit/staff"),state:{openAs:"INSTITUTE_SIDE",sid:a},style:{width:"100%"},children:(0,N.jsx)("h6",{children:n("edit")})}),(0,N.jsx)("h6",{onClick:function(){return m(!0)},children:n("remove")})]})})},w=t.lazy((function(){return Promise.all([a.e(81400),a.e(90599)]).then(a.bind(a,81400))})),V=t.lazy((function(){return Promise.all([a.e(31606),a.e(1239)]).then(a.bind(a,31606))})),k=function(e){var l,a,h,x,b,Z,j,T,y,g,p,C,k,I,F,A=e.sid,E=e.onClose,D=(0,u.$G)().t,L=[{name:D("about"),id:0},{name:D("attendance"),id:1},{name:D("payroll_info"),id:2}],M=(0,t.useState)(0),P=(0,i.Z)(M,2),U=P[0],B=P[1],O=(0,t.useState)(!1),G=(0,i.Z)(O,2),R=G[0],q=G[1],$=(0,t.useState)(""),z=(0,i.Z)($,2),H=z[0],Y=z[1],J=(0,o.CF)({sid:A,skip:!A}),K=J.oneStaffProfile,Q=J.oneStaffProfileRefetch;(0,t.useEffect)((function(){A&&Q()}),[A,Q]);var W=function(){q((function(e){return!e}))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:f.Z.staff_profile_container,children:[(0,N.jsx)(r.Z,{textLevel:D("staff_profile_ins"),onClose:E,viewAs:"INSTITUTE_LOGIN_DETAILS",admissionTitle:D("login_details"),onAdmissionTitle:W,isStaff:!0}),(0,N.jsx)(c.Z,{}),(0,N.jsx)(_.Z,{name:"".concat((null===K||void 0===K||null===(l=K.staff)||void 0===l?void 0:l.staffFirstName)||""," ").concat(null!==K&&void 0!==K&&null!==(a=K.staff)&&void 0!==a&&a.staffMiddleName?null===K||void 0===K||null===(h=K.staff)||void 0===h?void 0:h.staffMiddleName:""," ").concat((null===K||void 0===K||null===(x=K.staff)||void 0===x?void 0:x.staffLastName)||""),designation:"Designations: ".concat((null===K||void 0===K||null===(b=K.staff)||void 0===b?void 0:b.staffDesignationCount)||0),indexNumber:"Index No. ".concat((null===K||void 0===K||null===(Z=K.staff)||void 0===Z?void 0:Z.staffROLLNO)||"-"),dynamicImage:"1"!==(null===K||void 0===K||null===(j=K.staff)||void 0===j?void 0:j.photoId)?"".concat(d.yI,"/").concat(null===K||void 0===K||null===(T=K.staff)||void 0===T?void 0:T.staffProfilePhoto):"/images/ins_default_profile.svg",sid:null===K||void 0===K||null===(y=K.staff)||void 0===y?void 0:y._id,activeUrl:"staff",currentDesignation:"".concat(D("form_current_designation_label"),": ").concat(null!==(g=null===K||void 0===K||null===(p=K.staff)||void 0===p?void 0:p.current_designation)&&void 0!==g?g:""),onStaffInstituteSide:function(){Y(A)}}),(0,N.jsx)(s.Z,{tabList:L,activeIndexTab:U,setActiveIndexTab:B,customStyleTab:{width:"280px"}}),(0,N.jsx)(c.Z,{}),0===U&&(0,N.jsx)(v.Z,{staff:null===K||void 0===K?void 0:K.staff}),1===U&&(0,N.jsx)(n.Z,{children:(0,N.jsx)(V,{sid:null===K||void 0===K||null===(C=K.staff)||void 0===C?void 0:C._id})}),2===U&&(0,N.jsx)(n.Z,{children:(0,N.jsx)(w,{sid:null===K||void 0===K||null===(k=K.staff)||void 0===k?void 0:k._id})}),R&&(0,N.jsx)(m.Z,{onLoginDetailToggle:W,loginData:null===K||void 0===K||null===(I=K.staff)||void 0===I?void 0:I.user,sid:null===K||void 0===K||null===(F=K.staff)||void 0===F?void 0:F._id,onRefetch:Q,is_staff:!0})]}),H&&(0,N.jsx)(S,{onClose:function(){Y("")},sid:H})]})}},60600:function(e,l,a){var i=a(37762),t=a(29439),n=a(72791),o=a(98094),s=a(32589),d=a(52864),c=a(39230),r=a(80184);l.Z=function(e){var l,a,u=e.staff,f=e.viewAs,v=(0,c.$G)().t,_=(0,n.useState)(""),m=(0,t.Z)(_,2),h=m[0],x=m[1];return(0,n.useEffect)((function(){var e;if(null!==u&&void 0!==u&&null!==(e=u.staffDocuments)&&void 0!==e&&e.length){var l,a={},t=(0,i.Z)(null===u||void 0===u?void 0:u.staffDocuments);try{for(t.s();!(l=t.n()).done;){var n=l.value;a[null===n||void 0===n?void 0:n.documentName]=null===n||void 0===n?void 0:n.documentKey}}catch(o){t.e(o)}finally{t.f()}x(a)}}),[null===u||void 0===u?void 0:u.staffDocuments]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{labelTag:v("personal_info"),children:[(0,r.jsx)(s.Z,{labelText1:v("name"),labelValue1:"".concat((null===u||void 0===u?void 0:u.staffFirstName)||""," ").concat(null!==u&&void 0!==u&&u.staffMiddleName?null===u||void 0===u?void 0:u.staffMiddleName:""," ").concat((null===u||void 0===u?void 0:u.staffLastName)||""),labelText2:v("dob"),labelValue2:(null===u||void 0===u?void 0:u.staffDOB)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("gender"),labelValue1:(null===u||void 0===u?void 0:u.staffGender)||"",labelText2:v("mother_name"),labelValue2:(null===u||void 0===u?void 0:u.staffMotherName)||"",customStyleContainer:f?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:v("other_personal"),children:[(0,r.jsx)(s.Z,{labelText1:v("dob"),labelValue1:(null===u||void 0===u?void 0:u.staffBirthPlace)||"",labelText2:v("mobile_bumber"),labelValue2:(null===u||void 0===u?void 0:u.staffPhoneNumber)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("adhar_number"),labelValue1:(null===u||void 0===u?void 0:u.staffAadharNumber)||"",labelText2:v("qualification"),labelValue2:(null===u||void 0===u?void 0:u.staffQualification)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_teaching_type_label"),labelValue1:(null===u||void 0===u?void 0:u.teaching_type)||"",labelText2:v("form_join_date_designation_label"),labelValue2:(null===u||void 0===u?void 0:u.staffJoinDate)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_pan_number_designation_label"),labelValue1:(null===u||void 0===u?void 0:u.staffPanNumber)||"",labelText2:v("form_pf_number_designation_label"),labelValue2:(null===u||void 0===u?void 0:u.staff_pf_number)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form__emp_code_designation_label"),labelValue1:null!==(l=null===u||void 0===u?void 0:u.staff_emp_code)&&void 0!==l?l:"",howManyField:1})]}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:v("i_details"),children:[(0,r.jsx)(s.Z,{labelText1:v("nationality"),labelValue1:(null===u||void 0===u?void 0:u.staffNationality)||"",labelText2:v("cast_category"),labelValue2:(null===u||void 0===u?void 0:u.staffCastCategory)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("religion"),labelValue1:(null===u||void 0===u?void 0:u.staffReligion)||"",labelText2:v("mother_tongue"),labelValue2:(null===u||void 0===u?void 0:u.staffMTongue)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("cast"),labelValue1:(null===u||void 0===u?void 0:u.staffCast)||"",howManyField:1,customStyleContainer:f?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsx)(d.Z,{labelTag:v("address_"),children:(0,r.jsx)(s.Z,{labelText1:v("c_add"),labelValue1:(null===u||void 0===u?void 0:u.staffCurrentAddress)||"",labelText2:v("p_add"),labelValue2:(null===u||void 0===u?void 0:u.staffAddress)||"",customStyleContainer:f?{width:"auto"}:""})}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:v("prev_school_document"),children:[(0,r.jsx)(s.Z,{labelText1:v("prev_school"),labelValue1:(null===u||void 0===u?void 0:u.staffPreviousSchool)||"",labelText2:v("aadhar_back"),labelValue2:null===u||void 0===u?void 0:u.staffAadharBackCard,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("aadhar_front"),labelValue1:null===u||void 0===u?void 0:u.staffAadharFrontCard,labelFile1:!0,labelText2:v("caste_"),labelValue2:null===u||void 0===u?void 0:u.staffCasteCertificatePhoto,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_identity_view_label"),labelValue1:null===h||void 0===h?void 0:h.identityDocument,labelFile1:!0,labelText2:v("form_joining_transfer_letter_view_label"),labelValue2:null===h||void 0===h?void 0:h.joiningTransferLetter,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_leaving_transfer_letter_view_label"),labelValue1:null===h||void 0===h?void 0:h.leavingTransferCertificate,labelFile1:!0,labelText2:v("form_income_certificate_view_label"),labelValue2:null===h||void 0===h?void 0:h.incomeCertificate,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_last_year_marksheet_view_label"),labelValue1:null===h||void 0===h?void 0:h.lastYearMarksheet,labelFile1:!0,labelText2:v("form_nationality_certificate_view_label"),labelValue2:null===h||void 0===h?void 0:h.nationalityCertificate,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("form_domicile_certificate_view_label"),labelValue1:null===h||void 0===h?void 0:h.domicileCertificate,labelFile1:!0,labelText2:v("form_non_creamy_layer_view_label"),labelValue2:null===h||void 0===h?void 0:h.nonCreamyLayerCertificate,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsxs)(d.Z,{labelTag:v("bank_details"),children:[(0,r.jsx)(s.Z,{labelText1:v("form_bank_name_label"),labelValue1:(null===u||void 0===u?void 0:u.staffBankName)||"",labelText2:v("form_ifsc_code_label"),labelValue2:(null===u||void 0===u?void 0:u.staffBankIfsc)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("acnt_holder"),labelValue1:(null===u||void 0===u?void 0:u.staffBankAccountHolderName)||"",labelText2:v("bank_passbook"),labelValue2:null===u||void 0===u?void 0:u.staffBankPassbook,labelFile2:!0,customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("account_holder"),labelValue1:(null===u||void 0===u?void 0:u.staffBankAccount)||"",howManyField:1,customStyleContainer:f?{width:"auto"}:""})]}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""}),(0,r.jsx)(d.Z,{labelTag:v("form_staff_experience_details_label"),children:null===u||void 0===u||null===(a=u.experience)||void 0===a?void 0:a.map((function(e,l){return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(s.Z,{labelText1:v("college_name_label"),labelValue1:(null===e||void 0===e?void 0:e.college_name)||"",labelText2:v("college_year_label"),labelValue2:(null===e||void 0===e?void 0:e.college_year)||"",customStyleContainer:f?{width:"auto"}:""}),(0,r.jsx)(s.Z,{labelText1:v("course_field_label"),labelValue1:(null===e||void 0===e?void 0:e.course_field)||"",howManyField:1,customStyleContainer:f?{width:"auto"}:""})]},l)}))}),(0,r.jsx)(o.Z,{customStyle:f?{width:"100%"}:""})]})}},52864:function(e,l,a){a(72791);var i=a(55136),t=a(80184);l.Z=function(e){var l=e.labelTag,a=e.children;return(0,t.jsxs)("div",{className:i.Z.each_info_container,children:[(0,t.jsx)("h5",{children:l}),a]})}},89064:function(e,l,a){a.d(l,{Z:function(){return d}});var i=a(55336),t=a(48293),n="Modal_modal_menu_card__d0zzt",o=a(90904),s=a(80184),d=function(e){var l=e.onClose,a=e.disabled,d=e.heading,c=e.customStyle,r=e.children;return(0,s.jsx)(t.Z,{onClose:function(){if(a)return null;l()},children:(0,s.jsxs)("div",{className:n,style:c,children:[d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{children:d}),(0,s.jsx)(o.Z,{})]}):null,r,a&&(0,s.jsx)(i.Z,{})]})})}},45639:function(e,l){l.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=26293.4aa7f11e.chunk.js.map