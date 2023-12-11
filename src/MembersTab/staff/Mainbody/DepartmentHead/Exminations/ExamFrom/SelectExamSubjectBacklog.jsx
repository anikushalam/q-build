import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import { useDepartmentAllSubjectMasterBacklog } from "../../../../../../hooks/member_tab/department-api";
import ExamSubjectCard from "../SeatingArrangement/ExamSubjectCard";

const SelectExamSubjectBacklog = ({ cmid, onSubjectSelect, bid, onBack }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [subjectList, setSubjectList] = useState([]);
  const {
    departmentAllSubjectMasterBacklog,
    departmentAllSubjectMasterBacklogRefetch,
  } = useDepartmentAllSubjectMasterBacklog({
    data: { cmid: cmid, page: 1, limit: 50 },
    skip: !cmid,
  });
  useEffect(() => {
    if (cmid) departmentAllSubjectMasterBacklogRefetch();
  }, [cmid, departmentAllSubjectMasterBacklogRefetch]);

  useEffect(() => {
    if (departmentAllSubjectMasterBacklog?.classMaster?.length) {
      setSubjectList(departmentAllSubjectMasterBacklog?.classMaster);
      setShowingDataLoading(false);
    } else if (departmentAllSubjectMasterBacklog?.classMaster?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllSubjectMasterBacklog?.classMaster]);
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
        <h6>{t("select_subject")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      />

      {subjectList?.map((subject) => (
        <ExamSubjectCard
          key={subject._id}
          subject={subject}
          isMaster={true}
          onSelect={onSubjectSelect}
        />
      ))}
      {!showingDataLoading && !subjectList?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No any subject found"}
          subtitle={"Please make sure you have created subject master."}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default SelectExamSubjectBacklog;
