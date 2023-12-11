import React, { useState, useEffect } from "react";
import { useGetBacklogExamList } from "../../../../../../hooks/member_tab/department-api";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import DepartmentExamCard from "../../Exminations/ExamList/DepartmentExamCard";
import ExamFrom from "../../Exminations/ExamFrom/ExamFrom";
import style from "../../Exminations/Exminations.module.css";
import { useTranslation } from "react-i18next";
const ExamList = ({ did, carryParentState, viewAs }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [examList, setExamList] = useState([]);
  const [add, setAdd] = useState(false);
  const { getBacklogExamList, getBacklogExamListRefetch } =
    useGetBacklogExamList({
      did: did,
      skip: !did,
    });

  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getBacklogExamListRefetch();
    }
  }, [did, getBacklogExamListRefetch]);

  useEffect(() => {
    if (getBacklogExamList?.exam?.length) {
      setExamList(getBacklogExamList?.exam);
      setShowingDataLoading(false);
    } else if (getBacklogExamList?.exam?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [getBacklogExamList?.exam]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  return (
    <>
      <div className={style.add_new_container}>
        <p className={style.add_new_exam} onClick={onToggleAdd}>
          {t("create_new_exam")}
        </p>
      </div>
      {examList?.map((exam) => (
        <DepartmentExamCard
          key={exam._id}
          exam={exam}
          carryParentState={carryParentState}
          viewAs={viewAs}
        />
      ))}
      {!showingDataLoading && !getBacklogExamList?.exam?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "5rem",
            height: "inherit",
          }}
          title={"No any exams found"}
          subtitle={"Please make sure you have created exam."}
        />
      )}

      {add && (
        <ExamFrom
          onClose={onToggleAdd}
          did={did}
          onRefetch={getBacklogExamListRefetch}
          openAs="BACKLOG"
        />
      )}
    </>
  );
};

export default ExamList;
