import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Inventry.module.css";

const Goods = ({ inventory, setInventryId, inventryId }) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        inventryId?._id === inventory?._id
          ? `${style.goods_container_active} ${style.goods_container}`
          : style.goods_container
      }
      onClick={() => setInventryId(inventory)}
      style={{ cursor: "pointer" }}
    >
      <p className={style.goods_name_label}>{t("goods_name")}</p>
      <div className={style.goods_name_container}>
        <h6 className={style.goods_name}>{inventory?.goods_name}</h6>
        <h6 className={style.goods_name}>
          {inventory?.goods_quantity} {t("qty")}
        </h6>
      </div>
      <div className={style.goods_name_container}>
        <p className={style.goods_depriciating}>
          {t("worth_rs")} {inventory?.goods_amount}
        </p>
        {/* <p className={style.goods_depriciating}>{t("depreciating_at")}</p> */}
      </div>
      <h6 className={style.goods_depriciating}>
        {t("total_expenses")}: Rs. {inventory?.total_expenses}
      </h6>
    </div>
  );
};

export default Goods;
