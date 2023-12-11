import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import { useAddModeratorByFinance } from "../../../../../hooks/member_tab/finance-api";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../FeesStructure/PopupWrapper";
import style from "./FinanceModerator.module.css";
import PreviewFinanceModerator from "./PreviewFinanceModerator";

const AddFinanceModerator = ({
  instituteId,
  fid,
  onClose,
  onRefetchWhenAdd,
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
  const [addModeratorByFinance] = useAddModeratorByFinance();

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

  const onBackWithArrowLeft = () => {
    setActivePopup("OPEN_STAFF_LIST");
  };
  // console.info("this is staff sleected", selectedStaff);

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
          : "",
    }));
  };

  const onAssignModerator = () => {
    setActivePopup("LOADING");
    addModeratorByFinance({
      fid: fid,
      addModerator: moderatorState,
    })
      .then(() => {
        onRefetchWhenAdd();
        setActivePopup("");
        onClose();
      })
      .catch({});
  };

  const onUpdateModerator = () => {
    onEdit(moderatorState);
    onClose();
  };
  const onCloseEdit = () => {
    onClose();
  };
  return (
    <>
      {activePopup === "OPEN_STAFF_LIST" && (
        <AssignStaffModal
          assignHead={activePopup === "OPEN_STAFF_LIST" ? true : false}
          headSelect={onSelectStaff}
          title={t("staff_list")}
          onClose={onClose}
          instituteId={instituteId}
          viewAs="ADMISSION_ADMIN"
        />
      )}
      {activePopup === "ASSIGN_ROLE" && (
        <>
          <PopupWrapper onClose={onBackWithArrowLeft}>
            <div className={style.assign_role_container}>
              <section className={style.assign_role_title}>
                <img
                  src="/images/arrow-left-fees-icon.svg"
                  onClick={onBackWithArrowLeft}
                  alt="back icon"
                  style={{
                    cursor: "pointer",
                  }}
                />

                <h6>{t("assign_role_to_moderator")}</h6>
              </section>
              <BorderBottom
                customStyle={{
                  width: "100%",
                }}
              />

              <section className={style.selected_staff_container}>
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
                <button
                  className={style.assign_btn}
                  onClick={onAssignModerator}
                >
                  {t("assign")}{" "}
                </button>
              </section>
            </div>
          </PopupWrapper>
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
      {activePopup === "LOADING" && <QLoader />}
    </>
  );
};

export default AddFinanceModerator;
