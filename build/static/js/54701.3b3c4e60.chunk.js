"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[54701],{54701:(e,s,n)=>{n.r(s),n.d(s,{default:()=>N});var i=n(72791),t=n(36588),l=n(39230),a=n(23441),d=n(65543),m=n(30510),o=n(34219),g=n(11105),c=n(80184);const r=e=>{let{text:s,background:n,progress:i,number:l}=e;return(0,c.jsxs)("div",{className:t.Z.rangeRow,children:[(0,c.jsx)("div",{className:t.Z.rangeColumn1,children:(0,c.jsx)("div",{className:"".concat(t.Z.rangecircle),style:{backgroundColor:n}})}),(0,c.jsx)("div",{className:t.Z.rangeColumn2,children:(0,c.jsx)("h6",{children:s})}),(0,c.jsx)("div",{className:t.Z.rangeColumn3,children:(0,c.jsx)("div",{className:t.Z.progressdiv,children:(0,c.jsx)("div",{className:t.Z.progress,style:{width:0===i?"0.5%":"".concat(i,"%"),backgroundColor:n}})})}),(0,c.jsx)("div",{className:t.Z.rangeColumn4,children:(0,c.jsx)("h6",{children:l})})]})};var u=n(72426),v=n.n(u);const _=e=>{var s,n,i;let{assignment:a}=e;const{t:d}=(0,l.$G)();return(0,c.jsxs)("div",{className:t.Z.assignmentCard,children:[(0,c.jsx)("h6",{className:t.Z.subject,children:null!==(s=null===a||void 0===a||null===(n=a.subject)||void 0===n?void 0:n.subjectName)&&void 0!==s?s:""}),(0,c.jsx)("p",{className:t.Z.title,children:null!==(i=null===a||void 0===a?void 0:a.assignmentName)&&void 0!==i?i:""}),(0,c.jsxs)("p",{className:t.Z.duetime,children:[d("due_on")," ",v()(null===a||void 0===a?void 0:a.dueDate).format("Do MMM YY")]}),(0,c.jsx)("div",{className:"".concat(t.Z.rangecirclestatus),style:{backgroundColor:null!==a&&void 0!==a&&a.assignmentSubmit&&null!==a&&void 0!==a&&a.assignmentSubmitRequest?" #06BB06":null!==a&&void 0!==a&&a.assignmentSubmit||null===a||void 0===a||!a.assignmentSubmitRequest?"#FFC700":"#001A72"}})]})};var p=n(6642),h=n(43504),x=n(16871),j=n(98734),f=n(10307),A=n(69721);const y=e=>{var s,n,a,d,o,g,r,u,_,p,h,y,b,N,Z,D,S,C,k,R,w;let{onRefetch:F}=e;const{t:T}=(0,l.$G)(),B=(0,x.TH)(),I=(0,x.s0)(),[L,q]=(0,i.useState)(!1),[E,O]=(0,i.useState)({studentDescritpion:"",testSet:"",file:[]}),[K,Y]=(0,i.useState)([]),[M,G]=(0,i.useState)([]),[P]=(0,m.$R)(),{getOneAssignmentDetailByStudent:H,getOneAssignmentDetailByStudentRefetch:J}=(0,m.dG)({aid:null===(s=B.state)||void 0===s?void 0:s.aid,skip:!(null!==(n=B.state)&&void 0!==n&&n.aid)});(0,i.useEffect)((()=>{var e;null!==(e=B.state)&&void 0!==e&&e.aid&&J()}),[null===(a=B.state)||void 0===a?void 0:a.aid,J]);const U=document.querySelector("textarea");null===U||void 0===U||U.addEventListener("keyup",(e=>{U.style.height="auto";let s=e.target.scrollHeight;U.style.height="".concat(s,"px")})),(0,i.useEffect)((()=>{if(E.file){const e=[],s=[];for(let n in E.file)for(let i in E.file[n])"type"===i&&(E.file[n][i].includes("image/")?e.push(URL.createObjectURL(E.file[n])):s.push({name:E.file[n].name}));Y(e),G(s)}}),[E.file]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:t.Z.assignmentDetailTop,children:[(0,c.jsx)("img",{src:"/images/members/arrow-left.svg",alt:"",onClick:()=>I(-1)}),(0,c.jsx)("h6",{children:null===H||void 0===H||null===(d=H.assignment)||void 0===d||null===(o=d.subject)||void 0===o?void 0:o.subjectName}),(0,c.jsx)("img",{className:t.Z.menu,src:"/images/menu-dots-dark-icon.svg",alt:""})]}),(0,c.jsxs)("div",{className:t.Z.assignmentDetailBody,children:[(0,c.jsx)("p",{children:"Assignement Name"}),(0,c.jsx)("h6",{children:null===H||void 0===H||null===(g=H.assignment)||void 0===g?void 0:g.assignmentName}),(0,c.jsx)("p",{children:"Assignement Due Date"}),(0,c.jsx)("h6",{children:v()(null===H||void 0===H||null===(r=H.assignment)||void 0===r?void 0:r.dueDate).format("DD-MM-yyyy")}),(0,c.jsx)("p",{children:"Description"}),(0,c.jsx)("h6",{style:{whiteSpace:"break-spaces"},children:null===H||void 0===H||null===(u=H.assignment)||void 0===u?void 0:u.descritpion}),(null===H||void 0===H||null===(_=H.assignment)||void 0===_||null===(p=_.files)||void 0===p?void 0:p.length)>0?(0,c.jsxs)("div",{className:t.Z.files,children:[(0,c.jsx)("p",{className:t.Z.typeFile,children:T("file_image")}),null===H||void 0===H||null===(h=H.assignment)||void 0===h||null===(y=h.files)||void 0===y?void 0:y.map(((e,s)=>"application/octet-stream"===(null===e||void 0===e?void 0:e.documentType)||"image/jpeg"===(null===e||void 0===e?void 0:e.documentType)||"image/png"===(null===e||void 0===e?void 0:e.documentType)||(0,f.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,c.jsx)("a",{href:"".concat(A.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,c.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]},s)}):(0,c.jsx)("a",{href:"".concat(A.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,c.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]},s)})))]}):"",(0,c.jsx)("h6",{className:t.Z.des,children:T("description")}),null!==H&&void 0!==H&&null!==(b=H.assignment)&&void 0!==b&&b.assignmentSubmitRequest?(0,c.jsx)("p",{className:t.Z.studentDescritpion,style:{marginBottom:"2vw",whiteSpace:"break-spaces"},children:null===H||void 0===H||null===(N=H.assignment)||void 0===N?void 0:N.studentDescritpion}):(0,c.jsx)("textarea",{className:t.Z.assignment_text,type:"text",name:"description",placeholder:"Type Answer",value:E.studentDescritpion,onChange:e=>O((s=>({...s,studentDescritpion:e.target.value})))}),null!==H&&void 0!==H&&null!==(Z=H.assignment)&&void 0!==Z&&Z.assignmentSubmitRequest?(null===H||void 0===H||null===(D=H.assignment)||void 0===D||null===(S=D.studentFiles)||void 0===S?void 0:S.length)>0?(0,c.jsxs)("div",{className:t.Z.files,children:[(0,c.jsx)("p",{className:t.Z.typeFile,children:T("file_image")}),null===H||void 0===H||null===(C=H.assignment)||void 0===C||null===(k=C.studentFiles)||void 0===k?void 0:k.map((e=>"application/octet-stream"===(null===e||void 0===e?void 0:e.documentType)||"image/jpeg"===(null===e||void 0===e?void 0:e.documentType)||"image/png"===(null===e||void 0===e?void 0:e.documentType)||(0,f.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,c.jsx)("a",{href:"".concat(A.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,c.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]})}):(0,c.jsx)("a",{href:"".concat(A.r3,"/").concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",children:(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,c.jsx)("p",{children:null===e||void 0===e?void 0:e.documentName})]})})))]}):"":(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"img",style:{cursor:"pointer"},children:(0,c.jsxs)("div",{className:t.Z.addImage,children:[(0,c.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,c.jsx)("p",{className:t.Z.addImgFile,children:"Add Image/File"})]})}),(0,c.jsx)("input",{className:t.Z.upload,id:"img",multiple:!0,name:"file",onChange:e=>{var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&O((s=>({...s,file:[...s.file,...e.target.files]})))},type:"file",accept:"image/gif, image/jpeg, image/png,text/plain, application/pdf"})]}),((null===K||void 0===K?void 0:K.length)>0||(null===M||void 0===M?void 0:M.length)>0)&&(0,c.jsxs)("div",{className:t.Z.files,children:[(0,c.jsx)("p",{className:t.Z.typeFile,children:T("file_image")}),null===K||void 0===K?void 0:K.map((e=>(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/members/img-icon.svg",alt:""}),(0,c.jsx)("p",{children:e})]},e))),null===M||void 0===M?void 0:M.map((e=>(0,c.jsxs)("div",{className:t.Z.img,children:[(0,c.jsx)("img",{src:"/images/admin/pdf-icon.svg",alt:""}),(0,c.jsx)("p",{children:null===e||void 0===e?void 0:e.name})]},null===e||void 0===e?void 0:e.name)))]}),null!==H&&void 0!==H&&null!==(R=H.assignment)&&void 0!==R&&R.assignmentSubmitRequest?"":!(null!==H&&void 0!==H&&null!==(w=H.assignment)&&void 0!==w&&w.assignmentSubmitRequest)&&(0,c.jsx)("div",{className:"".concat(t.Z.btn," ").concat(t.Z.btnActive),onClick:()=>{var e;if(E.studentDescritpion||null!==(e=E.file)&&void 0!==e&&e.length){var s;q((e=>!e));const e=new Date,n=new FormData;n.append("studentDescritpion",E.studentDescritpion),n.append("submmittedDate",e),n.append("assignmentSubmitRequest",!0),n.append("testSet","");for(let s in E.file)E.file[s].size&&n.append("file",E.file[s]);P({aid:null===(s=B.state)||void 0===s?void 0:s.aid,assignmentData:n}).then((()=>{J(),F(),O({studentDescritpion:"",testSet:"",file:[]}),Y([]),G([]),q((e=>!e))})).catch({})}},children:T("submit")}),L&&(0,c.jsx)(j.Z,{})]})]})},b=(e,s)=>Math.ceil(e/s*100),N=e=>{var s;let{sid:n,carryParentState:u}=e;const{t:v}=(0,l.$G)(),[x]=(0,h.lr)(),[j,f]=(0,i.useState)(!0),[A,N]=(0,i.useState)(1),[Z,D]=(0,a.YD)(),[S,C]=(0,i.useState)([]),[k,R]=(0,i.useState)(!0),{scrollToTop:w}=(0,d.u)(),{getAssignmentCountByStudent:F,getAssignmentCountByStudentRefetch:T}=(0,m.Pu)({sid:n,skip:!n}),{getAssignmentByStudent:B,getAssignmentByStudentRefetch:I}=(0,m.bc)({data:{sid:n,page:A,limit:10},skip:!n});(0,i.useEffect)((()=>{n&&T()}),[n,T]),(0,i.useEffect)((()=>{n&&(R(!0),I())}),[n,A,I]),(0,i.useEffect)((()=>{w()}),[w]),(0,i.useEffect)((()=>{D&&j&&N((e=>e+1))}),[D,j]),(0,i.useEffect)((()=>{var e,s;null!==B&&void 0!==B&&B.assignments?(C(1===A?null===B||void 0===B?void 0:B.assignments:e=>[...new Set([...e,...null===B||void 0===B?void 0:B.assignments].map(JSON.stringify))].map(JSON.parse)),R(!1)):0===(null===B||void 0===B||null===(e=B.assignments)||void 0===e?void 0:e.length)&&R(!1),10===(null===B||void 0===B||null===(s=B.assignments)||void 0===s?void 0:s.length)?f(!0):f(!1)}),[null===B||void 0===B?void 0:B.assignments]);return(0,c.jsx)("div",{className:t.Z.student_assignment,children:x.get("type")?(0,c.jsx)(y,{onRefetch:()=>{N(1),I(),T()}}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:t.Z.rangeCard,children:[(0,c.jsx)(r,{text:v("total"),background:"#a0a0a0",progress:b(null===F||void 0===F?void 0:F.totalAssignment,null===F||void 0===F?void 0:F.totalAssignment),number:null===F||void 0===F?void 0:F.totalAssignment}),(0,c.jsx)(r,{text:v("submitted"),background:"#001A72",progress:b(null===F||void 0===F?void 0:F.submittedAssignment,null===F||void 0===F?void 0:F.totalAssignment),number:null===F||void 0===F?void 0:F.submittedAssignment}),(0,c.jsx)(r,{text:v("incomplete"),background:"#FFC700",progress:b(null===F||void 0===F?void 0:F.incompletedAssignment,null===F||void 0===F?void 0:F.totalAssignment),number:null===F||void 0===F?void 0:F.incompletedAssignment}),(0,c.jsx)(r,{text:v("completed"),background:"#06BB06",progress:b(null===F||void 0===F?void 0:F.completedAssignment,null===F||void 0===F?void 0:F.totalAssignment),number:null===F||void 0===F?void 0:F.completedAssignment})]}),(0,c.jsx)("div",{className:t.Z.assignmentCards,style:{width:"100%"},children:S.map(((e,s)=>(null===S||void 0===S?void 0:S.length)===s+1?(0,c.jsx)(p.Z,{carryParentState:{...u,aid:null===e||void 0===e?void 0:e._id},activeTab:"assignment&type=detail",customStyleLink:{width:"48%"},children:(0,c.jsx)("div",{className:t.Z.itemref,ref:Z,children:(0,c.jsx)(_,{assignment:e})})},null===e||void 0===e?void 0:e._id):(0,c.jsx)(p.Z,{carryParentState:{...u,aid:null===e||void 0===e?void 0:e._id},activeTab:"assignment&type=detail",customStyleLink:{width:"48%"},children:(0,c.jsx)("div",{className:t.Z.itemref,children:(0,c.jsx)(_,{assignment:e})})},null===e||void 0===e?void 0:e._id)))}),!k&&!(null!==B&&void 0!==B&&null!==(s=B.assignments)&&void 0!==s&&s.length)&&(0,c.jsx)(o.Z,{customStyleContainer:{marginTop:"9rem"},title:"No assignments found"}),k&&(0,c.jsx)(g.Z,{status:"white"})]})})}},36588:(e,s,n)=>{n.d(s,{Z:()=>i});const i={student_assignment:"Assignment_student_assignment__yFBmo",assignment:"Assignment_assignment__aG6Aw",assignmentTop:"Assignment_assignmentTop__ogNmv",assignmentItem:"Assignment_assignmentItem__ew4Ai",left:"Assignment_left__G2IMZ",text:"Assignment_text__0SD-i",right:"Assignment_right__pik8u",assignmentList:"Assignment_assignmentList__sne4r",assignmentDetail:"Assignment_assignmentDetail__OrOM+",assignmentDetailTop:"Assignment_assignmentDetailTop__MwD2z",menu:"Assignment_menu__0x6Ea",assignmentDetailBody:"Assignment_assignmentDetailBody__HLyi9",addImgFile:"Assignment_addImgFile__ksLil",textt:"Assignment_textt__KZDHd",widthh:"Assignment_widthh__HNgng",img:"Assignment_img__yY5B3",des:"Assignment_des__PbADz",typeFile:"Assignment_typeFile__9JiX+",btn:"Assignment_btn__YRD6-",btnActive:"Assignment_btnActive__jCIoA",addImage:"Assignment_addImage__ZccGO",studentDescritpion:"Assignment_studentDescritpion__POWXR",files:"Assignment_files__l24RC",upload:"Assignment_upload__j6jO6",loader:"Assignment_loader__+KEsk",noData:"Assignment_noData__RtJ3I",studentassignment:"Assignment_studentassignment__IPx9e",rangeCard:"Assignment_rangeCard__yeCTY",rangeRow:"Assignment_rangeRow__LL3H6",rangeColumn1:"Assignment_rangeColumn1__NGVKN",rangeColumn2:"Assignment_rangeColumn2__dli8m",rangeColumn3:"Assignment_rangeColumn3__KE+CF",rangeColumn4:"Assignment_rangeColumn4__t9xWg",rangecircle:"Assignment_rangecircle__zj37Y",grey:"Assignment_grey__UabWR",progressdiv:"Assignment_progressdiv__kWrLy",progress:"Assignment_progress__69DN2",assignmentCards:"Assignment_assignmentCards__RUHmJ",assignmentCard:"Assignment_assignmentCard__BBXSt",itemref:"Assignment_itemref__lafVY",subject:"Assignment_subject__frZop",title:"Assignment_title__Pd1tJ",duetime:"Assignment_duetime__nUppR",rangecirclestatus:"Assignment_rangecirclestatus__Von6a",pollTextarea:"Assignment_pollTextarea__gaqA-",assignment_text:"Assignment_assignment_text__Oc9hf"}}}]);
//# sourceMappingURL=54701.3b3c4e60.chunk.js.map