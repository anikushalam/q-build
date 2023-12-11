import React, { useState } from "react";
import style from "./DepartmentSetting.module.css";
import "./DepartmentSetting.css";
import Complaints from "./Complaints/Complaints";
import { useTranslation } from "react-i18next";
import ElectionSetting from "./ElectionSetting/ElectionSetting";
import UniversalTab from "../Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

function DepartmentSetting({ did }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabList = [
    {
      name: t("complaints"),
      id: 0,
    },
    {
      name: t("setting"),
      id: 1,
    },
  ];

  return (
    <div className={style.ClassSetting}>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        setActiveIndexTab={setActiveIndex}
        showAs={false}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {activeIndex === 0 && <Complaints did={did} />}
      {activeIndex === 1 && <ElectionSetting did={did} />}
    </div>
  );
}

export default DepartmentSetting;
