import React, { useEffect, useState } from "react";
import style from "./UnsolvedList.module.css";
import { useSelector } from "react-redux";
import { useStaffComplaintList } from "../../../../../../hooks/institute/institute-staff-student-api";
import OneComplaint from "./OneComplaint";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

function SolvedList({
  setOnComplaintId,
  setShowDetails,
  onComplaintId,
  refetchStatus,
  setRefetchStatus,
}) {
  const ids = useSelector((state) => state.idChange);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { staffComplaintList, staffComplaintListRefetch } =
    useStaffComplaintList({
      data: {
        id: ids?.id,
        status: "Solved",
      },
      skip: !ids?.id,
    });

  useEffect(() => {
    if (ids?.id || refetchStatus.solved) {
      setShowingDataLoading(true);
      staffComplaintListRefetch();
      setRefetchStatus((prev) => ({
        ...prev,
        solved: false,
      }));
    }
  }, [ids?.id, refetchStatus.solved, staffComplaintListRefetch]);
  useEffect(() => {
    if (staffComplaintList?.complaints) setShowingDataLoading(false);
  }, [staffComplaintList?.complaints]);
  useEffect(() => {
    setTimeout(() => setShowingDataLoading(false), 2000);
  }, []);
  // console.info("ths is sa", staffComplaintList);
  return (
    <div className={style.list}>
      {staffComplaintList?.complaints?.map((complaint, index) => (
        <OneComplaint
          key={index}
          setShowDetails={setShowDetails}
          setOnComplaintId={setOnComplaintId}
          complaint={complaint}
          onComplaintId={onComplaintId}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default SolvedList;
