import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Inventry.module.css";

const InventoryExpnese = ({ expnese, worth }) => {
  const { t } = useTranslation();
  return (
    <div className={style.goods_container_expense}>
      <div className={style.goods_name_container}>
        <p className={style.goods_name_label}>{t("paid_to")}</p>
        <p className={style.goods_name_label}>
          {expnese?.expense_quantity} {t("qty")}
        </p>
      </div>
      <div className={style.goods_name_container}>
        <h6 className={style.goods_name}>{expnese?.expensePaid}</h6>
        <h6 className={style.goods_name}>
          {t("rs")}
          {`. `}
          {expnese?.expenseAmount}
        </h6>
      </div>
      <div className={style.goods_name_container}>
        <p className={style.goods_depriciating}>
          {moment(expnese?.createdAt).format("DD MMM yyyy")},{" "}
          {moment(expnese?.createdAt).format("LT")}
        </p>
        <p className={style.goods_depriciating}>{expnese?.expenseAccount}</p>
      </div>
      <div className={style.goods_name_container}>
        <p className={style.goods_depriciating}>
          {t("worth_rs")} {worth || 0}
        </p>
        {/* <p className={style.goods_depriciating}>{t("depreciating_at")} %/yr</p> */}
      </div>
    </div>
  );
};

export default InventoryExpnese;
