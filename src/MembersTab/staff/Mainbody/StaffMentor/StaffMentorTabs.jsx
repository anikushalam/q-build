import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import UniversalTab from "../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const StaffMentorTabs = ({ carryParentState }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const tabList = [
    {
      name: t("tab_mentees"),
      id: 0,
      url: "member/mentor",
      is_active: "enabled",
    },
    {
      name: t("queries"),
      id: 1,
      url: "member/mentor?a=queries",
      is_active: "enabled",
    },
    {
      name: t("meeting"),
      id: 2,
      url: "member/mentor?a=meeting",
      is_active: "enabled",
    },
    {
      name: t("feedback"),
      id: 3,
      url: "member/mentor?a=feedback",
      is_active: "disabled",
    },
  ];
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          !searchParams.get("a")
            ? 0
            : searchParams.get("a") === "queries"
            ? 1
            : searchParams.get("a") === "meeting"
            ? 2
            : 3
        }
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "25%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.7rem",
        }}
      />
    </>
  );
};

export default StaffMentorTabs;
