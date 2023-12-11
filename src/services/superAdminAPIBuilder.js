const adminId = localStorage.getItem("user");

export const oneDashboard = (builder) => {
  return builder.query({
    query: (data) => `/admin/${data}`,
  });
};

export const approveArray = (builder) => {
  return builder.query({
    query: (data) =>
      `/admin/approve/array?page=${data.info.page}&limit=${data.info.limit}`,
  });
};

export const pendingArray = (builder) => {
  return builder.query({
    query: (admin) => `/admin/${admin}/pending-array`,
  });
};

export const userArray = (builder) => {
  return builder.query({
    query: (data) =>
      `/admin/user/array?page=${data.info.page}&limit=${data.info.limit}`,
  });
};

export const oneInstituteProfile = (builder) => {
  return builder.query({
    query: (id) => `/admin/one/institute/${id}`,
  });
};

export const markApprove = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/${adminId}/approve/ins/${data.id}`,
      method: "POST",
      body: data,
    }),
  });
};

export const markReject = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/${adminId}/reject/ins/${data.id}`,
      method: "POST",
    }),
  });
};

export const careerArray = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/landing/career-detail`,
      method: "POST",
      body: data,
    }),
  });
};

export const universalInstitute = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/${adminId}/ins/universal`,
      method: "POST",
      body: data,
    }),
  });
};

export const adminCount = (builder) => {
  return builder.query({
    query: () => "/admin/count/detail",
  });
};

export const recentChat = (builder) => {
  return builder.query({
    query: (data) => `/chat/support/admin/chat/${data.userId}`,
  });
};

export const fetchSupportMessage = (builder) => {
  return builder.query({
    query: (chatId) => `/message/support/admin/message/${chatId}`,
  });
};

export const activateInstitute = (builder) => {
  return builder.query({
    query: (admin) => `/admin/${admin}/approve/activate-array`,
  });
};

export const internalPayment = (builder) => {
  return builder.query({
    query: () => `/all/payment/day`,
  });
};

export const activateInstituteVolume = (builder) => {
  return builder.query({
    query: () => `/admin/${adminId}/approve/activate/volume-array`,
  });
};

export const referralPayment = (builder) => {
  return builder.query({
    query: () => `/admin/referral/user/payment`,
  });
};

export const fetchPayment = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/${data.aid}/referral/${data.uid}/pay`,
      method: "POST",
      body: data,
    }),
  });
};

export const verifyPayment = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/${data.aid}/bank/detail/verification/${data.id}`,
      method: "POST",
      body: data,
    }),
  });
};

export const getTouch = (builder) => {
  return builder.query({
    query: () => `/admin/get/touch`,
  });
};

export const rePayInstitute = (builder) => {
  return builder.mutation({
    query: (data) => ({
      //   url: `/admin/${data.aid}/repay/${data.uid}/institute`,
      url: `/admin/${data.aid}/repay/${data.uid}/institute`,
      method: "POST",
      body: data,
    }),
  });
};

export const carrierData = (builder) => {
  return builder.query({
    query: () => `/admin/carrier/query`,
  });
};

export const reportPost = (builder) => {
  return builder.query({
    query: () => `/admin/report/query`,
  });
};

export const notificationData = (builder) => {
  return builder.query({
    query: () => `/admin/notification/query`,
  });
};

export const notificationCountData = (builder) => {
  return builder.query({
    query: () => `/admin/dashboard/notify/count`,
  });
};

export const repayArray = (builder) => {
  return builder.query({
    query: (institute) => `/admin/repay/query/institute/${institute}`,
  });
};

export const statsCount = (builder) => {
  return builder.query({
    query: () => `/admin/social/post/count`,
  });
};

export const likeCount = (builder) => {
  return builder.query({
    query: () => `/admin/social/like/count`,
  });
};

export const openOneInstitute = (builder) => {
  return builder.query({
    query: (insId) => `/admin/one/institute/${insId}/profile`,
  });
};

export const blockStatus = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/institute/${data}/block`,
      method: "PATCH",
    }),
  });
};

export const openOneUser = (builder) => {
  return builder.query({
    query: (user) => `/admin/one/user/${user}`,
  });
};

export const blockUserStatus = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/user/${data}/block`,
      method: "PATCH",
    }),
  });
};

export const platformPosts = (builder) => {
  return builder.query({
    query: (data) =>
      `/admin/social/platform/all/posts?page=${data.info.page}&limit=${data.info.limit}`,
  });
};

export const postStatus = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/admin/post/${data}/block`,
      method: "PATCH",
    }),
  });
};
