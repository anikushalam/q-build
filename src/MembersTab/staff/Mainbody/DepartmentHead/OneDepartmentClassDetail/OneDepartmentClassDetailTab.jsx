import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../StaffAdmisionAdmin/MiddleContent/Tabs.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
function OneDepartmentClassDetailTab({ carryParentState }) {
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
          to={`/q/${params.username}/member/department/${params.deptname}?a=class-detail`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "class-detail"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("students")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/department/${params.deptname}?a=class-attendance`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "class-attendance"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("attendance")}</div>
        </Link>
        <Link
          to={`/q/${params.username}/member/department/${params.deptname}?a=class-subject`}
          state={carryParentState}
          className={
            getQuery.search?.substring(3) === "class-subject"
              ? `${style.mcqTopItem} ${style.active}`
              : style.mcqTopItem
          }
        >
          <div>{t("subjects")}</div>
        </Link>
      </div>
    </div>
  );
}

export default OneDepartmentClassDetailTab;
