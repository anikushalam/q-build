"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[33738,28273],{87655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>oe});var n=a(72791),o=a(95048),i=a(20772);const l="Department_navbar__3AStV",s="Department_editContainer__wI6DQ",r="Department_bgContainer__4at+B",c="Department_mainContainer__P5B5+",d="Department_head__CT72u",_="Department_headLeftTab__mbRbe",u="Department_headTabActive__M6-Ov",m="Department_headMiddleTab__TbBwZ",f="Department_headRightTab__9YQk4",h="Department_tabflex__iZ1MM",g="Department_tabflexp__9aZ2p",v="Department_tabflexpactive__6-0VY",p="Department_tabfleximg__twsVA",x="Department_student_form_header__9slZa";var j=a(39230),b=a(33992),S=a(35395),k=a(95561),C=a(42935),Z=a(43504),D=a(98990),P=a(80184);const N=n.lazy((()=>a.e(16866).then(a.bind(a,16866)))),y=e=>{let{image:t,name:a,cid:i,editOneClass:l}=e;const s=(0,o.v9)((e=>e.authChange.loginRole)),r=(0,o.I0)(),[c,d]=(0,n.useState)(!1);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:C.Z.oneRow,style:{width:"100%"},children:[(0,P.jsx)(Z.rU,{to:"/q/".concat(a,"/class"),onClick:()=>{return e=i,void r(D.S.addClassId({cid:e}));var e},style:{width:"90%"},children:(0,P.jsxs)("div",{className:C.Z.oneRowLeft,children:[(0,P.jsx)("img",{className:C.Z.oneRowImage,src:t,alt:""}),(0,P.jsx)("p",{className:C.Z.oneRowText,children:a})]})}),(0,P.jsx)("div",{className:C.Z.oneRowRight,children:"_usr_ia"===s?null:(0,P.jsx)("img",{src:"/images/three-24-dot-icon.svg",alt:"menu icon of class",onClick:()=>d(!c)})}),(0,P.jsx)(S.Z,{children:c&&(0,P.jsx)("div",{className:C.Z.tooltip,children:(0,P.jsx)(N,{cid:i,setClick:d,editOneClass:l})})})]}),(0,P.jsx)("p",{className:C.Z.borderBottom1})]})};var L=a(96878),T=a(72310),A=a(90702),F=a(38857),H=a(21348),I=a(90904),w=a(93638),M=a(55336),U=a(16925),R=a(98684),V=a(91448),B=a(57431),E=a(1095),G=a(61055),O=a(99183),q=a(82815);const Y=e=>{var t,a,o,i,l;let{instituteId:s,departmentId:r,batchId:c,onClose:d,onRefetch:_}=e;const{t:u}=(0,j.$G)(),[m,f]=(0,n.useState)({mcId:"",classTitle:"",classHeadTitle:"",sid:"",aggregatePassingPercentage:"",optionalSubjectCount:"",stream:"",batchCount:""}),[h,g]=(0,n.useState)(""),[v,p]=(0,n.useState)(1),[x,S]=(0,n.useState)(""),[k,C]=(0,n.useState)(!1),[Z]=(0,b.u2)(),[D]=(0,q.V2)(),{allClassMaster:N,allClassMasterRefetch:y}=(0,b.tx)({data:{id:s,did:r},skip:s?!s:!r});(0,n.useEffect)((()=>{s&&r&&y()}),[s,r]);const L=(e,t)=>{var a;(null===(a=e.target.value)||void 0===a?void 0:a.length)<=t&&f((t=>({...t,[e.target.name]:e.target.value})))};return(0,P.jsx)(P.Fragment,{children:3===v?(0,P.jsx)(A.Z,{onSelectStaff:e=>{g(e),f((t=>({...t,sid:null===e||void 0===e?void 0:e._id}))),p(1)},onClose:()=>p(1),instituteId:s}):(0,P.jsx)(F.Z,{onClose:d,children:(0,P.jsxs)("div",{className:U.Z.modal_container,children:[(0,P.jsx)(H.default,{children:(0,P.jsxs)("div",{className:U.Z.modal_container_outer_header,children:[(0,P.jsx)("div",{className:U.Z.modal_container_header,children:(0,P.jsx)("h6",{children:u("add_class_n_place")})}),(0,P.jsx)("img",{src:"".concat(R.J7,"/close.svg"),alt:"close icon",onClick:()=>{d()}})]})}),(0,P.jsx)(I.Z,{}),(0,P.jsxs)(H.default,{customStyle:{paddingTop:"0"},children:[(0,P.jsx)(V.Z,{selectLabel:u("select_standard_grade_place"),selectedValue:u("please_select_standard"),onClick:e=>{f((t=>({...t,mcId:null===e||void 0===e?void 0:e._id})))},options:null!==(t=null===N||void 0===N?void 0:N.classMaster)&&void 0!==t?t:[],errorShow:x.mcId}),(0,P.jsx)(G.Z,{label:u("class_name"),placeholder:u("class_name_placeholder"),name:"classTitle",value:m.classTitle,type:"text",onChange:e=>L(e,45),errorShow:x.classTitle}),(0,P.jsx)(B.Z,{maxLength:45,valueLength:m.classTitle}),(0,P.jsxs)("div",{className:U.Z.card_container_image,onClick:()=>p(3),style:{cursor:"pointer"},children:[(0,P.jsx)("img",{alt:"not found",src:null!==h&&void 0!==h&&h.staffProfilePhoto?"".concat(E.yI,"/").concat(h.staffProfilePhoto):"".concat(R.p3,"/feed-user-avatar.svg")}),(0,P.jsx)("div",{className:U.Z.card_container_inner,children:null!==h&&void 0!==h&&h.staffFirstName?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h6",{children:"".concat(null!==(a=null===h||void 0===h?void 0:h.staffFirstName)&&void 0!==a?a:""," \n                    ").concat(null!==(o=null===h||void 0===h?void 0:h.staffMiddleName)&&void 0!==o?o:"","\n                    ").concat(null!==(i=null===h||void 0===h?void 0:h.staffLastName)&&void 0!==i?i:"")}),(0,P.jsxs)("p",{children:[u("index_number_1")," ",null!==(l=null===h||void 0===h?void 0:h.staffROLLNO)&&void 0!==l?l:""]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("h6",{children:[u("assign_chead")," ",u("optional")]}),(0,P.jsx)("p",{children:u("search_from_joined_list")})]})})]}),(0,P.jsx)(G.Z,{label:u("give_chead_title"),placeholder:u("class_head_example"),name:"classHeadTitle",value:m.classHeadTitle,type:"text",onChange:e=>L(e,40),errorShow:x.classHeadTitle}),(0,P.jsx)(B.Z,{maxLength:40,valueLength:m.classHeadTitle}),(0,P.jsx)(G.Z,{label:"".concat(u("pass_percentage")," ").concat(u("optional")),placeholder:u("pass_percentage_placeholder"),name:"aggregatePassingPercentage",value:m.aggregatePassingPercentage,type:"text",onChange:e=>((e,t)=>{+e.target.value<=t&&f((t=>({...t,aggregatePassingPercentage:+e.target.value})))})(e,100)}),(0,P.jsx)(B.Z,{maxLength:10,valueLength:m.gr_initials}),(0,P.jsx)(V.Z,{selectLabel:u("optional_subject"),selectedValue:u("select_number_of_subject"),onClick:e=>{f((t=>({...t,optionalSubjectCount:+(null===e||void 0===e?void 0:e.name)})))},options:[{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}],defalutValue:m.optionalSubjectCount}),(0,P.jsx)(V.Z,{selectLabel:u("select_batch_count"),selectedValue:u("please_select_batch_count"),onClick:e=>{f((t=>({...t,batchCount:+(null===e||void 0===e?void 0:e.name)})))},options:[{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}],defalutValue:m.batchCount}),(0,P.jsx)(w.Z,{label:"create",onAction:()=>{let e=(0,O.l)(m,["sid","aggregatePassingPercentage","optionalSubjectCount","stream","batchCount"]);(0,O.x)(e)&&s&&r&&c?(C((e=>!e)),m.batchCount?D({did:r,bodyParameter:{...m,aggregatePassingPercentage:m.aggregatePassingPercentage?m.aggregatePassingPercentage:0,optionalSubjectCount:m.optionalSubjectCount?m.optionalSubjectCount:0,batchCount:m.batchCount?m.batchCount:0}}).then((()=>{_(),C((e=>!e)),d()})).catch({}):Z({classCreate:{...m,aggregatePassingPercentage:m.aggregatePassingPercentage?m.aggregatePassingPercentage:0,optionalSubjectCount:m.optionalSubjectCount?m.optionalSubjectCount:0,batchCount:m.batchCount?m.batchCount:0},id:s,did:r,bid:c}).then((()=>{_(),C((e=>!e)),d()})).catch({})):S(e)}})]}),k&&(0,P.jsx)(M.default,{})]})})})},J=n.lazy((()=>Promise.all([a.e(5574),a.e(6307),a.e(763),a.e(37641)]).then(a.bind(a,50710)))),Q=e=>{let{data:t,id:a,did:i,bid:l,onRefetch:s}=e;const{t:r}=(0,j.$G)(),c=(0,o.v9)((e=>e.authChange.loginRole)),[d,_]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),[f,h]=(0,n.useState)(""),{classEditDetail:g,classEditDetailRefetch:v}=(0,b.Q1)({cid:f,skip:!f}),[p,x]=(0,n.useState)({msg:"",run:!1}),[C,Z]=(0,n.useState)(!1),D=e=>{h(e),m(!0),_(!0)};(0,n.useEffect)((()=>{f&&v()}),[f,v]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:k.Z.subHeadContainer,children:"_usr_ia"===c?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:k.Z.subHead,children:(0,P.jsx)("p",{className:k.Z.subHeadRight,onClick:()=>{l?Z(!0):x({msg:r("please_select_first_bacth_then_add_class_in_department"),run:!0})},children:r("add_class")})}),(0,P.jsx)("p",{className:k.Z.borderBottom})]})}),(0,P.jsx)(L.Z,{}),(0,P.jsx)("div",{className:k.Z.main,children:t.map(((e,t)=>(0,P.jsx)(y,{name:(null===e||void 0===e?void 0:e.classTitle)||"Class 5th",image:"/images/master-24-grey-icon.svg",cid:null===e||void 0===e?void 0:e._id,editOneClass:D},t)))}),(0,P.jsx)(S.Z,{children:d&&(0,P.jsx)(J,{departmentModal:d,hideModal:_,id:a,did:i,bid:l,edit:u,setEdit:m,editClass:null===g||void 0===g?void 0:g.classes})}),(0,P.jsx)(S.Z,{children:C&&(0,P.jsx)(Y,{onClose:()=>Z(!1),instituteId:a,departmentId:i,batchId:l,onRefetch:s})}),(0,P.jsx)(T.Ch,{msg:p.msg,run:p.run,setRun:()=>x({msg:"",run:!1}),postiton:"bottom",type:"error"})]})};var $=a(90021),W=a(90865),X=a(98094),z=a(96146);const K=e=>{let{did:t}=e;const{t:a}=(0,j.$G)(),[o,i]=(0,n.useState)(""),[l,s]=(0,n.useState)(!1),[r,c]=(0,n.useState)({otherPersonalInfo:!1,enrollmentPrn:!1,identityDetails:!1,addressInfo:!1,parentsInfo:!1,previousSchoolAndDocument:{previousSchoolDocument:!1,aadharCard:!1,identityDocument:!1,casteCertificate:!1,joiningTransferLetter:!1,leavingTransferCertificate:!1,incomeCertificate:!1,lastYearMarksheet:!1,nationalityCertificate:!1,domicileCertificate:!1,nonCreamyLayerCertificate:!1},bankDetails:!1,gate_score:!1,marks_and_degree_score:!1,ug_undertakings_admission:!1,pg_undertakings_admission:!1,anti_ragging:!1,id_card:!1}),[d]=(0,b.__)(),{departmentStudentForm:_,departmentStudentFormRefetch:u}=(0,b.OO)({did:t,skip:!t});(0,n.useEffect)((()=>{t&&u()}),[t,u]),(0,n.useEffect)((()=>{var e,t,a,n,o,i,l,s,r,d,u,m,f,h,g,v,p,x,j,b,S,k,C,Z,D,P,N,y,L,T,A,F;null!==_&&void 0!==_&&_.studentFormSetting&&c({otherPersonalInfo:null===_||void 0===_||null===(e=_.studentFormSetting)||void 0===e?void 0:e.otherPersonalInfo,enrollmentPrn:null===_||void 0===_||null===(t=_.studentFormSetting)||void 0===t?void 0:t.enrollmentPrn,identityDetails:null===_||void 0===_||null===(a=_.studentFormSetting)||void 0===a?void 0:a.identityDetails,addressInfo:null===_||void 0===_||null===(n=_.studentFormSetting)||void 0===n?void 0:n.addressInfo,parentsInfo:null===_||void 0===_||null===(o=_.studentFormSetting)||void 0===o?void 0:o.parentsInfo,previousSchoolAndDocument:{previousSchoolDocument:null===_||void 0===_||null===(i=_.studentFormSetting)||void 0===i||null===(l=i.previousSchoolAndDocument)||void 0===l?void 0:l.previousSchoolDocument,aadharCard:null===_||void 0===_||null===(s=_.studentFormSetting)||void 0===s||null===(r=s.previousSchoolAndDocument)||void 0===r?void 0:r.aadharCard,identityDocument:null===_||void 0===_||null===(d=_.studentFormSetting)||void 0===d||null===(u=d.previousSchoolAndDocument)||void 0===u?void 0:u.identityDocument,casteCertificate:null===_||void 0===_||null===(m=_.studentFormSetting)||void 0===m||null===(f=m.previousSchoolAndDocument)||void 0===f?void 0:f.casteCertificate,joiningTransferLetter:null===_||void 0===_||null===(h=_.studentFormSetting)||void 0===h||null===(g=h.previousSchoolAndDocument)||void 0===g?void 0:g.joiningTransferLetter,leavingTransferCertificate:null===_||void 0===_||null===(v=_.studentFormSetting)||void 0===v||null===(p=v.previousSchoolAndDocument)||void 0===p?void 0:p.leavingTransferCertificate,incomeCertificate:null===_||void 0===_||null===(x=_.studentFormSetting)||void 0===x||null===(j=x.previousSchoolAndDocument)||void 0===j?void 0:j.incomeCertificate,lastYearMarksheet:null===_||void 0===_||null===(b=_.studentFormSetting)||void 0===b||null===(S=b.previousSchoolAndDocument)||void 0===S?void 0:S.lastYearMarksheet,nationalityCertificate:null===_||void 0===_||null===(k=_.studentFormSetting)||void 0===k||null===(C=k.previousSchoolAndDocument)||void 0===C?void 0:C.nationalityCertificate,domicileCertificate:null===_||void 0===_||null===(Z=_.studentFormSetting)||void 0===Z||null===(D=Z.previousSchoolAndDocument)||void 0===D?void 0:D.domicileCertificate,nonCreamyLayerCertificate:null===_||void 0===_||null===(P=_.studentFormSetting)||void 0===P||null===(N=P.previousSchoolAndDocument)||void 0===N?void 0:N.nonCreamyLayerCertificate},bankDetails:null===_||void 0===_||null===(y=_.studentFormSetting)||void 0===y?void 0:y.bankDetails,gate_score:null===_||void 0===_||null===(L=_.studentFormSetting)||void 0===L?void 0:L.gate_score,marks_and_degree_score:null===_||void 0===_||null===(T=_.studentFormSetting)||void 0===T?void 0:T.marks_and_degree_score,ug_undertakings_admission:null===_||void 0===_?void 0:_.ug_undertakings_admission,pg_undertakings_admission:null===_||void 0===_?void 0:_.pg_undertakings_admission,anti_ragging:null===_||void 0===_||null===(A=_.studentFormSetting)||void 0===A?void 0:A.anti_ragging,id_card:null===_||void 0===_||null===(F=_.studentFormSetting)||void 0===F?void 0:F.id_card})}),[null===_||void 0===_?void 0:_.studentFormSetting]);const m=(e,a)=>{if(t){const n={...r};for(let t in n)t===e&&(n[t]=a);d({did:t,formSetting:{studentFormSetting:n,ug_undertakings_admission:n.ug_undertakings_admission,pg_undertakings_admission:n.pg_undertakings_admission}}).then((()=>{i("Add joining details updated"),s(!0)})).catch({}),c((t=>({...t,[e]:a})))}},f=(e,a)=>{if(t){const n={...r};if("previousSchoolDocument"!==e||a||(n.previousSchoolAndDocument.aadharCard=!1,n.previousSchoolAndDocument.casteCertificate=!1,n.previousSchoolAndDocument.domicileCertificate=!1,n.previousSchoolAndDocument.identityDocument=!1,n.previousSchoolAndDocument.incomeCertificate=!1,n.previousSchoolAndDocument.joiningTransferLetter=!1,n.previousSchoolAndDocument.lastYearMarksheet=!1,n.previousSchoolAndDocument.leavingTransferCertificate=!1,n.previousSchoolAndDocument.nationalityCertificate=!1,n.previousSchoolAndDocument.nonCreamyLayerCertificate=!1),r.previousSchoolAndDocument.previousSchoolDocument||"previousSchoolDocument"===e){for(let t in n.previousSchoolAndDocument)t===e&&(n.previousSchoolAndDocument[t]=a);d({did:t,formSetting:{studentFormSetting:n}}).then((()=>{i("Add joining details updated"),s(!0)})).catch({}),c((t=>({...t,previousSchoolAndDocument:{...t.previousSchoolAndDocument,[e]:a}})))}}};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("h6",{className:x,children:a("student_form_setting")}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("personal_info_"),labelDescription:a("name_"),defaultLabel:!0}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("enrollment_number"),labelDescription:a("enrollment_label_text"),defaultLabel:!1,checkedToggle:r.enrollmentPrn,onToggleHandler:e=>m("enrollmentPrn",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("other_info"),labelDescription:a("label_text"),defaultLabel:!1,checkedToggle:r.otherPersonalInfo,onToggleHandler:e=>m("otherPersonalInfo",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("i_details"),labelDescription:a("labeltext2"),defaultLabel:!1,checkedToggle:r.identityDetails,onToggleHandler:e=>m("identityDetails",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("add_info"),labelDescription:a("labeltext3"),defaultLabel:!1,checkedToggle:r.addressInfo,onToggleHandler:e=>m("addressInfo",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("parent_info_"),labelDescription:a("label_text2"),defaultLabel:!1,checkedToggle:r.parentsInfo,onToggleHandler:e=>m("parentsInfo",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsxs)(W.Z,{labelHeading:a("prev_school_"),labelDescription:"",defaultLabel:!1,checkedToggle:r.previousSchoolAndDocument.previousSchoolDocument,onToggleHandler:e=>f("previousSchoolDocument",e.target.checked),children:[(0,P.jsx)(z.Z,{checkLabel:a("aadhar_card"),checkedValue:r.previousSchoolAndDocument.aadharCard,onCheckboxAction:e=>f("aadharCard",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("labeltext4"),checkedValue:r.previousSchoolAndDocument.identityDocument,onCheckboxAction:e=>f("identityDocument",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("castee_"),checkedValue:r.previousSchoolAndDocument.casteCertificate,onCheckboxAction:e=>f("casteCertificate",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("joining_letter"),checkedValue:r.previousSchoolAndDocument.joiningTransferLetter,onCheckboxAction:e=>f("joiningTransferLetter",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("certificates"),checkedValue:r.previousSchoolAndDocument.leavingTransferCertificate,onCheckboxAction:e=>f("leavingTransferCertificate",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("i_certificate"),checkedValue:r.previousSchoolAndDocument.incomeCertificate,onCheckboxAction:e=>f("incomeCertificate",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("marksheet"),checkedValue:r.previousSchoolAndDocument.lastYearMarksheet,onCheckboxAction:e=>f("lastYearMarksheet",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("n_certificate"),checkedValue:r.previousSchoolAndDocument.nationalityCertificate,onCheckboxAction:e=>f("nationalityCertificate",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("d_certificate"),checkedValue:r.previousSchoolAndDocument.domicileCertificate,onCheckboxAction:e=>f("domicileCertificate",e.target.checked)}),(0,P.jsx)(z.Z,{checkLabel:a("non_cremy"),checkedValue:r.previousSchoolAndDocument.nonCreamyLayerCertificate,onCheckboxAction:e=>f("nonCreamyLayerCertificate",e.target.checked)})]}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("bank_details_"),labelDescription:a("labeltext5"),defaultLabel:!1,checkedToggle:r.bankDetails,onToggleHandler:e=>m("bankDetails",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("gate_score"),labelDescription:a("labeltext8"),defaultLabel:!1,checkedToggle:r.gate_score,onToggleHandler:e=>m("gate_score",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("marks_and_degree"),labelDescription:a("labeltext9"),defaultLabel:!1,checkedToggle:r.marks_and_degree_score,onToggleHandler:e=>m("marks_and_degree_score",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("turn_off_on_ug_admission_undertakings"),labelDescription:"",defaultLabel:!1,checkedToggle:r.ug_undertakings_admission,onToggleHandler:e=>m("ug_undertakings_admission",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("turn_off_on_pg_admission_undertakings"),labelDescription:"",defaultLabel:!1,checkedToggle:r.pg_undertakings_admission,onToggleHandler:e=>m("pg_undertakings_admission",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("anti_ragging"),labelDescription:"(".concat(a("anti_ragging"),")"),defaultLabel:!1,checkedToggle:r.anti_ragging,onToggleHandler:e=>m("anti_ragging",e.target.checked)}),(0,P.jsx)(X.Z,{}),(0,P.jsx)(W.Z,{labelHeading:a("id_card_upload"),labelDescription:"(".concat(a("id_card_upload"),")"),defaultLabel:!1,checkedToggle:r.id_card,onToggleHandler:e=>m("id_card",e.target.checked)}),(0,P.jsx)(X.Z,{})]}),(0,P.jsx)(T.Ch,{run:l,setRun:s,msg:o,postiton:"bottom",type:"success"})]})};var ee=a(16871),te=a(44927);const ae=n.lazy((()=>a.e(16713).then(a.bind(a,16713)))),ne=n.lazy((()=>Promise.all([a.e(60438),a.e(69337)]).then(a.bind(a,69337)))),oe=()=>{var e,t,a,x,k,C,D,N,y,L,T;const{t:A}=(0,j.$G)(),[F]=(0,Z.lr)(),H=(0,ee.TH)(),I=(0,ee.UO)(),w=(0,o.v9)((e=>e.idChange)),{oneDepartment:M,oneDepartmentRefetch:U}=(0,b._C)({did:null===w||void 0===w?void 0:w.did,skip:!(null!==w&&void 0!==w&&w.did)});return(0,n.useEffect)((()=>{null!==w&&void 0!==w&&w.did&&U()}),[null===w||void 0===w?void 0:w.did,U]),(0,P.jsxs)("div",{className:r,children:[(0,P.jsx)("div",{className:l,children:(0,P.jsx)(i.default,{status:"home"})}),"site"===F.get("a")?(0,P.jsx)(te.Z,{did:null===(e=H.state)||void 0===e?void 0:e.did,viewAs:"INSTITUTE"}):(0,P.jsxs)("div",{className:s,children:[(0,P.jsx)($.Z,{department:null===M||void 0===M?void 0:M.department,username:null===w||void 0===w||null===(t=w.loginProfile)||void 0===t?void 0:t.username,activeUrlValue:"department",onReftech:U,did:null===w||void 0===w?void 0:w.did}),(0,P.jsx)("div",{children:(0,P.jsx)("div",{className:c,children:"setting"===F.get("a")?(0,P.jsx)(K,{did:null===w||void 0===w?void 0:w.did}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:d,children:[(0,P.jsx)(Z.rU,{to:"/q/".concat(I.username,"/viewdept"),children:(0,P.jsx)("p",{className:F.get("a")?_:"".concat(_," ").concat(u),children:F.get("a")?(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/classes.svg"}),(0,P.jsx)("p",{className:g,children:A("classes")})]}):(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/classes_white.svg"}),(0,P.jsx)("p",{className:v,children:A("classes")})]})})}),(0,P.jsx)(Z.rU,{to:"/q/".concat(I.username,"/viewdept?a=masters"),children:(0,P.jsx)("p",{className:"masters"===F.get("a")?"".concat(m," ").concat(u):m,children:"masters"===F.get("a")?(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/masters_white.svg"}),(0,P.jsx)("p",{className:v,children:A("masters")})]}):(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/allstudent.svg"}),(0,P.jsx)("p",{className:g,children:A("masters")})]})})}),(0,P.jsx)(Z.rU,{to:"/q/".concat(I.username,"/viewdept?a=batches"),children:(0,P.jsx)("p",{className:"batches"===F.get("a")?"".concat(f," ").concat(u):f,children:"batches"===F.get("a")?(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/batches_white.svg"}),(0,P.jsx)("p",{className:v,children:A("batches")})]}):(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("img",{className:p,alt:"",src:"/images/stafftab/batches.svg"}),(0,P.jsx)("p",{className:g,children:A("batches")})]})})})]}),!F.get("a")&&(0,P.jsx)(Q,{data:(null===M||void 0===M||null===(a=M.department)||void 0===a||null===(x=a.departmentSelectBatch)||void 0===x?void 0:x.classroom)||[],did:null===M||void 0===M||null===(k=M.department)||void 0===k?void 0:k._id,id:null===w||void 0===w?void 0:w.id,bid:null===M||void 0===M||null===(C=M.department)||void 0===C||null===(D=C.departmentSelectBatch)||void 0===D?void 0:D._id,onRefetch:U}),(0,P.jsxs)(S.Z,{children:["masters"===F.get("a")&&(0,P.jsx)(ae,{did:null===M||void 0===M||null===(N=M.department)||void 0===N?void 0:N._id,id:null===w||void 0===w?void 0:w.id}),"batches"===F.get("a")&&(0,P.jsx)(ne,{data:(null===M||void 0===M||null===(y=M.department)||void 0===y?void 0:y.batches)||[],did:null===M||void 0===M||null===(L=M.department)||void 0===L?void 0:L._id,id:null===w||void 0===w?void 0:w.id,selectedBatch:(null===M||void 0===M||null===(T=M.department)||void 0===T?void 0:T.departmentSelectBatch)||"",onDepartmentRefetch:U})]})]})})})]})]})}},96878:(e,t,a)=>{a.d(t,{Z:()=>l});a(72791);const n="SearchDepartment_searchContainer__6ejIk";var o=a(39230),i=a(80184);const l=()=>{const{t:e}=(0,o.$G)();return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("img",{src:"/images/search-dept-icon.svg",alt:""}),(0,i.jsx)("input",{type:"text",placeholder:e("search"),required:!0})]})}},98094:(e,t,a)=>{a.d(t,{Z:()=>i});a(72791);var n=a(55136),o=a(80184);const i=e=>{let{customStyle:t}=e;return(0,o.jsx)("hr",{className:n.Z.universal_hr,style:{...t}})}},96146:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var n=a(13034),o=a(25801),i=a(39320),l=a(80184);const s=e=>{let{checkLabel:t,onCheckboxAction:a,checkedValue:s,customStyle:r,name:c,customStyleLabel:d}=e;return(0,l.jsx)("div",{className:i.Z.form_checkbox_container,style:{...r},children:(0,l.jsx)(o.Z,{control:(0,l.jsx)(n.Z,{sx:{color:"rgba(18, 18, 18, 0.7)"},onChange:a,checked:s,name:c}),label:t,sx:{...d}})})}},90865:(e,t,a)=>{a.d(t,{Z:()=>s});a(72791);var n=a(89891),o=a(39320),i=a(80184);const l={inputProps:{"aria-label":"Switch demo"}},s=e=>{let{customContainer:t,customLabel:a,labelDescription:s,labelHeading:r,defaultLabel:c,checkedToggle:d,onToggleHandler:_,children:u}=e;return(0,i.jsxs)("div",{className:o.Z.form_toggle_container,style:{...t},children:[(0,i.jsxs)("div",{className:o.Z.form_toggle_label,children:[c?(0,i.jsx)(n.Z,{...l,defaultChecked:!0,disabled:!0}):(0,i.jsx)(n.Z,{...l,checked:d,onChange:_}),(0,i.jsx)("span",{style:{...a},children:r})]}),s&&(0,i.jsx)("div",{className:o.Z.form_toggle_description,children:s}),u]})}},79992:(e,t,a)=>{a.d(t,{ZH:()=>o});var n=a(44816);const o=e=>{var t=n.AES.decrypt(e,"QVIPLESAASPLATFORM");return JSON.parse(t.toString(n.enc.Utf8))}},61055:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(39230),o=a(52245),i=a(80184);const l=["tel","number"],s=e=>{let{label:t,name:a,msg:s,type:r,value:c,onChange:d,placeholder:_,maxLength:u,customFormInputContainer:m,customFormInputLabel:f,customFormInput:h,errorShow:g,disabled:v,children:p}=e;const{t:x}=(0,n.$G)();return(0,i.jsxs)("div",{className:o.Z.form_input_container,style:m,children:[t&&(0,i.jsxs)("label",{className:o.Z.form_input_label,style:f,htmlFor:a,children:[t,s?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("span",{className:o.Z.form_input_label_error,children:[" "," "," ",s]})}):g?(0,i.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",x("form_require_label")]}):null,p]}),l.includes(r)?(0,i.jsx)("input",{className:o.Z.form_input,type:r,value:c,onChange:d,name:a,placeholder:_,maxLength:null!==u&&void 0!==u?u:100,disabled:v,style:h}):(0,i.jsx)("input",{className:o.Z.form_input,type:r,value:c,onChange:d,name:a,placeholder:_,disabled:v,style:h})]})}},91448:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(72791),o=a(39230),i=a(52245),l=a(98684),s=a(80184);const r=e=>{let{selectLabel:t,onClick:a,selectedValue:r,options:c,customStyleContainer:d,customLabelStyle:_,customListStyle:u,errorShow:m,defalutValue:f,isDenied:h}=e;const{t:g}=(0,o.$G)(),[v,p]=(0,n.useState)(!1),[x,j]=(0,n.useState)(""),b=()=>{h||p((e=>!e))};(0,n.useEffect)((()=>{j(f)}),[f]);return(0,s.jsxs)("div",{className:i.Z.form_input_container,style:{...d},children:[(0,s.jsxs)("p",{className:i.Z.join_form_select_paragraph,style:{..._},children:[t,m&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",g("form_require_label")]})]}),(0,s.jsxs)("section",{className:i.Z.join_form_select_custom,onClick:b,children:[x?(0,s.jsx)("p",{className:i.Z.join_form_select_custom_paragraph,children:null!==x&&void 0!==x?x:""}):(0,s.jsx)("p",{className:i.Z.join_form_select_custom_paragraph,children:r}),v?(0,s.jsx)("img",{className:i.Z.join_form_select_custom_rotate_icon,src:"".concat(l.J7,"/down.svg"),alt:"categor icon"}):(0,s.jsx)("img",{className:i.Z.join_form_select_custom_icon,src:"".concat(l.J7,"/down.svg"),alt:"categor icon"})]}),v&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:i.Z.join_form_select_custom_list,style:u,children:null===c||void 0===c?void 0:c.map(((e,t)=>{var n;return(0,s.jsx)("p",{onClick:()=>{return a(t=e),b(),void(null!==t&&void 0!==t&&t.className&&j(null===t||void 0===t?void 0:t.className));var t},className:i.Z.join_form_select_custom_paragraph_option,children:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:null===e||void 0===e?void 0:e.className},t)}))})})]})}},90702:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(49806),o=a(38857),i=a(21348),l=a(90904),s=a(98684),r=a(39230),c=a(72791),d=a(23441),_=a(91427),u=a(57588),m=a(6758),f=a(1095),h=a(80184);const g=e=>{var t,a,o,i,c,d;let{staff:_,selectedId:u,onSelect:m,selectList:g,isMultiSelect:v,onMultiSelect:p}=e;const{t:x}=(0,r.$G)();return(0,h.jsxs)(h.Fragment,{children:[v?(0,h.jsxs)("div",{className:n.Z.assign_show_list_each,onClick:()=>{p(_)},children:[null!==g&&void 0!==g&&g.includes(null===_||void 0===_?void 0:_._id)?(0,h.jsx)("img",{src:"".concat(s.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,h.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(s.U_,"/uncheck.svg"),alt:"icon"}),(0,h.jsx)("img",{src:null!==_&&void 0!==_&&_.staffProfilePhoto?"".concat(f.yI,"/").concat(_.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,h.jsxs)("div",{className:n.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(null!==(t=null===_||void 0===_?void 0:_.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(a=null===_||void 0===_?void 0:_.staffMiddleName)&&void 0!==a?a:""," ").concat(null!==(o=null===_||void 0===_?void 0:_.staffLastName)&&void 0!==o?o:"")}),(0,h.jsxs)("p",{children:[x("index_number")," "," : ",null===_||void 0===_?void 0:_.staffROLLNO]})]})]}):(0,h.jsxs)("div",{className:n.Z.assign_show_list_each,style:u===(null===_||void 0===_?void 0:_._id)?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:null,onClick:()=>{m(_)},children:[(0,h.jsx)("img",{src:null!==_&&void 0!==_&&_.staffProfilePhoto?"".concat(f.yI,"/").concat(_.staffProfilePhoto):"".concat(s.p3,"/feed-staff-avatar.svg"),alt:"profile avatar"}),(0,h.jsxs)("div",{className:n.Z.assign_each_paragraph,children:[(0,h.jsx)("h6",{children:"".concat(null!==(i=null===_||void 0===_?void 0:_.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(c=null===_||void 0===_?void 0:_.staffMiddleName)&&void 0!==c?c:""," ").concat(null!==(d=null===_||void 0===_?void 0:_.staffLastName)&&void 0!==d?d:"")}),(0,h.jsxs)("p",{children:[x("index_number")," "," : ",null===_||void 0===_?void 0:_.staffROLLNO]})]})]}),(0,h.jsx)(l.Z,{customStyleBorder:{margin:"0"}})]})};var v=a(55336),p=a(1669),x=a(2651),j=a(93638);const b=e=>{var t,a,f,b;let{title:S,onClose:k,selectedId:C,onSelectStaff:Z,instituteId:D,isMultiSelect:P,onMultiSelect:N,selectList:y,onDone:L}=e;const{t:T}=(0,r.$G)(),[A,F]=(0,c.useState)(""),[H,I]=(0,c.useState)(1),[w,M]=(0,c.useState)(!0),[U,R]=(0,d.YD)({skip:A}),{instituteAllStaff:V,instituteAllStaffLoading:B}=(0,m.nb)({data:{id:D,page:H,limit:10,search:A},skip:!D});(0,c.useEffect)((()=>{R&&w&&I((e=>e+1))}),[R,w]),(0,c.useEffect)((()=>{var e;if(null!==V&&void 0!==V&&null!==(e=V.list)&&void 0!==e&&e.length){var t;let e=(0,_.f)(null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length);M((()=>e))}}),[null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length]);const E=(0,c.useCallback)((0,u.J)((e=>{I((()=>1)),F(e)}),1500),[]),G=e=>{C===(null===e||void 0===e?void 0:e._id)||Z(e)};return(0,h.jsx)(o.Z,{onClose:k,children:(0,h.jsxs)("div",{className:n.Z.modal_container,children:[(0,h.jsx)(i.default,{children:(0,h.jsxs)("div",{className:n.Z.modal_container_outer_header,children:[(0,h.jsx)("div",{className:n.Z.modal_container_header,children:(0,h.jsx)("h6",{children:T(null!==S&&void 0!==S?S:"staff_list")})}),(0,h.jsxs)("div",{className:n.Z.modal_container_btn_container,children:[P&&(0,h.jsx)(j.Z,{label:T("select"),count:null===y||void 0===y?void 0:y.length,onAction:L,customStyle:{margin:"0",padding:"0.3rem 0.5rem"}}),(0,h.jsx)("img",{src:"".concat(s.J7,"/close.svg"),alt:"close icon",onClick:k})]})]})}),(0,h.jsx)(l.Z,{}),(0,h.jsxs)(i.default,{customStyle:{paddingBottom:"1rem"},children:[(0,h.jsxs)("div",{className:n.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,h.jsx)("input",{type:"text",placeholder:T("search"),className:n.Z.assign_search_input,onChange:e=>{e.target.value?E(e.target.value):(I((()=>1)),F(""))},style:{width:"100%"}}),(0,h.jsx)("img",{src:"".concat(s.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===V||void 0===V||null===(a=V.list)||void 0===a?void 0:a.map(((e,t)=>{var a;return(null===V||void 0===V||null===(a=V.list)||void 0===a?void 0:a.length)===t+1?(0,h.jsx)("div",{ref:U,children:(0,h.jsx)(g,{staff:e,selectedId:C,onSelect:G,selectList:y,isMultiSelect:P,onMultiSelect:N})},null===e||void 0===e?void 0:e._id):(0,h.jsx)(g,{staff:e,selectedId:C,onSelect:G,selectList:y,isMultiSelect:P,onMultiSelect:N},null===e||void 0===e?void 0:e._id)})),B?A?(0,h.jsx)(v.default,{}):(0,h.jsx)(p.Z,{}):A?0===(null===V||void 0===V||null===(f=V.list)||void 0===f?void 0:f.length)&&(0,h.jsx)(x.Z,{title:"No staff found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===V||void 0===V||null===(b=V.list)||void 0===b?void 0:b.length)&&(0,h.jsx)(x.Z,{title:"No staff.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},57588:(e,t,a)=>{a.d(t,{J:()=>n});const n=(e,t)=>{let a;return function(){let n=this,o=arguments;clearTimeout(a),a=setTimeout((()=>{e.apply(n,o)}),t)}}},99183:(e,t,a)=>{a.d(t,{l:()=>n,x:()=>o});const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a={};for(let n in e)null!==t&&void 0!==t&&t.includes(n)||e[n]||(a[n]="* required");return a},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},95561:(e,t,a)=>{a.d(t,{Z:()=>n});const n={subHeadContainer:"DepartmentBatchProfileMain_subHeadContainer__V+eEG",subHead:"DepartmentBatchProfileMain_subHead__0pCgf",subHeadRight:"DepartmentBatchProfileMain_subHeadRight__WpGpi",borderBottom:"DepartmentBatchProfileMain_borderBottom__AGNfj",main:"DepartmentBatchProfileMain_main__RX1fB"}},55136:(e,t,a)=>{a.d(t,{Z:()=>n});const n={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}},39320:(e,t,a)=>{a.d(t,{Z:()=>n});const n={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}},49806:(e,t,a)=>{a.d(t,{Z:()=>n});const n={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}}}]);
//# sourceMappingURL=33738.76e604d7.chunk.js.map