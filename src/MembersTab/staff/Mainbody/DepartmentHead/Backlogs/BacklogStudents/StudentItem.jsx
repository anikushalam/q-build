import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "../Standerds/Standerds.module.css";

function StudentItem({ onStudentOpen, student, clickable }) {
  const onOpenModal = () => {
    if (clickable) {
      onStudentOpen(student);
    }
  };
  return (
    <div className={style.standerdItem} onClick={onOpenModal}>
      <div className={style.standerdsleft}>
        <div className={style.studentImgcontainer}>
          <img
            className={style.studentImg}
            src={
              student?.photoId !== "1"
                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="student icon"
          />
        </div>
        <div className={style.standerdsright}>
          <h6 className={style.standerdsh6}>{`${student?.studentFirstName} ${
            student?.studentMiddleName || ""
          } ${student?.studentLastName}`}</h6>
          <p className={style.studentp1}>{student?.batches?.batchName || ""}</p>
        </div>
      </div>
      <p className={style.studentRightp}>
        {student?.studentClass?.className} {student?.studentClass?.classTitle}
      </p>
    </div>
  );
}

export default StudentItem;
