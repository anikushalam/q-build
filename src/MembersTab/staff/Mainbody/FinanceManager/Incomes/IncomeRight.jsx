import React from "react";
import style from "./Incomes.module.css";
import moment from "moment";
import { useOneIncomeDetailQuery } from "../../../../../services/financeAPI";
import { useTranslation } from "react-i18next";

function IncomeRight({
  detailview,
  iBalance,
  incomeId,
  setIncomeId,
  setDetailView,
}) {
  const { data: iDetail } = useOneIncomeDetailQuery(`${incomeId}`, {
    skip: !incomeId,
  });
  const { t } = useTranslation();
  return (
    <>
      <div className={style.incomeRightt}>
        {detailview ? (
          <div className={style.detail}>
            <div className={style.detailTop}>
              <div className={style.detailTopLeft}>
                <h6 onClick={() => setDetailView(false)}>{t("back")}</h6>
              </div>
              <div className={style.detailTopMid}>
                <h6>
                  {iDetail?.oneIncome?.incomeFrom
                    ? iDetail?.oneIncome?.incomeFrom
                    : iDetail?.oneIncome?.incomeFromUser?.userLegalName}
                </h6>
              </div>
              <div className={style.detailTopRight}>
                <h6>Rs. {iDetail?.oneIncome?.incomeAmount}</h6>
              </div>
            </div>
            <div className={style.detailContent}>
              <p>{t("transaction_mode")}</p>
              <h6>
                {iDetail?.oneIncome?.incomeAccount} {t("payment")}{" "}
              </h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("reason")}</p>
              <h6>{iDetail?.oneIncome?.incomePurpose}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("description")}</p>
              <h6>{iDetail?.oneIncome?.incomeDesc}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("day_date")}</p>
              <h6>{moment(iDetail?.oneIncome?.createdAt).format("LL")}</h6>
            </div>
            <div className={style.detailContent}>
              <p>{t("acknowlegement")}</p>
              <div className={style.imagediv}>
                <img src="/images/image-icon.svg" alt="" />

                <p>img07.png</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.right}>
            <div className={style.rightHead}>
              <h6>{t("total_income")}</h6>
              <h6>
                Rs.{" "}
                {iBalance?.financeIncomeCashBalance +
                  iBalance?.financeIncomeBankBalance}
              </h6>
            </div>

            <div className={style.rightBody}>
              <h6>
                {" "}
                {t("by_cash")} : Rs. {iBalance?.financeIncomeCashBalance}
              </h6>
              <h6>
                {" "}
                {t("by_bank")} : Rs. {iBalance?.financeIncomeBankBalance}
              </h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default IncomeRight;
