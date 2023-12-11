import React from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../FeesStructure/PopupWrapper";
import style from "./FinanceModerator.module.css";

const PreviewFinanceModerator = ({
  onCloseEdit,
  setActivePopup,
  selectedStaff,
  moderatorState,
  onSelectRole,
  onUpdateModerator,
}) => {
  const { t } = useTranslation();
  // console.info("this is preview", moderatorState);
  return (
    <>
      <PopupWrapper onClose={onCloseEdit}>
        <div className={style.assign_role_container}>
          <section className={style.assign_role_title}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onCloseEdit}
              alt="back icon"
              style={{
                cursor: "pointer",
              }}
            />

            <h6>{t("update_role_to_moderator")}</h6>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />

          <section
            className={style.selected_staff_container}
            onClick={() => setActivePopup("OPEN_STAFF_LIST")}
          >
            <img
              src={
                selectedStaff?.staffProfilePhoto
                  ? `${imageShowUrl}/${selectedStaff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff profile avatar"
            />
            <div className={style.selected_staff_text}>
              <h6>
                {`${selectedStaff?.staffFirstName} ${
                  selectedStaff?.staffMiddleName ?? ""
                } ${selectedStaff?.staffLastName}`}
              </h6>
              <p>
                {t("index_number")}
                {selectedStaff?.staffROLLNO}
              </p>
            </div>
          </section>

          <section
            style={{
              padding: "0.8rem",
            }}
          >
            <CustomNormalSelectInput
              selectLabel={t("select_role_of_moderator")}
              selectedValue={t("please_select_role")}
              options={[
                "Cash Receipt Section",
                "Inventories Section",
                "Fees Master Section",
                "Payroll Section",
                "Deposit Section",
                "Bank Account Section",
                "Data Export Authority",
              ]}
              value={
                moderatorState?.mod_role === "CASH_RECEIPT_ACCESS"
                  ? "Cash Receipt Section"
                  : moderatorState?.mod_role === "INVENTORY_ACCESS"
                  ? "Inventories Section"
                  : moderatorState?.mod_role === "FEE_MASTER_ACCESS"
                  ? "Fees Master Section"
                  : moderatorState?.mod_role === "PAYROLL_ACCESS"
                  ? "Payroll Section"
                  : moderatorState?.mod_role === "DEPOSIT_ACCESS"
                  ? "Deposit Section"
                  : moderatorState?.mod_role === "BANK_ACCOUNT_ACCESS"
                  ? "Bank Account Section"
                  : moderatorState?.mod_role === "DATA_EXPORT_ACCESS"
                  ? "Data Export Authority"
                  : ""
              }
              onClick={onSelectRole}
            />

            <button className={style.assign_btn} onClick={onUpdateModerator}>
              {t("update")}{" "}
            </button>
          </section>
        </div>
      </PopupWrapper>
    </>
  );
};

export default PreviewFinanceModerator;
