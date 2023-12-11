import React from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
function LeavesAndtransferAuthorityTab({ carryParentState }) {
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
          to={`/q/${params.username}/member/leavestransfer`}
          state={carryParentState}
          className={
            !getQuery.search
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("all_staff")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/leavestransfer?a=attendance`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "attendance"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("attendance")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/leavestransfer?a=request`}
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
          to={`/q/${params.username}/member/leavestransfer?a=configuration`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "configuration"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("configuration")}</div>
        </Link>
        {/* <Link
          to={`/q/${params.username}/member/leavestransfer?a=moderator`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "moderator"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("moderator")}</div>
        </Link> */}
      </div>
    </div>
  );
}

export default LeavesAndtransferAuthorityTab;
