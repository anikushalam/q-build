import { Divider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FinanceBankMenu from "./FinanceBankMenu";
import style from "./LinkedAccount.module.css";

const ShowForm = ({ bank, onRefetch, setIndex }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const onClose = () => {
    setOpenMenu((pre) => !pre);
  };

  const onOpenEdit = () => {
    setOpenMenu((pre) => !pre);
    setIndex(2);
  };
  return (
    <div className={style.accountInfo}>
      <div className={style.sidebarbottomitem}>
        <div></div>
        {!bank?.razor_account && (
          <div>
            <p className={style.namee}>{bank?.bankAccountHolderName}</p>
            <p className={style.desig}>{t("acnt_name")}</p>
          </div>
        )}
        {bank?.razor_account && (
          <div>
            <p className={style.namee}>{bank?.razor_id}</p>
            <p className={style.desig}>{t("merchant_secret_id")}</p>
          </div>
        )}

        {bank?.paymentBankStatus === "verified" ? (
          <div className={style.verify}>
            <img src="/images/finance/verified.svg" alt="" />
            <p className={style.green}>{bank?.paymentBankStatus}</p>
          </div>
        ) : (
          <div className={style.verify}>
            <img src="/images/finance/not-varified.svg" alt="" />
            <p className={style.red}>{bank?.paymentBankStatus}</p>
          </div>
        )}
        <img
          className={style.dots}
          src="/images/three-dot-icon.svg"
          alt="menu icon"
          onClick={onClose}
        />
      </div>
      <Divider />
      {!bank?.razor_account && (
        <>
          <div className={style.sidebarbottomitem}>
            <div></div>
            <div>
              <p className={style.namee}>
                {bank?.bankAccountType ? bank?.bankAccountType : "Saving"}
              </p>
              <p className={style.desig}>{t("account_type")}</p>
            </div>
          </div>
          <Divider />
          <div className={style.sidebarbottomitem}>
            <div></div>
            <div>
              <p className={style.namee}>{bank?.bankAccountNumber} </p>
              <p className={style.desig}>{t("account_holder")}</p>
            </div>
          </div>
          <Divider />
          <div className={style.sidebarbottomitem}>
            <div></div>
            <div>
              <p className={style.namee}>{bank?.bankIfscCode}</p>
              <p className={style.desig}>{t("ifsc")}</p>
            </div>
          </div>
          <Divider />
        </>
      )}
      {bank?.razor_account && (
        <>
          <div className={style.sidebarbottomitem}>
            <div></div>
            <div>
              <p className={style.namee}>{bank?.razor_key}</p>
              <p className={style.desig}>{t("razorpay_key")}</p>
            </div>
          </div>
          <Divider />
        </>
      )}
      <div className={style.sidebarbottomitem}>
        <div></div>
        <div>
          <p className={style.namee}>
            {bank?.bankAccountPhoneNumber
              ? `+91 ${bank?.bankAccountPhoneNumber}`
              : ""}
          </p>
          <p className={style.desig}>{t("mobile_bumber")}</p>
        </div>
      </div>
      {openMenu && (
        <FinanceBankMenu
          onClose={onClose}
          onRefetch={onRefetch}
          setIndex={setIndex}
          onOpenEdit={onOpenEdit}
        />
      )}
    </div>
  );
};

export default ShowForm;
