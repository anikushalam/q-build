import { authApi } from "./authApi";
import {
  fileUploadFunction,
  authUniqueUsernameFunction,
  authUniqueEmailFunction,
  authLoginFunction,
  authUserNumberFunction,
  authUserNumberVerifyFunction,
  authUserForgetFunction,
  authUserForgetOtpFunction,
  authUserSetPasswordFunction,
  authUserCreateAccountFunction,
  authUserCreatePasswordFunction,
} from "./auth_query_mutation_function";

const authApiDynamic = authApi.injectEndpoints({
  endpoints: (builder) => ({
    fileUpload: fileUploadFunction(builder),
    authUniqueUsername: authUniqueUsernameFunction(builder),
    authUniqueEmail: authUniqueEmailFunction(builder),

    authLogin: authLoginFunction(builder),

    authUserNumber: authUserNumberFunction(builder),
    authUserNumberVerify: authUserNumberVerifyFunction(builder),
    authUserForget: authUserForgetFunction(builder),
    authUserForgetOtp: authUserForgetOtpFunction(builder),
    authUserSetPassword: authUserSetPasswordFunction(builder),
    authUserCreateAccount: authUserCreateAccountFunction(builder),
    authUserCreatePassword: authUserCreatePasswordFunction(builder),
  }),
});

export const {
  useFileUploadMutation,
  useAuthUniqueUsernameQuery,
  useAuthUniqueEmailQuery,

  useAuthLoginMutation,

  useAuthUserNumberMutation,
  useAuthUserNumberVerifyMutation,
  useAuthUserForgetMutation,
  useAuthUserForgetOtpMutation,
  useAuthUserSetPasswordMutation,
  useAuthUserCreateAccountMutation,
  useAuthUserCreatePasswordMutation,
} = authApiDynamic;
