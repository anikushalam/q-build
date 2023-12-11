import React from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";
import moment from "moment";

const PreviewAdmissionModerator = ({
  onCloseEdit,
  setActivePopup,
  selectedStaff,
  moderatorState,
  onSelectRole,
  onUpdateModerator,
  selectedApplication,
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
                "Fee receipt authority",
                "Application Manager",
                "Renewal Manager",
                "Deposit Moderator",
                "Pending Fee Manager",
                "Complaint Moderator",
                "Fee Structure Moderator",
                "Rules and Announcement Moderator",
                "Income and Expense Moderator",
                "Tab Authority",
                "Data Export Authority",
              ]}
              value={
                moderatorState?.mod_role === "ALL_FEE_ACCESS"
                  ? "Fee receipt authority"
                  : moderatorState?.mod_role === "MULTI_APP_ACCESS"
                  ? "Application Manager"
                  : moderatorState?.mod_role === "RENEWAL_UNIT_ACCESS"
                  ? "Renewal Manager"
                  : moderatorState?.mod_role === "DEPOSIT_ACCESS"
                  ? "Deposit Moderator"
                  : moderatorState?.mod_role === "COMPAINT_ACCESS"
                  ? "Complaint Moderator"
                  : moderatorState?.mod_role === "PENDING_FEE_ACCESS"
                  ? "Pending Fee Manager"
                  : moderatorState?.mod_role === "FEE_MASTER_ACCESS"
                  ? "Fee Structure Moderator"
                  : moderatorState?.mod_role === "RULES_AND_ANNOUNCEMENT_ACCESS"
                  ? "Rules and Announcement Moderator"
                  : moderatorState?.mod_role === "INCOME_AND_EXPENSE_ACCESS"
                  ? "Income and Expense Moderator"
                  : moderatorState?.mod_role === "ONE_TAB_ACCESS"
                  ? "Tab Authority"
                  : moderatorState?.mod_role === "DATA_EXPORT_ACCESS"
                  ? "Data Export Authority"
                  : ""
              }
              onClick={onSelectRole}
            />
            {selectedApplication?.map((app) => (
              <div
                className={style.application_card}
                key={app?._id}
                style={{
                  width: "100%",
                  margin: "1rem 0 0",
                }}
              >
                <img
                  src="/images/admision-application-icon.svg"
                  alt="application icon"
                />
                <section className={style.application_card_text}>
                  <h6>{app?.applicationName ?? ""}</h6>
                  <div className={style.application_card_text_bottom}>
                    <p>{app?.applicationDepartment?.dName ?? ""}</p>
                    {app?.applicationEndDate ? (
                      <p>
                        {moment(app?.applicationEndDate).format("DD/MM/yyyy")}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </section>
              </div>
            ))}
            {moderatorState?.mod_role === "MULTI_APP_ACCESS" && (
              <button
                className={style.select_application_btn}
                onClick={() => setActivePopup("SELECT_APPLICATION")}
              >
                <div>{t("moderator_select_application")}</div>
                <img src="/images/forward-right-icon.svg" alt="next step" />
              </button>
            )}
            <button className={style.assign_btn} onClick={onUpdateModerator}>
              {t("update")}{" "}
            </button>
          </section>
        </div>
      </PopupWrapper>
    </>
  );
};

export default PreviewAdmissionModerator;
