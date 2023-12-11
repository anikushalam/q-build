import React from "react";
import style from "./TimeTableCard.module.css";
import { useTranslation } from "react-i18next";

function HolidayCard() {
  return (
    <div className={style.holidaycard}>
      <div className={style.daydate}>
        <h5>20</h5>
        <p>Monday</p>
      </div>
      <div className={style.textContainer}>
        <h6>Shivaji Maharaj Jayanti</h6>
        <p>
          A function have been organised on this day to celebrate and remember
          the Great King
        </p>
      </div>
    </div>
  );
}

function ClassTimetableCard(schedule) {
  const { t } = useTranslation();

  // console.info("schedule", schedule);
  return (
    <div className={style.classTimetableCard}>
      <div className={style.classTimetableCardTop}>
        <h6 className={style.time}>
          {" "}
          {schedule?.schedule?.from} {t("to_")} {schedule?.schedule?.to}{" "}
        </h6>
        <h6 className={style.teacher}>{`${
          schedule?.schedule?.assignStaff?.staffFirstName
        } ${
          schedule?.schedule?.assignStaff?.staffMiddleName
            ? schedule?.schedule?.assignStaff?.staffMiddleName
            : ""
        } ${schedule?.schedule?.assignStaff?.staffLastName}`}</h6>
      </div>
      <h6 className={style.subject}>{schedule?.schedule?.subjectName}</h6>
      <div
        className={style.classTimetableCardBottom}
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* <img src="/images/studentclass/attendence/timetableicon.svg" alt="" /> */}
        {schedule?.schedule?.topic?.map((topic) => (
          <p className={style.classcardtext} key={topic?._id}>
            {topic?.topic_name ?? ""}
          </p>
        ))}
      </div>
    </div>
  );
}

export { HolidayCard, ClassTimetableCard };
