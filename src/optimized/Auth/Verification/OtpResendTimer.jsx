import React, { memo, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../Auth.module.css";

const OtpResendTimer = ({ onOtpResend }) => {
  const { t } = useTranslation();
  const [timer, setTimer] = useState("");
  const Ref = useRef(null);
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(seconds);
    }
  };

  const clearTimer = (e) => {
    setTimer("40");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 40);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const onClickResetTimer = () => {
    clearTimer(getDeadTime());
  };
  const ResendOtpHandler = () => {
    if (!timer) {
      onOtpResend();
      onClickResetTimer();
    }
  };
  return (
    <>
      <span className={style.auth_otp_resend} onClick={ResendOtpHandler}>
        {" "}
        {t("resend")}{" "}
      </span>
      <span className={style.auth_otp_resend}>{timer}</span>
    </>
  );
};

export default memo(OtpResendTimer);
