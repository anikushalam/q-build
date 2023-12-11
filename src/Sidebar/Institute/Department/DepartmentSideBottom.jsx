import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./DepartmentSideBottom.module.css";

function DepartmentSideBottom({ deptHead, about, headPhoto, deptPlace }) {
  return (
    <div className={style.sidebarBottom}>
      <div className={style.about}>{about}</div>
      <p className={style.bottomBorder}></p>
      <div className={style.oneList}>
        <div className={style.oneListimage}>
          <img
            alt="not found"
            src={
              headPhoto
                ? `${imageShowUrl}/${headPhoto}`
                : "/images/edit-photo-icon.svg"
            }
          />
        </div>
        <div className={style.oneListText}>
          <p className={style.oneListName}>
            {deptHead?.length > 20 ? `${deptHead.substr(0, 20)}...` : deptHead}
          </p>
          <p className={style.oneListLabel}>{deptPlace}</p>
        </div>
      </div>
    </div>
  );
}

export default DepartmentSideBottom;
