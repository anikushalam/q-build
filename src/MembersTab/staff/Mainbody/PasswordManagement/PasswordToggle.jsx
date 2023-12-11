import React, { useState } from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { usePasswordProtectionToggle } from "../../../../hooks/member_tab/admission-api";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../Loader/QLoader";

const PasswordToggle = ({ onClose, enableLock, faid, onRefetch, openAs }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [passwordProtectionToggle] = usePasswordProtectionToggle();

  const onToggle = () => {
    setDisabled((pre) => !pre);
    passwordProtectionToggle({
      faid: faid,
      flow: openAs,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.promote_container}
        style={{
          minHeight: "11rem",
          minWidth: "23rem",
          overflow: "hidden",
        }}
      >
        <h6
          style={{
            textAlign: "center",
          }}
        >
          {t(
            enableLock
              ? "disabled_password_protection"
              : "enabled_password_protection"
          )}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <button
          className={style.select_application_btn}
          onClick={onToggle}
          style={{
            width: "100%",
            marginTop: "3rem",
            justifyContent: "center",
          }}
          title="Confirm"
        >
          {t("confirm")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default PasswordToggle;
