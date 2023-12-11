import React from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import TransportTabChangeLink from "../TransportTabChangeLink";
import { useLocation } from "react-router-dom";
import TransportFees from "../TransportFees/TransportFees";
import TransportFeeStructure from "../TransportFeeStructure/TransportFeeStructure";

function MiddleContent({
  tid,
  transport,
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
            <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="vehicle"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/transport/transport-vehicle-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("transport_vehicles")}</p>
              </div>
            </TransportTabChangeLink>

            <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="personal"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/transport/transport-personal-icon.svg"
                  alt="completed"
                />
                <p>{t("transportation_personal")}</p>
              </div>
            </TransportTabChangeLink>
            <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="passenger"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/transport/transport-passenger-icon.svg"
                  alt="inquery"
                />
                <p>{t("all_passengers_student")}</p>
              </div>
            </TransportTabChangeLink>

            <TransportTabChangeLink
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
            </TransportTabChangeLink>
            <TransportTabChangeLink
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
            </TransportTabChangeLink>
            <TransportTabChangeLink
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
            </TransportTabChangeLink>
            <TransportTabChangeLink
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
            </TransportTabChangeLink>
            {/* <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            > */}
            {/* <div className={style.itemIcon}>
              <img
                src="/images/member_tab/department/department-complaint-icon.svg"
                alt="moderator icon"
              />
              <p>{t("complaints")}</p>
            </div> */}
            {/* </TransportTabChangeLink> */}

            {/* <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="export"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            > */}
            {/* <div className={style.itemIcon}>
              <img
                src="/images/member_tab/finance/finance-export-icon.svg"
                alt="refund"
              />
              <p>{t("data_exporting")}</p>
            </div> */}
            {/* </TransportTabChangeLink> */}

            {/* <TransportTabChangeLink
              carryParentState={carryParentState}
              activeTab="moderator"
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
            > */}
            {/* <div className={style.itemIcon}>
              <img
                src="/images/member_tab/admission/admission-moderator-icon.svg"
                alt="moderator icon"
              />
              <p>{t("transport_moderator")}</p>
            </div> */}
            {/* </TransportTabChangeLink> */}
          </div>
        )}
        {getQuery?.search?.substring(3) === "fund" && (
          <div className={style.classList}>
            <TransportFees
              tid={tid}
              transport={transport}
              onRefetch={onRefetch}
            />
          </div>
        )}
        {getQuery?.search?.substring(3, 6) === "fee" && (
          <TransportFeeStructure
            financeId={transport?.institute?.financeDepart?.[0]?._id}
            fees_category_count={
              transport?.institute?.financeDepart?.[0]?.fees_category_count
            }
            fee_master_array_count={
              transport?.institute?.financeDepart?.[0]?.fee_master_array_count
            }
            fee_structure_count={transport?.fees_structures_count}
            carryParentState={carryParentState}
            accessRole={accessRole}
            transportId={transport?._id}
            instituteId={transport?.institute?._id}
            callApi={callApi}
          />
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
