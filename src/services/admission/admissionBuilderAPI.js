export const activateAdmission = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/ins/${data.id}/admission/query`,
      method: "POST",
      body: data.fActivate,
    }),
  });
};

export const editAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/edit/staff/admission/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};

export const fetchAdmission = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/dashboard/query?mod_id=${data.mod_id}`,
  });
};

export const fetchOngoing = (builder) => {
  return builder.query({
    query: (ad) =>
      `/admission/${ad.aid}/all/ongoing/application?page=${ad.page}&limit=${ad.limit}`,
  });
};

export const fetchCompleted = (builder) => {
  return builder.query({
    query: (ad) =>
      `/admission/${ad.aid}/all/completed/application/detail?page=${ad.page}&limit=${ad.limit}`,
  });
};

export const atInstituteSearchApplication = (builder) => {
  return builder.query({
    query: (ins) =>
      `/admission/${ins.id}/application/list/array?page=${ins.page}&limit=${ins.limit}`,
  });
};

export const userApply = (builder) => {
  return builder.mutation({
    query: (apply) => ({
      url: `/admission/${apply.uid}/user/${apply.aid}/apply`,
      method: "POST",
      body: apply.apply_data,
    }),
  });
};

export const newApplication = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/new/application`,
      method: "POST",
      body: data.new_Data,
    }),
  });
};

export const fetchRequest = (builder) => {
  return builder.query({
    query: (req) =>
      `/admission/${req.id}/request/application?page=${req.page}&limit=${req.limit}&search=${req.search}`,
  });
};

export const fetchSelect = (builder) => {
  return builder.query({
    query: (sel) =>
      `/admission/${sel.id}/selected/application?page=${sel.page}&limit=${sel.limit}&search=${sel.search}`,
  });
};

export const fetchConfirm = (builder) => {
  return builder.query({
    query: (con) =>
      `/admission/${con.id}/confirmed/application?page=${con.page}&limit=${con.limit}&search=${con.search}`,
  });
};

export const fetchConfirmAll = (builder) => {
  return builder.query({
    query: (con) =>
      `/admission/${con.id}/confirmed/application/all/payload?search=${con.search}`,
  });
};

export const userSelect = (builder) => {
  return builder.mutation({
    query: (select) => ({
      url: `/admission/${select.sid}/student/${select.aid}/select`,
      method: "POST",
      body: select.selectApplicant,
    }),
  });
};

export const userCancelApplication = (builder) => {
  return builder.mutation({
    query: (select) => ({
      url: `/admission/${select.sid}/student/${select.aid}/cancel/app`,
      method: "POST",
    }),
  });
};

export const userSelectStatusMode = (builder) => {
  return builder.mutation({
    query: (mode) => ({
      url: `/admission/${mode.sid}/student/pay/mode/${mode.aid}/apply/status/${mode.statusId}`,
      method: "POST",
      body: mode.confirmPayload,
    }),
  });
};

export const userConfirm = (builder) => {
  return builder.mutation({
    query: (confirm) => ({
      url: `/admission/${confirm.sid}/student/${confirm.aid}/pay/offline/confirm?receipt_status=${confirm?.receipt_status}`,
      method: "POST",
      body: confirm.confirm_data,
    }),
  });
};

export const userCancel = (builder) => {
  return builder.mutation({
    query: (cancel) => ({
      url: `/admission/${cancel.sid}/student/${cancel.aid}/pay/refund`,
      method: "POST",
      body: cancel.cancel_data,
    }),
  });
};

export const fetchClasses = (builder) => {
  return builder.query({
    query: (classes) =>
      `/admission/${classes.aid}/application/class/${classes.bid}?page=${classes.page}&search=${classes.search}&limit=${classes.limit}`,
  });
};

export const newClassAllot = (builder) => {
  return builder.mutation({
    query: (allot) => ({
      url: `/admission/student/${allot.aid}/allot/class/${allot.cid}`,
      method: "POST",
      body: allot.allotClass,
    }),
  });
};

export const markComplete = (builder) => {
  return builder.mutation({
    query: (aid) => ({
      url: `/admission/${aid}/application/complete`,
      method: "PATCH",
    }),
  });
};

//depreciated
export const oneStudentFee = (builder) => {
  return builder.query({
    query: (view) => `/admission/${view}/student/view/fee`,
  });
};

export const paidRemainFee = (builder) => {
  return builder.mutation({
    query: (paid) => ({
      url: `/admission/${paid.aid}/paid/remaining/fee/${paid.sid}/student/${paid.appId}?receipt_status=${paid?.receipt_status}`,
      method: "POST",
      body: paid.remain_data,
    }),
  });
};

export const oneApplication = (builder) => {
  return builder.query({
    query: (one) => `/admission/${one}/application/query`,
  });
};

export const allDepartment = (builder) => {
  return builder.query({
    query: (depart) => `/admission/${depart}/all/department`,
  });
};

export const cancelStatusMode = (builder) => {
  return builder.mutation({
    query: (cancel) => ({
      url: `/admission/${cancel.status}/status/cancel/app/${cancel.appId}/student/${cancel.sid}`,
      method: "PATCH",
    }),
  });
};

export const studentAdmission = (builder) => {
  return builder.query({
    query: (student) => `/admission/${student}/fees`,
  });
};

export const collectApplicantDocsFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/student/${data.aid}/collect/docs`,
      method: "POST",
    }),
  });
};

export const admissionBatchListFunction = (builder) => {
  return builder.query({
    query: (aid) => `/admission/${aid}/application/batch`,
  });
};

export const admissionAllottedListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/allotted/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const admissionCancelledListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/cancelled/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const admissionClassMasterListFunction = (builder) => {
  return builder.query({
    query: (did) => `/admission/${did}/all/classmaster`,
  });
};

export const addEnquiryFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${
        data.aid
      }/new/inquiry?flow_status=${`By Admission Admin`}`,
      method: "POST",
      body: data.enquiry,
    }),
  });
};

export const getAllEnquiryListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/inquiry?status=${data.status}&page=${data.page}&limit=${data.limit}`,
  });
};

export const getOneEnquiryFunction = (builder) => {
  return builder.query({
    query: (eid) => `/admission/${eid}/one/inquiry`,
  });
};

export const oneEnquiryActionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.eid}/inquiry/remark`,
      method: "PATCH",
      body: data.enquiryRemark,
    }),
  });
};

export const directJoinFormAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/direct/confirm/join/${data.phoneNumber}/apply/${data.aid}?existingUser=${data.uid}`,
      method: "POST",
      body: data.addStudent,
    }),
  });
};

export const submitAmountToFinanaceFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.aid}/admission/request`,
      method: "POST",
      body: data.submitAmount,
    }),
  });
};

export const getAccountWithNumberFunction = (builder) => {
  return builder.query({
    query: (phoneKey) => `/auth/select/account?phoneKey=${phoneKey}`,
  });
};

export const editFeeStructureFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/student/${data.sid}/edit/structure`,
      method: "PATCH",
      body: data.editStructure,
    }),
  });
};

export const confirmStudentModeByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/select/student/mode/${data.sid}`,
      method: "POST",
    }),
  });
};
export const rejectStudentModeByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/cancel/select/student/${data.sid}`,
      method: "POST",
    }),
  });
};

export const getReceiptByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/receipts/by?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}&over_filter=${data.over_filter}&search=${data.search}`,
  });
};

export const receiptActionByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // when student side offline flow then use it
      // url: `/admission/${data.aid}/one/receipts/${data.rid}/status?reqId=${data.reqId}&status=${data.status}`,
      url: `/admission/${data.aid}/one/receipts/${data.rid}/status/decheque/query?reqId=${data.reqId}&status=${data.status}`,
      method: "PATCH",
      body: data.receiptAction,
    }),
  });
};

export const reApplyReceiptByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // when student side offline flow then use it
      // url: `/admission/${data.sid}/re/apply/receipts/${data.rid}`,
      url: `/admission/${data.sid}/re/apply/receipts/${data.rid}/decheque/query`,
      method: "PATCH",
      body: data.receiptReapply,
    }),
  });
};

export const getFeeReceiptDetailFunction = (builder) => {
  return builder.query({
    query: (rid) => `/finance/${rid}/one/receipt`,
  });
};

export const getDocumentByAdmissionFuction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/document/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const addDocumentByAdmissionFuction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/add/document/flow`,
      method: "POST",
      body: data.document,
    }),
  });
};

export const updateDocumentByAdmissionFuction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/edit/document/flow`,
      method: "PATCH",
      body: data.editDocument,
    }),
  });
};
export const deleteDocumentByAdmissionFuction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/delete/document/${data.did}`,
      method: "DELETE",
    }),
  });
};

export const refundAmountByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/paid/remaining/fee/${data.sid}/student/${data.appId}/refund/by`,
      method: "PATCH",
      body: data.refundData,
    }),
  });
};

export const getRefundByAdmissionFuction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/refund/array?page=${data.page}&limit=${
        data.limit
      }&search=${data?.search ?? ""}`,
  });
};

export const updateRemarkByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.applicatonCardId}/remark/query`,
      method: "PATCH",
      body: data.remarkByAdmission,
    }),
  });
};

export const exportFilterDataByAdmissionFuction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/feed/filter/pending/fee/${data.aid}?gender=${data.gender}&category=${data.caste}&is_all=${data.is_all}&all_depart=${data.all_depart}&batch_status=${data.batch_status}`,
      method: "PATCH",
      body: data.pendingData,
    }),
  });
};

export const getAllExcelByAdmissionAdminFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/export/excel/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const payAdmissionFeeByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/go/offline/receipt/${data.appId}`,
      method: "PATCH",
      body: data.offlinePay,
    }),
  });
};

export const updateExcelByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/export/excel/${data.xlsxId}/edit`,
      method: "PATCH",
      body: data.excelUpdate,
    }),
  });
};

export const deleteExcelByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/export/excel/${data.xlsxId}/destroy/query`,
      method: "DELETE",
    }),
  });
};

export const updateDocumentByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/edit/document/flow`,
      method: "PATCH",
      body: data.documentUpdate,
    }),
  });
};

export const deleteDocumentByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/delete/document/${data.docId}`,
      method: "DELETE",
    }),
  });
};

export const addModeratorByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.aid}/new/app/mod?active_tab=${
        data?.active_tab ?? ""
      }`,
      method: "POST",
      body: data.addModerator,
    }),
  });
};

export const getModeratorByAdmissionAdminFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/role/permission/${data.aid}/all/moderator?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateModeratorByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/update/app/mod/${data.modId}?active_tab=${
        data?.active_tab ?? ""
      }`,
      method: "PATCH",
      body: data.updateModerator,
    }),
  });
};
export const deleteModeratorByAdmissionAdminFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/role/permission/${data.aid}/destroy/app/mod/${data.modId}`,
      method: "DELETE",
    }),
  });
};

export const admissionGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (aid) => `/site/info/admission/${aid}`,
  });
};

export const admissionUpdateSiteInfoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/site/info/admission/${data.aid}`,
      method: `PATCH`,
      body: data.updateSiteInfo,
    }),
  });
};
///////////////

export const getScholarshipListAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/scholarship?page=${data.page}&limit=${data.limit}&status=${data.status}`,
  });
};

export const addScholarshipAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/new/scholarship`,
      method: `POST`,
      body: data.addScholarship,
    }),
  });
};

export const getOneScholarshipAdmissionFunction = (builder) => {
  return builder.query({
    query: (sid) => `/admission/${sid}/scholarship/query`,
  });
};

export const getOneScholarshipAllCandidateAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.sid}/all/allotted/candidates/government?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const oneSchloarshipActionAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/status/query`,
      method: `PATCH`,
      // body: data.updateSiteInfo,
    }),
  });
};

export const addScholarshipFundCorpusAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/scholarship/new/corpus/${data.sid}?user_query=${data.user_query}`,
      method: `POST`,
      body: data.addCorpus,
    }),
  });
};

export const addMoreScholarshipFundCorpusAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/new/income/${data.fcid}?user_query=${data.user_query}`,
      method: `POST`,
      body: data.addCorpus,
    }),
  });
};
export const getScholarshipFundCorpusAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.sid}/one/fund/corpus/history?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateApplicationByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/edit/${data.appId}`,
      method: `PATCH`,
      body: data.updateApplication,
    }),
  });
};
export const deleteApplicationByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/destroy/${data.appId}`,
      method: `DELETE`,
    }),
  });
};

export const forgetPasswordProtectionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/reset/new/password/${data.faid}?flow=${data.flow}`,
      method: `PATCH`,
      body: data.forgetPassword,
    }),
  });
};

export const passwordProtectionToggleFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/enable/password/protection/${data.faid}?flow=${data.flow}`,
      method: `PATCH`,
    }),
  });
};

export const passwordProtectionLoginFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/login/designation`,
      method: `POST`,
      body: data.loginPassword,
    }),
  });
};

export const updateFeeStructureByAppliationWiseFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/retro/structure/${data.appId}/one/student/${data.sid}/query`,
      method: `PATCH`,
      body: data.updateStrucutre,
    }),
  });
};

export const getRefundedListByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/refunded/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const directJoinFormWithPayAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.uid}/user/${data.aid}/apply/direct/online`,
      method: `POST`,
      body: data.apply_data,
    }),
  });
};
export const collectSetOffAdmissionFeesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rcid}/set/off/${data.sid}/query`,
      method: `PATCH`,
      body: data.setOffData,
    }),
  });
};

export const admissionDocsActionByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/student/${data.aid}/docs/confirm/status/${data.stId}?flow=${data.flow}`,
      method: `PATCH`,
    }),
  });
};

export const scholarShipExcelByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.aid}/query/scholarship/${data.scid}`,
      method: `PATCH`,
      body: data.excelFile,
    }),
  });
};

export const scholarShipExcelByInstituteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.id}/query/scholarship/gr/batch`,
      method: `PATCH`,
      body: data.excelFile,
    }),
  });
};

export const addScholarNumberAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rcid}/add/scholar/number/query`,
      method: `PATCH`,
      body: data.scholarData,
    }),
  });
};

export const studentDepartmentFeesFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/fees/student/${data.sid}/internal/fees/query?page=${data.page}&limit=${data.limit}`,
  });
};
export const studentBacklogFeesFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/fees/student/${data.sid}/backlog/fees/query?page=${data.page}&limit=${data.limit}`,
  });
};
export const internalFeeReceiptFunction = (builder) => {
  return builder.query({
    query: (rid) => `/fees/student/one/receipt/${rid}/query`,
  });
};

export const dropAdmissionFeesCardByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rid}/drop/fees/${data.sid}/query`,
      method: `PATCH`,
    }),
  });
};
export const allApplicationByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/filter/by/${data.id}/three/function/query?departId=${
        data.departId
      }&masterId=${data.masterId}&batchId=${data?.batchId ?? ""}`,
  });
  // &batchId=${data.batchId}
};

export const addNewFeesByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/add/fees/card/query`,
      method: `POST`,
      body: data.addFees,
    }),
  });
};

export const collectNewAddFeesByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/paid/already/card/remaining/fee/${data.sid}/student/${data.appId}?receipt_status=${data?.receipt_status}`,
      method: `POST`,
      body: data.remain_data,
    }),
  });
};

export const governmentCollectNewAddFeesByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/paid/already/card/government/grant/fee/${data.sid}/student/${data.appId}`,
      method: `POST`,
      body: data.governmentData,
    }),
  });
};

export const admissionReminderFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/trigger/alarm?alarm_mode=${data.alarm_mode}&content=${data.content}`,
      method: "POST",
      body: data.reminderData,
    }),
  });
};

export const admissionInstallmentEditFeesByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/access/fees/editable/query?flow=${data.flow}`,
      method: "PATCH",
      body: data.editAccess,
    }),
  });
};

// for filter
export const getPendingCustomFilterByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/pending/custom/filter/${data?.aid}/query?flow=${data.flow}`,
  });
};

export const getBatchStandardWithMultipleDepartmentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/pending/custom/filter/master/batch/query`,
      method: `PATCH`,
      body: data.departmentList,
    }),
  });
};

export const fetchRemainingArray = (builder) => {
  return builder.query({
    query: (ad) =>
      `/admission/${ad.aid}/all/remaining/applicable/array?page=${
        ad.page
      }&limit=${ad.limit}&search=${ad.search}&flow=${
        ad.flow ?? "Applicable_Fees_Query"
      }`,
  });
  // return builder.mutation({
  //   query: (data) => ({
  //     url: `/admission/${data.aid}/all/remaining/array?page=${
  //       data.page
  //     }&limit=${data.limit}&search=${data.search}&flow=${
  //       data.flow ?? "All_Pending_Fees_Query"
  //     }`,
  //     method: `PATCH`,
  //     body: data.filterData,
  //   }),
  // });
};

export const fetchAdmissionRemainingArray = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/all/remaining/array?page=${
        data.page
      }&limit=${data.limit}&search=${data.search}&flow=${
        data.flow ?? "All_Pending_Fees_Query"
      }&filter_by=${data.filter_by}`,
      method: `PATCH`,
      body: data.filterData,
    }),
  });
};

export const getDailyCollectionByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/feed/filter/by/date/collection/${data?.appId}/query?valid_date=${data.valid_date}`,
  });
};

/// edit student Gr number request
export const editStudentGrNumberFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/edit/${data.sid}/gr/unique/query`,
      method: `PATCH`,
      body: data.grNumberContent,
    }),
  });
};

/// admission for revert back
export const admissionRevertBackSelectedToApplicationFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/student/${data.aid}/revert/back/select/query`,
      method: `POST`,
      body: data.revertData,
    }),
  });
};

/// edit student Gr number request
export const admissionRevertBackDocsToSelectedFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.sid}/student/${data.aid}/collect/revert/back/docs/query`,
      method: `POST`,
      body: data.revertData,
    }),
  });
};

export const removeFeesInstallmentCardFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.rid}/card/removal/query?raid=${data.raid}`,
      method: `PATCH`,
    }),
  });
};

export const transferApplicatToOtherApplicationFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/transfer/apps/query`,
      method: `PATCH`,
      body: data.transferApplicantData,
    }),
  });
};

export const existStudentFeesExcelByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/extra/excel/to/json/${data.aid}/fees/query`,
      method: `PATCH`,
      body: data.excelFile,
    }),
  });
};

export const studentValidaForApplicationByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.uid}/user/${data.aid}/apply/valid/query`,
      method: `POST`,
    }),
  });
};

export const studentBankValidationByAdmissionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/${data.fid}/valid/bank/query/${data.aid}?flow=${data?.flow}`,
      method: `PATCH`,
    }),
  });
};

export const markCompleteToOngoingApplicationFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/application/incomplete`,
      method: `PATCH`,
    }),
  });
};

export const getReminderHistoryByAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/extra/all/filtered/alarm/${data.id}/query?page=${data.page}&limit=${data.limit}`,
  });
};
export const getOsReminderStudentListFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admission/${data.aid}/all/outstanding/query`,
      method: `PATCH`,
      body: data.pendingData,
    }),
  });
};

export const studentScholarshipNumberDublicateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/finance/valid/scholar/query?num=${data.num}`,
      method: `PATCH`,
    }),
  });
};
