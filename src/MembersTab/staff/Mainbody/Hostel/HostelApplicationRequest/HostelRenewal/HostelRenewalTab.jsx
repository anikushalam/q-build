import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const HostelRenewalTab = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("application"),
      id: 0,
      url: "member/hostel?a=request&renewal&application",
    },
    {
      name: t("selected"),
      id: 1,
      url: "member/hostel?a=request&renewal&select",
    },
    {
      name: t("confirmed"),
      id: 2,
      url: "member/hostel?a=request&renewal&renewed",
    },
    {
      name: t("allotted"),
      id: 3,
      url: "member/hostel?a=request&renewal&allot",
    },
    {
      name: t("cancelled"),
      id: 4,
      url: "member/hostel?a=request&renewal&cancel",
    },
  ];

  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          getQuery.search?.substring(19) === "application"
            ? 0
            : getQuery.search?.substring(19) === "select"
            ? 1
            : getQuery.search?.substring(19) === "renewed"
            ? 2
            : getQuery.search?.substring(19) === "allot"
            ? 3
            : 4
        }
        // setActiveIndexTab={setActiveIndex}
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "20%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          //   marginTop: "0.5rem",
        }}
      />
    </>
  );
};

export default HostelRenewalTab;
