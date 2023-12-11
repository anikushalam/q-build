import React from "react";
import style from "./Notification.module.css";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { useUserSettingNotification } from "../../../../../../hooks/setting-api";

function Notification({ answer, comment, follower, institute }) {
  const { t } = useTranslation();
  const [userSettingNotification] = useUserSettingNotification();
  const [settingNotifyData, setSettingNotifyData] = useState({
    follower_notify: follower,
    comment_notify: comment,
    answer_notify: answer,
    institute_notify: institute,
  });

  const toggleIns = () => {
    if (settingNotifyData.institute_notify === "Enable") {
      setSettingNotifyData({
        ...settingNotifyData,
        institute_notify: "Disable",
      });
    } else {
      setSettingNotifyData({
        ...settingNotifyData,
        institute_notify: "Enable",
      });
    }
    userSettingNotification({
      settingNotifyData: settingNotifyData,
    }).then((res) => {});
  };
  const toggleComment = () => {
    if (settingNotifyData.comment_notify === "Enable") {
      setSettingNotifyData({ ...settingNotifyData, comment_notify: "Disable" });
    } else {
      setSettingNotifyData({ ...settingNotifyData, comment_notify: "Enable" });
    }
    userSettingNotification({
      settingNotifyData: settingNotifyData,
    }).then((res) => {});
  };
  const toggleFollower = () => {
    if (settingNotifyData.follower_notify === "Enable") {
      setSettingNotifyData({
        ...settingNotifyData,
        follower_notify: "Disable",
      });
    } else {
      setSettingNotifyData({ ...settingNotifyData, follower_notify: "Enable" });
    }
    userSettingNotification({
      settingNotifyData: settingNotifyData,
    }).then((res) => {});
  };
  const toggleAns = () => {
    if (settingNotifyData.answer_notify === "Enable") {
      setSettingNotifyData({ ...settingNotifyData, answer_notify: "Disable" });
    } else {
      setSettingNotifyData({ ...settingNotifyData, answer_notify: "Enable" });
    }
    userSettingNotification({
      settingNotifyData: settingNotifyData,
    }).then((res) => {});
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className={style.notification}>
      <h5>{t("choose_your_preference")}</h5>

      <div className={style.row}>
        <h6>{t("institute_related_activity")}</h6>
        <Switch
          {...label}
          checked={settingNotifyData.institute_notify === "Enable"}
          onChange={toggleIns}
        />
      </div>

      <div className={style.row}>
        <h6>{t("friend_following_circle")}</h6>
        <Switch
          {...label}
          checked={settingNotifyData.follower_notify === "Enable"}
          onChange={toggleFollower}
        />
      </div>

      <div className={style.row}>
        <h6>{t("comment")}</h6>
        <Switch
          {...label}
          checked={settingNotifyData.comment_notify === "Enable"}
          onChange={toggleComment}
        />
      </div>

      <div className={style.row}>
        <h6>{t("Answers")}</h6>
        <Switch
          {...label}
          checked={settingNotifyData.answer_notify === "Enable"}
          onChange={toggleAns}
        />
      </div>

      {/* <div className={style.row}>
        <div>
          <h6>Email Id</h6>
          <p>not available</p>
        </div>
        <Switch {...label} />
      </div>
      <div className={style.row}>
        <div>
          <h6>SMS</h6>
          <p>OTP verification for approval</p>
        </div>
        <Switch {...label} defaultChecked />
      </div>

      <div className={style.divider}></div>

      <h5 style={{ marginTop: "2vw" }}>{t("Other notification")}</h5> */}

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
    </div>
  );
}

export default Notification;
