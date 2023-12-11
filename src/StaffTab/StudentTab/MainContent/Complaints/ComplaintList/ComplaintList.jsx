import React, { useState } from "react";
import style from "./ComplaintList.module.css";
import "./ComplainList.css";
import { useTranslation } from "react-i18next";
import UnsolvedList from "./UnsolvedList";
import SolvedList from "./SolvedList";
import UniversalTab from "../../../../../MembersTab/staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";

function ComplaintList({
  setComplaintId,
  setShowDetails,
  complaintId,
  refetchStatus,
  setRefetchStatus,
}) {
  const { t } = useTranslation();
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const tabContent = [
    {
      name: t("unsolved"),
      id: 0,
    },
    {
      name: t("solved"),
      id: 1,
    },
  ];
  return (
    <div className={style.complaintList}>
      <div className={style.listHead}>
        <UniversalTab
          tabList={tabContent}
          activeIndexTab={activeIndexTab}
          setActiveIndexTab={setActiveIndexTab}
          customStyleTab={{ width: "100%" }}
        />
        <BorderBottom customStyle={{ width: "100%" }} />
        {activeIndexTab === 0 && (
          <UnsolvedList
            setShowDetails={setShowDetails}
            setComplaintId={setComplaintId}
            complaintId={complaintId}
            setRefetchStatus={setRefetchStatus}
            refetchStatus={refetchStatus}
          />
        )}
        {activeIndexTab === 1 && (
          <SolvedList
            setShowDetails={setShowDetails}
            setComplaintId={setComplaintId}
            complaintId={complaintId}
            setRefetchStatus={setRefetchStatus}
            refetchStatus={refetchStatus}
          />
        )}
      </div>
    </div>
  );
}

export default ComplaintList;
