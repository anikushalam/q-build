import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";
import ModeratorPreview from "./ModeratorPreview";
import PreviewAdmissionModerator from "./PreviewAdmissionModerator";
import SelectApplication from "./SelectApplication";
import { useAddModeratorByHostel } from "../../../../../hooks/member_tab/hostel-api";

const AddModerator = ({
  instituteId,
  hid,
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
    app_array: [],
    one_tab: "",
  });
  const [selectedApplication, setSelectedApplication] = useState(
    openAs === "EDIT" ? openModeratorMenu?.access_application : []
  );

  const [selectedApplicationId, setSelectedApplicationId] = useState([]);
  const [addModeratorByHostel] = useAddModeratorByHostel();

  useEffect(() => {
    if (openAs === "EDIT") {
      setSelectedStaff(openModeratorMenu?.access_staff);
      setSelectedApplication(openModeratorMenu?.access_application);
      let ids = [];
      for (let val of openModeratorMenu?.access_application) {
        ids.push(val?._id);
      }
      setSelectedApplicationId(ids);
      setModeratorState({
        mod_role: openModeratorMenu?.access_role,
        sid: openModeratorMenu?.access_staff?._id,
        app_array: ids,
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
        val === "Fee receipt authority"
          ? "ALL_FEE_ACCESS"
          : val === "Application Manager"
          ? "MULTI_APP_ACCESS"
          : val === "Renewal Manager"
          ? "RENEWAL_UNIT_ACCESS"
          : val === "Deposit Moderator"
          ? "DEPOSIT_ACCESS"
          : val === "Pending Fee Manager"
          ? "PENDING_FEE_ACCESS"
          : val === "Complaint Moderator"
          ? "COMPAINT_ACCESS"
          : val === "Fee Structure Moderator"
          ? "FEE_MASTER_ACCESS"
          : val === "Rules and Announcement Moderator"
          ? "RULES_AND_ANNOUNCEMENT_ACCESS"
          : val === "Income and Expense Moderator"
          ? "INCOME_AND_EXPENSE_ACCESS"
          : val === "Tab Authority"
          ? "ONE_TAB_ACCESS"
          : val === "Data Export Authority"
          ? "DATA_EXPORT_ACCESS"
          : "",
    }));
  };

  const onSelectTab = (val) => {
    setModeratorState((prev) => ({
      ...prev,
      one_tab: val,
    }));
  };
  const onAssignModerator = () => {
    setActivePopup("LOADING");
    addModeratorByHostel({
      hid: hid,
      active_tab: moderatorState.one_tab,
      addModerator:
        moderatorState?.mod_role === "MULTI_APP_ACCESS" ||
        moderatorState?.mod_role === "ONE_TAB_ACCESS"
          ? {
              mod_role: moderatorState.mod_role,
              sid: moderatorState.sid,
              app_array: selectedApplicationId,
            }
          : moderatorState,
    })
      .then(() => {
        onRefetchWhenAdd();
        setActivePopup("");
        onClose();
      })
      .catch({});
  };

  const onUpdateModerator = () => {
    onEdit(moderatorState, selectedApplicationId);
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
                      : moderatorState?.mod_role ===
                        "RULES_AND_ANNOUNCEMENT_ACCESS"
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
                {moderatorState.mod_role === "ONE_TAB_ACCESS" && (
                  <CustomNormalSelectInput
                    selectLabel={t("select_tab_role")}
                    selectedValue={t("please_select_role")}
                    options={[
                      "Application",
                      "Selected",
                      "Confirmed",
                      "Allotted",
                      "Cancelled",
                    ]}
                    value={moderatorState?.one_tab}
                    onClick={onSelectTab}
                  />
                )}
                {/* {moderatorState.mod_role === "ONE_TAB_ACCESS" &&
                  selectedApplication?.map((app) => (
                    <div className={style.application_card} key={app?._id}>
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
                              {moment(app?.applicationEndDate).format(
                                "DD/MM/yyyy"
                              )}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </section>
                    </div>
                  ))} */}
                {moderatorState.mod_role === "MULTI_APP_ACCESS" ? (
                  <button
                    className={style.select_application_btn}
                    onClick={() => setActivePopup("SELECT_APPLICATION")}
                  >
                    <div>{t("moderator_select_application")}</div>
                    <img src="/images/forward-right-icon.svg" alt="next step" />
                  </button>
                ) : (
                  <button
                    className={style.assign_btn}
                    onClick={onAssignModerator}
                  >
                    {t("assign")}{" "}
                  </button>
                )}
                {/* {moderatorState.mod_role === "ONE_TAB_ACCESS" &&
                selectedApplication?.length ? (
                  <button
                    className={style.assign_btn}
                    onClick={onAssignModerator}
                  >
                    {t("assign")}{" "}
                  </button>
                ) : (
                  ""
                )} */}
              </section>
            </div>
          </PopupWrapper>
        </>
      )}
      {activePopup === "SELECT_APPLICATION" && (
        <SelectApplication
          hid={hid}
          setActivePopup={setActivePopup}
          setSelectedApplication={setSelectedApplication}
          selectedApplication={selectedApplication}
          setSelectedApplicationId={setSelectedApplicationId}
          selectedApplicationId={selectedApplicationId}
          openAs={openAs}
          role={moderatorState.mod_role}
        />
      )}
      {activePopup === "MODERATOR_PREWVIEW" && (
        <ModeratorPreview
          setActivePopup={setActivePopup}
          selectedApplication={selectedApplication}
          selectedStaff={selectedStaff}
          moderatorState={moderatorState}
          onAssignModerator={onAssignModerator}
        />
      )}
      {activePopup === "PREVIEW_FORM" && (
        <PreviewAdmissionModerator
          onCloseEdit={onCloseEdit}
          setActivePopup={setActivePopup}
          selectedStaff={selectedStaff}
          moderatorState={moderatorState}
          onSelectRole={onSelectRole}
          onUpdateModerator={onUpdateModerator}
          selectedApplication={selectedApplication}
        />
      )}
      {activePopup === "LOADING" && <QLoader />}
    </>
  );
};

export default AddModerator;
