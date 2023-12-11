import React from "react";
import style from "../../../../../MembersTab/staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import styleParent from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../Loader/QLoader";
const AdmissionFeesCollectType = ({
  setState,
  state,
  onActionType,
  onClose,
  disabled,
  installment,
}) => {
  const { t } = useTranslation();

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("collect_fees")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <div
          className={
            state === "SETOFF"
              ? `${style.application_card} ${style.application_card_active}`
              : style.application_card
          }
          onClick={() => setState("SETOFF")}
        >
          <div className={style.application_card_title}>
            <img
              src="/images/fees-category-icon.svg"
              alt="staff profile avatar"
            />
            <h6>{t("set_off_excess_fees")}</h6>
          </div>
          <section className={style.application_card_info}>
            <div>
              {t("applicable_pending_fees")}{" "}
              {`: ${t("rs")}. ${installment?.cardShowApplicable}`}
            </div>
            <div>
              {t("excess_fees")}{" "}
              {`: ${t("rs")}. ${installment?.setOffPrice ?? 0}`}
            </div>
            <div>
              {t("set_off_fees")}{" "}
              {`: ${t("rs")}. ${installment?.setOffPrice ?? 0}`}
            </div>
            <h6>{t("set_off_excess_fees_note")}</h6>
          </section>
        </div>
        <div
          className={
            state === "COLLECT"
              ? `${style.application_card} ${style.application_card_active}`
              : style.application_card
          }
          onClick={() => setState("COLLECT")}
          style={{
            minHeight: "100px",
          }}
        >
          <div className={style.application_card_title}>
            <img
              src="/images/fees-category-icon.svg"
              alt="staff profile avatar"
            />
            <h6>{t("collect_fees")}</h6>
          </div>
          <section className={style.application_card_info}>
            <h6>{t("collect_fees_note")}</h6>
          </section>
        </div>
        <button
          className={styleParent.create_fees_structure_btn}
          title="Edit Fees"
          onClick={onActionType}
          style={{ justifyContent: "center" }}
        >
          {t("confirm")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AdmissionFeesCollectType;
