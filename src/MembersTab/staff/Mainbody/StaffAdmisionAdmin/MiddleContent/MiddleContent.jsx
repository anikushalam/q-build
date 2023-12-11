import React, { useState } from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import Funds from "./Funds/Funds";
import AdmissionTabChangeLink from "../AdmissionTabChangeLink";

function MiddleContent({
  contentData,
  onRefetch,
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <div className={style.item}>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="student"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-student-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("all_student")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="ongoing"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-ongoing-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("admission_ongoing")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="enquiry"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-enquery-icon.svg"
                  alt="inquery"
                />
                <p>{t("admission_enquery")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="receipt&n=request"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-receipt-icon.svg"
                  alt="inquery"
                />
                <p>{t("admission_payment_verification")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="pending"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-pending-icon.svg"
                  alt="inquery"
                />
                <p>{t("pending_fees")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="scholarship"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/finance/finance-scholarship-icon.svg"
                  alt="scholarship icon"
                />
                <p>{t("admission_scholership_management")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="refund"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-excess-icon.svg"
                  alt="refund"
                />
                <p>{t("admission_excess_fee_refund")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="completed"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-complete-icon.svg"
                  alt="completed"
                />
                <p>{t("admission_complete")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
              carryParentState={carryParentState}
              activeTab="document"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/admission/admission-document-icon.svg"
                  alt="inquery"
                />
                <p>{t("admission_required_document")}</p>
              </div>
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
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
            </AdmissionTabChangeLink>
            <AdmissionTabChangeLink
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
                <p>{t("admission_moderators")}</p>
              </div>
            </AdmissionTabChangeLink>
          </div>
        )}
        {activeIndex === 1 && (
          <div className={style.classList}>
            <Funds
              funds={contentData}
              onRefetch={onRefetch}
              carryParentState={carryParentState}
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
