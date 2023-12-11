import React from "react";
import style from "./Activity.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import moment from "moment";
import SeatingExaminationCard from "../../../../MembersTab/staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingExaminationCard";

const SeatingArrangementActivity = ({ activity }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        // activity?.notifyReadStatus === "Unread"
        //   ? `${style.item} ${style.item_active}`
        //   :
        style.item
      }
      style={{
        padding: "0",
      }}
    >
      <div className={style.eachItem}>
        <div className={style.seating_container}>
          <h2
            className={style.you_have_a_supervision_on}
            style={{
              padding: "0.6vw 1vw 0 1vw",
            }}
          >
            {t("you_have_a_supervision_on")}
          </h2>
          <div
            className={style.text}
            style={{
              padding: "0.2vw 1vw 0.6vw 1vw",
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            <p>
              {moment(activity?.notifyTime).format("DD-MMM-yyyy")},{" "}
              {moment(activity?.notifyTime).format("LT")}
            </p>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.4rem",
            }}
          />
          <div
            className={style.seating_block_container_top}
            style={{
              padding: "0 1vw",
            }}
          >
            <h6>{activity?.seatingId?.seat_block_name ?? ""}</h6>
            <p>{`${activity?.seatingId?.seat_block_class?.className} - ${activity?.seatingId?.seat_block_class?.classTitle}`}</p>
            <p>
              {t("supervisor")}:{" "}
              {activity?.seatingId?.seat_valid_staff_name
                ? activity?.seatingId?.seat_valid_staff_name
                : `${
                    activity?.seatingId?.seat_block_staff?.staffFirstName ?? ""
                  } ${
                    activity?.seatingId?.seat_block_staff?.staffMiddleName ?? ""
                  } ${
                    activity?.seatingId?.seat_block_staff?.staffLastName ?? ""
                  }`}
            </p>
          </div>
          {activity?.seatingId?.seat_exam_paper_array?.map((examDetail) => (
            <SeatingExaminationCard
              examDetail={{
                ...examDetail,
                // examName,
                selectClass: activity?.seatingId?.seat_block_class?.className,
              }}
              key={examDetail?._id}
              viewAs={"ARANGE_SEATING"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatingArrangementActivity;
