"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[21257],{10193:(t,e,n)=>{n.d(e,{Z:()=>d});var s=n(72791),i=n(60871),u=n(80184);const d=t=>{let{totalTime:e,setAutoSubmit:n}=t;const[d,o]=(0,s.useState)("00:01:00"),l=(0,s.useRef)(null),r=t=>{let{total:e,hours:n,minutes:s,seconds:i}=(t=>{const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/1e3%60),s=Math.floor(e/1e3/60%60);return{total:e,hours:Math.floor(e/1e3/60/60%24),minutes:s,seconds:n}})(t);e>=0&&o((n>9?n:"0"+n)+":"+(s>9?s:"0"+s)+":"+(i>9?i:"0"+i))};return(0,s.useEffect)((()=>{(t=>{o("".concat(Math.floor(e/3600),":").concat(Math.floor(e%3600/60),":").concat(e%3600%60)),l.current&&clearInterval(l.current);const n=setInterval((()=>{r(t)}),1e3);l.current=n})((()=>{let t=new Date;return t.setHours(t.getHours()+Math.floor(e/3600)),t.setMinutes(t.getMinutes()+Math.floor(e%3600/60)),t.setSeconds(t.getSeconds()+e%3600%60),t})())}),[]),(0,s.useEffect)((()=>{"00:00:00"===d&&n(!0)}),[d]),(0,u.jsx)("h6",{className:i.Z.examTime,children:d})}},60021:(t,e,n)=>{n.d(e,{je:()=>W,zc:()=>w,bv:()=>z,Ib:()=>E,K8:()=>I,zj:()=>O,qY:()=>T,WR:()=>D,ST:()=>B,fq:()=>k,J8:()=>Z,Eq:()=>P});var s=n(43249),i=n(94811);const u=t=>t.query({query:t=>"/v2/attendance/student/stats/".concat(t.id,"/classes/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.cls_list}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.cls_list},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),d=t=>t.query({query:t=>"/v2/attendance/student/stats/class/".concat(t.cid,"/student/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.students}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.students},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),o=t=>t.query({query:t=>"/v2/attendance/student/stats/lecture/".concat(t.cid,"/student/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.student_list}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.student_list},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),l=t=>t.query({query:t=>"/v2/attendance/student/stats/student/".concat(t.sid,"/lecture/").concat(t.cid,"/query"),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.all_subject,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),r=t=>t.query({query:t=>"/v2/attendance/student/profile/stats/".concat(t.sid,"/day/query?date=").concat(null===t||void 0===t?void 0:t.date),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),a=t=>t.query({query:t=>"/v2/attendance/student/profile/stats/".concat(t.sid,"/lecture/query"),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.profile_attendance_stats,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),c=t=>t.query({query:t=>"/v1/timetable/newtimetable/student/".concat(t.sid,"/schedule/list?status=").concat(t.status,"&date=").concat(t.date),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.studentSchedlue,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),v=t=>t.mutation({query:t=>({url:"/v1/mcq/start/by/student/testset/".concat(null===t||void 0===t?void 0:t.stid,"/exam/query"),method:i.Q0,body:t.bodyParameter})}),m=t=>t.query({query:t=>"/v1/mcq/student/testset/paper/".concat(t.tsid),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.studentTestSet,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),h=t=>t.mutation({query:t=>({url:"/v1/mcq/student/testset/paper/".concat(null===t||void 0===t?void 0:t.tsid),method:i.Q0,body:t.bodyParameter})}),p=t=>t.mutation({query:t=>({url:"/v1/mcq/student/testset/".concat(t.tsid,"/complete"),method:i.Q0,body:t.bodyParameter})}),S=t=>t.mutation({query:t=>({url:"/v1/mcq/check/by/student/testset/".concat(null===t||void 0===t?void 0:t.stid,"/result/query"),method:i.Q0,body:t.bodyParameter})}),f=t=>t.query({query:t=>"/v1/mcq/student/testset/".concat(null===t||void 0===t?void 0:t.tsid,"/complete"),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.studentSchedlue,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),g=s.l.injectEndpoints({endpoints:t=>({studentStatsClassList:u(t),studentStatsOneClassStudentList:d(t),studentStatsLectureWiseStudentList:o(t),studentStatsLectureWiseOneStudentSubjectList:l(t),studentProfileAttendanceStatsDayWise:r(t),studentProfileAttendanceStatsLectureWise:a(t),studentDateWiseTimetable:c(t),studentMcqExamStartTest:v(t),studentMcqExamTestsetDetail:m(t),studentMcqExamQuestionSave:h(t),studentMcqExamSubmit:p(t),studentMcqExamResultDetail:f(t),studentMcqExamResultValidation:S(t)})}),{useStudentStatsClassListQuery:_,useStudentStatsOneClassStudentListQuery:q,useStudentStatsLectureWiseStudentListQuery:M,useStudentStatsLectureWiseOneStudentSubjectListQuery:Q,useStudentProfileAttendanceStatsDayWiseQuery:C,useStudentProfileAttendanceStatsLectureWiseQuery:y,useStudentDateWiseTimetableQuery:A,useStudentMcqExamStartTestMutation:N,useStudentMcqExamTestsetDetailQuery:b,useStudentMcqExamQuestionSaveMutation:x,useStudentMcqExamSubmitMutation:L,useStudentMcqExamResultDetailQuery:R,useStudentMcqExamResultValidationMutation:j}=g,B=t=>{const{data:e,refetch:n,isFetching:s}=_(t.data,{skip:t.skip});return{studentStatsClassList:e,studentStatsClassListRefetch:n,studentStatsClassListLoading:s}},P=t=>{const{data:e,refetch:n,isFetching:s}=q(t.data,{skip:t.skip});return{studentStatsOneClassStudentList:e,studentStatsOneClassStudentListRefetch:n,studentStatsOneClassStudentListLoading:s}},Z=t=>{const{data:e,refetch:n,isFetching:s}=M(t.data,{skip:t.skip});return{studentStatsLectureWiseStudentList:e,studentStatsLectureWiseStudentListRefetch:n,studentStatsLectureWiseStudentListLoading:s}},k=t=>{const{data:e,refetch:n,isFetching:s}=Q(t.data,{skip:t.skip});return{studentStatsLectureWiseOneStudentSubjectList:e,studentStatsLectureWiseOneStudentSubjectListRefetch:n,studentStatsLectureWiseOneStudentSubjectListLoading:s}},T=t=>{const{data:e,refetch:n,isFetching:s}=C(t.data,{skip:t.skip});return{studentProfileAttendanceStatsDayWise:e,studentProfileAttendanceStatsDayWiseRefetch:n,studentProfileAttendanceStatsDayWiseLoading:s}},D=t=>{const{data:e,refetch:n,isFetching:s}=y(t.data,{skip:t.skip});return{studentProfileAttendanceStatsLectureWise:e,studentProfileAttendanceStatsLectureWiseRefetch:n,studentProfileAttendanceStatsLectureWiseLoading:s}},W=t=>{const{data:e,refetch:n,isFetching:s}=A(t.data,{skip:t.skip});return{studentDateWiseTimetable:e,studentDateWiseTimetableRefetch:n,studentDateWiseTimetableLoading:s}},E=()=>{const[t]=N();return[t]},O=t=>{const{data:e,refetch:n,isFetching:s}=b(t.data,{skip:t.skip});return{studentMcqExamTestsetDetail:e,studentMcqExamTestsetDetailRefetch:n,studentMcqExamTestsetDetailLoading:s}},w=()=>{const[t]=x();return[t]},I=()=>{const[t]=L();return[t]},z=()=>{const[t]=j();return[t]}},21257:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var s=n(39230),i=n(16871),u=n(60871),d=n(72791),o=n(10193),l=n(1095),r=n(98684),a=n(60021),c=n(80184);const v=()=>{var t,e,n,v,h,p,S,f,g,_,q,M,Q;const{t:C}=(0,s.$G)(),y=(0,i.TH)(),A=(0,i.s0)(),N=(0,i.UO)(),[b,x]=(0,d.useState)(!1),[L,R]=(0,d.useState)([]),[j,B]=(0,d.useState)([]),[P,Z]=(0,d.useState)([]),[k,T]=(0,d.useState)(""),[D,W]=(0,d.useState)(0),[E]=(0,a.zc)(),[O]=(0,a.K8)(),{studentMcqExamTestsetDetail:w}=(0,a.zj)({data:{tsid:null===(t=y.state)||void 0===t?void 0:t.tsid},skip:!(null!==(e=y.state)&&void 0!==e&&e.tsid)});(0,d.useEffect)((()=>{if(w){R(null===w||void 0===w?void 0:w.questions),T(null===w||void 0===w?void 0:w.questions[0]);let e=[];for(let n of null===w||void 0===w?void 0:w.questions){var t;e.push({_id:null===n||void 0===n?void 0:n._id,givenAnswer:n.givenAnswer}),null!==(t=n.givenAnswer)&&void 0!==t&&t.length&&B((t=>[...t,null===n||void 0===n?void 0:n._id]))}Z((t=>[...t,...e]))}}),[w]),(0,d.useEffect)((()=>{T(null===w||void 0===w?void 0:w.questions[D])}),[D]),(0,d.useEffect)((()=>{b&&I()}),[b]);const I=()=>{var t,e;null!==(t=y.state)&&void 0!==t&&t.tsid&&O({tsid:null===(e=y.state)||void 0===e?void 0:e.tsid,bodyParameter:{testSetComplete:!0}}).then((()=>{A("/q/".concat(N.username,"/feed"))})).catch({})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:u.Z.studentMCQ,children:[(0,c.jsx)("div",{className:u.Z.studentMCQTop,children:(null===w||void 0===w?void 0:w.testDuration)&&(0,c.jsx)(o.Z,{totalTime:60*(null===w||void 0===w?void 0:w.testDuration),setAutoSubmit:x})}),(0,c.jsxs)("div",{className:u.Z.studentMCQBody,children:[(0,c.jsxs)("div",{className:u.Z.studentMCQBodyLeft,children:[(0,c.jsxs)("div",{className:u.Z.qTop,children:[(0,c.jsxs)("h6",{children:["Question ",D+1]}),(0,c.jsx)("h6",{children:(null===k||void 0===k?void 0:k.questionNumber)>9?null===k||void 0===k?void 0:k.questionNumber:"0".concat(null===k||void 0===k?void 0:k.questionNumber)})]}),(0,c.jsx)("textarea",{className:u.Z.show_question,readOnly:!0,rows:null===k||void 0===k||null===(n=k.questionDescription)||void 0===n?void 0:n.split("\n").length,defaultValue:null===k||void 0===k?void 0:k.questionDescription}),null!==k&&void 0!==k&&null!==(v=k.questionImage)&&void 0!==v&&v.length?(0,c.jsx)("img",{src:"".concat(l.yI,"/").concat(null===k||void 0===k?void 0:k.questionImage[0].documentKey),alt:"",className:u.Z.qImg}):"",(0,c.jsx)("div",{className:null!==k&&void 0!==k&&k.qImg?u.Z.qOptions:u.Z.noQImg,children:null===k||void 0===k||null===(h=k.options)||void 0===h?void 0:h.map(((t,e)=>{var n,s,i,d;return(0,c.jsxs)("div",{className:(null===k||void 0===k||null===(n=k.givenAnswer[0])||void 0===n?void 0:n.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)&&null!==P&&void 0!==P&&null!==(s=P.filter((e=>{var n;return(null===e||void 0===e?void 0:e._id)===(null===k||void 0===k?void 0:k._id)&&(null===e||void 0===e||null===(n=e.givenAnswer[0])||void 0===n?void 0:n.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)})))&&void 0!==s&&s.length?u.Z.qOptionActive:u.Z.qOption,children:[(0,c.jsx)("div",{className:(null===k||void 0===k||null===(i=k.givenAnswer[0])||void 0===i?void 0:i.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)&&null!==P&&void 0!==P&&null!==(d=P.filter((e=>{var n;return(null===e||void 0===e?void 0:e._id)===(null===k||void 0===k?void 0:k._id)&&(null===e||void 0===e||null===(n=e.givenAnswer[0])||void 0===n?void 0:n.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)})))&&void 0!==d&&d.length?u.Z.qButtonActive:u.Z.qButton,onClick:()=>{var e,n;return((t,e)=>{var n;if(e)if(T((e=>({...e,givenAnswer:[t]}))),null!==j&&void 0!==j&&j.includes(null===k||void 0===k?void 0:k._id)){const e=P;for(let n of e)(null===n||void 0===n?void 0:n._id)===(null===k||void 0===k?void 0:k._id)&&(n.givenAnswer=[t]);Z(e)}else B((t=>[...t,null===k||void 0===k?void 0:k._id])),Z((e=>[...e,{_id:null===k||void 0===k?void 0:k._id,givenAnswer:[t]}]));else T((t=>({...t,givenAnswer:[]}))),B(null===j||void 0===j?void 0:j.filter((t=>t!==(null===k||void 0===k?void 0:k._id)))),Z(null===P||void 0===P?void 0:P.filter((t=>(null===t||void 0===t?void 0:t._id)!==(null===k||void 0===k?void 0:k._id))));E({tsid:null===(n=y.state)||void 0===n?void 0:n.tsid,bodyParameter:{questionSNO:null===k||void 0===k?void 0:k.questionSNO,givenAnswer:[t]}}).then((()=>{})).catch({})})(t,(null===k||void 0===k||null===(e=k.givenAnswer[0])||void 0===e?void 0:e.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)&&null!==P&&void 0!==P&&null!==(n=P.filter((e=>{var n;return(null===e||void 0===e?void 0:e._id)===(null===k||void 0===k?void 0:k._id)&&(null===e||void 0===e||null===(n=e.givenAnswer[0])||void 0===n?void 0:n.optionNumber)===(null===t||void 0===t?void 0:t.optionNumber)})))&&void 0!==n&&n.length?"":"another")},children:0===e?"A":1===e?"B":2===e?"C":3===e?"D":"E"}),(0,c.jsx)("p",{className:u.Z.qOptionp,children:null===t||void 0===t?void 0:t.option})]})}))}),(0,c.jsxs)("div",{className:u.Z.prevNextBtns,children:[(0,c.jsx)("p",{onClick:()=>{W((t=>t-1>=0?t-1:t))},children:"Previous"}),(0,c.jsx)("p",{onClick:()=>{W((t=>t+1<(null===L||void 0===L?void 0:L.length)?t+1:t))},children:"Next"})]}),D===(null===L||void 0===L?void 0:L.length)-1&&(0,c.jsx)("div",{className:u.Z.submitMCQButtonContainer,children:(0,c.jsx)("div",{className:u.Z.submitMCQButtons,onClick:I,style:m,children:"Submit"})})]}),(0,c.jsxs)("div",{className:u.Z.studentMCQBodyRight,children:[(0,c.jsxs)("div",{className:u.Z.studentMCQProfile,children:[(0,c.jsx)("div",{className:u.Z.studentMCQProfileLeft,children:(0,c.jsx)("img",{src:null!==w&&void 0!==w&&null!==(p=w.student)&&void 0!==p&&p.studentProfilePhoto?"".concat(l.yI,"/").concat(null===w||void 0===w||null===(S=w.student)||void 0===S?void 0:S.studentProfilePhoto):"".concat(r.p3,"/feed-user-avatar.svg"),alt:"profile icon"})}),(0,c.jsxs)("div",{className:u.Z.studentMCQProfileRight,children:[(0,c.jsxs)("h6",{className:u.Z.studentMCQProfileRighth6,children:["Name:"," ","".concat(null===w||void 0===w||null===(f=w.student)||void 0===f?void 0:f.studentFirstName," ").concat(null!==w&&void 0!==w&&null!==(g=w.student)&&void 0!==g&&g.studentMiddleName?null===w||void 0===w||null===(_=w.student)||void 0===_?void 0:_.studentMiddleName:""," ").concat(null===w||void 0===w||null===(q=w.student)||void 0===q?void 0:q.studentLastName)]}),(0,c.jsxs)("p",{className:u.Z.studentMCQProfileRightp,style:{marginBottom:"0"},children:["Roll No. ",null===w||void 0===w||null===(M=w.student)||void 0===M?void 0:M.studentROLLNO]}),(0,c.jsxs)("p",{className:u.Z.studentMCQProfileRightp,style:{marginBottom:"0"},children:["Subject: ",null!==(Q=null===w||void 0===w?void 0:w.testSubject)&&void 0!==Q?Q:""]})]})]}),(0,c.jsx)("div",{className:u.Z.studentMCQButtons,children:null===L||void 0===L?void 0:L.map(((t,e)=>(0,c.jsx)("div",{className:null!==j&&void 0!==j&&j.includes(null===t||void 0===t?void 0:t._id)||D===e?D===e?u.Z.qButtonActiveBlue:u.Z.qButtonActive:u.Z.qButton,onClick:()=>W((t=>e)),children:e+1})))})]})]})]})})},m={position:"relative",zIndex:1}},60871:(t,e,n)=>{n.d(e,{Z:()=>s});const s={studentMCQTop:"StudentMCQ_studentMCQTop__tEGSX",examName:"StudentMCQ_examName__Q90VC",examTime:"StudentMCQ_examTime__2OjCF",studentMCQTop2:"StudentMCQ_studentMCQTop2__z2O1n",subNamep:"StudentMCQ_subNamep__UWye5",subImg:"StudentMCQ_subImg__lH9VF",studentMCQBody:"StudentMCQ_studentMCQBody__uai23",studentMCQBodyLeft:"StudentMCQ_studentMCQBodyLeft__EBEQ9",studentMCQBodyRight:"StudentMCQ_studentMCQBodyRight__cDZwh",studentMCQProfile:"StudentMCQ_studentMCQProfile__QxUB+",studentMCQProfileLeft:"StudentMCQ_studentMCQProfileLeft__tSpmM",studentMCQProfileRight:"StudentMCQ_studentMCQProfileRight__FlO3Q",studentMCQProfileRighth6:"StudentMCQ_studentMCQProfileRighth6__Dg3Bu",studentMCQProfileRighthp:"StudentMCQ_studentMCQProfileRighthp__0kRF4",studentMCQButtons:"StudentMCQ_studentMCQButtons__8iHiF",qButton:"StudentMCQ_qButton__T7Sts",qButtonActive:"StudentMCQ_qButtonActive__PiqQf",qButtonActiveBlue:"StudentMCQ_qButtonActiveBlue__6tMA+",qTop:"StudentMCQ_qTop__wCQMc",qtext:"StudentMCQ_qtext__IbAin",qOption:"StudentMCQ_qOption__ybmgZ",qOptionActive:"StudentMCQ_qOptionActive__Sx6tZ",qImg:"StudentMCQ_qImg__BTZA4",noQImg:"StudentMCQ_noQImg__LZ2I5",prevNextBtns:"StudentMCQ_prevNextBtns__tzPLf",submitMCQButtonContainer:"StudentMCQ_submitMCQButtonContainer__3rtSq",submitMCQButtons:"StudentMCQ_submitMCQButtons__GDlkY",show_question:"StudentMCQ_show_question__BJWk+"}}}]);
//# sourceMappingURL=21257.6b1e00af.chunk.js.map