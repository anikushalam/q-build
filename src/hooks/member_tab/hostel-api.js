import {
  useHostelDetailQuery,
  useHostelActivateMutation,
  useHostelEidtActivateMutation,
  useHostelCoverUploadMutation,
  useHostelUnitCoverUploadMutation,
  useHostelRoomCoverUploadMutation,
  useGetHostelFeeStructureListQuery,
  useGetHostelWardenListQuery,
  useGetHostelUnitListQuery,
  useGetHostelHostelitesListQuery,
  useAddHostelUnitMutation,
  useGetHostelUnitDetailQuery,
  useAddRoomHostelUnitMutation,
  useGetRoomListHostelUnitQuery,
  useGetRoomDetailHostelQuery,
  useGetHostelRulesQuery,
  useAddHostelRulesMutation,
  useEditHostelRulesMutation,
  useGetHostelFormQuery,
  useUpdateHostelFormMutation,
  useGetHostelApplyApplicationListQuery,
  useUserApplyHostelMutation,
  useCreateHostelApplicationMutation,
  useGetApplicationRequestedListQuery,
  useGetApplicationSelectedListQuery,
  useGetApplicationConfirmListQuery,
  useGetOngoingApplicationListQuery,
  useGetCompletedApplicationListQuery,
  useCancelApplicantRequestByHostelMutation,
  useAcceptApplicantRequestByHostelMutation,
  useGetHostelAppliciontDetailQuery,
  useCompleteHostelApplicationMutation,
  useConfirmStudentModeByHostelMutation,
  useRejectStudentModeByHostelMutation,
  useEditStructureByHostelMutation,
  useCollectStudentFeesByHostelMutation,
  useRefundStudentFeesByHostelMutation,
  useAllotBedByHostelMutation,
  useApplicantHostelRemainingFeeMutation,
  useRefundAmountByHostelMutation,
  useGetStudentRoommateListQuery,
  useCancelHostelApplicationByStudentMutation,
  useConfirmHostelApplicationByStudentMutation,
  useGetAnnouncementListByHostelQuery,
  useAddAnnouncementByHostelMutation,
  useGetReceiptListByHostelQuery,
  useOneReceiptActionByHostelMutation,
  useGetPendingFeeByHostelQuery,
  useOneReceiptReApplyByStudentMutation,
  usePaymentOfflineFeeHostelByStudentMutation,
  useSubmitCashToFinanceByHostelMutation,
  useAddHostilesExcelByHostelMutation,
  useGetRenewalApplicationListByHostelQuery,
  useGetRenewalSelectListByHostelQuery,
  useGetRenewalRenewedListByHostelQuery,
  useGetRenewalAllotListByHostelQuery,
  useGetRenewalCancelListByHostelQuery,
  useGetRenewalListByStudentQuery,
  useSelectRenewalByHostelMutation,
  useCancelRenewalByHostelMutation,
  useSelectRenewalByStudentMutation,
  useCancelRenewalByStudentMutation,
  useCollectRenewalFeeByHostelMutation,
  useRenewalAllotBedByHostelMutation,
  useCancelConfirmRenewalByHostelMutation,
  useHostelGetSiteInfoQuery,
  useHostelUpdateSiteInfoMutation,
  useAddModeratorByHostelMutation,
  useGetModeratorByHostelQuery,
  useUpdateModeratorByHostelMutation,
  useDeleteModeratorByHostelMutation,
  useGetMasterDepositByHostelQuery,
  useGetAllDepositRefundByHostelQuery,
  useHostelExportApplicantApplicatonMutation,
  useGetAllExcelByHostelManagerQuery,
  useUpdateExcelByHostelManagerMutation,
  useDeleteExcelByHostelManagerMutation,
  useGetHostelAllBatchQuery,
  useCreateHostelBatchMutation,
  useSelectHostelBatchMutation,
  useEditHostelBatchMutation,
  useDeleteHostelBatchMutation,
  useGetHostelAllStandardQuery,
  useCreateHostelStandardMutation,
  useDeleteApplicationByHostelMutation,
  useExportFilterDataByHostelMutation,
  useGetHostelLinkedListQuery,
  useAddHostelLinkedInstituteMutation,
} from "../../services/staff_department/hostel/hostelDynamicApi";

export const useHostelDetail = (args) => {
  const { data: hostelDetail, refetch: hostelDetailRefetch } =
    useHostelDetailQuery(args.data, { skip: args.skip });
  return { hostelDetail, hostelDetailRefetch };
};
export const useHostelActivate = () => {
  const [hostelActivate] = useHostelActivateMutation();
  return [hostelActivate];
};

export const useHostelEidtActivate = () => {
  const [hostelEidtActivate] = useHostelEidtActivateMutation();
  return [hostelEidtActivate];
};
export const useHostelCoverUpload = () => {
  const [hostelCoverUpload] = useHostelCoverUploadMutation();
  return [hostelCoverUpload];
};
export const useHostelUnitCoverUpload = () => {
  const [hostelUnitCoverUpload] = useHostelUnitCoverUploadMutation();
  return [hostelUnitCoverUpload];
};
export const useHostelRoomCoverUpload = () => {
  const [hostelRoomCoverUpload] = useHostelRoomCoverUploadMutation();
  return [hostelRoomCoverUpload];
};

export const useGetHostelFeeStructureList = (args) => {
  const {
    data: getHostelFeeStructureList,
    refetch: getHostelFeeStructureListRefetch,
  } = useGetHostelFeeStructureListQuery(args.data, { skip: args.skip });
  return { getHostelFeeStructureList, getHostelFeeStructureListRefetch };
};
export const useGetHostelWardenList = (args) => {
  const { data: getHostelWardenList, refetch: getHostelWardenListRefetch } =
    useGetHostelWardenListQuery(args.data, { skip: args.skip });
  return { getHostelWardenList, getHostelWardenListRefetch };
};
export const useGetHostelUnitList = (args) => {
  const { data: getHostelUnitList, refetch: getHostelUnitListRefetch } =
    useGetHostelUnitListQuery(args.data, { skip: args.skip });
  return { getHostelUnitList, getHostelUnitListRefetch };
};
export const useGetHostelHostelitesList = (args) => {
  const {
    data: getHostelHostelitesList,
    refetch: getHostelHostelitesListRefetch,
  } = useGetHostelHostelitesListQuery(args.data, { skip: args.skip });
  return { getHostelHostelitesList, getHostelHostelitesListRefetch };
};

export const useAddHostelUnit = () => {
  const [addHostelUnit] = useAddHostelUnitMutation();
  return [addHostelUnit];
};

export const useGetHostelUnitDetail = (args) => {
  const { data: getHostelUnitDetail, refetch: getHostelUnitDetailRefetch } =
    useGetHostelUnitDetailQuery(args.huid, { skip: args.skip });
  return { getHostelUnitDetail, getHostelUnitDetailRefetch };
};
export const useAddRoomHostelUnit = () => {
  const [addRoomHostelUnit] = useAddRoomHostelUnitMutation();
  return [addRoomHostelUnit];
};
export const useGetRoomListHostelUnit = (args) => {
  const { data: getRoomListHostelUnit, refetch: getRoomListHostelUnitRefetch } =
    useGetRoomListHostelUnitQuery(args.data, { skip: args.skip });
  return { getRoomListHostelUnit, getRoomListHostelUnitRefetch };
};
export const useGetRoomDetailHostel = (args) => {
  const { data: getRoomDetailHostel, refetch: getRoomDetailHostelRefetch } =
    useGetRoomDetailHostelQuery(args.hrid, { skip: args.skip });
  return { getRoomDetailHostel, getRoomDetailHostelRefetch };
};
export const useGetHostelRules = (args) => {
  const { data: getHostelRules, refetch: getHostelRulesRefetch } =
    useGetHostelRulesQuery(args.hid, { skip: args.skip });
  return { getHostelRules, getHostelRulesRefetch };
};
export const useAddHostelRules = () => {
  const [addHostelRules] = useAddHostelRulesMutation();
  return [addHostelRules];
};
export const useGetHostelForm = (args) => {
  const { data: getHostelForm, refetch: getHostelFormRefetch } =
    useGetHostelFormQuery(args.hid, { skip: args.skip });
  return { getHostelForm, getHostelFormRefetch };
};

export const useEditHostelRules = () => {
  const [editHostelRules] = useEditHostelRulesMutation();
  return [editHostelRules];
};

export const useUpdateHostelForm = () => {
  const [updateHostelForm] = useUpdateHostelFormMutation();
  return [updateHostelForm];
};

export const useGetHostelApplyApplicationList = (args) => {
  const {
    data: getHostelApplyApplicationList,
    refetch: getHostelApplyApplicationListRefetch,
  } = useGetHostelApplyApplicationListQuery(args.data, { skip: args.skip });
  return {
    getHostelApplyApplicationList,
    getHostelApplyApplicationListRefetch,
  };
};
export const useUserApplyHostel = () => {
  const [userApplyHostel] = useUserApplyHostelMutation();
  return [userApplyHostel];
};

export const useCreateHostelApplication = () => {
  const [createHostelApplication] = useCreateHostelApplicationMutation();
  return [createHostelApplication];
};

export const useGetApplicationRequestedList = (args) => {
  const {
    data: getApplicationRequestedList,
    refetch: getApplicationRequestedListRefetch,
  } = useGetApplicationRequestedListQuery(args.data, { skip: args.skip });
  return {
    getApplicationRequestedList,
    getApplicationRequestedListRefetch,
  };
};
export const useGetApplicationSelectedList = (args) => {
  const {
    data: getApplicationSelectedList,
    refetch: getApplicationSelectedListRefetch,
  } = useGetApplicationSelectedListQuery(args.data, { skip: args.skip });
  return {
    getApplicationSelectedList,
    getApplicationSelectedListRefetch,
  };
};
export const useGetApplicationConfirmList = (args) => {
  const {
    data: getApplicationConfirmList,
    refetch: getApplicationConfirmListRefetch,
  } = useGetApplicationConfirmListQuery(args.data, { skip: args.skip });
  return {
    getApplicationConfirmList,
    getApplicationConfirmListRefetch,
  };
};

export const useGetOngoingApplicationList = (args) => {
  const {
    data: getOngoingApplicationList,
    refetch: getOngoingApplicationListRefetch,
  } = useGetOngoingApplicationListQuery(args.data, { skip: args.skip });
  return {
    getOngoingApplicationList,
    getOngoingApplicationListRefetch,
  };
};
export const useGetCompletedApplicationList = (args) => {
  const {
    data: getCompletedApplicationList,
    refetch: getCompletedApplicationListRefetch,
  } = useGetCompletedApplicationListQuery(args.data, { skip: args.skip });
  return {
    getCompletedApplicationList,
    getCompletedApplicationListRefetch,
  };
};

export const useAcceptApplicantRequestByHostel = () => {
  const [acceptApplicantRequestByHostel] =
    useAcceptApplicantRequestByHostelMutation();
  return [acceptApplicantRequestByHostel];
};

export const useCancelApplicantRequestByHostel = () => {
  const [cancelApplicantRequestByHostel] =
    useCancelApplicantRequestByHostelMutation();
  return [cancelApplicantRequestByHostel];
};

export const useGetHostelAppliciontDetail = (args) => {
  const {
    data: getHostelAppliciontDetail,
    refetch: getHostelAppliciontDetailRefetch,
  } = useGetHostelAppliciontDetailQuery(args.aid, { skip: args.skip });
  return {
    getHostelAppliciontDetail,
    getHostelAppliciontDetailRefetch,
  };
};
export const useCompleteHostelApplication = () => {
  const [completeHostelApplication] = useCompleteHostelApplicationMutation();
  return [completeHostelApplication];
};

export const useConfirmStudentModeByHostel = () => {
  const [confirmStudentModeByHostel] = useConfirmStudentModeByHostelMutation();
  return [confirmStudentModeByHostel];
};
export const useRejectStudentModeByHostel = () => {
  const [rejectStudentModeByHostel] = useRejectStudentModeByHostelMutation();
  return [rejectStudentModeByHostel];
};
export const useEditStructureByHostel = () => {
  const [editStructureByHostel] = useEditStructureByHostelMutation();
  return [editStructureByHostel];
};
export const useCollectStudentFeesByHostel = () => {
  const [collectStudentFeesByHostel] = useCollectStudentFeesByHostelMutation();
  return [collectStudentFeesByHostel];
};
export const useRefundStudentFeesByHostel = () => {
  const [refundStudentFeesByHostel] = useRefundStudentFeesByHostelMutation();
  return [refundStudentFeesByHostel];
};

export const useAllotBedByHostel = () => {
  const [allotBedByHostel] = useAllotBedByHostelMutation();
  return [allotBedByHostel];
};

export const useApplicantHostelRemainingFee = () => {
  const [applicantHostelRemainingFee] =
    useApplicantHostelRemainingFeeMutation();
  return [applicantHostelRemainingFee];
};

export const useRefundAmountByHostel = () => {
  const [refundAmountByHostel] = useRefundAmountByHostelMutation();
  return [refundAmountByHostel];
};

export const useGetStudentRoommateList = (args) => {
  const {
    data: getStudentRoommateList,
    refetch: getStudentRoommateListRefetch,
  } = useGetStudentRoommateListQuery(args.data, { skip: args.skip });
  return {
    getStudentRoommateList,
    getStudentRoommateListRefetch,
  };
};

export const useCancelHostelApplicationByStudent = () => {
  const [cancelHostelApplicationByStudent] =
    useCancelHostelApplicationByStudentMutation();
  return [cancelHostelApplicationByStudent];
};

export const useConfirmHostelApplicationByStudent = () => {
  const [confirmHostelApplicationByStudent] =
    useConfirmHostelApplicationByStudentMutation();
  return [confirmHostelApplicationByStudent];
};

export const useGetAnnouncementListByHostel = (args) => {
  const {
    data: getAnnouncementListByHostel,
    refetch: getAnnouncementListByHostelRefetch,
  } = useGetAnnouncementListByHostelQuery(args.data, { skip: args.skip });
  return {
    getAnnouncementListByHostel,
    getAnnouncementListByHostelRefetch,
  };
};
export const useAddAnnouncementByHostel = () => {
  const [addAnnouncementByHostel] = useAddAnnouncementByHostelMutation();
  return [addAnnouncementByHostel];
};
export const useGetReceiptListByHostel = (args) => {
  const {
    data: getReceiptListByHostel,
    refetch: getReceiptListByHostelRefetch,
  } = useGetReceiptListByHostelQuery(args.data, { skip: args.skip });
  return {
    getReceiptListByHostel,
    getReceiptListByHostelRefetch,
  };
};
export const useOneReceiptActionByHostel = () => {
  const [oneReceiptActionByHostel] = useOneReceiptActionByHostelMutation();
  return [oneReceiptActionByHostel];
};

export const useGetPendingFeeByHostel = (args) => {
  const { data: getPendingFeeByHostel, refetch: getPendingFeeByHostelRefetch } =
    useGetPendingFeeByHostelQuery(args.data, { skip: args.skip });
  return {
    getPendingFeeByHostel,
    getPendingFeeByHostelRefetch,
  };
};

export const useOneReceiptReApplyByStudent = () => {
  const [oneReceiptReApplyByStudent] = useOneReceiptReApplyByStudentMutation();
  return [oneReceiptReApplyByStudent];
};

export const usePaymentOfflineFeeHostelByStudent = () => {
  const [paymentOfflineFeeHostelByStudent] =
    usePaymentOfflineFeeHostelByStudentMutation();
  return [paymentOfflineFeeHostelByStudent];
};
export const useSubmitCashToFinanceByHostel = () => {
  const [submitCashToFinanceByHostel] =
    useSubmitCashToFinanceByHostelMutation();
  return [submitCashToFinanceByHostel];
};

export const useAddHostilesExcelByHostel = () => {
  const [addHostilesExcelByHostel] = useAddHostilesExcelByHostelMutation();
  return [addHostilesExcelByHostel];
};

export const useGetRenewalApplicationListByHostel = (args) => {
  const {
    data: getRenewalApplicationListByHostel,
    refetch: getRenewalApplicationListByHostelRefetch,
  } = useGetRenewalApplicationListByHostelQuery(args.data, { skip: args.skip });
  return {
    getRenewalApplicationListByHostel,
    getRenewalApplicationListByHostelRefetch,
  };
};

export const useGetRenewalSelectListByHostel = (args) => {
  const {
    data: getRenewalSelectListByHostel,
    refetch: getRenewalSelectListByHostelRefetch,
  } = useGetRenewalSelectListByHostelQuery(args.data, { skip: args.skip });
  return {
    getRenewalSelectListByHostel,
    getRenewalSelectListByHostelRefetch,
  };
};

export const useGetRenewalRenewedListByHostel = (args) => {
  const {
    data: getRenewalRenewedListByHostel,
    refetch: getRenewalRenewedListByHostelRefetch,
  } = useGetRenewalRenewedListByHostelQuery(args.data, { skip: args.skip });
  return {
    getRenewalRenewedListByHostel,
    getRenewalRenewedListByHostelRefetch,
  };
};

export const useGetRenewalAllotListByHostel = (args) => {
  const {
    data: getRenewalAllotListByHostel,
    refetch: getRenewalAllotListByHostelRefetch,
  } = useGetRenewalAllotListByHostelQuery(args.data, { skip: args.skip });
  return {
    getRenewalAllotListByHostel,
    getRenewalAllotListByHostelRefetch,
  };
};

export const useGetRenewalCancelListByHostel = (args) => {
  const {
    data: getRenewalCancelListByHostel,
    refetch: getRenewalCancelListByHostelRefetch,
  } = useGetRenewalCancelListByHostelQuery(args.data, { skip: args.skip });
  return {
    getRenewalCancelListByHostel,
    getRenewalCancelListByHostelRefetch,
  };
};

export const useGetRenewalListByStudent = (args) => {
  const {
    data: getRenewalListByStudent,
    refetch: getRenewalListByStudentRefetch,
  } = useGetRenewalListByStudentQuery(args.data, { skip: args.skip });
  return {
    getRenewalListByStudent,
    getRenewalListByStudentRefetch,
  };
};

export const useSelectRenewalByHostel = () => {
  const [selectRenewalByHostel] = useSelectRenewalByHostelMutation();
  return [selectRenewalByHostel];
};

export const useCancelRenewalByHostel = () => {
  const [cancelRenewalByHostel] = useCancelRenewalByHostelMutation();
  return [cancelRenewalByHostel];
};
export const useSelectRenewalByStudent = () => {
  const [selectRenewalByStudent] = useSelectRenewalByStudentMutation();
  return [selectRenewalByStudent];
};

export const useCancelRenewalByStudent = () => {
  const [cancelRenewalByStudent] = useCancelRenewalByStudentMutation();
  return [cancelRenewalByStudent];
};

export const useCollectRenewalFeeByHostel = () => {
  const [collectRenewalFeeByHostel] = useCollectRenewalFeeByHostelMutation();
  return [collectRenewalFeeByHostel];
};
export const useRenewalAllotBedByHostel = () => {
  const [renewalAllotBedByHostel] = useRenewalAllotBedByHostelMutation();
  return [renewalAllotBedByHostel];
};

export const useCancelConfirmRenewalByHostel = () => {
  const [cancelConfirmRenewalByHostel] =
    useCancelConfirmRenewalByHostelMutation();
  return [cancelConfirmRenewalByHostel];
};

export const useHostelGetSiteInfo = (args) => {
  const { data: hostelGetSiteInfo, refetch: hostelGetSiteInfoRefetch } =
    useHostelGetSiteInfoQuery(args.hid, { skip: args.skip });
  return { hostelGetSiteInfo, hostelGetSiteInfoRefetch };
};

export const useHostelUpdateSiteInfo = () => {
  const [hostelUpdateSiteInfo] = useHostelUpdateSiteInfoMutation();
  return [hostelUpdateSiteInfo];
};
export const useGetModeratorByHostel = (args) => {
  const { data: getModeratorByHostel, refetch: getModeratorByHostelRefetch } =
    useGetModeratorByHostelQuery(args.data, { skip: args.skip });
  return { getModeratorByHostel, getModeratorByHostelRefetch };
};

export const useAddModeratorByHostel = () => {
  const [addModeratorByHostel] = useAddModeratorByHostelMutation();
  return [addModeratorByHostel];
};

export const useUpdateModeratorByHostel = () => {
  const [updateModeratorByHostel] = useUpdateModeratorByHostelMutation();
  return [updateModeratorByHostel];
};

export const useDeleteModeratorByHostel = () => {
  const [deleteModeratorByHostel] = useDeleteModeratorByHostelMutation();
  return [deleteModeratorByHostel];
};

export const useGetMasterDepositByHostel = (args) => {
  const {
    data: getMasterDepositByHostel,
    refetch: getMasterDepositByHostelRefetch,
  } = useGetMasterDepositByHostelQuery(args.hid, { skip: args.skip });
  return { getMasterDepositByHostel, getMasterDepositByHostelRefetch };
};

export const useGetAllDepositRefundByHostel = (args) => {
  const {
    data: getAllDepositRefundByHostel,
    refetch: getAllDepositRefundByHostelRefetch,
  } = useGetAllDepositRefundByHostelQuery(args.data, { skip: args.skip });
  return { getAllDepositRefundByHostel, getAllDepositRefundByHostelRefetch };
};

export const useHostelExportApplicantApplicaton = () => {
  const [hostelExportApplicantApplicaton] =
    useHostelExportApplicantApplicatonMutation();
  return [hostelExportApplicantApplicaton];
};

export const useGetAllExcelByHostelManager = (args) => {
  const {
    data: getAllExcelByHostelManager,
    refetch: getAllExcelByHostelManagerRefetch,
  } = useGetAllExcelByHostelManagerQuery(args.data, { skip: args.skip });
  return { getAllExcelByHostelManager, getAllExcelByHostelManagerRefetch };
};

export const useUpdateExcelByHostelManager = () => {
  const [updateExcelByHostelManager] = useUpdateExcelByHostelManagerMutation();
  return [updateExcelByHostelManager];
};

export const useDeleteExcelByHostelManager = () => {
  const [deleteExcelByHostelManager] = useDeleteExcelByHostelManagerMutation();
  return [deleteExcelByHostelManager];
};

//// batch
export const useGetHostelAllBatch = (args) => {
  const { data: getHostelAllBatch, refetch: getHostelAllBatchRefetch } =
    useGetHostelAllBatchQuery(args.data, { skip: args.skip });
  return { getHostelAllBatch, getHostelAllBatchRefetch };
};

export const useCreateHostelBatch = () => {
  const [createHostelBatch] = useCreateHostelBatchMutation();
  return [createHostelBatch];
};

export const useSelectHostelBatch = () => {
  const [selectHostelBatch] = useSelectHostelBatchMutation();
  return [selectHostelBatch];
};
export const useEditHostelBatch = () => {
  const [editHostelBatch] = useEditHostelBatchMutation();
  return [editHostelBatch];
};

export const useDeleteHostelBatch = () => {
  const [deleteHostelBatch] = useDeleteHostelBatchMutation();
  return [deleteHostelBatch];
};

export const useGetHostelAllStandard = (args) => {
  const { data: getHostelAllStandard, refetch: getHostelAllStandardRefetch } =
    useGetHostelAllStandardQuery(args.hid, { skip: args.skip });
  return { getHostelAllStandard, getHostelAllStandardRefetch };
};

export const useCreateHostelStandard = () => {
  const [createHostelStandard] = useCreateHostelStandardMutation();
  return [createHostelStandard];
};

export const useDeleteApplicationByHostel = () => {
  const [deleteApplicationByHostel] = useDeleteApplicationByHostelMutation();
  return [deleteApplicationByHostel];
};

export const useExportFilterDataByHostel = () => {
  const [exportFilterDataByHostel] = useExportFilterDataByHostelMutation();
  return [exportFilterDataByHostel];
};

export const useGetHostelLinkedList = (args) => {
  const { data: getHostelLinkedList, refetch: getHostelLinkedListRefetch } =
    useGetHostelLinkedListQuery(args.data, { skip: args.skip });
  return { getHostelLinkedList, getHostelLinkedListRefetch };
};

export const useAddHostelLinkedInstitute = () => {
  const [addHostelLinkedInstitute] = useAddHostelLinkedInstituteMutation();
  return [addHostelLinkedInstitute];
};
