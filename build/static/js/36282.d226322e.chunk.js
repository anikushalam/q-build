"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[36282],{36282:function(n,i,t){t.r(i),t.d(i,{default:function(){return p}});var e=t(29439),a=t(72791),l=t(98684),o=t(55336),_=t(1669),s=t(2651),d=t(23441),r=t(86500),c=t(91427),u=t(57588),f=t(39230),v=t(56959),m=t(37762),h=t(9228),y=t(16871),b=t(1095),j=t(80184),k=(0,a.lazy)((function(){return t.e(19623).then(t.bind(t,87156))})),g=function(n){var i,t,_,s,d,r,c,u,v,m,g,p,Z=n.staff,N=(0,f.$G)().t,U=(0,y.TH)(),q=(0,a.useState)(!1),F=(0,e.Z)(q,2),I=F[0],S=F[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:h.Z.sf_card,onClick:function(){var n,i;null!==Z&&void 0!==Z&&null!==(n=Z.student_feedback)&&void 0!==n&&null!==(i=n[0])&&void 0!==i&&i.analytic_evaluation&&S((function(n){return!n}))},children:(0,j.jsxs)("div",{className:h.Z.sf_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:[(0,j.jsxs)("div",{className:h.Z.sf_card_contatiner,children:[(0,j.jsx)("img",{src:null!==Z&&void 0!==Z&&Z.staffProfilePhoto?"".concat(b.yI,"/").concat(null===Z||void 0===Z?void 0:Z.staffProfilePhoto):"".concat(l.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,j.jsxs)("div",{className:h.Z.sf_card_contatiner_inner,children:[(0,j.jsx)("h6",{children:"".concat(null!==(i=null===Z||void 0===Z?void 0:Z.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(t=null===Z||void 0===Z?void 0:Z.staffMiddleName)&&void 0!==t?t:""," ").concat(null!==(_=null===Z||void 0===Z?void 0:Z.staffLastName)&&void 0!==_?_:"")}),(0,j.jsxs)("p",{children:[N("employee_code"),": ",null!==(s=null===Z||void 0===Z?void 0:Z.staffROLLNO)&&void 0!==s?s:""]})]})]}),null!==Z&&void 0!==Z&&null!==(d=Z.student_feedback)&&void 0!==d&&null!==(r=d[0])&&void 0!==r&&r.analytic_evaluation?(0,j.jsxs)("div",{className:h.Z.sf_card_contatiner_inner,children:[(0,j.jsxs)("h6",{children:[(0,j.jsx)("span",{style:{fontWeight:"400"},children:N("total_feedback")}),": ",x(null===Z||void 0===Z||null===(c=Z.student_feedback)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.subject_analytic),"%"]}),(0,j.jsxs)("p",{children:[N("given_feedback"),": ",null!==(v=null===Z||void 0===Z||null===(m=Z.student_feedback)||void 0===m||null===(g=m[0])||void 0===g?void 0:g.student_give_feedback_count)&&void 0!==v?v:0]})]}):null]})}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)(o.Z,{}),children:I&&(0,j.jsx)(k,{onClose:function(){S((function(n){return!n}))},ifid:null===(p=U.state)||void 0===p?void 0:p.ifid,sid:null===Z||void 0===Z?void 0:Z._id,staff:Z})})]})},x=function(n){if((null===n||void 0===n?void 0:n.length)>0){var i,t=0,e=(0,m.Z)(n);try{for(e.s();!(i=e.n()).done;){var a=i.value;t+=null===a||void 0===a?void 0:a.feedback_percentage}}catch(l){e.e(l)}finally{e.f()}return t=Math.floor(t/(null===n||void 0===n?void 0:n.length))}return 0},p=function(n){n.instituteId;var i,t,m,h=n.ifid,y=(0,f.$G)().t,b=(0,a.useState)(""),k=(0,e.Z)(b,2),x=k[0],p=k[1],Z=(0,a.useState)(1),N=(0,e.Z)(Z,2),U=N[0],q=N[1],F=(0,a.useState)(!0),I=(0,e.Z)(F,2),S=I[0],C=I[1],w=(0,d.YD)({skip:x}),T=(0,e.Z)(w,2),L=T[0],P=T[1],A=(0,r.FQ)({data:{ifid:h,page:U,limit:10,search:x},skip:!h}),G=A.feedbackSubjectTeacherList,W=A.feedbackSubjectTeacherListLoading;(0,a.useEffect)((function(){P&&S&&q((function(n){return n+1}))}),[P,S]),(0,a.useEffect)((function(){var n;if(null!==G&&void 0!==G&&null!==(n=G.list)&&void 0!==n&&n.length){var i,t=(0,c.f)(null===G||void 0===G||null===(i=G.list)||void 0===i?void 0:i.length);C((function(){return t}))}}),[null===G||void 0===G?void 0:G.list]);var Y=(0,a.useCallback)((0,u.J)((function(n){q((function(){return 1})),p(n)}),1500),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:v.Z.fm_header_container,children:(0,j.jsx)("div",{className:v.Z.fm_search_full,children:(0,j.jsx)("section",{className:v.Z.fm_search_full_container,children:(0,j.jsxs)("div",{className:v.Z.fm_search_full_container_inner,children:[(0,j.jsx)("img",{className:v.Z.fm_search_full_icon,alt:"search icon",src:"".concat(l.dB,"/navbar-search.svg")}),(0,j.jsx)("input",{type:"text",placeholder:y("search"),onChange:function(n){n.target.value?Y(n.target.value):(q((function(){return 1})),p(""))}})]})})})}),null===G||void 0===G||null===(i=G.list)||void 0===i?void 0:i.map((function(n,i){var t;return(null===G||void 0===G||null===(t=G.list)||void 0===t?void 0:t.length)===i+1?(0,j.jsx)("div",{ref:L,children:(0,j.jsx)(g,{staff:n})},null===n||void 0===n?void 0:n._id):(0,j.jsx)(g,{staff:n},null===n||void 0===n?void 0:n._id)})),W?x?(0,j.jsx)(o.Z,{}):(0,j.jsx)(_.Z,{}):x?0===(null===G||void 0===G||null===(t=G.list)||void 0===t?void 0:t.length)&&(0,j.jsx)(s.Z,{title:"No staff found related this search.",customStyleContainer:{marginTop:"10rem"}}):0===(null===G||void 0===G||null===(m=G.list)||void 0===m?void 0:m.length)&&(0,j.jsx)(s.Z,{title:"No staff.",customStyleContainer:{marginTop:"10rem"}})]})}},1669:function(n,i,t){var e=t(98684),a=t(63244),l=t(80184);i.Z=function(n){var i=n.isGrey;return(0,l.jsx)("div",{className:a.Z.q_loading,children:(0,l.jsx)("img",{src:"".concat(e.Uw,i?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},2651:function(n,i,t){var e=t(15783),a=t(80184);i.Z=function(n){var i=n.title,t=n.subtitle,l=n.customStyleContainer,o=n.costomTextTitleStyle,_=n.costomTextSubtitleStyle;return(0,a.jsxs)("div",{className:e.Z.empty_container,style:l,children:[i&&(0,a.jsx)("h6",{style:o,children:i}),t&&(0,a.jsx)("p",{style:_,children:t})]})}},57588:function(n,i,t){t.d(i,{J:function(){return e}});var e=function(n,i){var t;return function(){var e=this,a=arguments;clearTimeout(t),t=setTimeout((function(){n.apply(e,a)}),i)}}},91427:function(n,i,t){t.d(i,{f:function(){return e}});var e=function(n){return n%10===0}},9228:function(n,i){i.Z={sf_card:"InstituteFeedback_sf_card__dLh8P",sf_card_contatiner:"InstituteFeedback_sf_card_contatiner__2Zbiq",sf_card_contatiner_inner:"InstituteFeedback_sf_card_contatiner_inner__sjsCw",ifq_card:"InstituteFeedback_ifq_card__vFRNw",ifq_card_inner:"InstituteFeedback_ifq_card_inner__65kmp",ifqo_cantainer:"InstituteFeedback_ifqo_cantainer__YlkE-",ifqo_cantainer_student:"InstituteFeedback_ifqo_cantainer_student__WsWho",ifqocs_active:"InstituteFeedback_ifqocs_active__Wa3As",osa_card:"InstituteFeedback_osa_card__48+nw",gsf_contatiner:"InstituteFeedback_gsf_contatiner__x3ydz",gsf_star_container:"InstituteFeedback_gsf_star_container__0Mu56"}},15783:function(n,i){i.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=36282.d226322e.chunk.js.map