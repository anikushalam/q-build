import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../FeesStructure/FeesStructure.module.css";
import useCalendar from "./useCalender";

const EmployeeAccountHeading = ({
  salaryData,
  attendanceDay,
  onAttendance,
  leaveTaken,
  setYears,
  setMonths,
  viewAs,
  salaryFilter,
}) => {
  const { t } = useTranslation();
  const { selectedDate, monthNames, getNextMonth, getPrevMonth } =
    useCalendar();

  useEffect(() => {
    if (viewAs !== "HISTORY") {
      setMonths(monthNames[selectedDate.getMonth()]);
      setYears(selectedDate.getFullYear());
    }
  }, [selectedDate, viewAs]);
  const onNext = () => {
    getNextMonth();
  };
  const onPrev = () => {
    getPrevMonth();
  };
  return (
    <>
      <section
        className={style.fees_head_title}
        style={{
          justifyContent: viewAs == "HISTORY" ? "center" : "space-between",
        }}
      >
        {viewAs !== "HISTORY" && (
          <img
            src="/images/members/back-icon-white.svg"
            style={{
              cursor: "pointer",
            }}
            onClick={onPrev}
          />
        )}

        <h6 className={`${style.yearmonth}`}>
          {`${monthNames[selectedDate.getMonth()]}`}{" "}
          {`${selectedDate.getFullYear()}`}
        </h6>

        {viewAs !== "HISTORY" && (
          <img
            src="/images/members/forward-icon-white.svg"
            style={{
              cursor: "pointer",
            }}
            onClick={onNext}
          />
        )}
      </section>
      <section className={style.fees_head_installment}>
        <h6>{t("account_salary_per_day")}</h6>
        <h6>
          {t("rs")}. {salaryData?.staff_salary_month ?? ""}
        </h6>
      </section>
      <section className={style.fees_head_installment}>
        <h6>{t("account_attendance")}</h6>
        <h6
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {viewAs === "HISTORY" ? (
            <span
              style={{
                marginRight: "0.3rem",
              }}
            >
              {salaryFilter?.attendence}
            </span>
          ) : (
            <input
              type={"tel"}
              value={attendanceDay}
              onChange={onAttendance}
              className={style.fee_head_amount_input}
              style={{
                width: "auto",
                marginRight: "0.3rem",
              }}
            />
          )}

          <span>{t("account_days")}</span>
        </h6>
      </section>

      {/* <section className={style.fees_head_installment}>
        <h6>{t("account_basic_salary")}</h6>
        <h6>
          <span
            style={{
              fontWeight: "400",
            }}
          >
            {`(${salaryFilter?.payment_mode}) `}
          </span>
          {t("rs")}.{" "}
          {viewAs === "HISTORY"
            ? salaryFilter?.amount?.toFixed(2)
            : salaryData?.staff_salary_month ?? ""}
        </h6>
      </section> */}
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />

      <section className={style.fees_head_installment}>
        <h6>{t("account_paid_leaves")}</h6>
        <h6>
          {t("account_total")} {salaryData?.staff_total_paid_leaves ?? ""}{" "}
          {t("account_days")}
        </h6>
      </section>

      <section className={style.fees_head_installment}>
        <h6>{t("account_paid_leaves_taken")}</h6>
        <h6>
          {t("account_total")}{" "}
          {viewAs === "HISTORY"
            ? salaryFilter?.paid_leaves > salaryData?.staff_total_paid_leaves
              ? salaryData?.staff_total_paid_leaves
              : salaryFilter?.paid_leaves
            : leaveTaken > salaryData?.staff_total_paid_leaves
            ? salaryData?.staff_total_paid_leaves
            : 0}{" "}
          {t("account_days")}
        </h6>
      </section>
    </>
  );
};

export default EmployeeAccountHeading;
