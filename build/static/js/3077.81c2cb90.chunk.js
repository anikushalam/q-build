"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3077],{13077:function(e,n,i){i.r(n),i.d(n,{default:function(){return se}});var s=i(1413),t=i(93433),l=i(29439),a=i(72791),d="Assignment_student_assignment__yFBmo",o="Assignment_assignmentDetailTop__MwD2z",c="Assignment_menu__0x6Ea",m="Assignment_assignmentDetailBody__HLyi9",u="Assignment_addImgFile__ksLil",r="Assignment_img__yY5B3",v="Assignment_des__PbADz",g="Assignment_typeFile__9JiX+",p="Assignment_btn__YRD6-",h="Assignment_btnActive__jCIoA",_="Assignment_addImage__ZccGO",f="Assignment_studentDescritpion__POWXR",j="Assignment_files__l24RC",x="Assignment_upload__j6jO6",A="Assignment_rangeCard__yeCTY",N="Assignment_rangeRow__LL3H6",y="Assignment_rangeColumn1__NGVKN",b="Assignment_rangeColumn2__dli8m",S="Assignment_rangeColumn3__KE+CF",k="Assignment_rangeColumn4__t9xWg",Z="Assignment_rangecircle__zj37Y",D="Assignment_progressdiv__kWrLy",C="Assignment_progress__69DN2",R="Assignment_assignmentCards__RUHmJ",w="Assignment_assignmentCard__BBXSt",B="Assignment_itemref__lafVY",F="Assignment_subject__frZop",T="Assignment_title__Pd1tJ",q="Assignment_duetime__nUppR",E="Assignment_rangecirclestatus__Von6a",L="Assignment_assignment_text__Oc9hf",Y=i(39230),O=i(23441),K=i(65543),M=i(30510),P=i(34219),G=i(11105),H=i(80184),J=function(e){var n=e.text,i=e.background,s=e.progress,t=e.number;return(0,H.jsxs)("div",{className:N,children:[(0,H.jsx)("div",{className:y,children:(0,H.jsx)("div",{className:"".concat(Z),style:{backgroundColor:i}})}),(0,H.jsx)("div",{className:b,children:(0,H.jsx)("h6",{children:n})}),(0,H.jsx)("div",{className:S,children:(0,H.jsx)("div",{className:D,children:(0,H.jsx)("div",{className:C,style:{width:0===s?"0.5%":"".concat(s,"%"),backgroundColor:i}})})}),(0,H.jsx)("div",{className:k,children:(0,H.jsx)("h6",{children:t})})]})},z=i(72426),I=i.n(z),U=function(e){var n,i,s,t=e.assignment,l=(0,Y.$G)().t;return(0,H.jsxs)("div",{className:w,children:[(0,H.jsx)("h6",{className:F,children:null!==(n=null===t||void 0===t||null===(i=t.subject)||void 0===i?void 0:i.subjectName)&&void 0!==n?n:""}),(0,H.jsx)("p",{className:T,children:null!==(s=null===t||void 0===t?void 0:t.assignmentName)&&void 0!==s?s:""}),(0,H.jsxs)("p",{className:q,children:[l("due_on")," ",I()(null===t||void 0===t?void 0:t.dueDate).format("Do MMM YY")]}),(0,H.jsx)("div",{className:"".concat(E),style:{backgroundColor:null!==t&&void 0!==t&&t.assignmentSubmit&&null!==t&&void 0!==t&&t.assignmentSubmitRequest?" #06BB06":null!==t&&void 0!==t&&t.assignmentSubmit||null===t||void 0===t||!t.assignmentSubmitRequest?"#FFC700":"#001A72"}})]})},$=i(6642),V=i(43504),W=i(16871),X=i(98734),Q=i(10307),ee=i(69721),ne=function(e){var n,i,d,A,N,y,b,S,k,Z,D,C,R,w,B,F,T,q,E,O,K,P=e.onRefetch,G=(0,Y.$G)().t,J=(0,W.TH)(),z=(0,W.s0)(),U=(0,a.useState)(!1),$=(0,l.Z)(U,2),V=$[0],ne=$[1],ie=(0,a.useState)({studentDescritpion:"",testSet:"",file:[]}),se=(0,l.Z)(ie,2),te=se[0],le=se[1],ae=(0,a.useState)([]),de=(0,l.Z)(ae,2),oe=de[0],ce=de[1],me=(0,a.useState)([]),ue=(0,l.Z)(me,2),re=ue[0],ve=ue[1],ge=(0,M.$R)(),pe=(0,l.Z)(ge,1)[0],he=(0,M.dG)({aid:null===(n=J.state)||void 0===n?void 0:n.aid,skip:!(null!==(i=J.state)&&void 0!==i&&i.aid)}),_e=he.getOneAssignmentDetailByStudent,fe=he.getOneAssignmentDetailByStudentRefetch;(0,a.useEffect)((function(){var e;null!==(e=J.state)&&void 0!==e&&e.aid&&fe()}),[null===(d=J.state)||void 0===d?void 0:d.aid,fe]);var je=document.querySelector("textarea");null===je||void 0===je||je.addEventListener("keyup",(function(e){je.style.height="auto";var n=e.target.scrollHeight;je.style.height="".concat(n,"px")})),(0,a.useEffect)((function(){if(te.file){var e=[],n=[];for(var i in te.file)for(var s in te.file[i])"type"===s&&(te.file[i][s].includes("image/")?e.push(URL.createObjectURL(te.file[i])):n.push({name:te.file[i].name}));ce(e),ve(n)}}),[te.file]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{className:o,children:[(0,H.jsx)("img",{src:"/images/members/arrow-left.svg",alt:"",onClick:function(){return z(-1)}}),(0,H.jsx)("h6",{children:null===_e||void 0===_e||null===(A=_e.assignment)||void 0===A||null===(N=A.subject)||void 0===N?void 0:N.subjectName}),(0,H.jsx)("img",{className:c,src:"/images/menu-dots-dark-icon.svg",alt:""})]}),(0,H.jsxs)("div",{className:m,children:[(0,H.jsx)("p",{children:"Assignement Name"}),(0,H.jsx)("h6",{children:null===_e||void 0===_e||null===(y=_e.assignment)||void 0===y?void 0:y.assignmentName}),(0,H.jsx)("p",{children:"Assignement Due Date"}),(0,H.jsx)("h6",{children:I()(null===_e||void 0===_e||null===(b=_e.assignment)||void 0===b?void 0:b.dueDate).format("DD-MM-yyyy")}),(0,H.jsx)("p",{children:"Description"}),(0,H.jsx)("h6",{style:{whiteSpace:"break-spaces"},children:null===_e||void 0===_e||null===(S=_e.assignment)||void 0===S?void 0:S.descritpion}),(null===_e||void 0===_e||null===(k=_e.assignment)||void 0===k||null===(Z=k.files)||void 0===Z?void 0:Z.length)>0?(0,H.jsxs)("div",{className:j,children:[(0,H.jsx)("p",{className:g,children:G("file_image")}),null===_e||void 0===_e||null===(D=_e.assignment)||void 0===D||null===(C=D.files)||void 0===C?void 0:C.map((function(e,n){return"application/octet-stream"===(null===e||void 0===e?void 0:e.documentType)||"image/jpeg"===(null===e||void 0===e?void 0:e.documentType)||"image/png"===(null===e||void 0===e?void 0:e.documentType)||(0,Q.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,H.jsx)("a",{href:"".concat(ee.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,H.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]},n)}):(0,H.jsx)("a",{href:"".concat(ee.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,H.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]},n)})}))]}):"",(0,H.jsx)("h6",{className:v,children:G("description")}),null!==_e&&void 0!==_e&&null!==(R=_e.assignment)&&void 0!==R&&R.assignmentSubmitRequest?(0,H.jsx)("p",{className:f,style:{marginBottom:"2vw",whiteSpace:"break-spaces"},children:null===_e||void 0===_e||null===(w=_e.assignment)||void 0===w?void 0:w.studentDescritpion}):(0,H.jsx)("textarea",{className:L,type:"text",name:"description",placeholder:"Type Answer",value:te.studentDescritpion,onChange:function(e){return le((function(n){return(0,s.Z)((0,s.Z)({},n),{},{studentDescritpion:e.target.value})}))}}),null!==_e&&void 0!==_e&&null!==(B=_e.assignment)&&void 0!==B&&B.assignmentSubmitRequest?(null===_e||void 0===_e||null===(F=_e.assignment)||void 0===F||null===(T=F.studentFiles)||void 0===T?void 0:T.length)>0?(0,H.jsxs)("div",{className:j,children:[(0,H.jsx)("p",{className:g,children:G("file_image")}),null===_e||void 0===_e||null===(q=_e.assignment)||void 0===q||null===(E=q.studentFiles)||void 0===E?void 0:E.map((function(e){return"application/octet-stream"===(null===e||void 0===e?void 0:e.documentType)||"image/jpeg"===(null===e||void 0===e?void 0:e.documentType)||"image/png"===(null===e||void 0===e?void 0:e.documentType)||(0,Q.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,H.jsx)("a",{href:"".concat(ee.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,H.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]})}):(0,H.jsx)("a",{href:"".concat(ee.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,H.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]})})}))]}):"":(0,H.jsxs)("div",{children:[(0,H.jsx)("label",{htmlFor:"img",style:{cursor:"pointer"},children:(0,H.jsxs)("div",{className:_,children:[(0,H.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,H.jsx)("p",{className:u,children:"Add Image/File"})]})}),(0,H.jsx)("input",{className:x,id:"img",multiple:!0,name:"file",onChange:function(e){var n;null!==(n=e.target.files)&&void 0!==n&&n.length&&le((function(n){return(0,s.Z)((0,s.Z)({},n),{},{file:[].concat((0,t.Z)(n.file),(0,t.Z)(e.target.files))})}))},type:"file",accept:"image/gif, image/jpeg, image/png,text/plain, application/pdf"})]}),((null===oe||void 0===oe?void 0:oe.length)>0||(null===re||void 0===re?void 0:re.length)>0)&&(0,H.jsxs)("div",{className:j,children:[(0,H.jsx)("p",{className:g,children:G("file_image")}),null===oe||void 0===oe?void 0:oe.map((function(e){return(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,H.jsx)("p",{children:e})]},e)})),null===re||void 0===re?void 0:re.map((function(e){return(0,H.jsxs)("div",{className:r,children:[(0,H.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,H.jsx)("p",{children:null===e||void 0===e?void 0:e.name})]},null===e||void 0===e?void 0:e.name)}))]}),null!==_e&&void 0!==_e&&null!==(O=_e.assignment)&&void 0!==O&&O.assignmentSubmitRequest?"":!(null!==_e&&void 0!==_e&&null!==(K=_e.assignment)&&void 0!==K&&K.assignmentSubmitRequest)&&(0,H.jsx)("div",{className:"".concat(p," ").concat(h),onClick:function(){var e;if(te.studentDescritpion||null!==(e=te.file)&&void 0!==e&&e.length){var n;ne((function(e){return!e}));var i=new Date,s=new FormData;for(var t in s.append("studentDescritpion",te.studentDescritpion),s.append("submmittedDate",i),s.append("assignmentSubmitRequest",!0),s.append("testSet",""),te.file)te.file[t].size&&s.append("file",te.file[t]);pe({aid:null===(n=J.state)||void 0===n?void 0:n.aid,assignmentData:s}).then((function(){fe(),P(),le({studentDescritpion:"",testSet:"",file:[]}),ce([]),ve([]),ne((function(e){return!e}))})).catch({})}},children:G("submit")}),V&&(0,H.jsx)(X.Z,{})]})]})},ie=function(e,n){return Math.ceil(e/n*100)},se=function(e){var n,i=e.sid,o=e.carryParentState,c=(0,Y.$G)().t,m=(0,V.lr)(),u=(0,l.Z)(m,1)[0],r=(0,a.useState)(!0),v=(0,l.Z)(r,2),g=v[0],p=v[1],h=(0,a.useState)(1),_=(0,l.Z)(h,2),f=_[0],j=_[1],x=(0,O.YD)(),N=(0,l.Z)(x,2),y=N[0],b=N[1],S=(0,a.useState)([]),k=(0,l.Z)(S,2),Z=k[0],D=k[1],C=(0,a.useState)(!0),w=(0,l.Z)(C,2),F=w[0],T=w[1],q=(0,K.u)().scrollToTop,E=(0,M.Pu)({sid:i,skip:!i}),L=E.getAssignmentCountByStudent,z=E.getAssignmentCountByStudentRefetch,I=(0,M.bc)({data:{sid:i,page:f,limit:10},skip:!i}),W=I.getAssignmentByStudent,X=I.getAssignmentByStudentRefetch;(0,a.useEffect)((function(){i&&z()}),[i,z]),(0,a.useEffect)((function(){i&&(T(!0),X())}),[i,f,X]),(0,a.useEffect)((function(){q()}),[q]),(0,a.useEffect)((function(){b&&g&&j((function(e){return e+1}))}),[b,g]),(0,a.useEffect)((function(){var e,n;null!==W&&void 0!==W&&W.assignments?(D(1===f?null===W||void 0===W?void 0:W.assignments:function(e){return(0,t.Z)(new Set([].concat((0,t.Z)(e),(0,t.Z)(null===W||void 0===W?void 0:W.assignments)).map(JSON.stringify))).map(JSON.parse)}),T(!1)):0===(null===W||void 0===W||null===(e=W.assignments)||void 0===e?void 0:e.length)&&T(!1),10===(null===W||void 0===W||null===(n=W.assignments)||void 0===n?void 0:n.length)?p(!0):p(!1)}),[null===W||void 0===W?void 0:W.assignments]);return(0,H.jsx)("div",{className:d,children:u.get("type")?(0,H.jsx)(ne,{onRefetch:function(){j(1),X(),z()}}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{className:A,children:[(0,H.jsx)(J,{text:c("total"),background:"#a0a0a0",progress:ie(null===L||void 0===L?void 0:L.totalAssignment,null===L||void 0===L?void 0:L.totalAssignment),number:null===L||void 0===L?void 0:L.totalAssignment}),(0,H.jsx)(J,{text:c("submitted"),background:"#001A72",progress:ie(null===L||void 0===L?void 0:L.submittedAssignment,null===L||void 0===L?void 0:L.totalAssignment),number:null===L||void 0===L?void 0:L.submittedAssignment}),(0,H.jsx)(J,{text:c("incomplete"),background:"#FFC700",progress:ie(null===L||void 0===L?void 0:L.incompletedAssignment,null===L||void 0===L?void 0:L.totalAssignment),number:null===L||void 0===L?void 0:L.incompletedAssignment}),(0,H.jsx)(J,{text:c("completed"),background:"#06BB06",progress:ie(null===L||void 0===L?void 0:L.completedAssignment,null===L||void 0===L?void 0:L.totalAssignment),number:null===L||void 0===L?void 0:L.completedAssignment})]}),(0,H.jsx)("div",{className:R,style:{width:"100%"},children:Z.map((function(e,n){return(null===Z||void 0===Z?void 0:Z.length)===n+1?(0,H.jsx)($.Z,{carryParentState:(0,s.Z)((0,s.Z)({},o),{},{aid:null===e||void 0===e?void 0:e._id}),activeTab:"assignment&type=detail",customStyleLink:{width:"48%"},children:(0,H.jsx)("div",{className:B,ref:y,children:(0,H.jsx)(U,{assignment:e})})},null===e||void 0===e?void 0:e._id):(0,H.jsx)($.Z,{carryParentState:(0,s.Z)((0,s.Z)({},o),{},{aid:null===e||void 0===e?void 0:e._id}),activeTab:"assignment&type=detail",customStyleLink:{width:"48%"},children:(0,H.jsx)("div",{className:B,children:(0,H.jsx)(U,{assignment:e})})},null===e||void 0===e?void 0:e._id)}))}),!F&&!(null!==W&&void 0!==W&&null!==(n=W.assignments)&&void 0!==n&&n.length)&&(0,H.jsx)(P.Z,{customStyleContainer:{marginTop:"9rem"},title:"No assignments found"}),F&&(0,H.jsx)(G.Z,{status:"white"})]})})}}}]);
//# sourceMappingURL=3077.81c2cb90.chunk.js.map