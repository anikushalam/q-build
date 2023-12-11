import {
  useFetchFinanceDetailQuery,
  useAllHistoryQuery,
  useAddEmployeePayrollMutation,
  useAddPayrollMutation,
  useGetOneEmpDetailAndOneSalaryHistoryQuery,
  useOneStaffAttendanceQuery,
  useMerchantIdQuery,
  useInventoryListQuery,
  useOneInventoryExpneseListQuery,
  useGetBankByFinanceQuery,
  usePaymentModeUpdateFinanceMutation,
  useAddBankByFinanceMutation,
  useGetAllFeesCategoryQuery,
  useAddFeesCategoryMutation,
  useGetAllFeesStructureQuery,
  useAddFeesStructureMutation,
  useGetAllExemptionQuery,
  useGetAllGovernmentScholarshipQuery,
  useOneFeeStructureDetailQuery,
  useAllAdmissionFeeFinanceQuery,
  useAdmissionFeeActionFinanceMutation,
  useAllLibraryFeeFinanceQuery,
  useLibraryFeeActionFinanceMutation,
  useAdmissionGovernmentGrantFinanceMutation,
  useGetAllFeeHeadMasterQuery,
  useAddFeeHeadMasterMutation,
  useUpdateFeeHeadMasterMutation,
  useDeleteFeesCategoryMutation,
  useUpdateFeesStructureMutation,
  useUpdateRetroFeesStructureMutation,
  useDeleteFeesStructureMutation,
  useDeleteFeesHeadMutation,
  useAddExcelCategoryByFinanceMutation,
  useAddExcelStructureByFinanceMutation,
  useAddExcelFeeHeadByFinanceMutation,
  useFilterTransactionHistoryQuery,
  useGetAllExcelByFinanceQuery,
  useUpdateExcelByFinanceMutation,
  useDeleteExcelByFinanceMutation,
  useGetAllBankByFinanceQuery,
  useDeleteBankByFinanceMutation,
  useUpdateBankByFinanceMutation,
  useGetOneBankByFinanceQuery,
  useGetMasterDepositByFinanceQuery,
  useGetMasterDepositAllByFinanceQuery,
  useRefundDepositByFinanceMutation,
  useGetAllDepositRefundByFinanceQuery,
  useAddModeratorByFinanceMutation,
  useGetModeratorByFinanceQuery,
  useUpdateModeratorByFinanceMutation,
  useDeleteModeratorByFinanceMutation,
  useFilterFeeHeadReceiptMutation,
  useGetAllStandardInstituteQuery,
  useGetPayrollHeadListQuery,
  useAddPayrollHeadMutation,
  useGetOnePayrollHeadMonthQuery,
  useGetOnePayrollHeadEmployeeQuery,
  usePayrollAccountHeadPaymentMutation,
  useGetAllSalaryHistoryQuery,
  useAllHostelFeeFinanceQuery,
  useHostelFeeActionFinanceMutation,
  useAllTransportFeeFinanceQuery,
  useTransportFeeActionFinanceMutation,
  useMarkAsSecondaryCategoryMutation,
  useFilterHostelFeeHeadReceiptQuery,
  useFinanceTransportReceiptQuery,
} from "../../services/financeAPI";

export const useFinanceDetailManager = (args) => {
  const { data: financeDetailManager, refetch: financeDetailManagerRefetch } =
    useFetchFinanceDetailQuery(args.data, { skip: args.skip });
  return { financeDetailManager, financeDetailManagerRefetch };
};

export const useFinanceAllHistory = (args) => {
  const { data: financeAllHistory, refetch: financeAllHistoryRefetch } =
    useAllHistoryQuery(args.data, { skip: args.skip });
  return { financeAllHistory, financeAllHistoryRefetch };
};

export const useAddEmployeePayroll = () => {
  const [addEmployeePayroll] = useAddEmployeePayrollMutation();
  return [addEmployeePayroll];
};

export const useAddPayroll = () => {
  const [addPayroll] = useAddPayrollMutation();
  return [addPayroll];
};

export const useFinanceOneEmployeeDetailHistory = (args) => {
  const {
    data: financeOneEmployeeDetailHistory,
    refetch: financeOneEmployeeDetailHistoryRefetch,
  } = useGetOneEmpDetailAndOneSalaryHistoryQuery(args.data, {
    skip: args.skip,
  });
  return {
    financeOneEmployeeDetailHistory,
    financeOneEmployeeDetailHistoryRefetch,
  };
};

export const useOneStaffAttendance = (args) => {
  const { data: oneStaffAttendance, refetch: oneStaffAttendanceRefetch } =
    useOneStaffAttendanceQuery(args.data, {
      skip: args.skip,
    });
  return {
    oneStaffAttendance,
    oneStaffAttendanceRefetch,
  };
};

export const useMerchantId = (args) => {
  const { data: merchantId, refetch: merchantIdRefetch } = useMerchantIdQuery(
    args.id,
    {
      skip: args.skip,
    }
  );
  return {
    merchantId,
    merchantIdRefetch,
  };
};

export const useInventoryList = (args) => {
  const { data: inventoryList, refetch: inventoryListRefetch } =
    useInventoryListQuery(args.data, { skip: args.skip });
  return { inventoryList, inventoryListRefetch };
};

export const useOneInventoryExpneseList = (args) => {
  const { data: inventoryExpneseList, refetch: inventoryExpneseListRefetch } =
    useOneInventoryExpneseListQuery(args.data, { skip: args.skip });
  return { inventoryExpneseList, inventoryExpneseListRefetch };
};

export const useGetBankByFinance = (args) => {
  const { data: getBankByFinance, refetch: getBankByFinanceRefetch } =
    useGetBankByFinanceQuery(args.data, { skip: args.skip });
  return { getBankByFinance, getBankByFinanceRefetch };
};

export const usePaymentModeUpdateFinance = () => {
  const [paymentModeUpdateFinance] = usePaymentModeUpdateFinanceMutation();
  return [paymentModeUpdateFinance];
};
export const useAddBankByFinance = () => {
  const [addBankByFinance] = useAddBankByFinanceMutation();
  return [addBankByFinance];
};
export const useGetAllFeesCategory = (args) => {
  const { data: getAllFeesCategory, refetch: getAllFeesCategoryRefetch } =
    useGetAllFeesCategoryQuery(args.fid, { skip: args.skip });
  return { getAllFeesCategory, getAllFeesCategoryRefetch };
};

export const useAddFeesCategory = () => {
  const [addFeesCategory] = useAddFeesCategoryMutation();
  return [addFeesCategory];
};

export const useGetAllFeesStructure = (args) => {
  const { data: getAllFeesStructure, refetch: getAllFeesStructureRefetch } =
    useGetAllFeesStructureQuery(args.data, { skip: args.skip });
  return { getAllFeesStructure, getAllFeesStructureRefetch };
};

export const useAddFeesStructure = () => {
  const [addFeesStructure] = useAddFeesStructureMutation();
  return [addFeesStructure];
};

export const useGetAllExemption = (args) => {
  const { data: getAllExemption, refetch: getAllExemptionRefetch } =
    useGetAllExemptionQuery(args.data, { skip: args.skip });
  return { getAllExemption, getAllExemptionRefetch };
};

export const useGetAllGovernmentScholarship = (args) => {
  const {
    data: getAllGovernmentScholarship,
    refetch: getAllGovernmentScholarshipRefetch,
  } = useGetAllGovernmentScholarshipQuery(args.data, { skip: args.skip });
  return { getAllGovernmentScholarship, getAllGovernmentScholarshipRefetch };
};

export const useOneFeeStructureDetail = (args) => {
  const { data: oneFeeStructureDetail, refetch: oneFeeStructureDetailRefetch } =
    useOneFeeStructureDetailQuery(args.fsid, { skip: args.skip });
  return { oneFeeStructureDetail, oneFeeStructureDetailRefetch };
};

export const useAllAdmissionFeeFinanceManager = (args) => {
  const {
    data: allAdmissionFeeFinance,
    refetch: allAdmissionFeeFinanceRefetch,
  } = useAllAdmissionFeeFinanceQuery(args.data, { skip: args.skip });
  return { allAdmissionFeeFinance, allAdmissionFeeFinanceRefetch };
};

export const useAdmissionFeeActionFinance = () => {
  const [admissionFeeActionFinance] = useAdmissionFeeActionFinanceMutation();
  return [admissionFeeActionFinance];
};

export const useAllLibraryFeeFinance = (args) => {
  const { data: allLibraryFeeFinance, refetch: allLibraryFeeFinanceRefetch } =
    useAllLibraryFeeFinanceQuery(args.data, { skip: args.skip });
  return { allLibraryFeeFinance, allLibraryFeeFinanceRefetch };
};

export const useLibraryFeeActionFinance = () => {
  const [libraryFeeActionFinance] = useLibraryFeeActionFinanceMutation();
  return [libraryFeeActionFinance];
};

export const useAdmissionGovernmentGrantFinance = () => {
  const [admissionGovernmentGrantFinance] =
    useAdmissionGovernmentGrantFinanceMutation();
  return [admissionGovernmentGrantFinance];
};

export const useGetAllFeeHeadMaster = (args) => {
  const { data: getAllFeeHeadMaster, refetch: getAllFeeHeadMasterRefetch } =
    useGetAllFeeHeadMasterQuery(args.data, { skip: args.skip });
  return { getAllFeeHeadMaster, getAllFeeHeadMasterRefetch };
};

export const useAddFeeHeadMaster = () => {
  const [addFeeHeadMaster] = useAddFeeHeadMasterMutation();
  return [addFeeHeadMaster];
};
export const useUpdateFeeHeadMaster = () => {
  const [updateFeeHeadMaster] = useUpdateFeeHeadMasterMutation();
  return [updateFeeHeadMaster];
};

export const useDeleteFeesCategory = () => {
  const [deleteFeesCategory] = useDeleteFeesCategoryMutation();
  return [deleteFeesCategory];
};
export const useUpdateFeesStructure = () => {
  const [updateFeesStructure] = useUpdateFeesStructureMutation();
  return [updateFeesStructure];
};
export const useUpdateRetroFeesStructure = () => {
  const [updateRetroFeesStructure] = useUpdateRetroFeesStructureMutation();
  return [updateRetroFeesStructure];
};
export const useDeleteFeesStructure = () => {
  const [deleteFeesStructure] = useDeleteFeesStructureMutation();
  return [deleteFeesStructure];
};
export const useDeleteFeesHead = () => {
  const [deleteFeesHead] = useDeleteFeesHeadMutation();
  return [deleteFeesHead];
};

export const useAddExcelCategoryByFinance = () => {
  const [addExcelCategoryByFinance] = useAddExcelCategoryByFinanceMutation();
  return [addExcelCategoryByFinance];
};
export const useAddExcelStructureByFinance = () => {
  const [addExcelStructureByFinance] = useAddExcelStructureByFinanceMutation();
  return [addExcelStructureByFinance];
};
export const useAddExcelFeeHeadByFinance = () => {
  const [addExcelFeeHeadByFinance] = useAddExcelFeeHeadByFinanceMutation();
  return [addExcelFeeHeadByFinance];
};

export const useFilterTransactionHistory = (args) => {
  const {
    data: filterTransactionHistory,
    refetch: filterTransactionHistoryRefetch,
  } = useFilterTransactionHistoryQuery(args.data, { skip: args.skip });
  return { filterTransactionHistory, filterTransactionHistoryRefetch };
};
export const useGetAllExcelByFinance = (args) => {
  const { data: getAllExcelByFinance, refetch: getAllExcelByFinanceRefetch } =
    useGetAllExcelByFinanceQuery(args.data, { skip: args.skip });
  return { getAllExcelByFinance, getAllExcelByFinanceRefetch };
};

export const useUpdateExcelByFinance = () => {
  const [updateExcelByFinance] = useUpdateExcelByFinanceMutation();
  return [updateExcelByFinance];
};

export const useDeleteExcelByFinance = () => {
  const [deleteExcelByFinance] = useDeleteExcelByFinanceMutation();
  return [deleteExcelByFinance];
};

export const useGetAllBankByFinance = (args) => {
  const { data: getAllBankByFinance, refetch: getAllBankByFinanceRefetch } =
    useGetAllBankByFinanceQuery(args.data, { skip: args.skip });
  return { getAllBankByFinance, getAllBankByFinanceRefetch };
};

export const useGetOneBankByFinance = (args) => {
  const { data: getOneBankByFinance, refetch: getOneBankByFinanceRefetch } =
    useGetOneBankByFinanceQuery(args.bid, { skip: args.skip });
  return { getOneBankByFinance, getOneBankByFinanceRefetch };
};

export const useDeleteBankByFinance = () => {
  const [deleteBankByFinance] = useDeleteBankByFinanceMutation();
  return [deleteBankByFinance];
};

export const useUpdateBankByFinance = () => {
  const [updateBankByFinance] = useUpdateBankByFinanceMutation();
  return [updateBankByFinance];
};

export const useGetMasterDepositByFinance = (args) => {
  const {
    data: getMasterDepositByFinance,
    refetch: getMasterDepositByFinanceRefetch,
  } = useGetMasterDepositByFinanceQuery(args.fid, { skip: args.skip });
  return { getMasterDepositByFinance, getMasterDepositByFinanceRefetch };
};

export const useGetMasterDepositAllByFinance = (args) => {
  const {
    data: getMasterDepositAllByFinance,
    refetch: getMasterDepositAllByFinanceRefetch,
  } = useGetMasterDepositAllByFinanceQuery(args.data, { skip: args.skip });
  return { getMasterDepositAllByFinance, getMasterDepositAllByFinanceRefetch };
};

export const useRefundDepositByFinance = () => {
  const [refundDepositByFinance] = useRefundDepositByFinanceMutation();
  return [refundDepositByFinance];
};

export const useGetAllDepositRefundByFinance = (args) => {
  const {
    data: getAllDepositRefundByFinance,
    refetch: getAllDepositRefundByFinanceRefetch,
  } = useGetAllDepositRefundByFinanceQuery(args.data, { skip: args.skip });
  return { getAllDepositRefundByFinance, getAllDepositRefundByFinanceRefetch };
};

export const useGetModeratorByFinance = (args) => {
  const { data: getModeratorByFinance, refetch: getModeratorByFinanceRefetch } =
    useGetModeratorByFinanceQuery(args.data, { skip: args.skip });
  return { getModeratorByFinance, getModeratorByFinanceRefetch };
};

export const useAddModeratorByFinance = () => {
  const [addModeratorByFinance] = useAddModeratorByFinanceMutation();
  return [addModeratorByFinance];
};

export const useUpdateModeratorByFinance = () => {
  const [updateModeratorByFinance] = useUpdateModeratorByFinanceMutation();
  return [updateModeratorByFinance];
};

export const useDeleteModeratorByFinance = () => {
  const [deleteModeratorByFinance] = useDeleteModeratorByFinanceMutation();
  return [deleteModeratorByFinance];
};

export const useFilterFeeHeadReceipt = () => {
  const [filterFeeHeadReceipt] = useFilterFeeHeadReceiptMutation();
  return [filterFeeHeadReceipt];
};

export const useGetAllStandardInstitute = (args) => {
  const {
    data: getAllStandardInstitute,
    refetch: getAllStandardInstituteRefetch,
  } = useGetAllStandardInstituteQuery(args.id, { skip: args.skip });
  return { getAllStandardInstitute, getAllStandardInstituteRefetch };
};

export const useGetPayrollHeadList = (args) => {
  const { data: getPayrollHeadList, refetch: getPayrollHeadListRefetch } =
    useGetPayrollHeadListQuery(args.data, { skip: args.skip });
  return { getPayrollHeadList, getPayrollHeadListRefetch };
};

export const useAddPayrollHead = () => {
  const [addPayrollHead] = useAddPayrollHeadMutation();
  return [addPayrollHead];
};

export const useGetOnePayrollHeadMonth = (args) => {
  const {
    data: getOnePayrollHeadMonth,
    refetch: getOnePayrollHeadMonthRefetch,
  } = useGetOnePayrollHeadMonthQuery(args.data, { skip: args.skip });
  return { getOnePayrollHeadMonth, getOnePayrollHeadMonthRefetch };
};
export const useGetOnePayrollHeadEmployee = (args) => {
  const {
    data: getOnePayrollHeadEmployee,
    refetch: getOnePayrollHeadEmployeeRefetch,
  } = useGetOnePayrollHeadEmployeeQuery(args.data, { skip: args.skip });
  return { getOnePayrollHeadEmployee, getOnePayrollHeadEmployeeRefetch };
};

export const usePayrollAccountHeadPayment = () => {
  const [payrollAccountHeadPayment] = usePayrollAccountHeadPaymentMutation();
  return [payrollAccountHeadPayment];
};

export const useGetPayrollSalaryHistoryList = (args) => {
  const {
    data: getPayrollSalaryHistoryList,
    refetch: getPayrollSalaryHistoryListRefetch,
  } = useGetAllSalaryHistoryQuery(args.fid, { skip: args.skip });
  return { getPayrollSalaryHistoryList, getPayrollSalaryHistoryListRefetch };
};

export const useAllHostelFeeFinance = (args) => {
  const { data: allHostelFeeFinance, refetch: allHostelFeeFinanceRefetch } =
    useAllHostelFeeFinanceQuery(args.data, { skip: args.skip });
  return { allHostelFeeFinance, allHostelFeeFinanceRefetch };
};

export const useHostelFeeActionFinance = () => {
  const [hostelFeeActionFinance] = useHostelFeeActionFinanceMutation();
  return [hostelFeeActionFinance];
};

export const useAllTransportFeeFinance = (args) => {
  const {
    data: allTransportFeeFinance,
    refetch: allTransportFeeFinanceRefetch,
  } = useAllTransportFeeFinanceQuery(args.data, { skip: args.skip });
  return { allTransportFeeFinance, allTransportFeeFinanceRefetch };
};

export const useTransportFeeActionFinance = () => {
  const [transportFeeActionFinance] = useTransportFeeActionFinanceMutation();
  return [transportFeeActionFinance];
};
export const useMarkAsSecondaryCategory = () => {
  const [markAsSecondaryCategory] = useMarkAsSecondaryCategoryMutation();
  return [markAsSecondaryCategory];
};

export const useFilterHostelFeeHeadReceipt = (args) => {
  const {
    data: filterHostelFeeHeadReceipt,
    refetch: filterHostelFeeHeadReceiptRefetch,
  } = useFilterHostelFeeHeadReceiptQuery(args.data, { skip: args.skip });
  return { filterHostelFeeHeadReceipt, filterHostelFeeHeadReceiptRefetch };
};
export const useFinanceTransportReceipt = (args) => {
  const {
    data: financeTransportReceipt,
    refetch: financeTransportReceiptRefetch,
  } = useFinanceTransportReceiptQuery(args.rid, { skip: args.skip });
  return { financeTransportReceipt, financeTransportReceiptRefetch };
};
