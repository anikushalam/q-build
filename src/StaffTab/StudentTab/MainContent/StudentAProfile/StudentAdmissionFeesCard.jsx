import React, { useEffect } from "react";
import style from "../../../components/DividerTab/MainContent/StaffAProfile/StaffProfile.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useGetStudentFeesArrayQuery } from "../../../../services/qvipleAPI";

const StudentAdmissionFeesCard = ({ carryParrentState, studentId }) => {
  const { t } = useTranslation();
  const params = useParams();
  const { data: feesQuery, refetch: feesQueryRefetch } =
    useGetStudentFeesArrayQuery(`${studentId}`, { skip: !studentId });
  useEffect(() => {
    if (studentId) feesQueryRefetch();
  }, [studentId, feesQueryRefetch]);

  const addTotal = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
  };
  // applicable_fees_pending
  return (
    <div className={style.admission_fees}>
      <div>
        <h5
          style={{
            color: "#008000",
          }}
        >
          {t("rs")}.{" "}
          {addTotal(
            feesQuery?.student?.studentPaidFeeCount || 0,
            feesQuery?.student?.admissionPaidFeeCount || 0,
            feesQuery?.student?.hostelPaidFeeCount || 0
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
          {t("rs")}.{" "}
          {addTotal(
            feesQuery?.student?.studentRemainingFeeCount || 0,
            feesQuery?.student?.admissionRemainFeeCount || 0,
            feesQuery?.student?.hostelRemainFeeCount || 0
          )}
        </h5>
        <h6>
          {/* {t("remaining_fees")} */}
          {t("total_outs")}
        </h6>
      </div>
      <div>
        {/* {carryParrentState?.viewAs === "STUDENT" ? (
          <div className={style.card_hold_container}></div>
        ) : ( */}
        <Link
          to={`/q/${params.username}/student/profile`}
          state={carryParrentState}
        >
          <div className={style.card_hold_container}>
            <img src="/images/link-forword-icon.svg" alt="forword link" />
            <h6>{t("view_profile")}</h6>
          </div>
        </Link>
        {/* )} */}
        <h5
          style={{
            color: "#121212",
            marginTop: "1.5rem",
          }}
        >
          {t("rs")}. {feesQuery?.student?.applicable_fees_pending ?? 0}
        </h5>
        <h6>{t("applicable_outs")}</h6>
        {/* <h6>{t("total_appli_fees")}</h6> */}
      </div>
    </div>
  );
};

export default StudentAdmissionFeesCard;
