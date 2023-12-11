import React from "react";
import style from "../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import styleParent from "./FeesStructure.module.css";

const EditFeeStructureType = ({ setState, state, onActionType }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={
          state === "RETRO"
            ? `${style.application_card} ${style.application_card_active}`
            : style.application_card
        }
        onClick={() => setState("RETRO")}
      >
        <div className={style.application_card_title}>
          <img
            src="/images/fees-category-icon.svg"
            alt="staff profile avatar"
          />
          <h6>{t("retrospective_edit")}</h6>
        </div>
        <section className={style.application_card_info}>
          <div>{t("retrospective_edit_descrtiption")}</div>
          <h6>{t("retrospective_edit_note")}</h6>
        </section>
      </div>
      <div
        className={
          state === "PROSP"
            ? `${style.application_card} ${style.application_card_active}`
            : style.application_card
        }
        onClick={() => setState("PROSP")}
      >
        <div className={style.application_card_title}>
          <img
            src="/images/fees-category-icon.svg"
            alt="staff profile avatar"
          />
          <h6>{t("prospective_edit")}</h6>
        </div>
        <section className={style.application_card_info}>
          <div>{t("prospective_edit_description")}</div>
          <h6>{t("prospective_edit_note")}</h6>
        </section>
      </div>
      <button
        className={styleParent.create_fees_structure_btn}
        title="Edit Fees"
        onClick={onActionType}
        style={{ justifyContent: "center" }}
      >
        {t("update_fees_structure")}
      </button>
    </>
  );
};

export default EditFeeStructureType;
