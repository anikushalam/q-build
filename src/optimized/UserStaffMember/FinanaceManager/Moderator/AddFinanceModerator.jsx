import { useEffect, useState } from "react";
import style from "./FinanceModerator.module.css";
import PreviewFinanceModerator from "./PreviewFinanceModerator";
import { useTranslation } from "react-i18next";
import { useFinanceAddModerator } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import CustomSelect from "../../../Ui/Select/CustomSelect";
import InstituteStaff from "../../../UserStaffMember/InstituteStaff/InstituteStaff";

const AddFinanceModerator = ({
  instituteId,
  fid,
  onClose,
  // onRefetchWhenAdd,
  openModeratorMenu,
  openAs,
  onEdit,
}) => {
  const { t } = useTranslation();
  const [activePopup, setActivePopup] = useState(
    openAs === "EDIT" ? "PREVIEW_FORM" : "OPEN_STAFF_LIST"
  );
  const [selectedStaff, setSelectedStaff] = useState(
    openAs === "EDIT" ? openModeratorMenu?.access_staff : ""
  );
  const [moderatorState, setModeratorState] = useState({
    mod_role: openAs === "EDIT" ? openModeratorMenu?.access_role : "",
    sid: openAs === "EDIT" ? openModeratorMenu?.access_staff?._id : "",
  });
  const [financeAddModerator] = useFinanceAddModerator();

  useEffect(() => {
    if (openAs === "EDIT") {
      setSelectedStaff(openModeratorMenu?.access_staff);
      setModeratorState({
        mod_role: openModeratorMenu?.access_role,
        sid: openModeratorMenu?.access_staff?._id,
      });
      setActivePopup("PREVIEW_FORM");
    }
  }, [openAs]);
  const onSelectStaff = (staff) => {
    setSelectedStaff(staff);
    setModeratorState((prev) => ({
      ...prev,
      sid: staff?._id,
    }));
    if (openAs === "EDIT") {
      setActivePopup("PREVIEW_FORM");
    } else {
      setActivePopup("ASSIGN_ROLE");
    }
  };

  // console.info("access_role", openModeratorMenu);

  const onSelectRole = (val) => {
    setModeratorState((prev) => ({
      ...prev,
      mod_role:
        val === "Cash Receipt Section"
          ? "CASH_RECEIPT_ACCESS"
          : val === "Inventories Section"
          ? "INVENTORY_ACCESS"
          : val === "Fees Master Section"
          ? "FEE_MASTER_ACCESS"
          : val === "Payroll Section"
          ? "PAYROLL_ACCESS"
          : val === "Deposit Section"
          ? "DEPOSIT_ACCESS"
          : val === "Bank Account Section"
          ? "BANK_ACCOUNT_ACCESS"
          : val === "Data Export Authority"
          ? "DATA_EXPORT_ACCESS"
          : val === "Scholarship Administrator"
          ? "DATA_EXPORT_ACCESS"
          : "",
    }));
  };

  const onAssignModerator = () => {
    setActivePopup("LOADING");
    financeAddModerator({
      fid: fid,
      addModerator: moderatorState,
    })
      .then(() => {
        // onRefetchWhenAdd();
        setActivePopup("");
        onClose();
      })
      .catch({});
  };

  const onUpdateModerator = () => {
    onEdit(moderatorState);
  };
  const onCloseEdit = () => {
    onClose();
  };
  return (
    <>
      {activePopup === "OPEN_STAFF_LIST" && (
        <InstituteStaff
          onSelectStaff={onSelectStaff}
          onClose={onClose}
          instituteId={instituteId}
        />
      )}
      {activePopup === "ASSIGN_ROLE" && (
        <>
          <Modal onClose={onClose}>
            <div className={style.modal_container}>
              <UserMemberContentWrapper>
                <div className={style.modal_container_header}>
                  <h6>{t("assign_role_to_moderator")}</h6>
                </div>
              </UserMemberContentWrapper>
              <BorderBottom />
              <UserMemberContentWrapper
                customStyle={{
                  paddingTop: "0",
                }}
              >
                <section className={style.selected_staff_container}>
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
                      {t("index_no")}
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
                <CreateButton label="assign" onAction={onAssignModerator} />
              </UserMemberContentWrapper>
              {activePopup === "LOADING" && <QvipleLoader />}
            </div>
          </Modal>
        </>
      )}
      {activePopup === "PREVIEW_FORM" && (
        <PreviewFinanceModerator
          onCloseEdit={onCloseEdit}
          setActivePopup={setActivePopup}
          selectedStaff={selectedStaff}
          moderatorState={moderatorState}
          onSelectRole={onSelectRole}
          onUpdateModerator={onUpdateModerator}
        />
      )}
      {activePopup === "LOADING" && <QvipleLoader />}
    </>
  );
};

export default AddFinanceModerator;
