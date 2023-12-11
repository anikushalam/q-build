import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./FinanceModerator.module.css";

const FinanceModeratorCard = ({ moderator, setOpenModeratorMenu }) => {
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
          {moderator?.access_role === "CASH_RECEIPT_ACCESS"
            ? "Cash Receipt Section"
            : moderator?.access_role === "INVENTORY_ACCESS"
            ? "Inventories Section"
            : moderator?.access_role === "FEE_MASTER_ACCESS"
            ? "Fees Master Section"
            : moderator?.access_role === "PAYROLL_ACCESS"
            ? "Payroll Section"
            : moderator?.access_role === "DEPOSIT_ACCESS"
            ? "Deposit Section"
            : moderator?.access_role === "BANK_ACCOUNT_ACCESS"
            ? "Bank Account Section"
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

export default FinanceModeratorCard;
