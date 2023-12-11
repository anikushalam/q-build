import React from "react";
import { useTranslation } from "react-i18next";
import style from "./InsEventMenu.module.css";

function InsEventMenu({ setStatus }) {
  const { t } = useTranslation();
  return (
    <div className={style.itemIconContainer}>
      <div
        className={style.itemIcon}
        onClick={() => setStatus("eventFunction")}
      >
        <img src="/images/events/event.svg" alt="event" />
        <p>{t("events")}</p>
      </div>

      <div
        className={style.itemIcon}
        onClick={() => setStatus("seminarFunction")}
      >
        <img src="/images/events/seminar.svg" alt="seminars" />
        <p>{t("seminars")}</p>
      </div>
    </div>
  );
}

export default InsEventMenu;
