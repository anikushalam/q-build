import React from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
function IdCardSectionTab({ carryParentState, isInstitute }) {
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
      {isInstitute ? (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/student?a=idcard`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) === "idcard"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("id_cards")}</div>
          </Link>
          <Link
            to={`/q/${params.username}/student?a=idcard&n=export`}
            state={carryParentState}
            className={
              getQuery.search?.substring(12) === "export"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("id_export")}</div>
          </Link>
        </div>
      ) : (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/member/idcard`}
            state={carryParentState}
            className={
              !getQuery.search
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            // style={{
            //   width: "33.3%",
            // }}
          >
            <div>{t("all_students")}</div>
          </Link>
          <Link
            to={`/q/${params.username}/member/idcard?a=issue`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) === "issue"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            // style={{
            //   width: "33.3%",
            // }}
          >
            <div>{t("id_cards")}</div>
          </Link>
          {/* <Link
            to={`/q/${params.username}/member/idcard?a=export`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) === "export"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
            style={{
              width: "33.3%",
            }}
          >
            <div>{t("id_export")}</div>
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default IdCardSectionTab;
