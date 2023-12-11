import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function Tabs({ search, carryParentState }) {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={style.mcqTop}>
      <div className={style.mcqToptabs}>
        <Link
          to={`/q/${params.username}/member/transport`}
          state={{ ...carryParentState }}
          style={{ width: "25%" }}
        >
          <div
            className={
              !search ? `${style.mcqTopItem} ${style.active}` : style.mcqTopItem
            }
          >
            {t("vechiles")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/transport?a=personal`}
          state={{ ...carryParentState }}
          style={{ width: "25%" }}
        >
          <div
            className={
              search?.substring(3) === "personal"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("transport_personal")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/transport?a=passenger`}
          state={{ ...carryParentState }}
          style={{ width: "25%" }}
        >
          <div
            className={
              search?.substring(3) === "passenger"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("passengers_and_student")}
          </div>
        </Link>
        <Link
          to={`/q/${params.username}/member/transport?a=fees`}
          state={{ ...carryParentState }}
          style={{ width: "25%" }}
        >
          <div
            className={
              search?.substring(3) === "fees"
                ? `${style.mcqTopItem} ${style.active}`
                : style.mcqTopItem
            }
          >
            {t("transport_fees")}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
