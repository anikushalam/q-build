"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[26293],{45474:(e,i,s)=>{s.d(i,{Z:()=>u});var l=s(72791),n=s(38733),t=s(36665),a=s(98094),o=s(97655),d=s(39230),c=s(98734),r=s(84959),v=s(80184);const u=e=>{let{onLoginDetailToggle:i,loginData:s,sid:u,onRefetch:f,is_staff:m}=e;const{t:_}=(0,d.$G)(),[h,x]=(0,l.useState)({phone:(null===s||void 0===s?void 0:s.userPhoneNumber)||"",email:(null===s||void 0===s?void 0:s.userEmail)||""}),[j,p]=(0,l.useState)(!1),[Z]=(0,r.gY)(),[g]=(0,r.ZS)();(0,l.useEffect)((()=>{s&&x((e=>({...e,phone:(null===s||void 0===s?void 0:s.userPhoneNumber)||"",email:(null===s||void 0===s?void 0:s.userEmail)||""})))}),[s]);const N=e=>{x((i=>({...i,[e.target.name]:e.target.value})))};return(0,v.jsx)(t.Z,{onClose:i,children:(0,v.jsxs)("div",{className:n.Z.login_details_modal,children:[(0,v.jsx)("h6",{children:_("login_details")}),(0,v.jsx)(a.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,v.jsx)(o.Z,{labelText:_("mobile_number"),placeholder:_("mobile_number_placeholder"),name:"phone",value:h.phone,type:"text",onChange:N}),(0,v.jsx)(o.Z,{labelText:_("email"),placeholder:_("email_placeholder"),name:"email",value:h.email,type:"text",onChange:N}),(0,v.jsx)("button",{className:n.Z.login_details_btn,onClick:()=>{p((e=>!e)),m?g({login_details:{phone:h.phone,email:h.email,sid:u}}).then((()=>{f(),p((e=>!e)),i()})).catch({}):Z({login_details:{phone:h.phone,email:h.email,sid:u}}).then((()=>{f(),p((e=>!e)),i()})).catch({})},children:_("update")}),j&&(0,v.jsx)(c.Z,{})]})})}},47167:(e,i,s)=>{s.d(i,{Z:()=>d});s(72791);var l=s(16871),n=s(43504),t=s(23769),a=s(45639),o=s(80184);const d=e=>{let{tabList:i,activeIndexTab:s,setActiveIndexTab:d,customStyleTab:c,carryParentState:r,showAs:v,customStyleLink:u}=e;const f=(0,l.UO)();return(0,o.jsx)("div",{className:a.Z.universal_container,children:v?null===i||void 0===i?void 0:i.map(((e,i)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,o.jsx)("div",{className:s===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...u,opacity:"0.5"},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})},i):(0,o.jsx)(n.rU,{to:"/q/".concat(f.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...r},style:{...u},children:(0,o.jsx)("div",{className:s===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...c},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})})},i))):null===i||void 0===i?void 0:i.map(((e,i)=>(0,o.jsx)("div",{className:s===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,onClick:()=>d(null===e||void 0===e?void 0:e.id),style:{...c},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})},i)))})}},23769:(e,i,s)=>{s.d(i,{Z:()=>t});var l=s(72791),n=s(80184);const t=function(e){let{children:i,onclick:s}=e;const[t,a]=(0,l.useState)(!1),[o,d]=(0,l.useState)({x:-1,y:-1});return(0,l.useEffect)((()=>{-1!==o.x&&-1!==o.y?(a(!0),setTimeout((()=>a(!1)),1e3)):a(!1)}),[o]),(0,l.useEffect)((()=>{t||d({x:-1,y:-1})}),[t]),(0,n.jsxs)("div",{className:"ripple_btn",onClick:e=>{d({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),s&&s(e)},children:[t?(0,n.jsx)("span",{className:"ripple"}):"",(0,n.jsx)("span",{className:"content",children:i})]})}},88872:(e,i,s)=>{s.d(i,{Z:()=>f});var l=s(72791),n=s(55136),t=s(39230),a=s(89891),o=s(16871),d=s(34314),c=s(1095),r=s(98684),v=s(80184);const u={inputProps:{"aria-label":"Switch demo"}},f=e=>{var i,s,f,m,_,h,x,j,p,Z,g,N,T,S;let{textLevel:y,onPrevious:C,onNext:I,onClose:b,viewAs:k,is_admission:E,admissionTitle:A,onAdmissionTitle:L,is_install:U,installTitle:D,onInstallTitle:w,installmentEdit:O,sid:P,instituteId:G,textLevelInner:M,onConfig:R,configTitle:F,onConfig1:q,configTitle1:z,isStaff:$,activeUrl:Y,pdfPrint:B}=e;const{t:H}=(0,t.$G)(),[V,J]=(0,l.useState)(!1),W=(0,o.TH)();(0,o.UO)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:n.Z.staff_header_container,children:[(0,v.jsxs)("h6",{className:n.Z.staff_header_text,children:[y,M?(0,v.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:M}):"","student"===Y?(null===B||void 0===B||null===(i=B[(null===B||void 0===B?void 0:B.length)-1])||void 0===i?void 0:i.value)&&(0,v.jsx)("a",{href:"".concat(c.q2,"/").concat(null===B||void 0===B||null===(s=B[(null===B||void 0===B?void 0:B.length)-1])||void 0===s?void 0:s.value),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",marginLeft:"0.6rem"},children:(0,v.jsx)("img",{src:"".concat(r.U_,"/download.svg"),alt:"receipt icon",title:"View Application Admission Form",style:{width:"1.2rem",height:"1.2rem"}})}):""]}),"DEPARTMENT_HEAD"===k?"YES"===(null===(f=W.state)||void 0===f?void 0:f.editAuthority)?null:(0,v.jsxs)("div",{className:n.Z.staff_header_function,children:[(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:R,style:{color:"#0000ff"},children:F}),(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:q,style:{color:"#0000ff"},children:z})]}):null,!k&&(0,v.jsxs)("div",{className:n.Z.staff_header_function,children:[(0,v.jsxs)("div",{className:n.Z.staff_header_prev,onClick:C,children:[(0,v.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,v.jsx)("span",{children:H("prev")})]}),(0,v.jsxs)("div",{className:n.Z.staff_header_next,onClick:I,children:[(0,v.jsx)("span",{children:H("next")}),(0,v.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,v.jsx)("p",{className:n.Z.staff_header_close,onClick:b,children:H("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===k&&(0,v.jsxs)("div",{className:n.Z.staff_header_function,children:[(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:L,style:{color:"#0000ff"},children:A}),$?"":(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:()=>J(!0),style:{color:"#0000ff"},children:H("student_message")}),(0,v.jsx)("p",{className:n.Z.staff_header_close,onClick:b,children:H("close_")})]}),"STUDENT_MESSAGE"===(null===(m=W.state)||void 0===m?void 0:m.studentMessaageView)&&"STUDENT_SECTION"!==(null===(_=W.state)||void 0===_?void 0:_.viewAs)&&(0,v.jsx)("div",{className:n.Z.staff_header_function,children:(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:()=>J(!0),style:{color:"#0000ff"},children:H("student_message")})}),E?(0,v.jsxs)("div",{className:n.Z.admission_actions,children:[U&&(0,v.jsxs)("p",{className:n.Z.staff_header_text,style:{color:"#0000ff"},children:[D,(0,v.jsx)(a.Z,{...u,checked:O,onChange:w})]}),"STUDENT_SECTION"===(null===(h=W.state)||void 0===h?void 0:h.viewAs)&&(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:()=>J(!0),style:{color:"#0000ff"},children:H("student_message")}),(0,v.jsx)("p",{className:n.Z.staff_header_text,onClick:L,style:{color:"#0000ff"},children:A})]}):""]}),V&&(0,v.jsx)(d.Z,{onClose:()=>J(!1),sendStudentList:null!==(x=null===(j=W.state)||void 0===j?void 0:j.sid)&&void 0!==x?x:P,instituteId:null!==(p=null===(Z=W.state)||void 0===Z?void 0:Z.instituteId)&&void 0!==p?p:G,accessAs:null!==(g=null===(N=W.state)||void 0===N?void 0:N.viewAs)&&void 0!==g?g:"INSTITUTE_ADMIN",headId:null!==(T=null===(S=W.state)||void 0===S?void 0:S.headId)&&void 0!==T?T:G})]})}},26293:(e,i,s)=>{s.r(i),s.d(i,{default:()=>k});var l=s(72791),n=s(8793),t=s(6245),a=s(47167),o=s(69721),d=s(98094),c=s(88872),r=s(39230),v=s(55136),u=(s(60600),s(56521)),f=s(45474),m=s(89064),_=s(16871),h=s(43504),x=s(98684),j=s(90904),p=s(93638),Z=s(38857),g=s(21348),N=s(16925),T=s(80184);const S=e=>{let{onRemove:i,onClose:s}=e;const{t:l}=(0,r.$G)();return(0,T.jsx)(Z.Z,{onClose:s,children:(0,T.jsxs)("div",{className:N.Z.modal_container,children:[(0,T.jsx)(g.default,{children:(0,T.jsxs)("div",{className:N.Z.modal_container_outer_header,children:[(0,T.jsx)("div",{className:N.Z.modal_container_header,children:(0,T.jsx)("h6",{children:l("remove_staff")})}),(0,T.jsx)("img",{src:"".concat(x.J7,"/close.svg"),alt:"close icon",onClick:s})]})}),(0,T.jsx)(j.Z,{}),(0,T.jsx)(g.default,{customStyle:{paddingTop:"0"},children:(0,T.jsx)(p.Z,{label:"confirm",onAction:i,customStyle:{marginTop:"5rem"}})})]})})},y=e=>{let{onClose:i,sid:s,instituteId:n}=e;const{t:a}=(0,r.$G)(),[o,d]=(0,l.useState)(!1),[c,v]=(0,l.useState)(!1),u=(0,_.UO)(),f=(0,_.s0)(),[x]=(0,t.Oo)();return(0,T.jsx)(T.Fragment,{children:c?(0,T.jsx)(S,{onClose:()=>v(!1),onRemove:()=>{s&&(v(!1),d((e=>!e)),x({sid:s}).then((()=>{d((e=>!e)),f("/q/".concat(u.username,"/feed"))})).catch({}))}}):(0,T.jsxs)(m.Z,{onClose:i,disabled:o,children:[(0,T.jsx)(h.rU,{to:"/q/".concat(u.username,"/edit/staff"),state:{openAs:"INSTITUTE_SIDE",sid:s,instituteId:n},style:{width:"100%"},children:(0,T.jsx)("h6",{children:a("edit")})}),(0,T.jsx)("h6",{onClick:()=>v(!0),children:a("remove")})]})})};var C=s(12725);const I=l.lazy((()=>Promise.all([s.e(60438),s.e(71617),s.e(43149),s.e(81400),s.e(22482)]).then(s.bind(s,81400)))),b=l.lazy((()=>Promise.all([s.e(31606),s.e(1239)]).then(s.bind(s,31606)))),k=e=>{var i,s,m,_,h,x,j,p,Z,g,N,S,k,E,A,L,U;let{sid:D,onClose:w}=e;const{t:O}=(0,r.$G)(),P=[{name:O("about"),id:0},{name:O("attendance"),id:1},{name:O("payroll_info"),id:2}],[G,M]=(0,l.useState)(0),[R,F]=(0,l.useState)(!1),[q,z]=(0,l.useState)(""),{oneStaffProfile:$,oneStaffProfileRefetch:Y}=(0,t.CF)({sid:D,skip:!D});(0,l.useEffect)((()=>{D&&Y()}),[D,Y]);const B=()=>{F((e=>!e))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:v.Z.staff_profile_container,children:[(0,T.jsx)(c.Z,{textLevel:O("staff_profile_ins"),onClose:w,viewAs:"INSTITUTE_LOGIN_DETAILS",admissionTitle:O("login_details"),onAdmissionTitle:B,isStaff:!0}),(0,T.jsx)(d.Z,{}),(0,T.jsx)(u.Z,{name:"".concat((null===$||void 0===$||null===(i=$.staff)||void 0===i?void 0:i.staffFirstName)||""," ").concat(null!==$&&void 0!==$&&null!==(s=$.staff)&&void 0!==s&&s.staffMiddleName?null===$||void 0===$||null===(m=$.staff)||void 0===m?void 0:m.staffMiddleName:""," ").concat((null===$||void 0===$||null===(_=$.staff)||void 0===_?void 0:_.staffLastName)||""),designation:"Designations: ".concat((null===$||void 0===$||null===(h=$.staff)||void 0===h?void 0:h.staffDesignationCount)||0),indexNumber:"Index No. ".concat((null===$||void 0===$||null===(x=$.staff)||void 0===x?void 0:x.staffROLLNO)||"-"),dynamicImage:"1"!==(null===$||void 0===$||null===(j=$.staff)||void 0===j?void 0:j.photoId)?"".concat(o.yI,"/").concat(null===$||void 0===$||null===(p=$.staff)||void 0===p?void 0:p.staffProfilePhoto):"/images/ins_default_profile.svg",sid:null===$||void 0===$||null===(Z=$.staff)||void 0===Z?void 0:Z._id,activeUrl:"staff",currentDesignation:"".concat(O("form_current_designation_label"),": ").concat(null!==(g=null===$||void 0===$||null===(N=$.staff)||void 0===N?void 0:N.current_designation)&&void 0!==g?g:""),onStaffInstituteSide:()=>{z(D)}}),(0,T.jsx)(a.Z,{tabList:P,activeIndexTab:G,setActiveIndexTab:M,customStyleTab:{width:"280px"}}),(0,T.jsx)(d.Z,{}),0===G&&(0,T.jsx)(C.Z,{staffId:D}),1===G&&(0,T.jsx)(n.Z,{children:(0,T.jsx)(b,{sid:null===$||void 0===$||null===(S=$.staff)||void 0===S?void 0:S._id})}),2===G&&(0,T.jsx)(n.Z,{children:(0,T.jsx)(I,{sid:null===$||void 0===$||null===(k=$.staff)||void 0===k?void 0:k._id})}),R&&(0,T.jsx)(f.Z,{onLoginDetailToggle:B,loginData:null===$||void 0===$||null===(E=$.staff)||void 0===E?void 0:E.user,sid:null===$||void 0===$||null===(A=$.staff)||void 0===A?void 0:A._id,onRefetch:Y,is_staff:!0})]}),q&&(0,T.jsx)(y,{onClose:()=>{z("")},sid:q,instituteId:null===$||void 0===$||null===(L=$.staff)||void 0===L||null===(U=L.institute)||void 0===U?void 0:U._id})]})}},89064:(e,i,s)=>{s.d(i,{Z:()=>d});var l=s(55336),n=s(38857);const t="Modal_modal_menu_card__d0zzt";var a=s(90904),o=s(80184);const d=e=>{let{onClose:i,disabled:s,heading:d,customStyle:c,customBackdropStyle:r,customOverlayStyle:v,children:u}=e;return(0,o.jsx)(n.Z,{onClose:()=>{if(s)return null;i()},customBackdropStyle:r,customOverlayStyle:v,children:(0,o.jsxs)("div",{className:t,style:c,children:[d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h5",{children:d}),(0,o.jsx)(a.Z,{})]}):null,u,s&&(0,o.jsx)(l.default,{})]})})}},45639:(e,i,s)=>{s.d(i,{Z:()=>l});const l={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=26293.7a814eaa.chunk.js.map