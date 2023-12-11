import React from "react";
import { useTranslation } from "react-i18next";
import style from "../AdmissionScholarship.module.css";
import moment from "moment";
const CorpusCard = ({ corpus }) => {
  const { t } = useTranslation();
  return (
    <div className={style.corpus_card}>
      <h6
        style={{
          textAlign: "center",
        }}
      >
        {t("invoice_number")}
        {corpus?.invoice_number ?? ""}
      </h6>
      <p className={style.recieve_from}>{t("recieved_from")}</p>
      <div className={style.unused_container_text_inner}>
        <h6>
          {corpus?.incomeFromUser
            ? `${corpus?.incomeFromUser?.userLegalName}`
            : corpus?.incomeFrom ?? ""}
        </h6>
        <h6>
          {t("rs")} {corpus?.incomeAmount ?? 0}
        </h6>
      </div>
      <div className={style.unused_container_text_inner}>
        <p
          style={{
            color: "rgba(18, 18, 18, 0.8)",
          }}
        >
          {moment(corpus?.createdAt)?.format("DD MMM yyyy")},{" "}
          {moment(corpus?.createdAt)?.format("LT")}
        </p>
        <p
          style={{
            color: "rgba(18, 18, 18, 0.8)",
          }}
        >
          {corpus?.incomeAccount === "By Bank" ? "Bank" : "Cash"}
        </p>
      </div>
      <p>
        {t("grant_utr_ref")}
        {corpus?.income_utr}
      </p>
    </div>
  );
};

export default CorpusCard;
