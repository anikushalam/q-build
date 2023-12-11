import { useTranslation } from "react-i18next";
import style from "./FinanceModerator.module.css";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import {
  assestsFeedUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import FinanceModeratoMenu from "./FinanceModeratoMenu";
import { useState } from "react";

const FinanceModeratorCard = ({ moderator, instituteId, financeId }) => {
  const { t } = useTranslation();
  const [moderatorMenu, setModeratorMenu] = useState("");

  const onMenu = () => {
    setModeratorMenu(moderator);
  };
  const onClose = () => {
    setModeratorMenu("");
  };
  return (
    <>
      <div className={style.moderator_card}>
        <img
          src={
            moderator?.access_staff?.staffProfilePhoto
              ? `${imageShowUrl}/${moderator?.access_staff?.staffProfilePhoto}`
              : `${assestsFeedUrl}/feed-user-avatar.svg`
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
            {t("index_number")} {" : "}
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
              : moderator?.access_role === "DATA_EXPORT_ACCESS"
              ? "Scholarship Administrator"
              : ""}
          </p>
        </section>
        <img
          src={`${assestsUserFinanceUrl}/menu.svg`}
          alt="menu icon"
          onClick={onMenu}
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {moderatorMenu && (
        <FinanceModeratoMenu
          onClose={onClose}
          financeId={financeId}
          openModeratorMenu={moderatorMenu}
          instituteId={instituteId}
        />
      )}
    </>
  );
};

export default FinanceModeratorCard;
