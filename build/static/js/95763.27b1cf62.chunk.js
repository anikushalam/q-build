"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[95763],{35517:function(r,n,e){e.d(n,{iV:function(){return W},rx:function(){return J},M0:function(){return nr},p4:function(){return $},cD:function(){return er},Df:function(){return ir},NI:function(){return X},Af:function(){return rr},kO:function(){return or},HT:function(){return tr},KM:function(){return ur},dc:function(){return lr},fx:function(){return ar},oI:function(){return yr},xB:function(){return cr},se:function(){return sr},FW:function(){return dr},tS:function(){return fr},Ew:function(){return G}});var t=e(29439),a=e(91171),o=e(93433),l=e(79992),u=e(94811),i=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/ins/".concat(r.instituteId,"/payroll/query"),method:u.a4,body:r.bodyParameter}}})},c=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/payroll/staff/".concat(r.osid,"?nsid=").concat(r.nsid),method:u.Q0}},invalidatesTags:["Payroll_Module"]})},d=function(r){return r.query({query:function(r){return"/v2/payroll/".concat(r.pid,"/dashboard?mod_id=").concat(null===r||void 0===r?void 0:r.mid)},transformResponse:function(r){var n=(0,l.ZH)(null===r||void 0===r?void 0:r.encrypt);return null===n||void 0===n?void 0:n.payroll},providesTags:["Payroll_Module"]})},y=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/payroll/employer/query"),method:u.Q0,body:r.bodyParameter}},invalidatesTags:["Payroll_Module"]})},s=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/new/salary/heads/query"),method:u.Q0,body:r.bodyParameter}}})},f=function(r){return r.query({query:function(r){return"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/all/salary/heads/query?page=").concat(r.page,"&limit=").concat(r.limit,"&search=").concat(r.search,"&type=").concat(r.type)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===r||void 0===r?void 0:r.all_heads}:{page:null===e||void 0===e?void 0:e.page,list:null===r||void 0===r?void 0:r.all_heads}},merge:function(r,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===r||void 0===r||null===(e=r.list)||void 0===e||e.push.apply(e,(0,o.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},p=function(r){return r.query({query:function(r){return"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.shid,"/salary/heads/query")},serializeQueryArgs:function(r){return r.endpointName},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},v=function(r){return r.query({query:function(r){return"/v2/payroll/staff/fund/heads/query?page=".concat(r.page,"&limit=").concat(r.limit,"&search=").concat(r.search,"&key=").concat(r.key,"&pid=").concat(r.pid,"&month=").concat(r.month,"&year=").concat(r.year,"&section=").concat(r.section)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===r||void 0===r?void 0:r.all_staff}:{page:null===e||void 0===e?void 0:e.page,list:null===r||void 0===r?void 0:r.all_staff}},merge:function(r,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===r||void 0===r||null===(e=r.list)||void 0===e||e.push.apply(e,(0,o.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},h=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/new/salary/structure/query"),method:u.Q0,body:r.bodyParameter}}})},m=function(r){return r.query({query:function(r){return"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/all/salary/structure/query?page=").concat(r.page,"&limit=").concat(r.limit,"&search=").concat(r.search,"&type=").concat(r.type)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===r||void 0===r?void 0:r.all_structure}:{page:null===e||void 0===e?void 0:e.page,list:null===r||void 0===r?void 0:r.all_structure}},merge:function(r,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===r||void 0===r||null===(e=r.list)||void 0===e||e.push.apply(e,(0,o.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},S=function(r){return r.query({query:function(r){return"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.ssid,"/salary/structure/query")},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null===r||void 0===r?void 0:r.struct},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},g=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/salary/structure/edit/query"),method:u.Q0,body:r.bodyParameter}}})},_=function(r){return r.query({query:function(r){return"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/salary/days/query?month=").concat(r.month,"&year=").concat(r.year)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null===r||void 0===r?void 0:r.salary_days},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},q=function(r){return r.query({query:function(r){return"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/attendance/sheet/query?month=").concat(r.month,"&year=").concat(r.year)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null===r||void 0===r?void 0:r.salary_days},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},A=function(r){return r.query({query:function(r){return"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/monthly/funds/query")},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null===r||void 0===r?void 0:r.monthly},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},P=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/salary/compute/finalize/query"),method:u.Q0,body:r.bodyParameter}}})},b=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/salary/compute/query?month=").concat(r.month,"&year=").concat(r.year),method:u.Q0,body:r.bodyParameter}}})},k=function(r){return r.query({query:function(r){return"/v2/payroll/".concat(null===r||void 0===r?void 0:r.pid,"/salary/slip/query?page=").concat(r.page,"&limit=").concat(r.limit,"&search=").concat(r.search)},serializeQueryArgs:function(r){return r.endpointName},transformResponse:function(r,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===r||void 0===r?void 0:r.all_structure}:{page:null===e||void 0===e?void 0:e.page,list:null===r||void 0===r?void 0:r.all_structure}},merge:function(r,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===r||void 0===r||null===(e=r.list)||void 0===e||e.push.apply(e,(0,o.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(r){return r.currentArg!==r.previousArg}})},M=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/".concat(null===r||void 0===r?void 0:r.sid,"/tds/form"),method:u.Q0,body:r.bodyParameter}}})},Q=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/one/".concat(null===r||void 0===r?void 0:r.sid,"/tds/calculate/compute/query"),method:u.Q0,body:r.bodyParameter}}})},R=function(r){return r.mutation({query:function(r){return{url:"/v2/payroll/".concat(null===r||void 0===r?void 0:r.sid,"/form/16/update"),method:u.Q0,body:r.bodyParameter}}})},O=a.a.injectEndpoints({endpoints:function(r){return{payrollActivateModule:i(r),payrollUpdateModule:c(r),payrollDashboardMaster:d(r),payrollUpdateEmployer:y(r),payrollAddSalaryHead:s(r),payrollAllSalaryHead:f(r),payrollOneSalaryHead:p(r),payrollAddSalaryStructure:h(r),payrollAllSalaryStructure:m(r),payrollOneSalaryStructure:S(r),payrollStaffEditSalaryStructure:g(r),payrollOneSalaryHeadAllStaff:v(r),payrollOneStaffSalaryDays:_(r),payrollOneStaffAttendanceSheet:q(r),payrollAlocationMonthList:A(r),payrollStaffSalaryFinalize:P(r),payrollAllSalarySlip:k(r),payrollStaffTdsProfileUpdate:M(r),payrollStaffSalaryCompute:b(r),payrollStaffTdsCompute:Q(r),payrollStaffUploadForm16:R(r)}}}),L=O.usePayrollActivateModuleMutation,Z=(O.usePayrollUpdateModuleMutation,O.usePayrollDashboardMasterQuery),H=O.usePayrollUpdateEmployerMutation,F=O.usePayrollAddSalaryHeadMutation,N=O.usePayrollAllSalaryHeadQuery,z=O.usePayrollOneSalaryHeadQuery,D=O.usePayrollAddSalaryStructureMutation,T=O.usePayrollAllSalaryStructureQuery,U=O.usePayrollOneSalaryStructureQuery,w=O.usePayrollStaffEditSalaryStructureMutation,x=O.usePayrollOneSalaryHeadAllStaffQuery,C=O.usePayrollOneStaffSalaryDaysQuery,E=O.usePayrollOneStaffAttendanceSheetQuery,j=O.usePayrollAlocationMonthListQuery,I=O.usePayrollStaffSalaryFinalizeMutation,Y=(O.usePayrollAllSalarySlipQuery,O.usePayrollStaffTdsProfileUpdateMutation),B=O.usePayrollStaffSalaryComputeMutation,V=O.usePayrollStaffTdsComputeMutation,K=O.usePayrollStaffUploadForm16Mutation,W=function(){var r=L();return[(0,t.Z)(r,1)[0]]},X=function(r){var n=Z(r.data,{skip:r.skip});return{payrollDashboardMaster:n.data,payrollDashboardMasterRefetch:n.refetch,payrollDashboardMasterLoading:n.isFetching}},G=function(){var r=H();return[(0,t.Z)(r,1)[0]]},J=function(){var r=F();return[(0,t.Z)(r,1)[0]]},$=function(r){var n=N(r.data,{skip:r.skip});return{payrollAllSalaryHead:n.data,payrollAllSalaryHeadRefetch:n.refetch,payrollAllSalaryHeadLoading:n.isFetching}},rr=function(r){var n=z(r.data,{skip:r.skip});return{payrollOneSalaryHead:n.data,payrollOneSalaryHeadRefetch:n.refetch,payrollOneSalaryHeadLoading:n.isFetching}},nr=function(){var r=D();return[(0,t.Z)(r,1)[0]]},er=function(r){var n=T(r.data,{skip:r.skip});return{payrollAllSalaryStructure:n.data,payrollAllSalaryStructureRefetch:n.refetch,payrollAllSalaryStructureLoading:n.isFetching}},tr=function(r){var n=U(r.data,{skip:r.skip});return{payrollOneSalaryStructure:n.data,payrollOneSalaryStructureRefetch:n.refetch,payrollOneSalaryStructureLoading:n.isFetching}},ar=function(){var r=w();return[(0,t.Z)(r,1)[0]]},or=function(r){var n=x(r.data,{skip:r.skip});return{payrollOneSalaryHeadAllStaff:n.data,payrollOneSalaryHeadAllStaffRefetch:n.refetch,payrollOneSalaryHeadAllStaffLoading:n.isFetching}},lr=function(r){var n=C(r.data,{skip:r.skip});return{payrollOneStaffSalaryDays:n.data,payrollOneStaffSalaryDaysRefetch:n.refetch,payrollOneStaffSalaryDaysLoading:n.isFetching}},ur=function(r){var n=E(r.data,{skip:r.skip});return{payrollOneStaffAttendanceSheet:n.data,payrollOneStaffAttendanceSheetRefetch:n.refetch,payrollOneStaffAttendanceSheetLoading:n.isFetching}},ir=function(r){var n=j(r.data,{skip:r.skip});return{payrollAlocationMonthList:n.data,payrollAlocationMonthListRefetch:n.refetch,payrollAlocationMonthListLoading:n.isFetching}},cr=function(){var r=I();return[(0,t.Z)(r,1)[0]]},dr=function(){var r=Y();return[(0,t.Z)(r,1)[0]]},yr=function(){var r=B();return[(0,t.Z)(r,1)[0]]},sr=function(){var r=V();return[(0,t.Z)(r,1)[0]]},fr=function(){var r=K();return[(0,t.Z)(r,1)[0]]}},55336:function(r,n,e){var t=e(63244),a=e(80184);n.Z=function(){return(0,a.jsx)("div",{className:t.Z.qviple_loader_backdrop,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_container,children:(0,a.jsx)("div",{className:t.Z.qviple_loader_rotation})})})}},63244:function(r,n){n.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}}}]);
//# sourceMappingURL=95763.27b1cf62.chunk.js.map