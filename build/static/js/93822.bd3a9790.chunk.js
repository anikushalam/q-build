"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[93822],{11105:(e,t,n)=>{n.d(t,{Z:()=>o});n(72791);var r=n(11575),i=n(80184);const o=e=>{let{status:t}=e;return(0,i.jsx)("div",{className:r.Z.loaderGif,children:(0,i.jsx)("img",{src:"white"===t?"/images/loader/loader-bg-white.gif":"/images/loader/loader.gif",alt:"for load an items"})})}},23308:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var r=n(72791),i=n(11006),o=n(39230),a=n(80184);const l=e=>{let{activeIndex:t,setActiveIndex:n}=e;const{t:r}=(0,o.$G)();return(0,a.jsx)("div",{className:i.Z.mcqTop,children:(0,a.jsxs)("div",{className:i.Z.mcqToptabs,children:[(0,a.jsx)("div",{className:0===t?"".concat(i.Z.mcqTopItem," ").concat(i.Z.active):i.Z.mcqTopItem,onClick:()=>n(0),children:r("unsolved")}),(0,a.jsx)("div",{className:1===t?"".concat(i.Z.mcqTopItem," ").concat(i.Z.active):i.Z.mcqTopItem,onClick:()=>n(1),children:r("solved")})]})})};var d=n(23441),s=n(11105),c=n(72426),u=n.n(c),v=n(12143),_=n(69721),m=n(8148),y=n(47401);const h=e=>{var t,n,r,i,o,l,d,s,c,h,f,g,b,q,p,x;let{query_detail:S,carryParentState:w,queryFlow:j}=e;return(0,a.jsx)(a.Fragment,{children:"By_Mentor"===j?(0,a.jsx)(y.Z,{carryParentState:{...w,qid:null===S||void 0===S?void 0:S._id},activeTab:"query-detail",children:(0,a.jsxs)("div",{className:v.Z.mentor_card_container,style:{width:"95%",margin:"auto",marginBottom:"0.7rem"},children:[(0,a.jsx)("img",{src:null!==S&&void 0!==S&&null!==(t=S.student)&&void 0!==t&&t.studentProfilePhoto?"".concat(_.yI,"/").concat(null===S||void 0===S||null===(n=S.student)||void 0===n?void 0:n.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,a.jsxs)("div",{className:v.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,a.jsx)("h6",{children:"".concat(null!==(r=null===S||void 0===S||null===(i=S.student)||void 0===i?void 0:i.studentFirstName)&&void 0!==r?r:""," ").concat(null!==(o=null===S||void 0===S||null===(l=S.student)||void 0===l?void 0:l.studentMiddleName)&&void 0!==o?o:""," ").concat(null!==(d=null===S||void 0===S||null===(s=S.student)||void 0===s?void 0:s.studentLastName)&&void 0!==d?d:"")}),(0,a.jsxs)("p",{children:[u()(null===S||void 0===S?void 0:S.created_at).format("DD MMM"),",",u()(null===S||void 0===S?void 0:S.created_at).format("LT")]})]})]})}):(0,a.jsx)(m.Z,{carryParentState:{...w,qid:null===S||void 0===S?void 0:S._id},activeTab:"mentor&n=queries&query",children:(0,a.jsxs)("div",{className:v.Z.mentor_card_container,style:{width:"95%",margin:"auto",marginBottom:"0.7rem"},children:[(0,a.jsx)("img",{src:null!==S&&void 0!==S&&null!==(c=S.student)&&void 0!==c&&c.studentProfilePhoto?"".concat(_.yI,"/").concat(null===S||void 0===S||null===(h=S.student)||void 0===h?void 0:h.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,a.jsxs)("div",{className:v.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,a.jsx)("h6",{children:"".concat(null!==(f=null===S||void 0===S||null===(g=S.student)||void 0===g?void 0:g.studentFirstName)&&void 0!==f?f:""," ").concat(null!==(b=null===S||void 0===S||null===(q=S.student)||void 0===q?void 0:q.studentMiddleName)&&void 0!==b?b:""," ").concat(null!==(p=null===S||void 0===S||null===(x=S.student)||void 0===x?void 0:x.studentLastName)&&void 0!==p?p:"")}),(0,a.jsxs)("p",{children:[u()(null===S||void 0===S?void 0:S.created_at).format("DD MMM"),",",u()(null===S||void 0===S?void 0:S.created_at).format("LT")]})]})]})})})};var f=n(91727);const g=e=>{let{carryParentState:t,did:n,queryFlow:i}=e;const[o,l]=(0,d.YD)(),[c,u]=(0,r.useState)(1),[v,_]=(0,r.useState)(!0),[m,y]=(0,r.useState)(!0),[g,b]=(0,r.useState)([]),{getAllQueryList:q,getAllQueryListRefetch:p}=(0,f.EO)({data:{did:n,page:c,limit:10,status:"UnSolved",flow:i},skip:!n});return(0,r.useEffect)((()=>{n&&(y(!0),p())}),[n,c,p]),(0,r.useEffect)((()=>{l&&v&&u((e=>e+1))}),[l,v]),(0,r.useEffect)((()=>{var e,t;null!==q&&void 0!==q&&q.all_query?(b((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===q||void 0===q?void 0:q.all_query])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),y(!1)):0===(null===q||void 0===q||null===(e=q.all_query)||void 0===e?void 0:e.length)&&y(!1),10===(null===q||void 0===q||null===(t=q.all_query)||void 0===t?void 0:t.length)?_(!0):_(!1)}),[null===q||void 0===q?void 0:q.all_query]),(0,a.jsxs)(a.Fragment,{children:[null===g||void 0===g?void 0:g.map(((e,n)=>(null===g||void 0===g?void 0:g.length)===n+1?(0,a.jsx)("div",{ref:o,children:(0,a.jsx)(h,{query_detail:e,carryParentState:t,queryFlow:i})},null===e||void 0===e?void 0:e._id):(0,a.jsx)(h,{query_detail:e,carryParentState:t,queryFlow:i},null===e||void 0===e?void 0:e._id))),m&&(0,a.jsx)(s.Z,{})]})},b=e=>{let{carryParentState:t,did:n,queryFlow:i}=e;const[o,l]=(0,d.YD)(),[c,u]=(0,r.useState)(1),[v,_]=(0,r.useState)(!0),[m,y]=(0,r.useState)(!0),[g,b]=(0,r.useState)([]),{getAllQueryList:q,getAllQueryListRefetch:p}=(0,f.EO)({data:{did:n,page:c,limit:10,status:"Solved",flow:i},skip:!n});return(0,r.useEffect)((()=>{n&&(y(!0),p())}),[n,c,p]),(0,r.useEffect)((()=>{l&&v&&u((e=>e+1))}),[l,v]),(0,r.useEffect)((()=>{var e,t;null!==q&&void 0!==q&&q.all_query?(b((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===q||void 0===q?void 0:q.all_query])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),y(!1)):0===(null===q||void 0===q||null===(e=q.all_query)||void 0===e?void 0:e.length)&&y(!1),10===(null===q||void 0===q||null===(t=q.all_query)||void 0===t?void 0:t.length)?_(!0):_(!1)}),[null===q||void 0===q?void 0:q.all_query]),(0,a.jsxs)(a.Fragment,{children:[null===g||void 0===g?void 0:g.map(((e,n)=>(null===g||void 0===g?void 0:g.length)===n+1?(0,a.jsx)("div",{ref:o,children:(0,a.jsx)(h,{query_detail:e,carryParentState:t,viewAs:"SOLVED",queryFlow:i})},null===e||void 0===e?void 0:e._id):(0,a.jsx)(h,{query_detail:e,carryParentState:t,viewAs:"SOLVED",queryFlow:i},null===e||void 0===e?void 0:e._id))),m&&(0,a.jsx)(s.Z,{})]})},q=e=>{let{carryParentState:t,did:n,queryFlow:i}=e;const[o,d]=(0,r.useState)(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{activeIndex:o,setActiveIndex:d}),0===o&&(0,a.jsx)(g,{carryParentState:t,did:n,queryFlow:i}),1===o&&(0,a.jsx)(b,{carryParentState:t,did:n,queryFlow:i})]})}},8148:(e,t,n)=>{n.d(t,{Z:()=>a});n(72791);var r=n(16871),i=n(43504),o=n(80184);const a=e=>{let{carryParentState:t,activeTab:n,children:a}=e;const l=(0,r.UO)();return(0,o.jsx)(i.rU,{to:"/q/".concat(l.username,"/member/department/").concat(l.deptname,"?a=").concat(n),state:{...t},children:a})}},47401:(e,t,n)=>{n.d(t,{Z:()=>a});n(72791);var r=n(16871),i=n(43504),o=n(80184);const a=e=>{let{carryParentState:t,activeTab:n,children:a}=e;const l=(0,r.UO)();return(0,o.jsx)(i.rU,{to:"/q/".concat(l.username,"/member/mentor?a=").concat(n),state:{...t},children:a})}},12143:(e,t,n)=>{n.d(t,{Z:()=>r});const r={mentor_card_container:"Mentor_mentor_card_container__05bPk",mentor_card_int:"Mentor_mentor_card_int__-SwSR",mentor_container_inner:"Mentor_mentor_container_inner__kxUWv",student_container_inner:"Mentor_student_container_inner__2fDwu",mentor_rating:"Mentor_mentor_rating__FHWQG",student_inner_bottom:"Mentor_student_inner_bottom__zhsin",student_card_container:"Mentor_student_card_container__+UobV",feedback_question_container:"Mentor_feedback_question_container__YqWeu",feedback_question_heading:"Mentor_feedback_question_heading__FdGSW",feedback_question_option:"Mentor_feedback_question_option__Axxci",option_selected_cover:"Mentor_option_selected_cover__Ygo7Z",remove_btn:"Mentor_remove_btn__Waxwz"}},11006:(e,t,n)=>{n.d(t,{Z:()=>r});const r={studentMCQ:"Tabs_studentMCQ__lxivk",mcqToptabs:"Tabs_mcqToptabs__1WXDd",mcqTop:"Tabs_mcqTop__mmZ6T",mcqTopItem:"Tabs_mcqTopItem__7P7cJ",active:"Tabs_active__OMnFH"}},23441:(e,t,n)=>{n.d(t,{YD:()=>v});var r=n(72791),i=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),a=new Map,l=new WeakMap,d=0,s=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(n=e.root)?(l.has(n)||(d+=1,l.set(n,d.toString())),l.get(n)):"0":e[t]);var n})).toString()}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:l}=function(e){let t=c(e),n=a.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},a.set(t,n)}return n}(n);let d=l.get(e)||[];return l.has(e)||l.set(e,d),d.push(t),o.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(l.delete(e),o.unobserve(e)),0===l.size&&(o.disconnect(),a.delete(i))}}r.Component;function v(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:a,skip:l,initialInView:d,fallbackInView:s,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var v;const[_,m]=r.useState(null),y=r.useRef(),[h,f]=r.useState({inView:!!d,entry:void 0});y.current=c,r.useEffect((()=>{if(l||!_)return;let r;return r=u(_,((e,t)=>{f({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},s),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,_,o,i,a,l,n,s,t]);const g=null==(v=h.entry)?void 0:v.target,b=r.useRef();_||!g||a||l||b.current===g||(b.current=g,f({inView:!!d,entry:void 0}));const q=[m,h.inView,h.entry];return q.ref=q[0],q.inView=q[1],q.entry=q[2],q}}}]);
//# sourceMappingURL=93822.bd3a9790.chunk.js.map