import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./RemainingFees.module.css";
const RemianingStudentCard = ({ remainData, is_applicable }) => {
  const { t } = useTranslation();
  // console.info("sdhghaghas", remainData);
  const params = useParams();
  const navigate = useNavigate();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile/admission`, {
      state: {
        sid: remainData?._id,
        viewAs: "ADMISSION_ADMIN",
      },
    });
  };
  return (
    <div
      className={style.item}
      onClick={onViewApplicantProfile}
      title="View Profile"
    >
      <div className={style.subItem}>
        <img
          alt="Student Avatar"
          src={
            remainData?.studentProfilePhoto
              ? `${imageShowUrl}/${remainData?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
        />
        <div className={style.text}>
          <h6>{`${remainData.studentFirstName} ${
            remainData.studentMiddleName ? remainData.studentMiddleName : ""
          } ${remainData.studentLastName}`}</h6>

          <p>
            {t("gr_number")}
            {remainData?.studentGRNO ?? ""} {", "}
            {remainData?.department?.dName ?? ""}
          </p>
        </div>
      </div>
      <div className={style.text}>
        {is_applicable ? (
          <h6>Rs. {remainData?.applicable_fees_pending}</h6>
        ) : (
          <h6>Rs. {remainData?.admissionRemainFeeCount}</h6>
        )}
        <p>{t("pending_fees")}</p>
      </div>
    </div>
  );
};

export default RemianingStudentCard;
