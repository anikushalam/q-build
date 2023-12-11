import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UniversalTab from "../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const StaffMentorTabsAttendance = ({ onPresentHandler, onAbsentHandler }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabList = [
    {
      name: t("present"),
      id: 0,
    },
    {
      name: t("absent"),
      id: 1,
    },
  ];

  const onTabChange = (val) => {
    if (val === 1) {
      onAbsentHandler();
    } else {
      onPresentHandler();
    }
    setActiveIndex(val);
  };
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "50%",
        }}
        setActiveIndexTab={onTabChange}
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

export default StaffMentorTabsAttendance;
