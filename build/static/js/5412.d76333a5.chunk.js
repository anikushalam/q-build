"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[5412],{12923:function(e,n,i){i.d(n,{Ec:function(){return x},Em:function(){return k},JM:function(){return f},NS:function(){return o},Pg:function(){return _},Q_:function(){return Z},RH:function(){return h},Tv:function(){return s},U_:function(){return p},VN:function(){return a},Wj:function(){return d},ZS:function(){return v},_8:function(){return S},d5:function(){return u},tB:function(){return g},vI:function(){return j},yx:function(){return c},zO:function(){return m}});var r=i(29439),t=i(91007),l=i(58208),o=function(e){var n=(0,l.YD)(e.search,{skip:e.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},a=function(){var e=(0,l.ak)();return[(0,r.Z)(e,1)[0]]},c=function(){var e=(0,l.WL)();return[(0,r.Z)(e,1)[0]]},s=function(e){var n=(0,l.pH)(e.list,{skip:e.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},u=function(e){var n=(0,l.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},d=function(){var e=(0,l.Ky)();return[(0,r.Z)(e,1)[0]]},v=function(e){var n=(0,l.p8)(e.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},h=function(e){var n=(0,l.Wv)(e);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},f=function(e){var n=(0,l.sz)(e.search,{skip:e.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},_=function(){var e=(0,l.Mk)();return[(0,r.Z)(e,1)[0]]},m=function(){var e=(0,l.$i)();return[(0,r.Z)(e,1)[0]]},g=function(){var e=(0,l.Do)();return[(0,r.Z)(e,1)[0]]},p=function(){var e=(0,l.He)();return[(0,r.Z)(e,1)[0]]},Z=function(){var e=(0,l.vg)();return[(0,r.Z)(e,1)[0]]},x=function(){var e=(0,l.OO)();return[(0,r.Z)(e,1)[0]]},S=function(e){var n=(0,l.N2)(e);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},j=function(e){var n=(0,t.x6)(e.search,{skip:e.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},k=function(e){var n=(0,l.SJ)(e);return{universalUser:n.data,universalUserRefetch:n.refetch}}},51615:function(e,n,i){i.d(n,{Z:function(){return c}});i(72791);var r=i(54164),t=i(1413),l=i(51857),o=i(80184),a=function(e){var n=e.customStyle,i=e.children;return(0,o.jsx)("div",{className:l.Z.search_card,style:(0,t.Z)({},n),children:i})},c=function(e){var n=e.children,i=e.customStyle;return(0,o.jsx)(o.Fragment,{children:r.createPortal((0,o.jsx)(a,{children:n,customStyle:i}),document.getElementById("overlay"))})}},3324:function(e,n,i){i(72791);var r=i(51857),t=i(16871),l=i(39230),o=i(80184);n.Z=function(e){var n=e.width,i=e.searchQuery,a=e.setSearchQuery,c=e.username,s=e.onClose,u=(0,t.s0)(),d=(0,l.$G)().t;return(0,o.jsxs)("div",{className:r.Z.search_container,style:{width:"".concat(n)},children:[(0,o.jsx)("img",{alt:"search icon for question",src:"/images/left-nav-icon.svg",onClick:s,className:r.Z.search_container_back}),(0,o.jsxs)("div",{className:r.Z.search_container_text,children:[(0,o.jsx)("img",{className:r.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,o.jsx)("input",{type:"text",placeholder:d("search-label"),onChange:function(e){return a(e.target.value)},onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||(s(),u("/q/".concat(c,"/search"),{state:{search:i}}))},autoFocus:!0})]})]})}},84489:function(e,n,i){var r=i(1413),t=(i(72791),i(51857)),l=i(80184);n.Z=function(e){var n=e.onClose,i=e.customStyleBackdrop;return(0,l.jsx)("div",{className:t.Z.search_backdrop,style:(0,r.Z)({},i),onClick:n})}},64556:function(e,n,i){i(72791);var r=i(62926),t=i(43504),l=i(69721),o=i(95048),a=i(65543),c=i(48673),s=i(80184);n.Z=function(e){var n,i=e.staff,u=(0,o.I0)(),d=(0,a.u)().showScrollbar;return(0,s.jsx)("div",{className:r.Z.searchResult,children:(0,s.jsx)(t.rU,{to:"/q/".concat(null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.username,"/profile"),onClick:function(){var e,n;return n=null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e._id,d(),void u(c.S.searchId({id:n,type:"ID",searchAs:"user"}))},children:(0,s.jsxs)("div",{className:r.Z.searchResultLeft,children:[(0,s.jsx)("img",{src:"1"!==(null===i||void 0===i?void 0:i.photoId)?"".concat(l.yI,"/").concat(null===i||void 0===i?void 0:i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"".concat(null===i||void 0===i?void 0:i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(null===i||void 0===i?void 0:i.staffLastName)}),(0,s.jsx)("h6",{children:null===i||void 0===i?void 0:i.staffROLLNO})]})]})})})}},26647:function(e,n,i){var r=i(29439),t=(i(72791),i(95048)),l=i(12923),o=i(48673),a=i(69721),c=i(62926),s=i(43504),u=i(65543),d=i(80184);n.Z=function(e){for(var n,i,v=e.item,h=e.userId,f=e.hideModal,_=v.username?v.username:null!==v&&void 0!==v&&v.name?null===v||void 0===v?void 0:v.name:"",m=(0,t.I0)(),g=null===v||void 0===v?void 0:v._id,p=(0,u.u)().showScrollbar,Z=(0,l.Pg)(),x=(0,r.Z)(Z,1)[0],S=(0,l.zO)(),j=(0,r.Z)(S,1)[0],k=(0,l.Q_)(),w=(0,r.Z)(k,1)[0],y=(0,l.Ec)(),N=(0,r.Z)(y,1)[0],I=(0,l.tB)(),R=(0,r.Z)(I,1)[0],L=(0,l.U_)(),C=(0,r.Z)(L,1)[0],F=(0,l.RH)({page:1,id:h,limit:100}),b=F.userFollowingList,A=F.userFollowingListRefetch,B=(0,l.ZS)({list:{page:1,id:h,limit:100}}),H=B.userFollowList,U=B.userFollowListRefetch,M=(0,l._8)({page:1,id:h,limit:100}),O=M.userCircleList,q=M.userCircleListRefetch,D=[],E=[],P=[],Q=[],G=0;G<(null===b||void 0===b||null===(z=b.uFollowing)||void 0===z?void 0:z.length);G++){var z,J;D.push(null===b||void 0===b||null===(J=b.uFollowing[G])||void 0===J?void 0:J._id)}for(var K=0;K<(null===b||void 0===b||null===(W=b.uInsFollowing)||void 0===W?void 0:W.length);K++){var W,V;E.push(null===b||void 0===b||null===(V=b.uInsFollowing[K])||void 0===V?void 0:V._id)}for(var $=0;$<(null===H||void 0===H||null===(T=H.followers)||void 0===T?void 0:T.length);$++){var T,X;P.push(null===H||void 0===H||null===(X=H.followers[$])||void 0===X?void 0:X._id)}for(var Y=0;Y<(null===O||void 0===O||null===(ee=O.circle)||void 0===ee?void 0:ee.length);Y++){var ee,ne;Q.push(null===O||void 0===O||null===(ne=O.circle[Y])||void 0===ne?void 0:ne._id)}var ie=function(){null!==v&&void 0!==v&&v.name?N({InsfollowId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&A()})).catch({}):null!==v&&void 0!==v&&v.username&&j({userFollowId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&A()})).catch({})};return(0,d.jsxs)("div",{className:c.Z.searchResult,children:[(0,d.jsx)(s.rU,{to:"/q/".concat(_,"/profile"),onClick:function(){p(),v.username?m(o.S.searchId({id:g,type:"ID",searchAs:"user"})):m(o.S.searchId({id:g,type:"ID",searchAs:"institute"})),f(!1)},children:(0,d.jsxs)("div",{className:c.Z.searchResultLeft,children:[null!==v&&void 0!==v&&v.insName?(0,d.jsx)("img",{src:"1"!==(null===v||void 0===v?void 0:v.photoId)?"".concat(a.yI,"/").concat(null===v||void 0===v?void 0:v.insProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}):(0,d.jsx)("img",{src:"1"!==(null===v||void 0===v?void 0:v.photoId)?"".concat(a.yI,"/").concat(null===v||void 0===v?void 0:v.profilePhoto):"/images/member_tab/class/default_avatar.svg",alt:""}),(0,d.jsxs)("div",{children:[null!==v&&void 0!==v&&v.name?(0,d.jsx)("h6",{children:null===v||void 0===v?void 0:v.name}):null!==v&&void 0!==v&&v.username?(0,d.jsx)("h6",{children:null===v||void 0===v?void 0:v.username}):"",null!==v&&void 0!==v&&v.insName?(0,d.jsx)("p",{children:null===v||void 0===v?void 0:v.insName}):null!==v&&void 0!==v&&v.userLegalName?(0,d.jsx)("p",{children:null===v||void 0===v?void 0:v.userLegalName}):""]})]})}),(null===v||void 0===v||null===(n=v.hostelDepart)||void 0===n?void 0:n[0])&&(0,d.jsx)(s.rU,{to:"/q/".concat(_,"/hostel/profile"),state:{hid:null===v||void 0===v||null===(i=v.hostelDepart)||void 0===i?void 0:i[0]},children:(0,d.jsx)("img",{src:"/images/hostel/hostel-bed-icon.svg",alt:"bed icon",style:{marginRight:"-8rem",cursor:"pointer"},title:"Apply for hostel"})}),null!==v&&void 0!==v&&v.name&&E.includes(null===v||void 0===v?void 0:v._id)||null!==v&&void 0!==v&&v.username&&D.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:ie,className:c.Z.connectBtn,children:"Following"}):null!==v&&void 0!==v&&v.username&&P.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:function(){R({followId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&(q(),U())})).catch({})},className:c.Z.connectBtn,children:"Follow Back"}):null!==v&&void 0!==v&&v.username&&Q.includes(null===v||void 0===v?void 0:v._id)?(0,d.jsx)("div",{onClick:function(){C({followId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&(q(),U())})).catch({})},className:c.Z.connectBtn,children:"Circled"}):(0,d.jsx)("div",{className:c.Z.connectBtn,onClick:function(){null!==v&&void 0!==v&&v.name?w({InsfollowId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&A()})).catch({}):null!==v&&void 0!==v&&v.username&&x({userFollowId:null===v||void 0===v?void 0:v._id}).then((function(e){e.data.message&&A()})).catch({})},children:"Follow"})]})}},95412:function(e,n,i){i.r(n);var r=i(29439),t=i(72791),l=i(43504),o=i(39230),a=i(84489),c=i(3324),s=i(51615),u=i(95048),d=i(763),v=i(62926),h=i(26647),f=i(12923),_=i(91007),m=i(64556),g=i(80184);n.default=function(e){var n,i,p,Z=e.onCloseSearch,x=(0,o.$G)().t,S=(0,t.useState)(!0),j=(0,r.Z)(S,2),k=j[0],w=j[1],y=(0,t.useState)(""),N=(0,r.Z)(y,2),I=N[0],R=N[1],L=(0,u.v9)((function(e){return e.idChange})),C=(0,f.JM)({skip:k,search:{search:I,page:1,id:null===L||void 0===L?void 0:L.id,limit:6,filter:"all"}}),F=C.userAllSearch,b=C.userAllSearchRefetch,A=(0,_.pu)(null===L||void 0===L?void 0:L.id,{skip:!(null!==L&&void 0!==L&&L.id)}),B=A.data,H=A.refetch;(0,t.useEffect)((function(){L.id&&H()}),[null===L||void 0===L?void 0:L.id,H]),(0,t.useEffect)((function(){I&&U()}),[I]);var U=function(){w(!1),b()},M=(0,t.useCallback)((0,d.debounce)((function(e){return R(e)}),500),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z,{onClose:Z}),(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(c.Z,{setSearchQuery:function(e){M(e)},username:null===B||void 0===B||null===(n=B.user)||void 0===n?void 0:n.username,onClose:Z,searchQuery:I}),(0,g.jsx)("hr",{className:v.Z.search_hr}),(0,g.jsxs)("div",{className:v.Z.search_result_container,children:[(0,g.jsxs)("div",{className:v.Z.search_result_container_heading,children:[(0,g.jsx)("p",{children:x("search_result")}),(0,g.jsx)(l.rU,{to:"/q/".concat(null===B||void 0===B||null===(i=B.user)||void 0===i?void 0:i.username,"/search"),state:{search:I},onClick:Z,children:(0,g.jsx)("p",{children:x("view_all")})})]}),null===F||void 0===F||null===(p=F.universalArrayUser)||void 0===p?void 0:p.map((function(e,n){return null!==e&&void 0!==e&&e.hashtag_name?"":null!==e&&void 0!==e&&e.user?(0,g.jsx)(m.Z,{staff:e},n):(0,g.jsx)(h.Z,{item:e,hideModal:Z,userId:null===L||void 0===L?void 0:L.id},n)}))]})]})]})}},51857:function(e,n){n.Z={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},62926:function(e,n){n.Z={search_hr:"SearchStyle_search_hr__IuBiN",search_result_container:"SearchStyle_search_result_container__ZKsy6",search_result_container_heading:"SearchStyle_search_result_container_heading__EbGzG",searchResult:"SearchStyle_searchResult__wSSyA",searchResultLeft:"SearchStyle_searchResultLeft__+W4R0",connectBtn:"SearchStyle_connectBtn__VQuDg"}}}]);
//# sourceMappingURL=5412.d76333a5.chunk.js.map