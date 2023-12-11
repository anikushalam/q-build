import {
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
} from "../../../Services/Auth/authDynamicApi";

export const useFileUpload = () => {
  const [fileUpload] = useFileUploadMutation();
  return [fileUpload];
};
export const useAuthUniqueUsername = (args) => {
  const { data, refetch, isLoading } = useAuthUniqueUsernameQuery(
    args?.username,
    {
      skip: args.skip,
    }
  );
  return {
    authUniqueUsername: data,
    authUniqueUsernameRefetch: refetch,
    authUniqueUsernameLoading: isLoading,
  };
};
export const useAuthUniqueEmail = (args) => {
  const { data, refetch, isLoading } = useAuthUniqueEmailQuery(args?.email, {
    skip: args.skip,
  });
  return {
    authUniqueEmail: data,
    authUniqueEmailRefetch: refetch,
    authUniqueEmailLoading: isLoading,
  };
};

export const useAuthLogin = () => {
  const [authLogin] = useAuthLoginMutation();
  return [authLogin];
};

export const useAuthUserNumber = () => {
  const [authUserNumber] = useAuthUserNumberMutation();
  return [authUserNumber];
};
export const useAuthUserNumberVerify = () => {
  const [authUserNumberVerify] = useAuthUserNumberVerifyMutation();
  return [authUserNumberVerify];
};
export const useAuthUserForget = () => {
  const [authUserForget] = useAuthUserForgetMutation();
  return [authUserForget];
};
export const useAuthUserForgetOtp = () => {
  const [authUserForgetOtp] = useAuthUserForgetOtpMutation();
  return [authUserForgetOtp];
};
export const useAuthUserSetPassword = () => {
  const [authUserSetPassword] = useAuthUserSetPasswordMutation();
  return [authUserSetPassword];
};
export const useAuthUserCreateAccount = () => {
  const [authUserCreateAccount] = useAuthUserCreateAccountMutation();
  return [authUserCreateAccount];
};
export const useAuthUserCreatePassword = () => {
  const [authUserCreatePassword] = useAuthUserCreatePasswordMutation();
  return [authUserCreatePassword];
};
