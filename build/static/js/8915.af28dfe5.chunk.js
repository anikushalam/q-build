"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[8915],{8915:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(39230),a=i(98684),_=i(56959),o=i(93638),l=i(72791),s=i(9228),c=i(2651),r=i(55336),d=i(80184);const u=(0,l.lazy)((()=>i.e(28799).then(i.bind(i,28799)))),v=(0,l.lazy)((()=>i.e(27352).then(i.bind(i,27352)))),m=e=>{let{ifid:t,optionCount:i,onRefetch:m,questionCount:h,questionList:y,isEvaluate:b}=e;const{t:p}=(0,n.$G)(),[q,k]=(0,l.useState)(!1),[j,x]=(0,l.useState)(""),[g,U]=(0,l.useState)([]);(0,l.useEffect)((()=>{(null===y||void 0===y?void 0:y.length)>0&&U(y)}),[y]);const C=()=>{k((e=>!e))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:_.Z.fm_header_container,children:(0,d.jsxs)("div",{className:_.Z.fm_search_full,children:[(0,d.jsx)("section",{className:_.Z.fm_search_full_container,children:(0,d.jsxs)("div",{className:_.Z.fm_search_full_container_inner,children:[(0,d.jsx)("img",{className:_.Z.fm_search_full_icon,alt:"search icon",src:"".concat(a.dB,"/navbar-search.svg")}),(0,d.jsx)("input",{type:"text",placeholder:p("search"),onChange:e=>{if(e.target.value){let t=f(y,e.target.value);U((()=>t))}else U((()=>y))}})]})}),b?null:(0,d.jsx)(o.Z,{label:p("feedback_add_question"),customStyle:{margin:"0",padding:"0.4rem 1rem",width:"10rem"},onAction:C})]})}),null===g||void 0===g?void 0:g.map((e=>{var t,i;return(0,d.jsxs)("section",{className:s.Z.ifq_card,children:[(0,d.jsxs)("div",{className:s.Z.ifq_card_inner,children:[(0,d.jsxs)("h6",{children:[(0,d.jsx)("span",{style:{color:"var(--color-input-label)"},children:"".concat(p("question")," ").concat(null===e||void 0===e?void 0:e.question_sno,": ")}),null!==(t=null===e||void 0===e?void 0:e.question_title)&&void 0!==t?t:""]}),b?null:(0,d.jsx)("img",{src:"".concat(a.J7,"/menu.svg"),alt:"menu icon",onClick:()=>{x(e)},title:"Menu",style:{cursor:"pointer",height:"1.5rem"}})]}),(0,d.jsx)("div",{className:s.Z.ifqo_cantainer,children:null===e||void 0===e||null===(i=e.options)||void 0===i?void 0:i.map(((e,t)=>{var i;return(0,d.jsx)("h6",{children:null!==(i=null===e||void 0===e?void 0:e.option)&&void 0!==i?i:""},"option".concat(null===e||void 0===e?void 0:e.option_sno).concat(t))}))})]},"question".concat(null===e||void 0===e?void 0:e.question_sno))})),(null===y||void 0===y?void 0:y.length)>0?0===(null===g||void 0===g?void 0:g.length)&&(0,d.jsx)(c.Z,{title:"No question found related this search.",customStyleContainer:{marginTop:"10rem"}}):0===(null===y||void 0===y?void 0:y.length)&&(0,d.jsx)(c.Z,{title:"No question created yet.",customStyleContainer:{marginTop:"10rem"}}),(0,d.jsxs)(l.Suspense,{fallback:(0,d.jsx)(r.Z,{}),children:[q&&(0,d.jsx)(u,{onClose:C,optionCount:i,questionCount:h,onRefetch:m,ifid:t}),j&&(0,d.jsx)(v,{onClose:()=>x(""),question:j,onRefetch:m,ifid:t})]})]})},f=(e,t)=>null===e||void 0===e?void 0:e.filter((e=>{var i,n;return null!==e&&void 0!==e&&null!==(i=e.question_title)&&void 0!==i&&i.includes(t)||null!==e&&void 0!==e&&null!==(n=e.question_sno)&&void 0!==n&&n.includes(t)?e:null}))},2651:(e,t,i)=>{i.d(t,{Z:()=>_});var n=i(15783),a=i(80184);const _=e=>{let{title:t,subtitle:i,customStyleContainer:_,costomTextTitleStyle:o,costomTextSubtitleStyle:l}=e;return(0,a.jsxs)("div",{className:n.Z.empty_container,style:_,children:[t&&(0,a.jsx)("h6",{style:o,children:t}),i&&(0,a.jsx)("p",{style:l,children:i})]})}},9228:(e,t,i)=>{i.d(t,{Z:()=>n});const n={sf_card:"InstituteFeedback_sf_card__dLh8P",sf_card_hover:"InstituteFeedback_sf_card_hover__BqLqV",iadcc_card_hover:"InstituteFeedback_iadcc_card_hover__wMuhW",sf_card_contatiner:"InstituteFeedback_sf_card_contatiner__2Zbiq",sf_card_contatiner_inner:"InstituteFeedback_sf_card_contatiner_inner__sjsCw",sf_card_active:"InstituteFeedback_sf_card_active__ujoaz",ifq_card:"InstituteFeedback_ifq_card__vFRNw",ifq_card_inner:"InstituteFeedback_ifq_card_inner__65kmp",ifqo_cantainer:"InstituteFeedback_ifqo_cantainer__YlkE-",ifqo_cantainer_student:"InstituteFeedback_ifqo_cantainer_student__WsWho",ifqocs_active:"InstituteFeedback_ifqocs_active__Wa3As",osa_card:"InstituteFeedback_osa_card__48+nw",gsf_contatiner:"InstituteFeedback_gsf_contatiner__x3ydz",gsf_star_container:"InstituteFeedback_gsf_star_container__0Mu56",igc_card:"InstituteFeedback_igc_card__cCB4r"}},15783:(e,t,i)=>{i.d(t,{Z:()=>n});const n={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=8915.af28dfe5.chunk.js.map