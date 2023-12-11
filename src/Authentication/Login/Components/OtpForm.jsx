import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import { useVerifyForgetOtp } from "../../../hooks/authentication-api";
import { Notfication } from "../../../validation/Snackbar";
import "./Container.css";
import style from "./Container.module.css";
import { NumberInput } from "../../Auth_New_Flow/InputWithIcon/InputWithIcon";
function OtpForm({ userId, setUserId, setActive, onSignupLink }) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const [forgetOtp] = useVerifyForgetOtp();
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const verifyHandler = () => {
    setDisabled((pre) => !pre);
    if (userId && otp?.length === 4) {
      forgetOtp({
        fid: userId,
        otp: { userOtpCode: otp },
      })
        .then((res) => {
          // console.info("sfhgs", res);
          if (res.data.message === "Invalid OTP") {
            setNotificationState({
              msg: "Please enter a valid opt",
              run: true,
            });
          } else if (res.data.institute) {
            setUserId(res.data.institute._id);
            setActive("NEW_PASSWORD");
          } else if (res.data.user) {
            setUserId(res.data.user._id);
            setActive("NEW_PASSWORD");
          } else {
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      setNotificationState({ msg: "Please enter a valid opt", run: true });
      setDisabled((pre) => !pre);
    }
  };

  return (
    <div className={style.modalContainerr}>
      <div className={`${style.form} ${style.forggotPassForm}`}>
        <h3>{t("forgot_password")}</h3>

        <p>{t("Please-enter-your-verification-code-label")}</p>
        <div
          style={{
            width: "100%",
            marginTop: "3rem",
          }}
        >
          <NumberInput
            icon="/images/landing-page/otp.svg"
            placeholder={t("verification_code")}
            name="insOTP"
            maxlength="4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <div className={style.forgotPass}>
          <p onClick={() => setActive("LOGIN")}>
            &nbsp;
            {t("back_to_login")}
          </p>
        </div>

        <ButtonWithAction
          buttonText={t("verify")}
          customStyleButton={{
            minHeight: "2.3rem",
            backgroundColor: "#575caa",
          }}
          disabled={disabled}
          shwoLoader={true}
          onAction={verifyHandler}
        />
      </div>

      <div className={style.footer}>
        <p>
          {t("new_to_qviple")}
          <span className={style.signupbtn}>
            <Link
              onClick={onSignupLink}
              to={"/signup"}
              style={{
                textDecoration: "none",
                color: "#2c5dcd",
                marginLeft: "0.3vw",
              }}
            >
              {t("signup")}
            </Link>
          </span>
        </p>
      </div>
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
    </div>
  );
}

export default OtpForm;
