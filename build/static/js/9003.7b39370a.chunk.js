(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[9003],{43317:function(n,i,t){"use strict";t.d(i,{cj:function(){return Fi},od:function(){return ki},Kz:function(){return zi},RL:function(){return Mi},b6:function(){return Wi},rg:function(){return ji},Ad:function(){return nt},GW:function(){return Zi},cR:function(){return Ci},u3:function(){return Di},ye:function(){return Ui},o5:function(){return Ki},oL:function(){return Vi},Lg:function(){return Yi},ZX:function(){return _i},z1:function(){return Gi},Rg:function(){return Ji},FC:function(){return Ni},nK:function(){return et},s5:function(){return $i},m2:function(){return gt},HU:function(){return yt},UX:function(){return Ft},JC:function(){return Zt},aL:function(){return Mt},Hi:function(){return vt},Kv:function(){return At},Be:function(){return xt},Zx:function(){return st},O1:function(){return ct},ur:function(){return lt},u8:function(){return dt},Mo:function(){return ut},TM:function(){return pt},VO:function(){return ft},ZN:function(){return mt},u7:function(){return at},ws:function(){return ot},_v:function(){return ht},Rq:function(){return Lt},Hk:function(){return qt},D5:function(){return Qt},AY:function(){return Ot},LT:function(){return Rt},mW:function(){return rt},Wl:function(){return xi},jD:function(){return bi},VZ:function(){return Ct},zi:function(){return Si},v2:function(){return Bi},qD:function(){return Hi},ZT:function(){return tt},yT:function(){return wi},vr:function(){return Ii},Bp:function(){return Ti},rz:function(){return Xi},We:function(){return bt},se:function(){return it},Kw:function(){return Ei},KK:function(){return Pi},$C:function(){return kt}});var e=t(29439),o=t(44227),r=t(93433),a=t(79992),u=t(94811),s=function(n){return n.mutation({query:function(n){return{url:"/admission/ins/".concat(n.instituteId,"/admission/query"),method:u.a4,body:n.activateModule}}})},c=function(n){return n.mutation({query:function(n){return{url:"/edit/staff/admission/staff/".concat(n.osid,"?nsid=").concat(n.nsid),method:u.Q0}},invalidatesTags:["Cash_finance"]})},d=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/dashboard/query?mod_id=").concat(n.mod_id)},providesTags:["Cash_finance"],serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n){var i=(0,a.ZH)(null===n||void 0===n?void 0:n.encrypt);return null===i||void 0===i?void 0:i.admission}})},l=function(n){return n.mutation({query:function(n){return{url:"/finance/".concat(n.aid,"/admission/request"),method:u.a4,body:n.submitAmount}},invalidatesTags:["Cash_finance"]})},p=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/receipts/by?page=").concat(n.page,"&limit=").concat(n.limit,"&filter_by=").concat(n.filterBy,"&over_filter=").concat(n.over_filter,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_requests}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_requests}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},f=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/one/receipts/").concat(n.rid,"/status/decheque/query?reqId=").concat(n.reqId,"&status=").concat(n.status),method:u.Q0,body:n.receiptAction}}})},m=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/document/array?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_docs}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_docs}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},v=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/add/document/flow"),method:u.a4,body:n.document}}})},g=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/edit/document/flow"),method:u.Q0,body:n.editDocument}}})},A=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/delete/document/").concat(n.did),method:u.yY}}})},h=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/export/excel/array?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_excel}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_excel}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},y=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/export/excel/").concat(n.xlsxId,"/edit"),method:u.Q0,body:n.excelUpdate}}})},R=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/export/excel/").concat(n.xlsxId,"/destroy/query"),method:u.yY}}})},q=function(n){return n.mutation({query:function(n){return{url:"/feed/filter/pending/fee/".concat(n.aid,"?gender=").concat(n.gender,"&category=").concat(n.caste,"&is_all=").concat(n.is_all,"&all_depart=").concat(n.all_depart,"&batch_status=").concat(n.batch_status),method:u.Q0,body:n.exportData}}})},O=function(n){return n.query({query:function(n){return"/role/permission/".concat(n.aid,"/all/moderator?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_mods}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_mods}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},L=function(n){return n.mutation({query:function(n){var i;return{url:"/role/permission/".concat(n.aid,"/new/app/mod?active_tab=").concat(null!==(i=null===n||void 0===n?void 0:n.active_tab)&&void 0!==i?i:""),method:u.a4,body:n.addModerator}}})},Q=function(n){return n.mutation({query:function(n){var i;return{url:"/role/permission/update/app/mod/".concat(n.modId,"?active_tab=").concat(null!==(i=null===n||void 0===n?void 0:n.active_tab)&&void 0!==i?i:""),method:u.Q0,body:n.updateModerator}}})},F=function(n){return n.mutation({query:function(n){return{url:"/role/permission/".concat(n.aid,"/destroy/app/mod/").concat(n.modId),method:u.yY}}})},Z=function(n){return n.query({query:function(n){var i;return"/admission/".concat(n.aid,"/all/remaining/applicable/array?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search,"&flow=").concat(null!==(i=n.flow)&&void 0!==i?i:"Applicable_Fees_Query")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.remain}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.remain}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},M=function(n){return n.query({query:function(n){var i;return"/extra/all/filtered/alarm/".concat(n.id,"/query?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(null!==(i=n.search)&&void 0!==i?i:"")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_message}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_message}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},b=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/all/outstanding/query"),method:u.Q0,body:n.pendingData}}})},x=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/trigger/alarm?alarm_mode=").concat(n.alarm_mode),method:u.a4,body:n.reminderData}}})},C=function(n){return n.query({query:function(n){var i;return"/admission/".concat(n.aid,"/refund/array?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(null!==(i=null===n||void 0===n?void 0:n.search)&&void 0!==i?i:"")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_refund_list}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_refund_list}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},k=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/refunded/array?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.all_refunded}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.all_refunded}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},E=function(n){return n.mutation({query:function(n){return{url:"/filter/by/excess/fees/export/query?aid=".concat(n.aid),method:u.Q0}}})},w=function(n){return n.mutation({query:function(n){return{url:"/filter/by/refund/fees/export/query?aid=".concat(n.aid),method:u.Q0}}})},_=function(n){return n.mutation({query:function(n){return{url:"/admission/manage/tab/".concat(null===n||void 0===n?void 0:n.aid),method:u.Q0,body:n.tabManage}}})},D=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/completed/application/detail?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){var e=(0,a.ZH)(null===n||void 0===n?void 0:n.encrypt);return null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.completed}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.completed}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},I=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.appId,"/application/complete"),method:u.Q0}}})},N=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.appId,"/application/incomplete"),method:u.Q0}}})},z=function(n){return n.query({query:function(n){return"/admission/".concat(n.aid,"/all/ongoing/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){var e=(0,a.ZH)(null===n||void 0===n?void 0:n.encrypt);return null!==t&&void 0!==t&&t.search?{search:!0,list:null===e||void 0===e?void 0:e.ongoing}:{page:null===t||void 0===t?void 0:t.page,list:null===e||void 0===e?void 0:e.ongoing}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},P=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/new/application"),method:u.a4,body:n.application}}})},T=function(n){return n.mutation({query:function(n){return{url:"/admission/edit/".concat(n.appId),method:u.Q0,body:n.updateApplication}}})},H=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.aid,"/destroy/").concat(n.appId),method:u.yY}}})},S=function(n){return n.query({query:function(n){return"/admission/".concat(n,"/application/query")},transformResponse:function(n){var i=(0,a.ZH)(null===n||void 0===n?void 0:n.encrypt);return null===i||void 0===i?void 0:i.oneApply},serializeQueryArgs:function(n){return n.endpointName},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},B=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/request/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.request}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.request}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},U=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/select"),method:u.a4,body:n.applicant}}})},V=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/cancel/app"),method:u.a4}}})},K=function(n){return n.mutation({query:function(n){return{url:"/feed/filter/application/export/".concat(n.appId,"?flow=").concat(n.flow),method:u.Q0}}})},Y=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/selected/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.select}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.select}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},j=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/collect/docs"),method:u.a4,body:n.document}}})},W=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/revert/back/select/query"),method:u.a4,body:n.revert}}})},J=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.appId,"/student/").concat(n.sid,"/edit/structure"),method:u.Q0,body:n.applicant}}})},X=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/fee/collected/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.fees}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.fees}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},G=function(n){return n.mutation({query:function(n){var i;return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/pay/offline/confirm?receipt_status=").concat(null!==(i=null===n||void 0===n?void 0:n.receipt_status)&&void 0!==i?i:""),method:u.a4,body:n.collect}}})},$=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/collect/revert/back/docs/query"),method:u.a4,body:n.revert}}})},nn=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/confirmed/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.confirm}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.confirm}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},tn=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/confirmed/application/all/payload")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n){return null===n||void 0===n?void 0:n.confirm},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},en=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(null===n||void 0===n?void 0:n.appId,"/student/review/query"),method:u.Q0,body:n.review}}})},on=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/review/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.review}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.review}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},rn=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/review/application/all/payload")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n){return null===n||void 0===n?void 0:n.review},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},an=function(n){return n.mutation({query:function(n){return{url:"/feed/filter/by/review/array/".concat(n.appId,"?sort_query=").concat(n.sort_query),method:u.Q0}}})},un=function(n){return n.query({query:function(n){return"/admission/".concat(n,"/application/batch")},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n){return null===n||void 0===n?void 0:n.batch},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},sn=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/application/class/").concat(n.bid,"?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.classes}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.classes}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},cn=function(n){return n.mutation({query:function(n){return{url:"/admission/student/".concat(n.appId,"/allot/class/").concat(n.cid),method:u.a4,body:n.applicant}}})},dn=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/student/").concat(n.appId,"/pay/refund"),method:u.a4,body:n.payment}}})},ln=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/allotted/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.allot}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.allot}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},pn=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.sid,"/allotted/student/").concat(n.appId,"/pay/refund"),method:u.a4,body:n.payment}}})},fn=function(n){return n.query({query:function(n){return"/admission/".concat(n.appId,"/cancelled/application?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n?void 0:n.cancel}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n?void 0:n.cancel}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},mn=function(n){return n.mutation({query:function(n){return{url:"/admission/".concat(n.appId,"/transfer/apps/query"),method:u.Q0,body:n.transferApplicantData}}})},vn=function(n){return n.query({query:function(n){return"/feed/filter/by/date/collection/".concat(null===n||void 0===n?void 0:n.appId,"/query?valid_date=").concat(n.valid_date)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n){return null===n||void 0===n?void 0:n.day_wise},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},gn=function(n){return n.query({query:function(n){return"/ins/batch-detail/".concat(n.bid,"?page=").concat(n.page,"&limit=").concat(n.limit,"&search=").concat(n.search)},serializeQueryArgs:function(n){return n.endpointName},transformResponse:function(n,i,t){var e,o;return null!==t&&void 0!==t&&t.search?{search:!0,list:null===n||void 0===n||null===(e=n.batch)||void 0===e?void 0:e.classroom}:{page:null===t||void 0===t?void 0:t.page,list:null===n||void 0===n||null===(o=n.batch)||void 0===o?void 0:o.classroom}},merge:function(n,i){var t;return null!==i&&void 0!==i&&i.search||1===(null===i||void 0===i?void 0:i.page)?i:void(null===n||void 0===n||null===(t=n.list)||void 0===t||t.push.apply(t,(0,r.Z)(null===i||void 0===i?void 0:i.list)))},forceRefetch:function(n){return n.currentArg!==n.previousArg}})},An=o.y.injectEndpoints({endpoints:function(n){return{admissionActivateModule:s(n),admissionUpdateModule:c(n),admissionDashboardMaster:d(n),admissionCashToFinance:l(n),admissionPaymentVerifyList:p(n),admissionPaymentVerifyAction:f(n),admissionDocumentList:m(n),admissionAddDocument:v(n),admissionUpdateDocument:g(n),admissionRemoveDocument:A(n),admissionExportExcelList:h(n),admissionEditExportExcel:y(n),admissionRemoveExportExcel:R(n),admissionModeratorList:O(n),admissionAddModerator:L(n),admissionUpdateModerator:Q(n),admissionRemoveModerator:F(n),admissionPendingFeesReminderHistory:M(n),admissionPendingFeesOsStudentList:b(n),admissionPendingFeesReminder:x(n),admissionExcessFeeNotRefundedList:C(n),admissionExcessFeeRefundedList:k(n),admissionCompletedApplicationList:D(n),admissionCompleteApplication:I(n),admissionIncompleteApplication:N(n),admissionExcessFeeNotRefundedListExport:E(n),admissionExcessFeeRefundedListExport:w(n),admissionTabController:_(n),admissionExportFilterExcel:q(n),admissionOngoingApplication:z(n),admissionCreateApplication:P(n),admissionUpdateApplication:T(n),admissionRemoveApplication:H(n),admissionOneOngoingApplication:S(n),admissionOngoingApplicationRequest:B(n),admissionOngoingApplicationSelect:U(n),admissionOngoingApplicationReject:V(n),admissionOngoingApplicationExport:K(n),admissionOngoingApplicationDocument:Y(n),admissionOngoingApplicationDocumentCollect:j(n),admissionOngoingApplicationDocumentRevert:W(n),admissionOngoingApplicationDocumentEditStructure:J(n),admissionOngoingApplicationFees:X(n),admissionOngoingApplicationFeesCollect:G(n),admissionOngoingApplicationFeesRevert:$(n),admissionOngoingApplicationConfirm:nn(n),admissionOngoingApplicationAllConfirmList:tn(n),admissionOngoingApplicationConfirmReview:en(n),admissionOngoingApplicationReview:on(n),admissionOngoingApplicationAllReviewList:rn(n),admissionOngoingApplicationReviewSort:an(n),admissionOngoingApplicationReviewBatch:un(n),admissionOngoingApplicationReviewClasses:sn(n),admissionOngoingApplicationReviewAllot:cn(n),admissionOngoingApplicationReviewCancel:dn(n),admissionOngoingApplicationAllottment:ln(n),admissionOngoingApplicationAllottmentCancel:pn(n),admissionOngoingApplicationCancelled:fn(n),admissionTransferApplicatToOtherApplication:mn(n),admissionOngoingApplicationDailyCollect:vn(n),admissionPendingFees:Z(n),departmentBatchAllClass:gn(n)}}}),hn=An.useAdmissionActivateModuleMutation,yn=(An.useAdmissionUpdateModuleMutation,An.useAdmissionDashboardMasterQuery),Rn=An.useAdmissionCashToFinanceMutation,qn=An.useAdmissionPaymentVerifyListQuery,On=An.useAdmissionPaymentVerifyActionMutation,Ln=An.useAdmissionDocumentListQuery,Qn=An.useAdmissionAddDocumentMutation,Fn=An.useAdmissionUpdateDocumentMutation,Zn=An.useAdmissionRemoveDocumentMutation,Mn=An.useAdmissionExportExcelListQuery,bn=An.useAdmissionEditExportExcelMutation,xn=An.useAdmissionRemoveExportExcelMutation,Cn=An.useAdmissionModeratorListQuery,kn=An.useAdmissionAddModeratorMutation,En=An.useAdmissionUpdateModeratorMutation,wn=An.useAdmissionRemoveModeratorMutation,_n=An.useAdmissionPendingFeesReminderHistoryQuery,Dn=An.useAdmissionPendingFeesOsStudentListMutation,In=An.useAdmissionPendingFeesReminderMutation,Nn=An.useAdmissionExcessFeeNotRefundedListQuery,zn=An.useAdmissionExcessFeeRefundedListQuery,Pn=An.useAdmissionCompletedApplicationListQuery,Tn=An.useAdmissionCompleteApplicationMutation,Hn=An.useAdmissionIncompleteApplicationMutation,Sn=An.useAdmissionExcessFeeNotRefundedListExportMutation,Bn=An.useAdmissionExcessFeeRefundedListExportMutation,Un=An.useAdmissionTabControllerMutation,Vn=An.useAdmissionExportFilterExcelMutation,Kn=An.useAdmissionOngoingApplicationQuery,Yn=An.useAdmissionCreateApplicationMutation,jn=An.useAdmissionUpdateApplicationMutation,Wn=An.useAdmissionRemoveApplicationMutation,Jn=An.useAdmissionOneOngoingApplicationQuery,Xn=An.useAdmissionOngoingApplicationRequestQuery,Gn=An.useAdmissionOngoingApplicationSelectMutation,$n=An.useAdmissionOngoingApplicationRejectMutation,ni=An.useAdmissionOngoingApplicationExportMutation,ii=An.useAdmissionOngoingApplicationDocumentQuery,ti=An.useAdmissionOngoingApplicationDocumentCollectMutation,ei=An.useAdmissionOngoingApplicationDocumentRevertMutation,oi=An.useAdmissionOngoingApplicationDocumentEditStructureMutation,ri=An.useAdmissionOngoingApplicationFeesQuery,ai=An.useAdmissionOngoingApplicationFeesCollectMutation,ui=An.useAdmissionOngoingApplicationFeesRevertMutation,si=An.useAdmissionOngoingApplicationConfirmQuery,ci=An.useAdmissionOngoingApplicationAllConfirmListQuery,di=An.useAdmissionOngoingApplicationConfirmReviewMutation,li=An.useAdmissionOngoingApplicationReviewQuery,pi=An.useAdmissionOngoingApplicationAllReviewListQuery,fi=An.useAdmissionOngoingApplicationReviewSortMutation,mi=An.useAdmissionOngoingApplicationReviewBatchQuery,vi=An.useAdmissionOngoingApplicationReviewClassesQuery,gi=An.useAdmissionOngoingApplicationReviewAllotMutation,Ai=An.useAdmissionOngoingApplicationReviewCancelMutation,hi=An.useAdmissionOngoingApplicationAllottmentQuery,yi=An.useAdmissionOngoingApplicationAllottmentCancelMutation,Ri=An.useAdmissionOngoingApplicationCancelledQuery,qi=An.useAdmissionTransferApplicatToOtherApplicationMutation,Oi=An.useAdmissionOngoingApplicationDailyCollectQuery,Li=An.useAdmissionPendingFeesQuery,Qi=An.useDepartmentBatchAllClassQuery,Fi=function(){var n=hn();return[(0,e.Z)(n,1)[0]]},Zi=function(n){var i=yn(n.data,{skip:n.skip});return{admissionDashboardMaster:i.data,admissionDashboardMasterRefetch:i.refetch,admissionDashboardMasterLoading:i.isFetching}},Mi=function(){var n=Rn();return[(0,e.Z)(n,1)[0]]},bi=function(n){var i=qn(n.data,{skip:n.skip});return{admissionPaymentVerifyList:i.data,admissionPaymentVerifyListRefetch:i.refetch,admissionPaymentVerifyListLoading:i.isFetching}},xi=function(){var n=On();return[(0,e.Z)(n,1)[0]]},Ci=function(n){var i=Ln(n.data,{skip:n.skip});return{admissionDocumentList:i.data,admissionDocumentListRefetch:i.refetch,admissionDocumentListLoading:i.isFetching}},ki=function(){var n=Qn();return[(0,e.Z)(n,1)[0]]},Ei=function(){var n=Fn();return[(0,e.Z)(n,1)[0]]},wi=function(){var n=Zn();return[(0,e.Z)(n,1)[0]]},_i=function(n){var i=Mn(n.data,{skip:n.skip});return{admissionExportExcelList:i.data,admissionExportExcelListRefetch:i.refetch,admissionExportExcelListLoading:i.isFetching}},Di=function(){var n=bn();return[(0,e.Z)(n,1)[0]]},Ii=function(){var n=xn();return[(0,e.Z)(n,1)[0]]},Ni=function(n){var i=Cn(n.data,{skip:n.skip});return{admissionModeratorList:i.data,admissionModeratorListRefetch:i.refetch,admissionModeratorListLoading:i.isFetching}},zi=function(){var n=kn();return[(0,e.Z)(n,1)[0]]},Pi=function(){var n=En();return[(0,e.Z)(n,1)[0]]},Ti=function(){var n=wn();return[(0,e.Z)(n,1)[0]]},Hi=function(n){var i=_n(n.data,{skip:n.skip});return{admissionPendingFeesReminderHistory:i.data,admissionPendingFeesReminderHistoryRefetch:i.refetch,admissionPendingFeesReminderHistoryLoading:i.isFetching}},Si=function(){var n=Dn();return[(0,e.Z)(n,1)[0]]},Bi=function(){var n=In();return[(0,e.Z)(n,1)[0]]},Ui=function(n){var i=Nn(n.data,{skip:n.skip});return{admissionExcessFeeNotRefundedList:i.data,admissionExcessFeeNotRefundedListRefetch:i.refetch,admissionExcessFeeNotRefundedListLoading:i.isFetching}},Vi=function(n){var i=zn(n.data,{skip:n.skip});return{admissionExcessFeeRefundedList:i.data,admissionExcessFeeRefundedListRefetch:i.refetch,admissionExcessFeeRefundedListLoading:i.isFetching}},Ki=function(){var n=Sn();return[(0,e.Z)(n,1)[0]]},Yi=function(){var n=Bn();return[(0,e.Z)(n,1)[0]]},ji=function(n){var i=Pn(n.data,{skip:n.skip});return{admissionCompletedApplicationList:i.data,admissionCompletedApplicationListRefetch:i.refetch,admissionCompletedApplicationListLoading:i.isFetching}},Wi=function(){var n=Tn();return[(0,e.Z)(n,1)[0]]},Ji=function(){var n=Hn();return[(0,e.Z)(n,1)[0]]},Xi=function(){var n=Un();return[(0,e.Z)(n,1)[0]]},Gi=function(){var n=Vn();return[(0,e.Z)(n,1)[0]]},$i=function(n){var i=Kn(n.data,{skip:n.skip});return{admissionOngoingApplication:i.data,admissionOngoingApplicationRefetch:i.refetch,admissionOngoingApplicationLoading:i.isFetching}},nt=function(){var n=Yn();return[(0,e.Z)(n,1)[0]]},it=function(){var n=jn();return[(0,e.Z)(n,1)[0]]},tt=function(){var n=Wn();return[(0,e.Z)(n,1)[0]]},et=function(n){var i=Jn(n.appId,{skip:n.skip});return{admissionOneOngoingApplication:i.data,admissionOneOngoingApplicationRefetch:i.refetch,admissionOneOngoingApplicationLoading:i.isFetching}},ot=function(n){var i=Xn(n.data,{skip:n.skip});return{admissionOngoingApplicationRequest:i.data,admissionOngoingApplicationRequestRefetch:i.refetch,admissionOngoingApplicationRequestLoading:i.isFetching}},rt=function(){var n=Gn();return[(0,e.Z)(n,1)[0]]},at=function(){var n=$n();return[(0,e.Z)(n,1)[0]]},ut=function(){var n=ni();return[(0,e.Z)(n,1)[0]]},st=function(n){var i=ii(n.data,{skip:n.skip});return{admissionOngoingApplicationDocument:i.data,admissionOngoingApplicationDocumentRefetch:i.refetch,admissionOngoingApplicationDocumentLoading:i.isFetching}},ct=function(){var n=ti();return[(0,e.Z)(n,1)[0]]},dt=function(){var n=ei();return[(0,e.Z)(n,1)[0]]},lt=function(){var n=oi();return[(0,e.Z)(n,1)[0]]},pt=function(n){var i=ri(n.data,{skip:n.skip});return{admissionOngoingApplicationFees:i.data,admissionOngoingApplicationFeesRefetch:i.refetch,admissionOngoingApplicationFeesLoading:i.isFetching}},ft=function(){var n=ai();return[(0,e.Z)(n,1)[0]]},mt=function(){var n=ui();return[(0,e.Z)(n,1)[0]]},vt=function(n){var i=si(n.data,{skip:n.skip});return{admissionOngoingApplicationConfirm:i.data,admissionOngoingApplicationConfirmRefetch:i.refetch,admissionOngoingApplicationConfirmLoading:i.isFetching}},gt=function(n){var i=ci(n.data,{skip:n.skip});return{admissionOngoingApplicationAllConfirmList:i.data,admissionOngoingApplicationAllConfirmListRefetch:i.refetch,admissionOngoingApplicationAllConfirmListLoading:i.isFetching}},At=function(){var n=di();return[(0,e.Z)(n,1)[0]]},ht=function(n){var i=li(n.data,{skip:n.skip});return{admissionOngoingApplicationReview:i.data,admissionOngoingApplicationReviewRefetch:i.refetch,admissionOngoingApplicationReviewLoading:i.isFetching}},yt=function(n){var i=pi(n.data,{skip:n.skip});return{admissionOngoingApplicationAllReviewList:i.data,admissionOngoingApplicationAllReviewListRefetch:i.refetch,admissionOngoingApplicationAllReviewListLoading:i.isFetching}},Rt=function(){var n=fi();return[(0,e.Z)(n,1)[0]]},qt=function(n){var i=mi(n.appId,{skip:n.skip});return{admissionOngoingApplicationReviewBatch:i.data,admissionOngoingApplicationReviewBatchRefetch:i.refetch,admissionOngoingApplicationReviewBatchLoading:i.isFetching}},Ot=function(n){var i=vi(n.data,{skip:n.skip});return{admissionOngoingApplicationReviewClasses:i.data,admissionOngoingApplicationReviewClassesRefetch:i.refetch,admissionOngoingApplicationReviewClassesLoading:i.isFetching}},Lt=function(){var n=gi();return[(0,e.Z)(n,1)[0]]},Qt=function(){var n=Ai();return[(0,e.Z)(n,1)[0]]},Ft=function(n){var i=hi(n.data,{skip:n.skip});return{admissionOngoingApplicationAllottment:i.data,admissionOngoingApplicationAllottmentRefetch:i.refetch,admissionOngoingApplicationAllottmentLoading:i.isFetching}},Zt=function(){var n=yi();return[(0,e.Z)(n,1)[0]]},Mt=function(n){var i=Ri(n.data,{skip:n.skip});return{admissionOngoingApplicationCancelled:i.data,admissionOngoingApplicationCancelledRefetch:i.refetch,admissionOngoingApplicationCancelledLoading:i.isFetching}},bt=function(){var n=qi();return[(0,e.Z)(n,1)[0]]},xt=function(n){var i=Oi(n.data,{skip:n.skip});return{admissionOngoingApplicationDailyCollect:i.data,admissionOngoingApplicationDailyCollectRefetch:i.refetch,admissionOngoingApplicationDailyCollectLoading:i.isFetching}},Ct=function(n){var i=Li(n.data,{skip:n.skip});return{admissionPendingFees:i.data,admissionPendingFeesRefetch:i.refetch,admissionPendingFeesLoading:i.isFetching}},kt=function(n){var i=Qi(n.data,{skip:n.skip});return{departmentBatchAllClass:i.data,departmentBatchAllClassRefetch:i.refetch,departmentBatchAllClassLoading:i.isFetching}}},79992:function(n,i,t){"use strict";t.d(i,{ZH:function(){return o}});var e=t(89704),o=function(n){var i=e.AES.decrypt(n,"QVIPLESAASPLATFORM");return JSON.parse(i.toString(e.enc.Utf8))}},94811:function(n,i,t){"use strict";t.d(i,{Q0:function(){return o},a4:function(){return e},yY:function(){return r}});var e="POST",o="PATCH",r="DELETE"},42480:function(){}}]);
//# sourceMappingURL=9003.7b39370a.chunk.js.map