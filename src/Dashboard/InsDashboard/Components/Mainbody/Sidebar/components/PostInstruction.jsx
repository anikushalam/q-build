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
        <ol className={style.order_list}>
          <li>
            <p>{t("post_instruction1")}</p>
          </li>
          <li>
            <p>{t("post_instruction2")}</p>
          </li>
          <li>
            <p>{t("post_instruction3")}</p>
          </li>
          <li>
            <p>{t("post_instruction4")}</p>
          </li>
          <li>
            <p>{t("post_instruction5")}</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PostInstruction;
