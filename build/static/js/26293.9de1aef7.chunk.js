"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[26293],{45474:(e,s,i)=>{i.d(s,{Z:()=>f});var n=i(72791),l=i(38733),t=i(36665),a=i(98094),o=i(97655),d=i(39230),c=i(98734),r=i(84959),v=i(80184);const f=e=>{let{onLoginDetailToggle:s,loginData:i,sid:f,onRefetch:u,is_staff:_}=e;const{t:m}=(0,d.$G)(),[h,x]=(0,n.useState)({phone:(null===i||void 0===i?void 0:i.userPhoneNumber)||"",email:(null===i||void 0===i?void 0:i.userEmail)||""}),[j,Z]=(0,n.useState)(!1),[p]=(0,r.gY)(),[N]=(0,r.ZS)();(0,n.useEffect)((()=>{i&&x((e=>({...e,phone:(null===i||void 0===i?void 0:i.userPhoneNumber)||"",email:(null===i||void 0===i?void 0:i.userEmail)||""})))}),[i]);const g=e=>{x((s=>({...s,[e.target.name]:e.target.value})))};return(0,v.jsx)(t.Z,{onClose:s,children:(0,v.jsxs)("div",{className:l.Z.login_details_modal,children:[(0,v.jsx)("h6",{children:m("login_details")}),(0,v.jsx)(a.Z,{customStyle:{width:"100%",marginTop:"0.5rem"}}),(0,v.jsx)(o.Z,{labelText:m("mobile_number"),placeholder:m("mobile_number_placeholder"),name:"phone",value:h.phone,type:"text",onChange:g}),(0,v.jsx)(o.Z,{labelText:m("email"),placeholder:m("email_placeholder"),name:"email",value:h.email,type:"text",onChange:g}),(0,v.jsx)("button",{className:l.Z.login_details_btn,onClick:()=>{Z((e=>!e)),_?N({login_details:{phone:h.phone,email:h.email,sid:f}}).then((()=>{u(),Z((e=>!e)),s()})).catch({}):p({login_details:{phone:h.phone,email:h.email,sid:f}}).then((()=>{u(),Z((e=>!e)),s()})).catch({})},children:m("update")}),j&&(0,v.jsx)(c.Z,{})]})})}},47167:(e,s,i)=>{i.d(s,{Z:()=>d});i(72791);var n=i(16871),l=i(43504),t=i(23769),a=i(45639),o=i(80184);const d=e=>{let{tabList:s,activeIndexTab:i,setActiveIndexTab:d,customStyleTab:c,carryParentState:r,showAs:v,customStyleLink:f}=e;const u=(0,n.UO)();return(0,o.jsx)("div",{className:a.Z.universal_container,children:v?null===s||void 0===s?void 0:s.map(((e,s)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,o.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...f,opacity:"0.5"},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})},s):(0,o.jsx)(l.rU,{to:"/q/".concat(u.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...r},style:{...f},children:(0,o.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,style:{...c},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})})},s))):null===s||void 0===s?void 0:s.map(((e,s)=>(0,o.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(a.Z.universal_container_item," ").concat(a.Z.universal_container_item_active):a.Z.universal_container_item,onClick:()=>d(null===e||void 0===e?void 0:e.id),style:{...c},children:(0,o.jsx)(t.Z,{children:null===e||void 0===e?void 0:e.name})},s)))})}},23769:(e,s,i)=>{i.d(s,{Z:()=>t});var n=i(72791),l=i(80184);const t=function(e){let{children:s,onclick:i}=e;const[t,a]=(0,n.useState)(!1),[o,d]=(0,n.useState)({x:-1,y:-1});return(0,n.useEffect)((()=>{-1!==o.x&&-1!==o.y?(a(!0),setTimeout((()=>a(!1)),1e3)):a(!1)}),[o]),(0,n.useEffect)((()=>{t||d({x:-1,y:-1})}),[t]),(0,l.jsxs)("div",{className:"ripple_btn",onClick:e=>{d({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),i&&i(e)},children:[t?(0,l.jsx)("span",{className:"ripple"}):"",(0,l.jsx)("span",{className:"content",children:s})]})}},88872:(e,s,i)=>{i.d(s,{Z:()=>v});var n=i(72791),l=i(55136),t=i(39230),a=i(89891),o=i(16871),d=i(34314),c=i(80184);const r={inputProps:{"aria-label":"Switch demo"}},v=e=>{var s,i,v,f,u,_,m,h,x,j,Z,p;let{textLevel:N,onPrevious:g,onNext:T,onClose:S,viewAs:C,is_admission:y,admissionTitle:b,onAdmissionTitle:I,is_install:k,installTitle:E,onInstallTitle:A,installmentEdit:L,sid:D,instituteId:U,textLevelInner:w,onConfig:P,configTitle:O,onConfig1:G,configTitle1:M,isStaff:R}=e;const{t:F}=(0,t.$G)(),[q,z]=(0,n.useState)(!1),$=(0,o.TH)();(0,o.UO)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:l.Z.staff_header_container,children:[(0,c.jsxs)("h6",{className:l.Z.staff_header_text,children:[N,w?(0,c.jsx)("span",{style:{color:"#0000ff",fontSize:"12px"},children:w}):""]}),"DEPARTMENT_HEAD"===C?"YES"===(null===(s=$.state)||void 0===s?void 0:s.editAuthority)?null:(0,c.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:P,style:{color:"#0000ff"},children:O}),(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:G,style:{color:"#0000ff"},children:M})]}):null,!C&&(0,c.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,c.jsxs)("div",{className:l.Z.staff_header_prev,onClick:g,children:[(0,c.jsx)("img",{src:"/images/profile-prev.svg",alt:"previous icon"}),(0,c.jsx)("span",{children:F("prev")})]}),(0,c.jsxs)("div",{className:l.Z.staff_header_next,onClick:T,children:[(0,c.jsx)("span",{children:F("next")}),(0,c.jsx)("img",{src:"/images/profile-next.svg",alt:"next icon"})]}),(0,c.jsx)("p",{className:l.Z.staff_header_close,onClick:S,children:F("close_")})]}),"INSTITUTE_LOGIN_DETAILS"===C&&(0,c.jsxs)("div",{className:l.Z.staff_header_function,children:[(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:b}),R?"":(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>z(!0),style:{color:"#0000ff"},children:F("student_message")}),(0,c.jsx)("p",{className:l.Z.staff_header_close,onClick:S,children:F("close_")})]}),"STUDENT_MESSAGE"===(null===(i=$.state)||void 0===i?void 0:i.studentMessaageView)&&"STUDENT_SECTION"!==(null===(v=$.state)||void 0===v?void 0:v.viewAs)&&(0,c.jsx)("div",{className:l.Z.staff_header_function,children:(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>z(!0),style:{color:"#0000ff"},children:F("student_message")})}),y?(0,c.jsxs)("div",{className:l.Z.admission_actions,children:[k&&(0,c.jsxs)("p",{className:l.Z.staff_header_text,style:{color:"#0000ff"},children:[E,(0,c.jsx)(a.Z,{...r,checked:L,onChange:A})]}),"STUDENT_SECTION"===(null===(f=$.state)||void 0===f?void 0:f.viewAs)&&(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:()=>z(!0),style:{color:"#0000ff"},children:F("student_message")}),(0,c.jsx)("p",{className:l.Z.staff_header_text,onClick:I,style:{color:"#0000ff"},children:b})]}):""]}),q&&(0,c.jsx)(d.Z,{onClose:()=>z(!1),sendStudentList:null!==(u=null===(_=$.state)||void 0===_?void 0:_.sid)&&void 0!==u?u:D,instituteId:null!==(m=null===(h=$.state)||void 0===h?void 0:h.instituteId)&&void 0!==m?m:U,accessAs:null!==(x=null===(j=$.state)||void 0===j?void 0:j.viewAs)&&void 0!==x?x:"INSTITUTE_ADMIN",headId:null!==(Z=null===(p=$.state)||void 0===p?void 0:p.headId)&&void 0!==Z?Z:U})]})}},26293:(e,s,i)=>{i.r(s),i.d(s,{default:()=>k});var n=i(72791),l=i(8793),t=i(6245),a=i(47167),o=i(69721),d=i(98094),c=i(88872),r=i(39230),v=i(55136),f=(i(60600),i(56521)),u=i(45474),_=i(89064),m=i(16871),h=i(43504),x=i(98684),j=i(90904),Z=i(93638),p=i(48293),N=i(21348),g=i(16925),T=i(80184);const S=e=>{let{onRemove:s,onClose:i}=e;const{t:n}=(0,r.$G)();return(0,T.jsx)(p.Z,{onClose:i,children:(0,T.jsxs)("div",{className:g.Z.modal_container,children:[(0,T.jsx)(N.Z,{children:(0,T.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,T.jsx)("div",{className:g.Z.modal_container_header,children:(0,T.jsx)("h6",{children:n("remove_staff")})}),(0,T.jsx)("img",{src:"".concat(x.J7,"/close.svg"),alt:"close icon",onClick:i})]})}),(0,T.jsx)(j.Z,{}),(0,T.jsx)(N.Z,{customStyle:{paddingTop:"0"},children:(0,T.jsx)(Z.Z,{label:"confirm",onAction:s,customStyle:{marginTop:"5rem"}})})]})})},C=e=>{let{onClose:s,sid:i}=e;const{t:l}=(0,r.$G)(),[a,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),v=(0,m.UO)(),f=(0,m.s0)(),[u]=(0,t.Oo)();return(0,T.jsx)(T.Fragment,{children:d?(0,T.jsx)(S,{onClose:()=>c(!1),onRemove:()=>{i&&(c(!1),o((e=>!e)),u({sid:i}).then((()=>{o((e=>!e)),f("/q/".concat(v.username,"/feed"))})).catch({}))}}):(0,T.jsxs)(_.Z,{onClose:s,disabled:a,children:[(0,T.jsx)(h.rU,{to:"/q/".concat(v.username,"/edit/staff"),state:{openAs:"INSTITUTE_SIDE",sid:i},style:{width:"100%"},children:(0,T.jsx)("h6",{children:l("edit")})}),(0,T.jsx)("h6",{onClick:()=>c(!0),children:l("remove")})]})})};var y=i(12725);const b=n.lazy((()=>Promise.all([i.e(81400),i.e(90599)]).then(i.bind(i,81400)))),I=n.lazy((()=>Promise.all([i.e(31606),i.e(1239)]).then(i.bind(i,31606)))),k=e=>{var s,i,_,m,h,x,j,Z,p,N,g,S,k,E,A;let{sid:L,onClose:D}=e;const{t:U}=(0,r.$G)(),w=[{name:U("about"),id:0},{name:U("attendance"),id:1},{name:U("payroll_info"),id:2}],[P,O]=(0,n.useState)(0),[G,M]=(0,n.useState)(!1),[R,F]=(0,n.useState)(""),{oneStaffProfile:q,oneStaffProfileRefetch:z}=(0,t.CF)({sid:L,skip:!L});(0,n.useEffect)((()=>{L&&z()}),[L,z]);const $=()=>{M((e=>!e))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:v.Z.staff_profile_container,children:[(0,T.jsx)(c.Z,{textLevel:U("staff_profile_ins"),onClose:D,viewAs:"INSTITUTE_LOGIN_DETAILS",admissionTitle:U("login_details"),onAdmissionTitle:$,isStaff:!0}),(0,T.jsx)(d.Z,{}),(0,T.jsx)(f.Z,{name:"".concat((null===q||void 0===q||null===(s=q.staff)||void 0===s?void 0:s.staffFirstName)||""," ").concat(null!==q&&void 0!==q&&null!==(i=q.staff)&&void 0!==i&&i.staffMiddleName?null===q||void 0===q||null===(_=q.staff)||void 0===_?void 0:_.staffMiddleName:""," ").concat((null===q||void 0===q||null===(m=q.staff)||void 0===m?void 0:m.staffLastName)||""),designation:"Designations: ".concat((null===q||void 0===q||null===(h=q.staff)||void 0===h?void 0:h.staffDesignationCount)||0),indexNumber:"Index No. ".concat((null===q||void 0===q||null===(x=q.staff)||void 0===x?void 0:x.staffROLLNO)||"-"),dynamicImage:"1"!==(null===q||void 0===q||null===(j=q.staff)||void 0===j?void 0:j.photoId)?"".concat(o.yI,"/").concat(null===q||void 0===q||null===(Z=q.staff)||void 0===Z?void 0:Z.staffProfilePhoto):"/images/ins_default_profile.svg",sid:null===q||void 0===q||null===(p=q.staff)||void 0===p?void 0:p._id,activeUrl:"staff",currentDesignation:"".concat(U("form_current_designation_label"),": ").concat(null!==(N=null===q||void 0===q||null===(g=q.staff)||void 0===g?void 0:g.current_designation)&&void 0!==N?N:""),onStaffInstituteSide:()=>{F(L)}}),(0,T.jsx)(a.Z,{tabList:w,activeIndexTab:P,setActiveIndexTab:O,customStyleTab:{width:"280px"}}),(0,T.jsx)(d.Z,{}),0===P&&(0,T.jsx)(y.Z,{staffId:L}),1===P&&(0,T.jsx)(l.Z,{children:(0,T.jsx)(I,{sid:null===q||void 0===q||null===(S=q.staff)||void 0===S?void 0:S._id})}),2===P&&(0,T.jsx)(l.Z,{children:(0,T.jsx)(b,{sid:null===q||void 0===q||null===(k=q.staff)||void 0===k?void 0:k._id})}),G&&(0,T.jsx)(u.Z,{onLoginDetailToggle:$,loginData:null===q||void 0===q||null===(E=q.staff)||void 0===E?void 0:E.user,sid:null===q||void 0===q||null===(A=q.staff)||void 0===A?void 0:A._id,onRefetch:z,is_staff:!0})]}),R&&(0,T.jsx)(C,{onClose:()=>{F("")},sid:R})]})}},89064:(e,s,i)=>{i.d(s,{Z:()=>d});var n=i(55336),l=i(48293);const t="Modal_modal_menu_card__d0zzt";var a=i(90904),o=i(80184);const d=e=>{let{onClose:s,disabled:i,heading:d,customStyle:c,children:r}=e;return(0,o.jsx)(l.Z,{onClose:()=>{if(i)return null;s()},children:(0,o.jsxs)("div",{className:t,style:c,children:[d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h5",{children:d}),(0,o.jsx)(a.Z,{})]}):null,r,i&&(0,o.jsx)(n.Z,{})]})})}},45639:(e,s,i)=>{i.d(s,{Z:()=>n});const n={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}}}]);
//# sourceMappingURL=26293.9de1aef7.chunk.js.map