import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../../StaffAdmisionAdmin/RemainingFees/RemainingFees.module.css";
const FinanceRemainingStudentCard = ({ remainData }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: remainData?._id,
        viewAs: "FINANCE_MANAGER",
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
          style={{
            height: "4vw",
            width: "4vw",
          }}
        />
        <div className={style.text}>
          <h6>{`${remainData?.studentFirstName} ${
            remainData?.studentMiddleName ? remainData?.studentMiddleName : ""
          } ${remainData?.studentLastName}`}</h6>

          <p>
            {t("gr_number")}
            {remainData?.studentGRNO ?? ""} {", "}
            {remainData?.department?.dName ?? ""}
          </p>
          <p>
            {t("finance_classes")}
            {`${remainData?.studentClass?.className ?? ""} -  ${
              remainData?.studentClass?.classTitle ?? ""
            }`}
          </p>
        </div>
      </div>
      <div className={style.text}>
        {/* {is_applicable ? (
        <h6>Rs. {remainData?.applicable_fees_pending}</h6>
      ) : ( */}
        <h6>Rs. {remainData?.studentRemainingFeeCount}</h6>
        {/* )} */}
        <p>{t("pending_fees")}</p>
      </div>
    </div>
  );
};

export default FinanceRemainingStudentCard;
