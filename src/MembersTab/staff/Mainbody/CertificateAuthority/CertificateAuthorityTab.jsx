import React from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
function CertificateAuthorityTab({ carryParentState }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  return (
    <div
      className={style.mcqTop}
      style={{
        padding: "0",
      }}
    >
      <div className={style.mcqToptabs}>
        <Link
          to={`/q/${params.username}/member/certificate`}
          state={carryParentState}
          className={
            !getQuery.search
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("all_students")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/certificate?a=request&n=request`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3, 10) === "request"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("request")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/certificate?a=fund`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "fund"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("fund")}</div>
        </Link>
      </div>
    </div>
  );
}

export default CertificateAuthorityTab;
