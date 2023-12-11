import { useTranslation } from "react-i18next";
import style from "./FinanceModerator.module.css";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import CustomSelect from "../../../Ui/Select/CustomSelect";
import CreateButton from "../../../Ui/Button/CreateButton";

const PreviewFinanceModerator = ({
  onCloseEdit,
  setActivePopup,
  selectedStaff,
  moderatorState,
  onSelectRole,
  onUpdateModerator,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal onClose={onCloseEdit}>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_header}>
              <h6>{t("update_role_to_moderator")}</h6>
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper
            customStyle={{
              paddingTop: "0",
            }}
          >
            <section
              className={style.selected_staff_container}
              onClick={() => setActivePopup("OPEN_STAFF_LIST")}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src={
                  selectedStaff?.staffProfilePhoto
                    ? `${imageShowUrl}/${selectedStaff?.staffProfilePhoto}`
                    : `${assestsFeedUrl}/feed-user-avatar.svg`
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
                  {t("index_number")} {" : "}
                  {selectedStaff?.staffROLLNO}
                </p>
              </div>
            </section>
            <CustomSelect
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
                "Scholarship Administrator",
              ]}
              defalutValue={
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
                  : moderatorState?.mod_role === "DATA_EXPORT_ACCESS"
                  ? "Scholarship Administrator"
                  : ""
              }
              onClick={onSelectRole}
            />
            <CreateButton label="update" onAction={onUpdateModerator} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
    </>
  );
};

export default PreviewFinanceModerator;
