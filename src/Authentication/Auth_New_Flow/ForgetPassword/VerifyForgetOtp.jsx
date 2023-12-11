import React from "react";
import { useState } from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { NumberInput } from "../InputWithIcon/InputWithIcon";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../../validation/Snackbar";
import { useVerifyForgetOtp } from "../../../hooks/authentication-api";
import { useTranslation } from "react-i18next";
function VerifyForgetOtp({ userId, setUserId, setStatus }) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const [forgetOtp] = useVerifyForgetOtp();
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const verifyHandler = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (userId && otp?.length === 4) {
      forgetOtp({
        fid: userId,
        otp: { userOtpCode: otp },
      })
        .then((res) => {
          if (res.data.message === "Invalid OTP") {
            setNotificationState({
              msg: "Please enter a valid opt",
              run: true,
            });
          } else if (res.data.user) {
            setUserId(res.data.user._id);
            setStatus("CHANGE_PASSWORD");
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      setNotificationState({ msg: t("enter_valid_option"), run: true });
      setDisabled((pre) => !pre);
    }
  };
  return (
    <>
      <form onSubmit={verifyHandler}>
        <div className={style.card}>
          <h6 className={style.cardhdark}>{t("verification_code")}</h6>

          <p className={`${style.pusername} ${style.ptoc}`}>
            {t("otp_sent_on_mobile")}
          </p>

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
        type={
          notificationState.msg === "Invalid OTP" ||
          notificationState.msg === "Please enter a valid opt"
            ? "error"
            : "success"
        }
      />
    </>
  );
}

export default VerifyForgetOtp;
