import React from "react";
import { useTranslation } from "react-i18next";
import style from "../Finance/Institute/Mainbody/Main.module.css";
import InstituteHostelTabChangeLink from "./InstituteHostelTabChange";
import CommonLinkTab from "../Sidebar/CommonLinkTab";
import { useSearchParams } from "react-router-dom";
import InstituteHostelFund from "./InstituteHostelFund";

const InstituteHostelMenu = ({
  carryParentState,
  onlineFee,
  offlineFee,
  exemptAmount,
  remainingFeeCount,
}) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className={style.finance_tab_tabs}>
        <CommonLinkTab
          tabLevel={t("menu")}
          customStyleContainer={{
            width: "33.3%",
            marginRight: "2px",
            borderTopLeftRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="menu"
          currentValue={!searchParams?.get("a") ? "menu" : "other"}
          carryParentState={carryParentState}
          activeUrl="hostel"
        />
        <CommonLinkTab
          tabLevel={t("fees_structure")}
          customStyleContainer={{
            width: "33.3%",
            marginRight: "2px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="fee"
          currentValue={searchParams?.get("a") === "fee" ? "fee" : "other"}
          carryParentState={carryParentState}
          activeUrl="hostel?a=fee"
        />
        <CommonLinkTab
          tabLevel={t("funds")}
          customStyleContainer={{
            width: "33.3%",
            borderTopRightRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="fund"
          currentValue={searchParams?.get("a") === "fund" ? "fund" : "other"}
          carryParentState={carryParentState}
          activeUrl="hostel?a=fund"
        />
      </div>
      {!searchParams?.get("a") ? (
        <div className={style.item}>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="warden"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-warden-icon.svg"
                alt="Class Catalog"
              />
              <p>{t("staff_room")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="unit"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-unit-icon.svg"
                alt="completed"
              />
              <p>{t("hostel_unit")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="hostelites"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                alt="completed"
              />
              <p>{t("total_hostelites")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="request"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-renewal-icon.svg"
                alt="inquery"
              />
              <p>{t("admission_renewal")}</p>
            </div>
          </InstituteHostelTabChangeLink>

          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="pending"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-pending-icon.svg"
                alt="completed"
              />
              <p>{t("pending_fees")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="form"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-form-icon.svg"
                alt="inquery"
              />
              <p>{t("hostel_admission_form_details")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="export"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt="refund"
              />
              <p>{t("data_exporting")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="moderator"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-moderator-icon.svg"
                alt="moderator icon"
              />
              <p>{t("hostel_moderator")}</p>
            </div>
          </InstituteHostelTabChangeLink>
          <InstituteHostelTabChangeLink
            carryParentState={carryParentState}
            activeTab="batch"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/hostel/hostel-batch-icon.svg"
                alt="completed"
              />
              <p>{t("hostel_tab_batch")}</p>
            </div>
          </InstituteHostelTabChangeLink>
        </div>
      ) : searchParams?.get("a") === "fund" ? (
        <InstituteHostelFund
          carryParentState={carryParentState}
          onlineFee={onlineFee}
          offlineFee={offlineFee}
          exemptAmount={exemptAmount}
          remainingFeeCount={remainingFeeCount}
        />
      ) : null}
    </>
  );
};

export default InstituteHostelMenu;
