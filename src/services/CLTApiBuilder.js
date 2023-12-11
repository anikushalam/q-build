export const solvedQuery = (builder) => {
  return builder.query({
    query: (data) =>
      `/compleave/institute/${data.ins_Id}/complaint?status=${data.status}`,
  });
};

export const unsolvedQuery = (builder) => {
  return builder.query({
    query: (data) =>
      `/compleave/institute/${data.ins_Id}/complaint?status=${data.status}`,
  });
};

export const complaintDetail = (builder) => {
  return builder.query({
    query: (complaint) => `/compleave/complaint/${complaint}`,
  });
};

export const complaintOneSolvedByInstitute = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/compleave/complaint/${data.cid}`,
      method: "PATCH",
      body: data.status,
    }),
  });
};
export const leaveDetail = (builder) => {
  return builder.query({
    query: (leave) => `/compleave/institute/${leave}`,
  });
};

export const fetchLeave = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/compleave/institute/${data.id}`,
      method: "PATCH",
      body: data,
    }),
  });
};

export const transferDetail = (builder) => {
  return builder.query({
    query: (transfer) => `/compleave/institute/${transfer}/transfer`,
  });
};

export const approveStaffReplace = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/compleave/institute/staff/${data.tid}/transfer`,
      method: "PATCH",
      body: data,
    }),
  });
};

export const rejectStaffReplace = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/compleave/institute/staff/${data.tid}/transfer`,
      method: "PUT",
      body: data,
    }),
  });
};
