"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[76663],{60233:function(e,t,l){l.d(t,{Z:function(){return _}});var a=l(1413),n=l(93433),i=l(29439),o=l(72791),c=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,l=new Date,a="".concat(l.getDate(),"-").concat(l.getMonth()+1,"-").concat(l.getFullYear()),d=[1,2,3,4,5,6,0],u=(0,o.useState)(l),r=(0,i.Z)(u,2),h=r[0],v=r[1],m=new Date(h.getFullYear(),h.getMonth()+1,0),_=new Date(h.getFullYear(),h.getMonth(),0),x=m.getDate(),b=new Date(h.getFullYear(),h.getMonth(),1).getDay(),y=d.indexOf(b)+1,f=_.getDate()-d.indexOf(b)+1,g=1,j=1,Z={},p=1;p<7;p++)for(var w=1;w<8;w++)Z[p]||(Z[p]=[]),1===p?w<y?(Z[p]=[].concat((0,n.Z)(Z[p]),[{classes:"in-prev-month",date:"".concat(f,"-").concat(0===h.getMonth()?12:h.getMonth(),"-").concat(0===h.getMonth()?h.getFullYear()-1:h.getFullYear()),value:f}]),f++):(Z[p]=[].concat((0,n.Z)(Z[p]),[{classes:"",date:"".concat(g,"-").concat(h.getMonth()+1,"-").concat(h.getFullYear()),value:g}]),g++):p>1&&g<x+1?(Z[p]=[].concat((0,n.Z)(Z[p]),[{classes:"",date:"".concat(g,"-").concat(h.getMonth()+1,"-").concat(h.getFullYear()),value:g}]),g++):(Z[p]=[].concat((0,n.Z)(Z[p]),[{classes:"in-next-month",date:"".concat(j,"-").concat(h.getMonth()+2===13?1:h.getMonth()+2,"-").concat(h.getMonth()+2===13?h.getFullYear()+1:h.getFullYear()),value:j}]),j++);return{daysShort:e,monthNames:t,todayFormatted:a,calendarRows:Z,selectedDate:h,getPrevMonth:function(){v((function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}))},getNextMonth:function(){v((function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}))},getDesiredData:function(e){v(new Date("".concat(e.month," ").concat(e.year)))},setSelectedDate:v}},u=l(80184);var r=function(e){var t=e.handleClick;return(0,u.jsx)("div",{children:(0,u.jsx)("img",{className:"arrowicon",src:"/images/Input/arrow-left.svg",alt:"",onClick:t})})};var h=function(e){var t=e.handleClick;return(0,u.jsx)("div",{children:(0,u.jsx)("img",{className:"arrowicon",src:"/images/Input/arrow-right.svg",alt:"",onClick:t})})},v=l(39230),m={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},_=function(e){var t=e.range,l=e.onClose,c=e.dateInput,s=e.setDateInput,_=e.datePickerPosition,x=e.isClose,b=e.isMultiple,y=(0,v.$G)().t,f=d(),g=f.calendarRows,j=f.selectedDate,Z=f.todayFormatted,p=f.daysShort,w=f.monthNames,S=f.getNextMonth,F=f.getPrevMonth,T=f.setSelectedDate,C=(0,o.useState)([]),N=(0,i.Z)(C,2),V=(N[0],N[1]),M=(0,o.useState)(0),k=(0,i.Z)(M,2),E=k[0],D=k[1],Y=(0,o.useState)({date:"",month:w[j.getMonth()],year:j.getFullYear().toString()}),P=(0,i.Z)(Y,2),I=P[0],A=P[1],B=(0,o.useState)([]),O=(0,i.Z)(B,2),L=O[0],R=O[1],U=new Date;"".concat(U.getDate()<10?"0".concat(U.getDate()):U.getDate(),"/").concat(U.getMonth()+1<10?"0".concat(U.getMonth()+1):U.getMonth()+1,"/").concat(U.getFullYear());var q=function(){for(var e=(new Date).getFullYear(),t=e-70,l=[],a=e+30;a>=t;a--)l.push(a);return l}(),G=function(e){if(t)if(L.length>0&&L.includes(e)){var a=L.filter((function(t){return t!==e}));!function(e){R(e)}(a),V(a)}else!function(e){R((function(t){return[].concat((0,n.Z)(t),[e])}))}(e),V((function(t){return[].concat((0,n.Z)(t),[e])}));else R(e),s(e),x||setTimeout((function(){!t&&l()}),100)},J=(new Date).getFullYear(),W=Math.ceil(q.length/12),$=q.indexOf(J),z=Math.ceil($/12),H=(0,o.useState)(z),K=(0,i.Z)(H,2),X=K[0],Q=K[1],ee=12*X,te=ee-12,le=q.slice(te,ee);return(0,o.useEffect)((function(){t&&s(L)}),[L]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{onClick:l,style:m}),(0,u.jsxs)("div",{className:"datepickercontainer",style:(0,a.Z)({},_),children:[(0,u.jsxs)("div",{className:"calenderheader",children:[(0,u.jsxs)("div",{className:"calenderheaderleft",children:[(0,u.jsx)("h6",{className:"month",onClick:function(){return D(1)},children:"".concat(w[j.getMonth()])}),(0,u.jsxs)("div",{className:"yearcontainer",onClick:function(){return D(2)},children:[(0,u.jsx)("h6",{className:"year",children:"".concat(j.getFullYear())}),(0,u.jsx)("img",{className:"arrow",src:"/images/Input/dropdown-icon.svg",alt:""})]})]}),0===E&&(0,u.jsxs)("div",{className:"calenderheaderright",children:[(0,u.jsx)(r,{handleClick:F}),(0,u.jsx)(h,{handleClick:S})]}),2===E&&(0,u.jsxs)("div",{className:"calenderheaderright",children:[(0,u.jsx)(r,{handleClick:function(){X>1&&Q(X-1)}}),(0,u.jsx)(h,{handleClick:function(){X<W&&Q(X+1)}})]})]}),1===E&&(0,u.jsx)("div",{className:"monthscontainer",children:w.map((function(e,t){return(0,u.jsx)("div",{className:"monththh",onClick:function(){A((0,a.Z)((0,a.Z)({},I),{},{month:e})),T(new Date("".concat(e," ").concat(I.year))),D(0)},children:e},t)}))}),0===E&&(0,u.jsxs)("table",{className:"table",children:[(0,u.jsx)("thead",{children:(0,u.jsx)("tr",{children:p.map((function(e){return(0,u.jsx)("th",{className:"day",children:e},e)}))})}),(0,u.jsx)("tbody",{children:Object.values(g).map((function(e){return(0,u.jsx)("tr",{children:e.map((function(e){return e.date===Z?(0,u.jsx)("td",{className:"".concat(e.classes," date"),onClick:function(){G("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(j.getMonth()+1<10?"0".concat(j.getMonth()+1):j.getMonth()+1,"/").concat(j.getFullYear()))},children:(0,u.jsx)("div",{className:L.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(j.getMonth()+1<10?"0".concat(j.getMonth()+1):j.getMonth()+1,"/").concat(j.getFullYear()))||c==="".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(j.getMonth()+1<10?"0".concat(j.getMonth()+1):j.getMonth()+1,"/").concat(j.getFullYear())?"".concat(e.classes," datediv  active"):"".concat(e.classes," datediv aaji"),children:e.value})},e.date):"in-prev-month"===e.classes||"in-next-month"===e.classes?(0,u.jsx)("td",{className:"".concat(e.classes," date"),children:(0,u.jsx)("div",{className:"".concat(e.classes," datediv "),children:e.value})},e.date):(0,u.jsx)("td",{className:"".concat(e.classes," date"),onClick:function(){return G("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(j.getMonth()+1<10?"0".concat(j.getMonth()+1):j.getMonth()+1,"/").concat(j.getFullYear()))},children:(0,u.jsx)("div",{className:L.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(j.getMonth()+1<10?"0".concat(j.getMonth()+1):j.getMonth()+1,"/").concat(j.getFullYear()))?"".concat(e.classes," datediv  active"):"".concat(e.classes," datediv "),children:e.value})},e.date)}))},e[0].date)}))})]}),2===E&&(0,u.jsx)("div",{className:"monthscontainer",children:le.map((function(e,t){return(0,u.jsx)("div",{className:J===e?" monthactive":" monththh",onClick:function(){A((0,a.Z)((0,a.Z)({},I),{},{year:e})),T(new Date("".concat(e," ").concat(I.month))),D(0)},children:e},t)}))}),b&&(0,u.jsx)("div",{className:"multiple_select_btn",onClick:l,children:y("select")})]})]})}},59965:function(e,t,l){var a=l(1413),n=l(29439),i=l(72791),o=l(38733),c=l(60233),s=l(80184);t.Z=function(e){var t=e.customStyleContainer,l=e.labelText,d=e.errorShow,u=e.value,r=e.name,h=e.placeholder,v=e.onDateFunction,m=e.datePickerPosition,_=e.customStyleLabel,x=e.customStyleCaledarIcon,b=e.customStyleInput,y=e.isMultiple,f=(0,i.useState)(!1),g=(0,n.Z)(f,2),j=g[0],Z=g[1],p=function(){Z(!0)};return(0,s.jsxs)("div",{className:o.Z.join_form_container,style:(0,a.Z)({},t),children:[(0,s.jsxs)("label",{className:o.Z.join_form_label,htmlFor:r,style:(0,a.Z)({},_),children:[l," ",d&&(0,s.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,s.jsx)("input",{className:o.Z.join_form_input,type:"text",value:u,name:r,placeholder:h||"dd/mm/yyyy",onFocus:p,style:(0,a.Z)({},b)}),(0,s.jsx)("img",{className:o.Z.arrowIcon,src:"/images/Input/calendar.svg",alt:"calender icon",onClick:p,style:(0,a.Z)({},x)}),j&&(0,s.jsx)(c.Z,{datePickerPosition:m?(0,a.Z)({},m):{top:"-17rem",left:"1rem",borderRadius:"0.375rem",paddingBottom:"0"},range:y,onClose:function(){return Z(!1)},dateInput:u,setDateInput:v,isMultiple:y})]})}},47167:function(e,t,l){var a=l(1413),n=(l(72791),l(16871)),i=l(43504),o=l(23769),c=l(45639),s=l(80184);t.Z=function(e){var t=e.tabList,l=e.activeIndexTab,d=e.setActiveIndexTab,u=e.customStyleTab,r=e.carryParentState,h=e.showAs,v=e.customStyleLink,m=(0,n.UO)();return(0,s.jsx)("div",{className:c.Z.universal_container,children:h?null===t||void 0===t?void 0:t.map((function(e,t){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,s.jsx)("div",{className:l===(null===e||void 0===e?void 0:e.id)?"".concat(c.Z.universal_container_item," ").concat(c.Z.universal_container_item_active):c.Z.universal_container_item,style:(0,a.Z)((0,a.Z)({},v),{},{opacity:"0.5"}),children:(0,s.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,s.jsx)(i.rU,{to:"/q/".concat(m.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,a.Z)({},r),style:(0,a.Z)({},v),children:(0,s.jsx)("div",{className:l===(null===e||void 0===e?void 0:e.id)?"".concat(c.Z.universal_container_item," ").concat(c.Z.universal_container_item_active):c.Z.universal_container_item,style:(0,a.Z)({},u),children:(0,s.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})})},t)})):null===t||void 0===t?void 0:t.map((function(e,t){return(0,s.jsx)("div",{className:l===(null===e||void 0===e?void 0:e.id)?"".concat(c.Z.universal_container_item," ").concat(c.Z.universal_container_item_active):c.Z.universal_container_item,onClick:function(){return d(null===e||void 0===e?void 0:e.id)},style:(0,a.Z)({},u),children:(0,s.jsx)(o.Z,{children:null===e||void 0===e?void 0:e.name})},t)}))})}},23769:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(29439),n=l(72791),i=l(80184);var o=function(e){var t=e.children,l=e.onclick,o=(0,n.useState)(!1),c=(0,a.Z)(o,2),s=c[0],d=c[1],u=(0,n.useState)({x:-1,y:-1}),r=(0,a.Z)(u,2),h=r[0],v=r[1];return(0,n.useEffect)((function(){-1!==h.x&&-1!==h.y?(d(!0),setTimeout((function(){return d(!1)}),1e3)):d(!1)}),[h]),(0,n.useEffect)((function(){s||v({x:-1,y:-1})}),[s]),(0,i.jsxs)("div",{className:"ripple_btn",onClick:function(e){v({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),l&&l(e)},children:[s?(0,i.jsx)("span",{className:"ripple"}):"",(0,i.jsx)("span",{className:"content",children:t})]})}},47174:function(e,t,l){var a=l(37762),n=l(29439),i=l(72791),o=l(98094),c=l(32589),s=l(39230),d=l(52864),u=l(80184);t.Z=function(e){var t=e.student,l=e.viewAs,r=(0,s.$G)().t,h=(0,i.useState)(""),v=(0,n.Z)(h,2),m=v[0],_=v[1];return(0,i.useEffect)((function(){var e;if(null!==t&&void 0!==t&&null!==(e=t.studentDocuments)&&void 0!==e&&e.length){var l,n={},i=(0,a.Z)(null===t||void 0===t?void 0:t.studentDocuments);try{for(i.s();!(l=i.n()).done;){var o=l.value;n[null===o||void 0===o?void 0:o.documentName]=null===o||void 0===o?void 0:o.documentKey}}catch(c){i.e(c)}finally{i.f()}_(n)}}),[null===t||void 0===t?void 0:t.studentDocuments]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.Z,{labelTag:r("personal_info"),children:[(0,u.jsx)(c.Z,{labelText1:r("name"),labelValue1:"".concat((null===t||void 0===t?void 0:t.studentFirstName)||""," ").concat(null!==t&&void 0!==t&&t.studentMiddleName?null===t||void 0===t?void 0:t.studentMiddleName:""," ").concat((null===t||void 0===t?void 0:t.studentLastName)||""),labelText2:r("form_prn_enr_student_label"),labelValue2:(null===t||void 0===t?void 0:t.student_prn_enroll_number)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("dob"),labelValue1:(null===t||void 0===t?void 0:t.studentDOB)||"",labelText2:r("gender"),labelValue2:(null===t||void 0===t?void 0:t.studentGender)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("mother_name"),labelValue1:(null===t||void 0===t?void 0:t.studentMotherName)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsxs)(d.Z,{labelTag:r("other_personal"),children:[(0,u.jsx)(c.Z,{labelText1:r("birth_place"),labelValue1:(null===t||void 0===t?void 0:t.studentBirthPlace)||"",labelText2:r("student_mobile"),labelValue2:(null===t||void 0===t?void 0:t.studentPhoneNumber)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("ration_card"),labelValue1:(null===t||void 0===t?void 0:t.studentFatherRationCardColor)||"",labelText2:r("aadhar_number"),labelValue2:(null===t||void 0===t?void 0:t.studentAadharNumber)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("email"),labelValue1:(null===t||void 0===t?void 0:t.studentEmail)||"",labelText2:r("blood_group"),labelValue2:(null===t||void 0===t?void 0:t.student_blood_group)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsxs)(d.Z,{labelTag:r("i_details"),children:[(0,u.jsx)(c.Z,{labelText1:r("nationality"),labelValue1:(null===t||void 0===t?void 0:t.studentNationality)||"",labelText2:r("cast_category"),labelValue2:(null===t||void 0===t?void 0:t.studentCastCategory)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("religion"),labelValue1:(null===t||void 0===t?void 0:t.studentReligion)||"",labelText2:r("mother_tongue"),labelValue2:(null===t||void 0===t?void 0:t.studentMTongue)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("cast"),labelValue1:(null===t||void 0===t?void 0:t.studentCast)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsx)(d.Z,{labelTag:r("address_"),children:(0,u.jsx)(c.Z,{labelText1:r("c_add"),labelValue1:"".concat((null===t||void 0===t?void 0:t.studentCurrentAddress)||"").concat(null!==t&&void 0!==t&&t.studentCurrentPincode?" , ":"").concat((null===t||void 0===t?void 0:t.studentCurrentPincode)||""),labelText2:r("p_add"),labelValue2:"".concat((null===t||void 0===t?void 0:t.studentAddress)||"").concat(null!==t&&void 0!==t&&t.studentCurrentPincode?" , ":"").concat((null===t||void 0===t?void 0:t.studentPincode)||""),customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsxs)(d.Z,{labelTag:r("parent_info"),children:[(0,u.jsx)(c.Z,{labelText1:r("name"),labelValue1:(null===t||void 0===t?void 0:t.studentParentsName)||"",labelText2:r("mobile_bumber"),labelValue2:(null===t||void 0===t?void 0:t.studentParentsPhoneNumber)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("occupation"),labelValue1:(null===t||void 0===t?void 0:t.studentParentsOccupation)||"",labelText2:r("annual_income"),labelValue2:(null===t||void 0===t?void 0:t.studentParentsAnnualIncom)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsxs)(d.Z,{labelTag:r("prev_school_and_document"),children:[(0,u.jsx)(c.Z,{labelText1:r("prev_school"),labelValue1:(null===t||void 0===t?void 0:t.studentPreviousSchool)||"",labelText2:r("aadhar_back"),labelValue2:null===t||void 0===t?void 0:t.studentAadharBackCard,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("aadhar_front"),labelValue1:null===t||void 0===t?void 0:t.studentAadharFrontCard,labelFile1:!0,labelText2:r("caste_"),labelValue2:null===t||void 0===t?void 0:t.studentCasteCertificatePhoto,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_identity_view_label"),labelValue1:null===m||void 0===m?void 0:m.identityDocument,labelFile1:!0,labelText2:r("form_joining_transfer_letter_view_label"),labelValue2:null===m||void 0===m?void 0:m.joiningTransferLetter,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_leaving_transfer_letter_view_label"),labelValue1:null===m||void 0===m?void 0:m.leavingTransferCertificate,labelFile1:!0,labelText2:r("form_income_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.incomeCertificate,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_last_year_marksheet_view_label"),labelValue1:null===m||void 0===m?void 0:m.lastYearMarksheet,labelFile1:!0,labelText2:r("form_nationality_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.nationalityCertificate,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_domicile_certificate_view_label"),labelValue1:null===m||void 0===m?void 0:m.domicileCertificate,labelFile1:!0,labelText2:r("form_non_creamy_layer_view_label"),labelValue2:null===m||void 0===m?void 0:m.nonCreamyLayerCertificate,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsxs)(d.Z,{labelTag:r("bank_details"),children:[(0,u.jsx)(c.Z,{labelText1:r("form_bank_name_label"),labelValue1:(null===t||void 0===t?void 0:t.studentBankName)||"",labelText2:r("form_ifsc_code_label"),labelValue2:(null===t||void 0===t?void 0:t.studentBankIfsc)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("acnt_holder"),labelValue1:(null===t||void 0===t?void 0:t.studentBankAccountHolderName)||"",labelText2:r("bank_passbook"),labelValue2:null===t||void 0===t?void 0:t.studentBankPassbook,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("account_holder"),labelValue1:(null===t||void 0===t?void 0:t.studentBankAccount)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsx)(d.Z,{labelTag:r("id_card_details"),children:(0,u.jsx)(c.Z,{labelText1:r("id_card_front"),labelValue1:(null===m||void 0===m?void 0:m.student_id_card_front)||"",labelFile1:!0,labelText2:r("id_card_back"),labelValue2:null===m||void 0===m?void 0:m.student_id_card_back,labelFile2:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),(0,u.jsx)(d.Z,{labelTag:r("anti_ragging_details"),children:(0,u.jsx)(c.Z,{howManyField:1,labelText1:r("anti_ragging"),labelValue1:null===m||void 0===m?void 0:m.student_anti_ragging,labelFile1:!0,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""}),((null===t||void 0===t?void 0:t.student_gate_score)||(null===t||void 0===t?void 0:t.student_degree_institute))&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.Z,{labelTag:r("form_student_pg_details_label"),children:[(0,u.jsx)(c.Z,{labelText1:r("form_gate_score_label"),labelValue1:(null===t||void 0===t?void 0:t.student_gate_score)||"",labelText2:r("form_gate_year_label"),labelValue2:(null===t||void 0===t?void 0:t.student_gate_year)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_degree_institute_label"),labelValue1:(null===t||void 0===t?void 0:t.student_degree_institute)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:{width:"100%"}}),(0,u.jsx)(c.Z,{labelText1:r("form_degree_year_label"),labelValue1:(null===t||void 0===t?void 0:t.student_degree_year)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"100%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_marks_obtained_total_credits_label"),labelValue1:(null===t||void 0===t?void 0:t.student_pre_sem_obtained_points)||"",labelText2:r("form_grand_total_total_grade_point_label"),labelValue2:(null===t||void 0===t?void 0:t.student_pre_sem_total_points)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_marks_obtained_total_credits_label"),labelValue1:(null===t||void 0===t?void 0:t.student_final_sem_obtained_points)||"",labelText2:r("form_grand_total_total_grade_point_label"),labelValue2:(null===t||void 0===t?void 0:t.student_final_sem_total_points)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_class_api_label"),labelValue1:(null===t||void 0===t?void 0:t.student_percentage_cpi)||"",howManyField:1,customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""})]}),(null===t||void 0===t?void 0:t.student_hostel_cpi)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.Z,{labelTag:r("hostel_cpi"),children:[(0,u.jsx)(c.Z,{labelText1:r("form_student_programme_label"),labelValue1:(null===t||void 0===t?void 0:t.student_programme)||"",labelText2:r("form_student_branch_label"),labelValue2:(null===t||void 0===t?void 0:t.student_branch)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_student_year_label"),labelValue1:(null===t||void 0===t?void 0:t.student_year)||"",labelText2:r("form_hostel_cpi_label"),labelValue2:(null===t||void 0===t?void 0:t.student_hostel_cpi)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""}),(0,u.jsx)(c.Z,{labelText1:r("form_student_single_seater_room_label"),labelValue1:(null===t||void 0===t?void 0:t.student_single_seater_room)||"",labelText2:r("form_student_ph_label"),labelValue2:(null===t||void 0===t?void 0:t.student_ph)||"",customStyleContainer:l?{width:"1140px"}:"",customStyleEachField:l?{width:"45%"}:""})]}),(0,u.jsx)(o.Z,{customStyle:l?{width:"100%"}:""})]})]})}},32589:function(e,t,l){var a=l(1413),n=l(29439),i=l(72791),o=l(93097),c=l(55136),s=l(80184);t.Z=function(e){var t=e.labelText1,l=e.labelValue1,d=e.labelText2,u=e.labelValue2,r=e.labelFile1,h=e.labelFile2,v=e.howManyField,m=e.customStyleContainer,_=e.customStyleEachField,x=(0,i.useState)(""),b=(0,n.Z)(x,2),y=b[0],f=b[1],g=function(e){f(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:c.Z.each_field_container,style:(0,a.Z)({},m),children:[(0,s.jsxs)("div",{className:c.Z.each_field,style:(0,a.Z)({},_),children:[(0,s.jsxs)("p",{className:c.Z.each_field_text,children:[t," : "]}),r?(0,s.jsx)("h6",{className:c.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return g(l)},children:l?"View":"N/A"}):(0,s.jsx)("h6",{className:c.Z.each_field_text_value,children:l})]}),1!==v&&(0,s.jsxs)("div",{className:c.Z.each_field,style:(0,a.Z)({},_),children:[(0,s.jsxs)("p",{className:c.Z.each_field_text,children:[d," : "]}),h?(0,s.jsx)("h6",{className:c.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return g(u)},children:u?"View":"N/A"}):(0,s.jsx)("h6",{className:c.Z.each_field_text_value,children:u})]})]}),y&&(0,s.jsx)(o.Z,{onClose:function(){f("")},keyValue:y})]})}},52864:function(e,t,l){l(72791);var a=l(55136),n=l(80184);t.Z=function(e){var t=e.labelTag,l=e.children;return(0,n.jsxs)("div",{className:a.Z.each_info_container,children:[(0,n.jsx)("h5",{children:t}),l]})}},45639:function(e,t){t.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=76663.cfcbb41f.chunk.js.map