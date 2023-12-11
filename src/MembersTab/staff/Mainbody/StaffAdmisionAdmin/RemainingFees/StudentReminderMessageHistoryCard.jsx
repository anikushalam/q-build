import React, { useState } from "react";
import style from "../../FinanceManager/History/History.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import ReminderMessageStudentList from "./ReminderMessageStudentList";
const StudentMessageHistoryCard = ({ data }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <div className={style.sidebarheader}>
        <div
          className={style.text}
          style={{
            width: "80%",
          }}
        >
          <p className={style.rcv}>{t("message")}</p>
          <h6>{data?.content ?? ""}</h6>
          <p className={style.rcv}>
            {t("by")} {" : "}
            {data?.content_type === "EMAIL_NOTIFICATION"
              ? "Email"
              : "In App"}{" "}
            {data?.from_name ? `(${data?.from_name ?? ""})` : ""}
          </p>
        </div>
        <div className={style.text}>
          <h6
            style={{
              cursor: "pointer",
              color: "#00f",
            }}
            onClick={onToggle}
          >
            {t("student")} {" : "} {data?.student_list_count ?? 0}
          </h6>
          <p className={style.rcv}>
            {moment(data?.created_at).format("DD MMM, yyyy")}
            {", "}
            {moment(data?.created_at).format("LT")}
          </p>
        </div>
      </div>
      {isOpen && (
        <ReminderMessageStudentList
          studentList={data?.student_list}
          onClose={onToggle}
        />
      )}
    </>
  );
};

export default StudentMessageHistoryCard;
