(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[40547,63687,21348],{60234:(t,e,n)=>{"use strict";n.d(e,{UM:()=>U,Kr:()=>T,Sr:()=>N,HN:()=>O,Q4:()=>w,Xx:()=>q,qT:()=>Z,pG:()=>R,TM:()=>F,ED:()=>C,bI:()=>P,QK:()=>Y});var a=n(81078),i=n(94811);const s=t=>t.query({query:t=>"/ins/".concat(t.id,"/approve-staff/list?page=").concat(t.page,"&limit=").concat(t.limit,"&date=").concat(t.date?t.date:""),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.staffIns,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),r=t=>t.query({query:t=>"/attendance/staff/institute/".concat(t.id,"?date=").concat(null===t||void 0===t?void 0:t.date),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.attendance,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),l=t=>t.mutation({query:t=>({url:"/attendance/staff/institute/".concat(t.id),method:i.a4,body:t.attendance})}),o=t=>t.mutation({query:t=>({url:"/attendance/staff/update/".concat(t.aid),method:i.Q0,body:t.attendance})}),c=t=>t.query({query:t=>"/attendance/staff/calendar/".concat(t.sid,"?month=").concat(t.month,"&year=").concat(t.year),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.calendar,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),d=t=>t.query({query:t=>"/attendance/staff/today/".concat(t.id,"/stats/query"),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.stats,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),u=t=>t.query({query:t=>"/attendance/staff/today/one/".concat(t.aid,"/stats/list/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search,"&flow=").concat(t.flow),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.all_staff}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.all_staff},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),f=t=>t.query({query:t=>"/attendance/staff/timetable/".concat(t.id,"/stats/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.cls_list}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.cls_list},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),v=t=>t.query({query:t=>"/attendance/staff/timetable/class/".concat(t.cid,"/stats/subject/list/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search,"&flow=").concat(t.flow),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.subject_list}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.subject_list},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),h=t=>t.query({query:t=>"/attendance/staff/teaching/plan/".concat(t.id,"/stats/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.teaching_plan}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.teaching_plan},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),_=t=>t.query({query:t=>"/attendance/staff/teaching/plan/".concat(t.id,"/staff/").concat(t.sid,"/stats/subject/list/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search,"&flow=").concat(t.flow),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===t||void 0===t?void 0:t.subject_list}:{page:null===n||void 0===n?void 0:n.page,list:null===t||void 0===t?void 0:t.subject_list},merge:(t,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(n=t.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),m=t=>t.query({query:t=>"/attendance/staff/profile/stats/".concat(t.sid,"/query?from=").concat(null===t||void 0===t?void 0:t.from,"&to=").concat(t.to),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.stats,forceRefetch(t){let{currentArg:e,previousArg:n}=t;return e!==n}}),g=a.L.injectEndpoints({endpoints:t=>({staffOneInstituteList:s(t),staffGetAttendance:r(t),staffMarkAttendance:l(t),staffUpdateAttendance:o(t),staffOneAttendanceCalendar:c(t),staffTodayAttendaceStats:d(t),staffTodayAttendaceStaffListStats:u(t),staffTimetableStats:f(t),staffTimetableSubjectListStats:v(t),staffTeachingPlanStats:h(t),staffTeachingPlanSubjectListStats:_(t),staffAttendaceProfileStats:m(t)})}),{useStaffOneInstituteListQuery:p,useStaffGetAttendanceQuery:y,useStaffMarkAttendanceMutation:b,useStaffUpdateAttendanceMutation:S,useStaffOneAttendanceCalendarQuery:M,useStaffTodayAttendaceStatsQuery:A,useStaffTodayAttendaceStaffListStatsQuery:D,useStaffTimetableStatsQuery:j,useStaffTimetableSubjectListStatsQuery:x,useStaffTeachingPlanStatsQuery:$,useStaffTeachingPlanSubjectListStatsQuery:k,useStaffAttendaceProfileStatsQuery:L}=g,w=t=>{const{data:e,refetch:n,isFetching:a}=p(t.data,{skip:t.skip});return{staffOneInstituteList:e,staffOneInstituteListRefetch:n,staffOneInstituteListLoading:a}},T=t=>{const{data:e,refetch:n,isFetching:a}=y(t.data,{skip:t.skip});return{staffGetAttendance:e,staffGetAttendanceRefetch:n,staffGetAttendanceLoading:a}},N=()=>{const[t]=b();return[t]},Y=()=>{const[t]=S();return[t]},O=t=>{const{data:e,refetch:n,isFetching:a}=M(t.data,{skip:t.skip});return{staffOneAttendanceCalendar:e,staffOneAttendanceCalendarRefetch:n,staffOneAttendanceCalendarLoading:a}},P=t=>{const{data:e,refetch:n,isFetching:a}=A(t.data,{skip:t.skip});return{staffTodayAttendaceStats:e,staffTodayAttendaceStatsRefetch:n,staffTodayAttendaceStatsLoading:a}},C=t=>{const{data:e,refetch:n,isFetching:a}=D(t.data,{skip:t.skip});return{staffTodayAttendaceStaffListStats:e,staffTodayAttendaceStaffListStatsRefetch:n,staffTodayAttendaceStaffListStatsLoading:a}},R=t=>{const{data:e,refetch:n,isFetching:a}=j(t.data,{skip:t.skip});return{staffTimetableStats:e,staffTimetableStatsRefetch:n,staffTimetableStatsLoading:a}},F=t=>{const{data:e,refetch:n,isFetching:a}=x(t.data,{skip:t.skip});return{staffTimetableSubjectListStats:e,staffTimetableSubjectListStatsRefetch:n,staffTimetableSubjectListStatsLoading:a}},q=t=>{const{data:e,refetch:n,isFetching:a}=$(t.data,{skip:t.skip});return{staffTeachingPlanStats:e,staffTeachingPlanStatsRefetch:n,staffTeachingPlanStatsLoading:a}},Z=t=>{const{data:e,refetch:n,isFetching:a}=k(t.data,{skip:t.skip});return{staffTeachingPlanSubjectListStats:e,staffTeachingPlanSubjectListStatsRefetch:n,staffTeachingPlanSubjectListStatsLoading:a}},U=t=>{const{data:e,refetch:n,isFetching:a}=L(t.data,{skip:t.skip});return{staffAttendaceProfileStats:e,staffAttendaceProfileStatsRefetch:n,staffAttendaceProfileStatsLoading:a}}},11163:(t,e,n)=>{"use strict";n.d(e,{BK:()=>v,Ff:()=>l,GX:()=>p,S4:()=>d,o:()=>h,oz:()=>o});var a=n(72791),i=n(43997),s=n(97892),r=n.n(s);const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],c={0:4,1:3,2:4,3:3,4:4,5:3,6:4,7:4,8:3,9:4,10:3,11:4},d=()=>{let t=(new Date).getFullYear(),e=t-70,n=[];for(let a=t+30;a>=e;a--)n.push(a);return n.reverse()},u=[1,2,3,4,5,6,0],f=()=>new Date,v=(t,e)=>{var n,a;let s;s=e?null===(n=r()(t))||void 0===n?void 0:n.format("YYYY-MM-DD"):(0,i.O_)(t);let l=new Date,o=null===(a=r()(l))||void 0===a?void 0:a.format("YYYY-MM-DD"),c=new Date("".concat(s)),d=new Date("".concat(o));return c.getTime()===d.getTime()},h=(t,e)=>t===(t=>{let e=null===t||void 0===t?void 0:t.split("-"),n=(null===e||void 0===e?void 0:e[0])>9?null===e||void 0===e?void 0:e[0]:"0".concat(null===e||void 0===e?void 0:e[0]),a=(null===e||void 0===e?void 0:e[1])>9?null===e||void 0===e?void 0:e[1]:"0".concat(null===e||void 0===e?void 0:e[1]);return"".concat(n,"/").concat(a,"/").concat(null===e||void 0===e?void 0:e[2])})(e),_=t=>(t=>{let e=new Date(t);return new Date(e.getFullYear(),e.getMonth()+1,0)})(t).getDate(),m=t=>(t=>{let e=new Date(t);return new Date(e.getFullYear(),e.getMonth(),0)})(t).getDate(),g=t=>u.indexOf((t=>{let e=new Date(t);return new Date(e.getFullYear(),e.getMonth(),1).getDay()})(t)),p=t=>{const[e,n]=(0,a.useState)(f());(0,a.useEffect)((()=>{t&&n((t=>{let e=(0,i.O_)(t);return new Date(e)})(t))}),[t]);const s=m(r=e)-g(r);var r;const d=(0,a.useMemo)((()=>((t,e)=>{let n=1,a=1,i=new Date(t);const s={};for(let r=1;r<7;r++){s[r]=[];for(let o=1;o<8;o++)if(1===r)if(o<=g(t)+1){let t=i.getMonth()+1,a="".concat(i.getFullYear(),"-").concat(t>9?t:"0".concat(t),"-").concat(n>9?n:"0".concat(n)),o=new Date(a);s[r]=[...s[r],{type:"PREVIOUS",date:"".concat(e,"-").concat(0===i.getMonth()?12:i.getMonth(),"-").concat(0===i.getMonth()?i.getFullYear()-1:i.getFullYear()),value:e,day:l[o.getDay()]}],++e}else{let t=i.getMonth()+1,e="".concat(i.getFullYear(),"-").concat(t>9?t:"0".concat(t),"-").concat(n>9?n:"0".concat(n)),a=new Date(e);s[r]=[...s[r],{type:"CURRENT",date:"".concat(n,"-").concat(i.getMonth()+1,"-").concat(i.getFullYear()),value:n,day:l[a.getDay()]}],n++}else if(r>1&&n<_(t)+1){let t=i.getMonth()+1,e="".concat(i.getFullYear(),"-").concat(t>9?t:"0".concat(t),"-").concat(n>9?n:"0".concat(n)),a=new Date(e);s[r]=[...s[r],{type:"CURRENT",date:"".concat(n,"-").concat(i.getMonth()+1,"-").concat(i.getFullYear()),value:n,day:l[a.getDay()]}],n++}else{let t=i.getMonth()+1,e="".concat(i.getFullYear(),"-").concat(t>9?t:"0".concat(t),"-").concat(n>9?n:"0".concat(n)),o=new Date(e);s[r]=[...s[r],{type:"NEXT_MONTH",date:"".concat(a,"-").concat(i.getMonth()+2===13?1:i.getMonth()+2,"-").concat(i.getMonth()+2===13?i.getFullYear()+1:i.getFullYear()),value:a,day:l[o.getDay()]}],a++}}return s})(e,s)),[e,s]),u=(0,a.useCallback)((()=>{n((t=>new Date(t.getFullYear(),t.getMonth()-1,1)))}),[]),v=(0,a.useCallback)((()=>{n((t=>new Date(t.getFullYear(),t.getMonth()+1,1)))}),[]),p=(0,a.useCallback)((t=>{let e=null===t||void 0===t?void 0:t.split("-"),a=new Date("".concat(e[2],"-").concat(e[1],"-").concat(e[0]));n(a)}),[]);return{selectedDate:e,setSelectedDate:n,getPreviousMonth:u,getNextMonth:v,getSelectedDate:p,generateCalendar:d,getToday:f,dayName:l,monthName:o,getCompareDate:h,monthPage:c}}},90904:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const a="BorderBottom_split_content__RVPoh";var i=n(80184);const s=t=>{let{customStyleBorder:e}=t;return(0,i.jsx)("hr",{className:a,style:e})}},93638:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var a=n(39230),i=n(80476),s=n(80184);const r=t=>{let{label:e,count:n,onAction:r,customStyle:l,isTranslate:o}=t;const{t:c}=(0,a.$G)();return o?(0,s.jsxs)("div",{className:i.Z.create_btn_container,onClick:r,style:l,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,e]}):(0,s.jsxs)("div",{className:i.Z.create_btn_container,onClick:r,style:l,children:[n>0?(0,s.jsxs)("span",{children:[n," "]}):null,c(e)]})}},63687:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(59393),i=n(80184);const s=t=>{let{customStyle:e,children:n}=t;return(0,i.jsx)("div",{className:a.Z.user_member_container_wrapper,style:e,children:n})}},21348:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(59393),i=n(80184);const s=t=>{let{customStyle:e,children:n}=t;return(0,i.jsx)("div",{className:a.Z.user_member_content_wrapper,style:e,children:n})}},40547:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>L});var a=n(39230),i=n(11163),s=n(72791),r=n(51416),l=n(97892),o=n.n(l),c=n(98684),d=n(80184);const u=t=>{let{onDateSelect:e,children:n}=t;const[a,l]=(0,s.useState)(1),{selectedDate:u,getPreviousMonth:f,getNextMonth:v,generateCalendar:h,getToday:_,getSelectedDate:m,getCompareDate:g,monthPage:p}=(0,i.GX)(),y=(0,s.useMemo)((()=>{var t;let e=[];return null===(t=Object.values(h))||void 0===t||t.map((t=>{null===t||void 0===t||t.map((t=>{"NEXT_MONTH"===(null===t||void 0===t?void 0:t.type)||"PREVIOUS"===(null===t||void 0===t?void 0:t.type)||e.push(t)}))})),e}),[h]),b=(0,s.useCallback)((()=>+o()(_()).format("DD")),[_]);(0,s.useEffect)((()=>{b()<=10?l((t=>1)):b()<=20?l((t=>2)):b()<=30?l((t=>3)):l((t=>4))}),[b]);let S=10*(a-1);const M=(0,s.useMemo)((()=>{if((null===y||void 0===y?void 0:y.length)>0){return null===y||void 0===y?void 0:y.slice(S,S+10)}}),[y,S]),A=(0,s.useCallback)((()=>Math.ceil((null===y||void 0===y?void 0:y.length)/10)),[y]);return(0,d.jsxs)("div",{className:r.Z.attendance_card,children:[(0,d.jsxs)("div",{className:r.Z.ac_heading,children:[(0,d.jsxs)("h6",{children:[o()(u).format("MMMM")," ",o()(u).format("YYYY")]}),n]}),(0,d.jsxs)("section",{className:r.Z.attendance_contianer,children:[(0,d.jsx)("div",{className:r.Z.ac_image,onClick:()=>{if(a<=1){let t=o()(u).get("month")-1;l((e=>p[t])),f()}else l((t=>t-1))},children:(0,d.jsx)("img",{src:"".concat(c.Fk,"/next.svg"),alt:"previous icon",style:{rotate:"180deg"}})}),null===M||void 0===M?void 0:M.map((t=>(0,d.jsxs)("p",{className:g(o()(u).format("DD/MM/YYYY"),null===t||void 0===t?void 0:t.date)?"".concat(r.Z.ac_date," ").concat(r.Z.ac_date_active):r.Z.ac_date,onClick:()=>{return n=null===t||void 0===t?void 0:t.date,m(n),void e(n);var n},children:[(0,d.jsx)("span",{className:r.Z.ac_date_vale,children:null===t||void 0===t?void 0:t.value}),(0,d.jsx)("br",{}),null===t||void 0===t?void 0:t.day]},null===t||void 0===t?void 0:t.date))),(0,d.jsx)("div",{className:r.Z.ac_image,onClick:()=>{A()<=a?(l((t=>1)),v()):l((t=>t+1))},children:(0,d.jsx)("img",{src:"".concat(c.Fk,"/next.svg"),alt:"next icon"})})]})]})},f=(0,s.memo)(u);var v=n(90904),h=n(63687),_=n(21348),m=n(1095),g=n(55050);const p=t=>{var e,n,a,i;let{staff:s}=t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("section",{className:g.Z.lmsstlc_card,children:[(0,d.jsx)("img",{src:"".concat(c.Fk,"/radio-grey.svg"),alt:"user avatar"}),(0,d.jsx)("p",{children:null!==(e=null===s||void 0===s?void 0:s.staffROLLNO)&&void 0!==e?e:""}),(0,d.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(m.yI,"/").concat(null===s||void 0===s?void 0:s.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),alt:"user avatar"}),(0,d.jsxs)("h6",{children:[null!==(n=null===s||void 0===s?void 0:s.staffFirstName)&&void 0!==n?n:""," ",null!==(a=null===s||void 0===s?void 0:s.staffMiddleName)&&void 0!==a?a:""," ",null!==(i=null===s||void 0===s?void 0:s.staffLastName)&&void 0!==i?i:""]})]})})},y=t=>{var e,n,a,i;let{staff:s,selectedId:r,onAbsent:l}=t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("section",{className:g.Z.lmsstlc_card,style:{cursor:"pointer"},onClick:()=>{l(null===s||void 0===s?void 0:s._id)},children:[(0,d.jsx)("img",{src:null!==r&&void 0!==r&&r.includes(null===s||void 0===s?void 0:s._id)?"".concat(c.Fk,"/radio-red.svg"):"".concat(c.Fk,"/radio-grey.svg"),alt:"user avatar"}),(0,d.jsx)("p",{children:null!==(e=null===s||void 0===s?void 0:s.staffROLLNO)&&void 0!==e?e:""}),(0,d.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(m.yI,"/").concat(null===s||void 0===s?void 0:s.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),alt:"user avatar"}),(0,d.jsxs)("h6",{children:[null!==(n=null===s||void 0===s?void 0:s.staffFirstName)&&void 0!==n?n:""," ",null!==(a=null===s||void 0===s?void 0:s.staffMiddleName)&&void 0!==a?a:""," ",null!==(i=null===s||void 0===s?void 0:s.staffLastName)&&void 0!==i?i:""]})]})})},b=t=>{var e,n,a,i;let{staff:s,selectedId:r,onPresent:l}=t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("section",{className:g.Z.lmsstlc_card,style:{cursor:"pointer"},onClick:()=>{l(null===s||void 0===s?void 0:s._id)},children:[(0,d.jsx)("img",{src:null!==r&&void 0!==r&&r.includes(null===s||void 0===s?void 0:s._id)?"".concat(c.Fk,"/radio-green.svg"):"".concat(c.Fk,"/radio-grey.svg"),alt:"user avatar"}),(0,d.jsx)("p",{children:null!==(e=null===s||void 0===s?void 0:s.staffROLLNO)&&void 0!==e?e:""}),(0,d.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(m.yI,"/").concat(null===s||void 0===s?void 0:s.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),alt:"user avatar"}),(0,d.jsxs)("h6",{children:[null!==(n=null===s||void 0===s?void 0:s.staffFirstName)&&void 0!==n?n:""," ",null!==(a=null===s||void 0===s?void 0:s.staffMiddleName)&&void 0!==a?a:""," ",null!==(i=null===s||void 0===s?void 0:s.staffLastName)&&void 0!==i?i:""]})]})})},S=t=>{let{staffOneInstituteList:e,step:n,setState:a,state:i,isUpdate:r}=t;const l=(0,s.useCallback)((t=>{var e,n,s;r?null!==i&&void 0!==i&&null!==(e=i.present)&&void 0!==e&&e.includes(t)?a((e=>{var n;return{...e,present:null===e||void 0===e||null===(n=e.present)||void 0===n?void 0:n.filter((e=>e!==t)),absent:[...e.absent,t]}})):null!==i&&void 0!==i&&null!==(n=i.comingPresent)&&void 0!==n&&n.includes(t)?a((e=>{var n;return{...e,comingPresent:null===e||void 0===e||null===(n=e.comingPresent)||void 0===n?void 0:n.filter((e=>e!==t)),absent:[...e.absent,t]}})):a((e=>{var n,a;return{...e,present:[...e.present,t],comingAbsent:null===e||void 0===e||null===(n=e.comingAbsent)||void 0===n?void 0:n.filter((e=>e!==t)),absent:null===e||void 0===e||null===(a=e.absent)||void 0===a?void 0:a.filter((e=>e!==t))}})):null!==i&&void 0!==i&&null!==(s=i.present)&&void 0!==s&&s.includes(t)?a((e=>{var n;return{...e,present:null===e||void 0===e||null===(n=e.present)||void 0===n?void 0:n.filter((e=>e!==t))}})):a((e=>({...e,present:[...e.present,t]})))}),[null===i||void 0===i?void 0:i.present,null===i||void 0===i?void 0:i.comingPresent,r]),o=(0,s.useCallback)((t=>{var e,n,s;r?null!==i&&void 0!==i&&null!==(e=i.absent)&&void 0!==e&&e.includes(t)?a((e=>{var n;return{...e,absent:null===e||void 0===e||null===(n=e.absent)||void 0===n?void 0:n.filter((e=>e!==t)),present:[...null===e||void 0===e?void 0:e.present,t]}})):null!==i&&void 0!==i&&null!==(n=i.comingAbsent)&&void 0!==n&&n.includes(t)?a((e=>{var n;return{...e,comingAbsent:null===e||void 0===e||null===(n=e.comingAbsent)||void 0===n?void 0:n.filter((e=>e!==t)),present:[...null===e||void 0===e?void 0:e.present,t]}})):a((e=>{var n,a;return{...e,absent:[...null===e||void 0===e?void 0:e.absent,t],comingPresent:null===e||void 0===e||null===(n=e.comingPresent)||void 0===n?void 0:n.filter((e=>e!==t)),present:null===e||void 0===e||null===(a=e.present)||void 0===a?void 0:a.filter((e=>e!==t))}})):null!==i&&void 0!==i&&null!==(s=i.absent)&&void 0!==s&&s.includes(t)?a((e=>{var n;return{...e,absent:null===e||void 0===e||null===(n=e.absent)||void 0===n?void 0:n.filter((e=>e!==t))}})):a((e=>({...e,absent:[...null===e||void 0===e?void 0:e.absent,t]})))}),[null===i||void 0===i?void 0:i.absent,null===i||void 0===i?void 0:i.comingAbsent,r]);return(0,d.jsxs)(d.Fragment,{children:[1===n&&(null===e||void 0===e?void 0:e.map((t=>(0,d.jsx)(p,{staff:t},null===t||void 0===t?void 0:t._id)))),2===n&&(null===e||void 0===e?void 0:e.map((t=>(0,d.jsx)(b,{staff:t,selectedId:[...null===i||void 0===i?void 0:i.present,...null===i||void 0===i?void 0:i.comingPresent],onPresent:l},null===t||void 0===t?void 0:t._id)))),3===n&&(null===e||void 0===e?void 0:e.map((t=>(0,d.jsx)(y,{staff:t,selectedId:[...null===i||void 0===i?void 0:i.absent,...null===i||void 0===i?void 0:i.comingAbsent],onAbsent:o},null===t||void 0===t?void 0:t._id))))]})};var M=n(60234),A=n(1669),D=n(2651);const j=t=>{let{label:e,onAction:n,isDisabled:a,customStyle:i,children:s}=t;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{onClick:()=>{a||n()},className:r.Z.atb_btn,style:i,children:[e,s]})})},x=t=>{let{setStep:e,step:n,onReset:i,totalCount:s,presentCount:r,absentCount:l}=t;const{t:o}=(0,a.$G)();return(0,d.jsxs)("div",{className:g.Z.lmsat_container,children:[(0,d.jsx)(j,{label:o("total"),customStyle:1===n?{"--bg-atb":"#1c023b","--color-atb":"#ffffff"}:{"--bg-atb":"rgba(75, 26, 133, 0.1)","--color-atb":"#121212"},onAction:()=>{i(),e(1)},children:(0,d.jsx)("span",{style:{marginLeft:"0.2rem"},children:s})}),(0,d.jsx)(j,{label:o("present"),customStyle:2===n?{"--bg-atb":"#20b038","--color-atb":"#ffffff"}:{"--bg-atb":"rgba(32, 176, 56, 0.1)","--color-atb":"#121212"},onAction:()=>{i(),e(2)},children:(0,d.jsx)("span",{style:{marginLeft:"0.2rem"},children:r})}),(0,d.jsx)(j,{label:o("absent"),customStyle:3===n?{"--bg-atb":"#ee3833","--color-atb":"#ffffff"}:{"--bg-atb":"rgba(238, 56, 51, 0.1)","--color-atb":"#121212"},onAction:()=>{i(),e(3)},children:(0,d.jsx)("span",{style:{marginLeft:"0.2rem"},children:l})})]})};var $=n(55336),k=n(93638);const L=t=>{var e,n,r,l,c,u;let{instituteId:m}=t;const{t:g}=(0,a.$G)(),{selectedDate:p,getSelectedDate:y}=(0,i.GX)(),[b,j]=(0,s.useState)(1),[L,w]=(0,s.useState)({present:[],comingPresent:[],absent:[],comingAbsent:[]}),[T,N]=(0,s.useState)(!1),[Y]=(0,M.Sr)(),[O]=(0,M.QK)(),{staffOneInstituteList:P,staffOneInstituteListLoading:C}=(0,M.Q4)({data:{id:m,page:"",limit:"",date:""},skip:!m}),{staffGetAttendance:R,staffGetAttendanceRefetch:F}=(0,M.Kr)({data:{id:m,date:"".concat(o()(p).format("DD/MM/YYYY"))},skip:!p||!m});(0,s.useEffect)((()=>{null!==R&&void 0!==R&&R._id?w((t=>({...t,present:[],absent:[],comingPresent:[...null===R||void 0===R?void 0:R.presentStaff],comingAbsent:[...null===R||void 0===R?void 0:R.absentStaff]}))):w((t=>({...t,present:[],absent:[],comingPresent:[],comingAbsent:[]})))}),[R]);const q=(0,s.useCallback)((()=>{if(m){N((t=>!t));let n={present:[],absent:[]};if(2===b){n.present=L.present;for(let e of P){var t;null!==(t=n.present)&&void 0!==t&&t.includes(null===e||void 0===e?void 0:e._id)||n.absent.push(null===e||void 0===e?void 0:e._id)}}else{n.absent=L.absent;for(let t of P){var e;null!==(e=n.absent)&&void 0!==e&&e.includes(null===t||void 0===t?void 0:t._id)||n.present.push(null===t||void 0===t?void 0:t._id)}}Y({id:m,attendance:{...n,date:"".concat(o()(p).format("DD/MM/YYYY"))}}).then((()=>{F(),j(1),N((t=>!t))}))}}),[b,m,p,L.present,null===P||void 0===P?void 0:P.length,L.absent,F]),Z=(0,s.useCallback)((()=>{null!==R&&void 0!==R&&R._id&&(N((t=>!t)),O({aid:null===R||void 0===R?void 0:R._id,attendance:{present:L.present,absent:L.absent}}).then((()=>{F(),j(1),N((t=>!t))})))}),[null===R||void 0===R?void 0:R._id,L.present,L.absent,F]),U=(0,s.useCallback)((()=>{null!==R&&void 0!==R&&R._id?Z():q()}),[null===R||void 0===R?void 0:R._id,Z,q]);let I=0,Q=0;return I+=(null===L||void 0===L||null===(e=L.present)||void 0===e?void 0:e.length)+(null===L||void 0===L||null===(n=L.comingPresent)||void 0===n?void 0:n.length),Q+=(null===L||void 0===L||null===(r=L.absent)||void 0===r?void 0:r.length)+(null===L||void 0===L||null===(l=L.comingAbsent)||void 0===l?void 0:l.length),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(h.default,{children:[(0,d.jsx)(_.default,{children:(0,d.jsx)(f,{onDateSelect:t=>{y(t)},children:(null===L||void 0===L||null===(c=L.present)||void 0===c?void 0:c.length)>0||(null===L||void 0===L||null===(u=L.absent)||void 0===u?void 0:u.length)>0?(0,d.jsx)(k.Z,{label:g("save_attendance"),customStyle:{margin:"0",padding:"0.4rem 1rem"},onAction:U}):null})}),(0,d.jsx)(v.Z,{customStyleBorder:{marginBottom:"0"}}),(0,d.jsxs)(_.default,{children:[(0,d.jsx)(x,{step:b,setStep:j,onReset:()=>{null!==R&&void 0!==R&&R._id?w((()=>({present:[],comingPresent:[...null===R||void 0===R?void 0:R.presentStaff],absent:[],comingAbsent:[...null===R||void 0===R?void 0:R.absentStaff]}))):w((t=>({present:[],comingPresent:null===t||void 0===t?void 0:t.comingPresent,absent:[],comingAbsent:null===t||void 0===t?void 0:t.comingAbsent})))},totalCount:(null===P||void 0===P?void 0:P.length)||0,presentCount:I,absentCount:Q}),(0,d.jsx)(S,{staffOneInstituteList:P,step:b,state:L,setState:w,isUpdate:!(null===R||void 0===R||!R._id)}),C?(0,d.jsx)(A.Z,{}):0===(null===P||void 0===P?void 0:P.length)&&(0,d.jsx)(D.Z,{title:"No staff list found."})]})]}),T&&(0,d.jsx)($.default,{})]})}},2651:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var a=n(15783),i=n(80184);const s=t=>{let{title:e,subtitle:n,customStyleContainer:s,costomTextTitleStyle:r,costomTextSubtitleStyle:l}=t;return(0,i.jsxs)("div",{className:a.Z.empty_container,style:s,children:[e&&(0,i.jsx)("h6",{style:r,children:e}),n&&(0,i.jsx)("p",{style:l,children:n})]})}},97892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,a="millisecond",i="second",s="minute",r="hour",l="day",o="week",c="month",d="quarter",u="year",f="date",v="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},p={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(a,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(a,c),s=n-i<0,r=e.clone().add(a+(s?-1:1),c);return+(-(a+(n-i)/(s?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:o,d:l,D:f,h:r,m:s,s:i,ms:a,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=m;var S="$isDayjsObject",M=function(t){return t instanceof x||!(!t||!t[S])},A=function t(e,n,a){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();b[s]&&(i=s),n&&(b[s]=n,i=s);var r=e.split("-");if(!i&&r.length>1)return t(r[0])}else{var l=e.name;b[l]=e,i=l}return!a&&i&&(y=i),i||!a&&y},D=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},j=p;j.l=A,j.i=M,j.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=A(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[S]=!0}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(h);if(a){var i=a[2]-1||0,s=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===v)},g.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return D(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<D(t)},g.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,a=!!j.u(e)||e,d=j.p(t),v=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return a?i:i.endOf(l)},h=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},_=this.$W,m=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case u:return a?v(1,0):v(31,11);case c:return a?v(1,m):v(0,m+1);case o:var y=this.$locale().weekStart||0,b=(_<y?_+7:_)-y;return v(a?g-b:g+(6-b),m);case l:case f:return h(p+"Hours",0);case r:return h(p+"Minutes",1);case s:return h(p+"Seconds",2);case i:return h(p+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=j.p(t),d="set"+(this.$u?"UTC":""),v=(n={},n[l]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[r]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[a]=d+"Milliseconds",n)[o],h=o===l?this.$D+(e-this.$W):e;if(o===c||o===u){var _=this.clone().set(f,1);_.$d[v](h),_.init(),this.$d=_.set(f,Math.min(this.$D,_.daysInMonth())).$d}else v&&this.$d[v](h);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(a,d){var f,v=this;a=Number(a);var h=j.p(d),_=function(t){var e=D(v);return j.w(e.date(e.date()+Math.round(t*a)),v)};if(h===c)return this.set(c,this.$M+a);if(h===u)return this.set(u,this.$y+a);if(h===l)return _(1);if(h===o)return _(7);var m=(f={},f[s]=e,f[r]=n,f[i]=t,f)[h]||1,g=this.$d.getTime()+a*m;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||v;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),s=this.$H,r=this.$m,l=this.$M,o=n.weekdays,c=n.months,d=n.meridiem,u=function(t,n,i,s){return t&&(t[n]||t(e,a))||i[n].slice(0,s)},f=function(t){return j.s(s%12||12,t,"0")},h=d||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(_,(function(t,a){return a||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return l+1;case"MM":return j.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,c,3);case"MMMM":return u(c,l);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(n.weekdaysMin,e.$W,o,2);case"ddd":return u(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return j.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(s,r,!0);case"A":return h(s,r,!1);case"m":return String(r);case"mm":return j.s(r,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(a,f,v){var h,_=this,m=j.p(f),g=D(a),p=(g.utcOffset()-this.utcOffset())*e,y=this-g,b=function(){return j.m(_,g)};switch(m){case u:h=b()/12;break;case c:h=b();break;case d:h=b()/3;break;case o:h=(y-p)/6048e5;break;case l:h=(y-p)/864e5;break;case r:h=y/n;break;case s:h=y/e;break;case i:h=y/t;break;default:h=y}return v?h:j.a(h)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return b[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=A(t,e,!0);return a&&(n.$L=a),n},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),$=x.prototype;return D.prototype=$,[["$ms",a],["$s",i],["$m",s],["$H",r],["$W",l],["$M",c],["$y",u],["$D",f]].forEach((function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,x,D),t.$i=!0),D},D.locale=A,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=b[y],D.Ls=b,D.p={},D}()},80476:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},55050:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={lms_staff_card:"LmsManager_lms_staff_card__wXoPi",lms_staff_card_contatiner:"LmsManager_lms_staff_card_contatiner__Jph1Y",lms_staff_card_contatiner_inner:"LmsManager_lms_staff_card_contatiner_inner__CpoLe",lms_rule_container:"LmsManager_lms_rule_container__tjc6R",lmsr_card:"LmsManager_lmsr_card__bZPYq",lmsrc_card:"LmsManager_lmsrc_card__zLtbc",lmsrc_card_inner:"LmsManager_lmsrc_card_inner__nXlhc",lmsrci_text:"LmsManager_lmsrci_text__CRexL",lmsrc_date:"LmsManager_lmsrc_date__A0R-K",lmsrc_btn:"LmsManager_lmsrc_btn__RpZIN",lmsat_container:"LmsManager_lmsat_container__BBDa3",lmsstlc_card:"LmsManager_lmsstlc_card__PSq7-"}},15783:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=40547.bc05f90e.chunk.js.map