import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function Tabs({ carryParentState, search, accessRole }) {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <Link
          to={`/q/${params.username}/member/finance`}
          state={{ ...carryParentState }}
          style={{ width: "33.3%" }}
        >
          <div
            className={
              !search ? `${style.mcqTopItem} ${style.active}` : style.mcqTopItem
            }
          >
            {t("menu")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=fee`}
          state={{ ...carryParentState }}
          style={{ width: "33.3%" }}
        >
          <div
            className={
              search?.substring(3, 6) === "fee"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("fee_structure")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/finance?a=fund`}
          state={{ ...carryParentState }}
          style={{ width: "33.3%" }}
        >
          <div
            className={
              search?.substring(3) === "fund"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("funds")}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
