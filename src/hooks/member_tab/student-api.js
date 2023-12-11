import {
  useMcqAllTestsetQuery,
  useMcqTestsetPreviewDetailQuery,
  useMcqTestsetExamDetailQuery,
  useMcqQuestionGivenMutation,
  useMcqTestsetExamSubmitMutation,
  useMcqTestsetExamResultQuery,
  useGetStudentDailyUpdateQuery,
  useTimeTableScheduleQuery,
  useMentorListQuery,
  useAllElectionListQuery,
  useOneElectionDetailQuery,
  useAllBacklogListQuery,
  useStudentSubjectAttendanceQuery,
  useGetSubjectListByStudentQuery,
  useGetAssignmentByStudentQuery,
  useGetAssignmentCountByStudentQuery,
  useGetOneAssignmentDetailByStudentQuery,
  useAssignmentActionByStudentMutation,
  useGetClassmatesByStudentQuery,
  useGetAllMentorQueryStudentQuery,
  useAksStudentMentorQueryMutation,
  useMentorQueryReportStudentMutation,
  useGetAllCertificateStudentQuery,
  useRaiseIssueCertificateStudentMutation,
} from "../../services/student_members_ab/studentMembersTabApi";

export const useStudentMcqAllTestset = (args) => {
  const { data: studentMcqAllTestset, refetch: studentMcqAllTestsetRefetch } =
    useMcqAllTestsetQuery(args.data, { skip: args.skip });

  return { studentMcqAllTestset, studentMcqAllTestsetRefetch };
};
export const useStudentMcqTestsetPreviewDetail = (args) => {
  const {
    data: studentMcqTestsetPreviewDetail,
    refetch: studentMcqTestsetPreviewDetailRefetch,
  } = useMcqTestsetPreviewDetailQuery(args.tsid, { skip: args.skip });

  return {
    studentMcqTestsetPreviewDetail,
    studentMcqTestsetPreviewDetailRefetch,
  };
};

export const useStudentMcqTestsetExamDetail = (args) => {
  const {
    data: studentMcqTestsetExamDetail,
    refetch: studentMcqTestsetExamDetailRefetch,
  } = useMcqTestsetExamDetailQuery(args.tsid, { skip: args.skip });
  return { studentMcqTestsetExamDetail, studentMcqTestsetExamDetailRefetch };
};

export const useStudentMcqQuestionGiven = () => {
  const [studentMcqQuestionGiven] = useMcqQuestionGivenMutation();
  return [studentMcqQuestionGiven];
};

export const useStudentMcqTestsetExamSubmit = () => {
  const [studentMcqTestsetExamSubmit] = useMcqTestsetExamSubmitMutation();
  return [studentMcqTestsetExamSubmit];
};

export const useStudentMcqTestsetExamResult = (args) => {
  const {
    data: studentMcqTestsetExamResult,
    refetch: studentMcqTestsetExamResultRefetch,
  } = useMcqTestsetExamResultQuery(args.tsid, { skip: args.skip });
  return { studentMcqTestsetExamResult, studentMcqTestsetExamResultRefetch };
};

export const useGetStudentDailyUpdate = (args) => {
  const { data: getStudentDailyUpdate, refetch: getStudentDailyUpdateRefetch } =
    useGetStudentDailyUpdateQuery(args.data, { skip: args.skip });
  return { getStudentDailyUpdate, getStudentDailyUpdateRefetch };
};

export const useStudentTimeTableList = (args) => {
  const { data: studentTimeTable, refetch: studentTimeTableRefetch } =
    useTimeTableScheduleQuery(args.data, { skip: args.skip });
  return { studentTimeTable, studentTimeTableRefetch };
};

export const useGetMentorsList = (args) => {
  const { data: getMentorList, refetch: getMentorListRefetch } =
    useMentorListQuery(args.data, { skip: args.skip });
  return { getMentorList, getMentorListRefetch };
};

export const useAllElectionList = (args) => {
  const { data: allElectionList, refetch: allElectionListRefetch } =
    useAllElectionListQuery(args.data, { skip: args.skip });
  return { allElectionList, allElectionListRefetch };
};
export const useOneElectionDetail = (args) => {
  const { data: oneElectionDetail, refetch: oneElectionDetailRefetch } =
    useOneElectionDetailQuery(args.data, { skip: args.skip });
  return { oneElectionDetail, oneElectionDetailRefetch };
};

export const useAllBacklogList = (args) => {
  const { data: allBacklogList, refetch: allBacklogListRefetch } =
    useAllBacklogListQuery(args.data, { skip: args.skip });
  return { allBacklogList, allBacklogListRefetch };
};
export const useStudentSubjectAttendance = (args) => {
  const {
    data: studentSubjectAttendance,
    refetch: studentSubjectAttendanceRefetch,
  } = useStudentSubjectAttendanceQuery(args.data, { skip: args.skip });
  return { studentSubjectAttendance, studentSubjectAttendanceRefetch };
};

export const useGetSubjectListByStudent = (args) => {
  const {
    data: getSubjectListByStudent,
    refetch: getSubjectListByStudentRefetch,
  } = useGetSubjectListByStudentQuery(args.sid, { skip: args.skip });
  return { getSubjectListByStudent, getSubjectListByStudentRefetch };
};

// all assignment of student
export const useGetAssignmentByStudent = (args) => {
  const {
    data: getAssignmentByStudent,
    refetch: getAssignmentByStudentRefetch,
  } = useGetAssignmentByStudentQuery(args.data, { skip: args.skip });
  return { getAssignmentByStudent, getAssignmentByStudentRefetch };
};
export const useGetAssignmentCountByStudent = (args) => {
  const {
    data: getAssignmentCountByStudent,
    refetch: getAssignmentCountByStudentRefetch,
  } = useGetAssignmentCountByStudentQuery(args.sid, { skip: args.skip });
  return { getAssignmentCountByStudent, getAssignmentCountByStudentRefetch };
};
export const useGetOneAssignmentDetailByStudent = (args) => {
  const {
    data: getOneAssignmentDetailByStudent,
    refetch: getOneAssignmentDetailByStudentRefetch,
  } = useGetOneAssignmentDetailByStudentQuery(args.aid, { skip: args.skip });
  return {
    getOneAssignmentDetailByStudent,
    getOneAssignmentDetailByStudentRefetch,
  };
};

export const useAssignmentActionByStudent = () => {
  const [assignmentActionByStudent] = useAssignmentActionByStudentMutation();
  return [assignmentActionByStudent];
};

export const useGetClassmatesByStudent = (args) => {
  const {
    data: getClassmatesByStudent,
    refetch: getClassmatesByStudentRefetch,
  } = useGetClassmatesByStudentQuery(args.data, { skip: args.skip });
  return {
    getClassmatesByStudent,
    getClassmatesByStudentRefetch,
  };
};

export const useGetAllMentorQueryStudent = (args) => {
  const {
    data: getAllMentorQueryStudent,
    refetch: getAllMentorQueryStudentRefetch,
  } = useGetAllMentorQueryStudentQuery(args.sid, { skip: args.skip });
  return {
    getAllMentorQueryStudent,
    getAllMentorQueryStudentRefetch,
  };
};

export const useAksStudentMentorQuery = () => {
  const [aksStudentMentorQuery] = useAksStudentMentorQueryMutation();
  return [aksStudentMentorQuery];
};

export const useMentorQueryReportStudent = () => {
  const [mentorQueryReportStudent] = useMentorQueryReportStudentMutation();
  return [mentorQueryReportStudent];
};

export const useGetAllCertificateStudent = (args) => {
  const {
    data: getAllCertificateStudent,
    refetch: getAllCertificateStudentRefetch,
  } = useGetAllCertificateStudentQuery(args.data, { skip: args.skip });
  return {
    getAllCertificateStudent,
    getAllCertificateStudentRefetch,
  };
};

export const useRaiseIssueCertificateStudent = () => {
  const [raiseIssueCertificateStudent] =
    useRaiseIssueCertificateStudentMutation();
  return [raiseIssueCertificateStudent];
};
