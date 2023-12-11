import React from "react";
import style from "./Support.module.css";
// import { useTranslation } from "react-i18next";
import SingleChat from "./PersonalChat/SingleChat";

function Support({ supportQuery }) {
  // const { t } = useTranslation();
  return (
    <div className={style.support}>
      <SingleChat chat={supportQuery && supportQuery} />
      {/* <div className={style.heading}>
        <h5>{t("ask-for-support-label")}</h5>
      </div>
      <div className={style.divider}></div>

      <div className={style.content}>
        <h6>{t("How are your feelings?")}</h6>
      </div>

      <div className={style.emojiContainer}>
        <img src="/images/emoji1.svg" />
        <img src="/images/emoji2.svg" />
        <img src="/images/emoji3.svg" />
        <img src="/images/emoji4.svg" />
        <img src="/images/emoji5.svg" />
      </div>

      <div className={style.query}>
        <h6>{t("Raise query here")}</h6>

        <textarea
          className={style.postTextarea}
          rows="3"
          type="text"
          name="CreateInsPost"
          placeholder={t("Type your query here...")}
        />
      </div> */}
    </div>
  );
}

export default Support;
