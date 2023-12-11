import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../services/BaseUrl";
import style from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/Moderator/AdmissionModerator.module.css";

const InstituteModeratorCard = ({ moderator, setOpenModeratorMenu }) => {
  const { t } = useTranslation();
  return (
    <div
      className={style.moderator_card}
      style={{
        position: "relative",
      }}
    >
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
          {moderator?.access_role === "CERTIFICATE_ACCESS"
            ? "Certificate Authority"
            : moderator?.access_role === "STUDENT_PROMOTE_ACCESS"
            ? "Student Section"
            : moderator?.access_role === "EXAM_MANAGER_ACCESS"
            ? "Examination Section"
            : moderator?.access_role === "SOCIAL_MEDIA_ACCESS"
            ? "Social Media Authority"
            : moderator?.access_role === "SITE_MANAGE_ACCESS"
            ? "Site Authority"
            : moderator?.access_role === "ID_CARD_ACCESS"
            ? "Id Card Section"
            : moderator?.access_role === "ACADEMIC_ADMINISTRATOR_ACCESS"
            ? "Academic Administrator"
            : moderator?.access_role === "LEAVING_AND_TRANSFER_ACCESS"
            ? "Leave and Transfer Authority"
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

export default InstituteModeratorCard;
