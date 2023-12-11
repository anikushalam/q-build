import React, { useState } from "react";
import style from "./Complaints.module.css";
import ComplaintList from "./ComplaintList/ComplaintList";
import ComplaintDetails from "./ComplaintDetails/ComplaintDetails";
import NewComplain from "./NewComplain/NewComplain";
import { useStaffComplaintListQuery } from "../../../../services/joining/joinApi";
import { useEffect } from "react";

function Complaints({ staffId }) {
  // const [compId, setCompId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [cDetail, setCDetails] = useState();
  const [toast, setToast] = useState(false);
  const { data: complaintData, refetch } = useStaffComplaintListQuery(staffId, {
    skip: !staffId,
  });
  // console.info(complaintData?.complaints);

  useEffect(() => {
    refetch();
  }, [toast]);

  return (
    <div className={style.complaints}>
      <div className={style.complaintDetail}>
        {showDetails && <ComplaintDetails cDetail={cDetail} />}
        {!showDetails && (
          <NewComplain staffId={staffId} toast={toast} setToast={setToast} />
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
