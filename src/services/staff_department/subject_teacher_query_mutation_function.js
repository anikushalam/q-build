const subjectUrl = "/api/v1/ins";
const examUrl = "/api/v1/exam";
// const settingUrl = "/api/v1/class";
const lockUrl = "/api/v1/batch";
const assignmetUrl = "/api/v1/mcq/subject";
const mcqUrl = "/api/v1/mcq";
const attendanceUrl = "/api/v1/attendance";
const academicUrl = "/api/v1/academic";
const baseUrl = "/api/v1";
const copoUrl = "/api/v1/copo";
export const subjectProfileFunction = (builder) => {
  return builder.query({
    query: (data) => `${subjectUrl}/subject-detail/${data.sid}`,
  });
};

export const getAllStudentOneSubjectFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/class/${data.cid}/subject/all/student/query?subjectId=${
        data.subjectId ?? ""
      }&today=${data.today ?? ""}`,
  });
};

export const subjectAllExamFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/subjectteacher/${data.sid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const subjectOneExamAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/allstudents/subjectteacher/${data.sid}/exam/${data.eid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const subjectOneExamMarksFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/allstudents/marks/subjectteacher/${data.sid}`,
      method: `${method}`,
      body: data.marksList,
    }),
  });
};

export const subjectUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${lockUrl}/subject/${data.sid}/setting`,
      method: `${method}`,
      body: data.subjectUpdate,
    }),
  });
};

export const subjectSettingFunction = (builder) => {
  return builder.query({
    query: (sid) => `${lockUrl}/subject/${sid}/setting`,
  });
};
export const subjectCompleteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${lockUrl}/subject/${data.sid}`,
      method: `${method}`,
      body: data.status,
    }),
  });
};

export const subjectAllAssignmentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${assignmetUrl}/${data.sid}/assignment?page=${data.page}&limit=${data.limit}`,
  });
};

export const subjectOneAssignmentFunction = (builder) => {
  return builder.query({
    query: (aid) => `${mcqUrl}/one/${aid}/assignment`,
  });
};

export const subjectCreateAssignmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${assignmetUrl}/${data.sid}/assignment`,
      method: `${method}`,
      body: data.assignmentCreate,
    }),
  });
};

export const subjectUpdateAssignmentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/one/${data.aid}/assignment/edit/query`,
      method: "PATCH",
      body: data.assignmentCreate,
    }),
  });
};
export const subjectDeleteAssignmentFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/one/${data.aid}/assignment/destroy/query`,
      method: "DELETE",
    }),
  });
};
export const subjectAssignmentSubmitCountFunction = (builder) => {
  return builder.query({
    query: (aid) => `${assignmetUrl}/count/assignment/${aid}`,
  });
};

export const subjectAssignmentSubmitAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${assignmetUrl}/assignment/${data.aid}?page=${data.page}&limit=${data.limit}`,
  });
};

export const subjectAssignmentSubmitOneStudentDetailFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${assignmetUrl}/assignment/${data.aid}/student/${data.sid}`,
  });
};

export const subjectAssignmentSubmitOneStudentActionFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${assignmetUrl}/assignment/${data.aid}/student/${data.sid}`,
      method: `${method}`,
      body: data.assignmentAction,
    }),
  });
};

//=============FOR MCQ RELATED API==============================

export const mcqProfileFunction = (builder) => {
  return builder.query({
    query: (sid) => `${mcqUrl}/subject/profile/${sid}`,
  });
};

export const mcqProfileUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/subject/profile/${data.sid}`,
      method: `${method}`,
      body: data.mcqProfile,
    }),
  });
};

export const mcqUniversalDepartmentFunction = (builder) => {
  return builder.query({
    query: () => `${mcqUrl}/universal/department`,
  });
};

export const mcqUniversalClassFunction = (builder) => {
  return builder.query({
    query: (did) => `${mcqUrl}/universal/class/${did}`,
  });
};

export const mcqUniversalSubjectFunction = (builder) => {
  return builder.query({
    query: (cid) => `${mcqUrl}/universal/subject/${cid}`,
  });
};

export const mcqQuestionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/${data.smid}/question/${data.cmid}?page=${data.page}&limit=${data.limit}&usmid=${data.usmid}&ucmid=${data.ucmid}&search=${data.search}`,
  });
};

export const mcqOneQuestionFunction = (builder) => {
  return builder.query({
    query: (qid) => `${mcqUrl}/question/${qid}/one`,
  });
};
export const mcqCreateQuestionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/${data.smid}/question/${data.cmid}`,
      method: `${method}`,
      body: data.createQuestion,
    }),
  });
};

export const mcqQuestionCountFunction = (builder) => {
  return builder.query({
    query: (data) => `${mcqUrl}/${data.smid}/question/count/${data.cmid}`,
  });
};

export const mcqTestsetFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/question/${data.smid}/testset/${data.cmid}?page=${data.page}&limit=${data.limit}&usmid=${data.usmid}&ucmid=${data.ucmid}`,
  });
};

export const mcqCreateTestsetFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/question/${data.smid}/testset/${data.cmid}`,
      method: `${method}`,
      body: data.createTestSet,
    }),
  });
};

export const mcqUpdateTestsetFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/testset/${data.tsid}/detail`,
      method: `${method}`,
      body: data.updateTestSet,
    }),
  });
};
export const mcqTestsetDetailFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/testset/${data.tsid}/detail?page=${data.page}&limit=${data.limit}`,
  });
};

export const mcqTestsetTakenFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${mcqUrl}/subject/${data.sid}/take/testset`,
      method: `${method}`,
      body: data.takeTestset,
    }),
  });
};

export const mcqTestsetTakenListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/subject/${data.sid}/taken/alltestset?page=${data.page}&limit=${data.limit}`,
  });
};

export const mcqTestsetAllotedFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${mcqUrl}/subject/alloted/${data.atsid}/testset/student?page=${data.page}&limit=${data.limit}`,
  });
};

//attendance

export const subjectAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) => `${attendanceUrl}/subject/${data.sid}/optional/student`,
  });
};

export const subjectStudentCurrentAttendanceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${attendanceUrl}/subject/${data.sid}/student/attendance?date=${data.date}`,
  });
};

export const subjectStudentAttendanceFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${attendanceUrl}/subject/${data.sid}/student/attendance?flow=${
        data?.flow ?? "Normal_Lecture"
      }`,
      method: `${method}`,
      body: data.attendance,
    }),
  });
};

export const subjectStudentAttendanceUpdateFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${attendanceUrl}/student/subject/update/${data.said}?flow=${
        data?.flow ?? "Normal_Lecture"
      }`,
      method: `${method}`,
      body: data.attendanceUpdate,
    }),
  });
};

export const backlogExamAllStudentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${examUrl}/one/subject/${data.sid}/exam/${data.eid}/student/list`,
  });
};

export const backlogExamMarksFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${examUrl}/one/subject/${data.sid}/student/mark/update`,
      method: `${method}`,
      body: data.marksList,
    }),
  });
};

// for academic
export const getOneSubjectProfileFunction = (builder) => {
  return builder.query({
    query: (sid) => `${baseUrl}/ins/${sid}/one/subject/query`,
  });
};

export const getAllChapterOneSubjectFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${academicUrl}/analytics/${data.sid}/all/chapter?page=${
        data.page
      }&limit=${data.limit}&search=${data.search ?? ""}`,
  });
};

export const getAllTopicOneChapterFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${academicUrl}/analytics/${data.cid}/all/topic?page=${data.page}&limit=${
        data.limit
      }&search=${data.search ?? ""}`,
  });
};

export const getDetailOneTopicFunction = (builder) => {
  return builder.query({
    query: (tid) => `${academicUrl}/analytics/${tid}/one/topic/query`,
  });
};

export const oneSubjectExcelUploadFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/excel/to/json/query/${data.sid}/chapter/query`,
      method: `${method}`,
      body: data.excelFile,
    }),
  });
};
export const updateOneTopicChapterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/edit/one/${data.ctid}/topic/query`,
      method: `${method}`,
      body: data.topicUpdate,
    }),
  });
};
export const deleteOneTopicChapterFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/${data.ctid}/one/topic/destroy/${data.sid}/query`,
      method: `${method}`,
    }),
  });
};
export const updateOneTopicStatusFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/${data.tid}/status/query`,
      method: `${method}`,
      // body: data.topicStatus,
    }),
  });
};

export const addDailyUpdateWithRecordingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/dailyupdate/subject/${data.sid}`,
      method: `${method}`,
      body: data.addDailyUpdate,
    }),
  });
};

export const updateDailyUpdateWithRecordingFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/edit/${data.did}/new/lecture/${data.sid}/query`,
      method: `${method}`,
      body: data.dailyUpdate,
    }),
  });
};

//
export const getAllDailySubjectFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/dailyupdate/subject/${data.sid}?page=${data.page}&limit=${data.limit}`,
  });
};

// for edit academic edit count
export const subjectEditAcademicFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${subjectUrl}/${data.sid}/one/subject/edit/query`,
      method: `${method}`,
      body: data.academicUpdate,
    }),
  });
};

export const getAllCopoAttainmentFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${copoUrl}/subject/master/${data.smid}/query?flow=${data?.flow ?? ""}`,
  });
};
export const addCopoAttainmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${copoUrl}/subject/master/${data.smid}/query`,
      method: `POST`,
      body: data.addCopo,
    }),
  });
};

export const updateCopoAttainmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${copoUrl}/attainment/${data.atid}/action/query`,
      method: `PATCH`,
      body: data.updateCopo,
    }),
  });
};

export const removeCopoAttainmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${copoUrl}/attainment/${data.atid}/action/query`,
      method: `DELETE`,
    }),
  });
};
export const getCopoAttainmentTableFunction = (builder) => {
  return builder.query({
    query: (data) => `${copoUrl}/subject/co/attainment/${data.sid}/query`,
  });
};
export const getCopoMappingAttainmentTableFunction = (builder) => {
  return builder.query({
    query: (data) => `${copoUrl}/subject/copo/mapping/${data.sid}/query`,
  });
};

export const updateCopoMappingAttainmentFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${copoUrl}/subject/copo/mapping/${data.sid}/query`,
      method: `PATCH`,
      body: data.updateCopo,
    }),
  });
};

export const addChapterSubjectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/${data.sid}/add/chapter/query`,
      method: `POST`,
      body: data.addChapter,
    }),
  });
};
export const addChapterTopicSubjectFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/${data.chid}/add/chapter/topic/query`,
      method: `POST`,
      body: data.addTopic,
    }),
  });
};

export const subjectExtraLectureFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${academicUrl}/analytics/filter/by/date/lecture/query?sid=${
        data?.sid ?? ""
      }`,
      method: `PATCH`,
      body: data.extraBody,
    }),
  });
};

export const getExtraLectureOneAttendaceFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${attendanceUrl}/subject/${data.sid}/student/attendance/extra/${data.aid}`,
  });
};
