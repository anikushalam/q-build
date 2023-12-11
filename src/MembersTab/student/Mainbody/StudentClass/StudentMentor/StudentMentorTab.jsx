import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import UniversalTab from "../../../../staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const StudentMentorTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const tabList = [
    {
      name: t("complaints"),
      id: 0,
      url: "member/student/class?a=complaint",
      is_active: "disabled",
    },
    {
      name: t("queries"),
      id: 1,
      url: "member/student/class?a=mentor",
      is_active: "enabled",
    },
    {
      name: t("meetings"),
      id: 2,
      url: "member/student/class?a=mentor&n=meeting",
      is_active: "enabled",
    },
  ];
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          searchParams.get("a") === "complaint"
            ? 0
            : searchParams.get("n") === "meeting"
            ? 2
            : 1
        }
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
          marginBottom: "0.7rem",
        }}
      />
    </>
  );
};

export default StudentMentorTab;
