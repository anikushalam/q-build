"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[39224,3971],{8793:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(72791),o=r(11105),s=r(80184);const a=e=>{let{children:t}=e;return(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(o.Z,{}),children:t})}},11105:(e,t,r)=>{r.d(t,{Z:()=>s});r(72791);var n=r(11575),o=r(80184);const s=e=>{let{status:t}=e;return(0,o.jsx)("div",{className:n.Z.loaderGif,children:(0,o.jsx)("img",{src:"white"===t?"/images/loader/loader-bg-white.gif":"/images/loader/loader.gif",alt:"for load an items"})})}},12923:(e,t,r)=>{r.d(t,{Ec:()=>q,Em:()=>k,JM:()=>h,NS:()=>s,Pg:()=>p,Q_:()=>g,RH:()=>y,Tv:()=>c,U_:()=>v,VN:()=>a,Wj:()=>l,ZS:()=>d,_8:()=>S,d5:()=>u,tB:()=>m,vI:()=>A,yx:()=>i,zO:()=>f});var n=r(91007),o=r(58208);const s=e=>{const{data:t,refetch:r}=(0,o.YD)(e.search,{skip:e.skip});return{instituteAllSearch:t,instituteAllSearchRefetch:r}},a=()=>{const[e]=(0,o.ak)();return[e]},i=()=>{const[e]=(0,o.WL)();return[e]},c=e=>{const{data:t,refetch:r}=(0,o.pH)(e.list,{skip:e.skip});return{instituteFollowList:t,instituteFollowListRefetch:r}},u=e=>{const{data:t,refetch:r}=(0,o.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:t,instituteOwnFollowingListRefetch:r}},l=()=>{const[e]=(0,o.Ky)();return[e]},d=e=>{const{data:t,refetch:r}=(0,o.p8)(e.list);return{userFollowList:t,userFollowListRefetch:r}},y=e=>{const{data:t,refetch:r}=(0,o.Wv)(e);return{userFollowingList:t,userFollowingListRefetch:r}},h=e=>{const{data:t,refetch:r}=(0,o.sz)(e.search,{skip:e.skip});return{userAllSearch:t,userAllSearchRefetch:r}},p=()=>{const[e]=(0,o.Mk)();return[e]},f=()=>{const[e]=(0,o.$i)();return[e]},m=()=>{const[e]=(0,o.Do)();return[e]},v=()=>{const[e]=(0,o.He)();return[e]},g=()=>{const[e]=(0,o.vg)();return[e]},q=()=>{const[e]=(0,o.OO)();return[e]},S=e=>{const{data:t,refetch:r}=(0,o.N2)(e);return{userCircleList:t,userCircleListRefetch:r}},A=e=>{const{data:t,refetch:r}=(0,n.x6)(e.search,{skip:e.skip});return{assignSearchStaff:t,assignSearchStaffRefetch:r}},k=e=>{const{data:t,refetch:r}=(0,o.SJ)(e);return{universalUser:t,universalUserRefetch:r}}},77241:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(72791),o=r(20772);const s={navbar:"InsProfile_navbar__Pja4B"};var a=r(49010),i=r(80184);const c=function(){return(0,n.useEffect)((()=>{var e;null===(e=document.getElementById("scrollViewTop"))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),[]),(0,i.jsxs)("div",{className:s.Profile,id:"scrollViewTop",children:[(0,i.jsx)("div",{className:s.navbar,children:(0,i.jsx)(o.default,{status:"profile"})}),(0,i.jsx)(a.Z,{})]})}},65543:(e,t,r)=>{r.d(t,{u:()=>o});var n=r(72791);const o=()=>({hideScrollbar:n.useCallback((()=>{}),[]),showScrollbar:n.useCallback((()=>{document.body.style.overflow=""}),[]),scrollToTop:n.useCallback((()=>{window.scrollTo(0,0)}),[])})},91007:(e,t,r)=>{r.d(t,{KU:()=>de,cX:()=>le,Lr:()=>pe,wB:()=>ie,cn:()=>ue,pu:()=>$,QS:()=>J,W7:()=>K,dj:()=>Y,$J:()=>we,Im:()=>ye,W3:()=>_,Pm:()=>Re,Md:()=>z,No:()=>V,dv:()=>W,mC:()=>xe,OU:()=>ae,x6:()=>me});var n=localStorage.getItem("user");const o=e=>e.mutation({query:e=>({url:"/landing/get-touch",method:"POST",body:e})}),s=e=>e.mutation({query:e=>({url:"/ins/deactivate/info/".concat(n),method:"POST",body:e})}),a=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:n,"/approve-staff/list?page=").concat(e.page,"&limit=").concat(e.limit,"&date=").concat(e.date?e.date:"")}),i=e=>e.query({query:e=>"/ins/".concat(e||n,"/pending-staff/list")}),c=e=>e.query({query:e=>"/ins/staff/".concat(e)}),u=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:n,"/approve-student/list?page=").concat(e.page,"&limit=").concat(e.limit)}),l=e=>e.query({query:e=>"/ins/student/".concat(e)}),d=e=>e.query({query:e=>"/ins/".concat(n,"/followers-array?page=").concat(e,"&limit=10")}),y=e=>e.query({query:e=>"/ins/".concat(null===e||void 0===e?void 0:e.id,"/announcemnt?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(e.limit)}),h=e=>e.query({query:e=>"/ins/".concat(n,"/all/star-announcement?page=").concat(e,"&limit=10")}),p=e=>e.query({query:e=>"/ins/one/announcement/".concat(e)}),f=e=>e.query({query:e=>"/ins/".concat(n||e,"/dash")}),m=e=>e.query({query:e=>"/ins/".concat(e||n,"/display/person-array")}),v=e=>e.mutation({query:e=>({url:"/ins/".concat(n,"/display-person"),method:"POST",body:e})}),g=e=>e.mutation({query:e=>({url:"/ins/".concat(e.did,"/display-person/update"),method:"PATCH",body:e})}),q=e=>e.mutation({query:e=>({url:"/ins/".concat(n,"/display-person/").concat(e.did,"/delete/").concat(e.uid),method:"DELETE",body:e})}),S=e=>e.query({query:e=>"/ins/dashboard/".concat(n,"/notify?page=").concat(e,"&limit=10")}),A=e=>e.mutation({query:e=>({url:"/ins/".concat(e,"/star-announcement"),method:"POST"})}),k=e=>e.query({query:e=>({url:"/search/".concat(null!==e&&void 0!==e&&e.id?null===e||void 0===e?void 0:e.id:n,"/staff?search=").concat(e.search,"&page=").concat(e.page,"&limit=").concat(e.limit)})}),P=e=>e.query({query:e=>({url:"/search/".concat(n,"/student?search=").concat(e,"&page=",1,"&limit=",5)})}),b=e=>e.query({query:e=>({url:"/search/institute/".concat(n,"/allsearch?search=").concat(e,"&page=",1,"&limit=",5)})}),w=e=>e.mutation({query:e=>({url:"/ins/".concat(n,"/staff/approve/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),x=e=>e.mutation({query:e=>({url:"/ins".concat(n,"/staff/reject/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),R=e=>e.query({query:()=>({url:"/auth/login"})}),j=e=>e.mutation({query:e=>({url:"/ins/".concat(n,"/staff/code"),method:"POST",body:e})}),Z=e=>e.query({query:()=>({url:"/ins/".concat(n,"/staff-code")})}),O=e=>e.query({query:()=>"/all/user/list/data/"}),U=e=>e.query({query:e=>"/user/".concat(e,"/profile")}),M=e=>e.query({query:e=>"/user/profile/".concat(e)}),C=e=>e.query({query:e=>"/user/".concat(null===e||void 0===e?void 0:e.id,"/ins-announcement?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(null===e||void 0===e?void 0:e.limit)}),Q=e=>e.query({query:e=>"/user/".concat(n||e,"/dash/query")}),G=e=>e.query({query:e=>"/user/dashboard/".concat(n,"/notify?page=").concat(e,"&limit=10")}),T=e=>e.mutation({query:e=>({url:"/user/".concat(n,"/recovery-mail"),method:"POST",body:e})}),D=e=>e.mutation({query:e=>({url:"/user/phone/info/".concat(n),method:"POST",body:e})}),N=e=>e.mutation({query:e=>({url:"/extra/age/".concat(n),method:"PATCH"})}),L=e=>e.query({query:e=>({url:"/extra/age/".concat(n,"/get"),method:"GET"})}),I=e=>e.query({query:e=>"/fees/student/".concat(e)}),F=e=>e.query({query:()=>"/extra/random/query"}),E=e=>e.mutation({query:e=>({url:"/ins/destroy/announcement/".concat(null===e||void 0===e?void 0:e.annId),method:"DELETE"})});const H=r(85064).K.injectEndpoints({endpoints:e=>({postGetInTouch:o(e),postUserRecoveryMail:T(e),postUserRecoveryPhoneNumber:D(e),postDeactivateAccount:s(e),getOneUserProfile:U(e),getOneUserProfileUsername:M(e),staffApproveArray:a(e),staffPendingArray:i(e),getOneStaffProfile:c(e),studentApproveArray:u(e),getOneStudentProfile:l(e),getInsFollowersArray:d(e),getAnnouncementArray:y(e),getUserAnnouncementArray:C(e),getStarAnnouncementArray:h(e),getOneAnnouncement:p(e),getSingleInsData:f(e),getSingleUserData:Q(e),getDisplayPerson:m(e),addDisplayPerson:v(e),editDisplayPerson:g(e),deleteDisplayPerson:q(e),getAllNotifications:S(e),getAllUserNotifications:G(e),markStarAnnouncement:A(e),staffSearch:k(e),studentSearch:P(e),universalSearch:b(e),markAsApprove:w(e),markAsReject:x(e),checkLoginUser:R(e),randomCode:j(e),instituteStaffCode:Z(e),getAllUserArray:O(e),patchUserRestrictAge:N(e),getUsserAgeRestriction:L(e),getStudentFeesArray:I(e),randomIns:F(e),instituteRemoveAnnouncement:E(e)})}),{usePatchUserRestrictAgeMutation:z,useGetUsserAgeRestrictionQuery:_,usePostGetInTouchMutation:B,usePostUserRecoveryMailMutation:V,usePostUserRecoveryPhoneNumberMutation:W,useGetOneUserProfileQuery:$,useGetOneUserProfileUsernameQuery:J,useGetSingleInsDataQuery:K,useGetSingleUserDataQuery:Y,useGetDisplayPersonQuery:X,useEditDisplayPersonMutation:ee,useAddDisplayPersonMutation:te,useDeleteDisplayPersonMutation:re,useGetAllNotificationsQuery:ne,useGetAllUserNotificationsQuery:oe,useStaffPendingArrayQuery:se,useStaffApproveArrayQuery:ae,useGetOneStaffProfileQuery:ie,useStudentApproveArrayQuery:ce,useGetOneStudentProfileQuery:ue,useGetInsFollowersArrayQuery:le,useGetAnnouncementArrayQuery:de,useGetUserAnnouncementArrayQuery:ye,useGetStarAnnouncementArrayQuery:he,useGetOneAnnouncementQuery:pe,useMarkStarAnnouncementMutation:fe,useStaffSearchQuery:me,useStudentSearchQuery:ve,useUniversalSearchQuery:ge,useMarkAsApproveMutation:qe,useMarkAsRejectMutation:Se,useCheckLoginUserQuery:Ae,useRandomCodeMutation:ke,useInstituteStaffCodeQuery:Pe,useGetAllUserArrayQuery:be,useGetStudentFeesArrayQuery:we,useRandomInsQuery:xe,useInstituteRemoveAnnouncementMutation:Re}=H},72310:(e,t,r)=>{r.d(t,{Ch:()=>l,SY:()=>c,qu:()=>u});var n=r(72791),o=r(36314),s=r(34129),a=r(63515),i=r(80184);const c=e=>{let{msg:t,run:r,setRun:c}=e;const u=n.forwardRef((function(e,t){return(0,i.jsx)(a.Z,{elevation:6,ref:t,variant:"filled",...e})})),l=(e,t)=>{"clickaway"!==t&&c(!1)};return(0,i.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,i.jsx)(s.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:r,autoHideDuration:3e3,onClose:l,children:(0,i.jsx)(u,{onClose:l,severity:"error",sx:{width:"100%"},children:t})})})},u=e=>{let{msg:t,run:r,setRun:c}=e;const u=n.forwardRef((function(e,t){return(0,i.jsx)(a.Z,{elevation:6,ref:t,variant:"filled",...e})})),l=(e,t)=>{"clickaway"!==t&&c(!1)};return(0,i.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,i.jsx)(s.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:r,autoHideDuration:3e3,onClose:l,children:(0,i.jsx)(u,{onClose:l,severity:"success",sx:{width:"100%"},children:t})})})},l=e=>{let{msg:t,run:r,setRun:c,postiton:u,type:l}=e;const d=n.forwardRef((function(e,t){return(0,i.jsx)(a.Z,{elevation:6,ref:t,variant:"filled",...e})})),y=(e,t)=>{"clickaway"!==t&&c(!1)};return(0,i.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:'"stickey"'},children:(0,i.jsx)(s.Z,{anchorOrigin:{vertical:"".concat(u),horizontal:"right"},open:r,autoHideDuration:3e3,onClose:y,children:(0,i.jsx)(d,{onClose:y,severity:l,sx:{width:"100%"},children:t})})})}},54155:(e,t,r)=>{var n=r(64836);t.Z=void 0;var o=n(r(45649)),s=r(80184),a=(0,o.default)((0,s.jsx)("path",{d:"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}),"Crop");t.Z=a},97893:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(74223),o=r(80184);const s=(0,n.Z)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},36314:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(63366),o=r(87462),s=r(72791),a=r(30831),i=r(82466),c=r(94419),u=r(21217),l=r(93457),d=r(86083),y=r(78519),h=r(52173),p=r(51184),f=r(45682),m=r(80184);const v=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,h.Z)(),q=(0,l.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function S(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:g})}function A(e,t){const r=s.Children.toArray(e).filter(Boolean);return r.reduce(((e,n,o)=>(e.push(n),o<r.length-1&&e.push(s.cloneElement(t,{key:"separator-".concat(o)})),e)),[])}const k=e=>{let{ownerState:t,theme:r}=e,n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:r},(0,p.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,f.hB)(r),o=Object.keys(r.breakpoints.values).reduce(((e,r)=>(("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e)),{}),s=(0,p.P$)({values:t.direction,base:o}),a=(0,p.P$)({values:t.spacing,base:o});"object"===typeof s&&Object.keys(s).forEach(((e,t,r)=>{if(!s[e]){const n=t>0?s[r[t-1]]:"column";s[e]=n}}));const c=(r,n)=>{return t.useFlexGap?{gap:(0,f.NA)(e,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((o=n?s[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]))]:(0,f.NA)(e,r)}};var o};n=(0,i.Z)(n,(0,p.k9)({theme:r},a,c))}return n=(0,p.dt)(r.breakpoints,n),n};var P=r(66934),b=r(31402);const w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=q,useThemeProps:r=S,componentName:i="MuiStack"}=e,l=t(k),d=s.forwardRef((function(e,t){const s=r(e),d=(0,y.Z)(s),{component:h="div",direction:p="column",spacing:f=0,divider:g,children:q,className:S,useFlexGap:k=!1}=d,P=(0,n.Z)(d,v),b={direction:p,spacing:f,useFlexGap:k},w=(0,c.Z)({root:["root"]},(e=>(0,u.Z)(i,e)),{});return(0,m.jsx)(l,(0,o.Z)({as:h,ownerState:b,ref:t,className:(0,a.Z)(w.root,S)},P,{children:g?A(q,g):q}))}));return d}({createStyledComponent:(0,P.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiStack"})}),x=w},93457:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(44046).ZP)()}}]);
//# sourceMappingURL=39224.84c61946.chunk.js.map