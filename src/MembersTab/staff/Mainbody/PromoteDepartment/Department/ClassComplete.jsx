import React, { useState } from "react";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import {
  useClassComplete,
  useClassUnComplete,
} from "../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../Loader/QLoader";

const ClassComplete = ({ onClose, lockClass, setClassIconStatus }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [classComplete] = useClassComplete();
  const [classUnComplete] = useClassUnComplete();

  const onCompleteClass = () => {
    setDisabled((pre) => !pre);
    if (lockClass.lock === "UNLOCK") {
      classComplete({
        cid: lockClass.cid,
        status: { classStatus: "Completed" },
      })
        .then(() => {
          setClassIconStatus("Completed");
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    } else {
      classUnComplete({
        cid: lockClass.cid,
      })
        .then(() => {
          setClassIconStatus("UnCompleted");
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
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
            lockClass.lock === "UNLOCK"
              ? "lock_this_class"
              : "unlock_this_class"
          )}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <button
          className={style.select_application_btn}
          onClick={onCompleteClass}
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

export default ClassComplete;
