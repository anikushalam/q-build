import * as React from "react";
import style from "../../../components/DividerTab/MainContent/StaffTable/StaffTable.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";

export default function StudentTable({
  setStudentFull,
  setStudentHalf,
  setStudentId,
  row,
}) {
  const onStudentView = (id) => {
    setStudentId(id);
    setStudentHalf(true);
    setStudentFull(false);
  };
  return (
    <div onClick={() => onStudentView(row?._id)}>
      <div className={style.oneRow}>
        <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
          <p className={style.oneRowIndexValue}>{row.studentGRNO}</p>
        </div>
        <div className={style.oneRowName}>
          <div className={style.oneRowNameImage}>
            <img
              src={
                row?.photoId !== "1"
                  ? `${imageShowUrl}/${row?.studentProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <p className={style.oneRowNameText}>{`${row.studentFirstName} ${
              row.studentMiddleName ? row.studentMiddleName : ""
            } ${row.studentLastName}`}</p>
            <p className={style.oneRowNamePlaceholder}>
              {row.studentClass ? row.studentClass.classTitle : ""}
            </p>
          </div>
        </div>
        <div className={style.oneRowContact}>
          <div className={style.oneRowContactEmailIcon}>
            <img src="/images/user_signup/gender.svg" alt="gender icon" />

            <p className={style.oneRowContactEmail}>{row?.studentGender}</p>
          </div>
          <div className={style.oneRowContactEmailIcon}>
            <img src="/images/phone-white.svg" alt="" />
            <p className={style.oneRowContactNumber}>
              {row.user.userPhoneNumber
                ? row.user.userPhoneNumber
                : row.user.userEmail ?? ""}
            </p>
          </div>
        </div>
        <div className={style.oneRowDate}>
          <p className={style.oneRowDateText}>
            {row?.applicable_fees_pending ?? 0}
            {/* {row?.admissionRemainFeeCount ?? 0} */}

            {/* {moment(row.studentAdmissionDate).format("DD-MM-yyyy")} */}
          </p>
        </div>
      </div>
      <p className={style.oneRowBottomBorder}></p>
    </div>
  );
}
