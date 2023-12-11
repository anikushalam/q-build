const departmentUrl = "/api/v1/ins";
const imageUrlPath = "/api/v1/all-images";
const holidayUrl = "/api/v1/attendance";
const checklistUrl = "/api/v1/checklist";
const examUrl = "/api/v1/exam";
const complaintUrl = "/api/v1/compleave";
const feesUrl = "/api/v1/fees";
const electionUrl = "/api/v1/election/event";
const postUrl = "/api/v1";
const extraUrl = "/api/v1/extra";
const mentorUrl = "/api/v1/mentor/mentee";

export const getActivatedMemberAccountFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${extraUrl}/${data.id}/active/member/role?active_member_role=${
        data.active_member_role ?? ""
      }`,
  });
};

export const departmentProfileFunction = (builder) => {
  return builder.query({
    query: (did) => `${departmentUrl}/staffdepartment/${did}`,
  });
};

export const departmentProfilePhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${imageUrlPath}/${data.did}/department/photo`,
      method: `${method}`,
      body: data.profile,
    }),
  });
};
export const departmentCoverPhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${imageUrlPath}/${data.did}/department/cover`,
      method: `${method}`,
      body: data.cover,
    }),
  });
};

export const departmentInfoUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${departmentUrl}/staff/department-info/${data.did}`,
      method: `${method}`,
      body: data.departmentInfo,
    }),
  });
};

export const departmentAddDisplayPersonFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${departmentUrl}/${data.did}/department/display-person`,
      method: `${method}`,
      body: data.addPerson,
    }),
  });
};

export const departmentAllStaffFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${departmentUrl}/department/${data.did}/staff-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentBatchAllClassFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${departmentUrl}/batch-detail/${data.bid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentCreatedHolidayFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${holidayUrl}/department/${data.did}/holiday`,
      method: `${method}`,
      body: data.holiday,
    }),
  });
};

export const departmentAllHolidayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${holidayUrl}/holiday/${data.did}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentDeleteHolidayFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${holidayUrl}/holiday/${data.hid}/delete`,
      method: `${method}`,
    }),
  });
};

export const departmentCreatedChecklistFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${checklistUrl}/department/${data.did}`,
      method: `${method}`,
      body: data.createChecklist,
    }),
  });
};

export const departmentAllChecklistFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${checklistUrl}/department/${data.did}/all?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentUpadateChecklistFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${checklistUrl}/${data.cid}`,
      method: `${method}`,
      body: data.checklist,
    }),
  });
};

export const departmentDeleteChecklistFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${checklistUrl}/${data.cid}/destroy/${data.did}`,
      method: `${method}`,
    }),
  });
};
export const departmentAllClassMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/${data.did}/classmaster/${data.bid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentAllSubjectMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/${data.cmid}/subjectmaster/${data.bid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentCreateExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/batch/${data.bid}`,
      method: `${method}`,
      body: data.exam,
    }),
  });
};
export const createSubjectExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/create/subject/${data.sid}/query`,
      method: `POST`,
      body: data.exam,
    }),
  });
};

export const departmentAllExamFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/all/${data.did}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentExamDetailFunction = (builder) => {
  return builder.query({
    query: (eid) => `${examUrl}/${eid}`,
  });
};

export const departmentAllComplaintFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/department/${data.did}/complaint?status=${data.status}&page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentComplaintDetailFunction = (builder) => {
  return builder.query({
    query: (data) => `${complaintUrl}/complaint/${data.cid}`,
  });
};

export const departmentComplaintSolveFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/complaint/${data.cid}`,
      method: `${method}`,
      body: data.complaintSolve,
    }),
  });
};

export const departmentAllFeesFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${feesUrl}/department/${data.did}/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentCreateFeesFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${feesUrl}/department-class/fee/${data.did}`,
      method: `${method}`,
      body: data.fees,
    }),
  });
};

export const departmentElectionCreateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/manager/${data.eid}/new/election`,
      method: `${method}`,
      body: data.createElection,
    }),
  });
};

export const departmentAllElectionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs === "EVENT_MANAGER"
        ? `${postUrl}/event/process/manager/${data.did}/all/elections?page=${data.page}&limit=${data.limit}`
        : `${electionUrl}/${data.did}/all/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentOneElectionFunction = (builder) => {
  return builder.query({
    query: (eid) => `${electionUrl}/one/${eid}`,
  });
};

export const departmentOneElectionAllCandidateFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${electionUrl}/one/${data.eid}/all/candidate?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentElectionActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${electionUrl}/${data.eid}/status/${data.apid}/candidate/${data.sid}?status=${data.actionStatus}`,
      method: `${method}`,
    }),
  });
};

export const departmentElectionSettingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${electionUrl}/department/${data.did}/setting`,
      method: `${method}`,
      body: data.updateSetting,
    }),
  });
};

export const departmentBacklogClassMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/backlog/class/master/${data.did}?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentBacklogSubjectMasterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/backlog/one/master/${data.cmid}/subjects?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentBacklogSubjectAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/backlog/one/subject/${data.smid}/students?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentBacklogSubjectAllStudentDropoutFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/backlog/one/subject/${data.smid}/students/dropout?page=${data.page}&limit=${data.limit}`,
  });
};

export const departmentBacklogOneStudentClearDropoutFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/backlog/one/previous/student/${data.sid}/mark/status?smid=${data.smid}&status=${data.status}`,
      method: `${method}`,
    }),
  });
};

// -------------------Create Participative Event--------------------------------------------
export const createParticipativeEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/event/process/manager/${data.did}/new/participate`,
      method: "POST",
      body: data.participateData,
    }),
  });
};

// -------------------Get Participate Event List--------------------------------------------

export const participateEventList = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs === "EVENT_MANAGER"
        ? `${postUrl}/event/process/manager/${data.did}/all/participate?page=${data.page}&limit=10`
        : `${postUrl}/participate/event/all/query/${data.did}?page=${data.page}&limit=10`,
  });
};

// -------------------Participate Event Details--------------------------------------------

export const participateEventDetails = (builder) => {
  return builder.query({
    query: (pid) => `${postUrl}/participate/event/one/${pid}`,
  });
};

// -------------------Get Participate Event Student List--------------------------------------------

export const participateEventStudentList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/participate/event/one/${data.pid}/student/array?page=${data.page}&limit=10`,
  });
};

// -------------------Assign Checklist to Student--------------------------------------------
export const assignChecklistToStudent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/participate/event/one/${data.pid}/student/${data.sid}/checklist`,
      method: "PATCH",
    }),
  });
};

// -------------------Apply offline participative event--------------------------------------------
export const withoutPaymentParticipateApplyFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/participate/event/one/${data.pid}/apply/${data.sid}/activity/${data.statusId}`,
      method: "PATCH",
    }),
  });
};
// ----------------------Participate Event Result Declaration-----------------------------------------
export const resultDeclaration = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/participate/event/one/${data.pid}/result/${data.did}`,
      method: "PATCH",
      body: data,
    }),
  });
};

export const departmentGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl}/site/info/department/${did}`,
  });
};

export const departmentUpdateSiteInfoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/site/info/department/${data.did}`,
      method: `${method}`,
      body: data.updateSiteInfo,
    }),
  });
};

export const getInstituteDetailByPromoteFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/edit/student/promote/${id}/institute/detail`,
  });
};
export const getDepartmentDetailByPromoteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/edit/student/promote/department/${data.did}/detail?exist_batch=${data.exist_batch}`,
  });
};

export const getPromoteStudentByPromoteFunction = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/edit/student/promote/class/${cid}/student/list`,
  });
};

export const getNotPromoteStudentByPromoteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/edit/student/promote/remain/class/${data.cid}/student?valid_app_fee=${data.valid_app_fee}`,
  });
};

export const getExaminationSectionDetailFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl}/edit/student/exam/moderator/count/${did}`,
  });
};

// ========================Seating Arrangements====================
export const getClassListExamFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/seating/${data.eid}/all/class/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getSeatingListExamFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/seating/${data.eid}/seating/all/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getOneSeatingExamFunction = (builder) => {
  return builder.query({
    query: (said) => `${examUrl}/seating/one/${said}/query`,
  });
};

export const destroyOneSeatingExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/destroy/${data.said}/query`,
      method: `${method}`,
    }),
  });
};

export const updateOneSeatingExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/edit/${data.said}/query`,
      method: `${method}`,
      body: data.updateSeating,
    }),
  });
};

export const addSeatingExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/new/query`,
      method: `${method}`,
      body: data.addSeating,
    }),
  });
};
export const getOneDepartmentBatchListFunction = (builder) => {
  return builder.query({
    query: (did) => `${departmentUrl}/${did}/one-batch`,
  });
};

export const createAutomateSeatingArrangementFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/new/query/automate`,
      method: `${method}`,
      body: data.createAutomate,
    }),
  });
};

export const getAllExamFeeStructureFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/fee/structure/${data.did}/all/query?page=${data.page}&limit=${data.limit}`,
  });
};
export const updateExamFeeStructureFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/fee/structure/${data.efid}/edit`,
      method: `${method}`,
      body: data.updateFee,
    }),
  });
};

export const examFeeStructureDetailFunction = (builder) => {
  return builder.query({
    query: (efid) => `${examUrl}/fee/structure/one/${efid}/all/query`,
  });
};
export const createBacklogExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/backlog/${data.did}/new/exam`,
      method: `${method}`,
      body: data.exam,
    }),
  });
};
export const getBacklogExamListFunction = (builder) => {
  return builder.query({
    query: (did) => `${examUrl}/backlog/${did}/all/exam`,
  });
};

export const departmentAllClassMasterBacklogFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/backlog/${data.did}/classmaster`,
  });
};

export const departmentAllSubjectMasterBacklogFunction = (builder) => {
  return builder.query({
    query: (data) => `${examUrl}/backlog/${data.cmid}/subjectmaster`,
  });
};

export const sendExamNotifyToSubjectFunction = (builder) => {
  return builder.query({
    query: (eid) => `${examUrl}/send/student/update/exam/${eid}/notify`,
  });
};

export const createGradeSystemFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/exam/grade/department/${data.did}/create?custom_grade=${data.custom_grade}`,
      method: `${method}`,
      body: data.gradeSystem,
    }),
  });
};

export const getAllUniversalGradeFunction = (builder) => {
  return builder.query({
    query: () => `${examUrl}/exam/grade/custom/list`,
  });
};

export const getOneGradeDetailFunction = (builder) => {
  return builder.query({
    query: (did) => `${examUrl}/exam/grade/department/${did}/create`,
  });
};

export const getMentorListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mentorUrl}/${data.did}/all/mentor?page=${data.page}&limit=${data.limit}`,
  });
};

export const addMentorDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mentorUrl}/${data.did}/new/mentor/${data.sid}`,
      method: `${method}`,
    }),
  });
};

export const getOneMentorDetailFunction = (builder) => {
  return builder.query({
    query: (mid) => `${mentorUrl}/one/mentor/${mid}`,
  });
};
export const getOneMentorMenteeListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mentorUrl}/one/mentor/${data.mid}/all/mentees?page=${data.page}&limit=${data.limit}`,
  });
};

export const addNewMenteeFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mentorUrl}/${data.did}/one/mentor/${data.mid}/new/mentees`,
      method: `${method}`,
      body: data.add_mentee,
    }),
  });
};

export const removeMenteeFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mentorUrl}/${data.did}/one/mentor/${data.mid}/destroy/mentees`,
      method: `${method}`,
      body: data.destroy_mentee,
    }),
  });
};

export const getAllQueryListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mentorUrl}/${data.did}/all/query/by/flow?status=${data.status}&flow=${data.flow}&page=${data.page}&limit=${data.limit}`,
  });
};

export const getQueryDetailFunction = (builder) => {
  return builder.query({
    query: (qid) => `${mentorUrl}/one/query/${qid}`,
  });
};

export const markQueryFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mentorUrl}/one/query/${data.qid}/remark/flow?flow=${data.flow}`,
      method: `${method}`,
      body: data.mark_query,
    }),
  });
};

export const getAllMentorClassListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mentorUrl}/${data.did}/all/class/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const getClassStudentListFunction = (builder) => {
  return builder.query({
    query: (cid) => `${mentorUrl}/${cid}/all/filter/student/query`,
  });
};

export const addSeatingBacklogExamFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/new/backlog/query`,
      method: `${method}`,
      body: data.addSeating,
    }),
  });
};
export const createBacklogAutomateSeatingArrangementFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/seating/${data.eid}/seating/new/backlog/query/automate`,
      method: `${method}`,
      body: data.createAutomate,
    }),
  });
};

// for update grade
export const updateGradeSystemFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/exam/grade/${data.gid}/update?custom_grade=${data.custom_grade}`,
      method: `${method}`,
      body: data.gradeSystem,
    }),
  });
};
export const updateSubjectCourseCreditFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/batch/subject/${data.sid}/update/course/credit`,
      method: `${method}`,
      body: data.subjectData,
    }),
  });
};

export const addMeetingByMentorFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mentorUrl}/new/meeting/query`,
      method: `${method}`,
      body: data.meetingData,
    }),
  });
};

export const getAllMeetingByMentorFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mentorUrl}/${data.mid}/all/meeting/query?page=${data.page}&limit=${
        data.limit
      }&search=${data.search ?? ""}`,
  });
};

export const getOneMeetingDetailFunction = (builder) => {
  return builder.query({
    query: (meid) => `${mentorUrl}/one/meet/${meid}/query`,
  });
};

export const undoPromoteStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/batch/undo?cid=${data.cid}&flow=${data.flow}`,
      method: "PATCH",
      body: data.undoPromote,
    }),
  });
};

export const departmentCopoSettingUpdateFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/copo/department/${data.did}/setting/query`,
      method: "PATCH",
      body: data.copoSetting,
    }),
  });
};

export const getAllCertificateAuthorityFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${extraUrl}/all/${data.id}/certificate/query/status?status=${
        data.status ?? ""
      }&page=${data.page}&limit=${data.limit}`,
  });
};

export const certificateAuthorityActionFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${extraUrl}/mark/${data.cid}/certificate/query?status=${data.status}&attach=${data?.attach}`,
      method: "PATCH",
      // body: data.certificateAction,
    }),
  });
};

export const updateCertificateAuthorityFundFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${extraUrl}/update/${data.id}/certificate/fund/query`,
      method: "PATCH",
      body: data.certificateFund,
    }),
  });
};

export const updateMutlipleLeaveConfigFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/${data.id}/config/leave/assign/query`,
      method: "PATCH",
      body: data.leaveConfig,
    }),
  });
};
export const updateOneStaffLeaveConfigFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/${data.sid}/config/staff/leave/assign/query`,
      method: "PATCH",
      body: data.leaveConfig,
    }),
  });
};

export const raiseLeaveRequestByStaffFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/staff/${data.sid}/coff/query`,
      method: "POST",
      body: data.leaveConfig,
    }),
  });
};
export const getManageCOffLeaveFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/staff/${data.id}/all/coff/query?page=${
        data.page
      }&limit=${data.limit}&status_query=${data.flow ?? "Request"}`,
  });
};

export const markCOffLeaveFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${complaintUrl}/manage/approve/${data.lid}`,
      method: "PATCH",
      body: data.cConfig,
    }),
  });
};

export const getLeaveOverviewCountFunction = (builder) => {
  return builder.query({
    query: (data) => `${complaintUrl}/${data.sid}/leave/overview/query `,
  });
};

export const getLeaveOverviewIssueFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${complaintUrl}/${data.sid}/leave/overview/filter/query?page=${data.page}&limit=${data.limit}&category=${data.category}`,
  });
};

export const getAllExcelByPromoteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${extraUrl}/student/section/${data.id}/all/export/excel/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const updateExcelByPromoteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${extraUrl}/student/section/${data.id}/export/excel/${data.xlsxId}/edit`,
      method: "PATCH",
      body: data.excelUpdate,
    }),
  });
};

export const deleteExcelByPromoteFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${extraUrl}/student/section/${data.id}/export/excel/${data.xlsxId}/destroy/query`,
      method: "DELETE",
    }),
  });
};

export const exportPromoteStudentExcelFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/feed/filter/by/student/${data.cid}/query?flow=${data.flow}`,
      method: "PATCH",
    }),
  });
};
