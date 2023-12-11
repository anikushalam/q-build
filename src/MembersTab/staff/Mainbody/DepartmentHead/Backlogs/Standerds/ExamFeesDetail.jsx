import React, { useEffect, useState } from "react";
import style from "./Standerds.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useExamFeeStructureDetail } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const ExamFeesDetail = ({ examFees, onClose }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { examFeeStructureDetail, examFeeStructureDetailRefetch } =
    useExamFeeStructureDetail({
      efid: examFees?._id,
      skip: !examFees?._id,
    });

  useEffect(() => {
    if (examFees?._id) {
      setShowingDataLoading(true);
      examFeeStructureDetailRefetch();
    }
  }, [examFees?._id, examFeeStructureDetailRefetch]);

  useEffect(() => {
    if (examFeeStructureDetail?.all_fee) {
      setShowingDataLoading(false);
    }
  }, [examFeeStructureDetail?.all_fee]);

  return (
    <>
      <div className={style.fees_header}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="go to previous"
            title="Go Back"
            style={{
              cursor: "pointer",
            }}
          />

          <h6>{t("total_collect_amount")}</h6>
        </div>
        <h6>
          {t("rs")}. {examFees?.total_paid_collection ?? 0}
        </h6>
      </div>

      <div className={style.fees_table_header}>
        <h6
          style={{
            width: "20%",
          }}
        >
          {t("roll_number")}
        </h6>
        <h6
          style={{
            width: "50%",
          }}
        >
          {t("name")}
        </h6>
        <h6
          style={{
            width: "15%",
          }}
        >
          {t("amount")}
        </h6>
        <h6
          style={{
            width: "15%",
          }}
        >
          {t("status")}
        </h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.8rem",
        }}
      />
      {examFeeStructureDetail?.all_fee?.map((student) => (
        <div className={style.fees_table_header}>
          <p
            style={{
              width: "20%",
            }}
          >
            {student?.student?.studentROLLNO > 9
              ? student?.student?.studentROLLNO
              : `0${student?.student?.studentROLLNO}`}
          </p>
          <p
            style={{
              width: "50%",
            }}
          >
            {`${student?.student?.studentFirstName ?? ""} ${
              student?.student?.studentMiddleName ?? ""
            } ${student?.student?.studentLastName ?? ""}`}
          </p>
          <p
            style={{
              width: "15%",
            }}
          >
            {student?.amount ?? 0}
          </p>
          <p
            style={{
              width: "15%",
            }}
          >
            <img
              style={{
                marginLeft: "0.7rem",
              }}
              src={
                student?.status === "Not Paid"
                  ? "/images/department/radio-gray-icon.svg"
                  : "/images/department/radio-blue-icon.svg"
              }
              alt="radio icon"
            />
          </p>
        </div>
      ))}

      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default ExamFeesDetail;
