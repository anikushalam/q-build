import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../AdmissionApplicationRequest.module.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

const AdmissionMultiCard = ({ applicant, selectedApplicant, onSelectOne }) => {
  const params = useParams();
  const navigate = useNavigate();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: applicant?.student?._id,
        viewAs: "ADMISSION_ADMIN",
      },
    });
  };

  const onSelectHandler = (e) => {
    e.stopPropagation();
    onSelectOne(applicant?.student?._id);
  };
  return (
    <div
      className={style.applicant_card_container}
      onClick={onViewApplicantProfile}
      title="View Profile"
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
          <p>{applicant?.install_type}</p>
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
      <div className={style.selectBtnContainer}>
        <img
          id="check"
          className={style.checkbox}
          src={
            selectedApplicant?.includes(applicant?.student?._id)
              ? "/images/checkbox-icon.svg"
              : "/images/box-icon.svg"
          }
          alt="select icon"
          onClick={onSelectHandler}
        />
      </div>
    </div>
  );
};

export default AdmissionMultiCard;
