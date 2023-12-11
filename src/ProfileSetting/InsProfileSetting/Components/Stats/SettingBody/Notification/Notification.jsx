import React from "react";
import style from "./Notification.module.css";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";

function Notification() {
  const { t } = useTranslation();

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className={style.notification}>
      <h5>{t("notification_setting_details")}</h5>

      <div className={style.row}>
        <div>
          <h6>{t("email_id")}</h6>
          <p>{t("not-available-place")}</p>
        </div>
        <Switch {...label} />
      </div>
      <div className={style.row}>
        <div>
          <h6>{t("sms")}</h6>
          <p>{t("otp-approval")}</p>
        </div>
        <Switch {...label} defaultChecked />
      </div>

      <div className={style.divider}></div>

      <h5 style={{ marginTop: "2vw" }}>{t("other_notification")}</h5>

      {/* <div className={style.row}>
        <div>
          <h6>{t("sound-label")}</h6>
          <p>{t("not-available-label")}</p>
        </div>
        <Switch {...label} />
      </div> */}

      {/* <div className={style.row}>
        <div>
          <h6>{t("vibration-label")}</h6>
          <p>{t("not-available-label")}</p>
        </div>
        <Switch {...label} />
      </div> */}

      <div className={style.row}>
        <div>
          <h6>{t("join-request-place")}</h6>
          <p>{t("not-available-place")}</p>
        </div>
        <Switch {...label} />
      </div>

      <div className={style.row}>
        <div>
          <h6>{t("comment")}</h6>
          <p>{t("not-available-place")}</p>
        </div>
        <Switch {...label} />
      </div>
    </div>
  );
}

export default Notification;
