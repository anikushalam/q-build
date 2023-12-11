import React, { useState } from "react";
import BalanceItem from "./BalanceItem";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
import { useSubmitRequest } from "../../../../../../hooks/member_tab/library-api";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { useSelector } from "react-redux";
import LibraryTabChnageLink from "../../LibraryTabChnageLink";
import QLoader from "../../../../../../Loader/QLoader";

function Funds({ carryParentState, library, getLibraryDetailRefetch }) {
  const { t } = useTranslation();
  const libAuthor = useSelector((state) => state.libraryChange);
  const [submitFinanceRequest] = useSubmitRequest();
  const [disabled, setDisabled] = React.useState(false);

  const handleSubmit = () => {
    setDisabled((pre) => !pre);
    submitFinanceRequest({
      lid: libAuthor?.lid,
      fine: {
        amount: library?.collectedFine,
      },
    })
      .then(() => {
        getLibraryDetailRefetch();
        setDisabled((pre) => !pre);
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };

  console.info("library", library);
  return (
    <div className={style.funds}>
      <div className={style.fundshead}>
        <h6> {t("lib_fines")} </h6>
        <img src="/images/finance/filter-icon.svg" alt="" />
      </div>

      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/finance/doller-icon.svg" />
          <div>
            <p className={style.namee}>{`Rs. ${library?.totalFine}`}</p>
            <p className={style.desig}>{t("total_fine_collected")}</p>
          </div>
        </div>

        <BalanceItem
          check="false"
          bal={t("cash_fine")}
          value={library?.offlineFine}
        />
        <BalanceItem
          check="false"
          bal={t("bank_fine")}
          value={library?.onlineFine}
        />
        <BalanceItem
          check="true"
          bal={t("cash_with_me")}
          value={library?.collectedFine}
        />

        {library?.requestStatus === "Pending" && library?.collectedFine > 0 ? (
          <button
            className={style.submitbtn}
            disabled={disabled}
            onClick={handleSubmit}
          >
            {t("sublit_to_finance")}
            {disabled && (
              <div style={{ marginTop: "0.7vw" }}>
                <LoaderButton />
              </div>
            )}
          </button>
        ) : library?.requestStatus === "Requested" ? (
          <button className={`${style.submitbtn} ${style.disabled}`}>
            {t("request_to_finance")}
          </button>
        ) : (
          <button className={`${style.submitbtn} ${style.disabled}`}>
            {t("sublit_to_finance")}
          </button>
        )}
        <LibraryTabChnageLink
          carryParentState={carryParentState}
          activeTab="charge"
        >
          <div className={style.recover_btn}>
            {t("total_pending_fees")}: {t("rs")}. {library?.remainFine ?? 0}
          </div>
        </LibraryTabChnageLink>
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default Funds;
