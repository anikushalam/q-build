import { useGetOneStudentProfileQuery } from "../../services/qvipleAPI";
import {
  useClassProfileQuery,
  useClassProfilePhotoMutation,
  useClassCoverPhotoMutation,
  useClassInfoUpdateMutation,
  useClassAddDisplayPersonMutation,
  useClassAllStudentQuery,
  useClassAllStudentFilterQuery,
  useClassAllRequestStudentQuery,
  useClassApproveStudentMutation,
  useClassRejectStudentMutation,
  useClassStudentCurrentAttendanceQuery,
  useClassStudentAttendanceMutation,
  useClassStudentAttendanceUpdateMutation,
  useClassCodeRefreshMutation,
  useClassSettingMutation,
  useClassAllHolidayQuery,
  useClassAllChecklistQuery,
  useClassOneChecklistAssignMutation,
  useClassChecklistAllStudentQuery,
  useClassStudentGraceMutation,
  useClassReportSettingMutation,
  useClassSettingReportQuery,
  useClassStudentBehavourQuery,
  useClassCreateStudentBehavourMutation,
  useClassStudentReportCardQuery,
  useClassStudentReportCardAttendanceQuery,
  useClassStudentReportCardNecessaryQuery,
  useClassStudentReportCardFinalizeMutation,
  useClassStudentReportCardFinalizeGraceMutation,
  useClassStudentReportCardBeforeGraceMutation,
  useClassAllLeaveRequestQuery,
  useClassLeaveRequestActionMutation,
  useClassAllComplaintQuery,
  useClassComplaintSolveMutation,
  useClassAllStudentTransferQuery,
  useClassStudentTransferRejectMutation,
  useClassStudentTransferApprovedMutation,
  useClassAllFeesQuery,
  useClassOneFeesQuery,
  useClassOneFeesDetailsQuery,
  useClassOfflineExemptedFeesMutation,
  useClassOneFeesSubmitMutation,
  useClassAllSubjectCompleteQuery,
  useClassAllDepartmentWithBatchQuery,
  useClassAllBatchWithClassQuery,
  useClassPromoteStudentMutation,
  useClassCompleteMutation,
  useClassComplaintDetailQuery,
  useStudentProfilePhotoMutation,
  useStudentFormEditMutation,
  useStudentClassRemoveMutation,
  useClassUnCompleteMutation,
  useUpdateFeesByClassMutation,
  useDeleteFeesByClassMutation,
  useAllStudentFinalizeReportCardMutation,
  //
  useAddUnapprovedStudentByClassMutation,
  useClassAllUnApprovedStudentQuery,
  //
  useGetClassAllBatchQuery,
  useGetClassBatchAllStudentQuery,
  useCreateClassBatchMutation,
  useAddClassStudentToBatchMutation,
  useEditClassBatchMutation,
  useDeleteClassBatchMutation,
  useGetDayTimetableQuery,
  useAddDayTimetableMutation,
  useDeleteClassBatchStudentMutation,
  useRemoveDayTimetableMutation,
  useClassResuffleRearrangeMutation,
} from "../../services/staff_department/classApi";

export const useClassProfile = (id) => {
  const { data: classProfile, refetch: classProfileRefetch } =
    useClassProfileQuery(id);
  return { classProfile, classProfileRefetch };
};

export const useClassProfilePhoto = () => {
  const [classProfilePhoto] = useClassProfilePhotoMutation();
  return [classProfilePhoto];
};

export const useClassCoverPhoto = () => {
  const [classCoverPhoto] = useClassCoverPhotoMutation();
  return [classCoverPhoto];
};

export const useClassInfoUpdate = () => {
  const [classInfoUpdate] = useClassInfoUpdateMutation();
  return [classInfoUpdate];
};

export const useClassAddDisplayPerson = () => {
  const [classAddDisplayPerson] = useClassAddDisplayPersonMutation();
  return [classAddDisplayPerson];
};

export const useClassAllStudent = (args) => {
  const { data: classAllStudent, refetch: classAllStudentRefetch } =
    useClassAllStudentQuery(args.data, { skip: args.skip });
  return { classAllStudent, classAllStudentRefetch };
};

export const useClassAllStudentFilter = (args) => {
  const { data: classAllStudentFilter, refetch: classAllStudentFilterRefetch } =
    useClassAllStudentFilterQuery(args.data, { skip: args.skip });
  return { classAllStudentFilter, classAllStudentFilterRefetch };
};

export const useClassOneStudentProfile = (id) => {
  const { data: studentProfile, refetch: studentProfileRefetch } =
    useGetOneStudentProfileQuery(id);
  return { studentProfile, studentProfileRefetch };
};

export const useClassAllRequestStudent = (id) => {
  const {
    data: classAllRequestStudent,
    refetch: classAllRequestStudentRefetch,
  } = useClassAllRequestStudentQuery(id);
  return { classAllRequestStudent, classAllRequestStudentRefetch };
};

export const useClassApproveStudent = () => {
  const [classApproveStudent] = useClassApproveStudentMutation();
  return [classApproveStudent];
};

export const useClassRejectStudent = () => {
  const [classRejectStudent] = useClassRejectStudentMutation();
  return [classRejectStudent];
};

export const useClassStudentCurrentAttendance = (id) => {
  const {
    data: classStudentCurrentAttendance,
    refetch: classStudentCurrentAttendanceRefetch,
  } = useClassStudentCurrentAttendanceQuery(id);
  return {
    classStudentCurrentAttendance,
    classStudentCurrentAttendanceRefetch,
  };
};

export const useClassStudentAttendance = () => {
  const [classStudentAttendance] = useClassStudentAttendanceMutation();
  return [classStudentAttendance];
};

export const useClassStudentAttendanceUpdate = () => {
  const [classStudentAttendanceUpdate] =
    useClassStudentAttendanceUpdateMutation();
  return [classStudentAttendanceUpdate];
};

export const useClassCodeRefresh = () => {
  const [classCodeRefresh] = useClassCodeRefreshMutation();
  return [classCodeRefresh];
};

export const useClassSetting = () => {
  const [classSetting] = useClassSettingMutation();
  return [classSetting];
};

export const useClassAllHoliday = (id) => {
  const { data: classAllHoliday, refetch: classAllHolidayRefetch } =
    useClassAllHolidayQuery(id);
  return { classAllHoliday, classAllHolidayRefetch };
};
export const useClassAllChecklist = (args) => {
  const { data: classAllChecklist, refetch: classAllChecklistRefetch } =
    useClassAllChecklistQuery(args.data, { skip: args.skip });
  return { classAllChecklist, classAllChecklistRefetch };
};
export const useClassOneChecklistAssign = () => {
  const [classOneChecklistAssign] = useClassOneChecklistAssignMutation();
  return [classOneChecklistAssign];
};

export const useClassChecklistAllStudent = (args) => {
  const {
    data: classChecklistAllStudent,
    refetch: classChecklistAllStudentRefetch,
  } = useClassChecklistAllStudentQuery(args.data, { skip: args.skip });
  return { classChecklistAllStudent, classChecklistAllStudentRefetch };
};
export const useClassStudentGrace = () => {
  const [classStudentGrace] = useClassStudentGraceMutation();
  return [classStudentGrace];
};

export const useClassReportSetting = () => {
  const [classReportSetting] = useClassReportSettingMutation();
  return [classReportSetting];
};

export const useClassSettingReport = (id) => {
  const { data: classSettingReport, refetch: classSettingReportRefetch } =
    useClassSettingReportQuery(id.cid, { skip: id.skip });
  return { classSettingReport, classSettingReportRefetch };
};

export const useClassStudentBehavour = (id) => {
  const { data: classStudentBehavour, refetch: classStudentBehavourRefetch } =
    useClassStudentBehavourQuery(id.data, { skip: id.skip });
  return { classStudentBehavour, classStudentBehavourRefetch };
};

export const useClassCreateStudentBehavour = () => {
  const [classCreateStudentBehavour] = useClassCreateStudentBehavourMutation();
  return [classCreateStudentBehavour];
};

export const useClassStudentReportCard = (id) => {
  const {
    data: classStudentReportCard,
    refetch: classStudentReportCardRefetch,
  } = useClassStudentReportCardQuery(id.data, { skip: id.skip });
  return { classStudentReportCard, classStudentReportCardRefetch };
};

export const useClassStudentReportCardAttendance = (id) => {
  const {
    data: classStudentReportCardAttendance,
    refetch: classStudentReportCardAttendanceRefetch,
  } = useClassStudentReportCardAttendanceQuery(id.data, { skip: id.skip });
  return {
    classStudentReportCardAttendance,
    classStudentReportCardAttendanceRefetch,
  };
};

export const useClassStudentReportCardNecessary = (id) => {
  const {
    data: classStudentReportCardNecessary,
    refetch: classStudentReportCardNecessaryRefetch,
  } = useClassStudentReportCardNecessaryQuery(id.data, { skip: id.skip });
  return {
    classStudentReportCardNecessary,
    classStudentReportCardNecessaryRefetch,
  };
};

export const useClassStudentReportCardFinalize = () => {
  const [classStudentReportCardFinalize] =
    useClassStudentReportCardFinalizeMutation();
  return [classStudentReportCardFinalize];
};

export const useClassStudentReportCardBeforeGrace = () => {
  const [classStudentReportCardBeforeGrace] =
    useClassStudentReportCardBeforeGraceMutation();
  return [classStudentReportCardBeforeGrace];
};

export const useClassStudentReportCardFinalizeGrace = () => {
  const [classStudentReportCardFinalizeGrace] =
    useClassStudentReportCardFinalizeGraceMutation();
  return [classStudentReportCardFinalizeGrace];
};

export const useClassAllLeaveRequest = (id) => {
  const { data: classAllLeaveRequest, refetch: classAllLeaveRequestRefetch } =
    useClassAllLeaveRequestQuery(id.data, { skip: id.skip });
  return {
    classAllLeaveRequest,
    classAllLeaveRequestRefetch,
  };
};

export const useClassLeaveRequestAction = () => {
  const [classLeaveRequestAction] = useClassLeaveRequestActionMutation();
  return [classLeaveRequestAction];
};

export const useClassAllComplaint = (id) => {
  const { data: classAllComplaint, refetch: classAllComplaintRefetch } =
    useClassAllComplaintQuery(id.data, { skip: id.skip });
  return {
    classAllComplaint,
    classAllComplaintRefetch,
  };
};

export const useClassComplaintDetail = (id) => {
  const { data: classComplaintDetail, refetch: classComplaintDetailRefetch } =
    useClassComplaintDetailQuery(id.data, { skip: id.skip });
  return {
    classComplaintDetail,
    classComplaintDetailRefetch,
  };
};

export const useClassComplaintSolve = () => {
  const [classComplaintSolve] = useClassComplaintSolveMutation();
  return [classComplaintSolve];
};

export const useClassAllStudentTransfer = (id) => {
  const {
    data: classAllStudentTransfer,
    refetch: classAllStudentTransferRefetch,
  } = useClassAllStudentTransferQuery(id);
  return {
    classAllStudentTransfer,
    classAllStudentTransferRefetch,
  };
};

export const useClassStudentTransferReject = () => {
  const [classStudentTransferReject] = useClassStudentTransferRejectMutation();
  return [classStudentTransferReject];
};

export const useClassStudentTransferApproved = () => {
  const [classStudentTransferApproved] =
    useClassStudentTransferApprovedMutation();
  return [classStudentTransferApproved];
};

export const useClassAllFees = (id) => {
  const { data: classAllFees, refetch: classAllFeesRefetch } =
    useClassAllFeesQuery(id.data, { skip: id.skip });
  return {
    classAllFees,
    classAllFeesRefetch,
  };
};

export const useClassOneFees = (id) => {
  const { data: classOneFees, refetch: classOneFeesRefetch } =
    useClassOneFeesQuery(id.data, { skip: id.skip });
  return {
    classOneFees,
    classOneFeesRefetch,
  };
};

export const useClassOneFeesDetails = (id) => {
  const { data: classOneFeesDetails, refetch: classOneFeesDetailsRefetch } =
    useClassOneFeesDetailsQuery(id.data, { skip: id.skip });
  return {
    classOneFeesDetails,
    classOneFeesDetailsRefetch,
  };
};

export const useClassOfflineExemptedFees = () => {
  const [classOfflineExemptedFees] = useClassOfflineExemptedFeesMutation();
  return [classOfflineExemptedFees];
};

export const useClassOneFeesSubmit = () => {
  const [classOneFeesSubmit] = useClassOneFeesSubmitMutation();
  return [classOneFeesSubmit];
};

export const useClassAllSubjectComplete = (id) => {
  const {
    data: classAllSubjectComplete,
    refetch: classAllSubjectCompleteRefetch,
  } = useClassAllSubjectCompleteQuery(id.data, { skip: id.skip });
  return {
    classAllSubjectComplete,
    classAllSubjectCompleteRefetch,
  };
};
export const useClassAllDepartmentWithBatch = (id) => {
  const {
    data: classAllDepartmentWithBatch,
    refetch: classAllDepartmentWithBatchRefetch,
  } = useClassAllDepartmentWithBatchQuery(id.data, { skip: id.skip });
  return {
    classAllDepartmentWithBatch,
    classAllDepartmentWithBatchRefetch,
  };
};
export const useClassAllBatchWithClass = (id) => {
  const {
    data: classAllBatchWithClass,
    refetch: classAllBatchWithClassRefetch,
  } = useClassAllBatchWithClassQuery(id.data, { skip: id.skip });
  return {
    classAllBatchWithClass,
    classAllBatchWithClassRefetch,
  };
};
export const useClassPromoteStudent = () => {
  const [classPromoteStudent] = useClassPromoteStudentMutation();
  return [classPromoteStudent];
};
export const useClassComplete = () => {
  const [classComplete] = useClassCompleteMutation();
  return [classComplete];
};

// For student Form Photo edit

export const useStudentProfilePhoto = () => {
  const [studentProfilePhoto] = useStudentProfilePhotoMutation();
  return [studentProfilePhoto];
};

export const useStudentFormEdit = () => {
  const [studentFormEdit] = useStudentFormEditMutation();
  return [studentFormEdit];
};

export const useStudentRemoveClass = () => {
  const [studentRemoveClass] = useStudentClassRemoveMutation();
  return [studentRemoveClass];
};

export const useClassUnComplete = () => {
  const [classUnComplete] = useClassUnCompleteMutation();
  return [classUnComplete];
};

export const useUpdateFeesByClass = () => {
  const [updateFeesByClass] = useUpdateFeesByClassMutation();
  return [updateFeesByClass];
};

export const useDeleteFeesByClass = () => {
  const [deleteFeesByClass] = useDeleteFeesByClassMutation();
  return [deleteFeesByClass];
};

export const useAllStudentFinalizeReportCard = () => {
  const [allStudentFinalizeReportCard] =
    useAllStudentFinalizeReportCardMutation();
  return [allStudentFinalizeReportCard];
};

export const useAddUnapprovedStudentByClass = () => {
  const [addUnapprovedStudentByClass] =
    useAddUnapprovedStudentByClassMutation();
  return [addUnapprovedStudentByClass];
};

export const useClassAllUnApprovedStudent = (id) => {
  const {
    data: classAllUnApprovedStudent,
    refetch: classAllUnApprovedStudentRefetch,
  } = useClassAllUnApprovedStudentQuery(id.data, { skip: id.skip });
  return {
    classAllUnApprovedStudent,
    classAllUnApprovedStudentRefetch,
  };
};

///

export const useGetClassAllBatch = (id) => {
  const { data: getClassAllBatch, refetch: getClassAllBatchRefetch } =
    useGetClassAllBatchQuery(id.cid, { skip: id.skip });
  return {
    getClassAllBatch,
    getClassAllBatchRefetch,
  };
};
export const useGetClassBatchAllStudent = (id) => {
  const {
    data: getClassBatchAllStudent,
    refetch: getClassBatchAllStudentRefetch,
  } = useGetClassBatchAllStudentQuery(id.data, { skip: id.skip });
  return {
    getClassBatchAllStudent,
    getClassBatchAllStudentRefetch,
  };
};
export const useCreateClassBatch = () => {
  const [createClassBatch] = useCreateClassBatchMutation();
  return [createClassBatch];
};

export const useAddClassStudentToBatch = () => {
  const [addClassStudentToBatch] = useAddClassStudentToBatchMutation();
  return [addClassStudentToBatch];
};

export const useEditClassBatch = () => {
  const [editClassBatch] = useEditClassBatchMutation();
  return [editClassBatch];
};

export const useDeleteClassBatch = () => {
  const [deleteClassBatch] = useDeleteClassBatchMutation();
  return [deleteClassBatch];
};

export const useGetDayTimetable = (id) => {
  const { data: getDayTimetable, refetch: getDayTimetableRefetch } =
    useGetDayTimetableQuery(id.data, { skip: id.skip });
  return {
    getDayTimetable,
    getDayTimetableRefetch,
  };
};
export const useAddDayTimetable = () => {
  const [addDayTimetable] = useAddDayTimetableMutation();
  return [addDayTimetable];
};

export const useDeleteClassBatchStudent = () => {
  const [deleteClassBatchStudent] = useDeleteClassBatchStudentMutation();
  return [deleteClassBatchStudent];
};
export const useRemoveDayTimetable = () => {
  const [removeDayTimetable] = useRemoveDayTimetableMutation();
  return [removeDayTimetable];
};

export const useClassResuffleRearrange = () => {
  const [classResuffleRearrange] = useClassResuffleRearrangeMutation();
  return [classResuffleRearrange];
};
