import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";

const ResendTimer = ({
  setNotificationState,
  onMobileNumberAdd,
  phoneNumber,
}) => {
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
  const ResendOtpHandler = async () => {
    if (!timer) {
      const data = await onMobileNumberAdd({
        insPhoneNumber: phoneNumber,
        status: "Not Verified",
      });
      if (data.phoneNumber) {
        setNotificationState({
          msg: `${t("code_will_re_sent_to")} xxx-xxx-${phoneNumber.substr(
            6,
            11
          )}`,
          run: true,
        });
      }
      onClickResetTimer();
    }
  };
  return (
    <>
      <span className={style.resend} onClick={ResendOtpHandler}>
        {" "}
        {t("resend")}{" "}
      </span>
      <span className={style.resend}>{timer}</span>
    </>
  );
};

export default ResendTimer;
