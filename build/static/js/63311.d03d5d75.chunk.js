"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[63311],{81460:function(e,n,i){i.r(n),i.d(n,{default:function(){return P}});var s=i(29439),l=i(39230),d=i(56959),t=i(72791),a=i(23441),c=i(1413),o=i(3773),r=i(1095),u=i(98684),v=i(16871),_=i(80184),f=function(e){var n,i,s,d,t,a,f,h=e.studentFees,g=(0,l.$G)().t,m=(0,v.UO)(),p=(0,v.s0)(),x=(0,v.TH)();return(0,_.jsxs)("div",{className:o.Z.pending_fees_card,onClick:function(){p("/q/".concat(m.username,"/student/profile"),{state:(0,c.Z)((0,c.Z)({},x.state),{},{sid:null===h||void 0===h?void 0:h._id})})},title:"View Profile",children:[(0,_.jsxs)("div",{className:o.Z.pending_fees_card_container,children:[(0,_.jsx)("img",{alt:"Student Avatar",src:null!==h&&void 0!==h&&h.studentProfilePhoto?"".concat(r.yI,"/").concat(null===h||void 0===h?void 0:h.studentProfilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,_.jsxs)("div",{className:o.Z.pending_fees_card_inner,children:[(0,_.jsx)("h6",{children:"".concat(null===h||void 0===h?void 0:h.studentFirstName," ").concat(null!==h&&void 0!==h&&h.studentMiddleName?null===h||void 0===h?void 0:h.studentMiddleName:""," ").concat(null===h||void 0===h?void 0:h.studentLastName)}),(0,_.jsxs)("p",{children:[g("gr_number")," : ",null!==(n=null===h||void 0===h?void 0:h.studentGRNO)&&void 0!==n?n:""," ",", ",null!==(i=null===h||void 0===h||null===(s=h.department)||void 0===s?void 0:s.dName)&&void 0!==i?i:""]}),(0,_.jsxs)("p",{children:[g("class")," "," : ","".concat(null!==(d=null===h||void 0===h||null===(t=h.studentClass)||void 0===t?void 0:t.className)&&void 0!==d?d:""," -  ").concat(null!==(a=null===h||void 0===h||null===(f=h.studentClass)||void 0===f?void 0:f.classTitle)&&void 0!==a?a:"")]})]})]}),(0,_.jsxs)("div",{className:o.Z.pending_fees_card_inner,children:[(0,_.jsxs)("h6",{children:[g("rs_only")," ",null===h||void 0===h?void 0:h.studentRemainingFeeCount]}),(0,_.jsx)("p",{children:g("pending_fees")})]})]})},h=i(6758),g=i(91427),m=i(57588),p=i(63687),x=i(21348),j=i(90904),Z=i(1669),N=i(55336),k=i(2651),F=function(e){var n,i,c,o=e.fid,r=(0,l.$G)().t,v=(0,t.useState)(""),F=(0,s.Z)(v,2),P=F[0],C=F[1],b=(0,t.useState)(1),y=(0,s.Z)(b,2),L=y[0],S=y[1],q=(0,t.useState)(!0),w=(0,s.Z)(q,2),G=w[0],O=w[1],B=(0,a.YD)({skip:P}),D=(0,s.Z)(B,2),E=D[0],H=D[1],K=(0,h.Dj)({data:{finance:o,page:L,limit:10,search:P},skip:!o}),M=K.financeFeeList,R=K.financeFeeListLoading;(0,t.useEffect)((function(){H&&G&&S((function(e){return e+1}))}),[H,G]),(0,t.useEffect)((function(){var e;if(null!==M&&void 0!==M&&null!==(e=M.list)&&void 0!==e&&e.length){var n,i=(0,g.f)(null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length);O((function(){return i}))}}),[null===M||void 0===M?void 0:M.list]);var T=(0,t.useCallback)((0,m.J)((function(e){S((function(){return 1})),C(e)}),1500),[]);return(0,_.jsxs)(p.Z,{children:[(0,_.jsx)(x.Z,{children:(0,_.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,_.jsx)("h6",{children:r("pending_fees")}),(0,_.jsx)("div",{className:d.Z.fm_search,children:(0,_.jsx)("section",{className:d.Z.fm_search_container,children:(0,_.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,_.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,_.jsx)("input",{type:"text",placeholder:r("search"),onChange:function(e){e.target.value?T(e.target.value):(S((function(){return 1})),C(""))}})]})})})]})}),(0,_.jsx)(j.Z,{}),(0,_.jsxs)(x.Z,{children:[null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.map((function(e,n){var i;return(null===M||void 0===M||null===(i=M.list)||void 0===i?void 0:i.length)===n+1?(0,_.jsx)("div",{ref:E,children:(0,_.jsx)(f,{studentFees:e})},null===e||void 0===e?void 0:e._id):(0,_.jsx)(f,{studentFees:e},null===e||void 0===e?void 0:e._id)})),R?P?(0,_.jsx)(N.Z,{}):(0,_.jsx)(Z.Z,{}):P?0===(null===M||void 0===M||null===(i=M.list)||void 0===i?void 0:i.length)&&(0,_.jsx)(k.Z,{title:"No students found related this search."}):0===(null===M||void 0===M||null===(c=M.list)||void 0===c?void 0:c.length)&&(0,_.jsx)(k.Z,{title:"No students."})]})]})},P=(0,t.memo)(F)},3773:function(e,n){n.Z={pending_fees_card:"PendingFees_pending_fees_card__-fyKu",pending_fees_card_container:"PendingFees_pending_fees_card_container__HBWkK",pending_fees_card_inner:"PendingFees_pending_fees_card_inner__Zi+6O",statistics_balance:"PendingFees_statistics_balance__px4LZ"}}}]);
//# sourceMappingURL=63311.d03d5d75.chunk.js.map