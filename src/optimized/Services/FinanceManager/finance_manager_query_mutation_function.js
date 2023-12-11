import { decryption } from "../Encryption/decrypt";
import { DELETE, PATCH, POST } from "../UrlConfig/MethodType";
// all of encrypted api only==========
export const financeDashboardMasterFunction = (builder) => {
  return builder.query({
    query: (data) => `/finance/${data.fid}/dashboard?mod_id=${data.mid}`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeBankDetailFilterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/bank/details?filter_by=${data.filter_by}&flow=${data.flow}`,
  });
};

export const donotFunction = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/ins/bank/query`,
  });
};

export const financeIncomeFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/income?page=${data.page ?? 1}&limit=${
        data.limit ?? 10
      }&search=${data.search}`,
    // keepUnusedDataFor: 0,
    providesTags: ["Finance_Income"],
    // providesTags: (result, error, args) => {
    //   console.info("result", ...result?.list);

    //   let rs = result
    //     ? [
    //         result?.list?.map(({ id }) => ({ type: "Finance_Income", id })),
    //         "Finance_Income",
    //       ]
    //     : ["Finance_Income"];
    //   console.info("result", result, rs, error, args);
    // },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      console.info(":meta", meta);
      let res = decryption(response?.encrypt);
      if (arg?.search)
        return {
          search: true,
          list: res?.allIncome,
        };
      else
        return {
          page: arg?.page,
          list: res?.allIncome,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeIncomeBalanceFunction = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/income/balance`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeIncomeDetailFunction = (builder) => {
  return builder.query({
    query: (income) => `/finance/${income}/income/detail`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeExpenseFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/dashboard/expense?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    providesTags: ["Finance_Expense"],
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      let res = decryption(response?.encrypt);
      if (arg?.search)
        return {
          search: true,
          list: res?.allIncome,
        };
      else
        return {
          page: arg?.page,
          list: res?.allIncome,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeExpenseBalanceFunction = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/expense/balance`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeExpenseDetailFunction = (builder) => {
  return builder.query({
    query: (expense) => `/finance/${expense}/expense/detail`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeRemainBalanceFunction = (builder) => {
  return builder.query({
    query: (finance) => `/finance/${finance}/dashboard/remain`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeFeeListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.finance}/remaining/fee/list?page=${data.page}&limit=${
        data.limit
      }&search=${data?.search ?? ""}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      let dencrypt = decryption(response?.encrypt);
      if (arg?.search)
        return {
          search: true,
          list: dencrypt?.list,
        };
      else
        return {
          page: arg?.page,
          list: dencrypt?.list,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAllBankFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/bank/account?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: decryption(response?.encrypt)?.all_accounts,
        };
      else
        return {
          page: arg?.page,
          list: decryption(response?.encrypt)?.all_accounts,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const financeOneBankDetailFunction = (builder) => {
  return builder.query({
    query: (bid) => `/finance/${bid}/one/bank/account`,
    providesTags: ["Finance_Bank"],
    transformResponse: (response) => decryption(response?.encrypt),
  });
};
export const financeTransportReceiptFunction = (builder) => {
  return builder.query({
    query: (rid) => `/finance/${rid}/one/transport/receipt`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

export const financeReceiptFunction = (builder) => {
  return builder.query({
    query: (rid) => `/finance/${rid}/one/receipt`,
    transformResponse: (response) => decryption(response?.encrypt),
  });
};

// all of not encrypted api============
export const financeAllFeeHeadMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/master/head/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_master,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_master,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAddFeeHeadMasterFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/master/new`,
      method: POST,
      body: data.addFeeHead,
    }),
  });
};

export const financeUpdateFeeHeadMasterFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/master/${data.fmid}/edit/query`,
      method: PATCH,
      body: data.updateFeeHead,
    }),
  });
};

export const financeDeleteFeesCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.cid}/fee/category/delete/query`,
      method: DELETE,
    }),
  });
};
export const financeAllFeeStructureFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/depart/${data.did}/all/fee/structure?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filterBy}&batch_by=${data.batchBy}`,

    // keepUnusedDataFor: 0,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_structures,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_structures,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const financeAddFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // url: `/finance/${data.fid}/fee/structure/new/${data.did}`,
      url: `/finance/${data.fid}/fee/structure/new?flow=${data.flow}`,
      method: "POST",
      body: data.createFeesStructure,
    }),
  });
};
export const financeFeeStructureDetailFunction = (builder) => {
  return builder.query({
    query: (fsid) => `/finance/one/${fsid}/structure`,
  });
};
export const financeUpdateFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/structure/${data.sid}/retro/query?flow=${data.flow}`,
      method: PATCH,
      body: data.updateStructure,
    }),
  });
};
export const financeUpdateRetroFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.sid}/existing/retro/update/structure?flow=${data.flow}`,
      method: PATCH,
      body: data.updateStructure,
    }),
  });
};
export const financeDeleteFeesStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/fee/structure/${data.sid}/retro/delete?flow=${data.flow}`,
      method: DELETE,
    }),
  });
};

export const financeDeleteFeesHeadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/master/${data.fhid}/destroy/query`,
      method: DELETE,
    }),
  });
};

export const financeAddIncomeFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/income?user_query=${data.user_query ?? ""}`,
      method: POST,
      body: data?.fData,
    }),
    invalidatesTags: ["Finance_Income"],
  });
};

export const financeAddExpenseFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data?.fid}/expense?is_inventory=${data.is_inventory}&user_query=${data.user_query}`,
      method: POST,
      body: data?.fData,
    }),
    invalidatesTags: ["Finance_Expense"],
  });
};
export const financeAllExcelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.id}/all/export/excel/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_excel,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_excel,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeUpdateExcelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.id}/export/excel/${data.xlsxId}/edit`,
      method: PATCH,
      body: data.excelUpdate,
    }),
  });
};

export const financeDeleteExcelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.id}/export/excel/${data.xlsxId}/destroy/query`,
      method: DELETE,
    }),
  });
};

export const financeAddBankFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/add/bank/query?flow=${data.flow}&flow_id=${data.flow_id}`,
      method: POST,
      body: data.bankDetails,
    }),
    invalidatesTags: ["Finance_Bank"],
  });
};

export const financeUpdateBankFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.bid}/bank/account/query?delete_pic=${
        data.delete_pic ?? ""
      }`,
      method: PATCH,
      body: data.bankDetails,
    }),
    invalidatesTags: ["Finance_Bank"],
  });
};

export const financeDeleteBankFunction = (builder) => {
  return builder.mutation({
    query: (bid) => ({
      url: `/finance/${bid}/bank/account/destroy/query`,
      method: DELETE,
    }),
    invalidatesTags: ["Finance_Bank"],
  });
};

export const financeMasterDepositFunction = (builder) => {
  return builder.query({
    query: (fid) => `/finance/${fid}/master/deposit/query`,
    transformResponse: (response) => {
      return response?.master;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeMasterDepositAllFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fmid}/master/all/deposit/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_students,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_students,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const financeMarkRefundDepositFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fmid}/refund/deposit/${data.sid}/query`,
      method: PATCH,
      body: data.refundDeposit,
    }),
  });
};
export const financeAllDepositRefundFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/master/all/refund/deposit/history?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_receipts,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_receipts,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAddModeratorFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.fid}/finance/moderator`,
      method: POST,
      body: data.addModerator,
    }),
  });
};

export const financeModeratorFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/role/permission/${data.fid}/all/finance/moderator?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_mods,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_mods,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeUpdateModeratorFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/update/finance/mod/${data.modId}`,
      method: PATCH,
      body: data.updateModerator,
    }),
  });
};
export const financeDeleteModeratorFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.fid}/destroy/finance/mod/${data.modId}`,
      method: DELETE,
    }),
  });
};
export const financeMarkAsSecondaryCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/select/${data.fid}/secondary/structure/query`,
      method: PATCH,
      body: data.secondaryData,
    }),
  });
};
export const financeAllExemptionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/exempt/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_exempt,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_exempt,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAllSettlementFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admin/repay/query/institute/${data.fid}?page=${data?.page}&limit=${data?.limit}&search=${data?.search}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.repay,
        };
      else
        return {
          page: arg?.page,
          list: response?.repay,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const financeAllTransactionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/pay/history/to?uid=${data.uid}&page=${data.page}&limit=${
        data.limit
      }&filter=${data.filter}&search=${data?.search ?? ""}`,
    // keepUnusedDataFor: 0,

    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.history,
        };
      else
        return {
          page: arg?.page,
          list: response?.history,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAllFeesCategoryFunction = (builder) => {
  return builder.query({
    query: (fid) => `/finance/${fid}/all/fee/category/query`,
    transformResponse: (response) => {
      return response?.all_fees_format;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAddFeesCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/fee/category/new`,
      method: POST,
      body: data.createCategory,
    }),
  });
};

export const financeAddExcelCategoryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/query/fee/category/${data.fid}`,
      method: PATCH,
      body: data.excelFile,
    }),
  });
};
export const financeAddExcelStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.did}/query/fee/structure/${data.fid}`,
      method: PATCH,
      body: data.excelFile,
    }),
  });
};

export const financeAddExcelFeeHeadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/query/fee/head/master/${data.fid}`,
      method: PATCH,
      body: data.excelFile,
    }),
  });
};

export const financeStudentStatiticsFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/by/student/statistics/${data.bid}/query`,
      method: PATCH,
    }),
  });
};

export const instituteAllDepartmentFunction = (builder) => {
  return builder.query({
    query: (fid) => `/finance/${fid}/all/department/query`,
    transformResponse: (response) => {
      return response?.all_department;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeAllInternalFeeFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/all/internal/fee/${data.fid}?page=${data.page}&limit=${
        data.limit
      }&search=${data?.search ?? ""}`,
    // keepUnusedDataFor: 0,
    providesTags: ["Finance_Internal_Fees"],
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_fees,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_fees,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const financeAddInternalFeesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/internal/fee/${data.fid}`,
      method: POST,
      body: data.inernalBody,
    }),
    invalidatesTags: ["Finance_Internal_Fees"],
  });
};
export const financeStudentStatisticsExportFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/by/student/statistics/excel/export/query`,
      method: PATCH,
      body: data.exportBody,
    }),
  });
};

export const financeFeeStatiticsFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/by/fees/statistics/${data.fid}/query?module_type=${data.moduleType}`,
      method: PATCH,
      body: data.statisticsBody,
    }),
  });
};

export const financeOverallFeeStatisticsFunction = (builder) => {
  return builder.query({
    query: (fid) => `/feed/filter/by/overall/fees/statistics/${fid}/query`,
    // providesTags: ["Finance_Internal_Fees"],
    transformResponse: (response) => {
      return decryption(response?.encrypt);
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

//
// for student profile related

///////

export const oneStudentProfileFunction = (builder) => {
  return builder.query({
    query: (sid) => `/ins/student/${sid}`,
    // transformResponse: (response) => {
    //   return response?.classMaster;
    // },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const oneStudentFeesStatFunction = (builder) => {
  return builder.query({
    query: (sid) => `/fees/student/${sid}`,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const oneStudentAdmissionFeesFunction = (builder) => {
  return builder.query({
    query: (sid) => `/admission/${sid}/fees`,

    transformResponse: (response) => {
      let respon = decryption(response?.encrypt);
      return respon;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const oneStudentInternalFeesFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/fees/student/${data.sid}/internal/fees/query?page=${data.page}&limit=${data.limit}`,
    // keepUnusedDataFor: 0,
    transformResponse: (response) => response?.all_internal,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    merge: (currentCache, incomingData) => {
      currentCache.push(...incomingData);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeSendAllStudentMessageFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/send/filtered/message/query?id=${data?.id ?? ""}`,
      method: PATCH,
      body: data.sendMessage,
    }),
  });
};
export const financeSendOneStudentMessageFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/send/one/student/filtered/message/query?id=${
        data?.id ?? ""
      }`,
      method: PATCH,
      body: data.sendMessage,
    }),
  });
};
export const financeAllStudentMessageHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/extra/all/filtered/message/${data.id}/query?page=${data.page}&limit=${data.limit}&flow=${data.flow}`,
    // keepUnusedDataFor: 0,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.all_message,
        };
      else
        return {
          page: arg?.page,
          list: response?.all_message,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const financeStudentGrChangeFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/edit/${data.sid}/gr/unique/query`,
      method: PATCH,
      body: data.grNumberContent,
    }),
  });
};
export const financeAddScholarNumberFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rcid}/add/scholar/number/query`,
      method: PATCH,
      body: data.scholarData,
    }),
  });
};
export const financeDropStudentOneAdmissionFeesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rid}/drop/fees/${data.sid}/query`,
      method: PATCH,
    }),
  });
};

export const financeUpdateStudentFeeStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/retro/structure/${data.appId}/one/student/${data.sid}/query`,
      method: PATCH,
      body: data.updateStrucutre,
    }),
  });
};

export const financeAllotScholarshipExcelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.aid}/query/scholarship/${data.scid}`,
      method: PATCH,
      body: data.excelFile,
    }),
  });
};

export const financeAllotScholarshipFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/paid/government/grant/fee/${data.sid}/student/${data.appId}`,
      method: POST,
      body: data.governmentData,
    }),
  });
};

export const financeAllotScholarshipNewAddFeesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/paid/already/card/government/grant/fee/${data.sid}/student/${data.appId}`,
      method: POST,
      body: data.governmentData,
    }),
  });
};
export const financeAllotScholarshipHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.sid}/all/allotted/candidates/government?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const financeMismtachScholarshipHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.fid}/all/mismatch/excel/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const financeAllotScholarshipExcelExportFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/scholar/data/history/${data.id}/query`,
      method: PATCH,
      body: data.governmentData,
    }),
  });
};
export const financeAllotScholarshipExcelHistoryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/${data.id}/all/export/excel/array?page=${data.page}&limit=${
        data.limit
      }&search=${data.search}&filter=${data.filter ?? "Scholarship"}`,
  });
};
export const financeAdmissionStaticsFunction = (builder) => {
  return builder.query({
    query: (fid) =>
      `/feed/filter/by/overall/admission/fees/statistics/${fid}/query`,
    transformResponse: (response) => {
      let resp = decryption(response.encrypt);
      return resp;
    },
  });
};
// export const financeBankAddByInstituteFunction = (builder) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/finance/add/bank/details/${data.id}`,
//       method: "POST",
//       body: data.passbook,
//     }),
//   });
// };

// export const financeBankUpdateByInstituteFunction = (builder) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/finance/bank/details/${data.id}/update`,
//       method: "PATCH",
//       body: data.editPassbook,
//     }),
//   });
// };

// export const financeBankDeleteByInstituteFunction = (builder) => {
//   return builder.mutation({
//     query: (id) => ({
//       url: `/finance/ins/bank/${id}`,
//       method: "POST",
//     }),
//   });
// };

//=======finance other inter-related api which move when optimized.======

export const universalPlateformUserFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/manage/admin/all/user?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    transformResponse: (response) => {
      if (response?.search) {
        return {
          search: true,
          list: response?.user,
        };
      } else {
        return response?.user;
      }
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData?.list;
      else currentCache.push(...incomingData);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const departmentBatchAllClassMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/exam/${data.did}/classmaster/${data.bid}?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    transformResponse: (response) => {
      if (response?.search) {
        return {
          search: true,
          list: response?.classMaster,
        };
      } else {
        return response?.classMaster;
      }
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData?.list;
      else currentCache.push(...incomingData);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const departmentAllClassMasterFunction = (builder) => {
  return builder.query({
    query: (data) => `/ins/${data.id}/departmentmasterclass-detail/${data.did}`,
    transformResponse: (response) => {
      return response?.classMaster;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const departmentAllBatchFunction = (builder) => {
  return builder.query({
    query: (did) => `/ins/${did}/one-batch`,
    transformResponse: (response) => {
      return response?.allBatch;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const instituteAllStaffFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/search/${data.id}/staff?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    transformResponse: (response) => {
      if (response?.search) {
        return {
          search: true,
          list: response?.staff,
        };
      } else {
        return response?.staff;
      }
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData?.list;
      else currentCache.push(...incomingData);
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};

export const instituteAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data.id}/approve-student/list?page=${data.page}&limit=${data.limit}&search=${data.search}`,
    // keepUnusedDataFor: 0,
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    transformResponse: (response, meta, arg) => {
      if (arg?.search)
        return {
          search: true,
          list: response?.studentIns,
        };
      else
        return {
          page: arg?.page,
          list: response?.studentIns,
        };
    },
    merge: (currentCache, incomingData) => {
      if (incomingData?.search) return incomingData;
      else if (incomingData?.page === 1) return incomingData;
      else return void currentCache?.list?.push(...incomingData?.list);
    },

    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const instituteAllStudentIdListFunction = (builder) => {
  return builder.query({
    query: (id) => `/extra/all/student/unique/${id}/query`,
    transformResponse: (response) => {
      if (response?.search) {
        return {
          search: true,
          list: response?.studentIns,
        };
      } else {
        return response?.studentIns;
      }
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
export const userAllStatsFunction = (builder) => {
  return builder.query({
    query: (uid) => `/user/${uid}/all/stats/query`,
    transformResponse: (response) => {
      let resop = decryption(response.encrypt);
      return resop;
    },
    serializeQueryArgs: ({ endpointName }) => {
      return endpointName;
    },
    forceRefetch({ currentArg, previousArg }) {
      return currentArg !== previousArg;
    },
  });
};
