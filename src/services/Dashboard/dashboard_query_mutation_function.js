const baseUrlIns = "/api/v1/ins";
const baseUrl = "/api/v1";
//INSTITUTE RELATED DASHBOARD AND PROFILE
export const oneInstituteDashboardFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrlIns}/${id}/dash`,
  });
};
export const fetchDisplayPersonFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrlIns}/${id}/display/person-array`,
  });
};

export const addDisplayPersonFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data?.id}/display-person`,
      method: method,
      body: data.addData,
    }),
  });
};

export const updateDisplayPersonFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data.did}/display-person/update`,
      method: method,
      body: data,
    }),
  });
};

export const deleteDisplayPersonFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/${data.id}/display-person/${data.did}/delete/${data.uid}`,
      method: method,
    }),
  });
};

export const oneInstituteProfileFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.type === "ID"
        ? `${baseUrlIns}/${data.id}/profile`
        : `${baseUrlIns}/profile/${data.id}`,
  });
};

export const updateInstituteProfileFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/personal/info/${data.id}?old_initials=${data.old_initials}`,
      method: `${method}`,
      body: data.infoUpdate,
    }),
  });
};

export const instituteFollowersArrayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrlIns}/${data.id}/followers-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const instituteFollowingArrayFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrlIns}/${data.id}/following-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const instituteFollowingActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrlIns}/unfollow`,
      method: method,
      body: data,
    }),
  });
};

//USER RELATED DASHBOARD AND PROFILE

export const oneUserProfileFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrl}/user/${id}/profile`,
  });
};

export const oneUserProfileUsernameFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrl}/user/profile/${id}`,
  });
};

export const oneUserDashboardFunction = (builder) => {
  return builder.query({
    query: (id) => `${baseUrl}/user/${id}/dash/query`,
  });
};

export const addDailyQuoteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/community/quote/${data.id}/display`,
      method: method,
    }),
  });
};
