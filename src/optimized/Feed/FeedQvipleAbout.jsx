import React from "react";
import style from "./Feed.module.css";
import { useTranslation } from "react-i18next";
import { assestsLogoUrl } from "@/Services/UrlConfig/AssestsBaseUrl";

const FeedQvipleAbout = ({ customStyleContainer }) => {
  const { t } = useTranslation();
  return (
    <div className={style.f_right_qviple} style={customStyleContainer}>
      <div className={style.f_right_qviple_about}>
        <a
          className={style.f_right_qviple_link}
          href="https://dashboard.qviple.com"
          target="_blank"
          rel="noreferrer"
        >
          {t("about")}
        </a>
      </div>
      <div className={style.f_right_qviple_about}>
        <a
          className={style.f_right_qviple_link}
          href="/q/terms/condition"
          target="_blank"
          rel="noreferrer"
        >
          {t("terms_of_use")}
        </a>
        <a
          className={style.f_right_qviple_link}
          href="/q/privacy/policy"
          target="_blank"
          rel="noreferrer"
        >
          {t("privacy_policy")}
        </a>
      </div>
      <a
        className={style.f_right_qviple_link}
        href="https://support.qviple.com"
        target="_blank"
        rel="noreferrer"
      >
        {t("institute_guide_manual")}
      </a>
      <a
        className={style.f_right_qviple_link}
        href="https://support.qviple.com"
        target="_blank"
        rel="noreferrer"
      >
        {t("user_guide_manual")}
      </a>
      <a
        className={style.f_right_qviple_link}
        href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
        target="_blank"
        rel="noreferrer"
      >
        {t("get_the_qviple_app")}
      </a>

      <p className={style.f_right_qviple_logo_container}>
        <img
          className={style.f_right_qviple_logo}
          src={`${assestsLogoUrl}/qviple-text-logo.svg`}
          alt="company logo"
        />
        Mithkal Minds &#64; 2023
      </p>
    </div>
  );
};

export default FeedQvipleAbout;
