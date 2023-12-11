export const activateFinance = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/ins/${data.id}/finance/query`,
      method: "POST",
      body: data.fActivate,
    }),
  });
};

export const editFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/edit/staff/finance/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};

export const fetchFinance = (builder) => {
  return builder.query({
    query: (data) => `/finance/${data.fid}/dashboard?mod_id=${data.mod_id}`,
  });
};

export const uploadBank = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/add/bank/details/${data.id}`,
      method: "POST",
      body: data.passbook,
    }),
  });
};

export const uploadEditBank = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/bank/details/${data.id}/update`,
      method: "PATCH",
      body: data.editPassbook,
    }),
  });
};

export const removeBankDetail = (builder) => {
  return builder.mutation({
    query: (id) => ({
      url: `/finance/ins/bank/${id}`,
      method: "POST",
    }),
  });
};

export const paymentDetail = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/ins/bank/query`,
  });
};

export const remainBalance = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/remain`,
  });
};

export const dueBalance = (builder) => {
  return builder.query({
    query: (data) =>
      `/admin/repay/query/institute/${data.info.fid}?page=${data.info?.page}&limit=${data.info?.limit}`,
  });
};

export const remainStudentList = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.finance}/remaining/fee/list?page=${data.page}&limit=${
        data.limit
      }&search=${data?.search ?? ""}`,
  });
};

export const submissionRequest = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/request/class`,
  });
};

export const acceptQuery = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/class/${data?.cid}/fee/${data?.fiid}/submit`,
      method: "POST",
      body: data,
    }),
  });
};

export const rejectQuery = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/class/${data?.cid}/fee/${data?.fiid}/incorrect`,
      method: "POST",
      body: data,
    }),
  });
};

export const acceptArray = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/submit/class`,
  });
};

export const rejectArray = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/reject/class`,
  });
};

export const allIncome = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/income?page=${data.page}&limit=${data.limit}`,
  });
};

export const allIBalance = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/income/balance`,
  });
};

export const oneIncome = (builder) => {
  return builder.query({
    query: (income) => `/finance/${income}/income/detail`,
  });
};

export const addIncome = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/income?user_query=${data.user_query}`,
      method: "POST",
      body: data?.fData,
    }),
  });
};

export const allExpense = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/expense?page=${data.page}&limit=${data.limit}`,
  });
};

export const allEBalance = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/expense/balance`,
  });
};

export const oneExpense = (builder) => {
  return builder.query({
    query: (expense) => `/finance/${expense}/expense/detail`,
  });
};

export const addExpense = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/expense?is_inventory=${data.is_inventory}&user_query=${data.user_query}`,
      method: "POST",
      body: data?.fData,
    }),
  });
};

export const salHistory = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/sal/history`,
  });
};

export const oneEmpAndOneSalary = (builder) => {
  return builder.query({
    query: (emp) =>
      `/finance/${emp?.eid}/one/emp/detail?type=${emp?.type}&month=${emp?.month}`,
  });
};

export const allEmp = (builder) => {
  return builder.query({
    query: (finance) =>
      `/finance/${finance?.fid}/emp/all?page=${finance?.page}&limit=${finance?.limit}`,
  });
};

export const allEmpStaff = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/all/staff/array`,
  });
};

export const addEmployeePayrollFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/add/emp/${data.sid}`,
      method: "POST",
      body: data.employeePayroll,
    }),
  });
};
export const allHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/pay/history/to?uid=${data.uid}&page=${data.page}&limit=${
        data.limit
      }&filter=${data.filter}&search=${data?.search ?? ""}`,
  });
};

export const addPayrollFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/add/payroll/${data.eid}`,
      method: "POST",
      body: data.addPayroll,
    }),
  });
};

export const oneStaffAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/attendance/staff/onemonth/${data.sid}?month=${data.month}&year=${data.year}`,
  });
};

export const merchantIdFunction = (builder) => {
  return builder.query({
    query: (id) => `/pay/merchant/author/${id}`,
  });
};

export const inventoryListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/inventory/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneInventoryExpneseListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/one/inventory/${data.inid}/query?page=${data.page}&limit=${data.limit}`,
  });
};
export const getBankByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/bank/details?filter_by=${data.filter_by}&flow=${data.flow}`,
  });
};

export const paymentModeUpdateFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/update/payment/mode`,
      method: "PATCH",
      body: data.paymentModeUpdate,
    }),
  });
};

export const getAllFeesCategoryFunction = (builder) => {
  return builder.query({
    query: (fid) => `/finance/${fid}/all/fee/category/query`,
  });
};

export const addFeesCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/category/new`,
      method: "POST",
      body: data.createCategory,
    }),
  });
};

export const getAllFeesStructureFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/depart/${data.did}/all/fee/structure?page=${data.page}&limit=${
        data.limit
      }&filter_by=${data.filterBy}&batch_by=${data.batch_by ?? ""}`,
  });
};

export const addFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // url: `/finance/${data.fid}/fee/structure/new/${data.did}`,
      url: `/finance/${data.fid}/fee/structure/new?flow=${data.flow}`,
      method: "POST",
      body: data.createFeesStructure,
    }),
  });
};

export const getAllExemptionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/exempt/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const getAllGovernmentScholarshipFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/government/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneFeeStructureDetailFunction = (builder) => {
  return builder.query({
    query: (fsid) => `/finance/one/${fsid}/structure`,
  });
};

export const allAdmissionFeeFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/cash/flow/admission/query?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}`,
  });
};

export const admissionFeeActionFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/admission/${data.aid}/submit/${data.rid}/status`,
      method: "POST",
      body: data.admissionAction,
    }),
  });
};

export const allLibraryFeeFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/cash/flow/library/query?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}`,
  });
};

export const libraryFeeActionFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/library/${data.lid}/submit/${data.rid}/status`,
      method: "POST",
      body: data.libraryAction,
    }),
  });
};

export const admissionGovernmentGrantFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/paid/government/grant/fee/${data.sid}/student/${data.appId}`,
      method: "POST",
      body: data.governmentData,
    }),
  });
};

export const getAllFeeHeadMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/master/head/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const addFeeHeadMasterFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/master/new`,
      method: "POST",
      body: data.addFeeHead,
    }),
  });
};

export const updateFeeHeadMasterFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/master/${data.fmid}/edit/query`,
      method: "PATCH",
      body: data.updateFeeHead,
    }),
  });
};

export const deleteFeesCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.cid}/fee/category/delete/query`,
      method: "DELETE",
    }),
  });
};

export const updateFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/structure/${data.sid}/retro/query?flow=${data.flow}`,
      method: "PATCH",
      body: data.updateStructure,
    }),
  });
};
export const updateRetroFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.sid}/existing/retro/update/structure?flow=${data.flow}`,
      method: "PATCH",
      body: data.updateStructure,
    }),
  });
};
export const deleteFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/structure/${data.sid}/retro/delete?flow=${data.flow}`,
      method: "DELETE",
    }),
  });
};

export const deleteFeesHeadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/master/${data.fhid}/destroy/query`,
      method: "DELETE",
    }),
  });
};

export const addExcelCategoryByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/query/fee/category/${data.fid}`,
      method: "PATCH",
      body: data.excelFile,
    }),
  });
};

export const addExcelStructureByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.did}/query/fee/structure/${data.fid}`,
      method: "PATCH",
      body: data.excelFile,
    }),
  });
};

export const addExcelFeeHeadByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/query/fee/head/master/${data.fid}`,
      method: "PATCH",
      body: data.excelFile,
    }),
  });
};

export const filterTransactionHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/feed/filter/transaction/history/${data.id}?tab_flow=${data.tab_flow}&timeline=${data.timeline}&timeline_content=${data.timeline_content}&from=${data.from}&to=${data.to}&fee_type=${data.fee_type}&fee_mode=${data.fee_mode}`,
  });
};

export const getAllExcelByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.id}/all/export/excel/array?page=${data.page}&limit=${data.limit}`,
  });
};
export const updateExcelByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.id}/export/excel/${data.xlsxId}/edit`,
      method: "PATCH",
      body: data.excelUpdate,
    }),
  });
};

export const deleteExcelByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.id}/export/excel/${data.xlsxId}/destroy/query`,
      method: "DELETE",
    }),
  });
};

export const getAllBankByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/bank/account?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const addBankByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/add/bank/query?flow=${data.flow}&flow_id=${data.flow_id}`,
      method: "POST",
      body: data.bankDetails,
    }),
  });
};

export const updateBankByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.bid}/bank/account/query?delete_pic=${data.delete_pic}`,
      method: "PATCH",
      body: data.bankDetails,
    }),
  });
};

export const deleteBankByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (bid) => ({
      url: `/finance/${bid}/bank/account/destroy/query`,
      method: "DELETE",
    }),
  });
};

export const getOneBankByFinanceFunction = (builder) => {
  return builder.query({
    query: (bid) => `/finance/${bid}/one/bank/account`,
  });
};

export const getMasterDepositByFinanceFunction = (builder) => {
  return builder.query({
    query: (fid) => `/finance/${fid}/master/deposit/query`,
  });
};

export const getMasterDepositAllByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fmid}/master/all/deposit/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const refundDepositByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fmid}/refund/deposit/${data.sid}/query`,
      method: "PATCH",
      body: data.refundDeposit,
    }),
  });
};
export const getAllDepositRefundByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/master/all/refund/deposit/history?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const addModeratorByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.fid}/finance/moderator`,
      method: "POST",
      body: data.addModerator,
    }),
  });
};

export const getModeratorByFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/role/permission/${data.fid}/all/finance/moderator?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateModeratorByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/update/finance/mod/${data.modId}`,
      method: "PATCH",
      body: data.updateModerator,
    }),
  });
};
export const deleteModeratorByFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.fid}/destroy/finance/mod/${data.modId}`,
      method: "DELETE",
    }),
  });
};

export const filterFeeHeadReceiptFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/heads/by/${data.fid}/receipt/query?all_depart=${data.all_depart}&batch_status=${data.batch_status}&timeline=${data.timeline}&timeline_content=${data.timeline_content}&from=${data.from}&to=${data.to}&bank=${data.bank}`,
      method: "PATCH",
      body: data.pendingData,
    }),
  });
};

export const getAllStandardInstituteFunction = (builder) => {
  return builder.query({
    query: (id) => `/hostel/${id}/all/classmaster/query`,
  });
};

export const getPayrollHeadListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/payroll/master?page=${data.page}&limit=${data.limit}&search=${data.search}&filter=${data.filter}`,
  });
};

export const addPayrollHeadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/add/payroll/master/query`,
      method: "POST",
      body: data.addPayroll,
    }),
  });
};

export const getOnePayrollHeadMonthFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/one/payroll/master/${data.pmid}/all/monthwise?page=${data.page}&limit=${data.limit}`,
  });
};
export const getOnePayrollHeadEmployeeFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/one/payroll/master/one/monthwise/${data.mwid}/all/emp?page=${data.page}&limit=${data.limit}`,
  });
};

export const payrollAccountHeadPaymentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/one/payroll/master/${data.mwid}/mark/pay/expense`,
      method: "PATCH",
      body: data.accountHead,
    }),
  });
};

export const allHostelFeeFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/cash/flow/hostel/query?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}`,
  });
};

export const hostelFeeActionFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/hostel/${data.hid}/submit/${data.rid}/status`,
      method: "POST",
      body: data.hostelAction,
    }),
  });
};

export const allTransportFeeFinanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/cash/flow/transport/query?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}`,
  });
};

export const transportFeeActionFinanceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/transport/${data.tid}/submit/${data.rid}/status`,
      method: "POST",
      body: data.transportAction,
    }),
  });
};

export const markAsSecondaryCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/select/${data.fid}/secondary/structure/query`,
      method: "PATCH",
      body: data.secondaryData,
    }),
  });
};

export const filterHostelFeeHeadReceiptFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/feed/filter/heads/by/${data.fid}/receipt/hostel/query?fsid=${data.fsid}&depart=${data.depart}&timeline=${data.timeline}&timeline_content=${data.timeline_content}&from=${data.from}&to=${data.to}`,
  });
};

export const financeTransportReceiptFunction = (builder) => {
  return builder.query({
    query: (rid) => `/finance/${rid}/one/transport/receipt`,
  });
};
