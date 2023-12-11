import React, { useEffect, useState } from "react";
import { useClassAllStudent } from "../../../../../../hooks/member_tab/class-api";
import style from "./Behaviour.module.css";
import BehaviourForm from "./BehaviourForm/BehaviourForm";
import StudentList from "./StudentList/StudentList";

function Behaviour({ cid }) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [studentBehaviour, setStudentBehaviour] = useState(null);

  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: !cid,
  });

  useEffect(() => {
    if (cid) classAllStudentRefetch();
  }, [cid, classAllStudentRefetch]);

  // console.info("THis is beahviour data", classAllStudent);
  return (
    <div className={style.checklist}>
      <div className={style.form}>
        <BehaviourForm
          studentBehaviour={studentBehaviour}
          onRefetch={classAllStudentRefetch}
        />
      </div>

      <div className={style.list}>
        <StudentList
          clickedIndex={clickedIndex}
          channgeIndex={(w) => setClickedIndex(w)}
          behaviourList={classAllStudent?.classes?.ApproveStudent}
          setStudentBehaviour={setStudentBehaviour}
        />
      </div>
    </div>
  );
}

export default Behaviour;
