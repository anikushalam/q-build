import React from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import Funds from "./Funds/Funds";
import HostelTabChangeLink from "../HostelTabChangeLink";
import { useLocation } from "react-router-dom";
import HostelFeeStructure from "../HostelFeeStructure/HostelFeeStructure";

function MiddleContent({
  hostel,
  onRefetch,
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
}) {
  const { t } = useTranslation();
  const getQuery = useLocation();

  return (
    <div
      className={style.MiddleContent}
      style={
        getQuery?.search?.substring(9) === "category" ||
        getQuery?.search?.substring(9) === "structure"
          ? {
              marginTop: "0",
            }
          : {
              color: "inherit",
            }
      }
    >
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs search={getQuery?.search} carryParentState={carryParentState} />
        </div>

        {!getQuery?.search && (
          <div className={style.item}>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="notice"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-announcement-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("announcement_notices")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="unit"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-unit-icon.svg"
                  alt="completed"
                />
                <p>{t("hostel_unit")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab={
                accessRole !== "RENEWAL_UNIT_ACCESS"
                  ? "request"
                  : "request&unit&renewal"
              }
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-renewal-icon.svg"
                  alt="inquery"
                />
                <p>{t("admission_renewal")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="hostelites"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                  alt="inquery"
                />
                <p>{t("total_hostelites")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="warden"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-warden-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("staff_room")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="receipt&n=request"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-receipt-icon.svg"
                  alt="refund"
                />
                <p>{t("admission_payment_verification")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="pending"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-pending-icon.svg"
                  alt="refund"
                />
                <p>{t("pending_fees")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              activeTab="deposit"
              carryParentState={carryParentState}
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-deposit-icon.svg"
                  alt="refund"
                />
                <p>{t("finance_deposit")}</p>
              </div>
            </HostelTabChangeLink>

            {/* <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/department/department-complaint-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("complaints")}</p>
              </div>
            </HostelTabChangeLink> */}

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="form"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-form-icon.svg"
                  alt="inquery"
                />
                <p>{t("hostel_admission_form_details")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="rule"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-rule-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("rules_and_regulation")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="export"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-export-icon.svg"
                  alt="refund"
                />
                <p>{t("data_exporting")}</p>
              </div>
            </HostelTabChangeLink>

            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="moderator"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-moderator-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("hostel_moderator")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="batch"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/hostel/hostel-batch-icon.svg"
                  alt="completed"
                />
                <p>{t("hostel_tab_batch")}</p>
              </div>
            </HostelTabChangeLink>
            <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="linked"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/transport/transport-institute-link-icon.svg"
                  alt="completed"
                />
                <p>{t("linked_institute")}</p>
              </div>
            </HostelTabChangeLink>
            {/* <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="standard"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}

            >
              <div className={style.itemIcon}>
                <img src="/images/master-24-grey-icon.svg" alt="completed" />
                <p>{t("hostel_tab_standard")}</p>
              </div>
            </HostelTabChangeLink> */}
          </div>
        )}
        {getQuery?.search?.substring(3) === "fund" && (
          <div className={style.classList}>
            <Funds
              hostel={hostel}
              onRefetch={onRefetch}
              carryParentState={carryParentState}
              accessRole={accessRole}
              callApi={callApi}
            />
          </div>
        )}
        {getQuery?.search?.substring(3, 6) === "fee" && (
          <HostelFeeStructure
            // financeId={hostel?.institute?.financeDepart?.[0]}
            financeId={hostel?.institute?.financeDepart?.[0]?._id}
            fees_category_count={
              hostel?.institute?.financeDepart?.[0]?.fees_category_count
            }
            fee_master_array_count={
              hostel?.institute?.financeDepart?.[0]?.fee_master_array_count
            }
            fee_structure_count={hostel?.fees_structures_count}
            carryParentState={carryParentState}
            accessRole={accessRole}
            hostelId={hostel?._id}
            instituteId={hostel?.institute?._id}
            callApi={callApi}
          />
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
