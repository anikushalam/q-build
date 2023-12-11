import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";

const ModeratorPreview = ({
  setActivePopup,
  selectedApplication,
  selectedStaff,
  moderatorState,
  onAssignModerator,
}) => {
  const { t } = useTranslation();

  const onBackWithArrowLeft = () => {};
  return (
    <PopupWrapper>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt="back icon"
          />

          <h6>{t("preview")}</h6>
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
            value={
              moderatorState?.mod_role === "ALL_FEE_ACCESS"
                ? "Fee receipt authority"
                : moderatorState?.mod_role === "MULTI_APP_ACCESS"
                ? "Application Manager"
                : moderatorState?.mod_role === "INQUIRY_ACCESS"
                ? "Enquiries Section"
                : "FULL_ACCESS"
            }
            openAs={"REFUND"}
          />
        </section>
        {selectedApplication?.map((app) => (
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
                  <p>{moment(app?.applicationEndDate).format("DD/MM/yyyy")}</p>
                ) : (
                  ""
                )}
              </div>
            </section>
          </div>
        ))}

        <section
          style={{
            padding: "0.8rem",
          }}
        >
          <button
            className={style.select_application_btn}
            onClick={() => setActivePopup("SELECT_APPLICATION")}
          >
            <div>{t("add_more")}</div>
            <img src="/images/forward-right-icon.svg" alt="next step" />
          </button>
          <button className={style.assign_btn} onClick={onAssignModerator}>
            {t("assign")}{" "}
          </button>
        </section>
      </div>
    </PopupWrapper>
  );
};

export default ModeratorPreview;
