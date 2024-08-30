"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[86703],{47401:(e,n,t)=>{t.d(n,{Z:()=>o});t(72791);var i=t(16871),a=t(43504),_=t(80184);const o=e=>{let{carryParentState:n,activeTab:t,children:o}=e;const r=(0,i.UO)();return(0,_.jsx)(a.rU,{to:"/q/".concat(r.username,"/member/mentor?a=").concat(t),state:{...n},children:o})}},20859:(e,n,t)=>{t.d(n,{Z:()=>r});t(72791);var i=t(15961),a=t(39230),_=t(69721),o=t(80184);const r=e=>{var n;let{mentee:t,viewAs:r,onPresent:s,onAbsent:l,isVisible:c,absent:d,present:m,isPresent:u,setOpenMenteeMenu:g,isAccess:f}=e;const{t:p}=(0,a.$G)();return(0,o.jsxs)("div",{className:i.Z.applicant_card_container,children:[(0,o.jsxs)("div",{className:i.Z.applicant_card_inner,style:{width:"90%"},children:[(0,o.jsx)("img",{alt:"Student Request Avatar",src:null!==t&&void 0!==t&&t.studentProfilePhoto?"".concat(_.yI,"/").concat(null===t||void 0===t?void 0:t.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",loading:"lazy"}),(0,o.jsxs)("div",{className:i.Z.applicant_card_inner_info,children:[(0,o.jsx)("h6",{children:"".concat(null===t||void 0===t?void 0:t.studentFirstName," ").concat(null!==t&&void 0!==t&&t.studentMiddleName?null===t||void 0===t?void 0:t.studentMiddleName:""," ").concat(null===t||void 0===t?void 0:t.studentLastName)}),"ATTENDANCE"===r||"MEETING_DETAIL"===r?null:(0,o.jsxs)("p",{children:["".concat(null!==(n=null===t||void 0===t?void 0:t.total_query)&&void 0!==n?n:0," ")," ",p("pending")]})]})]}),"ATTENDANCE"===r?"PRESENT"===c?null!==m&&void 0!==m&&m.includes(null===t||void 0===t?void 0:t._id)?(0,o.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio",onClick:()=>s(null===t||void 0===t?void 0:t._id)}):(0,o.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:()=>s(null===t||void 0===t?void 0:t._id)}):null!==d&&void 0!==d&&d.includes(null===t||void 0===t?void 0:t._id)?(0,o.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio",onClick:()=>l(null===t||void 0===t?void 0:t._id)}):(0,o.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:()=>l(null===t||void 0===t?void 0:t._id)}):"MEETING_DETAIL"===r?u?(0,o.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio"}):(0,o.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio"}):null,f&&(0,o.jsx)("button",{className:i.Z.remove_btn,onClick:()=>g(t),children:p("remove")})]})}},59758:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var i=t(72791),a=t(15961),_=t(39230),o=t(11105),r=t(23441),s=t(74289),l=t(36665),c=t(98094),d=t(72952),m=t(98734),u=t(60163),g=t(97655),f=t(90865),p=t(20859),h=t(47167),v=t(80184);const A=e=>{let{onPresentHandler:n,onAbsentHandler:t}=e;const{t:a}=(0,_.$G)(),[o,r]=(0,i.useState)(0),s=[{name:a("present"),id:0},{name:a("absent"),id:1}];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Z,{tabList:s,activeIndexTab:o,customStyleTab:{width:"100%"},customStyleLink:{width:"50%"},setActiveIndexTab:e=>{1===e?t():n(),r(e)}}),(0,v.jsx)(c.Z,{customStyle:{width:"100%",marginBottom:"0.7rem"}})]})},b=e=>{var n;let{mid:t,onClose:a,onAddMeeting:r}=e;const{t:l}=(0,_.$G)(),[d,m]=(0,i.useState)(!0),[g,f]=(0,i.useState)([]),[h,b]=(0,i.useState)([]),[x,S]=(0,i.useState)("PRESENT"),{getOneMentorMenteeList:j,getOneMentorMenteeListRefetch:y}=(0,s.Gu)({data:{mid:t,page:1,limit:1e3},skip:!t});(0,i.useEffect)((()=>{t&&(m(!0),y())}),[t,y]);const q=()=>{let e=[];for(let i=0;i<(null===j||void 0===j||null===(n=j.all_mentees)||void 0===n?void 0:n.length);i++){var n,t;e.push(null===j||void 0===j||null===(t=j.all_mentees[i])||void 0===t?void 0:t._id)}b(e),f([]),S("PRESENT")};(0,i.useEffect)((()=>{var e;null!==j&&void 0!==j&&j.all_mentees?(q(),m(!1)):0===(null===j||void 0===j||null===(e=j.all_mentees)||void 0===e?void 0:e.length)&&m(!1)}),[null===j||void 0===j?void 0:j.all_mentees]);const R=e=>{null!==g&&void 0!==g&&g.includes(e)?(f((n=>null===n||void 0===n?void 0:n.filter((n=>n!==e)))),b((n=>[...n,e]))):(f((n=>[...n,e])),b((n=>null===n||void 0===n?void 0:n.filter((n=>n!==e)))))},P=e=>{null!==h&&void 0!==h&&h.includes(e)?(b((n=>null===n||void 0===n?void 0:n.filter((n=>n!==e)))),f((n=>[...n,e]))):(b((n=>[...n,e])),f((n=>null===n||void 0===n?void 0:n.filter((n=>n!==e)))))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("section",{className:u.Z.seating_modal_title_left,style:{width:"100%",justifyContent:"space-between"},children:[(0,v.jsxs)("div",{className:u.Z.attendance_text,children:[(0,v.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:a,alt:""}),(0,v.jsx)("h6",{children:l("mark_attendance")})]}),(0,v.jsx)("div",{className:u.Z.attendance_next_btn,style:{marginTop:"0",width:"80px",padding:"0.5rem",height:"auto",cursor:"pointer"},onClick:()=>{r({present:g,absent:h})},children:l("add")})]}),(0,v.jsx)(c.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,v.jsx)(A,{onPresentHandler:q,onAbsentHandler:()=>{let e=[];for(let i=0;i<(null===j||void 0===j||null===(n=j.all_mentees)||void 0===n?void 0:n.length);i++){var n,t;e.push(null===j||void 0===j||null===(t=j.all_mentees[i])||void 0===t?void 0:t._id)}b([]),f(e),S("ABSENT")}}),null===j||void 0===j||null===(n=j.all_mentees)||void 0===n?void 0:n.map((e=>(0,v.jsx)(p.Z,{mentee:e,viewAs:"ATTENDANCE",isVisible:x,absent:h,present:g,onPresent:R,onAbsent:P},null===e||void 0===e?void 0:e._id))),d&&(0,v.jsx)(o.Z,{})]})};var x=t(59965);const S=e=>{let{onRefetch:n,onClose:t,mid:a,type:o,meetingDetail:r}=e;const{t:p}=(0,_.$G)(),[h,A]=(0,i.useState)(""),[S,j]=(0,i.useState)(!1),[y,q]=(0,i.useState)(!1),[R,P]=(0,i.useState)({agenda:"",discussion:"",summary:"",meeting_alert:!0,meeting_time:"",meeting_date:""}),[k]=(0,s.aC)(),[C]=(0,s.K_)(),[Z]=(0,s.PQ)();(0,i.useEffect)((()=>{"EDIT"===o&&P((e=>{var n,t,i,a,_,o;return{...e,agenda:null!==(n=null===r||void 0===r?void 0:r.agenda)&&void 0!==n?n:"",discussion:null!==(t=null===r||void 0===r?void 0:r.discussion)&&void 0!==t?t:"",summary:null!==(i=null===r||void 0===r?void 0:r.summary)&&void 0!==i?i:"",meeting_alert:null!==(a=null===r||void 0===r?void 0:r.meeting_alert)&&void 0!==a&&a,meeting_time:null!==(_=null===r||void 0===r?void 0:r.meeting_time)&&void 0!==_?_:"",meeting_date:null!==(o=null===r||void 0===r?void 0:r.meeting_date)&&void 0!==o?o:""}}))}),[o,r]);const w=e=>{P((n=>({...n,[e.target.name]:e.target.value})))},N=()=>{q((e=>!e))},M=e=>{const n=null===e||void 0===e?void 0:e.split(":");let t="";n[0]>12?(t="Pm",n[0]-=12):n[0]<12?(t="Am",0===n[0]&&(n[0]=12)):t="Pm";const i=n[0]>9?n[0]:"0".concat(+n[0]);return"".concat(i,":").concat(n[1]," ").concat(t)};return(0,v.jsx)(l.Z,{onClose:t,children:(0,v.jsxs)("div",{className:u.Z.seating_modal,style:{width:"40rem"},children:[y?(0,v.jsx)(b,{mid:a,onClose:N,onAddMeeting:e=>{"EDIT"===o?null!==r&&void 0!==r&&r._id&&(j((e=>!e)),C({meid:null===r||void 0===r?void 0:r._id,meetingData:{...R,meid:null===r||void 0===r?void 0:r._id,p_array:null===e||void 0===e?void 0:e.present,a_array:null===e||void 0===e?void 0:e.absent,meeting_time:M(R.meeting_time)}}).then((()=>{n(),t()})).catch({})):a&&(j((e=>!e)),k({meetingData:{...R,mid:a,p_array:null===e||void 0===e?void 0:e.present,a_array:null===e||void 0===e?void 0:e.absent}}).then((()=>{n(),t()})).catch({}))}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("section",{className:u.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,v.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:t,alt:""}),(0,v.jsx)("h6",{children:p("add_meeting")})]}),(0,v.jsx)(c.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,v.jsx)(f.Z,{labelHeading:p("add_meeting_alert"),labelDescription:"",defaultLabel:!1,customContainer:{padding:"0"},checkedToggle:R.meeting_alert,onToggleHandler:e=>P((n=>({...n,meeting_alert:e.target.checked})))}),(0,v.jsx)(g.Z,{labelText:p("agenda"),placeholder:p("agenda_placeholder"),name:"agenda",value:R.agenda,type:"text",onChange:w,errorShow:h.agenda}),"SCHEDULE"===o?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x.Z,{labelText:p("date"),placeholder:p("select_date"),name:"date",value:R.meeting_date,onDateFunction:e=>{let n=null===e||void 0===e?void 0:e.split("/"),t="".concat(n[2],"-").concat(n[1],"-").concat(n[0]);P((e=>({...e,meeting_date:t})))},customStyleContainer:{position:"relative"},datePickerPosition:{top:"-8rem"}}),(0,v.jsx)(g.Z,{labelText:p("time"),placeholder:"00:00",name:"meeting_time",value:null===R||void 0===R?void 0:R.meeting_time,type:"time",onChange:e=>P((n=>({...n,meeting_time:e.target.value}))),errorShow:h.meeting_time}),(0,v.jsx)("button",{className:u.Z.start_arrangement_btn,onClick:e=>{a&&(j((e=>!e)),Z({meetingData:{...R,mid:a,p_array:[],a_array:[],meeting_time:M(R.meeting_time)}}).then((()=>{n(),t()})).catch({}))},children:p("save")})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{labelText:p("summary"),placeholder:p("summary_placeholder"),name:"summary",value:R.summary,type:"text",onChange:w,customStyleContainer:{width:"100%"},errorShow:h.summary}),(0,v.jsx)(d.Z,{labelText:p("discussion"),placeholder:p("discussion_placeholder"),name:"discussion",value:R.discussion,type:"text",onChange:w,customStyleContainer:{width:"100%"},errorShow:h.discussion}),(0,v.jsx)("button",{className:u.Z.start_arrangement_btn,onClick:N,children:p("mark_attendance")})]})]}),S&&(0,v.jsx)(m.Z,{})]})})};var j=t(72426),y=t.n(j),q=t(12143),R=t(47401),P=t(16871),k=t(43504),C=t(98684);const Z=e=>{var n,t,a;let{meeting_detail:_,carryParentState:o,queryFlow:r,onRefetch:s,mid:l}=e;const c=(0,P.UO)(),[d,m]=(0,i.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:["By_Mentor"===r?(0,v.jsx)(v.Fragment,{children:"SCHEDULE"===(null===_||void 0===_?void 0:_.creation_status)?(0,v.jsxs)("div",{className:q.Z.mentor_card_container,style:{marginBottom:"0.7rem",justifyContent:"space-between"},children:[(0,v.jsxs)("div",{className:q.Z.mentor_card_int,children:[(0,v.jsx)("img",{src:"/images/member_tab/student/student-query-icon.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,v.jsxs)("div",{className:q.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,v.jsx)("h6",{children:null!==(n=null===_||void 0===_?void 0:_.agenda)&&void 0!==n?n:""}),(0,v.jsxs)("p",{children:[y()(null===_||void 0===_?void 0:_.meeting_date).format("DD MMM yyyy"),",",null===_||void 0===_?void 0:_.meeting_time]})]})]}),(0,v.jsx)("img",{src:"".concat(C.J7,"/menu.svg"),alt:"menu icon",style:{width:"1.5rem",height:"1.5rem",cursor:"pointer"},onClick:()=>m(!0)})]}):(0,v.jsx)(R.Z,{carryParentState:{...o,meid:null===_||void 0===_?void 0:_._id},activeTab:"meeting-detail",children:(0,v.jsxs)("div",{className:q.Z.mentor_card_container,style:{marginBottom:"0.7rem"},children:[(0,v.jsx)("img",{src:"/images/member_tab/student/student-query-icon.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,v.jsxs)("div",{className:q.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,v.jsx)("h6",{children:null!==(t=null===_||void 0===_?void 0:_.agenda)&&void 0!==t?t:""}),(0,v.jsxs)("p",{children:[y()(null===_||void 0===_?void 0:_.created_at).format("DD MMM yyyy"),",",y()(null===_||void 0===_?void 0:_.created_at).format("LT")]})]})]})})}):(0,v.jsx)(k.rU,{to:"/q/".concat(c.username,"/member/student/class?a=mentor&n=meeting-detail"),state:{...o,meid:null===_||void 0===_?void 0:_._id},activeTab:"mentor&n=queries&query",children:(0,v.jsxs)("div",{className:q.Z.mentor_card_container,style:{marginBottom:"0.7rem"},children:[(0,v.jsx)("img",{src:"/images/member_tab/student/student-query-icon.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,v.jsxs)("div",{className:q.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,v.jsx)("h6",{children:null!==(a=null===_||void 0===_?void 0:_.agenda)&&void 0!==a?a:""}),(0,v.jsxs)("p",{children:[y()(null===_||void 0===_?void 0:_.created_at).format("DD MMM yyyy"),",",y()(null===_||void 0===_?void 0:_.created_at).format("LT")]})]})]})}),d&&(0,v.jsx)(S,{onClose:()=>m(!1),mid:l,onRefetch:s,type:"EDIT",meetingDetail:_})]})};var w=t(89064);const N=e=>{let{onClose:n,onStep:t}=e;const{t:i}=(0,_.$G)();return(0,v.jsxs)(w.Z,{onClose:n,children:[(0,v.jsx)("h6",{onClick:()=>{t("RECORD"),n()},children:i("record_meeting")}),(0,v.jsx)("h6",{onClick:()=>{t("SCHEDULE"),n()},children:i("schedule_meeting")})]})},M=e=>{let{mid:n,carryParentState:t,queryFlow:l}=e;const{t:c}=(0,_.$G)(),[d,m]=(0,i.useState)(!1),[u,g]=(0,i.useState)(""),[f,p]=(0,r.YD)({skip:u}),[h,A]=(0,i.useState)(1),[b,x]=(0,i.useState)(!0),[j,y]=(0,i.useState)(!0),[q,R]=(0,i.useState)(!1),[P,k]=(0,i.useState)([]),[C,w]=(0,i.useState)(""),{getAllMeetingByMentor:M,getAllMeetingByMentorRefetch:E}=(0,s.J4)({data:{mid:n,limit:10,search:u,page:h},skip:!n});(0,i.useEffect)((()=>{n&&(y(!0),E())}),[n,h,u,E]),(0,i.useEffect)((()=>{p&&b&&A((e=>e+1))}),[p,b]),(0,i.useEffect)((()=>{var e,n;q?(k(null===M||void 0===M?void 0:M.all_meet),y(!1),R(!1)):u?(k(null===M||void 0===M?void 0:M.all_meet),y(!1)):null!==M&&void 0!==M&&M.all_meet?(k((e=>{var n,t;return null===(n=[...new Set(null===(t=[...e,...null===M||void 0===M?void 0:M.all_meet])||void 0===t?void 0:t.map(JSON.stringify))])||void 0===n?void 0:n.map(JSON.parse)})),y(!1)):0===(null===M||void 0===M||null===(n=M.all_meet)||void 0===n?void 0:n.length)&&y(!1);10===(null===M||void 0===M||null===(e=M.all_meet)||void 0===e?void 0:e.length)?x(!0):x(!1)}),[null===M||void 0===M?void 0:M.all_meet]);const F=()=>{m(!1),w("")},T=()=>{A(1),R(!0),y(!0),E()};return(0,v.jsxs)(v.Fragment,{children:["By_Student"===l?null:(0,v.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:(0,v.jsx)("p",{className:a.Z.add_new_category,onClick:()=>{m((e=>!e)),w("")},children:c("add_new_meeting")})}),null===P||void 0===P?void 0:P.map(((e,i)=>(null===P||void 0===P?void 0:P.length)===i+1?(0,v.jsx)("div",{ref:f,children:(0,v.jsx)(Z,{queryFlow:l,meeting_detail:e,carryParentState:t,onRefetch:T,mid:n})},null===e||void 0===e?void 0:e._id):(0,v.jsx)(Z,{queryFlow:l,meeting_detail:e,carryParentState:t,onRefetch:T,mid:n},null===e||void 0===e?void 0:e._id))),j&&(0,v.jsx)(o.Z,{}),"RECORD"===C&&(0,v.jsx)(S,{onClose:F,mid:n,onRefetch:T,type:C}),"SCHEDULE"===C&&(0,v.jsx)(S,{onClose:F,mid:n,onRefetch:T,type:C}),d&&(0,v.jsx)(N,{onClose:()=>m(!1),onStep:w})]})}},12072:(e,n,t)=>{t.d(n,{Z:()=>o});t(72791);var i=t(54164);const a="Overlay_overlay_card__PAr1h";var _=t(80184);const o=e=>{let{children:n,customStyle:t}=e;return(0,_.jsx)(_.Fragment,{children:i.createPortal((0,_.jsx)("div",{className:a,style:{...t},children:n}),document.getElementById("overlay"))})}},84489:(e,n,t)=>{t.d(n,{Z:()=>_});t(72791);var i=t(51857),a=t(80184);const _=e=>{let{onClose:n,customStyleBackdrop:t}=e;return(0,a.jsx)("div",{className:i.Z.search_backdrop,style:{...t},onClick:n})}},98094:(e,n,t)=>{t.d(n,{Z:()=>_});t(72791);var i=t(55136),a=t(80184);const _=e=>{let{customStyle:n}=e;return(0,a.jsx)("hr",{className:i.Z.universal_hr,style:{...n}})}},90865:(e,n,t)=>{t.d(n,{Z:()=>r});t(72791);var i=t(89891),a=t(39320),_=t(80184);const o={inputProps:{"aria-label":"Switch demo"}},r=e=>{let{customContainer:n,customLabel:t,labelDescription:r,labelHeading:s,defaultLabel:l,checkedToggle:c,onToggleHandler:d,children:m}=e;return(0,_.jsxs)("div",{className:a.Z.form_toggle_container,style:{...n},children:[(0,_.jsxs)("div",{className:a.Z.form_toggle_label,children:[l?(0,_.jsx)(i.Z,{...o,defaultChecked:!0,disabled:!0}):(0,_.jsx)(i.Z,{...o,checked:c,onChange:d}),(0,_.jsx)("span",{style:{...t},children:s})]}),r&&(0,_.jsx)("div",{className:a.Z.form_toggle_description,children:r}),m]})}},12143:(e,n,t)=>{t.d(n,{Z:()=>i});const i={mentor_card_container:"Mentor_mentor_card_container__05bPk",mentor_card_int:"Mentor_mentor_card_int__-SwSR",mentor_container_inner:"Mentor_mentor_container_inner__kxUWv",student_container_inner:"Mentor_student_container_inner__2fDwu",mentor_rating:"Mentor_mentor_rating__FHWQG",student_inner_bottom:"Mentor_student_inner_bottom__zhsin",student_card_container:"Mentor_student_card_container__+UobV",feedback_question_container:"Mentor_feedback_question_container__YqWeu",feedback_question_heading:"Mentor_feedback_question_heading__FdGSW",feedback_question_option:"Mentor_feedback_question_option__Axxci",option_selected_cover:"Mentor_option_selected_cover__Ygo7Z",remove_btn:"Mentor_remove_btn__Waxwz"}},60163:(e,n,t)=>{t.d(n,{Z:()=>i});const i={view_container:"SeatingArrangement_view_container__bUmfL",exam_info_container:"SeatingArrangement_exam_info_container__RjYB+",subject_container:"SeatingArrangement_subject_container__EBIQV",class_container:"SeatingArrangement_class_container__J6L8g",subject_container_active:"SeatingArrangement_subject_container_active__fUoy9",class_container_active:"SeatingArrangement_class_container_active__hbhBl",exam_detail_h6:"SeatingArrangement_exam_detail_h6__SQnZ6",subject_other:"SeatingArrangement_subject_other__dpqAI",subject_standard:"SeatingArrangement_subject_standard__FK2GD",schedule_subject_container:"SeatingArrangement_schedule_subject_container__RCY4e",exam_schedule:"SeatingArrangement_exam_schedule__Ltz8X",exam_schedule_btn:"SeatingArrangement_exam_schedule_btn__6WLWQ",exam_schedule_btn_active:"SeatingArrangement_exam_schedule_btn_active__0WoVw",with_search:"SeatingArrangement_with_search__SALlM",search_container:"SeatingArrangement_search_container__wBtKO",search_container_input:"SeatingArrangement_search_container_input__MdE8y",searchIcon:"SeatingArrangement_searchIcon__v17wZ",search_container_filter:"SeatingArrangement_search_container_filter__U4+L3",seating_block_container:"SeatingArrangement_seating_block_container__LanEx",seating_block_container_top:"SeatingArrangement_seating_block_container_top__Zx7Xx",seating_examination_container:"SeatingArrangement_seating_examination_container__Qmzlx",add_plus_icon:"SeatingArrangement_add_plus_icon__XMs9q",seating_modal:"SeatingArrangement_seating_modal__KXmmt",seating_modal_title:"SeatingArrangement_seating_modal_title__n5NPd",seating_modal_title_left:"SeatingArrangement_seating_modal_title_left__c3bLq",attendance_text:"SeatingArrangement_attendance_text__rYloc",person_container:"SeatingArrangement_person_container__mAQ99",person_container_text:"SeatingArrangement_person_container_text__jdXSr",select_schedule_exam_btn:"SeatingArrangement_select_schedule_exam_btn__S0NEH",select_exam_btn:"SeatingArrangement_select_exam_btn__+4Cfu",attendance_next_btn:"SeatingArrangement_attendance_next_btn__FsVj0",select_select_btn:"SeatingArrangement_select_select_btn__90L6F",menu_icon:"SeatingArrangement_menu_icon__fe2sq",next_btn:"SeatingArrangement_next_btn__bJLuc",select_mutliple:"SeatingArrangement_select_mutliple__ZlMYC",with_check_container:"SeatingArrangement_with_check_container__ubHra",classes_main_container:"SeatingArrangement_classes_main_container__hNfFF",classes_count_container:"SeatingArrangement_classes_count_container__zMhQZ",start_arrangement_btn:"SeatingArrangement_start_arrangement_btn__vCWwG",add_container:"SeatingArrangement_add_container__K2YZu",add_aubject:"SeatingArrangement_add_aubject__N8QHE",update_btn:"SeatingArrangement_update_btn__S6RfH",grade_system_header:"SeatingArrangement_grade_system_header__OPNNu",grade_system_body:"SeatingArrangement_grade_system_body__kT2XX",fee_head_amount_input:"SeatingArrangement_fee_head_amount_input__Cne0S",normal_confirm_btn:"SeatingArrangement_normal_confirm_btn__SCJLQ",application_card:"SeatingArrangement_application_card__J0Tla",application_card_active:"SeatingArrangement_application_card_active__B39Jf",application_card_title:"SeatingArrangement_application_card_title__ywJUk",application_card_info:"SeatingArrangement_application_card_info__tqOOU",assignment_btn:"SeatingArrangement_assignment_btn__2mbx0",assignment_btn_active:"SeatingArrangement_assignment_btn_active__KpRrq",exam_co_attainment_type:"SeatingArrangement_exam_co_attainment_type__BU4Oo"}},15961:(e,n,t)=>{t.d(n,{Z:()=>i});const i={admission_application_container:"AdmissionApplicationRequest_admission_application_container__iMsyZ",moderator_container_title:"AdmissionApplicationRequest_moderator_container_title__5WiPB",with_search:"AdmissionApplicationRequest_with_search__mm0Q+",search_container:"AdmissionApplicationRequest_search_container__3swMB",search_container_input:"AdmissionApplicationRequest_search_container_input__InEPj",searchIcon:"AdmissionApplicationRequest_searchIcon__RdABM",search_container_filter:"AdmissionApplicationRequest_search_container_filter__fEHEF",remainingFees:"AdmissionApplicationRequest_remainingFees__X9g5z",ongoing_card:"AdmissionApplicationRequest_ongoing_card__1TVLc",ongoing_card_inner:"AdmissionApplicationRequest_ongoing_card_inner__1Gato",ongoing_card_text:"AdmissionApplicationRequest_ongoing_card_text__AKxnS",menu_icon:"AdmissionApplicationRequest_menu_icon__F3nQo",add_new_category:"AdmissionApplicationRequest_add_new_category__ZTInw",applicant_card_container:"AdmissionApplicationRequest_applicant_card_container__7UN2C",applicant_card_container_hover:"AdmissionApplicationRequest_applicant_card_container_hover__mP-Wa",applicant_card_container_active:"AdmissionApplicationRequest_applicant_card_container_active__5VW5x",applicant_card_inner:"AdmissionApplicationRequest_applicant_card_inner__kSbmI",applicant_card_inner_info:"AdmissionApplicationRequest_applicant_card_inner_info__8POe8",applicant_card_contact:"AdmissionApplicationRequest_applicant_card_contact__Ipapl",applicant_card_contact_inner:"AdmissionApplicationRequest_applicant_card_contact_inner__dDeFH",application_button:"AdmissionApplicationRequest_application_button__a2s6z",selectAppBtnContainer:"AdmissionApplicationRequest_selectAppBtnContainer__d0wD6",selectBtnContainer:"AdmissionApplicationRequest_selectBtnContainer__Si3QU",selectBtn:"AdmissionApplicationRequest_selectBtn__A0SVG",cancelledBtn:"AdmissionApplicationRequest_cancelledBtn__wEX7V",notConfirmedBtn:"AdmissionApplicationRequest_notConfirmedBtn__wZb02",onlineBtn:"AdmissionApplicationRequest_onlineBtn__v+gwq",cancelStatus:"AdmissionApplicationRequest_cancelStatus__qYDFg",checkbox:"AdmissionApplicationRequest_checkbox__tlbdN",back_icon:"AdmissionApplicationRequest_back_icon__gIdbd",receipt_requested_btn:"AdmissionApplicationRequest_receipt_requested_btn__stgcE",not_confirm_container:"AdmissionApplicationRequest_not_confirm_container__+r4pJ",applicant_profile:"AdmissionApplicationRequest_applicant_profile__kHoFd",applicant_profile_text:"AdmissionApplicationRequest_applicant_profile_text__wgySz",button_group:"AdmissionApplicationRequest_button_group__LKrUN",admission_collect_docs:"AdmissionApplicationRequest_admission_collect_docs__+-jUT",confirm_btn:"AdmissionApplicationRequest_confirm_btn__njvM8",admission_modal:"AdmissionApplicationRequest_admission_modal__a3Dx6",admission_modal_heading:"AdmissionApplicationRequest_admission_modal_heading__7i6gM",admission_fees_row:"AdmissionApplicationRequest_admission_fees_row__Ykj39",admission_confirm_class_card:"AdmissionApplicationRequest_admission_confirm_class_card__Ytr77",admission_confirm_batch_card:"AdmissionApplicationRequest_admission_confirm_batch_card__Cuven",admission_confirm_class_count:"AdmissionApplicationRequest_admission_confirm_class_count__P-bt1",admission_class_confirm:"AdmissionApplicationRequest_admission_class_confirm__SMLDh",mulitple_select_btn:"AdmissionApplicationRequest_mulitple_select_btn__WOWDd",end_btn:"AdmissionApplicationRequest_end_btn__vgxwG",admission_mulit_select:"AdmissionApplicationRequest_admission_mulit_select__ggFWa",admission_mulit_select_right:"AdmissionApplicationRequest_admission_mulit_select_right__K51Rw",os_reminder:"AdmissionApplicationRequest_os_reminder__AHp8F",os_filter_container:"AdmissionApplicationRequest_os_filter_container__Ck0gz",ongoing_card_count_date:"AdmissionApplicationRequest_ongoing_card_count_date__xi1+1",ongoing_card_count_container:"AdmissionApplicationRequest_ongoing_card_count_container__af9uG",applicant_card_reciept:"AdmissionApplicationRequest_applicant_card_reciept__QR+Ho",transfer_container:"AdmissionApplicationRequest_transfer_container__y5X5q",transfer_select_btn:"AdmissionApplicationRequest_transfer_select_btn__u8NkN",remove_btn:"AdmissionApplicationRequest_remove_btn__Lmhuv"}},51857:(e,n,t)=>{t.d(n,{Z:()=>i});const i={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},55136:(e,n,t)=>{t.d(n,{Z:()=>i});const i={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7",ospp_header:"StaffProfile_ospp_header__oteF5",ospph_img:"StaffProfile_ospph_img__gPivu",cbc_row:"StaffProfile_cbc_row__rm60T",certificate_btn:"StaffProfile_certificate_btn__3NWfg"}},39320:(e,n,t)=>{t.d(n,{Z:()=>i});const i={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=86703.1cd2d61b.chunk.js.map