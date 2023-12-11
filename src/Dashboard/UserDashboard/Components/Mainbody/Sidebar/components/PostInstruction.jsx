import React from "react";
import style from "./PostInstruction.module.css";
import { useTranslation } from "react-i18next";

function PostInstruction() {
  const { t } = useTranslation();
  return (
    <div className={style.instruction}>
      <div className={style.header}>
        <h6>{t("instructions")}</h6>
      </div>

      <div className={style.list}>
        <ol>
          <li>
            <p>{t("age_eligibility")}</p>
          </li>
          <li>
            <p>{t("initially_users")}</p>
          </li>
          <li>
            <p>{t("eligibility_criteria")}</p>
          </li>
          <li>
            <p>{t("announcements_ins")}</p>
          </li>
          <li>
            <p>{t("take_care")}</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PostInstruction;
