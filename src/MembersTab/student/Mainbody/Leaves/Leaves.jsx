import React from "react";
import style from "./Leaves.module.css";
import LeaveList from "./LeaveList/LeaveList";
import { useStudentLeaveListQuery } from "../../../../services/joining/joinApi";
import NewLeave from "./NewLeave/NewLeave";
import { useState } from "react";
import LeaveDetails from "./LeaveDetails/LeaveDetails";

function Leaves({ studentId }) {
  const { data: studentLeaveData, refetch } =
    useStudentLeaveListQuery(studentId);
  const [showDetails, setShowDetails] = useState(false);
  const [cDetail, setCDetails] = useState({
    dates: [],
    months: [],
    years: [],
    content: "",
    status: "",
  });

  return (
    <div className={style.complaints}>
      <div className={style.complaintDetail}>
        {showDetails && <LeaveDetails cDetail={cDetail} />}
        {!showDetails && <NewLeave studentId={studentId} refetch={refetch} />}
      </div>
      <div className={style.complaintList}>
        <LeaveList
          studentId={studentId}
          setShowDetails={setShowDetails}
          setCDetails={setCDetails}
          cDetail={cDetail}
          studentLeaveData={studentLeaveData}
          refetch={refetch}
        />
      </div>
    </div>
  );
}

export default Leaves;
