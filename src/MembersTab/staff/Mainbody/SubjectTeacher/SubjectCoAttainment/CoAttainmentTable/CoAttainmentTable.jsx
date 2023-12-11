import React, { useEffect, useState } from "react";
import style from "./CoAttainmentTable.module.css";
import { useGetCopoAttainmentTable } from "../../../../../../hooks/member_tab/subject-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import CoAttainmentTableHeading from "./CoAttainmentTableHeading";
import CoAttainmentTableHeadingParentNested from "./CoAttainmentTableHeadingParentNested";
import CoAttainmentStudentCard from "./CoAttainmentStudentCard";
import CoAttainmentTotal from "./CoAttainmentTotal";
import CoAttainmentWeightage from "./CoAttainmentWeightage";
import CoAttainmentClassAverageIa from "./CoAttainmentClassAverageIa";
import CoAttainmentClassAverageEa from "./CoAttainmentClassAverageEa";
import CalculationCoAttainment from "./CalculationCoAttainment";
import ComplianceCoAttainment from "./ComplianceCoAttainment";
const CoAttainmentTable = ({ sid }) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getCopoAttainmentTable, getCopoAttainmentTableRefetch } =
    useGetCopoAttainmentTable({
      data: {
        sid: sid,
      },
      skip: !sid,
    });
  useEffect(() => {
    if (sid) getCopoAttainmentTableRefetch();
  }, [sid, getCopoAttainmentTableRefetch]);

  useEffect(() => {
    if (
      getCopoAttainmentTable?.subject_attainment?.length ||
      getCopoAttainmentTable?.subject_attainment?.length === 0
    ) {
      setShowingDataLoading(false);
    } else {
    }
  }, [getCopoAttainmentTable?.subject_attainment]);
  return (
    <>
      <div className={style.tabel_container}>
        <CoAttainmentTableHeading>
          <CoAttainmentTableHeadingParentNested
            subjectAttainment={
              getCopoAttainmentTable?.subject_attainment ?? null
            }
          />
        </CoAttainmentTableHeading>

        {getCopoAttainmentTable?.all_students?.map((student, index) => (
          <CoAttainmentStudentCard
            student={student}
            index={index}
            key={student?._id}
          />
        ))}
        <CoAttainmentTotal
          subjectAttainment={getCopoAttainmentTable?.subject_attainment ?? null}
        />

        {showingDataLoading && <QvipleLoading />}
      </div>
      <CoAttainmentWeightage
        coWeightage={getCopoAttainmentTable?.co_weightage ?? null}
      />
      <CoAttainmentClassAverageIa
        outerClsAverageIa={getCopoAttainmentTable?.outer_cls_average_ia ?? null}
      />
      <CoAttainmentClassAverageEa
        outerClsAverageIa={getCopoAttainmentTable?.outer_cls_average_ea ?? null}
      />
      <CalculationCoAttainment
        calculationCoAttainment={
          getCopoAttainmentTable?.calculation_co_attainment ?? null
        }
      />
      <ComplianceCoAttainment
        complianceCoAttainment={
          getCopoAttainmentTable?.co_quality_compliance ?? null
        }
      />
    </>
  );
};

export default CoAttainmentTable;
