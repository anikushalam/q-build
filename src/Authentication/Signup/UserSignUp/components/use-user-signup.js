import {
  useUserRegisterMobile,
  useUserVerifyPhoneNumber,
  useUserRegisterAccount,
  useUserCreatePassword,
  useExitsingUsernameVerify,
  useExitsingEmailVerify,
} from "../../../../hooks/authentication-api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authChangeAction } from "../../../../redux/store/authenticate-slice";
import { idChangeAction } from "../../../../redux/store/department-slice";
import { useEffect, useState } from "react";
const useUserSignup = () => {
  const [checkValue, setCheckValue] = useState({
    email: "",
    username: "",
  });
  const [validInput, setValidInput] = useState({
    username: "",
    email: "",
  });
  const [userRegisterMobile] = useUserRegisterMobile();
  const [userVerifyPhoneNumber] = useUserVerifyPhoneNumber();
  const [userRegisterAccount] = useUserRegisterAccount();
  const [userCreatePassword] = useUserCreatePassword();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exitsingUsernameVerify, exitsingUsernameVerifyRefetch } =
    useExitsingUsernameVerify({
      username: checkValue.username,
      skip: !checkValue.username,
    });
  const { exitsingEmailVerify, exitsingEmailVerifyRefetch } =
    useExitsingEmailVerify({
      email: checkValue.email,
      skip: !checkValue.email,
    });

  useEffect(() => {
    if (checkValue.email) exitsingEmailVerifyRefetch();
    if (checkValue.username) exitsingUsernameVerifyRefetch();
  }, [checkValue.email, checkValue.username]);

  useEffect(() => {
    if (exitsingUsernameVerify) {
      setValidInput((prev) => ({
        ...prev,
        username: exitsingUsernameVerify?.username?._id ? "invalid" : "valid",
      }));
    }
    if (exitsingEmailVerify) {
      setValidInput((prev) => ({
        ...prev,
        email: exitsingEmailVerify?.valid_flag?.emailId ? "invalid" : "valid",
      }));
    }
  }, [exitsingUsernameVerify, exitsingEmailVerify]);
  const mobileRegister = async (mobileNumber) => {
    try {
      const { data } = await userRegisterMobile({
        userPhoneNumber: mobileNumber.insPhoneNumber,
        status: mobileNumber.status,
      });
      if (data.message) {
        return {
          phoneNumber: data?.userPhoneNumber,
        };
      }
    } catch {
      return {
        msg: "Time out of request...",
      };
    }
  };

  const numberVerification = async (verifcation) => {
    try {
      const { data } = await userVerifyPhoneNumber({
        userOtpCode: verifcation.otpCode,
        userPhoneNumber: verifcation.phoneNumber,
      });
      if (data.message === "Invalid OTP") {
        return {
          msg: "Invalid OTP",
          run: true,
        };
      } else if (data?.userStatus) {
        return {
          mobileStatus: data?.userStatus,
          data,
        };
      } else {
      }
    } catch {
      return {
        msg: "Time out of request...",
      };
    }
  };

  const registerAccount = async (formData) => {
    try {
      const formDatas = new FormData();
      for (let obj in formData) {
        formDatas.append(obj, formData[obj]);
      }
      const { data } = await userRegisterAccount({
        userPhoneNumber: formData.id,
        profileCreation: formDatas,
      });
      if (data.message === "Username already exists") {
        return {
          msg: "Username already exists",
          notify: true,
        };
      }
      if (data.user) {
        return {
          _id: data.user?._id,
        };
      }
    } catch {
      return {
        msg: "Time out of request...",
      };
    }
  };

  const createPassword = async (password) => {
    try {
      const { data } = await userCreatePassword({
        id: password.id,
        password: {
          userPassword: password.insPassword,
          userRePassword: password.insRePassword,
        },
      });
      if (data.login) {
        dispatch(
          authChangeAction.loginQuery({
            login: true,
            token: data.token,
            id: data.user?._id,
            status: true,
            loggedinAs: "user",
            username: data.user.username,
          })
        );

        dispatch(
          idChangeAction.addInstituteId({
            id: data.user ? data.user?._id : "",
            loggedinAs: "user",
          })
        );

        navigate(`/q/${data.user.username}/feed`);
      }
    } catch {
      return {
        msg: "Time out or wrong request...",
      };
    }
  };

  const verifyUsername = async (username) => {
    setCheckValue(() => ({
      email: "",
      username: username,
    }));
  };
  const verifyEmail = async (email) => {
    setCheckValue(() => ({
      email: email,
      username: "",
    }));
  };
  return {
    mobileRegister,
    numberVerification,
    registerAccount,
    createPassword,
    verifyUsername,
    verifyEmail,
    validInput,
  };
};

export { useUserSignup };
