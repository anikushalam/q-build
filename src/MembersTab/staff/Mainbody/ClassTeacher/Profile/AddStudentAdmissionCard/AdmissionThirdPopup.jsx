import React from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../../Loader/QLoader";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
const AdmissionThirdPopup = ({ onClose, disabled, onAddAdmissionFees }) => {
  const { t } = useTranslation();
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          height: "fit-content",
        }}
      >
        <section
          className={style.fee_middle_section_container}
          style={{ marginBottom: "1.2rem" }}
        >
          <h6
            style={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {t("confirm_to_add_admission_fees")}
          </h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.7rem",
            }}
          />

          {/* {actionStep !== "CONFIRM_QUERY" && (
        <JoinFormInput
          labelText={t("type_confirm_to_continue")}
          placeholder={t("type_confirm_to_continue")}
          name={"verification"}
          value={verify}
          type={"text"}
          onChange={(e) => setVerify(e.target.value)}
          errorShow={filled}
        />
      )} */}
          <button
            onClick={onAddAdmissionFees}
            className={style.fee_middle_confirm_button}
            style={{
              marginTop: "4rem",
            }}
          >
            {t("confirm")}
          </button>
        </section>

        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AdmissionThirdPopup;
