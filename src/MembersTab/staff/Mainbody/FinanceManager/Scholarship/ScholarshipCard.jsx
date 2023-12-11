import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import FinanceTabChangeLink from "../FinanceTabChangeLink";

const ScholarshipCard = ({ scholarship, carryParentState, callApi }) => {
  const { t } = useTranslation();

  return (
    <FinanceTabChangeLink
      carryParentState={{
        ...carryParentState,
        scholarship: scholarship,
      }}
      activeTab={`scholarship&n=${scholarship?.scholarship_name}`}
      callApi={callApi}
    >
      <div className={style.scholarship_card_container}>
        <h6>{scholarship?.scholarship_name}</h6>
        <h6>{t("fund_corpus")}</h6>
        <h6>{t("total_corpus")}</h6>
        <h6> {t("unused")} </h6>
      </div>
    </FinanceTabChangeLink>
  );
};

export default ScholarshipCard;
