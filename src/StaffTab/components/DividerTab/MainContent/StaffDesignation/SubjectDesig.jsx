import React, { useEffect, useState } from "react";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import SubjectDesigCard from "./Cards/SubjectDesigCard";
import style from "./StaffDesignation.module.css";
import { useOneDepartmentAllSubjectOneClass } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";

const SubjectDesig = ({ clsId, currentSid }) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { oneClassAllSubject, oneClassAllSubjectRefetch } =
    useOneDepartmentAllSubjectOneClass({
      cid: clsId,
      skip: !clsId,
    });
  useEffect(() => {
    if (oneClassAllSubject?.classes?.subject) {
      setShowingDataLoading(false);
    }
  }, [oneClassAllSubject?.classes?.subject]);

  useEffect(() => {
    if (clsId) oneClassAllSubjectRefetch();
  }, [clsId, oneClassAllSubjectRefetch]);

  return (
    <div className={style.subject_container}>
      {oneClassAllSubject?.classes?.subject?.map((sub) => (
        <SubjectDesigCard sub={sub} key={sub?._id} currentSid={currentSid} />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default SubjectDesig;
