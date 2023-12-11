const classUrl = "/api/v1/ins";
const imageUrlPath = "/api/v1/all-images";
const holidayUrl = "/api/v1/attendance";
const checklistUrl = "/api/v1/checklist";
const examUrl = "/api/v1/exam";
const complaintUrl = "/api/v1/compleave";
const feesUrl = "/api/v1/fees";
const settingUrl = "/api/v1/class";
const lockUrl = "/api/v1/batch";
const postUrl1 = "/api/v1";
const timetableUrl = "/api/v1/timetable";
export const classProfileFunction = (builder) => {
  return builder.query({
    query: (cid) => `${classUrl}/staffclass/${cid}`,
  });
};

export const classProfilePhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${imageUrlPath}/${data.cid}/class/photo`,
      method: `${method}`,
      body: data.profile,
    }),
  });
};
export const classCoverPhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${imageUrlPath}/${data.cid}/class/cover`,
      method: `${method}`,
      body: data.cover,
    }),
  });
};

export const classInfoUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${classUrl}/staff/class-info/${data.cid}`,
      method: `${method}`,
      body: data.departmentInfo,
    }),
  });
};

export const classAddDisplayPersonFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${classUrl}/${data.cid}/class/display-person`,
      method: `${method}`,
      body: data.addPerson,
    }),
  });
};

export const classAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${classUrl}/${data.cid}/student/catalog?page=${data.page}&limit=${data.limit}`,
  });
};

export const classAllStudentFilterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl1}/feed/filter/by/class/catalog/${data.cid}?page=${data.page}&sort_query=${data.sort_query}&limit=${data.limit}`,
  });
};

export const classAllRequestStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${classUrl}/${data.cid}/student/request?page=${data.page}&limit=${data.limit}`,
  });
};

export const classApproveStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${classUrl}/${data.id}/student/${data.cid}/approve/${data.sid}/depart/${data.did}/batch/${data.bid}`,
      method: `${method}`,
      body: data.approve,
    }),
  });
};

export const classRejectStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${classUrl}/${data.id}/student/${data.cid}/reject/${data.sid}`,
      method: `${method}`,
      body: data.reject,
    }),
  });
};

export const classStudentCurrentAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${holidayUrl}/class/${data.cid}/student/attendance?date=${data.date}`,
  });
};

export const classStudentAttendanceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${holidayUrl}/class/${data.cid}/student/attendance`,
      method: `${method}`,
      body: data.attendance,
    }),
  });
};

export const classStudentAttendanceUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${holidayUrl}/student/update/${data.said}`,
      method: `${method}`,
      body: data.attendanceUpdate,
    }),
  });
};

export const classCodeRefreshFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/${data.cid}`,
      method: `${method}`,
    }),
  });
};

export const classSettingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/setting/${data.cid}`,
      method: `${method}`,
      body: data.setting,
    }),
  });
};

export const classAllHolidayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${holidayUrl}/class/${data.cid}/holiday?month=${data.month}&year=${data.year}`,
  });
};

export const classAllChecklistFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${checklistUrl}/class/${data.cid}/all?page=${data.page}&limit=${data.limit}`,
  });
};

export const classOneChecklistAssignFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${checklistUrl}/${data.cid}/assign-student/${data.sid}`,
      method: `${method}`,
    }),
  });
  // return builder.query({
  //   query: (data) => `${checklistUrl}/${data.cid}/assign-student/${data.sid}`,
  // });
};

export const classChecklistAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${checklistUrl}/${data.cid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const classStudentGraceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/class/student/${data.sid}/grace`,
      method: `${method}`,
      body: data.exam,
    }),
  });
};

export const classSettingReportFunction = (builder) => {
  return builder.query({
    query: (cid) => `${examUrl}/class/${cid}/settings`,
  });
};

export const classReportSettingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/setting/${data.cid}/report`,
      method: `${method}`,
      body: data.setting,
    }),
  });
};

export const classStudentBehavourFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/class/student/${data.sid}/behaviour`,
  });
};

export const classCreateStudentBehavourFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/class/student/${data.sid}/behaviour`,
      method: `${method}`,
      body: data.behaviour,
    }),
  });
};

export const classStudentReportCardFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/class/student/${data.sid}/report`,
  });
};

export const classStudentReportCardAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/class/student/${data.sid}/report/attendance`,
  });
};

export const classStudentReportCardNecessaryFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/class/student/${data.sid}/report/necessary`,
  });
};

export const classStudentReportCardFinalizeFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/class/student/${data.sid}/report/finalize`,
      method: `${method}`,
      body: data.reportCardFinalize,
    }),
  });
};

export const classStudentReportCardFinalizeGraceFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/class/student/${data.sid}/report/finalize/grace/update`,
      method: `${method}`,
      body: data.graceMarksUpdate,
    }),
  });
};

export const classStudentReportCardBeforeGraceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/class/student/${data.sid}/report/grace/update`,
      method: `${method}`,
      body: data.graceMarksUpdate,
    }),
  });
};

export const classAllLeaveRequestFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/class/${data.cid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const classLeaveRequestActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/class/${data.sid}`,
      method: `${method}`,
      body: data.action,
    }),
  });
};

export const classAllComplaintFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/class/${data.cid}/complaint?status=${data.status}&page=${data.page}&limit=${data.limit}`,
  });
};

export const classComplaintDetailFunction = (builder) => {
  return builder.query({
    query: (data) => `${complaintUrl}/complaint/${data.cid}`,
  });
};

export const classComplaintSolveFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/complaint/${data.cid}`,
      method: `${method}`,
      body: data.complaintSolve,
    }),
  });
};

export const classAllStudentTransferFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/class/${data.cid}/transfer?page=${data.page}&limit=${data.limit}`,
  });
};

export const classStudentTransferRejectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/class/student/${data.tid}/transfer`,
      method: `${method}`,
      body: data.rejected,
    }),
  });
};

export const classStudentTransferApprovedFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/class/student/${data.tid}/transfer`,
      method: `${method}`,
      body: data.approved,
    }),
  });
};

export const classAllFeesFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${feesUrl}/class/${data.cid}/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const classOneFeesFunction = (builder) => {
  return builder.query({
    query: (data) => `${classUrl}/staffclass/${data.cid}/fee/${data.fid}/query`,
  });
};

export const classOneFeesDetailsFunction = (builder) => {
  return builder.query({
    query: (data) => `${feesUrl}/${data.fid}`,
  });
};

export const classOfflineExemptFeesFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${feesUrl}/class/${data.cid}/student/fee/${data.fid}/all`,
      method: `${method}`,
      body: data.feesData,
    }),
  });
};

export const classOneFeesSubmit = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/api/v1/finance/${data.fid}/class/${data.cid}/fee/${data.feesId}/receieve`,
      method: `${method}`,
      body: data.offlineAmount,
    }),
  });
};

export const classAllSubjectCompleteFunction = (builder) => {
  return builder.query({
    query: (data) => `${lockUrl}/complete/${data.cid}`,
  });
};

export const classAllDepartmentWithBatchFunction = (builder) => {
  return builder.query({
    query: (data) => `${lockUrl}/class/${data.cid}`,
  });
};

export const classAllBatchWithClassFunction = (builder) => {
  return builder.query({
    query: (data) => `${lockUrl}/${data.bid}`,
  });
};

export const classPromoteStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${lockUrl}/promote/${data.cid}?flow=${data.flow}&re_ads=${data.re_ads}`,
      method: `${method}`,
      body: data.promote,
    }),
  });
};

export const classCompleteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${lockUrl}/complete/${data.cid}`,
      method: `${method}`,
      body: data.status,
    }),
  });
};

// /student form edit

export const studentProfilePhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/student/form/photo/${data.sid}`,
      method: `${method}`,
      body: data.profile,
    }),
  });
};

export const studentFormEditFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/student/form/detail/${data.sid}`,
      method: `${method}`,
      body: data.editProfile,
    }),
  });
};

export const studentClassRemoveFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/student/remove/${data.sid}`,
      method: `${method}`,
    }),
  });
};

export const classUnCompleteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${lockUrl}/class/uncomplete/${data.cid}`,
      method: `${method}`,
    }),
  });
};

export const updateFeesByClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${feesUrl}/${data.fid}/edit`,
      method: method,
      body: data.updateFees,
    }),
  });
};
export const deleteFeesByClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${feesUrl}/${data.fid}/destroy/${data.did}`,
      method: method,
    }),
  });
};

export const allStudentFinalizeReportCardFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/all/student/report/card/finalize/class/${data.cid}`,
      method: method,
    }),
  });
};

export const addUnapprovedStudentByClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${classUrl}/${data.cid}/approve/student/query`,
      method: `${method}`,
      body: data.studentAdd,
    }),
  });
};

export const classAllUnApprovedStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${classUrl}/${data.cid}/student/un/approve/catalog?page=${data.page}&limit=${data.limit}`,
  });
};

// for class batch related api
export const getClassAllBatchFunction = (builder) => {
  return builder.query({
    query: (cid) => `${settingUrl}/${cid}/all/batch/query`,
  });
};
export const getClassBatchAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${settingUrl}/${data.bid}/all/student/query?page=${data.page}&limit=${
        data.limit
      }&search=${data.search}&subjectId=${data.subjectId ?? ""}&today=${
        data.today ?? ""
      }`,
  });
};

export const createClassBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/${data.cid}/new/batch/query`,
      method: `POST`,
      body: data.classBatch,
    }),
  });
};
export const addClassStudentToBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/${data.bid}/new/student/query`,
      method: `POST`,
      body: data.addStudent,
    }),
  });
};

export const editClassBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/batch/${data.bid}`,
      method: `PATCH`,
      body: data.updateBatch,
    }),
  });
};

export const deleteClassBatchFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/${data.bid}/destroy/query`,
      method: `DELETE`,
    }),
  });
};

export const getDayTimetableFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${timetableUrl}/${data?.cid}/day/timetable?status=${data?.status ?? ""}`,
  });
};
export const addDayTimetableFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${timetableUrl}/${data?.cid}/day/timetable?sfid=${
        data?.sfid ?? ""
      }`,
      method: `PATCH`,
      body: data?.timetableBody,
    }),
  });
};
export const removeDayTimetableFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${timetableUrl}/${data?.tid}/destroy/query?flow=${
        data?.flow ?? ""
      }&scid=${data?.scid ?? ""}`,
      method: `DELETE`,
    }),
  });
};

export const deleteClassBatchStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${settingUrl}/${data.bid}/destroy/student/query`,
      method: `POST`,
      body: data?.destroy,
    }),
  });
};

export const classResuffleRearrangeFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/extra/shuffled/query`,
      method: `PATCH`,
      body: data?.suffle,
    }),
  });
};
