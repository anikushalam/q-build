"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[92154],{92154:(i,e,s)=>{s.r(e),s.d(e,{default:()=>T});var t=s(72791);const a={navbar:"UserNotification_navbar__nknzK"};var n=s(79872);const o="Mainbody_mainbody__YG0Wb",l="Mainbody_sidebar__7vWy0",d="Mainbody_stats__6OYdQ",c={sidebar:"Sidebar_sidebar__MYSR-",heading:"Sidebar_heading__0T3eh",list:"Sidebar_list__g7wuD",options:"Sidebar_options__0bjUU",subOptions:"Sidebar_subOptions__3qG9c",imgDark:"Sidebar_imgDark__3vbLd",borderLeft:"Sidebar_borderLeft__tijxt",unread_count:"Sidebar_unread_count__1lt3N"};var r=s(39230),u=s(96065),v=s(95048),_=s(16871),m=s(43504),h=s(80184);const p=function(){var i,e,s,a,n,o,l,d,p,b,g,f,y,N,j;const{t:k}=(0,r.$G)(),x=(0,_.TH)(),S=(0,_.UO)(),C=(0,v.v9)((i=>i.idChange.id)),[A]=(0,u.EC)(),{activityNotifiationCount:T,activityNotifiationCountRefetch:q}=(0,u.EG)({id:C,skip:!C});(0,t.useEffect)((()=>{C&&q()}),[C,q]);const E=i=>{"NOTIFICATION"===i?A({id:C,type:"Notification"}).then((i=>{q()})).catch({}):"ACTIVITY"===i?A({id:C,type:"Activity"}).then((i=>{q()})).catch({}):"STUDENT_MESSAGE"===i?A({id:C,type:"STUDENT_MESSAGE"}).then((i=>{q()})).catch({}):"ANNOUNCEMENT"===i&&A({id:C,type:"Announcement"}).then((i=>{q()})).catch({})};return(0,t.useEffect)((()=>{x.search||E("NOTIFICATION")}),[x.search]),(0,h.jsxs)("div",{className:c.sidebar,children:[(0,h.jsx)("div",{className:c.heading,children:k("activity-place")}),(0,h.jsxs)("div",{className:c.list,children:[(0,h.jsx)(m.rU,{to:"/q/".concat(S.username,"/notifications"),children:(0,h.jsxs)("div",{className:x.search?c.options:"".concat(c.options," ").concat(c.borderLeft),onClick:()=>E("NOTIFICATION"),children:[(0,h.jsx)("img",{className:c.img,style:x.search?{display:"block"}:{display:"none"},alt:"not found",src:"/images/bell.svg"}),(0,h.jsx)("img",{className:c.imgDark,style:x.search?{display:"none"}:{display:"block"},alt:"not found",src:"/images/bell-dark.svg"}),(0,h.jsx)("p",{children:k("social")}),null!==T&&void 0!==T&&T.notifyCount?(0,h.jsx)("span",{className:c.unread_count,children:null===T||void 0===T?void 0:T.notifyCount}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(S.username,"/notifications?a=activity"),children:(0,h.jsxs)("div",{className:"activity"===(null===(i=x.search)||void 0===i?void 0:i.substring(3))||"feedback"===(null===(e=x.search)||void 0===e?void 0:e.substring(3))?"".concat(c.options," ").concat(c.borderLeft):c.options,onClick:()=>E("ACTIVITY"),children:[(0,h.jsx)("img",{className:c.img,style:"activity"===(null===(s=x.search)||void 0===s?void 0:s.substring(3))||"feedback"===(null===(a=x.search)||void 0===a?void 0:a.substring(3))?{display:"none"}:{display:"block"},alt:"not found",src:"/images/bell.svg"}),(0,h.jsx)("img",{className:c.imgDark,style:"activity"===(null===(n=x.search)||void 0===n?void 0:n.substring(3))||"feedback"===(null===(o=x.search)||void 0===o?void 0:o.substring(3))?{display:"block"}:{display:"none"},alt:"not found",src:"/images/bell-dark.svg"}),(0,h.jsx)("p",{children:k("activity-place")}),null!==T&&void 0!==T&&T.activityCount?(0,h.jsx)("span",{className:c.unread_count,children:null===T||void 0===T?void 0:T.activityCount}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(S.username,"/notifications?a=student-messaage"),children:(0,h.jsxs)("div",{className:"student-messaage"===(null===(l=x.search)||void 0===l?void 0:l.substring(3))||"student-messaage-detail"===(null===(d=x.search)||void 0===d?void 0:d.substring(3))?"".concat(c.options," ").concat(c.borderLeft):c.options,onClick:()=>E("STUDENT_MESSAGE"),children:[(0,h.jsx)("img",{style:"student-messaage"===(null===(p=x.search)||void 0===p?void 0:p.substring(3))||"student-messaage-detail"===(null===(b=x.search)||void 0===b?void 0:b.substring(3))?{display:"none"}:{display:"block"},className:c.img,alt:"not found",src:"/images/member_tab/admission/internal-query-icon.svg"}),(0,h.jsx)("img",{style:"student-messaage"===(null===(g=x.search)||void 0===g?void 0:g.substring(3))||"student-messaage-detail"===(null===(f=x.search)||void 0===f?void 0:f.substring(3))?{display:"block"}:{display:"none"},className:c.imgDark,alt:"not found",src:"/images/member_tab/admission/internal-query-blue-icon.svg"}),(0,h.jsx)("p",{children:k("student_message")}),null!==T&&void 0!==T&&T.student_message?(0,h.jsx)("span",{className:c.unread_count,children:null===T||void 0===T?void 0:T.student_message}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(S.username,"/notifications?a=announcement"),children:(0,h.jsxs)("div",{className:"announcement"===(null===(y=x.search)||void 0===y?void 0:y.substring(3,15))?"".concat(c.options," ").concat(c.borderLeft):c.options,onClick:()=>E("ANNOUNCEMENT"),children:[(0,h.jsx)("img",{style:"announcement"===(null===(N=x.search)||void 0===N?void 0:N.substring(3,15))?{display:"none"}:{display:"block"},className:c.img,alt:"not found",src:"/images/voice-light.svg"}),(0,h.jsx)("img",{style:"announcement"===(null===(j=x.search)||void 0===j?void 0:j.substring(3,15))?{display:"block"}:{display:"none"},className:c.imgDark,alt:"not found",src:"/images/voice-dark.svg"}),(0,h.jsx)("p",{children:k("announcement-place")}),null!==T&&void 0!==T&&T.announcementCount?(0,h.jsx)("span",{className:c.unread_count,children:null===T||void 0===T?void 0:T.announcementCount}):""]})})]})]})},b="Stats_stats__fyoNw";var g=s(55336);const f=(0,t.lazy)((()=>s.e(8203).then(s.bind(s,8203)))),y=(0,t.lazy)((()=>Promise.all([s.e(89891),s.e(34730),s.e(11968),s.e(16299)]).then(s.bind(s,16299)))),N=(0,t.lazy)((()=>Promise.all([s.e(6307),s.e(74289),s.e(52328)]).then(s.bind(s,52328)))),j=(0,t.lazy)((()=>s.e(15526).then(s.bind(s,15526)))),k=(0,t.lazy)((()=>s.e(57590).then(s.bind(s,57590)))),x=(0,t.lazy)((()=>s.e(91297).then(s.bind(s,91297))));const S=function(){var i,e,s,a,n;const o=(0,_.TH)();return(0,h.jsx)("div",{className:b,children:(0,h.jsxs)(t.Suspense,{fallback:(0,h.jsx)(g.Z,{}),children:[!o.search&&(0,h.jsx)(f,{}),"announcement"===(null===(i=o.search)||void 0===i?void 0:i.substring(3,15))&&(0,h.jsx)(y,{}),"activity"===(null===(e=o.search)||void 0===e?void 0:e.substring(3))&&(0,h.jsx)(N,{}),"student-messaage"===(null===(s=o.search)||void 0===s?void 0:s.substring(3))&&(0,h.jsx)(j,{}),"student-messaage-detail"===(null===(a=o.search)||void 0===a?void 0:a.substring(3))&&(0,h.jsx)(k,{}),"feedback"===(null===(n=o.search)||void 0===n?void 0:n.substring(3))&&(0,h.jsx)(x,{})]})})};const C=function(){return(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:l,children:(0,h.jsx)("div",{style:{position:"sticky",top:"88px"},children:(0,h.jsx)(p,{})})}),(0,h.jsx)("div",{className:d,children:(0,h.jsx)(S,{})})]})};var A=s(91007);const T=function(){var i,e,s,t,o;const l=localStorage.getItem("user"),{data:d}=(0,A.pu)(l);return(0,h.jsxs)("div",{className:a.insNotification,children:[(0,h.jsx)("div",{className:a.navbar,children:(0,h.jsx)(n.default,{profileId:d?null===d||void 0===d||null===(i=d.user)||void 0===i?void 0:i._id:"",status:"notification",username:null===d||void 0===d||null===(e=d.user)||void 0===e?void 0:e.username,name:null===d||void 0===d||null===(s=d.user)||void 0===s?void 0:s.userLegalName,photoId:null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.photoId,profilePhoto:null===d||void 0===d||null===(o=d.user)||void 0===o?void 0:o.profilePhoto})}),(0,h.jsx)(C,{})]})}},96065:(i,e,s)=>{s.d(e,{Cr:()=>c,EC:()=>d,EG:()=>l,Wj:()=>o,_p:()=>u,a3:()=>r,iA:()=>_,id:()=>v,mS:()=>n,nF:()=>a,vW:()=>m});var t=s(40896);const a=i=>{const{data:e,refetch:s}=(0,t.TU)(i.data,{skip:i.skip});return{instituteAllNotification:e,instituteAllNotificationRefetch:s}},n=i=>{const{data:e,refetch:s}=(0,t.dQ)(i.data,{skip:i.skip});return{userAllNotification:e,userAllNotificationRefetch:s}},o=i=>{const{data:e,refetch:s}=(0,t.Pw)(i.data,{skip:i.skip});return{allActivityList:e,allActivityListRefetch:s}},l=i=>{const{data:e,refetch:s}=(0,t.hE)(i.id,{skip:i.skip});return{activityNotifiationCount:e,activityNotifiationCountRefetch:s}},d=()=>{const[i]=(0,t.Lh)();return[i]},c=()=>{const[i]=(0,t.LO)();return[i]},r=()=>{const[i]=(0,t.xL)();return[i]},u=i=>{const{data:e,refetch:s}=(0,t.sj)(i.data,{skip:i.skip});return{activitySupportMember:e,activitySupportMemberRefetch:s}},v=i=>{const{data:e,refetch:s}=(0,t.lI)(i.data,{skip:i.skip});return{instituteAllGRNotification:e,instituteAllGRNotificationRefetch:s}},_=()=>{const[i]=(0,t.wU)();return[i]},m=i=>{const{data:e,refetch:s}=(0,t.YS)(i.data,{skip:i.skip});return{getNotificationAllStudentMessage:e,getNotificationAllStudentMessageRefetch:s}}},55336:(i,e,s)=>{s.d(e,{Z:()=>n});var t=s(63244),a=s(80184);const n=()=>(0,a.jsx)("div",{className:t.Z.qviple_loader_backdrop,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_container,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_rotation})})})},63244:(i,e,s)=>{s.d(e,{Z:()=>t});const t={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}}}]);
//# sourceMappingURL=92154.969f49ad.chunk.js.map