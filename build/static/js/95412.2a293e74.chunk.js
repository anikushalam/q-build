"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[95412],{12923:(e,l,s)=>{s.d(l,{Ec:()=>x,Em:()=>k,JM:()=>v,NS:()=>a,Pg:()=>_,Q_:()=>p,RH:()=>h,Tv:()=>o,U_:()=>g,VN:()=>r,Wj:()=>d,ZS:()=>u,_8:()=>S,d5:()=>c,tB:()=>f,vI:()=>j,yx:()=>n,zO:()=>m});var i=s(91007),t=s(58208);const a=e=>{const{data:l,refetch:s}=(0,t.YD)(e.search,{skip:e.skip});return{instituteAllSearch:l,instituteAllSearchRefetch:s}},r=()=>{const[e]=(0,t.ak)();return[e]},n=()=>{const[e]=(0,t.WL)();return[e]},o=e=>{const{data:l,refetch:s}=(0,t.pH)(e.list,{skip:e.skip});return{instituteFollowList:l,instituteFollowListRefetch:s}},c=e=>{const{data:l,refetch:s}=(0,t.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:l,instituteOwnFollowingListRefetch:s}},d=()=>{const[e]=(0,t.Ky)();return[e]},u=e=>{const{data:l,refetch:s}=(0,t.p8)(e.list);return{userFollowList:l,userFollowListRefetch:s}},h=e=>{const{data:l,refetch:s}=(0,t.Wv)(e);return{userFollowingList:l,userFollowingListRefetch:s}},v=e=>{const{data:l,refetch:s}=(0,t.sz)(e.search,{skip:e.skip});return{userAllSearch:l,userAllSearchRefetch:s}},_=()=>{const[e]=(0,t.Mk)();return[e]},m=()=>{const[e]=(0,t.$i)();return[e]},f=()=>{const[e]=(0,t.Do)();return[e]},g=()=>{const[e]=(0,t.He)();return[e]},p=()=>{const[e]=(0,t.vg)();return[e]},x=()=>{const[e]=(0,t.OO)();return[e]},S=e=>{const{data:l,refetch:s}=(0,t.N2)(e);return{userCircleList:l,userCircleListRefetch:s}},j=e=>{const{data:l,refetch:s}=(0,i.x6)(e.search,{skip:e.skip});return{assignSearchStaff:l,assignSearchStaffRefetch:s}},k=e=>{const{data:l,refetch:s}=(0,t.SJ)(e);return{universalUser:l,universalUserRefetch:s}}},51615:(e,l,s)=>{s.d(l,{Z:()=>n});s(72791);var i=s(54164),t=s(51857),a=s(80184);const r=e=>{let{customStyle:l,children:s}=e;return(0,a.jsx)("div",{className:t.Z.search_card,style:{...l},children:s})},n=e=>{let{children:l,customStyle:s}=e;return(0,a.jsx)(a.Fragment,{children:i.createPortal((0,a.jsx)(r,{children:l,customStyle:s}),document.getElementById("overlay"))})}},3324:(e,l,s)=>{s.d(l,{Z:()=>n});s(72791);var i=s(51857),t=s(16871),a=s(39230),r=s(80184);const n=e=>{let{width:l,searchQuery:s,setSearchQuery:n,username:o,onClose:c}=e;const d=(0,t.s0)(),{t:u}=(0,a.$G)();return(0,r.jsxs)("div",{className:i.Z.search_container,style:{width:"".concat(l)},children:[(0,r.jsx)("img",{alt:"search icon for question",src:"/images/left-nav-icon.svg",onClick:c,className:i.Z.search_container_back}),(0,r.jsxs)("div",{className:i.Z.search_container_text,children:[(0,r.jsx)("img",{className:i.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,r.jsx)("input",{type:"text",placeholder:u("search-label"),onChange:e=>n(e.target.value),onKeyUp:e=>{"Enter"!==e.key&&13!==e.keyCode||(c(),d("/q/".concat(o,"/search"),{state:{search:s}}))},autoFocus:!0})]})]})}},84489:(e,l,s)=>{s.d(l,{Z:()=>a});s(72791);var i=s(51857),t=s(80184);const a=e=>{let{onClose:l,customStyleBackdrop:s}=e;return(0,t.jsx)("div",{className:i.Z.search_backdrop,style:{...s},onClick:l})}},64556:(e,l,s)=>{s.d(l,{Z:()=>d});s(72791);var i=s(62926),t=s(43504),a=s(69721),r=s(95048),n=s(65543),o=s(98990),c=s(80184);const d=e=>{var l;let{staff:s}=e;const d=(0,r.I0)(),{showScrollbar:u}=(0,n.u)();return(0,c.jsx)("div",{className:i.Z.searchResult,children:(0,c.jsx)(t.rU,{to:"/q/".concat(null===s||void 0===s||null===(l=s.user)||void 0===l?void 0:l.username,"/profile"),onClick:()=>{var e,l;return l=null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e._id,u(),void d(o.S.searchId({id:l,type:"ID",searchAs:"user"}))},children:(0,c.jsxs)("div",{className:i.Z.searchResultLeft,children:[(0,c.jsx)("img",{src:"1"!==(null===s||void 0===s?void 0:s.photoId)?"".concat(a.yI,"/").concat(null===s||void 0===s?void 0:s.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h6",{children:"".concat(null===s||void 0===s?void 0:s.staffFirstName," ").concat(null!==s&&void 0!==s&&s.staffMiddleName?null===s||void 0===s?void 0:s.staffMiddleName:""," ").concat(null===s||void 0===s?void 0:s.staffLastName)}),(0,c.jsx)("h6",{children:null===s||void 0===s?void 0:s.staffROLLNO})]})]})})})}},26647:(e,l,s)=>{s.d(l,{Z:()=>u});s(72791);var i=s(95048),t=s(12923),a=s(98990),r=s(69721),n=s(62926),o=s(43504),c=s(65543),d=s(80184);const u=e=>{var l,s;let{item:u,userId:h,hideModal:v}=e;const _=u.username?u.username:null!==u&&void 0!==u&&u.name?null===u||void 0===u?void 0:u.name:"",m=(0,i.I0)(),f=null===u||void 0===u?void 0:u._id,{showScrollbar:g}=(0,c.u)(),[p]=(0,t.Pg)(),[x]=(0,t.zO)(),[S]=(0,t.Q_)(),[j]=(0,t.Ec)(),[k]=(0,t.tB)(),[w]=(0,t.U_)(),{userFollowingList:y,userFollowingListRefetch:N}=(0,t.RH)({page:1,id:h,limit:100}),{userFollowList:Z,userFollowListRefetch:I}=(0,t.ZS)({list:{page:1,id:h,limit:100}}),{userCircleList:R,userCircleListRefetch:L}=(0,t._8)({page:1,id:h,limit:100});let C=[],F=[],b=[],A=[];for(let i=0;i<(null===y||void 0===y||null===(B=y.uFollowing)||void 0===B?void 0:B.length);i++){var B,H;C.push(null===y||void 0===y||null===(H=y.uFollowing[i])||void 0===H?void 0:H._id)}for(let i=0;i<(null===y||void 0===y||null===(U=y.uInsFollowing)||void 0===U?void 0:U.length);i++){var U,M;F.push(null===y||void 0===y||null===(M=y.uInsFollowing[i])||void 0===M?void 0:M._id)}for(let i=0;i<(null===Z||void 0===Z||null===(O=Z.followers)||void 0===O?void 0:O.length);i++){var O,q;b.push(null===Z||void 0===Z||null===(q=Z.followers[i])||void 0===q?void 0:q._id)}for(let i=0;i<(null===R||void 0===R||null===(D=R.circle)||void 0===D?void 0:D.length);i++){var D,P;A.push(null===R||void 0===R||null===(P=R.circle[i])||void 0===P?void 0:P._id)}const E=()=>{null!==u&&void 0!==u&&u.name?j({InsfollowId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&N()})).catch({}):null!==u&&void 0!==u&&u.username&&x({userFollowId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&N()})).catch({})};return(0,d.jsxs)("div",{className:n.Z.searchResult,children:[(0,d.jsx)(o.rU,{to:"/q/".concat(_,"/profile"),onClick:()=>{g(),u.username?m(a.S.searchId({id:f,type:"ID",searchAs:"user"})):m(a.S.searchId({id:f,type:"ID",searchAs:"institute"})),v(!1)},children:(0,d.jsxs)("div",{className:n.Z.searchResultLeft,children:[null!==u&&void 0!==u&&u.insName?(0,d.jsx)("img",{src:"1"!==(null===u||void 0===u?void 0:u.photoId)?"".concat(r.yI,"/").concat(null===u||void 0===u?void 0:u.insProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}):(0,d.jsx)("img",{src:"1"!==(null===u||void 0===u?void 0:u.photoId)?"".concat(r.yI,"/").concat(null===u||void 0===u?void 0:u.profilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,d.jsxs)("div",{children:[null!==u&&void 0!==u&&u.name?(0,d.jsx)("h6",{children:null===u||void 0===u?void 0:u.name}):null!==u&&void 0!==u&&u.username?(0,d.jsx)("h6",{children:null===u||void 0===u?void 0:u.username}):"",null!==u&&void 0!==u&&u.insName?(0,d.jsx)("p",{children:null===u||void 0===u?void 0:u.insName}):null!==u&&void 0!==u&&u.userLegalName?(0,d.jsx)("p",{children:null===u||void 0===u?void 0:u.userLegalName}):""]})]})}),(null===u||void 0===u||null===(l=u.hostelDepart)||void 0===l?void 0:l[0])&&(0,d.jsx)(o.rU,{to:"/q/".concat(_,"/hostel/profile"),state:{hid:null===u||void 0===u||null===(s=u.hostelDepart)||void 0===s?void 0:s[0]},children:(0,d.jsx)("img",{src:"/images/hostel/hostel-bed-icon.svg",alt:"bed icon",style:{marginRight:"-8rem",cursor:"pointer"},title:"Apply for hostel"})}),null!==u&&void 0!==u&&u.name&&F.includes(null===u||void 0===u?void 0:u._id)||null!==u&&void 0!==u&&u.username&&C.includes(null===u||void 0===u?void 0:u._id)?(0,d.jsx)("div",{onClick:E,className:n.Z.connectBtn,children:"Following"}):null!==u&&void 0!==u&&u.username&&b.includes(null===u||void 0===u?void 0:u._id)?(0,d.jsx)("div",{onClick:()=>{k({followId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&(L(),I())})).catch({})},className:n.Z.connectBtn,children:"Follow Back"}):null!==u&&void 0!==u&&u.username&&A.includes(null===u||void 0===u?void 0:u._id)?(0,d.jsx)("div",{onClick:()=>{w({followId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&(L(),I())})).catch({})},className:n.Z.connectBtn,children:"Circled"}):(0,d.jsx)("div",{className:n.Z.connectBtn,onClick:()=>{null!==u&&void 0!==u&&u.name?S({InsfollowId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&N()})).catch({}):null!==u&&void 0!==u&&u.username&&p({userFollowId:null===u||void 0===u?void 0:u._id}).then((e=>{e.data.message&&N()})).catch({})},children:"Follow"})]})}},95412:(e,l,s)=>{s.r(l),s.d(l,{default:()=>g});var i=s(72791),t=s(43504),a=s(39230),r=s(84489),n=s(3324),o=s(51615),c=s(95048),d=s(763),u=s(62926),h=s(26647),v=s(12923),_=s(91007),m=s(64556),f=s(80184);const g=e=>{var l,s,g;let{onCloseSearch:p}=e;const{t:x}=(0,a.$G)(),[S,j]=(0,i.useState)(""),k=(0,c.v9)((e=>e.idChange)),{userAllSearch:w,userAllSearchRefetch:y}=(0,v.JM)({skip:!S,search:{search:S,page:1,id:null===k||void 0===k?void 0:k.id,limit:6,filter:"all"}}),{data:N,refetch:Z}=(0,_.pu)(null===k||void 0===k?void 0:k.id,{skip:!(null!==k&&void 0!==k&&k.id)});(0,i.useEffect)((()=>{k.id&&Z()}),[null===k||void 0===k?void 0:k.id,Z]);const I=(0,i.useCallback)((0,d.debounce)((e=>j(e)),500),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.Z,{onClose:p}),(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(n.Z,{setSearchQuery:e=>{I(e)},username:null===N||void 0===N||null===(l=N.user)||void 0===l?void 0:l.username,onClose:p,searchQuery:S}),(0,f.jsx)("hr",{className:u.Z.search_hr}),(0,f.jsxs)("div",{className:u.Z.search_result_container,children:[(0,f.jsxs)("div",{className:u.Z.search_result_container_heading,children:[(0,f.jsx)("p",{children:x("search_result")}),(0,f.jsx)(t.rU,{to:"/q/".concat(null===N||void 0===N||null===(s=N.user)||void 0===s?void 0:s.username,"/search"),state:{search:S},onClick:p,children:(0,f.jsx)("p",{children:x("view_all")})})]}),null===w||void 0===w||null===(g=w.universalArrayUser)||void 0===g?void 0:g.map(((e,l)=>null!==e&&void 0!==e&&e.hashtag_name?"":null!==e&&void 0!==e&&e.user?(0,f.jsx)(m.Z,{staff:e},l):(0,f.jsx)(h.Z,{item:e,hideModal:p,userId:null===k||void 0===k?void 0:k.id},l)))]})]})]})}},51857:(e,l,s)=>{s.d(l,{Z:()=>i});const i={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},62926:(e,l,s)=>{s.d(l,{Z:()=>i});const i={search_hr:"SearchStyle_search_hr__IuBiN",search_result_container:"SearchStyle_search_result_container__ZKsy6",search_result_container_heading:"SearchStyle_search_result_container_heading__EbGzG",searchResult:"SearchStyle_searchResult__wSSyA",searchResultLeft:"SearchStyle_searchResultLeft__+W4R0",connectBtn:"SearchStyle_connectBtn__VQuDg"}}}]);
//# sourceMappingURL=95412.2a293e74.chunk.js.map