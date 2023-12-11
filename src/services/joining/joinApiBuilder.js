const postUrl = "/api/v1";
var id = localStorage.getItem("user");

// -------------------Student Joining--------------------------------------------

export const studentJoin = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/ins/${data.uid}/studentform/${data.insId}`,
      method: "POST",
      body: data.studentData,
    }),
  });
};

// -------------------Applied Student Role--------------------------------------------

export const appliedStudentRole = (builder) => {
  return builder.query({
    query: (uid) => `${postUrl}/user/${uid ? uid : id}/student-role`,
  });
};

// ------------------- Student Designation Data--------------------------------------------

export const studentDesignationData = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/user/studentdesignationdata/${sid}`,
  });
};

// ------------------- Student Complaint List--------------------------------------------

export const studentComplaintList = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/compleave/student/${sid}/complaint`,
  });
};

// ------------------- Student Complaint Detail--------------------------------------------

export const studentComplaintDetail = (builder) => {
  return builder.query({
    query: (cid) => `${postUrl}/compleave/complaint/${cid}`,
  });
};

// ------------------- Get ClassHead and DepartmentHead Title --------------------------------------------

export const studentComplaintDestination = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/compleave/student/${sid}/compdest`,
  });
};

// -------------------Complaint Request By Student --------------------------------------------

export const studentComplaintRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/student/${data.sid}/complaint`,
      method: "POST",
      body: data.complaintData,
    }),
  });
};

// -------------------Delete Complaint By Student --------------------------------------------

export const deleteStudentComplaint = (builder) => {
  return builder.mutation({
    query: (cid) => ({
      url: `${postUrl}/compleave/complaint/${cid}`,
      method: "DELETE",
    }),
  });
};

// -------------------Report to Admin of Complaint By Student --------------------------------------------

export const reportStudentComplaint = (builder) => {
  return builder.mutation({
    query: (cid) => ({
      url: `${postUrl}/compleave/complaint/${cid}`,
      method: "PUT",
    }),
  });
};

// ------------------- Student Leave List--------------------------------------------

export const studentLeaveList = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/compleave/student/${sid}`,
  });
};

// -------------------Leave Request By Student --------------------------------------------

export const studentLeaveRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/student/${data.sid}`,
      method: "POST",
      body: data.LeaveData,
    }),
  });
};

// -------------------Delete Leave By Student --------------------------------------------

export const deleteStudentLeave = (builder) => {
  return builder.mutation({
    query: (lid) => ({
      url: `${postUrl}/compleave/leave/${lid}`,
      method: "DELETE",
    }),
  });
};

// -------------------Transfer Request By Student --------------------------------------------

export const studentTransferRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/student/${data.sid}/transfer`,
      method: "POST",
      body: data.transferData,
    }),
  });
};

// -------------------Staff Joining--------------------------------------------

export const staffJoin = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/ins/${data.uid}/staffform/${data.insId}`,
      method: "POST",
      body: data.staffData,
    }),
  });
};

// -------------------Applied Staff Role--------------------------------------------

export const appliedStaffRole = (builder) => {
  return builder.query({
    query: (uid) => `${postUrl}/user/${uid ? uid : id}/staff-role`,
  });
};

// -------------------Get Staff Code--------------------------------------------

export const insStaffCode = (builder) => {
  return builder.query({
    query: (insId) => `${postUrl}/ins/${insId}/staff-code`,
  });
};

// ------------------- Staff Designation Data--------------------------------------------

export const staffDesignationData = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/user/staffdesignationdata/${sid}`,
  });
};

// ------------------- Staff Salary History--------------------------------------------

export const staffSalaryHistory = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/user/staff/${sid}/sal/history`,
  });
};

// ------------------- Staff Complaint List--------------------------------------------

export const staffComplaintList = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/compleave/staff/${sid}/complaint`,
  });
};

// -------------------Complaint Request By Staff --------------------------------------------

export const staffComplaintRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/staff/${data.sid}/complaint`,
      method: "POST",
      body: data.complaintData,
    }),
  });
};

// -------------------Delete Complaint By Staff --------------------------------------------

export const deleteStaffComplaint = (builder) => {
  return builder.mutation({
    query: (cid) => ({
      url: `${postUrl}/compleave/staff/complaint/${cid}`,
      method: "DELETE",
    }),
  });
};

// -------------------Leave Request By Staff --------------------------------------------

export const staffLeaveRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/staff/${data.sid}`,
      method: "POST",
      body: data.LeaveData,
    }),
  });
};

// ------------------- Staff Leave List--------------------------------------------

export const staffLeaveList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/compleave/staff/${data.sid}?page=${data.page}&limit=${
        data.limit
      }&category=${data?.category ?? ""}`,
  });
};

// -------------------Delete Leave By Staff --------------------------------------------

export const deleteStaffLeave = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/staff/leave/${data.lid}`,
      method: "DELETE",
    }),
  });
};

// -------------------Transfer Request By Staff --------------------------------------------

export const staffTransferRequest = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/compleave/staff/${data.sid}/transfer`,
      method: "POST",
      body: data.transferData,
    }),
  });
};

// -------------------Application Status--------------------------------------------

export const applicationStatus = (builder) => {
  return builder.query({
    query: (uid) => `${postUrl}/user/${uid ? uid : id}/application/status`,
  });
};

// /ins/{id}/staff-code

// -------------------Student Exam List--------------------------------------------

export const studentExamList = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/exam/student/${sid}/allexam`,
  });
};

// ------------------- Subject List of a Particular Exam--------------------------------------------

export const subjectList = (builder) => {
  return builder.query({
    query: (data) => `${postUrl}/exam/student/${data.sid}/exam/${data.eid}`,
  });
};

// ------------------- Assignment List in Student Side--------------------------------------------

export const assignmentList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/mcq/student/${data.sid}/assignment?page=${data.page}&limit=10`,
  });
};

// ------------------- Assignment Count in Student Side--------------------------------------------

export const assignmentCount = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/mcq/student/${sid}/count/assignment`,
  });
};

// ------------------- Single Assignment Details in Student Side--------------------------------------------

export const assignmentDetail = (builder) => {
  return builder.query({
    query: (aid) => `${postUrl}/mcq/student/assignment/${aid}`,
  });
};

// -------------------  Assignment Submit in Student Side--------------------------------------------

export const submitAssignment = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/mcq/student/assignment/${data.aid}`,
      method: "PATCH",
      body: data.assignmentData,
    }),
  });
};

// -------------------Student Calander Attendence Monthwise--------------------------------------------

export const studentAttendanceCalender = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/attendance/student-calender/${data.sid}?month=${data.month}&year=${data.year}`,
  });
};
