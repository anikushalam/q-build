(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[38434],{15427:(e,o,t)=>{"use strict";t.d(o,{_J:()=>Ce,ok:()=>xe,ki:()=>Ie,zr:()=>Oe,sQ:()=>to,uq:()=>oo,Fj:()=>no,ni:()=>so,gB:()=>ao,Fm:()=>ro,yH:()=>lo,wB:()=>io,v$:()=>uo,H4:()=>Ue,Yd:()=>Fe,ZC:()=>ze,Cc:()=>Ne,FR:()=>co,kh:()=>eo,pn:()=>$e,s4:()=>Ve,H6:()=>Ee,dU:()=>Ke,dz:()=>Ye,YP:()=>Xe,H2:()=>Je,Oz:()=>We,GA:()=>Ze,_7:()=>je,kl:()=>De,Zg:()=>He,D8:()=>Pe,Cj:()=>Te,mk:()=>Be});var r=t(45202),s=t(79992),i=t(94811);const n=e=>e.mutation({query:e=>({url:"/store/ins/".concat(e.instituteId,"/store/query"),method:i.a4,body:e.activateModule})}),a=e=>e.mutation({query:e=>({url:"/edit/staff/stores/staff/".concat(e.osid,"?nsid=").concat(e.nsid),method:i.Q0}),invalidatesTags:["Store_Module"]}),l=e=>e.query({query:e=>"/store/ins/".concat(e.stid,"/master/query?mod_id=").concat(e.mod_id),providesTags:["Store_Module"],serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:e=>{let o=(0,s.ZH)(null===e||void 0===e?void 0:e.encrypt);return null===o||void 0===o?void 0:o.store}}),u=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/new/good/category/query"),method:i.a4,body:e.bodyParameter})}),d=e=>e.query({query:e=>"/store/".concat(e.stid,"/all/good/category/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_good}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_good},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),c=e=>e.query({query:e=>"/store/".concat(e.cid,"/one/good/category/query"),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:e=>null===e||void 0===e?void 0:e.store}),v=e=>e.mutation({query:e=>({url:"/store/".concat(e.cid,"/new/goods/query"),method:i.a4,body:e.bodyParameter})}),_=e=>e.query({query:e=>"/store/".concat(e.cid,"/all/goods/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),g=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/new/goods/head/person/query"),method:i.a4,body:e.bodyParameter})}),p=e=>e.query({query:e=>"/store/".concat(e.stid,"/goods/head/person/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_manager}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_manager},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),m=e=>e.mutation({query:e=>({url:"/store/".concat(e.gid,"/add/stock/query"),method:i.Q0,body:e.bodyParameter})}),h=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/issue/stock/query"),method:i.a4,body:e.bodyParameter})}),y=e=>e.query({query:e=>"/store/".concat(e.stid,"/category/all/goods/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),f=e=>e.query({query:e=>"/store/one/issue/".concat(e.irid,"/stock/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>{var r,s;return null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e||null===(r=e.one_stock)||void 0===r?void 0:r.goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e||null===(s=e.one_stock)||void 0===s?void 0:s.goods}},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),S=e=>e.query({query:e=>"/store/".concat(e.did,"/all/classes/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_classes}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_classes},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),R=e=>e.query({query:e=>"/store/".concat(e.stid,"/merge/custom/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),q=e=>e.query({query:e=>"/store/".concat(e.stid,"/all/issue/stock/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),k=e=>e.query({query:e=>"/store/".concat(e.stid,"/all/request/stock/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_request_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_request_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),A=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/register/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_register}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_register},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),b=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/issue/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),L=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/return/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),w=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/consume/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),M=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/maintainence/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),Q=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/request/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_request}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_request},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),G=e=>e.query({query:e=>"/store/".concat(e.mid,"/all/stocktake/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),C=e=>e.query({query:e=>"/store/".concat(e.stid,"/all/return/stock/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),I=e=>e.query({query:e=>"/store/one/return/".concat(e.rid,"/stock/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),U=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/return/stock/query"),method:i.a4,body:e.bodyParameter})}),z=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/request/stock/query"),method:i.a4,body:e.bodyParameter})}),F=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/mark/status/query"),method:i.Q0,body:e.bodyParameter})}),N=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/register/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_register}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_register},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),P=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/issue/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),B=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/return/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_return}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_return},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),Z=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/consume/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),j=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/maintainence/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),D=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/request/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_request}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_request},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),H=e=>e.query({query:e=>"/store/".concat(e.gid,"/goods/all/stocktake/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search,"&flow=").concat(e.flow),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_issue_goods}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_issue_goods},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),x=e=>e.mutation({query:e=>({url:"/store/".concat(e.stid,"/qr/code/query"),method:i.Q0,body:e.bodyParameter})}),O=e=>e.query({query:e=>"/store/".concat(e.stid,"/daybook/query?page=").concat(e.page,"&limit=").concat(e.limit,"&search=").concat(e.search),serializeQueryArgs:e=>{let{endpointName:o}=e;return o},transformResponse:(e,o,t)=>null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.all_manager}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.all_manager},merge:(e,o)=>{var t;return null!==o&&void 0!==o&&o.search||1===(null===o||void 0===o?void 0:o.page)?o:void(null===e||void 0===e||null===(t=e.list)||void 0===t||t.push(...null===o||void 0===o?void 0:o.list))},forceRefetch(e){let{currentArg:o,previousArg:t}=e;return o!==t}}),T=r.O.injectEndpoints({endpoints:e=>({storeActivateModule:n(e),storeUpdateModule:a(e),storeDashboardMaster:l(e),storeMasterAddCategory:u(e),storeMasterCategoryList:d(e),storeMasterCategoryDetail:c(e),storeMasterAddSubCategory:v(e),storeMasterSubCategoryList:_(e),storeUnitAddHeadPerson:g(e),storeUnitHeadPersonList:p(e),storeStockGoodsUpdate:m(e),storeStockIssueRecord:h(e),storeStockIssueRecordList:q(e),storeStockIssueRequestList:k(e),storeIssueOneRecordGoodsList:f(e),storeDayBookList:O(e),storeAllGoodsList:y(e),storeDepartmentClassList:S(e),storeUnitCombineList:R(e),storeSevenRegister:A(e),storeSevenIssue:b(e),storeSevenReturn:L(e),storeSevenConsumption:w(e),storeSevenMaintenance:M(e),storeSevenRequest:Q(e),storeSevenStocktake:G(e),storeReturnList:C(e),storeReturnGoodsList:I(e),storeGoodsReturnRequest:U(e),storeGoodsRequestStock:z(e),storeIssueRequestAction:F(e),storeGoodsSevenRegister:N(e),storeGoodsSevenIssue:P(e),storeGoodsSevenReturn:B(e),storeGoodsSevenConsumption:Z(e),storeGoodsSevenMaintenance:j(e),storeGoodsSevenRequest:D(e),storeGoodsSevenStocktake:H(e),storeQrCodeGenerate:x(e)})}),{useStoreActivateModuleMutation:Y,useStoreUpdateModuleMutation:E,useStoreDashboardMasterQuery:J,useStoreMasterAddCategoryMutation:V,useStoreMasterCategoryListQuery:K,useStoreMasterCategoryDetailQuery:X,useStoreMasterAddSubCategoryMutation:W,useStoreMasterSubCategoryListQuery:$,useStoreUnitAddHeadPersonMutation:ee,useStoreUnitHeadPersonListQuery:oe,useStoreStockGoodsUpdateMutation:te,useStoreStockIssueRecordMutation:re,useStoreStockIssueRecordListQuery:se,useStoreStockIssueRequestListQuery:ie,useStoreDayBookListQuery:ne,useStoreAllGoodsListQuery:ae,useStoreIssueOneRecordGoodsListQuery:le,useStoreDepartmentClassListQuery:ue,useStoreUnitCombineListQuery:de,useStoreSevenRegisterQuery:ce,useStoreSevenIssueQuery:ve,useStoreSevenReturnQuery:_e,useStoreSevenConsumptionQuery:ge,useStoreSevenMaintenanceQuery:pe,useStoreSevenRequestQuery:me,useStoreSevenStocktakeQuery:he,useStoreReturnListQuery:ye,useStoreReturnGoodsListQuery:fe,useStoreGoodsReturnRequestMutation:Se,useStoreGoodsRequestStockMutation:Re,useStoreIssueRequestActionMutation:qe,useStoreGoodsSevenRegisterQuery:ke,useStoreGoodsSevenIssueQuery:Ae,useStoreGoodsSevenReturnQuery:be,useStoreGoodsSevenConsumptionQuery:Le,useStoreGoodsSevenMaintenanceQuery:we,useStoreGoodsSevenRequestQuery:Me,useStoreGoodsSevenStocktakeQuery:Qe,useStoreQrCodeGenerateMutation:Ge}=T,Ce=()=>{const[e]=Y();return[e]},Ie=e=>{const{data:o,refetch:t,isFetching:r}=J(e.data,{skip:e.skip});return{storeDashboardMaster:o,storeDashboardMasterRefetch:t,storeDashboardMasterLoading:r}},Ue=()=>{const[e]=V();return[e]},ze=e=>{const{data:o,refetch:t,isFetching:r}=K(e.data,{skip:e.skip});return{storeMasterCategoryList:o,storeMasterCategoryListRefetch:t,storeMasterCategoryListLoading:r}},Fe=()=>{const[e]=W();return[e]},Ne=e=>{const{data:o,refetch:t,isFetching:r}=$(e.data,{skip:e.skip});return{storeMasterSubCategoryList:o,storeMasterSubCategoryListRefetch:t,storeMasterSubCategoryListLoading:r}},Pe=()=>{const[e]=ee();return[e]},Be=e=>{const{data:o,refetch:t,isFetching:r}=oe(e.data,{skip:e.skip});return{storeUnitHeadPersonList:o,storeUnitHeadPersonListRefetch:t,storeUnitHeadPersonListLoading:r}},Ze=()=>{const[e]=te();return[e]},je=()=>{const[e]=re();return[e]},De=e=>{const{data:o,refetch:t,isFetching:r}=se(e.data,{skip:e.skip});return{storeStockIssueRecordList:o,storeStockIssueRecordListRefetch:t,storeStockIssueRecordListLoading:r}},He=e=>{const{data:o,refetch:t,isFetching:r}=ie(e.data,{skip:e.skip});return{storeStockIssueRequestList:o,storeStockIssueRequestListRefetch:t,storeStockIssueRequestListLoading:r}},xe=e=>{const{data:o,refetch:t,isFetching:r}=ae(e.data,{skip:e.skip});return{storeAllGoodsList:o,storeAllGoodsListRefetch:t,storeAllGoodsListLoading:r}},Oe=e=>{const{data:o,refetch:t,isFetching:r}=ue(e.data,{skip:e.skip});return{storeDepartmentClassList:o,storeDepartmentClassListRefetch:t,storeDepartmentClassListLoading:r}},Te=e=>{const{data:o,refetch:t,isFetching:r}=de(e.data,{skip:e.skip});return{storeUnitCombineList:o,storeUnitCombineListRefetch:t,storeUnitCombineListLoading:r}},Ye=e=>{const{data:o,refetch:t,isFetching:r}=ce(e.data,{skip:e.skip});return{storeSevenRegister:o,storeSevenRegisterRefetch:t,storeSevenRegisterLoading:r}},Ee=e=>{const{data:o,refetch:t,isFetching:r}=ve(e.data,{skip:e.skip});return{storeSevenIssue:o,storeSevenIssueRefetch:t,storeSevenIssueLoading:r}},Je=e=>{const{data:o,refetch:t,isFetching:r}=_e(e.data,{skip:e.skip});return{storeSevenReturn:o,storeSevenReturnRefetch:t,storeSevenReturnLoading:r}},Ve=e=>{const{data:o,refetch:t,isFetching:r}=ge(e.data,{skip:e.skip});return{storeSevenConsumption:o,storeSevenConsumptionRefetch:t,storeSevenConsumptionLoading:r}},Ke=e=>{const{data:o,refetch:t,isFetching:r}=pe(e.data,{skip:e.skip});return{storeSevenMaintenance:o,storeSevenMaintenanceRefetch:t,storeSevenMaintenanceLoading:r}},Xe=e=>{const{data:o,refetch:t,isFetching:r}=me(e.data,{skip:e.skip});return{storeSevenRequest:o,storeSevenRequestRefetch:t,storeSevenRequestLoading:r}},We=e=>{const{data:o,refetch:t,isFetching:r}=he(e.data,{skip:e.skip});return{storeSevenStocktake:o,storeSevenStocktakeRefetch:t,storeSevenStocktakeLoading:r}},$e=e=>{const{data:o,refetch:t,isFetching:r}=ye(e.data,{skip:e.skip});return{storeReturnList:o,storeReturnListRefetch:t,storeReturnListLoading:r}},eo=e=>{const{data:o,refetch:t,isFetching:r}=fe(e.data,{skip:e.skip});return{storeReturnGoodsList:o,storeReturnGoodsListRefetch:t,storeReturnGoodsListLoading:r}},oo=()=>{const[e]=Se();return[e]},to=()=>{const[e]=Re();return[e]},ro=e=>{const{data:o,refetch:t,isFetching:r}=ke(e.data,{skip:e.skip});return{storeGoodsSevenRegister:o,storeGoodsSevenRegisterRefetch:t,storeGoodsSevenRegisterLoading:r}},so=e=>{const{data:o,refetch:t,isFetching:r}=Ae(e.data,{skip:e.skip});return{storeGoodsSevenIssue:o,storeGoodsSevenIssueRefetch:t,storeGoodsSevenIssueLoading:r}},io=e=>{const{data:o,refetch:t,isFetching:r}=be(e.data,{skip:e.skip});return{storeGoodsSevenReturn:o,storeGoodsSevenReturnRefetch:t,storeGoodsSevenReturnLoading:r}},no=e=>{const{data:o,refetch:t,isFetching:r}=Le(e.data,{skip:e.skip});return{storeGoodsSevenConsumption:o,storeGoodsSevenConsumptionRefetch:t,storeGoodsSevenConsumptionLoading:r}},ao=e=>{const{data:o,refetch:t,isFetching:r}=we(e.data,{skip:e.skip});return{storeGoodsSevenMaintenance:o,storeGoodsSevenMaintenanceRefetch:t,storeGoodsSevenMaintenanceLoading:r}},lo=e=>{const{data:o,refetch:t,isFetching:r}=Me(e.data,{skip:e.skip});return{storeGoodsSevenRequest:o,storeGoodsSevenRequestRefetch:t,storeGoodsSevenRequestLoading:r}},uo=e=>{const{data:o,refetch:t,isFetching:r}=Qe(e.data,{skip:e.skip});return{storeGoodsSevenStocktake:o,storeGoodsSevenStocktakeRefetch:t,storeGoodsSevenStocktakeLoading:r}},co=()=>{const[e]=Ge();return[e]}},79992:(e,o,t)=>{"use strict";t.d(o,{ZH:()=>s});var r=t(44816);const s=e=>{var o=r.AES.decrypt(e,"QVIPLESAASPLATFORM");return JSON.parse(o.toString(r.enc.Utf8))}},90904:(e,o,t)=>{"use strict";t.d(o,{Z:()=>i});const r="BorderBottom_split_content__RVPoh";var s=t(80184);const i=e=>{let{customStyleBorder:o}=e;return(0,s.jsx)("hr",{className:r,style:o})}},93638:(e,o,t)=>{"use strict";t.d(o,{Z:()=>n});var r=t(39230),s=t(80476),i=t(80184);const n=e=>{let{label:o,count:t,onAction:n,customStyle:a,isTranslate:l}=e;const{t:u}=(0,r.$G)();return l?(0,i.jsxs)("div",{className:s.Z.create_btn_container,onClick:n,style:a,children:[t>0?(0,i.jsxs)("span",{children:[t," "]}):null,o]}):(0,i.jsxs)("div",{className:s.Z.create_btn_container,onClick:n,style:a,children:[t>0?(0,i.jsxs)("span",{children:[t," "]}):null,u(o)]})}},48293:(e,o,t)=>{"use strict";t.d(o,{Z:()=>u});var r=t(72791),s=t(54164),i=t(15783),n=t(80184);const a=e=>{let{onBackdropClose:o,customBackdropStyle:t}=e;const a=(0,r.useCallback)((()=>{if(!o)return null;o()}),[o]);return s.createPortal((0,n.jsx)("div",{className:i.Z.modal_backdrop,onClick:a,style:t}),document.getElementById("backdrop"))},l=e=>{let{modalState:o,isHide:t,customOverlayStyle:r,children:a}=e;return s.createPortal((0,n.jsx)("div",{className:i.Z.modal_overlay,style:{...r},children:a}),document.getElementById("overlay"))},u=e=>{let{onClose:o,modalState:t,customBackdropStyle:r,customOverlayStyle:s,children:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{onBackdropClose:o,customBackdropStyle:r}),(0,n.jsx)(l,{customOverlayStyle:s,children:i})]})}},21348:(e,o,t)=>{"use strict";t.d(o,{Z:()=>i});var r=t(59393),s=t(80184);const i=e=>{let{customStyle:o,children:t}=e;return(0,s.jsx)("div",{className:r.Z.user_member_content_wrapper,style:o,children:t})}},80476:(e,o,t)=>{"use strict";t.d(o,{Z:()=>r});const r={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},59393:(e,o,t)=>{"use strict";t.d(o,{Z:()=>r});const r={user_member_header_wrapper:"UserMember_user_member_header_wrapper__GbnRw",umhw_cover:"UserMember_umhw_cover__9nFBA",umhw_cover_photo:"UserMember_umhw_cover_photo__SlMdy",umhw_cover_label:"UserMember_umhw_cover_label__3yZV3",umhw_cover_camera:"UserMember_umhw_cover_camera__vKOnO",umhw_info_container:"UserMember_umhw_info_container__ce+81",umhw_info_container_header:"UserMember_umhw_info_container_header__FD+-b",umhw_info_container_footer:"UserMember_umhw_info_container_footer__lVzFw",user_member_tabs_wrapper:"UserMember_user_member_tabs_wrapper__mhpkS",user_member_container_wrapper:"UserMember_user_member_container_wrapper__xbfdC",user_member_content_wrapper:"UserMember_user_member_content_wrapper__PP2xI",uf_link:"UserMember_uf_link__usZfM"}},16925:(e,o,t)=>{"use strict";t.d(o,{Z:()=>r});const r={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w"}},15783:(e,o,t)=>{"use strict";t.d(o,{Z:()=>r});const r={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}},42480:()=>{}}]);
//# sourceMappingURL=38434.b7301db4.chunk.js.map