import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function Tabs({ carryParentState }) {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();

  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <Link
          to={`/q/${params.username}/member/student/hostel`}
          state={{ ...carryParentState }}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              !getQuery?.search
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("menu")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/student/hostel?a=notice`}
          state={{ ...carryParentState, viewNotice: "HOSTEL_UNIT_TAB" }}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              getQuery?.search?.substring(3) === "notice"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("notices")}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/member/student/hostel?a=roommate`}
          state={{ ...carryParentState }}
          style={{
            width: "33.3%",
          }}
        >
          <div
            className={
              getQuery?.search?.substring(3) === "roommate"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("roommates")}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
