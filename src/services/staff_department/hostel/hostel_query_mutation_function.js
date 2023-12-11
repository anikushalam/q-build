const hostelBaseUrl = "/api/v1/hostel";
const baseUrl = "/api/v1";

export const hostelDetailFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/dashboard/query?mod_id=${data.mod_id}`,
  });
};

export const hostelActivateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/ins/${data.id}/hostel/query`,
      method: `POST`,
      body: data.fActivate,
    }),
  });
};

export const hostelEidtActivateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/staff/hostel/manager/staff/${data.osid}?nsid=${data.nsid}`,
      method: "PATCH",
    }),
  });
};
export const hostelCoverUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/${data.hid}/hostel/cover`,
      method: "PATCH",
      body: data.uploadFile,
    }),
  });
};
export const hostelUnitCoverUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/${data.huid}/hostel/unit/cover`,
      method: "PATCH",
      body: data.uploadFile,
    }),
  });
};
export const hostelRoomCoverUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/${data.hrid}/hostel/room/cover`,
      method: "PATCH",
      body: data.uploadFile,
    }),
  });
};

export const getHostelFeeStructureListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/fee/structure?page=${data.page}&limit=${
        data.limit
      }&filter_by=${data?.filter_by ?? ""}&master_by=${data?.master_by ?? ""}`,
  });
};

export const getHostelWardenListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/wardens?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getHostelUnitListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/hostel/unit?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const addHostelUnitFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/hostel/unit`,
      method: "POST",
      body: data.addHostel,
    }),
  });
};

export const getHostelUnitDetailFunction = (builder) => {
  return builder.query({
    query: (huid) => `${hostelBaseUrl}/${huid}/one/hostel/unit/query`,
  });
};

export const addRoomHostelUnitFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.huid}/one/hostel/unit/new/room`,
      method: "POST",
      body: data.addRoom,
    }),
  });
};
export const getRoomListHostelUnitFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/one/hostel/unit/all/room?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRoomDetailHostelFunction = (builder) => {
  return builder.query({
    query: (hrid) => `${hostelBaseUrl}/${hrid}/one/hostel/room/query`,
  });
};

export const getHostelRulesFunction = (builder) => {
  return builder.query({
    query: (hid) => `${hostelBaseUrl}/${hid}/rules/query`,
  });
};
export const addHostelRulesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/existing/rules/regulation`,
      method: "PATCH",
      body: data.addRules,
    }),
  });
};

export const editHostelRulesFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/existing/rules/regulation/${data.rid}`,
      method: "PATCH",
      body: data.editRules,
    }),
  });
};
export const getHostelFormFunction = (builder) => {
  return builder.query({
    query: (hid) => `${hostelBaseUrl}/${hid}/form/query`,
  });
};

export const updateHostelFormFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/existing/form/query`,
      method: "PATCH",
      body: data.formSetting,
    }),
  });
};
export const getHostelHostelitesListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/hostelities?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}&id=${data.id}`,
  });
};

export const getHostelApplyApplicationListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.id}/application/list/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const userApplyHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.uid}/user/${data.aid}/apply`,
      method: "POST",
      body: data.studentData,
    }),
  });
};

export const getOngoingApplicationListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/ongoing/application?page=${data.page}&limit=${data.limit}`,
  });
};

export const getCompletedApplicationListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/completed/application?page=${data.page}&limit=${data.limit}`,
  });
};
export const createHostelApplicationFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/application`,
      method: "POST",
      body: data.new_Data,
    }),
  });
};

export const getApplicationRequestedListFunction = (builder) => {
  return builder.query({
    query: (req) =>
      `/api/v1/admission/${req.id}/request/application?page=${req.page}&limit=${req.limit}&search=${req.search}`,
  });
};

export const getApplicationSelectedListFunction = (builder) => {
  return builder.query({
    query: (sel) =>
      `/api/v1/admission/${sel.id}/selected/application?page=${sel.page}&limit=${sel.limit}&search=${sel.search}`,
  });
};

export const getApplicationConfirmListFunction = (builder) => {
  return builder.query({
    query: (con) =>
      `/api/v1/admission/${con.id}/confirmed/application?page=${con.page}&limit=${con.limit}&search=${con.search}`,
  });
};

export const cancelApplicantRequestByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.aid}/cancel/app`,
      method: "POST",
    }),
  });
};

export const acceptApplicantRequestByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.aid}/select`,
      method: "POST",
      body: data.selectApplicant,
    }),
  });
};

export const getHostelAppliciontDetailFunction = (builder) => {
  return builder.query({
    query: (aid) => `${hostelBaseUrl}/${aid}/application/query`,
  });
};

export const completeHostelApplicationFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.aid}/application/complete`,
      method: "PATCH",
    }),
  });
};

export const confirmStudentModeByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.aid}/select/student/mode/${data.sid}`,
      method: "POST",
    }),
  });
};
export const rejectStudentModeByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.aid}/cancel/select/student/${data.sid}`,
      method: "POST",
    }),
  });
};
export const editStructureByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.aid}/student/${data.sid}/edit/structure`,
      method: "PATCH",
      body: data.editStructure,
    }),
  });
};
export const collectStudentFeesByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${
        data.aid
      }/pay/offline/confirm?receipt_status=${data?.receipt_status ?? ""}`,
      method: "POST",
      body: data.confirm_data,
    }),
  });
};

export const refundStudentFeesByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.aid}/pay/refund`,
      method: "POST",
      body: data.cancel_data,
    }),
  });
};

export const allotBedByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/student/${data.aid}/allot/bed?huid=${data.huid}&hrid=${data.hrid}&id=${data?.id}`,
      method: "POST",
      body: data.allot_bed,
    }),
  });
};

export const applicantHostelRemainingFeeFuntcion = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/paid/remaining/fee/${data.sid}/student/${data.appId}?receipt_status=${data?.receipt_status}`,
      method: "POST",
      body: data.remain_data,
    }),
  });
};

export const refundAmountByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/paid/remaining/fee/${data.sid}/student/${data.appId}/refund/by`,
      method: "PATCH",
      body: data.refundData,
    }),
  });
};

export const getStudentRoommateListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.sid}/all/roommates/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const cancelHostelApplicationByStudentFunction = (builder) => {
  return builder.mutation({
    query: (cancel) => ({
      url: `${hostelBaseUrl}/${cancel.status}/status/cancel/app/${cancel.appId}/student/${cancel.sid}`,
      method: "PATCH",
    }),
  });
};

export const confirmHostelApplicationByStudentFunction = (builder) => {
  return builder.mutation({
    query: (mode) => ({
      url: `${hostelBaseUrl}/${mode.sid}/student/pay/mode/${mode.aid}/apply/status/${mode.statusId}`,
      method: "POST",
      body: mode.confirmPayload,
    }),
  });
};

export const getAnnouncementListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/announcement?page=${data.page}&limit=${data.limit}`,
  });
};

export const addAnnouncementByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/announcement`,
      method: "POST",
      body: data.announcement,
    }),
  });
};

export const getReceiptListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/receipts/by?page=${data.page}&limit=${data.limit}&filter_by=${data.filterBy}`,
  });
};

export const oneReceiptActionByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // when student side offline flow then use it
      // url: `${hostelBaseUrl}/${data.hid}/one/receipts/${data.rid}/status?status=${data.status}&reqId=${data.reqId}`,
      url: `${hostelBaseUrl}/${data.hid}/one/receipts/${data.rid}/status/decheque/query?status=${data.status}&reqId=${data.reqId}`,
      method: "PATCH",
      body: data.receiptReason,
    }),
  });
};

export const getPendingFeeByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/remaining/array?page=${data.page}&limit=${data.limit}&search=${data.search}&id=${data?.id}`,
  });
};

export const oneReceiptReApplyByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      // when student side offline flow then use it
      // url: `${hostelBaseUrl}/${data.sid}/re/apply/receipts/${data.rid}`,
      url: `${hostelBaseUrl}/${data.sid}/re/apply/receipts/${data.rid}/decheque/query`,
      method: "PATCH",
      body: data.receiptReapply,
    }),
  });
};

export const paymentOfflineFeeHostelByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/go/offline/receipt/${data.appId}`,
      method: "PATCH",
      body: data.offlinePay,
    }),
  });
};

export const submitCashToFinanceByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/finance/${data.hid}/hostel/request`,
      method: "POST",
      body: data.submitAmount,
    }),
  });
};

export const addHostilesExcelByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/api/v1/extra/excel/to/json/${data.hid}/hostelities/query`,
      method: "PATCH",
      body: data.excelFile,
    }),
  });
};

///renewal

export const getRenewalApplicationListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/request/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRenewalSelectListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/selected/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRenewalRenewedListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/confirmed/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRenewalAllotListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/allotted/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRenewalCancelListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/cancelled/application?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const getRenewalListByStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.sid}/all/renewals?page=${data.page}&limit=${data.limit}`,
  });
};

export const selectRenewalByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.huid}/select/renewal`,
      method: "POST",
      body: data.selectRenewal,
    }),
  });
};

export const cancelRenewalByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.huid}/cancel/app/renewal`,
      method: "POST",
    }),
  });
};

export const selectRenewalByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/pay/mode/${data.rid}/apply/renewal`,
      method: "POST",
      body: data.selectRenewal,
    }),
  });
};

export const cancelRenewalByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/cancel/pay/mode/${data.rid}/apply/renewal`,
      method: "POST",
    }),
  });
};

export const collectRenewalFeeByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.huid}/pay/offline/confirm/renewal/${data.aid}`,
      method: "POST",
      body: data.collectFee,
    }),
  });
};

export const renewalAllotBedByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/student/${data.aid}/allot/bed/${data.huid}/renewal`,
      method: "POST",
      body: data.allotBed,
    }),
  });
};

export const cancelConfirmRenewalByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.sid}/student/${data.aid}/pay/refund/${data.huid}/renewal`,
      method: "POST",
      body: data.cancelRenewal,
    }),
  });
};

export const hostelGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (hid) => `${baseUrl}/site/info/hostel/${hid}`,
  });
};

export const hostelUpdateSiteInfoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/site/info/hostel/${data.hid}`,
      method: `PATCH`,
      body: data.updateSiteInfo,
    }),
  });
};
export const addModeratorByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/role/permission/${
        data.hid
      }/new/hostel/app/mod?active_tab=${data?.active_tab ?? ""}`,
      method: "POST",
      body: data.addModerator,
    }),
  });
};

export const getModeratorByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/role/permission/${data.hid}/all/hostel/moderator?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateModeratorByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/role/permission/update/app/hostel/mod/${
        data.modId
      }?active_tab=${data?.active_tab ?? ""}`,
      method: "PATCH",
      body: data.updateModerator,
    }),
  });
};
export const deleteModeratorByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/role/permission/${data.hid}/destroy/app/hostel/mod/${data.modId}`,
      method: "DELETE",
    }),
  });
};
// deposit
export const getMasterDepositByHostelFunction = (builder) => {
  return builder.query({
    query: (hid) => `${baseUrl}/hostel/${hid}/master/deposit/query`,
  });
};
export const getAllDepositRefundByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/hostel/${data.hid}/master/all/refund/deposit/history?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

// export application
export const hostelExportApplicantApplicatonFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/feed/filter/application/export/${data.appId}?flow=${data.flow}`,
      method: `PATCH`,
    }),
  });
};

export const getAllExcelByHostelManagerFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/export/excel/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateExcelByHostelManagerFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/export/excel/${data.xlsxId}/edit`,
      method: "PATCH",
      body: data.excelUpdate,
    }),
  });
};

export const deleteExcelByHostelManagerFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/export/excel/${data.xlsxId}/destroy/query`,
      method: "DELETE",
    }),
  });
};

// for hostel batch
export const getHostelAllBatchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/batch/query?page=${data.page}&limit=${
        data.limit
      }?id=${data?.id ?? ""}`,
  });
};

export const createHostelBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/batch/query?id=${data.id}`,
      method: `POST`,
      body: data.hostelBatch,
    }),
  });
};
export const selectHostelBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/batch-select/${data.bid}`,
      method: `POST`,
    }),
  });
};

export const editHostelBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/institute/batch/${data.bid}`,
      method: `PATCH`,
      body: data.updateBatch,
    }),
  });
};

export const deleteHostelBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/institute/hostel/batch/${data.bid}`,
      method: `DELETE`,
    }),
  });
};

export const getHostelAllStandardFunction = (builder) => {
  return builder.query({
    query: (hid) => `${hostelBaseUrl}/${hid}/all/master/query`,
  });
};
export const createHostelStandardFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/new/master/query`,
      method: `POST`,
      body: data.hostelStandard,
    }),
  });
};

export const deleteApplicationByHostelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.aid}/destroy/${data.appId}`,
      method: `DELETE`,
    }),
  });
};

export const exportFilterDataByHostelFuction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/feed/filter/pending/fee/${data.hid}/hostel/query?gender=${data.gender}&category=${data.caste}&is_all=${data.is_all}&all_depart=${data.all_depart}`,
      method: "PATCH",
      body: data.pendingData,
    }),
  });
};

export const getHostelLinkedListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/all/${data.hid}/not/linked/query?page=${
        data.page
      }&limit=${data.limit}&search=${data.search ?? ""}`,
  });
};

export const addHostelLinkedInstituteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${hostelBaseUrl}/${data.hid}/linked/one/${data.id}/query`,
      method: "PATCH",
    }),
  });
};
