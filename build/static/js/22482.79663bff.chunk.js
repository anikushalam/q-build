"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[22482],{64540:(t,e,a)=>{a.d(e,{Lf:()=>X,bd:()=>V,QK:()=>ut,K0:()=>st,IN:()=>w,UI:()=>ot,b5:()=>N,AO:()=>z,N:()=>B,As:()=>F,Xh:()=>G,UG:()=>Y,mS:()=>K,MJ:()=>St,Do:()=>et,T4:()=>nt,Xt:()=>tt,u6:()=>at,j3:()=>$,I2:()=>lt,uI:()=>ct,Fe:()=>it,pu:()=>rt,nh:()=>mt});const n="/api/v1";var u=localStorage.getItem("user");const o=t=>t.mutation({query:t=>({url:"".concat(n,"/ins/").concat(t.uid,"/studentform/").concat(t.insId),method:"POST",body:t.studentData})}),c=t=>t.query({query:t=>"".concat(n,"/user/").concat(t||u,"/student-role")}),s=t=>t.query({query:t=>"".concat(n,"/user/studentdesignationdata/").concat(t)}),i=t=>t.query({query:t=>"".concat(n,"/compleave/student/").concat(t,"/complaint")}),r=t=>t.query({query:t=>"".concat(n,"/compleave/complaint/").concat(t)}),d=t=>t.query({query:t=>"".concat(n,"/compleave/student/").concat(t,"/compdest")}),l=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/student/").concat(t.sid,"/complaint"),method:"POST",body:t.complaintData})}),m=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/complaint/").concat(t),method:"DELETE"})}),y=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/complaint/").concat(t),method:"PUT"})}),f=t=>t.query({query:t=>"".concat(n,"/compleave/student/").concat(t)}),p=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/student/").concat(t.sid),method:"POST",body:t.LeaveData})}),q=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/leave/").concat(t),method:"DELETE"})}),S=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/student/").concat(t.sid,"/transfer"),method:"POST",body:t.transferData})}),v=t=>t.mutation({query:t=>({url:"".concat(n,"/ins/").concat(t.uid,"/staffform/").concat(t.insId),method:"POST",body:t.staffData})}),L=t=>t.query({query:t=>"".concat(n,"/user/").concat(t||u,"/staff-role")}),D=t=>t.query({query:t=>"".concat(n,"/ins/").concat(t,"/staff-code")}),g=t=>t.query({query:t=>"".concat(n,"/user/staffdesignationdata/").concat(t)}),C=t=>t.query({query:t=>"".concat(n,"/user/staff/").concat(t,"/sal/history")}),h=t=>t.query({query:t=>"".concat(n,"/compleave/staff/").concat(t,"/complaint")}),Q=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/staff/").concat(t.sid,"/complaint"),method:"POST",body:t.complaintData})}),A=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/staff/complaint/").concat(t),method:"DELETE"})}),T=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/staff/").concat(t.sid),method:"POST",body:t.LeaveData})}),b=t=>t.query({query:t=>{var e;return"".concat(n,"/compleave/staff/").concat(t.sid,"?page=").concat(t.page,"&limit=").concat(t.limit,"&category=").concat(null!==(e=null===t||void 0===t?void 0:t.category)&&void 0!==e?e:"")}}),R=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/staff/leave/").concat(t.lid),method:"DELETE"})}),E=t=>t.mutation({query:t=>({url:"".concat(n,"/compleave/staff/").concat(t.sid,"/transfer"),method:"POST",body:t.transferData})}),M=t=>t.query({query:t=>"".concat(n,"/user/").concat(t||u,"/application/status")}),P=t=>t.query({query:t=>"".concat(n,"/exam/student/").concat(t,"/allexam")}),O=t=>t.query({query:t=>"".concat(n,"/exam/student/").concat(t.sid,"/exam/").concat(t.eid)}),I=t=>t.query({query:t=>"".concat(n,"/mcq/student/").concat(t.sid,"/assignment?page=").concat(t.page,"&limit=10")}),j=t=>t.query({query:t=>"".concat(n,"/mcq/student/").concat(t,"/count/assignment")}),k=t=>t.query({query:t=>"".concat(n,"/mcq/student/assignment/").concat(t)}),x=t=>t.mutation({query:t=>({url:"".concat(n,"/mcq/student/assignment/").concat(t.aid),method:"PATCH",body:t.assignmentData})}),H=t=>t.query({query:t=>"".concat(n,"/attendance/student-calender/").concat(t.sid,"?month=").concat(t.month,"&year=").concat(t.year)});const J=a(57115).o.injectEndpoints({endpoints:t=>({joinAsStudent:o(t),joinAsStaff:v(t),studentAppliedRole:c(t),staffAppliedRole:L(t),applicationStatus:M(t),insStaffCode:D(t),staffDesignationData:g(t),staffSalaryHistory:C(t),staffComplaintList:h(t),staffComplaintRequest:Q(t),deleteStaffComplaint:A(t),staffLeaveRequest:T(t),staffTransferRequest:E(t),staffLeaveList:b(t),studentDesignationData:s(t),studentComplaintList:i(t),studentComplaintDestination:d(t),studentComplaintRequest:l(t),studentComplaintDetail:r(t),deleteStudentComplaint:m(t),reportStudentComplaint:y(t),studentLeaveList:f(t),deleteStudentLeave:q(t),studentLeaveRequest:p(t),studentTransferRequest:S(t),deleteStaffLeave:R(t),studentExamList:P(t),subjectList:O(t),assignmentList:I(t),assignmentCount:j(t),assignmentDetail:k(t),submitAssignment:x(t),studentAttendanceCalender:H(t)})}),{useJoinAsStudentMutation:U,useJoinAsStaffMutation:w,useStudentAppliedRoleQuery:K,useStaffAppliedRoleQuery:N,useApplicationStatusQuery:X,useInsStaffCodeQuery:_,useStaffDesignationDataQuery:F,useStaffSalaryHistoryQuery:G,useStaffComplaintListQuery:z,useStaffComplaintRequestMutation:B,useDeleteStaffComplaintMutation:V,useStaffLeaveRequestMutation:W,useStaffTransferRequestMutation:Y,useStaffLeaveListQuery:Z,useStudentDesignationDataQuery:$,useStudentComplaintListQuery:tt,useStudentComplaintDestinationQuery:et,useStudentComplaintRequestMutation:at,useStudentComplaintDetailQuery:nt,useDeleteStudentComplaintMutation:ut,useReportStudentComplaintMutation:ot,useStudentLeaveListQuery:ct,useDeleteStudentLeaveMutation:st,useStudentLeaveRequestMutation:it,useStudentTransferRequestMutation:rt,useDeleteStaffLeaveMutation:dt,useStudentExamListQuery:lt,useSubjectListQuery:mt,useAssignmentListQuery:yt,useAssignmentCountQuery:ft,useAssignmentDetailQuery:pt,useSubmitAssignmentMutation:qt,useStudentAttendanceCalenderQuery:St}=J}}]);
//# sourceMappingURL=22482.79663bff.chunk.js.map