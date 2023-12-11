import React from "react";
import style from "../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../services/BaseUrl";

const StaffMenteeCard = ({
  mentee,
  viewAs,
  onPresent,
  onAbsent,
  isVisible,
  absent,
  present,
  isPresent,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.applicant_card_container}>
      <div
        className={style.applicant_card_inner}
        style={{
          width: "90%",
        }}
      >
        <img
          alt="Student Request Avatar"
          src={
            mentee?.studentProfilePhoto
              ? `${imageShowUrl}/${mentee?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
        />
        <div className={style.applicant_card_inner_info}>
          <h6>{`${mentee?.studentFirstName} ${
            mentee?.studentMiddleName ? mentee?.studentMiddleName : ""
          } ${mentee?.studentLastName}`}</h6>
          {viewAs === "ATTENDANCE" || viewAs === "MEETING_DETAIL" ? null : (
            <p>
              {`${mentee?.total_query ?? 0} `} {t("pending")}
            </p>
          )}
        </div>
      </div>
      {viewAs === "ATTENDANCE" ? (
        isVisible === "PRESENT" ? (
          present?.includes(mentee?._id) ? (
            <img
              src="/images/members/radio-btn-green.svg"
              alt="radio"
              onClick={() => onPresent(mentee?._id)}
            />
          ) : (
            <img
              src="/images/members/radio-btn.svg"
              alt="radio"
              onClick={() => onPresent(mentee?._id)}
            />
          )
        ) : absent?.includes(mentee?._id) ? (
          <img
            src="/images/members/radio-btn-red.svg"
            alt="radio"
            onClick={() => onAbsent(mentee?._id)}
          />
        ) : (
          <img
            src="/images/members/radio-btn.svg"
            alt="radio"
            onClick={() => onAbsent(mentee?._id)}
          />
        )
      ) : viewAs === "MEETING_DETAIL" ? (
        isPresent ? (
          <img src="/images/members/radio-btn-green.svg" alt="radio" />
        ) : (
          <img src="/images/members/radio-btn-red.svg" alt="radio" />
        )
      ) : null}
    </div>
  );
};

export default StaffMenteeCard;
