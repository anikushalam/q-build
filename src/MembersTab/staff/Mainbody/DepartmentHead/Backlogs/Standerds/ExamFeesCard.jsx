import React from "react";
import style from "./Standerds.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
const ExamFeesCard = ({ isFees, examFees, setAdd, setStudentList }) => {
  const { t } = useTranslation();
  return (
    <>
      {isFees ? (
        <div
          className={style.back_fees_container}
          onClick={() => setAdd(examFees)}
          style={{
            cursor: "pointer",
          }}
        >
          <img src="/images/department/bank-icon.svg" alt="bank icon" />
          <div className={style.back_fees_container_inner}>
            <h6>{t("backlog_exam_fee_structure")}</h6>
            <p>
              {t("rs")}.{examFees?.exam_fee_amount ?? 0}
              {" / "}
              {examFees?.exam_fee_type ?? ""}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={style.back_fees_list}
          style={{
            cursor: "pointer",
          }}
          onClick={() => setStudentList(examFees)}
        >
          <img src="/images/members/fees-icon.svg" alt="fees icon" />
          <div
            className={style.back_fees_list_inner}
            style={{
              width: "100%",
            }}
          >
            <div className={style.back_fees_list_text}>
              <h6>
                {examFees?.exam?.examName ?? ""}
                {", "}
                {t("rs")}. {examFees?.exam_fee_amount ?? 0}{" "}
                {examFees?.exam_fee_type}
              </h6>
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                {t("rs")}.{examFees?.total_paid_collection ?? 0}{" "}
                {t("received_of")} {` `}{" "}
                {examFees?.total_raised_collection ?? 0}
              </p>
            </div>
            <div className={style.back_fees_list_text}>
              <p>
                {moment(examFees?.created_at).format("DD MMMM yyyy")},{" "}
                {moment(examFees?.created_at).format("LT")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamFeesCard;
