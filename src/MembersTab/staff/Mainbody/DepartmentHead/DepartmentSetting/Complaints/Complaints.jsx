import React from "react";
import style from "./Complaints.module.css";
import ComplaintList from "./ComplaintList/ComplaintList";

function Complaints({ did }) {
  return (
    <div className={style.complaints}>
      <ComplaintList did={did} />
    </div>
  );
}

export default Complaints;
