import style from "./InsSignUp/Components/component.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import SigninHeader from "../Login/Components/SigninHeader";
import { Notfication } from "../../validation/Snackbar";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import ResendTimer from "../Auth_New_Flow/VerifyOtp/ResendTimer";

function SignUP({
  clickBackToLogin,
  phoneNumber,
  setActiveTab,
  onMobileVerified,
  onMobileNumberAdd,
  onMobileStatus,
  activeType,
}) {
  const { t } = useTranslation();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);

  const optRef = useRef("");
  const OtpVerifyHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (optRef.current?.value?.length === 4) {
      const data = await onMobileVerified({
        otpCode: optRef.current?.value,
        phoneNumber: phoneNumber,
      });
      if (data?.msg) {
        setNotificationState({
          msg: data?.msg,
          run: data.run,
        });
        setDisabled((pre) => !pre);
      } else if (data?.mobileStatus) {
        onMobileStatus({ type: "mobileStatus", value: data.mobileStatus });
        setActiveTab(activeType);
      } else {
        setNotificationState({
          msg: "Something went wrong request...",
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: "Please enter 4 digit otp number",
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };

  return (
    <>
      <div className={style.modalContainerr}>
        <form onSubmit={OtpVerifyHandler}>
          <div className={`${style.form} ${style.forggotPassForm}`}>
            <h3>{t("verification_code")}</h3>

            <p>{t("Please-enter-your-verification-code-label")}</p>
            <div className={style.otpcontainer}>
              <input
                type="tel"
                maxLength="4"
                minLength="4"
                ref={optRef}
                placeholder={t("enter_otp")}
              />
            </div>
            <div
              className={style.didnot}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "15px",
              }}
            >
              <p>
                {t("if_not_rec")}{" "}
                <ResendTimer
                  setNotificationState={setNotificationState}
                  onMobileNumberAdd={onMobileNumberAdd}
                  phoneNumber={phoneNumber}
                />
              </p>
            </div>

            <div className={style.toc}></div>
            <ButtonWithTypeSubmit
              buttonText={t("verify")}
              customStyleButton={{
                minHeight: "2.3rem",
                backgroundColor: "#575caa",
              }}
              type="submit"
              disabled={disabled}
            />
          </div>
        </form>

        <div className={style.footer}>
          <p>
            {t("already_register")}{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <span
                onClick={clickBackToLogin}
                className={`${style.signupbtn} ${style.backtologin}`}
              >
                {t("log_in")}
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type={notificationState.msg === "Invalid OTP" ? "error" : "success"}
      />
    </>
  );
}

export default SignUP;
