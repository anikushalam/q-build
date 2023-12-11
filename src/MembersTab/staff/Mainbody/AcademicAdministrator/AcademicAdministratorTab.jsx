import React from "react";
import { useTranslation } from "react-i18next";
import style from "../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
function AcademicAdministratorTab({ carryParentState, isView }) {
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
      {isView === "SUBJECT" ? (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/member/administrator?a=subject`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) === "subject"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("academics")}</div>
          </Link>
          <Link
            to={`/q/${params.username}/member/administrator?a=subject&n=setting`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) !== "subject"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("edit_academic")}</div>
          </Link>
        </div>
      ) : (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/member/administrator?a=class`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) === "class"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("subjects")}</div>
          </Link>
          <Link
            to={`/q/${params.username}/member/administrator?a=class&n=time-table`}
            state={carryParentState}
            className={
              getQuery.search?.substring(3) !== "class"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            <div>{t("time_table")}</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AcademicAdministratorTab;
