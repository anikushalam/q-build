(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[86911],{57387:function(e,t,n){"use strict";var _=n(1413),a=(n(72791),n(49384)),i=n(78499),o=n(80184);t.Z=function(e){var t=e.buttonText,n=e.disabled,r=e.customStyleButton,s=e.customStyleButtonText,l=e.onAction,c=e.shwoLoader;return(0,o.jsxs)("button",{disabled:n,style:(0,_.Z)({},r),className:i.Z.button_main,onClick:l,children:[(0,o.jsx)("span",{style:(0,_.Z)({},s),children:t}),n&&c&&(0,o.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,o.jsx)(a.Z,{})})]})}},8793:function(e,t,n){"use strict";var _=n(72791),a=n(11105),i=n(80184);t.Z=function(e){var t=e.children;return(0,i.jsx)(_.Suspense,{fallback:(0,i.jsx)(a.Z,{}),children:t})}},64499:function(e,t,n){"use strict";n.d(t,{Ex:function(){return r},KY:function(){return o},oU:function(){return s}});var _=n(69721);function a(e){return function(e){return"object"===typeof e}(e)&&!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e}function i(e){var t=e.action,n=e.params,_=document.createElement("form");return _.setAttribute("method","post"),_.setAttribute("action",t),Object.keys(n).forEach((function(e){var t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name",e),t.setAttribute("value",a(n[e])),_.appendChild(t)})),_}function o(e){var t=i(e);document.body.appendChild(t),t.submit(),t.remove()}var r=function(e){return fetch("".concat(_.FH,"/api/v1/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e){return fetch("".concat(_.FH,"/api/v2/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},45474:function(e,t,n){"use strict";var _=n(4942),a=n(1413),i=n(29439),o=n(72791),r=n(38733),s=n(36665),l=n(98094),c=n(97655),d=n(39230),u=n(98734),m=n(84959),f=n(80184);t.Z=function(e){var t=e.onLoginDetailToggle,n=e.loginData,v=e.sid,h=e.onRefetch,p=e.is_staff,g=(0,d.$G)().t,y=(0,o.useState)({phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""}),x=(0,i.Z)(y,2),b=x[0],j=x[1],S=(0,o.useState)(!1),w=(0,i.Z)(S,2),Z=w[0],N=w[1],F=(0,m.gY)(),A=(0,i.Z)(F,1)[0],C=(0,m.ZS)(),T=(0,i.Z)(C,1)[0];(0,o.useEffect)((function(){n&&j((function(e){return(0,a.Z)((0,a.Z)({},e),{},{phone:(null===n||void 0===n?void 0:n.userPhoneNumber)||"",email:(null===n||void 0===n?void 0:n.userEmail)||""})}))}),[n]);var I=function(e){j((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,_.Z)({},e.target.name,e.target.value))}))};return(0,f.jsx)(s.Z,{onClose:t,children:(0,f.jsxs)("div",{className:r.Z.login_details_modal,children:[(0,f.jsx)("h6",{children:g("login_details")}),(0,f.jsx)(l.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,f.jsx)(c.Z,{labelText:g("mobile_number"),placeholder:g("mobile_number_placeholder"),name:"phone",value:b.phone,type:"text",onChange:I}),(0,f.jsx)(c.Z,{labelText:g("email"),placeholder:g("email_placeholder"),name:"email",value:b.email,type:"text",onChange:I}),(0,f.jsx)("button",{className:r.Z.login_details_btn,onClick:function(){N((function(e){return!e})),p?T({login_details:{phone:b.phone,email:b.email,sid:v}}).then((function(){h(),N((function(e){return!e})),t()})).catch({}):A({login_details:{phone:b.phone,email:b.email,sid:v}}).then((function(){h(),N((function(e){return!e})),t()})).catch({})},children:g("update")}),Z&&(0,f.jsx)(u.Z,{})]})})}},49384:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(72791);var _=n(6307),a=n(80184),i=function(){return(0,a.jsx)(_.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})}},51174:function(e,t,n){"use strict";var _=n(29439),a=n(72791),i=n(12072),o=n(84489),r=n(16871),s=n(43504),l=n(87049),c=n(24582),d=n(98734),u=n(97655),m=n(57387),f=n(39230),v=n(80184),h=["STUDENT_SECTION","ADMISSION_ADMIN"];t.Z=function(e){var t=e.onClose,n=e.sid,p=e.openAs,g=(0,f.$G)().t,y=(0,r.UO)(),x=(0,r.s0)(),b=(0,c.YK)(),j=(0,_.Z)(b,1)[0],S=(0,a.useState)(!1),w=(0,_.Z)(S,2),Z=w[0],N=w[1],F=(0,a.useState)(!0),A=(0,_.Z)(F,2),C=A[0],T=A[1],I=(0,a.useState)(""),k=(0,_.Z)(I,2),U=k[0],H=k[1],P=(0,a.useState)(!1),E=(0,_.Z)(P,2),O=E[0],L=E[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Z,{onClose:t}),(0,v.jsxs)(i.Z,{customStyle:{zIndex:"1200"},children:[(0,v.jsx)("div",{className:l.Z.edit_modal_container,style:O?{width:"auto",height:"auto"}:{width:"200px"},children:O?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Z,{labelText:g("type_confirm_to_continue"),placeholder:"type here 'Confirm'",name:"removeStudent",value:U,type:"text",onChange:function(e){"Confirm"===e.target.value&&T(!1),H(e.target.value)}}),(0,v.jsx)(m.Z,{disabled:C,buttonText:g("confirm"),onAction:function(){"Confirm"===U&&(N((function(e){return!e})),j({sid:n}).then((function(){N((function(e){return!e})),x(-1)})).catch({}))},customStyleButton:{marginTop:"1rem",marginBottom:"1rem"}})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.rU,{to:"/q/".concat(y.username,"/edit/student"),state:{openAs:"CLASS_TEACHER_SIDE",sid:n,subTypeOpen:p},children:(0,v.jsx)("h6",{className:l.Z.edit,children:"Edit"})}),null!==h&&void 0!==h&&h.includes(p)?"":(0,v.jsx)("h6",{className:l.Z.remove,onClick:function(){return L(!0)},children:"Remove"})]})}),Z&&(0,v.jsx)(d.Z,{})]})]})}},96230:function(e,t,n){"use strict";n.r(t);var _=n(29439),a=n(72791),i=n(39230),o=n(8793),r=n(79872),s=n(6245),l=n(69721),c=n(98094),d=n(88872),u=n(8931),m=n(47174),f=n(47167),v=n(16871),h=n(38733),p=n(91007),g=n(95048),y=n(51174),x=n(20772),b=n(45474),j=n(42998),S=n(20662),w=n(80184),Z=["INSTITUTE","INSTITUTE_ADMIN"];t.default=function(){var e,t,n,N,F,A,C,T,I,k,U,H,P,E,O,L,R,M,B,D,G,q,Y,z,V,K,J,X,Q,W,$,ee,te,ne,_e,ae,ie,oe,re=(0,i.$G)().t,se=[{name:re("about"),id:0},{name:re("fees_data"),id:1},{name:re("hostel_renewal"),id:2}],le=(0,v.TH)(),ce=(0,v.s0)(),de=(0,a.useState)(!1),ue=(0,_.Z)(de,2),me=ue[0],fe=ue[1],ve=(0,g.v9)((function(e){return e.idChange.id})),he=(0,p.pu)(ve,{skip:!ve}).data,pe=(0,a.useState)(0),ge=(0,_.Z)(pe,2),ye=ge[0],xe=ge[1],be=(0,a.useState)(!1),je=(0,_.Z)(be,2),Se=je[0],we=je[1],Ze=(0,s._P)({sid:null===(e=le.state)||void 0===e?void 0:e.sid,skip:!(null!==(t=le.state)&&void 0!==t&&t.sid)}),Ne=Ze.oneStudentProfile,Fe=Ze.oneStudentProfileRefetch;(0,a.useEffect)((function(){var e;null!==(e=le.state)&&void 0!==e&&e.sid&&Fe()}),[null===(n=le.state)||void 0===n?void 0:n.sid,Fe]),(0,a.useEffect)((function(){var e,t;"ADMISSION_ADMIN_SCHOLARSHIP"!==(null===(e=le.state)||void 0===e?void 0:e.viewAs)&&"FEES_DATA"!==(null===(t=le.state)||void 0===t?void 0:t.openTab)||xe(1)}),[null===(N=le.state)||void 0===N?void 0:N.viewAs,null===(F=le.state)||void 0===F?void 0:F.openTab]),(0,a.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[null===(A=le.state)||void 0===A?void 0:A.sid]);var Ae=function(){we((function(e){return!e}))};return(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:h.Z.navbar,children:"INSTITUTE"===(null===(C=le.state)||void 0===C?void 0:C.viewAs)?(0,w.jsx)(x.default,{status:"home"}):(0,w.jsx)(r.default,{status:"members",profileId:he?null===he||void 0===he||null===(T=he.user)||void 0===T?void 0:T._id:"",username:null===he||void 0===he||null===(I=he.user)||void 0===I?void 0:I.username,name:null===he||void 0===he||null===(k=he.user)||void 0===k?void 0:k.userLegalName,photoId:null===he||void 0===he||null===(U=he.user)||void 0===U?void 0:U.photoId,profilePhoto:null===he||void 0===he||null===(H=he.user)||void 0===H?void 0:H.profilePhoto,profileData:null===he||void 0===he?void 0:he.user})}),(0,w.jsx)("div",{className:h.Z.goback_container,id:"scrollView",children:(0,w.jsxs)("div",{className:h.Z.goback_container_text,onClick:function(){ce(-1)},children:[(0,w.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,w.jsx)("h6",{className:h.Z.goback_container_text_go,children:re("go_back")})]})}),(0,w.jsxs)("div",{className:h.Z.student_from_container,style:{marginBottom:"1rem"},children:[(0,w.jsx)(d.Z,{textLevel:"Student Hostel Profile",viewAs:!0,is_admission:!!Z.includes(null===(P=le.state)||void 0===P?void 0:P.viewAs),admissionTitle:re("login_details"),onAdmissionTitle:Ae}),(0,w.jsx)(c.Z,{customStyle:{width:"100%"}}),(0,w.jsx)(u.Z,{name:"".concat((null===Ne||void 0===Ne||null===(E=Ne.student)||void 0===E?void 0:E.studentFirstName)||""," ").concat(null!==Ne&&void 0!==Ne&&null!==(O=Ne.student)&&void 0!==O&&O.studentMiddleName?null===Ne||void 0===Ne||null===(L=Ne.student)||void 0===L?void 0:L.studentMiddleName:""," ").concat((null===Ne||void 0===Ne||null===(R=Ne.student)||void 0===R?void 0:R.studentLastName)||""),designation:"Active class: ".concat((null===Ne||void 0===Ne||null===(M=Ne.student)||void 0===M||null===(B=M.studentClass)||void 0===B?void 0:B.classTitle)||"-"),indexNumber:"Roll No. ".concat((null===Ne||void 0===Ne||null===(D=Ne.student)||void 0===D?void 0:D.studentROLLNO)||"-"),grNumber:"".concat(re("gr_number")," ").concat(null!==(G=null===Ne||void 0===Ne||null===(q=Ne.student)||void 0===q?void 0:q.studentGRNO)&&void 0!==G?G:""),dynamicImage:"1"!==(null===Ne||void 0===Ne||null===(Y=Ne.student)||void 0===Y?void 0:Y.photoId)?"".concat(l.yI,"/").concat(null===Ne||void 0===Ne||null===(z=Ne.student)||void 0===z?void 0:z.studentProfilePhoto):"/images/ins_default_profile.svg",sid:null===Ne||void 0===Ne||null===(V=Ne.student)||void 0===V?void 0:V._id,activeUrl:"student",viewAs:"ADMISSION_ADMIN"!==(null===(K=le.state)||void 0===K?void 0:K.viewAs)&&"SUBJECT_TEACHER"!==(null===(J=le.state)||void 0===J?void 0:J.viewAs)&&"STUDENT"!==(null===(X=le.state)||void 0===X?void 0:X.viewAs)&&"INSTITUTE"!==(null===(Q=le.state)||void 0===Q?void 0:Q.viewAs),openAs:null===(W=le.state)||void 0===W?void 0:W.viewAs,onEdit:function(){fe(!0)},is_view_profile:"HOSTEL"}),(0,w.jsx)("div",{style:{marginTop:"1.7rem"}}),(0,w.jsx)(f.Z,{tabList:se,activeIndexTab:ye,setActiveIndexTab:xe,customStyleTab:{width:"33.3%"}}),(0,w.jsx)(c.Z,{customStyle:{width:"100%"}}),0===ye&&(0,w.jsx)(m.Z,{student:null===Ne||void 0===Ne?void 0:Ne.student,viewAs:!0}),2===ye&&(0,w.jsx)(o.Z,{children:(0,w.jsx)("div",{style:{padding:"1rem"},children:(0,w.jsx)(S.Z,{sid:null===Ne||void 0===Ne||null===($=Ne.student)||void 0===$?void 0:$._id,isProfile:null===(ee=le.state)||void 0===ee?void 0:ee.viewAs,isOther:!0})})}),1===ye&&(0,w.jsx)(o.Z,{children:(0,w.jsx)(j.Z,{sid:null===Ne||void 0===Ne||null===(te=Ne.student)||void 0===te?void 0:te._id,viewAs:null===(ne=le.state)||void 0===ne?void 0:ne.viewAs})})]}),me&&(0,w.jsx)(y.Z,{onClose:function(){fe((function(e){return!e}))},sid:null===Ne||void 0===Ne||null===(_e=Ne.student)||void 0===_e?void 0:_e._id,openAs:null===(ae=le.state)||void 0===ae?void 0:ae.viewAs}),Se&&(0,w.jsx)(b.Z,{onLoginDetailToggle:Ae,loginData:null===Ne||void 0===Ne||null===(ie=Ne.student)||void 0===ie?void 0:ie.user,sid:null===Ne||void 0===Ne||null===(oe=Ne.student)||void 0===oe?void 0:oe._id,onRefetch:Fe})]})}},42998:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var _=n(29439),a=n(72791),i=n(32804),o=n(91007),r=n(29017),s=n(51376),l=n(16871),c=n(39230),d=n(4195),u=n(80184),m=function(e){var t=e.value,n=e.onTabHandler,_=e.padiFees,a=e.remainingFees,o=e.applicableRemainingFees,r=e.scholarshipFees,s=(0,c.$G)().t;return(0,u.jsxs)("div",{className:i.Z.student_fees_header_container,children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:i.Z.student_fees_row_amount,children:[(0,u.jsxs)("h5",{children:[s("rs"),". ",null!==_&&void 0!==_?_:0]}),(0,u.jsx)("h6",{children:s("total_fees_paid")})]}),(0,u.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{marginTop:"1rem"},children:[(0,u.jsxs)("h5",{children:[s("rs"),". ",null!==r&&void 0!==r?r:0]}),(0,u.jsx)("h6",{children:s("by_scholarship")})]})]}),(0,u.jsx)("div",{className:i.Z.student_fees_header_column,children:(0,u.jsx)(d.Z,{label:"hostel_fees",currentValue:0,value:t,onClick:n,customStyleContainer:{marginRight:"2rem"}})}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end"},children:[(0,u.jsxs)("h5",{style:{color:"#121212"},children:[s("rs"),". ",null!==a&&void 0!==a?a:0]}),(0,u.jsx)("h6",{children:s("remaining_fees")})]}),(0,u.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end",marginTop:"1rem"},children:[(0,u.jsxs)("h5",{style:{color:"#121212"},children:[s("rs"),". ",null!==o&&void 0!==o?o:0]}),(0,u.jsx)("h6",{children:s("applicable_remaining")}),(0,u.jsx)("div",{children:s("to_be_paid_by_student")})]})]})]})},f=function(e){var t,n,c,d,f,v,h,p,g=e.viewAs,y=e.sid,x=((0,l.UO)(),(0,a.useState)(0)),b=(0,_.Z)(x,2),j=b[0],S=b[1],w=(0,a.useState)(!0),Z=(0,_.Z)(w,2),N=Z[0],F=Z[1],A=(0,o.$J)("".concat(y),{skip:!y}),C=A.data,T=A.refetch,I=(0,r.Y$)({sid:y,skip:!y}),k=I.sudentAdmissionFeesList,U=I.sudentAdmissionFeesListRefetch;(0,a.useEffect)((function(){y&&(T(),U(),F(!0))}),[y,U,T]),(0,a.useEffect)((function(){var e;(null!==k&&void 0!==k&&k.array||0===(null===k||void 0===k||null===(e=k.array)||void 0===e?void 0:e.length))&&F(!1)}),[null===k||void 0===k?void 0:k.array]);var H=function(e,t,n){return e+t+n};return(0,u.jsxs)("div",{className:i.Z.student_alll_fees_data,children:[(0,u.jsx)(m,{onTabHandler:function(e){S(e)},value:j,padiFees:H((null===C||void 0===C||null===(t=C.student)||void 0===t?void 0:t.studentPaidFeeCount)||0,(null===C||void 0===C||null===(n=C.student)||void 0===n?void 0:n.admissionPaidFeeCount)||0,(null===C||void 0===C||null===(c=C.student)||void 0===c?void 0:c.hostelPaidFeeCount)||0),remainingFees:H((null===C||void 0===C||null===(d=C.student)||void 0===d?void 0:d.studentRemainingFeeCount)||0,(null===C||void 0===C||null===(f=C.student)||void 0===f?void 0:f.admissionRemainFeeCount)||0,(null===C||void 0===C||null===(v=C.student)||void 0===v?void 0:v.hostelRemainFeeCount)||0),applicableRemainingFees:null===C||void 0===C||null===(h=C.student)||void 0===h?void 0:h.applicable_fees_pending,scholarshipFees:null!==(p=null===C||void 0===C?void 0:C.paid_by_government)&&void 0!==p?p:0}),0===j&&(0,u.jsx)(s.Z,{viewAs:g,sudentAdmissionFeesList:k,sudentAdmissionFeesListRefetch:U,feesQueryRefetch:T,showingDataLoading:N})]})}},71439:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var _=n(29439),a=n(72791),i="PaymentGatewayConfig_gateway_container__nrTUY",o="PaymentGatewayConfig_gateway_upi__AJ6Eb",r="PaymentGatewayConfig_gateway_other__RxfCt",s="PaymentGatewayConfig_gateway_upi_text__OV6Zf",l="PaymentGatewayConfig_gateway_other_text__EVLNL",c="PaymentGatewayConfig_gateway_upi_text_inner__SB-Kf",d="PaymentGatewayConfig_gateway_other_text_inner__Pd5BQ",u="PaymentGatewayConfig_gateway_upi_icons__EAxoi",m="PaymentGatewayConfig_gateway_upi_icons_inner__N+sfo",f="PaymentGatewayConfig_gateway_other_icons__kqTO+",v="PaymentGatewayConfig_gateway_other_icons_inner__MGmma",h="PaymentGatewayConfig_gateway_btn__2Xo3a",p="PaymentGatewayConfig_gateway_border__gjI8+",g="PaymentGatewayConfig_gateway_summary__Rbg+6",y="PaymentGatewayConfig_gateway_summary_text__b6PzX",x=n(36665),b=n(39230),j=n(49384),S=n(80184),w=function(e){var t,n,_=e.onClose,a=e.allContent,o=e.onNext,r=e.isLoading,s=(e.selected,e.isOptimzed),l=(0,b.$G)().t,c=2.1*+(null===a||void 0===a?void 0:a.amount)/100,d=c+18*+c/100,u=parseInt(null===a||void 0===a?void 0:a.amount),m=(Math.ceil(u+ +d.toFixed(2)),1*parseInt(null===a||void 0===a?void 0:a.amount)/100),f=m>=100?100:m,v=18*+f/100;Math.ceil(parseInt(null===a||void 0===a?void 0:a.amount)+parseInt(f)+parseInt(v));return(0,S.jsx)(x.Z,{onClose:_,children:(0,S.jsxs)("div",{className:i,children:[(0,S.jsx)("div",{className:p,children:(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,S.jsx)("h6",{children:l("Payment_Summary")}),(0,S.jsxs)("section",{className:g,children:[s&&(0,S.jsx)("div",{className:y,children:(0,S.jsxs)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:[l("plateform_fees_rs")," ",null!==(t=null===(n=(null===a||void 0===a?void 0:a.amount)*(null===a||void 0===a?void 0:a.platform_charges)/100)||void 0===n?void 0:n.toFixed(2))&&void 0!==t?t:0]})}),(0,S.jsx)("div",{className:y,children:(0,S.jsx)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:l(s?"pg_convenience_o":"pg_convenience")})}),(0,S.jsx)("div",{className:y,children:(0,S.jsx)("p",{children:l(s?"pg_convenience_note_o":"pg_convenience_note")})}),(0,S.jsx)("div",{className:y,children:(0,S.jsxs)("p",{style:{fontSize:"12px"},children:[(0,S.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"0.8rem",marginRight:"0.5rem"}}),l(s?"pg_convenience_forward_o":"pg_convenience_forward")]})}),(0,S.jsxs)("button",{onClick:o,className:h,style:{marginTop:"1rem"},children:[l("Make_Payment"),r&&(0,S.jsx)("span",{style:{marginLeft:"10px",marginTop:"13px"},children:(0,S.jsx)(j.Z,{})})]})]})]})})},Z=function(e){var t=e.onClose,n=e.allContent,h=e.checkoutHandler,g=e.checkoutAdmissionHandler,y=e.checkoutParticipate,j=e.checkoutBacklogHandler,Z=e.checkoutAdmissionDirectHandler,N=e.checkoutLibraryHandler,F=e.isOptimzed,A=(0,b.$G)().t,C=(0,a.useState)(0),T=(0,_.Z)(C,2),I=T[0],k=T[1],U=(0,a.useState)("PAYTM"),H=(0,_.Z)(U,2),P=H[0],E=H[1],O=(0,a.useState)(!1),L=(0,_.Z)(O,2),R=L[0],M=L[1],B=function(e){k(e),E(0===e?"PAYTM":"RAZOR")};return(0,S.jsx)(S.Fragment,{children:P?(0,S.jsx)(w,{onClose:t,allContent:n,onNext:function(){M(!0),"Fees"===n.type?h(0===I?"PAYTM":"RAZOR"):"Admission"===n.type?g(0===I?"PAYTM":"RAZOR"):"Participate"===n.type?y(0===I?"PAYTM":"RAZOR"):"Backlog"===n.type?j(0===I?"PAYTM":"RAZOR"):"Library Fees"===n.type?N(0===I?"PAYTM":"RAZOR"):"ADMISSION_DIRECT_APPLY"===n.type&&Z(0===I?"PAYTM":"RAZOR")},isLoading:R,selected:I,isOptimzed:F}):(0,S.jsx)(x.Z,{onClose:t,children:(0,S.jsxs)("div",{className:i,children:[(0,S.jsx)("div",{className:p,children:(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,S.jsx)("h6",{children:A("Payment_Mode")}),(0,S.jsx)("p",{children:A("Pay_via_UPI_Less_transaction_charges_by_Payment_Gateway")}),(0,S.jsxs)("section",{className:o,onClick:function(){return B(0)},style:{boxShadow:0===I&&"0px 4px 4px 0px #00000040",backgroundColor:0===I&&"rgb(156 136 179 / 10%)"},children:[(0,S.jsxs)("div",{className:s,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-bheem-icon.svg",alt:"gateway icon"}),(0,S.jsxs)("div",{className:c,children:[(0,S.jsx)("p",{children:A("Payment_Mode")}),(0,S.jsx)("h6",{children:A("payment_upi")})]})]}),(0,S.jsxs)("div",{className:u,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-recomended-icon.svg",alt:"gateway icon"}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-phone-icon.svg",alt:"gateway icon"}),(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-paytm-icon.svg",alt:"gateway icon"}),(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-google-icon.svg",alt:"gateway icon"})]})]})]}),(0,S.jsxs)("section",{className:r,onClick:function(){return B(1)},style:{boxShadow:1===I&&"0px 4px 4px 0px #00000040",backgroundColor:1===I&&"rgb(156 136 179 / 10%)"},children:[(0,S.jsxs)("div",{className:l,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-other-icon.svg",alt:"gateway icon"}),(0,S.jsxs)("div",{className:d,children:[(0,S.jsx)("p",{children:A("Payment_Mode")}),(0,S.jsx)("h6",{children:A("payment_other")})]})]}),(0,S.jsxs)("div",{className:f,children:[(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-debit-icon.svg",alt:"gateway icon"}),(0,S.jsxs)("p",{children:[A("debit_credit"),(0,S.jsx)("br",{}),A("cards")]})]}),(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)("img",{src:"/images/member_tab/gateway/gateway-bank-icon.svg",alt:"gateway icon"}),(0,S.jsx)("p",{children:A("net_banking")})]})]})]})]})})})}},88872:function(e,t,n){"use strict";var _=n(1413),a=n(29439),i=n(72791),o=n(55136),r=n(39230),s=n(89891),l=n(16871),c=n(34314),d=n(80184),u={inputProps:{"aria-label":"Switch demo"}};t.Z=function(e){var t,n,m,f,v,h,p,g,y,x,b,j=e.textLevel,S=e.onPrevious,w=e.onNext,Z=e.onClose,N=e.viewAs,F=e.is_admission,A=e.admissionTitle,C=e.onAdmissionTitle,T=e.is_install,I=e.installTitle,k=e.onInstallTitle,U=e.installmentEdit,H=e.sid,P=e.instituteId,E=e.textLevelInner,O=e.onConfig,L=e.configTitle,R=e.onConfig1,M=e.configTitle1,B=e.isStaff,D=(0,r.$G)().t,G=(0,i.useState)(!1),q=(0,a.Z)(G,2),Y=q[0],z=q[1],V=(0,l.TH)();(0,l.UO)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:o.Z.staff_header_container,children:[(0,d.jsxs)("h6",{className:o.Z.staff_header_text,children:[j,E?(0,d.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:E}):""]}),"DEPARTMENT_HEAD"===N?(0,d.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:O,style:{color:"#0000ff"},children:L}),(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:R,style:{color:"#0000ff"},children:M})]}):null,!N&&(0,d.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,d.jsxs)("div",{className:o.Z.staff_header_prev,onClick:S,children:[(0,d.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,d.jsx)("span",{children:D("prev")})]}),(0,d.jsxs)("div",{className:o.Z.staff_header_next,onClick:w,children:[(0,d.jsx)("span",{children:D("next")}),(0,d.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,d.jsx)("p",{className:o.Z.staff_header_close,onClick:Z,children:D("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===N&&(0,d.jsxs)("div",{className:o.Z.staff_header_function,children:[(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:C,style:{color:"#0000ff"},children:A}),B?"":(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:D("student_message")}),(0,d.jsx)("p",{className:o.Z.staff_header_close,onClick:Z,children:D("close_")})]}),"STUDENT_MESSAGE"===(null===(t=V.state)||void 0===t?void 0:t.studentMessaageView)&&"STUDENT_SECTION"!==(null===(n=V.state)||void 0===n?void 0:n.viewAs)&&(0,d.jsx)("div",{className:o.Z.staff_header_function,children:(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:D("student_message")})}),F?(0,d.jsxs)("div",{className:o.Z.admission_actions,children:[T&&(0,d.jsxs)("p",{className:o.Z.staff_header_text,style:{color:"#0000ff"},children:[I,(0,d.jsx)(s.Z,(0,_.Z)((0,_.Z)({},u),{},{checked:U,onChange:k}))]}),"STUDENT_SECTION"===(null===(m=V.state)||void 0===m?void 0:m.viewAs)&&(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:function(){return z(!0)},style:{color:"#0000ff"},children:D("student_message")}),(0,d.jsx)("p",{className:o.Z.staff_header_text,onClick:C,style:{color:"#0000ff"},children:A})]}):""]}),Y&&(0,d.jsx)(c.Z,{onClose:function(){return z(!1)},sendStudentList:null!==(f=null===(v=V.state)||void 0===v?void 0:v.sid)&&void 0!==f?f:H,instituteId:null!==(h=null===(p=V.state)||void 0===p?void 0:p.instituteId)&&void 0!==h?h:P,accessAs:null!==(g=null===(y=V.state)||void 0===y?void 0:y.viewAs)&&void 0!==g?g:"INSTITUTE_ADMIN",headId:null!==(x=null===(b=V.state)||void 0===b?void 0:b.headId)&&void 0!==x?x:P})]})}},55336:function(e,t,n){"use strict";var _=n(63244),a=n(80184);t.Z=function(){return(0,a.jsx)("div",{className:_.Z.qviple_loader_backdrop,children:(0,a.jsx)("div",{className:_.Z.qviple_loader_container,children:(0,a.jsx)("div",{className:_.Z.qviple_loader_rotation})})})}},79992:function(e,t,n){"use strict";n.d(t,{ZH:function(){return a}});var _=n(89704),a=function(e){var t=_.AES.decrypt(e,"QVIPLESAASPLATFORM");return JSON.parse(t.toString(_.enc.Utf8))}},90904:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var _="BorderBottom_split_content__RVPoh",a=n(80184),i=function(e){var t=e.customStyleBorder;return(0,a.jsx)("hr",{className:_,style:t})}},93638:function(e,t,n){"use strict";var _=n(39230),a=n(80476),i=n(80184);t.Z=function(e){var t=e.label,n=e.count,o=e.onAction,r=e.customStyle,s=e.isTranslate,l=(0,_.$G)().t;return s?(0,i.jsxs)("div",{className:a.Z.create_btn_container,onClick:o,style:r,children:[n>0?(0,i.jsxs)("span",{children:[n," "]}):null,t]}):(0,i.jsxs)("div",{className:a.Z.create_btn_container,onClick:o,style:r,children:[n>0?(0,i.jsxs)("span",{children:[n," "]}):null,l(t)]})}},11468:function(e,t,n){"use strict";var _=n(39230),a=n(52245),i=n(80184),o=function(e){var t;return e?null===e||void 0===e||null===(t=e.split("\n"))||void 0===t?void 0:t.length:2};t.Z=function(e){var t=e.label,n=e.name,r=e.type,s=e.value,l=e.onChange,c=e.placeholder,d=e.errorShow,u=e.disabled,m=e.customFormInputContainer,f=e.customFormInputLabel,v=(0,_.$G)().t;return(0,i.jsxs)("div",{className:a.Z.form_input_container,style:m,children:[t&&(0,i.jsxs)("label",{className:a.Z.form_input_label,htmlFor:n,style:f,children:[t,d&&(0,i.jsxs)("span",{className:a.Z.form_input_label_error,children:["* ",v("form_require_label")]})]}),(0,i.jsx)("textarea",{className:a.Z.form_textarea_input,type:r,value:s,onChange:l,name:n,placeholder:c,rows:o(s),disabled:u,style:{"--textarea-height":"".concat(20*o(s),"px")}})]})}},48293:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var _=n(72791),a=n(54164),i=n(15783),o=n(80184),r=function(e){var t=e.onBackdropClose,n=e.customBackdropStyle,r=(0,_.useCallback)((function(){if(!t)return null;t()}),[t]);return a.createPortal((0,o.jsx)("div",{className:i.Z.modal_backdrop,onClick:r,style:n}),document.getElementById("backdrop"))},s=n(1413),l=function(e){e.modalState,e.isHide;var t=e.customOverlayStyle,n=e.children;return a.createPortal((0,o.jsx)("div",{className:i.Z.modal_overlay,style:(0,s.Z)({},t),children:n}),document.getElementById("overlay"))},c=function(e){var t=e.onClose,n=(e.modalState,e.customBackdropStyle),_=e.customOverlayStyle,a=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{onBackdropClose:t,customBackdropStyle:n}),(0,o.jsx)(l,{customOverlayStyle:_,children:a})]})}},21348:function(e,t,n){"use strict";var _=n(59393),a=n(80184);t.Z=function(e){var t=e.customStyle,n=e.children;return(0,a.jsx)("div",{className:_.Z.user_member_content_wrapper,style:t,children:n})}},99183:function(e,t,n){"use strict";n.d(t,{l:function(){return _},x:function(){return a}});var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(var _ in e)null!==t&&void 0!==t&&t.includes(_)||e[_]||(n[_]="* required");return n},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)return!1;return!0}},10406:function(e,t){"use strict";t.Z={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},32804:function(e,t){"use strict";t.Z={student_fees_header_container:"StudentAllFeesData_student_fees_header_container__06J8F",student_fees_header_column:"StudentAllFeesData_student_fees_header_column__7WxL2",student_fees_row_amount:"StudentAllFeesData_student_fees_row_amount__2QSk8",student_fees_btn_container:"StudentAllFeesData_student_fees_btn_container__rcsyt",student_fees_btn_container_active:"StudentAllFeesData_student_fees_btn_container_active__LiRxa",student_alll_fees_data:"StudentAllFeesData_student_alll_fees_data__CBPmP",student_admission_fees_container:"StudentAllFeesData_student_admission_fees_container__Fs6dX",student_internal_card:"StudentAllFeesData_student_internal_card__QP2oz",student_internal_card_btn_pay:"StudentAllFeesData_student_internal_card_btn_pay__CzvCh",student_internal_card_btn_paid:"StudentAllFeesData_student_internal_card_btn_paid__KP8Jd"}},63244:function(e,t){"use strict";t.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},80476:function(e,t){"use strict";t.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:function(e,t){"use strict";t.Z={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},59393:function(e,t){"use strict";t.Z={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},4007:function(e,t){"use strict";t.Z={fess_container:"FeesStructure_fess_container__yP1Kr",category_header:"FeesStructure_category_header__kl9eu",category_header_title:"FeesStructure_category_header_title__Lc+5l",fees_category:"FeesStructure_fees_category__8u-dp",fees_category_icon:"FeesStructure_fees_category_icon__KjMF9",fees_category_text:"FeesStructure_fees_category_text__HnRZU",assignment_description_head:"FeesStructure_assignment_description_head__jqNtp",assignment_description:"FeesStructure_assignment_description__soumP",department_container:"FeesStructure_department_container__kCdPX",department_card_name:"FeesStructure_department_card_name__sYSOY",department_card_head:"FeesStructure_department_card_head__rVcZv",department_card_title:"FeesStructure_department_card_title__PF9km",add_new_category:"FeesStructure_add_new_category__Q1OpU",category_card:"FeesStructure_category_card__qYz0J",fees_card_text:"FeesStructure_fees_card_text__KB8GJ",category_card_fee:"FeesStructure_category_card_fee__sRR12",fees_card_text_bottom:"FeesStructure_fees_card_text_bottom__T45b7",department_card_container:"FeesStructure_department_card_container__a40wp",department_card_image:"FeesStructure_department_card_image__2FUDD",fees_card:"FeesStructure_fees_card__z+RwE",category_card_order:"FeesStructure_category_card_order__jBLeB",add_category_modal:"FeesStructure_add_category_modal__XFTGC",add_category_modal_title:"FeesStructure_add_category_modal_title__y9he4",structure_container_title:"FeesStructure_structure_container_title__Oa39N",add_category_modal_title_left:"FeesStructure_add_category_modal_title_left__JDH-M",set_fees_structure_btn:"FeesStructure_set_fees_structure_btn__NUJNj",installment_list:"FeesStructure_installment_list__b4tEe",fees_head_title:"FeesStructure_fees_head_title__aHn2H",fees_head_installment:"FeesStructure_fees_head_installment__G80fz",table_heading:"FeesStructure_table_heading__C+3Ou",table_container:"FeesStructure_table_container__GY9PB",table_body:"FeesStructure_table_body__d27RF",table_body_list:"FeesStructure_table_body_list__AIq19",fee_head_name_input:"FeesStructure_fee_head_name_input__XqDmq",fee_head_amount_input:"FeesStructure_fee_head_amount_input__IljkA",add_fees_head_btn:"FeesStructure_add_fees_head_btn__Me1Y3",fees_total:"FeesStructure_fees_total__cKFTc",fees_card_hover:"FeesStructure_fees_card_hover__Zk7go",fees_card_hover_active:"FeesStructure_fees_card_hover_active__UBnHh",fee_middle_section:"FeesStructure_fee_middle_section__gjhYY",fee_middle_confirm_button:"FeesStructure_fee_middle_confirm_button__8gUBE",fee_middle_section_container:"FeesStructure_fee_middle_section_container__9vxAB",edit_icon:"FeesStructure_edit_icon__iHti3",category_card_hover:"FeesStructure_category_card_hover__O3rP9",category_card_hover_active:"FeesStructure_category_card_hover_active__N2YXu",menu_icon:"FeesStructure_menu_icon__-c1NS",upload_excel_container:"FeesStructure_upload_excel_container__48yxn",upload_excel_file:"FeesStructure_upload_excel_file__1hxAU",seating_modal:"FeesStructure_seating_modal__cEUXs",add_category_modal_title_active:"FeesStructure_add_category_modal_title_active__bnkEx",notify_container:"FeesStructure_notify_container__f1n9o",notify_text:"FeesStructure_notify_text__Yqwka",next_btn:"FeesStructure_next_btn__Kc+CA",btn_group:"FeesStructure_btn_group__xycY6",leave_dates:"FeesStructure_leave_dates__nByRK",letter_head_container:"FeesStructure_letter_head_container__sRo4F",modal_container:"FeesStructure_modal_container__orQgp",modal_container_outer_header:"FeesStructure_modal_container_outer_header__RSzLS",modal_container_header:"FeesStructure_modal_container_header__F-XEd",fm_search_full:"FeesStructure_fm_search_full__wKV++",fm_search_full_container:"FeesStructure_fm_search_full_container__lYJ8u",fm_search_full_container_inner:"FeesStructure_fm_search_full_container_inner__pZb5S",fm_search_full_icon:"FeesStructure_fm_search_full_icon__wFTld",afsi_container:"FeesStructure_afsi_container__DBw6W"}},15783:function(e,t){"use strict";t.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},42480:function(){}}]);
//# sourceMappingURL=86911.fa21638b.chunk.js.map