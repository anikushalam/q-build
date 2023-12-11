import React from "react";
import style from "./Backlogs.module.css";
import BacklogStudents from "./BacklogStudents/BacklogStudents";
import Standerds from "./Standerds/Standerds";
import Subjects from "./Subjects/Subjects";
import { useLocation } from "react-router-dom";
import OneExamDetail from "../Exminations/ExamFrom/OneExamDetail";

const allsubUrlTop = [
  "backlog&exam&detail",
  "backlog&exam&detail&seating",
  "backlog&exam&detail&subject",
  "department&n=backlog&exam&detail",
  "department&n=backlog&exam&detail&seating",
  "department&n=backlog&exam&detail&subject",
];
function Backlogs({ did, carryParentState, instituteId, viewAs }) {
  const getQuery = useLocation();
  // console.info("asfgdjfgsk", viewAs);
  return (
    <>
      {allsubUrlTop.includes(getQuery?.search?.substring(3)) && (
        <OneExamDetail
          carryParentState={carryParentState}
          instituteId={instituteId}
          viewAs={viewAs}
        />
      )}
      {!allsubUrlTop.includes(getQuery?.search?.substring(3)) && (
        <div className={style.backlogContainer}>
          {(getQuery.search?.substring(3) === "backlog&standard" ||
            getQuery.search?.substring(3) === "backlog&fees" ||
            getQuery.search?.substring(3) === "backlog&exam" ||
            getQuery.search?.substring(3) === "department&n=backlog&standard" ||
            getQuery.search?.substring(3) === "department&n=backlog&fees" ||
            getQuery.search?.substring(3) === "department&n=backlog&exam") && (
            <div className={style.backlog}>
              <Standerds
                carryParentState={carryParentState}
                did={did}
                instituteId={instituteId}
                viewAs={viewAs}
              />
            </div>
          )}
          {(getQuery.search?.substring(3) === "backlog&subject" ||
            getQuery.search?.substring(3) ===
              "department&n=backlog&subject") && (
            <div className={style.backlog}>
              <Subjects carryParentState={carryParentState} viewAs={viewAs} />
            </div>
          )}
          {(getQuery.search?.substring(3) === "backlog&student" ||
            getQuery.search?.substring(3) ===
              "department&n=backlog&student") && (
            <div className={`${style.backlog} ${style.students}`}>
              <BacklogStudents />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Backlogs;
