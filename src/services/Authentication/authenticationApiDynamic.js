import { authenticationApi } from "./authenticationApi";
import {
  authenticationWithUserLoginFunction,
  authenticationLoginFunction,
  verifyForgetUserNameFunction,
  verifyForgetOtpFunction,
  forgetNewPasswordFunction,
  instituteRegisterMobileFunction,
  instituteVerifyPhoneNumberFunction,
  instituteRegisterAccountFunction,
  instituteCreatePasswordFunction,
  userRegisterMobileFunction,
  userVerifyPhoneNumberFunction,
  userRegisterAccountFunction,
  userCreatePasswordFunction,
  searchCodeForJoinFunction,
  studentDirectJoinFunction,
  staffDirectJoinFunction,
  fileUploadFunction,
  fileUploadAndUpdatedFunction,
  exitsingUsernameVerifyFunction,
  exitsingUsernameEditFunction,
  exitsingEmailVerifyFunction,
  studentDirectJoinByApplicationFunction,
  userloginDetailsProfileFunction,
  userloginStaffProfileFunction,
  studentDirectJoinByHostelApplicationFunction,
  uploadStudentFormPdfFunction,
} from "./authentication_query_mutation_function";
import { patchMethod, postMethod } from "../BaseUrl";

const authenticationApiDynamic = authenticationApi.injectEndpoints({
  endpoints: (builder) => ({
    authenticationWithUserLogin: authenticationWithUserLoginFunction(
      builder,
      postMethod
    ),
    authenticationLogin: authenticationLoginFunction(builder, postMethod),
    verifyForgetUserName: verifyForgetUserNameFunction(builder, postMethod),
    verifyForgetOtp: verifyForgetOtpFunction(builder, postMethod),
    forgetNewPassword: forgetNewPasswordFunction(builder, postMethod),
    instituteRegisterMobile: instituteRegisterMobileFunction(
      builder,
      postMethod
    ),
    instituteVerifyPhoneNumber: instituteVerifyPhoneNumberFunction(
      builder,
      postMethod
    ),
    instituteRegisterAccount: instituteRegisterAccountFunction(
      builder,
      postMethod
    ),
    instituteCreatePassword: instituteCreatePasswordFunction(
      builder,
      postMethod
    ),
    userRegisterMobile: userRegisterMobileFunction(builder, postMethod),
    userVerifyPhoneNumber: userVerifyPhoneNumberFunction(builder, postMethod),
    userRegisterAccount: userRegisterAccountFunction(builder, postMethod),
    userCreatePassword: userCreatePasswordFunction(builder, postMethod),
    searchCodeForJoin: searchCodeForJoinFunction(builder),
    studentDirectJoin: studentDirectJoinFunction(builder, postMethod),
    staffDirectJoin: staffDirectJoinFunction(builder, postMethod),
    fileUpload: fileUploadFunction(builder, patchMethod),
    fileUploadAndUpdated: fileUploadAndUpdatedFunction(builder, patchMethod),
    exitsingUsernameVerify: exitsingUsernameVerifyFunction(builder),
    exitsingUsernameEdit: exitsingUsernameEditFunction(builder, patchMethod),
    exitsingEmailVerify: exitsingEmailVerifyFunction(builder),
    studentDirectJoinByApplication: studentDirectJoinByApplicationFunction(
      builder,
      postMethod
    ),
    userloginDetailsProfile: userloginDetailsProfileFunction(
      builder,
      patchMethod
    ),
    userloginStaffProfile: userloginStaffProfileFunction(builder, patchMethod),

    studentDirectJoinByHostelApplication:
      studentDirectJoinByHostelApplicationFunction(builder, postMethod),
    uploadStudentFormPdf: uploadStudentFormPdfFunction(builder, patchMethod),
  }),
});

export const {
  useAuthenticationWithUserLoginMutation,
  useAuthenticationLoginMutation,
  useVerifyForgetUserNameMutation,
  useVerifyForgetOtpMutation,
  useForgetNewPasswordMutation,
  useInstituteRegisterMobileMutation,
  useInstituteVerifyPhoneNumberMutation,
  useInstituteRegisterAccountMutation,
  useInstituteCreatePasswordMutation,
  useUserRegisterMobileMutation,
  useUserVerifyPhoneNumberMutation,
  useUserRegisterAccountMutation,
  useUserCreatePasswordMutation,
  useSearchCodeForJoinQuery,
  useStudentDirectJoinMutation,
  useStaffDirectJoinMutation,
  useFileUploadMutation,
  useFileUploadAndUpdatedMutation,
  useExitsingUsernameVerifyQuery,
  useExitsingUsernameEditMutation,
  useExitsingEmailVerifyQuery,
  useStudentDirectJoinByApplicationMutation,
  useUserloginDetailsProfileMutation,
  useUserloginStaffProfileMutation,
  useStudentDirectJoinByHostelApplicationMutation,
  useUploadStudentFormPdfMutation,
} = authenticationApiDynamic;
