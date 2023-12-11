import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./LinkedAccount.module.css";
import { useTranslation } from "react-i18next";
import { Notfication } from "../../../../../validation/Snackbar";
import ButtonWithTypeSubmit from "../../../../../Custom/Button/ButtonWithTypeSubmit";
import { useFillBankEditForm } from "../../../../../hooks/institute/institute-finance-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";

const UpdateLinkedForm = ({ onRefetch, bankDetail, setIndex }) => {
  const { t } = useTranslation();
  const [bank, setBank] = useState({
    bankAccountHolderName: bankDetail?.bankAccountHolderName,
    bankAccountNumber: bankDetail?.bankAccountNumber,
    bankReAccountNumber: bankDetail?.bankAccountNumber,
    bankIfscCode: bankDetail?.bankIfscCode,
    bankAccountPhoneNumber: bankDetail?.bankAccountPhoneNumber,
    bankAccountType: bankDetail?.bankAccountType,
    razor_key: bankDetail?.razor_key,
    razor_id: bankDetail?.razor_id,
    re_razor_key: bankDetail?.razor_key,
    re_razor_id: bankDetail?.razor_id,
    razor_key_match: false,
    razor_id_match: false,
    razor_account: bankDetail?.razor_account,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const id = useSelector((state) => state.idChange.id);

  const [fillBankEditForm] = useFillBankEditForm();
  useEffect(() => {
    setBank({
      bankAccountHolderName: bankDetail?.bankAccountHolderName,
      bankAccountNumber: bankDetail?.bankAccountNumber,
      bankReAccountNumber: bankDetail?.bankAccountNumber,
      bankIfscCode: bankDetail?.bankIfscCode,
      bankAccountPhoneNumber: bankDetail?.bankAccountPhoneNumber,
      bankAccountType: bankDetail?.bankAccountType,
      razor_key: bankDetail?.razor_key,
      razor_id: bankDetail?.razor_id,
      re_razor_key: bankDetail?.razor_key,
      re_razor_id: bankDetail?.razor_id,
      razor_key_match: false,
      razor_id_match: false,
      razor_account: bankDetail?.razor_account,
    });
  }, [bankDetail]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (bank.razor_account) {
      if (
        bank.razor_key !== bank.re_razor_key ||
        bank.razor_id !== bank.re_razor_id
      ) {
        setBank((pre) => ({
          ...pre,
          razor_key_match: bank.razor_key !== bank.re_razor_key ? true : false,
          razor_id_match: bank.razor_id !== bank.re_razor_id ? true : false,
        }));
        setDisabled((pre) => !pre);
      } else {
        fillBankEditForm({
          editPassbook: {
            razor_key: bank.razor_key,
            razor_id: bank.razor_id,
            bankAccountPhoneNumber: bank.bankAccountPhoneNumber,
            razor_account: bank.razor_account,
          },
          id: `${id}`,
        })
          .then(() => {
            onRefetch();
            setIndex(0);
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      if (
        bank.bankAccountNumber === bank.bankReAccountNumber &&
        bank.bankIfscCode &&
        bank.bankAccountHolderName
      ) {
        fillBankEditForm({
          editPassbook: bank,
          id: `${id}`,
        })
          .then(() => {
            onRefetch();
            setIndex(0);
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        setDisabled((pre) => !pre);
        setNotificationState({
          msg:
            bank.bankAccountNumber !== bank.bankReAccountNumber
              ? t("form_account_dose_not_match_label")
              : "Check all the entered details carefully",
          run: true,
        });
      }
    }
  };

  const onChange = (e) => {
    setBank((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className={style.linkform}>
        <form onSubmit={handleSubmit}>
          {bank.razor_account && (
            <>
              <JoinFormInput
                labelText={t("merchant_secret_id")}
                name="razor_id"
                type={"text"}
                placeholder={t("please_enter_merchant_id_of_payment_gateway")}
                value={bank.razor_id}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
              />
              <JoinFormInput
                labelText={t("confirm_merchant_secret_id")}
                name="re_razor_id"
                type={"text"}
                placeholder={t("re-enter_merchant_id_of_payment_gateway")}
                value={bank.re_razor_id}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
                reAccount={
                  bank.razor_id_match
                    ? t("form_razor_id_dose_not_match_label")
                    : ""
                }
              />
              <JoinFormInput
                labelText={t("razorpay_key")}
                name="razor_key"
                type={"text"}
                placeholder={t("please_enter_razorpay_key")}
                value={bank.razor_key}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
              />
              <JoinFormInput
                labelText={t("confirm_razorpay_key")}
                name="re_razor_key"
                type={"text"}
                placeholder={t("re-enter_razorpay_key")}
                value={bank.re_razor_key}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
                reAccount={
                  bank.razor_key_match
                    ? t("form_razor_key_dose_not_match_label")
                    : ""
                }
              />
            </>
          )}
          {!bank.razor_account && (
            <>
              <div className={style.input}>
                <h6>{t("acnt_holder")}</h6>
                <input
                  type="text"
                  required
                  placeholder={t("enter_name")}
                  name="bankAccountHolderName"
                  value={bank.bankAccountHolderName}
                  onChange={(e) => {
                    setBank({ ...bank, bankAccountHolderName: e.target.value });
                  }}
                />
              </div>
              <div className={style.input}>
                <h6>{t("account_type")}</h6>
                <select
                  className={style.selectAccount}
                  name="bankAccountType"
                  value={bank.bankAccountType}
                  onChange={(e) => {
                    setBank({ ...bank, bankAccountType: e.target.value });
                  }}
                  required
                >
                  <option value={"Select Account Type"} disabled>
                    {t("select_account_type")}
                  </option>
                  <option value={"Saving"}>{t("saving")}</option>
                  <option value={"Current"}>{t("current")}</option>
                </select>
              </div>
              <div className={style.input}>
                <h6>{t("account_holder")}</h6>
                <input
                  type="number"
                  required
                  placeholder={t("enter_account_no")}
                  name="bankAccountNumber"
                  value={bank.bankAccountNumber}
                  onChange={(e) => {
                    setBank({ ...bank, bankAccountNumber: e.target.value });
                  }}
                />
              </div>
              <div className={style.input}>
                <h6>{t("confirm_account")}</h6>
                <input
                  type="number"
                  required
                  placeholder={t("please_confirm")}
                  name="bankReAccountNumber"
                  value={bank.bankReAccountNumber}
                  onChange={(e) => {
                    setBank({ ...bank, bankReAccountNumber: e.target.value });
                  }}
                />
              </div>
              <div className={style.input}>
                <h6>IFSC Code</h6>
                <input
                  type="text"
                  required
                  placeholder={t("enter_ifsc")}
                  pattern="[a-zA-Z0-9]+"
                  name="bankIfscCode"
                  value={bank.bankIfscCode}
                  onChange={(e) => {
                    setBank({ ...bank, bankIfscCode: e.target.value });
                  }}
                />
              </div>
            </>
          )}
          <div className={style.input}>
            <h6>{t("mobil_optional")}</h6>
            <input
              type="text"
              pattern="[789][0-9]{9}"
              placeholder={t("enter_mobile")}
              name="bankAccountPhoneNumber"
              title="Please enter valid phone number"
              value={bank.bankAccountPhoneNumber}
              onChange={(e) => {
                setBank({
                  ...bank,
                  bankAccountPhoneNumber: e.target.value,
                });
              }}
            />
          </div>

          <ButtonWithTypeSubmit
            customStyleButton={{ marginTop: "1vw" }}
            type="submit"
            disabled={disabled}
            buttonText={t("update")}
          />
        </form>
      </div>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default UpdateLinkedForm;
