import {
  useInstituteStatsCountQuery,
  useApproveStaffArrayQuery,
  usePendingStaffArrayQuery,
  useStaffApproveMutation,
  useStaffRejectMutation,
  useOneStaffProfileQuery,
  useSearchStaffQuery,
  useRandomCodeArrayMutation,
  useStaffCodeQuery,
  useStaffLeaveListQuery,
  useStaffLeaveActionMutation,
  useStaffTransferListQuery,
  useStaffTransferApproveMutation,
  useStaffTransferRejectMutation,
  useStaffComplaintListQuery,
  useStaffComplaintDetailQuery,
  useStaffComplaintActionMutation,
  useApproveStudentArrayQuery,
  useOneStudentProfileQuery,
  useSearchStudentQuery,
  useStudentComplaintListQuery,
  useStudentComplaintDetailQuery,
  useStudentComplaintActionMutation,
  useStudentBonafideMutation,
  useStudentLeavingMutation,
  useGetEditableQuery,
  useEditEditableMutation,
  useAddStaffToInstituteMutation,
  useTransferListQuery,
  useApproveStaffReplaceMutation,
  useRejectStaffReplaceMutation,
  useGetFeeReceiptQuery,
  useDownloadOriginalCopyMutation,
  useAddStaffExcelByInstituteMutation,
  useGetInstituteAllStudentFilterMutation,
  useSendMessageToSelectStudentMutation,
  //
  useGetStudentSectionEditStudentFormQuery,
  useUpdateStudentSectionEditStudentFormMutation,
  useGetStudentMessageHistoryGenerateQuery,
  useExcelDeprtmentMutation,
  useExcelClassMasterMutation,
  useExcelSubjectMasterMutation,
  useExcelClassMutation,
  useExcelSubjectMutation,
  useGetStaffDesignationCheckValueQuery,
  useSendMessageToOneStudentMutation,
} from "../../services/InstituteStaffStudent/instituteStaffStudentApiDynamic";

export const useInstituteStatsCount = (args) => {
  const { data: instituteStatsCount, refetch: instituteStatsCountRefetch } =
    useInstituteStatsCountQuery(args.id, { skip: args.skip });
  return { instituteStatsCount, instituteStatsCountRefetch };
};
export const useApproveStaffList = (args) => {
  const { data: approveStaffList, refetch: approveStaffListRefetch } =
    useApproveStaffArrayQuery(args.data, { skip: args.skip });
  return { approveStaffList, approveStaffListRefetch };
};
export const usePendingStaffList = (args) => {
  const { data: pendingStaffList, refetch: pendingStaffListRefetch } =
    usePendingStaffArrayQuery(args.id, { skip: args.skip });
  return { pendingStaffList, pendingStaffListRefetch };
};
export const useStaffApprove = () => {
  const [staffApprove] = useStaffApproveMutation();
  return [staffApprove];
};
export const useStaffReject = () => {
  const [staffReject] = useStaffRejectMutation();
  return [staffReject];
};

export const useOneStaffProfile = (args) => {
  const { data: oneStaffProfile, refetch: oneStaffProfileRefetch } =
    useOneStaffProfileQuery(args.sid, { skip: args.skip });
  return { oneStaffProfile, oneStaffProfileRefetch };
};

export const useSearchStaff = (args) => {
  const { data: searchStaff, refetch: searchStaffRefetch } =
    useSearchStaffQuery(args.data, { skip: args.skip });
  return { searchStaff, searchStaffRefetch };
};

export const useCreateStaffCode = () => {
  const [createStaffCode] = useRandomCodeArrayMutation();
  return [createStaffCode];
};
export const useStaffCode = (args) => {
  const { data: staffCode, refetch: staffCodeRefetch } = useStaffCodeQuery(
    args.id,
    { skip: args.skip }
  );
  return { staffCode, staffCodeRefetch };
};

export const useStaffLeaveList = (args) => {
  const { data: staffLeaveList, refetch: staffLeaveListRefetch } =
    useStaffLeaveListQuery(args.data, { skip: args.skip });
  return { staffLeaveList, staffLeaveListRefetch };
};
export const useStaffLeaveAction = () => {
  const [staffLeaveAction] = useStaffLeaveActionMutation();
  return [staffLeaveAction];
};

export const useStaffTransferList = (args) => {
  const { data: staffTransferList, refetch: staffTransferListRefetch } =
    useStaffTransferListQuery(args.id, { skip: args.skip });
  return { staffTransferList, staffTransferListRefetch };
};
export const useStaffTransferApprove = () => {
  const [staffTransferApprove] = useStaffTransferApproveMutation();
  return [staffTransferApprove];
};
export const useStaffTransferReject = () => {
  const [staffTransferReject] = useStaffTransferRejectMutation();
  return [staffTransferReject];
};

export const useStaffComplaintList = (args) => {
  const { data: staffComplaintList, refetch: staffComplaintListRefetch } =
    useStaffComplaintListQuery(args.data, { skip: args.skip });
  return { staffComplaintList, staffComplaintListRefetch };
};
export const useStaffComplaintDetail = (args) => {
  const { data: staffComplaintDetail, refetch: staffComplaintDetailRefetch } =
    useStaffComplaintDetailQuery(args.cid, { skip: args.skip });
  return { staffComplaintDetail, staffComplaintDetailRefetch };
};

export const useStaffComplaintAction = () => {
  const [staffComplaintAction] = useStaffComplaintActionMutation();
  return [staffComplaintAction];
};

export const useDownloadOriginalCopy = () => {
  const [downloadOriginal] = useDownloadOriginalCopyMutation();
  return [downloadOriginal];
};
//student releted hook
export const useApproveStudentList = (args) => {
  const { data: approveStudentList, refetch: approveStudentListRefetch } =
    useApproveStudentArrayQuery(args.data, { skip: args.skip });
  return { approveStudentList, approveStudentListRefetch };
};

export const useOneStudentProfile = (args) => {
  const { data: oneStudentProfile, refetch: oneStudentProfileRefetch } =
    useOneStudentProfileQuery(args.sid, { skip: args.skip });
  return { oneStudentProfile, oneStudentProfileRefetch };
};
export const useSearchStudent = (args) => {
  const { data: searchStudent, refetch: searchStudentRefetch } =
    useSearchStudentQuery(args.data, { skip: args.skip });
  return { searchStudent, searchStudentRefetch };
};

export const useStudentComplaintList = (args) => {
  const { data: studentComplaintList, refetch: studentComplaintListRefetch } =
    useStudentComplaintListQuery(args.data, { skip: args.skip });
  return { studentComplaintList, studentComplaintListRefetch };
};
export const useStudentComplaintDetail = (args) => {
  const {
    data: studentComplaintDetail,
    refetch: studentComplaintDetailRefetch,
  } = useStudentComplaintDetailQuery(args.cid, { skip: args.skip });
  return { studentComplaintDetail, studentComplaintDetailRefetch };
};

export const useStudentComplaintAction = () => {
  const [studentComplaintAction] = useStudentComplaintActionMutation();
  return [studentComplaintAction];
};

export const useStudentBonafide = () => {
  const [studentBonafide] = useStudentBonafideMutation();
  return [studentBonafide];
};
export const useStudentLeaving = () => {
  const [studentLeaving] = useStudentLeavingMutation();
  return [studentLeaving];
};

export const useGetEditable = (args) => {
  const { data: getEditable, refetch: getEditableRefetch } =
    useGetEditableQuery(args.id, { skip: args.skip });
  return { getEditable, getEditableRefetch };
};

export const useEditEditable = () => {
  const [editEditable] = useEditEditableMutation();
  return [editEditable];
};

export const useAddStaffToInstitute = () => {
  const [addStaffToInstitute] = useAddStaffToInstituteMutation();
  return [addStaffToInstitute];
};

export const useTransferList = (args) => {
  const { data: transferList, refetch: transferListRefetch } =
    useTransferListQuery(args.id, { skip: args.skip });
  return { transferList, transferListRefetch };
};

export const useApproveStaffReplace = () => {
  const [approveStaffReplace] = useApproveStaffReplaceMutation();
  return [approveStaffReplace];
};

export const useRejectStaffReplace = () => {
  const [rejectStaffReplace] = useRejectStaffReplaceMutation();
  return [rejectStaffReplace];
};

export const useGetStudentFeeReceipt = (args) => {
  const { data: feeReceiptData, refetch: feeReceiptDataRefetch } =
    useGetFeeReceiptQuery(args.frid, { skip: args.skip });
  return { feeReceiptData, feeReceiptDataRefetch };
};

export const useAddStaffExcelByInstitute = () => {
  const [addStaffExcelByInstitute] = useAddStaffExcelByInstituteMutation();
  return [addStaffExcelByInstitute];
};

export const useGetInstituteAllStudentFilter = () => {
  const [getInstituteAllStudentFilter] =
    useGetInstituteAllStudentFilterMutation();
  return [getInstituteAllStudentFilter];
};

export const useSendMessageToSelectStudent = () => {
  const [sendMessageToSelectStudent] = useSendMessageToSelectStudentMutation();
  return [sendMessageToSelectStudent];
};
export const useSendMessageToOneStudent = () => {
  const [sendMessageToOneStudent] = useSendMessageToOneStudentMutation();
  return [sendMessageToOneStudent];
};

export const useGetStudentSectionEditStudentForm = (args) => {
  const {
    data: getStudentSectionEditStudentForm,
    refetch: getStudentSectionEditStudentFormRefetch,
  } = useGetStudentSectionEditStudentFormQuery(args.data, { skip: args.skip });
  return {
    getStudentSectionEditStudentForm,
    getStudentSectionEditStudentFormRefetch,
  };
};
export const useUpdateStudentSectionEditStudentForm = () => {
  const [updateStudentSectionEditStudentForm] =
    useUpdateStudentSectionEditStudentFormMutation();
  return [updateStudentSectionEditStudentForm];
};

export const useGetStudentMessageHistoryGenerate = (args) => {
  const {
    data: getStudentMessageHistoryGenerate,
    refetch: getStudentMessageHistoryGenerateRefetch,
  } = useGetStudentMessageHistoryGenerateQuery(args.data, { skip: args.skip });
  return {
    getStudentMessageHistoryGenerate,
    getStudentMessageHistoryGenerateRefetch,
  };
};

export const useExcelDeprtment = () => {
  const [excelDeprtment] = useExcelDeprtmentMutation();
  return [excelDeprtment];
};

export const useExcelClassMaster = () => {
  const [excelClassMaster] = useExcelClassMasterMutation();
  return [excelClassMaster];
};

export const useExcelSubjectMaster = () => {
  const [excelSubjectMaster] = useExcelSubjectMasterMutation();
  return [excelSubjectMaster];
};

export const useExcelClass = () => {
  const [excelClass] = useExcelClassMutation();
  return [excelClass];
};

export const useExcelSubject = () => {
  const [excelSubject] = useExcelSubjectMutation();
  return [excelSubject];
};

export const useGetStaffDesignationCheckValue = (args) => {
  const {
    data: getStaffDesignationCheckValue,
    refetch: getStaffDesignationCheckValueRefetch,
  } = useGetStaffDesignationCheckValueQuery(args.sid, { skip: args.skip });
  return {
    getStaffDesignationCheckValue,
    getStaffDesignationCheckValueRefetch,
  };
};
