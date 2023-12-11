const baseUrl = "/api/v1";
const baseUrlIns = "/api/v1/ins";
const baseUrlSearch = "/api/v1/search";
export const instituteStatsCountFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrlIns}/${id}/stats`,
  });
};

export const approveStaffArrayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrlIns}/${data.id}/approve-staff/list?page=${data.page}&limit=${
        data.limit
      }&date=${data.date ? data.date : ""}`,
  });
};

export const pendingStaffArrayFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrlIns}/${id}/pending-staff/list`,
  });
};

export const staffApproveFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data.id}/staff/approve/${data.sid}/user/${data.uid}`,
      method: method,
      body: data,
    }),
  });
};

export const staffRejectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data.id}/staff/reject/${data.sid}/user/${data.uid}`,
      method: method,
      body: data,
    }),
  });
};

export const oneStaffProfileFunction = (builder) => {
  return builder.query({
    query: (sid) => `${baseUrlIns}/staff/${sid}`,
  });
};

export const searchStaffFunction = (builder) => {
  return builder.query({
    query: (data) => ({
      url: `${baseUrlSearch}/${data?.id}/staff?search=${data.search}&page=${data.page}&limit=${data.limit}`,
    }),
  });
};

export const randomCodeArrayFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data.id}/staff/code`,
      method: method,
      body: data.staffCode,
    }),
  });
};

export const staffCodeFunction = (builder) => {
  return builder.query({
    query: (id) => ({
      url: `${baseUrlIns}/${id}/staff-code`,
    }),
  });
};

export const staffLeaveListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/compleave/institute/${data.id}?page=${data.page}&limit=${
        data.limit
      }&status_query=${data.flow ?? "Request"}`,
  });
};

export const staffLeaveActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/institute/${data.id}`,
      method: method,
      body: data.leaveAction,
    }),
  });
};

export const staffTransferListFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrl}/compleave/institute/${id}/transfer`,
  });
};

export const staffTransferApproveFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/institute/staff/${data.tid}/transfer`,
      method: method,
      data: data.transferApprove,
    }),
  });
};

export const staffTransferRejectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/institute/staff/${data.tid}/transfer`,
      method: method,
      data: data.transferReject,
    }),
  });
};

export const staffComplaintListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/compleave/institute/${data.id}/staff/complaint?status=${data.status}`,
  });
};
export const staffComplaintDetailFunction = (builder) => {
  return builder.query({
    query: (cid) => `${baseUrl}/compleave/staff/complaint/${cid}`,
  });
};

export const staffComplaintActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/staff/complaint/${data.cid}`,
      method: `${method}`,
      body: data.complaintStatus,
    }),
  });
};

//Student related api
export const approveStudentArrayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrlIns}/${data.id}/approve-student/list?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneStudentProfileFunction = (builder) => {
  return builder.query({
    query: (sid) => `${baseUrlIns}/student/${sid}`,
  });
};

export const searchStudentFunction = (builder) => {
  return builder.query({
    query: (data) => ({
      url: `${baseUrlSearch}/${data.id}/student?search=${data.search}&page=${data.page}&limit=${data.limit}`,
    }),
  });
};

export const studentComplaintListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/compleave/institute/${data.id}/complaint?status=${data.status}`,
  });
};

export const studentComplaintDetailFunction = (builder) => {
  return builder.query({
    query: (cid) => `${baseUrl}/compleave/complaint/${cid}`,
  });
};

export const studentComplaintActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/complaint/${data.cid}`,
      method: method,
      body: data.status,
    }),
  });
};

export const studentBonafideFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/bonafide/certificate/${data.gr}/ins/${data.id}`,
      method: method,
      body: data.bonafideReason,
    }),
  });
};

export const studentLeavingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/leaving/certificate/${data.gr}/ins/${data.id}`,
      method: method,
      body: data.leavingFeedback,
    }),
  });
};

export const getEditableFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrl}/ins/${id}/certificate/editable/detail`,
  });
};

export const editEditableFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/ins/${data.id}/certificate/editable`,
      method: method,
      body: data?.e_data,
    }),
  });
};

//add staff to institute direct
export const addStaffToInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/direct/join/staff/${data.phoneNumber}/institute/${data.id}?existingUser=${data.existingUser}`,
      method: `${method}`,
      body: data.addStaff,
    }),
  });
};

// for transfer related

export const transferListFunction = (builder) => {
  return builder.query({
    query: (transfer) => `${baseUrl}/compleave/institute/${transfer}/transfer`,
  });
};

export const approveStaffReplaceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/institute/staff/${data.tid}/transfer`,
      method: method,
      body: data,
    }),
  });
};

export const rejectStaffReplaceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/compleave/institute/staff/${data.tid}/transfer`,
      method: method,
      body: data,
    }),
  });
};

export const getFeeReceipt = (builder) => {
  return builder.query({
    query: (frid) => `${baseUrl}/finance/${frid}/one/receipt`,
  });
};

export const downloadOriginalCopy = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/${data.id}/original/copy/query?original=${data.original}`,
      method: "PATCH",
    }),
  });
};

export const addStaffExcelByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.id}/staff/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const getInstituteAllStudentFilterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url:
        data?.is_view === "ADMISSION_ADMIN"
          ? `${baseUrlIns}/${data.id}/approve-student/admission/list/filter/query?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`
          : data?.is_view === "FINANCE_MANAGER"
          ? `${baseUrlIns}/${data.id}/approve-student/finance/list/filter/query?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`
          : data?.is_view === "CERTIFICATE_AUTHORITY"
          ? `${baseUrlIns}/${data.id}/approve-student/certificate/list/filter/query/${data.mid}?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`
          : data?.is_view === "STUDENT_SECTION"
          ? `${baseUrlIns}/${data.id}/approve-student/section/list/filter/query/${data.mid}?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`
          : data?.is_view === "ID_CARD_SECTION"
          ? `${baseUrlIns}/${data.id}/approve-student/id/card/list/filter/query/${data.mid}?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`
          : `${baseUrlIns}/${data.id}/approve-student/list/filter/query?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`,
      method: method,
      body: data.filterData,
    }),
  });
};

export const sendMessageToSelectStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/send/filtered/message/query?id=${data?.id ?? ""}`,
      method: method,
      body: data.sendMessage,
    }),
  });
};
export const sendMessageToOneStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/send/one/student/filtered/message/query?id=${
        data?.id ?? ""
      }`,
      method: method,
      body: data.sendMessage,
    }),
  });
};

export const getStudentSectionEditStudentFormFunction = (builder) => {
  return builder.query({
    query: (data) => `${baseUrl}/extra/${data.id}/student/section/form/query`,
  });
};

export const updateStudentSectionEditStudentFormFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/${data.id}/student/section/form/query`,
      method: method,
      body: data.setting,
    }),
  });
};

export const getStudentMessageHistoryGenerateFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/extra/all/filtered/message/${data.sid}/query?page=${
        data.page
      }&limit=${data.limit}&flow=${data?.flow ?? ""}`,
  });
};

export const excelDeprtmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.id}/add/department/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const excelClassMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.did}/add/class/master/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const excelSubjectMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.did}/add/subject/master/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const excelClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.did}/add/class/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const excelSubjectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/${data.cid}/add/subject/query`,
      method: method,
      body: data.excelFile,
    }),
  });
};

export const getStaffDesignationCheckValueFunction = (builder) => {
  return builder.query({
    query: (sid) => `${baseUrl}/extra/${sid}/three/designation/query`,
  });
};
