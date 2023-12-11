import { PATCH, POST } from "../UrlConfig/MethodType";
export const fileUploadFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/all-images/onefile/web`,
      method: PATCH,
      body: data.fileUpload,
    }),
  });
};

export const authUniqueUsernameFunction = (builder) => {
  return builder.query({
    query: (username) => `/auth/username/search?u_name=${username}`,
  });
};

export const authUniqueEmailFunction = (builder) => {
  return builder.query({
    query: (email) => `/auth/email/check/redundant?email=${email}`,
  });
};

export const authLoginFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/login`,
      method: POST,
      body: data.login,
    }),
  });
};

export const authUserNumberFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/user-detail`,
      method: POST,
      body: data,
    }),
  });
};

export const authUserNumberVerifyFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/user-detail-verify/${data.userPhoneNumber}`,
      method: POST,
      body: data,
    }),
  });
};

export const authUserForgetFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/user/forgot`,
      method: POST,
      body: data.forgot,
    }),
  });
};

export const authUserForgetOtpFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/user/forgot/${data.uid}`,
      method: POST,
      body: data.otp,
    }),
  });
};

export const authUserSetPasswordFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/user/reset/password/${data.uid}`,
      method: POST,
      body: data.password,
    }),
  });
};

export const authUserCreateAccountFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/profile-creation/${data.userPhoneNumber}`,
      method: POST,
      body: data.profileCreation,
    }),
  });
};

export const authUserCreatePasswordFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/auth/create-user-password/${data.uid}`,
      method: POST,
      body: data.password,
    }),
  });
};

// export const instituteRegisterMobileFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/ins-detail`,
//       method: POST,
//       body: data.phone,
//     }),
//   });
// };

// export const instituteVerifyPhoneNumberFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/ins-detail-verify/${data.insPhoneNumber}`,
//       method: POST,
//       body: data,
//     }),
//   });
// };

// export const instituteRegisterAccountFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/ins/register`,
//       method: POST,
//       body: data,
//     }),
//   });
// };

// export const instituteCreatePasswordFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/ins/create-password/${data.id}`,
//       method: POST,
//       body: data,
//     }),
//   });
// };

// ///search code of student
// export const searchCodeForJoinFunction = (builder) => {
//   return builder.query({
//     query: (data) =>
//       `/auth/classcode/search?search=${data.code}&author=${data.joinAs}`,
//   });
// };

// export const studentDirectJoinFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/direct/join/student/${data.phoneNumber}`,
//       method: POST,
//       body: data.direct_student,
//     }),
//   });
// };

// export const staffDirectJoinFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/direct/join/staff/${data.phoneNumber}`,
//       method: POST,
//       body: data.direct_staff,
//     }),
//   });
// };

// export const fileUploadAndUpdatedFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/all-images/onefile/update`,
//       method: PATCH,
//       body: data.fileUpdate,
//     }),
//   });
// };

// ///search code of student

// export const exitsingUsernameEditFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/username?o_name=${data.o_name}&n_name=${data.n_name}`,
//       method: PATCH,
//     }),
//   });
// };

// // for single landing page to here
// export const studentDirectJoinByApplicationFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/direct/join/admission/${data.phoneNumber}/apply/${data.aid}`,
//       method: POST,
//       body: data.direct_student,
//     }),
//   });
// };

// // for single landing page to here
// export const userloginDetailsProfileFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/edit/student/user/login/query`,
//       method: PATCH,
//       body: data.login_details,
//     }),
//   });
// };

// // for single landing page to here
// export const userloginStaffProfileFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/edit/staff/user/login/query`,
//       method: PATCH,
//       body: data.login_details,
//     }),
//   });
// };

// // for single landing page to here
// export const studentDirectJoinByHostelApplicationFunction = (
//   builder,
//   method
// ) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/auth/direct/join/hostel/${data.phoneNumber}/apply/${data.aid}`,
//       method: POST,
//       body: data.direct_student,
//     }),
//   });
// };

// export const uploadStudentFormPdfFunction = (builder, method) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/extra/application/print/cdn/${data.sid}/query`,
//       method: PATCH,
//       body: data.pdf_file,
//     }),
//   });
// };
