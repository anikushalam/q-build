import React, { useState } from "react";
import style from "./PreviousReport.module.css";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PreviousReport from "./PreviousReport";
import PreviousBacklog from "./PreviousBacklog";
const PreviousYear = ({ studentId }) => {
  const { t } = useTranslation();
  const tabList = [
    {
      name: t("yearly_reports"),
      id: 0,
    },
    {
      name: t("backlog"),
      id: 1,
    },
  ];

  const [activeIndexTab, setActiveIndexTab] = useState(0);
  return (
    <>
      <UniversalTab
        showAs={false}
        tabList={tabList}
        customStyleTab={{
          width: "50%",
        }}
        setActiveIndexTab={setActiveIndexTab}
        activeIndexTab={activeIndexTab}
      />
      <BorderBottom />

      {activeIndexTab === 0 && <PreviousReport studentId={studentId} />}
      {activeIndexTab === 1 && <PreviousBacklog studentId={studentId} />}
    </>
  );
};

export default PreviousYear;
