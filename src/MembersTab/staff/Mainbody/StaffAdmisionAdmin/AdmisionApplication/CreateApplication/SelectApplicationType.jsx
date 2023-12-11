import React from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const SelectApplicationType = ({ onClose, setSelectedApplicationType }) => {
  const { t } = useTranslation();

  const onSelect = (val) => {
    setSelectedApplicationType(val);
  };
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img src="/images/arrow-left-fees-icon.svg" onClick={onClose} alt="" />
        <h6>{t("select_admission_application_type")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div
        className={style.application_card}
        onClick={() => onSelect("Direct_Admission")}
      >
        <div className={style.application_card_title}>
          <img
            src="/images/fees-category-icon.svg"
            alt="staff profile avatar"
          />
          <h6>{t("direct_admission")}</h6>
        </div>
        <section className={style.application_card_info}>
          <div>{t("only_two_steps")}</div>
          <div>
            {`1. `}
            {t("online_filling_form")}
          </div>
          <div>
            {`2. `}
            {t("online_admission_fees_payments")}
          </div>
          <h6>{t("online_note_suitable")}</h6>
        </section>
      </div>
      <div
        className={style.application_card}
        onClick={() => onSelect("Complete_Step_Wise_Admission")}
      >
        <div className={style.application_card_title}>
          <img
            src="/images/fees-category-icon.svg"
            alt="staff profile avatar"
          />
          <h6>{t("complete_step_wise_admission")}</h6>
        </div>
        <section className={style.application_card_info}>
          <div>{t("steps_involved")}</div>
          <div>
            {`1. `}
            {t("online_filling_form1")}
          </div>
          <div>
            {`2. `}
            {t("online_admission_fees_payments1")}
          </div>
          <div>
            {`3. `}
            {t("online_admission_fees_payments2")}
          </div>
          <div>
            {`4. `}
            {t("online_admission_fees_payments3")}
          </div>
          <div>
            {`5. `}
            {t("online_admission_fees_payments4")}
          </div>
          <h6>{t("offile_note_suitable")}</h6>
        </section>
      </div>
    </div>
  );
};

export default SelectApplicationType;
