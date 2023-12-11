import React from "react";
import style from "./StudentAllFeesData.module.css";
import { useTranslation } from "react-i18next";
import StudentFeesButton from "./StudentFeesButton";

const StudentFeesHeader = ({
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
          label={"admission_fees"}
          currentValue={0}
          value={value}
          onClick={onTabHandler}
          customStyleContainer={{
            marginRight: "2rem",
          }}
        />
        <StudentFeesButton
          label={"department_fees"}
          currentValue={1}
          value={value}
          onClick={onTabHandler}
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
      {/* <div className={style.student_fees_row}>
        <div
          className={style.student_fees_row_amount}
          style={{
            width: "22%",
          }}
        >
          <h5>
            {t("rs")}. {padiFees ?? 0}
          </h5>
          <h6>{t("total_fees_paid")}</h6>
        </div>
        <StudentFeesButton
          label={"admission_fees"}
          currentValue={0}
          value={value}
          onClick={onTabHandler}
          customStyleContainer={{
            marginRight: "2rem",
          }}
        />
        <StudentFeesButton
          label={"department_fees"}
          currentValue={1}
          value={value}
          onClick={onTabHandler}
        />
        <div
          className={style.student_fees_row_amount}
          style={{
            alignItems: "flex-end",
            width: "27%",
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
      </div>
      <div
        className={style.student_fees_row}
        style={{
          marginTop: "1rem",
        }}
      >
        <div
          className={style.student_fees_row_amount}
          style={{
            width: "22%",
          }}
        >
          <h5>
            {t("rs")}. {scholarshipFees ?? 0}
          </h5>
          <h6>{t("by_scholarship")}</h6>
        </div>
        <StudentFeesButton
          label={"backlog_fees"}
          currentValue={2}
          value={value}
          onClick={onTabHandler}
          customStyleContainer={{
            marginRight: "2rem",
          }}
        />
        <StudentFeesButton
          label={"library_fees"}
          currentValue={3}
          value={value}
          onClick={onTabHandler}
        />
        <div
          className={style.student_fees_row_amount}
          style={{
            alignItems: "flex-end",
            width: "27%",
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
      </div> */}
    </div>
  );
};

export default StudentFeesHeader;
