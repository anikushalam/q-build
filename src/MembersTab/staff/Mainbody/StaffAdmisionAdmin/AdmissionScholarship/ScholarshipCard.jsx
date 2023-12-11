import React from "react";
import { useTranslation } from "react-i18next";
import AdmissionTabChangeLink from "../AdmissionTabChangeLink";
import style from "./AdmissionScholarship.module.css";

const ScholarshipCard = ({
  setOpenScholarshipMenu,
  scholarship,
  carryParentState,
  accessRole,
  viewAs,
  callApi,
}) => {
  const { t } = useTranslation();

  const onOpenMenu = (e) => {
    e.preventDefault();
    setOpenScholarshipMenu(scholarship);
  };
  return (
    <AdmissionTabChangeLink
      carryParentState={{
        ...carryParentState,
        scholarship: scholarship,
        viewAs: viewAs,
      }}
      activeTab={`scholarship&n=${scholarship?.scholarship_name}`}
      accessRole={accessRole}
      callApi={callApi}
    >
      <div className={style.scholarship_card_container}>
        <h6>{scholarship?.scholarship_name}</h6>
        <h6>{t("fund_corpus")}</h6>
        <h6>
          {t("total_corpus")} {scholarship?.fund_corpus?.total_corpus ?? 0}
        </h6>
        <h6>
          {" "}
          {t("unused")} {scholarship?.fund_corpus?.unused_corpus ?? 0}
        </h6>
        {viewAs === "COMPLETED" ? (
          ""
        ) : (
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={onOpenMenu}
            className={style.menu_icon}
            title="Menu"
          />
        )}
      </div>
    </AdmissionTabChangeLink>
  );
};

export default ScholarshipCard;
