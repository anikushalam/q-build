import React, { useState } from "react";
import style from "../History/History.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import ReminderMessageStudentList from "../../StaffAdmisionAdmin/RemainingFees/ReminderMessageStudentList";
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
          <h6>{data?.message ?? ""}</h6>
          <p className={style.rcv}>
            {t("by")} {" : "}
            {data?.message_type ?? ""}
            {data?.from
              ? `(${data?.from?.staffFirstName ?? ""} ${
                  data?.from?.staffMiddleName ?? ""
                } ${data?.from?.staffLastName ?? ""})`
              : ""}
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
