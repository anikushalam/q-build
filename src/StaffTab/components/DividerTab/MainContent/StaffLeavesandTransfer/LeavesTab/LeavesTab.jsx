import React, { useEffect, useState } from "react";
import style from "./LeavesTab.module.css";
import "./LeavesTab.css";
import { useTranslation } from "react-i18next";
import Leaves from "./Leaves/Leaves";
import Transfer from "./Transfer/Transfer";
import { useSelector } from "react-redux";
import BorderBottom from "../../StaffAProfile/BorderBottom";
import UniversalTab from "../../../../../../MembersTab/staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useTransferList } from "../../../../../../hooks/institute/institute-staff-student-api";

function LeavesTab({
  staffListView,
  setStaffListView,
  replacedStaff,
  setReplaceStaffId,
}) {
  const id = useSelector((state) => state.idChange.id);
  const { t } = useTranslation();
  const { transferList, transferListRefetch } = useTransferList({
    id: id,
    skip: !id,
  });

  useEffect(() => {
    if (id) transferListRefetch();
  }, [id]);
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const tabContent = [
    {
      name: t("leaves"),
      id: 0,
    },
    {
      name: t("transfer"),
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

        {activeIndexTab === 0 && <Leaves />}
        {activeIndexTab === 1 && (
          <Transfer
            staffListView={staffListView}
            setStaffListView={setStaffListView}
            replacedStaff={replacedStaff}
            setReplaceStaffId={setReplaceStaffId}
            transferData={transferList && transferList?.transfers}
            fetch={transferListRefetch}
          />
        )}
      </div>
    </div>
  );
}

export default LeavesTab;
