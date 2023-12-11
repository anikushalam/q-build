const baseUrl = "/api/v1";
const activityUrl = "/api/v1/user";
const electionUrl = "/api/v1/election/event";

export const instituteAllNotificationFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/ins/dashboard/${data.id}/notify?page=${data.page}&limit=${data.limit}`,
  });
};

export const userAllNotificationFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/user/dashboard/${data.id}/notify?page=${data.page}&limit=${data.limit}`,
  });
};

export const activityFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${activityUrl}/${data.id}/activity?page=${data.page}&limit=${
        data.limit
      }&category=${data?.category ?? ""}`,
  });
};

export const activityNotifiationCountFunction = (builder) => {
  return builder.query({
    query: (id) => `${activityUrl}/${id}/activity/total/notify`,
  });
};

export const activityMarkViewFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${activityUrl}/${data.id}/mark/viewed?type=${data.type}`,
      method: method,
    }),
  });
};

export const activityMarkAsReadFunction = (builder, method) => {
  return builder.mutation({
    query: (nid) => ({
      url: `${activityUrl}/read/notify/user/${nid}`,
      method: method,
    }),
  });
};

export const activityAppliedFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${electionUrl}/${data.eid}/apply/${data.sid}`,
      method: `${method}`,
      body: data.appliedElection,
    }),
  });
};

export const activityElectionVoteFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${electionUrl}/${data.eid}/status/${data.apid}/candidate/${data.sid}/vote/${data.aid}`,
      method: `${method}`,
    }),
  });
};

export const activitySupportMemberFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${electionUrl}/${data.did}/one/institute?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

// == for gr number edit
export const instituteAllGRNotificationFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/extra/all/${data.id}/query?page=${data.page}&limit=${data.limit}`,
  });
};

export const instituteGRNotificationActionFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/status/${data.qid}/query?status=${data.status}`,
      method: `${method}`,
    }),
  });
};
