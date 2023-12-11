import React from "react";
import style from "./StaffProfile.module.css";

const StaffProfileEachInfo = ({ labelTag, children }) => {
  return (
    <div className={style.each_info_container}>
      <h5>{labelTag}</h5>
      {children}
    </div>
  );
};

export default StaffProfileEachInfo;
