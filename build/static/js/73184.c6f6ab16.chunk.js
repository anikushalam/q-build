"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[73184],{75717:(o,e,t)=>{t.d(e,{Z:()=>u});var i=t(72791),l=t(95048),s=t(47782),n=t(80184);const d=i.lazy((()=>Promise.all([t.e(5574),t.e(89891),t.e(81296),t.e(31510),t.e(11968),t.e(96710),t.e(79404)]).then(t.bind(t,79404)))),r=i.lazy((()=>t.e(70630).then(t.bind(t,70630)))),v=i.lazy((()=>t.e(46150).then(t.bind(t,46150)))),a=i.lazy((()=>t.e(73560).then(t.bind(t,73560)))),u=o=>{let{post:e,profilePost:t,allPosts:u}=o;const p=(0,l.v9)((o=>o.idChange)),[f,c]=(0,i.useState)(t&&(null===p||void 0===p?void 0:p.id)===(null===e||void 0===e?void 0:e.author)?"Poll"===(null===e||void 0===e?void 0:e.postType)||"Question"===(null===e||void 0===e?void 0:e.postType)?["post_delete","turn_off_comment"]:["post_visibility","post_delete","turn_off_comment"]:["post_unfollow"]);return(0,i.useEffect)((()=>{(null===p||void 0===p?void 0:p.id)===(null===e||void 0===e?void 0:e.author)&&("Poll"===(null===e||void 0===e?void 0:e.postType)||"Question"===(null===e||void 0===e?void 0:e.postType)?c(["post_delete","turn_off_comment"]):c(["post_visibility","post_delete","turn_off_comment"]))}),[null===e||void 0===e?void 0:e.author,null===p||void 0===p?void 0:p.id,null===e||void 0===e?void 0:e.postType]),(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:["Post"===(null===e||void 0===e?void 0:e.postType)&&(0,n.jsx)(d,{post:e,profilePost:t,allPosts:u,selectOptions:f}),"Poll"===(null===e||void 0===e?void 0:e.postType)&&(0,n.jsx)(r,{post:e,profilePost:t,allPosts:u,selectOptions:f}),"Question"===(null===e||void 0===e?void 0:e.postType)&&(0,n.jsx)(v,{post:e,profilePost:t,allPosts:u,selectOptions:f}),"Announcement"===(null===e||void 0===e?void 0:e.postType)&&(0,n.jsx)(a,{post:e,profilePost:t,allPosts:u,selectOptions:f})]})}},73184:(o,e,t)=>{t.r(e),t.d(e,{default:()=>f});var i=t(72791),l=t(9447),s=t(95048),n=t(23441),d=t(70092),r=t(16256),v=t(47782),a=t(75717),u=t(39230),p=t(80184);const f=function(o){var e,t,f,c,h,P,g,y,m,b;let{profilePost:j,profileSavedPost:x}=o;const{t:S}=(0,u.$G)(),w=(0,s.v9)((o=>o.idChange)),k=(0,s.v9)((o=>o.postChange)),_=(0,s.I0)(),[Z,T]=(0,i.useState)(!0),[V,R]=(0,n.YD)(),[O,A]=(0,i.useState)(!0),[C,E]=(0,i.useState)(!0),[I,z]=(0,i.useState)(!0),[M,D]=(0,i.useState)(!0),[J,Q]=(0,i.useState)(1),[U,q]=(0,i.useState)(1),[B,G]=(0,i.useState)(1),[N,Y]=(0,i.useState)(1),{allDashPost:L,allDashPostRefetch:W}=(0,l.hZ)({data:{id:null===w||void 0===w?void 0:w.id,page:J,limit:10,viewAs:r.UJ},skip:null===w||void 0===w||!w.id||j}),{allProfilePost:$,allProfilePostRefetch:F}=(0,l.N0)({data:{id:null!==w&&void 0!==w&&null!==(e=w.searchProfile)&&void 0!==e&&e.id?null===w||void 0===w||null===(t=w.searchProfile)||void 0===t?void 0:t.id:null===w||void 0===w?void 0:w.id,page:U,limit:10,viewAs:r.UJ},skip:!j}),{allProfileSavedPost:H,allProfileSavedPostRefetch:K}=(0,l.nu)({data:{id:null===w||void 0===w?void 0:w.id,page:B,limit:10,viewAs:r.UJ},skip:!("save"===x)&&!j}),{allProfileTagPost:X,allProfileTagPostRefetch:oo}=(0,l.QL)({data:{id:null===w||void 0===w?void 0:w.id,page:N,limit:10,viewAs:r.UJ},skip:!("tag"===x)&&!j});return(0,i.useEffect)((()=>{R&&O&&!j?Q((o=>o+1)):R&&C&&j?q((o=>o+1)):R&&I&&"save"===x?G((o=>o+1)):R&&M&&"tag"===x&&Y((o=>o+1))}),[R,O,C,I,M,j,x]),(0,i.useEffect)((()=>{j?"my"===x?F():"save"===x?K():"tag"===x&&oo():W()}),[J,U,B,N,j,x,W,F,K,oo]),(0,i.useEffect)((()=>{_(d.p.addPost({post:j?"my"===x?null===$||void 0===$?void 0:$.post:"save"===x?null===H||void 0===H?void 0:H.post:null===X||void 0===X?void 0:X.post:null===L||void 0===L?void 0:L.post,profilePost:j?"my"===x?"profile":"save"===x?"saved":"taged":"dash",id:null===w||void 0===w?void 0:w.id})),10===(null===L||void 0===L?void 0:L.post.length)?A(!0):A(!1),10===(null===$||void 0===$?void 0:$.post.length)?E(!0):E(!1),10===(null===H||void 0===H?void 0:H.post.length)?z(!0):z(!1),10===(null===X||void 0===X?void 0:X.post.length)?D(!0):D(!1)}),[null===L||void 0===L?void 0:L.post,null===$||void 0===$?void 0:$.post,null===H||void 0===H?void 0:H.post,null===X||void 0===X?void 0:X.post,_,j,x,null===w||void 0===w?void 0:w.id]),(0,i.useEffect)((()=>{setTimeout((()=>{T(!1)}),5e3)}),[]),(0,p.jsxs)("div",{children:[null!==k&&void 0!==k&&null!==(f=k.dashboardPosts)&&void 0!==f&&f.length||j||!Z?!j&&(null===k||void 0===k||null===(c=k.dashboardPosts)||void 0===c?void 0:c.map(((o,e)=>{var t;return(null===k||void 0===k||null===(t=k.dashboardPosts)||void 0===t?void 0:t.length)===e+1?(0,p.jsx)("div",{ref:V,children:(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:null===k||void 0===k?void 0:k.dashboardPosts})},e):(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:null===k||void 0===k?void 0:k.dashboardPosts},e)}))):(0,p.jsx)(v.Z,{}),j&&"my"===x&&(null!==k&&void 0!==k&&null!==(h=k.profilePosts)&&void 0!==h&&h.length||!Z?null===k||void 0===k||null===(P=k.profilePosts)||void 0===P?void 0:P.map(((o,e)=>{var t;return(null===k||void 0===k||null===(t=k.profilePosts)||void 0===t?void 0:t.length)===e+1?(0,p.jsx)("div",{ref:V,children:(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]})},e):(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]},e)})):(0,p.jsx)(v.Z,{})),j&&"save"===x&&(null!==k&&void 0!==k&&null!==(g=k.profileSavedPosts)&&void 0!==g&&g.length||!Z?null===k||void 0===k||null===(y=k.profileSavedPosts)||void 0===y?void 0:y.map(((o,e)=>{var t;return(null===k||void 0===k||null===(t=k.profileSavedPosts)||void 0===t?void 0:t.length)===e+1?(0,p.jsx)("div",{ref:V,children:(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]})},e):(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]},e)})):(0,p.jsx)(v.Z,{})),j&&"tag"===x&&(null!==k&&void 0!==k&&null!==(m=k.profileTagedPosts)&&void 0!==m&&m.length||!Z?null===k||void 0===k||null===(b=k.profileTagedPosts)||void 0===b?void 0:b.map(((o,e)=>{var t;return(null===k||void 0===k||null===(t=k.profileTagedPosts)||void 0===t?void 0:t.length)===e+1?(0,p.jsx)("div",{ref:V,children:(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]})},e):(0,p.jsx)(a.Z,{post:o,profilePost:j,allPosts:[]},e)})):(0,p.jsx)(v.Z,{}))]})}},47782:(o,e,t)=>{t.d(e,{Z:()=>s});t(72791);var i=t(11575),l=t(80184);const s=()=>(0,l.jsx)("div",{className:i.Z.loaderGif,children:(0,l.jsx)("img",{src:"/images/loader/loader.gif",alt:"for load an items"})})},23441:(o,e,t)=>{t.d(e,{YD:()=>p});var i=t(72791),l=Object.defineProperty,s=(o,e,t)=>(((o,e,t)=>{e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t})(o,"symbol"!==typeof e?e+"":e,t),t),n=new Map,d=new WeakMap,r=0,v=void 0;function a(o){return Object.keys(o).sort().filter((e=>void 0!==o[e])).map((e=>{return"".concat(e,"_").concat("root"===e?(t=o.root)?(d.has(t)||(r+=1,d.set(t,r.toString())),d.get(t)):"0":o[e]);var t})).toString()}function u(o,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const l=o.getBoundingClientRect();return e(i,{isIntersecting:i,target:o,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:l,observer:s,elements:d}=function(o){let e=a(o),t=n.get(e);if(!t){const i=new Map;let l;const s=new IntersectionObserver((e=>{e.forEach((e=>{var t;const s=e.isIntersecting&&l.some((o=>e.intersectionRatio>=o));o.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=s),null==(t=i.get(e.target))||t.forEach((o=>{o(s,e)}))}))}),o);l=s.thresholds||(Array.isArray(o.threshold)?o.threshold:[o.threshold||0]),t={id:e,observer:s,elements:i},n.set(e,t)}return t}(t);let r=d.get(o)||[];return d.has(o)||d.set(o,r),r.push(e),s.observe(o),function(){r.splice(r.indexOf(e),1),0===r.length&&(d.delete(o),s.unobserve(o)),0===d.size&&(s.disconnect(),n.delete(l))}}i.Component;function p(){let{threshold:o,delay:e,trackVisibility:t,rootMargin:l,root:s,triggerOnce:n,skip:d,initialInView:r,fallbackInView:v,onChange:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var p;const[f,c]=i.useState(null),h=i.useRef(),[P,g]=i.useState({inView:!!r,entry:void 0});h.current=a,i.useEffect((()=>{if(d||!f)return;let i;return i=u(f,((o,e)=>{g({inView:o,entry:e}),h.current&&h.current(o,e),e.isIntersecting&&n&&i&&(i(),i=void 0)}),{root:s,rootMargin:l,threshold:o,trackVisibility:t,delay:e},v),()=>{i&&i()}}),[Array.isArray(o)?o.toString():o,f,s,l,n,d,t,v,e]);const y=null==(p=P.entry)?void 0:p.target,m=i.useRef();f||!y||n||d||m.current===y||(m.current=y,g({inView:!!r,entry:void 0}));const b=[c,P.inView,P.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);
//# sourceMappingURL=73184.c6f6ab16.chunk.js.map