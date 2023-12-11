import {
  useGetActivatedMemberAccountQuery,
  useDepartmentCreateFeesMutation,
  useDepartmentAddDisplayPersonMutation,
  useDepartmentAllChecklistQuery,
  useDepartmentAllClassMasterQuery,
  useDepartmentAllComplaintQuery,
  useDepartmentAllExamQuery,
  useDepartmentAllFeesQuery,
  useDepartmentAllHolidayQuery,
  useDepartmentAllStaffQuery,
  useDepartmentAllSubjectMasterQuery,
  useDepartmentBatchAllClassQuery,
  useDepartmentComplaintSolveMutation,
  useDepartmentCoverPhotoMutation,
  useDepartmentCreatedChecklistMutation,
  useDepartmentCreatedHolidayMutation,
  useDepartmentCreateExamMutation,
  useDepartmentDeleteHolidayMutation,
  useDepartmentExamDetailQuery,
  useDepartmentInfoUpdateMutation,
  useDepartmentProfilePhotoMutation,
  useDepartmentProfileQuery,
  useDepartmentUpadateChecklistMutation,
  useDepartmentComplaintDetailQuery,
  useDepartmentElectionCreateMutation,
  useDepartmentAllElectionQuery,
  useDepartmentOneElectionQuery,
  useDepartmentOneElectionAllCandidateQuery,
  useDepartmentElectionActionMutation,
  useDepartmentElectionSettingMutation,
  useDepartmentBacklogClassMasterQuery,
  useDepartmentBacklogSubjectMasterQuery,
  useDepartmentBacklogSubjectAllStudentQuery,
  useDepartmentBacklogSubjectAllStudentDropoutQuery,
  useDepartmentBacklogOneStudentClearDropoutMutation,
  useCreateParticipativeEventMutation,
  useParticipateEventListQuery,
  useParticipateEventDetailsQuery,
  useAssignChecklistToStudentMutation,
  useResultDeclarationMutation,
  useParticipateEventStudentListQuery,
  useDepartmentGetSiteInfoQuery,
  useDepartmentUpdateSiteInfoMutation,
  useGetInstituteDetailByPromoteQuery,
  useGetDepartmentDetailByPromoteQuery,
  useGetPromoteStudentByPromoteQuery,
  useGetNotPromoteStudentByPromoteQuery,
  useGetExaminationSectionDetailQuery,
  ////////
  useGetClassListExamQuery,
  useGetSeatingListExamQuery,
  useGetOneSeatingExamQuery,
  useDestroyOneSeatingExamMutation,
  useUpdateOneSeatingExamMutation,
  useAddSeatingExamMutation,
  useGetOneDepartmentBatchListQuery,
  useWithoutPaymentParticipateApplyMutation,
  useCreateAutomateSeatingArrangementMutation,
  useGetAllExamFeeStructureQuery,
  useUpdateExamFeeStructureMutation,
  useExamFeeStructureDetailQuery,
  useCreateBacklogExamMutation,
  useGetBacklogExamListQuery,
  useDepartmentAllClassMasterBacklogQuery,
  useDepartmentAllSubjectMasterBacklogQuery,
  useSendExamNotifyToSubjectQuery,
  useCreateGradeSystemMutation,
  useGetAllUniversalGradeQuery,
  useGetOneGradeDetailQuery,
  //
  useGetMentorListQuery,
  useAddMentorDepartmentMutation,
  useGetOneMentorDetailQuery,
  useGetOneMentorMenteeListQuery,
  useAddNewMenteeMutation,
  useRemoveMenteeMutation,
  useGetAllQueryListQuery,
  useGetQueryDetailQuery,
  useMarkQueryMutation,
  useGetAllMentorClassListQuery,
  useGetClassStudentListQuery,
  useAddSeatingBacklogExamMutation,
  useCreateBacklogAutomateSeatingArrangementMutation,
  useUpdateGradeSystemMutation,
  useDepartmentDeleteChecklistMutation,
  useUpdateSubjectCourseCreditMutation,
  useAddMeetingByMentorMutation,
  useGetAllMeetingByMentorQuery,
  useGetOneMeetingDetailQuery,
  useUndoPromoteStudentMutation,
  useCreateSubjectExamMutation,
  useDepartmentCopoSettingUpdateMutation,
  useGetAllCertificateAuthorityQuery,
  useCertificateAuthorityActionMutation,
  useUpdateCertificateAuthorityFundMutation,
  useUpdateMutlipleLeaveConfigMutation,
  useUpdateOneStaffLeaveConfigMutation,
  useRaiseLeaveRequestByStaffMutation,
  useGetManageCOffLeaveQuery,
  useMarkCOffLeaveMutation,
  useGetLeaveOverviewCountQuery,
  useGetLeaveOverviewIssueQuery,
  useGetAllExcelByPromoteQuery,
  useUpdateExcelByPromoteMutation,
  useDeleteExcelByPromoteMutation,
  useExportPromoteStudentExcelMutation,
} from "../../services/staff_department/departmentApi";

export const useGetActivatedMemberAccount = (args) => {
  const {
    data: getActivatedMemberAccount,
    refetch: getActivatedMemberAccountRefetch,
  } = useGetActivatedMemberAccountQuery(args.data, { skip: args.skip });
  return { getActivatedMemberAccount, getActivatedMemberAccountRefetch };
};

export const useDepartmentProfile = (args) => {
  const { data: departmentProfile, refetch: departmentProfileRefetch } =
    useDepartmentProfileQuery(args.did, {
      skip: args.skip,
    });
  return { departmentProfile, departmentProfileRefetch };
};

export const useDepartmentProfilePhoto = () => {
  const [departmentProfilePhoto] = useDepartmentProfilePhotoMutation();
  return [departmentProfilePhoto];
};

export const useDepartmentCoverPhoto = () => {
  const [departmentCoverPhoto] = useDepartmentCoverPhotoMutation();
  return [departmentCoverPhoto];
};

export const useDepartmentInfoUpdate = () => {
  const [departmentInfoUpdate] = useDepartmentInfoUpdateMutation();
  return [departmentInfoUpdate];
};

export const useDepartmentAddDisplayPerson = () => {
  const [departmentAddDisplayPerson] = useDepartmentAddDisplayPersonMutation();
  return [departmentAddDisplayPerson];
};

export const useDepartmentAllStaff = (args) => {
  const { data: departmentAllStaff, refetch: departmentAllStaffRefetch } =
    useDepartmentAllStaffQuery(args.data, { skip: args.skip });
  return { departmentAllStaff, departmentAllStaffRefetch };
};

export const useDepartmentBatchAllClass = (id) => {
  const {
    data: departmentBatchAllClass,
    refetch: departmentBatchAllClassRefetch,
  } = useDepartmentBatchAllClassQuery(id.data, { skip: id.skip });
  return { departmentBatchAllClass, departmentBatchAllClassRefetch };
};

export const useDepartmentCreatedHoliday = () => {
  const [departmentCreatedHoliday] = useDepartmentCreatedHolidayMutation();
  return [departmentCreatedHoliday];
};

export const useDepartmentAllHoliday = (id) => {
  const { data: departmentAllHoliday, refetch: departmentAllHolidayRefetch } =
    useDepartmentAllHolidayQuery(id);
  return { departmentAllHoliday, departmentAllHolidayRefetch };
};

export const useDepartmentDeleteHoliday = () => {
  const [departmentDeleteHoliday] = useDepartmentDeleteHolidayMutation();
  return [departmentDeleteHoliday];
};

export const useDepartmentCreatedChecklist = () => {
  const [departmentCreatedChecklist] = useDepartmentCreatedChecklistMutation();
  return [departmentCreatedChecklist];
};

export const useDepartmentAllChecklist = (args) => {
  const {
    data: departmentAllChecklist,
    refetch: departmentAllChecklistRefetch,
  } = useDepartmentAllChecklistQuery(args.data, { skip: args.skip });
  return { departmentAllChecklist, departmentAllChecklistRefetch };
};

export const useDepartmentUpadateChecklist = () => {
  const [departmentUpadateChecklist] = useDepartmentUpadateChecklistMutation();
  return [departmentUpadateChecklist];
};

export const useDepartmentAllClassMaster = (id) => {
  const {
    data: departmentAllClassMaster,
    refetch: departmentAllClassMasterRefetch,
  } = useDepartmentAllClassMasterQuery(id.data, { skip: id.skip });
  return { departmentAllClassMaster, departmentAllClassMasterRefetch };
};

export const useDepartmentAllSubjectMaster = (id) => {
  const {
    data: departmentAllSubjectMaster,
    refetch: departmentAllSubjectMasterRefetch,
  } = useDepartmentAllSubjectMasterQuery(id.data, { skip: id.skip });
  return { departmentAllSubjectMaster, departmentAllSubjectMasterRefetch };
};

export const useDepartmentCreateExam = () => {
  const [departmentCreateExam] = useDepartmentCreateExamMutation();
  return [departmentCreateExam];
};

export const useDepartmentAllExam = (id) => {
  const { data: departmentAllExam, refetch: departmentAllExamRefetch } =
    useDepartmentAllExamQuery(id.data, { skip: id.skip });
  return { departmentAllExam, departmentAllExamRefetch };
};

export const useDepartmentExamDetail = (args) => {
  const { data: departmentExamDetail, refetch: departmentExamDetailRefetch } =
    useDepartmentExamDetailQuery(args.eid, { skip: args.skip });
  return { departmentExamDetail, departmentExamDetailRefetch };
};

export const useDepartmentAllComplaint = (id) => {
  const {
    data: departmentAllComplaint,
    refetch: departmentAllComplaintRefetch,
  } = useDepartmentAllComplaintQuery(id.data, { skip: id.skip });
  return { departmentAllComplaint, departmentAllComplaintRefetch };
};

export const useDepartmentComplaintDetail = (id) => {
  const {
    data: departmentComplaintDetail,
    refetch: departmentComplaintDetailRefetch,
  } = useDepartmentComplaintDetailQuery(id.data, { skip: id.skip });
  return { departmentComplaintDetail, departmentComplaintDetailRefetch };
};

export const useDepartmentComplaintSolve = () => {
  const [departmentComplaintSolve] = useDepartmentComplaintSolveMutation();
  return [departmentComplaintSolve];
};

export const useDepartmentAllFees = (id) => {
  const { data: departmentAllFees, refetch: departmentAllFeesRefetch } =
    useDepartmentAllFeesQuery(id.data, { skip: id.skip });
  return { departmentAllFees, departmentAllFeesRefetch };
};

export const useDepartmentCreateFees = () => {
  const [departmentCreateFees] = useDepartmentCreateFeesMutation();
  return [departmentCreateFees];
};

export const useDepartmentElectionCreate = () => {
  const [departmentElectionCreate] = useDepartmentElectionCreateMutation();
  return [departmentElectionCreate];
};

export const useDepartmentAllElection = (args) => {
  const { data: departmentAllElection, refetch: departmentAllElectionRefetch } =
    useDepartmentAllElectionQuery(args.data, { skip: args.skip });
  return { departmentAllElection, departmentAllElectionRefetch };
};
export const useDepartmentOneElection = (args) => {
  const { data: departmentOneElection, refetch: departmentOneElectionRefetch } =
    useDepartmentOneElectionQuery(args.id, { skip: args.skip });
  return { departmentOneElection, departmentOneElectionRefetch };
};

export const useDepartmentOneElectionAllCandidate = (args) => {
  const {
    data: departmentOneElectionAllCandidate,
    refetch: departmentOneElectionAllCandidateRefetch,
  } = useDepartmentOneElectionAllCandidateQuery(args.data, { skip: args.skip });
  return {
    departmentOneElectionAllCandidate,
    departmentOneElectionAllCandidateRefetch,
  };
};

export const useDepartmentElectionAction = () => {
  const [departmentElectionAction] = useDepartmentElectionActionMutation();
  return [departmentElectionAction];
};
export const useDepartmentElectionSetting = () => {
  const [departmentElectionSetting] = useDepartmentElectionSettingMutation();
  return [departmentElectionSetting];
};

export const useDepartmentBacklogClassMaster = (args) => {
  const { data: backlogClassMaster, refetch: backlogClassMasterRefetch } =
    useDepartmentBacklogClassMasterQuery(args.data, { skip: args.skip });
  return { backlogClassMaster, backlogClassMasterRefetch };
};

export const useDepartmentBacklogSubjectMaster = (args) => {
  const { data: backlogSubjectMaster, refetch: backlogSubjectMasterRefetch } =
    useDepartmentBacklogSubjectMasterQuery(args.data, { skip: args.skip });
  return { backlogSubjectMaster, backlogSubjectMasterRefetch };
};

export const useDepartmentBacklogSubjectAllStudent = (args) => {
  const {
    data: backlogSubjectAllStudent,
    refetch: backlogSubjectAllStudentRefetch,
  } = useDepartmentBacklogSubjectAllStudentQuery(args.data, {
    skip: args.skip,
  });
  return { backlogSubjectAllStudent, backlogSubjectAllStudentRefetch };
};

export const useDepartmentBacklogSubjectAllStudentDropout = (args) => {
  const {
    data: backlogSubjectAllStudentDropout,
    refetch: backlogSubjectAllStudentDropoutRefetch,
  } = useDepartmentBacklogSubjectAllStudentDropoutQuery(args.data, {
    skip: args.skip,
  });
  return {
    backlogSubjectAllStudentDropout,
    backlogSubjectAllStudentDropoutRefetch,
  };
};

export const useDepartmentBacklogOneStudentClearDropout = () => {
  const [studentClearDropout] =
    useDepartmentBacklogOneStudentClearDropoutMutation();
  return [studentClearDropout];
};

export const useCreateParticipativeEvent = () => {
  const [createparticipativeEvent] = useCreateParticipativeEventMutation();
  return [createparticipativeEvent];
};

export const useParticipateEventList = (args) => {
  const {
    data: participativeEventList,
    refetch: participativeEventListRefetch,
  } = useParticipateEventListQuery(args.data, { skip: args?.skip });
  return { participativeEventList, participativeEventListRefetch };
};

export const useParticipateStudentEventList = (args) => {
  const {
    data: participativeEventStudentList,
    refetch: participativeEventStudentListRefetch,
  } = useParticipateEventStudentListQuery(args.data, { skip: args?.skip });
  return {
    participativeEventStudentList,
    participativeEventStudentListRefetch,
  };
};
export const useParticipateEventDetails = (args) => {
  const {
    data: participativeEventDetails,
    refetch: participativeEventDetailsRefetch,
  } = useParticipateEventDetailsQuery(
    args.pid
    // { skip: args?.skip }
  );

  return { participativeEventDetails, participativeEventDetailsRefetch };
};

export const useCheckListStudent = () => {
  const [checkListToStudent] = useAssignChecklistToStudentMutation();
  return [checkListToStudent];
};

export const useParticipateResultDeclaration = () => {
  const [participateResultDeclaration] = useResultDeclarationMutation();
  return [participateResultDeclaration];
};

export const useDepartmentGetSiteInfo = (args) => {
  const { data: departmentGetSiteInfo, refetch: departmentGetSiteInfoRefetch } =
    useDepartmentGetSiteInfoQuery(args.did, { skip: args.skip });
  return { departmentGetSiteInfo, departmentGetSiteInfoRefetch };
};

export const useDepartmentUpdateSiteInfo = () => {
  const [departmentUpdateSiteInfo] = useDepartmentUpdateSiteInfoMutation();
  return [departmentUpdateSiteInfo];
};

export const useGetInstituteDetailByPromote = (args) => {
  const {
    data: getInstituteDetailByPromote,
    refetch: getInstituteDetailByPromoteRefetch,
  } = useGetInstituteDetailByPromoteQuery(args.id, { skip: args.skip });
  return { getInstituteDetailByPromote, getInstituteDetailByPromoteRefetch };
};

export const useGetDepartmentDetailByPromote = (args) => {
  const {
    data: getDepartmentDetailByPromote,
    refetch: getDepartmentDetailByPromoteRefetch,
  } = useGetDepartmentDetailByPromoteQuery(args.data, { skip: args.skip });
  return { getDepartmentDetailByPromote, getDepartmentDetailByPromoteRefetch };
};

export const useGetPromoteStudentByPromote = (args) => {
  const {
    data: getPromoteStudentByPromote,
    refetch: getPromoteStudentByPromoteRefetch,
  } = useGetPromoteStudentByPromoteQuery(args.cid, { skip: args.skip });
  return { getPromoteStudentByPromote, getPromoteStudentByPromoteRefetch };
};

export const useGetNotPromoteStudentByPromote = (args) => {
  const {
    data: getNotPromoteStudentByPromote,
    refetch: getNotPromoteStudentByPromoteRefetch,
  } = useGetNotPromoteStudentByPromoteQuery(args.data, { skip: args.skip });
  return {
    getNotPromoteStudentByPromote,
    getNotPromoteStudentByPromoteRefetch,
  };
};

export const useGetExaminationSectionDetail = (args) => {
  const {
    data: getExaminationSectionDetail,
    refetch: getExaminationSectionDetailRefetch,
  } = useGetExaminationSectionDetailQuery(args.did, { skip: args.skip });
  return {
    getExaminationSectionDetail,
    getExaminationSectionDetailRefetch,
  };
};

/////////
export const useGetClassListExam = (args) => {
  const { data: getClassListExam, refetch: getClassListExamRefetch } =
    useGetClassListExamQuery(args.data, { skip: args.skip });
  return {
    getClassListExam,
    getClassListExamRefetch,
  };
};

export const useGetSeatingListExam = (args) => {
  const { data: getSeatingListExam, refetch: getSeatingListExamRefetch } =
    useGetSeatingListExamQuery(args.data, { skip: args.skip });
  return {
    getSeatingListExam,
    getSeatingListExamRefetch,
  };
};

export const useGetOneSeatingExam = (args) => {
  const { data: getOneSeatingExam, refetch: getOneSeatingExamRefetch } =
    useGetOneSeatingExamQuery(args.said, { skip: args.skip });
  return {
    getOneSeatingExam,
    getOneSeatingExamRefetch,
  };
};

export const useDestroyOneSeatingExam = () => {
  const [destroyOneSeatingExam] = useDestroyOneSeatingExamMutation();
  return [destroyOneSeatingExam];
};
export const useUpdateOneSeatingExam = () => {
  const [updateOneSeatingExam] = useUpdateOneSeatingExamMutation();
  return [updateOneSeatingExam];
};
export const useAddSeatingExam = () => {
  const [addSeatingExam] = useAddSeatingExamMutation();
  return [addSeatingExam];
};

export const useGetOneDepartmentBatchList = (args) => {
  const {
    data: getOneDepartmentBatchList,
    refetch: getOneDepartmentBatchListRefetch,
  } = useGetOneDepartmentBatchListQuery(args.did, { skip: args.skip });
  return {
    getOneDepartmentBatchList,
    getOneDepartmentBatchListRefetch,
  };
};
export const useWithoutPaymentParticipateApply = () => {
  const [withoutPaymentParticipateApply] =
    useWithoutPaymentParticipateApplyMutation();
  return [withoutPaymentParticipateApply];
};

export const useCreateAutomateSeatingArrangement = () => {
  const [createAutomateSeatingArrangement] =
    useCreateAutomateSeatingArrangementMutation();
  return [createAutomateSeatingArrangement];
};

export const useGetAllExamFeeStructure = (args) => {
  const {
    data: getAllExamFeeStructure,
    refetch: getAllExamFeeStructureRefetch,
  } = useGetAllExamFeeStructureQuery(args.data, { skip: args.skip });
  return {
    getAllExamFeeStructure,
    getAllExamFeeStructureRefetch,
  };
};
export const useUpdateExamFeeStructure = () => {
  const [updateExamFeeStructure] = useUpdateExamFeeStructureMutation();
  return [updateExamFeeStructure];
};

export const useExamFeeStructureDetail = (args) => {
  const {
    data: examFeeStructureDetail,
    refetch: examFeeStructureDetailRefetch,
  } = useExamFeeStructureDetailQuery(args.efid, { skip: args.skip });
  return {
    examFeeStructureDetail,
    examFeeStructureDetailRefetch,
  };
};
export const useCreateBacklogExam = () => {
  const [createBacklogExam] = useCreateBacklogExamMutation();
  return [createBacklogExam];
};
export const useGetBacklogExamList = (args) => {
  const { data: getBacklogExamList, refetch: getBacklogExamListRefetch } =
    useGetBacklogExamListQuery(args.did, { skip: args.skip });
  return {
    getBacklogExamList,
    getBacklogExamListRefetch,
  };
};

export const useDepartmentAllClassMasterBacklog = (id) => {
  const {
    data: departmentAllClassMasterBacklog,
    refetch: departmentAllClassMasterBacklogRefetch,
  } = useDepartmentAllClassMasterBacklogQuery(id.data, { skip: id.skip });
  return {
    departmentAllClassMasterBacklog,
    departmentAllClassMasterBacklogRefetch,
  };
};

export const useDepartmentAllSubjectMasterBacklog = (id) => {
  const {
    data: departmentAllSubjectMasterBacklog,
    refetch: departmentAllSubjectMasterBacklogRefetch,
  } = useDepartmentAllSubjectMasterBacklogQuery(id.data, { skip: id.skip });
  return {
    departmentAllSubjectMasterBacklog,
    departmentAllSubjectMasterBacklogRefetch,
  };
};
export const useSendExamNotifyToSubject = (id) => {
  const {
    data: sendExamNotifyToSubject,
    refetch: sendExamNotifyToSubjectRefetch,
  } = useSendExamNotifyToSubjectQuery(id.eid, { skip: id.skip });
  return {
    sendExamNotifyToSubject,
    sendExamNotifyToSubjectRefetch,
  };
};

export const useCreateGradeSystem = () => {
  const [createGradeSystem] = useCreateGradeSystemMutation();
  return [createGradeSystem];
};
export const useGetAllUniversalGrade = (id) => {
  const { data: getAllUniversalGrade, refetch: getAllUniversalGradeRefetch } =
    useGetAllUniversalGradeQuery({ skip: id.skip });
  return {
    getAllUniversalGrade,
    getAllUniversalGradeRefetch,
  };
};
export const useGetOneGradeDetail = (id) => {
  const { data: getOneGradeDetail, refetch: getOneGradeDetailRefetch } =
    useGetOneGradeDetailQuery(id.did, { skip: id.skip });
  return {
    getOneGradeDetail,
    getOneGradeDetailRefetch,
  };
};

//

export const useGetMentorList = (id) => {
  const { data: getMentorList, refetch: getMentorListRefetch } =
    useGetMentorListQuery(id.data, { skip: id.skip });
  return {
    getMentorList,
    getMentorListRefetch,
  };
};

export const useAddMentorDepartment = () => {
  const [addMentorDepartment] = useAddMentorDepartmentMutation();
  return [addMentorDepartment];
};

export const useGetOneMentorDetail = (id) => {
  const { data: getOneMentorDetail, refetch: getOneMentorDetailRefetch } =
    useGetOneMentorDetailQuery(id.mid, { skip: id.skip });
  return {
    getOneMentorDetail,
    getOneMentorDetailRefetch,
  };
};

export const useGetOneMentorMenteeList = (id) => {
  const {
    data: getOneMentorMenteeList,
    refetch: getOneMentorMenteeListRefetch,
  } = useGetOneMentorMenteeListQuery(id.data, { skip: id.skip });
  return {
    getOneMentorMenteeList,
    getOneMentorMenteeListRefetch,
  };
};

export const useAddNewMentee = () => {
  const [addNewMentee] = useAddNewMenteeMutation();
  return [addNewMentee];
};

export const useRemoveMentee = () => {
  const [removeMentee] = useRemoveMenteeMutation();
  return [removeMentee];
};

export const useGetAllQueryList = (id) => {
  const { data: getAllQueryList, refetch: getAllQueryListRefetch } =
    useGetAllQueryListQuery(id.data, { skip: id.skip });
  return {
    getAllQueryList,
    getAllQueryListRefetch,
  };
};

export const useGetQueryDetail = (id) => {
  const { data: getQueryDetail, refetch: getQueryDetailRefetch } =
    useGetQueryDetailQuery(id.qid, { skip: id.skip });
  return {
    getQueryDetail,
    getQueryDetailRefetch,
  };
};

export const useMarkQuery = () => {
  const [markQuery] = useMarkQueryMutation();
  return [markQuery];
};

export const useGetAllMentorClassList = (id) => {
  const { data: getAllMentorClassList, refetch: getAllMentorClassListRefetch } =
    useGetAllMentorClassListQuery(id.data, { skip: id.skip });
  return {
    getAllMentorClassList,
    getAllMentorClassListRefetch,
  };
};

export const useGetClassStudentList = (id) => {
  const { data: getClassStudentList, refetch: getClassStudentListRefetch } =
    useGetClassStudentListQuery(id.cid, { skip: id.skip });
  return {
    getClassStudentList,
    getClassStudentListRefetch,
  };
};

export const useAddSeatingBacklogExam = () => {
  const [addSeatingBacklogExam] = useAddSeatingBacklogExamMutation();
  return [addSeatingBacklogExam];
};
export const useCreateBacklogAutomateSeatingArrangement = () => {
  const [createBacklogAutomateSeatingArrangement] =
    useCreateBacklogAutomateSeatingArrangementMutation();
  return [createBacklogAutomateSeatingArrangement];
};

export const useUpdateGradeSystem = () => {
  const [updateGradeSystem] = useUpdateGradeSystemMutation();
  return [updateGradeSystem];
};

export const useDepartmentDeleteChecklist = () => {
  const [departmentDeleteChecklist] = useDepartmentDeleteChecklistMutation();
  return [departmentDeleteChecklist];
};
export const useUpdateSubjectCourseCredit = () => {
  const [updateSubjectCourseCredit] = useUpdateSubjectCourseCreditMutation();
  return [updateSubjectCourseCredit];
};

export const useAddMeetingByMentor = () => {
  const [addMeetingByMentor] = useAddMeetingByMentorMutation();
  return [addMeetingByMentor];
};
export const useGetAllMeetingByMentor = (args) => {
  const { data: getAllMeetingByMentor, refetch: getAllMeetingByMentorRefetch } =
    useGetAllMeetingByMentorQuery(args.data, { skip: args.skip });
  return {
    getAllMeetingByMentor,
    getAllMeetingByMentorRefetch,
  };
};
export const useGetOneMeetingDetail = (args) => {
  const { data: getOneMeetingDetail, refetch: getOneMeetingDetailRefetch } =
    useGetOneMeetingDetailQuery(args.meid, { skip: args.skip });
  return {
    getOneMeetingDetail,
    getOneMeetingDetailRefetch,
  };
};

export const useUndoPromoteStudent = () => {
  const [undoPromoteStudent] = useUndoPromoteStudentMutation();
  return [undoPromoteStudent];
};
export const useCreateSubjectExam = () => {
  const [createSubjectExam] = useCreateSubjectExamMutation();
  return [createSubjectExam];
};
export const useDepartmentCopoSettingUpdate = () => {
  const [departmentCopoSettingUpdate] =
    useDepartmentCopoSettingUpdateMutation();
  return [departmentCopoSettingUpdate];
};

export const useGetAllCertificateAuthority = (args) => {
  const {
    data: getAllCertificateAuthority,
    refetch: getAllCertificateAuthorityRefetch,
  } = useGetAllCertificateAuthorityQuery(args.data, { skip: args.skip });
  return {
    getAllCertificateAuthority,
    getAllCertificateAuthorityRefetch,
  };
};
export const useCertificateAuthorityAction = () => {
  const [certificateAuthorityAction] = useCertificateAuthorityActionMutation();
  return [certificateAuthorityAction];
};
export const useUpdateCertificateAuthorityFund = () => {
  const [updateCertificateAuthorityFund] =
    useUpdateCertificateAuthorityFundMutation();
  return [updateCertificateAuthorityFund];
};

export const useUpdateMutlipleLeaveConfig = () => {
  const [updateMutlipleLeaveConfig] = useUpdateMutlipleLeaveConfigMutation();
  return [updateMutlipleLeaveConfig];
};
export const useUpdateOneStaffLeaveConfig = () => {
  const [updateOneStaffLeaveConfig] = useUpdateOneStaffLeaveConfigMutation();
  return [updateOneStaffLeaveConfig];
};

export const useGetManageCOffLeave = (args) => {
  const { data: getManageCOffLeave, refetch: getManageCOffLeaveRefetch } =
    useGetManageCOffLeaveQuery(args.data, { skip: args.skip });
  return {
    getManageCOffLeave,
    getManageCOffLeaveRefetch,
  };
};

export const useRaiseLeaveRequestByStaff = () => {
  const [raiseLeaveRequestByStaff] = useRaiseLeaveRequestByStaffMutation();
  return [raiseLeaveRequestByStaff];
};

export const useMarkCOffLeave = () => {
  const [markCOffLeave] = useMarkCOffLeaveMutation();
  return [markCOffLeave];
};

export const useGetLeaveOverviewCount = (args) => {
  const { data: getLeaveOverviewCount, refetch: getLeaveOverviewCountRefetch } =
    useGetLeaveOverviewCountQuery(args.data, { skip: args.skip });
  return {
    getLeaveOverviewCount,
    getLeaveOverviewCountRefetch,
  };
};

export const useGetLeaveOverviewIssue = (args) => {
  const { data: getLeaveOverviewIssue, refetch: getLeaveOverviewIssueRefetch } =
    useGetLeaveOverviewIssueQuery(args.data, { skip: args.skip });
  return {
    getLeaveOverviewIssue,
    getLeaveOverviewIssueRefetch,
  };
};

export const useGetAllExcelByPromote = (args) => {
  const { data: getAllExcelByPromote, refetch: getAllExcelByPromoteRefetch } =
    useGetAllExcelByPromoteQuery(args.data, { skip: args.skip });
  return { getAllExcelByPromote, getAllExcelByPromoteRefetch };
};

export const useUpdateExcelByPromote = () => {
  const [updateExcelByPromote] = useUpdateExcelByPromoteMutation();
  return [updateExcelByPromote];
};

export const useDeleteExcelByPromote = () => {
  const [deleteExcelByPromote] = useDeleteExcelByPromoteMutation();
  return [deleteExcelByPromote];
};

export const useExportPromoteStudentExcel = () => {
  const [exportPromoteStudentExcel] = useExportPromoteStudentExcelMutation();
  return [exportPromoteStudentExcel];
};
