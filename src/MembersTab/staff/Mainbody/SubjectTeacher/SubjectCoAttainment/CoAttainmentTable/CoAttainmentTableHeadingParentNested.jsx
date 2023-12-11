import React, { useEffect, useState } from "react";
import style from "./CoAttainmentTable.module.css";
import CoAttainmentTableHeadingNested from "./CoAttainmentTableHeadingNested";

const CoAttainmentTableHeadingParentNested = ({ subjectAttainment }) => {
  const [firstRow, setFirstRow] = useState(["Name of CO"]);
  const [firstRowWidth, setFirstRowWidth] = useState(null);
  const [sedondRow, setSecondRow] = useState(["Assesment Tool"]);
  const [thirdRow, setThirdRow] = useState(["Total Marks"]);
  useEffect(() => {
    if (subjectAttainment?.length > 0) {
      let frow = ["Name of CO"];
      let srow = ["Assesment Tool"];
      let trow = ["Total Marks"];
      let width = {};
      for (let attainment of subjectAttainment) {
        frow.push(attainment?.attainment_name);

        for (let sub_attainment of attainment?.attainment_assign) {
          srow.push(sub_attainment?.attainment_name);
          trow.push(sub_attainment?.attainment_mark);
          if (width[attainment?.attainment_name])
            width[attainment?.attainment_name] += 14;
          else width[attainment?.attainment_name] = 14;
        }
      }
      setFirstRowWidth(width);
      setFirstRow(frow);
      setSecondRow(srow);
      setThirdRow(trow);
    }
  }, [subjectAttainment]);
  return (
    <div className={style.tabel_heading_nested}>
      <CoAttainmentTableHeadingNested
        firstRowWidth={firstRowWidth}
        firstRow={firstRow}
        sedondRow={sedondRow}
        thirdRow={thirdRow}
      />
    </div>
  );
};

export default CoAttainmentTableHeadingParentNested;
