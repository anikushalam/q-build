import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ButtonWithAction from "../../../../../Custom/Button/ButtonWithAction";
import { useFillBankRemoveForm } from "../../../../../hooks/institute/institute-finance-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalWrapper from "../../../../../Search/SearchModalWrapper";
import style from "./FinanceBankMenu.module.css";
const FinanceBankMenu = ({ onClose, onRefetch, setIndex, onOpenEdit }) => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const [removeAccount, setRemoveAccount] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [fillBankRemoveForm] = useFillBankRemoveForm();
  const onUpdateInput = (e) => {
    setError(false);
    setConfirmText(e.target.value);
  };

  const onRemoveBanckDetails = () => {
    setDisabled((pre) => !pre);
    fillBankRemoveForm(id)
      .then(() => {
        // console.info("this os form", res);
        setIndex(0);
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  const onAction = () => {
    if (confirmText === "Confirm") {
      onRemoveBanckDetails();
    } else {
      setError(true);
    }
  };
  return (
    <>
      <SearchModalWrapper
        onClose={onClose}
        customStyleBackdrop={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Overlay>
        <div className={style.edit_container}>
          {!removeAccount && (
            <>
              <h6 onClick={onOpenEdit}>{t("finance_edit")}</h6>
              <h6 onClick={() => setRemoveAccount((pre) => !pre)}>
                {t("remove_account")}
              </h6>
            </>
          )}

          {removeAccount && (
            <>
              <JoinFormInput
                labelText={t("type_confirm_to_continue")}
                placeholder={"type here 'Confirm'"}
                name={"confirm"}
                value={confirmText}
                type={"text"}
                onChange={onUpdateInput}
                reAccount={error ? t("please_check_typo_issue") : ""}
              />
              <ButtonWithAction
                disabled={disabled}
                buttonText={t("confirm")}
                onAction={onAction}
                customStyleButton={{ marginTop: "1rem" }}
              />
            </>
          )}
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default FinanceBankMenu;
