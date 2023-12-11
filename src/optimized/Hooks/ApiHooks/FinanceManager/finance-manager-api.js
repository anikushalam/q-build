import {
  useFinanceDashboardMasterQuery,
  useFinanceBankDetailFilterQuery,
  useDonotQuery,
  useFinanceIncomeQuery,
  useFinanceIncomeBalanceQuery,
  useFinanceIncomeDetailQuery,
  useFinanceExpenseQuery,
  useFinanceExpenseBalanceQuery,
  useFinanceExpenseDetailQuery,
  useFinanceRemainBalanceQuery,
  useFinanceFeeListQuery,
  useFinanceAllBankQuery,
  useFinanceOneBankDetailQuery,
  useFinanceTransportReceiptQuery,
  useFinanceReceiptQuery,
  //
  useFinanceAllFeeHeadMasterQuery,
  useFinanceAddFeeHeadMasterMutation,
  useFinanceUpdateFeeHeadMasterMutation,
  useFinanceDeleteFeesCategoryMutation,
  useFinanceAddFeesStructureMutation,
  useFinanceFeeStructureDetailQuery,
  useFinanceUpdateFeesStructureMutation,
  useFinanceUpdateRetroFeesStructureMutation,
  useFinanceDeleteFeesStructureMutation,
  useFinanceDeleteFeesHeadMutation,
  useFinanceAllExcelQuery,
  useFinanceUpdateExcelMutation,
  useFinanceDeleteExcelMutation,
  useFinanceAddBankMutation,
  useFinanceUpdateBankMutation,
  useFinanceDeleteBankMutation,
  useFinanceMasterDepositQuery,
  useFinanceMasterDepositAllQuery,
  useFinanceMarkRefundDepositMutation,
  useFinanceAllDepositRefundQuery,
  useFinanceAddModeratorMutation,
  useFinanceModeratorQuery,
  useFinanceUpdateModeratorMutation,
  useFinanceDeleteModeratorMutation,
  useFinanceMarkAsSecondaryCategoryMutation,
  useFinanceAllExemptionQuery,
  useFinanceAddIncomeMutation,
  useFinanceAddExpenseMutation,
  useFinanceAllSettlementQuery,
  useFinanceAllTransactionQuery,
  useFinanceAllFeesCategoryQuery,
  useFinanceAddFeesCategoryMutation,
  useFinanceAddExcelCategoryMutation,
  useFinanceAddExcelStructureMutation,
  useFinanceAddExcelFeeHeadMutation,
  useFinanceStudentStatiticsMutation,
  useFinanceAllInternalFeeQuery,
  useFinanceAddInternalFeesMutation,
  useInstituteAllDepartmentQuery,
  useFinanceStudentStatisticsExportMutation,
  useFinanceFeeStatiticsMutation,
  useFinanceAllFeeStructureQuery,
  useFinanceOverallFeeStatisticsQuery,
  useOneStudentProfileQuery,
  useOneStudentFeesStatQuery,
  useOneStudentAdmissionFeesQuery,
  useOneStudentInternalFeesQuery,
  useFinanceSendAllStudentMessageMutation,
  useFinanceSendOneStudentMessageMutation,
  useFinanceAllStudentMessageHistoryQuery,
  useFinanceStudentGrChangeMutation,
  useFinanceAddScholarNumberMutation,
  useFinanceDropStudentOneAdmissionFeesMutation,
  useFinanceUpdateStudentFeeStructureMutation,
  useFinanceAllotScholarshipExcelMutation,
  useFinanceAllotScholarshipMutation,
  useFinanceAllotScholarshipNewAddFeesMutation,
  //
  useUniversalPlateformUserQuery,
  useDepartmentBatchAllClassMasterQuery,
  useDepartmentAllBatchQuery,
  useInstituteAllStaffQuery,
  useInstituteAllStudentQuery,
  useDepartmentAllClassMasterQuery,
  useUserAllStatsQuery,
  useFinanceAdmissionStaticsQuery,
  useInstituteAllStudentIdListQuery,
} from "../../../Services/FinanceManager/financeManagerApiDynamic";

export const useFinanceDashboardMaster = (args) => {
  const { data, refetch, isFetching } = useFinanceDashboardMasterQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeDashboardMaster: data,
    financeDashboardMasterRefetch: refetch,
    financeDashboardMasterLoading: isFetching,
  };
};

export const useFinanceBankDetailFilter = (args) => {
  const { data, refetch, isFetching } = useFinanceBankDetailFilterQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeBankDetailFilter: data,
    financeBankDetailFilterRefetch: refetch,
    financeBankDetailFilterLoading: isFetching,
  };
};
export const useFinanceDonot = (args) => {
  const { data, refetch, isFetching } = useDonotQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeDonot: data,
    financeDonotRefetch: refetch,
    financeDonotLoading: isFetching,
  };
};
export const useFinanceIncome = (args) => {
  const { data, refetch, isFetching } = useFinanceIncomeQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeIncome: data,
    financeIncomeRefetch: refetch,
    financeIncomeLoading: isFetching,
  };
};
export const useFinanceIncomeBalance = (args) => {
  const { data, refetch, isFetching } = useFinanceIncomeBalanceQuery(args.fid, {
    skip: args.skip,
  });
  return {
    financeIncomeBalance: data,
    financeIncomeBalanceRefetch: refetch,
    financeIncomeBalanceLoading: isFetching,
  };
};
export const useFinanceIncomeDetail = (args) => {
  const { data, refetch, isFetching } = useFinanceIncomeDetailQuery(
    args.incomeId,
    {
      skip: args.skip,
    }
  );
  return {
    financeIncomeDetail: data,
    financeIncomeDetailRefetch: refetch,
    financeIncomeDetailLoading: isFetching,
  };
};
export const useFinanceExpense = (args) => {
  const { data, refetch, isFetching } = useFinanceExpenseQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeExpense: data,
    financeExpenseRefetch: refetch,
    financeExpenseLoading: isFetching,
  };
};
export const useFinanceExpenseBalance = (args) => {
  const { data, refetch, isFetching } = useFinanceExpenseBalanceQuery(
    args.fid,
    {
      skip: args.skip,
    }
  );
  return {
    financeExpenseBalance: data,
    financeExpenseBalanceRefetch: refetch,
    financeExpenseBalanceLoading: isFetching,
  };
};

export const useFinanceExpenseDetail = (args) => {
  const { data, refetch, isFetching } = useFinanceExpenseDetailQuery(
    args.expenseId,
    {
      skip: args.skip,
    }
  );
  return {
    financeExpenseDetail: data,
    financeExpenseDetailRefetch: refetch,
    financeExpenseDetailLoading: isFetching,
  };
};
export const useFinanceRemainBalance = (args) => {
  const { data, refetch, isFetching } = useFinanceRemainBalanceQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeRemainBalance: data,
    financeRemainBalanceRefetch: refetch,
    financeRemainBalanceLoading: isFetching,
  };
};

export const useFinanceFeeList = (args) => {
  const { data, refetch, isFetching } = useFinanceFeeListQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeFeeList: data,
    financeFeeListRefetch: refetch,
    financeFeeListLoading: isFetching,
  };
};

export const useFinanceAllBank = (args) => {
  const { data, refetch, isFetching } = useFinanceAllBankQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeAllBank: data,
    financeAllBankRefetch: refetch,
    financeAllBankLoading: isFetching,
  };
};

export const useFinanceOneBankDetail = (args) => {
  const { data, refetch, isFetching } = useFinanceOneBankDetailQuery(args.bid, {
    skip: args.skip,
  });
  return {
    financeOneBankDetail: data,
    financeOneBankDetailRefetch: refetch,
    financeOneBankDetailLoading: isFetching,
  };
};
export const useFinanceTransportReceipt = (args) => {
  const { data, refetch, isFetching } = useFinanceTransportReceiptQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeTransportReceipt: data,
    financeTransportReceiptRefetch: refetch,
    financeTransportReceiptLoading: isFetching,
  };
};
export const useFinanceReceipt = (args) => {
  const { data, refetch, isFetching } = useFinanceReceiptQuery(args.rid, {
    skip: args.skip,
  });
  return {
    financeReceipt: data,
    financeReceiptRefetch: refetch,
    financeReceiptLoading: isFetching,
  };
};

//

export const useFinanceAllFeeHeadMaster = (args) => {
  const { data, refetch, isFetching } = useFinanceAllFeeHeadMasterQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllFeeHeadMaster: data,
    financeAllFeeHeadMasterRefetch: refetch,
    financeAllFeeHeadMasterLoading: isFetching,
  };
};

export const useFinanceAddFeeHeadMaster = () => {
  const [financeAddFeeHeadMaste] = useFinanceAddFeeHeadMasterMutation();
  return [financeAddFeeHeadMaste];
};
export const useFinanceUpdateFeeHeadMaster = () => {
  const [financeUpdateFeeHeadMaster] = useFinanceUpdateFeeHeadMasterMutation();
  return [financeUpdateFeeHeadMaster];
};
export const useFinanceDeleteFeesCategory = () => {
  const [financeDeleteFeesCategory] = useFinanceDeleteFeesCategoryMutation();
  return [financeDeleteFeesCategory];
};

export const useFinanceAddFeesStructure = () => {
  const [financeAddFeesStructure] = useFinanceAddFeesStructureMutation();
  return [financeAddFeesStructure];
};

export const useFinanceFeeStructureDetail = (args) => {
  const { data, refetch, isFetching } = useFinanceFeeStructureDetailQuery(
    args.fsid,
    {
      skip: args.skip,
    }
  );
  return {
    financeFeeStructureDetail: data,
    financeFeeStructureDetailRefetch: refetch,
    financeFeeStructureDetailLoading: isFetching,
  };
};

export const useFinanceUpdateFeesStructure = () => {
  const [financeUpdateFeesStructure] = useFinanceUpdateFeesStructureMutation();
  return [financeUpdateFeesStructure];
};
export const useFinanceUpdateRetroFeesStructure = () => {
  const [financeUpdateRetroFeesStructure] =
    useFinanceUpdateRetroFeesStructureMutation();
  return [financeUpdateRetroFeesStructure];
};
export const useFinanceDeleteFeesStructure = () => {
  const [financeDeleteFeesStructure] = useFinanceDeleteFeesStructureMutation();
  return [financeDeleteFeesStructure];
};

export const useFinanceDeleteFeesHead = () => {
  const [financeDeleteFeesHead] = useFinanceDeleteFeesHeadMutation();
  return [financeDeleteFeesHead];
};

export const useFinanceAllExcel = (args) => {
  const { data, refetch, isFetching } = useFinanceAllExcelQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeAllExcel: data,
    financeAllExcelRefetch: refetch,
    financeAllExcelLoading: isFetching,
  };
};
export const useFinanceUpdateExcel = () => {
  const [financeUpdateExcel] = useFinanceUpdateExcelMutation();
  return [financeUpdateExcel];
};
export const useFinanceDeleteExcel = () => {
  const [financeDeleteExcel] = useFinanceDeleteExcelMutation();
  return [financeDeleteExcel];
};
export const useFinanceAddBank = () => {
  const [financeAddBank] = useFinanceAddBankMutation();
  return [financeAddBank];
};

export const useFinanceUpdateBank = () => {
  const [financeUpdateBank] = useFinanceUpdateBankMutation();
  return [financeUpdateBank];
};

export const useFinanceDeleteBank = () => {
  const [financeDeleteBank] = useFinanceDeleteBankMutation();
  return [financeDeleteBank];
};

export const useFinanceMasterDeposit = (args) => {
  const { data, refetch, isFetching } = useFinanceMasterDepositQuery(args.fid, {
    skip: args.skip,
  });
  return {
    financeMasterDeposit: data,
    financeMasterDepositRefetch: refetch,
    financeMasterDepositLoading: isFetching,
  };
};
export const useFinanceMasterDepositAll = (args) => {
  const { data, refetch, isFetching } = useFinanceMasterDepositAllQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeMasterDepositAll: data,
    financeMasterDepositAllRefetch: refetch,
    financeMasterDepositAllLoading: isFetching,
  };
};

export const useFinanceMarkRefundDeposit = () => {
  const [financeMarkRefundDeposit] = useFinanceMarkRefundDepositMutation();
  return [financeMarkRefundDeposit];
};
export const useFinanceAllDepositRefund = (args) => {
  const { data, refetch, isFetching } = useFinanceAllDepositRefundQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllDepositRefund: data,
    financeAllDepositRefundRefetch: refetch,
    financeAllDepositRefundLoading: isFetching,
  };
};

export const useFinanceAddModerator = () => {
  const [financeAddModerator] = useFinanceAddModeratorMutation();
  return [financeAddModerator];
};
export const useFinanceModerator = (args) => {
  const { data, refetch, isFetching } = useFinanceModeratorQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeModerator: data,
    financeModeratorRefetch: refetch,
    financeModeratorLoading: isFetching,
  };
};

export const useFinanceUpdateModerator = () => {
  const [financeUpdateModerator] = useFinanceUpdateModeratorMutation();
  return [financeUpdateModerator];
};
export const useFinanceDeleteModerator = () => {
  const [financeDeleteModerator] = useFinanceDeleteModeratorMutation();
  return [financeDeleteModerator];
};

export const useFinanceMarkAsSecondaryCategory = () => {
  const [financeMarkAsSecondaryCategory] =
    useFinanceMarkAsSecondaryCategoryMutation();
  return [financeMarkAsSecondaryCategory];
};
export const useFinanceAddIncome = () => {
  const [financeAddIncome] = useFinanceAddIncomeMutation();
  return [financeAddIncome];
};
export const useFinanceAddExpense = () => {
  const [financeAddExpense] = useFinanceAddExpenseMutation();
  return [financeAddExpense];
};
export const useFinanceAllExemption = (args) => {
  const { data, refetch, isFetching } = useFinanceAllExemptionQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeAllExemption: data,
    financeAllExemptionRefetch: refetch,
    financeAllExemptionLoading: isFetching,
  };
};

export const useFinanceAllSettlement = (args) => {
  const { data, refetch, isFetching } = useFinanceAllSettlementQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllSettlement: data,
    financeAllSettlementRefetch: refetch,
    financeAllSettlementLoading: isFetching,
  };
};

export const useFinanceAllTransaction = (args) => {
  const { data, refetch, isFetching } = useFinanceAllTransactionQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllTransaction: data,
    financeAllTransactionRefetch: refetch,
    financeAllTransactionLoading: isFetching,
  };
};
export const useFinanceAllFeesCategory = (args) => {
  const { data, refetch, isFetching } = useFinanceAllFeesCategoryQuery(
    args.fid,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllFeesCategory: data,
    financeAllFeesCategoryRefetch: refetch,
    financeAllFeesCategoryLoading: isFetching,
  };
};

export const useFinanceAddFeesCategory = () => {
  const [financeAddFeesCategory] = useFinanceAddFeesCategoryMutation();
  return [financeAddFeesCategory];
};
export const useFinanceAddExcelCategory = () => {
  const [financeAddExcelCategory] = useFinanceAddExcelCategoryMutation();
  return [financeAddExcelCategory];
};
export const useFinanceAddExcelStructure = () => {
  const [financeAddExcelStructure] = useFinanceAddExcelStructureMutation();
  return [financeAddExcelStructure];
};
export const useFinanceAddExcelFeeHead = () => {
  const [financeAddExcelFeeHead] = useFinanceAddExcelFeeHeadMutation();
  return [financeAddExcelFeeHead];
};
export const useFinanceStudentStatitics = () => {
  const [financeStudentStatitics] = useFinanceStudentStatiticsMutation();
  return [financeStudentStatitics];
};
export const useInstituteAllDepartment = (args) => {
  const { data, refetch, isFetching } = useInstituteAllDepartmentQuery(
    args.fid,
    {
      skip: args.skip,
    }
  );
  return {
    instituteAllDepartment: data,
    instituteAllDepartmentRefetch: refetch,
    instituteAllDepartmentLoading: isFetching,
  };
};
export const useFinanceAllInternalFee = (args) => {
  const { data, refetch, isFetching } = useFinanceAllInternalFeeQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllInternalFee: data,
    financeAllInternalFeeRefetch: refetch,
    financeAllInternalFeeLoading: isFetching,
  };
};
export const useFinanceAddInternalFees = () => {
  const [financeAddInternalFees] = useFinanceAddInternalFeesMutation();
  return [financeAddInternalFees];
};

export const useFinanceStudentStatisticsExport = () => {
  const [financeStudentStatisticsExport] =
    useFinanceStudentStatisticsExportMutation();
  return [financeStudentStatisticsExport];
};
export const useFinanceFeeStatitics = () => {
  const [financeFeeStatitics] = useFinanceFeeStatiticsMutation();
  return [financeFeeStatitics];
};

export const useFinanceAllFeeStructure = (args) => {
  const { data, refetch, isFetching } = useFinanceAllFeeStructureQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllFeeStructure: data,
    financeAllFeeStructureRefetch: refetch,
    financeAllFeeStructureLoading: isFetching,
  };
};

export const useFinanceOverallFeeStatistics = (args) => {
  const { data, refetch, isFetching } = useFinanceOverallFeeStatisticsQuery(
    args.fid,
    {
      skip: args.skip,
    }
  );
  return {
    fnanceOverallFeeStatistics: data,
    fnanceOverallFeeStatisticsRefetch: refetch,
    fnanceOverallFeeStatisticsLoading: isFetching,
  };
};

export const useOneStudentProfile = (args) => {
  const { data, refetch, isFetching } = useOneStudentProfileQuery(args.sid, {
    skip: args.skip,
  });
  return {
    oneStudentProfile: data,
    oneStudentProfileRefetch: refetch,
    oneStudentProfileLoading: isFetching,
  };
};

export const useOneStudentAdmissionFees = (args) => {
  const { data, refetch, isFetching } = useOneStudentAdmissionFeesQuery(
    args.sid,
    {
      skip: args.skip,
    }
  );
  return {
    oneStudentAdmissionFees: data,
    oneStudentAdmissionFeesRefetch: refetch,
    oneStudentAdmissionFeesLoading: isFetching,
  };
};

export const useOneStudentFeesStat = (args) => {
  const { data, refetch, isFetching } = useOneStudentFeesStatQuery(args.sid, {
    skip: args.skip,
  });
  return {
    oneStudentFeesStat: data,
    oneStudentFeesStatRefetch: refetch,
    oneStudentFeesStatLoading: isFetching,
  };
};

export const useOneStudentInternalFees = (args) => {
  const { data, refetch, isFetching } = useOneStudentInternalFeesQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    oneStudentInternalFees: data,
    oneStudentInternalFeesRefetch: refetch,
    oneStudentInternalFeesLoading: isFetching,
  };
};

export const useFinanceSendAllStudentMessage = () => {
  const [financeSendAllStudentMessage] =
    useFinanceSendAllStudentMessageMutation();
  return [financeSendAllStudentMessage];
};
export const useFinanceSendOneStudentMessage = () => {
  const [financeSendOneStudentMessage] =
    useFinanceSendOneStudentMessageMutation();
  return [financeSendOneStudentMessage];
};

export const useFinanceAllStudentMessageHistory = (args) => {
  const { data, refetch, isFetching } = useFinanceAllStudentMessageHistoryQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    financeAllStudentMessageHistory: data,
    financeAllStudentMessageHistoryRefetch: refetch,
    financeAllStudentMessageHistoryLoading: isFetching,
  };
};
export const useFinanceStudentGrChange = () => {
  const [financeStudentGrChange] = useFinanceStudentGrChangeMutation();
  return [financeStudentGrChange];
};
export const useFinanceAddScholarNumber = () => {
  const [financeAddScholarNumber] = useFinanceAddScholarNumberMutation();
  return [financeAddScholarNumber];
};

export const useFinanceDropStudentOneAdmissionFees = () => {
  const [financeDropStudentOneAdmissionFees] =
    useFinanceDropStudentOneAdmissionFeesMutation();
  return [financeDropStudentOneAdmissionFees];
};
export const useFinanceUpdateStudentFeeStructure = () => {
  const [financeUpdateStudentFeeStructure] =
    useFinanceUpdateStudentFeeStructureMutation();
  return [financeUpdateStudentFeeStructure];
};

export const useFinanceAllotScholarshipExcel = () => {
  const [financeAllotScholarshipExcel] =
    useFinanceAllotScholarshipExcelMutation();
  return [financeAllotScholarshipExcel];
};

export const useFinanceAllotScholarship = () => {
  const [financeAllotScholarship] = useFinanceAllotScholarshipMutation();
  return [financeAllotScholarship];
};

export const useFinanceAllotScholarshipNewAddFees = () => {
  const [financeAllotScholarshipNewAddFees] =
    useFinanceAllotScholarshipNewAddFeesMutation();
  return [financeAllotScholarshipNewAddFees];
};

export const useFinanceAdmissionStatics = (args) => {
  const { data, refetch, isFetching } = useFinanceAdmissionStaticsQuery(
    args.fid,
    {
      skip: args.skip,
    }
  );
  return {
    financeAdmissionStatics: data,
    financeAdmissionStaticsRefetch: refetch,
    financeAdmissionStaticsLoading: isFetching,
  };
};

///  Which moved after some time

// =========
export const useUniversalPlateformUser = (args) => {
  const { data, refetch, isFetching } = useUniversalPlateformUserQuery(args);
  return {
    universalPlateformUser: data,
    universalPlateformUserRefetch: refetch,
    universalPlateformUserLoading: isFetching,
  };
};
export const useDepartmentBatchAllClassMaster = (args) => {
  const { data, refetch, isFetching } = useDepartmentBatchAllClassMasterQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    departmentBatchAllClassMaster: data,
    departmentBatchAllClassMasterRefetch: refetch,
    departmentBatchAllClassMasterLoading: isFetching,
  };
};
export const useDepartmentAllBatch = (args) => {
  const { data, refetch, isFetching } = useDepartmentAllBatchQuery(args.did, {
    skip: args.skip,
  });
  return {
    departmentAllBatch: data,
    departmentAllBatchRefetch: refetch,
    departmentAllBatchLoading: isFetching,
  };
};

export const useInstituteAllStaff = (args) => {
  const { data, refetch, isFetching } = useInstituteAllStaffQuery(args.data, {
    skip: args.skip,
  });
  return {
    instituteAllStaff: data,
    instituteAllStaffRefetch: refetch,
    instituteAllStaffLoading: isFetching,
  };
};

export const useInstituteAllStudent = (args) => {
  const { data, refetch, isFetching } = useInstituteAllStudentQuery(args.data, {
    skip: args.skip,
  });
  return {
    instituteAllStudent: data,
    instituteAllStudentRefetch: refetch,
    instituteAllStudentLoading: isFetching,
  };
};
export const useDepartmentAllClassMaster = (args) => {
  const { data, refetch, isFetching } = useDepartmentAllClassMasterQuery(
    args.data,
    {
      skip: args.skip,
    }
  );
  return {
    departmentAllClassMaster: data,
    departmentAllClassMasterRefetch: refetch,
    departmentAllClassMasterLoading: isFetching,
  };
};

export const useUserAllStats = (args) => {
  const { data, refetch, isFetching } = useUserAllStatsQuery(args.uid, {
    skip: args.skip,
  });
  return {
    userAllStats: data,
    userAllStatsRefetch: refetch,
    userAllStatsLoading: isFetching,
  };
};
export const useInstituteAllStudentIdList = (args) => {
  const { data, refetch, isFetching } = useInstituteAllStudentIdListQuery(
    args.id,
    {
      skip: args.skip,
    }
  );
  return {
    instituteAllStudentIdList: data,
    instituteAllStudentIdListRefetch: refetch,
    instituteAllStudentIdListLoading: isFetching,
  };
};
