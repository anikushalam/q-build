import React from "react";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RemainingTab = ({ carryParentState, pageOpenAs }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("os_fees"),
      id: 0,
      url: "member/admission?a=pending",
    },
    {
      name: t("applicable_os"),
      id: 1,
      url: "member/admission?a=pending&applicable",
    },
  ];
  const tabListInstitute = [
    {
      name: t("os_fees"),
      id: 0,
      url: "admission?a=pending",
    },
    {
      name: t("applicable_os"),
      id: 1,
      url: "admission?a=pending&applicable",
    },
  ];
  return (
    <>
      <UniversalTab
        tabList={pageOpenAs === "INSTITUTE" ? tabListInstitute : tabList}
        activeIndexTab={getQuery.search?.substring(3) === "pending" ? 0 : 1}
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "50%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
    </>
  );
};

export default RemainingTab;
