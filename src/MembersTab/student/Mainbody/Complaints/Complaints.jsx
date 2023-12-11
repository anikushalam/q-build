import React, { useState } from "react";
import style from "./Complaints.module.css";
import ComplaintList from "./ComplaintList/ComplaintList";
import ComplaintDetails from "./ComplaintDetails/ComplaintDetails";
import NewComplain from "./NewComplain/NewComplain";
import { useStudentComplaintListQuery } from "../../../../services/joining/joinApi";

function Complaints({ studentId }) {
  // const [compId, setCompId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [cDetail, setCDetails] = useState("");
  const [toast, setToast] = useState(false);
  const { data: complaintData, refetch } =
    useStudentComplaintListQuery(studentId);
  // console.info(complaintData);

  return (
    <div className={style.complaints}>
      <div className={style.complaintDetail}>
        {showDetails && <ComplaintDetails cid={cDetail} />}
        {!showDetails && (
          <NewComplain
            studentId={studentId}
            toast={toast}
            setToast={setToast}
            refetch={refetch}
          />
        )}
      </div>
      <div className={style.complaintList}>
        <ComplaintList
          setShowDetails={setShowDetails}
          complaints={complaintData?.complaints}
          setCDetails={setCDetails}
          refetch={refetch}
        />
      </div>
    </div>
  );
}

export default Complaints;
