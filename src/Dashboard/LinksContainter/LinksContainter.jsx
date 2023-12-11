import React from "react";
import style from "./LinksContainter.module.css";
import { useTranslation } from "react-i18next";

function LinksContainter() {
  const { t } = useTranslation();
  return (
    <div className={style.qvipleLinkscontainer}>
      <div className={style.qvipleLinks}>
        <div className={style.qvipleLinkabout}>
          <a
            className={style.linkitem}
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            {t("about")}
          </a>
        </div>

        <a
          className={style.linkitem}
          href="/q/terms/condition"
          target="_blank"
          rel="noreferrer"
        >
          {t("terms_use")}
        </a>
        <a
          className={style.linkitem}
          href="/q/privacy/policy"
          target="_blank"
          rel="noreferrer"
        >
          {t("privacy_policy")}
        </a>
        <a
          className={style.linkitem}
          href="https://support.qviple.com/"
          target="_blank"
          rel="noreferrer"
        >
          {t("ins_guide_manual")}
        </a>
        <a
          className={style.linkitem}
          href="https://support.qviple.com/"
          target="_blank"
          rel="noreferrer"
        >
          {t("user_guide_manual")}
        </a>
        <a
          className={style.linkitem}
          href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
          target="_blank"
          rel="noreferrer"
        >
          {t("get_app")}
        </a>

        <p className={style.qviple_logo}>
          <img src="/images/qviple-logo.svg" alt="company logo" />
          Mithkal Minds{" "}
          <img src="/images/dash-copy.svg" alt="copy right symbol" /> 2022
        </p>
      </div>
    </div>
  );
}

export default LinksContainter;
