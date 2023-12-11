import React, { useState } from "react";
import style from "./Complaints.module.css";
import ComplaintList from "./ComplaintList/ComplaintList";

function Complaints({ cid }) {
  return (
    <div className={style.complaints}>
      <div className={style.complaintList}>
        <ComplaintList cid={cid} />
      </div>
    </div>
  );
}

export default Complaints;
