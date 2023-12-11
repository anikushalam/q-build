const postUrl = "/api/v1/search";
const postUrl1 = "/api/v1/ins";
const postUrl2 = "/api/v1/user";
const baseUrl = "/api/v1";
export const instituteAllSearchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      // `${postUrl}/institute/${data.id}/allsearch?search=${data.search}&page=${data.page}&limit=${data.limit}`,
      `${postUrl}/institute/${data.id}/allsearch/web?search=${data.search}&page=${data.page}&limit=${data.limit}&filter=${data.filter}`,
  });
};

export const instituteDepartmentSearchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/${data.id}/department?search=${data.search}&page=${data.page}&limit=${data.limit}`,
  });
};
export const followInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/follow`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const unfollowInstituteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/unfollow`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const followInstituteListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl1}/${data.id}/followers-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const followingInstituteListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl1}/${data.id}/following-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const followInstituteListIdFunction = (builder) => {
  return builder.query({
    query: (data) => `${postUrl1}/${data.id}/followers-idlist`,
  });
};

export const followingInstituteListIdFunction = (builder) => {
  return builder.query({
    query: (data) => `${postUrl1}/${data.id}/following-idlist`,
  });
};

export const instituteCreateAnnouncementFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl1}/announcement/${data.id}`,
      method: `${method}`,
      body: data.announcement,
    }),
  });
};

export const userAllSearchFunction = (builder) => {
  return builder.query({
    query: (data) =>
      // `${postUrl}/user/${data.id}/allsearch?search=${data.search}&page=${data.page}&limit=${data.limit}`,
      `${postUrl}/user/${data.id}/allsearch/web?search=${data.search}&page=${data.page}&limit=${data.limit}&filter=${data.filter}`,
  });
};

export const followUserListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl2}/${data.id}/followers-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const followingUserListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl2}/${data.id}/following-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const circleUserListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl2}/${data.id}/circle-array?page=${data.page}&limit=${data.limit}`,
  });
};

export const followUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/follow/user`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const unfollowUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/unfollow/user`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const followUserInsFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/follow/institute`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const unfollowUserInsFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/unfollow/institute`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const circleUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/circle/user`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const unCircleUserFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl2}/uncircle/user`,
      method: `${method}`,
      body: data,
    }),
  });
};

export const universalUserFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/manage/admin/all/user?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
