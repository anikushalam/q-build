"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[33413],{57387:function(e,t,n){var i=n(1413),o=(n(72791),n(49384)),l=n(78499),s=n(80184);t.Z=function(e){var t=e.buttonText,n=e.disabled,d=e.customStyleButton,a=e.customStyleButtonText,u=e.onAction,c=e.shwoLoader;return(0,s.jsxs)("button",{disabled:n,style:(0,i.Z)({},d),className:l.Z.button_main,onClick:u,children:[(0,s.jsx)("span",{style:(0,i.Z)({},a),children:t}),n&&c&&(0,s.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,s.jsx)(o.Z,{})})]})}},8793:function(e,t,n){var i=n(72791),o=n(11105),l=n(80184);t.Z=function(e){var t=e.children;return(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(o.Z,{}),children:t})}},28497:function(e,t,n){n.d(t,{r:function(){return s}});var i=n(74165),o=n(15861),l=n(56379),s=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o,s,d,a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u={key:t.key,amount:t.amount,currency:"INR",name:"Qviple Payment",order_id:t.oid,callback_url:"".concat(l.F,"/pay/verify?payment_module_id=").concat(t.mid,"&payment_module_type=").concat(t.type,"&payment_by_end_user_id=").concat(t.pay_by,"&payment_to_end_user_id=").concat(t.pay_to,"&payment_amount=").concat(t.amount,"&ad_status_id=").concat(t.status,"&payment_amount_charges=").concat(t.amount_nocharge,"&payment_installment=").concat(t.installment_type,"&razor_key=").concat(null!==(n=t.razor_key)&&void 0!==n?n:null,"&razor_author=").concat(t.razor_author,"&ad_install=").concat(t.is_install,"&month=").concat(t.h_month,"&payment_card_type=").concat(t.payment_type_as,"&payment_remain_1=").concat(null!==(o=null===t||void 0===t?void 0:t.is_remain_payment)&&void 0!==o?o:null,"&payment_book_id=").concat(null!==(s=null===t||void 0===t?void 0:t.book_id)&&void 0!==s?s:"","&payment_card_id=").concat(null!==(d=null===t||void 0===t?void 0:t.payment_card_id)&&void 0!==d?d:null,"&student_data=").concat(null!==(a=null===t||void 0===t?void 0:t.student_data)&&void 0!==a?a:null),notes:{address:"Razorpay Corporate Office"},theme:{color:"#f05151"}},new window.Razorpay(u).open();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},45474:function(e,t,n){var i=n(4942),o=n(1413),l=n(29439),s=n(72791),d=n(38733),a=n(36665),u=n(98094),c=n(97655),r=n(39230),v=n(98734),_=n(84959),m=n(80184);t.Z=function(e){var t=e.onLoginDetailToggle,n=e.loginData,f=e.sid,h=e.onRefetch,x=e.is_staff,p=(0,r.$G)().t,Z=(0,s.useState)({phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""}),j=(0,l.Z)(Z,2),T=j[0],y=j[1],N=(0,s.useState)(!1),g=(0,l.Z)(N,2),S=g[0],C=g[1],b=(0,_.gY)(),A=(0,l.Z)(b,1)[0],I=(0,_.ZS)(),E=(0,l.Z)(I,1)[0];(0,s.useEffect)((function(){n&&y((function(e){return(0,o.Z)((0,o.Z)({},e),{},{phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""})}))}),[n]);var k=function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e.target.name,e.target.value))}))};return(0,m.jsx)(a.Z,{onClose:t,children:(0,m.jsxs)("div",{className:d.Z.login_details_modal,children:[(0,m.jsx)("h6",{children:p("login_details")}),(0,m.jsx)(u.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,m.jsx)(c.Z,{labelText:p("mobile_number"),placeholder:p("mobile_number_placeholder"),name:"phone",value:T.phone,type:"text",onChange:k}),(0,m.jsx)(c.Z,{labelText:p("email"),placeholder:p("email_placeholder"),name:"email",value:T.email,type:"text",onChange:k}),(0,m.jsx)("button",{className:d.Z.login_details_btn,onClick:function(){C((function(e){return!e})),x?E({login_details:{phone:T.phone,email:T.email,sid:f}}).then((function(){h(),C((function(e){return!e})),t()})).catch({}):A({login_details:{phone:T.phone,email:T.email,sid:f}}).then((function(){h(),C((function(e){return!e})),t()})).catch({})},children:p("update")}),S&&(0,m.jsx)(v.Z,{})]})})}},34219:function(e,t,n){n(72791);var i=n(11575),o=n(80184);t.Z=function(e){var t=e.customStyleContainer,n=e.title,l=e.subtitle,s=e.costomTextTitleStyle,d=e.costomTextSubtitleStyle;return(0,o.jsxs)("div",{className:i.Z.empty_container,style:t,children:[n&&(0,o.jsx)("h6",{style:s,children:n}),l&&(0,o.jsx)("p",{style:d,children:l})]})}},51174:function(e,t,n){var i=n(29439),o=n(72791),l=n(12072),s=n(84489),d=n(16871),a=n(43504),u=n(87049),c=n(24582),r=n(98734),v=n(97655),_=n(57387),m=n(39230),f=n(80184),h=["STUDENT_SECTION","ADMISSION_ADMIN"];t.Z=function(e){var t=e.onClose,n=e.sid,x=e.openAs,p=(0,m.$G)().t,Z=(0,d.UO)(),j=(0,d.s0)(),T=(0,c.YK)(),y=(0,i.Z)(T,1)[0],N=(0,o.useState)(!1),g=(0,i.Z)(N,2),S=g[0],C=g[1],b=(0,o.useState)(!0),A=(0,i.Z)(b,2),I=A[0],E=A[1],k=(0,o.useState)(""),w=(0,i.Z)(k,2),D=w[0],L=w[1],R=(0,o.useState)(!1),O=(0,i.Z)(R,2),U=O[0],P=O[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{onClose:t}),(0,f.jsxs)(l.Z,{customStyle:{zIndex:"1200"},children:[(0,f.jsx)("div",{className:u.Z.edit_modal_container,style:U?{width:"auto",height:"auto"}:{width:"200px"},children:U?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v.Z,{labelText:p("type_confirm_to_continue"),placeholder:"type here 'Confirm'",name:"removeStudent",value:D,type:"text",onChange:function(e){"Confirm"===e.target.value&&E(!1),L(e.target.value)}}),(0,f.jsx)(_.Z,{disabled:I,buttonText:p("confirm"),onAction:function(){"Confirm"===D&&(C((function(e){return!e})),y({sid:n}).then((function(){C((function(e){return!e})),j(-1)})).catch({}))},customStyleButton:{marginTop:"1rem",marginBottom:"1rem"}})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.rU,{to:"/q/".concat(Z.username,"/edit/student"),state:{openAs:"CLASS_TEACHER_SIDE",sid:n,subTypeOpen:x},children:(0,f.jsx)("h6",{className:u.Z.edit,children:"Edit"})}),null!==h&&void 0!==h&&h.includes(x)?"":(0,f.jsx)("h6",{className:u.Z.remove,onClick:function(){return P(!0)},children:"Remove"})]})}),S&&(0,f.jsx)(r.Z,{})]})]})}},5898:function(e,t,n){n.r(t);var i=n(29439),o=n(72791),l=n(39230),s=n(8793),d=n(79872),a=n(6245),u=n(69721),c=n(98094),r=n(88872),v=n(8931),_=n(47174),m=n(71114),f=n(47167),h=n(16871),x=n(38733),p=n(91007),Z=n(95048),j=n(51174),T=n(20772),y=n(45474),N=n(66769),g=n(68747),S=n(80184),C=["INSTITUTE","INSTITUTE_ADMIN","STUDENT_SECTION","CLASS_CATALOG"];t.default=function(){var e,t,n,b,A,I,E,k,w,D,L,R,O,U,P,G,M,F,z,H,B,q,V,$,J,Y,K,Q,W,X,ee,te,ne,ie,oe,le,se,de,ae,ue,ce,re,ve,_e,me,fe,he,xe,pe,Ze=(0,l.$G)().t,je=[{name:Ze("about"),id:0},{name:Ze("fees_data"),id:1},{name:Ze("extra_skills"),id:2}],Te=(0,h.TH)(),ye=(0,h.s0)(),Ne=(0,o.useState)(!1),ge=(0,i.Z)(Ne,2),Se=ge[0],Ce=ge[1],be=(0,o.useState)(!1),Ae=(0,i.Z)(be,2),Ie=Ae[0],Ee=Ae[1],ke=(0,Z.v9)((function(e){return e.idChange.id})),we=(0,p.pu)(ke,{skip:!ke}).data,De=(0,o.useState)(0),Le=(0,i.Z)(De,2),Re=Le[0],Oe=Le[1],Ue=(0,a._P)({sid:null===(e=Te.state)||void 0===e?void 0:e.sid,skip:!(null!==(t=Te.state)&&void 0!==t&&t.sid)}),Pe=Ue.oneStudentProfile,Ge=Ue.oneStudentProfileRefetch;(0,o.useEffect)((function(){var e;null!==(e=Te.state)&&void 0!==e&&e.sid&&Ge()}),[null===(n=Te.state)||void 0===n?void 0:n.sid,Ge]),(0,o.useEffect)((function(){var e,t;"ADMISSION_ADMIN_SCHOLARSHIP"!==(null===(e=Te.state)||void 0===e?void 0:e.viewAs)&&"FEES_DATA"!==(null===(t=Te.state)||void 0===t?void 0:t.openTab)||Oe(1)}),[null===(b=Te.state)||void 0===b?void 0:b.viewAs,null===(A=Te.state)||void 0===A?void 0:A.openTab]),(0,o.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[null===(I=Te.state)||void 0===I?void 0:I.sid]);var Me=function(){Ee((function(e){return!e}))};return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:x.Z.navbar,children:"INSTITUTE"===(null===(E=Te.state)||void 0===E?void 0:E.viewAs)?(0,S.jsx)(T.default,{status:"home"}):(0,S.jsx)(d.default,{status:"members",profileId:we?null===we||void 0===we||null===(k=we.user)||void 0===k?void 0:k._id:"",username:null===we||void 0===we||null===(w=we.user)||void 0===w?void 0:w.username,name:null===we||void 0===we||null===(D=we.user)||void 0===D?void 0:D.userLegalName,photoId:null===we||void 0===we||null===(L=we.user)||void 0===L?void 0:L.photoId,profilePhoto:null===we||void 0===we||null===(R=we.user)||void 0===R?void 0:R.profilePhoto,profileData:null===we||void 0===we?void 0:we.user})}),"certificate"===(null===(O=Te.search)||void 0===O?void 0:O.substring(3))?(0,S.jsx)(N.default,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:x.Z.goback_container,id:"scrollView",children:(0,S.jsxs)("div",{className:x.Z.goback_container_text,onClick:function(){ye(-1)},children:[(0,S.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,S.jsx)("h6",{className:x.Z.goback_container_text_go,children:Ze("go_back")})]})}),(0,S.jsxs)("div",{className:x.Z.student_from_container,style:{marginBottom:"1rem"},children:[(0,S.jsx)(r.Z,{textLevel:"Student Profile",textLevelInner:" (".concat(null!==(U=null===Pe||void 0===Pe||null===(P=Pe.student)||void 0===P?void 0:P.profile_percentage)&&void 0!==U?U:0,"% profile completed)"),viewAs:!0,is_admission:!!C.includes(null===(G=Te.state)||void 0===G?void 0:G.viewAs),admissionTitle:Ze("login_details"),onAdmissionTitle:Me}),(0,S.jsx)(c.Z,{customStyle:{width:"100%"}}),(0,S.jsx)(v.Z,{name:"".concat((null===Pe||void 0===Pe||null===(M=Pe.student)||void 0===M?void 0:M.studentFirstName)||""," ").concat(null!==Pe&&void 0!==Pe&&null!==(F=Pe.student)&&void 0!==F&&F.studentMiddleName?null===Pe||void 0===Pe||null===(z=Pe.student)||void 0===z?void 0:z.studentMiddleName:""," ").concat((null===Pe||void 0===Pe||null===(H=Pe.student)||void 0===H?void 0:H.studentLastName)||""),designation:"Active class: ".concat((null===Pe||void 0===Pe||null===(B=Pe.student)||void 0===B||null===(q=B.studentClass)||void 0===q?void 0:q.classTitle)||"-"),indexNumber:"Roll No. ".concat((null===Pe||void 0===Pe||null===(V=Pe.student)||void 0===V?void 0:V.studentROLLNO)||"-"),grNumber:"".concat(Ze("gr_number")," ").concat(null!==($=null===Pe||void 0===Pe||null===(J=Pe.student)||void 0===J?void 0:J.studentGRNO)&&void 0!==$?$:""),dynamicImage:"1"!==(null===Pe||void 0===Pe||null===(Y=Pe.student)||void 0===Y?void 0:Y.photoId)?"".concat(u.yI,"/").concat(null===Pe||void 0===Pe||null===(K=Pe.student)||void 0===K?void 0:K.studentProfilePhoto):"/images/ins_default_profile.svg",sid:null===Pe||void 0===Pe||null===(Q=Pe.student)||void 0===Q?void 0:Q._id,activeUrl:"student",viewAs:"SUBJECT_TEACHER"!==(null===(W=Te.state)||void 0===W?void 0:W.viewAs)&&"STUDENT"!==(null===(X=Te.state)||void 0===X?void 0:X.viewAs)&&"INSTITUTE"!==(null===(ee=Te.state)||void 0===ee?void 0:ee.viewAs)&&"CERTIFICATE_AUTHORITY"!==(null===(te=Te.state)||void 0===te?void 0:te.viewAs)&&"FINANCE_MANAGER"!==(null===(ne=Te.state)||void 0===ne?void 0:ne.viewAs)&&"ID_CARD_SECTION"!==(null===(ie=Te.state)||void 0===ie?void 0:ie.viewAs),openAs:null===(oe=Te.state)||void 0===oe?void 0:oe.viewAs,onEdit:function(){Ce(!0)},is_hostel_link:null!==(le=null===Pe||void 0===Pe||null===(se=Pe.student)||void 0===se||null===(de=se.exist_linked_hostel)||void 0===de||null===(ae=de.exist_student)||void 0===ae?void 0:ae._id)&&void 0!==le?le:"",uniqueGr:null===Pe||void 0===Pe||null===(ue=Pe.student)||void 0===ue?void 0:ue.studentGRNO,instituteId:null===Pe||void 0===Pe||null===(ce=Pe.student)||void 0===ce||null===(re=ce.institute)||void 0===re?void 0:re._id,onRefetchStudentApi:Ge,isGrButtonLock:null===Pe||void 0===Pe||null===(ve=Pe.student)||void 0===ve?void 0:ve.query_lock_status}),(0,S.jsx)("div",{style:{marginTop:"1.7rem"}}),(0,S.jsx)(f.Z,{tabList:je,activeIndexTab:Re,setActiveIndexTab:Oe,customStyleTab:{width:"33.3%"}}),(0,S.jsx)(c.Z,{customStyle:{width:"100%"}}),0===Re&&(0,S.jsx)(_.Z,{student:null===Pe||void 0===Pe?void 0:Pe.student,viewAs:!0}),2===Re&&(0,S.jsx)(s.Z,{children:(0,S.jsx)(m.default,{sid:null===Pe||void 0===Pe||null===(_e=Pe.student)||void 0===_e?void 0:_e._id})}),1===Re&&(0,S.jsx)(s.Z,{children:(0,S.jsx)("div",{style:{padding:"1rem"},children:(0,S.jsx)(g.Z,{isEditable:"Granted"===(null===Pe||void 0===Pe||null===(me=Pe.student)||void 0===me?void 0:me.online_amount_edit_access)})})})]})]}),Se&&(0,S.jsx)(j.Z,{onClose:function(){Ce((function(e){return!e}))},sid:null===Pe||void 0===Pe||null===(fe=Pe.student)||void 0===fe?void 0:fe._id,openAs:null===(he=Te.state)||void 0===he?void 0:he.viewAs}),Ie&&(0,S.jsx)(y.Z,{onLoginDetailToggle:Me,loginData:null===Pe||void 0===Pe||null===(xe=Pe.student)||void 0===xe?void 0:xe.user,sid:null===Pe||void 0===Pe||null===(pe=Pe.student)||void 0===pe?void 0:pe._id,onRefetch:Ge})]})}},88872:function(e,t,n){var i=n(1413),o=n(29439),l=n(72791),s=n(55136),d=n(39230),a=n(89891),u=n(16871),c=n(34314),r=n(80184),v={inputProps:{"aria-label":"Switch demo"}};t.Z=function(e){var t,n,_,m,f,h,x,p,Z,j,T,y=e.textLevel,N=e.onPrevious,g=e.onNext,S=e.onClose,C=e.viewAs,b=e.is_admission,A=e.admissionTitle,I=e.onAdmissionTitle,E=e.is_install,k=e.installTitle,w=e.onInstallTitle,D=e.installmentEdit,L=e.sid,R=e.instituteId,O=e.textLevelInner,U=e.onConfig,P=e.configTitle,G=e.onConfig1,M=e.configTitle1,F=e.isStaff,z=(0,d.$G)().t,H=(0,l.useState)(!1),B=(0,o.Z)(H,2),q=B[0],V=B[1],$=(0,u.TH)();(0,u.UO)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:s.Z.staff_header_container,children:[(0,r.jsxs)("h6",{className:s.Z.staff_header_text,children:[y,O?(0,r.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:O}):""]}),"DEPARTMENT_HEAD"===C?(0,r.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:U,style:{color:"#0000ff"},children:P}),(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:G,style:{color:"#0000ff"},children:M})]}):null,!C&&(0,r.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,r.jsxs)("div",{className:s.Z.staff_header_prev,onClick:N,children:[(0,r.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,r.jsx)("span",{children:z("prev")})]}),(0,r.jsxs)("div",{className:s.Z.staff_header_next,onClick:g,children:[(0,r.jsx)("span",{children:z("next")}),(0,r.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,r.jsx)("p",{className:s.Z.staff_header_close,onClick:S,children:z("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===C&&(0,r.jsxs)("div",{className:s.Z.staff_header_function,children:[(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:A}),F?"":(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return V(!0)},style:{color:"#0000ff"},children:z("student_message")}),(0,r.jsx)("p",{className:s.Z.staff_header_close,onClick:S,children:z("close_")})]}),"STUDENT_MESSAGE"===(null===(t=$.state)||void 0===t?void 0:t.studentMessaageView)&&"STUDENT_SECTION"!==(null===(n=$.state)||void 0===n?void 0:n.viewAs)&&(0,r.jsx)("div",{className:s.Z.staff_header_function,children:(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return V(!0)},style:{color:"#0000ff"},children:z("student_message")})}),b?(0,r.jsxs)("div",{className:s.Z.admission_actions,children:[E&&(0,r.jsxs)("p",{className:s.Z.staff_header_text,style:{color:"#0000ff"},children:[k,(0,r.jsx)(a.Z,(0,i.Z)((0,i.Z)({},v),{},{checked:D,onChange:w}))]}),"STUDENT_SECTION"===(null===(_=$.state)||void 0===_?void 0:_.viewAs)&&(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:function(){return V(!0)},style:{color:"#0000ff"},children:z("student_message")}),(0,r.jsx)("p",{className:s.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:A})]}):""]}),q&&(0,r.jsx)(c.Z,{onClose:function(){return V(!1)},sendStudentList:null!==(m=null===(f=$.state)||void 0===f?void 0:f.sid)&&void 0!==m?m:L,instituteId:null!==(h=null===(x=$.state)||void 0===x?void 0:x.instituteId)&&void 0!==h?h:R,accessAs:null!==(p=null===(Z=$.state)||void 0===Z?void 0:Z.viewAs)&&void 0!==p?p:"INSTITUTE_ADMIN",headId:null!==(j=null===(T=$.state)||void 0===T?void 0:T.headId)&&void 0!==j?j:R})]})}},87049:function(e,t){t.Z={edit_modal_container:"EditConfirm_edit_modal_container__WfbTq",modal_header:"EditConfirm_modal_header__4sq5J",edit:"EditConfirm_edit__ziVGP",remove:"EditConfirm_remove__PCXLs",xlsx_update_btn:"EditConfirm_xlsx_update_btn__H3yM8",save_stop_btn:"EditConfirm_save_stop_btn__9NiZ5",update_to_btn:"EditConfirm_update_to_btn__ExCJv"}}}]);
//# sourceMappingURL=33413.60d12a0b.chunk.js.map