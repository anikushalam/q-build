import React, { useEffect, useState } from "react";
import style from "./CoAttainmentTable.module.css";
import CoAttainmentTableHeadingNested from "./CoAttainmentTableHeadingNested";

const CoAttainmentTotal = ({ subjectAttainment }) => {
  const [firstRow, setFirstRow] = useState(["Total Marks"]);
  const [sedondRow, setSecondRow] = useState(["Average Marks"]);
  const [thirdRow, setThirdRow] = useState(["% class Average"]);
  const [fourthRow, setFourthRow] = useState(["Total No of Students"]);
  const [fifthRow, setFifthRow] = useState(["Total No of Students Absent"]);
  const [sixthdRow, setSixthRow] = useState(["Total No of Students Present"]);
  useEffect(() => {
    if (subjectAttainment?.length > 0) {
      let frow = ["Total Marks"];
      let srow = ["Average Marks"];
      let trow = ["% class Average"];
      let frrow = ["Total No of Students"];
      let ftrow = ["Total No of Students Absent"];
      let sxrow = ["Total No of Students Present"];
      for (let attainment of subjectAttainment) {
        for (let sub_attainment of attainment?.attainment_assign) {
          frow.push(sub_attainment?.total_marks?.mark);
          srow.push(sub_attainment?.avg_marks);
          trow.push(sub_attainment?.cls_avg_marks);
          frrow.push(sub_attainment?.student_count ?? 0);
          ftrow.push(sub_attainment?.present_student_count ?? 0);
          sxrow.push(sub_attainment?.absent_student_count ?? 0);
        }
      }
      setFirstRow(frow);
      setSecondRow(srow);
      setThirdRow(trow);
      setFourthRow(frrow);
      setFifthRow(ftrow);
      setSixthRow(sxrow);
    }
  }, [subjectAttainment]);
  return (
    <div
      className={style.table_heading}
      style={{
        height: "auto",
      }}
    >
      {/* <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      ></div> */}

      <div
        className={style.table_heading_text}
        style={{
          width: "4rem",
        }}
      ></div>

      <div
        className={style.table_heading_text}
        style={{
          width: "10rem",
        }}
      ></div>

      <div className={style.tabel_heading_nested}>
        <CoAttainmentTableHeadingNested
          isStudent="TOTAL"
          firstRow={fourthRow}
        />
        <CoAttainmentTableHeadingNested isStudent="TOTAL" firstRow={fifthRow} />
        <CoAttainmentTableHeadingNested
          isStudent="TOTAL"
          firstRow={sixthdRow}
        />
        <CoAttainmentTableHeadingNested isStudent="TOTAL" firstRow={firstRow} />
        <CoAttainmentTableHeadingNested
          isStudent="TOTAL"
          firstRow={sedondRow}
        />
        <CoAttainmentTableHeadingNested isStudent="TOTAL" firstRow={thirdRow} />
      </div>
    </div>
  );
};

export default CoAttainmentTotal;
