"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[15550],{67923:(e,o,t)=>{t.d(o,{Z:()=>l});t(72791);var n=t(38733),i=t(80184);const l=e=>{let{labelText:o,value:t,customStyleContainer:l,customStyleLabel:a,customStyleValue:d}=e;return(0,i.jsxs)("div",{className:n.Z.join_form_container_view,style:{...l},children:[(0,i.jsx)("label",{className:n.Z.join_form_label_view,style:{...a},children:o}),(0,i.jsx)("h6",{className:n.Z.join_form_input_view,style:{...d},children:t})]})}},73093:(e,o,t)=>{t.r(o),t.d(o,{default:()=>T});var n=t(72791),i=t(38733),l=t(39230),a=t(95048),d=t(16871),r=t(16256),s=t(70966),u=t(5574),_=t(97655),c=t(81693),v=t(72952),m=t(77121),p=(t(60332),t(98094)),h=t(83669),f=t(51561),g=t(96146),y=t(23509),x=t(84959),b=t(98734),j=t(59965),F=t(12953),k=t(87338),S=t(80184);const w=e=>{var o,t,d,w,A,C,J,I,N,Z,D,P,R,H,T,L,O,M,B,E,q;let{preview:V,setPreview:K,onApplyForm:U,hostelId:Q}=e;const{t:G}=(0,l.$G)(),[z,W]=((0,a.v9)((e=>e.idChange)),(0,n.useState)("")),[Y,X]=(0,n.useState)({}),[$,ee]=(0,n.useState)(""),[oe,te]=(0,n.useState)([]),[ne,ie]=(0,n.useState)({studentFirstName:"",studentMiddleName:"",studentLastName:"",studentDOB:"",studentGender:"",studentMotherName:""}),[le,ae]=(0,n.useState)([]),[de,re]=(0,n.useState)({}),[se,ue]=(0,n.useState)(!1),[_e,ce]=(0,n.useState)(""),[ve,me]=(0,n.useState)(!1),[pe,he]=(0,n.useState)(""),[fe,ge]=(0,n.useState)(""),[ye,xe]=(0,n.useState)({msg:"",run:!1}),[be,je]=(0,n.useState)({}),[Fe,ke]=(0,n.useState)(""),[Se]=(0,x.FL)(),[we,Ae]=(0,n.useState)({student_prn_enroll_number:"",student_hostel_cpi:""}),{getHostelForm:Ce,getHostelFormRefetch:Je}=(0,k.GC)({hid:Q,skip:!Q});(0,n.useEffect)((()=>{Q&&Je()}),[Je,Q]),(0,n.useEffect)((()=>{var e;if(null!==Ce&&void 0!==Ce&&null!==(e=Ce.one_hostel)&&void 0!==e&&e.student_form_query){const e=[];for(let l in null===Ce||void 0===Ce||null===(o=Ce.one_hostel)||void 0===o?void 0:o.student_form_query){var o,t;if("previousSchoolAndDocument"===l){var n,i;let e=null===Ce||void 0===Ce||null===(n=Ce.one_hostel)||void 0===n||null===(i=n.student_form_query)||void 0===i?void 0:i.previousSchoolAndDocument,o=[];for(let t in e)e[t]&&("aadharCard"===t?(re((e=>({...e,addharFrontCard:"",addharBackCard:""}))),o.push("addharFrontCard","addharBackCard")):"previousSchoolDocument"===t?(re((e=>({...e,studentPreviousSchool:"",previousSchoolDocument:""}))),o.push("previousSchoolDocument","studentPreviousSchool")):(re((e=>({...e,[t]:""}))),o.push(t)));ae([...o])}else null!==Ce&&void 0!==Ce&&null!==(t=Ce.one_hostel)&&void 0!==t&&t.student_form_query[l]&&("otherPersonalInfo"===l?(X((e=>({...e,...null===r.Qc||void 0===r.Qc?void 0:r.Qc.withValue}))),e.push(...null===r.Qc||void 0===r.Qc?void 0:r.Qc.keys)):"identityDetails"===l?(X((e=>({...e,...null===r.Jg||void 0===r.Jg?void 0:r.Jg.withValue}))),e.push(...null===r.Jg||void 0===r.Jg?void 0:r.Jg.keys)):"addressInfo"===l?(X((e=>({...e,...null===r.f_||void 0===r.f_?void 0:r.f_.withValue}))),e.push(...null===r.f_||void 0===r.f_?void 0:r.f_.keys)):"parentsInfo"===l?(X((e=>({...e,...null===r.DS||void 0===r.DS?void 0:r.DS.withValue}))),e.push(...null===r.DS||void 0===r.DS?void 0:r.DS.keys)):"bankDetails"===l?(X((e=>({...e,...null===r.E1||void 0===r.E1?void 0:r.E1.withValue}))),e.push(...null===r.E1||void 0===r.E1?void 0:r.E1.keys)):"cpi"===l&&(X((e=>({...e,...null===r.RF||void 0===r.RF?void 0:r.RF.withValue}))),e.push(...null===r.RF||void 0===r.RF?void 0:r.RF.keys)))}te([...e])}}),[null===Ce||void 0===Ce||null===(o=Ce.one_hostel)||void 0===o?void 0:o.student_form_query]),(0,n.useEffect)((()=>{if(z){const e=z.split(" ");e.length>=3?ie((o=>({...o,studentFirstName:e[0],studentMiddleName:e[1],studentLastName:e.slice(2).toString().replaceAll(","," ")}))):ie((o=>({...o,studentFirstName:e[0],studentMiddleName:"",studentLastName:void 0===e[1]?"":e[1]})))}}),[z]);(0,n.useEffect)((()=>{se&&Pe({target:{name:"file",files:[_e]}})}),[se,_e]);const Ie=e=>{ie((o=>({...o,[e.target.name]:e.target.value})))},Ne=e=>{X((o=>({...o,[e.target.name]:e.target.value})))},Ze=e=>{"previousSchoolDocument"===e.target.name?re((o=>({...o,[e.target.name]:e.target.value}))):"studentPreviousSchool"===e.target.name?re((o=>({...o,[e.target.name]:e.target.value}))):re((o=>({...o,[e.target.name]:e.target.files[0]})))},De=e=>{e.target.checked?X((o=>({...o,asSameAddress:e.target.checked,studentAddress:o.studentCurrentAddress,studentPincode:o.studentCurrentPincode}))):X((o=>({...o,asSameAddress:e.target.checked,studentAddress:"",studentPincode:""})))},Pe=e=>{ke((e=>!e));const o=new FormData;o.append("file",e.target.files[0]),Se({fileUpload:o}).then((o=>{var t,n;"file"===e.target.name?(ue(!1),ce({name:e.target.name,key:null===(t=o.data)||void 0===t?void 0:t.imageKey,type:null===(n=e.target.files[0])||void 0===n?void 0:n.type})):"bankPassbook"===e.target.name?X((t=>{var n,i,l;return{...t,[e.target.name]:{originalName:null===(n=e.target.files[0])||void 0===n?void 0:n.name,name:e.target.name,key:null===(i=o.data)||void 0===i?void 0:i.imageKey,type:null===(l=e.target.files[0])||void 0===l?void 0:l.type}}})):re((t=>{var n,i,l;return{...t,[e.target.name]:{originalName:null===(n=e.target.files[0])||void 0===n?void 0:n.name,name:e.target.name,key:null===(i=o.data)||void 0===i?void 0:i.imageKey,type:null===(l=e.target.files[0])||void 0===l?void 0:l.type}}}));ke((e=>!e))})).catch({})},Re=e=>{let o=null===e||void 0===e?void 0:e.split("/"),t="".concat(o[2]);X((e=>({...e,student_year:t})))};return(0,S.jsxs)(S.Fragment,{children:[V?(0,S.jsx)(y.Z,{studentForm:Y,dynamicForm:oe,formData:ne,dynamicFormDocument:le,dynamicDocument:de,fileUrl:fe,formSetting:null===Ce||void 0===Ce||null===(q=Ce.one_hostel)||void 0===q?void 0:q.student_form_query,onApplyStudentForm:()=>{var e,o;U({file:_e,formData:ne,studentForm:Y,dynamicDocument:de,studentNewField:we,pdfUndertaking:null!==Ce&&void 0!==Ce&&null!==(e=Ce.one_hostel)&&void 0!==e&&e.pg_undertakings_hostel_admission?"PG":null!==Ce&&void 0!==Ce&&null!==(o=Ce.one_hostel)&&void 0!==o&&o.ug_undertakings_hostel_admission?"UG":"OFF"})},studentNewField:we}):(0,S.jsxs)("form",{onSubmit:e=>{e.preventDefault();const o=((e,o,t)=>{var n,i;const l={};_e||(xe({msg:G("form_select_image_label"),run:!0}),l.file="profile image is required!"),o.studentBankAccount&&o.studentBankAccount!==o.studentBankReAccount&&(l.studentBankReAccount="".concat(G("form_account_dose_not_match_label")));for(let a in e)"studentMiddleName"===a||e[a]||(l[a]="".concat(a," is required!"));for(let a in o)"studentPhoneNumber"===a||"studentEmail"===a||"studentFatherRationCardColor"===a||o[a]||(l[a]="".concat(a," is required!"));for(let a in t)"previousSchoolDocument"===a||("studentPreviousSchool"===a?t.previousSchoolDocument||t[a]||(l[a]="".concat(a," is required!")):t[a]||(l[a]="".concat(a," is required!")));return null!==Ce&&void 0!==Ce&&null!==(n=Ce.one_hostel)&&void 0!==n&&null!==(i=n.student_form_query)&&void 0!==i&&i.enrollmentPrn&&(we.student_prn_enroll_number||(l.student_prn_enroll_number="student_prn_enroll_number is required!")),l})(ne,Y,de);let t=!1;for(let n in o){t=!0;break}t?je(o):K((e=>!e))},children:[(0,S.jsxs)("div",{className:i.Z.form_container,children:[(0,S.jsxs)("h4",{children:[G("form_personal_info_label"),":"]}),(0,S.jsxs)("div",{className:i.Z.form_container_profile,children:[(0,S.jsx)(_.Z,{labelText:G("form_name_label"),placeholder:G("form_name_placeholder"),name:"fullname",value:z,type:"text",onChange:e=>W(e.target.value),customStyleContainer:null!==Ce&&void 0!==Ce&&null!==(t=Ce.one_hostel)&&void 0!==t&&null!==(d=t.student_form_query)&&void 0!==d&&d.enrollmentPrn?{width:"56%"}:{width:"86%"},errorShow:be.studentFirstName||be.studentLastName}),(null===Ce||void 0===Ce||null===(w=Ce.one_hostel)||void 0===w||null===(A=w.student_form_query)||void 0===A?void 0:A.enrollmentPrn)&&(0,S.jsx)(_.Z,{labelText:G("form_prn_enr_label"),placeholder:G("form_prn_enr_placeholder"),name:"prn",value:we.student_prn_enroll_number,type:"text",onChange:e=>Ae((o=>({...o,student_prn_enroll_number:e.target.value}))),customStyleContainer:{width:"30%"},errorShow:be.student_prn_enroll_number}),(0,S.jsxs)("div",{className:i.Z.form_container_profile_image,children:[(0,S.jsxs)("label",{htmlFor:"profile",className:i.Z.form_container_profile_image_label,children:[(0,S.jsx)("img",{className:i.Z.form_container_profile_photo,src:fe||"/images/ins_default_profile.svg",alt:"student avatar"}),(0,S.jsx)("img",{src:"/images/user-pencil-edit-transparent.svg",alt:"edit icon",className:i.Z.form_edit_icon})]}),(0,S.jsx)("input",{type:"file",id:"profile",onChange:e=>{const o=URL.createObjectURL(e.target.files[0]);ce(e.target.files[0]),he(o),ge(o),me(!0)},style:{display:"none"}})]})]}),(0,S.jsxs)("div",{className:i.Z.form_profile_info,children:[(0,S.jsx)(c.Z,{selectLabel:G("form_gender_label"),selectedValue:G("form_gender_placeholder"),value:ne.studentGender,name:"studentGender",onChange:Ie,options:r.ce,optionsValue:r.Dj,errorShow:be.studentGender}),(0,S.jsx)(j.Z,{labelText:G("form_date_of_birth_label"),placeholder:G("form_date_of_birth_placeholder"),name:"studentDOB",value:ne.studentDOB,onDateFunction:e=>{if((0,F.A)(e)){let o=null===e||void 0===e?void 0:e.split("/"),t="".concat(o[2],"-").concat(o[1],"-").concat(o[0]);ie((e=>({...e,studentDOB:t})))}else xe({msg:"You cannot select upcoming date ".concat(e),run:!0})},errorShow:be.studentDOB,customStyleContainer:{position:"relative"}}),(0,S.jsx)(_.Z,{labelText:G("form_mother_name_label"),placeholder:G("form_mother_name_placeholder"),name:"studentMotherName",value:ne.studentMotherName,type:"text",onChange:Ie,errorShow:be.studentMotherName})]}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}}),(null===Ce||void 0===Ce||null===(C=Ce.one_hostel)||void 0===C||null===(J=C.student_form_query)||void 0===J?void 0:J.otherPersonalInfo)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_other_personal_info_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.zA.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.type?(0,S.jsx)(c.Z,{selectLabel:G(null===o||void 0===o?void 0:o.label),selectedValue:G(null===o||void 0===o?void 0:o.placeHolder),value:Y[e],name:e,onChange:Ne,options:null===o||void 0===o?void 0:o.chooseOptions,optionsValue:null===o||void 0===o?void 0:o.chooseOptionsValue,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:["studentPhoneNumber","studentAadharNumber"].includes(e)?"tel":"text",inputLength:"studentPhoneNumber"===e?10:12,onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===Ce||void 0===Ce||null===(I=Ce.one_hostel)||void 0===I||null===(N=I.student_form_query)||void 0===N?void 0:N.identityDetails)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_identity_details_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.vf.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.type?(0,S.jsx)(c.Z,{selectLabel:G(null===o||void 0===o?void 0:o.label),selectedValue:G(null===o||void 0===o?void 0:o.placeHolder),value:Y[e],onChange:Ne,options:null===o||void 0===o?void 0:o.chooseOptions,optionsValue:null===o||void 0===o?void 0:o.chooseOptionsValue,name:e,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:"text",onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===Ce||void 0===Ce||null===(Z=Ce.one_hostel)||void 0===Z||null===(D=Z.student_form_query)||void 0===D?void 0:D.addressInfo)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_address_info_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.MI.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.type?(0,S.jsx)(v.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:"text",onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):null!==o&&void 0!==o&&o.checkbox?(0,S.jsx)(g.Z,{checkLabel:G(null===o||void 0===o?void 0:o.label),checkedValue:Y.asSameAddress,onCheckboxAction:De,customStyle:{display:"block",width:"100%",marginLeft:"0"}},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:["studentCurrentPincode","studentPincode"].includes(e)?"tel":"text",inputLength:6,onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===Ce||void 0===Ce||null===(P=Ce.one_hostel)||void 0===P||null===(R=P.student_form_query)||void 0===R?void 0:R.parentsInfo)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_parent_guardian_info_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.Xu.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.type?(0,S.jsx)(c.Z,{selectLabel:G(null===o||void 0===o?void 0:o.label),selectedValue:G(null===o||void 0===o?void 0:o.placeHolder),value:Y[e],onChange:Ne,options:null===o||void 0===o?void 0:o.chooseOptions,optionsValue:null===o||void 0===o?void 0:o.chooseOptionsValue,name:e,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:["studentParentsPhoneNumber"].includes(e)?"tel":"text",inputLength:"studentParentsPhoneNumber"===e?10:30,onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===Ce||void 0===Ce||null===(H=Ce.one_hostel)||void 0===H||null===(T=H.student_form_query)||void 0===T||null===(L=T.previousSchoolAndDocument)||void 0===L?void 0:L.previousSchoolDocument)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_previous_school_document_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===le||void 0===le?void 0:le.map((e=>r.Bq.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.fileType?(0,S.jsx)(m.Z,{labelText:G(null===o||void 0===o?void 0:o.label),name:e,value:de[e],onChange:Pe,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):null!==o&&void 0!==o&&o.checkbox?"":!(null!==de&&void 0!==de&&de.previousSchoolDocument)&&(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:de[e],type:"text",onChange:Ze,customStyleContainer:{width:"100%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))}),(0,S.jsx)(p.Z,{customStyle:{width:"104.5%",marginTop:"15px",marginLeft:"-24px"}})]}),(null===Ce||void 0===Ce||null===(O=Ce.one_hostel)||void 0===O||null===(M=O.student_form_query)||void 0===M?void 0:M.bankDetails)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_student_bank_details_label"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.Mi.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.fileType?(0,S.jsx)(m.Z,{labelText:G(null===o||void 0===o?void 0:o.label),name:e,value:Y[e],onChange:Pe,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:["studentBankAccount","studentBankReAccount"].includes(e)?"tel":"text",reAccount:"studentBankReAccount"===e?be[e]:"",inputLength:50,onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))})]}),(null===Ce||void 0===Ce||null===(B=Ce.one_hostel)||void 0===B||null===(E=B.student_form_query)||void 0===E?void 0:E.cpi)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("h4",{children:[G("form_student_hostel_cpi"),":"]}),(0,S.jsx)("div",{className:i.Z.form_other_field,children:null===oe||void 0===oe?void 0:oe.map((e=>r.HK.map((o=>{var t;return(null===o||void 0===o||null===(t=o.lists)||void 0===t?void 0:t.includes(e))&&(null!==o&&void 0!==o&&o.isCalender?(0,S.jsx)(j.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],onDateFunction:Re,errorShow:be[e],customStyleContainer:{position:"relative",width:"49.5%"}},null===o||void 0===o?void 0:o.id):null!==o&&void 0!==o&&o.type?(0,S.jsx)(c.Z,{selectLabel:G(null===o||void 0===o?void 0:o.label),selectedValue:G(null===o||void 0===o?void 0:o.placeHolder),value:Y[e],name:e,onChange:Ne,options:null===o||void 0===o?void 0:o.chooseOptions,optionsValue:null===o||void 0===o?void 0:o.chooseOptionsValue,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id):(0,S.jsx)(_.Z,{labelText:G(null===o||void 0===o?void 0:o.label),placeholder:G(null===o||void 0===o?void 0:o.placeHolder),name:e,value:Y[e],type:"text",onChange:Ne,customStyleContainer:{width:"49.5%"},errorShow:be[e]},null===o||void 0===o?void 0:o.id))}))))})]}),(0,S.jsx)(h.Z,{type:"submit",buttonText:G("form_preview"),customStyleButton:{marginTop:"1.5vw"}})]}),ve&&(0,S.jsx)(u.Z,{open:ve,children:(0,S.jsx)(s.Z,{setPhotoURL:ge,photoURL:fe,setFile:ce,setOpenCrop:me,setProfilePhoto:he,first:1,second:1,setUpload:ue})}),(0,S.jsx)(f.Ch,{msg:ye.msg,run:ye.run,setRun:()=>xe({msg:"",run:!1}),postiton:"bottom",type:"error"})]}),Fe&&(0,S.jsx)(b.Z,{})]})};var A=t(91007),C=t(79872),J=t(28497),I=t(64499),N=t(80214),Z=t(87932),D=t(71439),P=t(71287),R=t(39480),H=t(37782);const T=function(){var e,o,r,s,u,_,c,v,m,h,f,g,y,j,F,T,L,O,M,B,E,q,V,K,U,Q,G,z,W,Y,X,$;const ee=(0,d.s0)(),oe=(0,d.TH)(),te=(0,d.UO)(),ne=(0,a.v9)((e=>e.idChange)),{t:ie}=(0,l.$G)(),[le,ae]=(0,n.useState)(!1),[de,re]=(0,n.useState)(!1),[se,ue]=(0,n.useState)(!1),[_e,ce]=(0,n.useState)(null),[ve]=(0,k.LQ)(),[me]=(0,x.d)(),{existingAccountLogin:pe}=(0,P.f)(),[he]=(0,x.ZR)(),{data:fe,refetch:ge}=(0,A.pu)((null===ne||void 0===ne?void 0:ne.id)||(null===(e=oe.state)||void 0===e?void 0:e.instituteId),{skip:"landing_page"===(null===(o=oe.state)||void 0===o?void 0:o.openAs)||"landing_page_and_existing"===(null===(r=oe.state)||void 0===r?void 0:r.openAs)?!(null!==(s=oe.state)&&void 0!==s&&s.instituteId):!(null!==ne&&void 0!==ne&&ne.id)}),{data:ye}=(0,N.Rg)(),[xe]=(0,N.gt)(),{merchantId:be,merchantIdRefetch:je}=(0,Z.Vc)({id:"landing_page"===(null===(u=oe.state)||void 0===u?void 0:u.openAs)||"landing_page_and_existing"===(null===(_=oe.state)||void 0===_?void 0:_.openAs)?null===(c=oe.state)||void 0===c?void 0:c.instituteId:null===(v=ne.searchProfile)||void 0===v?void 0:v.id,skip:"landing_page"===(null===(m=oe.state)||void 0===m?void 0:m.openAs)||"landing_page_and_existing"===(null===(h=oe.state)||void 0===h?void 0:h.openAs)?!(null!==(f=oe.state)&&void 0!==f&&f.instituteId):!(null!==(g=ne.searchProfile)&&void 0!==g&&g.id)});(0,n.useEffect)((()=>{var e,o;(null!==(e=ne.searchProfile)&&void 0!==e&&e.id||null!==(o=oe.state)&&void 0!==o&&o.instituteId)&&je()}),[null===(y=ne.searchProfile)||void 0===y?void 0:y.id,null===(j=oe.state)||void 0===j?void 0:j.instituteId,je]),(0,n.useEffect)((()=>{var e;(null!==ne&&void 0!==ne&&ne.id||null!==(e=oe.state)&&void 0!==e&&e.instituteId)&&ge()}),[ge,null===ne||void 0===ne?void 0:ne.id,null===(F=oe.state)||void 0===F?void 0:F.instituteId]),(0,n.useEffect)((()=>{var e;null===(e=document.getElementById("scrollView"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[le]);const{oneInstituteProfile:Fe,oneInstituteProfileRefetch:ke}=(0,R.p0)({data:{id:"landing_page"===(null===(T=oe.state)||void 0===T?void 0:T.openAs)||"landing_page_and_existing"===(null===(L=oe.state)||void 0===L?void 0:L.openAs)?null===(O=oe.state)||void 0===O?void 0:O.instituteId:null===(M=ne.searchProfile)||void 0===M?void 0:M.id,type:"ID"},skip:"landing_page"===(null===(B=oe.state)||void 0===B?void 0:B.openAs)||"landing_page_and_existing"===(null===(E=oe.state)||void 0===E?void 0:E.openAs)?!(null!==(q=oe.state)&&void 0!==q&&q.instituteId):!(null!==(V=ne.searchProfile)&&void 0!==V&&V.id)});(0,n.useEffect)((()=>{var e,o;(null!==(e=ne.searchProfile)&&void 0!==e&&e.id||null!==(o=oe.state)&&void 0!==o&&o.instituteId)&&ke()}),[null===(K=ne.searchProfile)||void 0===K?void 0:K.id,null===(U=oe.state)||void 0===U?void 0:U.instituteId,ke]);const Se=async function(e,o,n){var i;let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const d=new Worker(new URL(t.p+t.u(33221),t.b)),{institute:r,studentInfo:s}=(0,H.aF)(null===Fe||void 0===Fe?void 0:Fe.institute,e,{imageKey:o,isAdmission:a,applicationName:null===(i=oe.state)||void 0===i?void 0:i.applicationName});d.postMessage({printFormType:"STUDENT_HOSTEL_FORM",studentInfo:s,institute:r,pdfUndertaking:l}),d.onmessage=e=>{if(e&&n){window.open(URL.createObjectURL(e.data),"_blank");const o=new FormData;o.append("file",e.data),he({sid:n,pdf_file:o}).then((()=>{re((e=>!e))})).catch({})}}};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:i.Z.navbar,children:(0,S.jsx)(C.default,{status:"profile",profileId:fe?null===fe||void 0===fe||null===(Q=fe.user)||void 0===Q?void 0:Q._id:"",username:null===fe||void 0===fe||null===(G=fe.user)||void 0===G?void 0:G.username,name:null===fe||void 0===fe||null===(z=fe.user)||void 0===z?void 0:z.userLegalName,photoId:null===fe||void 0===fe||null===(W=fe.user)||void 0===W?void 0:W.photoId,profilePhoto:null===fe||void 0===fe||null===(Y=fe.user)||void 0===Y?void 0:Y.profilePhoto,profileData:null===fe||void 0===fe?void 0:fe.user})}),(0,S.jsx)("div",{className:i.Z.goback_container,id:"scrollView",children:(0,S.jsxs)("div",{className:i.Z.goback_container_text,onClick:()=>{le?ae((e=>!e)):ee(-1)},children:[(0,S.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,S.jsx)("h6",{className:i.Z.goback_container_text_go,children:ie("go_back")})]})}),(0,S.jsxs)("div",{className:i.Z.student_from_container,children:[(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,S.jsx)("h6",{className:i.Z.student_from_fill,children:ie("form_fill_student")}),le&&(0,S.jsx)("h6",{className:i.Z.student_from_fill_edit,onClick:()=>ae((e=>!e)),children:ie("edit_")})]}),(0,S.jsx)(p.Z,{customStyle:{width:"100%"}}),(0,S.jsx)(w,{preview:le,setPreview:ae,onApplyForm:async e=>{var o,t,n,i,l,a,d,r;re((e=>!e));const s={fileArray:[]};s.fileArray.push(null===e||void 0===e?void 0:e.file);for(let m in null===e||void 0===e?void 0:e.formData)s[m]=null===e||void 0===e?void 0:e.formData[m];for(let m in null===e||void 0===e?void 0:e.studentForm)"asSameAddress"===m||("bankPassbook"===m?null!==e&&void 0!==e&&e.studentForm[m]&&s.fileArray.push(null===e||void 0===e?void 0:e.studentForm[m]):s[m]=null===e||void 0===e?void 0:e.studentForm[m]);for(let m in null===e||void 0===e?void 0:e.dynamicDocument)"previousSchoolDocument"===m||("studentPreviousSchool"===m?s[m]=null===e||void 0===e?void 0:e.dynamicDocument[m]:null!==e&&void 0!==e&&e.dynamicDocument[m]&&s.fileArray.push(null===e||void 0===e?void 0:e.dynamicDocument[m]));var u;if(s.student_prn_enroll_number=null===e||void 0===e?void 0:e.studentNewField.student_prn_enroll_number,"PROFILE_SEARCH"===(null===(o=oe.state)||void 0===o?void 0:o.openAs)&&null!==ne&&void 0!==ne&&ne.id&&null!==(t=oe.state)&&void 0!==t&&t.appId)ve({aid:null===(u=oe.state)||void 0===u?void 0:u.appId,studentData:s,uid:null===ne||void 0===ne?void 0:ne.id}).then((async o=>{var t,n;o.data.status?(await Se(s,null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.key,null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.student,"PG"),ee("/q/".concat(te.username,"/feed"))):re((e=>!e))})).catch({});else if("ADMISSION_DIRECT_APPLY"===(null===(n=oe.state)||void 0===n?void 0:n.openAs)&&null!==(i=oe.state)&&void 0!==i&&i.appId)se||(ue(!0),ce(s),re((e=>!e)));else if("landing_page"===(null===(l=oe.state)||void 0===l?void 0:l.openAs)&&null!==(a=oe.state)&&void 0!==a&&a.verifyNumber){var _;me({phoneNumber:null===(_=oe.state)||void 0===_?void 0:_.verifyNumber,aid:oe.state.appId,direct_student:s}).then((async o=>{var t,n,i,l,a,d,r;await Se(s,null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.key,null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.student,null===e||void 0===e?void 0:e.pdfUndertaking),pe({token:null===o||void 0===o||null===(i=o.data)||void 0===i?void 0:i.token,_id:null===o||void 0===o||null===(l=o.data)||void 0===l||null===(a=l.user)||void 0===a?void 0:a._id,username:null===o||void 0===o||null===(d=o.data)||void 0===d||null===(r=d.user)||void 0===r?void 0:r.username})})).catch({})}else if("landing_page_and_existing"===(null===(d=oe.state)||void 0===d?void 0:d.openAs)&&null!==(r=oe.state)&&void 0!==r&&r.userId){var c,v;ve({aid:null===(c=oe.state)||void 0===c?void 0:c.appId,studentData:s,uid:null===(v=oe.state)||void 0===v?void 0:v.userId}).then((async o=>{var t,n,i;o.data.status?(await Se(s,null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.key,null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.student,null===e||void 0===e?void 0:e.pdfUndertaking),ee("/q/".concat(null===(i=oe.state)||void 0===i?void 0:i.username,"/feed"))):re((e=>!e))})).catch({})}else re((e=>!e))},hostelId:null===(X=oe.state)||void 0===X?void 0:X.hostelId}),se&&(0,S.jsx)(D.Z,{onClose:()=>ue(!1),allContent:{type:"ADMISSION_DIRECT_APPLY",amount:null===($=oe.state)||void 0===$?void 0:$.first_install},checkoutAdmissionDirectHandler:function(e){var o,t;let n=2.1*+(null===(o=oe.state)||void 0===o?void 0:o.first_install)/100,i=+n+18*+n/100;const l=parseInt(null===(t=oe.state)||void 0===t?void 0:t.first_install);var a,d,r,s={amount:Math.ceil(l+ +i.toFixed(2))};"PAYTM"===e?(0,I.Ex)({amount:+(null===(a=oe.state)||void 0===a?void 0:a.first_install),amount_nocharges:+s.amount,type:"Direct_Hostel",paidBy:"".concat(null===ne||void 0===ne?void 0:ne.id),paidTo:"".concat(null===(d=ne.searchProfile)||void 0===d?void 0:d.id),moduleId:"".concat(null===(r=oe.state)||void 0===r?void 0:r.appId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:te.username,isApk:"web",payment_card_id:null}).then((e=>{var o,t;window.onScriptLoad(null===e||void 0===e||null===(o=e.response)||void 0===o||null===(t=o.body)||void 0===t?void 0:t.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==ye&&void 0!==ye&&ye.Key&&null!==s&&void 0!==s&&s.amount&&xe({amount:null===s||void 0===s?void 0:s.amount,student_data:_e}).then((e=>{var o,t,n,i,l,a;null!==(o=e.data)&&void 0!==o&&o.success?(0,J.r)({key:null===ye||void 0===ye?void 0:ye.Key,oid:null===(t=e.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===(n=oe.state)||void 0===n?void 0:n.first_install),amount:null===(i=e.data)||void 0===i?void 0:i.order.amount,type:"Direct_Hostel",pay_by:"".concat(null===ne||void 0===ne?void 0:ne.id),pay_to:"".concat(null===(l=ne.searchProfile)||void 0===l?void 0:l.id),mid:"".concat(null===(a=oe.state)||void 0===a?void 0:a.appId),razor_key:null===be||void 0===be?void 0:be.key,razor_author:null===be||void 0===be?void 0:be.bool,status:null,installment_type:null,is_install:null,h_month:null}):console.log("data error")})).catch((e=>{console.log(e)}))}})]}),de&&(0,S.jsx)(b.Z,{})]})}},87932:(e,o,t)=>{t.d(o,{ES:()=>f,FT:()=>p,G1:()=>b,HL:()=>_,Iv:()=>k,JL:()=>A,Jb:()=>y,Kd:()=>G,Ls:()=>T,OS:()=>i,PY:()=>J,SN:()=>N,Ud:()=>w,Vc:()=>u,Vl:()=>X,W4:()=>S,WB:()=>q,WV:()=>Z,Xf:()=>v,Z:()=>m,_$:()=>V,_7:()=>O,__:()=>ee,bC:()=>M,bG:()=>z,dR:()=>Y,db:()=>D,do:()=>c,f3:()=>F,fF:()=>x,fZ:()=>$,hu:()=>oe,iN:()=>a,j2:()=>l,j7:()=>E,jd:()=>P,lV:()=>j,lr:()=>r,mF:()=>K,n5:()=>s,o9:()=>R,oM:()=>L,rU:()=>h,s0:()=>d,sR:()=>g,sv:()=>H,tu:()=>W,uD:()=>I,vJ:()=>U,vp:()=>Q,wB:()=>C,yR:()=>B});var n=t(14304);const i=e=>{const{data:o,refetch:t}=(0,n.x$)(e.data,{skip:e.skip});return{financeDetailManager:o,financeDetailManagerRefetch:t}},l=e=>{const{data:o,refetch:t}=(0,n.Qm)(e.data,{skip:e.skip});return{financeAllHistory:o,financeAllHistoryRefetch:t}},a=()=>{const[e]=(0,n.FM)();return[e]},d=()=>{const[e]=(0,n.PJ)();return[e]},r=e=>{const{data:o,refetch:t}=(0,n.AG)(e.data,{skip:e.skip});return{financeOneEmployeeDetailHistory:o,financeOneEmployeeDetailHistoryRefetch:t}},s=e=>{const{data:o,refetch:t}=(0,n.yO)(e.data,{skip:e.skip});return{oneStaffAttendance:o,oneStaffAttendanceRefetch:t}},u=e=>{const{data:o,refetch:t}=(0,n.cP)(e.id,{skip:e.skip});return{merchantId:o,merchantIdRefetch:t}},_=e=>{const{data:o,refetch:t}=(0,n.iQ)(e.data,{skip:e.skip});return{getBankByFinance:o,getBankByFinanceRefetch:t}},c=()=>{const[e]=(0,n.rT)();return[e]},v=()=>{const[e]=(0,n.Uz)();return[e]},m=e=>{const{data:o,refetch:t}=(0,n.Nm)(e.fid,{skip:e.skip});return{getAllFeesCategory:o,getAllFeesCategoryRefetch:t}},p=()=>{const[e]=(0,n.aJ)();return[e]},h=e=>{const{data:o,refetch:t}=(0,n.jy)(e.data,{skip:e.skip});return{getAllFeesStructure:o,getAllFeesStructureRefetch:t}},f=()=>{const[e]=(0,n.Tw)();return[e]},g=e=>{const{data:o,refetch:t}=(0,n.EK)(e.fsid,{skip:e.skip});return{oneFeeStructureDetail:o,oneFeeStructureDetailRefetch:t}},y=()=>{const[e]=(0,n.hR)();return[e]},x=e=>{const{data:o,refetch:t}=(0,n.tj)(e.data,{skip:e.skip});return{getAllFeeHeadMaster:o,getAllFeeHeadMasterRefetch:t}},b=()=>{const[e]=(0,n.CM)();return[e]},j=()=>{const[e]=(0,n.tM)();return[e]},F=()=>{const[e]=(0,n.Z1)();return[e]},k=()=>{const[e]=(0,n.QF)();return[e]},S=()=>{const[e]=(0,n.Zy)();return[e]},w=()=>{const[e]=(0,n.wt)();return[e]},A=()=>{const[e]=(0,n.Tz)();return[e]},C=()=>{const[e]=(0,n.QH)();return[e]},J=()=>{const[e]=(0,n.ko)();return[e]},I=()=>{const[e]=(0,n.a2)();return[e]},N=e=>{const{data:o,refetch:t}=(0,n.HH)(e.data,{skip:e.skip});return{filterTransactionHistory:o,filterTransactionHistoryRefetch:t}},Z=e=>{const{data:o,refetch:t}=(0,n.jq)(e.data,{skip:e.skip});return{getAllExcelByFinance:o,getAllExcelByFinanceRefetch:t}},D=()=>{const[e]=(0,n.EP)();return[e]},P=()=>{const[e]=(0,n.xY)();return[e]},R=e=>{const{data:o,refetch:t}=(0,n.Dg)(e.data,{skip:e.skip});return{getAllBankByFinance:o,getAllBankByFinanceRefetch:t}},H=e=>{const{data:o,refetch:t}=(0,n.pB)(e.bid,{skip:e.skip});return{getOneBankByFinance:o,getOneBankByFinanceRefetch:t}},T=()=>{const[e]=(0,n.Cr)();return[e]},L=()=>{const[e]=(0,n.xT)();return[e]},O=e=>{const{data:o,refetch:t}=(0,n.F9)(e.data,{skip:e.skip});return{getMasterDepositAllByFinance:o,getMasterDepositAllByFinanceRefetch:t}},M=()=>{const[e]=(0,n.ie)();return[e]},B=e=>{const{data:o,refetch:t}=(0,n.dh)(e.data,{skip:e.skip});return{getModeratorByFinance:o,getModeratorByFinanceRefetch:t}},E=()=>{const[e]=(0,n.jX)();return[e]},q=()=>{const[e]=(0,n.it)();return[e]},V=()=>{const[e]=(0,n.NA)();return[e]},K=()=>{const[e]=(0,n.V7)();return[e]},U=e=>{const{data:o,refetch:t}=(0,n.XE)(e.id,{skip:e.skip});return{getAllStandardInstitute:o,getAllStandardInstituteRefetch:t}},Q=e=>{const{data:o,refetch:t}=(0,n.db)(e.data,{skip:e.skip});return{getPayrollHeadList:o,getPayrollHeadListRefetch:t}},G=()=>{const[e]=(0,n.h_)();return[e]},z=e=>{const{data:o,refetch:t}=(0,n.fi)(e.data,{skip:e.skip});return{getOnePayrollHeadMonth:o,getOnePayrollHeadMonthRefetch:t}},W=e=>{const{data:o,refetch:t}=(0,n.Ih)(e.data,{skip:e.skip});return{getOnePayrollHeadEmployee:o,getOnePayrollHeadEmployeeRefetch:t}},Y=()=>{const[e]=(0,n.bj)();return[e]},X=e=>{const{data:o,refetch:t}=(0,n.wr)(e.fid,{skip:e.skip});return{getPayrollSalaryHistoryList:o,getPayrollSalaryHistoryListRefetch:t}},$=()=>{const[e]=(0,n.JO)();return[e]},ee=e=>{const{data:o,refetch:t}=(0,n.mi)(e.data,{skip:e.skip});return{filterHostelFeeHeadReceipt:o,filterHostelFeeHeadReceiptRefetch:t}},oe=e=>{const{data:o,refetch:t}=(0,n.DN)(e.rid,{skip:e.skip});return{financeTransportReceipt:o,financeTransportReceiptRefetch:t}}},38733:(e,o,t)=>{t.d(o,{Z:()=>n});const n={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}}}]);
//# sourceMappingURL=15550.4b927d57.chunk.js.map