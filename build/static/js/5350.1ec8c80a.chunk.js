"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[5350],{5350:function(t,i,n){n.r(i);var e=n(1413),o=n(93433),r=n(29439),a=n(72791),d=n(5574),s=n(94721),u=n(27301),l=n(91007),c=n(39230),f=n(69721),v=n(16871),h=n(46500),m=n(55581),p=n(95048),Z=n(23441),g=n(57387),x=n(39480),k=n(80184);function b(t){var i=t.img,n=t.photoId,e=t.name,o=t.index,r=t.setIndex,a=t.assignAdmissionHead;return(0,k.jsxs)("div",{className:u.Z.sidebarbottomitem,onClick:function(){a(),r(o)},children:[(0,k.jsx)("img",{alt:"not found",src:"1"!==n?"".concat(f.yI,"/").concat(i):"/images/member_tab/class/default_avatar.svg"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:u.Z.namee,children:e}),(0,k.jsx)("p",{className:u.Z.desig,children:o})]})]})}i.default=function(t){var i=t.libraryModal,n=t.hideModal,N=t.edit,y=t.librarian,j=t.onParentRefetch,I=(0,c.$G)().t,M=(0,a.useState)(!1),L=(0,r.Z)(M,2),_=L[0],R=L[1],O=(0,p.v9)((function(t){return t.idChange})),B=(0,a.useState)(!1),S=(0,r.Z)(B,2),C=S[0],H=S[1],P=(0,a.useState)(!1),F=(0,r.Z)(P,2),A=F[0],E=F[1],G=(0,a.useState)(1),D=(0,r.Z)(G,2),q=D[0],w=D[1],U=(0,a.useState)([]),X=(0,r.Z)(U,2),Q=X[0],W=X[1],J=(0,Z.YD)(),T=(0,r.Z)(J,2),Y=(T[0],T[1]),z=(0,m.IO)(),V=(0,r.Z)(z,1)[0],K=(0,m.qF)(),$=(0,r.Z)(K,1)[0],tt=(0,p.I0)(),it=(0,l.OU)({id:null===O||void 0===O?void 0:O.id,page:q,limit:10},{skip:!(null!==O&&void 0!==O&&O.id)}),nt=it.data,et=it.refetch;(0,a.useEffect)((function(){null!==O&&void 0!==O&&O.id&&et()}),[null===O||void 0===O?void 0:O.id,et]);var ot=(0,x.gq)({id:null===O||void 0===O?void 0:O.id},{skip:!(null!==O&&void 0!==O&&O.id)}),rt=ot.oneInstituteDashboard,at=ot.oneInstituteDashboardRefetch;(0,a.useEffect)((function(){null!==O&&void 0!==O&&O.id&&at()}),[null===O||void 0===O?void 0:O.id,at]),(0,a.useEffect)((function(){nt&&(nt.staffIns?W([].concat((0,o.Z)(Q),(0,o.Z)(nt.staffIns))):q>1&&H(!0))}),[nt]),(0,a.useEffect)((function(){Y&&(C||w(q+1))}),[Y]),(0,a.useEffect)((function(){setTimeout((function(){E(!A)}),3e3)}),[]);var dt=(0,v.s0)(),st=(0,a.useState)(!1),ut=(0,r.Z)(st,2),lt=ut[0],ct=ut[1],ft=(0,a.useState)(!1),vt=(0,r.Z)(ft,2),ht=vt[0],mt=vt[1],pt=(0,a.useState)({sid:"",name:"",index:"",photoId:"",profilePhoto:""}),Zt=(0,r.Z)(pt,2),gt=Zt[0],xt=Zt[1],kt=null===Q||void 0===Q?void 0:Q.filter((function(t){return(null===t||void 0===t?void 0:t._id)!==(null===y||void 0===y?void 0:y._id)}));return(0,k.jsx)(d.Z,{open:i,onClose:function(){return n(!1)},children:(0,k.jsxs)("div",{className:u.Z.admissionModal,children:[(0,k.jsxs)("div",{className:u.Z.admissionModalhead,children:[(0,k.jsx)("h6",{children:I(N?"edit_library":"activate_library")}),(0,k.jsx)("img",{onClick:function(){return n(!1)},src:"/images/close-post-icon.svg",alt:""})]}),(0,k.jsx)(s.Z,{}),(0,k.jsxs)("div",{className:u.Z.admissionModalbody,children:[!lt&&!N&&(0,k.jsxs)("div",{className:u.Z.assignDesignation,onClick:function(){return ct(!0)},children:[(0,k.jsx)("img",{className:u.Z.assignManager,src:"/images/sports/avatar-circle.svg",alt:""}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h6",{children:I("assign_lib_head")}),(0,k.jsx)("p",{children:I("search_from_joined_list")})]})]}),!lt&&N&&(0,k.jsxs)("div",{className:u.Z.sidebarbottomitem,onClick:function(){return ct(!0)},children:[(0,k.jsx)("img",{alt:"not found",src:"1"!==(null===y||void 0===y?void 0:y.photoId)?"".concat(f.yI,"/").concat(null===y||void 0===y?void 0:y.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:u.Z.namee,children:"".concat((null===y||void 0===y?void 0:y.staffFirstName)||""," ").concat(null!==y&&void 0!==y&&y.staffMiddleName?null===y||void 0===y?void 0:y.staffMiddleName:""," ").concat((null===y||void 0===y?void 0:y.staffLastName)||"")}),(0,k.jsxs)("p",{className:u.Z.desig,children:[" ",I("index_no")," ",null===y||void 0===y?void 0:y.index]})]})]}),lt&&!ht&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:u.Z.searchbar,children:[(0,k.jsx)("input",{type:"text",placeholder:I("search"),className:"form-control ".concat(u.Z.searchinput)}),(0,k.jsx)("img",{className:u.Z.searchIcon,alt:"img",src:"/images/search-dash-icon.svg"})]}),(0,k.jsx)("div",{className:u.Z.items,children:N?null===kt||void 0===kt?void 0:kt.map((function(t){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{img:t.staffProfilePhoto,photoId:t.photoId,name:"".concat(t.staffFirstName," ").concat(t.staffMiddleName?t.staffMiddleName:""," ").concat(t.staffLastName),index:t.staffROLLNO,setIndex:function(t){return mt(!0)},assignAdmissionHead:function(){xt((0,e.Z)((0,e.Z)({},gt),{},{sid:null===t||void 0===t?void 0:t._id,name:"".concat(null===t||void 0===t?void 0:t.staffFirstName," ").concat(null!==t&&void 0!==t&&t.staffMiddleName?null===t||void 0===t?void 0:t.staffMiddleName:""," ").concat(null===t||void 0===t?void 0:t.staffLastName),index:null===t||void 0===t?void 0:t.staffROLLNO,photoId:null===t||void 0===t?void 0:t.photoId,profilePhoto:null===t||void 0===t?void 0:t.staffProfilePhoto}))}}),(0,k.jsx)(s.Z,{})]})})):null===Q||void 0===Q?void 0:Q.map((function(t){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{img:t.staffProfilePhoto,photoId:t.photoId,name:"".concat(t.staffFirstName," ").concat(t.staffMiddleName?t.staffMiddleName:""," ").concat(t.staffLastName),index:t.staffROLLNO,setIndex:function(t){return mt(!0)},assignAdmissionHead:function(){xt((0,e.Z)((0,e.Z)({},gt),{},{sid:null===t||void 0===t?void 0:t._id,name:"".concat(null===t||void 0===t?void 0:t.staffFirstName," ").concat(null!==t&&void 0!==t&&t.staffMiddleName?null===t||void 0===t?void 0:t.staffMiddleName:""," ").concat(null===t||void 0===t?void 0:t.staffLastName),index:null===t||void 0===t?void 0:t.staffROLLNO,photoId:null===t||void 0===t?void 0:t.photoId,profilePhoto:null===t||void 0===t?void 0:t.staffProfilePhoto}))}}),(0,k.jsx)(s.Z,{})]})}))})]}),lt&&ht&&(0,k.jsxs)("div",{className:u.Z.sidebarbottomitem,children:[(0,k.jsx)("img",{alt:"not found",src:"1"!==gt.photoId?"".concat(f.yI,"/").concat(gt.profilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:u.Z.namee,children:gt.name}),(0,k.jsxs)("p",{className:u.Z.desig,children:["Index No. ",gt.index]})]})]})]}),(0,k.jsx)("div",{className:u.Z.admissionModalfooter,children:(0,k.jsx)("div",{children:(0,k.jsx)(g.Z,{disabled:_,shwoLoader:!0,buttonText:I(N?"edit_":"activate"),customStyleButton:{minHeight:"2rem",marginTop:"0rem"},onAction:N?function(){gt.sid&&null!==y&&void 0!==y&&y._id&&(R(!0),$({osid:null===y||void 0===y?void 0:y._id,nsid:gt.sid}).then((function(t){var i;tt(h.X.libraryQuery({lid:null===(i=t.data)||void 0===i?void 0:i.library,lhead:gt.sid})),j(),xt((0,e.Z)((0,e.Z)({},gt),{},{sid:""})),mt(!ht),ct(!lt),R(!1),n()})))}:function(){var t;""!==(null===O||void 0===O?void 0:O.id)&&(R(!0),V({activate:{sid:null!==(t=null===gt||void 0===gt?void 0:gt.sid)&&void 0!==t?t:""},id:null===O||void 0===O?void 0:O.id}).then((function(t){var i,n;t.data.status&&(R(!1),tt(h.X.libraryQuery({lid:null===(i=t.data)||void 0===i?void 0:i.library,lhead:gt.sid})),dt("/q/".concat(null===rt||void 0===rt||null===(n=rt.institute)||void 0===n?void 0:n.name,"/library")))})))}})})})]})})}},55581:function(t,i,n){n.d(i,{B6:function(){return P},CU:function(){return x},EI:function(){return f},Ef:function(){return g},Fy:function(){return H},H:function(){return y},I4:function(){return p},IO:function(){return r},JH:function(){return G},LN:function(){return m},O_:function(){return s},QJ:function(){return Z},R3:function(){return A},SN:function(){return b},Se:function(){return k},Uc:function(){return U},XJ:function(){return L},Yv:function(){return S},Zd:function(){return E},Zj:function(){return O},_s:function(){return R},a8:function(){return B},aA:function(){return c},ar:function(){return F},dH:function(){return C},eQ:function(){return N},iJ:function(){return l},mU:function(){return h},n9:function(){return v},nY:function(){return u},oW:function(){return _},pV:function(){return q},qF:function(){return a},qw:function(){return j},sN:function(){return w},sl:function(){return M},xK:function(){return I},yX:function(){return d},z2:function(){return D}});var e=n(29439),o=n(41311),r=function(){var t=(0,o.CW)();return[(0,e.Z)(t,1)[0]]},a=function(){var t=(0,o.UO)();return[(0,e.Z)(t,1)[0]]},d=function(t){var i=(0,o.dA)(null===t||void 0===t?void 0:t.lid,{skip:null===t||void 0===t?void 0:t.skip});return{getLibraryDetail:i.data,getLibraryDetailRefetch:i.refetch}},s=function(t){var i=(0,o.Zo)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getBooklist:i.data,getBookListRefetch:i.refetch}},u=function(){var t=(0,o.i9)();return[(0,e.Z)(t,1)[0]]},l=function(t){var i=(0,o.wT)(null===t||void 0===t?void 0:t.bid,{skip:null===t||void 0===t?void 0:t.skip});return{getBookDetail:i.data,getBookDetailRefetch:i.refetch}},c=function(t){var i=(0,o.z2)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getIssuedBooklist:i.data,getIssuedBookListRefetch:i.refetch}},f=function(){var t=(0,o.pM)();return[(0,e.Z)(t,1)[0]]},v=function(){var t=(0,o.nv)();return[(0,e.Z)(t,1)[0]]},h=function(t){var i=(0,o.jX)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getCollectedBooklist:i.data,getCollectedBookListRefetch:i.refetch}},m=function(){var t=(0,o.Gh)();return[(0,e.Z)(t,1)[0]]},p=function(t){var i=(0,o.NM)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getMemberslist:i.data,getMembersListRefetch:i.refetch}},Z=function(t){var i=(0,o.yp)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getMemberBooklist:i.data,getMemberBookListRefetch:i.refetch}},g=function(t){var i=(0,o.A8)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{getMemberHistorylist:i.data,getMemberHistoryListRefetch:i.refetch}},x=function(){var t=(0,o.YG)();return[(0,e.Z)(t,1)[0]]},k=function(){var t=(0,o.Rn)();return[(0,e.Z)(t,1)[0]]},b=function(t){var i=(0,o.du)(null===t||void 0===t?void 0:t.cid,{skip:null===t||void 0===t?void 0:t.skip});return{getCollectedBookDetail:i.data,getCollectedBookDetailRefetch:i.refetch}},N=function(){var t=(0,o.I1)();return[(0,e.Z)(t,1)[0]]},y=function(t){var i=(0,o.ZS)(t.lid,{skip:null===t||void 0===t?void 0:t.skip});return{libraryGetSiteInfo:i.data,libraryGetSiteInfoRefetch:i.refetch}},j=function(){var t=(0,o.Xr)();return[(0,e.Z)(t,1)[0]]},I=function(t){var i=(0,o.Gw)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{libraryFineCharge:i.data,libraryFineChargeRefetch:i.refetch}},M=function(){var t=(0,o.UV)();return[(0,e.Z)(t,1)[0]]},L=function(){var t=(0,o.Mb)();return[(0,e.Z)(t,1)[0]]},_=function(t){var i=(0,o.BF)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{libraryAllExcelExport:i.data,libraryAllExcelExportRefetch:i.refetch}},R=function(){var t=(0,o.Ww)();return[(0,e.Z)(t,1)[0]]},O=function(){var t=(0,o.NQ)();return[(0,e.Z)(t,1)[0]]},B=function(){var t=(0,o.WK)();return[(0,e.Z)(t,1)[0]]},S=function(){var t=(0,o.aA)();return[(0,e.Z)(t,1)[0]]},C=function(){var t=(0,o.V8)();return[(0,e.Z)(t,1)[0]]},H=function(){var t=(0,o.d6)();return[(0,e.Z)(t,1)[0]]},P=function(){var t=(0,o.iL)();return[(0,e.Z)(t,1)[0]]},F=function(){var t=(0,o.aU)();return[(0,e.Z)(t,1)[0]]},A=function(t){var i=(0,o.dB)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{libraryGetStudentInOutHistory:i.data,libraryGetStudentInOutHistoryRefetch:i.refetch}},E=function(t){var i=(0,o.O6)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{libraryGetInOutHistory:i.data,libraryGetInOutHistoryRefetch:i.refetch}},G=function(t){var i=(0,o.$A)(t.data,{skip:null===t||void 0===t?void 0:t.skip});return{libraryGetStocktakeHistory:i.data,libraryGetStocktakeHistoryRefetch:i.refetch}},D=function(t){var i=(0,o.Az)(t.data,{skip:t.skip});return{getModeratorByLibrary:i.data,getModeratorByLibraryRefetch:i.refetch}},q=function(){var t=(0,o.a6)();return[(0,e.Z)(t,1)[0]]},w=function(){var t=(0,o.WE)();return[(0,e.Z)(t,1)[0]]},U=function(){var t=(0,o.LO)();return[(0,e.Z)(t,1)[0]]}}}]);
//# sourceMappingURL=5350.1ec8c80a.chunk.js.map