"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[30549,63687],{63687:(i,n,e)=>{e.r(n),e.d(n,{default:()=>a});var t=e(59393),o=e(80184);const a=i=>{let{customStyle:n,children:e}=i;return(0,o.jsx)("div",{className:t.Z.user_member_container_wrapper,style:n,children:e})}},30549:(i,n,e)=>{e.r(n),e.d(n,{default:()=>x});var t=e(72791),o=e(1669),a=e(55336),s=e(98684),l=e(63687),r=e(21348),_=e(2651),c=e(56959),d=e(39230),m=e(23441),u=e(91427),v=e(57588),g=e(90904),h=e(43317),p=e(26192),y=e(16871),f=e(43504),b=e(80184);const j=i=>{var n,e,t,o;let{application:a}=i;const l=(0,y.UO)(),r=(0,y.TH)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(f.rU,{to:"Institute"===(null===(n=r.state)||void 0===n?void 0:n.urlOffSet)?"/q/".concat(l.username,"/institute/member/admission?type=enquiries"):"/q/".concat(l.username,"/member/staff/admission?type=enquiries"),state:{...r.state,appId:null===a||void 0===a?void 0:a._id},children:(0,b.jsx)("div",{className:p.Z.ongoing_card,children:(0,b.jsxs)("div",{className:p.Z.ongoing_card_inner,children:[(0,b.jsx)("img",{alt:"Ongoing App",src:"".concat(s.U_,"/application.svg")}),(0,b.jsxs)("div",{className:p.Z.ongoing_card_text,children:[(0,b.jsx)("h6",{children:null!==(e=null===a||void 0===a?void 0:a.applicationName)&&void 0!==e?e:""}),(0,b.jsx)("p",{children:null!==(t=null===a||void 0===a||null===(o=a.applicationDepartment)||void 0===o?void 0:o.dName)&&void 0!==t?t:""})]})]})})})})},x=i=>{var n,e,p,f;let{aid:x,instituteId:O}=i;const{t:k}=(0,d.$G)(),A=(0,y.TH)(),U=(0,y.UO)(),w=(0,y.s0)(),[S,Z]=(0,t.useState)(""),[C,N]=(0,t.useState)(""),[I,V]=(0,t.useState)(1),[T,q]=(0,t.useState)(!0),[E,R]=(0,m.YD)({skip:S}),{admissionOngoingApplication:M,admissionOngoingApplicationLoading:D}=(0,h.s5)({data:{aid:x,page:I,limit:10,search:S},skip:!x});(0,t.useEffect)((()=>{R&&T&&V((i=>i+1))}),[R,T]),(0,t.useEffect)((()=>{var i;if(null!==M&&void 0!==M&&null!==(i=M.list)&&void 0!==i&&i.length){var n;let i=(0,u.f)(null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length);q((()=>i))}}),[null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length]);(0,t.useCallback)((0,v.J)((i=>{V((()=>1)),Z(i)}),1500),[]);const G=(0,t.useCallback)((()=>{var i;let n="Institute"===(null===(i=A.state)||void 0===i?void 0:i.urlOffSet)?"/q/".concat(U.username,"/institute/member/admission"):"/q/".concat(U.username,"/member/staff/admission");w(n,{state:A.state})}),[w,A.state,U.username]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(l.default,{children:[(0,b.jsx)(r.default,{children:(0,b.jsxs)("div",{className:c.Z.fm_header_container,children:[(0,b.jsxs)("div",{className:c.Z.fm_header_start_container,children:[(0,b.jsx)("img",{alt:"search icon",src:"".concat(s.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:G}),(0,b.jsx)("h6",{children:k("ongoing_applications")})]}),(0,b.jsx)("div",{className:c.Z.fm_search,children:(0,b.jsx)("section",{className:c.Z.fm_search_container,children:(0,b.jsxs)("div",{className:c.Z.fm_search_container_inner,children:[(0,b.jsx)("img",{className:c.Z.fm_search_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,b.jsx)("input",{type:"text",placeholder:k("search"),onChange:i=>{var n;!D&&(null===M||void 0===M||null===(n=M.list)||void 0===n?void 0:n.length)>=0&&N(i.target.value)},style:{minWidth:"220px"},onKeyUp:i=>{"Enter"===i.key&&(V((()=>1)),Z(C))},value:C})]})})})]})}),(0,b.jsx)(g.Z,{}),(0,b.jsxs)(r.default,{customStyle:{paddingTop:"0.2rem",position:"relative"},children:[null===M||void 0===M||null===(e=M.list)||void 0===e?void 0:e.map(((i,n)=>{var e;return(null===M||void 0===M||null===(e=M.list)||void 0===e?void 0:e.length)===n+1?(0,b.jsx)("div",{ref:E,children:(0,b.jsx)(j,{application:i})},null===i||void 0===i?void 0:i._id):(0,b.jsx)(j,{application:i},null===i||void 0===i?void 0:i._id)})),D?S?(0,b.jsx)(a.default,{}):(0,b.jsx)(b.Fragment,{children:1===I?(0,b.jsx)(a.default,{}):(0,b.jsx)(o.Z,{})}):S?0===(null===M||void 0===M||null===(p=M.list)||void 0===p?void 0:p.length)&&(0,b.jsx)(_.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No ongoing application found related this search."}):0===(null===M||void 0===M||null===(f=M.list)||void 0===f?void 0:f.length)&&(0,b.jsx)(_.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No application created."})]})]})})}},2651:(i,n,e)=>{e.d(n,{Z:()=>a});var t=e(15783),o=e(80184);const a=i=>{let{title:n,subtitle:e,customStyleContainer:a,costomTextTitleStyle:s,costomTextSubtitleStyle:l}=i;return(0,o.jsxs)("div",{className:t.Z.empty_container,style:a,children:[n&&(0,o.jsx)("h6",{style:s,children:n}),e&&(0,o.jsx)("p",{style:l,children:e})]})}},57588:(i,n,e)=>{e.d(n,{J:()=>t});const t=(i,n)=>{let e;return function(){let t=this,o=arguments;clearTimeout(e),e=setTimeout((()=>{i.apply(t,o)}),n)}}},91427:(i,n,e)=>{e.d(n,{f:()=>t});const t=i=>i%10===0},26192:(i,n,e)=>{e.d(n,{Z:()=>t});const t={ongoing_card:"OngoingAdmission_ongoing_card__5LO6X",ongoing_card_active:"OngoingAdmission_ongoing_card_active__eu1jj",ongoing_card_inner:"OngoingAdmission_ongoing_card_inner__DTYKz",ongoing_card_text:"OngoingAdmission_ongoing_card_text__cj0Qv",menu_icon:"OngoingAdmission_menu_icon__SwfUu",ongoing_card_count_date:"OngoingAdmission_ongoing_card_count_date__Tzlwe",ongoing_card_count_container:"OngoingAdmission_ongoing_card_count_container__Rj5uD",ongoing_card_count_container_inner:"OngoingAdmission_ongoing_card_count_container_inner__vc5ZE",application_card:"OngoingAdmission_application_card__C2AOm",application_card_title:"OngoingAdmission_application_card_title__r3bxG",application_card_info:"OngoingAdmission_application_card_info__uq+PO",admission_confirm_class_card:"OngoingAdmission_admission_confirm_class_card__aRvXU",admission_confirm_class_card_active:"OngoingAdmission_admission_confirm_class_card_active__LHjy3",application_card_active:"OngoingAdmission_application_card_active__EcEKc",admission_collect_docs:"OngoingAdmission_admission_collect_docs__MmjG7",admission_confirm_class_count:"OngoingAdmission_admission_confirm_class_count__IsGih"}},15783:(i,n,e)=>{e.d(n,{Z:()=>t});const t={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},23441:(i,n,e)=>{e.d(n,{YD:()=>m});var t=e(72791),o=Object.defineProperty,a=(i,n,e)=>(((i,n,e)=>{n in i?o(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e})(i,"symbol"!==typeof n?n+"":n,e),e),s=new Map,l=new WeakMap,r=0,_=void 0;function c(i){return Object.keys(i).sort().filter((n=>void 0!==i[n])).map((n=>{return"".concat(n,"_").concat("root"===n?(e=i.root)?(l.has(e)||(r+=1,l.set(e,r.toString())),l.get(e)):"0":i[n]);var e})).toString()}function d(i,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:_;if("undefined"===typeof window.IntersectionObserver&&void 0!==t){const o=i.getBoundingClientRect();return n(t,{isIntersecting:t,target:i,intersectionRatio:"number"===typeof e.threshold?e.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:l}=function(i){let n=c(i),e=s.get(n);if(!e){const t=new Map;let o;const a=new IntersectionObserver((n=>{n.forEach((n=>{var e;const a=n.isIntersecting&&o.some((i=>n.intersectionRatio>=i));i.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=a),null==(e=t.get(n.target))||e.forEach((i=>{i(a,n)}))}))}),i);o=a.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),e={id:n,observer:a,elements:t},s.set(n,e)}return e}(e);let r=l.get(i)||[];return l.has(i)||l.set(i,r),r.push(n),a.observe(i),function(){r.splice(r.indexOf(n),1),0===r.length&&(l.delete(i),a.unobserve(i)),0===l.size&&(a.disconnect(),s.delete(o))}}t.Component;function m(){let{threshold:i,delay:n,trackVisibility:e,rootMargin:o,root:a,triggerOnce:s,skip:l,initialInView:r,fallbackInView:_,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[u,v]=t.useState(null),g=t.useRef(),[h,p]=t.useState({inView:!!r,entry:void 0});g.current=c,t.useEffect((()=>{if(l||!u)return;let t;return t=d(u,((i,n)=>{p({inView:i,entry:n}),g.current&&g.current(i,n),n.isIntersecting&&s&&t&&(t(),t=void 0)}),{root:a,rootMargin:o,threshold:i,trackVisibility:e,delay:n},_),()=>{t&&t()}}),[Array.isArray(i)?i.toString():i,u,a,o,s,l,e,_,n]);const y=null==(m=h.entry)?void 0:m.target,f=t.useRef();u||!y||s||l||f.current===y||(f.current=y,p({inView:!!r,entry:void 0}));const b=[v,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);
//# sourceMappingURL=30549.50a10eed.chunk.js.map