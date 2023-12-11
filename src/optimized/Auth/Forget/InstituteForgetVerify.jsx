import { useState } from "react";
import GetStarted from "../GetStarted";
import AuthCardWrapper from "../AuthCardWrapper";
import { useTranslation } from "react-i18next";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import AuthFormFieldWithIcon from "@/Ui/Auth/AuthFormFieldWithIcon";
import style from "../Auth.module.css";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import {
  useAuthUserForget,
  useAuthUserForgetOtp,
} from "@/Hooks/ApiHooks/Auth/auth-api";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import OtpResendTimer from "../Verification/OtpResendTimer";
import { useLocation, useNavigate } from "react-router-dom";
import { decryption } from "@/Services/Encryption/decrypt";

const InstituteForgetVerify = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [state, setState] = useState({
    userOtpCode: "",
  });

  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });
  const [authUserForgetOtp] = useAuthUserForgetOtp();
  const [authUserForget] = useAuthUserForget();

  const onChangeHandler = (e) => {
    setState((prev) => ({ ...prev, userOtpCode: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state);
    if (existingRequiredField(validation) && getQuery.state?.uid) {
      setDisabled((pre) => !pre);
      authUserForgetOtp({
        uid: getQuery.state?.uid,
        otp: state,
      })
        .then((res) => {
          let response = decryption(res?.data?.encrypt);
          if (response?.institute) {
            navigate("/institute/forget/password", {
              state: {
                uid: response?.institute,
              },
            });
          } else {
            setSnackbar({
              msg: "Invalid Otp",
              open: true,
              variant: "error",
            });
          }
          setDisabled((pre) => !pre);
        })
        .catch((err) => {
          setSnackbar({
            msg: `Time out of request with reason ${err}`,
            open: true,
            variant: "error",
          });
          setDisabled((pre) => !pre);
        });
    } else {
      setErrorField(validation);
    }
  };

  const onOtpResend = () => {
    if (getQuery?.state?.phoneNumber) {
      authUserForget({
        forgot: {
          username: getQuery?.state?.phoneNumber,
        },
      })
        .then((res) => {
          let response = decryption(res?.data?.encrypt);
          if (response?.institute?._id) {
            setSnackbar({
              open: true,
              msg: `Code will be resent on mobile number`,
              variant: "success",
            });
          } else {
            setSnackbar({
              msg: "Invalid username",
              open: true,
              variant: "error",
            });
          }
          setDisabled((pre) => !pre);
        })
        .catch((err) => {
          setSnackbar({
            msg: `Time out of request with reason ${err}`,
            open: true,
            variant: "error",
          });
          setDisabled((pre) => !pre);
        });
    }
  };

  return (
    <GetStarted>
      <AuthCardWrapper
        title="forget_password_verification_code"
        subTitle={`${t("verification_code_note")} mobile number`}
        subTitleStyle={{
          fontSize: "0.7rem",
        }}
        titleStyle={{
          fontSize: "1rem",
        }}
      >
        <form onSubmit={onSubmitHandler} className={style.auth_login_form}>
          <AuthFormFieldWithIcon
            placeholder={t("verification_code")}
            fieldIconUrl={`${assestsAuthUrl}/auth-otp.svg`}
            maxLength="4"
            validate={errorField["userOtpCode"]}
            name="userOtpCode"
            value={state.userOtpCode}
            onChange={onChangeHandler}
          />
          <div className={style.auth_footer_container}>
            <p className={style.auth_otp_text}>
              {t("if_you_did_not_recieve_otp")}
              <OtpResendTimer onOtpResend={onOtpResend} />
            </p>
          </div>

          <ButtonWithTypeSubmit type="submit" buttonText={t("verify")} />

          <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
        </form>
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default InstituteForgetVerify;
