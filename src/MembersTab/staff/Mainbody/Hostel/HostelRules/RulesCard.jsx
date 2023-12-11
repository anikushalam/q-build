import React from "react";
import style from "../Hostel.module.css";
import { useTranslation } from "react-i18next";

const RulesCard = ({ rules, setOpenRuleMenu, viewAs }) => {
  const { t } = useTranslation();

  return (
    <div className={style.rules_card}>
      <div className={style.rules_card_title}>
        <h6>{rules?.regulation_headline}</h6>
        {viewAs === "HOSTEL_SEARCH" ? (
          ""
        ) : (
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={(e) => setOpenRuleMenu(rules)}
            className={style.menu_icon}
            title="Menu"
          />
        )}
      </div>
      <p>{rules?.regulation_description}</p>
      {rules?.regulation_attachment && (
        <a
          title="Download Attachment"
          href={`https://d3dqpu54js2vfl.cloudfront.net/${rules?.regulation_attachment}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <span className={style.download_attachment}>
            {t("download_attachment")}
          </span>
        </a>
      )}
    </div>
  );
};

export default RulesCard;
