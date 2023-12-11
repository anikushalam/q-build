import React from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./InstituteHostel.module.css";

function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

const InstituteHostelFund = ({
  onlineFee,
  offlineFee,
  exemptAmount,
  remainingFeeCount,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.funds2}>
      <div className={style.fundscontent}>
        <h6 className={style.institute_hostel_title}>{t("hostel_fees")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "0.7rem",
          }}
        />
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/hostel/rupee-blue-icon.svg" />
          <div>
            <p className={style.namee}>
              Rs.{" "}
              {(onlineFee
                ? onlineFee
                : 0 + offlineFee
                ? offlineFee
                : 0
              ).toFixed(2)}
            </p>
            <p className={style.desig}>{t("total_hostel_fees")}</p>
          </div>
        </div>

        <BalanceItem
          bal={t("online_fees")}
          value={onlineFee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          bal={t("offline_fees")}
          value={offlineFee?.toFixed(2) ?? 0}
        />
        <BalanceItem
          bal={`${t("total_concession_fees")}:`}
          value={exemptAmount?.toFixed(2) ?? 0}
        />
        <div className={style.fundbtn}>
          {t("total_pending_fees")} : Rs. {remainingFeeCount ?? 0}
        </div>
      </div>
    </div>
  );
};

export default InstituteHostelFund;
