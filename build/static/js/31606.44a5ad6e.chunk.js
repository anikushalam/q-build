"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[31606],{60234:(e,a,t)=>{t.d(a,{UM:()=>z,Kr:()=>D,Sr:()=>T,HN:()=>w,Q4:()=>Y,Xx:()=>O,qT:()=>Q,pG:()=>L,TM:()=>P,ED:()=>q,bI:()=>R,QK:()=>Z});var n=t(81078),l=t(94811);const s=e=>e.query({query:e=>"/ins/".concat(e.id,"/approve-staff/list?page=").concat(e.page,"&limit=").concat(e.limit,"&date=").concat(e.date?e.date:""),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:e=>null===e||void 0===e?void 0:e.staffIns,forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),c=e=>e.query({query:e=>"/attendance/staff/institute/".concat(e.id,"?date=").concat(null===e||void 0===e?void 0:e.date),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:e=>null===e||void 0===e?void 0:e.attendance,forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),o=e=>e.mutation({query:e=>({url:"/attendance/staff/institute/".concat(e.id),method:l.a4,body:e.attendance})}),i=e=>e.mutation({query:e=>({url:"/attendance/staff/update/".concat(e.aid),method:l.Q0,body:e.attendance})}),r=e=>e.query({query:e=>"/attendance/staff/calendar/".concat(e.sid,"?month=").concat(e.month,"&year=").concat(e.year),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:e=>null===e||void 0===e?void 0:e.calendar,forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),d=e=>e.query({query:e=>"/attendance/staff/today/".concat(e.id,"/stats/query"),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:e=>null===e||void 0===e?void 0:e.stats,forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),u=e=>e.query({query:e=>"/attendance/staff/today/one/".concat(e.aid,"/stats/list/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_staff}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_staff},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),v=e=>e.query({query:e=>"/attendance/staff/timetable/".concat(e.id,"/stats/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.cls_list}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.cls_list},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),f=e=>e.query({query:e=>"/attendance/staff/timetable/class/".concat(e.cid,"/stats/subject/list/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.subject_list}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.subject_list},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),h=e=>e.query({query:e=>"/attendance/staff/teaching/plan/".concat(e.id,"/stats/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.teaching_plan}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.teaching_plan},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),_=e=>e.query({query:e=>"/attendance/staff/teaching/plan/".concat(e.id,"/staff/").concat(e.sid,"/stats/subject/list/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:(e,a,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.subject_list}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.subject_list},merge:(e,a)=>{var t;return null!==a&&void 0!==a&&a.search||1===(null===a||void 0===a?void 0:a.page)?a:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===a||void 0===a?void 0:a.list))},forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),g=e=>e.query({query:e=>"/attendance/staff/profile/stats/".concat(e.sid,"/query?from=").concat(null===e||void 0===e?void 0:e.from,"&to=").concat(e.to),serializeQueryArgs:e=>{let{endpointName:a}=e;return a},transformResponse:e=>null===e||void 0===e?void 0:e.stats,forceRefetch(e){let{currentArg:a,previousArg:t}=e;return a!==t}}),p=n.L.injectEndpoints({endpoints:e=>({staffOneInstituteList:s(e),staffGetAttendance:c(e),staffMarkAttendance:o(e),staffUpdateAttendance:i(e),staffOneAttendanceCalendar:r(e),staffTodayAttendaceStats:d(e),staffTodayAttendaceStaffListStats:u(e),staffTimetableStats:v(e),staffTimetableSubjectListStats:f(e),staffTeachingPlanStats:h(e),staffTeachingPlanSubjectListStats:_(e),staffAttendaceProfileStats:g(e)})}),{useStaffOneInstituteListQuery:m,useStaffGetAttendanceQuery:y,useStaffMarkAttendanceMutation:x,useStaffUpdateAttendanceMutation:j,useStaffOneAttendanceCalendarQuery:b,useStaffTodayAttendaceStatsQuery:S,useStaffTodayAttendaceStaffListStatsQuery:N,useStaffTimetableStatsQuery:C,useStaffTimetableSubjectListStatsQuery:k,useStaffTeachingPlanStatsQuery:A,useStaffTeachingPlanSubjectListStatsQuery:F,useStaffAttendaceProfileStatsQuery:M}=p,Y=e=>{const{data:a,refetch:t,isFetching:n}=m(e.data,{skip:e.skip});return{staffOneInstituteList:a,staffOneInstituteListRefetch:t,staffOneInstituteListLoading:n}},D=e=>{const{data:a,refetch:t,isFetching:n}=y(e.data,{skip:e.skip});return{staffGetAttendance:a,staffGetAttendanceRefetch:t,staffGetAttendanceLoading:n}},T=()=>{const[e]=x();return[e]},Z=()=>{const[e]=j();return[e]},w=e=>{const{data:a,refetch:t,isFetching:n}=b(e.data,{skip:e.skip});return{staffOneAttendanceCalendar:a,staffOneAttendanceCalendarRefetch:t,staffOneAttendanceCalendarLoading:n}},R=e=>{const{data:a,refetch:t,isFetching:n}=S(e.data,{skip:e.skip});return{staffTodayAttendaceStats:a,staffTodayAttendaceStatsRefetch:t,staffTodayAttendaceStatsLoading:n}},q=e=>{const{data:a,refetch:t,isFetching:n}=N(e.data,{skip:e.skip});return{staffTodayAttendaceStaffListStats:a,staffTodayAttendaceStaffListStatsRefetch:t,staffTodayAttendaceStaffListStatsLoading:n}},L=e=>{const{data:a,refetch:t,isFetching:n}=C(e.data,{skip:e.skip});return{staffTimetableStats:a,staffTimetableStatsRefetch:t,staffTimetableStatsLoading:n}},P=e=>{const{data:a,refetch:t,isFetching:n}=k(e.data,{skip:e.skip});return{staffTimetableSubjectListStats:a,staffTimetableSubjectListStatsRefetch:t,staffTimetableSubjectListStatsLoading:n}},O=e=>{const{data:a,refetch:t,isFetching:n}=A(e.data,{skip:e.skip});return{staffTeachingPlanStats:a,staffTeachingPlanStatsRefetch:t,staffTeachingPlanStatsLoading:n}},Q=e=>{const{data:a,refetch:t,isFetching:n}=F(e.data,{skip:e.skip});return{staffTeachingPlanSubjectListStats:a,staffTeachingPlanSubjectListStatsRefetch:t,staffTeachingPlanSubjectListStatsLoading:n}},z=e=>{const{data:a,refetch:t,isFetching:n}=M(e.data,{skip:e.skip});return{staffAttendaceProfileStats:a,staffAttendaceProfileStatsRefetch:t,staffAttendaceProfileStatsLoading:n}}},11163:(e,a,t)=>{t.d(a,{BK:()=>f,Ff:()=>o,GX:()=>m,S4:()=>d,o:()=>h,oz:()=>i});var n=t(72791),l=t(43997),s=t(97892),c=t.n(s);const o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],r={0:4,1:3,2:4,3:3,4:4,5:3,6:4,7:4,8:3,9:4,10:3,11:4},d=()=>{let e=(new Date).getFullYear(),a=e-70,t=[];for(let n=e+30;n>=a;n--)t.push(n);return t.reverse()},u=[1,2,3,4,5,6,0],v=()=>new Date,f=(e,a)=>{var t,n;let s;s=a?null===(t=c()(e))||void 0===t?void 0:t.format("YYYY-MM-DD"):(0,l.O_)(e);let o=new Date,i=null===(n=c()(o))||void 0===n?void 0:n.format("YYYY-MM-DD"),r=new Date("".concat(s)),d=new Date("".concat(i));return r.getTime()===d.getTime()},h=(e,a)=>e===(e=>{let a=null===e||void 0===e?void 0:e.split("-"),t=(null===a||void 0===a?void 0:a[0])>9?null===a||void 0===a?void 0:a[0]:"0".concat(null===a||void 0===a?void 0:a[0]),n=(null===a||void 0===a?void 0:a[1])>9?null===a||void 0===a?void 0:a[1]:"0".concat(null===a||void 0===a?void 0:a[1]);return"".concat(t,"/").concat(n,"/").concat(null===a||void 0===a?void 0:a[2])})(a),_=e=>(e=>{let a=new Date(e);return new Date(a.getFullYear(),a.getMonth()+1,0)})(e).getDate(),g=e=>(e=>{let a=new Date(e);return new Date(a.getFullYear(),a.getMonth(),0)})(e).getDate(),p=e=>u.indexOf((e=>{let a=new Date(e);return new Date(a.getFullYear(),a.getMonth(),1).getDay()})(e)),m=e=>{const[a,t]=(0,n.useState)(v());(0,n.useEffect)((()=>{e&&t((e=>{let a=(0,l.O_)(e);return new Date(a)})(e))}),[e]);const s=g(c=a)-p(c);var c;const d=(0,n.useMemo)((()=>((e,a)=>{let t=1,n=1,l=new Date(e);const s={};for(let c=1;c<7;c++){s[c]=[];for(let i=1;i<8;i++)if(1===c)if(i<=p(e)+1){let e=l.getMonth()+1,n="".concat(l.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(t>9?t:"0".concat(t)),i=new Date(n);s[c]=[...s[c],{type:"PREVIOUS",date:"".concat(a,"-").concat(0===l.getMonth()?12:l.getMonth(),"-").concat(0===l.getMonth()?l.getFullYear()-1:l.getFullYear()),value:a,day:o[i.getDay()]}],++a}else{let e=l.getMonth()+1,a="".concat(l.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(t>9?t:"0".concat(t)),n=new Date(a);s[c]=[...s[c],{type:"CURRENT",date:"".concat(t,"-").concat(l.getMonth()+1,"-").concat(l.getFullYear()),value:t,day:o[n.getDay()]}],t++}else if(c>1&&t<_(e)+1){let e=l.getMonth()+1,a="".concat(l.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(t>9?t:"0".concat(t)),n=new Date(a);s[c]=[...s[c],{type:"CURRENT",date:"".concat(t,"-").concat(l.getMonth()+1,"-").concat(l.getFullYear()),value:t,day:o[n.getDay()]}],t++}else{let e=l.getMonth()+1,a="".concat(l.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(t>9?t:"0".concat(t)),i=new Date(a);s[c]=[...s[c],{type:"NEXT_MONTH",date:"".concat(n,"-").concat(l.getMonth()+2===13?1:l.getMonth()+2,"-").concat(l.getMonth()+2===13?l.getFullYear()+1:l.getFullYear()),value:n,day:o[i.getDay()]}],n++}}return s})(a,s)),[a,s]),u=(0,n.useCallback)((()=>{t((e=>new Date(e.getFullYear(),e.getMonth()-1,1)))}),[]),f=(0,n.useCallback)((()=>{t((e=>new Date(e.getFullYear(),e.getMonth()+1,1)))}),[]),m=(0,n.useCallback)((e=>{let a=null===e||void 0===e?void 0:e.split("-"),n=new Date("".concat(a[2],"-").concat(a[1],"-").concat(a[0]));t(n)}),[]);return{selectedDate:a,setSelectedDate:t,getPreviousMonth:u,getNextMonth:f,getSelectedDate:m,generateCalendar:d,getToday:v,dayName:o,monthName:i,getCompareDate:h,monthPage:r}}},60924:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(39230),l=t(52245),s=t(72791),c=t(11163),o=t(8728),i=t(48293),r=t(98684),d=t(97892),u=t.n(d),v=t(80184);const f=e=>{var a;let{onClose:t,date:n,onDateSelect:l}=e;const{selectedDate:d,setSelectedDate:f,getPreviousMonth:h,getNextMonth:_,getSelectedDate:g,generateCalendar:p}=(0,c.GX)(n),[m,y]=(0,s.useState)(""),x=(0,c.S4)(),j=(0,s.useMemo)((()=>x.indexOf(d.getFullYear())),[d,x]),[b,S]=(0,s.useState)(0),N=(0,s.useMemo)((()=>x.slice(j+12*b,b?j+12*b+12:j+12)),[x,b,j]),C=(0,s.useCallback)((()=>{y(m?"":"MONTH")}),[m]),k=(0,s.useCallback)((()=>{y(m?"":"YEAR")}),[m]),A=(0,s.useCallback)((e=>{f((a=>new Date("".concat(e," ").concat(a.getDate()," ").concat(a.getFullYear())))),C()}),[C]),F=(0,s.useCallback)((e=>{f((a=>new Date("".concat(a.getMonth()+1," ").concat(a.getDate()," ").concat(e)))),k()}),[k]);return(0,v.jsx)(i.Z,{onClose:t,customBackdropStyle:{zIndex:"2000"},customOverlayStyle:{zIndex:"2000"},children:(0,v.jsxs)("div",{className:o.Z.calendar,children:[(0,v.jsxs)("div",{className:o.Z.calendar_top,children:[(0,v.jsx)("img",{src:"".concat(r.Fk,"/next.svg"),alt:"previous icon",onClick:()=>{m?"YEAR"===m&&S((e=>e-1)):h()},style:{rotate:"180deg"}}),(0,v.jsxs)("h6",{children:[(0,v.jsx)("span",{onClick:C,children:u()(d).format("MMMM")})," ",(0,v.jsx)("span",{onClick:k,children:u()(d).format("YYYY")})]}),(0,v.jsx)("img",{src:"".concat(r.Fk,"/next.svg"),alt:"next icon",onClick:()=>{m?"YEAR"===m&&S((e=>e+1)):_()}})]}),"MONTH"===m?(0,v.jsx)("div",{className:o.Z.calendar_month,children:c.oz.map((e=>(0,v.jsx)("p",{className:u()(d).format("MMMM")===e?"".concat(o.Z.calendar_month_value," ").concat(o.Z.calendar_month_value_active):o.Z.calendar_month_value,onClick:()=>A(e),children:e},e)))}):"YEAR"===m?(0,v.jsx)("div",{className:o.Z.calendar_month,children:null===N||void 0===N?void 0:N.map((e=>(0,v.jsx)("p",{className:u()(d).format("YYYY")==="".concat(e)?"".concat(o.Z.calendar_month_value," ").concat(o.Z.calendar_month_value_active):o.Z.calendar_month_value,onClick:()=>F(e),children:e},e)))}):(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:o.Z.calendar_days,children:c.Ff.map((e=>(0,v.jsx)("p",{className:o.Z.calendar_days_label,children:e},e)))}),null===(a=Object.values(p))||void 0===a?void 0:a.map(((e,a)=>(0,v.jsx)("div",{className:o.Z.calendar_days,children:e.map((e=>(0,v.jsx)("p",{className:o.Z.calendar_days_value,style:{"--calendar-border":(0,c.BK)(null===e||void 0===e?void 0:e.date)?"#123456":(0,c.o)(d,null===e||void 0===e?void 0:e.date)?"red":""},onClick:()=>{return a=null===e||void 0===e?void 0:e.date,g(a),l(a),void t();var a},children:null===e||void 0===e?void 0:e.value},null===e||void 0===e?void 0:e.date)))},a)))]})]})})},h=e=>{let{label:a,name:t,msg:c,value:o,onChange:i,placeholder:d,customFormInputContainer:u,customFormInputLabel:h,customFormInput:_,errorShow:g,disabled:p}=e;const{t:m}=(0,n.$G)(),[y,x]=(0,s.useState)(!1),j=()=>{x((e=>!e))};return(0,v.jsxs)("div",{className:l.Z.form_input_container,style:u,children:[a&&(0,v.jsxs)("label",{className:l.Z.form_input_label,style:h,htmlFor:t,children:[a,c?(0,v.jsx)("span",{className:l.Z.form_input_label_error,children:c}):g?(0,v.jsxs)("span",{className:l.Z.form_input_label_error,children:["* ",m("form_require_label")]}):null]}),(0,v.jsx)("input",{className:l.Z.form_input,type:"text",defaultValue:o,name:t,placeholder:d,disabled:p,style:_,onFocus:j}),(0,v.jsx)("img",{src:"".concat(r.Fk,"/calendar.svg"),alt:"calander-icon",className:l.Z.form_calendar_icon,onClick:j}),y&&(0,v.jsx)(f,{onClose:j,onDateSelect:i,date:o})]})}},31606:(e,a,t)=>{t.r(a),t.d(a,{default:()=>q});var n=t(72791),l=t(39230);const s="StaffProfile_spa_card__ba62q",c="StaffProfile_spa_calendar__C+9c9",o="StaffProfile_spac_inner__3MmHG",i="StaffProfile_shades__bBXVz",r="StaffProfile_spac_other__XlgYQ",d="StaffProfile_spac_container__zu4CD",u="StaffProfile_spac_container_inner__tRCb5",v="StaffProfile_spac_count__TiwVd";var f=t(98684),h=t(12770),_=t(11163),g=t(97892),p=t.n(g),m=t(80184);const y=e=>{var a;let{list:t,isMonth:l,onChange:s}=e;const{selectedDate:c,getPreviousMonth:o,getNextMonth:i,generateCalendar:r}=(0,_.GX)();return(0,n.useEffect)((()=>{l&&s(c)}),[l,c]),(0,m.jsxs)("div",{className:h.Z.calendar,children:[(0,m.jsxs)("div",{className:h.Z.calendar_top,children:[(0,m.jsx)("img",{src:"".concat(f.Fk,"/next.svg"),alt:"previous icon",onClick:()=>{o()},style:{rotate:"180deg"}}),(0,m.jsxs)("h6",{children:[(0,m.jsx)("span",{children:p()(c).format("MMMM")})," ",(0,m.jsx)("span",{children:p()(c).format("YYYY")})]}),(0,m.jsx)("img",{src:"".concat(f.Fk,"/next.svg"),alt:"next icon",onClick:()=>{i()}})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:h.Z.calendar_days,children:_.Ff.map((e=>(0,m.jsx)("p",{className:h.Z.calendar_days_label,children:e},e)))}),null===(a=Object.values(r))||void 0===a?void 0:a.map(((e,a)=>(0,m.jsx)("div",{className:h.Z.calendar_days,children:e.map((e=>(0,m.jsxs)("p",{className:h.Z.calendar_days_value,style:{"--calendar-border":(0,_.BK)(null===e||void 0===e?void 0:e.date)?"#420789":""},onClick:()=>{null===e||void 0===e||e.date},children:[null===e||void 0===e?void 0:e.value,(0,m.jsx)("div",{className:h.Z.calendar_dot,style:{"--dot-color":t?x[t[j(null===e||void 0===e?void 0:e.date)]]:""}})]},null===e||void 0===e?void 0:e.date)))},a)))]})]})},x={P:"rgba(37, 172, 74, 0.8)",L:"#00308F",A:"#ee3833",H:"#cacaca"},j=e=>{let a=null===e||void 0===e?void 0:e.split("-"),t=(null===a||void 0===a?void 0:a[0])>9?null===a||void 0===a?void 0:a[0]:"0".concat(null===a||void 0===a?void 0:a[0]),n=(null===a||void 0===a?void 0:a[1])>9?null===a||void 0===a?void 0:a[1]:"0".concat(null===a||void 0===a?void 0:a[1]);return"".concat(t,"/").concat(n,"/").concat(null===a||void 0===a?void 0:a[2])};var b=t(60234);const S=e=>{var a,t,h,_,g,x,j,S;let{step:N,setStep:C,sid:k}=e;const{t:A}=(0,l.$G)(),[F,M]=(0,n.useState)(p()().format("MM")),{staffOneAttendanceCalendar:Y}=(0,b.HN)({data:{sid:k,month:F,year:p()().format("YYYY")},sid:!k});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:s,children:[(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)(y,{list:null===Y||void 0===Y?void 0:Y.dates,isMonth:!0,onChange:e=>{M((()=>p()(e).format("MM")))}}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"rgba(37, 172, 74, 0.8)"},children:A("present")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#ee3833"},children:A("absent")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#121212","--bg-color":"#cacaca"},children:A("holiday")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#00308F"},children:A("leave")})]})]}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("div",{className:u,onClick:()=>C(1),children:[(0,m.jsx)("p",{children:A("monthly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,1===N?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>C(2),children:[(0,m.jsx)("p",{children:A("range")}),(0,m.jsx)("img",{src:"".concat(f.Fk,2===N?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>C(3),children:[(0,m.jsx)("p",{children:A("yearly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,3===N?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:A("present_count")}),(0,m.jsxs)("p",{children:[null!==(a=null===Y||void 0===Y?void 0:Y.present)&&void 0!==a?a:0," "," "," ",A("days")]}),(0,m.jsxs)("p",{children:[null!==(t=null===Y||void 0===Y?void 0:Y.present_percentage)&&void 0!==t?t:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(238, 56, 51, 0.12)"},children:[(0,m.jsx)("p",{children:A("absent_count")}),(0,m.jsxs)("p",{children:[null!==(h=null===Y||void 0===Y?void 0:Y.absent)&&void 0!==h?h:0," "," ",A("days")]}),(0,m.jsxs)("p",{children:[null!==(_=null===Y||void 0===Y?void 0:Y.absent_percentage)&&void 0!==_?_:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:A("leave_with_pay")}),(0,m.jsxs)("p",{children:[null!==(g=null===Y||void 0===Y?void 0:Y.leave_with_pay)&&void 0!==g?g:0," "," ",A("days")]}),(0,m.jsxs)("p",{children:[null!==(x=null===Y||void 0===Y?void 0:Y.leave_with_pay_percentage)&&void 0!==x?x:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:A("on_duty_leave")}),(0,m.jsxs)("p",{children:[null!==(j=null===Y||void 0===Y?void 0:Y.on_duty_leave)&&void 0!==j?j:0," "," ",A("days")]}),(0,m.jsxs)("p",{children:[null!==(S=null===Y||void 0===Y?void 0:Y.on_duty_leave_percentage)&&void 0!==S?S:0,"%"]})]})]})]})})},N=e=>{var a,t,n,h,_,g,x,j;let{step:S,setStep:N,sid:C}=e;const{t:k}=(0,l.$G)(),{staffOneAttendanceCalendar:A}=(0,b.HN)({data:{sid:C,month:"",year:p()().format("YYYY")},sid:!C});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:s,children:[(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)(y,{list:null===A||void 0===A?void 0:A.dates}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"rgba(37, 172, 74, 0.8)"},children:k("present")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#ee3833"},children:k("absent")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#121212","--bg-color":"#cacaca"},children:k("holiday")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#00308F"},children:k("leave")})]})]}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("div",{className:u,onClick:()=>N(1),children:[(0,m.jsx)("p",{children:k("monthly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,1===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>N(2),children:[(0,m.jsx)("p",{children:k("range")}),(0,m.jsx)("img",{src:"".concat(f.Fk,2===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>N(3),children:[(0,m.jsx)("p",{children:k("yearly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,3===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("present_count")}),(0,m.jsxs)("p",{children:[null!==(a=null===A||void 0===A?void 0:A.present)&&void 0!==a?a:0," "," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(t=null===A||void 0===A?void 0:A.present_percentage)&&void 0!==t?t:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(238, 56, 51, 0.12)"},children:[(0,m.jsx)("p",{children:k("absent_count")}),(0,m.jsxs)("p",{children:[null!==(n=null===A||void 0===A?void 0:A.absent)&&void 0!==n?n:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(h=null===A||void 0===A?void 0:A.absent_percentage)&&void 0!==h?h:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("leave_with_pay")}),(0,m.jsxs)("p",{children:[null!==(_=null===A||void 0===A?void 0:A.leave_with_pay)&&void 0!==_?_:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(g=null===A||void 0===A?void 0:A.leave_with_pay_percentage)&&void 0!==g?g:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("on_duty_leave")}),(0,m.jsxs)("p",{children:[null!==(x=null===A||void 0===A?void 0:A.on_duty_leave)&&void 0!==x?x:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(j=null===A||void 0===A?void 0:A.on_duty_leave_percentage)&&void 0!==j?j:0,"%"]})]})]})]})})};var C=t(90904),k=t(48293),A=t(21348),F=t(16925),M=t(43997),Y=t(60924),D=t(99183),T=t(93638);const Z=e=>{let{onClose:a,onSelect:t}=e;const{t:s}=(0,l.$G)(),[c,o]=(0,n.useState)({from:"",to:""}),[i,r]=(0,n.useState)(""),d=(e,a)=>{o((t=>({...t,[a]:(0,M.jh)(e)})))};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(k.Z,{onClose:a,children:(0,m.jsxs)("div",{className:F.Z.modal_container,children:[(0,m.jsx)(A.Z,{children:(0,m.jsxs)("div",{className:F.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:F.Z.modal_container_header,children:(0,m.jsx)("h6",{children:s("select_date_range")})}),(0,m.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:a})]})}),(0,m.jsx)(C.Z,{}),(0,m.jsxs)(A.Z,{customStyle:{paddingTop:"0"},children:[(0,m.jsx)(Y.Z,{label:s("from"),placeholder:s("please_select_start_date"),name:"from",value:c.from,onChange:e=>d(e,"from"),errorShow:i.from}),(0,m.jsx)(Y.Z,{label:s("to"),placeholder:s("please_select_end_date"),name:"to",value:c.to,onChange:e=>d(e,"to"),errorShow:i.to}),(0,m.jsx)(T.Z,{label:"confirm",onAction:()=>{let e=(0,D.l)(c,[]);(0,D.x)(e)?(t(c),a()):r(e)}})]})]})})})};var w=t(55336);const R=e=>{var a,t,h,_,g,p,x,j;let{step:S,setStep:N,sid:C}=e;const{t:k}=(0,l.$G)(),[A,F]=(0,n.useState)(!0),[M,Y]=(0,n.useState)({from:"",to:""}),{staffAttendaceProfileStats:D,staffAttendaceProfileStatsLoading:T}=(0,b.UM)({data:{sid:C,from:M.from,to:M.to},skip:C?!(M.from&&M.to):!C});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:s,children:[(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)(y,{list:null===D||void 0===D?void 0:D.dates}),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"rgba(37, 172, 74, 0.8)"},children:k("present")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#ee3833"},children:k("absent")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#121212","--bg-color":"#cacaca"},children:k("holiday")}),(0,m.jsx)("div",{className:i,style:{"--text-color":"#ffffff","--bg-color":"#00308F"},children:k("leave")})]})]}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("div",{className:u,onClick:()=>N(1),children:[(0,m.jsx)("p",{children:k("monthly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,1===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>N(2),children:[(0,m.jsx)("p",{children:k("range")}),(0,m.jsx)("img",{src:"".concat(f.Fk,2===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]}),(0,m.jsxs)("div",{className:u,onClick:()=>N(3),children:[(0,m.jsx)("p",{children:k("yearly")}),(0,m.jsx)("img",{src:"".concat(f.Fk,3===S?"/radio-blue.svg":"/radio-grey.svg"),alt:"radio icon of attendance"})]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("present_count")}),(0,m.jsxs)("p",{children:[null!==(a=null===D||void 0===D?void 0:D.present)&&void 0!==a?a:0," "," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(t=null===D||void 0===D?void 0:D.present_percentage)&&void 0!==t?t:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(238, 56, 51, 0.12)"},children:[(0,m.jsx)("p",{children:k("absent_count")}),(0,m.jsxs)("p",{children:[null!==(h=null===D||void 0===D?void 0:D.absent)&&void 0!==h?h:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(_=null===D||void 0===D?void 0:D.absent_percentage)&&void 0!==_?_:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("leave_with_pay")}),(0,m.jsxs)("p",{children:[null!==(g=null===D||void 0===D?void 0:D.leave_with_pay)&&void 0!==g?g:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(p=null===D||void 0===D?void 0:D.leave_with_pay_percentage)&&void 0!==p?p:0,"%"]})]}),(0,m.jsxs)("div",{className:v,style:{"--bg-sa-color":"rgba(37, 172, 74, 0.12)"},children:[(0,m.jsx)("p",{children:k("on_duty_leave")}),(0,m.jsxs)("p",{children:[null!==(x=null===D||void 0===D?void 0:D.on_duty_leave)&&void 0!==x?x:0," "," ",k("days")]}),(0,m.jsxs)("p",{children:[null!==(j=null===D||void 0===D?void 0:D.on_duty_leave_percentage)&&void 0!==j?j:0,"%"]})]})]})]}),T&&(0,m.jsx)(w.Z,{}),A&&(0,m.jsx)(Z,{onClose:()=>{F((()=>!1))},onSelect:Y})]})},q=e=>{let{sid:a}=e;const[t,l]=(0,n.useState)(1);return(0,m.jsx)(m.Fragment,{children:1===t?(0,m.jsx)(S,{step:t,setStep:l,sid:a}):2===t?(0,m.jsx)(R,{step:t,setStep:l,sid:a}):3===t?(0,m.jsx)(N,{step:t,setStep:l,sid:a}):null})}},43997:(e,a,t)=>{t.d(a,{O_:()=>s,_1:()=>n,jh:()=>l});const n=e=>{let a=null===e||void 0===e?void 0:e.split("/");return"".concat(a[2],"-").concat(a[1],"-").concat(a[0])},l=e=>{var a;let t=[];return t=null!==e&&void 0!==e&&e.includes("-")?null===e||void 0===e?void 0:e.split("-"):null===e||void 0===e?void 0:e.split("/"),(null===(a=t[2])||void 0===a?void 0:a.length)>2?"".concat(+t[0]>9?t[0]:"0".concat(+t[0]),"/").concat(+t[1]>9?t[1]:"0".concat(+t[1]),"/").concat(t[2]):"".concat(+t[2]>9?t[2]:"0".concat(+t[2]),"/").concat(+t[1]>9?t[1]:"0".concat(+t[1]),"/").concat(t[0])},s=e=>{var a;let t=[];return t=null!==e&&void 0!==e&&e.includes("-")?null===e||void 0===e?void 0:e.split("-"):null===e||void 0===e?void 0:e.split("/"),(null===(a=t[2])||void 0===a?void 0:a.length)>2?"".concat(t[2],"-").concat(+t[1]>9?t[1]:"0".concat(+t[1]),"-").concat(+t[0]>9?t[0]:"0".concat(+t[0])):"".concat(t[0],"-").concat(+t[1]>9?t[1]:"0".concat(+t[1]),"-").concat(+t[2]>9?t[2]:"0".concat(+t[2]))}},12770:(e,a,t)=>{t.d(a,{Z:()=>n});const n={calendar:"StaffCalender_calendar__KTt-K",calendar_top:"StaffCalender_calendar_top__CWwei",calendar_days:"StaffCalender_calendar_days__nXcdt",calendar_days_label:"StaffCalender_calendar_days_label__XxRvS",calendar_days_value:"StaffCalender_calendar_days_value__U2oOE",calendar_days_value_active:"StaffCalender_calendar_days_value_active__rpEkV",calendar_month:"StaffCalender_calendar_month__eJNik",calendar_month_value:"StaffCalender_calendar_month_value__F0ims",calendar_month_value_active:"StaffCalender_calendar_month_value_active__3IVlC",calendar_dot:"StaffCalender_calendar_dot__RSGq+"}},8728:(e,a,t)=>{t.d(a,{Z:()=>n});const n={calendar:"Calendar_calendar__ZZaTt",calendar_top:"Calendar_calendar_top__ADLui",calendar_days:"Calendar_calendar_days__vUwsX",calendar_days_label:"Calendar_calendar_days_label__VF+-3",calendar_days_value:"Calendar_calendar_days_value__cY4KR",calendar_days_value_active:"Calendar_calendar_days_value_active__CC8ZH",calendar_month:"Calendar_calendar_month__iidgh",calendar_month_value:"Calendar_calendar_month_value__nzPqp",calendar_month_value_active:"Calendar_calendar_month_value_active__xUZQL"}}}]);
//# sourceMappingURL=31606.44a5ad6e.chunk.js.map