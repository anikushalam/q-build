import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./AdmissionModerator.module.css";

const ModeratorCard = ({ moderator, setOpenModeratorMenu }) => {
  const { t } = useTranslation();
  return (
    <div className={style.moderator_card}>
      <img
        src={
          moderator?.access_staff?.staffProfilePhoto
            ? `${imageShowUrl}/${moderator?.access_staff?.staffProfilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
        alt="moderator avatar"
      />
      <section className={style.moderator_card_text_container}>
        <h6>
          {`${moderator?.access_staff?.staffFirstName} ${
            moderator?.access_staff?.staffMiddleName ?? ""
          } ${moderator?.access_staff?.staffLastName}`}
        </h6>
        <p>
          {t("index_number")}
          {moderator?.access_staff?.staffROLLNO}
        </p>
        <p>
          {moderator?.access_role === "ALL_FEE_ACCESS"
            ? "Fee receipt authority"
            : moderator?.access_role === "MULTI_APP_ACCESS"
            ? "Application Manager"
            : moderator?.access_role === "INQUIRY_ACCESS"
            ? "Enquiries Section"
            : moderator?.access_role === "SCHOLARSHIP_ACCESS"
            ? "Scholarship Manager"
            : moderator?.access_role === "REFUND_ACCESS"
            ? "Access Fee Moderator"
            : moderator?.access_role === "PENDING_FEE_ACCESS"
            ? "Pending Fee Manager"
            : moderator?.access_role === "ONE_TAB_ACCESS"
            ? moderator?.active_tab?.role === "Application"
              ? "Admission Application Tab"
              : moderator?.active_tab?.role === "Selected"
              ? "Admission Selected Tab"
              : moderator?.active_tab?.role === "Confirmed"
              ? "Admission Confirmed Tab"
              : moderator?.active_tab?.role === "Allotted"
              ? "Admission Allotted Tab"
              : "Admission Cancelled Tab"
            : moderator?.access_role === "DATA_EXPORT_ACCESS"
            ? "Data Export Authority"
            : ""}
        </p>
      </section>
      <img
        src="/images/three-24-dot-icon.svg"
        alt="menu icon"
        onClick={() => setOpenModeratorMenu(moderator)}
        className={style.menu_icon}
        title="Menu"
      />
    </div>
  );
};

export default ModeratorCard;
