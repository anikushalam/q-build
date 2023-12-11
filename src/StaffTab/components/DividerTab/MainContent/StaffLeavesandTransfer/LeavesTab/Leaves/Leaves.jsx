import React, { useEffect, useState } from "react";
import style from "./Leaves.module.css";
import { useSelector } from "react-redux";
import { useStaffLeaveList } from "../../../../../../../hooks/institute/institute-staff-student-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import EachLeave from "./EachLeave";

function Leaves() {
  const id = useSelector((state) => state.idChange.id);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { staffLeaveList, staffLeaveListRefetch } = useStaffLeaveList({
    data: {
      id: id,
      page: 1,
      limit: 10,
    },
    skip: !id,
  });

  useEffect(() => {
    if (id) {
      setShowingDataLoading(true);
      staffLeaveListRefetch();
    }
  }, [id, staffLeaveListRefetch]);
  useEffect(() => {
    if (staffLeaveList?.allLeave) {
      setShowingDataLoading(false);
    }
  }, [staffLeaveList?.allLeave]);
  return (
    <div className={style.leaves}>
      {staffLeaveList?.allLeave?.map((leave, index) => (
        <EachLeave
          key={index}
          leave={leave}
          onStaffLeaveListRefetch={staffLeaveListRefetch}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default Leaves;
