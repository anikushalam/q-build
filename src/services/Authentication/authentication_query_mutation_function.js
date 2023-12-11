const baseUrl = "/api/v1";

export const authenticationLoginFunction = (builder, method) => {
  return builder.mutation({
    query: (login) => ({
      url: `${baseUrl}/auth/login`,
      method: method,
      body: login,
    }),
  });
};
export const authenticationWithUserLoginFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `api/v2/url/login/username/query?username=${data.username}`,
      method: "PATCH",
    }),
  });
};

export const verifyForgetUserNameFunction = (builder, method) => {
  return builder.mutation({
    query: (forgot) => ({
      url: `${baseUrl}/auth/user/forgot`,
      method: method,
      body: forgot,
    }),
  });
};

export const verifyForgetOtpFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/user/forgot/${data.fid}`,
      method: method,
      body: data.otp,
    }),
  });
};

export const forgetNewPasswordFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/user/reset/password/${data.rid}`,
      method: method,
      body: data.password,
    }),
  });
};

export const instituteRegisterMobileFunction = (builder, method) => {
  return builder.mutation({
    query: (phone) => ({
      url: `${baseUrl}/auth/ins-detail`,
      method: method,
      body: phone,
    }),
  });
};

export const instituteVerifyPhoneNumberFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/ins-detail-verify/${data.insPhoneNumber}`,
      method: method,
      body: data,
    }),
  });
};

export const instituteRegisterAccountFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/ins/register`,
      method: method,
      body: data,
    }),
  });
};

export const instituteCreatePasswordFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/ins/create-password/${data.id}`,
      method: method,
      body: data,
    }),
  });
};

export const userRegisterMobileFunction = (builder, method) => {
  return builder.mutation({
    query: (phone) => ({
      url: `${baseUrl}/auth/user-detail`,
      method: method,
      body: phone,
    }),
  });
};

export const userVerifyPhoneNumberFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/user-detail-verify/${data.userPhoneNumber}`,
      method: method,
      body: data,
    }),
  });
};

export const userRegisterAccountFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/profile-creation/${data.userPhoneNumber}`,
      method: method,
      body: data.profileCreation,
    }),
  });
};

export const userCreatePasswordFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/create-user-password/${data.id}`,
      method: method,
      body: data.password,
    }),
  });
};

///search code of student
export const searchCodeForJoinFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${baseUrl}/auth/classcode/search?search=${data.code}&author=${data.joinAs}`,
  });
};

export const studentDirectJoinFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/direct/join/student/${data.phoneNumber}`,
      method: method,
      body: data.direct_student,
    }),
  });
};

export const staffDirectJoinFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/direct/join/staff/${data.phoneNumber}`,
      method: method,
      body: data.direct_staff,
    }),
  });
};

export const fileUploadFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/onefile/web`,
      // url: `${baseUrl}/all-images/onefile`,
      method: method,
      body: data.fileUpload,
    }),
  });
};
export const fileUploadAndUpdatedFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/all-images/onefile/update`,
      method: method,
      body: data.fileUpdate,
    }),
  });
};

///search code of student
export const exitsingUsernameVerifyFunction = (builder) => {
  return builder.query({
    query: (username) => `${baseUrl}/auth/username/search?u_name=${username}`,
  });
};

export const exitsingEmailVerifyFunction = (builder) => {
  return builder.query({
    query: (email) => `${baseUrl}/auth/email/check/redundant?email=${email}`,
  });
};

export const exitsingUsernameEditFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/username?o_name=${data.o_name}&n_name=${data.n_name}`,
      method: method,
    }),
  });
};

// for single landing page to here
export const studentDirectJoinByApplicationFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/direct/join/admission/${data.phoneNumber}/apply/${data.aid}`,
      method: method,
      body: data.direct_student,
    }),
  });
};

// for single landing page to here
export const userloginDetailsProfileFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/student/user/login/query`,
      method: method,
      body: data.login_details,
    }),
  });
};

// for single landing page to here
export const userloginStaffProfileFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/edit/staff/user/login/query`,
      method: method,
      body: data.login_details,
    }),
  });
};

// for single landing page to here
export const studentDirectJoinByHostelApplicationFunction = (
  builder,
  method
) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/auth/direct/join/hostel/${data.phoneNumber}/apply/${data.aid}`,
      method: method,
      body: data.direct_student,
    }),
  });
};

export const uploadStudentFormPdfFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `${baseUrl}/extra/application/print/cdn/${data.sid}/query`,
      method: method,
      body: data.pdf_file,
    }),
  });
};
