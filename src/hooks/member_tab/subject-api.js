import {
  useSubjectAllExamQuery,
  useGetAllStudentOneSubjectQuery,
  useSubjectCompleteMutation,
  useSubjectUpdateMutation,
  useSubjectSettingQuery,
  useSubjectOneExamMarksMutation,
  useSubjectOneExamStudentsQuery,
  useSubjectprofileQuery,
  useSubjectAllAssignmentQuery,
  useSubjectCreateAssignmentMutation,
  useSubjectAssignmentSubmitCountQuery,
  useSubjectAssignmentSubmitAllStudentQuery,
  useSubjectAssignmentSubmitOneStudentDetailQuery,
  useSubjectAssignmentSubmitOneStudentActionMutation,
  useMcqProfileQuery,
  useMcqProfileUpdateMutation,
  useMcqUniversalDepartmentQuery,
  useMcqUniversalClassQuery,
  useMcqUniversalSubjectQuery,
  useMcqQuestionQuery,
  useMcqOneQuestionQuery,
  useMcqCreateQuestionMutation,
  useMcqQuestionCountQuery,
  useMcqTestsetQuery,
  useMcqCreateTestsetMutation,
  useMcqUpdateTestsetMutation,
  useMcqTestsetDetailQuery,
  useMcqTestsetTakenMutation,
  useMcqTestsetTakenListQuery,
  useMcqTestsetAllotedQuery,

  //attendance
  useSubjectAllStudentQuery,
  useSubjectStudentCurrentAttendanceQuery,
  useSubjectStudentAttendanceMutation,
  useSubjectStudentAttendanceUpdateMutation,
  useBacklogExamAllStudentQuery,
  useBacklogExamMarksMutation,
  //
  useGetOneSubjectProfileQuery,
  useGetAllChapterOneSubjectQuery,
  useGetAllTopicOneChapterQuery,
  useGetDetailOneTopicQuery,
  useOneSubjectExcelUploadMutation,
  useUpdateOneTopicChapterMutation,
  useDeleteOneTopicChapterMutation,
  useUpdateOneTopicStatusMutation,
  useAddDailyUpdateWithRecordingMutation,
  useUpdateDailyUpdateWithRecordingMutation,
  useGetAllDailySubjectQuery,
  //
  useSubjectEditAcademicMutation,
  useSubjectOneAssignmentQuery,
  useSubjectUpdateAssignmentMutation,
  useSubjectDeleteAssignmentMutation,
  useGetAllCopoAttainmentQuery,
  useAddCopoAttainmentMutation,
  useUpdateCopoAttainmentMutation,
  useRemoveCopoAttainmentMutation,
  useGetCopoAttainmentTableQuery,
  useGetCopoMappingAttainmentTableQuery,
  useUpdateCopoMappingAttainmentMutation,
  useAddChapterSubjectMutation,
  useAddChapterTopicSubjectMutation,
  useSubjectExtraLectureMutation,
  useGetExtraLectureOneAttendaceQuery,
} from "../../services/staff_department/subjectApi";

export const useSubjectProfile = (id) => {
  const { data: subjectProfile, refetch: subjectProfileRefetch } =
    useSubjectprofileQuery(id);
  return { subjectProfile, subjectProfileRefetch };
};

export const useGetAllStudentOneSubject = (id) => {
  const {
    data: getAllStudentOneSubject,
    refetch: getAllStudentOneSubjectRefetch,
  } = useGetAllStudentOneSubjectQuery(id.data, { skip: id.skip });
  return { getAllStudentOneSubject, getAllStudentOneSubjectRefetch };
};

export const useSubjectAllExam = (id) => {
  const { data: subjectAllExam, refetch: subjectAllExamRefetch } =
    useSubjectAllExamQuery(id.data, { skip: id.skip });
  return { subjectAllExam, subjectAllExamRefetch };
};
export const useSubjectOneExamStudents = (id) => {
  const {
    data: subjectOneExamStudents,
    refetch: subjectOneExamStudentsRefetch,
  } = useSubjectOneExamStudentsQuery(id.data, { skip: id.skip });
  return { subjectOneExamStudents, subjectOneExamStudentsRefetch };
};

export const useSubjectSetting = (id) => {
  const { data: subjectSetting, refetch: subjectSettingRefetch } =
    useSubjectSettingQuery(id.sid, { skip: id.skip });
  return { subjectSetting, subjectSettingRefetch };
};
export const useSubjectOneExamMarks = () => {
  const [subjectOneExamMarks] = useSubjectOneExamMarksMutation();
  return [subjectOneExamMarks];
};
export const useSubjectUpdate = () => {
  const [subjectUpdate] = useSubjectUpdateMutation();
  return [subjectUpdate];
};
export const useSubjectComplete = () => {
  const [subjectComplete] = useSubjectCompleteMutation();
  return [subjectComplete];
};

export const useSubjectAllAssignment = (id) => {
  const { data: subjectAllAssignment, refetch: subjectAllAssignmentRefetch } =
    useSubjectAllAssignmentQuery(id.data, { skip: id.skip });
  return { subjectAllAssignment, subjectAllAssignmentRefetch };
};

export const useSubjectCreateAssignment = () => {
  const [subjectCreateAssignment] = useSubjectCreateAssignmentMutation();
  return [subjectCreateAssignment];
};

export const useSubjectAssignmentSubmitCount = (id) => {
  const {
    data: subjectAssignmentSubmitCount,
    refetch: subjectAssignmentSubmitCountRefetch,
  } = useSubjectAssignmentSubmitCountQuery(id.aid, { skip: id.skip });
  return {
    subjectAssignmentSubmitCount,
    subjectAssignmentSubmitCountRefetch,
  };
};
export const useSubjectAssignmentSubmitAllStudent = (id) => {
  const {
    data: subjectAssignmentSubmitAllStudent,
    refetch: subjectAssignmentSubmitAllStudentRefetch,
  } = useSubjectAssignmentSubmitAllStudentQuery(id.data, { skip: id.skip });
  return {
    subjectAssignmentSubmitAllStudent,
    subjectAssignmentSubmitAllStudentRefetch,
  };
};

export const useSubjectAssignmentSubmitOneStudentDetail = (id) => {
  const {
    data: subjectAssignmentSubmitOneStudentDetail,
    refetch: subjectAssignmentSubmitOneStudentDetailRefetch,
  } = useSubjectAssignmentSubmitOneStudentDetailQuery(id.data, {
    skip: id.skip,
  });
  return {
    subjectAssignmentSubmitOneStudentDetail,
    subjectAssignmentSubmitOneStudentDetailRefetch,
  };
};

export const useSubjectAssignmentSubmitOneStudentAction = () => {
  const [subjectAssignmentSubmitOneStudentAction] =
    useSubjectAssignmentSubmitOneStudentActionMutation();
  return [subjectAssignmentSubmitOneStudentAction];
};

export const useSubjectMcqProfile = (args) => {
  const { data: subjectMcqProfile, refetch: subjectMcqProfileRefetch } =
    useMcqProfileQuery(args.sid, { skip: args.skip });
  return { subjectMcqProfile, subjectMcqProfileRefetch };
};

export const useSubjectMcqProfileUpdate = () => {
  const [subjectMcqProfileUpdate] = useMcqProfileUpdateMutation();
  return [subjectMcqProfileUpdate];
};

export const useSubjectMcqUniversalDepartment = () => {
  const {
    data: subjectMcqUniversalDepartment,
    refetch: subjectMcqUniversalDepartmentRefetch,
  } = useMcqUniversalDepartmentQuery();

  return {
    subjectMcqUniversalDepartment,
    subjectMcqUniversalDepartmentRefetch,
  };
};

export const useSubjectMcqUniversalClass = (args) => {
  const {
    data: subjectMcqUniversalClass,
    refetch: subjectMcqUniversalClassRefetch,
  } = useMcqUniversalClassQuery(args.did, { skip: args.skip });

  return { subjectMcqUniversalClass, subjectMcqUniversalClassRefetch };
};
export const useSubjectMcqUniversalSubject = (args) => {
  const {
    data: subjectMcqUniversalSubject,
    refetch: subjectMcqUniversalSubjectRefetch,
  } = useMcqUniversalSubjectQuery(args.cid, { skip: args.skip });

  return { subjectMcqUniversalSubject, subjectMcqUniversalSubjectRefetch };
};
export const useSubjectMcqQuestion = (args) => {
  const { data: subjectMcqQuestion, refetch: subjectMcqQuestionRefetch } =
    useMcqQuestionQuery(args.data, { skip: args.skip });

  return { subjectMcqQuestion, subjectMcqQuestionRefetch };
};

export const useSubjectMcqOneQuestion = (args) => {
  const { data: subjectMcqOneQuestion, refetch: subjectMcqOneQuestionRefetch } =
    useMcqOneQuestionQuery(args.qid, { skip: args.skip });
  return { subjectMcqOneQuestion, subjectMcqOneQuestionRefetch };
};

export const useSubjectMcqCreateQuestion = () => {
  const [subjectMcqCreateQuestion] = useMcqCreateQuestionMutation();
  return [subjectMcqCreateQuestion];
};

export const useSubjectMcqQuestionCount = (args) => {
  const {
    data: subjectMcqQuestionCount,
    refetch: subjectMcqQuestionCountRefetch,
  } = useMcqQuestionCountQuery(args.data, { skip: args.skip });
  return { subjectMcqQuestionCount, subjectMcqQuestionCountRefetch };
};
export const useSubjectMcqTestset = (args) => {
  const { data: subjectMcqTestset, refetch: subjectMcqTestsetRefetch } =
    useMcqTestsetQuery(args.data, { skip: args.skip });
  return { subjectMcqTestset, subjectMcqTestsetRefetch };
};

export const useSubjectMcqCreateTestset = () => {
  const [subjectMcqCreateTestset] = useMcqCreateTestsetMutation();
  return [subjectMcqCreateTestset];
};

export const useSubjectMcqUpdateTestset = () => {
  const [subjectMcqUpdateTestset] = useMcqUpdateTestsetMutation();
  return [subjectMcqUpdateTestset];
};

export const useSubjectMcqTestsetDetail = (args) => {
  const {
    data: subjectMcqTestsetDetail,
    refetch: subjectMcqTestsetDetailRefetch,
  } = useMcqTestsetDetailQuery(args.data, { skip: args.skip });
  return { subjectMcqTestsetDetail, subjectMcqTestsetDetailRefetch };
};

export const useSubjectMcqTestsetTaken = () => {
  const [subjectMcqTestsetTaken] = useMcqTestsetTakenMutation();
  return [subjectMcqTestsetTaken];
};

export const useSubjectMcqTestsetTakenList = (args) => {
  const {
    data: subjectMcqTestsetTakenList,
    refetch: subjectMcqTestsetTakenListRefetch,
  } = useMcqTestsetTakenListQuery(args.data, { skip: args.skip });

  return { subjectMcqTestsetTakenList, subjectMcqTestsetTakenListRefetch };
};
export const useSubjectMcqTestsetAlloted = (args) => {
  const {
    data: subjectMcqTestsetAlloted,
    refetch: subjectMcqTestsetAllotedRefetch,
  } = useMcqTestsetAllotedQuery(args.data, { skip: args.skip });
  return { subjectMcqTestsetAlloted, subjectMcqTestsetAllotedRefetch };
};

//attendance

export const useSubjectAllStudent = (args) => {
  const { data: subjectAllStudent, refetch: subjectAllStudentRefetch } =
    useSubjectAllStudentQuery(args.data, { skip: args.skip });
  return { subjectAllStudent, subjectAllStudentRefetch };
};

export const useSubjectStudentCurrentAttendance = (args) => {
  const {
    data: subjectStudentCurrentAttendance,
    refetch: subjectStudentCurrentAttendanceRefetch,
  } = useSubjectStudentCurrentAttendanceQuery(args.data, { skip: args.skip });
  return {
    subjectStudentCurrentAttendance,
    subjectStudentCurrentAttendanceRefetch,
  };
};

export const useSubjectStudentAttendance = () => {
  const [subjectStudentAttendance] = useSubjectStudentAttendanceMutation();
  return [subjectStudentAttendance];
};

export const useSubjectStudentAttendanceUpdate = () => {
  const [subjectStudentAttendanceUpdate] =
    useSubjectStudentAttendanceUpdateMutation();
  return [subjectStudentAttendanceUpdate];
};

export const useBacklogExamAllStudent = (args) => {
  const { data: backlogExamAllStudent, refetch: backlogExamAllStudentRefetch } =
    useBacklogExamAllStudentQuery(args.data, { skip: args.skip });
  return {
    backlogExamAllStudent,
    backlogExamAllStudentRefetch,
  };
};
export const useBacklogExamMarks = () => {
  const [backlogExamMarks] = useBacklogExamMarksMutation();
  return [backlogExamMarks];
};

//

export const useGetOneSubjectProfile = (args) => {
  const { data: getOneSubjectProfile, refetch: getOneSubjectProfileRefetch } =
    useGetOneSubjectProfileQuery(args.sid, { skip: args.skip });
  return {
    getOneSubjectProfile,
    getOneSubjectProfileRefetch,
  };
};
export const useGetAllChapterOneSubject = (args) => {
  const {
    data: getAllChapterOneSubject,
    refetch: getAllChapterOneSubjectRefetch,
  } = useGetAllChapterOneSubjectQuery(args.data, { skip: args.skip });
  return {
    getAllChapterOneSubject,
    getAllChapterOneSubjectRefetch,
  };
};
export const useGetAllTopicOneChapter = (args) => {
  const { data: getAllTopicOneChapter, refetch: getAllTopicOneChapterRefetch } =
    useGetAllTopicOneChapterQuery(args.data, { skip: args.skip });
  return {
    getAllTopicOneChapter,
    getAllTopicOneChapterRefetch,
  };
};
export const useGetDetailOneTopic = (args) => {
  const { data: getDetailOneTopic, refetch: getDetailOneTopicRefetch } =
    useGetDetailOneTopicQuery(args.tid, { skip: args.skip });
  return {
    getDetailOneTopic,
    getDetailOneTopicRefetch,
  };
};

export const useOneSubjectExcelUpload = () => {
  const [oneSubjectExcelUpload] = useOneSubjectExcelUploadMutation();
  return [oneSubjectExcelUpload];
};
export const useUpdateOneTopicChapter = () => {
  const [updateOneTopicChapter] = useUpdateOneTopicChapterMutation();
  return [updateOneTopicChapter];
};
export const useDeleteOneTopicChapter = () => {
  const [deleteOneTopicChapter] = useDeleteOneTopicChapterMutation();
  return [deleteOneTopicChapter];
};

export const useUpdateOneTopicStatus = () => {
  const [updateOneTopicStatus] = useUpdateOneTopicStatusMutation();
  return [updateOneTopicStatus];
};

export const useAddDailyUpdateWithRecording = () => {
  const [addDailyUpdateWithRecording] =
    useAddDailyUpdateWithRecordingMutation();
  return [addDailyUpdateWithRecording];
};
export const useUpdateDailyUpdateWithRecording = () => {
  const [updateDailyUpdateWithRecording] =
    useUpdateDailyUpdateWithRecordingMutation();
  return [updateDailyUpdateWithRecording];
};

export const useGetAllDailySubject = (args) => {
  const { data: getAllDailySubject, refetch: getAllDailySubjectRefetch } =
    useGetAllDailySubjectQuery(args.data, { skip: args.skip });
  return {
    getAllDailySubject,
    getAllDailySubjectRefetch,
  };
};

export const useSubjectEditAcademic = () => {
  const [subjectEditAcademic] = useSubjectEditAcademicMutation();
  return [subjectEditAcademic];
};

export const useSubjectOneAssignment = (args) => {
  const { data: subjectOneAssignment, refetch: subjectOneAssignmentRefetch } =
    useSubjectOneAssignmentQuery(args.aid, { skip: args.skip });
  return {
    subjectOneAssignment,
    subjectOneAssignmentRefetch,
  };
};

export const useSubjectUpdateAssignment = () => {
  const [subjectUpdateAssignment] = useSubjectUpdateAssignmentMutation();
  return [subjectUpdateAssignment];
};

export const useSubjectDeleteAssignment = () => {
  const [subjectDeleteAssignment] = useSubjectDeleteAssignmentMutation();
  return [subjectDeleteAssignment];
};

export const useGetAllCopoAttainment = (args) => {
  const { data: getAllCopoAttainment, refetch: getAllCopoAttainmentRefetch } =
    useGetAllCopoAttainmentQuery(args.data, { skip: args.skip });
  return {
    getAllCopoAttainment,
    getAllCopoAttainmentRefetch,
  };
};
export const useAddCopoAttainment = () => {
  const [addCopoAttainment] = useAddCopoAttainmentMutation();
  return [addCopoAttainment];
};

export const useUpdateCopoAttainment = () => {
  const [updateCopoAttainment] = useUpdateCopoAttainmentMutation();
  return [updateCopoAttainment];
};

export const useRemoveCopoAttainment = () => {
  const [removeCopoAttainment] = useRemoveCopoAttainmentMutation();
  return [removeCopoAttainment];
};

export const useGetCopoAttainmentTable = (args) => {
  const {
    data: getCopoAttainmentTable,
    refetch: getCopoAttainmentTableRefetch,
  } = useGetCopoAttainmentTableQuery(args.data, { skip: args.skip });
  return {
    getCopoAttainmentTable,
    getCopoAttainmentTableRefetch,
  };
};
export const useGetCopoMappingAttainmentTable = (args) => {
  const {
    data: getCopoMappingAttainmentTable,
    refetch: getCopoMappingAttainmentTableRefetch,
  } = useGetCopoMappingAttainmentTableQuery(args.data, { skip: args.skip });
  return {
    getCopoMappingAttainmentTable,
    getCopoMappingAttainmentTableRefetch,
  };
};
export const useUpdateCopoMappingAttainment = () => {
  const [updateCopoMappingAttainment] =
    useUpdateCopoMappingAttainmentMutation();
  return [updateCopoMappingAttainment];
};
export const useAddChapterSubject = () => {
  const [addChapterSubject] = useAddChapterSubjectMutation();
  return [addChapterSubject];
};

export const useAddChapterTopicSubject = () => {
  const [addChapterTopicSubject] = useAddChapterTopicSubjectMutation();
  return [addChapterTopicSubject];
};
export const useSubjectExtraLecture = () => {
  const [subjectExtraLecture] = useSubjectExtraLectureMutation();
  return [subjectExtraLecture];
};

export const useGetExtraLectureOneAttendace = (args) => {
  const {
    data: getExtraLectureOneAttendace,
    refetch: getExtraLectureOneAttendaceRefetch,
  } = useGetExtraLectureOneAttendaceQuery(args.data, { skip: args.skip });
  return {
    getExtraLectureOneAttendace,
    getExtraLectureOneAttendaceRefetch,
  };
};
