"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[21245],{93037:function(e,l,i){i.r(l);var n=i(29439),o=i(72791),s=i(56959),t=i(23441),a=i(91427),d=i(57588),r=i(63687),c=i(21348),v=i(90904),u=i(55336),m=i(1669),f=i(2651),h=i(36132),x=i(39230),_=i(98684),j=i(56986),g=i(80184);l.default=function(e){var l,i,Z,p=e.modId,N=(0,x.$G)().t,y=(0,o.useState)(""),w=(0,n.Z)(y,2),b=w[0],M=w[1],k=(0,o.useState)(1),Y=(0,n.Z)(k,2),L=Y[0],D=Y[1],F=(0,o.useState)(!0),S=(0,n.Z)(F,2),C=S[0],T=S[1],J=(0,t.YD)({skip:b}),P=(0,n.Z)(J,2),q=P[0],A=P[1],E=(0,h.EL)({data:{mid:p,page:L,limit:10,search:b,flow:"Recommend_Section"},skip:!p}),R=E.lmsModeratorAllHistoryList,W=E.lmsModeratorAllHistoryListLoading;(0,o.useEffect)((function(){A&&C&&D((function(e){return e+1}))}),[A,C]),(0,o.useEffect)((function(){var e;if(null!==R&&void 0!==R&&null!==(e=R.list)&&void 0!==e&&e.length){var l,i=(0,a.f)(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length);T((function(){return i}))}}),[null===R||void 0===R?void 0:R.list]);var G=(0,o.useCallback)((0,d.J)((function(e){D((function(){return 1})),M(e)}),1500),[]);return(0,g.jsxs)(r.Z,{children:[(0,g.jsx)(c.Z,{children:(0,g.jsxs)("div",{className:s.Z.fm_header_container,children:[(0,g.jsx)("h6",{children:N("leave_history")}),(0,g.jsx)("div",{className:s.Z.fm_search,children:(0,g.jsx)("section",{className:s.Z.fm_search_container,children:(0,g.jsxs)("div",{className:s.Z.fm_search_container_inner,children:[(0,g.jsx)("img",{className:s.Z.fm_search_icon,alt:"search icon",src:"".concat(_.dB,"/navbar-search.svg")}),(0,g.jsx)("input",{type:"text",placeholder:N("search"),onChange:function(e){e.target.value?G(e.target.value):(D((function(){return 1})),M(""))}})]})})})]})}),(0,g.jsx)(v.Z,{}),(0,g.jsxs)(c.Z,{children:[null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.map((function(e,l){var i;return(null===R||void 0===R||null===(i=R.list)||void 0===i?void 0:i.length)===l+1?(0,g.jsx)("div",{ref:q,children:(0,g.jsx)(j.Z,{leave:e})},null===e||void 0===e?void 0:e._id):(0,g.jsx)(j.Z,{leave:e},null===e||void 0===e?void 0:e._id)})),W?b?(0,g.jsx)(u.Z,{}):(0,g.jsx)(m.Z,{}):b?0===(null===R||void 0===R||null===(i=R.list)||void 0===i?void 0:i.length)&&(0,g.jsx)(f.Z,{title:"No staff leave history found related this search."}):0===(null===R||void 0===R||null===(Z=R.list)||void 0===Z?void 0:Z.length)&&(0,g.jsx)(f.Z,{title:"No staff leave history."})]})]})}},56986:function(e,l,i){var n=i(29439),o=i(72791),s=i(98684),t=i(97892),a=i.n(t),d=i(82824),r=i(1095),c=i(55050),v=i(39230),u=i(45445),m=i(80184);l.Z=function(e){var l,i,t,f,h,x,_,j,g,Z,p,N,y,w,b,M,k,Y,L,D,F,S,C,T,J,P,q,A,E,R,W=e.leave,G=e.whichAccess,H=(0,v.$G)().t,I=(0,o.useState)(!1),$=(0,n.Z)(I,2),B=$[0],z=$[1],K=function(){z((function(e){return!e}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:c.Z.lmsr_card,children:[(0,m.jsx)("div",{className:c.Z.lmsrc_card,children:(0,m.jsxs)("div",{className:c.Z.lmsrc_card_inner,children:[(0,m.jsx)("img",{src:null!==W&&void 0!==W&&null!==(l=W.staff)&&void 0!==l&&l.staffProfilePhoto?"".concat(r.yI,"/").concat(null===W||void 0===W||null===(i=W.staff)||void 0===i?void 0:i.staffProfilePhoto):"".concat(s.p3,"/feed-user-avatar.svg"),alt:"staff icon"}),(0,m.jsxs)("div",{className:c.Z.lmsrci_text,children:[(0,m.jsx)("h6",{children:"".concat(null===W||void 0===W||null===(t=W.staff)||void 0===t?void 0:t.staffFirstName," ").concat(null!==W&&void 0!==W&&null!==(f=W.staff)&&void 0!==f&&f.staffMiddleName?null===W||void 0===W||null===(h=W.staff)||void 0===h?void 0:h.staffMiddleName:""," ").concat(null===W||void 0===W||null===(x=W.staff)||void 0===x?void 0:x.staffLastName)}),(0,m.jsxs)("p",{children:["Sactioning"===G?(0,m.jsxs)(m.Fragment,{children:[H("sanction_on")," ",(0,d.J)(null===W||void 0===W||null===(_=W.sanction)||void 0===_?void 0:_.sanction_on,"LT"),","," ",a()(null===W||void 0===W||null===(j=W.sanction)||void 0===j?void 0:j.sanction_on).format("DD MMM YYYY")]}):"Reviewing"===G?(0,m.jsxs)(m.Fragment,{children:[H("reviewed_on"),(0,d.J)(null===W||void 0===W||null===(g=W.review)||void 0===g?void 0:g.review_on,"LT"),","," ",a()(null===W||void 0===W||null===(Z=W.review)||void 0===Z?void 0:Z.review_on).format("DD MMM YYYY")]}):(0,m.jsxs)(m.Fragment,{children:[H("recomend_on")," ",(0,d.J)(null===W||void 0===W||null===(p=W.recommend)||void 0===p?void 0:p.recommend_ont,"LT"),", ",a()(null===W||void 0===W||null===(N=W.recommend)||void 0===N?void 0:N.recommend_ont).format("DD MMM YYYY"),", "]}),(0,m.jsx)("span",{className:c.Z.lmsrc_date,onClick:K,children:H("for_dates")})]}),(0,m.jsx)("p",{children:"Sactioning"===G?(0,m.jsxs)(m.Fragment,{children:[H("reviewing_by"),"".concat(null!==(y=null===W||void 0===W||null===(w=W.review)||void 0===w||null===(b=w.review_by)||void 0===b?void 0:b.staffFirstName)&&void 0!==y?y:""," ").concat(null!==(M=null===W||void 0===W||null===(k=W.review)||void 0===k||null===(Y=k.review_by)||void 0===Y?void 0:Y.staffMiddleName)&&void 0!==M?M:""," ").concat(null!==(L=null===W||void 0===W||null===(D=W.review)||void 0===D||null===(F=D.review_by)||void 0===F?void 0:F.staffLastName)&&void 0!==L?L:"")]}):"Reviewing"===G?(0,m.jsxs)(m.Fragment,{children:[H("recomending_by"),"".concat(null!==(S=null===W||void 0===W||null===(C=W.recommend)||void 0===C||null===(T=C.recommend_by)||void 0===T?void 0:T.staffFirstName)&&void 0!==S?S:""," ").concat(null!==(J=null===W||void 0===W||null===(P=W.recommend)||void 0===P||null===(q=P.recommend_by)||void 0===q?void 0:q.staffMiddleName)&&void 0!==J?J:""," ").concat(null!==(A=null===W||void 0===W||null===(E=W.recommend)||void 0===E||null===(R=E.recommend_by)||void 0===R?void 0:R.staffLastName)&&void 0!==A?A:"")]}):null})]})]})}),(0,m.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,m.jsxs)("h6",{style:{fontWeight:"400"},children:[H("leave_type")," "," : ",null===W||void 0===W?void 0:W.leave_type]})}),(0,m.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,m.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[H("reason")," "," : ",null===W||void 0===W?void 0:W.reason]})}),(null===W||void 0===W?void 0:W.attach)&&(0,m.jsx)("div",{className:c.Z.lmsrci_text,style:{marginTop:"0.5rem"},children:(0,m.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[H("attachment")," "," : ",(0,m.jsx)("a",{href:"".concat(r.q2,"/").concat(null===W||void 0===W?void 0:W.attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,m.jsx)("span",{className:c.Z.lmsrc_date,children:H("view_attachment")})})]})})]}),B&&(0,m.jsx)(u.Z,{onClose:K,allDate:null===W||void 0===W?void 0:W.date})]})}}}]);
//# sourceMappingURL=21245.8f6c78f7.chunk.js.map