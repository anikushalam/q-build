import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import UniversalTab from "../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import LeavesAndTransferAllRequest from "./Request/LeavesAndTransferAllRequest";
import LeavesAndTransferAllCOff from "./Request/LeavesAndTransferAllCOff";
import LeavesAndTransferAllIssue from "./Request/LeavesAndTransferAllIssue";

const LeavesAndTransferRequest = ({ carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const tabList = [
    {
      name: t("leave_request"),
      id: 0,
      url: "member/leavestransfer?a=request",
      is_active: "enabled",
    },
    {
      name: t("issued"),
      id: 1,
      url: "member/leavestransfer?a=request&n=issued",
      is_active: "enabled",
    },
    {
      name: t("manage_c_off"),
      id: 2,
      url: "member/leavestransfer?a=request&n=manage-off",
      is_active: "enabled",
    },
  ];
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          !searchParams.get("n")
            ? 0
            : searchParams.get("n") === "issued"
            ? 1
            : 2
        }
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "33.3%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          //   marginTop: "0.5rem",
        }}
      />

      {!searchParams.get("n") ? (
        <LeavesAndTransferAllRequest instituteId={instituteId} />
      ) : searchParams.get("n") === "issued" ? (
        <LeavesAndTransferAllIssue instituteId={instituteId} />
      ) : (
        <LeavesAndTransferAllCOff instituteId={instituteId} />
      )}
    </>
  );
};

export default LeavesAndTransferRequest;
