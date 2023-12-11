import React, { useState } from "react";
import style from "./FeeReceipts.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import RequestReceiptAction from "./RequestReceiptAction";
import { imageShowUrl } from "../../../../../services/BaseUrl";

const ReceiptCard = ({ receipt, showAs, admissionId, onRefetch }) => {
  const { t } = useTranslation();
  const [openReceipt, setOpenReceipt] = useState(false);

  const onReceiptToggle = () => {
    if (showAs === "REQUEST") setOpenReceipt((pre) => !pre);
    else if (receipt?.receipt?.re_apply && showAs === "REJECTED") {
      setOpenReceipt((pre) => !pre);
    } else {
    }
  };
  return (
    <>
      <section
        className={style.request_card_container}
        onClick={onReceiptToggle}
      >
        <div className={style.request_card_info}>
          <img
            src={
              receipt?.receipt?.student?.studentProfilePhoto
                ? `${imageShowUrl}/${receipt?.receipt?.student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="avatar"
            className={style.request_card_info_image}
          />
          <div>
            <h6 className={style.request_card_info_name}>
              {/* {receipt?.receipt?.fee_bank_holder || ""} */}
              {`${receipt?.receipt?.student?.studentFirstName} ${
                receipt?.receipt?.student?.studentMiddleName
                  ? receipt?.receipt?.student?.studentMiddleName
                  : ""
              } ${receipt?.receipt?.student?.studentLastName}`}
            </h6>
            <p className={style.request_card_info_name}>
              {t("amount")} : {t("rs")}{" "}
              {receipt?.receipt?.fee_payment_amount || 0}
            </p>
            <p className={style.request_card_info_date}>
              {moment(receipt?.created_at).format("DD MMM yyyy")}
            </p>
          </div>
        </div>
        <h6 className={style.request_card_utr}>
          {t("utr_number")} {receipt?.receipt?.fee_utr_reference}
        </h6>
        {showAs === "REJECTED" && (
          <>
            <h6 className={style.reason_for_rejection}>
              {t("reason_for_rejection")}{" "}
              {receipt?.receipt?.reason ?? receipt?.reason}
            </h6>
            {receipt?.receipt?.re_apply && (
              <button className={style.re_requested_btn}>
                {t("re_requested")}
              </button>
            )}
          </>
        )}
      </section>
      {openReceipt && (
        <RequestReceiptAction
          receipt={receipt?.receipt}
          reqId={receipt?._id}
          onReceiptToggle={onReceiptToggle}
          admissionId={admissionId}
          onRefetch={onRefetch}
          showAs={showAs}
        />
      )}
    </>
  );
};

export default ReceiptCard;
