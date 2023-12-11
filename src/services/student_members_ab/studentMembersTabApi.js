import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  baseUrl,
  // deleteMethod,
  patchMethod,
  // postMethod,
  session,
} from "../BaseUrl";
import {
  studentPreviousReportList,
  studentPreviousReportCard,
  mcqAllTestsetFunction,
  mcqTestsetPreviewDetailFunction,
  mcqTestsetExamDetailFunction,
  mcqQuestionGivenFunction,
  mcqTestsetExamSubmitFunction,
  mcqTestsetExamResultFunction,
  timeTableSchedule,
  mentorList,
  allElectionListFunction,
  oneElectionDetailFunction,
  allBacklogListFunction,
  studentSubjectAttendanceFunction,
  getSubjectListByStudentFunction,
  getAssignmentByStudentFunction,
  getAssignmentCountByStudentFunction,
  getOneAssignmentDetailByStudentFunction,
  assignmentActionByStudentFunction,
  getStudentDailyUpdateFunction,
  getClassmatesByStudentFunction,
  getAllMentorQueryStudentFunction,
  aksStudentMentorQueryFunction,
  mentorQueryReportStudentFunction,
  getAllCertificateStudentFunction,
  raiseIssueCertificateStudentFunction,
} from "./studentMembersTabApiBuilder";

export const studentMembersTabApi = createApi({
  reducerPath: "studentMembersTabApi",
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
    studentPreviousReportList: studentPreviousReportList(builder),
    studentPreviousReportCard: studentPreviousReportCard(builder),
    mcqAllTestset: mcqAllTestsetFunction(builder),
    mcqTestsetPreviewDetail: mcqTestsetPreviewDetailFunction(builder),
    mcqTestsetExamDetail: mcqTestsetExamDetailFunction(builder),
    mcqQuestionGiven: mcqQuestionGivenFunction(builder, patchMethod),
    mcqTestsetExamSubmit: mcqTestsetExamSubmitFunction(builder, patchMethod),
    mcqTestsetExamResult: mcqTestsetExamResultFunction(builder),
    timeTableSchedule: timeTableSchedule(builder),
    mentorList: mentorList(builder),
    allElectionList: allElectionListFunction(builder),
    oneElectionDetail: oneElectionDetailFunction(builder),
    allBacklogList: allBacklogListFunction(builder),
    studentSubjectAttendance: studentSubjectAttendanceFunction(builder),
    getSubjectListByStudent: getSubjectListByStudentFunction(builder),
    getAssignmentByStudent: getAssignmentByStudentFunction(builder),
    getAssignmentCountByStudent: getAssignmentCountByStudentFunction(builder),
    getOneAssignmentDetailByStudent:
      getOneAssignmentDetailByStudentFunction(builder),
    assignmentActionByStudent: assignmentActionByStudentFunction(builder),
    getStudentDailyUpdate: getStudentDailyUpdateFunction(builder),
    getClassmatesByStudent: getClassmatesByStudentFunction(builder),
    getAllMentorQueryStudent: getAllMentorQueryStudentFunction(builder),
    aksStudentMentorQuery: aksStudentMentorQueryFunction(builder, patchMethod),
    mentorQueryReportStudent: mentorQueryReportStudentFunction(
      builder,
      patchMethod
    ),
    getAllCertificateStudent: getAllCertificateStudentFunction(
      builder,
      patchMethod
    ),

    raiseIssueCertificateStudent: raiseIssueCertificateStudentFunction(
      builder,
      patchMethod
    ),
  }),
});

export const {
  useStudentPreviousReportCardQuery,
  useStudentPreviousReportListQuery,
  useMcqAllTestsetQuery,
  useMcqTestsetPreviewDetailQuery,
  useMcqTestsetExamDetailQuery,
  useMcqQuestionGivenMutation,
  useMcqTestsetExamSubmitMutation,
  useMcqTestsetExamResultQuery,
  useTimeTableScheduleQuery,
  useMentorListQuery,
  useAllElectionListQuery,
  useOneElectionDetailQuery,
  useAllBacklogListQuery,
  useStudentSubjectAttendanceQuery,
  useGetSubjectListByStudentQuery,
  //
  useGetAssignmentByStudentQuery,
  useGetAssignmentCountByStudentQuery,
  useGetOneAssignmentDetailByStudentQuery,
  useAssignmentActionByStudentMutation,

  //
  useGetStudentDailyUpdateQuery,
  useGetClassmatesByStudentQuery,
  useGetAllMentorQueryStudentQuery,
  useAksStudentMentorQueryMutation,
  useMentorQueryReportStudentMutation,
  useGetAllCertificateStudentQuery,
  useRaiseIssueCertificateStudentMutation,
} = studentMembersTabApi;
