import React from "react";
import style from "./LeaveDetails.module.css";
import moment from "moment";

function LeaveDetails({ cDetail }) {
  return (
    <>
      <div className={style.complaintDetails}>
        <div className={style.detailsheader}>Leave Details</div>
        <hr />
        <div className={style.detailsbody}>
          <h6>
            {[...new Set(cDetail?.dates)]?.map((d) => `${d} `)}{" "}
            {[...new Set(cDetail?.months)]?.map((d) => `${d} `)}{" "}
            {[...new Set(cDetail?.years)]?.map((d) => `${d} `)}
          </h6>
          {/* <h6>Complaint To Head Of Department</h6> */}
          <p>{cDetail?.content}</p>
          <div className={style.footer}>
            <h6 className={style.red}>{cDetail?.status}</h6>
            {/* <h6 className={style.blue}>Report To Admin</h6> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveDetails;
