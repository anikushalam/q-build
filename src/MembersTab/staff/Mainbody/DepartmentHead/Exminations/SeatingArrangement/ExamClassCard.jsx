import React from "react";
import style from "./SeatingArrangement.module.css";

const ExamClassCard = ({ cls, onSelect, isMaster }) => {
  return (
    <>
      {isMaster ? (
        <div
          className={style.class_container}
          title="Select standard"
          onClick={() => onSelect(cls)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
          <h6>{cls?.className ?? ""}</h6>
        </div>
      ) : (
        <div
          className={style.class_container}
          title="Select class"
          onClick={() => onSelect(cls)}
        >
          <h6>{`${cls?.className ?? ""} - ${cls?.classTitle ?? ""}`}</h6>
        </div>
      )}
    </>
  );
};

export default ExamClassCard;
