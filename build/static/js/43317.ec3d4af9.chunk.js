"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[43317],{43317:(i,e,n)=>{n.d(e,{cj:()=>be,od:()=>Ee,Kz:()=>Be,W0:()=>Dn,PJ:()=>In,RL:()=>Me,b6:()=>Xe,rg:()=>Je,Ad:()=>on,GW:()=>xe,cR:()=>we,u3:()=>ze,ye:()=>Ke,o5:()=>We,oL:()=>je,Lg:()=>Ye,ZX:()=>Ne,z1:()=>en,Rg:()=>Ge,FC:()=>Te,nK:()=>sn,s5:()=>nn,m2:()=>fn,HU:()=>On,UX:()=>xn,JC:()=>Mn,aL:()=>kn,Hi:()=>yn,Kv:()=>Rn,Be:()=>wn,Zx:()=>un,O1:()=>pn,ur:()=>gn,u8:()=>mn,Mo:()=>cn,TM:()=>vn,VO:()=>An,ZN:()=>hn,u7:()=>dn,ws:()=>rn,_v:()=>qn,Rq:()=>Fn,Hk:()=>Qn,D5:()=>bn,AY:()=>Cn,LT:()=>Ln,mW:()=>ln,Wl:()=>_e,jD:()=>ke,VZ:()=>En,zi:()=>Ze,v2:()=>Se,qD:()=>Ve,ZT:()=>an,yT:()=>Ie,vr:()=>Pe,Bp:()=>Ue,rz:()=>$e,We:()=>_n,se:()=>tn,Kw:()=>De,KK:()=>He,$C:()=>Nn});var o=n(44227),t=n(79992),a=n(94811);const s=i=>i.mutation({query:i=>({url:"/admission/ins/".concat(i.instituteId,"/admission/query"),method:a.a4,body:i.activateModule})}),r=i=>i.mutation({query:i=>({url:"/edit/staff/admission/staff/".concat(i.osid,"?nsid=").concat(i.nsid),method:a.Q0}),invalidatesTags:["Cash_finance"]}),l=i=>i.query({query:i=>"/admission/".concat(i.aid,"/dashboard/query?mod_id=").concat(i.mod_id),providesTags:["Cash_finance"],serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:i=>{let e=(0,t.ZH)(null===i||void 0===i?void 0:i.encrypt);return null===e||void 0===e?void 0:e.admission}}),d=i=>i.mutation({query:i=>({url:"/finance/".concat(i.aid,"/admission/request"),method:a.a4,body:i.submitAmount}),invalidatesTags:["Cash_finance"]}),c=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/receipts/by?page=").concat(i.page,"&limit=").concat(i.limit,"&filter_by=").concat(i.filterBy,"&over_filter=").concat(i.over_filter,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_requests}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_requests},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),u=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/one/receipts/").concat(i.rid,"/status/decheque/query?reqId=").concat(i.reqId,"&status=").concat(i.status),method:a.Q0,body:i.receiptAction})}),p=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/document/array?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_docs}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_docs},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),m=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/add/document/flow"),method:a.a4,body:i.document})}),g=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/edit/document/flow"),method:a.Q0,body:i.editDocument})}),v=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/delete/document/").concat(i.did),method:a.yY})}),A=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/export/excel/array?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_excel}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_excel},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),h=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/export/excel/").concat(i.xlsxId,"/edit"),method:a.Q0,body:i.excelUpdate})}),y=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/export/excel/").concat(i.xlsxId,"/destroy/query"),method:a.yY})}),f=i=>i.mutation({query:i=>({url:"/feed/filter/pending/fee/".concat(i.aid,"?gender=").concat(i.gender,"&category=").concat(i.caste,"&is_all=").concat(i.is_all,"&all_depart=").concat(i.all_depart,"&batch_status=").concat(i.batch_status),method:a.Q0,body:i.exportData})}),R=i=>i.query({query:i=>"/role/permission/".concat(i.aid,"/all/moderator?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_mods}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_mods},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),q=i=>i.mutation({query:i=>{var e;return{url:"/role/permission/".concat(i.aid,"/new/app/mod?active_tab=").concat(null!==(e=null===i||void 0===i?void 0:i.active_tab)&&void 0!==e?e:""),method:a.a4,body:i.addModerator}}}),O=i=>i.mutation({query:i=>{var e;return{url:"/role/permission/update/app/mod/".concat(i.modId,"?active_tab=").concat(null!==(e=null===i||void 0===i?void 0:i.active_tab)&&void 0!==e?e:""),method:a.Q0,body:i.updateModerator}}}),L=i=>i.mutation({query:i=>({url:"/role/permission/".concat(i.aid,"/destroy/app/mod/").concat(i.modId),method:a.yY})}),Q=i=>i.query({query:i=>{var e;return"/admission/".concat(i.aid,"/all/remaining/applicable/array?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search,"&flow=").concat(null!==(e=i.flow)&&void 0!==e?e:"Applicable_Fees_Query")},serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.remain}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.remain},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),C=i=>i.query({query:i=>{var e;return"/extra/all/filtered/alarm/".concat(i.id,"/query?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(null!==(e=i.search)&&void 0!==e?e:"")},serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_message}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_message},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),F=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/all/outstanding/query"),method:a.Q0,body:i.pendingData})}),b=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/trigger/alarm?alarm_mode=").concat(i.alarm_mode),method:a.a4,body:i.reminderData})}),x=i=>i.query({query:i=>{var e;return"/admission/".concat(i.aid,"/refund/array?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(null!==(e=null===i||void 0===i?void 0:i.search)&&void 0!==e?e:"")},serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_refund_list}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_refund_list},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),M=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/refunded/array?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.all_refunded}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.all_refunded},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),k=i=>i.mutation({query:i=>({url:"/feed/filter/by/excess/fees/export/query?aid=".concat(i.aid),method:a.Q0})}),_=i=>i.mutation({query:i=>({url:"/feed/filter/by/refund/fees/export/query?aid=".concat(i.aid),method:a.Q0})}),w=i=>i.mutation({query:i=>({url:"/admission/manage/tab/".concat(null===i||void 0===i?void 0:i.aid),method:a.Q0,body:i.tabManage})}),E=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/completed/application/detail?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>{let o=(0,t.ZH)(null===i||void 0===i?void 0:i.encrypt);return null!==n&&void 0!==n&&n.search?{search:!0,list:null===o||void 0===o?void 0:o.completed}:{page:null===n||void 0===n?void 0:n.page,list:null===o||void 0===o?void 0:o.completed}},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),D=i=>i.mutation({query:i=>({url:"/admission/".concat(i.appId,"/application/complete"),method:a.Q0})}),I=i=>i.mutation({query:i=>({url:"/admission/".concat(i.appId,"/application/incomplete"),method:a.Q0})}),N=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/ongoing/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>{let o=(0,t.ZH)(null===i||void 0===i?void 0:i.encrypt);return null!==n&&void 0!==n&&n.search?{search:!0,list:null===o||void 0===o?void 0:o.ongoing}:{page:null===n||void 0===n?void 0:n.page,list:null===o||void 0===o?void 0:o.ongoing}},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),z=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/new/application"),method:a.a4,body:i.application})}),P=i=>i.mutation({query:i=>({url:"/admission/edit/".concat(i.appId),method:a.Q0,body:i.updateApplication})}),T=i=>i.mutation({query:i=>({url:"/admission/".concat(i.aid,"/destroy/").concat(i.appId),method:a.yY})}),B=i=>i.query({query:i=>"/admission/".concat(i,"/application/query"),transformResponse:i=>{let e=(0,t.ZH)(null===i||void 0===i?void 0:i.encrypt);return null===e||void 0===e?void 0:e.oneApply},serializeQueryArgs:i=>{let{endpointName:e}=i;return e},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),H=i=>i.query({query:i=>"/admission/".concat(i.appId,"/request/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.request}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.request},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),U=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/select"),method:a.a4,body:i.applicant})}),V=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/cancel/app"),method:a.a4})}),Z=i=>i.mutation({query:i=>({url:"/feed/filter/application/export/".concat(i.appId,"?flow=").concat(i.flow),method:a.Q0})}),S=i=>i.query({query:i=>"/admission/".concat(i.appId,"/selected/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.select}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.select},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),K=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/collect/docs"),method:a.a4,body:i.document})}),j=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/revert/back/select/query"),method:a.a4,body:i.revert})}),W=i=>i.mutation({query:i=>({url:"/admission/".concat(i.appId,"/student/").concat(i.sid,"/edit/structure"),method:a.Q0,body:i.applicant})}),Y=i=>i.query({query:i=>"/admission/".concat(i.appId,"/fee/collected/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.fees}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.fees},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),J=i=>i.mutation({query:i=>{var e;return{url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/pay/offline/confirm?receipt_status=").concat(null!==(e=null===i||void 0===i?void 0:i.receipt_status)&&void 0!==e?e:""),method:a.a4,body:i.collect}}}),X=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/collect/revert/back/docs/query"),method:a.a4,body:i.revert})}),G=i=>i.query({query:i=>"/admission/".concat(i.appId,"/confirmed/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.confirm}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.confirm},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),$=i=>i.query({query:i=>"/admission/".concat(i.appId,"/confirmed/application/all/payload"),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:i=>null===i||void 0===i?void 0:i.confirm,forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),ii=i=>i.mutation({query:i=>({url:"/admission/".concat(null===i||void 0===i?void 0:i.appId,"/student/review/query"),method:a.Q0,body:i.review})}),ei=i=>i.query({query:i=>"/admission/".concat(i.appId,"/review/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.review}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.review},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),ni=i=>i.query({query:i=>"/admission/".concat(i.appId,"/review/application/all/payload"),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:i=>null===i||void 0===i?void 0:i.review,forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),oi=i=>i.mutation({query:i=>({url:"/feed/filter/by/review/array/".concat(i.appId,"?sort_query=").concat(i.sort_query),method:a.Q0})}),ti=i=>i.query({query:i=>"/admission/".concat(i,"/application/batch"),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:i=>null===i||void 0===i?void 0:i.batch,forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),ai=i=>i.query({query:i=>"/admission/".concat(i.appId,"/application/class/").concat(i.bid,"?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.classes}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.classes},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),si=i=>i.mutation({query:i=>({url:"/admission/student/".concat(i.appId,"/allot/class/").concat(i.cid),method:a.a4,body:i.applicant})}),ri=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/student/").concat(i.appId,"/pay/refund"),method:a.a4,body:i.payment})}),li=i=>i.query({query:i=>"/admission/".concat(i.appId,"/allotted/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.allot}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.allot},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),di=i=>i.mutation({query:i=>({url:"/admission/".concat(i.sid,"/allotted/student/").concat(i.appId,"/pay/refund"),method:a.a4,body:i.payment})}),ci=i=>i.query({query:i=>"/admission/".concat(i.appId,"/cancelled/application?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.cancel}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.cancel},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),ui=i=>i.mutation({query:i=>({url:"/admission/".concat(i.appId,"/transfer/apps/query"),method:a.Q0,body:i.transferApplicantData})}),pi=i=>i.query({query:i=>"/feed/filter/by/date/collection/".concat(null===i||void 0===i?void 0:i.appId,"/query?valid_date=").concat(i.valid_date),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:i=>null===i||void 0===i?void 0:i.day_wise,forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),mi=i=>i.query({query:i=>"/admission/".concat(i.aid,"/all/cancel/app/query?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i?void 0:i.cancel}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i?void 0:i.cancel},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),gi=i=>i.mutation({query:i=>({url:"/feed/filter/".concat(i.aid,"/cancel/export/query?all_depart=").concat(i.all_depart,"&batch_status=").concat(i.batch_status,"&timeline=").concat(i.timeline,"&timeline_content=").concat(i.timeline_content,"&from=").concat(i.from,"&to=").concat(i.to,"&bank=").concat(i.bank),method:"PATCH",body:null===i||void 0===i?void 0:i.pendingData})}),vi=i=>i.query({query:i=>"/ins/batch-detail/".concat(i.bid,"?page=").concat(i.page,"&limit=").concat(i.limit,"&search=").concat(i.search),serializeQueryArgs:i=>{let{endpointName:e}=i;return e},transformResponse:(i,e,n)=>{var o,t;return null!==n&&void 0!==n&&n.search?{search:!0,list:null===i||void 0===i||null===(o=i.batch)||void 0===o?void 0:o.classroom}:{page:null===n||void 0===n?void 0:n.page,list:null===i||void 0===i||null===(t=i.batch)||void 0===t?void 0:t.classroom}},merge:(i,e)=>{var n;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===i||void 0===i||null===(n=i.list)||void 0===n||n.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(i){let{currentArg:e,previousArg:n}=i;return e!==n}}),Ai=o.y.injectEndpoints({endpoints:i=>({admissionActivateModule:s(i),admissionUpdateModule:r(i),admissionDashboardMaster:l(i),admissionCashToFinance:d(i),admissionPaymentVerifyList:c(i),admissionPaymentVerifyAction:u(i),admissionDocumentList:p(i),admissionAddDocument:m(i),admissionUpdateDocument:g(i),admissionRemoveDocument:v(i),admissionExportExcelList:A(i),admissionEditExportExcel:h(i),admissionRemoveExportExcel:y(i),admissionModeratorList:R(i),admissionAddModerator:q(i),admissionUpdateModerator:O(i),admissionRemoveModerator:L(i),admissionPendingFeesReminderHistory:C(i),admissionPendingFeesOsStudentList:F(i),admissionPendingFeesReminder:b(i),admissionExcessFeeNotRefundedList:x(i),admissionExcessFeeRefundedList:M(i),admissionCompletedApplicationList:E(i),admissionCompleteApplication:D(i),admissionIncompleteApplication:I(i),admissionExcessFeeNotRefundedListExport:k(i),admissionExcessFeeRefundedListExport:_(i),admissionTabController:w(i),admissionExportFilterExcel:f(i),admissionOngoingApplication:N(i),admissionCreateApplication:z(i),admissionUpdateApplication:P(i),admissionRemoveApplication:T(i),admissionOneOngoingApplication:B(i),admissionOngoingApplicationRequest:H(i),admissionOngoingApplicationSelect:U(i),admissionOngoingApplicationReject:V(i),admissionOngoingApplicationExport:Z(i),admissionOngoingApplicationDocument:S(i),admissionOngoingApplicationDocumentCollect:K(i),admissionOngoingApplicationDocumentRevert:j(i),admissionOngoingApplicationDocumentEditStructure:W(i),admissionOngoingApplicationFees:Y(i),admissionOngoingApplicationFeesCollect:J(i),admissionOngoingApplicationFeesRevert:X(i),admissionOngoingApplicationConfirm:G(i),admissionOngoingApplicationAllConfirmList:$(i),admissionOngoingApplicationConfirmReview:ii(i),admissionOngoingApplicationReview:ei(i),admissionOngoingApplicationAllReviewList:ni(i),admissionOngoingApplicationReviewSort:oi(i),admissionOngoingApplicationReviewBatch:ti(i),admissionOngoingApplicationReviewClasses:ai(i),admissionOngoingApplicationReviewAllot:si(i),admissionOngoingApplicationReviewCancel:ri(i),admissionOngoingApplicationAllottment:li(i),admissionOngoingApplicationAllottmentCancel:di(i),admissionOngoingApplicationCancelled:ci(i),admissionTransferApplicatToOtherApplication:ui(i),admissionOngoingApplicationDailyCollect:pi(i),admissionPendingFees:Q(i),admissionApplicantCancelledList:mi(i),admissionCancelledListExport:gi(i),departmentBatchAllClass:vi(i)})}),{useAdmissionActivateModuleMutation:hi,useAdmissionUpdateModuleMutation:yi,useAdmissionDashboardMasterQuery:fi,useAdmissionCashToFinanceMutation:Ri,useAdmissionPaymentVerifyListQuery:qi,useAdmissionPaymentVerifyActionMutation:Oi,useAdmissionDocumentListQuery:Li,useAdmissionAddDocumentMutation:Qi,useAdmissionUpdateDocumentMutation:Ci,useAdmissionRemoveDocumentMutation:Fi,useAdmissionExportExcelListQuery:bi,useAdmissionEditExportExcelMutation:xi,useAdmissionRemoveExportExcelMutation:Mi,useAdmissionModeratorListQuery:ki,useAdmissionAddModeratorMutation:_i,useAdmissionUpdateModeratorMutation:wi,useAdmissionRemoveModeratorMutation:Ei,useAdmissionPendingFeesReminderHistoryQuery:Di,useAdmissionPendingFeesOsStudentListMutation:Ii,useAdmissionPendingFeesReminderMutation:Ni,useAdmissionExcessFeeNotRefundedListQuery:zi,useAdmissionExcessFeeRefundedListQuery:Pi,useAdmissionCompletedApplicationListQuery:Ti,useAdmissionCompleteApplicationMutation:Bi,useAdmissionIncompleteApplicationMutation:Hi,useAdmissionExcessFeeNotRefundedListExportMutation:Ui,useAdmissionExcessFeeRefundedListExportMutation:Vi,useAdmissionTabControllerMutation:Zi,useAdmissionExportFilterExcelMutation:Si,useAdmissionOngoingApplicationQuery:Ki,useAdmissionCreateApplicationMutation:ji,useAdmissionUpdateApplicationMutation:Wi,useAdmissionRemoveApplicationMutation:Yi,useAdmissionOneOngoingApplicationQuery:Ji,useAdmissionOngoingApplicationRequestQuery:Xi,useAdmissionOngoingApplicationSelectMutation:Gi,useAdmissionOngoingApplicationRejectMutation:$i,useAdmissionOngoingApplicationExportMutation:ie,useAdmissionOngoingApplicationDocumentQuery:ee,useAdmissionOngoingApplicationDocumentCollectMutation:ne,useAdmissionOngoingApplicationDocumentRevertMutation:oe,useAdmissionOngoingApplicationDocumentEditStructureMutation:te,useAdmissionOngoingApplicationFeesQuery:ae,useAdmissionOngoingApplicationFeesCollectMutation:se,useAdmissionOngoingApplicationFeesRevertMutation:re,useAdmissionOngoingApplicationConfirmQuery:le,useAdmissionOngoingApplicationAllConfirmListQuery:de,useAdmissionOngoingApplicationConfirmReviewMutation:ce,useAdmissionOngoingApplicationReviewQuery:ue,useAdmissionOngoingApplicationAllReviewListQuery:pe,useAdmissionOngoingApplicationReviewSortMutation:me,useAdmissionOngoingApplicationReviewBatchQuery:ge,useAdmissionOngoingApplicationReviewClassesQuery:ve,useAdmissionOngoingApplicationReviewAllotMutation:Ae,useAdmissionOngoingApplicationReviewCancelMutation:he,useAdmissionOngoingApplicationAllottmentQuery:ye,useAdmissionOngoingApplicationAllottmentCancelMutation:fe,useAdmissionOngoingApplicationCancelledQuery:Re,useAdmissionTransferApplicatToOtherApplicationMutation:qe,useAdmissionOngoingApplicationDailyCollectQuery:Oe,useAdmissionPendingFeesQuery:Le,useAdmissionApplicantCancelledListQuery:Qe,useAdmissionCancelledListExportMutation:Ce,useDepartmentBatchAllClassQuery:Fe}=Ai,be=()=>{const[i]=hi();return[i]},xe=i=>{const{data:e,refetch:n,isFetching:o}=fi(i.data,{skip:i.skip});return{admissionDashboardMaster:e,admissionDashboardMasterRefetch:n,admissionDashboardMasterLoading:o}},Me=()=>{const[i]=Ri();return[i]},ke=i=>{const{data:e,refetch:n,isFetching:o}=qi(i.data,{skip:i.skip});return{admissionPaymentVerifyList:e,admissionPaymentVerifyListRefetch:n,admissionPaymentVerifyListLoading:o}},_e=()=>{const[i]=Oi();return[i]},we=i=>{const{data:e,refetch:n,isFetching:o}=Li(i.data,{skip:i.skip});return{admissionDocumentList:e,admissionDocumentListRefetch:n,admissionDocumentListLoading:o}},Ee=()=>{const[i]=Qi();return[i]},De=()=>{const[i]=Ci();return[i]},Ie=()=>{const[i]=Fi();return[i]},Ne=i=>{const{data:e,refetch:n,isFetching:o}=bi(i.data,{skip:i.skip});return{admissionExportExcelList:e,admissionExportExcelListRefetch:n,admissionExportExcelListLoading:o}},ze=()=>{const[i]=xi();return[i]},Pe=()=>{const[i]=Mi();return[i]},Te=i=>{const{data:e,refetch:n,isFetching:o}=ki(i.data,{skip:i.skip});return{admissionModeratorList:e,admissionModeratorListRefetch:n,admissionModeratorListLoading:o}},Be=()=>{const[i]=_i();return[i]},He=()=>{const[i]=wi();return[i]},Ue=()=>{const[i]=Ei();return[i]},Ve=i=>{const{data:e,refetch:n,isFetching:o}=Di(i.data,{skip:i.skip});return{admissionPendingFeesReminderHistory:e,admissionPendingFeesReminderHistoryRefetch:n,admissionPendingFeesReminderHistoryLoading:o}},Ze=()=>{const[i]=Ii();return[i]},Se=()=>{const[i]=Ni();return[i]},Ke=i=>{const{data:e,refetch:n,isFetching:o}=zi(i.data,{skip:i.skip});return{admissionExcessFeeNotRefundedList:e,admissionExcessFeeNotRefundedListRefetch:n,admissionExcessFeeNotRefundedListLoading:o}},je=i=>{const{data:e,refetch:n,isFetching:o}=Pi(i.data,{skip:i.skip});return{admissionExcessFeeRefundedList:e,admissionExcessFeeRefundedListRefetch:n,admissionExcessFeeRefundedListLoading:o}},We=()=>{const[i]=Ui();return[i]},Ye=()=>{const[i]=Vi();return[i]},Je=i=>{const{data:e,refetch:n,isFetching:o}=Ti(i.data,{skip:i.skip});return{admissionCompletedApplicationList:e,admissionCompletedApplicationListRefetch:n,admissionCompletedApplicationListLoading:o}},Xe=()=>{const[i]=Bi();return[i]},Ge=()=>{const[i]=Hi();return[i]},$e=()=>{const[i]=Zi();return[i]},en=()=>{const[i]=Si();return[i]},nn=i=>{const{data:e,refetch:n,isFetching:o}=Ki(i.data,{skip:i.skip});return{admissionOngoingApplication:e,admissionOngoingApplicationRefetch:n,admissionOngoingApplicationLoading:o}},on=()=>{const[i]=ji();return[i]},tn=()=>{const[i]=Wi();return[i]},an=()=>{const[i]=Yi();return[i]},sn=i=>{const{data:e,refetch:n,isFetching:o}=Ji(i.appId,{skip:i.skip});return{admissionOneOngoingApplication:e,admissionOneOngoingApplicationRefetch:n,admissionOneOngoingApplicationLoading:o}},rn=i=>{const{data:e,refetch:n,isFetching:o}=Xi(i.data,{skip:i.skip});return{admissionOngoingApplicationRequest:e,admissionOngoingApplicationRequestRefetch:n,admissionOngoingApplicationRequestLoading:o}},ln=()=>{const[i]=Gi();return[i]},dn=()=>{const[i]=$i();return[i]},cn=()=>{const[i]=ie();return[i]},un=i=>{const{data:e,refetch:n,isFetching:o}=ee(i.data,{skip:i.skip});return{admissionOngoingApplicationDocument:e,admissionOngoingApplicationDocumentRefetch:n,admissionOngoingApplicationDocumentLoading:o}},pn=()=>{const[i]=ne();return[i]},mn=()=>{const[i]=oe();return[i]},gn=()=>{const[i]=te();return[i]},vn=i=>{const{data:e,refetch:n,isFetching:o}=ae(i.data,{skip:i.skip});return{admissionOngoingApplicationFees:e,admissionOngoingApplicationFeesRefetch:n,admissionOngoingApplicationFeesLoading:o}},An=()=>{const[i]=se();return[i]},hn=()=>{const[i]=re();return[i]},yn=i=>{const{data:e,refetch:n,isFetching:o}=le(i.data,{skip:i.skip});return{admissionOngoingApplicationConfirm:e,admissionOngoingApplicationConfirmRefetch:n,admissionOngoingApplicationConfirmLoading:o}},fn=i=>{const{data:e,refetch:n,isFetching:o}=de(i.data,{skip:i.skip});return{admissionOngoingApplicationAllConfirmList:e,admissionOngoingApplicationAllConfirmListRefetch:n,admissionOngoingApplicationAllConfirmListLoading:o}},Rn=()=>{const[i]=ce();return[i]},qn=i=>{const{data:e,refetch:n,isFetching:o}=ue(i.data,{skip:i.skip});return{admissionOngoingApplicationReview:e,admissionOngoingApplicationReviewRefetch:n,admissionOngoingApplicationReviewLoading:o}},On=i=>{const{data:e,refetch:n,isFetching:o}=pe(i.data,{skip:i.skip});return{admissionOngoingApplicationAllReviewList:e,admissionOngoingApplicationAllReviewListRefetch:n,admissionOngoingApplicationAllReviewListLoading:o}},Ln=()=>{const[i]=me();return[i]},Qn=i=>{const{data:e,refetch:n,isFetching:o}=ge(i.appId,{skip:i.skip});return{admissionOngoingApplicationReviewBatch:e,admissionOngoingApplicationReviewBatchRefetch:n,admissionOngoingApplicationReviewBatchLoading:o}},Cn=i=>{const{data:e,refetch:n,isFetching:o}=ve(i.data,{skip:i.skip});return{admissionOngoingApplicationReviewClasses:e,admissionOngoingApplicationReviewClassesRefetch:n,admissionOngoingApplicationReviewClassesLoading:o}},Fn=()=>{const[i]=Ae();return[i]},bn=()=>{const[i]=he();return[i]},xn=i=>{const{data:e,refetch:n,isFetching:o}=ye(i.data,{skip:i.skip});return{admissionOngoingApplicationAllottment:e,admissionOngoingApplicationAllottmentRefetch:n,admissionOngoingApplicationAllottmentLoading:o}},Mn=()=>{const[i]=fe();return[i]},kn=i=>{const{data:e,refetch:n,isFetching:o}=Re(i.data,{skip:i.skip});return{admissionOngoingApplicationCancelled:e,admissionOngoingApplicationCancelledRefetch:n,admissionOngoingApplicationCancelledLoading:o}},_n=()=>{const[i]=qe();return[i]},wn=i=>{const{data:e,refetch:n,isFetching:o}=Oe(i.data,{skip:i.skip});return{admissionOngoingApplicationDailyCollect:e,admissionOngoingApplicationDailyCollectRefetch:n,admissionOngoingApplicationDailyCollectLoading:o}},En=i=>{const{data:e,refetch:n,isFetching:o}=Le(i.data,{skip:i.skip});return{admissionPendingFees:e,admissionPendingFeesRefetch:n,admissionPendingFeesLoading:o}},Dn=i=>{const{data:e,refetch:n,isFetching:o}=Qe(i.data,{skip:i.skip});return{admissionApplicantCancelledList:e,admissionApplicantCancelledListRefetch:n,admissionApplicantCancelledListLoading:o}},In=()=>{const[i]=Ce();return[i]},Nn=i=>{const{data:e,refetch:n,isFetching:o}=Fe(i.data,{skip:i.skip});return{departmentBatchAllClass:e,departmentBatchAllClassRefetch:n,departmentBatchAllClassLoading:o}}}}]);
//# sourceMappingURL=43317.ec3d4af9.chunk.js.map