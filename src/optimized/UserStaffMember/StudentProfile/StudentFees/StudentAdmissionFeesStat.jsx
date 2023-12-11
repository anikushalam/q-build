import style from "./StudentAdmissionFees.module.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { useOneStudentFeesStat } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUtilityUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
const addAmountTotal = (a, b, c) => {
  return a + b + c;
};
const StudentAdmissionFeesStat = () => {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();

  const { oneStudentFeesStat } = useOneStudentFeesStat({
    sid: getQuery.state?.sid,
    skip: !getQuery.state?.sid,
  });
  return (
    <div className={style.admission_fees}>
      <div>
        <h5
          style={{
            color: "#008000",
          }}
        >
          {t("rs")}{" "}
          {addAmountTotal(
            oneStudentFeesStat?.student?.studentPaidFeeCount || 0,
            oneStudentFeesStat?.student?.admissionPaidFeeCount || 0,
            oneStudentFeesStat?.student?.hostelPaidFeeCount || 0
          )}
        </h5>
        <h6
          style={{
            marginBottom: "1.5rem",
          }}
        >
          {t("total_fees_paid")}
        </h6>
        <h5
          style={{
            color: "#121212",
          }}
        >
          {t("rs")}{" "}
          {addAmountTotal(
            oneStudentFeesStat?.student?.studentRemainingFeeCount || 0,
            oneStudentFeesStat?.student?.admissionRemainFeeCount || 0,
            oneStudentFeesStat?.student?.hostelRemainFeeCount || 0
          )}
        </h5>
        <h6>{t("total_outs")}</h6>
      </div>
      <div>
        <Link
          to={`/q/${params.username}/student/profile`}
          state={getQuery.state}
        >
          <div className={style.card_hold_container}>
            <img
              src={`${assestsUtilityUrl}/link-forward.svg`}
              alt="forword link"
            />
            <h6>{t("view_profile")}</h6>
          </div>
        </Link>
        <h5
          style={{
            color: "#121212",
            marginTop: "1.5rem",
          }}
        >
          {t("rs")} {oneStudentFeesStat?.student?.applicable_fees_pending ?? 0}
        </h5>
        <h6>{t("applicable_outs")}</h6>
      </div>
    </div>
  );
};

export default StudentAdmissionFeesStat;
