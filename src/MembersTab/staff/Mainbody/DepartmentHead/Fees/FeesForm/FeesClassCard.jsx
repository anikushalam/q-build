import React from "react";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";

const FeesClassCard = ({ cls, classMaster, onSelect, divisionId }) => {
  return (
    <div
      className={
        divisionId?.includes(cls?._id)
          ? `${style.class_container} ${style.class_container_active}`
          : style.class_container
      }
      title="Select class"
      onClick={() => onSelect(cls?._id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
      <h6>
        {classMaster ?? ""} - {cls?.classTitle ?? ""}
      </h6>
    </div>
  );
};

export default FeesClassCard;
