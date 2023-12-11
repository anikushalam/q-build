import React from "react";
import style from "./StudentFees.module.css";
import { useTranslation } from "react-i18next";
import StudentFeesButton from "./StudentFeesButton";
import { useOneStudentFeesStat } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useSearchParams } from "react-router-dom";

const addAmountTotal = (a, b, c) => {
  return a + b + c;
};
const StudentFeesHeader = ({ sid }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const { oneStudentFeesStat } = useOneStudentFeesStat({
    sid: sid,
    skip: !sid,
  });

  return (
    <div className={style.student_fees_header_container}>
      <div>
        <div className={style.student_fees_row_amount}>
          <h5>
            {t("rs")}{" "}
            {addAmountTotal(
              oneStudentFeesStat?.student?.studentPaidFeeCount || 0,
              oneStudentFeesStat?.student?.admissionPaidFeeCount || 0,
              oneStudentFeesStat?.student?.hostelPaidFeeCount || 0
            )}
          </h5>
          <h6>{t("total_fees_paid")}</h6>
        </div>

        <div
          className={style.student_fees_row_amount}
          style={{
            marginTop: "1rem",
          }}
        >
          <h5>
            {t("rs")} {oneStudentFeesStat?.paid_by_government ?? 0}
          </h5>
          <h6>{t("by_scholarship")}</h6>
        </div>
      </div>
      <div className={style.student_fees_header_column}>
        <StudentFeesButton
          label="admission_fees"
          isActive={!searchParams.get("n")}
          customStyleContainer={{
            marginRight: "2rem",
          }}
          url=""
        />
        <StudentFeesButton
          label="department_fees"
          isActive={searchParams.get("n") === "internal" ? true : false}
          url="&n=internal"
        />
      </div>
      <div>
        <div
          className={style.student_fees_row_amount}
          style={{
            alignItems: "flex-end",
          }}
        >
          <h5
            style={{
              color: "#121212",
            }}
          >
            {t("rs")}.{" "}
            {addAmountTotal(
              oneStudentFeesStat?.student?.studentRemainingFeeCount || 0,
              oneStudentFeesStat?.student?.admissionRemainFeeCount || 0,
              oneStudentFeesStat?.student?.hostelRemainFeeCount || 0
            )}
          </h5>
          <h6>{t("outstanding_fees")}</h6>
        </div>
        <div
          className={style.student_fees_row_amount}
          style={{
            alignItems: "flex-end",
            marginTop: "1rem",
          }}
        >
          <h5
            style={{
              color: "#121212",
            }}
          >
            {t("rs")}.{" "}
            {oneStudentFeesStat?.student?.applicable_fees_pending ?? 0}
          </h5>
          <h6>{t("applicable_outstanding")}</h6>
          <div>{t("to_be_paid_by_student")}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeesHeader;
