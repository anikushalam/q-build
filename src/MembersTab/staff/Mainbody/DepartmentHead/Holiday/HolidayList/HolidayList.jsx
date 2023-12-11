import React from "react";
import style from "./HolidayList.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
function Item({ reason, dDate }) {
  const { t } = useTranslation();
  return (
    <div className={style.sidebarheader}>
      <img src="/images/members/holiday-icon.svg" alt="" />
      <div className={style.text}>
        <div className={style.insName}>
          <div className={style.dates}>
            {t("dates")}:
            {dDate.map((date, index) =>
              dDate?.length === index + 1 ? (
                <h6 key={index}>{date?.slice(0, 2)} </h6>
              ) : (
                <h6 key={index}>{date?.slice(0, 2)}, </h6>
              )
            )}
          </div>
          <p>{moment(dDate[-1]).format("MMM YYYY")} </p>
        </div>
        <div className={style.insUserName}>
          <p>{reason}</p>
        </div>
      </div>
    </div>
  );
}

function HolidayList({ holiday }) {
  const { t } = useTranslation();
  return (
    <div className={style.examList}>
      <div className={style.examListheader}>{t("holiday_preview")}</div>

      <div className={style.examListItems}>
        {holiday?.map((val) => (
          <Item reason={val?.dHolidayReason} dDate={val?.dDate} key={val._id} />
        ))}
      </div>
    </div>
  );
}

export default HolidayList;
