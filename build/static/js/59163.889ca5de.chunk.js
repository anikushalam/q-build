"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[59163],{73093:function(e,n,o){o.r(n),o.d(n,{default:function(){return E}});var t=o(74165),i=o(15861),l=o(29439),r=o(72791),d=o(38733),a=o(39230),u=o(95048),s=o(16871),c=o(93433),_=o(4942),v=o(1413),m=o(16256),f=o(70966),p=o(5574),h=o(97655),g=o(81693),Z=o(72952),y=o(77121),x=(o(60332),o(98094)),b=o(83669),j=o(51561),F=o(96146),S=o(23509),k=o(84959),w=o(98734),C=o(59965),I=o(12953),J=o(87338),N=o(80184),D=function(e){var n,o,t,i,s,D,P,A,R,L,T,O,q,H,B,M,E,V,K,U,Q,z=e.preview,G=e.setPreview,W=e.onApplyForm,Y=e.hostelId,X=(0,a.$G)().t,$=((0,u.v9)((function(e){return e.idChange})),(0,r.useState)("")),ee=(0,l.Z)($,2),ne=ee[0],oe=ee[1],te=(0,r.useState)({}),ie=(0,l.Z)(te,2),le=ie[0],re=ie[1],de=(0,r.useState)(""),ae=(0,l.Z)(de,2),ue=(ae[0],ae[1],(0,r.useState)([])),se=(0,l.Z)(ue,2),ce=se[0],_e=se[1],ve=(0,r.useState)({studentFirstName:"",studentMiddleName:"",studentLastName:"",studentDOB:"",studentGender:"",studentMotherName:""}),me=(0,l.Z)(ve,2),fe=me[0],pe=me[1],he=(0,r.useState)([]),ge=(0,l.Z)(he,2),Ze=ge[0],ye=ge[1],xe=(0,r.useState)({}),be=(0,l.Z)(xe,2),je=be[0],Fe=be[1],Se=(0,r.useState)(!1),ke=(0,l.Z)(Se,2),we=ke[0],Ce=ke[1],Ie=(0,r.useState)(""),Je=(0,l.Z)(Ie,2),Ne=Je[0],De=Je[1],Pe=(0,r.useState)(!1),Ae=(0,l.Z)(Pe,2),Re=Ae[0],Le=Ae[1],Te=(0,r.useState)(""),Oe=(0,l.Z)(Te,2),qe=(Oe[0],Oe[1]),He=(0,r.useState)(""),Be=(0,l.Z)(He,2),Me=Be[0],Ee=Be[1],Ve=(0,r.useState)({msg:"",run:!1}),Ke=(0,l.Z)(Ve,2),Ue=Ke[0],Qe=Ke[1],ze=(0,r.useState)({}),Ge=(0,l.Z)(ze,2),We=Ge[0],Ye=Ge[1],Xe=(0,r.useState)(""),$e=(0,l.Z)(Xe,2),en=$e[0],nn=$e[1],on=(0,k.FL)(),tn=(0,l.Z)(on,1)[0],ln=(0,r.useState)({student_prn_enroll_number:"",student_hostel_cpi:""}),rn=(0,l.Z)(ln,2),dn=rn[0],an=rn[1],un=(0,J.GC)({hid:Y,skip:!Y}),sn=un.getHostelForm,cn=un.getHostelFormRefetch;(0,r.useEffect)((function(){Y&&cn()}),[cn,Y]),(0,r.useEffect)((function(){var e;if(null!==sn&&void 0!==sn&&null!==(e=sn.one_hostel)&&void 0!==e&&e.student_form_query){var n=[];for(var o in null===sn||void 0===sn||null===(t=sn.one_hostel)||void 0===t?void 0:t.student_form_query){var t,i;if("previousSchoolAndDocument"===o){var l,r,d=null===sn||void 0===sn||null===(l=sn.one_hostel)||void 0===l||null===(r=l.student_form_query)||void 0===r?void 0:r.previousSchoolAndDocument,a=[],u=function(e){d[e]&&("aadharCard"===e?(Fe((function(e){return(0,v.Z)((0,v.Z)({},e),{},{addharFrontCard:"",addharBackCard:""})})),a.push("addharFrontCard","addharBackCard")):"previousSchoolDocument"===e?(Fe((function(e){return(0,v.Z)((0,v.Z)({},e),{},{studentPreviousSchool:"",previousSchoolDocument:""})})),a.push("previousSchoolDocument","studentPreviousSchool")):(Fe((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,_.Z)({},e,""))})),a.push(e)))};for(var s in d)u(s);ye([].concat(a))}else null!==sn&&void 0!==sn&&null!==(i=sn.one_hostel)&&void 0!==i&&i.student_form_query[o]&&("otherPersonalInfo"===o?(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.Qc||void 0===m.Qc?void 0:m.Qc.withValue)})),n.push.apply(n,(0,c.Z)(null===m.Qc||void 0===m.Qc?void 0:m.Qc.keys))):"identityDetails"===o?(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.Jg||void 0===m.Jg?void 0:m.Jg.withValue)})),n.push.apply(n,(0,c.Z)(null===m.Jg||void 0===m.Jg?void 0:m.Jg.keys))):"addressInfo"===o?(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.f_||void 0===m.f_?void 0:m.f_.withValue)})),n.push.apply(n,(0,c.Z)(null===m.f_||void 0===m.f_?void 0:m.f_.keys))):"parentsInfo"===o?(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.DS||void 0===m.DS?void 0:m.DS.withValue)})),n.push.apply(n,(0,c.Z)(null===m.DS||void 0===m.DS?void 0:m.DS.keys))):"bankDetails"===o?(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.E1||void 0===m.E1?void 0:m.E1.withValue)})),n.push.apply(n,(0,c.Z)(null===m.E1||void 0===m.E1?void 0:m.E1.keys))):"cpi"===o&&(re((function(e){return(0,v.Z)((0,v.Z)({},e),null===m.RF||void 0===m.RF?void 0:m.RF.withValue)})),n.push.apply(n,(0,c.Z)(null===m.RF||void 0===m.RF?void 0:m.RF.keys))))}_e([].concat(n))}}),[null===sn||void 0===sn||null===(n=sn.one_hostel)||void 0===n?void 0:n.student_form_query]),(0,r.useEffect)((function(){if(ne){var e=ne.split(" ");e.length>=3?pe((function(n){return(0,v.Z)((0,v.Z)({},n),{},{studentFirstName:e[0],studentMiddleName:e[1],studentLastName:e.slice(2).toString().replaceAll(","," ")})})):pe((function(n){return(0,v.Z)((0,v.Z)({},n),{},{studentFirstName:e[0],studentMiddleName:"",studentLastName:void 0===e[1]?"":e[1]})}))}}),[ne]);(0,r.useEffect)((function(){we&&pn({target:{name:"file",files:[Ne]}})}),[we,Ne]);var _n=function(e){pe((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,_.Z)({},e.target.name,e.target.value))}))},vn=function(e){re((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,_.Z)({},e.target.name,e.target.value))}))},mn=function(e){"previousSchoolDocument"===e.target.name||"studentPreviousSchool"===e.target.name?Fe((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,_.Z)({},e.target.name,e.target.value))})):Fe((function(n){return(0,v.Z)((0,v.Z)({},n),{},(0,_.Z)({},e.target.name,e.target.files[0]))}))},fn=function(e){e.target.checked?re((function(n){return(0,v.Z)((0,v.Z)({},n),{},{asSameAddress:e.target.checked,studentAddress:n.studentCurrentAddress,studentPincode:n.studentCurrentPincode})})):re((function(n){return(0,v.Z)((0,v.Z)({},n),{},{asSameAddress:e.target.checked,studentAddress:"",studentPincode:""})}))},pn=function(e){nn((function(e){return!e}));var n=new FormData;n.append("file",e.target.files[0]),tn({fileUpload:n}).then((function(n){var o,t;"file"===e.target.name?(Ce(!1),De({name:e.target.name,key:null===(o=n.data)||void 0===o?void 0:o.imageKey,type:null===(t=e.target.files[0])||void 0===t?void 0:t.type})):"bankPassbook"===e.target.name?re((function(o){var t,i,l;return(0,v.Z)((0,v.Z)({},o),{},(0,_.Z)({},e.target.name,{originalName:null===(t=e.target.files[0])||void 0===t?void 0:t.name,name:e.target.name,key:null===(i=n.data)||void 0===i?void 0:i.imageKey,type:null===(l=e.target.files[0])||void 0===l?void 0:l.type}))})):Fe((function(o){var t,i,l;return(0,v.Z)((0,v.Z)({},o),{},(0,_.Z)({},e.target.name,{originalName:null===(t=e.target.files[0])||void 0===t?void 0:t.name,name:e.target.name,key:null===(i=n.data)||void 0===i?void 0:i.imageKey,type:null===(l=e.target.files[0])||void 0===l?void 0:l.type}))}));nn((function(e){return!e}))})).catch({})},hn=function(e){var n=null===e||void 0===e?void 0:e.split("/"),o="".concat(n[2]);re((function(e){return(0,v.Z)((0,v.Z)({},e),{},{student_year:o})}))};return(0,N.jsxs)(N.Fragment,{children:[z?(0,N.jsx)(S.Z,{studentForm:le,dynamicForm:ce,formData:fe,dynamicFormDocument:Ze,dynamicDocument:je,fileUrl:Me,formSetting:null===sn||void 0===sn||null===(Q=sn.one_hostel)||void 0===Q?void 0:Q.student_form_query,onApplyStudentForm:function(){var e,n;W({file:Ne,formData:fe,studentForm:le,dynamicDocument:je,studentNewField:dn,pdfUndertaking:null!==sn&&void 0!==sn&&null!==(e=sn.one_hostel)&&void 0!==e&&e.pg_undertakings_hostel_admission?"PG":null!==sn&&void 0!==sn&&null!==(n=sn.one_hostel)&&void 0!==n&&n.ug_undertakings_hostel_admission?"UG":"OFF"})},studentNewField:dn}):(0,N.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=function(e,n,o){var t,i,l={};for(var r in Ne||(Qe({msg:X("form_select_image_label"),run:!0}),l.file="profile image is required!"),n.studentBankAccount&&n.studentBankAccount!==n.studentBankReAccount&&(l.studentBankReAccount="".concat(X("form_account_dose_not_match_label"))),e)"studentMiddleName"===r||e[r]||(l[r]="".concat(r," is required!"));for(var d in n)"studentPhoneNumber"===d||"studentEmail"===d||"studentFatherRationCardColor"===d||n[d]||(l[d]="".concat(d," is required!"));for(var a in o)"previousSchoolDocument"===a||("studentPreviousSchool"===a?o.previousSchoolDocument||o[a]||(l[a]="".concat(a," is required!")):o[a]||(l[a]="".concat(a," is required!")));return null!==sn&&void 0!==sn&&null!==(t=sn.one_hostel)&&void 0!==t&&null!==(i=t.student_form_query)&&void 0!==i&&i.enrollmentPrn&&(dn.student_prn_enroll_number||(l.student_prn_enroll_number="student_prn_enroll_number is required!")),l}(fe,le,je),o=!1;for(var t in n){o=!0;break}o?Ye(n):G((function(e){return!e}))},children:[(0,N.jsxs)("div",{className:d.Z.form_container,children:[(0,N.jsxs)("h4",{children:[X("form_personal_info_label"),":"]}),(0,N.jsxs)("div",{className:d.Z.form_container_profile,children:[(0,N.jsx)(h.Z,{labelText:X("form_name_label"),placeholder:X("form_name_placeholder"),name:"fullname",value:ne,type:"text",onChange:function(e){return oe(e.target.value)},customStyleContainer:null!==sn&&void 0!==sn&&null!==(o=sn.one_hostel)&&void 0!==o&&null!==(t=o.student_form_query)&&void 0!==t&&t.enrollmentPrn?{width:"56%"}:{width:"86%"},errorShow:We.studentFirstName||We.studentLastName}),(null===sn||void 0===sn||null===(i=sn.one_hostel)||void 0===i||null===(s=i.student_form_query)||void 0===s?void 0:s.enrollmentPrn)&&(0,N.jsx)(h.Z,{labelText:X("form_prn_enr_label"),placeholder:X("form_prn_enr_placeholder"),name:"prn",value:dn.student_prn_enroll_number,type:"text",onChange:function(e){return an((function(n){return(0,v.Z)((0,v.Z)({},n),{},{student_prn_enroll_number:e.target.value})}))},customStyleContainer:{width:"30%"},errorShow:We.student_prn_enroll_number}),(0,N.jsxs)("div",{className:d.Z.form_container_profile_image,children:[(0,N.jsxs)("label",{htmlFor:"profile",className:d.Z.form_container_profile_image_label,children:[(0,N.jsx)("img",{className:d.Z.form_container_profile_photo,src:Me||"/images/ins_default_profile.svg",alt:"student avatar"}),(0,N.jsx)("img",{src:"/images/user-pencil-edit-transparent.svg",alt:"edit icon",className:d.Z.form_edit_icon})]}),(0,N.jsx)("input",{type:"file",id:"profile",onChange:function(e){var n=URL.createObjectURL(e.target.files[0]);De(e.target.files[0]),qe(n),Ee(n),Le(!0)},style:{display:"none"}})]})]}),(0,N.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,N.jsx)(g.Z,{selectLabel:X("form_gender_label"),selectedValue:X("form_gender_placeholder"),value:fe.studentGender,name:"studentGender",onChange:_n,options:m.ce,optionsValue:m.Dj,errorShow:We.studentGender}),(0,N.jsx)(C.Z,{labelText:X("form_date_of_birth_label"),placeholder:X("form_date_of_birth_placeholder"),name:"studentDOB",value:fe.studentDOB,onDateFunction:function(e){if((0,I.A)(e)){var n=null===e||void 0===e?void 0:e.split("/"),o="".concat(n[2],"-").concat(n[1],"-").concat(n[0]);pe((function(e){return(0,v.Z)((0,v.Z)({},e),{},{studentDOB:o})}))}else Qe({msg:"You cannot select upcoming date ".concat(e),run:!0})},errorShow:We.studentDOB,customStyleContainer:{position:"relative"}}),(0,N.jsx)(h.Z,{labelText:X("form_mother_name_label"),placeholder:X("form_mother_name_placeholder"),name:"studentMotherName",value:fe.studentMotherName,type:"text",onChange:_n,errorShow:We.studentMotherName})]}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}}),(null===sn||void 0===sn||null===(D=sn.one_hostel)||void 0===D||null===(P=D.student_form_query)||void 0===P?void 0:P.otherPersonalInfo)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_other_personal_info_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.zA.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.type?(0,N.jsx)(g.Z,{selectLabel:X(null===n||void 0===n?void 0:n.label),selectedValue:X(null===n||void 0===n?void 0:n.placeHolder),value:le[e],name:e,onChange:vn,options:null===n||void 0===n?void 0:n.chooseOptions,optionsValue:null===n||void 0===n?void 0:n.chooseOptionsValue,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:["studentPhoneNumber","studentAadharNumber"].includes(e)?"tel":"text",inputLength:"studentPhoneNumber"===e?10:12,onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===sn||void 0===sn||null===(A=sn.one_hostel)||void 0===A||null===(R=A.student_form_query)||void 0===R?void 0:R.identityDetails)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_identity_details_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.vf.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.type?(0,N.jsx)(g.Z,{selectLabel:X(null===n||void 0===n?void 0:n.label),selectedValue:X(null===n||void 0===n?void 0:n.placeHolder),value:le[e],onChange:vn,options:null===n||void 0===n?void 0:n.chooseOptions,optionsValue:null===n||void 0===n?void 0:n.chooseOptionsValue,name:e,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:"text",onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===sn||void 0===sn||null===(L=sn.one_hostel)||void 0===L||null===(T=L.student_form_query)||void 0===T?void 0:T.addressInfo)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_address_info_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.MI.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.type?(0,N.jsx)(Z.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:"text",onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):null!==n&&void 0!==n&&n.checkbox?(0,N.jsx)(F.Z,{checkLabel:X(null===n||void 0===n?void 0:n.label),checkedValue:le.asSameAddress,onCheckboxAction:fn,customStyle:{display:"block",width:"100%",marginLeft:"0"}},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:["studentCurrentPincode","studentPincode"].includes(e)?"tel":"text",inputLength:6,onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===sn||void 0===sn||null===(O=sn.one_hostel)||void 0===O||null===(q=O.student_form_query)||void 0===q?void 0:q.parentsInfo)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_parent_guardian_info_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.Xu.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.type?(0,N.jsx)(g.Z,{selectLabel:X(null===n||void 0===n?void 0:n.label),selectedValue:X(null===n||void 0===n?void 0:n.placeHolder),value:le[e],onChange:vn,options:null===n||void 0===n?void 0:n.chooseOptions,optionsValue:null===n||void 0===n?void 0:n.chooseOptionsValue,name:e,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:["studentParentsPhoneNumber"].includes(e)?"tel":"text",inputLength:"studentParentsPhoneNumber"===e?10:30,onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===sn||void 0===sn||null===(H=sn.one_hostel)||void 0===H||null===(B=H.student_form_query)||void 0===B||null===(M=B.previousSchoolAndDocument)||void 0===M?void 0:M.previousSchoolDocument)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_previous_school_document_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===Ze||void 0===Ze?void 0:Ze.map((function(e){return m.Bq.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.fileType?(0,N.jsx)(y.Z,{labelText:X(null===n||void 0===n?void 0:n.label),name:e,value:je[e],onChange:pn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):null!==n&&void 0!==n&&n.checkbox?"":!(null!==je&&void 0!==je&&je.previousSchoolDocument)&&(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:je[e],type:"text",onChange:mn,customStyleContainer:{width:"100%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))}),(0,N.jsx)(x.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===sn||void 0===sn||null===(E=sn.one_hostel)||void 0===E||null===(V=E.student_form_query)||void 0===V?void 0:V.bankDetails)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_student_bank_details_label"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.Mi.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.fileType?(0,N.jsx)(y.Z,{labelText:X(null===n||void 0===n?void 0:n.label),name:e,value:le[e],onChange:pn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:["studentBankAccount","studentBankReAccount"].includes(e)?"tel":"text",reAccount:"studentBankReAccount"===e?We[e]:"",inputLength:50,onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))})]}),(null===sn||void 0===sn||null===(K=sn.one_hostel)||void 0===K||null===(U=K.student_form_query)||void 0===U?void 0:U.cpi)&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("h4",{children:[X("form_student_hostel_cpi"),":"]}),(0,N.jsx)("div",{className:d.Z.form_other_field,children:null===ce||void 0===ce?void 0:ce.map((function(e){return m.HK.map((function(n){var o;return(null===n||void 0===n||null===(o=n.lists)||void 0===o?void 0:o.includes(e))&&(null!==n&&void 0!==n&&n.isCalender?(0,N.jsx)(C.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],onDateFunction:hn,errorShow:We[e],customStyleContainer:{position:"relative",width:"49.5%"}},null===n||void 0===n?void 0:n.id):null!==n&&void 0!==n&&n.type?(0,N.jsx)(g.Z,{selectLabel:X(null===n||void 0===n?void 0:n.label),selectedValue:X(null===n||void 0===n?void 0:n.placeHolder),value:le[e],name:e,onChange:vn,options:null===n||void 0===n?void 0:n.chooseOptions,optionsValue:null===n||void 0===n?void 0:n.chooseOptionsValue,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id):(0,N.jsx)(h.Z,{labelText:X(null===n||void 0===n?void 0:n.label),placeholder:X(null===n||void 0===n?void 0:n.placeHolder),name:e,value:le[e],type:"text",onChange:vn,customStyleContainer:{width:"49.5%"},errorShow:We[e]},null===n||void 0===n?void 0:n.id))}))}))})]}),(0,N.jsx)(b.Z,{type:"submit",buttonText:X("form_preview"),customStyleButton:{marginTop:"1.5vw"}})]}),Re&&(0,N.jsx)(p.Z,{open:Re,children:(0,N.jsx)(f.Z,{setPhotoURL:Ee,photoURL:Me,setFile:De,setOpenCrop:Le,setProfilePhoto:qe,first:1,second:1,setUpload:Ce})}),(0,N.jsx)(j.Ch,{msg:Ue.msg,run:Ue.run,setRun:function(){return Qe({msg:"",run:!1})},postiton:"bottom",type:"error"})]}),en&&(0,N.jsx)(w.Z,{})]})},P=o(91007),A=o(79872),R=o(28497),L=o(64499),T=o(80214),O=o(87932),q=o(71439),H=o(71287),B=o(39480),M=o(37782);var E=function(){var e,n,c,_,v,m,f,p,h,g,Z,y,b,j,F,S,C,I,E,V,K,U,Q,z,G,W,Y,X,$,ee,ne,oe,te=(0,s.s0)(),ie=(0,s.TH)(),le=(0,s.UO)(),re=(0,u.v9)((function(e){return e.idChange})),de=(0,a.$G)().t,ae=(0,r.useState)(!1),ue=(0,l.Z)(ae,2),se=ue[0],ce=ue[1],_e=(0,r.useState)(!1),ve=(0,l.Z)(_e,2),me=ve[0],fe=ve[1],pe=(0,r.useState)(!1),he=(0,l.Z)(pe,2),ge=he[0],Ze=he[1],ye=(0,r.useState)(null),xe=(0,l.Z)(ye,2),be=xe[0],je=xe[1],Fe=(0,J.LQ)(),Se=(0,l.Z)(Fe,1)[0],ke=(0,k.d)(),we=(0,l.Z)(ke,1)[0],Ce=(0,H.f)().existingAccountLogin,Ie=(0,k.ZR)(),Je=(0,l.Z)(Ie,1)[0],Ne=(0,P.pu)((null===re||void 0===re?void 0:re.id)||(null===(e=ie.state)||void 0===e?void 0:e.instituteId),{skip:"landing_page"===(null===(n=ie.state)||void 0===n?void 0:n.openAs)||"landing_page_and_existing"===(null===(c=ie.state)||void 0===c?void 0:c.openAs)?!(null!==(_=ie.state)&&void 0!==_&&_.instituteId):!(null!==re&&void 0!==re&&re.id)}),De=Ne.data,Pe=Ne.refetch,Ae=(0,T.Rg)().data,Re=(0,T.gt)(),Le=(0,l.Z)(Re,1)[0],Te=(0,O.Vc)({id:"landing_page"===(null===(v=ie.state)||void 0===v?void 0:v.openAs)||"landing_page_and_existing"===(null===(m=ie.state)||void 0===m?void 0:m.openAs)?null===(f=ie.state)||void 0===f?void 0:f.instituteId:null===(p=re.searchProfile)||void 0===p?void 0:p.id,skip:"landing_page"===(null===(h=ie.state)||void 0===h?void 0:h.openAs)||"landing_page_and_existing"===(null===(g=ie.state)||void 0===g?void 0:g.openAs)?!(null!==(Z=ie.state)&&void 0!==Z&&Z.instituteId):!(null!==(y=re.searchProfile)&&void 0!==y&&y.id)}),Oe=Te.merchantId,qe=Te.merchantIdRefetch;(0,r.useEffect)((function(){var e,n;(null!==(e=re.searchProfile)&&void 0!==e&&e.id||null!==(n=ie.state)&&void 0!==n&&n.instituteId)&&qe()}),[null===(b=re.searchProfile)||void 0===b?void 0:b.id,null===(j=ie.state)||void 0===j?void 0:j.instituteId,qe]),(0,r.useEffect)((function(){var e;(null!==re&&void 0!==re&&re.id||null!==(e=ie.state)&&void 0!==e&&e.instituteId)&&Pe()}),[Pe,null===re||void 0===re?void 0:re.id,null===(F=ie.state)||void 0===F?void 0:F.instituteId]),(0,r.useEffect)((function(){var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[se]);var He=(0,B.p0)({data:{id:"landing_page"===(null===(S=ie.state)||void 0===S?void 0:S.openAs)||"landing_page_and_existing"===(null===(C=ie.state)||void 0===C?void 0:C.openAs)?null===(I=ie.state)||void 0===I?void 0:I.instituteId:null===(E=re.searchProfile)||void 0===E?void 0:E.id,type:"ID"},skip:"landing_page"===(null===(V=ie.state)||void 0===V?void 0:V.openAs)||"landing_page_and_existing"===(null===(K=ie.state)||void 0===K?void 0:K.openAs)?!(null!==(U=ie.state)&&void 0!==U&&U.instituteId):!(null!==(Q=re.searchProfile)&&void 0!==Q&&Q.id)}),Be=He.oneInstituteProfile,Me=He.oneInstituteProfileRefetch;(0,r.useEffect)((function(){var e,n;(null!==(e=re.searchProfile)&&void 0!==e&&e.id||null!==(n=ie.state)&&void 0!==n&&n.instituteId)&&Me()}),[null===(z=re.searchProfile)||void 0===z?void 0:z.id,null===(G=ie.state)||void 0===G?void 0:G.instituteId,Me]);var Ee=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,i,l){var r,d,a,u,s,c,_,v=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=v.length>3&&void 0!==v[3]?v[3]:null,a=v.length>4&&void 0!==v[4]&&v[4],u=new Worker(new URL(o.p+o.u(33221),o.b)),s=(0,M.aF)(null===Be||void 0===Be?void 0:Be.institute,n,{imageKey:i,isAdmission:a,applicationName:null===(r=ie.state)||void 0===r?void 0:r.applicationName}),c=s.institute,_=s.studentInfo,u.postMessage({printFormType:"STUDENT_HOSTEL_FORM",studentInfo:_,institute:c,pdfUndertaking:d}),u.onmessage=function(e){if(e&&l){window.open(URL.createObjectURL(e.data),"_blank");var n=new FormData;n.append("file",e.data),Je({sid:l,pdf_file:n}).then((function(){fe((function(e){return!e}))})).catch({})}};case 6:case"end":return e.stop()}}),e)})));return function(n,o,t){return e.apply(this,arguments)}}(),Ve=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var o,l,r,d,a,u,s,c,_,v,m,f,p,h,g,Z;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(v in fe((function(e){return!e})),(_={fileArray:[]}).fileArray.push(null===n||void 0===n?void 0:n.file),null===n||void 0===n?void 0:n.formData)_[v]=null===n||void 0===n?void 0:n.formData[v];for(m in null===n||void 0===n?void 0:n.studentForm)"asSameAddress"===m||("bankPassbook"===m?null!==n&&void 0!==n&&n.studentForm[m]&&_.fileArray.push(null===n||void 0===n?void 0:n.studentForm[m]):_[m]=null===n||void 0===n?void 0:n.studentForm[m]);for(f in null===n||void 0===n?void 0:n.dynamicDocument)"previousSchoolDocument"===f||("studentPreviousSchool"===f?_[f]=null===n||void 0===n?void 0:n.dynamicDocument[f]:null!==n&&void 0!==n&&n.dynamicDocument[f]&&_.fileArray.push(null===n||void 0===n?void 0:n.dynamicDocument[f]));_.student_prn_enroll_number=null===n||void 0===n?void 0:n.studentNewField.student_prn_enroll_number,"PROFILE_SEARCH"===(null===(o=ie.state)||void 0===o?void 0:o.openAs)&&null!==re&&void 0!==re&&re.id&&null!==(l=ie.state)&&void 0!==l&&l.appId?Se({aid:null===(p=ie.state)||void 0===p?void 0:p.appId,studentData:_,uid:null===re||void 0===re?void 0:re.id}).then(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(o){var i,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.data.status){e.next=6;break}return e.next=3,Ee(_,null===n||void 0===n||null===(i=n.file)||void 0===i?void 0:i.key,null===o||void 0===o||null===(l=o.data)||void 0===l?void 0:l.student,"PG");case 3:te("/q/".concat(le.username,"/feed")),e.next=7;break;case 6:fe((function(e){return!e}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch({}):"ADMISSION_DIRECT_APPLY"===(null===(r=ie.state)||void 0===r?void 0:r.openAs)&&null!==(d=ie.state)&&void 0!==d&&d.appId?ge||(Ze(!0),je(_),fe((function(e){return!e}))):"landing_page"===(null===(a=ie.state)||void 0===a?void 0:a.openAs)&&null!==(u=ie.state)&&void 0!==u&&u.verifyNumber?we({phoneNumber:null===(h=ie.state)||void 0===h?void 0:h.verifyNumber,aid:ie.state.appId,direct_student:_}).then(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(o){var i,l,r,d,a,u,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee(_,null===n||void 0===n||null===(i=n.file)||void 0===i?void 0:i.key,null===o||void 0===o||null===(l=o.data)||void 0===l?void 0:l.student,null===n||void 0===n?void 0:n.pdfUndertaking);case 2:Ce({token:null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.token,_id:null===o||void 0===o||null===(d=o.data)||void 0===d||null===(a=d.user)||void 0===a?void 0:a._id,username:null===o||void 0===o||null===(u=o.data)||void 0===u||null===(s=u.user)||void 0===s?void 0:s.username});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch({}):"landing_page_and_existing"===(null===(s=ie.state)||void 0===s?void 0:s.openAs)&&null!==(c=ie.state)&&void 0!==c&&c.userId?Se({aid:null===(g=ie.state)||void 0===g?void 0:g.appId,studentData:_,uid:null===(Z=ie.state)||void 0===Z?void 0:Z.userId}).then(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(o){var i,l,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.data.status){e.next=6;break}return e.next=3,Ee(_,null===n||void 0===n||null===(i=n.file)||void 0===i?void 0:i.key,null===o||void 0===o||null===(l=o.data)||void 0===l?void 0:l.student,null===n||void 0===n?void 0:n.pdfUndertaking);case 3:te("/q/".concat(null===(r=ie.state)||void 0===r?void 0:r.username,"/feed")),e.next=7;break;case 6:fe((function(e){return!e}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch({}):fe((function(e){return!e}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:d.Z.navbar,children:(0,N.jsx)(A.default,{status:"profile",profileId:De?null===De||void 0===De||null===(W=De.user)||void 0===W?void 0:W._id:"",username:null===De||void 0===De||null===(Y=De.user)||void 0===Y?void 0:Y.username,name:null===De||void 0===De||null===(X=De.user)||void 0===X?void 0:X.userLegalName,photoId:null===De||void 0===De||null===($=De.user)||void 0===$?void 0:$.photoId,profilePhoto:null===De||void 0===De||null===(ee=De.user)||void 0===ee?void 0:ee.profilePhoto,profileData:null===De||void 0===De?void 0:De.user})}),(0,N.jsx)("div",{className:d.Z.goback_container,id:"scrollView",children:(0,N.jsxs)("div",{className:d.Z.goback_container_text,onClick:function(){se?ce((function(e){return!e})):te(-1)},children:[(0,N.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,N.jsx)("h6",{className:d.Z.goback_container_text_go,children:de("go_back")})]})}),(0,N.jsxs)("div",{className:d.Z.student_from_container,children:[(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,N.jsx)("h6",{className:d.Z.student_from_fill,children:de("form_fill_student")}),se&&(0,N.jsx)("h6",{className:d.Z.student_from_fill_edit,onClick:function(){return ce((function(e){return!e}))},children:de("edit_")})]}),(0,N.jsx)(x.Z,{customStyle:{width:"100%"}}),(0,N.jsx)(D,{preview:se,setPreview:ce,onApplyForm:Ve,hostelId:null===(ne=ie.state)||void 0===ne?void 0:ne.hostelId}),ge&&(0,N.jsx)(q.Z,{onClose:function(){return Ze(!1)},allContent:{type:"ADMISSION_DIRECT_APPLY",amount:null===(oe=ie.state)||void 0===oe?void 0:oe.first_install},checkoutAdmissionDirectHandler:function(e){var n,o,t,i,l,r=2.1*+(null===(n=ie.state)||void 0===n?void 0:n.first_install)/100,d=+r+18*+r/100,a=parseInt(null===(o=ie.state)||void 0===o?void 0:o.first_install),u={amount:Math.ceil(a+ +d.toFixed(2))};"PAYTM"===e?(0,L.Ex)({amount:+(null===(t=ie.state)||void 0===t?void 0:t.first_install),amount_nocharges:+u.amount,type:"Direct_Hostel",paidBy:"".concat(null===re||void 0===re?void 0:re.id),paidTo:"".concat(null===(i=re.searchProfile)||void 0===i?void 0:i.id),moduleId:"".concat(null===(l=ie.state)||void 0===l?void 0:l.appId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:le.username,isApk:"web",payment_card_id:null}).then((function(e){var n,o;window.onScriptLoad(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(o=n.body)||void 0===o?void 0:o.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((function(e){console.info(e)})):null!==Ae&&void 0!==Ae&&Ae.Key&&null!==u&&void 0!==u&&u.amount&&Le({amount:null===u||void 0===u?void 0:u.amount,student_data:be}).then((function(e){var n,o,t,i,l,r;null!==(n=e.data)&&void 0!==n&&n.success?(0,R.r)({key:null===Ae||void 0===Ae?void 0:Ae.Key,oid:null===(o=e.data)||void 0===o?void 0:o.order.id,amount_nocharge:100*(null===(t=ie.state)||void 0===t?void 0:t.first_install),amount:null===(i=e.data)||void 0===i?void 0:i.order.amount,type:"Direct_Hostel",pay_by:"".concat(null===re||void 0===re?void 0:re.id),pay_to:"".concat(null===(l=re.searchProfile)||void 0===l?void 0:l.id),mid:"".concat(null===(r=ie.state)||void 0===r?void 0:r.appId),razor_key:null===Oe||void 0===Oe?void 0:Oe.key,razor_author:null===Oe||void 0===Oe?void 0:Oe.bool,status:null,installment_type:null,is_install:null,h_month:null}):console.log("data error")})).catch((function(e){console.log(e)}))}})]}),me&&(0,N.jsx)(w.Z,{})]})}},93840:function(e,n,o){var t=o(72791).createContext(void 0);n.Z=t},52930:function(e,n,o){o.d(n,{Z:function(){return l}});var t=o(72791),i=o(93840);function l(){return t.useContext(i.Z)}},97278:function(e,n,o){o.d(n,{Z:function(){return x}});var t=o(29439),i=o(63366),l=o(87462),r=o(72791),d=o(59278),a=o(94419),u=o(14036),s=o(66934),c=o(98278),_=o(52930),v=o(2863),m=o(75878),f=o(21217);function p(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var h=o(80184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,s.ZP)(v.Z)((function(e){var n=e.ownerState;return(0,l.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),y=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=r.forwardRef((function(e,n){var o=e.autoFocus,r=e.checked,s=e.checkedIcon,v=e.className,m=e.defaultChecked,f=e.disabled,x=e.disableFocusRipple,b=void 0!==x&&x,j=e.edge,F=void 0!==j&&j,S=e.icon,k=e.id,w=e.inputProps,C=e.inputRef,I=e.name,J=e.onBlur,N=e.onChange,D=e.onFocus,P=e.readOnly,A=e.required,R=void 0!==A&&A,L=e.tabIndex,T=e.type,O=e.value,q=(0,i.Z)(e,g),H=(0,c.Z)({controlled:r,default:Boolean(m),name:"SwitchBase",state:"checked"}),B=(0,t.Z)(H,2),M=B[0],E=B[1],V=(0,_.Z)(),K=f;V&&"undefined"===typeof K&&(K=V.disabled);var U="checkbox"===T||"radio"===T,Q=(0,l.Z)({},e,{checked:M,disabled:K,disableFocusRipple:b,edge:F}),z=function(e){var n=e.classes,o=e.checked,t=e.disabled,i=e.edge,l={root:["root",o&&"checked",t&&"disabled",i&&"edge".concat((0,u.Z)(i))],input:["input"]};return(0,a.Z)(l,p,n)}(Q);return(0,h.jsxs)(Z,(0,l.Z)({component:"span",className:(0,d.Z)(z.root,v),centerRipple:!0,focusRipple:!b,disabled:K,tabIndex:null,role:void 0,onFocus:function(e){D&&D(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){J&&J(e),V&&V.onBlur&&V.onBlur(e)},ownerState:Q,ref:n},q,{children:[(0,h.jsx)(y,(0,l.Z)({autoFocus:o,checked:r,defaultChecked:m,className:z.input,disabled:K,id:U?k:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;E(n),N&&N(e,n)}},readOnly:P,ref:C,required:R,ownerState:Q,tabIndex:L,type:T},"checkbox"===T&&void 0===O?{}:{value:O},w)),M?s:S]}))}))},38733:function(e,n){n.Z={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}}}]);
//# sourceMappingURL=59163.889ca5de.chunk.js.map