"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[5350],{5350:function(i,t,n){n.r(t);var e=n(1413),o=n(93433),a=n(29439),d=n(72791),s=n(5574),r=n(94721),l=n(27301),c=n(91007),u=n(39230),f=n(69721),v=n(16871),m=n(46500),h=n(55581),p=n(95048),g=n(23441),x=n(57387),Z=n(39480),N=n(80184);function k(i){var t=i.img,n=i.photoId,e=i.name,o=i.index,a=i.setIndex,d=i.assignAdmissionHead;return(0,N.jsxs)("div",{className:l.Z.sidebarbottomitem,onClick:function(){d(),a(o)},children:[(0,N.jsx)("img",{alt:"not found",src:"1"!==n?"".concat(f.yI,"/").concat(t):"/images/member_tab/class/default_avatar.svg"}),(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{className:l.Z.namee,children:e}),(0,N.jsx)("p",{className:l.Z.desig,children:o})]})]})}t.default=function(i){var t=i.libraryModal,n=i.hideModal,b=i.edit,j=i.librarian,I=i.onParentRefetch,y=(0,u.$G)().t,M=(0,d.useState)(!1),_=(0,a.Z)(M,2),L=_[0],R=_[1],C=(0,p.v9)((function(i){return i.idChange})),P=(0,d.useState)(!1),S=(0,a.Z)(P,2),B=S[0],O=S[1],F=(0,d.useState)(!1),D=(0,a.Z)(F,2),q=D[0],A=D[1],E=(0,d.useState)(1),H=(0,a.Z)(E,2),w=H[0],G=H[1],X=(0,d.useState)([]),U=(0,a.Z)(X,2),Q=U[0],T=U[1],J=(0,g.YD)(),Y=(0,a.Z)(J,2),z=(Y[0],Y[1]),K=(0,h.IO)(),V=(0,a.Z)(K,1)[0],W=(0,h.qF)(),$=(0,a.Z)(W,1)[0],ii=(0,p.I0)(),ti=(0,c.OU)({id:null===C||void 0===C?void 0:C.id,page:w,limit:10},{skip:!(null!==C&&void 0!==C&&C.id)}),ni=ti.data,ei=ti.refetch;(0,d.useEffect)((function(){null!==C&&void 0!==C&&C.id&&ei()}),[null===C||void 0===C?void 0:C.id,ei]);var oi=(0,Z.gq)({id:null===C||void 0===C?void 0:C.id},{skip:!(null!==C&&void 0!==C&&C.id)}),ai=oi.oneInstituteDashboard,di=oi.oneInstituteDashboardRefetch;(0,d.useEffect)((function(){null!==C&&void 0!==C&&C.id&&di()}),[null===C||void 0===C?void 0:C.id,di]),(0,d.useEffect)((function(){ni&&(ni.staffIns?T([].concat((0,o.Z)(Q),(0,o.Z)(ni.staffIns))):w>1&&O(!0))}),[ni]),(0,d.useEffect)((function(){z&&(B||G(w+1))}),[z]),(0,d.useEffect)((function(){setTimeout((function(){A(!q)}),3e3)}),[]);var si=(0,v.s0)(),ri=(0,d.useState)(!1),li=(0,a.Z)(ri,2),ci=li[0],ui=li[1],fi=(0,d.useState)(!1),vi=(0,a.Z)(fi,2),mi=vi[0],hi=vi[1],pi=(0,d.useState)({sid:"",name:"",index:"",photoId:"",profilePhoto:""}),gi=(0,a.Z)(pi,2),xi=gi[0],Zi=gi[1],Ni=null===Q||void 0===Q?void 0:Q.filter((function(i){return(null===i||void 0===i?void 0:i._id)!==(null===j||void 0===j?void 0:j._id)}));return(0,N.jsx)(s.Z,{open:t,onClose:function(){return n(!1)},children:(0,N.jsxs)("div",{className:l.Z.admissionModal,children:[(0,N.jsxs)("div",{className:l.Z.admissionModalhead,children:[(0,N.jsx)("h6",{children:y(b?"edit_library":"activate_library")}),(0,N.jsx)("img",{onClick:function(){return n(!1)},src:"/images/close-post-icon.svg",alt:""})]}),(0,N.jsx)(r.Z,{}),(0,N.jsxs)("div",{className:l.Z.admissionModalbody,children:[!ci&&!b&&(0,N.jsxs)("div",{className:l.Z.assignDesignation,onClick:function(){return ui(!0)},children:[(0,N.jsx)("img",{className:l.Z.assignManager,src:"/images/sports/avatar-circle.svg",alt:""}),(0,N.jsxs)("div",{children:[(0,N.jsx)("h6",{children:y("assign_lib_head")}),(0,N.jsx)("p",{children:y("search_from_joined_list")})]})]}),!ci&&b&&(0,N.jsxs)("div",{className:l.Z.sidebarbottomitem,onClick:function(){return ui(!0)},children:[(0,N.jsx)("img",{alt:"not found",src:"1"!==(null===j||void 0===j?void 0:j.photoId)?"".concat(f.yI,"/").concat(null===j||void 0===j?void 0:j.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{className:l.Z.namee,children:"".concat((null===j||void 0===j?void 0:j.staffFirstName)||""," ").concat(null!==j&&void 0!==j&&j.staffMiddleName?null===j||void 0===j?void 0:j.staffMiddleName:""," ").concat((null===j||void 0===j?void 0:j.staffLastName)||"")}),(0,N.jsxs)("p",{className:l.Z.desig,children:[" ",y("index_no")," ",null===j||void 0===j?void 0:j.index]})]})]}),ci&&!mi&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:l.Z.searchbar,children:[(0,N.jsx)("input",{type:"text",placeholder:y("search"),className:"form-control ".concat(l.Z.searchinput)}),(0,N.jsx)("img",{className:l.Z.searchIcon,alt:"img",src:"/images/search-dash-icon.svg"})]}),(0,N.jsx)("div",{className:l.Z.items,children:b?null===Ni||void 0===Ni?void 0:Ni.map((function(i){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{img:i.staffProfilePhoto,photoId:i.photoId,name:"".concat(i.staffFirstName," ").concat(i.staffMiddleName?i.staffMiddleName:""," ").concat(i.staffLastName),index:i.staffROLLNO,setIndex:function(i){return hi(!0)},assignAdmissionHead:function(){Zi((0,e.Z)((0,e.Z)({},xi),{},{sid:null===i||void 0===i?void 0:i._id,name:"".concat(null===i||void 0===i?void 0:i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(null===i||void 0===i?void 0:i.staffLastName),index:null===i||void 0===i?void 0:i.staffROLLNO,photoId:null===i||void 0===i?void 0:i.photoId,profilePhoto:null===i||void 0===i?void 0:i.staffProfilePhoto}))}}),(0,N.jsx)(r.Z,{})]})})):null===Q||void 0===Q?void 0:Q.map((function(i){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{img:i.staffProfilePhoto,photoId:i.photoId,name:"".concat(i.staffFirstName," ").concat(i.staffMiddleName?i.staffMiddleName:""," ").concat(i.staffLastName),index:i.staffROLLNO,setIndex:function(i){return hi(!0)},assignAdmissionHead:function(){Zi((0,e.Z)((0,e.Z)({},xi),{},{sid:null===i||void 0===i?void 0:i._id,name:"".concat(null===i||void 0===i?void 0:i.staffFirstName," ").concat(null!==i&&void 0!==i&&i.staffMiddleName?null===i||void 0===i?void 0:i.staffMiddleName:""," ").concat(null===i||void 0===i?void 0:i.staffLastName),index:null===i||void 0===i?void 0:i.staffROLLNO,photoId:null===i||void 0===i?void 0:i.photoId,profilePhoto:null===i||void 0===i?void 0:i.staffProfilePhoto}))}}),(0,N.jsx)(r.Z,{})]})}))})]}),ci&&mi&&(0,N.jsxs)("div",{className:l.Z.sidebarbottomitem,children:[(0,N.jsx)("img",{alt:"not found",src:"1"!==xi.photoId?"".concat(f.yI,"/").concat(xi.profilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{className:l.Z.namee,children:xi.name}),(0,N.jsxs)("p",{className:l.Z.desig,children:["Index No. ",xi.index]})]})]})]}),(0,N.jsx)("div",{className:l.Z.admissionModalfooter,children:(0,N.jsx)("div",{children:(0,N.jsx)(x.Z,{disabled:L,shwoLoader:!0,buttonText:y(b?"edit_":"activate"),customStyleButton:{minHeight:"2rem",marginTop:"0rem"},onAction:b?function(){xi.sid&&null!==j&&void 0!==j&&j._id&&(R(!0),$({osid:null===j||void 0===j?void 0:j._id,nsid:xi.sid}).then((function(i){var t;ii(m.X.libraryQuery({lid:null===(t=i.data)||void 0===t?void 0:t.library,lhead:xi.sid})),I(),Zi((0,e.Z)((0,e.Z)({},xi),{},{sid:""})),hi(!mi),ui(!ci),R(!1),n()})))}:function(){var i;""!==(null===C||void 0===C?void 0:C.id)&&(R(!0),V({activate:{sid:null!==(i=null===xi||void 0===xi?void 0:xi.sid)&&void 0!==i?i:""},id:null===C||void 0===C?void 0:C.id}).then((function(i){var t,n;i.data.status&&(R(!1),ii(m.X.libraryQuery({lid:null===(t=i.data)||void 0===t?void 0:t.library,lhead:xi.sid})),si("/q/".concat(null===ai||void 0===ai||null===(n=ai.institute)||void 0===n?void 0:n.name,"/library")))})))}})})})]})})}},55581:function(i,t,n){n.d(t,{CU:function(){return x},EI:function(){return f},Ef:function(){return g},H:function(){return b},I4:function(){return h},IO:function(){return a},LN:function(){return m},O_:function(){return r},QJ:function(){return p},SN:function(){return N},Se:function(){return Z},XJ:function(){return M},aA:function(){return u},eQ:function(){return k},iJ:function(){return c},mU:function(){return v},nY:function(){return l},qF:function(){return d},qw:function(){return j},sl:function(){return y},xK:function(){return I},yX:function(){return s}});var e=n(29439),o=n(41311),a=function(){var i=(0,o.CW)();return[(0,e.Z)(i,1)[0]]},d=function(){var i=(0,o.UO)();return[(0,e.Z)(i,1)[0]]},s=function(i){var t=(0,o.dA)(null===i||void 0===i?void 0:i.lid,{skip:null===i||void 0===i?void 0:i.skip});return{getLibraryDetail:t.data,getLibraryDetailRefetch:t.refetch}},r=function(i){var t=(0,o.Zo)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getBooklist:t.data,getBookListRefetch:t.refetch}},l=function(){var i=(0,o.i9)();return[(0,e.Z)(i,1)[0]]},c=function(i){var t=(0,o.wT)(null===i||void 0===i?void 0:i.bid,{skip:null===i||void 0===i?void 0:i.skip});return{getBookDetail:t.data,getBookDetailRefetch:t.refetch}},u=function(i){var t=(0,o.z2)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getIssuedBooklist:t.data,getIssuedBookListRefetch:t.refetch}},f=function(){var i=(0,o.pM)();return[(0,e.Z)(i,1)[0]]},v=function(i){var t=(0,o.jX)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getCollectedBooklist:t.data,getCollectedBookListRefetch:t.refetch}},m=function(){var i=(0,o.Gh)();return[(0,e.Z)(i,1)[0]]},h=function(i){var t=(0,o.NM)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getMemberslist:t.data,getMembersListRefetch:t.refetch}},p=function(i){var t=(0,o.yp)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getMemberBooklist:t.data,getMemberBookListRefetch:t.refetch}},g=function(i){var t=(0,o.A8)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{getMemberHistorylist:t.data,getMemberHistoryListRefetch:t.refetch}},x=function(){var i=(0,o.YG)();return[(0,e.Z)(i,1)[0]]},Z=function(){var i=(0,o.Rn)();return[(0,e.Z)(i,1)[0]]},N=function(i){var t=(0,o.du)(null===i||void 0===i?void 0:i.cid,{skip:null===i||void 0===i?void 0:i.skip});return{getCollectedBookDetail:t.data,getCollectedBookDetailRefetch:t.refetch}},k=function(){var i=(0,o.I1)();return[(0,e.Z)(i,1)[0]]},b=function(i){var t=(0,o.ZS)(i.lid,{skip:null===i||void 0===i?void 0:i.skip});return{libraryGetSiteInfo:t.data,libraryGetSiteInfoRefetch:t.refetch}},j=function(){var i=(0,o.Xr)();return[(0,e.Z)(i,1)[0]]},I=function(i){var t=(0,o.Gw)(i.data,{skip:null===i||void 0===i?void 0:i.skip});return{libraryFineCharge:t.data,libraryFineChargeRefetch:t.refetch}},y=function(){var i=(0,o.UV)();return[(0,e.Z)(i,1)[0]]},M=function(){var i=(0,o.Mb)();return[(0,e.Z)(i,1)[0]]}}}]);
//# sourceMappingURL=5350.6ea1315f.chunk.js.map