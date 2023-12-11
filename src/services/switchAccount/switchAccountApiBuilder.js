const postUrl = "/api/v1";

// -------------------Switch User Account--------------------------------------------

export const switchUserAccount = (builder) => {
  return builder.query({
    query: (id) => `${postUrl}/user/${id}/staff/student/role`,
  });
};
