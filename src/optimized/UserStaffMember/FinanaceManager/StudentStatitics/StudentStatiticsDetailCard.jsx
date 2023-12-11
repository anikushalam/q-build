import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import style from "../PendingFees/PendingFees.module.css";
import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const StudentStatiticsDetailCard = ({ student }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        // fid: getQuery.state?.fid,
        // sid: getQuery.state?.sid,
        // staffProfilePhoto: getQuery.state?.staffProfilePhoto,
        sid: student?._id,
        // studentId: student?._id,
      },
    });
  };
  return (
    <div
      className={style.pending_fees_card}
      onClick={onViewApplicantProfile}
      //   title="View Profile"
    >
      <div className={style.pending_fees_card_container}>
        <img
          alt="Student Avatar"
          src={
            student?.studentProfilePhoto
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : `${assestsFeedUrl}/feed-user-avatar.svg`
          }
          loading="lazy"
        />
        <div className={style.pending_fees_card_inner}>
          <h6
            style={{
              fontSize: "13px",
              margin: "0",
            }}
          >
            {student?.valid_full_name ?? ""}
          </h6>
          <p
            style={{
              fontSize: "11px",
            }}
          >
            {t("roll_no")} {" : "}
            {student?.studentROLLNO ?? ""}
          </p>
          <p
            style={{
              fontSize: "11px",
            }}
          >
            {t("gr_number")}
            {" : "}
            {student?.studentGRNO ?? ""}
          </p>
        </div>
      </div>
      {getQuery.state?.openAs === "ADMISSION_OVERVIEW" ? (
        <div className={style.statistics_balance}>
          <div>
            <h5
              style={{
                color: "#008000",
              }}
            >
              {t("rs_only")} {student?.total_paid_fees ?? 0}
            </h5>
            <h6>{t("total_fees_paid")}</h6>
            <h5
              style={{
                color: "#121212",
              }}
            >
              {t("rs_only")} {student?.total_os_fees ?? 0}
            </h5>
            <h6>{t("total_outs")}</h6>
          </div>
          <div>
            <h5
              style={{
                color: "#121212",
              }}
            >
              {t("rs_only")} {student?.applicable_os_fees ?? 0}
            </h5>
            <h6>{t("applicable_outs")}</h6>

            <h5
              style={{
                color: "#121212",
              }}
            >
              {t("rs_only")} {student?.government_os_fees ?? 0}
            </h5>
            <h6>{t("government_outs")}</h6>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StudentStatiticsDetailCard;
