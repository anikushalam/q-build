"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[19876],{82815:(t,e,i)=>{i.d(e,{xf:()=>Nt,V2:()=>Mt,hQ:()=>St,yS:()=>jt,NE:()=>xt,pO:()=>ht,DU:()=>gt,Z9:()=>pt,_z:()=>yt,Me:()=>Qt,BT:()=>Dt,bx:()=>It,kN:()=>ft,ad:()=>qt,z6:()=>_t,Ke:()=>bt,X5:()=>At,WX:()=>Lt,rT:()=>vt,Pd:()=>Tt,Fp:()=>Ct,p8:()=>mt,d7:()=>Pt,Cc:()=>Rt,AI:()=>kt});var a=i(30195),u=i(94811);const o=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/institute/type?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),n=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/manually/institute/type"),method:u.Q0,body:t.bodyParameter})}),r=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/university?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file,"&institute_type_id=").concat(null===t||void 0===t?void 0:t.institute_type_id),method:u.Q0,body:t.bodyParameter})}),s=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/manually/university"),method:u.Q0,body:t.bodyParameter})}),l=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/department/type?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file,"&university_id=").concat(null===t||void 0===t?void 0:t.university_id),method:u.Q0,body:t.bodyParameter})}),d=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(t.id,"/manually/department/type"),method:u.Q0,body:t.bodyParameter})}),c=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(null===t||void 0===t?void 0:t.did,"/stream/type?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file,"&institute_type_id=").concat(null===t||void 0===t?void 0:t.institute_type_id,"&university_id=").concat(null===t||void 0===t?void 0:t.university_id),method:u.Q0,body:t.bodyParameter})}),m=t=>t.mutation({query:t=>({url:"/institute/automate/add/".concat(null===t||void 0===t?void 0:t.did,"/manually/stream/type"),method:u.Q0,body:t.bodyParameter})}),v=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/".concat(t.stid,"/po?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),p=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/".concat(t.stid,"/class/master?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),y=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/".concat(t.stid,"/manually/class/master"),method:u.Q0,body:t.bodyParameter})}),h=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/".concat(t.stid,"/subject/master?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file,"&clsId=").concat(null===t||void 0===t?void 0:t.clsId),method:u.Q0,body:t.bodyParameter})}),g=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/".concat(t.stid,"/manually/subject/master"),method:u.Q0,body:t.bodyParameter})}),_=t=>t.mutation({query:t=>({url:"/institute/automate/add/stream/co/subject/master/".concat(t.asmid,"?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),I=t=>t.mutation({query:t=>({url:"/institute/automate/add/subject/".concat(t.asmid,"/teaching/plan?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),f=t=>t.mutation({query:t=>({url:"/institute/automate/create/".concat(t.id,"/department"),method:u.a4,body:t.bodyParameter})}),b=t=>t.mutation({query:t=>({url:"/institute/automate/create/".concat(t.did,"/class"),method:u.a4,body:t.bodyParameter})}),q=t=>t.mutation({query:t=>({url:"/institute/automate/department/".concat(t.did,"/holiday/excel/query?excel_file=").concat(null===t||void 0===t?void 0:t.excel_file),method:u.Q0,body:t.bodyParameter})}),A=t=>t.mutation({query:t=>({url:"/institute/automate/department/".concat(t.did,"/academic/start"),method:u.Q0,body:t.bodyParameter})}),L=t=>t.query({query:t=>"/institute/automate/all/type/university/stream/query",serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:t=>null===t||void 0===t?void 0:t.config,forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),S=t=>t.query({query:t=>"/institute/automate/all/stream/query?page=".concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.streams}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.streams},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),M=t=>t.query({query:t=>"/institute/automate/all/stream/".concat(null===t||void 0===t?void 0:t.stid,"/subject/master/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.subjects}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.subjects},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),j=t=>t.query({query:t=>"/institute/automate/all/subject/".concat(null===t||void 0===t?void 0:t.smid,"/teaching/chapter/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search,"&flow=").concat(t.flow),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.teaching_plan}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.teaching_plan},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),Q=t=>t.query({query:t=>"/institute/automate/all/subject/chapter/".concat(null===t||void 0===t?void 0:t.cid,"/topic/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.teaching_plan}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.teaching_plan},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),T=t=>t.query({query:t=>"/institute/automate/all/type/institute/".concat(null===t||void 0===t?void 0:t.id,"/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.institute_type}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.institute_type},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),C=t=>t.query({query:t=>"/institute/automate/all/type/university/".concat(null===t||void 0===t?void 0:t.id,"/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.university}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.university},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),P=t=>t.query({query:t=>"/institute/automate/all/type/department/".concat(null===t||void 0===t?void 0:t.id,"/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.department_type}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.department_type},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),R=t=>t.query({query:t=>"/institute/automate/all/type/stream/".concat(null===t||void 0===t?void 0:t.did,"/query?institute_type_id=").concat(t.institute_type_id,"&university_id=").concat(t.university_id,"&page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.streams}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.streams},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),x=t=>t.query({query:t=>"/institute/automate/all/type/stream/".concat(null===t||void 0===t?void 0:t.stid,"/classmaster/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.cls_master}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.cls_master},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),k=t=>t.query({query:t=>"/institute/automate/all/type/classmaster/".concat(null===t||void 0===t?void 0:t.cid,"/subject/query?page=").concat(t.page,"&limit=").concat(t.limit,"&search=").concat(t.search),serializeQueryArgs:t=>{let{endpointName:e}=t;return e},transformResponse:(t,e,i)=>null!==i&&void 0!==i&&i.search?{search:!0,list:null===t||void 0===t?void 0:t.subject_master}:{page:null===i||void 0===i?void 0:i.page,list:null===t||void 0===t?void 0:t.subject_master},merge:(t,e)=>{var i;return null!==e&&void 0!==e&&e.search||1===(null===e||void 0===e?void 0:e.page)?e:void(null===t||void 0===t||null===(i=t.list)||void 0===i||i.push(...null===e||void 0===e?void 0:e.list))},forceRefetch(t){let{currentArg:e,previousArg:i}=t;return e!==i}}),D=a.A.injectEndpoints({endpoints:t=>({automateInstituteType:o(t),automateInstituteManuallyType:n(t),automateInstituteUniversity:r(t),automateInstituteManuallyUniversity:s(t),automateInstituteDepartmentType:l(t),automateInstituteManuallyDepartmentType:d(t),automateInstituteStreamType:c(t),automateInstituteManuallyStreamType:m(t),automateInstituteStreamPo:v(t),automateInstituteStreamClassMaster:p(t),automateInstituteStreamManuallyClassMaster:y(t),automateInstituteStreamSubjectMaster:h(t),automateInstituteStreamManuallySubjectMaster:g(t),automateInstituteStreamSubjectMasterCo:_(t),automateInstituteStreamSubjectMasterTeachingPlan:I(t),automateInstituteCreateDepartment:f(t),automateInstituteCreateClass:b(t),automateInstituteDepartmentHolidayExcel:q(t),automateInstituteDepartmentSetting:A(t),automateInstitutePlateformList:L(t),automateInstitutePlateformStreamList:S(t),automateInstitutePlateformStreamSubjectMasterList:M(t),automateInstituteSubjectChapterList:j(t),automateInstituteSubjectChapterTopicList:Q(t),automateInstituteTypeList:T(t),automateInstituteUniveristyTypeList:C(t),automateInstituteDepartmentTypeList:P(t),automateInstituteUniversityDepartmentStreamList:R(t),automateInstituteStreamClassList:x(t),automateInstituteClassSubjectList:k(t)})}),{useAutomateInstituteTypeMutation:N,useAutomateInstituteUniversityMutation:U,useAutomateInstituteDepartmentTypeMutation:z,useAutomateInstituteStreamTypeMutation:F,useAutomateInstituteManuallyTypeMutation:Z,useAutomateInstituteManuallyUniversityMutation:w,useAutomateInstituteManuallyDepartmentTypeMutation:E,useAutomateInstituteManuallyStreamTypeMutation:X,useAutomateInstituteStreamPoMutation:Y,useAutomateInstituteStreamClassMasterMutation:B,useAutomateInstituteStreamManuallyClassMasterMutation:H,useAutomateInstituteStreamSubjectMasterMutation:V,useAutomateInstituteStreamManuallySubjectMasterMutation:K,useAutomateInstituteStreamSubjectMasterCoMutation:O,useAutomateInstituteStreamSubjectMasterTeachingPlanMutation:W,useAutomateInstituteCreateDepartmentMutation:G,useAutomateInstituteCreateClassMutation:J,useAutomateInstituteDepartmentHolidayExcelMutation:$,useAutomateInstituteDepartmentSettingMutation:tt,useAutomateInstitutePlateformListQuery:et,useAutomateInstitutePlateformStreamListQuery:it,useAutomateInstitutePlateformStreamSubjectMasterListQuery:at,useAutomateInstituteSubjectChapterListQuery:ut,useAutomateInstituteSubjectChapterTopicListQuery:ot,useAutomateInstituteTypeListQuery:nt,useAutomateInstituteUniveristyTypeListQuery:rt,useAutomateInstituteDepartmentTypeListQuery:st,useAutomateInstituteUniversityDepartmentStreamListQuery:lt,useAutomateInstituteStreamClassListQuery:dt,useAutomateInstituteClassSubjectListQuery:ct}=D,mt=()=>{const[t]=N();return[t]},vt=()=>{const[t]=F();return[t]},pt=()=>{const[t]=Z();return[t]},yt=()=>{const[t]=w();return[t]},ht=()=>{const[t]=E();return[t]},gt=()=>{const[t]=X();return[t]},_t=()=>{const[t]=Y();return[t]},It=()=>{const[t]=B();return[t]},ft=()=>{const[t]=H();return[t]},bt=()=>{const[t]=V();return[t]},qt=()=>{const[t]=K();return[t]},At=()=>{const[t]=O();return[t]},Lt=()=>{const[t]=W();return[t]},St=()=>{const[t]=G();return[t]},Mt=()=>{const[t]=J();return[t]},jt=()=>{const[t]=$();return[t]},Qt=t=>{const{data:e,refetch:i,isFetching:a}=et(t);return{automateInstitutePlateformList:e,automateInstitutePlateformListRefetch:i,automateInstitutePlateformListLoading:a}},Tt=t=>{const{data:e,refetch:i,isFetching:a}=ut(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteSubjectChapterList:e,automateInstituteSubjectChapterListRefetch:i,automateInstituteSubjectChapterListLoading:a}},Ct=t=>{const{data:e,refetch:i,isFetching:a}=ot(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteSubjectChapterTopicList:e,automateInstituteSubjectChapterTopicListRefetch:i,automateInstituteSubjectChapterTopicListLoading:a}},Pt=t=>{const{data:e,refetch:i,isFetching:a}=nt(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteTypeList:e,automateInstituteTypeListRefetch:i,automateInstituteTypeListLoading:a}},Rt=t=>{const{data:e,refetch:i,isFetching:a}=rt(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteUniveristyTypeList:e,automateInstituteUniveristyTypeListRefetch:i,automateInstituteUniveristyTypeListLoading:a}},xt=t=>{const{data:e,refetch:i,isFetching:a}=st(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteDepartmentTypeList:e,automateInstituteDepartmentTypeListRefetch:i,automateInstituteDepartmentTypeListLoading:a}},kt=t=>{const{data:e,refetch:i,isFetching:a}=lt(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteUniversityDepartmentStreamList:e,automateInstituteUniversityDepartmentStreamListRefetch:i,automateInstituteUniversityDepartmentStreamListLoading:a}},Dt=t=>{const{data:e,refetch:i,isFetching:a}=dt(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteStreamClassList:e,automateInstituteStreamClassListRefetch:i,automateInstituteStreamClassListLoading:a}},Nt=t=>{const{data:e,refetch:i,isFetching:a}=ct(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{automateInstituteClassSubjectList:e,automateInstituteClassSubjectListRefetch:i,automateInstituteClassSubjectListLoading:a}}},55336:(t,e,i)=>{i.d(e,{Z:()=>o});var a=i(63244),u=i(80184);const o=()=>(0,u.jsx)("div",{className:a.Z.qviple_loader_backdrop,children:(0,u.jsx)("div",{className:a.Z.qviple_loader_container,children:(0,u.jsx)("div",{className:a.Z.qviple_loader_rotation})})})},63244:(t,e,i)=>{i.d(e,{Z:()=>a});const a={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}}}]);
//# sourceMappingURL=19876.e939bfaf.chunk.js.map