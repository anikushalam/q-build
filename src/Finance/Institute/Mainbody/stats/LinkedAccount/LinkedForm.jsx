import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./LinkedAccount.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { Notfication } from "../../../../../validation/Snackbar";
import ButtonWithTypeSubmit from "../../../../../Custom/Button/ButtonWithTypeSubmit";
import { useFillBankForm } from "../../../../../hooks/institute/institute-finance-api";
import JoinFormToggle from "../../../../../JoiningForm/Student/Form/JoinFormToggle";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LinkedForm = ({ onRefetch, setIndex }) => {
  const { t } = useTranslation();
  const [bank, setBank] = useState({
    bankAccountHolderName: "",
    bankAccountNumber: "",
    bankReAccountNumber: "",
    bankIfscCode: "",
    bankAccountPhoneNumber: "",
    GSTInfo: "",
    businessName: "",
    businessAddress: "",
    bankAccountType: "",
    gstSlab: "",
    razor_account: false,
  });
  const [razor, setRazor] = useState({
    razor_key: "",
    razor_id: "",
    re_razor_key: "",
    re_razor_id: "",
    razor_key_match: false,
    razor_id_match: false,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [gst, setGst] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState(true);
  const id = useSelector((state) => state.idChange.id);

  const [fillBankForm] = useFillBankForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    if (paymentGateway) {
      if (
        razor.razor_key !== razor.re_razor_key ||
        razor.razor_id !== razor.re_razor_id
      ) {
        setRazor((pre) => ({
          ...pre,
          razor_key_match:
            razor.razor_key !== razor.re_razor_key ? true : false,
          razor_id_match: razor.razor_id !== razor.re_razor_id ? true : false,
        }));
        setDisabled((pre) => !pre);
      } else {
        fillBankForm({
          passbook: {
            razor_key: razor.razor_key,
            razor_id: razor.razor_id,
            bankAccountPhoneNumber: bank.bankAccountPhoneNumber,
            razor_account: true,
          },
          id: `${id}`,
        })
          .then((res) => {
            if (res.data.status) {
              onRefetch();
              setIndex(0);
              setDisabled((pre) => !pre);
            }
          })
          .catch({});
      }
    } else {
      if (
        bank.bankAccountNumber === bank.bankReAccountNumber &&
        bank.bankIfscCode &&
        bank.bankAccountHolderName
      ) {
        fillBankForm({
          passbook: bank,
          id: `${id}`,
        })
          .then((res) => {
            if (res.data.status) {
              onRefetch();
              setIndex(0);
              setDisabled((pre) => !pre);
            }
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

  const onPaymentGatewayChange = (val) => {
    setPaymentGateway(val.target.value);
  };
  const onChange = (e) => {
    setRazor((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className={style.linkform}>
        <form onSubmit={handleSubmit}>
          <JoinFormToggle
            labelText={t("do_you_have_razor_pay_gateway")}
            name="razorpay"
            onChange={onPaymentGatewayChange}
            value={paymentGateway}
            customStyleLabel={{ fontWeight: "600" }}
          />

          {paymentGateway && (
            <>
              <JoinFormInput
                labelText={t("merchant_secret_id")}
                name="razor_id"
                type={"text"}
                placeholder={t("please_enter_merchant_id_of_payment_gateway")}
                value={razor.razor_id}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
              />
              <JoinFormInput
                labelText={t("confirm_merchant_secret_id")}
                name="re_razor_id"
                type={"text"}
                placeholder={t("re-enter_merchant_id_of_payment_gateway")}
                value={razor.re_razor_id}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
                reAccount={
                  razor.razor_id_match
                    ? t("form_razor_id_dose_not_match_label")
                    : ""
                }
              />
              <JoinFormInput
                labelText={t("razorpay_key")}
                name="razor_key"
                type={"text"}
                placeholder={t("please_enter_razorpay_key")}
                value={razor.razor_key}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
              />
              <JoinFormInput
                labelText={t("confirm_razorpay_key")}
                name="re_razor_key"
                type={"text"}
                placeholder={t("re-enter_razorpay_key")}
                value={razor.re_razor_key}
                onChange={onChange}
                customStyleLabel={{ fontWeight: "600" }}
                reAccount={
                  razor.razor_key_match
                    ? t("form_razor_key_dose_not_match_label")
                    : ""
                }
              />
            </>
          )}
          {!paymentGateway && (
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
          {!paymentGateway && (
            <>
              <div className={style.gstcheck}>
                <h6>{t("add_gst")}</h6>
                <div className={style.checkbox}>
                  <Checkbox onClick={() => setGst(!gst)} {...label} />
                </div>
              </div>
              {gst && (
                <div>
                  <div className={style.input}>
                    <h6>{t("gst")}</h6>
                    <input
                      type="text"
                      name="GSTInfo"
                      required
                      pattern="[a-zA-Z0-9]+"
                      placeholder={t("enter_gst")}
                      value={bank.GSTInfo}
                      onChange={(e) => {
                        setBank({ ...bank, GSTInfo: e.target.value });
                      }}
                    />
                  </div>
                  <div className={style.input}>
                    <h6>{t("gst_slab")}</h6>
                    <input
                      type="number"
                      name="gstSlab"
                      required
                      min={"0"}
                      max={"18"}
                      placeholder={t("enter_gst_slab")}
                      value={bank.gstSlab}
                      onChange={(e) => {
                        setBank({ ...bank, gstSlab: e.target.value });
                      }}
                    />
                  </div>
                  <div className={style.input}>
                    <h6>{t("business_name")}</h6>
                    <input
                      type="text"
                      name="businessName"
                      required
                      placeholder={t("enter_business_name")}
                      value={bank.businessName}
                      onChange={(e) => {
                        setBank({ ...bank, businessName: e.target.value });
                      }}
                    />
                  </div>
                  <div className={style.input}>
                    <h6>{t("business_add")}</h6>
                    <input
                      type="text"
                      name="businessAddress"
                      required
                      placeholder={t("enter_business_add")}
                      value={bank.businessAddress}
                      onChange={(e) => {
                        setBank({ ...bank, businessAddress: e.target.value });
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <ButtonWithTypeSubmit
            customStyleButton={{ marginTop: "1vw" }}
            type="submit"
            disabled={disabled}
            buttonText={t("linked_account")}
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

export default LinkedForm;
