import React from "react";
import style from "../PromoteDepartment.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import PromoteTabChangeLink from "../PromoteTabChangeLink";
import AcademicAdministatorTabChange from "../../AcademicAdministrator/AcademicAdministatorTabChange";

const ClassCard = ({ cls, carryParentState, isView }) => {
  return (
    <>
      {isView === "ADMINISTRATOR" ? (
        <AcademicAdministatorTabChange
          carryParentState={{
            ...carryParentState,
            cid: cls?._id,
            className: `${cls?.className ?? ""} - ${cls?.classTitle ?? ""}`,
          }}
          activeTab={"class"}
        >
          <div className={style.class_container}>
            <img
              className={style.oneRowImage}
              src={
                cls?.classTeacher?.staffProfilePhoto
                  ? `${imageShowUrl}/${cls?.classTeacher?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff avatr"
            />
            <div className={style.class_container_text}>
              <h6>
                {`${cls?.className ?? ""} - ${cls?.classTitle ?? ""}` ?? ""}
              </h6>
              <p>
                {`${cls?.classTeacher?.staffFirstName ?? ""} ${
                  cls?.classTeacher?.staffMiddleName ?? ""
                } ${cls?.classTeacher?.staffLastName ?? ""}`}
              </p>
            </div>
          </div>
        </AcademicAdministatorTabChange>
      ) : (
        <PromoteTabChangeLink
          carryParentState={{
            ...carryParentState,
            cid: cls?._id,
            className: `${cls?.className ?? ""} - ${cls?.classTitle ?? ""}`,
            classStatus: cls?.classStatus ?? "",
          }}
          activeTab={"class"}
        >
          <div className={style.class_container}>
            <img
              className={style.oneRowImage}
              src={
                cls?.classTeacher?.staffProfilePhoto
                  ? `${imageShowUrl}/${cls?.classTeacher?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff avatr"
            />
            <div className={style.class_container_text}>
              <h6>
                {`${cls?.className ?? ""} - ${cls?.classTitle ?? ""}` ?? ""}
              </h6>
              <p>
                {`${cls?.classTeacher?.staffFirstName ?? ""} ${
                  cls?.classTeacher?.staffMiddleName ?? ""
                } ${cls?.classTeacher?.staffLastName ?? ""}`}
              </p>
            </div>
          </div>
        </PromoteTabChangeLink>
      )}
    </>
  );
};

export default ClassCard;
