import React from "react";
import style from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
const ApplicationAdmissionCard = ({ data, onSelectedApplication }) => {
  return (
    <div
      className={style.ongoing_card}
      onClick={() => onSelectedApplication(data?._id)}
    >
      <div className={style.ongoing_card_inner}>
        <img alt="Ongoing App" src="/images/admision-application-icon.svg" />
        <div className={style.ongoing_card_text}>
          <h6>{data?.applicationName}</h6>
          <p>{data?.applicationDepartment?.dName}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationAdmissionCard;
