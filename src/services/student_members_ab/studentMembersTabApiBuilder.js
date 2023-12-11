const postUrl = "/api/v1";
const mcqUrl = "/api/v1/mcq/student";
// var id = localStorage.getItem("user");

// -------------------  Student Previous Report List in Student Side--------------------------------------------

export const studentPreviousReportList = (builder) => {
  return builder.query({
    query: (data) => `${postUrl}/edit/student/${data.sid}/previous`,
  });
};

// -------------------  Student Previous Report Card in Student Side--------------------------------------------

export const studentPreviousReportCard = (builder) => {
  return builder.query({
    query: (data) => `${postUrl}/edit/student/${data.pid}/previous/report`,
  });
};

// MCQ Things

export const mcqAllTestsetFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/${data.sid}/alltestset?page=${data.page}&limit=${data.limit}`,
  });
};

export const mcqTestsetPreviewDetailFunction = (builder) => {
  return builder.query({
    query: (tsid) => `${mcqUrl}/testset/${tsid}/detail`,
  });
};

export const mcqTestsetExamDetailFunction = (builder) => {
  return builder.query({
    query: (tsid) => `${mcqUrl}/testset/paper/${tsid}`,
  });
};
export const mcqQuestionGivenFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/testset/paper/${data.tsid}`,
      method: `${method}`,
      body: data.correctAnswer,
    }),
  });
};

export const mcqTestsetExamSubmitFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/testset/${data.tsid}/complete`,
      method: `${method}`,
      body: data.submitTestset,
    }),
  });
};

export const mcqTestsetExamResultFunction = (builder) => {
  return builder.query({
    query: (tsid) => `${mcqUrl}/testset/${tsid}/complete`,
  });
};

export const timeTableSchedule = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/timetable/student/${data.cid}/schedule/list?status=${data.status}&date=${data.date}`,
  });
};

export const mentorList = (builder) => {
  return builder.query({
    query: (data) => `${postUrl}/class/${data.sid}/all/active/mentors`,
  });
};

export const allElectionListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/election/event/all/${data.sid}/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneElectionDetailFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/election/event/${data.sid}/query/one/election/${data.eid}`,
  });
};

export const allBacklogListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/exam/backlog/one/previous/student/${data.sid}/subject?page=${data.page}&limit=${data.limit}`,
  });
};

//subject attendance
export const studentSubjectAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/attendance/subject/student-calender/${data.sid}?month=${data.month}&year=${data.year}&subjectId=${data.subjectId}`,
  });
};

export const getSubjectListByStudentFunction = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/attendance/student/${sid}/subject/list`,
  });
};

// assignment
export const getAssignmentByStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/${data.sid}/assignment?page=${data.page}&limit=${data.limit}`,
  });
};

export const getAssignmentCountByStudentFunction = (builder) => {
  return builder.query({
    query: (sid) => `${mcqUrl}/${sid}/count/assignment`,
  });
};

export const getOneAssignmentDetailByStudentFunction = (builder) => {
  return builder.query({
    query: (aid) => `${mcqUrl}/assignment/${aid}`,
  });
};

export const assignmentActionByStudentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/assignment/${data.aid}`,
      method: "PATCH",
      body: data.assignmentData,
    }),
  });
};

export const getStudentDailyUpdateFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/dailyupdate/student/${data.sid}?page=${data.page}&limit=${
        data.limit
      }&subjectId=${data?.subjectId ?? ""}`,
  });
};

export const getClassmatesByStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/extra/all/classmates/${data.sid}/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const getAllMentorQueryStudentFunction = (builder) => {
  return builder.query({
    query: (sid) => `${postUrl}/mentor/mentee/${sid}/all/query`,
  });
};

export const aksStudentMentorQueryFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/mentor/mentee/${data.mid}/new/query/${data.sid}`,
      method: `${method}`,
      body: data.query,
    }),
  });
};

export const mentorQueryReportStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/mentor/mentee/one/query/${data.qid}/report`,
      method: `${method}`,
    }),
  });
};

export const getAllCertificateStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/extra/all/${data.sid}/certificate/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const raiseIssueCertificateStudentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/add/${data.sid}/certificate/query?id=${
        data.id ?? ""
      }`,
      method: `POST`,
      body: data.issueCertificate,
    }),
  });
};
