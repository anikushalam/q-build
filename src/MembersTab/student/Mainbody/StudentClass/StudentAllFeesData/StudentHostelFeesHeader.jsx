import React from "react";
import style from "./StudentAllFeesData.module.css";
import { useTranslation } from "react-i18next";
import StudentFeesButton from "./StudentFeesButton";

const StudentHostelFeesHeader = ({
  value,
  onTabHandler,
  padiFees,
  remainingFees,
  applicableRemainingFees,
  scholarshipFees,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.student_fees_header_container}>
      <div>
        <div className={style.student_fees_row_amount}>
          <h5>
            {t("rs")}. {padiFees ?? 0}
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
            {t("rs")}. {scholarshipFees ?? 0}
          </h5>
          <h6>{t("by_scholarship")}</h6>
        </div>
      </div>
      <div className={style.student_fees_header_column}>
        <StudentFeesButton
          label={"hostel_fees"}
          currentValue={0}
          value={value}
          onClick={onTabHandler}
          customStyleContainer={{
            marginRight: "2rem",
          }}
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
            {t("rs")}. {remainingFees ?? 0}
          </h5>
          <h6>{t("remaining_fees")}</h6>
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
            {t("rs")}. {applicableRemainingFees ?? 0}
          </h5>
          <h6>{t("applicable_remaining")}</h6>
          <div>{t("to_be_paid_by_student")}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentHostelFeesHeader;
