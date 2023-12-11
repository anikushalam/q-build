import React from "react";
import style from "./SeatingArrangement.module.css";

const ExamSubjectCard = ({ subject, onSelect, isMaster }) => {
  return (
    <>
      {isMaster ? (
        <div
          className={style.class_container}
          title="Select subject"
          onClick={() => onSelect(subject)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <img src="/images/book-24-icon.svg" alt="subject icon" />
          <h6>{subject?.subjectName ?? ""}</h6>
        </div>
      ) : (
        <div
          className={style.class_container}
          title="Select subject"
          onClick={() => onSelect(subject)}
        >
          <h6>{subject?.subjectName ?? ""}</h6>
        </div>
      )}
    </>
  );
};

export default ExamSubjectCard;
