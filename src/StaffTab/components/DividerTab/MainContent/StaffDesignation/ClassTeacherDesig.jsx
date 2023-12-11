import React, { useEffect, useState } from "react";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useAllClass } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import ClassTeacherDesigCard from "./Cards/ClassTeacherDesigCard";
import style from "./StaffDesignation.module.css";

const ClassTeacherDesig = ({ batchId, currentSid }) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { allClass, allClassRefetch } = useAllClass({
    bid: batchId,
    skip: !batchId,
  });

  useEffect(() => {
    if (allClass?.batch?.classroom) {
      setShowingDataLoading(false);
    }
  }, [allClass?.batch?.classroom]);

  useEffect(() => {
    if (batchId) allClassRefetch();
  }, [batchId, allClassRefetch]);

  return (
    <div className={style.cls_container}>
      {allClass?.batch?.classroom?.map((cls) => (
        <ClassTeacherDesigCard
          cls={cls}
          key={cls?._id}
          currentSid={currentSid}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default ClassTeacherDesig;
