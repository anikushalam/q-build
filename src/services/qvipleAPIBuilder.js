var insId = localStorage.getItem("user");

export const getInTouchPage = (builder) => {
  return builder.mutation({
    query: (touch) => ({
      url: "/landing/get-touch",
      method: "POST",
      body: touch,
    }),
  });
};

export const deactivate = (builder) => {
  return builder.mutation({
    query: (deactivate) => ({
      url: `/ins/deactivate/info/${insId}`,
      method: "POST",
      body: deactivate,
    }),
  });
};

export const approveStaffArray = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data.id ? data.id : insId}/approve-staff/list?page=${
        data.page
      }&limit=${data.limit}&date=${data.date ? data.date : ""}`,
  });
};

export const pendingStaffArray = (builder) => {
  return builder.query({
    query: (id) => `/ins/${id ? id : insId}/pending-staff/list`,
  });
};

export const oneStaffProfile = (builder) => {
  return builder.query({
    query: (staffId) => `/ins/staff/${staffId}`,
  });
};

export const approveStudentArray = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data.id ? data.id : insId}/approve-student/list?page=${
        data.page
      }&limit=${data.limit}`,
  });
};

export const oneStudentProfile = (builder) => {
  return builder.query({
    query: (studentId) => `/ins/student/${studentId}`,
  });
};

export const instituteFollowersArray = (builder) => {
  return builder.query({
    query: (page) => `/ins/${insId}/followers-array?page=${page}&limit=10`,
  });
};

export const fetchAnnouncementArray = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data?.id}/announcemnt?page=${data?.page}&limit=${data.limit}`,
  });
};

export const fetchStarAnnouncement = (builder) => {
  return builder.query({
    query: (page) =>
      `/ins/${insId}/all/star-announcement?page=${page}&limit=10`,
  });
};

export const oneAnnouncementDetail = (builder) => {
  return builder.query({
    query: (aid) => `/ins/one/announcement/${aid}`,
  });
};

export const oneDashboard = (builder) => {
  return builder.query({
    query: (id) => `/ins/${insId ? insId : id}/dash`,
  });
};

export const fetchDisplayPerson = (builder) => {
  return builder.query({
    query: (id) => `/ins/${id ? id : insId}/display/person-array`,
  });
};

export const addDisplayPerson = (builder) => {
  return builder.mutation({
    query: (addData) => ({
      url: `/ins/${insId}/display-person`,
      method: "POST",
      body: addData,
    }),
  });
};

export const updateDisplayPerson = (builder) => {
  return builder.mutation({
    query: (editData) => ({
      url: `/ins/${editData.did}/display-person/update`,
      method: "PATCH",
      body: editData,
    }),
  });
};

export const deleteDisplayPerson = (builder) => {
  return builder.mutation({
    query: (deleteData) => ({
      url: `/ins/${insId}/display-person/${deleteData.did}/delete/${deleteData.uid}`,
      method: "DELETE",
      body: deleteData,
    }),
  });
};

export const fetchAllNotification = (builder) => {
  return builder.query({
    query: (page) => `/ins/dashboard/${insId}/notify?page=${page}&limit=10`,
  });
};

export const markStar = (builder) => {
  return builder.mutation({
    query: (aid) => ({
      url: `/ins/${aid}/star-announcement`,
      method: "POST",
    }),
  });
};

export const searchStaff = (builder) => {
  return builder.query({
    query: (data) => ({
      url: `/search/${data?.id ? data?.id : insId}/staff?search=${
        data.search
      }&page=${data.page}&limit=${data.limit}`,
    }),
  });
};

export const searchStudent = (builder) => {
  return builder.query({
    query: (value) => ({
      url: `/search/${insId}/student?search=${value}&page=${1}&limit=${5}`,
    }),
  });
};

export const universalSearchArray = (builder) => {
  return builder.query({
    query: (value) => ({
      url: `/search/institute/${insId}/allsearch?search=${value}&page=${1}&limit=${5}`,
    }),
  });
};

export const staffApprove = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/ins/${insId}/staff/approve/${data.sid}/user/${data.uid}`,
      method: "POST",
      body: data,
    }),
  });
};

export const staffReject = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/ins${insId}/staff/reject/${data.sid}/user/${data.uid}`,
      method: "POST",
      body: data,
    }),
  });
};

export const checkLogin = (builder) => {
  return builder.query({
    query: () => ({
      url: `/auth/login`,
    }),
  });
};

export const randomCodeArray = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/ins/${insId}/staff/code`,
      method: "POST",
      body: data,
    }),
  });
};

export const staffCode = (builder) => {
  return builder.query({
    query: () => ({
      url: `/ins/${insId}/staff-code`,
    }),
  });
};

export const userArray = (builder) => {
  return builder.query({
    query: () => `/all/user/list/data/`,
  });
};

export const oneUserProfile = (builder) => {
  return builder.query({
    query: (id) => `/user/${id}/profile`,
  });
};

export const oneUserProfileUsername = (builder) => {
  return builder.query({
    query: (id) => `/user/profile/${id}`,
  });
};

export const fetchUserAnnouncementArray = (builder) => {
  return builder.query({
    query: (id) => `/user/${insId}/ins-announcement`,
  });
};

export const oneUserDashboard = (builder) => {
  return builder.query({
    query: (id) => `/user/${insId ? insId : id}/dash/query`,
  });
};

export const fetchAllUserNotification = (builder) => {
  return builder.query({
    query: (page) => `/user/dashboard/${insId}/notify?page=${page}&limit=10`,
  });
};

// -----------------User---------------------

export const addUserRecoveryMail = (builder) => {
  return builder.mutation({
    query: (mail) => ({
      url: `/user/${insId}/recovery-mail`,
      method: "POST",
      body: mail,
    }),
  });
};

export const addUserRecoveryPhoneNumber = (builder) => {
  return builder.mutation({
    query: (phone) => ({
      url: `/user/phone/info/${insId}`,
      method: "POST",
      body: phone,
    }),
  });
};

export const userAgeRestriction = (builder) => {
  return builder.mutation({
    query: (phone) => ({
      url: `/extra/age/${insId}`,
      method: "PATCH",
    }),
  });
};

export const getUserAgeRestriction = (builder) => {
  return builder.query({
    query: (phone) => ({
      url: `/extra/age/${insId}/get`,
      method: "GET",
    }),
  });
};

export const feesArray = (builder) => {
  return builder.query({
    query: (student) => `/fees/student/${student}`,
  });
};

export const randomIns = (builder) => {
  return builder.query({
    query: () => `/extra/random/query`,
  });
};
