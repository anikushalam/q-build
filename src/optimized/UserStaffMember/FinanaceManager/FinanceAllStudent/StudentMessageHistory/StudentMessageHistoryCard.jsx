import dayjs from "dayjs";
import style from "../../Income/Income.module.css";
import { useTranslation } from "react-i18next";
import { localTimeFormat } from "../../../../Utils/Functions/localTime";
import { useState } from "react";
import ReminderMessageStudentList from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/RemainingFees/ReminderMessageStudentList";
const StudentMessageHistoryCard = ({ data }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <div className={style.student_message_container}>
        <div className={style.text}>
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
            {dayjs(data?.created_at).format("DD MMM, YYYY")}
            {", "}
            {localTimeFormat(data?.created_at, "LT")}
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
