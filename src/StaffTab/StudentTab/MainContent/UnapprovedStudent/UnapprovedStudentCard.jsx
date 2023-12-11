import React from "react";
import style from "../../../components/DividerTab/MainContent/StaffTable/StaffTable.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";

const UnapprovedStudentCard = ({ student, onViewProfile }) => {
  return (
    <div onClick={() => onViewProfile(student?._id)}>
      <div className={style.oneRow}>
        <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
          <p className={style.oneRowIndexValue}>{student?.studentGRNO}</p>
        </div>
        <div className={style.oneRowName}>
          <div className={style.oneRowNameImage}>
            <img
              src={
                student?.studentProfilePhoto
                  ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              loading="lazy"
              alt=""
            />
          </div>
          <div>
            <p className={style.oneRowNameText}>{`${
              student?.studentFirstName
            } ${student?.studentMiddleName ? student?.studentMiddleName : ""} ${
              student?.studentLastName
            }`}</p>
            <p className={style.oneRowNamePlaceholder}>
              {student?.studentClass ? student?.studentClass.classTitle : ""}
            </p>
          </div>
        </div>
        <div className={style.oneRowContact}>
          <div className={style.oneRowContactEmailIcon}>
            <img src="/images/user_signup/gender.svg" alt="gender icon" />

            <p className={style.oneRowContactEmail}>{student?.studentGender}</p>
          </div>
          <div className={style.oneRowContactEmailIcon}>
            <img src="/images/phone-white.svg" alt="" />
            <p className={style.oneRowContactNumber}>
              {student?.user.userPhoneNumber
                ? student?.user.userPhoneNumber
                : student?.user.userEmail ?? ""}
            </p>
          </div>
        </div>
        <div className={style.oneRowDate}>
          <p className={style.oneRowDateText}>
            {student?.applicable_fees_pending ?? 0}
            {/* {row?.admissionRemainFeeCount ?? 0} */}

            {/* {moment(student?.studentAdmissionDate).format("DD-MM-yyyy")} */}
          </p>
        </div>
      </div>
      <p className={style.oneRowBottomBorder}></p>
    </div>
  );
};

export default UnapprovedStudentCard;
