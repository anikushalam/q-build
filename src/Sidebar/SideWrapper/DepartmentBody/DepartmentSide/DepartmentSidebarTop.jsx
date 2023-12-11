import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./DepartmentSidebarTop.module.css";

function SidebarTop({ topData }) {
  return (
    <div className={`${style.sidebartopp} ${style.sidebartop}`}>
      <div className={style.sidebartoppHead}>
        <img src="/images/profileAndCover/admission-cover.svg" />
      </div>
      <img className={style.profileEdit} src="/images/profileEdit.svg" />
    </div>
  );
}

export default SidebarTop;
