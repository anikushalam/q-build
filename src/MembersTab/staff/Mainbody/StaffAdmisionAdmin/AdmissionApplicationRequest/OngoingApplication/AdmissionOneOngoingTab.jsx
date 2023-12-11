import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const AdmissionOneOngoingTab = ({
  carryParentState,
  accessRole,
  accessTpye,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("application"),
      id: 0,
      url: "member/admission?a=ongoing&n=application",
      is_active:
        ["MULTI_APP_ACCESS"].includes(accessRole) || !accessRole
          ? "enabled"
          : ["ONE_TAB_ACCESS"].includes(accessRole)
          ? accessTpye === "Application"
            ? "enabled"
            : "disabled"
          : "enabled",
    },
    {
      name: t("selected"),
      id: 1,
      url: "member/admission?a=ongoing&n=select",
      is_active:
        ["MULTI_APP_ACCESS"].includes(accessRole) || !accessRole
          ? "enabled"
          : ["ONE_TAB_ACCESS"].includes(accessRole)
          ? accessTpye === "Selected"
            ? "enabled"
            : "disabled"
          : "enabled",
    },
    {
      name: t("confirmed"),
      id: 2,
      url: "member/admission?a=ongoing&n=confirm",
      is_active:
        ["MULTI_APP_ACCESS"].includes(accessRole) || !accessRole
          ? "enabled"
          : ["ONE_TAB_ACCESS"].includes(accessRole)
          ? accessTpye === "Confirmed"
            ? "enabled"
            : "disabled"
          : "enabled",
    },
    {
      name: t("allotted"),
      id: 3,
      url: "member/admission?a=ongoing&n=allot",
      is_active:
        ["MULTI_APP_ACCESS"].includes(accessRole) || !accessRole
          ? "enabled"
          : ["ONE_TAB_ACCESS"].includes(accessRole)
          ? accessTpye === "Allotted"
            ? "enabled"
            : "disabled"
          : "enabled",
    },
    {
      name: t("cancelled"),
      id: 4,
      url: "member/admission?a=ongoing&n=cancel",
      is_active:
        ["MULTI_APP_ACCESS"].includes(accessRole) || !accessRole
          ? "enabled"
          : ["ONE_TAB_ACCESS"].includes(accessRole)
          ? accessTpye === "Cancelled"
            ? "enabled"
            : "disabled"
          : "enabled",
    },
  ];

  const tabListInstitute = [
    {
      name: t("application"),
      id: 0,
      url: "admission?a=ongoing&n=application",
      is_active: "enabled",
    },
    {
      name: t("selected"),
      id: 1,
      url: "admission?a=ongoing&n=select",
      is_active: "enabled",
    },
    {
      name: t("confirmed"),
      id: 2,
      url: "admission?a=ongoing&n=confirm",
      is_active: "enabled",
    },
    {
      name: t("allotted"),
      id: 3,
      url: "admission?a=ongoing&n=allot",
      is_active: "enabled",
    },
    {
      name: t("cancelled"),
      id: 4,
      url: "admission?a=ongoing&n=cancel",
      is_active: "enabled",
    },
  ];

  return (
    <>
      <UniversalTab
        tabList={pageOpenAs === "INSTITUTE" ? tabListInstitute : tabList}
        activeIndexTab={
          getQuery.search?.substring(13) === "application"
            ? 0
            : getQuery.search?.substring(13) === "select"
            ? 1
            : getQuery.search?.substring(13) === "confirm" ||
              getQuery.search?.substring(13) === "mulitple"
            ? 2
            : getQuery.search?.substring(13) === "allot"
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

export default AdmissionOneOngoingTab;
