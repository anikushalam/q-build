const postUrl = "/api/v1";
var id = localStorage.getItem("user");

// ----------------Staff ID Card----------------

export const fetchStaffIdCard = (builder) => {
  return builder.query({
    query: () => `${postUrl}/extra/export/staff/card/${id}`,
  });
};

// -------------------Student ID Card--------------------------------------------
export const extractStudentIDCard = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/export/student/card?id=${data?.id}`,
      method: "POST",
      body: data,
    }),
  });
};

// ----------------Student Export Data----------------

export const fetchStudentExportData = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/export/student/all/${data.id}?all_depart=${data.all_depart}&batch_status=${data.batch_status}&gender=${data.gender}&category=${data.caste}&religion=${data.religion}`,
      method: "PATCH",
      body: data.body,
    }),
  });
};

// ----------------Finance Export Data----------------

export const fetchFinanceExportData = (builder) => {
  return builder.query({
    query: (fid) => `${postUrl}/extra/export/student/all/${fid}`,
  });
};

export const exportOneStudentIdCardFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/export/one/student/card/query`,
      method: "POST",
      body: data.studentId,
    }),
  });
};

export const exportZipStudentProfilePhotoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/extra/${data.instituteId}/zip/file/query`,
      method: "PATCH",
    }),
  });
};
