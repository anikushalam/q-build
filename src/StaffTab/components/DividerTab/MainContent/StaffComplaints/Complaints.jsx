import React, { useState } from "react";
import style from "./Complaints.module.css";
import ComplaintList from "./ComplaintList/ComplaintList";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
const ComplaintDetails = React.lazy(() =>
  import("./ComplaintDetails/ComplaintDetails")
);
function Complaints() {
  const [onComplaintId, setOnComplaintId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [refetchStatus, setRefetchStatus] = useState(false);
  return (
    <div className={style.complaints}>
      <div className={style.complaintList}>
        <ComplaintList
          setShowDetails={setShowDetails}
          setOnComplaintId={setOnComplaintId}
          onComplaintId={onComplaintId}
          setRefetchStatus={setRefetchStatus}
          refetchStatus={refetchStatus}
        />
      </div>
      <div className={style.complaintDetail}>
        {showDetails && (
          <CustomSuspense>
            <ComplaintDetails
              setShowDetails={setShowDetails}
              onComplaintId={onComplaintId}
              setRefetchStatus={setRefetchStatus}
            />
          </CustomSuspense>
        )}
      </div>
    </div>
  );
}

export default Complaints;
