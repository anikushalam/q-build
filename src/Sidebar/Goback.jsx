import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./CommonSidebar.module.css";
import { useTranslation } from "react-i18next";

const Goback = ({ linkUrl, linkType, whichType }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onPreviousGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={style.goback_container}>
      {linkType && (
        <Link to={linkUrl}>
          <div className={style.goback_container_text}>
            <img src="/images/arr-left-white.svg" alt="go back icon" />
            <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
          </div>
        </Link>
      )}
      {/* {!backValue?.childList?.[backValue?.childHeight]?.linkType && (
        <div className={style.goback_container_text} onClick={onBack}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      )}
      {backValue?.childList?.[backValue?.childHeight]?.linkType && (
        <Link to={backValue?.childList[backValue?.childHeight]?.linkUrl}>
          <div className={style.goback_container_text}>
            <img src="/images/arr-left-white.svg" alt="go back icon" />
            <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
          </div>
        </Link>
      )} */}
      {whichType === "PREVIOUS_GO" && (
        <div
          className={style.goback_container_text}
          onClick={onPreviousGoBack}
          title="Go back"
        >
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      )}
    </div>
  );
};

export default Goback;
