import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./SeatingArrangement.module.css";
import SeatingExaminationCard from "./SeatingExaminationCard";
import SeatingMenu from "./SeatingMenu";

const SeatingArrangementCard = ({ seating, examName, examId, onRefetch }) => {
  const { t } = useTranslation();
  const [said, setSaid] = useState("");
  return (
    <>
      <div
        className={style.seating_block_container}
        onClick={() => setSaid(seating)}
      >
        <div className={style.seating_block_container_top}>
          <h6>{seating?.seat_block_name ?? ""}</h6>
          <p>{`${seating?.seat_block_class?.className} - ${seating?.seat_block_class?.classTitle}`}</p>
          <p>
            {t("supervisor")}:{" "}
            {seating?.seat_valid_staff_name
              ? seating?.seat_valid_staff_name
              : `${seating?.seat_block_staff?.staffFirstName ?? ""} ${
                  seating?.seat_block_staff?.staffMiddleName ?? ""
                } ${seating?.seat_block_staff?.staffLastName ?? ""}`}
          </p>
        </div>
        {seating?.seat_exam_paper_array?.map((examDetail) => (
          <SeatingExaminationCard
            examDetail={{
              ...examDetail,
              examName,
              selectClass: seating?.seat_block_class?.classTitle,
            }}
            key={examDetail?._id}
            viewAs={"ARANGE_SEATING"}
          />
        ))}
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {said && (
        <SeatingMenu
          said={said}
          examName={examName}
          examId={examId}
          onRefetch={onRefetch}
          onClose={() => setSaid("")}
        />
      )}
    </>
  );
};

export default SeatingArrangementCard;
