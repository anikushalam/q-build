"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[98650],{81622:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(72791),a=i(38733),o=i(39230),s=i(93097),l=i(69721),d=i(1095),r=i(80184);const c=e=>{let{labelText:t,name:i,multiple:c,value:u,onChange:_,onClick:v,errorShow:m,acceptType:h,customStyleContainer:f}=e;const{t:g}=(0,o.$G)(),[p,x]=(0,n.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a.Z.join_form_container,style:{...f},children:[(0,r.jsxs)("label",{className:a.Z.join_form_label,children:[t,m&&(0,r.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,r.jsxs)("div",{className:a.Z.join_form_file_container,children:[(0,r.jsx)("label",{className:u?"".concat(a.Z.join_form_file_choose," ").concat(a.Z.join_form_active_background):a.Z.join_form_file_choose,htmlFor:i,children:g(""!==u?"file_chosen":"chose_file")}),(0,r.jsx)("label",{className:a.Z.join_form_file_choosen,onClick:()=>{if(null!==u&&void 0!==u&&u.originalName)if(null!==u&&void 0!==u&&u.isPdf){let e=null;e=null!==u&&void 0!==u&&u.isCdn?window.open("".concat(d.q2,"/").concat(null===u||void 0===u?void 0:u.key),"_blank","noopener,noreferrer"):window.open("".concat(l.zQ,"/").concat(null===u||void 0===u?void 0:u.key),"_blank","noopener,noreferrer"),e&&(e.opener=null)}else x(null===u||void 0===u?void 0:u.key);else x(u)},style:{color:"#002BBE",cursor:"pointer"},children:""!==u?null!==u&&void 0!==u&&u.originalName?null===u||void 0===u?void 0:u.originalName:"View":g("no_file_chosen")})]}),(0,r.jsx)("input",{type:"file",multiple:!!c,accept:h||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:i,id:i,style:{display:"none"},onChange:_})]}),p&&(0,r.jsx)(s.Z,{onClose:()=>{x("")},keyValue:p})]})}},72952:(e,t,i)=>{i.d(t,{Z:()=>s});i(72791);var n=i(39230),a=i(38733),o=i(80184);const s=e=>{var t;let{labelText:i,name:s,type:l,value:d,onChange:r,placeholder:c,errorShow:u,customStyleContainer:_,disabled:v}=e;const{t:m}=(0,n.$G)();return(0,o.jsxs)("div",{className:a.Z.join_form_container,style:{..._},children:[(0,o.jsxs)("label",{className:a.Z.join_form_label,htmlFor:s,children:[i," ",u&&(0,o.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",m("form_require_label")]})]}),(0,o.jsx)("textarea",{className:a.Z.join_form_text_area,type:l,value:d,onChange:r,name:s,placeholder:c,rows:d?(null===d||void 0===d||null===(t=d.split("\n"))||void 0===t?void 0:t.length)+3:1,disabled:v})]})}},93097:(e,t,i)=>{i.d(t,{Z:()=>l});i(72791);var n=i(12072),a=i(84489),o=i(69721),s=i(80184);const l=e=>{let{onClose:t,keyValue:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{onClose:t}),(0,s.jsx)(n.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,s.jsx)("img",{src:"".concat(o.yI,"/").concat(i),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},19206:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(72791),a=i(98094),o=i(36665),s=i(72952),l=i(98734),d=i(6245),r=i(33399),c=i(39230),u=i(39480),_=i(97655),v=i(37782),m=i(84959),h=i(74289),f=i(81622),g=i(5574),p=i(70966),x=i(16871),y=i(80184);const b=e=>{let{onClose:t,uniqueGr:b,instituteId:j,isViewBy:I,commingReason:w,certificateId:S,onRefetch:Z}=e;const{t:N}=(0,c.$G)(),k=(0,x.TH)(),[R,H]=(0,n.useState)(!1),[C,U]=(0,n.useState)(!1),[T,L]=(0,n.useState)(""),[B,D]=(0,n.useState)(""),[E,F]=(0,n.useState)(""),[A,G]=(0,n.useState)(!1),[O]=(0,d._)(),[q]=(0,m.FL)(),[P]=(0,h.H7)(),[Q]=(0,h.yW)(),[V,M]=(0,n.useState)(""),[W,$]=(0,n.useState)(!1),[z,J]=(0,n.useState)(!1),[K,Y]=(0,n.useState)(""),[X,ee]=(0,n.useState)(""),{oneInstituteProfile:te,oneInstituteProfileRefetch:ie}=(0,u.p0)({data:{id:j,type:"ID"},skip:!j});(0,n.useEffect)((()=>{j&&ie()}),[j,ie]),(0,n.useEffect)((()=>{"REQUEST_TAB"===I&&L(w||"")}),[w,I]);const ne=()=>{G((e=>!e))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.Z,{onClose:()=>{R||t()},children:[(0,y.jsx)("div",{className:r.Z.add_category_modal,style:{width:"30rem",minHeight:"10rem",height:"fit-content"},children:(0,y.jsxs)("section",{className:r.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,y.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:N("bonafide")}),(0,y.jsx)(a.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),(0,y.jsx)(s.Z,{labelText:N("enter_reason"),placeholder:N("enter_reason"),name:"reason",value:T,type:"text",onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&L(e.target.value)},errorShow:C}),(0,y.jsx)(s.Z,{labelText:N("bonafide_message_optional"),placeholder:N("bonafide_message_optional_placeholder"),name:"message",value:B,type:"text",onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&D(e.target.value)}}),(0,y.jsx)(_.Z,{labelText:N("competent_authority"),placeholder:N("competent_authority_lable"),name:"authority",value:E,type:"text",onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=75&&F(e.target.value)}}),(0,y.jsx)(f.Z,{labelText:N("attachment"),name:"attachment",value:X,onChange:e=>{var t;if(null!==(t=e.target.files)&&void 0!==t&&t.length){const t=URL.createObjectURL(e.target.files[0]);M(e.target.files[0]),Y(t),ee(t),$(!0)}},customStyleContainer:{width:"100%"}}),(0,y.jsxs)("section",{className:r.Z.letter_head_container,children:[A?(0,y.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",onClick:ne}):(0,y.jsx)("img",{src:"/images/box-icon.svg",alt:"icon",onClick:ne}),(0,y.jsx)("h6",{children:N("printing_on_letter_head")})]}),(0,y.jsx)("button",{onClick:()=>{b&&T&&j?(H((e=>!e)),O({gr:b,id:j,bonafideReason:{reason:T,student_bona_message:B}}).then((e=>{var n,a;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.student&&(e=>{const{institute:n,studentInfo:a}=(0,v.hR)(null===te||void 0===te?void 0:te.institute,e,{reason:T,message:B,authority:E,uniqueGr:b,letterHead:A}),o=new Worker(new URL(i.p+i.u(4268),i.b));o.postMessage({printCertificateType:"BONAFIDE",studentInfo:a,institute:n,otherImageUrl:X}),o.onmessage=i=>{if(i&&null!==e&&void 0!==e&&e._id){if("REQUEST_TAB"===I){const e=new FormData;e.append("file",i.data),q({fileUpload:e}).then((e=>{var t;P({cid:S,attach:null===(t=e.data)||void 0===t?void 0:t.imageKey,status:"Issued"}).then((()=>{Z(),H((e=>!e)),window.open(URL.createObjectURL(i.data),"_blank")})).catch({})})).catch({})}else{const e=new FormData;e.append("file",i.data),q({fileUpload:e}).then((e=>{var t,n,o;Q({gr:b,id:null===te||void 0===te||null===(t=te.institute)||void 0===t?void 0:t._id,bodyParameter:{certificate_type:"BONAFIED",certificate_attachment:null===(n=e.data)||void 0===n?void 0:n.imageKey,is_dublicate:null===a||void 0===a?void 0:a.isOriginal,student_name:null===a||void 0===a?void 0:a.name,staffId:null===(o=k.state)||void 0===o?void 0:o.staffId}}).then((()=>{window.open(URL.createObjectURL(i.data),"_blank"),H((e=>!e))})).catch({})})).catch({})}t()}}})(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.student)})).catch({})):T||U(!0)},className:r.Z.fee_middle_confirm_button,style:{marginTop:"4rem"},children:N("confirm")})]})}),R&&(0,y.jsx)(l.Z,{})]}),(0,y.jsx)(g.Z,{open:W,children:(0,y.jsx)(p.Z,{setPhotoURL:ee,photoURL:X,setFile:M,setOpenCrop:$,setUpload:J,setProfilePhoto:Y,first:16,second:9})})]})}},13827:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(72791),a=i(15214),o=i(39230),s=i(72426),l=i.n(s),d=i(69721),r=i(19206),c=i(16871),u=i(98734),_=i(6245),v=i(80184);const m=e=>{var t,i,s,m,h,f,g,p,x,y;let{certificate:b,isViewBy:j,instituteId:I,onRefetch:w}=e;const{t:S}=(0,o.$G)(),[Z,N]=(0,n.useState)(!1),k=(0,c.s0)(),R=(0,c.UO)(),[H,C]=(0,n.useState)(!1),[U]=(0,_.vB)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:a.Z.hostel_warden_card,style:{paddingBlock:"1rem"},children:[(0,v.jsx)("img",{alt:"not found",src:"/images/member_tab/student/student-certificate-icon.svg",style:{borderRadius:"0"}}),(0,v.jsxs)("div",{className:a.Z.student_cerfificate_container,children:[(0,v.jsxs)("div",{className:a.Z.warden_card_text,children:[(0,v.jsxs)("h6",{children:[S("certificate_type")," "," : ",null!==(t=null===b||void 0===b?void 0:b.certificate_type)&&void 0!==t?t:""]}),(0,v.jsxs)("p",{children:[S("reason")," "," : "," ",null!==(i=null===b||void 0===b?void 0:b.query_content)&&void 0!==i?i:""]}),"Bonafide"===(null===b||void 0===b?void 0:b.certificate_type)?null:(0,v.jsxs)("p",{children:[S("certificate_copy")," "," : ",null!==b&&void 0!==b&&b.is_original?S("original_copy"):S("dublicate_copy")]}),(0,v.jsxs)("p",{children:[S("raised_on")," "," : ",l()(null===b||void 0===b?void 0:b.created_at).format("DD-MM-yyyy"),", ",l()(null===b||void 0===b?void 0:b.created_at).format("LT")]}),null!==b&&void 0!==b&&null!==(s=b.fee_receipt)&&void 0!==s&&s.fee_payment_mode?(0,v.jsxs)("p",{children:[S("invoice_no")," "," : ",null!==(m=null===b||void 0===b||null===(h=b.fee_receipt)||void 0===h?void 0:h.invoice_count)&&void 0!==m?m:"N/A",", ",S("payment_mode")," "," : ",null!==(f=null===b||void 0===b||null===(g=b.fee_receipt)||void 0===g?void 0:g.fee_payment_mode)&&void 0!==f?f:"N/A"]}):null]}),"ISSUED"===j?(0,v.jsx)("div",{className:a.Z.student_issued_btn,onClick:()=>{var e,t;if("ISSUED"===j)if("Leaving"===(null===b||void 0===b?void 0:b.certificate_type))N((e=>!e)),U({id:I,gr:null===b||void 0===b||null===(e=b.student)||void 0===e?void 0:e.studentGRNO,leavingFeedback:{number:null===b||void 0===b||null===(t=b.student)||void 0===t?void 0:t.studentGRNO,studentCertificateNo:"",leaving_date:"",bookNo:"",studentUidaiNumber:"",studentPreviousSchool:"",studentLeavingBehaviour:"",studentLeavingStudy:"",studentLeavingReason:"",studentRemark:"",instituteJoinDate:"",instituteLeavingDate:"",leaving_degree:"",leaving_since_date:"",leaving_course_duration:"",elective_subject_one:"",elective_subject_second:"",leaving_project_work:"",leaving_guide_name:""}}).then((e=>{N((e=>!e)),k("/q/".concat(R.username,"/student/certificate/form"),{state:{student:e.data.student,download:e.data.download,instituteId:I,is_leaving:"leaving",isViewBy:"REQUEST_TAB",certificateId:null===b||void 0===b?void 0:b._id}})})).catch({});else if("Transfer"===(null===b||void 0===b?void 0:b.certificate_type)){var i,n;N((e=>!e)),U({id:I,gr:null===b||void 0===b||null===(i=b.student)||void 0===i?void 0:i.studentGRNO,leavingFeedback:{number:null===b||void 0===b||null===(n=b.student)||void 0===n?void 0:n.studentGRNO,studentCertificateNo:"",leaving_date:"",bookNo:"",studentUidaiNumber:"",studentPreviousSchool:"",studentLeavingBehaviour:"",studentLeavingStudy:"",studentLeavingReason:"",studentRemark:"",instituteJoinDate:"",instituteLeavingDate:"",leaving_degree:"",leaving_since_date:"",leaving_course_duration:"",elective_subject_one:"",elective_subject_second:"",leaving_project_work:"",leaving_guide_name:""}}).then((e=>{N((e=>!e)),k("/q/".concat(R.username,"/student/certificate/form"),{state:{student:e.data.student,download:e.data.download,instituteId:I,is_leaving:"transfer",isViewBy:"REQUEST_TAB",certificateId:null===b||void 0===b?void 0:b._id}})})).catch({})}else"Migration"===(null===b||void 0===b?void 0:b.certificate_type)||C(!0)},children:S("issue_certificate")}):(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:[(0,v.jsxs)("div",{className:a.Z.warden_card_text,style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:["ALREADY_ISSUED"===j?null:(0,v.jsxs)("p",{children:[S("status")," "," : ",null!==(p=null===b||void 0===b?void 0:b.certificate_status)&&void 0!==p?p:""]}),null!==b&&void 0!==b&&b.certificate_issued_date?(0,v.jsxs)("p",{children:[S("issued_on")," "," : ",l()(null===b||void 0===b?void 0:b.certificate_issued_date).format("DD-MM-yyyy"),", ",l()(null===b||void 0===b?void 0:b.certificate_issued_date).format("LT")]}):null]}),(null===b||void 0===b?void 0:b.certificate_attach)&&(0,v.jsx)("a",{href:"".concat(d.r3,"/").concat(null===b||void 0===b?void 0:b.certificate_attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,v.jsx)("img",{src:"/images/member_tab/student/student-certificate-download-icon.svg",alt:"receipt icon",style:{height:"1.5rem"}})})]})]})]}),H&&(0,v.jsx)(r.Z,{onClose:()=>C(!1),instituteId:I,isViewBy:"REQUEST_TAB",commingReason:null===b||void 0===b?void 0:b.query_content,certificateId:null===b||void 0===b?void 0:b._id,onRefetch:w,uniqueGr:null!==(x=null===b||void 0===b||null===(y=b.student)||void 0===y?void 0:y.studentGRNO)&&void 0!==x?x:""}),Z&&(0,v.jsx)(u.Z,{})]})}},2651:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(15783),a=i(80184);const o=e=>{let{title:t,subtitle:i,customStyleContainer:o,costomTextTitleStyle:s,costomTextSubtitleStyle:l}=e;return(0,a.jsxs)("div",{className:n.Z.empty_container,style:o,children:[t&&(0,a.jsx)("h6",{style:s,children:t}),i&&(0,a.jsx)("p",{style:l,children:i})]})}},15214:(e,t,i)=>{i.d(t,{Z:()=>n});const n={navbarr:"InstituteHostel_navbarr__wZjxN",mainbody:"InstituteHostel_mainbody__bd1xS",sidebar:"InstituteHostel_sidebar__4a950",rightbody:"InstituteHostel_rightbody__uUUef",admission_tab_tabs:"InstituteHostel_admission_tab_tabs__Uu9aY",item:"InstituteHostel_item__9ZoQd",itemIcon:"InstituteHostel_itemIcon__NShBD",funds2:"InstituteHostel_funds2__BHTCi",fundscontent:"InstituteHostel_fundscontent__HeoyA",sidebarbottomitem:"InstituteHostel_sidebarbottomitem__+Xvnw",namee:"InstituteHostel_namee__Y5L8H",desig:"InstituteHostel_desig__gHfIt",balanceItem:"InstituteHostel_balanceItem__W2AJ1",fundbtn:"InstituteHostel_fundbtn__h4c6p",institute_hostel_container:"InstituteHostel_institute_hostel_container__QKng2",institute_hostel_container_border:"InstituteHostel_institute_hostel_container_border__XBL5F",institute_hostel_title:"InstituteHostel_institute_hostel_title__U31Id",hostel_warden_card:"InstituteHostel_hostel_warden_card__vs093",warden_card_text:"InstituteHostel_warden_card_text__kFeau",with_search:"InstituteHostel_with_search__shUwR",search_container:"InstituteHostel_search_container__s6aFf",search_container_input:"InstituteHostel_search_container_input__Z7rCU",searchIcon:"InstituteHostel_searchIcon__eabuR",student_cerfificate_container:"InstituteHostel_student_cerfificate_container__HGcvy",student_issued_btn:"InstituteHostel_student_issued_btn__hrgB6"}}}]);
//# sourceMappingURL=98650.1f38a14e.chunk.js.map