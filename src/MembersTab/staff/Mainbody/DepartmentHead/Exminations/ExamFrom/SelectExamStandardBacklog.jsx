import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useDepartmentAllClassMasterBacklog } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import ExamClassCard from "../SeatingArrangement/ExamClassCard";

const SelectExamStandardBacklog = ({ onBack, did, onStandardSelect }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [standardList, setStandardList] = useState([]);
  const {
    departmentAllClassMasterBacklog,
    departmentAllClassMasterBacklogRefetch,
  } = useDepartmentAllClassMasterBacklog({
    data: { did: did, page: 1, limit: 50 },
    skip: !did,
  });
  useEffect(() => {
    if (did) departmentAllClassMasterBacklogRefetch();
  }, [did, departmentAllClassMasterBacklogRefetch]);

  useEffect(() => {
    if (departmentAllClassMasterBacklog?.classMaster?.length) {
      setStandardList(departmentAllClassMasterBacklog?.classMaster);
      setShowingDataLoading(false);
    } else if (departmentAllClassMasterBacklog?.classMaster?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllClassMasterBacklog?.classMaster]);
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBack}
          alt="back"
        />
        <h6>{t("select_standard")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />

      {standardList?.map((cls) => (
        <ExamClassCard
          key={cls._id}
          cls={cls}
          isMaster={true}
          onSelect={onStandardSelect}
        />
      ))}
      {!showingDataLoading && !standardList?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "4rem",
          }}
          title={"No any standard found"}
          subtitle={"Please make sure you have created standard."}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default SelectExamStandardBacklog;
