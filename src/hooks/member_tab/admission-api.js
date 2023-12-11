import {
  useActivateAdmissionHeadMutation,
  useEditAdmissionMutation,
  useFetchAdmissionDetailQuery,
  useFetchAllAppAtInstituteQuery,
  useFetchAllCompletedAppQuery,
  useFetchAllOngoingAppQuery,
  useFetchAllRemainingArrayQuery,
  useFetchAdmissionRemainingArrayMutation,
  useFetchCancelStatusModeMutation,
  useFetchUserSelectAppMutation,
  useFetchUserCancelAppMutation,
  useFetchUserSelectStatusAppMutation,
  useGetAllClassesQuery,
  useGetAllConfirmQuery,
  useGetAllConfirmMultiselectQuery,
  useGetAllDepartmentQuery,
  useGetAllRequestQuery,
  useGetAllSelectQuery,
  useGetNewApplicationMutation,
  useGetOneApplicationQuery,
  useGetUserCancelMutation,
  useGetUserConfirmMutation,
  useNewUserApplyMutation,
  useRenderStudentAdmissionFeesQuery,
  useRetrieveMarkCompleteMutation,
  useRetrieveNewClassAllotMutation,
  useRetrievePaidRemainFeeMutation,
  useCollectApplicantDocsMutation,
  useAdmissionBatchListQuery,
  useAdmissionAllottedListQuery,
  useAdmissionCancelledListQuery,
  useAdmissionClassMasterListQuery,
  useAddEnquiryMutation,
  useGetAllEnquiryListQuery,
  useGetOneEnquiryQuery,
  useOneEnquiryActionMutation,
  useDirectJoinFormAdmissionMutation,
  useSubmitAmountToFinanaceMutation,
  useGetAccountWithNumberQuery,
  useEditFeeStructureMutation,
  useConfirmStudentModeByAdmissionAdminMutation,
  useRejectStudentModeByAdmissionAdminMutation,
  useGetReceiptByAdmissionQuery,
  useReceiptActionByAdmissionMutation,
  useReApplyReceiptByStudentMutation,
  useGetFeeReceiptDetailQuery,
  useGetDocumentByAdmissionQuery,
  useAddDocumentByAdmissionMutation,
  useUpdateDocumentByAdmissionMutation,
  useDeleteDocumentByAdmissionMutation,
  useRefundAmountByAdmissionAdminMutation,
  useGetRefundByAdmissionQuery,
  useUpdateRemarkByAdmissionAdminMutation,
  useExportFilterDataByAdmissionMutation,
  useGetAllExcelByAdmissionAdminQuery,
  usePayAdmissionFeeByStudentMutation,
  useUpdateExcelByAdmissionAdminMutation,
  useDeleteExcelByAdmissionAdminMutation,
  useUpdateDocumentByAdmissionAdminMutation,
  useDeleteDocumentByAdmissionAdminMutation,
  useAddModeratorByAdmissionAdminMutation,
  useGetModeratorByAdmissionAdminQuery,
  useUpdateModeratorByAdmissionAdminMutation,
  useDeleteModeratorByAdmissionAdminMutation,
  useAdmissionGetSiteInfoQuery,
  useAdmissionUpdateSiteInfoMutation,
  useGetScholarshipListAdmissionQuery,
  useAddScholarshipAdmissionMutation,
  useGetOneScholarshipAdmissionQuery,
  useGetOneScholarshipAllCandidateAdmissionQuery,
  useOneSchloarshipActionAdmissionMutation,
  useAddScholarshipFundCorpusAdmissionMutation,
  useGetScholarshipFundCorpusAdmissionQuery,
  useAddMoreScholarshipFundCorpusAdmissionMutation,
  useUpdateApplicationByAdmissionMutation,
  useDeleteApplicationByAdmissionMutation,
  useForgetPasswordProtectionMutation,
  usePasswordProtectionToggleMutation,
  usePasswordProtectionLoginMutation,
  useUpdateFeeStructureByAppliationWiseMutation,
  useGetRefundedListByAdmissionQuery,
  useDirectJoinFormWithPayAdmissionMutation,
  useCollectSetOffAdmissionFeesMutation,
  useAdmissionDocsActionByStudentMutation,
  useScholarShipExcelByAdmissionMutation,
  useScholarShipExcelByInstituteMutation,
  useAddScholarNumberAdmissionMutation,
  useStudentDepartmentFeesQuery,
  useStudentBacklogFeesQuery,
  useInternalFeeReceiptQuery,
  useDropAdmissionFeesCardByAdmissionMutation,
  useAllApplicationByAdmissionQuery,
  useAddNewFeesByAdmissionMutation,
  useCollectNewAddFeesByAdmissionMutation,
  useGovernmentCollectNewAddFeesByAdmissionMutation,
  useAdmissionReminderMutation,
  useAdmissionInstallmentEditFeesByAdmissionMutation,
  //
  useGetPendingCustomFilterByAdmissionQuery,
  useGetBatchStandardWithMultipleDepartmentMutation,
  useGetDailyCollectionByAdmissionQuery,
  useEditStudentGrNumberMutation,
  //
  useAdmissionRevertBackSelectedToApplicationMutation,
  useAdmissionRevertBackDocsToSelectedMutation,
  useRemoveFeesInstallmentCardMutation,
  useTransferApplicatToOtherApplicationMutation,
  useExistStudentFeesExcelByAdmissionMutation,
  useStudentValidaForApplicationByAdmissionMutation,
  useStudentBankValidationByAdmissionMutation,
  useMarkCompleteToOngoingApplicationMutation,
  useGetReminderHistoryByAdmissionQuery,
  useGetOsReminderStudentListMutation,
  useStudentScholarshipNumberDublicateMutation,
} from "../../services/admission/admissionApiDynamic";

export const useAssignAdmissionHead = () => {
  const [assignAdmissionHead] = useActivateAdmissionHeadMutation();
  return [assignAdmissionHead];
};

export const useEditAdmission = () => {
  const [editAdmission] = useEditAdmissionMutation();
  return [editAdmission];
};

export const useGetAdmissionDetail = (args) => {
  const { data: getAdmissionDetail, refetch: getAdmissionDetailRefetch } =
    useFetchAdmissionDetailQuery(args.data, { skip: args.skip });
  return { getAdmissionDetail, getAdmissionDetailRefetch };
};

export const useAllOngoingApp = (args) => {
  const { data: allOngoingApp, refetch: allOngoingAppRefetch } =
    useFetchAllOngoingAppQuery(args.data, { skip: args.skip });
  return { allOngoingApp, allOngoingAppRefetch };
};

export const useAllCompletedApp = (args) => {
  const { data: allCompletedApp, refetch: allCompletedAppRefetch } =
    useFetchAllCompletedAppQuery(args.data, { skip: args.skip });
  return { allCompletedApp, allCompletedAppRefetch };
};

export const useAllAppAtInstitute = (args) => {
  const { data: allAppAtInstitute, refetch: allAppAtInstituteRefetch } =
    useFetchAllAppAtInstituteQuery(args.data, { skip: args.skip });
  return { allAppAtInstitute, allAppAtInstituteRefetch };
};

export const useNewUserApply = () => {
  const [newUserApply] = useNewUserApplyMutation();
  return [newUserApply];
};
export const useCreateNewApplication = () => {
  const [createNewApplication] = useGetNewApplicationMutation();
  return [createNewApplication];
};

export const useGetAllRequest = (args) => {
  const { data: getAllRequestList, refetch: getAllRequestListRefetch } =
    useGetAllRequestQuery(args.data, { skip: args.skip });
  return { getAllRequestList, getAllRequestListRefetch };
};
export const useGetAllSelect = (args) => {
  const { data: getAllSelectList, refetch: getAllSelectListRefetch } =
    useGetAllSelectQuery(args.data, { skip: args.skip });
  return { getAllSelectList, getAllSelectListRefetch };
};
export const useGetAllConfirm = (args) => {
  const { data: getAllConfirmList, refetch: getAllConfirmListRefetch } =
    useGetAllConfirmQuery(args.data, { skip: args.skip });
  return { getAllConfirmList, getAllConfirmListRefetch };
};

export const useGetAllConfirmMultiselect = (args) => {
  const {
    data: getAllConfirmListMulitselect,
    refetch: getAllConfirmListMulitselectRefetch,
  } = useGetAllConfirmMultiselectQuery(args.data, { skip: args.skip });
  return { getAllConfirmListMulitselect, getAllConfirmListMulitselectRefetch };
};

export const useSelectAdmissionApplicant = () => {
  const [selectAdmissionApplicant] = useFetchUserSelectAppMutation();
  return [selectAdmissionApplicant];
};
export const useCancelAdmissionApplicant = () => {
  const [cancelAdmissionApplicant] = useFetchUserCancelAppMutation();
  return [cancelAdmissionApplicant];
};
export const useStudentPayMode = () => {
  const [studentPayMode] = useFetchUserSelectStatusAppMutation();
  return [studentPayMode];
};
export const useApplicantAdmissionConfirm = () => {
  const [confirmAppliacntAdmission] = useGetUserConfirmMutation();
  return [confirmAppliacntAdmission];
};
export const useApplicantAdmissionCancel = () => {
  const [cancelAppliacntAdmission] = useGetUserCancelMutation();
  return [cancelAppliacntAdmission];
};
export const useGetAllClasses = (args) => {
  const { data: getAllClassesList, refetch: getAllClassesListRefetch } =
    useGetAllClassesQuery(args.data, { skip: args.skip });
  return { getAllClassesList, getAllClassesListRefetch };
};

export const useApplicantAdmissionAllotSeat = () => {
  const [applicantAllotSeat] = useRetrieveNewClassAllotMutation();
  return [applicantAllotSeat];
};
export const useApplicationComplete = () => {
  const [completeAdmissionApplication] = useRetrieveMarkCompleteMutation();
  return [completeAdmissionApplication];
};

export const useApplicantAdmissionRemainingFees = () => {
  const [applicantRemainingFees] = useRetrievePaidRemainFeeMutation();
  return [applicantRemainingFees];
};

export const useOneApplicationDetail = (args) => {
  const { data: oneApplicationDetail, refetch: oneApplicationDetailRefetch } =
    useGetOneApplicationQuery(args.apid, { skip: args.skip });
  return { oneApplicationDetail, oneApplicationDetailRefetch };
};

export const useGetAllDepartment = (args) => {
  const { data: allDepartmentList, refetch: allDepartmentListRefetch } =
    useGetAllDepartmentQuery(args.aid, { skip: args.skip });
  return { allDepartmentList, allDepartmentListRefetch };
};

export const useCancelStudentApplicationStatus = () => {
  const [cancelApplication] = useFetchCancelStatusModeMutation();
  return [cancelApplication];
};

export const useRenderStudentAdmissionFees = (args) => {
  const {
    data: sudentAdmissionFeesList,
    refetch: sudentAdmissionFeesListRefetch,
  } = useRenderStudentAdmissionFeesQuery(args.sid, { skip: args.skip });
  return { sudentAdmissionFeesList, sudentAdmissionFeesListRefetch };
};

export const useCollectApplicantDocs = () => {
  const [collectDocs] = useCollectApplicantDocsMutation();
  return [collectDocs];
};
export const useAdmissionBatchList = (args) => {
  const { data: admissionBatchList, refetch: admissionBatchListRefetch } =
    useAdmissionBatchListQuery(args.aid, { skip: args.skip });
  return { admissionBatchList, admissionBatchListRefetch };
};

export const useAdmissionAllottedList = (args) => {
  const { data: admissionAllottedList, refetch: admissionAllottedListRefetch } =
    useAdmissionAllottedListQuery(args.data, { skip: args.skip });
  return { admissionAllottedList, admissionAllottedListRefetch };
};
export const useAdmissionCancelledList = (args) => {
  const {
    data: admissionCancelledList,
    refetch: admissionCancelledListRefetch,
  } = useAdmissionCancelledListQuery(args.data, { skip: args.skip });
  return { admissionCancelledList, admissionCancelledListRefetch };
};
export const useAdmissionClassMasterList = (args) => {
  const {
    data: admissionClassMasterList,
    refetch: admissionClassMasterListRefetch,
  } = useAdmissionClassMasterListQuery(args.did, { skip: args.skip });
  return { admissionClassMasterList, admissionClassMasterListRefetch };
};

export const useAddEnquiry = () => {
  const [addEnquiry] = useAddEnquiryMutation();
  return [addEnquiry];
};

export const useGetAllEnquiryList = (args) => {
  const { data: getAllEnquiryList, refetch: getAllEnquiryListRefetch } =
    useGetAllEnquiryListQuery(args.data, { skip: args.skip });
  return { getAllEnquiryList, getAllEnquiryListRefetch };
};
export const useGetOneEnquiry = (args) => {
  const { data: oneEnquiryDetail, refetch: oneEnquiryDetailRefetch } =
    useGetOneEnquiryQuery(args.eid, { skip: args.skip });
  return { oneEnquiryDetail, oneEnquiryDetailRefetch };
};

export const useOneEnquiryAction = () => {
  const [oneEnquiryAction] = useOneEnquiryActionMutation();
  return [oneEnquiryAction];
};

export const useDirectJoinFormAdmission = () => {
  const [directJoinFormAdmission] = useDirectJoinFormAdmissionMutation();
  return [directJoinFormAdmission];
};
export const useSubmitAmountToFinanace = () => {
  const [submitAmountToFinanace] = useSubmitAmountToFinanaceMutation();
  return [submitAmountToFinanace];
};

export const useGetAccountWithNumber = (args) => {
  const { data: getAccountWithNumber, refetch: getAccountWithNumberRefetch } =
    useGetAccountWithNumberQuery(args.phoneKey, { skip: args.skip });
  return { getAccountWithNumber, getAccountWithNumberRefetch };
};
export const useEditFeeStructure = () => {
  const [editFeeStructure] = useEditFeeStructureMutation();
  return [editFeeStructure];
};

export const useConfirmStudentModeByAdmissionAdmin = () => {
  const [confirmStudentModeByAdmission] =
    useConfirmStudentModeByAdmissionAdminMutation();
  return [confirmStudentModeByAdmission];
};
export const useRejectStudentModeByAdmissionAdmin = () => {
  const [rejectStudentModeByAdmission] =
    useRejectStudentModeByAdmissionAdminMutation();
  return [rejectStudentModeByAdmission];
};

export const useGetReceiptByAdmission = (args) => {
  const { data: getReceiptByAdmission, refetch: getReceiptByAdmissionRefetch } =
    useGetReceiptByAdmissionQuery(args.data, { skip: args.skip });
  return { getReceiptByAdmission, getReceiptByAdmissionRefetch };
};

export const useReceiptActionByAdmission = () => {
  const [receiptActionByAdmission] = useReceiptActionByAdmissionMutation();
  return [receiptActionByAdmission];
};
export const useReApplyReceiptByStudent = () => {
  const [reApplyReceiptByStudent] = useReApplyReceiptByStudentMutation();
  return [reApplyReceiptByStudent];
};

export const useGetFeeReceiptDetail = (args) => {
  const { data: getFeeReceiptDetail, refetch: getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetailQuery(args.rid, { skip: args.skip });
  return { getFeeReceiptDetail, getFeeReceiptDetailRefetch };
};

export const useGetDocumentByAdmission = (args) => {
  const {
    data: getDocumentByAdmission,
    refetch: getDocumentByAdmissionRefetch,
  } = useGetDocumentByAdmissionQuery(args.data, { skip: args.skip });
  return { getDocumentByAdmission, getDocumentByAdmissionRefetch };
};

export const useAddDocumentByAdmission = () => {
  const [addDocumentByAdmission] = useAddDocumentByAdmissionMutation();
  return [addDocumentByAdmission];
};
export const useUpdateDocumentByAdmission = () => {
  const [updateDocumentByAdmission] = useUpdateDocumentByAdmissionMutation();
  return [updateDocumentByAdmission];
};

export const useDeleteDocumentByAdmission = () => {
  const [deleteDocumentByAdmission] = useDeleteDocumentByAdmissionMutation();
  return [deleteDocumentByAdmission];
};

export const useRefundAmountByAdmissionAdmin = () => {
  const [refundAmountByAdmissionAdmin] =
    useRefundAmountByAdmissionAdminMutation();
  return [refundAmountByAdmissionAdmin];
};

export const useGetRefundByAdmission = (args) => {
  const { data: getRefundByAdmission, refetch: getRefundByAdmissionRefetch } =
    useGetRefundByAdmissionQuery(args.data, { skip: args.skip });
  return { getRefundByAdmission, getRefundByAdmissionRefetch };
};

export const useUpdateRemarkByAdmissionAdmin = () => {
  const [updateRemarkByAdmissionAdmin] =
    useUpdateRemarkByAdmissionAdminMutation();
  return [updateRemarkByAdmissionAdmin];
};

export const useExportFilterDataByAdmission = () => {
  const [exportFilterDataByAdmission] =
    useExportFilterDataByAdmissionMutation();
  return [exportFilterDataByAdmission];
};

export const useGetAllExcelByAdmissionAdmin = (args) => {
  const {
    data: getAllExcelByAdmissionAdmin,
    refetch: getAllExcelByAdmissionAdminRefetch,
  } = useGetAllExcelByAdmissionAdminQuery(args.data, { skip: args.skip });
  return { getAllExcelByAdmissionAdmin, getAllExcelByAdmissionAdminRefetch };
};

export const usePayAdmissionFeeByStudent = () => {
  const [payAdmissionFeeByStudent] = usePayAdmissionFeeByStudentMutation();
  return [payAdmissionFeeByStudent];
};

export const useUpdateExcelByAdmissionAdmin = () => {
  const [updateExcelByAdmissionAdmin] =
    useUpdateExcelByAdmissionAdminMutation();
  return [updateExcelByAdmissionAdmin];
};

export const useDeleteExcelByAdmissionAdmin = () => {
  const [deleteExcelByAdmissionAdmin] =
    useDeleteExcelByAdmissionAdminMutation();
  return [deleteExcelByAdmissionAdmin];
};

export const useUpdateDocumentByAdmissionAdmin = () => {
  const [updateDocumentByAdmissionAdmin] =
    useUpdateDocumentByAdmissionAdminMutation();
  return [updateDocumentByAdmissionAdmin];
};

export const useDeleteDocumentByAdmissionAdmin = () => {
  const [deleteDocumentByAdmissionAdmin] =
    useDeleteDocumentByAdmissionAdminMutation();
  return [deleteDocumentByAdmissionAdmin];
};
export const useGetModeratorByAdmissionAdmin = (args) => {
  const {
    data: getModeratorByAdmissionAdmin,
    refetch: getModeratorByAdmissionAdminRefetch,
  } = useGetModeratorByAdmissionAdminQuery(args.data, { skip: args.skip });
  return { getModeratorByAdmissionAdmin, getModeratorByAdmissionAdminRefetch };
};

export const useAddModeratorByAdmissionAdmin = () => {
  const [addModeratorByAdmissionAdmin] =
    useAddModeratorByAdmissionAdminMutation();
  return [addModeratorByAdmissionAdmin];
};

export const useUpdateModeratorByAdmissionAdmin = () => {
  const [updateModeratorByAdmissionAdmin] =
    useUpdateModeratorByAdmissionAdminMutation();
  return [updateModeratorByAdmissionAdmin];
};

export const useDeleteModeratorByAdmissionAdmin = () => {
  const [deleteModeratorByAdmissionAdmin] =
    useDeleteModeratorByAdmissionAdminMutation();
  return [deleteModeratorByAdmissionAdmin];
};

export const useAdmissionGetSiteInfo = (args) => {
  const { data: admissionGetSiteInfo, refetch: admissionGetSiteInfoRefetch } =
    useAdmissionGetSiteInfoQuery(args.aid, { skip: args.skip });
  return { admissionGetSiteInfo, admissionGetSiteInfoRefetch };
};

export const useAdmissionUpdateSiteInfo = () => {
  const [admissionUpdateSiteInfo] = useAdmissionUpdateSiteInfoMutation();
  return [admissionUpdateSiteInfo];
};

//////////////
export const useGetScholarshipListAdmission = (args) => {
  const {
    data: getScholarshipListAdmission,
    refetch: getScholarshipListAdmissionRefetch,
  } = useGetScholarshipListAdmissionQuery(args.data, { skip: args.skip });
  return { getScholarshipListAdmission, getScholarshipListAdmissionRefetch };
};

export const useAddScholarshipAdmission = () => {
  const [addScholarshipAdmission] = useAddScholarshipAdmissionMutation();
  return [addScholarshipAdmission];
};
export const useGetOneScholarshipAdmission = (args) => {
  const {
    data: getOneScholarshipAdmission,
    refetch: getOneScholarshipAdmissionRefetch,
  } = useGetOneScholarshipAdmissionQuery(args.sid, { skip: args.skip });
  return { getOneScholarshipAdmission, getOneScholarshipAdmissionRefetch };
};

export const useGetOneScholarshipAllCandidateAdmission = (args) => {
  const {
    data: getOneScholarshipAllCandidateAdmission,
    refetch: getOneScholarshipAllCandidateAdmissionRefetch,
  } = useGetOneScholarshipAllCandidateAdmissionQuery(args.data, {
    skip: args.skip,
  });
  return {
    getOneScholarshipAllCandidateAdmission,
    getOneScholarshipAllCandidateAdmissionRefetch,
  };
};

export const useOneSchloarshipActionAdmission = () => {
  const [oneSchloarshipActionAdmission] =
    useOneSchloarshipActionAdmissionMutation();
  return [oneSchloarshipActionAdmission];
};

export const useAddScholarshipFundCorpusAdmission = () => {
  const [addScholarshipFundCorpusAdmission] =
    useAddScholarshipFundCorpusAdmissionMutation();
  return [addScholarshipFundCorpusAdmission];
};
export const useGetScholarshipFundCorpusAdmission = (args) => {
  const {
    data: getScholarshipFundCorpusAdmission,
    refetch: getScholarshipFundCorpusAdmissionRefetch,
  } = useGetScholarshipFundCorpusAdmissionQuery(args.data, { skip: args.skip });
  return {
    getScholarshipFundCorpusAdmission,
    getScholarshipFundCorpusAdmissionRefetch,
  };
};

export const useAddMoreScholarshipFundCorpusAdmission = () => {
  const [addMoreScholarshipFundCorpusAdmission] =
    useAddMoreScholarshipFundCorpusAdmissionMutation();
  return [addMoreScholarshipFundCorpusAdmission];
};

export const useUpdateApplicationByAdmission = () => {
  const [updateApplicationByAdmission] =
    useUpdateApplicationByAdmissionMutation();
  return [updateApplicationByAdmission];
};

export const useDeleteApplicationByAdmission = () => {
  const [deleteApplicationByAdmission] =
    useDeleteApplicationByAdmissionMutation();
  return [deleteApplicationByAdmission];
};
export const useForgetPasswordProtection = () => {
  const [forgetPasswordProtection] = useForgetPasswordProtectionMutation();
  return [forgetPasswordProtection];
};
export const usePasswordProtectionToggle = () => {
  const [passwordProtectionToggle] = usePasswordProtectionToggleMutation();
  return [passwordProtectionToggle];
};
export const usePasswordProtectionLogin = () => {
  const [passwordProtectionLogin] = usePasswordProtectionLoginMutation();
  return [passwordProtectionLogin];
};

export const useUpdateFeeStructureByAppliationWise = () => {
  const [updateFeeStructureByAppliationWise] =
    useUpdateFeeStructureByAppliationWiseMutation();
  return [updateFeeStructureByAppliationWise];
};

export const useGetRefundedListByAdmission = (args) => {
  const {
    data: getRefundedListByAdmission,
    refetch: getRefundedListByAdmissionRefetch,
  } = useGetRefundedListByAdmissionQuery(args.data, { skip: args.skip });
  return {
    getRefundedListByAdmission,
    getRefundedListByAdmissionRefetch,
  };
};

export const useDirectJoinWithPayAdmission = () => {
  const [directJoinFormWithPayAdmission] =
    useDirectJoinFormWithPayAdmissionMutation();
  return [directJoinFormWithPayAdmission];
};

export const useCollectSetOffAdmissionFees = () => {
  const [collectSetOffAdmissionFees] = useCollectSetOffAdmissionFeesMutation();
  return [collectSetOffAdmissionFees];
};
export const useAdmissionDocsActionByStudent = () => {
  const [admissionDocsActionByStudent] =
    useAdmissionDocsActionByStudentMutation();
  return [admissionDocsActionByStudent];
};

export const useScholarShipExcelByAdmission = () => {
  const [scholarShipExcelByAdmission] =
    useScholarShipExcelByAdmissionMutation();
  return [scholarShipExcelByAdmission];
};
export const useScholarShipExcelByInstitute = () => {
  const [scholarShipExcelByInstitute] =
    useScholarShipExcelByInstituteMutation();
  return [scholarShipExcelByInstitute];
};

export const useAddScholarNumberAdmission = () => {
  const [addScholarNumberAdmission] = useAddScholarNumberAdmissionMutation();
  return [addScholarNumberAdmission];
};

export const useStudentDepartmentFees = (args) => {
  const { data: studentDepartmentFees, refetch: studentDepartmentFeesRefetch } =
    useStudentDepartmentFeesQuery(args.data, { skip: args.skip });
  return { studentDepartmentFees, studentDepartmentFeesRefetch };
};

export const useStudentBacklogFees = (args) => {
  const { data: studentBacklogFees, refetch: studentBacklogFeesRefetch } =
    useStudentBacklogFeesQuery(args.data, { skip: args.skip });
  return { studentBacklogFees, studentBacklogFeesRefetch };
};

export const useInternalFeeReceipt = (args) => {
  const { data: internalFeeReceipt, refetch: internalFeeReceiptRefetch } =
    useInternalFeeReceiptQuery(args.rid, { skip: args.skip });
  return { internalFeeReceipt, internalFeeReceiptRefetch };
};

export const useDropAdmissionFeesCardByAdmission = () => {
  const [dropAdmissionFeesCardByAdmission] =
    useDropAdmissionFeesCardByAdmissionMutation();
  return [dropAdmissionFeesCardByAdmission];
};

export const useAllApplicationByAdmission = (args) => {
  const {
    data: allApplicationByAdmission,
    refetch: allApplicationByAdmissionRefetch,
  } = useAllApplicationByAdmissionQuery(args.data, { skip: args.skip });
  return { allApplicationByAdmission, allApplicationByAdmissionRefetch };
};

export const useAddNewFeesByAdmission = () => {
  const [addNewFeesByAdmission] = useAddNewFeesByAdmissionMutation();
  return [addNewFeesByAdmission];
};

export const useCollectNewAddFeesByAdmission = () => {
  const [collectNewAddFeesByAdmission] =
    useCollectNewAddFeesByAdmissionMutation();
  return [collectNewAddFeesByAdmission];
};

export const useGovernmentCollectNewAddFeesByAdmission = () => {
  const [governmentCollectNewAddFeesByAdmission] =
    useGovernmentCollectNewAddFeesByAdmissionMutation();
  return [governmentCollectNewAddFeesByAdmission];
};

export const useAdmissionReminder = () => {
  const [admissionReminder] = useAdmissionReminderMutation();
  return [admissionReminder];
};
export const useAdmissionInstallmentEditFeesByAdmission = () => {
  const [admissionInstallmentEditFeesByAdmission] =
    useAdmissionInstallmentEditFeesByAdmissionMutation();
  return [admissionInstallmentEditFeesByAdmission];
};

export const useGetPendingCustomFilterByAdmission = (args) => {
  const {
    data: getPendingCustomFilterByAdmission,
    refetch: getPendingCustomFilterByAdmissionRefetch,
  } = useGetPendingCustomFilterByAdmissionQuery(args.data, { skip: args.skip });
  return {
    getPendingCustomFilterByAdmission,
    getPendingCustomFilterByAdmissionRefetch,
  };
};

export const useGetBatchStandardWithMultipleDepartment = () => {
  const [getBatchStandardWithMultipleDepartment] =
    useGetBatchStandardWithMultipleDepartmentMutation();
  return [getBatchStandardWithMultipleDepartment];
};

// with new filter type
export const useAllAdmissionRemaining = () => {
  const [allAdmissionRemaining] = useFetchAdmissionRemainingArrayMutation();
  return [allAdmissionRemaining];
};

export const useAllRemaining = (args) => {
  const { data: allRemainingList, refetch: allRemainingListRefetch } =
    useFetchAllRemainingArrayQuery(args.data, { skip: args.skip });
  return { allRemainingList, allRemainingListRefetch };
};

export const useGetDailyCollectionByAdmission = (args) => {
  const {
    data: getDailyCollectionByAdmission,
    refetch: getDailyCollectionByAdmissionRefetch,
  } = useGetDailyCollectionByAdmissionQuery(args.data, { skip: args.skip });
  return {
    getDailyCollectionByAdmission,
    getDailyCollectionByAdmissionRefetch,
  };
};

// student gr edit
export const useEditStudentGrNumber = () => {
  const [editStudentGrNumber] = useEditStudentGrNumberMutation();
  return [editStudentGrNumber];
};
//
export const useAdmissionRevertBackSelectedToApplication = () => {
  const [admissionRevertBackSelectedToApplication] =
    useAdmissionRevertBackSelectedToApplicationMutation();
  return [admissionRevertBackSelectedToApplication];
};
export const useAdmissionRevertBackDocsToSelected = () => {
  const [admissionRevertBackDocsToSelected] =
    useAdmissionRevertBackDocsToSelectedMutation();
  return [admissionRevertBackDocsToSelected];
};

export const useRemoveFeesInstallmentCard = () => {
  const [removeFeesInstallmentCard] = useRemoveFeesInstallmentCardMutation();
  return [removeFeesInstallmentCard];
};

export const useTransferApplicatToOtherApplication = () => {
  const [transferApplicatToOtherApplication] =
    useTransferApplicatToOtherApplicationMutation();
  return [transferApplicatToOtherApplication];
};

export const useExistStudentFeesExcelByAdmission = () => {
  const [existStudentFeesExcelByAdmission] =
    useExistStudentFeesExcelByAdmissionMutation();
  return [existStudentFeesExcelByAdmission];
};
export const useStudentValidaForApplicationByAdmission = () => {
  const [studentValidaForApplicationByAdmission] =
    useStudentValidaForApplicationByAdmissionMutation();
  return [studentValidaForApplicationByAdmission];
};
export const useStudentBankValidationByAdmission = () => {
  const [studentBankValidationByAdmission] =
    useStudentBankValidationByAdmissionMutation();
  return [studentBankValidationByAdmission];
};

export const useMarkCompleteToOngoingApplication = () => {
  const [markCompleteToOngoingApplication] =
    useMarkCompleteToOngoingApplicationMutation();
  return [markCompleteToOngoingApplication];
};

export const useGetReminderHistoryByAdmission = (args) => {
  const {
    data: getReminderHistoryByAdmission,
    refetch: getReminderHistoryByAdmissionRefetch,
  } = useGetReminderHistoryByAdmissionQuery(args.data, { skip: args.skip });
  return {
    getReminderHistoryByAdmission,
    getReminderHistoryByAdmissionRefetch,
  };
};

export const useGetOsReminderStudentList = () => {
  const [getOsReminderStudentList] = useGetOsReminderStudentListMutation();
  return [getOsReminderStudentList];
};
export const useStudentScholarshipNumberDublicate = () => {
  const [studentScholarshipNumberDublicate] =
    useStudentScholarshipNumberDublicateMutation();
  return [studentScholarshipNumberDublicate];
};
