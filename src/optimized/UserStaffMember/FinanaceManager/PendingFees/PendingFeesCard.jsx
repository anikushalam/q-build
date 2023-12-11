import React from "react";
import { useTranslation } from "react-i18next";
import style from "./PendingFees.module.css";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const PendingFeesCard = ({ studentFees }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const getQuery = useLocation();

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        ...getQuery.state,
        // studentId: studentFees?._id
        sid: studentFees?._id,
      },
    });
  };

  return (
    <div
      className={style.pending_fees_card}
      onClick={onViewApplicantProfile}
      title="View Profile"
    >
      <div className={style.pending_fees_card_container}>
        <img
          alt="Student Avatar"
          src={
            studentFees?.studentProfilePhoto
              ? `${imageShowUrl}/${studentFees?.studentProfilePhoto}`
              : `${assestsFeedUrl}/feed-user-avatar.svg`
          }
          loading="lazy"
        />
        <div className={style.pending_fees_card_inner}>
          <h6>{`${studentFees?.studentFirstName} ${
            studentFees?.studentMiddleName ? studentFees?.studentMiddleName : ""
          } ${studentFees?.studentLastName}`}</h6>

          <p>
            {t("gr_number")}
            {" : "}
            {studentFees?.studentGRNO ?? ""} {", "}
            {studentFees?.department?.dName ?? ""}
          </p>
          <p>
            {t("class")} {" : "}
            {`${studentFees?.studentClass?.className ?? ""} -  ${
              studentFees?.studentClass?.classTitle ?? ""
            }`}
          </p>
        </div>
      </div>
      <div className={style.pending_fees_card_inner}>
        <h6>
          {t("rs_only")} {studentFees?.studentRemainingFeeCount}
        </h6>
        <p>{t("pending_fees")}</p>
      </div>
    </div>
  );
};

export default PendingFeesCard;
