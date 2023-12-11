import React from "react";
import style from "./UnsolvedList.module.css";
import moment from "moment";

const ComplaintItem = ({
  complaint,
  setComplaintId,
  setShowDetails,
  complaintId,
}) => {
  const onComplaintAction = (id) => {
    setComplaintId(id);
    setShowDetails(true);
  };
  return (
    <div
      className={
        complaintId === complaint?._id
          ? `${style.item} ${style.item_active}`
          : style.item
      }
      onClick={() => onComplaintAction(complaint?._id)}
    >
      <img src="/images/complainIcon.svg" alt="compalint avatar" />
      <div>
        <h6>{`${complaint?.student?.studentFirstName} ${
          complaint?.student?.studentMiddleName
            ? complaint?.student?.studentMiddleName
            : ""
        } ${complaint?.student?.studentLastName}`}</h6>

        <div className={style.datetime}>
          <p>{moment(complaint?.createdAt).format("LL")},</p>
          <p>{moment(complaint?.createdAt).format("LT")}</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintItem;
