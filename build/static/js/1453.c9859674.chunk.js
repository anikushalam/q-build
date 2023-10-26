"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1453,599],{8793:function(e,t,n){var a=n(72791),i=n(11105),l=n(80184);t.Z=function(e){var t=e.children;return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(i.Z,{}),children:t})}},45474:function(e,t,n){var a=n(4942),i=n(1413),l=n(29439),s=n(72791),o=n(38733),c=n(36665),d=n(98094),r=n(97655),u=n(39230),v=n(98734),f=n(84959),m=n(80184);t.Z=function(e){var t=e.onLoginDetailToggle,n=e.loginData,h=e.sid,_=e.onRefetch,x=e.is_staff,g=(0,u.$G)().t,j=(0,s.useState)({phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""}),N=(0,l.Z)(j,2),p=N[0],Z=N[1],y=(0,s.useState)(!1),S=(0,l.Z)(y,2),T=S[0],I=S[1],A=(0,f.gY)(),b=(0,l.Z)(A,1)[0],C=(0,f.ZS)(),E=(0,l.Z)(C,1)[0];(0,s.useEffect)((function(){n&&Z((function(e){return(0,i.Z)((0,i.Z)({},e),{},{phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""})}))}),[n]);var D=function(e){Z((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.value))}))};return(0,m.jsx)(c.Z,{onClose:t,children:(0,m.jsxs)("div",{className:o.Z.login_details_modal,children:[(0,m.jsx)("h6",{children:g("login_details")}),(0,m.jsx)(d.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,m.jsx)(r.Z,{labelText:g("mobile_number"),placeholder:g("mobile_number_placeholder"),name:"phone",value:p.phone,type:"text",onChange:D}),(0,m.jsx)(r.Z,{labelText:g("email"),placeholder:g("email_placeholder"),name:"email",value:p.email,type:"text",onChange:D}),(0,m.jsx)("button",{className:o.Z.login_details_btn,onClick:function(){I((function(e){return!e})),x?E({login_details:{phone:p.phone,email:p.email,sid:h}}).then((function(){_(),I((function(e){return!e})),t()})).catch({}):b({login_details:{phone:p.phone,email:p.email,sid:h}}).then((function(){_(),I((function(e){return!e})),t()})).catch({})},children:g("update")}),T&&(0,m.jsx)(v.Z,{})]})})}},97655:function(e,t,n){var a=n(1413),i=(n(72791),n(39230)),l=n(38733),s=n(80184);t.Z=function(e){var t=e.labelText,n=e.name,o=e.type,c=e.value,d=e.onChange,r=e.placeholder,u=e.errorShow,v=e.customStyleContainer,f=e.customStyleLabel,m=e.customStyleInput,h=e.inputLength,_=e.reAccount,x=e.disabled,g=(0,i.$G)().t;return(0,s.jsxs)("div",{className:l.Z.join_form_container,style:(0,a.Z)({},v),children:[(0,s.jsxs)("label",{className:l.Z.join_form_label,htmlFor:n,style:(0,a.Z)({},f),children:[t," ",!_&&u&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",g("form_require_label")]}),_&&(0,s.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:_})]}),"tel"===o?(0,s.jsx)("input",{className:l.Z.join_form_input,type:o,value:c,onChange:d,name:n,placeholder:r,maxLength:null!==h&&void 0!==h?h:100,disabled:x,style:m}):(0,s.jsx)("input",{className:l.Z.join_form_input,type:o,value:c,onChange:d,name:n,placeholder:r,disabled:x,style:m})]})}},48773:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(29439),i=n(72791),l=n(54433),s=n(39601),o=n(16871),c=n(6245),d=n(45474),r=n(60600),u=n(80263),v=n(21588),f=n(8793),m=n(98094),h=n(47167),_=n(88872),x=n(38733),g=n(91007),j=n(39230),N=n(78687),p=n(69721),Z=n(55136),y=n(80184),S=function(e){var t=e.dynamicImage,n=e.indexNumber,a=e.designation,i=e.name;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:Z.Z.staff_profile_photo_container,style:{minHeight:"5rem"},children:[(0,y.jsx)("img",{src:t,alt:"staff avatar",className:Z.Z.staff_profile_photo_image}),(0,y.jsxs)("div",{className:Z.Z.staff_profile_photo_info,children:[(0,y.jsx)("h5",{className:Z.Z.staff_profile_photo_name,children:i}),(0,y.jsx)("p",{className:Z.Z.staff_profile_photo_index,children:n}),(0,y.jsx)("p",{className:Z.Z.staff_profile_photo_index,children:a})]})]})})},T=n(4942),I=n(1413),A=n(74289),b=n(36665),C=n(33399),E=n(97655),D=n(98734),M=function(e){var t=e.onRefetch,n=e.leaveConfig,l=e.sid,s=e.onClose,o=(0,j.$G)().t,c=(0,i.useState)({c_l:"",m_l:"",s_l:""}),d=(0,a.Z)(c,2),r=d[0],u=d[1],v=(0,i.useState)(!1),f=(0,a.Z)(v,2),h=f[0],_=f[1],x=(0,A.l6)(),g=(0,a.Z)(x,1)[0];(0,i.useEffect)((function(){var e,t,a;n&&u({c_l:null!==(e=null===n||void 0===n?void 0:n.casual_leave)&&void 0!==e?e:"",m_l:null!==(t=null===n||void 0===n?void 0:n.medical_leave)&&void 0!==t?t:"",s_l:null!==(a=null===n||void 0===n?void 0:n.sick_leave)&&void 0!==a?a:""})}),[n]);var N=function(e){u((function(t){return(0,I.Z)((0,I.Z)({},t),{},(0,T.Z)({},e.target.name,+e.target.value))}))};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(b.Z,{onClose:function(){h||s()},children:[(0,y.jsx)("div",{className:C.Z.add_category_modal,style:{width:"35rem",minHeight:"10rem",height:"fit-content"},children:(0,y.jsxs)("section",{className:C.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,y.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:o("leave_configuration")}),(0,y.jsx)(m.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),(0,y.jsx)(E.Z,{labelText:o("casual_leave"),placeholder:o("casual_leave_placeholder"),name:"c_l",value:null===r||void 0===r?void 0:r.c_l,type:"tel",onChange:N}),(0,y.jsx)(E.Z,{labelText:o("medical_leave"),placeholder:o("medical_leave_placeholder"),name:"m_l",value:null===r||void 0===r?void 0:r.m_l,type:"tel",onChange:N}),(0,y.jsx)(E.Z,{labelText:o("sick_leave"),placeholder:o("sick_leave_placeholder"),name:"s_l",value:null===r||void 0===r?void 0:r.s_l,type:"tel",onChange:N}),(0,y.jsx)("button",{className:C.Z.fee_middle_confirm_button,onClick:function(){l&&(_((function(e){return!e})),g({sid:l,leaveConfig:r}).then((function(){t(),_((function(e){return!e})),s()})).catch({}))},style:{marginTop:"2rem"},children:o("save")})]})}),h&&(0,y.jsx)(D.Z,{})]})})},k=n(49499),w=function(){var e,t,n,Z,T,I,A,b,C,E,D,w,O,F,R,P,U,L,Y,H,G,q,B,V,W,$,z,J=(0,j.$G)().t,X=(0,o.TH)(),Q=(0,o.s0)(),K=[{name:J("about"),id:0},{name:J("attendance"),id:1},{name:J("payroll_info"),id:2}],ee=(0,i.useState)(0),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],ie=(0,i.useState)(!1),le=(0,a.Z)(ie,2),se=le[0],oe=le[1],ce=(0,i.useState)(!1),de=(0,a.Z)(ce,2),re=de[0],ue=de[1],ve=(0,i.useState)(!1),fe=(0,a.Z)(ve,2),me=fe[0],he=fe[1],_e=(0,N.useSelector)((function(e){return e.idChange.id})),xe=(0,g.pu)(_e,{skip:!_e}),ge=xe.data,je=xe.refetch,Ne=(0,c.CF)({sid:null===(e=X.state)||void 0===e?void 0:e.sid,skip:!(null!==(t=X.state)&&void 0!==t&&t.sid)}),pe=Ne.oneStaffProfile,Ze=Ne.oneStaffProfileRefetch;(0,i.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[null===(n=X.state)||void 0===n?void 0:n.sid]);(0,i.useEffect)((function(){_e&&je()}),[_e,je]),(0,i.useEffect)((function(){var e;null!==(e=X.state)&&void 0!==e&&e.sid&&Ze()}),[null===(Z=X.state)||void 0===Z?void 0:Z.sid,Ze]);var ye=function(){ue((function(e){return!e}))},Se=function(){he((function(e){return!e}))};return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:x.Z.navbar,children:"INSTITUTE"===(null===(T=X.state)||void 0===T?void 0:T.viewAs)?(0,y.jsx)(l.default,{status:"home"}):(0,y.jsx)(s.default,{status:"members",profileId:ge?null===ge||void 0===ge||null===(I=ge.user)||void 0===I?void 0:I._id:"",username:null===ge||void 0===ge||null===(A=ge.user)||void 0===A?void 0:A.username,name:null===ge||void 0===ge||null===(b=ge.user)||void 0===b?void 0:b.userLegalName,photoId:null===ge||void 0===ge||null===(C=ge.user)||void 0===C?void 0:C.photoId,profilePhoto:null===ge||void 0===ge||null===(E=ge.user)||void 0===E?void 0:E.profilePhoto,profileData:null===ge||void 0===ge?void 0:ge.user})}),(0,y.jsx)("div",{className:x.Z.goback_container,id:"scrollView",children:(0,y.jsxs)("div",{className:x.Z.goback_container_text,onClick:function(){Q(-1)},children:[(0,y.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,y.jsx)("h6",{className:x.Z.goback_container_text_go,children:J("go_back")})]})}),(0,y.jsxs)("div",{className:x.Z.student_from_container,style:{marginBottom:"1rem"},children:[(0,y.jsx)(_.Z,{textLevel:J("staff_profile_ins"),viewAs:"DEPARTMENT_HEAD",configTitle:J("leave_setting"),onConfig:ye,configTitle1:J("request_c_off_leave"),onConfig1:Se}),(0,y.jsx)(m.Z,{customStyle:{width:"100%"}}),(0,y.jsx)(S,{name:"".concat((null===pe||void 0===pe||null===(D=pe.staff)||void 0===D?void 0:D.staffFirstName)||""," ").concat(null!==pe&&void 0!==pe&&null!==(w=pe.staff)&&void 0!==w&&w.staffMiddleName?null===pe||void 0===pe||null===(O=pe.staff)||void 0===O?void 0:O.staffMiddleName:""," ").concat((null===pe||void 0===pe||null===(F=pe.staff)||void 0===F?void 0:F.staffLastName)||""),designation:"Designations: ".concat((null===pe||void 0===pe||null===(R=pe.staff)||void 0===R?void 0:R.staffDesignationCount)||0),indexNumber:"Index No. ".concat((null===pe||void 0===pe||null===(P=pe.staff)||void 0===P?void 0:P.staffROLLNO)||"-"),dynamicImage:null!==pe&&void 0!==pe&&null!==(U=pe.staff)&&void 0!==U&&U.staffProfilePhoto?"".concat(p.yI,"/").concat(null===pe||void 0===pe||null===(L=pe.staff)||void 0===L?void 0:L.staffProfilePhoto):"/images/ins_default_profile.svg"}),(0,y.jsx)("div",{style:{marginTop:"1.7rem"}}),(0,y.jsx)(h.Z,{tabList:K,activeIndexTab:ne,setActiveIndexTab:ae,customStyleTab:{width:"33.3%"}}),(0,y.jsx)(m.Z,{customStyle:{width:"100%"}}),0===ne&&(0,y.jsx)(r.Z,{staff:null===pe||void 0===pe?void 0:pe.staff}),1===ne&&(0,y.jsx)(f.Z,{children:(0,y.jsx)(u.default,{sid:null===pe||void 0===pe||null===(Y=pe.staff)||void 0===Y?void 0:Y._id})}),2===ne&&(0,y.jsx)(f.Z,{children:(0,y.jsx)(v.default,{sid:null===pe||void 0===pe||null===(H=pe.staff)||void 0===H?void 0:H._id})})]}),se&&(0,y.jsx)(d.Z,{onLoginDetailToggle:function(){oe((function(e){return!e}))},loginData:null===pe||void 0===pe||null===(G=pe.staff)||void 0===G?void 0:G.user,sid:null===pe||void 0===pe||null===(q=pe.staff)||void 0===q?void 0:q._id,onRefetch:Ze,is_staff:!0}),re&&(0,y.jsx)(M,{onRefetch:Ze,sid:null===pe||void 0===pe||null===(B=pe.staff)||void 0===B?void 0:B._id,onClose:ye,leaveConfig:{casual_leave:null===pe||void 0===pe||null===(V=pe.staff)||void 0===V?void 0:V.casual_leave,medical_leave:null===pe||void 0===pe||null===(W=pe.staff)||void 0===W?void 0:W.medical_leave,sick_leave:null===pe||void 0===pe||null===($=pe.staff)||void 0===$?void 0:$.sick_leave}}),me&&(0,y.jsx)(k.Z,{createdBy:"OWN_PROFILE",staffId:null===pe||void 0===pe||null===(z=pe.staff)||void 0===z?void 0:z._id,onRefetch:Ze,onClose:Se})]})}},47167:function(e,t,n){var a=n(1413),i=(n(72791),n(16871)),l=n(43504),s=n(23769),o=n(45639),c=n(80184);t.Z=function(e){var t=e.tabList,n=e.activeIndexTab,d=e.setActiveIndexTab,r=e.customStyleTab,u=e.carryParentState,v=e.showAs,f=e.customStyleLink,m=(0,i.UO)();return(0,c.jsx)("div",{className:o.Z.universal_container,children:v?null===t||void 0===t?void 0:t.map((function(e,t){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,c.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,a.Z)((0,a.Z)({},f),{},{opacity:"0.5"}),children:(0,c.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,c.jsx)(l.rU,{to:"/q/".concat(m.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,a.Z)({},u),style:(0,a.Z)({},f),children:(0,c.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,style:(0,a.Z)({},r),children:(0,c.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})})},t)})):null===t||void 0===t?void 0:t.map((function(e,t){return(0,c.jsx)("div",{className:n===(null===e||void 0===e?void 0:e.id)?"".concat(o.Z.universal_container_item," ").concat(o.Z.universal_container_item_active):o.Z.universal_container_item,onClick:function(){return d(null===e||void 0===e?void 0:e.id)},style:(0,a.Z)({},r),children:(0,c.jsx)(s.Z,{children:null===e||void 0===e?void 0:e.name})},t)}))})}},23769:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(29439),i=n(72791),l=n(80184);var s=function(e){var t=e.children,n=e.onclick,s=(0,i.useState)(!1),o=(0,a.Z)(s,2),c=o[0],d=o[1],r=(0,i.useState)({x:-1,y:-1}),u=(0,a.Z)(r,2),v=u[0],f=u[1];return(0,i.useEffect)((function(){-1!==v.x&&-1!==v.y?(d(!0),setTimeout((function(){return d(!1)}),1e3)):d(!1)}),[v]),(0,i.useEffect)((function(){c||f({x:-1,y:-1})}),[c]),(0,l.jsxs)("div",{className:"ripple_btn",onClick:function(e){f({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),n&&n(e)},children:[c?(0,l.jsx)("span",{className:"ripple"}):"",(0,l.jsx)("span",{className:"content",children:t})]})}},75946:function(e,t,n){var a=n(1413),i=n(29439),l=n(72791),s=n(36665),o=n(98094),c=n(39230),d=n(33399),r=n(72952),u=n(98734),v=n(6245),f=n(16871),m=n(80184);t.Z=function(e){var t=e.onClose,n=e.messageId,h=e.headId,_=e.viewAs,x=e.sendStudentList,g=e.isInstitute,j=e.isStudentProfile,N=e.carryParentState,p=e.toRedirectUrl,Z=e.instituteId,y=(0,c.$G)().t,S=(0,l.useState)(!1),T=(0,i.Z)(S,2),I=T[0],A=T[1],b=(0,l.useState)(!1),C=(0,i.Z)(b,2),E=C[0],D=C[1],M=(0,v.Z3)(),k=(0,i.Z)(M,1)[0],w=(0,v.zx)(),O=(0,i.Z)(w,1)[0],F=(0,l.useState)({alarm_mode:"APP_NOTIFICATION",content:""}),R=(0,i.Z)(F,2),P=R[0],U=R[1],L=(0,f.s0)();return(0,m.jsxs)(s.Z,{onClose:t,children:[(0,m.jsx)("div",{className:d.Z.add_category_modal,style:{width:"30rem",minHeight:"10rem",height:"fit-content",maxHeight:"35rem",overflowX:"hidden",scrollBehavior:"smooth"},children:(0,m.jsxs)("section",{className:d.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,m.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:y("student_message")}),(0,m.jsx)(o.Z,{customStyle:{width:"100%",marginTop:"0.7rem",marginBottom:"1rem"}}),(0,m.jsxs)("section",{className:d.Z.notify_container,onClick:function(){return U((function(e){return(0,a.Z)((0,a.Z)({},e),{},{alarm_mode:"APP_NOTIFICATION"})}))},children:[(0,m.jsx)("img",{src:"APP_NOTIFICATION"===P.alarm_mode?"/images/department/radio-blue-icon.svg":"/images/department/radio-gray-icon.svg",alt:"icon"}),(0,m.jsxs)("div",{className:d.Z.notify_text,children:[(0,m.jsx)("h6",{children:y("Notify_with_In_app_Notification")}),(0,m.jsx)("p",{children:y("Notify_with_In_app_Notification_note")})]})]}),(0,m.jsxs)("section",{className:d.Z.notify_container,children:[(0,m.jsx)("img",{src:"EMAIL_NOTIFICATION"===P.alarm_mode?"/images/department/radio-blue-icon.svg":"/images/department/radio-gray-icon.svg",alt:"icon"}),(0,m.jsxs)("div",{className:d.Z.notify_text,children:[(0,m.jsx)("h6",{children:y("Notify_On_Email_and_SMS")}),(0,m.jsx)("p",{children:y("Notify_On_Email_and_SMS_note")})]})]}),"APP_NOTIFICATION"===P.alarm_mode&&(0,m.jsx)(r.Z,{labelText:y("student_message_label"),placeholder:y("student_message_label_placeholder"),name:"content",value:P.content,type:"text",onChange:function(e){return U((function(t){return(0,a.Z)((0,a.Z)({},t),{},{content:e.target.value})}))},errorShow:E}),(0,m.jsx)("button",{onClick:function(){P.content?j?n&&P.alarm_mode&&(null===x||void 0===x?void 0:x.length)>0&&Z&&(A((function(e){return!e})),O({sendMessage:{message:P.content,from:null!==h&&void 0!==h?h:"",type:"ADMISSION_ADMIN"===_?"Admission Head":"FINANCE_MANAGER"===_?"Finance Head":"CERTIFICATE_AUTHORITY"===_?"Certificate Authority":"STUDENT_SECTION"===_?"Student Section":"ID_CARD_SECTION"===_?"Id Card Authority":"Institute Admin",fid:null!==n&&void 0!==n?n:"",alarm_mode:P.alarm_mode,sid:x,flow:g?"INSTITUTE_ADMIN":"Other"},id:Z}).then((function(){t(),A((function(e){return!e}))})).catch({})):n&&P.alarm_mode&&(null===x||void 0===x?void 0:x.length)>0&&Z&&(A((function(e){return!e})),k({sendMessage:{message:P.content,from:null!==h&&void 0!==h?h:"",type:"ADMISSION_ADMIN"===_?"Admission Head":"FINANCE_MANAGER"===_?"Finance Head":"CERTIFICATE_AUTHORITY"===_?"Certificate Authority":"STUDENT_SECTION"===_?"Student Section":"ID_CARD_SECTION"===_?"Id Card Authority":"Institute Admin",fid:null!==n&&void 0!==n?n:"",alarm_mode:P.alarm_mode,filtered_arr:x,flow:g?"INSTITUTE_ADMIN":"Other"},id:Z}).then((function(){t(),L(p,{state:N}),A((function(e){return!e}))})).catch({})):D(!0)},className:d.Z.fee_middle_confirm_button,style:{marginTop:"4rem"},children:y("confirm")})]})}),I&&(0,m.jsx)(u.Z,{})]})}},80263:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(37762),i=n(93433),l=n(29439),s=n(72791),o="StaffAttendence_staffAttendence__MFnw8",c="StaffAttendence_calendar__VOJ9u",d="StaffAttendence_arrColors__a1o1Q",r="StaffAttendence_colours__I3HFI",u="StaffAttendence_clr__xZWUB",v="StaffAttendence_absent__P-9kb",f="StaffAttendence_holiday__8rG2R",m="StaffAttendence_leave__qdaic",h="StaffAttendence_percentage__9xjfT",_="StaffAttendence_presentcount__4XtNw",x="StaffAttendence_absentcount__-8zdi",g=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],j=["January","February","March","April","May","June","July","August","September","October","November","December"],N=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j,n=new Date,a="".concat(n.getDate(),"-").concat(n.getMonth()+1,"-").concat(n.getFullYear()),o=[1,2,3,4,5,6,0],c=(0,s.useState)(n),d=(0,l.Z)(c,2),r=d[0],u=d[1],v=new Date(r.getFullYear(),r.getMonth()+1,0),f=new Date(r.getFullYear(),r.getMonth(),0),m=v.getDate(),h=new Date(r.getFullYear(),r.getMonth(),1).getDay(),_=o.indexOf(h)+1,x=f.getDate()-o.indexOf(h)+1,N=1,p=1,Z={},y=1;y<7;y++)for(var S=1;S<8;S++)Z[y]||(Z[y]=[]),1===y?S<_?(Z[y]=[].concat((0,i.Z)(Z[y]),[{classes:"in-prev-month",date:"".concat(x,"-").concat(0===r.getMonth()?12:r.getMonth(),"-").concat(0===r.getMonth()?r.getFullYear()-1:r.getFullYear()),value:x}]),x++):(Z[y]=[].concat((0,i.Z)(Z[y]),[{classes:"",date:"".concat(N,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:N}]),N++):y>1&&N<m+1?(Z[y]=[].concat((0,i.Z)(Z[y]),[{classes:"",date:"".concat(N,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:N}]),N++):(Z[y]=[].concat((0,i.Z)(Z[y]),[{classes:"in-next-month",date:"".concat(p,"-").concat(r.getMonth()+2===13?1:r.getMonth()+2,"-").concat(r.getMonth()+2===13?r.getFullYear()+1:r.getFullYear()),value:p}]),p++);return{daysShort:e,monthNames:t,todayFormatted:a,calendarRows:Z,selectedDate:r,getPrevMonth:function(){u((function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}))},getNextMonth:function(){u((function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}))}}},p=n(80184),Z=function(e){var t=e.presentArr,n=e.absentArr,a=e.holidayArr,i=e.leavesArr,l=N(),o=l.calendarRows,c=l.selectedDate,d=l.todayFormatted,r=l.daysShort,u=l.monthNames,v=l.getNextMonth,f=l.getPrevMonth,m=function(e){var t=e.split("-"),n=t[0]>9?t[0]:"0".concat(t[0]),a=t[1]>9?t[1]:"0".concat(t[1]),i=t[2];return"".concat(n,"/").concat(a,"/").concat(i)};return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)("div",{className:"calenderheader",children:[(0,p.jsx)("div",{className:"monthbtn",onClick:f,children:(0,p.jsx)("img",{alt:"not found",src:"/images/members/arrow-left.svg"})}),(0,p.jsxs)("div",{className:"yearmonth",children:[(0,p.jsx)("h6",{children:"".concat(u[c.getMonth()])}),(0,p.jsx)("p",{children:"".concat(c.getFullYear())})]}),(0,p.jsx)("div",{className:"monthbtn",onClick:v,children:(0,p.jsx)("img",{alt:"not found",src:"/images/members/arrow-right.svg"})})]}),(0,p.jsxs)("table",{className:"table",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:r.map((function(e){return(0,p.jsx)("th",{className:"day",children:e},e)}))})}),(0,p.jsx)("tbody",{children:Object.values(o).map((function(e){return(0,p.jsx)("tr",{children:e.map((function(e){return e.date===d?null!==i&&void 0!==i&&i.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date "),children:(0,p.jsx)("div",{className:"datediv aaji leave",children:e.value})},e.date):null!==t&&void 0!==t&&t.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date "),children:(0,p.jsx)("div",{className:"datediv aaji",children:e.value})},e.date):null!==n&&void 0!==n&&n.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date "),children:(0,p.jsx)("div",{className:"datediv aaji absent",children:e.value})},e.date):null!==a&&void 0!==a&&a.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date "),children:(0,p.jsx)("div",{className:"datediv aaji holiday",children:e.value})},e.date):(0,p.jsx)("td",{className:"".concat(e.classes," date "),children:(0,p.jsx)("div",{className:"datediv aaji",children:e.value})},e.date):null!==t&&void 0!==t&&t.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date"),children:(0,p.jsx)("div",{className:"datediv present",children:e.value})},e.date):null!==n&&void 0!==n&&n.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date"),children:(0,p.jsx)("div",{className:"datediv absent",children:e.value})},e.date):null!==a&&void 0!==a&&a.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date"),children:(0,p.jsx)("div",{className:"datediv holiday",children:e.value})},e.date):null!==i&&void 0!==i&&i.includes(m(e.date))?(0,p.jsx)("td",{className:"".concat(e.classes," date"),children:(0,p.jsx)("div",{className:"datediv leave",children:e.value})},e.date):(0,p.jsx)("td",{className:"".concat(e.classes," date"),children:(0,p.jsx)("div",{className:"datediv",children:e.value})},e.date)}))},e[0].date)}))})]})]})},y=n(39230),S=n(65313);var T=function(e){var t,n,g=e.sid,j=new Date,N=(0,y.$G)().t,T=j.toISOString().split("-"),I=+T[1]>9?+T[1]:"0".concat(+T[1]),A=s.useState("Month"),b=(0,l.Z)(A,2),C=b[0],E=b[1],D=(0,S.QW)({sid:g,month:"Month"===C?I:"",year:+T[0]}),M=D.staffCalenderAttendance,k=D.staffCalenderAttendanceRefetch,w=s.useState([]),O=(0,l.Z)(w,2),F=O[0],R=O[1],P=s.useState([]),U=(0,l.Z)(P,2),L=U[0],Y=U[1],H=s.useState([]),G=(0,l.Z)(H,2),q=G[0],B=G[1];s.useEffect((function(){if(M&&(R((0,i.Z)(null===M||void 0===M?void 0:M.presentArray)),Y((0,i.Z)(null===M||void 0===M?void 0:M.absentArray)),null!==M&&void 0!==M&&M.leaves)){var e,t=[],n=(0,a.Z)(null===M||void 0===M?void 0:M.leaves);try{for(n.s();!(e=n.n()).done;){var l=e.value;t.push.apply(t,(0,i.Z)(l.date))}}catch(s){n.e(s)}finally{n.f()}B(t)}}),[M]),s.useEffect((function(){k()}),[C]);var V=function(e){E(e)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:o,children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(Z,{presentArr:F,absentArr:L,holidayArr:[],leavesArr:q}),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("div",{className:"".concat(u," ").concat(v),children:N("absent")}),(0,p.jsx)("div",{className:"".concat(u," ").concat(f),children:N("holiday_")}),(0,p.jsx)("div",{className:"".concat(u," ").concat(m),children:N("leave")})]})]}),(0,p.jsxs)("div",{className:r,children:[(0,p.jsxs)("div",{class:"form-check",onClick:function(){return V("Month")},children:[(0,p.jsx)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",checked:!0}),(0,p.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:N("monthly")})]}),(0,p.jsxs)("div",{class:"form-check",onClick:function(){return V("Year")},children:[(0,p.jsx)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),(0,p.jsx)("label",{class:"form-check-label",for:"flexRadioDefault2",children:N("yearly")})]})]})]}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("p",{children:N("present_count")}),(0,p.jsxs)("p",{children:[null===M||void 0===M||null===(t=M.presentArray)||void 0===t?void 0:t.length," ",N("days")," "]}),(0,p.jsxs)("p",{children:[null===M||void 0===M?void 0:M.present,"%"]})]}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("p",{children:N("absent_count")}),(0,p.jsxs)("p",{children:[null===M||void 0===M||null===(n=M.absentArray)||void 0===n?void 0:n.length," ",N("days")]}),(0,p.jsxs)("p",{children:[null===M||void 0===M?void 0:M.absent,"%"]})]})]})]})}},88872:function(e,t,n){var a=n(1413),i=n(29439),l=n(72791),s=n(55136),o=n(39230),c=n(89891),d=n(75946),r=n(16871),u=n(80184),v={inputProps:{"aria-label":"Switch demo"}};t.Z=function(e){var t,n,f,m,h,_,x,g,j,N,p,Z,y,S,T,I,A,b,C,E,D=e.textLevel,M=e.onPrevious,k=e.onNext,w=e.onClose,O=e.viewAs,F=e.is_admission,R=e.admissionTitle,P=e.onAdmissionTitle,U=e.is_install,L=e.installTitle,Y=e.onInstallTitle,H=e.installmentEdit,G=e.sid,q=e.instituteId,B=e.textLevelInner,V=e.onConfig,W=e.configTitle,$=e.onConfig1,z=e.configTitle1,J=(0,o.$G)().t,X=(0,l.useState)(!1),Q=(0,i.Z)(X,2),K=Q[0],ee=Q[1],te=(0,r.TH)(),ne=(0,r.UO)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:s.Z.staff_header_container,children:[(0,u.jsxs)("h6",{className:s.Z.staff_header_text,children:[D,B?(0,u.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:B}):""]}),"DEPARTMENT_HEAD"===O?(0,u.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:V,style:{color:"#0000ff"},children:W}),(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:$,style:{color:"#0000ff"},children:z})]}):null,!O&&(0,u.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,u.jsxs)("div",{className:s.Z.staff_header_prev,onClick:M,children:[(0,u.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,u.jsx)("span",{children:J("prev")})]}),(0,u.jsxs)("div",{className:s.Z.staff_header_next,onClick:k,children:[(0,u.jsx)("span",{children:J("next")}),(0,u.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,u.jsx)("p",{className:s.Z.staff_header_close,onClick:w,children:J("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===O&&(0,u.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:P,style:{color:"#0000ff"},children:R}),(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return ee(!0)},style:{color:"#0000ff"},children:J("student_message")}),(0,u.jsx)("p",{className:s.Z.staff_header_close,onClick:w,children:J("close_")})]}),"STUDENT_MESSAGE"===(null===(t=te.state)||void 0===t?void 0:t.studentMessaageView)&&"STUDENT_SECTION"!==(null===(n=te.state)||void 0===n?void 0:n.viewAs)&&(0,u.jsx)("div",{className:s.Z.staff_header_function,children:(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return ee(!0)},style:{color:"#0000ff"},children:J("student_message")})}),F?(0,u.jsxs)("div",{className:s.Z.admission_actions,children:[U&&(0,u.jsxs)("p",{className:s.Z.staff_header_text,style:{color:"#0000ff"},children:[L,(0,u.jsx)(c.Z,(0,a.Z)((0,a.Z)({},v),{},{checked:H,onChange:Y}))]}),"STUDENT_SECTION"===(null===(f=te.state)||void 0===f?void 0:f.viewAs)&&(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return ee(!0)},style:{color:"#0000ff"},children:J("student_message")}),(0,u.jsx)("p",{className:s.Z.staff_header_text,onClick:P,style:{color:"#0000ff"},children:R})]}):""]}),K&&(0,u.jsx)(d.Z,{onClose:function(){return ee(!1)},isStudentProfile:!0,viewAs:null!==(m=null===(h=te.state)||void 0===h?void 0:h.viewAs)&&void 0!==m?m:"INSTITUTE_ADMIN",headId:null!==(_=null===(x=te.state)||void 0===x?void 0:x.headId)&&void 0!==_?_:q,messageId:null!==(g=null===(j=te.state)||void 0===j?void 0:j.messageId)&&void 0!==g?g:q,sendStudentList:null!==(N=null===(p=te.state)||void 0===p?void 0:p.sid)&&void 0!==N?N:G,isInstitute:"STUDENT_MESSAGE"!==(null===(Z=te.state)||void 0===Z?void 0:Z.studentMessaageView),toRedirectUrl:"STUDENT_MESSAGE"===(null===(y=te.state)||void 0===y?void 0:y.studentMessaageView)?"FINANCE_MANAGER"===(null===(S=te.state)||void 0===S?void 0:S.viewAs)?"/q/".concat(ne.username,"/member/finance?a=student-message"):"ADMISSION_ADMIN"===(null===(T=te.state)||void 0===T?void 0:T.viewAs)?"/q/".concat(ne.username,"/member/admission?a=student-message"):"ID_CARD_SECTION"===(null===(I=te.state)||void 0===I?void 0:I.viewAs)?"/q/".concat(ne.username,"/member/idcard?a=student-message"):"CERTIFICATE_AUTHORITY"===(null===(A=te.state)||void 0===A?void 0:A.viewAs)?"/q/".concat(ne.username,"/member/certificate?a=student-message"):"STUDENT_SECTION"===(null===(b=te.state)||void 0===b?void 0:b.viewAs)?"/q/".concat(ne.username,"/member/promote?a=student-message"):"/q/".concat(ne.username,"/student?a=student-message"):"/q/".concat(ne.username,"/student?a=student-message"),carryParentState:te.state,instituteId:null!==(C=null===(E=te.state)||void 0===E?void 0:E.instituteId)&&void 0!==C?C:q})]})}},45639:function(e,t){t.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=1453.c9859674.chunk.js.map