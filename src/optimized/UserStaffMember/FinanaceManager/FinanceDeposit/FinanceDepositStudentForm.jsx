import QvipleLoader from "../../../Loader/QvipleLoader";
import FormInput from "../../../Ui/Input/FormInput";
import Modal from "../../../Ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import style from "./FinanceDeposit.module.css";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import TileWrapper from "../../../Ui/Tab/Tile/TileWrapper";
import TileCard from "../../../Ui/Tab/Tile/TileCard";
import { transactionMode } from "../../../Constant/Transaction/transaction_constant";
import { useState } from "react";
import { useFinanceMarkRefundDeposit } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import {
  existingRequiredField,
  requiredField,
} from "../../../Validation/functions/checkingRequiredField";
const FinanceDepositStudentForm = ({
  onClose,
  fmid,
  refundForm,
  onCloseParent,
}) => {
  const { t } = useTranslation();
  const [paymentForm, setPaymentForm] = useState({
    amount: "",
    mode: "",
    fee_payment_mode: "By Bank",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");

  const [financeMarkRefundDeposit] = useFinanceMarkRefundDeposit();
  const onAmountChange = (e) => {
    setPaymentForm((prev) => ({
      ...prev,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };

  const onTile = (val) => {
    setPaymentForm((prev) => ({
      ...prev,
      mode: val === "By Bank" ? "Online" : "Offline",
      fee_payment_mode: val,
    }));
  };

  const onConfirmRefund = () => {
    if (fmid) {
      let validation = requiredField(paymentForm, [
        "amount",
        "mode",
        "transaction_date",
        "fee_bank_name",
        "fee_bank_holder",
        "fee_utr_reference",
      ]);
      if (existingRequiredField(validation)) {
        setDisabled((pre) => !pre);
        financeMarkRefundDeposit({
          fmid: fmid,
          sid: refundForm?._id,
          refundDeposit: paymentForm,
        })
          .then(() => {
            onCloseParent();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        setErrorField(validation);
      }
    }
  };

  return (
    <>
      <Modal onClose={onClose}>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_header}>
              <img
                src={`${assestsUserFinanceUrl}/back-arrow.svg`}
                onClick={onClose}
                title="Go Back"
                style={{
                  cursor: "pointer",
                }}
              />
              <h6>{t("refund_deposit")}</h6>
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper
            customStyle={{
              paddingTop: "0",
            }}
          >
            <div
              className={style.unused_container_text_inner}
              style={{
                marginTop: "0.6rem",
              }}
            >
              <h6>{t("pending_deposit")}</h6>
              <h6>
                {t("rs_only")} {refundForm?.deposit_pending_amount ?? 0}
              </h6>
            </div>
            <TileWrapper
              label="payment_type_mode"
              customTileContainer={{
                marginBottom: "1rem",
              }}
            >
              {transactionMode?.map((tile) => (
                <TileCard
                  key={tile?.key}
                  tile={tile}
                  onTile={onTile}
                  activeTile={paymentForm.fee_payment_mode}
                />
              ))}
            </TileWrapper>
            <FormInput
              label={t("amount")}
              name={"fee_payment_amount"}
              type={"tel"}
              value={paymentForm?.fee_payment_amount}
              onChange={onAmountChange}
              placeholder={t("please_enter_amount_paid")}
              errorShow={errorField["fee_payment_amount"]}
            />
            <CreateButton label="confirm" onAction={onConfirmRefund} />
          </UserMemberContentWrapper>
          {disabled && <QvipleLoader />}
        </div>
      </Modal>
    </>
  );
};

export default FinanceDepositStudentForm;
