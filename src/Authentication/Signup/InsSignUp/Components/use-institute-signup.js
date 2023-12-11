import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useExitsingEmailVerify,
  useExitsingUsernameVerify,
  useInstituteCreatePassword,
  useInstituteRegisterAccount,
  useInstituteRegisterMobile,
  useInstituteVerifyPhoneNumber,
} from "../../../../hooks/authentication-api";
import { authChangeAction } from "../../../../redux/store/authenticate-slice";
import { idChangeAction } from "../../../../redux/store/department-slice";

const useInstituteSignup = () => {
  const [checkValue, setCheckValue] = useState({
    email: "",
    username: "",
  });
  const [validInput, setValidInput] = useState({
    username: "",
    email: "",
  });
  const [instituteRegisterMobile] = useInstituteRegisterMobile();
  const [instituteVerifyPhoneNumber] = useInstituteVerifyPhoneNumber();
  const [instituteRegisterAccount] = useInstituteRegisterAccount();
  const [instituteCreatePassword] = useInstituteCreatePassword();
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // console.info("thmsnfasnm,", exitsingEmailVerify);
  const mobileRegister = async (mobileNumber) => {
    try {
      const { data } = await instituteRegisterMobile(mobileNumber);
      if (data.message) {
        return {
          phoneNumber: data?.insPhoneNumber,
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
      const { data } = await instituteVerifyPhoneNumber({
        insOtpCode: verifcation.otpCode,
        insPhoneNumber: verifcation.phoneNumber,
      });
      if (data.message === "Invalid OTP") {
        return {
          msg: "Invalid OTP",
          run: true,
        };
      } else if (data.insMobileStatus) {
        return {
          mobileStatus: data.insMobileStatus,
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
      //   for (let [key, value] of formDatas.entries()) {
      //     console.info(key, value);
      //   }

      const { data } = await instituteRegisterAccount(formDatas);
      if (data.institute) {
        return {
          _id: data.institute?._id,
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
      const { data } = await instituteCreatePassword(password);
      if (data.login) {
        dispatch(
          authChangeAction.loginQuery({
            login: true,
            token: data.token,
            id: data.institute?._id,
            status: true,
            loggedinAs: "institute",
          })
        );

        dispatch(
          idChangeAction.addInstituteId({
            id: data.institute ? data.institute?._id : "",
            loggedinAs: "institute",
            username: data.institute?.name,
          })
        );

        navigate(`/q/${data.institute.name}/feed`);
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

export { useInstituteSignup };
