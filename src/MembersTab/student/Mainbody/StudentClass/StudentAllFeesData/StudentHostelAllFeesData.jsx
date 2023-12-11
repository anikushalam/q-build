import React, { useEffect, useState } from "react";
import style from "./StudentAllFeesData.module.css";
import { useGetStudentFeesArrayQuery } from "../../../../../services/qvipleAPI";
import { useRenderStudentAdmissionFees } from "../../../../../hooks/member_tab/admission-api";
import StudentAdmissionFees from "./StudentAdmissionFees";
import { useParams } from "react-router-dom";
import StudentHostelFeesHeader from "./StudentHostelFeesHeader";
const StudentHostelAllFeesData = ({ viewAs, sid }) => {
  const params = useParams();
  const [value, setValue] = useState(0);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { data: feesQuery, refetch: feesQueryRefetch } =
    useGetStudentFeesArrayQuery(`${sid}`, { skip: !sid });
  const { sudentAdmissionFeesList, sudentAdmissionFeesListRefetch } =
    useRenderStudentAdmissionFees({
      sid: sid,
      skip: !sid,
    });
  useEffect(() => {
    if (sid) {
      feesQueryRefetch();
      sudentAdmissionFeesListRefetch();
      setShowingDataLoading(true);
    }
  }, [sid, sudentAdmissionFeesListRefetch, feesQueryRefetch]);
  useEffect(() => {
    if (sudentAdmissionFeesList?.array) {
      setShowingDataLoading(false);
    } else if (sudentAdmissionFeesList?.array?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [sudentAdmissionFeesList?.array]);

  const onTabHandler = (val) => {
    setValue(val);
  };

  const addTotal = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
  };
  return (
    <div className={style.student_alll_fees_data}>
      <StudentHostelFeesHeader
        onTabHandler={onTabHandler}
        value={value}
        padiFees={addTotal(
          feesQuery?.student?.studentPaidFeeCount || 0,
          feesQuery?.student?.admissionPaidFeeCount || 0,
          feesQuery?.student?.hostelPaidFeeCount || 0
        )}
        remainingFees={addTotal(
          feesQuery?.student?.studentRemainingFeeCount || 0,
          feesQuery?.student?.admissionRemainFeeCount || 0,
          feesQuery?.student?.hostelRemainFeeCount || 0
        )}
        applicableRemainingFees={feesQuery?.student?.applicable_fees_pending}
        scholarshipFees={feesQuery?.paid_by_government ?? 0}
      />
      {value === 0 && (
        <StudentAdmissionFees
          viewAs={viewAs}
          sudentAdmissionFeesList={sudentAdmissionFeesList}
          sudentAdmissionFeesListRefetch={sudentAdmissionFeesListRefetch}
          feesQueryRefetch={feesQueryRefetch}
          showingDataLoading={showingDataLoading}
        />
      )}
    </div>
  );
};

export default StudentHostelAllFeesData;
