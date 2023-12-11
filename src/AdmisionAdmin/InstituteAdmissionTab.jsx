import React from "react";
import style from "../Finance/Institute/Mainbody/Main.module.css";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import InstituteAdmissionTabChangeLink from "./InstituteAdmissionTabChangeLink";
import Funds from "./Funds/Funds";
import CommonLinkTab from "../Sidebar/CommonLinkTab";

const InstituteAdmissionTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className={style.finance_tab_tabs}>
        <CommonLinkTab
          tabLevel={t("menu")}
          customStyleContainer={{
            width: "50%",
            marginRight: "2px",
            borderTopLeftRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="menu"
          currentValue={!searchParams?.get("a") ? "menu" : "other"}
          carryParentState={carryParentState}
          activeUrl="admission"
        />
        <CommonLinkTab
          tabLevel={t("fund")}
          customStyleContainer={{
            width: "50%",
            borderTopRightRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="fund"
          currentValue={searchParams?.get("a") === "fund" ? "fund" : "other"}
          carryParentState={carryParentState}
          activeUrl="admission?a=fund"
        />
      </div>
      {!searchParams?.get("a") ? (
        <div className={style.item}>
          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=ongoing"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-ongoing-icon.svg"
                alt="Class Catalog"
              />
              <p>{t("admission_ongoing")}</p>
            </div>
          </InstituteAdmissionTabChangeLink>

          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=pending"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-pending-icon.svg"
                alt="inquery"
              />
              <p>{t("pending_fees")}</p>
            </div>
          </InstituteAdmissionTabChangeLink>
          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=completed"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-complete-icon.svg"
                alt="completed"
              />
              <p>{t("admission_complete")}</p>
            </div>
          </InstituteAdmissionTabChangeLink>
          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=export"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt="refund"
              />
              <p>{t("data_exporting")}</p>
            </div>
          </InstituteAdmissionTabChangeLink>
          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=moderator"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-moderator-icon.svg"
                alt="moderator icon"
              />
              <p>{t("admission_moderators")}</p>
            </div>
          </InstituteAdmissionTabChangeLink>
        </div>
      ) : searchParams?.get("a") === "fund" ? (
        <Funds carryParentState={carryParentState} />
      ) : null}
    </>
  );
};

export default InstituteAdmissionTab;
