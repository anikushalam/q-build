const postUrl = "/api/v1/ins";
const postUrl1 = "/api/v1";
const postUserUrl = "/api/v1/user";

export const allDepartmentFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/${id}/department`,
  });
};

export const addDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/new-department`,
      method: `${method}`,
      body: data.departmentCreate,
    }),
  });
};
export const oneDepartmentFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl}/department-detail/${did}`,
  });
};
export const allBatchDepartmentFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl}/${did}/one-batch`,
  });
};
export const addBatchDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/addbatch/${data.did}/ins/${data.id}`,
      method: `${method}`,
      body: data.batch,
    }),
  });
};

export const addIdenticalBatchDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/batch/${data.bid}`,
      method: `${method}`,
      body: data.batch,
    }),
  });
};

export const currentBatchDepartmentFunction = (builder) => {
  return builder.query({
    query: (id, bid) => `${postUrl}/${id}/batchdetail/${bid}`,
  });
};
export const setCurrentBatchDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.did}/batch-select/${data.bid}`,
      method: `${method}`,
      body: data.batch,
    }),
  });
};
export const addClassMasterDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/departmentmasterclass/${data.did}`,
      method: `${method}`,
      body: data.className,
    }),
  });
};
export const allClassMasterDepartmentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/${data.id}/departmentmasterclass-detail/${data.did}`,
  });
};
export const addSubjectMasterDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/departmentmastersubject/${data.did}`,
      method: `${method}`,
      body: data.subject,
    }),
  });
};
export const allSubjectMasterDepartmentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/${data.id}/departmentmastersubject/${data.did}`,
  });
};
export const addClassDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/department/${data.did}/batch/${data.bid}`,
      method: `${method}`,
      body: data.classCreate,
    }),
  });
};
export const oneBatchClassDepartmentFunction = (builder) => {
  return builder.query({
    query: (bid) => `${postUrl}/batch/class/${bid}`,
  });
};
export const addSubjectClassDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/department/${data.did}/batch/${data.bid}/class/${data.cid}/subject`,
      method: `${method}`,
      body: data.subjectAdd,
    }),
  });
};
export const oneClassProfileDepartmentFunction = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/class/${cid}`,
  });
};
export const oneClassAllSubjectDepartmentFunction = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/class/subject/${cid}`,
  });
};
export const allApproveStaffDepartmentFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/${id}/approve-staff/list`,
  });
};

//FOR DEPARTMENT ALL EDIT FUNCTIONALITY
export const getDetailDepartmentFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl1}/edit/institute/department/${did}`,
  });
};

export const editDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/department/${data.did}`,
      method: `${method}`,
      body: data.department,
    }),
  });
};
export const deleteDepartmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/department/${data.did}`,
      method: `${method}`,
      body: "",
    }),
  });
};

export const editBatchFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/batch/${data.bid}`,
      method: `${method}`,
      body: data.batch,
    }),
  });
};
export const deleteBatchFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/batch/${data.bid}`,
      method: `${method}`,
      body: "",
    }),
  });
};

export const deleteClassMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/classmaster/${data.cmid}`,
      method: `${method}`,
      body: "",
    }),
  });
};

export const editClassMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/classmaster/edit/${data.cmid}/query`,
      method: `${method}`,
      body: data.cls_master,
    }),
  });
};
export const getDetailClassFunction = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl1}/edit/institute/class/${cid}`,
  });
};

export const editClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/class/${data.cid}`,
      method: `${method}`,
      body: data.classDetail,
    }),
  });
};
export const deleteClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/class/${data.cid}`,
      method: `${method}`,
      body: "",
    }),
  });
};

export const deleteSubjectMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/subjectmaster/${data.smid}`,
      method: `${method}`,
      body: "",
    }),
  });
};
export const editSubjectMasterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/subjectmaster/edit/${data.smid}/query`,
      method: `${method}`,
      body: data.sub_master,
    }),
  });
};

export const getDetailSubjectFunction = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl1}/edit/institute/subject/${sid}`,
  });
};

export const editSubjectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/subject/${data.sid}`,
      method: `${method}`,
      body: data.subject,
    }),
  });
};
export const deleteSubjectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/institute/subject/${data.sid}`,
      method: `${method}`,
      body: "",
    }),
  });
};

//FOR THE INSTITUTE Form Setting OF STAFF and STUDENT
export const instituteStaffFormFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/${id}/staff/form`,
  });
};
export const instituteStudentFormFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/${id}/student/form`,
  });
};

export const instituteFormSettingUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/${data.id}/form/setting/update`,
      method: `${method}`,
      body: data.formSetting,
    }),
  });
};

export const userProfileFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUserUrl}/${id}/profile`,
  });
};
export const updateUserProfileFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUserUrl}/personal/info/${data.id}`,
      method: `${method}`,
      body: data.infoUpdate,
    }),
  });
};

// /staff form edit

export const staffProfilePhotoFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/staff/form/photo/${data.sid}`,
      method: `${method}`,
      body: data.profile,
    }),
  });
};

export const staffFormEditFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/edit/staff/form/detail/${data.sid}`,
      method: `${method}`,
      body: data.editProfile,
    }),
  });
};

export const addStudentToClassFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/auth/direct/institute/join/student/${data.phoneNumber}/class/${data.cid}?existingUser=${data.uid}`,
      method: `${method}`,
      body: data.addStudent,
    }),
  });
};
export const addStudentByXlSXFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/extra/excel/to/json/query/${data.cid}`,
      method: `${method}`,
      body: data.excelFile,
    }),
  });
};

export const getModeratorByInstituteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl1}/role/permission/${data.id}/all/ins/moderator?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const addModeratorByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/role/permission/${data.id}/ins/moderator`,
      method: `${method}`,
      body: data.addModerator,
    }),
  });
};
export const updateModeratorByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/role/permission/update/ins/mod/${data.mid}`,
      method: `${method}`,
      body: data.updateModerator,
    }),
  });
};
export const deleteModeratorByInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/role/permission/${data.id}/destroy/ins/mod/${data.mid}`,
      method: `${method}`,
    }),
  });
};

export const exportStudentAttendanceZipFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/attendance/all/class/${data.cid}/zip?month=${data.month}&year=${data.year}&is_type=${data.is_type}`,
      method: `${method}`,
      body: data.zipData,
    }),
  });
};

export const exportStudentSubjectAttendanceZipFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/attendance/all/subject/${data.sid}/zip?month=${data.month}&year=${data.year}&is_type=${data.is_type}`,
      method: `${method}`,
      body: data.zipData,
    }),
  });
};

export const exportStudentReportZipFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/exam/class/${data.cid}/final/report/zip`,
      method: `${method}`,
    }),
  });
};

export const assignDesignationToStaffFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/batch/${data.bid}/assign/staff/desigantion`,
      method: `${method}`,
    }),
  });
};

export const deleteOneClassAllStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/auth/remove/platform/one/institute/${data.cid}/all/student`,
      method: `${method}`,
      body: data.student_list,
    }),
  });
};
export const batchLockUnlockActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/batch/batch/${data.bid}/complete/uncomplete/action`,
      method: `${method}`,
    }),
  });
};

export const addUnapprovedStudentExcelByInstituteFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/extra/excel/to/json/${data.id}/un/approved/student/query`,
      method: `${method}`,
      body: data.excelFile,
    }),
  });
};
export const getUnapprovedStudentByInstituteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/${data?.id}/unapprove-student/list/query?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const departmentStudentFormFunction = (builder) => {
  return builder.query({
    query: (did) => `${postUrl1}/department/${did}/student/form`,
  });
};

export const departmentFormSettingUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/department/${data.did}/form/setting/update`,
      method: `${method}`,
      body: data.formSetting,
    }),
  });
};

export const studentProfileTextFormatFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/extra/${data.id}/name/case/query`,
      method: `${method}`,
      body: data.caseFormat,
    }),
  });
};

export const addStaffDesignationMultipleFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/extra/designation/check/${data.id}/staff/${data.sid}/query`,
      method: `${method}`,
      body: data.desiData,
    }),
  });
};

export const getStaffDesignationMultipleFunction = (builder) => {
  return builder.query({
    query: (id) => `${postUrl1}/extra/designation/check/${id}/all/query`,
  });
};
