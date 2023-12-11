import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import style from "./SiteEdit.module.css";
import SiteTabChangeLink from "./SiteTabChangeLink";

const SiteTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div className={style.site_tab_container}>
      <SiteTabChangeLink
        carryParentState={carryParentState}
        activeTab="landing"
        customStyle={{
          width: "33.3%",
        }}
      >
        <h6
          className={
            getQuery?.search?.substring(3) === "landing"
              ? style.site_tab_container_h6_active
              : style.site_tab_container_h6
          }
        >
          {t("landing_page_looks")}
        </h6>
      </SiteTabChangeLink>
      <SiteTabChangeLink
        carryParentState={carryParentState}
        activeTab="tabs"
        customStyle={{
          width: "33.3%",
        }}
      >
        <h6
          className={
            getQuery?.search?.substring(3) === "tabs"
              ? style.site_tab_container_h6_active
              : style.site_tab_container_h6
          }
        >
          {t("active_tabs")}
        </h6>
      </SiteTabChangeLink>
      <SiteTabChangeLink
        carryParentState={carryParentState}
        activeTab="contact"
        customStyle={{
          width: "33.3%",
        }}
      >
        <h6
          className={
            getQuery?.search?.substring(3) === "contact"
              ? style.site_tab_container_h6_active
              : style.site_tab_container_h6
          }
        >
          {t("contacts")}
        </h6>
      </SiteTabChangeLink>
      <SiteTabChangeLink
        carryParentState={carryParentState}
        activeTab="openers"
        customStyle={{
          width: "33.3%",
        }}
      >
        <h6
          className={
            getQuery?.search?.substring(3) === "openers"
              ? style.site_tab_container_h6_active
              : style.site_tab_container_h6
          }
        >
          {t("site_openers")}
        </h6>
      </SiteTabChangeLink>
      <SiteTabChangeLink
        carryParentState={carryParentState}
        activeTab="others"
        customStyle={{
          width: "33.3%",
        }}
      >
        <h6
          className={
            getQuery?.search?.substring(3, 9) === "others"
              ? style.site_tab_container_h6_active
              : style.site_tab_container_h6
          }
        >
          {t("other_site_info")}
        </h6>
      </SiteTabChangeLink>
    </div>
  );
};

export default SiteTab;
