import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";
import {
  studentJoin,
  staffJoin,
  appliedStudentRole,
  appliedStaffRole,
  applicationStatus,
  insStaffCode,
  staffDesignationData,
  staffSalaryHistory,
  staffComplaintList,
  staffComplaintRequest,
  deleteStaffComplaint,
  staffLeaveRequest,
  staffTransferRequest,
  staffLeaveList,
  studentDesignationData,
  studentComplaintList,
  studentComplaintDestination,
  studentComplaintRequest,
  studentComplaintDetail,
  deleteStudentComplaint,
  reportStudentComplaint,
  studentLeaveList,
  deleteStudentLeave,
  studentLeaveRequest,
  studentTransferRequest,
  deleteStaffLeave,
  studentExamList,
  subjectList,
  assignmentList,
  assignmentCount,
  assignmentDetail,
  submitAssignment,
  studentAttendanceCalender,
} from "./joinApiBuilder";

export const joinApi = createApi({
  reducerPath: "joinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (session()) {
        headers.set("authorization", session());
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    joinAsStudent: studentJoin(builder),
    joinAsStaff: staffJoin(builder),
    studentAppliedRole: appliedStudentRole(builder),
    staffAppliedRole: appliedStaffRole(builder),
    applicationStatus: applicationStatus(builder),
    insStaffCode: insStaffCode(builder),
    staffDesignationData: staffDesignationData(builder),
    staffSalaryHistory: staffSalaryHistory(builder),
    staffComplaintList: staffComplaintList(builder),
    staffComplaintRequest: staffComplaintRequest(builder),
    deleteStaffComplaint: deleteStaffComplaint(builder),
    staffLeaveRequest: staffLeaveRequest(builder),
    staffTransferRequest: staffTransferRequest(builder),
    staffLeaveList: staffLeaveList(builder),
    studentDesignationData: studentDesignationData(builder),
    studentComplaintList: studentComplaintList(builder),
    studentComplaintDestination: studentComplaintDestination(builder),
    studentComplaintRequest: studentComplaintRequest(builder),
    studentComplaintDetail: studentComplaintDetail(builder),
    deleteStudentComplaint: deleteStudentComplaint(builder),
    reportStudentComplaint: reportStudentComplaint(builder),
    studentLeaveList: studentLeaveList(builder),
    deleteStudentLeave: deleteStudentLeave(builder),
    studentLeaveRequest: studentLeaveRequest(builder),
    studentTransferRequest: studentTransferRequest(builder),
    deleteStaffLeave: deleteStaffLeave(builder),
    studentExamList: studentExamList(builder),
    subjectList: subjectList(builder),
    assignmentList: assignmentList(builder),
    assignmentCount: assignmentCount(builder),
    assignmentDetail: assignmentDetail(builder),
    submitAssignment: submitAssignment(builder),
    studentAttendanceCalender: studentAttendanceCalender(builder),
  }),
});

export const {
  useJoinAsStudentMutation,
  useJoinAsStaffMutation,
  useStudentAppliedRoleQuery,
  useStaffAppliedRoleQuery,
  useApplicationStatusQuery,
  useInsStaffCodeQuery,
  useStaffDesignationDataQuery,
  useStaffSalaryHistoryQuery,
  useStaffComplaintListQuery,
  useStaffComplaintRequestMutation,
  useDeleteStaffComplaintMutation,
  useStaffLeaveRequestMutation,
  useStaffTransferRequestMutation,
  useStaffLeaveListQuery,
  useStudentDesignationDataQuery,
  useStudentComplaintListQuery,
  useStudentComplaintDestinationQuery,
  useStudentComplaintRequestMutation,
  useStudentComplaintDetailQuery,
  useDeleteStudentComplaintMutation,
  useReportStudentComplaintMutation,
  useStudentLeaveListQuery,
  useDeleteStudentLeaveMutation,
  useStudentLeaveRequestMutation,
  useStudentTransferRequestMutation,
  useDeleteStaffLeaveMutation,
  useStudentExamListQuery,
  useSubjectListQuery,
  useAssignmentListQuery,
  useAssignmentCountQuery,
  useAssignmentDetailQuery,
  useSubmitAssignmentMutation,
  useStudentAttendanceCalenderQuery,
} = joinApi;
