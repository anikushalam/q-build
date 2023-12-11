import React from "react";
import style from "./Fees.module.css";
import { useTranslation } from "react-i18next";

function Item({ onClickFeesId, fees, students }) {
  const { t } = useTranslation();
  return (
    <div
      className={style.sidebarheader}
      onClick={() => onClickFeesId({ _id: fees?._id, students })}
    >
      <img src="/images/feesIcon.svg" alt="" />
      <div className={style.text}>
        <div className={style.insName}>
          <h6>Rs.{fees?.feeAmount}/-</h6>
        </div>
        <div className={style.insUserName}>
          <p>{fees?.feeName}</p>
        </div>
      </div>

      <div className={style.date}>
        <h6>{fees?.feeDate}</h6>

        <p>{t("due_date")}</p>
      </div>
      {/* <div className={style.date}>
        <h6>Rs.{totalAmt}</h6>

        <p>{text}</p>
      </div> */}
    </div>
  );
}

function FeesList({ onClickFeesId, feesList }) {
  return (
    <div className={style.examList}>
      <div className={style.examListItems}>
        {feesList?.fee?.map((fees) => (
          <Item
            key={fees?._id}
            onClickFeesId={onClickFeesId}
            fees={fees}
            students={feesList?.ApproveStudent}
          />
        ))}
      </div>
    </div>
  );
}

export default FeesList;
