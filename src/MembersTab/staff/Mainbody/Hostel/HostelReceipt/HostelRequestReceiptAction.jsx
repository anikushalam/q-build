import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import style from "../../StaffAdmisionAdmin/FeeReceipts/FeeReceipts.module.css";
import { useOneReceiptActionByHostel } from "../../../../../hooks/member_tab/hostel-api";
import { pdfShowUrlNext } from "../../../../../services/BaseUrl";

const RequestReceiptAction = ({
  reqId,
  receipt,
  hid,
  onReceiptToggle,
  onRefetch,
  showAs,
}) => {
  const { t } = useTranslation();
  const [reason, setReason] = useState("");
  const [activeTab, setActiveTab] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const onInputChange = () => {};
  const [oneReceiptActionByHostel] = useOneReceiptActionByHostel();

  const onViewAcknowledge = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onConfirm = () => {
    setDisabled((pre) => !pre);
    oneReceiptActionByHostel({
      hid: hid,
      rid: receipt?._id,
      reqId: reqId,
      status:
        showAs === "REJECTED"
          ? activeTab
            ? "Over_Rejection"
            : "Rejection_Notify"
          : activeTab
          ? "Approved"
          : "Rejected",
      receiptReason: { reason: reason },
    })
      .then(() => {
        // console.info("thjksndsd", res);
        onRefetch();
        setDisabled((pre) => !pre);
        onReceiptToggle();
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };
  return (
    <PopupWrapper onClose={onReceiptToggle}>
      <div className={style.fee_request}>
        <h6>{t("fee_receipt_request")}</h6>
        <BorderBottom
          customStyle={{
            width: "30rem",
            marginTop: "0.7rem",
          }}
        />
        <div className={style.fee_request_tab}>
          <h6
            className={activeTab ? style.fee_request_tab_active : ""}
            onClick={() => setActiveTab(true)}
          >
            {t("accept")}
          </h6>
          <h6
            className={!activeTab ? style.fee_request_tab_active : ""}
            onClick={() => setActiveTab(false)}
          >
            {t("reject")}
          </h6>
        </div>
        <section className={style.fee_request_detail}>
          <h6 className={style.fee_request_detail_name}>
            {t("name")} {" : "}{" "}
            {`${receipt?.student?.studentFirstName} ${
              receipt?.student?.studentMiddleName
                ? receipt?.student?.studentMiddleName
                : ""
            } ${receipt?.student?.studentLastName}`}
          </h6>
          <h6 className={style.fee_request_detail_amount}>
            {t("amount")} {" : "} {t("rs")} {receipt?.fee_payment_amount ?? 0}
          </h6>
          <h6 className={style.fee_request_detail_date}>
            {moment(receipt?.created_at).format("DD MMM yyyy")}
          </h6>
        </section>
        {activeTab && (
          <>
            <JoinFormInput
              labelText={t("bank_name_collect")}
              name={"fee_bank_name"}
              type={"tel"}
              value={receipt?.fee_bank_name}
              onChange={onInputChange}
              placeholder={t("please_enter_bank_name")}
              customStyleLabel={{
                marginTop: "6px",
                marginBottom: "7px",
              }}
            />
            <JoinFormInput
              labelText={t("banke_holder_name")}
              name={"fee_bank_holder"}
              type={"tel"}
              value={receipt?.fee_bank_holder}
              onChange={onInputChange}
              placeholder={t("please_enter_name_of_bank_holder")}
              customStyleLabel={{
                marginTop: "6px",
                marginBottom: "7px",
              }}
            />
            <JoinFormInput
              labelText={t("cheque_dd_neft")}
              name={"fee_utr_reference"}
              type={"tel"}
              value={receipt?.fee_utr_reference}
              onChange={onInputChange}
              placeholder={t("please_enter_utr_ref_number")}
              customStyleLabel={{
                marginTop: "6px",
                marginBottom: "7px",
              }}
            />
            {receipt?.fee_payment_acknowledge ? (
              <button
                className={style.payment_acknowledge_btn}
                onClick={() =>
                  onViewAcknowledge(
                    `${pdfShowUrlNext}/${receipt?.fee_payment_acknowledge}`
                  )
                }
              >
                {t("payment_acknowledge")}
              </button>
            ) : null}
          </>
        )}
        {!activeTab && (
          <JoinFormInput
            labelText={t("reason_for_rejection_receipt")}
            name={"reason_for_rejection_receipt"}
            type={"text"}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder={t("please_reason_for_rejection_receipt")}
            customStyleLabel={{
              marginTop: "6px",
              marginBottom: "7px",
            }}
          />
        )}
        <button className={style.fee_request_confirm} onClick={onConfirm}>
          {activeTab ? t("confirm") : t("confirm_reject")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default RequestReceiptAction;
