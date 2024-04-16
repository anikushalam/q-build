"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[89947],{35395:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(72791),a=n(98734),l=n(80184);const s=e=>{let{children:t}=e;return(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(a.Z,{}),children:t})}},37570:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(72791),a=n(36665),l=n(25313),s=n(98734),i=n(39230),_=n(98472),r=n(98094),d=n(33992),c=n(33710),m=n(72420),u=(n(59965),n(80184));const v=e=>{let{onClose:t,cid:n,className:v}=e;const{t:h}=(0,i.$G)(),[p,x]=(0,o.useState)(!1),[N,b]=(0,o.useState)(!1),[j,g]=(0,o.useState)(!1),[f,P]=(0,o.useState)([]),[Z,H]=(0,o.useState)(""),[L,S]=(0,o.useState)({startRange:"",endRange:""}),{daysInMonth:w,selectedDate:D,monthNames:E,getNextMonth:k,getPrevMonth:R}=(0,c.Z)(),[O]=(0,d.R0)();(0,o.useEffect)((()=>{if(j){document.getElementById("attendance_download_file").click(),g(!1),P([]),x((e=>!e))}}),[j]);const C=e=>{H(e)};return(0,u.jsxs)(a.Z,{onClose:t,children:[(0,u.jsxs)("div",{className:l.Z.filter_container,style:{minHeight:"15rem",width:"40rem"},children:[(0,u.jsx)("h6",{className:l.Z.filter_title,children:h("filter_and_export_student_attendance")}),(0,u.jsx)(r.Z,{customStyle:{width:"100%"}}),(0,u.jsxs)("section",{className:m.Z.tile_tile_container,style:{marginTop:"1rem"},children:[(0,u.jsx)("div",{className:""===Z?m.Z.tile_tile_active:m.Z.tile_tile,onClick:()=>C(""),children:h("monthly")}),(0,u.jsx)("div",{className:"ALL_SUBJECT_MONTHLY"===Z?m.Z.tile_tile_active:m.Z.tile_tile,onClick:()=>C("ALL_SUBJECT_MONTHLY"),children:h("all_subject_monthly")}),(0,u.jsx)("div",{className:"ALL"===Z?m.Z.tile_tile_active:m.Z.tile_tile,onClick:()=>C("ALL"),children:h("semester")}),(0,u.jsx)("div",{className:"ALL_SUBJECT_SEMESTER"===Z?m.Z.tile_tile_active:m.Z.tile_tile,onClick:()=>C("ALL_SUBJECT_SEMESTER"),children:h("all_subject_semester")})]}),Z&&"ALL_SUBJECT_MONTHLY"!==Z?null:(0,u.jsxs)("section",{className:l.Z.fees_head_title,children:[(0,u.jsx)("img",{src:"/images/members/back-icon-white.svg",style:{cursor:"pointer"},onClick:()=>{R()}}),(0,u.jsxs)("h6",{className:"".concat(l.Z.yearmonth),children:["".concat(E[D.getMonth()])," ","".concat(D.getFullYear())]}),(0,u.jsx)("img",{src:"/images/members/forward-icon-white.svg",style:{cursor:"pointer"},onClick:()=>{k()}})]}),(0,u.jsx)("button",{className:l.Z.next_btn,onClick:()=>{let e=!1,t="";if("RANGE"===Z){t=(e=>{const t={};for(let n in e)e[n]||(t[n]="".concat(n," is required!"));return t})(L);for(let n in t)if(n){e=!0;break}}else e=!1;if(e)b(t);else{x((e=>!e));let e=new Date("".concat(w," ").concat(E[D.getMonth()]," ").concat(D.getFullYear()));e=e.toISOString(),O({cid:n,is_type:Z,month:"".concat(e.substring(5,7)),year:"".concat(e.substring(0,4)),zipData:L}).then((async e=>{var t;let n=await(e=>{if("ALL"===Z){var t;let n={GRNO:"","Enrollment / PRN":"",RollNo:"",Name:"",Gender:"",[e.className]:"","Class Overall Percentage":""};for(let t of null===e||void 0===e?void 0:e.mapSubject)n[t.subjectName]="",n["".concat(t.subjectName," Overall Percentage")]="";return n["Overall Percentage"]="",null===e||void 0===e||null===(t=e.students)||void 0===t?void 0:t.map((e=>{var t,o;let a=0,l={...n};l.GRNO=null!==(t=null===e||void 0===e?void 0:e.studentGRNO)&&void 0!==t?t:"N/A",l["Enrollment / PRN"]=null!==e&&void 0!==e&&e.student_prn_enroll_number?null===e||void 0===e?void 0:e.student_prn_enroll_number:"N/A",l.RollNo=null===e||void 0===e?void 0:e.studentROLLNO,l.Name="".concat((null===e||void 0===e?void 0:e.studentFirstName)+" "+(null===e||void 0===e?void 0:e.studentMiddleName)+" "+(null===e||void 0===e?void 0:e.studentLastName)),l.Gender=null===e||void 0===e?void 0:e.studentGender,l[e.className]="".concat(e.classWise.presentCount," out of ").concat(e.classWise.totalCount),l["Class Overall Percentage"]=e.classWise.totalPercentage;for(let n of null===e||void 0===e?void 0:e.subjects)l[n.subjectName]="".concat(n.presentCount," out of ").concat(n.totalCount),l["".concat(n.subjectName," Overall Percentage")]=n.totalPercentage,n.totalPercentage&&(a+=n.totalPercentage);return l["Overall Percentage"]=(a/(null===e||void 0===e||null===(o=e.subjects)||void 0===o?void 0:o.length)).toFixed(2),l}))}if("ALL_SUBJECT_SEMESTER"===Z){var n;let t={GRNO:"","Enrollment / PRN":"",RollNo:"",Name:"",Gender:""};for(let n of null===e||void 0===e?void 0:e.mapSubject)t[n.subjectName]="",t["".concat(n.subjectName," Overall Percentage")]="";return null===e||void 0===e||null===(n=e.students)||void 0===n?void 0:n.map((e=>{var n;let o={...t};o.GRNO=null!==(n=null===e||void 0===e?void 0:e.studentGRNO)&&void 0!==n?n:"N/A",o["Enrollment / PRN"]=null!==e&&void 0!==e&&e.student_prn_enroll_number?null===e||void 0===e?void 0:e.student_prn_enroll_number:"N/A",o.RollNo=null===e||void 0===e?void 0:e.studentROLLNO,o.Name="".concat((null===e||void 0===e?void 0:e.studentFirstName)+" "+(null===e||void 0===e?void 0:e.studentMiddleName)+" "+(null===e||void 0===e?void 0:e.studentLastName)),o.Gender=null===e||void 0===e?void 0:e.studentGender;for(let t of null===e||void 0===e?void 0:e.subjects)o[t.subjectName]="".concat(t.presentCount," out of ").concat(t.totalCount),o["".concat(t.subjectName," Overall Percentage")]=t.totalPercentage;return o}))}if("ALL_SUBJECT_MONTHLY"===Z){var o;let t={GRNO:"","Enrollment / PRN":"",RollNo:"",Name:"",Gender:""};for(let n of null===e||void 0===e?void 0:e.mapSubject)t[n.subjectName]="",t["".concat(n.subjectName," Overall Percentage")]="";return null===e||void 0===e||null===(o=e.students)||void 0===o?void 0:o.map((e=>{var n;let o={...t};o.GRNO=null!==(n=null===e||void 0===e?void 0:e.studentGRNO)&&void 0!==n?n:"N/A",o["Enrollment / PRN"]=null!==e&&void 0!==e&&e.student_prn_enroll_number?null===e||void 0===e?void 0:e.student_prn_enroll_number:"N/A",o.RollNo=null===e||void 0===e?void 0:e.studentROLLNO,o.Name="".concat((null===e||void 0===e?void 0:e.studentFirstName)+" "+(null===e||void 0===e?void 0:e.studentMiddleName)+" "+(null===e||void 0===e?void 0:e.studentLastName)),o.Gender=null===e||void 0===e?void 0:e.studentGender;for(let t of null===e||void 0===e?void 0:e.subjects)o[t.subjectName]="".concat(t.presentCount," out of ").concat(t.totalCount),o["".concat(t.subjectName," Overall Percentage")]=t.totalPercentage;return o}))}{var a;let t=new Date("".concat(w," ").concat(E[D.getMonth()]," ").concat(D.getFullYear()));return t=t.toISOString(),null===e||void 0===e||null===(a=e.students)||void 0===a?void 0:a.map((n=>{var o,a,l,s;let i={};if("RANGE"===Z)for(let e=1;e<=w;e++)i["".concat(e,"/").concat(t.substring(5,7),"/").concat(t.substring(0,4))]="";else for(let d=1;d<=w;d++)if(d<10){var _;let n="0".concat(d,"/").concat(t.substring(5,7),"/").concat(t.substring(0,4));null!==e&&void 0!==e&&null!==(_=e.attendaceMappingDate)&&void 0!==_&&_.includes(n)&&(i[n]="")}else{var r;let n="".concat(d,"/").concat(t.substring(5,7),"/").concat(t.substring(0,4));null!==e&&void 0!==e&&null!==(r=e.attendaceMappingDate)&&void 0!==r&&r.includes(n)&&(i[n]="")}for(let e of null===n||void 0===n?void 0:n.availablity)i["".concat(null===e||void 0===e?void 0:e.date)]=null===e||void 0===e?void 0:e.status;return{GRNO:null!==(o=null===n||void 0===n?void 0:n.studentGRNO)&&void 0!==o?o:"N/A","Enrollment / PRN":null!==n&&void 0!==n&&n.student_prn_enroll_number?null===n||void 0===n?void 0:n.student_prn_enroll_number:"N/A",RollNo:null===n||void 0===n?void 0:n.studentROLLNO,Name:(null===n||void 0===n?void 0:n.studentFirstName)+" "+(null===n||void 0===n?void 0:n.studentMiddleName)+" "+(null===n||void 0===n?void 0:n.studentLastName),Gender:null===n||void 0===n?void 0:n.studentGender,...i,"Total Count":"".concat(null===n||void 0===n||null===(a=n.classWise)||void 0===a?void 0:a.presentCount," out of ").concat(null===n||void 0===n||null===(l=n.classWise)||void 0===l?void 0:l.totalCount),"Overall Percentage":null===n||void 0===n||null===(s=n.classWise)||void 0===s?void 0:s.totalPercentage}}))}})(null===(t=e.data)||void 0===t?void 0:t.attendance_zip);P((()=>n)),g(!0)})).catch((()=>{}))}},style:{marginTop:"3rem"},children:h("export_data")}),(0,u.jsx)(_.CSVLink,{data:f,filename:"".concat(v,"-").concat("ALL"===Z?"semester":"ALL_SUBJECT_SEMESTER"===Z?"all-subject-semester":"ALL_SUBJECT_MONTHLY"===Z?"all-subject-".concat(E[D.getMonth()],"-monthly"):"".concat(E[D.getMonth()],"-monthly"),"-attendance.csv"),id:"attendance_download_file"})]}),p&&(0,u.jsx)(s.Z,{})]})}},23664:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(72791),a=n(16871),l=n(43504),s=n(24582),i=n(39230),_=n(69721),r=n(34586),d=n(80184);const c=e=>{var t;let{cid:n,openAs:c,isDepartment:m}=e;const u=(0,a.UO)(),{t:v}=(0,i.$G)(),[h,p]=(0,o.useState)([]),{classAllStudent:x,classAllStudentRefetch:N}=(0,s.EY)({data:{cid:n,page:1,limit:30},skip:!n});(0,o.useEffect)((()=>{n&&N()}),[n,N]),(0,o.useEffect)((()=>{var e,t;null!==x&&void 0!==x&&null!==(e=x.classes)&&void 0!==e&&e.ApproveStudent&&p(null===x||void 0===x||null===(t=x.classes)||void 0===t?void 0:t.ApproveStudent)}),[null===x||void 0===x||null===(t=x.classes)||void 0===t?void 0:t.ApproveStudent]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:r.Z.catalog,style:{border:m?"none":"0.5px solid #cacaca"},children:[(0,d.jsx)("div",{className:r.Z.searchContainerr,children:(0,d.jsxs)("div",{className:r.Z.searchContainer,style:{width:"100%"},children:[(0,d.jsx)("img",{alt:"",src:"/images/search-dept-icon.svg"}),(0,d.jsx)("input",{type:"text",placeholder:v("search-label"),onChange:e=>{if(e.target.value){var t,n;const o=null===x||void 0===x||null===(t=x.classes)||void 0===t||null===(n=t.ApproveStudent)||void 0===n?void 0:n.filter((t=>{var n,o,a;return null!==(n="".concat(null===t||void 0===t?void 0:t.studentFirstName," ").concat(null!==t&&void 0!==t&&t.studentMiddleName?(null===t||void 0===t?void 0:t.studentMiddleName)+" ":"").concat(null===t||void 0===t?void 0:t.studentLastName))&&void 0!==n&&null!==(o=n.toLowerCase())&&void 0!==o&&o.includes(null===(a=e.target.value)||void 0===a?void 0:a.toLowerCase())?t:null}));p(o)}else{var o;p(null===x||void 0===x||null===(o=x.classes)||void 0===o?void 0:o.ApproveStudent)}}})]})}),(0,d.jsx)("div",{className:r.Z.itemsContainer,children:null===h||void 0===h?void 0:h.map((e=>{var t;return(0,d.jsx)(l.rU,{to:"/q/".concat(u.username,"/student/profile"),state:{sid:null===e||void 0===e?void 0:e._id,viewAs:c||"INSTITUTE"},children:(0,d.jsxs)("div",{className:r.Z.item,children:[(0,d.jsx)("p",{children:null===e||void 0===e?void 0:e.studentROLLNO}),(0,d.jsx)("img",{alt:"",src:null!==e&&void 0!==e&&e.studentProfilePhoto?"".concat(_.yI,"/").concat(null===e||void 0===e?void 0:e.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[null===e||void 0===e?void 0:e.studentFirstName," ",null!==e&&void 0!==e&&e.studentMiddleName?null===e||void 0===e?void 0:e.studentMiddleName:" "," ",null===e||void 0===e?void 0:e.studentLastName]}),(0,d.jsxs)("p",{style:{marginTop:"0.3rem"},children:[v("gr_number")," ",null!==(t=null===e||void 0===e?void 0:e.studentGRNO)&&void 0!==t?t:""]})]})]})})}))})]})})}},73453:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(72791),a=n(40444),l=n(51561),s=n(99612),i=n(69721),_=n(71342),r=n(39230),d=n(80184);const c=function(e){var t;let{examView:n}=e;const{t:l}=(0,r.$G)(),{subjectMcqTestsetAlloted:s,subjectMcqTestsetAllotedRefetch:c}=(0,a.dn)({data:{atsid:null===n||void 0===n?void 0:n._id,page:1,limit:50},skip:!(null!==n&&void 0!==n&&n._id)});return(0,o.useEffect)((()=>{null!==n&&void 0!==n&&n._id&&c()}),[null===n||void 0===n?void 0:n._id,c]),(0,d.jsxs)("div",{className:_.Z.markDetails,children:[(0,d.jsx)("div",{className:_.Z.markDetailsHeader,children:(0,d.jsxs)("h6",{children:[(0,d.jsxs)("span",{className:_.Z.span,children:[" ",l("exam")," : "]})," ",null===n||void 0===n?void 0:n.testExamName]})}),(0,d.jsx)("div",{className:_.Z.markDetailsHeader2,children:(0,d.jsxs)("h6",{children:[(0,d.jsxs)("span",{className:_.Z.span2,children:[" ",l("maximum_marks")," : "]})," ",null===n||void 0===n?void 0:n.testTotalNumber]})}),(0,d.jsx)("div",{className:_.Z.table,children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{className:_.Z.thead,children:(0,d.jsxs)("tr",{className:_.Z.tr,children:[(0,d.jsx)("th",{className:_.Z.th,children:l("roll_no")}),(0,d.jsx)("th",{className:_.Z.th,children:l("name")}),(0,d.jsx)("th",{className:"".concat(_.Z.th," ").concat(_.Z.thMargin),children:l("ob")})]})}),(0,d.jsx)("tbody",{className:_.Z.tbody,children:null===s||void 0===s||null===(t=s.studentList)||void 0===t?void 0:t.map((e=>{var t,n;return(0,d.jsxs)("tr",{className:_.Z.tr,children:[(0,d.jsx)("td",{className:_.Z.td,children:null===e||void 0===e?void 0:e.studentROLLNO}),(0,d.jsx)("td",{className:_.Z.td,children:(0,d.jsxs)("div",{className:_.Z.student,children:[(0,d.jsx)("img",{src:null!==e&&void 0!==e&&e.studentProfilePhoto?"".concat(i.yI,"/").concat(null===e||void 0===e?void 0:e.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,d.jsxs)("h6",{children:[null===e||void 0===e?void 0:e.studentFirstName," ",null!==e&&void 0!==e&&e.studentMiddleName?null===e||void 0===e?void 0:e.studentMiddleName:" "," ",null===e||void 0===e?void 0:e.studentLastName]})]})}),(0,d.jsx)("td",{className:_.Z.td,children:(0,d.jsx)("input",{type:"number",name:"student",defaultValue:null===e||void 0===e||null===(t=e.testSet)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.testObtainMarks,readOnly:!0,disabled:!0})})]},null===e||void 0===e?void 0:e._id)}))})]})})]})};var m=n(53478),u=n(7280);const v=function(e){let{exam:t,onExamView:n}=e;const{t:o}=(0,r.$G)();return(0,d.jsxs)("div",{className:m.Z.sidebarheader,onClick:()=>n(t),title:"See exam",children:[(0,d.jsx)("div",{className:m.Z.dot}),(0,d.jsx)("img",{src:"/images/members/exam-icon.svg",alt:""}),(0,d.jsxs)("div",{className:m.Z.text,children:[(0,d.jsx)("div",{className:m.Z.insName,children:(0,d.jsx)("h6",{children:null===t||void 0===t?void 0:t.examName})}),"Final"===(null===t||void 0===t?void 0:t.examType)?"":(0,d.jsx)("div",{className:m.Z.insUserName,children:(0,d.jsxs)("p",{children:[o("weightage"),": ",null===t||void 0===t?void 0:t.examWeight," %"]})})]}),(0,d.jsxs)("div",{className:m.Z.date,children:[(0,d.jsxs)("h6",{children:[" ",o("total_marks")," ",null===t||void 0===t?void 0:t.totalMarks]}),(0,d.jsx)("p",{children:null===t||void 0===t?void 0:t.examType})]})]})};const h=function(e){var t,n;let{sid:i,isDepartment:_}=e;const{t:h}=(0,r.$G)(),[p,x]=o.useState(0),[N,b]=(0,o.useState)(null),[j,g]=(0,o.useState)(!1),[f,P]=(0,o.useState)(""),{subjectAllExam:Z,subjectAllExamRefetch:H}=(0,a.vZ)({data:{sid:i,page:1,limit:50},skip:!i}),{subjectMcqTestsetTakenList:L,subjectMcqTestsetTakenListRefetch:S}=(0,a.LX)({data:{sid:i,page:1,limit:50},skip:!i});(0,o.useEffect)((()=>{i&&(H(),S())}),[i,H,S]);const w=e=>{x(1),b(e)};return(0,d.jsxs)(d.Fragment,{children:[0===p&&(0,d.jsx)("div",{className:m.Z.exam_tab_space,children:(0,d.jsx)(u.Z,{isDepartment:_,children:(0,d.jsxs)("div",{className:m.Z.all_exam_main_container,children:[(0,d.jsxs)("div",{className:m.Z.exam_container,children:[(0,d.jsx)("h4",{className:m.Z.exam_heading,children:h("exams")}),null===Z||void 0===Z||null===(t=Z.subject)||void 0===t?void 0:t.map((e=>(0,d.jsx)(v,{exam:e,onExamView:w},null===e||void 0===e?void 0:e._id)))]}),(0,d.jsxs)("div",{className:m.Z.exam_container,children:[(0,d.jsx)("h4",{className:m.Z.exam_heading,children:h("mcq_mock_test")}),null===L||void 0===L||null===(n=L.allotedTestSet)||void 0===n?void 0:n.map((e=>{var t,n,o,a;return(0,d.jsxs)("div",{className:m.Z.sidebarheader,onClick:()=>{return t=e,x(2),void b(t);var t},children:[(0,d.jsx)("img",{src:"/images/members/mcq-exam-icon1.svg",alt:""}),(0,d.jsx)("div",{className:m.Z.text,children:(0,d.jsxs)("div",{className:m.Z.insName,children:[(0,d.jsx)("h6",{children:null===e||void 0===e?void 0:e.testExamName}),(0,d.jsx)("p",{className:m.Z.exam_mcq_date,style:{marginTop:"0.1vw"},children:null===e||void 0===e?void 0:e.testDate})]})}),(0,d.jsxs)("div",{className:m.Z.date,children:[(0,d.jsx)("h6",{children:null===e||void 0===e?void 0:e.testTotalNumber}),(0,d.jsxs)("p",{children:["".concat(null===e||void 0===e||null===(t=e.testStart)||void 0===t?void 0:t.substr(0,5)," ").concat(null===e||void 0===e||null===(n=e.testStart)||void 0===n?void 0:n.substr(9))," ","to"," ","".concat(null===e||void 0===e||null===(o=e.testEnd)||void 0===o?void 0:o.substr(0,5)," ").concat(null===e||void 0===e||null===(a=e.testEnd)||void 0===a?void 0:a.substr(9))]})]})]},null===e||void 0===e?void 0:e._id)}))]})]})})}),1===p&&(0,d.jsx)(s.Z,{examView:N,sid:i,isDepartment:_}),2===p&&(0,d.jsx)(c,{examView:N}),(0,d.jsx)(l.SY,{msg:f,run:j,setRun:g})]})}},10406:(e,t,n)=>{n.d(t,{Z:()=>o});const o={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},33148:(e,t,n)=>{n.d(t,{Z:()=>o});const o={departmenthead:"PromoteDepartment_departmenthead__NT0rQ",demaprtment_list:"PromoteDepartment_demaprtment_list__xRUQC",department_card_container:"PromoteDepartment_department_card_container__tEJF1",department_card_image:"PromoteDepartment_department_card_image__fqEm5",department_card_name:"PromoteDepartment_department_card_name__fsy26",department_card_head:"PromoteDepartment_department_card_head__p9hSI",moderator_container_title:"PromoteDepartment_moderator_container_title__s8dGS",with_search:"PromoteDepartment_with_search__iQ8M3",search_container_input:"PromoteDepartment_search_container_input__ef1S7",searchIcon:"PromoteDepartment_searchIcon__rhdfi",class_container:"PromoteDepartment_class_container__5IIQl",class_container_text:"PromoteDepartment_class_container_text__Z4upA",oneRowImage:"PromoteDepartment_oneRowImage__300XP",total_student_count:"PromoteDepartment_total_student_count__tMaik",total_other_count_container:"PromoteDepartment_total_other_count_container__B09Jg",student_container:"PromoteDepartment_student_container__II4m8",student_info_container:"PromoteDepartment_student_info_container__aVOf4",student_info_text:"PromoteDepartment_student_info_text__w1jdE",select_application_btn:"PromoteDepartment_select_application_btn__ydAfm",promote_container:"PromoteDepartment_promote_container__BLZ0j",promote_student_card:"PromoteDepartment_promote_student_card__euVJr",promote_student_cardActive:"PromoteDepartment_promote_student_cardActive__+x213",promote_student_card_text:"PromoteDepartment_promote_student_card_text__tnq3o",promote_student_name:"PromoteDepartment_promote_student_name__8I367",select_header:"PromoteDepartment_select_header__Pf+k3",select_all_btn:"PromoteDepartment_select_all_btn__wQlgs",promote_all_btn:"PromoteDepartment_promote_all_btn__Byy5c",promote_container_title:"PromoteDepartment_promote_container_title__z4Pmh",add_new_container:"PromoteDepartment_add_new_container__LEogI",add_new_exam:"PromoteDepartment_add_new_exam__3Kr+Z",menu_icon:"PromoteDepartment_menu_icon__TxY-a",items:"PromoteDepartment_items__PRx-q",itemm:"PromoteDepartment_itemm__wY1ST",checkbox:"PromoteDepartment_checkbox__HIzX-",counts:"PromoteDepartment_counts__6u4y4",promote_student_check_container:"PromoteDepartment_promote_student_check_container__cHvP7",promote_student_check:"PromoteDepartment_promote_student_check__EnbC1",department_checkbox:"PromoteDepartment_department_checkbox__7PqNV",promote_undo_container:"PromoteDepartment_promote_undo_container__I22Lh",all_leave_config:"PromoteDepartment_all_leave_config__gJg0k",settingbtnflex:"PromoteDepartment_settingbtnflex__7U56X",settingbtn:"PromoteDepartment_settingbtn__en0FB",rec_icon:"PromoteDepartment_rec_icon__gHIKN",tf_heading:"PromoteDepartment_tf_heading__6wSM5"}}}]);
//# sourceMappingURL=89947.9edb3594.chunk.js.map