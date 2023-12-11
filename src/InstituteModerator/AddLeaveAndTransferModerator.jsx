import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../Department/Institute/AssignStaff/AssignStaffModal";
import { useAddModeratorByInstitute } from "../Department/Institute/Components/DepartmentApi/depart-api";
import CustomNormalSelectInput from "../JoiningForm/Student/Form/CustomNormalSelectInput";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { imageShowUrl } from "../services/BaseUrl";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";
import QLoader from "../Loader/QLoader";
const AddLeaveAndTransferModerator = ({
  instituteId,
  onClose,
  onRefetchWhenAdd,
  openAs,
  openModeratorMenu,
  onEdit,
}) => {
  const { t } = useTranslation();
  const [activePopup, setActivePopup] = useState(
    // openAs === "EDIT" ? "PREVIEW_FORM" : "ASSIGN_ROLE"
    openAs === "EDIT" ? "PREVIEW_FORM" : "OPEN_STAFF_LIST"
  );
  const [selectedStaff, setSelectedStaff] = useState(
    openAs === "EDIT" ? openModeratorMenu?.access_staff : ""
  );
  const [moderatorState, setModeratorState] = useState({
    mod_role: openAs === "EDIT" ? openModeratorMenu?.access_role : "",
    sid: openAs === "EDIT" ? openModeratorMenu?.access_staff?._id : "",
  });
  const [filled, setFilled] = useState("");
  const [staffList, setStaffList] = useState([]);
  const [staffListId, setStaffListId] = useState([]);
  const [addModeratorByInstitute] = useAddModeratorByInstitute();

  useEffect(() => {
    if (openAs === "EDIT") {
      setModeratorState({
        mod_role: openModeratorMenu?.access_role,
        sid: openModeratorMenu?.access_staff?._id,
      });
      setSelectedStaff(openModeratorMenu?.access_staff);
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
    onClose();
  };

  const onSelectRole = (val) => {
    setModeratorState((prev) => ({
      ...prev,
      mod_role:
        val === "Leave Recommendation Authority"
          ? "LEAVE_RECOMMENDATION_ACCESS"
          : val === "Leave Review Authority"
          ? "LEAVE_REVIEW_ACCESS"
          : val === "Leave Sanction Authority"
          ? "LEAVE_SANCTION_ACCESS"
          : "",
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    if (!data["mod_role"]) errors["mod_role"] = `depart is required!`;
    if (!data["sid"]) errors["sid"] = `depart is required!`;
    return errors;
  };

  const onAssignModerator = () => {
    const validation = onValidation(moderatorState);
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
          mod_role: moderatorState.mod_role,
          staff_array:
            moderatorState.mod_role !== "LEAVE_REVIEW_ACCESS"
              ? [moderatorState.sid]
              : [],
          rev_array:
            moderatorState.mod_role === "LEAVE_REVIEW_ACCESS"
              ? [moderatorState.sid]
              : [],
          academic_department: null,
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
    const validation = onValidation(moderatorState);
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
      onEdit(moderatorState);
      onClose();
    }
  };

  const onCloseEdit = () => {
    onClose();
  };

  const onSelectMultiStaff = (staff) => {
    let staff_id = [];
    for (let data of staff) {
      staff_id.push(data?._id);
    }
    setStaffListId(staff_id);
    setStaffList(staff);
    if (openAs === "EDIT") {
      setActivePopup("PREVIEW_FORM");
    } else {
      setActivePopup("ASSIGN_ROLE");
    }
  };
  return (
    <>
      {activePopup === "OPEN_STAFF_LIST" && (
        <AssignStaffModal
          assignHead={activePopup === "OPEN_STAFF_LIST" ? true : false}
          headSelect={onSelectStaff}
          title={t("staff_list")}
          onClose={() => setActivePopup("ASSIGN_ROLE")}
          instituteId={instituteId}
          viewAs="ADMISSION_ADMIN"
          isMultiSelect
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
              <section
                className={style.selected_staff_container}
                style={{
                  cursor: "pointer",
                }}
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
                    {selectedStaff?.staffROLLNO ?? ""}
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
                    "Leave Recommendation Authority",
                    "Leave Review Authority",
                    "Leave Sanction Authority",
                  ]}
                  value={
                    moderatorState?.mod_role === "LEAVE_RECOMMENDATION_ACCESS"
                      ? "Leave Recommendation Authority"
                      : moderatorState?.mod_role === "LEAVE_REVIEW_ACCESS"
                      ? "Leave Review Authority"
                      : moderatorState?.mod_role === "LEAVE_SANCTION_ACCESS"
                      ? "Leave Sanction Authority"
                      : ""
                  }
                  onClick={onSelectRole}
                  errorShow={filled["mod_role"]}
                />
              </section>

              <section
                className={style.selected_staff_container}
                style={{
                  cursor: "pointer",
                }}
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
                  {selectedStaff?.staffFirstName ? (
                    <h6>
                      {`${selectedStaff?.staffFirstName} ${
                        selectedStaff?.staffMiddleName ?? ""
                      } ${selectedStaff?.staffLastName}`}
                    </h6>
                  ) : (
                    <h6>
                      {t("select_recommendation_staff")}{" "}
                      {filled["sid"] ? (
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          * required
                        </span>
                      ) : (
                        ""
                      )}
                    </h6>
                  )}
                  <p>
                    {t("index_number")}
                    {selectedStaff?.staffROLLNO ?? ""}
                  </p>
                </div>
              </section>

              <section
                style={{
                  padding: "0.8rem",
                }}
              >
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
                    "Leave Recommendation Authority",
                    "Leave Review Authority",
                    "Leave Sanction Authority",
                  ]}
                  value={
                    moderatorState?.mod_role === "LEAVE_RECOMMENDATION_ACCESS"
                      ? "Leave Recommendation Authority"
                      : moderatorState?.mod_role === "LEAVE_REVIEW_ACCESS"
                      ? "Leave Review Authority"
                      : moderatorState?.mod_role === "LEAVE_SANCTION_ACCESS"
                      ? "Leave Sanction Authority"
                      : ""
                  }
                  onClick={onSelectRole}
                  errorShow={filled["mod_role"]}
                />
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

export default AddLeaveAndTransferModerator;
