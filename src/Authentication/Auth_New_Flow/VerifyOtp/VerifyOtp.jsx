import React from "react";
import { useState } from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { NumberInput } from "../InputWithIcon/InputWithIcon";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../../validation/Snackbar";
import { useTranslation } from "react-i18next";
import ResendTimer from "./ResendTimer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLogin } from "../../Login/Components/use-login";
function VerifyOtp({
  phoneNumber,
  setStatus,
  onMobileVerified,
  onMobileNumberAdd,
  onMobileStatus,
  activeType,
  setExistingAccount,
}) {
  const [disabled, setDisabled] = useState(false);
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { existingAccountLogin } = useLogin();

  // const optRef = useRef("");
  const [otp, setOtp] = useState("");
  const OtpVerifyHandler = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (otp?.length === 4) {
      const data = await onMobileVerified({
        otpCode: otp,
        phoneNumber: phoneNumber,
      });
      if (data?.msg) {
        setNotificationState({
          msg: data?.msg,
          run: data.run,
        });
        setDisabled((pre) => !pre);
      } else if (data?.mobileStatus) {
        if (searchParams?.get("go") === "landing_page") {
          if (data?.data?.accounts?.length) {
            setExistingAccount(data?.data?.accounts);
            setStatus({
              type: "LANDING_EXITING_ACCOUNT",
              phoneNumber: phoneNumber,
            });
          } else {
            if (searchParams?.get("gov") === "hostel") {
              navigate("/q/hostel/joining", {
                state: {
                  formAs: "STUDENT",
                  openAs: "landing_page",
                  appId: searchParams?.get("goaid"),
                  hostelId: searchParams?.get("gohid"),
                  verifyNumber: phoneNumber,
                },
              });
            } else {
              navigate("/q/joining", {
                state: {
                  formAs: "STUDENT",
                  openAs: "landing_page",
                  appId: searchParams?.get("goaid"),
                  instituteId: searchParams?.get("goid"),
                  departmentId: searchParams?.get("godid"),
                  applicationName: searchParams?.get("gon"),
                  whichFormShow: "DEPARTMENT",
                  verifyNumber: phoneNumber,
                },
              });
            }
          }
        } else {
          onMobileStatus({ type: "mobileStatus", value: data.mobileStatus });
          // console.info("this is verify", data?.data);
          // if (data?.data?.accounts?.length === 1) {
          //   existingAccountLogin({
          //     token: data?.data?.accounts[0]?.token,
          //     _id: data?.data?.accounts[0]?.user?._id,
          //     username: data?.data?.accounts[0]?.user?.username,
          //   });
          // } else if (data?.data?.accounts?.length > 1) {
          setExistingAccount(data?.data?.accounts);
          setStatus(activeType);
          // } else {
          //   setStatus("DESIGNATION_OPTION");
          // }
        }
      } else {
        setNotificationState({
          msg: t("something_wrong_rqst"),
          run: true,
        });
        setDisabled((pre) => !pre);
      }
    } else {
      setNotificationState({
        msg: t("enter_four_digit_otp"),
        run: true,
      });
      setDisabled((pre) => !pre);
    }
  };

  // const ResendOtpHandler = async () => {
  //   if (!timer) {
  //     const data = await onMobileNumberAdd({
  //       phoneNumber: phoneNumber,
  //       status: "Not Verified",
  //     });
  //     if (data.status) {
  //       setNotificationState({
  //         msg: `${t("code_will_sent_to")} xxx-xxx-${phoneNumber.substr(6, 11)}`,
  //         run: true,
  //       });
  //       setTimer("40");
  //     }
  //   }
  // };

  return (
    <>
      <form onSubmit={OtpVerifyHandler}>
        <div className={style.card}>
          <h6 className={style.cardhdark}>{t("verification_code")}</h6>
          {(i18n.language === "en" || i18n.language === "mt") && (
            <p className={`${style.pusername} ${style.ptoc}`}>
              {t("otp_sent_on_mobile_ending")}{" "}
              <span className={style.spantoc}>
                {" "}
                {phoneNumber?.substr(6, 11)}
              </span>
            </p>
          )}

          {i18n.language === "hn" && (
            <p className={`${style.pusername} ${style.ptoc}`}>
              <span className={style.spantoc}>
                {" "}
                {phoneNumber?.substr(6, 11)}
              </span>
              {t("otp_sent_on_mobile_ending")}{" "}
            </p>
          )}
          <div className={style.input_margin_top}>
            <NumberInput
              icon="/images/landing-page/otp.svg"
              placeholder={t("verification_code")}
              name="insOTP"
              maxlength="4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <p
            className={`${style.forgotpusername} ${style.ptoc} ${style.presend}`}
          >
            {t("if_not_rec")}{" "}
            {/* <span className={style.resend} onClick={ResendOtpHandler}>
              {" "}
              {t("resend")}{" "}
            </span> */}
            {/* <span className={style.resend}> */}
            <ResendTimer
              setNotificationState={setNotificationState}
              onMobileNumberAdd={onMobileNumberAdd}
              phoneNumber={phoneNumber}
            />
            {/* </span> */}
          </p>

          <div className={style.btn_containerotp}>
            <ButtonWithTypeSubmit
              disabled={disabled}
              buttonText={t("verify")}
              customStyleButton={{
                minHeight: "2.3rem",
                marginTop: "4rem",
              }}
              customStyleButtonText={{
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
      </form>
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

export default VerifyOtp;
