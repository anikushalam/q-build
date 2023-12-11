import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../Department/Institute/AssignStaff/AssignStaffModal";
import {
  useAddModeratorByInstitute,
  useAllDepartmentCondition,
} from "../Department/Institute/Components/DepartmentApi/depart-api";
import CustomNormalSelectInput from "../JoiningForm/Student/Form/CustomNormalSelectInput";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { imageShowUrl } from "../services/BaseUrl";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";
import QLoader from "../Loader/QLoader";
import JoinFormInput from "../JoiningForm/Student/Form/JoinFormInput";
import CustomSelectDepartment from "../JoiningForm/Student/Form/CustomSelectDepartment";
const AddInstituteModerator = ({
  instituteId,
  onClose,
  onRefetchWhenAdd,
  openAs,
  openModeratorMenu,
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
    social_media_password_query:
      openAs === "EDIT" ? openModeratorMenu?.social_media_password_query : "",
  });
  const [deprtment, setDeprtment] = useState(
    openAs === "EDIT" ? openModeratorMenu?.academic_department : ""
  );
  const [filled, setFilled] = useState("");
  const [addModeratorByInstitute] = useAddModeratorByInstitute();
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) allDepartmentRefetch();
  }, [instituteId, allDepartmentRefetch]);
  useEffect(() => {
    if (openAs === "EDIT") {
      setModeratorState({
        mod_role: openModeratorMenu?.access_role,
        sid: openModeratorMenu?.access_staff?._id,
        social_media_password_query:
          openModeratorMenu?.access_staff?.social_media_password_query,
      });
      setSelectedStaff(openModeratorMenu?.access_staff);
      setDeprtment(openModeratorMenu?.academic_department);
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

  const onSelectRole = (val) => {
    setModeratorState((prev) => ({
      ...prev,
      mod_role:
        val === "Certificate Authority"
          ? "CERTIFICATE_ACCESS"
          : val === "Student Section"
          ? "STUDENT_PROMOTE_ACCESS"
          : val === "Examination Section"
          ? "EXAM_MANAGER_ACCESS"
          : val === "Social Media Authority"
          ? "SOCIAL_MEDIA_ACCESS"
          : val === "Site Authority"
          ? "SITE_MANAGE_ACCESS"
          : val === "Id Card Section"
          ? "ID_CARD_ACCESS"
          : val === "Academic Administrator"
          ? "ACADEMIC_ADMINISTRATOR_ACCESS"
          : val === "Leave and Transfer Authority"
          ? "LEAVING_AND_TRANSFER_ACCESS"
          : "",
    }));
  };

  const onDepartmentSelect = (val) => {
    setDeprtment(val);
  };

  const onValidation = (data, dept) => {
    const errors = {};
    if (data["mod_role"] === "SOCIAL_MEDIA_ACCESS") {
      for (let obj in data) {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    } else if (data["mod_role"] === "ACADEMIC_ADMINISTRATOR_ACCESS") {
      if (!dept) errors["depart"] = `depart is required!`;
    } else {
    }
    if (!data["mod_role"]) errors["mod_role"] = `depart is required!`;
    return errors;
  };

  const onAssignModerator = () => {
    const validation = onValidation(moderatorState, deprtment?._id);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setActivePopup("LOADING");
      addModeratorByInstitute({
        id: instituteId,
        addModerator: {
          ...moderatorState,
          academic_department:
            moderatorState?.mod_role === "ACADEMIC_ADMINISTRATOR_ACCESS"
              ? deprtment?._id
              : null,
        },
      })
        .then(() => {
          onRefetchWhenAdd();
          onClose();
          setActivePopup("");
        })
        .catch({});
    }
  };

  const onUpdateModerator = () => {
    const validation = onValidation(moderatorState, deprtment?._id);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      onEdit(moderatorState, deprtment?._id);
      onClose();
    }
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
                    "Certificate Authority",
                    "Student Section",
                    "Examination Section",
                    "Id Card Section",
                    "Social Media Authority",
                    "Academic Administrator",
                    "Leave and Transfer Authority",
                  ]}
                  value={
                    moderatorState?.mod_role === "CERTIFICATE_ACCESS"
                      ? "Certificate Authority"
                      : moderatorState?.mod_role === "STUDENT_PROMOTE_ACCESS"
                      ? "Student Section"
                      : moderatorState?.mod_role === "EXAM_MANAGER_ACCESS"
                      ? "Examination Section"
                      : moderatorState?.mod_role === "SOCIAL_MEDIA_ACCESS"
                      ? "Social Media Authority"
                      : moderatorState?.mod_role === "SITE_MANAGE_ACCESS"
                      ? "Site Authority"
                      : moderatorState?.mod_role === "ID_CARD_ACCESS"
                      ? "Id Card Section"
                      : moderatorState?.mod_role ===
                        "ACADEMIC_ADMINISTRATOR_ACCESS"
                      ? "Academic Administrator"
                      : moderatorState?.mod_role ===
                        "LEAVING_AND_TRANSFER_ACCESS"
                      ? "Leave and Transfer Authority"
                      : ""
                  }
                  onClick={onSelectRole}
                  errorShow={filled["mod_role"]}
                />
                {moderatorState?.mod_role === "SOCIAL_MEDIA_ACCESS" ? (
                  <JoinFormInput
                    labelText={t("add_moderator_passward")}
                    placeholder={t("add_moderator_passward_placeholder")}
                    name={"social_media_password_query"}
                    value={moderatorState?.social_media_password_query}
                    type={"text"}
                    onChange={(e) =>
                      setModeratorState((prev) => ({
                        ...prev,
                        social_media_password_query: e.target.value,
                      }))
                    }
                    errorShow={filled["social_media_password_query"]}
                  />
                ) : null}
                {moderatorState?.mod_role ===
                "ACADEMIC_ADMINISTRATOR_ACCESS" ? (
                  <CustomSelectDepartment
                    selectLabel={t("select_department")}
                    selectedValue={t("select_department")}
                    options={allDepartment?.institute?.depart ?? []}
                    onClick={onDepartmentSelect}
                    defalutValue={deprtment?.dName}
                    viewAs="NORMAL_FILTER"
                    openAs="PROMOTE"
                    errorShow={filled["depart"]}
                  />
                ) : null}

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
        <>
          <PopupWrapper onClose={onCloseEdit}>
            <div className={style.assign_role_container}>
              <section className={style.assign_role_title}>
                <img
                  src="/images/arrow-left-fees-icon.svg"
                  onClick={onCloseEdit}
                  alt="back icon"
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
                    "Certificate Authority",
                    "Student Section",
                    "Examination Section",
                    "Id Card Section",
                    "Social Media Authority",
                    "Academic Administrator",
                    "Leave and Transfer Authority",
                  ]}
                  value={
                    moderatorState?.mod_role === "CERTIFICATE_ACCESS"
                      ? "Certificate Authority"
                      : moderatorState?.mod_role === "STUDENT_PROMOTE_ACCESS"
                      ? "Student Section"
                      : moderatorState?.mod_role === "EXAM_MANAGER_ACCESS"
                      ? "Examination Section"
                      : moderatorState?.mod_role === "SOCIAL_MEDIA_ACCESS"
                      ? "Social Media Authority"
                      : moderatorState?.mod_role === "SITE_MANAGE_ACCESS"
                      ? "Site Authority"
                      : moderatorState?.mod_role === "ID_CARD_ACCESS"
                      ? "Id Card Section"
                      : moderatorState?.mod_role ===
                        "ACADEMIC_ADMINISTRATOR_ACCESS"
                      ? "Academic Administrator"
                      : moderatorState?.mod_role ===
                        "LEAVING_AND_TRANSFER_ACCESS"
                      ? "Leave and Transfer Authority"
                      : ""
                  }
                  onClick={onSelectRole}
                  errorShow={filled["mod_role"]}
                />
                {moderatorState?.mod_role === "SOCIAL_MEDIA_ACCESS" ? (
                  <JoinFormInput
                    labelText={t("add_moderator_passward")}
                    placeholder={t("add_moderator_passward_placeholder")}
                    name={"social_media_password_query"}
                    value={moderatorState?.social_media_password_query}
                    type={"text"}
                    onChange={(e) =>
                      setModeratorState((prev) => ({
                        ...prev,
                        social_media_password_query: e.target.value,
                      }))
                    }
                    errorShow={filled["social_media_password_query"]}
                  />
                ) : null}
                {moderatorState?.mod_role ===
                "ACADEMIC_ADMINISTRATOR_ACCESS" ? (
                  <CustomSelectDepartment
                    selectLabel={t("select_department")}
                    selectedValue={t("select_department")}
                    options={allDepartment?.institute?.depart ?? []}
                    onClick={onDepartmentSelect}
                    defalutValue={deprtment?.dName}
                    viewAs="NORMAL_FILTER"
                    openAs="PROMOTE"
                    errorShow={filled["depart"]}
                  />
                ) : null}
                <button
                  className={style.assign_btn}
                  onClick={onUpdateModerator}
                >
                  {t("update")}{" "}
                </button>
              </section>
            </div>
          </PopupWrapper>
        </>
      )}
      {activePopup === "LOADING" && <QLoader />}
    </>
  );
};

export default AddInstituteModerator;
