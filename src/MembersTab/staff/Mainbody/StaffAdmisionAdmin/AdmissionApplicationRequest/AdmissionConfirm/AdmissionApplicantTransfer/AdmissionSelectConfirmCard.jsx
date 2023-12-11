import React from "react";
import style from "../../AdmissionApplicationRequest.module.css";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

const AdmissionSelectConfirmCard = ({
  applicant,
  onSelectApplicant,
  transferApplicat,
}) => {
  const select = () => {
    onSelectApplicant(applicant);
  };
  return (
    <div
      className={
        transferApplicat?.includes(applicant?._id)
          ? `${style.applicant_card_container} ${style.applicant_card_container_active}`
          : `${style.applicant_card_container} ${style.applicant_card_container_hover}`
      }
      onClick={select}
    >
      <div className={style.applicant_card_inner}>
        <img
          alt="Student Request Avatar"
          src={
            applicant?.student?.photoId !== "1"
              ? `${imageShowUrl}/${applicant?.student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
        />
        <div className={style.applicant_card_inner_info}>
          <h6>{`${applicant?.student?.studentFirstName} ${
            applicant?.student?.studentMiddleName
              ? applicant?.student?.studentMiddleName
              : ""
          } ${applicant?.student?.studentLastName}`}</h6>
        </div>
      </div>

      <div className={style.applicant_card_contact}>
        <div className={style.applicant_card_contact_inner}>
          <img src="/images/admidion_department/gender.svg" alt="" />
          <p>{applicant?.student?.studentGender}</p>
        </div>
        {(applicant?.student?.studentPhoneNumber ||
          applicant?.student?.user?.userPhoneNumber ||
          applicant?.student?.user?.userEmail ||
          applicant?.student?.studentParentsPhoneNumber) && (
          <div className={style.applicant_card_contact_inner}>
            <img src="/images/admidion_department/phone.svg" alt="" />
            <p
              style={{
                marginBottom: "0 !important",
              }}
            >
              {applicant?.student?.user?.userPhoneNumber
                ? applicant?.student?.user?.userPhoneNumber
                : applicant?.student?.user?.userEmail
                ? applicant?.student?.user?.userEmail
                : applicant?.student?.studentPhoneNumber
                ? applicant?.student?.studentPhoneNumber
                : applicant?.student?.studentParentsPhoneNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionSelectConfirmCard;
