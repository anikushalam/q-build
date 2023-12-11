import React, { useEffect, useState } from "react";
import style from "./CoAttainmentTable.module.css";
import CoAttainmentTableHeadingNested from "./CoAttainmentTableHeadingNested";

const CoAttainmentStudentCard = ({ student, index }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (student?.co_wise) {
      let arr = [
        `${student?.studentFirstName ?? ""} ${
          student?.studentMiddleName ?? ""
        } ${student?.studentLastName ?? ""}`,
      ];
      for (let co in student?.co_wise) {
        if (student?.co_assignment_wise) {
          arr.push(...student?.co_wise[co], student?.co_assignment_wise[co]);
        } else {
          arr.push(...student?.co_wise[co]);
        }
      }
      setState(arr);
    }
  }, [student?.co_wise]);
  return (
    <div className={style.attainment_student_card}>
      {/* <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      >
        <div className={style.table_text_inner_center}>{index + 1}</div>
      </div> */}
      <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      >
        {" "}
        <div className={style.table_text_inner_center}>
          {student?.studentROLLNO}
        </div>
      </div>
      <div
        className={style.table_heading_text}
        style={{
          width: "10rem",
        }}
      >
        {" "}
        <div className={style.table_text_inner_center}>
          {student?.studentGRNO ?? " - "}
        </div>
      </div>
      <div className={style.tabel_heading_nested}>
        <CoAttainmentTableHeadingNested firstRow={state} isStudent />
      </div>
    </div>
  );
};

export default CoAttainmentStudentCard;
