import React, { useState } from "react";
import style from "./LeavesTransfer.module.css";
import LeavesTab from "./LeavesTab/LeavesTab";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
const AllStaffList = React.lazy(() => import("./AllStaffList/AllStaffList"));
function LeavesTransfer() {
  const [staffListView, setStaffListView] = useState(false);
  const [replacedStaff, setReplacedStaff] = useState();
  const [replaceStaffId, setReplaceStaffId] = useState("");

  return (
    <div className={style.complaints}>
      <div className={style.complaintList}>
        <LeavesTab
          staffListView={staffListView}
          setStaffListView={setStaffListView}
          replacedStaff={replacedStaff}
          setReplaceStaffId={setReplaceStaffId}
        />
      </div>
      <div className={style.complaintDetail}>
        {staffListView && (
          <CustomSuspense>
            <AllStaffList
              staffListView={staffListView}
              setStaffListView={setStaffListView}
              setReplacedStaff={setReplacedStaff}
              replaceStaffId={replaceStaffId}
              replacedStaff={replacedStaff}
            />
          </CustomSuspense>
        )}
      </div>
    </div>
  );
}

export default LeavesTransfer;
