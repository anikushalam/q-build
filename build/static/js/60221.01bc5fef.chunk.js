"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[60221],{12923:(e,t,n)=>{n.d(t,{Ec:()=>q,Em:()=>_,JM:()=>h,NS:()=>i,Pg:()=>y,Q_:()=>g,RH:()=>v,Tv:()=>l,U_:()=>p,VN:()=>s,Wj:()=>c,ZS:()=>d,_8:()=>S,d5:()=>u,tB:()=>f,vI:()=>A,yx:()=>a,zO:()=>m});var o=n(91007),r=n(58208);const i=e=>{const{data:t,refetch:n}=(0,r.YD)(e.search,{skip:e.skip});return{instituteAllSearch:t,instituteAllSearchRefetch:n}},s=()=>{const[e]=(0,r.ak)();return[e]},a=()=>{const[e]=(0,r.WL)();return[e]},l=e=>{const{data:t,refetch:n}=(0,r.pH)(e.list,{skip:e.skip});return{instituteFollowList:t,instituteFollowListRefetch:n}},u=e=>{const{data:t,refetch:n}=(0,r.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:t,instituteOwnFollowingListRefetch:n}},c=()=>{const[e]=(0,r.Ky)();return[e]},d=e=>{const{data:t,refetch:n}=(0,r.p8)(e.list);return{userFollowList:t,userFollowListRefetch:n}},v=e=>{const{data:t,refetch:n}=(0,r.Wv)(e);return{userFollowingList:t,userFollowingListRefetch:n}},h=e=>{const{data:t,refetch:n}=(0,r.sz)(e.search,{skip:e.skip});return{userAllSearch:t,userAllSearchRefetch:n}},y=()=>{const[e]=(0,r.Mk)();return[e]},m=()=>{const[e]=(0,r.$i)();return[e]},f=()=>{const[e]=(0,r.Do)();return[e]},p=()=>{const[e]=(0,r.He)();return[e]},g=()=>{const[e]=(0,r.vg)();return[e]},q=()=>{const[e]=(0,r.OO)();return[e]},S=e=>{const{data:t,refetch:n}=(0,r.N2)(e);return{userCircleList:t,userCircleListRefetch:n}},A=e=>{const{data:t,refetch:n}=(0,o.x6)(e.search,{skip:e.skip});return{assignSearchStaff:t,assignSearchStaffRefetch:n}},_=e=>{const{data:t,refetch:n}=(0,r.SJ)(e);return{universalUser:t,universalUserRefetch:n}}},64556:(e,t,n)=>{n.d(t,{Z:()=>d});n(72791);var o=n(62926),r=n(43504),i=n(95048),s=n(65543),a=n(98990),l=n(1095),u=n(98684),c=n(80184);const d=e=>{var t;let{staff:n}=e;const d=(0,i.I0)(),{showScrollbar:v}=(0,s.u)();return(0,c.jsx)("div",{className:o.Z.searchResult,children:(0,c.jsx)(r.rU,{to:"/q/".concat(null===n||void 0===n||null===(t=n.user)||void 0===t?void 0:t.username,"/profile"),onClick:()=>{var e,t;return t=null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e._id,v(),void d(a.S.searchId({id:t,type:"ID",searchAs:"user"}))},children:(0,c.jsxs)("div",{className:o.Z.searchResultLeft,children:[(0,c.jsx)("img",{src:null!==n&&void 0!==n&&n.staffProfilePhoto?"".concat(l.yI,"/").concat(null===n||void 0===n?void 0:n.staffProfilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),alt:"staff profile avatar"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h6",{children:"".concat(null===n||void 0===n?void 0:n.staffFirstName," ").concat(null!==n&&void 0!==n&&n.staffMiddleName?null===n||void 0===n?void 0:n.staffMiddleName:""," ").concat(null===n||void 0===n?void 0:n.staffLastName)}),(0,c.jsx)("h6",{children:null===n||void 0===n?void 0:n.staffROLLNO})]})]})})})}},26647:(e,t,n)=>{n.d(t,{Z:()=>v});n(72791);var o=n(95048),r=n(12923),i=n(98990),s=n(62926),a=n(43504),l=n(65543),u=n(98684),c=n(1095),d=n(80184);const v=e=>{var t,n;let{item:v,userId:h,hideModal:y}=e;const m=v.username?v.username:null!==v&&void 0!==v&&v.name?null===v||void 0===v?void 0:v.name:"",f=(0,o.I0)(),p=null===v||void 0===v?void 0:v._id,{showScrollbar:g}=(0,l.u)(),[q]=(0,r.Pg)(),[S]=(0,r.zO)(),[A]=(0,r.Q_)(),[_]=(0,r.Ec)(),[P]=(0,r.tB)(),[R]=(0,r.U_)(),{userFollowingList:w,userFollowingListRefetch:I}=(0,r.RH)({page:1,id:h,limit:100}),{userFollowList:U,userFollowListRefetch:k}=(0,r.ZS)({list:{page:1,id:h,limit:100}}),{userCircleList:L,userCircleListRefetch:Q}=(0,r._8)({page:1,id:h,limit:100});let j=[],x=[],N=[],O=[];for(let o=0;o<(null===w||void 0===w||null===(F=w.uFollowing)||void 0===F?void 0:F.length);o++){var F,D;j.push(null===w||void 0===w||null===(D=w.uFollowing[o])||void 0===D?void 0:D._id)}for(let o=0;o<(null===w||void 0===w||null===(M=w.uInsFollowing)||void 0===M?void 0:M.length);o++){var M,b;x.push(null===w||void 0===w||null===(b=w.uInsFollowing[o])||void 0===b?void 0:b._id)}for(let o=0;o<(null===U||void 0===U||null===(G=U.followers)||void 0===G?void 0:G.length);o++){var G,C;N.push(null===U||void 0===U||null===(C=U.followers[o])||void 0===C?void 0:C._id)}for(let o=0;o<(null===L||void 0===L||null===(T=L.circle)||void 0===T?void 0:T.length);o++){var T,Z;O.push(null===L||void 0===L||null===(Z=L.circle[o])||void 0===Z?void 0:Z._id)}const E=()=>{null!==v&&void 0!==v&&v.name?_({InsfollowId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&I()})).catch({}):null!==v&&void 0!==v&&v.username&&S({userFollowId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&I()})).catch({})};return(0,d.jsxs)("div",{className:s.Z.searchResult,children:[(0,d.jsx)(a.rU,{to:"/q/".concat(m,"/profile"),onClick:()=>{g(),v.username?f(i.S.searchId({id:p,type:"ID",searchAs:"user"})):f(i.S.searchId({id:p,type:"ID",searchAs:"institute"})),y(!1)},children:(0,d.jsxs)("div",{className:s.Z.searchResultLeft,children:[null!==v&&void 0!==v&&v.insName?(0,d.jsx)("img",{src:null!==v&&void 0!==v&&v.insProfilePhoto?"".concat(c.yI,"/").concat(null===v||void 0===v?void 0:v.insProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}):(0,d.jsx)("img",{src:null!==v&&void 0!==v&&v.profilePhoto?"".concat(c.yI,"/").concat(null===v||void 0===v?void 0:v.profilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),alt:""}),(0,d.jsxs)("div",{children:[null!==v&&void 0!==v&&v.name?(0,d.jsx)("h6",{children:null===v||void 0===v?void 0:v.name}):null!==v&&void 0!==v&&v.username?(0,d.jsx)("h6",{children:null===v||void 0===v?void 0:v.username}):"",null!==v&&void 0!==v&&v.insName?(0,d.jsx)("p",{children:null===v||void 0===v?void 0:v.insName}):null!==v&&void 0!==v&&v.userLegalName?(0,d.jsx)("p",{children:null===v||void 0===v?void 0:v.userLegalName}):""]})]})}),(null===v||void 0===v||null===(t=v.hostelDepart)||void 0===t?void 0:t[0])&&(0,d.jsx)(a.rU,{to:"/q/".concat(m,"/hostel/profile"),state:{hid:null===v||void 0===v||null===(n=v.hostelDepart)||void 0===n?void 0:n[0]},children:(0,d.jsx)("img",{src:"/images/hostel/hostel-bed-icon.svg",alt:"bed icon",style:{marginRight:"-8rem",cursor:"pointer"},title:"Apply for hostel"})}),null!==v&&void 0!==v&&v.name&&x.includes(null===v||void 0===v?void 0:v._id)||null!==v&&void 0!==v&&v.username&&j.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:E,className:s.Z.connectBtn,children:"Following"}):null!==v&&void 0!==v&&v.username&&N.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:()=>{P({followId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&(Q(),k())})).catch({})},className:s.Z.connectBtn,children:"Follow Back"}):null!==v&&void 0!==v&&v.username&&O.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:()=>{R({followId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&(Q(),k())})).catch({})},className:s.Z.connectBtn,children:"Circled"}):(0,d.jsx)("div",{className:s.Z.connectBtn,onClick:()=>{null!==v&&void 0!==v&&v.name?A({InsfollowId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&I()})).catch({}):null!==v&&void 0!==v&&v.username&&q({userFollowId:null===v||void 0===v?void 0:v._id}).then((e=>{e.data.message&&I()})).catch({})},children:"Follow"})]})}},91007:(e,t,n)=>{n.d(t,{KU:()=>de,cX:()=>ce,Lr:()=>ye,wB:()=>ae,cn:()=>ue,pu:()=>J,QS:()=>V,W7:()=>$,dj:()=>X,$J:()=>we,Im:()=>ve,W3:()=>H,Pm:()=>Ue,Md:()=>B,No:()=>z,dv:()=>K,mC:()=>Ie,OU:()=>se,x6:()=>fe});var o=localStorage.getItem("user");const r=e=>e.mutation({query:e=>({url:"/landing/get-touch",method:"POST",body:e})}),i=e=>e.mutation({query:e=>({url:"/ins/deactivate/info/".concat(o),method:"POST",body:e})}),s=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:o,"/approve-staff/list?page=").concat(e.page,"&limit=").concat(e.limit,"&date=").concat(e.date?e.date:"")}),a=e=>e.query({query:e=>"/ins/".concat(e||o,"/pending-staff/list")}),l=e=>e.query({query:e=>"/ins/staff/".concat(e)}),u=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:o,"/approve-student/list?page=").concat(e.page,"&limit=").concat(e.limit)}),c=e=>e.query({query:e=>"/ins/student/".concat(e)}),d=e=>e.query({query:e=>"/ins/".concat(o,"/followers-array?page=").concat(e,"&limit=10")}),v=e=>e.query({query:e=>"/ins/".concat(null===e||void 0===e?void 0:e.id,"/announcemnt?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(e.limit)}),h=e=>e.query({query:e=>"/ins/".concat(o,"/all/star-announcement?page=").concat(e,"&limit=10")}),y=e=>e.query({query:e=>"/ins/one/announcement/".concat(e)}),m=e=>e.query({query:e=>"/ins/".concat(o||e,"/dash")}),f=e=>e.query({query:e=>"/ins/".concat(e||o,"/display/person-array")}),p=e=>e.mutation({query:e=>({url:"/ins/".concat(o,"/display-person"),method:"POST",body:e})}),g=e=>e.mutation({query:e=>({url:"/ins/".concat(e.did,"/display-person/update"),method:"PATCH",body:e})}),q=e=>e.mutation({query:e=>({url:"/ins/".concat(o,"/display-person/").concat(e.did,"/delete/").concat(e.uid),method:"DELETE",body:e})}),S=e=>e.query({query:e=>"/ins/dashboard/".concat(o,"/notify?page=").concat(e,"&limit=10")}),A=e=>e.mutation({query:e=>({url:"/ins/".concat(e,"/star-announcement"),method:"POST"})}),_=e=>e.query({query:e=>({url:"/search/".concat(null!==e&&void 0!==e&&e.id?null===e||void 0===e?void 0:e.id:o,"/staff?search=").concat(e.search,"&page=").concat(e.page,"&limit=").concat(e.limit)})}),P=e=>e.query({query:e=>({url:"/search/".concat(o,"/student?search=").concat(e,"&page=",1,"&limit=",5)})}),R=e=>e.query({query:e=>({url:"/search/institute/".concat(o,"/allsearch?search=").concat(e,"&page=",1,"&limit=",5)})}),w=e=>e.mutation({query:e=>({url:"/ins/".concat(o,"/staff/approve/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),I=e=>e.mutation({query:e=>({url:"/ins".concat(o,"/staff/reject/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),U=e=>e.query({query:()=>({url:"/auth/login"})}),k=e=>e.mutation({query:e=>({url:"/ins/".concat(o,"/staff/code"),method:"POST",body:e})}),L=e=>e.query({query:()=>({url:"/ins/".concat(o,"/staff-code")})}),Q=e=>e.query({query:()=>"/all/user/list/data/"}),j=e=>e.query({query:e=>"/user/".concat(e,"/profile")}),x=e=>e.query({query:e=>"/user/profile/".concat(e)}),N=e=>e.query({query:e=>"/user/".concat(null===e||void 0===e?void 0:e.id,"/ins-announcement?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(null===e||void 0===e?void 0:e.limit)}),O=e=>e.query({query:e=>"/user/".concat(o||e,"/dash/query")}),F=e=>e.query({query:e=>"/user/dashboard/".concat(o,"/notify?page=").concat(e,"&limit=10")}),D=e=>e.mutation({query:e=>({url:"/user/".concat(o,"/recovery-mail"),method:"POST",body:e})}),M=e=>e.mutation({query:e=>({url:"/user/phone/info/".concat(o),method:"POST",body:e})}),b=e=>e.mutation({query:e=>({url:"/extra/age/".concat(o),method:"PATCH"})}),G=e=>e.query({query:e=>({url:"/extra/age/".concat(o,"/get"),method:"GET"})}),C=e=>e.query({query:e=>"/fees/student/".concat(e)}),T=e=>e.query({query:()=>"/extra/random/query"}),Z=e=>e.mutation({query:e=>({url:"/ins/destroy/announcement/".concat(null===e||void 0===e?void 0:e.annId),method:"DELETE"})});const E=n(85064).K.injectEndpoints({endpoints:e=>({postGetInTouch:r(e),postUserRecoveryMail:D(e),postUserRecoveryPhoneNumber:M(e),postDeactivateAccount:i(e),getOneUserProfile:j(e),getOneUserProfileUsername:x(e),staffApproveArray:s(e),staffPendingArray:a(e),getOneStaffProfile:l(e),studentApproveArray:u(e),getOneStudentProfile:c(e),getInsFollowersArray:d(e),getAnnouncementArray:v(e),getUserAnnouncementArray:N(e),getStarAnnouncementArray:h(e),getOneAnnouncement:y(e),getSingleInsData:m(e),getSingleUserData:O(e),getDisplayPerson:f(e),addDisplayPerson:p(e),editDisplayPerson:g(e),deleteDisplayPerson:q(e),getAllNotifications:S(e),getAllUserNotifications:F(e),markStarAnnouncement:A(e),staffSearch:_(e),studentSearch:P(e),universalSearch:R(e),markAsApprove:w(e),markAsReject:I(e),checkLoginUser:U(e),randomCode:k(e),instituteStaffCode:L(e),getAllUserArray:Q(e),patchUserRestrictAge:b(e),getUsserAgeRestriction:G(e),getStudentFeesArray:C(e),randomIns:T(e),instituteRemoveAnnouncement:Z(e)})}),{usePatchUserRestrictAgeMutation:B,useGetUsserAgeRestrictionQuery:H,usePostGetInTouchMutation:W,usePostUserRecoveryMailMutation:z,usePostUserRecoveryPhoneNumberMutation:K,useGetOneUserProfileQuery:J,useGetOneUserProfileUsernameQuery:V,useGetSingleInsDataQuery:$,useGetSingleUserDataQuery:X,useGetDisplayPersonQuery:Y,useEditDisplayPersonMutation:ee,useAddDisplayPersonMutation:te,useDeleteDisplayPersonMutation:ne,useGetAllNotificationsQuery:oe,useGetAllUserNotificationsQuery:re,useStaffPendingArrayQuery:ie,useStaffApproveArrayQuery:se,useGetOneStaffProfileQuery:ae,useStudentApproveArrayQuery:le,useGetOneStudentProfileQuery:ue,useGetInsFollowersArrayQuery:ce,useGetAnnouncementArrayQuery:de,useGetUserAnnouncementArrayQuery:ve,useGetStarAnnouncementArrayQuery:he,useGetOneAnnouncementQuery:ye,useMarkStarAnnouncementMutation:me,useStaffSearchQuery:fe,useStudentSearchQuery:pe,useUniversalSearchQuery:ge,useMarkAsApproveMutation:qe,useMarkAsRejectMutation:Se,useCheckLoginUserQuery:Ae,useRandomCodeMutation:_e,useInstituteStaffCodeQuery:Pe,useGetAllUserArrayQuery:Re,useGetStudentFeesArrayQuery:we,useRandomInsQuery:Ie,useInstituteRemoveAnnouncementMutation:Ue}=E},62926:(e,t,n)=>{n.d(t,{Z:()=>o});const o={search_hr:"SearchStyle_search_hr__IuBiN",search_result_container:"SearchStyle_search_result_container__ZKsy6",search_result_container_heading:"SearchStyle_search_result_container_heading__EbGzG",searchResult:"SearchStyle_searchResult__wSSyA",searchResultLeft:"SearchStyle_searchResultLeft__+W4R0",connectBtn:"SearchStyle_connectBtn__VQuDg"}}}]);
//# sourceMappingURL=60221.01bc5fef.chunk.js.map