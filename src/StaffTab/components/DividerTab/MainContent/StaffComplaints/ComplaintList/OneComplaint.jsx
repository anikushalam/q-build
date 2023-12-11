import React from "react";
import moment from "moment";
import style from "./UnsolvedList.module.css";

const OneComplaint = ({
  setShowDetails,
  setOnComplaintId,
  complaint,
  onComplaintId,
}) => {
  return (
    <div
      className={
        onComplaintId?.cid === complaint?._id
          ? `${style.item} ${style.item_active}`
          : style.item
      }
      onClick={() => {
        setOnComplaintId({
          cid: complaint?._id,
          name:
            complaint?.complaintType === "Anonymous"
              ? "Anonymous"
              : `${complaint?.staff?.staffFirstName} ${
                  complaint?.staff?.staffMiddleName
                    ? complaint?.staff?.staffMiddleName
                    : ""
                } ${complaint?.staff?.staffLastName}`,
        });
        setShowDetails(true);
      }}
    >
      <img src="/images/complainIcon.svg" alt="complant icon" />
      <div>
        <h6>
          {complaint?.complaintType === "Anonymous"
            ? "Anonymous"
            : `${complaint?.staff?.staffFirstName} ${
                complaint?.staff?.staffMiddleName
                  ? complaint?.staff?.staffMiddleName
                  : ""
              } ${complaint?.staff?.staffLastName}`}
        </h6>
        <div className={style.datetime}>
          <p>{moment(complaint?.createdAt).format("LL")},</p>
          <p>{moment(complaint?.createdAt).format("LT")}</p>
        </div>
      </div>
    </div>
  );
};

export default OneComplaint;
