"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3148],{12953:function(t,e,n){n.d(e,{A:function(){return o},t:function(){return i}});var o=function(t){var e=new Date,n=null===t||void 0===t?void 0:t.split("/");return!(e<=new Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])))},i=function(t){var e=new Date,n=null===t||void 0===t?void 0:t.split("/");return e<=new Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0]))?{status:!0,value:"".concat(n[2],"-").concat(n[1],"-").concat(n[0])}:{status:!1,value:""}}},81693:function(t,e,n){var o=n(1413),i=(n(72791),n(39230)),l=n(38733),a=n(80184);e.Z=function(t){var e=t.selectLabel,n=t.value,s=t.name,u=t.onChange,d=t.selectedValue,r=t.options,c=t.optionsValue,m=t.errorShow,v=t.customStyleContainer,p=t.customStyleLabel,g=t.customStyleInput,x=t.disabled,h=t.isNotTranslation,f=(0,i.$G)().t;return(0,a.jsxs)("div",{className:l.Z.join_form_container,style:(0,o.Z)({},v),children:[(0,a.jsxs)("p",{className:l.Z.join_form_select_paragraph,style:(0,o.Z)({},p),children:[e," ",m&&(0,a.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,a.jsxs)("select",{className:l.Z.join_form_select,value:n,onChange:u,name:s,disabled:x,style:(0,o.Z)({},g),children:[(0,a.jsx)("option",{selected:!0,children:d}),h?null===r||void 0===r?void 0:r.map((function(t,e){return(0,a.jsx)("option",{value:t,children:t},e)})):null===r||void 0===r?void 0:r.map((function(t,e){return(0,a.jsx)("option",{value:c?c[null===t||void 0===t?void 0:t.keys]:t,children:f(null===t||void 0===t?void 0:t.keys)},e)}))]})]})}},53148:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var o=n(72791),i=n(16871),l=n(54433),a=n(39601),s=n(91007),u=n(78687),d=n(38733),r=n(4942),c=n(1413),m=n(29439),v=n(39230),p=n(43504),g=n(98094),x=n(97655),h=n(69721),f=n(16256),y=n(81693),_=n(12953),b=n(59965),j=n(72426),T=n.n(j),N=n(11130),S=n(37782),Z=n(98734),C=n(80184),L={insName:"",insPhoneNumber:"",insAddress:"",insEmail:"",insAffiliated:"",insEditableText_one:"",insEditableText_two:"",affiliatedImage:"",insProfilePhoto:"",studentGRNO:"",studentCertificateNo:"",bookNo:"",studentUidaiNumber:"",name:"",studentMotherName:"",studentMTongue:"",studentCast:"",studentCastCategory:"",studentNationality:"",studentReligion:"",studentBirthPlace:"",studentDOB:"",studentPreviousSchool:"",studentLeavingBehaviour:"",studentLeavingStudy:"",studentLeavingReason:"",studentRemark:"",instituteJoinDate:"",instituteLeavingDate:"",courseDuration:"",studentClassName:"",authority:""},I=function(t){return(t.match(/[a-zA-Z0-9]+/g)||[]).map((function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))})).join(" ")},B=function(){var t,e,l,a,s,u,j,B,w,k,D,A,E,P,O,R,M,V,G,U,F=(0,v.$G)().t,W=(0,i.TH)(),J=(0,i.UO)(),q=(0,o.useState)(!1),$=(0,m.Z)(q,2),H=($[0],$[1]),Q=(0,o.useState)(!1),Y=(0,m.Z)(Q,2),z=Y[0],X=Y[1],K=(0,o.useState)(!1),tt=(0,m.Z)(K,2),et=tt[0],nt=tt[1],ot=(0,o.useState)(!1),it=(0,m.Z)(ot,2),lt=it[0],at=it[1],st=(0,o.useState)(L),ut=(0,m.Z)(st,2),dt=ut[0],rt=ut[1],ct=n(62906);(0,o.useEffect)((function(){var t,e,n,o;null!==(t=W.state)&&void 0!==t&&t.student&&(rt((function(t){var e,n,o,i,l,a,s,u,d,r,m,v,p,g,x,h,f,y,_,b,j,N,S,Z,C,L,I,B,w,k,D,A,E,P,O,R,M,V,G,U,F,J,q,$,H,Q,Y,z,X,K,tt,et,nt,ot,it,lt,at,st,ut,dt,rt,ct,mt,vt,pt,gt,xt,ht,ft,yt,_t,bt,jt,Tt,Nt,St,Zt,Ct,Lt,It,Bt,wt,kt,Dt,At,Et,Pt,Ot,Rt,Mt,Vt,Gt,Ut,Ft,Wt,Jt,qt,$t,Ht,Qt,Yt,zt,Xt;return(0,c.Z)((0,c.Z)({},t),{},{insName:null!==(e=null===(n=W.state)||void 0===n||null===(o=n.student)||void 0===o||null===(i=o.institute)||void 0===i?void 0:i.insName)&&void 0!==e?e:"",insPhoneNumber:null!==(l=null===(a=W.state)||void 0===a||null===(s=a.student)||void 0===s||null===(u=s.institute)||void 0===u?void 0:u.insPhoneNumber)&&void 0!==l?l:"",insAddress:null!==(d=null===(r=W.state)||void 0===r||null===(m=r.student)||void 0===m||null===(v=m.institute)||void 0===v?void 0:v.insAddress)&&void 0!==d?d:"",insEmail:null!==(p=null===(g=W.state)||void 0===g||null===(x=g.student)||void 0===x||null===(h=x.institute)||void 0===h?void 0:h.insEmail)&&void 0!==p?p:"",insAffiliated:null!==(f=null===(y=W.state)||void 0===y||null===(_=y.student)||void 0===_||null===(b=_.institute)||void 0===b?void 0:b.insAffiliated)&&void 0!==f?f:"",insEditableText_one:null!==(j=null===(N=W.state)||void 0===N||null===(S=N.student)||void 0===S||null===(Z=S.institute)||void 0===Z?void 0:Z.insEditableText_one)&&void 0!==j?j:"",insEditableText_two:null!==(C=null===(L=W.state)||void 0===L||null===(I=L.student)||void 0===I||null===(B=I.institute)||void 0===B?void 0:B.insEditableText_two)&&void 0!==C?C:"",affiliatedImage:null!==(w=null===(k=W.state)||void 0===k||null===(D=k.student)||void 0===D||null===(A=D.institute)||void 0===A?void 0:A.affliatedLogo)&&void 0!==w?w:"",insProfilePhoto:null!==(E=null===(P=W.state)||void 0===P||null===(O=P.student)||void 0===O||null===(R=O.institute)||void 0===R?void 0:R.insProfilePhoto)&&void 0!==E?E:"",studentGRNO:null!==(M=null===(V=W.state)||void 0===V||null===(G=V.student)||void 0===G?void 0:G.studentGRNO)&&void 0!==M?M:"",bookNo:null!==(U=null===(F=W.state)||void 0===F||null===(J=F.student)||void 0===J?void 0:J.bookNo)&&void 0!==U?U:"",studentCertificateNo:null!==(q=null===($=W.state)||void 0===$||null===(H=$.student)||void 0===H?void 0:H.studentCertificateNo)&&void 0!==q?q:"",studentUidaiNumber:null!==(Q=null===(Y=W.state)||void 0===Y||null===(z=Y.student)||void 0===z?void 0:z.studentUidaiNumber)&&void 0!==Q?Q:"",name:"".concat(null!==(X=null===(K=W.state)||void 0===K||null===(tt=K.student)||void 0===tt?void 0:tt.studentFirstName)&&void 0!==X?X:""," ").concat(null!==(et=null===(nt=W.state)||void 0===nt||null===(ot=nt.student)||void 0===ot?void 0:ot.studentMiddleName)&&void 0!==et?et:""," ").concat(null===(it=W.state)||void 0===it||null===(lt=it.student)||void 0===lt?void 0:lt.studentLastName),studentMotherName:null!==(at=null===(st=W.state)||void 0===st||null===(ut=st.student)||void 0===ut?void 0:ut.studentMotherName)&&void 0!==at?at:"",studentMTongue:null!==(dt=null===(rt=W.state)||void 0===rt||null===(ct=rt.student)||void 0===ct?void 0:ct.studentMTongue)&&void 0!==dt?dt:"",studentCast:null!==(mt=null===(vt=W.state)||void 0===vt||null===(pt=vt.student)||void 0===pt?void 0:pt.studentCast)&&void 0!==mt?mt:"",studentCastCategory:null!==(gt=null===(xt=W.state)||void 0===xt||null===(ht=xt.student)||void 0===ht?void 0:ht.studentCastCategory)&&void 0!==gt?gt:"",studentNationality:null!==(ft=null===(yt=W.state)||void 0===yt||null===(_t=yt.student)||void 0===_t?void 0:_t.studentNationality)&&void 0!==ft?ft:"",studentReligion:null!==(bt=null===(jt=W.state)||void 0===jt||null===(Tt=jt.student)||void 0===Tt?void 0:Tt.studentReligion)&&void 0!==bt?bt:"",studentBirthPlace:null!==(Nt=null===(St=W.state)||void 0===St||null===(Zt=St.student)||void 0===Zt?void 0:Zt.studentBirthPlace)&&void 0!==Nt?Nt:"",studentDOB:null!==(Ct=null===(Lt=W.state)||void 0===Lt||null===(It=Lt.student)||void 0===It?void 0:It.studentDOB)&&void 0!==Ct?Ct:"",studentPreviousSchool:null!==(Bt=null===(wt=W.state)||void 0===wt||null===(kt=wt.student)||void 0===kt?void 0:kt.studentPreviousSchool)&&void 0!==Bt?Bt:"",studentLeavingBehaviour:null!==(Dt=null===(At=W.state)||void 0===At||null===(Et=At.student)||void 0===Et?void 0:Et.studentLeavingBehaviour)&&void 0!==Dt?Dt:"",studentLeavingStudy:null!==(Pt=null===(Ot=W.state)||void 0===Ot||null===(Rt=Ot.student)||void 0===Rt?void 0:Rt.studentLeavingStudy)&&void 0!==Pt?Pt:"",studentLeavingReason:null!==(Mt=null===(Vt=W.state)||void 0===Vt||null===(Gt=Vt.student)||void 0===Gt?void 0:Gt.studentLeavingReason)&&void 0!==Mt?Mt:"",instituteJoinDate:T()(null===(Ut=W.state)||void 0===Ut||null===(Ft=Ut.student)||void 0===Ft?void 0:Ft.studentAdmissionDate).format("yyyy-mm-DD"),courseDuration:"",studentClassName:null!==(Wt="".concat(null!==(Jt=null===(qt=W.state)||void 0===qt||null===($t=qt.student)||void 0===$t||null===(Ht=$t.studentClass)||void 0===Ht?void 0:Ht.className)&&void 0!==Jt?Jt:""," - ").concat(null!==(Qt=null===(Yt=W.state)||void 0===Yt||null===(zt=Yt.student)||void 0===zt||null===(Xt=zt.studentClass)||void 0===Xt?void 0:Xt.classTitle)&&void 0!==Qt?Qt:""))&&void 0!==Wt?Wt:"",authority:""})})),nt(null===(e=W.state)||void 0===e||null===(n=e.student)||void 0===n||null===(o=n.certificateLeavingCopy)||void 0===o?void 0:o.originalCopy))}),[null===(t=W.state)||void 0===t?void 0:t.student]);var mt=function(t){rt((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,r.Z)({},t.target.name,t.target.value))}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,C.jsxs)("h6",{className:d.Z.student_from_fill,children:[F("fill_certificate_form"),"Original Copy"===(null===(e=W.state)||void 0===e||null===(l=e.student)||void 0===l?void 0:l.duplicate_copy)?(0,C.jsxs)("span",{children:["(",F("original_not_given"),")"]}):(0,C.jsxs)("span",{children:["(",F("original_given"),")"]})]}),(0,C.jsx)("img",{style:{height:"1.3rem",marginRight:"1rem",cursor:"pointer"},src:"/images/menu-dots-dark-icon.svg",alt:"",onClick:function(){H((function(t){return!t}))}})]}),(0,C.jsx)(g.Z,{customStyle:{width:"100%"}}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,style:{paddingInline:"1rem"},children:[(0,C.jsxs)("div",{style:{width:"88%"},children:[(0,C.jsx)(x.Z,{labelText:F("institute_name"),placeholder:F("institute_name"),name:"insName",value:dt.insName,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("institute_address"),placeholder:F("institute_address"),name:"insAddress",value:dt.insAddress,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(x.Z,{labelText:F("contact_number"),placeholder:F("contact_number"),name:"insPhoneNumber",value:dt.insPhoneNumber,type:"tel",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("email"),placeholder:F("email"),name:"insEmail",value:dt.insEmail,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]})]}),(0,C.jsx)("div",{className:d.Z.profilephotocontainer,children:(0,C.jsx)("img",{className:d.Z.profilephotoins,src:dt.affiliatedImage?"".concat(h.yI,"/").concat(dt.affiliatedImage):"/images/ins_default_profile.svg",alt:"ChatAvatar"})})]}),(0,C.jsxs)("div",{style:{paddingInline:"1rem"},children:[(0,C.jsx)(x.Z,{labelText:F("aff_body"),placeholder:F("aff_body"),name:"insAffiliated",value:dt.insAffiliated,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("ins_identity1"),placeholder:F("ins_identity1"),name:"insEditableText_one",value:dt.insEditableText_one,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("ins_identity2"),placeholder:F("ins_identity2"),name:"insEditableText_two",value:dt.insEditableText_two,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsx)(g.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,style:{paddingInline:"1rem"},children:[(0,C.jsx)(x.Z,{labelText:F("gr_no"),placeholder:F("gr_no"),name:"studentGRNO",value:dt.studentGRNO,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("enter_book_no"),placeholder:F("enter_book_no"),name:"bookNo",value:dt.bookNo,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("certificate_no"),placeholder:F("certificate_no"),name:"studentCertificateNo",value:dt.studentCertificateNo,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("enter_udice"),placeholder:F("enter_udice"),name:"studentUidaiNumber",value:dt.studentUidaiNumber,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsx)("div",{className:d.Z.certidyheading,children:"leaving"===(null===(a=W.state)||void 0===a?void 0:a.is_leaving)?F("leaving_certificates"):F("transfer_certificate")}),(0,C.jsxs)("div",{style:{paddingInline:"1rem"},children:[(0,C.jsx)(x.Z,{labelText:F("name"),placeholder:F("name"),name:"name",value:dt.name,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(x.Z,{labelText:F("mother_name"),placeholder:F("mother_name"),name:"studentMotherName",value:dt.studentMotherName,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("mother_tongue"),placeholder:F("mother_tongue"),name:"studentMTongue",value:dt.studentMTongue,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(x.Z,{labelText:F("cast"),placeholder:F("cast"),name:"studentCast",value:dt.studentCast,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(y.Z,{selectLabel:F("cast_category"),selectedValue:F("cast_category"),value:dt.studentCastCategory,name:"studentCastCategory",onChange:mt,options:f.XQ,optionsValue:f.Ld,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(y.Z,{selectLabel:F("nationality"),selectedValue:F("nationality"),value:dt.studentNationality,name:"studentNationality",onChange:mt,options:f.j8,optionsValue:f.ee,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(y.Z,{selectLabel:F("religion"),selectedValue:F("religion"),value:dt.studentReligion,name:"studentReligion",onChange:mt,options:f.Q3,optionsValue:f.CD,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(x.Z,{labelText:F("birth_place"),placeholder:F("birth_place"),name:"studentBirthPlace",value:dt.studentBirthPlace,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(p.rU,{to:"/q/".concat(J.username,"/student/profile"),state:{sid:null===W||void 0===W||null===(s=W.state)||void 0===s||null===(u=s.student)||void 0===u?void 0:u._id,viewAs:"LEAVING_FORM"},children:(0,C.jsx)(x.Z,{labelText:F("applicable_remaining_fees"),name:"studentMotherName",value:"".concat(F("applicable_remaining_fees")," : ").concat(null===(j=W.state)||void 0===j||null===(B=j.student)||void 0===B?void 0:B.applicable_fees_pending),type:"text",onChange:function(){},customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none",color:"#2572CB",cursor:"pointer"}})})]}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(b.Z,{labelText:F("dob"),placeholder:F("dob"),name:"studentDOB",value:dt.studentDOB,onDateFunction:function(t){if((0,_.A)(t)){var e=null===t||void 0===t?void 0:t.split("/"),n="".concat(e[2],"-").concat(e[1],"-").concat(e[0]);rt((function(t){return(0,c.Z)((0,c.Z)({},t),{},{studentDOB:n})}))}},customStyleContainer:{position:"relative"},customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("in_words"),placeholder:F("in_words"),name:"studentDOBWork",value:dt.studentDOB?"".concat(I(ct.toWords(null===dt||void 0===dt||null===(w=dt.studentDOB)||void 0===w||null===(k=w.split("T")[0])||void 0===k||null===(D=k.split("-"))||void 0===D?void 0:D[2])),"  ").concat(f.e7[(null===dt||void 0===dt||null===(A=dt.studentDOB)||void 0===A||null===(E=A.split("T")[0])||void 0===E||null===(P=E.split("-"))||void 0===P?void 0:P[1])-1]," ").concat(I(ct.toWords(null===dt||void 0===dt||null===(O=dt.studentDOB)||void 0===O||null===(R=O.split("T")[0])||void 0===R||null===(M=R.split("-"))||void 0===M?void 0:M[0]))):"",type:"text",onChange:function(){},customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsx)(x.Z,{labelText:F("prev_school_college"),placeholder:F("prev_school_college"),name:"studentPreviousSchool",value:dt.studentPreviousSchool,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(b.Z,{labelText:F("joining_date"),placeholder:F("joining_date"),name:"instituteJoinDate",value:dt.instituteJoinDate,onDateFunction:function(t){if(t){var e=null===t||void 0===t?void 0:t.split("/"),n="".concat(e[2],"-").concat(e[1],"-").concat(e[0]);rt((function(t){return(0,c.Z)((0,c.Z)({},t),{},{instituteJoinDate:n})}))}},customStyleContainer:{position:"relative"},customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("was_studying_in"),placeholder:F("was_studying_in"),name:"studentClassName",value:dt.studentClassName,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsxs)("div",{className:d.Z.form_profile_info,children:[(0,C.jsx)(y.Z,{selectLabel:F("study_progress"),selectedValue:F("study_progress"),value:dt.studentLeavingStudy,name:"studentLeavingStudy",onChange:mt,options:["Beginner","Intermediate","Advanced"],isNotTranslation:!0,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(y.Z,{selectLabel:F("behaviour"),selectedValue:F("behaviour"),value:dt.studentLeavingBehaviour,name:"studentLeavingBehaviour",onChange:mt,options:["Excellent","Very Good","Good","Bad","Very Bad"],isNotTranslation:!0,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsx)(x.Z,{labelText:F("reason_for_leaving"),placeholder:F("reason_for_leaving"),name:"studentLeavingReason",value:dt.studentLeavingReason,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("remarks"),placeholder:F("remarks"),name:"studentRemark",value:dt.studentRemark,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}}),(0,C.jsx)(x.Z,{labelText:F("competent_authority"),placeholder:F("competent_authority_lable"),name:"authority",value:dt.authority,type:"text",onChange:mt,customStyleLabel:{marginTop:"7px",marginBottom:"4px"},customStyleInput:{outline:"none"}})]}),(0,C.jsxs)("div",{className:d.Z.buttoncontainer,children:[(0,C.jsx)("div",{className:d.Z.buttonInner,children:et?(0,C.jsx)("div",{className:d.Z.button_main,style:{marginTop:"1.5vw",width:"100%",cursor:"pointer",backgroundColor:"#4CAF50"},onClick:function(){return X(!0)},children:(0,C.jsx)("span",{children:F("original_copy")})}):(0,C.jsx)("div",{className:d.Z.button_main,style:{marginTop:"1.5vw",width:"100%",cursor:"pointer",backgroundColor:"rgb(228, 72, 121)"},onClick:function(){return X(!0)},children:(0,C.jsx)("span",{children:F("duplicate_copy")})})}),(0,C.jsx)("div",{className:d.Z.buttonInner,children:(0,C.jsx)("div",{className:d.Z.button_main,style:{marginTop:"1.5vw",width:"100%",cursor:"pointer"},onClick:function(){var t;at((function(t){return!t}));var e=(0,S.pW)(dt,{isOriginal:et,is_leaving:null===(t=W.state)||void 0===t?void 0:t.is_leaving}),o=e.institute,i=e.studentInfo,l=new Worker(new URL(n.p+n.u(1124),n.b));l.postMessage({printCertificateType:"LEAVING",studentInfo:i,institute:o}),l.onmessage=function(t){t&&(window.open(t.data,"_blank"),at((function(t){return!t})))}},children:(0,C.jsx)("span",{children:F("download_certificate")})})})]}),z&&(0,C.jsx)(N.Z,{open:z,hideModal:function(t){return X(t)},insId:null===(V=W.state)||void 0===V||null===(G=V.student)||void 0===G||null===(U=G.institute)||void 0===U?void 0:U._id,setIsOrigin:nt}),lt&&(0,C.jsx)(Z.Z,{})]})},w=function(){var t,e,n,r,c,m,p,g,x,h,f=(0,v.$G)().t,y=(0,i.TH)(),_=(0,i.s0)(),b=(0,u.useSelector)((function(t){return t.idChange.id})),j=(0,s.pu)(b,{skip:null===(t=y.state)||void 0===t||!t.viewAs||("INSTITUTE"===(null===(e=y.state)||void 0===e?void 0:e.viewAs)||!b)}),T=j.data,N=j.refetch;(0,o.useEffect)((function(){var t;null!==(t=y.state)&&void 0!==t&&t.viewAs&&b&&N()}),[null===(n=y.state)||void 0===n?void 0:n.viewAs,b,N]),(0,o.useEffect)((function(){var t;null===(t=document.getElementById("scrollView"))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),[null===(r=y.state)||void 0===r?void 0:r.sid]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:d.Z.navbar,children:"INSTITUTE"===(null===(c=y.state)||void 0===c?void 0:c.viewAs)?(0,C.jsx)(l.default,{status:"home"}):(0,C.jsx)(a.default,{status:"members",profileId:T?null===T||void 0===T||null===(m=T.user)||void 0===m?void 0:m._id:"",username:null===T||void 0===T||null===(p=T.user)||void 0===p?void 0:p.username,name:null===T||void 0===T||null===(g=T.user)||void 0===g?void 0:g.userLegalName,photoId:null===T||void 0===T||null===(x=T.user)||void 0===x?void 0:x.photoId,profilePhoto:null===T||void 0===T||null===(h=T.user)||void 0===h?void 0:h.profilePhoto,profileData:null===T||void 0===T?void 0:T.user})}),(0,C.jsx)("div",{className:d.Z.goback_container,id:"scrollView",children:(0,C.jsxs)("div",{className:d.Z.goback_container_text,onClick:function(){_(-1)},children:[(0,C.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,C.jsx)("h6",{className:d.Z.goback_container_text_go,children:f("go_back")})]})}),(0,C.jsx)("div",{className:d.Z.student_from_container,style:{marginBottom:"1rem"},children:(0,C.jsx)(B,{})})]})}},11130:function(t,e,n){n.d(e,{Z:function(){return g}});var o=n(29439),i=n(72791),l="DownloadToggle_confirmMark__YIaHn",a="DownloadToggle_marktabs__QrLsW",s="DownloadToggle_condirmtab__xDeBN",u="DownloadToggle_canceltab__uh-fj",d=n(5574),r=n(39230),c=n(98734),m=n(6245),v=n(36721),p=n(80184);var g=function(t){var e=t.open,n=t.hideModal,g=t.insId,x=t.setIsOrigin,h=(0,i.useState)(!1),f=(0,o.Z)(h,2),y=f[0],_=f[1],b=(0,m.rd)(),j=(0,o.Z)(b,1)[0],T=(0,r.$G)().t,N=(0,i.useState)({msg:"",run:!1}),S=(0,o.Z)(N,2),Z=S[0],C=S[1],L=function(t){_(!0),j({id:g,original:t}).then((function(){x("true"===t),_(!1),n(!1)})).catch((function(){_(!1),C({msg:"Something went wrong",run:!0})}))};return(0,p.jsx)(d.Z,{open:e,onClose:function(){return n(!1)},children:(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("h5",{children:T("download_only_original")}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("div",{className:s,onClick:function(){return L("true")},children:T("original")}),(0,p.jsx)("div",{className:u,onClick:function(){return L("false")},children:T("duplicate_")})]}),y&&(0,p.jsx)(c.Z,{}),Z.run&&(0,p.jsx)(v.SY,{msg:Z.msg,run:Z.run,setRun:function(){return C({msg:"",run:!1})},postiton:"bottom",type:"error"})]})})}}}]);
//# sourceMappingURL=3148.dedf1a79.chunk.js.map