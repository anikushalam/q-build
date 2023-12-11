import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

function Tabs({ search, carryParentState, isVehile }) {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={style.mcqTop}>
      {isVehile ? (
        <div className={style.mcqToptabs}>
          {/* <Link
          to={`/q/${params.username}/member/transport`}
          state={{ ...carryParentState }}
          style={{ width: "33.3%" }}
        > */}
          <div
            className={
              // !search ?
              `${style.mcqTopItem} ${style.active}`
              //  : style.mcqTopItem
            }
          >
            {t("menu")}
          </div>
          {/* </Link> */}
        </div>
      ) : (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/member/transport`}
            state={{ ...carryParentState }}
            style={{ width: "33.3%" }}
          >
            <div
              className={
                !search
                  ? `${style.mcqTopItem} ${style.active}`
                  : style.mcqTopItem
              }
            >
              {t("menu")}
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/transport?a=fee`}
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
            to={`/q/${params.username}/member/transport?a=fund`}
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
      )}
    </div>
  );
}

export default Tabs;
