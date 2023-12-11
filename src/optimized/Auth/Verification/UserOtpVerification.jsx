import { useState } from "react";
import GetStarted from "../GetStarted";
import AuthCardWrapper from "../AuthCardWrapper";
import style from "../Auth.module.css";
import AuthFormFieldWithIcon from "@/Ui/Auth/AuthFormFieldWithIcon";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import OtpResendTimer from "./OtpResendTimer";
import {
  useAuthUserNumber,
  useAuthUserNumberVerify,
} from "@/Hooks/ApiHooks/Auth/auth-api";
import { decryption } from "@/Services/Encryption/decrypt";
import { invalidateAuthEmailOrMobile } from "@/Validation/Auth/invalidateAuthUsername";
import { useLogin } from "../hooks/use-login";

const UserOtpVerification = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const { existingAccountLogin } = useLogin();

  const [state, setState] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });

  const [authUserNumberVerify] = useAuthUserNumberVerify();
  const [authUserNumber] = useAuthUserNumber();

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state && getQuery?.state?.phoneNumber) {
      setDisabled((pre) => !pre);
      if (Array.isArray(getQuery?.state?.phoneNumber)) {
        let uPhone = "";
        for (let ar of getQuery?.state?.phoneNumber) {
          if (ar?.code === state) {
            uPhone = ar?.phone;
            break;
          }
        }
        authUserNumberVerify({
          userOtpCode: state,
          userPhoneNumber: uPhone,
        })
          .then((res) => {
            let response = decryption(res?.data?.encrypt);
            setDisabled((pre) => !pre);
            if (response?.message === "Invalid OTP") {
              setSnackbar({
                msg: response?.message,
                open: true,
                variant: "error",
              });
            } else {
              if (response?.accounts?.length === 1)
                existingAccountLogin(response?.accounts?.[0]);
              else
                navigate("/existing-account", {
                  state: {
                    accounts: response?.accounts,
                    phoneNumber: getQuery?.state?.phoneNumber,
                  },
                });
            }
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
        authUserNumberVerify({
          userOtpCode: state,
          userPhoneNumber: getQuery?.state?.phoneNumber,
        })
          .then((res) => {
            let response = decryption(res?.data?.encrypt);
            setDisabled((pre) => !pre);
            if (response?.message === "Invalid OTP") {
              setSnackbar({
                msg: response?.message,
                open: true,
                variant: "error",
              });
            } else {
              if (response?.accounts?.length === 1)
                existingAccountLogin(response?.accounts?.[0]);
              else
                navigate("/existing-account", {
                  state: {
                    accounts: response?.accounts,
                    phoneNumber: getQuery?.state?.phoneNumber,
                  },
                });
            }
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
    } else {
      setErrorField({
        userOtpCode: "* required",
      });
    }
  };

  const onOtpResend = () => {
    authUserNumber({
      userPhoneNumber: `${getQuery?.state?.phoneNumber}`,
      status: "Not Verified",
      is_qid: invalidateAuthEmailOrMobile(`${getQuery?.state?.phoneNumber}`),
    })
      .then((res) => {
        let response = decryption(res?.data?.encrypt);
        if (response?.userPhoneNumber) {
          setSnackbar({
            open: true,
            msg: `Code will be resent to xxxx- ${`${getQuery?.state?.phoneNumber}`?.substring(
              `${getQuery?.state?.phoneNumber}`?.length - 4
            )}`,
            variant: "success",
          });
        }
      })
      .catch(() => {
        setSnackbar({
          open: true,
          msg: "Time out of request...",
          variant: "error",
        });
      });
  };
  return (
    <GetStarted>
      <AuthCardWrapper
        title="verification_code"
        subTitle={`${t("verification_code_note")}${
          getQuery.state?.type ?? ""
        }${t("ending")} xxxx - ${`${getQuery?.state?.phoneNumber}`?.substring(
          `${getQuery?.state?.phoneNumber}`?.length - 4
        )}`}
        subTitleStyle={{
          fontSize: "0.8rem",
        }}
      >
        <form onSubmit={onSubmitHandler} className={style.auth_login_form}>
          <AuthFormFieldWithIcon
            placeholder={t("verification_code")}
            fieldIconUrl={`${assestsAuthUrl}/auth-otp.svg`}
            maxLength="4"
            validate={errorField["userOtpCode"]}
            name="userOtpCode"
            value={state}
            onChange={onChangeHandler}
          />

          <div className={style.auth_footer_container}>
            {Array.isArray(getQuery?.state?.phoneNumber) ? null : (
              <p className={style.auth_otp_text}>
                {t("if_you_did_not_recieve_otp")}
                <OtpResendTimer onOtpResend={onOtpResend} />
              </p>
            )}
          </div>

          <ButtonWithTypeSubmit
            type="submit"
            buttonText={t("verify")}
            disabled={disabled}
          />

          <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
        </form>
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default UserOtpVerification;
