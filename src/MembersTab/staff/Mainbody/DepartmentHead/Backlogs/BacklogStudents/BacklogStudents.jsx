import React, { useState } from "react";
import style from "../Standerds/Standerds.module.css";
// import ExamItem from "./ExamItem";
import Tabs from "./Tabs";
import CurrentBacklog from "./CurrentBacklog";
import DropoutStudent from "./DropoutStudent";
import { useLocation } from "react-router-dom";

function BacklogStudents() {
  const getQuery = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className={style.BacklogStudentsbody}>
        {activeIndex === 0 && (
          <CurrentBacklog subjectMasterId={getQuery.state?.subId} />
        )}
        {activeIndex === 1 && (
          <DropoutStudent subjectMasterId={getQuery.state?.subId} />
        )}
      </div>
      {activeIndex === 2 && (
        <div className={style.BacklogStudentsbody}>{/* <ExamItem /> */}</div>
      )}
    </div>
  );
}

export default BacklogStudents;
