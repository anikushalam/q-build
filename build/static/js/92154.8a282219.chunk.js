"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[92154],{92154:function(i,n,t){t.r(n),t.d(n,{default:function(){return q}});var e=t(72791),a={navbar:"UserNotification_navbar__nknzK"},s=t(79872),o="Mainbody_mainbody__YG0Wb",r="Mainbody_sidebar__7vWy0",c="Mainbody_stats__6OYdQ",l=t(29439),d={sidebar:"Sidebar_sidebar__MYSR-",heading:"Sidebar_heading__0T3eh",list:"Sidebar_list__g7wuD",options:"Sidebar_options__0bjUU",subOptions:"Sidebar_subOptions__3qG9c",imgDark:"Sidebar_imgDark__3vbLd",borderLeft:"Sidebar_borderLeft__tijxt",unread_count:"Sidebar_unread_count__1lt3N"},u=t(39230),v=t(96065),f=t(95048),_=t(16871),m=t(43504),h=t(80184);var p=function(){var i,n,t,a,s,o,r,c,p,b,g,y,N,j,k,x=(0,u.$G)().t,S=(0,_.TH)(),C=(0,_.UO)(),A=(0,f.v9)((function(i){return i.idChange.id})),T=(0,v.EC)(),q=(0,l.Z)(T,1)[0],E=(0,v.EG)({id:A,skip:!A}),L=E.activityNotifiationCount,I=E.activityNotifiationCountRefetch;(0,e.useEffect)((function(){A&&I()}),[A,I]);var U=function(i){"NOTIFICATION"===i?q({id:A,type:"Notification"}).then((function(i){I()})).catch({}):"ACTIVITY"===i?q({id:A,type:"Activity"}).then((function(i){I()})).catch({}):"STUDENT_MESSAGE"===i?q({id:A,type:"STUDENT_MESSAGE"}).then((function(i){I()})).catch({}):"ANNOUNCEMENT"===i&&q({id:A,type:"Announcement"}).then((function(i){I()})).catch({})};return(0,e.useEffect)((function(){S.search||U("NOTIFICATION")}),[S.search]),(0,h.jsxs)("div",{className:d.sidebar,children:[(0,h.jsx)("div",{className:d.heading,children:x("activity-place")}),(0,h.jsxs)("div",{className:d.list,children:[(0,h.jsx)(m.rU,{to:"/q/".concat(C.username,"/notifications"),children:(0,h.jsxs)("div",{className:S.search?d.options:"".concat(d.options," ").concat(d.borderLeft),onClick:function(){return U("NOTIFICATION")},children:[(0,h.jsx)("img",{className:d.img,style:S.search?{display:"block"}:{display:"none"},alt:"not found",src:"/images/bell.svg"}),(0,h.jsx)("img",{className:d.imgDark,style:S.search?{display:"none"}:{display:"block"},alt:"not found",src:"/images/bell-dark.svg"}),(0,h.jsx)("p",{children:x("social")}),null!==L&&void 0!==L&&L.notifyCount?(0,h.jsx)("span",{className:d.unread_count,children:null===L||void 0===L?void 0:L.notifyCount}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(C.username,"/notifications?a=activity"),children:(0,h.jsxs)("div",{className:"activity"===(null===(i=S.search)||void 0===i?void 0:i.substring(3))||"feedback"===(null===(n=S.search)||void 0===n?void 0:n.substring(3))?"".concat(d.options," ").concat(d.borderLeft):d.options,onClick:function(){return U("ACTIVITY")},children:[(0,h.jsx)("img",{className:d.img,style:"activity"===(null===(t=S.search)||void 0===t?void 0:t.substring(3))||"feedback"===(null===(a=S.search)||void 0===a?void 0:a.substring(3))?{display:"none"}:{display:"block"},alt:"not found",src:"/images/bell.svg"}),(0,h.jsx)("img",{className:d.imgDark,style:"activity"===(null===(s=S.search)||void 0===s?void 0:s.substring(3))||"feedback"===(null===(o=S.search)||void 0===o?void 0:o.substring(3))?{display:"block"}:{display:"none"},alt:"not found",src:"/images/bell-dark.svg"}),(0,h.jsx)("p",{children:x("activity-place")}),null!==L&&void 0!==L&&L.activityCount?(0,h.jsx)("span",{className:d.unread_count,children:null===L||void 0===L?void 0:L.activityCount}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(C.username,"/notifications?a=student-messaage"),children:(0,h.jsxs)("div",{className:"student-messaage"===(null===(r=S.search)||void 0===r?void 0:r.substring(3))||"student-messaage-detail"===(null===(c=S.search)||void 0===c?void 0:c.substring(3))?"".concat(d.options," ").concat(d.borderLeft):d.options,onClick:function(){return U("STUDENT_MESSAGE")},children:[(0,h.jsx)("img",{style:"student-messaage"===(null===(p=S.search)||void 0===p?void 0:p.substring(3))||"student-messaage-detail"===(null===(b=S.search)||void 0===b?void 0:b.substring(3))?{display:"none"}:{display:"block"},className:d.img,alt:"not found",src:"/images/member_tab/admission/internal-query-icon.svg"}),(0,h.jsx)("img",{style:"student-messaage"===(null===(g=S.search)||void 0===g?void 0:g.substring(3))||"student-messaage-detail"===(null===(y=S.search)||void 0===y?void 0:y.substring(3))?{display:"block"}:{display:"none"},className:d.imgDark,alt:"not found",src:"/images/member_tab/admission/internal-query-blue-icon.svg"}),(0,h.jsx)("p",{children:x("student_message")}),null!==L&&void 0!==L&&L.student_message?(0,h.jsx)("span",{className:d.unread_count,children:null===L||void 0===L?void 0:L.student_message}):""]})}),(0,h.jsx)(m.rU,{to:"/q/".concat(C.username,"/notifications?a=announcement"),children:(0,h.jsxs)("div",{className:"announcement"===(null===(N=S.search)||void 0===N?void 0:N.substring(3,15))?"".concat(d.options," ").concat(d.borderLeft):d.options,onClick:function(){return U("ANNOUNCEMENT")},children:[(0,h.jsx)("img",{style:"announcement"===(null===(j=S.search)||void 0===j?void 0:j.substring(3,15))?{display:"none"}:{display:"block"},className:d.img,alt:"not found",src:"/images/voice-light.svg"}),(0,h.jsx)("img",{style:"announcement"===(null===(k=S.search)||void 0===k?void 0:k.substring(3,15))?{display:"block"}:{display:"none"},className:d.imgDark,alt:"not found",src:"/images/voice-dark.svg"}),(0,h.jsx)("p",{children:x("announcement-place")}),null!==L&&void 0!==L&&L.announcementCount?(0,h.jsx)("span",{className:d.unread_count,children:null===L||void 0===L?void 0:L.announcementCount}):""]})})]})]})},b="Stats_stats__fyoNw",g=t(55336),y=(0,e.lazy)((function(){return t.e(8203).then(t.bind(t,8203))})),N=(0,e.lazy)((function(){return Promise.all([t.e(89891),t.e(34730),t.e(11968),t.e(16299)]).then(t.bind(t,16299))})),j=(0,e.lazy)((function(){return Promise.all([t.e(6307),t.e(74289),t.e(87932),t.e(52328)]).then(t.bind(t,52328))})),k=(0,e.lazy)((function(){return t.e(15526).then(t.bind(t,15526))})),x=(0,e.lazy)((function(){return t.e(57590).then(t.bind(t,57590))})),S=(0,e.lazy)((function(){return Promise.all([t.e(34185),t.e(84395)]).then(t.bind(t,91297))}));var C=function(){var i,n,t,a,s,o=(0,_.TH)();return(0,h.jsx)("div",{className:b,children:(0,h.jsxs)(e.Suspense,{fallback:(0,h.jsx)(g.Z,{}),children:[!o.search&&(0,h.jsx)(y,{}),"announcement"===(null===(i=o.search)||void 0===i?void 0:i.substring(3,15))&&(0,h.jsx)(N,{}),"activity"===(null===(n=o.search)||void 0===n?void 0:n.substring(3))&&(0,h.jsx)(j,{}),"student-messaage"===(null===(t=o.search)||void 0===t?void 0:t.substring(3))&&(0,h.jsx)(k,{}),"student-messaage-detail"===(null===(a=o.search)||void 0===a?void 0:a.substring(3))&&(0,h.jsx)(x,{}),"feedback"===(null===(s=o.search)||void 0===s?void 0:s.substring(3))&&(0,h.jsx)(S,{})]})})};var A=function(){return(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:r,children:(0,h.jsx)("div",{style:{position:"sticky",top:"88px"},children:(0,h.jsx)(p,{})})}),(0,h.jsx)("div",{className:c,children:(0,h.jsx)(C,{})})]})},T=t(91007);var q=function(){var i,n,t,e,o,r=localStorage.getItem("user"),c=(0,T.pu)(r).data;return(0,h.jsxs)("div",{className:a.insNotification,children:[(0,h.jsx)("div",{className:a.navbar,children:(0,h.jsx)(s.default,{profileId:c?null===c||void 0===c||null===(i=c.user)||void 0===i?void 0:i._id:"",status:"notification",username:null===c||void 0===c||null===(n=c.user)||void 0===n?void 0:n.username,name:null===c||void 0===c||null===(t=c.user)||void 0===t?void 0:t.userLegalName,photoId:null===c||void 0===c||null===(e=c.user)||void 0===e?void 0:e.photoId,profilePhoto:null===c||void 0===c||null===(o=c.user)||void 0===o?void 0:o.profilePhoto})}),(0,h.jsx)(A,{})]})}},96065:function(i,n,t){t.d(n,{Cr:function(){return d},EC:function(){return l},EG:function(){return c},Wj:function(){return r},_p:function(){return v},a3:function(){return u},iA:function(){return _},id:function(){return f},mS:function(){return o},nF:function(){return s},vW:function(){return m}});var e=t(29439),a=t(40896),s=function(i){var n=(0,a.TU)(i.data,{skip:i.skip});return{instituteAllNotification:n.data,instituteAllNotificationRefetch:n.refetch}},o=function(i){var n=(0,a.dQ)(i.data,{skip:i.skip});return{userAllNotification:n.data,userAllNotificationRefetch:n.refetch}},r=function(i){var n=(0,a.Pw)(i.data,{skip:i.skip});return{allActivityList:n.data,allActivityListRefetch:n.refetch}},c=function(i){var n=(0,a.hE)(i.id,{skip:i.skip});return{activityNotifiationCount:n.data,activityNotifiationCountRefetch:n.refetch}},l=function(){var i=(0,a.Lh)();return[(0,e.Z)(i,1)[0]]},d=function(){var i=(0,a.LO)();return[(0,e.Z)(i,1)[0]]},u=function(){var i=(0,a.xL)();return[(0,e.Z)(i,1)[0]]},v=function(i){var n=(0,a.sj)(i.data,{skip:i.skip});return{activitySupportMember:n.data,activitySupportMemberRefetch:n.refetch}},f=function(i){var n=(0,a.lI)(i.data,{skip:i.skip});return{instituteAllGRNotification:n.data,instituteAllGRNotificationRefetch:n.refetch}},_=function(){var i=(0,a.wU)();return[(0,e.Z)(i,1)[0]]},m=function(i){var n=(0,a.YS)(i.data,{skip:i.skip});return{getNotificationAllStudentMessage:n.data,getNotificationAllStudentMessageRefetch:n.refetch}}},55336:function(i,n,t){var e=t(63244),a=t(80184);n.Z=function(){return(0,a.jsx)("div",{className:e.Z.qviple_loader_backdrop,children:(0,a.jsx)("div",{className:e.Z.qviple_loader_container,children:(0,a.jsx)("div",{className:e.Z.qviple_loader_rotation})})})}},63244:function(i,n){n.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}}}]);
//# sourceMappingURL=92154.8a282219.chunk.js.map