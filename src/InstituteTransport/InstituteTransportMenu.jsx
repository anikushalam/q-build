import React from "react";
import { useTranslation } from "react-i18next";
import style from "../Finance/Institute/Mainbody/Main.module.css";
import InstituteTransportTabChangeLink from "./InstituteTransportTabChangeLink";
import CommonLinkTab from "../Sidebar/CommonLinkTab";
import { useSearchParams } from "react-router-dom";
import TransportFees from "../MembersTab/staff/Mainbody/Transport/TransportFees/TransportFees";

const InstituteTransportMenu = ({ carryParentState, transport }) => {
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
          activeUrl="transport"
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
          activeUrl="transport?a=fee"
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
          activeUrl="transport?a=fund"
        />
      </div>
      {!searchParams?.get("a") ? (
        <div className={style.item}>
          <InstituteTransportTabChangeLink
            carryParentState={carryParentState}
            activeTab="vehicle"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/transport/transport-vehicle-icon.svg"
                alt="moderator icon"
              />
              <p>{t("transport_vehicles")}</p>
            </div>
          </InstituteTransportTabChangeLink>
          <InstituteTransportTabChangeLink
            carryParentState={carryParentState}
            activeTab="personal"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/transport/transport-personal-icon.svg"
                alt="completed"
              />
              <p>{t("transportation_personal")}</p>
            </div>
          </InstituteTransportTabChangeLink>
          <InstituteTransportTabChangeLink
            carryParentState={carryParentState}
            activeTab="passenger"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/transport/transport-passenger-icon.svg"
                alt="inquery"
              />
              <p>{t("all_passengers_student")}</p>
            </div>
          </InstituteTransportTabChangeLink>
          <InstituteTransportTabChangeLink
            carryParentState={carryParentState}
            activeTab="pending"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-pending-icon.svg"
                alt="refund"
              />
              <p>{t("pending_fees")}</p>
            </div>
          </InstituteTransportTabChangeLink>

          <InstituteTransportTabChangeLink
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
          </InstituteTransportTabChangeLink>
          <InstituteTransportTabChangeLink
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
          </InstituteTransportTabChangeLink>

          <InstituteTransportTabChangeLink
            carryParentState={carryParentState}
            activeTab="moderator"
          >
            <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-moderator-icon.svg"
                alt="moderator icon"
              />
              <p>{t("transport_moderator")}</p>
            </div>
          </InstituteTransportTabChangeLink>
        </div>
      ) : searchParams?.get("a") === "fund" ? (
        <TransportFees transport={transport} pageOpenAs="INSTITUTE" />
      ) : null}
    </>
  );
};

export default InstituteTransportMenu;
